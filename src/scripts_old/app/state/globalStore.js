// Global store in addition of the STATE, Animation / mouse state when State is in charge of Application State.
/* global  window  */

import is from 'is_js';

class GlobalStore {
	constructor() {
		this._type = 'CommonModel';
		this._eventTypes = [];
		this._callbackFunctions = [];
		this._dataObj = {
			createdAt: new Date(),
			rafCallStack: [],	
			scroll: {
				targetY: 0,
				currentY: 0
			},

			viewport: {
				width: window.innerWidth,
				height: window.innerHeight
			},
			//keydown : evt.keyCode || evt.which
			onKeyDown: null,
			// is there any animation happening
			isAnimating : false,

			// Pages
			oldPage : null,
			currentPage: null,
			firstTime: true

		};

		// Objects that are not going ot be modified neither need callback
		this.isMobile = is.mobile();
		this.isTablet = is.tablet();
	}

	on(eventType, callback) {
		if ( this._eventTypes.findIndex(x => x === eventType) === -1 ) {
			this._eventTypes.push(eventType);
		}

		if ( this._callbackFunctions[eventType] ) {
			this._callbackFunctions[eventType].push(callback);
		} else {
			this._callbackFunctions[eventType] = [];
			this._callbackFunctions[eventType].push(callback);
		}
	}

	set(attr, val, silent) {
		if ( silent ) {
			this._dataObj[attr] = val;
		} else {
			if ( this._dataObj[attr] !== val ) {
				const previous = this._dataObj[attr];
				this._dataObj[attr] = val;
				this._eventTypes.forEach( ( eventType, index ) => {
					this._callbackFunctions[eventType].forEach( ( callback, index ) => {
						if ( eventType.indexOf("change:") > -1 ) {
							if ( eventType === ( "change:" + attr ) ) {
								callback.call(this, val, previous);
							}
						} else {
							callback.call(this, val, previous);
						}
					});
				});
			}
		}
	}

	get(attr) {
		return this._dataObj[attr];
	}
}

export default new GlobalStore();