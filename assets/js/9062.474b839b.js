"use strict";
exports.id = 9062;
exports.ids = [9062,7081];
exports.modules = {

/***/ 52712:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ u),
/* harmony export */   c: () => (/* binding */ n),
/* harmony export */   f: () => (/* binding */ r)
/* harmony export */ });
/* unused harmony exports O, U, Z, b, d, e, g, h, i, j, k, o, u, v, z */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function n(){return[0,0,0,0]}function t(n){return[n[0],n[1],n[2],n[3]]}function r(n,t,r,e){return[n,t,r,e]}function e(t,r=n()){const e=Math.min(4,t.length);for(let n=0;n<e;++n)r[n]=t[n];return r}function u(n,t){return new Float64Array(n,t,4)}function a(){return n()}function o(){return r(1,1,1,1)}function s(){return r(1,0,0,0)}function i(){return r(0,1,0,0)}function c(){return r(0,0,1,0)}function f(){return r(0,0,0,1)}const l=a(),_=o(),N=s(),O=i(),T=c(),U=f(),b=Object.freeze(Object.defineProperty({__proto__:null,ONES:_,UNIT_W:U,UNIT_X:N,UNIT_Y:O,UNIT_Z:T,ZEROS:l,clone:t,create:n,createView:u,fromArray:e,fromValues:r,ones:o,unitW:f,unitX:s,unitY:i,unitZ:c,zeros:a},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 89926:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _MemCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40210);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class e{constructor(e,s){this._storage=new _MemCache_js__WEBPACK_IMPORTED_MODULE_0__/* .MemCacheStorage */ .F,this.id="",this.name="",this.size=0,this._storage.maxSize=e,this._storage.register(this),s&&this._storage.registerRemoveFunc("",s)}destroy(){this._storage.deregister(this),this._storage.destroy()}put(t,e,s=1){this._storage.put(this,t,e,s,1)}pop(t){return this._storage.pop(this,t)}get(t){return this._storage.get(this,t)}clear(){this._storage.clearAll()}get maxSize(){return this._storage.maxSize}set maxSize(t){this._storage.maxSize=t}resetHitRate(){}}


/***/ }),

/***/ 40210:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ r),
/* harmony export */   Mn: () => (/* binding */ i)
/* harmony export */ });
/* unused harmony exports RemoveMode, minPriority */
/* harmony import */ var _PooledArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63678);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const e=-3;var s;!function(t){t[t.ALL=0]="ALL",t[t.SOME=1]="SOME"}(s||(s={}));class i{constructor(t,e,s){this.name=t,this._storage=e,this.id=h+++":",this.size=0,this.maxSize=0,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),s&&(this._storage.registerRemoveFunc(this.id,s),this._removeFunc=!0)}destroy(){this._storage.clear(this),this._removeFunc&&this._storage.deregisterRemoveFunc(this.id),this._storage.deregister(this),this._storage=null}get hitRate(){return this._hit/(this._hit+this._miss)}get sizeAll(){return this._storage.size}resetHitRate(){this._hit=this._miss=0}put(t,e,s,i=0){this._storage.put(this,t,e,s,i)}get(t){const e=this._storage.get(this,t);return void 0===e?++this._miss:++this._hit,e}peek(t){return this._storage.peek(this,t)}pop(t){const e=this._storage.pop(this,t);return void 0===e?++this._miss:++this._hit,e}updateSize(t,e,s){this._storage.updateSize(this,t,e,s)}clear(){this._storage.clear(this)}clearAll(){this._storage.clearAll()}get performanceInfo(){return this._storage.performanceInfo}resetStats(){this._storage.resetStats()}}class r{get size(){return this._size}constructor(e=10485760){this._maxSize=e,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,this._users=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null}register(t){this._users.push(t)}deregister(t){this._users.removeUnordered(t)}registerRemoveFunc(t,e){this._removeFuncs.push([t,e])}deregisterRemoveFunc(t){this._removeFuncs.filterInPlace((e=>e[0]!==t))}get maxSize(){return this._maxSize}set maxSize(t){this._maxSize=Math.max(t,0),this._checkSizeLimits()}put(t,i,r,h,o){i=t.id+i;const n=this._db.get(i);if(n&&(this._size-=n.size,t.size-=n.size,this._db.delete(i),n.entry!==r&&this._notifyRemove(i,n.entry,s.ALL)),h>this._maxSize)return void this._notifyRemove(i,r,s.ALL);if(void 0===r)return void console.warn("Refusing to cache undefined entry ");if(!h||h<0)return console.warn(`Refusing to cache entry with size ${h} for key ${i}`),void this._notifyRemove(i,r,s.ALL);const _=1+Math.max(o,e)-e;this._db.set(i,{entry:r,size:h,lifetime:_,lives:_}),this._size+=h,t.size+=h,this._checkSizeLimits()}updateSize(t,e,i,r){e=t.id+e;const h=this._db.get(e);if(h&&h.entry===i){for(this._size-=h.size,t.size-=h.size;r>this._maxSize;){const t=this._notifyRemove(e,i,s.SOME);if(!(null!=t&&t>0))return void this._db.delete(e);r=t}h.size=r,this._size+=r,t.size+=r,this._checkSizeLimits()}}pop(t,e){e=t.id+e;const s=this._db.get(e);if(s)return this._size-=s.size,t.size-=s.size,this._db.delete(e),++this._hit,s.entry;++this._miss}get(t,e){e=t.id+e;const s=this._db.get(e);if(void 0!==s)return this._db.delete(e),s.lives=s.lifetime,this._db.set(e,s),++this._hit,s.entry;++this._miss}peek(t,e){const s=this._db.get(t.id+e);return s?++this._hit:++this._miss,s?.entry}get performanceInfo(){const t={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},s={},i=new Array;this._db.forEach(((t,e)=>{const r=t.lifetime;i[r]=(i[r]||0)+t.size,this._users.forAll((i=>{const{id:r,name:h}=i;if(e.startsWith(r)){const e=s[h]||0;s[h]=e+t.size}}))}));const r={};this._users.forAll((t=>{const e=t.name;if("hitRate"in t&&"number"==typeof t.hitRate&&!isNaN(t.hitRate)&&t.hitRate>0){const i=s[e]||0;s[e]=i,r[e]=Math.round(100*t.hitRate)+"%"}else r[e]="0%"}));const h=Object.keys(s);h.sort(((t,e)=>s[e]-s[t])),h.forEach((e=>t[e]=Math.round(s[e]/2**20)+"MB / "+r[e]));for(let o=i.length-1;o>=0;--o){const s=i[o];s&&(t["Priority "+(o+e-1)]=Math.round(s/this._size*100)+"%")}return t}resetStats(){this._hit=this._miss=0,this._users.forAll((t=>t.resetHitRate()))}clear(t){const e=t.id;this._db.forEach(((t,i)=>{i.startsWith(e)&&(this._size-=t.size,this._db.delete(i),this._notifyRemove(i,t.entry,s.ALL))})),t.size=0}clearAll(){this._db.forEach(((t,e)=>this._notifyRemove(e,t.entry,s.ALL))),this._users.forEach((t=>t.size=0)),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemove(t,e,s){let i;return this._removeFuncs.some((r=>{if(t.startsWith(r[0])){const t=r[1](e,s);return"number"==typeof t&&(i=t),!0}return!1})),i}_checkSizeLimits(){if(this._size>this._maxSize)for(const[t,e]of this._db)if(this._purgeItem(t,e),this._size<=.9*this.maxSize)return;this._users.forEach((t=>{if(t.maxSize>0&&t.size>t.maxSize)for(const[e,s]of this._db)if(e.startsWith(t.id)&&(this._purgeItem(e,s,t),t.size<=.9*t.maxSize))return}))}_purgeItem(t,e,i=this._users.find((e=>t.startsWith(e.id)))){if(this._db.delete(t),e.lives<=1){this._size-=e.size,i&&(i.size-=e.size);const r=this._notifyRemove(t,e.entry,s.SOME);null!=r&&r>0&&(this._size+=r,i&&(i.size+=r),e.lives=e.lifetime,e.size=r,this._db.set(t,e))}else--e.lives,this._db.set(t,e)}}let h=0;


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

/***/ 50579:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let r=class{constructor(t,r,o=""){this.major=t,this.minor=r,this._context=o}lessThan(t,r){return this.major<t||t===this.major&&this.minor<r}since(t,r){return!this.lessThan(t,r)}validate(r){if(this.major!==r.major){const o=this._context&&this._context+":",s=this._context&&this._context+" ";throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(o+"unsupported-version",`Required major ${s}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:r})}}clone(){return new r(this.major,this.minor,this._context)}static parse(o,s=""){const[e,i]=o.split("."),n=/^\s*\d+\s*$/;if(!e?.match||!n.test(e)){throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A((s&&s+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:o})}if(!i?.match||!n.test(i)){throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A((s&&s+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:o})}const a=parseInt(e,10),h=parseInt(i,10);return new r(a,h,s)}};


/***/ }),

/***/ 64442:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EB: () => (/* binding */ s),
/* harmony export */   Ui: () => (/* binding */ a),
/* harmony export */   ir: () => (/* binding */ p)
/* harmony export */ });
/* unused harmony export isEmpty */
/* harmony import */ var _Accessor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52495);
/* harmony import */ var _Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48982);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55135);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const o=new Set(["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"]);function r(t){return t instanceof _Accessor_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A}function f(e){return e instanceof _Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A?Object.keys(e.items):r(e)?(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .getProperties */ .oY)(e).keys():e?Object.keys(e):[]}function l(e,n){return e instanceof _Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A?e.items[n]:e[n]}function i(e,t){return!(!Array.isArray(e)||!Array.isArray(t))&&e.length!==t.length}function u(e){return e?e.declaredClass:null}function c(e,t){const n=e.diff;if(n&&"function"==typeof n)return n(e,t);const s=f(e),p=f(t);if(0===s.length&&0===p.length)return;if(!s.length||!p.length||i(e,t))return{type:"complete",oldValue:e,newValue:t};const a=p.filter((e=>!s.includes(e))),y=s.filter((e=>!p.includes(e))),m=s.filter((n=>p.includes(n)&&l(e,n)!==l(t,n))).concat(a,y).sort(),d=u(e);if(d&&o.has(d)&&m.length)return{type:"complete",oldValue:e,newValue:t};let h;const b=r(e)&&r(t);for(const o of m){const r=l(e,o),f=l(t,o);let i;if((b||"function"!=typeof r&&"function"!=typeof f)&&(r!==f&&(null!=r||null!=f))){if(n&&n[o]&&"function"==typeof n[o])i=n[o]?.(r,f);else if(r instanceof Date&&f instanceof Date){if(r.getTime()===f.getTime())continue;i={type:"complete",oldValue:r,newValue:f}}else i="object"==typeof r&&"object"==typeof f&&u(r)===u(f)?c(r,f):{type:"complete",oldValue:r,newValue:f};null!=i&&(null!=h?h.diff[o]=i:h={type:"partial",diff:{[o]:i}})}}return h}function s(e,t){if(null==e)return!1;const n=t.split(".");let o=e;for(const r of n){if("complete"===o.type)return!0;if("partial"!==o.type)return!1;{const e=o.diff[r];if(!e)return!1;o=e}}return!0}function p(e,t){for(const n of t)if(s(e,n))return!0;return!1}function a(e,t){if("function"!=typeof e&&"function"!=typeof t&&(null!=e||null!=t))return null==e||null==t||"object"==typeof e&&"object"==typeof t&&u(e)!==u(t)?{type:"complete",oldValue:e,newValue:t}:c(e,t)}function y(e){if(null==e)return!0;switch(e.type){case"complete":return!1;case"collection":{const t=e;for(const e of t.added)if(!y(e))return!1;for(const e of t.removed)if(!y(e))return!1;for(const e of t.changed)if(!y(e))return!1;return!0}case"partial":for(const t in e.diff){if(!y(e.diff[t]))return!1}return!0}}


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

/***/ 90709:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GB: () => (/* binding */ t),
/* harmony export */   Qo: () => (/* binding */ i),
/* harmony export */   Y4: () => (/* binding */ r)
/* harmony export */ });
/* unused harmony export adoptTimeZone */
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34495);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class t{}function r(n){return n instanceof luxon__WEBPACK_IMPORTED_MODULE_0__/* .Zone */ .bo?n===t.instance:"unknown"===n?.toString().toLowerCase()}function i(n){return r(n)?t.instance:n}function c(n,o){return e.fromObject({day:n.day,year:n.year,month:n.month,hour:n.hour,minute:n.minute,second:n.second,millisecond:n.millisecond},{zone:o})}t.instance=new luxon__WEBPACK_IMPORTED_MODULE_0__/* .IANAZone */ .oh("Etc/UTC");


/***/ }),

/***/ 19062:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ O)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry.js
var geometry = __webpack_require__(17639);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(48982);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/CollectionFlattener.js
var CollectionFlattener = __webpack_require__(14798);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(35775);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(85251);
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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/Layer.js + 1 modules
var Layer = __webpack_require__(68833);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/BlendLayer.js
var BlendLayer = __webpack_require__(15305);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(41506);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/PortalLayer.js
var PortalLayer = __webpack_require__(34722);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/RefreshableLayer.js + 1 modules
var RefreshableLayer = __webpack_require__(50508);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js
var ScaleRangeLayer = __webpack_require__(25389);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/commonProperties.js + 1 modules
var commonProperties = __webpack_require__(84356);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Evented.js
var Evented = __webpack_require__(17306);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Loadable.js
var Loadable = __webpack_require__(45307);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/string.js
var string = __webpack_require__(96274);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/kmlUtils.js
var kmlUtils = __webpack_require__(78521);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(84698);
;// ../node_modules/@arcgis/core/layers/support/KMLSublayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var j;let S=j=class extends(Evented/* default */.A.EventedMixin((0,JSONSupport/* JSONSupportMixin */.Te)(Loadable/* default */.A))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.id=null,this.networkLink=null,this.parent=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.layer=null,this.addHandles([(0,reactiveUtils.on)((()=>this.sublayers),"after-add",(({item:e})=>{e.parent=this,e.layer=this.layer}),reactiveUtils/* sync */.OH),(0,reactiveUtils.on)((()=>this.sublayers),"after-remove",(({item:e})=>{e.layer=e.parent=null}),reactiveUtils/* sync */.OH),(0,reactiveUtils/* watch */.wB)((()=>this.sublayers),((e,t)=>{if(t)for(const r of t)r.layer=r.parent=null;if(e)for(const r of e)r.parent=this,r.layer=this.layer}),reactiveUtils/* sync */.OH),(0,reactiveUtils/* watch */.wB)((()=>this.layer),(e=>{if(this.sublayers)for(const t of this.sublayers)t.layer=e}),reactiveUtils/* sync */.OH)])}initialize(){(0,reactiveUtils/* whenOnce */.C_)((()=>this.networkLink)).then((()=>(0,reactiveUtils/* whenOnce */.C_)((()=>!0===this.visible)))).then((()=>this.load()))}load(e){if(!this.networkLink)return;if(this.networkLink.viewFormat)return;const r=null!=e?e.signal:null,s=this._fetchService(this._get("networkLink")?.href??"",r).then((e=>{const r=(0,kmlUtils/* computeExtent */.Qm)(e.sublayers);this.fullExtent=Extent/* default */.A.fromJSON(r),this.sourceJSON=e;const s=(0,ensureType/* ensureType */.dp)(Collection/* default */.A.ofType(j),(0,kmlUtils/* sublayersFromJSON */.Jy)(j,e));this.sublayers?this.sublayers.addMany(s):this.sublayers=s,this.layer?.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")}));return this.addResolvingPromise(s),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}_fetchService(e,t){return (0,kmlUtils/* fetchService */.Ox)(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then((e=>(0,kmlUtils/* parseKML */._4)(e.data)))}};(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Extent/* default */.A})],S.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,value:null})],S.prototype,"networkLink",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:{allowNull:!0}}})],S.prototype,"parent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(S),json:{write:{allowNull:!0}}})],S.prototype,"sublayers",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({value:null,json:{read:{source:"name",reader:e=>(0,string/* stripHTML */._e)(e)}}})],S.prototype,"title",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({value:!0})],S.prototype,"visible",null),(0,tslib_es6._)([(0,reader/* reader */.w)("visible",["visibility"])],S.prototype,"readVisible",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"sourceJSON",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"layer",void 0),S=j=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.KMLSublayer")],S);const k=S;

;// ../node_modules/@arcgis/core/layers/KMLLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const w=["kml","xml"];let F=class extends((0,BlendLayer/* BlendLayer */.d)((0,RefreshableLayer/* RefreshableLayer */.J)((0,ScaleRangeLayer/* ScaleRangeLayer */.j)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.A)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)(Layer/* default */.A))))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new CollectionFlattener/* default */.A({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=SpatialReference/* default */.A.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.addHandles([(0,reactiveUtils/* watch */.wB)((()=>this.sublayers),((e,r)=>{r&&r.forEach((e=>{e.parent=null,e.layer=null})),e&&e.forEach((e=>{e.parent=this,e.layer=this}))}),reactiveUtils/* sync */.OH),this.on("sublayer-update",(()=>this.notifyChange("fullExtent")))])}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}readSublayersFromItemOrWebMap(e,r){this._visibleFolders=r.visibleFolders}readSublayers(e,r,t){return (0,kmlUtils/* sublayersFromJSON */.Jy)(k,r,t,this._visibleFolders)}writeSublayers(e,r){const t=[],o=e.toArray();for(;o.length;){const e=o[0];e.networkLink||(e.visible&&t.push(e.id),e.sublayers&&o.push(...e.sublayers.toArray())),o.shift()}r.visibleFolders=t}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?(0,urlUtils/* getFilename */.e7)(this.url,w)||"KML":e||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,r=[],t=e=>{e.visible&&(r.push(e),e.sublayers&&e.sublayers.forEach(t))};return e&&e.forEach(t),r}get fullExtent(){return this._recomputeFullExtent()}load(e){const r=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},e).catch(promiseUtils/* throwIfAbortError */.QP).then((()=>this._fetchService(r)))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const r=await Promise.resolve().then((()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:(0,kmlUtils/* fetchService */.Ox)(this.url??"",this.outSpatialReference,this.refreshInterval,e))),t=(0,kmlUtils/* parseKML */._4)(r.data);t&&this.read(t,{origin:"service"})}_recomputeFullExtent(){let e=null;null!=this.extent&&(e=this.extent.clone());const r=t=>{if(t.sublayers)for(const o of t.sublayers.items)r(o),o.visible&&o.fullExtent&&(null!=e?e.union(o.fullExtent):e=o.fullExtent.clone())};return r(this),e}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],F.prototype,"allSublayers",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SpatialReference/* default */.A})],F.prototype,"outSpatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],F.prototype,"path",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1,write:!1}})],F.prototype,"legendEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide","hide-children"]})],F.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["KML"]})],F.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({})],F.prototype,"resourceInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(k),json:{write:{ignoreOrigin:!0}}})],F.prototype,"sublayers",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)(["web-map","portal-item"],"sublayers",["visibleFolders"])],F.prototype,"readSublayersFromItemOrWebMap",null),(0,tslib_es6._)([(0,reader/* reader */.w)("service","sublayers",["sublayers"])],F.prototype,"readSublayers",null),(0,tslib_es6._)([(0,writer/* writer */.K)("sublayers")],F.prototype,"writeSublayers",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],F.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],F.prototype,"title",null),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* url */.OZ)],F.prototype,"url",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],F.prototype,"visibleSublayers",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Extent/* default */.A})],F.prototype,"extent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],F.prototype,"fullExtent",null),F=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.KMLLayer")],F);const O=F;


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

/***/ 50508:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ RefreshableLayer_f)
});

// UNUSED EXPORTS: isRefreshableLayer

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(4130);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/layerContainerType.js
var layerContainerType = __webpack_require__(73324);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(48982);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/asyncUtils.js
var asyncUtils = __webpack_require__(12690);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/watch.js
var watch = __webpack_require__(39425);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/trackingUtils.js
var trackingUtils = __webpack_require__(97996);
;// ../node_modules/@arcgis/core/layers/mixins/refresh.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const t=new Collection/* default */.A,o=new WeakMap;function n(e){f(e)&&t.push(new WeakRef(e))}function s(e){const r=t.find((r=>r.deref()===e));r&&t.remove(r)}function f(e){return null!=e&&"object"==typeof e&&"refreshInterval"in e&&"refresh"in e}function c(e,r){return Number.isFinite(e)&&Number.isFinite(r)?r<=0?e:c(r,e%r):0}let i=0,l=0;function a(){const e=Date.now();let r=!1;for(const n of t){const t=n.deref();if(t){if(t.refreshInterval){e-(o.get(t)??0)+5>=6e4*t.refreshInterval&&(o.set(t,e),t.refresh(e))}}else r=!0}if(r)for(let o=t.length-1;o>=0;o--){t.at(o).deref()||t.removeAt(o)}}(0,trackingUtils/* autorun */.fm)((()=>{const e=Date.now();let r=0;for(const n of t){const t=n.deref();t&&(r=c(Math.round(6e4*t.refreshInterval),r),t.refreshInterval?o.get(t)||o.set(t,e):o.delete(t))}if(r!==l){if(l=r,clearInterval(i),0===l)return void(i=0);i=setInterval(a,l)}}));const u={get hasRefreshTimer(){return i>0},get tickInterval(){return l},forceRefresh(){a()},hasLayer:e=>f(e)&&t.some((r=>r.deref()===e)),clear(){for(const e of t){const r=e.deref();r&&o.delete(r)}t.removeAll()}};

;// ../node_modules/@arcgis/core/layers/mixins/RefreshableLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function RefreshableLayer_c(e){return null!=e&&"object"==typeof e&&"refreshTimestamp"in e&&"refresh"in e}const m=.1,RefreshableLayer_f=c=>{let f=class extends c{constructor(...e){super(...e),this.refreshInterval=0,this.refreshTimestamp=0,this._debounceHasDataChanged=(0,promiseUtils/* debounce */.sg)((()=>this.hasDataChanged())),this.when().then((()=>{this.destroyed||n(this)}),(()=>{}))}destroy(){s(this)}castRefreshInterval(e){return e>=m?e:e<=0?0:m}get refreshParameters(){return{_ts:this.refreshTimestamp||null}}refresh(e=Date.now()){(0,promiseUtils/* ignoreAbortErrors */.QZ)(this._debounceHasDataChanged()).then((r=>{r&&this._set("refreshTimestamp",e),this.emit("refresh",{dataChanged:r})}),(e=>{Logger/* default */.A.getLogger(this).error(e),this.emit("refresh",{dataChanged:!1,error:e})}))}async hasDataChanged(){return!0}get test(){const e=this;return{set refreshInterval(r){e._set("refreshInterval",r)}}}};return (0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0,origins:{"web-scene":{write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}}}})],f.prototype,"refreshInterval",void 0),(0,tslib_es6._)([(0,cast/* cast */.w)("refreshInterval")],f.prototype,"castRefreshInterval",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],f.prototype,"refreshTimestamp",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],f.prototype,"refreshParameters",null),f=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.mixins.RefreshableLayer")],f),f};


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

/***/ 79005:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Z)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(539);
/* harmony import */ var _core_MapUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82256);
/* harmony import */ var _core_sql_UnknownTimeZone_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90709);
/* harmony import */ var _fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42453);
/* harmony import */ var _time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12129);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34495);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function y(e){return"timeZone"in e}function _(e){return"timeZone"in e}function g(e){return"dateFieldsTimeZone"in e}const T=new Map;class Z{static fromJSON(e){return new Z(e.fields,e.timeZoneByFieldName)}static fromLayer(e){return new Z(e.fields??[],S(e))}static fromLayerJSON(e){return new Z(e.fields??[],S(e))}constructor(e=[],i){this._fieldsMap=new Map,this._normalizedFieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this._requiredFields=null,this.dateFields=[],this.numericFields=[],this.fields=e||[],this._timeZoneByFieldName=i?new Map(i):null;const t=[];for(const s of this.fields){const e=s?.name,i=M(e);if(e&&i){const n=w(e);this._fieldsMap.set(e,s),this._fieldsMap.set(n,s),this._normalizedFieldsMap.set(i,s),t.push(`${n}:${s.type}:${this._timeZoneByFieldName?.get(e)}`),(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isDateField */ .vE)(s)?(this.dateFields.push(s),this._dateFieldsSet.add(s)):(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isNumericField */ .WA)(s)&&(this._numericFieldsSet.add(s),this.numericFields.push(s)),(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isObjectIDField */ .te)(s)||(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isGlobalIDField */ .Xz)(s)||(s.editable=null==s.editable||!!s.editable,s.nullable=null==s.nullable||!!s.nullable)}}t.sort(),this.uid=t.join()}get requiredFields(){if(!this._requiredFields){this._requiredFields=[];for(const e of this.fields)(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isObjectIDField */ .te)(e)||(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isGlobalIDField */ .Xz)(e)||e.nullable||void 0!==(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .getFieldDefaultValue */ .lD)(e)||this._requiredFields.push(e)}return this._requiredFields}equals(e){return this.uid===e?.uid}has(e){return null!=this.get(e)}get(e){if(!e)return;let i=this._fieldsMap.get(e);return i||(i=this._fieldsMap.get(w(e))??this._normalizedFieldsMap.get(M(e)),i&&this._fieldsMap.set(e,i),i)}getTimeZone(i){const s=this.get(i&&"string"!=typeof i?i.name:i);return s?this._timeZoneByFieldName?this._timeZoneByFieldName.get(s.name):"date"===s.type||"esriFieldTypeDate"===s.type?(_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.getLogger("esri.layers.support.FieldsIndex").error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("getTimeZone:no-timezone-information",`no time zone information for field '${s.name}'`)),_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .utc */ .n$):N.has(s.type)?_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .unknown */ .L5:null:null}getLuxonTimeZone(e){const i=this.getTimeZone(e);return i?i===_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .unknown */ .L5?_core_sql_UnknownTimeZone_js__WEBPACK_IMPORTED_MODULE_3__/* .UnknownTimeZone */ .GB.instance:i===_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .utc */ .n$?luxon__WEBPACK_IMPORTED_MODULE_6__/* .FixedOffsetZone */ .mQ.utcInstance:(0,_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .getOrCreateMapValue */ .tE)(T,i,(()=>luxon__WEBPACK_IMPORTED_MODULE_6__/* .IANAZone */ .oh.create(i))):null}isDateField(e){return this._dateFieldsSet.has(this.get(e))}isTimeOnlyField(e){return (0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isTimeOnlyField */ .OH)(this.get(e))}isNumericField(e){return this._numericFieldsSet.has(this.get(e))}normalizeFieldName(e){return this.get(e)?.name??void 0}toJSON(){return{fields:this.fields.map((e=>(0,_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .isSerializable */ .Wj)(e)?e.toJSON():e)),timeZoneByFieldName:this._timeZoneByFieldName?Array.from(this._timeZoneByFieldName.entries()):null}}}function w(e){return e.trim().toLowerCase()}function M(e){return (0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .normalizeFieldName */ .rS)(e)?.toLowerCase()??""}const N=new Set(["time-only","date-only","timestamp-offset","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"]);function S(e){const i=new Map;if(!e.fields)return i;const t=!0===e.datesInUnknownTimezone,{timeInfo:s,editFieldsInfo:n}=e,r=(s?"startField"in s?s.startField:s.startTimeField:"")??"",l=(s?"endField"in s?s.endField:s.endTimeField:"")??"",o=g(e)?e.dateFieldsTimeZone??null:e.dateFieldsTimeReference?(0,_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .fromTimeReference */ .ZS)(e.dateFieldsTimeReference):null,d=n?y(n)?n.timeZone??o:n.dateFieldsTimeReference?(0,_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .fromTimeReference */ .ZS)(n.dateFieldsTimeReference):o??_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .utc */ .n$:null,a=s?_(s)?s.timeZone??o:s.timeReference?(0,_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .fromTimeReference */ .ZS)(s.timeReference):o:null,m=new Map([[w(n?.creationDateField??""),d],[w(n?.editDateField??""),d],[w(r),a],[w(l),a]]);for(const{name:u,type:f}of e.fields)if(N.has(f))i.set(u,_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .unknown */ .L5);else if("date"!==f&&"esriFieldTypeDate"!==f)i.set(u,null);else if(t)i.set(u,_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .unknown */ .L5);else{const e=m.get(w(u??""))??o;i.set(u,e)}return i}


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

/***/ 78521:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jy: () => (/* binding */ S),
/* harmony export */   Ox: () => (/* binding */ g),
/* harmony export */   Qm: () => (/* binding */ j),
/* harmony export */   Sp: () => (/* binding */ b),
/* harmony export */   _4: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21121);
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28830);
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56542);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86394);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19251);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20909);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78983);
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4675);
/* harmony import */ var _geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36358);
/* harmony import */ var _renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48887);
/* harmony import */ var _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57822);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const c={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function d(e){const o=e.folders||[],t=o.slice(),r=new Map,n=new Map,i=new Map,f=new Map,a=new Map,l={esriGeometryPoint:n,esriGeometryPolyline:i,esriGeometryPolygon:f};(e.featureCollection?.layers||[]).forEach((e=>{const o=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__/* .clone */ .o8)(e);o.featureSet.features=[];const t=e.featureSet.geometryType;r.set(t,o);const a=e.layerDefinition.objectIdField;"esriGeometryPoint"===t?h(n,a,e.featureSet.features):"esriGeometryPolyline"===t?h(i,a,e.featureSet.features):"esriGeometryPolygon"===t&&h(f,a,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((e=>{a.set(e.id,e)})),o.forEach((o=>{o.networkLinkIds.forEach((r=>{const s=P(r,o.id,e.networkLinks);s&&t.push(s)}))})),t.forEach((e=>{if(e.featureInfos){e.points=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__/* .clone */ .o8)(r.get("esriGeometryPoint")),e.polylines=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__/* .clone */ .o8)(r.get("esriGeometryPolyline")),e.polygons=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__/* .clone */ .o8)(r.get("esriGeometryPolygon")),e.mapImages=[];for(const o of e.featureInfos)switch(o.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const t=l[o.type].get(o.id);t&&e[c[o.type]]?.featureSet.features.push(t);break}case"GroundOverlay":{const t=a.get(o.id);t&&e.mapImages.push(t);break}}e.fullExtent=j([e])}}));const u=j(t);return{folders:o,sublayers:t,extent:u}}function g(t,s,i,f){const a=_kernel_js__WEBPACK_IMPORTED_MODULE_1__.id?.findCredential(t);t=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .addQueryParameters */ .a6)(t,{token:a?.token});const l=_config_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.kmlServiceUrl;return (0,_request_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(l,{query:{url:t,model:"simple",folders:"",refresh:0!==i||void 0,outSR:JSON.stringify(s)},responseType:"json",signal:f})}function S(e,o,t=null,r=[]){const s=[],n={},i=o.sublayers,f=new Set(o.folders.map((e=>e.id)));return i.forEach((o=>{const i=new e;if(t?i.read(o,t):i.read(o),r.length&&f.has(i.id)&&(i.visible=r.includes(i.id)),n[o.id]=i,null!=o.parentFolderId&&-1!==o.parentFolderId){const e=n[o.parentFolderId];e.sublayers||(e.sublayers=[]),e.sublayers?.unshift(i)}else s.unshift(i)})),s}function h(e,o,t){t.forEach((t=>{e.set(t.attributes[o],t)}))}function G(e,o){let t;return o.some((o=>o.id===e&&(t=o,!0))),t}function P(e,o,t){const r=G(e,t);return r&&(r.parentFolderId=o,r.networkLink=r),r}async function b(e){const o=_rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A.fromJSON(e.featureSet).features,r=e.layerDefinition,s=(0,_renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .fromJSON */ .r)(r.drawingInfo.renderer),n=_PopupTemplate_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.fromJSON(e.popupInfo),i=[];for(const t of o){const e=await s.getSymbolAsync(t);t.symbol=e,t.popupTemplate=n,t.visible=!0,i.push(t)}return i}function j(e){const o=(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__/* .create */ .vt)(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__/* .negativeInfinity */ .qv),t=(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__/* .create */ .vt)(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__/* .negativeInfinity */ .qv);for(const r of e){if(r.polygons?.featureSet?.features)for(const e of r.polygons.featureSet.features)(0,_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .getBoundsXYZ */ .LJ)(o,e.geometry),(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__/* .expandWithAABB */ .RF)(t,o);if(r.polylines?.featureSet?.features)for(const e of r.polylines.featureSet.features)(0,_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .getBoundsXYZ */ .LJ)(o,e.geometry),(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__/* .expandWithAABB */ .RF)(t,o);if(r.points?.featureSet?.features)for(const e of r.points.featureSet.features)(0,_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .getBoundsXYZ */ .LJ)(o,e.geometry),(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__/* .expandWithAABB */ .RF)(t,o);if(r.mapImages)for(const e of r.mapImages)(0,_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .getBoundsXYZ */ .LJ)(o,e.extent),(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__/* .expandWithAABB */ .RF)(t,o)}return (0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__/* .equals */ .aI)(t,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__/* .negativeInfinity */ .qv)?void 0:{xmin:t[0],ymin:t[1],zmin:t[2],xmax:t[3],ymax:t[4],zmax:t[5],spatialReference:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.WGS84}}


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

/***/ 17671:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ w)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30822);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59851);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19251);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(539);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4130);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75094);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(77542);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(73446);
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(42453);
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(76589);
/* harmony import */ var _mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(63501);
/* harmony import */ var _support_ClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(87729);
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(16758);
/* harmony import */ var _support_LegendOptions_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(38785);
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(28965);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var B;const V="log",F="percent-of-total",S="field",E=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONMap */ .J({esriNormalizeByLog:V,esriNormalizeByPercentOfTotal:F,esriNormalizeByField:S}),j=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_11__/* .ensureType */ .dp)(_support_ClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A);let z=B=class extends((0,_mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_14__/* .VisualVariablesMixin */ .h)(_Renderer_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)){constructor(e){super(e),this._compiledValueExpression={valueExpression:null,compiledFunction:null},this.backgroundFillSymbol=null,this.classBreakInfos=null,this.defaultLabel=null,this.defaultSymbol=null,this.field=null,this.isMaxInclusive=!0,this.legendOptions=null,this.normalizationField=null,this.normalizationTotal=null,this.type="class-breaks",this.valueExpression=null,this.valueExpressionTitle=null,this._set("classBreakInfos",[])}readClassBreakInfos(e,s,t){if(!Array.isArray(e))return;let o=s.minValue;return e.map((e=>{const s=new _support_ClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A;return s.read(e,t),null==s.minValue&&(s.minValue=o),null==s.maxValue&&(s.maxValue=s.minValue),o=s.maxValue,s}))}writeClassBreakInfos(e,s,t,o){const i=e.map((e=>e.write({},o)));this._areClassBreaksConsecutive()&&i.forEach((e=>delete e.classMinValue)),s[t]=i}castField(e){return null==e?e:"function"==typeof e?(_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.getLogger(this).error(".field: field must be a string value"),null):(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_11__/* .ensureString */ .GX)(e)}get minValue(){return this.classBreakInfos&&this.classBreakInfos[0]&&this.classBreakInfos[0].minValue||0}get normalizationType(){let e=this._get("normalizationType");const s=!!this.normalizationField,t=null!=this.normalizationTotal;return s||t?(e=s&&S||t&&F||null,s&&t&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.getLogger(this).warn("warning: both normalizationField and normalizationTotal are set!")):e!==S&&e!==F||(e=null),e}set normalizationType(e){this._set("normalizationType",e)}addClassBreakInfo(e,t,i){let r=null;r="number"==typeof e?new _support_ClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A({minValue:e,maxValue:t,symbol:(0,_symbols_js__WEBPACK_IMPORTED_MODULE_1__/* .ensureType */ .dp)(i)}):j((0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__/* .clone */ .o8)(e)),this.classBreakInfos.push(r),1===this.classBreakInfos.length&&this.notifyChange("minValue")}removeClassBreakInfo(e,s){const t=this.classBreakInfos.length;for(let o=0;o<t;o++){const t=[this.classBreakInfos[o].minValue,this.classBreakInfos[o].maxValue];if(t[0]===e&&t[1]===s){this.classBreakInfos.splice(o,1);break}}}getBreakIndex(e,s){return this.valueExpression&&null==s?.arcade&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.getLogger(this).warn(""),this.valueExpression?this._getBreakIndexForExpression(e,s):this._getBreakIndexForField(e)}async getClassBreakInfo(e,s){let t=s;this.valueExpression&&null==s?.arcade&&(t={...t,arcade:await (0,_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_18__/* .loadArcade */ .lw)()});const o=this.getBreakIndex(e,t);return-1!==o?this.classBreakInfos[o]:null}getSymbol(e,s){if(this.valueExpression&&null==s?.arcade)return void _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.getLogger(this).error("#getSymbol()","Please use getSymbolAsync if valueExpression is used");const t=this.getBreakIndex(e,s);return t>-1?this.classBreakInfos[t].symbol:this.defaultSymbol}async getSymbolAsync(e,s){let t=s;if(this.valueExpression&&null==s?.arcade){const e=await (0,_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_18__/* .loadArcade */ .lw)(),{arcadeUtils:s}=e;s.hasGeometryOperations(this.valueExpression)&&await s.enableGeometryOperations(),t={...t,arcade:e}}const o=this.getBreakIndex(e,t);return o>-1?this.classBreakInfos[o].symbol:this.defaultSymbol}getSymbols(){const e=[];return this.classBreakInfos.forEach((s=>{s.symbol&&e.push(s.symbol)})),this.defaultSymbol&&e.push(this.defaultSymbol),e}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,s)=>e+s.getAttributeHash()),"")}getMeshHash(){const e=JSON.stringify(this.backgroundFillSymbol),s=JSON.stringify(this.defaultSymbol),t=`${this.normalizationField}.${this.normalizationType}.${this.normalizationTotal}`;return`${e}.${s}.${this.classBreakInfos.reduce(((e,s)=>e+s.getMeshHash()),"")}.${t}.${this.field}.${this.valueExpression}`}get arcadeRequired(){return this.arcadeRequiredForVisualVariables||!!this.valueExpression}clone(){return new B({field:this.field,backgroundFillSymbol:this.backgroundFillSymbol?.clone(),defaultLabel:this.defaultLabel,defaultSymbol:this.defaultSymbol?.clone(),valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,classBreakInfos:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__/* .clone */ .o8)(this.classBreakInfos),isMaxInclusive:this.isMaxInclusive,normalizationField:this.normalizationField,normalizationTotal:this.normalizationTotal,normalizationType:this.normalizationType,visualVariables:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__/* .clone */ .o8)(this.visualVariables),legendOptions:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__/* .clone */ .o8)(this.legendOptions),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}async collectRequiredFields(e,s){const t=[this.collectVVRequiredFields(e,s),this.collectSymbolFields(e,s)];await Promise.all(t)}async collectSymbolFields(e,s){const t=[...this.getSymbols().map((t=>t.collectRequiredFields(e,s))),(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .collectArcadeFieldNames */ .Dx)(e,s,this.valueExpression)];(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .collectField */ .rq)(e,s,this.field),(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .collectField */ .rq)(e,s,this.normalizationField),await Promise.all(t)}_getBreakIndexForExpression(e,s){const{viewingMode:t,scale:o,spatialReference:i,arcade:r,timeZone:a}=s??{},{valueExpression:l}=this;let n=this._compiledValueExpression.valueExpression===l?this._compiledValueExpression.compiledFunction:null;const u=r.arcadeUtils;if(!n){const e=u.createSyntaxTree(l);n=u.createFunction(e),this._compiledValueExpression.compiledFunction=n}this._compiledValueExpression.valueExpression=l;const c=u.executeFunction(n,u.createExecContext(e,u.getViewInfo({viewingMode:t,scale:o,spatialReference:i}),a));return this._getBreakIndexfromInfos(c)}_getBreakIndexForField(e){const s=this.field,t=e.attributes,o=this.normalizationType;let i=parseFloat(t[s]);if(o){const e=this.normalizationTotal,s=parseFloat(this.normalizationField?t[this.normalizationField]:void 0);if(o===V)i=Math.log(i)*Math.LOG10E;else if(o!==F||null==e||isNaN(e)){if(o===S&&!isNaN(s)){if(isNaN(i)||isNaN(s))return-1;i/=s}}else i=i/e*100}return this._getBreakIndexfromInfos(i)}_getBreakIndexfromInfos(e){const s=this.isMaxInclusive;if(null!=e&&"number"==typeof e&&!isNaN(e))for(let t=0;t<this.classBreakInfos.length;t++){const o=[this.classBreakInfos[t].minValue,this.classBreakInfos[t].maxValue];if(o[0]<=e&&(s?e<=o[1]:e<o[1]))return t}return-1}_areClassBreaksConsecutive(){const e=this.classBreakInfos,s=e.length;for(let t=1;t<s;t++)if(e[t-1].maxValue!==e[t].minValue)return!1;return!0}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_16__/* .rendererBackgroundFillSymbolProperty */ .As)],z.prototype,"backgroundFillSymbol",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:[_support_ClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A]})],z.prototype,"classBreakInfos",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__/* .reader */ .w)("classBreakInfos")],z.prototype,"readClassBreakInfos",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__/* .writer */ .K)("classBreakInfos")],z.prototype,"writeClassBreakInfos",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:String,json:{write:!0}})],z.prototype,"defaultLabel",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_16__/* .rendererSymbolProperty */ .z4)],z.prototype,"defaultSymbol",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:String,json:{write:!0}})],z.prototype,"field",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_6__/* .cast */ .w)("field")],z.prototype,"castField",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:Boolean})],z.prototype,"isMaxInclusive",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:_support_LegendOptions_js__WEBPACK_IMPORTED_MODULE_17__/* .LegendOptions */ .q,json:{write:!0}})],z.prototype,"legendOptions",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:Number,readOnly:!0,value:null,json:{read:!1,write:{overridePolicy(){return 0!==this.classBreakInfos.length&&this._areClassBreaksConsecutive()?{enabled:!0}:{enabled:!1}}}}})],z.prototype,"minValue",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:String,json:{write:!0}})],z.prototype,"normalizationField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:Number,cast:e=>(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_11__/* .ensureNumber */ .GB)(e),json:{write:!0}})],z.prototype,"normalizationTotal",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:E.apiValues,value:null,json:{type:E.jsonValues,read:E.read,write:E.write}})],z.prototype,"normalizationType",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__/* .enumeration */ .e)({classBreaks:"class-breaks"})],z.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:String,json:{write:!0}})],z.prototype,"valueExpression",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:String,json:{write:!0}})],z.prototype,"valueExpressionTitle",void 0),z=B=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__/* .subclass */ .$)("esri.renderers.ClassBreaksRenderer")],z);const w=z;


/***/ }),

/***/ 84685:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19251);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77542);
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42453);
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76589);
/* harmony import */ var _mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63501);
/* harmony import */ var _support_DictionaryLoader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57081);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var p;let c=p=class extends((0,_mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_8__/* .VisualVariablesMixin */ .h)(_Renderer_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)){constructor(e){super(e),this.config=null,this.fieldMap=null,this.scaleExpression=null,this.scaleExpressionTitle=null,this.url=null,this.type="dictionary"}get _loader(){return new _support_DictionaryLoader_js__WEBPACK_IMPORTED_MODULE_9__.DictionaryLoader(this.url,this.config,this.fieldMap)}writeData(e,r){e&&(r.scalingExpressionInfo={expression:e,returnType:"number"})}writeVisualVariables(e,r,s,i){i?.origin||super.writeVisualVariables(e,r,s,i)}clone(){return new p({config:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(this.config),scaleExpression:this.scaleExpression,scaleExpressionTitle:this.scaleExpressionTitle,fieldMap:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(this.fieldMap),url:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(this.url),visualVariables:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(this.visualVariables)})}async getSymbolAsync(e,r){return this._loader.getSymbolAsync(e,r)}async collectRequiredFields(e,r){await this.collectVVRequiredFields(e,r),this.scaleExpression&&await (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .collectArcadeFieldNames */ .Dx)(e,r,this.scaleExpression);for(const s in this.fieldMap){const i=this.fieldMap[s];r.has(i)&&e.add(i)}}get arcadeRequired(){return!0}getSymbol(){return null}getSymbols(){return[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,r)=>e+r.getAttributeHash()),"")}getMeshHash(){return`${this.url}-${JSON.stringify(this.fieldMap)}`}getSymbolFields(){return this._loader.getSymbolFields()}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_support_DictionaryLoader_js__WEBPACK_IMPORTED_MODULE_9__.DictionaryLoader})],c.prototype,"_loader",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Object,json:{read:{source:"configuration"},write:{target:"configuration"}}})],c.prototype,"config",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Object,json:{write:!0}})],c.prototype,"fieldMap",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{read:{source:"scalingExpressionInfo.expression"},write:!0}})],c.prototype,"scaleExpression",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_5__/* .writer */ .K)("scaleExpression")],c.prototype,"writeData",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{read:{source:"scalingExpressionInfo.title"},write:{target:"scalingExpressionInfo.title",overridePolicy(e){return{enabled:!!e&&!!this.scaleExpression}}}}})],c.prototype,"scaleExpressionTitle",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],c.prototype,"url",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_5__/* .writer */ .K)("visualVariables")],c.prototype,"writeVisualVariables",null),c=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__/* .subclass */ .$)("esri.renderers.DictionaryRenderer")],c);const u=c;


/***/ }),

/***/ 20299:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ y)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(96220);
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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/fieldUtils.js
var fieldUtils = __webpack_require__(42453);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/Renderer.js
var Renderer = __webpack_require__(76589);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/mixins/VisualVariablesMixin.js + 5 modules
var VisualVariablesMixin = __webpack_require__(63501);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/AttributeColorInfo.js
var AttributeColorInfo = __webpack_require__(93101);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
;// ../node_modules/@arcgis/core/renderers/support/DotDensityLegendOptions.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var e;let p=e=class extends JSONSupport/* JSONSupport */.oY{constructor(){super(...arguments),this.unit=null}clone(){return new e({unit:this.unit})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"unit",void 0),p=e=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.DotDensityLegendOptions")],p);const c=p;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleFillSymbol.js
var SimpleFillSymbol = __webpack_require__(68882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleLineSymbol.js + 2 modules
var SimpleLineSymbol = __webpack_require__(40241);
;// ../node_modules/@arcgis/core/renderers/DotDensityRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var h;let m=h=class extends((0,VisualVariablesMixin/* VisualVariablesMixin */.h)(Renderer/* default */.A)){constructor(t){super(t),this.attributes=null,this.backgroundColor=new Color/* default */.A([0,0,0,0]),this.dotBlendingEnabled=!0,this.dotShape="square",this.dotSize=1,this.legendOptions=null,this.outline=new SimpleLineSymbol/* default */.A,this.dotValue=null,this.referenceScale=null,this.seed=1,this.type="dot-density"}calculateDotValue(t){if(null==this.referenceScale)return this.dotValue;const e=t/this.referenceScale*this.dotValue;return e<1?1:e}getSymbol(){return new SimpleFillSymbol/* default */.A({outline:this.outline})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}getAttributeHash(){return this.attributes?.reduce(((t,e)=>t+e.getAttributeHash()),"")??""}getMeshHash(){return JSON.stringify(this.outline)}clone(){return new h({attributes:(0,lang/* clone */.o8)(this.attributes),backgroundColor:(0,lang/* clone */.o8)(this.backgroundColor),dotBlendingEnabled:(0,lang/* clone */.o8)(this.dotBlendingEnabled),dotShape:(0,lang/* clone */.o8)(this.dotShape),dotSize:(0,lang/* clone */.o8)(this.dotSize),dotValue:(0,lang/* clone */.o8)(this.dotValue),legendOptions:(0,lang/* clone */.o8)(this.legendOptions),outline:(0,lang/* clone */.o8)(this.outline),referenceScale:(0,lang/* clone */.o8)(this.referenceScale),visualVariables:(0,lang/* clone */.o8)(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}getControllerHash(){const t=this.attributes?.map((t=>t.field||t.valueExpression||""));return`${t}-${this.outline&&JSON.stringify(this.outline.toJSON())||""}`}async collectRequiredFields(t,e){await this.collectVVRequiredFields(t,e);for(const o of this.attributes??[])o.valueExpression&&await (0,fieldUtils/* collectArcadeFieldNames */.Dx)(t,e,o.valueExpression),o.field&&t.add(o.field)}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[AttributeColorInfo/* default */.A],json:{write:!0}})],m.prototype,"attributes",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Color/* default */.A,json:{write:!0}})],m.prototype,"backgroundColor",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],m.prototype,"dotBlendingEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!1}})],m.prototype,"dotShape",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],m.prototype,"dotSize",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:c,json:{write:!0}})],m.prototype,"legendOptions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SimpleLineSymbol/* default */.A,json:{default:null,write:!0}})],m.prototype,"outline",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],m.prototype,"dotValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],m.prototype,"referenceScale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],m.prototype,"seed",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({dotDensity:"dot-density"})],m.prototype,"type",void 0),m=h=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.DotDensityRenderer")],m);const y=m;


/***/ }),

/***/ 25498:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ P)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(96220);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols.js + 1 modules
var symbols = __webpack_require__(30822);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/deprecate.js
var deprecate = __webpack_require__(50220);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/scheduling.js
var scheduling = __webpack_require__(61449);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/screenUtils.js
var screenUtils = __webpack_require__(89882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/utils.js
var utils = __webpack_require__(55135);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(28902);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/fieldUtils.js
var fieldUtils = __webpack_require__(42453);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/Renderer.js
var Renderer = __webpack_require__(76589);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/AuthoringInfo.js + 3 modules
var AuthoringInfo = __webpack_require__(20699);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/HeatmapColorStop.js
var HeatmapColorStop = __webpack_require__(50769);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(24793);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
;// ../node_modules/@arcgis/core/renderers/support/HeatmapLegendOptions.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let p=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(){super(...arguments),this.minLabel=null,this.maxLabel=null,this.title=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"minLabel",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"maxLabel",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"title",void 0),p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.HeatmapLegendOptions")],p);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/heatmapUtils.js
var heatmapUtils = __webpack_require__(27927);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleMarkerSymbol.js
var SimpleMarkerSymbol = __webpack_require__(23369);
;// ../node_modules/@arcgis/core/renderers/HeatmapRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var j;const D="esri.renderers.HeatmapRenderer",I=Logger/* default */.A.getLogger(D);function S(e){if(null!=e){const{maxDensity:t,minDensity:i,radius:s}=e;if(null!=t||null!=i||null!=s){const{blurRadius:t,maxPixelIntensity:i,minPixelIntensity:s,...r}=e;return r}}return e}let v=j=class extends Renderer/* default */.A{constructor(e){super(e),this.authoringInfo=null,this.colorStops=[new HeatmapColorStop/* default */.A({ratio:0,color:new Color/* default */.A("rgba(255, 140, 0, 0)")}),new HeatmapColorStop/* default */.A({ratio:.75,color:new Color/* default */.A("rgba(255, 140, 0, 1)")}),new HeatmapColorStop/* default */.A({ratio:.9,color:new Color/* default */.A("rgba(255, 0,   0, 1)")})],this.field=null,this.fieldOffset=0,this.legendOptions=null,this.maxDensity=.04,this.minDensity=0,this.radius=18,this.referenceScale=0,this.type="heatmap",this.valueExpression=null,this.valueExpressionTitle=null,this._warnedProps={blurRadius:!1,maxPixelIntensity:!1,minPixelIntensity:!1}}normalizeCtorArgs(e){return S(e)}get blurRadius(){return (0,heatmapUtils/* kernelDensityRadiusPtToGaussianBlurRadiusPx */.PU)(this.radius)}set blurRadius(e){const t=this.maxPixelIntensity,i=this.minPixelIntensity;this._set("radius",(0,heatmapUtils/* gaussianBlurRadiusPxToKernelDensityRadiusPt */.zp)(e)),this._warnAboutDeprecatedGaussianBlurProp("blurRadius","radius"),this._set("maxDensity",t*this._pixelIntensityToDensity),this._set("minDensity",i*this._pixelIntensityToDensity)}get maxPixelIntensity(){return this.maxDensity/this._pixelIntensityToDensity}set maxPixelIntensity(e){this._set("maxDensity",e*this._pixelIntensityToDensity),this._warnAboutDeprecatedGaussianBlurProp("maxPixelIntensity","maxDensity")}get minPixelIntensity(){return this.minDensity/this._pixelIntensityToDensity}set minPixelIntensity(e){this._set("minDensity",e*this._pixelIntensityToDensity),this._warnAboutDeprecatedGaussianBlurProp("minPixelIntensity","minDensity")}get _pixelIntensityToDensity(){return 24/(heatmapUtils/* magicKernelDensityRadiusInflationFactor */.ex**2*this.blurRadius**4)}_warnAboutDeprecatedGaussianBlurProp(e,t){if(this._warnedProps[e])return;"user"===(0,utils/* getProperties */.oY)(this).getDefaultOrigin()&&(this._warnedProps[e]=!0,(0,scheduling/* schedule */._)((()=>{(0,deprecate/* deprecatedProperty */.Lx)(I,e,{replacement:`${String(t)} (suggested value: ${this._get(t)})`,version:"4.24"})})))}read(e,t){e=S(e),super.read(e,t)}getSymbol(){return new SimpleMarkerSymbol/* default */.A}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}async collectRequiredFields(e,t){const i=this.field,s=this.valueExpression;i&&"string"==typeof i&&(0,fieldUtils/* collectField */.rq)(e,t,i),s&&"string"==typeof s&&await (0,fieldUtils/* collectArcadeFieldNames */.Dx)(e,t,s)}getAttributeHash(){return null}getMeshHash(){return`${JSON.stringify(this.colorStops)}.${this.blurRadius}.${this.field}`}clone(){return new j({authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),colorStops:(0,lang/* clone */.o8)(this.colorStops),field:this.field,legendOptions:(0,lang/* clone */.o8)(this.legendOptions),maxDensity:this.maxDensity,minDensity:this.minDensity,radius:this.radius,referenceScale:this.referenceScale,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:AuthoringInfo/* default */.A,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],v.prototype,"authoringInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],v.prototype,"blurRadius",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[HeatmapColorStop/* default */.A],json:{write:!0}})],v.prototype,"colorStops",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],v.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:{overridePolicy:(e,t,i)=>({enabled:null==i})},origins:{"web-scene":{write:!1}}}})],v.prototype,"fieldOffset",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:p,json:{write:!0}})],v.prototype,"legendOptions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],v.prototype,"maxDensity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],v.prototype,"maxPixelIntensity",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],v.prototype,"minDensity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],v.prototype,"minPixelIntensity",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,cast:screenUtils/* toPt */.cr,json:{write:!0}})],v.prototype,"radius",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,range:{min:0},json:{default:0,write:!0}})],v.prototype,"referenceScale",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({heatmap:"heatmap"})],v.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0,origins:{"web-document":{write:!1},"portal-item":{write:!1}}}})],v.prototype,"valueExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],v.prototype,"valueExpressionTitle",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],v.prototype,"_pixelIntensityToDensity",null),v=j=(0,tslib_es6._)([(0,subclass/* subclass */.$)(D)],v);const P=v;


/***/ }),

/***/ 79300:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ j)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(96220);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols.js + 1 modules
var symbols = __webpack_require__(30822);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(24793);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/screenUtils.js
var screenUtils = __webpack_require__(89882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(28902);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/fieldUtils.js
var fieldUtils = __webpack_require__(42453);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/Renderer.js
var Renderer = __webpack_require__(76589);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/mixins/VisualVariablesMixin.js + 5 modules
var VisualVariablesMixin = __webpack_require__(63501);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/AttributeColorInfo.js
var AttributeColorInfo = __webpack_require__(93101);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
;// ../node_modules/@arcgis/core/renderers/support/OthersCategory.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let i=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(){super(...arguments),this.color=new Color/* default */.A([0,0,0,0]),this.label=null,this.threshold=0}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Color/* default */.A,json:{write:!0}})],i.prototype,"color",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],i.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,range:{min:0,max:1},json:{write:!0}})],i.prototype,"threshold",void 0),i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.OthersCategory")],i);

;// ../node_modules/@arcgis/core/renderers/support/PieChartLegendOptions.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let p=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(){super(...arguments),this.title=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"title",void 0),p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.PieChartLegendOptions")],p);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleMarkerSymbol.js
var SimpleMarkerSymbol = __webpack_require__(23369);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleFillSymbol.js
var SimpleFillSymbol = __webpack_require__(68882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleLineSymbol.js + 2 modules
var SimpleLineSymbol = __webpack_require__(40241);
;// ../node_modules/@arcgis/core/renderers/PieChartRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let f=class extends((0,VisualVariablesMixin/* VisualVariablesMixin */.h)((0,Clonable/* ClonableMixin */.O)(Renderer/* default */.A))){constructor(t){super(t),this.attributes=null,this.backgroundFillSymbol=null,this.defaultColor=new Color/* default */.A([0,0,0,0]),this.defaultLabel=null,this.holePercentage=0,this.othersCategory=new i,this.legendOptions=null,this.outline=null,this.size=12,this.type="pie-chart"}getSymbol(){return new SimpleMarkerSymbol/* default */.A({size:this.size?this.size/2+(this.outline?.width||0):0})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol(),this.backgroundFillSymbol].filter(arrayUtils/* isSome */.Ru)}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((t,e)=>t+e.getAttributeHash()),"")}getMeshHash(){return this.getSymbols().reduce(((t,e)=>t+JSON.stringify(e)),"")}async collectRequiredFields(t,e){await this.collectVVRequiredFields(t,e);for(const o of this.attributes)o.valueExpression&&await (0,fieldUtils/* collectArcadeFieldNames */.Dx)(t,e,o.valueExpression),o.field&&t.add(o.field)}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[AttributeColorInfo/* default */.A],json:{write:!0}})],f.prototype,"attributes",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SimpleFillSymbol/* default */.A,json:{default:null,write:!0}})],f.prototype,"backgroundFillSymbol",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Color/* default */.A,json:{write:!0}})],f.prototype,"defaultColor",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],f.prototype,"defaultLabel",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,range:{min:0,max:1},json:{write:!0}})],f.prototype,"holePercentage",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:i,json:{write:!0}})],f.prototype,"othersCategory",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:p,json:{write:!0}})],f.prototype,"legendOptions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SimpleLineSymbol/* default */.A,json:{default:null,write:!0}})],f.prototype,"outline",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,cast:screenUtils/* toPt */.cr,json:{write:!0}})],f.prototype,"size",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({pieChart:"pie-chart"})],f.prototype,"type",void 0),f=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.PieChartRenderer")],f);const j=f;


/***/ }),

/***/ 76589:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59851);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63863);
/* harmony import */ var _support_AuthoringInfo_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20699);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const n=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONMap */ .J({simple:"simple",uniqueValue:"unique-value",classBreaks:"class-breaks",heatmap:"heatmap",dotDensity:"dot-density",dictionary:"dictionary",pieChart:"pie-chart"},{ignoreUnknown:!0});let a=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY{constructor(r){super(r),this.authoringInfo=null,this.type=null}async getRequiredFields(r){if(!this.collectRequiredFields)return[];const e=new Set;return await this.collectRequiredFields(e,r),Array.from(e).sort()}getSymbol(r,e){}async getSymbolAsync(r,e){}getSymbols(){return[]}getAttributeHash(){return JSON.stringify(this)}getMeshHash(){return JSON.stringify(this)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_support_AuthoringInfo_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,json:{write:!0}})],a.prototype,"authoringInfo",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:n.apiValues,readOnly:!0,json:{type:n.jsonValues,read:!1,write:{writer:n.write,ignoreOrigin:!0}}})],a.prototype,"type",void 0),a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.renderers.Renderer")],a);const p=a;


/***/ }),

/***/ 47347:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19251);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76589);
/* harmony import */ var _mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63501);
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16758);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var c;let n=c=class extends((0,_mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_7__/* .VisualVariablesMixin */ .h)(_Renderer_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)){constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.type="simple"}async collectRequiredFields(e,s){await Promise.all([this.collectSymbolFields(e,s),this.collectVVRequiredFields(e,s)])}async collectSymbolFields(e,s){await Promise.all(this.getSymbols().map((r=>r.collectRequiredFields(e,s))))}getSymbol(e,s){return this.symbol}async getSymbolAsync(e,s){return this.symbol}getSymbols(){return this.symbol?[this.symbol]:[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,s)=>e+s.getAttributeHash()),"")}getMeshHash(){return this.getSymbols().reduce(((e,s)=>e+JSON.stringify(s)),"")}get arcadeRequired(){return this.arcadeRequiredForVisualVariables}clone(){return new c({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),visualVariables:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],n.prototype,"description",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],n.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_8__/* .requiredRendererSymbolProperty */ .Wp)],n.prototype,"symbol",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_4__/* .enumeration */ .e)({simple:"simple"})],n.prototype,"type",void 0),n=c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.renderers.SimpleRenderer")],n);const p=n;


/***/ }),

/***/ 2692:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ A)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols.js + 1 modules
var symbols = __webpack_require__(30822);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/object.js
var object = __webpack_require__(76724);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(85251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(4130);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(28902);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/diffUtils.js
var diffUtils = __webpack_require__(64442);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/fieldUtils.js
var fieldUtils = __webpack_require__(42453);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/portal/Portal.js + 2 modules
var Portal = __webpack_require__(10282);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/Renderer.js
var Renderer = __webpack_require__(76589);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/mixins/VisualVariablesMixin.js + 5 modules
var VisualVariablesMixin = __webpack_require__(63501);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/commonProperties.js
var commonProperties = __webpack_require__(16758);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/LegendOptions.js
var LegendOptions = __webpack_require__(38785);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(24793);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
;// ../node_modules/@arcgis/core/renderers/support/UniqueValue.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let c=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(o){super(o),this.value=null,this.value2=null,this.value3=null}};(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* uniqueValueProperty */.Ug)],c.prototype,"value",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* uniqueValueProperty */.Ug)],c.prototype,"value2",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* uniqueValueProperty */.Ug)],c.prototype,"value3",void 0),c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.UniqueValue")],c);const UniqueValue_u=c;

;// ../node_modules/@arcgis/core/renderers/support/UniqueValueClass.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let n=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(r){super(r),this.description=null,this.label=null,this.symbol=null,this.values=null}castValues(r){if(null==r)return null;const o=typeof(r=Array.isArray(r)?r:[r])[0];return"string"===o||"number"===o?r.map((r=>new UniqueValue_u({value:r}))):"object"===o?r[0]instanceof UniqueValue_u?r:r.map((r=>new UniqueValue_u(r))):null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],n.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],n.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* rendererSymbolProperty */.z4)],n.prototype,"symbol",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[UniqueValue_u],json:{type:[[String]],read:{reader:r=>r?r.map((r=>new UniqueValue_u({value:r[0],value2:r[1],value3:r[2]}))):null},write:{writer:(r,e)=>{const t=[];for(const s of r){const r=[s.value,s.value2,s.value3].filter(arrayUtils/* isSome */.Ru).map((r=>r.toString()));t.push(r)}e.values=t}}}})],n.prototype,"values",void 0),(0,tslib_es6._)([(0,cast/* cast */.w)("values")],n.prototype,"castValues",null),n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.UniqueValueClass")],n);const UniqueValueClass_u=n;

;// ../node_modules/@arcgis/core/renderers/support/UniqueValueGroup.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let UniqueValueGroup_c=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(r){super(r),this.heading=null,this.classes=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],UniqueValueGroup_c.prototype,"heading",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[UniqueValueClass_u],json:{write:!0}})],UniqueValueGroup_c.prototype,"classes",void 0),UniqueValueGroup_c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.UniqueValueGroup")],UniqueValueGroup_c);const UniqueValueGroup_i=UniqueValueGroup_c;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/UniqueValueInfo.js
var UniqueValueInfo = __webpack_require__(3324);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/arcadeOnDemand.js
var arcadeOnDemand = __webpack_require__(28965);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/persistableUrlUtils.js
var persistableUrlUtils = __webpack_require__(63680);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/styleUtils.js
var styleUtils = __webpack_require__(28051);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/WebStyleSymbol.js
var WebStyleSymbol = __webpack_require__(75162);
;// ../node_modules/@arcgis/core/renderers/UniqueValueRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var E;const M="esri.renderers.UniqueValueRenderer",N=Logger/* default */.A.getLogger(M),R="uvInfos-watcher",P="uvGroups-watcher",C=",",$=(0,ensureType/* ensureType */.dp)(UniqueValueInfo/* default */.A);function z(e){const{field1:t,field2:s,field3:i,fieldDelimiter:o,uniqueValueInfos:l,valueExpression:r}=e,u=!(!t||!s);return[{classes:(l??[]).map((e=>{const{symbol:l,label:n,value:a,description:p}=e,[f,d,c]=u?a?.toString()?.split(o||"")||[]:[a],h=[];return(t||r)&&h.push(f),s&&h.push(d),i&&h.push(c),{symbol:l,label:n,values:[h],description:p}}))}]}let k=E=class extends((0,VisualVariablesMixin/* VisualVariablesMixin */.h)(Renderer/* default */.A)){constructor(e){super(e),this._valueInfoMap={},this._isDefaultSymbolDerived=!1,this._isInfosSource=null,this.type="unique-value",this.backgroundFillSymbol=null,this.orderByClassesEnabled=!1,this.valueExpressionTitle=null,this.legendOptions=null,this.defaultLabel=null,this.portal=null,this.styleOrigin=null,this.diff={uniqueValueInfos(e,t){if(!e&&!t)return;if(!e||!t)return{type:"complete",oldValue:e,newValue:t};let s=!1;const i={type:"collection",added:[],removed:[],changed:[],unchanged:[]};for(let o=0;o<t.length;o++){const l=e.find((e=>e.value===t[o].value));l?(0,diffUtils/* diff */.Ui)(l,t[o])?(i.changed.push({type:"complete",oldValue:l,newValue:t[o]}),s=!0):i.unchanged.push({oldValue:l,newValue:t[o]}):(i.added.push(t[o]),s=!0)}for(let o=0;o<e.length;o++){t.find((t=>t.value===e[o].value))||(i.removed.push(e[o]),s=!0)}return s?i:void 0}},this._set("uniqueValueInfos",[]),this._set("uniqueValueGroups",[])}get _cache(){return{compiledFunc:null}}set field(e){this._set("field",e),this._updateFieldDelimiter(),this._updateUniqueValues()}castField(e){return null==e||"function"==typeof e?e:(0,ensureType/* ensureString */.GX)(e)}writeField(e,t,i,o){"string"==typeof e?t[i]=e:o?.messages?o.messages.push(new Error/* default */.A("property:unsupported","UniqueValueRenderer.field set to a function cannot be written to JSON")):N.error(".field: cannot write field to JSON since it's not a string value")}set field2(e){this._set("field2",e),this._updateFieldDelimiter(),this._updateUniqueValues()}set field3(e){this._set("field3",e),this._updateUniqueValues()}set valueExpression(e){this._set("valueExpression",e),this._updateUniqueValues()}set defaultSymbol(e){this._isDefaultSymbolDerived=!1,this._set("defaultSymbol",e)}set fieldDelimiter(e){this._set("fieldDelimiter",e),this._updateUniqueValues()}readPortal(e,t,s){return s.portal||Portal/* default */.A.getDefault()}readStyleOrigin(e,t,s){if(t.styleName)return Object.freeze({styleName:t.styleName});if(t.styleUrl){const e=(0,persistableUrlUtils.f)(t.styleUrl,s);return Object.freeze({styleUrl:e})}}writeStyleOrigin(e,t,s,i){e.styleName?t.styleName=e.styleName:e.styleUrl&&(t.styleUrl=(0,persistableUrlUtils.t)(e.styleUrl,i))}set uniqueValueGroups(e){this.styleOrigin?N.error("#uniqueValueGroups=","Cannot modify unique value groups of a UniqueValueRenderer created from a web style"):(this._set("uniqueValueGroups",e),this._updateInfosFromGroups(),this._isInfosSource=!1,this._watchUniqueValueGroups())}set uniqueValueInfos(e){this.styleOrigin?N.error("#uniqueValueInfos=","Cannot modify unique value infos of a UniqueValueRenderer created from a web style"):(this._set("uniqueValueInfos",e),this._updateValueInfoMap(),this._updateGroupsFromInfos(),this._isInfosSource=!0,this._watchUniqueValueInfos())}addUniqueValueInfo(e,s){if(this.styleOrigin)return void N.error("#addUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style");let i;i="object"==typeof e?$(e):new UniqueValueInfo/* default */.A({value:e,symbol:(0,symbols/* ensureType */.dp)(s)}),this.uniqueValueInfos?.push(i),this._valueInfoMap[i.value]=i,this._updateGroupsFromInfos(),this._isInfosSource=!0,this._watchUniqueValueInfos()}removeUniqueValueInfo(e){if(this.styleOrigin)return void N.error("#removeUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style");const t=this.uniqueValueInfos;if(t)for(let s=0;s<t.length;s++){const i=t[s];if(String(i.value)===String(e)){delete this._valueInfoMap[e],t.splice(s,1);break}}this._updateGroupsFromInfos(),this._isInfosSource=!0,this._watchUniqueValueInfos()}async getUniqueValueInfo(e,t){let s=t;return this.valueExpression&&null==t?.arcade&&(s={...s,arcade:await (0,arcadeOnDemand/* loadArcade */.lw)()}),this._getUniqueValueInfo(e,s)}getSymbol(e,t){if(this.valueExpression&&null==t?.arcade)return void N.error("#getSymbol()","Please use getSymbolAsync if valueExpression is used");const s=this._getUniqueValueInfo(e,t);return s?.symbol||this.defaultSymbol}async getSymbolAsync(e,t){let s=t;if(this.valueExpression&&null==s?.arcade){const e=await (0,arcadeOnDemand/* loadArcade */.lw)(),{arcadeUtils:t}=e;t.hasGeometryOperations(this.valueExpression)&&await t.enableGeometryOperations(),s={...s,arcade:e}}const i=this._getUniqueValueInfo(e,s);return i?.symbol||this.defaultSymbol}getSymbols(){const e=[];for(const t of this.uniqueValueInfos??[])t.symbol&&e.push(t.symbol);return this.defaultSymbol&&e.push(this.defaultSymbol),e}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,t)=>e+t.getAttributeHash()),"")}getMeshHash(){const e=JSON.stringify(this.backgroundFillSymbol),t=JSON.stringify(this.defaultSymbol),s=this.uniqueValueInfos?.reduce(((e,t)=>e+t.getMeshHash()),"");return`${e}.${t}.${s}.${`${this.field}.${this.field2}.${this.field3}.${this.fieldDelimiter}`}.${this.valueExpression}`}clone(){const e=new E({field:this.field,field2:this.field2,field3:this.field3,defaultLabel:this.defaultLabel,defaultSymbol:(0,lang/* clone */.o8)(this.defaultSymbol),orderByClassesEnabled:this.orderByClassesEnabled,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,fieldDelimiter:this.fieldDelimiter,visualVariables:(0,lang/* clone */.o8)(this.visualVariables),legendOptions:(0,lang/* clone */.o8)(this.legendOptions),authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),backgroundFillSymbol:(0,lang/* clone */.o8)(this.backgroundFillSymbol)});this._isDefaultSymbolDerived&&(e._isDefaultSymbolDerived=!0),e._set("portal",this.portal);const t=(0,lang/* clone */.o8)(this.uniqueValueInfos),s=(0,lang/* clone */.o8)(this.uniqueValueGroups);return this.styleOrigin&&(e._set("styleOrigin",Object.freeze((0,lang/* clone */.o8)(this.styleOrigin))),Object.freeze(t),Object.freeze(s)),e._set("uniqueValueInfos",t),e._updateValueInfoMap(),e._set("uniqueValueGroups",s),e._isInfosSource=this._isInfosSource,e._watchUniqueValueInfosAndGroups(),e}get arcadeRequired(){return this.arcadeRequiredForVisualVariables||!!this.valueExpression}async collectRequiredFields(e,t){const s=[this.collectVVRequiredFields(e,t),this.collectSymbolFields(e,t)];await Promise.all(s)}async collectSymbolFields(e,t){const s=[...this.getSymbols().map((s=>s.collectRequiredFields(e,t))),(0,fieldUtils/* collectArcadeFieldNames */.Dx)(e,t,this.valueExpression)];(0,fieldUtils/* collectField */.rq)(e,t,this.field),(0,fieldUtils/* collectField */.rq)(e,t,this.field2),(0,fieldUtils/* collectField */.rq)(e,t,this.field3),await Promise.all(s)}populateFromStyle(){return (0,styleUtils/* fetchStyle */.cF)(this.styleOrigin,{portal:this.portal}).then((e=>{const t=[];return this._valueInfoMap={},e&&e.data&&Array.isArray(e.data.items)&&e.data.items.forEach((s=>{const i=new WebStyleSymbol/* default */.A({styleUrl:e.styleUrl,styleName:e.styleName,portal:this.portal,name:s.name});this.defaultSymbol||s.name!==e.data.defaultItem||(this.defaultSymbol=i,this._isDefaultSymbolDerived=!0);const o=new UniqueValueInfo/* default */.A({value:s.name,symbol:i});t.push(o),this._valueInfoMap[s.name]=o})),this._set("uniqueValueInfos",Object.freeze(t)),this._updateGroupsFromInfos(!0),this._isInfosSource=null,this._watchUniqueValueInfos(),!this.defaultSymbol&&this.uniqueValueInfos?.length&&(this.defaultSymbol=this.uniqueValueInfos[0].symbol,this._isDefaultSymbolDerived=!0),this}))}_updateFieldDelimiter(){this.field&&this.field2&&!this.fieldDelimiter&&this._set("fieldDelimiter",C)}_updateUniqueValues(){null!=this._isInfosSource&&(this._isInfosSource?this._updateGroupsFromInfos():this._updateInfosFromGroups())}_updateValueInfoMap(){this._valueInfoMap={};const{uniqueValueInfos:e}=this;if(e)for(const t of e)this._valueInfoMap[t.value+""]=t}_watchUniqueValueInfosAndGroups(){this._watchUniqueValueInfos(),this._watchUniqueValueGroups()}_watchUniqueValueInfos(){this.removeHandles(R);const{uniqueValueInfos:e}=this;if(e){const t=[];for(const s of e)t.push((0,reactiveUtils/* watch */.wB)((()=>({symbol:s.symbol,value:s.value,label:s.label,description:s.description})),((e,t)=>{e!==t&&(this._updateGroupsFromInfos(),this._isInfosSource=!0)}),{sync:!0}));this.addHandles(t,R)}}_watchUniqueValueGroups(){this.removeHandles(P);const{uniqueValueGroups:e}=this;if(e){const t=[];for(const s of e){t.push((0,reactiveUtils/* watch */.wB)((()=>({classes:s.classes})),((e,t)=>{e!==t&&(this._updateInfosFromGroups(),this._isInfosSource=!1)}),{sync:!0}));for(const e of s.classes??[])t.push((0,reactiveUtils/* watch */.wB)((()=>({symbol:e.symbol,values:e.values,label:e.label,description:e.description})),((e,t)=>{e!==t&&(this._updateInfosFromGroups(),this._isInfosSource=!1)}),{sync:!0}))}this.addHandles(t,P)}}_updateInfosFromGroups(){if(!this.uniqueValueGroups)return this._set("uniqueValueInfos",null),this._updateValueInfoMap(),void this._watchUniqueValueInfos();const e=[],{field:t,field2:s,field3:i,fieldDelimiter:o,uniqueValueGroups:l,valueExpression:r}=this;if(!t&&!r)return this._set("uniqueValueInfos",e),this._updateValueInfoMap(),void this._watchUniqueValueInfos();const u=!(!t||!s);for(const n of l)for(const t of n.classes??[]){const{symbol:l,label:r,values:n,description:a}=t;for(const t of n??[]){const{value:n,value2:p,value3:f}=t,d=[n];s&&d.push(p),i&&d.push(f);const c=u?d.join(o||""):d[0];e.push(new UniqueValueInfo/* default */.A({symbol:l,label:r,value:c,description:a}))}}this._set("uniqueValueInfos",e),this._updateValueInfoMap(),this._watchUniqueValueInfos()}_updateGroupsFromInfos(e=!1){if(!this.uniqueValueInfos)return this._set("uniqueValueGroups",null),void this._watchUniqueValueGroups();const{field:t,field2:s,valueExpression:i,fieldDelimiter:o,uniqueValueInfos:l}=this;if(!t&&!i||!l.length)return this._set("uniqueValueGroups",[]),void this._watchUniqueValueGroups();const r=!(!t||!s),u=l.map((e=>{const{symbol:t,label:s,value:i,description:l}=e,[u,n,a]=r?i?.toString()?.split(o||"")||[]:[i];return new UniqueValueClass_u({symbol:t,label:s,description:l,values:[new UniqueValue_u({value:u,value2:n,value3:a})]})})),n=[new UniqueValueGroup_i({classes:u})];e&&Object.freeze(n),this._set("uniqueValueGroups",n),this._watchUniqueValueGroups()}_getUniqueValueInfo(e,t){return this.valueExpression?this._getUnqiueValueInfoForExpression(e,t):this._getUnqiueValueInfoForFields(e)}_getUnqiueValueInfoForExpression(e,t){const{viewingMode:s,scale:i,spatialReference:o,arcade:l,timeZone:r}=t??{};let u=this._cache.compiledFunc;const n=l.arcadeUtils;if(!u){const e=n.createSyntaxTree(this.valueExpression);u=n.createFunction(e),this._cache.compiledFunc=u}const a=n.executeFunction(u,n.createExecContext(e,n.getViewInfo({viewingMode:s,scale:i,spatialReference:o}),r));return this._valueInfoMap[a+""]}_getUnqiueValueInfoForFields(e){const t=this.field,s=e.attributes;let i;if("function"!=typeof t&&this.field2){const e=this.field2,o=this.field3,l=[];t&&l.push(s[t]),e&&l.push(s[e]),o&&l.push(s[o]),i=l.join(this.fieldDelimiter||"")}else"function"==typeof t?i=t(e):t&&(i=s[t]);return this._valueInfoMap[i+""]}static fromPortalStyle(e,t){const s=new E(t?.properties);s._set("styleOrigin",Object.freeze({styleName:e})),s._set("portal",t?.portal||Portal/* default */.A.getDefault());const i=s.populateFromStyle();return i.catch((t=>{N.error(`#fromPortalStyle('${e}'[, ...])`,"Failed to create unique value renderer from style name",t)})),i}static fromStyleUrl(e,t){const s=new E(t?.properties);s._set("styleOrigin",Object.freeze({styleUrl:e}));const i=s.populateFromStyle();return i.catch((t=>{N.error(`#fromStyleUrl('${e}'[, ...])`,"Failed to create unique value renderer from style URL",t)})),i}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],k.prototype,"_cache",null),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({uniqueValue:"unique-value"})],k.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* rendererBackgroundFillSymbolProperty */.As)],k.prototype,"backgroundFillSymbol",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({value:null,json:{type:String,read:{source:"field1"},write:{target:"field1"}}})],k.prototype,"field",null),(0,tslib_es6._)([(0,cast/* cast */.w)("field")],k.prototype,"castField",null),(0,tslib_es6._)([(0,writer/* writer */.K)("field")],k.prototype,"writeField",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,value:null,json:{write:!0}})],k.prototype,"field2",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,value:null,json:{write:!0}})],k.prototype,"field3",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{name:"drawInClassOrder",default:!1,write:!0,origins:{"web-scene":{write:!1}}}})],k.prototype,"orderByClassesEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,value:null,json:{write:!0}})],k.prototype,"valueExpression",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],k.prototype,"valueExpressionTitle",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:LegendOptions/* LegendOptions */.q,json:{write:!0}})],k.prototype,"legendOptions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],k.prototype,"defaultLabel",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)((0,object/* deepMerge */.$N)({...commonProperties/* rendererSymbolProperty */.z4},{json:{write:{overridePolicy(){return{enabled:!this._isDefaultSymbolDerived}}},origins:{"web-scene":{write:{overridePolicy(){return{enabled:!this._isDefaultSymbolDerived}}}}}}}))],k.prototype,"defaultSymbol",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,value:null,json:{write:!0}})],k.prototype,"fieldDelimiter",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Portal/* default */.A,readOnly:!0})],k.prototype,"portal",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("portal",["styleName"])],k.prototype,"readPortal",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{write:{enabled:!1,overridePolicy:()=>({enabled:!0})}}})],k.prototype,"styleOrigin",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("styleOrigin",["styleName","styleUrl"])],k.prototype,"readStyleOrigin",null),(0,tslib_es6._)([(0,writer/* writer */.K)("styleOrigin",{styleName:{type:String},styleUrl:{type:String}})],k.prototype,"writeStyleOrigin",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[UniqueValueGroup_i],json:{read:{source:["uniqueValueGroups","uniqueValueInfos"],reader:(e,t,s)=>(t.uniqueValueGroups||z(t)).map((e=>UniqueValueGroup_i.fromJSON(e,s)))},write:{overridePolicy(){return this.styleOrigin?{enabled:!1}:{enabled:!0}}}}})],k.prototype,"uniqueValueGroups",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[UniqueValueInfo/* default */.A],json:{read:!1,write:{overridePolicy(){return this.styleOrigin?{enabled:!1}:{enabled:!0}}}}})],k.prototype,"uniqueValueInfos",null),k=E=(0,tslib_es6._)([(0,subclass/* subclass */.$)(M)],k);const A=k;


/***/ }),

/***/ 63501:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h: () => (/* binding */ v)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
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
;// ../node_modules/@arcgis/core/renderers/support/randomRotationExpression.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(e){return e.match(t)?.[1]?.replace(/\\'/g,"'")??null}const t=/^hash\(\$feature\['((\\'|[^'])+)'\]\) \* 8\.381e-8$/;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/visualVariables/VisualVariable.js
var VisualVariable = __webpack_require__(57860);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/visualVariables/support/ColorStop.js
var ColorStop = __webpack_require__(5001);
;// ../node_modules/@arcgis/core/renderers/visualVariables/ColorVariable.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var i;let p=i=class extends VisualVariable/* default */.A{constructor(t){super(t),this.type="color",this.normalizationField=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null}}set stops(t){t&&Array.isArray(t)&&(t=t.filter((t=>!!t))).sort(((t,s)=>t.value-s.value)),this._set("stops",t)}clone(){return new i({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map((t=>t.clone())),legendOptions:this.legendOptions?.clone()})}getAttributeHash(){return`${super.getAttributeHash()}-${this.normalizationField}`}_interpolateData(){return this.stops&&this.stops.map((t=>t.value||0))}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],p.prototype,"cache",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["color"],json:{type:["colorInfo"]}})],p.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"normalizationField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[ColorStop/* default */.A],json:{write:!0}})],p.prototype,"stops",null),p=i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.visualVariables.ColorVariable")],p);const a=p;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/webdoc/support/opacityUtils.js
var opacityUtils = __webpack_require__(48904);
;// ../node_modules/@arcgis/core/renderers/visualVariables/support/OpacityStop.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var l;let u=l=class extends JSONSupport/* JSONSupport */.oY{constructor(r){super(r),this.label=null,this.opacity=null,this.value=null}readOpacity(r,t){return (0,opacityUtils/* transparencyToOpacity */.D)(t.transparency)}writeOpacity(r,t,o){t[o]=(0,opacityUtils/* opacityToTransparency */.p)(r)}clone(){return new l({label:this.label,opacity:this.opacity,value:this.value})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],u.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{type:ensureType/* Integer */.jz,write:{target:"transparency"}}})],u.prototype,"opacity",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("opacity",["transparency"])],u.prototype,"readOpacity",null),(0,tslib_es6._)([(0,writer/* writer */.K)("opacity")],u.prototype,"writeOpacity",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],u.prototype,"value",void 0),u=l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.visualVariables.support.OpacityStop")],u);const y=u;

;// ../node_modules/@arcgis/core/renderers/visualVariables/OpacityVariable.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var OpacityVariable_i;let OpacityVariable_a=OpacityVariable_i=class extends VisualVariable/* default */.A{constructor(t){super(t),this.type="opacity",this.normalizationField=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null}}set stops(t){t&&Array.isArray(t)&&(t=t.filter((t=>!!t))).sort(((t,s)=>t.value-s.value)),this._set("stops",t)}clone(){return new OpacityVariable_i({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map((t=>t.clone())),legendOptions:this.legendOptions?.clone()})}getAttributeHash(){return`${super.getAttributeHash()}-${this.normalizationField}`}_interpolateData(){return this.stops&&this.stops.map((t=>t.value||0))}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],OpacityVariable_a.prototype,"cache",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["opacity"],json:{type:["transparencyInfo"]}})],OpacityVariable_a.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],OpacityVariable_a.prototype,"normalizationField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[y],json:{write:!0}})],OpacityVariable_a.prototype,"stops",null),OpacityVariable_a=OpacityVariable_i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.visualVariables.OpacityVariable")],OpacityVariable_a);const OpacityVariable_p=OpacityVariable_a;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/visualVariables/RotationVariable.js
var RotationVariable = __webpack_require__(68090);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/visualVariables/SizeVariable.js + 1 modules
var SizeVariable = __webpack_require__(14977);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(52495);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Warning.js
var Warning = __webpack_require__(68659);
;// ../node_modules/@arcgis/core/renderers/visualVariables/VisualVariableFactory.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const VisualVariableFactory_u={color:a,size:SizeVariable/* default */.A,opacity:OpacityVariable_p,rotation:RotationVariable/* default */.A},b=new jsonMap/* JSONMap */.J({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"}),h=/^\[([^\]]+)\]$/i;let m=class extends Accessor/* default */.A{constructor(){super(...arguments),this.colorVariables=null,this.opacityVariables=null,this.rotationVariables=null,this.sizeVariables=null}set visualVariables(r){if(this._resetVariables(),r=r&&r.filter((r=>!!r)),r?.length){for(const s of r)switch(s.type){case"color":this.colorVariables.push(s);break;case"opacity":this.opacityVariables.push(s);break;case"rotation":this.rotationVariables.push(s);break;case"size":this.sizeVariables.push(s)}if(this.sizeVariables.length){this.sizeVariables.some((r=>!!r.target))&&r.sort(((r,s)=>{let e=null;return e=r.target===s.target?0:r.target?1:-1,e}))}for(let s=0;s<r.length;s++){r[s].index=s}this._set("visualVariables",r)}else this._set("visualVariables",r)}readVariables(r,s,e){const{rotationExpression:a,rotationType:i}=s,l=a?.match(h),n=l?.[1];if(n&&(r||(r=[]),r.push({type:"rotationInfo",rotationType:i,field:n})),r)return r.map((r=>{const s=b.read(r.type),a=VisualVariableFactory_u[s];a||(Logger/* default */.A.getLogger(this).warn(`Unknown variable type: ${s}`),e?.messages&&e.messages.push(new Warning/* default */.A("visual-variable:unsupported",`visualVariable of type '${s}' is not supported`,{definition:r,context:e})));const i=new a;return i.read(r,e),i}))}writeVariables(r,s){const e=[];for(const o of r){const r=o.toJSON(s);r&&e.push(r)}return e}_resetVariables(){this.colorVariables=[],this.opacityVariables=[],this.rotationVariables=[],this.sizeVariables=[]}};(0,tslib_es6._)([(0,property/* property */.MZ)()],m.prototype,"visualVariables",null),m=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.visualVariables.VisualVariableFactory")],m);const V=m;

;// ../node_modules/@arcgis/core/renderers/mixins/VisualVariablesMixin.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const VisualVariablesMixin_m={base:VisualVariable/* default */.A,key:"type",typeMap:{opacity:OpacityVariable_p,color:a,rotation:RotationVariable/* default */.A,size:SizeVariable/* default */.A}},v=l=>{let u=class extends l{constructor(){super(...arguments),this._vvFactory=new V}set visualVariables(r){this._vvFactory.visualVariables=r,this._set("visualVariables",this._vvFactory.visualVariables)}readVisualVariables(r,a,s){return this._vvFactory.readVariables(r,a,s)}writeVisualVariables(r,a,s,i){a[s]=this._vvFactory.writeVariables(r,i)}get arcadeRequiredForVisualVariables(){if(!this.visualVariables)return!1;for(const r of this.visualVariables)if(r.arcadeRequired)return!0;return!1}hasVisualVariables(r,a){return r?this.getVisualVariablesForType(r,a).length>0:this.getVisualVariablesForType("size",a).length>0||this.getVisualVariablesForType("color",a).length>0||this.getVisualVariablesForType("opacity",a).length>0||this.getVisualVariablesForType("rotation",a).length>0}getVisualVariablesForType(r,a){const s=this.visualVariables;return s?s.filter((s=>s.type===r&&("string"==typeof a?s.target===a:!1!==a||!s.target))):[]}async collectVVRequiredFields(r,a){let s=[];this.visualVariables&&(s=s.concat(this.visualVariables));for(const i of s)i&&(i.field&&(0,fieldUtils/* collectField */.rq)(r,a,i.field),i.normalizationField&&(0,fieldUtils/* collectField */.rq)(r,a,i.normalizationField),i.valueExpression&&(VisualVariablesMixin_y(i.valueExpression,r,a)||await (0,fieldUtils/* collectArcadeFieldNames */.Dx)(r,a,i.valueExpression)))}};return (0,tslib_es6._)([(0,property/* property */.MZ)({types:[VisualVariablesMixin_m],value:null,json:{write:!0}})],u.prototype,"visualVariables",null),(0,tslib_es6._)([(0,reader/* reader */.w)("visualVariables",["visualVariables","rotationType","rotationExpression"])],u.prototype,"readVisualVariables",null),(0,tslib_es6._)([(0,writer/* writer */.K)("visualVariables")],u.prototype,"writeVisualVariables",null),u=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.mixins.VisualVariablesMixin")],u),u};function VisualVariablesMixin_y(r,a,s){const i=e(r);return null!=i&&((0,fieldUtils/* collectField */.rq)(a,s,i),!0)}


/***/ }),

/***/ 93101:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96220);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(539);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4130);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73446);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var n;let u=n=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY{constructor(r){super(r),this.color=null,this.field=null,this.label=null,this.valueExpression=null,this.valueExpressionTitle=null}castField(r){return null==r?r:"function"==typeof r?(_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.getLogger(this).error(".field: field must be a string value"),null):(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__/* .ensureString */ .GX)(r)}getAttributeHash(){return`${this.field}-${this.valueExpression}`}clone(){return new n({color:this.color?.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,json:{type:[Number],write:!0}})],u.prototype,"color",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:!0}})],u.prototype,"field",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__/* .cast */ .w)("field")],u.prototype,"castField",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:!0}})],u.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:!0}})],u.prototype,"valueExpression",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:!0}})],u.prototype,"valueExpressionTitle",void 0),u=n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.renderers.support.AttributeColorInfo")],u);const a=u;


/***/ }),

/***/ 20699:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ j)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
;// ../node_modules/@arcgis/core/renderers/support/AuthoringInfoClassBreakInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var t;let p=t=class extends JSONSupport/* JSONSupport */.oY{constructor(r){super(r),this.minValue=0,this.maxValue=0}clone(){return new t({minValue:this.minValue,maxValue:this.maxValue})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],p.prototype,"minValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],p.prototype,"maxValue",void 0),p=t=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderer.support.AuthoringInfoClassBreakInfo")],p);

;// ../node_modules/@arcgis/core/renderers/support/AuthoringInfoFieldInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var n;let AuthoringInfoFieldInfo_p=n=class extends JSONSupport/* JSONSupport */.oY{constructor(o){super(o),this.field="",this.normalizationField="",this.label="",this.classBreakInfos=[]}clone(){return new n({field:this.field,normalizationField:this.normalizationField,label:this.label,classBreakInfos:(0,lang/* clone */.o8)(this.classBreakInfos)})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],AuthoringInfoFieldInfo_p.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],AuthoringInfoFieldInfo_p.prototype,"normalizationField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],AuthoringInfoFieldInfo_p.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[p],json:{write:!0}})],AuthoringInfoFieldInfo_p.prototype,"classBreakInfos",void 0),AuthoringInfoFieldInfo_p=n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.AuthoringInfoFieldInfo")],AuthoringInfoFieldInfo_p);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(4130);
;// ../node_modules/@arcgis/core/renderers/support/AuthoringInfoVisualVariable.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var AuthoringInfoVisualVariable_n;const l=new jsonMap/* JSONMap */.J({percentTotal:"percent-of-total",ratio:"ratio",percent:"percent"}),AuthoringInfoVisualVariable_p=new jsonMap/* JSONMap */.J({sizeInfo:"size",colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation"}),a={key:e=>"number"==typeof e?"number":"string",typeMap:{number:Number,string:String},base:null},u=["high-to-low","above-and-below","centered-on","extremes"],m=[...new Set([...["high-to-low","above-and-below","centered-on","extremes","90-10","above","below"],...["high-to-low","above-and-below","90-10","above","below"]])],y=["seconds","minutes","hours","days","months","years"];let d=AuthoringInfoVisualVariable_n=class extends JSONSupport/* JSONSupport */.oY{constructor(e){super(e),this.endTime=null,this.field=null,this.maxSliderValue=null,this.minSliderValue=null,this.startTime=null,this.type=null,this.units=null}castEndTime(e){return"string"==typeof e||"number"==typeof e?e:null}castStartTime(e){return"string"==typeof e||"number"==typeof e?e:null}get style(){return"color"===this.type?this._get("style"):null}set style(e){this._set("style",e)}get theme(){return"color"===this.type||"size"===this.type?this._get("theme")||"high-to-low":null}set theme(e){this._set("theme",e)}clone(){return new AuthoringInfoVisualVariable_n({endTime:this.endTime,field:this.field,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,startTime:this.startTime,style:this.style,theme:this.theme,type:this.type,units:this.units})}};(0,tslib_es6._)([(0,property/* property */.MZ)({types:a,json:{write:!0}})],d.prototype,"endTime",void 0),(0,tslib_es6._)([(0,cast/* cast */.w)("endTime")],d.prototype,"castEndTime",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],d.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],d.prototype,"maxSliderValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],d.prototype,"minSliderValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:a,json:{write:!0}})],d.prototype,"startTime",void 0),(0,tslib_es6._)([(0,cast/* cast */.w)("startTime")],d.prototype,"castStartTime",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:l.apiValues,value:null,json:{type:l.jsonValues,read:l.read,write:l.write}})],d.prototype,"style",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:m,value:null,json:{type:m,origins:{"web-scene":{type:u,write:{writer:(e,t)=>{u.includes(e)&&(t.theme=e)}}}},write:!0}})],d.prototype,"theme",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:AuthoringInfoVisualVariable_p.apiValues,json:{type:AuthoringInfoVisualVariable_p.jsonValues,read:AuthoringInfoVisualVariable_p.read,write:AuthoringInfoVisualVariable_p.write}})],d.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:y,json:{type:y,write:!0}})],d.prototype,"units",void 0),d=AuthoringInfoVisualVariable_n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.AuthoringInfoVisualVariable")],d);const h=d;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/colorRamps.js
var colorRamps = __webpack_require__(59740);
;// ../node_modules/@arcgis/core/renderers/support/AuthoringInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var c;const AuthoringInfo_h=new jsonMap/* JSONMap */.J({esriClassifyDefinedInterval:"defined-interval",esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation"}),AuthoringInfo_y=new jsonMap/* JSONMap */.J({pieChart:"pie-chart",classedSize:"class-breaks-size",classedColor:"class-breaks-color",univariateColorSize:"univariate-color-size",relationship:"relationship",predominance:"predominance",dotDensity:"dot-density",flow:"flow"}),AuthoringInfo_m=new jsonMap/* JSONMap */.J({classedSize:"class-breaks-size",classedColor:"class-breaks-color",univariateColorSize:"univariate-color-size",relationship:"relationship",predominance:"predominance",dotDensity:"dot-density"}),f=["inches","feet","yards","miles","nautical-miles","millimeters","centimeters","decimeters","meters","kilometers","decimal-degrees"],v=["high-to-low","above-and-below","above","below","90-10"],w=["flow-line","wave-front"],b=["caret","circle-caret","arrow","circle-arrow","plus-minus","circle-plus-minus","square","circle","triangle","happy-sad","thumb","custom"];let g=c=class extends JSONSupport/* JSONSupport */.oY{constructor(e){super(e),this.colorRamp=null,this.fadeRatio=null,this.isAutoGenerated=!1,this.lengthUnit=null,this.maxSliderValue=null,this.minSliderValue=null,this.visualVariables=null}get classificationMethod(){const e=this._get("classificationMethod"),t=this.type;return t&&"relationship"!==t?"class-breaks-size"===t||"class-breaks-color"===t?e||"manual":null:e}set classificationMethod(e){this._set("classificationMethod",e)}readColorRamp(e){return e?(0,colorRamps/* fromJSON */.r)(e):void 0}get fields(){return this.type&&"predominance"!==this.type?null:this._get("fields")}set fields(e){this._set("fields",e)}get field1(){return this.type&&"relationship"!==this.type?null:this._get("field1")}set field1(e){this._set("field1",e)}get field2(){return this.type&&"relationship"!==this.type?null:this._get("field2")}set field2(e){this._set("field2",e)}get flowTheme(){return"flow"===this.type?this._get("flowTheme"):null}set flowTheme(e){this._set("flowTheme",e)}get focus(){return this.type&&"relationship"!==this.type?null:this._get("focus")}set focus(e){this._set("focus",e)}get numClasses(){return this.type&&"relationship"!==this.type?null:this._get("numClasses")}set numClasses(e){this._set("numClasses",e)}get statistics(){return"univariate-color-size"===this.type&&"above-and-below"===this.univariateTheme?this._get("statistics"):null}set statistics(e){this._set("statistics",e)}get standardDeviationInterval(){const e=this.type;return e&&"relationship"!==e&&"class-breaks-size"!==e&&"class-breaks-color"!==e||this.classificationMethod&&"standard-deviation"!==this.classificationMethod?null:this._get("standardDeviationInterval")}set standardDeviationInterval(e){this._set("standardDeviationInterval",e)}get type(){return this._get("type")}set type(e){let t=e;"classed-size"===e?t="class-breaks-size":"classed-color"===e&&(t="class-breaks-color"),this._set("type",t)}get univariateSymbolStyle(){return"univariate-color-size"===this.type&&"above-and-below"===this.univariateTheme?this._get("univariateSymbolStyle"):null}set univariateSymbolStyle(e){this._set("univariateSymbolStyle",e)}get univariateTheme(){return"univariate-color-size"===this.type?this._get("univariateTheme"):null}set univariateTheme(e){this._set("univariateTheme",e)}clone(){return new c({classificationMethod:this.classificationMethod,colorRamp:(0,lang/* clone */.o8)(this.colorRamp),fadeRatio:(0,lang/* clone */.o8)(this.fadeRatio),fields:this.fields?.slice(0),field1:(0,lang/* clone */.o8)(this.field1),field2:(0,lang/* clone */.o8)(this.field2),isAutoGenerated:this.isAutoGenerated,focus:this.focus,numClasses:this.numClasses,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,lengthUnit:this.lengthUnit,statistics:this.statistics,standardDeviationInterval:this.standardDeviationInterval,type:this.type,visualVariables:this.visualVariables&&this.visualVariables.map((e=>e.clone())),univariateSymbolStyle:this.univariateSymbolStyle,univariateTheme:this.univariateTheme,flowTheme:this.flowTheme})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:AuthoringInfo_h.apiValues,value:null,json:{type:AuthoringInfo_h.jsonValues,read:AuthoringInfo_h.read,write:AuthoringInfo_h.write,origins:{"web-document":{default:"manual",type:AuthoringInfo_h.jsonValues,read:AuthoringInfo_h.read,write:AuthoringInfo_h.write}}}})],g.prototype,"classificationMethod",null),(0,tslib_es6._)([(0,property/* property */.MZ)({types:colorRamps/* types */.g,json:{write:!0}})],g.prototype,"colorRamp",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("colorRamp")],g.prototype,"readColorRamp",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],g.prototype,"fadeRatio",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],value:null,json:{write:!0}})],g.prototype,"fields",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:AuthoringInfoFieldInfo_p,value:null,json:{write:!0}})],g.prototype,"field1",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:AuthoringInfoFieldInfo_p,value:null,json:{write:!0}})],g.prototype,"field2",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:w,value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],g.prototype,"flowTheme",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["HH","HL","LH","LL"],value:null,json:{write:!0}})],g.prototype,"focus",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1}}}})],g.prototype,"isAutoGenerated",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,value:null,json:{type:ensureType/* Integer */.jz,write:!0}})],g.prototype,"numClasses",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:f,json:{type:f,read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],g.prototype,"lengthUnit",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],g.prototype,"maxSliderValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],g.prototype,"minSliderValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Object,value:null,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],g.prototype,"statistics",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[.25,.33,.5,1],value:null,json:{type:[.25,.33,.5,1],write:!0}})],g.prototype,"standardDeviationInterval",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:AuthoringInfo_y.apiValues,value:null,json:{type:AuthoringInfo_y.jsonValues,read:AuthoringInfo_y.read,write:AuthoringInfo_y.write,origins:{"web-scene":{type:AuthoringInfo_m.jsonValues,write:{writer:AuthoringInfo_m.write,overridePolicy:e=>({enabled:"flow"!==e})}}}}})],g.prototype,"type",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[h],json:{write:!0}})],g.prototype,"visualVariables",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:b,value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],g.prototype,"univariateSymbolStyle",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:v,value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],g.prototype,"univariateTheme",null),g=c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.AuthoringInfo")],g);const j=g;


/***/ }),

/***/ 87729:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _commonProperties_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16758);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var i;let l=i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(s){super(s),this.description=null,this.label=null,this.minValue=null,this.maxValue=0,this.symbol=null}clone(){return new i({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,symbol:this.symbol?this.symbol.clone():null})}getMeshHash(){const s=JSON.stringify(this.symbol);return`${this.minValue}.${this.maxValue}.${s}`}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],l.prototype,"description",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],l.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],l.prototype,"minValue",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],l.prototype,"maxValue",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)(_commonProperties_js__WEBPACK_IMPORTED_MODULE_7__/* .requiredRendererSymbolProperty */ .Wp)],l.prototype,"symbol",void 0),l=i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.renderers.support.ClassBreakInfo")],l);const a=l;


/***/ }),

/***/ 57081:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DictionaryLoader: () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96220);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86394);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98849);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(539);
/* harmony import */ var _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89926);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40189);
/* harmony import */ var _core_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(96274);
/* harmony import */ var _core_Version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50579);
/* harmony import */ var _layers_support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79005);
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(28965);
/* harmony import */ var _symbols_CIMSymbol_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(54394);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const h="esri.renderers.support.DictionaryLoader",u={type:"CIMSimpleLineCallout",lineSymbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",width:.5,color:[0,0,0,255]}]}};class y{constructor(e,t,s){this.config=null,this.fieldMap=null,this.url=null,this._ongoingRequests=new Map,this._symbolCache=new _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_5__/* .LRUCache */ .q(100),this._dictionaryVersion=null,this._fieldIndex=null,this._dictionaryPromise=null,this.url=e,this.config=t,this.fieldMap=s}getSymbolFields(){return this._symbolFields}async getSymbolAsync(t,s){let i;this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(s));try{i=await this._dictionaryPromise}catch(d){if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .isAbortError */ .zf)(d))return this._dictionaryPromise=null,null}const o=this._dictionaryVersion&&this._dictionaryVersion.since(4,0),l={};if(this.fieldMap)for(const e of this._symbolFields){const s=this._getFieldName(this.fieldMap[e]);if(s){const i=t.attributes[s];l[e]=o?i:null!=i?""+t.attributes[s]:""}else l[e]=""}let a=null;try{a=i?.(l,s)}catch(g){return null}if(!a||"string"!=typeof a)return null;const c=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_7__/* .numericHash */ .Wm)(a).toString(),m=this._symbolCache.get(c);if(m)return m.catch((()=>{this._symbolCache.pop(c)})),m;const f=a.split(";"),h=[],u=[];for(const r of f)if(r)if(r.includes("po:")){const t=r.substr(3).split("|");if(3===t.length){const s=t[0],i=t[1];let o=t[2];if("DashTemplate"===i)o=o.split(" ").map((e=>Number(e)));else if("Color"===i){const t=new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(o).toRgba();o=[t[0],t[1],t[2],255*t[3]]}else o=Number(o);u.push({primitiveName:s,propertyName:i,value:o})}}else if(r.includes("|")){for(const e of r.split("|"))if(this._itemNames.has(e)){h.push(e);break}}else this._itemNames.has(r)&&h.push(r);const y=null==t.geometry||!t.geometry.hasZ&&"point"===t.geometry.type,p=this._cimPartsToCIMSymbol(h,u,y,s);return this._symbolCache.put(c,p,1),p}async fetchResources(e){if(this._dictionaryPromise)return this._dictionaryPromise;if(!this.url)return void _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.getLogger(h).error("no valid URL!");const o=(0,_request_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this.url+"/resources/styles/dictionary-info.json",{responseType:"json",query:{f:"json"},signal:null!=e?e.signal:null}),[{data:r}]=await Promise.all([o,(0,_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_10__/* .loadArcade */ .lw)()]);if(!r)throw this._dictionaryPromise=null,new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A("esri.renderers.DictionaryRenderer","Bad dictionary data!");const{authoringInfo:n,dictionary_version:f,expression:u,itemsNames:y}=r,p=u;let d=!1;f&&(this._dictionaryVersion=_core_Version_js__WEBPACK_IMPORTED_MODULE_8__/* .Version */ .R.parse(f),d=this._dictionaryVersion.since(4,0)),this._refSymbolUrlTemplate=this.url+"/"+r.cimRefTemplateUrl,this._itemNames=new Set(y),this._symbolFields=n.symbol;const g={};if(this.config){const e=this.config;for(const t in e)g[t]=e[t]}if(n.configuration)for(const t of n.configuration)g.hasOwnProperty(t.name)||(g[t.name]=t.value);const b=[];if(e?.fields&&this.fieldMap)for(const t of this._symbolFields){const s=this.fieldMap[t],i=e.fields.filter((e=>e.name.toLowerCase()===s?.toLowerCase()));i.length>0&&b.push({...i[0],type:d?i[0].type:"esriFieldTypeString"})}b.length>0&&(this._fieldIndex=new _layers_support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A(b));const _=(0,_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_10__/* .createDictionaryExpression */ .xR)(p,null!=e?e.spatialReference:null,b,g).then((e=>{const t={scale:0};return(s,i)=>{if(null==e)return null;const o=e.repurposeFeature({geometry:null,attributes:s});return t.scale=null!=i?i.scale??void 0:void 0,e.evaluate({$feature:o,$view:t},e.services)}})).catch((e=>(_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.getLogger(h).error("Creating dictinoary expression failed:",e),null)));return this._dictionaryPromise=_,_}async _cimPartsToCIMSymbol(e,t,s,i){const o=new Array(e.length);for(let l=0;l<e.length;l++)o[l]=this._getSymbolPart(e[l],i);const r=await Promise.all(o),n=this.fieldMap;if(n)for(const l of r)p(l,n);return new _symbols_CIMSymbol_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A({data:this._combineSymbolParts(r,t,s)})}async _getSymbolPart(e,s){if(this._ongoingRequests.has(e))return this._ongoingRequests.get(e).then((e=>e.data));const i=this._refSymbolUrlTemplate.replaceAll(/\{itemName\}/gi,e),o=(0,_request_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(i,{responseType:"json",query:{f:"json"},...s});this._ongoingRequests.set(e,o);try{return(await o).data}catch(r){throw this._ongoingRequests.delete(e),r}}_combineSymbolParts(e,t,s){if(!e||0===e.length)return null;const i={...e[0]};if(e.length>1){i.symbolLayers=[];for(const t of e){const e=t;i.symbolLayers.unshift(...e.symbolLayers)}}return s&&(i.callout=u),{type:"CIMSymbolReference",symbol:i,primitiveOverrides:t}}_getFieldName(e){if(null!==this._fieldIndex){const t=this._fieldIndex.get(e);return t?t.name:e}return e}}function p(e,t){if(!e)return;const s=e.symbolLayers;if(!s)return;let i=s.length;for(;i--;){const e=s[i];if(e&&!1!==e.enable&&"CIMVectorMarker"===e.type)d(e,t)}}function d(e,t){const s=e.markerGraphics;if(s)for(const i of s){if(!i)continue;const e=i.symbol;if(e)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":p(e,t);break;case"CIMTextSymbol":e.fieldMap=t}}}


/***/ }),

/***/ 50769:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96220);
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
var c;let i=c=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY{constructor(o){super(o),this.color=null,this.ratio=null}clone(){return new c({color:this.color,ratio:this.ratio})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,json:{type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__/* .Integer */ .jz],default:null,write:!0}})],i.prototype,"color",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:Number,json:{write:!0}})],i.prototype,"ratio",void 0),i=c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.renderers.support.HeatmapColorStop")],i);const a=i;


/***/ }),

/***/ 38785:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ p)
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
var s;let p=s=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(){super(...arguments),this.title=null}clone(){return new s({title:this.title})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],p.prototype,"title",void 0),p=s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.renderers.support.LegendOptions")],p);


/***/ }),

/***/ 3324:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _commonProperties_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16758);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var l;let p=l=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(o){super(o),this.description=null,this.label=null,this.symbol=null,this.value=null}clone(){return new l({value:this.value,description:this.description,label:this.label,symbol:this.symbol?this.symbol.clone():null})}getMeshHash(){const o=JSON.stringify(this.symbol?.toJSON());return`${this.value}.${o}`}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],p.prototype,"description",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],p.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)(_commonProperties_js__WEBPACK_IMPORTED_MODULE_7__/* .requiredRendererSymbolProperty */ .Wp)],p.prototype,"symbol",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)(_commonProperties_js__WEBPACK_IMPORTED_MODULE_7__/* .uniqueValueProperty */ .Ug)],p.prototype,"value",void 0),p=l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.renderers.support.UniqueValueInfo")],p);const n=p;


/***/ }),

/***/ 16758:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   As: () => (/* binding */ m),
/* harmony export */   Ug: () => (/* binding */ w),
/* harmony export */   Wp: () => (/* binding */ n),
/* harmony export */   z4: () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30822);
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76724);
/* harmony import */ var _core_accessorSupport_extensions_serializableProperty_reader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61985);
/* harmony import */ var _symbols_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38463);
/* harmony import */ var _symbols_Symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77441);
/* harmony import */ var _symbols_PolygonSymbol3D_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65216);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const y={types:_symbols_js__WEBPACK_IMPORTED_MODULE_0__/* .symbolTypesRenderer */ .xK,json:{write:{writer:_symbols_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .write */ .M9},origins:{"web-scene":{types:_symbols_js__WEBPACK_IMPORTED_MODULE_0__/* .symbolTypesRenderer3D */ .On,write:{writer:_symbols_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .write */ .M9},read:{reader:(0,_core_accessorSupport_extensions_serializableProperty_reader_js__WEBPACK_IMPORTED_MODULE_2__/* .createTypeReader */ .C)({types:_symbols_js__WEBPACK_IMPORTED_MODULE_0__/* .symbolTypesRenderer3D */ .On})}}}}},n=(0,_core_object_js__WEBPACK_IMPORTED_MODULE_1__/* .deepMerge */ .$N)({json:{origins:{"web-scene":{write:{isRequired:!0}}}}},y),m={types:{base:_symbols_Symbol_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,key:"type",typeMap:{"simple-fill":_symbols_js__WEBPACK_IMPORTED_MODULE_0__/* .symbolTypes */ .Es.typeMap["simple-fill"],"picture-fill":_symbols_js__WEBPACK_IMPORTED_MODULE_0__/* .symbolTypes */ .Es.typeMap["picture-fill"],"polygon-3d":_symbols_js__WEBPACK_IMPORTED_MODULE_0__/* .symbolTypes */ .Es.typeMap["polygon-3d"]}},json:{write:{writer:_symbols_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .write */ .M9},origins:{"web-scene":{type:_symbols_PolygonSymbol3D_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,write:{writer:_symbols_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .write */ .M9}}}}},w={cast:e=>null==e||"string"==typeof e||"number"==typeof e?e:`${e}`,json:{type:String,write:{writer:(e,r)=>{r.value=e?.toString()}}}};


/***/ }),

/***/ 27927:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Lh: () => (/* binding */ l),
/* harmony export */   O3: () => (/* binding */ u),
/* harmony export */   PU: () => (/* binding */ c),
/* harmony export */   YW: () => (/* binding */ y),
/* harmony export */   ex: () => (/* binding */ a),
/* harmony export */   hv: () => (/* binding */ m),
/* harmony export */   oQ: () => (/* binding */ s),
/* harmony export */   zp: () => (/* binding */ i)
/* harmony export */ });
/* unused harmony exports createHeatmapImageData, createValueFunctionCursor */
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92504);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89882);
/* harmony import */ var _chunks_vec4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25102);
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52712);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const a=2.4;function i(t){return (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .px2pt */ .PN)(t*a)}function c(t){return (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .pt2px */ .Lz)(t)/a}function f(r,n,e,a){let{color:i,ratio:c}=n,{color:f,ratio:u}=e;if(u===c){const t=1e-6;1===u?c-=t:u+=t}const s=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .clamp */ .qE)((a-c)/(u-c),0,1);(0,_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_1__.l)(r,i.toArray(),f.toArray(),s)}function u(t){const r=512,n=new Uint8ClampedArray(4*r);if(t=t.filter((({ratio:t})=>t>=0&&t<=1)).sort(((t,r)=>t.ratio-r.ratio)).map((({color:t,ratio:r})=>({color:t,ratio:Math.max(r,.001)}))),t.length<1)return n;let o=t[0],a=t[0],i=1;const c=(0,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__.c)();for(let e=0;e<r;e++){const u=(e+.5)/r;for(;u>a.ratio&&i<t.length;)o=a,a=t[i++];f(c,o,a,u),n.set(c,4*e)}return n}function s(t,r,o,e){const{radius:a,fieldOffset:i,field:c}=r,f=Math.round((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .pt2px */ .Lz)(a)),u=new Float64Array(o*e);let s,l=Number.NEGATIVE_INFINITY;const h=d(c,i),y=new Set;for(const n of t){const t=n.getCursor();for(;t.next();){const r=t.getObjectId();if(y.has(r))continue;y.add(r);const n=t.readLegacyPointGeometry(),a=128;if(n.x<-a||n.x>=o+a||n.y<-a||n.y>e+a)continue;const i=+h(t),c=Math.max(0,Math.round(n.x)-f),d=Math.max(0,Math.round(n.y)-f),g=Math.min(e,Math.round(n.y)+f),A=Math.min(o,Math.round(n.x)+f);for(let t=d;t<g;t++)for(let r=c;r<A;r++){const e=t*o+r,a=m(n.x-r,n.y-t,f);s=u[e]+=a*i,s>l&&(l=s)}}}return{matrix:u.buffer,max:l}}function l(t,r,n,o,e,a){t.canvas.width=t.canvas.height=r,t.clearRect(0,0,r,r);const i=t.getImageData(0,0,r,r);n&&o&&i.data.set(new Uint8ClampedArray(h(r,n,o,e,a))),t.putImageData(i,0,0)}function h(r,n,o,e,a){const i=new Uint32Array(r*r),c="buffer"in n?n:new Float64Array(n),f="buffer"in o?new Uint32Array(o.buffer):new Uint32Array(new Uint8Array(o).buffer),u=f.length/(a-e);for(let s=0;s<c.length;s++){const r=c[s],n=Math.floor((r-e)*u);i[s]=f[(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .clamp */ .qE)(n,0,f.length-1)]}return i.buffer}function m(t,r,n){const o=Math.sqrt(t**2+r**2)/n;return o>1?0:3/(Math.PI*n**2)*(1-o**2)**2}function y(t,r){return"function"==typeof t?t:t?"string"==typeof r?r=>-1*+r[t]:n=>+n[t]+r:()=>1}function d(t,r){return null!=t?"string"==typeof r?r=>-1*+r.readAttribute(t):n=>+n.readAttribute(t)+r:t=>1}


/***/ }),

/***/ 48887:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ o),
/* harmony export */   r: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _core_Warning_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68659);
/* harmony import */ var _core_accessorSupport_extensions_serializableProperty_reader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61985);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49169);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function t(e,r){return o(e,null,r)}const s=(0,_core_accessorSupport_extensions_serializableProperty_reader_js__WEBPACK_IMPORTED_MODULE_1__/* .createTypeReader */ .C)({types:_types_js__WEBPACK_IMPORTED_MODULE_2__/* .rendererTypes */ .H});function o(r,n,t){return r?r&&(r.styleName||r.styleUrl)&&"uniqueValue"!==r.type?(t?.messages&&t.messages.push(new _core_Warning_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+r.type+"'",{definition:r,context:t})),null):s(r,n,t):null}


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

/***/ 49169:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ m),
/* harmony export */   X: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(539);
/* harmony import */ var _ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17671);
/* harmony import */ var _DictionaryRenderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84685);
/* harmony import */ var _DotDensityRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20299);
/* harmony import */ var _HeatmapRenderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25498);
/* harmony import */ var _PieChartRenderer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79300);
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76589);
/* harmony import */ var _SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47347);
/* harmony import */ var _UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2692);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const m={key:"type",base:_Renderer_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,typeMap:{heatmap:_HeatmapRenderer_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,simple:_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,"unique-value":_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,"class-breaks":_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,"dot-density":_DotDensityRenderer_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,dictionary:_DictionaryRenderer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,"pie-chart":_PieChartRenderer_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A},errorContext:"renderer"},u={key:"type",base:_Renderer_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,typeMap:{simple:_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,"unique-value":_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,"class-breaks":_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,heatmap:_HeatmapRenderer_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A},errorContext:"renderer",validate:p};function p(e){switch(e.type){case"simple":return c(e);case"unique-value":return f(e);case"class-breaks":return d(e);case"heatmap":return e}}function c(r){if(r.symbol)return r;_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getLogger("esri.renderers.support.types").error("Removed invalid 'simple' renderer without a symbol from web scene.")}function f(r){const s=r.uniqueValueInfos,t=s?.filter((({symbol:r,label:s},t)=>(r||_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getLogger("esri.renderers.support.types").error(`Removed invalid unique value info ([${t}] ${s}) without a symbol from web scene.`),!!r)));return t?.length!==s?.length&&(r.uniqueValueInfos=t),r}function d(r){const s=r.classBreakInfos,t=s?.filter((({symbol:r,label:s},t)=>(r||_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getLogger("esri.renderers.support.types").error(`Removed invalid class break info ([${t}] ${s}) without a symbol from web scene.`),!!r)));return t?.length!==s?.length&&(r.classBreakInfos=t),r}


/***/ }),

/***/ 68090:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98849);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77542);
/* harmony import */ var _VisualVariable_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57860);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var p;let a=p=class extends _VisualVariable_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A{constructor(e){super(e),this.axis=null,this.type="rotation",this.rotationType="geographic",this.valueExpressionTitle=null}get cache(){return{hasExpression:!!this.valueExpression,compiledFunc:null}}writeValueExpressionTitleWebScene(e,s,o,r){if(r?.messages){const e=`visualVariables[${this.index}]`;r.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("property:unsupported",this.type+"VisualVariable.valueExpressionTitle is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:e+".valueExpressionTitle",context:r}))}}clone(){return new p({axis:this.axis,rotationType:this.rotationType,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,legendOptions:this.legendOptions?.clone()})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({readOnly:!0})],a.prototype,"cache",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:["heading","tilt","roll"],json:{origins:{"web-scene":{default:"heading",write:!0}}}})],a.prototype,"axis",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:["rotation"],json:{type:["rotationInfo"]}})],a.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:["geographic","arithmetic"],json:{write:!0,origins:{"web-document":{write:!0,default:"geographic"}}}})],a.prototype,"rotationType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],a.prototype,"valueExpressionTitle",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__/* .writer */ .K)("web-scene","valueExpressionTitle")],a.prototype,"writeValueExpressionTitleWebScene",null),a=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.renderers.visualVariables.RotationVariable")],a);const n=a;


/***/ }),

/***/ 14977:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ b)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/screenUtils.js
var screenUtils = __webpack_require__(89882);
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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/visualVariables/VisualVariable.js
var VisualVariable = __webpack_require__(57860);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/visualVariables/support/SizeStop.js
var SizeStop = __webpack_require__(68745);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/visualVariables/support/VisualVariableLegendOptions.js
var VisualVariableLegendOptions = __webpack_require__(45327);
;// ../node_modules/@arcgis/core/renderers/visualVariables/support/SizeVariableLegendOptions.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var t;let i=t=class extends VisualVariableLegendOptions/* default */.A{constructor(){super(...arguments),this.customValues=null}clone(){return new t({title:this.title,showLegend:this.showLegend,customValues:this.customValues?.slice(0)})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number],json:{write:!0}})],i.prototype,"customValues",void 0),i=t=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.visualVariables.support.SizeVariableLegendOptions")],i);const a=i;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/visualVariables/support/sizeVariableUtils.js
var sizeVariableUtils = __webpack_require__(99412);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/visualVariables/support/visualVariableUtils.js
var visualVariableUtils = __webpack_require__(28479);
;// ../node_modules/@arcgis/core/renderers/visualVariables/SizeVariable.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var z;const v=new jsonMap/* JSONMap */.J({width:"width",depth:"depth",height:"height",widthAndDepth:"width-and-depth",all:"all"}),w=new jsonMap/* JSONMap */.J({unknown:"unknown",inch:"inches",foot:"feet",yard:"yards",mile:"miles","nautical-mile":"nautical-miles",millimeter:"millimeters",centimeter:"centimeters",decimeter:"decimeters",meter:"meters",kilometer:"kilometers","decimal-degree":"decimal-degrees"});function g(e){if(null!=e)return"string"==typeof e||"number"==typeof e?(0,screenUtils/* toPt */.cr)(e):"size"===e.type?(0,sizeVariableUtils/* isSizeVariable */.of)(e)?e:(delete(e={...e}).type,new V(e)):void 0}function f(e,t,i){if("object"!=typeof e)return e;const s=new V;return s.read(e,i),s}let V=z=class extends VisualVariable/* default */.A{constructor(e){super(e),this.axis=null,this.legendOptions=null,this.normalizationField=null,this.scaleBy=null,this.target=null,this.type="size",this.useSymbolValue=null,this.valueExpression=null,this.valueRepresentation=null,this.valueUnit=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null,isScaleDriven:null!=this.valueExpression&&visualVariableUtils.viewScaleRE.test(this.valueExpression)}}set expression(e){Logger/* default */.A.getLogger(this).warn("'expression' is deprecated since version 4.2. Use 'valueExpression' instead. The only supported expression is 'view.scale'."),"view.scale"===e?(this.valueExpression="$view.scale",this._set("expression",e)):this._set("expression",null)}set index(e){(0,sizeVariableUtils/* isSizeVariable */.of)(this.maxSize)&&(this.maxSize.index=`visualVariables[${e}].maxSize`),(0,sizeVariableUtils/* isSizeVariable */.of)(this.minSize)&&(this.minSize.index=`visualVariables[${e}].minSize`),this._set("index",e)}get inputValueType(){return (0,sizeVariableUtils/* getInputValueType */.eh)(this)}set maxDataValue(e){e&&this.stops&&(Logger/* default */.A.getLogger(this).warn("cannot set maxDataValue when stops is not null."),e=null),this._set("maxDataValue",e)}set maxSize(e){e&&this.stops&&(Logger/* default */.A.getLogger(this).warn("cannot set maxSize when stops is not null."),e=null),this._set("maxSize",e)}castMaxSize(e){return g(e)}readMaxSize(e,t,i){return f(e,t,i)}set minDataValue(e){e&&this.stops&&(Logger/* default */.A.getLogger(this).warn("cannot set minDataValue when stops is not null."),e=null),this._set("minDataValue",e)}set minSize(e){e&&this.stops&&(Logger/* default */.A.getLogger(this).warn("cannot set minSize when stops is not null."),e=null),this._set("minSize",e)}castMinSize(e){return g(e)}readMinSize(e,t,i){return f(e,t,i)}get arcadeRequired(){return!!this.valueExpression||(null!=this.minSize&&"object"==typeof this.minSize&&this.minSize.arcadeRequired||null!=this.maxSize&&"object"==typeof this.maxSize&&this.maxSize.arcadeRequired)}set stops(e){null==this.minDataValue&&null==this.maxDataValue&&null==this.minSize&&null==this.maxSize?e&&Array.isArray(e)&&(e=e.filter((e=>!!e))).sort(((e,t)=>e.value-t.value)):e&&(Logger/* default */.A.getLogger(this).warn("cannot set stops when one of minDataValue, maxDataValue, minSize or maxSize is not null."),e=null),this._set("stops",e)}get transformationType(){return (0,sizeVariableUtils/* getTransformationType */.KZ)(this,this.inputValueType)}readValueExpression(e,t){return e||t.expression&&"$view.scale"}writeValueExpressionWebScene(e,i,s,r){if("$view.scale"===e){if(r?.messages){const e=this.index,i="string"==typeof e?e:`visualVariables[${e}]`;r.messages.push(new Error/* default */.A("property:unsupported",this.type+"VisualVariable.valueExpression = '$view.scale' is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:i+".valueExpression",context:r}))}}else i[s]=e}readValueUnit(e){return e?w.read(e):null}clone(){return new z({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:(0,sizeVariableUtils/* isSizeVariable */.of)(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:(0,sizeVariableUtils/* isSizeVariable */.of)(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops?.map((e=>e.clone())),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions?.clone()})}flipSizes(){if(this.transformationType===sizeVariableUtils/* TransformationType */._w.ClampedLinear){const{minSize:e,maxSize:t}=this;return this.minSize=t,this.maxSize=e,this}if(this.transformationType===sizeVariableUtils/* TransformationType */._w.Stops){const e=this.stops;if(!e)return this;const t=e.map((e=>e.size)).reverse(),i=e.length;for(let s=0;s<i;s++)e[s].size=t[s];return this}return this}getAttributeHash(){return`${super.getAttributeHash()}-${this.target}-${this.normalizationField}`}_interpolateData(){return this.stops?.map((e=>e.value||0))}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],V.prototype,"cache",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:v.apiValues,json:{type:v.jsonValues,origins:{"web-map":{read:!1}},read:v.read,write:v.write}})],V.prototype,"axis",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,value:null,json:{read:!1}})],V.prototype,"expression",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],V.prototype,"index",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0})],V.prototype,"inputValueType",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:a,json:{write:!0}})],V.prototype,"legendOptions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,value:null,json:{write:!0}})],V.prototype,"maxDataValue",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,value:null,json:{write:!0}})],V.prototype,"maxSize",null),(0,tslib_es6._)([(0,cast/* cast */.w)("maxSize")],V.prototype,"castMaxSize",null),(0,tslib_es6._)([(0,reader/* reader */.w)("maxSize")],V.prototype,"readMaxSize",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,value:null,json:{write:!0}})],V.prototype,"minDataValue",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,value:null,json:{write:!0}})],V.prototype,"minSize",null),(0,tslib_es6._)([(0,cast/* cast */.w)("minSize")],V.prototype,"castMinSize",null),(0,tslib_es6._)([(0,reader/* reader */.w)("minSize")],V.prototype,"readMinSize",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],V.prototype,"normalizationField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],V.prototype,"arcadeRequired",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],V.prototype,"scaleBy",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[SizeStop/* default */.A],value:null,json:{write:!0}})],V.prototype,"stops",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["outline"],json:{write:!0}})],V.prototype,"target",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0})],V.prototype,"transformationType",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["size"],json:{type:["sizeInfo"]}})],V.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0,origins:{"web-map":{read:!1}}}})],V.prototype,"useSymbolValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],V.prototype,"valueExpression",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("valueExpression",["valueExpression","expression"])],V.prototype,"readValueExpression",null),(0,tslib_es6._)([(0,writer/* writer */.K)("web-scene","valueExpression")],V.prototype,"writeValueExpressionWebScene",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["radius","diameter","area","width","distance"],json:{write:!0}})],V.prototype,"valueRepresentation",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:w.apiValues,json:{write:w.write,origins:{"web-map":{read:!1},"web-scene":{write:!0},"portal-item":{write:!0}}}})],V.prototype,"valueUnit",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("valueUnit")],V.prototype,"readValueUnit",null),V=z=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.visualVariables.SizeVariable")],V);const b=V;


/***/ }),

/***/ 57860:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59851);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(539);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4130);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73446);
/* harmony import */ var _support_VisualVariableLegendOptions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45327);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const a=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONMap */ .J({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"});let u=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY{constructor(e){super(e),this.index=null,this.type=null,this.field=null,this.valueExpression=null,this.valueExpressionTitle=null,this.legendOptions=null}castField(e){return null==e?e:"function"==typeof e?(_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.getLogger(this).error(".field: field must be a string value"),null):(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__/* .ensureString */ .GX)(e)}get arcadeRequired(){return!!this.valueExpression}clone(){}getAttributeHash(){return`${this.type}-${this.field}-${this.valueExpression}`}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)()],u.prototype,"index",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:a.apiValues,readOnly:!0,json:{read:a.read,write:a.write}})],u.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:!0}})],u.prototype,"field",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__/* .cast */ .w)("field")],u.prototype,"castField",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:!0}})],u.prototype,"valueExpression",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:!0}})],u.prototype,"valueExpressionTitle",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({readOnly:!0})],u.prototype,"arcadeRequired",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:_support_VisualVariableLegendOptions_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"legendOptions",void 0),u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.renderers.visualVariables.VisualVariable")],u);const c=u;


/***/ }),

/***/ 5001:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96220);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77542);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var i;let c=i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY{constructor(r){super(r),this.color=null,this.label=null,this.value=null}writeValue(r,o,e){o[e]=r??0}clone(){return new i({color:this.color&&this.color.clone(),label:this.label,value:this.value})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,json:{type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__/* .Integer */ .jz],write:!0}})],c.prototype,"color",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{write:!0}})],c.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:Number,json:{write:{writerEnsuresNonNull:!0}}})],c.prototype,"value",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__/* .writer */ .K)("value")],c.prototype,"writeValue",null),c=i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.renderers.visualVariables.support.ColorStop")],c);const a=c;


/***/ }),

/***/ 68745:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89882);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var p;let i=p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(r){super(r),this.label=null,this.size=null,this.value=null}clone(){return new p({label:this.label,size:this.size,value:this.value})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],i.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number,cast:_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .toPt */ .cr,json:{write:!0}})],i.prototype,"size",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number,json:{write:!0}})],i.prototype,"value",void 0),i=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.renderers.visualVariables.support.SizeStop")],i);const l=i;


/***/ }),

/***/ 45327:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/* harmony import */ var _support_LegendOptions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38785);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var t;let p=t=class extends _support_LegendOptions_js__WEBPACK_IMPORTED_MODULE_6__/* .LegendOptions */ .q{constructor(){super(...arguments),this.showLegend=null}clone(){return new t({title:this.title,showLegend:this.showLegend})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:Boolean,json:{write:!0}})],p.prototype,"showLegend",void 0),p=t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.renderers.visualVariables.support.VisualVariableLegendOptions")],p);const i=p;


/***/ }),

/***/ 99412:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KZ: () => (/* binding */ a),
/* harmony export */   Yf: () => (/* binding */ n),
/* harmony export */   _w: () => (/* binding */ i),
/* harmony export */   eh: () => (/* binding */ t),
/* harmony export */   gf: () => (/* binding */ l),
/* harmony export */   of: () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var n,i;function e(n){return n&&"esri.renderers.visualVariables.SizeVariable"===n.declaredClass}function l(n){return null!=n&&!isNaN(n)&&isFinite(n)}function t(i){return i.valueExpression?n.Expression:i.field&&"string"==typeof i.field?n.Field:n.Unknown}function a(e,l){const a=l||t(e),o=e.valueUnit||"unknown";return a===n.Unknown?i.Constant:e.stops?i.Stops:null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?i.ClampedLinear:"unknown"===o?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?i.Proportional:i.Additive:i.Identity:i.RealWorldSize}!function(n){n.Unknown="unknown",n.Expression="expression",n.Field="field"}(n||(n={})),function(n){n.Unknown="unknown",n.Stops="stops",n.ClampedLinear="clamped-linear",n.Proportional="proportional",n.Additive="additive",n.Constant="constant",n.Identity="identity",n.RealWorldSize="real-world-size"}(i||(i={}));


/***/ }),

/***/ 28479:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllSizes: () => (/* binding */ N),
/* harmony export */   getColor: () => (/* binding */ p),
/* harmony export */   getOpacity: () => (/* binding */ v),
/* harmony export */   getRotationAngle: () => (/* binding */ b),
/* harmony export */   getSize: () => (/* binding */ V),
/* harmony export */   getSizeForValue: () => (/* binding */ C),
/* harmony export */   getSizeFromNumberOrVariable: () => (/* binding */ x),
/* harmony export */   getSizeRangeAtScale: () => (/* binding */ D),
/* harmony export */   getVisualVariableValues: () => (/* binding */ M),
/* harmony export */   viewScaleRE: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96220);
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25707);
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73345);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(539);
/* harmony import */ var _support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10301);
/* harmony import */ var _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99412);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const c=_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),u=new _Graphic_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,f=Math.PI,d=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;function p(a,i,n){const r="visualVariables"in a&&a.visualVariables?a.visualVariables.find((e=>"color"===e.type)):a;if(!r)return;if("esri.renderers.visualVariables.ColorVariable"!==r.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable");const t="number"==typeof i,s=t?null:i,l=s?.attributes;let o=t?i:null;const u=r.field,{ipData:f,hasExpression:d}=r.cache;let p=r.cache.compiledFunc;if(!u&&!d){const e=r.stops;return e&&e[0]&&e[0].color}if("number"!=typeof o)if(d){if(null==n?.arcade)return void c.error("Use of arcade expressions requires an arcade context");const e={viewingMode:n.viewingMode,scale:n.scale,spatialReference:n.spatialReference},a=n.arcade.arcadeUtils,i=a.getViewInfo(e),t=a.createExecContext(s,i,n.timeZone);if(!p){const e=a.createSyntaxTree(r.valueExpression);p=a.createFunction(e),r.cache.compiledFunc=p}o=a.executeFunction(p,t)}else l&&(o=l[u]);const v=r.normalizationField,b=null!=l&&null!=v?parseFloat(l[v]):void 0;if(null!=o&&(!v||t||!isNaN(b)&&0!==b)){isNaN(b)||t||(o/=b);const a=k(o,f);if(a){const i=a[0],t=a[1],s=i===t?r.stops[i].color:_Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.blendColors(r.stops[i].color,r.stops[t].color,a[2],null!=n?n.color:void 0);return new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(s)}}}function v(e,a,i){const n="visualVariables"in e&&e.visualVariables?e.visualVariables.find((e=>"opacity"===e.type)):e;if(!n)return;if("esri.renderers.visualVariables.OpacityVariable"!==n.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable");const r="number"==typeof a,t=r?null:a,s=t?.attributes;let l=r?a:null;const o=n.field,{ipData:u,hasExpression:f}=n.cache;let d=n.cache.compiledFunc;if(!o&&!f){const e=n.stops;return e&&e[0]&&e[0].opacity}if("number"!=typeof l)if(f){if(null==i?.arcade)return void c.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},a=i.arcade.arcadeUtils,r=a.getViewInfo(e),s=a.createExecContext(t,r,i.timeZone);if(!d){const e=a.createSyntaxTree(n.valueExpression);d=a.createFunction(e),n.cache.compiledFunc=d}l=a.executeFunction(d,s)}else s&&(l=s[o]);const p=n.normalizationField,v=null!=s&&null!=p?parseFloat(s[p]):void 0;if(null!=l&&(!p||r||!isNaN(v)&&0!==v)){isNaN(v)||r||(l/=v);const e=k(l,u);if(e){const a=e[0],i=e[1];if(a===i)return n.stops[a].opacity;{const r=n.stops[a].opacity;return r+(n.stops[i].opacity-r)*e[2]}}}}function b(e,a,i){const n="visualVariables"in e&&e.visualVariables?e.visualVariables.find((e=>"rotation"===e.type)):e;if(!n)return;if("esri.renderers.visualVariables.RotationVariable"!==n.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable");const r=n.axis||"heading",t="heading"===r&&"arithmetic"===n.rotationType?90:0,s="heading"===r&&"arithmetic"===n.rotationType?-1:1,l="number"==typeof a?null:a,o=l?.attributes,u=n.field,{hasExpression:f}=n.cache;let d=n.cache.compiledFunc,p=0;if(!u&&!f)return p;if(f){if(null==i?.arcade)return void c.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},a=i.arcade.arcadeUtils,r=a.getViewInfo(e),t=a.createExecContext(l,r,i.timeZone);if(!d){const e=a.createSyntaxTree(n.valueExpression);d=a.createFunction(e),n.cache.compiledFunc=d}p=a.executeFunction(d,t)}else o&&(p=o[u]||0);return p="number"!=typeof p||isNaN(p)?null:t+s*p,p}function m(e,a,i){const n="number"==typeof a,r=n?null:a,t=r?.attributes;let l=n?a:null;const{isScaleDriven:u}=e.cache;let f=e.cache.compiledFunc;if(u){const a=null!=i?i.scale:void 0,n=null!=i?i.view:void 0;l=null==a||"3d"===n?h(e):a}else if(!n)switch(e.inputValueType){case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .InputValueType */ .Yf.Expression:{if(null==i?.arcade)return void c.error("Use of arcade expressions requires an arcade context");const a={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},n=i.arcade.arcadeUtils,t=n.getViewInfo(a),s=n.createExecContext(r,t,i.timeZone);if(!f){const a=n.createSyntaxTree(e.valueExpression);f=n.createFunction(a),e.cache.compiledFunc=f}l=n.executeFunction(f,s);break}case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .InputValueType */ .Yf.Field:t&&(l=t[e.field]);break;case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .InputValueType */ .Yf.Unknown:l=null}if(!(0,_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isValidNumber */ .gf)(l))return null;if(n||!e.normalizationField)return l;const d=t?parseFloat(t[e.normalizationField]):null;return (0,_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isValidNumber */ .gf)(d)&&0!==d?l/d:null}function h(e){let a=null,i=null;const n=e.stops;return n?(a=n[0].value,i=n[n.length-1].value):(a=e.minDataValue||0,i=e.maxDataValue||0),(a+i)/2}function V(e,a,i){const n="visualVariables"in e&&e.visualVariables?e.visualVariables.find((e=>"size"===e.type)):e;if(!n)return;if("esri.renderers.visualVariables.SizeVariable"!==n.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable");const r=C(m(n,a,i),n,a,i,n.cache.ipData);return null==r||isNaN(r)?0:r}function x(e,a,i){return null==e?null:(0,_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isSizeVariable */ .of)(e)?V(e,a,i):(0,_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isValidNumber */ .gf)(e)?e:null}function y(e,a,i){return (0,_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isValidNumber */ .gf)(i)&&e>i?i:(0,_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isValidNumber */ .gf)(a)&&e<a?a:e}function w(e,a,i,n){return e+((x(a.minSize,i,n)||a.minDataValue)??0)}function g(e,a,i){const n=e.stops;let r=n?.length&&n[0].size;return null==r&&(r=e.minSize),x(r,a,i)}function z(e,a,i,n){const r=(e-a.minDataValue)/(a.maxDataValue-a.minDataValue),t=x(a.minSize,i,n),s=x(a.maxSize,i,n),l=null!=n?n.shape:void 0;if(e<=a.minDataValue)return t;if(e>=a.maxDataValue)return s;if(null==t||null==s)return null;if("area"===a.scaleBy&&l){const e="circle"===l,a=e?f*(t/2)**2:t*t,i=a+r*((e?f*(s/2)**2:s*s)-a);return e?2*Math.sqrt(i/f):Math.sqrt(i)}return t+r*(s-t)}function F(e,a,i,n){const r=null!=n?n.shape:void 0,t=e/a.minDataValue,s=x(a.minSize,i,n),l=x(a.maxSize,i,n);let o=null;return o="circle"===r?2*Math.sqrt(t*(s/2)**2):"square"===r||"diamond"===r||"image"===r?Math.sqrt(t*s**2):t*s,y(o,s,l)}function S(e,a,i,n,r){const[t,s,l]=k(e,r);if(t===s)return x(a.stops?.[t].size,i,n);{const e=x(a.stops?.[t].size,i,n);return e+(x(a.stops?.[s].size,i,n)-e)*l}}function E(e,a,i,n){const t=(n?.resolution??1)*_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .meterIn */ .j[a.valueUnit],s=x(a.minSize,i,n),l=x(a.maxSize,i,n),{valueRepresentation:o}=a;let c=null;return c="area"===o?2*Math.sqrt(e/f)/t:"radius"===o||"distance"===o?2*e/t:e/t,y(c,s,l)}function U(e){return e}function C(e,a,i,n,r){switch(a.transformationType){case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .TransformationType */ ._w.Additive:return w(e,a,i,n);case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .TransformationType */ ._w.Constant:return g(a,i,n);case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .TransformationType */ ._w.ClampedLinear:return z(e,a,i,n);case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .TransformationType */ ._w.Proportional:return F(e,a,i,n);case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .TransformationType */ ._w.Stops:return S(e,a,i,n,r);case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .TransformationType */ ._w.RealWorldSize:return E(e,a,i,n);case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .TransformationType */ ._w.Identity:return U(e);case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .TransformationType */ ._w.Unknown:return null}}function D(e,a,i){const{isScaleDriven:n}=e.cache;if(!(n&&"3d"===i||a))return null;const r={scale:a,view:i};let t=x(e.minSize,u,r),s=x(e.maxSize,u,r);if(null!=t||null!=s){if(t>s){const e=s;s=t,t=e}return{minSize:t,maxSize:s}}}function M(e,a,i){if(!e.visualVariables)return;const n=[],r=[],t=[],s=[],l=[];for(const o of e.visualVariables)switch(o.type){case"color":r.push(o);break;case"opacity":t.push(o);break;case"rotation":l.push(o);break;case"size":s.push(o)}return r.forEach((e=>{const r=p(e,a,i);n.push({variable:e,value:r})})),t.forEach((e=>{const r=v(e,a,i);n.push({variable:e,value:r})})),l.forEach((e=>{const r=b(e,a,i);n.push({variable:e,value:r})})),s.forEach((e=>{const r=V(e,a,i);n.push({variable:e,value:r})})),n.filter((e=>null!=e.value))}function k(e,a){if(!a)return;let i=0,n=a.length-1;return a.some(((a,r)=>e<a?(n=r,!0):(i=r,!1))),[i,n,(e-a[i])/(a[n]-a[i])]}function N(e,a,n){const r=["proportional","proportional","proportional"];for(const t of e){const e=t.useSymbolValue?"symbol-value":V(t,a,n);switch(t.axis){case"width":r[0]=e;break;case"depth":r[1]=e;break;case"height":r[2]=e;break;case"width-and-depth":r[0]=e,r[1]=e;break;case"all":case void 0:case null:r[0]=e,r[1]=e,r[2]=e;break;default:(0,_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .neverReached */ .Xb)(t.axis)}}return r}


/***/ }),

/***/ 80196:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96220);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19251);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _ColorRamp_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87673);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var m;let c=m=class extends _ColorRamp_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A{constructor(o){super(o),this.algorithm=null,this.fromColor=null,this.toColor=null,this.type="algorithmic"}clone(){return new m({fromColor:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.fromColor),toColor:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.toColor),algorithm:this.algorithm})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__/* .enumeration */ .e)({esriCIELabAlgorithm:"cie-lab",esriHSVAlgorithm:"hsv",esriLabLChAlgorithm:"lab-lch"})],c.prototype,"algorithm",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,json:{type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__/* .Integer */ .jz],write:!0}})],c.prototype,"fromColor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,json:{type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__/* .Integer */ .jz],write:!0}})],c.prototype,"toColor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:["algorithmic"]})],c.prototype,"type",void 0),c=m=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.rest.support.AlgorithmicColorRamp")],c);const a=c;


/***/ }),

/***/ 87673:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ p)
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
let e=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(r){super(r),this.type=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({readOnly:!0,json:{read:!1,write:!0}})],e.prototype,"type",void 0),e=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.rest.support.ColorRamp")],e);const p=e;


/***/ }),

/***/ 57822:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17639);
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25707);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59851);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21877);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19251);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73446);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75094);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(77542);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(78983);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1171);
/* harmony import */ var _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(24738);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var f;const h=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_3__/* .JSONMap */ .J({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let g=f=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_4__/* .JSONSupport */ .oY{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const o=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A.fromJSON(t.spatialReference),s=[];for(let n=0;n<e.length;n++){const t=e[n],i=_Graphic_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.fromJSON(t),l=t.geometry?.spatialReference;null==i.geometry||l||(i.geometry.spatialReference=o);const a=t.aggregateGeometries,p=i.aggregateGeometries;if(a&&null!=p)for(const e in p){const t=p[e],r=a[e],s=r?.spatialReference;null==t||s||(t.spatialReference=o)}s.push(i)}return s}writeGeometryType(e,t,r,o){if(e)return void h.write(e,t,r,o);const{features:s}=this;if(s)for(const n of s)if(null!=n?.geometry)return void h.write(n.geometry.type,t,r,o)}readQueryGeometry(e,t){if(!e)return null;const r=!!e.spatialReference,o=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .fromJSON */ .rS)(e);return o&&!r&&t.spatialReference&&(o.spatialReference=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A.fromJSON(t.spatialReference)),o}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:r}=this;if(r)for(const o of r)if(o&&null!=o.geometry&&o.geometry.spatialReference)return void(t.spatialReference=o.geometry.spatialReference.toJSON())}clone(){return new f(this.cloneProperties())}cloneProperties(){return (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_5__/* .clone */ .o8)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(e){const t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){const o=t.features[r];if(o.geometry){const t=e?.[r];o.geometry=t?.toJSON()||o.geometry}}return t}quantize(e){const{scale:[t,r],translate:[o,s]}=e,n=e=>Math.round((e-o)/t),i=e=>Math.round((s-e)/r),l=this.features,a=this._getQuantizationFunction(this.geometryType,n,i);for(let p=0,m=l.length;p<m;p++)a?.(l[p].geometry)||(l.splice(p,1),p--,m--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:r}=this;if(!r)return this;const{translate:[o,s],scale:[n,i]}=r,l=e=>e*n+o,a=e=>s-e*i;let p=null,m=null;if(this.hasZ&&null!=r?.scale?.[2]){const{translate:[,,e],scale:[,,t]}=r;p=r=>r*t+e}if(this.hasM&&null!=r?.scale?.[3]){const{translate:[,,,e],scale:[,,,t]}=r;m=r=>null==r?r:r*t+e}const c=this._getHydrationFunction(e,l,a,p,m);for(const{geometry:u}of t)null!=u&&c&&c(u);return this.transform=null,this}_quantizePoints(e,t,r){let o,s;const n=[];for(let i=0,l=e.length;i<l;i++){const l=e[i];if(i>0){const e=t(l[0]),i=r(l[1]);e===o&&i===s||(n.push([e-o,i-s]),o=e,s=i)}else o=t(l[0]),s=r(l[1]),n.push([o,s])}return n.length>0?n:null}_getQuantizationFunction(e,t,r){return"point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{const o=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .isPolygon */ .Bi)(e)?e.rings:e.paths,s=[];for(let n=0,i=o.length;n<i;n++){const e=o[n],i=this._quantizePoints(e,t,r);i&&s.push(i)}return s.length>0?((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .isPolygon */ .Bi)(e)?e.rings=s:e.paths=s,e):null}:"multipoint"===e?e=>{const o=this._quantizePoints(e.points,t,r);return o&&o.length>0?(e.points=o,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r,o,s){return"point"===e?e=>{e.x=t(e.x),e.y=r(e.y),o&&(e.z=o(e.z))}:"polyline"===e||"polygon"===e?e=>{const n=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .isPolygon */ .Bi)(e)?e.rings:e.paths;let i,l;for(let o=0,s=n.length;o<s;o++){const e=n[o];for(let o=0,s=e.length;o<s;o++){const s=e[o];o>0?(i+=s[0],l+=s[1]):(i=s[0],l=s[1]),s[0]=t(i),s[1]=r(l)}}if(o&&s)for(let t=0,r=n.length;t<r;t++){const e=n[t];for(let t=0,r=e.length;t<r;t++){const r=e[t];r[2]=o(r[2]),r[3]=s(r[3])}}else if(o)for(let t=0,r=n.length;t<r;t++){const e=n[t];for(let t=0,r=e.length;t<r;t++){const r=e[t];r[2]=o(r[2])}}else if(s)for(let t=0,r=n.length;t<r;t++){const e=n[t];for(let t=0,r=e.length;t<r;t++){const r=e[t];r[2]=s(r[2])}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax),o&&null!=e.zmax&&null!=e.zmin&&(e.zmax=o(e.zmax),e.zmin=o(e.zmin)),s&&null!=e.mmax&&null!=e.mmin&&(e.mmax=s(e.mmax),e.mmin=s(e.mmin))}:"multipoint"===e?e=>{const n=e.points;let i,l;for(let o=0,s=n.length;o<s;o++){const e=n[o];o>0?(i+=e[0],l+=e[1]):(i=e[0],l=e[1]),e[0]=t(i),e[1]=r(l)}if(o&&s)for(let t=0,r=n.length;t<r;t++){const e=n[t];e[2]=o(e[2]),e[3]=s(e[3])}else if(o)for(let t=0,r=n.length;t<r;t++){const e=n[t];e[2]=o(e[2])}else if(s)for(let t=0,r=n.length;t<r;t++){const e=n[t];e[2]=s(e[2])}}:null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:String,json:{write:!0}})],g.prototype,"displayFieldName",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],g.prototype,"exceededTransferLimit",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:[_Graphic_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A],json:{write:!0}})],g.prototype,"features",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__/* .reader */ .w)("features")],g.prototype,"readFeatures",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:[_layers_support_Field_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A],json:{write:!0}})],g.prototype,"fields",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:h.read}}})],g.prototype,"geometryType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__/* .writer */ .K)("geometryType")],g.prototype,"writeGeometryType",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],g.prototype,"hasM",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],g.prototype,"hasZ",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({types:_geometry_js__WEBPACK_IMPORTED_MODULE_1__/* .geometryTypes */ .yR,json:{write:!0}})],g.prototype,"queryGeometry",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__/* .reader */ .w)("queryGeometry")],g.prototype,"readQueryGeometry",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A,json:{write:!0}})],g.prototype,"spatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__/* .writer */ .K)("spatialReference")],g.prototype,"writeSpatialReference",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({json:{write:!0}})],g.prototype,"transform",void 0),g=f=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__/* .subclass */ .$)("esri.rest.support.FeatureSet")],g),g.prototype.toJSON.isDefaultToJSON=!0;const d=g;


/***/ }),

/***/ 17771:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19251);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63863);
/* harmony import */ var _AlgorithmicColorRamp_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80196);
/* harmony import */ var _ColorRamp_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87673);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var c;let m=c=class extends _ColorRamp_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A{constructor(o){super(o),this.colorRamps=null,this.type="multipart"}clone(){return new c({colorRamps:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(this.colorRamps)})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:[_AlgorithmicColorRamp_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A],json:{write:!0}})],m.prototype,"colorRamps",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:["multipart"]})],m.prototype,"type",void 0),m=c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__/* .subclass */ .$)("esri.rest.support.MultipartColorRamp")],m);const a=m;


/***/ }),

/***/ 59740:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ m),
/* harmony export */   r: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _AlgorithmicColorRamp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80196);
/* harmony import */ var _ColorRamp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87673);
/* harmony import */ var _MultipartColorRamp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17771);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const m={key:"type",base:_ColorRamp_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,typeMap:{algorithmic:_AlgorithmicColorRamp_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,multipart:_MultipartColorRamp_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A}};function p(o){return o?.type?"algorithmic"===o.type?_AlgorithmicColorRamp_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.fromJSON(o):"multipart"===o.type?_MultipartColorRamp_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.fromJSON(o):null:null}


/***/ }),

/***/ 59346:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vd: () => (/* binding */ e),
/* harmony export */   Vo: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony exports direct3DObjectFeatureLayerDisplayEnabled, disableDirect3DObjectFeatureLayerDisplay, disableI3SPatching, disableIDBCache, disableSceneLayerEditing, enableDirect3DObjectFeatureLayerDisplay, enableI3SPatching, enableSceneLayerEditing, i3sPatchingEnabled */
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const e=()=>!!(0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("enable-feature:force-wosr"),a=()=>!!has("enable-feature:direct-3d-object-feature-layer-display"),t=()=>_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.add("enable-feature:direct-3d-object-feature-layer-display",!0,!0,!0),i=()=>_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.add("enable-feature:direct-3d-object-feature-layer-display",!1,!0,!0),r=()=>!!has("enable-i3s-patching"),d=()=>_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.add("enable-i3s-patching",!0,!0,!0),c=()=>_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.add("enable-i3s-patching",!1,!0,!0),n=()=>!!(0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("enable-feature:SceneLayer-editing"),l=(e="i3s-patching")=>{switch(c(),i(),_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.add("enable-feature:SceneLayer-editing",!0,!0,!0),e){case"feature-layer-view":t();break;case"i3s-patching":d()}},s=()=>{c(),i(),has.add("enable-feature:SceneLayer-editing",!1,!0,!0)},b=()=>has.add("disable-feature:idb-cache",!0,!0,!0);l("i3s-patching");


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

/***/ 38463:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  rS: () => (/* binding */ b),
  M9: () => (/* binding */ l),
  oO: () => (/* binding */ i)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols.js + 1 modules
var symbols = __webpack_require__(30822);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/layerUtils.js
var layerUtils = __webpack_require__(40454);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/Symbol3D.js
var Symbol3D = __webpack_require__(50626);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/WebStyleSymbol.js
var WebStyleSymbol = __webpack_require__(75162);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/PointSymbol3D.js
var PointSymbol3D = __webpack_require__(66960);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleLineSymbol.js + 2 modules
var SimpleLineSymbol = __webpack_require__(40241);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/LineSymbol3D.js
var LineSymbol3D = __webpack_require__(68324);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleMarkerSymbol.js
var SimpleMarkerSymbol = __webpack_require__(23369);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/PictureMarkerSymbol.js
var PictureMarkerSymbol = __webpack_require__(72001);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleFillSymbol.js
var SimpleFillSymbol = __webpack_require__(68882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/MeshSymbol3D.js
var MeshSymbol3D = __webpack_require__(50151);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/PolygonSymbol3D.js
var PolygonSymbol3D = __webpack_require__(65216);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/TextSymbol.js
var TextSymbol = __webpack_require__(42602);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/LabelSymbol3D.js
var LabelSymbol3D = __webpack_require__(27372);
;// ../node_modules/@arcgis/core/symbols/support/symbolConversion.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const a={retainId:!1,ignoreDrivers:!1,hasLabelingContext:!0};function S(S,c=a){if(!S)return{symbol:null};const{retainId:u=a.retainId,ignoreDrivers:d=a.ignoreDrivers,hasLabelingContext:j=a.hasLabelingContext,retainCIM:D=a.retainCIM}=c;let g=null;if((0,symbols/* isSymbol3D */.wk)(S)||S instanceof WebStyleSymbol/* default */.A)g=S.clone();else if("cim"===S.type){const o=S.data?.symbol?.type;if("CIMPointSymbol"!==o)return{error:new Error/* default */.A("symbol-conversion:unsupported-cim-symbol",`CIM symbol of type '${o||"unknown"}' is unsupported in 3D`,{symbol:S})};g=D?S.clone():PointSymbol3D/* default */.A.fromCIMSymbol(S)}else if(S instanceof SimpleLineSymbol/* default */.A)g=LineSymbol3D/* default */.A.fromSimpleLineSymbol(S);else if(S instanceof SimpleMarkerSymbol/* default */.A)g=PointSymbol3D/* default */.A.fromSimpleMarkerSymbol(S);else if(S instanceof PictureMarkerSymbol/* default */.A)g=PointSymbol3D/* default */.A.fromPictureMarkerSymbol(S);else if(S instanceof SimpleFillSymbol/* default */.A)g=c.geometryType&&"mesh"===c.geometryType?MeshSymbol3D/* default */.A.fromSimpleFillSymbol(S):PolygonSymbol3D/* default */.A.fromSimpleFillSymbol(S);else{if(!(S instanceof TextSymbol/* default */.A))return{error:new Error/* default */.A("symbol-conversion:unsupported-2d-symbol",`2D symbol of type '${S.type||S.declaredClass}' is unsupported in 3D`,{symbol:S})};g=j?LabelSymbol3D/* default */.A.fromTextSymbol(S):PointSymbol3D/* default */.A.fromTextSymbol(S)}return u&&g&&"cim"!==g.type&&(g.id=S.id),d&&(0,symbols/* isSymbol3D */.wk)(g)&&g.symbolLayers.forEach((o=>o.ignoreDrivers=!0)),{symbol:g}}

;// ../node_modules/@arcgis/core/symbols/support/jsonUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function l(o,e,n,t){const s=jsonUtils_a(o,{},{context:t,isLabelSymbol:!1});null!=s&&(e[n]=s)}function i(o,e,n,t){const s=jsonUtils_a(o,{},{context:t,isLabelSymbol:!0});null!=s&&(e[n]=s)}function m(o){return o instanceof Symbol3D/* default */.A||o instanceof WebStyleSymbol/* default */.A}function jsonUtils_a(o,t,r){if(null==o)return null;const{context:l,isLabelSymbol:i}=r,a=l?.origin,b=l?.messages;if("web-scene"===a&&!m(o)){const n=S(o,{retainCIM:!0,hasLabelingContext:i});return null!=n.symbol?n.symbol.write(t,l):(b?.push(new Error/* default */.A("symbol:unsupported",`Symbols of type '${o.declaredClass}' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView`,{symbol:o,context:l,error:n.error})),null)}return("web-map"===a||"portal-item"===a&&!(0,layerUtils/* isSceneServiceLayer */.TU)(l?.layer))&&m(o)?(b?.push(new Error/* default */.A("symbol:unsupported",`Symbols of type '${o.declaredClass}' are not supported in web maps and portal items. Use 2D symbology and CIMSymbol instead when working with MapView`,{symbol:o,context:l})),null):o.write(t,l)}function b(e,n){return (0,symbols/* readSymbol */.Bu)(e,null,n)}


/***/ }),

/***/ 28051:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bo: () => (/* binding */ p),
/* harmony export */   cF: () => (/* binding */ c),
/* harmony export */   jg: () => (/* binding */ w),
/* harmony export */   o5: () => (/* binding */ d),
/* harmony export */   yA: () => (/* binding */ b)
/* harmony export */ });
/* unused harmony exports cachedStyles, cleanupStyleUtilsCache */
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86394);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98849);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40189);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20909);
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10282);
/* harmony import */ var _portal_PortalQueryParams_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99990);
/* harmony import */ var _support_featureFlags_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59346);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let u={};async function f(e,t){try{return{data:(await b(e,t)).data,baseUrl:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .removeFile */ .nM)(e),styleUrl:e}}catch(o){return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .throwIfAbortError */ .QP)(o),null}}function i(e,t,r){const o=null!=t.portal?t.portal:_portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.getDefault();let s;const l=`${o.url} - ${o.user&&o.user.username} - ${e}`;return u[l]||(u[l]=y(e,o,r).then((e=>(s=e,e.fetchData()))).then((t=>({data:t,baseUrl:s.itemUrl??"",styleName:e})))),u[l]}function m(){u&&(u={})}function y(e,r,o){return r.load(o).then((()=>{const t=new _portal_PortalQueryParams_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A({disableExtraQuery:!0,query:`owner:${h} AND type:${j} AND typekeywords:"${e}"`});return r.queryItems(t,o)})).then((({results:r})=>{let s=null;const n=e.toLowerCase();if(r&&Array.isArray(r))for(const e of r){const t=e.typeKeywords?.some((e=>e.toLowerCase()===n));if(t&&e.type===j&&e.owner===h){s=e;break}}if(!s)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("symbolstyleutils:style-not-found",`The style '${e}' could not be found`,{styleName:e});return s.load(o)}))}function c(e,r,o){return null!=e?.styleUrl?f(e.styleUrl,o):null!=e?.styleName?i(e.styleName,r,o):Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function p(e){return null===e||"CIMSymbolReference"===e.type?e:{type:"CIMSymbolReference",symbol:e}}function d(e,t,r=["gltf"]){if("cimRef"===t)return e.cimRef;if(e.formatInfos&&!(0,_support_featureFlags_js__WEBPACK_IMPORTED_MODULE_6__/* .enableWebStyleForceWOSR */ .Vd)())for(const o of r){const t=e.formatInfos.find((e=>e.type===o));if(t)return t.href}return e.webRef}function b(t,r){const s={responseType:"json",query:{f:"json"},...r};return (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .normalize */ .S8)(t),s)}const h="esri_en",j="Style",w="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json";


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