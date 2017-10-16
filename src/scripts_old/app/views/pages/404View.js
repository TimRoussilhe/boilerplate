/* global  _   */

import PageView from 'abstract/pageView';
import template from 'templates/index.twig';
import ErrorData from 'jsons/404.json';

class ErrorView extends PageView {

	constructor(options = {}, data) {

		_.defaults(options, {
			template: template
		});

		const dataParam = ErrorData;

		super(options, dataParam);
	}

	initDOM() {

		super.initDOM();
	}

	setupDOM() {

	}

	onResize() {

	}

}

module.exports = ErrorView;
