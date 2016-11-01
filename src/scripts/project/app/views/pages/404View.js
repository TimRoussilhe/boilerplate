/* global  _   */

import PageView from 'abstract/pageView';
import template from 'templates/index.hbs';
import ErrorDatas from 'jsons/404.json';

class ErrorView extends PageView {

	constructor(options = {}, datas) {

		_.defaults(options, {
			template: template,
			// These options are assigned to the instance by Backbone
			events: {
			 'click a': 'onLinkClicked'
			}
		});

		const datasParam = ErrorDatas;

		super(options, datasParam);
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

module.exports = ErrorView;
