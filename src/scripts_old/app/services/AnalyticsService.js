/* global document window ga */
import Config from 'config/config';

/**
 * Init analytics by loading the Google scripts.
 * @constructor
 */

class AnalyticsService {

	 constructor() {

		this.loaded = false;
		this.startedLoading = false;

		if (window.ga) {
			// if this is required elsewhere.. don't load the script more than once.
			// console.log(' google analytics already initialized.');

			// already created the GA just return this for tracking event use.
			return this;
		}

		if (this.startedLoading) return this;

		this.startedLoading = true;

		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		// (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		//   (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		//   m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		//   })(window,document,'script','//www.google-analytics.com/analytics.js','ga2');

		// this gets called on first page creation.
		// ga('send', 'pageview');

	}

	init() {

		// Create here
		if (Config.gaID !== null) ga('create', Config.gaID, 'auto');
	}

	// the google method to retrieving a pageview. but won't work with ajax updates.
	// so we force it in pagemanager and read this method.
	getCurrentUrl() {
		var location = window.location.protocol +
			'//' + window.location.hostname +
			window.location.pathname +
			window.location.search;
		return location;
	}

	page(objPage) {

		if (window.ga === undefined) return;

		console.log("\n-------- ga track page------");
		console.log(" page page. ");
		console.log("--------------\n");

		if (typeof objPage !== 'undefined' ) {
			var page = objPage.page || "";
			var title = objPage.title || "";

			ga('send', 'pageview', {
				page: page,
				title: title
			});

		} else {
			// do not pass an empty object if undefined.
			ga('send', 'pageview');
		}

	}

	event(event) {

		if (window.ga === undefined) return;

		if (event.category === undefined) {
			console.log('GA:: You have to provide a category', event);
			return;
		}

		if (event.action === undefined) {
			console.log('GA:: You have to provide an action', event);
			return;
		}

		var category = event.category;
		var action = event.action;
		var label = event.label || null;
		// value can only be numerical
		var value = event.value || null;

		ga('send', 'event', category, action, label, value);

	}

}

export default new AnalyticsService();
