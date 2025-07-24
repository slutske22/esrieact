"use strict";
exports.id = 19964;
exports.ids = [19964];
exports.modules = {

/***/ 19964:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Notice: () => (/* reexport */ Notice)
});

// EXTERNAL MODULE: ./node_modules/@esri/calcite-components/dist/components/calcite-icon/index.js + 1 modules
var calcite_icon = __webpack_require__(55012);
// EXTERNAL MODULE: ./node_modules/@esri/calcite-components/dist/chunks/runtime.js
var runtime = __webpack_require__(34088);
// EXTERNAL MODULE: ./node_modules/lit/index.js + 2 modules
var lit = __webpack_require__(67943);
// EXTERNAL MODULE: ./node_modules/lit-html/node/directives/ref.js + 1 modules
var ref = __webpack_require__(51362);
// EXTERNAL MODULE: ./node_modules/@arcgis/lumina/dist/index.js + 15 modules
var dist = __webpack_require__(95925);
// EXTERNAL MODULE: ./node_modules/@esri/calcite-components/dist/chunks/dom.js
var dom = __webpack_require__(79000);
// EXTERNAL MODULE: ./node_modules/@esri/calcite-components/dist/chunks/component.js
var component = __webpack_require__(83623);
;// ./node_modules/@esri/calcite-components/dist/chunks/resources4.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */
const KindIcons = {
  brand: "lightbulb",
  danger: "exclamationMarkTriangle",
  info: "information",
  success: "checkCircle",
  warning: "exclamationMarkTriangle"
};


// EXTERNAL MODULE: ./node_modules/@esri/calcite-components/dist/chunks/openCloseComponent.js
var openCloseComponent = __webpack_require__(70101);
// EXTERNAL MODULE: ./node_modules/@esri/calcite-components/dist/chunks/useT9n.js
var useT9n = __webpack_require__(75572);
// EXTERNAL MODULE: ./node_modules/@lit/reactive-element/node/css-tag.js
var css_tag = __webpack_require__(9451);
;// ./node_modules/@esri/calcite-components/dist/components/calcite-notice/customElement.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */










const SLOTS = {
  title: "title",
  message: "message",
  link: "link",
  actionsEnd: "actions-end"
};
const CSS = {
  actionsEnd: "actions-end",
  close: "notice-close",
  container: "container",
  content: "notice-content",
  icon: "notice-icon"
};
const styles = (0,css_tag/* css */.AH)`:host([scale=s]){--calcite-notice-spacing-token-small: .5rem;--calcite-notice-spacing-token-large: .75rem}:host([scale=s]) .container slot[name=title]::slotted(*),:host([scale=s]) .container *::slotted([slot=title]){margin-block:.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=s]) .container slot[name=message]::slotted(*),:host([scale=s]) .container *::slotted([slot=message]){margin-block:.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) ::slotted(calcite-link){margin-block:.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) .notice-close{padding:.5rem}:host([scale=m]){--calcite-notice-spacing-token-small: .75rem;--calcite-notice-spacing-token-large: 1rem}:host([scale=m]) .container slot[name=title]::slotted(*),:host([scale=m]) .container *::slotted([slot=title]){margin-block:.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=m]) .container slot[name=message]::slotted(*),:host([scale=m]) .container *::slotted([slot=message]){margin-block:.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) ::slotted(calcite-link){margin-block:.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=l]){--calcite-notice-spacing-token-small: 1rem;--calcite-notice-spacing-token-large: 1.25rem}:host([scale=l]) .container slot[name=title]::slotted(*),:host([scale=l]) .container *::slotted([slot=title]){margin-block:.125rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale=l]) .container slot[name=message]::slotted(*),:host([scale=l]) .container *::slotted([slot=message]){margin-block:.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) ::slotted(calcite-link){margin-block:.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([width=auto]){--calcite-notice-width: auto}:host([width=half]){--calcite-notice-width: 50%}:host([width=full]){--calcite-notice-width: 100%}:host{margin-inline:auto;display:none;max-inline-size:100%;align-items:center;inline-size:var(--calcite-notice-width)}.container{pointer-events:none;margin-block:0px;box-sizing:border-box;display:flex;inline-size:100%;opacity:0;overflow:hidden;max-block-size:0;transition-property:opacity,max-block-size;transition-duration:var(--calcite-animation-timing);text-align:start;border-inline-start:var(--calcite-border-width-md) solid;box-shadow:0 0 0 0 transparent;background-color:var(--calcite-notice-background-color, var(--calcite-color-foreground-1))}.notice-close{outline-color:transparent}.notice-close:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}:host{display:flex}:host([open]) .container{pointer-events:auto;max-block-size:100%;align-items:center;opacity:1;--tw-shadow: 0 4px 8px -1px rgba(0, 0, 0, .08), 0 2px 4px -1px rgba(0, 0, 0, .04);--tw-shadow-colored: 0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);overflow:visible}.container slot[name=title]::slotted(*),.container *::slotted([slot=title]){margin:0;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-notice-title-text-color, var(--calcite-color-text-1))}.container slot[name=message]::slotted(*),.container *::slotted([slot=message]){margin:0;display:inline;font-weight:var(--calcite-font-weight-normal);margin-inline-end:var(--calcite-notice-spacing-token-small);color:var(--calcite-notice-content-text-color, var(--calcite-color-text-2))}.notice-content{box-sizing:border-box;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;display:flex;min-inline-size:0px;flex-direction:column;overflow-wrap:break-word;flex:1 1 0;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:0 var(--calcite-notice-spacing-token-small)}.notice-content:first-of-type:not(:only-child){padding-inline-start:var(--calcite-notice-spacing-token-large)}.notice-content:only-of-type{padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large)}.notice-icon{display:flex;align-items:center;box-sizing:border-box;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto}.notice-close{display:flex;cursor:pointer;align-items:center;align-self:stretch;border-style:none;background-color:transparent;outline:2px solid transparent;outline-offset:2px;box-sizing:border-box;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;-webkit-appearance:none;color:var(--calcite-notice-close-icon-color, var(--calcite-color-text-3))}.notice-close:hover,.notice-close:focus{background-color:var(--calcite-notice-close-background-color-focus, var(--calcite-color-foreground-2));color:var(--calcite-notice-close-icon-color-hover, var(--calcite-color-text-1))}.notice-close:active{background-color:var(--calcite-notice-close-background-color-press, var(--calcite-color-foreground-3))}.actions-end{display:flex;align-self:stretch}:host([kind=brand]) .container{border-color:var(--calcite-color-brand)}:host([kind=brand]) .container .notice-icon{color:var(--calcite-color-brand)}:host([kind=info]) .container{border-color:var(--calcite-color-status-info)}:host([kind=info]) .container .notice-icon{color:var(--calcite-color-status-info)}:host([kind=danger]) .container{border-color:var(--calcite-color-status-danger)}:host([kind=danger]) .container .notice-icon{color:var(--calcite-color-status-danger)}:host([kind=success]) .container{border-color:var(--calcite-color-status-success)}:host([kind=success]) .container .notice-icon{color:var(--calcite-color-status-success)}:host([kind=warning]) .container{border-color:var(--calcite-color-status-warning)}:host([kind=warning]) .container .notice-icon{color:var(--calcite-color-status-warning)}:host([hidden]){display:none}[hidden]{display:none}`;
class Notice extends dist/* LitElement */.WF {
  constructor() {
    super(...arguments);
    this.closeButton = (0,ref/* createRef */._)();
    this.transitionProp = "opacity";
    this.messages = (0,useT9n.u)();
    this.hasActionEnd = false;
    this.closable = false;
    this.iconFlipRtl = false;
    this.kind = "brand";
    this.open = false;
    this.scale = "m";
    this.width = "auto";
    this.calciteNoticeBeforeClose = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.calciteNoticeBeforeOpen = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.calciteNoticeClose = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.calciteNoticeOpen = (0,dist/* createEvent */.lh)({ cancelable: false });
  }
  static {
    this.properties = { hasActionEnd: [16, {}, { state: true }], closable: [7, {}, { reflect: true, type: Boolean }], icon: [3, { converter: dist/* stringOrBoolean */.pf }, { reflect: true }], iconFlipRtl: [7, {}, { reflect: true, type: Boolean }], kind: [3, {}, { reflect: true }], messageOverrides: [0, {}, { attribute: false }], open: [7, {}, { reflect: true, type: Boolean }], scale: [3, {}, { reflect: true }], width: [3, {}, { reflect: true }] };
  }
  static {
    this.styles = styles;
  }
  async setFocus() {
    await (0,component.c)(this);
    const noticeLinkEl = this.el.querySelector("calcite-link");
    if (!this.closeButton.value && !noticeLinkEl) {
      return;
    }
    if (noticeLinkEl) {
      return noticeLinkEl.setFocus();
    } else if (this.closeButton.value) {
      this.closeButton.value.focus();
    }
  }
  async load() {
    this.requestedIcon = (0,dom.v)(KindIcons, this.icon, this.kind);
  }
  willUpdate(changes) {
    if (changes.has("open") && (this.hasUpdated || this.open !== false)) {
      (0,openCloseComponent.o)(this);
    }
    if (changes.has("icon") || changes.has("kind") && (this.hasUpdated || this.kind !== "brand")) {
      this.requestedIcon = (0,dom.v)(KindIcons, this.icon, this.kind);
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
  setTransitionEl(el) {
    if (!el) {
      return;
    }
    this.transitionEl = el;
  }
  close() {
    this.open = false;
  }
  handleActionsEndSlotChange(event) {
    this.hasActionEnd = (0,dom.a)(event);
  }
  render() {
    const closeButton = (0,lit/* html */.qy)`<button .ariaLabel=${this.messages.close} class=${(0,dist/* safeClassMap */.CP)(CSS.close)} @click=${this.close} ${(0,ref/* ref */.K)(this.closeButton)}><calcite-icon icon=x .scale=${(0,component.g)(this.scale)}></calcite-icon></button>`;
    return (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(CSS.container)} ${(0,ref/* ref */.K)(this.setTransitionEl)}>${this.requestedIcon ? (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(CSS.icon)}><calcite-icon .flipRtl=${this.iconFlipRtl} .icon=${this.requestedIcon} .scale=${(0,component.g)(this.scale)}></calcite-icon></div>` : null}<div class=${(0,dist/* safeClassMap */.CP)(CSS.content)}><slot name=${SLOTS.title}></slot><slot name=${SLOTS.message}></slot><slot name=${SLOTS.link}></slot></div><div class=${(0,dist/* safeClassMap */.CP)(CSS.actionsEnd)} .hidden=${!this.hasActionEnd}><slot name=${SLOTS.actionsEnd} @slotchange=${this.handleActionsEndSlotChange}></slot></div>${this.closable ? closeButton : null}</div>`;
  }
}
(0,runtime.c)("calcite-notice", Notice);


;// ./node_modules/@esri/calcite-components/dist/components/calcite-notice/index.js



/***/ })

};
;