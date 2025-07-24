"use strict";
exports.id = 49545;
exports.ids = [49545];
exports.modules = {

/***/ 7025:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ guid)
/* harmony export */ });
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */
function gen(counts) {
  return counts.map((count) => {
    let out = "";
    for (let i = 0; i < count; i++) {
      out += ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
    }
    return out;
  }).join("-");
}
const guid = () => gen([2, 1, 1, 1, 3]);



/***/ }),

/***/ 49545:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CarouselItem: () => (/* reexport */ CarouselItem)
});

// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/runtime.js
var runtime = __webpack_require__(14558);
// EXTERNAL MODULE: ../node_modules/lit-html/node/lit-html.js
var lit_html = __webpack_require__(31263);
// EXTERNAL MODULE: ../node_modules/@arcgis/lumina/dist/index.js + 15 modules
var dist = __webpack_require__(48747);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/guid.js
var guid = __webpack_require__(7025);
// EXTERNAL MODULE: ../node_modules/@lit/reactive-element/node/css-tag.js
var css_tag = __webpack_require__(56385);
;// ../node_modules/@esri/calcite-components/dist/components/calcite-carousel-item/customElement.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */





const CSS = {
  container: "container",
  selected: "selected"
};
const styles = (0,css_tag/* css */.AH)`:host{display:flex}.container{display:none;inline-size:var(--calcite-container-size-content-fluid)}:host([selected]) .container{display:block}:host([hidden]){display:none}[hidden]{display:none}`;
class CarouselItem extends dist/* LitElement */.WF {
  constructor() {
    super(...arguments);
    this.guid = `calcite-carousel-item-${(0,guid.g)()}`;
    this.selected = false;
  }
  static {
    this.properties = { label: 1, selected: [7, {}, { reflect: true, type: Boolean }] };
  }
  static {
    this.styles = styles;
  }
  render() {
    const id = this.el.id || this.guid;
    (0,dist/* setAttribute */.Bq)(this.el, "id", id);
    return (0,lit_html/* html */.qy)`<div .ariaLabel=${this.label} class=${(0,dist/* safeClassMap */.CP)({ [CSS.container]: true, [CSS.selected]: this.selected })} role=tabpanel><slot></slot></div>`;
  }
}
(0,runtime.c)("calcite-carousel-item", CarouselItem);


;// ../node_modules/@esri/calcite-components/dist/components/calcite-carousel-item/index.js


/***/ })

};
;