"use strict";
exports.id = 4749;
exports.ids = [4749];
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

/***/ 4486:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ s)
/* harmony export */ });
/* unused harmony export BBox */
/* harmony import */ var _arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85569);
/* harmony import */ var _PooledArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63678);
/* harmony import */ var _chunks_quickselect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45973);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class s{constructor(t=9,i){this._compareMinX=o,this._compareMinY=l,this._toBBox=t=>t,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),i&&("function"==typeof i?this._toBBox=i:this._initFormat(i)),this.clear()}destroy(){this.clear(),p.prune(),g.prune(),M.prune(),X.prune()}all(t){this._all(this._data,t)}search(t,i){let n=this._data;const e=this._toBBox;if(x(t,n))for(p.clear();n;){for(let s=0,h=n.children.length;s<h;s++){const h=n.children[s],a=n.leaf?e(h):h;x(t,a)&&(n.leaf?i(h):_(t,a)?this._all(h,i):p.push(h))}n=p.pop()}}collides(t){let i=this._data;const n=this._toBBox;if(!x(t,i))return!1;for(p.clear();i;){for(let e=0,s=i.children.length;e<s;e++){const s=i.children[e],h=i.leaf?n(s):s;if(x(t,h)){if(i.leaf||_(t,h))return!0;p.push(s)}}i=p.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let i=0,n=t.length;i<n;i++)this.insert(t[i]);return this}let i=this._build(t.slice(0,t.length),0,t.length-1,0);if(this._data.children.length)if(this._data.height===i.height)this._splitRoot(this._data,i);else{if(this._data.height<i.height){const t=this._data;this._data=i,i=t}this._insert(i,this._data.height-i.height-1,!0)}else this._data=i;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new w([]),this}remove(i){if(!i)return this;let n,e=this._data,s=null,h=0,a=!1;const r=this._toBBox(i);for(M.clear(),X.clear();e||M.length>0;){if(e||(e=M.pop(),s=M.data[M.length-1],h=X.pop()??0,a=!0),e.leaf&&(n=(0,_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .indexOf */ .qh)(e.children,i,e.children.length,e.indexHint),-1!==n))return e.children.splice(n,1),M.push(e),this._condense(M),this;a||e.leaf||!_(e,r)?s?(h++,e=s.children[h],a=!1):e=null:(M.push(e),X.push(h),h=0,s=e,e=e.children[0])}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_all(t,i){let n=t;for(g.clear();n;){if(!0===n.leaf)for(const t of n.children)i(t);else g.pushArray(n.children);n=g.pop()??null}}_build(t,i,n,e){const s=n-i+1;let a=this._maxEntries;if(s<=a){const e=new w(t.slice(i,n+1));return h(e,this._toBBox),e}e||(e=Math.ceil(Math.log(s)/Math.log(a)),a=Math.ceil(s/a**(e-1)));const r=new b([]);r.height=e;const o=Math.ceil(s/a),l=o*Math.ceil(Math.sqrt(a));f(t,i,n,l,this._compareMinX);for(let h=i;h<=n;h+=l){const i=Math.min(h+l-1,n);f(t,h,i,o,this._compareMinY);for(let n=h;n<=i;n+=o){const s=Math.min(n+o-1,i);r.children.push(this._build(t,n,s,e-1))}}return h(r,this._toBBox),r}_chooseSubtree(t,i,n,e){for(;e.push(i),!0!==i.leaf&&e.length-1!==n;){let n,e=1/0,s=1/0;for(let h=0,a=i.children.length;h<a;h++){const a=i.children[h],r=c(a),o=d(t,a)-r;o<s?(s=o,e=r<e?r:e,n=a):o===s&&r<e&&(e=r,n=a)}i=n||i.children[0]}return i}_insert(t,i,n){const e=this._toBBox,s=n?t:e(t);M.clear();const h=this._chooseSubtree(s,this._data,i,M);for(h.children.push(t),r(h,s);i>=0&&M.data[i].children.length>this._maxEntries;)this._split(M,i),i--;this._adjustParentBBoxes(s,M,i)}_split(t,i){const n=t.data[i],e=n.children.length,s=this._minEntries;this._chooseSplitAxis(n,s,e);const a=this._chooseSplitIndex(n,s,e);if(!a)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const r=n.children.splice(a,n.children.length-a),o=n.leaf?new w(r):new b(r);o.height=n.height,h(n,this._toBBox),h(o,this._toBBox),i?t.data[i-1].children.push(o):this._splitRoot(n,o)}_splitRoot(t,i){this._data=new b([t,i]),this._data.height=t.height+1,h(this._data,this._toBBox)}_chooseSplitIndex(t,i,n){let e,s,h;e=s=1/0;for(let r=i;r<=n-i;r++){const i=a(t,0,r,this._toBBox),o=a(t,r,n,this._toBBox),l=u(i,o),m=c(i)+c(o);l<e?(e=l,h=r,s=m<s?m:s):l===e&&m<s&&(s=m,h=r)}return h}_chooseSplitAxis(t,i,n){const e=t.leaf?this._compareMinX:o,s=t.leaf?this._compareMinY:l;this._allDistMargin(t,i,n,e)<this._allDistMargin(t,i,n,s)&&t.children.sort(e)}_allDistMargin(t,i,n,e){t.children.sort(e);const s=this._toBBox,h=a(t,0,i,s),o=a(t,n-i,n,s);let l=m(h)+m(o);for(let a=i;a<n-i;a++){const i=t.children[a];r(h,t.leaf?s(i):i),l+=m(h)}for(let a=n-i-1;a>=i;a--){const i=t.children[a];r(o,t.leaf?s(i):i),l+=m(o)}return l}_adjustParentBBoxes(t,i,n){for(let e=n;e>=0;e--)r(i.data[e],t)}_condense(i){for(let n=i.length-1;n>=0;n--){const e=i.data[n];if(0===e.children.length)if(n>0){const s=i.data[n-1],h=s.children;h.splice((0,_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .indexOf */ .qh)(h,e,h.length,s.indexHint),1)}else this.clear();else h(e,this._toBBox)}}_initFormat(t){const i=["return a"," - b",";"];this._compareMinX=new Function("a","b",i.join(t[0])),this._compareMinY=new Function("a","b",i.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function h(t,i){a(t,0,t.children.length,i,t)}function a(t,i,n,e,s){s||(s=new w([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let h,a=i;a<n;a++)h=t.children[a],r(s,t.leaf?e(h):h);return s}function r(t,i){t.minX=Math.min(t.minX,i.minX),t.minY=Math.min(t.minY,i.minY),t.maxX=Math.max(t.maxX,i.maxX),t.maxY=Math.max(t.maxY,i.maxY)}function o(t,i){return t.minX-i.minX}function l(t,i){return t.minY-i.minY}function c(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function m(t){return t.maxX-t.minX+(t.maxY-t.minY)}function d(t,i){return(Math.max(i.maxX,t.maxX)-Math.min(i.minX,t.minX))*(Math.max(i.maxY,t.maxY)-Math.min(i.minY,t.minY))}function u(t,i){const n=Math.max(t.minX,i.minX),e=Math.max(t.minY,i.minY),s=Math.min(t.maxX,i.maxX),h=Math.min(t.maxY,i.maxY);return Math.max(0,s-n)*Math.max(0,h-e)}function _(t,i){return t.minX<=i.minX&&t.minY<=i.minY&&i.maxX<=t.maxX&&i.maxY<=t.maxY}function x(t,i){return i.minX<=t.maxX&&i.minY<=t.maxY&&i.maxX>=t.minX&&i.maxY>=t.minY}function f(t,i,n,s,h){const a=[i,n];for(;a.length;){const i=a.pop(),n=a.pop();if(i-n<=s)continue;const r=n+Math.ceil((i-n)/s/2)*s;(0,_chunks_quickselect_js__WEBPACK_IMPORTED_MODULE_2__.q)(t,r,n,i,h),a.push(n,r,r,i)}}const p=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,g=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,M=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,X=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A({deallocator:void 0});class Y{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class B extends Y{constructor(){super(...arguments),this.height=1,this.indexHint=new _arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .PositionHint */ .vW}}class w extends B{constructor(t){super(),this.children=t,this.leaf=!0}}class b extends B{constructor(t){super(),this.children=t,this.leaf=!1}}


/***/ }),

/***/ 20316:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ j),
/* harmony export */   W: () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46615);
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76287);
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58680);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21839);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22279);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const f=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.c)(),i=(0,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__.a)(),e=(0,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__.a)(),p=(0,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__.a)();function h(t,r,n){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__.s)(f,r[0],r[1],1),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__.t)(f,f,(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.t)(i,n)),0===f[2]?(0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_2__.s)(t,f[0],f[1]):(0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_2__.s)(t,f[0]/f[2],f[1]/f[2])}function j(s,n,o){return k(e,n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7]),k(p,o[0],o[1],o[2],o[3],o[4],o[5],o[6],o[7]),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.m)(s,(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.a)(e,e),p),0!==s[8]&&(s[0]/=s[8],s[1]/=s[8],s[2]/=s[8],s[3]/=s[8],s[4]/=s[8],s[5]/=s[8],s[6]/=s[8],s[7]/=s[8],s[8]/=s[8]),s}function k(o,c,u,e,p,h,j,k,v){(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.s)(o,c,e,h,u,p,j,1,1,1),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__.s)(f,k,v,1),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.a)(i,o);const[x,b,d]=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__.t)(f,f,(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.t)(i,i));return (0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.s)(i,x,0,0,0,b,0,0,0,d),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.m)(o,i,o)}


/***/ }),

/***/ 14537:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b3: () => (/* binding */ a),
/* harmony export */   jZ: () => (/* binding */ p)
/* harmony export */ });
/* unused harmony export CutVertical */
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21877);
/* harmony import */ var _aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80510);
/* harmony import */ var _boundsUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36358);
/* harmony import */ var _coordsUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65319);
/* harmony import */ var _jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1171);
/* harmony import */ var _normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54599);
/* harmony import */ var _spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87926);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function p(t){return f(t,!0)}function a(t){return f(t,!1)}function f(i,n){if(null==i)return null;const p=i.spatialReference,a=(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .getInfo */ .Vp)(p),f=(0,_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_0__/* .isSerializable */ .Wj)(i)?i.toJSON():i;if(!a)return f;const I=(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .isWebMercator */ .K8)(p)?102100:4326,g=_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__/* .cutParams */ .j7[I].maxX,v=_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__/* .cutParams */ .j7[I].minX;if((0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isPoint */ .fT)(f))return y(f,g,v);if((0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isMultipoint */ .U9)(f))return f.points=f.points.map((t=>y(t,g,v))),f;if((0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isExtent */ .ZC)(f))return d(f,a);if((0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isPolygon */ .Bi)(f)||(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isPolyline */ .Rg)(f)){const t=(0,_boundsUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getBoundsXY */ .Rg)(S,f),i={xmin:t[0],ymin:t[1],xmax:t[2],ymax:t[3]},e=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__/* .offsetMagnitude */ .kd)(i.xmin,v)*(2*g),h=0===e?f:(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__/* .updatePolyGeometry */ .kS)(f,e);return i.xmin+=e,i.xmax+=e,i.xmax>g?P(h,g,n):i.xmin<v?P(h,v,n):h}return f}function d(t,i){if(!i)return t;const s=I(t,i).map((t=>t.extent));return s.length<2?s[0]||t:s.length>2?(t.xmin=i.valid[0],t.xmax=i.valid[1],t):{rings:s.map((t=>[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]))}}function y(t,i,s){if(Array.isArray(t)){const n=t[0];if(n>i){const s=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__/* .offsetMagnitude */ .kd)(n,i);t[0]=n+s*(-2*i)}else if(n<s){const i=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__/* .offsetMagnitude */ .kd)(n,s);t[0]=n+i*(-2*s)}}else{const n=t.x;if(n>i){const s=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__/* .offsetMagnitude */ .kd)(n,i);t.x+=s*(-2*i)}else if(n<s){const i=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__/* .offsetMagnitude */ .kd)(n,s);t.x+=i*(-2*s)}}return t}function I(t,i){const s=[],{ymin:n,ymax:e,xmin:h,xmax:o}=t,r=t.xmax-t.xmin,[u,m]=i.valid,{x,frameId:_}=g(t.xmin,i),{x:l,frameId:c}=g(t.xmax,i),p=x===l&&r>0;if(r>2*m){const t={xmin:h<o?x:l,ymin:n,xmax:m,ymax:e},i={xmin:u,ymin:n,xmax:h<o?l:x,ymax:e},r={xmin:0,ymin:n,xmax:m,ymax:e},p={xmin:u,ymin:n,xmax:0,ymax:e},a=[],f=[];v(t,r)&&a.push(_),v(t,p)&&f.push(_),v(i,r)&&a.push(c),v(i,p)&&f.push(c);for(let s=_+1;s<c;s++)a.push(s),f.push(s);s.push(new C(t,[_]),new C(i,[c]),new C(r,a),new C(p,f))}else x>l||p?s.push(new C({xmin:x,ymin:n,xmax:m,ymax:e},[_]),new C({xmin:u,ymin:n,xmax:l,ymax:e},[c])):s.push(new C({xmin:x,ymin:n,xmax:l,ymax:e},[_]));return s}function g(t,i){const[s,n]=i.valid,e=2*n;let h,o=0;return t>n?(h=Math.ceil(Math.abs(t-n)/e),t-=h*e,o=h):t<s&&(h=Math.ceil(Math.abs(t-s)/e),t+=h*e,o=-h),{x:t,frameId:o}}function v(t,i){const{xmin:s,ymin:n,xmax:e,ymax:h}=i;return O(t,s,n)&&O(t,s,h)&&O(t,e,h)&&O(t,e,n)}function O(t,i,s){return i>=t.xmin&&i<=t.xmax&&s>=t.ymin&&s<=t.ymax}function P(t,i,s=!0){const e=!(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isPolyline */ .Rg)(t);if(e&&(0,_coordsUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .closeRings */ .m3)(t),s){return(new T).cut(t,i)}const h=e?t.rings:t.paths,o=e?4:2,r=h.length,m=-2*i;for(let n=0;n<r;n++){const t=h[n];if(t&&t.length>=o){const i=[];for(const s of t)i.push([s[0]+m,s[1]]);h.push(i)}}return e?t.rings=h:t.paths=h,t}class C{constructor(t,i){this.extent=t,this.frameIds=i}}const S=(0,_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)();class T{constructor(){this._linesIn=[],this._linesOut=[]}cut(t,i){let s;if(this._xCut=i,t.rings)this._closed=!0,s=t.rings,this._minPts=4;else{if(!t.paths)return null;this._closed=!1,s=t.paths,this._minPts=2}for(const e of s){if(!e||e.length<this._minPts)continue;let t=!0;for(const i of e)t?(this.moveTo(i),t=!1):this.lineTo(i);this._closed&&this.close()}this._pushLineIn(),this._pushLineOut(),s=[];for(const e of this._linesIn)e&&e.length>=this._minPts&&s.push(e);const n=-2*this._xCut;for(const e of this._linesOut)if(e&&e.length>=this._minPts){for(const t of e)t[0]+=n;s.push(e)}return this._closed?t.rings=s:t.paths=s,t}moveTo(t){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(t[0]),this._moveTo(t[0],t[1],this._prevSide),this._prevPt=t,this._firstPt=t}lineTo(t){const i=this._side(t[0]);if(i*this._prevSide==-1){const s=this._intersect(this._prevPt,t);this._lineTo(this._xCut,s,0),this._prevSide=0,this._lineTo(t[0],t[1],i)}else this._lineTo(t[0],t[1],i);this._prevSide=i,this._prevPt=t}close(){const t=this._firstPt,i=this._prevPt;t[0]===i[0]&&t[1]===i[1]||this.lineTo(t),this._checkClosingPt(this._lineIn),this._checkClosingPt(this._lineOut)}_moveTo(t,i,s){this._closed?(this._lineIn.push([s<=0?t:this._xCut,i]),this._lineOut.push([s>=0?t:this._xCut,i])):(s<=0&&this._lineIn.push([t,i]),s>=0&&this._lineOut.push([t,i]))}_lineTo(t,i,s){this._closed?(this._addPolyVertex(this._lineIn,s<=0?t:this._xCut,i),this._addPolyVertex(this._lineOut,s>=0?t:this._xCut,i)):s<0?(0===this._prevSide&&this._pushLineOut(),this._lineIn.push([t,i])):s>0?(0===this._prevSide&&this._pushLineIn(),this._lineOut.push([t,i])):this._prevSide<0?(this._lineIn.push([t,i]),this._lineOut.push([t,i])):this._prevSide>0&&(this._lineOut.push([t,i]),this._lineIn.push([t,i]))}_addPolyVertex(t,i,s){const n=t.length;n>1&&t[n-1][0]===i&&t[n-2][0]===i?t[n-1][1]=s:t.push([i,s])}_checkClosingPt(t){const i=t.length;i>3&&t[0][0]===this._xCut&&t[i-2][0]===this._xCut&&t[1][0]===this._xCut&&(t[0][1]=t[i-2][1],t.pop())}_side(t){return t<this._xCut?-1:t>this._xCut?1:0}_intersect(t,i){const s=(this._xCut-t[0])/(i[0]-t[0]);return t[1]+s*(i[1]-t[1])}_pushLineIn(){this._lineIn&&this._lineIn.length>=this._minPts&&this._linesIn.push(this._lineIn),this._lineIn=[]}_pushLineOut(){this._lineOut&&this._lineOut.length>=this._minPts&&this._linesOut.push(this._lineOut),this._lineOut=[]}}


/***/ }),

/***/ 74749:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ j)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(48982);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(35775);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(4130);
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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/Layer.js + 1 modules
var Layer = __webpack_require__(68833);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/BlendLayer.js
var BlendLayer = __webpack_require__(15305);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(41506);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js
var ScaleRangeLayer = __webpack_require__(25389);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/request.js
var request = __webpack_require__(86394);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/imageUtils.js
var imageUtils = __webpack_require__(25801);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(20909);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/uuid.js
var uuid = __webpack_require__(33880);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Identifiable.js
var Identifiable = __webpack_require__(65667);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Loadable.js
var Loadable = __webpack_require__(45307);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(52495);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/perspectiveUtils.js
var perspectiveUtils = __webpack_require__(20316);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/screenUtils.js
var screenUtils = __webpack_require__(89882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat3.js
var mat3 = __webpack_require__(46615);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat3f64.js
var mat3f64 = __webpack_require__(76287);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec2.js
var vec2 = __webpack_require__(58680);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec2f64.js
var vec2f64 = __webpack_require__(78286);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Point.js + 1 modules
var Point = __webpack_require__(78632);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Polygon.js
var Polygon = __webpack_require__(62802);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projection.js + 1 modules
var projection = __webpack_require__(13484);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(24793);
;// ../node_modules/@arcgis/core/layers/support/GeoreferenceBase.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let c=class extends Clonable/* Clonable */.P{projectOrWarn(e,r){if(null==e)return e;const{geometry:t,pending:c}=(0,projection.projectOrLoad)(e,r);return c?null:c||t?t:(Logger/* default */.A.getLogger(this).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:e,sourceSpatialReference:e.spatialReference,targetSpatialReference:r}),null)}};c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.GeoreferenceBase")],c);const a=c;

;// ../node_modules/@arcgis/core/layers/support/ControlPointsGeoreference.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const C=(0,mat3f64.a)(),T=(0,vec2f64.a)();let _=class extends Accessor/* default */.A{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null}};(0,tslib_es6._)([(0,property/* property */.MZ)()],_.prototype,"sourcePoint",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Point/* default */.A})],_.prototype,"mapPoint",void 0),_=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.ControlPoint")],_);let O=class extends((0,JSONSupport/* JSONSupportMixin */.Te)(a)){constructor(o){super(o),this.controlPoints=null,this.height=0,this.type="control-points",this.width=0}readControlPoints(o,t){const r=SpatialReference/* default */.A.fromJSON(t.spatialReference),n=(0,mat3f64.f)(...t.coefficients,1);return o.map((o=>((0,vec2.s)(T,o.x,o.y),(0,perspectiveUtils/* transformProjective */.W)(T,T,n),{sourcePoint:o,mapPoint:new Point/* default */.A({x:T[0],y:T[1],spatialReference:r})})))}writeControlPoints(o,t,n,i){if(null!=this.transform)null!=o&&k(o[0])&&(t.controlPoints=o.map((o=>{const t=o.sourcePoint;return{x:t.x,y:t.y}})),t.spatialReference=o[0].mapPoint.spatialReference.toJSON(),t.coefficients=this.transform.slice(0,8));else{const o=new Error/* default */.A("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration.",{layer:i?.layer,georeference:this});i?.messages?i.messages.push(o):Logger/* default */.A.getLogger(this).error(o.name,o.message)}}get coords(){if(null==this.controlPoints)return null;const o=this._updateTransform(C);if(null==o||!k(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return K(o,this.width,this.height,t)}set coords(o){if(null==this.controlPoints||!k(this.controlPoints[0]))return;const t=this.controlPoints[0].mapPoint.spatialReference;if(null==(o=this.projectOrWarn(o,t)))return;const{width:r,height:n}=this,{rings:[[e,s,c,a]]}=o,p={sourcePoint:(0,screenUtils/* createScreenPoint */.tc)(0,n),mapPoint:new Point/* default */.A({x:e[0],y:e[1],spatialReference:t})},u={sourcePoint:(0,screenUtils/* createScreenPoint */.tc)(0,0),mapPoint:new Point/* default */.A({x:s[0],y:s[1],spatialReference:t})},m={sourcePoint:(0,screenUtils/* createScreenPoint */.tc)(r,0),mapPoint:new Point/* default */.A({x:c[0],y:c[1],spatialReference:t})},f={sourcePoint:(0,screenUtils/* createScreenPoint */.tc)(r,n),mapPoint:new Point/* default */.A({x:a[0],y:a[1],spatialReference:t})};k(p)&&k(u)&&k(m)&&k(f)&&(E(C,p,u,m,f),this.controlPoints=this.controlPoints.map((({sourcePoint:o})=>((0,vec2.s)(T,o.x,o.y),(0,perspectiveUtils/* transformProjective */.W)(T,T,C),{sourcePoint:o,mapPoint:new Point/* default */.A({x:T[0],y:T[1],spatialReference:t})}))))}get inverseTransform(){return null==this.transform?null:(0,mat3.d)((0,mat3f64.a)(),this.transform)}get transform(){return this._updateTransform()}toMap(o){if(null==o||null==this.transform||null==this.controlPoints||!k(this.controlPoints[0]))return null;(0,vec2.s)(T,o.x,o.y);const t=this.controlPoints[0].mapPoint.spatialReference;return (0,perspectiveUtils/* transformProjective */.W)(T,T,this.transform),new Point/* default */.A({x:T[0],y:T[1],spatialReference:t})}toSource(o){if(null==o||null==this.inverseTransform||null==this.controlPoints||!k(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return o=o.normalize(),null==(o=(0,projection.projectOrLoad)(o,t).geometry)?null:((0,vec2.s)(T,o.x,o.y),(0,perspectiveUtils/* transformProjective */.W)(T,T,this.inverseTransform),(0,screenUtils/* createScreenPoint */.tc)(T[0],T[1]))}toSourceNormalized(o){const t=this.toSource(o);return null!=t&&(t.x/=this.width,t.y/=this.height),t}_updateTransform(o){const{controlPoints:t,width:r,height:n}=this;if(!(null!=t&&r>0&&n>0))return null;const[e,i,s,l]=t;if(!k(e))return null;const c=e.mapPoint.spatialReference,a=this._projectControlPoint(i,c),p=this._projectControlPoint(s,c),u=this._projectControlPoint(l,c);if(!a.valid||!p.valid||!u.valid)return null;if(!k(a.controlPoint))return null;null==o&&(o=(0,mat3f64.a)());let m=null;return m=k(p.controlPoint)&&k(u.controlPoint)?E(o,e,a.controlPoint,p.controlPoint,u.controlPoint):k(p.controlPoint)?B(o,e,a.controlPoint,p.controlPoint):q(o,e,a.controlPoint),m.every((o=>0===o))?null:m}_projectControlPoint(o,t){if(!k(o))return{valid:!0,controlPoint:o};const{sourcePoint:r,mapPoint:n}=o,{geometry:i,pending:s}=(0,projection.projectOrLoad)(n,t);return s?{valid:!1,controlPoint:null}:s||i?{valid:!0,controlPoint:{sourcePoint:r,mapPoint:i}}:(Logger/* default */.A.getLogger(this).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:o,sourceSpatialReference:n.spatialReference,targetSpatialReference:t}),{valid:!1,controlPoint:null})}};function k(o){return null!=o?.sourcePoint&&null!=o.mapPoint}(0,tslib_es6._)([(0,property/* property */.MZ)({type:[_],json:{write:{allowNull:!1,isRequired:!0}}})],O.prototype,"controlPoints",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("controlPoints")],O.prototype,"readControlPoints",null),(0,tslib_es6._)([(0,writer/* writer */.K)("controlPoints")],O.prototype,"writeControlPoints",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],O.prototype,"coords",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],O.prototype,"height",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],O.prototype,"inverseTransform",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],O.prototype,"transform",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],O.prototype,"width",void 0),O=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.ControlPointsGeoreference")],O);const N=(0,vec2f64.a)(),b=(0,vec2f64.a)(),I=(0,vec2f64.a)(),M=(0,vec2f64.a)(),A=(0,vec2f64.a)(),J=(0,vec2f64.a)(),L=(0,vec2f64.a)(),U=(0,vec2f64.a)(),z=Math.PI/2;function G(o,t,r){(0,vec2.s)(o,r.sourcePoint.x,r.sourcePoint.y),(0,vec2.s)(t,r.mapPoint.x,r.mapPoint.y)}function q(o,t,r){return G(N,A,t),G(b,J,r),(0,vec2.r)(I,b,N,z),(0,vec2.r)(M,N,b,z),(0,vec2.r)(L,J,A,-z),(0,vec2.r)(U,A,J,-z),H(o,N,b,I,M,A,J,L,U)}function B(o,t,r,n){return G(N,A,t),G(b,J,r),G(I,L,n),(0,vec2.l)(M,N,b,.5),(0,vec2.r)(M,I,M,Math.PI),(0,vec2.l)(U,A,J,.5),(0,vec2.r)(U,L,U,Math.PI),H(o,N,b,I,M,A,J,L,U)}function E(o,t,r,n,e){return G(N,A,t),G(b,J,r),G(I,L,n),G(M,U,e),H(o,N,b,I,M,A,J,L,U)}const W=new Array(8).fill(0),D=new Array(8).fill(0);function F(o,t,r,n,e){return o[0]=t[0],o[1]=t[1],o[2]=r[0],o[3]=r[1],o[4]=n[0],o[5]=n[1],o[6]=e[0],o[7]=e[1],o}function H(o,t,r,n,e,i,l,c,a){return (0,perspectiveUtils/* getProjectiveTransform */.O)(o,F(W,t,r,n,e),F(D,i,l,c,a))}function K(o,t,r,n){const e=(0,vec2f64.f)(0,r),s=(0,vec2f64.f)(0,0),l=(0,vec2f64.f)(t,0),c=(0,vec2f64.f)(t,r);return (0,perspectiveUtils/* transformProjective */.W)(e,e,o),(0,perspectiveUtils/* transformProjective */.W)(s,s,o),(0,perspectiveUtils/* transformProjective */.W)(l,l,o),(0,perspectiveUtils/* transformProjective */.W)(c,c,o),new Polygon/* default */.A({rings:[[e,s,l,c,e]],spatialReference:n})}const Q=O;

;// ../node_modules/@arcgis/core/layers/support/CornersGeoreference.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const f=(0,vec2f64.a)();let y=class extends a{constructor(t){super(t),this.bottomLeft=null,this.bottomRight=null,this.topLeft=null,this.topRight=null,this.type="corners"}get coords(){let{topLeft:t,topRight:o,bottomLeft:e,bottomRight:r}=this;if(null==t||null==o||null==e||null==r)return null;const s=t.spatialReference;return o=this.projectOrWarn(o,s),e=this.projectOrWarn(e,s),r=this.projectOrWarn(r,s),null==o||null==e||null==r?null:new Polygon/* default */.A({rings:[[[e.x,e.y],[t.x,t.y],[o.x,o.y],[r.x,r.y],[e.x,e.y]]],spatialReference:s})}set coords(t){const{topLeft:o}=this;if(null==o)return;const e=o.spatialReference;if(null==(t=this.projectOrWarn(t,e)))return;const{rings:[[r,s,n,i]]}=t;this.bottomLeft=new Point/* default */.A({x:r[0],y:r[1],spatialReference:e}),this.topLeft=new Point/* default */.A({x:s[0],y:s[1],spatialReference:e}),this.topRight=new Point/* default */.A({x:n[0],y:n[1],spatialReference:e}),this.bottomRight=new Point/* default */.A({x:i[0],y:i[1],spatialReference:e})}toSourceNormalized(t){const{topLeft:s,topRight:n,bottomRight:p,bottomLeft:c}=this;if(null==t||null==s||null==n||null==p||null==c)return null;const u=s.spatialReference;t=t.normalize();const a=(0,projection.projectOrLoad)(t,u).geometry;if(null==a)return null;(0,vec2.s)(f,a.x,a.y);const y=(0,perspectiveUtils/* getProjectiveTransform */.O)((0,mat3f64.a)(),[s.x,s.y,c.x,c.y,n.x,n.y,p.x,p.y],[0,0,0,1,1,0,1,1]);return (0,perspectiveUtils/* transformProjective */.W)(f,f,y),(0,screenUtils/* createScreenPoint */.tc)(f[0],f[1])}};(0,tslib_es6._)([(0,property/* property */.MZ)()],y.prototype,"coords",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Point/* default */.A})],y.prototype,"bottomLeft",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Point/* default */.A})],y.prototype,"bottomRight",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Point/* default */.A})],y.prototype,"topLeft",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Point/* default */.A})],y.prototype,"topRight",void 0),y=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.CornersGeoreference")],y);const h=y;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(92504);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/common.js
var common = __webpack_require__(57137);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(84698);
;// ../node_modules/@arcgis/core/layers/support/ExtentAndRotationGeoreference.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let p=class extends a{constructor(t){super(t),this.extent=null,this.rotation=0,this.type="extent-and-rotation"}get coords(){if(null==this.extent)return null;const{xmin:t,ymin:e,xmax:r,ymax:o,spatialReference:n}=this.extent;let s;if(this.rotation){const{x:n,y:i}=this.extent.center,a=u(n,i,this.rotation);s=[a(t,e),a(t,o),a(r,o),a(r,e)],s.push(s[0])}else s=[[t,e],[t,o],[r,o],[r,e],[t,e]];return new Polygon/* default */.A({rings:[s],spatialReference:n})}set coords(t){if(null==t||null==this.extent)return;const r=this.extent.spatialReference;if(t=this.projectOrWarn(t,r),null==t?.extent)return;const{rings:[[o,n,s]],extent:{center:{x:i,y:c}}}=t,m=(0,mathUtils/* rad2deg */.KJ)(Math.PI/2-Math.atan2(n[1]-o[1],n[0]-o[0])),l=u(i,c,-m),[p,x]=l(o[0],o[1]),[f,y]=l(s[0],s[1]);this.extent=new Extent/* default */.A({xmin:p,ymin:x,xmax:f,ymax:y,spatialReference:r}),this.rotation=m}toSourceNormalized(t){const{extent:e,rotation:n}=this;if(null==t||null==e)return null;const{xmin:s,ymin:i,xmax:a,ymax:c,center:l,spatialReference:p}=e;t=t.normalize();const x=(0,projection.projectOrLoad)(t,p).geometry;if(null==x)return null;let f=x.x,y=x.y;return n&&([f,y]=u(l.x,l.y,-n)(f,y)),(0,screenUtils/* createScreenPoint */.tc)((0,mathUtils/* scale */.hs)(f,s,a,0,1),(0,mathUtils/* scale */.hs)(y,c,i,0,1))}};function u(t,e,r){const o=(0,common.t)(r),n=Math.cos(o),s=Math.sin(o);return(r,o)=>[n*(r-t)+s*(o-e)+t,n*(o-e)-s*(r-t)+e]}(0,tslib_es6._)([(0,property/* property */.MZ)()],p.prototype,"coords",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Extent/* default */.A})],p.prototype,"extent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number})],p.prototype,"rotation",void 0),p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.ExtentAndRotationGeoreference")],p);const x=p;

;// ../node_modules/@arcgis/core/layers/support/MediaElementBase.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const l={key:"type",base:a,typeMap:{"control-points":Q,corners:h,"extent-and-rotation":x}};let MediaElementBase_u=class extends((0,Identifiable/* NumericIdentifiableMixin */.PH)((0,JSONSupport/* JSONSupportMixin */.Te)(Loadable/* default */.A))){constructor(e){super(e),this.georeference=null,this.opacity=1}readGeoreference(e){return Q.fromJSON(e)}get contentWidth(){return 0}get contentHeight(){return 0}toSource(e){const{georeference:r,contentWidth:o,contentHeight:t}=this;if(null==e||null==r||0===o||0===t)return null;const s=r.toSourceNormalized(e);return null==s?null:(s.x*=o,s.y*=t,s)}};(0,tslib_es6._)([(0,property/* property */.MZ)({types:l,json:{write:!0}})],MediaElementBase_u.prototype,"georeference",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("georeference")],MediaElementBase_u.prototype,"readGeoreference",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],MediaElementBase_u.prototype,"opacity",void 0),MediaElementBase_u=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.MediaElementBase")],MediaElementBase_u);const MediaElementBase_f=MediaElementBase_u;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/portal/support/resourceExtension.js
var resourceExtension = __webpack_require__(12071);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/persistableUrlUtils.js
var persistableUrlUtils = __webpack_require__(63680);
;// ../node_modules/@arcgis/core/layers/support/ImageElement.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let ImageElement_I=class extends MediaElementBase_f{constructor(t){super(t),this.animationOptions=null,this.content=null,this.image=null,this.type="image",this.image=null}load(){const t=this.image;if("string"==typeof t){const e=(0,imageUtils/* getImageData */.M5)(t).then((t=>{this._set("content",t)}));this.addResolvingPromise(e)}else if(t instanceof HTMLImageElement){const e=t.decode().then((()=>{this._set("content",t)}));this.addResolvingPromise(e)}else t?this._set("content",t):this.addResolvingPromise(Promise.reject(new Error/* default */.A("image-element:invalid-image-type","Invalid image type",{image:t})));return Promise.resolve(this)}get contentWidth(){return null==this.content?0:this.content instanceof HTMLImageElement?this.content.naturalWidth:this.content.width}get contentHeight(){return null==this.content?0:this.content instanceof HTMLImageElement?this.content.naturalHeight:this.content.height}readImage(t,e,r){return (0,persistableUrlUtils.f)(e.url,r)}writeImage(t,e,r,o){if(null==t)return;const a=o?.portalItem,l=o?.resources;if(!a||!l)return void("string"==typeof t&&(e[r]=(0,persistableUrlUtils.t)(t,o)));const m="string"!=typeof t||(0,urlUtils/* isDataProtocol */.DB)(t)||(0,urlUtils/* isBlobProtocol */.w8)(t)?null:t;if(m){if(null==(0,persistableUrlUtils.i)(m))return void(e[r]=m);const t=(0,persistableUrlUtils.t)(m,{...o,verifyItemRelativeUrls:o?.verifyItemRelativeUrls?{writtenUrls:o.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},persistableUrlUtils.M.NO);if(a&&t&&!(0,urlUtils/* isAbsolute */.oP)(t))return l.toKeep.push({resource:a.resourceFromPath(t),compress:!1}),void(e[r]=t)}e[r]="<pending>",l.pendingOperations.push(w(t).then((t=>{const o=ImageElement_H(t,a);e[r]=o.itemRelativeUrl,l.toAdd.push({resource:o,content:{type:"blob",blob:t},compress:!1,finish:t=>{this.image=t.url}})})))}};(0,tslib_es6._)([(0,property/* property */.MZ)()],ImageElement_I.prototype,"animationOptions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],ImageElement_I.prototype,"content",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],ImageElement_I.prototype,"contentWidth",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],ImageElement_I.prototype,"contentHeight",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{name:"url",type:String}})],ImageElement_I.prototype,"image",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("image",["url"])],ImageElement_I.prototype,"readImage",null),(0,tslib_es6._)([(0,writer/* writer */.K)("image")],ImageElement_I.prototype,"writeImage",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{name:"mediaType"}})],ImageElement_I.prototype,"type",void 0),ImageElement_I=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.ImageElement")],ImageElement_I);const ImageElement_b=ImageElement_I;async function w(t){if("string"==typeof t){if((0,urlUtils/* isDataProtocol */.DB)(t))return (0,urlUtils/* dataToBlob */.N9)(t);return(await (0,request/* default */.A)(t,{responseType:"blob"})).data}return new Promise((e=>ImageElement_E(t).toBlob(e)))}function ImageElement_E(t){if(t instanceof HTMLCanvasElement)return t;const e=t instanceof HTMLImageElement?t.naturalWidth:t.width,r=t instanceof HTMLImageElement?t.naturalHeight:t.height,o=document.createElement("canvas"),n=o.getContext("2d");return o.width=e,o.height=r,t instanceof HTMLImageElement?n.drawImage(t,0,0,t.width,t.height):t instanceof ImageData&&n.putImageData(t,0,0),o}function ImageElement_H(t,e){const r=(0,uuid/* generateUUID */.lk)(),o=`${(0,urlUtils/* join */.fj)("media",r)}.${(0,resourceExtension/* getResourceContentExtension */.n)({type:"blob",blob:t})}`;return e.resourceFromPath(o)}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry.js
var geometry = __webpack_require__(17639);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/collectionUtils.js
var collectionUtils = __webpack_require__(4194);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Evented.js
var Evented = __webpack_require__(17306);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Promise.js
var core_Promise = __webpack_require__(84410);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(85251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/aaBoundingRect.js
var aaBoundingRect = __webpack_require__(80510);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/intersectsBase.js
var intersectsBase = __webpack_require__(43525);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(87926);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/data/BoundsStore.js
var BoundsStore = __webpack_require__(39645);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/MediaElementView.js
var MediaElementView = __webpack_require__(49241);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/events.js
var events = __webpack_require__(64874);
;// ../node_modules/@arcgis/core/layers/support/VideoElement.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let VideoElement_a=class extends MediaElementBase_f{constructor(e){super(e),this.autoplay=!0,this.content=null,this.type="video"}load(){const e=this.video;if("string"==typeof e){const o=document.createElement("video");o.src=e,o.crossOrigin="anonymous",o.autoplay=!0,o.muted=!0,o.loop=!0,this.addResolvingPromise(this._loadVideo(o).then((()=>{this._set("content",o)})))}else e instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(e).then((()=>{this._set("content",e)}))):this.addResolvingPromise(Promise.reject(new Error/* default */.A("video-element:invalid-video-type","Invalid video type",{video:e})));return Promise.resolve(this)}get contentWidth(){return this.content?.videoWidth??0}get contentHeight(){return this.content?.videoHeight??0}set video(e){"not-loaded"===this.loadStatus?this._set("video",e):Logger/* default */.A.getLogger(this).error("#video","video cannot be changed after the element is loaded.")}_loadVideo(e){return new Promise(((o,s)=>{const r=(0,events/* once */.Oo)(e,"canplay",(()=>{this.removeHandles("canplay"),this.autoplay?e.play().then(o,s):o()}));this.addHandles(r,"canplay"),"anonymous"!==e.crossOrigin&&(e.crossOrigin="anonymous",e.src?.includes("blob:")||(e.src=e.src))}))}};(0,tslib_es6._)([(0,property/* property */.MZ)()],VideoElement_a.prototype,"autoplay",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],VideoElement_a.prototype,"content",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],VideoElement_a.prototype,"contentWidth",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],VideoElement_a.prototype,"contentHeight",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],VideoElement_a.prototype,"video",null),VideoElement_a=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.VideoElement")],VideoElement_a);const d=VideoElement_a;

;// ../node_modules/@arcgis/core/layers/support/LocalMediaElementSource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const LocalMediaElementSource_w={key:"type",defaultKeyValue:"image",base:MediaElementBase_f,typeMap:{image:ImageElement_b,video:d}},LocalMediaElementSource_M=Collection/* default */.A.ofType(LocalMediaElementSource_w);let LocalMediaElementSource_I=class extends(Loadable/* default */.A.LoadableMixin((0,core_Promise/* EsriPromiseMixin */.g)(Evented/* default */.A.EventedAccessor))){constructor(e){super(e),this._index=new BoundsStore/* BoundsStore */.F,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=e=>{for(const s of e.removed){const e=this._elementViewsMap.get(s);this._elementViewsMap.delete(s),this._index.delete(e),this.removeHandles(e),e.destroy(),this.notifyChange("fullExtent")}const{spatialReference:t}=this;for(const s of e.added){if(this._elementViewsMap.get(s))continue;const e=new MediaElementView/* MediaElementView */._({spatialReference:t,element:s});this._elementViewsMap.set(s,e);const r=(0,reactiveUtils/* watch */.wB)((()=>e.coords),(()=>this._updateIndexForElement(e,!1)));this._updateIndexForElement(e,!0),this.addHandles(r,e)}this._elementsIndexes.clear(),this.elements.forEach(((e,t)=>this._elementsIndexes.set(e,t))),this.emit("refresh")},this.elements=new LocalMediaElementSource_M}async load(e){if((0,promiseUtils/* throwIfAborted */.Te)(e),!this.spatialReference){const e=this.elements.find((e=>null!=e.georeference?.coords));this._set("spatialReference",e?e.georeference.coords.spatialReference:SpatialReference/* default */.A.WGS84)}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.addHandles(this.elements.on("change",this._elementsChangedHandler)),this}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(e){this._set("elements",(0,collectionUtils/* referenceSetter */.V)(e,this._get("elements"),LocalMediaElementSource_M))}get fullExtent(){if("not-loaded"===this.loadStatus)return null;const e=this._index.fullBounds;return null==e?null:new Extent/* default */.A({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:this.spatialReference})}set spatialReference(e){"not-loaded"===this.loadStatus?this._set("spatialReference",e):Logger/* default */.A.getLogger(this).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}async queryElements(e,t){await this.load(),await (0,projection.initializeProjection)(e.spatialReference,this.spatialReference,null,t);const s=(0,spatialReferenceUtils/* equals */.aI)(e.spatialReference,this.spatialReference)?e:(0,projection.project)(e,this.spatialReference);if(!s)return[];const r=s.normalize(),o=[];for(const n of r)this._index.forEachInBounds((0,aaBoundingRect/* fromExtent */.VY)(n),(({normalizedCoords:e,element:t})=>{null!=e&&(0,intersectsBase/* extentIntersectsPolygon */.fA)(n,e)&&o.push(t)}));return o.sort(((e,t)=>this._elementsIndexes.get(e)-this._elementsIndexes.get(t))),o}_updateIndexForElement(e,t){const s=e.normalizedBounds,r=this._index.has(e),o=null!=s;this._index.delete(e),o&&this._index.set(e,s),this.notifyChange("fullExtent"),t||(r!==o?this.emit("refresh"):this.emit("change",{element:e.element}))}};(0,tslib_es6._)([(0,property/* property */.MZ)()],LocalMediaElementSource_I.prototype,"elements",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],LocalMediaElementSource_I.prototype,"fullExtent",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],LocalMediaElementSource_I.prototype,"spatialReference",null),LocalMediaElementSource_I=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.LocalMediaElementSource")],LocalMediaElementSource_I);const S=LocalMediaElementSource_I;

;// ../node_modules/@arcgis/core/layers/MediaLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function MediaLayer_S(e){return"object"==typeof e&&null!=e&&"type"in e}let g=class extends((0,BlendLayer/* BlendLayer */.d)((0,ScaleRangeLayer/* ScaleRangeLayer */.j)((0,OperationalLayer/* OperationalLayer */.q)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)(Layer/* default */.A))))){constructor(e){super(e),this.effectiveSource=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this.source=new S}load(e){const t=this.source;if(!t)return this.addResolvingPromise(Promise.reject(new Error/* default */.A("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer."))),Promise.resolve(this);const s=MediaLayer_S(t)?new S({elements:new Collection/* default */.A([t])}):t;this._set("effectiveSource",s),this.spatialReference&&(s.spatialReference=this.spatialReference);const i=s.load(e).then((()=>{this.spatialReference=s.spatialReference}));return this.addResolvingPromise(i),Promise.resolve(this)}destroy(){this.effectiveSource?.destroy(),this.source?.destroy()}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}set source(e){"not-loaded"===this.loadStatus?this._set("source",e):Logger/* default */.A.getLogger(this).error("#source","source cannot be changed after the layer is loaded.")}castSource(e){return e?Array.isArray(e)?new S({elements:new Collection/* default */.A(e)}):e instanceof Collection/* default */.A?new S({elements:e}):e:null}readSource(e,r,o){const t="image"===r.mediaType?new ImageElement_b:"video"===r.mediaType?new d:null;return t?.read(r,o),t}writeSource(e,r,t,s){e&&MediaLayer_S(e)&&"image"===e.type?e.write(r,s):s?.messages&&s?.messages?.push(new Error/* default */.A("media-layer:unsupported-source","source must be an 'ImageElement'"))}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],g.prototype,"effectiveSource",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],g.prototype,"copyright",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],g.prototype,"fullExtent",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["MediaLayer"]})],g.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide"]})],g.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1}}})],g.prototype,"source",null),(0,tslib_es6._)([(0,cast/* cast */.w)("source")],g.prototype,"castSource",null),(0,tslib_es6._)([(0,reader/* reader */.w)("source",["url"])],g.prototype,"readSource",null),(0,tslib_es6._)([(0,writer/* writer */.K)("source")],g.prototype,"writeSource",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],g.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],g.prototype,"type",void 0),g=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.MediaLayer")],g);const j=g;


/***/ }),

/***/ 27664:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LF: () => (/* binding */ n),
/* harmony export */   M9: () => (/* binding */ a),
/* harmony export */   zu: () => (/* binding */ i)
/* harmony export */ });
/* unused harmony exports fromJSON, toJSON */
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76724);
/* harmony import */ var _parser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81816);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57922);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function n(e,t,r){try{return c(e)}catch(s){r?.messages?.push(s)}return null}function a(e,r,s,n){try{const n=o(e);(0,_core_object_js__WEBPACK_IMPORTED_MODULE_1__/* .setDeepValue */ .sM)(s,n,r)}catch(a){n.messages&&n.messages.push(a)}}function o(e){const t=(0,_parser_js__WEBPACK_IMPORTED_MODULE_2__/* .parse */ .q)(e);return t?(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__/* .isEffectFunctions */ .dw)(t)?t.map((e=>e.toJSON())):t.map((({scale:e,effects:t})=>({scale:e,value:t.map((e=>e.toJSON()))}))):null}function c(e){if(!e||0===e.length)return null;if(f(e)){const t=[];for(const r of e)t.push({scale:r.scale,value:i(r.value)});return t}return i(e)}function f(e){const t=e[0];return!!t&&"scale"in t}function i(e){if(!e?.length)return"";const t=[];for(const s of e){let e=[];switch(s.type){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":case"opacity":e=[u(s,"amount")];break;case"blur":e=[u(s,"radius","pt")];break;case"hue-rotate":e=[u(s,"angle","deg")];break;case"drop-shadow":e=[u(s,"xoffset","pt"),u(s,"yoffset","pt"),u(s,"blurRadius","pt"),l(s,"color")];break;case"bloom":e=[u(s,"strength"),u(s,"radius","pt"),u(s,"threshold")]}const n=`${s.type}(${e.filter(Boolean).join(" ")})`;(0,_parser_js__WEBPACK_IMPORTED_MODULE_2__/* .parse */ .q)(n),t.push(n)}return t.join(" ")}function u(t,r,s){if(null==t[r])throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("effect:missing-parameter",`Missing parameter '${r}' in ${t.type} effect`,{effect:t});return s?t[r]+s:""+t[r]}function l(t,r){if(null==t[r])throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("effect:missing-parameter",`Missing parameter '${r}' in ${t.type} effect`,{effect:t});const s=t[r];return`rgba(${s[0]||0}, ${s[1]||0}, ${s[2]||0}, ${s[3]/255||0})`}


/***/ }),

/***/ 81816:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var _colorUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31415);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98849);
/* harmony import */ var _effects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78138);
/* harmony import */ var _chunks_commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42784);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57922);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var m,g,v={exports:{}};v.exports,g=function(){function t(t,e){function r(){this.constructor=t}r.prototype=e.prototype,t.prototype=new r}function e(t,r,n,u){var a=Error.call(this,t);return Object.setPrototypeOf&&Object.setPrototypeOf(a,e.prototype),a.expected=r,a.found=n,a.location=u,a.name="SyntaxError",a}function r(t,e,r){return r=r||" ",t.length>e?t:(e-=t.length,t+(r+=r.repeat(e)).slice(0,e))}function n(t,r){var n,u={},a=(r=void 0!==r?r:{}).grammarSource,o={start:Lt},c=Lt,i="none",s=")",f=",",l="(",p="%",h="px",m="cm",g="mm",v="in",d="pt",y="pc",A="deg",w="rad",x="grad",b="turn",C="#",F=".",E="e",j=/^[ \t\n\r]/,$=/^[a-z\-]/,O=/^[0-9a-fA-F]/,k=/^[+\-]/,q=/^[0-9]/,S=Bt("none"),z=Ut("none",!1),R=Ut(")",!1),I=Ut(",",!1),M=Bt("whitespace"),P=Ht([" ","\t","\n","\r"],!1,!1),N=Bt("function"),T=Ut("(",!1),U=Bt("identifier"),H=Ht([["a","z"],"-"],!1,!1),_=Bt("percentage"),B=Ut("%",!1),D=Bt("length"),G=Ut("px",!1),J=Ut("cm",!1),K=Ut("mm",!1),L=Ut("in",!1),Q=Ut("pt",!1),V=Ut("pc",!1),W=Bt("angle"),X=Ut("deg",!1),Y=Ut("rad",!1),Z=Ut("grad",!1),tt=Ut("turn",!1),et=Bt("number"),rt=Bt("color"),nt=Ut("#",!1),ut=Ht([["0","9"],["a","f"],["A","F"]],!1,!1),at=Ht(["+","-"],!1,!1),ot=Ht([["0","9"]],!1,!1),ct=Ut(".",!1),it=Ut("e",!1),st=function(){return[]},ft=function(t,e){return{type:"function",name:t,parameters:e||[]}},lt=function(t,e){return e.length>0?se(t,e,3):[t]},pt=function(t){return{type:"quantity",value:t.value,unit:t.unit}},ht=function(t){return{type:"color",colorType:t.type,value:t.value}},mt=function(t){return t},gt=function(){return Tt()},vt=function(t){return{value:t,unit:"%"}},dt=function(t){return{value:t,unit:"px"}},yt=function(t){return{value:t,unit:"cm"}},At=function(t){return{value:t,unit:"mm"}},wt=function(t){return{value:t,unit:"in"}},xt=function(t){return{value:t,unit:"pt"}},bt=function(t){return{value:t,unit:"pc"}},Ct=function(t){return{value:t,unit:"deg"}},Ft=function(t){return{value:t,unit:"rad"}},Et=function(t){return{value:t,unit:"grad"}},jt=function(t){return{value:t,unit:"turn"}},$t=function(t){return{value:t,unit:null}},Ot=function(){return{type:"hex",value:Tt()}},kt=function(t){return{type:"function",value:t}},qt=function(){return{type:"named",value:Tt()}},St=function(){return parseFloat(Tt())},zt=0,Rt=0,It=[{line:1,column:1}],Mt=0,Pt=[],Nt=0;if("startRule"in r){if(!(r.startRule in o))throw new Error("Can't start parsing from rule \""+r.startRule+'".');c=o[r.startRule]}function Tt(){return t.substring(Rt,zt)}function Ut(t,e){return{type:"literal",text:t,ignoreCase:e}}function Ht(t,e,r){return{type:"class",parts:t,inverted:e,ignoreCase:r}}function _t(){return{type:"end"}}function Bt(t){return{type:"other",description:t}}function Dt(e){var r,n=It[e];if(n)return n;for(r=e-1;!It[r];)r--;for(n={line:(n=It[r]).line,column:n.column};r<e;)10===t.charCodeAt(r)?(n.line++,n.column=1):n.column++,r++;return It[e]=n,n}function Gt(t,e,r){var n=Dt(t),u=Dt(e),o={source:a,start:{offset:t,line:n.line,column:n.column},end:{offset:e,line:u.line,column:u.column}};return r&&a&&"function"==typeof a.offset&&(o.start=a.offset(o.start),o.end=a.offset(o.end)),o}function Jt(t){zt<Mt||(zt>Mt&&(Mt=zt,Pt=[]),Pt.push(t))}function Kt(t,r,n){return new e(e.buildMessage(t,r),t,r,n)}function Lt(){var t;return(t=Qt())===u&&(t=Vt()),t}function Qt(){var e,r;return Nt++,e=zt,Zt(),t.substr(zt,4)===i?(r=i,zt+=4):(r=u,0===Nt&&Jt(z)),r!==u?(Zt(),Rt=e,e=st()):(zt=e,e=u),Nt--,e===u&&0===Nt&&Jt(S),e}function Vt(){var t,e;if(t=[],(e=Wt())!==u)for(;e!==u;)t.push(e),e=Wt();else t=u;return t}function Wt(){var e,r,n,a;return e=zt,Zt(),(r=te())!==u?(Zt(),(n=Xt())===u&&(n=null),Zt(),41===t.charCodeAt(zt)?(a=s,zt++):(a=u,0===Nt&&Jt(R)),a!==u?(Zt(),Rt=e,e=ft(r,n)):(zt=e,e=u)):(zt=e,e=u),e}function Xt(){var e,r,n,a,o,c,i,s;if(e=zt,(r=Yt())!==u){for(n=[],a=zt,o=Zt(),44===t.charCodeAt(zt)?(c=f,zt++):(c=u,0===Nt&&Jt(I)),c===u&&(c=null),i=Zt(),(s=Yt())!==u?a=o=[o,c,i,s]:(zt=a,a=u);a!==u;)n.push(a),a=zt,o=Zt(),44===t.charCodeAt(zt)?(c=f,zt++):(c=u,0===Nt&&Jt(I)),c===u&&(c=null),i=Zt(),(s=Yt())!==u?a=o=[o,c,i,s]:(zt=a,a=u);Rt=e,e=lt(r,n)}else zt=e,e=u;return e}function Yt(){var t,e;return t=zt,(e=re())===u&&(e=ne())===u&&(e=ue())===u&&(e=ae()),e!==u&&(Rt=t,e=pt(e)),(t=e)===u&&(t=zt,(e=oe())!==u&&(Rt=t,e=ht(e)),t=e),t}function Zt(){var e,r;for(Nt++,e=[],j.test(t.charAt(zt))?(r=t.charAt(zt),zt++):(r=u,0===Nt&&Jt(P));r!==u;)e.push(r),j.test(t.charAt(zt))?(r=t.charAt(zt),zt++):(r=u,0===Nt&&Jt(P));return Nt--,r=u,0===Nt&&Jt(M),e}function te(){var e,r,n;return Nt++,e=zt,(r=ee())!==u?(40===t.charCodeAt(zt)?(n=l,zt++):(n=u,0===Nt&&Jt(T)),n!==u?(Rt=e,e=mt(r)):(zt=e,e=u)):(zt=e,e=u),Nt--,e===u&&(r=u,0===Nt&&Jt(N)),e}function ee(){var e,r,n;if(Nt++,e=zt,r=[],$.test(t.charAt(zt))?(n=t.charAt(zt),zt++):(n=u,0===Nt&&Jt(H)),n!==u)for(;n!==u;)r.push(n),$.test(t.charAt(zt))?(n=t.charAt(zt),zt++):(n=u,0===Nt&&Jt(H));else r=u;return r!==u&&(Rt=e,r=gt()),Nt--,(e=r)===u&&(r=u,0===Nt&&Jt(U)),e}function re(){var e,r,n;return Nt++,e=zt,Zt(),(r=ce())!==u?(37===t.charCodeAt(zt)?(n=p,zt++):(n=u,0===Nt&&Jt(B)),n!==u?(Rt=e,e=vt(r)):(zt=e,e=u)):(zt=e,e=u),Nt--,e===u&&0===Nt&&Jt(_),e}function ne(){var e,r,n;return Nt++,e=zt,Zt(),(r=ce())!==u?(t.substr(zt,2)===h?(n=h,zt+=2):(n=u,0===Nt&&Jt(G)),n!==u?(Rt=e,e=dt(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,Zt(),(r=ce())!==u?(t.substr(zt,2)===m?(n=m,zt+=2):(n=u,0===Nt&&Jt(J)),n!==u?(Rt=e,e=yt(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,Zt(),(r=ce())!==u?(t.substr(zt,2)===g?(n=g,zt+=2):(n=u,0===Nt&&Jt(K)),n!==u?(Rt=e,e=At(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,Zt(),(r=ce())!==u?(t.substr(zt,2)===v?(n=v,zt+=2):(n=u,0===Nt&&Jt(L)),n!==u?(Rt=e,e=wt(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,Zt(),(r=ce())!==u?(t.substr(zt,2)===d?(n=d,zt+=2):(n=u,0===Nt&&Jt(Q)),n!==u?(Rt=e,e=xt(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,Zt(),(r=ce())!==u?(t.substr(zt,2)===y?(n=y,zt+=2):(n=u,0===Nt&&Jt(V)),n!==u?(Rt=e,e=bt(r)):(zt=e,e=u)):(zt=e,e=u)))))),Nt--,e===u&&0===Nt&&Jt(D),e}function ue(){var e,r,n;return Nt++,e=zt,(r=ce())!==u?(t.substr(zt,3)===A?(n=A,zt+=3):(n=u,0===Nt&&Jt(X)),n!==u?(Rt=e,e=Ct(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,(r=ce())!==u?(t.substr(zt,3)===w?(n=w,zt+=3):(n=u,0===Nt&&Jt(Y)),n!==u?(Rt=e,e=Ft(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,(r=ce())!==u?(t.substr(zt,4)===x?(n=x,zt+=4):(n=u,0===Nt&&Jt(Z)),n!==u?(Rt=e,e=Et(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,(r=ce())!==u?(t.substr(zt,4)===b?(n=b,zt+=4):(n=u,0===Nt&&Jt(tt)),n!==u?(Rt=e,e=jt(r)):(zt=e,e=u)):(zt=e,e=u)))),Nt--,e===u&&(r=u,0===Nt&&Jt(W)),e}function ae(){var t,e;return Nt++,t=zt,Zt(),(e=ce())!==u?(Rt=t,t=$t(e)):(zt=t,t=u),Nt--,t===u&&0===Nt&&Jt(et),t}function oe(){var e,r,n,a;if(Nt++,e=zt,35===t.charCodeAt(zt)?(r=C,zt++):(r=u,0===Nt&&Jt(nt)),r!==u){if(n=[],O.test(t.charAt(zt))?(a=t.charAt(zt),zt++):(a=u,0===Nt&&Jt(ut)),a!==u)for(;a!==u;)n.push(a),O.test(t.charAt(zt))?(a=t.charAt(zt),zt++):(a=u,0===Nt&&Jt(ut));else n=u;n!==u?(Rt=e,e=Ot()):(zt=e,e=u)}else zt=e,e=u;return e===u&&(e=zt,(r=Wt())!==u&&(Rt=e,r=kt(r)),(e=r)===u&&(e=zt,(r=ee())!==u&&(Rt=e,r=qt()),e=r)),Nt--,e===u&&(r=u,0===Nt&&Jt(rt)),e}function ce(){var e,r,n,a,o,c,i;for(e=zt,k.test(t.charAt(zt))?(t.charAt(zt),zt++):0===Nt&&Jt(at),r=zt,n=[],q.test(t.charAt(zt))?(a=t.charAt(zt),zt++):(a=u,0===Nt&&Jt(ot));a!==u;)n.push(a),q.test(t.charAt(zt))?(a=t.charAt(zt),zt++):(a=u,0===Nt&&Jt(ot));if(46===t.charCodeAt(zt)?(a=F,zt++):(a=u,0===Nt&&Jt(ct)),a!==u){if(o=[],q.test(t.charAt(zt))?(c=t.charAt(zt),zt++):(c=u,0===Nt&&Jt(ot)),c!==u)for(;c!==u;)o.push(c),q.test(t.charAt(zt))?(c=t.charAt(zt),zt++):(c=u,0===Nt&&Jt(ot));else o=u;o!==u?r=n=[n,a,o]:(zt=r,r=u)}else zt=r,r=u;if(r===u)if(r=[],q.test(t.charAt(zt))?(n=t.charAt(zt),zt++):(n=u,0===Nt&&Jt(ot)),n!==u)for(;n!==u;)r.push(n),q.test(t.charAt(zt))?(n=t.charAt(zt),zt++):(n=u,0===Nt&&Jt(ot));else r=u;if(r!==u){if(n=zt,101===t.charCodeAt(zt)?(a=E,zt++):(a=u,0===Nt&&Jt(it)),a!==u){if(k.test(t.charAt(zt))?(o=t.charAt(zt),zt++):(o=u,0===Nt&&Jt(at)),o===u&&(o=null),c=[],q.test(t.charAt(zt))?(i=t.charAt(zt),zt++):(i=u,0===Nt&&Jt(ot)),i!==u)for(;i!==u;)c.push(i),q.test(t.charAt(zt))?(i=t.charAt(zt),zt++):(i=u,0===Nt&&Jt(ot));else c=u;c!==u?n=a=[a,o,c]:(zt=n,n=u)}else zt=n,n=u;n===u&&(n=null),Rt=e,e=St()}else zt=e,e=u;return e}function ie(t,e){return t.map((function(t){return t[e]}))}function se(t,e,r){return[t].concat(ie(e,r))}if((n=c())!==u&&zt===t.length)return n;throw n!==u&&zt<t.length&&Jt(_t()),Kt(Pt,Mt<t.length?t.charAt(Mt):null,Mt<t.length?Gt(Mt,Mt+1):Gt(Mt,Mt))}return t(e,Error),e.prototype.format=function(t){var e="Error: "+this.message;if(this.location){var n,u=null;for(n=0;n<t.length;n++)if(t[n].source===this.location.source){u=t[n].text.split(/\r\n|\n|\r/g);break}var a=this.location.start,o=this.location.source&&"function"==typeof this.location.source.offset?this.location.source.offset(a):a,c=this.location.source+":"+o.line+":"+o.column;if(u){var i=this.location.end,s=r("",o.line.toString().length," "),f=u[a.line-1],l=(a.line===i.line?i.column:f.length+1)-a.column||1;e+="\n --\x3e "+c+"\n"+s+" |\n"+o.line+" | "+f+"\n"+s+" | "+r("",a.column-1," ")+r("",l,"^")}else e+="\n at "+c}return e},e.buildMessage=function(t,e){var r={literal:function(t){return'"'+u(t.text)+'"'},class:function(t){var e=t.parts.map((function(t){return Array.isArray(t)?a(t[0])+"-"+a(t[1]):a(t)}));return"["+(t.inverted?"^":"")+e.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(t){return t.description}};function n(t){return t.charCodeAt(0).toString(16).toUpperCase()}function u(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+n(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+n(t)}))}function a(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+n(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+n(t)}))}function o(t){return r[t.type](t)}function c(t){var e,r,n=t.map(o);if(n.sort(),n.length>0){for(e=1,r=1;e<n.length;e++)n[e-1]!==n[e]&&(n[r]=n[e],r++);n.length=r}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}function i(t){return t?'"'+u(t)+'"':"end of input"}return"Expected "+c(t)+" but "+i(e)+" found."},{SyntaxError:e,parse:n}},(m=v).exports&&(m.exports=g());var d=v.exports;function y(t){if(!t||0===t.length)return null;if("string"==typeof t){const e=A(t);return e&&0!==e.length?e:null}const e=t.map((t=>{if(!Number.isFinite(t.scale)||t.scale<=0)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:invalid-scale","scale must be finite and greater than 0",{stop:t});return{scale:t.scale,effects:A(t.value)}}));e.sort(((t,e)=>e.effects.length-t.effects.length));for(let r=0;r<e.length-1;r++){if(!(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .canInterpolateEffects */ .mj)(e[r].effects,e[r+1].effects))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:interpolation-impossible","Cannot interpolate by scale between 2 lists of mixed effects",{a:e[r].effects,b:e[r+1].effects});(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .normalizeEffects */ .O9)(e[r].effects,e[r+1].effects)}return e.sort(((t,e)=>e.scale-t.scale)),e}function A(t){let e;if(!t)return[];try{e=d.parse(t)}catch(r){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:invalid-syntax","Invalid effect syntax",{value:t,error:r})}return e.map((t=>w(t)))}function w(t){try{switch(t.name){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":return x(t);case"opacity":return b(t);case"hue-rotate":return C(t);case"blur":return F(t);case"drop-shadow":return E(t);case"bloom":return j(t)}}catch(e){throw e.details.filter=t,e}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:unknown-effect",`Effect '${t.name}' is not supported`,{effect:t})}function x(t){let e=1;return $(t.parameters,1),1===t.parameters.length&&(e=P(t.parameters[0])),new _effects_js__WEBPACK_IMPORTED_MODULE_2__/* .ColorMatrixEffect */ .yG(t.name,e)}function b(t){let e=1;return $(t.parameters,1),1===t.parameters.length&&(e=P(t.parameters[0])),new _effects_js__WEBPACK_IMPORTED_MODULE_2__/* .OpacityEffect */ .jm(e)}function C(t){let e=0;return $(t.parameters,1),1===t.parameters.length&&(e=T(t.parameters[0])),new _effects_js__WEBPACK_IMPORTED_MODULE_2__/* .HueRotateEffect */ .Nd(e)}function F(t){let e=0;return $(t.parameters,1),1===t.parameters.length&&(e=U(t.parameters[0]),k(e,t.parameters[0])),new _effects_js__WEBPACK_IMPORTED_MODULE_2__/* .BlurEffect */ .Fk(e)}function E(t){const e=[];let r=null;for(const n of t.parameters)if("color"===n.type){if(e.length&&Object.freeze(e),r)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error","Accepts only one color",{});r=H(n)}else{const t=U(n);if(Object.isFrozen(e))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error","<length> parameters not consecutive",{lengths:e});e.push(t),3===e.length&&k(t,n)}if(e.length<2||e.length>3)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error",`Expected <length>{2,3}, Actual: <length>{${e.length}}`,{lengths:e});return new _effects_js__WEBPACK_IMPORTED_MODULE_2__/* .DropShadowEffect */ .$b(e[0],e[1],e[2]||0,r||_("black"))}function j(t){let e=1,r=0,n=0;return $(t.parameters,3),t.parameters[0]&&(e=P(t.parameters[0])),t.parameters[1]&&(r=U(t.parameters[1]),k(r,t.parameters[1])),t.parameters[2]&&(n=P(t.parameters[2])),new _effects_js__WEBPACK_IMPORTED_MODULE_2__/* .BloomEffect */ .bv(e,r,n)}function $(t,e){if(t.length>e)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error",`Function supports up to ${e} parameters, Actual: ${t.length}`,{parameters:t})}function O(t){if("color"===t.type)return"<color>";if(t.unit){if(t.unit in I)return"<length>";if(t.unit in z)return"<angle>";if("%"===t.unit)return"<percentage>"}return"<double>"}function k(t,e){if(t<0)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error",`Negative values are not allowed, Actual: ${t}`,{term:e})}function q(t){if("quantity"!==t.type||null!==t.unit)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error",`Expected <double>, Actual: ${O(t)}`,{term:t})}function S(t){if("quantity"!==t.type||null!==t.unit&&"%"!==t.unit)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error",`Expected <double> or <percentage>, Actual: ${O(t)}`,{term:t})}const z={deg:1,grad:.9,rad:180/Math.PI,turn:360};function R(t){if("quantity"!==t.type||!(0===t.value&&null===t.unit||t.unit&&null!=z[t.unit]))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error",`Expected <angle>, Actual: ${O(t)}`,{term:t})}const I={px:1,cm:96/2.54,mm:96/2.54/10,in:96,pc:16,pt:96/72};function M(t){if("quantity"!==t.type||!(0===t.value&&null===t.unit||t.unit&&null!=I[t.unit]))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error",`Expected <length>, Actual: ${O(t)}`,{term:t})}function P(t){S(t);const e=t.value;return k(e,t),"%"===t.unit?.01*e:e}function N(t){return q(t),k(t.value,t),t.value}function T(t){return R(t),t.value*z[t.unit]||0}function U(t){return M(t),t.value*I[t.unit]||0}function H(e){switch(e.colorType){case"hex":return (0,_colorUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .hex2rgba */ .qh)(e.value);case"named":return _(e.value);case"function":return G(e.value)}}function _(t){if(!(0,_colorUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isNamedColor */ .V6)(t))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:unknown-color",`color '${t}' isn't valid`,{namedColor:t});return (0,_colorUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getNamedColorCopy */ .c4)(t)}const B=/^rgba?/i,D=/^hsla?/i;function G(t){if($(t.parameters,4),B.test(t.name))return[P(t.parameters[0]),P(t.parameters[1]),P(t.parameters[2]),t.parameters[3]?P(t.parameters[3]):1];if(D.test(t.name))return (0,_colorUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .hsla2rgba */ .z$)(N(t.parameters[0]),P(t.parameters[1]),P(t.parameters[2]),t.parameters[3]?P(t.parameters[3]):1);throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:syntax-error",`Invalid color function '${t.name}'`,{colorFunction:t})}


/***/ }),

/***/ 39645:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _core_libs_rbush_PooledRBush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4486);
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80510);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const d=5e4,n={minX:0,minY:0,maxX:0,maxY:0};function t(i){n.minX=i[0],n.minY=i[1],n.maxX=i[2],n.maxY=i[3]}function e(i,s,d){t(s),i.search(n,d)}class o{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new _core_libs_rbush_PooledRBush_js__WEBPACK_IMPORTED_MODULE_1__/* .PooledRBush */ .w(9,(0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("esri-csp-restrictions")?i=>({minX:i[0],minY:i[1],maxX:i[2],maxY:i[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const i=new Array(this._idByBounds.size);let s=0;this._idByBounds.forEach(((d,n)=>{i[s++]=n})),this._indexInvalid=!1,this._index.clear(),this._index.load(i)}else this._boundsToLoad.length&&(this._index.load(Array.from(new Set(this._boundsToLoad.filter((i=>this._idByBounds.has(i)))))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const i=(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_2__/* .empty */ .Ie)();for(const s of this._boundsById.values())s&&(i[0]=Math.min(s[0],i[0]),i[1]=Math.min(s[1],i[1]),i[2]=Math.max(s[2],i[2]),i[3]=Math.max(s[3],i[3]));return i}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(i){const s=this._boundsById.get(i);this._boundsById.delete(i),s&&(this._idByBounds.delete(s),this._indexInvalid||this._index.remove(s))}forEachInBounds(i,s){this._loadIndex(),e(this._index,i,(i=>s(this._idByBounds.get(i))))}get(i){return this._boundsById.get(i)}has(i){return this._boundsById.has(i)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(i,s){if(!this._indexInvalid){const s=this._boundsById.get(i);s&&(this._index.remove(s),this._idByBounds.delete(s))}this._boundsById.set(i,s),s&&(this._idByBounds.set(s,i),this._indexInvalid||(this._boundsToLoad.push(s),this._boundsToLoad.length>d&&this._loadIndex()))}}


/***/ }),

/***/ 15305:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/* harmony import */ var _effects_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27664);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const i={read:{reader:_effects_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .read */ .LF},write:{allowNull:!0,writer:_effects_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .write */ .M9}},a=t=>{let s=class extends t{constructor(){super(...arguments),this.blendMode="normal",this.effect=null}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:["average","color-burn","color-dodge","color","darken","destination-atop","destination-in","destination-out","destination-over","difference","exclusion","hard-light","hue","invert","lighten","lighter","luminosity","minus","multiply","normal","overlay","plus","reflect","saturation","screen","soft-light","source-atop","source-in","source-out","vivid-light","xor"],nonNullable:!0,json:{read:!1,write:!1,origins:{"web-map":{read:!0,write:!0},"portal-item":{read:!0,write:!0}}}})],s.prototype,"blendMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({json:{read:!1,write:!1,origins:{"web-map":i,"portal-item":i}}})],s.prototype,"effect",void 0),s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.layers.mixins.BlendLayer")],s),s};


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

/***/ 49241:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52495);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62802);
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13484);
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80510);
/* harmony import */ var _geometry_support_normalizeUtilsSync_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14537);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let i=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(o){super(o)}get bounds(){const o=this.coords;return null==o?.extent?null:(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_9__/* .fromExtent */ .VY)(o.extent)}get coords(){const o=this.element.georeference?.coords;return (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_8__.projectOrLoad)(o,this.spatialReference).geometry}get normalizedCoords(){return _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.fromJSON((0,_geometry_support_normalizeUtilsSync_js__WEBPACK_IMPORTED_MODULE_10__/* .normalizeCentralMeridianSync */ .jZ)(this.coords))}get normalizedBounds(){const o=null!=this.normalizedCoords?this.normalizedCoords.extent:null;return null!=o?(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_9__/* .fromExtent */ .VY)(o):null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],i.prototype,"spatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],i.prototype,"element",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],i.prototype,"bounds",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],i.prototype,"coords",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],i.prototype,"normalizedCoords",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],i.prototype,"normalizedBounds",null),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.layers.support.MediaElementView")],i);


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


/***/ })

};
;