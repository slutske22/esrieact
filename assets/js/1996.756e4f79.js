"use strict";
exports.id = 1996;
exports.ids = [1996];
exports.modules = {

/***/ 91996:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteFlow: () => (/* binding */ CalciteFlow),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36705);
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36691);
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82850);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */




const CSS = {
  frame: "frame",
  frameAdvancing: "frame--advancing",
  frameRetreating: "frame--retreating",
};

const flowCss = ":host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;overflow:hidden;background-color:transparent}:host .frame{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;padding:0px}:host ::slotted(calcite-flow-item),:host ::slotted(calcite-panel){block-size:100%}:host ::slotted(.calcite-match-height:last-child){display:flex;flex:1 1 auto;overflow:hidden}:host .frame--advancing{animation:calcite-frame-advance var(--calcite-animation-timing)}:host .frame--retreating{animation:calcite-frame-retreat var(--calcite-animation-timing)}@keyframes calcite-frame-advance{0%{--tw-bg-opacity:0.5;transform:translate3d(50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{--tw-bg-opacity:0.5;transform:translate3d(-50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}:host([hidden]){display:none}[hidden]{display:none}";

const Flow = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__/* .proxyCustomElement */ .w$)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__/* .HTMLElement */ .wt {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.itemMutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_2__.c)("mutation", () => this.updateFlowProps());
    this.getFlowDirection = (oldFlowItemCount, newFlowItemCount) => {
      const allowRetreatingDirection = oldFlowItemCount > 1;
      const allowAdvancingDirection = oldFlowItemCount && newFlowItemCount > 1;
      if (!allowAdvancingDirection && !allowRetreatingDirection) {
        return null;
      }
      return newFlowItemCount < oldFlowItemCount ? "retreating" : "advancing";
    };
    this.updateFlowProps = () => {
      const { customItemSelectors, el, items } = this;
      const newItems = Array.from(el.querySelectorAll(`calcite-flow-item${customItemSelectors ? `,${customItemSelectors}` : ""}`)).filter((flowItem) => flowItem.closest("calcite-flow") === el);
      const oldItemCount = items.length;
      const newItemCount = newItems.length;
      const activeItem = newItems[newItemCount - 1];
      const previousItem = newItems[newItemCount - 2];
      if (newItemCount && activeItem) {
        newItems.forEach((itemNode) => {
          itemNode.showBackButton = itemNode === activeItem && newItemCount > 1;
          itemNode.hidden = itemNode !== activeItem;
        });
      }
      if (previousItem) {
        previousItem.menuOpen = false;
      }
      this.items = newItems;
      if (oldItemCount !== newItemCount) {
        const flowDirection = this.getFlowDirection(oldItemCount, newItemCount);
        this.itemCount = newItemCount;
        this.flowDirection = flowDirection;
      }
    };
    this.customItemSelectors = undefined;
    this.flowDirection = null;
    this.itemCount = 0;
    this.items = [];
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Removes the currently active `calcite-flow-item`.
   */
  async back() {
    const { items } = this;
    const lastItem = items[items.length - 1];
    if (!lastItem) {
      return;
    }
    const beforeBack = lastItem.beforeBack
      ? lastItem.beforeBack
      : () => Promise.resolve();
    try {
      await beforeBack.call(lastItem);
    }
    catch (_error) {
      // back prevented
      return;
    }
    lastItem.remove();
    return lastItem;
  }
  /**
   * Sets focus on the component.
   */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
    const { items } = this;
    const activeItem = items[items.length - 1];
    return activeItem?.setFocus();
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.itemMutationObserver?.observe(this.el, { childList: true, subtree: true });
    this.updateFlowProps();
  }
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_0__.a)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_0__.s)(this);
  }
  disconnectedCallback() {
    this.itemMutationObserver?.disconnect();
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  async handleItemBackClick(event) {
    if (event.defaultPrevented) {
      return;
    }
    await this.back();
    return this.setFocus();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { flowDirection } = this;
    const frameDirectionClasses = {
      [CSS.frame]: true,
      [CSS.frameAdvancing]: flowDirection === "advancing",
      [CSS.frameRetreating]: flowDirection === "retreating",
    };
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: frameDirectionClasses }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", null)));
  }
  get el() { return this; }
  static get style() { return flowCss; }
}, [1, "calcite-flow", {
    "customItemSelectors": [1, "custom-item-selectors"],
    "flowDirection": [32],
    "itemCount": [32],
    "items": [32],
    "back": [64],
    "setFocus": [64]
  }, [[0, "calciteFlowItemBack", "handleItemBackClick"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-flow"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-flow":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Flow);
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteFlow = Flow;
const defineCustomElement = defineCustomElement$1;




/***/ }),

/***/ 82850:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ setUpLoadableComponent),
/* harmony export */   c: () => (/* binding */ componentFocusable),
/* harmony export */   s: () => (/* binding */ setComponentLoaded)
/* harmony export */ });
/* unused harmony export b */
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36705);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


const resolveMap = new WeakMap();
const promiseMap = new WeakMap();
/**
 * This helper util sets up the component for the ability to know when the component has been loaded.
 *
 * This should be used in the `componentWillLoad` lifecycle hook.
 *
 * ```
 * componentWillLoad(): void {
 *   setUpLoadableComponent(this);
 * }
 * ```
 *
 * @param component
 */
function setUpLoadableComponent(component) {
  promiseMap.set(component, new Promise((resolve) => resolveMap.set(component, resolve)));
}
/**
 * This helper util lets the loadable component know that it is now loaded.
 *
 * This should be used in the `componentDidLoad` lifecycle hook.
 *
 * ```
 * componentDidLoad(): void {
 *   setComponentLoaded(this);
 * }
 * ```
 *
 * @param component
 */
function setComponentLoaded(component) {
  resolveMap.get(component)();
}
/**
 * This helper util can be used to ensure a component has been loaded (The "componentDidLoad" Stencil lifecycle method has been called).
 *
 * Requires requires `LoadableComponent` to be implemented.
 *
 * A component developer can await this method before proceeding with any logic that requires a component to be loaded first.
 *
 * ```
 * async myMethod(): Promise<void> {
 *   await componentLoaded(this);
 * }
 * ```
 *
 * @param component
 * @returns Promise<void>
 */
function componentLoaded(component) {
  return promiseMap.get(component);
}
/**
 * This helper util can be used to ensuring the component is loaded and rendered by the browser (The "componentDidLoad" Stencil lifecycle method has been called and any internal elements are focusable).
 *
 * Requires requires `LoadableComponent` to be implemented.
 *
 * A component developer can await this method before proceeding with any logic that requires a component to be loaded first and then an internal element be focused.
 *
 * ```
 * async setFocus(): Promise<void> {
 *   await componentFocusable(this);
 *   this.internalElement?.focus();
 * }
 * ```
 *
 * @param component
 * @returns Promise<void>
 */
async function componentFocusable(component) {
  await componentLoaded(component);
  if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__/* .Build */ .L2.isBrowser) {
    return;
  }
  (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__/* .forceUpdate */ .$x)(component);
  return new Promise((resolve) => requestAnimationFrame(() => resolve()));
}




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