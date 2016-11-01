/* global _  */

import PageView from 'abstract/pageView';
import template from 'templates/index.hbs';
import HomepageDatas from 'jsons/index.json';

class IndexView extends PageView {

	constructor(options = {}, datas) {
		console.log('IndexView constructor');

		_.defaults(options, {
			template: template,
			// These options are assigned to the instance by Backbone
			events: {
			 'click a': 'onLinkClicked'
			}
		});

		super(options, HomepageDatas);
	}

	initialize(options, data) {
		console.log('IndexView initialize', this);
		super.initialize(options, data);
	}

	initDOM() {

		super.initDOM();
		// PageView.prototype.initDOM.call(this);
	}

	setupDOM() {

	}

	onResize() {

	}

}

export default IndexView;
