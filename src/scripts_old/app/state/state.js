/* global  Backbone _  */

class State extends Backbone.Model{

	constructor(defaults = {}) {

		_.defaults(defaults, {
			// These options are assigned to the instance by Backbone
			breakpoint : 'DESKTOP',
			menu : 'ACTIVE'
		});

		super(defaults);
	}

	initialize() {}

	updateMenuState(action) {
		switch (action) {
		case 'SET_ACTIVE' :
			this.set('menu', 'ACTIVE');
			break;
		case 'SET_UNACTIVE' :
			this.set('menu', 'UNACTIVE');
			break;
		default:
			this.set('menu', 'UNACTIVE');
		}
	}

	updateBreakpointState(action) {
		switch (action) {
		case 'SET_MOBILE' :
			this.set('breakpoint', 'MOBILE');
			break;
		case 'SET_TABLET_PORTRAIT' :
			this.set('breakpoint', 'TABLET_PORTRAIT');
			break;
		case 'SET_TABLET' :
			this.set('breakpoint', 'TABLET');
			break;
		case 'SET_DESKTOP' :
			this.set('breakpoint', 'DESKTOP');
			break;
		default:
			this.set('breakpoint', 'UNACTIVE');
		}
	}

}

export default new State();
