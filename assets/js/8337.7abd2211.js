"use strict";
exports.id = 8337;
exports.ids = [8337];
exports.modules = {

/***/ 60861:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ U),
/* harmony export */   IB: () => (/* binding */ i),
/* harmony export */   Iy: () => (/* binding */ T),
/* harmony export */   N2: () => (/* binding */ B),
/* harmony export */   RH: () => (/* binding */ H),
/* harmony export */   ZD: () => (/* binding */ C)
/* harmony export */ });
/* unused harmony exports BrightnessThreshold, colorEquals, colorVectorEquals, colorVectorToColorAndOpacity, darken, desaturate, getColorLuminance, getColorTheme, getContrast, multiplyOpacity, multiplyOpacityToUnitRGBA, unitRGBAFromColor, validateColor, validateColorAndOpacity */
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93814);
/* harmony import */ var _arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3223);
/* harmony import */ var _lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15565);
/* harmony import */ var _mathUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4506);
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74772);
/* harmony import */ var _libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76982);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function i(n){return"r"in n&&"g"in n&&"b"in n}function a(n){return"h"in n&&"s"in n&&"v"in n}function s(n){return"l"in n&&"a"in n&&"b"in n}function f(n){return"l"in n&&"c"in n&&"h"in n}function h(n){return"x"in n&&"y"in n&&"z"in n}const l=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],g=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function b(n,t){const r=[];let o,e;if(n[0].length!==t.length)throw new Error("dimensions do not match");const u=n.length,c=n[0].length;let i=0;for(o=0;o<u;o++){for(i=0,e=0;e<c;e++)i+=n[o][e]*t[e];r.push(i)}return r}function m(n){const t=[n.r/255,n.g/255,n.b/255].map((n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4)),r=b(l,t);return{x:100*r[0],y:100*r[1],z:100*r[2]}}function M(n){const t=b(g,[n.x/100,n.y/100,n.z/100]).map((n=>{const t=n<=.0031308?12.92*n:1.055*n**(1/2.4)-.055;return Math.min(1,Math.max(t,0))}));return{r:Math.round(255*t[0]),g:Math.round(255*t[1]),b:Math.round(255*t[2])}}function d(n){const t=[n.x/95.047,n.y/100,n.z/108.883].map((n=>n>(6/29)**3?n**(1/3):1/3*(29/6)**2*n+4/29));return{l:116*t[1]-16,a:500*(t[0]-t[1]),b:200*(t[1]-t[2])}}function p(n){const t=n.l,r=[(t+16)/116+n.a/500,(t+16)/116,(t+16)/116-n.b/200].map((n=>n>6/29?n**3:3*(6/29)**2*(n-4/29)));return{x:95.047*r[0],y:100*r[1],z:108.883*r[2]}}function w(n){const t=n.l,r=n.a,o=n.b,e=Math.sqrt(r*r+o*o);let u=Math.atan2(o,r);return u=u>0?u:u+2*Math.PI,{l:t,c:e,h:u}}function x(n){const t=n.l,r=n.c,o=n.h;return{l:t,a:r*Math.cos(o),b:r*Math.sin(o)}}function k(n){return d(m(n))}function y(n){return M(p(n))}function j(n){return w(d(m(n)))}function v(n){return M(p(x(n)))}function z(n){const t=n.r,r=n.g,o=n.b,e=Math.max(t,r,o),u=e-Math.min(t,r,o);let c=e,i=0===u?0:e===t?(r-o)/u%6:e===r?(o-t)/u+2:(t-r)/u+4,a=0===u?0:u/c;return i<0&&(i+=6),i*=60,a*=100,c*=100/255,{h:i,s:a,v:c}}function A(n){const t=(n.h+360)%360/60,r=n.s/100,o=n.v/100*255,e=o*r,u=e*(1-Math.abs(t%2-1));let c;switch(Math.floor(t)){case 0:c={r:e,g:u,b:0};break;case 1:c={r:u,g:e,b:0};break;case 2:c={r:0,g:e,b:u};break;case 3:c={r:0,g:u,b:e};break;case 4:c={r:u,g:0,b:e};break;case 5:case 6:c={r:e,g:0,b:u};break;default:c={r:0,g:0,b:0}}return c.r=Math.round(c.r+o-e),c.g=Math.round(c.g+o-e),c.b=Math.round(c.b+o-e),c}function U(n){return i(n)?n:f(n)?v(n):s(n)?y(n):h(n)?M(n):a(n)?A(n):n}function B(n){if(a(n))return n;return z(U(n))}function C(n){return s(n)?n:k(U(n))}function H(n){return f(n)?n:j(U(n))}function q(n){return G(n).isBright?"light":"dark"}function G(t){let{r,g:o,b:e,a:u}=t;return u<1&&(r=Math.round(u*r+255*(1-u)),o=Math.round(u*o+255*(1-u)),e=Math.round(u*e+255*(1-u))),new n({r,g:o,b:e})}function L(n,t){const{r,g:o,b:e}=t?.ignoreAlpha?n:G(n);return.2126*r+.7152*o+.0722*e}var R;function E(t,r=R.High){return L(t,{ignoreAlpha:!0})>r?new n([0,0,0,t.a]):new n([255,255,255,t.a])}function I(n,t){const r=C(n);r.l*=1-t;const o=U(r),e=n.clone();return e.setColor(o),e.a=n.a,e}function P(n,t){const r=n.clone();return r.a*=t,r}function D(n,t){const r=B(n);r.s*=t;const o=U(r),e=n.clone();return e.setColor(o),e.a=n.a,e}function F(t){return n.toUnitRGBA(t)}function J(n,t){return n===t||null!=n&&n.equals(t)}function K(n,t){return n===t||null!=n&&null!=t&&u(n,t)}function N(n){return c(n[0],n[1],n[2],n.length>3?n[3]:1)}function O(n){return n[0]??=0,n[1]??=0,n[2]??=0,n}function Q(n){return n.length=4,O(n),n[3]??=1,e(n[3],0,1),n}function S(t,r){const o=n.toUnitRGBA(t);return o[3]*=r,o}function T(r,e,u={}){if(0===r.length||e<=0)return[];if(1===(r=r.map((t=>"string"==typeof t?new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(t):t))).length||1===e){const n=[],t=r[0];for(let r=0;r<e;r++)n.push(t.clone());return n}if(u.shuffle&&(r=(0,_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .shuffle */ .k4)((0,_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(r),u.seed)),r.length>=e){const n=[],t=(r.length-1)/(e-1);for(let o=0;o<e;o++){const e=Math.round(o*t);n.push(r[e].clone())}return n}return V(r,e,u)}function V(n,r,o={}){const e=[],u=n.length-1,c=Math.ceil((r-n.length)/u);n:for(let t=0;t<u;t++){const u=n[t],i=n[t+1];for(let t=1;t<=c;t++){const a=t/(c+1);if(e.push(X(u,i,a,o)),e.length+n.length===r)break n}}return[...n.map((n=>n.clone())),...(0,_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .shuffle */ .k4)(e,o.seed??1)]}!function(n){n[n.Low=160]="Low",n[n.High=225]="High"}(R||(R={}));const W=(n,t)=>{const r=Math.floor(10*t())-5;return Math.min(255,Math.max(0,n+r))};function X(t,o,e,u={}){const c=t.r,i=t.g,a=t.b,s=o.r,f=o.g,h=o.b,l=Math.round(c+(s-c)*e),g=Math.round(i+(f-i)*e),b=Math.round(a+(h-a)*e);if(!u.offset)return new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A([l,g,b]);const m=(0,_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .getRandomNumberGenerator */ .Mo)(u.seed);return new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A([W(l,m),W(g,m),W(b,m)])}


/***/ }),

/***/ 52686:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ a),
/* harmony export */   g: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3132);
/* harmony import */ var _Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54192);
/* harmony import */ var _Loadable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11965);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function t(o,l){return await o.load(),a(o,l)}async function a(t,a){const s=[],c=(...o)=>{for(const l of o)null!=l&&(Array.isArray(l)?c(...l):_Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.isCollection(l)?l.forEach((o=>c(o))):_Loadable_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.isLoadable(l)&&s.push(l))};a(c);let f=null;if(await (0,_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .map */ .Tj)(s,(async o=>{const n=await (0,_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .result */ .Ke)(i(o)?o.loadAll():o.load());!1!==n.ok||f||(f=n)})),f)throw f.error;return t}function i(o){return"loadAll"in o&&"function"==typeof o.loadAll}


/***/ }),

/***/ 70345:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ V)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(22395);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(15565);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/SetUtils.js
var SetUtils = __webpack_require__(98592);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(77380);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(25376);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(48524);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
;// ./node_modules/@arcgis/core/form/ExpressionInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var s;let i=s=class extends JSONSupport/* default */.A{constructor(e){super(e),this.expression=null,this.name=null,this.returnType="boolean",this.title=null}clone(){return new s({name:this.name,title:this.title,expression:this.expression,returnType:this.returnType})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],i.prototype,"expression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],i.prototype,"name",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["boolean","date","number","string"],json:{write:!0}})],i.prototype,"returnType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],i.prototype,"title",void 0),i=s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.ExpressionInfo")],i);const p=i;

;// ./node_modules/@arcgis/core/form/elements/Element.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let e=class extends JSONSupport/* default */.A{constructor(t){super(t),this.description=null,this.label=null,this.type=null,this.visibilityExpression=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],e.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],e.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],e.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],e.prototype,"visibilityExpression",void 0),e=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.Element")],e);const Element_i=e;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(14755);
;// ./node_modules/@arcgis/core/form/elements/inputs/attachments/Input.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let Input_p=class extends(Clonable/* default */.A.ClonableMixin(JSONSupport/* default */.A)){constructor(o){super(o),this.type=null}};(0,tslib_es6._)([(0,property/* property */.MZ)()],Input_p.prototype,"type",void 0),Input_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.attachments.Input")],Input_p);const c=Input_p;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(8636);
;// ./node_modules/@arcgis/core/form/elements/inputs/attachments/support/utils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const a=["any","capture","upload"];

;// ./node_modules/@arcgis/core/form/elements/inputs/attachments/AudioInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let AudioInput_p=class extends c{constructor(o){super(o),this.type="audio",this.inputMethod="any",this.maxDuration=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["audio"],readOnly:!0,json:{write:!0}})],AudioInput_p.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:a,json:{write:!0}})],AudioInput_p.prototype,"inputMethod",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],AudioInput_p.prototype,"maxDuration",void 0),AudioInput_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.attachments.AudioInput")],AudioInput_p);const AudioInput_i=AudioInput_p;

;// ./node_modules/@arcgis/core/form/elements/inputs/attachments/DocumentInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let DocumentInput_s=class extends c{constructor(o){super(o),this.type="document",this.maxFileSize=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["document"],readOnly:!0,json:{write:!0}})],DocumentInput_s.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],DocumentInput_s.prototype,"maxFileSize",void 0),DocumentInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.attachments.DocumentInput")],DocumentInput_s);const DocumentInput_p=DocumentInput_s;

;// ./node_modules/@arcgis/core/form/elements/inputs/attachments/ImageInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let ImageInput_p=class extends c{constructor(t){super(t),this.type="image",this.inputMethod="any",this.maxImageSize=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["image"],readOnly:!0,json:{write:!0}})],ImageInput_p.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:a,json:{write:!0}})],ImageInput_p.prototype,"inputMethod",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],ImageInput_p.prototype,"maxImageSize",void 0),ImageInput_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.attachments.ImageInput")],ImageInput_p);const ImageInput_i=ImageInput_p;

;// ./node_modules/@arcgis/core/form/elements/inputs/attachments/SignatureInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let SignatureInput_p=class extends c{constructor(t){super(t),this.type="signature",this.inputMethod="any"}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["signature"],readOnly:!0,json:{write:!0}})],SignatureInput_p.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:a,json:{write:!0}})],SignatureInput_p.prototype,"inputMethod",void 0),SignatureInput_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.attachments.SignatureInput")],SignatureInput_p);const SignatureInput_i=SignatureInput_p;

;// ./node_modules/@arcgis/core/form/elements/inputs/attachments/VideoInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let VideoInput_p=class extends c{constructor(o){super(o),this.type="video",this.inputMethod="any",this.maxDuration=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["video"],readOnly:!0,json:{write:!0}})],VideoInput_p.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:a,json:{write:!0}})],VideoInput_p.prototype,"inputMethod",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],VideoInput_p.prototype,"maxDuration",void 0),VideoInput_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.attachments.VideoInput")],VideoInput_p);const VideoInput_i=VideoInput_p;

;// ./node_modules/@arcgis/core/form/elements/inputs/attachments/support/inputs.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function u(e){return{nestableTypes:{base:c,key:"type",typeMap:{audio:AudioInput_i,document:DocumentInput_p,image:ImageInput_i,signature:SignatureInput_i,video:VideoInput_i}},allTypes:{base:c,key:"type",typeMap:{attachment:e,audio:AudioInput_i,document:DocumentInput_p,image:ImageInput_i,signature:SignatureInput_i,video:VideoInput_i}}}}function inputs_s(t,p,n){return t?t.map((t=>(0,ensureType/* ensureOneOfType */.aq)(n?p.nestableTypes:p.allTypes,t))):null}function inputs_i(e,t,p){if(!e)return null;const n=p?t.nestableTypes.typeMap:t.allTypes.typeMap;return e.filter((e=>n[e.type])).map((e=>n[e.type].fromJSON(e)))}function m(e,t,p){if(!e)return null;const n=p?t.nestableTypes.typeMap:t.allTypes.typeMap;return e.filter((e=>n[e.type])).map((e=>e.toJSON()))}

;// ./node_modules/@arcgis/core/form/elements/inputs/attachments/AttachmentInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let AttachmentInput_m=class extends c{constructor(t){super(t),this.type="attachment",this.attachmentAssociationType="exact",this.inputTypes=null}castInputs(t){return inputs_s(t,y,!0)}readInputs(t,r){return inputs_i(r.inputTypes,y,!0)}writeInputs(t,r){r.inputTypes=m(t,y,!0)}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["attachment"],readOnly:!0,json:{write:!0}})],AttachmentInput_m.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["any","exact","exactOrNone"],json:{write:!0}})],AttachmentInput_m.prototype,"attachmentAssociationType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:{isRequired:!0}}})],AttachmentInput_m.prototype,"inputTypes",void 0),(0,tslib_es6._)([(0,cast/* cast */.w)("inputTypes")],AttachmentInput_m.prototype,"castInputs",null),(0,tslib_es6._)([(0,reader/* reader */.w)("inputTypes")],AttachmentInput_m.prototype,"readInputs",null),(0,tslib_es6._)([(0,writer/* writer */.K)("inputTypes")],AttachmentInput_m.prototype,"writeInputs",null),AttachmentInput_m=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.attachments.AttachmentInput")],AttachmentInput_m);const y=u(AttachmentInput_m),d=AttachmentInput_m;

;// ./node_modules/@arcgis/core/form/elements/AttachmentElement.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var r;const AttachmentElement_a=u(d);let AttachmentElement_p=r=class extends Element_i{constructor(t){super(t),this.allowUserRename=!0,this.attachmentKeyword=null,this.displayFilename=!1,this.editableExpression=null,this.filenameExpression="{attachmentKeyword}_{now}",this.input=null,this.maxAttachmentCount=null,this.minAttachmentCount=null,this.type="attachment",this.useOriginalFilename=!0}clone(){return new r({allowUserRename:this.allowUserRename,attachmentKeyword:this.attachmentKeyword,description:this.description,displayFilename:this.displayFilename,editableExpression:this.editableExpression,filenameExpression:this.filenameExpression,input:this.input?.clone(),label:this.label,maxAttachmentCount:this.maxAttachmentCount,minAttachmentCount:this.minAttachmentCount,useOriginalFilename:this.useOriginalFilename,visibilityExpression:this.visibilityExpression})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],AttachmentElement_p.prototype,"allowUserRename",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{isRequired:!0}}})],AttachmentElement_p.prototype,"attachmentKeyword",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],AttachmentElement_p.prototype,"displayFilename",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],AttachmentElement_p.prototype,"editableExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],AttachmentElement_p.prototype,"filenameExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:AttachmentElement_a.allTypes,json:{read:{source:"inputType"},write:{target:"inputType",isRequired:!0}}})],AttachmentElement_p.prototype,"input",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],AttachmentElement_p.prototype,"maxAttachmentCount",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],AttachmentElement_p.prototype,"minAttachmentCount",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["attachment"],readOnly:!0,json:{read:!1,write:!0}})],AttachmentElement_p.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],AttachmentElement_p.prototype,"useOriginalFilename",void 0),AttachmentElement_p=r=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.AttachmentElement")],AttachmentElement_p);const AttachmentElement_m=AttachmentElement_p;

;// ./node_modules/@arcgis/core/form/elements/inputs/Input.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let Input_e=class extends JSONSupport/* default */.A{constructor(o){super(o),this.type=null}};(0,tslib_es6._)([(0,property/* property */.MZ)()],Input_e.prototype,"type",void 0),Input_e=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.Input")],Input_e);const inputs_Input_p=Input_e;

;// ./node_modules/@arcgis/core/form/elements/inputs/TextInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let TextInput_s=class extends inputs_Input_p{constructor(o){super(o),this.maxLength=null,this.minLength=0}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],TextInput_s.prototype,"maxLength",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],TextInput_s.prototype,"minLength",void 0),TextInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.TextInput")],TextInput_s);const TextInput_p=TextInput_s;

;// ./node_modules/@arcgis/core/form/elements/inputs/BarcodeScannerInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var BarcodeScannerInput_s;let n=BarcodeScannerInput_s=class extends TextInput_p{constructor(r){super(r),this.type="barcode-scanner"}clone(){return new BarcodeScannerInput_s({maxLength:this.maxLength,minLength:this.minLength})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["barcode-scanner"],json:{read:!1,write:!0}})],n.prototype,"type",void 0),n=BarcodeScannerInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.BarcodeScannerInput")],n);const BarcodeScannerInput_c=n;

;// ./node_modules/@arcgis/core/form/elements/inputs/ComboBoxInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var ComboBoxInput_s;let ComboBoxInput_p=ComboBoxInput_s=class extends inputs_Input_p{constructor(o){super(o),this.noValueOptionLabel=null,this.showNoValueOption=!0,this.type="combo-box"}clone(){return new ComboBoxInput_s({showNoValueOption:this.showNoValueOption,noValueOptionLabel:this.noValueOptionLabel})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],ComboBoxInput_p.prototype,"noValueOptionLabel",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],ComboBoxInput_p.prototype,"showNoValueOption",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["combo-box"],json:{read:!1,write:!0}})],ComboBoxInput_p.prototype,"type",void 0),ComboBoxInput_p=ComboBoxInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.ComboBoxInput")],ComboBoxInput_p);const ComboBoxInput_i=ComboBoxInput_p;

;// ./node_modules/@arcgis/core/form/elements/inputs/DatePickerInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var DatePickerInput_p;function DatePickerInput_s(r){return null!=r?r:null}function DatePickerInput_a(r){return null!=r?r:null}let DatePickerInput_m=DatePickerInput_p=class extends inputs_Input_p{constructor(r){super(r),this.max=null,this.min=null,this.type="date-picker"}readMax(r,t){return DatePickerInput_s(t.max)}writeMax(r,t){t.max=DatePickerInput_a(r)}readMin(r,t){return DatePickerInput_s(t.min)}writeMin(r,t){t.min=DatePickerInput_a(r)}clone(){return new DatePickerInput_p({max:this.max,min:this.min})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],DatePickerInput_m.prototype,"max",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("max")],DatePickerInput_m.prototype,"readMax",null),(0,tslib_es6._)([(0,writer/* writer */.K)("max")],DatePickerInput_m.prototype,"writeMax",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],DatePickerInput_m.prototype,"min",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("min")],DatePickerInput_m.prototype,"readMin",null),(0,tslib_es6._)([(0,writer/* writer */.K)("min")],DatePickerInput_m.prototype,"writeMin",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["date-picker"],json:{read:!1,write:!0}})],DatePickerInput_m.prototype,"type",void 0),DatePickerInput_m=DatePickerInput_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.DatePickerInput")],DatePickerInput_m);const DatePickerInput_c=DatePickerInput_m;

;// ./node_modules/@arcgis/core/form/elements/inputs/DateTimeOffsetPickerInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var DateTimeOffsetPickerInput_s;function DateTimeOffsetPickerInput_p(t){return null!=t?t:null}function DateTimeOffsetPickerInput_m(t){return null!=t?t:null}let DateTimeOffsetPickerInput_u=DateTimeOffsetPickerInput_s=class extends inputs_Input_p{constructor(t){super(t),this.includeTimeOffset=!0,this.max=null,this.min=null,this.timeResolution="minutes",this.type="datetimeoffset-picker"}readMax(t,e){return DateTimeOffsetPickerInput_p(e.max)}writeMax(t,e){e.max=DateTimeOffsetPickerInput_m(t)}readMin(t,e){return DateTimeOffsetPickerInput_p(e.min)}writeMin(t,e){e.min=DateTimeOffsetPickerInput_m(t)}readTimeResolution(t,e){return DateTimeOffsetPickerInput_p(e.timeResolution)}writeTimeResolution(t,e){e.timeResolution=DateTimeOffsetPickerInput_m(t)}clone(){return new DateTimeOffsetPickerInput_s({includeTimeOffset:this.includeTimeOffset,max:this.max,min:this.min,timeResolution:this.timeResolution})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],DateTimeOffsetPickerInput_u.prototype,"includeTimeOffset",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],DateTimeOffsetPickerInput_u.prototype,"max",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("max")],DateTimeOffsetPickerInput_u.prototype,"readMax",null),(0,tslib_es6._)([(0,writer/* writer */.K)("max")],DateTimeOffsetPickerInput_u.prototype,"writeMax",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],DateTimeOffsetPickerInput_u.prototype,"min",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("min")],DateTimeOffsetPickerInput_u.prototype,"readMin",null),(0,tslib_es6._)([(0,writer/* writer */.K)("min")],DateTimeOffsetPickerInput_u.prototype,"writeMin",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],DateTimeOffsetPickerInput_u.prototype,"timeResolution",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("timeResolution")],DateTimeOffsetPickerInput_u.prototype,"readTimeResolution",null),(0,tslib_es6._)([(0,writer/* writer */.K)("timeResolution")],DateTimeOffsetPickerInput_u.prototype,"writeTimeResolution",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["datetimeoffset-picker"],json:{read:!1,write:!0}})],DateTimeOffsetPickerInput_u.prototype,"type",void 0),DateTimeOffsetPickerInput_u=DateTimeOffsetPickerInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.DateTimeOffsetPickerInput")],DateTimeOffsetPickerInput_u);const l=DateTimeOffsetPickerInput_u;

;// ./node_modules/@arcgis/core/form/elements/inputs/DateTimePickerInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var DateTimePickerInput_p;function DateTimePickerInput_s(e){return null!=e?new Date(e):null}function DateTimePickerInput_m(e){return e?e.getTime():null}let DateTimePickerInput_a=DateTimePickerInput_p=class extends inputs_Input_p{constructor(e){super(e),this.includeTime=!1,this.max=null,this.min=null,this.type="datetime-picker"}readMax(e,r){return DateTimePickerInput_s(r.max)}writeMax(e,r){r.max=DateTimePickerInput_m(e)}readMin(e,r){return DateTimePickerInput_s(r.min)}writeMin(e,r){r.min=DateTimePickerInput_m(e)}clone(){return new DateTimePickerInput_p({includeTime:this.includeTime,max:this.max,min:this.min})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],DateTimePickerInput_a.prototype,"includeTime",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Date,json:{type:Number,write:!0}})],DateTimePickerInput_a.prototype,"max",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("max")],DateTimePickerInput_a.prototype,"readMax",null),(0,tslib_es6._)([(0,writer/* writer */.K)("max")],DateTimePickerInput_a.prototype,"writeMax",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Date,json:{type:Number,write:!0}})],DateTimePickerInput_a.prototype,"min",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("min")],DateTimePickerInput_a.prototype,"readMin",null),(0,tslib_es6._)([(0,writer/* writer */.K)("min")],DateTimePickerInput_a.prototype,"writeMin",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["datetime-picker"],json:{read:!1,write:!0}})],DateTimePickerInput_a.prototype,"type",void 0),DateTimePickerInput_a=DateTimePickerInput_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.DateTimePickerInput")],DateTimePickerInput_a);const DateTimePickerInput_c=DateTimePickerInput_a;

;// ./node_modules/@arcgis/core/form/elements/inputs/RadioButtonsInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var RadioButtonsInput_s;let RadioButtonsInput_p=RadioButtonsInput_s=class extends inputs_Input_p{constructor(o){super(o),this.noValueOptionLabel=null,this.showNoValueOption=!0,this.type="radio-buttons"}clone(){return new RadioButtonsInput_s({noValueOptionLabel:this.noValueOptionLabel,showNoValueOption:this.showNoValueOption})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],RadioButtonsInput_p.prototype,"noValueOptionLabel",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],RadioButtonsInput_p.prototype,"showNoValueOption",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["radio-buttons"],json:{read:!1,write:!0}})],RadioButtonsInput_p.prototype,"type",void 0),RadioButtonsInput_p=RadioButtonsInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.RadioButtonsInput")],RadioButtonsInput_p);const RadioButtonsInput_i=RadioButtonsInput_p;

;// ./node_modules/@arcgis/core/form/elements/inputs/SwitchInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var SwitchInput_s;let SwitchInput_p=SwitchInput_s=class extends inputs_Input_p{constructor(o){super(o),this.offValue=null,this.onValue=null,this.type="switch"}clone(){return new SwitchInput_s({offValue:this.offValue,onValue:this.onValue})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String,Number],json:{write:!0}})],SwitchInput_p.prototype,"offValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String,Number],json:{write:!0}})],SwitchInput_p.prototype,"onValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["switch"],json:{read:!1,write:!0}})],SwitchInput_p.prototype,"type",void 0),SwitchInput_p=SwitchInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.SwitchInput")],SwitchInput_p);const SwitchInput_i=SwitchInput_p;

;// ./node_modules/@arcgis/core/form/elements/inputs/TextAreaInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var TextAreaInput_s;let TextAreaInput_p=TextAreaInput_s=class extends TextInput_p{constructor(t){super(t),this.type="text-area"}clone(){return new TextAreaInput_s({maxLength:this.maxLength,minLength:this.minLength})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["text-area"],json:{read:!1,write:!0}})],TextAreaInput_p.prototype,"type",void 0),TextAreaInput_p=TextAreaInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.TextAreaInput")],TextAreaInput_p);const TextAreaInput_a=TextAreaInput_p;

;// ./node_modules/@arcgis/core/form/elements/inputs/TextBoxInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var TextBoxInput_s;let TextBoxInput_p=TextBoxInput_s=class extends TextInput_p{constructor(t){super(t),this.type="text-box"}clone(){return new TextBoxInput_s({maxLength:this.maxLength,minLength:this.minLength})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["text-box"],json:{read:!1,write:!0}})],TextBoxInput_p.prototype,"type",void 0),TextBoxInput_p=TextBoxInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.TextBoxInput")],TextBoxInput_p);const TextBoxInput_n=TextBoxInput_p;

;// ./node_modules/@arcgis/core/form/elements/inputs/TimePickerInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var TimePickerInput_s;function TimePickerInput_p(t){return null!=t?t:null}function TimePickerInput_m(t){return null!=t?t:null}let TimePickerInput_u=TimePickerInput_s=class extends inputs_Input_p{constructor(t){super(t),this.max=null,this.min=null,this.timeResolution="minutes",this.type="time-picker"}readMax(t,e){return TimePickerInput_p(e.max)}writeMax(t,e){e.max=TimePickerInput_m(t)}readMin(t,e){return TimePickerInput_p(e.min)}writeMin(t,e){e.min=TimePickerInput_m(t)}readTimeResolution(t,e){return TimePickerInput_p(e.timeResolution)}writeTimeResolution(t,e){e.timeResolution=TimePickerInput_m(t)}clone(){return new TimePickerInput_s({max:this.max,min:this.min,timeResolution:this.timeResolution})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],TimePickerInput_u.prototype,"max",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("max")],TimePickerInput_u.prototype,"readMax",null),(0,tslib_es6._)([(0,writer/* writer */.K)("max")],TimePickerInput_u.prototype,"writeMax",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],TimePickerInput_u.prototype,"min",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("min")],TimePickerInput_u.prototype,"readMin",null),(0,tslib_es6._)([(0,writer/* writer */.K)("min")],TimePickerInput_u.prototype,"writeMin",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],TimePickerInput_u.prototype,"timeResolution",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("timeResolution")],TimePickerInput_u.prototype,"readTimeResolution",null),(0,tslib_es6._)([(0,writer/* writer */.K)("timeResolution")],TimePickerInput_u.prototype,"writeTimeResolution",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["time-picker"],json:{read:!1,write:!0}})],TimePickerInput_u.prototype,"type",void 0),TimePickerInput_u=TimePickerInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.TimePickerInput")],TimePickerInput_u);const TimePickerInput_l=TimePickerInput_u;

;// ./node_modules/@arcgis/core/form/elements/inputs.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const inputs_c={base:inputs_Input_p,key:"type",typeMap:{"barcode-scanner":BarcodeScannerInput_c,"combo-box":ComboBoxInput_i,"date-picker":DatePickerInput_c,"datetime-picker":DateTimePickerInput_c,"datetimeoffset-picker":l,"radio-buttons":RadioButtonsInput_i,switch:SwitchInput_i,"text-area":TextAreaInput_a,"text-box":TextBoxInput_n,"time-picker":TimePickerInput_l}};

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/domains.js
var domains = __webpack_require__(55797);
;// ./node_modules/@arcgis/core/form/elements/FieldElement.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var FieldElement_n;let FieldElement_l=FieldElement_n=class extends Element_i{constructor(e){super(e),this.domain=null,this.editable=null,this.editableExpression=null,this.fieldName=null,this.hint=null,this.input=null,this.requiredExpression=null,this.type="field",this.valueExpression=null}clone(){return new FieldElement_n({description:this.description,domain:this.domain,editable:this.editable,editableExpression:this.editableExpression,fieldName:this.fieldName,hint:this.hint,input:this.input,label:this.label,requiredExpression:this.requiredExpression,valueExpression:this.valueExpression,visibilityExpression:this.visibilityExpression})}};(0,tslib_es6._)([(0,property/* property */.MZ)({types:domains/* types */.gK,json:{read:{reader:domains/* fromJSON */.rS},write:!0}})],FieldElement_l.prototype,"domain",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],FieldElement_l.prototype,"editable",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],FieldElement_l.prototype,"editableExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],FieldElement_l.prototype,"fieldName",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],FieldElement_l.prototype,"hint",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:inputs_c,json:{read:{source:"inputType"},write:{target:"inputType"}}})],FieldElement_l.prototype,"input",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],FieldElement_l.prototype,"requiredExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:!1,write:!0}})],FieldElement_l.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],FieldElement_l.prototype,"valueExpression",void 0),FieldElement_l=FieldElement_n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.FieldElement")],FieldElement_l);const FieldElement_a=FieldElement_l;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/popup/support/RelatedRecordsInfoFieldOrder.js
var RelatedRecordsInfoFieldOrder = __webpack_require__(10357);
;// ./node_modules/@arcgis/core/form/elements/RelationshipElement.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var RelationshipElement_p;let RelationshipElement_l=RelationshipElement_p=class extends Element_i{constructor(e){super(e),this.displayCount=null,this.displayType="list",this.editableExpression=null,this.orderByFields=null,this.relationshipId=null,this.type="relationship"}clone(){return new RelationshipElement_p({description:this.description,displayCount:this.displayCount,displayType:this.displayType,editableExpression:this.editableExpression,label:this.label,orderByFields:(0,lang/* clone */.o8)(this.orderByFields),relationshipId:this.relationshipId,visibilityExpression:this.visibilityExpression})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],RelationshipElement_l.prototype,"displayCount",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["list"],json:{write:!0}})],RelationshipElement_l.prototype,"displayType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],RelationshipElement_l.prototype,"editableExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[RelatedRecordsInfoFieldOrder/* default */.A],json:{write:!0}})],RelationshipElement_l.prototype,"orderByFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],RelationshipElement_l.prototype,"relationshipId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["relationship"],json:{read:!1,write:!0}})],RelationshipElement_l.prototype,"type",void 0),RelationshipElement_l=RelationshipElement_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.RelationshipElement")],RelationshipElement_l);const RelationshipElement_n=RelationshipElement_l;

;// ./node_modules/@arcgis/core/form/elements/TextElement.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var TextElement_s;let TextElement_i=TextElement_s=class extends Element_i{constructor(t){super(t),this.text=null,this.textFormat="plain-text",this.type="text"}clone(){return new TextElement_s({text:this.text,textFormat:this.textFormat,visibilityExpression:this.visibilityExpression})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],TextElement_i.prototype,"text",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],TextElement_i.prototype,"textFormat",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["text"],readOnly:!0,json:{read:!1,write:!0}})],TextElement_i.prototype,"type",void 0),TextElement_i=TextElement_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.TextElement")],TextElement_i);const TextElement_p=TextElement_i;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/popup/support/UtilityNetworkAssociationType.js
var UtilityNetworkAssociationType = __webpack_require__(45441);
;// ./node_modules/@arcgis/core/form/elements/UtilityNetworkAssociationsElement.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let UtilityNetworkAssociationsElement_p=class extends(Clonable/* default */.A.ClonableMixin(Element_i)){constructor(o){super(o),this.associationTypes=null,this.editableExpression=null,this.type="utilityNetworkAssociations"}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[UtilityNetworkAssociationType/* default */.A],json:{write:{isRequired:!0}}})],UtilityNetworkAssociationsElement_p.prototype,"associationTypes",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],UtilityNetworkAssociationsElement_p.prototype,"editableExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["utilityNetworkAssociations"],json:{read:!1,write:!0}})],UtilityNetworkAssociationsElement_p.prototype,"type",void 0),UtilityNetworkAssociationsElement_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.UtilityNetworkAssociationsElement")],UtilityNetworkAssociationsElement_p);const UtilityNetworkAssociationsElement_n=UtilityNetworkAssociationsElement_p;

;// ./node_modules/@arcgis/core/form/support/formUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const formUtils_s=t=>"field"===t.type,formUtils_u=t=>"group"===t.type,formUtils_m=t=>"text"===t.type,formUtils_y=t=>"relationship"===t.type,formUtils_l=t=>"utilityNetworkAssociations"===t.type;function formUtils_a(t){return f(t)||formUtils_c(t)}function f(t){return"text-area"===t.type}function formUtils_c(t){return"text-box"===t.type}function h(t){return{typesWithGroup:{base:Element_i,key:"type",typeMap:{attachment:AttachmentElement_m,field:FieldElement_a,group:t,relationship:RelationshipElement_n,text:TextElement_p,utilityNetworkAssociations:UtilityNetworkAssociationsElement_n}},typesWithoutGroup:{base:Element_i,key:"type",typeMap:{attachment:AttachmentElement_m,field:FieldElement_a,relationship:RelationshipElement_n,text:TextElement_p,utilityNetworkAssociations:UtilityNetworkAssociationsElement_n}}}}function x(t,e,o=!0){if(!t)return null;const p=o?e.typesWithGroup.typeMap:e.typesWithoutGroup.typeMap;return t.filter((t=>p[t.type])).map((t=>p[t.type].fromJSON(t)))}function G(t,e,o=!0){if(!t)return null;const p=o?e.typesWithGroup.typeMap:e.typesWithoutGroup.typeMap;return t.filter((t=>p[t.type])).map((t=>t.toJSON()))}function W(e,o,p=!0){return e?e.map((e=>(0,ensureType/* ensureOneOfType */.aq)(p?o.typesWithGroup:o.typesWithoutGroup,e))):null}

;// ./node_modules/@arcgis/core/form/elements/GroupElement.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var GroupElement_d;let GroupElement_u=GroupElement_d=class extends Element_i{constructor(e){super(e),this.elements=null,this.initialState="expanded",this.type="group"}castElements(e){return W(e,E,!1)}readElements(e,t){return x(t.formElements,E,!1)}writeElements(e,t){t.formElements=G(e,E,!1)}clone(){return new GroupElement_d({description:this.description,elements:(0,lang/* clone */.o8)(this.elements),initialState:this.initialState,label:this.label,visibilityExpression:this.visibilityExpression})}};(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],GroupElement_u.prototype,"elements",void 0),(0,tslib_es6._)([(0,cast/* cast */.w)("elements")],GroupElement_u.prototype,"castElements",null),(0,tslib_es6._)([(0,reader/* reader */.w)("elements",["formElements"])],GroupElement_u.prototype,"readElements",null),(0,tslib_es6._)([(0,writer/* writer */.K)("elements")],GroupElement_u.prototype,"writeElements",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["collapsed","expanded"],json:{write:!0}})],GroupElement_u.prototype,"initialState",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:!1,write:!0}})],GroupElement_u.prototype,"type",void 0),GroupElement_u=GroupElement_d=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.GroupElement")],GroupElement_u);const E=h(GroupElement_u),j=GroupElement_u;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/fieldUtils.js
var fieldUtils = __webpack_require__(46227);
;// ./node_modules/@arcgis/core/form/FormTemplate.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var I;const b=h(j);let F=I=class extends JSONSupport/* default */.A{constructor(e){super(e),this.description=null,this.elements=null,this.expressionInfos=null,this.preserveFieldValuesWhenHidden=!1,this.title=null}castElements(e){return W(e,b)}readElements(e,s){return x(s.formElements,b)}writeElements(e,s){s.formElements=G(e,b)}clone(){return new I({description:this.description,expressionInfos:(0,lang/* clone */.o8)(this.expressionInfos),elements:(0,lang/* clone */.o8)(this.elements),title:this.title,preserveFieldValuesWhenHidden:this.preserveFieldValuesWhenHidden})}async getFieldsUsed(e,s){const t=new Set,{description:r,elements:o,expressionInfos:i,title:n}=this;if(U(t,e,r),U(t,e,n),!o)return[];const l=k(o,i).map((s=>(0,fieldUtils/* collectArcadeFieldNames */.Dx)(t,e,s)));await Promise.all(l);for(const p of o)g(t,{fieldsIndex:e,relationships:s},p);return Array.from(t).sort()}};function g(e,s,t){const{fieldsIndex:r}=s;if(!r||r.fields.length!==e.size)switch(U(e,r,t.label),U(e,r,t.description),t.type){case"field":(0,fieldUtils/* collectField */.rq)(e,r,t.fieldName);break;case"group":t.elements.forEach((t=>g(e,s,t)));break;case"relationship":if(s.relationships){const o=s.relationships.find((e=>e.id===t.relationshipId));o&&(0,fieldUtils/* collectField */.rq)(e,r,o.keyField)}(0,fieldUtils/* collectFields */._w)(e,r,t.orderByFields?.map((e=>e.field)));break;case"text":U(e,r,t.text)}}function k(e,s){if(!s||0===s.length)return[];const t=H(e),r=[];for(const o of s)t.has(o.name)&&r.push(o.expression);return r}function H(e){const s=new Set;for(const t of e)if((0,SetUtils/* addMaybe */.kb)(s,t.visibilityExpression),!formUtils_m(t))if(formUtils_u(t))(0,SetUtils/* addMany */.FB)(s,H(t.elements));else if((0,SetUtils/* addMaybe */.kb)(s,t.editableExpression),formUtils_s(t)){const{requiredExpression:e,valueExpression:r}=t;(0,SetUtils/* addMany */.FB)(s,[e,r])}return s}function U(e,s,t){(0,fieldUtils/* collectFields */._w)(e,s,(0,fieldUtils/* extractSubstitutionTemplatesFromString */.nw)(t))}(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],F.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],F.prototype,"elements",void 0),(0,tslib_es6._)([(0,cast/* cast */.w)("elements")],F.prototype,"castElements",null),(0,tslib_es6._)([(0,reader/* reader */.w)("elements",["formElements"])],F.prototype,"readElements",null),(0,tslib_es6._)([(0,writer/* writer */.K)("elements")],F.prototype,"writeElements",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[p],json:{write:!0}})],F.prototype,"expressionInfos",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!1,write:!0}})],F.prototype,"preserveFieldValuesWhenHidden",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],F.prototype,"title",void 0),F=I=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.FormTemplate")],F);const V=F;


/***/ }),

/***/ 21570:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3223);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1817);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22395);
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5262);
/* harmony import */ var _core_Warning_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97629);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80861);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25376);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26325);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48524);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var d;const p=(0,_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__/* .strict */ .O)()({orthometric:"gravity-related-height",gravity_related_height:"gravity-related-height",ellipsoidal:"ellipsoidal"}),u=p.jsonValues.slice();(0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .removeUnordered */ .Xy)(u,"orthometric");const g=(0,_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__/* .strict */ .O)()({meter:"meters",foot:"feet","us-foot":"us-feet","clarke-foot":"clarke-feet","clarke-yard":"clarke-yards","clarke-link":"clarke-links","sears-yard":"sears-yards","sears-foot":"sears-feet","sears-chain":"sears-chains","benoit-1895-b-chain":"benoit-1895-b-chains","indian-yard":"indian-yards","indian-1937-yard":"indian-1937-yards","gold-coast-foot":"gold-coast-feet","sears-1922-truncated-chain":"sears-1922-truncated-chains","50-kilometers":"50-kilometers","150-kilometers":"150-kilometers"});let m=d=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A{constructor(e){super(e),this.heightModel="gravity-related-height",this.heightUnit="meters",this.vertCRS=null}writeHeightModel(e,t,r){return p.write(e,t,r)}readHeightModel(e,t,r){const i=p.read(e);return i||(r?.messages&&r.messages.push(f(e,{context:r})),null)}readHeightUnit(e,t,r){const i=g.read(e);return i||(r?.messages&&r.messages.push(y(e,{context:r})),null)}readHeightUnitService(e,t,r){const i=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .unitFromRESTJSON */ .LA)(e)||g.read(e);return i||(r?.messages&&r.messages.push(y(e,{context:r})),null)}readVertCRS(e,t){return t.vertCRS||t.ellipsoid||t.geoid}clone(){return new d({heightModel:this.heightModel,heightUnit:this.heightUnit,vertCRS:this.vertCRS})}equals(e){return!!e&&(this===e||this.heightModel===e.heightModel&&this.heightUnit===e.heightUnit&&this.vertCRS===e.vertCRS)}static deriveUnitFromSR(e,t){const r=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .getVerticalUnitStringForSR */ .k1)(t);return new d({heightModel:e.heightModel,heightUnit:r??void 0,vertCRS:e.vertCRS})}write(e,t){return t={origin:"web-scene",...t},super.write(e,t)}static fromJSON(e){if(!e)return null;const t=new d;return t.read(e,{origin:"web-scene"}),t}};function y(e,t){return new _core_Warning_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A("height-unit:unsupported",`Height unit of value '${e}' is not supported`,t)}function f(e,t){return new _core_Warning_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A("height-model:unsupported",`Height model of value '${e}' is not supported`,t)}(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:p.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:u,default:"ellipsoidal",write:{isRequired:!0}}}}})],m.prototype,"heightModel",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__/* .writer */ .K)("web-scene","heightModel")],m.prototype,"writeHeightModel",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__/* .reader */ .w)(["web-scene","service"],"heightModel")],m.prototype,"readHeightModel",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:g.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:g.jsonValues,write:{writer:g.write,isRequired:!0}}}}})],m.prototype,"heightUnit",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__/* .reader */ .w)("web-scene","heightUnit")],m.prototype,"readHeightUnit",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__/* .reader */ .w)("service","heightUnit")],m.prototype,"readHeightUnitService",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:String,constructOnly:!0,json:{origins:{"web-scene":{write:!0}}}})],m.prototype,"vertCRS",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__/* .reader */ .w)("service","vertCRS",["vertCRS","ellipsoid","geoid"])],m.prototype,"readVertCRS",null),m=d=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__/* .subclass */ .$)("esri.geometry.HeightModelInfo")],m);


/***/ }),

/***/ 8337:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ de)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(14755);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(54192);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(62991);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/loadAll.js
var loadAll = __webpack_require__(52686);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/MapUtils.js
var MapUtils = __webpack_require__(80294);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(33125);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js + 1 modules
var promiseUtils = __webpack_require__(49175);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(61985);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/sql.js
var sql = __webpack_require__(80189);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(19759);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(25376);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/Layer.js + 1 modules
var Layer = __webpack_require__(41247);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/APIKeyMixin.js
var APIKeyMixin = __webpack_require__(94763);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ArcGISService.js
var ArcGISService = __webpack_require__(30179);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/BlendLayer.js
var BlendLayer = __webpack_require__(20923);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/CustomParametersMixin.js
var CustomParametersMixin = __webpack_require__(27303);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/DisplayFilteredLayer.js + 2 modules
var DisplayFilteredLayer = __webpack_require__(57546);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/EditBusLayer.js
var EditBusLayer = __webpack_require__(88940);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/FeatureLayerBase.js + 4 modules
var FeatureLayerBase = __webpack_require__(13268);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(90296);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/PortalLayer.js
var PortalLayer = __webpack_require__(60368);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/RefreshableLayer.js + 1 modules
var RefreshableLayer = __webpack_require__(77222);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js
var ScaleRangeLayer = __webpack_require__(22111);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/TemporalLayer.js
var TemporalLayer = __webpack_require__(2960);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js
var arcgisLayerUrl = __webpack_require__(63457);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/commonProperties.js
var commonProperties = __webpack_require__(9014);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/featureLayerUtils.js + 1 modules
var featureLayerUtils = __webpack_require__(33039);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/fieldProperties.js
var fieldProperties = __webpack_require__(83693);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/fieldUtils.js
var fieldUtils = __webpack_require__(46227);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/colorUtils.js
var colorUtils = __webpack_require__(60861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/reader.js
var serializableProperty_reader = __webpack_require__(9283);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/ClassBreaksRenderer.js
var ClassBreaksRenderer = __webpack_require__(42957);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/Renderer.js
var Renderer = __webpack_require__(46243);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/SimpleRenderer.js
var SimpleRenderer = __webpack_require__(79645);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/UniqueValueRenderer.js + 3 modules
var UniqueValueRenderer = __webpack_require__(45514);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/support/cimSymbolUtils.js
var cimSymbolUtils = __webpack_require__(93611);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/support/utils.js + 1 modules
var utils = __webpack_require__(24461);
;// ./node_modules/@arcgis/core/layers/support/subtypeGroupLayerUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const f={key:"type",base:Renderer/* default */.A,errorContext:"renderer",typeMap:{simple:SimpleRenderer/* default */.A,"unique-value":UniqueValueRenderer/* default */.A,"class-breaks":ClassBreaksRenderer/* default */.A}},subtypeGroupLayerUtils_i=(0,serializableProperty_reader/* createTypeReader */.C)({types:f});function c(e,r){const s=e.drawingInfo?.renderer,o=s?subtypeGroupLayerUtils_i(s,e,r):null;if("simple"!==o?.type)return;return (0,utils/* getColorFromSymbol */.Sx)(o.symbol,null)?o.symbol.clone():null}const u=["#ed5151","#149ece","#a7c636","#9e559c","#fc921f","#ffde3e","#f789d8","#b7814a","#3caf99","#6b6bd6","#b54779","#7f7f7f"];function a(r,s){return (0,colorUtils/* createUniqueColors */.Iy)(u,r,{offset:!0,shuffle:!0}).reverse().map((e=>{const r=s.clone();return"cim"===r.type?(0,cimSymbolUtils/* applyCIMSymbolColor */.Fe)(r,e):(0,utils/* applyColorToSymbol */.dt)(r,e),new SimpleRenderer/* default */.A({symbol:r})}))}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/PopupTemplate.js + 6 modules
var PopupTemplate = __webpack_require__(31352);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Identifiable.js
var Identifiable = __webpack_require__(23377);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(15565);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Loadable.js
var Loadable = __webpack_require__(11965);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(57725);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/object.js
var object = __webpack_require__(21750);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(48524);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/layerContainerType.js
var layerContainerType = __webpack_require__(63910);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/form/FormTemplate.js + 31 modules
var FormTemplate = __webpack_require__(70345);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(44153);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/FeatureTemplate.js
var FeatureTemplate = __webpack_require__(84700);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/LabelClass.js
var LabelClass = __webpack_require__(47659);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/labelingInfo.js
var labelingInfo = __webpack_require__(6488);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/TitleCreator.js
var TitleCreator = __webpack_require__(52884);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/Query.js + 1 modules
var Query = __webpack_require__(39609);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/support/popupUtils.js
var popupUtils = __webpack_require__(95610);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/support/defaults.js
var defaults = __webpack_require__(61793);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/tables/AttributeTableTemplate.js + 7 modules
var AttributeTableTemplate = __webpack_require__(27780);
;// ./node_modules/@arcgis/core/layers/support/SubtypeSublayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const M=(0,fieldProperties/* defineFieldProperties */.p)();let U=0;function k(e,t){let r=e.json.write;return"object"!=typeof r&&(r=e.json.write={}),r.ignoreOrigin=!0,t?.spatialOnly&&(r.layerContainerTypes=layerContainerType/* excludeTables */.K),e}function Q(e){const t={write:{ignoreOrigin:!0}};return e?.name&&(t.name=e.name),"object"==typeof t.write&&(e?.spatialOnly&&(t.write.layerContainerTypes=layerContainerType/* excludeTables */.K),e?.target&&(t.write.target=e.target)),t}function B(e){return new SimpleRenderer/* default */.A({symbol:H(e)})}function H(e){switch(e){case"point":case"multipoint":return defaults/* defaultPointSymbol2D */.UK.clone();case"polyline":return defaults/* defaultPolylineSymbol2D */.A7.clone();case"polygon":case"multipatch":return defaults/* defaultPolygonSymbol2D */.Cx.clone();default:return null}}function J(e,t){return!!t&&("unique-value"===e?.type&&null!=e.field&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression)}function W(e,t){return null==e?null:t.subtypes?.find((t=>t.code===e))}function z(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const i={},o=W(e,t);if(null!=o){const{defaultValues:e}=o;for(const t in e)i[t]=e[t]}return i[t.subtypeField]=e,new FeatureTemplate/* default */.A({name:"New Feature",drawingTool:r,prototype:{attributes:i}})}let K=class extends((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)(Clonable/* default */.A.ClonableMixin(Identifiable/* default */.A.IdentifiableMixin(Loadable/* default */.A)))){constructor(e){super(e),this.attributeTableTemplate=null,this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${U++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}load(e){return (0,fieldUtils/* fixRendererFields */.yp)(this.renderer,this.fieldsIndex),Promise.resolve(this)}get _titleCreator(){const e=this._get("_titleCreator");return (0,maybe/* destroyMaybe */.pR)(e),new TitleCreator/* default */.A({fieldsIndex:this.fieldsIndex,objectIdField:this.objectIdField,displayField:this.parent?.displayField??"",fields:this.fields,effectivePopupTemplate:this.popupTemplate??this.defaultPopupTemplate})}get capabilities(){return this.parent?.capabilities}get effectiveCapabilities(){return this.parent?.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){return this.parent?.elevationInfo}get featureTitleFields(){return[...this._titleCreator.requiredFields]}writeFieldOverrides(e,t,r){const{fields:i,parent:o}=this;let l;if(i){l=[];let e=0;i.forEach((({name:t,alias:r,editable:i,visible:n})=>{if(!n)return;const s=o?.fields?.find((e=>e.name===t));if(!s)return;const a={name:t};let p=!1;r!==s.alias&&(a.alias=r,p=!0),i!==s.editable&&(a.editable=i,p=!0),l.push(a),p&&e++})),0===e&&l.length===i.length&&(l=null)}else l=(0,lang/* clone */.o8)(e);l?.length&&(0,object/* setDeepValue */.sM)(r,l,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,i=e?.fields;if(!e||!i?.length)return null;const{subtypes:o,subtypeField:n}=e,l=o?.find((e=>e.code===r)),s=l?.defaultValues,a=l?.domains,p=[];for(const d of i){const e=d.clone(),{name:i}=e,o=t?.find((e=>e.name===i));if(e.visible=!t?.length||!!o,o){const{alias:t,editable:r}=o;t&&(e.alias=t),!1===r&&(e.editable=!1)}const l=s?.[i]??null;e.defaultValue=i===n?r:l;const u=a?.[i]??null;e.domain=i===n?null:u?"inherited"===u.type?e.domain:u.clone():null,p.push(e)}return p}get floorInfo(){return this.parent?.floorInfo}get isTable(){return!!this.parent?.isTable}get geometryType(){return this.parent?.geometryType}get globalIdField(){return this.parent?this.parent.globalIdField:(Logger/* default */.A.getLogger(this).error(Z("globalIdField")),null)}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){return this.parent||Logger/* default */.A.getLogger(this).error(Z("objectIdField")),this.parent?.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}get relationships(){return this.parent?.relationships}set renderer(e){(0,fieldUtils/* fixRendererFields */.yp)(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&"mesh"!==e.geometryType?B(e.geometryType):null}readRendererFromService(e,t,r){if("Table"===t.type)return null;const i=t.drawingInfo?.renderer,o=subtypeGroupLayerUtils_i(i,t,r);let n;const{subtypeCode:l}=this;if(null!=l&&J(o,t.subtypeField)){const e=o.uniqueValueInfos?.find((({value:e})=>(e="number"==typeof e?String(e):e)===String(l)));e&&(n=new SimpleRenderer/* default */.A({symbol:e.symbol}))}else"simple"!==o?.type||o.visualVariables?.length||(n=o);return n}readRenderer(e,t,r){const i=t?.layerDefinition?.drawingInfo?.renderer;if(!i)return;const o=i.visualVariables?.some((e=>"rotationInfo"!==e.type));return o?void 0:subtypeGroupLayerUtils_i(i,t,r)||void 0}get spatialReference(){return this.parent?.spatialReference??SpatialReference/* default */.A.WGS84}get subtypeField(){return this.parent?.subtypeField}readTemplatesFromService(e,t){return[z(this.subtypeCode,t)]}readTitleFromService(e,t){const r=W(this.subtypeCode,t);return null!=r?r.name:null}get url(){return this.parent?.url}get userHasUpdateItemPrivileges(){return!!this.parent?.userHasUpdateItemPrivileges}async addAttachment(e,t){const{parent:r}=this;if(!r)throw Z("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new Error/* default */.A("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:o}=this;if(!o)throw Z("updateAttachment");if(e.getAttribute(o.subtypeField)!==this.subtypeCode)throw new Error/* default */.A("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return o.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw Z("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new Error/* default */.A("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw Z("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:i,title:o}=this;if(r){const{displayField:e,editFieldsInfo:n,objectIdField:l}=r;t={displayField:e,editFieldsInfo:n,fields:i,objectIdField:l,title:o}}return (0,popupUtils/* createPopupTemplate */.tn)(t,e)}createQuery(){if(!this.parent)throw Z("createQuery");const e=(0,featureLayerUtils/* createQuery */.VZ)(this.parent),t=`${this.parent.subtypeField}=${this.subtypeCode}`;return e.where=(0,sql/* sqlAnd */.mA)(t,this.parent.definitionExpression),e}getFeatureTitle(e,t){return this._titleCreator.getTitle(this,e,t)}getFeatureTitles(e,t){return this._titleCreator.getTitles(this,e,t)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){if(!t?.excludeImpliedDomains&&this.parent){const t=(0,featureLayerUtils/* computeDomainFromSubtypes */.pc)(this.parent,e);if(t)return t}return this._getLayerDomain(e)}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw Z("queryAttachments");const i=e.clone();return i.where=Y(i.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatureCount(e,t){const r=await this.load();if(!r.parent)throw Z("queryFeatureCount");return r.parent.queryFeatureCount(X(r.parent,r,e),t)}async queryFeatures(e,t){const r=await this.load();if(!r.parent)throw Z("queryFeatures");return r.parent.queryFeatures(X(r.parent,r,e),t)}async queryObjectIds(e,t){const r=await this.load();if(!r.parent)throw Z("queryObjectIds");return r.parent.queryObjectIds(X(r.parent,r,e),t)}async queryRelatedFeatures(e,t){const r=await this.load();if(!r.parent)throw Z("queryRelatedFeatures");return r.parent.queryRelatedFeatures(e,t)}async queryRelatedFeaturesCount(e,t){const r=await this.load();if(!r.parent)throw Z("queryRelatedFeaturesCount");return r.parent.queryRelatedFeaturesCount(e,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};(0,tslib_es6._)([(0,property/* property */.MZ)({clonable:!1,readOnly:!0})],K.prototype,"_titleCreator",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:AttributeTableTemplate/* default */.A,json:Q({name:"attributeTableInfo"})})],K.prototype,"attributeTableTemplate",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],K.prototype,"capabilities",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],K.prototype,"effectiveCapabilities",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:Q()})],K.prototype,"charts",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,nonNullable:!0,json:Q({name:"enableEditing"})})],K.prototype,"editingEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,readOnly:!0})],K.prototype,"effectiveEditingEnabled",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],K.prototype,"elevationInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({clonable:!1,readOnly:!0})],K.prototype,"featureTitleFields",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],K.prototype,"fieldOverrides",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("fieldOverrides")],K.prototype,"writeFieldOverrides",null),(0,tslib_es6._)([(0,property/* property */.MZ)({...M.fields,readOnly:!0,json:{read:!1}})],K.prototype,"fields",null),(0,tslib_es6._)([(0,property/* property */.MZ)(M.fieldsIndex)],K.prototype,"fieldsIndex",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],K.prototype,"floorInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:FormTemplate/* default */.A,json:Q({name:"formInfo"})})],K.prototype,"formTemplate",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,clonable:!1,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0}}})],K.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],K.prototype,"isTable",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],K.prototype,"geometryType",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],K.prototype,"globalIdField",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],K.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(k((0,lang/* clone */.o8)(commonProperties/* labelsVisible */.kF)))],K.prototype,"labelsVisible",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[LabelClass/* default */.A],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:labelingInfo/* reader */.w},write:{ignoreOrigin:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}})],K.prototype,"labelingInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}})],K.prototype,"layerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(k((0,lang/* clone */.o8)(commonProperties/* legendEnabled */.fV)))],K.prototype,"legendEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide"]})],K.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)((()=>{const e=(0,lang/* clone */.o8)(commonProperties/* minScale */.hn);return e.json.origins.service.read=!1,k(e,{spatialOnly:!0})})())],K.prototype,"minScale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)((()=>{const e=(0,lang/* clone */.o8)(commonProperties/* maxScale */.hG);return e.json.origins.service.read=!1,k(e,{spatialOnly:!0})})())],K.prototype,"maxScale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],K.prototype,"effectiveScaleRange",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],K.prototype,"objectIdField",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,range:{min:0,max:1},nonNullable:!0,json:Q({spatialOnly:!0})})],K.prototype,"opacity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({clonable:!1})],K.prototype,"parent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(k((0,lang/* clone */.o8)(commonProperties/* popupEnabled */.M6)))],K.prototype,"popupEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:PopupTemplate/* default */.A,json:Q({name:"popupInfo"})})],K.prototype,"popupTemplate",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],K.prototype,"defaultPopupTemplate",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],K.prototype,"relationships",null),(0,tslib_es6._)([(0,property/* property */.MZ)({types:f,json:Q({target:"layerDefinition.drawingInfo.renderer",spatialOnly:!0})})],K.prototype,"renderer",null),(0,tslib_es6._)([(0,reader/* reader */.w)("service","renderer",["drawingInfo.renderer","subtypeField","type"])],K.prototype,"readRendererFromService",null),(0,tslib_es6._)([(0,reader/* reader */.w)("renderer",["layerDefinition.drawingInfo.renderer"])],K.prototype,"readRenderer",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],K.prototype,"spatialReference",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],K.prototype,"subtypeCode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],K.prototype,"subtypeField",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[FeatureTemplate/* default */.A],json:Q({name:"layerDefinition.templates"})})],K.prototype,"templates",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","templates",["geometryType","subtypeField","subtypes","type"])],K.prototype,"readTemplatesFromService",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:Q()})],K.prototype,"title",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","title",["subtypes"])],K.prototype,"readTitleFromService",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],K.prototype,"url",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],K.prototype,"userHasUpdateItemPrivileges",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,nonNullable:!0,json:Q({name:"visibility",spatialOnly:!0})})],K.prototype,"visible",void 0),K=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.SubtypeSublayer")],K);const X=(e,t,r)=>{if(!r)return t.createQuery();const i=Query/* default */.A.from(r);return i.where=Y(i.where,e.subtypeField,t.subtypeCode),i},Y=(e,t,r)=>{const i=new RegExp(`${t}\\s*=\\s*\\d+`),o=`${t}=${r}`,n=e??"";return i.test(n)?n.replace(i,o):(0,sql/* sqlAnd */.mA)(o,n)},Z=e=>new Error/* default */.A("subtype-sublayer:parent-missing",`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/TimeInfo.js
var TimeInfo = __webpack_require__(72523);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/versionUtils.js
var versionUtils = __webpack_require__(23123);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/support/guards.js
var guards = __webpack_require__(42663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/webdoc/interfaces.js
var interfaces = __webpack_require__(29759);
;// ./node_modules/@arcgis/core/layers/SubtypeGroupLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const ae="SubtypeGroupLayer";function ne(e,t){return new Error/* default */.A("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}function ue(e,t){const r=[];for(const s of e){const e=new K;e.read(s,t),r.push(e)}return r}const le=(0,fieldProperties/* defineFieldProperties */.p)();function pe(){return{name:"layerType",read:{enabled:!0},write:{enabled:!0,ignoreOrigin:!0,isRequired:!0}}}let ye=class extends((0,FeatureLayerBase/* FeatureLayerBase */.j)((0,DisplayFilteredLayer/* DisplayFilteredLayer */.FJ)((0,EditBusLayer/* EditBusLayer */.w6)((0,BlendLayer/* BlendLayer */.dM)((0,TemporalLayer/* TemporalLayer */.e)((0,ScaleRangeLayer/* ScaleRangeLayer */.j)((0,RefreshableLayer/* RefreshableLayer */.J)((0,ArcGISService/* ArcGISService */.b)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.A)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)((0,CustomParametersMixin/* CustomParametersMixin */.d)((0,APIKeyMixin/* APIKeyMixin */.p)(Clonable/* default */.A.ClonableMixin(Layer/* default */.A))))))))))))))){constructor(...e){super(...e),this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.sublayers=new(Collection/* default */.A.ofType(K)),this.useUniqueColorsForSublayers=!0,this.supportedSourceTypes=new Set(["Feature Layer","Table"]),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this._debouncedSaveOperations=(0,promiseUtils/* debounce */.sg)((async(e,t,r)=>{const{save:s,saveAs:i}=await __webpack_require__.e(/* import() */ 88519).then(__webpack_require__.bind(__webpack_require__, 10900));switch(e){case interfaces/* SaveOperationType */.X.SAVE:return s(this,t);case interfaces/* SaveOperationType */.X.SAVE_AS:return i(this,r,t)}})),this.addHandles((0,reactiveUtils/* watch */.wB)((()=>this.sublayers),((e,t)=>this._handleSublayersChange(e,t)),reactiveUtils/* sync */.OH))}destroy(){this.source?.destroy()}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=null!=e?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(promiseUtils/* throwIfAbortError */.QP).then((async()=>{if(!this.url)throw new Error/* default */.A("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(null==this.layerId)throw new Error/* default */.A("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))})).then((()=>(0,featureLayerUtils/* ensureLayerCredential */.VA)(this,"load",e)));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&null!=this.capabilities&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return (0,featureLayerUtils/* computeEffectiveEditingEnabled */.C$)(this)}get operationalLayerType(){return this.isTable?"SubtypeGroupTable":"SubtypeGroupLayer"}get parsedUrl(){const e=(0,urlUtils/* urlToObject */.An)(this.url);return null!=e&&null!=this.layerId&&(e.path=(0,urlUtils/* join */.fj)(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:t}){return this.url?(0,arcgisLayerUrl/* titleFromUrlAndName */.yG)(this.url,t):t}async addAttachment(e,t){const r=await (0,featureLayerUtils/* addAttachment */.Xl)(this,e,t,ae);return this.lastEditsEventDate=new Date,r}async updateAttachment(e,t,r){const s=await (0,featureLayerUtils/* updateAttachment */.bt)(this,e,t,r,ae);return this.lastEditsEventDate=new Date,s}async applyEdits(e,t){return (0,featureLayerUtils/* applyEdits */.ct)(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:t}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 97470).then(__webpack_require__.bind(__webpack_require__, 97470)),e);return new t({layer:this,supportedSourceTypes:this.supportedSourceTypes}).load({signal:e})}createQuery(){const e=(0,featureLayerUtils/* createQuery */.VZ)(this),t=this.sublayers.map((e=>e.subtypeCode));return e.where=(0,sql/* sqlAnd */.mA)(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,t){const r=await (0,featureLayerUtils/* deleteAttachments */.mm)(this,e,t,ae);return this.lastEditsEventDate=new Date,r}async fetchRecomputedExtents(e){return (0,featureLayerUtils/* fetchRecomputedExtents */.WP)(this,e,ae)}findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.findSublayerForSubtypeCode(r)}findSublayerForSubtypeCode(e){return this._sublayerLookup.get(e)}getFieldDomain(e,t){if(!t?.excludeImpliedDomains){const t=(0,featureLayerUtils/* computeDomainFromSubtypes */.pc)(this,e);if(t)return t}const r=(0,featureLayerUtils/* getFeatureSubtype */.Nv)(this,t?.feature);if(r){const t=r.domains?.[e];return"inherited"===t?.type?this._getLayerDomain(e):t}return this._getLayerDomain(e)}loadAll(){return (0,loadAll/* loadAll */.g)(this,(e=>{e(this.sublayers)}))}async queryAttachments(e,t){return (0,featureLayerUtils/* queryAttachments */.lV)(this,e,t,ae)}async queryFeatures(e,t){const r=await this.load(),s=Query/* default */.A.from(e)??r.createQuery(),i=s.outFields??[];i.includes(this.subtypeField)||(i.push(this.subtypeField),s.outFields=i);const o=await r.source.queryFeatures(s,t);if(o?.features)for(const a of o.features)a.layer=a.sourceLayer=this.findSublayerForFeature(a);return o}async queryObjectIds(e,t){return(await (0,featureLayerUtils/* queryObjectIds */.sg)(this,e,t,ae)).filter(guards/* isNumber */.Et)}async queryFeatureCount(e,t){return (0,featureLayerUtils/* queryFeatureCount */.Ye)(this,e,t,ae)}async queryExtent(e,t){return (0,featureLayerUtils/* queryExtent */.B5)(this,e,t,ae)}async queryRelatedFeatures(e,t){return (0,featureLayerUtils/* queryRelatedFeatures */.hM)(this,e,t,ae)}async queryRelatedFeaturesCount(e,t){return (0,featureLayerUtils/* queryRelatedFeaturesCount */.S2)(this,e,t,ae)}async save(e){return this._debouncedSaveOperations(interfaces/* SaveOperationType */.X.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(interfaces/* SaveOperationType */.X.SAVE_AS,t,e)}write(e,t){const{origin:r,layerContainerType:i,messages:o}=t;if(this.isTable){if("web-scene"===r||"web-map"===r&&"tables"!==i)return o?.push(ne(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&"web-map"===r&&"tables"===i)return o?.push(ne(this,"using a non-table source cannot be written to tables in web maps")),null;return this.sublayers?.length?super.write(e,t):(o?.push(new Error/* default */.A("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&(0,versionUtils/* serviceSupportsSpatialReference */.D)(this,e)}async getFeatureTitle(e,t){const r=this.findSublayerForFeature(e);return r?await r.getFeatureTitle(e,t):this._getFeatureTitleForUnknownSublayer(e)}async getFeatureTitles(e,t){const r=new Map,s=new Map,i=[s];e.forEach((e=>{const t=this.findSublayerForFeature(e);if(t)(0,MapUtils/* getOrCreateMapValue */.tE)(r,t,(()=>[])).push(e);else{const t=e.getObjectId()??e.attributes[this.objectIdField];s.set(t,this._getFeatureTitleForUnknownSublayer(e))}}));const a=await Promise.all(Array.from(r).map((([e,r])=>e.getFeatureTitles(r,t))));return a.forEach((e=>i.push(e))),new Map(i.flatMap((e=>[...e])))}get featureTitleFields(){const e=new Set;for(const t of this.sublayers){const r=t.featureTitleFields;for(const t of r)e.add(t)}return[...e]}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){this._set("source",e);const{sourceJSON:t}=e;if(t&&(this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})),!this.subtypes?.length)throw new Error/* default */.A("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),(0,fieldUtils/* fixTimeInfoFields */.sv)(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return (0,featureLayerUtils/* hasDataChanged */.jp)(this)}_verifyFields(){const e=this.parsedUrl?.path??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||-1!==e.search(/\/FeatureServer\//i)||this.fields?.some((e=>"geometry"===e.type))||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach((e=>{e.parent=null})),this.removeHandles("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach((e=>{e.parent=this,this._sublayerLookup.set(e.subtypeCode,e)})),this.addHandles([e.on("after-add",(({item:e})=>{e.parent=this,this._sublayerLookup.set(e.subtypeCode,e)})),e.on("after-remove",(({item:e})=>{e.parent=null,this._sublayerLookup.delete(e.subtypeCode)}))],"sublayers-owner"))}_getFeatureTitleForUnknownSublayer(e){const{displayField:t,fieldsIndex:r,objectIdField:s}=this;if(t&&r.has(t))return e.attributes[r.get(t).name]??"";const i=e.getObjectId();return null!=i?i.toString():s&&r.has(s)?e.attributes[r.get(s).name]??"":""}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],ye.prototype,"createQueryVersion",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],ye.prototype,"editingEnabled",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],ye.prototype,"effectiveEditingEnabled",null),(0,tslib_es6._)([(0,property/* property */.MZ)({...le.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],ye.prototype,"fields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(le.fieldsIndex)],ye.prototype,"fieldsIndex",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties.id)],ye.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide","hide-children"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],ye.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["SubtypeGroupLayer","SubtypeGroupTable"],json:{...pe(),origins:{"web-document":pe(),"portal-item":pe()}}})],ye.prototype,"operationalLayerType",null),(0,tslib_es6._)([(0,property/* property */.MZ)(le.outFields)],ye.prototype,"outFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],ye.prototype,"parsedUrl",null),(0,tslib_es6._)([(0,property/* property */.MZ)({clonable:!1})],ye.prototype,"source",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(K),json:{origins:{service:{read:{source:"subtypes",reader(e,t,s){let i=null;if(this.useUniqueColorsForSublayers){const r=c(t,s);i=r?a(e.length,r):null}const o=e.map((({code:e},r)=>{const o=new K({subtypeCode:e});o.read(t,s);const a=i?.[r];return a&&o.read({drawingInfo:{renderer:a.toJSON()}},s),o}));return new(Collection/* default */.A.ofType(K))(o)}}}},read:{source:["layers","tables"],reader(e,t,s){let i;return"SubtypeGroupLayer"===t.layerType&&t.layers?.length?i=ue(t.layers,s):"SubtypeGroupTable"===t.layerType&&t.tables?.length&&(i=ue(t.tables,s)),new(Collection/* default */.A.ofType(K))(i)}},write:{ignoreOrigin:!0,writer(e,t,r,s){const i=[];for(const o of e){const e=o.write({},s);i.push(e)}this.isTable?t.tables=i:t.layers=i}}}})],ye.prototype,"sublayers",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],ye.prototype,"useUniqueColorsForSublayers",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:TimeInfo/* default */.A})],ye.prototype,"timeInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{"portal-item":{write:{enabled:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],ye.prototype,"title",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","title",["name"])],ye.prototype,"readTitleFromService",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1}})],ye.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({clonable:!1,readOnly:!0})],ye.prototype,"featureTitleFields",null),ye=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.SubtypeGroupLayer")],ye);const de=ye;


/***/ }),

/***/ 94763:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80861);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26325);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function s(e){return"portalItem"in e}const i=i=>{let o=class extends i{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):s(this)?this.portalItem?.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:String})],o.prototype,"apiKey",null),o=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.layers.mixins.APIKeyMixin")],o),o};


/***/ }),

/***/ 30179:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80861);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6273);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26325);
/* harmony import */ var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63457);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const l=l=>{let p=class extends l{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const t=(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_6__/* .parse */ .qg)(this.url);if(t?.title)return t.title}return this._get("title")||""}set title(t){this._set("title",t)}set url(t){this._set("url",(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_6__/* .sanitizeUrl */ .Jf)(t,_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getLogger(this)))}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],p.prototype,"title",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String})],p.prototype,"url",null),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.layers.mixins.ArcGISService")],p),p};


/***/ }),

/***/ 88940:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mk: () => (/* binding */ p),
/* harmony export */   Zk: () => (/* binding */ c),
/* harmony export */   w6: () => (/* binding */ F)
/* harmony export */ });
/* unused harmony exports emitUpdateMomentEvent, isLayerWithGDBVersion, onApplyEditsEvent, onUpdateMomentEvent, versionMatches */
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57888);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15565);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49175);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80861);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26325);
/* harmony import */ var _versionManagement_support_versionManagementUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6893);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const a=new _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.EventEmitter;function l(t){return a.on("apply-edits",new WeakRef(t))}function h(t){return a.on("update-moment",new WeakRef(t))}function c(t,e,i=null,r=!1){const d=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .createResolver */ .Tw)();return r=null==e||r,a.emit("apply-edits",{serviceUrl:t,layerId:e,gdbVersion:i,mayReceiveServiceEdits:r,result:d.promise}),d}function u(t,e,i=null,s){a.emit("update-moment",{serviceUrl:t,layerId:e,gdbVersion:i,moment:s})}const m=Symbol();function p(t){return null!=t&&"object"==typeof t&&m in t}function b(t){return null!=t&&"object"==typeof t&&"gdbVersion"in t}function g(t,e,i){const s=new URL(t).host,r=_versionManagement_support_versionManagementUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .defaultVersionNameLookup */ .Z3.get(s),d=t=>!t||t===r;return d(e)&&d(i)||e===i}const F=e=>{var s;let n=class extends e{static{s=m}constructor(...t){super(...t),this[s]=!0,this._applyEditsHandler=t=>{const{serviceUrl:e,layerId:s,gdbVersion:r,mayReceiveServiceEdits:d,result:o}=t,n=e===this.url,a=null!=s&&null!=this.layerId&&s===this.layerId,l=b(this),h=b(this)&&g(e,r,this.gdbVersion);if(!n||l&&!h||!a&&!d)return;const c=o.then((t=>{if(this.lastEditsEventDate=new Date,a&&(t.addedFeatures.length||t.updatedFeatures.length||t.deletedFeatures.length||t.addedAttachments.length||t.updatedAttachments.length||t.deletedAttachments.length))return this.emit("edits",(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(t)),t;const s=t.editedFeatures?.find((({layerId:t})=>t===this.layerId));if(s){const{adds:e,updates:r,deletes:d}=s.editedFeatures,o={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:e?e.map((({attributes:t})=>({objectId:this.objectIdField&&t[this.objectIdField],globalId:this.globalIdField&&t[this.globalIdField]}))):[],deletedFeatures:d?d.map((({attributes:t})=>({objectId:this.objectIdField&&t[this.objectIdField],globalId:this.globalIdField&&t[this.globalIdField]}))):[],updatedFeatures:r?r.map((({current:{attributes:t}})=>({objectId:this.objectIdField&&t[this.objectIdField],globalId:this.globalIdField&&t[this.globalIdField]}))):[],editedFeatures:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(t.editedFeatures),exceededTransferLimit:!1,historicMoment:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(t.historicMoment)};return this.emit("edits",o),o}const d={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:[],deletedFeatures:[],updatedFeatures:[],editedFeatures:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(t.editedFeatures),exceededTransferLimit:!1,historicMoment:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(t.historicMoment)};return"historicMoment"in this&&this._shouldUpdateHistoricMoment(e,r,d.historicMoment)&&this.emit("edits",d),d})).then((t=>("historicMoment"in this&&this._shouldUpdateHistoricMoment(e,r,t.historicMoment)&&(this.historicMoment=t.historicMoment),t)));this.emit("apply-edits",{result:c})},this._updateMomentHandler=t=>{const{serviceUrl:e,gdbVersion:i,moment:s}=t,r=e===this.url,d=b(this),o=b(this)&&g(e,i,this.gdbVersion),n=b(this)&&!g(e,this.gdbVersion,null);r&&d&&o&&n&&"historicMoment"in this&&this.historicMoment!==s&&(this.historicMoment=s)},this.when().then((()=>{this.addHandles(l(this._applyEditsHandler)),"historicMoment"in this&&this.addHandles(h(this._updateMomentHandler))}),(()=>{}))}_shouldUpdateHistoricMoment(t,e,i){return"historicMoment"in this&&this.historicMoment!==i&&(0,_versionManagement_support_versionManagementUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .isVersionInEditSession */ .w5)(t,e)}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)()],n.prototype,"lastEditsEventDate",void 0),n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.layers.mixins.EditBusLayer")],n),n};


/***/ }),

/***/ 13268:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  j: () => (/* binding */ k)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(54192);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(15565);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(19759);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(25376);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(48524);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/layerContainerType.js
var layerContainerType = __webpack_require__(63910);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/PropertyOrigin.js
var PropertyOrigin = __webpack_require__(91101);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(8000);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/HeightModelInfo.js
var HeightModelInfo = __webpack_require__(21570);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(44153);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js
var arcgisLayerUrl = __webpack_require__(63457);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/commonProperties.js
var commonProperties = __webpack_require__(9014);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(14755);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(22395);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/time/timeZoneUtils.js + 1 modules
var timeZoneUtils = __webpack_require__(75235);
;// ./node_modules/@arcgis/core/layers/support/EditFieldsInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let l=class extends(Clonable/* default */.A.ClonableMixin(JSONSupport/* default */.A)){constructor(o){super(o),this.creatorField=null,this.creationDateField=null,this.editorField=null,this.editDateField=null,this.realm=null,this.timeZone=null}};(0,tslib_es6._)([(0,property/* property */.MZ)()],l.prototype,"creatorField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],l.prototype,"creationDateField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],l.prototype,"editorField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],l.prototype,"editDateField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],l.prototype,"realm",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)((0,timeZoneUtils/* timeZoneProperty */.P6)("dateFieldsTimeReference",!0))],l.prototype,"timeZone",void 0),l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.EditFieldsInfo")],l);

;// ./node_modules/@arcgis/core/layers/support/FeatureIndex.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let p=class extends(Clonable/* default */.A.ClonableMixin(JSONSupport/* default */.A)){constructor(o){super(o)}};(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0,json:{write:!0}})],p.prototype,"name",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0,json:{write:!0}})],p.prototype,"fields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0,json:{write:!0}})],p.prototype,"isAscending",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0,json:{write:!0}})],p.prototype,"indexType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0,json:{write:!0}})],p.prototype,"isUnique",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0,json:{write:!0}})],p.prototype,"description",void 0),p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.FeatureIndex")],p);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/featureLayerUtils.js + 1 modules
var featureLayerUtils = __webpack_require__(33039);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/unitUtils.js
var unitUtils = __webpack_require__(5262);
;// ./node_modules/@arcgis/core/layers/support/GeometryFieldsInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let a=class extends(Clonable/* default */.A.ClonableMixin(JSONSupport/* default */.A)){constructor(e){super(e),this.shapeAreaField=null,this.shapeLengthField=null,this.units=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:{source:"shapeAreaFieldName"}}})],a.prototype,"shapeAreaField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:{source:"shapeLengthFieldName"}}})],a.prototype,"shapeLengthField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:e=>unitUtils/* areaUnitsJSONMap */.dk.read(e)||unitUtils/* lengthUnitsJSONMap */.Sk.read(e)}})],a.prototype,"units",void 0),a=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.GeometryFieldsInfo")],a);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/LayerFloorInfo.js
var LayerFloorInfo = __webpack_require__(76591);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/layerUtils.js + 1 modules
var layerUtils = __webpack_require__(44837);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/Relationship.js
var Relationship = __webpack_require__(46148);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/serviceCapabilitiesUtils.js + 1 modules
var serviceCapabilitiesUtils = __webpack_require__(29093);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/domains.js
var domains = __webpack_require__(55797);
;// ./node_modules/@arcgis/core/layers/support/Subtype.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let n=class extends(Clonable/* default */.A.ClonableMixin(JSONSupport/* default */.A)){constructor(o){super(o),this.code=null,this.defaultValues={},this.domains=null,this.name=null}readDomains(o){if(!o)return null;const r={};for(const t of Object.keys(o))r[t]=(0,domains/* fromJSON */.rS)(o[t]);return r}writeDomains(o,r){if(!o)return;const t={};for(const e of Object.keys(o))o[e]&&(t[e]=o[e]?.toJSON());r.domains=t}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],n.prototype,"code",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Object,json:{write:!0}})],n.prototype,"defaultValues",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],n.prototype,"domains",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("domains")],n.prototype,"readDomains",null),(0,tslib_es6._)([(0,writer/* writer */.K)("domains")],n.prototype,"writeDomains",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],n.prototype,"name",void 0),n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.Subtype")],n);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/portal/support/portalItemUtils.js
var portalItemUtils = __webpack_require__(86074);
;// ./node_modules/@arcgis/core/layers/mixins/FeatureLayerBase.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const k=k=>{let L=class extends k{constructor(){super(...arguments),this.copyright=null,this.capabilities=null,this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.definitionExpression=null,this.displayField=null,this.editFieldsInfo=null,this.editingInfo=null,this.elevationInfo=null,this.fieldsIndex=null,this.floorInfo=null,this.fullExtent=null,this.gdbVersion=null,this.geometryFieldsInfo=null,this.geometryType=null,this.globalIdField=null,this.hasM=void 0,this.hasZ=void 0,this.heightModelInfo=null,this.historicMoment=null,this.indexes=new(Collection/* default */.A.ofType(p)),this.isTable=!1,this.layerId=void 0,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.preferredTimeZone=null,this.relationships=null,this.returnM=void 0,this.returnZ=void 0,this.serviceDefinitionExpression=null,this.serviceItemId=null,this.sourceJSON=null,this.spatialReference=SpatialReference/* default */.A.WGS84,this.subtypeField=null,this.subtypes=null,this.trackIdField=null,this.uniqueIdFields=null,this.version=void 0,this._isUrlHostModified=!1,this._isUrlHostModificationEnabled=!1}getFieldDomain(){throw new Error("Not implemented")}getField(e){return this.fieldsIndex.get(e)}get authenticationTriggerEvent(){if(!this.url)return null;const{capabilities:e}=this;if(e){const{query:t,operations:i,editing:r}=e;if(!t.supportsQueryByOthers||!t.supportsQueryByAnonymous)return"load";if(i.supportsEditing&&!(r.supportsUpdateByOthers&&r.supportsUpdateByAnonymous&&r.supportsDeleteByOthers&&r.supportsDeleteByAnonymous))return"load"}if((0,featureLayerUtils/* hasCurrentUser */.rQ)(this.serviceDefinitionExpression)||(0,featureLayerUtils/* hasCurrentUser */.rQ)(this.definitionExpression))return"load";if(this.userHasUpdateItemPrivileges){if((0,featureLayerUtils/* isLayerCacheStale */.tG)(this))return"load";if(this.hasUpdateItemRestrictions)return e.operations.supportsQuery?"editing":"load"}if(this.userHasFullEditingPrivileges&&this.hasFullEditingRestrictions)return"editing";const t=this.editFieldsInfo;return(t?.creatorField||t?.editorField)&&e?.operations.supportsEditing?"editing":null}readCapabilitiesFromService(e,t){return (0,serviceCapabilitiesUtils/* getFeatureLayerCapabilities */.S)(t,this.url)}readEditingInfo(e,t){const{editingInfo:i}=t;return i?{lastEditDate:null!=i.lastEditDate?new Date(i.lastEditDate):null}:null}get effectiveCapabilities(){const e=this.capabilities;if(!e)return null;const t=(0,lang/* clone */.o8)(e),{operations:r,editing:o}=t;return (0,featureLayerUtils/* supportsQueryOnly */.Pt)(this)?(this.userHasUpdateItemPrivileges&&(r.supportsQuery=!0),t):this.userHasUpdateItemPrivileges?(r.supportsAdd=r.supportsDelete=r.supportsEditing=r.supportsQuery=r.supportsUpdate=o.supportsDeleteByOthers=o.supportsGeometryUpdate=o.supportsUpdateByOthers=!0,t):(this.userHasFullEditingPrivileges&&r.supportsEditing&&(r.supportsAdd=r.supportsDelete=r.supportsUpdate=o.supportsGeometryUpdate=!0),t)}get effectiveEditingEnabled(){return!1}readGlobalIdFieldFromService(e,t){return (0,featureLayerUtils/* readGlobalIdField */.jD)(t)}get hasFullEditingRestrictions(){const e=this.capabilities;if(!e||(0,featureLayerUtils/* supportsQueryOnly */.Pt)(this))return!1;const{operations:t,editing:i}=e;return t.supportsEditing&&!(t.supportsAdd&&t.supportsDelete&&t.supportsUpdate&&i.supportsGeometryUpdate)}get hasUpdateItemRestrictions(){const e=this.capabilities;if(!e)return!1;const{operations:t,editing:i}=e;return (0,featureLayerUtils/* supportsQueryOnly */.Pt)(this)?!t.supportsQuery:!(t.supportsAdd&&t.supportsDelete&&t.supportsEditing&&t.supportsQuery&&t.supportsUpdate&&i.supportsDeleteByOthers&&i.supportsGeometryUpdate&&i.supportsUpdateByOthers)}readIsTableFromService(e,t){return"Table"===t.type}readMaxScale(e,t){return t.effectiveMaxScale||e||0}readMinScale(e,t){return t.effectiveMinScale||e||0}readObjectIdFieldFromService(e,t){return (0,featureLayerUtils/* readObjectIdField */.Zm)(t)}readServiceDefinitionExpression(e,t){return t.definitionQuery||t.definitionExpression}readUniqueIdFields(e,t){return t.uniqueIdInfo?.OIDFieldContainsHashValue?t.uniqueIdInfo.fields:null}set url(e){if(null==e)return void this._set("url",e);const t=(0,arcgisLayerUrl/* sanitizeUrlWithLayerId */.HZ)({layer:this,url:e,nonStandardUrlAllowed:!0,logger:Logger/* default */.A.getLogger(this)});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,i,r){(0,arcgisLayerUrl/* writeUrlWithLayerId */.LS)(this,e,null,t,r)}readVersion(e,t){return (0,featureLayerUtils/* readVersion */.$4)(t)}get isUrlHostModified(){const{loaded:e,url:t,_isUrlHostModified:i}=this;if(i)return!0;if(!e||!t)return!1;if(this.originIdOf("url")<PropertyOrigin/* OriginId */.Gr.USER)return!1;const r=this.sourceJSON?.preferredHost;if(!r)return!1;if(!(0,urlUtils/* hasSameOrigin */.FX)(t,`https://${r}`,!0))return!1;for(let s=PropertyOrigin/* OriginId */.Gr.USER-1;s>=PropertyOrigin/* OriginId */.Gr.PORTAL_ITEM;s--){const e=this.getAtOrigin("url",(0,PropertyOrigin/* idToName */.OL)(s));if(e)return!(0,urlUtils/* hasSameOrigin */.FX)(t,e,!0)}return!1}applyPreferredHost(e){const{url:t,portalItem:i}=this;if(!t||!(0,layerUtils/* isPreferredUrlApplicable */.OP)(i))return;const r=(0,layerUtils/* getPreferredUrl */.$x)();r&&this._isUrlHostModificationEnabled&&(this._set("url",r),this._isUrlHostModified=!0,i&&(0,layerUtils/* applyPreferredHostToPortalItem */.Gh)(i,(0,layerUtils/* getPreferredHost */.G$)()))}applyHostFromPortalItem(){const{url:e,portalItem:t}=this;if(!e||this.originIdOf("url")===PropertyOrigin/* OriginId */.Gr.USER||!t?.url||!(0,layerUtils/* isPreferredUrlApplicable */.OP)(t)||!(0,portalItemUtils/* hasTypeKeyword */.Y)(t,portalItemUtils/* typeKeyword */.mm.HOSTED_SERVICE)||(0,urlUtils/* hasSameOrigin */.FX)(e,t.url,!0)||!this._isUrlHostModificationEnabled)return;const i=(0,urlUtils/* getHost */.Ln)(t.url);this._set("url",(0,urlUtils/* changeHost */.hf)(e,i)),this._isUrlHostModified=!0}};return (0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],L.prototype,"authenticationTriggerEvent",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{service:{read:{source:"copyrightText"}}}}})],L.prototype,"copyright",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1,origins:{service:{read:{source:["advancedQueryCapabilities","allowGeometryUpdates","allowUpdateWithoutMValues","archivingInfo","capabilities","datesInUnknownTimezone","hasAttachments","hasM","hasZ","isDataBranchVersioned","isDataVersioned","maxRecordCount","maxRecordCountFactor","maxUniqueIDCount","ownershipBasedAccessControlForFeatures","standardMaxRecordCount","supportedQueryFormats","supportsAdvancedQueries","supportsApplyEditsWithGlobalIds","supportsAttachmentsByUploadId","supportsAttachmentsResizing","supportsCalculate","supportsCoordinatesQuantization","supportsExceedsLimitStatistics","supportsFieldDescriptionProperty","supportsQuantizationEditMode","supportsRollbackOnFailureParameter","supportsStatistics","supportsTruncate","supportsValidateSql","tileMaxRecordCount","useStandardizedQueries"]}}}}})],L.prototype,"capabilities",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","capabilities")],L.prototype,"readCapabilitiesFromService",null),(0,tslib_es6._)([(0,property/* property */.MZ)((0,timeZoneUtils/* timeZoneProperty */.P6)("dateFieldsTimeReference"))],L.prototype,"dateFieldsTimeZone",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean})],L.prototype,"datesInUnknownTimezone",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],L.prototype,"definitionExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{service:{read:{source:"displayField"}}}}})],L.prototype,"displayField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:l})],L.prototype,"editFieldsInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],L.prototype,"editingInfo",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("editingInfo")],L.prototype,"readEditingInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],L.prototype,"effectiveCapabilities",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],L.prototype,"effectiveEditingEnabled",null),(0,tslib_es6._)([(0,property/* property */.MZ)((()=>{const e=(0,lang/* clone */.o8)(commonProperties/* elevationInfo */.Yj),t=e.json.origins;return t["web-map"]={read:!1,write:!1},t["portal-item"]={read:!1,write:!1},e})())],L.prototype,"elevationInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],L.prototype,"fieldsIndex",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:LayerFloorInfo/* default */.A,json:{name:"layerDefinition.floorInfo",write:{layerContainerTypes:layerContainerType/* excludeTables */.K}}})],L.prototype,"floorInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Extent/* default */.A,json:{origins:{service:{read:{source:"extent"}}}}})],L.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],L.prototype,"gdbVersion",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:a,json:{read:{source:"geometryProperties"}}})],L.prototype,"geometryFieldsInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["point","polygon","polyline","multipoint","multipatch","mesh"],json:{origins:{service:{read:featureLayerUtils/* geometryTypeKebabDict */.iX.read}}}})],L.prototype,"geometryType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],L.prototype,"globalIdField",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","globalIdField",["globalIdField","fields"])],L.prototype,"readGlobalIdFieldFromService",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],L.prototype,"hasFullEditingRestrictions",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{origins:{service:{read:!0}}}})],L.prototype,"hasM",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],L.prototype,"hasUpdateItemRestrictions",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{origins:{service:{read:!0}}}})],L.prototype,"hasZ",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:HeightModelInfo/* default */.A})],L.prototype,"heightModelInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Date})],L.prototype,"historicMoment",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(p),readOnly:!0})],L.prototype,"indexes",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],L.prototype,"isTable",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","isTable",["type"])],L.prototype,"readIsTableFromService",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{read:!1,write:{target:"id"}}},read:!1}})],L.prototype,"layerId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* maxScale */.hG)],L.prototype,"maxScale",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","maxScale",["maxScale","effectiveMaxScale"])],L.prototype,"readMaxScale",null),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* minScale */.hn)],L.prototype,"minScale",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","minScale",["minScale","effectiveMinScale"])],L.prototype,"readMinScale",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],L.prototype,"objectIdField",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","objectIdField",["objectIdField","fields"])],L.prototype,"readObjectIdFieldFromService",null),(0,tslib_es6._)([(0,property/* property */.MZ)((0,timeZoneUtils/* timeZoneProperty */.P6)("preferredTimeReference"))],L.prototype,"preferredTimeZone",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Relationship/* default */.A],readOnly:!0})],L.prototype,"relationships",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean})],L.prototype,"returnM",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean})],L.prototype,"returnZ",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{write:!1}})],L.prototype,"serverGens",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],L.prototype,"serviceDefinitionExpression",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","serviceDefinitionExpression",["definitionQuery","definitionExpression"])],L.prototype,"readServiceDefinitionExpression",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],L.prototype,"serviceItemId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],L.prototype,"sourceJSON",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SpatialReference/* default */.A,json:{origins:{service:{read:{source:"extent.spatialReference"}}}}})],L.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0,json:{origins:{service:{read:!0}}}})],L.prototype,"subtypeField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[n],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],L.prototype,"subtypes",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:{source:"timeInfo.trackIdField"}}})],L.prototype,"trackIdField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],readOnly:!0})],L.prototype,"uniqueIdFields",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","uniqueIdFields",["uniqueIdInfo.OIDFieldContainsHashValue","uniqueIdInfo.fields"])],L.prototype,"readUniqueIdFields",null),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* url */.OZ)],L.prototype,"url",null),(0,tslib_es6._)([(0,writer/* writer */.K)("url")],L.prototype,"writeUrl",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{service:{read:!0}},read:!1}})],L.prototype,"version",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","version",["currentVersion","capabilities","drawingInfo","hasAttachments","htmlPopupType","relationships","timeInfo","typeIdField","types"])],L.prototype,"readVersion",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],L.prototype,"isUrlHostModified",null),L=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.mixins.FeatureLayerBase")],L),L};


/***/ }),

/***/ 76591:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54192);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22395);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80861);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26325);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var l;let i=l=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A{constructor(o){super(o),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A}clone(){return new l({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{write:{isRequired:!0}}})],i.prototype,"floorField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{read:!1,write:!1}})],i.prototype,"viewAllMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{read:!1,write:!1}})],i.prototype,"viewAllLevelIds",void 0),i=l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.layers.support.LayerFloorInfo")],i);


/***/ }),

/***/ 46148:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14755);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1817);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22395);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80861);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26325);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const a=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONMap */ .J({esriRelCardinalityOneToOne:"one-to-one",esriRelCardinalityOneToMany:"one-to-many",esriRelCardinalityManyToMany:"many-to-many"}),l=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONMap */ .J({esriRelRoleOrigin:"origin",esriRelRoleDestination:"destination"});let n=class extends(_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.ClonableMixin(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)){constructor(o){super(o),this.cardinality=null,this.catalogId=null,this.composite=null,this.id=null,this.keyField=null,this.keyFieldInRelationshipTable=null,this.name=null,this.relatedTableId=null,this.relationshipTableId=null,this.role=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{read:a.read,write:a.write}})],n.prototype,"cardinality",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{name:"catalogID"}})],n.prototype,"catalogId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{read:!0,write:!0}})],n.prototype,"composite",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{read:!0,write:!0}})],n.prototype,"id",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{read:!0,write:!0}})],n.prototype,"keyField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{read:!0,write:!0}})],n.prototype,"keyFieldInRelationshipTable",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{read:!0,write:!0}})],n.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{read:!0,write:!0}})],n.prototype,"relatedTableId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{read:!0,write:!0}})],n.prototype,"relationshipTableId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{read:l.read,write:l.write}})],n.prototype,"role",void 0),n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.layers.support.Relationship")],n);


/***/ }),

/***/ 52884:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93741);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3223);
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3132);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54192);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80861);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26325);
/* harmony import */ var _fieldUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46227);
/* harmony import */ var _support_loadArcade_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(68717);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const d="relationships/",p="expression/";let u=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(e){super(e),this._featureUtils=null,this.effectivePopupTemplate=null}get _arcadeTask(){if(this.expressionsUsedInTitle.length>0){return this._get("_arcadeTask")||(0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .createTask */ .UT)((()=>(0,_support_loadArcade_js__WEBPACK_IMPORTED_MODULE_10__/* .loadArcade */ .l)()))}return null}get featureUtilsPromise(){return this._get("featureUtilsPromise")??__webpack_require__.e(/* import() */ 79687).then(__webpack_require__.bind(__webpack_require__, 79687)).then((e=>this._featureUtils=e))}get calculatedExpressions(){const e=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A;if(!this.expressionsUsedInTitle.length)return e;if(!this._arcadeTask?.value){for(const t of this.expressionsUsedInTitle??[])e.push({name:t.name,invalid:!0});return e}for(const t of this.expressionsUsedInTitle)try{const s=this._arcadeTask.value.arcade.parseScript(t.expression,["$layer","$map","$datastore"]);if(s.isAsync){e.push({name:t.name,invalid:!0});break}e.push({name:t.name,syntax:s,invalid:!1,func:this._arcadeTask.value.arcade.compileScript(s,{vars:{$feature:"any"}})})}catch{e.push({name:t.name,invalid:!0});break}return e}get expressionsUsedInTitle(){let e=this.effectivePopupTemplate?.title??"";return"string"!=typeof e?[]:(e=e.toLowerCase(),this.effectivePopupTemplate?.expressionInfos?.filter((t=>e.includes(`{expression/${t.name.toLowerCase()}}`)))??[])}get fieldInfoMap(){return this._featureUtils?this._createFieldInfoMap(this._featureUtils.getAllFieldInfos(this.effectivePopupTemplate)):null}get hasBadExpressions(){return this.calculatedExpressions.some((e=>!0===e.invalid))}get requiredFields(){const e=new Set;if(this._arcadeTask?.value&&!this.hasBadExpressions)for(const s of this.calculatedExpressions?.toArray()??[])try{const t=this._arcadeTask.value.arcade.extractFieldLiterals(s.syntax);for(const s of t){const t=s.split("."),i=this.fieldsIndex.get(t.at(-1)??"");i&&e.add(i.name)}}catch{}const t=this._extractFieldNames(this.workingTitle);for(const s of t){const t=this.fieldsIndex.get(s);t&&e.add(t.name)}return null!=this.objectIdField&&e.add(this.objectIdField),e}get titleFromDisplayField(){let e="";return this.displayField&&(e=this.fieldsIndex.get(this.displayField)?.name??""),e||(e=this.fieldsIndex.get(this.objectIdField)?.name??""),e?`{${e}}`:""}get workingTitle(){const e=this.effectivePopupTemplate?this.effectivePopupTemplate.title:"";return""===e||null==e||this.hasBadExpressions||"string"!=typeof e?this.titleFromDisplayField:e}async getTitle(e,t,s){const i=t.getObjectId()??t.attributes[e.objectIdField];return(await this.getTitles(e,[t],s)).get(i)??""}async getTitles(e,t,s){const i=new Map,r=s?.timeZone??"system";try{const[{substituteFieldsInLinksAndAttributes:a}]=await Promise.all([this.featureUtilsPromise,this._arcadeTask?.promise]);s?.fetchMissingFields&&(t=await this._checkAndReQueryGraphics(e,t));const{fieldInfoMap:o,workingTitle:l}=this,n=l&&o;t.forEach((t=>{const s=t.getObjectId()??t.attributes[e.objectIdField],c=n?a({attributes:t.attributes,expressionAttributes:null,fieldInfoMap:o,globalAttributes:this._createFormattedAttributes(e,t,r).global,layer:e,text:l}):"";i.set(s,c)}))}catch{}return i}async _checkAndReQueryGraphics(e,t){const i=t.map((t=>t.getObjectId()??t.attributes[e.objectIdField])).filter(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isSome */ .Ru);if(i.length!==t.length)return t;if(t.some((e=>!(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .featureHasFields */ .Kl)(e,this.requiredFields)))){const s=e.createQuery();s.where="1=1",s.outFields=[...this.requiredFields],s.objectIds=i;const r=await e.queryFeatures(s);if(r?.features.length===t.length)return r.features}return t}_createFieldInfoMap(e){const t=new Map;if(!e)return t;for(const s of e){if(!s.fieldName)continue;const e=this.fieldsIndex.get(s.fieldName),i=e?.name??s.fieldName;s.fieldName=i,t.set(i.toLowerCase(),s)}return t}_createFormattedAttributes(e,t,s="system"){const i=this.effectivePopupTemplate?.fieldInfos??[],r={};if(!this._featureUtils)return{};if(!this.hasBadExpressions&&this.calculatedExpressions.length>0&&this._arcadeTask?.value){const s=this._arcadeTask.value.Feature.createFromGraphicLikeObject(t.geometry,t.attributes,e,null);for(const e of this.calculatedExpressions)try{r[`expression/${e.name}`]=e.func({vars:{$feature:s}})}catch{}}const a={...t.attributes,...r};return{global:this._featureUtils.formatAttributes({fieldInfos:i,attributes:a,graphic:t,timeZone:s,layer:e,fieldInfoMap:this.fieldInfoMap}),content:[]}}_extractFieldNames(e){return (0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .extractSubstitutionTemplatesFromString */ .nw)(e).filter((e=>!(0===e.indexOf(d)||0===e.indexOf(p))))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({readOnly:!0})],u.prototype,"_arcadeTask",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],u.prototype,"_featureUtils",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({readOnly:!0})],u.prototype,"featureUtilsPromise",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({readOnly:!0})],u.prototype,"calculatedExpressions",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],u.prototype,"displayField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],u.prototype,"effectivePopupTemplate",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],u.prototype,"expressionsUsedInTitle",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],u.prototype,"fieldsIndex",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],u.prototype,"fieldInfoMap",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],u.prototype,"fields",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],u.prototype,"objectIdField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],u.prototype,"requiredFields",null),u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.layers.support.TitleCreator")],u);


/***/ }),

/***/ 29093:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ c),
  d: () => (/* binding */ A)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js
var arcgisLayerUrl = __webpack_require__(63457);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/infoFor3D.js
var infoFor3D = __webpack_require__(52360);
;// ./node_modules/@arcgis/core/rest/support/jsonUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function jsonUtils_n(n,r,u){return!!t(n,r,u)}function r(n,r,u){return t(n,r,u)}function t(n,r,t){return n&&n.hasOwnProperty(r)?n[r]:t}

;// ./node_modules/@arcgis/core/layers/support/serviceCapabilitiesUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const o={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function u(t){const s=t?.supportedSpatialAggregationStatistics?.map((t=>t.toLowerCase()));return{envelope:!!s?.includes("envelopeaggregate"),centroid:!!s?.includes("centroidaggregate"),convexHull:!!s?.includes("convexhullaggregate")}}function n(t,s){const e=t?.supportedOperationsWithCacheHint?.map((t=>t.toLowerCase()));return!!e?.includes(s.toLowerCase())}function i(t){const s=t?.supportedStatisticTypes?.map((t=>t.toLowerCase()));return{count:!!s?.includes("count"),sum:!!s?.includes("sum"),min:!!s?.includes("min"),max:!!s?.includes("max"),avg:!!s?.includes("avg"),var:!!s?.includes("var"),stddev:!!s?.includes("stddev"),percentileContinuous:!!s?.includes("percentile_cont"),percentileDiscrete:!!s?.includes("percentile_disc"),envelope:!!s?.includes("envelopeaggregate"),centroid:!!s?.includes("centroidaggregate"),convexHull:!!s?.includes("convexhullaggregate")}}function a(t){const s=t?.supportedNormalizationTypes?.map((t=>t.toLowerCase()));return{field:!!s?.includes("field"),log:!!s?.includes("log"),naturalLog:!!s?.includes("naturallog"),percentOfTotal:!!s?.includes("percentoftotal"),squareRoot:!!s?.includes("squareroot")}}function c(t,s){return{analytics:l(t),attachment:d(t),data:y(t),metadata:m(t),operations:g(t.capabilities,t,s),query:C(t,s),queryAttributeBins:S(t),queryRelated:v(t),queryTopFeatures:h(t),editing:f(t)}}function l(t){return{supportsCacheHint:n(t.advancedQueryCapabilities,"queryAnalytics")}}function d(t){const s=t.attachmentProperties,e={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:n(t.advancedQueryCapabilities,"queryAttachments"),supportsOrderByFields:jsonUtils_n(t.advancedQueryCapabilities,"supportsQueryAttachmentOrderByFields",!1),supportsResize:jsonUtils_n(t,"supportsAttachmentsResizing",!1)};return s&&Array.isArray(s)&&s.forEach((t=>{const s=o[t.name];s&&(e[s]=!!t.isEnabled)})),e}function y(t){return{isVersioned:jsonUtils_n(t,"isDataVersioned",!1),isBranchVersioned:jsonUtils_n(t,"isDataBranchVersioned",!1),supportsAttachment:jsonUtils_n(t,"hasAttachments",!1),supportsM:jsonUtils_n(t,"hasM",!1),supportsZ:jsonUtils_n(t,"hasZ",!1)}}function m(t){return{supportsAdvancedFieldProperties:jsonUtils_n(t,"supportsFieldDescriptionProperty",!1)}}function g(t,e,r){const o=t?.toLowerCase().split(",").map((t=>t.trim()))??[],u=r?(0,arcgisLayerUrl/* parse */.qg)(r):null,n=o.includes("MapServer"===u?.serverType?"data":"query"),i=o.includes("editing")&&!e.datesInUnknownTimezone&&!(!0===e.uniqueIdInfo?.OIDFieldContainsHashValue);let a=i&&o.includes("create"),c=i&&o.includes("delete"),l=i&&o.includes("update");const d=o.includes("changetracking"),y=e.advancedQueryCapabilities;return i&&!(a||c||l)&&(a=c=l=!0),{supportsCalculate:jsonUtils_n(e,"supportsCalculate",!1),supportsTruncate:jsonUtils_n(e,"supportsTruncate",!1),supportsValidateSql:jsonUtils_n(e,"supportsValidateSql",!1),supportsAdd:a,supportsDelete:c,supportsEditing:i,supportsChangeTracking:d,supportsQuery:n,supportsQueryAnalytics:jsonUtils_n(y,"supportsQueryAnalytic",!1),supportsQueryAttachments:jsonUtils_n(y,"supportsQueryAttachments",!1),supportsQueryBins:jsonUtils_n(y,"supportsQueryBins",!1)||!!e.queryBinsCapabilities,supportsQueryTopFeatures:jsonUtils_n(y,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:jsonUtils_n(e,"supportsAttachmentsResizing",!1),supportsSync:o.includes("sync"),supportsUpdate:l,supportsExceedsLimitStatistics:jsonUtils_n(e,"supportsExceedsLimitStatistics",!1),supportsAsyncConvert3D:jsonUtils_n(e,"supportsAsyncConvert3D",!1)}}function C(s,o){const i=s.advancedQueryCapabilities,a=s.ownershipBasedAccessControlForFeatures,c=s.archivingInfo,l=s.currentVersion,d=o?.includes("MapServer"),y=!d||l>=(0,has/* default */.A)("mapserver-pbf-version-support"),m=(0,arcgisLayerUrl/* isHostedAgolService */.Wo)(o),g=new Set((s.supportedQueryFormats??"").split(",").map((t=>t.toLowerCase().trim())));return{maxRecordCount:r(s,"maxRecordCount",void 0),maxRecordCountFactor:r(s,"maxRecordCountFactor",void 0),maxUniqueIDCount:r(s,"maxUniqueIDCount",void 0),standardMaxRecordCount:r(s,"standardMaxRecordCount",void 0),supportedSpatialAggregationStatistics:u(i),supportsCacheHint:jsonUtils_n(i,"supportsQueryWithCacheHint",!1)||n(i,"query"),supportsCentroid:jsonUtils_n(i,"supportsReturningGeometryCentroid",!1),supportsCompactGeometry:m,supportsCurrentUser:jsonUtils_n(i,"supportsCurrentUserQueries",!1),supportsDefaultSpatialReference:jsonUtils_n(i,"supportsDefaultSR",!1),supportsDisjointSpatialRelationship:jsonUtils_n(i,"supportsDisjointSpatialRel",!1),supportsDistance:jsonUtils_n(i,"supportsQueryWithDistance",!1),supportsDistinct:jsonUtils_n(i,"supportsDistinct",s.supportsAdvancedQueries),supportsExtent:jsonUtils_n(i,"supportsReturningQueryExtent",!1),supportsFormatPBF:y&&g.has("pbf"),supportsFullTextSearch:jsonUtils_n(i,"supportsFullTextSearch",!1),supportsGeometryProperties:jsonUtils_n(i,"supportsReturningGeometryProperties",!1),supportsHavingClause:jsonUtils_n(i,"supportsHavingClause",!1),supportsHistoricMoment:jsonUtils_n(c,"supportsQueryWithHistoricMoment",!1),supportsMaxRecordCountFactor:jsonUtils_n(i,"supportsMaxRecordCountFactor",!1),supportsOrderBy:jsonUtils_n(i,"supportsOrderBy",s.supportsAdvancedQueries),supportsPagination:jsonUtils_n(i,"supportsPagination",!1),supportsPaginationOnAggregatedQueries:jsonUtils_n(i,"supportsPaginationOnAggregatedQueries",!1),supportsPercentileStatistics:jsonUtils_n(i,"supportsPercentileStatistics",!1),supportsQuantization:jsonUtils_n(s,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:jsonUtils_n(s,"supportsQuantizationEditMode",!1),supportsQueryByAnonymous:jsonUtils_n(a,"allowAnonymousToQuery",!0),supportsQueryByOthers:jsonUtils_n(a,"allowOthersToQuery",!0),supportsQueryGeometry:jsonUtils_n(s,"supportsReturningQueryGeometry",!1),supportsResultType:jsonUtils_n(i,"supportsQueryWithResultType",!1),supportsReturnMesh:!!(0,infoFor3D/* getGltfQueryFormat */.Hz)(s.infoFor3D),supportsSpatialAggregationStatistics:jsonUtils_n(i,"supportsSpatialAggregationStatistics",!1),supportsSqlExpression:jsonUtils_n(i,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:jsonUtils_n(s,"useStandardizedQueries",!1),supportsStatistics:jsonUtils_n(i,"supportsStatistics",s.supportsStatistics),supportsTopFeaturesQuery:jsonUtils_n(i,"supportsTopFeaturesQuery",!1),supportsTrueCurve:jsonUtils_n(i,"supportsTrueCurve",!1),tileMaxRecordCount:r(s,"tileMaxRecordCount",void 0)}}function v(t){const s=t.advancedQueryCapabilities,e=jsonUtils_n(s,"supportsAdvancedQueryRelated",!1);return{supportsPagination:jsonUtils_n(s,"supportsQueryRelatedPagination",!1),supportsCount:e,supportsOrderBy:e,supportsCacheHint:n(s,"queryRelated")}}function h(t){return{supportsCacheHint:n(t.advancedQueryCapabilities,"queryTopFilter")}}function S(t){const s=t?t.queryBinsCapabilities:void 0;return{supportsDate:jsonUtils_n(s,"supportsDateBin",!1),supportsFixedInterval:jsonUtils_n(s,"supportsFixedIntervalBin",!1),supportsAutoInterval:jsonUtils_n(s,"supportsAutoIntervalBin",!1),supportsFixedBoundaries:jsonUtils_n(s,"supportsFixedBoundariesBin",!1),supportsStackBy:jsonUtils_n(s,"supportsStackBy",!1),supportsSplitBy:jsonUtils_n(s,"supportsSplitBy",!1),supportsSnapToData:jsonUtils_n(s,"supportsSnapToData",!1),supportsReturnFullIntervalBin:jsonUtils_n(s,"supportsReturnFullIntervalBin",!1),supportsFirstDayOfWeek:jsonUtils_n(s,"supportsFirstDayOfWeek",!1),supportsNormalization:jsonUtils_n(s,"supportsNormalization",!1),supportedStatistics:i(s),supportedNormalizationTypes:a(s)}}function f(t){const s=t.ownershipBasedAccessControlForFeatures,e=t?t.advancedEditingCapabilities:void 0;return{supportsGeometryUpdate:jsonUtils_n(t,"allowGeometryUpdates",!0),supportsGlobalId:jsonUtils_n(t,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:jsonUtils_n(t,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:jsonUtils_n(t,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:jsonUtils_n(t,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:jsonUtils_n(t,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:jsonUtils_n(s,"allowAnonymousToDelete",!0),supportsDeleteByOthers:jsonUtils_n(s,"allowOthersToDelete",!0),supportsUpdateByAnonymous:jsonUtils_n(s,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:jsonUtils_n(s,"allowOthersToUpdate",!0),supportsAsyncApplyEdits:jsonUtils_n(e,"supportsAsyncApplyEdits",!1),zDefault:r(t,"zDefault",void 0)}}function A(t){return{operations:{supportsAppend:jsonUtils_n(t,"supportsAppend",!1),supportsCoverageQuery:t?.playbackInfo?.klv["0601"]??!1,supportsExportClip:jsonUtils_n(t,"supportsExportClip",!1),supportsExportFrameset:jsonUtils_n(t,"supportsExportFrameset",!1),supportsMensuration:jsonUtils_n(t,"supportsMensuration",!1),supportsPreviews:jsonUtils_n(t,"supportsPreviews",!1),supportsUpdate:jsonUtils_n(t,"supportsUpdate",!1)}}}


/***/ }),

/***/ 23123:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63457);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const r=[];function t(t,e){if((0,_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_0__/* .isHostedAgolService */ .Wo)(t.url??""))return!0;const{wkid:o}=e;for(const d of r){if((t.version??0)>=d[0])return!0;if("function"==typeof d[1]&&(d[1]=d[1]()),d[1].has(o))return!1}return!0}r.push([10.91,()=>{const d=new Set([9709,9716,9741,9761,9766]);for(let r=9712;r<=9713;r++)d.add(r);for(let r=9748;r<=9749;r++)d.add(r);for(let r=20904;r<=20932;r++)d.add(r);for(let r=21004;r<=21032;r++)d.add(r);for(let r=21207;r<=21264;r++)d.add(r);for(let r=21307;r<=21364;r++)d.add(r);for(let r=23301;r<=23333;r++)d.add(r);for(let r=102759;r<=102760;r++)d.add(r);for(let r=102934;r<=102955;r++)d.add(r);return d}]),r.push([10.9,()=>{const d=new Set([9300,9354,9364,9367,9373,9377,9387,9456,9473,9498,9678,9680,29874,103599,103872,104028]);for(let r=9356;r<=9360;r++)d.add(r);for(let r=9404;r<=9407;r++)d.add(r);for(let r=9476;r<=9482;r++)d.add(r);for(let r=9487;r<=9494;r++)d.add(r);for(let r=9697;r<=9699;r++)d.add(r);return d}]),r.push([10.81,()=>{const d=new Set([9265,9333,103598,103699]);for(let r=9248;r<=9254;r++)d.add(r);for(let r=9271;r<=9273;r++)d.add(r);for(let r=9284;r<=9285;r++)d.add(r);for(let r=21453;r<=21463;r++)d.add(r);return d}]),r.push([10.8,()=>{const d=new Set([8088,8395,8428,8433,8531,8687,8692,8694,8699,8900,9003,9006,9009,9012,9017,9191]);for(let r=8035;r<=8036;r++)d.add(r);for(let r=8455;r<=8456;r++)d.add(r);for(let r=8518;r<=8529;r++)d.add(r);for(let r=8533;r<=8536;r++)d.add(r);for(let r=8538;r<=8540;r++)d.add(r);for(let r=8677;r<=8679;r++)d.add(r);for(let r=8902;r<=8903;r++)d.add(r);for(let r=8907;r<=8910;r++)d.add(r);for(let r=8949;r<=8951;r++)d.add(r);for(let r=8972;r<=8987;r++)d.add(r);for(let r=9039;r<=9040;r++)d.add(r);for(let r=9068;r<=9069;r++)d.add(r);for(let r=9140;r<=9141;r++)d.add(r);for(let r=9148;r<=9150;r++)d.add(r);for(let r=9153;r<=9159;r++)d.add(r);for(let r=9205;r<=9218;r++)d.add(r);for(let r=9221;r<=9222;r++)d.add(r);for(let r=54098;r<=54101;r++)d.add(r);return d}]),r.push([10.71,()=>{const d=new Set([6316]);for(let r=8351;r<=8353;r++)d.add(r);for(let r=9294;r<=9297;r++)d.add(r);for(let r=22619;r<=22621;r++)d.add(r);for(let r=103586;r<=103594;r++)d.add(r);return d}]);


/***/ }),

/***/ 93611:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fe: () => (/* binding */ k),
/* harmony export */   Nk: () => (/* binding */ u)
/* harmony export */ });
/* unused harmony exports applyCIMSymbolRotation, getCIMSymbolRotation, getCIMSymbolSize, getCIMSymbolType, scaleCIMMarker, scaleCIMSymbol, scaleCIMSymbolTo */
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93814);
/* harmony import */ var _cim_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77234);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function i(e){const a=t(e);if("CIMTextSymbol"===a?.type)return a.height??0;let n=0;if(a?.symbolLayers)for(const t of a.symbolLayers)r(t)&&null!=t.size&&t.size>n?n=t.size:o(t)&&null!=t.width&&t.width>n?n=t.width:s(t);return n}function c(e,o,r){if(!e)return;const a=t(e),n=i(e);if(0===n)return void l(a,o);f(a,o/n,!1,r)}function l(e,t){if(e)if("CIMTextSymbol"!==e.type){if(e.symbolLayers)for(const o of e.symbolLayers)switch(o.type){case"CIMPictureMarker":case"CIMVectorMarker":o.size=t;break;case"CIMPictureStroke":case"CIMSolidStroke":case"CIMGradientStroke":o.width=t}}else e.height=t}function f(e,t,o,r){if(e)if("CIMTextSymbol"!==e.type){if(o&&e.effects)for(const o of e.effects)M(o,t);if(e.symbolLayers)for(const o of e.symbolLayers){switch(o.type){case"CIMPictureMarker":case"CIMVectorMarker":m(o,t,r);break;case"CIMPictureStroke":case"CIMSolidStroke":case"CIMGradientStroke":!r?.preserveOutlineWidth&&o.width&&(o.width*=t);break;case"CIMPictureFill":o.height&&(o.height*=t),o.offsetX&&(o.offsetX*=t),o.offsetY&&(o.offsetY*=t);break;case"CIMHatchFill":f(o.lineSymbol,t,!0,{...r,preserveOutlineWidth:!1}),o.offsetX&&(o.offsetX*=t),o.offsetY&&(o.offsetY*=t),o.separation&&(o.separation*=t)}if(o.effects)for(const e of o.effects)M(e,t)}}else null!=e.height&&(e.height*=t)}function m(e,t,o){if(e&&(e.markerPlacement&&C(e.markerPlacement,t),e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t),e.anchorPoint&&"Absolute"===e.anchorPointUnits&&(e.anchorPoint={x:e.anchorPoint.x*t,y:e.anchorPoint.y*t}),e.size=null!=e.size?e.size*t:0,"CIMVectorMarker"===e.type&&e.markerGraphics))for(const r of e.markerGraphics)e.scaleSymbolsProportionally||f(r.symbol,t,!0,o)}function C(e,t){switch(a(e)&&e.offset&&(e.offset*=t),e.type){case"CIMMarkerPlacementAlongLineRandomSize":case"CIMMarkerPlacementAlongLineSameSize":if(e.customEndingOffset&&(e.customEndingOffset*=t),e.offsetAlongLine&&(e.offsetAlongLine*=t),e.placementTemplate&&e.placementTemplate.length){const o=e.placementTemplate.map((e=>e*t));e.placementTemplate=o}break;case"CIMMarkerPlacementAlongLineVariableSize":if(e.maxRandomOffset&&(e.maxRandomOffset*=t),e.placementTemplate&&e.placementTemplate.length){const o=e.placementTemplate.map((e=>e*t));e.placementTemplate=o}break;case"CIMMarkerPlacementOnLine":e.startPointOffset&&(e.startPointOffset*=t);break;case"CIMMarkerPlacementAtExtremities":e.offsetAlongLine&&(e.offsetAlongLine*=t);break;case"CIMMarkerPlacementAtMeasuredUnits":case"CIMMarkerPlacementOnVertices":break;case"CIMMarkerPlacementAtRatioPositions":e.beginPosition&&(e.beginPosition*=t),e.endPosition&&(e.endPosition*=t);break;case"CIMMarkerPlacementPolygonCenter":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t);break;case"CIMMarkerPlacementInsidePolygon":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t),e.stepX&&(e.stepX*=t),e.stepY&&(e.stepY*=t)}}function M(e,t){switch(e.type){case"CIMGeometricEffectArrow":case"CIMGeometricEffectDonut":e.width&&(e.width*=t);break;case"CIMGeometricEffectBuffer":e.size&&(e.size*=t);break;case"CIMGeometricEffectCut":e.beginCut&&(e.beginCut*=t),e.endCut&&(e.endCut*=t),e.middleCut&&(e.middleCut*=t);break;case"CIMGeometricEffectDashes":if(e.customEndingOffset&&(e.customEndingOffset*=t),e.offsetAlongLine&&(e.offsetAlongLine*=t),e.dashTemplate&&e.dashTemplate.length){const o=e.dashTemplate.map((e=>e*t));e.dashTemplate=o}break;case"CIMGeometricEffectExtension":case"CIMGeometricEffectJog":case"CIMGeometricEffectRadial":e.length&&(e.length*=t);break;case"CIMGeometricEffectMove":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t);break;case"CIMGeometricEffectOffset":case"CIMGeometricEffectOffsetTangent":e.offset&&(e.offset*=t);break;case"CIMGeometricEffectRegularPolygon":e.radius&&(e.radius*=t);break;case"CIMGeometricEffectTaperedPolygon":e.fromWidth&&(e.fromWidth*=t),e.length&&(e.length*=t),e.toWidth&&(e.toWidth*=t);break;case"CIMGeometricEffectWave":e.amplitude&&(e.amplitude*=t),e.period&&(e.period*=t)}}function u(o){const r=[];return y((0,_cim_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .toCIMSymbolJSON */ .lW)(o),r),r.length?new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A((0,_cim_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .normalizeAlpha */ .e6)(r[0])):null}function y(e,t){if(!e)return;let n;n="CIMTextSymbol"===e.type?e.symbol:e;const s="CIMPolygonSymbol"===e.type;if(n?.symbolLayers)for(const i of n.symbolLayers)if(!(i.colorLocked||s&&((0,_cim_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .isCIMStroke */ .mA)(i)||(0,_cim_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .isCIMMarker */ .MM)(i)&&i.markerPlacement&&(0,_cim_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .isCIMMarkerStrokePlacement */ .zr)(i.markerPlacement))))switch(i.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":i.tintColor&&p(t,i.tintColor);break;case"CIMVectorMarker":i.markerGraphics?.forEach((e=>{y(e.symbol,t)}));break;case"CIMSolidStroke":case"CIMSolidFill":p(t,i.color);break;case"CIMGradientFill":I(t,i);break;case"CIMHatchFill":y(i.lineSymbol,t)}}function p(e,t){for(const o of e)if(o.join(".")===t.join("."))return;e.push(t)}function I(e,t){const o=t.colorRamp?.type;switch(o){case"CIMMultipartColorRamp":t.colorRamp.colorRamps?.forEach((t=>{"CIMLinearContinuousColorRamp"===t.type&&b(e,t)}));break;case"CIMLinearContinuousColorRamp":case"CIMPolarContinuousColorRamp":b(e,t.colorRamp)}}function b(e,t){t&&(t.fromColor&&p(e,t.fromColor),t.toColor&&p(e,t.toColor))}function k(o,r,a){r instanceof _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A||(r=new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(r));const n=(0,_cim_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .toCIMSymbolJSON */ .lW)(o);n&&h(n,r,a)}function h(e,t,n){if(!e)return;let i;i="CIMTextSymbol"===e.type?e.symbol:e;const c="CIMPolygonSymbol"===i?.type;if(i?.symbolLayers)for(const l of i.symbolLayers){if(l.colorLocked)continue;if(c)if(n){const{layersToColor:e}=n;if(((0,_cim_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .isCIMStroke */ .mA)(l)||(0,_cim_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .isCIMMarker */ .MM)(l)&&l.markerPlacement&&(0,_cim_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .isCIMMarkerStrokePlacement */ .zr)(l.markerPlacement))&&"fill"===e||(0,_cim_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .isCIMFill */ .jn)(l)&&"outline"===e)continue}else if((0,_cim_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .isCIMStroke */ .mA)(l)||(0,_cim_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .isCIMMarker */ .MM)(l)&&l.markerPlacement&&(0,_cim_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .isCIMMarkerStrokePlacement */ .zr)(l.markerPlacement))continue;const e=t.toArray();switch(l.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":l.tintColor=e;break;case"CIMVectorMarker":l.markerGraphics?.forEach((e=>{h(e.symbol,t,n)}));break;case"CIMSolidStroke":case"CIMSolidFill":l.color=e;break;case"CIMGradientFill":d(l,t);break;case"CIMHatchFill":h(l.lineSymbol,t,n)}}}function d(e,t){const o=e.colorRamp?.type;switch(o){case"CIMMultipartColorRamp":e.colorRamp.colorRamps?.forEach((e=>{"CIMLinearContinuousColorRamp"===e.type&&P(e,t)}));break;case"CIMLinearContinuousColorRamp":case"CIMPolarContinuousColorRamp":P(e.colorRamp,t)}}function P(e,t){if(e&&(e.fromColor&&(e.fromColor=t.toArray()),e.toColor)){const o=t.clone();o.a=0,e.toColor=o.toArray()}}function g(e,o=!1){const r=t(e);if("CIMTextSymbol"===r?.type||"CIMPointSymbol"===r?.type){const e=r.angle;return null!=e&&o?360-e:e??0}return 0}function S(e,o,a=!1){const n=t(e);if(a&&(o=360-o),"CIMTextSymbol"!==n?.type){if("CIMPointSymbol"===n?.type&&n.symbolLayers){const e=o-(n.angle||0);for(const t of n.symbolLayers)if(r(t)){let o=t.rotation||0;t.rotateClockwise?o-=e:o+=e,t.rotation=o}n.angle=o}}else n.angle=o}function L(e){const o=t(e);if(!o)return null;switch(o.type){case"CIMPointSymbol":return"CIMPointSymbol";case"CIMLineSymbol":return"CIMLineSymbol";case"CIMPolygonSymbol":return"CIMPolygonSymbol";case"CIMTextSymbol":return"CIMTextSymbol";case"CIMMeshSymbol":return"CIMMeshSymbol";default:return null}}


/***/ }),

/***/ 24461:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  dt: () => (/* binding */ L),
  GG: () => (/* binding */ N),
  UQ: () => (/* binding */ M),
  Sx: () => (/* binding */ utils_w)
});

// UNUSED EXPORTS: applyOpacityToColor, getCSSFilterFromEffectList, getIconHref, getSymbolOutlineColor, getSymbolOutlineSize, isVolumetricSymbol, symbolHasExtrudeSymbolLayer

// EXTERNAL MODULE: ./node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(93814);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/asyncUtils.js
var asyncUtils = __webpack_require__(3132);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(19913);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/effects/jsonUtils.js + 1 modules
var jsonUtils = __webpack_require__(39410);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/support/cimSymbolUtils.js
var cimSymbolUtils = __webpack_require__(93611);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/assets.js
var assets = __webpack_require__(44764);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(38116);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/LRUCache.js + 1 modules
var LRUCache = __webpack_require__(49481);
;// ./node_modules/@arcgis/core/symbols/support/gfxUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const gfxUtils_i="picture-fill",a="simple-fill",l="simple-line",c="simple-marker",h="text",d="cim",m=new Map([["dash",[4,3]],["dashdot",[4,3,1,3]],["dot",[1,3]],["longdash",[8,3]],["longdashdot",[8,3,1,3]],["longdashdotdot",[8,3,1,3,1,3]],["shortdash",[4,1]],["shortdashdot",[4,1,1,1]],["shortdashdotdot",[4,1,1,1,1,1]],["shortdot",[1,1]],["solid",[]]]),p=new LRUCache/* LRUCache */.q(1e3);function u(e){const o=e.style;let s=null;if(e)switch(e.type){case c:"cross"!==o&&"x"!==o&&(s=e.color);break;case a:o&&"solid"!==o?"none"!==o&&(s={type:"pattern",x:0,y:0,src:t(`esri/symbols/patterns/${o}.png`),width:5,height:5}):s=e.color;break;case gfxUtils_i:s={type:"pattern",src:e.url,width:r(e.width)*e.xscale,height:r(e.height)*e.yscale,x:r(e.xoffset),y:r(e.yoffset)};break;case h:s=e.color;break;case d:s=n(e)}return s}function f(t,e){const s=t+"-"+e;return void 0!==p.get(s)?Promise.resolve(p.get(s)):o(t,{responseType:"image"}).then((t=>{const o=t.data,r=o.naturalWidth,n=o.naturalHeight,i=document.createElement("canvas");i.width=r,i.height=n;const a=i.getContext("2d");a.fillStyle=e,a.fillRect(0,0,r,n),a.globalCompositeOperation="destination-in",a.drawImage(o,0,0);const l=i.toDataURL();return p.put(s,l),l}))}function y(t){if(!t)return null;let e=null;switch(t.type){case a:case gfxUtils_i:case c:e=y(t.outline);break;case l:{const o=r(t.width);null!=t.style&&"none"!==t.style&&0!==o&&(e={color:t.color,style:w(t.style),width:o,cap:t.cap,join:"miter"===t.join?r(t.miterLimit):t.join},e.dashArray=g(e).join(",")||"none");break}default:e=null}return e}function g(t){if(!t?.style)return[];const{dashArray:e,style:o,width:s}=t;if("string"==typeof e&&"none"!==e)return e.split(",").map((t=>Number(t)));const r=s??0,n=m.has(o)?m.get(o).map((t=>t*r)):[];if("butt"!==t.cap)for(const[i,a]of n.entries())n[i]=i%2==1?a+r:Math.max(a-r,1);return n}const w=(()=>{const t={};return e=>{if(t[e])return t[e];const o=e.replaceAll("-","");return t[e]=o,o}})(),b=new Color/* default */.A([128,128,128]);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/support/Symbol3DMaterial.js + 1 modules
var Symbol3DMaterial = __webpack_require__(2933);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/support/typeUtils.js + 1 modules
var typeUtils = __webpack_require__(59343);
;// ./node_modules/@arcgis/core/symbols/support/utils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const utils_a=new Color/* default */.A("white");function utils_f(e){const t=e.symbolLayers?.at(-1);if(t&&"outline"in t)return t?.outline?.size}function utils_m(e){if(!e)return 0;if(s(e)){const t=utils_f(e);return null!=t?t:0}return r(i(e)?.width)}function utils_y(e){const t=e.symbolLayers?.at(-1);if(t&&"outline"in t)return t?.outline?.color}function utils_p(t){if(!t)return null;if(s(t))return utils_y(t);const r=i(t)?.color;return r?new e(r):null}function utils_h(e){if(null==e||!("symbolLayers"in e)||null==e.symbolLayers)return!1;switch(e.type){case"point-3d":return e.symbolLayers.some((e=>"object"===e.type));case"line-3d":return e.symbolLayers.some((e=>"path"===e.type));case"polygon-3d":return e.symbolLayers.some((e=>"object"===e.type||"extrude"===e.type));default:return!1}}function utils_b(e){return e.resource?.href??""}function utils_w(t,r){if(!t)return null;let o=null;return (0,typeUtils/* isSymbol3D */.wk)(t)?o=utils_d(t):(0,typeUtils/* isSymbol2D */.$y)(t)&&(o="cim"===t.type?(0,cimSymbolUtils/* getCIMSymbolColor */.Nk)(t):t.color?new Color/* default */.A(t.color):null),o?j(o,r):null}function utils_d(t){const r=t.symbolLayers;if(!r)return null;let o=null;return r.forEach((e=>{"object"===e.type&&e.resource?.href||(o="water"===e.type?e.color:e.material?e.material.color:null)})),o?new Color/* default */.A(o):null}function j(t,r){if(null==r||null==t)return t;const o=t.toRgba();return o[3]=o[3]*r,new Color/* default */.A(o)}function k(e,t,r){const o=e.symbolLayers;if(!o)return;const n=e=>j(t??e??(null!=r?utils_a:null),r);o.forEach((e=>{if("object"!==e.type||!e.resource?.href||t)if("water"===e.type)e.color=n(e.color);else{const t=null!=e.material?e.material.color:null,o=n(t);if(null==e.material?e.material=new Symbol3DMaterial/* Symbol3DMaterial */.N({color:o}):e.material.color=o,null!=r&&"outline"in e&&null!=e.outline?.color&&(e.outline.color=j(e.outline.color,r)),"marker"in e&&null!=e.marker){const t=n(e.marker.color);e.marker.color=t}}}))}function utils_g(e,t,r){(t=t??e.color)&&(e.color=j(t,r)),null!=r&&"outline"in e&&e.outline?.color&&(e.outline.color=j(e.outline.color,r))}function L(t,r,o){t&&(r||null!=o)&&(r&&(r=new Color/* default */.A(r)),(0,typeUtils/* isSymbol3D */.wk)(t)?k(t,r,o):(0,typeUtils/* isSymbol2D */.$y)(t)&&utils_g(t,r,o))}async function z(e,r){const o=e.symbolLayers;o&&await (0,asyncUtils/* forEach */.jJ)(o,(async e=>x(e,r)))}async function x(e,t){switch(e.type){case"extrude":v(e,t);break;case"icon":case"line":case"text":S(e,t);break;case"path":O(e,t);break;case"object":await E(e,t)}}function S(e,t){const r=U(t);null!=r&&(e.size=r)}function U(e){for(const t of e)if("number"==typeof t)return t;return null}function v(e,t){const r=t[2];"number"==typeof r&&(e.size=r)}async function E(e,t){const{resourceSize:r,symbolSize:o}=await C(e),n=R(t,r,o);null!=n&&(e.width=D(t[0],o[0],r[0],n),e.depth=D(t[1],o[1],r[1],n),e.height=D(t[2],o[2],r[2],n))}function O(e,t){const r=R(t,vec3f64/* ONES */.Un,[e.width,void 0,e.height]);null!=r&&(e.width=D(t[0],e.width,1,r),e.height=D(t[2],e.height,1,r))}function R(e,t,r){for(let o=0;o<3;o++){const n=e[o];switch(n){case"symbol-value":{const e=r[o];return null!=e?e/t[o]:1}case"proportional":break;default:if(n&&t[o])return n/t[o]}}return null}async function C(e){const{computeObjectLayerResourceSize:t}=await __webpack_require__.e(/* import() */ 8401).then(__webpack_require__.bind(__webpack_require__, 8401)),r=await t(e,10),{width:o,height:n,depth:l}=e,i=[o,l,n];let c=1;for(let s=0;s<3;s++){const e=i[s];if(null!=e){c=e/r[s];break}}for(let s=0;s<3;s++)null==i[s]&&(i[s]=r[s]*c);return{resourceSize:r,symbolSize:i}}function D(e,t,r,o){switch(e){case"proportional":return r*o;case"symbol-value":return null!=t?t:r;default:return e}}function J(e,t){const r=U(t);if(null!=r)switch(e.type){case"simple-marker":e.size=r;break;case"picture-marker":{const t=e.width/e.height;t>1?(e.width=r,e.height=r*t):(e.width=r*t,e.height=r);break}case"simple-line":e.width=r;break;case"text":e.font.size=r}}async function M(e,t){if(e&&t)return (0,typeUtils/* isSymbol3D */.wk)(e)?z(e,t):void((0,typeUtils/* isSymbol2D */.$y)(e)&&J(e,t))}function N(e,t,r){if(e&&null!=t)if((0,typeUtils/* isSymbol3D */.wk)(e)){const o=e.symbolLayers;o&&o.forEach((e=>{if("object"===e.type)switch(r){case"tilt":e.tilt=(e.tilt??0)+t;break;case"roll":e.roll=(e.roll??0)+t;break;default:e.heading=(e.heading??0)+t}"icon"===e.type&&(e.angle+=t)}))}else (0,typeUtils/* isSymbol2D */.$y)(e)&&("simple-marker"!==e.type&&"picture-marker"!==e.type&&"text"!==e.type||(e.angle+=t))}function q(e){if(!e)return null;const t=e.effects.filter((e=>"bloom"!==e.type)).map((e=>e.toJSON()));return n(t)}function A(e){return null!=e&&"polygon-3d"===e.type&&e.symbolLayers.some((e=>"extrude"===e.type))}


/***/ }),

/***/ 6893:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TA: () => (/* binding */ t),
/* harmony export */   We: () => (/* binding */ o),
/* harmony export */   Z3: () => (/* binding */ n),
/* harmony export */   ZJ: () => (/* binding */ i),
/* harmony export */   w5: () => (/* binding */ c)
/* harmony export */ });
/* unused harmony exports versionCollection, versionCollectionCount */
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38116);
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1874);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const t=(0,_core_uuid_js__WEBPACK_IMPORTED_MODULE_1__/* .generateLowercaseBracedUUID */ .vD)(),n=new Map,s=new Map,a=new Map;async function o(r,t,s){if(!r||!s)return!1;if(!t)return!0;const a=new URL(r).host;let o=n.get(a);if(!o){const t=r.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,"");o=(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t,{responseType:"json",query:{f:"json"}})).data.defaultVersionName}return o===t}async function i(e,r,n=!1){if(!e||!r)return!0;const a=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),o=s.get(a)?.entries();if(o)for(const[s,i]of o)if(i.name===r){const e=!i.stack?.hasForwardEdits();if(!e&&n){const[{deleteForwardEdits:e},{default:r}]=await Promise.all([__webpack_require__.e(/* import() */ 71611).then(__webpack_require__.bind(__webpack_require__, 71611)),__webpack_require__.e(/* import() */ 1767).then(__webpack_require__.bind(__webpack_require__, 1767))]),n=await e(a,s,new r({sessionId:t,moment:i.moment}));return n.success&&i.stack?.clearForwardEdits(),n.success}return e}return!0}function c(e,r){if(!e)return!1;const t=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),n=s.get(t)?.entries();if(n)for(const[s,a]of n)if(a.name===r){return"edit"===a.lockType}return!1}


/***/ }),

/***/ 29759:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ A)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var A;!function(A){A[A.SAVE=0]="SAVE",A[A.SAVE_AS=1]="SAVE_AS"}(A||(A={}));


/***/ })

};
;