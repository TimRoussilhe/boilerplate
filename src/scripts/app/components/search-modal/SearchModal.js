import AbstractModalComponent from 'abstract/component/DOM/modal';
import Tpl from './search-modal.twig';

import SearchModalItem from 'components/search-modal-item/SearchModalItem';

import {trackEvent} from 'utils/analytics';

// Utils
import {fitAsset} from 'utils/misc';

class SearchModal extends AbstractModalComponent {

    constructor(options) {
        super(options);

        this.template = Tpl;

        this.events = {
            'input input[name=search]': ::this._onChangeSearch,
            'submit form': ::this._onSubmit,
            'click button[type=submit]': ::this._onSubmit
        };

        this.watchers = {
            'search.predictions': ::this._onPredictions,
            'search.error': ::this._onErrors,
            'search.isLoading': ::this._isLoading,
            'search.isLoadingPrediction': ::this.render,
            'search.results': ::this._onResult,
            'search.results_ngos': ::this._onResultNGOs,
            'search.experience_item': ::this._onExperienceItem
        };

        this.currentHref = null;

        this.aResultItems = [];
        this.aResultNGOsItems = [];
        this.experienceItem = null;

        this.currentValue = null;

        this.dateTyped = Date.now();
        this.stoTyped = null;

        this.currentPrediction = null;
    }

    initDOM() {
        this.$els.image = this.$el.find('.bg img');
        this.$els.placeholder = this.$el.find('.placeholder');
        this.$els.input = this.$el.find('input[name=search]');
        this.$els.submit = this.$el.find('button[type=submit]');
        this.$els.inputContainer = this.$el.find('.input-container');
        this.$els.currentSearch = this.$el.find('.current-search');
        this.$els.nearTitle = this.$el.find('.near-result');
        this.$els.nearExperienceTitle = this.$el.find('.near-result-experience');
        this.$els.nearNGOsTitle = this.$el.find('.near-result-ngos');
        this.$els.list = this.$el.find('.list');
        this.$els.listExperience = this.$el.find('.list-experience');
        this.$els.listNGOs = this.$el.find('.list-ngos');
    }

    onResize(browser) {
        console.log('onResize');
        if (this.$els.image[0] !== undefined) {
            const conf = {
                width: this.$els.image[0].dataset.width,
                height: this.$els.image[0].dataset.height,
                containerWidth: browser.width,
                containerHeight: browser.height
            };
            const size = fitAsset(conf);
            this.$els.image.css({
                width: size.w,
                height: size.h,
                top: size.top,
                left: size.left
            });
            // console.log('image size', size, 'image conf', conf);
        }
    }

    navigate(url, options = {}) {
        // stop navigation to trigger once hidden
        if (this.states.isShown) {
            this.currentHref = url;
            this.actions.close();
        } else {
            super.navigate(url);
        }
    }

    bindEvents() {
        this.handlers.keydown = ::this._onKeyDown;
        // this.handlers.onOverlayClicked = ::this._onOverlayClicked;
        document.addEventListener('keydown', this.handlers.keydown, false);
        // this.$els.overlay.on('click', this.handlers.onOverlayClicked);
        super.bindEvents();
    }

    unbindEvents() {
        document.removeEventListener('keydown', this.handlers.keydown, false);
        super.unbindEvents();
    }

    onShown() {
        // give autofocus
        this.$els.input.focus();

        super.onShown();
    }

    onHidden() {
        super.onHidden();

        // navigate now
        if (this.currentHref) {
            setTimeout(() => {
                this.navigate(this.currentHref);
            }, 300);
        }
    }

    _onKeyDown(e) {
        if (e.keyCode === 9 || e.keyCode === 39) {
            let predictions = this.getState().get('search').get('predictions');
            if (predictions) {
                predictions = predictions.get('description').replace(', United States', '');

                this.$els.input.val(predictions);
                this.$els.placeholder.text(predictions);
                this.$els.currentSearch.text(predictions);
            }
        }
    }

    _onChangeSearch(e) {
        this.currentValue = e.currentTarget.value;
        const dateType = Date.now();

        if (this.stoTyped) window.clearTimeout(this.stoTyped);

        // Debounce to not call the API all the time
        if (this.dateTyped && dateType - this.dateTyped > 1000) {
            this.dateTyped = dateType;
            this.actions.autocomplete(this.currentValue);
        } else {
            this.stoTyped = setTimeout(() => {
                this.actions.autocomplete(this.currentValue);
            }, 300);
        }
        this.render();
    }

    _isLoading(isLoading) {
        this.actions.isLoading(isLoading);
        this.render();
    }

    _onPredictions(predictions) {
        if (!this.states.isShown) return;

        // set error
        const error = this.getState().get('search').get('error');
        if (error !== (!predictions && this.currentValue)) {
            this.actions.error(!predictions && this.currentValue);
        } else if (!predictions && this.currentValue.match(/[a-z]/i) && this.currentValue.match(/[0-9]/i)) {
            // alphabet letters found in postal code
            this.actions.error(true);
        }

        this.render();
    }

    _onErrors(error) {
        this.render();
    }

    _onResult(results) {
        return new Promise((resolve, reject) => {
            // protection, if same result...
            let check = false;

            if (!this.aResultItems.length || !results) check = true;

            if (results) {
                // console.log('checkign result');
                // if one different result, good to go!
                this.aResultItems.forEach((searchItem, i) => {
                    // console.log('searchItem.data.id !== results[i].id', searchItem.data.id, results[i].id);
                    if (!results[i] || searchItem.data.id !== results[i].id) check = true;
                });
            }

            if (!check) {
                this.render();
                resolve();
                return;
            }

            // console.log('_onResult', results);

            // if previous results, hide and remove them
            if (this.aResultItems.length) {
                const hidePromises = [];

                this.aResultItems.forEach((searchItem) => {
                    hidePromises.push(searchItem.hide());
                });

                Promise.all(hidePromises).then(() => {
                    // Now, dispose
                    this.aResultItems.forEach((searchItem) => {
                        searchItem.dispose();
                    });

                    this.aResultItems.length = 0;
                    this.aResultItems = [];

                    this._showResult(results, resolve);
                });
            } else {
                this._showResult(results, resolve);
            }
        });
    }

    _showResult(results, resolve) {
        if (!results) {
            // all good!
            // display an no result message?
            this.actions.block(false);
            resolve();
            return;
        }

        results.forEach((dataItem, i) => {
            // console.log('dataItem', dataItem);
            // add total item for delay anim
            dataItem.totalItems = results.length;
            dataItem.index = i;
            const searchItem = new SearchModalItem({data: dataItem, actions: {navigate: ::this._navigateFromItem}});
            this.aResultItems.push(searchItem);
        });

        // console.log('this.aResultItems', this.aResultItems);

        // now, init them
        const initPromises = [];

        this.aResultItems.forEach((searchItem) => {
            initPromises.push(searchItem.init());
        });

        Promise.all(initPromises).then(() => {
            // append them!
            const $els = [];
            this.aResultItems.forEach((searchItem) => {
                $els.push(searchItem.el);
            });

            this.$els.list.append($els);

            // Now, show them :D
            const showPromises = [];

            this.aResultItems.forEach((searchItem) => {
                showPromises.push(searchItem.show());
            });

            // for title show/hide
            this.render();

            Promise.all(showPromises).then(() => {
                // all good!
                resolve();
                this.actions.block(false);
            });
        });
    }

    _onExperienceItem(dataItem) {
        // check..
        let check = false;

        if (!this.experienceItem || !dataItem) check = true;

        if (dataItem && this.experienceItem && this.experienceItem.data.id !== dataItem.get('id')) {
            check = true;
        }

        if (!check) return;

        // console.log('_onExperienceItem', dataItem);

        // hide current
        if (this.experienceItem) {
            this.experienceItem.hide().then(() => {
                this.experienceItem.dispose();
                this.experienceItem = null;

                this._showExperienceItem(dataItem);
            });
        } else {
            this._showExperienceItem(dataItem);
        }
    }

    _showExperienceItem(dataItem) {
        if (!dataItem) {
            this.actions.block(false);
            return;
        }

        dataItem.totalItems = 1;
        dataItem.index = 0;
        this.experienceItem = new SearchModalItem({data: dataItem.toJS(), actions: {navigate: ::this._navigateFromItem}});

        this.experienceItem.init().then(() => {
            this.$els.listExperience.append(this.experienceItem.el);

            // for title show/hide
            this.render();

            this.experienceItem.show().then(() => {
                // it's all good man.
            });
        });
    }

    _onResultNGOs(results) {
        return new Promise((resolve, reject) => {
            // protection, if same result...
            let check = false;

            if (!this.aResultNGOsItems.length || !results) check = true;

            if (!check) {
                this.render();
                resolve();
                return;
            }

            // console.log('_onResult', results);

            // if previous results, hide and remove them
            if (this.aResultNGOsItems.length) {
                const hidePromises = [];

                this.aResultNGOsItems.forEach((searchItem) => {
                    hidePromises.push(searchItem.hide());
                });

                Promise.all(hidePromises).then(() => {
                    // Now, dispose
                    this.aResultNGOsItems.forEach((searchItem) => {
                        searchItem.dispose();
                    });

                    this.aResultNGOsItems.length = 0;
                    this.aResultNGOsItems = [];

                    this._showResultNGOs(results, resolve);
                });
            } else {
                this._showResultNGOs(results, resolve);
            }
        });
    }

    _showResultNGOs(results, resolve) {
        if (!results) {
            // all good!
            // display an no result message?
            this.actions.block(false);
            resolve();
            return;
        }

        results.forEach((dataItem, i) => {
            // console.log('dataItem', dataItem);
            // add total item for delay anim
            dataItem.totalItems = results.length;
            dataItem.index = i;
            const searchItem = new SearchModalItem({data: dataItem, actions: {navigate: ::this._navigateFromItem}});
            this.aResultNGOsItems.push(searchItem);
        });

        // now, init them
        const initPromises = [];

        this.aResultNGOsItems.forEach((searchItem) => {
            initPromises.push(searchItem.init());
        });

        Promise.all(initPromises).then(() => {
            // append them!
            const $els = [];
            this.aResultNGOsItems.forEach((searchItem) => {
                $els.push(searchItem.el);
            });

            this.$els.listNGOs.append($els);

            // Now, show them :D
            const showPromises = [];

            this.aResultNGOsItems.forEach((searchItem) => {
                showPromises.push(searchItem.show());
            });

            // for title show/hide
            this.render();

            Promise.all(showPromises).then(() => {
                // all good!
                resolve();
                this.actions.block(false);
            });
        });
    }

    _navigateFromItem(url) {
        this.navigate(url);
    }

    _onSubmit(e) {
        e.preventDefault();
        let predictions = this.getState().get('search').get('predictions');
        const isBlocking = this.getState().get('app').get('isBlocking');

        // If postal code
        if (!predictions && !isNaN(parseInt(this.currentValue, 10))) {
            predictions = this.currentValue; // could still be wrong
        } else if (predictions) {
            predictions = predictions.get('description').replace(', United States', '');
        }

        if (!predictions && this.currentValue.match(/[a-z]/i) && this.currentValue.match(/[0-9]/i)) {
            return;
        }

        if (this.currentPrediction === predictions) {
            console.log('SAME RESULT');
            return;
        }

        if (!predictions || isBlocking) return;

        this.currentPrediction = predictions;

        trackEvent({category: 'search', action: 'submit', label: predictions});

        // All good!
        // console.log('all oood man predictions', predictions);
        // use the current prediction as value
        this.$els.input.val(predictions);
        this.$els.placeholder.text(predictions);
        this.$els.currentSearch.text(predictions);

        // remove current results!
        const p = this._onResult(null);
        const pNGOs = this._onResultNGOs(null);
        this._onExperienceItem(null);

        const aPromises = [p, pNGOs];

        // for show/hide titles
        this.$els.nearNGOsTitle.removeClass('show');
        this.$els.nearExperienceTitle.removeClass('show');
        this.$els.nearTitle.removeClass('show');

        Promise.all(aPromises).then(() => {
            this.actions.search(predictions);
        });
    }

    render() {
        const isBlocking = this.getState().get('app').get('isBlocking');
        if (!this.states.isShown || isBlocking) return;

        // predictions
        let predictions = this.getState().get('search').get('predictions');
        if (predictions) predictions = predictions.get('description').replace(', United States', '');

        // Error
        let error = this.getState().get('search').get('error');

        if (!predictions && this.currentValue && this.currentValue.match(/[a-z]/i) && this.currentValue.match(/[0-9]/i) && this.currentValue.length > 1) {
            error = true;
        } else if (!isNaN(parseInt(this.currentValue, 10))) {
            // If postal code, no error and no predictions
            predictions = this.currentValue;
            // predictions = this.getState().get('search').get('predictions').get('description').replace(', United States', '');
            error = false;
        }

        const isLoading = this.getState().get('search').get('isLoading');
        const isLoadingPrediction = this.getState().get('search').get('isLoadingPrediction');
        const isSubmittedOnce = this.getState().get('search').get('isSubmittedOnce');
        const experienceItem = this.getState().get('search').get('experience_item');
        const results = this.getState().get('search').get('results');
        const resultsNGOs = this.getState().get('search').get('results_ngos');

        // Placeholder + submit button
        if (predictions) {
            // console.log('>> placeholder', predictions);
            this.$els.placeholder.text(predictions);
            this.$els.submit.addClass('show');
        } else if (!predictions && error) {
            // console.log('<< empty placeholder', predictions);
            this.$els.placeholder.empty();
            this.$els.submit.removeClass('show');
        } else {
            this.$els.placeholder.text(this.data.placeholder);
            this.$els.submit.removeClass('show');
        }

        // If doesn't match the prediction, but still valid
        if (predictions && !error && predictions.toLowerCase().indexOf(this.currentValue.toLowerCase()) === -1) {
            // console.log('<< <<< empty placeholder', predictions);
            this.$els.placeholder.empty();
        }

        // Errors
        error ? this.$el.addClass('error') : this.$el.removeClass('error');
        isSubmittedOnce ? this.$el.addClass('submitted-once') : this.$el.removeClass('submitted-once');
        isLoading ? this.$el.addClass('is-loading') : this.$el.removeClass('is-loading');

        // console.log('error', error);

        experienceItem ? this.$els.nearExperienceTitle.addClass('show') : this.$els.nearExperienceTitle.removeClass('show');
        experienceItem ? this.$els.listExperience.addClass('show') : this.$els.listExperience.removeClass('show');
        results && results.size ? this.$els.nearTitle.addClass('show') : this.$els.nearTitle.removeClass('show');
        results && results.size ? this.$els.list.addClass('show') : this.$els.list.removeClass('show');
        resultsNGOs && resultsNGOs.size ? this.$els.nearNGOsTitle.addClass('show') : this.$els.nearNGOsTitle.removeClass('show');
        resultsNGOs && resultsNGOs.size ? this.$els.listNGOs.addClass('show') : this.$els.listNGOs.removeClass('show');
        isLoadingPrediction ? this.$els.placeholder.addClass('hide') : this.$els.placeholder.removeClass('hide');

        (isSubmittedOnce && this.currentValue !== predictions) ? this.$el.addClass('new-search') : this.$el.removeClass('new-search');
    }

    hideComponent() {
        // unsubscribe now
        this.unsubscribe();

        this.aResultItems.forEach((searchItem) => {
            searchItem.hide();
        });

        super.hideComponent();
    }

    dispose() {
        this.aResultItems.forEach((searchItem) => {
            searchItem.dispose();
        });

        this.aResultItems.length = 0;
        this.aResultItems = [];

        super.dispose();
    }

}

export default SearchModal;
