/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(31);

var _reducers = __webpack_require__(82);

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxResponsive = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var USE_DEV_TOOLS = true && true && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

// const stateTransformer = (state) => {
// 	if (Iterable.isIterable(state)) return state.toJS();
// 	return state;
// };

// import {createLogger} from 'redux-logger';
// import configureStore from 'store/configure-store';
// import {setStore, setCompareFn} from 'utils/redux-watch-immutable';
// import _ from 'underscore';

// const store = configureStore();

// // IMPORTANT
// const compare = (a, b) => {
// 	return _.isEqual(a, b);
// };

// // Config redux watch
// setStore(store);
// setCompareFn(compare);

// export default store;

var middlewares = [];

var composeEnhancers = USE_DEV_TOOLS ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : _redux.compose;

var store = (0, _redux.createStore)(_reducers2.default, {}, composeEnhancers(_reduxResponsive.responsiveStoreEnhancer, _redux.applyMiddleware.apply(undefined, middlewares)));

exports.default = store;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(101);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// LOCATION
var HOMEPAGE = exports.HOMEPAGE = 'HOMEPAGE';
var ABOUT = exports.ABOUT = 'ABOUT';
var REDIRECT = exports.REDIRECT = 'REDIRECT';
var NOT_FOUND = exports.NOT_FOUND = 'NOT_FOUND';

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base2 = __webpack_require__(190);

var _Base3 = _interopRequireDefault(_Base2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Container: Handles actions and data for a component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @constructor
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var AbstractContainer = function (_Base) {
	_inherits(AbstractContainer, _Base);

	function AbstractContainer() {
		var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, AbstractContainer);

		console.log('options', options);

		/**
    * Component asociated to the container
    * @type {Object}
    */
		var _this = _possibleConstructorReturn(this, (AbstractContainer.__proto__ || Object.getPrototypeOf(AbstractContainer)).call(this, options));

		_this._component = null;

		/**
  * Component Class
  * @type {Object}
  */
		_this.Component = null;

		/**
  * Data Object
  * @type {Object}
  */
		_this.data = null;

		/**
  * Options Object
  * @type {Object}
  */
		_this.options = null;

		_this.options = options;
		_this.data = options.data ? options.data : null;
		_this.options.actions = options.actions ? options.actions : {};

		// /**
		// * El
		// * @type {DOM}
		// */
		// this.options.el = options.el ? options.el : null;

		_this.promises = {
			init: {
				resolve: null,
				reject: null
			},
			data: {
				resolve: null,
				reject: null
			}
		};

		_this.states = {
			canUpdate: false,
			isInit: false,
			isAnimating: false,
			isShown: false
		};

		return _this;
	}

	_createClass(AbstractContainer, [{
		key: 'getComponent',
		value: function getComponent() {
			return this._component;
		}
	}, {
		key: 'initComponent',
		value: function initComponent() {
			var _this2 = this;

			this.getData().then(function () {
				_this2.initActions();
				_this2.initData();

				_this2.options.data = _this2.data;
				_this2._component = new _this2.Component(_this2.options);
				_this2._component.init().then(function () {
					_this2.onInit();
				});
			});
		}
	}, {
		key: 'getData',
		value: function getData() {
			var _this3 = this;

			return new Promise(function (resolve, reject) {
				_this3.promises.data.resolve = resolve;
				_this3.promises.data.reject = reject;

				_this3.fetchData();
			});
		}
	}, {
		key: 'fetchData',
		value: function fetchData() {
			this.promises.data.resolve();
		}

		// If we went to parse and do something with the data

	}, {
		key: 'initData',
		value: function initData() {}

		// Reference any actions here to pass to the component after

	}, {
		key: 'initActions',
		value: function initActions() {}
	}, {
		key: 'resize',
		value: function resize() {
			return this._component.resize();
		}
	}, {
		key: 'show',
		value: function show() {
			return this._component.show();
		}
	}, {
		key: 'hide',
		value: function hide() {
			return this._component.hide();
		}
	}, {
		key: 'dispose',
		value: function dispose() {
			this._component.dispose();
			this._component = null;
			return this;
		}
	}, {
		key: 'reRender',
		value: function reRender() {
			var _this4 = this;

			this.hide().then(function () {
				_this4.dispose();
				_this4.init().then(function () {
					_this4.show();
				});
			});
		}
	}]);

	return AbstractContainer;
}(_Base3.default);

exports.default = AbstractContainer;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(100),
    getValue = __webpack_require__(107);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(21),
    isObject = __webpack_require__(3);

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtor(Ctor) {
  return function() {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0: return new Ctor;
      case 1: return new Ctor(args[0]);
      case 2: return new Ctor(args[0], args[1]);
      case 3: return new Ctor(args[0], args[1], args[2]);
      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return isObject(result) ? result : thisBinding;
  };
}

module.exports = createCtor;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/**
 * Replaces all `placeholder` elements in `array` with an internal placeholder
 * and returns an array of their indexes.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {*} placeholder The placeholder to replace.
 * @returns {Array} Returns the new array of placeholder indexes.
 */
function replaceHolders(array, placeholder) {
  var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value === placeholder || value === PLACEHOLDER) {
      array[index] = PLACEHOLDER;
      result[resIndex++] = index;
    }
  }
  return result;
}

module.exports = replaceHolders;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(44),
    isObjectLike = __webpack_require__(54);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(6);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(152);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(158);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createResponsiveStateReducer", function() { return createResponsiveStateReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createResponsiveStoreEnhancer", function() { return createResponsiveStoreEnhancer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "responsiveStateReducer", function() { return responsiveStateReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "responsiveStoreEnhancer", function() { return responsiveStoreEnhancer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_createReducer__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_createEnhancer__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_types__ = __webpack_require__(41);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CALCULATE_RESPONSIVE_STATE", function() { return __WEBPACK_IMPORTED_MODULE_2__actions_types__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_creators__ = __webpack_require__(40);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "calculateResponsiveState", function() { return __WEBPACK_IMPORTED_MODULE_3__actions_creators__["a"]; });
// local imports





// external API
var createResponsiveStateReducer = __WEBPACK_IMPORTED_MODULE_0__util_createReducer__["a" /* default */];
var createResponsiveStoreEnhancer = __WEBPACK_IMPORTED_MODULE_1__util_createEnhancer__["a" /* default */];
// provide default responsive state reducer/enhancers
var responsiveStateReducer = createResponsiveStateReducer();
var responsiveStoreEnhancer = createResponsiveStoreEnhancer();

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.navigate = navigate;
exports.setMeta = setMeta;
exports.setRoutes = setRoutes;
exports.setAnimating = setAnimating;
exports.setPage = setPage;
exports.setOldPage = setOldPage;

var _constants = __webpack_require__(42);

function navigate(location) {
	var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	return {
		type: _constants.NAVIGATION,
		location: location,
		params: params
	};
}

function setMeta() {
	var meta = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	var isDefault = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	return {
		type: _constants.SET_META,
		meta: meta,
		isDefault: isDefault
	};
}

function setRoutes(routes) {
	return {
		type: _constants.SET_ROUTES,
		routes: routes
	};
}

function setAnimating(animatingState) {
	return {
		type: _constants.SET_ANIMATING,
		isAnimating: animatingState
	};
}

function setPage(page) {
	return {
		type: _constants.SET_PAGE,
		page: page
	};
}

function setOldPage(page) {
	return {
		type: _constants.SET_OLDPAGE,
		page: page
	};
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _bind2 = __webpack_require__(94);

var _bind3 = _interopRequireDefault(_bind2);

var _isFunction2 = __webpack_require__(19);

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _result2 = __webpack_require__(135);

var _result3 = _interopRequireDefault(_result2);

var _uniqueId2 = __webpack_require__(165);

var _uniqueId3 = _interopRequireDefault(_uniqueId2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _store = __webpack_require__(0);

var _store2 = _interopRequireDefault(_store);

var _svgs = __webpack_require__(166);

var _svgs2 = _interopRequireDefault(_svgs);

var _Base2 = __webpack_require__(190);

var _Base3 = _interopRequireDefault(_Base2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var delegateEventSplitter = /^(\S+)\s*(.*)$/;

/**
 * Component: Defines a component with basic methods
 * @constructor
 */

var Component = function (_Base) {
	_inherits(Component, _Base);

	_createClass(Component, [{
		key: 'events',
		set: function set(events) {
			for (var event in events) {
				// eslint-disable-line guard-for-in
				this._events[event] = events[event];
			}
			this.delegateEvents();
		},
		get: function get() {
			return this._events;
		}
	}, {
		key: 'promises',
		set: function set(newPromises) {
			if (!this._promises) this._promises = {};
			for (var promise in newPromises) {
				this._promises[promise] = newPromises[promise];
			}
		},
		get: function get() {
			return this._promises;
		}
	}, {
		key: 'states',
		set: function set(states) {
			for (var state in states) {
				// eslint-disable-line guard-for-in
				this._states[state] = states[state];
			}
		},
		get: function get() {
			return this._states;
		}
	}]);

	function Component(props) {
		_classCallCheck(this, Component);

		/**
  	 * Object as associative array of all the <handlers> objects
  	 * @type {Object}
  	 */
		var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, props));

		_this.handlers = {};

		/**
  	 * Object as associative array of all the <DOM.events> objects
  	 * @type {Object}
  	 */
		_this._events = {};

		/**
   * Object as associative array of all the <promises> objects
   * @type {Object}
   */
		_this._promises = {
			init: {
				resolve: null,
				reject: null
			},
			show: {
				resolve: null,
				reject: null
			},
			hidden: {
				resolve: null,
				reject: null
			}
		};

		/**
  	 * Object as associative array of all the states
  	 * @type {Object}
  	 */
		_this._states = {};

		/**
   * Object as associative array of all the timelines
   * @type {Object}
   */
		_this.TL = {};

		/**
     * uniqueId
     * @type {String}
     */
		_this.cid = (0, _uniqueId3.default)('component');

		_this.props = props;
		_this.states = {
			canUpdate: false,
			isInit: false,
			isAnimating: false,
			isShown: false
		};

		/**
  * El
  * If el is passed from parent, this means the DOM is allready render
  and we just need to scope it
  * @type {DOM}
  */
		_this.el = props.el ? props.el : null;
		_this.$el = props.$el ? props.$el : null;
		console.log('this.el', _this.el);
		console.log('props.el', props.el);

		_this.template = props.template ? props.template : null;

		_this.data = props.data ? props.data : _this.data;
		_this.actions = props.actions ? props.actions : {};

		_this.events = {
			'click a': function clickA(e) {
				return _this.hyperlink(e);
			}
		};

		return _this;
	}

	/**
  * Init the component.
  * Override and trigger onInit when we have to wait for computer procesing, like canvas initialization for instance.
  */


	_createClass(Component, [{
		key: 'initComponent',
		value: function initComponent() {
			this.render();
		}

		/**
   * Call render function if you wanna change the component
   * based on states/data
   */

	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			// Default components just need to scope a piece of DOM from constructor
			this.setElement();
			setTimeout(function () {
				return _this2.onRender();
			}, 0);
		}

		/**
   * Render your component
   * This is where we scope the main elements
   */

	}, {
		key: 'setElement',
		value: function setElement() {
			console.log('this.el', this.el);

			if (this.el === null && this.template === null) {
				console.error('You must provide a template or an el to scope a component. Creating an empty div instead', this);
				this.el = document.createElement('div');
			}

			if (this.el !== null) {
				this.$el = $(this.el);
				return;
			}

			if (this.$el !== null) {
				this.el = this.$el[0];
				return;
			}

			if (this.template !== null) {
				this.renderTemplate();
				return;
			}
		}

		/**
   * Render your template
   */

	}, {
		key: 'renderTemplate',
		value: function renderTemplate() {
			this.$el = $(this.template({
				data: this.data,
				svgs: _svgs2.default
			}));
			this.el = this.$el[0];
		}
	}, {
		key: 'onRender',
		value: function onRender() {
			var _this3 = this;

			console.log('onRender');

			this.initDOM();
			this.setupDOM();
			this.initTL();
			this.delegateEvents();
			setTimeout(function () {
				return _this3.onDOMInit();
			}, 0);
		}

		/**
      * Init all your DOM elements here
      */

	}, {
		key: 'initDOM',
		value: function initDOM() {}

		/**
      * Setup your DOM elements here ( for example defaut style before animation )
      */

	}, {
		key: 'setupDOM',
		value: function setupDOM() {}

		/**
   * Init the Timeline here
   */

	}, {
		key: 'initTL',
		value: function initTL() {}
	}, {
		key: 'onDOMInit',
		value: function onDOMInit() {
			this.bindEvents();
			this.onInit();
		}

		/**
   * Bind your events here
   */

	}, {
		key: 'bindEvents',
		value: function bindEvents() {}

		/**
   * Unbind yout events here
   */

	}, {
		key: 'unbindEvents',
		value: function unbindEvents() {}

		/**
   * Set callbacks, where `this.events` is a hash of
   *
   * *{"event selector": "callback"}*
   *
   *  {
   *      'mousedown .title':  'edit',
   *      'click .button':     'save',
   *      'click .open':       function(e) { ... }
   *   }
   * @param {Object} Events Objcets
   */

	}, {
		key: 'delegateEvents',
		value: function delegateEvents(events) {

			events || (events = (0, _result3.default)(this, 'events'));
			if (!events) return this;
			this.undelegateEvents();
			for (var key in events) {
				var method = events[key];
				if (!(0, _isFunction3.default)(method)) method = this[method];
				if (!method) continue;
				var match = key.match(delegateEventSplitter);
				this.delegate(match[1], match[2], (0, _bind3.default)(method, this));
			}
			return this;
		}

		/**
      * Add a single event listener to the view's element (or a child element
      * using `selector`). This only works for delegate-able events: not `focus`,
      * `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
      */

	}, {
		key: 'delegate',
		value: function delegate(eventName, selector, listener) {
			if (this.$el) this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
			return this;
		}

		// Clears all callbacks previously bound to the view by `delegateEvents`.
		// You usually don't need to use this, but may wish to if you have multiple
		// Backbone views attached to the same DOM element.

	}, {
		key: 'undelegateEvents',
		value: function undelegateEvents() {
			if (this.$el) this.$el.off('.delegateEvents' + this.cid);
			return this;
		}

		// A finer-grained `undelegateEvents` for removing a single delegated event.
		// `selector` and `listener` are both optional.

	}, {
		key: 'undelegate',
		value: function undelegate(eventName, selector, listener) {
			this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
			return this;
		}

		/**
   * Update
      *
   */

	}, {
		key: 'update',
		value: function update() {
			if (this.states.canUpdate) this.onUpdate();
		}

		/**
   * Called on scroll
   */

	}, {
		key: 'onScroll',
		value: function onScroll() {}

		/**
   * Called on update
   */

	}, {
		key: 'onUpdate',
		value: function onUpdate() {}

		/**
   * Called on resize
      * In our scenario this will listen to the GlobalStore Events
   */

	}, {
		key: 'onResize',
		value: function onResize() {}

		/**
   * Show the component
   */

	}, {
		key: 'show',
		value: function show() {
			var _this4 = this;

			return new Promise(function (resolve, reject) {
				_this4.promises.show.resolve = resolve;
				_this4.promises.show.reject = reject;
				_this4.setState({ isAnimating: true, canUpdate: true });
				_this4.showComponent();
			});
		}
	}, {
		key: 'showComponent',
		value: function showComponent() {
			this.onShown();
		}

		/**
  	 * The component is shown
  	 */

	}, {
		key: 'onShown',
		value: function onShown() {
			this.setState({ isShown: true, isAnimating: false });
			this.promises.show.resolve();
		}

		/**
   * Hide the component
   */

	}, {
		key: 'hide',
		value: function hide() {
			var _this5 = this;

			return new Promise(function (resolve, reject) {
				_this5.promises.hidden.resolve = resolve;
				_this5.promises.hidden.reject = reject;
				_this5.setState({ isAnimating: true });
				_this5.hideComponent();
			});
		}
	}, {
		key: 'hideComponent',
		value: function hideComponent() {
			this.onHidden();
		}

		/**
   * The component is shown
   */

	}, {
		key: 'onHidden',
		value: function onHidden() {
			this.setState({ isAnimating: false, isShown: false, canUpdate: false });
			this.promises.hidden.resolve();
		}

		/**
   * Navigate using the router
   */

	}, {
		key: 'navigate',
		value: function navigate(url) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			// if absolute, make sure to add the root
			if (url.indexOf(window.location.origin) >= 0) {
				url = url.replace(window.location.origin, '');
			}

			var re = new RegExp(/^.*\//);
			var rootUrl = re.exec(window.location.href);

			// If internal
			if (url.indexOf(rootUrl) >= 0) {
				// make it relative
				url = url.replace(window.location.origin, '');
				url = url.replace(rootUrl, '');
			}

			page(url);
		}
	}, {
		key: 'hyperlink',
		value: function hyperlink(e) {
			// const href = e.currentTarget.href;
			// const route = !e.currentTarget.classList.contains('no-route');

			// // internal link
			// if ((href.substr(0, 4) !== 'http' || href.indexOf(window.location.origin) >= 0) && route) {
			// 	e.preventDefault();

			// 	// // if is loading or loader still shown, we block the navigation
			// 	// const isLoading = this.getState().get('loader').get('isLoading');
			// 	// const isLoaderShown = this.getState().get('loader').get('isShown');

			// 	if (!isLoading && !isLoaderShown) {
			// 		this.navigate(href);
			// 	}
			// }
			var isAnimating = _store2.default.getState().app.isAnimating;
			if (isAnimating) {
				e.preventDefault();
			}
		}

		/**
   * Kill a timeline by name
   * @param {string} name of the timeline stocked in this.TL.
   */

	}, {
		key: 'killTL',
		value: function killTL(name) {
			if (this.TL[name] === undefined || this.TL[name] === null) return;

			var tl = this.TL[name];

			tl.stop();
			tl.kill();
			tl.clear();
			tl = null;

			this.TL[name] = null;
		}

		/**
   * Kill all the timelines
   */

	}, {
		key: 'destroyTL',
		value: function destroyTL() {
			for (var name in this.TL) {
				if (this.TL[name]) this.killTL(name);
			}
			this.TL = {};
		}

		/**
   * Dispose the component
   */

	}, {
		key: 'dispose',
		value: function dispose() {
			this.setState({ isInit: false, isShown: false, canUpdate: false });
			this.unbindEvents();
			this.handlers = {};
			this.promises = {};

			this.undelegateEvents();
			this.destroyTL();
			this.$el.remove();
			this.$el = null;
			this.$els = {};
			this._events = {};
		}
	}]);

	return Component;
}(_Base3.default);

exports.default = Component;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(44),
    isObject = __webpack_require__(3);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(1);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(21),
    baseLodash = __webpack_require__(23);

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */
function LazyWrapper(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
}

// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype = baseCreate(baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;

module.exports = LazyWrapper;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */
function baseLodash() {
  // No operation performed.
}

module.exports = baseLodash;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/**
 * Gets the argument placeholder value for `func`.
 *
 * @private
 * @param {Function} func The function to inspect.
 * @returns {*} Returns the placeholder value.
 */
function getHolder(func) {
  var object = func;
  return object.placeholder;
}

module.exports = getHolder;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getRoute = undefined;

var _store = __webpack_require__(0);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getRoute = exports.getRoute = function getRoute(location) {
	var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	var routes = _store2.default.getState().app.routes;
	var currentRoute = null;

	for (var key in routes) {

		if (!routes.hasOwnProperty(key)) continue;

		var route = routes[key];
		if (route.id === location) currentRoute = route;
	}

	return currentRoute;
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _DOMcomponent = __webpack_require__(16);

var _DOMcomponent2 = _interopRequireDefault(_DOMcomponent);

var _TweenLite = __webpack_require__(27);

var _TweenLite2 = _interopRequireDefault(_TweenLite);

var _TimelineLite = __webpack_require__(180);

var _TimelineLite2 = _interopRequireDefault(_TimelineLite);

var _CSSPlugin = __webpack_require__(181);

var _CSSPlugin2 = _interopRequireDefault(_CSSPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import $ from 'zepto';
// import {TweenLite} from 'gsap';


/**
 * PageComponent: Defines a page
 * @extends Component
 * @constructor
 */
var PageComponent = function (_AbstractDOMComponent) {
	_inherits(PageComponent, _AbstractDOMComponent);

	function PageComponent() {
		_classCallCheck(this, PageComponent);

		return _possibleConstructorReturn(this, (PageComponent.__proto__ || Object.getPrototypeOf(PageComponent)).apply(this, arguments));
	}

	_createClass(PageComponent, [{
		key: 'setupDOM',
		value: function setupDOM() {
			_TweenLite2.default.set(this.$el, { autoAlpha: 0 });
		}
	}, {
		key: 'initTL',
		value: function initTL() {
			var _this2 = this;

			console.log('==================== initTL');

			this.TL.show = new _TimelineLite2.default({ paused: true, onComplete: function onComplete() {
					return _this2.onShown();
				} });
			// this.TL.show.set(this.$el, {autoAlpha: 0, ease: Cubic.easeOut});
			this.TL.show.to(this.$el, 0.3, { autoAlpha: 1, ease: Cubic.easeOut });

			console.log('this.$el', this.$el);

			this.TL.hide = new _TimelineLite2.default({ paused: true, onComplete: function onComplete() {
					return _this2.onHidden();
				} });
			this.TL.hide.to(this.$el, 0.3, { autoAlpha: 0, ease: Cubic.easeOut });
		}
	}, {
		key: 'onDOMInit',
		value: function onDOMInit() {
			// append to main container
			document.getElementById('content').appendChild(this.el);
			_get(PageComponent.prototype.__proto__ || Object.getPrototypeOf(PageComponent.prototype), 'onDOMInit', this).call(this);
		}
	}, {
		key: 'showComponent',
		value: function showComponent() {
			var _this3 = this;

			setTimeout(function () {
				_this3.TL.show.play(0);
			}, 0);
		}
	}, {
		key: 'hideComponent',
		value: function hideComponent() {
			var _this4 = this;

			console.log('hideComponent');
			setTimeout(function () {
				_this4.TL.hide.play(0);
			}, 0);
		}
	}]);

	return PageComponent;
}(_DOMcomponent2.default);

exports.default = PageComponent;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * VERSION: 1.19.1
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(function (window, moduleName) {

	"use strict";

	var _exports = {},
	    _doc = window.document,
	    _globals = window.GreenSockGlobals = window.GreenSockGlobals || window;
	if (_globals.TweenLite) {
		return; //in case the core set of classes is already loaded, don't instantiate twice.
	}
	var _namespace = function _namespace(ns) {
		var a = ns.split("."),
		    p = _globals,
		    i;
		for (i = 0; i < a.length; i++) {
			p[a[i]] = p = p[a[i]] || {};
		}
		return p;
	},
	    gs = _namespace("com.greensock"),
	    _tinyNum = 0.0000000001,
	    _slice = function _slice(a) {
		//don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
		var b = [],
		    l = a.length,
		    i;
		for (i = 0; i !== l; b.push(a[i++])) {}
		return b;
	},
	    _emptyFunc = function _emptyFunc() {},
	    _isArray = function () {
		//works around issues in iframe environments where the Array global isn't shared, thus if the object originates in a different window/iframe, "(obj instanceof Array)" will evaluate false. We added some speed optimizations to avoid Object.prototype.toString.call() unless it's absolutely necessary because it's VERY slow (like 20x slower)
		var toString = Object.prototype.toString,
		    array = toString.call([]);
		return function (obj) {
			return obj != null && (obj instanceof Array || (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" && !!obj.push && toString.call(obj) === array);
		};
	}(),
	    a,
	    i,
	    p,
	    _ticker,
	    _tickerActive,
	    _defLookup = {},


	/**
  * @constructor
  * Defines a GreenSock class, optionally with an array of dependencies that must be instantiated first and passed into the definition.
  * This allows users to load GreenSock JS files in any order even if they have interdependencies (like CSSPlugin extends TweenPlugin which is
  * inside TweenLite.js, but if CSSPlugin is loaded first, it should wait to run its code until TweenLite.js loads and instantiates TweenPlugin
  * and then pass TweenPlugin to CSSPlugin's definition). This is all done automatically and internally.
  *
  * Every definition will be added to a "com.greensock" global object (typically window, but if a window.GreenSockGlobals object is found,
  * it will go there as of v1.7). For example, TweenLite will be found at window.com.greensock.TweenLite and since it's a global class that should be available anywhere,
  * it is ALSO referenced at window.TweenLite. However some classes aren't considered global, like the base com.greensock.core.Animation class, so
  * those will only be at the package like window.com.greensock.core.Animation. Again, if you define a GreenSockGlobals object on the window, everything
  * gets tucked neatly inside there instead of on the window directly. This allows you to do advanced things like load multiple versions of GreenSock
  * files and put them into distinct objects (imagine a banner ad uses a newer version but the main site uses an older one). In that case, you could
  * sandbox the banner one like:
  *
  * <script>
  *     var gs = window.GreenSockGlobals = {}; //the newer version we're about to load could now be referenced in a "gs" object, like gs.TweenLite.to(...). Use whatever alias you want as long as it's unique, "gs" or "banner" or whatever.
  * </script>
  * <script src="js/greensock/v1.7/TweenMax.js"></script>
  * <script>
  *     window.GreenSockGlobals = window._gsQueue = window._gsDefine = null; //reset it back to null (along with the special _gsQueue variable) so that the next load of TweenMax affects the window and we can reference things directly like TweenLite.to(...)
  * </script>
  * <script src="js/greensock/v1.6/TweenMax.js"></script>
  * <script>
  *     gs.TweenLite.to(...); //would use v1.7
  *     TweenLite.to(...); //would use v1.6
  * </script>
  *
  * @param {!string} ns The namespace of the class definition, leaving off "com.greensock." as that's assumed. For example, "TweenLite" or "plugins.CSSPlugin" or "easing.Back".
  * @param {!Array.<string>} dependencies An array of dependencies (described as their namespaces minus "com.greensock." prefix). For example ["TweenLite","plugins.TweenPlugin","core.Animation"]
  * @param {!function():Object} func The function that should be called and passed the resolved dependencies which will return the actual class for this definition.
  * @param {boolean=} global If true, the class will be added to the global scope (typically window unless you define a window.GreenSockGlobals object)
  */
	Definition = function Definition(ns, dependencies, func, global) {
		this.sc = _defLookup[ns] ? _defLookup[ns].sc : []; //subclasses
		_defLookup[ns] = this;
		this.gsClass = null;
		this.func = func;
		var _classes = [];
		this.check = function (init) {
			var i = dependencies.length,
			    missing = i,
			    cur,
			    a,
			    n,
			    cl,
			    hasModule;
			while (--i > -1) {
				if ((cur = _defLookup[dependencies[i]] || new Definition(dependencies[i], [])).gsClass) {
					_classes[i] = cur.gsClass;
					missing--;
				} else if (init) {
					cur.sc.push(this);
				}
			}
			if (missing === 0 && func) {
				a = ("com.greensock." + ns).split(".");
				n = a.pop();
				cl = _namespace(a.join("."))[n] = this.gsClass = func.apply(func, _classes);

				//exports to multiple environments
				if (global) {
					_globals[n] = _exports[n] = cl; //provides a way to avoid global namespace pollution. By default, the main classes like TweenLite, Power1, Strong, etc. are added to window unless a GreenSockGlobals is defined. So if you want to have things added to a custom object instead, just do something like window.GreenSockGlobals = {} before loading any GreenSock files. You can even set up an alias like window.GreenSockGlobals = windows.gs = {} so that you can access everything like gs.TweenLite. Also remember that ALL classes are added to the window.com.greensock object (in their respective packages, like com.greensock.easing.Power1, com.greensock.TweenLite, etc.)
					hasModule = typeof module !== "undefined" && module.exports;
					if (!hasModule && "function" === "function" && __webpack_require__(179)) {
						//AMD
						!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
							return cl;
						}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
					} else if (hasModule) {
						//node
						if (ns === moduleName) {
							module.exports = _exports[moduleName] = cl;
							for (i in _exports) {
								cl[i] = _exports[i];
							}
						} else if (_exports[moduleName]) {
							_exports[moduleName][n] = cl;
						}
					}
				}
				for (i = 0; i < this.sc.length; i++) {
					this.sc[i].check();
				}
			}
		};
		this.check(true);
	},


	//used to create Definition instances (which basically registers a class that has dependencies).
	_gsDefine = window._gsDefine = function (ns, dependencies, func, global) {
		return new Definition(ns, dependencies, func, global);
	},


	//a quick way to create a class that doesn't have any dependencies. Returns the class, but first registers it in the GreenSock namespace so that other classes can grab it (other classes might be dependent on the class).
	_class = gs._class = function (ns, func, global) {
		func = func || function () {};
		_gsDefine(ns, [], function () {
			return func;
		}, global);
		return func;
	};

	_gsDefine.globals = _globals;

	/*
  * ----------------------------------------------------------------
  * Ease
  * ----------------------------------------------------------------
  */
	var _baseParams = [0, 0, 1, 1],
	    _blankArray = [],
	    Ease = _class("easing.Ease", function (func, extraParams, type, power) {
		this._func = func;
		this._type = type || 0;
		this._power = power || 0;
		this._params = extraParams ? _baseParams.concat(extraParams) : _baseParams;
	}, true),
	    _easeMap = Ease.map = {},
	    _easeReg = Ease.register = function (ease, names, types, create) {
		var na = names.split(","),
		    i = na.length,
		    ta = (types || "easeIn,easeOut,easeInOut").split(","),
		    e,
		    name,
		    j,
		    type;
		while (--i > -1) {
			name = na[i];
			e = create ? _class("easing." + name, null, true) : gs.easing[name] || {};
			j = ta.length;
			while (--j > -1) {
				type = ta[j];
				_easeMap[name + "." + type] = _easeMap[type + name] = e[type] = ease.getRatio ? ease : ease[type] || new ease();
			}
		}
	};

	p = Ease.prototype;
	p._calcEnd = false;
	p.getRatio = function (p) {
		if (this._func) {
			this._params[0] = p;
			return this._func.apply(null, this._params);
		}
		var t = this._type,
		    pw = this._power,
		    r = t === 1 ? 1 - p : t === 2 ? p : p < 0.5 ? p * 2 : (1 - p) * 2;
		if (pw === 1) {
			r *= r;
		} else if (pw === 2) {
			r *= r * r;
		} else if (pw === 3) {
			r *= r * r * r;
		} else if (pw === 4) {
			r *= r * r * r * r;
		}
		return t === 1 ? 1 - r : t === 2 ? r : p < 0.5 ? r / 2 : 1 - r / 2;
	};

	//create all the standard eases like Linear, Quad, Cubic, Quart, Quint, Strong, Power0, Power1, Power2, Power3, and Power4 (each with easeIn, easeOut, and easeInOut)
	a = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"];
	i = a.length;
	while (--i > -1) {
		p = a[i] + ",Power" + i;
		_easeReg(new Ease(null, null, 1, i), p, "easeOut", true);
		_easeReg(new Ease(null, null, 2, i), p, "easeIn" + (i === 0 ? ",easeNone" : ""));
		_easeReg(new Ease(null, null, 3, i), p, "easeInOut");
	}
	_easeMap.linear = gs.easing.Linear.easeIn;
	_easeMap.swing = gs.easing.Quad.easeInOut; //for jQuery folks


	/*
  * ----------------------------------------------------------------
  * EventDispatcher
  * ----------------------------------------------------------------
  */
	var EventDispatcher = _class("events.EventDispatcher", function (target) {
		this._listeners = {};
		this._eventTarget = target || this;
	});
	p = EventDispatcher.prototype;

	p.addEventListener = function (type, callback, scope, useParam, priority) {
		priority = priority || 0;
		var list = this._listeners[type],
		    index = 0,
		    listener,
		    i;
		if (this === _ticker && !_tickerActive) {
			_ticker.wake();
		}
		if (list == null) {
			this._listeners[type] = list = [];
		}
		i = list.length;
		while (--i > -1) {
			listener = list[i];
			if (listener.c === callback && listener.s === scope) {
				list.splice(i, 1);
			} else if (index === 0 && listener.pr < priority) {
				index = i + 1;
			}
		}
		list.splice(index, 0, { c: callback, s: scope, up: useParam, pr: priority });
	};

	p.removeEventListener = function (type, callback) {
		var list = this._listeners[type],
		    i;
		if (list) {
			i = list.length;
			while (--i > -1) {
				if (list[i].c === callback) {
					list.splice(i, 1);
					return;
				}
			}
		}
	};

	p.dispatchEvent = function (type) {
		var list = this._listeners[type],
		    i,
		    t,
		    listener;
		if (list) {
			i = list.length;
			if (i > 1) {
				list = list.slice(0); //in case addEventListener() is called from within a listener/callback (otherwise the index could change, resulting in a skip)
			}
			t = this._eventTarget;
			while (--i > -1) {
				listener = list[i];
				if (listener) {
					if (listener.up) {
						listener.c.call(listener.s || t, { type: type, target: t });
					} else {
						listener.c.call(listener.s || t);
					}
				}
			}
		}
	};

	/*
  * ----------------------------------------------------------------
  * Ticker
  * ----------------------------------------------------------------
  */
	var _reqAnimFrame = window.requestAnimationFrame,
	    _cancelAnimFrame = window.cancelAnimationFrame,
	    _getTime = Date.now || function () {
		return new Date().getTime();
	},
	    _lastUpdate = _getTime();

	//now try to determine the requestAnimationFrame and cancelAnimationFrame functions and if none are found, we'll use a setTimeout()/clearTimeout() polyfill.
	a = ["ms", "moz", "webkit", "o"];
	i = a.length;
	while (--i > -1 && !_reqAnimFrame) {
		_reqAnimFrame = window[a[i] + "RequestAnimationFrame"];
		_cancelAnimFrame = window[a[i] + "CancelAnimationFrame"] || window[a[i] + "CancelRequestAnimationFrame"];
	}

	_class("Ticker", function (fps, useRAF) {
		var _self = this,
		    _startTime = _getTime(),
		    _useRAF = useRAF !== false && _reqAnimFrame ? "auto" : false,
		    _lagThreshold = 500,
		    _adjustedLag = 33,
		    _tickWord = "tick",
		    //helps reduce gc burden
		_fps,
		    _req,
		    _id,
		    _gap,
		    _nextTime,
		    _tick = function _tick(manual) {
			var elapsed = _getTime() - _lastUpdate,
			    overlap,
			    dispatch;
			if (elapsed > _lagThreshold) {
				_startTime += elapsed - _adjustedLag;
			}
			_lastUpdate += elapsed;
			_self.time = (_lastUpdate - _startTime) / 1000;
			overlap = _self.time - _nextTime;
			if (!_fps || overlap > 0 || manual === true) {
				_self.frame++;
				_nextTime += overlap + (overlap >= _gap ? 0.004 : _gap - overlap);
				dispatch = true;
			}
			if (manual !== true) {
				//make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
				_id = _req(_tick);
			}
			if (dispatch) {
				_self.dispatchEvent(_tickWord);
			}
		};

		EventDispatcher.call(_self);
		_self.time = _self.frame = 0;
		_self.tick = function () {
			_tick(true);
		};

		_self.lagSmoothing = function (threshold, adjustedLag) {
			_lagThreshold = threshold || 1 / _tinyNum; //zero should be interpreted as basically unlimited
			_adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
		};

		_self.sleep = function () {
			if (_id == null) {
				return;
			}
			if (!_useRAF || !_cancelAnimFrame) {
				clearTimeout(_id);
			} else {
				_cancelAnimFrame(_id);
			}
			_req = _emptyFunc;
			_id = null;
			if (_self === _ticker) {
				_tickerActive = false;
			}
		};

		_self.wake = function (seamless) {
			if (_id !== null) {
				_self.sleep();
			} else if (seamless) {
				_startTime += -_lastUpdate + (_lastUpdate = _getTime());
			} else if (_self.frame > 10) {
				//don't trigger lagSmoothing if we're just waking up, and make sure that at least 10 frames have elapsed because of the iOS bug that we work around below with the 1.5-second setTimout().
				_lastUpdate = _getTime() - _lagThreshold + 5;
			}
			_req = _fps === 0 ? _emptyFunc : !_useRAF || !_reqAnimFrame ? function (f) {
				return setTimeout(f, (_nextTime - _self.time) * 1000 + 1 | 0);
			} : _reqAnimFrame;
			if (_self === _ticker) {
				_tickerActive = true;
			}
			_tick(2);
		};

		_self.fps = function (value) {
			if (!arguments.length) {
				return _fps;
			}
			_fps = value;
			_gap = 1 / (_fps || 60);
			_nextTime = this.time + _gap;
			_self.wake();
		};

		_self.useRAF = function (value) {
			if (!arguments.length) {
				return _useRAF;
			}
			_self.sleep();
			_useRAF = value;
			_self.fps(_fps);
		};
		_self.fps(fps);

		//a bug in iOS 6 Safari occasionally prevents the requestAnimationFrame from working initially, so we use a 1.5-second timeout that automatically falls back to setTimeout() if it senses this condition.
		setTimeout(function () {
			if (_useRAF === "auto" && _self.frame < 5 && _doc.visibilityState !== "hidden") {
				_self.useRAF(false);
			}
		}, 1500);
	});

	p = gs.Ticker.prototype = new gs.events.EventDispatcher();
	p.constructor = gs.Ticker;

	/*
  * ----------------------------------------------------------------
  * Animation
  * ----------------------------------------------------------------
  */
	var Animation = _class("core.Animation", function (duration, vars) {
		this.vars = vars = vars || {};
		this._duration = this._totalDuration = duration || 0;
		this._delay = Number(vars.delay) || 0;
		this._timeScale = 1;
		this._active = vars.immediateRender === true;
		this.data = vars.data;
		this._reversed = vars.reversed === true;

		if (!_rootTimeline) {
			return;
		}
		if (!_tickerActive) {
			//some browsers (like iOS 6 Safari) shut down JavaScript execution when the tab is disabled and they [occasionally] neglect to start up requestAnimationFrame again when returning - this code ensures that the engine starts up again properly.
			_ticker.wake();
		}

		var tl = this.vars.useFrames ? _rootFramesTimeline : _rootTimeline;
		tl.add(this, tl._time);

		if (this.vars.paused) {
			this.paused(true);
		}
	});

	_ticker = Animation.ticker = new gs.Ticker();
	p = Animation.prototype;
	p._dirty = p._gc = p._initted = p._paused = false;
	p._totalTime = p._time = 0;
	p._rawPrevTime = -1;
	p._next = p._last = p._onUpdate = p._timeline = p.timeline = null;
	p._paused = false;

	//some browsers (like iOS) occasionally drop the requestAnimationFrame event when the user switches to a different tab and then comes back again, so we use a 2-second setTimeout() to sense if/when that condition occurs and then wake() the ticker.
	var _checkTimeout = function _checkTimeout() {
		if (_tickerActive && _getTime() - _lastUpdate > 2000) {
			_ticker.wake();
		}
		setTimeout(_checkTimeout, 2000);
	};
	_checkTimeout();

	p.play = function (from, suppressEvents) {
		if (from != null) {
			this.seek(from, suppressEvents);
		}
		return this.reversed(false).paused(false);
	};

	p.pause = function (atTime, suppressEvents) {
		if (atTime != null) {
			this.seek(atTime, suppressEvents);
		}
		return this.paused(true);
	};

	p.resume = function (from, suppressEvents) {
		if (from != null) {
			this.seek(from, suppressEvents);
		}
		return this.paused(false);
	};

	p.seek = function (time, suppressEvents) {
		return this.totalTime(Number(time), suppressEvents !== false);
	};

	p.restart = function (includeDelay, suppressEvents) {
		return this.reversed(false).paused(false).totalTime(includeDelay ? -this._delay : 0, suppressEvents !== false, true);
	};

	p.reverse = function (from, suppressEvents) {
		if (from != null) {
			this.seek(from || this.totalDuration(), suppressEvents);
		}
		return this.reversed(true).paused(false);
	};

	p.render = function (time, suppressEvents, force) {
		//stub - we override this method in subclasses.
	};

	p.invalidate = function () {
		this._time = this._totalTime = 0;
		this._initted = this._gc = false;
		this._rawPrevTime = -1;
		if (this._gc || !this.timeline) {
			this._enabled(true);
		}
		return this;
	};

	p.isActive = function () {
		var tl = this._timeline,
		    //the 2 root timelines won't have a _timeline; they're always active.
		startTime = this._startTime,
		    rawTime;
		return !tl || !this._gc && !this._paused && tl.isActive() && (rawTime = tl.rawTime(true)) >= startTime && rawTime < startTime + this.totalDuration() / this._timeScale;
	};

	p._enabled = function (enabled, ignoreTimeline) {
		if (!_tickerActive) {
			_ticker.wake();
		}
		this._gc = !enabled;
		this._active = this.isActive();
		if (ignoreTimeline !== true) {
			if (enabled && !this.timeline) {
				this._timeline.add(this, this._startTime - this._delay);
			} else if (!enabled && this.timeline) {
				this._timeline._remove(this, true);
			}
		}
		return false;
	};

	p._kill = function (vars, target) {
		return this._enabled(false, false);
	};

	p.kill = function (vars, target) {
		this._kill(vars, target);
		return this;
	};

	p._uncache = function (includeSelf) {
		var tween = includeSelf ? this : this.timeline;
		while (tween) {
			tween._dirty = true;
			tween = tween.timeline;
		}
		return this;
	};

	p._swapSelfInParams = function (params) {
		var i = params.length,
		    copy = params.concat();
		while (--i > -1) {
			if (params[i] === "{self}") {
				copy[i] = this;
			}
		}
		return copy;
	};

	p._callback = function (type) {
		var v = this.vars,
		    callback = v[type],
		    params = v[type + "Params"],
		    scope = v[type + "Scope"] || v.callbackScope || this,
		    l = params ? params.length : 0;
		switch (l) {//speed optimization; call() is faster than apply() so use it when there are only a few parameters (which is by far most common). Previously we simply did var v = this.vars; v[type].apply(v[type + "Scope"] || v.callbackScope || this, v[type + "Params"] || _blankArray);
			case 0:
				callback.call(scope);break;
			case 1:
				callback.call(scope, params[0]);break;
			case 2:
				callback.call(scope, params[0], params[1]);break;
			default:
				callback.apply(scope, params);
		}
	};

	//----Animation getters/setters --------------------------------------------------------

	p.eventCallback = function (type, callback, params, scope) {
		if ((type || "").substr(0, 2) === "on") {
			var v = this.vars;
			if (arguments.length === 1) {
				return v[type];
			}
			if (callback == null) {
				delete v[type];
			} else {
				v[type] = callback;
				v[type + "Params"] = _isArray(params) && params.join("").indexOf("{self}") !== -1 ? this._swapSelfInParams(params) : params;
				v[type + "Scope"] = scope;
			}
			if (type === "onUpdate") {
				this._onUpdate = callback;
			}
		}
		return this;
	};

	p.delay = function (value) {
		if (!arguments.length) {
			return this._delay;
		}
		if (this._timeline.smoothChildTiming) {
			this.startTime(this._startTime + value - this._delay);
		}
		this._delay = value;
		return this;
	};

	p.duration = function (value) {
		if (!arguments.length) {
			this._dirty = false;
			return this._duration;
		}
		this._duration = this._totalDuration = value;
		this._uncache(true); //true in case it's a TweenMax or TimelineMax that has a repeat - we'll need to refresh the totalDuration.
		if (this._timeline.smoothChildTiming) if (this._time > 0) if (this._time < this._duration) if (value !== 0) {
			this.totalTime(this._totalTime * (value / this._duration), true);
		}
		return this;
	};

	p.totalDuration = function (value) {
		this._dirty = false;
		return !arguments.length ? this._totalDuration : this.duration(value);
	};

	p.time = function (value, suppressEvents) {
		if (!arguments.length) {
			return this._time;
		}
		if (this._dirty) {
			this.totalDuration();
		}
		return this.totalTime(value > this._duration ? this._duration : value, suppressEvents);
	};

	p.totalTime = function (time, suppressEvents, uncapped) {
		if (!_tickerActive) {
			_ticker.wake();
		}
		if (!arguments.length) {
			return this._totalTime;
		}
		if (this._timeline) {
			if (time < 0 && !uncapped) {
				time += this.totalDuration();
			}
			if (this._timeline.smoothChildTiming) {
				if (this._dirty) {
					this.totalDuration();
				}
				var totalDuration = this._totalDuration,
				    tl = this._timeline;
				if (time > totalDuration && !uncapped) {
					time = totalDuration;
				}
				this._startTime = (this._paused ? this._pauseTime : tl._time) - (!this._reversed ? time : totalDuration - time) / this._timeScale;
				if (!tl._dirty) {
					//for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
					this._uncache(false);
				}
				//in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The startTime of that child would get pushed out, but one of the ancestors may have completed.
				if (tl._timeline) {
					while (tl._timeline) {
						if (tl._timeline._time !== (tl._startTime + tl._totalTime) / tl._timeScale) {
							tl.totalTime(tl._totalTime, true);
						}
						tl = tl._timeline;
					}
				}
			}
			if (this._gc) {
				this._enabled(true, false);
			}
			if (this._totalTime !== time || this._duration === 0) {
				if (_lazyTweens.length) {
					_lazyRender();
				}
				this.render(time, suppressEvents, false);
				if (_lazyTweens.length) {
					//in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
					_lazyRender();
				}
			}
		}
		return this;
	};

	p.progress = p.totalProgress = function (value, suppressEvents) {
		var duration = this.duration();
		return !arguments.length ? duration ? this._time / duration : this.ratio : this.totalTime(duration * value, suppressEvents);
	};

	p.startTime = function (value) {
		if (!arguments.length) {
			return this._startTime;
		}
		if (value !== this._startTime) {
			this._startTime = value;
			if (this.timeline) if (this.timeline._sortChildren) {
				this.timeline.add(this, value - this._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
			}
		}
		return this;
	};

	p.endTime = function (includeRepeats) {
		return this._startTime + (includeRepeats != false ? this.totalDuration() : this.duration()) / this._timeScale;
	};

	p.timeScale = function (value) {
		if (!arguments.length) {
			return this._timeScale;
		}
		value = value || _tinyNum; //can't allow zero because it'll throw the math off
		if (this._timeline && this._timeline.smoothChildTiming) {
			var pauseTime = this._pauseTime,
			    t = pauseTime || pauseTime === 0 ? pauseTime : this._timeline.totalTime();
			this._startTime = t - (t - this._startTime) * this._timeScale / value;
		}
		this._timeScale = value;
		return this._uncache(false);
	};

	p.reversed = function (value) {
		if (!arguments.length) {
			return this._reversed;
		}
		if (value != this._reversed) {
			this._reversed = value;
			this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, true);
		}
		return this;
	};

	p.paused = function (value) {
		if (!arguments.length) {
			return this._paused;
		}
		var tl = this._timeline,
		    raw,
		    elapsed;
		if (value != this._paused) if (tl) {
			if (!_tickerActive && !value) {
				_ticker.wake();
			}
			raw = tl.rawTime();
			elapsed = raw - this._pauseTime;
			if (!value && tl.smoothChildTiming) {
				this._startTime += elapsed;
				this._uncache(false);
			}
			this._pauseTime = value ? raw : null;
			this._paused = value;
			this._active = this.isActive();
			if (!value && elapsed !== 0 && this._initted && this.duration()) {
				raw = tl.smoothChildTiming ? this._totalTime : (raw - this._startTime) / this._timeScale;
				this.render(raw, raw === this._totalTime, true); //in case the target's properties changed via some other tween or manual update by the user, we should force a render.
			}
		}
		if (this._gc && !value) {
			this._enabled(true, false);
		}
		return this;
	};

	/*
  * ----------------------------------------------------------------
  * SimpleTimeline
  * ----------------------------------------------------------------
  */
	var SimpleTimeline = _class("core.SimpleTimeline", function (vars) {
		Animation.call(this, 0, vars);
		this.autoRemoveChildren = this.smoothChildTiming = true;
	});

	p = SimpleTimeline.prototype = new Animation();
	p.constructor = SimpleTimeline;
	p.kill()._gc = false;
	p._first = p._last = p._recent = null;
	p._sortChildren = false;

	p.add = p.insert = function (child, position, align, stagger) {
		var prevTween, st;
		child._startTime = Number(position || 0) + child._delay;
		if (child._paused) if (this !== child._timeline) {
			//we only adjust the _pauseTime if it wasn't in this timeline already. Remember, sometimes a tween will be inserted again into the same timeline when its startTime is changed so that the tweens in the TimelineLite/Max are re-ordered properly in the linked list (so everything renders in the proper order).
			child._pauseTime = child._startTime + (this.rawTime() - child._startTime) / child._timeScale;
		}
		if (child.timeline) {
			child.timeline._remove(child, true); //removes from existing timeline so that it can be properly added to this one.
		}
		child.timeline = child._timeline = this;
		if (child._gc) {
			child._enabled(true, true);
		}
		prevTween = this._last;
		if (this._sortChildren) {
			st = child._startTime;
			while (prevTween && prevTween._startTime > st) {
				prevTween = prevTween._prev;
			}
		}
		if (prevTween) {
			child._next = prevTween._next;
			prevTween._next = child;
		} else {
			child._next = this._first;
			this._first = child;
		}
		if (child._next) {
			child._next._prev = child;
		} else {
			this._last = child;
		}
		child._prev = prevTween;
		this._recent = child;
		if (this._timeline) {
			this._uncache(true);
		}
		return this;
	};

	p._remove = function (tween, skipDisable) {
		if (tween.timeline === this) {
			if (!skipDisable) {
				tween._enabled(false, true);
			}

			if (tween._prev) {
				tween._prev._next = tween._next;
			} else if (this._first === tween) {
				this._first = tween._next;
			}
			if (tween._next) {
				tween._next._prev = tween._prev;
			} else if (this._last === tween) {
				this._last = tween._prev;
			}
			tween._next = tween._prev = tween.timeline = null;
			if (tween === this._recent) {
				this._recent = this._last;
			}

			if (this._timeline) {
				this._uncache(true);
			}
		}
		return this;
	};

	p.render = function (time, suppressEvents, force) {
		var tween = this._first,
		    next;
		this._totalTime = this._time = this._rawPrevTime = time;
		while (tween) {
			next = tween._next; //record it here because the value could change after rendering...
			if (tween._active || time >= tween._startTime && !tween._paused) {
				if (!tween._reversed) {
					tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
				} else {
					tween.render((!tween._dirty ? tween._totalDuration : tween.totalDuration()) - (time - tween._startTime) * tween._timeScale, suppressEvents, force);
				}
			}
			tween = next;
		}
	};

	p.rawTime = function () {
		if (!_tickerActive) {
			_ticker.wake();
		}
		return this._totalTime;
	};

	/*
  * ----------------------------------------------------------------
  * TweenLite
  * ----------------------------------------------------------------
  */
	var TweenLite = _class("TweenLite", function (target, duration, vars) {
		Animation.call(this, duration, vars);
		this.render = TweenLite.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)

		if (target == null) {
			throw "Cannot tween a null target.";
		}

		this.target = target = typeof target !== "string" ? target : TweenLite.selector(target) || target;

		var isSelector = target.jquery || target.length && target !== window && target[0] && (target[0] === window || target[0].nodeType && target[0].style && !target.nodeType),
		    overwrite = this.vars.overwrite,
		    i,
		    targ,
		    targets;

		this._overwrite = overwrite = overwrite == null ? _overwriteLookup[TweenLite.defaultOverwrite] : typeof overwrite === "number" ? overwrite >> 0 : _overwriteLookup[overwrite];

		if ((isSelector || target instanceof Array || target.push && _isArray(target)) && typeof target[0] !== "number") {
			this._targets = targets = _slice(target); //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
			this._propLookup = [];
			this._siblings = [];
			for (i = 0; i < targets.length; i++) {
				targ = targets[i];
				if (!targ) {
					targets.splice(i--, 1);
					continue;
				} else if (typeof targ === "string") {
					targ = targets[i--] = TweenLite.selector(targ); //in case it's an array of strings
					if (typeof targ === "string") {
						targets.splice(i + 1, 1); //to avoid an endless loop (can't imagine why the selector would return a string, but just in case)
					}
					continue;
				} else if (targ.length && targ !== window && targ[0] && (targ[0] === window || targ[0].nodeType && targ[0].style && !targ.nodeType)) {
					//in case the user is passing in an array of selector objects (like jQuery objects), we need to check one more level and pull things out if necessary. Also note that <select> elements pass all the criteria regarding length and the first child having style, so we must also check to ensure the target isn't an HTML node itself.
					targets.splice(i--, 1);
					this._targets = targets = targets.concat(_slice(targ));
					continue;
				}
				this._siblings[i] = _register(targ, this, false);
				if (overwrite === 1) if (this._siblings[i].length > 1) {
					_applyOverwrite(targ, this, null, 1, this._siblings[i]);
				}
			}
		} else {
			this._propLookup = {};
			this._siblings = _register(target, this, false);
			if (overwrite === 1) if (this._siblings.length > 1) {
				_applyOverwrite(target, this, null, 1, this._siblings);
			}
		}
		if (this.vars.immediateRender || duration === 0 && this._delay === 0 && this.vars.immediateRender !== false) {
			this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
			this.render(Math.min(0, -this._delay)); //in case delay is negative
		}
	}, true),
	    _isSelector = function _isSelector(v) {
		return v && v.length && v !== window && v[0] && (v[0] === window || v[0].nodeType && v[0].style && !v.nodeType); //we cannot check "nodeType" if the target is window from within an iframe, otherwise it will trigger a security error in some browsers like Firefox.
	},
	    _autoCSS = function _autoCSS(vars, target) {
		var css = {},
		    p;
		for (p in vars) {
			if (!_reservedProps[p] && (!(p in target) || p === "transform" || p === "x" || p === "y" || p === "width" || p === "height" || p === "className" || p === "border") && (!_plugins[p] || _plugins[p] && _plugins[p]._autoCSS)) {
				//note: <img> elements contain read-only "x" and "y" properties. We should also prioritize editing css width/height rather than the element's properties.
				css[p] = vars[p];
				delete vars[p];
			}
		}
		vars.css = css;
	};

	p = TweenLite.prototype = new Animation();
	p.constructor = TweenLite;
	p.kill()._gc = false;

	//----TweenLite defaults, overwrite management, and root updates ----------------------------------------------------

	p.ratio = 0;
	p._firstPT = p._targets = p._overwrittenProps = p._startAt = null;
	p._notifyPluginsOfEnabled = p._lazy = false;

	TweenLite.version = "1.19.1";
	TweenLite.defaultEase = p._ease = new Ease(null, null, 1, 1);
	TweenLite.defaultOverwrite = "auto";
	TweenLite.ticker = _ticker;
	TweenLite.autoSleep = 120;
	TweenLite.lagSmoothing = function (threshold, adjustedLag) {
		_ticker.lagSmoothing(threshold, adjustedLag);
	};

	TweenLite.selector = window.$ || window.jQuery || function (e) {
		var selector = window.$ || window.jQuery;
		if (selector) {
			TweenLite.selector = selector;
			return selector(e);
		}
		return typeof _doc === "undefined" ? e : _doc.querySelectorAll ? _doc.querySelectorAll(e) : _doc.getElementById(e.charAt(0) === "#" ? e.substr(1) : e);
	};

	var _lazyTweens = [],
	    _lazyLookup = {},
	    _numbersExp = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,

	//_nonNumbersExp = /(?:([\-+](?!(\d|=)))|[^\d\-+=e]|(e(?![\-+][\d])))+/ig,
	_setRatio = function _setRatio(v) {
		var pt = this._firstPT,
		    min = 0.000001,
		    val;
		while (pt) {
			val = !pt.blob ? pt.c * v + pt.s : v === 1 ? this.end : v ? this.join("") : this.start;
			if (pt.m) {
				val = pt.m(val, this._target || pt.t);
			} else if (val < min) if (val > -min && !pt.blob) {
				//prevents issues with converting very small numbers to strings in the browser
				val = 0;
			}
			if (!pt.f) {
				pt.t[pt.p] = val;
			} else if (pt.fp) {
				pt.t[pt.p](pt.fp, val);
			} else {
				pt.t[pt.p](val);
			}
			pt = pt._next;
		}
	},

	//compares two strings (start/end), finds the numbers that are different and spits back an array representing the whole value but with the changing values isolated as elements. For example, "rgb(0,0,0)" and "rgb(100,50,0)" would become ["rgb(", 0, ",", 50, ",0)"]. Notice it merges the parts that are identical (performance optimization). The array also has a linked list of PropTweens attached starting with _firstPT that contain the tweening data (t, p, s, c, f, etc.). It also stores the starting value as a "start" property so that we can revert to it if/when necessary, like when a tween rewinds fully. If the quantity of numbers differs between the start and end, it will always prioritize the end value(s). The pt parameter is optional - it's for a PropTween that will be appended to the end of the linked list and is typically for actually setting the value after all of the elements have been updated (with array.join("")).
	_blobDif = function _blobDif(start, end, filter, pt) {
		var a = [],
		    charIndex = 0,
		    s = "",
		    color = 0,
		    startNums,
		    endNums,
		    num,
		    i,
		    l,
		    nonNumbers,
		    currentNum;
		a.start = start;
		a.end = end;
		start = a[0] = start + ""; //ensure values are strings
		end = a[1] = end + "";
		if (filter) {
			filter(a); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.
			start = a[0];
			end = a[1];
		}
		a.length = 0;
		startNums = start.match(_numbersExp) || [];
		endNums = end.match(_numbersExp) || [];
		if (pt) {
			pt._next = null;
			pt.blob = 1;
			a._firstPT = a._applyPT = pt; //apply last in the linked list (which means inserting it first)
		}
		l = endNums.length;
		for (i = 0; i < l; i++) {
			currentNum = endNums[i];
			nonNumbers = end.substr(charIndex, end.indexOf(currentNum, charIndex) - charIndex);
			s += nonNumbers || !i ? nonNumbers : ","; //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
			charIndex += nonNumbers.length;
			if (color) {
				//sense rgba() values and round them.
				color = (color + 1) % 5;
			} else if (nonNumbers.substr(-5) === "rgba(") {
				color = 1;
			}
			if (currentNum === startNums[i] || startNums.length <= i) {
				s += currentNum;
			} else {
				if (s) {
					a.push(s);
					s = "";
				}
				num = parseFloat(startNums[i]);
				a.push(num);
				a._firstPT = { _next: a._firstPT, t: a, p: a.length - 1, s: num, c: (currentNum.charAt(1) === "=" ? parseInt(currentNum.charAt(0) + "1", 10) * parseFloat(currentNum.substr(2)) : parseFloat(currentNum) - num) || 0, f: 0, m: color && color < 4 ? Math.round : 0 };
				//note: we don't set _prev because we'll never need to remove individual PropTweens from this list.
			}
			charIndex += currentNum.length;
		}
		s += end.substr(charIndex);
		if (s) {
			a.push(s);
		}
		a.setRatio = _setRatio;
		return a;
	},

	//note: "funcParam" is only necessary for function-based getters/setters that require an extra parameter like getAttribute("width") and setAttribute("width", value). In this example, funcParam would be "width". Used by AttrPlugin for example.
	_addPropTween = function _addPropTween(target, prop, start, end, overwriteProp, mod, funcParam, stringFilter, index) {
		if (typeof end === "function") {
			end = end(index || 0, target);
		}
		var type = _typeof(target[prop]),
		    getterName = type !== "function" ? "" : prop.indexOf("set") || typeof target["get" + prop.substr(3)] !== "function" ? prop : "get" + prop.substr(3),
		    s = start !== "get" ? start : !getterName ? target[prop] : funcParam ? target[getterName](funcParam) : target[getterName](),
		    isRelative = typeof end === "string" && end.charAt(1) === "=",
		    pt = { t: target, p: prop, s: s, f: type === "function", pg: 0, n: overwriteProp || prop, m: !mod ? 0 : typeof mod === "function" ? mod : Math.round, pr: 0, c: isRelative ? parseInt(end.charAt(0) + "1", 10) * parseFloat(end.substr(2)) : parseFloat(end) - s || 0 },
		    blob;

		if (typeof s !== "number" || typeof end !== "number" && !isRelative) {
			if (funcParam || isNaN(s) || !isRelative && isNaN(end) || typeof s === "boolean" || typeof end === "boolean") {
				//a blob (string that has multiple numbers in it)
				pt.fp = funcParam;
				blob = _blobDif(s, isRelative ? pt.s + pt.c : end, stringFilter || TweenLite.defaultStringFilter, pt);
				pt = { t: blob, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: overwriteProp || prop, pr: 0, m: 0 }; //"2" indicates it's a Blob property tween. Needed for RoundPropsPlugin for example.
			} else {
				pt.s = parseFloat(s);
				if (!isRelative) {
					pt.c = parseFloat(end) - pt.s || 0;
				}
			}
		}
		if (pt.c) {
			//only add it to the linked list if there's a change.
			if (pt._next = this._firstPT) {
				pt._next._prev = pt;
			}
			this._firstPT = pt;
			return pt;
		}
	},
	    _internals = TweenLite._internals = { isArray: _isArray, isSelector: _isSelector, lazyTweens: _lazyTweens, blobDif: _blobDif },
	    //gives us a way to expose certain private values to other GreenSock classes without contaminating tha main TweenLite object.
	_plugins = TweenLite._plugins = {},
	    _tweenLookup = _internals.tweenLookup = {},
	    _tweenLookupNum = 0,
	    _reservedProps = _internals.reservedProps = { ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1, callbackScope: 1, stringFilter: 1, id: 1 },
	    _overwriteLookup = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, "true": 1, "false": 0 },
	    _rootFramesTimeline = Animation._rootFramesTimeline = new SimpleTimeline(),
	    _rootTimeline = Animation._rootTimeline = new SimpleTimeline(),
	    _nextGCFrame = 30,
	    _lazyRender = _internals.lazyRender = function () {
		var i = _lazyTweens.length,
		    tween;
		_lazyLookup = {};
		while (--i > -1) {
			tween = _lazyTweens[i];
			if (tween && tween._lazy !== false) {
				tween.render(tween._lazy[0], tween._lazy[1], true);
				tween._lazy = false;
			}
		}
		_lazyTweens.length = 0;
	};

	_rootTimeline._startTime = _ticker.time;
	_rootFramesTimeline._startTime = _ticker.frame;
	_rootTimeline._active = _rootFramesTimeline._active = true;
	setTimeout(_lazyRender, 1); //on some mobile devices, there isn't a "tick" before code runs which means any lazy renders wouldn't run before the next official "tick".

	Animation._updateRoot = TweenLite.render = function () {
		var i, a, p;
		if (_lazyTweens.length) {
			//if code is run outside of the requestAnimationFrame loop, there may be tweens queued AFTER the engine refreshed, so we need to ensure any pending renders occur before we refresh again.
			_lazyRender();
		}
		_rootTimeline.render((_ticker.time - _rootTimeline._startTime) * _rootTimeline._timeScale, false, false);
		_rootFramesTimeline.render((_ticker.frame - _rootFramesTimeline._startTime) * _rootFramesTimeline._timeScale, false, false);
		if (_lazyTweens.length) {
			_lazyRender();
		}
		if (_ticker.frame >= _nextGCFrame) {
			//dump garbage every 120 frames or whatever the user sets TweenLite.autoSleep to
			_nextGCFrame = _ticker.frame + (parseInt(TweenLite.autoSleep, 10) || 120);
			for (p in _tweenLookup) {
				a = _tweenLookup[p].tweens;
				i = a.length;
				while (--i > -1) {
					if (a[i]._gc) {
						a.splice(i, 1);
					}
				}
				if (a.length === 0) {
					delete _tweenLookup[p];
				}
			}
			//if there are no more tweens in the root timelines, or if they're all paused, make the _timer sleep to reduce load on the CPU slightly
			p = _rootTimeline._first;
			if (!p || p._paused) if (TweenLite.autoSleep && !_rootFramesTimeline._first && _ticker._listeners.tick.length === 1) {
				while (p && p._paused) {
					p = p._next;
				}
				if (!p) {
					_ticker.sleep();
				}
			}
		}
	};

	_ticker.addEventListener("tick", Animation._updateRoot);

	var _register = function _register(target, tween, scrub) {
		var id = target._gsTweenID,
		    a,
		    i;
		if (!_tweenLookup[id || (target._gsTweenID = id = "t" + _tweenLookupNum++)]) {
			_tweenLookup[id] = { target: target, tweens: [] };
		}
		if (tween) {
			a = _tweenLookup[id].tweens;
			a[i = a.length] = tween;
			if (scrub) {
				while (--i > -1) {
					if (a[i] === tween) {
						a.splice(i, 1);
					}
				}
			}
		}
		return _tweenLookup[id].tweens;
	},
	    _onOverwrite = function _onOverwrite(overwrittenTween, overwritingTween, target, killedProps) {
		var func = overwrittenTween.vars.onOverwrite,
		    r1,
		    r2;
		if (func) {
			r1 = func(overwrittenTween, overwritingTween, target, killedProps);
		}
		func = TweenLite.onOverwrite;
		if (func) {
			r2 = func(overwrittenTween, overwritingTween, target, killedProps);
		}
		return r1 !== false && r2 !== false;
	},
	    _applyOverwrite = function _applyOverwrite(target, tween, props, mode, siblings) {
		var i, changed, curTween, l;
		if (mode === 1 || mode >= 4) {
			l = siblings.length;
			for (i = 0; i < l; i++) {
				if ((curTween = siblings[i]) !== tween) {
					if (!curTween._gc) {
						if (curTween._kill(null, target, tween)) {
							changed = true;
						}
					}
				} else if (mode === 5) {
					break;
				}
			}
			return changed;
		}
		//NOTE: Add 0.0000000001 to overcome floating point errors that can cause the startTime to be VERY slightly off (when a tween's time() is set for example)
		var startTime = tween._startTime + _tinyNum,
		    overlaps = [],
		    oCount = 0,
		    zeroDur = tween._duration === 0,
		    globalStart;
		i = siblings.length;
		while (--i > -1) {
			if ((curTween = siblings[i]) === tween || curTween._gc || curTween._paused) {
				//ignore
			} else if (curTween._timeline !== tween._timeline) {
				globalStart = globalStart || _checkOverlap(tween, 0, zeroDur);
				if (_checkOverlap(curTween, globalStart, zeroDur) === 0) {
					overlaps[oCount++] = curTween;
				}
			} else if (curTween._startTime <= startTime) if (curTween._startTime + curTween.totalDuration() / curTween._timeScale > startTime) if (!((zeroDur || !curTween._initted) && startTime - curTween._startTime <= 0.0000000002)) {
				overlaps[oCount++] = curTween;
			}
		}

		i = oCount;
		while (--i > -1) {
			curTween = overlaps[i];
			if (mode === 2) if (curTween._kill(props, target, tween)) {
				changed = true;
			}
			if (mode !== 2 || !curTween._firstPT && curTween._initted) {
				if (mode !== 2 && !_onOverwrite(curTween, tween)) {
					continue;
				}
				if (curTween._enabled(false, false)) {
					//if all property tweens have been overwritten, kill the tween.
					changed = true;
				}
			}
		}
		return changed;
	},
	    _checkOverlap = function _checkOverlap(tween, reference, zeroDur) {
		var tl = tween._timeline,
		    ts = tl._timeScale,
		    t = tween._startTime;
		while (tl._timeline) {
			t += tl._startTime;
			ts *= tl._timeScale;
			if (tl._paused) {
				return -100;
			}
			tl = tl._timeline;
		}
		t /= ts;
		return t > reference ? t - reference : zeroDur && t === reference || !tween._initted && t - reference < 2 * _tinyNum ? _tinyNum : (t += tween.totalDuration() / tween._timeScale / ts) > reference + _tinyNum ? 0 : t - reference - _tinyNum;
	};

	//---- TweenLite instance methods -----------------------------------------------------------------------------

	p._init = function () {
		var v = this.vars,
		    op = this._overwrittenProps,
		    dur = this._duration,
		    immediate = !!v.immediateRender,
		    ease = v.ease,
		    i,
		    initPlugins,
		    pt,
		    p,
		    startVars,
		    l;
		if (v.startAt) {
			if (this._startAt) {
				this._startAt.render(-1, true); //if we've run a startAt previously (when the tween instantiated), we should revert it so that the values re-instantiate correctly particularly for relative tweens. Without this, a TweenLite.fromTo(obj, 1, {x:"+=100"}, {x:"-=100"}), for example, would actually jump to +=200 because the startAt would run twice, doubling the relative change.
				this._startAt.kill();
			}
			startVars = {};
			for (p in v.startAt) {
				//copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, 1, from, to).fromTo(e, 1, to, from);
				startVars[p] = v.startAt[p];
			}
			startVars.overwrite = false;
			startVars.immediateRender = true;
			startVars.lazy = immediate && v.lazy !== false;
			startVars.startAt = startVars.delay = null; //no nesting of startAt objects allowed (otherwise it could cause an infinite loop).
			this._startAt = TweenLite.to(this.target, 0, startVars);
			if (immediate) {
				if (this._time > 0) {
					this._startAt = null; //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in TimelineLite/Max instances where immediateRender was false (which is the default in the convenience methods like from()).
				} else if (dur !== 0) {
					return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a TimelineLite or TimelineMax, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
				}
			}
		} else if (v.runBackwards && dur !== 0) {
			//from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
			if (this._startAt) {
				this._startAt.render(-1, true);
				this._startAt.kill();
				this._startAt = null;
			} else {
				if (this._time !== 0) {
					//in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
					immediate = false;
				}
				pt = {};
				for (p in v) {
					//copy props into a new object and skip any reserved props, otherwise onComplete or onUpdate or onStart could fire. We should, however, permit autoCSS to go through.
					if (!_reservedProps[p] || p === "autoCSS") {
						pt[p] = v[p];
					}
				}
				pt.overwrite = 0;
				pt.data = "isFromStart"; //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
				pt.lazy = immediate && v.lazy !== false;
				pt.immediateRender = immediate; //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
				this._startAt = TweenLite.to(this.target, 0, pt);
				if (!immediate) {
					this._startAt._init(); //ensures that the initial values are recorded
					this._startAt._enabled(false); //no need to have the tween render on the next cycle. Disable it because we'll always manually control the renders of the _startAt tween.
					if (this.vars.immediateRender) {
						this._startAt = null;
					}
				} else if (this._time === 0) {
					return;
				}
			}
		}
		this._ease = ease = !ease ? TweenLite.defaultEase : ease instanceof Ease ? ease : typeof ease === "function" ? new Ease(ease, v.easeParams) : _easeMap[ease] || TweenLite.defaultEase;
		if (v.easeParams instanceof Array && ease.config) {
			this._ease = ease.config.apply(ease, v.easeParams);
		}
		this._easeType = this._ease._type;
		this._easePower = this._ease._power;
		this._firstPT = null;

		if (this._targets) {
			l = this._targets.length;
			for (i = 0; i < l; i++) {
				if (this._initProps(this._targets[i], this._propLookup[i] = {}, this._siblings[i], op ? op[i] : null, i)) {
					initPlugins = true;
				}
			}
		} else {
			initPlugins = this._initProps(this.target, this._propLookup, this._siblings, op, 0);
		}

		if (initPlugins) {
			TweenLite._onPluginEvent("_onInitAllProps", this); //reorders the array in order of priority. Uses a static TweenPlugin method in order to minimize file size in TweenLite
		}
		if (op) if (!this._firstPT) if (typeof this.target !== "function") {
			//if all tweening properties have been overwritten, kill the tween. If the target is a function, it's probably a delayedCall so let it live.
			this._enabled(false, false);
		}
		if (v.runBackwards) {
			pt = this._firstPT;
			while (pt) {
				pt.s += pt.c;
				pt.c = -pt.c;
				pt = pt._next;
			}
		}
		this._onUpdate = v.onUpdate;
		this._initted = true;
	};

	p._initProps = function (target, propLookup, siblings, overwrittenProps, index) {
		var p, i, initPlugins, plugin, pt, v;
		if (target == null) {
			return false;
		}

		if (_lazyLookup[target._gsTweenID]) {
			_lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)
		}

		if (!this.vars.css) if (target.style) if (target !== window && target.nodeType) if (_plugins.css) if (this.vars.autoCSS !== false) {
			//it's so common to use TweenLite/Max to animate the css of DOM elements, we assume that if the target is a DOM element, that's what is intended (a convenience so that users don't have to wrap things in css:{}, although we still recommend it for a slight performance boost and better specificity). Note: we cannot check "nodeType" on the window inside an iframe.
			_autoCSS(this.vars, target);
		}
		for (p in this.vars) {
			v = this.vars[p];
			if (_reservedProps[p]) {
				if (v) if (v instanceof Array || v.push && _isArray(v)) if (v.join("").indexOf("{self}") !== -1) {
					this.vars[p] = v = this._swapSelfInParams(v, this);
				}
			} else if (_plugins[p] && (plugin = new _plugins[p]())._onInitTween(target, this.vars[p], this, index)) {

				//t - target 		[object]
				//p - property 		[string]
				//s - start			[number]
				//c - change		[number]
				//f - isFunction	[boolean]
				//n - name			[string]
				//pg - isPlugin 	[boolean]
				//pr - priority		[number]
				//m - mod           [function | 0]
				this._firstPT = pt = { _next: this._firstPT, t: plugin, p: "setRatio", s: 0, c: 1, f: 1, n: p, pg: 1, pr: plugin._priority, m: 0 };
				i = plugin._overwriteProps.length;
				while (--i > -1) {
					propLookup[plugin._overwriteProps[i]] = this._firstPT;
				}
				if (plugin._priority || plugin._onInitAllProps) {
					initPlugins = true;
				}
				if (plugin._onDisable || plugin._onEnable) {
					this._notifyPluginsOfEnabled = true;
				}
				if (pt._next) {
					pt._next._prev = pt;
				}
			} else {
				propLookup[p] = _addPropTween.call(this, target, p, "get", v, p, 0, null, this.vars.stringFilter, index);
			}
		}

		if (overwrittenProps) if (this._kill(overwrittenProps, target)) {
			//another tween may have tried to overwrite properties of this tween before init() was called (like if two tweens start at the same time, the one created second will run first)
			return this._initProps(target, propLookup, siblings, overwrittenProps, index);
		}
		if (this._overwrite > 1) if (this._firstPT) if (siblings.length > 1) if (_applyOverwrite(target, this, propLookup, this._overwrite, siblings)) {
			this._kill(propLookup, target);
			return this._initProps(target, propLookup, siblings, overwrittenProps, index);
		}
		if (this._firstPT) if (this.vars.lazy !== false && this._duration || this.vars.lazy && !this._duration) {
			//zero duration tweens don't lazy render by default; everything else does.
			_lazyLookup[target._gsTweenID] = true;
		}
		return initPlugins;
	};

	p.render = function (time, suppressEvents, force) {
		var prevTime = this._time,
		    duration = this._duration,
		    prevRawPrevTime = this._rawPrevTime,
		    isComplete,
		    callback,
		    pt,
		    rawPrevTime;
		if (time >= duration - 0.0000001 && time >= 0) {
			//to work around occasional floating point math artifacts.
			this._totalTime = this._time = duration;
			this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
			if (!this._reversed) {
				isComplete = true;
				callback = "onComplete";
				force = force || this._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
			}
			if (duration === 0) if (this._initted || !this.vars.lazy || force) {
				//zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
				if (this._startTime === this._timeline._duration) {
					//if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
					time = 0;
				}
				if (prevRawPrevTime < 0 || time <= 0 && time >= -0.0000001 || prevRawPrevTime === _tinyNum && this.data !== "isPause") if (prevRawPrevTime !== time) {
					//note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
					force = true;
					if (prevRawPrevTime > _tinyNum) {
						callback = "onReverseComplete";
					}
				}
				this._rawPrevTime = rawPrevTime = !suppressEvents || time || prevRawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
			}
		} else if (time < 0.0000001) {
			//to work around occasional floating point math artifacts, round super small values to 0.
			this._totalTime = this._time = 0;
			this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
			if (prevTime !== 0 || duration === 0 && prevRawPrevTime > 0) {
				callback = "onReverseComplete";
				isComplete = this._reversed;
			}
			if (time < 0) {
				this._active = false;
				if (duration === 0) if (this._initted || !this.vars.lazy || force) {
					//zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
					if (prevRawPrevTime >= 0 && !(prevRawPrevTime === _tinyNum && this.data === "isPause")) {
						force = true;
					}
					this._rawPrevTime = rawPrevTime = !suppressEvents || time || prevRawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
				}
			}
			if (!this._initted) {
				//if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
				force = true;
			}
		} else {
			this._totalTime = this._time = time;

			if (this._easeType) {
				var r = time / duration,
				    type = this._easeType,
				    pow = this._easePower;
				if (type === 1 || type === 3 && r >= 0.5) {
					r = 1 - r;
				}
				if (type === 3) {
					r *= 2;
				}
				if (pow === 1) {
					r *= r;
				} else if (pow === 2) {
					r *= r * r;
				} else if (pow === 3) {
					r *= r * r * r;
				} else if (pow === 4) {
					r *= r * r * r * r;
				}

				if (type === 1) {
					this.ratio = 1 - r;
				} else if (type === 2) {
					this.ratio = r;
				} else if (time / duration < 0.5) {
					this.ratio = r / 2;
				} else {
					this.ratio = 1 - r / 2;
				}
			} else {
				this.ratio = this._ease.getRatio(time / duration);
			}
		}

		if (this._time === prevTime && !force) {
			return;
		} else if (!this._initted) {
			this._init();
			if (!this._initted || this._gc) {
				//immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
				return;
			} else if (!force && this._firstPT && (this.vars.lazy !== false && this._duration || this.vars.lazy && !this._duration)) {
				this._time = this._totalTime = prevTime;
				this._rawPrevTime = prevRawPrevTime;
				_lazyTweens.push(this);
				this._lazy = [time, suppressEvents];
				return;
			}
			//_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.
			if (this._time && !isComplete) {
				this.ratio = this._ease.getRatio(this._time / duration);
			} else if (isComplete && this._ease._calcEnd) {
				this.ratio = this._ease.getRatio(this._time === 0 ? 0 : 1);
			}
		}
		if (this._lazy !== false) {
			//in case a lazy render is pending, we should flush it because the new render is occurring now (imagine a lazy tween instantiating and then immediately the user calls tween.seek(tween.duration()), skipping to the end - the end render would be forced, and then if we didn't flush the lazy render, it'd fire AFTER the seek(), rendering it at the wrong time.
			this._lazy = false;
		}
		if (!this._active) if (!this._paused && this._time !== prevTime && time >= 0) {
			this._active = true; //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
		}
		if (prevTime === 0) {
			if (this._startAt) {
				if (time >= 0) {
					this._startAt.render(time, suppressEvents, force);
				} else if (!callback) {
					callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
				}
			}
			if (this.vars.onStart) if (this._time !== 0 || duration === 0) if (!suppressEvents) {
				this._callback("onStart");
			}
		}
		pt = this._firstPT;
		while (pt) {
			if (pt.f) {
				pt.t[pt.p](pt.c * this.ratio + pt.s);
			} else {
				pt.t[pt.p] = pt.c * this.ratio + pt.s;
			}
			pt = pt._next;
		}

		if (this._onUpdate) {
			if (time < 0) if (this._startAt && time !== -0.0001) {
				//if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
				this._startAt.render(time, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
			}
			if (!suppressEvents) if (this._time !== prevTime || isComplete || force) {
				this._callback("onUpdate");
			}
		}
		if (callback) if (!this._gc || force) {
			//check _gc because there's a chance that kill() could be called in an onUpdate
			if (time < 0 && this._startAt && !this._onUpdate && time !== -0.0001) {
				//-0.0001 is a special value that we use when looping back to the beginning of a repeated TimelineMax, in which case we shouldn't render the _startAt values.
				this._startAt.render(time, suppressEvents, force);
			}
			if (isComplete) {
				if (this._timeline.autoRemoveChildren) {
					this._enabled(false, false);
				}
				this._active = false;
			}
			if (!suppressEvents && this.vars[callback]) {
				this._callback(callback);
			}
			if (duration === 0 && this._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) {
				//the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
				this._rawPrevTime = 0;
			}
		}
	};

	p._kill = function (vars, target, overwritingTween) {
		if (vars === "all") {
			vars = null;
		}
		if (vars == null) if (target == null || target === this.target) {
			this._lazy = false;
			return this._enabled(false, false);
		}
		target = typeof target !== "string" ? target || this._targets || this.target : TweenLite.selector(target) || target;
		var simultaneousOverwrite = overwritingTween && this._time && overwritingTween._startTime === this._startTime && this._timeline === overwritingTween._timeline,
		    i,
		    overwrittenProps,
		    p,
		    pt,
		    propLookup,
		    changed,
		    killProps,
		    record,
		    killed;
		if ((_isArray(target) || _isSelector(target)) && typeof target[0] !== "number") {
			i = target.length;
			while (--i > -1) {
				if (this._kill(vars, target[i], overwritingTween)) {
					changed = true;
				}
			}
		} else {
			if (this._targets) {
				i = this._targets.length;
				while (--i > -1) {
					if (target === this._targets[i]) {
						propLookup = this._propLookup[i] || {};
						this._overwrittenProps = this._overwrittenProps || [];
						overwrittenProps = this._overwrittenProps[i] = vars ? this._overwrittenProps[i] || {} : "all";
						break;
					}
				}
			} else if (target !== this.target) {
				return false;
			} else {
				propLookup = this._propLookup;
				overwrittenProps = this._overwrittenProps = vars ? this._overwrittenProps || {} : "all";
			}

			if (propLookup) {
				killProps = vars || propLookup;
				record = vars !== overwrittenProps && overwrittenProps !== "all" && vars !== propLookup && ((typeof vars === "undefined" ? "undefined" : _typeof(vars)) !== "object" || !vars._tempKill); //_tempKill is a super-secret way to delete a particular tweening property but NOT have it remembered as an official overwritten property (like in BezierPlugin)
				if (overwritingTween && (TweenLite.onOverwrite || this.vars.onOverwrite)) {
					for (p in killProps) {
						if (propLookup[p]) {
							if (!killed) {
								killed = [];
							}
							killed.push(p);
						}
					}
					if ((killed || !vars) && !_onOverwrite(this, overwritingTween, target, killed)) {
						//if the onOverwrite returned false, that means the user wants to override the overwriting (cancel it).
						return false;
					}
				}

				for (p in killProps) {
					if (pt = propLookup[p]) {
						if (simultaneousOverwrite) {
							//if another tween overwrites this one and they both start at exactly the same time, yet this tween has already rendered once (for example, at 0.001) because it's first in the queue, we should revert the values to where they were at 0 so that the starting values aren't contaminated on the overwriting tween.
							if (pt.f) {
								pt.t[pt.p](pt.s);
							} else {
								pt.t[pt.p] = pt.s;
							}
							changed = true;
						}
						if (pt.pg && pt.t._kill(killProps)) {
							changed = true; //some plugins need to be notified so they can perform cleanup tasks first
						}
						if (!pt.pg || pt.t._overwriteProps.length === 0) {
							if (pt._prev) {
								pt._prev._next = pt._next;
							} else if (pt === this._firstPT) {
								this._firstPT = pt._next;
							}
							if (pt._next) {
								pt._next._prev = pt._prev;
							}
							pt._next = pt._prev = null;
						}
						delete propLookup[p];
					}
					if (record) {
						overwrittenProps[p] = 1;
					}
				}
				if (!this._firstPT && this._initted) {
					//if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
					this._enabled(false, false);
				}
			}
		}
		return changed;
	};

	p.invalidate = function () {
		if (this._notifyPluginsOfEnabled) {
			TweenLite._onPluginEvent("_onDisable", this);
		}
		this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null;
		this._notifyPluginsOfEnabled = this._active = this._lazy = false;
		this._propLookup = this._targets ? {} : [];
		Animation.prototype.invalidate.call(this);
		if (this.vars.immediateRender) {
			this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
			this.render(Math.min(0, -this._delay)); //in case delay is negative.
		}
		return this;
	};

	p._enabled = function (enabled, ignoreTimeline) {
		if (!_tickerActive) {
			_ticker.wake();
		}
		if (enabled && this._gc) {
			var targets = this._targets,
			    i;
			if (targets) {
				i = targets.length;
				while (--i > -1) {
					this._siblings[i] = _register(targets[i], this, true);
				}
			} else {
				this._siblings = _register(this.target, this, true);
			}
		}
		Animation.prototype._enabled.call(this, enabled, ignoreTimeline);
		if (this._notifyPluginsOfEnabled) if (this._firstPT) {
			return TweenLite._onPluginEvent(enabled ? "_onEnable" : "_onDisable", this);
		}
		return false;
	};

	//----TweenLite static methods -----------------------------------------------------

	TweenLite.to = function (target, duration, vars) {
		return new TweenLite(target, duration, vars);
	};

	TweenLite.from = function (target, duration, vars) {
		vars.runBackwards = true;
		vars.immediateRender = vars.immediateRender != false;
		return new TweenLite(target, duration, vars);
	};

	TweenLite.fromTo = function (target, duration, fromVars, toVars) {
		toVars.startAt = fromVars;
		toVars.immediateRender = toVars.immediateRender != false && fromVars.immediateRender != false;
		return new TweenLite(target, duration, toVars);
	};

	TweenLite.delayedCall = function (delay, callback, params, scope, useFrames) {
		return new TweenLite(callback, 0, { delay: delay, onComplete: callback, onCompleteParams: params, callbackScope: scope, onReverseComplete: callback, onReverseCompleteParams: params, immediateRender: false, lazy: false, useFrames: useFrames, overwrite: 0 });
	};

	TweenLite.set = function (target, vars) {
		return new TweenLite(target, 0, vars);
	};

	TweenLite.getTweensOf = function (target, onlyActive) {
		if (target == null) {
			return [];
		}
		target = typeof target !== "string" ? target : TweenLite.selector(target) || target;
		var i, a, j, t;
		if ((_isArray(target) || _isSelector(target)) && typeof target[0] !== "number") {
			i = target.length;
			a = [];
			while (--i > -1) {
				a = a.concat(TweenLite.getTweensOf(target[i], onlyActive));
			}
			i = a.length;
			//now get rid of any duplicates (tweens of arrays of objects could cause duplicates)
			while (--i > -1) {
				t = a[i];
				j = i;
				while (--j > -1) {
					if (t === a[j]) {
						a.splice(i, 1);
					}
				}
			}
		} else {
			a = _register(target).concat();
			i = a.length;
			while (--i > -1) {
				if (a[i]._gc || onlyActive && !a[i].isActive()) {
					a.splice(i, 1);
				}
			}
		}
		return a;
	};

	TweenLite.killTweensOf = TweenLite.killDelayedCallsTo = function (target, onlyActive, vars) {
		if ((typeof onlyActive === "undefined" ? "undefined" : _typeof(onlyActive)) === "object") {
			vars = onlyActive; //for backwards compatibility (before "onlyActive" parameter was inserted)
			onlyActive = false;
		}
		var a = TweenLite.getTweensOf(target, onlyActive),
		    i = a.length;
		while (--i > -1) {
			a[i]._kill(vars, target);
		}
	};

	/*
  * ----------------------------------------------------------------
  * TweenPlugin   (could easily be split out as a separate file/class, but included for ease of use (so that people don't need to include another script call before loading plugins which is easy to forget)
  * ----------------------------------------------------------------
  */
	var TweenPlugin = _class("plugins.TweenPlugin", function (props, priority) {
		this._overwriteProps = (props || "").split(",");
		this._propName = this._overwriteProps[0];
		this._priority = priority || 0;
		this._super = TweenPlugin.prototype;
	}, true);

	p = TweenPlugin.prototype;
	TweenPlugin.version = "1.19.0";
	TweenPlugin.API = 2;
	p._firstPT = null;
	p._addTween = _addPropTween;
	p.setRatio = _setRatio;

	p._kill = function (lookup) {
		var a = this._overwriteProps,
		    pt = this._firstPT,
		    i;
		if (lookup[this._propName] != null) {
			this._overwriteProps = [];
		} else {
			i = a.length;
			while (--i > -1) {
				if (lookup[a[i]] != null) {
					a.splice(i, 1);
				}
			}
		}
		while (pt) {
			if (lookup[pt.n] != null) {
				if (pt._next) {
					pt._next._prev = pt._prev;
				}
				if (pt._prev) {
					pt._prev._next = pt._next;
					pt._prev = null;
				} else if (this._firstPT === pt) {
					this._firstPT = pt._next;
				}
			}
			pt = pt._next;
		}
		return false;
	};

	p._mod = p._roundProps = function (lookup) {
		var pt = this._firstPT,
		    val;
		while (pt) {
			val = lookup[this._propName] || pt.n != null && lookup[pt.n.split(this._propName + "_").join("")];
			if (val && typeof val === "function") {
				//some properties that are very plugin-specific add a prefix named after the _propName plus an underscore, so we need to ignore that extra stuff here.
				if (pt.f === 2) {
					pt.t._applyPT.m = val;
				} else {
					pt.m = val;
				}
			}
			pt = pt._next;
		}
	};

	TweenLite._onPluginEvent = function (type, tween) {
		var pt = tween._firstPT,
		    changed,
		    pt2,
		    first,
		    last,
		    next;
		if (type === "_onInitAllProps") {
			//sorts the PropTween linked list in order of priority because some plugins need to render earlier/later than others, like MotionBlurPlugin applies its effects after all x/y/alpha tweens have rendered on each frame.
			while (pt) {
				next = pt._next;
				pt2 = first;
				while (pt2 && pt2.pr > pt.pr) {
					pt2 = pt2._next;
				}
				if (pt._prev = pt2 ? pt2._prev : last) {
					pt._prev._next = pt;
				} else {
					first = pt;
				}
				if (pt._next = pt2) {
					pt2._prev = pt;
				} else {
					last = pt;
				}
				pt = next;
			}
			pt = tween._firstPT = first;
		}
		while (pt) {
			if (pt.pg) if (typeof pt.t[type] === "function") if (pt.t[type]()) {
				changed = true;
			}
			pt = pt._next;
		}
		return changed;
	};

	TweenPlugin.activate = function (plugins) {
		var i = plugins.length;
		while (--i > -1) {
			if (plugins[i].API === TweenPlugin.API) {
				_plugins[new plugins[i]()._propName] = plugins[i];
			}
		}
		return true;
	};

	//provides a more concise way to define plugins that have no dependencies besides TweenPlugin and TweenLite, wrapping common boilerplate stuff into one function (added in 1.9.0). You don't NEED to use this to define a plugin - the old way still works and can be useful in certain (rare) situations.
	_gsDefine.plugin = function (config) {
		if (!config || !config.propName || !config.init || !config.API) {
			throw "illegal plugin definition.";
		}
		var propName = config.propName,
		    priority = config.priority || 0,
		    overwriteProps = config.overwriteProps,
		    map = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" },
		    Plugin = _class("plugins." + propName.charAt(0).toUpperCase() + propName.substr(1) + "Plugin", function () {
			TweenPlugin.call(this, propName, priority);
			this._overwriteProps = overwriteProps || [];
		}, config.global === true),
		    p = Plugin.prototype = new TweenPlugin(propName),
		    prop;
		p.constructor = Plugin;
		Plugin.API = config.API;
		for (prop in map) {
			if (typeof config[prop] === "function") {
				p[map[prop]] = config[prop];
			}
		}
		Plugin.version = config.version;
		TweenPlugin.activate([Plugin]);
		return Plugin;
	};

	//now run through all the dependencies discovered and if any are missing, log that to the console as a warning. This is why it's best to have TweenLite load last - it can check all the dependencies for you.
	a = window._gsQueue;
	if (a) {
		for (i = 0; i < a.length; i++) {
			a[i]();
		}
		for (p in _defLookup) {
			if (!_defLookup[p].func) {
				window.console.log("GSAP encountered missing dependency: " + p);
			}
		}
	}

	_tickerActive = false; //ensures that the first official animation forces a ticker.tick() to update the time when it is instantiated
})(typeof module !== "undefined" && module.exports && typeof global !== "undefined" ? global : undefined || window, "TweenLite");
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname, module) {var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Twig.js 0.8.9
 *
 * @copyright 2011-2015 John Roepke and the Twig.js Contributors
 * @license   Available under the BSD 2-Clause License
 * @link      https://github.com/justjohn/twig.js
 */
var Twig=function(Twig){Twig.VERSION="0.8.9";return Twig}(Twig||{});var Twig=function(Twig){"use strict";Twig.trace=false;Twig.debug=false;Twig.cache=true;Twig.placeholders={parent:"{{|PARENT|}}"};Twig.indexOf=function(arr,searchElement){if(Array.prototype.hasOwnProperty("indexOf")){return arr.indexOf(searchElement)}if(arr===void 0||arr===null){throw new TypeError}var t=Object(arr);var len=t.length>>>0;if(len===0){return-1}var n=0;if(arguments.length>0){n=Number(arguments[1]);if(n!==n){n=0}else if(n!==0&&n!==Infinity&&n!==-Infinity){n=(n>0||-1)*Math.floor(Math.abs(n))}}if(n>=len){return-1}var k=n>=0?n:Math.max(len-Math.abs(n),0);for(;k<len;k++){if(k in t&&t[k]===searchElement){return k}}if(arr==searchElement){return 0}return-1};Twig.forEach=function(arr,callback,thisArg){if(Array.prototype.forEach){return arr.forEach(callback,thisArg)}var T,k;if(arr==null){throw new TypeError(" this is null or not defined")}var O=Object(arr);var len=O.length>>>0;if({}.toString.call(callback)!="[object Function]"){throw new TypeError(callback+" is not a function")}if(thisArg){T=thisArg}k=0;while(k<len){var kValue;if(k in O){kValue=O[k];callback.call(T,kValue,k,O)}k++}};Twig.merge=function(target,source,onlyChanged){Twig.forEach(Object.keys(source),function(key){if(onlyChanged&&!(key in target)){return}target[key]=source[key]});return target};Twig.Error=function(message){this.message=message;this.name="TwigException";this.type="TwigException"};Twig.Error.prototype.toString=function(){var output=this.name+": "+this.message;return output};Twig.log={trace:function(){if(Twig.trace&&console){console.log(Array.prototype.slice.call(arguments))}},debug:function(){if(Twig.debug&&console){console.log(Array.prototype.slice.call(arguments))}}};if(typeof console!=="undefined"){if(typeof console.error!=="undefined"){Twig.log.error=function(){console.error.apply(console,arguments)}}else if(typeof console.log!=="undefined"){Twig.log.error=function(){console.log.apply(console,arguments)}}}else{Twig.log.error=function(){}}Twig.ChildContext=function(context){var ChildContext=function ChildContext(){};ChildContext.prototype=context;return new ChildContext};Twig.token={};Twig.token.type={output:"output",logic:"logic",comment:"comment",raw:"raw",output_whitespace_pre:"output_whitespace_pre",output_whitespace_post:"output_whitespace_post",output_whitespace_both:"output_whitespace_both",logic_whitespace_pre:"logic_whitespace_pre",logic_whitespace_post:"logic_whitespace_post",logic_whitespace_both:"logic_whitespace_both"};Twig.token.definitions=[{type:Twig.token.type.raw,open:"{% raw %}",close:"{% endraw %}"},{type:Twig.token.type.raw,open:"{% verbatim %}",close:"{% endverbatim %}"},{type:Twig.token.type.output_whitespace_pre,open:"{{-",close:"}}"},{type:Twig.token.type.output_whitespace_post,open:"{{",close:"-}}"},{type:Twig.token.type.output_whitespace_both,open:"{{-",close:"-}}"},{type:Twig.token.type.logic_whitespace_pre,open:"{%-",close:"%}"},{type:Twig.token.type.logic_whitespace_post,open:"{%",close:"-%}"},{type:Twig.token.type.logic_whitespace_both,open:"{%-",close:"-%}"},{type:Twig.token.type.output,open:"{{",close:"}}"},{type:Twig.token.type.logic,open:"{%",close:"%}"},{type:Twig.token.type.comment,open:"{#",close:"#}"}];Twig.token.strings=['"',"'"];Twig.token.findStart=function(template){var output={position:null,close_position:null,def:null},i,token_template,first_key_position,close_key_position;for(i=0;i<Twig.token.definitions.length;i++){token_template=Twig.token.definitions[i];first_key_position=template.indexOf(token_template.open);close_key_position=template.indexOf(token_template.close);Twig.log.trace("Twig.token.findStart: ","Searching for ",token_template.open," found at ",first_key_position);if(first_key_position>=0){if(token_template.open.length!==token_template.close.length){if(close_key_position<0){continue}}}if(first_key_position>=0&&(output.position===null||first_key_position<output.position)){output.position=first_key_position;output.def=token_template;output.close_position=close_key_position}else if(first_key_position>=0&&output.position!==null&&first_key_position===output.position){if(token_template.open.length>output.def.open.length){output.position=first_key_position;output.def=token_template;output.close_position=close_key_position}else if(token_template.open.length===output.def.open.length){if(token_template.close.length>output.def.close.length){if(close_key_position>=0&&close_key_position<output.close_position){output.position=first_key_position;output.def=token_template;output.close_position=close_key_position}}else if(close_key_position>=0&&close_key_position<output.close_position){output.position=first_key_position;output.def=token_template;output.close_position=close_key_position}}}}delete output["close_position"];return output};Twig.token.findEnd=function(template,token_def,start){var end=null,found=false,offset=0,str_pos=null,str_found=null,pos=null,end_offset=null,this_str_pos=null,end_str_pos=null,i,l;while(!found){str_pos=null;str_found=null;pos=template.indexOf(token_def.close,offset);if(pos>=0){end=pos;found=true}else{throw new Twig.Error("Unable to find closing bracket '"+token_def.close+"'"+" opened near template position "+start)}if(token_def.type===Twig.token.type.comment){break}if(token_def.type===Twig.token.type.raw){break}l=Twig.token.strings.length;for(i=0;i<l;i+=1){this_str_pos=template.indexOf(Twig.token.strings[i],offset);if(this_str_pos>0&&this_str_pos<pos&&(str_pos===null||this_str_pos<str_pos)){str_pos=this_str_pos;str_found=Twig.token.strings[i]}}if(str_pos!==null){end_offset=str_pos+1;end=null;found=false;while(true){end_str_pos=template.indexOf(str_found,end_offset);if(end_str_pos<0){throw"Unclosed string in template"}if(template.substr(end_str_pos-1,1)!=="\\"){offset=end_str_pos+1;break}else{end_offset=end_str_pos+1}}}}return end};Twig.tokenize=function(template){var tokens=[],error_offset=0,found_token=null,end=null;while(template.length>0){found_token=Twig.token.findStart(template);Twig.log.trace("Twig.tokenize: ","Found token: ",found_token);if(found_token.position!==null){if(found_token.position>0){tokens.push({type:Twig.token.type.raw,value:template.substring(0,found_token.position)})}template=template.substr(found_token.position+found_token.def.open.length);error_offset+=found_token.position+found_token.def.open.length;end=Twig.token.findEnd(template,found_token.def,error_offset);Twig.log.trace("Twig.tokenize: ","Token ends at ",end);tokens.push({type:found_token.def.type,value:template.substring(0,end).trim()});if(template.substr(end+found_token.def.close.length,1)==="\n"){switch(found_token.def.type){case"logic_whitespace_pre":case"logic_whitespace_post":case"logic_whitespace_both":case"logic":end+=1;break}}template=template.substr(end+found_token.def.close.length);error_offset+=end+found_token.def.close.length}else{tokens.push({type:Twig.token.type.raw,value:template});template=""}}return tokens};Twig.compile=function(tokens){try{var output=[],stack=[],intermediate_output=[],token=null,logic_token=null,unclosed_token=null,prev_token=null,prev_output=null,prev_intermediate_output=null,prev_template=null,next_token=null,tok_output=null,type=null,open=null,next=null;var compile_output=function(token){Twig.expression.compile.apply(this,[token]);if(stack.length>0){intermediate_output.push(token)}else{output.push(token)}};var compile_logic=function(token){logic_token=Twig.logic.compile.apply(this,[token]);type=logic_token.type;open=Twig.logic.handler[type].open;next=Twig.logic.handler[type].next;Twig.log.trace("Twig.compile: ","Compiled logic token to ",logic_token," next is: ",next," open is : ",open);if(open!==undefined&&!open){prev_token=stack.pop();prev_template=Twig.logic.handler[prev_token.type];if(Twig.indexOf(prev_template.next,type)<0){throw new Error(type+" not expected after a "+prev_token.type)}prev_token.output=prev_token.output||[];prev_token.output=prev_token.output.concat(intermediate_output);intermediate_output=[];tok_output={type:Twig.token.type.logic,token:prev_token};if(stack.length>0){intermediate_output.push(tok_output)}else{output.push(tok_output)}}if(next!==undefined&&next.length>0){Twig.log.trace("Twig.compile: ","Pushing ",logic_token," to logic stack.");if(stack.length>0){prev_token=stack.pop();prev_token.output=prev_token.output||[];prev_token.output=prev_token.output.concat(intermediate_output);stack.push(prev_token);intermediate_output=[]}stack.push(logic_token)}else if(open!==undefined&&open){tok_output={type:Twig.token.type.logic,token:logic_token};if(stack.length>0){intermediate_output.push(tok_output)}else{output.push(tok_output)}}};while(tokens.length>0){token=tokens.shift();prev_output=output[output.length-1];prev_intermediate_output=intermediate_output[intermediate_output.length-1];next_token=tokens[0];Twig.log.trace("Compiling token ",token);switch(token.type){case Twig.token.type.raw:if(stack.length>0){intermediate_output.push(token)}else{output.push(token)}break;case Twig.token.type.logic:compile_logic.call(this,token);break;case Twig.token.type.comment:break;case Twig.token.type.output:compile_output.call(this,token);break;case Twig.token.type.logic_whitespace_pre:case Twig.token.type.logic_whitespace_post:case Twig.token.type.logic_whitespace_both:case Twig.token.type.output_whitespace_pre:case Twig.token.type.output_whitespace_post:case Twig.token.type.output_whitespace_both:if(token.type!==Twig.token.type.output_whitespace_post&&token.type!==Twig.token.type.logic_whitespace_post){if(prev_output){if(prev_output.type===Twig.token.type.raw){output.pop();if(prev_output.value.match(/^\s*$/)===null){prev_output.value=prev_output.value.trim();output.push(prev_output)}}}if(prev_intermediate_output){if(prev_intermediate_output.type===Twig.token.type.raw){intermediate_output.pop();if(prev_intermediate_output.value.match(/^\s*$/)===null){prev_intermediate_output.value=prev_intermediate_output.value.trim();intermediate_output.push(prev_intermediate_output)}}}}switch(token.type){case Twig.token.type.output_whitespace_pre:case Twig.token.type.output_whitespace_post:case Twig.token.type.output_whitespace_both:compile_output.call(this,token);break;case Twig.token.type.logic_whitespace_pre:case Twig.token.type.logic_whitespace_post:case Twig.token.type.logic_whitespace_both:compile_logic.call(this,token);break}if(token.type!==Twig.token.type.output_whitespace_pre&&token.type!==Twig.token.type.logic_whitespace_pre){if(next_token){if(next_token.type===Twig.token.type.raw){tokens.shift();if(next_token.value.match(/^\s*$/)===null){next_token.value=next_token.value.trim();tokens.unshift(next_token)}}}}break}Twig.log.trace("Twig.compile: "," Output: ",output," Logic Stack: ",stack," Pending Output: ",intermediate_output)}if(stack.length>0){unclosed_token=stack.pop();throw new Error("Unable to find an end tag for "+unclosed_token.type+", expecting one of "+unclosed_token.next)}return output}catch(ex){Twig.log.error("Error compiling twig template "+this.id+": ");if(ex.stack){Twig.log.error(ex.stack)}else{Twig.log.error(ex.toString())}if(this.options.rethrow)throw ex}};Twig.parse=function(tokens,context){try{var output=[],chain=true,that=this;Twig.forEach(tokens,function parseToken(token){Twig.log.debug("Twig.parse: ","Parsing token: ",token);switch(token.type){case Twig.token.type.raw:output.push(Twig.filters.raw(token.value));break;case Twig.token.type.logic:var logic_token=token.token,logic=Twig.logic.parse.apply(that,[logic_token,context,chain]);if(logic.chain!==undefined){chain=logic.chain}if(logic.context!==undefined){context=logic.context}if(logic.output!==undefined){output.push(logic.output)}break;case Twig.token.type.comment:break;case Twig.token.type.output_whitespace_pre:case Twig.token.type.output_whitespace_post:case Twig.token.type.output_whitespace_both:case Twig.token.type.output:Twig.log.debug("Twig.parse: ","Output token: ",token.stack);output.push(Twig.expression.parse.apply(that,[token.stack,context]));break}});return Twig.output.apply(this,[output])}catch(ex){Twig.log.error("Error parsing twig template "+this.id+": ");if(ex.stack){Twig.log.error(ex.stack)}else{Twig.log.error(ex.toString())}if(this.options.rethrow)throw ex;if(Twig.debug){return ex.toString()}}};Twig.prepare=function(data){var tokens,raw_tokens;Twig.log.debug("Twig.prepare: ","Tokenizing ",data);raw_tokens=Twig.tokenize.apply(this,[data]);Twig.log.debug("Twig.prepare: ","Compiling ",raw_tokens);tokens=Twig.compile.apply(this,[raw_tokens]);Twig.log.debug("Twig.prepare: ","Compiled ",tokens);return tokens};Twig.output=function(output){if(!this.options.autoescape){return output.join("")}var strategy="html";if(typeof this.options.autoescape=="string")strategy=this.options.autoescape;var escaped_output=[];Twig.forEach(output,function(str){if(str&&(str.twig_markup!==true&&str.twig_markup!=strategy)){str=Twig.filters.escape(str,[strategy])}escaped_output.push(str)});return Twig.Markup(escaped_output.join(""))};Twig.Templates={loaders:{},parsers:{},registry:{}};Twig.validateId=function(id){if(id==="prototype"){throw new Twig.Error(id+" is not a valid twig identifier")}else if(Twig.cache&&Twig.Templates.registry.hasOwnProperty(id)){throw new Twig.Error("There is already a template with the ID "+id)}return true};Twig.Templates.registerLoader=function(method_name,func,scope){if(typeof func!=="function"){throw new Twig.Error("Unable to add loader for "+method_name+": Invalid function reference given.")}if(scope){func=func.bind(scope)}this.loaders[method_name]=func};Twig.Templates.unRegisterLoader=function(method_name){if(this.isRegisteredLoader(method_name)){delete this.loaders[method_name]}};Twig.Templates.isRegisteredLoader=function(method_name){return this.loaders.hasOwnProperty(method_name)};Twig.Templates.registerParser=function(method_name,func,scope){if(typeof func!=="function"){throw new Twig.Error("Unable to add parser for "+method_name+": Invalid function regerence given.")}if(scope){func=func.bind(scope)}this.parsers[method_name]=func};Twig.Templates.unRegisterParser=function(method_name){if(this.isRegisteredParser(method_name)){delete this.parsers[method_name]}};Twig.Templates.isRegisteredParser=function(method_name){return this.parsers.hasOwnProperty(method_name)};Twig.Templates.save=function(template){if(template.id===undefined){throw new Twig.Error("Unable to save template with no id")}Twig.Templates.registry[template.id]=template};Twig.Templates.load=function(id){if(!Twig.Templates.registry.hasOwnProperty(id)){return null}return Twig.Templates.registry[id]};Twig.Templates.loadRemote=function(location,params,callback,error_callback){var loader;if(params.async===undefined){params.async=true}if(params.id===undefined){params.id=location}if(Twig.cache&&Twig.Templates.registry.hasOwnProperty(params.id)){if(typeof callback==="function"){callback(Twig.Templates.registry[params.id])}return Twig.Templates.registry[params.id]}params.parser=params.parser||"twig";loader=this.loaders[params.method]||this.loaders.fs;return loader.apply(this,arguments)};function is(type,obj){var clas=Object.prototype.toString.call(obj).slice(8,-1);return obj!==undefined&&obj!==null&&clas===type}Twig.Template=function(params){var data=params.data,id=params.id,blocks=params.blocks,macros=params.macros||{},base=params.base,path=params.path,url=params.url,name=params.name,method=params.method,options=params.options;this.id=id;this.method=method;this.base=base;this.path=path;this.url=url;this.name=name;this.macros=macros;this.options=options;this.reset(blocks);if(is("String",data)){this.tokens=Twig.prepare.apply(this,[data])}else{this.tokens=data}if(id!==undefined){Twig.Templates.save(this)}};Twig.Template.prototype.reset=function(blocks){Twig.log.debug("Twig.Template.reset","Reseting template "+this.id);this.blocks={};this.importedBlocks=[];this.originalBlockTokens={};this.child={blocks:blocks||{}};this.extend=null};Twig.Template.prototype.render=function(context,params){params=params||{};var output,url;this.context=context||{};this.reset();if(params.blocks){this.blocks=params.blocks}if(params.macros){this.macros=params.macros}output=Twig.parse.apply(this,[this.tokens,this.context]);if(this.extend){var ext_template;if(this.options.allowInlineIncludes){ext_template=Twig.Templates.load(this.extend);if(ext_template){ext_template.options=this.options}}if(!ext_template){url=Twig.path.parsePath(this,this.extend);ext_template=Twig.Templates.loadRemote(url,{method:this.getLoaderMethod(),base:this.base,async:false,id:url,options:this.options})}this.parent=ext_template;return this.parent.render(this.context,{blocks:this.blocks})}if(params.output=="blocks"){return this.blocks}else if(params.output=="macros"){return this.macros}else{return output}};Twig.Template.prototype.importFile=function(file){var url,sub_template;if(!this.url&&this.options.allowInlineIncludes){file=this.path?this.path+"/"+file:file;sub_template=Twig.Templates.load(file);if(!sub_template){sub_template=Twig.Templates.loadRemote(url,{id:file,method:this.getLoaderMethod(),async:false,options:this.options});if(!sub_template){throw new Twig.Error("Unable to find the template "+file)}}sub_template.options=this.options;return sub_template}url=Twig.path.parsePath(this,file);sub_template=Twig.Templates.loadRemote(url,{method:this.getLoaderMethod(),base:this.base,async:false,options:this.options,id:url});return sub_template};Twig.Template.prototype.importBlocks=function(file,override){var sub_template=this.importFile(file),context=this.context,that=this,key;override=override||false;sub_template.render(context);Twig.forEach(Object.keys(sub_template.blocks),function(key){if(override||that.blocks[key]===undefined){that.blocks[key]=sub_template.blocks[key];that.importedBlocks.push(key)}})};Twig.Template.prototype.importMacros=function(file){var url=Twig.path.parsePath(this,file);var remoteTemplate=Twig.Templates.loadRemote(url,{method:this.getLoaderMethod(),async:false,id:url});return remoteTemplate};Twig.Template.prototype.getLoaderMethod=function(){if(this.path){return"fs"}if(this.url){return"ajax"}return this.method||"fs"};Twig.Template.prototype.compile=function(options){return Twig.compiler.compile(this,options)};Twig.Markup=function(content,strategy){if(typeof strategy=="undefined"){strategy=true}if(typeof content==="string"&&content.length>0){content=new String(content);content.twig_markup=strategy}return content};return Twig}(Twig||{});(function(Twig){"use strict";Twig.Templates.registerLoader("ajax",function(location,params,callback,error_callback){var template,xmlhttp,precompiled=params.precompiled,parser=this.parsers[params.parser]||this.parser.twig;if(typeof XMLHttpRequest==="undefined"){throw new Twig.Error("Unsupported platform: Unable to do ajax requests "+'because there is no "XMLHTTPRequest" implementation')}xmlhttp=new XMLHttpRequest;xmlhttp.onreadystatechange=function(){var data=null;if(xmlhttp.readyState===4){if(xmlhttp.status===200||window.cordova&&xmlhttp.status==0){Twig.log.debug("Got template ",xmlhttp.responseText);if(precompiled===true){data=JSON.parse(xmlhttp.responseText)}else{data=xmlhttp.responseText}params.url=location;params.data=data;template=parser.call(this,params);if(typeof callback==="function"){callback(template)}}else{if(typeof error_callback==="function"){error_callback(xmlhttp)}}}};xmlhttp.open("GET",location,!!params.async);xmlhttp.send();if(params.async){return true}else{return template}})})(Twig);(function(Twig){"use strict";var fs,path;try{fs=__webpack_require__(183);path=__webpack_require__(61)}catch(e){}Twig.Templates.registerLoader("fs",function(location,params,callback,error_callback){var template,data=null,precompiled=params.precompiled,parser=this.parsers[params.parser]||this.parser.twig;if(!fs||!path){throw new Twig.Error("Unsupported platform: Unable to load from file "+'because there is no "fs" or "path" implementation')}var loadTemplateFn=function(err,data){if(err){if(typeof error_callback==="function"){error_callback(err)}return}if(precompiled===true){data=JSON.parse(data)}params.data=data;params.path=params.path||location;template=parser.call(this,params);if(typeof callback==="function"){callback(template)}};params.path=params.path||location;if(params.async){fs.stat(params.path,function(err,stats){if(err||!stats.isFile()){throw new Twig.Error("Unable to find template file "+location)}fs.readFile(params.path,"utf8",loadTemplateFn)});return true}else{if(!fs.statSync(params.path).isFile()){throw new Twig.Error("Unable to find template file "+location)}data=fs.readFileSync(params.path,"utf8");loadTemplateFn(undefined,data);return template}})})(Twig);(function(Twig){"use strict";Twig.Templates.registerParser("source",function(params){return params.data||""})})(Twig);(function(Twig){"use strict";Twig.Templates.registerParser("twig",function(params){return new Twig.Template(params)})})(Twig);(function(){"use strict";if(!String.prototype.trim){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}}if(!Object.keys)Object.keys=function(o){if(o!==Object(o)){throw new TypeError("Object.keys called on non-object")}var ret=[],p;for(p in o)if(Object.prototype.hasOwnProperty.call(o,p))ret.push(p);return ret}})();var Twig=function(Twig){Twig.lib={};var sprintfLib=function(){var re={not_string:/[^s]/,number:/[diefg]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijosuxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[\+\-]/};function sprintf(){var key=arguments[0],cache=sprintf.cache;if(!(cache[key]&&cache.hasOwnProperty(key))){cache[key]=sprintf.parse(key)}return sprintf.format.call(null,cache[key],arguments)}sprintf.format=function(parse_tree,argv){var cursor=1,tree_length=parse_tree.length,node_type="",arg,output=[],i,k,match,pad,pad_character,pad_length,is_positive=true,sign="";for(i=0;i<tree_length;i++){node_type=get_type(parse_tree[i]);if(node_type==="string"){output[output.length]=parse_tree[i]}else if(node_type==="array"){match=parse_tree[i];if(match[2]){arg=argv[cursor];for(k=0;k<match[2].length;k++){if(!arg.hasOwnProperty(match[2][k])){throw new Error(sprintf("[sprintf] property '%s' does not exist",match[2][k]))}arg=arg[match[2][k]]}}else if(match[1]){arg=argv[match[1]]}else{arg=argv[cursor++]}if(get_type(arg)=="function"){arg=arg()}if(re.not_string.test(match[8])&&re.not_json.test(match[8])&&(get_type(arg)!="number"&&isNaN(arg))){throw new TypeError(sprintf("[sprintf] expecting number but found %s",get_type(arg)))}if(re.number.test(match[8])){is_positive=arg>=0}switch(match[8]){case"b":arg=arg.toString(2);break;case"c":arg=String.fromCharCode(arg);break;case"d":case"i":arg=parseInt(arg,10);break;case"j":arg=JSON.stringify(arg,null,match[6]?parseInt(match[6]):0);break;case"e":arg=match[7]?arg.toExponential(match[7]):arg.toExponential();break;case"f":arg=match[7]?parseFloat(arg).toFixed(match[7]):parseFloat(arg);break;case"g":arg=match[7]?parseFloat(arg).toPrecision(match[7]):parseFloat(arg);break;case"o":arg=arg.toString(8);break;case"s":arg=(arg=String(arg))&&match[7]?arg.substring(0,match[7]):arg;break;case"u":arg=arg>>>0;break;case"x":arg=arg.toString(16);break;case"X":arg=arg.toString(16).toUpperCase();break}if(re.json.test(match[8])){output[output.length]=arg}else{if(re.number.test(match[8])&&(!is_positive||match[3])){sign=is_positive?"+":"-";arg=arg.toString().replace(re.sign,"")}else{sign=""}pad_character=match[4]?match[4]==="0"?"0":match[4].charAt(1):" ";pad_length=match[6]-(sign+arg).length;pad=match[6]?pad_length>0?str_repeat(pad_character,pad_length):"":"";output[output.length]=match[5]?sign+arg+pad:pad_character==="0"?sign+pad+arg:pad+sign+arg}}}return output.join("")};sprintf.cache={};sprintf.parse=function(fmt){var _fmt=fmt,match=[],parse_tree=[],arg_names=0;while(_fmt){if((match=re.text.exec(_fmt))!==null){parse_tree[parse_tree.length]=match[0]}else if((match=re.modulo.exec(_fmt))!==null){parse_tree[parse_tree.length]="%"}else if((match=re.placeholder.exec(_fmt))!==null){if(match[2]){arg_names|=1;var field_list=[],replacement_field=match[2],field_match=[];if((field_match=re.key.exec(replacement_field))!==null){field_list[field_list.length]=field_match[1];while((replacement_field=replacement_field.substring(field_match[0].length))!==""){if((field_match=re.key_access.exec(replacement_field))!==null){field_list[field_list.length]=field_match[1]}else if((field_match=re.index_access.exec(replacement_field))!==null){field_list[field_list.length]=field_match[1]}else{throw new SyntaxError("[sprintf] failed to parse named argument key")}}}else{throw new SyntaxError("[sprintf] failed to parse named argument key")}match[2]=field_list}else{arg_names|=2}if(arg_names===3){throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported")}parse_tree[parse_tree.length]=match}else{throw new SyntaxError("[sprintf] unexpected placeholder")}_fmt=_fmt.substring(match[0].length)}return parse_tree};var vsprintf=function(fmt,argv,_argv){_argv=(argv||[]).slice(0);_argv.splice(0,0,fmt);return sprintf.apply(null,_argv)};function get_type(variable){return Object.prototype.toString.call(variable).slice(8,-1).toLowerCase()}function str_repeat(input,multiplier){return Array(multiplier+1).join(input)}return{sprintf:sprintf,vsprintf:vsprintf}}();var sprintf=sprintfLib.sprintf;var vsprintf=sprintfLib.vsprintf;Twig.lib.sprintf=sprintf;Twig.lib.vsprintf=vsprintf;(function(){var shortDays="Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(",");var fullDays="Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(",");var shortMonths="Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(",");var fullMonths="January,February,March,April,May,June,July,August,September,October,November,December".split(",");function getOrdinalFor(intNum){return(intNum=Math.abs(intNum)%100)%10==1&&intNum!=11?"st":intNum%10==2&&intNum!=12?"nd":intNum%10==3&&intNum!=13?"rd":"th"}function getISO8601Year(aDate){var d=new Date(aDate.getFullYear()+1,0,4);if((d-aDate)/864e5<7&&(aDate.getDay()+6)%7<(d.getDay()+6)%7)return d.getFullYear();if(aDate.getMonth()>0||aDate.getDate()>=4)return aDate.getFullYear();return aDate.getFullYear()-((aDate.getDay()+6)%7-aDate.getDate()>2?1:0)}function getISO8601Week(aDate){var d=new Date(getISO8601Year(aDate),0,4);d.setDate(d.getDate()-(d.getDay()+6)%7);return parseInt((aDate-d)/6048e5)+1}Twig.lib.formatDate=function(date,format){if(typeof format!=="string"||/^\s*$/.test(format))return date+"";var jan1st=new Date(date.getFullYear(),0,1);var me=date;return format.replace(/[dDjlNSwzWFmMntLoYyaABgGhHisuU]/g,function(option){switch(option){case"d":return("0"+me.getDate()).replace(/^.+(..)$/,"$1");case"D":return shortDays[me.getDay()];case"j":return me.getDate();case"l":return fullDays[me.getDay()];case"N":return(me.getDay()+6)%7+1;case"S":return getOrdinalFor(me.getDate());case"w":return me.getDay();case"z":return Math.ceil((jan1st-me)/864e5);case"W":return("0"+getISO8601Week(me)).replace(/^.(..)$/,"$1");case"F":return fullMonths[me.getMonth()];case"m":return("0"+(me.getMonth()+1)).replace(/^.+(..)$/,"$1");case"M":return shortMonths[me.getMonth()];case"n":return me.getMonth()+1;case"t":return new Date(me.getFullYear(),me.getMonth()+1,-1).getDate();case"L":return new Date(me.getFullYear(),1,29).getDate()==29?1:0;case"o":return getISO8601Year(me);case"Y":return me.getFullYear();case"y":return(me.getFullYear()+"").replace(/^.+(..)$/,"$1");case"a":return me.getHours()<12?"am":"pm";case"A":return me.getHours()<12?"AM":"PM";case"B":return Math.floor(((me.getUTCHours()+1)%24+me.getUTCMinutes()/60+me.getUTCSeconds()/3600)*1e3/24);case"g":return me.getHours()%12!=0?me.getHours()%12:12;case"G":return me.getHours();case"h":return("0"+(me.getHours()%12!=0?me.getHours()%12:12)).replace(/^.+(..)$/,"$1");case"H":return("0"+me.getHours()).replace(/^.+(..)$/,"$1");case"i":return("0"+me.getMinutes()).replace(/^.+(..)$/,"$1");case"s":return("0"+me.getSeconds()).replace(/^.+(..)$/,"$1");case"u":return me.getMilliseconds();case"U":return me.getTime()/1e3}})}})();Twig.lib.strip_tags=function(input,allowed){allowed=(((allowed||"")+"").toLowerCase().match(/<[a-z][a-z0-9]*>/g)||[]).join("");var tags=/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,commentsAndPhpTags=/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;return input.replace(commentsAndPhpTags,"").replace(tags,function($0,$1){return allowed.indexOf("<"+$1.toLowerCase()+">")>-1?$0:""})};Twig.lib.parseISO8601Date=function(s){var re=/(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d)(\.\d+)?(Z|([+-])(\d\d):(\d\d))/;var d=[];d=s.match(re);if(!d){throw"Couldn't parse ISO 8601 date string '"+s+"'"}var a=[1,2,3,4,5,6,10,11];for(var i in a){d[a[i]]=parseInt(d[a[i]],10)}d[7]=parseFloat(d[7]);var ms=Date.UTC(d[1],d[2]-1,d[3],d[4],d[5],d[6]);if(d[7]>0){ms+=Math.round(d[7]*1e3)}if(d[8]!="Z"&&d[10]){var offset=d[10]*60*60*1e3;if(d[11]){offset+=d[11]*60*1e3}if(d[9]=="-"){ms-=offset}else{ms+=offset}}return new Date(ms)};Twig.lib.strtotime=function(text,now){var parsed,match,today,year,date,days,ranges,len,times,regex,i,fail=false;if(!text){return fail}text=text.replace(/^\s+|\s+$/g,"").replace(/\s{2,}/g," ").replace(/[\t\r\n]/g,"").toLowerCase();match=text.match(/^(\d{1,4})([\-\.\/\:])(\d{1,2})([\-\.\/\:])(\d{1,4})(?:\s(\d{1,2}):(\d{2})?:?(\d{2})?)?(?:\s([A-Z]+)?)?$/);if(match&&match[2]===match[4]){if(match[1]>1901){switch(match[2]){case"-":{if(match[3]>12||match[5]>31){return fail}return new Date(match[1],parseInt(match[3],10)-1,match[5],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1e3}case".":{return fail}case"/":{if(match[3]>12||match[5]>31){return fail}return new Date(match[1],parseInt(match[3],10)-1,match[5],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1e3}}}else if(match[5]>1901){switch(match[2]){case"-":{if(match[3]>12||match[1]>31){return fail}return new Date(match[5],parseInt(match[3],10)-1,match[1],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1e3}case".":{if(match[3]>12||match[1]>31){return fail}return new Date(match[5],parseInt(match[3],10)-1,match[1],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1e3}case"/":{if(match[1]>12||match[3]>31){return fail}return new Date(match[5],parseInt(match[1],10)-1,match[3],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1e3}}}else{switch(match[2]){case"-":{if(match[3]>12||match[5]>31||match[1]<70&&match[1]>38){return fail}year=match[1]>=0&&match[1]<=38?+match[1]+2e3:match[1];return new Date(year,parseInt(match[3],10)-1,match[5],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1e3}case".":{if(match[5]>=70){if(match[3]>12||match[1]>31){return fail}return new Date(match[5],parseInt(match[3],10)-1,match[1],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1e3}if(match[5]<60&&!match[6]){if(match[1]>23||match[3]>59){return fail}today=new Date;return new Date(today.getFullYear(),today.getMonth(),today.getDate(),match[1]||0,match[3]||0,match[5]||0,match[9]||0)/1e3}return fail}case"/":{if(match[1]>12||match[3]>31||match[5]<70&&match[5]>38){return fail}year=match[5]>=0&&match[5]<=38?+match[5]+2e3:match[5];return new Date(year,parseInt(match[1],10)-1,match[3],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1e3}case":":{if(match[1]>23||match[3]>59||match[5]>59){return fail}today=new Date;return new Date(today.getFullYear(),today.getMonth(),today.getDate(),match[1]||0,match[3]||0,match[5]||0)/1e3}}}}if(text==="now"){return now===null||isNaN(now)?(new Date).getTime()/1e3|0:now|0}if(!isNaN(parsed=Date.parse(text))){return parsed/1e3|0}if(match=text.match(/^([0-9]{4}-[0-9]{2}-[0-9]{2})[ t]([0-9]{2}:[0-9]{2}:[0-9]{2}(\.[0-9]+)?)([\+-][0-9]{2}(:[0-9]{2})?|z)/)){if(match[4]=="z"){match[4]="Z"}else if(match[4].match(/^([\+-][0-9]{2})$/)){match[4]=match[4]+":00"}if(!isNaN(parsed=Date.parse(match[1]+"T"+match[2]+match[4]))){return parsed/1e3|0}}date=now?new Date(now*1e3):new Date;days={sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6};ranges={yea:"FullYear",mon:"Month",day:"Date",hou:"Hours",min:"Minutes",sec:"Seconds"};function lastNext(type,range,modifier){
var diff,day=days[range];if(typeof day!=="undefined"){diff=day-date.getDay();if(diff===0){diff=7*modifier}else if(diff>0&&type==="last"){diff-=7}else if(diff<0&&type==="next"){diff+=7}date.setDate(date.getDate()+diff)}}function process(val){var splt=val.split(" "),type=splt[0],range=splt[1].substring(0,3),typeIsNumber=/\d+/.test(type),ago=splt[2]==="ago",num=(type==="last"?-1:1)*(ago?-1:1);if(typeIsNumber){num*=parseInt(type,10)}if(ranges.hasOwnProperty(range)&&!splt[1].match(/^mon(day|\.)?$/i)){return date["set"+ranges[range]](date["get"+ranges[range]]()+num)}if(range==="wee"){return date.setDate(date.getDate()+num*7)}if(type==="next"||type==="last"){lastNext(type,range,num)}else if(!typeIsNumber){return false}return true}times="(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec"+"|sunday|sun\\.?|monday|mon\\.?|tuesday|tue\\.?|wednesday|wed\\.?"+"|thursday|thu\\.?|friday|fri\\.?|saturday|sat\\.?)";regex="([+-]?\\d+\\s"+times+"|"+"(last|next)\\s"+times+")(\\sago)?";match=text.match(new RegExp(regex,"gi"));if(!match){return fail}for(i=0,len=match.length;i<len;i++){if(!process(match[i])){return fail}}return date.getTime()/1e3};Twig.lib.is=function(type,obj){var clas=Object.prototype.toString.call(obj).slice(8,-1);return obj!==undefined&&obj!==null&&clas===type};Twig.lib.copy=function(src){var target={},key;for(key in src)target[key]=src[key];return target};Twig.lib.replaceAll=function(string,search,replace){return string.split(search).join(replace)};Twig.lib.chunkArray=function(arr,size){var returnVal=[],x=0,len=arr.length;if(size<1||!Twig.lib.is("Array",arr)){return[]}while(x<len){returnVal.push(arr.slice(x,x+=size))}return returnVal};Twig.lib.round=function round(value,precision,mode){var m,f,isHalf,sgn;precision|=0;m=Math.pow(10,precision);value*=m;sgn=value>0|-(value<0);isHalf=value%1===.5*sgn;f=Math.floor(value);if(isHalf){switch(mode){case"PHP_ROUND_HALF_DOWN":value=f+(sgn<0);break;case"PHP_ROUND_HALF_EVEN":value=f+f%2*sgn;break;case"PHP_ROUND_HALF_ODD":value=f+!(f%2);break;default:value=f+(sgn>0)}}return(isHalf?value:Math.round(value))/m};Twig.lib.max=function max(){var ar,retVal,i=0,n=0,argv=arguments,argc=argv.length,_obj2Array=function(obj){if(Object.prototype.toString.call(obj)==="[object Array]"){return obj}else{var ar=[];for(var i in obj){if(obj.hasOwnProperty(i)){ar.push(obj[i])}}return ar}},_compare=function(current,next){var i=0,n=0,tmp=0,nl=0,cl=0;if(current===next){return 0}else if(typeof current==="object"){if(typeof next==="object"){current=_obj2Array(current);next=_obj2Array(next);cl=current.length;nl=next.length;if(nl>cl){return 1}else if(nl<cl){return-1}for(i=0,n=cl;i<n;++i){tmp=_compare(current[i],next[i]);if(tmp==1){return 1}else if(tmp==-1){return-1}}return 0}return-1}else if(typeof next==="object"){return 1}else if(isNaN(next)&&!isNaN(current)){if(current==0){return 0}return current<0?1:-1}else if(isNaN(current)&&!isNaN(next)){if(next==0){return 0}return next>0?1:-1}if(next==current){return 0}return next>current?1:-1};if(argc===0){throw new Error("At least one value should be passed to max()")}else if(argc===1){if(typeof argv[0]==="object"){ar=_obj2Array(argv[0])}else{throw new Error("Wrong parameter count for max()")}if(ar.length===0){throw new Error("Array must contain at least one element for max()")}}else{ar=argv}retVal=ar[0];for(i=1,n=ar.length;i<n;++i){if(_compare(retVal,ar[i])==1){retVal=ar[i]}}return retVal};Twig.lib.min=function min(){var ar,retVal,i=0,n=0,argv=arguments,argc=argv.length,_obj2Array=function(obj){if(Object.prototype.toString.call(obj)==="[object Array]"){return obj}var ar=[];for(var i in obj){if(obj.hasOwnProperty(i)){ar.push(obj[i])}}return ar},_compare=function(current,next){var i=0,n=0,tmp=0,nl=0,cl=0;if(current===next){return 0}else if(typeof current==="object"){if(typeof next==="object"){current=_obj2Array(current);next=_obj2Array(next);cl=current.length;nl=next.length;if(nl>cl){return 1}else if(nl<cl){return-1}for(i=0,n=cl;i<n;++i){tmp=_compare(current[i],next[i]);if(tmp==1){return 1}else if(tmp==-1){return-1}}return 0}return-1}else if(typeof next==="object"){return 1}else if(isNaN(next)&&!isNaN(current)){if(current==0){return 0}return current<0?1:-1}else if(isNaN(current)&&!isNaN(next)){if(next==0){return 0}return next>0?1:-1}if(next==current){return 0}return next>current?1:-1};if(argc===0){throw new Error("At least one value should be passed to min()")}else if(argc===1){if(typeof argv[0]==="object"){ar=_obj2Array(argv[0])}else{throw new Error("Wrong parameter count for min()")}if(ar.length===0){throw new Error("Array must contain at least one element for min()")}}else{ar=argv}retVal=ar[0];for(i=1,n=ar.length;i<n;++i){if(_compare(retVal,ar[i])==-1){retVal=ar[i]}}return retVal};return Twig}(Twig||{});var Twig=function(Twig){"use strict";Twig.logic={};Twig.logic.type={if_:"Twig.logic.type.if",endif:"Twig.logic.type.endif",for_:"Twig.logic.type.for",endfor:"Twig.logic.type.endfor",else_:"Twig.logic.type.else",elseif:"Twig.logic.type.elseif",set:"Twig.logic.type.set",setcapture:"Twig.logic.type.setcapture",endset:"Twig.logic.type.endset",filter:"Twig.logic.type.filter",endfilter:"Twig.logic.type.endfilter",shortblock:"Twig.logic.type.shortblock",block:"Twig.logic.type.block",endblock:"Twig.logic.type.endblock",extends_:"Twig.logic.type.extends",use:"Twig.logic.type.use",include:"Twig.logic.type.include",spaceless:"Twig.logic.type.spaceless",endspaceless:"Twig.logic.type.endspaceless",macro:"Twig.logic.type.macro",endmacro:"Twig.logic.type.endmacro",import_:"Twig.logic.type.import",from:"Twig.logic.type.from",embed:"Twig.logic.type.embed",endembed:"Twig.logic.type.endembed"};Twig.logic.definitions=[{type:Twig.logic.type.if_,regex:/^if\s+([\s\S]+)$/,next:[Twig.logic.type.else_,Twig.logic.type.elseif,Twig.logic.type.endif],open:true,compile:function(token){var expression=token.match[1];token.stack=Twig.expression.compile.apply(this,[{type:Twig.expression.type.expression,value:expression}]).stack;delete token.match;return token},parse:function(token,context,chain){var output="",result=Twig.expression.parse.apply(this,[token.stack,context]);chain=true;if(result){chain=false;output=Twig.parse.apply(this,[token.output,context])}return{chain:chain,output:output}}},{type:Twig.logic.type.elseif,regex:/^elseif\s+([^\s].*)$/,next:[Twig.logic.type.else_,Twig.logic.type.elseif,Twig.logic.type.endif],open:false,compile:function(token){var expression=token.match[1];token.stack=Twig.expression.compile.apply(this,[{type:Twig.expression.type.expression,value:expression}]).stack;delete token.match;return token},parse:function(token,context,chain){var output="";if(chain&&Twig.expression.parse.apply(this,[token.stack,context])===true){chain=false;output=Twig.parse.apply(this,[token.output,context])}return{chain:chain,output:output}}},{type:Twig.logic.type.else_,regex:/^else$/,next:[Twig.logic.type.endif,Twig.logic.type.endfor],open:false,parse:function(token,context,chain){var output="";if(chain){output=Twig.parse.apply(this,[token.output,context])}return{chain:chain,output:output}}},{type:Twig.logic.type.endif,regex:/^endif$/,next:[],open:false},{type:Twig.logic.type.for_,regex:/^for\s+([a-zA-Z0-9_,\s]+)\s+in\s+([^\s].*?)(?:\s+if\s+([^\s].*))?$/,next:[Twig.logic.type.else_,Twig.logic.type.endfor],open:true,compile:function(token){var key_value=token.match[1],expression=token.match[2],conditional=token.match[3],kv_split=null;token.key_var=null;token.value_var=null;if(key_value.indexOf(",")>=0){kv_split=key_value.split(",");if(kv_split.length===2){token.key_var=kv_split[0].trim();token.value_var=kv_split[1].trim()}else{throw new Twig.Error("Invalid expression in for loop: "+key_value)}}else{token.value_var=key_value}token.expression=Twig.expression.compile.apply(this,[{type:Twig.expression.type.expression,value:expression}]).stack;if(conditional){token.conditional=Twig.expression.compile.apply(this,[{type:Twig.expression.type.expression,value:conditional}]).stack}delete token.match;return token},parse:function(token,context,continue_chain){var result=Twig.expression.parse.apply(this,[token.expression,context]),output=[],len,index=0,keyset,that=this,conditional=token.conditional,buildLoop=function(index,len){var isConditional=conditional!==undefined;return{index:index+1,index0:index,revindex:isConditional?undefined:len-index,revindex0:isConditional?undefined:len-index-1,first:index===0,last:isConditional?undefined:index===len-1,length:isConditional?undefined:len,parent:context}},loop=function(key,value){var inner_context=Twig.ChildContext(context);inner_context[token.value_var]=value;if(token.key_var){inner_context[token.key_var]=key}inner_context.loop=buildLoop(index,len);if(conditional===undefined||Twig.expression.parse.apply(that,[conditional,inner_context])){output.push(Twig.parse.apply(that,[token.output,inner_context]));index+=1}delete inner_context["loop"];delete inner_context[token.value_var];delete inner_context[token.key_var];Twig.merge(context,inner_context,true)};if(Twig.lib.is("Array",result)){len=result.length;Twig.forEach(result,function(value){var key=index;loop(key,value)})}else if(Twig.lib.is("Object",result)){if(result._keys!==undefined){keyset=result._keys}else{keyset=Object.keys(result)}len=keyset.length;Twig.forEach(keyset,function(key){if(key==="_keys")return;loop(key,result[key])})}continue_chain=output.length===0;return{chain:continue_chain,output:Twig.output.apply(this,[output])}}},{type:Twig.logic.type.endfor,regex:/^endfor$/,next:[],open:false},{type:Twig.logic.type.set,regex:/^set\s+([a-zA-Z0-9_,\s]+)\s*=\s*([\s\S]+)$/,next:[],open:true,compile:function(token){var key=token.match[1].trim(),expression=token.match[2],expression_stack=Twig.expression.compile.apply(this,[{type:Twig.expression.type.expression,value:expression}]).stack;token.key=key;token.expression=expression_stack;delete token.match;return token},parse:function(token,context,continue_chain){var value=Twig.expression.parse.apply(this,[token.expression,context]),key=token.key;context[key]=value;return{chain:continue_chain,context:context}}},{type:Twig.logic.type.setcapture,regex:/^set\s+([a-zA-Z0-9_,\s]+)$/,next:[Twig.logic.type.endset],open:true,compile:function(token){var key=token.match[1].trim();token.key=key;delete token.match;return token},parse:function(token,context,continue_chain){var value=Twig.parse.apply(this,[token.output,context]),key=token.key;this.context[key]=value;context[key]=value;return{chain:continue_chain,context:context}}},{type:Twig.logic.type.endset,regex:/^endset$/,next:[],open:false},{type:Twig.logic.type.filter,regex:/^filter\s+(.+)$/,next:[Twig.logic.type.endfilter],open:true,compile:function(token){var expression="|"+token.match[1].trim();token.stack=Twig.expression.compile.apply(this,[{type:Twig.expression.type.expression,value:expression}]).stack;delete token.match;return token},parse:function(token,context,chain){var unfiltered=Twig.parse.apply(this,[token.output,context]),stack=[{type:Twig.expression.type.string,value:unfiltered}].concat(token.stack);var output=Twig.expression.parse.apply(this,[stack,context]);return{chain:chain,output:output}}},{type:Twig.logic.type.endfilter,regex:/^endfilter$/,next:[],open:false},{type:Twig.logic.type.block,regex:/^block\s+([a-zA-Z0-9_]+)$/,next:[Twig.logic.type.endblock],open:true,compile:function(token){token.block=token.match[1].trim();delete token.match;return token},parse:function(token,context,chain){var block_output,output,isImported=Twig.indexOf(this.importedBlocks,token.block)>-1,hasParent=this.blocks[token.block]&&Twig.indexOf(this.blocks[token.block],Twig.placeholders.parent)>-1;if(this.blocks[token.block]===undefined||isImported||hasParent||context.loop||token.overwrite){if(token.expression){block_output=Twig.expression.parse.apply(this,[{type:Twig.expression.type.string,value:Twig.expression.parse.apply(this,[token.output,context])},context])}else{block_output=Twig.expression.parse.apply(this,[{type:Twig.expression.type.string,value:Twig.parse.apply(this,[token.output,context])},context])}if(isImported){this.importedBlocks.splice(this.importedBlocks.indexOf(token.block),1)}if(hasParent){this.blocks[token.block]=Twig.Markup(this.blocks[token.block].replace(Twig.placeholders.parent,block_output))}else{this.blocks[token.block]=block_output}this.originalBlockTokens[token.block]={type:token.type,block:token.block,output:token.output,overwrite:true}}if(this.child.blocks[token.block]){output=this.child.blocks[token.block]}else{output=this.blocks[token.block]}return{chain:chain,output:output}}},{type:Twig.logic.type.shortblock,regex:/^block\s+([a-zA-Z0-9_]+)\s+(.+)$/,next:[],open:true,compile:function(token){token.expression=token.match[2].trim();token.output=Twig.expression.compile({type:Twig.expression.type.expression,value:token.expression}).stack;token.block=token.match[1].trim();delete token.match;return token},parse:function(token,context,chain){return Twig.logic.handler[Twig.logic.type.block].parse.apply(this,arguments)}},{type:Twig.logic.type.endblock,regex:/^endblock(?:\s+([a-zA-Z0-9_]+))?$/,next:[],open:false},{type:Twig.logic.type.extends_,regex:/^extends\s+(.+)$/,next:[],open:true,compile:function(token){var expression=token.match[1].trim();delete token.match;token.stack=Twig.expression.compile.apply(this,[{type:Twig.expression.type.expression,value:expression}]).stack;return token},parse:function(token,context,chain){var file=Twig.expression.parse.apply(this,[token.stack,context]);this.extend=file;return{chain:chain,output:""}}},{type:Twig.logic.type.use,regex:/^use\s+(.+)$/,next:[],open:true,compile:function(token){var expression=token.match[1].trim();delete token.match;token.stack=Twig.expression.compile.apply(this,[{type:Twig.expression.type.expression,value:expression}]).stack;return token},parse:function(token,context,chain){var file=Twig.expression.parse.apply(this,[token.stack,context]);this.importBlocks(file);return{chain:chain,output:""}}},{type:Twig.logic.type.include,regex:/^include\s+(ignore missing\s+)?(.+?)\s*(?:with\s+([\S\s]+?))?\s*(only)?$/,next:[],open:true,compile:function(token){var match=token.match,includeMissing=match[1]!==undefined,expression=match[2].trim(),withContext=match[3],only=match[4]!==undefined&&match[4].length;delete token.match;token.only=only;token.includeMissing=includeMissing;token.stack=Twig.expression.compile.apply(this,[{type:Twig.expression.type.expression,value:expression}]).stack;if(withContext!==undefined){token.withStack=Twig.expression.compile.apply(this,[{type:Twig.expression.type.expression,value:withContext.trim()}]).stack}return token},parse:function(token,context,chain){var innerContext={},withContext,i,template;if(!token.only){innerContext=Twig.ChildContext(context)}if(token.withStack!==undefined){withContext=Twig.expression.parse.apply(this,[token.withStack,context]);for(i in withContext){if(withContext.hasOwnProperty(i))innerContext[i]=withContext[i]}}var file=Twig.expression.parse.apply(this,[token.stack,innerContext]);if(file instanceof Twig.Template){template=file}else{template=this.importFile(file)}return{chain:chain,output:template.render(innerContext)}}},{type:Twig.logic.type.spaceless,regex:/^spaceless$/,next:[Twig.logic.type.endspaceless],open:true,parse:function(token,context,chain){var unfiltered=Twig.parse.apply(this,[token.output,context]),rBetweenTagSpaces=/>\s+</g,output=unfiltered.replace(rBetweenTagSpaces,"><").trim();return{chain:chain,output:output}}},{type:Twig.logic.type.endspaceless,regex:/^endspaceless$/,next:[],open:false},{type:Twig.logic.type.macro,regex:/^macro\s+([a-zA-Z0-9_]+)\s*\(\s*((?:[a-zA-Z0-9_]+(?:,\s*)?)*)\s*\)$/,next:[Twig.logic.type.endmacro],open:true,compile:function(token){var macroName=token.match[1],parameters=token.match[2].split(/[\s,]+/);for(var i=0;i<parameters.length;i++){for(var j=0;j<parameters.length;j++){if(parameters[i]===parameters[j]&&i!==j){throw new Twig.Error("Duplicate arguments for parameter: "+parameters[i])}}}token.macroName=macroName;token.parameters=parameters;delete token.match;return token},parse:function(token,context,chain){var template=this;this.macros[token.macroName]=function(){var macroContext={_self:template.macros};for(var i=0;i<token.parameters.length;i++){var prop=token.parameters[i];if(typeof arguments[i]!=="undefined"){macroContext[prop]=arguments[i]}else{macroContext[prop]=undefined}}return Twig.parse.apply(template,[token.output,macroContext])};return{chain:chain,output:""}}},{type:Twig.logic.type.endmacro,regex:/^endmacro$/,next:[],open:false},{type:Twig.logic.type.import_,regex:/^import\s+(.+)\s+as\s+([a-zA-Z0-9_]+)$/,next:[],open:true,compile:function(token){var expression=token.match[1].trim(),contextName=token.match[2].trim();delete token.match;token.expression=expression;token.contextName=contextName;token.stack=Twig.expression.compile.apply(this,[{type:Twig.expression.type.expression,value:expression}]).stack;return token},parse:function(token,context,chain){if(token.expression!=="_self"){var file=Twig.expression.parse.apply(this,[token.stack,context]);var template=this.importFile(file||token.expression);context[token.contextName]=template.render({},{output:"macros"})}else{context[token.contextName]=this.macros}return{chain:chain,output:""}}},{type:Twig.logic.type.from,regex:/^from\s+(.+)\s+import\s+([a-zA-Z0-9_, ]+)$/,next:[],open:true,compile:function(token){var expression=token.match[1].trim(),macroExpressions=token.match[2].trim().split(/[ ,]+/),macroNames={};for(var i=0;i<macroExpressions.length;i++){var res=macroExpressions[i];var macroMatch=res.match(/^([a-zA-Z0-9_]+)\s+(.+)\s+as\s+([a-zA-Z0-9_]+)$/);if(macroMatch){macroNames[macroMatch[1].trim()]=macroMatch[2].trim()}else if(res.match(/^([a-zA-Z0-9_]+)$/)){macroNames[res]=res}else{}}delete token.match;token.expression=expression;token.macroNames=macroNames;token.stack=Twig.expression.compile.apply(this,[{type:Twig.expression.type.expression,value:expression}]).stack;return token},parse:function(token,context,chain){var macros;if(token.expression!=="_self"){var file=Twig.expression.parse.apply(this,[token.stack,context]);var template=this.importFile(file||token.expression);macros=template.render({},{output:"macros"})}else{macros=this.macros}for(var macroName in token.macroNames){if(macros.hasOwnProperty(macroName)){context[token.macroNames[macroName]]=macros[macroName]}}return{chain:chain,output:""}}},{type:Twig.logic.type.embed,regex:/^embed\s+(ignore missing\s+)?(.+?)\s*(?:with\s+(.+?))?\s*(only)?$/,next:[Twig.logic.type.endembed],open:true,compile:function(token){var match=token.match,includeMissing=match[1]!==undefined,expression=match[2].trim(),withContext=match[3],only=match[4]!==undefined&&match[4].length;delete token.match;token.only=only;token.includeMissing=includeMissing;token.stack=Twig.expression.compile.apply(this,[{type:Twig.expression.type.expression,value:expression}]).stack;if(withContext!==undefined){token.withStack=Twig.expression.compile.apply(this,[{type:Twig.expression.type.expression,value:withContext.trim()}]).stack}return token},parse:function(token,context,chain){var innerContext={},withContext,i,template;if(!token.only){for(i in context){if(context.hasOwnProperty(i))innerContext[i]=context[i]}}if(token.withStack!==undefined){withContext=Twig.expression.parse.apply(this,[token.withStack,context]);for(i in withContext){if(withContext.hasOwnProperty(i))innerContext[i]=withContext[i]}}var file=Twig.expression.parse.apply(this,[token.stack,innerContext]);if(file instanceof Twig.Template){template=file}else{template=this.importFile(file)}this.blocks={};var output=Twig.parse.apply(this,[token.output,innerContext]);return{chain:chain,output:template.render(innerContext,{blocks:this.blocks})}}},{type:Twig.logic.type.endembed,regex:/^endembed$/,next:[],open:false}];Twig.logic.handler={};Twig.logic.extendType=function(type,value){value=value||"Twig.logic.type"+type;Twig.logic.type[type]=value};Twig.logic.extend=function(definition){if(!definition.type){throw new Twig.Error("Unable to extend logic definition. No type provided for "+definition)}else{Twig.logic.extendType(definition.type)}Twig.logic.handler[definition.type]=definition};while(Twig.logic.definitions.length>0){Twig.logic.extend(Twig.logic.definitions.shift())}Twig.logic.compile=function(raw_token){var expression=raw_token.value.trim(),token=Twig.logic.tokenize.apply(this,[expression]),token_template=Twig.logic.handler[token.type];if(token_template.compile){token=token_template.compile.apply(this,[token]);Twig.log.trace("Twig.logic.compile: ","Compiled logic token to ",token)}return token};Twig.logic.tokenize=function(expression){var token={},token_template_type=null,token_type=null,token_regex=null,regex_array=null,regex=null,match=null;expression=expression.trim();for(token_template_type in Twig.logic.handler){if(Twig.logic.handler.hasOwnProperty(token_template_type)){token_type=Twig.logic.handler[token_template_type].type;token_regex=Twig.logic.handler[token_template_type].regex;regex_array=[];if(token_regex instanceof Array){regex_array=token_regex}else{regex_array.push(token_regex)}while(regex_array.length>0){regex=regex_array.shift();match=regex.exec(expression.trim());if(match!==null){token.type=token_type;token.match=match;Twig.log.trace("Twig.logic.tokenize: ","Matched a ",token_type," regular expression of ",match);return token}}}}throw new Twig.Error("Unable to parse '"+expression.trim()+"'")};Twig.logic.parse=function(token,context,chain){var output="",token_template;context=context||{};Twig.log.debug("Twig.logic.parse: ","Parsing logic token ",token);token_template=Twig.logic.handler[token.type];if(token_template.parse){output=token_template.parse.apply(this,[token,context,chain])}return output};return Twig}(Twig||{});var Twig=function(Twig){"use strict";Twig.expression={};Twig.expression.reservedWords=["true","false","null","TRUE","FALSE","NULL","_context"];Twig.expression.type={comma:"Twig.expression.type.comma",operator:{unary:"Twig.expression.type.operator.unary",binary:"Twig.expression.type.operator.binary"},string:"Twig.expression.type.string",bool:"Twig.expression.type.bool",array:{start:"Twig.expression.type.array.start",end:"Twig.expression.type.array.end"},object:{start:"Twig.expression.type.object.start",end:"Twig.expression.type.object.end"},parameter:{start:"Twig.expression.type.parameter.start",end:"Twig.expression.type.parameter.end"},key:{period:"Twig.expression.type.key.period",brackets:"Twig.expression.type.key.brackets"},filter:"Twig.expression.type.filter",_function:"Twig.expression.type._function",variable:"Twig.expression.type.variable",number:"Twig.expression.type.number",_null:"Twig.expression.type.null",context:"Twig.expression.type.context",test:"Twig.expression.type.test"};Twig.expression.set={operations:[Twig.expression.type.filter,Twig.expression.type.operator.unary,Twig.expression.type.operator.binary,Twig.expression.type.array.end,Twig.expression.type.object.end,Twig.expression.type.parameter.end,Twig.expression.type.comma,Twig.expression.type.test],expressions:[Twig.expression.type._function,Twig.expression.type.bool,Twig.expression.type.string,Twig.expression.type.variable,Twig.expression.type.number,Twig.expression.type._null,Twig.expression.type.context,Twig.expression.type.parameter.start,Twig.expression.type.array.start,Twig.expression.type.object.start]};Twig.expression.set.operations_extended=Twig.expression.set.operations.concat([Twig.expression.type.key.period,Twig.expression.type.key.brackets]);Twig.expression.fn={compile:{push:function(token,stack,output){output.push(token)},push_both:function(token,stack,output){output.push(token);stack.push(token)}},parse:{push:function(token,stack,context){stack.push(token)},push_value:function(token,stack,context){stack.push(token.value)}}};Twig.expression.definitions=[{type:Twig.expression.type.test,regex:/^is\s+(not)?\s*([a-zA-Z_][a-zA-Z0-9_]*)/,next:Twig.expression.set.operations.concat([Twig.expression.type.parameter.start]),compile:function(token,stack,output){token.filter=token.match[2];token.modifier=token.match[1];delete token.match;delete token.value;output.push(token)},parse:function(token,stack,context){var value=stack.pop(),params=token.params&&Twig.expression.parse.apply(this,[token.params,context]),result=Twig.test(token.filter,value,params);if(token.modifier=="not"){stack.push(!result)}else{stack.push(result)}}},{type:Twig.expression.type.comma,regex:/^,/,next:Twig.expression.set.expressions.concat([Twig.expression.type.array.end,Twig.expression.type.object.end]),compile:function(token,stack,output){var i=stack.length-1,stack_token;delete token.match;delete token.value;for(;i>=0;i--){stack_token=stack.pop();if(stack_token.type===Twig.expression.type.object.start||stack_token.type===Twig.expression.type.parameter.start||stack_token.type===Twig.expression.type.array.start){stack.push(stack_token);break}output.push(stack_token)}output.push(token)}},{type:Twig.expression.type.operator.binary,regex:/(^[\+\-~%\?\:]|^[!=]==?|^[!<>]=?|^\*\*?|^\/\/?|^and\s+|^or\s+|^in\s+|^not in\s+|^\.\.)/,next:Twig.expression.set.expressions.concat([Twig.expression.type.operator.unary]),compile:function(token,stack,output){delete token.match;token.value=token.value.trim();var value=token.value,operator=Twig.expression.operator.lookup(value,token);Twig.log.trace("Twig.expression.compile: ","Operator: ",operator," from ",value);while(stack.length>0&&(stack[stack.length-1].type==Twig.expression.type.operator.unary||stack[stack.length-1].type==Twig.expression.type.operator.binary)&&(operator.associativity===Twig.expression.operator.leftToRight&&operator.precidence>=stack[stack.length-1].precidence||operator.associativity===Twig.expression.operator.rightToLeft&&operator.precidence>stack[stack.length-1].precidence)){var temp=stack.pop();output.push(temp)}if(value===":"){if(stack[stack.length-1]&&stack[stack.length-1].value==="?"){}else{var key_token=output.pop();if(key_token.type===Twig.expression.type.string||key_token.type===Twig.expression.type.variable){token.key=key_token.value}else if(key_token.type===Twig.expression.type.number){token.key=key_token.value.toString()}else if(key_token.type===Twig.expression.type.parameter.end&&key_token.expression){token.params=key_token.params}else{throw new Twig.Error("Unexpected value before ':' of "+key_token.type+" = "+key_token.value)}output.push(token);return}}else{stack.push(operator)}},parse:function(token,stack,context){if(token.key){stack.push(token)}else if(token.params){token.key=Twig.expression.parse.apply(this,[token.params,context]);stack.push(token);delete token.params}else{Twig.expression.operator.parse(token.value,stack)}}},{type:Twig.expression.type.operator.unary,regex:/(^not\s+)/,next:Twig.expression.set.expressions,compile:function(token,stack,output){delete token.match;token.value=token.value.trim();var value=token.value,operator=Twig.expression.operator.lookup(value,token);Twig.log.trace("Twig.expression.compile: ","Operator: ",operator," from ",value);while(stack.length>0&&(stack[stack.length-1].type==Twig.expression.type.operator.unary||stack[stack.length-1].type==Twig.expression.type.operator.binary)&&(operator.associativity===Twig.expression.operator.leftToRight&&operator.precidence>=stack[stack.length-1].precidence||operator.associativity===Twig.expression.operator.rightToLeft&&operator.precidence>stack[stack.length-1].precidence)){var temp=stack.pop();output.push(temp)}stack.push(operator)},parse:function(token,stack,context){Twig.expression.operator.parse(token.value,stack)}},{type:Twig.expression.type.string,regex:/^(["'])(?:(?=(\\?))\2[\s\S])*?\1/,next:Twig.expression.set.operations,compile:function(token,stack,output){var value=token.value;delete token.match;if(value.substring(0,1)==='"'){value=value.replace('\\"','"')}else{value=value.replace("\\'","'")}token.value=value.substring(1,value.length-1).replace(/\\n/g,"\n").replace(/\\r/g,"\r");Twig.log.trace("Twig.expression.compile: ","String value: ",token.value);output.push(token)},parse:Twig.expression.fn.parse.push_value},{type:Twig.expression.type.parameter.start,regex:/^\(/,next:Twig.expression.set.expressions.concat([Twig.expression.type.parameter.end]),compile:Twig.expression.fn.compile.push_both,parse:Twig.expression.fn.parse.push},{type:Twig.expression.type.parameter.end,regex:/^\)/,next:Twig.expression.set.operations_extended,compile:function(token,stack,output){var stack_token,end_token=token;stack_token=stack.pop();while(stack.length>0&&stack_token.type!=Twig.expression.type.parameter.start){output.push(stack_token);stack_token=stack.pop()}var param_stack=[];while(token.type!==Twig.expression.type.parameter.start){param_stack.unshift(token);token=output.pop()}param_stack.unshift(token);var is_expression=false;token=output[output.length-1];if(token===undefined||token.type!==Twig.expression.type._function&&token.type!==Twig.expression.type.filter&&token.type!==Twig.expression.type.test&&token.type!==Twig.expression.type.key.brackets&&token.type!==Twig.expression.type.key.period){end_token.expression=true;param_stack.pop();param_stack.shift();end_token.params=param_stack;output.push(end_token)}else{end_token.expression=false;token.params=param_stack}},parse:function(token,stack,context){var new_array=[],array_ended=false,value=null;if(token.expression){value=Twig.expression.parse.apply(this,[token.params,context]);stack.push(value)}else{while(stack.length>0){value=stack.pop();if(value&&value.type&&value.type==Twig.expression.type.parameter.start){array_ended=true;break}new_array.unshift(value)}if(!array_ended){throw new Twig.Error("Expected end of parameter set.")}stack.push(new_array)}}},{type:Twig.expression.type.array.start,regex:/^\[/,next:Twig.expression.set.expressions.concat([Twig.expression.type.array.end]),compile:Twig.expression.fn.compile.push_both,parse:Twig.expression.fn.parse.push},{type:Twig.expression.type.array.end,regex:/^\]/,next:Twig.expression.set.operations_extended,compile:function(token,stack,output){var i=stack.length-1,stack_token;for(;i>=0;i--){stack_token=stack.pop();if(stack_token.type===Twig.expression.type.array.start){break}output.push(stack_token)}output.push(token)},parse:function(token,stack,context){var new_array=[],array_ended=false,value=null;while(stack.length>0){value=stack.pop();if(value.type&&value.type==Twig.expression.type.array.start){array_ended=true;break}new_array.unshift(value)}if(!array_ended){throw new Twig.Error("Expected end of array.")}stack.push(new_array)}},{type:Twig.expression.type.object.start,regex:/^\{/,next:Twig.expression.set.expressions.concat([Twig.expression.type.object.end]),compile:Twig.expression.fn.compile.push_both,parse:Twig.expression.fn.parse.push},{type:Twig.expression.type.object.end,regex:/^\}/,next:Twig.expression.set.operations_extended,compile:function(token,stack,output){var i=stack.length-1,stack_token;for(;i>=0;i--){stack_token=stack.pop();if(stack_token&&stack_token.type===Twig.expression.type.object.start){break}output.push(stack_token)}output.push(token)},parse:function(end_token,stack,context){var new_object={},object_ended=false,token=null,token_key=null,has_value=false,value=null;while(stack.length>0){token=stack.pop();if(token&&token.type&&token.type===Twig.expression.type.object.start){object_ended=true;break}if(token&&token.type&&(token.type===Twig.expression.type.operator.binary||token.type===Twig.expression.type.operator.unary)&&token.key){if(!has_value){throw new Twig.Error("Missing value for key '"+token.key+"' in object definition.")}new_object[token.key]=value;if(new_object._keys===undefined)new_object._keys=[];new_object._keys.unshift(token.key);value=null;has_value=false}else{has_value=true;value=token}}if(!object_ended){throw new Twig.Error("Unexpected end of object.")}stack.push(new_object)}},{type:Twig.expression.type.filter,regex:/^\|\s?([a-zA-Z_][a-zA-Z0-9_\-]*)/,next:Twig.expression.set.operations_extended.concat([Twig.expression.type.parameter.start]),compile:function(token,stack,output){
token.value=token.match[1];output.push(token)},parse:function(token,stack,context){var input=stack.pop(),params=token.params&&Twig.expression.parse.apply(this,[token.params,context]);stack.push(Twig.filter.apply(this,[token.value,input,params]))}},{type:Twig.expression.type._function,regex:/^([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/,next:Twig.expression.type.parameter.start,transform:function(match,tokens){return"("},compile:function(token,stack,output){var fn=token.match[1];token.fn=fn;delete token.match;delete token.value;output.push(token)},parse:function(token,stack,context){var params=token.params&&Twig.expression.parse.apply(this,[token.params,context]),fn=token.fn,value;if(Twig.functions[fn]){value=Twig.functions[fn].apply(this,params)}else if(typeof context[fn]=="function"){value=context[fn].apply(context,params)}else{throw new Twig.Error(fn+" function does not exist and is not defined in the context")}stack.push(value)}},{type:Twig.expression.type.variable,regex:/^[a-zA-Z_][a-zA-Z0-9_]*/,next:Twig.expression.set.operations_extended.concat([Twig.expression.type.parameter.start]),compile:Twig.expression.fn.compile.push,validate:function(match,tokens){return Twig.indexOf(Twig.expression.reservedWords,match[0])<0},parse:function(token,stack,context){var value=Twig.expression.resolve(context[token.value],context);stack.push(value)}},{type:Twig.expression.type.key.period,regex:/^\.([a-zA-Z0-9_]+)/,next:Twig.expression.set.operations_extended.concat([Twig.expression.type.parameter.start]),compile:function(token,stack,output){token.key=token.match[1];delete token.match;delete token.value;output.push(token)},parse:function(token,stack,context){var params=token.params&&Twig.expression.parse.apply(this,[token.params,context]),key=token.key,object=stack.pop(),value;if(object===null||object===undefined){if(this.options.strict_variables){throw new Twig.Error("Can't access a key "+key+" on an null or undefined object.")}else{return null}}var capitalize=function(value){return value.substr(0,1).toUpperCase()+value.substr(1)};if(typeof object==="object"&&key in object){value=object[key]}else if(object["get"+capitalize(key)]!==undefined){value=object["get"+capitalize(key)]}else if(object["is"+capitalize(key)]!==undefined){value=object["is"+capitalize(key)]}else{value=undefined}stack.push(Twig.expression.resolve(value,object,params))}},{type:Twig.expression.type.key.brackets,regex:/^\[([^\]]*)\]/,next:Twig.expression.set.operations_extended.concat([Twig.expression.type.parameter.start]),compile:function(token,stack,output){var match=token.match[1];delete token.value;delete token.match;token.stack=Twig.expression.compile({value:match}).stack;output.push(token)},parse:function(token,stack,context){var params=token.params&&Twig.expression.parse.apply(this,[token.params,context]),key=Twig.expression.parse.apply(this,[token.stack,context]),object=stack.pop(),value;if(object===null||object===undefined){if(this.options.strict_variables){throw new Twig.Error("Can't access a key "+key+" on an null or undefined object.")}else{return null}}if(typeof object==="object"&&key in object){value=object[key]}else{value=null}stack.push(Twig.expression.resolve(value,object,params))}},{type:Twig.expression.type._null,regex:/^(null|NULL|none|NONE)/,next:Twig.expression.set.operations,compile:function(token,stack,output){delete token.match;token.value=null;output.push(token)},parse:Twig.expression.fn.parse.push_value},{type:Twig.expression.type.context,regex:/^_context/,next:Twig.expression.set.operations_extended.concat([Twig.expression.type.parameter.start]),compile:Twig.expression.fn.compile.push,parse:function(token,stack,context){stack.push(context)}},{type:Twig.expression.type.number,regex:/^\-?\d+(\.\d+)?/,next:Twig.expression.set.operations,compile:function(token,stack,output){token.value=Number(token.value);output.push(token)},parse:Twig.expression.fn.parse.push_value},{type:Twig.expression.type.bool,regex:/^(true|TRUE|false|FALSE)/,next:Twig.expression.set.operations,compile:function(token,stack,output){token.value=token.match[0].toLowerCase()==="true";delete token.match;output.push(token)},parse:Twig.expression.fn.parse.push_value}];Twig.expression.resolve=function(value,context,params){if(typeof value=="function"){return value.apply(context,params||[])}else{return value}};Twig.expression.handler={};Twig.expression.extendType=function(type){Twig.expression.type[type]="Twig.expression.type."+type};Twig.expression.extend=function(definition){if(!definition.type){throw new Twig.Error("Unable to extend logic definition. No type provided for "+definition)}Twig.expression.handler[definition.type]=definition};while(Twig.expression.definitions.length>0){Twig.expression.extend(Twig.expression.definitions.shift())}Twig.expression.tokenize=function(expression){var tokens=[],exp_offset=0,next=null,type,regex,regex_array,token_next,match_found,invalid_matches=[],match_function;match_function=function(){var match=Array.prototype.slice.apply(arguments),string=match.pop(),offset=match.pop();Twig.log.trace("Twig.expression.tokenize","Matched a ",type," regular expression of ",match);if(next&&Twig.indexOf(next,type)<0){invalid_matches.push(type+" cannot follow a "+tokens[tokens.length-1].type+" at template:"+exp_offset+" near '"+match[0].substring(0,20)+"...'");return match[0]}if(Twig.expression.handler[type].validate&&!Twig.expression.handler[type].validate(match,tokens)){return match[0]}invalid_matches=[];tokens.push({type:type,value:match[0],match:match});match_found=true;next=token_next;exp_offset+=match[0].length;if(Twig.expression.handler[type].transform){return Twig.expression.handler[type].transform(match,tokens)}return""};Twig.log.debug("Twig.expression.tokenize","Tokenizing expression ",expression);while(expression.length>0){expression=expression.trim();for(type in Twig.expression.handler){if(Twig.expression.handler.hasOwnProperty(type)){token_next=Twig.expression.handler[type].next;regex=Twig.expression.handler[type].regex;if(regex instanceof Array){regex_array=regex}else{regex_array=[regex]}match_found=false;while(regex_array.length>0){regex=regex_array.pop();expression=expression.replace(regex,match_function)}if(match_found){break}}}if(!match_found){if(invalid_matches.length>0){throw new Twig.Error(invalid_matches.join(" OR "))}else{throw new Twig.Error("Unable to parse '"+expression+"' at template position"+exp_offset)}}}Twig.log.trace("Twig.expression.tokenize","Tokenized to ",tokens);return tokens};Twig.expression.compile=function(raw_token){var expression=raw_token.value,tokens=Twig.expression.tokenize(expression),token=null,output=[],stack=[],token_template=null;Twig.log.trace("Twig.expression.compile: ","Compiling ",expression);while(tokens.length>0){token=tokens.shift();token_template=Twig.expression.handler[token.type];Twig.log.trace("Twig.expression.compile: ","Compiling ",token);token_template.compile&&token_template.compile(token,stack,output);Twig.log.trace("Twig.expression.compile: ","Stack is",stack);Twig.log.trace("Twig.expression.compile: ","Output is",output)}while(stack.length>0){output.push(stack.pop())}Twig.log.trace("Twig.expression.compile: ","Final output is",output);raw_token.stack=output;delete raw_token.value;return raw_token};Twig.expression.parse=function(tokens,context){var that=this;if(!(tokens instanceof Array)){tokens=[tokens]}var stack=[],token_template=null;Twig.forEach(tokens,function(token){token_template=Twig.expression.handler[token.type];token_template.parse&&token_template.parse.apply(that,[token,stack,context])});return stack.pop()};return Twig}(Twig||{});var Twig=function(Twig){"use strict";Twig.expression.operator={leftToRight:"leftToRight",rightToLeft:"rightToLeft"};var containment=function(a,b){if(b===undefined||b===null){return null}else if(b.indexOf!==undefined){return a===b||a!==""&&b.indexOf(a)>-1}else{var el;for(el in b){if(b.hasOwnProperty(el)&&b[el]===a){return true}}return false}};Twig.expression.operator.lookup=function(operator,token){switch(operator){case"..":case"not in":case"in":token.precidence=20;token.associativity=Twig.expression.operator.leftToRight;break;case",":token.precidence=18;token.associativity=Twig.expression.operator.leftToRight;break;case"?":case":":token.precidence=16;token.associativity=Twig.expression.operator.rightToLeft;break;case"or":token.precidence=14;token.associativity=Twig.expression.operator.leftToRight;break;case"and":token.precidence=13;token.associativity=Twig.expression.operator.leftToRight;break;case"==":case"!=":token.precidence=9;token.associativity=Twig.expression.operator.leftToRight;break;case"<":case"<=":case">":case">=":token.precidence=8;token.associativity=Twig.expression.operator.leftToRight;break;case"~":case"+":case"-":token.precidence=6;token.associativity=Twig.expression.operator.leftToRight;break;case"//":case"**":case"*":case"/":case"%":token.precidence=5;token.associativity=Twig.expression.operator.leftToRight;break;case"not":token.precidence=3;token.associativity=Twig.expression.operator.rightToLeft;break;default:throw new Twig.Error(operator+" is an unknown operator.")}token.operator=operator;return token};Twig.expression.operator.parse=function(operator,stack){Twig.log.trace("Twig.expression.operator.parse: ","Handling ",operator);var a,b,c;switch(operator){case":":break;case"?":c=stack.pop();b=stack.pop();a=stack.pop();if(a){stack.push(b)}else{stack.push(c)}break;case"+":b=parseFloat(stack.pop());a=parseFloat(stack.pop());stack.push(a+b);break;case"-":b=parseFloat(stack.pop());a=parseFloat(stack.pop());stack.push(a-b);break;case"*":b=parseFloat(stack.pop());a=parseFloat(stack.pop());stack.push(a*b);break;case"/":b=parseFloat(stack.pop());a=parseFloat(stack.pop());stack.push(a/b);break;case"//":b=parseFloat(stack.pop());a=parseFloat(stack.pop());stack.push(parseInt(a/b));break;case"%":b=parseFloat(stack.pop());a=parseFloat(stack.pop());stack.push(a%b);break;case"~":b=stack.pop();a=stack.pop();stack.push((a!=null?a.toString():"")+(b!=null?b.toString():""));break;case"not":case"!":stack.push(!stack.pop());break;case"<":b=stack.pop();a=stack.pop();stack.push(a<b);break;case"<=":b=stack.pop();a=stack.pop();stack.push(a<=b);break;case">":b=stack.pop();a=stack.pop();stack.push(a>b);break;case">=":b=stack.pop();a=stack.pop();stack.push(a>=b);break;case"===":b=stack.pop();a=stack.pop();stack.push(a===b);break;case"==":b=stack.pop();a=stack.pop();stack.push(a==b);break;case"!==":b=stack.pop();a=stack.pop();stack.push(a!==b);break;case"!=":b=stack.pop();a=stack.pop();stack.push(a!=b);break;case"or":b=stack.pop();a=stack.pop();stack.push(a||b);break;case"and":b=stack.pop();a=stack.pop();stack.push(a&&b);break;case"**":b=stack.pop();a=stack.pop();stack.push(Math.pow(a,b));break;case"not in":b=stack.pop();a=stack.pop();stack.push(!containment(a,b));break;case"in":b=stack.pop();a=stack.pop();stack.push(containment(a,b));break;case"..":b=stack.pop();a=stack.pop();stack.push(Twig.functions.range(a,b));break;default:throw new Twig.Error(operator+" is an unknown operator.")}};return Twig}(Twig||{});var Twig=function(Twig){function is(type,obj){var clas=Object.prototype.toString.call(obj).slice(8,-1);return obj!==undefined&&obj!==null&&clas===type}Twig.filters={upper:function(value){if(typeof value!=="string"){return value}return value.toUpperCase()},lower:function(value){if(typeof value!=="string"){return value}return value.toLowerCase()},capitalize:function(value){if(typeof value!=="string"){return value}return value.substr(0,1).toUpperCase()+value.toLowerCase().substr(1)},title:function(value){if(typeof value!=="string"){return value}return value.toLowerCase().replace(/(^|\s)([a-z])/g,function(m,p1,p2){return p1+p2.toUpperCase()})},length:function(value){if(Twig.lib.is("Array",value)||typeof value==="string"){return value.length}else if(Twig.lib.is("Object",value)){if(value._keys===undefined){return Object.keys(value).length}else{return value._keys.length}}else{return 0}},reverse:function(value){if(is("Array",value)){return value.reverse()}else if(is("String",value)){return value.split("").reverse().join("")}else if(is("Object",value)){var keys=value._keys||Object.keys(value).reverse();value._keys=keys;return value}},sort:function(value){if(is("Array",value)){return value.sort()}else if(is("Object",value)){delete value._keys;var keys=Object.keys(value),sorted_keys=keys.sort(function(a,b){var a1,a2;if(value[a]>value[b]==!(value[a]<=value[b])){return value[a]>value[b]?1:value[a]<value[b]?-1:0}else if(!isNaN(a1=parseFloat(value[a]))&&!isNaN(b1=parseFloat(value[b]))){return a1>b1?1:a1<b1?-1:0}else if(typeof value[a]=="string"){return value[a]>value[b].toString()?1:value[a]<value[b].toString()?-1:0}else if(typeof value[b]=="string"){return value[a].toString()>value[b]?1:value[a].toString()<value[b]?-1:0}else{return null}});value._keys=sorted_keys;return value}},keys:function(value){if(value===undefined||value===null){return}var keyset=value._keys||Object.keys(value),output=[];Twig.forEach(keyset,function(key){if(key==="_keys")return;if(value.hasOwnProperty(key)){output.push(key)}});return output},url_encode:function(value){if(value===undefined||value===null){return}var result=encodeURIComponent(value);result=result.replace("'","%27");return result},join:function(value,params){if(value===undefined||value===null){return}var join_str="",output=[],keyset=null;if(params&&params[0]){join_str=params[0]}if(is("Array",value)){output=value}else{keyset=value._keys||Object.keys(value);Twig.forEach(keyset,function(key){if(key==="_keys")return;if(value.hasOwnProperty(key)){output.push(value[key])}})}return output.join(join_str)},"default":function(value,params){if(params!==undefined&&params.length>1){throw new Twig.Error("default filter expects one argument")}if(value===undefined||value===null||value===""){if(params===undefined){return""}return params[0]}else{return value}},json_encode:function(value){if(value===undefined||value===null){return"null"}else if(typeof value=="object"&&is("Array",value)){output=[];Twig.forEach(value,function(v){output.push(Twig.filters.json_encode(v))});return"["+output.join(",")+"]"}else if(typeof value=="object"){var keyset=value._keys||Object.keys(value),output=[];Twig.forEach(keyset,function(key){output.push(JSON.stringify(key)+":"+Twig.filters.json_encode(value[key]))});return"{"+output.join(",")+"}"}else{return JSON.stringify(value)}},merge:function(value,params){var obj=[],arr_index=0,keyset=[];if(!is("Array",value)){obj={}}else{Twig.forEach(params,function(param){if(!is("Array",param)){obj={}}})}if(!is("Array",obj)){obj._keys=[]}if(is("Array",value)){Twig.forEach(value,function(val){if(obj._keys)obj._keys.push(arr_index);obj[arr_index]=val;arr_index++})}else{keyset=value._keys||Object.keys(value);Twig.forEach(keyset,function(key){obj[key]=value[key];obj._keys.push(key);var int_key=parseInt(key,10);if(!isNaN(int_key)&&int_key>=arr_index){arr_index=int_key+1}})}Twig.forEach(params,function(param){if(is("Array",param)){Twig.forEach(param,function(val){if(obj._keys)obj._keys.push(arr_index);obj[arr_index]=val;arr_index++})}else{keyset=param._keys||Object.keys(param);Twig.forEach(keyset,function(key){if(!obj[key])obj._keys.push(key);obj[key]=param[key];var int_key=parseInt(key,10);if(!isNaN(int_key)&&int_key>=arr_index){arr_index=int_key+1}})}});if(params.length===0){throw new Twig.Error("Filter merge expects at least one parameter")}return obj},date:function(value,params){var date=Twig.functions.date(value);var format=params&&params.length?params[0]:"F j, Y H:i";return Twig.lib.formatDate(date,format)},date_modify:function(value,params){if(value===undefined||value===null){return}if(params===undefined||params.length!==1){throw new Twig.Error("date_modify filter expects 1 argument")}var modifyText=params[0],time;if(Twig.lib.is("Date",value)){time=Twig.lib.strtotime(modifyText,value.getTime()/1e3)}if(Twig.lib.is("String",value)){time=Twig.lib.strtotime(modifyText,Twig.lib.strtotime(value))}if(Twig.lib.is("Number",value)){time=Twig.lib.strtotime(modifyText,value)}return new Date(time*1e3)},replace:function(value,params){if(value===undefined||value===null){return}var pairs=params[0],tag;for(tag in pairs){if(pairs.hasOwnProperty(tag)&&tag!=="_keys"){value=Twig.lib.replaceAll(value,tag,pairs[tag])}}return value},format:function(value,params){if(value===undefined||value===null){return}return Twig.lib.vsprintf(value,params)},striptags:function(value){if(value===undefined||value===null){return}return Twig.lib.strip_tags(value)},escape:function(value,params){if(value===undefined||value===null){return}var strategy="html";if(params&&params.length&&params[0]!==true)strategy=params[0];if(strategy=="html"){var raw_value=value.toString().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;");return Twig.Markup(raw_value,"html")}else if(strategy=="js"){var raw_value=value.toString();var result="";for(var i=0;i<raw_value.length;i++){if(raw_value[i].match(/^[a-zA-Z0-9,\._]$/))result+=raw_value[i];else{var char_code=raw_value.charCodeAt(i);if(char_code<128)result+="\\x"+char_code.toString(16).toUpperCase();else result+=Twig.lib.sprintf("\\u%04s",char_code.toString(16).toUpperCase())}}return Twig.Markup(result,"js")}else if(strategy=="css"){var raw_value=value.toString();var result="";for(var i=0;i<raw_value.length;i++){if(raw_value[i].match(/^[a-zA-Z0-9]$/))result+=raw_value[i];else{var char_code=raw_value.charCodeAt(i);result+="\\"+char_code.toString(16).toUpperCase()+" "}}return Twig.Markup(result,"css")}else if(strategy=="url"){var result=Twig.filters.url_encode(value);return Twig.Markup(result,"url")}else if(strategy=="html_attr"){var raw_value=value.toString();var result="";for(var i=0;i<raw_value.length;i++){if(raw_value[i].match(/^[a-zA-Z0-9,\.\-_]$/))result+=raw_value[i];else if(raw_value[i].match(/^[&<>"]$/))result+=raw_value[i].replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");else{var char_code=raw_value.charCodeAt(i);if(char_code<=31&&char_code!=9&&char_code!=10&&char_code!=13)result+="&#xFFFD;";else if(char_code<128)result+=Twig.lib.sprintf("&#x%02s;",char_code.toString(16).toUpperCase());else result+=Twig.lib.sprintf("&#x%04s;",char_code.toString(16).toUpperCase())}}return Twig.Markup(result,"html_attr")}else{throw new Twig.Error("escape strategy unsupported")}},e:function(value,params){return Twig.filters.escape(value,params)},nl2br:function(value){if(value===undefined||value===null){return}var linebreak_tag="BACKSLASH_n_replace",br="<br />"+linebreak_tag;value=Twig.filters.escape(value).replace(/\r\n/g,br).replace(/\r/g,br).replace(/\n/g,br);value=Twig.lib.replaceAll(value,linebreak_tag,"\n");return Twig.Markup(value)},number_format:function(value,params){var number=value,decimals=params&&params[0]?params[0]:undefined,dec=params&&params[1]!==undefined?params[1]:".",sep=params&&params[2]!==undefined?params[2]:",";number=(number+"").replace(/[^0-9+\-Ee.]/g,"");var n=!isFinite(+number)?0:+number,prec=!isFinite(+decimals)?0:Math.abs(decimals),s="",toFixedFix=function(n,prec){var k=Math.pow(10,prec);return""+Math.round(n*k)/k};s=(prec?toFixedFix(n,prec):""+Math.round(n)).split(".");if(s[0].length>3){s[0]=s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,sep)}if((s[1]||"").length<prec){s[1]=s[1]||"";s[1]+=new Array(prec-s[1].length+1).join("0")}return s.join(dec)},trim:function(value,params){if(value===undefined||value===null){return}var str=Twig.filters.escape(""+value),whitespace;if(params&&params[0]){whitespace=""+params[0]}else{whitespace=" \n\r	\f\x0B            ​\u2028\u2029　"}for(var i=0;i<str.length;i++){if(whitespace.indexOf(str.charAt(i))===-1){str=str.substring(i);break}}for(i=str.length-1;i>=0;i--){if(whitespace.indexOf(str.charAt(i))===-1){str=str.substring(0,i+1);break}}return whitespace.indexOf(str.charAt(0))===-1?str:""},truncate:function(value,params){var length=30,preserve=false,separator="...";value=value+"";if(params){if(params[0]){length=params[0]}if(params[1]){preserve=params[1]}if(params[2]){separator=params[2]}}if(value.length>length){if(preserve){length=value.indexOf(" ",length);if(length===-1){return value}}value=value.substr(0,length)+separator}return value},slice:function(value,params){if(value===undefined||value===null){return}if(params===undefined||params.length<1){throw new Twig.Error("slice filter expects at least 1 argument")}var start=params[0]||0;var length=params.length>1?params[1]:value.length;var startIndex=start>=0?start:Math.max(value.length+start,0);if(Twig.lib.is("Array",value)){var output=[];for(var i=startIndex;i<startIndex+length&&i<value.length;i++){output.push(value[i])}return output}else if(Twig.lib.is("String",value)){return value.substr(startIndex,length)}else{throw new Twig.Error("slice filter expects value to be an array or string")}},abs:function(value){if(value===undefined||value===null){return}return Math.abs(value)},first:function(value){if(is("Array",value)){return value[0]}else if(is("Object",value)){if("_keys"in value){return value[value._keys[0]]}}else if(typeof value==="string"){return value.substr(0,1)}return},split:function(value,params){if(value===undefined||value===null){return}if(params===undefined||params.length<1||params.length>2){throw new Twig.Error("split filter expects 1 or 2 argument")}if(Twig.lib.is("String",value)){var delimiter=params[0],limit=params[1],split=value.split(delimiter);if(limit===undefined){return split}else if(limit<0){return value.split(delimiter,split.length+limit)}else{var limitedSplit=[];if(delimiter==""){while(split.length>0){var temp="";for(var i=0;i<limit&&split.length>0;i++){temp+=split.shift()}limitedSplit.push(temp)}}else{for(var i=0;i<limit-1&&split.length>0;i++){limitedSplit.push(split.shift())}if(split.length>0){limitedSplit.push(split.join(delimiter))}}return limitedSplit}}else{throw new Twig.Error("split filter expects value to be a string")}},last:function(value){if(Twig.lib.is("Object",value)){var keys;if(value._keys===undefined){keys=Object.keys(value)}else{keys=value._keys}return value[keys[keys.length-1]]}return value[value.length-1]},raw:function(value){return Twig.Markup(value)},batch:function(items,params){var size=params.shift(),fill=params.shift(),result,last,missing;if(!Twig.lib.is("Array",items)){throw new Twig.Error("batch filter expects items to be an array")}if(!Twig.lib.is("Number",size)){throw new Twig.Error("batch filter expects size to be a number")}size=Math.ceil(size);result=Twig.lib.chunkArray(items,size);if(fill&&items.length%size!=0){last=result.pop();missing=size-last.length;while(missing--){last.push(fill)}result.push(last)}return result},round:function(value,params){params=params||[];var precision=params.length>0?params[0]:0,method=params.length>1?params[1]:"common";value=parseFloat(value);if(precision&&!Twig.lib.is("Number",precision)){throw new Twig.Error("round filter expects precision to be a number")}if(method==="common"){return Twig.lib.round(value,precision)}if(!Twig.lib.is("Function",Math[method])){throw new Twig.Error("round filter expects method to be 'floor', 'ceil', or 'common'")}return Math[method](value*Math.pow(10,precision))/Math.pow(10,precision)}};Twig.filter=function(filter,value,params){if(!Twig.filters[filter]){throw"Unable to find filter "+filter}return Twig.filters[filter].apply(this,[value,params])};Twig.filter.extend=function(filter,definition){Twig.filters[filter]=definition};return Twig}(Twig||{});var Twig=function(Twig){var TEMPLATE_NOT_FOUND_MESSAGE='Template "{name}" is not defined.';function is(type,obj){var clas=Object.prototype.toString.call(obj).slice(8,-1);return obj!==undefined&&obj!==null&&clas===type}Twig.functions={range:function(low,high,step){var matrix=[];var inival,endval,plus;var walker=step||1;var chars=false;if(!isNaN(low)&&!isNaN(high)){inival=parseInt(low,10);endval=parseInt(high,10)}else if(isNaN(low)&&isNaN(high)){chars=true;inival=low.charCodeAt(0);endval=high.charCodeAt(0)}else{inival=isNaN(low)?0:low;endval=isNaN(high)?0:high}plus=inival>endval?false:true;if(plus){while(inival<=endval){matrix.push(chars?String.fromCharCode(inival):inival);inival+=walker}}else{while(inival>=endval){matrix.push(chars?String.fromCharCode(inival):inival);inival-=walker}}return matrix},cycle:function(arr,i){var pos=i%arr.length;return arr[pos]},dump:function(){var EOL="\n",indentChar="  ",indentTimes=0,out="",args=Array.prototype.slice.call(arguments),indent=function(times){var ind="";while(times>0){times--;ind+=indentChar}return ind},displayVar=function(variable){out+=indent(indentTimes);if(typeof variable==="object"){dumpVar(variable)}else if(typeof variable==="function"){out+="function()"+EOL}else if(typeof variable==="string"){out+="string("+variable.length+') "'+variable+'"'+EOL}else if(typeof variable==="number"){out+="number("+variable+")"+EOL}else if(typeof variable==="boolean"){out+="bool("+variable+")"+EOL}},dumpVar=function(variable){var i;if(variable===null){out+="NULL"+EOL}else if(variable===undefined){out+="undefined"+EOL}else if(typeof variable==="object"){out+=indent(indentTimes)+typeof variable;indentTimes++;out+="("+function(obj){var size=0,key;for(key in obj){if(obj.hasOwnProperty(key)){size++}}return size}(variable)+") {"+EOL;for(i in variable){out+=indent(indentTimes)+"["+i+"]=> "+EOL;displayVar(variable[i])}indentTimes--;out+=indent(indentTimes)+"}"+EOL}else{displayVar(variable)}};if(args.length==0)args.push(this.context);Twig.forEach(args,function(variable){dumpVar(variable)});return out},date:function(date,time){var dateObj;if(date===undefined){dateObj=new Date}else if(Twig.lib.is("Date",date)){dateObj=date}else if(Twig.lib.is("String",date)){if(date.match(/^[0-9]+$/)){dateObj=new Date(date*1e3)}else{dateObj=new Date(Twig.lib.strtotime(date)*1e3)}}else if(Twig.lib.is("Number",date)){dateObj=new Date(date*1e3)}else{throw new Twig.Error("Unable to parse date "+date)}return dateObj},block:function(block){if(this.originalBlockTokens[block]){return Twig.logic.parse.apply(this,[this.originalBlockTokens[block],this.context]).output}else{return this.blocks[block]}},parent:function(){return Twig.placeholders.parent},attribute:function(object,method,params){if(Twig.lib.is("Object",object)){if(object.hasOwnProperty(method)){if(typeof object[method]==="function"){return object[method].apply(undefined,params)}else{return object[method]}}}return object[method]||undefined},max:function(values){if(Twig.lib.is("Object",values)){delete values["_keys"];return Twig.lib.max(values)}return Twig.lib.max.apply(null,arguments)},min:function(values){if(Twig.lib.is("Object",values)){delete values["_keys"];return Twig.lib.min(values)}return Twig.lib.min.apply(null,arguments)},template_from_string:function(template){if(template===undefined){template=""}return Twig.Templates.parsers.twig({options:this.options,data:template})},random:function(value){var LIMIT_INT31=2147483648;function getRandomNumber(n){var random=Math.floor(Math.random()*LIMIT_INT31);var limits=[0,n];var min=Math.min.apply(null,limits),max=Math.max.apply(null,limits);return min+Math.floor((max-min+1)*random/LIMIT_INT31)}if(Twig.lib.is("Number",value)){return getRandomNumber(value)}if(Twig.lib.is("String",value)){return value.charAt(getRandomNumber(value.length-1))}if(Twig.lib.is("Array",value)){return value[getRandomNumber(value.length-1)]}if(Twig.lib.is("Object",value)){var keys=Object.keys(value);return value[keys[getRandomNumber(keys.length-1)]]}return getRandomNumber(LIMIT_INT31-1)},source:function(name,ignore_missing){var templateSource;var templateFound=false;var isNodeEnvironment=typeof module!=="undefined"&&typeof module.exports!=="undefined"&&typeof window==="undefined";var loader;var path;if(isNodeEnvironment){loader="fs";path=__dirname+"/"+name}else{loader="ajax";path=name}var params={id:name,path:path,method:loader,parser:"source",async:false,fetchTemplateSource:true};if(typeof ignore_missing==="undefined"){ignore_missing=false}try{templateSource=Twig.Templates.loadRemote(name,params);if(typeof templateSource==="undefined"||templateSource===null){templateSource=""}else{templateFound=true}}catch(e){Twig.log.debug("Twig.functions.source: ","Problem loading template  ",e)}if(!templateFound&&!ignore_missing){return TEMPLATE_NOT_FOUND_MESSAGE.replace("{name}",name)}else{return templateSource}}};Twig._function=function(_function,value,params){if(!Twig.functions[_function]){throw"Unable to find function "+_function}return Twig.functions[_function](value,params)};Twig._function.extend=function(_function,definition){Twig.functions[_function]=definition};return Twig}(Twig||{});var Twig=function(Twig){"use strict";Twig.path={};Twig.path.parsePath=function(template,file){var namespaces=null,file=file||"";if(typeof template==="object"&&typeof template.options==="object"){namespaces=template.options.namespaces}if(typeof namespaces==="object"&&file.indexOf("::")>0||file.indexOf("@")>=0){for(var k in namespaces){if(namespaces.hasOwnProperty(k)){file=file.replace(k+"::",namespaces[k]);file=file.replace("@"+k,namespaces[k])}}return file}return Twig.path.relativePath(template,file)};Twig.path.relativePath=function(template,file){var base,base_path,sep_chr="/",new_path=[],file=file||"",val;if(template.url){if(typeof template.base!=="undefined"){base=template.base+(template.base.charAt(template.base.length-1)==="/"?"":"/")}else{base=template.url}}else if(template.path){var path=__webpack_require__(61),sep=path.sep||sep_chr,relative=new RegExp("^\\.{1,2}"+sep.replace("\\","\\\\"));file=file.replace(/\//g,sep);if(template.base!==undefined&&file.match(relative)==null){file=file.replace(template.base,"");base=template.base+sep}else{base=path.normalize(template.path)}base=base.replace(sep+sep,sep);sep_chr=sep}else if((template.name||template.id)&&template.method&&template.method!=="fs"&&template.method!=="ajax"){base=template.base||template.name||template.id}else{throw new Twig.Error("Cannot extend an inline template.")}base_path=base.split(sep_chr);base_path.pop();base_path=base_path.concat(file.split(sep_chr));while(base_path.length>0){val=base_path.shift();if(val=="."){}else if(val==".."&&new_path.length>0&&new_path[new_path.length-1]!=".."){new_path.pop()}else{new_path.push(val)}}return new_path.join(sep_chr)};return Twig}(Twig||{});var Twig=function(Twig){"use strict";Twig.tests={empty:function(value){if(value===null||value===undefined)return true;if(typeof value==="number")return false;if(value.length&&value.length>0)return false;for(var key in value){if(value.hasOwnProperty(key))return false}return true},odd:function(value){return value%2===1},even:function(value){return value%2===0},divisibleby:function(value,params){return value%params[0]===0},defined:function(value){return value!==undefined},none:function(value){return value===null},"null":function(value){return this.none(value)},sameas:function(value,params){return value===params[0]},iterable:function(value){return value&&(Twig.lib.is("Array",value)||Twig.lib.is("Object",value))}};Twig.test=function(test,value,params){if(!Twig.tests[test]){throw"Test "+test+" is not defined."}return Twig.tests[test](value,params)};Twig.test.extend=function(test,definition){Twig.tests[test]=definition};return Twig}(Twig||{});var Twig=function(Twig){"use strict";Twig.exports={VERSION:Twig.VERSION};Twig.exports.twig=function twig(params){"use strict";var id=params.id,options={strict_variables:params.strict_variables||false,autoescape:params.autoescape!=null&&params.autoescape||false,allowInlineIncludes:params.allowInlineIncludes||false,rethrow:params.rethrow||false,namespaces:params.namespaces};if(Twig.cache&&id){Twig.validateId(id)}if(params.debug!==undefined){Twig.debug=params.debug}if(params.trace!==undefined){Twig.trace=params.trace}if(params.data!==undefined){return Twig.Templates.parsers.twig({data:params.data,path:params.hasOwnProperty("path")?params.path:undefined,module:params.module,id:id,options:options})}else if(params.ref!==undefined){if(params.id!==undefined){throw new Twig.Error("Both ref and id cannot be set on a twig.js template.");
}return Twig.Templates.load(params.ref)}else if(params.method!==undefined){if(!Twig.Templates.isRegisteredLoader(params.method)){throw new Twig.Error('Loader for "'+params.method+'" is not defined.')}return Twig.Templates.loadRemote(params.name||params.href||params.path||id||undefined,{id:id,method:params.method,parser:params.parser||"twig",base:params.base,module:params.module,precompiled:params.precompiled,async:params.async,options:options},params.load,params.error)}else if(params.href!==undefined){return Twig.Templates.loadRemote(params.href,{id:id,method:"ajax",parser:params.parser||"twig",base:params.base,module:params.module,precompiled:params.precompiled,async:params.async,options:options},params.load,params.error)}else if(params.path!==undefined){return Twig.Templates.loadRemote(params.path,{id:id,method:"fs",parser:params.parser||"twig",base:params.base,module:params.module,precompiled:params.precompiled,async:params.async,options:options},params.load,params.error)}};Twig.exports.extendFilter=function(filter,definition){Twig.filter.extend(filter,definition)};Twig.exports.extendFunction=function(fn,definition){Twig._function.extend(fn,definition)};Twig.exports.extendTest=function(test,definition){Twig.test.extend(test,definition)};Twig.exports.extendTag=function(definition){Twig.logic.extend(definition)};Twig.exports.extend=function(fn){fn(Twig)};Twig.exports.compile=function(markup,options){var id=options.filename,path=options.filename,template;template=new Twig.Template({data:markup,path:path,id:id,options:options.settings["twig options"]});return function(context){return template.render(context)}};Twig.exports.renderFile=function(path,options,fn){if(typeof options==="function"){fn=options;options={}}options=options||{};var settings=options.settings||{};var params={path:path,base:settings.views,load:function(template){fn(null,template.render(options))}};var view_options=settings["twig options"];if(view_options){for(var option in view_options){if(view_options.hasOwnProperty(option)){params[option]=view_options[option]}}}Twig.exports.twig(params)};Twig.exports.__express=Twig.exports.renderFile;Twig.exports.cache=function(cache){Twig.cache=cache};Twig.exports.path=Twig.path;return Twig}(Twig||{});var Twig=function(Twig){Twig.compiler={module:{}};Twig.compiler.compile=function(template,options){var tokens=JSON.stringify(template.tokens),id=template.id,output;if(options.module){if(Twig.compiler.module[options.module]===undefined){throw new Twig.Error("Unable to find module type "+options.module)}output=Twig.compiler.module[options.module](id,tokens,options.twig)}else{output=Twig.compiler.wrap(id,tokens)}return output};Twig.compiler.module={amd:function(id,tokens,pathToTwig){return'define(["'+pathToTwig+'"], function (Twig) {\n	var twig, templates;\ntwig = Twig.twig;\ntemplates = '+Twig.compiler.wrap(id,tokens)+"\n	return templates;\n});"},node:function(id,tokens){return'var twig = require("twig").twig;\n'+"exports.template = "+Twig.compiler.wrap(id,tokens)},cjs2:function(id,tokens,pathToTwig){return'module.declare([{ twig: "'+pathToTwig+'" }], function (require, exports, module) {\n'+'	var twig = require("twig").twig;\n'+"	exports.template = "+Twig.compiler.wrap(id,tokens)+"\n});"}};Twig.compiler.wrap=function(id,tokens){return'twig({id:"'+id.replace('"','\\"')+'", data:'+tokens+", precompiled: true});\n"};return Twig}(Twig||{});if(typeof module!=="undefined"&&module.declare){module.declare([],function(require,exports,module){for(key in Twig.exports){if(Twig.exports.hasOwnProperty(key)){exports[key]=Twig.exports[key]}}})}else if(true){!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return Twig.exports}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}else if(typeof module!=="undefined"&&module.exports){module.exports=Twig.exports}else{window.twig=Twig.exports.twig;window.Twig=Twig.exports}
//# sourceMappingURL=twig.min.js.map

/* WEBPACK VAR INJECTION */}.call(exports, "/", __webpack_require__(35)(module)))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*** IMPORTS FROM imports-loader ***/
(function() {

/* Zepto v1.2.0 - zepto event ajax form ie - zeptojs.com/license */
(function(global, factory) {
  if (true)
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return factory(global) }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  else
    factory(global)
}(this, function(window) {
  var Zepto = (function() {
  var undefined, key, $, classList, emptyArray = [], concat = emptyArray.concat, filter = emptyArray.filter, slice = emptyArray.slice,
    document = window.document,
    elementDisplay = {}, classCache = {},
    cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1,'opacity': 1, 'z-index': 1, 'zoom': 1 },
    fragmentRE = /^\s*<(\w+|!)[^>]*>/,
    singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
    rootNodeRE = /^(?:body|html)$/i,
    capitalRE = /([A-Z])/g,

    // special attributes that should be get/set via method calls
    methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],

    adjacencyOperators = [ 'after', 'prepend', 'before', 'append' ],
    table = document.createElement('table'),
    tableRow = document.createElement('tr'),
    containers = {
      'tr': document.createElement('tbody'),
      'tbody': table, 'thead': table, 'tfoot': table,
      'td': tableRow, 'th': tableRow,
      '*': document.createElement('div')
    },
    readyRE = /complete|loaded|interactive/,
    simpleSelectorRE = /^[\w-]*$/,
    class2type = {},
    toString = class2type.toString,
    zepto = {},
    camelize, uniq,
    tempParent = document.createElement('div'),
    propMap = {
      'tabindex': 'tabIndex',
      'readonly': 'readOnly',
      'for': 'htmlFor',
      'class': 'className',
      'maxlength': 'maxLength',
      'cellspacing': 'cellSpacing',
      'cellpadding': 'cellPadding',
      'rowspan': 'rowSpan',
      'colspan': 'colSpan',
      'usemap': 'useMap',
      'frameborder': 'frameBorder',
      'contenteditable': 'contentEditable'
    },
    isArray = Array.isArray ||
      function(object){ return object instanceof Array }

  zepto.matches = function(element, selector) {
    if (!selector || !element || element.nodeType !== 1) return false
    var matchesSelector = element.matches || element.webkitMatchesSelector ||
                          element.mozMatchesSelector || element.oMatchesSelector ||
                          element.matchesSelector
    if (matchesSelector) return matchesSelector.call(element, selector)
    // fall back to performing a selector:
    var match, parent = element.parentNode, temp = !parent
    if (temp) (parent = tempParent).appendChild(element)
    match = ~zepto.qsa(parent, selector).indexOf(element)
    temp && tempParent.removeChild(element)
    return match
  }

  function type(obj) {
    return obj == null ? String(obj) :
      class2type[toString.call(obj)] || "object"
  }

  function isFunction(value) { return type(value) == "function" }
  function isWindow(obj)     { return obj != null && obj == obj.window }
  function isDocument(obj)   { return obj != null && obj.nodeType == obj.DOCUMENT_NODE }
  function isObject(obj)     { return type(obj) == "object" }
  function isPlainObject(obj) {
    return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype
  }

  function likeArray(obj) {
    var length = !!obj && 'length' in obj && obj.length,
      type = $.type(obj)

    return 'function' != type && !isWindow(obj) && (
      'array' == type || length === 0 ||
        (typeof length == 'number' && length > 0 && (length - 1) in obj)
    )
  }

  function compact(array) { return filter.call(array, function(item){ return item != null }) }
  function flatten(array) { return array.length > 0 ? $.fn.concat.apply([], array) : array }
  camelize = function(str){ return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : '' }) }
  function dasherize(str) {
    return str.replace(/::/g, '/')
           .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
           .replace(/([a-z\d])([A-Z])/g, '$1_$2')
           .replace(/_/g, '-')
           .toLowerCase()
  }
  uniq = function(array){ return filter.call(array, function(item, idx){ return array.indexOf(item) == idx }) }

  function classRE(name) {
    return name in classCache ?
      classCache[name] : (classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)'))
  }

  function maybeAddPx(name, value) {
    return (typeof value == "number" && !cssNumber[dasherize(name)]) ? value + "px" : value
  }

  function defaultDisplay(nodeName) {
    var element, display
    if (!elementDisplay[nodeName]) {
      element = document.createElement(nodeName)
      document.body.appendChild(element)
      display = getComputedStyle(element, '').getPropertyValue("display")
      element.parentNode.removeChild(element)
      display == "none" && (display = "block")
      elementDisplay[nodeName] = display
    }
    return elementDisplay[nodeName]
  }

  function children(element) {
    return 'children' in element ?
      slice.call(element.children) :
      $.map(element.childNodes, function(node){ if (node.nodeType == 1) return node })
  }

  function Z(dom, selector) {
    var i, len = dom ? dom.length : 0
    for (i = 0; i < len; i++) this[i] = dom[i]
    this.length = len
    this.selector = selector || ''
  }

  // `$.zepto.fragment` takes a html string and an optional tag name
  // to generate DOM nodes from the given html string.
  // The generated DOM nodes are returned as an array.
  // This function can be overridden in plugins for example to make
  // it compatible with browsers that don't support the DOM fully.
  zepto.fragment = function(html, name, properties) {
    var dom, nodes, container

    // A special case optimization for a single tag
    if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1))

    if (!dom) {
      if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>")
      if (name === undefined) name = fragmentRE.test(html) && RegExp.$1
      if (!(name in containers)) name = '*'

      container = containers[name]
      container.innerHTML = '' + html
      dom = $.each(slice.call(container.childNodes), function(){
        container.removeChild(this)
      })
    }

    if (isPlainObject(properties)) {
      nodes = $(dom)
      $.each(properties, function(key, value) {
        if (methodAttributes.indexOf(key) > -1) nodes[key](value)
        else nodes.attr(key, value)
      })
    }

    return dom
  }

  // `$.zepto.Z` swaps out the prototype of the given `dom` array
  // of nodes with `$.fn` and thus supplying all the Zepto functions
  // to the array. This method can be overridden in plugins.
  zepto.Z = function(dom, selector) {
    return new Z(dom, selector)
  }

  // `$.zepto.isZ` should return `true` if the given object is a Zepto
  // collection. This method can be overridden in plugins.
  zepto.isZ = function(object) {
    return object instanceof zepto.Z
  }

  // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
  // takes a CSS selector and an optional context (and handles various
  // special cases).
  // This method can be overridden in plugins.
  zepto.init = function(selector, context) {
    var dom
    // If nothing given, return an empty Zepto collection
    if (!selector) return zepto.Z()
    // Optimize for string selectors
    else if (typeof selector == 'string') {
      selector = selector.trim()
      // If it's a html fragment, create nodes from it
      // Note: In both Chrome 21 and Firefox 15, DOM error 12
      // is thrown if the fragment doesn't begin with <
      if (selector[0] == '<' && fragmentRE.test(selector))
        dom = zepto.fragment(selector, RegExp.$1, context), selector = null
      // If there's a context, create a collection on that context first, and select
      // nodes from there
      else if (context !== undefined) return $(context).find(selector)
      // If it's a CSS selector, use it to select nodes.
      else dom = zepto.qsa(document, selector)
    }
    // If a function is given, call it when the DOM is ready
    else if (isFunction(selector)) return $(document).ready(selector)
    // If a Zepto collection is given, just return it
    else if (zepto.isZ(selector)) return selector
    else {
      // normalize array if an array of nodes is given
      if (isArray(selector)) dom = compact(selector)
      // Wrap DOM nodes.
      else if (isObject(selector))
        dom = [selector], selector = null
      // If it's a html fragment, create nodes from it
      else if (fragmentRE.test(selector))
        dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null
      // If there's a context, create a collection on that context first, and select
      // nodes from there
      else if (context !== undefined) return $(context).find(selector)
      // And last but no least, if it's a CSS selector, use it to select nodes.
      else dom = zepto.qsa(document, selector)
    }
    // create a new Zepto collection from the nodes found
    return zepto.Z(dom, selector)
  }

  // `$` will be the base `Zepto` object. When calling this
  // function just call `$.zepto.init, which makes the implementation
  // details of selecting nodes and creating Zepto collections
  // patchable in plugins.
  $ = function(selector, context){
    return zepto.init(selector, context)
  }

  function extend(target, source, deep) {
    for (key in source)
      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
        if (isPlainObject(source[key]) && !isPlainObject(target[key]))
          target[key] = {}
        if (isArray(source[key]) && !isArray(target[key]))
          target[key] = []
        extend(target[key], source[key], deep)
      }
      else if (source[key] !== undefined) target[key] = source[key]
  }

  // Copy all but undefined properties from one or more
  // objects to the `target` object.
  $.extend = function(target){
    var deep, args = slice.call(arguments, 1)
    if (typeof target == 'boolean') {
      deep = target
      target = args.shift()
    }
    args.forEach(function(arg){ extend(target, arg, deep) })
    return target
  }

  // `$.zepto.qsa` is Zepto's CSS selector implementation which
  // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
  // This method can be overridden in plugins.
  zepto.qsa = function(element, selector){
    var found,
        maybeID = selector[0] == '#',
        maybeClass = !maybeID && selector[0] == '.',
        nameOnly = maybeID || maybeClass ? selector.slice(1) : selector, // Ensure that a 1 char tag name still gets checked
        isSimple = simpleSelectorRE.test(nameOnly)
    return (element.getElementById && isSimple && maybeID) ? // Safari DocumentFragment doesn't have getElementById
      ( (found = element.getElementById(nameOnly)) ? [found] : [] ) :
      (element.nodeType !== 1 && element.nodeType !== 9 && element.nodeType !== 11) ? [] :
      slice.call(
        isSimple && !maybeID && element.getElementsByClassName ? // DocumentFragment doesn't have getElementsByClassName/TagName
          maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class
          element.getElementsByTagName(selector) : // Or a tag
          element.querySelectorAll(selector) // Or it's not simple, and we need to query all
      )
  }

  function filtered(nodes, selector) {
    return selector == null ? $(nodes) : $(nodes).filter(selector)
  }

  $.contains = document.documentElement.contains ?
    function(parent, node) {
      return parent !== node && parent.contains(node)
    } :
    function(parent, node) {
      while (node && (node = node.parentNode))
        if (node === parent) return true
      return false
    }

  function funcArg(context, arg, idx, payload) {
    return isFunction(arg) ? arg.call(context, idx, payload) : arg
  }

  function setAttribute(node, name, value) {
    value == null ? node.removeAttribute(name) : node.setAttribute(name, value)
  }

  // access className property while respecting SVGAnimatedString
  function className(node, value){
    var klass = node.className || '',
        svg   = klass && klass.baseVal !== undefined

    if (value === undefined) return svg ? klass.baseVal : klass
    svg ? (klass.baseVal = value) : (node.className = value)
  }

  // "true"  => true
  // "false" => false
  // "null"  => null
  // "42"    => 42
  // "42.5"  => 42.5
  // "08"    => "08"
  // JSON    => parse if valid
  // String  => self
  function deserializeValue(value) {
    try {
      return value ?
        value == "true" ||
        ( value == "false" ? false :
          value == "null" ? null :
          +value + "" == value ? +value :
          /^[\[\{]/.test(value) ? $.parseJSON(value) :
          value )
        : value
    } catch(e) {
      return value
    }
  }

  $.type = type
  $.isFunction = isFunction
  $.isWindow = isWindow
  $.isArray = isArray
  $.isPlainObject = isPlainObject

  $.isEmptyObject = function(obj) {
    var name
    for (name in obj) return false
    return true
  }

  $.isNumeric = function(val) {
    var num = Number(val), type = typeof val
    return val != null && type != 'boolean' &&
      (type != 'string' || val.length) &&
      !isNaN(num) && isFinite(num) || false
  }

  $.inArray = function(elem, array, i){
    return emptyArray.indexOf.call(array, elem, i)
  }

  $.camelCase = camelize
  $.trim = function(str) {
    return str == null ? "" : String.prototype.trim.call(str)
  }

  // plugin compatibility
  $.uuid = 0
  $.support = { }
  $.expr = { }
  $.noop = function() {}

  $.map = function(elements, callback){
    var value, values = [], i, key
    if (likeArray(elements))
      for (i = 0; i < elements.length; i++) {
        value = callback(elements[i], i)
        if (value != null) values.push(value)
      }
    else
      for (key in elements) {
        value = callback(elements[key], key)
        if (value != null) values.push(value)
      }
    return flatten(values)
  }

  $.each = function(elements, callback){
    var i, key
    if (likeArray(elements)) {
      for (i = 0; i < elements.length; i++)
        if (callback.call(elements[i], i, elements[i]) === false) return elements
    } else {
      for (key in elements)
        if (callback.call(elements[key], key, elements[key]) === false) return elements
    }

    return elements
  }

  $.grep = function(elements, callback){
    return filter.call(elements, callback)
  }

  if (window.JSON) $.parseJSON = JSON.parse

  // Populate the class2type map
  $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
    class2type[ "[object " + name + "]" ] = name.toLowerCase()
  })

  // Define methods that will be available on all
  // Zepto collections
  $.fn = {
    constructor: zepto.Z,
    length: 0,

    // Because a collection acts like an array
    // copy over these useful array functions.
    forEach: emptyArray.forEach,
    reduce: emptyArray.reduce,
    push: emptyArray.push,
    sort: emptyArray.sort,
    splice: emptyArray.splice,
    indexOf: emptyArray.indexOf,
    concat: function(){
      var i, value, args = []
      for (i = 0; i < arguments.length; i++) {
        value = arguments[i]
        args[i] = zepto.isZ(value) ? value.toArray() : value
      }
      return concat.apply(zepto.isZ(this) ? this.toArray() : this, args)
    },

    // `map` and `slice` in the jQuery API work differently
    // from their array counterparts
    map: function(fn){
      return $($.map(this, function(el, i){ return fn.call(el, i, el) }))
    },
    slice: function(){
      return $(slice.apply(this, arguments))
    },

    ready: function(callback){
      // need to check if document.body exists for IE as that browser reports
      // document ready when it hasn't yet created the body element
      if (readyRE.test(document.readyState) && document.body) callback($)
      else document.addEventListener('DOMContentLoaded', function(){ callback($) }, false)
      return this
    },
    get: function(idx){
      return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length]
    },
    toArray: function(){ return this.get() },
    size: function(){
      return this.length
    },
    remove: function(){
      return this.each(function(){
        if (this.parentNode != null)
          this.parentNode.removeChild(this)
      })
    },
    each: function(callback){
      emptyArray.every.call(this, function(el, idx){
        return callback.call(el, idx, el) !== false
      })
      return this
    },
    filter: function(selector){
      if (isFunction(selector)) return this.not(this.not(selector))
      return $(filter.call(this, function(element){
        return zepto.matches(element, selector)
      }))
    },
    add: function(selector,context){
      return $(uniq(this.concat($(selector,context))))
    },
    is: function(selector){
      return this.length > 0 && zepto.matches(this[0], selector)
    },
    not: function(selector){
      var nodes=[]
      if (isFunction(selector) && selector.call !== undefined)
        this.each(function(idx){
          if (!selector.call(this,idx)) nodes.push(this)
        })
      else {
        var excludes = typeof selector == 'string' ? this.filter(selector) :
          (likeArray(selector) && isFunction(selector.item)) ? slice.call(selector) : $(selector)
        this.forEach(function(el){
          if (excludes.indexOf(el) < 0) nodes.push(el)
        })
      }
      return $(nodes)
    },
    has: function(selector){
      return this.filter(function(){
        return isObject(selector) ?
          $.contains(this, selector) :
          $(this).find(selector).size()
      })
    },
    eq: function(idx){
      return idx === -1 ? this.slice(idx) : this.slice(idx, + idx + 1)
    },
    first: function(){
      var el = this[0]
      return el && !isObject(el) ? el : $(el)
    },
    last: function(){
      var el = this[this.length - 1]
      return el && !isObject(el) ? el : $(el)
    },
    find: function(selector){
      var result, $this = this
      if (!selector) result = $()
      else if (typeof selector == 'object')
        result = $(selector).filter(function(){
          var node = this
          return emptyArray.some.call($this, function(parent){
            return $.contains(parent, node)
          })
        })
      else if (this.length == 1) result = $(zepto.qsa(this[0], selector))
      else result = this.map(function(){ return zepto.qsa(this, selector) })
      return result
    },
    closest: function(selector, context){
      var nodes = [], collection = typeof selector == 'object' && $(selector)
      this.each(function(_, node){
        while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector)))
          node = node !== context && !isDocument(node) && node.parentNode
        if (node && nodes.indexOf(node) < 0) nodes.push(node)
      })
      return $(nodes)
    },
    parents: function(selector){
      var ancestors = [], nodes = this
      while (nodes.length > 0)
        nodes = $.map(nodes, function(node){
          if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
            ancestors.push(node)
            return node
          }
        })
      return filtered(ancestors, selector)
    },
    parent: function(selector){
      return filtered(uniq(this.pluck('parentNode')), selector)
    },
    children: function(selector){
      return filtered(this.map(function(){ return children(this) }), selector)
    },
    contents: function() {
      return this.map(function() { return this.contentDocument || slice.call(this.childNodes) })
    },
    siblings: function(selector){
      return filtered(this.map(function(i, el){
        return filter.call(children(el.parentNode), function(child){ return child!==el })
      }), selector)
    },
    empty: function(){
      return this.each(function(){ this.innerHTML = '' })
    },
    // `pluck` is borrowed from Prototype.js
    pluck: function(property){
      return $.map(this, function(el){ return el[property] })
    },
    show: function(){
      return this.each(function(){
        this.style.display == "none" && (this.style.display = '')
        if (getComputedStyle(this, '').getPropertyValue("display") == "none")
          this.style.display = defaultDisplay(this.nodeName)
      })
    },
    replaceWith: function(newContent){
      return this.before(newContent).remove()
    },
    wrap: function(structure){
      var func = isFunction(structure)
      if (this[0] && !func)
        var dom   = $(structure).get(0),
            clone = dom.parentNode || this.length > 1

      return this.each(function(index){
        $(this).wrapAll(
          func ? structure.call(this, index) :
            clone ? dom.cloneNode(true) : dom
        )
      })
    },
    wrapAll: function(structure){
      if (this[0]) {
        $(this[0]).before(structure = $(structure))
        var children
        // drill down to the inmost element
        while ((children = structure.children()).length) structure = children.first()
        $(structure).append(this)
      }
      return this
    },
    wrapInner: function(structure){
      var func = isFunction(structure)
      return this.each(function(index){
        var self = $(this), contents = self.contents(),
            dom  = func ? structure.call(this, index) : structure
        contents.length ? contents.wrapAll(dom) : self.append(dom)
      })
    },
    unwrap: function(){
      this.parent().each(function(){
        $(this).replaceWith($(this).children())
      })
      return this
    },
    clone: function(){
      return this.map(function(){ return this.cloneNode(true) })
    },
    hide: function(){
      return this.css("display", "none")
    },
    toggle: function(setting){
      return this.each(function(){
        var el = $(this)
        ;(setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide()
      })
    },
    prev: function(selector){ return $(this.pluck('previousElementSibling')).filter(selector || '*') },
    next: function(selector){ return $(this.pluck('nextElementSibling')).filter(selector || '*') },
    html: function(html){
      return 0 in arguments ?
        this.each(function(idx){
          var originHtml = this.innerHTML
          $(this).empty().append( funcArg(this, html, idx, originHtml) )
        }) :
        (0 in this ? this[0].innerHTML : null)
    },
    text: function(text){
      return 0 in arguments ?
        this.each(function(idx){
          var newText = funcArg(this, text, idx, this.textContent)
          this.textContent = newText == null ? '' : ''+newText
        }) :
        (0 in this ? this.pluck('textContent').join("") : null)
    },
    attr: function(name, value){
      var result
      return (typeof name == 'string' && !(1 in arguments)) ?
        (0 in this && this[0].nodeType == 1 && (result = this[0].getAttribute(name)) != null ? result : undefined) :
        this.each(function(idx){
          if (this.nodeType !== 1) return
          if (isObject(name)) for (key in name) setAttribute(this, key, name[key])
          else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)))
        })
    },
    removeAttr: function(name){
      return this.each(function(){ this.nodeType === 1 && name.split(' ').forEach(function(attribute){
        setAttribute(this, attribute)
      }, this)})
    },
    prop: function(name, value){
      name = propMap[name] || name
      return (1 in arguments) ?
        this.each(function(idx){
          this[name] = funcArg(this, value, idx, this[name])
        }) :
        (this[0] && this[0][name])
    },
    removeProp: function(name){
      name = propMap[name] || name
      return this.each(function(){ delete this[name] })
    },
    data: function(name, value){
      var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase()

      var data = (1 in arguments) ?
        this.attr(attrName, value) :
        this.attr(attrName)

      return data !== null ? deserializeValue(data) : undefined
    },
    val: function(value){
      if (0 in arguments) {
        if (value == null) value = ""
        return this.each(function(idx){
          this.value = funcArg(this, value, idx, this.value)
        })
      } else {
        return this[0] && (this[0].multiple ?
           $(this[0]).find('option').filter(function(){ return this.selected }).pluck('value') :
           this[0].value)
      }
    },
    offset: function(coordinates){
      if (coordinates) return this.each(function(index){
        var $this = $(this),
            coords = funcArg(this, coordinates, index, $this.offset()),
            parentOffset = $this.offsetParent().offset(),
            props = {
              top:  coords.top  - parentOffset.top,
              left: coords.left - parentOffset.left
            }

        if ($this.css('position') == 'static') props['position'] = 'relative'
        $this.css(props)
      })
      if (!this.length) return null
      if (document.documentElement !== this[0] && !$.contains(document.documentElement, this[0]))
        return {top: 0, left: 0}
      var obj = this[0].getBoundingClientRect()
      return {
        left: obj.left + window.pageXOffset,
        top: obj.top + window.pageYOffset,
        width: Math.round(obj.width),
        height: Math.round(obj.height)
      }
    },
    css: function(property, value){
      if (arguments.length < 2) {
        var element = this[0]
        if (typeof property == 'string') {
          if (!element) return
          return element.style[camelize(property)] || getComputedStyle(element, '').getPropertyValue(property)
        } else if (isArray(property)) {
          if (!element) return
          var props = {}
          var computedStyle = getComputedStyle(element, '')
          $.each(property, function(_, prop){
            props[prop] = (element.style[camelize(prop)] || computedStyle.getPropertyValue(prop))
          })
          return props
        }
      }

      var css = ''
      if (type(property) == 'string') {
        if (!value && value !== 0)
          this.each(function(){ this.style.removeProperty(dasherize(property)) })
        else
          css = dasherize(property) + ":" + maybeAddPx(property, value)
      } else {
        for (key in property)
          if (!property[key] && property[key] !== 0)
            this.each(function(){ this.style.removeProperty(dasherize(key)) })
          else
            css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';'
      }

      return this.each(function(){ this.style.cssText += ';' + css })
    },
    index: function(element){
      return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0])
    },
    hasClass: function(name){
      if (!name) return false
      return emptyArray.some.call(this, function(el){
        return this.test(className(el))
      }, classRE(name))
    },
    addClass: function(name){
      if (!name) return this
      return this.each(function(idx){
        if (!('className' in this)) return
        classList = []
        var cls = className(this), newName = funcArg(this, name, idx, cls)
        newName.split(/\s+/g).forEach(function(klass){
          if (!$(this).hasClass(klass)) classList.push(klass)
        }, this)
        classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "))
      })
    },
    removeClass: function(name){
      return this.each(function(idx){
        if (!('className' in this)) return
        if (name === undefined) return className(this, '')
        classList = className(this)
        funcArg(this, name, idx, classList).split(/\s+/g).forEach(function(klass){
          classList = classList.replace(classRE(klass), " ")
        })
        className(this, classList.trim())
      })
    },
    toggleClass: function(name, when){
      if (!name) return this
      return this.each(function(idx){
        var $this = $(this), names = funcArg(this, name, idx, className(this))
        names.split(/\s+/g).forEach(function(klass){
          (when === undefined ? !$this.hasClass(klass) : when) ?
            $this.addClass(klass) : $this.removeClass(klass)
        })
      })
    },
    scrollTop: function(value){
      if (!this.length) return
      var hasScrollTop = 'scrollTop' in this[0]
      if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset
      return this.each(hasScrollTop ?
        function(){ this.scrollTop = value } :
        function(){ this.scrollTo(this.scrollX, value) })
    },
    scrollLeft: function(value){
      if (!this.length) return
      var hasScrollLeft = 'scrollLeft' in this[0]
      if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset
      return this.each(hasScrollLeft ?
        function(){ this.scrollLeft = value } :
        function(){ this.scrollTo(value, this.scrollY) })
    },
    position: function() {
      if (!this.length) return

      var elem = this[0],
        // Get *real* offsetParent
        offsetParent = this.offsetParent(),
        // Get correct offsets
        offset       = this.offset(),
        parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset()

      // Subtract element margins
      // note: when an element has margin: auto the offsetLeft and marginLeft
      // are the same in Safari causing offset.left to incorrectly be 0
      offset.top  -= parseFloat( $(elem).css('margin-top') ) || 0
      offset.left -= parseFloat( $(elem).css('margin-left') ) || 0

      // Add offsetParent borders
      parentOffset.top  += parseFloat( $(offsetParent[0]).css('border-top-width') ) || 0
      parentOffset.left += parseFloat( $(offsetParent[0]).css('border-left-width') ) || 0

      // Subtract the two offsets
      return {
        top:  offset.top  - parentOffset.top,
        left: offset.left - parentOffset.left
      }
    },
    offsetParent: function() {
      return this.map(function(){
        var parent = this.offsetParent || document.body
        while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static")
          parent = parent.offsetParent
        return parent
      })
    }
  }

  // for now
  $.fn.detach = $.fn.remove

  // Generate the `width` and `height` functions
  ;['width', 'height'].forEach(function(dimension){
    var dimensionProperty =
      dimension.replace(/./, function(m){ return m[0].toUpperCase() })

    $.fn[dimension] = function(value){
      var offset, el = this[0]
      if (value === undefined) return isWindow(el) ? el['inner' + dimensionProperty] :
        isDocument(el) ? el.documentElement['scroll' + dimensionProperty] :
        (offset = this.offset()) && offset[dimension]
      else return this.each(function(idx){
        el = $(this)
        el.css(dimension, funcArg(this, value, idx, el[dimension]()))
      })
    }
  })

  function traverseNode(node, fun) {
    fun(node)
    for (var i = 0, len = node.childNodes.length; i < len; i++)
      traverseNode(node.childNodes[i], fun)
  }

  // Generate the `after`, `prepend`, `before`, `append`,
  // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
  adjacencyOperators.forEach(function(operator, operatorIndex) {
    var inside = operatorIndex % 2 //=> prepend, append

    $.fn[operator] = function(){
      // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
      var argType, nodes = $.map(arguments, function(arg) {
            var arr = []
            argType = type(arg)
            if (argType == "array") {
              arg.forEach(function(el) {
                if (el.nodeType !== undefined) return arr.push(el)
                else if ($.zepto.isZ(el)) return arr = arr.concat(el.get())
                arr = arr.concat(zepto.fragment(el))
              })
              return arr
            }
            return argType == "object" || arg == null ?
              arg : zepto.fragment(arg)
          }),
          parent, copyByClone = this.length > 1
      if (nodes.length < 1) return this

      return this.each(function(_, target){
        parent = inside ? target : target.parentNode

        // convert all methods to a "before" operation
        target = operatorIndex == 0 ? target.nextSibling :
                 operatorIndex == 1 ? target.firstChild :
                 operatorIndex == 2 ? target :
                 null

        var parentInDocument = $.contains(document.documentElement, parent)

        nodes.forEach(function(node){
          if (copyByClone) node = node.cloneNode(true)
          else if (!parent) return $(node).remove()

          parent.insertBefore(node, target)
          if (parentInDocument) traverseNode(node, function(el){
            if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' &&
               (!el.type || el.type === 'text/javascript') && !el.src){
              var target = el.ownerDocument ? el.ownerDocument.defaultView : window
              target['eval'].call(target, el.innerHTML)
            }
          })
        })
      })
    }

    // after    => insertAfter
    // prepend  => prependTo
    // before   => insertBefore
    // append   => appendTo
    $.fn[inside ? operator+'To' : 'insert'+(operatorIndex ? 'Before' : 'After')] = function(html){
      $(html)[operator](this)
      return this
    }
  })

  zepto.Z.prototype = Z.prototype = $.fn

  // Export internal API functions in the `$.zepto` namespace
  zepto.uniq = uniq
  zepto.deserializeValue = deserializeValue
  $.zepto = zepto

  return $
})()

window.Zepto = Zepto
window.$ === undefined && (window.$ = Zepto)

;(function($){
  var _zid = 1, undefined,
      slice = Array.prototype.slice,
      isFunction = $.isFunction,
      isString = function(obj){ return typeof obj == 'string' },
      handlers = {},
      specialEvents={},
      focusinSupported = 'onfocusin' in window,
      focus = { focus: 'focusin', blur: 'focusout' },
      hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' }

  specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents'

  function zid(element) {
    return element._zid || (element._zid = _zid++)
  }
  function findHandlers(element, event, fn, selector) {
    event = parse(event)
    if (event.ns) var matcher = matcherFor(event.ns)
    return (handlers[zid(element)] || []).filter(function(handler) {
      return handler
        && (!event.e  || handler.e == event.e)
        && (!event.ns || matcher.test(handler.ns))
        && (!fn       || zid(handler.fn) === zid(fn))
        && (!selector || handler.sel == selector)
    })
  }
  function parse(event) {
    var parts = ('' + event).split('.')
    return {e: parts[0], ns: parts.slice(1).sort().join(' ')}
  }
  function matcherFor(ns) {
    return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)')
  }

  function eventCapture(handler, captureSetting) {
    return handler.del &&
      (!focusinSupported && (handler.e in focus)) ||
      !!captureSetting
  }

  function realEvent(type) {
    return hover[type] || (focusinSupported && focus[type]) || type
  }

  function add(element, events, fn, data, selector, delegator, capture){
    var id = zid(element), set = (handlers[id] || (handlers[id] = []))
    events.split(/\s/).forEach(function(event){
      if (event == 'ready') return $(document).ready(fn)
      var handler   = parse(event)
      handler.fn    = fn
      handler.sel   = selector
      // emulate mouseenter, mouseleave
      if (handler.e in hover) fn = function(e){
        var related = e.relatedTarget
        if (!related || (related !== this && !$.contains(this, related)))
          return handler.fn.apply(this, arguments)
      }
      handler.del   = delegator
      var callback  = delegator || fn
      handler.proxy = function(e){
        e = compatible(e)
        if (e.isImmediatePropagationStopped()) return
        e.data = data
        var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args))
        if (result === false) e.preventDefault(), e.stopPropagation()
        return result
      }
      handler.i = set.length
      set.push(handler)
      if ('addEventListener' in element)
        element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
    })
  }
  function remove(element, events, fn, selector, capture){
    var id = zid(element)
    ;(events || '').split(/\s/).forEach(function(event){
      findHandlers(element, event, fn, selector).forEach(function(handler){
        delete handlers[id][handler.i]
      if ('removeEventListener' in element)
        element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
      })
    })
  }

  $.event = { add: add, remove: remove }

  $.proxy = function(fn, context) {
    var args = (2 in arguments) && slice.call(arguments, 2)
    if (isFunction(fn)) {
      var proxyFn = function(){ return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments) }
      proxyFn._zid = zid(fn)
      return proxyFn
    } else if (isString(context)) {
      if (args) {
        args.unshift(fn[context], fn)
        return $.proxy.apply(null, args)
      } else {
        return $.proxy(fn[context], fn)
      }
    } else {
      throw new TypeError("expected function")
    }
  }

  $.fn.bind = function(event, data, callback){
    return this.on(event, data, callback)
  }
  $.fn.unbind = function(event, callback){
    return this.off(event, callback)
  }
  $.fn.one = function(event, selector, data, callback){
    return this.on(event, selector, data, callback, 1)
  }

  var returnTrue = function(){return true},
      returnFalse = function(){return false},
      ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
      eventMethods = {
        preventDefault: 'isDefaultPrevented',
        stopImmediatePropagation: 'isImmediatePropagationStopped',
        stopPropagation: 'isPropagationStopped'
      }

  function compatible(event, source) {
    if (source || !event.isDefaultPrevented) {
      source || (source = event)

      $.each(eventMethods, function(name, predicate) {
        var sourceMethod = source[name]
        event[name] = function(){
          this[predicate] = returnTrue
          return sourceMethod && sourceMethod.apply(source, arguments)
        }
        event[predicate] = returnFalse
      })

      event.timeStamp || (event.timeStamp = Date.now())

      if (source.defaultPrevented !== undefined ? source.defaultPrevented :
          'returnValue' in source ? source.returnValue === false :
          source.getPreventDefault && source.getPreventDefault())
        event.isDefaultPrevented = returnTrue
    }
    return event
  }

  function createProxy(event) {
    var key, proxy = { originalEvent: event }
    for (key in event)
      if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key]

    return compatible(proxy, event)
  }

  $.fn.delegate = function(selector, event, callback){
    return this.on(event, selector, callback)
  }
  $.fn.undelegate = function(selector, event, callback){
    return this.off(event, selector, callback)
  }

  $.fn.live = function(event, callback){
    $(document.body).delegate(this.selector, event, callback)
    return this
  }
  $.fn.die = function(event, callback){
    $(document.body).undelegate(this.selector, event, callback)
    return this
  }

  $.fn.on = function(event, selector, data, callback, one){
    var autoRemove, delegator, $this = this
    if (event && !isString(event)) {
      $.each(event, function(type, fn){
        $this.on(type, selector, data, fn, one)
      })
      return $this
    }

    if (!isString(selector) && !isFunction(callback) && callback !== false)
      callback = data, data = selector, selector = undefined
    if (callback === undefined || data === false)
      callback = data, data = undefined

    if (callback === false) callback = returnFalse

    return $this.each(function(_, element){
      if (one) autoRemove = function(e){
        remove(element, e.type, callback)
        return callback.apply(this, arguments)
      }

      if (selector) delegator = function(e){
        var evt, match = $(e.target).closest(selector, element).get(0)
        if (match && match !== element) {
          evt = $.extend(createProxy(e), {currentTarget: match, liveFired: element})
          return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)))
        }
      }

      add(element, event, callback, data, selector, delegator || autoRemove)
    })
  }
  $.fn.off = function(event, selector, callback){
    var $this = this
    if (event && !isString(event)) {
      $.each(event, function(type, fn){
        $this.off(type, selector, fn)
      })
      return $this
    }

    if (!isString(selector) && !isFunction(callback) && callback !== false)
      callback = selector, selector = undefined

    if (callback === false) callback = returnFalse

    return $this.each(function(){
      remove(this, event, callback, selector)
    })
  }

  $.fn.trigger = function(event, args){
    event = (isString(event) || $.isPlainObject(event)) ? $.Event(event) : compatible(event)
    event._args = args
    return this.each(function(){
      // handle focus(), blur() by calling them directly
      if (event.type in focus && typeof this[event.type] == "function") this[event.type]()
      // items in the collection might not be DOM elements
      else if ('dispatchEvent' in this) this.dispatchEvent(event)
      else $(this).triggerHandler(event, args)
    })
  }

  // triggers event handlers on current element just as if an event occurred,
  // doesn't trigger an actual event, doesn't bubble
  $.fn.triggerHandler = function(event, args){
    var e, result
    this.each(function(i, element){
      e = createProxy(isString(event) ? $.Event(event) : event)
      e._args = args
      e.target = element
      $.each(findHandlers(element, event.type || event), function(i, handler){
        result = handler.proxy(e)
        if (e.isImmediatePropagationStopped()) return false
      })
    })
    return result
  }

  // shortcut methods for `.bind(event, fn)` for each event type
  ;('focusin focusout focus blur load resize scroll unload click dblclick '+
  'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave '+
  'change select keydown keypress keyup error').split(' ').forEach(function(event) {
    $.fn[event] = function(callback) {
      return (0 in arguments) ?
        this.bind(event, callback) :
        this.trigger(event)
    }
  })

  $.Event = function(type, props) {
    if (!isString(type)) props = type, type = props.type
    var event = document.createEvent(specialEvents[type] || 'Events'), bubbles = true
    if (props) for (var name in props) (name == 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name])
    event.initEvent(type, bubbles, true)
    return compatible(event)
  }

})(Zepto)

;(function($){
  var jsonpID = +new Date(),
      document = window.document,
      key,
      name,
      rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      scriptTypeRE = /^(?:text|application)\/javascript/i,
      xmlTypeRE = /^(?:text|application)\/xml/i,
      jsonType = 'application/json',
      htmlType = 'text/html',
      blankRE = /^\s*$/,
      originAnchor = document.createElement('a')

  originAnchor.href = window.location.href

  // trigger a custom event and return false if it was cancelled
  function triggerAndReturn(context, eventName, data) {
    var event = $.Event(eventName)
    $(context).trigger(event, data)
    return !event.isDefaultPrevented()
  }

  // trigger an Ajax "global" event
  function triggerGlobal(settings, context, eventName, data) {
    if (settings.global) return triggerAndReturn(context || document, eventName, data)
  }

  // Number of active Ajax requests
  $.active = 0

  function ajaxStart(settings) {
    if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart')
  }
  function ajaxStop(settings) {
    if (settings.global && !(--$.active)) triggerGlobal(settings, null, 'ajaxStop')
  }

  // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
  function ajaxBeforeSend(xhr, settings) {
    var context = settings.context
    if (settings.beforeSend.call(context, xhr, settings) === false ||
        triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false)
      return false

    triggerGlobal(settings, context, 'ajaxSend', [xhr, settings])
  }
  function ajaxSuccess(data, xhr, settings, deferred) {
    var context = settings.context, status = 'success'
    settings.success.call(context, data, status, xhr)
    if (deferred) deferred.resolveWith(context, [data, status, xhr])
    triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data])
    ajaxComplete(status, xhr, settings)
  }
  // type: "timeout", "error", "abort", "parsererror"
  function ajaxError(error, type, xhr, settings, deferred) {
    var context = settings.context
    settings.error.call(context, xhr, type, error)
    if (deferred) deferred.rejectWith(context, [xhr, type, error])
    triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error || type])
    ajaxComplete(type, xhr, settings)
  }
  // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
  function ajaxComplete(status, xhr, settings) {
    var context = settings.context
    settings.complete.call(context, xhr, status)
    triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings])
    ajaxStop(settings)
  }

  function ajaxDataFilter(data, type, settings) {
    if (settings.dataFilter == empty) return data
    var context = settings.context
    return settings.dataFilter.call(context, data, type)
  }

  // Empty function, used as default callback
  function empty() {}

  $.ajaxJSONP = function(options, deferred){
    if (!('type' in options)) return $.ajax(options)

    var _callbackName = options.jsonpCallback,
      callbackName = ($.isFunction(_callbackName) ?
        _callbackName() : _callbackName) || ('Zepto' + (jsonpID++)),
      script = document.createElement('script'),
      originalCallback = window[callbackName],
      responseData,
      abort = function(errorType) {
        $(script).triggerHandler('error', errorType || 'abort')
      },
      xhr = { abort: abort }, abortTimeout

    if (deferred) deferred.promise(xhr)

    $(script).on('load error', function(e, errorType){
      clearTimeout(abortTimeout)
      $(script).off().remove()

      if (e.type == 'error' || !responseData) {
        ajaxError(null, errorType || 'error', xhr, options, deferred)
      } else {
        ajaxSuccess(responseData[0], xhr, options, deferred)
      }

      window[callbackName] = originalCallback
      if (responseData && $.isFunction(originalCallback))
        originalCallback(responseData[0])

      originalCallback = responseData = undefined
    })

    if (ajaxBeforeSend(xhr, options) === false) {
      abort('abort')
      return xhr
    }

    window[callbackName] = function(){
      responseData = arguments
    }

    script.src = options.url.replace(/\?(.+)=\?/, '?$1=' + callbackName)
    document.head.appendChild(script)

    if (options.timeout > 0) abortTimeout = setTimeout(function(){
      abort('timeout')
    }, options.timeout)

    return xhr
  }

  $.ajaxSettings = {
    // Default type of request
    type: 'GET',
    // Callback that is executed before request
    beforeSend: empty,
    // Callback that is executed if the request succeeds
    success: empty,
    // Callback that is executed the the server drops error
    error: empty,
    // Callback that is executed on request complete (both: error and success)
    complete: empty,
    // The context for the callbacks
    context: null,
    // Whether to trigger "global" Ajax events
    global: true,
    // Transport
    xhr: function () {
      return new window.XMLHttpRequest()
    },
    // MIME types mapping
    // IIS returns Javascript as "application/x-javascript"
    accepts: {
      script: 'text/javascript, application/javascript, application/x-javascript',
      json:   jsonType,
      xml:    'application/xml, text/xml',
      html:   htmlType,
      text:   'text/plain'
    },
    // Whether the request is to another domain
    crossDomain: false,
    // Default timeout
    timeout: 0,
    // Whether data should be serialized to string
    processData: true,
    // Whether the browser should be allowed to cache GET responses
    cache: true,
    //Used to handle the raw response data of XMLHttpRequest.
    //This is a pre-filtering function to sanitize the response.
    //The sanitized response should be returned
    dataFilter: empty
  }

  function mimeToDataType(mime) {
    if (mime) mime = mime.split(';', 2)[0]
    return mime && ( mime == htmlType ? 'html' :
      mime == jsonType ? 'json' :
      scriptTypeRE.test(mime) ? 'script' :
      xmlTypeRE.test(mime) && 'xml' ) || 'text'
  }

  function appendQuery(url, query) {
    if (query == '') return url
    return (url + '&' + query).replace(/[&?]{1,2}/, '?')
  }

  // serialize payload and append it to the URL for GET requests
  function serializeData(options) {
    if (options.processData && options.data && $.type(options.data) != "string")
      options.data = $.param(options.data, options.traditional)
    if (options.data && (!options.type || options.type.toUpperCase() == 'GET' || 'jsonp' == options.dataType))
      options.url = appendQuery(options.url, options.data), options.data = undefined
  }

  $.ajax = function(options){
    var settings = $.extend({}, options || {}),
        deferred = $.Deferred && $.Deferred(),
        urlAnchor, hashIndex
    for (key in $.ajaxSettings) if (settings[key] === undefined) settings[key] = $.ajaxSettings[key]

    ajaxStart(settings)

    if (!settings.crossDomain) {
      urlAnchor = document.createElement('a')
      urlAnchor.href = settings.url
      // cleans up URL for .href (IE only), see https://github.com/madrobby/zepto/pull/1049
      urlAnchor.href = urlAnchor.href
      settings.crossDomain = (originAnchor.protocol + '//' + originAnchor.host) !== (urlAnchor.protocol + '//' + urlAnchor.host)
    }

    if (!settings.url) settings.url = window.location.toString()
    if ((hashIndex = settings.url.indexOf('#')) > -1) settings.url = settings.url.slice(0, hashIndex)
    serializeData(settings)

    var dataType = settings.dataType, hasPlaceholder = /\?.+=\?/.test(settings.url)
    if (hasPlaceholder) dataType = 'jsonp'

    if (settings.cache === false || (
         (!options || options.cache !== true) &&
         ('script' == dataType || 'jsonp' == dataType)
        ))
      settings.url = appendQuery(settings.url, '_=' + Date.now())

    if ('jsonp' == dataType) {
      if (!hasPlaceholder)
        settings.url = appendQuery(settings.url,
          settings.jsonp ? (settings.jsonp + '=?') : settings.jsonp === false ? '' : 'callback=?')
      return $.ajaxJSONP(settings, deferred)
    }

    var mime = settings.accepts[dataType],
        headers = { },
        setHeader = function(name, value) { headers[name.toLowerCase()] = [name, value] },
        protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
        xhr = settings.xhr(),
        nativeSetHeader = xhr.setRequestHeader,
        abortTimeout

    if (deferred) deferred.promise(xhr)

    if (!settings.crossDomain) setHeader('X-Requested-With', 'XMLHttpRequest')
    setHeader('Accept', mime || '*/*')
    if (mime = settings.mimeType || mime) {
      if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0]
      xhr.overrideMimeType && xhr.overrideMimeType(mime)
    }
    if (settings.contentType || (settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET'))
      setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded')

    if (settings.headers) for (name in settings.headers) setHeader(name, settings.headers[name])
    xhr.setRequestHeader = setHeader

    xhr.onreadystatechange = function(){
      if (xhr.readyState == 4) {
        xhr.onreadystatechange = empty
        clearTimeout(abortTimeout)
        var result, error = false
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == 'file:')) {
          dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'))

          if (xhr.responseType == 'arraybuffer' || xhr.responseType == 'blob')
            result = xhr.response
          else {
            result = xhr.responseText

            try {
              // http://perfectionkills.com/global-eval-what-are-the-options/
              // sanitize response accordingly if data filter callback provided
              result = ajaxDataFilter(result, dataType, settings)
              if (dataType == 'script')    (1,eval)(result)
              else if (dataType == 'xml')  result = xhr.responseXML
              else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result)
            } catch (e) { error = e }

            if (error) return ajaxError(error, 'parsererror', xhr, settings, deferred)
          }

          ajaxSuccess(result, xhr, settings, deferred)
        } else {
          ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings, deferred)
        }
      }
    }

    if (ajaxBeforeSend(xhr, settings) === false) {
      xhr.abort()
      ajaxError(null, 'abort', xhr, settings, deferred)
      return xhr
    }

    var async = 'async' in settings ? settings.async : true
    xhr.open(settings.type, settings.url, async, settings.username, settings.password)

    if (settings.xhrFields) for (name in settings.xhrFields) xhr[name] = settings.xhrFields[name]

    for (name in headers) nativeSetHeader.apply(xhr, headers[name])

    if (settings.timeout > 0) abortTimeout = setTimeout(function(){
        xhr.onreadystatechange = empty
        xhr.abort()
        ajaxError(null, 'timeout', xhr, settings, deferred)
      }, settings.timeout)

    // avoid sending empty string (#319)
    xhr.send(settings.data ? settings.data : null)
    return xhr
  }

  // handle optional data/success arguments
  function parseArguments(url, data, success, dataType) {
    if ($.isFunction(data)) dataType = success, success = data, data = undefined
    if (!$.isFunction(success)) dataType = success, success = undefined
    return {
      url: url
    , data: data
    , success: success
    , dataType: dataType
    }
  }

  $.get = function(/* url, data, success, dataType */){
    return $.ajax(parseArguments.apply(null, arguments))
  }

  $.post = function(/* url, data, success, dataType */){
    var options = parseArguments.apply(null, arguments)
    options.type = 'POST'
    return $.ajax(options)
  }

  $.getJSON = function(/* url, data, success */){
    var options = parseArguments.apply(null, arguments)
    options.dataType = 'json'
    return $.ajax(options)
  }

  $.fn.load = function(url, data, success){
    if (!this.length) return this
    var self = this, parts = url.split(/\s/), selector,
        options = parseArguments(url, data, success),
        callback = options.success
    if (parts.length > 1) options.url = parts[0], selector = parts[1]
    options.success = function(response){
      self.html(selector ?
        $('<div>').html(response.replace(rscript, "")).find(selector)
        : response)
      callback && callback.apply(self, arguments)
    }
    $.ajax(options)
    return this
  }

  var escape = encodeURIComponent

  function serialize(params, obj, traditional, scope){
    var type, array = $.isArray(obj), hash = $.isPlainObject(obj)
    $.each(obj, function(key, value) {
      type = $.type(value)
      if (scope) key = traditional ? scope :
        scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']'
      // handle data in serializeArray() format
      if (!scope && array) params.add(value.name, value.value)
      // recurse into nested objects
      else if (type == "array" || (!traditional && type == "object"))
        serialize(params, value, traditional, key)
      else params.add(key, value)
    })
  }

  $.param = function(obj, traditional){
    var params = []
    params.add = function(key, value) {
      if ($.isFunction(value)) value = value()
      if (value == null) value = ""
      this.push(escape(key) + '=' + escape(value))
    }
    serialize(params, obj, traditional)
    return params.join('&').replace(/%20/g, '+')
  }
})(Zepto)

;(function($){
  $.fn.serializeArray = function() {
    var name, type, result = [],
      add = function(value) {
        if (value.forEach) return value.forEach(add)
        result.push({ name: name, value: value })
      }
    if (this[0]) $.each(this[0].elements, function(_, field){
      type = field.type, name = field.name
      if (name && field.nodeName.toLowerCase() != 'fieldset' &&
        !field.disabled && type != 'submit' && type != 'reset' && type != 'button' && type != 'file' &&
        ((type != 'radio' && type != 'checkbox') || field.checked))
          add($(field).val())
    })
    return result
  }

  $.fn.serialize = function(){
    var result = []
    this.serializeArray().forEach(function(elm){
      result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value))
    })
    return result.join('&')
  }

  $.fn.submit = function(callback) {
    if (0 in arguments) this.bind('submit', callback)
    else if (this.length) {
      var event = $.Event('submit')
      this.eq(0).trigger(event)
      if (!event.isDefaultPrevented()) this.get(0).submit()
    }
    return this
  }

})(Zepto)

;(function(){
  // getComputedStyle shouldn't freak out when called
  // without a valid element as argument
  try {
    getComputedStyle(undefined)
  } catch(e) {
    var nativeGetComputedStyle = getComputedStyle
    window.getComputedStyle = function(element, pseudoElement){
      try {
        return nativeGetComputedStyle(element, pseudoElement)
      } catch(e) {
        return null
      }
    }
  }
})()
  return Zepto
}))

}.call(window));

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return __WEBPACK_IMPORTED_MODULE_0__createStore__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return __WEBPACK_IMPORTED_MODULE_1__combineReducers__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return __WEBPACK_IMPORTED_MODULE_4__compose__["a"]; });







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if ("development" !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  Object(__WEBPACK_IMPORTED_MODULE_5__utils_warning__["a" /* default */])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* harmony export (immutable) */ __webpack_exports__["b"] = createStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_symbol_observable__);



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = observable, _ref2;
}

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(75);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) || Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) != objectTag) {
    return false;
  }
  var proto = Object(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["a"] = (isPlainObject);


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(69);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports =  __webpack_require__(84);



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ('redux-responsive/CALCULATE_RESPONSIVE_STATE');

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calculateResponsiveState__ = __webpack_require__(87);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__calculateResponsiveState__["a"]; });



/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CALCULATE_RESPONSIVE_STATE__ = __webpack_require__(39);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__CALCULATE_RESPONSIVE_STATE__["a"]; });



/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// ACTION
var NAVIGATION = exports.NAVIGATION = 'NAVIGATION';
var SET_ROUTES = exports.SET_ROUTES = 'SET_ROUTES';
var SET_META = exports.SET_META = 'SET_META';
var SET_ANIMATING = exports.SET_ANIMATING = 'SET_ANIMATING';
var SET_PAGE = exports.SET_PAGE = 'SET_PAGE';
var SET_OLDPAGE = exports.SET_OLDPAGE = 'SET_OLDPAGE';

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(97),
    shortOut = __webpack_require__(45);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(20),
    getRawTag = __webpack_require__(102),
    objectToString = __webpack_require__(103);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 45 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(17),
    metaMap = __webpack_require__(47);

/**
 * The base implementation of `setData` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var baseSetData = !metaMap ? identity : function(func, data) {
  metaMap.set(func, data);
  return func;
};

module.exports = baseSetData;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var WeakMap = __webpack_require__(109);

/** Used to store function metadata. */
var metaMap = WeakMap && new WeakMap;

module.exports = metaMap;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var composeArgs = __webpack_require__(49),
    composeArgsRight = __webpack_require__(50),
    countHolders = __webpack_require__(112),
    createCtor = __webpack_require__(7),
    createRecurry = __webpack_require__(51),
    getHolder = __webpack_require__(24),
    reorder = __webpack_require__(128),
    replaceHolders = __webpack_require__(9),
    root = __webpack_require__(1);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_ARY_FLAG = 128,
    WRAP_FLIP_FLAG = 512;

/**
 * Creates a function that wraps `func` to invoke it with optional `this`
 * binding of `thisArg`, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided
 *  to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & WRAP_ARY_FLAG,
      isBind = bitmask & WRAP_BIND_FLAG,
      isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
      isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
      isFlip = bitmask & WRAP_FLIP_FLAG,
      Ctor = isBindKey ? undefined : createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length;

    while (index--) {
      args[index] = arguments[index];
    }
    if (isCurried) {
      var placeholder = getHolder(wrapper),
          holdersCount = countHolders(args, placeholder);
    }
    if (partials) {
      args = composeArgs(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = replaceHolders(args, placeholder);
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, thisArg,
        args, newHolders, argPos, ary, arity - length
      );
    }
    var thisBinding = isBind ? thisArg : this,
        fn = isBindKey ? thisBinding[func] : func;

    length = args.length;
    if (argPos) {
      args = reorder(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary < length) {
      args.length = ary;
    }
    if (this && this !== root && this instanceof wrapper) {
      fn = Ctor || createCtor(fn);
    }
    return fn.apply(thisBinding, args);
  }
  return wrapper;
}

module.exports = createHybrid;


/***/ }),
/* 49 */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgs(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersLength = holders.length,
      leftIndex = -1,
      leftLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(leftLength + rangeLength),
      isUncurried = !isCurried;

  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
  }
  while (rangeLength--) {
    result[leftIndex++] = args[argsIndex++];
  }
  return result;
}

module.exports = composeArgs;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgsRight(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersIndex = -1,
      holdersLength = holders.length,
      rightIndex = -1,
      rightLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(rangeLength + rightLength),
      isUncurried = !isCurried;

  while (++argsIndex < rangeLength) {
    result[argsIndex] = args[argsIndex];
  }
  var offset = argsIndex;
  while (++rightIndex < rightLength) {
    result[offset + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[offset + holders[holdersIndex]] = args[argsIndex++];
    }
  }
  return result;
}

module.exports = composeArgsRight;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var isLaziable = __webpack_require__(113),
    setData = __webpack_require__(56),
    setWrapToString = __webpack_require__(57);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_BOUND_FLAG = 4,
    WRAP_CURRY_FLAG = 8,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64;

/**
 * Creates a function that wraps `func` to continue currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {Function} wrapFunc The function to create the `func` wrapper.
 * @param {*} placeholder The placeholder value.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
  var isCurry = bitmask & WRAP_CURRY_FLAG,
      newHolders = isCurry ? holders : undefined,
      newHoldersRight = isCurry ? undefined : holders,
      newPartials = isCurry ? partials : undefined,
      newPartialsRight = isCurry ? undefined : partials;

  bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
  bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

  if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
    bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
  }
  var newData = [
    func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
    newHoldersRight, argPos, ary, arity
  ];

  var result = wrapFunc.apply(undefined, newData);
  if (isLaziable(func)) {
    setData(result, newData);
  }
  result.placeholder = placeholder;
  return setWrapToString(result, func, bitmask);
}

module.exports = createRecurry;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var metaMap = __webpack_require__(47),
    noop = __webpack_require__(114);

/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */
var getData = !metaMap ? noop : function(func) {
  return metaMap.get(func);
};

module.exports = getData;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(21),
    baseLodash = __webpack_require__(23);

/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */
function LodashWrapper(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = undefined;
}

LodashWrapper.prototype = baseCreate(baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;

module.exports = LodashWrapper;


/***/ }),
/* 54 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 55 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetData = __webpack_require__(46),
    shortOut = __webpack_require__(45);

/**
 * Sets metadata for `func`.
 *
 * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
 * period of time, it will trip its breaker and transition to an identity
 * function to avoid garbage collection pauses in V8. See
 * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
 * for more details.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var setData = shortOut(baseSetData);

module.exports = setData;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var getWrapDetails = __webpack_require__(119),
    insertWrapDetails = __webpack_require__(120),
    setToString = __webpack_require__(43),
    updateWrapDetails = __webpack_require__(121);

/**
 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
 * with wrapper details in a comment at the top of the source body.
 *
 * @private
 * @param {Function} wrapper The function to modify.
 * @param {Function} reference The reference function.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Function} Returns `wrapper`.
 */
function setWrapToString(wrapper, reference, bitmask) {
  var source = (reference + '');
  return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
}

module.exports = setWrapToString;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(162);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getValue = __webpack_require__(167).get

function defaultCompare (a, b) {
  return a === b
}

function watch (getState, objectPath, compare) {
  compare = compare || defaultCompare
  var currentValue = getValue(getState(), objectPath)
  return function w (fn) {
    return function () {
      var newValue = getValue(getState(), objectPath)
      if (!compare(currentValue, newValue)) {
        var oldValue = currentValue
        currentValue = newValue
        fn(newValue, oldValue, objectPath)
      }
    }
  }
}

module.exports = watch


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _container = __webpack_require__(5);

var _container2 = _interopRequireDefault(_container);

var _store = __webpack_require__(0);

var _store2 = _interopRequireDefault(_store);

var _actions = __webpack_require__(15);

var _config = __webpack_require__(177);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Constants
// import {END_POINT} from 'constants/api';
// import {BAR_LOADER} from 'containers/loader/constants';

// Utils
// import {loadJSON} from 'utils/load';

// Actions


// Config


/**
 * PageContainer: Defines a page container
 * @extends AbstractContainer
 * @constructor
 */
var PageContainer = function (_AbstractContainer) {
	_inherits(PageContainer, _AbstractContainer);

	function PageContainer(options) {
		_classCallCheck(this, PageContainer);

		return _possibleConstructorReturn(this, (PageContainer.__proto__ || Object.getPrototypeOf(PageContainer)).call(this, options));

		// this.watchers = {
		//     'loader.isShown': this._isLoaderShown
		// };
	}

	// to override if needed


	_createClass(PageContainer, [{
		key: 'fetchData',
		value: function fetchData() {
			var _this2 = this;

			// console.log('PAge:fetchData');
			var endPoint = this.options.endPoint;

			if (!endPoint) {
				this.promises.data.resolve();
				return;
			}

			// this.promises.data.resolve();
			$.ajax({
				type: 'GET',
				dataType: 'json',
				url: _config.JSON_ENDPOINTS + this.options.endPoint,
				success: function success(data) {
					_this2.data = data;
					_this2.promises.data.resolve();
				},
				error: function error(xhr, type) {
					_this2.promises.data.reject();
				}
			});
		}
	}, {
		key: 'loadAssets',
		value: function loadAssets() {
			this.promises.data.resolve();
		}
	}, {
		key: 'initData',
		value: function initData() {
			_store2.default.dispatch((0, _actions.setMeta)(this.data.meta));
		}
	}, {
		key: 'onInit',
		value: function onInit() {
			_get(PageContainer.prototype.__proto__ || Object.getPrototypeOf(PageContainer.prototype), 'onInit', this).call(this);
		}
	}]);

	return PageContainer;
}(_container2.default);

exports.default = PageContainer;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)))

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// import is from 'is_js';


var _zepto = __webpack_require__(29);

var _zepto2 = _interopRequireDefault(_zepto);

var _is = __webpack_require__(63);

var _router = __webpack_require__(64);

var _App = __webpack_require__(91);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import {configureAnalytics} from 'utils/analytics';

var Entry = function () {
	function Entry() {
		_classCallCheck(this, Entry);

		console.log('--- APP ---');
		console.log('\n\n\n');
		this.app = null;
		// configureAnalytics();
	}

	_createClass(Entry, [{
		key: 'init',
		value: function init() {
			var _this = this;

			console.log('init');

			var router = (0, _router.configureRoute)();
			this.app = new _App2.default();
			// custom Detectizr setup
			var root = (0, _zepto2.default)('html');

			console.log('isMobile', (0, _is.isMobile)());
			console.log('isMobile', (0, _is.isTablet)());

			(0, _is.isMobile)() && root.addClass('isMobile');
			(0, _is.isTablet)() && root.addClass('isTablet');

			console.log('initRouter Done');

			(0, _router.initRouter)().then(function () {
				_this.app.init().then(function () {
					console.log('init then');
					router.start();
				});
			});
		}
	}]);

	return Entry;
}();

// initialize the APP do not make a global reference to it.


var entry = module.exports = new Entry();
(0, _zepto2.default)(document).ready(function () {
	return entry.init();
});

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// all micro checking go there

// is a given value window?
// setInterval method is only available for window object
var iswindowObject = function iswindowObject(value) {
	return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && 'setInterval' in value;
};

var freeSelf = iswindowObject((typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self) && self;

// store navigator properties to use later
var navigator = freeSelf && freeSelf.navigator;
var appVersion = (navigator && navigator.appVersion || '').toLowerCase();
var userAgent = (navigator && navigator.userAgent || '').toLowerCase();
// let vendor = (navigator && navigator.vendor || '').toLowerCase();

// MOBILE
/* -------------------------------------------------------------------------- */

var isMobile = function isMobile() {
	return isIphone() || isIpod() || isAndroidPhone() || isBlackberry() || isWindowsPhone();
};

var isIphone = function isIphone(range) {
	// avoid false positive for Facebook in-app browser on ipad;
	// original iphone doesn't have the OS portion of the UA
	var match = isIpad() ? null : userAgent.match(/iphone(?:.+?os (\d+))?/);
	return match !== null && compareVersion(match[1] || 1, range);
};

var isIpod = function isIpod(range) {
	var match = userAgent.match(/ipod.+?os (\d+)/);
	return match !== null && compareVersion(match[1], range);
};

var isAndroidPhone = function isAndroidPhone() {
	return (/android/.test(userAgent) && /mobile/.test(userAgent)
	);
};

var isBlackberry = function isBlackberry() {
	return (/blackberry/.test(userAgent) || /bb10/.test(userAgent)
	);
};

var isWindowsPhone = function isWindowsPhone() {
	return isWindows() && /phone/.test(userAgent);
};

var isWindows = function isWindows() {
	return (/win/.test(appVersion)
	);
};

// TABLET
/* -------------------------------------------------------------------------- */

// is current device tablet?
var isTablet = function isTablet() {
	return isIpad() || isAndroidTablet() || isWindowsTablet();
};

var isIpad = function isIpad(range) {
	var match = userAgent.match(/ipad.+?os (\d+)/);
	return match !== null && compareVersion(match[1], range);
};

var isAndroidTablet = function isAndroidTablet() {
	return (/android/.test(userAgent) && !/mobile/.test(userAgent)
	);
};

var isWindowsTablet = function isWindowsTablet() {
	return isWindows() && !isWindowsPhone() && /touch/.test(userAgent);
};

// is current device supports touch?
var isTouchDevice = function isTouchDevice() {
	return !!document && ('ontouchstart' in freeSelf || 'DocumentTouch' in freeSelf && document instanceof DocumentTouch);
};

// BROWSERS
/* -------------------------------------------------------------------------- */

var isDesktop = function isDesktop() {
	return !isMobile() && !isTablet();
};

var isIE = function isIE(range) {
	var match = userAgent.match(/(?:msie |trident.+?; rv:)(\d+)/);
	return match !== null && compareVersion(match[1], range);
};

var isChrome = function isChrome(range) {
	var match = /google inc/.test(vendor) ? userAgent.match(/(?:chrome|crios)\/(\d+)/) : null;
	return match !== null && is.not.opera() && compareVersion(match[1], range);
};

// is current browser edge?
var isEdge = function isEdge(range) {
	var match = userAgent.match(/edge\/(\d+)/);
	return match !== null && compareVersion(match[1], range);
};

var isFirefox = function isFirefox(range) {
	var match = userAgent.match(/(?:firefox|fxios)\/(\d+)/);
	return match !== null && compareVersion(match[1], range);
};

var isSafari = function isSafari(range) {
	var match = userAgent.match(/version\/(\d+).+?safari/);
	return match !== null && compareVersion(match[1], range);
};

// helper function which compares a version to a range
function compareVersion(version, range) {
	var string = range + '';
	var n = +(string.match(/\d+/) || NaN);
	var op = string.match(/^[<>]=?|/)[0];
	return comparator[op] ? comparator[op](version, n) : version == n || n !== n;
}

// build a 'comparator' object for various comparison checks
var comparator = {
	'<': function _(a, b) {
		return a < b;
	},
	'<=': function _(a, b) {
		return a <= b;
	},
	'>': function _(a, b) {
		return a > b;
	},
	'>=': function _(a, b) {
		return a >= b;
	}
};

module.exports = { isMobile: isMobile, isTablet: isTablet, isDesktop: isDesktop, isTouchDevice: isTouchDevice };

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.initRouter = initRouter;
exports.configureRoute = configureRoute;

var _page = __webpack_require__(65);

var _page2 = _interopRequireDefault(_page);

var _store = __webpack_require__(0);

var _store2 = _interopRequireDefault(_store);

var _routes = __webpack_require__(90);

var _routes2 = _interopRequireDefault(_routes);

var _actions = __webpack_require__(15);

var _locations = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Utils
// import {loadJSON} from 'utils/load';
// import qs from 'utils/query-string';

// import {setHotspotsList} from 'containers/experience/actions';

// Actions
var preRouting = function preRouting(ctx, next) {
	// // If there's a query string
	// ctx.query = qs.parse(window.location.search.slice(1));

	// store.dispatch(setQuery(ctx.query));

	// // store current hash. Only set if not null to not remove it dureing a redirection
	// if (ctx.hash) store.dispatch(setHash(ctx.hash));

	next();
};
// import {setLoaderData} from 'containers/loader/actions';
// import {setSidebarData} from 'containers/sidebar/actions';
// import {setFooterData} from 'containers/footer/actions';
// import {setModalsData} from 'containers/modal/actions';
// import {setListCities, setCurrentCity} from 'actions/cities';

// Selectors
// import {getRoute} from 'containers/app/selectors';

// Constants
// import {JSON_DIR, SET_END_POINT, SET_SEARCH_END_POINT} from 'constants/api';
// import {LIST_CITIES} from 'constants/cities';

var routesFn = {
	ROOT: function ROOT(ctx) {
		// Roots redirect to the current lang
		// const lang = store.getState().get('app').get('lang');
		// page('/');
		// store.dispatch(navigate(HOMEPAGE, ctx.params));
	},
	HOMEPAGE: function HOMEPAGE(ctx) {
		console.log('index navigate');
		_store2.default.dispatch((0, _actions.navigate)(_locations.HOMEPAGE, ctx.params));
	},
	ABOUT: function ABOUT(ctx) {
		console.log('about navigate');
		_store2.default.dispatch((0, _actions.navigate)(_locations.ABOUT, ctx.params));
	},
	// PARADE_DETAIL: (ctx) => {
	// 	// set current city
	// 	// store.dispatch(setCurrentCity(ctx.params.id));
	// 	// console.log('ctx.params', ctx.params);
	// 	store.dispatch(navigate(PARADE_DETAIL, ctx.params));
	// },
	// PARADE_EXPERIENCE_HOTSPOT: (ctx) => {
	// 	// set current city
	// 	// store.dispatch(setCurrentCity(ctx.params.id));
	// 	// console.log('ctx.params', ctx.params);
	// 	store.dispatch(navigate(PARADE_EXPERIENCE_HOTSPOT, ctx.params));
	// },
	NOT_FOUND: function NOT_FOUND(ctx) {
		console.log('404!');
		_store2.default.dispatch((0, _actions.navigate)(_locations.NOT_FOUND, ctx.params));
	}
};

function initRouter() {

	return new Promise(function (resolve, reject) {

		// // store.dispatch(setRoutes(data.routes));
		_store2.default.dispatch((0, _actions.setRoutes)(_routes2.default));

		//  // Set Cities
		// store.dispatch(setListCities(LIST_CITIES));
		// store.dispatch(setCurrentCity(data.global.current_city));

		// // Set Globals
		// store.dispatch(setLoaderData(data.global.loader));
		// store.dispatch(setSidebarData(data.global.sidebar));
		// store.dispatch(setFooterData(data.global.footer));
		// store.dispatch(setModalsData(data.global.modals));
		// store.dispatch(setUIData(data.global.ui));
		// store.dispatch(setMeta(data.global.default.meta, true));

		// Setup routes dynamically

		var _loop = function _loop(key) {

			if (!_routes2.default.hasOwnProperty(key)) return 'continue';
			var route = _routes2.default[key];

			(0, _page2.default)(route.url, preRouting, function (ctx) {
				routesFn[route.id](ctx);
			});
		};

		for (var key in _routes2.default) {
			var _ret = _loop(key);

			if (_ret === 'continue') continue;
		}

		// // Roots redirect to the current lang
		(0, _page2.default)('/', preRouting, routesFn.ROOT);

		// 404
		(0, _page2.default)('*', preRouting, routesFn.NOT_FOUND);
		resolve();
	});
}

function configureRoute() {
	var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	if (options.base) _page2.default.base(options.base);
	return _page2.default;
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {  /* globals require, module */

  

  /**
   * Module dependencies.
   */

  var pathtoRegexp = __webpack_require__(66);

  /**
   * Module exports.
   */

  module.exports = page;

  /**
   * Detect click event
   */
  var clickEvent = ('undefined' !== typeof document) && document.ontouchstart ? 'touchstart' : 'click';

  /**
   * To work properly with the URL
   * history.location generated polyfill in https://github.com/devote/HTML5-History-API
   */

  var location = ('undefined' !== typeof window) && (window.history.location || window.location);

  /**
   * Perform initial dispatch.
   */

  var dispatch = true;


  /**
   * Decode URL components (query string, pathname, hash).
   * Accommodates both regular percent encoding and x-www-form-urlencoded format.
   */
  var decodeURLComponents = true;

  /**
   * Base path.
   */

  var base = '';

  /**
   * Running flag.
   */

  var running;

  /**
   * HashBang option
   */

  var hashbang = false;

  /**
   * Previous context, for capturing
   * page exit events.
   */

  var prevContext;

  /**
   * Register `path` with callback `fn()`,
   * or route `path`, or redirection,
   * or `page.start()`.
   *
   *   page(fn);
   *   page('*', fn);
   *   page('/user/:id', load, user);
   *   page('/user/' + user.id, { some: 'thing' });
   *   page('/user/' + user.id);
   *   page('/from', '/to')
   *   page();
   *
   * @param {string|!Function|!Object} path
   * @param {Function=} fn
   * @api public
   */

  function page(path, fn) {
    // <callback>
    if ('function' === typeof path) {
      return page('*', path);
    }

    // route <path> to <callback ...>
    if ('function' === typeof fn) {
      var route = new Route(/** @type {string} */ (path));
      for (var i = 1; i < arguments.length; ++i) {
        page.callbacks.push(route.middleware(arguments[i]));
      }
      // show <path> with [state]
    } else if ('string' === typeof path) {
      page['string' === typeof fn ? 'redirect' : 'show'](path, fn);
      // start [options]
    } else {
      page.start(path);
    }
  }

  /**
   * Callback functions.
   */

  page.callbacks = [];
  page.exits = [];

  /**
   * Current path being processed
   * @type {string}
   */
  page.current = '';

  /**
   * Number of pages navigated to.
   * @type {number}
   *
   *     page.len == 0;
   *     page('/login');
   *     page.len == 1;
   */

  page.len = 0;

  /**
   * Get or set basepath to `path`.
   *
   * @param {string} path
   * @api public
   */

  page.base = function(path) {
    if (0 === arguments.length) return base;
    base = path;
  };

  /**
   * Bind with the given `options`.
   *
   * Options:
   *
   *    - `click` bind to click events [true]
   *    - `popstate` bind to popstate [true]
   *    - `dispatch` perform initial dispatch [true]
   *
   * @param {Object} options
   * @api public
   */

  page.start = function(options) {
    options = options || {};
    if (running) return;
    running = true;
    if (false === options.dispatch) dispatch = false;
    if (false === options.decodeURLComponents) decodeURLComponents = false;
    if (false !== options.popstate) window.addEventListener('popstate', onpopstate, false);
    if (false !== options.click) {
      document.addEventListener(clickEvent, onclick, false);
    }
    if (true === options.hashbang) hashbang = true;
    if (!dispatch) return;
    var url = (hashbang && ~location.hash.indexOf('#!')) ? location.hash.substr(2) + location.search : location.pathname + location.search + location.hash;
    page.replace(url, null, true, dispatch);
  };

  /**
   * Unbind click and popstate event handlers.
   *
   * @api public
   */

  page.stop = function() {
    if (!running) return;
    page.current = '';
    page.len = 0;
    running = false;
    document.removeEventListener(clickEvent, onclick, false);
    window.removeEventListener('popstate', onpopstate, false);
  };

  /**
   * Show `path` with optional `state` object.
   *
   * @param {string} path
   * @param {Object=} state
   * @param {boolean=} dispatch
   * @param {boolean=} push
   * @return {!Context}
   * @api public
   */

  page.show = function(path, state, dispatch, push) {
    var ctx = new Context(path, state);
    page.current = ctx.path;
    if (false !== dispatch) page.dispatch(ctx);
    if (false !== ctx.handled && false !== push) ctx.pushState();
    return ctx;
  };

  /**
   * Goes back in the history
   * Back should always let the current route push state and then go back.
   *
   * @param {string} path - fallback path to go back if no more history exists, if undefined defaults to page.base
   * @param {Object=} state
   * @api public
   */

  page.back = function(path, state) {
    if (page.len > 0) {
      // this may need more testing to see if all browsers
      // wait for the next tick to go back in history
      history.back();
      page.len--;
    } else if (path) {
      setTimeout(function() {
        page.show(path, state);
      });
    }else{
      setTimeout(function() {
        page.show(base, state);
      });
    }
  };


  /**
   * Register route to redirect from one path to other
   * or just redirect to another route
   *
   * @param {string} from - if param 'to' is undefined redirects to 'from'
   * @param {string=} to
   * @api public
   */
  page.redirect = function(from, to) {
    // Define route from a path to another
    if ('string' === typeof from && 'string' === typeof to) {
      page(from, function(e) {
        setTimeout(function() {
          page.replace(/** @type {!string} */ (to));
        }, 0);
      });
    }

    // Wait for the push state and replace it with another
    if ('string' === typeof from && 'undefined' === typeof to) {
      setTimeout(function() {
        page.replace(from);
      }, 0);
    }
  };

  /**
   * Replace `path` with optional `state` object.
   *
   * @param {string} path
   * @param {Object=} state
   * @param {boolean=} init
   * @param {boolean=} dispatch
   * @return {!Context}
   * @api public
   */


  page.replace = function(path, state, init, dispatch) {
    var ctx = new Context(path, state);
    page.current = ctx.path;
    ctx.init = init;
    ctx.save(); // save before dispatching, which may redirect
    if (false !== dispatch) page.dispatch(ctx);
    return ctx;
  };

  /**
   * Dispatch the given `ctx`.
   *
   * @param {Context} ctx
   * @api private
   */
  page.dispatch = function(ctx) {
    var prev = prevContext,
      i = 0,
      j = 0;

    prevContext = ctx;

    function nextExit() {
      var fn = page.exits[j++];
      if (!fn) return nextEnter();
      fn(prev, nextExit);
    }

    function nextEnter() {
      var fn = page.callbacks[i++];

      if (ctx.path !== page.current) {
        ctx.handled = false;
        return;
      }
      if (!fn) return unhandled(ctx);
      fn(ctx, nextEnter);
    }

    if (prev) {
      nextExit();
    } else {
      nextEnter();
    }
  };

  /**
   * Unhandled `ctx`. When it's not the initial
   * popstate then redirect. If you wish to handle
   * 404s on your own use `page('*', callback)`.
   *
   * @param {Context} ctx
   * @api private
   */
  function unhandled(ctx) {
    if (ctx.handled) return;
    var current;

    if (hashbang) {
      current = base + location.hash.replace('#!', '');
    } else {
      current = location.pathname + location.search;
    }

    if (current === ctx.canonicalPath) return;
    page.stop();
    ctx.handled = false;
    location.href = ctx.canonicalPath;
  }

  /**
   * Register an exit route on `path` with
   * callback `fn()`, which will be called
   * on the previous context when a new
   * page is visited.
   */
  page.exit = function(path, fn) {
    if (typeof path === 'function') {
      return page.exit('*', path);
    }

    var route = new Route(path);
    for (var i = 1; i < arguments.length; ++i) {
      page.exits.push(route.middleware(arguments[i]));
    }
  };

  /**
   * Remove URL encoding from the given `str`.
   * Accommodates whitespace in both x-www-form-urlencoded
   * and regular percent-encoded form.
   *
   * @param {string} val - URL component to decode
   */
  function decodeURLEncodedURIComponent(val) {
    if (typeof val !== 'string') { return val; }
    return decodeURLComponents ? decodeURIComponent(val.replace(/\+/g, ' ')) : val;
  }

  /**
   * Initialize a new "request" `Context`
   * with the given `path` and optional initial `state`.
   *
   * @constructor
   * @param {string} path
   * @param {Object=} state
   * @api public
   */

  function Context(path, state) {
    if ('/' === path[0] && 0 !== path.indexOf(base)) path = base + (hashbang ? '#!' : '') + path;
    var i = path.indexOf('?');

    this.canonicalPath = path;
    this.path = path.replace(base, '') || '/';
    if (hashbang) this.path = this.path.replace('#!', '') || '/';

    this.title = document.title;
    this.state = state || {};
    this.state.path = path;
    this.querystring = ~i ? decodeURLEncodedURIComponent(path.slice(i + 1)) : '';
    this.pathname = decodeURLEncodedURIComponent(~i ? path.slice(0, i) : path);
    this.params = {};

    // fragment
    this.hash = '';
    if (!hashbang) {
      if (!~this.path.indexOf('#')) return;
      var parts = this.path.split('#');
      this.path = parts[0];
      this.hash = decodeURLEncodedURIComponent(parts[1]) || '';
      this.querystring = this.querystring.split('#')[0];
    }
  }

  /**
   * Expose `Context`.
   */

  page.Context = Context;

  /**
   * Push state.
   *
   * @api private
   */

  Context.prototype.pushState = function() {
    page.len++;
    history.pushState(this.state, this.title, hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
  };

  /**
   * Save the context state.
   *
   * @api public
   */

  Context.prototype.save = function() {
    history.replaceState(this.state, this.title, hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
  };

  /**
   * Initialize `Route` with the given HTTP `path`,
   * and an array of `callbacks` and `options`.
   *
   * Options:
   *
   *   - `sensitive`    enable case-sensitive routes
   *   - `strict`       enable strict matching for trailing slashes
   *
   * @constructor
   * @param {string} path
   * @param {Object=} options
   * @api private
   */

  function Route(path, options) {
    options = options || {};
    this.path = (path === '*') ? '(.*)' : path;
    this.method = 'GET';
    this.regexp = pathtoRegexp(this.path,
      this.keys = [],
      options);
  }

  /**
   * Expose `Route`.
   */

  page.Route = Route;

  /**
   * Return route middleware with
   * the given callback `fn()`.
   *
   * @param {Function} fn
   * @return {Function}
   * @api public
   */

  Route.prototype.middleware = function(fn) {
    var self = this;
    return function(ctx, next) {
      if (self.match(ctx.path, ctx.params)) return fn(ctx, next);
      next();
    };
  };

  /**
   * Check if this route matches `path`, if so
   * populate `params`.
   *
   * @param {string} path
   * @param {Object} params
   * @return {boolean}
   * @api private
   */

  Route.prototype.match = function(path, params) {
    var keys = this.keys,
      qsIndex = path.indexOf('?'),
      pathname = ~qsIndex ? path.slice(0, qsIndex) : path,
      m = this.regexp.exec(decodeURIComponent(pathname));

    if (!m) return false;

    for (var i = 1, len = m.length; i < len; ++i) {
      var key = keys[i - 1];
      var val = decodeURLEncodedURIComponent(m[i]);
      if (val !== undefined || !(hasOwnProperty.call(params, key.name))) {
        params[key.name] = val;
      }
    }

    return true;
  };


  /**
   * Handle "populate" events.
   */

  var onpopstate = (function () {
    var loaded = false;
    if ('undefined' === typeof window) {
      return;
    }
    if (document.readyState === 'complete') {
      loaded = true;
    } else {
      window.addEventListener('load', function() {
        setTimeout(function() {
          loaded = true;
        }, 0);
      });
    }
    return function onpopstate(e) {
      if (!loaded) return;
      if (e.state) {
        var path = e.state.path;
        page.replace(path, e.state);
      } else {
        page.show(location.pathname + location.hash, undefined, undefined, false);
      }
    };
  })();
  /**
   * Handle "click" events.
   */

  function onclick(e) {

    if (1 !== which(e)) return;

    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    if (e.defaultPrevented) return;



    // ensure link
    // use shadow dom when available
    var el = e.path ? e.path[0] : e.target;
    while (el && 'A' !== el.nodeName) el = el.parentNode;
    if (!el || 'A' !== el.nodeName) return;



    // Ignore if tag has
    // 1. "download" attribute
    // 2. rel="external" attribute
    if (el.hasAttribute('download') || el.getAttribute('rel') === 'external') return;

    // ensure non-hash for the same path
    var link = el.getAttribute('href');
    if (!hashbang && el.pathname === location.pathname && (el.hash || '#' === link)) return;



    // Check for mailto: in the href
    if (link && link.indexOf('mailto:') > -1) return;

    // check target
    if (el.target) return;

    // x-origin
    if (!sameOrigin(el.href)) return;



    // rebuild path
    var path = el.pathname + el.search + (el.hash || '');

    // strip leading "/[drive letter]:" on NW.js on Windows
    if (typeof process !== 'undefined' && path.match(/^\/[a-zA-Z]:\//)) {
      path = path.replace(/^\/[a-zA-Z]:\//, '/');
    }

    // same page
    var orig = path;

    if (path.indexOf(base) === 0) {
      path = path.substr(base.length);
    }

    if (hashbang) path = path.replace('#!', '');

    if (base && orig === path) return;

    e.preventDefault();
    page.show(orig);
  }

  /**
   * Event button.
   */

  function which(e) {
    e = e || window.event;
    return null === e.which ? e.button : e.which;
  }

  /**
   * Check if `href` is the same origin.
   */

  function sameOrigin(href) {
    var origin = location.protocol + '//' + location.hostname;
    if (location.port) origin += ':' + location.port;
    return (href && (0 === href.indexOf(origin)));
  }

  page.sameOrigin = sameOrigin;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)))

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(67)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {String} str
 * @return {Array}
 */
function parse (str) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var suffix = res[6]
    var asterisk = res[7]

    var repeat = suffix === '+' || suffix === '*'
    var optional = suffix === '?' || suffix === '*'
    var delimiter = prefix || '/'
    var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?')

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      pattern: escapeGroup(pattern)
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {String}   str
 * @return {Function}
 */
function compile (str) {
  return tokensToFunction(parse(str))
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^' + tokens[i].pattern + '$')
    }
  }

  return function (obj) {
    var path = ''
    var data = obj || {}

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received "' + value + '"')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encodeURIComponent(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = encodeURIComponent(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {String} str
 * @return {String}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {String} group
 * @return {String}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {RegExp} re
 * @param  {Array}  keys
 * @return {RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {String}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {RegExp} path
 * @param  {Array}  keys
 * @return {RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {Array}  path
 * @param  {Array}  keys
 * @param  {Object} options
 * @return {RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {String} path
 * @param  {Array}  keys
 * @param  {Object} options
 * @return {RegExp}
 */
function stringToRegexp (path, keys, options) {
  var tokens = parse(path)
  var re = tokensToRegExp(tokens, options)

  // Attach keys back to the regexp.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] !== 'string') {
      keys.push(tokens[i])
    }
  }

  return attachKeys(re, keys)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {Array}  tokens
 * @param  {Array}  keys
 * @param  {Object} options
 * @return {RegExp}
 */
function tokensToRegExp (tokens, options) {
  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''
  var lastToken = tokens[tokens.length - 1]
  var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken)

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = token.pattern

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (prefix) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithSlash ? '' : '(?=\\/|$)'
  }

  return new RegExp('^' + route, flags(options))
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(String|RegExp|Array)} path
 * @param  {Array}                 [keys]
 * @param  {Object}                [options]
 * @return {RegExp}
 */
function pathToRegexp (path, keys, options) {
  keys = keys || []

  if (!isarray(keys)) {
    options = keys
    keys = []
  } else if (!options) {
    options = {}
  }

  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys, options)
  }

  if (isarray(path)) {
    return arrayToRegexp(path, keys, options)
  }

  return stringToRegexp(path, keys, options)
}


/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(72);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? Object(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value)
    : Object(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (baseGetTag);


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(70);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(34);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (getRawTag);


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["a"] = (objectToString);


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(74);


/** Built-in value references. */
var getPrototype = Object(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = (getPrototype);


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (overArg);


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(77);


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(78);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(35)(module)))

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = combineReducers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__(36);




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!Object(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__["a" /* default */])(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyMiddleware;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(37);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = __WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(31);

var _reduxResponsive = __webpack_require__(14);

var _reducers = __webpack_require__(89);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import experience from 'containers/experience/reducers';
// import cities from './cities';

var rootReducer = (0, _redux.combineReducers)({
	app: _reducers2.default,
	// layout,
	// footer,
	// homepage,
	// loader,
	// gif,
	// ytmodal,
	// gmaps,
	// header,
	// modal,
	// search,
	// minimap,
	// sidebar,
	// cities,
	// experience,
	browser: (0, _reduxResponsive.createResponsiveStateReducer)({
		mobile: 640,
		tablet: 768,
		tabletH: 1024,
		desktop: 1280,
		desktopM: 1440,
		desktopL: 1680,
		desktopXL: 1920
	}, {
		extraFields: function extraFields() {
			return {
				width: window.innerWidth,
				height: window.innerHeight
			};
		}
	})
});

// import layout from 'containers/layout/reducers';
// import loader from 'containers/loader/reducers';
// import footer from 'containers/footer/reducers';
// import homepage from 'containers/homepage/reducers';
// import sidebar from 'containers/sidebar/reducers';
// import header from 'containers/header/reducers';
// import modal from 'containers/modal/reducers';
// import search from 'containers/search-modal/reducers';
// import gif from 'containers/gif-modal/reducers';
// import ytmodal from 'containers/yt-modal/reducers';
// import gmaps from 'containers/parade-detail-gmaps/reducers';
// import minimap from 'containers/mini-map/reducers';
exports.default = rootReducer;

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultBreakpoints */
/* unused harmony export getOrderMap */
/* unused harmony export getLessThan */
/* unused harmony export getIs */
/* unused harmony export getGreaterThan */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mediaquery__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mediaquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mediaquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_types_CALCULATE_RESPONSIVE_STATE__ = __webpack_require__(39);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// third party imports

// local imports


// default breakpoints
var defaultBreakpoints = {
    extraSmall: 480,
    small: 768,
    medium: 992,
    large: 1200
};
// media type to default to when no `window` present
var defaultMediaType = 'infinity';
// orientation to default to when no `window` present
var defaultOrientation = null;

// a lightweight version of lodash.transform
var transform = function transform(obj, f) {
    // a place to mutate
    var internal = {};
    // basically we have to reduce the keys down to an object and pass the k/v pairs to each f
    Object.keys(obj).forEach(function (key) {
        return f(internal, obj[key], key);
    });
    // return the object we've been building up
    return internal;
};

/**
 * Compute a mapping of media type to its ordering where ordering is defined
 * such that large > medium > small.
 * @args (object) breakpoints - the breakpoint object
 */
function getOrderMap(bps) {
    // grab the keys in the appropriate order
    var keys = Object.keys(bps).sort(function (a, b) {
        // get the associated values
        var valueA = bps[a];
        var valueB = bps[b];

        // if a is a number and b is a string
        if (typeof valueA === 'number' && typeof valueB === 'string') {
            // put the number first
            return -1;
        } else if (typeof valueB === 'number' && typeof valueA === 'string') {
            // return the number first
            return 1;
        }

        // otherwise treat it like normal
        return valueA >= valueB ? 1 : -1;
    });

    // map the original breakpoint object
    return transform(bps, function (result, breakpoint, mediaType) {
        // figure out the index of the mediatype
        var index = keys.indexOf(mediaType);

        // if there is an entry in the sort for this
        if (index !== -1) {
            // to its index in the sorted list
            result[mediaType] = index;
        }
    });
}

/**
 * Compute the `lessThan` object based on the browser width.
 * @arg {number} browserWidth - Width of the browser.
 * @arg {object} breakpoints - The breakpoints object.
 * @arg {currentMediaType} breakpoints - The curent media type.
 * @returns {object} The `lessThan` object.  Its keys are the same as the
 * keys of the breakpoints object.  The value for each key indicates whether
 * or not the browser width is less than the breakpoint.
 */
function getLessThan(currentMediaType, breakpointOrder) {
    // get the ordering of the current media type
    var currentOrder = breakpointOrder[currentMediaType];

    return transform(breakpointOrder, function (result, breakpoint, mediaType) {
        // if the breakpoint is a number
        if (typeof breakpoint === 'number' && breakpointOrder[mediaType]) {
            // store wether or not it is less than the breakpoint
            result[mediaType] = currentOrder < breakpointOrder[mediaType];
            // handle non numerical breakpoints specially
        } else {
            result[mediaType] = false;
        }
    });
}

/**
 * Compute the `lessThan` object based on the browser width.
 * @arg {object} breakpoints - The breakpoints object.
 * @arg {currentMediaType} breakpoints - The curent media type.
 * @returns {object} The `lessThan` object.  Its keys are the same as the
 * keys of the breakpoints object.  The value for each key indicates whether
 * or not the browser width is less than the breakpoint.
 */
function getIs(currentMediaType, breakpoints) {
    return transform(breakpoints, function (result, breakpoint, mediaType) {
        // if the breakpoint is a number
        if (typeof breakpoint === 'number' && breakpoints[mediaType]) {
            // store wether or not it is less than the breakpoint
            result[mediaType] = mediaType === currentMediaType;
            // handle non numerical breakpoints specially
        } else {
            result[mediaType] = false;
        }
    });
}

/**
 * Compute the `greaterThan` object based on the browser width.
 * @arg {number} browserWidth - Width of the browser.
 * @arg {object} breakpoints - The breakpoints object.
 * @returns {object} The `greaterThan` object.  Its keys are the same as the
 * keys of the breakpoints object.  The value for each key indicates whether
 * or not the browser width is greater than the breakpoint.
 */
function getGreaterThan(currentMediaType, breakpointOrder) {
    // get the ordering of the current media type
    var currentOrder = breakpointOrder[currentMediaType];

    return transform(breakpointOrder, function (result, breakpoint, mediaType) {
        // if the breakpoint is a number
        if (typeof breakpoint === 'number') {
            // store wether or not it is less than the breakpoint
            result[mediaType] = currentOrder > breakpointOrder[mediaType];
            // handle non numerical breakpoints specially
        } else {
            result[mediaType] = false;
        }
    });
}

/**
 * Gets the current media type from the global `window`.
 * @arg {object} mediaQueries - The media queries object.
 * @arg {string} infinityMediaType - The infinity media type.
 * @returns {string} The window's current media type.  This is the key of the
 * breakpoint that is the next breakpoint larger than the window.
 */
function getMediaType(matchMedia, mediaQueries, infinityMediaType) {
    // if there's no window
    if (typeof matchMedia === 'undefined') {
        // return the infinity media type
        return infinityMediaType;
    }

    // there is a window, so compute the true media type
    return Object.keys(mediaQueries).reduce(function (result, query) {
        // return the new type if the query matches otherwise the previous one
        return matchMedia(mediaQueries[query]).matches ? query : result;
        // use the infinity media type
    }, infinityMediaType);
}

/**
 * Gets the current media type from the global `window`.
 * @arg {object} mediaQueries - The media queries object.
 * @returns {string} The window's current media type.  This is the key of the
 * breakpoint that is the next breakpoint larger than the window.
 */
function getOrientation(matchMedia) {
    // if there's no window
    if (typeof matchMedia === 'undefined') {
        // return the default
        return defaultOrientation;
    }

    var mediaQueries = {
        portrait: '(orientation: portrait)',
        landscape: '(orientation: landscape)'
    };

    // there is a window, so compute the true orientation
    return Object.keys(mediaQueries).reduce(function (result, query) {
        // return the new type if the query matches otherwise the previous one
        return matchMedia(mediaQueries[query]).matches ? query : result;
        // use the default orientation
    }, defaultOrientation);
}

// export the reducer factory
/* harmony default export */ __webpack_exports__["a"] = (function (breakpoints) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        initialMediaType = _ref.initialMediaType,
        _ref$infinity = _ref.infinity,
        infinity = _ref$infinity === undefined ? defaultMediaType : _ref$infinity,
        _ref$extraFields = _ref.extraFields,
        extraFields = _ref$extraFields === undefined ? function () {
        return {};
    } : _ref$extraFields;

    // accept null values
    if (!breakpoints) {
        breakpoints = defaultBreakpoints; // eslint-disable-line
    }

    // add `infinity` breakpoint for upper bound
    breakpoints[infinity] = Infinity;
    // media queries associated with the breakpoints
    var mediaQueries = __WEBPACK_IMPORTED_MODULE_0_mediaquery___default.a.asObject(breakpoints);
    // figure out the ordering
    var mediaOrdering = getOrderMap(breakpoints);

    // return reducer for handling the responsive state
    return function (state, _ref2) {
        var type = _ref2.type,
            matchMedia = _ref2.matchMedia;

        // if told to recalculate state or state has not yet been initialized
        if (type === __WEBPACK_IMPORTED_MODULE_1__actions_types_CALCULATE_RESPONSIVE_STATE__["a" /* default */] || typeof state === 'undefined') {
            // if the state has never been set before and we have an initial type
            var mediaType = !state && initialMediaType
            // use it
            ? initialMediaType
            // otherwise figure out the media type from the browser
            : getMediaType(matchMedia, mediaQueries, infinity);
            // the current orientation
            var orientation = getOrientation(matchMedia);
            // build the responsive state
            var responsiveState = {
                _responsiveState: true,
                lessThan: getLessThan(mediaType, mediaOrdering),
                greaterThan: getGreaterThan(mediaType, mediaOrdering),
                is: getIs(mediaType, breakpoints),
                mediaType: mediaType,
                orientation: orientation,
                breakpoints: breakpoints
            };

            // return calculated state
            return _extends({}, responsiveState, extraFields(responsiveState));
        }
        // otherwise return the previous state
        return state;
    };
});

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var MQ = {

  asArray: function asArray(obj) {
    var bp = this.getBreakPoints(obj);
    var custom = this.getCustomQueries(obj);

    return this._translate(this._makeSteps(this._toSortedArray(bp)))
      .concat(this._objToArr(custom));
  },

  asObject: function asObject(obj) {
    return this._arrToObj(this.asArray(obj));
  },

  getBreakPoints: function getBreakPoints(obj) {
    return Object.keys(obj).reduce(function (prev, next) {
      if (typeof obj[next] === 'number') {
        prev[next] = obj[next];
      }
      return prev;
    }, {});
  },

  getCustomQueries: function getCustomQueries(obj) {
    return Object.keys(obj).reduce(function (prev, next) {
      if (typeof obj[next] === 'string') {
        prev[next] = obj[next];
      }
      return prev;
    }, {});
  },

  _toSortedArray: function _toSortedArray(obj) {
    return Object.keys(obj).map(function (el) {
      return [el, obj[el]];
    }).sort(function (a, b) {
      return a[1] - b[1];
    });
  },

  _makeSteps: function _makeSteps(arr) {
    return (arr[arr.length - 1][1] === Infinity)?
      arr
      : arr.concat([Infinity]);
  },

  _translate: function _translate(arr) {
    return arr.map(function (el, index) {
      return (index === 0)?
        [el[0], 'screen and (max-width: ' + el[1] + 'px)']
        : (index === arr.length - 1)?
          [(el[0] || 'default'), 'screen and (min-width: ' +
            (arr[index - 1][1] + 1) + 'px)']
          : [el[0], 'screen and (min-width: ' + (arr[index-1][1] + 1) +
            'px) and (max-width: ' + el[1] + 'px)'];
    });
  },

  _objToArr: function _objToArr(obj) {
    return Object.keys(obj).map(function (el) {
      return [el, obj[el]];
    });
  },

  _arrToObj: function _arrToObj(arr) {
    return arr.reduce(function (prev, next) {
      prev[next[0]] = next[1];
      return prev;
    }, {});
  }
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = MQ;
} else {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return MQ;
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  else {
    window.MQ = MQ;
  }
}


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__handlers__ = __webpack_require__(86);
// local imports


/**
 * Creates a store enhancer based off an (optional) throttle time.
 * @arg {object} [options={calculateInitialState}] - Options object.
 * @arg {boolean} [options.calculateInitialState=true] - True if the responsive
 * state must be calculated initially, false otherwise.
 * @returns {function} - The store enhancer (which adds event listeners to
 * dispatch actions on window resize).
 */
/* harmony default export */ __webpack_exports__["a"] = (function () {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$calculateInitial = _ref.calculateInitialState,
        calculateInitialState = _ref$calculateInitial === undefined ? true : _ref$calculateInitial;

    // return the store enhancer (an enhanced version of `createStore`)
    return function (createStore) {
        return function () {
            // create the store
            var store = createStore.apply(undefined, arguments);
            // if there is a `window`
            if (typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined') {
                // add the handlers that only fire when the responsive state changes
                Object(__WEBPACK_IMPORTED_MODULE_0__handlers__["a" /* default */])({ store: store, window: window, calculateInitialState: calculateInitialState });
            }

            // return the store so that the call is transparent
            return store;
        };
    };
});

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mediaquery__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mediaquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mediaquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_creators__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getBreakpoints__ = __webpack_require__(88);
// see: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries

// external imports

// local imports



// this function adds event handlers to the window that only tirgger
// when the responsive state changes
/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
    var store = _ref.store,
        window = _ref.window,
        calculateInitialState = _ref.calculateInitialState;

    // the function to call when calculating the new responsive state
    var refreshResponsiveState = function refreshResponsiveState() {
        return store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions_creators__["a" /* calculateResponsiveState */])(window));
    };

    // get the object of media queries corresponding to the breakpoints in the store
    var mediaQueries = __WEBPACK_IMPORTED_MODULE_0_mediaquery___default.a.asObject(Object(__WEBPACK_IMPORTED_MODULE_2__getBreakpoints__["a" /* default */])(store));

    // for every breakpoint range
    Object.keys(mediaQueries).forEach(function (breakpoint) {
        // create a media query list for the breakpoint
        var mediaQueryList = window.matchMedia(mediaQueries[breakpoint]);

        /* eslint-disable no-loop-func */

        // whenever any of the media query lists status changes
        mediaQueryList.addListener(function (query) {
            // if a new query was matched
            if (query.matches) {
                // recaulate the state
                refreshResponsiveState();
            }
        });
    });

    // make sure we update the responsive state when the browser changes orientation
    window.addEventListener('orientationchange', refreshResponsiveState);

    // if we are supposed to calculate the initial state
    if (calculateInitialState) {
        // then do so
        refreshResponsiveState();
    }
});

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__(41);
// action type


/**
 * Action creator taking window-like object and returning action to calculate
 * responsive state.
 * @arg {object} window - Any window-like object (has keys `innerWidth` and
 * `matchMedia`).
 * @arg {number} window.innerWidth - The value for the browser width (to pass to
 * the responsive state reducer logic).  See browser global `window.innerWidth`.
 * @arg {function} window.matchMedia - The method with which to match media
 * queries (to pass to the responsive sate reducer logic).  See global
 * `window.matchMedia`.
 * @returns {object} The resulting action.  Action will have type
 * `CALCULATE_RESPONSIVE_STATE`, and will be directly given the two keys taken
 * from the `window` argument.
 */
/* harmony default export */ __webpack_exports__["a"] = (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      innerWidth = _ref.innerWidth,
      innerHeight = _ref.innerHeight,
      matchMedia = _ref.matchMedia;

  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["a" /* CALCULATE_RESPONSIVE_STATE */],
    innerWidth: innerWidth,
    innerHeight: innerHeight,
    matchMedia: matchMedia
  };
});

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Returns the value found in obj at path. Delegates to obj.getIn if available.
 * @param obj
 * @param path
 * @returns {*}
 */
function getIn(obj, path) {
    if (obj.getIn) {
        return obj.getIn(path);
    }
    return path.reduce(function (accum, next) {
        return accum[next];
    }, obj);
}

/**
 * Returns all keys of an object. Delegates to either obj.keys or Object.keys.
 * @param obj
 * @returns {*}
 */

function keys(obj) {
    if (obj.keys) {
        return Array.from(obj.keys());
    }
    return Object.keys(obj);
}

/**
 * An implementation of breadth-first search. Looks for marker key in the tree.
 * @param tree
 * @param marker
 * @param [maxDepth]
 * @returns {*}
 */
function findMarker(tree, marker) {
    var maxDepth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;

    var rootPath = [];
    var queue = [rootPath];

    var _loop = function _loop() {
        var currentPath = queue.shift();
        if (currentPath.length > maxDepth) {
            return 'continue';
        }
        var currentObj = getIn(tree, currentPath);
        if (currentObj) {
            if (currentObj[marker]) {
                return {
                    v: currentPath
                };
            }
            queue.push.apply(queue, _toConsumableArray(keys(currentObj).map(function (k) {
                return currentPath.concat(k);
            })));
        }
    };

    while (queue.length > 0) {
        var _ret = _loop();

        switch (_ret) {
            case 'continue':
                continue;

            default:
                if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
        }
    }
    return false;
}

/**
 * Searches through the given redux store and returns the breakpoints found inside.
 * @arg {object} - The redux state.
 * @returns {object} - The breakpoints associated with the responsive state inside the store.
 */
function getBreakpoints(store) {
    // grab the current state of the store
    var storeState = store.getState();

    var responsiveStatePath = findMarker(storeState, '_responsiveState');

    // if we couldn't find a responsive reducer at the root of the project
    if (!responsiveStatePath) {
        throw new Error('Could not find responsive state reducer. ' + 'If you are still running into trouble, please open a ticket on github.');
    }

    // return the breakpoints in the redux store
    return getIn(storeState, responsiveStatePath).breakpoints;
}

/* harmony default export */ __webpack_exports__["a"] = (getBreakpoints);

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.app = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(42);

var InitialState = {
	routes: [],
	params: null,
	location: null,
	isAnimating: false,
	page: null,
	oldPage: null,
	meta: {}
};

// const initialState = new InitialState();

// Updates an entity cache in response to any action with response.entities.
var app = exports.app = function app() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : InitialState;
	var action = arguments[1];

	switch (action.type) {
		case _constants.SET_META:
			{
				// // Set default meta
				// if (action.isDefault) {
				// 	const meta = {};
				// 	meta.default_title = action.meta.title;
				// 	meta.default_description = action.meta.description;

				// 	// state = state.set('meta', fromJS(meta));
				// }

				// let stateMeta = state.get('meta');

				// const defaultTitle = stateMeta.default_title;
				// const defaultDescription = stateMeta.default_description;
				// const title = action.meta && action.meta.title ? action.meta.title : defaultTitle;
				// const description = action.meta && action.meta.description ? action.meta.description : defaultDescription;

				// stateMeta = stateMeta.set('title', title);
				// stateMeta = stateMeta.set('description', description);
				return _extends({}, state, {
					meta: action.meta
				});
			}

		case _constants.SET_ROUTES:
			{
				return Object.assign({}, state, {
					routes: action.routes
				});
			}
		case _constants.NAVIGATION:
			{
				return Object.assign({}, state, {
					params: action.params,
					location: action.location
				});
			}
		case _constants.SET_ANIMATING:
			{
				return _extends({}, state, {
					isAnimating: action.isAnimating
				});
			}
		case _constants.SET_PAGE:
			{
				return _extends({}, state, {
					page: action.page
				});
			}
		case _constants.SET_OLDPAGE:
			{
				return _extends({}, state, {
					oldPage: action.oldPage
				});
			}
		default:
			{
				return state;
			}
	}
};

exports.default = app;

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = {"index":{"id":"HOMEPAGE","url":"/","template":"index","json":"index.json"},"about":{"id":"ABOUT","url":"/about","template":"about","json":"about.json"},"error":{"id":"NOT_FOUND","url":"/error","template":"error","jsonUrl":"error.json"}}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base2 = __webpack_require__(190);

var _Base3 = _interopRequireDefault(_Base2);

var _Layout = __webpack_require__(92);

var _Layout2 = _interopRequireDefault(_Layout);

var _Homepage = __webpack_require__(176);

var _Homepage2 = _interopRequireDefault(_Homepage);

var _About = __webpack_require__(184);

var _About2 = _interopRequireDefault(_About);

var _NotFound = __webpack_require__(187);

var _NotFound2 = _interopRequireDefault(_NotFound);

var _locations = __webpack_require__(4);

var _selectors = __webpack_require__(25);

var _actions = __webpack_require__(15);

var _store = __webpack_require__(0);

var _store2 = _interopRequireDefault(_store);

var _reduxWatch = __webpack_require__(59);

var _reduxWatch2 = _interopRequireDefault(_reduxWatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Abstract


// Containers


// Constants


// Selector


// Actions

// import {showModal} from 'containers/modal/actions';


var App = function (_Base) {
	_inherits(App, _Base);

	function App(options) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, options));

		_this.prevLocation = null;
		_this.location = null;
		_this.layout = null;
		_this.loader = null;
		_this.page = null;
		_this.oldPage = null;

		_this.storeEvents = {
			'app.location': function appLocation(location, prevLocation) {
				return _this.onLocationChanged(location, prevLocation);
			}
		};

		_this.bindStoreEvents();

		return _this;
	}

	_createClass(App, [{
		key: 'init',
		value: function init() {
			this.layout = new _Layout2.default();

			// return layout promise
			return this.layout.init();
		}

		// TODO refactor this into the base component
		// add proper bind undinb store listener

	}, {
		key: 'bindStoreEvents',
		value: function bindStoreEvents() {}

		// let w = watch(store.getState, 'app.location');
		// store.subscribe(w((newVal, oldVal, objectPath) => this.onLocationChanged(newVal, oldVal)));
		// 	console.log('%s changed from %s to %s', objectPath, oldVal, newVal);
		// 	// admin.name changed from JP to JOE
		// }));

		// onIdChanged(id, prevId) {
		// 	const location = this.getState().get('app').get('location');
		// 	if (id !== prevId && id && prevId && this.location === location) {
		// 		this.routing(location, true);
		// 	}
		// }

	}, {
		key: 'onLocationChanged',
		value: function onLocationChanged(location, prevLocation) {

			this.prevLocation = prevLocation;
			if (location !== prevLocation) {
				this.location = location;
				this.routing(location, false);
			}
		}
	}, {
		key: 'routing',
		value: function routing(location) {
			var _this2 = this;

			var fromSamePage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var Page = null;
			console.log('location', location);

			switch (location) {
				case _locations.HOMEPAGE:
					Page = _Homepage2.default;break;
				case _locations.ABOUT:
					Page = _About2.default;break;
				case _locations.NOT_FOUND:
					Page = _NotFound2.default;break;
				default:
					Page = AbstractPageComponent;
			}

			if (Page === null) {
				console.error('Error: page is null');
				return;
			}
			_store2.default.dispatch((0, _actions.setAnimating)(true));

			// First Render from the server
			var el = null;
			if (this.oldPage === null && this.page === null) {
				el = document.getElementsByClassName('page-wrapper')[0];
			}

			var currentRoute = (0, _selectors.getRoute)(location);
			console.log('currentRoute', currentRoute);

			if (this.page) {

				this.oldPage = this.page;
				_store2.default.dispatch((0, _actions.setOldPage)(this.oldPage));
			}

			// Define first page and pass el if the page el is allready in the dom
			this.page = new Page({
				el: el ? el : null,
				endPoint: currentRoute && currentRoute.json ? currentRoute.json : null
			});

			_store2.default.dispatch((0, _actions.setPage)(this.page));

			// Init the next page now

			this.page.init().then(function () {

				console.log('ON PAGE INIT');

				// Resize the current page for position
				// this.page.resize();
				_this2.layout.triggerResize();

				// Meta
				// this.layout.setMeta();

				if (_this2.oldPage) {
					console.log('HIDE OLD PAGE', _this2.oldPage);
					_this2.oldPage.hide().then(function () {
						console.log('OLD PAGE HIDDEN');
						_this2.oldPage.dispose();
						_this2.oldPage = null;
						_this2.showPage();
					});
				} else {
					// TODO : check why it's so long for first page setupdom to start
					_this2.showPage();
				}
			});
		}
	}, {
		key: 'showPage',
		value: function showPage() {
			var _this3 = this;

			// Show next
			this.page.show().then(function () {
				// if (!this.getState().get('app').get('appLoaded')) this.dispatch(setAppLoaded(true));
				console.log('CURRENT PAGE SHOW');

				_store2.default.dispatch((0, _actions.setAnimating)(false));

				// at this point, dispose
				if (_this3.oldPage) {
					console.log('dispose again?');
					_this3.oldPage.dispose();
					_this3.oldPage = null;
				}
			});
		}
	}]);

	return App;
}(_Base3.default);

exports.default = App;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _container = __webpack_require__(5);

var _container2 = _interopRequireDefault(_container);

var _reduxResponsive = __webpack_require__(14);

var _store = __webpack_require__(0);

var _store2 = _interopRequireDefault(_store);

var _Layout = __webpack_require__(93);

var _Layout2 = _interopRequireDefault(_Layout);

var _actions = __webpack_require__(174);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Components


// Actions


var LayoutContainer = function (_AbstractContainer) {
	_inherits(LayoutContainer, _AbstractContainer);

	function LayoutContainer() {
		_classCallCheck(this, LayoutContainer);

		var _this = _possibleConstructorReturn(this, (LayoutContainer.__proto__ || Object.getPrototypeOf(LayoutContainer)).call(this));

		_this.Component = _Layout2.default;

		return _this;
	}

	_createClass(LayoutContainer, [{
		key: 'initActions',
		value: function initActions() {
			var _this2 = this;

			this.options.actions.resize = function () {
				return _this2.resizeAction();
			};
			this.options.actions.scroll = function () {
				return _this2.scrollAction();
			};
		}
	}, {
		key: 'resizeAction',
		value: function resizeAction(wdw) {
			_store2.default.dispatch((0, _reduxResponsive.calculateResponsiveState)(wdw));
		}
	}, {
		key: 'scrollAction',
		value: function scrollAction(scrollObj) {
			_store2.default.dispatch((0, _actions.scroll)(scrollObj));
		}
	}, {
		key: 'triggerResize',
		value: function triggerResize() {
			this._component.triggerResize();
		}
	}, {
		key: 'setMeta',
		value: function setMeta() {
			this._component.setMeta();
		}
	}]);

	return LayoutContainer;
}(_container2.default);

exports.default = LayoutContainer;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _DOMcomponent = __webpack_require__(16);

var _DOMcomponent2 = _interopRequireDefault(_DOMcomponent);

var _store = __webpack_require__(0);

var _store2 = _interopRequireDefault(_store);

var _reduxWatch = __webpack_require__(59);

var _reduxWatch2 = _interopRequireDefault(_reduxWatch);

var _Header = __webpack_require__(168);

var _Header2 = _interopRequireDefault(_Header);

var _zepto = __webpack_require__(29);

var _zepto2 = _interopRequireDefault(_zepto);

var _misc = __webpack_require__(172);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// Containers

// import Footer from 'containers/footer/Footer';
// import Sidebar from 'containers/sidebar/Sidebar';
// import Modal from 'containers/modal/Modal';
// import Experience from 'containers/experience/Experience';
// import RotateScreen from 'components/rotate-screen/RotateScreen';
// import ParadeDetailGMaps from 'containers/parade-detail-gmaps/ParadeDetailGMaps';

// Actions
// import {showSidebar} from 'containers/sidebar/actions';
// import {showHeader} from 'containers/header/actions';
// import {showFooter} from 'containers/footer/actions';

// import {getScriptGmaps} from 'containers/parade-detail-gmaps/actions';

// Constants
// import {NOT_FOUND, PARADE_DETAIL, PARADE_EXPERIENCE_HOTSPOT} from 'constants/locations';

// Utils
// import {trackPage} from 'utils/analytics';


var Layout = function (_DOMComponent) {
	_inherits(Layout, _DOMComponent);

	function Layout(props) {
		_classCallCheck(this, Layout);

		var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));

		_this.scrollTicket = false;

		_this.header = null;

		_this.el = document.documentElement;

		var w = (0, _reduxWatch2.default)(_store2.default.getState, 'app.meta');
		_store2.default.subscribe(w(function (newVal, oldVal, objectPath) {
			return _this.setMeta(newVal, oldVal);
		}));

		var watchLocation = (0, _reduxWatch2.default)(_store2.default.getState, 'app.location');
		_store2.default.subscribe(watchLocation(function (newVal, oldVal, objectPath) {
			return _this.setLocationClass(newVal);
		}));

		return _this;
	}

	_createClass(Layout, [{
		key: 'initDOM',
		value: function initDOM() {
			var scrollObj = {
				x: window.scrollX || window.pageXOffset,
				y: window.scrollY || window.pageYOffset
			};

			this.$content = this.$el.find('#content');
			this.$title = this.$el.find('head > title');

			this.$metaDescription = this.$el.find('head > meta[name=description]');

			// if you need to remove fastclick event of an element
			// just add needsclick as a class
			// const needsClick = FastClick.prototype.needsClick;
			// FastClick.prototype.needsClick = function(target) {
			//     return needsClick.apply(this, arguments);
			// };
			// FastClick.attach(this.el);

			this.actions.scroll(scrollObj);
		}
	}, {
		key: 'onDOMInit',
		value: function onDOMInit() {
			var _this2 = this;

			var aInitPromises = [];

			this.header = new _Header2.default({
				el: document.getElementById('main-nav')
			});
			aInitPromises.push(this.header.init());

			// scroll top
			window.scrollTo(0, 0);

			Promise.all(aInitPromises).then(function () {
				// Load Gmaps script now!
				// this.dispatch(getScriptGmaps());
				_get(Layout.prototype.__proto__ || Object.getPrototypeOf(Layout.prototype), 'onDOMInit', _this2).call(_this2);
			});
		}
	}, {
		key: 'bindEvents',
		value: function bindEvents() {
			var _this3 = this;

			window.addEventListener('orientationchange', (0, _misc.debounce)(function () {
				// this._calcVH();
				_this3.actions.resize(window);
			}, 300), false);

			window.addEventListener('resize', (0, _misc.debounce)(function () {
				// this._calcVH();
				_this3.actions.resize(window);
			}, 300), false);

			window.addEventListener('scroll', function () {
				_this3.scrollTicket = true;
			}, false);

			// Actually, unsubscribe to any this.events to avoid any double trigger because of body
			this.undelegateEvents();
		}
	}, {
		key: 'onUpdate',
		value: function onUpdate() {
			if (this.scrollTicket) {
				this.scrollTicket = false;
				var scrollObj = {
					x: window.scrollX || window.pageXOffset,
					y: window.scrollY || window.pageYOffset
				};
				this.actions.scroll(scrollObj);
			}
		}
	}, {
		key: 'showComponent',
		value: function showComponent() {
			var _this4 = this;

			// if (this.states.isShown) return;
			var location = this.getState().get('app').get('location');

			setTimeout(function () {
				if (location !== NOT_FOUND) _this4.dispatch(showSidebar());
				if (location !== PARADE_DETAIL) _this4.dispatch(showHeader());
				if (location !== PARADE_DETAIL && location !== PARADE_EXPERIENCE_HOTSPOT) _this4.dispatch(showFooter());
				_get(Layout.prototype.__proto__ || Object.getPrototypeOf(Layout.prototype), 'showComponent', _this4).call(_this4);
			}, 0);
		}
	}, {
		key: 'triggerResize',
		value: function triggerResize() {
			(0, _zepto2.default)(window).trigger('resize');
		}
	}, {
		key: 'setMeta',
		value: function setMeta(meta, oldMeta) {

			this.$title.text(meta.title);
			this.$metaDescription.val(meta.description);

			// // Analytics
			// trackPage();
		}
	}, {
		key: 'setLocationClass',
		value: function setLocationClass(location) {
			this.el.setAttribute('location', location);
		}
	}, {
		key: 'resize',
		value: function resize() {
			if (!this.states.isShown) return;
		}
	}]);

	return Layout;
}(_DOMcomponent2.default);

exports.default = Layout;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(95),
    createWrap = __webpack_require__(108),
    getHolder = __webpack_require__(24),
    replaceHolders = __webpack_require__(9);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_PARTIAL_FLAG = 32;

/**
 * Creates a function that invokes `func` with the `this` binding of `thisArg`
 * and `partials` prepended to the arguments it receives.
 *
 * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for partially applied arguments.
 *
 * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
 * property of bound functions.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * function greet(greeting, punctuation) {
 *   return greeting + ' ' + this.user + punctuation;
 * }
 *
 * var object = { 'user': 'fred' };
 *
 * var bound = _.bind(greet, object, 'hi');
 * bound('!');
 * // => 'hi fred!'
 *
 * // Bound with placeholders.
 * var bound = _.bind(greet, object, _, '!');
 * bound('hi');
 * // => 'hi fred!'
 */
var bind = baseRest(function(func, thisArg, partials) {
  var bitmask = WRAP_BIND_FLAG;
  if (partials.length) {
    var holders = replaceHolders(partials, getHolder(bind));
    bitmask |= WRAP_PARTIAL_FLAG;
  }
  return createWrap(func, bitmask, thisArg, partials, holders);
});

// Assign default placeholders.
bind.placeholder = {};

module.exports = bind;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(17),
    overRest = __webpack_require__(96),
    setToString = __webpack_require__(43);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(18);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(98),
    defineProperty = __webpack_require__(99),
    identity = __webpack_require__(17);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 98 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(6);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(19),
    isMasked = __webpack_require__(104),
    isObject = __webpack_require__(3),
    toSource = __webpack_require__(106);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(20);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 103 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(105);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(1);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 106 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 107 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetData = __webpack_require__(46),
    createBind = __webpack_require__(110),
    createCurry = __webpack_require__(111),
    createHybrid = __webpack_require__(48),
    createPartial = __webpack_require__(130),
    getData = __webpack_require__(52),
    mergeData = __webpack_require__(131),
    setData = __webpack_require__(56),
    setWrapToString = __webpack_require__(57),
    toInteger = __webpack_require__(132);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags.
 *    1 - `_.bind`
 *    2 - `_.bindKey`
 *    4 - `_.curry` or `_.curryRight` of a bound function
 *    8 - `_.curry`
 *   16 - `_.curryRight`
 *   32 - `_.partial`
 *   64 - `_.partialRight`
 *  128 - `_.rearg`
 *  256 - `_.ary`
 *  512 - `_.flip`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
  if (!isBindKey && typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
    partials = holders = undefined;
  }
  ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
  arity = arity === undefined ? arity : toInteger(arity);
  length -= holders ? holders.length : 0;

  if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
    var partialsRight = partials,
        holdersRight = holders;

    partials = holders = undefined;
  }
  var data = isBindKey ? undefined : getData(func);

  var newData = [
    func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
    argPos, ary, arity
  ];

  if (data) {
    mergeData(newData, data);
  }
  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] === undefined
    ? (isBindKey ? 0 : func.length)
    : nativeMax(newData[9] - length, 0);

  if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
    bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
  }
  if (!bitmask || bitmask == WRAP_BIND_FLAG) {
    var result = createBind(func, bitmask, thisArg);
  } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
    result = createCurry(func, bitmask, arity);
  } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
    result = createPartial(func, bitmask, thisArg, partials);
  } else {
    result = createHybrid.apply(undefined, newData);
  }
  var setter = data ? baseSetData : setData;
  return setWrapToString(setter(result, newData), func, bitmask);
}

module.exports = createWrap;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(6),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var createCtor = __webpack_require__(7),
    root = __webpack_require__(1);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the optional `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createBind(func, bitmask, thisArg) {
  var isBind = bitmask & WRAP_BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}

module.exports = createBind;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(18),
    createCtor = __webpack_require__(7),
    createHybrid = __webpack_require__(48),
    createRecurry = __webpack_require__(51),
    getHolder = __webpack_require__(24),
    replaceHolders = __webpack_require__(9),
    root = __webpack_require__(1);

/**
 * Creates a function that wraps `func` to enable currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {number} arity The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createCurry(func, bitmask, arity) {
  var Ctor = createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length,
        placeholder = getHolder(wrapper);

    while (index--) {
      args[index] = arguments[index];
    }
    var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
      ? []
      : replaceHolders(args, placeholder);

    length -= holders.length;
    if (length < arity) {
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, undefined,
        args, holders, undefined, undefined, arity - length);
    }
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return apply(fn, this, args);
  }
  return wrapper;
}

module.exports = createCurry;


/***/ }),
/* 112 */
/***/ (function(module, exports) {

/**
 * Gets the number of `placeholder` occurrences in `array`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} placeholder The placeholder to search for.
 * @returns {number} Returns the placeholder count.
 */
function countHolders(array, placeholder) {
  var length = array.length,
      result = 0;

  while (length--) {
    if (array[length] === placeholder) {
      ++result;
    }
  }
  return result;
}

module.exports = countHolders;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(22),
    getData = __webpack_require__(52),
    getFuncName = __webpack_require__(115),
    lodash = __webpack_require__(117);

/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */
function isLaziable(func) {
  var funcName = getFuncName(func),
      other = lodash[funcName];

  if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = getData(other);
  return !!data && func === data[0];
}

module.exports = isLaziable;


/***/ }),
/* 114 */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var realNames = __webpack_require__(116);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */
function getFuncName(func) {
  var result = (func.name + ''),
      array = realNames[result],
      length = hasOwnProperty.call(realNames, result) ? array.length : 0;

  while (length--) {
    var data = array[length],
        otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result;
}

module.exports = getFuncName;


/***/ }),
/* 116 */
/***/ (function(module, exports) {

/** Used to lookup unminified function names. */
var realNames = {};

module.exports = realNames;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(22),
    LodashWrapper = __webpack_require__(53),
    baseLodash = __webpack_require__(23),
    isArray = __webpack_require__(8),
    isObjectLike = __webpack_require__(54),
    wrapperClone = __webpack_require__(118);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array and iteratees accept only
 * one argument. The heuristic for whether a section qualifies for shortcut
 * fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */
function lodash(value) {
  if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
    if (value instanceof LodashWrapper) {
      return value;
    }
    if (hasOwnProperty.call(value, '__wrapped__')) {
      return wrapperClone(value);
    }
  }
  return new LodashWrapper(value);
}

// Ensure wrappers are instances of `baseLodash`.
lodash.prototype = baseLodash.prototype;
lodash.prototype.constructor = lodash;

module.exports = lodash;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(22),
    LodashWrapper = __webpack_require__(53),
    copyArray = __webpack_require__(55);

/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */
function wrapperClone(wrapper) {
  if (wrapper instanceof LazyWrapper) {
    return wrapper.clone();
  }
  var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = copyArray(wrapper.__actions__);
  result.__index__  = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}

module.exports = wrapperClone;


/***/ }),
/* 119 */
/***/ (function(module, exports) {

/** Used to match wrap detail comments. */
var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
    reSplitDetails = /,? & /;

/**
 * Extracts wrapper details from the `source` body comment.
 *
 * @private
 * @param {string} source The source to inspect.
 * @returns {Array} Returns the wrapper details.
 */
function getWrapDetails(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}

module.exports = getWrapDetails;


/***/ }),
/* 120 */
/***/ (function(module, exports) {

/** Used to match wrap detail comments. */
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;

/**
 * Inserts wrapper `details` in a comment at the top of the `source` body.
 *
 * @private
 * @param {string} source The source to modify.
 * @returns {Array} details The details to insert.
 * @returns {string} Returns the modified source.
 */
function insertWrapDetails(source, details) {
  var length = details.length;
  if (!length) {
    return source;
  }
  var lastIndex = length - 1;
  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
  details = details.join(length > 2 ? ', ' : ' ');
  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
}

module.exports = insertWrapDetails;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(122),
    arrayIncludes = __webpack_require__(123);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256,
    WRAP_FLIP_FLAG = 512;

/** Used to associate wrap methods with their bit flags. */
var wrapFlags = [
  ['ary', WRAP_ARY_FLAG],
  ['bind', WRAP_BIND_FLAG],
  ['bindKey', WRAP_BIND_KEY_FLAG],
  ['curry', WRAP_CURRY_FLAG],
  ['curryRight', WRAP_CURRY_RIGHT_FLAG],
  ['flip', WRAP_FLIP_FLAG],
  ['partial', WRAP_PARTIAL_FLAG],
  ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
  ['rearg', WRAP_REARG_FLAG]
];

/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */
function updateWrapDetails(details, bitmask) {
  arrayEach(wrapFlags, function(pair) {
    var value = '_.' + pair[0];
    if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}

module.exports = updateWrapDetails;


/***/ }),
/* 122 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(124);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(125),
    baseIsNaN = __webpack_require__(126),
    strictIndexOf = __webpack_require__(127);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),
/* 125 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 126 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),
/* 127 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var copyArray = __webpack_require__(55),
    isIndex = __webpack_require__(129);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Reorder `array` according to the specified indexes where the element at
 * the first index is assigned as the first element, the element at
 * the second index is assigned as the second element, and so on.
 *
 * @private
 * @param {Array} array The array to reorder.
 * @param {Array} indexes The arranged array indexes.
 * @returns {Array} Returns `array`.
 */
function reorder(array, indexes) {
  var arrLength = array.length,
      length = nativeMin(indexes.length, arrLength),
      oldArray = copyArray(array);

  while (length--) {
    var index = indexes[length];
    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
  }
  return array;
}

module.exports = reorder;


/***/ }),
/* 129 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(18),
    createCtor = __webpack_require__(7),
    root = __webpack_require__(1);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & WRAP_BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}

module.exports = createPartial;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var composeArgs = __webpack_require__(49),
    composeArgsRight = __webpack_require__(50),
    replaceHolders = __webpack_require__(9);

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_BOUND_FLAG = 4,
    WRAP_CURRY_FLAG = 8,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Merges the function metadata of `source` into `data`.
 *
 * Merging metadata reduces the number of wrappers used to invoke a function.
 * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
 * may be applied regardless of execution order. Methods like `_.ary` and
 * `_.rearg` modify function arguments, making the order in which they are
 * executed important, preventing the merging of metadata. However, we make
 * an exception for a safe combined case where curried functions have `_.ary`
 * and or `_.rearg` applied.
 *
 * @private
 * @param {Array} data The destination metadata.
 * @param {Array} source The source metadata.
 * @returns {Array} Returns `data`.
 */
function mergeData(data, source) {
  var bitmask = data[1],
      srcBitmask = source[1],
      newBitmask = bitmask | srcBitmask,
      isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

  var isCombo =
    ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
    ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
    ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

  // Exit early if metadata can't be merged.
  if (!(isCommon || isCombo)) {
    return data;
  }
  // Use source `thisArg` if available.
  if (srcBitmask & WRAP_BIND_FLAG) {
    data[2] = source[2];
    // Set when currying a bound function.
    newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
  }
  // Compose partial arguments.
  var value = source[3];
  if (value) {
    var partials = data[3];
    data[3] = partials ? composeArgs(partials, value, source[4]) : value;
    data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
  }
  // Compose partial right arguments.
  value = source[5];
  if (value) {
    partials = data[5];
    data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
    data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
  }
  // Use source `argPos` if available.
  value = source[7];
  if (value) {
    data[7] = value;
  }
  // Use source `ary` if it's smaller.
  if (srcBitmask & WRAP_ARY_FLAG) {
    data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
  }
  // Use source `arity` if one is not provided.
  if (data[9] == null) {
    data[9] = source[9];
  }
  // Use source `func` and merge bitmasks.
  data[0] = source[0];
  data[1] = newBitmask;

  return data;
}

module.exports = mergeData;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(133);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(134);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3),
    isSymbol = __webpack_require__(10);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(136),
    isFunction = __webpack_require__(19),
    toKey = __webpack_require__(164);

/**
 * This method is like `_.get` except that if the resolved value is a
 * function it's invoked with the `this` binding of its parent object and
 * its result is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to resolve.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
 *
 * _.result(object, 'a[0].b.c1');
 * // => 3
 *
 * _.result(object, 'a[0].b.c2');
 * // => 4
 *
 * _.result(object, 'a[0].b.c3', 'default');
 * // => 'default'
 *
 * _.result(object, 'a[0].b.c3', _.constant('default'));
 * // => 'default'
 */
function result(object, path, defaultValue) {
  path = castPath(path, object);

  var index = -1,
      length = path.length;

  // Ensure the loop is entered when path is empty.
  if (!length) {
    length = 1;
    object = undefined;
  }
  while (++index < length) {
    var value = object == null ? undefined : object[toKey(path[index])];
    if (value === undefined) {
      index = length;
      value = defaultValue;
    }
    object = isFunction(value) ? value.call(object) : value;
  }
  return object;
}

module.exports = result;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(8),
    isKey = __webpack_require__(137),
    stringToPath = __webpack_require__(138),
    toString = __webpack_require__(58);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(8),
    isSymbol = __webpack_require__(10);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(139);

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(140);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(141);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(142),
    mapCacheDelete = __webpack_require__(157),
    mapCacheGet = __webpack_require__(159),
    mapCacheHas = __webpack_require__(160),
    mapCacheSet = __webpack_require__(161);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(143),
    ListCache = __webpack_require__(149),
    Map = __webpack_require__(156);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(144),
    hashDelete = __webpack_require__(145),
    hashGet = __webpack_require__(146),
    hashHas = __webpack_require__(147),
    hashSet = __webpack_require__(148);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(11);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 145 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(11);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(11);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(11);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(150),
    listCacheDelete = __webpack_require__(151),
    listCacheGet = __webpack_require__(153),
    listCacheHas = __webpack_require__(154),
    listCacheSet = __webpack_require__(155);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 150 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(12);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 152 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(12);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(12);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(12);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(6),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(13);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 158 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(13);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(13);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(13);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(20),
    arrayMap = __webpack_require__(163),
    isArray = __webpack_require__(8),
    isSymbol = __webpack_require__(10);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 163 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(10);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__(58);

/** Used to generate unique IDs. */
var idCounter = 0;

/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 * @example
 *
 * _.uniqueId('contact_');
 * // => 'contact_104'
 *
 * _.uniqueId();
 * // => '105'
 */
function uniqueId(prefix) {
  var id = ++idCounter;
  return toString(prefix) + id;
}

module.exports = uniqueId;


/***/ }),
/* 166 */
/***/ (function(module, exports) {

module.exports = {"facebook":"<svg id=\"Blue\" viewBox=\"0 0 266.9 266.9\"><path id=\"Blue_1_\" class=\"st0\" d=\"M252.2 266.9c8.1 0 14.7-6.6 14.7-14.7V14.7c0-8.1-6.6-14.7-14.7-14.7H14.7C6.6 0 0 6.6 0 14.7v237.4c0 8.1 6.6 14.7 14.7 14.7h237.5z\"/><path id=\"f\" class=\"st1\" d=\"M184.2 266.9V163.5h34.7l5.2-40.3h-39.9V97.5c0-11.7 3.2-19.6 20-19.6h21.3v-36c-3.7-.5-16.4-1.6-31.1-1.6-30.8 0-51.8 18.8-51.8 53.2v29.7h-34.8v40.3h34.8v103.4h41.6z\"/></svg>","g-plus":"<svg viewBox=\"0 0 318 202\"><path d=\"M101 81v40s38.8-.1 54.6-.1c-8.6 26-21.9 40.1-54.6 40.1-33.1 0-59-26.9-59-60s25.9-60 59-60c17.5 0 28.8 6.2 39.2 14.7 8.3-8.3 7.6-9.5 28.8-29.5C151 10 127.2 0 101 0 45.2 0 0 45.2 0 101s45.2 101 101 101c83.4 0 103.8-72.6 97-121h-97zm182 2V48h-25v35h-36v25h36v36h25v-36h35V83h-35z\"/></svg>","twitter":"<svg id=\"Logo_FIXED\" data-name=\"Logo — FIXED\" viewBox=\"0 0 400 400\"><defs/><title>Twitter_Logo_Blue</title><path class=\"cls-1\" d=\"M0 0h400v400H0z\"/><path class=\"cls-2\" d=\"M153.62 301.59c94.34 0 145.94-78.16 145.94-145.94 0-2.22 0-4.43-.15-6.63A104.36 104.36 0 0 0 325 122.47a102.38 102.38 0 0 1-29.46 8.07 51.47 51.47 0 0 0 22.55-28.37 102.79 102.79 0 0 1-32.57 12.45 51.34 51.34 0 0 0-87.41 46.78A145.62 145.62 0 0 1 92.4 107.81a51.33 51.33 0 0 0 15.88 68.47A50.91 50.91 0 0 1 85 169.86v.65a51.31 51.31 0 0 0 41.15 50.28 51.21 51.21 0 0 1-23.16.88 51.35 51.35 0 0 0 47.92 35.62 102.92 102.92 0 0 1-63.7 22 104.41 104.41 0 0 1-12.21-.74 145.21 145.21 0 0 0 78.62 23\"/></svg>"}

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory){
  'use strict';

  /*istanbul ignore next:cant test*/
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory();
  } else if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    // Browser globals
    root.objectPath = factory();
  }
})(this, function(){
  'use strict';

  var
    toStr = Object.prototype.toString,
    _hasOwnProperty = Object.prototype.hasOwnProperty;

  function isEmpty(value){
    if (!value) {
      return true;
    }
    if (isArray(value) && value.length === 0) {
        return true;
    } else if (!isString(value)) {
        for (var i in value) {
            if (_hasOwnProperty.call(value, i)) {
                return false;
            }
        }
        return true;
    }
    return false;
  }

  function toString(type){
    return toStr.call(type);
  }

  function isNumber(value){
    return typeof value === 'number' || toString(value) === "[object Number]";
  }

  function isString(obj){
    return typeof obj === 'string' || toString(obj) === "[object String]";
  }

  function isObject(obj){
    return typeof obj === 'object' && toString(obj) === "[object Object]";
  }

  function isArray(obj){
    return typeof obj === 'object' && typeof obj.length === 'number' && toString(obj) === '[object Array]';
  }

  function isBoolean(obj){
    return typeof obj === 'boolean' || toString(obj) === '[object Boolean]';
  }

  function getKey(key){
    var intKey = parseInt(key);
    if (intKey.toString() === key) {
      return intKey;
    }
    return key;
  }

  function set(obj, path, value, doNotReplace){
    if (isNumber(path)) {
      path = [path];
    }
    if (isEmpty(path)) {
      return obj;
    }
    if (isString(path)) {
      return set(obj, path.split('.').map(getKey), value, doNotReplace);
    }
    var currentPath = path[0];

    if (path.length === 1) {
      var oldVal = obj[currentPath];
      if (oldVal === void 0 || !doNotReplace) {
        obj[currentPath] = value;
      }
      return oldVal;
    }

    if (obj[currentPath] === void 0) {
      //check if we assume an array
      if(isNumber(path[1])) {
        obj[currentPath] = [];
      } else {
        obj[currentPath] = {};
      }
    }

    return set(obj[currentPath], path.slice(1), value, doNotReplace);
  }

  function del(obj, path) {
    if (isNumber(path)) {
      path = [path];
    }

    if (isEmpty(obj)) {
      return void 0;
    }

    if (isEmpty(path)) {
      return obj;
    }
    if(isString(path)) {
      return del(obj, path.split('.'));
    }

    var currentPath = getKey(path[0]);
    var oldVal = obj[currentPath];

    if(path.length === 1) {
      if (oldVal !== void 0) {
        if (isArray(obj)) {
          obj.splice(currentPath, 1);
        } else {
          delete obj[currentPath];
        }
      }
    } else {
      if (obj[currentPath] !== void 0) {
        return del(obj[currentPath], path.slice(1));
      }
    }

    return obj;
  }

  var objectPath = function(obj) {
    return Object.keys(objectPath).reduce(function(proxy, prop) {
      if (typeof objectPath[prop] === 'function') {
        proxy[prop] = objectPath[prop].bind(objectPath, obj);
      }

      return proxy;
    }, {});
  };

  objectPath.has = function (obj, path) {
    if (isEmpty(obj)) {
      return false;
    }

    if (isNumber(path)) {
      path = [path];
    } else if (isString(path)) {
      path = path.split('.');
    }

    if (isEmpty(path) || path.length === 0) {
      return false;
    }

    for (var i = 0; i < path.length; i++) {
      var j = path[i];
      if ((isObject(obj) || isArray(obj)) && _hasOwnProperty.call(obj, j)) {
        obj = obj[j];
      } else {
        return false;
      }
    }

    return true;
  };

  objectPath.ensureExists = function (obj, path, value){
    return set(obj, path, value, true);
  };

  objectPath.set = function (obj, path, value, doNotReplace){
    return set(obj, path, value, doNotReplace);
  };

  objectPath.insert = function (obj, path, value, at){
    var arr = objectPath.get(obj, path);
    at = ~~at;
    if (!isArray(arr)) {
      arr = [];
      objectPath.set(obj, path, arr);
    }
    arr.splice(at, 0, value);
  };

  objectPath.empty = function(obj, path) {
    if (isEmpty(path)) {
      return obj;
    }
    if (isEmpty(obj)) {
      return void 0;
    }

    var value, i;
    if (!(value = objectPath.get(obj, path))) {
      return obj;
    }

    if (isString(value)) {
      return objectPath.set(obj, path, '');
    } else if (isBoolean(value)) {
      return objectPath.set(obj, path, false);
    } else if (isNumber(value)) {
      return objectPath.set(obj, path, 0);
    } else if (isArray(value)) {
      value.length = 0;
    } else if (isObject(value)) {
      for (i in value) {
        if (_hasOwnProperty.call(value, i)) {
          delete value[i];
        }
      }
    } else {
      return objectPath.set(obj, path, null);
    }
  };

  objectPath.push = function (obj, path /*, values */){
    var arr = objectPath.get(obj, path);
    if (!isArray(arr)) {
      arr = [];
      objectPath.set(obj, path, arr);
    }

    arr.push.apply(arr, Array.prototype.slice.call(arguments, 2));
  };

  objectPath.coalesce = function (obj, paths, defaultValue) {
    var value;

    for (var i = 0, len = paths.length; i < len; i++) {
      if ((value = objectPath.get(obj, paths[i])) !== void 0) {
        return value;
      }
    }

    return defaultValue;
  };

  objectPath.get = function (obj, path, defaultValue){
    if (isNumber(path)) {
      path = [path];
    }
    if (isEmpty(path)) {
      return obj;
    }
    if (isEmpty(obj)) {
      return defaultValue;
    }
    if (isString(path)) {
      return objectPath.get(obj, path.split('.'), defaultValue);
    }

    var currentPath = getKey(path[0]);

    if (path.length === 1) {
      if (obj[currentPath] === void 0) {
        return defaultValue;
      }
      return obj[currentPath];
    }

    return objectPath.get(obj[currentPath], path.slice(1), defaultValue);
  };

  objectPath.del = function(obj, path) {
    return del(obj, path);
  };

  return objectPath;
});


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _container = __webpack_require__(5);

var _container2 = _interopRequireDefault(_container);

var _Header = __webpack_require__(169);

var _Header2 = _interopRequireDefault(_Header);

var _store = __webpack_require__(0);

var _store2 = _interopRequireDefault(_store);

var _locations = __webpack_require__(4);

var _selectors = __webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderContainer = function (_AbstractContainer) {
	_inherits(HeaderContainer, _AbstractContainer);

	function HeaderContainer(options) {
		_classCallCheck(this, HeaderContainer);

		var _this = _possibleConstructorReturn(this, (HeaderContainer.__proto__ || Object.getPrototypeOf(HeaderContainer)).call(this, options));

		_this.Component = _Header2.default;
		return _this;
	}

	_createClass(HeaderContainer, [{
		key: 'initData',
		value: function initData() {
			this.data = {
				home: (0, _selectors.getRoute)(_locations.HOMEPAGE)
			};
			// // test
			// const about = getRoute(ABOUT);
			// const paradeNYC = getRoute(PARADE_DETAIL, {id: 'new-york-city'});
		}
	}, {
		key: 'initActions',
		value: function initActions() {
			var _this2 = this;

			this.options.actions.about = function () {
				return _this2._about();
			};
		}
	}, {
		key: '_about',
		value: function _about() {
			_store2.default.dispatch(showModal(ABOUT_MODAL));
		}
	}]);

	return HeaderContainer;
}(_container2.default);

exports.default = HeaderContainer;

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _DOMcomponent = __webpack_require__(16);

var _DOMcomponent2 = _interopRequireDefault(_DOMcomponent);

var _analytics = __webpack_require__(170);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import {toggleSidebar} from 'containers/sidebar/actions';

var Header = function (_AbstractDOMComponent) {
	_inherits(Header, _AbstractDOMComponent);

	function Header(props) {
		_classCallCheck(this, Header);

		var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

		_this.events = {
			'click .btn-menu': function clickBtnMenu() {
				return _this._clickToggle();
			},
			'click .main-logo': function clickMainLogo() {
				return _this._clickMainLogo();
			},
			'click .home': function clickHome() {
				return _this._clickHome();
			},
			'click .about': function clickAbout() {
				return _this._clickAbout();
			}
		};
		return _this;
	}

	_createClass(Header, [{
		key: 'initDOM',
		value: function initDOM() {
			console.log('this.el', this.el);
			this.$logo = this.el.querySelector('.main-logo');
		}
	}, {
		key: 'onDOMInit',
		value: function onDOMInit() {
			console.log('HEADER ONDOMINIT');

			// document.getElementById('header-container').appendChild(this.el);
			this.$menuEl = document.getElementById('btn-menu');
			this.$navgiationHeader = this.$el.find('.navigation-header');
			_get(Header.prototype.__proto__ || Object.getPrototypeOf(Header.prototype), 'onDOMInit', this).call(this);
		}
	}]);

	return Header;
}(_DOMcomponent2.default);

exports.default = Header;

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trackPage = exports.trackEvent = exports.analytics = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable */

exports.configureAnalytics = configureAnalytics;

var _analytics = __webpack_require__(171);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Init analytics by loading the Google scripts.
 * Doesn not track on process.env.DEV
 * @constructor
 */
var Analytics = function () {
  function Analytics() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Analytics);

    this.gaID = options.gaID ? options.gaID : _analytics.GA_ID;
    this.isCreated = false;
    // this.canTrack = !process.env.DEV;
    this.canTrack = true;

    this.init();
  }

  _createClass(Analytics, [{
    key: 'init',
    value: function init() {

      if (!this.canTrack) return;

      (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
          (i[r].q = i[r].q || []).push(arguments);
        }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
      })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

      this.create();
    }
  }, {
    key: 'create',
    value: function create() {
      if (window.ga == undefined || this.isCreated) return;

      this.isCreated = true;
      window.ga('create', this.gaID, 'auto');
    }
  }, {
    key: 'trackPage',
    value: function trackPage() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (window.ga == undefined || !this.canTrack) return;
      this.create();

      Object.keys(options).length ? ga('send', 'pageview', options) : ga('send', 'pageview');
    }
  }, {
    key: 'trackEvent',
    value: function trackEvent(event) {
      if (window.ga == undefined || !this.canTrack) return;
      this.create();

      if (event.category == undefined) {
        console.log('GA:: You have to provide a category', event);
        return;
      }

      if (event.action == undefined) {
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
  }]);

  return Analytics;
}();

var analytics = exports.analytics = null;
var trackEvent = exports.trackEvent = null;
var trackPage = exports.trackPage = null;

function configureAnalytics() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  exports.analytics = analytics = new Analytics(options);
  exports.trackEvent = trackEvent = analytics.trackEvent.bind(analytics);
  exports.trackPage = trackPage = analytics.trackPage.bind(analytics);
  return analytics;
}

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GA_ID = exports.GA_ID = 'UA-100758851-1';

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.catmullRomFitting = exports.debounce = exports.fitAsset = exports.metersToMiles = exports.rad = exports.getDate = exports.ordinalSuffixOf = exports.getAssetByDevice = exports.getAssetType = exports.getExtension = undefined;
var _arguments = arguments; /* global Modernizr */
// import Detectizr from 'detectizr';
// import Modernizr from 'Modernizr';

var _misc = __webpack_require__(173);

var getExtension = exports.getExtension = function getExtension(src) {
	var extension = src.split('.').pop();
	extension = extension.split('?')[0].toLowerCase();

	return _misc.VIDEO_EXTENSIONS.indexOf(extension) > -1 || _misc.IMAGE_EXTENSIONS.indexOf(extension) > -1 ? extension : null;
};

var getAssetType = exports.getAssetType = function getAssetType(src) {
	var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	if (options.type) return options.type;

	var extension = getExtension(src);

	if (_misc.VIDEO_EXTENSIONS.indexOf(extension) > -1) return _misc.VIDEO_TYPE;
	if (_misc.IMAGE_EXTENSIONS.indexOf(extension) > -1) return _misc.IMAGE_TYPE;

	// anything else
	return _misc.FILE_TYPE;
};

var getAssetByDevice = exports.getAssetByDevice = function getAssetByDevice() {
	var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	if (!o) {
		console.error('getAssetByDevice: no object provided');
		return null;
	}

	var asset = null;

	switch (Detectizr.device.type) {
		case 'desktop':
			asset = o.lg;break;
		case 'tablet':
			asset = o.med;break;
		case 'mobile':
			asset = o.sml;break;
		default:
			asset = o.lg;break;
	}

	// special case
	if (asset.video) {
		asset.fallback = asset.src;
		asset.src = asset.video;
		options.type = _misc.VIDEO_TYPE;
	} else {
		options.type = _misc.IMAGE_TYPE;
	}

	// if src is video BUT on mobile/tablet, switch src/fallback.
	// Otherwise, add type= video
	if (getAssetType(asset.src, options) === _misc.VIDEO_TYPE && Detectizr.device.type !== 'desktop' && asset.fallback) {
		asset.src = asset.fallback;
		asset.type = options.type = _misc.IMAGE_TYPE;
	}

	asset.type = getAssetType(asset.src, options);

	switch (asset.type) {
		case _misc.VIDEO_TYPE:
			// dirty
			asset.extension = getExtension(asset.src) ? getExtension(asset.src) : 'mp4';
			asset.isVideo = true;
			break;
		case _misc.IMAGE_TYPE:
			// dirty
			asset.extension = getExtension(asset.src) ? getExtension(asset.src) : 'jpg';
			if (Modernizr.webp) asset.extension = 'webp';
			asset.isImage = true;
			break;
		default:
			break;
	}

	if (asset.isImage) {
		// Build the params
		options.params = options.params ? options.params : {};

		var MAX_WIDTH_DESKTOP = 2500;
		var MAX_WIDTH_TABLET = 1024;
		var MAX_WIDTH_MOBILE = 480;

		var dimensions = {
			desktop: {
				width: o.dimensions.width,
				height: o.dimensions.height
			},
			tablet: {
				width: options.dimensions_tablet ? options.dimensions_tablet.width : o.dimensions.width,
				height: options.dimensions_tablet ? options.dimensions_tablet.height : o.dimensions.height
			},
			mobile: {
				width: options.dimensions_mobile ? options.dimensions_mobile.width : o.dimensions.width,
				height: options.dimensions_mobile ? options.dimensions_mobile.height : o.dimensions.height
			}
		};

		if (dimensions.desktop.width > MAX_WIDTH_DESKTOP) {
			dimensions.desktop.height *= MAX_WIDTH_DESKTOP / dimensions.desktop.width;
			dimensions.desktop.width = MAX_WIDTH_DESKTOP;
		}

		if (dimensions.tablet.width > MAX_WIDTH_TABLET) {
			dimensions.tablet.height *= MAX_WIDTH_TABLET / dimensions.tablet.width;
			dimensions.tablet.width = MAX_WIDTH_TABLET;
		}

		if (dimensions.mobile.width > MAX_WIDTH_MOBILE) {
			dimensions.mobile.height *= MAX_WIDTH_MOBILE / dimensions.mobile.width;
			dimensions.mobile.width = MAX_WIDTH_MOBILE;
		}

		asset.dimensions = {};

		// Width of the assets
		if (!options.params.width) {
			switch (Detectizr.device.type) {
				case 'desktop':
					options.params.width = dimensions.desktop.width;
					// if (window.devicePixelRatio) options.params.width * window.devicePixelRatio <= MAX_WIDTH_DESKTOP ? options.params.width *= window.devicePixelRatio : options.params.width = MAX_WIDTH_DESKTOP;
					asset.dimensions = dimensions.desktop;
					break;
				case 'tablet':
					options.params.width = dimensions.tablet.width;
					// if (window.devicePixelRatio && options.params.width * window.devicePixelRatio <= MAX_WIDTH_DESKTOP) options.params.width *= window.devicePixelRatio;
					asset.dimensions = dimensions.tablet;
					break;
				case 'mobile':
					options.params.width = dimensions.mobile.width;
					// if (window.devicePixelRatio && options.params.width * window.devicePixelRatio <= MAX_WIDTH_DESKTOP) options.params.width *= window.devicePixelRatio;
					asset.dimensions = dimensions.mobile;
					break;
				default:
					asset = o.lg;break;
			}
		}

		// console.log('asset.dimensions', asset.dimensions);

		// pixel ratio
		if (window.devicePixelRatio) options.params.width * window.devicePixelRatio <= MAX_WIDTH_DESKTOP ? options.params.width *= window.devicePixelRatio : options.params.width = MAX_WIDTH_DESKTOP;
		// if (window.devicePixelRatio) {
		//     // If divice pixel ratio * current width is less greater than the maximum (origin size), then get this size
		//     options.params.width = options.params.width * window.devicePixelRatio <= dimensions.desktop.width ? Math.round(options.params.width * window.devicePixelRatio) : o.dimensions.width;
		// }

		var params = '=w' + options.params.width;
		if (Modernizr.webp) params += '-rw';

		asset.src += params;
	}

	return asset;
};

var ordinalSuffixOf = exports.ordinalSuffixOf = function ordinalSuffixOf(i) {
	var j = i % 10;
	var k = i % 100;

	if (j === 1 && k !== 11) {
		return i + 'st';
	}
	if (j === 2 && k !== 12) {
		return i + 'nd';
	}
	if (j === 3 && k !== 13) {
		return i + 'rd';
	}
	return i + 'th';
};

var getDate = exports.getDate = function getDate(locale, dt) {
	var date = {};
	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	// const localeTime = dt.setUTCHours(GMT HERE);
	// If non English
	if (locale.indexOf('en-') === -1) {
		date.day = dt.getUTCDate() < 10 ? '0' + dt.getUTCDate() : dt.getUTCDate();
	} else {
		date.day = ordinalSuffixOf(dt.getUTCDate());
	}

	date.weekDay = days[dt.getUTCDay()];
	date.nbDay = dt.getUTCDate() < 10 ? '0' + dt.getUTCDate() : dt.getUTCDate();
	// date.month = dt.toLocaleString(locale, {month: 'long'});

	date.month = months[dt.getUTCMonth()];
	date.nbMonth = parseInt(dt.getUTCMonth() + 1, 10) < 10 ? '0' + parseInt(dt.getUTCMonth() + 1, 10) : parseInt(dt.getUTCMonth() + 1, 10);
	date.year = dt.getFullYear();
	date.hour = dt.getUTCHours();
	if (date.hour > 12) date.hour -= 12;
	date.minute = dt.getMinutes();
	date.second = dt.getSeconds();
	date.UTCHours = dt.getUTCHours() + dt.getTimezoneOffset() / 60 < 10 ? '0' + dt.getUTCHours() + dt.getTimezoneOffset() / 60 : dt.getUTCHours() + dt.getTimezoneOffset() / 60;
	date.UTCMinutes = dt.getUTCMinutes() < 10 ? '0' + dt.getUTCMinutes() : dt.getUTCMinutes();
	date.UTCSeconds = dt.getUTCSeconds() < 10 ? '0' + dt.getUTCSeconds() : dt.getUTCSeconds();
	date.tz = '' + date.year + date.nbMonth + date.nbDay + 'T' + date.UTCHours + date.UTCMinutes + date.UTCSeconds + 'Z';

	return date;
};

var rad = exports.rad = function rad(x) {
	return x * Math.PI / 180;
};

var metersToMiles = exports.metersToMiles = function metersToMiles(meters) {
	return meters * 0.00062137;
};

var fitAsset = exports.fitAsset = function fitAsset(config_) {
	var wi = config_.width;
	var hi = config_.height;
	var ri = wi / hi;
	var ws = config_.containerWidth;
	var hs = config_.containerHeight;
	var rs = ws / hs;
	var newDimensions = {};

	if (ri > rs) {
		newDimensions.ratio = hs / hi;
		newDimensions.w = Math.ceil(wi * hs / hi, newDimensions.h = hs);
	} else {
		newDimensions.ratio = ws / wi;
		newDimensions.w = ws;
		newDimensions.h = Math.ceil(hi * ws / wi);
	}

	newDimensions.top = (hs - newDimensions.h) / 2;
	newDimensions.left = (ws - newDimensions.w) / 2;

	return newDimensions;
};

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
var debounce = exports.debounce = function debounce(func, wait, immediate) {
	var timeout = null;
	return function () {
		var args = _arguments;
		var later = function later() {
			timeout = null;
			if (!immediate) func.apply(undefined, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(undefined, args);
	};
};

/**
 * Interpolates a Catmull-Rom Spline through a series of x/y points
 * Converts the CR Spline to Cubic Beziers for use with SVG items
 *
 * If 'alpha' is 0.5 then the 'Centripetal' variant is used
 * If 'alpha' is 1 then the 'Chordal' variant is used
 *
 *
 * @param  {Array} data - Array of points, each point in object literal holding x/y values
 * @return {String} d - SVG string with cubic bezier curves representing the Catmull-Rom Spline
 */
var catmullRomFitting = exports.catmullRomFitting = function catmullRomFitting(data) {
	var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

	if (alpha === 0 || alpha === undefined) {
		return false;
	}

	var d = Math.round(data[0].x) + ',' + Math.round(data[0].y) + ' ';
	var length = data.length;
	for (var i = 0; i < length - 1; i++) {
		var p0 = i === 0 ? data[0] : data[i - 1];
		var p1 = data[i];
		var p2 = data[i + 1];
		var p3 = i + 2 < length ? data[i + 2] : p2;

		var d1 = Math.sqrt(Math.pow(p0.x - p1.x, 2) + Math.pow(p0.y - p1.y, 2));
		var d2 = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
		var d3 = Math.sqrt(Math.pow(p2.x - p3.x, 2) + Math.pow(p2.y - p3.y, 2));

		// Catmull-Rom to Cubic Bezier conversion matrix

		// A = 2d1^2a + 3d1^a * d2^a + d3^2a
		// B = 2d3^2a + 3d3^a * d2^a + d2^2a

		// [   0             1            0          0          ]
		// [   -d2^2a /N     A/N          d1^2a /N   0          ]
		// [   0             d3^2a /M     B/M        -d2^2a /M  ]
		// [   0             0            1          0          ]

		var d3powA = Math.pow(d3, alpha);
		var d3pow2A = Math.pow(d3, 2 * alpha);
		var d2powA = Math.pow(d2, alpha);
		var d2pow2A = Math.pow(d2, 2 * alpha);
		var d1powA = Math.pow(d1, alpha);
		var d1pow2A = Math.pow(d1, 2 * alpha);

		var A = 2 * d1pow2A + 3 * d1powA * d2powA + d2pow2A;
		var B = 2 * d3pow2A + 3 * d3powA * d2powA + d2pow2A;
		var N = 3 * d1powA * (d1powA + d2powA);
		if (N > 0) {
			N = 1 / N;
		}
		var M = 3 * d3powA * (d3powA + d2powA);
		if (M > 0) {
			M = 1 / M;
		}

		var bp1 = {
			x: (-d2pow2A * p0.x + A * p1.x + d1pow2A * p2.x) * N,
			y: (-d2pow2A * p0.y + A * p1.y + d1pow2A * p2.y) * N
		};

		var bp2 = {
			x: (d3pow2A * p1.x + B * p2.x - d2pow2A * p3.x) * M,
			y: (d3pow2A * p1.y + B * p2.y - d2pow2A * p3.y) * M
		};

		if (bp1.x === 0 && bp1.y === 0) {
			bp1 = p1;
		}
		if (bp2.x === 0 && bp2.y === 0) {
			bp2 = p2;
		}

		d += 'C' + bp1.x + ',' + bp1.y + ' ' + bp2.x + ',' + bp2.y + ' ' + p2.x + ',' + p2.y + ' ';
	}

	return d;
};

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// ACTION
var VIDEO_EXTENSIONS = exports.VIDEO_EXTENSIONS = ['mp4', 'webm', 'ogg'];
var IMAGE_EXTENSIONS = exports.IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'gif', 'png', 'webp'];
var VIDEO_TYPE = exports.VIDEO_TYPE = 'VIDEO_TYPE';
var IMAGE_TYPE = exports.IMAGE_TYPE = 'IMAGE_TYPE';
var FILE_TYPE = exports.FILE_TYPE = 'FILE_TYPE';

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.scroll = scroll;
exports.hideNav = hideNav;
exports.showNav = showNav;
exports.updateScroll = updateScroll;
exports.disableScroll = disableScroll;
exports.updateModal = updateModal;
exports.toggleNav = toggleNav;
exports.showLoader = showLoader;
exports.hideLoader = hideLoader;

var _constants = __webpack_require__(175);

function scroll(scrollObj) {
    return {
        type: _constants.SCROLL,
        scroll: scrollObj
    };
}

function hideNav() {
    return {
        type: _constants.UI_NAV_HIDE
    };
}

function showNav() {
    return {
        type: _constants.UI_NAV_SHOW
    };
}

function updateScroll(scrollState) {
    return {
        type: _constants.SCROLL_ENABLED,
        scrollState: scrollState
    };
}

// Direcly disabled scroll ( use for experience video )
function disableScroll(scrollState) {
    return {
        type: _constants.SCROLL_DISABLED,
        scrollState: scrollState
    };
}

function updateModal(modalState) {
    return {
        type: _constants.MODAL_SCROLL,
        modalState: modalState
    };
}

function toggleNav() {
    return {
        type: _constants.UI_NAV_TOGGLE
    };
}

function showLoader() {
    return {
        type: _constants.UI_SHOW_LOADING
    };
}

function hideLoader() {
    return {
        type: _constants.UI_HIDE_LOADING
    };
}

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// ACTION
var SCROLL = exports.SCROLL = 'SCROLL';

// UI
var UI_NAV_HIDE = exports.UI_NAV_HIDE = 'UI_NAV_HIDE';
var UI_NAV_SHOW = exports.UI_NAV_SHOW = 'UI_NAV_SHOW';
var UI_NAV_TOGGLE = exports.UI_NAV_TOGGLE = 'UI_NAV_TOGGLE';
var UI_SHOW_LOADING = exports.UI_SHOW_LOADING = 'UI_SHOW_LOADING';
var UI_HIDE_LOADING = exports.UI_HIDE_LOADING = 'UI_HIDE_LOADING';
var SCROLL_ENABLED = exports.SCROLL_ENABLED = 'SCROLL_ENABLED';
var SCROLL_DISABLED = exports.SCROLL_DISABLED = 'SCROLL_DISABLED';
var MODAL_SCROLL = exports.MODAL_SCROLL = 'MODAL_SCROLL';

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Pagecontainer = __webpack_require__(60);

var _Pagecontainer2 = _interopRequireDefault(_Pagecontainer);

var _Homepage = __webpack_require__(178);

var _Homepage2 = _interopRequireDefault(_Homepage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// actions
// import {setIntroListHomepage} from './actions';

var HomepageContainer = function (_AbstractPageContaine) {
	_inherits(HomepageContainer, _AbstractPageContaine);

	function HomepageContainer(options) {
		_classCallCheck(this, HomepageContainer);

		var _this = _possibleConstructorReturn(this, (HomepageContainer.__proto__ || Object.getPrototypeOf(HomepageContainer)).call(this, options));

		_this.Component = _Homepage2.default;

		return _this;
	}

	_createClass(HomepageContainer, [{
		key: 'initData',
		value: function initData() {
			console.log('HomepageContainer:initData');
			// const list = {
			// 	default_landing: false,
			// };

			// this.data.cities.forEach((key, value) => {
			// 	list[key.id] = false;
			// });

			// this.dispatch(setIntroListHomepage(list));

			_get(HomepageContainer.prototype.__proto__ || Object.getPrototypeOf(HomepageContainer.prototype), 'initData', this).call(this);
		}
	}]);

	return HomepageContainer;
}(_Pagecontainer2.default);

exports.default = HomepageContainer;

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var JSON_ENDPOINTS = exports.JSON_ENDPOINTS = './assets/jsons/';

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Pagecomponent = __webpack_require__(26);

var _Pagecomponent2 = _interopRequireDefault(_Pagecomponent);

var _index = __webpack_require__(182);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import HomepageIntroPageContainer from 'containers/homepage-intro-page/HomepageIntroPage';

// Constants
// import {HOMEPAGE} from 'constants/locations';

// Utils
// import ScrollPrevent from 'utils/scrollPrevent';
// import {getAssetByDevice} from 'utils/misc';
// import {loadAsset} from 'utils/load';
// import {trackEvent} from 'utils/analytics';

// Selectors
// import {getNextCities} from 'selectors/cities';
// import {isAssetLoaded} from 'containers/homepage/selectors';

// Actions
// import {setCurrentCity} from 'actions/cities';
// import {zoomOutAll} from 'containers/mini-map/actions';
// import {loadedIntroHomepage} from 'containers/homepage/actions';
// import {blockSidebar, unBlockSidebar} from 'containers/sidebar/actions';

// Lib
// import Hammer from 'hammerjs';
// import Detectizr from 'detectizr';

var Homepage = function (_AbstractPageComponen) {
	_inherits(Homepage, _AbstractPageComponen);

	function Homepage(options) {
		_classCallCheck(this, Homepage);

		var _this = _possibleConstructorReturn(this, (Homepage.__proto__ || Object.getPrototypeOf(Homepage)).call(this, options));

		_this.template = _index2.default;

		_this.states = {
			isAnimating: false
		};
		return _this;
	}

	_createClass(Homepage, [{
		key: 'dispose',
		value: function dispose() {
			_get(Homepage.prototype.__proto__ || Object.getPrototypeOf(Homepage.prototype), 'dispose', this).call(this);
		}
	}]);

	return Homepage;
}(_Pagecomponent2.default);

exports.default = Homepage;

/***/ }),
/* 179 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

/*!
 * VERSION: 1.19.1
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = typeof module !== "undefined" && module.exports && typeof global !== "undefined" ? global : undefined || window; //helps ensure compatibility with AMD/RequireJS and CommonJS/Node
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {

	"use strict";

	_gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (Animation, SimpleTimeline, TweenLite) {

		var TimelineLite = function TimelineLite(vars) {
			SimpleTimeline.call(this, vars);
			this._labels = {};
			this.autoRemoveChildren = this.vars.autoRemoveChildren === true;
			this.smoothChildTiming = this.vars.smoothChildTiming === true;
			this._sortChildren = true;
			this._onUpdate = this.vars.onUpdate;
			var v = this.vars,
			    val,
			    p;
			for (p in v) {
				val = v[p];
				if (_isArray(val)) if (val.join("").indexOf("{self}") !== -1) {
					v[p] = this._swapSelfInParams(val);
				}
			}
			if (_isArray(v.tweens)) {
				this.add(v.tweens, 0, v.align, v.stagger);
			}
		},
		    _tinyNum = 0.0000000001,
		    TweenLiteInternals = TweenLite._internals,
		    _internals = TimelineLite._internals = {},
		    _isSelector = TweenLiteInternals.isSelector,
		    _isArray = TweenLiteInternals.isArray,
		    _lazyTweens = TweenLiteInternals.lazyTweens,
		    _lazyRender = TweenLiteInternals.lazyRender,
		    _globals = _gsScope._gsDefine.globals,
		    _copy = function _copy(vars) {
			var copy = {},
			    p;
			for (p in vars) {
				copy[p] = vars[p];
			}
			return copy;
		},
		    _applyCycle = function _applyCycle(vars, targets, i) {
			var alt = vars.cycle,
			    p,
			    val;
			for (p in alt) {
				val = alt[p];
				vars[p] = typeof val === "function" ? val(i, targets[i]) : val[i % val.length];
			}
			delete vars.cycle;
		},
		    _pauseCallback = _internals.pauseCallback = function () {},
		    _slice = function _slice(a) {
			//don't use [].slice because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
			var b = [],
			    l = a.length,
			    i;
			for (i = 0; i !== l; b.push(a[i++])) {}
			return b;
		},
		    p = TimelineLite.prototype = new SimpleTimeline();

		TimelineLite.version = "1.19.1";
		p.constructor = TimelineLite;
		p.kill()._gc = p._forcingPlayhead = p._hasPause = false;

		/* might use later...
  //translates a local time inside an animation to the corresponding time on the root/global timeline, factoring in all nesting and timeScales.
  function localToGlobal(time, animation) {
  	while (animation) {
  		time = (time / animation._timeScale) + animation._startTime;
  		animation = animation.timeline;
  	}
  	return time;
  }
  	//translates the supplied time on the root/global timeline into the corresponding local time inside a particular animation, factoring in all nesting and timeScales
  function globalToLocal(time, animation) {
  	var scale = 1;
  	time -= localToGlobal(0, animation);
  	while (animation) {
  		scale *= animation._timeScale;
  		animation = animation.timeline;
  	}
  	return time * scale;
  }
  */

		p.to = function (target, duration, vars, position) {
			var Engine = vars.repeat && _globals.TweenMax || TweenLite;
			return duration ? this.add(new Engine(target, duration, vars), position) : this.set(target, vars, position);
		};

		p.from = function (target, duration, vars, position) {
			return this.add((vars.repeat && _globals.TweenMax || TweenLite).from(target, duration, vars), position);
		};

		p.fromTo = function (target, duration, fromVars, toVars, position) {
			var Engine = toVars.repeat && _globals.TweenMax || TweenLite;
			return duration ? this.add(Engine.fromTo(target, duration, fromVars, toVars), position) : this.set(target, toVars, position);
		};

		p.staggerTo = function (targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			var tl = new TimelineLite({ onComplete: onCompleteAll, onCompleteParams: onCompleteAllParams, callbackScope: onCompleteAllScope, smoothChildTiming: this.smoothChildTiming }),
			    cycle = vars.cycle,
			    copy,
			    i;
			if (typeof targets === "string") {
				targets = TweenLite.selector(targets) || targets;
			}
			targets = targets || [];
			if (_isSelector(targets)) {
				//senses if the targets object is a selector. If it is, we should translate it into an array.
				targets = _slice(targets);
			}
			stagger = stagger || 0;
			if (stagger < 0) {
				targets = _slice(targets);
				targets.reverse();
				stagger *= -1;
			}
			for (i = 0; i < targets.length; i++) {
				copy = _copy(vars);
				if (copy.startAt) {
					copy.startAt = _copy(copy.startAt);
					if (copy.startAt.cycle) {
						_applyCycle(copy.startAt, targets, i);
					}
				}
				if (cycle) {
					_applyCycle(copy, targets, i);
					if (copy.duration != null) {
						duration = copy.duration;
						delete copy.duration;
					}
				}
				tl.to(targets[i], duration, copy, i * stagger);
			}
			return this.add(tl, position);
		};

		p.staggerFrom = function (targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			vars.immediateRender = vars.immediateRender != false;
			vars.runBackwards = true;
			return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
		};

		p.staggerFromTo = function (targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			toVars.startAt = fromVars;
			toVars.immediateRender = toVars.immediateRender != false && fromVars.immediateRender != false;
			return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
		};

		p.call = function (callback, params, scope, position) {
			return this.add(TweenLite.delayedCall(0, callback, params, scope), position);
		};

		p.set = function (target, vars, position) {
			position = this._parseTimeOrLabel(position, 0, true);
			if (vars.immediateRender == null) {
				vars.immediateRender = position === this._time && !this._paused;
			}
			return this.add(new TweenLite(target, 0, vars), position);
		};

		TimelineLite.exportRoot = function (vars, ignoreDelayedCalls) {
			vars = vars || {};
			if (vars.smoothChildTiming == null) {
				vars.smoothChildTiming = true;
			}
			var tl = new TimelineLite(vars),
			    root = tl._timeline,
			    tween,
			    next;
			if (ignoreDelayedCalls == null) {
				ignoreDelayedCalls = true;
			}
			root._remove(tl, true);
			tl._startTime = 0;
			tl._rawPrevTime = tl._time = tl._totalTime = root._time;
			tween = root._first;
			while (tween) {
				next = tween._next;
				if (!ignoreDelayedCalls || !(tween instanceof TweenLite && tween.target === tween.vars.onComplete)) {
					tl.add(tween, tween._startTime - tween._delay);
				}
				tween = next;
			}
			root.add(tl, 0);
			return tl;
		};

		p.add = function (value, position, align, stagger) {
			var curTime, l, i, child, tl, beforeRawTime;
			if (typeof position !== "number") {
				position = this._parseTimeOrLabel(position, 0, true, value);
			}
			if (!(value instanceof Animation)) {
				if (value instanceof Array || value && value.push && _isArray(value)) {
					align = align || "normal";
					stagger = stagger || 0;
					curTime = position;
					l = value.length;
					for (i = 0; i < l; i++) {
						if (_isArray(child = value[i])) {
							child = new TimelineLite({ tweens: child });
						}
						this.add(child, curTime);
						if (typeof child !== "string" && typeof child !== "function") {
							if (align === "sequence") {
								curTime = child._startTime + child.totalDuration() / child._timeScale;
							} else if (align === "start") {
								child._startTime -= child.delay();
							}
						}
						curTime += stagger;
					}
					return this._uncache(true);
				} else if (typeof value === "string") {
					return this.addLabel(value, position);
				} else if (typeof value === "function") {
					value = TweenLite.delayedCall(0, value);
				} else {
					throw "Cannot add " + value + " into the timeline; it is not a tween, timeline, function, or string.";
				}
			}

			SimpleTimeline.prototype.add.call(this, value, position);

			//if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.
			if (this._gc || this._time === this._duration) if (!this._paused) if (this._duration < this.duration()) {
				//in case any of the ancestors had completed but should now be enabled...
				tl = this;
				beforeRawTime = tl.rawTime() > value._startTime; //if the tween is placed on the timeline so that it starts BEFORE the current rawTime, we should align the playhead (move the timeline). This is because sometimes users will create a timeline, let it finish, and much later append a tween and expect it to run instead of jumping to its end state. While technically one could argue that it should jump to its end state, that's not what users intuitively expect.
				while (tl._timeline) {
					if (beforeRawTime && tl._timeline.smoothChildTiming) {
						tl.totalTime(tl._totalTime, true); //moves the timeline (shifts its startTime) if necessary, and also enables it.
					} else if (tl._gc) {
						tl._enabled(true, false);
					}
					tl = tl._timeline;
				}
			}

			return this;
		};

		p.remove = function (value) {
			if (value instanceof Animation) {
				this._remove(value, false);
				var tl = value._timeline = value.vars.useFrames ? Animation._rootFramesTimeline : Animation._rootTimeline; //now that it's removed, default it to the root timeline so that if it gets played again, it doesn't jump back into this timeline.
				value._startTime = (value._paused ? value._pauseTime : tl._time) - (!value._reversed ? value._totalTime : value.totalDuration() - value._totalTime) / value._timeScale; //ensure that if it gets played again, the timing is correct.
				return this;
			} else if (value instanceof Array || value && value.push && _isArray(value)) {
				var i = value.length;
				while (--i > -1) {
					this.remove(value[i]);
				}
				return this;
			} else if (typeof value === "string") {
				return this.removeLabel(value);
			}
			return this.kill(null, value);
		};

		p._remove = function (tween, skipDisable) {
			SimpleTimeline.prototype._remove.call(this, tween, skipDisable);
			var last = this._last;
			if (!last) {
				this._time = this._totalTime = this._duration = this._totalDuration = 0;
			} else if (this._time > this.duration()) {
				this._time = this._duration;
				this._totalTime = this._totalDuration;
			}
			return this;
		};

		p.append = function (value, offsetOrLabel) {
			return this.add(value, this._parseTimeOrLabel(null, offsetOrLabel, true, value));
		};

		p.insert = p.insertMultiple = function (value, position, align, stagger) {
			return this.add(value, position || 0, align, stagger);
		};

		p.appendMultiple = function (tweens, offsetOrLabel, align, stagger) {
			return this.add(tweens, this._parseTimeOrLabel(null, offsetOrLabel, true, tweens), align, stagger);
		};

		p.addLabel = function (label, position) {
			this._labels[label] = this._parseTimeOrLabel(position);
			return this;
		};

		p.addPause = function (position, callback, params, scope) {
			var t = TweenLite.delayedCall(0, _pauseCallback, params, scope || this);
			t.vars.onComplete = t.vars.onReverseComplete = callback;
			t.data = "isPause";
			this._hasPause = true;
			return this.add(t, position);
		};

		p.removeLabel = function (label) {
			delete this._labels[label];
			return this;
		};

		p.getLabelTime = function (label) {
			return this._labels[label] != null ? this._labels[label] : -1;
		};

		p._parseTimeOrLabel = function (timeOrLabel, offsetOrLabel, appendIfAbsent, ignore) {
			var i;
			//if we're about to add a tween/timeline (or an array of them) that's already a child of this timeline, we should remove it first so that it doesn't contaminate the duration().
			if (ignore instanceof Animation && ignore.timeline === this) {
				this.remove(ignore);
			} else if (ignore && (ignore instanceof Array || ignore.push && _isArray(ignore))) {
				i = ignore.length;
				while (--i > -1) {
					if (ignore[i] instanceof Animation && ignore[i].timeline === this) {
						this.remove(ignore[i]);
					}
				}
			}
			if (typeof offsetOrLabel === "string") {
				return this._parseTimeOrLabel(offsetOrLabel, appendIfAbsent && typeof timeOrLabel === "number" && this._labels[offsetOrLabel] == null ? timeOrLabel - this.duration() : 0, appendIfAbsent);
			}
			offsetOrLabel = offsetOrLabel || 0;
			if (typeof timeOrLabel === "string" && (isNaN(timeOrLabel) || this._labels[timeOrLabel] != null)) {
				//if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
				i = timeOrLabel.indexOf("=");
				if (i === -1) {
					if (this._labels[timeOrLabel] == null) {
						return appendIfAbsent ? this._labels[timeOrLabel] = this.duration() + offsetOrLabel : offsetOrLabel;
					}
					return this._labels[timeOrLabel] + offsetOrLabel;
				}
				offsetOrLabel = parseInt(timeOrLabel.charAt(i - 1) + "1", 10) * Number(timeOrLabel.substr(i + 1));
				timeOrLabel = i > 1 ? this._parseTimeOrLabel(timeOrLabel.substr(0, i - 1), 0, appendIfAbsent) : this.duration();
			} else if (timeOrLabel == null) {
				timeOrLabel = this.duration();
			}
			return Number(timeOrLabel) + offsetOrLabel;
		};

		p.seek = function (position, suppressEvents) {
			return this.totalTime(typeof position === "number" ? position : this._parseTimeOrLabel(position), suppressEvents !== false);
		};

		p.stop = function () {
			return this.paused(true);
		};

		p.gotoAndPlay = function (position, suppressEvents) {
			return this.play(position, suppressEvents);
		};

		p.gotoAndStop = function (position, suppressEvents) {
			return this.pause(position, suppressEvents);
		};

		p.render = function (time, suppressEvents, force) {
			if (this._gc) {
				this._enabled(true, false);
			}
			var totalDur = !this._dirty ? this._totalDuration : this.totalDuration(),
			    prevTime = this._time,
			    prevStart = this._startTime,
			    prevTimeScale = this._timeScale,
			    prevPaused = this._paused,
			    tween,
			    isComplete,
			    next,
			    callback,
			    internalForce,
			    pauseTween,
			    curTime;
			if (time >= totalDur - 0.0000001 && time >= 0) {
				//to work around occasional floating point math artifacts.
				this._totalTime = this._time = totalDur;
				if (!this._reversed) if (!this._hasPausedChild()) {
					isComplete = true;
					callback = "onComplete";
					internalForce = !!this._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
					if (this._duration === 0) if (time <= 0 && time >= -0.0000001 || this._rawPrevTime < 0 || this._rawPrevTime === _tinyNum) if (this._rawPrevTime !== time && this._first) {
						internalForce = true;
						if (this._rawPrevTime > _tinyNum) {
							callback = "onReverseComplete";
						}
					}
				}
				this._rawPrevTime = this._duration || !suppressEvents || time || this._rawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
				time = totalDur + 0.0001; //to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7.
			} else if (time < 0.0000001) {
				//to work around occasional floating point math artifacts, round super small values to 0.
				this._totalTime = this._time = 0;
				if (prevTime !== 0 || this._duration === 0 && this._rawPrevTime !== _tinyNum && (this._rawPrevTime > 0 || time < 0 && this._rawPrevTime >= 0)) {
					callback = "onReverseComplete";
					isComplete = this._reversed;
				}
				if (time < 0) {
					this._active = false;
					if (this._timeline.autoRemoveChildren && this._reversed) {
						//ensures proper GC if a timeline is resumed after it's finished reversing.
						internalForce = isComplete = true;
						callback = "onReverseComplete";
					} else if (this._rawPrevTime >= 0 && this._first) {
						//when going back beyond the start, force a render so that zero-duration tweens that sit at the very beginning render their start values properly. Otherwise, if the parent timeline's playhead lands exactly at this timeline's startTime, and then moves backwards, the zero-duration tweens at the beginning would still be at their end state.
						internalForce = true;
					}
					this._rawPrevTime = time;
				} else {
					this._rawPrevTime = this._duration || !suppressEvents || time || this._rawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
					if (time === 0 && isComplete) {
						//if there's a zero-duration tween at the very beginning of a timeline and the playhead lands EXACTLY at time 0, that tween will correctly render its end values, but we need to keep the timeline alive for one more render so that the beginning values render properly as the parent's playhead keeps moving beyond the begining. Imagine obj.x starts at 0 and then we do tl.set(obj, {x:100}).to(obj, 1, {x:200}) and then later we tl.reverse()...the goal is to have obj.x revert to 0. If the playhead happens to land on exactly 0, without this chunk of code, it'd complete the timeline and remove it from the rendering queue (not good).
						tween = this._first;
						while (tween && tween._startTime === 0) {
							if (!tween._duration) {
								isComplete = false;
							}
							tween = tween._next;
						}
					}
					time = 0; //to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)
					if (!this._initted) {
						internalForce = true;
					}
				}
			} else {

				if (this._hasPause && !this._forcingPlayhead && !suppressEvents) {
					if (time >= prevTime) {
						tween = this._first;
						while (tween && tween._startTime <= time && !pauseTween) {
							if (!tween._duration) if (tween.data === "isPause" && !tween.ratio && !(tween._startTime === 0 && this._rawPrevTime === 0)) {
								pauseTween = tween;
							}
							tween = tween._next;
						}
					} else {
						tween = this._last;
						while (tween && tween._startTime >= time && !pauseTween) {
							if (!tween._duration) if (tween.data === "isPause" && tween._rawPrevTime > 0) {
								pauseTween = tween;
							}
							tween = tween._prev;
						}
					}
					if (pauseTween) {
						this._time = time = pauseTween._startTime;
						this._totalTime = time + this._cycle * (this._totalDuration + this._repeatDelay);
					}
				}

				this._totalTime = this._time = this._rawPrevTime = time;
			}
			if ((this._time === prevTime || !this._first) && !force && !internalForce && !pauseTween) {
				return;
			} else if (!this._initted) {
				this._initted = true;
			}

			if (!this._active) if (!this._paused && this._time !== prevTime && time > 0) {
				this._active = true; //so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
			}

			if (prevTime === 0) if (this.vars.onStart) if (this._time !== 0 || !this._duration) if (!suppressEvents) {
				this._callback("onStart");
			}

			curTime = this._time;
			if (curTime >= prevTime) {
				tween = this._first;
				while (tween) {
					next = tween._next; //record it here because the value could change after rendering...
					if (curTime !== this._time || this._paused && !prevPaused) {
						//in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
						break;
					} else if (tween._active || tween._startTime <= curTime && !tween._paused && !tween._gc) {
						if (pauseTween === tween) {
							this.pause();
						}
						if (!tween._reversed) {
							tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
						} else {
							tween.render((!tween._dirty ? tween._totalDuration : tween.totalDuration()) - (time - tween._startTime) * tween._timeScale, suppressEvents, force);
						}
					}
					tween = next;
				}
			} else {
				tween = this._last;
				while (tween) {
					next = tween._prev; //record it here because the value could change after rendering...
					if (curTime !== this._time || this._paused && !prevPaused) {
						//in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
						break;
					} else if (tween._active || tween._startTime <= prevTime && !tween._paused && !tween._gc) {
						if (pauseTween === tween) {
							pauseTween = tween._prev; //the linked list is organized by _startTime, thus it's possible that a tween could start BEFORE the pause and end after it, in which case it would be positioned before the pause tween in the linked list, but we should render it before we pause() the timeline and cease rendering. This is only a concern when going in reverse.
							while (pauseTween && pauseTween.endTime() > this._time) {
								pauseTween.render(pauseTween._reversed ? pauseTween.totalDuration() - (time - pauseTween._startTime) * pauseTween._timeScale : (time - pauseTween._startTime) * pauseTween._timeScale, suppressEvents, force);
								pauseTween = pauseTween._prev;
							}
							pauseTween = null;
							this.pause();
						}
						if (!tween._reversed) {
							tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
						} else {
							tween.render((!tween._dirty ? tween._totalDuration : tween.totalDuration()) - (time - tween._startTime) * tween._timeScale, suppressEvents, force);
						}
					}
					tween = next;
				}
			}

			if (this._onUpdate) if (!suppressEvents) {
				if (_lazyTweens.length) {
					//in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
					_lazyRender();
				}
				this._callback("onUpdate");
			}

			if (callback) if (!this._gc) if (prevStart === this._startTime || prevTimeScale !== this._timeScale) if (this._time === 0 || totalDur >= this.totalDuration()) {
				//if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
				if (isComplete) {
					if (_lazyTweens.length) {
						//in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onComplete on a timeline that reports/checks tweened values.
						_lazyRender();
					}
					if (this._timeline.autoRemoveChildren) {
						this._enabled(false, false);
					}
					this._active = false;
				}
				if (!suppressEvents && this.vars[callback]) {
					this._callback(callback);
				}
			}
		};

		p._hasPausedChild = function () {
			var tween = this._first;
			while (tween) {
				if (tween._paused || tween instanceof TimelineLite && tween._hasPausedChild()) {
					return true;
				}
				tween = tween._next;
			}
			return false;
		};

		p.getChildren = function (nested, tweens, timelines, ignoreBeforeTime) {
			ignoreBeforeTime = ignoreBeforeTime || -9999999999;
			var a = [],
			    tween = this._first,
			    cnt = 0;
			while (tween) {
				if (tween._startTime < ignoreBeforeTime) {
					//do nothing
				} else if (tween instanceof TweenLite) {
					if (tweens !== false) {
						a[cnt++] = tween;
					}
				} else {
					if (timelines !== false) {
						a[cnt++] = tween;
					}
					if (nested !== false) {
						a = a.concat(tween.getChildren(true, tweens, timelines));
						cnt = a.length;
					}
				}
				tween = tween._next;
			}
			return a;
		};

		p.getTweensOf = function (target, nested) {
			var disabled = this._gc,
			    a = [],
			    cnt = 0,
			    tweens,
			    i;
			if (disabled) {
				this._enabled(true, true); //getTweensOf() filters out disabled tweens, and we have to mark them as _gc = true when the timeline completes in order to allow clean garbage collection, so temporarily re-enable the timeline here.
			}
			tweens = TweenLite.getTweensOf(target);
			i = tweens.length;
			while (--i > -1) {
				if (tweens[i].timeline === this || nested && this._contains(tweens[i])) {
					a[cnt++] = tweens[i];
				}
			}
			if (disabled) {
				this._enabled(false, true);
			}
			return a;
		};

		p.recent = function () {
			return this._recent;
		};

		p._contains = function (tween) {
			var tl = tween.timeline;
			while (tl) {
				if (tl === this) {
					return true;
				}
				tl = tl.timeline;
			}
			return false;
		};

		p.shiftChildren = function (amount, adjustLabels, ignoreBeforeTime) {
			ignoreBeforeTime = ignoreBeforeTime || 0;
			var tween = this._first,
			    labels = this._labels,
			    p;
			while (tween) {
				if (tween._startTime >= ignoreBeforeTime) {
					tween._startTime += amount;
				}
				tween = tween._next;
			}
			if (adjustLabels) {
				for (p in labels) {
					if (labels[p] >= ignoreBeforeTime) {
						labels[p] += amount;
					}
				}
			}
			return this._uncache(true);
		};

		p._kill = function (vars, target) {
			if (!vars && !target) {
				return this._enabled(false, false);
			}
			var tweens = !target ? this.getChildren(true, true, false) : this.getTweensOf(target),
			    i = tweens.length,
			    changed = false;
			while (--i > -1) {
				if (tweens[i]._kill(vars, target)) {
					changed = true;
				}
			}
			return changed;
		};

		p.clear = function (labels) {
			var tweens = this.getChildren(false, true, true),
			    i = tweens.length;
			this._time = this._totalTime = 0;
			while (--i > -1) {
				tweens[i]._enabled(false, false);
			}
			if (labels !== false) {
				this._labels = {};
			}
			return this._uncache(true);
		};

		p.invalidate = function () {
			var tween = this._first;
			while (tween) {
				tween.invalidate();
				tween = tween._next;
			}
			return Animation.prototype.invalidate.call(this);;
		};

		p._enabled = function (enabled, ignoreTimeline) {
			if (enabled === this._gc) {
				var tween = this._first;
				while (tween) {
					tween._enabled(enabled, true);
					tween = tween._next;
				}
			}
			return SimpleTimeline.prototype._enabled.call(this, enabled, ignoreTimeline);
		};

		p.totalTime = function (time, suppressEvents, uncapped) {
			this._forcingPlayhead = true;
			var val = Animation.prototype.totalTime.apply(this, arguments);
			this._forcingPlayhead = false;
			return val;
		};

		p.duration = function (value) {
			if (!arguments.length) {
				if (this._dirty) {
					this.totalDuration(); //just triggers recalculation
				}
				return this._duration;
			}
			if (this.duration() !== 0 && value !== 0) {
				this.timeScale(this._duration / value);
			}
			return this;
		};

		p.totalDuration = function (value) {
			if (!arguments.length) {
				if (this._dirty) {
					var max = 0,
					    tween = this._last,
					    prevStart = 999999999999,
					    prev,
					    end;
					while (tween) {
						prev = tween._prev; //record it here in case the tween changes position in the sequence...
						if (tween._dirty) {
							tween.totalDuration(); //could change the tween._startTime, so make sure the tween's cache is clean before analyzing it.
						}
						if (tween._startTime > prevStart && this._sortChildren && !tween._paused) {
							//in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
							this.add(tween, tween._startTime - tween._delay);
						} else {
							prevStart = tween._startTime;
						}
						if (tween._startTime < 0 && !tween._paused) {
							//children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
							max -= tween._startTime;
							if (this._timeline.smoothChildTiming) {
								this._startTime += tween._startTime / this._timeScale;
							}
							this.shiftChildren(-tween._startTime, false, -9999999999);
							prevStart = 0;
						}
						end = tween._startTime + tween._totalDuration / tween._timeScale;
						if (end > max) {
							max = end;
						}
						tween = prev;
					}
					this._duration = this._totalDuration = max;
					this._dirty = false;
				}
				return this._totalDuration;
			}
			return value && this.totalDuration() ? this.timeScale(this._totalDuration / value) : this;
		};

		p.paused = function (value) {
			if (!value) {
				//if there's a pause directly at the spot from where we're unpausing, skip it.
				var tween = this._first,
				    time = this._time;
				while (tween) {
					if (tween._startTime === time && tween.data === "isPause") {
						tween._rawPrevTime = 0; //remember, _rawPrevTime is how zero-duration tweens/callbacks sense directionality and determine whether or not to fire. If _rawPrevTime is the same as _startTime on the next render, it won't fire.
					}
					tween = tween._next;
				}
			}
			return Animation.prototype.paused.apply(this, arguments);
		};

		p.usesFrames = function () {
			var tl = this._timeline;
			while (tl._timeline) {
				tl = tl._timeline;
			}
			return tl === Animation._rootFramesTimeline;
		};

		p.rawTime = function (wrapRepeats) {
			return wrapRepeats && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(wrapRepeats) - this._startTime) * this._timeScale;
		};

		return TimelineLite;
	}, true);
});if (_gsScope._gsDefine) {
	_gsScope._gsQueue.pop()();
}

//export to AMD/RequireJS and CommonJS/Node (precursor to full modular build system coming at a later date)
(function (name) {
	"use strict";

	var getGlobal = function getGlobal() {
		return (_gsScope.GreenSockGlobals || _gsScope)[name];
	};
	if (true) {
		//AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(27)], __WEBPACK_AMD_DEFINE_FACTORY__ = (getGlobal),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== "undefined" && module.exports) {
		//node
		require("./TweenLite.js"); //dependency
		module.exports = getGlobal();
	}
})("TimelineLite");
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * VERSION: 1.19.1
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = typeof module !== "undefined" && module.exports && typeof global !== "undefined" ? global : undefined || window; //helps ensure compatibility with AMD/RequireJS and CommonJS/Node
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {

	"use strict";

	_gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (TweenPlugin, TweenLite) {

		/** @constructor **/
		var CSSPlugin = function CSSPlugin() {
			TweenPlugin.call(this, "css");
			this._overwriteProps.length = 0;
			this.setRatio = CSSPlugin.prototype.setRatio; //speed optimization (avoid prototype lookup on this "hot" method)
		},
		    _globals = _gsScope._gsDefine.globals,
		    _hasPriority,
		    //turns true whenever a CSSPropTween instance is created that has a priority other than 0. This helps us discern whether or not we should spend the time organizing the linked list or not after a CSSPlugin's _onInitTween() method is called.
		_suffixMap,
		    //we set this in _onInitTween() each time as a way to have a persistent variable we can use in other methods like _parse() without having to pass it around as a parameter and we keep _parse() decoupled from a particular CSSPlugin instance
		_cs,
		    //computed style (we store this in a shared variable to conserve memory and make minification tighter
		_overwriteProps,
		    //alias to the currently instantiating CSSPlugin's _overwriteProps array. We use this closure in order to avoid having to pass a reference around from method to method and aid in minification.
		_specialProps = {},
		    p = CSSPlugin.prototype = new TweenPlugin("css");

		p.constructor = CSSPlugin;
		CSSPlugin.version = "1.19.1";
		CSSPlugin.API = 2;
		CSSPlugin.defaultTransformPerspective = 0;
		CSSPlugin.defaultSkewType = "compensated";
		CSSPlugin.defaultSmoothOrigin = true;
		p = "px"; //we'll reuse the "p" variable to keep file size down
		CSSPlugin.suffixMap = { top: p, right: p, bottom: p, left: p, width: p, height: p, fontSize: p, padding: p, margin: p, perspective: p, lineHeight: "" };

		var _numExp = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
		    _relNumExp = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
		    _valuesExp = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
		    //finds all the values that begin with numbers or += or -= and then a number. Includes suffixes. We use this to split complex values apart like "1px 5px 20px rgb(255,102,51)"
		_NaNExp = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
		    //also allows scientific notation and doesn't kill the leading -/+ in -= and +=
		_suffixExp = /(?:\d|\-|\+|=|#|\.)*/g,
		    _opacityExp = /opacity *= *([^)]*)/i,
		    _opacityValExp = /opacity:([^;]*)/i,
		    _alphaFilterExp = /alpha\(opacity *=.+?\)/i,
		    _rgbhslExp = /^(rgb|hsl)/,
		    _capsExp = /([A-Z])/g,
		    _camelExp = /-([a-z])/gi,
		    _urlExp = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
		    //for pulling out urls from url(...) or url("...") strings (some browsers wrap urls in quotes, some don't when reporting things like backgroundImage)
		_camelFunc = function _camelFunc(s, g) {
			return g.toUpperCase();
		},
		    _horizExp = /(?:Left|Right|Width)/i,
		    _ieGetMatrixExp = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
		    _ieSetMatrixExp = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
		    _commasOutsideParenExp = /,(?=[^\)]*(?:\(|$))/gi,
		    //finds any commas that are not within parenthesis
		_complexExp = /[\s,\(]/i,
		    //for testing a string to find if it has a space, comma, or open parenthesis (clues that it's a complex value)
		_DEG2RAD = Math.PI / 180,
		    _RAD2DEG = 180 / Math.PI,
		    _forcePT = {},
		    _dummyElement = { style: {} },
		    _doc = _gsScope.document || { createElement: function createElement() {
				return _dummyElement;
			} },
		    _createElement = function _createElement(type, ns) {
			return _doc.createElementNS ? _doc.createElementNS(ns || "http://www.w3.org/1999/xhtml", type) : _doc.createElement(type);
		},
		    _tempDiv = _createElement("div"),
		    _tempImg = _createElement("img"),
		    _internals = CSSPlugin._internals = { _specialProps: _specialProps },
		    //provides a hook to a few internal methods that we need to access from inside other plugins
		_agent = (_gsScope.navigator || {}).userAgent || "",
		    _autoRound,
		    _reqSafariFix,
		    //we won't apply the Safari transform fix until we actually come across a tween that affects a transform property (to maintain best performance).

		_isSafari,
		    _isFirefox,
		    //Firefox has a bug that causes 3D transformed elements to randomly disappear unless a repaint is forced after each update on each element.
		_isSafariLT6,
		    //Safari (and Android 4 which uses a flavor of Safari) has a bug that prevents changes to "top" and "left" properties from rendering properly if changed on the same frame as a transform UNLESS we set the element's WebkitBackfaceVisibility to hidden (weird, I know). Doing this for Android 3 and earlier seems to actually cause other problems, though (fun!)
		_ieVers,
		    _supportsOpacity = function () {
			//we set _isSafari, _ieVers, _isFirefox, and _supportsOpacity all in one function here to reduce file size slightly, especially in the minified version.
			var i = _agent.indexOf("Android"),
			    a = _createElement("a");
			_isSafari = _agent.indexOf("Safari") !== -1 && _agent.indexOf("Chrome") === -1 && (i === -1 || parseFloat(_agent.substr(i + 8, 2)) > 3);
			_isSafariLT6 = _isSafari && parseFloat(_agent.substr(_agent.indexOf("Version/") + 8, 2)) < 6;
			_isFirefox = _agent.indexOf("Firefox") !== -1;
			if (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(_agent) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(_agent)) {
				_ieVers = parseFloat(RegExp.$1);
			}
			if (!a) {
				return false;
			}
			a.style.cssText = "top:1px;opacity:.55;";
			return (/^0.55/.test(a.style.opacity)
			);
		}(),
		    _getIEOpacity = function _getIEOpacity(v) {
			return _opacityExp.test(typeof v === "string" ? v : (v.currentStyle ? v.currentStyle.filter : v.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
		},
		    _log = function _log(s) {
			//for logging messages, but in a way that won't throw errors in old versions of IE.
			if (_gsScope.console) {
				console.log(s);
			}
		},
		    _target,
		    //when initting a CSSPlugin, we set this variable so that we can access it from within many other functions without having to pass it around as params
		_index,
		    //when initting a CSSPlugin, we set this variable so that we can access it from within many other functions without having to pass it around as params

		_prefixCSS = "",
		    //the non-camelCase vendor prefix like "-o-", "-moz-", "-ms-", or "-webkit-"
		_prefix = "",
		    //camelCase vendor prefix like "O", "ms", "Webkit", or "Moz".

		// @private feed in a camelCase property name like "transform" and it will check to see if it is valid as-is or if it needs a vendor prefix. It returns the corrected camelCase property name (i.e. "WebkitTransform" or "MozTransform" or "transform" or null if no such property is found, like if the browser is IE8 or before, "transform" won't be found at all)
		_checkPropPrefix = function _checkPropPrefix(p, e) {
			e = e || _tempDiv;
			var s = e.style,
			    a,
			    i;
			if (s[p] !== undefined) {
				return p;
			}
			p = p.charAt(0).toUpperCase() + p.substr(1);
			a = ["O", "Moz", "ms", "Ms", "Webkit"];
			i = 5;
			while (--i > -1 && s[a[i] + p] === undefined) {}
			if (i >= 0) {
				_prefix = i === 3 ? "ms" : a[i];
				_prefixCSS = "-" + _prefix.toLowerCase() + "-";
				return _prefix + p;
			}
			return null;
		},
		    _getComputedStyle = _doc.defaultView ? _doc.defaultView.getComputedStyle : function () {},


		/**
   * @private Returns the css style for a particular property of an element. For example, to get whatever the current "left" css value for an element with an ID of "myElement", you could do:
   * var currentLeft = CSSPlugin.getStyle( document.getElementById("myElement"), "left");
   *
   * @param {!Object} t Target element whose style property you want to query
   * @param {!string} p Property name (like "left" or "top" or "marginTop", etc.)
   * @param {Object=} cs Computed style object. This just provides a way to speed processing if you're going to get several properties on the same element in quick succession - you can reuse the result of the getComputedStyle() call.
   * @param {boolean=} calc If true, the value will not be read directly from the element's "style" property (if it exists there), but instead the getComputedStyle() result will be used. This can be useful when you want to ensure that the browser itself is interpreting the value.
   * @param {string=} dflt Default value that should be returned in the place of null, "none", "auto" or "auto auto".
   * @return {?string} The current property value
   */
		_getStyle = CSSPlugin.getStyle = function (t, p, cs, calc, dflt) {
			var rv;
			if (!_supportsOpacity) if (p === "opacity") {
				//several versions of IE don't use the standard "opacity" property - they use things like filter:alpha(opacity=50), so we parse that here.
				return _getIEOpacity(t);
			}
			if (!calc && t.style[p]) {
				rv = t.style[p];
			} else if (cs = cs || _getComputedStyle(t)) {
				rv = cs[p] || cs.getPropertyValue(p) || cs.getPropertyValue(p.replace(_capsExp, "-$1").toLowerCase());
			} else if (t.currentStyle) {
				rv = t.currentStyle[p];
			}
			return dflt != null && (!rv || rv === "none" || rv === "auto" || rv === "auto auto") ? dflt : rv;
		},


		/**
   * @private Pass the target element, the property name, the numeric value, and the suffix (like "%", "em", "px", etc.) and it will spit back the equivalent pixel number.
   * @param {!Object} t Target element
   * @param {!string} p Property name (like "left", "top", "marginLeft", etc.)
   * @param {!number} v Value
   * @param {string=} sfx Suffix (like "px" or "%" or "em")
   * @param {boolean=} recurse If true, the call is a recursive one. In some browsers (like IE7/8), occasionally the value isn't accurately reported initially, but if we run the function again it will take effect.
   * @return {number} value in pixels
   */
		_convertToPixels = _internals.convertToPixels = function (t, p, v, sfx, recurse) {
			if (sfx === "px" || !sfx) {
				return v;
			}
			if (sfx === "auto" || !v) {
				return 0;
			}
			var horiz = _horizExp.test(p),
			    node = t,
			    style = _tempDiv.style,
			    neg = v < 0,
			    precise = v === 1,
			    pix,
			    cache,
			    time;
			if (neg) {
				v = -v;
			}
			if (precise) {
				v *= 100;
			}
			if (sfx === "%" && p.indexOf("border") !== -1) {
				pix = v / 100 * (horiz ? t.clientWidth : t.clientHeight);
			} else {
				style.cssText = "border:0 solid red;position:" + _getStyle(t, "position") + ";line-height:0;";
				if (sfx === "%" || !node.appendChild || sfx.charAt(0) === "v" || sfx === "rem") {
					node = t.parentNode || _doc.body;
					cache = node._gsCache;
					time = TweenLite.ticker.frame;
					if (cache && horiz && cache.time === time) {
						//performance optimization: we record the width of elements along with the ticker frame so that we can quickly get it again on the same tick (seems relatively safe to assume it wouldn't change on the same tick)
						return cache.width * v / 100;
					}
					style[horiz ? "width" : "height"] = v + sfx;
				} else {
					style[horiz ? "borderLeftWidth" : "borderTopWidth"] = v + sfx;
				}
				node.appendChild(_tempDiv);
				pix = parseFloat(_tempDiv[horiz ? "offsetWidth" : "offsetHeight"]);
				node.removeChild(_tempDiv);
				if (horiz && sfx === "%" && CSSPlugin.cacheWidths !== false) {
					cache = node._gsCache = node._gsCache || {};
					cache.time = time;
					cache.width = pix / v * 100;
				}
				if (pix === 0 && !recurse) {
					pix = _convertToPixels(t, p, v, sfx, true);
				}
			}
			if (precise) {
				pix /= 100;
			}
			return neg ? -pix : pix;
		},
		    _calculateOffset = _internals.calculateOffset = function (t, p, cs) {
			//for figuring out "top" or "left" in px when it's "auto". We need to factor in margin with the offsetLeft/offsetTop
			if (_getStyle(t, "position", cs) !== "absolute") {
				return 0;
			}
			var dim = p === "left" ? "Left" : "Top",
			    v = _getStyle(t, "margin" + dim, cs);
			return t["offset" + dim] - (_convertToPixels(t, p, parseFloat(v), v.replace(_suffixExp, "")) || 0);
		},


		// @private returns at object containing ALL of the style properties in camelCase and their associated values.
		_getAllStyles = function _getAllStyles(t, cs) {
			var s = {},
			    i,
			    tr,
			    p;
			if (cs = cs || _getComputedStyle(t, null)) {
				if (i = cs.length) {
					while (--i > -1) {
						p = cs[i];
						if (p.indexOf("-transform") === -1 || _transformPropCSS === p) {
							//Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
							s[p.replace(_camelExp, _camelFunc)] = cs.getPropertyValue(p);
						}
					}
				} else {
					//some browsers behave differently - cs.length is always 0, so we must do a for...in loop.
					for (i in cs) {
						if (i.indexOf("Transform") === -1 || _transformProp === i) {
							//Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
							s[i] = cs[i];
						}
					}
				}
			} else if (cs = t.currentStyle || t.style) {
				for (i in cs) {
					if (typeof i === "string" && s[i] === undefined) {
						s[i.replace(_camelExp, _camelFunc)] = cs[i];
					}
				}
			}
			if (!_supportsOpacity) {
				s.opacity = _getIEOpacity(t);
			}
			tr = _getTransform(t, cs, false);
			s.rotation = tr.rotation;
			s.skewX = tr.skewX;
			s.scaleX = tr.scaleX;
			s.scaleY = tr.scaleY;
			s.x = tr.x;
			s.y = tr.y;
			if (_supports3D) {
				s.z = tr.z;
				s.rotationX = tr.rotationX;
				s.rotationY = tr.rotationY;
				s.scaleZ = tr.scaleZ;
			}
			if (s.filters) {
				delete s.filters;
			}
			return s;
		},


		// @private analyzes two style objects (as returned by _getAllStyles()) and only looks for differences between them that contain tweenable values (like a number or color). It returns an object with a "difs" property which refers to an object containing only those isolated properties and values for tweening, and a "firstMPT" property which refers to the first MiniPropTween instance in a linked list that recorded all the starting values of the different properties so that we can revert to them at the end or beginning of the tween - we don't want the cascading to get messed up. The forceLookup parameter is an optional generic object with properties that should be forced into the results - this is necessary for className tweens that are overwriting others because imagine a scenario where a rollover/rollout adds/removes a class and the user swipes the mouse over the target SUPER fast, thus nothing actually changed yet and the subsequent comparison of the properties would indicate they match (especially when px rounding is taken into consideration), thus no tweening is necessary even though it SHOULD tween and remove those properties after the tween (otherwise the inline styles will contaminate things). See the className SpecialProp code for details.
		_cssDif = function _cssDif(t, s1, s2, vars, forceLookup) {
			var difs = {},
			    style = t.style,
			    val,
			    p,
			    mpt;
			for (p in s2) {
				if (p !== "cssText") if (p !== "length") if (isNaN(p)) if (s1[p] !== (val = s2[p]) || forceLookup && forceLookup[p]) if (p.indexOf("Origin") === -1) if (typeof val === "number" || typeof val === "string") {
					difs[p] = val === "auto" && (p === "left" || p === "top") ? _calculateOffset(t, p) : (val === "" || val === "auto" || val === "none") && typeof s1[p] === "string" && s1[p].replace(_NaNExp, "") !== "" ? 0 : val; //if the ending value is defaulting ("" or "auto"), we check the starting value and if it can be parsed into a number (a string which could have a suffix too, like 700px), then we swap in 0 for "" or "auto" so that things actually tween.
					if (style[p] !== undefined) {
						//for className tweens, we must remember which properties already existed inline - the ones that didn't should be removed when the tween isn't in progress because they were only introduced to facilitate the transition between classes.
						mpt = new MiniPropTween(style, p, style[p], mpt);
					}
				}
			}
			if (vars) {
				for (p in vars) {
					//copy properties (except className)
					if (p !== "className") {
						difs[p] = vars[p];
					}
				}
			}
			return { difs: difs, firstMPT: mpt };
		},
		    _dimensions = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
		    _margins = ["marginLeft", "marginRight", "marginTop", "marginBottom"],


		/**
   * @private Gets the width or height of an element
   * @param {!Object} t Target element
   * @param {!string} p Property name ("width" or "height")
   * @param {Object=} cs Computed style object (if one exists). Just a speed optimization.
   * @return {number} Dimension (in pixels)
   */
		_getDimension = function _getDimension(t, p, cs) {
			if ((t.nodeName + "").toLowerCase() === "svg") {
				//Chrome no longer supports offsetWidth/offsetHeight on SVG elements.
				return (cs || _getComputedStyle(t))[p] || 0;
			} else if (t.getCTM && _isSVG(t)) {
				return t.getBBox()[p] || 0;
			}
			var v = parseFloat(p === "width" ? t.offsetWidth : t.offsetHeight),
			    a = _dimensions[p],
			    i = a.length;
			cs = cs || _getComputedStyle(t, null);
			while (--i > -1) {
				v -= parseFloat(_getStyle(t, "padding" + a[i], cs, true)) || 0;
				v -= parseFloat(_getStyle(t, "border" + a[i] + "Width", cs, true)) || 0;
			}
			return v;
		},


		// @private Parses position-related complex strings like "top left" or "50px 10px" or "70% 20%", etc. which are used for things like transformOrigin or backgroundPosition. Optionally decorates a supplied object (recObj) with the following properties: "ox" (offsetX), "oy" (offsetY), "oxp" (if true, "ox" is a percentage not a pixel value), and "oxy" (if true, "oy" is a percentage not a pixel value)
		_parsePosition = function _parsePosition(v, recObj) {
			if (v === "contain" || v === "auto" || v === "auto auto") {
				//note: Firefox uses "auto auto" as default whereas Chrome uses "auto".
				return v + " ";
			}
			if (v == null || v === "") {
				v = "0 0";
			}
			var a = v.split(" "),
			    x = v.indexOf("left") !== -1 ? "0%" : v.indexOf("right") !== -1 ? "100%" : a[0],
			    y = v.indexOf("top") !== -1 ? "0%" : v.indexOf("bottom") !== -1 ? "100%" : a[1],
			    i;
			if (a.length > 3 && !recObj) {
				//multiple positions
				a = v.split(", ").join(",").split(",");
				v = [];
				for (i = 0; i < a.length; i++) {
					v.push(_parsePosition(a[i]));
				}
				return v.join(",");
			}
			if (y == null) {
				y = x === "center" ? "50%" : "0";
			} else if (y === "center") {
				y = "50%";
			}
			if (x === "center" || isNaN(parseFloat(x)) && (x + "").indexOf("=") === -1) {
				//remember, the user could flip-flop the values and say "bottom center" or "center bottom", etc. "center" is ambiguous because it could be used to describe horizontal or vertical, hence the isNaN(). If there's an "=" sign in the value, it's relative.
				x = "50%";
			}
			v = x + " " + y + (a.length > 2 ? " " + a[2] : "");
			if (recObj) {
				recObj.oxp = x.indexOf("%") !== -1;
				recObj.oyp = y.indexOf("%") !== -1;
				recObj.oxr = x.charAt(1) === "=";
				recObj.oyr = y.charAt(1) === "=";
				recObj.ox = parseFloat(x.replace(_NaNExp, ""));
				recObj.oy = parseFloat(y.replace(_NaNExp, ""));
				recObj.v = v;
			}
			return recObj || v;
		},


		/**
   * @private Takes an ending value (typically a string, but can be a number) and a starting value and returns the change between the two, looking for relative value indicators like += and -= and it also ignores suffixes (but make sure the ending value starts with a number or +=/-= and that the starting value is a NUMBER!)
   * @param {(number|string)} e End value which is typically a string, but could be a number
   * @param {(number|string)} b Beginning value which is typically a string but could be a number
   * @return {number} Amount of change between the beginning and ending values (relative values that have a "+=" or "-=" are recognized)
   */
		_parseChange = function _parseChange(e, b) {
			if (typeof e === "function") {
				e = e(_index, _target);
			}
			return typeof e === "string" && e.charAt(1) === "=" ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(b) || 0;
		},


		/**
   * @private Takes a value and a default number, checks if the value is relative, null, or numeric and spits back a normalized number accordingly. Primarily used in the _parseTransform() function.
   * @param {Object} v Value to be parsed
   * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
   * @return {number} Parsed value
   */
		_parseVal = function _parseVal(v, d) {
			if (typeof v === "function") {
				v = v(_index, _target);
			}
			return v == null ? d : typeof v === "string" && v.charAt(1) === "=" ? parseInt(v.charAt(0) + "1", 10) * parseFloat(v.substr(2)) + d : parseFloat(v) || 0;
		},


		/**
   * @private Translates strings like "40deg" or "40" or 40rad" or "+=40deg" or "270_short" or "-90_cw" or "+=45_ccw" to a numeric radian angle. Of course a starting/default value must be fed in too so that relative values can be calculated properly.
   * @param {Object} v Value to be parsed
   * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
   * @param {string=} p property name for directionalEnd (optional - only used when the parsed value is directional ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation). Property name would be "rotation", "rotationX", or "rotationY"
   * @param {Object=} directionalEnd An object that will store the raw end values for directional angles ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation.
   * @return {number} parsed angle in radians
   */
		_parseAngle = function _parseAngle(v, d, p, directionalEnd) {
			var min = 0.000001,
			    cap,
			    split,
			    dif,
			    result,
			    isRelative;
			if (typeof v === "function") {
				v = v(_index, _target);
			}
			if (v == null) {
				result = d;
			} else if (typeof v === "number") {
				result = v;
			} else {
				cap = 360;
				split = v.split("_");
				isRelative = v.charAt(1) === "=";
				dif = (isRelative ? parseInt(v.charAt(0) + "1", 10) * parseFloat(split[0].substr(2)) : parseFloat(split[0])) * (v.indexOf("rad") === -1 ? 1 : _RAD2DEG) - (isRelative ? 0 : d);
				if (split.length) {
					if (directionalEnd) {
						directionalEnd[p] = d + dif;
					}
					if (v.indexOf("short") !== -1) {
						dif = dif % cap;
						if (dif !== dif % (cap / 2)) {
							dif = dif < 0 ? dif + cap : dif - cap;
						}
					}
					if (v.indexOf("_cw") !== -1 && dif < 0) {
						dif = (dif + cap * 9999999999) % cap - (dif / cap | 0) * cap;
					} else if (v.indexOf("ccw") !== -1 && dif > 0) {
						dif = (dif - cap * 9999999999) % cap - (dif / cap | 0) * cap;
					}
				}
				result = d + dif;
			}
			if (result < min && result > -min) {
				result = 0;
			}
			return result;
		},
		    _colorLookup = { aqua: [0, 255, 255],
			lime: [0, 255, 0],
			silver: [192, 192, 192],
			black: [0, 0, 0],
			maroon: [128, 0, 0],
			teal: [0, 128, 128],
			blue: [0, 0, 255],
			navy: [0, 0, 128],
			white: [255, 255, 255],
			fuchsia: [255, 0, 255],
			olive: [128, 128, 0],
			yellow: [255, 255, 0],
			orange: [255, 165, 0],
			gray: [128, 128, 128],
			purple: [128, 0, 128],
			green: [0, 128, 0],
			red: [255, 0, 0],
			pink: [255, 192, 203],
			cyan: [0, 255, 255],
			transparent: [255, 255, 255, 0] },
		    _hue = function _hue(h, m1, m2) {
			h = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
			return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * 255 + 0.5 | 0;
		},


		/**
   * @private Parses a color (like #9F0, #FF9900, rgb(255,51,153) or hsl(108, 50%, 10%)) into an array with 3 elements for red, green, and blue or if toHSL parameter is true, it will populate the array with hue, saturation, and lightness values. If a relative value is found in an hsl() or hsla() string, it will preserve those relative prefixes and all the values in the array will be strings instead of numbers (in all other cases it will be populated with numbers).
   * @param {(string|number)} v The value the should be parsed which could be a string like #9F0 or rgb(255,102,51) or rgba(255,0,0,0.5) or it could be a number like 0xFF00CC or even a named color like red, blue, purple, etc.
   * @param {(boolean)} toHSL If true, an hsl() or hsla() value will be returned instead of rgb() or rgba()
   * @return {Array.<number>} An array containing red, green, and blue (and optionally alpha) in that order, or if the toHSL parameter was true, the array will contain hue, saturation and lightness (and optionally alpha) in that order. Always numbers unless there's a relative prefix found in an hsl() or hsla() string and toHSL is true.
   */
		_parseColor = CSSPlugin.parseColor = function (v, toHSL) {
			var a, r, g, b, h, s, l, max, min, d, wasHSL;
			if (!v) {
				a = _colorLookup.black;
			} else if (typeof v === "number") {
				a = [v >> 16, v >> 8 & 255, v & 255];
			} else {
				if (v.charAt(v.length - 1) === ",") {
					//sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
					v = v.substr(0, v.length - 1);
				}
				if (_colorLookup[v]) {
					a = _colorLookup[v];
				} else if (v.charAt(0) === "#") {
					if (v.length === 4) {
						//for shorthand like #9F0
						r = v.charAt(1);
						g = v.charAt(2);
						b = v.charAt(3);
						v = "#" + r + r + g + g + b + b;
					}
					v = parseInt(v.substr(1), 16);
					a = [v >> 16, v >> 8 & 255, v & 255];
				} else if (v.substr(0, 3) === "hsl") {
					a = wasHSL = v.match(_numExp);
					if (!toHSL) {
						h = Number(a[0]) % 360 / 360;
						s = Number(a[1]) / 100;
						l = Number(a[2]) / 100;
						g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
						r = l * 2 - g;
						if (a.length > 3) {
							a[3] = Number(v[3]);
						}
						a[0] = _hue(h + 1 / 3, r, g);
						a[1] = _hue(h, r, g);
						a[2] = _hue(h - 1 / 3, r, g);
					} else if (v.indexOf("=") !== -1) {
						//if relative values are found, just return the raw strings with the relative prefixes in place.
						return v.match(_relNumExp);
					}
				} else {
					a = v.match(_numExp) || _colorLookup.transparent;
				}
				a[0] = Number(a[0]);
				a[1] = Number(a[1]);
				a[2] = Number(a[2]);
				if (a.length > 3) {
					a[3] = Number(a[3]);
				}
			}
			if (toHSL && !wasHSL) {
				r = a[0] / 255;
				g = a[1] / 255;
				b = a[2] / 255;
				max = Math.max(r, g, b);
				min = Math.min(r, g, b);
				l = (max + min) / 2;
				if (max === min) {
					h = s = 0;
				} else {
					d = max - min;
					s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
					h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
					h *= 60;
				}
				a[0] = h + 0.5 | 0;
				a[1] = s * 100 + 0.5 | 0;
				a[2] = l * 100 + 0.5 | 0;
			}
			return a;
		},
		    _formatColors = function _formatColors(s, toHSL) {
			var colors = s.match(_colorExp) || [],
			    charIndex = 0,
			    parsed = colors.length ? "" : s,
			    i,
			    color,
			    temp;
			for (i = 0; i < colors.length; i++) {
				color = colors[i];
				temp = s.substr(charIndex, s.indexOf(color, charIndex) - charIndex);
				charIndex += temp.length + color.length;
				color = _parseColor(color, toHSL);
				if (color.length === 3) {
					color.push(1);
				}
				parsed += temp + (toHSL ? "hsla(" + color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : "rgba(" + color.join(",")) + ")";
			}
			return parsed + s.substr(charIndex);
		},
		    _colorExp = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b"; //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.

		for (p in _colorLookup) {
			_colorExp += "|" + p + "\\b";
		}
		_colorExp = new RegExp(_colorExp + ")", "gi");

		CSSPlugin.colorStringFilter = function (a) {
			var combined = a[0] + a[1],
			    toHSL;
			if (_colorExp.test(combined)) {
				toHSL = combined.indexOf("hsl(") !== -1 || combined.indexOf("hsla(") !== -1;
				a[0] = _formatColors(a[0], toHSL);
				a[1] = _formatColors(a[1], toHSL);
			}
			_colorExp.lastIndex = 0;
		};

		if (!TweenLite.defaultStringFilter) {
			TweenLite.defaultStringFilter = CSSPlugin.colorStringFilter;
		}

		/**
   * @private Returns a formatter function that handles taking a string (or number in some cases) and returning a consistently formatted one in terms of delimiters, quantity of values, etc. For example, we may get boxShadow values defined as "0px red" or "0px 0px 10px rgb(255,0,0)" or "0px 0px 20px 20px #F00" and we need to ensure that what we get back is described with 4 numbers and a color. This allows us to feed it into the _parseComplex() method and split the values up appropriately. The neat thing about this _getFormatter() function is that the dflt defines a pattern as well as a default, so for example, _getFormatter("0px 0px 0px 0px #777", true) not only sets the default as 0px for all distances and #777 for the color, but also sets the pattern such that 4 numbers and a color will always get returned.
   * @param {!string} dflt The default value and pattern to follow. So "0px 0px 0px 0px #777" will ensure that 4 numbers and a color will always get returned.
   * @param {boolean=} clr If true, the values should be searched for color-related data. For example, boxShadow values typically contain a color whereas borderRadius don't.
   * @param {boolean=} collapsible If true, the value is a top/left/right/bottom style one that acts like margin or padding, where if only one value is received, it's used for all 4; if 2 are received, the first is duplicated for 3rd (bottom) and the 2nd is duplicated for the 4th spot (left), etc.
   * @return {Function} formatter function
   */
		var _getFormatter = function _getFormatter(dflt, clr, collapsible, multi) {
			if (dflt == null) {
				return function (v) {
					return v;
				};
			}
			var dColor = clr ? (dflt.match(_colorExp) || [""])[0] : "",
			    dVals = dflt.split(dColor).join("").match(_valuesExp) || [],
			    pfx = dflt.substr(0, dflt.indexOf(dVals[0])),
			    sfx = dflt.charAt(dflt.length - 1) === ")" ? ")" : "",
			    delim = dflt.indexOf(" ") !== -1 ? " " : ",",
			    numVals = dVals.length,
			    dSfx = numVals > 0 ? dVals[0].replace(_numExp, "") : "",
			    _formatter2;
			if (!numVals) {
				return function (v) {
					return v;
				};
			}
			if (clr) {
				_formatter2 = function formatter(v) {
					var color, vals, i, a;
					if (typeof v === "number") {
						v += dSfx;
					} else if (multi && _commasOutsideParenExp.test(v)) {
						a = v.replace(_commasOutsideParenExp, "|").split("|");
						for (i = 0; i < a.length; i++) {
							a[i] = _formatter2(a[i]);
						}
						return a.join(",");
					}
					color = (v.match(_colorExp) || [dColor])[0];
					vals = v.split(color).join("").match(_valuesExp) || [];
					i = vals.length;
					if (numVals > i--) {
						while (++i < numVals) {
							vals[i] = collapsible ? vals[(i - 1) / 2 | 0] : dVals[i];
						}
					}
					return pfx + vals.join(delim) + delim + color + sfx + (v.indexOf("inset") !== -1 ? " inset" : "");
				};
				return _formatter2;
			}
			_formatter2 = function _formatter(v) {
				var vals, a, i;
				if (typeof v === "number") {
					v += dSfx;
				} else if (multi && _commasOutsideParenExp.test(v)) {
					a = v.replace(_commasOutsideParenExp, "|").split("|");
					for (i = 0; i < a.length; i++) {
						a[i] = _formatter2(a[i]);
					}
					return a.join(",");
				}
				vals = v.match(_valuesExp) || [];
				i = vals.length;
				if (numVals > i--) {
					while (++i < numVals) {
						vals[i] = collapsible ? vals[(i - 1) / 2 | 0] : dVals[i];
					}
				}
				return pfx + vals.join(delim) + sfx;
			};
			return _formatter2;
		},


		/**
   * @private returns a formatter function that's used for edge-related values like marginTop, marginLeft, paddingBottom, paddingRight, etc. Just pass a comma-delimited list of property names related to the edges.
   * @param {!string} props a comma-delimited list of property names in order from top to left, like "marginTop,marginRight,marginBottom,marginLeft"
   * @return {Function} a formatter function
   */
		_getEdgeParser = function _getEdgeParser(props) {
			props = props.split(",");
			return function (t, e, p, cssp, pt, plugin, vars) {
				var a = (e + "").split(" "),
				    i;
				vars = {};
				for (i = 0; i < 4; i++) {
					vars[props[i]] = a[i] = a[i] || a[(i - 1) / 2 >> 0];
				}
				return cssp.parse(t, vars, pt, plugin);
			};
		},


		// @private used when other plugins must tween values first, like BezierPlugin or ThrowPropsPlugin, etc. That plugin's setRatio() gets called first so that the values are updated, and then we loop through the MiniPropTweens which handle copying the values into their appropriate slots so that they can then be applied correctly in the main CSSPlugin setRatio() method. Remember, we typically create a proxy object that has a bunch of uniquely-named properties that we feed to the sub-plugin and it does its magic normally, and then we must interpret those values and apply them to the css because often numbers must get combined/concatenated, suffixes added, etc. to work with css, like boxShadow could have 4 values plus a color.
		_setPluginRatio = _internals._setPluginRatio = function (v) {
			this.plugin.setRatio(v);
			var d = this.data,
			    proxy = d.proxy,
			    mpt = d.firstMPT,
			    min = 0.000001,
			    val,
			    pt,
			    i,
			    str,
			    p;
			while (mpt) {
				val = proxy[mpt.v];
				if (mpt.r) {
					val = Math.round(val);
				} else if (val < min && val > -min) {
					val = 0;
				}
				mpt.t[mpt.p] = val;
				mpt = mpt._next;
			}
			if (d.autoRotate) {
				d.autoRotate.rotation = d.mod ? d.mod(proxy.rotation, this.t) : proxy.rotation; //special case for ModifyPlugin to hook into an auto-rotating bezier
			}
			//at the end, we must set the CSSPropTween's "e" (end) value dynamically here because that's what is used in the final setRatio() method. Same for "b" at the beginning.
			if (v === 1 || v === 0) {
				mpt = d.firstMPT;
				p = v === 1 ? "e" : "b";
				while (mpt) {
					pt = mpt.t;
					if (!pt.type) {
						pt[p] = pt.s + pt.xs0;
					} else if (pt.type === 1) {
						str = pt.xs0 + pt.s + pt.xs1;
						for (i = 1; i < pt.l; i++) {
							str += pt["xn" + i] + pt["xs" + (i + 1)];
						}
						pt[p] = str;
					}
					mpt = mpt._next;
				}
			}
		},


		/**
   * @private @constructor Used by a few SpecialProps to hold important values for proxies. For example, _parseToProxy() creates a MiniPropTween instance for each property that must get tweened on the proxy, and we record the original property name as well as the unique one we create for the proxy, plus whether or not the value needs to be rounded plus the original value.
   * @param {!Object} t target object whose property we're tweening (often a CSSPropTween)
   * @param {!string} p property name
   * @param {(number|string|object)} v value
   * @param {MiniPropTween=} next next MiniPropTween in the linked list
   * @param {boolean=} r if true, the tweened value should be rounded to the nearest integer
   */
		MiniPropTween = function MiniPropTween(t, p, v, next, r) {
			this.t = t;
			this.p = p;
			this.v = v;
			this.r = r;
			if (next) {
				next._prev = this;
				this._next = next;
			}
		},


		/**
   * @private Most other plugins (like BezierPlugin and ThrowPropsPlugin and others) can only tween numeric values, but CSSPlugin must accommodate special values that have a bunch of extra data (like a suffix or strings between numeric values, etc.). For example, boxShadow has values like "10px 10px 20px 30px rgb(255,0,0)" which would utterly confuse other plugins. This method allows us to split that data apart and grab only the numeric data and attach it to uniquely-named properties of a generic proxy object ({}) so that we can feed that to virtually any plugin to have the numbers tweened. However, we must also keep track of which properties from the proxy go with which CSSPropTween values and instances. So we create a linked list of MiniPropTweens. Each one records a target (the original CSSPropTween), property (like "s" or "xn1" or "xn2") that we're tweening and the unique property name that was used for the proxy (like "boxShadow_xn1" and "boxShadow_xn2") and whether or not they need to be rounded. That way, in the _setPluginRatio() method we can simply copy the values over from the proxy to the CSSPropTween instance(s). Then, when the main CSSPlugin setRatio() method runs and applies the CSSPropTween values accordingly, they're updated nicely. So the external plugin tweens the numbers, _setPluginRatio() copies them over, and setRatio() acts normally, applying css-specific values to the element.
   * This method returns an object that has the following properties:
   *  - proxy: a generic object containing the starting values for all the properties that will be tweened by the external plugin.  This is what we feed to the external _onInitTween() as the target
   *  - end: a generic object containing the ending values for all the properties that will be tweened by the external plugin. This is what we feed to the external plugin's _onInitTween() as the destination values
   *  - firstMPT: the first MiniPropTween in the linked list
   *  - pt: the first CSSPropTween in the linked list that was created when parsing. If shallow is true, this linked list will NOT attach to the one passed into the _parseToProxy() as the "pt" (4th) parameter.
   * @param {!Object} t target object to be tweened
   * @param {!(Object|string)} vars the object containing the information about the tweening values (typically the end/destination values) that should be parsed
   * @param {!CSSPlugin} cssp The CSSPlugin instance
   * @param {CSSPropTween=} pt the next CSSPropTween in the linked list
   * @param {TweenPlugin=} plugin the external TweenPlugin instance that will be handling tweening the numeric values
   * @param {boolean=} shallow if true, the resulting linked list from the parse will NOT be attached to the CSSPropTween that was passed in as the "pt" (4th) parameter.
   * @return An object containing the following properties: proxy, end, firstMPT, and pt (see above for descriptions)
   */
		_parseToProxy = _internals._parseToProxy = function (t, vars, cssp, pt, plugin, shallow) {
			var bpt = pt,
			    start = {},
			    end = {},
			    transform = cssp._transform,
			    oldForce = _forcePT,
			    i,
			    p,
			    xp,
			    mpt,
			    firstPT;
			cssp._transform = null;
			_forcePT = vars;
			pt = firstPT = cssp.parse(t, vars, pt, plugin);
			_forcePT = oldForce;
			//break off from the linked list so the new ones are isolated.
			if (shallow) {
				cssp._transform = transform;
				if (bpt) {
					bpt._prev = null;
					if (bpt._prev) {
						bpt._prev._next = null;
					}
				}
			}
			while (pt && pt !== bpt) {
				if (pt.type <= 1) {
					p = pt.p;
					end[p] = pt.s + pt.c;
					start[p] = pt.s;
					if (!shallow) {
						mpt = new MiniPropTween(pt, "s", p, mpt, pt.r);
						pt.c = 0;
					}
					if (pt.type === 1) {
						i = pt.l;
						while (--i > 0) {
							xp = "xn" + i;
							p = pt.p + "_" + xp;
							end[p] = pt.data[xp];
							start[p] = pt[xp];
							if (!shallow) {
								mpt = new MiniPropTween(pt, xp, p, mpt, pt.rxp[xp]);
							}
						}
					}
				}
				pt = pt._next;
			}
			return { proxy: start, end: end, firstMPT: mpt, pt: firstPT };
		},


		/**
   * @constructor Each property that is tweened has at least one CSSPropTween associated with it. These instances store important information like the target, property, starting value, amount of change, etc. They can also optionally have a number of "extra" strings and numeric values named xs1, xn1, xs2, xn2, xs3, xn3, etc. where "s" indicates string and "n" indicates number. These can be pieced together in a complex-value tween (type:1) that has alternating types of data like a string, number, string, number, etc. For example, boxShadow could be "5px 5px 8px rgb(102, 102, 51)". In that value, there are 6 numbers that may need to tween and then pieced back together into a string again with spaces, suffixes, etc. xs0 is special in that it stores the suffix for standard (type:0) tweens, -OR- the first string (prefix) in a complex-value (type:1) CSSPropTween -OR- it can be the non-tweening value in a type:-1 CSSPropTween. We do this to conserve memory.
   * CSSPropTweens have the following optional properties as well (not defined through the constructor):
   *  - l: Length in terms of the number of extra properties that the CSSPropTween has (default: 0). For example, for a boxShadow we may need to tween 5 numbers in which case l would be 5; Keep in mind that the start/end values for the first number that's tweened are always stored in the s and c properties to conserve memory. All additional values thereafter are stored in xn1, xn2, etc.
   *  - xfirst: The first instance of any sub-CSSPropTweens that are tweening properties of this instance. For example, we may split up a boxShadow tween so that there's a main CSSPropTween of type:1 that has various xs* and xn* values associated with the h-shadow, v-shadow, blur, color, etc. Then we spawn a CSSPropTween for each of those that has a higher priority and runs BEFORE the main CSSPropTween so that the values are all set by the time it needs to re-assemble them. The xfirst gives us an easy way to identify the first one in that chain which typically ends at the main one (because they're all prepende to the linked list)
   *  - plugin: The TweenPlugin instance that will handle the tweening of any complex values. For example, sometimes we don't want to use normal subtweens (like xfirst refers to) to tween the values - we might want ThrowPropsPlugin or BezierPlugin some other plugin to do the actual tweening, so we create a plugin instance and store a reference here. We need this reference so that if we get a request to round values or disable a tween, we can pass along that request.
   *  - data: Arbitrary data that needs to be stored with the CSSPropTween. Typically if we're going to have a plugin handle the tweening of a complex-value tween, we create a generic object that stores the END values that we're tweening to and the CSSPropTween's xs1, xs2, etc. have the starting values. We store that object as data. That way, we can simply pass that object to the plugin and use the CSSPropTween as the target.
   *  - setRatio: Only used for type:2 tweens that require custom functionality. In this case, we call the CSSPropTween's setRatio() method and pass the ratio each time the tween updates. This isn't quite as efficient as doing things directly in the CSSPlugin's setRatio() method, but it's very convenient and flexible.
   * @param {!Object} t Target object whose property will be tweened. Often a DOM element, but not always. It could be anything.
   * @param {string} p Property to tween (name). For example, to tween element.width, p would be "width".
   * @param {number} s Starting numeric value
   * @param {number} c Change in numeric value over the course of the entire tween. For example, if element.width starts at 5 and should end at 100, c would be 95.
   * @param {CSSPropTween=} next The next CSSPropTween in the linked list. If one is defined, we will define its _prev as the new instance, and the new instance's _next will be pointed at it.
   * @param {number=} type The type of CSSPropTween where -1 = a non-tweening value, 0 = a standard simple tween, 1 = a complex value (like one that has multiple numbers in a comma- or space-delimited string like border:"1px solid red"), and 2 = one that uses a custom setRatio function that does all of the work of applying the values on each update.
   * @param {string=} n Name of the property that should be used for overwriting purposes which is typically the same as p but not always. For example, we may need to create a subtween for the 2nd part of a "clip:rect(...)" tween in which case "p" might be xs1 but "n" is still "clip"
   * @param {boolean=} r If true, the value(s) should be rounded
   * @param {number=} pr Priority in the linked list order. Higher priority CSSPropTweens will be updated before lower priority ones. The default priority is 0.
   * @param {string=} b Beginning value. We store this to ensure that it is EXACTLY what it was when the tween began without any risk of interpretation issues.
   * @param {string=} e Ending value. We store this to ensure that it is EXACTLY what the user defined at the end of the tween without any risk of interpretation issues.
   */
		CSSPropTween = _internals.CSSPropTween = function (t, p, s, c, next, type, n, r, pr, b, e) {
			this.t = t; //target
			this.p = p; //property
			this.s = s; //starting value
			this.c = c; //change value
			this.n = n || p; //name that this CSSPropTween should be associated to (usually the same as p, but not always - n is what overwriting looks at)
			if (!(t instanceof CSSPropTween)) {
				_overwriteProps.push(this.n);
			}
			this.r = r; //round (boolean)
			this.type = type || 0; //0 = normal tween, -1 = non-tweening (in which case xs0 will be applied to the target's property, like tp.t[tp.p] = tp.xs0), 1 = complex-value SpecialProp, 2 = custom setRatio() that does all the work
			if (pr) {
				this.pr = pr;
				_hasPriority = true;
			}
			this.b = b === undefined ? s : b;
			this.e = e === undefined ? s + c : e;
			if (next) {
				this._next = next;
				next._prev = this;
			}
		},
		    _addNonTweeningNumericPT = function _addNonTweeningNumericPT(target, prop, start, end, next, overwriteProp) {
			//cleans up some code redundancies and helps minification. Just a fast way to add a NUMERIC non-tweening CSSPropTween
			var pt = new CSSPropTween(target, prop, start, end - start, next, -1, overwriteProp);
			pt.b = start;
			pt.e = pt.xs0 = end;
			return pt;
		},


		/**
   * Takes a target, the beginning value and ending value (as strings) and parses them into a CSSPropTween (possibly with child CSSPropTweens) that accommodates multiple numbers, colors, comma-delimited values, etc. For example:
   * sp.parseComplex(element, "boxShadow", "5px 10px 20px rgb(255,102,51)", "0px 0px 0px red", true, "0px 0px 0px rgb(0,0,0,0)", pt);
   * It will walk through the beginning and ending values (which should be in the same format with the same number and type of values) and figure out which parts are numbers, what strings separate the numeric/tweenable values, and then create the CSSPropTweens accordingly. If a plugin is defined, no child CSSPropTweens will be created. Instead, the ending values will be stored in the "data" property of the returned CSSPropTween like: {s:-5, xn1:-10, xn2:-20, xn3:255, xn4:0, xn5:0} so that it can be fed to any other plugin and it'll be plain numeric tweens but the recomposition of the complex value will be handled inside CSSPlugin's setRatio().
   * If a setRatio is defined, the type of the CSSPropTween will be set to 2 and recomposition of the values will be the responsibility of that method.
   *
   * @param {!Object} t Target whose property will be tweened
   * @param {!string} p Property that will be tweened (its name, like "left" or "backgroundColor" or "boxShadow")
   * @param {string} b Beginning value
   * @param {string} e Ending value
   * @param {boolean} clrs If true, the value could contain a color value like "rgb(255,0,0)" or "#F00" or "red". The default is false, so no colors will be recognized (a performance optimization)
   * @param {(string|number|Object)} dflt The default beginning value that should be used if no valid beginning value is defined or if the number of values inside the complex beginning and ending values don't match
   * @param {?CSSPropTween} pt CSSPropTween instance that is the current head of the linked list (we'll prepend to this).
   * @param {number=} pr Priority in the linked list order. Higher priority properties will be updated before lower priority ones. The default priority is 0.
   * @param {TweenPlugin=} plugin If a plugin should handle the tweening of extra properties, pass the plugin instance here. If one is defined, then NO subtweens will be created for any extra properties (the properties will be created - just not additional CSSPropTween instances to tween them) because the plugin is expected to do so. However, the end values WILL be populated in the "data" property, like {s:100, xn1:50, xn2:300}
   * @param {function(number)=} setRatio If values should be set in a custom function instead of being pieced together in a type:1 (complex-value) CSSPropTween, define that custom function here.
   * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parseComplex() call.
   */
		_parseComplex = CSSPlugin.parseComplex = function (t, p, b, e, clrs, dflt, pt, pr, plugin, setRatio) {
			//DEBUG: _log("parseComplex: "+p+", b: "+b+", e: "+e);
			b = b || dflt || "";
			if (typeof e === "function") {
				e = e(_index, _target);
			}
			pt = new CSSPropTween(t, p, 0, 0, pt, setRatio ? 2 : 1, null, false, pr, b, e);
			e += ""; //ensures it's a string
			if (clrs && _colorExp.test(e + b)) {
				//if colors are found, normalize the formatting to rgba() or hsla().
				e = [b, e];
				CSSPlugin.colorStringFilter(e);
				b = e[0];
				e = e[1];
			}
			var ba = b.split(", ").join(",").split(" "),
			    //beginning array
			ea = e.split(", ").join(",").split(" "),
			    //ending array
			l = ba.length,
			    autoRound = _autoRound !== false,
			    i,
			    xi,
			    ni,
			    bv,
			    ev,
			    bnums,
			    enums,
			    bn,
			    hasAlpha,
			    temp,
			    cv,
			    str,
			    useHSL;
			if (e.indexOf(",") !== -1 || b.indexOf(",") !== -1) {
				ba = ba.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
				ea = ea.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
				l = ba.length;
			}
			if (l !== ea.length) {
				//DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
				ba = (dflt || "").split(" ");
				l = ba.length;
			}
			pt.plugin = plugin;
			pt.setRatio = setRatio;
			_colorExp.lastIndex = 0;
			for (i = 0; i < l; i++) {
				bv = ba[i];
				ev = ea[i];
				bn = parseFloat(bv);
				//if the value begins with a number (most common). It's fine if it has a suffix like px
				if (bn || bn === 0) {
					pt.appendXtra("", bn, _parseChange(ev, bn), ev.replace(_relNumExp, ""), autoRound && ev.indexOf("px") !== -1, true);

					//if the value is a color
				} else if (clrs && _colorExp.test(bv)) {
					str = ev.indexOf(")") + 1;
					str = ")" + (str ? ev.substr(str) : ""); //if there's a comma or ) at the end, retain it.
					useHSL = ev.indexOf("hsl") !== -1 && _supportsOpacity;
					bv = _parseColor(bv, useHSL);
					ev = _parseColor(ev, useHSL);
					hasAlpha = bv.length + ev.length > 6;
					if (hasAlpha && !_supportsOpacity && ev[3] === 0) {
						//older versions of IE don't support rgba(), so if the destination alpha is 0, just use "transparent" for the end color
						pt["xs" + pt.l] += pt.l ? " transparent" : "transparent";
						pt.e = pt.e.split(ea[i]).join("transparent");
					} else {
						if (!_supportsOpacity) {
							//old versions of IE don't support rgba().
							hasAlpha = false;
						}
						if (useHSL) {
							pt.appendXtra(hasAlpha ? "hsla(" : "hsl(", bv[0], _parseChange(ev[0], bv[0]), ",", false, true).appendXtra("", bv[1], _parseChange(ev[1], bv[1]), "%,", false).appendXtra("", bv[2], _parseChange(ev[2], bv[2]), hasAlpha ? "%," : "%" + str, false);
						} else {
							pt.appendXtra(hasAlpha ? "rgba(" : "rgb(", bv[0], ev[0] - bv[0], ",", true, true).appendXtra("", bv[1], ev[1] - bv[1], ",", true).appendXtra("", bv[2], ev[2] - bv[2], hasAlpha ? "," : str, true);
						}

						if (hasAlpha) {
							bv = bv.length < 4 ? 1 : bv[3];
							pt.appendXtra("", bv, (ev.length < 4 ? 1 : ev[3]) - bv, str, false);
						}
					}
					_colorExp.lastIndex = 0; //otherwise the test() on the RegExp could move the lastIndex and taint future results.
				} else {
					bnums = bv.match(_numExp); //gets each group of numbers in the beginning value string and drops them into an array

					//if no number is found, treat it as a non-tweening value and just append the string to the current xs.
					if (!bnums) {
						pt["xs" + pt.l] += pt.l || pt["xs" + pt.l] ? " " + ev : ev;

						//loop through all the numbers that are found and construct the extra values on the pt.
					} else {
						enums = ev.match(_relNumExp); //get each group of numbers in the end value string and drop them into an array. We allow relative values too, like +=50 or -=.5
						if (!enums || enums.length !== bnums.length) {
							//DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
							return pt;
						}
						ni = 0;
						for (xi = 0; xi < bnums.length; xi++) {
							cv = bnums[xi];
							temp = bv.indexOf(cv, ni);
							pt.appendXtra(bv.substr(ni, temp - ni), Number(cv), _parseChange(enums[xi], cv), "", autoRound && bv.substr(temp + cv.length, 2) === "px", xi === 0);
							ni = temp + cv.length;
						}
						pt["xs" + pt.l] += bv.substr(ni);
					}
				}
			}
			//if there are relative values ("+=" or "-=" prefix), we need to adjust the ending value to eliminate the prefixes and combine the values properly.
			if (e.indexOf("=") !== -1) if (pt.data) {
				str = pt.xs0 + pt.data.s;
				for (i = 1; i < pt.l; i++) {
					str += pt["xs" + i] + pt.data["xn" + i];
				}
				pt.e = str + pt["xs" + i];
			}
			if (!pt.l) {
				pt.type = -1;
				pt.xs0 = pt.e;
			}
			return pt.xfirst || pt;
		},
		    i = 9;

		p = CSSPropTween.prototype;
		p.l = p.pr = 0; //length (number of extra properties like xn1, xn2, xn3, etc.
		while (--i > 0) {
			p["xn" + i] = 0;
			p["xs" + i] = "";
		}
		p.xs0 = "";
		p._next = p._prev = p.xfirst = p.data = p.plugin = p.setRatio = p.rxp = null;

		/**
   * Appends and extra tweening value to a CSSPropTween and automatically manages any prefix and suffix strings. The first extra value is stored in the s and c of the main CSSPropTween instance, but thereafter any extras are stored in the xn1, xn2, xn3, etc. The prefixes and suffixes are stored in the xs0, xs1, xs2, etc. properties. For example, if I walk through a clip value like "rect(10px, 5px, 0px, 20px)", the values would be stored like this:
   * xs0:"rect(", s:10, xs1:"px, ", xn1:5, xs2:"px, ", xn2:0, xs3:"px, ", xn3:20, xn4:"px)"
   * And they'd all get joined together when the CSSPlugin renders (in the setRatio() method).
   * @param {string=} pfx Prefix (if any)
   * @param {!number} s Starting value
   * @param {!number} c Change in numeric value over the course of the entire tween. For example, if the start is 5 and the end is 100, the change would be 95.
   * @param {string=} sfx Suffix (if any)
   * @param {boolean=} r Round (if true).
   * @param {boolean=} pad If true, this extra value should be separated by the previous one by a space. If there is no previous extra and pad is true, it will automatically drop the space.
   * @return {CSSPropTween} returns itself so that multiple methods can be chained together.
   */
		p.appendXtra = function (pfx, s, c, sfx, r, pad) {
			var pt = this,
			    l = pt.l;
			pt["xs" + l] += pad && (l || pt["xs" + l]) ? " " + pfx : pfx || "";
			if (!c) if (l !== 0 && !pt.plugin) {
				//typically we'll combine non-changing values right into the xs to optimize performance, but we don't combine them when there's a plugin that will be tweening the values because it may depend on the values being split apart, like for a bezier, if a value doesn't change between the first and second iteration but then it does on the 3rd, we'll run into trouble because there's no xn slot for that value!
				pt["xs" + l] += s + (sfx || "");
				return pt;
			}
			pt.l++;
			pt.type = pt.setRatio ? 2 : 1;
			pt["xs" + pt.l] = sfx || "";
			if (l > 0) {
				pt.data["xn" + l] = s + c;
				pt.rxp["xn" + l] = r; //round extra property (we need to tap into this in the _parseToProxy() method)
				pt["xn" + l] = s;
				if (!pt.plugin) {
					pt.xfirst = new CSSPropTween(pt, "xn" + l, s, c, pt.xfirst || pt, 0, pt.n, r, pt.pr);
					pt.xfirst.xs0 = 0; //just to ensure that the property stays numeric which helps modern browsers speed up processing. Remember, in the setRatio() method, we do pt.t[pt.p] = val + pt.xs0 so if pt.xs0 is "" (the default), it'll cast the end value as a string. When a property is a number sometimes and a string sometimes, it prevents the compiler from locking in the data type, slowing things down slightly.
				}
				return pt;
			}
			pt.data = { s: s + c };
			pt.rxp = {};
			pt.s = s;
			pt.c = c;
			pt.r = r;
			return pt;
		};

		/**
   * @constructor A SpecialProp is basically a css property that needs to be treated in a non-standard way, like if it may contain a complex value like boxShadow:"5px 10px 15px rgb(255, 102, 51)" or if it is associated with another plugin like ThrowPropsPlugin or BezierPlugin. Every SpecialProp is associated with a particular property name like "boxShadow" or "throwProps" or "bezier" and it will intercept those values in the vars object that's passed to the CSSPlugin and handle them accordingly.
   * @param {!string} p Property name (like "boxShadow" or "throwProps")
   * @param {Object=} options An object containing any of the following configuration options:
   *                      - defaultValue: the default value
   *                      - parser: A function that should be called when the associated property name is found in the vars. This function should return a CSSPropTween instance and it should ensure that it is properly inserted into the linked list. It will receive 4 paramters: 1) The target, 2) The value defined in the vars, 3) The CSSPlugin instance (whose _firstPT should be used for the linked list), and 4) A computed style object if one was calculated (this is a speed optimization that allows retrieval of starting values quicker)
   *                      - formatter: a function that formats any value received for this special property (for example, boxShadow could take "5px 5px red" and format it to "5px 5px 0px 0px red" so that both the beginning and ending values have a common order and quantity of values.)
   *                      - prefix: if true, we'll determine whether or not this property requires a vendor prefix (like Webkit or Moz or ms or O)
   *                      - color: set this to true if the value for this SpecialProp may contain color-related values like rgb(), rgba(), etc.
   *                      - priority: priority in the linked list order. Higher priority SpecialProps will be updated before lower priority ones. The default priority is 0.
   *                      - multi: if true, the formatter should accommodate a comma-delimited list of values, like boxShadow could have multiple boxShadows listed out.
   *                      - collapsible: if true, the formatter should treat the value like it's a top/right/bottom/left value that could be collapsed, like "5px" would apply to all, "5px, 10px" would use 5px for top/bottom and 10px for right/left, etc.
   *                      - keyword: a special keyword that can [optionally] be found inside the value (like "inset" for boxShadow). This allows us to validate beginning/ending values to make sure they match (if the keyword is found in one, it'll be added to the other for consistency by default).
   */
		var SpecialProp = function SpecialProp(p, options) {
			options = options || {};
			this.p = options.prefix ? _checkPropPrefix(p) || p : p;
			_specialProps[p] = _specialProps[this.p] = this;
			this.format = options.formatter || _getFormatter(options.defaultValue, options.color, options.collapsible, options.multi);
			if (options.parser) {
				this.parse = options.parser;
			}
			this.clrs = options.color;
			this.multi = options.multi;
			this.keyword = options.keyword;
			this.dflt = options.defaultValue;
			this.pr = options.priority || 0;
		},


		//shortcut for creating a new SpecialProp that can accept multiple properties as a comma-delimited list (helps minification). dflt can be an array for multiple values (we don't do a comma-delimited list because the default value may contain commas, like rect(0px,0px,0px,0px)). We attach this method to the SpecialProp class/object instead of using a private _createSpecialProp() method so that we can tap into it externally if necessary, like from another plugin.
		_registerComplexSpecialProp = _internals._registerComplexSpecialProp = function (p, options, defaults) {
			if ((typeof options === "undefined" ? "undefined" : _typeof(options)) !== "object") {
				options = { parser: defaults }; //to make backwards compatible with older versions of BezierPlugin and ThrowPropsPlugin
			}
			var a = p.split(","),
			    d = options.defaultValue,
			    i,
			    temp;
			defaults = defaults || [d];
			for (i = 0; i < a.length; i++) {
				options.prefix = i === 0 && options.prefix;
				options.defaultValue = defaults[i] || d;
				temp = new SpecialProp(a[i], options);
			}
		},


		//creates a placeholder special prop for a plugin so that the property gets caught the first time a tween of it is attempted, and at that time it makes the plugin register itself, thus taking over for all future tweens of that property. This allows us to not mandate that things load in a particular order and it also allows us to log() an error that informs the user when they attempt to tween an external plugin-related property without loading its .js file.
		_registerPluginProp = _internals._registerPluginProp = function (p) {
			if (!_specialProps[p]) {
				var pluginName = p.charAt(0).toUpperCase() + p.substr(1) + "Plugin";
				_registerComplexSpecialProp(p, { parser: function parser(t, e, p, cssp, pt, plugin, vars) {
						var pluginClass = _globals.com.greensock.plugins[pluginName];
						if (!pluginClass) {
							_log("Error: " + pluginName + " js file not loaded.");
							return pt;
						}
						pluginClass._cssRegister();
						return _specialProps[p].parse(t, e, p, cssp, pt, plugin, vars);
					} });
			}
		};

		p = SpecialProp.prototype;

		/**
   * Alias for _parseComplex() that automatically plugs in certain values for this SpecialProp, like its property name, whether or not colors should be sensed, the default value, and priority. It also looks for any keyword that the SpecialProp defines (like "inset" for boxShadow) and ensures that the beginning and ending values have the same number of values for SpecialProps where multi is true (like boxShadow and textShadow can have a comma-delimited list)
   * @param {!Object} t target element
   * @param {(string|number|object)} b beginning value
   * @param {(string|number|object)} e ending (destination) value
   * @param {CSSPropTween=} pt next CSSPropTween in the linked list
   * @param {TweenPlugin=} plugin If another plugin will be tweening the complex value, that TweenPlugin instance goes here.
   * @param {function=} setRatio If a custom setRatio() method should be used to handle this complex value, that goes here.
   * @return {CSSPropTween=} First CSSPropTween in the linked list
   */
		p.parseComplex = function (t, b, e, pt, plugin, setRatio) {
			var kwd = this.keyword,
			    i,
			    ba,
			    ea,
			    l,
			    bi,
			    ei;
			//if this SpecialProp's value can contain a comma-delimited list of values (like boxShadow or textShadow), we must parse them in a special way, and look for a keyword (like "inset" for boxShadow) and ensure that the beginning and ending BOTH have it if the end defines it as such. We also must ensure that there are an equal number of values specified (we can't tween 1 boxShadow to 3 for example)
			if (this.multi) if (_commasOutsideParenExp.test(e) || _commasOutsideParenExp.test(b)) {
				ba = b.replace(_commasOutsideParenExp, "|").split("|");
				ea = e.replace(_commasOutsideParenExp, "|").split("|");
			} else if (kwd) {
				ba = [b];
				ea = [e];
			}
			if (ea) {
				l = ea.length > ba.length ? ea.length : ba.length;
				for (i = 0; i < l; i++) {
					b = ba[i] = ba[i] || this.dflt;
					e = ea[i] = ea[i] || this.dflt;
					if (kwd) {
						bi = b.indexOf(kwd);
						ei = e.indexOf(kwd);
						if (bi !== ei) {
							if (ei === -1) {
								//if the keyword isn't in the end value, remove it from the beginning one.
								ba[i] = ba[i].split(kwd).join("");
							} else if (bi === -1) {
								//if the keyword isn't in the beginning, add it.
								ba[i] += " " + kwd;
							}
						}
					}
				}
				b = ba.join(", ");
				e = ea.join(", ");
			}
			return _parseComplex(t, this.p, b, e, this.clrs, this.dflt, pt, this.pr, plugin, setRatio);
		};

		/**
   * Accepts a target and end value and spits back a CSSPropTween that has been inserted into the CSSPlugin's linked list and conforms with all the conventions we use internally, like type:-1, 0, 1, or 2, setting up any extra property tweens, priority, etc. For example, if we have a boxShadow SpecialProp and call:
   * this._firstPT = sp.parse(element, "5px 10px 20px rgb(2550,102,51)", "boxShadow", this);
   * It should figure out the starting value of the element's boxShadow, compare it to the provided end value and create all the necessary CSSPropTweens of the appropriate types to tween the boxShadow. The CSSPropTween that gets spit back should already be inserted into the linked list (the 4th parameter is the current head, so prepend to that).
   * @param {!Object} t Target object whose property is being tweened
   * @param {Object} e End value as provided in the vars object (typically a string, but not always - like a throwProps would be an object).
   * @param {!string} p Property name
   * @param {!CSSPlugin} cssp The CSSPlugin instance that should be associated with this tween.
   * @param {?CSSPropTween} pt The CSSPropTween that is the current head of the linked list (we'll prepend to it)
   * @param {TweenPlugin=} plugin If a plugin will be used to tween the parsed value, this is the plugin instance.
   * @param {Object=} vars Original vars object that contains the data for parsing.
   * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parse() call.
   */
		p.parse = function (t, e, p, cssp, pt, plugin, vars) {
			return this.parseComplex(t.style, this.format(_getStyle(t, this.p, _cs, false, this.dflt)), this.format(e), pt, plugin);
		};

		/**
   * Registers a special property that should be intercepted from any "css" objects defined in tweens. This allows you to handle them however you want without CSSPlugin doing it for you. The 2nd parameter should be a function that accepts 3 parameters:
   *  1) Target object whose property should be tweened (typically a DOM element)
   *  2) The end/destination value (could be a string, number, object, or whatever you want)
   *  3) The tween instance (you probably don't need to worry about this, but it can be useful for looking up information like the duration)
   *
   * Then, your function should return a function which will be called each time the tween gets rendered, passing a numeric "ratio" parameter to your function that indicates the change factor (usually between 0 and 1). For example:
   *
   * CSSPlugin.registerSpecialProp("myCustomProp", function(target, value, tween) {
   *      var start = target.style.width;
   *      return function(ratio) {
   *              target.style.width = (start + value * ratio) + "px";
   *              console.log("set width to " + target.style.width);
   *          }
   * }, 0);
   *
   * Then, when I do this tween, it will trigger my special property:
   *
   * TweenLite.to(element, 1, {css:{myCustomProp:100}});
   *
   * In the example, of course, we're just changing the width, but you can do anything you want.
   *
   * @param {!string} name Property name (or comma-delimited list of property names) that should be intercepted and handled by your function. For example, if I define "myCustomProp", then it would handle that portion of the following tween: TweenLite.to(element, 1, {css:{myCustomProp:100}})
   * @param {!function(Object, Object, Object, string):function(number)} onInitTween The function that will be called when a tween of this special property is performed. The function will receive 4 parameters: 1) Target object that should be tweened, 2) Value that was passed to the tween, 3) The tween instance itself (rarely used), and 4) The property name that's being tweened. Your function should return a function that should be called on every update of the tween. That function will receive a single parameter that is a "change factor" value (typically between 0 and 1) indicating the amount of change as a ratio. You can use this to determine how to set the values appropriately in your function.
   * @param {number=} priority Priority that helps the engine determine the order in which to set the properties (default: 0). Higher priority properties will be updated before lower priority ones.
   */
		CSSPlugin.registerSpecialProp = function (name, onInitTween, priority) {
			_registerComplexSpecialProp(name, { parser: function parser(t, e, p, cssp, pt, plugin, vars) {
					var rv = new CSSPropTween(t, p, 0, 0, pt, 2, p, false, priority);
					rv.plugin = plugin;
					rv.setRatio = onInitTween(t, e, cssp._tween, p);
					return rv;
				}, priority: priority });
		};

		//transform-related methods and properties
		CSSPlugin.useSVGTransformAttr = true; //Safari and Firefox both have some rendering bugs when applying CSS transforms to SVG elements, so default to using the "transform" attribute instead (users can override this).
		var _transformProps = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
		    _transformProp = _checkPropPrefix("transform"),
		    //the Javascript (camelCase) transform property, like msTransform, WebkitTransform, MozTransform, or OTransform.
		_transformPropCSS = _prefixCSS + "transform",
		    _transformOriginProp = _checkPropPrefix("transformOrigin"),
		    _supports3D = _checkPropPrefix("perspective") !== null,
		    Transform = _internals.Transform = function () {
			this.perspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0;
			this.force3D = CSSPlugin.defaultForce3D === false || !_supports3D ? false : CSSPlugin.defaultForce3D || "auto";
		},
		    _SVGElement = _gsScope.SVGElement,
		    _useSVGTransformAttr,

		//Some browsers (like Firefox and IE) don't honor transform-origin properly in SVG elements, so we need to manually adjust the matrix accordingly. We feature detect here rather than always doing the conversion for certain browsers because they may fix the problem at some point in the future.

		_createSVG = function _createSVG(type, container, attributes) {
			var element = _doc.createElementNS("http://www.w3.org/2000/svg", type),
			    reg = /([a-z])([A-Z])/g,
			    p;
			for (p in attributes) {
				element.setAttributeNS(null, p.replace(reg, "$1-$2").toLowerCase(), attributes[p]);
			}
			container.appendChild(element);
			return element;
		},
		    _docElement = _doc.documentElement || {},
		    _forceSVGTransformAttr = function () {
			//IE and Android stock don't support CSS transforms on SVG elements, so we must write them to the "transform" attribute. We populate this variable in the _parseTransform() method, and only if/when we come across an SVG element
			var force = _ieVers || /Android/i.test(_agent) && !_gsScope.chrome,
			    svg,
			    rect,
			    width;
			if (_doc.createElementNS && !force) {
				//IE8 and earlier doesn't support SVG anyway
				svg = _createSVG("svg", _docElement);
				rect = _createSVG("rect", svg, { width: 100, height: 50, x: 100 });
				width = rect.getBoundingClientRect().width;
				rect.style[_transformOriginProp] = "50% 50%";
				rect.style[_transformProp] = "scaleX(0.5)";
				force = width === rect.getBoundingClientRect().width && !(_isFirefox && _supports3D); //note: Firefox fails the test even though it does support CSS transforms in 3D. Since we can't push 3D stuff into the transform attribute, we force Firefox to pass the test here (as long as it does truly support 3D).
				_docElement.removeChild(svg);
			}
			return force;
		}(),
		    _parseSVGOrigin = function _parseSVGOrigin(e, local, decoratee, absolute, smoothOrigin, skipRecord) {
			var tm = e._gsTransform,
			    m = _getMatrix(e, true),
			    v,
			    x,
			    y,
			    xOrigin,
			    yOrigin,
			    a,
			    b,
			    c,
			    d,
			    tx,
			    ty,
			    determinant,
			    xOriginOld,
			    yOriginOld;
			if (tm) {
				xOriginOld = tm.xOrigin; //record the original values before we alter them.
				yOriginOld = tm.yOrigin;
			}
			if (!absolute || (v = absolute.split(" ")).length < 2) {
				b = e.getBBox();
				if (b.x === 0 && b.y === 0 && b.width + b.height === 0) {
					//some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.
					b = { x: parseFloat(e.hasAttribute("x") ? e.getAttribute("x") : e.hasAttribute("cx") ? e.getAttribute("cx") : 0) || 0, y: parseFloat(e.hasAttribute("y") ? e.getAttribute("y") : e.hasAttribute("cy") ? e.getAttribute("cy") : 0) || 0, width: 0, height: 0 };
				}
				local = _parsePosition(local).split(" ");
				v = [(local[0].indexOf("%") !== -1 ? parseFloat(local[0]) / 100 * b.width : parseFloat(local[0])) + b.x, (local[1].indexOf("%") !== -1 ? parseFloat(local[1]) / 100 * b.height : parseFloat(local[1])) + b.y];
			}
			decoratee.xOrigin = xOrigin = parseFloat(v[0]);
			decoratee.yOrigin = yOrigin = parseFloat(v[1]);
			if (absolute && m !== _identity2DMatrix) {
				//if svgOrigin is being set, we must invert the matrix and determine where the absolute point is, factoring in the current transforms. Otherwise, the svgOrigin would be based on the element's non-transformed position on the canvas.
				a = m[0];
				b = m[1];
				c = m[2];
				d = m[3];
				tx = m[4];
				ty = m[5];
				determinant = a * d - b * c;
				if (determinant) {
					//if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
					x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
					y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
					xOrigin = decoratee.xOrigin = v[0] = x;
					yOrigin = decoratee.yOrigin = v[1] = y;
				}
			}
			if (tm) {
				//avoid jump when transformOrigin is changed - adjust the x/y values accordingly
				if (skipRecord) {
					decoratee.xOffset = tm.xOffset;
					decoratee.yOffset = tm.yOffset;
					tm = decoratee;
				}
				if (smoothOrigin || smoothOrigin !== false && CSSPlugin.defaultSmoothOrigin !== false) {
					x = xOrigin - xOriginOld;
					y = yOrigin - yOriginOld;
					//originally, we simply adjusted the x and y values, but that would cause problems if, for example, you created a rotational tween part-way through an x/y tween. Managing the offset in a separate variable gives us ultimate flexibility.
					//tm.x -= x - (x * m[0] + y * m[2]);
					//tm.y -= y - (x * m[1] + y * m[3]);
					tm.xOffset += x * m[0] + y * m[2] - x;
					tm.yOffset += x * m[1] + y * m[3] - y;
				} else {
					tm.xOffset = tm.yOffset = 0;
				}
			}
			if (!skipRecord) {
				e.setAttribute("data-svg-origin", v.join(" "));
			}
		},
		    _getBBoxHack = function _getBBoxHack(swapIfPossible) {
			//works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
			var svg = _createElement("svg", this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
			    oldParent = this.parentNode,
			    oldSibling = this.nextSibling,
			    oldCSS = this.style.cssText,
			    bbox;
			_docElement.appendChild(svg);
			svg.appendChild(this);
			this.style.display = "block";
			if (swapIfPossible) {
				try {
					bbox = this.getBBox();
					this._originalGetBBox = this.getBBox;
					this.getBBox = _getBBoxHack;
				} catch (e) {}
			} else if (this._originalGetBBox) {
				bbox = this._originalGetBBox();
			}
			if (oldSibling) {
				oldParent.insertBefore(this, oldSibling);
			} else {
				oldParent.appendChild(this);
			}
			_docElement.removeChild(svg);
			this.style.cssText = oldCSS;
			return bbox;
		},
		    _getBBox = function _getBBox(e) {
			try {
				return e.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
			} catch (error) {
				return _getBBoxHack.call(e, true);
			}
		},
		    _isSVG = function _isSVG(e) {
			//reports if the element is an SVG on which getBBox() actually works
			return !!(_SVGElement && e.getCTM && _getBBox(e) && (!e.parentNode || e.ownerSVGElement));
		},
		    _identity2DMatrix = [1, 0, 0, 1, 0, 0],
		    _getMatrix = function _getMatrix(e, force2D) {
			var tm = e._gsTransform || new Transform(),
			    rnd = 100000,
			    style = e.style,
			    isDefault,
			    s,
			    m,
			    n,
			    dec,
			    none;
			if (_transformProp) {
				s = _getStyle(e, _transformPropCSS, null, true);
			} else if (e.currentStyle) {
				//for older versions of IE, we need to interpret the filter portion that is in the format: progid:DXImageTransform.Microsoft.Matrix(M11=6.123233995736766e-17, M12=-1, M21=1, M22=6.123233995736766e-17, sizingMethod='auto expand') Notice that we need to swap b and c compared to a normal matrix.
				s = e.currentStyle.filter.match(_ieGetMatrixExp);
				s = s && s.length === 4 ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), tm.x || 0, tm.y || 0].join(",") : "";
			}
			isDefault = !s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)";
			if (isDefault && _transformProp && ((none = _getComputedStyle(e).display === "none") || !e.parentNode)) {
				if (none) {
					//browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none".
					n = style.display;
					style.display = "block";
				}
				if (!e.parentNode) {
					dec = 1; //flag
					_docElement.appendChild(e);
				}
				s = _getStyle(e, _transformPropCSS, null, true);
				isDefault = !s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)";
				if (n) {
					style.display = n;
				} else if (none) {
					_removeProp(style, "display");
				}
				if (dec) {
					_docElement.removeChild(e);
				}
			}
			if (tm.svg || e.getCTM && _isSVG(e)) {
				if (isDefault && (style[_transformProp] + "").indexOf("matrix") !== -1) {
					//some browsers (like Chrome 40) don't correctly report transforms that are applied inline on an SVG element (they don't get included in the computed style), so we double-check here and accept matrix values
					s = style[_transformProp];
					isDefault = 0;
				}
				m = e.getAttribute("transform");
				if (isDefault && m) {
					if (m.indexOf("matrix") !== -1) {
						//just in case there's a "transform" value specified as an attribute instead of CSS style. Accept either a matrix() or simple translate() value though.
						s = m;
						isDefault = 0;
					} else if (m.indexOf("translate") !== -1) {
						s = "matrix(1,0,0,1," + m.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")";
						isDefault = 0;
					}
				}
			}
			if (isDefault) {
				return _identity2DMatrix;
			}
			//split the matrix values out into an array (m for matrix)
			m = (s || "").match(_numExp) || [];
			i = m.length;
			while (--i > -1) {
				n = Number(m[i]);
				m[i] = (dec = n - (n |= 0)) ? (dec * rnd + (dec < 0 ? -0.5 : 0.5) | 0) / rnd + n : n; //convert strings to Numbers and round to 5 decimal places to avoid issues with tiny numbers. Roughly 20x faster than Number.toFixed(). We also must make sure to round before dividing so that values like 0.9999999999 become 1 to avoid glitches in browser rendering and interpretation of flipped/rotated 3D matrices. And don't just multiply the number by rnd, floor it, and then divide by rnd because the bitwise operations max out at a 32-bit signed integer, thus it could get clipped at a relatively low value (like 22,000.00000 for example).
			}
			return force2D && m.length > 6 ? [m[0], m[1], m[4], m[5], m[12], m[13]] : m;
		},


		/**
   * Parses the transform values for an element, returning an object with x, y, z, scaleX, scaleY, scaleZ, rotation, rotationX, rotationY, skewX, and skewY properties. Note: by default (for performance reasons), all skewing is combined into skewX and rotation but skewY still has a place in the transform object so that we can record how much of the skew is attributed to skewX vs skewY. Remember, a skewY of 10 looks the same as a rotation of 10 and skewX of -10.
   * @param {!Object} t target element
   * @param {Object=} cs computed style object (optional)
   * @param {boolean=} rec if true, the transform values will be recorded to the target element's _gsTransform object, like target._gsTransform = {x:0, y:0, z:0, scaleX:1...}
   * @param {boolean=} parse if true, we'll ignore any _gsTransform values that already exist on the element, and force a reparsing of the css (calculated style)
   * @return {object} object containing all of the transform properties/values like {x:0, y:0, z:0, scaleX:1...}
   */
		_getTransform = _internals.getTransform = function (t, cs, rec, parse) {
			if (t._gsTransform && rec && !parse) {
				return t._gsTransform; //if the element already has a _gsTransform, use that. Note: some browsers don't accurately return the calculated style for the transform (particularly for SVG), so it's almost always safest to just use the values we've already applied rather than re-parsing things.
			}
			var tm = rec ? t._gsTransform || new Transform() : new Transform(),
			    invX = tm.scaleX < 0,
			    //in order to interpret things properly, we need to know if the user applied a negative scaleX previously so that we can adjust the rotation and skewX accordingly. Otherwise, if we always interpret a flipped matrix as affecting scaleY and the user only wants to tween the scaleX on multiple sequential tweens, it would keep the negative scaleY without that being the user's intent.
			min = 0.00002,
			    rnd = 100000,
			    zOrigin = _supports3D ? parseFloat(_getStyle(t, _transformOriginProp, cs, false, "0 0 0").split(" ")[2]) || tm.zOrigin || 0 : 0,
			    defaultTransformPerspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0,
			    m,
			    i,
			    scaleX,
			    scaleY,
			    rotation,
			    skewX;

			tm.svg = !!(t.getCTM && _isSVG(t));
			if (tm.svg) {
				_parseSVGOrigin(t, _getStyle(t, _transformOriginProp, cs, false, "50% 50%") + "", tm, t.getAttribute("data-svg-origin"));
				_useSVGTransformAttr = CSSPlugin.useSVGTransformAttr || _forceSVGTransformAttr;
			}
			m = _getMatrix(t);
			if (m !== _identity2DMatrix) {

				if (m.length === 16) {
					//we'll only look at these position-related 6 variables first because if x/y/z all match, it's relatively safe to assume we don't need to re-parse everything which risks losing important rotational information (like rotationX:180 plus rotationY:180 would look the same as rotation:180 - there's no way to know for sure which direction was taken based solely on the matrix3d() values)
					var a11 = m[0],
					    a21 = m[1],
					    a31 = m[2],
					    a41 = m[3],
					    a12 = m[4],
					    a22 = m[5],
					    a32 = m[6],
					    a42 = m[7],
					    a13 = m[8],
					    a23 = m[9],
					    a33 = m[10],
					    a14 = m[12],
					    a24 = m[13],
					    a34 = m[14],
					    a43 = m[11],
					    angle = Math.atan2(a32, a33),
					    t1,
					    t2,
					    t3,
					    t4,
					    cos,
					    sin;

					//we manually compensate for non-zero z component of transformOrigin to work around bugs in Safari
					if (tm.zOrigin) {
						a34 = -tm.zOrigin;
						a14 = a13 * a34 - m[12];
						a24 = a23 * a34 - m[13];
						a34 = a33 * a34 + tm.zOrigin - m[14];
					}
					tm.rotationX = angle * _RAD2DEG;
					//rotationX
					if (angle) {
						cos = Math.cos(-angle);
						sin = Math.sin(-angle);
						t1 = a12 * cos + a13 * sin;
						t2 = a22 * cos + a23 * sin;
						t3 = a32 * cos + a33 * sin;
						a13 = a12 * -sin + a13 * cos;
						a23 = a22 * -sin + a23 * cos;
						a33 = a32 * -sin + a33 * cos;
						a43 = a42 * -sin + a43 * cos;
						a12 = t1;
						a22 = t2;
						a32 = t3;
					}
					//rotationY
					angle = Math.atan2(-a31, a33);
					tm.rotationY = angle * _RAD2DEG;
					if (angle) {
						cos = Math.cos(-angle);
						sin = Math.sin(-angle);
						t1 = a11 * cos - a13 * sin;
						t2 = a21 * cos - a23 * sin;
						t3 = a31 * cos - a33 * sin;
						a23 = a21 * sin + a23 * cos;
						a33 = a31 * sin + a33 * cos;
						a43 = a41 * sin + a43 * cos;
						a11 = t1;
						a21 = t2;
						a31 = t3;
					}
					//rotationZ
					angle = Math.atan2(a21, a11);
					tm.rotation = angle * _RAD2DEG;
					if (angle) {
						cos = Math.cos(-angle);
						sin = Math.sin(-angle);
						a11 = a11 * cos + a12 * sin;
						t2 = a21 * cos + a22 * sin;
						a22 = a21 * -sin + a22 * cos;
						a32 = a31 * -sin + a32 * cos;
						a21 = t2;
					}

					if (tm.rotationX && Math.abs(tm.rotationX) + Math.abs(tm.rotation) > 359.9) {
						//when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
						tm.rotationX = tm.rotation = 0;
						tm.rotationY = 180 - tm.rotationY;
					}

					tm.scaleX = (Math.sqrt(a11 * a11 + a21 * a21) * rnd + 0.5 | 0) / rnd;
					tm.scaleY = (Math.sqrt(a22 * a22 + a23 * a23) * rnd + 0.5 | 0) / rnd;
					tm.scaleZ = (Math.sqrt(a32 * a32 + a33 * a33) * rnd + 0.5 | 0) / rnd;
					if (tm.rotationX || tm.rotationY) {
						tm.skewX = 0;
					} else {
						tm.skewX = a12 || a22 ? Math.atan2(a12, a22) * _RAD2DEG + tm.rotation : tm.skewX || 0;
						if (Math.abs(tm.skewX) > 90 && Math.abs(tm.skewX) < 270) {
							if (invX) {
								tm.scaleX *= -1;
								tm.skewX += tm.rotation <= 0 ? 180 : -180;
								tm.rotation += tm.rotation <= 0 ? 180 : -180;
							} else {
								tm.scaleY *= -1;
								tm.skewX += tm.skewX <= 0 ? 180 : -180;
							}
						}
					}
					tm.perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
					tm.x = a14;
					tm.y = a24;
					tm.z = a34;
					if (tm.svg) {
						tm.x -= tm.xOrigin - (tm.xOrigin * a11 - tm.yOrigin * a12);
						tm.y -= tm.yOrigin - (tm.yOrigin * a21 - tm.xOrigin * a22);
					}
				} else if (!_supports3D || parse || !m.length || tm.x !== m[4] || tm.y !== m[5] || !tm.rotationX && !tm.rotationY) {
					//sometimes a 6-element matrix is returned even when we performed 3D transforms, like if rotationX and rotationY are 180. In cases like this, we still need to honor the 3D transforms. If we just rely on the 2D info, it could affect how the data is interpreted, like scaleY might get set to -1 or rotation could get offset by 180 degrees. For example, do a TweenLite.to(element, 1, {css:{rotationX:180, rotationY:180}}) and then later, TweenLite.to(element, 1, {css:{rotationX:0}}) and without this conditional logic in place, it'd jump to a state of being unrotated when the 2nd tween starts. Then again, we need to honor the fact that the user COULD alter the transforms outside of CSSPlugin, like by manually applying new css, so we try to sense that by looking at x and y because if those changed, we know the changes were made outside CSSPlugin and we force a reinterpretation of the matrix values. Also, in Webkit browsers, if the element's "display" is "none", its calculated style value will always return empty, so if we've already recorded the values in the _gsTransform object, we'll just rely on those.
					var k = m.length >= 6,
					    a = k ? m[0] : 1,
					    b = m[1] || 0,
					    c = m[2] || 0,
					    d = k ? m[3] : 1;
					tm.x = m[4] || 0;
					tm.y = m[5] || 0;
					scaleX = Math.sqrt(a * a + b * b);
					scaleY = Math.sqrt(d * d + c * c);
					rotation = a || b ? Math.atan2(b, a) * _RAD2DEG : tm.rotation || 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).
					skewX = c || d ? Math.atan2(c, d) * _RAD2DEG + rotation : tm.skewX || 0;
					if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
						if (invX) {
							scaleX *= -1;
							skewX += rotation <= 0 ? 180 : -180;
							rotation += rotation <= 0 ? 180 : -180;
						} else {
							scaleY *= -1;
							skewX += skewX <= 0 ? 180 : -180;
						}
					}
					tm.scaleX = scaleX;
					tm.scaleY = scaleY;
					tm.rotation = rotation;
					tm.skewX = skewX;
					if (_supports3D) {
						tm.rotationX = tm.rotationY = tm.z = 0;
						tm.perspective = defaultTransformPerspective;
						tm.scaleZ = 1;
					}
					if (tm.svg) {
						tm.x -= tm.xOrigin - (tm.xOrigin * a + tm.yOrigin * c);
						tm.y -= tm.yOrigin - (tm.xOrigin * b + tm.yOrigin * d);
					}
				}
				tm.zOrigin = zOrigin;
				//some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 0 in these cases. The conditional logic here is faster than calling Math.abs(). Also, browsers tend to render a SLIGHTLY rotated object in a fuzzy way, so we need to snap to exactly 0 when appropriate.
				for (i in tm) {
					if (tm[i] < min) if (tm[i] > -min) {
						tm[i] = 0;
					}
				}
			}
			//DEBUG: _log("parsed rotation of " + t.getAttribute("id")+": "+(tm.rotationX)+", "+(tm.rotationY)+", "+(tm.rotation)+", scale: "+tm.scaleX+", "+tm.scaleY+", "+tm.scaleZ+", position: "+tm.x+", "+tm.y+", "+tm.z+", perspective: "+tm.perspective+ ", origin: "+ tm.xOrigin+ ","+ tm.yOrigin);
			if (rec) {
				t._gsTransform = tm; //record to the object's _gsTransform which we use so that tweens can control individual properties independently (we need all the properties to accurately recompose the matrix in the setRatio() method)
				if (tm.svg) {
					//if we're supposed to apply transforms to the SVG element's "transform" attribute, make sure there aren't any CSS transforms applied or they'll override the attribute ones. Also clear the transform attribute if we're using CSS, just to be clean.
					if (_useSVGTransformAttr && t.style[_transformProp]) {
						TweenLite.delayedCall(0.001, function () {
							//if we apply this right away (before anything has rendered), we risk there being no transforms for a brief moment and it also interferes with adjusting the transformOrigin in a tween with immediateRender:true (it'd try reading the matrix and it wouldn't have the appropriate data in place because we just removed it).
							_removeProp(t.style, _transformProp);
						});
					} else if (!_useSVGTransformAttr && t.getAttribute("transform")) {
						TweenLite.delayedCall(0.001, function () {
							t.removeAttribute("transform");
						});
					}
				}
			}
			return tm;
		},


		//for setting 2D transforms in IE6, IE7, and IE8 (must use a "filter" to emulate the behavior of modern day browser transforms)
		_setIETransformRatio = function _setIETransformRatio(v) {
			var t = this.data,
			    //refers to the element's _gsTransform object
			ang = -t.rotation * _DEG2RAD,
			    skew = ang + t.skewX * _DEG2RAD,
			    rnd = 100000,
			    a = (Math.cos(ang) * t.scaleX * rnd | 0) / rnd,
			    b = (Math.sin(ang) * t.scaleX * rnd | 0) / rnd,
			    c = (Math.sin(skew) * -t.scaleY * rnd | 0) / rnd,
			    d = (Math.cos(skew) * t.scaleY * rnd | 0) / rnd,
			    style = this.t.style,
			    cs = this.t.currentStyle,
			    filters,
			    val;
			if (!cs) {
				return;
			}
			val = b; //just for swapping the variables an inverting them (reused "val" to avoid creating another variable in memory). IE's filter matrix uses a non-standard matrix configuration (angle goes the opposite way, and b and c are reversed and inverted)
			b = -c;
			c = -val;
			filters = cs.filter;
			style.filter = ""; //remove filters so that we can accurately measure offsetWidth/offsetHeight
			var w = this.t.offsetWidth,
			    h = this.t.offsetHeight,
			    clip = cs.position !== "absolute",
			    m = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + b + ", M21=" + c + ", M22=" + d,
			    ox = t.x + w * t.xPercent / 100,
			    oy = t.y + h * t.yPercent / 100,
			    dx,
			    dy;

			//if transformOrigin is being used, adjust the offset x and y
			if (t.ox != null) {
				dx = (t.oxp ? w * t.ox * 0.01 : t.ox) - w / 2;
				dy = (t.oyp ? h * t.oy * 0.01 : t.oy) - h / 2;
				ox += dx - (dx * a + dy * b);
				oy += dy - (dx * c + dy * d);
			}

			if (!clip) {
				m += ", sizingMethod='auto expand')";
			} else {
				dx = w / 2;
				dy = h / 2;
				//translate to ensure that transformations occur around the correct origin (default is center).
				m += ", Dx=" + (dx - (dx * a + dy * b) + ox) + ", Dy=" + (dy - (dx * c + dy * d) + oy) + ")";
			}
			if (filters.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1) {
				style.filter = filters.replace(_ieSetMatrixExp, m);
			} else {
				style.filter = m + " " + filters; //we must always put the transform/matrix FIRST (before alpha(opacity=xx)) to avoid an IE bug that slices part of the object when rotation is applied with alpha.
			}

			//at the end or beginning of the tween, if the matrix is normal (1, 0, 0, 1) and opacity is 100 (or doesn't exist), remove the filter to improve browser performance.
			if (v === 0 || v === 1) if (a === 1) if (b === 0) if (c === 0) if (d === 1) if (!clip || m.indexOf("Dx=0, Dy=0") !== -1) if (!_opacityExp.test(filters) || parseFloat(RegExp.$1) === 100) if (filters.indexOf("gradient(" && filters.indexOf("Alpha")) === -1) {
				style.removeAttribute("filter");
			}

			//we must set the margins AFTER applying the filter in order to avoid some bugs in IE8 that could (in rare scenarios) cause them to be ignored intermittently (vibration).
			if (!clip) {
				var mult = _ieVers < 8 ? 1 : -1,
				    //in Internet Explorer 7 and before, the box model is broken, causing the browser to treat the width/height of the actual rotated filtered image as the width/height of the box itself, but Microsoft corrected that in IE8. We must use a negative offset in IE8 on the right/bottom
				marg,
				    prop,
				    dif;
				dx = t.ieOffsetX || 0;
				dy = t.ieOffsetY || 0;
				t.ieOffsetX = Math.round((w - ((a < 0 ? -a : a) * w + (b < 0 ? -b : b) * h)) / 2 + ox);
				t.ieOffsetY = Math.round((h - ((d < 0 ? -d : d) * h + (c < 0 ? -c : c) * w)) / 2 + oy);
				for (i = 0; i < 4; i++) {
					prop = _margins[i];
					marg = cs[prop];
					//we need to get the current margin in case it is being tweened separately (we want to respect that tween's changes)
					val = marg.indexOf("px") !== -1 ? parseFloat(marg) : _convertToPixels(this.t, prop, parseFloat(marg), marg.replace(_suffixExp, "")) || 0;
					if (val !== t[prop]) {
						dif = i < 2 ? -t.ieOffsetX : -t.ieOffsetY; //if another tween is controlling a margin, we cannot only apply the difference in the ieOffsets, so we essentially zero-out the dx and dy here in that case. We record the margin(s) later so that we can keep comparing them, making this code very flexible.
					} else {
						dif = i < 2 ? dx - t.ieOffsetX : dy - t.ieOffsetY;
					}
					style[prop] = (t[prop] = Math.round(val - dif * (i === 0 || i === 2 ? 1 : mult))) + "px";
				}
			}
		},


		/* translates a super small decimal to a string WITHOUT scientific notation
  _safeDecimal = function(n) {
  	var s = (n < 0 ? -n : n) + "",
  		a = s.split("e-");
  	return (n < 0 ? "-0." : "0.") + new Array(parseInt(a[1], 10) || 0).join("0") + a[0].split(".").join("");
  },
  */

		_setTransformRatio = _internals.set3DTransformRatio = _internals.setTransformRatio = function (v) {
			var t = this.data,
			    //refers to the element's _gsTransform object
			style = this.t.style,
			    angle = t.rotation,
			    rotationX = t.rotationX,
			    rotationY = t.rotationY,
			    sx = t.scaleX,
			    sy = t.scaleY,
			    sz = t.scaleZ,
			    x = t.x,
			    y = t.y,
			    z = t.z,
			    isSVG = t.svg,
			    perspective = t.perspective,
			    force3D = t.force3D,
			    skewY = t.skewY,
			    skewX = t.skewX,
			    t1,
			    a11,
			    a12,
			    a13,
			    a21,
			    a22,
			    a23,
			    a31,
			    a32,
			    a33,
			    a41,
			    a42,
			    a43,
			    zOrigin,
			    min,
			    cos,
			    sin,
			    t2,
			    transform,
			    comma,
			    zero,
			    skew,
			    rnd;
			if (skewY) {
				//for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
				skewX += skewY;
				angle += skewY;
			}

			//check to see if we should render as 2D (and SVGs must use 2D when _useSVGTransformAttr is true)
			if (((v === 1 || v === 0) && force3D === "auto" && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !force3D) && !z && !perspective && !rotationY && !rotationX && sz === 1 || _useSVGTransformAttr && isSVG || !_supports3D) {
				//on the final render (which could be 0 for a from tween), if there are no 3D aspects, render in 2D to free up memory and improve performance especially on mobile devices. Check the tween's totalTime/totalDuration too in order to make sure it doesn't happen between repeats if it's a repeating tween.

				//2D
				if (angle || skewX || isSVG) {
					angle *= _DEG2RAD;
					skew = skewX * _DEG2RAD;
					rnd = 100000;
					a11 = Math.cos(angle) * sx;
					a21 = Math.sin(angle) * sx;
					a12 = Math.sin(angle - skew) * -sy;
					a22 = Math.cos(angle - skew) * sy;
					if (skew && t.skewType === "simple") {
						//by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
						t1 = Math.tan(skew - skewY * _DEG2RAD);
						t1 = Math.sqrt(1 + t1 * t1);
						a12 *= t1;
						a22 *= t1;
						if (skewY) {
							t1 = Math.tan(skewY * _DEG2RAD);
							t1 = Math.sqrt(1 + t1 * t1);
							a11 *= t1;
							a21 *= t1;
						}
					}
					if (isSVG) {
						x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
						y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;
						if (_useSVGTransformAttr && (t.xPercent || t.yPercent)) {
							//The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the matrix to simulate it.
							min = this.t.getBBox();
							x += t.xPercent * 0.01 * min.width;
							y += t.yPercent * 0.01 * min.height;
						}
						min = 0.000001;
						if (x < min) if (x > -min) {
							x = 0;
						}
						if (y < min) if (y > -min) {
							y = 0;
						}
					}
					transform = (a11 * rnd | 0) / rnd + "," + (a21 * rnd | 0) / rnd + "," + (a12 * rnd | 0) / rnd + "," + (a22 * rnd | 0) / rnd + "," + x + "," + y + ")";
					if (isSVG && _useSVGTransformAttr) {
						this.t.setAttribute("transform", "matrix(" + transform);
					} else {
						//some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 5 decimal places.
						style[_transformProp] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + transform;
					}
				} else {
					style[_transformProp] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + sx + ",0,0," + sy + "," + x + "," + y + ")";
				}
				return;
			}
			if (_isFirefox) {
				//Firefox has a bug (at least in v25) that causes it to render the transparent part of 32-bit PNG images as black when displayed inside an iframe and the 3D scale is very small and doesn't change sufficiently enough between renders (like if you use a Power4.easeInOut to scale from 0 to 1 where the beginning values only change a tiny amount to begin the tween before accelerating). In this case, we force the scale to be 0.00002 instead which is visually the same but works around the Firefox issue.
				min = 0.0001;
				if (sx < min && sx > -min) {
					sx = sz = 0.00002;
				}
				if (sy < min && sy > -min) {
					sy = sz = 0.00002;
				}
				if (perspective && !t.z && !t.rotationX && !t.rotationY) {
					//Firefox has a bug that causes elements to have an odd super-thin, broken/dotted black border on elements that have a perspective set but aren't utilizing 3D space (no rotationX, rotationY, or z).
					perspective = 0;
				}
			}
			if (angle || skewX) {
				angle *= _DEG2RAD;
				cos = a11 = Math.cos(angle);
				sin = a21 = Math.sin(angle);
				if (skewX) {
					angle -= skewX * _DEG2RAD;
					cos = Math.cos(angle);
					sin = Math.sin(angle);
					if (t.skewType === "simple") {
						//by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
						t1 = Math.tan((skewX - skewY) * _DEG2RAD);
						t1 = Math.sqrt(1 + t1 * t1);
						cos *= t1;
						sin *= t1;
						if (t.skewY) {
							t1 = Math.tan(skewY * _DEG2RAD);
							t1 = Math.sqrt(1 + t1 * t1);
							a11 *= t1;
							a21 *= t1;
						}
					}
				}
				a12 = -sin;
				a22 = cos;
			} else if (!rotationY && !rotationX && sz === 1 && !perspective && !isSVG) {
				//if we're only translating and/or 2D scaling, this is faster...
				style[_transformProp] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) translate3d(" : "translate3d(") + x + "px," + y + "px," + z + "px)" + (sx !== 1 || sy !== 1 ? " scale(" + sx + "," + sy + ")" : "");
				return;
			} else {
				a11 = a22 = 1;
				a12 = a21 = 0;
			}
			// KEY  INDEX   AFFECTS
			// a11  0       rotation, rotationY, scaleX
			// a21  1       rotation, rotationY, scaleX
			// a31  2       rotationY, scaleX
			// a41  3       rotationY, scaleX
			// a12  4       rotation, skewX, rotationX, scaleY
			// a22  5       rotation, skewX, rotationX, scaleY
			// a32  6       rotationX, scaleY
			// a42  7       rotationX, scaleY
			// a13  8       rotationY, rotationX, scaleZ
			// a23  9       rotationY, rotationX, scaleZ
			// a33  10      rotationY, rotationX, scaleZ
			// a43  11      rotationY, rotationX, perspective, scaleZ
			// a14  12      x, zOrigin, svgOrigin
			// a24  13      y, zOrigin, svgOrigin
			// a34  14      z, zOrigin
			// a44  15
			// rotation: Math.atan2(a21, a11)
			// rotationY: Math.atan2(a13, a33) (or Math.atan2(a13, a11))
			// rotationX: Math.atan2(a32, a33)
			a33 = 1;
			a13 = a23 = a31 = a32 = a41 = a42 = 0;
			a43 = perspective ? -1 / perspective : 0;
			zOrigin = t.zOrigin;
			min = 0.000001; //threshold below which browsers use scientific notation which won't work.
			comma = ",";
			zero = "0";
			angle = rotationY * _DEG2RAD;
			if (angle) {
				cos = Math.cos(angle);
				sin = Math.sin(angle);
				a31 = -sin;
				a41 = a43 * -sin;
				a13 = a11 * sin;
				a23 = a21 * sin;
				a33 = cos;
				a43 *= cos;
				a11 *= cos;
				a21 *= cos;
			}
			angle = rotationX * _DEG2RAD;
			if (angle) {
				cos = Math.cos(angle);
				sin = Math.sin(angle);
				t1 = a12 * cos + a13 * sin;
				t2 = a22 * cos + a23 * sin;
				a32 = a33 * sin;
				a42 = a43 * sin;
				a13 = a12 * -sin + a13 * cos;
				a23 = a22 * -sin + a23 * cos;
				a33 = a33 * cos;
				a43 = a43 * cos;
				a12 = t1;
				a22 = t2;
			}
			if (sz !== 1) {
				a13 *= sz;
				a23 *= sz;
				a33 *= sz;
				a43 *= sz;
			}
			if (sy !== 1) {
				a12 *= sy;
				a22 *= sy;
				a32 *= sy;
				a42 *= sy;
			}
			if (sx !== 1) {
				a11 *= sx;
				a21 *= sx;
				a31 *= sx;
				a41 *= sx;
			}

			if (zOrigin || isSVG) {
				if (zOrigin) {
					x += a13 * -zOrigin;
					y += a23 * -zOrigin;
					z += a33 * -zOrigin + zOrigin;
				}
				if (isSVG) {
					//due to bugs in some browsers, we need to manage the transform-origin of SVG manually
					x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
					y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;
				}
				if (x < min && x > -min) {
					x = zero;
				}
				if (y < min && y > -min) {
					y = zero;
				}
				if (z < min && z > -min) {
					z = 0; //don't use string because we calculate perspective later and need the number.
				}
			}

			//optimized way of concatenating all the values into a string. If we do it all in one shot, it's slower because of the way browsers have to create temp strings and the way it affects memory. If we do it piece-by-piece with +=, it's a bit slower too. We found that doing it in these sized chunks works best overall:
			transform = t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix3d(" : "matrix3d(";
			transform += (a11 < min && a11 > -min ? zero : a11) + comma + (a21 < min && a21 > -min ? zero : a21) + comma + (a31 < min && a31 > -min ? zero : a31);
			transform += comma + (a41 < min && a41 > -min ? zero : a41) + comma + (a12 < min && a12 > -min ? zero : a12) + comma + (a22 < min && a22 > -min ? zero : a22);
			if (rotationX || rotationY || sz !== 1) {
				//performance optimization (often there's no rotationX or rotationY, so we can skip these calculations)
				transform += comma + (a32 < min && a32 > -min ? zero : a32) + comma + (a42 < min && a42 > -min ? zero : a42) + comma + (a13 < min && a13 > -min ? zero : a13);
				transform += comma + (a23 < min && a23 > -min ? zero : a23) + comma + (a33 < min && a33 > -min ? zero : a33) + comma + (a43 < min && a43 > -min ? zero : a43) + comma;
			} else {
				transform += ",0,0,0,0,1,0,";
			}
			transform += x + comma + y + comma + z + comma + (perspective ? 1 + -z / perspective : 1) + ")";

			style[_transformProp] = transform;
		};

		p = Transform.prototype;
		p.x = p.y = p.z = p.skewX = p.skewY = p.rotation = p.rotationX = p.rotationY = p.zOrigin = p.xPercent = p.yPercent = p.xOffset = p.yOffset = 0;
		p.scaleX = p.scaleY = p.scaleZ = 1;

		_registerComplexSpecialProp("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", { parser: function parser(t, e, parsingProp, cssp, pt, plugin, vars) {
				if (cssp._lastParsedTransform === vars) {
					return pt;
				} //only need to parse the transform once, and only if the browser supports it.
				cssp._lastParsedTransform = vars;
				var scaleFunc = vars.scale && typeof vars.scale === "function" ? vars.scale : 0,
				    //if there's a function-based "scale" value, swap in the resulting numeric value temporarily. Otherwise, if it's called for both scaleX and scaleY independently, they may not match (like if the function uses Math.random()).
				swapFunc;
				if (typeof vars[parsingProp] === "function") {
					//whatever property triggers the initial parsing might be a function-based value in which case it already got called in parse(), thus we don't want to call it again in here. The most efficient way to avoid this is to temporarily swap the value directly into the vars object, and then after we do all our parsing in this function, we'll swap it back again.
					swapFunc = vars[parsingProp];
					vars[parsingProp] = e;
				}
				if (scaleFunc) {
					vars.scale = scaleFunc(_index, t);
				}
				var originalGSTransform = t._gsTransform,
				    style = t.style,
				    min = 0.000001,
				    i = _transformProps.length,
				    v = vars,
				    endRotations = {},
				    transformOriginString = "transformOrigin",
				    m1 = _getTransform(t, _cs, true, v.parseTransform),
				    orig = v.transform && (typeof v.transform === "function" ? v.transform(_index, _target) : v.transform),
				    m2,
				    copy,
				    has3D,
				    hasChange,
				    dr,
				    x,
				    y,
				    matrix,
				    p;
				cssp._transform = m1;
				if (orig && typeof orig === "string" && _transformProp) {
					//for values like transform:"rotate(60deg) scale(0.5, 0.8)"
					copy = _tempDiv.style; //don't use the original target because it might be SVG in which case some browsers don't report computed style correctly.
					copy[_transformProp] = orig;
					copy.display = "block"; //if display is "none", the browser often refuses to report the transform properties correctly.
					copy.position = "absolute";
					_doc.body.appendChild(_tempDiv);
					m2 = _getTransform(_tempDiv, null, false);
					if (m1.svg) {
						//if it's an SVG element, x/y part of the matrix will be affected by whatever we use as the origin and the offsets, so compensate here...
						x = m1.xOrigin;
						y = m1.yOrigin;
						m2.x -= m1.xOffset;
						m2.y -= m1.yOffset;
						if (v.transformOrigin || v.svgOrigin) {
							//if this tween is altering the origin, we must factor that in here. The actual work of recording the transformOrigin values and setting up the PropTween is done later (still inside this function) so we cannot leave the changes intact here - we only want to update the x/y accordingly.
							orig = {};
							_parseSVGOrigin(t, _parsePosition(v.transformOrigin), orig, v.svgOrigin, v.smoothOrigin, true);
							x = orig.xOrigin;
							y = orig.yOrigin;
							m2.x -= orig.xOffset - m1.xOffset;
							m2.y -= orig.yOffset - m1.yOffset;
						}
						if (x || y) {
							matrix = _getMatrix(_tempDiv, true);
							m2.x -= x - (x * matrix[0] + y * matrix[2]);
							m2.y -= y - (x * matrix[1] + y * matrix[3]);
						}
					}
					_doc.body.removeChild(_tempDiv);
					if (!m2.perspective) {
						m2.perspective = m1.perspective; //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
					}
					if (v.xPercent != null) {
						m2.xPercent = _parseVal(v.xPercent, m1.xPercent);
					}
					if (v.yPercent != null) {
						m2.yPercent = _parseVal(v.yPercent, m1.yPercent);
					}
				} else if ((typeof v === "undefined" ? "undefined" : _typeof(v)) === "object") {
					//for values like scaleX, scaleY, rotation, x, y, skewX, and skewY or transform:{...} (object)
					m2 = { scaleX: _parseVal(v.scaleX != null ? v.scaleX : v.scale, m1.scaleX),
						scaleY: _parseVal(v.scaleY != null ? v.scaleY : v.scale, m1.scaleY),
						scaleZ: _parseVal(v.scaleZ, m1.scaleZ),
						x: _parseVal(v.x, m1.x),
						y: _parseVal(v.y, m1.y),
						z: _parseVal(v.z, m1.z),
						xPercent: _parseVal(v.xPercent, m1.xPercent),
						yPercent: _parseVal(v.yPercent, m1.yPercent),
						perspective: _parseVal(v.transformPerspective, m1.perspective) };
					dr = v.directionalRotation;
					if (dr != null) {
						if ((typeof dr === "undefined" ? "undefined" : _typeof(dr)) === "object") {
							for (copy in dr) {
								v[copy] = dr[copy];
							}
						} else {
							v.rotation = dr;
						}
					}
					if (typeof v.x === "string" && v.x.indexOf("%") !== -1) {
						m2.x = 0;
						m2.xPercent = _parseVal(v.x, m1.xPercent);
					}
					if (typeof v.y === "string" && v.y.indexOf("%") !== -1) {
						m2.y = 0;
						m2.yPercent = _parseVal(v.y, m1.yPercent);
					}

					m2.rotation = _parseAngle("rotation" in v ? v.rotation : "shortRotation" in v ? v.shortRotation + "_short" : "rotationZ" in v ? v.rotationZ : m1.rotation, m1.rotation, "rotation", endRotations);
					if (_supports3D) {
						m2.rotationX = _parseAngle("rotationX" in v ? v.rotationX : "shortRotationX" in v ? v.shortRotationX + "_short" : m1.rotationX || 0, m1.rotationX, "rotationX", endRotations);
						m2.rotationY = _parseAngle("rotationY" in v ? v.rotationY : "shortRotationY" in v ? v.shortRotationY + "_short" : m1.rotationY || 0, m1.rotationY, "rotationY", endRotations);
					}
					m2.skewX = _parseAngle(v.skewX, m1.skewX);
					m2.skewY = _parseAngle(v.skewY, m1.skewY);
				}
				if (_supports3D && v.force3D != null) {
					m1.force3D = v.force3D;
					hasChange = true;
				}

				m1.skewType = v.skewType || m1.skewType || CSSPlugin.defaultSkewType;

				has3D = m1.force3D || m1.z || m1.rotationX || m1.rotationY || m2.z || m2.rotationX || m2.rotationY || m2.perspective;
				if (!has3D && v.scale != null) {
					m2.scaleZ = 1; //no need to tween scaleZ.
				}

				while (--i > -1) {
					p = _transformProps[i];
					orig = m2[p] - m1[p];
					if (orig > min || orig < -min || v[p] != null || _forcePT[p] != null) {
						hasChange = true;
						pt = new CSSPropTween(m1, p, m1[p], orig, pt);
						if (p in endRotations) {
							pt.e = endRotations[p]; //directional rotations typically have compensated values during the tween, but we need to make sure they end at exactly what the user requested
						}
						pt.xs0 = 0; //ensures the value stays numeric in setRatio()
						pt.plugin = plugin;
						cssp._overwriteProps.push(pt.n);
					}
				}

				orig = v.transformOrigin;
				if (m1.svg && (orig || v.svgOrigin)) {
					x = m1.xOffset; //when we change the origin, in order to prevent things from jumping we adjust the x/y so we must record those here so that we can create PropTweens for them and flip them at the same time as the origin
					y = m1.yOffset;
					_parseSVGOrigin(t, _parsePosition(orig), m2, v.svgOrigin, v.smoothOrigin);
					pt = _addNonTweeningNumericPT(m1, "xOrigin", (originalGSTransform ? m1 : m2).xOrigin, m2.xOrigin, pt, transformOriginString); //note: if there wasn't a transformOrigin defined yet, just start with the destination one; it's wasteful otherwise, and it causes problems with fromTo() tweens. For example, TweenLite.to("#wheel", 3, {rotation:180, transformOrigin:"50% 50%", delay:1}); TweenLite.fromTo("#wheel", 3, {scale:0.5, transformOrigin:"50% 50%"}, {scale:1, delay:2}); would cause a jump when the from values revert at the beginning of the 2nd tween.
					pt = _addNonTweeningNumericPT(m1, "yOrigin", (originalGSTransform ? m1 : m2).yOrigin, m2.yOrigin, pt, transformOriginString);
					if (x !== m1.xOffset || y !== m1.yOffset) {
						pt = _addNonTweeningNumericPT(m1, "xOffset", originalGSTransform ? x : m1.xOffset, m1.xOffset, pt, transformOriginString);
						pt = _addNonTweeningNumericPT(m1, "yOffset", originalGSTransform ? y : m1.yOffset, m1.yOffset, pt, transformOriginString);
					}
					orig = "0px 0px"; //certain browsers (like firefox) completely botch transform-origin, so we must remove it to prevent it from contaminating transforms. We manage it ourselves with xOrigin and yOrigin
				}
				if (orig || _supports3D && has3D && m1.zOrigin) {
					//if anything 3D is happening and there's a transformOrigin with a z component that's non-zero, we must ensure that the transformOrigin's z-component is set to 0 so that we can manually do those calculations to get around Safari bugs. Even if the user didn't specifically define a "transformOrigin" in this particular tween (maybe they did it via css directly).
					if (_transformProp) {
						hasChange = true;
						p = _transformOriginProp;
						orig = (orig || _getStyle(t, p, _cs, false, "50% 50%")) + ""; //cast as string to avoid errors
						pt = new CSSPropTween(style, p, 0, 0, pt, -1, transformOriginString);
						pt.b = style[p];
						pt.plugin = plugin;
						if (_supports3D) {
							copy = m1.zOrigin;
							orig = orig.split(" ");
							m1.zOrigin = (orig.length > 2 && !(copy !== 0 && orig[2] === "0px") ? parseFloat(orig[2]) : copy) || 0; //Safari doesn't handle the z part of transformOrigin correctly, so we'll manually handle it in the _set3DTransformRatio() method.
							pt.xs0 = pt.e = orig[0] + " " + (orig[1] || "50%") + " 0px"; //we must define a z value of 0px specifically otherwise iOS 5 Safari will stick with the old one (if one was defined)!
							pt = new CSSPropTween(m1, "zOrigin", 0, 0, pt, -1, pt.n); //we must create a CSSPropTween for the _gsTransform.zOrigin so that it gets reset properly at the beginning if the tween runs backward (as opposed to just setting m1.zOrigin here)
							pt.b = copy;
							pt.xs0 = pt.e = m1.zOrigin;
						} else {
							pt.xs0 = pt.e = orig;
						}

						//for older versions of IE (6-8), we need to manually calculate things inside the setRatio() function. We record origin x and y (ox and oy) and whether or not the values are percentages (oxp and oyp).
					} else {
						_parsePosition(orig + "", m1);
					}
				}
				if (hasChange) {
					cssp._transformType = !(m1.svg && _useSVGTransformAttr) && (has3D || this._transformType === 3) ? 3 : 2; //quicker than calling cssp._enableTransforms();
				}
				if (swapFunc) {
					vars[parsingProp] = swapFunc;
				}
				if (scaleFunc) {
					vars.scale = scaleFunc;
				}
				return pt;
			}, prefix: true });

		_registerComplexSpecialProp("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: true, color: true, multi: true, keyword: "inset" });

		_registerComplexSpecialProp("borderRadius", { defaultValue: "0px", parser: function parser(t, e, p, cssp, pt, plugin) {
				e = this.format(e);
				var props = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
				    style = t.style,
				    ea1,
				    i,
				    es2,
				    bs2,
				    bs,
				    es,
				    bn,
				    en,
				    w,
				    h,
				    esfx,
				    bsfx,
				    rel,
				    hn,
				    vn,
				    em;
				w = parseFloat(t.offsetWidth);
				h = parseFloat(t.offsetHeight);
				ea1 = e.split(" ");
				for (i = 0; i < props.length; i++) {
					//if we're dealing with percentages, we must convert things separately for the horizontal and vertical axis!
					if (this.p.indexOf("border")) {
						//older browsers used a prefix
						props[i] = _checkPropPrefix(props[i]);
					}
					bs = bs2 = _getStyle(t, props[i], _cs, false, "0px");
					if (bs.indexOf(" ") !== -1) {
						bs2 = bs.split(" ");
						bs = bs2[0];
						bs2 = bs2[1];
					}
					es = es2 = ea1[i];
					bn = parseFloat(bs);
					bsfx = bs.substr((bn + "").length);
					rel = es.charAt(1) === "=";
					if (rel) {
						en = parseInt(es.charAt(0) + "1", 10);
						es = es.substr(2);
						en *= parseFloat(es);
						esfx = es.substr((en + "").length - (en < 0 ? 1 : 0)) || "";
					} else {
						en = parseFloat(es);
						esfx = es.substr((en + "").length);
					}
					if (esfx === "") {
						esfx = _suffixMap[p] || bsfx;
					}
					if (esfx !== bsfx) {
						hn = _convertToPixels(t, "borderLeft", bn, bsfx); //horizontal number (we use a bogus "borderLeft" property just because the _convertToPixels() method searches for the keywords "Left", "Right", "Top", and "Bottom" to determine of it's a horizontal or vertical property, and we need "border" in the name so that it knows it should measure relative to the element itself, not its parent.
						vn = _convertToPixels(t, "borderTop", bn, bsfx); //vertical number
						if (esfx === "%") {
							bs = hn / w * 100 + "%";
							bs2 = vn / h * 100 + "%";
						} else if (esfx === "em") {
							em = _convertToPixels(t, "borderLeft", 1, "em");
							bs = hn / em + "em";
							bs2 = vn / em + "em";
						} else {
							bs = hn + "px";
							bs2 = vn + "px";
						}
						if (rel) {
							es = parseFloat(bs) + en + esfx;
							es2 = parseFloat(bs2) + en + esfx;
						}
					}
					pt = _parseComplex(style, props[i], bs + " " + bs2, es + " " + es2, false, "0px", pt);
				}
				return pt;
			}, prefix: true, formatter: _getFormatter("0px 0px 0px 0px", false, true) });
		_registerComplexSpecialProp("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", { defaultValue: "0px", parser: function parser(t, e, p, cssp, pt, plugin) {
				return _parseComplex(t.style, p, this.format(_getStyle(t, p, _cs, false, "0px 0px")), this.format(e), false, "0px", pt);
			}, prefix: true, formatter: _getFormatter("0px 0px", false, true) });
		_registerComplexSpecialProp("backgroundPosition", { defaultValue: "0 0", parser: function parser(t, e, p, cssp, pt, plugin) {
				var bp = "background-position",
				    cs = _cs || _getComputedStyle(t, null),
				    bs = this.format((cs ? _ieVers ? cs.getPropertyValue(bp + "-x") + " " + cs.getPropertyValue(bp + "-y") : cs.getPropertyValue(bp) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
				    //Internet Explorer doesn't report background-position correctly - we must query background-position-x and background-position-y and combine them (even in IE10). Before IE9, we must do the same with the currentStyle object and use camelCase
				es = this.format(e),
				    ba,
				    ea,
				    i,
				    pct,
				    overlap,
				    src;
				if (bs.indexOf("%") !== -1 !== (es.indexOf("%") !== -1) && es.split(",").length < 2) {
					src = _getStyle(t, "backgroundImage").replace(_urlExp, "");
					if (src && src !== "none") {
						ba = bs.split(" ");
						ea = es.split(" ");
						_tempImg.setAttribute("src", src); //set the temp IMG's src to the background-image so that we can measure its width/height
						i = 2;
						while (--i > -1) {
							bs = ba[i];
							pct = bs.indexOf("%") !== -1;
							if (pct !== (ea[i].indexOf("%") !== -1)) {
								overlap = i === 0 ? t.offsetWidth - _tempImg.width : t.offsetHeight - _tempImg.height;
								ba[i] = pct ? parseFloat(bs) / 100 * overlap + "px" : parseFloat(bs) / overlap * 100 + "%";
							}
						}
						bs = ba.join(" ");
					}
				}
				return this.parseComplex(t.style, bs, es, pt, plugin);
			}, formatter: _parsePosition });
		_registerComplexSpecialProp("backgroundSize", { defaultValue: "0 0", formatter: function formatter(v) {
				v += ""; //ensure it's a string
				return _parsePosition(v.indexOf(" ") === -1 ? v + " " + v : v); //if set to something like "100% 100%", Safari typically reports the computed style as just "100%" (no 2nd value), but we should ensure that there are two values, so copy the first one. Otherwise, it'd be interpreted as "100% 0" (wrong).
			} });
		_registerComplexSpecialProp("perspective", { defaultValue: "0px", prefix: true });
		_registerComplexSpecialProp("perspectiveOrigin", { defaultValue: "50% 50%", prefix: true });
		_registerComplexSpecialProp("transformStyle", { prefix: true });
		_registerComplexSpecialProp("backfaceVisibility", { prefix: true });
		_registerComplexSpecialProp("userSelect", { prefix: true });
		_registerComplexSpecialProp("margin", { parser: _getEdgeParser("marginTop,marginRight,marginBottom,marginLeft") });
		_registerComplexSpecialProp("padding", { parser: _getEdgeParser("paddingTop,paddingRight,paddingBottom,paddingLeft") });
		_registerComplexSpecialProp("clip", { defaultValue: "rect(0px,0px,0px,0px)", parser: function parser(t, e, p, cssp, pt, plugin) {
				var b, cs, delim;
				if (_ieVers < 9) {
					//IE8 and earlier don't report a "clip" value in the currentStyle - instead, the values are split apart into clipTop, clipRight, clipBottom, and clipLeft. Also, in IE7 and earlier, the values inside rect() are space-delimited, not comma-delimited.
					cs = t.currentStyle;
					delim = _ieVers < 8 ? " " : ",";
					b = "rect(" + cs.clipTop + delim + cs.clipRight + delim + cs.clipBottom + delim + cs.clipLeft + ")";
					e = this.format(e).split(",").join(delim);
				} else {
					b = this.format(_getStyle(t, this.p, _cs, false, this.dflt));
					e = this.format(e);
				}
				return this.parseComplex(t.style, b, e, pt, plugin);
			} });
		_registerComplexSpecialProp("textShadow", { defaultValue: "0px 0px 0px #999", color: true, multi: true });
		_registerComplexSpecialProp("autoRound,strictUnits", { parser: function parser(t, e, p, cssp, pt) {
				return pt;
			} }); //just so that we can ignore these properties (not tween them)
		_registerComplexSpecialProp("border", { defaultValue: "0px solid #000", parser: function parser(t, e, p, cssp, pt, plugin) {
				var bw = _getStyle(t, "borderTopWidth", _cs, false, "0px"),
				    end = this.format(e).split(" "),
				    esfx = end[0].replace(_suffixExp, "");
				if (esfx !== "px") {
					//if we're animating to a non-px value, we need to convert the beginning width to that unit.
					bw = parseFloat(bw) / _convertToPixels(t, "borderTopWidth", 1, esfx) + esfx;
				}
				return this.parseComplex(t.style, this.format(bw + " " + _getStyle(t, "borderTopStyle", _cs, false, "solid") + " " + _getStyle(t, "borderTopColor", _cs, false, "#000")), end.join(" "), pt, plugin);
			}, color: true, formatter: function formatter(v) {
				var a = v.split(" ");
				return a[0] + " " + (a[1] || "solid") + " " + (v.match(_colorExp) || ["#000"])[0];
			} });
		_registerComplexSpecialProp("borderWidth", { parser: _getEdgeParser("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }); //Firefox doesn't pick up on borderWidth set in style sheets (only inline).
		_registerComplexSpecialProp("float,cssFloat,styleFloat", { parser: function parser(t, e, p, cssp, pt, plugin) {
				var s = t.style,
				    prop = "cssFloat" in s ? "cssFloat" : "styleFloat";
				return new CSSPropTween(s, prop, 0, 0, pt, -1, p, false, 0, s[prop], e);
			} });

		//opacity-related
		var _setIEOpacityRatio = function _setIEOpacityRatio(v) {
			var t = this.t,
			    //refers to the element's style property
			filters = t.filter || _getStyle(this.data, "filter") || "",
			    val = this.s + this.c * v | 0,
			    skip;
			if (val === 100) {
				//for older versions of IE that need to use a filter to apply opacity, we should remove the filter if opacity hits 1 in order to improve performance, but make sure there isn't a transform (matrix) or gradient in the filters.
				if (filters.indexOf("atrix(") === -1 && filters.indexOf("radient(") === -1 && filters.indexOf("oader(") === -1) {
					t.removeAttribute("filter");
					skip = !_getStyle(this.data, "filter"); //if a class is applied that has an alpha filter, it will take effect (we don't want that), so re-apply our alpha filter in that case. We must first remove it and then check.
				} else {
					t.filter = filters.replace(_alphaFilterExp, "");
					skip = true;
				}
			}
			if (!skip) {
				if (this.xn1) {
					t.filter = filters = filters || "alpha(opacity=" + val + ")"; //works around bug in IE7/8 that prevents changes to "visibility" from being applied properly if the filter is changed to a different alpha on the same frame.
				}
				if (filters.indexOf("pacity") === -1) {
					//only used if browser doesn't support the standard opacity style property (IE 7 and 8). We omit the "O" to avoid case-sensitivity issues
					if (val !== 0 || !this.xn1) {
						//bugs in IE7/8 won't render the filter properly if opacity is ADDED on the same frame/render as "visibility" changes (this.xn1 is 1 if this tween is an "autoAlpha" tween)
						t.filter = filters + " alpha(opacity=" + val + ")"; //we round the value because otherwise, bugs in IE7/8 can prevent "visibility" changes from being applied properly.
					}
				} else {
					t.filter = filters.replace(_opacityExp, "opacity=" + val);
				}
			}
		};
		_registerComplexSpecialProp("opacity,alpha,autoAlpha", { defaultValue: "1", parser: function parser(t, e, p, cssp, pt, plugin) {
				var b = parseFloat(_getStyle(t, "opacity", _cs, false, "1")),
				    style = t.style,
				    isAutoAlpha = p === "autoAlpha";
				if (typeof e === "string" && e.charAt(1) === "=") {
					e = (e.charAt(0) === "-" ? -1 : 1) * parseFloat(e.substr(2)) + b;
				}
				if (isAutoAlpha && b === 1 && _getStyle(t, "visibility", _cs) === "hidden" && e !== 0) {
					//if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
					b = 0;
				}
				if (_supportsOpacity) {
					pt = new CSSPropTween(style, "opacity", b, e - b, pt);
				} else {
					pt = new CSSPropTween(style, "opacity", b * 100, (e - b) * 100, pt);
					pt.xn1 = isAutoAlpha ? 1 : 0; //we need to record whether or not this is an autoAlpha so that in the setRatio(), we know to duplicate the setting of the alpha in order to work around a bug in IE7 and IE8 that prevents changes to "visibility" from taking effect if the filter is changed to a different alpha(opacity) at the same time. Setting it to the SAME value first, then the new value works around the IE7/8 bug.
					style.zoom = 1; //helps correct an IE issue.
					pt.type = 2;
					pt.b = "alpha(opacity=" + pt.s + ")";
					pt.e = "alpha(opacity=" + (pt.s + pt.c) + ")";
					pt.data = t;
					pt.plugin = plugin;
					pt.setRatio = _setIEOpacityRatio;
				}
				if (isAutoAlpha) {
					//we have to create the "visibility" PropTween after the opacity one in the linked list so that they run in the order that works properly in IE8 and earlier
					pt = new CSSPropTween(style, "visibility", 0, 0, pt, -1, null, false, 0, b !== 0 ? "inherit" : "hidden", e === 0 ? "hidden" : "inherit");
					pt.xs0 = "inherit";
					cssp._overwriteProps.push(pt.n);
					cssp._overwriteProps.push(p);
				}
				return pt;
			} });

		var _removeProp = function _removeProp(s, p) {
			if (p) {
				if (s.removeProperty) {
					if (p.substr(0, 2) === "ms" || p.substr(0, 6) === "webkit") {
						//Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
						p = "-" + p;
					}
					s.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
				} else {
					//note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
					s.removeAttribute(p);
				}
			}
		},
		    _setClassNameRatio = function _setClassNameRatio(v) {
			this.t._gsClassPT = this;
			if (v === 1 || v === 0) {
				this.t.setAttribute("class", v === 0 ? this.b : this.e);
				var mpt = this.data,
				    //first MiniPropTween
				s = this.t.style;
				while (mpt) {
					if (!mpt.v) {
						_removeProp(s, mpt.p);
					} else {
						s[mpt.p] = mpt.v;
					}
					mpt = mpt._next;
				}
				if (v === 1 && this.t._gsClassPT === this) {
					this.t._gsClassPT = null;
				}
			} else if (this.t.getAttribute("class") !== this.e) {
				this.t.setAttribute("class", this.e);
			}
		};
		_registerComplexSpecialProp("className", { parser: function parser(t, e, p, cssp, pt, plugin, vars) {
				var b = t.getAttribute("class") || "",
				    //don't use t.className because it doesn't work consistently on SVG elements; getAttribute("class") and setAttribute("class", value") is more reliable.
				cssText = t.style.cssText,
				    difData,
				    bs,
				    cnpt,
				    cnptLookup,
				    mpt;
				pt = cssp._classNamePT = new CSSPropTween(t, p, 0, 0, pt, 2);
				pt.setRatio = _setClassNameRatio;
				pt.pr = -11;
				_hasPriority = true;
				pt.b = b;
				bs = _getAllStyles(t, _cs);
				//if there's a className tween already operating on the target, force it to its end so that the necessary inline styles are removed and the class name is applied before we determine the end state (we don't want inline styles interfering that were there just for class-specific values)
				cnpt = t._gsClassPT;
				if (cnpt) {
					cnptLookup = {};
					mpt = cnpt.data; //first MiniPropTween which stores the inline styles - we need to force these so that the inline styles don't contaminate things. Otherwise, there's a small chance that a tween could start and the inline values match the destination values and they never get cleaned.
					while (mpt) {
						cnptLookup[mpt.p] = 1;
						mpt = mpt._next;
					}
					cnpt.setRatio(1);
				}
				t._gsClassPT = pt;
				pt.e = e.charAt(1) !== "=" ? e : b.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + (e.charAt(0) === "+" ? " " + e.substr(2) : "");
				t.setAttribute("class", pt.e);
				difData = _cssDif(t, bs, _getAllStyles(t), vars, cnptLookup);
				t.setAttribute("class", b);
				pt.data = difData.firstMPT;
				t.style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
				pt = pt.xfirst = cssp.parse(t, difData.difs, pt, plugin); //we record the CSSPropTween as the xfirst so that we can handle overwriting propertly (if "className" gets overwritten, we must kill all the properties associated with the className part of the tween, so we can loop through from xfirst to the pt itself)
				return pt;
			} });

		var _setClearPropsRatio = function _setClearPropsRatio(v) {
			if (v === 1 || v === 0) if (this.data._totalTime === this.data._totalDuration && this.data.data !== "isFromStart") {
				//this.data refers to the tween. Only clear at the END of the tween (remember, from() tweens make the ratio go from 1 to 0, so we can't just check that and if the tween is the zero-duration one that's created internally to render the starting values in a from() tween, ignore that because otherwise, for example, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in).
				var s = this.t.style,
				    transformParse = _specialProps.transform.parse,
				    a,
				    p,
				    i,
				    clearTransform,
				    transform;
				if (this.e === "all") {
					s.cssText = "";
					clearTransform = true;
				} else {
					a = this.e.split(" ").join("").split(",");
					i = a.length;
					while (--i > -1) {
						p = a[i];
						if (_specialProps[p]) {
							if (_specialProps[p].parse === transformParse) {
								clearTransform = true;
							} else {
								p = p === "transformOrigin" ? _transformOriginProp : _specialProps[p].p; //ensures that special properties use the proper browser-specific property name, like "scaleX" might be "-webkit-transform" or "boxShadow" might be "-moz-box-shadow"
							}
						}
						_removeProp(s, p);
					}
				}
				if (clearTransform) {
					_removeProp(s, _transformProp);
					transform = this.t._gsTransform;
					if (transform) {
						if (transform.svg) {
							this.t.removeAttribute("data-svg-origin");
							this.t.removeAttribute("transform");
						}
						delete this.t._gsTransform;
					}
				}
			}
		};
		_registerComplexSpecialProp("clearProps", { parser: function parser(t, e, p, cssp, pt) {
				pt = new CSSPropTween(t, p, 0, 0, pt, 2);
				pt.setRatio = _setClearPropsRatio;
				pt.e = e;
				pt.pr = -10;
				pt.data = cssp._tween;
				_hasPriority = true;
				return pt;
			} });

		p = "bezier,throwProps,physicsProps,physics2D".split(",");
		i = p.length;
		while (i--) {
			_registerPluginProp(p[i]);
		}

		p = CSSPlugin.prototype;
		p._firstPT = p._lastParsedTransform = p._transform = null;

		//gets called when the tween renders for the first time. This kicks everything off, recording start/end values, etc.
		p._onInitTween = function (target, vars, tween, index) {
			if (!target.nodeType) {
				//css is only for dom elements
				return false;
			}
			this._target = _target = target;
			this._tween = tween;
			this._vars = vars;
			_index = index;
			_autoRound = vars.autoRound;
			_hasPriority = false;
			_suffixMap = vars.suffixMap || CSSPlugin.suffixMap;
			_cs = _getComputedStyle(target, "");
			_overwriteProps = this._overwriteProps;
			var style = target.style,
			    v,
			    pt,
			    pt2,
			    first,
			    last,
			    next,
			    zIndex,
			    tpt,
			    threeD;
			if (_reqSafariFix) if (style.zIndex === "") {
				v = _getStyle(target, "zIndex", _cs);
				if (v === "auto" || v === "") {
					//corrects a bug in [non-Android] Safari that prevents it from repainting elements in their new positions if they don't have a zIndex set. We also can't just apply this inside _parseTransform() because anything that's moved in any way (like using "left" or "top" instead of transforms like "x" and "y") can be affected, so it is best to ensure that anything that's tweening has a z-index. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly. Plus zIndex is less memory-intensive.
					this._addLazySet(style, "zIndex", 0);
				}
			}

			if (typeof vars === "string") {
				first = style.cssText;
				v = _getAllStyles(target, _cs);
				style.cssText = first + ";" + vars;
				v = _cssDif(target, v, _getAllStyles(target)).difs;
				if (!_supportsOpacity && _opacityValExp.test(vars)) {
					v.opacity = parseFloat(RegExp.$1);
				}
				vars = v;
				style.cssText = first;
			}

			if (vars.className) {
				//className tweens will combine any differences they find in the css with the vars that are passed in, so {className:"myClass", scale:0.5, left:20} would work.
				this._firstPT = pt = _specialProps.className.parse(target, vars.className, "className", this, null, null, vars);
			} else {
				this._firstPT = pt = this.parse(target, vars, null);
			}

			if (this._transformType) {
				threeD = this._transformType === 3;
				if (!_transformProp) {
					style.zoom = 1; //helps correct an IE issue.
				} else if (_isSafari) {
					_reqSafariFix = true;
					//if zIndex isn't set, iOS Safari doesn't repaint things correctly sometimes (seemingly at random).
					if (style.zIndex === "") {
						zIndex = _getStyle(target, "zIndex", _cs);
						if (zIndex === "auto" || zIndex === "") {
							this._addLazySet(style, "zIndex", 0);
						}
					}
					//Setting WebkitBackfaceVisibility corrects 3 bugs:
					// 1) [non-Android] Safari skips rendering changes to "top" and "left" that are made on the same frame/render as a transform update.
					// 2) iOS Safari sometimes neglects to repaint elements in their new positions. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly.
					// 3) Safari sometimes displayed odd artifacts when tweening the transform (or WebkitTransform) property, like ghosts of the edges of the element remained. Definitely a browser bug.
					//Note: we allow the user to override the auto-setting by defining WebkitBackfaceVisibility in the vars of the tween.
					if (_isSafariLT6) {
						this._addLazySet(style, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (threeD ? "visible" : "hidden"));
					}
				}
				pt2 = pt;
				while (pt2 && pt2._next) {
					pt2 = pt2._next;
				}
				tpt = new CSSPropTween(target, "transform", 0, 0, null, 2);
				this._linkCSSP(tpt, null, pt2);
				tpt.setRatio = _transformProp ? _setTransformRatio : _setIETransformRatio;
				tpt.data = this._transform || _getTransform(target, _cs, true);
				tpt.tween = tween;
				tpt.pr = -1; //ensures that the transforms get applied after the components are updated.
				_overwriteProps.pop(); //we don't want to force the overwrite of all "transform" tweens of the target - we only care about individual transform properties like scaleX, rotation, etc. The CSSPropTween constructor automatically adds the property to _overwriteProps which is why we need to pop() here.
			}

			if (_hasPriority) {
				//reorders the linked list in order of pr (priority)
				while (pt) {
					next = pt._next;
					pt2 = first;
					while (pt2 && pt2.pr > pt.pr) {
						pt2 = pt2._next;
					}
					if (pt._prev = pt2 ? pt2._prev : last) {
						pt._prev._next = pt;
					} else {
						first = pt;
					}
					if (pt._next = pt2) {
						pt2._prev = pt;
					} else {
						last = pt;
					}
					pt = next;
				}
				this._firstPT = first;
			}
			return true;
		};

		p.parse = function (target, vars, pt, plugin) {
			var style = target.style,
			    p,
			    sp,
			    bn,
			    en,
			    bs,
			    es,
			    bsfx,
			    esfx,
			    isStr,
			    rel;
			for (p in vars) {
				es = vars[p]; //ending value string
				if (typeof es === "function") {
					es = es(_index, _target);
				}
				sp = _specialProps[p]; //SpecialProp lookup.
				if (sp) {
					pt = sp.parse(target, es, p, this, pt, plugin, vars);
				} else {
					bs = _getStyle(target, p, _cs) + "";
					isStr = typeof es === "string";
					if (p === "color" || p === "fill" || p === "stroke" || p.indexOf("Color") !== -1 || isStr && _rgbhslExp.test(es)) {
						//Opera uses background: to define color sometimes in addition to backgroundColor:
						if (!isStr) {
							es = _parseColor(es);
							es = (es.length > 3 ? "rgba(" : "rgb(") + es.join(",") + ")";
						}
						pt = _parseComplex(style, p, bs, es, true, "transparent", pt, 0, plugin);
					} else if (isStr && _complexExp.test(es)) {
						pt = _parseComplex(style, p, bs, es, true, null, pt, 0, plugin);
					} else {
						bn = parseFloat(bs);
						bsfx = bn || bn === 0 ? bs.substr((bn + "").length) : ""; //remember, bs could be non-numeric like "normal" for fontWeight, so we should default to a blank suffix in that case.

						if (bs === "" || bs === "auto") {
							if (p === "width" || p === "height") {
								bn = _getDimension(target, p, _cs);
								bsfx = "px";
							} else if (p === "left" || p === "top") {
								bn = _calculateOffset(target, p, _cs);
								bsfx = "px";
							} else {
								bn = p !== "opacity" ? 0 : 1;
								bsfx = "";
							}
						}

						rel = isStr && es.charAt(1) === "=";
						if (rel) {
							en = parseInt(es.charAt(0) + "1", 10);
							es = es.substr(2);
							en *= parseFloat(es);
							esfx = es.replace(_suffixExp, "");
						} else {
							en = parseFloat(es);
							esfx = isStr ? es.replace(_suffixExp, "") : "";
						}

						if (esfx === "") {
							esfx = p in _suffixMap ? _suffixMap[p] : bsfx; //populate the end suffix, prioritizing the map, then if none is found, use the beginning suffix.
						}

						es = en || en === 0 ? (rel ? en + bn : en) + esfx : vars[p]; //ensures that any += or -= prefixes are taken care of. Record the end value before normalizing the suffix because we always want to end the tween on exactly what they intended even if it doesn't match the beginning value's suffix.

						//if the beginning/ending suffixes don't match, normalize them...
						if (bsfx !== esfx) if (esfx !== "") if (en || en === 0) if (bn) {
							//note: if the beginning value (bn) is 0, we don't need to convert units!
							bn = _convertToPixels(target, p, bn, bsfx);
							if (esfx === "%") {
								bn /= _convertToPixels(target, p, 100, "%") / 100;
								if (vars.strictUnits !== true) {
									//some browsers report only "px" values instead of allowing "%" with getComputedStyle(), so we assume that if we're tweening to a %, we should start there too unless strictUnits:true is defined. This approach is particularly useful for responsive designs that use from() tweens.
									bs = bn + "%";
								}
							} else if (esfx === "em" || esfx === "rem" || esfx === "vw" || esfx === "vh") {
								bn /= _convertToPixels(target, p, 1, esfx);

								//otherwise convert to pixels.
							} else if (esfx !== "px") {
								en = _convertToPixels(target, p, en, esfx);
								esfx = "px"; //we don't use bsfx after this, so we don't need to set it to px too.
							}
							if (rel) if (en || en === 0) {
								es = en + bn + esfx; //the changes we made affect relative calculations, so adjust the end value here.
							}
						}

						if (rel) {
							en += bn;
						}

						if ((bn || bn === 0) && (en || en === 0)) {
							//faster than isNaN(). Also, previously we required en !== bn but that doesn't really gain much performance and it prevents _parseToProxy() from working properly if beginning and ending values match but need to get tweened by an external plugin anyway. For example, a bezier tween where the target starts at left:0 and has these points: [{left:50},{left:0}] wouldn't work properly because when parsing the last point, it'd match the first (current) one and a non-tweening CSSPropTween would be recorded when we actually need a normal tween (type:0) so that things get updated during the tween properly.
							pt = new CSSPropTween(style, p, bn, en - bn, pt, 0, p, _autoRound !== false && (esfx === "px" || p === "zIndex"), 0, bs, es);
							pt.xs0 = esfx;
							//DEBUG: _log("tween "+p+" from "+pt.b+" ("+bn+esfx+") to "+pt.e+" with suffix: "+pt.xs0);
						} else if (style[p] === undefined || !es && (es + "" === "NaN" || es == null)) {
							_log("invalid " + p + " tween value: " + vars[p]);
						} else {
							pt = new CSSPropTween(style, p, en || bn || 0, 0, pt, -1, p, false, 0, bs, es);
							pt.xs0 = es === "none" && (p === "display" || p.indexOf("Style") !== -1) ? bs : es; //intermediate value should typically be set immediately (end value) except for "display" or things like borderTopStyle, borderBottomStyle, etc. which should use the beginning value during the tween.
							//DEBUG: _log("non-tweening value "+p+": "+pt.xs0);
						}
					}
				}
				if (plugin) if (pt && !pt.plugin) {
					pt.plugin = plugin;
				}
			}
			return pt;
		};

		//gets called every time the tween updates, passing the new ratio (typically a value between 0 and 1, but not always (for example, if an Elastic.easeOut is used, the value can jump above 1 mid-tween). It will always start and 0 and end at 1.
		p.setRatio = function (v) {
			var pt = this._firstPT,
			    min = 0.000001,
			    val,
			    str,
			    i;
			//at the end of the tween, we set the values to exactly what we received in order to make sure non-tweening values (like "position" or "float" or whatever) are set and so that if the beginning/ending suffixes (units) didn't match and we normalized to px, the value that the user passed in is used here. We check to see if the tween is at its beginning in case it's a from() tween in which case the ratio will actually go from 1 to 0 over the course of the tween (backwards).
			if (v === 1 && (this._tween._time === this._tween._duration || this._tween._time === 0)) {
				while (pt) {
					if (pt.type !== 2) {
						if (pt.r && pt.type !== -1) {
							val = Math.round(pt.s + pt.c);
							if (!pt.type) {
								pt.t[pt.p] = val + pt.xs0;
							} else if (pt.type === 1) {
								//complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
								i = pt.l;
								str = pt.xs0 + val + pt.xs1;
								for (i = 1; i < pt.l; i++) {
									str += pt["xn" + i] + pt["xs" + (i + 1)];
								}
								pt.t[pt.p] = str;
							}
						} else {
							pt.t[pt.p] = pt.e;
						}
					} else {
						pt.setRatio(v);
					}
					pt = pt._next;
				}
			} else if (v || !(this._tween._time === this._tween._duration || this._tween._time === 0) || this._tween._rawPrevTime === -0.000001) {
				while (pt) {
					val = pt.c * v + pt.s;
					if (pt.r) {
						val = Math.round(val);
					} else if (val < min) if (val > -min) {
						val = 0;
					}
					if (!pt.type) {
						pt.t[pt.p] = val + pt.xs0;
					} else if (pt.type === 1) {
						//complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
						i = pt.l;
						if (i === 2) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2;
						} else if (i === 3) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3;
						} else if (i === 4) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4;
						} else if (i === 5) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4 + pt.xn4 + pt.xs5;
						} else {
							str = pt.xs0 + val + pt.xs1;
							for (i = 1; i < pt.l; i++) {
								str += pt["xn" + i] + pt["xs" + (i + 1)];
							}
							pt.t[pt.p] = str;
						}
					} else if (pt.type === -1) {
						//non-tweening value
						pt.t[pt.p] = pt.xs0;
					} else if (pt.setRatio) {
						//custom setRatio() for things like SpecialProps, external plugins, etc.
						pt.setRatio(v);
					}
					pt = pt._next;
				}

				//if the tween is reversed all the way back to the beginning, we need to restore the original values which may have different units (like % instead of px or em or whatever).
			} else {
				while (pt) {
					if (pt.type !== 2) {
						pt.t[pt.p] = pt.b;
					} else {
						pt.setRatio(v);
					}
					pt = pt._next;
				}
			}
		};

		/**
   * @private
   * Forces rendering of the target's transforms (rotation, scale, etc.) whenever the CSSPlugin's setRatio() is called.
   * Basically, this tells the CSSPlugin to create a CSSPropTween (type 2) after instantiation that runs last in the linked
   * list and calls the appropriate (3D or 2D) rendering function. We separate this into its own method so that we can call
   * it from other plugins like BezierPlugin if, for example, it needs to apply an autoRotation and this CSSPlugin
   * doesn't have any transform-related properties of its own. You can call this method as many times as you
   * want and it won't create duplicate CSSPropTweens.
   *
   * @param {boolean} threeD if true, it should apply 3D tweens (otherwise, just 2D ones are fine and typically faster)
   */
		p._enableTransforms = function (threeD) {
			this._transform = this._transform || _getTransform(this._target, _cs, true); //ensures that the element has a _gsTransform property with the appropriate values.
			this._transformType = !(this._transform.svg && _useSVGTransformAttr) && (threeD || this._transformType === 3) ? 3 : 2;
		};

		var lazySet = function lazySet(v) {
			this.t[this.p] = this.e;
			this.data._linkCSSP(this, this._next, null, true); //we purposefully keep this._next even though it'd make sense to null it, but this is a performance optimization, as this happens during the while (pt) {} loop in setRatio() at the bottom of which it sets pt = pt._next, so if we null it, the linked list will be broken in that loop.
		};
		/** @private Gives us a way to set a value on the first render (and only the first render). **/
		p._addLazySet = function (t, p, v) {
			var pt = this._firstPT = new CSSPropTween(t, p, 0, 0, this._firstPT, 2);
			pt.e = v;
			pt.setRatio = lazySet;
			pt.data = this;
		};

		/** @private **/
		p._linkCSSP = function (pt, next, prev, remove) {
			if (pt) {
				if (next) {
					next._prev = pt;
				}
				if (pt._next) {
					pt._next._prev = pt._prev;
				}
				if (pt._prev) {
					pt._prev._next = pt._next;
				} else if (this._firstPT === pt) {
					this._firstPT = pt._next;
					remove = true; //just to prevent resetting this._firstPT 5 lines down in case pt._next is null. (optimized for speed)
				}
				if (prev) {
					prev._next = pt;
				} else if (!remove && this._firstPT === null) {
					this._firstPT = pt;
				}
				pt._next = next;
				pt._prev = prev;
			}
			return pt;
		};

		p._mod = function (lookup) {
			var pt = this._firstPT;
			while (pt) {
				if (typeof lookup[pt.p] === "function" && lookup[pt.p] === Math.round) {
					//only gets called by RoundPropsPlugin (ModifyPlugin manages all the rendering internally for CSSPlugin properties that need modification). Remember, we handle rounding a bit differently in this plugin for performance reasons, leveraging "r" as an indicator that the value should be rounded internally..
					pt.r = 1;
				}
				pt = pt._next;
			}
		};

		//we need to make sure that if alpha or autoAlpha is killed, opacity is too. And autoAlpha affects the "visibility" property.
		p._kill = function (lookup) {
			var copy = lookup,
			    pt,
			    p,
			    xfirst;
			if (lookup.autoAlpha || lookup.alpha) {
				copy = {};
				for (p in lookup) {
					//copy the lookup so that we're not changing the original which may be passed elsewhere.
					copy[p] = lookup[p];
				}
				copy.opacity = 1;
				if (copy.autoAlpha) {
					copy.visibility = 1;
				}
			}
			if (lookup.className && (pt = this._classNamePT)) {
				//for className tweens, we need to kill any associated CSSPropTweens too; a linked list starts at the className's "xfirst".
				xfirst = pt.xfirst;
				if (xfirst && xfirst._prev) {
					this._linkCSSP(xfirst._prev, pt._next, xfirst._prev._prev); //break off the prev
				} else if (xfirst === this._firstPT) {
					this._firstPT = pt._next;
				}
				if (pt._next) {
					this._linkCSSP(pt._next, pt._next._next, xfirst._prev);
				}
				this._classNamePT = null;
			}
			pt = this._firstPT;
			while (pt) {
				if (pt.plugin && pt.plugin !== p && pt.plugin._kill) {
					//for plugins that are registered with CSSPlugin, we should notify them of the kill.
					pt.plugin._kill(lookup);
					p = pt.plugin;
				}
				pt = pt._next;
			}
			return TweenPlugin.prototype._kill.call(this, copy);
		};

		//used by cascadeTo() for gathering all the style properties of each child element into an array for comparison.
		var _getChildStyles = function _getChildStyles(e, props, targets) {
			var children, i, child, type;
			if (e.slice) {
				i = e.length;
				while (--i > -1) {
					_getChildStyles(e[i], props, targets);
				}
				return;
			}
			children = e.childNodes;
			i = children.length;
			while (--i > -1) {
				child = children[i];
				type = child.type;
				if (child.style) {
					props.push(_getAllStyles(child));
					if (targets) {
						targets.push(child);
					}
				}
				if ((type === 1 || type === 9 || type === 11) && child.childNodes.length) {
					_getChildStyles(child, props, targets);
				}
			}
		};

		/**
   * Typically only useful for className tweens that may affect child elements, this method creates a TweenLite
   * and then compares the style properties of all the target's child elements at the tween's start and end, and
   * if any are different, it also creates tweens for those and returns an array containing ALL of the resulting
   * tweens (so that you can easily add() them to a TimelineLite, for example). The reason this functionality is
   * wrapped into a separate static method of CSSPlugin instead of being integrated into all regular className tweens
   * is because it creates entirely new tweens that may have completely different targets than the original tween,
   * so if they were all lumped into the original tween instance, it would be inconsistent with the rest of the API
   * and it would create other problems. For example:
   *  - If I create a tween of elementA, that tween instance may suddenly change its target to include 50 other elements (unintuitive if I specifically defined the target I wanted)
   *  - We can't just create new independent tweens because otherwise, what happens if the original/parent tween is reversed or pause or dropped into a TimelineLite for tight control? You'd expect that tween's behavior to affect all the others.
   *  - Analyzing every style property of every child before and after the tween is an expensive operation when there are many children, so this behavior shouldn't be imposed on all className tweens by default, especially since it's probably rare that this extra functionality is needed.
   *
   * @param {Object} target object to be tweened
   * @param {number} Duration in seconds (or frames for frames-based tweens)
   * @param {Object} Object containing the end values, like {className:"newClass", ease:Linear.easeNone}
   * @return {Array} An array of TweenLite instances
   */
		CSSPlugin.cascadeTo = function (target, duration, vars) {
			var tween = TweenLite.to(target, duration, vars),
			    results = [tween],
			    b = [],
			    e = [],
			    targets = [],
			    _reservedProps = TweenLite._internals.reservedProps,
			    i,
			    difs,
			    p,
			    from;
			target = tween._targets || tween.target;
			_getChildStyles(target, b, targets);
			tween.render(duration, true, true);
			_getChildStyles(target, e);
			tween.render(0, true, true);
			tween._enabled(true);
			i = targets.length;
			while (--i > -1) {
				difs = _cssDif(targets[i], b[i], e[i]);
				if (difs.firstMPT) {
					difs = difs.difs;
					for (p in vars) {
						if (_reservedProps[p]) {
							difs[p] = vars[p];
						}
					}
					from = {};
					for (p in difs) {
						from[p] = b[i][p];
					}
					results.push(TweenLite.fromTo(targets[i], duration, from, difs));
				}
			}
			return results;
		};

		TweenPlugin.activate([CSSPlugin]);
		return CSSPlugin;
	}, true);
});if (_gsScope._gsDefine) {
	_gsScope._gsQueue.pop()();
}

//export to AMD/RequireJS and CommonJS/Node (precursor to full modular build system coming at a later date)
(function (name) {
	"use strict";

	var getGlobal = function getGlobal() {
		return (_gsScope.GreenSockGlobals || _gsScope)[name];
	};
	if (true) {
		//AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(27)], __WEBPACK_AMD_DEFINE_FACTORY__ = (getGlobal),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== "undefined" && module.exports) {
		//node
		require("./TweenLite.js");
		module.exports = getGlobal();
	}
})("CSSPlugin");
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(28).twig,
    template = twig({id:"cb2ae216402a8ff1889998d5fa8b50f8fb8a550fbf8ee2d81d6597e4ecba4fdeab0ef1ff60cfaf7c4d0e5cefbf770928e7cc6c4141c728dca922000f7659e8df", data:[{"type":"raw","value":"<section class=\"page-wrapper\" id=\"homepage\">\n\n\t<div class=\"introduction\">\n\t\t\t<h1>Dynamic content: "},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"data","match":["data"]},{"type":"Twig.expression.type.key.period","key":"content"},{"type":"Twig.expression.type.key.period","key":"title"}]},{"type":"raw","value":"</h1>\n\t\t\t<h2>INDEX PAGE Static content</h2>\n\n\t\t\t"},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"svgs","match":["svgs"]},{"type":"Twig.expression.type.key.period","key":"facebook"},{"type":"Twig.expression.type.filter","value":"raw","match":["| raw","raw"]}]},{"type":"raw","value":"\n\t</div>\n\n</section>"}], allowInlineIncludes: true, rethrow: true});

module.exports = function(context) { return template.render(context); }

/***/ }),
/* 183 */
/***/ (function(module, exports) {



/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Pagecontainer = __webpack_require__(60);

var _Pagecontainer2 = _interopRequireDefault(_Pagecontainer);

var _About = __webpack_require__(185);

var _About2 = _interopRequireDefault(_About);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// actions
// import {setIntroListHomepage} from './actions';

var AboutContainer = function (_AbstractPageContaine) {
	_inherits(AboutContainer, _AbstractPageContaine);

	function AboutContainer(options) {
		_classCallCheck(this, AboutContainer);

		var _this = _possibleConstructorReturn(this, (AboutContainer.__proto__ || Object.getPrototypeOf(AboutContainer)).call(this, options));

		_this.Component = _About2.default;

		return _this;
	}

	_createClass(AboutContainer, [{
		key: 'initData',
		value: function initData() {
			console.log('AboutContainer:initData');
			// const list = {
			// 	default_landing: false,
			// };

			// this.data.cities.forEach((key, value) => {
			// 	list[key.id] = false;
			// });

			// this.dispatch(setIntroListHomepage(list));

			_get(AboutContainer.prototype.__proto__ || Object.getPrototypeOf(AboutContainer.prototype), 'initData', this).call(this);
		}
	}]);

	return AboutContainer;
}(_Pagecontainer2.default);

exports.default = AboutContainer;

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Pagecomponent = __webpack_require__(26);

var _Pagecomponent2 = _interopRequireDefault(_Pagecomponent);

var _about = __webpack_require__(186);

var _about2 = _interopRequireDefault(_about);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Homepage = function (_AbstractPageComponen) {
	_inherits(Homepage, _AbstractPageComponen);

	function Homepage(options) {
		_classCallCheck(this, Homepage);

		var _this = _possibleConstructorReturn(this, (Homepage.__proto__ || Object.getPrototypeOf(Homepage)).call(this, options));

		_this.template = _about2.default;

		_this.states = {
			isAnimating: false
		};
		return _this;
	}

	_createClass(Homepage, [{
		key: 'dispose',
		value: function dispose() {
			_get(Homepage.prototype.__proto__ || Object.getPrototypeOf(Homepage.prototype), 'dispose', this).call(this);
		}
	}]);

	return Homepage;
}(_Pagecomponent2.default);

exports.default = Homepage;

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(28).twig,
    template = twig({id:"cee5f1b3d3e4ee46bb1db7c224c1d6fedd9b47830aaae95703410cd995e2cf8f1d5dd11f940e03fefe7b8ce10ceb1aca8d74583817dc2e895cf4498a18bd603a", data:[{"type":"raw","value":"<section class=\"page-wrapper\" id=\"homepage\">\n\n\t\t<div class=\"introduction\">\n\t\t\t\t<h1>Dynamic content: "},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"data","match":["data"]},{"type":"Twig.expression.type.key.period","key":"content"},{"type":"Twig.expression.type.key.period","key":"title"}]},{"type":"raw","value":"</h1>\n\t\t\t\t<h2>ABOUT PAGE Static content</h2>\n\t\t</div>\n\n\t</section>"}], allowInlineIncludes: true, rethrow: true});

module.exports = function(context) { return template.render(context); }

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _container = __webpack_require__(5);

var _container2 = _interopRequireDefault(_container);

var _NotFound = __webpack_require__(188);

var _NotFound2 = _interopRequireDefault(_NotFound);

var _selectors = __webpack_require__(25);

var _locations = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFoundContainer = function (_AbstractPageContaine) {
	_inherits(NotFoundContainer, _AbstractPageContaine);

	function NotFoundContainer(options) {
		_classCallCheck(this, NotFoundContainer);

		var _this = _possibleConstructorReturn(this, (NotFoundContainer.__proto__ || Object.getPrototypeOf(NotFoundContainer)).call(this, options));

		_this.Component = _NotFound2.default;
		return _this;
	}

	_createClass(NotFoundContainer, [{
		key: 'init',
		value: function init() {
			// this.dispatch(showLoader());
			return _get(NotFoundContainer.prototype.__proto__ || Object.getPrototypeOf(NotFoundContainer.prototype), 'init', this).call(this);
		}
	}, {
		key: 'initData',
		value: function initData() {
			this.data = {
				home: (0, _selectors.getRoute)(_locations.HOMEPAGE)
			};
		}
	}]);

	return NotFoundContainer;
}(_container2.default);

exports.default = NotFoundContainer;

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Pagecomponent = __webpack_require__(26);

var _Pagecomponent2 = _interopRequireDefault(_Pagecomponent);

var _error = __webpack_require__(189);

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFound = function (_AbstractPageComponen) {
	_inherits(NotFound, _AbstractPageComponen);

	function NotFound(options) {
		_classCallCheck(this, NotFound);

		var _this = _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).call(this, options));

		_this.template = _error2.default;
		return _this;
	}

	return NotFound;
}(_Pagecomponent2.default);

exports.default = NotFound;

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(28).twig,
    template = twig({id:"09c6b13b9726a404a293232421e5c1665b4aed9c0d72c0dfd4c2a4154894e05cdc8a7adcbe548c0c3b26dcbf3604d4126099ce1884e0524ff0a35a4857c5f0f5", data:[{"type":"raw","value":"<section class=\"page-wrapper\" id=\"error\">\n\n\t<div class=\"introduction\">\n\n\t\t\t<h1>Not the page you are lookig for</h1>\n\n\t</div>\n\n</section>"}], allowInlineIncludes: true, rethrow: true});

module.exports = function(context) { return template.render(context); }

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _store = __webpack_require__(0);

var _store2 = _interopRequireDefault(_store);

var _reduxWatch = __webpack_require__(59);

var _reduxWatch2 = _interopRequireDefault(_reduxWatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import _ from 'lodash';
// import SVGS from 'jsons/svgs.json';

/**
 * Component: Defines a component with basic methods
 * @constructor
 */
var Base = function () {
	_createClass(Base, [{
		key: 'promises',
		set: function set(newPromises) {
			if (!this._promises) this._promises = {};
			for (var promise in newPromises) {
				this._promises[promise] = newPromises[promise];
			}
		},
		get: function get() {
			return this._promises;
		}
	}, {
		key: 'states',
		set: function set(states) {
			for (var state in states) {
				// eslint-disable-line guard-for-in
				this._states[state] = states[state];
			}
		},
		get: function get() {
			return this._states;
		}
	}, {
		key: 'storeEvents',
		set: function set(storeEvents) {
			for (var objectPath in storeEvents) {
				if (!storeEvents[objectPath]) continue;
				this._storeEvents[objectPath] = storeEvents[objectPath];
			}
			this.subscribe();
		},
		get: function get() {
			return this._storeEvents;
		}
	}]);

	function Base() {
		_classCallCheck(this, Base);

		/**
     * Object as associative array of all the <promises> objects
     * @type {Object}
     */
		this._promises = {};

		/**
   * Object as associative array of all the states
   * @type {Object}
   */
		this._states = {};

		/**
     * Object as associative array of all <watcher> objects
     * @type {Object}
     */
		this._storeEvents = {};

		/**
     * Object as associative array of all <subscriptions> objects
     * @type {Object}
     */
		this.subscriptions = {};
	}

	/**
  * Init
  * @return {Promise} A Promise the component is init
  */


	_createClass(Base, [{
		key: 'init',
		value: function init() {
			var _this = this;

			return new Promise(function (resolve, reject) {
				_this.promises.init.resolve = resolve;
				_this.promises.init.reject = reject;

				var isInit = _this.states.isInit;


				if (isInit) {
					_this.promises.init.reject();
					return;
				}

				_this.initComponent();
			});
		}
	}, {
		key: 'initComponent',
		value: function initComponent() {
			this.onInit();
		}

		/**
   * Once the component is init
   */

	}, {
		key: 'onInit',
		value: function onInit() {
			console.log('ONInit');
			this.setState({ isInit: true, canUpdate: true });
			this.promises.init.resolve();
		}
	}, {
		key: 'setState',
		value: function setState() {
			var partialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var callback = arguments[1];
			var needRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

			if ((typeof partialState === 'undefined' ? 'undefined' : _typeof(partialState)) !== 'object' && typeof partialState !== 'function' && partialState !== null) {
				console.error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
				return;
			}

			for (var key in partialState) {
				// eslint-disable-line guard-for-in
				this.states[key] = partialState[key];
			}

			if (callback) callback();
			if (needRender) this.render();
		}
	}, {
		key: 'subscribe',
		value: function subscribe(o) {
			console.log('o', o);

			// When an object is givin for a specific subscription
			if (o) {
				if (this.subscriptions[o.path]) {
					this.subscriptions[o.path]();
				}

				var method = o.cb;

				if (typeof method !== 'function') method = this[method];
				if (!method) return;

				this._storeEvents[o.path] = method;

				// const watcher = watch(() => {
				// 	return store.getState().toJS();
				// }, o.path, compare);
				// this.subscriptions[o.path] = store.subscribe(watcher(method));
				var watcher = (0, _reduxWatch2.default)(_store2.default.getState, o.path);
				this.subscriptions[o.path] = _store2.default.subscribe(watcher(method));

				return;
			}

			console.log('this.storeEvents', this.storeEvents);

			for (var path in this.storeEvents) {
				console.log('path', path);

				if (!this.storeEvents[path]) continue;
				if (this.subscriptions[path]) this.subscriptions[path]();

				var _method = this.storeEvents[path];

				if (typeof _method !== 'function') _method = this[_method];
				if (!_method) continue;

				var _watcher = (0, _reduxWatch2.default)(_store2.default.getState, path);
				this.subscriptions[path] = _store2.default.subscribe(_watcher(_method));
			}
		}
	}, {
		key: 'unsubscribe',
		value: function unsubscribe() {
			var path_ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			if (path_) {
				if (this.subscriptions[path_]) {
					this.subscriptions[path_]();
					delete this.subscriptions[path_];
				}
				return;
			}

			for (var path in this.subscriptions) {
				if (!this.subscriptions[path]) continue;
				// To unsubscribe the change listener, invoke the function returned by subscribe.
				// Ex : let unsubscribe = store.subscribe(handleChange)
				// unsubscribe()
				this.subscriptions[path]();
			}
			this.subscriptions = {};
		}
	}, {
		key: 'dispatch',
		value: function dispatch(action) {
			_store2.default.dispatch(action);
		}
	}, {
		key: 'resize',
		value: function resize() {}
	}]);

	return Base;
}();

exports.default = Base;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map