/* global Backbone $ document */

// require('underscore');
// require('Modernizr');
// require('gsap');

import 'gsap';
import 'Modernizr';
import 'underscore';

Backbone.$ = $;
import App from './app/app';

class Main {
	onReady() {
		const app = new App();
		app.init();
	}
}

const main = module.exports = new Main();
$(() => {
	main.onReady(main);
});
