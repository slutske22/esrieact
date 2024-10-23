"use strict";
exports.id = 9018;
exports.ids = [9018,7724];
exports.modules = {

/***/ 50019:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24793);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_timeUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46437);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63863);
/* harmony import */ var _portal_timeUnitKebabDictionary_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55134);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let a=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* .ClonableMixin */ .O)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY)){constructor(o){super(o),this.unit="milliseconds",this.value=0}toMilliseconds(){return (0,_core_timeUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .convertTime */ .t)(this.value,this.unit,"milliseconds")}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_8__/* .enumeration */ .e)(_portal_timeUnitKebabDictionary_js__WEBPACK_IMPORTED_MODULE_10__/* .timeUnitKebabDictionary */ .j,{nonNullable:!0})],a.prototype,"unit",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Number,json:{write:!0},nonNullable:!0})],a.prototype,"value",void 0),a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__/* .subclass */ .$)("esri.TimeInterval")],a);const l=a;


/***/ }),

/***/ 69075:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ n),
/* harmony export */   d: () => (/* binding */ x)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const n={Base64:0,Hex:1,String:2,Raw:3},t=8,r=(1<<t)-1;function e(n,t){const r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function o(n){const e=[];for(let o=0,u=n.length*t;o<u;o+=t)e[o>>5]|=(n.charCodeAt(o/t)&r)<<o%32;return e}function u(n){const e=[];for(let o=0,u=32*n.length;o<u;o+=t)e.push(String.fromCharCode(n[o>>5]>>>o%32&r));return e.join("")}function c(n){const t="0123456789abcdef",r=[];for(let e=0,o=4*n.length;e<o;e++)r.push(t.charAt(n[e>>2]>>e%4*8+4&15)+t.charAt(n[e>>2]>>e%4*8&15));return r.join("")}function f(n){const t="=",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e=[];for(let o=0,u=4*n.length;o<u;o+=3){const u=(n[o>>2]>>o%4*8&255)<<16|(n[o+1>>2]>>(o+1)%4*8&255)<<8|n[o+2>>2]>>(o+2)%4*8&255;for(let c=0;c<4;c++)8*o+6*c>32*n.length?e.push(t):e.push(r.charAt(u>>6*(3-c)&63))}return e.join("")}function s(n,t){return n<<t|n>>>32-t}function i(n,t,r,o,u,c){return e(s(e(e(t,n),e(o,c)),u),r)}function h(n,t,r,e,o,u,c){return i(t&r|~t&e,n,t,o,u,c)}function a(n,t,r,e,o,u,c){return i(t&e|r&~e,n,t,o,u,c)}function l(n,t,r,e,o,u,c){return i(t^r^e,n,t,o,u,c)}function g(n,t,r,e,o,u,c){return i(r^(t|~e),n,t,o,u,c)}function p(n,t){n[t>>5]|=128<<t%32,n[14+(t+64>>>9<<4)]=t;let r=1732584193,o=-271733879,u=-1732584194,c=271733878;for(let f=0;f<n.length;f+=16){const t=r,s=o,i=u,p=c;r=h(r,o,u,c,n[f],7,-680876936),c=h(c,r,o,u,n[f+1],12,-389564586),u=h(u,c,r,o,n[f+2],17,606105819),o=h(o,u,c,r,n[f+3],22,-1044525330),r=h(r,o,u,c,n[f+4],7,-176418897),c=h(c,r,o,u,n[f+5],12,1200080426),u=h(u,c,r,o,n[f+6],17,-1473231341),o=h(o,u,c,r,n[f+7],22,-45705983),r=h(r,o,u,c,n[f+8],7,1770035416),c=h(c,r,o,u,n[f+9],12,-1958414417),u=h(u,c,r,o,n[f+10],17,-42063),o=h(o,u,c,r,n[f+11],22,-1990404162),r=h(r,o,u,c,n[f+12],7,1804603682),c=h(c,r,o,u,n[f+13],12,-40341101),u=h(u,c,r,o,n[f+14],17,-1502002290),o=h(o,u,c,r,n[f+15],22,1236535329),r=a(r,o,u,c,n[f+1],5,-165796510),c=a(c,r,o,u,n[f+6],9,-1069501632),u=a(u,c,r,o,n[f+11],14,643717713),o=a(o,u,c,r,n[f],20,-373897302),r=a(r,o,u,c,n[f+5],5,-701558691),c=a(c,r,o,u,n[f+10],9,38016083),u=a(u,c,r,o,n[f+15],14,-660478335),o=a(o,u,c,r,n[f+4],20,-405537848),r=a(r,o,u,c,n[f+9],5,568446438),c=a(c,r,o,u,n[f+14],9,-1019803690),u=a(u,c,r,o,n[f+3],14,-187363961),o=a(o,u,c,r,n[f+8],20,1163531501),r=a(r,o,u,c,n[f+13],5,-1444681467),c=a(c,r,o,u,n[f+2],9,-51403784),u=a(u,c,r,o,n[f+7],14,1735328473),o=a(o,u,c,r,n[f+12],20,-1926607734),r=l(r,o,u,c,n[f+5],4,-378558),c=l(c,r,o,u,n[f+8],11,-2022574463),u=l(u,c,r,o,n[f+11],16,1839030562),o=l(o,u,c,r,n[f+14],23,-35309556),r=l(r,o,u,c,n[f+1],4,-1530992060),c=l(c,r,o,u,n[f+4],11,1272893353),u=l(u,c,r,o,n[f+7],16,-155497632),o=l(o,u,c,r,n[f+10],23,-1094730640),r=l(r,o,u,c,n[f+13],4,681279174),c=l(c,r,o,u,n[f],11,-358537222),u=l(u,c,r,o,n[f+3],16,-722521979),o=l(o,u,c,r,n[f+6],23,76029189),r=l(r,o,u,c,n[f+9],4,-640364487),c=l(c,r,o,u,n[f+12],11,-421815835),u=l(u,c,r,o,n[f+15],16,530742520),o=l(o,u,c,r,n[f+2],23,-995338651),r=g(r,o,u,c,n[f],6,-198630844),c=g(c,r,o,u,n[f+7],10,1126891415),u=g(u,c,r,o,n[f+14],15,-1416354905),o=g(o,u,c,r,n[f+5],21,-57434055),r=g(r,o,u,c,n[f+12],6,1700485571),c=g(c,r,o,u,n[f+3],10,-1894986606),u=g(u,c,r,o,n[f+10],15,-1051523),o=g(o,u,c,r,n[f+1],21,-2054922799),r=g(r,o,u,c,n[f+8],6,1873313359),c=g(c,r,o,u,n[f+15],10,-30611744),u=g(u,c,r,o,n[f+6],15,-1560198380),o=g(o,u,c,r,n[f+13],21,1309151649),r=g(r,o,u,c,n[f+4],6,-145523070),c=g(c,r,o,u,n[f+11],10,-1120210379),u=g(u,c,r,o,n[f+2],15,718787259),o=g(o,u,c,r,n[f+9],21,-343485551),r=e(r,t),o=e(o,s),u=e(u,i),c=e(c,p)}return[r,o,u,c]}function x(r,e=n.Hex){const s=e||n.Base64,i=p(o(r),r.length*t);switch(s){case n.Raw:return i;case n.Hex:return c(i);case n.String:return u(i);case n.Base64:return f(i)}}


/***/ }),

/***/ 94882:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ FormTemplate_y)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(4130);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
;// ../node_modules/@arcgis/core/form/ExpressionInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var s;let p=s=class extends JSONSupport/* JSONSupport */.oY{constructor(r){super(r),this.expression=null,this.name=null,this.returnType="boolean",this.title=null}clone(){return new s({name:this.name,title:this.title,expression:this.expression,returnType:this.returnType})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"expression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"name",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["boolean","date","number","string"],json:{write:!0}})],p.prototype,"returnType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"title",void 0),p=s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.ExpressionInfo")],p);const i=p;

;// ../node_modules/@arcgis/core/form/elements/Element.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let e=class extends JSONSupport/* JSONSupport */.oY{constructor(t){super(t),this.description=null,this.label=null,this.type=null,this.visibilityExpression=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],e.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],e.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],e.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],e.prototype,"visibilityExpression",void 0),e=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.Element")],e);const Element_i=e;

;// ../node_modules/@arcgis/core/form/elements/inputs/AttachmentInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var AttachmentInput_s;let AttachmentInput_p=AttachmentInput_s=class extends JSONSupport/* JSONSupport */.oY{constructor(r){super(r),this.type=null}clone(){return new AttachmentInput_s({type:this.type})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["attachment","audio","document","image","signature","video"],json:{write:!0}})],AttachmentInput_p.prototype,"type",void 0),AttachmentInput_p=AttachmentInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.AttachmentInput")],AttachmentInput_p);const c=AttachmentInput_p;

;// ../node_modules/@arcgis/core/form/elements/AttachmentElement.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var AttachmentElement_i;let AttachmentElement_p=AttachmentElement_i=class extends Element_i{constructor(t){super(t),this.attachmentKeyword=null,this.editableExpression=null,this.input=null,this.type="attachment"}clone(){return new AttachmentElement_i({attachmentKeyword:this.attachmentKeyword,description:this.description,editableExpression:this.editableExpression,input:this.input,label:this.label,visibilityExpression:this.visibilityExpression})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],AttachmentElement_p.prototype,"attachmentKeyword",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],AttachmentElement_p.prototype,"editableExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:c,json:{read:{source:"inputType"},write:{target:"inputType"}}})],AttachmentElement_p.prototype,"input",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["attachment"],json:{read:!1,write:!0}})],AttachmentElement_p.prototype,"type",void 0),AttachmentElement_p=AttachmentElement_i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.AttachmentElement")],AttachmentElement_p);const n=AttachmentElement_p;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/deprecate.js
var deprecate = __webpack_require__(50220);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
;// ../node_modules/@arcgis/core/form/elements/inputs/Input.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let Input_e=class extends JSONSupport/* JSONSupport */.oY{constructor(r){super(r),this.type=null}};(0,tslib_es6._)([(0,property/* property */.MZ)()],Input_e.prototype,"type",void 0),Input_e=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.Input")],Input_e);const Input_p=Input_e;

;// ../node_modules/@arcgis/core/form/elements/inputs/TextInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let TextInput_e=class extends Input_p{constructor(r){super(r),this.maxLength=null,this.minLength=0}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],TextInput_e.prototype,"maxLength",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],TextInput_e.prototype,"minLength",void 0),TextInput_e=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.TextInput")],TextInput_e);const TextInput_p=TextInput_e;

;// ../node_modules/@arcgis/core/form/elements/inputs/BarcodeScannerInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var o;let BarcodeScannerInput_c=o=class extends TextInput_p{constructor(r){super(r),this.type="barcode-scanner"}clone(){return new o({maxLength:this.maxLength,minLength:this.minLength})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["barcode-scanner"],json:{read:!1,write:!0}})],BarcodeScannerInput_c.prototype,"type",void 0),BarcodeScannerInput_c=o=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.BarcodeScannerInput")],BarcodeScannerInput_c);const BarcodeScannerInput_p=BarcodeScannerInput_c;

;// ../node_modules/@arcgis/core/form/elements/inputs/ComboBoxInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var ComboBoxInput_s;let ComboBoxInput_p=ComboBoxInput_s=class extends Input_p{constructor(o){super(o),this.noValueOptionLabel=null,this.showNoValueOption=!0,this.type="combo-box"}clone(){return new ComboBoxInput_s({showNoValueOption:this.showNoValueOption,noValueOptionLabel:this.noValueOptionLabel})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],ComboBoxInput_p.prototype,"noValueOptionLabel",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],ComboBoxInput_p.prototype,"showNoValueOption",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["combo-box"],json:{read:!1,write:!0}})],ComboBoxInput_p.prototype,"type",void 0),ComboBoxInput_p=ComboBoxInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.ComboBoxInput")],ComboBoxInput_p);const ComboBoxInput_i=ComboBoxInput_p;

;// ../node_modules/@arcgis/core/form/elements/inputs/DatePickerInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var DatePickerInput_p;function DatePickerInput_n(r){return null!=r?r:null}function a(r){return null!=r?r:null}let DatePickerInput_c=DatePickerInput_p=class extends Input_p{constructor(r){super(r),this.max=null,this.min=null,this.type="date-picker"}readMax(r,t){return DatePickerInput_n(t.max)}writeMax(r,t){t.max=a(r)}readMin(r,t){return DatePickerInput_n(t.min)}writeMin(r,t){t.min=a(r)}clone(){return new DatePickerInput_p({max:this.max,min:this.min})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],DatePickerInput_c.prototype,"max",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("max")],DatePickerInput_c.prototype,"readMax",null),(0,tslib_es6._)([(0,writer/* writer */.K)("max")],DatePickerInput_c.prototype,"writeMax",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],DatePickerInput_c.prototype,"min",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("min")],DatePickerInput_c.prototype,"readMin",null),(0,tslib_es6._)([(0,writer/* writer */.K)("min")],DatePickerInput_c.prototype,"writeMin",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["date-picker"],json:{read:!1,write:!0}})],DatePickerInput_c.prototype,"type",void 0),DatePickerInput_c=DatePickerInput_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.DatePickerInput")],DatePickerInput_c);const m=DatePickerInput_c;

;// ../node_modules/@arcgis/core/form/elements/inputs/DateTimeOffsetPickerInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var DateTimeOffsetPickerInput_n;function DateTimeOffsetPickerInput_p(t){return null!=t?t:null}function DateTimeOffsetPickerInput_m(t){return null!=t?t:null}let u=DateTimeOffsetPickerInput_n=class extends Input_p{constructor(t){super(t),this.includeTimeOffset=!0,this.max=null,this.min=null,this.timeResolution="minutes",this.type="datetimeoffset-picker"}readMax(t,e){return DateTimeOffsetPickerInput_p(e.max)}writeMax(t,e){e.max=DateTimeOffsetPickerInput_m(t)}readMin(t,e){return DateTimeOffsetPickerInput_p(e.min)}writeMin(t,e){e.min=DateTimeOffsetPickerInput_m(t)}readTimeResolution(t,e){return DateTimeOffsetPickerInput_p(e.timeResolution)}writeTimeResolution(t,e){e.timeResolution=DateTimeOffsetPickerInput_m(t)}clone(){return new DateTimeOffsetPickerInput_n({includeTimeOffset:this.includeTimeOffset,max:this.max,min:this.min,timeResolution:this.timeResolution})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],u.prototype,"includeTimeOffset",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],u.prototype,"max",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("max")],u.prototype,"readMax",null),(0,tslib_es6._)([(0,writer/* writer */.K)("max")],u.prototype,"writeMax",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],u.prototype,"min",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("min")],u.prototype,"readMin",null),(0,tslib_es6._)([(0,writer/* writer */.K)("min")],u.prototype,"writeMin",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],u.prototype,"timeResolution",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("timeResolution")],u.prototype,"readTimeResolution",null),(0,tslib_es6._)([(0,writer/* writer */.K)("timeResolution")],u.prototype,"writeTimeResolution",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["datetimeoffset-picker"],json:{read:!1,write:!0}})],u.prototype,"type",void 0),u=DateTimeOffsetPickerInput_n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.DateTimeOffsetPickerInput")],u);const l=u;

;// ../node_modules/@arcgis/core/form/elements/inputs/DateTimePickerInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var DateTimePickerInput_p;function DateTimePickerInput_n(e){return null!=e?new Date(e):null}function DateTimePickerInput_a(e){return e?e.getTime():null}let DateTimePickerInput_m=DateTimePickerInput_p=class extends Input_p{constructor(e){super(e),this.includeTime=!1,this.max=null,this.min=null,this.type="datetime-picker"}readMax(e,r){return DateTimePickerInput_n(r.max)}writeMax(e,r){r.max=DateTimePickerInput_a(e)}readMin(e,r){return DateTimePickerInput_n(r.min)}writeMin(e,r){r.min=DateTimePickerInput_a(e)}clone(){return new DateTimePickerInput_p({includeTime:this.includeTime,max:this.max,min:this.min})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],DateTimePickerInput_m.prototype,"includeTime",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Date,json:{type:Number,write:!0}})],DateTimePickerInput_m.prototype,"max",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("max")],DateTimePickerInput_m.prototype,"readMax",null),(0,tslib_es6._)([(0,writer/* writer */.K)("max")],DateTimePickerInput_m.prototype,"writeMax",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Date,json:{type:Number,write:!0}})],DateTimePickerInput_m.prototype,"min",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("min")],DateTimePickerInput_m.prototype,"readMin",null),(0,tslib_es6._)([(0,writer/* writer */.K)("min")],DateTimePickerInput_m.prototype,"writeMin",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["datetime-picker"],json:{read:!1,write:!0}})],DateTimePickerInput_m.prototype,"type",void 0),DateTimePickerInput_m=DateTimePickerInput_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.DateTimePickerInput")],DateTimePickerInput_m);const DateTimePickerInput_c=DateTimePickerInput_m;

;// ../node_modules/@arcgis/core/form/elements/inputs/RadioButtonsInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var RadioButtonsInput_s;let RadioButtonsInput_p=RadioButtonsInput_s=class extends Input_p{constructor(o){super(o),this.noValueOptionLabel=null,this.showNoValueOption=!0,this.type="radio-buttons"}clone(){return new RadioButtonsInput_s({noValueOptionLabel:this.noValueOptionLabel,showNoValueOption:this.showNoValueOption})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],RadioButtonsInput_p.prototype,"noValueOptionLabel",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],RadioButtonsInput_p.prototype,"showNoValueOption",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["radio-buttons"],json:{read:!1,write:!0}})],RadioButtonsInput_p.prototype,"type",void 0),RadioButtonsInput_p=RadioButtonsInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.RadioButtonsInput")],RadioButtonsInput_p);const RadioButtonsInput_i=RadioButtonsInput_p;

;// ../node_modules/@arcgis/core/form/elements/inputs/SwitchInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var SwitchInput_s;let SwitchInput_p=SwitchInput_s=class extends Input_p{constructor(o){super(o),this.offValue=null,this.onValue=null,this.type="switch"}clone(){return new SwitchInput_s({offValue:this.offValue,onValue:this.onValue})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String,Number],json:{write:!0}})],SwitchInput_p.prototype,"offValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String,Number],json:{write:!0}})],SwitchInput_p.prototype,"onValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["switch"],json:{read:!1,write:!0}})],SwitchInput_p.prototype,"type",void 0),SwitchInput_p=SwitchInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.SwitchInput")],SwitchInput_p);const SwitchInput_i=SwitchInput_p;

;// ../node_modules/@arcgis/core/form/elements/inputs/TextAreaInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var TextAreaInput_o;let TextAreaInput_p=TextAreaInput_o=class extends TextInput_p{constructor(r){super(r),this.type="text-area"}clone(){return new TextAreaInput_o({maxLength:this.maxLength,minLength:this.minLength})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["text-area"],json:{read:!1,write:!0}})],TextAreaInput_p.prototype,"type",void 0),TextAreaInput_p=TextAreaInput_o=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.TextAreaInput")],TextAreaInput_p);const TextAreaInput_a=TextAreaInput_p;

;// ../node_modules/@arcgis/core/form/elements/inputs/TextBoxInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var TextBoxInput_s;let TextBoxInput_p=TextBoxInput_s=class extends TextInput_p{constructor(t){super(t),this.type="text-box"}clone(){return new TextBoxInput_s({maxLength:this.maxLength,minLength:this.minLength})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["text-box"],json:{read:!1,write:!0}})],TextBoxInput_p.prototype,"type",void 0),TextBoxInput_p=TextBoxInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.TextBoxInput")],TextBoxInput_p);const TextBoxInput_c=TextBoxInput_p;

;// ../node_modules/@arcgis/core/form/elements/inputs/TimePickerInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var TimePickerInput_s;function TimePickerInput_p(t){return null!=t?t:null}function TimePickerInput_m(t){return null!=t?t:null}let TimePickerInput_u=TimePickerInput_s=class extends Input_p{constructor(t){super(t),this.max=null,this.min=null,this.timeResolution="minutes",this.type="time-picker"}readMax(t,e){return TimePickerInput_p(e.max)}writeMax(t,e){e.max=TimePickerInput_m(t)}readMin(t,e){return TimePickerInput_p(e.min)}writeMin(t,e){e.min=TimePickerInput_m(t)}readTimeResolution(t,e){return TimePickerInput_p(e.timeResolution)}writeTimeResolution(t,e){e.timeResolution=TimePickerInput_m(t)}clone(){return new TimePickerInput_s({max:this.max,min:this.min,timeResolution:this.timeResolution})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],TimePickerInput_u.prototype,"max",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("max")],TimePickerInput_u.prototype,"readMax",null),(0,tslib_es6._)([(0,writer/* writer */.K)("max")],TimePickerInput_u.prototype,"writeMax",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],TimePickerInput_u.prototype,"min",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("min")],TimePickerInput_u.prototype,"readMin",null),(0,tslib_es6._)([(0,writer/* writer */.K)("min")],TimePickerInput_u.prototype,"writeMin",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],TimePickerInput_u.prototype,"timeResolution",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("timeResolution")],TimePickerInput_u.prototype,"readTimeResolution",null),(0,tslib_es6._)([(0,writer/* writer */.K)("timeResolution")],TimePickerInput_u.prototype,"writeTimeResolution",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["time-picker"],json:{read:!1,write:!0}})],TimePickerInput_u.prototype,"type",void 0),TimePickerInput_u=TimePickerInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.TimePickerInput")],TimePickerInput_u);const TimePickerInput_l=TimePickerInput_u;

;// ../node_modules/@arcgis/core/form/elements/support/inputs.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const inputs_c={base:Input_p,key:"type",typeMap:{"barcode-scanner":BarcodeScannerInput_p,"combo-box":ComboBoxInput_i,"date-picker":m,"datetime-picker":DateTimePickerInput_c,"datetimeoffset-picker":l,"radio-buttons":RadioButtonsInput_i,switch:SwitchInput_i,"text-area":TextAreaInput_a,"text-box":TextBoxInput_c,"time-picker":TimePickerInput_l}};

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/domains.js + 5 modules
var domains = __webpack_require__(38938);
;// ../node_modules/@arcgis/core/form/elements/FieldElement.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var FieldElement_a;const d="esri.form.elements.FieldElement",FieldElement_u=Logger/* default */.A.getLogger(d);let FieldElement_m=FieldElement_a=class extends Element_i{constructor(e){super(e),this.domain=null,this.editableExpression=null,this.fieldName=null,this.hint=null,this.input=null,this.requiredExpression=null,this.type="field",this.valueExpression=null}get editable(){return (0,deprecate/* deprecatedProperty */.Lx)(FieldElement_u,"editable",{replacement:"editableExpression",version:"4.26",warnOnce:!0}),this._get("editable")??!0}set editable(e){(0,deprecate/* deprecatedProperty */.Lx)(FieldElement_u,"editable",{replacement:"editableExpression",version:"4.26",warnOnce:!0}),this._set("editable",e)}clone(){return new FieldElement_a({description:this.description,domain:this.domain,editable:this.editable,editableExpression:this.editableExpression,fieldName:this.fieldName,hint:this.hint,input:this.input,label:this.label,requiredExpression:this.requiredExpression,valueExpression:this.valueExpression,visibilityExpression:this.visibilityExpression})}};(0,tslib_es6._)([(0,property/* property */.MZ)({types:domains/* types */.gK,json:{read:{reader:domains/* fromJSON */.rS},write:!0}})],FieldElement_m.prototype,"domain",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],FieldElement_m.prototype,"editable",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],FieldElement_m.prototype,"editableExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],FieldElement_m.prototype,"fieldName",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],FieldElement_m.prototype,"hint",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:inputs_c,json:{read:{source:"inputType"},write:{target:"inputType"}}})],FieldElement_m.prototype,"input",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],FieldElement_m.prototype,"requiredExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:!1,write:!0}})],FieldElement_m.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],FieldElement_m.prototype,"valueExpression",void 0),FieldElement_m=FieldElement_a=(0,tslib_es6._)([(0,subclass/* subclass */.$)(d)],FieldElement_m);const FieldElement_c=FieldElement_m;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/popup/support/RelatedRecordsInfoFieldOrder.js
var RelatedRecordsInfoFieldOrder = __webpack_require__(33083);
;// ../node_modules/@arcgis/core/form/elements/RelationshipElement.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var RelationshipElement_p;let RelationshipElement_l=RelationshipElement_p=class extends Element_i{constructor(e){super(e),this.displayCount=null,this.displayType="list",this.editableExpression=null,this.orderByFields=null,this.relationshipId=null,this.type="relationship"}clone(){return new RelationshipElement_p({description:this.description,displayCount:this.displayCount,displayType:this.displayType,editableExpression:this.editableExpression,label:this.label,orderByFields:(0,lang/* clone */.o8)(this.orderByFields),relationshipId:this.relationshipId,visibilityExpression:this.visibilityExpression})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],RelationshipElement_l.prototype,"displayCount",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["list"],json:{write:!0}})],RelationshipElement_l.prototype,"displayType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],RelationshipElement_l.prototype,"editableExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[RelatedRecordsInfoFieldOrder/* default */.A],json:{write:!0}})],RelationshipElement_l.prototype,"orderByFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],RelationshipElement_l.prototype,"relationshipId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["relationship"],json:{read:!1,write:!0}})],RelationshipElement_l.prototype,"type",void 0),RelationshipElement_l=RelationshipElement_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.RelationshipElement")],RelationshipElement_l);const RelationshipElement_n=RelationshipElement_l;

;// ../node_modules/@arcgis/core/form/support/elements.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function elements_n(t){return{typesWithGroup:{base:Element_i,key:"type",typeMap:{attachment:n,field:FieldElement_c,group:t,relationship:RelationshipElement_n}},typesWithoutGroup:{base:Element_i,key:"type",typeMap:{attachment:n,field:FieldElement_c,relationship:RelationshipElement_n}}}}function elements_i(t,e,p=!0){if(!t)return null;const r=p?e.typesWithGroup.typeMap:e.typesWithoutGroup.typeMap;return t.filter((t=>r[t.type])).map((t=>r[t.type].fromJSON(t)))}function elements_u(t,e,p=!0){if(!t)return null;const r=p?e.typesWithGroup.typeMap:e.typesWithoutGroup.typeMap;return t.filter((t=>r[t.type])).map((t=>t.toJSON()))}function elements_s(e,p,r=!0){return e?e.map((e=>(0,ensureType/* ensureOneOfType */.aq)(r?p.typesWithGroup:p.typesWithoutGroup,e))):null}

;// ../node_modules/@arcgis/core/form/elements/GroupElement.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var GroupElement_d;let GroupElement_u=GroupElement_d=class extends Element_i{constructor(e){super(e),this.elements=null,this.initialState="expanded",this.type="group"}castElements(e){return elements_s(e,f,!1)}readElements(e,t){return elements_i(t.formElements,f,!1)}writeElements(e,t){t.formElements=elements_u(e,f,!1)}clone(){return new GroupElement_d({description:this.description,elements:(0,lang/* clone */.o8)(this.elements),initialState:this.initialState,label:this.label,visibilityExpression:this.visibilityExpression})}};(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],GroupElement_u.prototype,"elements",void 0),(0,tslib_es6._)([(0,cast/* cast */.w)("elements")],GroupElement_u.prototype,"castElements",null),(0,tslib_es6._)([(0,reader/* reader */.w)("elements",["formElements"])],GroupElement_u.prototype,"readElements",null),(0,tslib_es6._)([(0,writer/* writer */.K)("elements")],GroupElement_u.prototype,"writeElements",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["collapsed","expanded"],json:{write:!0}})],GroupElement_u.prototype,"initialState",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:!1,write:!0}})],GroupElement_u.prototype,"type",void 0),GroupElement_u=GroupElement_d=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.GroupElement")],GroupElement_u);const f=elements_n(GroupElement_u),y=GroupElement_u;

;// ../node_modules/@arcgis/core/form/FormTemplate.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var FormTemplate_f;const j=elements_n(y);let h=FormTemplate_f=class extends JSONSupport/* JSONSupport */.oY{constructor(e){super(e),this.description=null,this.elements=null,this.expressionInfos=null,this.preserveFieldValuesWhenHidden=!1,this.title=null}castElements(e){return elements_s(e,j)}readElements(e,t){return elements_i(t.formElements,j)}writeElements(e,t){t.formElements=elements_u(e,j)}clone(){return new FormTemplate_f({description:this.description,expressionInfos:(0,lang/* clone */.o8)(this.expressionInfos),elements:(0,lang/* clone */.o8)(this.elements),title:this.title,preserveFieldValuesWhenHidden:this.preserveFieldValuesWhenHidden})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],h.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],h.prototype,"elements",void 0),(0,tslib_es6._)([(0,cast/* cast */.w)("elements")],h.prototype,"castElements",null),(0,tslib_es6._)([(0,reader/* reader */.w)("elements",["formElements"])],h.prototype,"readElements",null),(0,tslib_es6._)([(0,writer/* writer */.K)("elements")],h.prototype,"writeElements",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[i],json:{write:!0}})],h.prototype,"expressionInfos",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!1,write:!0}})],h.prototype,"preserveFieldValuesWhenHidden",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],h.prototype,"title",void 0),h=FormTemplate_f=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.FormTemplate")],h);const FormTemplate_y=h;


/***/ }),

/***/ 83780:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Ze)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/PopupTemplate.js + 3 modules
var PopupTemplate = __webpack_require__(56542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/ClassBreaksRenderer.js
var ClassBreaksRenderer = __webpack_require__(17671);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/DictionaryRenderer.js
var DictionaryRenderer = __webpack_require__(84685);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/DotDensityRenderer.js + 1 modules
var DotDensityRenderer = __webpack_require__(20299);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/HeatmapRenderer.js + 1 modules
var HeatmapRenderer = __webpack_require__(25498);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/PieChartRenderer.js + 2 modules
var PieChartRenderer = __webpack_require__(79300);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/Renderer.js
var Renderer = __webpack_require__(76589);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/SimpleRenderer.js
var SimpleRenderer = __webpack_require__(47347);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/UniqueValueRenderer.js + 3 modules
var UniqueValueRenderer = __webpack_require__(2692);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/jsonUtils.js
var jsonUtils = __webpack_require__(48887);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/types.js
var types = __webpack_require__(49169);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/request.js
var request = __webpack_require__(86394);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols.js + 1 modules
var symbols = __webpack_require__(30822);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(24793);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(48982);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(35775);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/object.js
var object = __webpack_require__(76724);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/sql.js
var sql = __webpack_require__(76859);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(20909);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(4130);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/layerContainerType.js
var layerContainerType = __webpack_require__(73324);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/form/FormTemplate.js + 21 modules
var FormTemplate = __webpack_require__(94882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/Layer.js + 1 modules
var Layer = __webpack_require__(68833);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry.js
var geometry = __webpack_require__(17639);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/Graphic.js
var Graphic = __webpack_require__(25707);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Loadable.js
var Loadable = __webpack_require__(45307);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Promise.js
var core_Promise = __webpack_require__(84410);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/workers/workers.js + 5 modules
var workers = __webpack_require__(90752);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/shared.js
var shared = __webpack_require__(64996);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/query/operations/editsZScale.js
var editsZScale = __webpack_require__(9669);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/query/operations/queryZScale.js
var queryZScale = __webpack_require__(27604);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/FeatureSet.js
var FeatureSet = __webpack_require__(57822);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(84698);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Polygon.js
var Polygon = __webpack_require__(62802);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/typeUtils.js
var typeUtils = __webpack_require__(12433);
;// ../node_modules/@arcgis/core/layers/graphics/sources/MemorySource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let _=0,T=class extends(Loadable/* default */.A.LoadableMixin((0,core_Promise/* EsriPromiseMixin */.g)(Collection/* default */.A))){constructor(e){super(e),this._idToClientGraphic=null,this.type="memory"}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}get _workerGeometryType(){const e=this.layer?.geometryType;return e?this._geometryTypeRequiresClientGraphicMapping(e)?"polygon":e:null}applyEdits(e){return this.load().then((()=>this._applyEdits(e)))}openPorts(){return this.load().then((()=>this._connection.openPorts()))}async queryFeatures(e,t={}){await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);(0,queryZScale/* applyFeatureSetZUnitScaling */.q)(e,this.layer.spatialReference,r);const s=FeatureSet/* default */.A.fromJSON(r);if(!this._requiresClientGraphicMapping())return s;const i=this.layer.objectIdField;for(const o of s.features){const e=o.attributes[i],t=this._idToClientGraphic.get(e);t&&(o.geometry=t.geometry)}return s.geometryType=this.layer.geometryType,s}async queryFeaturesJSON(e,t={}){if(this._requiresClientGraphicMapping())throw new Error/* default */.A("query-features-json:unsupported","Cannot query in JSON format for client only geometry types (mesh and extent)");await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return (0,queryZScale/* applyFeatureSetZUnitScaling */.q)(e,this.layer.spatialReference,r),r}queryFeatureCount(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:Extent/* default */.A.fromJSON(e.extent)})))}querySnapping(e,t={}){return this.load(t).then((()=>this._connection.invoke("querySnapping",e,t)))}async _applyEdits(e){if(!this._connection)throw new Error/* default */.A("feature-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField;let r=null;const i=[],o=[];await Promise.all([this._prepareClientMapping(e.addFeatures,null),this._prepareClientMapping(e.updateFeatures,null)]);const n=e=>"objectId"in e&&null!=e.objectId?e.objectId:"attributes"in e&&null!=e.attributes[t]?e.attributes[t]:null;if(e.addFeatures&&(r=this._prepareAddFeatures(e.addFeatures)),e.deleteFeatures)for(const s of e.deleteFeatures){const e=n(s);null!=e&&i.push(e)}const a=e.updateFeatures&&this._idToClientGraphic?new Map:null;if(e.updateFeatures)for(const s of e.updateFeatures)if(o.push(this._serializeFeature(s)),a){const e=n(s);null!=e&&a.set(e,s)}(0,editsZScale/* unapplyEditsZUnitScaling */.u)(r?r.features:null,o,this.layer.spatialReference);const{fullExtent:l,featureEditResults:u}=await this._connection.invoke("applyEdits",{adds:r?r.features:[],updates:o,deletes:i});return this.fullExtent=l,r&&r.finish(u.uidToObjectId),this._updateClientGraphicIds(a,u),this._createEditsResult(u)}async _prepareClientMapping(e,t){if("mesh"!==this._layerOrSourceGeometryType||null==e)return;const r=[];for(const{geometry:s}of e)null==s||"mesh"!==s.type||s.hasExtent||s.loaded||r.push(s.load({signal:t}));r.length&&await Promise.all(r)}_updateClientGraphicIds(e,t){if(this._idToClientGraphic){if(e)for(const r of t.updateResults){if(!r.success)continue;const t=e.get(r.objectId);null!=t&&this._addIdToClientGraphic(t)}for(const e of t.deleteResults)e.success&&this._idToClientGraphic.delete(e.objectId)}}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new Error/* default */.A("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_prepareAddFeatures(e){const t=new Map,r=new Array(e.length);let s=null;for(let o=0;o<e.length;o++){const i=e[o],n=this._serializeFeature(i);s||null==i.geometry||(s=i.geometry.type),r[o]=n,t.set(`${n.uid}`,i)}const i=this;return{features:r,inferredGeometryType:s,finish(e){const r=i.sourceJSON.objectIdField;for(const s in e){const o=e[s],n=t.get(s);n&&(n.attributes||(n.attributes={}),-1===o?delete n.attributes[r]:n.attributes[r]=o,i._addIdToClientGraphic(n))}}}}_addIdToClientGraphic(e){if(!this._idToClientGraphic)return;const t=this.sourceJSON.objectIdField,r=e.attributes?.[t];null!=r&&this._idToClientGraphic.set(r,e)}get _layerOrSourceGeometryType(){return this.layer?.geometryType??this.sourceJSON?.geometryType}_requiresClientGraphicMapping(){return this._geometryTypeRequiresClientGraphicMapping(this._layerOrSourceGeometryType)}_geometryRequiresClientGraphicMapping(e){return this._geometryTypeRequiresClientGraphicMapping(e.type)}_geometryTypeRequiresClientGraphicMapping(e){return"mesh"===e||"multipatch"===e||"extent"===e}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e),s=(_++).toString();return r?{uid:s,geometry:r.toJSON(),attributes:t}:{uid:s,attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;if(null==t)return null;if(this._geometryRequiresClientGraphicMapping(t)){return t.extent?Polygon/* default */.A.fromExtent(t.extent):null}return t}async _startWorker(e){this._connection=await (0,workers/* open */.ho)("MemorySourceWorker",{strategy:(0,has/* default */.A)("feature-layers-workers")?"dedicated":"local",signal:e,registryTarget:this});const{fields:t,spatialReference:r,objectIdField:s,hasM:i,hasZ:n,timeInfo:l,dateFieldsTimeZone:u}=this.layer,p="defaults"===this.layer.originOf("spatialReference");await this._prepareClientMapping(this.items,e);const c=this._prepareAddFeatures(this.items);this.addHandles(this.on("before-changes",(e=>{Logger/* default */.A.getLogger(this).error("Source modifications will not propagate after layer has been loaded. Please use .applyEdits() instead"),e.preventDefault()})));const d={features:c.features,fields:t?.map((e=>e.toJSON())),geometryType:typeUtils/* typeKebabDictionary */.Y.toJSON(this._workerGeometryType),hasM:"mesh"!==this._layerOrSourceGeometryType&&i,hasZ:"mesh"===this._layerOrSourceGeometryType||n,objectIdField:s,spatialReference:p?null:r&&r.toJSON(),timeInfo:l?.toJSON()??null,dateFieldsTimeZone:u},h=await this._connection.invoke("load",d,{signal:e});for(const a of h.warnings)Logger/* default */.A.getLogger(this.layer).warn("#load()",`${a.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:a});h.featureErrors.length&&Logger/* default */.A.getLogger(this.layer).warn("#load()",`Encountered ${h.featureErrors.length} validation errors while loading features. (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{errors:h.featureErrors});const y=h.layerDefinition;this._geometryTypeRequiresClientGraphicMapping(c.inferredGeometryType)&&(y.geometryType=typeUtils/* typeKebabDictionary */.Y.toJSON(c.inferredGeometryType)),this.sourceJSON=y,this._requiresClientGraphicMapping()&&(this._idToClientGraphic=new Map),c.finish(h.assignedObjectIds)}};(0,tslib_es6._)([(0,shared/* shared */.u)({Type:Graphic/* default */.A,ensureType:(0,ensureType/* ensureType */.dp)(Graphic/* default */.A)})],T.prototype,"itemType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],T.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],T.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],T.prototype,"_workerGeometryType",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],T.prototype,"sourceJSON",void 0),T=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.graphics.sources.MemorySource")],T);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/APIKeyMixin.js
var APIKeyMixin = __webpack_require__(50193);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/ArcGISService.js
var ArcGISService = __webpack_require__(45681);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/BlendLayer.js
var BlendLayer = __webpack_require__(15305);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/CustomParametersMixin.js
var CustomParametersMixin = __webpack_require__(16161);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/EditBusLayer.js
var EditBusLayer = __webpack_require__(46602);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/FeatureEffectLayer.js
var FeatureEffectLayer = __webpack_require__(15053);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/FeatureLayerBase.js + 5 modules
var FeatureLayerBase = __webpack_require__(71679);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/FeatureReductionLayer.js + 3 modules
var FeatureReductionLayer = __webpack_require__(64782);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(41506);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/OrderedLayer.js + 1 modules
var OrderedLayer = __webpack_require__(94795);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/PortalLayer.js
var PortalLayer = __webpack_require__(34722);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(52495);
;// ../node_modules/@arcgis/core/layers/support/PublishingInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let e=class extends Accessor/* default */.A{constructor(){super(...arguments),this.updating=!1,this.status="unknown"}};(0,tslib_es6._)([(0,property/* property */.MZ)()],e.prototype,"updating",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],e.prototype,"status",void 0),e=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.PublishingInfo")],e);const p=e;

;// ../node_modules/@arcgis/core/layers/mixins/PublishableLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const o="esri.layers.mixins.PublishableLayer",i=Symbol(o);function n(s){return null!=s&&"object"==typeof s&&i in s}const u=n=>{var u;let a=class extends n{constructor(){super(...arguments),this[u]=!0}get publishingInfo(){if(this.destroyed)return null;const s=this._get("publishingInfo");if(s)return s;const t=new p;return this._checkPublishingStatus(t),t}_checkPublishingStatus(s){const t=250,e=125;let r=0;const o=async t=>{let n;s.updating=!0;try{n=await this.fetchPublishingStatus()}catch(u){n="unavailable"}"published"!==n&&"unavailable"!==n||("publishing"===s.status&&this.refresh(),i.remove()),s.status=n,s.updating=!1,i.removed||(r=setTimeout(o,t,t+e))},i={removed:!1,remove(){this.removed=!0,clearTimeout(r)}};this.when().catch((()=>i.remove())),o(t),this.addHandles(i)}};return u=i,(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,clonable:!1})],a.prototype,"publishingInfo",null),a=(0,tslib_es6._)([(0,subclass/* subclass */.$)(o)],a),a};

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/RefreshableLayer.js + 1 modules
var RefreshableLayer = __webpack_require__(50508);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js
var ScaleRangeLayer = __webpack_require__(25389);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/TemporalLayer.js
var TemporalLayer = __webpack_require__(90826);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js
var arcgisLayerUrl = __webpack_require__(16123);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/commonProperties.js + 1 modules
var commonProperties = __webpack_require__(84356);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/featureLayerUtils.js + 1 modules
var featureLayerUtils = __webpack_require__(97461);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/FeatureTemplate.js
var FeatureTemplate = __webpack_require__(48330);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/FeatureType.js
var FeatureType = __webpack_require__(25392);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/fieldProperties.js
var fieldProperties = __webpack_require__(77567);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/fieldUtils.js
var fieldUtils = __webpack_require__(42453);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/LabelClass.js + 1 modules
var LabelClass = __webpack_require__(86155);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/labelingInfo.js
var labelingInfo = __webpack_require__(79682);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/serviceCapabilitiesUtils.js + 1 modules
var serviceCapabilitiesUtils = __webpack_require__(90351);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/TimeInfo.js
var TimeInfo = __webpack_require__(83849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/versionUtils.js
var versionUtils = __webpack_require__(93797);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/source/DataLayerSource.js + 3 modules
var DataLayerSource = __webpack_require__(44360);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/styleUtils.js
var styleUtils = __webpack_require__(21484);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/Query.js + 1 modules
var Query = __webpack_require__(24587);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/TopFeaturesQuery.js + 1 modules
var TopFeaturesQuery = __webpack_require__(56051);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/popupUtils.js
var popupUtils = __webpack_require__(44116);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/webdoc/interfaces.js
var interfaces = __webpack_require__(15954);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/webdoc/support/opacityUtils.js
var opacityUtils = __webpack_require__(48904);
;// ../node_modules/@arcgis/core/layers/FeatureLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const Ue="FeatureLayer",Qe="esri.layers.FeatureLayer",Ne=Logger/* default */.A.getLogger(Qe);function $e(e,r){return new Error/* default */.A("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${r}`,{layer:e})}function Ge(e){return e&&e instanceof Collection/* default */.A}const Je=(0,fieldProperties/* defineFieldProperties */.p)();function We(e,r,t){const i=!!t?.writeLayerSchema;return{enabled:i,ignoreOrigin:i}}let Be=class extends((0,FeatureLayerBase/* FeatureLayerBase */.j)((0,FeatureReductionLayer/* FeatureReductionLayer */.J)((0,FeatureEffectLayer/* FeatureEffectLayer */.F)(u((0,EditBusLayer/* EditBusLayer */.w6)((0,BlendLayer/* BlendLayer */.d)((0,OrderedLayer/* OrderedLayer */.f)((0,TemporalLayer/* TemporalLayer */.e)((0,ScaleRangeLayer/* ScaleRangeLayer */.j)((0,RefreshableLayer/* RefreshableLayer */.J)((0,ArcGISService/* ArcGISService */.b)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.A)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)((0,CustomParametersMixin/* CustomParametersMixin */.d)((0,APIKeyMixin/* APIKeyMixin */.p)((0,Clonable/* ClonableMixin */.O)(Layer/* default */.A)))))))))))))))))){constructor(...e){super(...e),this.charts=null,this.copyright=null,this.displayField=null,this.dynamicDataSource=null,this.fields=null,this.fieldsIndex=null,this.formTemplate=null,this.fullExtent=null,this.geometryType=null,this.hasM=void 0,this.hasZ=void 0,this.infoFor3D=null,this.isTable=!1,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.outFields=null,this.path=null,this.popupEnabled=!0,this.popupTemplate=null,this.resourceInfo=null,this.screenSizePerspectiveEnabled=!0,this.spatialReference=SpatialReference/* default */.A.WGS84,this.subtypeCode=null,this.templates=null,this.timeInfo=null,this.title=null,this.sublayerTitleMode="item-title",this.type="feature",this.typeIdField=null,this.types=null,this.visible=!0,this._debouncedSaveOperations=(0,promiseUtils/* debounce */.sg)((async(e,r,t)=>{const{save:i,saveAs:o}=await __webpack_require__.e(/* import() */ 7610).then(__webpack_require__.bind(__webpack_require__, 77610));switch(e){case interfaces/* SaveOperationType */.X.SAVE:return i(this,r);case interfaces/* SaveOperationType */.X.SAVE_AS:return o(this,t,r)}}))}destroy(){this.source?.destroy()}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}load(e){const r=null!=e?e.signal:null;if(this.portalItem?.loaded&&this.source)return this.addResolvingPromise(this.createGraphicsSource(r).then((e=>this.initLayerProperties(e)))),Promise.resolve(this);const t=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},e).catch(promiseUtils/* throwIfAbortError */.QP).then((async()=>{if(this.url&&null==this.layerId&&/FeatureServer|MapServer\/*$/i.test(this.url)){const e=await this._fetchFirstValidLayerId(r);null!=e&&(this.layerId=e)}if(!this.url&&!this._hasMemorySource())throw new Error/* default */.A("feature-layer:missing-url-or-source","Feature layer must be created with either a url or a source");return this.initLayerProperties(await this.createGraphicsSource(r))})).then((()=>(0,featureLayerUtils/* ensureLayerCredential */.VA)(this,"load",e)));return this.addResolvingPromise(t),Promise.resolve(this)}readCapabilities(e,r){return r=r.layerDefinition||r,(0,serviceCapabilitiesUtils/* getFeatureLayerCapabilities */.S)(r,this.url)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("dynamicDataSource"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return!(this.loaded&&!this.capabilities?.operations.supportsEditing)&&(this._isOverridden("editingEnabled")?this._get("editingEnabled"):this._hasMemorySource()||this.userHasEditingPrivileges)}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}readEditingEnabled(e,r){return this._readEditingEnabled(r,!1)}readEditingEnabledFromWebMap(e,r,t){return this._readEditingEnabled(r,!0,t)}writeEditingEnabled(e,r){this._writeEditingEnabled(e,r,!1)}writeEditingEnabledToWebMap(e,r,t,i){this._writeEditingEnabled(e,r,!0,i)}get effectiveEditingEnabled(){return (0,featureLayerUtils/* computeEffectiveEditingEnabled */.C$)(this)}readIsTable(e,r){return"Table"===(r=r?.layerDefinition??r).type||!r.geometryType}writeIsTable(e,r,t,i){i?.writeLayerSchema&&(0,object/* setDeepValue */.sM)(t,e?"Table":"Feature Layer",r)}readGlobalIdField(e,r){return (0,featureLayerUtils/* readGlobalIdField */.jD)(r.layerDefinition||r)}readObjectIdField(e,r){return (0,featureLayerUtils/* readObjectIdField */.Zm)(r.layerDefinition||r)}get parsedUrl(){const e=(0,urlUtils/* urlToObject */.An)(this.url);return null!=e&&(null!=this.dynamicDataSource?e.path=(0,urlUtils/* join */.fj)(e.path,"dynamicLayer"):null!=this.layerId&&(e.path=(0,urlUtils/* join */.fj)(e.path,this.layerId.toString()))),e}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){(0,fieldUtils/* fixRendererFields */.yp)(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,r,i){r=r.layerDefinition||r;const o=r.drawingInfo?.renderer;if(o){const e=(0,jsonUtils/* read */.L)(o,r,i)??void 0;return e||Ne.error("Failed to create renderer",{rendererDefinition:r.drawingInfo.renderer,layer:this,context:i}),e}return (0,featureLayerUtils/* createDefaultRenderer */.PD)(r,i)}set source(e){const r=this._get("source");r!==e&&(Ge(r)&&this._resetMemorySource(r),Ge(e)&&this._initMemorySource(e),this._set("source",e))}castSource(e){return e?Array.isArray(e)||e instanceof Collection/* default */.A?new T({layer:this,items:e}):e:null}readSource(e,r){const t=FeatureSet/* default */.A.fromJSON(r.featureSet);return new T({layer:this,items:t?.features??[]})}readTemplates(e,r){const t=r.editFieldsInfo,i=t?.creatorField,o=t?.editorField;return e=e?.map((e=>FeatureTemplate/* default */.A.fromJSON(e))),this._fixTemplates(e,i),this._fixTemplates(e,o),e}readTitle(e,r){const t=r.layerDefinition?.name??r.name,i=r.title||r.layerDefinition?.title;if(t){const e=this.portalItem?.title;if("item-title"===this.sublayerTitleMode)return this.url?(0,arcgisLayerUrl/* titleFromUrlAndName */.yG)(this.url,t):t;let r=t;if(!r&&this.url){const e=(0,arcgisLayerUrl/* parse */.qg)(this.url);null!=e&&(r=e.title)}if(!r)return;return"item-title-and-service-name"===this.sublayerTitleMode&&e&&e!==r&&(r=e+" - "+r),(0,arcgisLayerUrl/* cleanTitle */.cr)(r)}if("item-title"===this.sublayerTitleMode&&i)return i}readTitleFromWebMap(e,r){return r.title||r.layerDefinition?.name}readTypeIdField(e,r){let t=(r=r.layerDefinition||r).typeIdField;if(t&&r.fields){t=t.toLowerCase();const e=r.fields.find((e=>e.name.toLowerCase()===t));e&&(t=e.name)}return t}readTypes(e,r){e=(r=r.layerDefinition||r).types;const t=r.editFieldsInfo,i=t?.creatorField,o=t?.editorField;return e?.map((e=>(e=FeatureType/* default */.A.fromJSON(e),this._fixTemplates(e.templates,i),this._fixTemplates(e.templates,o),e)))}readVisible(e,r){return null!=r.layerDefinition?.defaultVisibility?!!r.layerDefinition.defaultVisibility:null!=r.visibility?!!r.visibility:void 0}async addAttachment(e,r){return (0,featureLayerUtils/* addAttachment */.Xl)(this,e,r,Ue)}async updateAttachment(e,r,t){return (0,featureLayerUtils/* updateAttachment */.bt)(this,e,r,t,Ue)}async applyEdits(e,r){return (0,featureLayerUtils/* applyEdits */.ct)(this,e,r)}async uploadAssets(e,r){return (0,featureLayerUtils/* uploadAssets */.rn)(this,e,r)}on(e,r){return super.on(e,r)}createPopupTemplate(e){return (0,popupUtils/* createPopupTemplate */.tn)(this,e)}async createGraphicsSource(e){if(this._hasMemorySource()&&this.source)return this.source.load({signal:e});const{default:r}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 7982).then(__webpack_require__.bind(__webpack_require__, 35601)),e);return new r({layer:this}).load({signal:e})}createQuery(){const e=(0,featureLayerUtils/* createQuery */.VZ)(this);e.dynamicDataSource=this.dynamicDataSource;const r=null!=this.subtypeCode?`${this.subtypeField} = ${this.subtypeCode}`:null,t=(0,sql/* sqlAnd */.m)(this.definitionExpression,r);return e.where=t||"1=1",e}async deleteAttachments(e,r){return (0,featureLayerUtils/* deleteAttachments */.mm)(this,e,r,Ue)}async fetchRecomputedExtents(e){return (0,featureLayerUtils/* fetchRecomputedExtents */.WP)(this,e,Ue)}getFeatureType(e){const{typeIdField:r,types:t}=this;if(!r||!e)return null;const i=e.attributes?e.attributes[r]:void 0;if(null==i)return null;let o=null;return t?.some((e=>{const{id:r}=e;return null!=r&&(r.toString()===i.toString()&&(o=e),!!o)})),o}getFieldDomain(e,r){const t=r?.feature,i=this.getFeatureType(t);if(i){const r=i.domains&&i.domains[e];if(r&&"inherited"!==r.type)return r}return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}async queryAttachments(e,r){return (0,featureLayerUtils/* queryAttachments */.lV)(this,e,r,Ue)}async queryFeatures(e,r){const t=await this.load(),i=await t.source.queryFeatures(Query/* default */.A.from(e)??t.createQuery(),r);if(i?.features)for(const o of i.features)o.layer=o.sourceLayer=t;return i}async queryObjectIds(e,r){return (0,featureLayerUtils/* queryObjectIds */.sg)(this,e,r,Ue)}async queryFeatureCount(e,r){return (0,featureLayerUtils/* queryFeatureCount */.Ye)(this,e,r,Ue)}async queryExtent(e,r){return (0,featureLayerUtils/* queryExtent */.B5)(this,e,r,Ue)}async queryRelatedFeatures(e,r){return (0,featureLayerUtils/* queryRelatedFeatures */.hM)(this,e,r,Ue)}async queryRelatedFeaturesCount(e,r){return (0,featureLayerUtils/* queryRelatedFeaturesCount */.S2)(this,e,r,Ue)}async queryTopFeatures(e,r){const{source:t,capabilities:i}=await this.load();if(!t.queryTopFeatures||!i?.query?.supportsTopFeaturesQuery)throw new Error/* default */.A(Ue,"Layer source does not support queryTopFeatures capability");const o=await t.queryTopFeatures(TopFeaturesQuery/* default */.A.from(e),r);if(o?.features)for(const s of o.features)s.layer=s.sourceLayer=this;return o}async queryTopObjectIds(e,r){const{source:t,capabilities:i}=await this.load();if(!t.queryTopObjectIds||!i?.query.supportsTopFeaturesQuery)throw new Error/* default */.A(Ue,"Layer source does not support queryTopObjectIds capability");return t.queryTopObjectIds(TopFeaturesQuery/* default */.A.from(e),r)}async queryTopFeaturesExtent(e,r){const{source:t,capabilities:i}=await this.load();if(!t.queryTopExtents||!i?.query?.supportsTopFeaturesQuery)throw new Error/* default */.A(Ue,"Layer source does not support queryTopExtents capability");return t.queryTopExtents(TopFeaturesQuery/* default */.A.from(e),r)}async queryTopFeatureCount(e,r){const{source:t,capabilities:i}=await this.load();if(!t.queryTopCount||!i?.query?.supportsTopFeaturesQuery)throw new Error/* default */.A(Ue,"Layer source does not support queryFeatureCount capability");return t.queryTopCount(TopFeaturesQuery/* default */.A.from(e),r)}read(e,r){const t=e.featureCollection;if(t){this.resourceInfo=e;const i=t.layers;i&&1===i.length&&(super.read(i[0],r),null!=t.showLegend&&super.read({showLegend:t.showLegend},r))}super.read(e,r),r&&"service"===r.origin&&(this.revert(["objectIdField","fields","timeInfo","dateFieldsTimeZone"],"service"),this.spatialReference||this.revert(["spatialReference"],"service"))}write(e,r){r={...r,origin:r?.origin??void 0,writeLayerSchema:r?.writeLayerSchema??this._hasMemorySource()};const{origin:t,layerContainerType:i,messages:o}=r;if(this.dynamicDataSource)return o?.push($e(this,"using a dynamic data source cannot be written to web scenes, web maps and feature service items")),null;if(this.isTable){if(("web-map"===t||"web-scene"===t)&&"tables"!==i)return o?.push($e(this,`a table source can only be written to tables, not ${i}`)),null;if(this._hasMemorySource())return o?.push($e(this,"using an in-memory table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&("web-map"===t||"web-scene"===t)&&"tables"===i)return o?.push($e(this,"using a non-table source cannot be written to tables in web maps or web scenes")),null;return super.write(e,r)}clone(){if(this._hasMemorySource())throw new Error/* default */.A(Ue,`FeatureLayer (title: ${this.title}, id: ${this.id}) created using in-memory source cannot be cloned`);return super.clone()}serviceSupportsSpatialReference(e){return!!this.loaded&&("memory"===this.source?.type||(0,versionUtils/* serviceSupportsSpatialReference */.D)(this,e))}async save(e){return this._debouncedSaveOperations(interfaces/* SaveOperationType */.X.SAVE,e)}async saveAs(e,r){return this._debouncedSaveOperations(interfaces/* SaveOperationType */.X.SAVE_AS,r,e)}_readEditingEnabled(e,r,t){let i=e.layerDefinition?.capabilities;return i?this._hasEditingCapability(i):(i=e.capabilities,r&&"web-map"===t?.origin&&!this._hasMemorySource()&&i?this._hasEditingCapability(i):void 0)}_hasEditingCapability(e){return e.toLowerCase().split(",").map((e=>e.trim())).includes("editing")}_writeEditingEnabled(e,r,t,i){if(!e){const e=this.capabilities?.operations?.supportsSync?"Query,Sync":"Query";(0,object/* setDeepValue */.sM)("layerDefinition.capabilities",e,r),t&&!i?.writeLayerSchema&&(r.capabilities=e)}}_getLayerDomain(e){const r=this.fieldsIndex.get(e);return r?r.domain:null}_fetchFirstValidLayerId(e){return (0,request/* default */.A)(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then((e=>{const r=e.data;if(r)return this.findFirstValidLayerId(r)}))}async initLayerProperties(e){return this._set("source",e),e.sourceJSON&&(this.sourceJSON=e.sourceJSON,this.read(e.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl})),this._verifySource(),this._verifyFields(),(0,fieldUtils/* fixRendererFields */.yp)(this.renderer,this.fieldsIndex),(0,fieldUtils/* fixTimeInfoFields */.sv)(this.timeInfo,this.fieldsIndex),(0,styleUtils/* loadStyleRenderer */.L)(this,{origin:"service"})}async hasDataChanged(){return (0,featureLayerUtils/* hasDataChanged */.jp)(this)}async fetchPublishingStatus(){const e=this.source;return e?.fetchPublishingStatus?e.fetchPublishingStatus():"unavailable"}_verifyFields(){const e=this.parsedUrl?.path??"undefined";this.objectIdField||console.log("FeatureLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||this._hasMemorySource()||-1!==e.search(/\/FeatureServer\//i)||this.fields?.some((e=>"geometry"===e.type))||console.log("FeatureLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_fixTemplates(e,r){e&&e.forEach((e=>{const t=e.prototype?.attributes;t&&r&&delete t[r]}))}_verifySource(){if(this._hasMemorySource()){if(this.url)throw new Error/* default */.A("feature-layer:mixed-source-and-url","FeatureLayer cannot be created with both an in-memory source and a url")}else if(!this.url)throw new Error/* default */.A("feature-layer:source-or-url-required","FeatureLayer requires either a url, a valid portal item or a source")}_initMemorySource(e){e.forEach((e=>{e.layer=this,e.sourceLayer=this})),this.addHandles([e.on("after-add",(e=>{e.item.layer=this,e.item.sourceLayer=this})),e.on("after-remove",(e=>{e.item.layer=null,e.item.sourceLayer=null}))],"fl-source")}_resetMemorySource(e){e.forEach((e=>{e.layer=null,e.sourceLayer=null})),this.removeHandles("fl-source")}_hasMemorySource(){return!(this.url||!this.source)}findFirstValidLayerId(e){return Array.isArray(e.layers)&&e.layers.length>0?e.layers[0].id:Array.isArray(e.tables)&&e.tables.length>0?e.tables[0].id:void 0}};(0,tslib_es6._)([(0,reader/* reader */.w)("service","capabilities")],Be.prototype,"readCapabilities",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{"web-scene":{write:!1}},write:!0}})],Be.prototype,"charts",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],Be.prototype,"createQueryVersion",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:{source:"layerDefinition.copyrightText"}}})],Be.prototype,"copyright",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:{source:"layerDefinition.displayField"}}})],Be.prototype,"displayField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:symbols/* symbolTypes */.Es,readOnly:!0})],Be.prototype,"defaultSymbol",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:DataLayerSource/* DataLayerSource */.L})],Be.prototype,"dynamicDataSource",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean})],Be.prototype,"editingEnabled",null),(0,tslib_es6._)([(0,reader/* reader */.w)(["portal-item","web-scene"],"editingEnabled",["layerDefinition.capabilities"])],Be.prototype,"readEditingEnabled",null),(0,tslib_es6._)([(0,reader/* reader */.w)("web-map","editingEnabled",["capabilities","layerDefinition.capabilities"])],Be.prototype,"readEditingEnabledFromWebMap",null),(0,tslib_es6._)([(0,writer/* writer */.K)(["portal-item","web-scene"],"editingEnabled",{"layerDefinition.capabilities":{type:String}})],Be.prototype,"writeEditingEnabled",null),(0,tslib_es6._)([(0,writer/* writer */.K)("web-map","editingEnabled",{capabilities:{type:String},"layerDefinition.capabilities":{type:String}})],Be.prototype,"writeEditingEnabledToWebMap",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],Be.prototype,"effectiveEditingEnabled",null),(0,tslib_es6._)([(0,property/* property */.MZ)({...Je.fields,json:{read:{source:"layerDefinition.fields"},origins:{service:{name:"fields"},"web-map":{write:{target:"layerDefinition.fields",overridePolicy:We}}}}})],Be.prototype,"fields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(Je.fieldsIndex)],Be.prototype,"fieldsIndex",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:FormTemplate/* default */.A,json:{name:"formInfo",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],Be.prototype,"formTemplate",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:{source:"layerDefinition.extent"}}})],Be.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{"web-map":{write:{target:"layerDefinition.geometryType",overridePolicy:We,writer(e,r,t){const i=e?featureLayerUtils/* geometryTypeKebabDict */.iX.toJSON(e):null;i&&(0,object/* setDeepValue */.sM)(t,i,r)}}}},read:{source:"layerDefinition.geometryType",reader:featureLayerUtils/* geometryTypeKebabDict */.iX.read}}})],Be.prototype,"geometryType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:{source:"layerDefinition.hasM"}}})],Be.prototype,"hasM",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:{source:"layerDefinition.hasZ"}}})],Be.prototype,"hasZ",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties.id)],Be.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],Be.prototype,"infoFor3D",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{"web-map":{write:{target:"layerDefinition.type"}}}}})],Be.prototype,"isTable",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","isTable",["type","geometryType"]),(0,reader/* reader */.w)("isTable",["layerDefinition.type","layerDefinition.geometryType"])],Be.prototype,"readIsTable",null),(0,tslib_es6._)([(0,writer/* writer */.K)("web-map","isTable")],Be.prototype,"writeIsTable",null),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* labelsVisible */.kF)],Be.prototype,"labelsVisible",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[LabelClass/* default */.A],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:labelingInfo/* reader */.w,write:!1},"web-scene":{name:"layerDefinition.drawingInfo.labelingInfo",read:labelingInfo/* reader */.w,write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}},name:"layerDefinition.drawingInfo.labelingInfo",read:labelingInfo/* reader */.w,write:!0}})],Be.prototype,"labelingInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)((()=>{const e=(0,lang/* clone */.o8)(commonProperties/* opacityDrawingInfo */.Ih);return e.json.origins["portal-item"]={write:{target:"layerDefinition.drawingInfo.transparency",writer(e,r,t){(0,object/* setDeepValue */.sM)(t,(0,opacityUtils/* opacityToTransparency */.p)(e),r)}}},e})())],Be.prototype,"opacity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* legendEnabled */.fV)],Be.prototype,"legendEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide"],json:(()=>{const e=(0,lang/* clone */.o8)(commonProperties/* listMode */.C1.json);return e.origins["portal-item"]={read:!1,write:!1},e})()})],Be.prototype,"listMode",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],Be.prototype,"readGlobalIdField",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{"web-map":{write:{target:"layerDefinition.objectIdField",overridePolicy:We}}}}})],Be.prototype,"objectIdField",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],Be.prototype,"readObjectIdField",null),(0,tslib_es6._)([(0,property/* property */.MZ)({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],Be.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(Je.outFields)],Be.prototype,"outFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],Be.prototype,"parsedUrl",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],Be.prototype,"path",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* popupEnabled */.M6)],Be.prototype,"popupEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:PopupTemplate/* default */.A,json:{name:"popupInfo",write:!0}})],Be.prototype,"popupTemplate",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],Be.prototype,"defaultPopupTemplate",null),(0,tslib_es6._)([(0,property/* property */.MZ)({types:types/* rendererTypes */.H,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{types:types/* webSceneRendererTypes */.X,name:"layerDefinition.drawingInfo.renderer",write:{layerContainerTypes:layerContainerType/* excludeTables */.K,overridePolicy:(e,r,t)=>({ignoreOrigin:t?.writeLayerSchema})}}},write:{target:"layerDefinition.drawingInfo.renderer",overridePolicy:(e,r,t)=>({ignoreOrigin:t?.writeLayerSchema})}}})],Be.prototype,"renderer",null),(0,tslib_es6._)([(0,reader/* reader */.w)("service","renderer",["drawingInfo.renderer","defaultSymbol"]),(0,reader/* reader */.w)("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],Be.prototype,"readRenderer",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],Be.prototype,"resourceInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)((()=>{const e=(0,lang/* clone */.o8)(commonProperties/* screenSizePerspectiveEnabled */.PY);return e.json.origins["portal-item"]={read:!1,write:!1},e})())],Be.prototype,"screenSizePerspectiveEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({clonable:!1})],Be.prototype,"source",null),(0,tslib_es6._)([(0,cast/* cast */.w)("source")],Be.prototype,"castSource",null),(0,tslib_es6._)([(0,reader/* reader */.w)("portal-item","source",["featureSet"]),(0,reader/* reader */.w)("web-map","source",["featureSet"])],Be.prototype,"readSource",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:{source:"layerDefinition.extent.spatialReference"}}})],Be.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number})],Be.prototype,"subtypeCode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[FeatureTemplate/* default */.A]})],Be.prototype,"templates",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("templates",["editFieldsInfo","creatorField","editorField","templates"])],Be.prototype,"readTemplates",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:TimeInfo/* default */.A})],Be.prototype,"timeInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],Be.prototype,"title",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","title",["name"]),(0,reader/* reader */.w)("portal-item","title",["layerDefinition.title","layerDefinition.name","title"])],Be.prototype,"readTitle",null),(0,tslib_es6._)([(0,reader/* reader */.w)("web-map","title",["layerDefinition.name","title"])],Be.prototype,"readTitleFromWebMap",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],Be.prototype,"sublayerTitleMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1}})],Be.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],Be.prototype,"typeIdField",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","typeIdField"),(0,reader/* reader */.w)("typeIdField",["layerDefinition.typeIdField"])],Be.prototype,"readTypeIdField",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[FeatureType/* default */.A]})],Be.prototype,"types",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","types",["types"]),(0,reader/* reader */.w)("types",["layerDefinition.types"])],Be.prototype,"readTypes",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{origins:{"portal-item":{write:{target:"layerDefinition.defaultVisibility"}}}}})],Be.prototype,"visible",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("portal-item","visible",["visibility","layerDefinition.defaultVisibility"])],Be.prototype,"readVisible",null),Be=(0,tslib_es6._)([(0,subclass/* subclass */.$)(Qe)],Be);const Ze=Be;


/***/ }),

/***/ 46602:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mk: () => (/* binding */ p),
/* harmony export */   Zk: () => (/* binding */ c),
/* harmony export */   w6: () => (/* binding */ F)
/* harmony export */ });
/* unused harmony exports emitUpdateMomentEvent, isLayerWithGDBVersion, onApplyEditsEvent, onUpdateMomentEvent, versionMatches */
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17306);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19251);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40189);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(539);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73446);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98849);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63863);
/* harmony import */ var _versionManagement_support_versionManagementUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(96023);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const o=new _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.EventEmitter;function l(e){return o.on("apply-edits",new WeakRef(e))}function a(e){return o.on("update-moment",new WeakRef(e))}function c(e,t,s=null,r=!1){const d=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .createResolver */ .Tw)();return r=null==t||r,o.emit("apply-edits",{serviceUrl:e,layerId:t,gdbVersion:s,mayReceiveServiceEdits:r,result:d.promise}),d}function h(e,t,s=null,i){o.emit("update-moment",{serviceUrl:e,layerId:t,gdbVersion:s,moment:i})}const u="esri.layers.mixins.EditBusLayer",m=Symbol(u);function p(e){return null!=e&&"object"==typeof e&&m in e}function b(e){return null!=e&&"object"==typeof e&&"gdbVersion"in e}function g(e,t,s){const i=new URL(e).host,r=_versionManagement_support_versionManagementUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .defaultVersionNameLookup */ .Z3.get(i),n=e=>!e||e===r;return n(t)&&n(s)||t===s}const F=t=>{var i;let d=class extends t{constructor(...e){super(...e),this[i]=!0,this._applyEditsHandler=e=>{const{serviceUrl:t,layerId:i,gdbVersion:r,mayReceiveServiceEdits:d,result:o}=e,l=t===this.url,a=null!=i&&null!=this.layerId&&i===this.layerId,c=b(this),h=b(this)&&g(t,r,this.gdbVersion);if(!l||c&&!h||!a&&!d)return;const u=o.then((e=>{if(a&&(e.addedFeatures.length||e.updatedFeatures.length||e.deletedFeatures.length||e.addedAttachments.length||e.updatedAttachments.length||e.deletedAttachments.length))return this.emit("edits",(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(e)),e;const t=e.editedFeatures?.find((({layerId:e})=>e===this.layerId));if(t){const{adds:i,updates:r,deletes:d}=t.editedFeatures,n={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:i?i.map((({attributes:e})=>({objectId:this.objectIdField&&e[this.objectIdField],globalId:this.globalIdField&&e[this.globalIdField]}))):[],deletedFeatures:d?d.map((({attributes:e})=>({objectId:this.objectIdField&&e[this.objectIdField],globalId:this.globalIdField&&e[this.globalIdField]}))):[],updatedFeatures:r?r.map((({current:{attributes:e}})=>({objectId:this.objectIdField&&e[this.objectIdField],globalId:this.globalIdField&&e[this.globalIdField]}))):[],editedFeatures:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(e.editedFeatures),exceededTransferLimit:!1,historicMoment:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(e.historicMoment)};return this.emit("edits",n),n}return{edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:[],deletedFeatures:[],updatedFeatures:[],editedFeatures:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(e.editedFeatures),exceededTransferLimit:!1,historicMoment:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(e.historicMoment)}})).then((e=>("historicMoment"in this&&this.historicMoment!==e.historicMoment&&(0,_versionManagement_support_versionManagementUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .isVersionInEditSession */ .w5)(t,r)&&(this.historicMoment=e.historicMoment),e)));this.emit("apply-edits",{result:u})},this._updateMomentHandler=e=>{const{serviceUrl:t,gdbVersion:s,moment:i}=e,r=t===this.url,d=b(this),n=b(this)&&g(t,s,this.gdbVersion),o=b(this)&&!g(t,this.gdbVersion,null);r&&d&&n&&o&&"historicMoment"in this&&this.historicMoment!==i&&(this.historicMoment=i)},this.when().then((()=>{this.addHandles(l(this._applyEditsHandler)),"historicMoment"in this&&this.addHandles(a(this._updateMomentHandler))}),(()=>{}))}};return i=m,d=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)(u)],d),d};


/***/ }),

/***/ 15053:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/* harmony import */ var _support_FeatureEffect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76137);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const t={write:{allowNull:!0}},p=p=>{let c=class extends p{constructor(){super(...arguments),this.featureEffect=null}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:_support_FeatureEffect_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,json:{origins:{"web-map":t,"portal-item":t}}})],c.prototype,"featureEffect",void 0),c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.layers.mixins.FeatureEffectLayer")],c),c};


/***/ }),

/***/ 71679:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  j: () => (/* binding */ D)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(48982);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/layerContainerType.js
var layerContainerType = __webpack_require__(73324);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(84698);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/HeightModelInfo.js
var HeightModelInfo = __webpack_require__(34064);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js
var arcgisLayerUrl = __webpack_require__(16123);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/commonProperties.js + 1 modules
var commonProperties = __webpack_require__(84356);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(24793);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/time/timeZoneUtils.js + 1 modules
var timeZoneUtils = __webpack_require__(12129);
;// ../node_modules/@arcgis/core/layers/support/EditFieldsInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let p=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(e){super(e),this.creatorField=null,this.creationDateField=null,this.editorField=null,this.editDateField=null,this.realm=null,this.timeZone=null}};(0,tslib_es6._)([(0,property/* property */.MZ)()],p.prototype,"creatorField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],p.prototype,"creationDateField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],p.prototype,"editorField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],p.prototype,"editDateField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],p.prototype,"realm",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)((0,timeZoneUtils/* timeZoneProperty */.P6)("dateFieldsTimeReference",!0))],p.prototype,"timeZone",void 0),p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.EditFieldsInfo")],p);const l=p;

;// ../node_modules/@arcgis/core/layers/support/FeatureIndex.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let FeatureIndex_p=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(o){super(o)}};(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0,json:{write:!0}})],FeatureIndex_p.prototype,"name",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0,json:{write:!0}})],FeatureIndex_p.prototype,"fields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0,json:{write:!0}})],FeatureIndex_p.prototype,"isAscending",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0,json:{write:!0}})],FeatureIndex_p.prototype,"indexType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0,json:{write:!0}})],FeatureIndex_p.prototype,"isUnique",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0,json:{write:!0}})],FeatureIndex_p.prototype,"description",void 0),FeatureIndex_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.FeatureIndex")],FeatureIndex_p);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/featureLayerUtils.js + 1 modules
var featureLayerUtils = __webpack_require__(97461);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/unitUtils.js
var unitUtils = __webpack_require__(92976);
;// ../node_modules/@arcgis/core/layers/support/GeometryFieldsInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let a=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(e){super(e),this.shapeAreaField=null,this.shapeLengthField=null,this.units=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:{source:"shapeAreaFieldName"}}})],a.prototype,"shapeAreaField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:{source:"shapeLengthFieldName"}}})],a.prototype,"shapeLengthField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:e=>unitUtils/* areaUnitsJSONMap */.dk.read(e)||unitUtils/* lengthUnitsJSONMap */.Sk.read(e)}})],a.prototype,"units",void 0),a=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.GeometryFieldsInfo")],a);const c=a;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/LayerFloorInfo.js
var LayerFloorInfo = __webpack_require__(8585);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
;// ../node_modules/@arcgis/core/layers/support/Relationship.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const Relationship_a=new jsonMap/* JSONMap */.J({esriRelCardinalityOneToOne:"one-to-one",esriRelCardinalityOneToMany:"one-to-many",esriRelCardinalityManyToMany:"many-to-many"}),n=new jsonMap/* JSONMap */.J({esriRelRoleOrigin:"origin",esriRelRoleDestination:"destination"});let Relationship_l=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(e){super(e),this.cardinality=null,this.composite=null,this.id=null,this.keyField=null,this.keyFieldInRelationshipTable=null,this.name=null,this.relatedTableId=null,this.relationshipTableId=null,this.role=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:Relationship_a.read,write:Relationship_a.write}})],Relationship_l.prototype,"cardinality",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!0,write:!0}})],Relationship_l.prototype,"composite",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!0,write:!0}})],Relationship_l.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!0,write:!0}})],Relationship_l.prototype,"keyField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!0,write:!0}})],Relationship_l.prototype,"keyFieldInRelationshipTable",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!0,write:!0}})],Relationship_l.prototype,"name",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!0,write:!0}})],Relationship_l.prototype,"relatedTableId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!0,write:!0}})],Relationship_l.prototype,"relationshipTableId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:n.read,write:n.write}})],Relationship_l.prototype,"role",void 0),Relationship_l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.Relationship")],Relationship_l);const Relationship_p=Relationship_l;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/serviceCapabilitiesUtils.js + 1 modules
var serviceCapabilitiesUtils = __webpack_require__(90351);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/domains.js + 5 modules
var domains = __webpack_require__(38938);
;// ../node_modules/@arcgis/core/layers/support/Subtype.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let Subtype_c=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(o){super(o),this.code=null,this.defaultValues={},this.domains=null,this.name=null}readDomains(o){if(!o)return null;const r={};for(const t of Object.keys(o))r[t]=(0,domains/* fromJSON */.rS)(o[t]);return r}writeDomains(o,r){if(!o)return;const t={};for(const s of Object.keys(o))o[s]&&(t[s]=o[s]?.toJSON());r.domains=t}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],Subtype_c.prototype,"code",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Object,json:{write:!0}})],Subtype_c.prototype,"defaultValues",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],Subtype_c.prototype,"domains",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("domains")],Subtype_c.prototype,"readDomains",null),(0,tslib_es6._)([(0,writer/* writer */.K)("domains")],Subtype_c.prototype,"writeDomains",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],Subtype_c.prototype,"name",void 0),Subtype_c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.Subtype")],Subtype_c);const Subtype_n=Subtype_c;

;// ../node_modules/@arcgis/core/layers/mixins/FeatureLayerBase.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const D=D=>{let R=class extends D{constructor(){super(...arguments),this.copyright=null,this.capabilities=null,this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.definitionExpression=null,this.displayField=null,this.editFieldsInfo=null,this.editingInfo=null,this.elevationInfo=null,this.floorInfo=null,this.fullExtent=null,this.gdbVersion=null,this.geometryFieldsInfo=null,this.geometryType=null,this.globalIdField=null,this.hasM=void 0,this.hasZ=void 0,this.heightModelInfo=null,this.historicMoment=null,this.indexes=new(Collection/* default */.A.ofType(FeatureIndex_p)),this.isTable=!1,this.layerId=void 0,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.preferredTimeZone=null,this.relationships=null,this.returnM=void 0,this.returnZ=void 0,this.serviceDefinitionExpression=null,this.serviceItemId=null,this.sourceJSON=null,this.spatialReference=SpatialReference/* default */.A.WGS84,this.subtypeField=null,this.subtypes=null,this.trackIdField=null,this.version=void 0}get authenticationTriggerEvent(){if(!this.url)return null;const{capabilities:e}=this;if(e){const{query:t,operations:r,editing:i}=e;if(!t.supportsQueryByOthers||!t.supportsQueryByAnonymous)return"load";if(r.supportsEditing&&!(i.supportsUpdateByOthers&&i.supportsUpdateByAnonymous&&i.supportsDeleteByOthers&&i.supportsDeleteByAnonymous))return"load"}return this.userHasUpdateItemPrivileges?(0,featureLayerUtils/* isLayerCacheStale */.tG)(this)?"load":this.hasUpdateItemRestrictions?e.operations.supportsQuery?"editing":"load":null:this.userHasFullEditingPrivileges&&this.hasFullEditingRestrictions?"editing":null}readCapabilitiesFromService(e,t){return (0,serviceCapabilitiesUtils/* getFeatureLayerCapabilities */.S)(t,this.url)}readEditingInfo(e,t){const{editingInfo:r}=t;return r?{lastEditDate:null!=r.lastEditDate?new Date(r.lastEditDate):null}:null}get effectiveCapabilities(){const e=this.capabilities;if(!e)return null;const t=(0,lang/* clone */.o8)(e),{operations:i,editing:o}=t;return this.sourceJSON?.isMultiServicesView?(this.userHasUpdateItemPrivileges&&(i.supportsQuery=!0),t):this.userHasUpdateItemPrivileges?(i.supportsAdd=i.supportsDelete=i.supportsEditing=i.supportsQuery=i.supportsUpdate=o.supportsDeleteByOthers=o.supportsGeometryUpdate=o.supportsUpdateByOthers=!0,t):(this.userHasFullEditingPrivileges&&i.supportsEditing&&(i.supportsAdd=i.supportsDelete=i.supportsUpdate=o.supportsGeometryUpdate=!0),t)}readGlobalIdFieldFromService(e,t){return (0,featureLayerUtils/* readGlobalIdField */.jD)(t)}get hasFullEditingRestrictions(){const e=this.capabilities;if(!e||this.sourceJSON?.isMultiServicesView)return!1;const{operations:t,editing:r}=e;return t.supportsEditing&&!(t.supportsAdd&&t.supportsDelete&&t.supportsUpdate&&r.supportsGeometryUpdate)}get hasUpdateItemRestrictions(){const e=this.capabilities;if(!e)return!1;const{operations:t,editing:r}=e;return this.sourceJSON?.isMultiServicesView?!t.supportsQuery:!(t.supportsAdd&&t.supportsDelete&&t.supportsEditing&&t.supportsQuery&&t.supportsUpdate&&r.supportsDeleteByOthers&&r.supportsGeometryUpdate&&r.supportsUpdateByOthers)}readIsTableFromService(e,t){return"Table"===t.type}readMaxScale(e,t){return t.effectiveMaxScale||e||0}readMinScale(e,t){return t.effectiveMinScale||e||0}readObjectIdFieldFromService(e,t){return (0,featureLayerUtils/* readObjectIdField */.Zm)(t)}readServiceDefinitionExpression(e,t){return t.definitionQuery||t.definitionExpression}set url(e){const t=(0,arcgisLayerUrl/* sanitizeUrlWithLayerId */.HZ)({layer:this,url:e,nonStandardUrlAllowed:!0,logger:Logger/* default */.A.getLogger(this)});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,i){(0,arcgisLayerUrl/* writeUrlWithLayerId */.LS)(this,e,null,t,i)}readVersion(e,t){return (0,featureLayerUtils/* readVersion */.$4)(t)}};return (0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],R.prototype,"authenticationTriggerEvent",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{service:{read:{source:"copyrightText"}}}}})],R.prototype,"copyright",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1,origins:{service:{read:{source:["advancedQueryCapabilities","allowGeometryUpdates","allowUpdateWithoutMValues","archivingInfo","capabilities","datesInUnknownTimezone","hasAttachments","hasM","hasZ","maxRecordCount","maxRecordCountFactor","ownershipBasedAccessControlForFeatures","standardMaxRecordCount","supportedQueryFormats","supportsAdvancedQueries","supportsApplyEditsWithGlobalIds","supportsAttachmentsByUploadId","supportsAttachmentsResizing","supportsCalculate","supportsCoordinatesQuantization","supportsExceedsLimitStatistics","supportsFieldDescriptionProperty","supportsQuantizationEditMode","supportsRollbackOnFailureParameter","supportsStatistics","supportsTruncate","supportsValidateSql","tileMaxRecordCount","useStandardizedQueries"]}}}}})],R.prototype,"capabilities",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","capabilities")],R.prototype,"readCapabilitiesFromService",null),(0,tslib_es6._)([(0,property/* property */.MZ)((0,timeZoneUtils/* timeZoneProperty */.P6)("dateFieldsTimeReference"))],R.prototype,"dateFieldsTimeZone",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean})],R.prototype,"datesInUnknownTimezone",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],R.prototype,"definitionExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{service:{read:{source:"displayField"}}}}})],R.prototype,"displayField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:l})],R.prototype,"editFieldsInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],R.prototype,"editingInfo",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("editingInfo")],R.prototype,"readEditingInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],R.prototype,"effectiveCapabilities",null),(0,tslib_es6._)([(0,property/* property */.MZ)((()=>{const e=(0,lang/* clone */.o8)(commonProperties/* elevationInfo */.Yj),t=e.json.origins;return t["web-map"]={read:!1,write:!1},t["portal-item"]={read:!1,write:!1},e})())],R.prototype,"elevationInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:LayerFloorInfo/* default */.A,json:{name:"layerDefinition.floorInfo",write:!0,origins:{"web-scene":{name:"layerDefinition.floorInfo",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}}}})],R.prototype,"floorInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Extent/* default */.A,json:{origins:{service:{read:{source:"extent"}}}}})],R.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],R.prototype,"gdbVersion",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:c,json:{read:{source:"geometryProperties"}}})],R.prototype,"geometryFieldsInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["point","polygon","polyline","multipoint","multipatch","mesh"],json:{origins:{service:{read:featureLayerUtils/* geometryTypeKebabDict */.iX.read}}}})],R.prototype,"geometryType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],R.prototype,"globalIdField",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","globalIdField",["globalIdField","fields"])],R.prototype,"readGlobalIdFieldFromService",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],R.prototype,"hasFullEditingRestrictions",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{origins:{service:{read:!0}}}})],R.prototype,"hasM",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],R.prototype,"hasUpdateItemRestrictions",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{origins:{service:{read:!0}}}})],R.prototype,"hasZ",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:HeightModelInfo/* default */.A})],R.prototype,"heightModelInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Date})],R.prototype,"historicMoment",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(FeatureIndex_p),readOnly:!0})],R.prototype,"indexes",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],R.prototype,"isTable",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","isTable",["type"])],R.prototype,"readIsTableFromService",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{read:!1,write:{target:"id"}}},read:!1}})],R.prototype,"layerId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* maxScale */.hG)],R.prototype,"maxScale",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","maxScale",["maxScale","effectiveMaxScale"])],R.prototype,"readMaxScale",null),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* minScale */.hn)],R.prototype,"minScale",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","minScale",["minScale","effectiveMinScale"])],R.prototype,"readMinScale",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],R.prototype,"objectIdField",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","objectIdField",["objectIdField","fields"])],R.prototype,"readObjectIdFieldFromService",null),(0,tslib_es6._)([(0,property/* property */.MZ)((0,timeZoneUtils/* timeZoneProperty */.P6)("preferredTimeReference"))],R.prototype,"preferredTimeZone",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Relationship_p],readOnly:!0})],R.prototype,"relationships",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean})],R.prototype,"returnM",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean})],R.prototype,"returnZ",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{write:!1}})],R.prototype,"serverGens",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],R.prototype,"serviceDefinitionExpression",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","serviceDefinitionExpression",["definitionQuery","definitionExpression"])],R.prototype,"readServiceDefinitionExpression",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],R.prototype,"serviceItemId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],R.prototype,"sourceJSON",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SpatialReference/* default */.A,json:{origins:{service:{read:{source:"extent.spatialReference"}}}}})],R.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0,json:{origins:{service:{read:!0}}}})],R.prototype,"subtypeField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Subtype_n],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],R.prototype,"subtypes",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:{source:"timeInfo.trackIdField"}}})],R.prototype,"trackIdField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* url */.OZ)],R.prototype,"url",null),(0,tslib_es6._)([(0,writer/* writer */.K)("url")],R.prototype,"writeUrl",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{service:{read:!0}},read:!1}})],R.prototype,"version",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","version",["currentVersion","capabilities","drawingInfo","hasAttachments","htmlPopupType","relationships","timeInfo","typeIdField","types"])],R.prototype,"readVersion",null),R=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.mixins.FeatureLayerBase")],R),R};


/***/ }),

/***/ 64782:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ c)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(85251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/AggregateField.js
var AggregateField = __webpack_require__(94301);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/layerContainerType.js
var layerContainerType = __webpack_require__(73324);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/FeatureReduction.js
var FeatureReduction = __webpack_require__(18475);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/PopupTemplate.js + 3 modules
var PopupTemplate = __webpack_require__(56542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/ClassBreaksRenderer.js
var ClassBreaksRenderer = __webpack_require__(17671);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/DictionaryRenderer.js
var DictionaryRenderer = __webpack_require__(84685);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/DotDensityRenderer.js + 1 modules
var DotDensityRenderer = __webpack_require__(20299);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/HeatmapRenderer.js + 1 modules
var HeatmapRenderer = __webpack_require__(25498);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/PieChartRenderer.js + 2 modules
var PieChartRenderer = __webpack_require__(79300);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/Renderer.js
var Renderer = __webpack_require__(76589);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/SimpleRenderer.js
var SimpleRenderer = __webpack_require__(47347);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/UniqueValueRenderer.js + 3 modules
var UniqueValueRenderer = __webpack_require__(2692);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/jsonUtils.js
var jsonUtils = __webpack_require__(48887);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/types.js
var types = __webpack_require__(49169);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/object.js
var object = __webpack_require__(76724);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(28902);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/commonProperties.js + 1 modules
var commonProperties = __webpack_require__(84356);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/featureLayerUtils.js + 1 modules
var featureLayerUtils = __webpack_require__(97461);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/LabelClass.js + 1 modules
var LabelClass = __webpack_require__(86155);
;// ../node_modules/@arcgis/core/layers/support/FeatureReductionBinning.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var b;const g="esri.layers.support.FeatureReductionBinning";let h=b=class extends FeatureReduction/* FeatureReduction */.c{constructor(e){super(e),this.type="binning",this.binType="geohash",this.fixedBinLevel=3,this.labelingInfo=null,this.labelsVisible=!0,this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.fields=[],this.renderer=null}writeFields(e,r,o){const t=e.filter((e=>"avg_angle"!==e.statisticType)).map((e=>e.toJSON()));(0,object/* setDeepValue */.sM)(o,t,r)}readRenderer(e,r,t){const s=r.drawingInfo?.renderer;return s?(0,jsonUtils/* read */.L)(s,r,t)??void 0:(0,featureLayerUtils/* createDefaultRenderer */.PD)(r,t)}clone(){return new b({fields:(0,lang/* clone */.o8)(this.fields),fixedBinLevel:this.fixedBinLevel,labelingInfo:(0,lang/* clone */.o8)(this.labelingInfo),labelsVisible:this.labelsVisible,maxScale:this.maxScale,popupEnabled:this.popupEnabled,popupTemplate:(0,lang/* clone */.o8)(this.popupTemplate),renderer:(0,lang/* clone */.o8)(this.renderer)})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({binning:"binning"})],h.prototype,"type",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({geohash:"geohash"})],h.prototype,"binType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,range:{min:1,max:9},json:{write:!0}})],h.prototype,"fixedBinLevel",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[LabelClass/* default */.A],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],h.prototype,"labelingInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* labelsVisible */.kF)],h.prototype,"labelsVisible",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{default:0,name:"visibilityInfo.maxScale"}})],h.prototype,"maxScale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* popupEnabled */.M6)],h.prototype,"popupEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:PopupTemplate/* default */.A,json:{name:"popupInfo",write:!0}})],h.prototype,"popupTemplate",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[AggregateField/* default */.A],json:{write:!0}})],h.prototype,"fields",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("fields")],h.prototype,"writeFields",null),(0,tslib_es6._)([(0,property/* property */.MZ)({types:types/* rendererTypes */.H,json:{write:{target:"drawingInfo.renderer"}}})],h.prototype,"renderer",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("renderer",["drawingInfo.renderer"])],h.prototype,"readRenderer",null),h=b=(0,tslib_es6._)([(0,subclass/* subclass */.$)(g)],h);const v=h;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols.js + 1 modules
var symbols = __webpack_require__(30822);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/screenUtils.js
var screenUtils = __webpack_require__(89882);
;// ../node_modules/@arcgis/core/layers/support/FeatureReductionCluster.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var FeatureReductionCluster_g;const S="esri.layers.support.FeatureReductionCluster";function w(e){return"simple"===e.type&&!e.visualVariables?.length}let I=FeatureReductionCluster_g=class extends JSONSupport/* JSONSupport */.oY{constructor(e){super(e),this.type="cluster",this.clusterRadius=(0,screenUtils/* toPt */.cr)("80px"),this.clusterMinSize=(0,screenUtils/* toPt */.cr)("12px"),this.clusterMaxSize=(0,screenUtils/* toPt */.cr)("50px"),this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.renderer=null,this.symbol=null,this.labelingInfo=null,this.labelsVisible=!0,this.fields=null}readRenderer(e,r,t){const s=r.drawingInfo?.renderer;return s?.authoringInfo?.isAutoGenerated?null:s?w(s)?null:(0,jsonUtils/* read */.L)(s,r,t)??void 0:(0,featureLayerUtils/* createDefaultRenderer */.PD)(r,t)}readSymbol(e,r,t){const s=r.drawingInfo?.renderer;if(s?.authoringInfo?.isAutoGenerated)return null;if(s&&w(s)){const e=(0,jsonUtils/* read */.L)(s,r,t);return e?.symbol}return null}writeSymbol(e,r,o,s){const i=this.renderer?.authoringInfo?.isAutoGenerated;if(!this.renderer||i){const o=new SimpleRenderer/* default */.A({symbol:e});r.drawingInfo={renderer:o.write({},s)}}}writeFields(e,r,t){const o=e.filter((e=>"avg_angle"!==e.statisticType)).map((e=>e.toJSON()));(0,object/* setDeepValue */.sM)(t,o,r)}readFields(e,r,t){return e.filter((e=>!e.isAutoGenerated)).map((e=>AggregateField/* default */.A.fromJSON(e)))}clone(){return new FeatureReductionCluster_g({clusterRadius:this.clusterRadius,clusterMinSize:this.clusterMinSize,clusterMaxSize:this.clusterMaxSize,labelingInfo:(0,lang/* clone */.o8)(this.labelingInfo),labelsVisible:this.labelsVisible,fields:(0,lang/* clone */.o8)(this.fields),maxScale:this.maxScale,renderer:(0,lang/* clone */.o8)(this.renderer),symbol:(0,lang/* clone */.o8)(this.symbol),popupEnabled:this.popupEnabled,popupTemplate:(0,lang/* clone */.o8)(this.popupTemplate)})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["cluster"],readOnly:!0,json:{write:!0}})],I.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,cast:e=>"auto"===e?e:(0,screenUtils/* toPt */.cr)(e),json:{write:!0}})],I.prototype,"clusterRadius",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,cast:screenUtils/* toPt */.cr,json:{write:!0}})],I.prototype,"clusterMinSize",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,cast:screenUtils/* toPt */.cr,json:{write:!0}})],I.prototype,"clusterMaxSize",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{default:0,name:"visibilityInfo.maxScale"}})],I.prototype,"maxScale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* popupEnabled */.M6)],I.prototype,"popupEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:PopupTemplate/* default */.A,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],I.prototype,"popupTemplate",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:types/* rendererTypes */.H,json:{write:{target:"drawingInfo.renderer"}}})],I.prototype,"renderer",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("renderer",["drawingInfo.renderer"])],I.prototype,"readRenderer",null),(0,tslib_es6._)([(0,property/* property */.MZ)({types:symbols/* symbolTypesCluster */.q8})],I.prototype,"symbol",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("symbol",["drawingInfo.renderer"])],I.prototype,"readSymbol",null),(0,tslib_es6._)([(0,writer/* writer */.K)("symbol")],I.prototype,"writeSymbol",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[LabelClass/* default */.A],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],I.prototype,"labelingInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* labelsVisible */.kF)],I.prototype,"labelsVisible",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[AggregateField/* default */.A],json:{write:!0}})],I.prototype,"fields",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("fields")],I.prototype,"writeFields",null),(0,tslib_es6._)([(0,reader/* reader */.w)("fields")],I.prototype,"readFields",null),I=FeatureReductionCluster_g=(0,tslib_es6._)([(0,subclass/* subclass */.$)(S)],I);const FeatureReductionCluster_v=I;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/FeatureReductionSelection.js
var FeatureReductionSelection = __webpack_require__(99989);
;// ../node_modules/@arcgis/core/layers/support/featureReductionUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const o={key:"type",base:FeatureReduction/* FeatureReduction */.c,typeMap:{cluster:FeatureReductionCluster_v,binning:v}},p={types:{key:"type",base:FeatureReduction/* FeatureReduction */.c,typeMap:{selection:FeatureReductionSelection/* default */.A,cluster:FeatureReductionCluster_v,binning:v}},json:{name:"layerDefinition.featureReduction",write:{allowNull:!0},origins:{"web-map":{types:o},"portal-item":{types:o},"web-scene":{types:{key:"type",base:FeatureReduction/* FeatureReduction */.c,typeMap:{selection:FeatureReductionSelection/* default */.A}},name:"layerDefinition.featureReduction",write:{layerContainerTypes:layerContainerType/* excludeTables */.K}}}}};

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/2d/layers/support/clusterUtils.js + 1 modules
var clusterUtils = __webpack_require__(85205);
;// ../node_modules/@arcgis/core/layers/mixins/FeatureReductionLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const c=c=>{let a=class extends c{constructor(...e){super(...e),this.addHandles((0,reactiveUtils/* watch */.wB)((()=>this.renderer),(()=>{if(this.featureReduction){const e=this._normalizeFeatureReduction(this.featureReduction);this._set("featureReduction",e)}}),reactiveUtils/* sync */.OH))}set featureReduction(e){const r=this._normalizeFeatureReduction(e);this._set("featureReduction",r)}set renderer(e){}_normalizeFeatureReduction(e){if("cluster"!==e?.type)return e;const r=e.clone(),t=[new AggregateField/* default */.A({name:"cluster_count",isAutoGenerated:!0,statisticType:"count"})],s=(r.fields??[]).filter((e=>!e.isAutoGenerated));if(e.renderer&&!e.renderer.authoringInfo?.isAutoGenerated)return r.fields=[...t,...s],r;if(e.symbol)return r.fields=[...t,...s],r.renderer=null,r;if(!this.renderer)return e;const o=(0,clusterUtils/* createClusterRenderer */.ur)(t,this.renderer,e,null,!1);return r.fields=[...t,...s],r.renderer=o,r}};return (0,tslib_es6._)([(0,property/* property */.MZ)(p)],a.prototype,"featureReduction",null),a=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.mixins.FeatureReductionLayer")],a),a};


/***/ }),

/***/ 94795:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: () => (/* binding */ c)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/object.js
var object = __webpack_require__(76724);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
;// ../node_modules/@arcgis/core/layers/support/OrderByInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var i;const p=new jsonMap/* JSONMap */.J({asc:"ascending",desc:"descending"});let n=i=class extends JSONSupport/* JSONSupport */.oY{constructor(r){super(r),this.field=null,this.valueExpression=null,this.order="ascending"}clone(){return new i({field:this.field,valueExpression:this.valueExpression,order:this.order})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],n.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],n.prototype,"valueExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:p.apiValues,json:{read:p.read,write:p.write}})],n.prototype,"order",void 0),n=i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.OrderByInfo")],n);const OrderByInfo_c=n;

;// ../node_modules/@arcgis/core/layers/mixins/OrderedLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function OrderedLayer_i(r,e,o){if(!r)return null;const t=r.find((r=>!!r.field));if(!t)return null;const i=new OrderByInfo_c;return i.read(t,o),[i]}function OrderedLayer_n(r,o,t,s){const i=r.find((r=>!!r.field));i&&(0,object/* setDeepValue */.sM)(t,[i.toJSON()],o)}const c=e=>{let c=class extends e{constructor(){super(...arguments),this.orderBy=null}};return (0,tslib_es6._)([(0,property/* property */.MZ)({type:[OrderByInfo_c],json:{origins:{"web-scene":{write:!1,read:!1}},read:{source:"layerDefinition.orderBy",reader:OrderedLayer_i},write:{target:"layerDefinition.orderBy",writer:OrderedLayer_n}}})],c.prototype,"orderBy",void 0),c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.mixins.OrderedLayer")],c),c};


/***/ }),

/***/ 90826:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _TimeExtent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19790);
/* harmony import */ var _TimeInterval_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50019);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75094);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63863);
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42453);
/* harmony import */ var _support_TimeInfo_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(83849);
/* harmony import */ var _portal_timeUnitKebabDictionary_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(55134);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const a=a=>{let f=class extends a{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0}readOffset(e,t){const o=t.timeInfo.exportOptions;if(!o)return null;const s=o.timeOffset,i=_portal_timeUnitKebabDictionary_js__WEBPACK_IMPORTED_MODULE_11__/* .timeUnitKebabDictionary */ .j.fromJSON(o.timeOffsetUnits);return s&&i?new _TimeInterval_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A({value:s,unit:i}):null}set timeInfo(e){(0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .fixTimeInfoFields */ .sv)(e,this.fieldsIndex),this._set("timeInfo",e)}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_TimeExtent_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,json:{write:!1}})],f.prototype,"timeExtent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_TimeInterval_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A})],f.prototype,"timeOffset",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__/* .reader */ .w)("service","timeOffset",["timeInfo.exportOptions"])],f.prototype,"readOffset",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({value:null,type:_support_TimeInfo_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],f.prototype,"timeInfo",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation"},origins:{"web-scene":{read:!1,write:!1}}}})],f.prototype,"useViewTime",void 0),f=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.layers.mixins.TemporalLayer")],f),f};


/***/ }),

/***/ 94301:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19251);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/* harmony import */ var _ExpressionInfo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54746);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var p;let n=p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(t){super(t),this.isAutoGenerated=!1,this.name=null,this.alias=null,this.onStatisticField=null,this.onStatisticExpression=null,this.statisticType=null}clone(){return new p({name:this.name,alias:this.alias,isAutoGenerated:this.isAutoGenerated,onStatisticExpression:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.onStatisticExpression),onStatisticField:this.onStatisticField,statisticType:this.statisticType})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:Boolean,json:{write:!0}})],n.prototype,"isAutoGenerated",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{write:!0}})],n.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{write:!0}})],n.prototype,"alias",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{write:!0}})],n.prototype,"onStatisticField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_ExpressionInfo_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,json:{write:!0}})],n.prototype,"onStatisticExpression",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{write:!0}})],n.prototype,"statisticType",void 0),n=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.layers.support.AggregateField")],n);const a=n;


/***/ }),

/***/ 54746:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24793);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let p=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* .ClonableMixin */ .O)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY)){constructor(r){super(r),this.expression=null,this.title=null,this.returnType=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{write:!0}})],p.prototype,"expression",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{write:!0}})],p.prototype,"title",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{write:!0}})],p.prototype,"returnType",void 0),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.layers.support.ExpressionInfo")],p);const i=p;


/***/ }),

/***/ 76137:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ w)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98849);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76724);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63863);
/* harmony import */ var _effects_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(27664);
/* harmony import */ var _FeatureFilter_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25758);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var f;const d={read:{reader:_effects_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .read */ .LF},write:{writer:_effects_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .write */ .M9,overridePolicy(){return{allowNull:null!=this.excludedEffect,isRequired:null==this.excludedEffect}}}},n={read:{reader:_effects_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .read */ .LF},write:{writer:_effects_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .write */ .M9,overridePolicy(){return{allowNull:null!=this.includedEffect,isRequired:null==this.includedEffect}}}},a={name:"showExcludedLabels",default:!0};let p=f=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY{constructor(e){super(e),this.filter=null,this.includedEffect=null,this.excludedEffect=null,this.excludedLabelsVisible=!1}write(e,t){const l=super.write(e,t);if(t?.origin){if(l.filter){const e=Object.keys(l.filter);if(e.length>1||"where"!==e[0])return t.messages?.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("web-document-write:unsupported-feature-effect","Invalid feature effect 'filter'. A filter can only contain a 'where' property",{layer:t.layer,effect:this})),null}if("showExcludedLabels"in l)return t.messages?.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("web-document-write:unsupported-feature-effect","Invalid value for property 'excludedLabelsVisible' which should always be 'true'",{layer:t.layer,effect:this})),null}return l}clone(){return new f({filter:null!=this.filter?this.filter.clone():null,includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:_FeatureFilter_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,json:{write:{allowNull:!0,writer(e,r,t,i){const s=e?.write({},i);s&&0!==Object.keys(s).length?(0,_core_object_js__WEBPACK_IMPORTED_MODULE_3__/* .setDeepValue */ .sM)(t,s,r):(0,_core_object_js__WEBPACK_IMPORTED_MODULE_3__/* .setDeepValue */ .sM)(t,null,r)}}}})],p.prototype,"filter",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:!0,origins:{"web-map":d,"portal-item":d}}})],p.prototype,"includedEffect",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:!0,origins:{"web-map":n,"portal-item":n}}})],p.prototype,"excludedEffect",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Boolean,json:{write:!0,name:"showExcludedLabels",origins:{"web-map":a,"portal-item":a}}})],p.prototype,"excludedLabelsVisible",void 0),p=f=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.layers.support.FeatureEffect")],p);const w=p;


/***/ }),

/***/ 25758:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17639);
/* harmony import */ var _TimeExtent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19790);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59851);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21877);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19251);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73446);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63863);
/* harmony import */ var _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24587);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var p;const c=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_3__/* .JSONMap */ .J({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),u=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_3__/* .JSONMap */ .J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let m=p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_4__/* .JSONSupport */ .oY{constructor(e){super(e),this.where=null,this.geometry=null,this.spatialRelationship="intersects",this.distance=void 0,this.objectIds=null,this.units=null,this.timeExtent=null}createQuery(e={}){const{where:t,geometry:i,spatialRelationship:r,timeExtent:s,objectIds:n,units:l,distance:p}=this;return new _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A({geometry:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_5__/* .clone */ .o8)(i),objectIds:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_5__/* .clone */ .o8)(n),spatialRelationship:r,timeExtent:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_5__/* .clone */ .o8)(s),where:t,units:l,distance:p,...e})}clone(){const{where:e,geometry:t,spatialRelationship:i,timeExtent:r,objectIds:s,units:n,distance:l}=this;return new p({geometry:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_5__/* .clone */ .o8)(t),objectIds:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_5__/* .clone */ .o8)(s),spatialRelationship:i,timeExtent:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_5__/* .clone */ .o8)(r),where:e,units:n,distance:l})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:String,json:{write:!0}})],m.prototype,"where",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({types:_geometry_js__WEBPACK_IMPORTED_MODULE_1__/* .geometryTypes */ .yR,json:{write:!0}})],m.prototype,"geometry",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:c.apiValues,json:{name:"spatialRel",read:{reader:c.read},write:{allowNull:!1,writer:c.write,overridePolicy(){return{enabled:null!=this.geometry}}}}})],m.prototype,"spatialRelationship",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:Number,json:{write:{overridePolicy(e){return{enabled:null!=e&&null!=this.geometry}}}}})],m.prototype,"distance",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:[Number],json:{write:!0}})],m.prototype,"objectIds",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:u.apiValues,json:{read:u.read,write:{writer:u.write,overridePolicy(e){return{enabled:null!=e&&null!=this.geometry}}}}})],m.prototype,"units",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:_TimeExtent_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,json:{write:!0}})],m.prototype,"timeExtent",void 0),m=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.layers.support.FeatureFilter")],m);const d=m;


/***/ }),

/***/ 18475:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(){super(...arguments),this.type=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:["selection","cluster","binning"],readOnly:!0,json:{read:!1,write:!0}})],t.prototype,"type",void 0),t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.layers.support.FeatureReduction")],t);


/***/ }),

/***/ 99989:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/* harmony import */ var _FeatureReduction_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18475);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var t;let c=t=class extends _FeatureReduction_js__WEBPACK_IMPORTED_MODULE_6__/* .FeatureReduction */ .c{constructor(r){super(r),this.type="selection"}clone(){return new t}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:["selection"]})],c.prototype,"type",void 0),c=t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.layers.support.FeatureReductionSelection")],c);const p=c;


/***/ }),

/***/ 83849:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _TimeExtent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19790);
/* harmony import */ var _TimeInterval_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50019);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24793);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75094);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(77542);
/* harmony import */ var _time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(12129);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function p(e,t){return _TimeInterval_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.fromJSON({value:e,unit:t})}let u=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_3__/* .ClonableMixin */ .O)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_4__/* .JSONSupport */ .oY)){constructor(e){super(e),this.cumulative=!1,this.endField=null,this.fullTimeExtent=null,this.hasLiveData=!1,this.interval=null,this.startField=null,this.timeZone=null,this.trackIdField=null,this.useTime=!0}readFullTimeExtent(e,r){if(!r.timeExtent||!Array.isArray(r.timeExtent)||2!==r.timeExtent.length)return null;const l=new Date(r.timeExtent[0]),i=new Date(r.timeExtent[1]);return new _TimeExtent_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A({start:l,end:i})}writeFullTimeExtent(e,t){null!=e?.start&&null!=e.end?t.timeExtent=[e.start.getTime(),e.end.getTime()]:t.timeExtent=null}readInterval(e,t){return t.timeInterval&&t.timeIntervalUnits?p(t.timeInterval,t.timeIntervalUnits):t.defaultTimeInterval&&t.defaultTimeIntervalUnits?p(t.defaultTimeInterval,t.defaultTimeIntervalUnits):null}writeInterval(e,t){t.timeInterval=e?.toJSON().value??null,t.timeIntervalUnits=e?.toJSON().unit??null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:Boolean,json:{name:"exportOptions.timeDataCumulative",write:!0}})],u.prototype,"cumulative",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:String,json:{name:"endTimeField",write:{enabled:!0,allowNull:!0}}})],u.prototype,"endField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:_TimeExtent_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,json:{write:{enabled:!0,allowNull:!0}}})],u.prototype,"fullTimeExtent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__/* .reader */ .w)("fullTimeExtent",["timeExtent"])],u.prototype,"readFullTimeExtent",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__/* .writer */ .K)("fullTimeExtent")],u.prototype,"writeFullTimeExtent",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:Boolean,json:{write:!0}})],u.prototype,"hasLiveData",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:_TimeInterval_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,json:{write:{enabled:!0,allowNull:!0}}})],u.prototype,"interval",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__/* .reader */ .w)("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],u.prototype,"readInterval",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__/* .writer */ .K)("interval")],u.prototype,"writeInterval",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:String,json:{name:"startTimeField",write:{enabled:!0,allowNull:!0}}})],u.prototype,"startField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)((0,_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .timeZoneProperty */ .P6)("timeReference",!0))],u.prototype,"timeZone",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:String,json:{write:{enabled:!0,allowNull:!0}}})],u.prototype,"trackIdField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:Boolean,json:{name:"exportOptions.useTime",write:!0}})],u.prototype,"useTime",void 0),u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__/* .subclass */ .$)("esri.layers.support.TimeInfo")],u);const d=u;


/***/ }),

/***/ 97461:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Xl: () => (/* binding */ m),
  ct: () => (/* binding */ b),
  C$: () => (/* binding */ T),
  PD: () => (/* binding */ D),
  VZ: () => (/* binding */ x),
  mm: () => (/* binding */ j),
  VA: () => (/* binding */ Q),
  WP: () => (/* binding */ I),
  iX: () => (/* binding */ f),
  GA: () => (/* binding */ V),
  jp: () => (/* binding */ S),
  tG: () => (/* binding */ U),
  lV: () => (/* binding */ q),
  B5: () => (/* binding */ O),
  Ye: () => (/* binding */ A),
  sg: () => (/* binding */ F),
  hM: () => (/* binding */ P),
  S2: () => (/* binding */ E),
  jD: () => (/* binding */ R),
  Zm: () => (/* binding */ M),
  $4: () => (/* binding */ C),
  bt: () => (/* binding */ w),
  rn: () => (/* binding */ g)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/kernel.js
var kernel = __webpack_require__(28830);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols.js + 1 modules
var symbols = __webpack_require__(30822);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/asyncUtils.js
var asyncUtils = __webpack_require__(12690);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/sql.js
var sql = __webpack_require__(76859);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/reader.js
var reader = __webpack_require__(61985);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/Query.js + 1 modules
var Query = __webpack_require__(24587);
;// ../node_modules/@arcgis/core/layers/support/featureQueryAll.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function r(e,r,a){r=r.clone(),e.capabilities.query.supportsMaxRecordCountFactor&&(r.maxRecordCountFactor=u(e));const n=t(e),o=e.capabilities.query.supportsPagination;r.start=0,r.num=n;let i=null;for(;;){const t=await e.source.queryFeaturesJSON(r,a);if(null==i?i=t:i.features=i.features.concat(t.features),i.exceededTransferLimit=t.exceededTransferLimit,!o||!t.exceededTransferLimit)break;r.start+=n}return i}function t(e){return u(e)*a(e)}function a(e){return e.capabilities.query.maxRecordCount||2e3}function u(r){return r.capabilities.query.supportsMaxRecordCountFactor?Query/* default */.A.MAX_MAX_RECORD_COUNT_FACTOR:1}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/layerUtils.js
var layerUtils = __webpack_require__(40454);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/SimpleRenderer.js
var SimpleRenderer = __webpack_require__(47347);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/UniqueValueRenderer.js + 3 modules
var UniqueValueRenderer = __webpack_require__(2692);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/AttachmentQuery.js
var AttachmentQuery = __webpack_require__(27973);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/RelationshipQuery.js
var RelationshipQuery = __webpack_require__(97724);
;// ../node_modules/@arcgis/core/layers/support/featureLayerUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const f=new jsonMap/* JSONMap */.J({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"});async function m(t,e,r,o){const a=await G(t);if(await h(t,e,o),!a.addAttachment)throw new Error/* default */.A(o,"Layer source does not support addAttachment capability");return a.addAttachment(e,r)}function h(t,e,r){const{attributes:o}=e,{objectIdField:a}=t;return t.capabilities?.data?.supportsAttachment?e?o?a&&o[a]?Promise.resolve():Promise.reject(new Error/* default */.A(r,`feature is missing the identifying attribute ${a}`)):Promise.reject(new Error/* default */.A(r,"'attributes' are required on a feature to query attachments")):Promise.reject(new Error/* default */.A(r,"A feature is required to add/delete/update attachments")):Promise.reject(new Error/* default */.A(r,"this layer doesn't support attachments"))}async function w(t,e,r,o,a){const s=await G(t);if(await h(t,e,a),!s.updateAttachment)throw new Error/* default */.A(a,"Layer source does not support updateAttachment capability");return s.updateAttachment(e,r,o)}async function b(t,e,r){const{applyEdits:n}=await __webpack_require__.e(/* import() */ 5903).then(__webpack_require__.bind(__webpack_require__, 75903)),o=await t.load(),{source:a,globalIdField:s}=o;let i=r;return("feature"===o.type?o.infoFor3D:null)&&null!=e.deleteFeatures&&null!=s&&(i={...i,globalIdToObjectId:await V(t,e.deleteFeatures,s)}),n(o,a,e,r)}async function g(t,e,r){const{uploadAssets:n}=await __webpack_require__.e(/* import() */ 5903).then(__webpack_require__.bind(__webpack_require__, 75903)),o=await t.load();return n(o,o.source,e,r)}async function j(t,e,r,o){const a=await G(t);if(await h(t,e,o),!a.deleteAttachments)throw new Error/* default */.A(o,"Layer source does not support deleteAttachments capability");return a.deleteAttachments(e,r)}async function I(t,e,r){const o=(await t.load({signal:e?.signal})).source;if(!o.fetchRecomputedExtents)throw new Error/* default */.A(r,"Layer source does not support fetchUpdates capability");return o.fetchRecomputedExtents(e)}async function q(t,e,r,o){e=AttachmentQuery/* default */.A.from(e),await t.load();const a=t.source,s=t.capabilities;if(!s?.data?.supportsAttachment)throw new Error/* default */.A(o,"this layer doesn't support attachments");const{attachmentTypes:i,objectIds:u,globalIds:c,num:l,size:d,start:y,where:f}=e;if(!s?.operations?.supportsQueryAttachments){if(i?.length>0||c?.length>0||d?.length>0||l||y||f)throw new Error/* default */.A(o,"when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",e)}if(!(u?.length||c?.length||f))throw new Error/* default */.A(o,"'objectIds', 'globalIds', or 'where' are required to perform attachment query",e);if(!a.queryAttachments)throw new Error/* default */.A(o,"Layer source does not support queryAttachments capability",e);return a.queryAttachments(e)}async function F(t,e,r,o){const a=await G(t);if(!a.queryObjectIds)throw new Error/* default */.A(o,"Layer source does not support queryObjectIds capability");return a.queryObjectIds(Query/* default */.A.from(e)??t.createQuery(),r)}async function A(t,e,r,o){const a=await G(t);if(!a.queryFeatureCount)throw new Error/* default */.A(o,"Layer source does not support queryFeatureCount capability");return a.queryFeatureCount(Query/* default */.A.from(e)??t.createQuery(),r)}async function O(t,e,r,o){const a=await G(t);if(!a.queryExtent)throw new Error/* default */.A(o,"Layer source does not support queryExtent capability");return a.queryExtent(Query/* default */.A.from(e)??t.createQuery(),r)}async function P(t,e,r,o){const a=await G(t);if(!a.queryRelatedFeatures)throw new Error/* default */.A(o,"Layer source does not support queryRelatedFeatures capability");return a.queryRelatedFeatures(RelationshipQuery["default"].from(e),r)}async function E(t,e,r,o){const a=await G(t);if(!a.queryRelatedFeaturesCount)throw new Error/* default */.A(o,"Layer source does not support queryRelatedFeaturesCount capability");return a.queryRelatedFeaturesCount(RelationshipQuery["default"].from(e),r)}async function S(t){const e=t.source;if(e?.refresh)try{const{dataChanged:r,updates:n}=await e.refresh();if(null!=n&&(t.sourceJSON={...t.sourceJSON,...n},t.read(n,{origin:"service",url:t.parsedUrl})),r)return!0}catch{}if(t.definitionExpression)try{return(await (0,sql/* parseWhereClause */.G)(t.definitionExpression,t.fieldsIndex)).hasDateFunctions}catch{}return!1}function x(t){const e=new Query/* default */.A,r=t.capabilities?.data,n=t.capabilities?.query;e.historicMoment=t.historicMoment,e.gdbVersion=t.gdbVersion,e.returnGeometry=!0,n&&(e.compactGeometryEnabled=n.supportsCompactGeometry,e.defaultSpatialReferenceEnabled=n.supportsDefaultSpatialReference),r&&(r.supportsZ&&null!=t.returnZ&&(e.returnZ=t.returnZ),r.supportsM&&null!=t.returnM&&(e.returnM=t.returnM)),e.outFields=["*"];const{timeOffset:o,timeExtent:a}=t;return e.timeExtent=null!=o&&null!=a?a.offset(-o.value,o.unit):a||null,e.multipatchOption="multipatch"===t.geometryType?"xyFootprint":null,e}function R(t){const{globalIdField:e,fields:r}=t;if(e)return e;if(r)for(const n of r)if("esriFieldTypeGlobalID"===n.type)return n.name}function M(t){const{objectIdField:e,fields:r}=t;if(e)return e;if(r)for(const n of r)if("esriFieldTypeOID"===n.type)return n.name}function C(t){return t.currentVersion?t.currentVersion:t.hasOwnProperty("capabilities")||t.hasOwnProperty("drawingInfo")||t.hasOwnProperty("hasAttachments")||t.hasOwnProperty("htmlPopupType")||t.hasOwnProperty("relationships")||t.hasOwnProperty("timeInfo")||t.hasOwnProperty("typeIdField")||t.hasOwnProperty("types")?10:9.3}async function G(t){return(await t.load()).source}async function L(e,r){if(!kernel.id)return;if(kernel.id.findCredential(e))return;let n;try{const o=await (0,layerUtils/* getOwningPortalUrl */.wI)(e,r);o&&(n=await kernel.id.checkSignInStatus(`${o}/sharing`))}catch(o){}if(n)try{const n=null!=r?r.signal:null;await kernel.id.getCredential(e,{signal:n})}catch(o){}}async function Q(t,e,r){const n=t.parsedUrl?.path;n&&t.authenticationTriggerEvent===e&&await L(n,r)}function T(t){return!t.sourceJSON?.isMultiServicesView&&(t.userHasUpdateItemPrivileges||t.editingEnabled)}const v=(0,reader/* createTypeReader */.C)({types:symbols/* symbolTypesRenderer */.xK});function D(t,e){if(t.defaultSymbol)return t.types?.length?new UniqueValueRenderer/* default */.A({defaultSymbol:v(t.defaultSymbol,t,e),field:t.typeIdField,uniqueValueInfos:t.types.map((t=>({id:t.id,symbol:v(t.symbol,t,e)})))}):new SimpleRenderer/* default */.A({symbol:v(t.defaultSymbol,t,e)})}function U(t){let e=t.sourceJSON?.cacheMaxAge;if(!e)return!1;const r=t.editingInfo?.lastEditDate?.getTime();return null==r||(e*=1e3,Date.now()-r<e)}async function V(t,e,n){if(null==e)return null;const o=[],{objectIdField:a}=t;if(e.forEach((t=>{let e=null;if("attributes"in t){const{attributes:r}=t;e={globalId:r[n],objectId:null!=r[a]&&-1!==r[a]?r[a]:null}}else e={globalId:t.globalId,objectId:null!=t.objectId&&-1!==t.objectId?t.objectId:null};null!=e.globalId&&(null!=e.objectId&&-1!==e.objectId||o.push(e.globalId))})),0===o.length)return null;const s=t.createQuery();s.where=o.map((t=>`${n}='${t}'`)).join(" OR "),s.returnGeometry=!1,s.outFields=[a,n],s.cacheHint=!1;const u=await (0,asyncUtils/* resultOrAbort */.DZ)(r(t,s));if(!u.ok)return null;const c=new Map,l=u.value.features;for(const r of l){const t=r.attributes[n],e=r.attributes[a];null!=t&&null!=e&&-1!==e&&c.set(t,e)}return c}


/***/ }),

/***/ 77567:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(539);
/* harmony import */ var _Field_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24738);
/* harmony import */ var _FieldsIndex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79005);
/* harmony import */ var _fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42453);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function s(){return{fields:{type:[_Field_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A],value:null,set:function(i){if(i&&(0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("big-integer-warning-enabled")){const t=i.filter((e=>"big-integer"===e.type||"oid"===e.type&&(e.length||0)>=8));if(t.length){const i=t.map((e=>`'${e.name}'`)).join(", ");_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getLogger(this).warn("#fields",`Layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}') references big-integer field(s): ${i}, support for which is experimental. Only integers less than ${Number.MAX_SAFE_INTEGER} (Number.MAX_SAFE_INTEGER) are supported.`)}}this._set("fields",i)}},fieldsIndex:{readOnly:!0,get(){return _FieldsIndex_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.fromLayer(this)}},outFields:{type:[String],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields")},get:function(){const i=this._userOutFields;if(!i?.length)return null;if(i.includes("*"))return["*"];if(!this.fields)return i;for(const t of i){const r=this.fieldsIndex?.has(t);r||_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getLogger("esri.layers.support.fieldProperties").error("field-attributes-layer:invalid-field",`Invalid field ${t} found in outFields`,{layer:this,outFields:i})}return (0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .fixFields */ .DB)(this.fieldsIndex,i)}}}}


/***/ }),

/***/ 93797:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16123);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const t=[];function e(e,r){if((0,_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_0__/* .isHostedAgolService */ .Wo)(e.url??""))return!0;const{wkid:o}=r;for(const d of t){if((e.version??0)>=d[0])return!0;if("function"==typeof d[1]&&(d[1]=d[1]()),d[1].has(o))return!1}return!0}t.push([10.91,()=>{const d=new Set([9709,9716,9741,9761,9766]);for(let t=9712;t<=9713;t++)d.add(t);for(let t=9748;t<=9749;t++)d.add(t);for(let t=20904;t<=20932;t++)d.add(t);for(let t=21004;t<=21032;t++)d.add(t);for(let t=21207;t<=21264;t++)d.add(t);for(let t=21307;t<=21364;t++)d.add(t);for(let t=23301;t<=23333;t++)d.add(t);for(let t=102759;t<=102760;t++)d.add(t);for(let t=102934;t<=102955;t++)d.add(t);return d}]),t.push([10.9,()=>{const d=new Set([9300,9354,9364,9367,9373,9377,9387,9456,9473,9498,9678,9680,29874,103599,103872,104028]);for(let t=9356;t<=9360;t++)d.add(t);for(let t=9404;t<=9407;t++)d.add(t);for(let t=9476;t<=9482;t++)d.add(t);for(let t=9487;t<=9494;t++)d.add(t);for(let t=9697;t<=9699;t++)d.add(t);return d}]),t.push([10.81,()=>{const d=new Set([9265,9333,103598,103699]);for(let t=9248;t<=9254;t++)d.add(t);for(let t=9271;t<=9273;t++)d.add(t);for(let t=9284;t<=9285;t++)d.add(t);for(let t=21453;t<=21463;t++)d.add(t);return d}]),t.push([10.8,()=>{const d=new Set([8088,8395,8428,8433,8531,8687,8692,8694,8699,8900,9003,9006,9009,9012,9017,9191]);for(let t=8035;t<=8036;t++)d.add(t);for(let t=8455;t<=8456;t++)d.add(t);for(let t=8518;t<=8529;t++)d.add(t);for(let t=8533;t<=8536;t++)d.add(t);for(let t=8538;t<=8540;t++)d.add(t);for(let t=8677;t<=8679;t++)d.add(t);for(let t=8902;t<=8903;t++)d.add(t);for(let t=8907;t<=8910;t++)d.add(t);for(let t=8949;t<=8951;t++)d.add(t);for(let t=8972;t<=8987;t++)d.add(t);for(let t=9039;t<=9040;t++)d.add(t);for(let t=9068;t<=9069;t++)d.add(t);for(let t=9140;t<=9141;t++)d.add(t);for(let t=9148;t<=9150;t++)d.add(t);for(let t=9153;t<=9159;t++)d.add(t);for(let t=9205;t<=9218;t++)d.add(t);for(let t=9221;t<=9222;t++)d.add(t);for(let t=54098;t<=54101;t++)d.add(t);return d}]),t.push([10.71,()=>{const d=new Set([6316]);for(let t=8351;t<=8353;t++)d.add(t);for(let t=9294;t<=9297;t++)d.add(t);for(let t=22619;t<=22621;t++)d.add(t);for(let t=103586;t<=103594;t++)d.add(t);return d}]),t.push([10.7,()=>{const d=new Set([8387,8391,8427,8545,8682,8685,8818,31370,104022,104024,104975]);for(let t=8065;t<=8068;t++)d.add(t);for(let t=8082;t<=8083;t++)d.add(t);for(let t=8379;t<=8385;t++)d.add(t);for(let t=8836;t<=8840;t++)d.add(t);for(let t=8857;t<=8860;t++)d.add(t);for(let t=53035;t<=53037;t++)d.add(t);for(let t=54090;t<=54091;t++)d.add(t);for(let t=102498;t<=102499;t++)d.add(t);return d}]),t.push([10.61,()=>new Set([102497])]),t.push([10.6,()=>{const d=new Set([7803,7805,7887,8086,8232,8237,8240,8246,8249,8252,8255,9019,9391]);for(let t=7755;t<=7787;t++)d.add(t);for(let t=7791;t<=7795;t++)d.add(t);for(let t=7799;t<=7801;t++)d.add(t);for(let t=7825;t<=7831;t++)d.add(t);for(let t=7877;t<=7878;t++)d.add(t);for(let t=7882;t<=7883;t++)d.add(t);for(let t=7991;t<=7992;t++)d.add(t);for(let t=8042;t<=8043;t++)d.add(t);for(let t=8058;t<=8059;t++)d.add(t);for(let t=8311;t<=8348;t++)d.add(t);for(let t=9060;t<=9067;t++)d.add(t);for(let t=102562;t<=102568;t++)d.add(t);for(let t=102799;t<=102900;t++)d.add(t);return d}]);


/***/ }),

/***/ 55134:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59851);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const e=(0,_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__/* .strict */ .O)()({esriTimeUnitsMilliseconds:"milliseconds",esriTimeUnitsSeconds:"seconds",esriTimeUnitsMinutes:"minutes",esriTimeUnitsHours:"hours",esriTimeUnitsDays:"days",esriTimeUnitsWeeks:"weeks",esriTimeUnitsMonths:"months",esriTimeUnitsYears:"years",esriTimeUnitsDecades:"decades",esriTimeUnitsCenturies:"centuries",esriTimeUnitsUnknown:void 0});


/***/ }),

/***/ 21484:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12690);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40189);
/* harmony import */ var _core_Warning_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68659);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function t(t,i,n){const s=t&&t.getAtOrigin&&t.getAtOrigin("renderer",i.origin);if(s&&"unique-value"===s.type&&s.styleOrigin){const a=await (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .result */ .Ke)(s.populateFromStyle());if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .throwIfAborted */ .Te)(n),!1===a.ok){const e=a.error;i?.messages&&i.messages.push(new _core_Warning_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A("renderer:style-reference",`Failed to create unique value renderer from style reference: ${e.message}`,{error:e,context:i})),t.clear("renderer",i?.origin)}}}


/***/ }),

/***/ 9669:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92976);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87926);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function t(n,e,t){if(null==n.hasM||n.hasZ)for(const i of e)for(const n of i)n.length>2&&(n[2]*=t)}function i(e,t,i){if(!e&&!t||!i)return;const s=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getMetersPerVerticalUnitForSR */ .G9)(i);o(e,i,s),o(t,i,s)}function o(n,e,t){if(n)for(const i of n)s(i.geometry,e,t)}function s(i,o,s){if(!i?.spatialReference||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .equals */ .aI)(i.spatialReference,o))return;const f=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getMetersPerVerticalUnitForSR */ .G9)(i.spatialReference)/s;if(1!==f)if("x"in i)null!=i.z&&(i.z*=f);else if("rings"in i)t(i,i.rings,f);else if("paths"in i)t(i,i.paths,f);else if("points"in i&&(null==i.hasM||i.hasZ))for(const n of i.points)n.length>2&&(n[2]*=f)}


/***/ }),

/***/ 97724:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17639);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19251);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73446);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77542);
/* harmony import */ var _layers_support_source_DataLayerSource_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44360);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(78983);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var u;let c=u=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY{constructor(t){super(t),this.cacheHint=void 0,this.dynamicDataSource=void 0,this.gdbVersion=null,this.geometryPrecision=void 0,this.historicMoment=null,this.maxAllowableOffset=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.relationshipId=void 0,this.start=void 0,this.num=void 0,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.where=null}_writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime()}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10,this.start>0&&null==this.where&&(e.definitionExpression="1=1")}clone(){return new u((0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__/* .clone */ .o8)({cacheHint:this.cacheHint,dynamicDataSource:this.dynamicDataSource,gdbVersion:this.gdbVersion,geometryPrecision:this.geometryPrecision,historicMoment:this.historicMoment&&new Date(this.historicMoment.getTime()),maxAllowableOffset:this.maxAllowableOffset,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,relationshipId:this.relationshipId,start:this.start,num:this.num,returnGeometry:this.returnGeometry,where:this.where,returnZ:this.returnZ,returnM:this.returnM}))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Boolean,json:{write:!0}})],c.prototype,"cacheHint",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:_layers_support_source_DataLayerSource_js__WEBPACK_IMPORTED_MODULE_8__/* .DataLayerSource */ .L,json:{write:!0}})],c.prototype,"dynamicDataSource",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:!0}})],c.prototype,"gdbVersion",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Number,json:{write:!0}})],c.prototype,"geometryPrecision",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Date})],c.prototype,"historicMoment",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__/* .writer */ .K)("historicMoment")],c.prototype,"_writeHistoricMoment",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Number,json:{write:!0}})],c.prototype,"maxAllowableOffset",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:[Number],json:{write:!0}})],c.prototype,"objectIds",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:[String],json:{write:!0}})],c.prototype,"orderByFields",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:[String],json:{write:!0}})],c.prototype,"outFields",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,json:{read:{source:"outSR"},write:{target:"outSR"}}})],c.prototype,"outSpatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:!0}})],c.prototype,"relationshipId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Number,json:{read:{source:"resultOffset"}}})],c.prototype,"start",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__/* .writer */ .K)("start"),(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__/* .writer */ .K)("num")],c.prototype,"writeStart",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Number,json:{read:{source:"resultRecordCount"}}})],c.prototype,"num",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:!0}})],c.prototype,"returnGeometry",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],c.prototype,"returnM",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],c.prototype,"returnZ",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],c.prototype,"where",void 0),c=u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.rest.support.RelationshipQuery")],c),c.from=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__/* .ensureType */ .dp)(c);const d=c;


/***/ }),

/***/ 56051:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ S)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry.js
var geometry = __webpack_require__(17639);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/TimeExtent.js
var TimeExtent = __webpack_require__(19790);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/jsonUtils.js
var jsonUtils = __webpack_require__(1171);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
;// ../node_modules/@arcgis/core/rest/support/TopFilter.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var e;let p=e=class extends JSONSupport/* JSONSupport */.oY{constructor(o){super(o),this.groupByFields=void 0,this.topCount=void 0,this.orderByFields=void 0}clone(){return new e({groupByFields:this.groupByFields,topCount:this.topCount,orderByFields:this.orderByFields})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],json:{write:!0}})],p.prototype,"groupByFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],p.prototype,"topCount",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],json:{write:!0}})],p.prototype,"orderByFields",void 0),p=e=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.rest.support.TopFilter")],p);const i=p;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
;// ../node_modules/@arcgis/core/rest/support/TopFeaturesQuery.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var y;const m=new jsonMap/* JSONMap */.J({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),h=new jsonMap/* JSONMap */.J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let j=y=class extends JSONSupport/* JSONSupport */.oY{constructor(e){super(e),this.cacheHint=void 0,this.distance=void 0,this.geometry=null,this.geometryPrecision=void 0,this.maxAllowableOffset=void 0,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.resultType=null,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.start=void 0,this.spatialRelationship="intersects",this.timeExtent=null,this.topFilter=void 0,this.units=null,this.where="1=1"}writeStart(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10}clone(){return new y((0,lang/* clone */.o8)({cacheHint:this.cacheHint,distance:this.distance,geometry:this.geometry,geometryPrecision:this.geometryPrecision,maxAllowableOffset:this.maxAllowableOffset,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,resultType:this.resultType,returnGeometry:this.returnGeometry,returnZ:this.returnZ,returnM:this.returnM,start:this.start,spatialRelationship:this.spatialRelationship,timeExtent:this.timeExtent,topFilter:this.topFilter,units:this.units,where:this.where}))}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],j.prototype,"cacheHint",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:{overridePolicy:e=>({enabled:e>0})}}})],j.prototype,"distance",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:geometry/* geometryTypes */.yR,json:{read:jsonUtils/* fromJSON */.rS,write:!0}})],j.prototype,"geometry",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],j.prototype,"geometryPrecision",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],j.prototype,"maxAllowableOffset",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{read:{source:"resultRecordCount"}}})],j.prototype,"num",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],j.prototype,"objectIds",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],json:{write:!0}})],j.prototype,"orderByFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],json:{write:!0}})],j.prototype,"outFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SpatialReference/* default */.A,json:{read:{source:"outSR"},write:{target:"outSR"}}})],j.prototype,"outSpatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],j.prototype,"resultType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],j.prototype,"returnGeometry",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],j.prototype,"returnM",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],j.prototype,"returnZ",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{read:{source:"resultOffset"}}})],j.prototype,"start",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("start"),(0,writer/* writer */.K)("num")],j.prototype,"writeStart",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:{source:"spatialRel",reader:m.read},write:{target:"spatialRel",writer:m.write}}})],j.prototype,"spatialRelationship",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:TimeExtent/* default */.A,json:{write:!0}})],j.prototype,"timeExtent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:i,json:{write:!0}})],j.prototype,"topFilter",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:h.read,write:{writer:h.write,overridePolicy(e){return{enabled:null!=e&&null!=this.distance&&this.distance>0}}}}})],j.prototype,"units",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],j.prototype,"where",void 0),j=y=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.rest.support.TopFeaturesQuery")],j),j.from=(0,ensureType/* ensureType */.dp)(j);const S=j;


/***/ }),

/***/ 96023:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TA: () => (/* binding */ r),
/* harmony export */   Z3: () => (/* binding */ t),
/* harmony export */   ZJ: () => (/* binding */ s),
/* harmony export */   w5: () => (/* binding */ a)
/* harmony export */ });
/* unused harmony exports versionCollection, versionCollectionCount */
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33880);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const r=(0,_core_uuid_js__WEBPACK_IMPORTED_MODULE_0__/* .generateLowercaseBracedUUID */ .vD)(),t=new Map,n=new Map,o=new Map;async function s(e,t,o=!1){if(!e||!t)return!0;const s=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),a=n.get(s)?.entries();if(a)for(const[n,i]of a)if(i.name===t){const e=!i.stack?.hasForwardEdits();if(!e&&o){const[{deleteForwardEdits:e},{default:t}]=await Promise.all([__webpack_require__.e(/* import() */ 3093).then(__webpack_require__.bind(__webpack_require__, 43093)),__webpack_require__.e(/* import() */ 741).then(__webpack_require__.bind(__webpack_require__, 80741))]);return e(s,n,new t({sessionId:r,moment:i.moment}))}return e}return!0}function a(e,r){if(!e)return!1;const t=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),o=n.get(t)?.entries();if(o)for(const[n,s]of o)if(s.name===r){return"edit"===s.lockType}return!1}


/***/ }),

/***/ 85205:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  zf: () => (/* binding */ v),
  ur: () => (/* binding */ c),
  Np: () => (/* binding */ d),
  tc: () => (/* binding */ f),
  kZ: () => (/* binding */ b)
});

// UNUSED EXPORTS: hasClusterCountVV

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/MD5.js
var MD5 = __webpack_require__(69075);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/AggregateField.js
var AggregateField = __webpack_require__(94301);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/ExpressionInfo.js
var ExpressionInfo = __webpack_require__(54746);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/AuthoringInfo.js + 3 modules
var AuthoringInfo = __webpack_require__(20699);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/visualVariables/SizeVariable.js + 1 modules
var SizeVariable = __webpack_require__(14977);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/visualVariables/support/SizeStop.js
var SizeStop = __webpack_require__(68745);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/visualVariables/support/sizeVariableUtils.js
var sizeVariableUtils = __webpack_require__(99412);
;// ../node_modules/@arcgis/core/views/2d/engine/LevelDependentSizeVariable.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var l;let n=l=class extends SizeVariable/* default */.A{writeLevels(e,s,i){for(const t in e){const e=this.levels[t];return void(s.stops=e)}}clone(){return new l({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:(0,sizeVariableUtils/* isSizeVariable */.of)(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:(0,sizeVariableUtils/* isSizeVariable */.of)(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops?.map((e=>e.clone())),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions?.clone(),levels:(0,lang/* clone */.o8)(this.levels)})}};(0,tslib_es6._)([(0,property/* property */.MZ)()],n.prototype,"levels",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("levels")],n.prototype,"writeLevels",null),n=l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.2d.engine.LevelDependentSizeVariable")],n);

;// ../node_modules/@arcgis/core/views/2d/layers/support/clusterUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const o=Logger/* default */.A.getLogger("esri.views.2d.layers.support.clusterUtils");has/* default */.A.add("esri-cluster-arcade-enabled",!0);const p=(0,has/* default */.A)("esri-cluster-arcade-enabled"),c=(e,r,s,i,n)=>{const t=r.clone();if(!b(t))return t;if(t.authoringInfo||(t.authoringInfo=new AuthoringInfo/* default */.A),t.authoringInfo.isAutoGenerated=!0,"visualVariables"in t){const r=(t.visualVariables||[]).filter((e=>"$view.scale"!==e.valueExpression)),a=d(r);r.forEach((r=>{"rotation"===r.type?r.field?r.field=E(e,r.field,"avg_angle","number"):r.valueExpression&&(r.field=x(e,r.valueExpression,"avg_angle","number"),r.valueExpression=null):r.normalizationField?(r.field=E(e,r.field,"avg_norm","number",r.normalizationField),r.normalizationField=null):r.field?r.field=E(e,r.field,"avg","number"):r.valueExpression&&(r.field=x(e,r.valueExpression,"avg","number"),r.valueExpression=null)})),null==a&&!m(r)&&n&&(r.push(v(s,i)),t.dynamicClusterSize=!0),t.visualVariables=r}switch(t.type){case"simple":break;case"pie-chart":for(const r of t.attributes)r.field?r.field=E(e,r.field,"sum","number"):r.valueExpression&&(r.field=x(e,r.valueExpression,"sum","number"),r.valueExpression=null);break;case"unique-value":t.field?t.field=E(e,t.field,"mode","string"):t.valueExpression&&(t.field=x(e,t.valueExpression,"mode","string"),t.valueExpression=null);break;case"class-breaks":t.normalizationField?(t.field=E(e,t.field,"avg_norm","number",t.normalizationField),t.normalizationField=null):t.field?t.field=E(e,t.field,"avg","number"):t.valueExpression&&(t.field=x(e,t.valueExpression,"avg","number"),t.valueExpression=null)}return t},d=e=>{for(const r of e)if("size"===r.type)return r;return null};function f(e,r,s){const i=e.clone();let n=!1;if("visualVariables"in i){const e=(i.visualVariables||[]).filter((e=>"$view.scale"!==e.valueExpression));null==d(e)&&(i.visualVariables||(i.visualVariables=[]),i.visualVariables.push(v(r,s)),i.dynamicClusterSize=!0,n=!0)}return{renderer:i,didInject:n}}const m=e=>{for(const r of e)if("cluster_count"===r.field)return!0;return!1},v=(e,r)=>{const s=[new SizeStop/* default */.A({value:0,size:0}),new SizeStop/* default */.A({value:1})];if(null==r)return new SizeVariable/* default */.A({field:"cluster_count",stops:[...s,new SizeStop/* default */.A({value:2,size:0})]});const i=Object.keys(r).reduce(((i,n)=>({...i,[n]:[...s,new SizeStop/* default */.A({value:Math.max(2,r[n].minValue),size:e.clusterMinSize}),new SizeStop/* default */.A({value:Math.max(3,r[n].maxValue),size:e.clusterMaxSize})]})),{});return new n({field:"cluster_count",levels:i})},b=r=>{const s=s=>o.error(new Error/* default */.A("Unsupported-renderer",s,{renderer:r}));if(!r)return!1;switch(r.type){case"unique-value":if(r.field2||r.field3)return s("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1;break;case"class-breaks":if(r.normalizationField){const e=r.normalizationType;if("field"!==e)return s(`FeatureReductionCluster does not support a normalizationType of ${e}`),!1}break;case"simple":case"pie-chart":break;default:return s(`FeatureReductionCluster does not support renderers of type ${r.type}`),!1}if(!p){if("valueExpression"in r&&r.valueExpression)return s("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in r&&r.visualVariables||[]).some((e=>!(!("valueExpression"in e)||!e.valueExpression))))return s("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0};function g(e,r,i){switch(e){case"sum":return`cluster_sum_${r}`;case"avg":case"avg_angle":return`cluster_avg_${r}`;case"mode":return`cluster_type_${r}`;case"avg_norm":{const e=i,n="field",a=r.toLowerCase()+",norm:"+n+","+e.toLowerCase();return"cluster_avg_"+(0,MD5/* createMD5Hash */.d)(a)}}}function x(e,r,a,t){const l=(0,MD5/* createMD5Hash */.d)(r),u="mode"===a?`cluster_type_${l}`:"sum"===a?`cluster_sum_${l}`:`cluster_avg_${l}`;return e.some((e=>e.name===u))||e.push(new AggregateField/* default */.A({name:u,isAutoGenerated:!0,onStatisticExpression:new ExpressionInfo/* default */.A({expression:r,returnType:t}),statisticType:a})),u}function E(e,r,s,a,t){if("cluster_count"===r||e.some((e=>e.name===r)))return r;const l=g(s,r,t);return e.some((e=>e.name===l))||("avg_norm"===s?e.push(new AggregateField/* default */.A({name:l,isAutoGenerated:!0,onStatisticExpression:new ExpressionInfo/* default */.A({expression:`$feature.${r} / $feature.${t}`,returnType:a}),statisticType:"avg"})):e.push(new AggregateField/* default */.A({name:l,isAutoGenerated:!0,onStatisticField:r,statisticType:s}))),l}


/***/ }),

/***/ 15954:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ A)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var A;!function(A){A[A.SAVE=0]="SAVE",A[A.SAVE_AS=1]="SAVE_AS"}(A||(A={}));


/***/ })

};
;