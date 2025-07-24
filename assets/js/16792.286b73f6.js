"use strict";
exports.id = 16792;
exports.ids = [16792];
exports.modules = {

/***/ 13061:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createObserver)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52689);
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */

function createObserver(type, callback, options) {
  if (lit__WEBPACK_IMPORTED_MODULE_0__/* .isServer */ .S$) {
    return void 0;
  }
  const Observer = getObserver(type);
  return new Observer(callback, options);
}
function getObserver(type) {
  class ExtendedMutationObserver extends window.MutationObserver {
    constructor(callback) {
      super(callback);
      this.observedEntry = [];
      this.callback = callback;
    }
    observe(target, options) {
      this.observedEntry.push({ target, options });
      return super.observe(target, options);
    }
    unobserve(target) {
      const newObservedEntries = this.observedEntry.filter((observed) => observed.target !== target);
      this.observedEntry = [];
      this.callback(super.takeRecords(), this);
      this.disconnect();
      newObservedEntries.forEach((observed) => this.observe(observed.target, observed.options));
    }
  }
  return function() {
    return type === "intersection" ? window.IntersectionObserver : type === "mutation" ? ExtendedMutationObserver : window.ResizeObserver;
  }();
}



/***/ }),

/***/ 29265:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ CSS)
/* harmony export */ });
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */
const CSS = {
  container: "container",
  containerNone: "container--none-selection",
  icon: "dropdown-item-icon",
  iconEnd: "dropdown-item-icon--end",
  iconStart: "dropdown-item-icon--start",
  itemContent: "dropdown-item-content",
  link: "dropdown-link"
};



/***/ }),

/***/ 16792:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  DropdownGroup: () => (/* reexport */ DropdownGroup)
});

// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/runtime.js
var runtime = __webpack_require__(14558);
// EXTERNAL MODULE: ../node_modules/lit/index.js + 2 modules
var lit = __webpack_require__(52689);
// EXTERNAL MODULE: ../node_modules/@arcgis/lumina/dist/index.js + 15 modules
var dist = __webpack_require__(48747);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/observers.js
var observers = __webpack_require__(13061);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/resources6.js
var resources6 = __webpack_require__(29265);
// EXTERNAL MODULE: ../node_modules/@lit/reactive-element/node/css-tag.js
var css_tag = __webpack_require__(56385);
;// ../node_modules/@esri/calcite-components/dist/components/calcite-dropdown-group/customElement.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */






const CSS = {
  title: "dropdown-title",
  separator: "dropdown-separator"
};
const styles = (0,css_tag/* css */.AH)`:host{display:block}.container{text-align:start}.dropdown-title{margin-block-end:-1px;display:block;cursor:default;overflow-wrap:break-word;border-width:0px;border-block-end-width:1px;border-style:solid;font-weight:var(--calcite-font-weight-bold);border-color:var(--calcite-dropdown-group-border-color, var(--calcite-color-border-3));color:var(--calcite-dropdown-group-title-text-color, var(--calcite-color-text-2))}.dropdown-separator{display:block;block-size:1px;background-color:var(--calcite-dropdown-group-border-color, var(--calcite-color-border-3))}:host([scale=s]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .dropdown-title{padding:.5rem}:host([scale=m]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .dropdown-title{padding:.75rem}:host([scale=l]){font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .dropdown-title{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}`;
class DropdownGroup extends dist/* LitElement */.WF {
  constructor() {
    super();
    this.mutationObserver = (0,observers.c)("mutation", () => this.updateItems());
    this.position = -1;
    this.scale = "m";
    this.selectionMode = "single";
    this.calciteInternalDropdownItemChange = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.listen("calciteInternalDropdownItemSelect", this.updateActiveItemOnChange);
  }
  static {
    this.properties = { groupTitle: [3, {}, { reflect: true }], position: [9, {}, { type: Number }], scale: [3, {}, { reflect: true }], selectionMode: [3, {}, { reflect: true }] };
  }
  static {
    this.shadowRootOptions = { mode: "open", delegatesFocus: true };
  }
  static {
    this.styles = styles;
  }
  connectedCallback() {
    super.connectedCallback();
    this.updateItems();
    this.mutationObserver?.observe(this.el, { childList: true });
  }
  willUpdate(changes) {
    if (changes.has("selectionMode") && (this.hasUpdated || this.selectionMode !== "single")) {
      this.updateItems();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.mutationObserver?.disconnect();
  }
  updateActiveItemOnChange(event) {
    this.requestedDropdownGroup = event.detail.requestedDropdownGroup;
    this.requestedDropdownItem = event.detail.requestedDropdownItem;
    this.calciteInternalDropdownItemChange.emit({
      requestedDropdownGroup: this.requestedDropdownGroup,
      requestedDropdownItem: this.requestedDropdownItem
    });
  }
  updateItems() {
    Array.from(this.el.querySelectorAll("calcite-dropdown-item")).forEach((item) => item.selectionMode = this.selectionMode);
  }
  render() {
    const groupTitle = this.groupTitle ? (0,lit/* html */.qy)`<span aria-hidden=true class=${(0,dist/* safeClassMap */.CP)(CSS.title)}>${this.groupTitle}</span>` : null;
    const dropdownSeparator = this.position > 0 ? (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(CSS.separator)} role=separator></div>` : null;
    this.el.ariaLabel = this.groupTitle;
    this.el.role = "group";
    return (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)({
      [resources6.C.container]: true
    })}>${dropdownSeparator}${groupTitle}<slot></slot></div>`;
  }
}
(0,runtime.c)("calcite-dropdown-group", DropdownGroup);


;// ../node_modules/@esri/calcite-components/dist/components/calcite-dropdown-group/index.js


/***/ })

};
;