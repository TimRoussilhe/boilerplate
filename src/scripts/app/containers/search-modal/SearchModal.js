/* global google */

import AbstractModalContainer from 'abstract/container/modal';
import SearchModal from 'components/search-modal/SearchModal';

// Selectors
import {getRoute} from 'containers/app/selectors';
import {isFeatured} from 'selectors/cities';
import {getCachedResult} from './selectors';

// Constants
import {PLACES_END_POINT, SEARCH_END_POINT, DISTANCE_END_POINT, GMAPS_KEY} from 'constants/api';
import {PARADE_DETAIL, PARADE_EXPERIENCE} from 'constants/locations';
import {BAR_LOADER} from 'containers/loader/constants';

// Actions
import {
    setPrediction,
    isLoadingSearch,
    setListSearch,
    setResultSearch,
    setResultNGOsSearch,
    setExperienceItemSearch,
    isSubmittedOnceSearch,
    isLoadingPredictionSearch,
    setListCachedResult,
    isBlockingSearch,
    resetSearch,
    setErrorSearch
} from './actions';
import {showLoader, hideLoader, setPctLoading} from 'containers/loader/actions';

// Utils
import {stringify} from 'utils/query-string';
import {loadJSON} from 'utils/load';
import {metersToMiles, getDate, rad} from 'utils/misc';

class SearchModalContainer extends AbstractModalContainer {

    component = SearchModal;

    MAX_ITEMS = 4;
    MAX_MILES_RADIUS = 30000;

    // NGOS
    MAX_NGOS_ITEMS = 3;

    // DISTANCE API MAX
    MAX_ITEMS_DISTANCE_API = 100;

    // Get copy from global
    initData() {
        this.data = this.getState().get('modal').get('data').get('search').toJS();
    }

    initActions() {
        this.options.actions.search = ::this._search;
        this.options.actions.autocomplete = ::this._autocomplete;
        this.options.actions.error = ::this._error;
        this.options.actions.block = ::this._block;
        this.options.actions.isLoading = ::this._isLoading;

        super.initActions();
    }


    _error(error) {
        this.dispatch(setErrorSearch(error));
    }

    _block(block) {
        this.dispatch(isBlockingSearch(block));
    }

    _isLoading(isLoading) {
        isLoading ? this.dispatch(showLoader(BAR_LOADER)) : this.dispatch(hideLoader());
    }

    _search(search) {
        const list = this.getState().get('search').get('list');

        // Is loading
        this.dispatch(isLoadingSearch(true));

        if (list) {
            this._parseList(search);
        } else {
            // First time, load the main results
            loadJSON(SEARCH_END_POINT).then((list_) => {
                // Add featured cities
                const listCities = list_.search;
                listCities.forEach((item) => {
                    item.isFeatured = isFeatured(item.id);
                });
                this.dispatch(setListSearch(listCities));

                // cached result
                this.dispatch(setListCachedResult(list_.cached));

                this._parseList(search);
            });
        }
    }

    // Parse the main list of result
    _parseList(search) {
        const list = this.getState().get('search').get('list');
        const isBlocking = this.getState().get('app').get('isBlocking');

        // nope
        if (isBlocking) return;

        // block now, you can't submit more stuff
        this._block(true);

        // it's submitted once!
        this.dispatch(isSubmittedOnceSearch());

        // First, get the place
        const geocoder = new google.maps.Geocoder();

        // remove all the current stuff
        this.dispatch(setExperienceItemSearch(null));
        this.dispatch(setResultSearch(null));
        this.dispatch(setResultNGOsSearch(null));

        // console.log('---- geocode');

        // stored already?
        // const cachedResult = getCachedResult(search);
        // if (cachedResult) {
        //     setTimeout(() => {
        //         this._parseCities([cachedResult]);
        //     }, 500);
        //     return;
        // }

        geocoder.geocode({address: search, componentRestrictions: {country: 'us'}}, (place_, status) => {
            if (status !== 'OK') {
                // error, nothing found
                this.dispatch(isLoadingSearch(false));
                this._error(true);
                return;
            }

            const place = place_[0];
            console.log('place', place);

            const aItems = [];

            list.forEach((value, i) => {
                // if (cptItem > this.MAX_ITEMS_DISTANCE_API) {
                //     cptItem = 0;
                //     aRequests.push(aDestinations.slice(0));
                //     aDestinations.length = 0;
                //     aDestinations = [];
                // }
                const destinationLocation = new google.maps.LatLng(value.coordinates[0], value.coordinates[1]);
                const distance = this._distanceFormula(place.geometry.location, destinationLocation);

                aItems.push({
                    value: value,
                    distance: distance
                });
                // console.log('distance', value, distance);
                // cptItem++;
            });

            this._parseItems(aItems);
            // // now, use distance matrix to get the distance and create a result list
            // let aDestinations = [];
            // let cptItem = 0;
            // // const aPromises = [];
            // const aRequests = [];

            // list.forEach((value, i) => {
            //     if (cptItem > this.MAX_ITEMS_DISTANCE_API) {
            //         cptItem = 0;
            //         aRequests.push(aDestinations.slice(0));
            //         aDestinations.length = 0;
            //         aDestinations = [];
            //     }
            //     aDestinations.push(new google.maps.LatLng(value.coordinates[0], value.coordinates[1]));
            //     cptItem++;
            // });

            // // last items
            // aRequests.push(aDestinations.slice(0));

            // // console.log('---- Distance');

            // this._getDistanceCities(place, aRequests).then((aCities) => {
            //     this._parseCities(aCities);
            // });
        });
    }

    _parseItems(aItems) {
        const locale = this.getState().get('app').get('lang');
        const results = [];

        aItems.forEach((item, i) => {
            // If not found
            // console.log('>>', i, value.city, cities.rows[0].elements[i]);
            const value = item.value;

            const date = new Date(parseInt(value.date, 10));
            // somethimes, you have no result.. (when it's too far, from an island to the continent). Let's make them all 0
            const distance = parseInt(metersToMiles(item.distance), 10); // cities.rows[0].elements[i].distance !== undefined ? parseInt(metersToMiles(cities.rows[0].elements[i].distance.value), 10) : 10000;
            const distanceStr = distance > 1 ? distance + ' Miles' : distance + ' Mile';


            results.push({
                title: value.is_ngo ? value.title : value.city,
                id: value.is_ngo ? null : value.id,
                // TODO: FOR V2
                // route: getRoute(value.has_experience ? PARADE_EXPERIENCE : PARADE_DETAIL, {id: value.id}),
                route: value.is_ngo ? {url: value.external_link} : getRoute(PARADE_DETAIL, {id: value.id}),
                timestamp: value.date,
                date: getDate(locale, date),
                distance: distance,
                distanceStr: distanceStr,
                isFeatured: value.isFeatured || false,
                // has_trailer: value.has_trailer || false,
                has_experience: value.has_experience || false,
                has_past: value.is_ngo ? false : date < Date.now(),
                is_ngo: value.is_ngo || false
            });
        });

        // First, sort the result by distance
        results.sort((a, b) => {
            return a.distance - b.distance;
        });

        // console.log('results', results);

        // Now, extract the closest experience item and keep only 4
        let cpt = 0;
        let cptNgo = 0;
        const finalResult = [];
        const finalNGOsResult = [];
        let experienceItem = null;
        // let hasExperienceChecked = false;

        results.forEach((item, i) => {
            // basic results
            if (cpt < this.MAX_ITEMS && !item.has_experience && !item.is_ngo && !item.has_past) {
                finalResult.push(item);
                cpt++;
            }

            // experience
            if (!experienceItem && item.isFeatured && !item.is_ngo && item.distance <= this.MAX_MILES_RADIUS && item.has_experience) {
                experienceItem = item;
            }

            if (cptNgo < this.MAX_NGOS_ITEMS && !item.isFeatured && item.is_ngo) {
                finalNGOsResult.push(item);
                cptNgo++;
            }
        });

        // Now, first sort final results by date
        finalResult.sort((a, b) => {
            return a.timestamp - b.timestamp;
        });

        // then by distance
        finalResult.sort((a, b) => {
            return a.distance - b.distance;
        });

        // Sort NGOs by distance
        finalNGOsResult.sort((a, b) => {
            return a.distance - b.distance;
        });

        // console.log('dispatch finalResult', finalResult);
        console.log('dispatch experienceItem', experienceItem);

        // All good!
        this.dispatch(isLoadingSearch(false));
        this.dispatch(setExperienceItemSearch(experienceItem));
        this.dispatch(setResultSearch(finalResult));
        this.dispatch(setResultNGOsSearch(finalNGOsResult));
    }

    // _parseCities(aCities) {
    //     console.log('_parseCities', aCities.length);
    //     // total fail
    //     if (!aCities) {
    //         this.dispatch(isLoadingSearch(false));
    //         this._error(true);
    //         return;
    //     }

    //     const locale = this.getState().get('app').get('lang');
    //     const list = this.getState().get('search').get('list');

    //     if (!aCities[0]) {
    //         console.log('error aCities', aCities);
    //         this.dispatch(isLoadingSearch(false));
    //         this._error(true);
    //         return;
    //     }

    //     const results = [];
    //     const cities = {
    //         origin_addresses: aCities[0].originAddresses || aCities[0].origin_addresses,
    //         destination_addresses: [],
    //         rows: [
    //             {
    //                 elements: []
    //             }
    //         ],
    //         status: aCities[0].status
    //     };

    //     let hasError = false;
    //     aCities.forEach((city) => {
    //         if (city === null) {
    //             hasError = true; // happens somtimes
    //             // return;
    //         }
    //         const destinationsAddresses = city ? (city.destinationAddresses || city.destination_addresses) : [];
    //         const elements = city ? city.rows[0].elements : []; // if we hit API rate limit

    //         destinationsAddresses.forEach((destination) => {
    //             cities.destination_addresses.push(destination);
    //         });

    //         elements.forEach((element) => {
    //             cities.rows[0].elements.push(element);
    //         });
    //     });

    //     if (hasError) {
    //         console.log('error aCities', aCities);
    //         // this.dispatch(isLoadingSearch(false));
    //         // this._error(true);
    //         // return;
    //     }

    //     // console.log('cities', cities);
    //     // console.log('list', list.toJS());

    //     // Now, get the current result and tight it to the current item in the list
    //     // One experience item
    //     list.forEach((value, i) => {
    //         // If not found
    //         // console.log('>>', i, value.city, cities.rows[0].elements[i]);
    //         if (!cities.rows[0].elements[i] || cities.rows[0].elements[i].status === 'NOT_FOUND') return;

    //         const date = new Date(parseInt(value.date, 10));
    //         // somethimes, you have no result.. (when it's too far, from an island to the continent). Let's make them all 0
    //         const distance = cities.rows[0].elements[i].distance !== undefined ? parseInt(metersToMiles(cities.rows[0].elements[i].distance.value), 10) : 10000;
    //         let distanceStr = distance > 1 ? distance + ' Miles' : distance + ' Mile';

    //         // if no distance
    //         if (!cities.rows[0].elements[i].distance) {
    //             distanceStr = '---';
    //         }

    //         results.push({
    //             title: value.is_ngo ? value.title : value.city,
    //             id: value.is_ngo ? null : value.id,
    //             // TODO: FOR V2
    //             // route: getRoute(value.has_experience ? PARADE_EXPERIENCE : PARADE_DETAIL, {id: value.id}),
    //             route: value.is_ngo ? {url: value.external_link} : getRoute(PARADE_DETAIL, {id: value.id}),
    //             timestamp: value.date,
    //             date: getDate(locale, date),
    //             distance: distance,
    //             distanceStr: distanceStr,
    //             isFeatured: value.isFeatured || false,
    //             // has_trailer: value.has_trailer || false,
    //             has_experience: value.has_experience || false,
    //             has_past: value.is_ngo ? false : date < Date.now(),
    //             is_ngo: value.is_ngo || false
    //         });
    //     });

    //     // First, sort the result by distance
    //     results.sort((a, b) => {
    //         return a.distance - b.distance;
    //     });

    //     // console.log('results', results);

    //     // Now, extract the closest experience item and keep only 4
    //     let cpt = 0;
    //     let cptNgo = 0;
    //     const finalResult = [];
    //     const finalNGOsResult = [];
    //     let experienceItem = null;
    //     // let hasExperienceChecked = false;

    //     results.forEach((item, i) => {
    //         // basic results
    //         if (cpt < this.MAX_ITEMS && !item.has_experience && !item.is_ngo && !item.has_past) {
    //             finalResult.push(item);
    //             cpt++;
    //         }

    //         // experience
    //         if (!experienceItem && item.isFeatured && !item.is_ngo && item.distance <= this.MAX_MILES_RADIUS && item.has_experience) {
    //             experienceItem = item;
    //         }

    //         if (cptNgo < this.MAX_NGOS_ITEMS && !item.isFeatured && item.is_ngo) {
    //             finalNGOsResult.push(item);
    //             cptNgo++;
    //         }
    //     });

    //     // Now, first sort final results by date
    //     finalResult.sort((a, b) => {
    //         return a.timestamp - b.timestamp;
    //     });

    //     // then by distance
    //     finalResult.sort((a, b) => {
    //         return a.distance - b.distance;
    //     });

    //     // Sort NGOs by distance
    //     finalNGOsResult.sort((a, b) => {
    //         return a.distance - b.distance;
    //     });

    //     // console.log('dispatch finalResult', finalResult);
    //     console.log('dispatch experienceItem', experienceItem);

    //     // All good!
    //     this.dispatch(isLoadingSearch(false));
    //     this.dispatch(setExperienceItemSearch(experienceItem));
    //     this.dispatch(setResultSearch(finalResult));
    //     this.dispatch(setResultNGOsSearch(finalNGOsResult));
    // }

    // _getDistanceCities(place, aDestinations, aResult = []) {
    //     console.log('_getDistanceCities');
    //     return new Promise((resolve, reject) => {
    //         const service = new google.maps.DistanceMatrixService();
    //         const origin = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
    //         service.getDistanceMatrix(
    //           {
    //             origins: [origin],
    //             destinations: aDestinations[0],
    //             travelMode: 'DRIVING',
    //             unitSystem: google.maps.UnitSystem.IMPERIAL
    //           }, (response, status) => {
    //                 // console.log('delay', delay, 'status', status, 'response', 'place', place, 'aDestinations', aDestinations, 'response', response);
    //                 // console.log(response, 'status', status);
    //                 aDestinations = aDestinations.slice(1);

    //                 const pct = 75 + ((aResult.length / (aDestinations.length + aResult.length)) * 25);
    //                 this.dispatch(setPctLoading(pct));

    //                 aResult.push(response);
    //                 if (aDestinations.length) {
    //                     setTimeout(() => {
    //                         const result = this._getDistanceCities(place, aDestinations, aResult);
    //                         // aResult.push(result);
    //                         result.then((aR) => {
    //                             // console.log('_getDistanceCities: resolved !');
    //                             resolve(aR);
    //                         });
    //                     }, 1000);
    //                 } else {
    //                     // console.log('ALL DONE');
    //                     resolve(aResult);
    //                 }
    //           });
    //     });
    // }

    _distanceFormula(origin, destination) {
        const R = 6371000; // metres
        const delta01 = rad(origin.lat());
        const delta02 = rad(destination.lat());
        const betaDelta = rad((destination.lat() - origin.lat()));
        const betaGamma = rad((destination.lng() - origin.lng()));

        const a = Math.sin(betaDelta / 2) * Math.sin(betaDelta / 2) +
                Math.cos(delta01) * Math.cos(delta02) *
                Math.sin(betaGamma / 2) * Math.sin(betaGamma / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        const d = R * c;

        return d;
    }

    _autocomplete(input) {
        const parameters = stringify({
            format: 'json',
            input: input,
            components: 'country:us',
            language: this.getState().get('app').get('lang').substr(0, 2),
            types: '(cities)'
        });

        const url = `${PLACES_END_POINT}${parameters}`;

        this.dispatch(isLoadingPredictionSearch(true));

        loadJSON(url).then((results) => {
            const predictions = results && results.predictions ? results.predictions[0] : null;
            this.dispatch(isLoadingPredictionSearch(false));
            this.dispatch(setPrediction(predictions));
        });
    }

    dispose() {
        this.dispatch(resetSearch());
        super.dispose();
    }
}

export default SearchModalContainer;
