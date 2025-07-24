"use strict";
exports.id = 88923;
exports.ids = [88923];
exports.modules = {

/***/ 88923:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Label: () => (/* reexport */ Label)
});

// EXTERNAL MODULE: ./node_modules/@esri/calcite-components/dist/chunks/runtime.js
var runtime = __webpack_require__(34088);
// EXTERNAL MODULE: ./node_modules/lit/index.js + 2 modules
var lit = __webpack_require__(67943);
// EXTERNAL MODULE: ./node_modules/@arcgis/lumina/dist/index.js + 15 modules
var dist = __webpack_require__(95925);
// EXTERNAL MODULE: ./node_modules/@esri/calcite-components/dist/chunks/label.js
var label = __webpack_require__(93174);
// EXTERNAL MODULE: ./node_modules/@lit/reactive-element/node/css-tag.js
var css_tag = __webpack_require__(9451);
;// ./node_modules/@esri/calcite-components/dist/components/calcite-label/customElement.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */





const CSS = {
  container: "container"
};
const styles = (0,css_tag/* css */.AH)`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}:host([alignment=start]){text-align:start}:host([alignment=end]){text-align:end}:host([alignment=center]){text-align:center}:host([scale=s]) .container{gap:.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, .5rem)}:host([scale=m]) .container{gap:.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, .75rem)}:host([scale=l]) .container{gap:.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;margin-block-end:var(--calcite-label-margin-bottom, 1rem)}:host .container{margin-inline:0px;margin-block-start:0px;inline-size:100%;line-height:1.375;color:var(--calcite-color-text-1);color:var(--calcite-label-text-color, var(--calcite-color-text-1))}:host([layout=default]) .container{display:flex;flex-direction:column}:host([layout=inline]) .container,:host([layout=inline-space-between]) .container{display:flex;flex-direction:row;align-items:center;gap:.5rem}:host([layout=inline][scale=l]) .container{gap:.75rem}:host([layout=inline-space-between]) .container{justify-content:space-between}:host([disabled])>.container{opacity:var(--calcite-opacity-disabled)}:host([disabled]) ::slotted(*[disabled]),:host([disabled]) ::slotted(*[disabled] *){--tw-bg-opacity: 1}:host([disabled]) ::slotted(calcite-input-message:not([active])){--tw-bg-opacity: 0}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`;
class Label extends dist/* LitElement */.WF {
  constructor() {
    super();
    this.alignment = "start";
    this.layout = "default";
    this.scale = "m";
    this.calciteInternalLabelClick = (0,dist/* createEvent */.lh)({ bubbles: false, cancelable: false });
    this.listen("click", this.labelClickHandler);
  }
  static {
    this.properties = { alignment: [3, {}, { reflect: true }], for: [3, {}, { reflect: true }], layout: [3, {}, { reflect: true }], scale: [3, {}, { reflect: true }] };
  }
  static {
    this.styles = styles;
  }
  connectedCallback() {
    super.connectedCallback();
    document.dispatchEvent(new CustomEvent(label.l));
  }
  willUpdate(changes) {
    if (changes.has("for")) {
      (0,label.a)(this.el);
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    document.dispatchEvent(new CustomEvent(label.b));
  }
  labelClickHandler(event) {
    if (window.getSelection()?.type === "Range") {
      return;
    }
    this.calciteInternalLabelClick.emit({
      sourceEvent: event
    });
  }
  render() {
    return (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(CSS.container)}><slot></slot></div>`;
  }
}
(0,runtime.c)("calcite-label", Label);


;// ./node_modules/@esri/calcite-components/dist/components/calcite-label/index.js


/***/ })

};
;