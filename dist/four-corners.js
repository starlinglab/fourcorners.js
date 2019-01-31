(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("FourCorners", [], factory);
	else if(typeof exports === 'object')
		exports["FourCorners"] = factory();
	else
		root["FourCorners"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/styles.scss */ \"./src/styles.scss\");\n/* harmony import */ var _src_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/index.js */ \"./src/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_src_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack://FourCorners/./index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar FourCorners =\n/*#__PURE__*/\nfunction () {\n  function FourCorners(embed, opts) {\n    _classCallCheck(this, FourCorners);\n\n    this.elems = {};\n    this.opts = opts;\n    this.corners = ['context', 'links', 'authorship', 'backstory'];\n    this.elems.embed = embed;\n    this.data = parseData(this);\n    this.elems.photo = addPhoto(this);\n    this.elems.panels = addPanels(this);\n    this.elems.corners = addCorners(this);\n    this.elems.caption = addCutline(this);\n    initEmbed(this);\n  }\n\n  _createClass(FourCorners, [{\n    key: \"init\",\n    value: function init(userOpts) {\n      var proto = this;\n      proto.embeds = [];\n      var defaultOpts = {\n        selector: '.fc-embed:not(.fc-init)',\n        interactive: true,\n        active: null,\n        cutline: true,\n        posDur: 0.2,\n        transDur: 0.1\n      };\n      var opts = Object.assign(defaultOpts, userOpts);\n      var embeds = Array.from(document.querySelectorAll(opts.selector));\n      embeds.forEach(function (embed, i) {\n        var inst = new FourCorners(embed, opts);\n        proto.embeds.push(inst);\n      });\n      return proto.embeds;\n    }\n  }, {\n    key: \"openCorner\",\n    value: function openCorner(slug) {\n      var inst = this;\n      var corners = this.corners;\n      var embed = this.elems.embed;\n      var corner = this.elems.corners[slug];\n      var panel = this.elems.panels[slug];\n      embed.classList.remove('fc-full');\n\n      if (embed && corner && panel) {\n        embed.dataset.fcActive = slug;\n        embed.classList.add('fc-active');\n        corner.classList.add('fc-active');\n        panel.classList.add('fc-active');\n      }\n\n      corners.forEach(function (_slug, i) {\n        if (_slug != slug) {\n          inst.closeCorner(_slug);\n        }\n      });\n    }\n  }, {\n    key: \"closeCorner\",\n    value: function closeCorner(slug) {\n      var inst = this;\n      var embed = inst.elems.embed;\n\n      if (!slug) {\n        slug = embed.dataset.fcActive;\n      }\n\n      var corner = inst.elems.corners[slug];\n      var panel = inst.elems.panels[slug];\n\n      if (slug == embed.dataset.fcActive) {\n        embed.dataset.fcActive = '';\n        embed.classList.remove('fc-active');\n      }\n\n      if (corner) {\n        corner.classList.remove('fc-active');\n      }\n\n      if (panel) {\n        panel.classList.remove('fc-active');\n      }\n    }\n  }, {\n    key: \"toggleExpandPanel\",\n    value: function toggleExpandPanel() {\n      var inst = this;\n      inst.elems.embed.classList.toggle('fc-full');\n    }\n  }]);\n\n  return FourCorners;\n}();\n\nvar initEmbed = function initEmbed(inst) {\n  var embed = inst.elems.embed;\n  embed.classList.add('fc-init');\n\n  if (inst.data && inst.data.opts && inst.data.opts.dark) {\n    embed.classList.add('fc-dark');\n  }\n\n  if (inst.opts.interactive) {\n    // embed.addEventListener('mouseenter', function(e) {\n    // \thoverEmbed(e, inst);\n    // });\n    // embed.addEventListener('mouseleave', function(e) {\n    // \tunhoverEmbed(e, inst);\n    // });\n    window.addEventListener('resize', function (e) {\n      resizeEmbed(e, inst);\n    });\n    window.addEventListener('click', function (e) {\n      var onPanels = isChildOf(e.target, inst.elems.panels);\n      var onCorners = isChildOf(e.target, inst.elems.corners);\n      var inCreator = isChildOf(e.target, Array.from(document.querySelectorAll('#creator')));\n\n      if (!onPanels && !onCorners && !inCreator) {\n        inst.closeCorner();\n      }\n    });\n  }\n\n  resizeEmbed(null, inst);\n};\n\nvar resizeEmbed = function resizeEmbed(e, inst) {\n  var panels = inst.elems.panels;\n\n  if (!panels) {\n    return;\n  }\n\n  Object.keys(panels).forEach(function (slug, i) {\n    resizePanel(panels[slug]);\n  });\n};\n\nvar resizePanel = function resizePanel(panel) {\n  var panelScroll = panel.querySelector('.fc-scroll');\n\n  if (!panelScroll) {\n    return;\n  }\n\n  if (panelScroll.scrollHeight > panelScroll.clientHeight) {\n    panel.classList.add('fc-overflow');\n  } else {\n    panel.classList.remove('fc-overflow');\n  }\n};\n\nvar addPhoto = function addPhoto(inst) {\n  var embed = inst.elems.embed;\n  var data = inst.data;\n\n  if (!data) {\n    return;\n  }\n\n  var img = document.createElement('img');\n  img.classList.add('fc-img');\n  var photo = '';\n  var photoSelector = '.fc-photo';\n\n  if (!embed.querySelector(photoSelector)) {\n    photo = document.createElement('div');\n    photo.classList.add('fc-photo');\n    var pseudoImg = new Image();\n    var photoData = data.photo;\n\n    if (!photoData) {\n      return;\n    }\n\n    var _src = photoData.file;\n\n    pseudoImg.onload = function (e) {\n      img.src = _src;\n      photo.classList.add('fc-loaded');\n      photo.appendChild(img);\n    };\n\n    pseudoImg.onerror = function (e) {\n      console.warn('Four Corners cannot load this as an image: ' + _src, e);\n    };\n\n    pseudoImg.src = _src;\n  } else {\n    photo = embed.querySelector(photoSelector);\n  }\n\n  embed.appendChild(photo);\n  return photo;\n};\n\nvar addPanels = function addPanels(inst) {\n  var data,\n      panels = {};\n  var embed = inst.elems.embed;\n  inst.corners.forEach(function (slug, i) {\n    var active = inst.opts.active;\n    var panelSelector = '.fc-panel[data-fc-slug=\"' + slug + '\"]';\n    var panel = embed.querySelector(panelSelector);\n\n    if (!panel) {\n      panel = document.createElement('div');\n      panel.dataset.fcSlug = slug;\n      panel.classList.add('fc-panel');\n      panel.classList.add('fc-' + slug);\n\n      if (slug == active) {\n        panel.classList.add('fc-active');\n      }\n\n      var panelScroll = document.createElement('div');\n      panelScroll.classList.add('fc-scroll');\n      var panelInner = document.createElement('div');\n      panelInner.classList.add('fc-inner');\n      var panelTitle = document.createElement('div');\n      panelTitle.classList.add('fc-panel-title');\n      var panelTitleSpan = document.createElement('span');\n      panelTitleSpan.innerHTML = slug;\n      panelTitle.appendChild(panelTitleSpan);\n      var panelExpand = document.createElement('div');\n      panelExpand.className = 'fc-icon fc-expand';\n      panelExpand.addEventListener('click', function (e) {\n        inst.toggleExpandPanel(e, inst);\n      });\n      panelTitle.appendChild(panelExpand);\n      var panelClose = document.createElement('div');\n      panelClose.className = 'fc-icon fc-close';\n      panelClose.addEventListener('click', function (e) {\n        closePanel(e, inst);\n      });\n      panelTitle.appendChild(panelClose);\n      panelInner.appendChild(panelTitle);\n\n      if (inst.data) {\n        var panelData = inst.data[slug];\n        var dataKeys = Object.keys(panelData);\n        Object.entries(panelData).forEach(function (_ref) {\n          var _ref2 = _slicedToArray(_ref, 2),\n              prop = _ref2[0],\n              val = _ref2[1];\n\n          if (!val) {\n            return;\n          }\n\n          var row = document.createElement('div');\n          row.classList.add('fc-row', 'fc-' + prop);\n\n          if (prop == 'media') {\n            var mediaElems = addMedia(val);\n\n            if (mediaElems) {\n              row.appendChild(mediaElems);\n            }\n          } else if (prop == 'links') {\n            var linkElems = addLinks(val);\n\n            if (linkElems) {\n              row.appendChild(linkElems);\n            }\n          } else if (prop == 'license') {\n            var licenseElems = addLicense(val);\n\n            if (licenseElems) {\n              row.appendChild(licenseElems);\n            }\n          } else if (prop == 'ethics') {\n            row.innerHTML = '<strong>Code of ethics</strong>: ' + val;\n          } else if (prop == 'copyright') {\n            row.innerHTML = '&copy; ' + val;\n          } else if (prop == 'text') {\n            var paraElems = wrapParagraphs(val);\n\n            if (paraElems) {\n              row.appendChild(paraElems);\n            }\n          } else {\n            row.innerHTML += val;\n          }\n\n          if (row.childNodes.length) {\n            panelInner.appendChild(row);\n          }\n        });\n\n        if (!Object.keys(panelData).length) {\n          panel.classList.add('fc-inactive');\n        }\n      }\n\n      panelScroll.appendChild(panelInner);\n      panel.appendChild(panelScroll);\n      embed.appendChild(panel);\n    }\n\n    panels[slug] = panel;\n  });\n  return panels;\n};\n\nvar addMedia = function addMedia(arr) {\n  var iframeSources = ['youtube', 'vimeo', 'soundcloud'];\n  var rowInner = document.createElement('div');\n  rowInner.className = 'fc-row-inner';\n  arr.forEach(function (obj, index) {\n    if (!Object.keys(obj).length) {\n      return;\n    }\n\n    var subRow = document.createElement('div');\n    subRow.className = 'fc-sub-row';\n\n    if (iframeSources.indexOf(obj.source) >= 0) {\n      embedIframe(obj, subRow);\n    } else {\n      embedImage(obj, subRow);\n    }\n\n    if (obj.caption) {\n      var caption = document.createElement('div');\n      caption.className = 'fc-sub-caption';\n      caption.innerHTML = obj.caption;\n      subRow.appendChild(caption);\n    }\n\n    rowInner.appendChild(subRow);\n  });\n\n  if (rowInner.childNodes.length) {\n    return rowInner;\n  }\n};\n\nvar addLinks = function addLinks(arr) {\n  var rowInner = document.createElement('div');\n  rowInner.className = 'fc-sub-rows';\n  arr.forEach(function (obj, index) {\n    if (!obj) {\n      return;\n    }\n\n    var subRow = document.createElement('div');\n    subRow.className = 'fc-sub-row';\n    var a = document.createElement('a');\n    a.href = obj.url; // const headers = new Headers();\n    // const req = obj.url;\n    // fetch(req, {\n    // \tmethod: 'GET',\n    // \theaders: headers,\n    // \tmode: 'cors',\n    // \tcache: 'default'\n    // })\n    // .then(res => {\n    // \tif (!res.ok) {throw Error(res.statusText)}\n    // \tconsole.log(res);\n    // \treturn res.json();\n    // })\n    // .then(res => {\n    // \tconsole.log(res);\n    // })\n    // .catch(function(err) {\n    // \tconsole.log(err);\n    // });\n\n    a.target = '_blank';\n\n    if (obj.title) {\n      a.innerHTML = obj.title;\n    }\n\n    subRow.appendChild(a);\n    var rootUrl = extractRootDomain(obj.url);\n\n    if (rootUrl) {\n      var url = document.createElement('div');\n      url.className = 'fc-sub-url';\n      url.innerHTML = rootUrl;\n      subRow.appendChild(url);\n    }\n\n    rowInner.appendChild(subRow);\n  });\n  return rowInner;\n};\n\nvar addLicense = function addLicense(val) {\n  var a = document.createElement('a');\n  a.href = val;\n  a.target = '_blank';\n  a.innerHTML = val;\n  var text = document.createTextNode('License this photo: ');\n  var span = document.createElement('span');\n  span.appendChild(text);\n  span.appendChild(a);\n  return span;\n};\n\nvar embedImage = function embedImage(obj, subRow) {\n  var mediaWrap = document.createElement('div');\n  mediaWrap.className = 'fc-media';\n\n  if (!obj.url) {\n    return;\n  }\n\n  var img = document.createElement('img');\n  var pseudoImg = new Image();\n\n  pseudoImg.onload = function (e) {\n    img.src = src;\n    mediaWrap.appendChild(img);\n    subRow.appendChild(mediaWrap);\n\n    if (subRow.childNodes) {\n      subRow.insertBefore(mediaWrap, subRow.childNodes[0]);\n    } else {\n      subRow.appendChild(mediaWrap);\n    }\n  };\n\n  pseudoImg.onerror = function (e) {\n    console.warn('Four Corners cannot load this as an image: ' + obj.url, e);\n  };\n\n  pseudoImg.src = obj.url;\n};\n\nvar embedIframe = function embedIframe(obj, subRow) {\n  var req = '';\n\n  switch (obj.source) {\n    case 'youtube':\n      // req = 'https://www.youtube.com/oembed?url='+obj.url;\n      req = 'https://noembed.com/embed?url=' + obj.url;\n      break;\n\n    case 'vimeo':\n      req = 'https://vimeo.com/api/oembed.json?url=' + obj.url;\n      break;\n\n    case 'soundcloud':\n      req = 'https://soundcloud.com/oembed?format=json&url=' + obj.url;\n      break;\n\n    default:\n      return false;\n      break;\n  }\n\n  fetch(req, {\n    method: 'GET',\n    headers: {\n      'Content-Type': 'application/json'\n    }\n  }).then(function (res) {\n    if (!res.ok) {\n      throw Error(res.statusText);\n    }\n\n    return res.json();\n  }).then(function (res) {\n    var mediaWrap = document.createElement('div');\n    mediaWrap.className = 'fc-media';\n    mediaWrap.innerHTML = res.html;\n\n    if (Number.isInteger(res.width, res.height)) {\n      var ratio = res.height / res.width;\n      mediaWrap.classList.add('fc-responsive');\n      mediaWrap.style.paddingBottom = ratio * 100 + '%';\n    }\n\n    if (subRow.childNodes) {\n      subRow.insertBefore(mediaWrap, subRow.childNodes[0]);\n    } else {\n      subRow.appendChild(mediaWrap);\n    }\n  }).catch(function (err) {\n    subRow.remove();\n    console.warn('Four Corners cannot load this media source: ' + src, err);\n  });\n};\n\nvar extractHostname = function extractHostname(url) {\n  var hostname;\n\n  if (!url) {\n    return false;\n  }\n\n  if (url.indexOf('//') > -1) {\n    hostname = url.split('/')[2];\n  } else {\n    hostname = url.split('/')[0];\n  }\n\n  hostname = hostname.split(':')[0];\n  hostname = hostname.split('?')[0];\n  return hostname;\n};\n\nvar extractRootDomain = function extractRootDomain(url) {\n  if (!url) {\n    return false;\n  }\n\n  var domain = extractHostname(url);\n  var splitArr = domain.split('.');\n  var arrLen = splitArr.length;\n\n  if (arrLen > 2) {\n    domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];\n\n    if (splitArr[arrLen - 2].length == 2 && splitArr[arrLen - 1].length == 2) {\n      domain = splitArr[arrLen - 3] + '.' + domain;\n    }\n  }\n\n  return domain;\n};\n\nvar addCorners = function addCorners(inst) {\n  var data,\n      corners = {};\n  var embed = inst.elems.embed;\n  var photo = inst.elems.photo;\n  var active = inst.opts.active;\n  inst.corners.forEach(function (slug, i) {\n    var cornerSelector = '.fc-corner[data-fc-slug=\"' + slug + '\"]';\n\n    if (embed.querySelector(cornerSelector)) {\n      return;\n    }\n\n    var corner = document.createElement('div');\n    corner.dataset.fcSlug = slug;\n    corner.classList.add('fc-corner');\n    corner.classList.add('fc-' + slug); // let cornerShadow = document.createElement('div');\n    // cornerShadow.classList.add('fc-shadow');\n    // corner.appendChild(cornerShadow);\n\n    if (slug == active) {\n      corner.classList.add('fc-active');\n    }\n\n    if (inst.data) {\n      data = inst.data[slug];\n\n      if (!data || !Object.keys(data).length) {\n        corner.classList.add('fc-inactive');\n      }\n    }\n\n    if (inst.opts.interactive) {\n      corner.addEventListener('mouseenter', function (e) {\n        hoverCorner(e, inst);\n      });\n      corner.addEventListener('mouseleave', function (e) {\n        unhoverCorner(e, inst);\n      });\n      corner.addEventListener('click', function (e) {\n        clickCorner(e, inst);\n      });\n    }\n\n    corners[slug] = corner;\n    embed.appendChild(corner);\n  });\n  return corners;\n};\n\nvar addCutline = function addCutline(inst) {\n  if (!inst.data || !inst.opts.cutline) {\n    return;\n  }\n\n  var data = inst.data['authorship'];\n\n  if (!data || !Object.keys(data).length) {\n    return;\n  }\n\n  var embed = inst.elems.embed;\n  var cutline = document.createElement('div');\n  cutline.classList.add('fc-cutline');\n  var cutlineArray = [];\n\n  if (data.credit) {\n    cutlineArray.push(data.credit);\n  } // if(data.copyright) {\n  // \tcutlineArray.push('&copy;');\n  // }\n\n\n  var fcLink = '<a href=\"#\" class=\"fc\">Four Corners</a>';\n  cutlineArray.push(fcLink);\n  var cutlineText = cutlineArray.join(' ');\n  cutline.innerHTML = cutlineText;\n  embed.parentNode.insertBefore(cutline, embed.nextSibling);\n};\n\nvar parseData = function parseData(inst) {\n  if (!inst.elems.embed) {\n    return;\n  }\n\n  var stringData = inst.elems.embed.dataset.fc;\n\n  if (!stringData) {\n    return;\n  }\n\n  stringData = stringData;\n  delete inst.elems.embed.dataset.fc;\n  return JSON.parse(stringData);\n}; // const hoverEmbed = (e, inst) => {\n// \tlet embed = inst.elems.embed;\n// \tlet corners = inst.elems.corners;\n// \tconst css = inst.css;\n// \tconst posDur = inst.opts.posDur;\n// }\n// const unhoverEmbed = (e, inst) => {\n// \tlet embed = inst.elems.embed;\n// \tlet corners = inst.elems.corners;\n// \tconst css = inst.css;\n// \tconst posDur = inst.opts.posDur;\n// }\n\n\nvar hoverCorner = function hoverCorner(e, inst) {\n  var corner = e.target;\n  corner.classList.add('fc-hover');\n};\n\nvar unhoverCorner = function unhoverCorner(e, inst) {\n  var corner = e.target;\n  corner.classList.remove('fc-hover');\n};\n\nvar clickCorner = function clickCorner(e, inst) {\n  var corner = e.target;\n  var slug = corner.dataset.fcSlug;\n  var active = inst.elems.embed.dataset.fcActive;\n\n  if (!slug) {\n    return;\n  }\n\n  if (slug == active) {\n    inst.closeCorner(slug);\n  } else {\n    inst.openCorner(slug);\n  }\n};\n\nvar clickPhoto = function clickPhoto(e, inst) {\n  inst.closeCorner();\n};\n\nvar closePanel = function closePanel(e, inst) {\n  inst.closeCorner();\n};\n\nvar isChildOf = function isChildOf(target, ref) {\n  var answer = false;\n  Object.entries(ref).forEach(function (_ref3) {\n    var _ref4 = _slicedToArray(_ref3, 2),\n        key = _ref4[0],\n        elem = _ref4[1];\n\n    if (elem.contains(target)) {\n      answer = true;\n    }\n  });\n  return answer;\n};\n\nvar wrapParagraphs = function wrapParagraphs(val) {\n  var array = val.split(/\\n/g);\n  var text = '';\n\n  if (array.length <= 1) {\n    return val;\n  }\n\n  var rowInner = document.createElement('div');\n  rowInner.className = 'fc-row-inner';\n  array.forEach(function (str, i) {\n    var p = document.createElement('p');\n    p.innerHTML = str;\n    rowInner.appendChild(p);\n  });\n  return rowInner;\n};\n\nvar wrapUrls = function wrapUrls(str) {\n  var urlPattern = /(?:(?:https?|ftp):\\/\\/)?(?:\\S+(?::\\S*)?@)?(?:(?!10(?:\\.\\d{1,3}){3})(?!127(?:\\.\\d{1,3}){3})(?!169\\.254(?:\\.\\d{1,3}){2})(?!192\\.168(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\x{00a1}\\-\\x{ffff}0-9]+-?)*[a-z\\x{00a1}\\-\\x{ffff}0-9]+)(?:\\.(?:[a-z\\x{00a1}\\-\\x{ffff}0-9]+-?)*[a-z\\x{00a1}\\-\\x{ffff}0-9]+)*(?:\\.(?:[a-z\\x{00a1}\\-\\x{ffff}]{2,})))(?::\\d{2,5})?(?:\\/[^\\s]*)?/ig;\n  return str.replace(urlPattern, function (url) {\n    var protocol_pattern = /^(?:(?:https?|ftp):\\/\\/)/i;\n    var href = protocol_pattern.test(url) ? url : 'http://' + url;\n    return '<a href=\"' + href + '\" target=\"_blank\">' + url + '</a>';\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FourCorners);\n\n//# sourceURL=webpack://FourCorners/./src/index.js?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://FourCorners/./src/styles.scss?");

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/coreytegeler/Sites/four-corners.js/index.js */\"./index.js\");\n\n\n//# sourceURL=webpack://FourCorners/multi_./index.js?");

/***/ })

/******/ });
});