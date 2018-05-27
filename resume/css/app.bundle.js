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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_main_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_main_css__);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(2);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/_css-loader@0.28.11@css-loader/index.js!./main.css", function() {
		var newContent = require("!!../../node_modules/_css-loader@0.28.11@css-loader/index.js!./main.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "body {\r\n    font-family: \"Helvetica Neue\", \"Arial\", \"PingFang SC\", \"Hiragino Sans GB\", \"STHeiti\", \"Microsoft YaHei\", \"WenQuanYi Micro Hei\", sans-serif;\r\n    background: #2d4e5c;\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\n\r\nmain{\r\n    margin: 0 auto;\r\n  background: #2d4e5c url(../images/background.png);\r\n    width: 1100px;\r\n    /*height: 800px;*/\r\n    display: -webkit-box;\r\n    /*display: -moz-box;*/\r\n    display: -ms-flexbox;\r\n    /*-webkit-box-align: center;*/\r\n    /*-moz-box-align: center;*/\r\n    /*-ms-flex-align:center;*/\r\n    -webkit-box-pack: center;\r\n    -moz-box-pack: center;\r\n    -ms-flex-pack:center;\r\n}\r\n@media (max-width: 767px) {\r\n    main{\r\n        width:100%;\r\n        background: none;\r\n        display: block;\r\n    }\r\n\r\n}\r\n\r\n\r\naside {\r\n    position: fixed;\r\n    top: 50%;\r\n    right: 0;\r\n    -ms-transform: translate(0, -50%);\r\n    transform: translate(0, -50%); }\r\n\r\n@media print {\r\n    aside {\r\n        display: none !important; } }\r\n@media (max-width: 767px) {\r\n    aside {\r\n        position: relative;\r\n        top: 0;\r\n        right: auto;\r\n        display: table;\r\n        width: 100%;\r\n        -ms-transform: none;\r\n        transform: none; }\r\n    aside ul {\r\n        display: table-row; }\r\n    aside li {\r\n        display: table-cell;\r\n        text-align: center;\r\n        border-radius: 0 !important; }\r\n    aside a {\r\n        padding-right: 0;\r\n        padding-left: 0; } }\r\naside li {\r\n    margin-top: 6px;\r\n    transition: 0.2s linear;\r\n    border-radius: 5px 0 0 5px;\r\n    background-color: rgba(0, 0, 0, 0.8); }\r\naside li a {\r\n    display: inline-block;\r\n    width: 100%;\r\n    padding: 10px;\r\n    text-decoration: none;\r\n    color: #fff; }\r\naside li:hover {\r\n    background-color: rgba(55, 55, 55, 0.8); }\r\n\r\nheader {\r\n    overflow: hidden;\r\n    padding: 30px 45px;\r\n    color: #fff;\r\n    background-color: #051c1b;\r\n\r\n/*header{*/\r\n    /*width: 900px;*/\r\n    /*height: 250px;*/\r\n/*}*/\r\n\r\n}\r\n@media (max-width: 767px) {\r\n    header {\r\n        padding: 30px 10px; } }\r\n@media print {\r\n    header {\r\n        padding: 20px 45px; } }\r\n\r\n.qrcode {\r\n    float: left;\r\n    margin: 0; }\r\n\r\n@media (max-width: 1024px) {\r\n    .qrcode {\r\n        display: none; } }\r\n@media print {\r\n    .qrcode {\r\n        display: block;\r\n        margin-top: 5px; } }\r\n.qrcode img {\r\n                                                                        /*120*/\r\n    width: 180px;\r\n                                                                        /*120*/\r\n                                                                        /*仅设置width*/\r\n    /*height: 160px;*/\r\n     }\r\n\r\n.title {\r\n    float: right;\r\n    text-align: right; }\r\n@media (max-width: 767px) {\r\n    .title {\r\n        float: none;\r\n        text-align: center; }\r\n    .title h2 {\r\n        padding: 0 6px; } }\r\n\r\n@media print {\r\n    .title {\r\n        float: right;\r\n        text-align: right; } }\r\n.title h1 {\r\n    font-size: 72px;\r\n    line-height: 1;\r\n    margin: 5px 0;\r\n    padding: 5px 0; }\r\n.title h2 {\r\n    font-size: 20.8px;\r\n    font-weight: 400;\r\n    margin: 5px 0;\r\n    padding: 5px 6px; }\r\n\r\naddress {\r\n    overflow-y: hidden; }\r\n\r\n.phone {\r\n    display: inline-block; }\r\n@media print {\r\n    .phone {\r\n        display: block; } }\r\n\r\n@media print {\r\n    .wechat {\r\n        display: none; } }\r\n\r\n.contacts {\r\n    font-size: 18px;\r\n    float: left;\r\n    padding-left: 16px; }\r\n@media (max-width: 1024px) {\r\n    .contacts {\r\n        margin-top: 5px; }\r\n    .contacts li {\r\n        line-height: 1.6; } }\r\n@media print {\r\n    .contacts {\r\n        line-height: 1.4;\r\n        margin-top: 0; } }\r\n.contacts li {\r\n    font-style: initial;\r\n    line-height: 1.4; }\r\n.contacts a {\r\n    transition: 0.3s ease-out;\r\n    text-decoration: none;\r\n    color: #fff; }\r\n.contacts a:hover {\r\n    color: #a3d3d1; }\r\n\r\nsection {\r\n    margin-bottom: 14px; }\r\n@media print {\r\n    section {\r\n        margin-bottom: 8px; } }\r\n\r\n@media print {\r\n    dl {\r\n        margin: 10px 0; }\r\n    dd {\r\n        line-height: 1.2;\r\n        font-size: 14px; } }\r\n\r\ndd {\r\n    line-height: 1.42; }\r\n\r\n@media (min-width: 1024px) {\r\n    .column-6 {\r\n        float: left;\r\n        width: 50%; } }\r\n\r\n@media (max-width: 1023px) {\r\n    .column-6 {\r\n        width: 100%;\r\n        padding-left: 0 !important; } }\r\n\r\n@media print {\r\n    .column-6 {\r\n        float: left;\r\n        width: 50%; } }\r\n\r\n.column {\r\n    padding-left: 15px; }\r\n\r\n.content {\r\n    overflow: hidden;\r\n    padding: 30px 45px;\r\n    background: #fff; }\r\n@media (max-width: 414px) {\r\n    .content {\r\n        padding: 30px 10px; } }\r\n@media print {\r\n    .content {\r\n        padding: 20px 20px !important; } }\r\n\r\n.sec-title-wrapper {\r\n    overflow-y: hidden; }\r\n.sec-title-wrapper .sec-title {\r\n    float: left;\r\n    margin: 0 0 0 10px;\r\n    padding: 0; }\r\n.sec-title-wrapper .sec-zh {\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n    float: left; }\r\n.sec-title-wrapper .sec-en {\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    font-variant: small-caps;\r\n    float: left;\r\n    clear: left;\r\n    color: teal; }\r\n\r\n.sec-content {\r\n    margin-bottom: 22px;\r\n    margin-left: 20px; }\r\n\r\n.timeline-wrapper {\r\n    margin-top: -28px; }\r\n.timeline-wrapper ul {\r\n    padding-top: 28px;\r\n    border-left: 5px solid #333; }\r\n.timeline-wrapper .timeline-title {\r\n    font-size: 17px;\r\n    font-weight: 400;\r\n    line-height: 1.33;\r\n    margin-bottom: 0;\r\n    margin-left: 10px;\r\n    padding: 2px 0 2px 22px;\r\n    color: #fff;\r\n    border-radius: 5px;\r\n    background: #333; }\r\n.timeline-wrapper::after {\r\n    float: left;\r\n    width: 0;\r\n    height: 0;\r\n    margin-top: -23px;\r\n    margin-left: 15px;\r\n    content: \"\";\r\n    border: 8px solid #333;\r\n    border-radius: 100%; }\r\n\r\n.education .education-content {\r\n    margin: 0; }\r\n\r\n.education .education-name {\r\n    font-size: 32px;\r\n    margin: 6px 0 5px 26px; }\r\n\r\n.education dd {\r\n    margin-left: 27px; }\r\n\r\n.language .language-cert-type {\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n    float: left;\r\n    padding-bottom: 3px; }\r\n\r\n.language .language-cert-wrapper {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    overflow-y: hidden;\r\n    -ms-flex-align: center;\r\n    align-items: center; }\r\n\r\n.language .progress {\r\n    float: left;\r\n    width: 78%;\r\n    height: 25px;\r\n    margin-top: 1.8px;\r\n    margin-bottom: 5px;\r\n    margin-left: 26px;\r\n    border-radius: 4px;\r\n    background: #333; }\r\n@media (max-width: 414px) {\r\n    .language .progress {\r\n        width: 75%;\r\n        margin-left: 10px; } }\r\n@media print {\r\n    .language .progress {\r\n        width: 75%;\r\n        margin-left: 10px; } }\r\n.language .progress .progress-bar {\r\n    height: 100%;\r\n    border-radius: 4px;\r\n    background: teal; }\r\n.language .progress .progress-bar .progress-label {\r\n    font-size: 19px;\r\n    float: right;\r\n    margin-right: 10px;\r\n    color: #fff; }\r\n\r\n.language .language-skills li {\r\n    line-height: 1.4; }\r\n@media print {\r\n    .language .language-skills li {\r\n        line-height: 1.2; } }\r\n\r\n.experience {\r\n    overflow-y: hidden; }\r\n.experience .experience-content {\r\n    margin: 0; }\r\n.experience .experience-position {\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    margin: 6px 0 5px 26px; }\r\n.experience .experience-task {\r\n    font-size: 15px;\r\n    margin-left: 27px; }\r\n@media print {\r\n    .experience .experience-task {\r\n        font-size: 14px; } }\r\n.experience .experience-time {\r\n    font-size: 15px;\r\n    float: right;\r\n    margin-right: 10px; }\r\n@media print {\r\n    .experience .experience-time {\r\n        font-size: 14px; } }\r\n.experience .experience-link {\r\n    display: inline-block;\r\n    float: right;\r\n    margin-right: 10px;\r\n    padding: 0 3px;\r\n    text-decoration: none;\r\n    color: #333;\r\n    border-radius: 5px;\r\n    background: #fff; }\r\n\r\n@media print {\r\n    .skills .skill-content {\r\n        margin: 0; } }\r\n\r\n.skills .skill-name {\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    margin: 6px 0 5px 26px; }\r\n\r\n.skills .skill-description {\r\n    font-size: 15px;\r\n    margin-left: 23px; }\r\n\r\nfooter {\r\n    margin: 15px 6px; }\r\n/*@media print {*/\r\n    /*footer {*/\r\n        /*display: none; } }*/\r\nfooter a {\r\n    font-weight: 700;\r\n    text-decoration: none;\r\n    color: teal; }\r\nfooter p {\r\n    text-align: center; }\r\n\r\n* {\r\n    box-sizing: border-box; }\r\n\r\nul {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style-type: none; }\r\n\r\nh3 {\r\n    font-size: 20px; }\r\n\r\na,\r\nstrong {\r\n    color: teal; }\r\n\r\nstrong {\r\n    font-weight: 700; }\r\n\r\n.container {\r\n    margin-top: 10px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    box-shadow: 2px 2px 5px; }\r\n@media (min-width: 1024px) {\r\n    .container {\r\n        width: 970px; } }\r\n\r\n@media (min-width: 768px) and (max-width: 1024px) {\r\n    .container {\r\n        width: 750px; } }\r\n@media (max-width: 414px) {\r\n    .container {\r\n        margin-top: 0;\r\n        padding: 5px 0;\r\n        box-shadow: 0 0 0; } }\r\n@media print {\r\n    .container {\r\n        margin-top: 0;\r\n        box-shadow: 0 0 0; } }\r\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);