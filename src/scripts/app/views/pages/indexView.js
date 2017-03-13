/* global _ Cubic TimelineMax */

import PageView from 'abstract/pageView';
import template from 'templates/index.hbs';
import HomepageData from 'jsons/index.json';

class IndexView extends PageView {

	constructor(options = {}, data) {
		console.log('IndexView constructor');

		_.defaults(options, {
			template: template
		});

		super(options, HomepageData);
	}

	initialize(options, data) {
		console.log('IndexView initialize', this);
		super.initialize(options, data);
	}

	initDOM() {

		super.initDOM();
	}

	setupDOM() {

	}

	onResize() {

	}

}

export default IndexView;
