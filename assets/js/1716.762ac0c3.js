"use strict";
exports.id = 1716;
exports.ids = [1716];
exports.modules = {

/***/ 21716:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteListItemGroup: () => (/* binding */ CalciteListItemGroup),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36705);
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50768);
/* harmony import */ var _utils3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96068);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */




const CSS = {
  container: "container",
  heading: "heading",
};

const listItemGroupCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1);--calcite-list-item-spacing-indent:1rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{margin:0px;display:flex;flex:1 1 0%;background-color:var(--calcite-ui-foreground-2);padding:0.75rem;font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-2)}.heading{padding-inline-start:calc(var(--calcite-list-item-spacing-indent) * var(--calcite-list-item-spacing-indent-multiplier))}::slotted(calcite-list-item){--tw-shadow:0 -1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 -1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);margin-block-start:1px}::slotted(calcite-list-item:nth-child(1 of :not([hidden]))){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);margin-block-start:0px}:host([hidden]){display:none}[hidden]{display:none}";

const ListItemGroup = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__/* .proxyCustomElement */ .w$)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__/* .HTMLElement */ .wt {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInternalListItemGroupDefaultSlotChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__/* .createEvent */ .lh)(this, "calciteInternalListItemGroupDefaultSlotChange", 6);
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.handleDefaultSlotChange = () => {
      this.calciteInternalListItemGroupDefaultSlotChange.emit();
    };
    this.disabled = false;
    this.heading = undefined;
    this.visualLevel = null;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    const { el } = this;
    this.visualLevel = (0,_utils3_js__WEBPACK_IMPORTED_MODULE_1__.a)(el, true);
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_0__.u)(this);
  }
  disconnectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { heading, visualLevel } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__/* .Host */ .xr, null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("tr", { class: CSS.container, style: { "--calcite-list-item-spacing-indent-multiplier": `${visualLevel}` } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("td", { class: CSS.heading, colSpan: _utils3_js__WEBPACK_IMPORTED_MODULE_1__.M }, heading)), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("slot", { onSlotchange: this.handleDefaultSlotChange })));
  }
  get el() { return this; }
  static get style() { return listItemGroupCss; }
}, [1, "calcite-list-item-group", {
    "disabled": [516],
    "heading": [513],
    "visualLevel": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-list-item-group"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-list-item-group":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ListItemGroup);
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteListItemGroup = ListItemGroup;
const defineCustomElement = defineCustomElement$1;




/***/ }),

/***/ 50768:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ connectInteractive),
/* harmony export */   d: () => (/* binding */ disconnectInteractive),
/* harmony export */   u: () => (/* binding */ updateHostInteraction)
/* harmony export */ });
/* unused harmony export g */
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36705);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


function getUserAgentData() {
  return navigator.userAgentData;
}
function getUserAgentString() {
  if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__/* .Build */ .L2.isBrowser) {
    return "";
  }
  const uaData = getUserAgentData();
  return uaData?.brands
    ? uaData.brands.map(({ brand, version }) => `${brand}/${version}`).join(" ")
    : navigator.userAgent;
}

// ⚠️ browser-sniffing is not a best practice and should be avoided ⚠️
const isFirefox = /firefox/i.test(getUserAgentString());
const interactiveElementToParent = isFirefox
  ? new WeakMap()
  : null;
function interceptedClick() {
  const { disabled } = this;
  if (!disabled) {
    HTMLElement.prototype.click.call(this);
  }
}
function onPointerDown(event) {
  const interactiveElement = event.target;
  if (isFirefox && !interactiveElementToParent.get(interactiveElement)) {
    return;
  }
  const { disabled } = interactiveElement;
  if (disabled) {
    // prevent click from moving focus on host
    event.preventDefault();
  }
}
const nonBubblingWhenDisabledMouseEvents = ["mousedown", "mouseup", "click"];
function onNonBubblingWhenDisabledMouseEvent(event) {
  if (isFirefox && !interactiveElementToParent.get(event.target)) {
    return;
  }
  const { disabled } = event.target;
  // prevent disallowed mouse events from being emitted on the disabled host (per https://github.com/whatwg/html/issues/5886)
  //⚠ we generally avoid stopping propagation of events, but this is needed to adhere to the intended spec changes above ⚠
  if (disabled) {
    event.stopImmediatePropagation();
    event.preventDefault();
  }
}
const captureOnlyOptions = { capture: true };
/**
 * This helper updates the host element to prevent keyboard interaction on its subtree and sets the appropriate aria attribute for accessibility.
 *
 * This should be used in the `componentDidRender` lifecycle hook.
 *
 * **Notes**
 *
 * this util is not needed for simple components whose root element or elements are an interactive component (custom element or native control). For those cases, set the `disabled` props on the root components instead.
 * technically, users can override `tabindex` and restore keyboard navigation, but this will be considered user error
 *
 * @param component
 * @param hostIsTabbable – when set to true or its predicate returns true, the host is tabbable and will be managed by the helper. Set to "managed" for cases where a component's parent determines which item is tabbable (i.e., sets `tabindex` to allow tabbing).
 */
function updateHostInteraction(component, hostIsTabbable = false) {
  if (component.disabled) {
    component.el.setAttribute("tabindex", "-1");
    component.el.setAttribute("aria-disabled", "true");
    if (component.el.contains(document.activeElement)) {
      document.activeElement.blur();
    }
    blockInteraction(component);
    return;
  }
  restoreInteraction(component);
  if (typeof hostIsTabbable === "function") {
    component.el.setAttribute("tabindex", hostIsTabbable.call(component) ? "0" : "-1");
  }
  else if (hostIsTabbable === true) {
    component.el.setAttribute("tabindex", "0");
  }
  else if (hostIsTabbable === false) {
    component.el.removeAttribute("tabindex");
  }
  else ;
  component.el.removeAttribute("aria-disabled");
}
function blockInteraction(component) {
  component.el.click = interceptedClick;
  addInteractionListeners(isFirefox ? getParentElement(component) : component.el);
}
function addInteractionListeners(element) {
  if (!element) {
    // this path is only applicable to Firefox
    return;
  }
  element.addEventListener("pointerdown", onPointerDown, captureOnlyOptions);
  nonBubblingWhenDisabledMouseEvents.forEach((event) => element.addEventListener(event, onNonBubblingWhenDisabledMouseEvent, captureOnlyOptions));
}
function getParentElement(component) {
  return interactiveElementToParent.get(component.el);
}
function restoreInteraction(component) {
  delete component.el.click; // fallback on HTMLElement.prototype.click
  removeInteractionListeners(isFirefox ? getParentElement(component) : component.el);
}
function removeInteractionListeners(element) {
  if (!element) {
    // this path is only applicable to Firefox
    return;
  }
  element.removeEventListener("pointerdown", onPointerDown, captureOnlyOptions);
  nonBubblingWhenDisabledMouseEvents.forEach((event) => element.removeEventListener(event, onNonBubblingWhenDisabledMouseEvent, captureOnlyOptions));
}
/**
 * This utility helps disable components consistently in Firefox.
 *
 * It needs to be called in `connectedCallback` and is only needed for Firefox as it does not call capture event listeners before non-capture ones (see https://bugzilla.mozilla.org/show_bug.cgi?id=1731504).
 *
 * @param component
 */
function connectInteractive(component) {
  if (!component.disabled || !isFirefox) {
    return;
  }
  const parent = component.el.parentElement || component.el; /* assume element is host if it has no parent when connected */
  interactiveElementToParent.set(component.el, parent);
  blockInteraction(component);
}
/**
 * This utility restores interactivity to disabled components consistently in Firefox.
 *
 * It needs to be called in `disconnectedCallback` and is only needed for Firefox as it does not call capture event listeners before non-capture ones (see https://bugzilla.mozilla.org/show_bug.cgi?id=1731504).
 *
 * @param component
 */
function disconnectInteractive(component) {
  if (!isFirefox) {
    return;
  }
  // always remove on disconnect as render or connect will restore it
  interactiveElementToParent.delete(component.el);
  restoreInteraction(component);
}




/***/ }),

/***/ 96068:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ CSS),
/* harmony export */   I: () => (/* binding */ ICONS),
/* harmony export */   M: () => (/* binding */ MAX_COLUMNS),
/* harmony export */   S: () => (/* binding */ SLOTS),
/* harmony export */   a: () => (/* binding */ getDepth),
/* harmony export */   g: () => (/* binding */ getListItemChildren),
/* harmony export */   u: () => (/* binding */ updateListItemChildren)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36705);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


const CSS = {
  container: "container",
  containerBorderSelected: "container--border-selected",
  containerBorderUnselected: "container--border-unselected",
  contentContainer: "content-container",
  contentContainerSelectable: "content-container--selectable",
  contentContainerHasCenterContent: "content-container--has-center-content",
  nestedContainer: "nested-container",
  nestedContainerHidden: "nested-container--hidden",
  content: "content",
  customContent: "custom-content",
  actionsStart: "actions-start",
  contentStart: "content-start",
  label: "label",
  description: "description",
  contentEnd: "content-end",
  contentBottom: "content-bottom",
  actionsEnd: "actions-end",
  selectionContainer: "selection-container",
  openContainer: "open-container",
  dragContainer: "drag-container",
};
const SLOTS = {
  actionsStart: "actions-start",
  contentStart: "content-start",
  content: "content",
  contentBottom: "content-bottom",
  contentEnd: "content-end",
  actionsEnd: "actions-end",
};
// Set to zero to extend until the end of the table section.
const MAX_COLUMNS = 0;
const ICONS = {
  selectedMultiple: "check-circle-f",
  selectedSingle: "circle-f",
  unselected: "blank",
  closedLTR: "caret-right",
  closedRTL: "caret-left",
  open: "caret-down",
  blank: "blank",
  close: "x",
};

const listSelector = "calcite-list";
const listItemGroupSelector = "calcite-list-item-group";
const listItemSelector = "calcite-list-item";
function getListItemChildren(slotEl) {
  const assignedElements = slotEl.assignedElements({ flatten: true });
  const listItemGroupChildren = assignedElements.filter((el) => el?.matches(listItemGroupSelector))
    .map((group) => Array.from(group.querySelectorAll(listItemSelector)))
    .reduce((previousValue, currentValue) => [...previousValue, ...currentValue], []);
  const listItemChildren = assignedElements.filter((el) => el?.matches(listItemSelector));
  const listItemListChildren = assignedElements.filter((el) => el?.matches(listSelector))
    .map((list) => Array.from(list.querySelectorAll(listItemSelector)))
    .reduce((previousValue, currentValue) => [...previousValue, ...currentValue], []);
  return [...listItemListChildren, ...listItemGroupChildren, ...listItemChildren];
}
function updateListItemChildren(listItemChildren) {
  listItemChildren.forEach((listItem) => {
    listItem.setPosition = listItemChildren.indexOf(listItem) + 1;
    listItem.setSize = listItemChildren.length;
  });
}
function getDepth(element, includeGroup = false) {
  if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__/* .Build */ .L2.isBrowser) {
    return 0;
  }
  const expression = includeGroup
    ? "ancestor::calcite-list-item | ancestor::calcite-list-item-group"
    : "ancestor::calcite-list-item";
  const result = document.evaluate(expression, element, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
  return result.snapshotLength;
}




/***/ })

};
;