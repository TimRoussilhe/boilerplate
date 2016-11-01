/* global Backbone _*/

import Router from 'router/router';
import Config from 'config/config';

/**
 * app: Init the app
 * @constructor
 */
class App {

	constructor(){
		_.extend(this, Backbone.Events);
	}

	init() {
		console.log('**** Begin App ****');

		Config.init();
		Router.init();
	}

}

export default App;
