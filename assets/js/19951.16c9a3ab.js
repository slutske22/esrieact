"use strict";
exports.id = 19951;
exports.ids = [19951];
exports.modules = {

/***/ 19951:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Button: () => (/* reexport */ Button)
});

// EXTERNAL MODULE: ./node_modules/@esri/calcite-components/dist/components/calcite-loader/index.js + 1 modules
var calcite_loader = __webpack_require__(19782);
// EXTERNAL MODULE: ./node_modules/@esri/calcite-components/dist/components/calcite-icon/index.js + 1 modules
var calcite_icon = __webpack_require__(55012);
// EXTERNAL MODULE: ./node_modules/@esri/calcite-components/dist/chunks/runtime.js
var runtime = __webpack_require__(34088);
// EXTERNAL MODULE: ./node_modules/lit/index.js + 2 modules
var lit = __webpack_require__(67943);
// EXTERNAL MODULE: ./node_modules/lit-html/node/directives/ref.js + 1 modules
var ref = __webpack_require__(51362);
// EXTERNAL MODULE: ./node_modules/lit-html/node/static.js
var node_static = __webpack_require__(66778);
// EXTERNAL MODULE: ./node_modules/@arcgis/lumina/dist/index.js + 15 modules
var dist = __webpack_require__(95925);
// EXTERNAL MODULE: ./node_modules/@arcgis/lumina/dist/controllers/index.js
var controllers = __webpack_require__(86229);
// EXTERNAL MODULE: ./node_modules/@esri/calcite-components/dist/chunks/form.js
var chunks_form = __webpack_require__(21796);
// EXTERNAL MODULE: ./node_modules/@esri/calcite-components/dist/chunks/interactive.js
var interactive = __webpack_require__(60992);
// EXTERNAL MODULE: ./node_modules/@esri/calcite-components/dist/chunks/label.js
var label = __webpack_require__(93174);
// EXTERNAL MODULE: ./node_modules/@esri/calcite-components/dist/chunks/component.js
var component = __webpack_require__(83623);
// EXTERNAL MODULE: ./node_modules/@esri/calcite-components/dist/chunks/observers.js
var observers = __webpack_require__(4643);
// EXTERNAL MODULE: ./node_modules/@esri/calcite-components/dist/chunks/useT9n.js
var useT9n = __webpack_require__(75572);
// EXTERNAL MODULE: ./node_modules/@esri/calcite-components/dist/chunks/dom.js
var dom = __webpack_require__(79000);
// EXTERNAL MODULE: ./node_modules/@lit/reactive-element/node/css-tag.js
var css_tag = __webpack_require__(9451);
;// ./node_modules/@esri/calcite-components/dist/components/calcite-button/customElement.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */














const CSS = {
  buttonLoader: "calcite-button--loader",
  content: "content",
  contentSlotted: "content--slotted",
  icon: "icon",
  iconStart: "icon--start",
  iconEnd: "icon--end",
  loadingIn: "loading-in",
  loadingOut: "loading-out",
  iconStartEmpty: "icon-start-empty",
  iconEndEmpty: "icon-end-empty",
  buttonPadding: "button-padding",
  buttonPaddingShrunk: "button-padding--shrunk"
};
const styles = (0,css_tag/* css */.AH)`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block;inline-size:auto;vertical-align:middle;border-radius:var(--calcite-button-corner-radius, var(--calcite-internal-button-corner-radius, 0))}:host a,:host button{--calcite-internal-button-content-margin: .5rem;--calcite-internal-button-padding-x: 7px;--calcite-internal-button-padding-y: 3px;position:relative;box-sizing:border-box;display:flex;block-size:100%;inline-size:100%;cursor:pointer;-webkit-user-select:none;user-select:none;appearance:none;align-items:center;justify-content:center;border-style:none;text-align:center;font-family:inherit;font-weight:var(--calcite-font-weight-normal);text-decoration-line:none;outline-color:transparent;background-color:var(--calcite-button-background-color, var(--calcite-internal-button-background-color, var(--calcite-color-transparent)));border-block-start-color:var(--calcite-button-border-color, var(--calcite-internal-button-border-block-start-color, var(--calcite-internal-button-border-color, var(--calcite-color-transparent))));border-block-end-color:var(--calcite-button-border-color, var(--calcite-internal-button-border-block-end-color, var(--calcite-internal-button-border-color, var(--calcite-color-transparent))));border-inline-start-color:var(--calcite-button-border-color, var(--calcite-internal-button-border-inline-start-color, var(--calcite-internal-button-border-color, var(--calcite-color-transparent))));border-inline-end-color:var(--calcite-button-border-color, var(--calcite-internal-button-border-inline-end-color, var(--calcite-internal-button-border-color, var(--calcite-color-transparent))));border-style:solid;border-width:var(--calcite-border-width-sm);box-shadow:inset 0 0 0 0 var(--calcite-button-shadow-color, var(--calcite-internal-button-shadow-color, var(--calcite-color-transparent)));border-radius:var(--calcite-button-corner-radius, var(--calcite-internal-button-corner-radius, 0));color:var(--calcite-button-text-color, var(--calcite-internal-button-text-color, currentColor));padding-block:var(--calcite-internal-button-padding-y);padding-inline:var(--calcite-internal-button-padding-x);transition:color var(--calcite-animation-timing) ease-in-out,background-color var(--calcite-animation-timing) ease-in-out,box-shadow var(--calcite-animation-timing) ease-in-out,outline-color var(--calcite-internal-animation-timing-fast) ease-in-out}:host a:hover,:host button:hover{text-decoration-line:none}:host a:focus,:host button:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}:host a span,:host button span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host a calcite-loader,:host button calcite-loader{color:var(--calcite-button-loader-color, var(--calcite-internal-button-loader-color, var(--calcite-button-text-color, var(--calcite-internal-button-text-color))))}:host([round]){--calcite-internal-button-corner-radius: 50px}.content{margin-inline:var(--calcite-internal-button-content-margin)}.icon-start-empty .content{margin-inline-start:unset}.icon-end-empty .content{margin-inline-end:unset}:host([scale=m]) button,:host([scale=m]) a{--calcite-internal-button-content-margin: .75rem}:host([scale=l]) button,:host([scale=l]) a{--calcite-internal-button-content-margin: 1rem}:host([width=auto]){inline-size:auto}:host([width=half]){inline-size:50%}:host([width=full]){inline-size:100%}:host([alignment=center]:not([width=auto])) a,:host([alignment=center]:not([width=auto])) button{justify-content:center}:host([alignment=start]:not([width=auto])) a,:host([alignment=start]:not([width=auto])) button{justify-content:flex-start}:host([alignment=end]:not([width=auto])) a,:host([alignment=end]:not([width=auto])) button{justify-content:flex-end}:host([alignment*=space-between]:not([width=auto])) a,:host([alignment*=space-between]:not([width=auto])) button{justify-content:space-between}:host([alignment=icon-start-space-between]:not([width=auto])) .icon--start{margin-inline-end:auto}:host([alignment=icon-start-space-between]:not([width=auto])) a,:host([alignment=icon-start-space-between]:not([width=auto])) button{text-align:unset}:host([alignment=icon-end-space-between]:not([width=auto])) .icon--end{margin-inline-start:auto}:host([alignment=icon-end-space-between]:not([width=auto])) a,:host([alignment=icon-end-space-between]:not([width=auto])) button{text-align:unset}:host([alignment=center]) a:not(.content--slotted) .icon--start+.icon--end,:host([alignment=center]) button:not(.content--slotted) .icon--start+.icon--end{margin-inline-start:var(--calcite-internal-button-content-margin)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}@keyframes loader-in{0%{inline-size:0;opacity:0;transform:scale(.5)}to{inline-size:1em;opacity:1;transform:scale(1)}}@keyframes loader-out{0%{inline-size:1em;opacity:1;transform:scale(1)}to{inline-size:0;opacity:0;transform:scale(.5)}}.calcite-button--loader{display:flex}.calcite-button--loader calcite-loader{margin:0}:host([loading]) button.content--slotted .calcite-button--loader calcite-loader,:host([loading]) a.content--slotted .calcite-button--loader calcite-loader{margin-inline-end:var(--calcite-internal-button-content-margin)}:host([loading]) button:not(.content--slotted) .icon--start,:host([loading]) button:not(.content--slotted) .icon--end,:host([loading]) a:not(.content--slotted) .icon--start,:host([loading]) a:not(.content--slotted) .icon--end{display:none}:host([appearance]) button,:host([appearance]) a{--calcite-internal-button-border-color: var(--calcite-color-transparent);border-style:solid;border-width:var(--calcite-button-border-size, 1px)}:host([kind=brand]) button,:host([kind=brand]) a{--calcite-internal-button-text-color: var(--calcite-color-text-inverse);--calcite-internal-button-background-color: var(--calcite-color-brand);--calcite-internal-button-loader-color: var(--calcite-color-text-inverse)}:host([kind=brand]) button:hover,:host([kind=brand]) a:hover{--calcite-internal-button-background-color: var(--calcite-color-brand-hover)}:host([kind=brand]) button:active,:host([kind=brand]) a:active{--calcite-internal-button-background-color: var(--calcite-color-brand-press)}:host([kind=danger]) button,:host([kind=danger]) a{--calcite-internal-button-text-color: var(--calcite-color-text-inverse);--calcite-internal-button-background-color: var(--calcite-color-status-danger);--calcite-internal-button-loader-color: var(--calcite-color-text-inverse)}:host([kind=danger]) button:hover,:host([kind=danger]) a:hover{--calcite-internal-button-background-color: var(--calcite-color-status-danger-hover)}:host([kind=danger]) button:active,:host([kind=danger]) a:active{--calcite-internal-button-background-color: var(--calcite-color-status-danger-press)}:host([kind=neutral]) button,:host([kind=neutral]) a{--calcite-internal-button-text-color: var(--calcite-color-text-1);--calcite-internal-button-background-color: var(--calcite-color-foreground-3);--calcite-internal-button-loader-color: var(--calcite-color-text-1)}:host([kind=neutral]) button:hover,:host([kind=neutral]) a:hover{--calcite-internal-button-background-color: var(--calcite-color-foreground-2)}:host([kind=neutral]) button:active,:host([kind=neutral]) a:active{--calcite-internal-button-background-color: var(--calcite-color-foreground-1)}:host([kind=inverse]) button,:host([kind=inverse]) a{--calcite-internal-button-text-color: var(--calcite-color-text-inverse);--calcite-internal-button-background-color: var(--calcite-color-inverse);--calcite-internal-button-loader-color: var(--calcite-color-text-inverse)}:host([kind=inverse]) button:hover,:host([kind=inverse]) a:hover{--calcite-internal-button-background-color: var(--calcite-color-inverse-hover)}:host([kind=inverse]) button:active,:host([kind=inverse]) a:active{--calcite-internal-button-background-color: var(--calcite-color-inverse-press)}:host([appearance=outline-fill]) button,:host([appearance=outline-fill]) a{--calcite-internal-button-background-color: var(--calcite-color-foreground-1);border-style:solid;border-width:var(--calcite-button-border-size, 1px)}:host([appearance=outline-fill]) button:hover,:host([appearance=outline-fill]) a:hover{--calcite-internal-button-background-color: var(--calcite-color-foreground-2)}:host([appearance=outline-fill]) button:active,:host([appearance=outline-fill]) a:active{--calcite-internal-button-background-color: var(--calcite-color-foreground-3)}:host([appearance=outline-fill][kind=brand]) button,:host([appearance=outline-fill][kind=brand]) a{--calcite-internal-button-border-color: var(--calcite-color-brand);--calcite-internal-button-text-color: var(--calcite-color-brand);--calcite-internal-button-loader-color: var(--calcite-color-brand)}:host([appearance=outline-fill][kind=brand]) button:hover,:host([appearance=outline-fill][kind=brand]) a:hover{--calcite-internal-button-border-color: var(--calcite-color-brand-hover);--calcite-internal-button-text-color: var(--calcite-color-brand-hover);--calcite-internal-button-shadow-color: var(--calcite-color-brand-hover)}:host([appearance=outline-fill][kind=brand]) button:focus,:host([appearance=outline-fill][kind=brand]) a:focus{--calcite-internal-button-border-color: var(--calcite-color-brand);--calcite-internal-button-text-color: var(--calcite-color-brand);--calcite-internal-button-shadow-color: var(--calcite-color-brand)}:host([appearance=outline-fill][kind=brand]) button:active,:host([appearance=outline-fill][kind=brand]) a:active{--calcite-internal-button-border-color: var(--calcite-color-brand-press);--calcite-internal-button-text-color: var(--calcite-color-brand-press);--calcite-internal-button-shadow-color: var(--calcite-color-brand-press)}:host([appearance=outline-fill][kind=brand]) button calcite-loader,:host([appearance=outline-fill][kind=brand]) a calcite-loader{--calcite-internal-button-loader-color: var(--calcite-color-brand)}:host([appearance=outline-fill][kind=danger]) button,:host([appearance=outline-fill][kind=danger]) a{--calcite-internal-button-border-color: var(--calcite-color-status-danger);--calcite-internal-button-text-color: var(--calcite-color-status-danger);--calcite-internal-button-loader-color: var(--calcite-color-status-danger)}:host([appearance=outline-fill][kind=danger]) button:hover,:host([appearance=outline-fill][kind=danger]) a:hover{--calcite-internal-button-border-color: var(--calcite-color-status-danger-hover);--calcite-internal-button-text-color: var(--calcite-color-status-danger-hover);--calcite-internal-button-shadow-color: var(--calcite-color-status-danger-hover)}:host([appearance=outline-fill][kind=danger]) button:focus,:host([appearance=outline-fill][kind=danger]) a:focus{--calcite-internal-button-border-color: var(--calcite-color-status-danger);--calcite-internal-button-text-color: var(--calcite-color-status-danger);--calcite-internal-button-shadow-color: var(--calcite-color-status-danger)}:host([appearance=outline-fill][kind=danger]) button:active,:host([appearance=outline-fill][kind=danger]) a:active{--calcite-internal-button-border-color: var(--calcite-color-status-danger-press);--calcite-internal-button-text-color: var(--calcite-color-status-danger-press);--calcite-internal-button-shadow-color: var(--calcite-color-status-danger-press)}:host([appearance=outline-fill][kind=danger]) button calcite-loader,:host([appearance=outline-fill][kind=danger]) a calcite-loader{--calcite-internal-button-loader-color: var(--calcite-color-status-danger)}:host([appearance=outline-fill][kind=neutral]) button,:host([appearance=outline-fill][kind=neutral]) a{--calcite-internal-button-border-color: var(--calcite-color-border-1);--calcite-internal-button-text-color: var(--calcite-color-text-1);--calcite-internal-button-loader-color: var(--calcite-color-text-1)}:host([appearance=outline-fill][kind=neutral]) button:hover,:host([appearance=outline-fill][kind=neutral]) a:hover{--calcite-internal-button-shadow-color: var(--calcite-color-foreground-3);--calcite-internal-button-border-color: var(--calcite-color-border-input)}:host([appearance=outline-fill][kind=neutral]) button:focus,:host([appearance=outline-fill][kind=neutral]) a:focus{--calcite-internal-button-shadow-color: var(--calcite-color-foreground-3)}:host([appearance=outline-fill][kind=neutral]) button:active,:host([appearance=outline-fill][kind=neutral]) a:active{--calcite-internal-button-shadow-color: var(--calcite-color-foreground-3);--calcite-internal-button-border-color: var(--calcite-color-text-3)}:host([appearance=solid][kind=neutral]) button:hover,:host([appearance=solid][kind=neutral]) a:hover{--calcite-internal-button-background-color: var(--calcite-color-border-3)}:host([appearance=solid][kind=neutral]) button:active,:host([appearance=solid][kind=neutral]) a:active{--calcite-internal-button-background-color: var(--calcite-color-border-2)}:host([appearance=outline-fill][kind=inverse]) button,:host([appearance=outline-fill][kind=inverse]) a{--calcite-internal-button-text-color: var(--calcite-color-text-1);--calcite-internal-button-border-color: var(--calcite-color-inverse);--calcite-internal-button-loader-color: var(--calcite-color-text-1)}:host([appearance=outline-fill][kind=inverse]) button:hover,:host([appearance=outline-fill][kind=inverse]) a:hover{--calcite-internal-button-border-color: var(--calcite-color-inverse-hover);--calcite-internal-button-shadow-color: var(--calcite-color-inverse-hover)}:host([appearance=outline-fill][kind=inverse]) button:focus,:host([appearance=outline-fill][kind=inverse]) a:focus{--calcite-internal-button-border-color: var(--calcite-color-inverse);--calcite-internal-button-shadow-color: var(--calcite-color-inverse)}:host([appearance=outline-fill][kind=inverse]) button:active,:host([appearance=outline-fill][kind=inverse]) a:active{--calcite-internal-button-border-color: var(--calcite-color-inverse-press);--calcite-internal-button-shadow-color: var(--calcite-color-inverse-press)}:host([appearance=outline]) button,:host([appearance=outline]) a{--calcite-internal-button-background-color: var(--calcite-color-transparent);border-style:solid;border-width:var(--calcite-button-border-size, 1px)}:host([appearance=outline]) button:hover,:host([appearance=outline]) a:hover{--calcite-internal-button-background-color: var(--calcite-color-transparent-hover)}:host([appearance=outline]) button:active,:host([appearance=outline]) a:active{--calcite-internal-button-background-color: var(--calcite-color-transparent-press)}:host([appearance=outline][kind=brand]) button,:host([appearance=outline][kind=brand]) a{--calcite-internal-button-border-color: var(--calcite-color-brand);--calcite-internal-button-text-color: var(--calcite-color-brand);--calcite-internal-button-loader-color: var(--calcite-color-brand)}:host([appearance=outline][kind=brand]) button:hover,:host([appearance=outline][kind=brand]) a:hover{--calcite-internal-button-border-color: var(--calcite-color-brand-hover);--calcite-internal-button-text-color: var(--calcite-color-brand-hover);--calcite-internal-button-shadow-color: var(--calcite-color-brand-hover)}:host([appearance=outline][kind=brand]) button:focus,:host([appearance=outline][kind=brand]) a:focus{--calcite-internal-button-border-color: var(--calcite-color-brand);--calcite-internal-button-text-color: var(--calcite-color-brand);--calcite-internal-button-shadow-color: var(--calcite-color-brand)}:host([appearance=outline][kind=brand]) button:active,:host([appearance=outline][kind=brand]) a:active{--calcite-internal-button-border-color: var(--calcite-color-brand-press);--calcite-internal-button-text-color: var(--calcite-color-brand-press);--calcite-internal-button-shadow-color: var(--calcite-color-brand-press)}:host([appearance=outline][kind=brand]) button calcite-loader,:host([appearance=outline][kind=brand]) a calcite-loader{--calcite-internal-button-loader-color: var(--calcite-color-brand)}:host([appearance=outline][kind=danger]) button,:host([appearance=outline][kind=danger]) a{--calcite-internal-button-border-color: var(--calcite-color-status-danger);--calcite-internal-button-text-color: var(--calcite-color-status-danger);--calcite-internal-button-loader-color: var(--calcite-color-status-danger)}:host([appearance=outline][kind=danger]) button:hover,:host([appearance=outline][kind=danger]) a:hover{--calcite-internal-button-border-color: var(--calcite-color-status-danger-hover);--calcite-internal-button-text-color: var(--calcite-color-status-danger-hover);--calcite-internal-button-shadow-color: var(--calcite-color-status-danger-hover)}:host([appearance=outline][kind=danger]) button:focus,:host([appearance=outline][kind=danger]) a:focus{--calcite-internal-button-border-color: var(--calcite-color-status-danger);--calcite-internal-button-text-color: var(--calcite-color-status-danger);--calcite-internal-button-shadow-color: var(--calcite-color-status-danger)}:host([appearance=outline][kind=danger]) button:active,:host([appearance=outline][kind=danger]) a:active{--calcite-internal-button-border-color: var(--calcite-color-status-danger-press);--calcite-internal-button-text-color: var(--calcite-color-status-danger-press);--calcite-internal-button-shadow-color: var(--calcite-color-status-danger-press)}:host([appearance=outline][kind=danger]) button calcite-loader,:host([appearance=outline][kind=danger]) a calcite-loader{--calcite-internal-button-loader-color: var(--calcite-color-status-danger)}:host([appearance=outline][kind=neutral]) button,:host([appearance=outline][kind=neutral]) a{--calcite-internal-button-text-color: var(--calcite-color-text-1);--calcite-internal-button-border-color: var(--calcite-color-border-1);--calcite-internal-button-loader-color: var(--calcite-color-text-1)}:host([appearance=outline][kind=neutral]) button:hover,:host([appearance=outline][kind=neutral]) a:hover{--calcite-internal-button-shadow-color: var(--calcite-color-foreground-3);--calcite-internal-button-border-color: var(--calcite-color-border-input)}:host([appearance=outline][kind=neutral]) button:focus,:host([appearance=outline][kind=neutral]) a:focus{--calcite-internal-button-shadow-color: var(--calcite-color-foreground-3)}:host([appearance=outline][kind=neutral]) button:active,:host([appearance=outline][kind=neutral]) a:active{--calcite-internal-button-shadow-color: var(--calcite-color-foreground-3);--calcite-internal-button-border-color: var(--calcite-color-text-3)}:host([appearance=outline][kind=inverse]) button,:host([appearance=outline][kind=inverse]) a{--calcite-internal-button-text-color: var(--calcite-color-text-1);--calcite-internal-button-border-color: var(--calcite-color-inverse);--calcite-internal-button-loader-color: var(--calcite-color-text-1)}:host([appearance=outline][kind=inverse]) button:hover,:host([appearance=outline][kind=inverse]) a:hover{--calcite-internal-button-border-color: var(--calcite-color-inverse-hover);--calcite-internal-button-shadow-color: var(--calcite-color-inverse-hover)}:host([appearance=outline][kind=inverse]) button:focus,:host([appearance=outline][kind=inverse]) a:focus{--calcite-internal-button-border-color: var(--calcite-color-inverse);--calcite-internal-button-shadow-color: var(--calcite-color-inverse)}:host([appearance=outline][kind=inverse]) button:active,:host([appearance=outline][kind=inverse]) a:active{--calcite-internal-button-border-color: var(--calcite-color-inverse-press);--calcite-internal-button-shadow-color: var(--calcite-color-inverse-press)}:host([appearance=outline-fill][split-child=primary]) button,:host([appearance=outline][split-child=primary]) button,:host([appearance=outline-fill][split-child=primary]) a,:host([appearance=outline][split-child=primary]) a{border-inline-end-width:0;border-inline-start-width:1px}:host([appearance=outline-fill][split-child=secondary]) button,:host([appearance=outline][split-child=secondary]) button,:host([appearance=outline-fill][split-child=secondary]) a,:host([appearance=outline][split-child=secondary]) a{border-inline-start-width:0;border-inline-end-width:1px}:host([appearance=transparent]) button,:host([appearance=transparent]) a{--calcite-internal-button-background-color: var(--calcite-color-transparent)}:host([appearance=transparent]) button:hover,:host([appearance=transparent]) button:focus,:host([appearance=transparent]) a:hover,:host([appearance=transparent]) a:focus{--calcite-internal-button-background-color: var(--calcite-color-transparent-hover)}:host([appearance=transparent]) button:active,:host([appearance=transparent]) a:active{--calcite-internal-button-background-color: var(--calcite-color-transparent-press)}:host([appearance=transparent]:not(.enable-editing-button)) button,:host([appearance=transparent]:not(.enable-editing-button)) a{background-color:var(--calcite-color-transparent)}:host([appearance=transparent]:not(.enable-editing-button)) button:hover,:host([appearance=transparent]:not(.enable-editing-button)) a:hover{background-color:var(--calcite-color-transparent-hover)}:host([appearance=transparent]:not(.enable-editing-button)) button:active,:host([appearance=transparent]:not(.enable-editing-button)) a:active{background-color:var(--calcite-color-transparent-press)}:host([appearance=transparent][kind=brand]) button,:host([appearance=transparent][kind=brand]) a{--calcite-internal-button-text-color: var(--calcite-color-brand);--calcite-internal-button-loader-color: var(--calcite-color-brand)}:host([appearance=transparent][kind=brand]) button:hover,:host([appearance=transparent][kind=brand]) a:hover{--calcite-internal-button-text-color: var(--calcite-color-brand-hover)}:host([appearance=transparent][kind=brand]) button:focus,:host([appearance=transparent][kind=brand]) a:focus{--calcite-internal-button-text-color: var(--calcite-color-brand)}:host([appearance=transparent][kind=brand]) button:active,:host([appearance=transparent][kind=brand]) a:active{--calcite-internal-button-text-color: var(--calcite-color-brand-press)}:host([appearance=transparent][kind=brand]) button calcite-loader,:host([appearance=transparent][kind=brand]) a calcite-loader{--calcite-internal-button-loader-color: var(--calcite-color-brand)}:host([appearance=transparent][kind=danger]) button,:host([appearance=transparent][kind=danger]) a{--calcite-internal-button-text-color: var(--calcite-color-status-danger);--calcite-internal-button-loader-color: var(--calcite-color-status-danger)}:host([appearance=transparent][kind=danger]) button:hover,:host([appearance=transparent][kind=danger]) a:hover{--calcite-internal-button-text-color: var(--calcite-color-status-danger-hover)}:host([appearance=transparent][kind=danger]) button:focus,:host([appearance=transparent][kind=danger]) a:focus{--calcite-internal-button-text-color: var(--calcite-color-status-danger)}:host([appearance=transparent][kind=danger]) button:active,:host([appearance=transparent][kind=danger]) a:active{--calcite-internal-button-text-color: var(--calcite-color-status-danger-press)}:host([appearance=transparent][kind=danger]) button calcite-loader,:host([appearance=transparent][kind=danger]) a calcite-loader{--calcite-internal-button-loader-color: var(--calcite-color-status-danger)}:host([appearance=transparent][kind=neutral]:not(.cancel-editing-button)) button,:host([appearance=transparent][kind=neutral]:not(.cancel-editing-button)) a,:host([appearance=transparent][kind=neutral]:not(.cancel-editing-button)) calcite-loader{--calcite-internal-button-text-color: var(--calcite-color-text-1)}:host([appearance=transparent][kind=neutral].cancel-editing-button) button{--calcite-internal-button-text-color: var(--calcite-color-text-3)}:host([appearance=transparent][kind=neutral].cancel-editing-button) button:hover{--calcite-internal-button-text-color: var(--calcite-color-text-1);--calcite-internal-button-padding-y: 0}:host(.confirm-changes-button) button:focus,:host(.cancel-editing-button) button:focus,:host(.enable-editing-button) button:focus{outline-offset:-2px}:host([appearance=transparent][kind=inverse]) button:hover,:host([appearance=transparent][kind=inverse]) a:hover{background-color:var(--calcite-color-transparent-inverse-hover)}:host([appearance=transparent][kind=inverse]) button:active,:host([appearance=transparent][kind=inverse]) a:active{background-color:var(--calcite-color-transparent-inverse-press)}:host([appearance=transparent][kind=inverse]) button calcite-loader,:host([appearance=transparent][kind=inverse]) a calcite-loader{--calcite-internal-button-text-color: var(--calcite-color-text-inverse)}:host([scale=s]) button.content--slotted,:host([scale=s]) a.content--slotted{font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s][appearance=transparent]) button.content--slotted,:host([scale=s][appearance=transparent]) a.content--slotted{--calcite-internal-button-padding-x: .5rem}:host([scale=s]) button,:host([scale=s]) a{--calcite-internal-button-padding-y: 3px}:host([scale=m]) button.content--slotted,:host([scale=m]) a.content--slotted{--calcite-internal-button-padding-x: 11px;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) button,:host([scale=m]) a{--calcite-internal-button-padding-y: 7px}:host([scale=m][appearance=transparent]) button.content--slotted,:host([scale=m][appearance=transparent]) a.content--slotted{--calcite-internal-button-padding-x: .75rem}:host([scale=l]) button.content--slotted,:host([scale=l]) a.content--slotted{--calcite-internal-button-padding-x: 15px;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .button-padding{--calcite-internal-button-padding-x: 1rem;--calcite-internal-button-padding-y: 11px}:host([scale=l]) .button-padding--shrunk{--calcite-internal-button-padding-y: 9px}:host([scale=s]) button:not(.content--slotted),:host([scale=s]) a:not(.content--slotted){--calcite-internal-button-padding-x: .125rem;--calcite-internal-button-padding-y: 3px;inline-size:1.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-block-size:1.5rem}:host([scale=m]) button:not(.content--slotted),:host([scale=m]) a:not(.content--slotted){--calcite-internal-button-padding-x: .125rem;--calcite-internal-button-padding-y: 7px;inline-size:2rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-block-size:2rem}:host([scale=l]) button:not(.content--slotted),:host([scale=l]) a:not(.content--slotted){--calcite-internal-button-padding-x: .125rem;--calcite-internal-button-padding-y: 9px;inline-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-block-size:2.75rem}:host(:is([scale=s],[scale=m],[scale=l])[width=full]) a:not(.content--slotted),:host(:is([scale=s],[scale=m],[scale=l])[width=full]) button:not(.content--slotted){inline-size:var(--calcite-container-size-content-fluid)}:host([scale=l][appearance=transparent]) button:not(.content--slotted),:host([scale=l][appearance=transparent]) a:not(.content--slotted){--calcite-internal-button-padding-y: .625rem}:host([scale=s][icon-start][icon-end]) button:not(.content--slotted),:host([scale=s][icon-start][icon-end]) a:not(.content--slotted){--calcite-internal-button-padding-x: 23px;block-size:1.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=s][icon-start][icon-end][appearance=transparent]) button:not(.content--slotted),:host([scale=s][icon-start][icon-end][appearance=transparent]) a:not(.content--slotted){--calcite-internal-button-padding-x: 1.5rem}:host([scale=m][icon-start][icon-end]) button:not(.content--slotted),:host([scale=m][icon-start][icon-end]) a:not(.content--slotted){--calcite-internal-button-padding-x: 2rem;block-size:2rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=m][icon-start][icon-end][appearance=transparent]) button:not(.content--slotted),:host([scale=m][icon-start][icon-end][appearance=transparent]) a:not(.content--slotted){--calcite-internal-button-padding-x: 33px}:host([scale=l][icon-start][icon-end]) button:not(.content--slotted),:host([scale=l][icon-start][icon-end]) a:not(.content--slotted){--calcite-internal-button-padding-x: 43px;block-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l][icon-start][icon-end]) button:not(.content--slotted) .icon--start+.icon--end,:host([scale=l][icon-start][icon-end]) a:not(.content--slotted) .icon--start+.icon--end{margin-inline-start:1rem}:host([scale=l][icon-start][icon-end][appearance=transparent]) button:not(.content--slotted),:host([scale=l][icon-start][icon-end][appearance=transparent]) a:not(.content--slotted){--calcite-internal-button-padding-x: 2.75rem}:host([hidden]){display:none}[hidden]{display:none}`;
class Button extends dist/* LitElement */.WF {
  constructor() {
    super(...arguments);
    this.attributeWatch = (0,controllers/* useWatchAttributes */.oW)(["aria-expanded"], this.handleGlobalAttributesChanged);
    this.contentEl = (0,ref/* createRef */._)();
    this.mutationObserver = (0,observers.c)("mutation", () => this.updateHasContent());
    this.resizeObserver = (0,observers.c)("resize", () => this.setTooltipText());
    this.messages = (0,useT9n.u)();
    this.hasContent = false;
    this.alignment = "center";
    this.appearance = "solid";
    this.disabled = false;
    this.download = false;
    this.kind = "brand";
    this.loading = false;
    this.round = false;
    this.scale = "m";
    this.splitChild = false;
    this.type = "button";
    this.width = "auto";
  }
  static {
    this.properties = { hasContent: [16, {}, { state: true }], tooltipText: [16, {}, { state: true }], alignment: [3, {}, { reflect: true }], appearance: [3, {}, { reflect: true }], disabled: [7, {}, { reflect: true, type: Boolean }], download: [3, { converter: dist/* stringOrBoolean */.pf }, { reflect: true }], form: [3, {}, { reflect: true }], href: [3, {}, { reflect: true }], iconEnd: [3, {}, { reflect: true }], iconFlipRtl: [3, {}, { reflect: true }], iconStart: [3, {}, { reflect: true }], kind: [3, {}, { reflect: true }], label: 1, loading: [7, {}, { reflect: true, type: Boolean }], messageOverrides: [0, {}, { attribute: false }], name: [3, {}, { reflect: true }], rel: [3, {}, { reflect: true }], round: [7, {}, { reflect: true, type: Boolean }], scale: [3, {}, { reflect: true }], splitChild: [3, {}, { reflect: true }], target: [3, {}, { reflect: true }], type: [3, {}, { reflect: true }], width: [3, {}, { reflect: true }] };
  }
  static {
    this.styles = styles;
  }
  async setFocus() {
    await (0,component.c)(this);
    this.childEl?.focus();
  }
  connectedCallback() {
    super.connectedCallback();
    this.setupTextContentObserver();
    (0,label.c)(this);
    this.formEl = (0,chunks_form.f)(this);
  }
  async load() {
    if (!lit/* isServer */.S$) {
      this.updateHasContent();
    }
  }
  updated() {
    (0,interactive.u)(this);
  }
  loaded() {
    this.setTooltipText();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.mutationObserver?.disconnect();
    (0,label.d)(this);
    this.resizeObserver?.disconnect();
    this.formEl = null;
  }
  handleGlobalAttributesChanged() {
    this.requestUpdate();
  }
  updateHasContent() {
    this.hasContent = (0,dom.D)(this.el);
  }
  setupTextContentObserver() {
    this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
  }
  onLabelClick() {
    this.handleClick();
    this.setFocus();
  }
  handleClick() {
    const { type } = this;
    if (this.href) {
      return;
    }
    if (type === "submit") {
      (0,chunks_form.s)(this);
    } else if (type === "reset") {
      (0,chunks_form.r)(this);
    }
  }
  setTooltipText() {
    const { contentEl: { value: contentEl } } = this;
    if (contentEl) {
      this.tooltipText = contentEl.offsetWidth < contentEl.scrollWidth ? this.el.innerText || null : null;
    }
  }
  setChildEl(el) {
    this.childEl = el;
    if (el) {
      this.resizeObserver?.observe(el);
    }
  }
  render() {
    const childElType = this.href ? "a" : "button";
    const DynamicHtmlTag = this.href ? (0,node_static/* literal */.eu)`a` : (0,node_static/* literal */.eu)`button`;
    const loaderNode = this.loading ? (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(CSS.buttonLoader)}><calcite-loader class=${(0,dist/* safeClassMap */.CP)(this.loading ? CSS.loadingIn : CSS.loadingOut)} inline .label=${this.messages.loading} .scale=${this.scale === "l" ? "m" : "s"}></calcite-loader></div>` : null;
    const noStartEndIcons = !this.iconStart && !this.iconEnd;
    const iconStartEl = (0,lit/* html */.qy)`<calcite-icon class=${(0,dist/* safeClassMap */.CP)({ [CSS.icon]: true, [CSS.iconStart]: true })} .flipRtl=${this.iconFlipRtl === "start" || this.iconFlipRtl === "both"} .icon=${this.iconStart} .scale=${(0,component.g)(this.scale)}></calcite-icon>`;
    const iconEndEl = (0,lit/* html */.qy)`<calcite-icon class=${(0,dist/* safeClassMap */.CP)({ [CSS.icon]: true, [CSS.iconEnd]: true })} .flipRtl=${this.iconFlipRtl === "end" || this.iconFlipRtl === "both"} .icon=${this.iconEnd} .scale=${(0,component.g)(this.scale)}></calcite-icon>`;
    const contentEl = (0,lit/* html */.qy)`<span class=${(0,dist/* safeClassMap */.CP)(CSS.content)} ${(0,ref/* ref */.K)(this.contentEl)}><slot></slot></span>`;
    return (0,interactive.I)({ disabled: this.disabled, children: (0,node_static/* html */.qy)`<${DynamicHtmlTag} .ariaBusy=${this.loading} .ariaExpanded=${this.el.ariaExpanded ? this.el.ariaExpanded : null} .ariaLabel=${!this.loading ? (0,label.g)(this) : this.messages.loading} aria-live=polite class=${(0,dist/* safeClassMap */.CP)({
      [CSS.buttonPadding]: noStartEndIcons,
      [CSS.buttonPaddingShrunk]: !noStartEndIcons,
      [CSS.contentSlotted]: this.hasContent,
      [CSS.iconStartEmpty]: !this.iconStart,
      [CSS.iconEndEmpty]: !this.iconEnd
    })} .disabled=${childElType === "button" ? this.disabled : null} download=${(childElType === "a" ? this.download === true || this.download === "" ? "" : this.download || null : null) ?? lit/* nothing */.s6} href=${(childElType === "a" && this.href) ?? lit/* nothing */.s6} name=${(childElType === "button" && this.name) ?? lit/* nothing */.s6} @click=${this.handleClick} rel=${(childElType === "a" && this.rel) ?? lit/* nothing */.s6} tabindex=${(this.disabled ? -1 : null) ?? lit/* nothing */.s6} target=${(childElType === "a" && this.target) ?? lit/* nothing */.s6} title=${this.tooltipText ?? lit/* nothing */.s6} type=${(childElType === "button" ? this.type : null) ?? lit/* nothing */.s6} ${(0,ref/* ref */.K)(this.setChildEl)}>${loaderNode}${this.iconStart ? iconStartEl : null}${this.hasContent ? contentEl : null}${this.iconEnd ? iconEndEl : null}</${DynamicHtmlTag}>` });
  }
}
(0,runtime.c)("calcite-button", Button);


;// ./node_modules/@esri/calcite-components/dist/components/calcite-button/index.js




/***/ })

};
;