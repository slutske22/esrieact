"use strict";
exports.id = 94018;
exports.ids = [94018];
exports.modules = {

/***/ 13190:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W5: () => (/* binding */ t)
});

// UNUSED EXPORTS: additionalAllowedTags, safeAttrs

;// ./node_modules/@esri/arcgis-html-sanitizer/dist/esm/index.js
/*!
 * @esri/arcgis-html-sanitizer - v4.1.0 - Tue Dec 03 2024 09:13:28 GMT-0500 (Eastern Standard Time)
 * Copyright (c) 2024 - Environmental Systems Research Institute, Inc.
 * Apache-2.0
 * 
 * js-xss
 * Copyright (c) 2012-2018 Zongmin Lei(雷宗民) <leizongmin@gmail.com>
 * http://ucdok.com
 * MIT License, see https://github.com/leizongmin/js-xss/blob/master/LICENSE for details
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var lib$1 = {exports: {}};

var _default$1 = {};

var lib = {exports: {}};

var _default = {};

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */

function getDefaultWhiteList$1 () {
  // 白名单值说明：
  // true: 允许该属性
  // Function: function (val) { } 返回true表示允许该属性，其他值均表示不允许
  // RegExp: regexp.test(val) 返回true表示允许该属性，其他值均表示不允许
  // 除上面列出的值外均表示不允许
  var whiteList = {};

  whiteList['align-content'] = false; // default: auto
  whiteList['align-items'] = false; // default: auto
  whiteList['align-self'] = false; // default: auto
  whiteList['alignment-adjust'] = false; // default: auto
  whiteList['alignment-baseline'] = false; // default: baseline
  whiteList['all'] = false; // default: depending on individual properties
  whiteList['anchor-point'] = false; // default: none
  whiteList['animation'] = false; // default: depending on individual properties
  whiteList['animation-delay'] = false; // default: 0
  whiteList['animation-direction'] = false; // default: normal
  whiteList['animation-duration'] = false; // default: 0
  whiteList['animation-fill-mode'] = false; // default: none
  whiteList['animation-iteration-count'] = false; // default: 1
  whiteList['animation-name'] = false; // default: none
  whiteList['animation-play-state'] = false; // default: running
  whiteList['animation-timing-function'] = false; // default: ease
  whiteList['azimuth'] = false; // default: center
  whiteList['backface-visibility'] = false; // default: visible
  whiteList['background'] = true; // default: depending on individual properties
  whiteList['background-attachment'] = true; // default: scroll
  whiteList['background-clip'] = true; // default: border-box
  whiteList['background-color'] = true; // default: transparent
  whiteList['background-image'] = true; // default: none
  whiteList['background-origin'] = true; // default: padding-box
  whiteList['background-position'] = true; // default: 0% 0%
  whiteList['background-repeat'] = true; // default: repeat
  whiteList['background-size'] = true; // default: auto
  whiteList['baseline-shift'] = false; // default: baseline
  whiteList['binding'] = false; // default: none
  whiteList['bleed'] = false; // default: 6pt
  whiteList['bookmark-label'] = false; // default: content()
  whiteList['bookmark-level'] = false; // default: none
  whiteList['bookmark-state'] = false; // default: open
  whiteList['border'] = true; // default: depending on individual properties
  whiteList['border-bottom'] = true; // default: depending on individual properties
  whiteList['border-bottom-color'] = true; // default: current color
  whiteList['border-bottom-left-radius'] = true; // default: 0
  whiteList['border-bottom-right-radius'] = true; // default: 0
  whiteList['border-bottom-style'] = true; // default: none
  whiteList['border-bottom-width'] = true; // default: medium
  whiteList['border-collapse'] = true; // default: separate
  whiteList['border-color'] = true; // default: depending on individual properties
  whiteList['border-image'] = true; // default: none
  whiteList['border-image-outset'] = true; // default: 0
  whiteList['border-image-repeat'] = true; // default: stretch
  whiteList['border-image-slice'] = true; // default: 100%
  whiteList['border-image-source'] = true; // default: none
  whiteList['border-image-width'] = true; // default: 1
  whiteList['border-left'] = true; // default: depending on individual properties
  whiteList['border-left-color'] = true; // default: current color
  whiteList['border-left-style'] = true; // default: none
  whiteList['border-left-width'] = true; // default: medium
  whiteList['border-radius'] = true; // default: 0
  whiteList['border-right'] = true; // default: depending on individual properties
  whiteList['border-right-color'] = true; // default: current color
  whiteList['border-right-style'] = true; // default: none
  whiteList['border-right-width'] = true; // default: medium
  whiteList['border-spacing'] = true; // default: 0
  whiteList['border-style'] = true; // default: depending on individual properties
  whiteList['border-top'] = true; // default: depending on individual properties
  whiteList['border-top-color'] = true; // default: current color
  whiteList['border-top-left-radius'] = true; // default: 0
  whiteList['border-top-right-radius'] = true; // default: 0
  whiteList['border-top-style'] = true; // default: none
  whiteList['border-top-width'] = true; // default: medium
  whiteList['border-width'] = true; // default: depending on individual properties
  whiteList['bottom'] = false; // default: auto
  whiteList['box-decoration-break'] = true; // default: slice
  whiteList['box-shadow'] = true; // default: none
  whiteList['box-sizing'] = true; // default: content-box
  whiteList['box-snap'] = true; // default: none
  whiteList['box-suppress'] = true; // default: show
  whiteList['break-after'] = true; // default: auto
  whiteList['break-before'] = true; // default: auto
  whiteList['break-inside'] = true; // default: auto
  whiteList['caption-side'] = false; // default: top
  whiteList['chains'] = false; // default: none
  whiteList['clear'] = true; // default: none
  whiteList['clip'] = false; // default: auto
  whiteList['clip-path'] = false; // default: none
  whiteList['clip-rule'] = false; // default: nonzero
  whiteList['color'] = true; // default: implementation dependent
  whiteList['color-interpolation-filters'] = true; // default: auto
  whiteList['column-count'] = false; // default: auto
  whiteList['column-fill'] = false; // default: balance
  whiteList['column-gap'] = false; // default: normal
  whiteList['column-rule'] = false; // default: depending on individual properties
  whiteList['column-rule-color'] = false; // default: current color
  whiteList['column-rule-style'] = false; // default: medium
  whiteList['column-rule-width'] = false; // default: medium
  whiteList['column-span'] = false; // default: none
  whiteList['column-width'] = false; // default: auto
  whiteList['columns'] = false; // default: depending on individual properties
  whiteList['contain'] = false; // default: none
  whiteList['content'] = false; // default: normal
  whiteList['counter-increment'] = false; // default: none
  whiteList['counter-reset'] = false; // default: none
  whiteList['counter-set'] = false; // default: none
  whiteList['crop'] = false; // default: auto
  whiteList['cue'] = false; // default: depending on individual properties
  whiteList['cue-after'] = false; // default: none
  whiteList['cue-before'] = false; // default: none
  whiteList['cursor'] = false; // default: auto
  whiteList['direction'] = false; // default: ltr
  whiteList['display'] = true; // default: depending on individual properties
  whiteList['display-inside'] = true; // default: auto
  whiteList['display-list'] = true; // default: none
  whiteList['display-outside'] = true; // default: inline-level
  whiteList['dominant-baseline'] = false; // default: auto
  whiteList['elevation'] = false; // default: level
  whiteList['empty-cells'] = false; // default: show
  whiteList['filter'] = false; // default: none
  whiteList['flex'] = false; // default: depending on individual properties
  whiteList['flex-basis'] = false; // default: auto
  whiteList['flex-direction'] = false; // default: row
  whiteList['flex-flow'] = false; // default: depending on individual properties
  whiteList['flex-grow'] = false; // default: 0
  whiteList['flex-shrink'] = false; // default: 1
  whiteList['flex-wrap'] = false; // default: nowrap
  whiteList['float'] = false; // default: none
  whiteList['float-offset'] = false; // default: 0 0
  whiteList['flood-color'] = false; // default: black
  whiteList['flood-opacity'] = false; // default: 1
  whiteList['flow-from'] = false; // default: none
  whiteList['flow-into'] = false; // default: none
  whiteList['font'] = true; // default: depending on individual properties
  whiteList['font-family'] = true; // default: implementation dependent
  whiteList['font-feature-settings'] = true; // default: normal
  whiteList['font-kerning'] = true; // default: auto
  whiteList['font-language-override'] = true; // default: normal
  whiteList['font-size'] = true; // default: medium
  whiteList['font-size-adjust'] = true; // default: none
  whiteList['font-stretch'] = true; // default: normal
  whiteList['font-style'] = true; // default: normal
  whiteList['font-synthesis'] = true; // default: weight style
  whiteList['font-variant'] = true; // default: normal
  whiteList['font-variant-alternates'] = true; // default: normal
  whiteList['font-variant-caps'] = true; // default: normal
  whiteList['font-variant-east-asian'] = true; // default: normal
  whiteList['font-variant-ligatures'] = true; // default: normal
  whiteList['font-variant-numeric'] = true; // default: normal
  whiteList['font-variant-position'] = true; // default: normal
  whiteList['font-weight'] = true; // default: normal
  whiteList['grid'] = false; // default: depending on individual properties
  whiteList['grid-area'] = false; // default: depending on individual properties
  whiteList['grid-auto-columns'] = false; // default: auto
  whiteList['grid-auto-flow'] = false; // default: none
  whiteList['grid-auto-rows'] = false; // default: auto
  whiteList['grid-column'] = false; // default: depending on individual properties
  whiteList['grid-column-end'] = false; // default: auto
  whiteList['grid-column-start'] = false; // default: auto
  whiteList['grid-row'] = false; // default: depending on individual properties
  whiteList['grid-row-end'] = false; // default: auto
  whiteList['grid-row-start'] = false; // default: auto
  whiteList['grid-template'] = false; // default: depending on individual properties
  whiteList['grid-template-areas'] = false; // default: none
  whiteList['grid-template-columns'] = false; // default: none
  whiteList['grid-template-rows'] = false; // default: none
  whiteList['hanging-punctuation'] = false; // default: none
  whiteList['height'] = true; // default: auto
  whiteList['hyphens'] = false; // default: manual
  whiteList['icon'] = false; // default: auto
  whiteList['image-orientation'] = false; // default: auto
  whiteList['image-resolution'] = false; // default: normal
  whiteList['ime-mode'] = false; // default: auto
  whiteList['initial-letters'] = false; // default: normal
  whiteList['inline-box-align'] = false; // default: last
  whiteList['justify-content'] = false; // default: auto
  whiteList['justify-items'] = false; // default: auto
  whiteList['justify-self'] = false; // default: auto
  whiteList['left'] = false; // default: auto
  whiteList['letter-spacing'] = true; // default: normal
  whiteList['lighting-color'] = true; // default: white
  whiteList['line-box-contain'] = false; // default: block inline replaced
  whiteList['line-break'] = false; // default: auto
  whiteList['line-grid'] = false; // default: match-parent
  whiteList['line-height'] = false; // default: normal
  whiteList['line-snap'] = false; // default: none
  whiteList['line-stacking'] = false; // default: depending on individual properties
  whiteList['line-stacking-ruby'] = false; // default: exclude-ruby
  whiteList['line-stacking-shift'] = false; // default: consider-shifts
  whiteList['line-stacking-strategy'] = false; // default: inline-line-height
  whiteList['list-style'] = true; // default: depending on individual properties
  whiteList['list-style-image'] = true; // default: none
  whiteList['list-style-position'] = true; // default: outside
  whiteList['list-style-type'] = true; // default: disc
  whiteList['margin'] = true; // default: depending on individual properties
  whiteList['margin-bottom'] = true; // default: 0
  whiteList['margin-left'] = true; // default: 0
  whiteList['margin-right'] = true; // default: 0
  whiteList['margin-top'] = true; // default: 0
  whiteList['marker-offset'] = false; // default: auto
  whiteList['marker-side'] = false; // default: list-item
  whiteList['marks'] = false; // default: none
  whiteList['mask'] = false; // default: border-box
  whiteList['mask-box'] = false; // default: see individual properties
  whiteList['mask-box-outset'] = false; // default: 0
  whiteList['mask-box-repeat'] = false; // default: stretch
  whiteList['mask-box-slice'] = false; // default: 0 fill
  whiteList['mask-box-source'] = false; // default: none
  whiteList['mask-box-width'] = false; // default: auto
  whiteList['mask-clip'] = false; // default: border-box
  whiteList['mask-image'] = false; // default: none
  whiteList['mask-origin'] = false; // default: border-box
  whiteList['mask-position'] = false; // default: center
  whiteList['mask-repeat'] = false; // default: no-repeat
  whiteList['mask-size'] = false; // default: border-box
  whiteList['mask-source-type'] = false; // default: auto
  whiteList['mask-type'] = false; // default: luminance
  whiteList['max-height'] = true; // default: none
  whiteList['max-lines'] = false; // default: none
  whiteList['max-width'] = true; // default: none
  whiteList['min-height'] = true; // default: 0
  whiteList['min-width'] = true; // default: 0
  whiteList['move-to'] = false; // default: normal
  whiteList['nav-down'] = false; // default: auto
  whiteList['nav-index'] = false; // default: auto
  whiteList['nav-left'] = false; // default: auto
  whiteList['nav-right'] = false; // default: auto
  whiteList['nav-up'] = false; // default: auto
  whiteList['object-fit'] = false; // default: fill
  whiteList['object-position'] = false; // default: 50% 50%
  whiteList['opacity'] = false; // default: 1
  whiteList['order'] = false; // default: 0
  whiteList['orphans'] = false; // default: 2
  whiteList['outline'] = false; // default: depending on individual properties
  whiteList['outline-color'] = false; // default: invert
  whiteList['outline-offset'] = false; // default: 0
  whiteList['outline-style'] = false; // default: none
  whiteList['outline-width'] = false; // default: medium
  whiteList['overflow'] = false; // default: depending on individual properties
  whiteList['overflow-wrap'] = false; // default: normal
  whiteList['overflow-x'] = false; // default: visible
  whiteList['overflow-y'] = false; // default: visible
  whiteList['padding'] = true; // default: depending on individual properties
  whiteList['padding-bottom'] = true; // default: 0
  whiteList['padding-left'] = true; // default: 0
  whiteList['padding-right'] = true; // default: 0
  whiteList['padding-top'] = true; // default: 0
  whiteList['page'] = false; // default: auto
  whiteList['page-break-after'] = false; // default: auto
  whiteList['page-break-before'] = false; // default: auto
  whiteList['page-break-inside'] = false; // default: auto
  whiteList['page-policy'] = false; // default: start
  whiteList['pause'] = false; // default: implementation dependent
  whiteList['pause-after'] = false; // default: implementation dependent
  whiteList['pause-before'] = false; // default: implementation dependent
  whiteList['perspective'] = false; // default: none
  whiteList['perspective-origin'] = false; // default: 50% 50%
  whiteList['pitch'] = false; // default: medium
  whiteList['pitch-range'] = false; // default: 50
  whiteList['play-during'] = false; // default: auto
  whiteList['position'] = false; // default: static
  whiteList['presentation-level'] = false; // default: 0
  whiteList['quotes'] = false; // default: text
  whiteList['region-fragment'] = false; // default: auto
  whiteList['resize'] = false; // default: none
  whiteList['rest'] = false; // default: depending on individual properties
  whiteList['rest-after'] = false; // default: none
  whiteList['rest-before'] = false; // default: none
  whiteList['richness'] = false; // default: 50
  whiteList['right'] = false; // default: auto
  whiteList['rotation'] = false; // default: 0
  whiteList['rotation-point'] = false; // default: 50% 50%
  whiteList['ruby-align'] = false; // default: auto
  whiteList['ruby-merge'] = false; // default: separate
  whiteList['ruby-position'] = false; // default: before
  whiteList['shape-image-threshold'] = false; // default: 0.0
  whiteList['shape-outside'] = false; // default: none
  whiteList['shape-margin'] = false; // default: 0
  whiteList['size'] = false; // default: auto
  whiteList['speak'] = false; // default: auto
  whiteList['speak-as'] = false; // default: normal
  whiteList['speak-header'] = false; // default: once
  whiteList['speak-numeral'] = false; // default: continuous
  whiteList['speak-punctuation'] = false; // default: none
  whiteList['speech-rate'] = false; // default: medium
  whiteList['stress'] = false; // default: 50
  whiteList['string-set'] = false; // default: none
  whiteList['tab-size'] = false; // default: 8
  whiteList['table-layout'] = false; // default: auto
  whiteList['text-align'] = true; // default: start
  whiteList['text-align-last'] = true; // default: auto
  whiteList['text-combine-upright'] = true; // default: none
  whiteList['text-decoration'] = true; // default: none
  whiteList['text-decoration-color'] = true; // default: currentColor
  whiteList['text-decoration-line'] = true; // default: none
  whiteList['text-decoration-skip'] = true; // default: objects
  whiteList['text-decoration-style'] = true; // default: solid
  whiteList['text-emphasis'] = true; // default: depending on individual properties
  whiteList['text-emphasis-color'] = true; // default: currentColor
  whiteList['text-emphasis-position'] = true; // default: over right
  whiteList['text-emphasis-style'] = true; // default: none
  whiteList['text-height'] = true; // default: auto
  whiteList['text-indent'] = true; // default: 0
  whiteList['text-justify'] = true; // default: auto
  whiteList['text-orientation'] = true; // default: mixed
  whiteList['text-overflow'] = true; // default: clip
  whiteList['text-shadow'] = true; // default: none
  whiteList['text-space-collapse'] = true; // default: collapse
  whiteList['text-transform'] = true; // default: none
  whiteList['text-underline-position'] = true; // default: auto
  whiteList['text-wrap'] = true; // default: normal
  whiteList['top'] = false; // default: auto
  whiteList['transform'] = false; // default: none
  whiteList['transform-origin'] = false; // default: 50% 50% 0
  whiteList['transform-style'] = false; // default: flat
  whiteList['transition'] = false; // default: depending on individual properties
  whiteList['transition-delay'] = false; // default: 0s
  whiteList['transition-duration'] = false; // default: 0s
  whiteList['transition-property'] = false; // default: all
  whiteList['transition-timing-function'] = false; // default: ease
  whiteList['unicode-bidi'] = false; // default: normal
  whiteList['vertical-align'] = false; // default: baseline
  whiteList['visibility'] = false; // default: visible
  whiteList['voice-balance'] = false; // default: center
  whiteList['voice-duration'] = false; // default: auto
  whiteList['voice-family'] = false; // default: implementation dependent
  whiteList['voice-pitch'] = false; // default: medium
  whiteList['voice-range'] = false; // default: medium
  whiteList['voice-rate'] = false; // default: normal
  whiteList['voice-stress'] = false; // default: normal
  whiteList['voice-volume'] = false; // default: medium
  whiteList['volume'] = false; // default: medium
  whiteList['white-space'] = false; // default: normal
  whiteList['widows'] = false; // default: 2
  whiteList['width'] = true; // default: auto
  whiteList['will-change'] = false; // default: auto
  whiteList['word-break'] = true; // default: normal
  whiteList['word-spacing'] = true; // default: normal
  whiteList['word-wrap'] = true; // default: normal
  whiteList['wrap-flow'] = false; // default: auto
  whiteList['wrap-through'] = false; // default: wrap
  whiteList['writing-mode'] = false; // default: horizontal-tb
  whiteList['z-index'] = false; // default: auto

  return whiteList;
}


/**
 * 匹配到白名单上的一个属性时
 *
 * @param {String} name
 * @param {String} value
 * @param {Object} options
 * @return {String}
 */
function onAttr (name, value, options) {
  // do nothing
}

/**
 * 匹配到不在白名单上的一个属性时
 *
 * @param {String} name
 * @param {String} value
 * @param {Object} options
 * @return {String}
 */
function onIgnoreAttr (name, value, options) {
  // do nothing
}

var REGEXP_URL_JAVASCRIPT = /javascript\s*\:/img;

/**
 * 过滤属性值
 *
 * @param {String} name
 * @param {String} value
 * @return {String}
 */
function safeAttrValue$1(name, value) {
  if (REGEXP_URL_JAVASCRIPT.test(value)) return '';
  return value;
}


_default.whiteList = getDefaultWhiteList$1();
_default.getDefaultWhiteList = getDefaultWhiteList$1;
_default.onAttr = onAttr;
_default.onIgnoreAttr = onIgnoreAttr;
_default.safeAttrValue = safeAttrValue$1;

var util$1 = {
  indexOf: function (arr, item) {
    var i, j;
    if (Array.prototype.indexOf) {
      return arr.indexOf(item);
    }
    for (i = 0, j = arr.length; i < j; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },
  forEach: function (arr, fn, scope) {
    var i, j;
    if (Array.prototype.forEach) {
      return arr.forEach(fn, scope);
    }
    for (i = 0, j = arr.length; i < j; i++) {
      fn.call(scope, arr[i], i, arr);
    }
  },
  trim: function (str) {
    if (String.prototype.trim) {
      return str.trim();
    }
    return str.replace(/(^\s*)|(\s*$)/g, '');
  },
  trimRight: function (str) {
    if (String.prototype.trimRight) {
      return str.trimRight();
    }
    return str.replace(/(\s*$)/g, '');
  }
};

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */

var _$3 = util$1;


/**
 * 解析style
 *
 * @param {String} css
 * @param {Function} onAttr 处理属性的函数
 *   参数格式： function (sourcePosition, position, name, value, source)
 * @return {String}
 */
function parseStyle$1 (css, onAttr) {
  css = _$3.trimRight(css);
  if (css[css.length - 1] !== ';') css += ';';
  var cssLength = css.length;
  var isParenthesisOpen = false;
  var lastPos = 0;
  var i = 0;
  var retCSS = '';

  function addNewAttr () {
    // 如果没有正常的闭合圆括号，则直接忽略当前属性
    if (!isParenthesisOpen) {
      var source = _$3.trim(css.slice(lastPos, i));
      var j = source.indexOf(':');
      if (j !== -1) {
        var name = _$3.trim(source.slice(0, j));
        var value = _$3.trim(source.slice(j + 1));
        // 必须有属性名称
        if (name) {
          var ret = onAttr(lastPos, retCSS.length, name, value, source);
          if (ret) retCSS += ret + '; ';
        }
      }
    }
    lastPos = i + 1;
  }

  for (; i < cssLength; i++) {
    var c = css[i];
    if (c === '/' && css[i + 1] === '*') {
      // 备注开始
      var j = css.indexOf('*/', i + 2);
      // 如果没有正常的备注结束，则后面的部分全部跳过
      if (j === -1) break;
      // 直接将当前位置调到备注结尾，并且初始化状态
      i = j + 1;
      lastPos = i + 1;
      isParenthesisOpen = false;
    } else if (c === '(') {
      isParenthesisOpen = true;
    } else if (c === ')') {
      isParenthesisOpen = false;
    } else if (c === ';') {
      if (isParenthesisOpen) ; else {
        addNewAttr();
      }
    } else if (c === '\n') {
      addNewAttr();
    }
  }

  return _$3.trim(retCSS);
}

var parser$2 = parseStyle$1;

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */

var DEFAULT$1 = _default;
var parseStyle = parser$2;


/**
 * 返回值是否为空
 *
 * @param {Object} obj
 * @return {Boolean}
 */
function isNull$1 (obj) {
  return (obj === undefined || obj === null);
}

/**
 * 浅拷贝对象
 *
 * @param {Object} obj
 * @return {Object}
 */
function shallowCopyObject$1 (obj) {
  var ret = {};
  for (var i in obj) {
    ret[i] = obj[i];
  }
  return ret;
}

/**
 * 创建CSS过滤器
 *
 * @param {Object} options
 *   - {Object} whiteList
 *   - {Function} onAttr
 *   - {Function} onIgnoreAttr
 *   - {Function} safeAttrValue
 */
function FilterCSS$2 (options) {
  options = shallowCopyObject$1(options || {});
  options.whiteList = options.whiteList || DEFAULT$1.whiteList;
  options.onAttr = options.onAttr || DEFAULT$1.onAttr;
  options.onIgnoreAttr = options.onIgnoreAttr || DEFAULT$1.onIgnoreAttr;
  options.safeAttrValue = options.safeAttrValue || DEFAULT$1.safeAttrValue;
  this.options = options;
}

FilterCSS$2.prototype.process = function (css) {
  // 兼容各种奇葩输入
  css = css || '';
  css = css.toString();
  if (!css) return '';

  var me = this;
  var options = me.options;
  var whiteList = options.whiteList;
  var onAttr = options.onAttr;
  var onIgnoreAttr = options.onIgnoreAttr;
  var safeAttrValue = options.safeAttrValue;

  var retCSS = parseStyle(css, function (sourcePosition, position, name, value, source) {

    var check = whiteList[name];
    var isWhite = false;
    if (check === true) isWhite = check;
    else if (typeof check === 'function') isWhite = check(value);
    else if (check instanceof RegExp) isWhite = check.test(value);
    if (isWhite !== true) isWhite = false;

    // 如果过滤后 value 为空则直接忽略
    value = safeAttrValue(name, value);
    if (!value) return;

    var opts = {
      position: position,
      sourcePosition: sourcePosition,
      source: source,
      isWhite: isWhite
    };

    if (isWhite) {

      var ret = onAttr(name, value, opts);
      if (isNull$1(ret)) {
        return name + ':' + value;
      } else {
        return ret;
      }

    } else {

      var ret = onIgnoreAttr(name, value, opts);
      if (!isNull$1(ret)) {
        return ret;
      }

    }
  });

  return retCSS;
};


var css = FilterCSS$2;

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */

(function (module, exports) {
	var DEFAULT = _default;
	var FilterCSS = css;


	/**
	 * XSS过滤
	 *
	 * @param {String} css 要过滤的CSS代码
	 * @param {Object} options 选项：whiteList, onAttr, onIgnoreAttr
	 * @return {String}
	 */
	function filterCSS (html, options) {
	  var xss = new FilterCSS(options);
	  return xss.process(html);
	}


	// 输出
	exports = module.exports = filterCSS;
	exports.FilterCSS = FilterCSS;
	for (var i in DEFAULT) exports[i] = DEFAULT[i];
} (lib, lib.exports));

var libExports$1 = lib.exports;

var util = {
  indexOf: function (arr, item) {
    var i, j;
    if (Array.prototype.indexOf) {
      return arr.indexOf(item);
    }
    for (i = 0, j = arr.length; i < j; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },
  forEach: function (arr, fn, scope) {
    var i, j;
    if (Array.prototype.forEach) {
      return arr.forEach(fn, scope);
    }
    for (i = 0, j = arr.length; i < j; i++) {
      fn.call(scope, arr[i], i, arr);
    }
  },
  trim: function (str) {
    if (String.prototype.trim) {
      return str.trim();
    }
    return str.replace(/(^\s*)|(\s*$)/g, "");
  },
  spaceIndex: function (str) {
    var reg = /\s|\n|\t/;
    var match = reg.exec(str);
    return match ? match.index : -1;
  },
};

/**
 * default settings
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */

var FilterCSS$1 = libExports$1.FilterCSS;
var getDefaultCSSWhiteList = libExports$1.getDefaultWhiteList;
var _$2 = util;

function getDefaultWhiteList() {
  return {
    a: ["target", "href", "title"],
    abbr: ["title"],
    address: [],
    area: ["shape", "coords", "href", "alt"],
    article: [],
    aside: [],
    audio: [
      "autoplay",
      "controls",
      "crossorigin",
      "loop",
      "muted",
      "preload",
      "src",
    ],
    b: [],
    bdi: ["dir"],
    bdo: ["dir"],
    big: [],
    blockquote: ["cite"],
    br: [],
    caption: [],
    center: [],
    cite: [],
    code: [],
    col: ["align", "valign", "span", "width"],
    colgroup: ["align", "valign", "span", "width"],
    dd: [],
    del: ["datetime"],
    details: ["open"],
    div: [],
    dl: [],
    dt: [],
    em: [],
    figcaption: [],
    figure: [],
    font: ["color", "size", "face"],
    footer: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    header: [],
    hr: [],
    i: [],
    img: ["src", "alt", "title", "width", "height"],
    ins: ["datetime"],
    li: [],
    mark: [],
    nav: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    section: [],
    small: [],
    span: [],
    sub: [],
    summary: [],
    sup: [],
    strong: [],
    strike: [],
    table: ["width", "border", "align", "valign"],
    tbody: ["align", "valign"],
    td: ["width", "rowspan", "colspan", "align", "valign"],
    tfoot: ["align", "valign"],
    th: ["width", "rowspan", "colspan", "align", "valign"],
    thead: ["align", "valign"],
    tr: ["rowspan", "align", "valign"],
    tt: [],
    u: [],
    ul: [],
    video: [
      "autoplay",
      "controls",
      "crossorigin",
      "loop",
      "muted",
      "playsinline",
      "poster",
      "preload",
      "src",
      "height",
      "width",
    ],
  };
}

var defaultCSSFilter = new FilterCSS$1();

/**
 * default onTag function
 *
 * @param {String} tag
 * @param {String} html
 * @param {Object} options
 * @return {String}
 */
function onTag(tag, html, options) {
  // do nothing
}

/**
 * default onIgnoreTag function
 *
 * @param {String} tag
 * @param {String} html
 * @param {Object} options
 * @return {String}
 */
function onIgnoreTag(tag, html, options) {
  // do nothing
}

/**
 * default onTagAttr function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @return {String}
 */
function onTagAttr(tag, name, value) {
  // do nothing
}

/**
 * default onIgnoreTagAttr function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @return {String}
 */
function onIgnoreTagAttr(tag, name, value) {
  // do nothing
}

/**
 * default escapeHtml function
 *
 * @param {String} html
 */
function escapeHtml(html) {
  return html.replace(REGEXP_LT, "&lt;").replace(REGEXP_GT, "&gt;");
}

/**
 * default safeAttrValue function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @param {Object} cssFilter
 * @return {String}
 */
function safeAttrValue(tag, name, value, cssFilter) {
  // unescape attribute value firstly
  value = friendlyAttrValue(value);

  if (name === "href" || name === "src") {
    // filter `href` and `src` attribute
    // only allow the value that starts with `http://` | `https://` | `mailto:` | `/` | `#`
    value = _$2.trim(value);
    if (value === "#") return "#";
    if (
      !(
        value.substr(0, 7) === "http://" ||
        value.substr(0, 8) === "https://" ||
        value.substr(0, 7) === "mailto:" ||
        value.substr(0, 4) === "tel:" ||
        value.substr(0, 11) === "data:image/" ||
        value.substr(0, 6) === "ftp://" ||
        value.substr(0, 2) === "./" ||
        value.substr(0, 3) === "../" ||
        value[0] === "#" ||
        value[0] === "/"
      )
    ) {
      return "";
    }
  } else if (name === "background") {
    // filter `background` attribute (maybe no use)
    // `javascript:`
    REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
    if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
      return "";
    }
  } else if (name === "style") {
    // `expression()`
    REGEXP_DEFAULT_ON_TAG_ATTR_7.lastIndex = 0;
    if (REGEXP_DEFAULT_ON_TAG_ATTR_7.test(value)) {
      return "";
    }
    // `url()`
    REGEXP_DEFAULT_ON_TAG_ATTR_8.lastIndex = 0;
    if (REGEXP_DEFAULT_ON_TAG_ATTR_8.test(value)) {
      REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
      if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
        return "";
      }
    }
    if (cssFilter !== false) {
      cssFilter = cssFilter || defaultCSSFilter;
      value = cssFilter.process(value);
    }
  }

  // escape `<>"` before returns
  value = escapeAttrValue(value);
  return value;
}

// RegExp list
var REGEXP_LT = /</g;
var REGEXP_GT = />/g;
var REGEXP_QUOTE = /"/g;
var REGEXP_QUOTE_2 = /&quot;/g;
var REGEXP_ATTR_VALUE_1 = /&#([a-zA-Z0-9]*);?/gim;
var REGEXP_ATTR_VALUE_COLON = /&colon;?/gim;
var REGEXP_ATTR_VALUE_NEWLINE = /&newline;?/gim;
// var REGEXP_DEFAULT_ON_TAG_ATTR_3 = /\/\*|\*\//gm;
var REGEXP_DEFAULT_ON_TAG_ATTR_4 =
  /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi;
// var REGEXP_DEFAULT_ON_TAG_ATTR_5 = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:/gi;
// var REGEXP_DEFAULT_ON_TAG_ATTR_6 = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:\s*image\//gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_7 =
  /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_8 = /u\s*r\s*l\s*\(.*/gi;

/**
 * escape double quote
 *
 * @param {String} str
 * @return {String} str
 */
function escapeQuote(str) {
  return str.replace(REGEXP_QUOTE, "&quot;");
}

/**
 * unescape double quote
 *
 * @param {String} str
 * @return {String} str
 */
function unescapeQuote(str) {
  return str.replace(REGEXP_QUOTE_2, '"');
}

/**
 * escape html entities
 *
 * @param {String} str
 * @return {String}
 */
function escapeHtmlEntities(str) {
  return str.replace(REGEXP_ATTR_VALUE_1, function replaceUnicode(str, code) {
    return code[0] === "x" || code[0] === "X"
      ? String.fromCharCode(parseInt(code.substr(1), 16))
      : String.fromCharCode(parseInt(code, 10));
  });
}

/**
 * escape html5 new danger entities
 *
 * @param {String} str
 * @return {String}
 */
function escapeDangerHtml5Entities(str) {
  return str
    .replace(REGEXP_ATTR_VALUE_COLON, ":")
    .replace(REGEXP_ATTR_VALUE_NEWLINE, " ");
}

/**
 * clear nonprintable characters
 *
 * @param {String} str
 * @return {String}
 */
function clearNonPrintableCharacter(str) {
  var str2 = "";
  for (var i = 0, len = str.length; i < len; i++) {
    str2 += str.charCodeAt(i) < 32 ? " " : str.charAt(i);
  }
  return _$2.trim(str2);
}

/**
 * get friendly attribute value
 *
 * @param {String} str
 * @return {String}
 */
function friendlyAttrValue(str) {
  str = unescapeQuote(str);
  str = escapeHtmlEntities(str);
  str = escapeDangerHtml5Entities(str);
  str = clearNonPrintableCharacter(str);
  return str;
}

/**
 * unescape attribute value
 *
 * @param {String} str
 * @return {String}
 */
function escapeAttrValue(str) {
  str = escapeQuote(str);
  str = escapeHtml(str);
  return str;
}

/**
 * `onIgnoreTag` function for removing all the tags that are not in whitelist
 */
function onIgnoreTagStripAll() {
  return "";
}

/**
 * remove tag body
 * specify a `tags` list, if the tag is not in the `tags` list then process by the specify function (optional)
 *
 * @param {array} tags
 * @param {function} next
 */
function StripTagBody(tags, next) {
  if (typeof next !== "function") {
    next = function () {};
  }

  var isRemoveAllTag = !Array.isArray(tags);
  function isRemoveTag(tag) {
    if (isRemoveAllTag) return true;
    return _$2.indexOf(tags, tag) !== -1;
  }

  var removeList = [];
  var posStart = false;

  return {
    onIgnoreTag: function (tag, html, options) {
      if (isRemoveTag(tag)) {
        if (options.isClosing) {
          var ret = "[/removed]";
          var end = options.position + ret.length;
          removeList.push([
            posStart !== false ? posStart : options.position,
            end,
          ]);
          posStart = false;
          return ret;
        } else {
          if (!posStart) {
            posStart = options.position;
          }
          return "[removed]";
        }
      } else {
        return next(tag, html, options);
      }
    },
    remove: function (html) {
      var rethtml = "";
      var lastPos = 0;
      _$2.forEach(removeList, function (pos) {
        rethtml += html.slice(lastPos, pos[0]);
        lastPos = pos[1];
      });
      rethtml += html.slice(lastPos);
      return rethtml;
    },
  };
}

/**
 * remove html comments
 *
 * @param {String} html
 * @return {String}
 */
function stripCommentTag(html) {
  var retHtml = "";
  var lastPos = 0;
  while (lastPos < html.length) {
    var i = html.indexOf("<!--", lastPos);
    if (i === -1) {
      retHtml += html.slice(lastPos);
      break;
    }
    retHtml += html.slice(lastPos, i);
    var j = html.indexOf("-->", i);
    if (j === -1) {
      break;
    }
    lastPos = j + 3;
  }
  return retHtml;
}

/**
 * remove invisible characters
 *
 * @param {String} html
 * @return {String}
 */
function stripBlankChar(html) {
  var chars = html.split("");
  chars = chars.filter(function (char) {
    var c = char.charCodeAt(0);
    if (c === 127) return false;
    if (c <= 31) {
      if (c === 10 || c === 13) return true;
      return false;
    }
    return true;
  });
  return chars.join("");
}

_default$1.whiteList = getDefaultWhiteList();
_default$1.getDefaultWhiteList = getDefaultWhiteList;
_default$1.onTag = onTag;
_default$1.onIgnoreTag = onIgnoreTag;
_default$1.onTagAttr = onTagAttr;
_default$1.onIgnoreTagAttr = onIgnoreTagAttr;
_default$1.safeAttrValue = safeAttrValue;
_default$1.escapeHtml = escapeHtml;
_default$1.escapeQuote = escapeQuote;
_default$1.unescapeQuote = unescapeQuote;
_default$1.escapeHtmlEntities = escapeHtmlEntities;
_default$1.escapeDangerHtml5Entities = escapeDangerHtml5Entities;
_default$1.clearNonPrintableCharacter = clearNonPrintableCharacter;
_default$1.friendlyAttrValue = friendlyAttrValue;
_default$1.escapeAttrValue = escapeAttrValue;
_default$1.onIgnoreTagStripAll = onIgnoreTagStripAll;
_default$1.StripTagBody = StripTagBody;
_default$1.stripCommentTag = stripCommentTag;
_default$1.stripBlankChar = stripBlankChar;
_default$1.cssFilter = defaultCSSFilter;
_default$1.getDefaultCSSWhiteList = getDefaultCSSWhiteList;

var parser$1 = {};

/**
 * Simple HTML Parser
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */

var _$1 = util;

/**
 * get tag name
 *
 * @param {String} html e.g. '<a hef="#">'
 * @return {String}
 */
function getTagName(html) {
  var i = _$1.spaceIndex(html);
  var tagName;
  if (i === -1) {
    tagName = html.slice(1, -1);
  } else {
    tagName = html.slice(1, i + 1);
  }
  tagName = _$1.trim(tagName).toLowerCase();
  if (tagName.slice(0, 1) === "/") tagName = tagName.slice(1);
  if (tagName.slice(-1) === "/") tagName = tagName.slice(0, -1);
  return tagName;
}

/**
 * is close tag?
 *
 * @param {String} html 如：'<a hef="#">'
 * @return {Boolean}
 */
function isClosing(html) {
  return html.slice(0, 2) === "</";
}

/**
 * parse input html and returns processed html
 *
 * @param {String} html
 * @param {Function} onTag e.g. function (sourcePosition, position, tag, html, isClosing)
 * @param {Function} escapeHtml
 * @return {String}
 */
function parseTag$1(html, onTag, escapeHtml) {

  var rethtml = "";
  var lastPos = 0;
  var tagStart = false;
  var quoteStart = false;
  var currentPos = 0;
  var len = html.length;
  var currentTagName = "";
  var currentHtml = "";

  chariterator: for (currentPos = 0; currentPos < len; currentPos++) {
    var c = html.charAt(currentPos);
    if (tagStart === false) {
      if (c === "<") {
        tagStart = currentPos;
        continue;
      }
    } else {
      if (quoteStart === false) {
        if (c === "<") {
          rethtml += escapeHtml(html.slice(lastPos, currentPos));
          tagStart = currentPos;
          lastPos = currentPos;
          continue;
        }
        if (c === ">") {
          rethtml += escapeHtml(html.slice(lastPos, tagStart));
          currentHtml = html.slice(tagStart, currentPos + 1);
          currentTagName = getTagName(currentHtml);
          rethtml += onTag(
            tagStart,
            rethtml.length,
            currentTagName,
            currentHtml,
            isClosing(currentHtml)
          );
          lastPos = currentPos + 1;
          tagStart = false;
          continue;
        }
        if (c === '"' || c === "'") {
          var i = 1;
          var ic = html.charAt(currentPos - i);

          while (ic.trim() === "" || ic === "=") {
            if (ic === "=") {
              quoteStart = c;
              continue chariterator;
            }
            ic = html.charAt(currentPos - ++i);
          }
        }
      } else {
        if (c === quoteStart) {
          quoteStart = false;
          continue;
        }
      }
    }
  }
  if (lastPos < html.length) {
    rethtml += escapeHtml(html.substr(lastPos));
  }

  return rethtml;
}

var REGEXP_ILLEGAL_ATTR_NAME = /[^a-zA-Z0-9\\_:.-]/gim;

/**
 * parse input attributes and returns processed attributes
 *
 * @param {String} html e.g. `href="#" target="_blank"`
 * @param {Function} onAttr e.g. `function (name, value)`
 * @return {String}
 */
function parseAttr$1(html, onAttr) {

  var lastPos = 0;
  var lastMarkPos = 0;
  var retAttrs = [];
  var tmpName = false;
  var len = html.length;

  function addAttr(name, value) {
    name = _$1.trim(name);
    name = name.replace(REGEXP_ILLEGAL_ATTR_NAME, "").toLowerCase();
    if (name.length < 1) return;
    var ret = onAttr(name, value || "");
    if (ret) retAttrs.push(ret);
  }

  // 逐个分析字符
  for (var i = 0; i < len; i++) {
    var c = html.charAt(i);
    var v, j;
    if (tmpName === false && c === "=") {
      tmpName = html.slice(lastPos, i);
      lastPos = i + 1;
      lastMarkPos = html.charAt(lastPos) === '"' || html.charAt(lastPos) === "'" ? lastPos : findNextQuotationMark(html, i + 1);
      continue;
    }
    if (tmpName !== false) {
      if (
        i === lastMarkPos
      ) {
        j = html.indexOf(c, i + 1);
        if (j === -1) {
          break;
        } else {
          v = _$1.trim(html.slice(lastMarkPos + 1, j));
          addAttr(tmpName, v);
          tmpName = false;
          i = j;
          lastPos = i + 1;
          continue;
        }
      }
    }
    if (/\s|\n|\t/.test(c)) {
      html = html.replace(/\s|\n|\t/g, " ");
      if (tmpName === false) {
        j = findNextEqual(html, i);
        if (j === -1) {
          v = _$1.trim(html.slice(lastPos, i));
          addAttr(v);
          tmpName = false;
          lastPos = i + 1;
          continue;
        } else {
          i = j - 1;
          continue;
        }
      } else {
        j = findBeforeEqual(html, i - 1);
        if (j === -1) {
          v = _$1.trim(html.slice(lastPos, i));
          v = stripQuoteWrap(v);
          addAttr(tmpName, v);
          tmpName = false;
          lastPos = i + 1;
          continue;
        } else {
          continue;
        }
      }
    }
  }

  if (lastPos < html.length) {
    if (tmpName === false) {
      addAttr(html.slice(lastPos));
    } else {
      addAttr(tmpName, stripQuoteWrap(_$1.trim(html.slice(lastPos))));
    }
  }

  return _$1.trim(retAttrs.join(" "));
}

function findNextEqual(str, i) {
  for (; i < str.length; i++) {
    var c = str[i];
    if (c === " ") continue;
    if (c === "=") return i;
    return -1;
  }
}

function findNextQuotationMark(str, i) {
  for (; i < str.length; i++) {
    var c = str[i];
    if (c === " ") continue;
    if (c === "'" || c === '"') return i;
    return -1;
  }
}

function findBeforeEqual(str, i) {
  for (; i > 0; i--) {
    var c = str[i];
    if (c === " ") continue;
    if (c === "=") return i;
    return -1;
  }
}

function isQuoteWrapString(text) {
  if (
    (text[0] === '"' && text[text.length - 1] === '"') ||
    (text[0] === "'" && text[text.length - 1] === "'")
  ) {
    return true;
  } else {
    return false;
  }
}

function stripQuoteWrap(text) {
  if (isQuoteWrapString(text)) {
    return text.substr(1, text.length - 2);
  } else {
    return text;
  }
}

parser$1.parseTag = parseTag$1;
parser$1.parseAttr = parseAttr$1;

/**
 * filter xss
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */

var FilterCSS = libExports$1.FilterCSS;
var DEFAULT = _default$1;
var parser = parser$1;
var parseTag = parser.parseTag;
var parseAttr = parser.parseAttr;
var _ = util;

/**
 * returns `true` if the input value is `undefined` or `null`
 *
 * @param {Object} obj
 * @return {Boolean}
 */
function isNull(obj) {
  return obj === undefined || obj === null;
}

/**
 * get attributes for a tag
 *
 * @param {String} html
 * @return {Object}
 *   - {String} html
 *   - {Boolean} closing
 */
function getAttrs(html) {
  var i = _.spaceIndex(html);
  if (i === -1) {
    return {
      html: "",
      closing: html[html.length - 2] === "/",
    };
  }
  html = _.trim(html.slice(i + 1, -1));
  var isClosing = html[html.length - 1] === "/";
  if (isClosing) html = _.trim(html.slice(0, -1));
  return {
    html: html,
    closing: isClosing,
  };
}

/**
 * shallow copy
 *
 * @param {Object} obj
 * @return {Object}
 */
function shallowCopyObject(obj) {
  var ret = {};
  for (var i in obj) {
    ret[i] = obj[i];
  }
  return ret;
}

function keysToLowerCase(obj) {
  var ret = {};
  for (var i in obj) {
    if (Array.isArray(obj[i])) {
      ret[i.toLowerCase()] = obj[i].map(function (item) {
        return item.toLowerCase();
      });
    } else {
      ret[i.toLowerCase()] = obj[i];
    }
  }
  return ret;
}

/**
 * FilterXSS class
 *
 * @param {Object} options
 *        whiteList (or allowList), onTag, onTagAttr, onIgnoreTag,
 *        onIgnoreTagAttr, safeAttrValue, escapeHtml
 *        stripIgnoreTagBody, allowCommentTag, stripBlankChar
 *        css{whiteList, onAttr, onIgnoreAttr} `css=false` means don't use `cssfilter`
 */
function FilterXSS(options) {
  options = shallowCopyObject(options || {});

  if (options.stripIgnoreTag) {
    if (options.onIgnoreTag) {
      console.error(
        'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
      );
    }
    options.onIgnoreTag = DEFAULT.onIgnoreTagStripAll;
  }
  if (options.whiteList || options.allowList) {
    options.whiteList = keysToLowerCase(options.whiteList || options.allowList);
  } else {
    options.whiteList = DEFAULT.whiteList;
  }

  options.onTag = options.onTag || DEFAULT.onTag;
  options.onTagAttr = options.onTagAttr || DEFAULT.onTagAttr;
  options.onIgnoreTag = options.onIgnoreTag || DEFAULT.onIgnoreTag;
  options.onIgnoreTagAttr = options.onIgnoreTagAttr || DEFAULT.onIgnoreTagAttr;
  options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
  options.escapeHtml = options.escapeHtml || DEFAULT.escapeHtml;
  this.options = options;

  if (options.css === false) {
    this.cssFilter = false;
  } else {
    options.css = options.css || {};
    this.cssFilter = new FilterCSS(options.css);
  }
}

/**
 * start process and returns result
 *
 * @param {String} html
 * @return {String}
 */
FilterXSS.prototype.process = function (html) {
  // compatible with the input
  html = html || "";
  html = html.toString();
  if (!html) return "";

  var me = this;
  var options = me.options;
  var whiteList = options.whiteList;
  var onTag = options.onTag;
  var onIgnoreTag = options.onIgnoreTag;
  var onTagAttr = options.onTagAttr;
  var onIgnoreTagAttr = options.onIgnoreTagAttr;
  var safeAttrValue = options.safeAttrValue;
  var escapeHtml = options.escapeHtml;
  var cssFilter = me.cssFilter;

  // remove invisible characters
  if (options.stripBlankChar) {
    html = DEFAULT.stripBlankChar(html);
  }

  // remove html comments
  if (!options.allowCommentTag) {
    html = DEFAULT.stripCommentTag(html);
  }

  // if enable stripIgnoreTagBody
  var stripIgnoreTagBody = false;
  if (options.stripIgnoreTagBody) {
    stripIgnoreTagBody = DEFAULT.StripTagBody(
      options.stripIgnoreTagBody,
      onIgnoreTag
    );
    onIgnoreTag = stripIgnoreTagBody.onIgnoreTag;
  }

  var retHtml = parseTag(
    html,
    function (sourcePosition, position, tag, html, isClosing) {
      var info = {
        sourcePosition: sourcePosition,
        position: position,
        isClosing: isClosing,
        isWhite: Object.prototype.hasOwnProperty.call(whiteList, tag),
      };

      // call `onTag()`
      var ret = onTag(tag, html, info);
      if (!isNull(ret)) return ret;

      if (info.isWhite) {
        if (info.isClosing) {
          return "</" + tag + ">";
        }

        var attrs = getAttrs(html);
        var whiteAttrList = whiteList[tag];
        var attrsHtml = parseAttr(attrs.html, function (name, value) {
          // call `onTagAttr()`
          var isWhiteAttr = _.indexOf(whiteAttrList, name) !== -1;
          var ret = onTagAttr(tag, name, value, isWhiteAttr);
          if (!isNull(ret)) return ret;

          if (isWhiteAttr) {
            // call `safeAttrValue()`
            value = safeAttrValue(tag, name, value, cssFilter);
            if (value) {
              return name + '="' + value + '"';
            } else {
              return name;
            }
          } else {
            // call `onIgnoreTagAttr()`
            ret = onIgnoreTagAttr(tag, name, value, isWhiteAttr);
            if (!isNull(ret)) return ret;
            return;
          }
        });

        // build new tag html
        html = "<" + tag;
        if (attrsHtml) html += " " + attrsHtml;
        if (attrs.closing) html += " /";
        html += ">";
        return html;
      } else {
        // call `onIgnoreTag()`
        ret = onIgnoreTag(tag, html, info);
        if (!isNull(ret)) return ret;
        return escapeHtml(html);
      }
    },
    escapeHtml
  );

  // if enable stripIgnoreTagBody
  if (stripIgnoreTagBody) {
    retHtml = stripIgnoreTagBody.remove(retHtml);
  }

  return retHtml;
};

var xss = FilterXSS;

/**
 * xss
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */

(function (module, exports) {
	var DEFAULT = _default$1;
	var parser = parser$1;
	var FilterXSS = xss;

	/**
	 * filter xss function
	 *
	 * @param {String} html
	 * @param {Object} options { whiteList, onTag, onTagAttr, onIgnoreTag, onIgnoreTagAttr, safeAttrValue, escapeHtml }
	 * @return {String}
	 */
	function filterXSS(html, options) {
	  var xss = new FilterXSS(options);
	  return xss.process(html);
	}

	exports = module.exports = filterXSS;
	exports.filterXSS = filterXSS;
	exports.FilterXSS = FilterXSS;

	(function () {
	  for (var i in DEFAULT) {
	    exports[i] = DEFAULT[i];
	  }
	  for (var j in parser) {
	    exports[j] = parser[j];
	  }
	})();

	// using `xss` on the WebWorker, output `filterXSS` to the globals
	function isWorkerEnv() {
	  return (
	    typeof self !== "undefined" &&
	    typeof DedicatedWorkerGlobalScope !== "undefined" &&
	    self instanceof DedicatedWorkerGlobalScope
	  );
	}
	if (isWorkerEnv()) {
	  self.filterXSS = module.exports;
	} 
} (lib$1, lib$1.exports));

var libExports = lib$1.exports;

/**
 * Determine if the value is a plain object.
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 */
var isPlainObject = function (value) {
    if (typeof value !== "object" || value === null) {
        return false;
    }
    if (Object.prototype.toString.call(value) !== "[object Object]") {
        return false;
    }
    var proto = Object.getPrototypeOf(value);
    if (proto === null) {
        return true;
    }
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(value) === proto;
};

/**
 * The Sanitizer Class
 *
 * @export
 * @class Sanitizer
 */
var Sanitizer = /** @class */ (function () {
    function Sanitizer(filterOptions, extendDefaults) {
        var _this = this;
        // Supported HTML Spec: https://doc.arcgis.com/en/arcgis-online/reference/supported-html.htm
        this.arcgisWhiteList = {
            a: ["href", "style", "target"],
            abbr: ["title"],
            article: ["style"],
            aside: ["style"],
            audio: ["autoplay", "controls", "loop", "muted", "preload"],
            b: [],
            blockquote: ["style"],
            br: [],
            code: ["style"],
            dd: ["style"],
            del: ["style"],
            details: ["open", "style"],
            div: ["align", "aria-hidden", "aria-label", "style"],
            dl: ["style"],
            dt: ["style"],
            em: [],
            figcaption: ["style"],
            figure: ["style"],
            font: ["color", "face", "size", "style"],
            footer: ["style"],
            h1: ["style"],
            h2: ["style"],
            h3: ["style"],
            h4: ["style"],
            h5: ["style"],
            h6: ["style"],
            header: ["style"],
            hr: [],
            i: [],
            img: ["alt", "border", "height", "src", "style", "width"],
            li: [],
            main: ["style"],
            mark: ["style"],
            nav: ["style"],
            ol: [],
            p: ["style"],
            pre: ["style"],
            section: ["style"],
            source: ["media", "src", "type"],
            span: ["aria-hidden", "aria-label", "style"],
            strong: [],
            sub: ["style"],
            summary: ["style"],
            sup: ["style"],
            table: ["border", "cellpadding", "cellspacing", "height", "style", "width"],
            tbody: [],
            tr: ["align", "height", "style", "valign"],
            td: [
                "align",
                "colspan",
                "height",
                "nowrap",
                "rowspan",
                "style",
                "valign",
                "width",
            ],
            th: [
                "align",
                "colspan",
                "height",
                "nowrap",
                "rowspan",
                "style",
                "valign",
                "width",
            ],
            time: ["style"],
            u: [],
            ul: [],
            video: [
                "autoplay",
                "controls",
                "height",
                "loop",
                "muted",
                "poster",
                "preload",
                "width",
            ],
        };
        this.arcgisCSSWhiteList = __assign(__assign({}, libExports.getDefaultCSSWhiteList()), { "align-items": true, "align-self": true, "flex": true, "flex-basis": true, "flex-direction": true, "flex-flow": true, "flex-grow": true, "flex-shrink": true, "flex-wrap": true, "float": true, "gap": true, "grid": true, "grid-area": true, "grid-auto-columns": true, "grid-auto-flow": true, "grid-auto-rows": true, "grid-column": true, "grid-column-end": true, "grid-column-start": true, "grid-row": true, "grid-row-end": true, "grid-row-start": true, "grid-template": true, "grid-template-areas": true, "grid-template-columns": true, "grid-template-rows": true, "justify-content": true, "justify-items": true, "justify-self": true, "line-height": true, "overflow": true });
        this.allowedProtocols = [
            "http",
            "https",
            "mailto",
            "iform",
            "tel",
            "flow",
            "lfmobile",
            "arcgis-navigator",
            "arcgis-appstudio-player",
            "arcgis-survey123",
            "arcgis-collector",
            "arcgis-workforce",
            "arcgis-explorer",
            "arcgis-trek2there",
            "arcgis-quickcapture",
            "mspbi",
            "comgooglemaps",
            "pdfefile",
            "pdfehttp",
            "pdfehttps",
            "boxapp",
            "boxemm",
            "awb",
            "awbs",
            "gropen",
            "radarscope",
        ];
        this.arcgisFilterOptions = {
            allowCommentTag: true,
            safeAttrValue: function (tag, name, value, cssFilter) {
                // Take over safe attribute filtering for `a` `href`, `img` `src`,
                // and `source` `src` attributes, otherwise pass onto the
                // default `XSS.safeAttrValue` method.
                if ((tag === "a" && name === "href") ||
                    ((tag === "img" || tag === "source") && name === "src")) {
                    return _this.sanitizeUrl(value);
                }
                return libExports.safeAttrValue(tag, name, value, cssFilter);
            },
        };
        this._entityMap = {
            "&": "&#x38;",
            "<": "&#x3C;",
            ">": "&#x3E;",
            '"': "&#x22;",
            "'": "&#x27;",
            "/": "&#x2F;",
        };
        var xssFilterOptions;
        if (filterOptions && !extendDefaults) {
            // Override the defaults
            xssFilterOptions = filterOptions;
        }
        else if (filterOptions && extendDefaults) {
            // Extend the defaults
            xssFilterOptions = Object.create(this.arcgisFilterOptions);
            xssFilterOptions.css = { whiteList: this.arcgisCSSWhiteList };
            Object.keys(filterOptions).forEach(function (key) {
                if (key === "whiteList") {
                    // Extend the whitelist by concatenating arrays
                    xssFilterOptions.whiteList = _this._extendObjectOfArrays([
                        _this.arcgisWhiteList,
                        filterOptions.whiteList || {},
                    ]);
                }
                else if (key === "css") {
                    var cssExtensions_1 = filterOptions.css.whiteList;
                    if (cssExtensions_1 != null && filterOptions.css instanceof Object) {
                        Object.keys(cssExtensions_1).forEach(function (attr) {
                            return (xssFilterOptions.css.whiteList[attr] =
                                cssExtensions_1[attr]);
                        });
                    }
                }
                else {
                    xssFilterOptions[key] = filterOptions[key];
                }
            });
        }
        else {
            // Only use the defaults
            xssFilterOptions = Object.create(this.arcgisFilterOptions);
            xssFilterOptions.whiteList = this.arcgisWhiteList;
            xssFilterOptions.css = { whiteList: this.arcgisCSSWhiteList };
        }
        this.xssFilterOptions = xssFilterOptions;
        // Make this readable to tests
        this._xssFilter = new libExports.FilterXSS(xssFilterOptions);
    }
    /**
     * Sanitizes value to remove invalid HTML tags.
     *
     * Note: If the value passed does not contain a valid JSON data type (String,
     * Number, JSON Object, Array, Boolean, or null), the value will be nullified.
     *
     * @param {any} value The value to sanitize.
     * @returns {any} The sanitized value.
     * @memberof Sanitizer
     */
    Sanitizer.prototype.sanitize = function (value, options) {
        if (options === void 0) { options = {}; }
        switch (typeof value) {
            case "number":
                if (isNaN(value) || !isFinite(value)) {
                    return null;
                }
                return value;
            case "boolean":
                return value;
            case "string":
                return this._xssFilter.process(value);
            case "object":
                return this._iterateOverObject(value, options);
            default:
                if (options.allowUndefined && typeof value === "undefined") {
                    return;
                }
                return null;
        }
    };
    /**
     * Sanitizes a URL string following the allowed protocols and sanitization rules.
     *
     * @param {string} value The URL to sanitize.
     * @param {{ isProtocolRequired: boolean }} options Configuration options for URL checking.
     * @returns {string} The sanitized URL if it's valid, or an empty string if the URL is invalid.
     */
    Sanitizer.prototype.sanitizeUrl = function (value, options) {
        var _a = (options !== null && options !== void 0 ? options : {}).isProtocolRequired, isProtocolRequired = _a === void 0 ? true : _a;
        var protocol = this._trim(value.substring(0, value.indexOf(":")));
        var isRootUrl = value === "/";
        var isUrlFragment = /^#/.test(value);
        var isValidProtocol = protocol && this.allowedProtocols.indexOf(protocol.toLowerCase()) > -1;
        if (isRootUrl || isUrlFragment || isValidProtocol) {
            return libExports.escapeAttrValue(value);
        }
        if (!protocol && !isProtocolRequired) {
            return libExports.escapeAttrValue("https://".concat(value));
        }
        return "";
    };
    /**
     * Sanitizes an HTML attribute value.
     *
     * @param {string} tag The tagname of the HTML element.
     * @param {string} attribute The attribute name of the HTML element.
     * @param {string} value The raw value to be used for the HTML attribute value.
     * @param {XSS.ICSSFilter} [cssFilter] The CSS filter to be used.
     * @returns {string} The sanitized attribute value.
     * @memberof Sanitizer
     */
    Sanitizer.prototype.sanitizeHTMLAttribute = function (tag, attribute, value, cssFilter) {
        // use the custom safeAttrValue function if provided
        if (typeof this.xssFilterOptions.safeAttrValue === "function") {
            return this.xssFilterOptions.safeAttrValue(tag, attribute, value, 
            // @ts-expect-error safeAttrValue does handle undefined cssFilter
            cssFilter);
        }
        // otherwise use the default
        // @ts-ignore safeAttrValue does handle undefined cssFilter
        return libExports.safeAttrValue(tag, attribute, value, cssFilter);
    };
    /**
     * Checks if a value only contains valid HTML.
     *
     * @param {any} value The value to validate.
     * @returns {boolean}
     * @memberof Sanitizer
     */
    Sanitizer.prototype.validate = function (value, options) {
        if (options === void 0) { options = {}; }
        var sanitized = this.sanitize(value, options);
        return {
            isValid: value === sanitized,
            sanitized: sanitized,
        };
    };
    /**
     * Encodes the following characters, `& < > \" ' /` to their hexadecimal HTML entity code.
     * Example: "&middot;" => "&#x38;middot;"
     *
     * @param {string} value The value to encode.
     * @returns {string} The encoded string value.
     * @memberof Sanitizer
     */
    Sanitizer.prototype.encodeHTML = function (value) {
        var _this = this;
        return String(value).replace(/[&<>"'\/]/g, function (s) {
            return _this._entityMap[s];
        });
    };
    /**
     * Encodes all non-alphanumeric ASCII characters to their hexadecimal HTML entity codes.
     * Example: "alert(document.cookie)" => "alert&#x28;document&#x2e;cookie&#x29;"
     *
     * @param {string} value The value to encode.
     * @returns {string} The encoded string value.
     * @memberof Sanitizer
     */
    Sanitizer.prototype.encodeAttrValue = function (value) {
        var alphanumericRE = /^[a-zA-Z0-9]$/;
        return String(value).replace(/[\x00-\xFF]/g, function (c, idx) {
            return !alphanumericRE.test(c)
                ? "&#x".concat(Number(value.charCodeAt(idx)).toString(16), ";")
                : c;
        });
    };
    /**
     * Extends an object of arrays by by concatenating arrays of the same object
     * keys. If the if the previous key's value is not an array, the next key's
     * value will replace the previous key. This method is used for extending the
     * whiteList in the XSS filter options.
     *
     * @private
     * @param {Array<{}>} objects An array of objects.
     * @returns {{}} The extended object.
     * @memberof Sanitizer
     */
    Sanitizer.prototype._extendObjectOfArrays = function (objects) {
        var finalObj = {};
        objects.forEach(function (obj) {
            Object.keys(obj).forEach(function (key) {
                if (Array.isArray(obj[key]) && Array.isArray(finalObj[key])) {
                    finalObj[key] = finalObj[key].concat(obj[key]);
                }
                else {
                    finalObj[key] = obj[key];
                }
            });
        });
        return finalObj;
    };
    /**
     * Iterate over a plain object or array to deeply sanitize each value.
     *
     * @private
     * @param {object} obj The object to iterate over.
     * @returns {(object | null)} The sanitized object.
     * @memberof Sanitizer
     */
    Sanitizer.prototype._iterateOverObject = function (obj, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        try {
            var hasChanged_1 = false;
            var changedObj = void 0;
            if (Array.isArray(obj)) {
                changedObj = obj.reduce(function (prev, value) {
                    var validation = _this.validate(value, options);
                    if (validation.isValid) {
                        return prev.concat([value]);
                    }
                    else {
                        hasChanged_1 = true;
                        return prev.concat([validation.sanitized]);
                    }
                }, []);
            }
            else if (!isPlainObject(obj)) {
                if (options.allowUndefined && typeof obj === "undefined") {
                    return;
                }
                return null;
            }
            else {
                var keys = Object.keys(obj);
                changedObj = keys.reduce(function (prev, key) {
                    var value = obj[key];
                    var validation = _this.validate(value, options);
                    if (validation.isValid) {
                        prev[key] = value;
                    }
                    else {
                        hasChanged_1 = true;
                        prev[key] = validation.sanitized;
                    }
                    return prev;
                }, {});
            }
            if (hasChanged_1) {
                return changedObj;
            }
            return obj;
        }
        catch (err) {
            return null;
        }
    };
    /**
     * Trim whitespace from the start and ends of a string.
     * @param {string} val The string to trim.
     * @returns {string} The trimmed string.
     */
    Sanitizer.prototype._trim = function (val) {
        // @ts-ignore This is used by Jest,
        // but TypeScript errors since it assumes `trim` is always available.
        return String.prototype.trim
            ? val.trim()
            : val.replace(/(^\s*)|(\s*$)/g, "");
    };
    return Sanitizer;
}());



;// ./node_modules/@arcgis/core/core/sanitizerUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const a=["dd","dl","dt","h1","h2","h3","h4","h5","h6","sub","sup",...["animate","animatetransform","circle","clippath","defs","ellipse","g","image","line","lineargradient","marker","mask","path","pattern","polygon","polyline","radialgradient","rect","stop","svg","switch","symbol","text","textpath","tspan","use"]],i=a.reduce(((e,a)=>(e[a]=[],e)),{}),r=["align","alink","alt","bgcolor","border","cellpadding","cellspacing","class","color","cols","colspan","coords","d","dir","face","height","hspace","ismap","lang","marginheight","marginwidth","multiple","nohref","noresize","noshade","nowrap","ref","rel","rev","rows","rowspan","scrolling","shape","span","summary","tabindex","title","usemap","valign","value","vlink","vspace","width"],t=new Sanitizer({whiteList:i,onTagAttr:(e,a,i)=>{const t=`${a}="${i}"`;if(r.includes(a))return t},stripIgnoreTag:!0,stripIgnoreTagBody:["script","style"]},!0);


/***/ }),

/***/ 94018:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ IdentityManager_s)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/kernel.js
var kernel = __webpack_require__(6480);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/config.js
var config = __webpack_require__(32083);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(38116);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var core_Error = __webpack_require__(62991);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Evented.js
var Evented = __webpack_require__(57888);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/events.js
var events = __webpack_require__(92840);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(15565);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/object.js
var object = __webpack_require__(21750);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js + 1 modules
var promiseUtils = __webpack_require__(49175);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(19759);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/intl.js + 1 modules
var intl = __webpack_require__(8005);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
;// ./node_modules/@arcgis/core/core/domUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function n(n){return"string"==typeof n?document.getElementById(n):n??null}function t(n,t){for(;;){const e=n.firstChild;if(!e)break;t.appendChild(e)}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(57725);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Promise.js
var core_Promise = __webpack_require__(71004);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(61985);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/uuid.js
var uuid = __webpack_require__(1874);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(77380);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/tracking.js
var tracking = __webpack_require__(99595);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/tracking/SimpleTrackingTarget.js
var SimpleTrackingTarget = __webpack_require__(52140);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/sanitizerUtils.js + 1 modules
var sanitizerUtils = __webpack_require__(13190);
;// ./node_modules/@arcgis/core/libs/maquette/projection.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const projection_t="http://www.w3.org/",projection_r=`${projection_t}2000/svg`,o=`${projection_t}1999/xlink`;let i=[],projection_n=(e,t)=>{let r={};return Object.keys(e).forEach((t=>{r[t]=e[t]})),t&&Object.keys(t).forEach((e=>{r[e]=t[e]})),r},l=(e,t)=>e.vnodeSelector===t.vnodeSelector&&(e.properties&&t.properties?e.properties.key===t.properties.key&&e.properties.bind===t.properties.bind:!e.properties&&!t.properties),s=e=>{if("string"!=typeof e)throw new Error("Style values must be strings")},p=(e,t,r)=>{if(""!==t.vnodeSelector)for(let o=r;o<e.length;o++)if(l(e[o],t))return o;return-1},d=(e,t,r,o)=>{let i=e[t];if(""===i.vnodeSelector)return;let n=i.properties;if(!(n?void 0===n.key?n.bind:n.key:void 0))for(let s=0;s<e.length;s++)if(s!==t){let t=e[s];if(l(t,i))throw new Error(`${r.vnodeSelector} had a ${i.vnodeSelector} child ${"added"===o?o:"removed"}, but there is now more than one. You must add unique key properties to make them distinguishable.`)}},a=e=>{if(e.properties){let t=e.properties.enterAnimation;t&&t(e.domNode,e.properties)}},f=[],c=!1,u=e=>{(e.children||[]).forEach(u),e.properties&&e.properties.afterRemoved&&e.properties.afterRemoved.apply(e.properties.bind||e.properties,[e.domNode])},m=()=>{c=!1,f.forEach(u),f.length=0},h=e=>{f.push(e),c||(c=!0,"undefined"!=typeof window&&"requestIdleCallback"in window?window.requestIdleCallback(m,{timeout:16}):setTimeout(m,16))},v=e=>{let t=e.domNode;if(e.properties){let r=e.properties.exitAnimation;if(r){t.style.pointerEvents="none";let o=()=>{t.parentNode&&(t.parentNode.removeChild(t),h(e))};return void r(t,o,e.properties)}}t.parentNode&&(t.parentNode.removeChild(t),h(e))},y=(t,i,n)=>{if(!i)return;let l=n.eventHandlerInterceptor,p=Object.keys(i),d=p.length;for(let a=0;a<d;a++){let d=p[a],f=i[d];if("className"===d)throw new Error('Property "className" is not supported, use "class".');if("class"===d)k(t,f,!0);else if("classes"===d){let e=Object.keys(f),r=e.length;for(let o=0;o<r;o++){let r=e[o];f[r]&&t.classList.add(r)}}else if("styles"===d){let e=Object.keys(f),r=e.length;for(let o=0;o<r;o++){let r=e[o],i=f[r];i&&(s(i),n.styleApplyer(t,r,i))}}else if("key"!==d&&null!=f){let s=typeof f;"function"===s?(0===d.lastIndexOf("on",0)&&(l&&(f=l(d,f,t,i)),"oninput"===d&&function(){let e=f;f=function(t){e.apply(this,[t]),t.target["oninput-value"]=t.target.value}}()),t[d]=f):n.namespace===projection_r?"href"===d?t.setAttributeNS(o,d,f):t.setAttribute(d,f):"string"===s&&"value"!==d?"innerHTML"===d?t[d]=sanitizerUtils/* renderingSanitizer */.W5.sanitize(f):g(t)&&d in t?t[d]=f:t.setAttribute(d,f):t[d]=f}}};function g(e){if(!(e instanceof Element&&e.tagName.includes("-")))return!1;const t=window.customElements.get(e.tagName.toLowerCase());return!!t&&e instanceof t}let N,b=(e,t,r)=>{if(t)for(let o of t)x(o,e,void 0,r)},w=(e,t,r)=>{b(e,t.children,r),t.text&&(e.textContent=t.text),y(e,t.properties,r),t.properties&&t.properties.afterCreate&&t.properties.afterCreate.apply(t.properties.bind||t.properties,[e,r,t.vnodeSelector,t.properties,t.children])},x=(e,t,o,i)=>{let l,s=0,p=e.vnodeSelector,d=t.ownerDocument;if(""===p)l=e.domNode=d.createTextNode(e.text),void 0!==o?t.insertBefore(l,o):t.appendChild(l);else{for(let a=0;a<=p.length;++a){let f=p.charAt(a);if(a===p.length||"."===f||"#"===f){let f=p.charAt(s-1),c=p.slice(s,a);"."===f?l.classList.add(c):"#"===f?l.id=c:("svg"===c&&(i=projection_n(i,{namespace:projection_r})),void 0!==i.namespace?l=e.domNode=d.createElementNS(i.namespace,c):(l=e.domNode=e.domNode||d.createElement(c),"input"===c&&e.properties&&void 0!==e.properties.type&&l.setAttribute("type",e.properties.type)),void 0!==o?t.insertBefore(l,o):l.parentNode!==t&&t.appendChild(l)),s=a+1}}w(l,e,i)}},k=(e,t,r)=>{t&&t.split(" ").forEach((t=>{t&&e.classList.toggle(t,r)}))},A=(t,i,n,l)=>{if(!n)return;let p=!1,d=Object.keys(n),a=d.length;for(let f=0;f<a;f++){let a=d[f],c=n[a],u=i[a];if("class"===a)u!==c&&(k(t,u,!1),k(t,c,!0));else if("classes"===a){let e=t.classList,r=Object.keys(c),o=r.length;for(let t=0;t<o;t++){let o=r[t],i=!!c[o];i!==!!u[o]&&(p=!0,i?e.add(o):e.remove(o))}}else if("styles"===a){let e=Object.keys(c),r=e.length;for(let o=0;o<r;o++){let r=e[o],i=c[r];i!==u[r]&&(p=!0,i?(s(i),l.styleApplyer(t,r,i)):l.styleApplyer(t,r,""))}}else if(c||"string"!=typeof u||(c=""),"value"!==a||g(t)){if(c!==u){let i=typeof c;"function"===i&&l.eventHandlerInterceptor||(l.namespace===projection_r?"href"===a?t.setAttributeNS(o,a,c):t.setAttribute(a,c):"string"===i?"innerHTML"===a?t[a]=sanitizerUtils/* renderingSanitizer */.W5.sanitize(c):"role"===a&&""===c?t.removeAttribute(a):g(t)&&a in t?t[a]=c:t.setAttribute(a,c):t[a]!==c&&(t[a]=c),p=!0)}}else{let e=t[a];e!==c&&(t["oninput-value"]?e===t["oninput-value"]:c!==u)&&(t[a]=c,t["oninput-value"]=void 0),c!==u&&(p=!0)}}return p},S=(e,t,r,o,n)=>{if(r===o)return!1;o=o||i;let s,f=(r=r||i).length,c=o.length,u=0,m=0,h=!1;for(;m<c;){let i=u<f?r[u]:void 0,c=o[m];if(void 0!==i&&l(i,c))h=N(i,c,n)||h,u++;else{let i=p(r,c,u+1);if(i>=0){for(s=u;s<i;s++)v(r[s]),d(r,s,e,"removed");h=N(r[i],c,n)||h,u=i+1}else x(c,t,u<f?r[u].domNode:void 0,n),a(c),d(o,m,e,"added")}m++}if(f>u)for(s=u;s<f;s++)v(r[s]),d(r,s,e,"removed");return h};N=(e,t,o)=>{let i=e.domNode,l=!1;if(e===t)return!1;let s=!1;if(""===t.vnodeSelector){if(t.text!==e.text){let e=i.ownerDocument.createTextNode(t.text);return i.parentNode.replaceChild(e,i),t.domNode=e,l=!0,l}t.domNode=i}else 0===t.vnodeSelector.lastIndexOf("svg",0)&&(o=projection_n(o,{namespace:projection_r})),e.text!==t.text&&(s=!0,void 0===t.text?i.removeChild(i.firstChild):i.textContent=t.text),t.domNode=i,s=S(t,i,e.children,t.children,o)||s,s=A(i,e.properties,t.properties,o)||s,t.properties&&t.properties.afterUpdate&&t.properties.afterUpdate.apply(t.properties.bind||t.properties,[i,o,t.vnodeSelector,t.properties,t.children]);return s&&t.properties&&t.properties.updateAnimation&&t.properties.updateAnimation(i,t.properties,e.properties),l};let C=(e,t)=>({getLastRender:()=>e,update:r=>{if(e.vnodeSelector!==r.vnodeSelector)throw new Error("The selector for the root VNode may not be changed. (consider using dom.merge and add one extra level to the virtual DOM)");let o=e;e=r,N(o,r,t)},domNode:e.domNode});

;// ./node_modules/@arcgis/core/libs/maquette/dom.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const dom_p={namespace:void 0,performanceLogger:()=>{},eventHandlerInterceptor:void 0,styleApplyer:(e,r,o)=>{"-"===r.charAt(0)?e.style.setProperty(r,o):e.style[r]=o}};let dom_d=r=>projection_n(dom_p,r),dom_n={create:(e,t)=>(t=dom_d(t),x(e,document.createElement("div"),void 0,t),C(e,t)),append:(e,t,p)=>(p=dom_d(p),x(t,e,void 0,p),C(t,p)),insertBefore:(e,t,p)=>(p=dom_d(p),x(t,e.parentNode,e,p),C(t,p)),merge:(e,r,p)=>(p=dom_d(p),r.domNode=e,w(e,r,p),C(r,p)),replace:(e,t,p)=>(p=dom_d(p),x(t,e.parentNode,e,p),e.parentNode.removeChild(e),C(t,p))};

;// ./node_modules/@arcgis/core/libs/maquette/projector.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let projector_t,projector_n=(e,r)=>{let t=[];for(;e&&e!==r;)t.push(e),e=e.parentNode;return t};projector_t=Array.prototype.find?(e,r)=>e.find(r):(e,r)=>e.filter(r)[0];let projector_o=(e,r)=>{let n=e;return r.forEach((e=>{n=n&&n.children?projector_t(n.children,(r=>r.domNode===e)):void 0})),n},projector_d=(e,r,t)=>{let d=function(d){t("domEvent",d);let i=r(),p=projector_n(d.currentTarget,i.domNode);p.reverse();let l,a=projector_o(i.getLastRender(),p);return e.scheduleRender(),a&&(l=a.properties[`on${d.type}`].apply(a.properties.bind||this,arguments)),t("domEventProcessed",d),l};return(e,r,t,n)=>d},projector_i=t=>{let n,o,i=e(t),p=i.performanceLogger,l=!0,a=!1,s=[],c=[],u=(e,r,t)=>{let o,l=()=>o;i.eventHandlerInterceptor=projector_d(n,l,p),o=e(r,t(),i),s.push(o),c.push(t)},f=()=>{if(o=void 0,l){l=!1,p("renderStart",void 0);for(let e=0;e<s.length;e++){let r=c[e]();p("rendered",void 0),s[e].update(r),p("patched",void 0)}p("renderDone",void 0),l=!0}};return n={renderNow:f,scheduleRender:()=>{o||a||(o=requestAnimationFrame(f))},stop:()=>{o&&(cancelAnimationFrame(o),o=void 0),a=!0},resume:()=>{a=!1,l=!0,n.scheduleRender()},append:(e,t)=>{u(r.append,e,t)},insertBefore:(e,t)=>{u(r.insertBefore,e,t)},merge:(e,t)=>{u(r.merge,e,t)},replace:(e,t)=>{u(r.replace,e,t)},detach:e=>{for(let r=0;r<c.length;r++)if(c[r]===e)return c.splice(r,1),s.splice(r,1)[0];throw new Error("renderFunction was not found")}},n};

;// ./node_modules/@arcgis/core/libs/maquette-advanced-projector/advanced-projector-options.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const advanced_projector_options_e={handleInterceptedEvent:(e,p,t,n)=>(e.scheduleRender(),p.properties[`on${n.type}`].apply(p.properties.bind||t,[n]))};

;// ./node_modules/@arcgis/core/libs/maquette-advanced-projector/utils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const utils_e={namespace:void 0,performanceLogger:()=>{},eventHandlerInterceptor:void 0,styleApplyer:(e,r,t)=>{"-"===r.charAt(0)?e.style.setProperty(r,t):e.style[r]=t}},utils_r=r=>({...utils_e,...r});

;// ./node_modules/@arcgis/core/libs/maquette-advanced-projector/projector.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const maquette_advanced_projector_projector_o=(e,r)=>{const t=[];for(;e&&e!==r;)t.push(e),e=e.parentNode;return t},maquette_advanced_projector_projector_n=(e,r)=>e.find(r),maquette_advanced_projector_projector_d=(e,r,t=!1)=>{let o=e;return r.forEach(((e,d)=>{const s=o?.children?maquette_advanced_projector_projector_n(o.children,(r=>r.domNode===e)):void 0;t&&!s&&d!==r.length-1||(o=s)})),o},projector_s=n=>{let s;const c={...advanced_projector_options_e,...n},i=utils_r(c),a=i.performanceLogger;let m,p=!0,l=!1;const f=[],u=[],h=(e,r,t)=>{let n;i.eventHandlerInterceptor=(e,r,t,i)=>function(e){let r;a("domEvent",e);const t=maquette_advanced_projector_projector_o(e.currentTarget,n.domNode),i=t.some((e=>customElements.get(e?.tagName?.toLowerCase())));if(e.eventPhase===Event.CAPTURING_PHASE||!i)t.reverse(),r=maquette_advanced_projector_projector_d(n.getLastRender(),t);else{const t=e.composedPath(),o=t.slice(t.indexOf(e.currentTarget),t.indexOf(n.domNode)).reverse();r=maquette_advanced_projector_projector_d(n.getLastRender(),o,!0)}let m;return r&&(m=c.handleInterceptedEvent(s,r,this,e)),a("domEventProcessed",e),m},c.postProcessProjectionOptions?.(i);const m=t();n=e(r,m,i),i.eventHandlerInterceptor=void 0,f.push(n),u.push(t),c.afterFirstVNodeRendered&&c.afterFirstVNodeRendered(n,m)};let v=()=>{if(m=void 0,p){p=!1,a("renderStart",void 0);for(let r=0;r<f.length;r++){const t=u[r]();a("rendered",void 0);try{f[r].update(t)}catch(e){console.error(e)}a("patched",void 0)}a("renderDone",void 0),p=!0}};return c.modifyDoRenderImplementation&&(v=c.modifyDoRenderImplementation(v,f,u)),s={renderNow:v,scheduleRender:()=>{m||l||(m=requestAnimationFrame(v))},stop:()=>{m&&(cancelAnimationFrame(m),m=void 0),l=!0},resume:()=>{l=!1,p=!0,s.scheduleRender()},append:(r,t)=>{h(dom_n.append,r,t)},insertBefore:(r,t)=>{h(dom_n.insertBefore,r,t)},merge:(r,t)=>{h(dom_n.merge,r,t)},replace:(r,t)=>{h(dom_n.replace,r,t)},detach:e=>{for(let r=0;r<u.length;r++)if(u[r]===e)return u.splice(r,1),f.splice(r,1)[0];throw new Error("renderFunction was not found")}},s};

// EXTERNAL MODULE: ./node_modules/@esri/calcite-components/dist/chunks/runtime.js
var runtime = __webpack_require__(34088);
;// ./node_modules/@esri/calcite-components/dist/index.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */


let assetPathChanged = false;
const setAssetPath = (path) => {
  assetPathChanged = true;
  (0,runtime.s)(path);
};


// EXTERNAL MODULE: ./node_modules/@arcgis/core/assets.js
var assets = __webpack_require__(44764);
;// ./node_modules/@arcgis/core/widgets/support/componentsUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let componentsUtils_n;function componentsUtils_r(){assetPathChanged||setAssetPath((0,urlUtils/* makeAbsolute */.s2)((0,assets/* getAssetUrl */.s)(componentsUtils_n)))}function componentsUtils_c(t){const o=[];for(const s of Object.keys(t))customElements.get(`calcite-${s}`)||o.push(t[s]?.());return o.length>0?Promise.all(o):null}componentsUtils_n="components/assets";

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/handleUtils.js
var handleUtils = __webpack_require__(70214);
;// ./node_modules/@arcgis/core/widgets/support/symbols.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const symbols_t=Symbol("widget"),symbols_e=Symbol("widget-test-data");

;// ./node_modules/@arcgis/core/widgets/support/jsxWidgetSupport.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const jsxWidgetSupport_o=[],jsxWidgetSupport_n={},jsxWidgetSupport_i=new WeakMap;function jsxWidgetSupport_d(e,t){let r=t.children;if(r?.length)for(let o=0;o<r.length;++o)r[o]=jsxWidgetSupport_d(e,r[o]);else r=jsxWidgetSupport_o;const i=t.vnodeSelector;if(jsxWidgetSupport_f(i)){const o=t.properties||jsxWidgetSupport_n,d=o.key||i,f={key:d,afterCreate:jsxWidgetSupport_c,afterUpdate:jsxWidgetSupport_s,afterRemoved:jsxWidgetSupport_a,parentWidget:e,widgetConstructor:i,widgetProperties:{...o,key:d,children:r}};return{vnodeSelector:i.vnodeSelector,properties:f,children:void 0,text:void 0,domNode:null}}return t}function jsxWidgetSupport_c(t,o,n,{parentWidget:d,widgetConstructor:c,widgetProperties:s}){const f=new c(s);f.container=t,jsxWidgetSupport_i.set(t,f),f.afterCreate?.(f,t),d.addHandles((0,handleUtils/* makeHandle */.hA)((()=>jsxWidgetSupport_a(t)))),queueMicrotask((()=>{f[symbols_e].projector.renderNow()}))}function jsxWidgetSupport_s(e,t,r,{widgetProperties:o}){const n=jsxWidgetSupport_i.get(e);n&&(n.set(o),n.afterUpdate?.(n,e))}function jsxWidgetSupport_a(e){const t=jsxWidgetSupport_i.get(e);t&&(t.afterRemoved?.(t,e),t.destroy(),jsxWidgetSupport_i.delete(e))}function jsxWidgetSupport_f(e){return"function"==typeof e&&e[symbols_t]}

;// ./node_modules/@arcgis/core/widgets/support/tests.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const tests_t=new Set;function tests_n(e){tests_t.add(e),e.finally((()=>tests_t.delete(e)))}function tests_r(){return tests_t.size>0}const tests_i=new Map;function tests_o(t){return (0,handleUtils/* makeHandle */.hA)()}function tests_s(){const e=Array.from(tests_i.values())[0],t=tests_i.size;if(tests_i.clear(),0!==t)throw new Error(`Still ${t} alive widget instances.${e?` For example:\n${e}`:" Set enableLiveTracing in esri/widgets/support/tests.ts to include a stack trace."}`)}

;// ./node_modules/@arcgis/core/widgets/support/vnodeCache.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const vnodeCache_n=new Map;function vnodeCache_t(){vnodeCache_n.clear()}function vnodeCache_e(t){return vnodeCache_n.get(t)}function vnodeCache_c(t,e){vnodeCache_n.set(t,e)}function vnodeCache_o(t){vnodeCache_n.delete(t)}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/ArrayPool.js
var ArrayPool = __webpack_require__(50398);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/scheduling.js
var scheduling = __webpack_require__(9987);
;// ./node_modules/@arcgis/core/widgets/support/widgetUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var widgetUtils_a,widgetUtils_u,widgetUtils_f=function(e){if("WebkitTransition"in e.style)widgetUtils_a="webkitTransitionEnd",widgetUtils_u="webkitAnimationEnd";else{if(!("transition"in e.style))throw new Error("Your browser is not supported!");widgetUtils_a="transitionend",widgetUtils_u="animationend"}},widgetUtils_d=function(e){widgetUtils_a||widgetUtils_f(e)},widgetUtils_l=function(e,t){return void 0===t&&(t=e+"-active"),function(n){widgetUtils_d(n);var o=!1,r=function(i){o||(o=!0,n.removeEventListener(widgetUtils_a,r),n.removeEventListener(widgetUtils_u,r),n.classList.remove(e),n.classList.remove(t))};n.classList.add(e),n.addEventListener(widgetUtils_a,r),n.addEventListener(widgetUtils_u,r),requestAnimationFrame((function(){n.classList.add(t)}))}},widgetUtils_m=function(e,t){return void 0===t&&(t=e+"-active"),function(n,o){widgetUtils_d(n);var r=!1,i=function(e){r||(r=!0,n.removeEventListener(widgetUtils_a,i),n.removeEventListener(widgetUtils_u,i),o())};n.classList.add(e),n.addEventListener(widgetUtils_a,i),n.addEventListener(widgetUtils_u,i),requestAnimationFrame((function(){n.classList.add(t)}))}};function widgetUtils_v(...t){const n=ArrayPool/* default */.A.acquire();for(let e=0;e<t.length;e++){const o=t[e],r=typeof o;if("string"===r)n.push(o);else if(Array.isArray(o))n.push.apply(n,o);else if("object"===r)for(const e in o)o[e]&&n.push(e)}const o=n.join(" ");return ArrayPool/* default */.A.release(n),o}const widgetUtils_p=(()=>{const e=new Map,o=new ResizeObserver((t=>{vnodeCache_t();for(const n of t)e.get(n.target)?.(n)})),s=(t,r,i)=>(e.set(t,r),o.observe(t,i),(0,handleUtils/* makeHandle */.hA)((()=>{o.unobserve(t),e.delete(t)})));return(e,o,c)=>{let a=null;return (0,handleUtils/* handlesGroup */.vE)([(0,reactiveUtils/* watch */.wB)((()=>"function"==typeof e?e():e),(e=>{a?.remove(),e&&(a=s(e,o,c))}),reactiveUtils/* syncAndInitial */.pc),(0,handleUtils/* makeHandle */.hA)((()=>a?.remove()))])}})();function L(e){const t=e?.closest("[dir]");return null!==t&&t instanceof HTMLElement&&"rtl"===t.dir||"rtl"===document.dir}function E(e,t){return("enter"===e?widgetUtils_l:widgetUtils_m)(t)}function widgetUtils_h(e){const t="data-node-ref";this[e.getAttribute(t)]=null}function widgetUtils_y(e){const t="data-node-ref";this[e.getAttribute(t)]=e}function widgetUtils_b(e){return"Enter"===e||" "===e}async function j(e,t){await (0,scheduling/* waitAnimationFrame */.$m)((0,promiseUtils/* signalFromSignalOrOptions */.Mq)(t));const n="function"==typeof e?e():e;n&&("setFocus"in n&&"function"==typeof n.setFocus?await n.setFocus():n instanceof HTMLElement&&n.focus())}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/intl/messages.js
var messages = __webpack_require__(10709);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/intl/locale.js
var locale = __webpack_require__(4631);
;// ./node_modules/@arcgis/core/widgets/Widget.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var $;let U=0;function z(e,t){const r=Object.prototype.hasOwnProperty;for(const s in t)r.call(t,s)&&r.call(e,s)&&(null!=e[s]&&null!=t[s]&&"object"==typeof e[s]&&"object"==typeof t[s]?z(e[s],t[s]):e[s]=t[s]);return e}const Widget_x=projector_s({postProcessProjectionOptions(e){const t=e.eventHandlerInterceptor,r=/capture$/i;e.eventHandlerInterceptor=(e,s,o,i)=>{const n=t?.(e,s,o,i),a=r.test(e);if(!((e=e.replace(r,"")).toLowerCase()in o)||a){const t=e[2].toLowerCase()+e.slice(3),r=e=>n?.call(o,e);o.addEventListener(t,r,a);const s=()=>o.removeEventListener(t,r,a),l=i.afterRemoved;i.afterRemoved=e=>{l?.(e),s()}}return n}},handleInterceptedEvent(e,t,r,s){const{eventPhase:o,type:i}=s,n=o===Event.CAPTURING_PHASE;let a=`on${i}${n?"capture":""}`;const l=t.properties;(l&&a in l||(a=`on${i[0].toUpperCase()}${i.slice(1)}${n?"Capture":""}`,l&&a in l))&&(vnodeCache_t(),e.scheduleRender(),l[a].call(l.bind||r,s))}});let Widget_A=!1,M=class extends(core_Promise/* default */.A.EsriPromiseMixin(Evented/* default */.A.EventedAccessor)){static{this[$]=!0}constructor(e,t){super(e,t),this._attached=!1,this._projector=Widget_x,this._readyForTrueRender=!1,this.key=this,this.autoRenderingEnabled=!0,this._loadLocale=(0,promiseUtils/* debounce */.sg)((async()=>{if(this._messageBundleProps?.length){const e=await Promise.allSettled(this._messageBundleProps.map((async({bundlePath:e,propertyName:t})=>{if(this.destroyed)return;let r=await (0,messages/* fetchMessageBundle */.ud)(e);this.uiStrings&&Object.keys(this.uiStrings)&&(r=z((0,lang/* clone */.o8)(r),this.uiStrings)),this[t]=r})));if(this.destroyed)return;for(const t of e)"rejected"===t.status&&Logger/* default */.A.getLogger(this).error("widget-intl:locale-error",this.declaredClass,t.reason)}await this.loadLocale()})),this.addHandles(tests_o()),componentsUtils_r();const r="esri-widget-uid-"+(0,uuid/* generateUUID */.lk)(),s=this.render.bind(this);this._trackingTarget=new SimpleTrackingTarget/* SimpleTrackingTarget */.r((()=>{this.autoRenderingEnabled&&this.scheduleRender()}));const o=()=>({vnodeSelector:"div",properties:{key:`${r}-hidden`,class:"",styles:{display:"none"}},domNode:null,children:void 0,text:void 0}),a=()=>{if(!this._readyForTrueRender||this.destroyed)return null;const e=s()??o(),t=e.properties??={};if(t.key??=r,jsxWidgetSupport_f(e.vnodeSelector)){if(!this.visible)return o()}else this.visible?t.styles||(t.styles={}):(t.class="",t.styles={display:"none"}),t.styles.display??="";let i=0;return e.children?.forEach((e=>{jsxWidgetSupport_f(e.vnodeSelector)||(e.properties??={},e.properties.key??=`${this.id}--${i++}`)})),jsxWidgetSupport_d(this,e)};this.render=()=>{if(Widget_A)return a();let e=vnodeCache_e(this)??null;if(e)return e;this._trackingTarget.clear(),Widget_A=!0;try{e=(0,tracking/* runTracked */.a)(this._trackingTarget,a)}catch(t){throw Logger/* default */.A.getLogger(this).error(t),t}finally{Widget_A=!1}return e&&vnodeCache_c(this,e),e};const l=this.beforeFirstRender();l?this._resourcesFetch=l.then((()=>{this._readyForTrueRender=!0,this._postInitialize()})):(this._resourcesFetch=Promise.resolve().then((()=>{this._postInitialize()})),this._readyForTrueRender=!0),this.addResolvingPromise(this._resourcesFetch),tests_n(this._resourcesFetch)}normalizeCtorArgs(e,t){const r={...e};return t&&(r.container=t),r}postInitialize(){}beforeFirstRender(){const e=this.loadDependencies();return this._messageBundleProps?.length||e?Promise.all([e,this._loadLocale()]).then((()=>{})).catch(promiseUtils/* throwIfNotAbortError */.jH):null}loadDependencies(){return null}loadLocale(){return null}destroy(){this.destroyed||((0,maybe/* destroyMaybe */.pR)(this._trackingTarget),(0,maybe/* destroyMaybe */.pR)(this.viewModel),this._detach(this.container),this._set("container",null),this._emitter.clear(),this.render=()=>null,this._projector=null,vnodeCache_o(this))}set container(e){this._get("container")||this._set("container",e)}castContainer(e){return n(e)}get domNode(){return this.container}set domNode(e){this.container=e}get icon(){return null}set icon(e){this._overrideIfSome("icon",e)}get id(){return this._get("id")||this.container?.id||Date.now().toString(16)+"-widget-"+U++}set id(e){e&&this._set("id",e)}get label(){return this.declaredClass.split(".").pop()}set label(e){this._overrideIfSome("label",e)}get renderable(){return this._resourcesFetch}get visible(){return this._get("visible")}set visible(e){this._set("visible",e)}get[($=symbols_t,symbols_e)](){return{projector:this._projector}}static{this.vnodeSelector="div"}render(){throw new Error("not implemented")}scheduleRender(){this.destroyed||(vnodeCache_o(this),this._projector.scheduleRender())}classes(...e){return widgetUtils_v.apply(this,e)}renderNow(){vnodeCache_o(this),this._projector.renderNow()}_postInitialize(){if(this.destroyed)return;this.scheduleRender(),this._delegatedEventNames?.length&&this.addHandles((0,reactiveUtils/* watch */.wB)((()=>this.viewModel),((e,t)=>{t&&this.removeHandles("delegated-events"),e&&(0,events/* isEventedOrEventTarget */.wb)(e)&&this.addHandles(this._delegatedEventNames.map((t=>(0,events.on)(e,t,(e=>{this.emit(t,e)})))),"delegated-events")}),reactiveUtils/* syncAndInitial */.pc)),this.postInitialize();const e=async()=>{await this._loadLocale().catch(promiseUtils/* throwIfNotAbortError */.jH),this.scheduleRender()};this.addHandles([(0,locale/* onLocaleChange */.oQ)(e),(0,reactiveUtils/* watch */.wB)((()=>this.uiStrings),e)]),this.addHandles((0,reactiveUtils/* when */.z7)((()=>this.container),(e=>{this.destroyed||this._attach(e)}),{initial:!0,once:!0}))}_attach(e){e&&(this._projector.merge(e,this.render),this._attached=!0)}_detach(e){this._attached&&(this._projector.detach(this.render),this._attached=!1),e?.parentNode?.removeChild(e)}};(0,tslib_es6._)([(0,property/* property */.MZ)()],M.prototype,"_readyForTrueRender",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({value:null})],M.prototype,"container",null),(0,tslib_es6._)([(0,cast/* cast */.w)("container")],M.prototype,"castContainer",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],M.prototype,"icon",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],M.prototype,"id",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],M.prototype,"label",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],M.prototype,"renderable",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],M.prototype,"uiStrings",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],M.prototype,"viewModel",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({value:!0})],M.prototype,"visible",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],M.prototype,"key",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],M.prototype,"children",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],M.prototype,"afterCreate",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],M.prototype,"afterUpdate",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],M.prototype,"afterRemoved",void 0),M=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.widgets.Widget")],M);const O=M;

;// ./node_modules/@arcgis/core/widgets/support/decorators/messageBundle.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function messageBundle_e(e){return(s,r)=>{s.hasOwnProperty("_messageBundleProps")||(s._messageBundleProps=s._messageBundleProps?s._messageBundleProps.slice():[]);s._messageBundleProps.push({bundlePath:e,propertyName:r})}}

;// ./node_modules/@arcgis/core/widgets/support/jsxFactory.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var jsxFactory_e=function(r){return{vnodeSelector:"",properties:void 0,children:void 0,text:r.toString(),domNode:null}},jsxFactory_o=function(r,t){for(var n=0,i=r.length;n<i;n++){var d=r[n];Array.isArray(d)?jsxFactory_o(d,t):null!=d&&!1!==d&&(d.hasOwnProperty("vnodeSelector")||(d=jsxFactory_e(d)),t.push(d))}},jsxFactory_t=function(r,e){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];if(1===t.length&&"string"==typeof t[0])return{vnodeSelector:r,properties:e||void 0,children:void 0,text:t[0],domNode:null};var i=[];return jsxFactory_o(t,i),{vnodeSelector:r,properties:e||void 0,children:i,text:void 0,domNode:null}};function jsxFactory_n(e,o,...n){return"function"!=typeof e||jsxWidgetSupport_f(e)?jsxFactory_t(e,o??null,...n):e(o,...n)}function jsxFactory_i(...r){return r}

;// ./node_modules/@arcgis/core/support/modeUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const modeUtils_t="calcite-mode-",modeUtils_e="dark",modeUtils_c="light",modeUtils_r=/\W/g,modeUtils_n="--esri-calcite-mode-name";function modeUtils_o(){return getComputedStyle(document.body).getPropertyValue(modeUtils_n).replaceAll(modeUtils_r,"").toLowerCase()}function modeUtils_s(){return modeUtils_o()===modeUtils_e}function modeUtils_a(){const r=modeUtils_o();switch(r){case modeUtils_e:case modeUtils_c:return`${modeUtils_t}${r}`;default:return null}}function modeUtils_i(t){const e=modeUtils_a();e&&(modeUtils_l(t),t.classList.add(e))}function modeUtils_l(e){Array.from(e.classList).forEach((c=>{c.startsWith(modeUtils_t)&&e.classList.remove(c)}))}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/intl/substitute.js
var substitute = __webpack_require__(13033);
;// ./node_modules/@arcgis/core/identity/IdentityModal.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const IdentityModal_p="esri-identity-modal",IdentityModal_d={base:IdentityModal_p,info:`${IdentityModal_p}__info`,notice:`${IdentityModal_p}__notice`},IdentityModal_u="ArcGIS Online";let IdentityModal_m=class extends O{constructor(t,e){super(t,e),this.container=document.createElement("div"),this.error=null,this.oAuthPrompt=!1,this.open=!1,this.signingIn=!1,this.server=null,this.resource=null,this._usernameInputNode=null,this._passwordInputNode=null,document.body.appendChild(this.container)}loadDependencies(){return componentsUtils_c({button:()=>__webpack_require__.e(/* import() */ 19951).then(__webpack_require__.bind(__webpack_require__, 19951)),dialog:()=>__webpack_require__.e(/* import() */ 63273).then(__webpack_require__.bind(__webpack_require__, 63273)),input:()=>__webpack_require__.e(/* import() */ 55282).then(__webpack_require__.bind(__webpack_require__, 55282)),label:()=>__webpack_require__.e(/* import() */ 88923).then(__webpack_require__.bind(__webpack_require__, 88923)),notice:()=>__webpack_require__.e(/* import() */ 19964).then(__webpack_require__.bind(__webpack_require__, 19964))})}get title(){return this.commonMessages?.auth.signIn}render(){const{open:t,title:e,messages:o,signingIn:s,oAuthPrompt:i,server:n,resource:r,error:p}=this,{info:m,oAuthInfo:h,lblItem:g,invalidUser:b,noAuthService:f,lblUser:v,lblPwd:_,lblCancel:y,lblSigning:I,lblOk:w}=o;return jsxFactory_n("div",{class:this.classes(IdentityModal_d.base,modeUtils_a())},jsxFactory_n("form",{bind:this,onsubmit:this._submit},jsxFactory_n("calcite-dialog",{bind:this,heading:e,modal:!0,open:t,outsideCloseDisabled:!0,scale:"s",widthScale:"s",onCalciteDialogClose:this._cancel,onCalciteDialogOpen:this._focusUsernameInput},jsxFactory_n("div",{class:IdentityModal_d.info},(0,substitute/* substitute */.V)(i?h:m,{server:n&&/\.arcgis\.com/i.test(n)?IdentityModal_u:n,resource:`(${r||g})`})),p?jsxFactory_n("calcite-notice",{class:IdentityModal_d.notice,icon:"exclamation-mark-triangle",kind:"danger",open:!0},jsxFactory_n("div",{slot:"message"},p.details?.httpStatus?b:f)):null,i?null:[jsxFactory_n("calcite-label",null,v,jsxFactory_n("calcite-input",{afterCreate:t=>this._usernameInputNode=t,autocomplete:"off",bind:this,name:"username",required:!0,spellcheck:!1,type:"text",value:""})),jsxFactory_n("calcite-label",null,_,jsxFactory_n("calcite-input",{afterCreate:t=>this._passwordInputNode=t,bind:this,name:"password",required:!0,type:"password",value:""}))],jsxFactory_n("calcite-button",{appearance:"outline",bind:this,onclick:this._cancel,slot:"footer-end",type:"button"},y),jsxFactory_n("calcite-button",{loading:!!s,slot:"footer-end",type:"submit"},s?I:w))))}_focusUsernameInput(){return j((()=>this._usernameInputNode))}_cancel(){this._set("signingIn",!1),this.open=!1,this._usernameInputNode&&(this._usernameInputNode.value=""),this._passwordInputNode&&(this._passwordInputNode.value=""),this.emit("cancel")}_submit(t){t.preventDefault(),this._set("signingIn",!0);const e=this.oAuthPrompt?{}:{username:this._usernameInputNode?.value,password:this._passwordInputNode?.value};this.emit("submit",e)}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],IdentityModal_m.prototype,"container",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(),messageBundle_e("esri/t9n/common")],IdentityModal_m.prototype,"commonMessages",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],IdentityModal_m.prototype,"error",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(),messageBundle_e("esri/identity/t9n/identity")],IdentityModal_m.prototype,"messages",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],IdentityModal_m.prototype,"oAuthPrompt",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],IdentityModal_m.prototype,"open",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],IdentityModal_m.prototype,"signingIn",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],IdentityModal_m.prototype,"server",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],IdentityModal_m.prototype,"title",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],IdentityModal_m.prototype,"resource",void 0),IdentityModal_m=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.identity.IdentityModal")],IdentityModal_m);const IdentityModal_h=IdentityModal_m;

;// ./node_modules/@arcgis/core/identity/OAuthCredential.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const OAuthCredential_t="esriJSAPIOAuth";class OAuthCredential_e{constructor(t,e){this.oAuthInfo=null,this.storage=null,this.appId=null,this.codeVerifier=null,this.expires=null,this.refreshToken=null,this.ssl=null,this.stateUID=null,this.token=null,this.userId=null,this.oAuthInfo=t,this.storage=e,this._init()}isValid(){let t=!1;if(this.oAuthInfo&&this.userId&&(this.refreshToken||this.token))if(null==this.expires&&this.refreshToken)t=!0;else if(this.expires){const e=Date.now();if(this.expires>e){(this.expires-e)/1e3>60*this.oAuthInfo.minTimeUntilExpiration&&(t=!0)}}return t}save(){if(!this.storage)return!1;const e=this._load(),s=this.oAuthInfo;if(s?.authNamespace&&s.portalUrl){let r=e[s.authNamespace];r||(r=e[s.authNamespace]={}),this.appId||(this.appId=s.appId),r[s.portalUrl]={appId:this.appId,codeVerifier:this.codeVerifier,expires:this.expires,refreshToken:this.refreshToken,ssl:this.ssl,stateUID:this.stateUID,token:this.token,userId:this.userId};try{this.storage.setItem(OAuthCredential_t,JSON.stringify(e))}catch(i){return console.warn(i),!1}return!0}return!1}destroy(){const e=this._load(),s=this.oAuthInfo;if(s?.appId&&s?.portalUrl&&(null==this.expires||this.expires>Date.now())&&(this.refreshToken||this.token)){const t=s.portalUrl.replace(/^http:/i,"https:")+"/sharing/rest/oauth2/revokeToken",e=new FormData;if(e.append("f","json"),e.append("auth_token",this.refreshToken||this.token),e.append("client_id",s.appId),e.append("token_type_hint",this.refreshToken?"refresh_token":"access_token"),"function"==typeof navigator.sendBeacon)navigator.sendBeacon(t,e);else{const s=new XMLHttpRequest;s.open("POST",t),s.send(e)}}if(s?.authNamespace&&s.portalUrl&&this.storage){const r=e[s.authNamespace];if(r){delete r[s.portalUrl];try{this.storage.setItem(OAuthCredential_t,JSON.stringify(e))}catch(i){console.log(i)}}}s&&(s._oAuthCred=null,this.oAuthInfo=null)}_init(){const t=this._load(),e=this.oAuthInfo;if(e?.authNamespace&&e.portalUrl){let s=t[e.authNamespace];s&&(s=s[e.portalUrl],s&&(this.appId=s.appId,this.codeVerifier=s.codeVerifier,this.expires=s.expires,this.refreshToken=s.refreshToken,this.ssl=s.ssl,this.stateUID=s.stateUID,this.token=s.token,this.userId=s.userId))}}_load(){let e={};if(this.storage){const i=this.storage.getItem(OAuthCredential_t);if(i)try{e=JSON.parse(i)}catch(s){console.warn(s)}}return e}}OAuthCredential_e.prototype.declaredClass="esri.identity.OAuthCredential";

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(22395);
;// ./node_modules/@arcgis/core/identity/OAuthInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var OAuthInfo_p;let OAuthInfo_s=class extends JSONSupport/* default */.A{static{OAuthInfo_p=this}constructor(o){super(o),this._oAuthCred=null,this.appId=null,this.authNamespace="/",this.expiration=20160,this.flowType="auto",this.forceLogin=!1,this.forceUserId=!1,this.locale=null,this.minTimeUntilExpiration=30,this.popup=!1,this.popupCallbackUrl="oauth-callback.html",this.popupWindowFeatures="height=490,width=800,resizable,scrollbars,status",this.portalUrl="https://www.arcgis.com",this.preserveUrlHash=!1,this.userId=null}clone(){return OAuthInfo_p.fromJSON(this.toJSON())}};(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],OAuthInfo_s.prototype,"appId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],OAuthInfo_s.prototype,"authNamespace",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],OAuthInfo_s.prototype,"expiration",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],OAuthInfo_s.prototype,"flowType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],OAuthInfo_s.prototype,"forceLogin",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],OAuthInfo_s.prototype,"forceUserId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],OAuthInfo_s.prototype,"locale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],OAuthInfo_s.prototype,"minTimeUntilExpiration",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],OAuthInfo_s.prototype,"popup",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],OAuthInfo_s.prototype,"popupCallbackUrl",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],OAuthInfo_s.prototype,"popupWindowFeatures",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],OAuthInfo_s.prototype,"portalUrl",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],OAuthInfo_s.prototype,"preserveUrlHash",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],OAuthInfo_s.prototype,"userId",void 0),OAuthInfo_s=OAuthInfo_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.identity.OAuthInfo")],OAuthInfo_s);const OAuthInfo_i=OAuthInfo_s;

;// ./node_modules/@arcgis/core/identity/ServerInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let ServerInfo_i=class extends JSONSupport/* default */.A{constructor(o){super(o),this.adminTokenServiceUrl=null,this.currentVersion=null,this.hasPortal=null,this.hasServer=null,this.owningSystemUrl=null,this.owningTenant=null,this.server=null,this.shortLivedTokenValidity=null,this.tokenServiceUrl=null,this.webTierAuth=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],ServerInfo_i.prototype,"adminTokenServiceUrl",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],ServerInfo_i.prototype,"currentVersion",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],ServerInfo_i.prototype,"hasPortal",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],ServerInfo_i.prototype,"hasServer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],ServerInfo_i.prototype,"owningSystemUrl",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],ServerInfo_i.prototype,"owningTenant",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],ServerInfo_i.prototype,"server",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],ServerInfo_i.prototype,"shortLivedTokenValidity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],ServerInfo_i.prototype,"tokenServiceUrl",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],ServerInfo_i.prototype,"webTierAuth",void 0),ServerInfo_i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.identity.ServerInfo")],ServerInfo_i);const ServerInfo_s=ServerInfo_i;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/portal/support/urlUtils.js
var support_urlUtils = __webpack_require__(9856);
;// ./node_modules/@arcgis/core/identity/IdentityManagerBase.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const R={},IdentityManagerBase_C=e=>{const t=new urlUtils/* Url */.s0(e.owningSystemUrl).host,r=new urlUtils/* Url */.s0(e.server).host,s=/.+\.arcgis\.com$/i;return s.test(t)&&s.test(r)},D=(e,t)=>!!(IdentityManagerBase_C(e)&&t&&t.some((t=>t.test(e.server))));let IdentityManagerBase_b=null,q=null;try{IdentityManagerBase_b=window.localStorage,q=window.sessionStorage}catch{}class IdentityManagerBase_j extends Evented/* default */.A{constructor(){super(),this._portalConfig=globalThis.esriGeowConfig,this.serverInfos=[],this.oAuthInfos=[],this.credentials=[],this._soReqs=[],this._xoReqs=[],this._portals=[],this._defaultOAuthInfo=null,this._defaultTokenValidity=60,this.dialog=null,this.tokenValidity=null,this.normalizeWebTierAuth=!1,this._appOrigin="null"!==window.origin?window.origin:window.location.origin,this._appUrlObj=(0,urlUtils/* urlToObject */.An)(window.location.href),this._busy=null,this._rejectOnPersistedPageShow=!1,this._oAuthLocationParams=null,this._gwTokenUrl="/sharing/rest/generateToken",this._agsRest="/rest/services",this._agsPortal=/\/sharing(\/|$)/i,this._agsAdmin=/(https?:\/\/[^/]+\/[^/]+)\/admin\/?(\/.*)?$/i,this._adminSvcs=/\/rest\/admin\/services(\/|$)/i,this._gwDomains=[{regex:/^https?:\/\/www\.arcgis\.com/i,customBaseUrl:"maps.arcgis.com",tokenServiceUrl:"https://www.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:dev|[a-z\d-]+\.mapsdev)\.arcgis\.com/i,customBaseUrl:"mapsdev.arcgis.com",tokenServiceUrl:"https://dev.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:devext|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,customBaseUrl:"mapsdevext.arcgis.com",tokenServiceUrl:"https://devext.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:qaext|[a-z\d-]+\.mapsqa)\.arcgis\.com/i,customBaseUrl:"mapsqa.arcgis.com",tokenServiceUrl:"https://qaext.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/[a-z\d-]+\.maps\.arcgis\.com/i,customBaseUrl:"maps.arcgis.com",tokenServiceUrl:"https://www.arcgis.com/sharing/rest/generateToken"}],this._legacyFed=[],this._regexSDirUrl=/http.+\/rest\/services\/?/gi,this._regexServerType=/(\/(FeatureServer|GPServer|GeoDataServer|GeocodeServer|GeoenrichmentServer|GeometryServer|GlobeServer|ImageServer|KnowledgeGraphServer|MapServer|MissionServer|MobileServer|NAServer|NetworkDiagramServer|OGCFeatureServer|ParcelFabricServer|RelationalCatalogServer|SceneServer|StreamServer|UtilityNetworkServer|ValidationServer|VectorTileServer|VersionManagementServer|VideoServer)).*/gi,this._gwUser=/http.+\/users\/([^/]+).*/i,this._gwItem=/http.+\/items\/([^/]+).*/i,this._gwGroup=/http.+\/groups\/([^/]+).*/i,this._rePortalTokenSvc=/\/sharing(\/rest)?\/generatetoken/i,this._createDefaultOAuthInfo=!0,this._hasTestedIfAppIsOnPortal=!1,this._getPlatformSelfError=null,this._getOAuthLocationParams(),window.addEventListener("pageshow",(e=>{this._pageShowHandler(e)}))}registerServers(e){const t=this.serverInfos;t?(e=e.filter((e=>!this.findServerInfo(e.server))),this.serverInfos=t.concat(e)):this.serverInfos=e,e.forEach((e=>{e.owningSystemUrl&&this._portals.push(e.owningSystemUrl),e.hasPortal&&this._portals.push(e.server)}))}registerOAuthInfos(e){const t=this.oAuthInfos;if(t){for(const r of e){const e=this.findOAuthInfo(r.portalUrl);e&&t.splice(t.indexOf(e),1)}this.oAuthInfos=t.concat(e)}else this.oAuthInfos=e}registerToken(e){e={...e};const t=this._sanitizeUrl(e.server),r=this._isServerRsrc(t);let s,i=this.findServerInfo(t),o=!0;i||(i=new ServerInfo_s,i.server=this._getServerInstanceRoot(t),r?i.hasServer=!0:(i.tokenServiceUrl=this._getTokenSvcUrl(t),i.hasPortal=!0),this.registerServers([i])),s=this._findCredential(t),s?(delete e.server,Object.assign(s,e),o=!1):(s=new IdentityManagerBase_E({userId:e.userId,server:i.server??void 0,token:e.token,expires:e.expires,ssl:e.ssl,scope:r?"server":"portal"}),s.resources=[t],this.credentials.push(s)),s.emitTokenChange(!1),o||s.refreshServerTokens()}toJSON(){return (0,lang/* fixJson */.oy)({serverInfos:this.serverInfos.map((e=>e.toJSON())),oAuthInfos:this.oAuthInfos.map((e=>e.toJSON())),credentials:this.credentials.map((e=>e.toJSON()))})}initialize(e){if(!e)return;"string"==typeof e&&(e=JSON.parse(e));const t=e.serverInfos,r=e.oAuthInfos,s=e.credentials;if(t){const e=[];t.forEach((t=>{t.server&&t.tokenServiceUrl&&e.push(t.declaredClass?t:new ServerInfo_s(t))})),e.length&&this.registerServers(e)}if(r){const e=[];r.forEach((t=>{t.appId&&e.push(t.declaredClass?t:new OAuthInfo_i(t))})),e.length&&this.registerOAuthInfos(e)}s&&s.forEach((e=>{e.server&&e.token&&e.expires&&e.expires>Date.now()&&((e=e.declaredClass?e:new IdentityManagerBase_E(e)).emitTokenChange(),this.credentials.push(e))}))}findServerInfo(e){let t;e=this._sanitizeUrl(e);for(const r of this.serverInfos)if(this._hasSameServerInstance(r.server,e)){t=r;break}return t}findOAuthInfo(e){let t;e=this._sanitizeUrl(e);for(const r of this.oAuthInfos)if(this._hasSameServerInstance(r.portalUrl,e)){t=r;break}return t}findCredential(e,t){if(!e)return;let r;e=this._sanitizeUrl(e);const s=this._isServerRsrc(e)?"server":"portal";if(t){for(const i of this.credentials)if(this._hasSameServerInstance(i.server,e)&&t===i.userId&&i.scope===s){r=i;break}}else for(const i of this.credentials)if(this._hasSameServerInstance(i.server,e)&&-1!==this._getIdenticalSvcIdx(e,i)&&i.scope===s){r=i;break}return r}getCredential(e,t){let r,s=!1,o=!0;t&&(s=!(!t.token&&!t.credential),r=t.error,o=!1!==t.prompt),t={...t},e=this._sanitizeUrl(e);const n=new AbortController,a=(0,promiseUtils/* createResolver */.Tw)();if(t.signal&&(0,promiseUtils/* onAbort */.u7)(t.signal,(()=>{n.abort()})),(0,promiseUtils/* onAbort */.u7)(n,(()=>{a.reject(new core_Error/* default */.A("identity-manager:user-aborted","ABORTED"))})),(0,promiseUtils/* isAborted */.G4)(n))return a.promise;t.signal=n.signal;const h=this._isAdminResource(e),u=s?this.findCredential(e):null;let _;if(u&&498===r?.details?.httpStatus)u.destroy();else if(u)return _=new core_Error/* default */.A("identity-manager:not-authorized","You are currently signed in as: '"+u.userId+"'. You do not have access to this resource: "+e,{error:r}),a.reject(_),a.promise;const f=this._findCredential(e,t);if(f)return a.resolve(f),a.promise;let g=this.findServerInfo(e);if(g)!g.hasPortal&&g.server&&g.owningSystemUrl&&this._hasSameServerInstance(g.server,g.owningSystemUrl)&&(g.hasPortal=!0),!g.hasServer&&this._isServerRsrc(e)&&(g._restInfoPms=this._getTokenSvcUrl(e),g.hasServer=!0);else{const t=this._getTokenSvcUrl(e);if(!t)return _=new core_Error/* default */.A("identity-manager:unknown-resource","Unknown resource - could not find token service endpoint."),a.reject(_),a.promise;g=new ServerInfo_s,g.server=this._getServerInstanceRoot(e),"string"==typeof t?(g.tokenServiceUrl=t,g.hasPortal=!0):(g._restInfoPms=t,g.hasServer=!0),this.registerServers([g])}return g.hasPortal&&void 0===g._selfReq&&(o||(0,urlUtils/* hasSameOrigin */.FX)(g.tokenServiceUrl,this._appOrigin)||this._gwDomains.some((e=>e.tokenServiceUrl===g.tokenServiceUrl)))&&(g._selfReq={owningTenant:t?.owningTenant,selfDfd:this._getPortalSelf(g.tokenServiceUrl.replace(this._rePortalTokenSvc,"/sharing/rest/portals/self"),e)}),this._enqueue(e,g,t,a,h)}getResourceName(e){return this._isRESTService(e)?e.replace(this._regexSDirUrl,"").replace(this._regexServerType,"")||"":this._gwUser.test(e)&&e.replace(this._gwUser,"$1")||this._gwItem.test(e)&&e.replace(this._gwItem,"$1")||this._gwGroup.test(e)&&e.replace(this._gwGroup,"$1")||""}generateToken(e,t,r){const o=this._rePortalTokenSvc.test(e.tokenServiceUrl),n=new urlUtils/* Url */.s0(this._appOrigin),a=e.shortLivedTokenValidity;let h,l,c,d,u,f,g,m;t&&(m=this.tokenValidity||a||this._defaultTokenValidity,m>a&&a>0&&(m=a)),r&&(h=r.isAdmin,l=r.serverUrl,c=r.token,f=r.signal,g=r.ssl,e.customParameters=r.customParameters),h?d=e.adminTokenServiceUrl:(d=e.tokenServiceUrl,u=new urlUtils/* Url */.s0(d.toLowerCase()),e.webTierAuth&&r?.serverUrl&&!g&&"http"===n.scheme&&((0,urlUtils/* hasSameOrigin */.FX)(n.uri,d,!0)||"https"===u.scheme&&n.host===u.host&&"7080"===n.port&&"7443"===u.port)&&(d=d.replace(/^https:/i,"http:").replace(/:7443/i,":7080")));const v={query:{request:"getToken",username:t?.username,password:t?.password,serverUrl:l,token:c,expiration:m,referer:h||o?this._appOrigin:null,client:h?"referer":null,f:"json",...e.customParameters},method:"post",authMode:"anonymous",useProxy:this._useProxy(e,r),signal:f,...r?.ioArgs};o||(v.withCredentials=!1);return (0,request/* default */.A)(d,v).then((r=>{const s=r.data;if(!s?.token)return new core_Error/* default */.A("identity-manager:authentication-failed","Unable to generate token");const o=e.server;return R[o]||(R[o]={}),t&&(R[o][t.username]=t.password),s.validity=m,s}))}isBusy(){return!!this._busy}async checkSignInStatus(e){return(await this.checkAppAccess(e,"")).credential}checkAppAccess(e,t,r){let o=!1;return this.getCredential(e,{prompt:!1}).then((n=>{let a;const h={f:"json"};if("portal"===n.scope)if(t&&(this._doPortalSignIn(e)||r?.force))a=n.server+"/sharing/rest/oauth2/validateAppAccess",h.client_id=t;else{if(!n.token)return{credential:n};a=n.server+"/sharing/rest"}else{if(!n.token)return{credential:n};a=n.server+"/rest/services"}return n.token&&(h.token=n.token),(0,request/* default */.A)(a,{query:h,authMode:"anonymous"}).then((e=>{if(!1===e.data.valid)throw new core_Error/* default */.A("identity-manager:not-authorized",`You are currently signed in as: '${n.userId}'.`,e.data);return o=!!e.data.viewOnlyUserTypeApp,{credential:n}})).catch((e=>{if("identity-manager:not-authorized"===e.name)throw e;const t=e.details?.httpStatus;if(498===t)throw n.destroy(),new core_Error/* default */.A("identity-manager:not-authenticated","User is not signed in.");if(400===t)throw new core_Error/* default */.A("identity-manager:invalid-request","Bad request");return{credential:n}}))})).then((e=>({credential:e.credential,viewOnly:o})))}setOAuthResponseHash(e){e&&("#"===e.charAt(0)&&(e=e.slice(1)),this._processOAuthPopupParams((0,urlUtils/* queryToObject */.zf)(e)))}setOAuthRedirectionHandler(e){this._oAuthRedirectFunc=e}setProtocolErrorHandler(e){this._protocolFunc=e}signIn(e,t,r={}){const s=(0,promiseUtils/* createResolver */.Tw)(),o=()=>{h?.remove(),d?.remove(),this.dialog?.destroy(),this.dialog=h=d=null},n=()=>{o(),this._oAuthDfd=null,s.reject(new core_Error/* default */.A("identity-manager:user-aborted","ABORTED"))};r.signal&&(0,promiseUtils/* onAbort */.u7)(r.signal,(()=>{n()}));const a=new IdentityModal_h({open:!0,resource:this.getResourceName(e),server:t.server});this.dialog=a,this.emit("dialog-create");let h=a.on("cancel",n),d=a.on("submit",(e=>{this.generateToken(t,e,{isAdmin:r.isAdmin,signal:r.signal}).then((i=>{o();const n=new IdentityManagerBase_E({userId:e.username,server:t.server??void 0,token:i.token,expires:null!=i.expires?Number(i.expires):null,ssl:!!i.ssl,isAdmin:r.isAdmin,validity:i.validity});s.resolve(n)})).catch((e=>{a.error=e,a.signingIn=!1}))}));return s.promise}oAuthSignIn(e,t,r,s){this._oAuthDfd=(0,promiseUtils/* createResolver */.Tw)();const o=this._oAuthDfd;let n;s?.signal&&(0,promiseUtils/* onAbort */.u7)(s.signal,(()=>{const e=this._oAuthDfd&&this._oAuthDfd.oAuthWin_;e&&!e.closed?e.close():this.dialog&&u()})),o.resUrl_=e,o.sinfo_=t,o.oinfo_=r;const a=r._oAuthCred;if(a.storage&&("authorization-code"===r.flowType||"auto"===r.flowType&&t.currentVersion>=8.4)){let e=crypto.getRandomValues(new Uint8Array(32));n=(0,urlUtils/* base64UrlEncode */.$1)(e),a.codeVerifier=n,e=crypto.getRandomValues(new Uint8Array(32)),a.stateUID=(0,urlUtils/* base64UrlEncode */.$1)(e),a.save()||(a.codeVerifier=n=null)}else a.codeVerifier=null;let h,d;this._getCodeChallenge(n).then((i=>{const o=!s||!1!==s.oAuthPopupConfirmation;if(!r.popup||!o)return void this._doOAuthSignIn(e,t,r,i);const n=new IdentityModal_h({oAuthPrompt:!0,server:t.server,open:!0});this.dialog=n,this.emit("dialog-create"),h=n.on("cancel",u),d=n.on("submit",(()=>{p(),this._doOAuthSignIn(e,t,r,i)}))}));const u=()=>{p(),this._oAuthDfd=null,o.reject(new core_Error/* default */.A("identity-manager:user-aborted","ABORTED"))},p=()=>{h?.remove(),d?.remove(),this.dialog?.destroy(),this.dialog=null};return o.promise}destroyCredentials(){if(this.credentials){this.credentials.slice().forEach((e=>{e.destroy()}))}this.emit("credentials-destroy")}enablePostMessageAuth(e="https://www.arcgis.com/sharing/rest"){this._postMessageAuthHandle&&this._postMessageAuthHandle.remove(),this._postMessageAuthHandle=(0,events.on)(window,"message",(t=>{if((t.origin===this._appOrigin||t.origin.endsWith(".arcgis.com"))&&"arcgis:auth:requestCredential"===t.data?.type){const r=t.source;this.getCredential(e).then((e=>{r.postMessage({type:"arcgis:auth:credential",credential:{expires:e.expires,server:e.server,ssl:e.ssl,token:e.token,userId:e.userId}},t.origin)})).catch((e=>{r.postMessage({type:"arcgis:auth:error",error:{name:e.name,message:e.message}},t.origin)}))}}))}disablePostMessageAuth(){this._postMessageAuthHandle&&(this._postMessageAuthHandle.remove(),this._postMessageAuthHandle=null)}_getOAuthLocationParams(){let e=window.location.hash;if(e){"#"===e.charAt(0)&&(e=e.slice(1));const t=(0,urlUtils/* queryToObject */.zf)(e);let r=!1;if(t.access_token&&t.expires_in&&t.state&&t.hasOwnProperty("username"))try{t.state=JSON.parse(t.state),t.state.portalUrl&&(this._oAuthLocationParams=t,r=!0)}catch{}else if(t.error&&t.error_description&&(console.log("IdentityManager OAuth Error: ",t.error," - ",t.error_description),"access_denied"===t.error&&(r=!0,t.state)))try{t.state=JSON.parse(t.state)}catch{}r&&(window.location.hash=t.state?.hash||"")}let t=window.location.search;if(t){"?"===t.charAt(0)&&(t=t.slice(1));const e=(0,urlUtils/* queryToObject */.zf)(t);let r=!1;if(e.code&&e.state)try{e.state=JSON.parse(e.state),e.state.portalUrl&&e.state.uid&&(this._oAuthLocationParams=e,r=!0)}catch{}else if(e.error&&e.error_description&&(console.log("IdentityManager OAuth Error: ",e.error," - ",e.error_description),"access_denied"===e.error&&(r=!0,e.state)))try{e.state=JSON.parse(e.state)}catch{}if(r){const t={...e};["code","error","error_description","message_code","persist","state"].forEach((e=>{delete t[e]}));const r=(0,urlUtils/* objectToQuery */.x0)(t),s=window.location.pathname+(r?`?${r}`:"")+(e.state?.hash||"");window.history.replaceState(window.history.state,"",s)}}}_getOAuthToken(e,t,r,i,o){return e=e.replace(/^http:/i,"https:"),(0,request/* default */.A)(`${e}/sharing/rest/oauth2/token`,{authMode:"anonymous",method:"post",query:i&&o?{grant_type:"authorization_code",code:t,redirect_uri:i,client_id:r,code_verifier:o}:{grant_type:"refresh_token",refresh_token:t,client_id:r}}).then((e=>e.data))}async _getCodeChallenge(e){if(e&&globalThis.isSecureContext){const t=(new TextEncoder).encode(e),r=await crypto.subtle.digest("SHA-256",t);return (0,urlUtils/* base64UrlEncode */.$1)(new Uint8Array(r))}return null}_pageShowHandler(e){if(e.persisted&&this.isBusy()&&this._rejectOnPersistedPageShow){const e=new core_Error/* default */.A("identity-manager:user-aborted","ABORTED");this._errbackFunc(e)}}_findCredential(e,t){let r,s,i,o,n=-1;const a=t?.token,h=t?.resource,l=this._isServerRsrc(e)?"server":"portal",c=this.credentials.filter((t=>this._hasSameServerInstance(t.server,e)&&t.scope===l));if(e=h||e,c.length)if(1===c.length){if(r=c[0],i=this.findServerInfo(r.server),s=i?.owningSystemUrl,o=s?this.findCredential(s,r.userId):void 0,n=this._getIdenticalSvcIdx(e,r),!a)return-1===n&&r.resources.push(e),this._addResource(e,o),r;-1!==n&&(r.resources.splice(n,1),this._removeResource(e,o))}else{let t,r;if(c.some((a=>(r=this._getIdenticalSvcIdx(e,a),-1!==r&&(t=a,i=this.findServerInfo(t.server),s=i?.owningSystemUrl,o=s?this.findCredential(s,t.userId):void 0,n=r,!0)))),a)t&&(t.resources.splice(n,1),this._removeResource(e,o));else if(t)return this._addResource(e,o),t}}_findOAuthInfo(e){let t=this.findOAuthInfo(e);if(!t)for(const r of this.oAuthInfos)if(this._isIdProvider(r.portalUrl,e)){t=r;break}return t}_addResource(e,t){t&&-1===this._getIdenticalSvcIdx(e,t)&&t.resources.push(e)}_removeResource(e,t){let r=-1;t&&(r=this._getIdenticalSvcIdx(e,t),r>-1&&t.resources.splice(r,1))}_useProxy(e,t){return t?.isAdmin&&!(0,urlUtils/* hasSameOrigin */.FX)(e.adminTokenServiceUrl,this._appOrigin)||!this._isPortalDomain(e.tokenServiceUrl)&&"10.1"===String(e.currentVersion)&&!(0,urlUtils/* hasSameOrigin */.FX)(e.tokenServiceUrl,this._appOrigin)}_getOrigin(e){const t=new urlUtils/* Url */.s0(e);return t.scheme+"://"+t.host+(null!=t.port?":"+t.port:"")}_getServerInstanceRoot(e){const t=e.toLowerCase();let r=t.indexOf(this._agsRest);return-1===r&&this._isAdminResource(e)&&(r=this._agsAdmin.test(e)?e.replace(this._agsAdmin,"$1").length:e.search(this._adminSvcs)),-1!==r||(0,support_urlUtils/* isSecureProxyService */.$E)(t)||(r=t.indexOf("/sharing")),-1===r&&t.endsWith("/")&&(r=t.length-1),r>-1?e.slice(0,r):e}_hasSameServerInstance(e,t){return e.endsWith("/")&&(e=e.slice(0,-1)),e=e.toLowerCase(),t=this._getServerInstanceRoot(t).toLowerCase(),e=(0,support_urlUtils/* normalizeArcGISOnlineOrgDomain */.qG)(e),t=(0,support_urlUtils/* normalizeArcGISOnlineOrgDomain */.qG)(t),(e=e.slice(Math.max(0,e.indexOf(":"))))===(t=t.slice(Math.max(0,t.indexOf(":"))))}_sanitizeUrl(e){const r=(config/* default */.A.request.proxyUrl||"").toLowerCase(),s=r?e.toLowerCase().indexOf(r+"?"):-1;return-1!==s&&(e=e.slice(s+r.length+1)),e=(0,urlUtils/* normalize */.S8)(e),(0,urlUtils/* urlToObject */.An)(e).path}_isRESTService(e){return e.includes(this._agsRest)}_isAdminResource(e){return this._agsAdmin.test(e)||this._adminSvcs.test(e)}_isServerRsrc(e){return this._isRESTService(e)||this._isAdminResource(e)}_isIdenticalService(e,t){let r=!1;if(this._isRESTService(e)&&this._isRESTService(t)){const s=this._getSuffix(e).toLowerCase(),i=this._getSuffix(t).toLowerCase();if(r=s===i,!r){const e=/(.*)\/(MapServer|FeatureServer|UtilityNetworkServer).*/gi;r=s.replaceAll(e,"$1")===i.replaceAll(e,"$1")}}else this._isAdminResource(e)&&this._isAdminResource(t)?r=!0:this._isServerRsrc(e)||this._isServerRsrc(t)||!this._isPortalDomain(e)||(r=!0);return r}_isPortalDomain(e){const r=new urlUtils/* Url */.s0(e.toLowerCase()),s=this._portalConfig;let i=this._gwDomains.some((e=>e.regex.test(r.uri)));return!i&&s&&(i=this._hasSameServerInstance(this._getServerInstanceRoot(s.restBaseUrl),r.uri)),i||config/* default */.A.portalUrl&&(i=(0,urlUtils/* hasSameOrigin */.FX)(r,config/* default */.A.portalUrl,!0)),i||(i=this._portals.some((e=>this._hasSameServerInstance(e,r.uri)))),i=i||this._agsPortal.test(r.path),i}_isIdProvider(e,t){let r=-1,s=-1;this._gwDomains.forEach(((i,o)=>{-1===r&&i.regex.test(e)&&(r=o),-1===s&&i.regex.test(t)&&(s=o)}));let i=!1;if(r>-1&&s>-1&&(0===r||4===r?0!==s&&4!==s||(i=!0):1===r?1!==s&&2!==s||(i=!0):2===r?2===s&&(i=!0):3===r&&3===s&&(i=!0)),!i){const r=this.findServerInfo(t),s=r?.owningSystemUrl;s&&IdentityManagerBase_C(r)&&this._isPortalDomain(s)&&this._isIdProvider(e,s)&&(i=!0)}return i}_getIdenticalSvcIdx(e,t){let r=-1;for(let s=0;s<t.resources.length;s++){const i=t.resources[s];if(this._isIdenticalService(e,i)){r=s;break}}return r}_getSuffix(e){return e.replace(this._regexSDirUrl,"").replace(this._regexServerType,"$1")}_getTokenSvcUrl(e){let t,r,i;if(this._isRESTService(e)||this._isAdminResource(e)){const i=this._getServerInstanceRoot(e);return t=i+"/admin/generateToken",r=(0,request/* default */.A)(e=i+"/rest/info",{query:{f:"json"}}).then((e=>e.data)),{adminUrl:t,promise:r}}if(this._isPortalDomain(e)){let t="";if(this._gwDomains.some((r=>(r.regex.test(e)&&(t=r.tokenServiceUrl),!!t))),t||this._portals.some((r=>(this._hasSameServerInstance(r,e)&&(t=r+this._gwTokenUrl),!!t))),t||(i=e.toLowerCase().indexOf("/sharing"),-1!==i&&(t=e.slice(0,i)+this._gwTokenUrl)),t||(t=this._getOrigin(e)+this._gwTokenUrl),t){const r=new urlUtils/* Url */.s0(e).port;/^http:\/\//i.test(e)&&"7080"===r&&(t=t.replace(/:7080/i,":7443")),t=t.replace(/http:/i,"https:")}return t}}_processOAuthResponseParams(e,t,r){const s=t._oAuthCred;if(e.code){const i=s.codeVerifier;return s.codeVerifier=null,s.stateUID=null,s.save(),this._getOAuthToken(r.server,e.code,t.appId,this._getRedirectURI(t,!0),i).then((i=>{const o=new IdentityManagerBase_E({userId:i.username,server:r.server??void 0,token:i.access_token,expires:Date.now()+1e3*i.expires_in,ssl:i.ssl,oAuthState:e.state,_oAuthCred:s});return t.userId=o.userId,s.storage=i.persist?IdentityManagerBase_b:q,s.refreshToken=i.refresh_token,s.token=null,s.expires=i.refresh_token_expires_in?Date.now()+1e3*i.refresh_token_expires_in:null,s.userId=o.userId,s.ssl=o.ssl,s.save(),o}))}const i=new IdentityManagerBase_E({userId:e.username,server:r.server??void 0,token:e.access_token,expires:Date.now()+1e3*Number(e.expires_in),ssl:"true"===e.ssl,oAuthState:e.state,_oAuthCred:s});return t.userId=i.userId,s.storage=e.persist?IdentityManagerBase_b:q,s.refreshToken=null,s.token=i.token,s.expires=i.expires,s.userId=i.userId,s.ssl=i.ssl,s.save(),Promise.resolve(i)}_processOAuthPopupParams(e){const t=this._oAuthDfd;if(this._oAuthDfd=null,t)if(clearInterval(this._oAuthIntervalId),this._oAuthOnPopupHandle?.remove(),e.error){const r="access_denied"===e.error,s=new core_Error/* default */.A(r?"identity-manager:user-aborted":"identity-manager:authentication-failed",r?"ABORTED":"OAuth: "+e.error+" - "+e.error_description);t.reject(s)}else this._processOAuthResponseParams(e,t.oinfo_,t.sinfo_).then((e=>{t.resolve(e)})).catch((e=>{t.reject(e)}))}_setOAuthResponseQueryString(e){e&&("?"===e.charAt(0)&&(e=e.slice(1)),this._processOAuthPopupParams((0,urlUtils/* queryToObject */.zf)(e)))}async _exchangeToken(e,t,r){return(await (0,request/* default */.A)(`${e}/sharing/rest/oauth2/exchangeToken`,{authMode:"anonymous",method:"post",query:{f:"json",client_id:t,token:r}})).data.token}async _getPlatformSelf(e,t){if(this._getPlatformSelfError&&Date.now()-this._getPlatformSelfError[1]<1e3)throw this._getPlatformSelfError[0];e=e.replace(/^http:/i,"https:");try{const r=await (0,request/* default */.A)(`${e}/sharing/rest/oauth2/platformSelf`,{authMode:"anonymous",headers:{"X-Esri-Auth-Client-Id":t,"X-Esri-Auth-Redirect-Uri":window.location.href.replace(/#.*$/,"")},method:"post",query:{f:"json",expiration:30},withCredentials:!0});return this._getPlatformSelfError=null,r.data}catch(r){throw"OAUTH_0066"===r.details?.messageCode&&(this._getPlatformSelfError=[r,Date.now()]),r}}_getPortalSelf(e,t){let r;if(this._gwDomains.some((t=>(t.regex.test(e)&&(r=t.customBaseUrl),!!r))),r)return Promise.resolve({allSSL:!0,currentVersion:"8.4",customBaseUrl:r,portalMode:"multitenant",supportsOAuth:!0});this._appOrigin.startsWith("https:")?e=e.replace(/^http:/i,"https:").replace(/:7080/i,":7443"):/^http:/i.test(t)&&(e=e.replace(/^https:/i,"http:").replace(/:7443/i,":7080"));return (0,request/* default */.A)(e,{query:{f:"json"},authMode:"anonymous",withCredentials:!0}).then((e=>e.data))}_doPortalSignIn(e){const t=this._portalConfig,r=window.location.href,s=this.findServerInfo(e);return!(!t&&!this._isPortalDomain(r)||!(s?s.hasPortal||s.owningSystemUrl&&this._isPortalDomain(s.owningSystemUrl):this._isPortalDomain(e))||!(this._isIdProvider(r,e)||t&&(this._hasSameServerInstance(this._getServerInstanceRoot(t.restBaseUrl),e)||this._isIdProvider(t.restBaseUrl,e))||(0,urlUtils/* hasSameOrigin */.FX)(r,e,!0)))}_checkProtocol(e,t,r,s){let o=!0;const n=s?t.adminTokenServiceUrl:t.tokenServiceUrl;if(n.trim().toLowerCase().startsWith("https:")&&!this._appOrigin.startsWith("https:")&&(0,urlUtils/* getProxyRule */.zs)(n)&&(o=!!this._protocolFunc&&!!this._protocolFunc({resourceUrl:e,serverInfo:t}),!o)){r(new core_Error/* default */.A("identity-manager:aborted","Aborted the Sign-In process to avoid sending password over insecure connection."))}return o}_enqueue(e,t,r,s,i,o){return s||(s=(0,promiseUtils/* createResolver */.Tw)()),s.resUrl_=e,s.sinfo_=t,s.options_=r,s.admin_=i,s.refresh_=o,this._busy?this._hasSameServerInstance(this._getServerInstanceRoot(e),this._busy.resUrl_)?(this._oAuthDfd&&this._oAuthDfd.oAuthWin_&&this._oAuthDfd.oAuthWin_.focus(),this._soReqs.push(s)):this._xoReqs.push(s):this._doSignIn(s),s.promise}_doSignIn(e){this._busy=e,this._rejectOnPersistedPageShow=!1;const t=t=>{const r=e.options_?.resource,s=e.resUrl_,i=e.refresh_;let o=!1;this.credentials.includes(t)||(i&&this.credentials.includes(i)?(i.userId=t.userId,i.token=t.token,i.expires=t.expires,i.validity=t.validity,i.ssl=t.ssl,i.creationTime=t.creationTime,o=!0,t=i):this.credentials.push(t)),t.resources||(t.resources=[]),t.resources.includes(r||s)||t.resources.push(r||s),t.scope=this._isServerRsrc(s)?"server":"portal",t.emitTokenChange();const n=this._soReqs,a={};this._soReqs=[],n.forEach((e=>{if(!this._isIdenticalService(s,e.resUrl_)){const r=this._getSuffix(e.resUrl_);a[r]||(a[r]=!0,t.resources.push(e.resUrl_))}})),e.resolve(t),n.forEach((e=>{this._hasSameServerInstance(this._getServerInstanceRoot(s),e.resUrl_)?e.resolve(t):this._soReqs.push(e)})),this._busy=e.resUrl_=e.sinfo_=e.refresh_=null,o||this.emit("credential-create",{credential:t}),this._soReqs.length?this._doSignIn(this._soReqs.shift()):this._xoReqs.length&&this._doSignIn(this._xoReqs.shift())},r=t=>{e.reject(t),this._busy=e.resUrl_=e.sinfo_=e.refresh_=null,this._soReqs.length?this._doSignIn(this._soReqs.shift()):this._xoReqs.length&&this._doSignIn(this._xoReqs.shift())},s=(o,a,h,l)=>{const d=e.sinfo_,u=!e.options_||!1!==e.options_.prompt,_=d.hasPortal&&this._findOAuthInfo(e.resUrl_);let f,g;if(o)t(new IdentityManagerBase_E({userId:o,server:d.server??void 0,token:h??void 0,expires:null!=l?Number(l):null,ssl:!!a}));else if(window!==window.parent&&this._appUrlObj.query?.["arcgis-auth-origin"]&&this._appUrlObj.query?.["arcgis-auth-portal"]&&this._hasSameServerInstance(this._getServerInstanceRoot(this._appUrlObj.query["arcgis-auth-portal"]),e.resUrl_)){window.parent.postMessage({type:"arcgis:auth:requestCredential"},this._appUrlObj.query["arcgis-auth-origin"]);const s=(0,events.on)(window,"message",(e=>{e.source===window.parent&&e.data&&("arcgis:auth:credential"===e.data.type?(s.remove(),e.data.credential.expires<Date.now()?r(new core_Error/* default */.A("identity-manager:credential-request-failed","Parent application's token has expired.")):t(new IdentityManagerBase_E(e.data.credential))):"arcgis:auth:error"===e.data.type&&(s.remove(),"tokenExpiredError"===e.data.error.name?r(new core_Error/* default */.A("identity-manager:credential-request-failed","Parent application's token has expired.")):r(core_Error/* default */.A.fromJSON(e.data.error))))}));(0,promiseUtils/* onAbort */.u7)(e.options_?.signal,(()=>{s.remove()}))}else if(_){let o=_._oAuthCred;if(!o){const e=new OAuthCredential_e(_,IdentityManagerBase_b),t=new OAuthCredential_e(_,q);e.isValid()&&t.isValid()?e.expires>t.expires?(o=e,t.destroy()):(o=t,e.destroy()):o=e.isValid()?e:t,_._oAuthCred=o}if(o.isValid()){f=new IdentityManagerBase_E({userId:o.userId??void 0,server:d.server??void 0,token:o.token??void 0,expires:o.expires,ssl:o.ssl??void 0,_oAuthCred:o});const i=_.appId!==o.appId&&this._doPortalSignIn(e.resUrl_);i||o.refreshToken?(e._pendingDfd=o.refreshToken?this._getOAuthToken(d.server,o.refreshToken,o.appId).then((e=>(f.expires=Date.now()+1e3*e.expires_in,f.token=e.access_token,f))):Promise.resolve(f),e._pendingDfd.then((e=>i?this._exchangeToken(e.server,_.appId,e.token).then((t=>(e.token=t,e))).catch((()=>e)):e)).then((e=>{t(e)})).catch((e=>{const t=e.details?.httpStatus;t>0&&404!==t?(o.destroy(),s()):r(e)}))):t(f)}else if(this._oAuthLocationParams&&this._hasSameServerInstance(_.portalUrl,this._oAuthLocationParams.state.portalUrl)&&(this._oAuthLocationParams.access_token||this._oAuthLocationParams.code&&this._oAuthLocationParams.state.uid===o.stateUID&&o.codeVerifier)){const s=this._oAuthLocationParams;this._oAuthLocationParams=null,e._pendingDfd=this._processOAuthResponseParams(s,_,d).then((e=>{t(e)})).catch(r)}else{const s=()=>{u?e._pendingDfd=this.oAuthSignIn(e.resUrl_,d,_,e.options_).then(t,r):(g=new core_Error/* default */.A("identity-manager:not-authenticated","User is not signed in."),r(g))};this._doPortalSignIn(e.resUrl_)?e._pendingDfd=this._getPlatformSelf(d.server,_.appId).then((e=>{(0,urlUtils/* hasSameOrigin */.FX)(e.portalUrl,this._appOrigin,!0)?(f=new IdentityManagerBase_E({userId:e.username,server:d.server??void 0,expires:Date.now()+1e3*e.expires_in,token:e.token}),t(f)):s()})).catch(s):s()}}else if(u){if(this._checkProtocol(e.resUrl_,d,r,e.admin_)){let s=e.options_;e.admin_&&(s=s||{},s.isAdmin=!0),e._pendingDfd=this.signIn(e.resUrl_,d,s).then(t,r)}}else g=new core_Error/* default */.A("identity-manager:not-authenticated","User is not signed in."),r(g)},o=()=>{const s=e.sinfo_,i=s.owningSystemUrl,o=e.options_;let n,a,h,l;if(o&&(n=o.token,a=o.error,h=o.prompt),l=this._findCredential(i,{token:n,resource:e.resUrl_}),!l)for(const e of this.credentials)if(this._isIdProvider(i,e.server)){l=e;break}if(l){const i=this.findCredential(e.resUrl_,l.userId);if(i)t(i);else if(D(s,this._legacyFed)){const e=l.toJSON();e.server=s.server,e.resources=null,t(new IdentityManagerBase_E(e))}else{(e._pendingDfd=this.generateToken(this.findServerInfo(l.server),null,{serverUrl:e.resUrl_,token:l.token,signal:e.options_.signal,ssl:l.ssl})).then((r=>{t(new IdentityManagerBase_E({userId:l?.userId,server:s.server??void 0,token:r.token,expires:null!=r.expires?Number(r.expires):null,ssl:!!r.ssl,isAdmin:e.admin_,validity:r.validity}))}),r)}}else{this._busy=null,n&&(e.options_.token=null);(e._pendingDfd=this.getCredential(i.replace(/\/?$/,"/sharing"),{resource:e.resUrl_,owningTenant:s.owningTenant,signal:e.options_.signal,token:n,error:a,prompt:h})).then((()=>{this._enqueue(e.resUrl_,e.sinfo_,e.options_,e,e.admin_)}),(t=>{e.resUrl_=e.sinfo_=e.refresh_=null,e.reject(t)}))}};this._errbackFunc=r;const a=e.sinfo_.owningSystemUrl,l=this._isServerRsrc(e.resUrl_),d=e.sinfo_._restInfoPms;d?d.promise.then((t=>{const r=e.sinfo_;if(r._restInfoPms){r.adminTokenServiceUrl=r._restInfoPms.adminUrl,r._restInfoPms=null,r.tokenServiceUrl=((0,object/* getDeepValue */.wc)("authInfo.tokenServicesUrl",t)||(0,object/* getDeepValue */.wc)("authInfo.tokenServiceUrl",t)||(0,object/* getDeepValue */.wc)("tokenServiceUrl",t))??null,r.shortLivedTokenValidity=(0,object/* getDeepValue */.wc)("authInfo.shortLivedTokenValidity",t)??null,r.currentVersion=t.currentVersion,r.owningTenant=t.owningTenant;const e=r.owningSystemUrl=t.owningSystemUrl;e&&this._portals.push(e)}l&&r.owningSystemUrl?o():s()}),(()=>{e.sinfo_._restInfoPms=null;const t=new core_Error/* default */.A("identity-manager:server-identification-failed","Unknown resource - could not find token service endpoint.");r(t)})):l&&a?o():e.sinfo_._selfReq?e.sinfo_._selfReq.selfDfd.then((t=>{const r={};let s,i,o,n;return t&&(s=t.user?.username,r.username=s,r.allSSL=t.allSSL,i=t.supportsOAuth,n=parseFloat(t.currentVersion),"multitenant"===t.portalMode&&(o=t.customBaseUrl),e.sinfo_.currentVersion=n),e.sinfo_.webTierAuth=!!s,s&&this.normalizeWebTierAuth?this.generateToken(e.sinfo_,null,{ssl:r.allSSL}).catch((()=>null)).then((e=>(r.portalToken=e?.token,r.tokenExpiration=e?.expires,r))):!s&&i&&n>=4.4&&!this._findOAuthInfo(e.resUrl_)?this._generateOAuthInfo({portalUrl:e.sinfo_.server,customBaseUrl:o,owningTenant:e.sinfo_._selfReq.owningTenant}).catch((()=>null)).then((()=>r)):r})).catch((()=>null)).then((t=>{e.sinfo_._selfReq=null,t?s(t.username,t.allSSL,t.portalToken,t.tokenExpiration):s()})):s()}_generateOAuthInfo(e){let t,r=null,i=e.portalUrl;const o=e.customBaseUrl,n=e.owningTenant,a=!this._defaultOAuthInfo&&this._createDefaultOAuthInfo&&!this._hasTestedIfAppIsOnPortal;if(a){r=this._appUrlObj.path;const e=r.search(/\/(apps|home)\//);r=e>-1?r.slice(0,e):null}return a&&r?(this._hasTestedIfAppIsOnPortal=!0,t=(0,request/* default */.A)(r+"/sharing/rest",{query:{f:"json"}}).then((()=>{this._defaultOAuthInfo=new OAuthInfo_i({appId:"arcgisonline",popupCallbackUrl:r+"/home/oauth-callback.html"})}))):t=Promise.resolve(),t.then((()=>{if(this._defaultOAuthInfo)return i=i.replace(/^http:/i,"https:"),(0,request/* default */.A)(i+"/sharing/rest/oauth2/validateRedirectUri",{query:{accountId:n,client_id:this._defaultOAuthInfo.appId,redirect_uri:(0,urlUtils/* makeAbsolute */.s2)(this._defaultOAuthInfo.popupCallbackUrl),f:"json"}}).then((e=>{if(e.data.valid){const t=this._defaultOAuthInfo.clone();e.data.urlKey&&o?t.portalUrl="https://"+e.data.urlKey.toLowerCase()+"."+o:t.portalUrl=i,t.popup=window!==window.top||!((0,urlUtils/* hasSameOrigin */.FX)(i,this._appOrigin)||this._gwDomains.some((e=>e.regex.test(i)&&e.regex.test(this._appOrigin)))),this.oAuthInfos.push(t)}}))}))}_doOAuthSignIn(e,t,r,s){const o=r._oAuthCred,a={portalUrl:r.portalUrl};!r.popup&&r.preserveUrlHash&&window.location.hash&&(a.hash=window.location.hash),o.stateUID&&(a.uid=o.stateUID);const h={client_id:r.appId,response_type:o.codeVerifier?"code":"token",state:JSON.stringify(a),expiration:r.expiration,locale:r.locale,redirect_uri:this._getRedirectURI(r,!!o.codeVerifier)};r.forceLogin&&(h.force_login=!0),r.forceUserId&&r.userId&&(h.prepopulatedusername=r.userId),!r.popup&&this._doPortalSignIn(e)&&(h.redirectToUserOrgUrl=!0),o.codeVerifier&&(h.code_challenge=s||o.codeVerifier,h.code_challenge_method=s?"S256":"plain");const l=r.portalUrl.replace(/^http:/i,"https:")+"/sharing/oauth2/authorize",c=l+"?"+(0,urlUtils/* objectToQuery */.x0)(h);if(r.popup){const e=window.open(c,"esriJSAPIOAuth",r.popupWindowFeatures);if(e)e.focus(),this._oAuthDfd.oAuthWin_=e,this._oAuthIntervalId=setInterval((()=>{if(e.closed){clearInterval(this._oAuthIntervalId),this._oAuthOnPopupHandle.remove();const e=this._oAuthDfd;if(e){const t=new core_Error/* default */.A("identity-manager:user-aborted","ABORTED");e.reject(t)}}}),500),this._oAuthOnPopupHandle=(0,events.on)(window,["arcgis:auth:hash","arcgis:auth:location:search"],(e=>{"arcgis:auth:hash"===e.type?this.setOAuthResponseHash(e.detail):this._setOAuthResponseQueryString(e.detail)}));else{const e=new core_Error/* default */.A("identity-manager:popup-blocked","ABORTED");this._oAuthDfd.reject(e)}}else this._rejectOnPersistedPageShow=!0,this._oAuthRedirectFunc?this._oAuthRedirectFunc({authorizeParams:h,authorizeUrl:l,resourceUrl:e,serverInfo:t,oAuthInfo:r}):window.location.href=c}_getRedirectURI(e,t){const r=window.location.href.replace(/#.*$/,"");if(e.popup)return (0,urlUtils/* makeAbsolute */.s2)(e.popupCallbackUrl);if(t){const e=(0,urlUtils/* urlToObject */.An)(r);return e.query&&["code","error","error_description","message_code","persist","state"].forEach((t=>{delete e.query[t]})),(0,urlUtils/* addQueryParameters */.a6)(e.path,e.query)}return r}}IdentityManagerBase_j.prototype.declaredClass="esri.identity.IdentityManagerBase";let IdentityManagerBase_E=class extends Evented/* default */.A.EventedAccessor{constructor(e){super(e),this._oAuthCred=null,this.tokenRefreshBuffer=2,e?._oAuthCred&&(this._oAuthCred=e._oAuthCred)}initialize(){this.resources=this.resources||[],null==this.creationTime&&(this.creationTime=Date.now())}refreshToken(){const e=kernel.id,t=e.findServerInfo(this.server),s=t?.owningSystemUrl,i=!!s&&"server"===this.scope,o=i&&D(t,e._legacyFed),n=t.webTierAuth,a=n&&e.normalizeWebTierAuth,h=R[this.server],l=h?.[this.userId];let c,d=this.resources&&this.resources[0],u=i?e.findServerInfo(s):null,p={username:this.userId,password:l};if(n&&!a)return;i&&!u&&e.serverInfos.some((t=>(e._isIdProvider(s,t.server)&&(u=t),!!u)));const _=u?e.findCredential(u.server,this.userId):null;if(!i||_){if(!o){if(i)c={serverUrl:d,token:_?.token,ssl:_?.ssl};else if(a)p=null,c={ssl:this.ssl};else{if(!l){let r;return d&&(d=e._sanitizeUrl(d),this._enqueued=1,r=e._enqueue(d,t,null,null,this.isAdmin,this),r.then((()=>{this._enqueued=0,this.refreshServerTokens()})).catch((()=>{this._enqueued=0}))),r}this.isAdmin&&(c={isAdmin:!0})}return e.generateToken(i?u:t,i?null:p,c).then((e=>{this.token=e.token,this.expires=null!=e.expires?Number(e.expires):null,this.creationTime=Date.now(),this.validity=e.validity,this.emitTokenChange(),this.refreshServerTokens()})).catch((()=>{}))}_?.refreshToken()}}refreshServerTokens(){if("portal"===this.scope){const e=kernel.id;e.credentials.forEach((t=>{const r=e.findServerInfo(t.server),s=r?.owningSystemUrl;t!==this&&t.userId===this.userId&&s&&"server"===t.scope&&(e._hasSameServerInstance(this.server,s)||e._isIdProvider(s,this.server))&&(D(r,e._legacyFed)?(t.token=this.token,t.expires=this.expires,t.creationTime=this.creationTime,t.validity=this.validity,t.emitTokenChange()):t.refreshToken())}))}}emitTokenChange(e){clearTimeout(this._refreshTimer);const t=kernel.id,s=this.server?t.findServerInfo(this.server):null,i=s?.owningSystemUrl,o=i?t.findServerInfo(i):null;!1===e||i&&"portal"!==this.scope&&(!o?.webTierAuth||t.normalizeWebTierAuth)||null==this.expires&&null==this.validity||this._startRefreshTimer(),this.emit("token-change")}destroy(){this.userId=this.server=this.token=this.expires=this.validity=this.resources=this.creationTime=null,this._oAuthCred&&(this._oAuthCred.destroy(),this._oAuthCred=null);const e=kernel.id,t=e.credentials.indexOf(this);t>-1&&e.credentials.splice(t,1),this.emitTokenChange(),this.emit("destroy")}toJSON(){const e=(0,lang/* fixJson */.oy)({userId:this.userId,server:this.server,token:this.token,expires:this.expires,validity:this.validity,ssl:this.ssl,isAdmin:this.isAdmin,creationTime:this.creationTime,scope:this.scope}),t=this.resources;return t&&t.length>0&&(e.resources=t.slice()),e}_startRefreshTimer(){clearTimeout(this._refreshTimer);const e=6e4*this.tokenRefreshBuffer,t=2**31-1;let r=(this.validity?this.creationTime+6e4*this.validity:this.expires)-Date.now();r<0?r=0:r>t&&(r=t),this._refreshTimer=setTimeout(this.refreshToken.bind(this),r>e?r-e:r)}};(0,tslib_es6._)([(0,property/* property */.MZ)()],IdentityManagerBase_E.prototype,"creationTime",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],IdentityManagerBase_E.prototype,"expires",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],IdentityManagerBase_E.prototype,"isAdmin",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],IdentityManagerBase_E.prototype,"oAuthState",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],IdentityManagerBase_E.prototype,"resources",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],IdentityManagerBase_E.prototype,"scope",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],IdentityManagerBase_E.prototype,"server",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],IdentityManagerBase_E.prototype,"ssl",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],IdentityManagerBase_E.prototype,"token",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],IdentityManagerBase_E.prototype,"tokenRefreshBuffer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],IdentityManagerBase_E.prototype,"userId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],IdentityManagerBase_E.prototype,"validity",void 0),IdentityManagerBase_E=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.identity.Credential")],IdentityManagerBase_E);

;// ./node_modules/@arcgis/core/identity/IdentityManager.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class IdentityManager_r extends IdentityManagerBase_j{}IdentityManager_r.prototype.declaredClass="esri.identity.IdentityManager";const IdentityManager_s=new IdentityManager_r;(0,kernel/* setId */.Aq)(IdentityManager_s);


/***/ })

};
;