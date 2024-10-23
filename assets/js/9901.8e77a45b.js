"use strict";
exports.id = 9901;
exports.ids = [9901,8751];
exports.modules = {

/***/ 76287:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ e),
/* harmony export */   c: () => (/* binding */ n),
/* harmony export */   f: () => (/* binding */ t)
/* harmony export */ });
/* unused harmony exports b, m */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(){return[1,0,0,0,1,0,0,0,1]}function r(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]}function t(e,r,t,n,o,a,u,c,f){return[e,r,t,n,o,a,u,c,f]}function n(e,r){return new Float64Array(e,r,9)}const o=Object.freeze(Object.defineProperty({__proto__:null,clone:r,create:e,createView:n,fromValues:t},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 76743:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ O),
/* harmony export */   c: () => (/* binding */ B),
/* harmony export */   g: () => (/* binding */ x),
/* harmony export */   j: () => (/* binding */ K),
/* harmony export */   k: () => (/* binding */ T),
/* harmony export */   m: () => (/* binding */ y),
/* harmony export */   s: () => (/* binding */ v)
/* harmony export */ });
/* unused harmony exports A, B, C, D, E, F, G, b, d, e, f, h, i, l, n, o, p, q, r, t, u, v, w, x, y, z */
/* harmony import */ var _mat3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76287);
/* harmony import */ var _quatf64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46991);
/* harmony import */ var _vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22279);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57137);
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21839);
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25102);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function P(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function v(t,s,a){a*=.5;const n=Math.sin(a);return t[0]=n*s[0],t[1]=n*s[1],t[2]=n*s[2],t[3]=Math.cos(a),t}function x(t,s){const a=2*Math.acos(s[3]),n=Math.sin(a/2);return n>(0,_common_js__WEBPACK_IMPORTED_MODULE_3__.g)()?(t[0]=s[0]/n,t[1]=s[1]/n,t[2]=s[2]/n):(t[0]=1,t[1]=0,t[2]=0),a}function y(t,s,a){const n=s[0],o=s[1],r=s[2],e=s[3],c=a[0],u=a[1],i=a[2],h=a[3];return t[0]=n*h+e*c+o*i-r*u,t[1]=o*h+e*u+r*c-n*i,t[2]=r*h+e*i+n*u-o*c,t[3]=e*h-n*c-o*u-r*i,t}function A(t,s,a){a*=.5;const n=s[0],o=s[1],r=s[2],e=s[3],c=Math.sin(a),u=Math.cos(a);return t[0]=n*u+e*c,t[1]=o*u+r*c,t[2]=r*u-o*c,t[3]=e*u-n*c,t}function I(t,s,a){a*=.5;const n=s[0],o=s[1],r=s[2],e=s[3],c=Math.sin(a),u=Math.cos(a);return t[0]=n*u-r*c,t[1]=o*u+e*c,t[2]=r*u+n*c,t[3]=e*u-o*c,t}function _(t,s,a){a*=.5;const n=s[0],o=s[1],r=s[2],e=s[3],c=Math.sin(a),u=Math.cos(a);return t[0]=n*u+o*c,t[1]=o*u-n*c,t[2]=r*u+e*c,t[3]=e*u-r*c,t}function z(t,s){const a=s[0],n=s[1],o=s[2];return t[0]=a,t[1]=n,t[2]=o,t[3]=Math.sqrt(Math.abs(1-a*a-n*n-o*o)),t}function E(t,s,a,n){const r=s[0],e=s[1],c=s[2],u=s[3];let i,h,M,f,l,m=a[0],p=a[1],q=a[2],g=a[3];return h=r*m+e*p+c*q+u*g,h<0&&(h=-h,m=-m,p=-p,q=-q,g=-g),1-h>(0,_common_js__WEBPACK_IMPORTED_MODULE_3__.g)()?(i=Math.acos(h),M=Math.sin(i),f=Math.sin((1-n)*i)/M,l=Math.sin(n*i)/M):(f=1-n,l=n),t[0]=f*r+l*m,t[1]=f*e+l*p,t[2]=f*c+l*q,t[3]=f*u+l*g,t}function k(t){const s=_common_js__WEBPACK_IMPORTED_MODULE_3__.R,a=s(),n=s(),o=s(),e=Math.sqrt(1-a),c=Math.sqrt(a);return t[0]=e*Math.sin(2*Math.PI*n),t[1]=e*Math.cos(2*Math.PI*n),t[2]=c*Math.sin(2*Math.PI*o),t[3]=c*Math.cos(2*Math.PI*o),t}function L(t,s){const a=s[0],n=s[1],o=s[2],r=s[3],e=a*a+n*n+o*o+r*r,c=e?1/e:0;return t[0]=-a*c,t[1]=-n*c,t[2]=-o*c,t[3]=r*c,t}function O(t,s){return t[0]=-s[0],t[1]=-s[1],t[2]=-s[2],t[3]=s[3],t}function S(t,s){const a=s[0]+s[4]+s[8];let n;if(a>0)n=Math.sqrt(a+1),t[3]=.5*n,n=.5/n,t[0]=(s[5]-s[7])*n,t[1]=(s[6]-s[2])*n,t[2]=(s[1]-s[3])*n;else{let a=0;s[4]>s[0]&&(a=1),s[8]>s[3*a+a]&&(a=2);const o=(a+1)%3,r=(a+2)%3;n=Math.sqrt(s[3*a+a]-s[3*o+o]-s[3*r+r]+1),t[a]=.5*n,n=.5/n,t[3]=(s[3*o+r]-s[3*r+o])*n,t[o]=(s[3*o+a]+s[3*a+o])*n,t[r]=(s[3*r+a]+s[3*a+r])*n}return t}function T(t,s,a,n){const o=.5*Math.PI/180;s*=o,a*=o,n*=o;const r=Math.sin(s),e=Math.cos(s),c=Math.sin(a),u=Math.cos(a),i=Math.sin(n),h=Math.cos(n);return t[0]=r*u*h-e*c*i,t[1]=e*c*h+r*u*i,t[2]=e*u*i-r*c*h,t[3]=e*u*h+r*c*i,t}function w(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}const B=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.c,C=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.s,D=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.a,F=y,G=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.b,R=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.d,W=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.l,X=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.f,Y=X,Z=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.g,H=Z,J=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.n,K=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.h,N=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.e;function Q(t,s,a){const n=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.j)(s,a);return n<-.999999?((0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.b)(U,V,s),(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.k)(U)<1e-6&&(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.b)(U,$,s),(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.n)(U,U),v(t,U,Math.PI),t):n>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):((0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.b)(U,s,a),t[0]=U[0],t[1]=U[1],t[2]=U[2],t[3]=1+n,J(t,t))}const U=(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),V=(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.f)(1,0,0),$=(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.f)(0,1,0);function tt(t,s,a,n,o,r){return E(st,s,o,r),E(at,a,n,r),E(t,st,at,2*r*(1-r)),t}const st=(0,_quatf64_js__WEBPACK_IMPORTED_MODULE_1__.a)(),at=(0,_quatf64_js__WEBPACK_IMPORTED_MODULE_1__.a)();function nt(t,s,a,n){const o=ot;return o[0]=a[0],o[3]=a[1],o[6]=a[2],o[1]=n[0],o[4]=n[1],o[7]=n[2],o[2]=-s[0],o[5]=-s[1],o[8]=-s[2],J(t,S(t,o))}const ot=(0,_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__.a)(),rt=Object.freeze(Object.defineProperty({__proto__:null,add:D,calculateW:z,conjugate:O,copy:B,dot:R,equals:N,exactEquals:K,fromEuler:T,fromMat3:S,getAxisAngle:x,identity:P,invert:L,len:Y,length:X,lerp:W,mul:F,multiply:y,normalize:J,random:k,rotateX:A,rotateY:I,rotateZ:_,rotationTo:Q,scale:G,set:C,setAxes:nt,setAxisAngle:v,slerp:E,sqlerp:tt,sqrLen:H,squaredLength:Z,str:w},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 46991:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ o),
/* harmony export */   a: () => (/* binding */ e),
/* harmony export */   b: () => (/* binding */ r),
/* harmony export */   c: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony exports f, q */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(){return[0,0,0,1]}function r(e){return[e[0],e[1],e[2],e[3]]}function t(e,r,t,n){return[e,r,t,n]}function n(e,r){return new Float64Array(e,r,4)}const o=e(),a=Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:o,clone:r,create:e,createView:n,fromValues:t},Symbol.toStringTag,{value:"Module"}));


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

/***/ 35775:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  P: () => (/* binding */ m),
  L: () => (/* binding */ S)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(52495);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/defaultsStoreUtils.js
var defaultsStoreUtils = __webpack_require__(52700);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/PropertyOrigin.js
var PropertyOrigin = __webpack_require__(94255);
;// ../node_modules/@arcgis/core/core/accessorSupport/MultiOriginStore.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class MultiOriginStore_r{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(PropertyOrigin/* OriginIdNum */.Qg),this._values=new Map,this.multipleOriginsSupported=!0}clone(i){const o=new MultiOriginStore_r,n=this._originStores[PropertyOrigin/* OriginId */.Gr.DEFAULTS];n&&n.forEach(((s,r)=>{o.set(r,(0,lang/* clone */.o8)(s),PropertyOrigin/* OriginId */.Gr.DEFAULTS)}));for(let r=PropertyOrigin/* OriginId */.Gr.SERVICE;r<PropertyOrigin/* OriginIdNum */.Qg;r++){const s=this._originStores[r];s&&s.forEach(((s,e)=>{i&&i.has(e)||o.set(e,(0,lang/* clone */.o8)(s),r)}))}return o}get(t,s){const e=void 0===s?this._values:this._originStores[s];return e?e.get(t):void 0}keys(t){const s=null==t?this._values:this._originStores[t];return s?[...s.keys()]:[]}set(t,s,r=PropertyOrigin/* OriginId */.Gr.USER){let i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(t,s),!this._values.has(t)||this._propertyOriginMap.get(t)<=r){const e=this._values.get(t);return this._values.set(t,s),this._propertyOriginMap.set(t,r),e!==s}return!1}delete(t,s=PropertyOrigin/* OriginId */.Gr.USER){const r=this._originStores[s];if(!r)return;const i=r.get(t);if(r.delete(t),this._values.has(t)&&this._propertyOriginMap.get(t)===s){this._values.delete(t);for(let e=s-1;e>=0;e--){const s=this._originStores[e];if(s&&s.has(t)){this._values.set(t,s.get(t)),this._propertyOriginMap.set(t,e);break}}}return i}has(t,s){const e=void 0===s?this._values:this._originStores[s];return!!e&&e.has(t)}revert(t,s){for(;s>0&&!this.has(t,s);)--s;const e=this._originStores[s],r=e?.get(t),i=this._values.get(t);return this._values.set(t,r),this._propertyOriginMap.set(t,s),i!==r}originOf(t){return this._propertyOriginMap.get(t)||PropertyOrigin/* OriginId */.Gr.DEFAULTS}forEach(t){this._values.forEach(t)}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/read.js
var read = __webpack_require__(83312);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/utils.js
var utils = __webpack_require__(55135);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
;// ../node_modules/@arcgis/core/core/ReadOnlyMultiOriginJSONSupport.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const u=t=>{let u=class extends t{constructor(...r){super(...r);const t=(0,utils/* getProperties */.oY)(this),e=t.store,i=new MultiOriginStore_r;t.store=i,(0,defaultsStoreUtils/* setupConstructedDefaults */.k)(t,e,i)}read(r,t){(0,read/* read */.L)(this,r,t)}getAtOrigin(r,t){const s=a(this),o=(0,PropertyOrigin/* nameToId */.aB)(t);if("string"==typeof r)return s.get(r,o);const i={};return r.forEach((r=>{i[r]=s.get(r,o)})),i}originOf(r){return (0,PropertyOrigin/* idToName */.OL)(this.originIdOf(r))}originIdOf(r){return a(this).originOf(r)}revert(r,t){const s=a(this),o=(0,PropertyOrigin/* nameToId */.aB)(t),i=(0,utils/* getProperties */.oY)(this);let c;c="string"==typeof r?"*"===r?s.keys(o):[r]:r,c.forEach((r=>{i.invalidate(r),s.revert(r,o),i.commit(r)}))}};return u=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.core.ReadOnlyMultiOriginJSONSupport")],u),u};function a(r){return (0,utils/* getProperties */.oY)(r).store}let f=class extends(u(Accessor/* default */.A)){};f=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.core.ReadOnlyMultiOriginJSONSupport")],f);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/get.js
var get = __webpack_require__(45066);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/write.js
var write = __webpack_require__(77373);
;// ../node_modules/@arcgis/core/core/MultiOriginJSONSupport.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const l=t=>{let s=class extends t{constructor(...r){super(...r)}clear(r,t="user"){return O(this).delete(r,(0,PropertyOrigin/* nameToId */.aB)(t))}write(r,t){return (0,write/* write */.M)(this,r=r||{},t),r}setAtOrigin(r,t,s){(0,utils/* getProperties */.oY)(this).setAtOrigin(r,t,(0,PropertyOrigin/* nameToId */.aB)(s))}removeOrigin(r){const t=O(this),s=(0,PropertyOrigin/* nameToId */.aB)(r),e=t.keys(s);for(const o of e)t.originOf(o)===s&&t.set(o,t.get(o,s),PropertyOrigin/* OriginId */.Gr.USER)}updateOrigin(r,t){const s=O(this),i=(0,PropertyOrigin/* nameToId */.aB)(t),c=(0,get/* get */.Jt)(this,r);for(let e=i+1;e<PropertyOrigin/* OriginIdNum */.Qg;++e)s.delete(r,e);s.set(r,c,i)}toJSON(r){return this.write({},r)}};return s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.core.WriteableMultiOriginJSONSupport")],s),s.prototype.toJSON.isDefaultToJSON=!0,s};function O(r){return (0,utils/* getProperties */.oY)(r).store}const m=t=>{let e=class extends(l(u(t))){constructor(...r){super(...r)}};return e=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.core.MultiOriginJSONSupport")],e),e};let S=class extends(m(Accessor/* default */.A)){};S=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.core.MultiOriginJSONSupport")],S);


/***/ }),

/***/ 77841:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ j)
/* harmony export */ });
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/* harmony import */ var _MD5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69075);
/* harmony import */ var _multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55750);
/* harmony import */ var _urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20909);
/* harmony import */ var _uuid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33880);
/* harmony import */ var _metadata_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10245);
/* harmony import */ var _PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94255);
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21564);
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12071);
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63680);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function j(t){const r=t?.origins??[void 0];return(e,o)=>{const s=U(t,e,o);for(const t of r){const r=(0,_property_js__WEBPACK_IMPORTED_MODULE_6__/* .propertyJSONMeta */ .rM)(e,t,o);for(const t in s)r[t]=s[t]}}}function U(t,r,e){if("resource"===t?.type)return w(t,r,e);switch(t?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:t,write:r}=_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__.a;return{read:t,write:r}}}}function w(t,r,n){const i=(0,_metadata_js__WEBPACK_IMPORTED_MODULE_4__/* .getPropertyMetadata */ .z4)(r,n);return{type:String,read:(t,r,e)=>{const o=(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__.r)(t,r,e);return i.type===String?o:"function"==typeof i.type?new i.type({url:o}):void 0},write:{writer(r,p,c,u){if(!u?.resources)return"string"==typeof r?void(p[c]=(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__.t)(r,u)):void(p[c]=r.write({},u));const l=x(r),m=(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__.t)(l,{...u,verifyItemRelativeUrls:u?.verifyItemRelativeUrls?{writtenUrls:u.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__.M.NO),d=i.type!==String&&(!(0,_multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .isMultiOriginJSONMixin */ .H)(this)||u?.origin&&this.originIdOf(n)>(0,_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_5__/* .nameToId */ .aB)(u.origin)),h={object:this,propertyName:n,value:r,targetUrl:m,dest:p,targetPropertyName:c,context:u,params:t};u?.portalItem&&m&&!(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isAbsolute */ .oP)(m)?d&&t?.contentAddressed?I(h):d?N(h):P(h):u?.portalItem&&(null==m||null!=(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__.i)(m)||(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isBlobProtocol */ .w8)(m)||d)?I(h):p[c]=m}}}}function I(e){const{targetUrl:o,params:p,value:u,context:a,dest:l,targetPropertyName:d}=e;if(!a.portalItem)return;const f=(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__.p)(o),y=b(u,o,a);if(p?.contentAddressed&&"json"!==y.type)return void a.messages?.push(new _Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("persistable:contentAddressingUnsupported",`Property "${d}" is trying to serializing a resource with content of type ${y.type} with content addressing. Content addressing is only supported for json resources.`,{content:y}));const g=p?.contentAddressed&&"json"===y.type?(0,_MD5_js__WEBPACK_IMPORTED_MODULE_1__/* .createMD5Hash */ .d)(y.jsonString):f?.filename??(0,_uuid_js__WEBPACK_IMPORTED_MODULE_3__/* .generateUUID */ .lk)(),v=(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(p?.prefix??f?.prefix,g),j=`${v}.${(0,_portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_7__/* .getResourceContentExtension */ .n)(y)}`;if(p?.contentAddressed&&a.resources&&"json"===y.type){const t=a.resources.toKeep.find((t=>t.resource.path===j))??a.resources.toAdd.find((t=>t.resource.path===j));if(t)return void(l[d]=t.resource.itemRelativeUrl)}const U=a.portalItem.resourceFromPath(j);(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isBlobProtocol */ .w8)(o)&&a.resources&&a.resources.pendingOperations.push((0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .blobUrlToBlob */ .tk)(o).then((t=>{U.path=`${v}.${(0,_portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_7__/* .getResourceContentExtension */ .n)({type:"blob",blob:t})}`,l[d]=U.itemRelativeUrl})).catch((()=>{})));const w=p?.compress??!1;a.resources&&S({...e,resource:U,content:y,compress:w,updates:a.resources.toAdd}),l[d]=U.itemRelativeUrl}function N(t){const{context:r,targetUrl:e,params:o,value:s,dest:n,targetPropertyName:i}=t;if(!r.portalItem)return;const c=r.portalItem.resourceFromPath(e),u=b(s,e,r),a=(0,_portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_7__/* .getResourceContentExtension */ .n)(u),l=(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getPathExtension */ .Zo)(c.path),d=o?.compress??!1;a===l?(r.resources&&S({...t,resource:c,content:u,compress:d,updates:r.resources.toUpdate}),n[i]=e):I(t)}function P({context:t,targetUrl:r,dest:e,targetPropertyName:o}){t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(r),compress:!1}),e[o]=r)}function S({object:t,propertyName:r,updates:e,resource:o,content:s,compress:n}){e.push({resource:o,content:s,compress:n,finish:e=>{O(t,r,e)}})}function b(t,r,e){return"string"==typeof t?{type:"url",url:r}:{type:"json",jsonString:JSON.stringify(t.toJSON(e))}}function x(t){return null==t?null:"string"==typeof t?t:t.url}function O(t,r,e){"string"==typeof t[r]?t[r]=e.url:t[r].url=e.url}


/***/ }),

/***/ 73324:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ a)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const a=(a=>a)(["operational-layers","basemap","ground"]);


/***/ }),

/***/ 34541:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55750);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function i(i){i?.writtenProperties&&i.writtenProperties.forEach((({target:i,propName:t,newOrigin:e})=>{(0,_multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isMultiOriginJSONMixin */ .H)(i)&&e&&i.originOf(t)!==e&&i.updateOrigin(t,e)}))}


/***/ }),

/***/ 55750:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ i)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function i(i){return i&&"getAtOrigin"in i&&"originOf"in i}


/***/ }),

/***/ 89901:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ VoxelLayer_M)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/PopupTemplate.js + 3 modules
var PopupTemplate = __webpack_require__(56542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(48982);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(35775);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3.js
var vec3 = __webpack_require__(21839);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3f64.js
var vec3f64 = __webpack_require__(22279);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(84698);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/Layer.js + 1 modules
var Layer = __webpack_require__(68833);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/APIKeyMixin.js
var APIKeyMixin = __webpack_require__(50193);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/ArcGISService.js
var ArcGISService = __webpack_require__(45681);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(41506);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/PortalLayer.js
var PortalLayer = __webpack_require__(34722);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js
var ScaleRangeLayer = __webpack_require__(25389);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/SceneService.js + 1 modules
var SceneService = __webpack_require__(68821);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js
var arcgisLayerUrl = __webpack_require__(16123);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/commonProperties.js + 1 modules
var commonProperties = __webpack_require__(84356);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/Field.js
var Field = __webpack_require__(24738);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(24793);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Cyclical.js
var Cyclical = __webpack_require__(17505);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/persistable.js
var persistable = __webpack_require__(77841);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/quat.js
var quat = __webpack_require__(76743);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/quatf64.js
var quatf64 = __webpack_require__(46991);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/common.js
var common = __webpack_require__(57137);
;// ../node_modules/@arcgis/core/layers/voxel/voxelPlaneUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const h=(0,vec3f64.c)(),i=(0,quatf64.a)(),p=(0,quatf64.a)(),e=(0,quatf64.a)(),j=(0,vec3f64.f)(0,0,1),k=(0,vec3f64.f)(0,1,0),v=(0,vec3f64.f)(1,0,0);function q(a){(0,vec3.c)(h,a),(0,vec3.n)(h,h);const n=Math.atan2(h[1],h[0]),o=(0,quat.s)((0,quatf64.a)(),j,-n);(0,vec3.v)(h,h,o);const r=-1*Math.atan2(h[2],h[0]);return[(0,common.a)(n)+270,(0,common.a)(r)+90]}function M(t,n){return (0,quat.s)(p,j,(0,common.t)(t-270)),(0,quat.s)(e,k,(0,common.t)(n-90)),(0,quat.m)(i,p,e),(0,vec3.c)(h,v),(0,vec3.v)(h,h,i),(0,vec3.n)(h,h),[h[0],h[1],h[2]]}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(4130);
;// ../node_modules/@arcgis/core/layers/voxel/VoxelSlice.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let m=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(t){super(t),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[t,o]=q(this.normal);return Cyclical/* cyclicalDegrees */.ie.normalize((0,ensureType/* ensureNumber */.GB)(t),0,!0)}set orientation(t){const o=M(t,this.tilt);this._set("normal",o),this._set("orientation",t)}get tilt(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[t,o]=q(this.normal);return Cyclical/* cyclicalDegrees */.ie.normalize((0,ensureType/* ensureNumber */.GB)(o),0,!0)}set tilt(t){const o=M(this.orientation,t);this._set("normal",o),this._set("tilt",t)}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],m.prototype,"enabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],m.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),(0,cast/* cast */.w)((t=>Cyclical/* cyclicalDegrees */.ie.normalize((0,ensureType/* ensureNumber */.GB)(t),0,!0)))],m.prototype,"orientation",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),(0,cast/* cast */.w)((t=>Cyclical/* cyclicalDegrees */.ie.normalize((0,ensureType/* ensureNumber */.GB)(t),0,!0)))],m.prototype,"tilt",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number],json:{write:!0}})],m.prototype,"normal",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number],json:{write:!0}})],m.prototype,"point",void 0),m=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelSlice")],m);const c=m;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/persistableUrlUtils.js
var persistableUrlUtils = __webpack_require__(63680);
;// ../node_modules/@arcgis/core/layers/voxel/VoxelSection.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let d=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(){super(...arguments),this.enabled=!0,this.href=null,this.id=null,this.label="",this.normal=null,this.point=null,this.sizeInPixel=null,this.slices=null,this.timeId=0,this.variableId=null}get orientation(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[e,r]=q(this.normal);return Cyclical/* cyclicalDegrees */.ie.normalize((0,ensureType/* ensureNumber */.GB)(e),0,!0)}get tilt(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[e,r]=q(this.normal);return Cyclical/* cyclicalDegrees */.ie.normalize((0,ensureType/* ensureNumber */.GB)(r),0,!0)}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!0,write:!0}})],d.prototype,"enabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{service:{read:persistableUrlUtils.r}},write:{enabled:!0,isRequired:!0}}}),(0,persistable/* persistable */.P)({origins:["web-scene"],type:"resource",prefix:"sections",compress:!0})],d.prototype,"href",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:ensureType/* Integer */.jz,json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],d.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],d.prototype,"orientation",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],d.prototype,"tilt",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"normal",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"point",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[ensureType/* Integer */.jz],json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"sizeInPixel",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[c],json:{write:!0}})],d.prototype,"slices",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:ensureType/* Integer */.jz,json:{default:0,write:!0}})],d.prototype,"timeId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:ensureType/* Integer */.jz,json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"variableId",void 0),d=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelSection")],d);const u=d;

;// ../node_modules/@arcgis/core/layers/voxel/VoxelSimpleShading.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let t=class extends JSONSupport/* JSONSupport */.oY{constructor(){super(...arguments),this.diffuseFactor=.5,this.specularFactor=.5}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],t.prototype,"diffuseFactor",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],t.prototype,"specularFactor",void 0),t=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelSimpleShading")],t);const VoxelSimpleShading_p=t;

;// ../node_modules/@arcgis/core/layers/voxel/VoxelFormat.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let s=class extends JSONSupport/* JSONSupport */.oY{constructor(){super(...arguments),this.continuity=null,this.hasNoData=!1,this.noData=0,this.offset=0,this.scale=1,this.type=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["discrete","continuous"],json:{write:!0}})],s.prototype,"continuity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],s.prototype,"hasNoData",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],s.prototype,"noData",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],s.prototype,"offset",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],s.prototype,"scale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"type",void 0),s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelFormat")],s);const VoxelFormat_p=s;

;// ../node_modules/@arcgis/core/layers/voxel/VoxelVariable.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let VoxelVariable_i=class extends JSONSupport/* JSONSupport */.oY{constructor(){super(...arguments),this.id=null,this.description="",this.name=null,this.originalFormat=null,this.renderingFormat=null,this.unit="",this.volumeId=0,this.type=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],VoxelVariable_i.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],VoxelVariable_i.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],VoxelVariable_i.prototype,"name",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:VoxelFormat_p,json:{write:!0}})],VoxelVariable_i.prototype,"originalFormat",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:VoxelFormat_p,json:{write:{enabled:!0,isRequired:!0}}})],VoxelVariable_i.prototype,"renderingFormat",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],VoxelVariable_i.prototype,"unit",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],VoxelVariable_i.prototype,"volumeId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["stc-hot-spot-results","stc-cluster-outlier-results","stc-estimated-bin","generic-nearest-interpolated"],json:{write:!0}})],VoxelVariable_i.prototype,"type",void 0),VoxelVariable_i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelVariable")],VoxelVariable_i);const VoxelVariable_p=VoxelVariable_i;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(96220);
;// ../node_modules/@arcgis/core/layers/voxel/VoxelIsosurface.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let l=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(){super(...arguments),this.color=Color/* default */.A.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label="",this.colorLocked=!1}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Color/* default */.A,json:{type:[ensureType/* Integer */.jz],write:{enabled:!0,isRequired:!0}}})],l.prototype,"color",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],l.prototype,"value",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!0,write:!0}})],l.prototype,"enabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],l.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!1,write:!0}})],l.prototype,"colorLocked",void 0),l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelIsosurface")],l);const a=l;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/collectionUtils.js
var collectionUtils = __webpack_require__(4194);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(92504);
;// ../node_modules/@arcgis/core/layers/voxel/VoxelColorStop.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let VoxelColorStop_c=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(){super(...arguments),this.color=null,this.position=0}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Color/* default */.A,json:{type:[ensureType/* Integer */.jz],write:{enabled:!0,isRequired:!0}}})],VoxelColorStop_c.prototype,"color",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],VoxelColorStop_c.prototype,"position",void 0),VoxelColorStop_c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelColorStop")],VoxelColorStop_c);const VoxelColorStop_l=VoxelColorStop_c;

;// ../node_modules/@arcgis/core/layers/voxel/VoxelOpacityStop.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let VoxelOpacityStop_p=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(){super(...arguments),this.opacity=1,this.position=0}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{name:"alpha",write:{enabled:!0,isRequired:!0}}})],VoxelOpacityStop_p.prototype,"opacity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],VoxelOpacityStop_p.prototype,"position",void 0),VoxelOpacityStop_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelOpacityStop")],VoxelOpacityStop_p);const VoxelOpacityStop_i=VoxelOpacityStop_p;

;// ../node_modules/@arcgis/core/layers/voxel/VoxelRangeFilter.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let VoxelRangeFilter_p=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(){super(...arguments),this.enabled=!1,this.range=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!1,write:!0}})],VoxelRangeFilter_p.prototype,"enabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number],json:{write:!0}})],VoxelRangeFilter_p.prototype,"range",void 0),VoxelRangeFilter_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelRangeFilter")],VoxelRangeFilter_p);const VoxelRangeFilter_a=VoxelRangeFilter_p;

;// ../node_modules/@arcgis/core/layers/voxel/VoxelTransferFunctionStyle.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var VoxelTransferFunctionStyle_u;!function(o){o[o.Color=1]="Color",o[o.Alpha=2]="Alpha",o[o.Both=3]="Both"}(VoxelTransferFunctionStyle_u||(VoxelTransferFunctionStyle_u={}));let y=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(o){super(o),this.interpolation=null,this.stretchRange=null,this.rangeFilter=null,this._colorMapSize=256,this.colorStops=new(Collection/* default */.A.ofType(VoxelColorStop_l)),this.opacityStops=new(Collection/* default */.A.ofType(VoxelOpacityStop_i))}set colorStops(o){this._set("colorStops",(0,collectionUtils/* referenceSetter */.V)(o,this._get("colorStops"),Collection/* default */.A.ofType(VoxelColorStop_l)))}set opacityStops(o){this._set("opacityStops",(0,collectionUtils/* referenceSetter */.V)(o,this._get("opacityStops"),Collection/* default */.A.ofType(VoxelOpacityStop_i)))}getPreviousNext(o,t,r){let e=o;for(;--e>0&&t[e].type!==r&&t[e].type!==VoxelTransferFunctionStyle_u.Both;);let s=o;const i=t.length;for(;++s<i&&t[s].type!==r&&t[s].type!==VoxelTransferFunctionStyle_u.Both;);return[e,s]}get rasterizedTransferFunction(){const o=[];if(this.colorStops.length<2)return o;const r=[],e=[],s=1e-5;for(const t of this.colorStops){if(!t.color)return o;e.push({color:{r:t.color.r,g:t.color.g,b:t.color.b,a:Math.round(255*(1-t.color.a))},position:t.position,type:VoxelTransferFunctionStyle_u.Color})}if(0===this.opacityStops.length)for(const t of e)r.push({color:t.color,position:t.position});else{for(const t of this.opacityStops){const o=(0,mathUtils/* clamp */.qE)(t.position,0,1),r=Math.round(255*(0,mathUtils/* clamp */.qE)(1-t.opacity,0,1));let i=!1;for(const t of e)if(t.type===VoxelTransferFunctionStyle_u.Color&&Math.abs(t.position-o)<s){t.color.a=r,t.type=VoxelTransferFunctionStyle_u.Both,i=!0;break}i||e.push({color:{r:0,g:0,b:0,a:r},position:t.position,type:VoxelTransferFunctionStyle_u.Alpha})}e.sort(((o,t)=>o.position<t.position?-1:1));const o=e.length;for(let t=0;t<o;++t){const r=e[t];if(r.type!==VoxelTransferFunctionStyle_u.Both)if(r.type===VoxelTransferFunctionStyle_u.Color){const[s,i]=this.getPreviousNext(t,e,VoxelTransferFunctionStyle_u.Alpha);if(-1!==s&&i!==o){const o=(r.position-e[s].position)/(e[i].position-e[s].position);r.color.a=Math.round((0,mathUtils/* lerp */.Cc)(e[s].color.a,e[i].color.a,o))}else r.color.a=-1!==s?e[s].color.a:e[i].color.a}else{const[s,i]=this.getPreviousNext(t,e,VoxelTransferFunctionStyle_u.Color);if(-1!==s&&i!==o){const o=(r.position-e[s].position)/(e[i].position-e[s].position),t=e[s].color,p=e[i].color;g.forEach((e=>{r.color[e]=Math.round((0,mathUtils/* lerp */.Cc)(t[e],p[e],o))}))}else-1!==s?g.forEach((o=>{r.color[o]=e[s].color[o]})):g.forEach((o=>{r.color[o]=e[i].color[o]}))}}for(const t of e)r.push({color:t.color,position:t.position})}r[0].position=0,r[r.length-1].position=1;let i=0,l=1;for(let c=0;c<this._colorMapSize;++c){const e=c/this._colorMapSize;for(;e>r[l].position;)i=l++;const s=(e-r[i].position)/(r[l].position-r[i].position),a=r[i].color,h=r[l].color,f=new Color/* default */.A;g.forEach((o=>{f[o]=Math.round((0,mathUtils/* lerp */.Cc)(a[o],h[o],s))})),f.a=(0,mathUtils/* clamp */.qE)(1-(0,mathUtils/* lerp */.Cc)(a.a,h.a,s)/255,0,1),o.push(f)}return o}getColorForContinuousDataValue(o,t){const r=this.rasterizedTransferFunction;if(this.colorStops.length<2||!Array.isArray(this.stretchRange)||this.stretchRange.length<2||r.length<256)return null;let e=this.stretchRange[0],s=this.stretchRange[1];if(e>s){const o=e;e=s,s=o}o=(0,mathUtils/* clamp */.qE)(o,e,s);const i=r[Math.round((o-e)/(s-e)*(this._colorMapSize-1))].clone();return t||(i.a=1),i}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["linear","nearest"],json:{write:!0}})],y.prototype,"interpolation",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],y.prototype,"stretchRange",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(VoxelColorStop_l),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.colorStops&&this.colorStops.length>0}}}}})],y.prototype,"colorStops",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(VoxelOpacityStop_i),json:{read:{source:"alphaStops"},write:{enabled:!0,target:"alphaStops",overridePolicy(){return{enabled:!!this.opacityStops&&this.opacityStops.length>0}}}}})],y.prototype,"opacityStops",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:VoxelRangeFilter_a,json:{write:!0}})],y.prototype,"rangeFilter",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Color/* default */.A],clonable:!1,json:{read:!1}})],y.prototype,"rasterizedTransferFunction",null),y=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelTransferFunctionStyle")],y);const S=y,g=["r","g","b"];

;// ../node_modules/@arcgis/core/layers/voxel/VoxelUniqueValue.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let VoxelUniqueValue_a=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(){super(...arguments),this.color=Color/* default */.A.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label=""}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Color/* default */.A,json:{type:[ensureType/* Integer */.jz],write:{enabled:!0,isRequired:!0}}})],VoxelUniqueValue_a.prototype,"color",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:ensureType/* Integer */.jz,json:{write:{enabled:!0,isRequired:!0}}})],VoxelUniqueValue_a.prototype,"value",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!0,write:!0}})],VoxelUniqueValue_a.prototype,"enabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],VoxelUniqueValue_a.prototype,"label",void 0),VoxelUniqueValue_a=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelUniqueValue")],VoxelUniqueValue_a);const VoxelUniqueValue_l=VoxelUniqueValue_a;

;// ../node_modules/@arcgis/core/layers/voxel/VoxelVariableStyle.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var VoxelVariableStyle_p;let VoxelVariableStyle_c=VoxelVariableStyle_p=class extends JSONSupport/* JSONSupport */.oY{constructor(e){super(e),this.variableId=0,this.label="",this.transferFunction=null,this.uniqueValues=null,this.isosurfaces=null,this.uniqueValues=new(Collection/* default */.A.ofType(VoxelUniqueValue_l)),this.isosurfaces=new(Collection/* default */.A.ofType(a))}clone(){return new VoxelVariableStyle_p({variableId:this.variableId,label:this.label,transferFunction:(0,lang/* clone */.o8)(this.transferFunction),uniqueValues:(0,lang/* clone */.o8)(this.uniqueValues),isosurfaces:(0,lang/* clone */.o8)(this.isosurfaces)})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:ensureType/* Integer */.jz,json:{write:{enabled:!0,isRequired:!0}}})],VoxelVariableStyle_c.prototype,"variableId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],VoxelVariableStyle_c.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:S,json:{write:{enabled:!0,overridePolicy(){return{enabled:!this.uniqueValues||this.uniqueValues.length<1}}}}})],VoxelVariableStyle_c.prototype,"transferFunction",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(VoxelUniqueValue_l),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.uniqueValues&&this.uniqueValues.length>0}}}}})],VoxelVariableStyle_c.prototype,"uniqueValues",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(a),json:{write:{enabled:!0,overridePolicy(){const e=!this.uniqueValues||this.uniqueValues.length<1,s=!!this.isosurfaces&&this.isosurfaces.length>0;return{enabled:e&&s}}}}})],VoxelVariableStyle_c.prototype,"isosurfaces",void 0),VoxelVariableStyle_c=VoxelVariableStyle_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelVariableStyle")],VoxelVariableStyle_c);const f=VoxelVariableStyle_c;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Point.js + 1 modules
var Point = __webpack_require__(78632);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(87926);
;// ../node_modules/@arcgis/core/layers/voxel/VoxelIrregularSpacing.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let VoxelIrregularSpacing_t=class extends JSONSupport/* JSONSupport */.oY{constructor(){super(...arguments),this.values=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number],json:{write:!0}})],VoxelIrregularSpacing_t.prototype,"values",void 0),VoxelIrregularSpacing_t=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelIrregularSpacing")],VoxelIrregularSpacing_t);const VoxelIrregularSpacing_p=VoxelIrregularSpacing_t;

;// ../node_modules/@arcgis/core/layers/voxel/VoxelRegularSpacing.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let VoxelRegularSpacing_t=class extends JSONSupport/* JSONSupport */.oY{constructor(){super(...arguments),this.scale=1,this.offset=0}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],VoxelRegularSpacing_t.prototype,"scale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],VoxelRegularSpacing_t.prototype,"offset",void 0),VoxelRegularSpacing_t=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelRegularSpacing")],VoxelRegularSpacing_t);const VoxelRegularSpacing_p=VoxelRegularSpacing_t;

;// ../node_modules/@arcgis/core/layers/voxel/VoxelDimension.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let VoxelDimension_p=class extends JSONSupport/* JSONSupport */.oY{constructor(){super(...arguments),this.irregularSpacing=null,this.isPositiveUp=!0,this.isWrappedDateLine=!1,this.label=null,this.name=null,this.quantity=null,this.regularSpacing=null,this.size=0,this.unit=null}get isRegular(){return(null==this.irregularSpacing||void 0===this.irregularSpacing)&&null!==this.regularSpacing}getRange(){return this.isRegular?[this.regularSpacing.offset,this.regularSpacing.offset+this.regularSpacing.scale*(this.size-1)]:Array.isArray(this.irregularSpacing?.values)&&this.irregularSpacing.values.length>1?[this.irregularSpacing.values[0],this.irregularSpacing.values[this.irregularSpacing.values.length-1]]:[0,0]}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:VoxelIrregularSpacing_p,json:{write:!0}})],VoxelDimension_p.prototype,"irregularSpacing",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],VoxelDimension_p.prototype,"isPositiveUp",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],VoxelDimension_p.prototype,"isWrappedDateLine",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],VoxelDimension_p.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],VoxelDimension_p.prototype,"name",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],VoxelDimension_p.prototype,"quantity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:VoxelRegularSpacing_p,json:{write:!0}})],VoxelDimension_p.prototype,"regularSpacing",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],VoxelDimension_p.prototype,"size",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],VoxelDimension_p.prototype,"unit",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{read:!1}})],VoxelDimension_p.prototype,"isRegular",null),VoxelDimension_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelDimension")],VoxelDimension_p);const VoxelDimension_a=VoxelDimension_p;

;// ../node_modules/@arcgis/core/layers/voxel/VoxelVolume.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const VoxelVolume_y="esri.layers.voxel.VoxelVolume",VoxelVolume_d=Logger/* default */.A.getLogger(VoxelVolume_y);let VoxelVolume_f=class extends JSONSupport/* JSONSupport */.oY{constructor(e){super(e),this.id=0,this.dimensions=null,this.spatialReference=SpatialReference/* default */.A.WGS84}get zDimension(){if(!this.dimensions)return-1;if(!Array.isArray(this.dimensions))return-1;if(4!==this.dimensions.length)return-1;for(let e=2;e<4;++e)if(this.dimensions[e].size>0)return e;return-1}get isValid(){return!!this.dimensions&&(!!Array.isArray(this.dimensions)&&(4===this.dimensions.length&&(!(this.dimensions[0].size<1||this.dimensions[1].size<1)&&!(-1===this.zDimension||this.dimensions[this.zDimension].size<1))))}get originInLayerSpace3D(){if(!this.isValid||"xyt"===this.volumeType)return[0,0,0];const e=this.dimensions[0].getRange(),i=this.dimensions[1].getRange(),s=this.dimensions[2],r=s.isRegular?s.getRange():[0,s.size];return[e[0],i[0],r[0]]}get voxelSizeInLayerSpaceSigned(){if(!this.isValid||"xyt"===this.volumeType)return[0,0,0];const e=this.dimensions[0].getRange(),i=this.dimensions[1].getRange(),s=this.dimensions[2],r=s.isRegular?s.getRange():[0,s.size],t=[this.sizeInVoxels[0],this.sizeInVoxels[1],this.sizeInVoxels[2]];for(let n=0;n<3;++n)t[n]<2?t[n]=1:t[n]-=1;return s.isRegular&&!s.isPositiveUp&&(t[2]*=-1),[(e[1]-e[0])/t[0],(i[1]-i[0])/t[1],(r[1]-r[0])/t[2]]}get volumeType(){if(this.isValid){const e=this.dimensions[2].size>0,i=this.dimensions[3].size>0;if(!e&&i)return"xyt";if(e&&i)return"xyzt"}return"xyz"}get sizeInVoxels(){if(!this.isValid)return[0,0,0];const e=this.zDimension;return[this.dimensions[0].size,this.dimensions[1].size,this.dimensions[e].size]}computeVoxelSpaceLocation(e){if(!this.isValid)return[0,0,0];if("xyt"===this.volumeType)return VoxelVolume_d.error("computeVoxelSpacePosition cannot be used with XYT volumes."),[0,0,0];if(!(0,spatialReferenceUtils/* equals */.aI)(this.spatialReference,e.spatialReference))return VoxelVolume_d.error("pos argument should have the same spatial reference as the VoxelLayer."),[0,0,0];const i=(0,vec3f64.f)(e.x,e.y,e.z??0);(0,vec3.f)(i,i,this.originInLayerSpace3D),(0,vec3.B)(i,i,this.voxelSizeInLayerSpaceSigned);const s=this.dimensions[this.zDimension];if(!s.isRegular&&Array.isArray(s.irregularSpacing?.values)&&s.irregularSpacing.values.length>1){const r=e.z??0,t=s.irregularSpacing.values,n=s.isPositiveUp?1:-1,o=t.reduce(((e,i)=>Math.abs(n*i-r)<Math.abs(n*e-r)?i:e));for(let e=0;e<t.length;++e)if(t[e]===o){i[2]=e;break}}return[i[0],i[1],i[2]]}computeLayerSpaceLocation(e){if(!this.isValid)return new Point/* default */.A({x:0,y:0,spatialReference:this.spatialReference});const i=(0,vec3f64.e)(e);if((0,vec3.A)(i,i,this.voxelSizeInLayerSpaceSigned),(0,vec3.g)(i,i,this.originInLayerSpace3D),"xyt"===this.volumeType)return new Point/* default */.A({x:i[0],y:i[1],spatialReference:this.spatialReference});const s=this.dimensions[this.zDimension];return s.isRegular||Array.isArray(s.irregularSpacing?.values)&&(e[2]<0?i[2]=s.irregularSpacing.values[0]:e[2]<s.irregularSpacing.values.length?i[2]=s.irregularSpacing.values[e[2]]:i[2]=s.irregularSpacing.values[s.irregularSpacing.values.length-1],s.isPositiveUp||(i[2]*=-1)),new Point/* default */.A({x:i[0],y:i[1],z:i[2],spatialReference:this.spatialReference})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],VoxelVolume_f.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[VoxelDimension_a],json:{write:{enabled:!0,isRequired:!0}}})],VoxelVolume_f.prototype,"dimensions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SpatialReference/* default */.A,json:{read:{enabled:!1}}})],VoxelVolume_f.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{read:!1}})],VoxelVolume_f.prototype,"zDimension",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Boolean],json:{read:!1}})],VoxelVolume_f.prototype,"isValid",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number],json:{read:!1}})],VoxelVolume_f.prototype,"originInLayerSpace3D",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number],json:{read:!1}})],VoxelVolume_f.prototype,"voxelSizeInLayerSpaceSigned",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["xyz","xyzt","xyt"],json:{read:{enabled:!1}}})],VoxelVolume_f.prototype,"volumeType",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number],json:{read:!1}})],VoxelVolume_f.prototype,"sizeInVoxels",null),VoxelVolume_f=(0,tslib_es6._)([(0,subclass/* subclass */.$)(VoxelVolume_y)],VoxelVolume_f);const VoxelVolume_S=VoxelVolume_f;

;// ../node_modules/@arcgis/core/layers/voxel/VoxelVolumeIndex.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var VoxelVolumeIndex_t;let VoxelVolumeIndex_s=VoxelVolumeIndex_t=class extends JSONSupport/* JSONSupport */.oY{constructor(){super(...arguments),this.apronWidth=1,this.brickSize=[32,32,32],this.maxLodLevel=0,this.nodeSize=[4,4,4]}isValid(){const e=new VoxelVolumeIndex_t;return e.apronWidth===this.apronWidth&&e.maxLodLevel===this.maxLodLevel&&(!!this.brickSize&&(!!this.nodeSize&&(!(!Array.isArray(this.brickSize)||!Array.isArray(this.nodeSize))&&(3===this.brickSize.length&&3===this.nodeSize.length&&(32===this.brickSize[0]&&32===this.brickSize[1]&&32===this.brickSize[2]&&(4===this.nodeSize[0]&&4===this.nodeSize[1]&&4===this.nodeSize[2]))))))}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],VoxelVolumeIndex_s.prototype,"apronWidth",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],VoxelVolumeIndex_s.prototype,"brickSize",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],VoxelVolumeIndex_s.prototype,"maxLodLevel",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],VoxelVolumeIndex_s.prototype,"nodeSize",void 0),VoxelVolumeIndex_s=VoxelVolumeIndex_t=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelVolumeIndex")],VoxelVolumeIndex_s);const VoxelVolumeIndex_p=VoxelVolumeIndex_s;

;// ../node_modules/@arcgis/core/layers/voxel/VoxelDynamicSection.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let VoxelDynamicSection_m=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(t){super(t),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[t,o]=q(this.normal);return Cyclical/* cyclicalDegrees */.ie.normalize((0,ensureType/* ensureNumber */.GB)(t),0,!0)}set orientation(t){const o=M(t,this.tilt);this._set("normal",o),this._set("orientation",t)}get tilt(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[t,o]=q(this.normal);return Cyclical/* cyclicalDegrees */.ie.normalize((0,ensureType/* ensureNumber */.GB)(o),0,!0)}set tilt(t){const o=M(this.orientation,t);this._set("normal",o),this._set("tilt",t)}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!0,write:!0}})],VoxelDynamicSection_m.prototype,"enabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],VoxelDynamicSection_m.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),(0,cast/* cast */.w)((t=>Cyclical/* cyclicalDegrees */.ie.normalize((0,ensureType/* ensureNumber */.GB)(t),0,!0)))],VoxelDynamicSection_m.prototype,"orientation",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),(0,cast/* cast */.w)((t=>Cyclical/* cyclicalDegrees */.ie.normalize((0,ensureType/* ensureNumber */.GB)(t),0,!0)))],VoxelDynamicSection_m.prototype,"tilt",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number],json:{write:!0}})],VoxelDynamicSection_m.prototype,"normal",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number],json:{write:!0}})],VoxelDynamicSection_m.prototype,"point",void 0),VoxelDynamicSection_m=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelDynamicSection")],VoxelDynamicSection_m);const VoxelDynamicSection_c=VoxelDynamicSection_m;

;// ../node_modules/@arcgis/core/layers/voxel/VoxelVolumeStyle.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var VoxelVolumeStyle_p;let VoxelVolumeStyle_m=VoxelVolumeStyle_p=class extends JSONSupport/* JSONSupport */.oY{constructor(e){super(e),this.volumeId=0,this.verticalExaggeration=1,this.exaggerationMode="scale-height",this.verticalOffset=0,this.slices=new(Collection/* default */.A.ofType(c)),this.dynamicSections=new(Collection/* default */.A.ofType(VoxelDynamicSection_c))}set slices(e){this._set("slices",(0,collectionUtils/* referenceSetter */.V)(e,this._get("slices"),Collection/* default */.A.ofType(c)))}set dynamicSections(e){this._set("dynamicSections",(0,collectionUtils/* referenceSetter */.V)(e,this._get("dynamicSections"),Collection/* default */.A.ofType(VoxelDynamicSection_c)))}clone(){return new VoxelVolumeStyle_p({volumeId:this.volumeId,verticalExaggeration:this.verticalExaggeration,exaggerationMode:this.exaggerationMode,verticalOffset:this.verticalOffset,slices:(0,lang/* clone */.o8)(this.slices),dynamicSections:(0,lang/* clone */.o8)(this.dynamicSections)})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:ensureType/* Integer */.jz,json:{write:{enabled:!0,isRequired:!0}}})],VoxelVolumeStyle_m.prototype,"volumeId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{default:1,write:!0}})],VoxelVolumeStyle_m.prototype,"verticalExaggeration",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["scale-position","scale-height"],json:{default:"scale-height",write:!0}})],VoxelVolumeStyle_m.prototype,"exaggerationMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{default:0,write:!0}})],VoxelVolumeStyle_m.prototype,"verticalOffset",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(c),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.slices&&this.slices.length>0}}}}})],VoxelVolumeStyle_m.prototype,"slices",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(VoxelDynamicSection_c),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.dynamicSections&&this.dynamicSections.length>0}}}}})],VoxelVolumeStyle_m.prototype,"dynamicSections",null),VoxelVolumeStyle_m=VoxelVolumeStyle_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelVolumeStyle")],VoxelVolumeStyle_m);const VoxelVolumeStyle_d=VoxelVolumeStyle_m;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/popupUtils.js
var popupUtils = __webpack_require__(44116);
;// ../node_modules/@arcgis/core/layers/VoxelLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const A="esri.layers.VoxelLayer",E=Logger/* default */.A.getLogger(A);let R=class extends((0,SceneService/* SceneService */.w6)((0,ArcGISService/* ArcGISService */.b)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.A)((0,ScaleRangeLayer/* ScaleRangeLayer */.j)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)((0,APIKeyMixin/* APIKeyMixin */.p)(Layer/* default */.A)))))))){constructor(e){super(e),this.serviceRoot="",this.operationalLayerType="Voxel",this.legendEnabled=!0,this.title=null,this.sections=null,this.currentVariableId=0,this.volumeStyles=null,this.renderMode="volume",this.variableStyles=null,this.enableSlices=!0,this.enableSections=!0,this.enableDynamicSections=!0,this.enableIsosurfaces=!0,this.shading=new VoxelSimpleShading_p,this.opacity=1,this.variables=new Collection/* default */.A,this.volumes=new Collection/* default */.A,this.index=null,this.minScale=0,this.maxScale=0,this.type="voxel",this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.fullExtent=null,this.popupEnabled=!1,this.test=null,this.volumeStyles=new(Collection/* default */.A.ofType(VoxelVolumeStyle_d)),this.variableStyles=new(Collection/* default */.A.ofType(f)),this.sections=new(Collection/* default */.A.ofType(u))}normalizeCtorArgs(e){return e?.constantUpscaling&&(this.test={constantUpscaling:!0},delete e.constantUpscaling),e}set url(e){this._set("url",(0,arcgisLayerUrl/* sanitizeUrl */.Jf)(e,E))}load(e){const t=null!=e?e.signal:null,i=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(promiseUtils/* throwIfAbortError */.QP).then((()=>this._fetchService(t))).then((()=>this.serviceRoot=this.url));return this.addResolvingPromise(i),Promise.resolve(this)}read(e,t){super.read(e,t);for(const i of this.volumes)i.spatialReference=this.spatialReference}readVersion(e,t){return super.parseVersionString(e)}validateLayer(e){if(e.layerType&&e.layerType!==this.operationalLayerType)throw new Error/* default */.A("voxel-layer:layer-type-not-supported","VoxelLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor)||this.version.major<3)throw new Error/* default */.A("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"});if(this.version.major>3)throw new Error/* default */.A("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"})}readFullExtent(e,t,i){if(null!=e&&"object"==typeof e){const r=Extent/* default */.A.fromJSON(e,i);if(0===r.zmin&&0===r.zmax&&Array.isArray(t.volumes)){const e=VoxelVolume_S.fromJSON(t.volumes[0]);if(e.isValid&&"xyt"!==e.volumeType){const t=e.dimensions[2];if(t.isRegular){let e=t.regularSpacing.offset,i=t.regularSpacing.offset+t.regularSpacing.scale*(t.size-1);if(e>i){const t=e;e=i,i=t}r.zmin=e,r.zmax=i}}}return r}return null}get voxelFields(){const e=[new Field/* default */.A({name:"Voxel.ServiceValue",alias:"Value",domain:null,editable:!1,length:128,type:"string"}),new Field/* default */.A({name:"Voxel.ServiceVariableLabel",alias:"Variable",domain:null,editable:!1,length:128,type:"string"}),new Field/* default */.A({name:"Voxel.Position",alias:"Voxel Position",domain:null,editable:!1,length:128,type:"string"})],t=this.getVolume(null);if(null!=t){if("xyzt"===t.volumeType||"xyt"===t.volumeType){const t=new Field/* default */.A({name:"Voxel.ServiceLocalTime",alias:"Local Time",domain:null,editable:!1,length:128,type:"string"});e.push(t);const i=new Field/* default */.A({name:"Voxel.ServiceNativeTime",alias:"Native Time",domain:null,editable:!1,length:128,type:"string"});e.push(i)}if("xyt"!==t.volumeType){const t=new Field/* default */.A({name:"Voxel.ServiceDepth",alias:"Depth",domain:null,editable:!1,length:128,type:"string"});e.push(t)}}return e}get popupTemplate(){return this.loaded?this.createPopupTemplate():null}get defaultPopupTemplate(){return this.createPopupTemplate()}createPopupTemplate(e){const t=this.voxelFields,i=this.title;return (0,popupUtils/* createPopupTemplate */.tn)({fields:t,title:i},e)}getConfiguration(){const e={layerType:this.operationalLayerType,version:this.version.versionString,name:this.title,spatialReference:this.spatialReference,fullExtent:this.fullExtent,volumes:this.volumes.toJSON(),variables:this.variables.toJSON(),index:this.index?.toJSON(),sections:this.getSections(),style:{volumeStyles:this.getVolumeStyles(),currentVariableId:this.currentVariableId,renderMode:this.renderMode,variableStyles:this.getVariableStyles(),enableSections:this.enableSections,enableDynamicSections:this.enableDynamicSections,enableIsosurfaces:this.enableIsosurfaces,enableSlices:this.enableSlices,shading:this.shading}};return e.index&&this.index?.isValid()?JSON.stringify(e):""}getVariableStyle(e){let t=-1;t=null!=e?e:this.currentVariableId;if(!this.variableStyles||-1===t)return null;const i=this.variableStyles.findIndex((e=>e.variableId===t));return i<0?null:this.variableStyles.at(i)}getVariable(e){let t=-1;if(t=null!=e?e:this.currentVariableId,!this.variables||-1===t)return null;const i=this.variables.findIndex((e=>e.id===t));return i<0?null:this.variables.at(i)}getVolume(e){const t=this.getVariable(e);return null!=t?this.volumes.find((({id:e})=>e===t.volumeId)):null}getVolumeStyle(e){const t=this.getVariable(e);return null!=t?this.volumeStyles.find((({volumeId:e})=>e===t.volumeId)):null}getColorForContinuousDataValue(e,t,i){const r=this.getVariable(e);if(null==r||"continuous"!==r.renderingFormat?.continuity)return null;if(!this.variableStyles)return null;const o=this.variableStyles.findIndex((t=>t.variableId===e));if(o<0)return null;const s=this.variableStyles.at(o);return s?.transferFunction?s.transferFunction.getColorForContinuousDataValue(t,i):null}getSections(){const e=[];for(const t of this.sections)e.push(new u({enabled:t.enabled,href:t.href,id:t.id,label:t.label,normal:t.normal,point:t.point,sizeInPixel:t.sizeInPixel,slices:t.slices,timeId:t.timeId,variableId:t.variableId}));return e}getVariableStyles(){const e=[];for(const t of this.variableStyles){const i=this._getVariable(t);if(null!=i){const r=t.clone();r.isosurfaces.length>4&&(r.isosurfaces=r.isosurfaces.slice(0,3),E.error("A maximum of 4 isosurfaces are supported for Voxel Layers."));for(const e of r.isosurfaces)if(!e.colorLocked){const t=this.getColorForContinuousDataValue(r.variableId,e.value,!1);null===t||t.equals(e.color)||(e.color=t)}if("continuous"===i.renderingFormat.continuity)(null===r.transferFunction||r.transferFunction.colorStops.length<2)&&E.error(`VoxelVariableStyle for variable ${i.id} is invalid. At least 2 color stops are required in the transferFunction for continuous Voxel Layer variables.`),null!==r.transferFunction&&(Array.isArray(r.transferFunction.stretchRange)&&2===r.transferFunction.stretchRange.length||(E.error(`VoxelVariableStyle for variable ${i.id} is invalid. The stretchRange of the transferFunction for continuous Voxel Layer variables must be of the form [minimumDataValue, maximumDataValue].`),r.transferFunction.stretchRange=[0,1],r.transferFunction.colorStops.removeAll()));else if("discrete"===i.renderingFormat.continuity)if(0===t.uniqueValues.length)E.error(`VoxelVariableStyle for variable ${i.id} is invalid. Unique values are required for discrete Voxel Layer variables.`);else for(const e of t.uniqueValues)null!==e.label&&void 0!==e.label||null===e.value||void 0===e.value||(e.label=e.value.toString());e.push(r)}else E.error(`VoxelVariable ID=${t.variableId} doesn't exist, VoxelVariableStyle for this VoxelVariable will be ignored.`)}return e}getVolumeStyles(){const e=[];for(const t of this.volumeStyles){const i=this._getVolumeFromVolumeId(t.volumeId);if(null!=i){const r=t.clone();for(const e of r.slices)this._isPlaneValid(e,[0,1,i.zDimension],i.dimensions)||(e.enabled=!1,e.label="invalid");for(const e of r.dynamicSections)this._isPlaneValid(e,[0,1,i.zDimension],i.dimensions)||(e.enabled=!1,e.label="invalid");e.push(r)}else E.error(`VoxelVolume ID=${t.volumeId} doesn't exist, VoxelVolumeStyle for this VoxelVolume will be ignored.`)}return e}_getVariable(e){const t=e.variableId;for(const i of this.variables)if(i.id===t)return i;return null}_getVolumeFromVolumeId(e){for(const t of this.volumes)if(t.id===e)return t;return null}_isPlaneValid(e,t,i){if(!e.point)return!1;if(!Array.isArray(e.point)||3!==e.point.length)return!1;if(!e.normal)return!1;if(!Array.isArray(e.normal)||3!==e.normal.length)return!1;const r=(0,vec3f64.f)(e.normal[0],e.normal[1],e.normal[2]);(0,vec3.n)(r,r);const o=1e-6;return!(Math.abs(r[0])+Math.abs(r[1])+Math.abs(r[2])<o)&&(e.normal[0]=r[0],e.normal[1]=r[1],e.normal[2]=r[2],!0)}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["Voxel"]})],R.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* legendEnabled */.fV)],R.prototype,"legendEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],R.prototype,"title",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* url */.OZ)],R.prototype,"url",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(u),json:{origins:{"web-scene":{name:"layerDefinition.sections",write:!0}}}})],R.prototype,"sections",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:ensureType/* Integer */.jz,json:{origins:{"web-scene":{name:"layerDefinition.style.currentVariableId",write:{enabled:!0,isRequired:!0,ignoreOrigin:!0}},service:{name:"style.currentVariableId"}}}})],R.prototype,"currentVariableId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(VoxelVolumeStyle_d),json:{origins:{"web-scene":{name:"layerDefinition.style.volumeStyles",write:!0},service:{name:"style.volumeStyles"}}}})],R.prototype,"volumeStyles",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["volume","surfaces"],json:{origins:{"web-scene":{name:"layerDefinition.style.renderMode",write:!0},service:{name:"style.renderMode"}}}})],R.prototype,"renderMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(f),json:{origins:{"web-scene":{name:"layerDefinition.style.variableStyles",write:!0},service:{name:"style.variableStyles"}}}})],R.prototype,"variableStyles",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSlices",write:!0},service:{name:"style.enableSlices"}}}})],R.prototype,"enableSlices",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSections",write:!0},service:{name:"style.enableSections"}}}})],R.prototype,"enableSections",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableDynamicSections",write:!0},service:{name:"style.enableDynamicSections"}}}})],R.prototype,"enableDynamicSections",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableIsosurfaces",write:!0},service:{name:"style.enableIsosurfaces"}}}})],R.prototype,"enableIsosurfaces",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:VoxelSimpleShading_p,json:{origins:{"web-scene":{name:"layerDefinition.style.shading",write:!0},service:{name:"style.shading"}}}})],R.prototype,"shading",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide"]})],R.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,range:{min:0,max:1},nonNullable:!0,json:{read:!1,write:!1,origins:{"web-scene":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],R.prototype,"opacity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(VoxelVariable_p)})],R.prototype,"variables",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(VoxelVolume_S)})],R.prototype,"volumes",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:VoxelVolumeIndex_p})],R.prototype,"index",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{name:"layerDefinition.minScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],R.prototype,"minScale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{name:"layerDefinition.maxScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],R.prototype,"maxScale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1},readOnly:!0})],R.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{name:"serviceVersion"}})],R.prototype,"version",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","version")],R.prototype,"readVersion",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Extent/* default */.A})],R.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","fullExtent",["fullExtent"])],R.prototype,"readFullExtent",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,clonable:!1,json:{read:!1}})],R.prototype,"voxelFields",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{name:"disablePopup",read:{reader:(e,t)=>!t.disablePopup},write:{enabled:!0,ignoreOrigin:!0,writer(e,t,i){t[i]=!e}},origins:{"portal-item":{default:!0},"web-scene":{default:!0}}}})],R.prototype,"popupEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:PopupTemplate/* default */.A,json:{read:!1}})],R.prototype,"popupTemplate",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],R.prototype,"defaultPopupTemplate",null),R=(0,tslib_es6._)([(0,subclass/* subclass */.$)(A)],R);const VoxelLayer_M=R;


/***/ }),

/***/ 50193:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function t(r){return"portalItem"in r}const i=i=>{let o=class extends i{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):t(this)?this.portalItem?.apiKey:null}set apiKey(r){null!=r?this._override("apiKey",r):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:String})],o.prototype,"apiKey",null),o=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.layers.mixins.APIKeyMixin")],o),o};


/***/ }),

/***/ 45681:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(539);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16123);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const l=l=>{let p=class extends l{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const t=(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_7__/* .parse */ .qg)(this.url);if(null!=t&&t.title)return t.title}return this._get("title")||""}set title(t){this._set("title",t)}set url(t){this._set("url",(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_7__/* .sanitizeUrl */ .Jf)(t,_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getLogger(this)))}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],p.prototype,"title",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String})],p.prototype,"url",null),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.layers.mixins.ArcGISService")],p),p};


/***/ }),

/***/ 41506:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: () => (/* binding */ u)
});

// UNUSED EXPORTS: isOperationalLayer

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(20909);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/layerContainerType.js
var layerContainerType = __webpack_require__(73324);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/read.js
var read = __webpack_require__(83312);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/write.js
var write = __webpack_require__(77373);
;// ../node_modules/@arcgis/core/layers/mixins/operationalLayers.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const e={ArcGISAnnotationLayer:!0,ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,CSV:!0,GeoRSS:!0,GeoJSON:!0,GroupLayer:!0,KML:!0,MediaLayer:!0,OGCFeatureLayer:!0,OrientedImageryLayer:!0,SubtypeGroupLayer:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},r={ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},a={ArcGISFeatureLayer:!0},S={"web-scene/operational-layers":{ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,OGCFeatureLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,GeoJSON:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,KML:!0,RasterDataLayer:!0,Voxel:!0,LineOfSightLayer:!0},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-scene/tables":{ArcGISFeatureLayer:!0},"web-map/operational-layers":e,"web-map/basemap":r,"web-map/tables":a,"link-chart/operational-layers":{...e,LinkChartLayer:!0},"link-chart/basemap":r,"link-chart/tables":a,"portal-item/operational-layers":{ArcGISFeatureLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISImageServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0,OrientedImageryLayer:!0,SubtypeGroupLayer:!0}};

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/commonProperties.js + 1 modules
var commonProperties = __webpack_require__(84356);
;// ../node_modules/@arcgis/core/layers/mixins/OperationalLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const u=u=>{let m=class extends u{constructor(){super(...arguments),this.persistenceEnabled=!0,this.title=null}readId(e,r,t){return"Group Layer"===t?.portalItem?.type?void 0:e}writeListMode(e,r,t,o){(o&&"ground"===o.layerContainerType||e&&(0,write/* willPropertyWrite */.R)(this,t,{},o))&&(r[t]=e)}writeOperationalLayerType(e,r,t,o){e&&"tables"!==o?.layerContainerType&&(r.layerType=e)}writeTitle(e,r){r.title=e??"Layer"}read(e,r){r&&(r.layer=this),(0,read/* readLoadable */.t)(this,e,(r=>super.read(e,r)),r)}write(e,o){if(!this.persistenceEnabled)return null;if(o?.origin){const e=`${o.origin}/${o.layerContainerType||"operational-layers"}`,t=S[e];let i=!!t?.[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===e&&(i=!1),"ArcGISDimensionLayer"===this.operationalLayerType&&"web-map/operational-layers"===e&&(i=!1),!i)return o.messages?.push(new Error/* default */.A("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,{layer:this})),null}const i=super.write(e,{...o,layer:this}),s=!!o&&!!o.messages&&!!o.messages.filter((e=>e instanceof Error/* default */.A&&"web-document-write:property-required"===e.name)).length;return (0,urlUtils/* isBlobProtocol */.w8)(i?.url)?(o?.messages?.push(new Error/* default */.A("layer:invalid-url",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`,{layer:this})),null):!this.url&&s?null:i}beforeSave(){}};return (0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],m.prototype,"id",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("id",["id"])],m.prototype,"readId",null),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* listMode */.C1)],m.prototype,"listMode",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("listMode")],m.prototype,"writeListMode",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1},"web-scene":{name:"layerType",read:!1,write:{enabled:!0,ignoreOrigin:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}}}})],m.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("operationalLayerType")],m.prototype,"writeOperationalLayerType",null),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* opacity */.ke)],m.prototype,"opacity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,readOnly:!1})],m.prototype,"persistenceEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],m.prototype,"title",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("title"),(0,writer/* writer */.K)(["web-scene"],"title")],m.prototype,"writeTitle",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{origins:{"web-scene":{name:"visibility",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}},name:"visibility",write:!0}})],m.prototype,"visible",void 0),m=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.mixins.OperationalLayer")],m),m};function m(e){return"operationalLayerType"in e}


/***/ }),

/***/ 34722:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ j)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21121);
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28830);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86394);
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12690);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98849);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(539);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(6267);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40189);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20909);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(75094);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(77542);
/* harmony import */ var _support_layerUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(40454);
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(10282);
/* harmony import */ var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(26099);
/* harmony import */ var _portal_PortalUser_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(68770);
/* harmony import */ var _portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(39532);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const j=j=>{let _=class extends j{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_21__/* .destroyMaybe */ .pR)(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_18__["default"]({id:t.itemId,portal:r?.portal})}writePortalItem(e,t){e?.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem?.id)try{const{load:r}=await __webpack_require__.e(/* import() */ 4085).then(__webpack_require__.bind(__webpack_require__, 14085));return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAborted */ .Te)(t),await r({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData,layerModuleTypeMap:e.layerModuleTypeMap},t)}catch(r){throw (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .isAbortError */ .zf)(r)||_core_Logger_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${r}`),r}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAbortError */ .QP)(e),!0))))}async setUserPrivileges(e,r){if(!_config_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(r);if(this.url)try{const{features:{edit:t,fullEdit:s},content:{updateItem:i}}=await this._fetchUserPrivileges(e,r);this._set("userHasEditingPrivileges",t),this._set("userHasFullEditingPrivileges",s),this._set("userHasUpdateItemPrivileges",i)}catch(s){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAbortError */ .QP)(s)}}async _fetchUserPrivileges(e,t){let s=this.portalItem;if(!e||!s||!s.loaded||s.sourceUrl)return this._fetchFallbackUserPrivileges(t);const i=e===s.id;if(i&&s.portal.user)return (0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_20__/* .getUserPrivileges */ .It)(s);let o,a;if(i)o=s.portal.url;else try{o=await (0,_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_16__/* .getOwningPortalUrl */ .wI)(this.url,t)}catch(m){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAbortError */ .QP)(m)}if(!o||!(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .hasSameCanonicalPortal */ .b8)(o,s.portal.url))return this._fetchFallbackUserPrivileges(t);try{const e=null!=t?t.signal:null;a=await(_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id?.getCredential(`${o}/sharing`,{prompt:!1,signal:e}))}catch(m){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAbortError */ .QP)(m)}const l=!0,n=!1,p=!1;if(!a)return{features:{edit:l,fullEdit:n},content:{updateItem:p}};try{if(i?await s.reload():(s=new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_18__["default"]({id:e,portal:{url:o}}),await s.load(t)),s.portal.user)return (0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_20__/* .getUserPrivileges */ .It)(s)}catch(m){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAbortError */ .QP)(m)}return{features:{edit:l,fullEdit:n},content:{updateItem:p}}}async _fetchFallbackUserPrivileges(e){let t=!0;try{t=await this._fetchUserHasEditingPrivileges(e)}catch(r){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAbortError */ .QP)(r)}return{features:{edit:t,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(e){const t=this.url?_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id?.findCredential(this.url):null;if(!t)return!0;const s=E.credential===t?E.user:await this._fetchEditingUser(e);return E.credential=t,E.user=s,null==s?.privileges||s.privileges.includes("features:user:edit")}async _fetchEditingUser(e){const t=this.portalItem?.portal?.user;if(t)return t;const o=_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id.findServerInfo(this.url??"");if(!o?.owningSystemUrl)return null;const a=`${o.owningSystemUrl}/sharing/rest`,l=_portal_Portal_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A.getDefault();if(l&&l.loaded&&(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .normalize */ .S8)(l.restUrl)===(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .normalize */ .S8)(a))return l.user;const n=`${a}/community/self`,p=null!=e?e.signal:null,u=await (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .result */ .Ke)((0,_request_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(n,{authMode:"no-prompt",query:{f:"json"},signal:p}));return u.ok?_portal_PortalUser_js__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A.fromJSON(u.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t?.portal,s=this.portalItem?.id&&(this.portalItem.portal||_portal_Portal_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A.getDefault());return r&&s&&!(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .hasSamePortal */ .ut)(s.restUrl,r.restUrl)?(t.messages&&t.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .MZ)({type:_portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_18__["default"]})],_.prototype,"portalItem",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_13__/* .reader */ .w)("web-document","portalItem",["itemId"])],_.prototype,"readPortalItem",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_15__/* .writer */ .K)("web-document","portalItem",{itemId:{type:String}})],_.prototype,"writePortalItem",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .MZ)({clonable:!1})],_.prototype,"resourceReferences",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .MZ)({type:Boolean,readOnly:!0})],_.prototype,"userHasEditingPrivileges",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .MZ)({type:Boolean,readOnly:!0})],_.prototype,"userHasFullEditingPrivileges",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .MZ)({type:Boolean,readOnly:!0})],_.prototype,"userHasUpdateItemPrivileges",void 0),_=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__/* .subclass */ .$)("esri.layers.mixins.PortalLayer")],_),_},E={credential:null,user:null};


/***/ }),

/***/ 25389:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const t=t=>{let l=class extends t{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get effectiveScaleRange(){const e={minScale:this.minScale,maxScale:this.maxScale},a=this.parent;a&&"effectiveScaleRange"in a&&r(e,a.effectiveScaleRange);const c=this._get("effectiveScaleRange");return c&&c.minScale===e.minScale&&c.maxScale===e.maxScale?c:e}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:Number,nonNullable:!0,json:{write:!0}})],l.prototype,"minScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:Number,nonNullable:!0,json:{write:!0}})],l.prototype,"maxScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({readOnly:!0})],l.prototype,"effectiveScaleRange",null),l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.layers.mixins.ScaleRangeLayer")],l),l};function r(e,a){return e.minScale=e.minScale>0?a.minScale>0?Math.min(e.minScale,a.minScale):e.minScale:a.minScale,e.maxScale=e.maxScale>0?a.maxScale>0?Math.max(e.maxScale,a.maxScale):e.maxScale:a.maxScale,e}


/***/ }),

/***/ 68821:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Xh: () => (/* binding */ P),
  w6: () => (/* binding */ E)
});

// UNUSED EXPORTS: sceneServiceItemType

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/request.js
var request = __webpack_require__(86394);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(20909);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/originUtils.js
var originUtils = __webpack_require__(34541);
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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/I3SIndexInfo.js
var I3SIndexInfo = __webpack_require__(8575);
;// ../node_modules/@arcgis/core/layers/support/schemaValidatorLoader.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let n=null;function t(t){n=t}function u(){return n}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/portal/Portal.js + 2 modules
var Portal = __webpack_require__(10282);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/portal/PortalItem.js + 2 modules
var PortalItem = __webpack_require__(26099);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/webdoc/saveAPIKeyUtils.js
var saveAPIKeyUtils = __webpack_require__(54383);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/webdoc/support/saveUtils.js
var saveUtils = __webpack_require__(22942);
;// ../node_modules/@arcgis/core/layers/mixins/SceneService.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const N="esri.layers.mixins.SceneService",U=Logger/* default */.A.getLogger(N),E=o=>{let E=class extends o{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=(0,promiseUtils/* debounce */.sg)((async(e,t,r)=>{switch(e){case P.SAVE:return this._save(t);case P.SAVE_AS:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return SpatialReference/* default */.A.fromJSON(e.spatialReference);{const t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=o?new SpatialReference/* default */.A(o):null}}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e){const o=null==e.spatialReference?{...e,spatialReference:this._readSpatialReference(t)}:e;return Extent/* default */.A.fromJSON(o,r)}const o=t.store,i=this._readSpatialReference(t);return null==i||null==o?.extent||!Array.isArray(o.extent)||o.extent.some((e=>e<T))?null:new Extent/* default */.A({xmin:o.extent[0],ymin:o.extent[1],xmax:o.extent[2],ymax:o.extent[3],spatialReference:i})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}readVersion(e,t){const r=t.store,o=null!=r.version?r.version.toString():"";return this.parseVersionString(o)}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem?.title;if("item-title"===this.sublayerTitleMode)return (0,arcgisLayerUrl/* titleFromUrlAndName */.yG)(this.url,t.name);let o=t.name;if(!o&&this.url){const e=(0,arcgisLayerUrl/* parse */.qg)(this.url);null!=e&&(o=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(o=r+" - "+o),(0,arcgisLayerUrl/* cleanTitle */.cr)(o)}set url(e){const t=(0,arcgisLayerUrl/* sanitizeUrlWithLayerId */.HZ)({layer:this,url:e,nonStandardUrlAllowed:!1,logger:U});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,o){(0,arcgisLayerUrl/* writeUrlWithLayerId */.LS)(this,e,"layers",t,o)}get parsedUrl(){const e=this._get("url"),t=(0,urlUtils/* urlToObject */.An)(e);return null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=(0,I3SIndexInfo/* fetchIndexInfo */.F)(this.parsedUrl.path,this.rootNode,e,this.apiKey,U,t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===e?.type){const t=e.rootIndex%e.pageSize,o=e.rootPage?.nodes?.[t];if(null==o?.obb?.center||null==o.obb.halfSize)throw new Error/* default */.A("sceneservice:invalid-node-page","Invalid node page.");if(o.obb.center[0]<T||null==this.fullExtent||this.fullExtent.hasZ)return;const i=o.obb.halfSize,s=o.obb.center[2],a=Math.sqrt(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]);this.fullExtent.zmin=s-a,this.fullExtent.zmax=s+a}else if("node"===e?.type){const t=e.rootNode?.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<T)return;const r=t[2],o=t[3],{fullExtent:i}=this;i&&(i.zmin=r-o,i.zmax=r+o)}}async _fetchService(e){if(null==this.url)throw new Error/* default */.A("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const r=await (0,request/* default */.A)(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(r.data&&Array.isArray(r.data.layers)&&r.data.layers.length>0)return r.data.layers[0].id}async _fetchServiceLayer(e){const r=await (0,request/* default */.A)(this.parsedUrl?.path??"",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});r.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let o=!1;if(r.data.layerType&&"Voxel"===r.data.layerType&&(o=!0),o)return this._fetchVoxelServiceLayer();const i=r.data;this.read(i,this._getServiceContext()),this.validateLayer(i)}async _fetchVoxelServiceLayer(e){const r=(await (0,request/* default */.A)(this.parsedUrl?.path+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,this._getServiceContext()),this.validateLayer(r)}_getServiceContext(){return{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const o=t.getTypeKeywords();for(const i of o)e.typeKeywords.push(i);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),r===O.newItem&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}async _saveAs(e,t){const o={...L,...t};let i=PortalItem["default"].from(e);if(!i)throw new Error/* default */.A("sceneservice:portal-item-required","_saveAs() requires a portal item to save to");(0,saveAPIKeyUtils/* validateSaveAPIKey */.X)(i),i.id&&(i=i.clone(),i.id=null);const s=i.portal||Portal/* default */.A.getDefault();await this._ensureLoadBeforeSave(),i.type=K,i.portal=s;const a={origin:"portal-item",url:null,messages:[],portal:s,portalItem:i,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},n={layers:[this.write({},a)]};return await Promise.all(a.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(n,a,o),i.url=this.url,i.title||(i.title=this.title),this._updateTypeKeywords(i,o,O.newItem),await s.signIn(),await(s.user?.addItem({item:i,folder:o?.folder,data:n})),await (0,saveUtils/* saveResources */.rH)(this.resourceReferences,a,null),this.portalItem=i,(0,originUtils/* updateOrigins */.v)(a),a.portalItem=i,i}async _save(e){const t={...L,...e};if(!this.portalItem)throw new Error/* default */.A("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if((0,saveAPIKeyUtils/* validateSaveAPIKey */.X)(this.portalItem),this.portalItem.type!==K)throw new Error/* default */.A("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${K}"`);await this._ensureLoadBeforeSave();const o={origin:"portal-item",url:this.portalItem.itemUrl&&(0,urlUtils/* urlToObject */.An)(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||Portal/* default */.A.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},i={layers:[this.write({},o)]};return await Promise.all(o.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(i,o,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,O.existingItem),await (0,saveUtils/* updateItemWithResources */.SO)(this.portalItem,i,this.resourceReferences,o,null),(0,originUtils/* updateOrigins */.v)(o),this.portalItem}async _validateAgainstJSONSchema(e,t,o){let i=t.messages?.filter((e=>"error"===e.type)).map((e=>new Error/* default */.A(e.name,e.message,e.details)))??[];o?.validationOptions?.ignoreUnsupported&&(i=i.filter((e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name)));const s=o?.validationOptions,a=s?.enabled,n=u();if(a&&n){const t=(await n()).validate(e,o.portalItemLayerType);if(t.length>0){const e=`Layer item did not validate:\n${t.join("\n")}`;if(U.error(`_validateAgainstJSONSchema(): ${e}`),"throw"===s.failPolicy){const e=t.map((e=>new Error/* default */.A("sceneservice:schema-validation",e))).concat(i);throw new Error/* default */.A("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:e})}}}if(i.length>0)throw new Error/* default */.A("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:i})}};return (0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties.id)],E.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SpatialReference/* default */.A})],E.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],E.prototype,"readSpatialReference",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Extent/* default */.A})],E.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],E.prototype,"readFullExtent",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:HeightModelInfo/* default */.A})],E.prototype,"heightModelInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],E.prototype,"minScale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],E.prototype,"maxScale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],E.prototype,"version",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("version",["store.version"])],E.prototype,"readVersion",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:{source:"copyrightText"}}})],E.prototype,"copyright",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:!1}})],E.prototype,"sublayerTitleMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],E.prototype,"title",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("portal-item","title")],E.prototype,"readTitlePortalItem",null),(0,tslib_es6._)([(0,reader/* reader */.w)("service","title",["name"])],E.prototype,"readTitleService",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],E.prototype,"layerId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* url */.OZ)],E.prototype,"url",null),(0,tslib_es6._)([(0,writer/* writer */.K)("url")],E.prototype,"writeUrl",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],E.prototype,"parsedUrl",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],E.prototype,"store",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],E.prototype,"rootNode",void 0),E=(0,tslib_es6._)([(0,subclass/* subclass */.$)(N)],E),E},T=-1e38;var O;!function(e){e[e.existingItem=0]="existingItem",e[e.newItem=1]="newItem"}(O||(O={}));const K="Scene Service",L={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var P;!function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS"}(P||(P={}));


/***/ }),

/***/ 24738:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59851);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75094);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63863);
/* harmony import */ var _domains_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38938);
/* harmony import */ var _fieldType_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17930);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var u;const c=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONMap */ .J({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let m=u=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=void 0,this.name=null,this.nullable=!0,this.type=null,this.valueType=null,this.visible=!0}readDescription(e,{description:t}){let o=null;try{o=t?JSON.parse(t):null}catch(r){}return o?.value??null}readValueType(e,{description:t}){let o=null;try{o=t?JSON.parse(t):null}catch(r){}return o?c.fromJSON(o.fieldValueType):null}clone(){return new u({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType,visible:this.visible})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{write:!0}})],m.prototype,"alias",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[String,Number],json:{write:{allowNull:!0}}})],m.prototype,"defaultValue",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)()],m.prototype,"description",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__/* .reader */ .w)("description")],m.prototype,"readDescription",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({types:_domains_js__WEBPACK_IMPORTED_MODULE_10__/* .types */ .gK,json:{read:{reader:_domains_js__WEBPACK_IMPORTED_MODULE_10__/* .fromJSON */ .rS},write:!0}})],m.prototype,"domain",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:Boolean,json:{write:!0}})],m.prototype,"editable",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__/* .Integer */ .jz,json:{write:{overridePolicy:e=>({enabled:Number.isFinite(e)})}}})],m.prototype,"length",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{write:!0}})],m.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:Boolean,json:{write:!0}})],m.prototype,"nullable",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__/* .enumeration */ .e)(_fieldType_js__WEBPACK_IMPORTED_MODULE_11__/* .kebabDict */ .m)],m.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)()],m.prototype,"valueType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__/* .reader */ .w)("valueType",["description"])],m.prototype,"readValueType",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:Boolean,json:{read:!1}})],m.prototype,"visible",void 0),m=u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__/* .subclass */ .$)("esri.layers.support.Field")],m);const y=m;


/***/ }),

/***/ 8575:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86394);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98849);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function r(r,n,t,s,a,i){let l=null;if(null!=t){const o=`${r}/nodepages/`,n=o+Math.floor(t.rootIndex/t.nodesPerPage);try{return{type:"page",rootPage:(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(n,{query:{f:"json",token:s},responseType:"json",signal:i})).data,rootIndex:t.rootIndex,pageSize:t.nodesPerPage,lodMetric:t.lodSelectionMetricType,urlPrefix:o}}catch(u){null!=a&&a.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",n,u),l=u}}if(!n)return null;const d=n?.split("/").pop(),p=`${r}/nodes/`,c=p+d;try{return{type:"node",rootNode:(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(c,{query:{f:"json",token:s},responseType:"json",signal:i})).data,urlPrefix:p}}catch(u){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("sceneservice:root-node-missing","Root node missing.",{pageError:l,nodeError:u,url:c})}}


/***/ }),

/***/ 84356:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ui: () => (/* binding */ j),
  Yj: () => (/* binding */ f),
  id: () => (/* binding */ I),
  kF: () => (/* binding */ m),
  fV: () => (/* binding */ c),
  C1: () => (/* binding */ C),
  hG: () => (/* binding */ S),
  hn: () => (/* binding */ T),
  ke: () => (/* binding */ g),
  Ih: () => (/* binding */ b),
  M6: () => (/* binding */ y),
  Qo: () => (/* binding */ w),
  Fm: () => (/* binding */ v),
  PY: () => (/* binding */ p),
  OZ: () => (/* binding */ d)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/TimeExtent.js
var TimeExtent = __webpack_require__(19790);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/layerContainerType.js
var layerContainerType = __webpack_require__(73324);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(84698);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/persistableUrlUtils.js
var persistableUrlUtils = __webpack_require__(63680);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/timeUtils.js
var timeUtils = __webpack_require__(46437);
;// ../node_modules/@arcgis/core/support/timeUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function i(t){return void 0!==t.timeInfo}async function r(n,r){if(0===n.length)return t.allTime;const l=n.filter(i);await Promise.all(l.map((t=>t.load({signal:r}))));const s=[],o=[];for(const t of l)"feature"!==t?.type&&"map-image"!==t?.type||!t.timeInfo?.hasLiveData?o.push(t):s.push(t);const m=t=>null==t||t.isAllTime,u=o.map((t=>t.timeInfo?.fullTimeExtent));if(u.some(m))return t.allTime;const a=s.map((async t=>{const{timeExtent:e}=await t.fetchRecomputedExtents({signal:r});return e||t.timeInfo?.fullTimeExtent})),f=(await Promise.allSettled(a)).map((t=>"fulfilled"===t.status?t.value:null));if(f.some(m))return t.allTime;return[...f,...u].filter(e).reduce(((t,e)=>t.union(e)))}function timeUtils_l(e){if(!e)return e;const{start:i,end:r}=e;return new TimeExtent/* default */.A({start:null!=i?(0,timeUtils/* offsetDate */.S1)(i,-i.getTimezoneOffset(),"minutes"):i,end:null!=r?(0,timeUtils/* offsetDate */.S1)(r,-r.getTimezoneOffset(),"minutes"):r})}function timeUtils_s(e){if(!e)return e;const{start:i,end:r}=e;return new TimeExtent/* default */.A({start:null!=i?(0,timeUtils/* offsetDate */.S1)(i,i.getTimezoneOffset(),"minutes"):i,end:null!=r?(0,timeUtils/* offsetDate */.S1)(r,r.getTimezoneOffset(),"minutes"):r})}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/ElevationInfo.js + 1 modules
var ElevationInfo = __webpack_require__(60973);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/webdoc/support/opacityUtils.js
var opacityUtils = __webpack_require__(48904);
;// ../node_modules/@arcgis/core/layers/support/commonProperties.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const p={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}},y={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,r)=>!r.disablePopup},write:{enabled:!0,writer(e,r,n){r[n]=!e}}}},m={type:Boolean,value:!0,nonNullable:!0,json:{name:"showLabels",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}},d={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:persistableUrlUtils.w}}},c={type:Boolean,value:!0,nonNullable:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}},f={value:null,type:ElevationInfo/* default */.A,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}};function w(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const u={write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K},read:!0},g={type:Number,json:{origins:{"web-document":u,"portal-item":{write:!0}}}},b={...g,json:{...g.json,origins:{"web-document":{...u,write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,r,n)=>n&&"service"!==n.origin||!r.drawingInfo||void 0===r.drawingInfo.transparency?r.layerDefinition?.drawingInfo&&void 0!==r.layerDefinition.drawingInfo.transparency?(0,opacityUtils/* transparencyToOpacity */.D)(r.layerDefinition.drawingInfo.transparency):void 0:(0,opacityUtils/* transparencyToOpacity */.D)(r.drawingInfo.transparency)}}},j={type:TimeExtent/* default */.A,readOnly:!0,get(){if(!this.layer?.timeInfo)return null;const{datesInUnknownTimezone:e,timeOffset:r,useViewTime:n}=this.layer,i=this.view?.timeExtent;let t=this.layer.timeExtent;e&&(t=timeUtils_s(t));let s=n?i&&t?i.intersection(t):i||t:t;if(!s||s.isEmpty||s.isAllTime)return s;r&&(s=s.offset(-r.value,r.unit)),e&&(s=timeUtils_l(s));const l=this._get("timeExtent");return s.equals(l)?l:s}},v={type:Extent/* default */.A,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(e,r)=>{const t=Extent/* default */.A.fromJSON(e);return null!=r.spatialReference&&"object"==typeof r.spatialReference&&(t.spatialReference=SpatialReference/* default */.A.fromJSON(r.spatialReference)),t}}}},read:!1}},I={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},T={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.minScale",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}},name:"layerDefinition.minScale",write:!0}},S={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.maxScale",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}},name:"layerDefinition.maxScale",write:!0}},C={json:{write:{ignoreOrigin:!0,layerContainerTypes:layerContainerType/* excludeTables */.K},origins:{"web-map":{read:!1,write:!1}}}};


/***/ }),

/***/ 38938:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  rS: () => (/* binding */ domains_i),
  gK: () => (/* binding */ domains_n)
});

// UNUSED EXPORTS: CodedValueDomain, DomainBase, InheritedDomain, RangeDomain

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(28902);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
;// ../node_modules/@arcgis/core/layers/support/CodedValue.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var t;let p=t=class extends JSONSupport/* JSONSupport */.oY{constructor(r){super(r),this.name=null,this.code=null}clone(){return new t({name:this.name,code:this.code})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"name",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String,Number],json:{write:!0}})],p.prototype,"code",void 0),p=t=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.CodedValue")],p);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
;// ../node_modules/@arcgis/core/layers/support/Domain.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const c=new jsonMap/* JSONMap */.J({inherited:"inherited",codedValue:"coded-value",range:"range"});let a=class extends JSONSupport/* JSONSupport */.oY{constructor(r){super(r),this.name=null,this.type=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],a.prototype,"name",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)(c)],a.prototype,"type",void 0),a=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.Domain")],a);const i=a;

;// ../node_modules/@arcgis/core/layers/support/CodedValueDomain.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var d;let CodedValueDomain_p=d=class extends i{constructor(e){super(e),this.codedValues=null,this.type="coded-value"}getName(e){let o=null;if(this.codedValues){const r=String(e);this.codedValues.some((e=>(String(e.code)===r&&(o=e.name),!!o)))}return o}clone(){return new d({codedValues:(0,lang/* clone */.o8)(this.codedValues),name:this.name})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[p],json:{write:!0}})],CodedValueDomain_p.prototype,"codedValues",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({codedValue:"coded-value"})],CodedValueDomain_p.prototype,"type",void 0),CodedValueDomain_p=d=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.CodedValueDomain")],CodedValueDomain_p);const u=CodedValueDomain_p;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
;// ../node_modules/@arcgis/core/layers/support/InheritedDomain.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var InheritedDomain_t;let InheritedDomain_i=InheritedDomain_t=class extends i{constructor(r){super(r),this.type="inherited"}clone(){return new InheritedDomain_t}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({inherited:"inherited"})],InheritedDomain_i.prototype,"type",void 0),InheritedDomain_i=InheritedDomain_t=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.InheritedDomain")],InheritedDomain_i);const InheritedDomain_p=InheritedDomain_i;

;// ../node_modules/@arcgis/core/layers/support/RangeDomain.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var s;let RangeDomain_i=s=class extends i{constructor(e){super(e),this.maxValue=null,this.minValue=null,this.type="range"}clone(){return new s({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}};(0,tslib_es6._)([(0,property/* property */.MZ)({json:{type:[Number],read:{source:"range",reader:(e,r)=>r.range?.[1]},write:{enabled:!1,overridePolicy(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer(e,r,a){r[a]=[this.minValue||0,e]}}}})],RangeDomain_i.prototype,"maxValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{type:[Number],read:{source:"range",reader:(e,r)=>r.range?.[0]},write:{target:"range",writer(e,r,a){r[a]=[e,this.maxValue||0]}}}})],RangeDomain_i.prototype,"minValue",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({range:"range"})],RangeDomain_i.prototype,"type",void 0),RangeDomain_i=s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.RangeDomain")],RangeDomain_i);const n=RangeDomain_i;

;// ../node_modules/@arcgis/core/layers/support/domains.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const domains_n={key:"type",base:i,typeMap:{range:n,"coded-value":u,inherited:InheritedDomain_p}};function domains_i(r){if(!r?.type)return null;switch(r.type){case"range":return n.fromJSON(r);case"codedValue":return u.fromJSON(r);case"inherited":return InheritedDomain_p.fromJSON(r)}return null}


/***/ }),

/***/ 17930:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59851);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const i=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__/* .JSONMap */ .J({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml",esriFieldTypeBigInteger:"big-integer",esriFieldTypeDateOnly:"date-only",esriFieldTypeTimeOnly:"time-only",esriFieldTypeTimestampOffset:"timestamp-offset"});


/***/ }),

/***/ 39532:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ce: () => (/* binding */ f),
/* harmony export */   It: () => (/* binding */ p),
/* harmony export */   LG: () => (/* binding */ i),
/* harmony export */   OM: () => (/* binding */ a),
/* harmony export */   Y: () => (/* binding */ s),
/* harmony export */   bK: () => (/* binding */ c),
/* harmony export */   sQ: () => (/* binding */ l)
/* harmony export */ });
/* unused harmony export toggleTypeKeword */
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13484);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78983);
/* harmony import */ var _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96082);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function o(o){const i=o.spatialReference;if(i.isWGS84)return o.clone();if(i.isWebMercator)return (0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .webMercatorToGeographic */ .ci)(o);const s=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.WGS84;return await (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_0__.initializeProjection)(i,s),(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_0__.project)(o,s)}function i(e,t){if(!s(e,t)){const r=e.typeKeywords;r?r.push(t):e.typeKeywords=[t]}}function s(e,t){return!!e.typeKeywords?.includes(t)}function c(e){return s(e,f.HOSTED_SERVICE)}function a(e,t){const r=e.typeKeywords;if(r){const e=r.indexOf(t);e>-1&&r.splice(e,1)}}function u(e,t,r){r?i(e,t):a(e,t)}async function l(e){const t=e.clone().normalize();let r;if(t.length>1)for(const n of t)r?n.width>r.width&&(r=n):r=n;else r=t[0];return o(r)}const f={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table",HOSTED_SERVICE:"Hosted Service",LOCAL_SCENE:"ViewingMode-Local",TILED_IMAGERY:"Tiled Imagery",GROUP_LAYER_MAP:"Map"};function p(e){const{portal:t,isOrgItem:r,itemControl:n}=e,o=t.user?.privileges;let i=!o||o.includes("features:user:edit"),s=!!r&&!!o?.includes("features:user:fullEdit");const c="update"===n||"admin"===n;return c?s=i=!0:s&&(i=!0),{features:{edit:i,fullEdit:s},content:{updateItem:c}}}


/***/ }),

/***/ 12071:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20909);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function p(i){return o[t(i)]||e}function t(i){return"json"===i.type?"application/json":"blob"===i.type?i.blob.type:n(i.url)}function n(p){const t=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getPathExtension */ .Zo)(p);return g[t]||a}const o={},a="text/plain",e=o[a],g={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const l in g)o[g[l]]=l;


/***/ }),

/***/ 98751:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addOrUpdateResource: () => (/* binding */ s),
/* harmony export */   bg: () => (/* binding */ m),
/* harmony export */   cL: () => (/* binding */ p),
/* harmony export */   fetchResources: () => (/* binding */ o),
/* harmony export */   removeAllResources: () => (/* binding */ l),
/* harmony export */   removeResource: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony exports getSiblingOfSameType, splitPrefixFileNameAndExtension */
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86394);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98849);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20909);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function o(e,t={},a){await e.load(a);const o=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(e.itemUrl,"resources"),{start:s=1,num:n=10,sortOrder:l="asc",sortField:u="created"}=t,c={query:{start:s,num:n,sortOrder:l,sortField:u,token:e.apiKey},signal:a?.signal},i=await e.portal.request(o,c);return{total:i.total,nextStart:i.nextStart,resources:i.resources.map((({created:t,size:r,resource:a})=>({created:new Date(t),size:r,resource:e.resourceFromPath(a)})))}}async function s(e,a,o,s){if(!e.hasPath())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(`portal-item-resource-${a}:invalid-path`,"Resource does not have a valid path");const n=e.portalItem;await n.load(s);const l=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(n.userItemUrl,"add"===a?"addResources":"updateResources"),[c,i]=u(e.path),p=new FormData;return c&&"."!==c&&p.append("resourcesPrefix",c),null!=s&&s.compress&&p.append("compress","true"),p.append("fileName",i),p.append("file",o,i),p.append("f","json"),s?.access&&p.append("access",s.access),await n.portal.request(l,{method:"post",body:p,signal:s?.signal}),e}async function n(e,a,o){if(!a.hasPath())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(o);const s=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(e.userItemUrl,"removeResources");await e.portal.request(s,{method:"post",query:{resource:a.path},signal:o?.signal}),a.portalItem=null}async function l(e,t){await e.load(t);const a=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(e.userItemUrl,"removeResources");return e.portal.request(a,{method:"post",query:{deleteAll:!0},signal:t?.signal})}function u(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function c(e){const[t,r]=i(e),[a,o]=u(t);return[a,o,r]}function i(e){const t=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getPathExtension */ .Zo)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}async function p(t){if("blob"===t.type)return t.blob;if("json"===t.type)return new Blob([t.jsonString],{type:"application/json"});return(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t.url,{responseType:"blob"})).data}function d(e,t){if(!e.hasPath())return null;const[a,,o]=c(e.path);return e.portalItem.resourceFromPath(r(a,t+o))}function m(e,t){if(!e.hasPath())return null;const[a,,o]=c(e.path);return e.portalItem.resourceFromPath((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(a,t+o))}


/***/ }),

/***/ 10301:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92976);
/* harmony import */ var _geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99817);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const m={unknown:1,inches:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","inches"),feet:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","feet"),"us-feet":(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","us-feet"),yards:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","yards"),miles:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","miles"),"nautical-miles":(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","nautical-miles"),millimeters:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","millimeters"),centimeters:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","centimeters"),decimeters:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","decimeters"),meters:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","meters"),kilometers:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","kilometers"),"decimal-degrees":1/(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .lengthToDegrees */ .vl)(1,"meters",_geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_1__/* .earth */ .$O.radius)};


/***/ }),

/***/ 44116:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tn: () => (/* binding */ p)
/* harmony export */ });
/* unused harmony exports createFieldInfos, createFieldsContent, createPopupTemplateForFeatureReduction */
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56542);
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42453);
/* harmony import */ var _popup_content_AttachmentsContent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51777);
/* harmony import */ var _popup_content_Content_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27597);
/* harmony import */ var _popup_content_CustomContent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80004);
/* harmony import */ var _popup_content_ExpressionContent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44395);
/* harmony import */ var _popup_content_FieldsContent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3082);
/* harmony import */ var _popup_content_MediaContent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53155);
/* harmony import */ var _popup_content_RelationshipContent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73875);
/* harmony import */ var _popup_content_TextContent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23676);
/* harmony import */ var _popup_FieldInfo_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31386);
/* harmony import */ var _popup_support_FieldInfoFormat_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56473);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function p({displayField:t,editFieldsInfo:n,fields:i,objectIdField:o,title:r},s){if(!i)return null;const l=w({editFieldsInfo:n,fields:i,objectIdField:o},s);if(!l.length)return null;const a=y({titleBase:r,fields:i,displayField:t}),p=j();return new _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({title:a,content:p,fieldInfos:l})}function u(t){const{fields:n,featureReduction:i,title:o}=t,r=i.fields;if(!r)return null;const s=b(r,n??[]);if(!s.length)return null;const l=C();return new e({title:o,content:l,fieldInfos:s})}const c=(e,t)=>t.visibleFieldNames?t.visibleFieldNames.has(e.name):(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .isFieldVisibleByDefault */ .Bz)(e,t);function f(e,t){const n=e;return t&&(e=e.filter((e=>!t.includes(e.type)))),e===n&&(e=e.slice()),e.sort(d),e}function d(e,t){return"oid"===e.type?-1:"oid"===t.type?1:I(e)?-1:I(t)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((t.alias||t.name).toLocaleLowerCase())}function m(e,t){return new s({fieldInfos:w(e,t).filter((e=>e.visible))})}function w(e,n){const i=n?.visibleFieldNames;return f(e.fields??[],n?.ignoreFieldTypes||v).map((n=>new _popup_FieldInfo_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A({fieldName:n.name,isEditable:(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .isFieldEditable */ .R$)(n,e),label:n.alias,format:g(n),visible:c(n,{...e,visibleFieldNames:i})})))}function b(e,t){return e.map((e=>new l({fieldName:e.name,isEditable:!1,label:e.alias,format:F(e,t),visible:!0})))}function F(e,t){const{onStatisticField:n,onStatisticExpression:i,statisticType:o}=e;if(n){const e=t.find((e=>n===e.name));if(e)return g(e)}return"number"===i?.returnType?new a({digitSeparator:!0,places:2}):"count"===o?new a({digitSeparator:!0,places:0}):null}function g(e){switch(e.type){case"small-integer":case"integer":case"single":return new _popup_support_FieldInfoFormat_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A({digitSeparator:!0,places:0});case"double":return new _popup_support_FieldInfoFormat_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A({digitSeparator:!0,places:2});case"string":return (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .isRasterPixelValueField */ .JL)(e.name)?new _popup_support_FieldInfoFormat_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A({digitSeparator:!0,places:0}):null;default:return null}}function j(){return[new _popup_content_FieldsContent_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,new _popup_content_AttachmentsContent_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A]}function C(){return[new s]}function y(e){const t=(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .getDisplayFieldName */ .mB)(e),{titleBase:n}=e;return t?`${n}: {${t.trim()}}`:n??""}function I(e){if("name"===(e.name&&e.name.toLowerCase()))return!0;return"name"===(e.alias&&e.alias.toLowerCase())}const v=["geometry","blob","raster","guid","xml"];


/***/ }),

/***/ 60973:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ h)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(6267);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/fieldUtils.js
var fieldUtils = __webpack_require__(42453);
;// ../node_modules/@arcgis/core/symbols/support/FeatureExpressionInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var i;let p=i=class extends JSONSupport/* JSONSupport */.oY{constructor(r){super(r)}async collectRequiredFields(r,s){return (0,fieldUtils/* collectArcadeFieldNames */.Dx)(r,s,this.expression)}clone(){return new i({expression:this.expression,title:this.title})}equals(r){return this.expression===r.expression&&this.title===r.title}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"expression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"title",void 0),p=i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.FeatureExpressionInfo")],p);const c=p;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/unitConversionUtils.js
var unitConversionUtils = __webpack_require__(97046);
;// ../node_modules/@arcgis/core/symbols/support/ElevationInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var l;const m=(0,jsonMap/* strict */.O)()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),d=new jsonMap/* JSONMap */.J({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let ElevationInfo_c=l=class extends JSONSupport/* JSONSupport */.oY{constructor(e){super(e),this.offset=null}readFeatureExpressionInfo(e,r){return null!=e?e:r.featureExpression&&0===r.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,r,o,t){r[o]=e.write({},t),"0"===e.expression&&(r.featureExpression={value:0})}get mode(){const{offset:e,featureExpressionInfo:r}=this;return this._isOverridden("mode")?this._get("mode"):null!=e||r?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,r){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,r):null}clone(){return new l({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}equals(e){return this.mode===e.mode&&this.offset===e.offset&&this.unit===e.unit&&(0,maybe/* equalsMaybe */.CM)(this.featureExpressionInfo,e.featureExpressionInfo)}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:c,json:{write:!0}})],ElevationInfo_c.prototype,"featureExpressionInfo",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],ElevationInfo_c.prototype,"readFeatureExpressionInfo",null),(0,tslib_es6._)([(0,writer/* writer */.K)("featureExpressionInfo",{featureExpressionInfo:{type:c},"featureExpression.value":{type:[0]}})],ElevationInfo_c.prototype,"writeFeatureExpressionInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:m.apiValues,nonNullable:!0,json:{type:m.jsonValues,read:m.read,write:{writer:m.write,isRequired:!0}}})],ElevationInfo_c.prototype,"mode",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],ElevationInfo_c.prototype,"offset",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:unitConversionUtils/* supportedUnits */.KQ,json:{type:String,read:d.read,write:d.write}})],ElevationInfo_c.prototype,"unit",null),ElevationInfo_c=l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.ElevationInfo")],ElevationInfo_c);const h=ElevationInfo_c;


/***/ }),

/***/ 97046:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ao: () => (/* binding */ r),
/* harmony export */   KQ: () => (/* binding */ o)
/* harmony export */ });
/* unused harmony export supportsUnit */
/* harmony import */ var _renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10301);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function n(n){return!!n&&null!=t[n]}function r(n){return 1/(_renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .meterIn */ .j[n]||1)}function e(){const n=Object.keys(_renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .meterIn */ .j);return n.sort(),n}const o=e();


/***/ }),

/***/ 54383:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21121);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98849);
/* harmony import */ var _support_apiKeyUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71647);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function i(i){if(_config_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.apiKey&&(0,_support_apiKeyUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .supportsApiKey */ .Q)(i.portal.url))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("save-api-key-utils:api-key-not-supported",`Saving is not supported on ${i.portal.url} when using an api key`)}


/***/ }),

/***/ 22942:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SO: () => (/* binding */ p),
/* harmony export */   dL: () => (/* binding */ m),
/* harmony export */   rH: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12690);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98849);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40189);
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33880);
/* harmony import */ var _portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98751);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function u(e,r,o=null){const t=await i(e,r,o);await h(t,r,o)}async function p(e,r,o,t,s=null){const a=await i(o,t,s);await e.update({data:r}),await h(a,t,s)}async function i(e,s,n=null){if(!s?.resources)return;const u=s.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=s.portalItem;const p=new Set(s.resources.toKeep.map((e=>e.resource.path))),i=new Set,h=[];p.forEach((r=>{u.delete(r),e.paths.push(r)}));for(const r of s.resources.toUpdate)if(u.delete(r.resource.path),p.has(r.resource.path)||i.has(r.resource.path)){const{resource:o,content:t,finish:s,error:u}=r,p=(0,_portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .getSiblingOfSameTypeI */ .bg)(o,(0,_core_uuid_js__WEBPACK_IMPORTED_MODULE_3__/* .generateUUID */ .lk)());e.paths.push(p.path),h.push(f({resource:p,content:t,compress:r.compress,finish:s,error:u},n))}else e.paths.push(r.resource.path),h.push(l(r,n)),i.add(r.resource.path);for(const r of s.resources.toAdd)e.paths.push(r.resource.path),u.has(r.resource.path)?u.delete(r.resource.path):h.push(f(r,n));if(0===h.length)return u;const m=await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .allSettledErrors */ .Ol)(h);if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .throwIfAborted */ .Te)(n),m.length>0)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("save:resources","Failed to save one or more resources",{errors:m});return u}async function h(e,r,o=null){if(!e||!r.portalItem)return;const t=[];for(const s of e){const e=r.portalItem.resourceFromPath(s);t.push(e.portalItem.removeResource(e,o))}await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .eachAlways */ .Lx)(t)}async function f(r,o){const t={...null!=o?o:{},compress:r.compress},s=await (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .result */ .Ke)(r.resource.portalItem.addResource(r.resource,await (0,_portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .contentToBlob */ .cL)(r.content),t));if(!0!==s.ok)throw r.error?.(s.error),s.error;r.finish?.(r.resource)}async function l(r,o){const t=await (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .result */ .Ke)(r.resource.update(await (0,_portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .contentToBlob */ .cL)(r.content),o));if(!0!==t.ok)throw r.error?.(t.error),t.error;r.finish?.(r.resource)}async function m(e){const r=[];for(const o of e.allLayers)if("beforeSave"in o&&"function"==typeof o.beforeSave){const e=o.beforeSave();e&&r.push(e)}await Promise.allSettled(r)}


/***/ })

};
;