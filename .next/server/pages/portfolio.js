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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "55PY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ PortfolioTemplate; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: ./templates/portfolio-page/portfolio-quick-link/portfolio-quick-link.module.scss
var portfolio_quick_link_module = __webpack_require__("gw5e");
var portfolio_quick_link_module_default = /*#__PURE__*/__webpack_require__.n(portfolio_quick_link_module);

// CONCATENATED MODULE: ./templates/portfolio-page/portfolio-quick-link/portfolio-quick-link.js






const PortfolioQuickLink = ({
  to,
  direction
}) => {
  const link = to ? to.path : '/';
  const label = to ? to.context.frontmatter.title : 'Home';
  const linkClass = label.replace(' ', '').toLowerCase();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Link, {
    to: link,
    className: `${linkClass} quick-link`,
    id: `${direction}-link`,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      className: portfolio_quick_link_module_default.a.quick_link_direction,
      children: Object(external_lodash_["upperFirst"])(direction)
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      className: portfolio_quick_link_module_default.a.quick_link_label,
      children: label
    })]
  });
};

/* harmony default export */ var portfolio_quick_link = (PortfolioQuickLink);
// EXTERNAL MODULE: ./templates/portfolio-page/portfolio-template.module.scss
var portfolio_template_module = __webpack_require__("BbNV");
var portfolio_template_module_default = /*#__PURE__*/__webpack_require__.n(portfolio_template_module);

// EXTERNAL MODULE: ./images/monogram.svg
var monogram = __webpack_require__("CERM");

// EXTERNAL MODULE: ./templates/portfolio-page/portfolio-page-header/portfolio-page-header.module.scss
var portfolio_page_header_module = __webpack_require__("YpR6");
var portfolio_page_header_module_default = /*#__PURE__*/__webpack_require__.n(portfolio_page_header_module);

// CONCATENATED MODULE: ./templates/portfolio-page/portfolio-page-header/portfolio-page-header.js



 // React component using gatsby-plugin-react-svg


const PortfolioPageHeader = () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("header", {
  className: portfolio_page_header_module_default.a.portfolio_page_header,
  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
    className: portfolio_page_header_module_default.a.portfolio_page_link,
    href: "/",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(monogram["a" /* default */], {
      className: portfolio_page_header_module_default.a.portfolio_page_logo
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
      className: portfolio_page_header_module_default.a.portfolio_page_title,
      children: "Adam Thompson"
    })]
  })
});
// EXTERNAL MODULE: ./hooks/useCustomProperty.js
var useCustomProperty = __webpack_require__("I9h+");

// CONCATENATED MODULE: ./templates/portfolio-page/portfolio-template.js








const PortfolioTemplate = ({
  meta,
  children
}) => {
  const mainRef = Object(useCustomProperty["b" /* useCustomProps */])({
    '--brand-color': `var(--color-${meta.brand})`,
    '--brand-color-light': `var(--color-${meta.brand}-light)`,
    '--brand-color-lightest': `var(--color-${meta.brand}-lightest)`
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("main", {
    ref: mainRef,
    className: portfolio_template_module_default.a.portfolio,
    id: meta.brand,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(head_default.a, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("title", {
        children: ["Portfolio | ", meta.title]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(PortfolioPageHeader, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: portfolio_template_module_default.a.portfolio_content_container,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: portfolio_template_module_default.a.portfolio_content,
        children: children
      })
    })]
  });
};

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Tfk3");


/***/ }),

/***/ "9cCj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c2Xn");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _templates_portfolio_page_portfolio_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("55PY");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */


const meta = {
  title: "Chameleon",
  brand: "chameleon",
  date: "2017-12-20",
  tagline: "What if your ears could blink?",
  cover: 'chameleon-cover.png',
  color: '#2e8c5d',
  section: "portfolio"
};
const layoutProps = {
  meta
};

const MDXLayout = ({
  children
}) => Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(_templates_portfolio_page_portfolio_template__WEBPACK_IMPORTED_MODULE_2__[/* PortfolioTemplate */ "a"], {
  meta: meta
}, children);

function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(MDXLayout, _objectSpread(_objectSpread(_objectSpread({}, layoutProps), props), {}, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", null, `Chameleon`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", {
    class: "tldr",
    markdown: "`1`"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `Adaptive hearing protection that reacts to your surroundings.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", null, `We noticed that people don't like to wear hearing protection when the volume can change often—like in construction sites or factories—because they need to communicate, and constantly removing hearing protection is inefficient.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", null, `So we designed and prototyped Chameleon—hearing protection that responds to the volume of your surroundings. When it's quiet, you can hear as if you're not wearing hearing protection. When it gets loud, it reacts in an instant to protect your hearing until it's safe again.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", {
    class: "cover-image vertical"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "../../images/portfolio/cover/chameleon-cover.png",
    "alt": "A 3D rendering of the Chameleon hearing protection device"
  }))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `Problem`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `We surveyed and interviewed people who work in construction, manufacturing, and live music production`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("sup", _objectSpread({
    parentName: "p"
  }, {
    "id": "fnref-1"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread({
    parentName: "sup"
  }, {
    "href": "#fn-1",
    "className": "footnote-ref"
  }), `1`)), ` about their hearing protection use. A vast majority answered that while they know they should wear, protection they often don't. When asked why, they said they often needed to talk at work, and it's tedious to constantly remove hearing protection and put it back on.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `Requirements`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Based on our research insights, we came up with a number of areas our device should excel in. We then turned them into engineering functional requirements and metrics.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("strong", {
    parentName: "p"
  }, `Attenuation:`), ` Must protect the wearer from potentially damaging sound.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("strong", {
    parentName: "p"
  }, `Communication:`), ` Should allow communication when there is no damaging sound.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("strong", {
    parentName: "p"
  }, `Comfort:`), ` Should be comfortable to wear for a full work day.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("strong", {
    parentName: "p"
  }, `Cost:`), ` Should be reasonably priced relative to other products in the space.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("strong", {
    parentName: "p"
  }, `Durability:`), ` Should withstand daily use in a rugged environment, and consume minimal power.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("strong", {
    parentName: "p"
  }, `Measurement:`), ` Should accurately measure the noise level, and conform to ANSI standards.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `User Stories`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `I started to draw up flows and storyboards for the ideal use of the device. Storyboards helped identify different use scenarios (who's talking? who's making the noise?), and functions we had initially overlooked (like override buttons to preemptively close the device), but a user flow was not very helpful, since the primary goal is to not interfere with the wearer's work. Any user flow was a straight line from the beginning off the day to the end. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `We found that the user story: "As a worker, I want to protect my hearing and still be able to communicate when working" helped us focus in during development.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `Prototypes`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h3", null, `Full Prototype Mk. 1`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Over the next couple months we worked on the electrical and software systems, as well as testing different ways to dynamically attenuate. Our first system prototype was a retrofit on an existing ear-cup, and was used to test the measurement, control logic and mechanical components of the system. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("figure", {
    class: "folio_image video",
    id: "first-proto-video"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("iframe", {
    src: "https://www.youtube.com/embed/yUvlpVK7ays?loop=1",
    frameborder: "0",
    loop: "1",
    webkitallowfullscreen: true,
    mozallowfullscreen: true,
    allowfullscreen: true
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("figcaption", null, "The first prototype")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Though a good proof-of-concept, this prototype was too slow, and too noisy for what we needed to do with it. We also noticed when testing it that long hair tended to get caught in the disk—definitely not ideal.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h3", null, `Full Prototype Mk. 2`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `I spent the next 4 months working on all aspects of the design: electronics, embedded code, mechanical and acoustics.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `After a few dozen smaller scale prototypes to test each part of the system independently, we finally had a working full-system prototype.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "../../images/portfolio/chameleon/finished-prototype.jpg",
    "alt": "The final 3D printed prototype, with Teensy controller enclosure."
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `Pitch and Demo`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `We showcased our prototype at the Systems Design Engineering Symposium where we won People's Choice award. We also won the Norman Esch Entrepreneurship Award for our pitch and product demo!`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("figure", {
    class: "folio_image video",
    id: "symposium-demo-video"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("iframe", {
    src: "https://www.youtube.com/embed/3ss9hONATuw?loop=1",
    frameborder: "0",
    loop: "1",
    webkitallowfullscreen: true,
    mozallowfullscreen: true,
    allowfullscreen: true
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("figcaption", null, "Showing off the prototype at the Systems Design Engineering Symposium")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("figure", {
    class: "folio_image",
    id: "norman-esch-demo"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", {
    src: "../../images/portfolio/chameleon/prototype-demo.jpg"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("figcaption", null, "Demonstrating the prototype at Norman Esch finals, where we", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "https://uwaterloo.ca/engineering/news/six-teams-win-10000-each-annual-esch-awards",
    target: "_blank"
  }, " won a $10,000 prize"), " for our pitch and demo!")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", _objectSpread({}, {
    "className": "footnotes"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("hr", {
    parentName: "div"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("ol", {
    parentName: "div"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", _objectSpread({
    parentName: "ol"
  }, {
    "id": "fn-1"
  }), `Live music workers means, for example: stagehands, producers, and directors, not performers themselves`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread({
    parentName: "li"
  }, {
    "href": "#fnref-1",
    "className": "footnote-backref"
  }), `↩`)))));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "BbNV":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"portfolio": "portfolio-template_portfolio__1HZ-8",
	"footnotes": "portfolio-template_footnotes__2MYKN",
	"quick_links_container": "portfolio-template_quick_links_container__odJvK",
	"portfolio_content_container": "portfolio-template_portfolio_content_container__GdcFg",
	"portfolio_content": "portfolio-template_portfolio_content__2RyEi"
};


/***/ }),

/***/ "CERM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "currentcolor",
  d: "M8,0 L16,16 L0,16 L8,0 Z M16,0 L32,0 L32,16 L16,16 L16,0 Z M16,0 L16,5 L21,5 L21,0 L16,0 Z M27,0 L27,5 L32,5 L32,0 L27,0 Z M27,11 L27,16 L32,16 L32,11 L27,11 Z M16,11 L16,16 L21,16 L21,11 L16,11 Z",
  id: "Shape"
});

function SvgMonogram(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: "32px",
    height: "16px",
    viewBox: "0 0 32 16",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["a"] = (SvgMonogram);

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "I9h+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useCustomProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useCustomProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // add the returned Ref to the root element of your component
// then you can use the 'propName' as a CSS variable

const useCustomProp = (propName, value) => {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (ref) {
      ref.current.style.setProperty(propName, value);
    } else {
      console.warn(`Unused ref returned by useCustomProp`);
    }
  }, [propName, value, ref]);
  return ref;
}; // Same as above, but for setting multiple properties at once
// type customPropsObject = {[key:string]: string};

const useCustomProps = customProperties => {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (ref) {
      if (typeof customProperties === 'object') {
        Object.entries(customProperties).forEach(prop => {
          ref.current.style.setProperty(prop[0], prop[1]);
        });
      }
    } else {
      console.warn(`Unused ref returned by useCustomProp`);
    }
  }, [customProperties, ref]);
  return ref;
};

/***/ }),

/***/ "Tfk3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pages", function() { return pages; });
const nv = __webpack_require__("lV73").meta;

const chameleon = __webpack_require__("9cCj").meta;

const noom = __webpack_require__("YB2s").meta;

const pages = [nv, chameleon, noom];

/***/ }),

/***/ "YB2s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c2Xn");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _templates_portfolio_page_portfolio_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("55PY");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */


const meta = {
  title: "Noom",
  brand: "noom",
  date: "2015-12-20",
  tagline: "Simplifying the core experience",
  cover: 'noom-cover.png',
  color: '#4271d7',
  section: "portfolio"
};
const layoutProps = {
  meta
};

const MDXLayout = ({
  children
}) => Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(_templates_portfolio_page_portfolio_template__WEBPACK_IMPORTED_MODULE_2__[/* PortfolioTemplate */ "a"], {
  meta: meta
}, children);

function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(MDXLayout, _objectSpread(_objectSpread(_objectSpread({}, layoutProps), props), {}, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", null, `Noom`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", {
    class: "tldr",
    markdown: "1"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `A better food-logging experience without compromising functionality.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", null, `Users were having trouble navigating the core meal-logging flow because the buttons weren’t obvious and changed behaviour depending on use case. We needed to fix this.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", null, `I consolidated the user flow and UI, making it consistent in all use cases. Through meticulous user-testing we designed an interface that eliminated hesitation and uncertainty.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", {
    class: "cover-image vertical"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "../../images/portfolio/cover/noom-cover.png",
    "alt": "A screenshot of the food-logging experience in the Noom iOS app"
  }))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `Problem`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Noom—based in midtown Manhattan—combats obesity, diabetes, and hypertension with lifestyle and behaviour change. Meal logging is a must-have feature in the app that gives constructive feedback on users' eating habits. Logging the food you’ve eaten must be quick and intuitive, and give insightful feedback.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", {
    class: "vertical"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "../../images/portfolio/noom/noom_logging-existing.png",
    "alt": "People didn't realize the check was a button, and were never quite sure what the back button would do."
  })))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `We observed users and saw that they were often unsure of what to do when navigating between different views while logging food. People weren't noticing the `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `back`), ` or `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `check`), ` buttons, and the buttons didn't always work the way people expected them to. On top of that, the UI and flow would subtly change depending on the entry case.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h3", null, `Mental Models`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `We noticed that part of the issue may be that the concept model of the feature may not be in sync with common mental models that users had.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `After observing some remote tests and asking direct questions to local testers, we were able to nail down what we saw to be the most common mental model for the people tested. By establishing a grocery shopping metaphor and how users expected each to behave, we developed a concept model for the food-logging feature that we would use to base future design decisions off.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "../../images/portfolio/noom/noom-concept-model.png",
    "alt": "The Grocery shopping metaphor used to communicate the concept model during the design process."
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `Requirements`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `We knew we would have to simplify the workflow and make the interface much more clear. From several specific criteria, we ended up with two overarching user requirements:`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("strong", {
    parentName: "p"
  }, `Users will act with confidence:`), ` All interactive elements will have a single clear purpose.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("strong", {
    parentName: "p"
  }, `Users will not get lost:`), ` All cases will have an understandable  flow and architecture.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `Iteration`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `A main cause of confusion was that the interface and flow were different depending on whether you were logging a new meal or editing an old one. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `The most basic solution to solving the confusion was to eliminate different cases, and settle on a single, universal flow for all cases. The issue with that is one of the entry cases now requires navigation through a meaningless screen to achieve the goal (i.e. If I'm editing a meal, I'm treated as if I'm logging a new one, or vice-versa).`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h3", null, `Going `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "h3"
  }, `Back`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Another problem was that users struggled to go back to the home screen, or worse, accidentally went back when they didn't want to. Since a user can start the workflow anywhere, both the `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `cart`), ` and `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `search`), ` screens needed an intuitive way to return to the home screen.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Traditionally, this has been done with the back arrow, but we noticed this was too ambiguous. "Am I going back home, or to the previous screen?" users would think, and the correct answer depended on whether they were logging a new meal or editing. After some research and experimentation, we found that the clearest way to convey this behaviour was to use a `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `cross`), ` (or ╳ ) icon.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "../../images/portfolio/noom/noom_logging-vc.png",
    "alt": "Testing the individual screens and button styles was promising, and showed a lot of improvement from the original workflow."
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `When prototyping screen transitions we noticed a problem.
When the screens animated from one to the other, the behaviour of the `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `close`), ` button was still ambiguous on the second screen. We found that there was a near 50/50 split between users who expected the button to close the entire flow vs. the current screen. This was because a second `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `close`), ` button animated over top of the first`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h3", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "h3"
  }, `One X`), ` to rule them all`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `These weren’t two `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `separate`), ` screens, but two parts of one experience. By designing the interaction and animation thoughtfully, I could convey the feeling of a single context in these two views.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `I worked on this idea, and made an Origami prototype to show the single-context idea. While the interactions are a little over-designed, they effectively convey the single-context of food logging. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("figure", {
    class: "folio_image",
    id: "origami-prototype"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("iframe", {
    src: "https://player.vimeo.com/video/157767592/?title=0&byline=0&loop=1",
    frameborder: "0",
    webkitallowfullscreen: true,
    mozallowfullscreen: true,
    allowfullscreen: true
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("figcaption", null, "I would need to tone down the animation if I wanted to get developers to build this.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Finally, we had a single close button for both views, and an intuitive way to flip between them. I toned down the interaction to make it simpler to build, and by keeping a static close button and making the header a uniform size, it was possible to achieve the feeling of a single context for meal logging.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("figure", {
    class: "folio_image",
    id: "final-prototype"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("iframe", {
    src: "https://player.vimeo.com/video/157767466/?title=0&byline=0&loop=1",
    frameborder: "0",
    webkitallowfullscreen: true,
    mozallowfullscreen: true,
    allowfullscreen: true
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("figcaption", null, "The final prototype I sent to the development team")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `Testing & Validation`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `With the help of our User Research team we tested our designs and rated their performance against the usability criteria. We compiled these into a decision matrix, and included a developer estimate for each design. With this chart we were able to convince management that this design solved the problems, and got developer time to build the improvements.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `We also tested different `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `cart`), `, and `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `add more`), ` button designs. The buttons in the final prototype were the winning variants. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "../../images/portfolio/noom/noom_logging-matrix.png",
    "alt": "The decision matrix we used to rank and justify the design decisions"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `A Legacy`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `The Noom app features this version of the meal-logging workflow to date, and while my internship finished before the feature launched, I was told by the VP Engineering that the modifications I made to the workflow made a significant impact to user-reported ease in meal logging (a tracked KPI). `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `I'm grateful to have been part of a great design team that recently won the `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread({
    parentName: "p"
  }, {
    "href": "https://www.newswire.com/news/noom-coach-is-awarded-the-2017-red-dot-award-for-outstanding-design-19935974"
  }), `2017 Red Dot Award`), ` for outstanding design.`));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "YpR6":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"portfolio_page_header": "portfolio-page-header_portfolio_page_header__2Wgce",
	"portfolio_page_link": "portfolio-page-header_portfolio_page_link__37iHQ",
	"portfolio_page_logo": "portfolio-page-header_portfolio_page_logo__1Ztt7",
	"portfolio_page_title": "portfolio-page-header_portfolio_page_title__mALvL"
};


/***/ }),

/***/ "c2Xn":
/***/ (function(module, exports) {

module.exports = require("@mdx-js/react");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "gw5e":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"quick-link": "portfolio-quick-link_quick-link__1nIGN",
	"newvisions": "portfolio-quick-link_newvisions__1aPna",
	"quick-link-label": "portfolio-quick-link_quick-link-label__3MD9X",
	"noom": "portfolio-quick-link_noom__22uHk",
	"knowroaming": "portfolio-quick-link_knowroaming__3AntY",
	"chameleon": "portfolio-quick-link_chameleon__Avhbt",
	"smrtwatr": "portfolio-quick-link_smrtwatr__Krrsv",
	"quick-link-direction": "portfolio-quick-link_quick-link-direction__PrADF",
	"prev-link": "portfolio-quick-link_prev-link__2KEsr",
	"next-link": "portfolio-quick-link_next-link__1Snnc"
};


/***/ }),

/***/ "lV73":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c2Xn");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _templates_portfolio_page_portfolio_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("55PY");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */


const meta = {
  title: "New Visions",
  brand: "newvisions",
  date: "2019-09-03",
  tagline: "A framework for accessible data",
  cover: 'nv-breakdown-cover.png',
  color: '#0a4ace',
  section: "portfolio"
};
const layoutProps = {
  meta
};

const MDXLayout = ({
  children
}) => Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(_templates_portfolio_page_portfolio_template__WEBPACK_IMPORTED_MODULE_2__[/* PortfolioTemplate */ "a"], {
  meta: meta
}, children);

function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(MDXLayout, _objectSpread(_objectSpread(_objectSpread({}, layoutProps), props), {}, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", null, `New Visions`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("section", {
    className: "tldr",
    markdown: "1"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `A framework for accessible data`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `It can be difficult to manage one of New York City’s large public schools—things are changing all the time, and school leadership needs up-to-date information about their school’s demographics, academics, attendance and other data. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `I designed and tested a framework for developing multi-leveled dashboards which highlight important data points for school managers. This framework was invaluable in March 2020 when we needed to quickly develop new features for remote learning.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `This involved understanding users’ needs, developing a conceptual framework and information architecture, designing and usability testing all three levels of the dashboard user interface, and finally prototyping the data-visualization graphs in `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "p"
  }, `d3`), `. This project spanned two “phases” over the span of two years.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", {
    className: "cover_image"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `  `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "/images/portfolio/newvisions/nv-dashboard-demo.png",
    "alt": "All four layers of the New Visions dashboard"
  }))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", null, `The company`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `New Visions for Public Schools is a New York based non-profit that develops systems and tools to equitably manage NYC public schools. These tools enable all schools to provide equitable education across the city, and ensure no student gets left behind.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `My work was focused on the Portal—a tool used by school staff that provides the data they need to stay on top of managing their students’ success.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `Data for Managers`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `While many features in the Portal aid staff who interact with students directly—like councilors—there was a need to enhance features that serve school managers—like principals and other admin staff. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Our goal was to develop a framework for providing school managers with the data they need to make high-level decisions, and highlight areas they need to focus on.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", null, `A dashboard’s purpose`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `At a high level, the purpose of a dashboard is to display information at-a-glance. But when designing a dashboard you can’t just slap in any information—the designer needs to be aware of what a user might want to `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `do`), ` with the information.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `After researching our users’ and stakeholder’s needs, I was able to distill two broad use cases for a dashboard in our app: `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `Observation`), ` and `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `Action`), `.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `With Observation, a user simply wants to observe a metric, and perhaps compare it to a previous point in time. This is typically the use case of the power-user who has a great amount of experience with the data at hand. These users are able to read more into the data and take actions based on past experience. In effect, the Observation dashboard offloads judgement and decision making to the user.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Alternatively, there are many cases where a user does not want to, or lacks the experience to parse what the data means to them. In this case the users should be prompted to take a specific action. In our case, we have 30 years of educational systems experience in place, and are in great position to encourage a user to take specific actions in a dashboard.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `By highlighting the differences between these two dashboard types, a designer can leverage this framework to speed up design of new dashboard sections by designing for a specific use case. The framework encourages the dashboard designer to ask “what will the user do with this information” in order to streamline development. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "/images/portfolio/newvisions/new-tiles@2x.png",
    "alt": "A comparision between the Chronic absenteeism tile & of Needs Attendance support tile"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Chronic Absenteeism Rate informs the viewer of the percentage of students who have an overall attendance rate below a certain threshold. This is useful for an experienced staff member with knowledge of the thresholds, and who wants to make nuanced decisions.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Needs attendance support on the other hand calls out the specific students that a user should be taking action on and providing additional support. This is actionable even for a guidance councilor on their first day.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", null, `Breaking down the data`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `While a single data point can useful to identify potential problem areas, it doesn’t provide much insight into the source of the problem and its potential solutions. School managers want to compare data across sub-groups, and even see which individual students make up those aggregate numbers in order to take action on specific groups of students.  By providing a breakdown, we could provide the information managers needed to make informed decisions and targeted actions. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "/images/portfolio/newvisions/template-breakdown@2x.png",
    "alt": "The breakdown interface — users can navigate to this page by clicking on any “tile” on the main dashboard page"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `The “breakdown” interface consists of two major elements: a data visualization, and a data table.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `Graphs and their purpose`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `A single data point is rarely insightful on its own. After talking to users about their needs and researching data visualization types, I identified a three parameters for `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("strong", {
    parentName: "p"
  }, `Comparison`), ` that can help a designer determine how to visualize data. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Data can be compared either `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `between groups`), ` (e.g attendance rates between grades), `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `within groups`), ` (e.g. attendance rates of female & male students within a grade), or `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `over time`), ` (e.g. average attendance over the year). Identifying which comparison parameters might be useful for a given data point is an important step in designing a new dashboard breakdown screen.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `To simplify the process I eliminated some less-useful combinations, and defined four data visualization styles that align to common comparison types.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("strong", {
    parentName: "li"
  }, `Bar graph`), `: Highlights differences `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "li"
  }, `between groups`), `.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("strong", {
    parentName: "li"
  }, `Stacked Bar graph`), `: Highlights differences `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "li"
  }, `between`), ` and `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "li"
  }, `within`), ` groups.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("strong", {
    parentName: "li"
  }, `Line graph`), `: Highlights differences `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "li"
  }, `between groups`), `, and change `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "li"
  }, `over time`), `.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("strong", {
    parentName: "li"
  }, `Sankey graph`), `: Highlights differences `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "li"
  }, `between`), ` and `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "li"
  }, `within`), ` groups, as well as change `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "li"
  }, `over time`), `.`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "/images/portfolio/newvisions/graphs.png",
    "alt": "Samples of each graph type"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `Table data`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `While visualizations are great for many visually-minded users, we needed to present the data numerically as well. This allowed me to future-proof the framework, and present additional data to support the primary data being plotted. While I left decisions about exactly what additional data to include up to the implementing designer, I laid out some structural patterns in the framework. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `First, testing showed that the leftmost table column(s) should align with the data point(s) being plotted, and the right-most should be a total of all the students in the group. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Second, the rows in the table should align with the comparison group in each graph. That is, if we’re comparing between grades, each table row should be a grade. This pattern still holds when comparing both `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `between`), ` and `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `within`), ` groups, and coincides with the first pattern. For example, if we’re comparing sexes `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `within`), ` grades, then each row is a grade, and the first columns are each of the sexes, since that’s the data plotted in a stacked bar graph. `), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", _objectSpread({
    parentName: "p"
  }, {
    "src": "/images/portfolio/newvisions/table@2x.png",
    "alt": "A data table that’s associated with the bar graph above"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `The student level`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Users are generally loath to take action on a whole group without seeing the individual students first. In this framework, a user can navigate to a list of the students that make up that group by clicking on a row in the breakdown table. On this screen a user is shown additional context that might help when making a decision about what action to take. The framework makes no assertions about what this additional data should be, and leaves that up to the implementing designer as well.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", null, `Not a prescription`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Overall, this framework provides a three-level architecture with logic and interaction patterns that help future designers display and visualize new data. It’s not a prescriptive framework however, and can be broken if necessary—every user goal and every data point is different, and requires careful thought into how the data is should be presented. `));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });