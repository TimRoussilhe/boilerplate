/* global  _   */

import PageView from 'abstract/pageView';
import template from 'templates/about.hbs';
import AboutDatas from 'jsons/about.json';

class AboutView extends PageView {

	constructor(options = {}, datas) {
		console.log('AboutView constructor');

		_.defaults(options, {
			template: template,
			// These options are assigned to the instance by Backbone
			events: {
			 'click a': 'onLinkClicked'
			}
		});

		super(options, AboutDatas);
	}

	initialize(options, data) {
		console.log('AboutView initialize', this);
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

export default AboutView;
