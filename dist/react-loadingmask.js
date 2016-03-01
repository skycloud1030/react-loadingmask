(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define("reactloadingmask", ["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["reactloadingmask"] = factory(require("react"), require("react-dom"));
	else
		root["reactloadingmask"] = factory(root["react"], root["react-dom"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _loadingMask = __webpack_require__(1);

	module.exports = {
	  LoadingMask: _loadingMask.LoadingMask
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/* loadingMask.jsx*/
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(3);
	var classNames = __webpack_require__(4);

	var LoadingMask = exports.LoadingMask = function (_React$Component) {
	  _inherits(LoadingMask, _React$Component);

	  function LoadingMask(props) {
	    _classCallCheck(this, LoadingMask);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LoadingMask).call(this, props));

	    _this.state = {
	      width: 300,
	      height: 300,
	      classSet: "loadingMask"
	    };
	    return _this;
	  }

	  _createClass(LoadingMask, [{
	    key: '_autoWidth',
	    value: function _autoWidth() {
	      var children = this.props.children;

	      var domNode = ReactDOM.findDOMNode(this.refs[0]);
	      if (domNode) {
	        this.setState({ width: domNode.offsetWidth, height: domNode.offsetHeight });
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._autoWidth();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps() {
	      this._autoWidth();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var state = _props.state;
	      var children = _props.children;
	      var _state = this.state;
	      var width = _state.width;
	      var height = _state.height;
	      var classSet = _state.classSet;

	      var newChildren = undefined;

	      if (children) {
	        newChildren = React.cloneElement(children, { ref: 0 });
	      } else {
	        classSet = classNames(classSet, "global");
	        width = "100%";
	        height = "100%";
	      }

	      if (state == false) {
	        return React.createElement(
	          'div',
	          null,
	          children
	        );
	      } else {
	        return React.createElement(
	          'div',
	          null,
	          React.createElement(
	            'div',
	            { className: classSet, style: { width: width, height: height } },
	            React.createElement('div', { className: 'backColor' }),
	            React.createElement('div', { className: 'backGif' })
	          ),
	          newChildren
	        );
	      }
	    }
	  }]);

	  return LoadingMask;
	}(React.Component);

	;
	LoadingMask.defaultProps = { state: false, children: null };
	LoadingMask.propTypes = { children: React.PropTypes.object };

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }
/******/ ])
});
;