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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("4ORw");


/***/ }),

/***/ "4ORw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c2Xn");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Recipe___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("V/1T");
/* harmony import */ var _templates_default_page_default_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("C/2Q");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */



const meta = {
  title: "Chicken Tikka Masala",
  section: "recipes",
  tags: "entrees, indian, chicken, spicy",
  image: 'chicken-tm-spices.jpg'
};
const layoutProps = {
  meta
};

const MDXLayout = ({
  children
}) => Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(_templates_default_page_default_template__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
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
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread({
    parentName: "p"
  }, {
    "href": "/recipes"
  }), `‹ Back to Recipes`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", null, `Chicken Tikka Masala`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `My take on the classic Indian dish is a synthesis of several online recipes.
I don't claim that this is `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `authentic`), ` per-se, but the best I've been able to make on my own.
My preferred technique is to prepare the chicken separately from the gravy.
This allows you to focus on the sauce without worrying about over- or under-cooking the chicken.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(_components_Recipe___WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    mdxType: "Recipe"
  }, "[1] Chop: 1 onion [2] Mince: 3 cloves garlic [3] Dice: 3 chicken breasts [4] Season: #3, 1 tsp salt [5] Fry on medium heat until translucent: #1, #2, 2 tbsp canola oil [6] Fry on medium-high for 5 minutes: #4, 2 tbsp canola oil [7] Set aside: #6 [8] Mix: 1 tsp salt, 1 tsp fresh ginger, 1 tsp cumin, 1 tsp coriander, 1 tsp paprika, 1/2 tsp turmeric, 1/2 tsp cayenne pepper [9] Mix until aromatic: #5, #8 [10] Simmer (about 2 minutes): #9, 1 cup (16oz) crushed tomatoes, 1 cup plain yogurt, 1 tsp garam masala, 1 tbsp cilantro, [11] Combine & simmer until chicken is cooked through: #7, #10 [12] Season: #11, 1 tbsp lemon juice"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", null, `Modifications`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `The recipe describes medium-spice. Remove 1/4 tsp of cayenne for mild, or add cayenne pepper to taste.`));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "C/2Q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _default_template_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("mnMV");
/* harmony import */ var _default_template_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_default_template_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Ogzj");









const DefaultPage = ({
  children,
  pageContext,
  title,
  className,
  id
}) => {
  const pageTitle = title ? title : pageContext ? pageContext.frontmatter.title : '—';
  className = `${className || ''} ${title || ''} ${pageContext === null || pageContext === void 0 ? void 0 : pageContext.frontmatter.section}`;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
        children: pageTitle
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("main", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_default_template_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.default_page, pageTitle, className),
      id: id,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_Header__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
        color: "black"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("article", {
        children: children
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (DefaultPage);

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

/***/ "JVe5":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "Ogzj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__("JVe5");

// EXTERNAL MODULE: ./components/Header/Header.module.scss
var Header_module = __webpack_require__("yzvi");
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);

// CONCATENATED MODULE: ./components/Header/social-link/social-link.js



 // type SocialLinkPropTypes = {
//   name: string,
//   url: string,
//   color: string,
//   children: React.ReactNode
// }

const SocialLink = ({
  name,
  url,
  color,
  children
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
    className: external_classnames_default()(Header_module_default.a.header_link, Header_module_default.a.social_link),
    href: url,
    title: name,
    target: "_blank",
    rel: "noopener noreferrer",
    children: children
  });
};

/* harmony default export */ var social_link = (SocialLink);
// EXTERNAL MODULE: ./images/monogram.svg
var monogram = __webpack_require__("CERM");

// CONCATENATED MODULE: ./components/Header/Header.js










const Header = ({
  color,
  showNav
}) => {
  // const Monogram = color === 'white' ? MonogramWhite : MonogramBlack
  const navRef = Object(external_react_["useRef"])(null);
  const setListeners = Object(external_react_["useRef"])(false); // Add listeners to all the links

  Object(external_react_["useEffect"])(() => {
    var _navRef$current;

    const links = (_navRef$current = navRef.current) === null || _navRef$current === void 0 ? void 0 : _navRef$current.querySelectorAll('.header-link');
    links === null || links === void 0 ? void 0 : links.forEach(link => link.addEventListener('mouseenter', moveHighlight));
    setListeners.current = true;
    return () => {
      links === null || links === void 0 ? void 0 : links.forEach(link => link.removeEventListener('mouseenter', moveHighlight));
    };
  });

  const moveHighlight = e => {
    var _navRef$current2, _navRef$current3, _navRef$current4, _navRef$current5;

    (_navRef$current2 = navRef.current) === null || _navRef$current2 === void 0 ? void 0 : _navRef$current2.style.setProperty('--link-width', e.target.offsetWidth);
    (_navRef$current3 = navRef.current) === null || _navRef$current3 === void 0 ? void 0 : _navRef$current3.style.setProperty('--link-height', e.target.offsetHeight);
    (_navRef$current4 = navRef.current) === null || _navRef$current4 === void 0 ? void 0 : _navRef$current4.style.setProperty('--link-top', e.target.offsetTop);
    (_navRef$current5 = navRef.current) === null || _navRef$current5 === void 0 ? void 0 : _navRef$current5.style.setProperty('--link-left', e.target.offsetLeft);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("header", {
    className: external_classnames_default()(Header_module_default.a.page_header, Header_module_default.a[`color_${color}`]),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
      className: Header_module_default.a.page_link,
      href: "/",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(monogram["a" /* default */], {
        className: Header_module_default.a.page_logo
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
        className: Header_module_default.a.page_title,
        children: "Adam Thompson"
      })]
    }), showNav && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("nav", {
      ref: navRef,
      className: Header_module_default.a.page_nav,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        className: external_classnames_default()(Header_module_default.a.header_link, Header_module_default.a.nav_link),
        href: "#projects",
        children: "Projects"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        className: external_classnames_default()(Header_module_default.a.header_link, Header_module_default.a.nav_link),
        href: "/recipes",
        children: "Recipes"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(social_link, {
        color: "white",
        name: "Twitter",
        url: "https://www.twitter.com/thesonofthomp/",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          icon: free_brands_svg_icons_["faTwitter"],
          size: "sm"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(social_link, {
        color: "white",
        name: "GitHub",
        url: "https://www.github.com/thesonofthomp",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          icon: free_brands_svg_icons_["faGithub"],
          size: "sm"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(social_link, {
        color: "white",
        name: "Linkedin",
        url: "https://www.linkedin.com/in/adammthompson/",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          icon: free_brands_svg_icons_["faLinkedinIn"],
          size: "sm"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(social_link, {
        color: "white",
        name: "Codepen",
        url: "https://codepen.io/TheSonOfThomp/",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          icon: free_brands_svg_icons_["faCodepen"],
          size: "sm"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(social_link, {
        color: "white",
        name: "Medium",
        url: "https://medium.com/@TheSonOfThomp",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          icon: free_brands_svg_icons_["faMedium"],
          size: "sm"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Header_module_default.a.highlight
      })]
    })]
  });
};

Header.defaultProps = {
  showNav: false,
  color: 'white'
};
/* harmony default export */ var Header_Header = (Header);
// CONCATENATED MODULE: ./components/Header/index.js

/* harmony default export */ var components_Header = __webpack_exports__["a"] = (Header_Header);

/***/ }),

/***/ "Q6Ww":
/***/ (function(module, exports) {

module.exports = require("@thesonofthomp/recipe-parser/dist/types");

/***/ }),

/***/ "R5S6":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"recipe_steps_list": "RecipeList_recipe_steps_list__17LKB",
	"recipe_steps_list_step": "RecipeList_recipe_steps_list_step__2eqJ3",
	"highlight": "RecipeList_highlight__3xQiO",
	"recipe_steps_list_ingredient": "RecipeList_recipe_steps_list_ingredient__3Ta62",
	"recipe_steps_list_ingredient_ref": "RecipeList_recipe_steps_list_ingredient_ref__1BbA1"
};


/***/ }),

/***/ "V/1T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@thesonofthomp/recipe-parser/dist"
var dist_ = __webpack_require__("p74S");

// EXTERNAL MODULE: external "@thesonofthomp/recipe-parser/dist/types"
var types_ = __webpack_require__("Q6Ww");

// CONCATENATED MODULE: ./components/Recipe/RecipeChart/RecipeChartNode/RecipeChartNode.js



// import { TreeNode } from "@thesonofthomp/recipe-parser/dist/types"
const RecipeChartNode = ({
  className,
  id,
  verb,
  ingredients,
  tree,
  depth
}) => {
  const stepRef = Object(external_react_["useRef"])();
  Object(external_react_["useEffect"])(() => {
    stepRef.current.style.setProperty('--step-depth', `${depth + 1}fr`);
  }, [depth]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    ref: stepRef,
    className: `recipe-sub-step ${className || ''}`,
    id: `step-${id}`,
    children: [tree && tree.sort((a, z) => a.id - z.id).map(node => /*#__PURE__*/Object(jsx_runtime_["jsx"])(RecipeChartNode, {
      id: node.id,
      verb: node.verb,
      ingredients: node.ingredients,
      tree: node.tree,
      depth: depth - 1
    }, node.id)), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      className: `recipe-verb`,
      id: `action-${id}`,
      children: verb
    }), ingredients && ingredients.map(ing => /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      className: `recipe-ingredient`,
      children: ing
    }, ing))]
  });
};
// EXTERNAL MODULE: ./components/Recipe/RecipeChart/RecipeChart.module.scss
var RecipeChart_module = __webpack_require__("omhg");
var RecipeChart_module_default = /*#__PURE__*/__webpack_require__.n(RecipeChart_module);

// CONCATENATED MODULE: ./components/Recipe/RecipeChart/RecipeChart.js






const RecipeChart = ({
  string,
  json,
  children
}) => {
  const [recipe, setRecipe] = external_react_default.a.useState();
  external_react_default.a.useEffect(() => {
    if (json) {
      setRecipe(json);
    } else if (children) {
      const string = children;
      setRecipe(Object(dist_["parseRecipe"])(string));
    } else if (string) {
      setRecipe(Object(dist_["parseRecipe"])(string));
    } else {
      console.warn('Please provide a recipe for RecipeChart');
    }
  }, [string, json, children]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_default.a.Fragment, {
    children: recipe && /*#__PURE__*/Object(jsx_runtime_["jsx"])(RecipeChartNode, {
      className: RecipeChart_module_default.a.recipe,
      id: recipe.tree.id,
      verb: recipe.tree.verb,
      ingredients: recipe.tree.ingredients,
      tree: recipe.tree.tree,
      depth: recipe.depth
    })
  });
};
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: ./hooks/usePrevious.js

function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = Object(external_react_["useRef"])(); // Store current value in ref

  Object(external_react_["useEffect"])(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)

  return ref.current;
}
// EXTERNAL MODULE: ./components/Recipe/RecipeList/RecipeList.module.scss
var RecipeList_module = __webpack_require__("R5S6");
var RecipeList_module_default = /*#__PURE__*/__webpack_require__.n(RecipeList_module);

// CONCATENATED MODULE: ./components/Recipe/RecipeList/RecipeList.js







const RecipeList = ({
  json
}) => {
  // Recipe ingredients list 
  const {
    0: highlightedElement,
    1: setHighlightedElement
  } = Object(external_react_["useState"])();
  const prevElement = usePrevious(highlightedElement);
  const listRef = external_react_default.a.useRef();

  const handleIngredientMouseOver = stepRef => {
    setHighlightedElement(document.querySelector(`#steps-list-${stepRef - 1}`));
  };

  const handleIngredientMouseOut = () => {
    setHighlightedElement(null);
  };

  Object(external_react_["useEffect"])(() => {
    highlightedElement === null || highlightedElement === void 0 ? void 0 : highlightedElement.classList.add('highlight');
    prevElement === null || prevElement === void 0 ? void 0 : prevElement.classList.remove('highlight');
  }, [highlightedElement, prevElement]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("ol", {
    ref: listRef,
    className: RecipeList_module_default.a.recipe_steps_list,
    children: json === null || json === void 0 ? void 0 : json.steps.map((step, i) => {
      return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
        className: RecipeList_module_default.a.recipe_steps_list_step,
        id: `steps-list-${i}`,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("b", {
          className: RecipeList_module_default.a.recipe_steps_list_verb,
          children: [step.verb, " "]
        }), step.ingredients.map(ing => {
          const stepRef = ing.search('#') === 0 ? parseInt(ing.slice(1)) : null;

          if (stepRef) {
            ing = ing.replace('#', 'Step ');
            return /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              onMouseOver: () => {
                handleIngredientMouseOver(stepRef);
              },
              onMouseOut: handleIngredientMouseOut,
              className: external_classnames_default()(RecipeList_module_default.a.recipe_steps_list_ingredient, RecipeList_module_default.a.recipe_steps_list_ingredient_ref),
              children: ing
            }, ing);
          } else {
            return /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: RecipeList_module_default.a.recipe_steps_list_ingredient,
              children: ing
            }, ing);
          }
        })]
      }, `step-${i}`);
    })
  });
};

/* harmony default export */ var RecipeList_RecipeList = (RecipeList);
// CONCATENATED MODULE: ./components/Recipe/RecipeList/index.js

/* harmony default export */ var Recipe_RecipeList = (RecipeList_RecipeList);
// CONCATENATED MODULE: ./components/Recipe/Recipe.js








const Recipe = ({
  children
}) => {
  const [recipeJson, setRecipe] = external_react_default.a.useState();
  external_react_default.a.useEffect(() => {
    const string = children;
    const json = Object(dist_["parseRecipe"])(string);
    setRecipe(json);
    console.log(json);
  }, [children]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(RecipeChart, {
      json: recipeJson
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Recipe_RecipeList, {
      json: recipeJson
    })]
  });
};

/* harmony default export */ var Recipe_Recipe = (Recipe);
// CONCATENATED MODULE: ./components/Recipe/index.js

/* harmony default export */ var components_Recipe = __webpack_exports__["a"] = (Recipe_Recipe);

/***/ }),

/***/ "c2Xn":
/***/ (function(module, exports) {

module.exports = require("@mdx-js/react");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "mnMV":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"default_page": "default-template_default_page__18_p1",
	"recipes": "default-template_recipes__H8OjT",
	"gatsby-resp-image-image": "default-template_gatsby-resp-image-image__2bYjk",
	"gatsby-resp-image-figcaption": "default-template_gatsby-resp-image-figcaption__1N-C6",
	"gatsby-resp-image-figure": "default-template_gatsby-resp-image-figure__mMAmm",
	"gatsby-resp-image-wrapper": "default-template_gatsby-resp-image-wrapper__2-tUZ"
};


/***/ }),

/***/ "omhg":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"recipe": "RecipeChart_recipe__15TVT"
};


/***/ }),

/***/ "p74S":
/***/ (function(module, exports) {

module.exports = require("@thesonofthomp/recipe-parser/dist");

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yzvi":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"page_header": "Header_page_header__2gAci",
	"color_white": "Header_color_white__3Q_7o",
	"page_link": "Header_page_link__W1Fiv",
	"page_logo": "Header_page_logo__2-Iwz",
	"page_title": "Header_page_title__1EGqH",
	"page_nav": "Header_page_nav__1ZPzM",
	"header_link": "Header_header_link__UP_Dc",
	"social_link": "Header_social_link__3wT_6",
	"highlight": "Header_highlight__h2VNg"
};


/***/ })

/******/ });