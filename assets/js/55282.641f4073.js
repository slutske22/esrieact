"use strict";
exports.id = 55282;
exports.ids = [55282];
exports.modules = {

/***/ 55282:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Input: () => (/* reexport */ Input)
});

// EXTERNAL MODULE: ./node_modules/@esri/calcite-components/dist/components/calcite-input-message/index.js + 1 modules
var calcite_input_message = __webpack_require__(21703);
// EXTERNAL MODULE: ./node_modules/@esri/calcite-components/dist/chunks/runtime.js
var runtime = __webpack_require__(34088);
// EXTERNAL MODULE: ./node_modules/lit-html/node/lit-html.js
var lit_html = __webpack_require__(40173);
// EXTERNAL MODULE: ./node_modules/@arcgis/lumina/dist/index.js + 15 modules
var dist = __webpack_require__(95925);
// EXTERNAL MODULE: ./node_modules/@esri/calcite-components/dist/chunks/dom.js
var dom = __webpack_require__(79000);
// EXTERNAL MODULE: ./node_modules/@lit/reactive-element/node/css-tag.js
var css_tag = __webpack_require__(9451);
;// ./node_modules/@esri/calcite-components/dist/components/calcite-progress/customElement.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */





const styles = (0,css_tag/* css */.AH)`:host{position:relative;display:block;inline-size:100%}.track,.bar{position:absolute;inset-block-start:0px;block-size:2px}.track{z-index:var(--calcite-z-index);inline-size:100%;overflow:hidden;background-color:var(--calcite-progress-background-color, var(--calcite-color-border-3))}.bar{z-index:var(--calcite-z-index);background-color:var(--calcite-progress-fill-color, var(--calcite-color-brand))}@media (forced-colors: active){.track{background-color:highlightText}.bar{background-color:linkText}}.indeterminate{inline-size:20%;animation:looping-progress-bar-ani calc(var(--calcite-internal-animation-timing-medium) / var(--calcite-internal-duration-factor) * 11 / var(--calcite-internal-duration-factor)) linear infinite}.indeterminate.calcite--rtl{animation-name:looping-progress-bar-ani-rtl}.reversed{animation-direction:reverse}.text{padding-inline:0px;padding-block:1rem 0px;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-progress-text-color, var(--calcite-color-text-2))}@keyframes looping-progress-bar-ani{0%{transform:translate3d(-100%,0,0)}50%{inline-size:40%}to{transform:translate3d(600%,0,0)}}@keyframes looping-progress-bar-ani-rtl{0%{transform:translate3d(100%,0,0)}50%{inline-size:40%}to{transform:translate3d(-600%,0,0)}}:host([hidden]){display:none}[hidden]{display:none}`;
class Progress extends dist/* LitElement */.WF {
  constructor() {
    super(...arguments);
    this.reversed = false;
    this.type = "determinate";
    this.value = 0;
  }
  static {
    this.properties = { label: 1, reversed: [7, {}, { reflect: true, type: Boolean }], text: 1, type: [3, {}, { reflect: true }], value: [9, {}, { type: Number }] };
  }
  static {
    this.styles = styles;
  }
  render() {
    const isDeterminate = this.type === "determinate";
    const barStyles = isDeterminate ? { width: `${this.value}%` } : {};
    const dir = (0,dom.g)(this.el);
    return (0,lit_html/* html */.qy)`<div .ariaLabel=${this.label || this.text} .ariaValueMax=${isDeterminate ? "100" : void 0} .ariaValueMin=${isDeterminate ? "0" : void 0} .ariaValueNow=${isDeterminate ? this.value : void 0} role=progressbar><div class="track"><div class=${(0,dist/* safeClassMap */.CP)({
      bar: true,
      indeterminate: this.type === "indeterminate",
      [runtime.C.rtl]: dir === "rtl",
      reversed: this.reversed
    })} style=${(0,dist/* safeStyleMap */.zl)(barStyles)}></div></div>${this.text ? (0,lit_html/* html */.qy)`<div class="text">${this.text}</div>` : null}</div>`;
  }
}
(0,runtime.c)("calcite-progress", Progress);


;// ./node_modules/@esri/calcite-components/dist/components/calcite-progress/index.js

// EXTERNAL MODULE: ./node_modules/@esri/calcite-components/dist/components/calcite-icon/index.js + 1 modules
var calcite_icon = __webpack_require__(55012);
// EXTERNAL MODULE: ./node_modules/lit-html/node/directives/live.js
var live = __webpack_require__(4015);
// EXTERNAL MODULE: ./node_modules/lit-html/node/directives/keyed.js
var keyed = __webpack_require__(42223);
// EXTERNAL MODULE: ./node_modules/lit/index.js + 2 modules
var lit = __webpack_require__(67943);
// EXTERNAL MODULE: ./node_modules/lit-html/node/directives/ref.js + 1 modules
var ref = __webpack_require__(51362);
// EXTERNAL MODULE: ./node_modules/lit-html/node/static.js
var node_static = __webpack_require__(66778);
// EXTERNAL MODULE: ./node_modules/@arcgis/lumina/dist/controllers/index.js
var controllers = __webpack_require__(86229);
// EXTERNAL MODULE: ./node_modules/@esri/calcite-components/dist/chunks/form.js
var chunks_form = __webpack_require__(21796);
// EXTERNAL MODULE: ./node_modules/@esri/calcite-components/dist/chunks/interactive.js
var interactive = __webpack_require__(60992);
// EXTERNAL MODULE: ./node_modules/@esri/calcite-components/dist/chunks/key.js
var key = __webpack_require__(60939);
// EXTERNAL MODULE: ./node_modules/@esri/calcite-components/dist/chunks/label.js
var label = __webpack_require__(93174);
// EXTERNAL MODULE: ./node_modules/@esri/calcite-components/dist/chunks/component.js
var component = __webpack_require__(83623);
// EXTERNAL MODULE: ./node_modules/@esri/calcite-components/dist/chunks/locale.js
var locale = __webpack_require__(21132);
// EXTERNAL MODULE: ./node_modules/@esri/calcite-components/dist/chunks/Validation.js
var Validation = __webpack_require__(45237);
// EXTERNAL MODULE: ./node_modules/@esri/calcite-components/dist/chunks/useT9n.js
var useT9n = __webpack_require__(75572);
;// ./node_modules/@esri/calcite-components/dist/chunks/input.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */
const minMaxStepTypes = ["date", "datetime-local", "month", "number", "range", "time", "week"];
const patternTypes = ["email", "password", "search", "tel", "text", "url"];
const minMaxLengthTypes = ["email", "password", "search", "tel", "text", "textarea", "url"];
function updateConstraintValidation(inputComponent, input, propName, matchesType) {
  const attributeName = propName.toLowerCase();
  const value = inputComponent[propName];
  if (matchesType && value != null) {
    input.setAttribute(attributeName, `${value}`);
  } else {
    input.removeAttribute(attributeName);
  }
}
function syncHiddenFormInput(type, inputComponent, hiddenFormInput) {
  hiddenFormInput.type = type === "textarea" ? "text" : type;
  const isMinMaxStepType = minMaxStepTypes.includes(type);
  const numericInputComponent = inputComponent;
  updateConstraintValidation(numericInputComponent, hiddenFormInput, "min", isMinMaxStepType);
  updateConstraintValidation(numericInputComponent, hiddenFormInput, "max", isMinMaxStepType);
  updateConstraintValidation(numericInputComponent, hiddenFormInput, "step", isMinMaxStepType);
  const isMinMaxLengthType = minMaxLengthTypes.includes(type);
  const textualInputComponent = inputComponent;
  updateConstraintValidation(textualInputComponent, hiddenFormInput, "minLength", isMinMaxLengthType);
  updateConstraintValidation(textualInputComponent, hiddenFormInput, "maxLength", isMinMaxLengthType);
  const isPatternType = patternTypes.includes(type);
  updateConstraintValidation(textualInputComponent, hiddenFormInput, "pattern", isPatternType);
}


;// ./node_modules/@esri/calcite-components/dist/components/calcite-input/customElement.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */



















const CSS = {
  loader: "loader",
  clearButton: "clear-button",
  editingEnabled: "editing-enabled",
  inlineChild: "inline-child",
  inputIcon: "icon",
  prefix: "prefix",
  suffix: "suffix",
  numberButtonWrapper: "number-button-wrapper",
  buttonItemHorizontal: "number-button-item--horizontal",
  wrapper: "element-wrapper",
  inputWrapper: "wrapper",
  actionWrapper: "action-wrapper",
  numberButtonItem: "number-button-item",
  hasSuffix: "has-suffix",
  hasPrefix: "has-prefix"
};
const IDS = {
  validationMessage: "inputValidationMessage"
};
const INPUT_TYPE_ICONS = {
  tel: "phone",
  password: "lock",
  email: "email-address",
  date: "calendar",
  time: "clock",
  search: "search"
};
const SLOTS = {
  action: "action"
};
const customElement_styles = (0,css_tag/* css */.AH)`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) input[type=file],:host([scale=s]) textarea{min-block-size:1.5rem}:host([scale=s]) .number-button-wrapper,:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=s]) textarea{block-size:auto;padding-block:.25rem;padding-inline:.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) textarea,:host([scale=m]) input[type=file]{min-block-size:2rem}:host([scale=m]) .number-button-wrapper,:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=m]) textarea{block-size:auto;padding-block:.5rem;padding-inline:.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) textarea,:host([scale=l]) input[type=file]{min-block-size:2.75rem}:host([scale=l]) .number-button-wrapper,:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([scale=l]) textarea{block-size:auto;padding-block:.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([disabled]) textarea{resize:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}textarea,input{position:relative;margin:0;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;text-overflow:ellipsis;border-width:1px;border-style:solid;font-family:inherit;font-weight:var(--calcite-font-weight-normal);border-color:var(--calcite-input-border-color, var(--calcite-color-border-input));background-color:var(--calcite-input-background-color, var(--calcite-color-foreground-1));color:var(--calcite-input-text-color, var(--calcite-color-text-1));transition:var(--calcite-animation-timing),block-size 0,outline-offset 0s;-webkit-appearance:none}textarea:placeholder-shown,input:placeholder-shown{text-overflow:ellipsis}textarea{border-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp))}input{border-start-start-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp));border-start-end-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp));border-end-start-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp));border-end-end-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp))}.has-prefix input{border-start-start-radius:0;border-end-start-radius:0}.has-suffix input,.element-wrapper:has(.clear-button) input,:host([number-button-type=vertical][type=number]) input,:host([number-button-type=horizontal]) .has-suffix .suffix,:host([number-button-type=vertical][type=number]) .has-suffix .suffix,:host([number-button-type=vertical][type=number]) .clear-button,:host([number-button-type=horizontal][type=number]) .clear-button{border-start-end-radius:0;border-end-end-radius:0}:host([number-button-type=horizontal]) input{border-start-start-radius:0;border-start-end-radius:0;border-end-start-radius:0;border-end-end-radius:0}.has-prefix .prefix:first-child,:host([number-button-type=horizontal]) .number-button-item[data-adjustment=down]{border-start-start-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp));border-end-start-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp))}.has-suffix .suffix,:host([number-button-type=vertical][type=number][read-only]) .has-suffix .suffix,:host([clearable]) .clear-button,:host([number-button-type=horizontal]) .number-button-item[data-adjustment=up]{border-end-end-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp));border-start-end-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp))}:host([clearable]) .has-suffix .clear-button{border-end-end-radius:0;border-start-end-radius:0}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]{border-block-start-width:0px;border-end-end-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp))}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]{border-start-end-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp))}input[type=search]::-webkit-search-decoration{-webkit-appearance:none}input:focus,textarea:focus{border-color:var(--calcite-color-brand);color:var(--calcite-input-text-color, var(--calcite-color-text-1))}input[readonly],textarea[readonly]{font-weight:var(--calcite-font-weight-medium);background-color:var(--calcite-input-background-color, var(--calcite-color-background))}input[readonly]:focus,textarea[readonly]:focus{color:var(--calcite-input-text-color, var(--calcite-color-text-1))}textarea,input{outline-color:transparent}textarea:focus,input:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}:host([status=invalid]) input,:host([status=invalid]) textarea{border-color:var(--calcite-color-status-danger)}:host([status=invalid]) input:focus,:host([status=invalid]) textarea:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}:host([scale=s]) .icon{inset-inline-start:.5rem}:host([scale=m]) .icon{inset-inline-start:.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;display:block;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;color:var(--calcite-input-icon-color, var(--calcite-color-text-3));z-index:var(--calcite-z-index)}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration,input[type=date]::-webkit-clear-button,input[type=time]::-webkit-clear-button{display:none}.clear-button{pointer-events:initial;order:4;margin:0;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;outline-color:transparent;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;border-color:var(--calcite-input-border-color, var(--calcite-color-border-input));background-color:var(--calcite-input-actions-background-color, var(--calcite-color-foreground-1));border-inline-start-width:0px}.clear-button calcite-icon{transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;color:var(--calcite-input-actions-icon-color, var(--calcite-color-text-3))}.clear-button:hover{background-color:var(--calcite-input-actions-background-color-hover, var(--calcite-color-foreground-2))}.clear-button:hover calcite-icon{color:var(--calcite-input-actions-icon-color-hover, var(--calcite-color-text-1))}.clear-button:active{background-color:var(--calcite-input-actions-background-color-press, var(--calcite-color-foreground-3))}.clear-button:active calcite-icon{color:var(--calcite-input-actions-icon-color-press, var(--calcite-color-text-1))}.clear-button:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}.clear-button:disabled{opacity:var(--calcite-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block;--calcite-progress-background-color: var(--calcite-input-loading-background-color);--calcite-progress-fill-color: var(--calcite-input-loading-fill-color)}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;font-weight:var(--calcite-font-weight-medium);line-height:1;border-color:var(--calcite-input-border-color, var(--calcite-color-border-input))}.prefix{order:2;border-inline-end-width:0px;inline-size:var(--calcite-input-prefix-size, auto);background-color:var(--calcite-input-prefix-background-color, var(--calcite-color-background));color:var(--calcite-input-prefix-text-color, var(--calcite-color-text-2))}.suffix{order:5;border-inline-start-width:0px;inline-size:var(--calcite-input-suffix-size, auto);background-color:var(--calcite-input-suffix-background-color, var(--calcite-color-background));color:var(--calcite-input-suffix-text-color, var(--calcite-color-text-2))}:host([alignment=start]) textarea,:host([alignment=start]) input{text-align:start}:host([alignment=end]) textarea,:host([alignment=end]) input{text-align:end}input[type=number]{-moz-appearance:textfield}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:textfield;margin:0}.number-button-wrapper{pointer-events:none;order:6;box-sizing:border-box;display:flex;flex-direction:column;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out}:host([number-button-type=vertical]) .wrapper{flex-direction:row;display:flex}:host([number-button-type=vertical]) input,:host([number-button-type=vertical]) textarea{order:2}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=down] calcite-icon{transform:rotate(-90deg)}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=up] calcite-icon{transform:rotate(-90deg)}.number-button-item.number-button-item--horizontal{border-color:var(--calcite-input-border-color, var(--calcite-color-border-input));order:1;max-block-size:100%;min-block-size:100%;align-self:stretch;border-width:1px;border-style:solid}.number-button-item.number-button-item--horizontal[data-adjustment=down] calcite-icon,.number-button-item.number-button-item--horizontal[data-adjustment=up] calcite-icon{transform:rotate(90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down]{border-inline-end-width:0px}.number-button-item.number-button-item--horizontal[data-adjustment=up]{border-inline-start-width:0px;order:5}.number-button-item{max-block-size:50%;min-block-size:50%;pointer-events:initial;margin:0;box-sizing:border-box;display:flex;cursor:pointer;align-items:center;align-self:center;border-width:1px;border-style:solid;background-color:var(--calcite-color-foreground-1);padding-block:0px;padding-inline:.5rem;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;border-color:var(--calcite-input-border-color, var(--calcite-color-border-input));background-color:var(--calcite-input-actions-background-color, var(--calcite-color-foreground-1));border-inline-start-width:0px}.number-button-item calcite-icon{pointer-events:none;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;color:var(--calcite-input-actions-icon-color, var(--calcite-color-text-3))}.number-button-item:hover{background-color:var(--calcite-input-actions-background-color-hover, var(--calcite-color-foreground-2))}.number-button-item:hover calcite-icon{color:var(--calcite-input-actions-icon-color-hover, var(--calcite-color-text-1))}.number-button-item:active{background-color:var(--calcite-input-actions-background-color-press, var(--calcite-color-foreground-3))}.number-button-item:active calcite-icon{color:var(--calcite-input-actions-icon-color-press, var(--calcite-color-text-1))}.number-button-item:disabled{pointer-events:none}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center;border-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp));box-shadow:var(--calcite-input-shadow, var(--calcite-shadow-none))}input[type=date]::-webkit-input-placeholder{visibility:hidden!important}:host([type=color]) input{padding:.25rem}:host([type=file]) input{cursor:pointer;border-width:1px;border-style:dashed;background-color:var(--calcite-color-foreground-1);text-align:center;border-color:var(--calcite-input-border-color, var(--calcite-color-border-input));block-size:initial}:host([type=file][scale=s]) input{padding-block:1px;padding-inline:.5rem}:host([type=file][scale=m]) input{padding-block:.25rem;padding-inline:.75rem}:host([type=file][scale=l]) input{padding-block:.5rem;padding-inline:1rem}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-color-border-1)}input.inline-child{background-color:transparent;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out}input.inline-child .editing-enabled{background-color:inherit}input.inline-child:not(.editing-enabled){display:flex;cursor:pointer;text-overflow:ellipsis;border-color:transparent;padding-inline-start:0}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:.5rem}:host([scale=s]) .validation-container{padding-block-start:.25rem}::slotted(input[slot=hidden-form-input]){margin:0!important;opacity:0!important;outline:none!important;padding:0!important;position:absolute!important;inset:0!important;transform:none!important;-webkit-appearance:none!important;z-index:-1!important}:host([hidden]){display:none}[hidden]{display:none}::placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-input-placeholder-text-color, var(--calcite-color-text-3))}`;
class Input extends dist/* LitElement */.WF {
  constructor() {
    super();
    this.actionWrapperEl = (0,ref/* createRef */._)();
    this.attributeWatch = (0,controllers/* useWatchAttributes */.oW)(["autofocus", "enterkeyhint", "inputmode", "spellcheck"], this.handleGlobalAttributesChanged);
    this.childElType = "input";
    this.inputWrapperEl = (0,ref/* createRef */._)();
    this.onHiddenFormInputInput = (event) => {
      if (event.target.name === this.name) {
        this.setValue({
          value: event.target.value,
          origin: "direct"
        });
      }
      this.setFocus();
      event.stopPropagation();
    };
    this.previousValueOrigin = "initial";
    this.userChangedValue = false;
    this._value = "";
    this.messages = (0,useT9n.u)();
    this.slottedActionElDisabledInternally = false;
    this.alignment = "start";
    this.clearable = false;
    this.disabled = false;
    this.editingEnabled = false;
    this.groupSeparator = false;
    this.iconFlipRtl = false;
    this.loading = false;
    this.localeFormat = false;
    this.multiple = false;
    this.numberButtonType = "vertical";
    this.readOnly = false;
    this.required = false;
    this.scale = "m";
    this.status = "idle";
    this.type = "text";
    this.validity = {
      valid: false,
      badInput: false,
      customError: false,
      patternMismatch: false,
      rangeOverflow: false,
      rangeUnderflow: false,
      stepMismatch: false,
      tooLong: false,
      tooShort: false,
      typeMismatch: false,
      valueMissing: false
    };
    this.calciteInputChange = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.calciteInputInput = (0,dist/* createEvent */.lh)();
    this.calciteInternalInputBlur = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.calciteInternalInputFocus = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.listen("click", this.clickHandler);
    this.listen("keydown", this.keyDownHandler);
  }
  static {
    this.properties = { displayedValue: [16, {}, { state: true }], slottedActionElDisabledInternally: [16, {}, { state: true }], accept: 1, alignment: [3, {}, { reflect: true }], autocomplete: [0, {}, { attribute: false }], clearable: [7, {}, { reflect: true, type: Boolean }], disabled: [7, {}, { reflect: true, type: Boolean }], editingEnabled: [7, {}, { reflect: true, type: Boolean }], files: [0, {}, { attribute: false }], form: [3, {}, { reflect: true }], groupSeparator: [7, {}, { reflect: true, type: Boolean }], icon: [3, { converter: dist/* stringOrBoolean */.pf }, { reflect: true }], iconFlipRtl: [7, {}, { reflect: true, type: Boolean }], label: 1, loading: [7, {}, { reflect: true, type: Boolean }], localeFormat: [5, {}, { type: Boolean }], max: [11, {}, { reflect: true, type: Number }], maxLength: [11, {}, { reflect: true, type: Number }], messageOverrides: [0, {}, { attribute: false }], min: [11, {}, { reflect: true, type: Number }], minLength: [11, {}, { reflect: true, type: Number }], multiple: [5, {}, { type: Boolean }], name: [3, {}, { reflect: true }], numberButtonType: [3, {}, { reflect: true }], numberingSystem: [3, {}, { reflect: true }], pattern: 1, placeholder: 1, prefixText: 1, readOnly: [7, {}, { reflect: true, type: Boolean }], required: [7, {}, { reflect: true, type: Boolean }], scale: [3, {}, { reflect: true }], status: [3, {}, { reflect: true }], step: [3, {}, { reflect: true }], suffixText: 1, type: [3, {}, { reflect: true }], validationIcon: [3, { converter: dist/* stringOrBoolean */.pf }, { reflect: true }], validationMessage: 1, validity: [0, {}, { attribute: false }], value: 1 };
  }
  static {
    this.styles = customElement_styles;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    const oldValue = this._value;
    if (value !== oldValue) {
      this._value = value;
      this.valueWatcher(value, oldValue);
      if (value && this._value === "") {
        this.setValue({
          origin: "reset",
          value: oldValue
        });
      }
    }
  }
  async selectText() {
    if (this.type === "number") {
      this.childNumberEl?.select();
    } else {
      this.childEl?.select();
    }
  }
  async setFocus() {
    await (0,component.c)(this);
    (0,dom.h)(this.type === "number" ? this.childNumberEl : this.childEl);
  }
  connectedCallback() {
    super.connectedCallback();
    this.inlineEditableEl = this.el.closest("calcite-inline-editable");
    if (this.inlineEditableEl) {
      this.editingEnabled = this.inlineEditableEl.editingEnabled || false;
    }
    (0,label.c)(this);
    (0,chunks_form.c)(this);
    this.el.addEventListener(chunks_form.i, this.onHiddenFormInputInput);
  }
  async load() {
    this.childElType = this.type === "textarea" ? "textarea" : "input";
    this.maxString = this.max?.toString();
    this.minString = this.min?.toString();
    this.requestedIcon = (0,dom.v)(INPUT_TYPE_ICONS, this.icon, this.type);
    this.setPreviousEmittedValue(this.value);
    this.setPreviousValue(this.value);
    if (this.type === "number") {
      if (this.value === "Infinity" || this.value === "-Infinity") {
        this.displayedValue = this.value;
        this.previousEmittedValue = this.value;
      } else {
        this.warnAboutInvalidNumberValue(this.value);
        this.setValue({
          origin: "connected",
          value: (0,locale.i)(this.value) ? this.value : ""
        });
      }
    }
  }
  willUpdate(changes) {
    if (changes.has("max")) {
      this.maxString = this.max?.toString() || null;
    }
    if (changes.has("min")) {
      this.minString = this.min?.toString() || null;
    }
    if (changes.has("icon") || changes.has("type") && (this.hasUpdated || this.type !== "text")) {
      this.requestedIcon = (0,dom.v)(INPUT_TYPE_ICONS, this.icon, this.type);
    }
  }
  updated() {
    (0,interactive.u)(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    (0,label.d)(this);
    (0,chunks_form.d)(this);
    this.el.removeEventListener(chunks_form.i, this.onHiddenFormInputInput);
  }
  get isClearable() {
    return !this.isTextarea && (this.clearable || this.type === "search") && this.value?.length > 0;
  }
  get isTextarea() {
    return this.childElType === "textarea";
  }
  handleGlobalAttributesChanged() {
    this.requestUpdate();
  }
  valueWatcher(newValue, previousValue) {
    if (!this.userChangedValue) {
      if (this.type === "number" && (newValue === "Infinity" || newValue === "-Infinity")) {
        this.displayedValue = newValue;
        this.previousEmittedValue = newValue;
        return;
      }
      this.setValue({
        origin: "direct",
        previousValue,
        value: newValue == null || newValue == "" ? "" : this.type === "number" ? (0,locale.i)(newValue) ? newValue : this.previousValue || "" : newValue
      });
      this.warnAboutInvalidNumberValue(newValue);
    }
    this.userChangedValue = false;
  }
  keyDownHandler(event) {
    if (this.readOnly || this.disabled || event.defaultPrevented) {
      return;
    }
    if (this.isClearable && event.key === "Escape") {
      this.clearInputValue(event);
      event.preventDefault();
    }
    if (event.key === "Enter") {
      if ((0,chunks_form.s)(this)) {
        event.preventDefault();
      }
    }
  }
  onLabelClick() {
    this.setFocus();
  }
  incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent) {
    const { value } = this;
    if (value === "Infinity" || value === "-Infinity") {
      return;
    }
    const adjustment = direction === "up" ? 1 : -1;
    const inputStep = this.step === "any" ? 1 : Math.abs(this.step || 1);
    const inputVal = new locale.B(value !== "" ? value : "0");
    const nudgedValue = inputVal.add(`${inputStep * adjustment}`);
    const nudgedValueBelowInputMin = () => typeof inputMin === "number" && !isNaN(inputMin) && nudgedValue.subtract(`${inputMin}`).isNegative;
    const nudgedValueAboveInputMax = () => typeof inputMax === "number" && !isNaN(inputMax) && !nudgedValue.subtract(`${inputMax}`).isNegative;
    const finalValue = nudgedValueBelowInputMin() ? `${inputMin}` : nudgedValueAboveInputMax() ? `${inputMax}` : nudgedValue.toString();
    this.setValue({
      committing: true,
      nativeEvent,
      origin: "user",
      value: finalValue
    });
  }
  clearInputValue(nativeEvent) {
    this.setValue({
      committing: true,
      nativeEvent,
      origin: "user",
      value: ""
    });
  }
  emitChangeIfUserModified() {
    if (this.previousValueOrigin === "user" && this.value !== this.previousEmittedValue) {
      this.calciteInputChange.emit();
      this.setPreviousEmittedValue(this.value);
    }
  }
  inputBlurHandler() {
    window.clearInterval(this.nudgeNumberValueIntervalId);
    this.calciteInternalInputBlur.emit();
    this.emitChangeIfUserModified();
  }
  clickHandler(event) {
    if (this.disabled) {
      return;
    }
    const composedPath = event.composedPath();
    if (!composedPath.includes(this.inputWrapperEl.value) || composedPath.includes(this.actionWrapperEl.value)) {
      return;
    }
    this.setFocus();
  }
  inputFocusHandler() {
    this.calciteInternalInputFocus.emit();
  }
  inputInputHandler(nativeEvent) {
    if (this.disabled || this.readOnly) {
      return;
    }
    if (this.type === "file") {
      this.files = this.childEl.files;
    }
    this.setValue({
      nativeEvent,
      origin: "user",
      value: nativeEvent.target.value
    });
  }
  inputKeyDownHandler(event) {
    if (this.disabled || this.readOnly) {
      return;
    }
    if (event.key === "Enter") {
      this.emitChangeIfUserModified();
    }
  }
  inputNumberInputHandler(nativeEvent) {
    if (this.disabled || this.readOnly) {
      return;
    }
    if (this.value === "Infinity" || this.value === "-Infinity") {
      return;
    }
    const value = nativeEvent.target.value;
    locale.n.numberFormatOptions = {
      locale: this.messages._lang,
      numberingSystem: this.numberingSystem,
      useGrouping: this.groupSeparator
    };
    const delocalizedValue = locale.n.delocalize(value);
    if (nativeEvent.inputType === "insertFromPaste") {
      if (!(0,locale.i)(delocalizedValue)) {
        nativeEvent.preventDefault();
      }
      this.setValue({
        nativeEvent,
        origin: "user",
        value: (0,locale.p)(delocalizedValue)
      });
      this.childNumberEl.value = this.displayedValue;
    } else {
      this.setValue({
        nativeEvent,
        origin: "user",
        value: delocalizedValue
      });
    }
  }
  inputNumberKeyDownHandler(event) {
    if (this.type !== "number" || this.disabled || this.readOnly) {
      return;
    }
    if (this.value === "Infinity" || this.value === "-Infinity") {
      event.preventDefault();
      if (event.key === "Backspace" || event.key === "Delete") {
        this.clearInputValue(event);
      }
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      this.nudgeNumberValue("up", event);
      return;
    }
    if (event.key === "ArrowDown") {
      this.nudgeNumberValue("down", event);
      return;
    }
    const supportedKeys = [
      ...key.n,
      "ArrowLeft",
      "ArrowRight",
      "Backspace",
      "Delete",
      "Enter",
      "Escape",
      "Tab"
    ];
    if (event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }
    const isShiftTabEvent = event.shiftKey && event.key === "Tab";
    if (supportedKeys.includes(event.key) || isShiftTabEvent) {
      if (event.key === "Enter") {
        this.emitChangeIfUserModified();
      }
      return;
    }
    locale.n.numberFormatOptions = {
      locale: this.messages._lang,
      numberingSystem: this.numberingSystem,
      useGrouping: this.groupSeparator
    };
    if (event.key === locale.n.decimal) {
      if (!this.value && !this.childNumberEl.value) {
        return;
      }
      if (this.value && this.childNumberEl.value.indexOf(locale.n.decimal) === -1) {
        return;
      }
    }
    if (/[eE]/.test(event.key)) {
      if (!this.value && !this.childNumberEl.value) {
        return;
      }
      if (this.value && !/[eE]/.test(this.childNumberEl.value)) {
        return;
      }
    }
    if (event.key === "-") {
      if (!this.value && !this.childNumberEl.value) {
        return;
      }
      if (this.value && this.childNumberEl.value.split("-").length <= 2) {
        return;
      }
    }
    event.preventDefault();
  }
  nudgeNumberValue(direction, nativeEvent) {
    if (nativeEvent instanceof KeyboardEvent && nativeEvent.repeat || this.type !== "number") {
      return;
    }
    const inputMax = this.maxString ? parseFloat(this.maxString) : null;
    const inputMin = this.minString ? parseFloat(this.minString) : null;
    const valueNudgeDelayInMs = 150;
    this.incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent);
    if (this.nudgeNumberValueIntervalId) {
      window.clearInterval(this.nudgeNumberValueIntervalId);
    }
    let firstValueNudge = true;
    this.nudgeNumberValueIntervalId = window.setInterval(() => {
      if (firstValueNudge) {
        firstValueNudge = false;
        return;
      }
      this.incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent);
    }, valueNudgeDelayInMs);
  }
  numberButtonPointerUpAndOutHandler() {
    window.clearInterval(this.nudgeNumberValueIntervalId);
  }
  numberButtonPointerDownHandler(event) {
    if (!(0,dom.i)(event)) {
      return;
    }
    event.preventDefault();
    const direction = event.target.dataset.adjustment;
    if (!this.disabled) {
      this.nudgeNumberValue(direction, event);
    }
  }
  syncHiddenFormInput(input) {
    syncHiddenFormInput(this.type, this, input);
  }
  setChildElRef(el) {
    this.childEl = el;
  }
  setChildNumberElRef(el) {
    this.childNumberEl = el;
  }
  setInputValue(newInputValue) {
    if (this.type === "number" && this.childNumberEl) {
      this.childNumberEl.value = newInputValue;
    } else if (this.childEl) {
      this.childEl.value = newInputValue;
    }
  }
  setPreviousEmittedValue(value) {
    this.previousEmittedValue = this.normalizeValue(value);
  }
  normalizeValue(value) {
    return this.type === "number" ? (0,locale.i)(value) ? value : "" : value;
  }
  setPreviousValue(value) {
    this.previousValue = this.normalizeValue(value);
  }
  setValue({ committing = false, nativeEvent, origin, previousValue, value }) {
    this.setPreviousValue(previousValue ?? this.value);
    this.previousValueOrigin = origin;
    if (this.type === "number") {
      locale.n.numberFormatOptions = {
        locale: this.messages._lang,
        numberingSystem: this.numberingSystem,
        useGrouping: this.groupSeparator,
        signDisplay: "never"
      };
      const isValueDeleted = this.previousValue?.length > value.length || this.value?.length > value.length;
      const hasTrailingDecimalSeparator = value.charAt(value.length - 1) === ".";
      const sanitizedValue = hasTrailingDecimalSeparator && isValueDeleted ? value : (0,locale.s)(value);
      const newValue = value && !sanitizedValue ? (0,locale.i)(this.previousValue) ? this.previousValue : "" : sanitizedValue;
      let newLocalizedValue = locale.n.localize(newValue);
      if (origin !== "connected" && !hasTrailingDecimalSeparator) {
        newLocalizedValue = (0,locale.c)(newLocalizedValue, newValue, locale.n);
      }
      this.displayedValue = hasTrailingDecimalSeparator && isValueDeleted ? `${newLocalizedValue}${locale.n.decimal}` : newLocalizedValue;
      this.userChangedValue = origin === "user" && this.value !== newValue;
      this.value = ["-", "."].includes(newValue) ? "" : newValue;
    } else {
      this.userChangedValue = origin === "user" && this.value !== value;
      this.value = value;
    }
    if (origin === "direct") {
      this.setInputValue(value);
      this.previousEmittedValue = value;
    }
    if (nativeEvent) {
      const calciteInputInputEvent = this.calciteInputInput.emit();
      if (calciteInputInputEvent.defaultPrevented) {
        this.value = this.previousValue;
        this.displayedValue = this.type === "number" ? locale.n.localize(this.previousValue) : this.previousValue;
      } else if (committing) {
        this.emitChangeIfUserModified();
      }
    }
  }
  inputKeyUpHandler() {
    window.clearInterval(this.nudgeNumberValueIntervalId);
  }
  warnAboutInvalidNumberValue(value) {
    if (this.type === "number" && value && !(0,locale.i)(value)) {
      console.warn(`The specified value "${value}" cannot be parsed, or is out of range.`);
    }
  }
  render() {
    const dir = (0,dom.g)(this.el);
    const loader = (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(CSS.loader)}><calcite-progress .label=${this.messages.loading} type=indeterminate></calcite-progress></div>`;
    const inputClearButton = (0,lit/* html */.qy)`<button .ariaLabel=${this.messages.clear} class=${(0,dist/* safeClassMap */.CP)(CSS.clearButton)} .disabled=${this.disabled || this.readOnly} @click=${this.clearInputValue} tabindex=-1 type=button><calcite-icon icon=x .scale=${(0,component.g)(this.scale)}></calcite-icon></button>`;
    const iconEl = (0,lit/* html */.qy)`<calcite-icon class=${(0,dist/* safeClassMap */.CP)(CSS.inputIcon)} .flipRtl=${this.iconFlipRtl} .icon=${this.requestedIcon} .scale=${(0,component.g)(this.scale)}></calcite-icon>`;
    const isHorizontalNumberButton = this.numberButtonType === "horizontal";
    const numberButtonsHorizontalUp = (0,lit/* html */.qy)`<button aria-hidden=true class=${(0,dist/* safeClassMap */.CP)({
      [CSS.numberButtonItem]: true,
      [CSS.buttonItemHorizontal]: isHorizontalNumberButton
    })} data-adjustment=up .disabled=${this.disabled || this.readOnly} @pointerdown=${this.numberButtonPointerDownHandler} @pointerout=${this.numberButtonPointerUpAndOutHandler} @pointerup=${this.numberButtonPointerUpAndOutHandler} tabindex=-1 type=button><calcite-icon icon=chevron-up .scale=${(0,component.g)(this.scale)}></calcite-icon></button>`;
    const numberButtonsHorizontalDown = (0,lit/* html */.qy)`<button aria-hidden=true class=${(0,dist/* safeClassMap */.CP)({
      [CSS.numberButtonItem]: true,
      [CSS.buttonItemHorizontal]: isHorizontalNumberButton
    })} data-adjustment=down .disabled=${this.disabled || this.readOnly} @pointerdown=${this.numberButtonPointerDownHandler} @pointerout=${this.numberButtonPointerUpAndOutHandler} @pointerup=${this.numberButtonPointerUpAndOutHandler} tabindex=-1 type=button><calcite-icon icon=chevron-down .scale=${(0,component.g)(this.scale)}></calcite-icon></button>`;
    const numberButtonsVertical = (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(CSS.numberButtonWrapper)}>${numberButtonsHorizontalUp}${numberButtonsHorizontalDown}</div>`;
    const prefixText = (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(CSS.prefix)}>${this.prefixText}</div>`;
    const suffixText = (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(CSS.suffix)}>${this.suffixText}</div>`;
    const autofocus = this.el.autofocus;
    const enterKeyHint = this.el.enterKeyHint;
    const inputMode = this.el.inputMode;
    const localeNumberInput = this.type === "number" ? (0,keyed/* keyed */.D)("localized-input", (0,lit/* html */.qy)`<input accept=${this.accept ?? lit/* nothing */.s6} aria-errormessage=${IDS.validationMessage} .ariaInvalid=${this.status === "invalid"} .ariaLabel=${(0,label.g)(this)} autocomplete=${this.autocomplete ?? lit/* nothing */.s6} .autofocus=${autofocus} value=${this.defaultValue ?? lit/* nothing */.s6} .disabled=${this.disabled ? true : null} enterkeyhint=${enterKeyHint ?? lit/* nothing */.s6} inputmode=${inputMode ?? lit/* nothing */.s6} maxlength=${this.maxLength ?? lit/* nothing */.s6} minlength=${this.minLength ?? lit/* nothing */.s6} .multiple=${this.multiple} name=${lit/* nothing */.s6} @blur=${this.inputBlurHandler} @focus=${this.inputFocusHandler} @input=${this.inputNumberInputHandler} @keydown=${this.inputNumberKeyDownHandler} @keyup=${this.inputKeyUpHandler} pattern=${this.pattern ?? lit/* nothing */.s6} placeholder=${(this.placeholder || "") ?? lit/* nothing */.s6} .readOnly=${this.readOnly} type=text .value=${(0,live/* live */.V)(this.displayedValue ?? "")} ${(0,ref/* ref */.K)(this.setChildNumberElRef)}>`) : null;
    const DynamicHtmlTag = this.childElType === "input" ? (0,node_static/* literal */.eu)`input` : (0,node_static/* literal */.eu)`textarea`;
    const childEl = this.type !== "number" ? (0,node_static/* html */.qy)`<${DynamicHtmlTag} accept=${this.accept ?? lit/* nothing */.s6} aria-errormessage=${IDS.validationMessage} .ariaInvalid=${this.status === "invalid"} .ariaLabel=${(0,label.g)(this)} autocomplete=${this.autocomplete ?? lit/* nothing */.s6} .autofocus=${autofocus} class=${(0,dist/* safeClassMap */.CP)({
      [CSS.editingEnabled]: this.editingEnabled,
      [CSS.inlineChild]: !!this.inlineEditableEl
    })} .defaultValue=${this.defaultValue ?? ""} .disabled=${this.disabled ? true : null} enterkeyhint=${enterKeyHint ?? lit/* nothing */.s6} inputmode=${inputMode ?? lit/* nothing */.s6} max=${this.maxString ?? lit/* nothing */.s6} maxlength=${this.maxLength ?? lit/* nothing */.s6} min=${this.minString ?? lit/* nothing */.s6} minlength=${this.minLength ?? lit/* nothing */.s6} .multiple=${this.multiple} name=${this.name ?? lit/* nothing */.s6} @blur=${this.inputBlurHandler} @focus=${this.inputFocusHandler} @input=${this.inputInputHandler} @keydown=${this.inputKeyDownHandler} @keyup=${this.inputKeyUpHandler} pattern=${this.pattern ?? lit/* nothing */.s6} placeholder=${(this.placeholder || "") ?? lit/* nothing */.s6} .readOnly=${this.readOnly} .required=${this.required ? true : null} spellcheck=${this.el.spellcheck ?? lit/* nothing */.s6} step=${this.step ?? lit/* nothing */.s6} tabindex=${(this.disabled || this.inlineEditableEl && !this.editingEnabled ? -1 : null) ?? lit/* nothing */.s6} type=${this.type ?? lit/* nothing */.s6} .value=${(0,live/* live */.V)(this.value ?? "")} ${(0,ref/* ref */.K)(this.setChildElRef)}></${DynamicHtmlTag}>` : null;
    return (0,interactive.I)({ disabled: this.disabled, children: (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)({
      [CSS.inputWrapper]: true,
      [runtime.C.rtl]: dir === "rtl",
      [CSS.hasSuffix]: this.suffixText,
      [CSS.hasPrefix]: this.prefixText
    })} ${(0,ref/* ref */.K)(this.inputWrapperEl)}>${this.type === "number" && this.numberButtonType === "horizontal" && !this.readOnly ? numberButtonsHorizontalDown : null}${this.prefixText ? prefixText : null}<div class=${(0,dist/* safeClassMap */.CP)(CSS.wrapper)}>${localeNumberInput}${childEl}${this.isClearable ? inputClearButton : null}${this.requestedIcon ? iconEl : null}${this.loading ? loader : null}</div><div class=${(0,dist/* safeClassMap */.CP)(CSS.actionWrapper)} ${(0,ref/* ref */.K)(this.actionWrapperEl)}><slot name=${SLOTS.action}></slot></div>${this.type === "number" && this.numberButtonType === "vertical" && !this.readOnly ? numberButtonsVertical : null}${this.suffixText ? suffixText : null}${this.type === "number" && this.numberButtonType === "horizontal" && !this.readOnly ? numberButtonsHorizontalUp : null}${(0,chunks_form.H)({ component: this })}</div>${this.validationMessage && this.status === "invalid" ? (0,Validation.V)({ icon: this.validationIcon, id: IDS.validationMessage, message: this.validationMessage, scale: this.scale, status: this.status }) : null}` });
  }
}
(0,runtime.c)("calcite-input", Input);


;// ./node_modules/@esri/calcite-components/dist/components/calcite-input/index.js





/***/ })

};
;