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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n__webpack_require__(/*! styles.scss */ \"./src/styles.scss\");\n\nvar FourCorners = function FourCorners() {\n  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  _classCallCheck(this, FourCorners);\n\n  var embeds = [];\n\n  if (opts.elem instanceof Element) {\n    embeds = [opts.elem];\n  } else if (NodeList.prototype.isPrototypeOf(opts.elem)) {\n    embeds = Array.from(opts.elem);\n  } else {\n    var selector = typeof opts.selector == 'string' ? opts.selector : '.fc-embed'; // embeds = Array.from(document.querySelectorAll(selector+':not(.fc-init)'));\n\n    embeds = Array.from(document.querySelectorAll(selector));\n  }\n\n  var insts = [];\n  embeds.forEach(function (embed, i) {\n    var inst = new FourCornersPhoto(embed, opts);\n    insts.push(inst);\n  });\n  return insts;\n};\n\nvar FourCornersPhoto =\n/*#__PURE__*/\nfunction () {\n  function FourCornersPhoto(embed, opts) {\n    _classCallCheck(this, FourCornersPhoto);\n\n    this.cornerSlugs = ['authorship', 'backstory', 'imagery', 'links'];\n    this.elems = {\n      embed: embed\n    };\n    this.opts = opts;\n    var data = parseData(this);\n    this.strings = {};\n    this.setUpData(data);\n    this.onImgLoad = new Event('onImgLoad');\n    this.onImgFail = new Event('onImgFail');\n    this.initModule();\n  }\n\n  _createClass(FourCornersPhoto, [{\n    key: \"setUpData\",\n    value: function setUpData(data) {\n      this.lang = data && data.lang ? data.lang : 'en';\n      this.strings = translations[this.lang];\n      this.photo = getPhoto(this, data);\n      this.opts = Object.assign(defaultOpts, this.opts);\n      this.opts = data ? Object.assign(this.opts, data.opts) : {};\n      this.content = {\n        authorship: data ? data.authorship : {},\n        backstory: data ? data.backstory : {},\n        imagery: data ? data.imagery : {},\n        links: data ? data.links : {}\n      };\n      this.elems.photo = this.addPhoto();\n      this.elems.panels = this.addPanels();\n      this.elems.corners = this.addCorners();\n      this.elems.media = this.embedMedia();\n      this.elems.cutline = this.addCutline();\n      var inst = this;\n      Object.keys(this.elems.corners).forEach(function (cornerSlug, i) {\n        var cornerElem = inst.elems.corners[cornerSlug];\n\n        if (inst.opts[\"static\"] || cornerElem.classList.contains('fc-interactive')) {\n          return;\n        }\n\n        cornerElem.addEventListener('mouseenter', inst.hoverCorner.bind(inst));\n        cornerElem.addEventListener('mouseleave', inst.unhoverCorner.bind(inst));\n        cornerElem.addEventListener('click', inst.clickCorner.bind(inst));\n        cornerElem.classList.add(\"fc-interactive\");\n      });\n      return this;\n    }\n  }, {\n    key: \"initModule\",\n    value: function initModule() {\n      var self = this,\n          embed = this.elems.embed;\n      embed.classList.add('fc-init');\n\n      if (this.opts.dark) {\n        embed.classList.add('fc-dark');\n      }\n\n      if (this.opts[\"static\"]) {\n        embed.classList.add('fc-static');\n      } else {\n        embed.addEventListener('click', function (e) {\n          var onPanels = isChildOf(e.target, self.getPanel());\n          var onCorners = isChildOf(e.target, self.elems.corners);\n          var inCreator = isChildOf(e.target, Array.from(document.querySelectorAll('#creator')));\n\n          if (!onPanels && !onCorners && !inCreator) {\n            self.closePanel();\n            self.elems.embed.classList.remove('fc-full');\n          }\n        });\n      }\n\n      embed.lang = this.lang;\n\n      if (['ar'].includes(this.lang)) {\n        embed.dir = 'rtl';\n      } else {\n        embed.dir = 'ltr';\n      }\n\n      window.addEventListener('resize', this.resizeModule.bind(this));\n      this.resizeModule();\n    }\n  }, {\n    key: \"updateModule\",\n    value: function updateModule(data) {\n      if (!data) {\n        var _data = parseData(this);\n      }\n\n      this.setUpData(data);\n      this.initModule();\n      return this;\n    }\n  }, {\n    key: \"getPanel\",\n    value: function getPanel(cornerSlug) {\n      var embed = this.elems.embed;\n\n      if (!embed) {\n        return;\n      }\n\n      var panelSelector = '.fc-panel';\n\n      if (cornerSlug) {\n        panelSelector += '[data-fc-slug=\"' + cornerSlug + '\"]';\n        return embed.querySelector(panelSelector);\n      }\n\n      return embed.querySelectorAll(panelSelector);\n    }\n  }, {\n    key: \"openPanel\",\n    value: function openPanel(cornerSlug) {\n      var inst = this;\n      var corners = inst.cornerSlugs;\n      var embed = inst.elems.embed;\n      var corner = inst.elems.corners[cornerSlug];\n      var panel = inst.getPanel(cornerSlug);\n      embed.classList.remove('fc-full');\n\n      if (embed && corner && panel) {\n        embed.dataset.fcActive = cornerSlug;\n        embed.classList.add('fc-active');\n        corner.classList.add('fc-active');\n        panel.classList.add('fc-active');\n      }\n\n      corners.forEach(function (_cornerSlug, i) {\n        if (_cornerSlug != cornerSlug) {\n          inst.closePanel(_cornerSlug);\n        }\n      });\n    }\n  }, {\n    key: \"closePanel\",\n    value: function closePanel(cornerSlug) {\n      var inst = this;\n      var embed = inst.elems.embed;\n\n      if (!cornerSlug) {\n        cornerSlug = embed.dataset.fcActive;\n      }\n\n      if (!cornerSlug) {\n        return;\n      }\n\n      var corner = inst.elems.corners[cornerSlug];\n      var panel = inst.getPanel(cornerSlug);\n\n      if (cornerSlug == embed.dataset.fcActive) {\n        embed.dataset.fcActive = '';\n        embed.classList.remove('fc-active');\n      }\n\n      if (corner) {\n        corner.classList.remove('fc-active');\n      }\n\n      if (panel) {\n        panel.classList.remove('fc-active');\n      }\n    }\n  }, {\n    key: \"toggleExpandPanel\",\n    value: function toggleExpandPanel() {\n      var inst = this;\n      inst.elems.embed.classList.toggle('fc-full');\n    }\n  }, {\n    key: \"hoverCorner\",\n    value: function hoverCorner(e) {\n      var cornerElem = e.target;\n      cornerElem.classList.add('fc-hover');\n    }\n  }, {\n    key: \"unhoverCorner\",\n    value: function unhoverCorner(e) {\n      var cornerElem = e.target;\n      cornerElem.classList.remove('fc-hover');\n    }\n  }, {\n    key: \"clickCorner\",\n    value: function clickCorner(e) {\n      var cornerElem = e.target,\n          cornerSlug = cornerElem.dataset.fcSlug;\n      var active = this.elems.embed.dataset.fcActive;\n\n      if (!cornerSlug) {\n        return;\n      }\n\n      if (cornerSlug == active) {\n        this.closePanel(cornerSlug);\n      } else {\n        this.openPanel(cornerSlug);\n      }\n    }\n  }, {\n    key: \"addCorners\",\n    value: function addCorners() {\n      var data,\n          self = this,\n          corners = {};\n      var embed = this.elems.embed,\n          photo = this.elems.photo;\n      var active = this.opts.active,\n          langTrans = translations[this.lang];\n      this.cornerSlugs.forEach(function (cornerSlug, i) {\n        var cornerSelector = '.fc-corner[data-fc-slug=\"' + cornerSlug + '\"]',\n            cornerTitle = langTrans ? langTrans[cornerSlug] : null;\n        var cornerElem = embed.querySelector(cornerSelector),\n            cornerExists = cornerElem ? true : false;\n\n        if (!cornerElem) {\n          cornerElem = document.createElement('div');\n        }\n\n        cornerElem.dataset.fcSlug = cornerSlug;\n        cornerElem.title = cornerTitle ? 'View ' + cornerTitle : null;\n        cornerElem.classList.add('fc-corner');\n        cornerElem.classList.add('fc-' + cornerSlug);\n\n        if (cornerSlug == active) {\n          cornerElem.classList.add('fc-active');\n        }\n\n        if (self.content) {\n          data = self.content[cornerSlug];\n\n          if (!data || !Object.keys(data).length) {\n            cornerElem.classList.add('fc-empty');\n          }\n        }\n\n        corners[cornerSlug] = cornerElem;\n\n        if (!cornerExists) {\n          embed.appendChild(cornerElem);\n        }\n      });\n      return corners;\n    }\n  }, {\n    key: \"addPanels\",\n    value: function addPanels() {\n      var data,\n          self = this,\n          panels = {};\n      var embed = this.elems.embed;\n\n      if (!embed) {\n        return;\n      }\n\n      this.cornerSlugs.forEach(function (cornerSlug, i) {\n        var active = self.opts.active,\n            panel = self.getPanel(cornerSlug);\n\n        if (panel) {\n          // return;\n          panel.remove();\n        }\n\n        var panelInner = '';\n\n        if (self.content && self.content[cornerSlug]) {\n          var panelContent = self.content[cornerSlug];\n\n          switch (cornerSlug) {\n            case 'authorship':\n              panelInner = buildAuthorship(self, panelContent);\n              break;\n\n            case 'backstory':\n              panelInner = buildBackstory(self, panelContent);\n              break;\n\n            case 'imagery':\n              panelInner = buildImagery(self, panelContent);\n              break;\n\n            case 'links':\n              panelInner = buildLinks(self, panelContent);\n              break;\n          }\n        }\n\n        var panelTile = self.strings[cornerSlug];\n        var panelClass = 'fc-panel fc-' + cornerSlug;\n\n        if (cornerSlug == active) {\n          panelClass += ' fc-active';\n        }\n\n        var panelHTML = \"<div data-fc-slug=\\\"\".concat(cornerSlug, \"\\\" class=\\\"\").concat(panelClass, \"\\\">\\n\\t\\t\\t\\t\\t<div class=\\\"fc-panel-title\\\">\\n\\t\\t\\t\\t\\t\\t<span>\").concat(panelTile, \"</span>\\n\\t\\t\\t\\t\\t\\t<div class=\\\"fc-icon fc-expand\\\" title=\\\"Expand this panel\\\"></div>\\n\\t\\t\\t\\t\\t\\t<div class=\\\"fc-icon fc-close\\\" title=\\\"Close this panel\\\"></div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\\"fc-panel-title fc-pseudo\\\">\\n\\t\\t\\t\\t\\t\\t<span>\").concat(self.cornerSlugs.indexOf(cornerSlug), \"</span>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\").concat(panelInner ? \"<div class=\\\"fc-scroll\\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\\"fc-inner\\\">\\n\\t\\t\\t\\t\\t\\t\\t\".concat(panelInner, \"\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\") : '', \"\\n\\t\\t\\t\\t</div>\");\n        self.elems.embed.innerHTML += panelHTML;\n      });\n      this.cornerSlugs.forEach(function (cornerSlug, i) {\n        var panel = self.getPanel(cornerSlug);\n        panels[cornerSlug] = panel;\n        var panelExpand = panel.querySelector('.fc-expand');\n        panelExpand.addEventListener('click', function (e) {\n          self.toggleExpandPanel();\n        });\n        var panelClose = panel.querySelector('.fc-close');\n        panelClose.addEventListener('click', function (e) {\n          self.closePanel(cornerSlug);\n          self.elems.embed.classList.remove('fc-full');\n        });\n      });\n      return panels;\n    }\n  }, {\n    key: \"addPhoto\",\n    value: function addPhoto() {\n      var photo,\n          img,\n          self = this,\n          embed = this.elems.embed,\n          width = this.photo ? this.photo.width : null,\n          height = this.photo ? this.photo.height : null,\n          ratio = width / height,\n          imgSelector = '.fc-img';\n      embed.style.paddingBottom = 100 / ratio + '%';\n      img = embed.querySelector(imgSelector);\n\n      if (!img) {\n        embed.classList.add('fc-empty');\n      }\n\n      var pseudoImg = new Image();\n      embed.classList.add('fc-loading');\n\n      pseudoImg.onload = function (e) {\n        embed.style.paddingBottom = '';\n        embed.classList.remove('fc-loading');\n        embed.dispatchEvent(self.onImgLoad);\n      };\n\n      pseudoImg.onerror = function (e) {\n        embed.classList.remove('fc-loading');\n        embed.classList.add('fc-empty');\n        embed.dispatchEvent(self.onImgFail);\n      };\n\n      pseudoImg.src = img ? img.src : null;\n      return img;\n    }\n  }, {\n    key: \"addCutline\",\n    value: function addCutline() {\n      var content = this.content.authorship;\n\n      if (!content && !this.opts.caption && !this.opts.credit && !this.opts.logo) {\n        return;\n      }\n\n      var data = this.content['authorship'];\n\n      if (!data) {\n        return;\n      }\n\n      var embed = this.elems.embed;\n      var caption = this.opts.caption && content.caption ? \"<span class=\\\"fc-caption\\\">\".concat(content.caption, \"</span>\") : '';\n      var credit = this.opts.credit && (content.credit || content.license.holder) ? \"<div class=\\\"fc-credit\\\">\\n\\t\\t\\t\\t\".concat((content.credit ? \"<span>\".concat(content.credit, \"</span>\") : '') + (content.license.holder ? \"<span>\".concat(content.license.holder, \"</span>\") : ''), \"\\n\\t\\t\\t</div>\") : '';\n      var logo = this.opts.logo ? \"<a href=\\\"https://fourcornersproject.org\\\" target=\\\"_blank\\\" class=\\\"fc-logo\\\" title=\\\"This is a Four Corners photo\\\"></a>\" : '';\n      var cutline = \"<div class=\\\"fc-cutline\\\">\\n\\t\\t\\t\\t\".concat(caption + credit + logo, \"\\n\\t\\t\\t</div>\");\n      embed.insertAdjacentHTML('afterend', cutline);\n      return cutline;\n    }\n  }, {\n    key: \"embedMedia\",\n    value: function embedMedia() {\n      var self = this,\n          imageryContent = this.content.imagery;\n\n      if (!imageryContent) {\n        return;\n      }\n\n      var media = imageryContent.media;\n\n      if (!media) {\n        return;\n      }\n\n      var mediaKeys = Object.keys(media);\n      mediaKeys.forEach(function (key, i) {\n        var obj = media[key];\n\n        if (obj.source == 'image' || !obj.source) {\n          embedImage(self, obj, 'imagery', i);\n        } else {\n          embedExternal(self, obj, 'imagery', i);\n        }\n      }); // panelContent.media.map((obj, i) => {\n      // \tobj.source == 'image' || !obj.source ? embedImage(inst, obj, 'imagery', i) : embedExternal(inst, obj, 'imagery', i);\n      // });\n    }\n  }, {\n    key: \"resizeModule\",\n    value: function resizeModule(e) {\n      var panels = this.getPanel();\n\n      if (!panels) {\n        return;\n      }\n\n      Object.keys(panels).forEach(function (cornerSlug, i) {\n        resizePanel(panels[cornerSlug]);\n      });\n    }\n  }]);\n\n  return FourCornersPhoto;\n}();\n\nvar getPhoto = function getPhoto(inst, data) {\n  if (data && data.photo && data.photo.src) {\n    return data.photo;\n  }\n\n  var img = inst.elems.embed ? inst.elems.embed.querySelector('img') : null,\n      imgSrc = img ? img.src : null;\n  return {\n    src: imgSrc\n  };\n};\n\nvar resizePanel = function resizePanel(panel) {\n  if (typeof panel.querySelector !== 'function') {\n    return;\n  }\n\n  var panelScroll = panel.querySelector('.fc-scroll');\n\n  if (!panelScroll) {\n    return;\n  }\n\n  if (panelScroll.scrollHeight > panelScroll.clientHeight) {\n    panel.classList.add('fc-overflow');\n  } else {\n    panel.classList.remove('fc-overflow');\n  }\n};\n\nvar createRow = function createRow(panelContent, obj, includeLabel) {\n  var label = includeLabel ? \"<div class=\\\"fc-label\\\">\".concat(obj.label, \"</div>\") : '';\n  var content = panelContent[obj.prop];\n  return panelContent[obj.prop] ? \"<div class=\\\"fc-row\\\">\\n\\t\\t\\t\".concat(label, \"\\n\\t\\t\\t\").concat(content, \"\\n\\t\\t</div>\") : '';\n};\n\nvar buildAuthorship = function buildAuthorship(inst, panelContent) {\n  var html,\n      innerHtml = \"\";\n  innerHtml += panelContent['caption'] ? \"<div class=\\\"fc-field\\\">\\n\\t\\t\\t<em>\".concat(panelContent['caption'], \"</em>\\n\\t\\t</div>\") : '';\n  var creditHtml = [];\n\n  if (!panelContent.license) {\n    panelContent.license = {};\n  }\n\n  var hasCopyright = panelContent.license.type == 'copyright';\n\n  if (panelContent.license.year) {\n    creditHtml.push(\"<span>\".concat(panelContent.license.year, \"</span>\"));\n  }\n\n  if (panelContent.credit) {\n    creditHtml.push(\"<span>\".concat(panelContent.license.holder ? panelContent.credit + '/' + panelContent.license.holder : panelContent.credit, \"</span>\"));\n  }\n\n  innerHtml += hasCopyright || panelContent.credit ? \"<div class=\\\"fc-field\\\" data-fc-field=\\\"credit\\\">\\n\\t\\t\\t\\t<div class=\\\"fc-content\\\">\\n\\t\\t\\t\\t\\t\".concat(hasCopyright ? \"<div class=\\\"fc-copyright\\\">\\n\\t\\t\\t\\t\\t\\t\\t\".concat(creditHtml.join(''), \"\\n\\t\\t\\t\\t\\t\\t</div>\") : \"<div>\".concat(panelContent.credit, \"</div>\"), \"\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\") : '';\n  innerHtml += panelContent.license && panelContent.license.label && panelContent.license.type == 'commons' ? \"<div class=\\\"fc-field\\\" data-fc-field=\\\"license\\\">\\n\\t\\t\\t\\t<span class=\\\"fc-label\\\">\".concat(inst.strings.license, \"</span>\\n\\t\\t\\t\\t<span class=\\\"fc-content\\\">\\n\\t\\t\\t\\t\\t\").concat(panelContent.license.url ? \"<a href=\\\"\".concat(panelContent.license.url, \"\\\" target=\\\"_blank\\\">\\n\\t\\t\\t\\t\\t\\t\").concat(panelContent.license.label ? panelContent.license.label : '', \"\\n\\t\\t\\t\\t\\t</a>\") : panelContent.license.label ? panelContent.license.label : '', \"\\n\\t\\t\\t\\t</span>\\n\\t\\t\\t</div>\") : '';\n  innerHtml += panelContent.ethics && panelContent.ethics.desc ? \"<div class=\\\"fc-field\\\" data-fc-field=\\\"ethics\\\">\\n\\t\\t\\t\\t<span class=\\\"fc-label\\\">\".concat(inst.strings.cod, \"</span>\\n\\t\\t\\t\\t<span class=\\\"fc-content\\\">\").concat(panelContent.ethics.desc, \"</span>\\n\\t\\t\\t</div>\") : '';\n  innerHtml += panelContent['bio'] ? \"<div class=\\\"fc-field\\\">\\n\\t\\t\\t<span class=\\\"fc-label\\\">\".concat(inst.strings.bio, \"</span>\\n\\t\\t\\t\").concat(panelContent['bio'], \"\\n\\t\\t</div>\") : '';\n  innerHtml += panelContent['website'] || panelContent['0-contact'] || panelContent['1-contact'] ? \"<div class=\\\"fc-field fc-contact\\\">\\n\\n\\t\\t\\t\".concat(panelContent['website'] ? \"<div class=\\\"fc-field fc-card\\\">\\n\\t\\t\\t\\t<div class=\\\"fc-label\\\">\".concat(inst.strings.website, \"</div>\\n\\t\\t\\t\\t\").concat(createLink(panelContent['website']), \"\\n\\t\\t\\t</div>\") : '', \"\\n\\n\\t\\t\\t\").concat(panelContent['0-contact'] ? \"<div class=\\\"fc-field fc-card\\\">\\n\\t\\t\\t\\t<div class=\\\"fc-label\\\">\".concat(inst.strings.info, \"</div>\\n\\t\\t\\t\\t\").concat(createLink(panelContent['0-contact']), \"\\n\\t\\t\\t</div>\") : '', \"\\n\\n\\t\\t\\t\").concat(panelContent['1-contact'] ? \"<div class=\\\"fc-field fc-card\\\">\\n\\t\\t\\t\\t<div class=\\\"fc-label\\\">\".concat(inst.strings.rights, \"</div>\\n\\t\\t\\t\\t\").concat(createLink(panelContent['1-contact']), \"\\n\\t\\t\\t</div>\") : '', \"\\n\\n\\t\\t</div>\") : '';\n\n  if (innerHtml.length) {\n    html = \"<div class=\\\"fc-row\\\">\".concat(innerHtml, \"</div>\");\n  }\n\n  return html;\n};\n\nvar buildBackstory = function buildBackstory(inst, panelContent) {\n  var html = \"\".concat(panelContent['text'] ? \"<div class=\\\"fc-row\\\">\\n\\t\\t\\t\".concat(wrapParagraphs(panelContent['text']), \"\\n\\t\\t</div>\") : '', \"\\n\\t\\t\").concat(panelContent.media ? panelContent.media.map(function (obj, i) {\n    embedExternal(inst, obj, 'backstory', i);\n    return \"<div class=\\\"fc-row\\\">\\n\\t\\t\\t\\t<div class=\\\"fc-media\\\" data-fc-source=\\\"\".concat(obj.source, \"\\\"></div>\\n\\t\\t\\t\\t\").concat(obj.caption ? \"<div class=\\\"fc-sub-caption\\\">\".concat(obj.caption, \"</div>\") : '', \"\\n\\t\\t\\t\\t\").concat(obj.credit ? \"<div class=\\\"fc-sub-credit\\\">\".concat(obj.credit, \"</div>\") : '', \"\\n\\t\\t\\t</div>\");\n  }).join('') : '');\n  return html;\n};\n\nvar buildImagery = function buildImagery(inst, panelContent) {\n  if (!panelContent.media) {\n    return;\n  }\n\n  var html = \"\".concat(panelContent.media.map(function (obj, i) {\n    var isExternal = ['instagram', 'youtube', 'vimeo'].includes(obj.source);\n    return \"<div class=\\\"fc-row\\\">\\n\\t\\t\\t\\t<div class=\\\"fc-media\\\" data-fc-source=\\\"\".concat(obj.source, \"\\\">\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\").concat(obj.caption ? \"<div class=\\\"fc-sub-caption\\\">\".concat(obj.caption, \"</div>\") : '', \"\\n\\t\\t\\t\\t\").concat(obj.credit || isExternal ? \"<div class=\\\"fc-sub-credit\\\">\\n\\t\\t\\t\\t\\t\\t\".concat(isExternal && obj.url ? \"<a href=\\\"\".concat(obj.url, \"\\\" target=\\\"_blank\\\">\") : '', \"\\n\\t\\t\\t\\t\\t\\t\\t\").concat(obj.credit || 'View on ' + extractRootDomain(obj.url), \"\\n\\t\\t\\t\\t\\t\\t\").concat(isExternal ? \"</a>\" : '', \"\\n\\t\\t\\t\\t\\t</div>\") : '', \"\\n\\t\\t\\t</div>\");\n  }).join(''));\n  return html;\n};\n\nvar buildLinks = function buildLinks(inst, panelContent) {\n  if (!panelContent.links) {\n    return;\n  }\n\n  var html = panelContent.links.map(function (obj) {\n    if (!obj || !obj.url) {\n      return null;\n    }\n\n    var rootUrl = extractRootDomain(obj.url);\n    var text = obj.url ? \"\".concat(obj.title ? obj.title : rootUrl, \"\\n\\t\\t\\t<div class=\\\"fc-sub-url\\\">\").concat(rootUrl, \"</div>\") : '';\n    return \"<div class=\\\"fc-row\\\">\".concat(createLink(obj.url, text, ['fc-card']), \"</div>\");\n  }).join('');\n  return html;\n};\n\nvar embedImage = function embedImage(inst, obj, panelKey, index) {\n  if (!obj.url) {\n    return;\n  }\n\n  var pseudoImg = new Image();\n\n  pseudoImg.onload = function (e) {\n    var img = \"<img src=\\\"\".concat(obj.url, \"\\\"/>\");\n    var panel = inst.elems.panels[panelKey];\n    var media = panel.querySelectorAll('.fc-media')[index];\n    media.innerHTML += img;\n  };\n\n  pseudoImg.src = obj.url;\n  return;\n};\n\nvar embedExternal = function embedExternal(inst, obj, panelKey, index) {\n  //requests third party APIs to retrieve embed data\n  var req = '';\n\n  switch (obj.source) {\n    case 'youtube':\n      req = 'https://noembed.com/embed?url=' + obj.url;\n      break;\n\n    case 'vimeo':\n      req = 'https://vimeo.com/api/oembed.json?url=' + obj.url;\n      break;\n\n    case 'soundcloud':\n      req = 'https://soundcloud.com/oembed?format=json&url=' + obj.url;\n      break;\n\n    case 'instagram':\n      req = 'https://api.instagram.com/oembed/?url=' + obj.url;\n      break;\n\n    default:\n      return false;\n      break;\n  }\n\n  var headers = new Headers();\n  fetch(req, {\n    method: 'GET',\n    headers: headers\n  }).then(function (res) {\n    if (!res.ok) {\n      throw Error(res.statusText);\n    }\n\n    return res.json();\n  }).then(function (res) {\n    var panel = inst.elems.panels[panelKey];\n    var subMedia = panel.querySelectorAll('.fc-media')[index],\n        html = '';\n\n    if (obj.source == 'instagram') {\n      html = \"<img src=\\\"\".concat(res.thumbnail_url, \"\\\"/>\");\n    } else {\n      html = res.html;\n    }\n\n    if (Number.isInteger(res.width, res.height)) {\n      var ratio = res.height / res.width;\n      subMedia.classList.add('fc-responsive');\n      subMedia.style.paddingBottom = ratio * 100 + '%';\n    }\n\n    subMedia.innerHTML = html;\n  })[\"catch\"](function (err) {\n    console.warn('Four Corners cannot load this media source: ' + obj.url, err);\n  });\n};\n\nvar parseData = function parseData(inst) {\n  if (!inst.elems || !inst.elems.embed) {\n    return;\n  }\n\n  var embed = inst.elems.embed,\n      scriptTag = embed.querySelector(\"script\");\n  var stringData;\n\n  if (scriptTag) {\n    //If embed JSON is stored in child script tag (NEW)\n    stringData = scriptTag.innerHTML;\n    scriptTag.remove();\n  } else if (embed.hasAttribute(\"data-fc\")) {\n    //If embed JSON is stored in data-fc attributte (OLD)\n    stringData = embed.dataset.fc;\n    delete embed.dataset.fc;\n  }\n\n  if (!stringData) {\n    return;\n  }\n\n  return JSON.parse(stringData);\n};\n\nvar isChildOf = function isChildOf(target, ref) {\n  var answer = false;\n  Object.entries(ref).forEach(function (_ref) {\n    var _ref2 = _slicedToArray(_ref, 2),\n        key = _ref2[0],\n        elem = _ref2[1];\n\n    if (elem && elem.contains && elem.contains(target)) {\n      answer = true;\n    }\n  });\n  return answer;\n};\n\nvar wrapParagraphs = function wrapParagraphs(val) {\n  var array = val.split(/\\n/g);\n  var text = [];\n  var html = array ? \"\".concat(array.map(function (str, i) {\n    return str ? \"<p>\".concat(str, \"</p>\") : \"<br/>\";\n  }).join('')) : '';\n  return html;\n};\n\nvar createLink = function createLink(href, text) {\n  var classes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n\n  if (!text) {\n    text = extractRootDomain(href);\n  }\n\n  if (href.indexOf('@') > -1) {\n    href = 'mailto:' + href;\n  }\n\n  return \"<a href=\\\"\".concat(href, \"\\\" target=\\\"_blank\\\" class=\\\"\").concat(classes.join(' '), \"\\\">\").concat(text, \"</a>\");\n};\n\nvar extractHostname = function extractHostname(url) {\n  var hostname;\n\n  if (!url) {\n    return null;\n  }\n\n  if (url.indexOf('//') > -1) {\n    hostname = url.split('/')[2];\n  } else {\n    hostname = url.split('/')[0];\n  }\n\n  hostname = hostname.split(':')[0];\n  hostname = hostname.split('?')[0];\n  return hostname;\n};\n\nvar extractRootDomain = function extractRootDomain(url) {\n  if (!url) {\n    return null;\n  }\n\n  var domain = extractHostname(url);\n  var splitArr = domain.split('.');\n  var arrLen = splitArr.length;\n\n  if (arrLen > 2) {\n    domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];\n\n    if (splitArr[arrLen - 2].length == 2 && splitArr[arrLen - 1].length == 2) {\n      domain = splitArr[arrLen - 3] + '.' + domain;\n    }\n  }\n\n  return domain;\n};\n\nvar hasField = function hasField(panelContent, fieldKey, subFieldKey) {\n  if (!panelContent) {\n    return false;\n  }\n\n  if (!panelContent[fieldKey]) {\n    return false;\n  }\n\n  if (_typeof(panelContent[fieldKey]) == 'object') {\n    if (!Object.keys(panelContent[fieldKey]).length) {\n      return false;\n    }\n  } else {\n    if (!panelContent[fieldKey].length) {\n      return false;\n    }\n  }\n\n  if (!subFieldKey || !panelContent[fieldKey][subFieldKey]) {\n    return false;\n  }\n\n  if (_typeof(panelContent[fieldKey][subFieldKey]) == 'object') {\n    if (!Object.keys(panelContent[fieldKey][subFieldKey]).length) {\n      return false;\n    }\n  } else {\n    if (!panelContent[fieldKey][subFieldKey].length) {\n      return false;\n    }\n  }\n\n  return true;\n};\n\nvar translations = {\n  en: {\n    authorship: 'Authorship',\n    backstory: 'Backstory',\n    imagery: 'Related Imagery',\n    links: 'Links',\n    license: 'License',\n    cod: 'Code of ethics',\n    bio: 'Bio',\n    website: 'Website',\n    info: 'For more info',\n    rights: 'للحصول على حقوق النسخ'\n  },\n  ar: {\n    authorship: 'التأليف',\n    backstory: 'القصة وراء الصورة ',\n    imagery: 'الصور ذات الصلة',\n    links: 'الروابط',\n    license: 'الترخيص',\n    cod: 'ميثاق أخلاقيات',\n    bio: 'السيرة الذاتية',\n    website: 'الموقع الكتروني',\n    info: 'لمزيد من المعلومات',\n    rights: 'للحصول على حقوق النسخ'\n  }\n};\nvar defaultOpts = {\n  selector: '.fc-embed',\n  \"static\": false,\n  caption: false,\n  credit: false,\n  logo: false,\n  active: ''\n};\nmodule.exports = FourCorners;\n\n//# sourceURL=webpack://FourCorners/./src/index.js?");

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
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/coreytegeler/Sites/fourcorners.js/src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack://FourCorners/multi_./src/index.js?");

/***/ })

/******/ });
});