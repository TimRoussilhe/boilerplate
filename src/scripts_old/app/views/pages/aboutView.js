/* global  _  */

import PageView from 'abstract/pageView';
import template from 'templates/about.twig';
import PageModel from 'models/page.js';

class AboutView extends PageView {

	constructor(options = {}, data) {
		console.log('AboutView constructor');

		_.defaults(options, {
			template: template,
			model: new PageModel({url: options.idView + '.json'}),
		});

		super(options, data);
	}

	initialize(options, data) {
		console.log('AboutView initialize', this);
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

export default AboutView;
