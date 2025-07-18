"use strict";
exports.id = 4640;
exports.ids = [4640];
exports.modules = {

/***/ 44640:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteAccordion: () => (/* binding */ CalciteAccordion),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36705);
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36691);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */



const accordionCss = ":host([scale=s]){--calcite-accordion-item-spacing-unit:0.25rem;--calcite-accordion-icon-margin:0.5rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-accordion-item-spacing-unit:0.5rem;--calcite-accordion-icon-margin:0.75rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-accordion-item-spacing-unit:0.75rem;--calcite-accordion-icon-margin:1rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host{position:relative;display:block;max-inline-size:100%;line-height:1.5rem;--calcite-accordion-item-border:var(--calcite-ui-border-2);--calcite-accordion-item-background:var(--calcite-ui-foreground-1)}.accordion--transparent{--calcite-accordion-item-border:transparent;--calcite-accordion-item-background:transparent}.accordion{border-width:1px;border-block-end-width:0px;border-style:solid;border-color:var(--calcite-ui-border-2)}:host([hidden]){display:none}[hidden]{display:none}";

const Accordion = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__/* .proxyCustomElement */ .w$)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__/* .HTMLElement */ .wt {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInternalAccordionChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__/* .createEvent */ .lh)(this, "calciteInternalAccordionChange", 6);
    this.mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_1__.c)("mutation", () => this.updateAccordionItems());
    this.appearance = "solid";
    this.iconPosition = "end";
    this.iconType = "chevron";
    this.scale = "m";
    this.selectionMode = "multiple";
  }
  handlePropsChange() {
    this.updateAccordionItems();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.mutationObserver?.observe(this.el, { childList: true });
    this.updateAccordionItems();
  }
  disconnectedCallback() {
    this.mutationObserver?.disconnect();
  }
  render() {
    const transparent = this.appearance === "transparent";
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        "accordion--transparent": transparent,
        accordion: !transparent,
      } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  updateActiveItemOnChange(event) {
    this.calciteInternalAccordionChange.emit({
      requestedAccordionItem: event.detail.requestedAccordionItem,
    });
    event.stopPropagation();
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  updateAccordionItems() {
    this.el.querySelectorAll("calcite-accordion-item").forEach((item) => {
      item.iconPosition = this.iconPosition;
      item.iconType = this.iconType;
      item.scale = this.scale;
    });
    // sync props on items across shadow DOM
    document.dispatchEvent(new CustomEvent("calciteInternalAccordionItemsSync"));
  }
  get el() { return this; }
  static get watchers() { return {
    "iconPosition": ["handlePropsChange"],
    "iconType": ["handlePropsChange"],
    "scale": ["handlePropsChange"],
    "selectionMode": ["handlePropsChange"]
  }; }
  static get style() { return accordionCss; }
}, [1, "calcite-accordion", {
    "appearance": [513],
    "iconPosition": [513, "icon-position"],
    "iconType": [513, "icon-type"],
    "scale": [513],
    "selectionMode": [513, "selection-mode"]
  }, [[0, "calciteInternalAccordionItemSelect", "updateActiveItemOnChange"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-accordion"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-accordion":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Accordion);
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteAccordion = Accordion;
const defineCustomElement = defineCustomElement$1;




/***/ }),

/***/ 36691:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createObserver)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36705);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


/**
 * This utility ensures observers are created only for browser contexts.
 *
 * @param type - the type of observer to create
 * @param callback - the observer callback
 * @param options - the observer options
 */
function createObserver(type, callback, options) {
  if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__/* .Build */ .L2.isBrowser) {
    return undefined;
  }
  const Observer = getObserver(type);
  return new Observer(callback, options);
}
function getObserver(type) {
  // based on https://github.com/whatwg/dom/issues/126#issuecomment-1049814948
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
  return (function () {
    return (type === "intersection"
      ? window.IntersectionObserver
      : type === "mutation"
        ? ExtendedMutationObserver
        : window.ResizeObserver);
  })();
}




/***/ })

};
;