module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TuXs");


/***/ }),

/***/ "TuXs":
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/next/dist/build/webpack/loaders/next-babel-loader.js):\nSyntaxError: /Users/athompson/Documents/GitHub/Personal/AdamThompson/pages/resume.js: Unexpected token, expected \"}\" (27:40)\n\n\u001b[0m \u001b[90m 25 | \u001b[39m    \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m{styles\u001b[33m.\u001b[39mresume_container}\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 26 | \u001b[39m      \u001b[33m<\u001b[39m\u001b[33mSEO\u001b[39m title\u001b[33m=\u001b[39m\u001b[32m\"Resume\"\u001b[39m \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 27 | \u001b[39m      \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m{styles\u001b[33m.\u001b[39mresume_page\u001b[32m\" id=\"\u001b[39mpage_1}\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                                        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 28 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33mResumeHeader\u001b[39m\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 29 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m{styles\u001b[33m.\u001b[39mresume_body}\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 30 | \u001b[39m          {\u001b[90m/* <div className={styles.summary}>{resumeData.blurb}</div> */\u001b[39m}\u001b[0m\n    at Object._raise (/Users/athompson/Documents/GitHub/Personal/AdamThompson/node_modules/next/dist/compiled/babel/bundle.js:2113:29279)\n    at Object.raiseWithData (/Users/athompson/Documents/GitHub/Personal/AdamThompson/node_modules/next/dist/compiled/babel/bundle.js:2113:29218)\n    at Object.raise (/Users/athompson/Documents/GitHub/Personal/AdamThompson/node_modules/next/dist/compiled/babel/bundle.js:2113:29039)\n    at Object.unexpected (/Users/athompson/Documents/GitHub/Personal/AdamThompson/node_modules/next/dist/compiled/babel/bundle.js:2113:183130)\n    at Object.expect (/Users/athompson/Documents/GitHub/Personal/AdamThompson/node_modules/next/dist/compiled/babel/bundle.js:2113:182883)\n    at Object.jsxParseExpressionContainer (/Users/athompson/Documents/GitHub/Personal/AdamThompson/node_modules/next/dist/compiled/babel/bundle.js:2113:103786)\n    at Object.jsxParseAttributeValue (/Users/athompson/Documents/GitHub/Personal/AdamThompson/node_modules/next/dist/compiled/babel/bundle.js:2113:103066)\n    at Object.jsxParseAttribute (/Users/athompson/Documents/GitHub/Personal/AdamThompson/node_modules/next/dist/compiled/babel/bundle.js:2113:104122)\n    at Object.jsxParseOpeningElementAfterName (/Users/athompson/Documents/GitHub/Personal/AdamThompson/node_modules/next/dist/compiled/babel/bundle.js:2113:104546)\n    at Object.jsxParseOpeningElementAt (/Users/athompson/Documents/GitHub/Personal/AdamThompson/node_modules/next/dist/compiled/babel/bundle.js:2113:104399)");

/***/ })

/******/ });