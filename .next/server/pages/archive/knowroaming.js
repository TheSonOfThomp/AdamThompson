module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("mvP9");


/***/ }),

/***/ "c2Xn":
/***/ (function(module, exports) {

module.exports = require("@mdx-js/react");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "mvP9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c2Xn");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */

const layoutProps = {};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(MDXLayout, _objectSpread(_objectSpread(_objectSpread({}, layoutProps), props), {}, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("hr", null), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `title: KnowRoaming
date: 2015-04-30
tagline: Bringing clarity to a complex system
cover: 'knowroaming-cover.png'
color: '#4286b5'`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `section: portfolio`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", null, `KnowRoaming`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", {
    class: "tldr",
    markdown: "1"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `An app that shows the important information, no matter where you are.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", null, `People were never quite sure if things were set up properly before traveling abroad. This made them uneasy and unsure whether to trust the product.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", null, `I overhauled the layout, architecture and visual style of the app to make it simpler, and more informative. The options available on the home screen change to match the actions you can take at each phase of your trip.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", {
    class: "cover-image vertical"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "../../images/portfolio/cover/knowroaming-cover.png",
    "alt": "A screenshot of the KnowRoaming mobile app in \"Abroad\" mode on iOS"
  }))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `Background`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `KnowRoaming is a small company based in Toronto that makes a smart SIM sticker—a layer on your SIM card that connects you while abroad. To manage the prepaid account, among other things, KnowRoaming has an iOS and Android app.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `As features were added to the app over time it became cluttered, with no coherent structure or visual design. There were frequent complaints that the app was difficult to navigate, and customers were never sure that the sticker, account and the rest of the KnowRoaming system were setup properly.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Not trusting the product was a big issue, and needed to be addressed. It was my responsibility to overhaul the app structure and UI to make it more cohesive and understandable.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "../../images/portfolio/knowroaming/knowroaming_old_old_app.jpg",
    "alt": "Screenshots from the early 2014 version of the app"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `Navigation`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `There are a lot of functions in KnowRoaming that needed to make it into the app, from rate calculator, to phone number management. We needed a way to efficiently layout these functions for users in as flat an architecture as possible.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "../../images/portfolio/knowroaming/super-flat-architecture.png",
    "alt": "The ideal—albeit unrealistic—information architecture for the KnowRoaming app"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `This super-flat architecture assumes equal importance to all of these functions—but all features aren't created equal. The team and I looked at these elements, and determined which were core to the use of our service, and which were secondary. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Since we couldn't easily fit all the options on the home screen, we tested a drawer-style navigation that let the important functions be visible in a dashboard-style home screen, with secondary functions in the drawer.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", {
    class: "gatsby-image vertical multiple"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "../../images/portfolio/knowroaming/home-drawer.png",
    "alt": "A first version of the home-screen redesign"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "../../images/portfolio/knowroaming/home-openDrawer.png",
    "alt": "Pressing \"Am I Ready to Roam?\" would guide the user through a travel checklist."
  })))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `This prototype tested well in-house, but the "hamburger menu" wasn't always found right away. Given that one primary persona was non digital-natives, an `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread({
    parentName: "p"
  }, {
    "href": "https://uxdesign.cc/death-by-hamburger-2d1db115352a#.865mhybml"
  }), `undiscoverable drawer`), ` would not be the best navigation option. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `I went back to a tab bar as in the original app, but took inspiration from Yelp and others, adding a unique, more salient central tab, and a `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `more`), ` drawer tab. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `In addition to the rest of what I mention in this article, I also re-designed each screen linked on the tab bar and home screen.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `Ready to Roam`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `We also noticed the "Ready to Roam" functionality was too hidden, and would need to be a more prominent feature on the home screen. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", {
    class: "gatsby-image vertical multiple"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "../../images/portfolio/knowroaming/sketch-ReadyToRoam1.jpg",
    "alt": "Ready-to-roam dial"
  })), `
`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "../../images/portfolio/knowroaming/sketch-home-expand.jpg",
    "alt": "Yelp-style home tab"
  })), `
`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "../../images/portfolio/knowroaming/sketch-home-bubbles.jpg",
    "alt": "The checklist"
  })))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `I made some sketches of different ways to make "Ready to Roam" status more prominent. After some testing and better mocks, we saw that the vertical-bubbles were the best and clearest choice.
Users could quickly be sure they were "Ready to Roam" when the bubbles on the home screen filled in.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", {
    class: "gatsby-image vertical"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "../../images/portfolio/knowroaming/home-bubbles.png",
    "alt": "Ready to Roam Checklist on the home-screen"
  })))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `We shipped this version of the homescreen and saw good feedback on the new UI style. But there were bubbles on the home screen that were never filled at home—users can't setup their roaming internet connection until they arrive abroad. This resulted in continued calls into customer support about user trust confidence. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `Three Phases`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `I took inspiration from how the product was being marketed, and decided to try and split the app into the three use conditions: 1) At Home, 2) Abroad, 3) Arriving Home.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", {
    class: "gatsby-image vertical multiple"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "../../images/portfolio/knowroaming/silver_portrait-at_home.png",
    "alt": "At home"
  })), `
`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "../../images/portfolio/knowroaming/silver_portrait-abroad.png",
    "alt": "Abroad"
  })), `
`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "../../images/portfolio/knowroaming/silver_portrait-back_home.png",
    "alt": "Back home"
  })))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `By splitting the home screen into three phases with different UI in each, we were able to ensure users were confident they were doing the right thing, and could use their phone without worry.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `Tutorials`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `KnowRoaming is a complex system. Involving multiple cell networks, a SIM Sticker, a mobile app and the OS itself, there is a lot to teach and coach people on.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `After registration, users are presented with a short tutorial, explaining the three phases, and how to know they are "Ready to Roam". We also designed coach marks that play whenever a user changes phases.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", {
    class: "gatsby-image vertical multiple"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "../../images/portfolio/knowroaming/tutorial-2.png",
    "alt": "Setup"
  })), `
`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "../../images/portfolio/knowroaming/tutorial-3.png",
    "alt": "Internet Abroad"
  })), `
`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "../../images/portfolio/knowroaming/tutorial-4.png",
    "alt": "Internet at home"
  })))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("hr", null), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `Man of many hats`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `I could go on about all the things I did as KnowRoaming's premiere designer—like designing all screens and flows in the app, creating a `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread({
    parentName: "p"
  }, {
    "href": "?p=kr_branding"
  }), `style guide`), `, re-branding the `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread({
    parentName: "p"
  }, {
    "href": "?p=kr_reachme"
  }), `ReachMe`), ` service, designing `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread({
    parentName: "p"
  }, {
    "href": "?p=kr_marketing"
  }), `marketing materials`), `, building an `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread({
    parentName: "p"
  }, {
    "href": "?p=kr_athletes"
  }), `athlete sponsorship mini-site`), `, animating an `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread({
    parentName: "p"
  }, {
    "href": "?p=kr_video"
  }), `intro video`), ` for the app, designing more efficient `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread({
    parentName: "p"
  }, {
    "href": "?p=kr_packaging"
  }), `packaging`), ` and even designing a `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread({
    parentName: "p"
  }, {
    "href": "?p=kr_retail"
  }), `retail stand`), ` to display the SIM stickers in stores.`));
}
;
MDXContent.isMDXComponent = true;

/***/ })

/******/ });