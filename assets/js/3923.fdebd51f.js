"use strict";
exports.id = 3923;
exports.ids = [3923];
exports.modules = {

/***/ 83923:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CalciteNotice: () => (/* binding */ CalciteNotice),
  defineCustomElement: () => (/* binding */ defineCustomElement)
});

// EXTERNAL MODULE: ../node_modules/@stencil/core/internal/client/index.js + 1 modules
var client = __webpack_require__(36705);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/components/conditionalSlot.js
var conditionalSlot = __webpack_require__(27804);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/components/dom.js
var dom = __webpack_require__(72936);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/components/loadable.js
var loadable = __webpack_require__(82850);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/components/locale.js
var locale = __webpack_require__(52572);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/components/t9n.js
var t9n = __webpack_require__(49263);
;// ../node_modules/@esri/calcite-components/dist/components/resources.js
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
var KindIcons;
(function (KindIcons) {
  KindIcons["brand"] = "lightbulb";
  KindIcons["danger"] = "exclamationMarkTriangle";
  KindIcons["info"] = "information";
  KindIcons["success"] = "checkCircle";
  KindIcons["warning"] = "exclamationMarkTriangle";
})(KindIcons || (KindIcons = {}));



// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/components/openCloseComponent.js
var openCloseComponent = __webpack_require__(43301);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/components/component.js
var component = __webpack_require__(12599);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/components/icon.js
var icon = __webpack_require__(70999);
;// ../node_modules/@esri/calcite-components/dist/components/calcite-notice.js
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */











const SLOTS = {
  title: "title",
  message: "message",
  link: "link",
  actionsEnd: "actions-end",
};
const CSS = {
  actionsEnd: "actions-end",
  close: "notice-close",
  container: "container",
  content: "notice-content",
  icon: "notice-icon",
};

const noticeCss = ":host([scale=s]){--calcite-notice-spacing-token-small:0.5rem;--calcite-notice-spacing-token-large:0.75rem}:host([scale=s]) .container slot[name=title]::slotted(*),:host([scale=s]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=s]) .container slot[name=message]::slotted(*),:host([scale=s]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) .notice-close{padding:0.5rem}:host([scale=m]){--calcite-notice-spacing-token-small:0.75rem;--calcite-notice-spacing-token-large:1rem}:host([scale=m]) .container slot[name=title]::slotted(*),:host([scale=m]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=m]) .container slot[name=message]::slotted(*),:host([scale=m]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=l]){--calcite-notice-spacing-token-small:1rem;--calcite-notice-spacing-token-large:1.25rem}:host([scale=l]) .container slot[name=title]::slotted(*),:host([scale=l]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale=l]) .container slot[name=message]::slotted(*),:host([scale=l]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([width=auto]){--calcite-notice-width:auto}:host([width=half]){--calcite-notice-width:50%}:host([width=full]){--calcite-notice-width:100%}:host{margin-inline:auto;display:none;max-inline-size:100%;align-items:center;inline-size:var(--calcite-notice-width)}.container{pointer-events:none;margin-block:0px;box-sizing:border-box;display:none;inline-size:100%;background-color:var(--calcite-ui-foreground-1);opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;max-block-size:0;text-align:start;border-inline-start:0px solid;box-shadow:0 0 0 0 transparent}.notice-close{outline-color:transparent}.notice-close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host{display:flex}:host([open]) .container{pointer-events:auto;display:flex;max-block-size:100%;align-items:center;border-width:2px;opacity:1;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.container slot[name=title]::slotted(*),.container *::slotted([slot=title]){margin:0px;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.container slot[name=message]::slotted(*),.container *::slotted([slot=message]){margin:0px;display:inline;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2);margin-inline-end:var(--calcite-notice-spacing-token-small)}.notice-content{box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;display:flex;min-inline-size:0px;flex-direction:column;overflow-wrap:break-word;flex:1 1 0;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:0 var(--calcite-notice-spacing-token-small)}.notice-content:first-of-type:not(:only-child){padding-inline-start:var(--calcite-notice-spacing-token-large)}.notice-content:only-of-type{padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large)}.notice-icon{display:flex;align-items:center;box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto}.notice-close{display:flex;cursor:pointer;align-items:center;align-self:stretch;border-style:none;background-color:transparent;color:var(--calcite-ui-text-3);outline:2px solid transparent;outline-offset:2px;box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;-webkit-appearance:none}.notice-close:hover,.notice-close:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.notice-close:active{background-color:var(--calcite-ui-foreground-3)}.actions-end{display:flex;align-self:stretch}:host([kind=brand]) .container{border-color:var(--calcite-ui-brand)}:host([kind=brand]) .container .notice-icon{color:var(--calcite-ui-brand)}:host([kind=info]) .container{border-color:var(--calcite-ui-info)}:host([kind=info]) .container .notice-icon{color:var(--calcite-ui-info)}:host([kind=danger]) .container{border-color:var(--calcite-ui-danger)}:host([kind=danger]) .container .notice-icon{color:var(--calcite-ui-danger)}:host([kind=success]) .container{border-color:var(--calcite-ui-success)}:host([kind=success]) .container .notice-icon{color:var(--calcite-ui-success)}:host([kind=warning]) .container{border-color:var(--calcite-ui-warning)}:host([kind=warning]) .container .notice-icon{color:var(--calcite-ui-warning)}:host([hidden]){display:none}[hidden]{display:none}";

const Notice = /*@__PURE__*/ (0,client/* proxyCustomElement */.w$)(class extends client/* HTMLElement */.wt {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteNoticeBeforeClose = (0,client/* createEvent */.lh)(this, "calciteNoticeBeforeClose", 6);
    this.calciteNoticeBeforeOpen = (0,client/* createEvent */.lh)(this, "calciteNoticeBeforeOpen", 6);
    this.calciteNoticeClose = (0,client/* createEvent */.lh)(this, "calciteNoticeClose", 6);
    this.calciteNoticeOpen = (0,client/* createEvent */.lh)(this, "calciteNoticeOpen", 6);
    this.setTransitionEl = (el) => {
      this.transitionEl = el;
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.close = () => {
      this.open = false;
    };
    this.openTransitionProp = "opacity";
    this.open = false;
    this.kind = "brand";
    this.closable = false;
    this.icon = undefined;
    this.iconFlipRtl = false;
    this.scale = "m";
    this.width = "auto";
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.effectiveLocale = undefined;
    this.defaultMessages = undefined;
  }
  openHandler() {
    (0,openCloseComponent.o)(this);
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  updateRequestedIcon() {
    this.requestedIcon = (0,dom.h)(KindIcons, this.icon, this.kind);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,conditionalSlot.c)(this);
    (0,locale.c)(this);
    (0,t9n.c)(this);
  }
  disconnectedCallback() {
    (0,conditionalSlot.d)(this);
    (0,locale.d)(this);
    (0,t9n.d)(this);
  }
  async componentWillLoad() {
    (0,loadable.a)(this);
    this.requestedIcon = (0,dom.h)(KindIcons, this.icon, this.kind);
    await (0,t9n.s)(this);
    if (this.open) {
      (0,openCloseComponent.o)(this);
    }
  }
  componentDidLoad() {
    (0,loadable.s)(this);
  }
  render() {
    const { el } = this;
    const closeButton = ((0,client.h)("button", { "aria-label": this.messages.close, class: CSS.close, onClick: this.close,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.closeButton = el) }, (0,client.h)("calcite-icon", { icon: "x", scale: (0,component.g)(this.scale) })));
    const hasActionEnd = (0,dom.g)(el, SLOTS.actionsEnd);
    return ((0,client.h)("div", { class: CSS.container,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setTransitionEl }, this.requestedIcon ? ((0,client.h)("div", { class: CSS.icon }, (0,client.h)("calcite-icon", { flipRtl: this.iconFlipRtl, icon: this.requestedIcon, scale: (0,component.g)(this.scale) }))) : null, (0,client.h)("div", { class: CSS.content }, (0,client.h)("slot", { name: SLOTS.title }), (0,client.h)("slot", { name: SLOTS.message }), (0,client.h)("slot", { name: SLOTS.link })), hasActionEnd ? ((0,client.h)("div", { class: CSS.actionsEnd }, (0,client.h)("slot", { name: SLOTS.actionsEnd }))) : null, this.closable ? closeButton : null));
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await (0,loadable.c)(this);
    const noticeLinkEl = this.el.querySelector("calcite-link");
    if (!this.closeButton && !noticeLinkEl) {
      return;
    }
    if (noticeLinkEl) {
      return noticeLinkEl.setFocus();
    }
    else if (this.closeButton) {
      this.closeButton.focus();
    }
  }
  onBeforeClose() {
    this.calciteNoticeBeforeClose.emit();
  }
  onBeforeOpen() {
    this.calciteNoticeBeforeOpen.emit();
  }
  onClose() {
    this.calciteNoticeClose.emit();
  }
  onOpen() {
    this.calciteNoticeOpen.emit();
  }
  effectiveLocaleChange() {
    (0,t9n.u)(this, this.effectiveLocale);
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "open": ["openHandler"],
    "messageOverrides": ["onMessagesChange"],
    "icon": ["updateRequestedIcon"],
    "kind": ["updateRequestedIcon"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return noticeCss; }
}, [1, "calcite-notice", {
    "open": [1540],
    "kind": [513],
    "closable": [516],
    "icon": [520],
    "iconFlipRtl": [516, "icon-flip-rtl"],
    "scale": [513],
    "width": [513],
    "messages": [1040],
    "messageOverrides": [1040],
    "effectiveLocale": [32],
    "defaultMessages": [32],
    "setFocus": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-notice", "calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-notice":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Notice);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,icon.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteNotice = Notice;
const defineCustomElement = defineCustomElement$1;




/***/ }),

/***/ 12599:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ getIconScale)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
function getIconScale(componentScale) {
  return componentScale === "l" ? "m" : "s";
}




/***/ }),

/***/ 27804:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ connectConditionalSlotComponent),
/* harmony export */   d: () => (/* binding */ disconnectConditionalSlotComponent)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36705);
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36691);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */



const observed = new Set();
let mutationObserver;
const observerOptions = { childList: true };
/**
 * Helper to set up a conditional slot component on connectedCallback.
 *
 * @param component
 * @deprecated Use `onSlotchange` event with `slotChangeHasAssignedElement` DOM utility instead.
 *
 * ```
 * <slot onSlotchange={(event) => this.mySlotHasElement = slotChangeHasAssignedElement(event)} />}
 * ```
 */
function connectConditionalSlotComponent(component) {
  if (!mutationObserver) {
    mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_0__.c)("mutation", processMutations);
  }
  mutationObserver.observe(component.el, observerOptions);
}
/**
 * Helper to tear down a conditional slot component on disconnectedCallback.
 *
 * @param component
 * @deprecated Use `onSlotchange` event with `slotChangeHasAssignedElement` DOM utility instead.
 *
 * ```
 * <slot onSlotchange={(event) => this.mySlotHasElement = slotChangeHasAssignedElement(event)} />}
 * ```
 */
function disconnectConditionalSlotComponent(component) {
  observed.delete(component.el);
  // we explicitly process queued mutations and disconnect and reconnect
  // the observer until MutationObserver gets an `unobserve` method
  // see https://github.com/whatwg/dom/issues/126
  processMutations(mutationObserver.takeRecords());
  mutationObserver.disconnect();
  for (const [element] of observed.entries()) {
    mutationObserver.observe(element, observerOptions);
  }
}
function processMutations(mutations) {
  mutations.forEach(({ target }) => {
    (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__/* .forceUpdate */ .$x)(target);
  });
}




/***/ }),

/***/ 70999:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ Icon),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36705);
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72936);
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36691);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */




const CSS = {
  icon: "icon",
  flipRtl: "flip-rtl",
};

/**
 * Icon data cache.
 * Exported for testing purposes.
 *
 * @private
 */
const iconCache = {};
/**
 * Icon request cache.
 * Exported for testing purposes.
 *
 * @private
 */
const requestCache = {};
const scaleToPx = {
  s: 16,
  m: 24,
  l: 32,
};
async function fetchIcon({ icon, scale }) {
  const size = scaleToPx[scale];
  const name = normalizeIconName(icon);
  const filled = name.charAt(name.length - 1) === "F";
  const iconName = filled ? name.substring(0, name.length - 1) : name;
  const id = `${iconName}${size}${filled ? "F" : ""}`;
  if (iconCache[id]) {
    return iconCache[id];
  }
  if (!requestCache[id]) {
    requestCache[id] = fetch((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__/* .getAssetPath */ .OX)(`./assets/icon/${id}.json`))
      .then((resp) => resp.json())
      .catch(() => {
      console.error(`"${id}" is not a valid calcite-ui-icon name`);
      return "";
    });
  }
  const path = await requestCache[id];
  iconCache[id] = path;
  return path;
}
/**
 * Normalize the icon name to match the path data module exports.
 * Exported for testing purposes.
 *
 * @param name – an icon name that can be either kebab or camel-cased
 * @private
 */
function normalizeIconName(name) {
  const numberLeadingName = !isNaN(Number(name.charAt(0)));
  const parts = name.split("-");
  const kebabCased = parts.length > 0;
  if (kebabCased) {
    const firstNonDigitInPartPattern = /[a-z]/i;
    name = parts
      .map((part, partIndex) => {
      return part.replace(firstNonDigitInPartPattern, function replacer(match, offset) {
        const isFirstCharInName = partIndex === 0 && offset === 0;
        if (isFirstCharInName) {
          return match;
        }
        return match.toUpperCase();
      });
    })
      .join("");
  }
  return numberLeadingName ? `i${name}` : name;
}

const iconCss = ":host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}";

const Icon = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__/* .proxyCustomElement */ .w$)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__/* .HTMLElement */ .wt {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.icon = null;
    this.flipRtl = false;
    this.scale = "m";
    this.textLabel = undefined;
    this.pathData = undefined;
    this.visible = false;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.waitUntilVisible(() => {
      this.visible = true;
      this.loadIconPathData();
    });
  }
  disconnectedCallback() {
    this.intersectionObserver?.disconnect();
    this.intersectionObserver = null;
  }
  async componentWillLoad() {
    this.loadIconPathData();
  }
  render() {
    const { el, flipRtl, pathData, scale, textLabel } = this;
    const dir = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.b)(el);
    const size = scaleToPx[scale];
    const semantic = !!textLabel;
    const paths = [].concat(pathData || "");
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__/* .Host */ .xr, { "aria-hidden": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(!semantic), "aria-label": semantic ? textLabel : null, role: semantic ? "img" : null }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("svg", { "aria-hidden": "true", class: {
        [CSS.flipRtl]: dir === "rtl" && flipRtl,
        svg: true,
      }, fill: "currentColor", height: "100%", viewBox: `0 0 ${size} ${size}`, width: "100%", xmlns: "http://www.w3.org/2000/svg" }, paths.map((path) => typeof path === "string" ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("path", { d: path })) : ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("path", { d: path.d, opacity: "opacity" in path ? path.opacity : 1 }))))));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  async loadIconPathData() {
    const { icon, scale, visible } = this;
    if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__/* .Build */ .L2.isBrowser || !icon || !visible) {
      return;
    }
    const pathData = await fetchIcon({ icon, scale });
    // While the fetchIcon method is awaiting response, the icon requested can change. This check is to verify the response received belongs to the current icon.
    if (icon !== this.icon) {
      return;
    }
    this.pathData = pathData;
  }
  waitUntilVisible(callback) {
    this.intersectionObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_2__.c)("intersection", (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.intersectionObserver.disconnect();
          this.intersectionObserver = null;
          callback();
        }
      });
    }, { rootMargin: "50px" });
    if (!this.intersectionObserver) {
      callback();
      return;
    }
    this.intersectionObserver.observe(this.el);
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "icon": ["loadIconPathData"],
    "scale": ["loadIconPathData"]
  }; }
  static get style() { return iconCss; }
}, [1, "calcite-icon", {
    "icon": [513],
    "flipRtl": [516, "flip-rtl"],
    "scale": [513],
    "textLabel": [1, "text-label"],
    "pathData": [32],
    "visible": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Icon);
      }
      break;
  } });
}
defineCustomElement();




/***/ }),

/***/ 66760:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ isActivationKey),
/* harmony export */   n: () => (/* binding */ numberKeys)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
function isActivationKey(key) {
  return key === "Enter" || key === " ";
}
const numberKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];




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

/***/ 52572:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ BigDecimal),
/* harmony export */   c: () => (/* binding */ connectLocalized),
/* harmony export */   d: () => (/* binding */ disconnectLocalized),
/* harmony export */   e: () => (/* binding */ addLocalizedTrailingDecimalZeros),
/* harmony export */   g: () => (/* binding */ getSupportedLocale),
/* harmony export */   i: () => (/* binding */ isValidNumber),
/* harmony export */   n: () => (/* binding */ numberStringFormatter),
/* harmony export */   p: () => (/* binding */ parseNumberString),
/* harmony export */   s: () => (/* binding */ sanitizeNumberString)
/* harmony export */ });
/* unused harmony exports a, b, f */
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72936);
/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66760);
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36691);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */




const unnecessaryDecimal = new RegExp(`\\${"."}(0+)?$`);
const trailingZeros = new RegExp("0+$");
// adopted from https://stackoverflow.com/a/66939244
class BigDecimal {
  constructor(input) {
    if (input instanceof BigDecimal) {
      return input;
    }
    const [integers, decimals] = expandExponentialNumberString(input).split(".").concat("");
    this.value =
      BigInt(integers + decimals.padEnd(BigDecimal.DECIMALS, "0").slice(0, BigDecimal.DECIMALS)) +
        BigInt(BigDecimal.ROUNDED && decimals[BigDecimal.DECIMALS] >= "5");
    this.isNegative = input.charAt(0) === "-";
  }
  getIntegersAndDecimals() {
    const s = this.value
      .toString()
      .replace("-", "")
      .padStart(BigDecimal.DECIMALS + 1, "0");
    const integers = s.slice(0, -BigDecimal.DECIMALS);
    const decimals = s.slice(-BigDecimal.DECIMALS).replace(trailingZeros, "");
    return { integers, decimals };
  }
  toString() {
    const { integers, decimals } = this.getIntegersAndDecimals();
    return `${this.isNegative ? "-" : ""}${integers}${decimals.length ? "." + decimals : ""}`;
  }
  formatToParts(formatter) {
    const { integers, decimals } = this.getIntegersAndDecimals();
    const parts = formatter.numberFormatter.formatToParts(BigInt(integers));
    this.isNegative && parts.unshift({ type: "minusSign", value: formatter.minusSign });
    if (decimals.length) {
      parts.push({ type: "decimal", value: formatter.decimal });
      decimals.split("").forEach((char) => parts.push({ type: "fraction", value: char }));
    }
    return parts;
  }
  format(formatter) {
    const { integers, decimals } = this.getIntegersAndDecimals();
    const integersFormatted = `${this.isNegative ? formatter.minusSign : ""}${formatter.numberFormatter.format(BigInt(integers))}`;
    const decimalsFormatted = decimals.length
      ? `${formatter.decimal}${decimals
        .split("")
        .map((char) => formatter.numberFormatter.format(Number(char)))
        .join("")}`
      : "";
    return `${integersFormatted}${decimalsFormatted}`;
  }
  add(n) {
    return BigDecimal.fromBigInt(this.value + new BigDecimal(n).value);
  }
  subtract(n) {
    return BigDecimal.fromBigInt(this.value - new BigDecimal(n).value);
  }
  multiply(n) {
    return BigDecimal._divRound(this.value * new BigDecimal(n).value, BigDecimal.SHIFT);
  }
  divide(n) {
    return BigDecimal._divRound(this.value * BigDecimal.SHIFT, new BigDecimal(n).value);
  }
}
// Configuration: constants
BigDecimal.DECIMALS = 100; // number of decimals on all instances
BigDecimal.ROUNDED = true; // numbers are truncated (false) or rounded (true)
BigDecimal.SHIFT = BigInt("1" + "0".repeat(BigDecimal.DECIMALS)); // derived constant
BigDecimal._divRound = (dividend, divisor) => BigDecimal.fromBigInt(dividend / divisor + (BigDecimal.ROUNDED ? ((dividend * BigInt(2)) / divisor) % BigInt(2) : BigInt(0)));
BigDecimal.fromBigInt = (bigint) => Object.assign(Object.create(BigDecimal.prototype), { value: bigint, isNegative: bigint < BigInt(0) });
function isValidNumber(numberString) {
  return !(!numberString || isNaN(Number(numberString)));
}
function parseNumberString(numberString) {
  if (!numberString || !stringContainsNumbers(numberString)) {
    return "";
  }
  return sanitizeExponentialNumberString(numberString, (nonExpoNumString) => {
    let containsDecimal = false;
    const result = nonExpoNumString
      .split("")
      .filter((value, i) => {
      if (value.match(/\./g) && !containsDecimal) {
        containsDecimal = true;
        return true;
      }
      if (value.match(/\-/g) && i === 0) {
        return true;
      }
      return _key_js__WEBPACK_IMPORTED_MODULE_1__.n.includes(value);
    })
      .join("");
    return isValidNumber(result) ? new BigDecimal(result).toString() : "";
  });
}
// regex for number sanitization
const allLeadingZerosOptionallyNegative = /^([-0])0+(?=\d)/;
const decimalOnlyAtEndOfString = /(?!^\.)\.$/;
const allHyphensExceptTheStart = /(?!^-)-/g;
const isNegativeDecimalOnlyZeros = /^-\b0\b\.?0*$/;
const hasTrailingDecimalZeros = /0*$/;
const sanitizeNumberString = (numberString) => sanitizeExponentialNumberString(numberString, (nonExpoNumString) => {
  const sanitizedValue = nonExpoNumString
    .replace(allHyphensExceptTheStart, "")
    .replace(decimalOnlyAtEndOfString, "")
    .replace(allLeadingZerosOptionallyNegative, "$1");
  return isValidNumber(sanitizedValue)
    ? isNegativeDecimalOnlyZeros.test(sanitizedValue)
      ? sanitizedValue
      : getBigDecimalAsString(sanitizedValue)
    : nonExpoNumString;
});
function getBigDecimalAsString(sanitizedValue) {
  const sanitizedValueDecimals = sanitizedValue.split(".")[1];
  const value = new BigDecimal(sanitizedValue).toString();
  const [bigDecimalValueInteger, bigDecimalValueDecimals] = value.split(".");
  return sanitizedValueDecimals && bigDecimalValueDecimals !== sanitizedValueDecimals
    ? `${bigDecimalValueInteger}.${sanitizedValueDecimals}`
    : value;
}
function sanitizeExponentialNumberString(numberString, func) {
  if (!numberString) {
    return numberString;
  }
  const firstE = numberString.toLowerCase().indexOf("e") + 1;
  if (!firstE) {
    return func(numberString);
  }
  return numberString
    .replace(/[eE]*$/g, "")
    .substring(0, firstE)
    .concat(numberString.slice(firstE).replace(/[eE]/g, ""))
    .split(/[eE]/)
    .map((section, i) => (i === 1 ? func(section.replace(/\./g, "")) : func(section)))
    .join("e")
    .replace(/^e/, "1e");
}
/**
 * Converts an exponential notation numberString into decimal notation.
 * BigInt doesn't support exponential notation, so this is required to maintain precision
 *
 * @param {string} numberString - pre-validated exponential or decimal number
 * @returns {string} numberString in decimal notation
 */
function expandExponentialNumberString(numberString) {
  const exponentialParts = numberString.split(/[eE]/);
  if (exponentialParts.length === 1) {
    return numberString;
  }
  const number = +numberString;
  if (Number.isSafeInteger(number)) {
    return `${number}`;
  }
  const isNegative = numberString.charAt(0) === "-";
  const magnitude = +exponentialParts[1];
  const decimalParts = exponentialParts[0].split(".");
  const integers = (isNegative ? decimalParts[0].substring(1) : decimalParts[0]) || "";
  const decimals = decimalParts[1] || "";
  const shiftDecimalLeft = (integers, magnitude) => {
    const magnitudeDelta = Math.abs(magnitude) - integers.length;
    const leftPaddedZeros = magnitudeDelta > 0 ? `${"0".repeat(magnitudeDelta)}${integers}` : integers;
    const shiftedDecimal = `${leftPaddedZeros.slice(0, magnitude)}${"."}${leftPaddedZeros.slice(magnitude)}`;
    return shiftedDecimal;
  };
  const shiftDecimalRight = (decimals, magnitude) => {
    const rightPaddedZeros = magnitude > decimals.length ? `${decimals}${"0".repeat(magnitude - decimals.length)}` : decimals;
    const shiftedDecimal = `${rightPaddedZeros.slice(0, magnitude)}${"."}${rightPaddedZeros.slice(magnitude)}`;
    return shiftedDecimal;
  };
  const expandedNumberString = magnitude > 0
    ? `${integers}${shiftDecimalRight(decimals, magnitude)}`
    : `${shiftDecimalLeft(integers, magnitude)}${decimals}`;
  return `${isNegative ? "-" : ""}${expandedNumberString.charAt(0) === "." ? "0" : ""}${expandedNumberString
    .replace(unnecessaryDecimal, "")
    .replace(allLeadingZerosOptionallyNegative, "")}`;
}
function stringContainsNumbers(string) {
  return _key_js__WEBPACK_IMPORTED_MODULE_1__.n.some((number) => string.includes(number));
}
/**
 * Adds localized trailing decimals zero values to the number string.
 * BigInt conversion to string removes the trailing decimal zero values (Ex: 1.000 is returned as 1). This method helps adding them back.
 *
 * @param {string} localizedValue - localized number string value
 * @param {string} value - current value in the input field
 * @param {NumberStringFormat} formatter - numberStringFormatter instance to localize the number value
 * @returns {string} localized number string value
 */
function addLocalizedTrailingDecimalZeros(localizedValue, value, formatter) {
  const decimals = value.split(".")[1];
  if (decimals) {
    const trailingDecimalZeros = decimals.match(hasTrailingDecimalZeros)[0];
    if (trailingDecimalZeros &&
      formatter.delocalize(localizedValue).length !== value.length &&
      decimals.indexOf("e") === -1) {
      const decimalSeparator = formatter.decimal;
      localizedValue = !localizedValue.includes(decimalSeparator)
        ? `${localizedValue}${decimalSeparator}`
        : localizedValue;
      return localizedValue.padEnd(localizedValue.length + trailingDecimalZeros.length, formatter.localize("0"));
    }
  }
  return localizedValue;
}

const defaultLocale = "en";
const t9nLocales = [
  "ar",
  "bg",
  "bs",
  "ca",
  "cs",
  "da",
  "de",
  "el",
  defaultLocale,
  "es",
  "et",
  "fi",
  "fr",
  "he",
  "hr",
  "hu",
  "id",
  "it",
  "ja",
  "ko",
  "lt",
  "lv",
  "no",
  "nl",
  "pl",
  "pt-BR",
  "pt-PT",
  "ro",
  "ru",
  "sk",
  "sl",
  "sr",
  "sv",
  "th",
  "tr",
  "uk",
  "vi",
  "zh-CN",
  "zh-HK",
  "zh-TW",
];
const locales = [
  "ar",
  "bg",
  "bs",
  "ca",
  "cs",
  "da",
  "de",
  "de-AT",
  "de-CH",
  "el",
  defaultLocale,
  "en-AU",
  "en-CA",
  "en-GB",
  "es",
  "es-MX",
  "et",
  "fi",
  "fr",
  "fr-CH",
  "he",
  "hi",
  "hr",
  "hu",
  "id",
  "it",
  "it-CH",
  "ja",
  "ko",
  "lt",
  "lv",
  "mk",
  "no",
  "nl",
  "pl",
  "pt",
  "pt-PT",
  "ro",
  "ru",
  "sk",
  "sl",
  "sr",
  "sv",
  "th",
  "tr",
  "uk",
  "vi",
  "zh-CN",
  "zh-HK",
  "zh-TW",
];
const numberingSystems = [
  "arab",
  "arabext",
  "bali",
  "beng",
  "deva",
  "fullwide",
  "gujr",
  "guru",
  "hanidec",
  "khmr",
  "knda",
  "laoo",
  "latn",
  "limb",
  "mlym",
  "mong",
  "mymr",
  "orya",
  "tamldec",
  "telu",
  "thai",
  "tibt",
];
const isNumberingSystemSupported = (numberingSystem) => numberingSystems.includes(numberingSystem);
const browserNumberingSystem = new Intl.NumberFormat().resolvedOptions().numberingSystem;
// for consistent browser behavior, we normalize numberingSystem to prevent the browser-inferred value
// see https://github.com/Esri/calcite-design-system/issues/3079#issuecomment-1168964195 for more info
const defaultNumberingSystem = browserNumberingSystem === "arab" || !isNumberingSystemSupported(browserNumberingSystem)
  ? "latn"
  : browserNumberingSystem;
const getSupportedNumberingSystem = (numberingSystem) => isNumberingSystemSupported(numberingSystem) ? numberingSystem : defaultNumberingSystem;
/**
 * Gets the locale that best matches the context.
 *
 * @param locale – the BCP 47 locale code
 * @param context - specifies whether the locale code should match in the context of CLDR or T9N (translation)
 */
function getSupportedLocale(locale, context = "cldr") {
  const contextualLocales = context === "cldr" ? locales : t9nLocales;
  if (!locale) {
    return defaultLocale;
  }
  if (contextualLocales.includes(locale)) {
    return locale;
  }
  locale = locale.toLowerCase();
  // we support both 'nb' and 'no' (BCP 47) for Norwegian but only `no` has corresponding bundle
  if (locale === "nb") {
    return "no";
  }
  // we use `pt-BR` as it will have the same translations as `pt`, which has no corresponding bundle
  if (context === "t9n" && locale === "pt") {
    return "pt-BR";
  }
  if (locale.includes("-")) {
    locale = locale.replace(/(\w+)-(\w+)/, (_match, language, region) => `${language}-${region.toUpperCase()}`);
    if (!contextualLocales.includes(locale)) {
      locale = locale.split("-")[0];
    }
  }
  // we can `zh-CN` as base translation for chinese locales which has no corresponding bundle.
  if (locale === "zh") {
    return "zh-CN";
  }
  if (!contextualLocales.includes(locale)) {
    console.warn(`Translations for the "${locale}" locale are not available and will fall back to the default, English (en).`);
    return defaultLocale;
  }
  return locale;
}
const connectedComponents = new Set();
/**
 * This utility sets up internals for messages support.
 *
 * It needs to be called in `connectedCallback` before any logic that depends on locale
 *
 * @param component
 */
function connectLocalized(component) {
  updateEffectiveLocale(component);
  if (connectedComponents.size === 0) {
    mutationObserver?.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
      subtree: true,
    });
  }
  connectedComponents.add(component);
}
/**
 * This is only exported for components that implemented the now deprecated `locale` prop.
 *
 * Do not use this utils for new components.
 *
 * @param component
 */
function updateEffectiveLocale(component) {
  component.effectiveLocale = getLocale(component);
}
/**
 * This utility tears down internals for messages support.
 *
 * It needs to be called in `disconnectedCallback`
 *
 * @param component
 */
function disconnectLocalized(component) {
  connectedComponents.delete(component);
  if (connectedComponents.size === 0) {
    mutationObserver.disconnect();
  }
}
const mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_2__.c)("mutation", (records) => {
  records.forEach((record) => {
    const el = record.target;
    connectedComponents.forEach((component) => {
      const inUnrelatedSubtree = !(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.x)(el, component.el);
      if (inUnrelatedSubtree) {
        return;
      }
      const closestLangEl = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.c)(component.el, "[lang]");
      if (!closestLangEl) {
        component.effectiveLocale = defaultLocale;
        return;
      }
      const closestLang = closestLangEl.lang;
      component.effectiveLocale =
        // user set lang="" means unknown language, so we use default
        closestLangEl.hasAttribute("lang") && closestLang === "" ? defaultLocale : closestLang;
    });
  });
});
/**
 * This util helps resolve a component's locale.
 * It will also fall back on the deprecated `locale` if a component implemented this previously.
 *
 * @param component
 */
function getLocale(component) {
  return (component.el.lang ||
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.c)(component.el, "[lang]")?.lang ||
    document.documentElement.lang ||
    defaultLocale);
}
/**
 * This util formats and parses numbers for localization
 */
class NumberStringFormat {
  constructor() {
    this.delocalize = (numberString) => 
    // For performance, (de)localization is skipped if the formatter isn't initialized.
    // In order to localize/delocalize, e.g. when lang/numberingSystem props are not default values,
    // `numberFormatOptions` must be set in a component to create and cache the formatter.
    this._numberFormatOptions
      ? sanitizeExponentialNumberString(numberString, (nonExpoNumString) => nonExpoNumString
        .replace(new RegExp(`[${this._minusSign}]`, "g"), "-")
        .replace(new RegExp(`[${this._group}]`, "g"), "")
        .replace(new RegExp(`[${this._decimal}]`, "g"), ".")
        .replace(new RegExp(`[${this._digits.join("")}]`, "g"), this._getDigitIndex))
      : numberString;
    this.localize = (numberString) => this._numberFormatOptions
      ? sanitizeExponentialNumberString(numberString, (nonExpoNumString) => isValidNumber(nonExpoNumString.trim())
        ? new BigDecimal(nonExpoNumString.trim())
          .format(this)
          .replace(new RegExp(`[${this._actualGroup}]`, "g"), this._group)
        : nonExpoNumString)
      : numberString;
  }
  get group() {
    return this._group;
  }
  get decimal() {
    return this._decimal;
  }
  get minusSign() {
    return this._minusSign;
  }
  get digits() {
    return this._digits;
  }
  get numberFormatter() {
    return this._numberFormatter;
  }
  get numberFormatOptions() {
    return this._numberFormatOptions;
  }
  /**
   * numberFormatOptions needs to be set before localize/delocalize is called to ensure the options are up to date
   */
  set numberFormatOptions(options) {
    options.locale = getSupportedLocale(options?.locale);
    options.numberingSystem = getSupportedNumberingSystem(options?.numberingSystem);
    if (
    // No need to create the formatter if `locale` and `numberingSystem`
    // are the default values and `numberFormatOptions` has not been set
    (!this._numberFormatOptions &&
      options.locale === defaultLocale &&
      options.numberingSystem === defaultNumberingSystem &&
      // don't skip initialization if any options besides locale/numberingSystem are set
      Object.keys(options).length === 2) ||
      // cache formatter by only recreating when options change
      JSON.stringify(this._numberFormatOptions) === JSON.stringify(options)) {
      return;
    }
    this._numberFormatOptions = options;
    this._numberFormatter = new Intl.NumberFormat(this._numberFormatOptions.locale, this._numberFormatOptions);
    this._digits = [
      ...new Intl.NumberFormat(this._numberFormatOptions.locale, {
        useGrouping: false,
        numberingSystem: this._numberFormatOptions.numberingSystem,
      }).format(9876543210),
    ].reverse();
    const index = new Map(this._digits.map((d, i) => [d, i]));
    // numberingSystem is parsed to return consistent decimal separator across browsers.
    const parts = new Intl.NumberFormat(this._numberFormatOptions.locale, {
      numberingSystem: this._numberFormatOptions.numberingSystem,
    }).formatToParts(-12345678.9);
    this._actualGroup = parts.find((d) => d.type === "group").value;
    // change whitespace group separators to the unicode non-breaking space (nbsp)
    this._group = this._actualGroup.trim().length === 0 || this._actualGroup == " " ? "\u00A0" : this._actualGroup;
    this._decimal = parts.find((d) => d.type === "decimal").value;
    this._minusSign = parts.find((d) => d.type === "minusSign").value;
    this._getDigitIndex = (d) => index.get(d);
  }
}
const numberStringFormatter = new NumberStringFormat();
/**
 * Exported for testing purposes only.
 *
 * @internal
 */
let dateTimeFormatCache;
/**
 * Used to ensure all cached formats are for the same locale.
 *
 * @internal
 */
let previousLocaleUsedForCaching;
/**
 * Generates a cache key for date time format lookups.
 *
 * @internal
 */
function buildDateTimeFormatCacheKey(options = {}) {
  return Object.entries(options)
    .sort(([key1], [key2]) => key1.localeCompare(key2))
    .map((keyValue) => `${keyValue[0]}-${keyValue[1]}`)
    .flat()
    .join(":");
}
/**
 * Returns an instance of Intl.DateTimeFormat and reuses it if requested with the same locale and options.
 *
 * **Note**: the cache will be cleared if a different locale is provided
 *
 * @internal
 */
function getDateTimeFormat(locale, options) {
  locale = getSupportedLocale(locale);
  if (!dateTimeFormatCache) {
    dateTimeFormatCache = new Map();
  }
  if (previousLocaleUsedForCaching !== locale) {
    dateTimeFormatCache.clear();
    previousLocaleUsedForCaching = locale;
  }
  const key = buildDateTimeFormatCacheKey(options);
  const cached = dateTimeFormatCache.get(key);
  if (cached) {
    return cached;
  }
  const format = new Intl.DateTimeFormat(locale, options);
  dateTimeFormatCache.set(key, format);
  return format;
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




/***/ }),

/***/ 43301:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ onToggleOpenCloseComponent)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36705);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


function isOpen(component) {
  return "opened" in component ? component.opened : component.open;
}
function emitImmediately(component, nonOpenCloseComponent = false) {
  (nonOpenCloseComponent ? component[component.transitionProp] : isOpen(component))
    ? component.onBeforeOpen()
    : component.onBeforeClose();
  (nonOpenCloseComponent ? component[component.transitionProp] : isOpen(component))
    ? component.onOpen()
    : component.onClose();
}
/**
 * Helper to determine globally set transition duration on the given openTransitionProp, which is imported and set in the @Watch("open").
 * Used to emit (before)open/close events both for when the opacity transition is present and when there is none (transition-duration is set to 0).
 *
 * @example
 * import { onToggleOpenCloseComponent, OpenCloseComponent } from "../../utils/openCloseComponent";
 *
 * async componentWillLoad() {
 * // When component initially renders, if `open` was set we need to trigger on load as watcher doesn't fire.
 * if (this.open) {
 *    onToggleOpenCloseComponent(this);
 * }
 * @Watch("open")
 * async toggleModal(value: boolean): Promise<void> {
 *    onToggleOpenCloseComponent(this);
 * }
 *
 * @param component - OpenCloseComponent uses `open` prop to emit (before)open/close.
 * @param nonOpenCloseComponent - OpenCloseComponent uses `expanded` prop to emit (before)open/close.
 */
function onToggleOpenCloseComponent(component, nonOpenCloseComponent = false) {
  (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__/* .readTask */ .gv)(() => {
    if (component.transitionEl) {
      const { transitionDuration: allDurations, transitionProperty: allProps } = getComputedStyle(component.transitionEl);
      const allTransitionDurationsArray = allDurations.split(",");
      const allTransitionPropsArray = allProps.split(",");
      const openTransitionPropIndex = allTransitionPropsArray.indexOf(component.openTransitionProp);
      const transitionDuration = allTransitionDurationsArray[openTransitionPropIndex] ??
        /* Safari will have a single transition value if multiple props share it,
        so we fall back to it if there's no matching prop duration */
        allTransitionDurationsArray[0];
      if (transitionDuration === "0s") {
        emitImmediately(component, nonOpenCloseComponent);
        return;
      }
      const fallbackTimeoutId = setTimeout(() => {
        component.transitionEl.removeEventListener("transitionstart", onStart);
        component.transitionEl.removeEventListener("transitionend", onEndOrCancel);
        component.transitionEl.removeEventListener("transitioncancel", onEndOrCancel);
        emitImmediately(component, nonOpenCloseComponent);
      }, parseFloat(transitionDuration) * 1000);
      component.transitionEl.addEventListener("transitionstart", onStart);
      component.transitionEl.addEventListener("transitionend", onEndOrCancel);
      component.transitionEl.addEventListener("transitioncancel", onEndOrCancel);
      function onStart(event) {
        if (event.propertyName === component.openTransitionProp && event.target === component.transitionEl) {
          clearTimeout(fallbackTimeoutId);
          component.transitionEl.removeEventListener("transitionstart", onStart);
          (nonOpenCloseComponent ? component[component.transitionProp] : isOpen(component))
            ? component.onBeforeOpen()
            : component.onBeforeClose();
        }
      }
      function onEndOrCancel(event) {
        if (event.propertyName === component.openTransitionProp && event.target === component.transitionEl) {
          (nonOpenCloseComponent ? component[component.transitionProp] : isOpen(component))
            ? component.onOpen()
            : component.onClose();
          component.transitionEl.removeEventListener("transitionend", onEndOrCancel);
          component.transitionEl.removeEventListener("transitioncancel", onEndOrCancel);
        }
      }
    }
  });
}




/***/ }),

/***/ 49263:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ connectMessages),
/* harmony export */   d: () => (/* binding */ disconnectMessages),
/* harmony export */   s: () => (/* binding */ setUpMessages),
/* harmony export */   u: () => (/* binding */ updateMessages)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36705);
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52572);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */



const componentLangToMessageBundleCache = {};
async function getMessageBundle(lang, component) {
  const key = `${component}_${lang}`;
  if (componentLangToMessageBundleCache[key]) {
    return componentLangToMessageBundleCache[key];
  }
  componentLangToMessageBundleCache[key] = fetch((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__/* .getAssetPath */ .OX)(`./assets/${component}/t9n/messages_${lang}.json`))
    .then((resp) => {
    if (!resp.ok) {
      throwMessageFetchError();
    }
    return resp.json();
  })
    .catch(() => throwMessageFetchError());
  return componentLangToMessageBundleCache[key];
}
function throwMessageFetchError() {
  throw new Error("could not fetch component message bundle");
}
function mergeMessages(component) {
  component.messages = {
    ...component.defaultMessages,
    ...component.messageOverrides,
  };
}
/**
 * This utility sets up the messages used by the component. It should be awaited in the `componentWillLoad` lifecycle hook.
 *
 * @param component
 */
async function setUpMessages(component) {
  component.defaultMessages = await fetchMessages(component, component.effectiveLocale);
  mergeMessages(component);
}
async function fetchMessages(component, lang) {
  if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__/* .Build */ .L2.isBrowser) {
    return {};
  }
  const { el } = component;
  const tag = el.tagName.toLowerCase();
  const componentName = tag.replace("calcite-", "");
  return getMessageBundle((0,_locale_js__WEBPACK_IMPORTED_MODULE_0__.g)(lang, "t9n"), componentName);
}
/**
 * This utility must be set up for the component to update its default message bundle if the locale changes.
 *
 * It can be set up in **either** of the following ways:
 *
 * 1. called from `LocalizedComponent`'s `onLocaleChange` method or
 * 2. called from a watcher configured to watch `LocalizedComponent`'s `effectiveLocale` prop
 *
 * @param component
 * @param lang
 */
async function updateMessages(component, lang) {
  component.defaultMessages = await fetchMessages(component, lang);
  mergeMessages(component);
}
/**
 * This utility sets up internals for messages support.
 *
 * It needs to be called in `connectedCallback`
 *
 * **Note**: this must be called after `LocalizedComponent`'s `connectLocalized` method.
 *
 * @param component
 */
function connectMessages(component) {
  component.onMessagesChange = defaultOnMessagesChange;
}
/**
 * This utility tears down internals for messages support.
 *
 * It needs to be called in `disconnectedCallback`
 *
 * @param component
 */
function disconnectMessages(component) {
  component.onMessagesChange = undefined;
}
function defaultOnMessagesChange() {
  mergeMessages(this);
}




/***/ })

};
;