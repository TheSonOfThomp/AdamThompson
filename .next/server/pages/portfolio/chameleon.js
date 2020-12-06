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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("9cCj");


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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });