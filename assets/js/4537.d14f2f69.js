"use strict";
exports.id = 4537;
exports.ids = [4537];
exports.modules = {

/***/ 84537:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AutocompleteItemGroup: () => (/* reexport */ AutocompleteItemGroup)
});

// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/runtime.js
var runtime = __webpack_require__(14558);
// EXTERNAL MODULE: ../node_modules/lit-html/node/lit-html.js
var lit_html = __webpack_require__(31263);
// EXTERNAL MODULE: ../node_modules/@arcgis/lumina/dist/index.js + 15 modules
var dist = __webpack_require__(48747);
// EXTERNAL MODULE: ../node_modules/@lit/reactive-element/node/css-tag.js
var css_tag = __webpack_require__(56385);
;// ../node_modules/@esri/calcite-components/dist/components/calcite-autocomplete-item-group/customElement.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */




const CSS = {
  container: "container",
  containerNoSpacing: "container--no-spacing",
  heading: "heading"
};
const styles = (0,css_tag/* css */.AH)`.scale--s{font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-internal-autocomplete-item-group-spacing-unit: .5rem}.scale--m{font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-internal-autocomplete-item-group-spacing-unit: .75rem}.scale--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-internal-autocomplete-item-group-spacing-unit: 1rem}:host{margin:0;display:flex;flex-direction:column}.container{display:flex;flex-direction:column;background-color:var(--calcite-autocomplete-background-color, var(--calcite-color-foreground-1));padding-block-start:var(--calcite-internal-autocomplete-item-group-spacing-unit)}.container--no-spacing{padding-block-start:0}.heading{border:0 solid;box-sizing:border-box;inline-size:100%;min-inline-size:0px;max-inline-size:100%;border-block-end-width:1px;font-weight:var(--calcite-font-weight-bold);word-wrap:break-word;word-break:break-word;color:var(--calcite-autocomplete-text-color, var(--calcite-color-text-2));border-block-end-color:var(--calcite-autocomplete-border-color, var(--calcite-color-border-3));padding-block:var(--calcite-internal-autocomplete-item-group-spacing-unit);padding-inline:var(--calcite-internal-autocomplete-item-group-spacing-unit)}:host([hidden]){display:none}[hidden]{display:none}`;
class AutocompleteItemGroup extends dist/* LitElement */.WF {
  constructor() {
    super(...arguments);
    this.disableSpacing = false;
    this.scale = "m";
  }
  static {
    this.properties = { disableSpacing: [5, {}, { type: Boolean }], heading: 1, label: 1, scale: 1 };
  }
  static {
    this.styles = styles;
  }
  render() {
    const { scale } = this;
    return (0,lit_html/* html */.qy)`<div aria-label=${this.label ?? this.heading ?? dist/* nothing */.s6} class=${(0,dist/* safeClassMap */.CP)({
      [CSS.container]: true,
      [CSS.containerNoSpacing]: this.disableSpacing,
      [`scale--${scale}`]: true
    })} role=group><div class=${(0,dist/* safeClassMap */.CP)(CSS.heading)} role=presentation>${this.heading}</div><slot></slot></div>`;
  }
}
(0,runtime.c)("calcite-autocomplete-item-group", AutocompleteItemGroup);


;// ../node_modules/@esri/calcite-components/dist/components/calcite-autocomplete-item-group/index.js


/***/ })

};
;