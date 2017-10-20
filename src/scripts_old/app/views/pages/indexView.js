/* global _ Cubic TimelineMax */

import PageView from 'abstract/pageView';
import template from 'templates/index.twig';
import PageModel from 'models/page.js';

class IndexView extends PageView {

	constructor(options = {}, data) {
		console.log('IndexView constructor');

		_.defaults(options, {
			template: template,
			model: new PageModel({url: options.idView + '.json'}),
		});

		super(options, data);
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
