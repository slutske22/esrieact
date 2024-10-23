"use strict";
exports.id = 3780;
exports.ids = [3780,7081,1399,9018,7724];
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

/***/ 16161:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ o)
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
const o=o=>{let t=class extends o{constructor(){super(...arguments),this.customParameters=null}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:Object,json:{write:{overridePolicy:r=>({enabled:!!(r&&Object.keys(r).length>0)})}}})],t.prototype,"customParameters",void 0),t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.layers.mixins.CustomParametersMixin")],t),t};


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

/***/ 48330:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24793);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59851);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const l=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONMap */ .J({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let a=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* .ClonableMixin */ .O)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__/* .JSONSupport */ .oY)){constructor(o){super(o),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:!0}})],a.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:!0}})],a.prototype,"description",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{read:l.read,write:l.write}})],a.prototype,"drawingTool",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:!0}})],a.prototype,"prototype",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:!0}})],a.prototype,"thumbnail",void 0),a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.layers.support.FeatureTemplate")],a);const p=a;


/***/ }),

/***/ 25392:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24793);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75094);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(77542);
/* harmony import */ var _domains_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38938);
/* harmony import */ var _FeatureTemplate_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48330);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let c=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* .ClonableMixin */ .O)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY)){constructor(o){super(o),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(o){const r={};for(const s of Object.keys(o))r[s]=(0,_domains_js__WEBPACK_IMPORTED_MODULE_10__/* .fromJSON */ .rS)(o[s]);return r}writeDomains(o,r){const s={};for(const t of Object.keys(o))o[t]&&(s[t]=o[t]?.toJSON());r.domains=s}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{write:!0}})],c.prototype,"id",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{write:!0}})],c.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{write:!0}})],c.prototype,"domains",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__/* .reader */ .w)("domains")],c.prototype,"readDomains",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__/* .writer */ .K)("domains")],c.prototype,"writeDomains",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[_FeatureTemplate_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A],json:{write:!0}})],c.prototype,"templates",void 0),c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.layers.support.FeatureType")],c);const n=c;


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

/***/ 86155:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ C)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols.js + 1 modules
var symbols = __webpack_require__(30822);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/screenUtils.js
var screenUtils = __webpack_require__(89882);
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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/labelUtils.js
var labelUtils = __webpack_require__(74639);
;// ../node_modules/@arcgis/core/layers/support/LabelExpressionInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var l;let n=l=class extends JSONSupport/* JSONSupport */.oY{constructor(){super(...arguments),this.expression=null,this.title=null,this.value=null}readExpression(r,e){return e.value?(0,labelUtils/* convertTemplatedStringToArcade */.mX)(e.value):r}writeExpression(r,e,s){null!=this.value&&(r=(0,labelUtils/* convertTemplatedStringToArcade */.mX)(this.value)),null!=r&&(e[s]=r)}clone(){return new l({expression:this.expression,title:this.title,value:this.value})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{writerEnsuresNonNull:!0}}})],n.prototype,"expression",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("expression",["expression","value"])],n.prototype,"readExpression",null),(0,tslib_es6._)([(0,writer/* writer */.K)("expression")],n.prototype,"writeExpression",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0,origins:{"web-scene":{write:!1}}}})],n.prototype,"title",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1,write:!1}})],n.prototype,"value",void 0),n=l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.LabelExpressionInfo")],n);const a=n;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/layerUtils.js
var layerUtils = __webpack_require__(40454);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/defaults.js
var defaults = __webpack_require__(26207);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/jsonUtils.js + 1 modules
var jsonUtils = __webpack_require__(38463);
;// ../node_modules/@arcgis/core/layers/support/LabelClass.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var h;const P=new jsonMap/* JSONMap */.J({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0});function x(e,r,t){return{enabled:!(0,layerUtils/* isSceneServiceLayer */.TU)(t?.layer)}}function L(e){return!e||"service"!==e.origin&&!("map-image"===e.layer?.type)}function g(e){return"map-image"===e?.type}function E(e){return!!g(e)&&!!e.capabilities?.exportMap?.supportsArcadeExpressionForLabeling}function j(e){return L(e)||E(e?.layer)}let A=h=class extends JSONSupport/* JSONSupport */.oY{static evaluateWhere(e,r){const t=(e,r,t)=>{switch(r){case"=":return e==t;case"<>":return e!=t;case">":return e>t;case">=":return e>=t;case"<":return e<t;case"<=":return e<=t}return!1};try{if(null==e)return!0;const o=e.split(" ");if(3===o.length)return t(r[o[0]],o[1],o[2]);if(7===o.length){const e=t(r[o[0]],o[1],o[2]),i=o[3],n=t(r[o[4]],o[5],o[6]);switch(i){case"AND":return e&&n;case"OR":return e||n}}return!1}catch(o){console.log("Error.: can't parse = "+e)}}constructor(e){super(e),this.type="label",this.name=null,this.allowOverrun=!1,this.deconflictionStrategy="static",this.labelExpression=null,this.labelExpressionInfo=null,this.labelPlacement=null,this.labelPosition="curved",this.maxScale=0,this.minScale=0,this.repeatLabel=!0,this.repeatLabelDistance=null,this.symbol=defaults/* defaultTextSymbol2D */.Hk,this.useCodedValues=void 0,this.where=null}readLabelExpression(e,r){const t=r.labelExpressionInfo;if(!t||!t.value&&!t.expression)return e}writeLabelExpression(e,r,t){if(this.labelExpressionInfo)if(null!=this.labelExpressionInfo.value)e=(0,labelUtils/* templateStringToSql */.D3)(this.labelExpressionInfo.value);else if(null!=this.labelExpressionInfo.expression){const r=(0,labelUtils/* getSingleFieldArcadeExpression */.tH)(this.labelExpressionInfo.expression);r&&(e="["+r+"]")}null!=e&&(r[t]=e)}writeLabelExpressionInfo(e,r,t,o){if(null==e&&null!=this.labelExpression&&L(o))e=new a({expression:this.getLabelExpressionArcade()});else if(!e)return;const i=e.toJSON(o);i.expression&&(r[t]=i)}writeMaxScale(e,r){(e||this.minScale)&&(r.maxScale=e)}writeMinScale(e,r){(e||this.maxScale)&&(r.minScale=e)}getLabelExpression(){return (0,labelUtils/* getLabelExpression */.XJ)(this)}getLabelExpressionArcade(){return (0,labelUtils/* getLabelExpressionArcade */.BI)(this)}getLabelExpressionSingleField(){return (0,labelUtils/* getLabelExpressionSingleField */.rU)(this)}hash(){return JSON.stringify(this)}clone(){return new h({allowOverrun:this.allowOverrun,deconflictionStrategy:this.deconflictionStrategy,labelExpression:this.labelExpression,labelExpressionInfo:(0,lang/* clone */.o8)(this.labelExpressionInfo),labelPosition:this.labelPosition,labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,repeatLabel:this.repeatLabel,repeatLabelDistance:this.repeatLabelDistance,symbol:(0,lang/* clone */.o8)(this.symbol),where:this.where,useCodedValues:this.useCodedValues})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],A.prototype,"name",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1},"portal-item":{default:!1,write:{overridePolicy:x}}}}})],A.prototype,"allowOverrun",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0,default:"static",origins:{"web-scene":{write:!1},"portal-item":{default:"static",write:{overridePolicy:x}}}}})],A.prototype,"deconflictionStrategy",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{overridePolicy(e,r,t){return this.labelExpressionInfo&&"service"===t?.origin&&E(t.layer)?{enabled:!1}:{allowNull:!0}}}}})],A.prototype,"labelExpression",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("labelExpression")],A.prototype,"readLabelExpression",null),(0,tslib_es6._)([(0,writer/* writer */.K)("labelExpression")],A.prototype,"writeLabelExpression",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:a,json:{write:{overridePolicy:(e,r,t)=>j(t)?{allowNull:!0}:{enabled:!1}}}})],A.prototype,"labelExpressionInfo",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("labelExpressionInfo")],A.prototype,"writeLabelExpressionInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:P.apiValues,json:{type:P.jsonValues,read:P.read,write:P.write}})],A.prototype,"labelPlacement",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["curved","parallel"],json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],A.prototype,"labelPosition",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number})],A.prototype,"maxScale",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("maxScale")],A.prototype,"writeMaxScale",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number})],A.prototype,"minScale",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("minScale")],A.prototype,"writeMinScale",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:x}}}}})],A.prototype,"repeatLabel",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,cast:screenUtils/* toPt */.cr,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:x}}}}})],A.prototype,"repeatLabelDistance",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:symbols/* symbolTypesLabel */.em,json:{origins:{"web-scene":{types:symbols/* symbolTypesLabel3D */.Rv,write:jsonUtils/* writeLabelSymbol */.oO,default:null}},write:jsonUtils/* writeLabelSymbol */.oO,default:null}})],A.prototype,"symbol",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],A.prototype,"useCodedValues",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],A.prototype,"where",void 0),A=h=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.LabelClass")],A);const C=A;


/***/ }),

/***/ 8585:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48982);
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
var l;let i=l=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY{constructor(o){super(o),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A}clone(){return new l({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{write:!0}})],i.prototype,"floorField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{read:!1,write:!1}})],i.prototype,"viewAllMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{read:!1,write:!1}})],i.prototype,"viewAllLevelIds",void 0),i=l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.layers.support.LayerFloorInfo")],i);const p=i;


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

/***/ 74639:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BI: () => (/* binding */ f),
/* harmony export */   D3: () => (/* binding */ u),
/* harmony export */   XJ: () => (/* binding */ x),
/* harmony export */   mX: () => (/* binding */ w),
/* harmony export */   rU: () => (/* binding */ g),
/* harmony export */   tH: () => (/* binding */ _)
/* harmony export */ });
/* unused harmony exports getSingleFieldTemplatedString, sqlToTemplateString */
/* harmony import */ var _core_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96274);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const n="__begin__",r="__end__",s=new RegExp(n,"ig"),t=new RegExp(r,"ig"),l=new RegExp("^"+n,"i"),o=new RegExp(r+"$","i"),i='"',a=i+" + ",c=" + "+i;function p(e){return e.replaceAll(new RegExp("\\[","g"),"{").replaceAll(new RegExp("\\]","g"),"}")}function u(e){return e.replaceAll(new RegExp("\\{","g"),"[").replaceAll(new RegExp("\\}","g"),"]")}function x(e){const n={expression:"",type:"none"};return e.labelExpressionInfo?e.labelExpressionInfo.value?(n.expression=e.labelExpressionInfo.value,n.type="conventional"):e.labelExpressionInfo.expression&&(n.expression=e.labelExpressionInfo.expression,n.type="arcade"):null!=e.labelExpression&&(n.expression=p(e.labelExpression),n.type="conventional"),n}function f(e){const n=x(e);if(!n)return null;switch(n.type){case"conventional":return w(n.expression);case"arcade":return n.expression}return null}function g(e){const n=x(e);if(!n)return null;switch(n.type){case"conventional":return $(n.expression);case"arcade":return _(n.expression)}return null}function w(p){let u;return p?(u=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_0__/* .replace */ .HC)(p,(e=>n+'$feature["'+e+'"]'+r)),u=l.test(u)?u.replace(l,""):i+u,u=o.test(u)?u.replace(o,""):u+i,u=u.replaceAll(s,a).replaceAll(t,c)):u='""',u}const E=/^\s*\{([^}]+)\}\s*$/i;function $(e){const n=e?.match(E);return n?.[1].trim()||null}const b=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,m=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,R=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;function _(e){if(!e)return null;let n=b.exec(e)||m.exec(e);return n?n[1]||n[3]:(n=R.exec(e),n?n[2]:null)}


/***/ }),

/***/ 79682:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ i),
/* harmony export */   z: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19251);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(539);
/* harmony import */ var _LabelClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86155);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const n=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.getLogger("esri.layers.support.labelingInfo"),l=/\[([^\[\]]+)\]/gi;function i(e,r,o){return e?e.map((e=>{const n=new _LabelClass_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A;if(n.read(e,o),n.labelExpression){const e=r.fields||r.layerDefinition?.fields||this.fields;n.labelExpression=n.labelExpression.replaceAll(l,((r,o)=>`[${s(o,e)}]`))}return n})):null}function s(e,r){if(!r)return e;const o=e.toLowerCase();for(let t=0;t<r.length;t++){const e=r[t].name;if(e.toLowerCase()===o)return e}return e}const a={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null};function c(e,o){const t=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(e);return t.some((e=>f(e,o)))?[]:t}function f(r,o){const t=r.labelPlacement,l=a[o];if(!r.symbol)return n.warn("No ILabelClass symbol specified."),!0;if(!l)return n.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("labeling:unsupported-geometry-type",`Unable to create labels for layer, geometry type '${o}' is not supported`)),!0;if(!l.includes(t)){const e=l[0];t&&n.warn(`Found invalid label placement type ${t} for ${o}. Defaulting to ${e}`),r.labelPlacement=e}return!1}


/***/ }),

/***/ 90351:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ a)
});

// UNUSED EXPORTS: getVideoLayerCapabilities

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js
var arcgisLayerUrl = __webpack_require__(16123);
;// ../node_modules/@arcgis/core/rest/support/jsonUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function jsonUtils_n(n,r,u){return!!t(n,r,u)}function r(n,r,u){return t(n,r,u)}function t(n,r,t){return n&&n.hasOwnProperty(r)?n[r]:t}

;// ../node_modules/@arcgis/core/layers/support/serviceCapabilitiesUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const p={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function o(t){const s=t?.supportedSpatialAggregationStatistics?.map((t=>t.toLowerCase()));return{envelope:!!s?.includes("envelopeaggregate"),centroid:!!s?.includes("centroidaggregate"),convexHull:!!s?.includes("convexhullaggregate")}}function u(t,s){const e=t?.supportedOperationsWithCacheHint?.map((t=>t.toLowerCase()));return!!e?.includes(s.toLowerCase())}function a(t,s){return{analytics:n(t),attachment:i(t),data:c(t),metadata:d(t),operations:l(t.capabilities,t,s),query:y(t,s),queryRelated:m(t),queryTopFeatures:C(t),editing:h(t)}}function n(t){return{supportsCacheHint:u(t.advancedQueryCapabilities,"queryAnalytics")}}function i(t){const s=t.attachmentProperties,r={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:u(t.advancedQueryCapabilities,"queryAttachments"),supportsResize:jsonUtils_n(t,"supportsAttachmentsResizing",!1)};return s&&Array.isArray(s)&&s.forEach((t=>{const s=p[t.name];s&&(r[s]=!!t.isEnabled)})),r}function c(t){return{isVersioned:jsonUtils_n(t,"isDataVersioned",!1),supportsAttachment:jsonUtils_n(t,"hasAttachments",!1),supportsM:jsonUtils_n(t,"hasM",!1),supportsZ:jsonUtils_n(t,"hasZ",!1)}}function d(t){return{supportsAdvancedFieldProperties:jsonUtils_n(t,"supportsFieldDescriptionProperty",!1)}}function l(s,r,p){const o=s?s.toLowerCase().split(",").map((t=>t.trim())):[],u=p?(0,arcgisLayerUrl/* parse */.qg)(p):null,a=o.includes(null!=u&&"MapServer"===u.serverType?"data":"query"),n=o.includes("editing")&&!r.datesInUnknownTimezone;let i=n&&o.includes("create"),c=n&&o.includes("delete"),d=n&&o.includes("update");const l=o.includes("changetracking"),y=r.advancedQueryCapabilities;return n&&!(i||c||d)&&(i=c=d=!0),{supportsCalculate:jsonUtils_n(r,"supportsCalculate",!1),supportsTruncate:jsonUtils_n(r,"supportsTruncate",!1),supportsValidateSql:jsonUtils_n(r,"supportsValidateSql",!1),supportsAdd:i,supportsDelete:c,supportsEditing:n,supportsChangeTracking:l,supportsQuery:a,supportsQueryAnalytics:jsonUtils_n(y,"supportsQueryAnalytic",!1),supportsQueryAttachments:jsonUtils_n(y,"supportsQueryAttachments",!1),supportsQueryTopFeatures:jsonUtils_n(y,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:jsonUtils_n(r,"supportsAttachmentsResizing",!1),supportsSync:o.includes("sync"),supportsUpdate:d,supportsExceedsLimitStatistics:jsonUtils_n(r,"supportsExceedsLimitStatistics",!1),supportsAsyncConvert3D:jsonUtils_n(r,"supportsAsyncConvert3D",!1)}}function y(t,p){const a=t.advancedQueryCapabilities,n=t.ownershipBasedAccessControlForFeatures,i=t.archivingInfo,c=t.currentVersion,d=p?.includes("MapServer"),l=!d||c>=(0,has/* default */.A)("mapserver-pbf-version-support"),y=(0,arcgisLayerUrl/* isHostedAgolService */.Wo)(p),m=new Set((t.supportedQueryFormats??"").split(",").map((t=>t.toLowerCase().trim())));return{supportsStatistics:jsonUtils_n(a,"supportsStatistics",t.supportsStatistics),supportsPercentileStatistics:jsonUtils_n(a,"supportsPercentileStatistics",!1),supportsSpatialAggregationStatistics:jsonUtils_n(a,"supportsSpatialAggregationStatistics",!1),supportedSpatialAggregationStatistics:o(a),supportsCentroid:jsonUtils_n(a,"supportsReturningGeometryCentroid",!1),supportsDistance:jsonUtils_n(a,"supportsQueryWithDistance",!1),supportsDistinct:jsonUtils_n(a,"supportsDistinct",t.supportsAdvancedQueries),supportsExtent:jsonUtils_n(a,"supportsReturningQueryExtent",!1),supportsGeometryProperties:jsonUtils_n(a,"supportsReturningGeometryProperties",!1),supportsHavingClause:jsonUtils_n(a,"supportsHavingClause",!1),supportsOrderBy:jsonUtils_n(a,"supportsOrderBy",t.supportsAdvancedQueries),supportsPagination:jsonUtils_n(a,"supportsPagination",!1),supportsQuantization:jsonUtils_n(t,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:jsonUtils_n(t,"supportsQuantizationEditMode",!1),supportsQueryGeometry:jsonUtils_n(t,"supportsReturningQueryGeometry",!1),supportsResultType:jsonUtils_n(a,"supportsQueryWithResultType",!1),supportsMaxRecordCountFactor:jsonUtils_n(a,"supportsMaxRecordCountFactor",!1),supportsSqlExpression:jsonUtils_n(a,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:jsonUtils_n(t,"useStandardizedQueries",!1),supportsTopFeaturesQuery:jsonUtils_n(a,"supportsTopFeaturesQuery",!1),supportsQueryByAnonymous:jsonUtils_n(n,"allowAnonymousToQuery",!0),supportsQueryByOthers:jsonUtils_n(n,"allowOthersToQuery",!0),supportsHistoricMoment:jsonUtils_n(i,"supportsQueryWithHistoricMoment",!1),supportsFormatPBF:l&&m.has("pbf"),supportsDisjointSpatialRelationship:jsonUtils_n(a,"supportsDisjointSpatialRel",!1),supportsCacheHint:jsonUtils_n(a,"supportsQueryWithCacheHint",!1)||u(a,"query"),supportsDefaultSpatialReference:jsonUtils_n(a,"supportsDefaultSR",!1),supportsCompactGeometry:y,supportsFullTextSearch:jsonUtils_n(a,"supportsFullTextSearch",!1),maxRecordCountFactor:r(t,"maxRecordCountFactor",void 0),maxRecordCount:r(t,"maxRecordCount",void 0),standardMaxRecordCount:r(t,"standardMaxRecordCount",void 0),tileMaxRecordCount:r(t,"tileMaxRecordCount",void 0)}}function m(t){const s=t.advancedQueryCapabilities,r=jsonUtils_n(s,"supportsAdvancedQueryRelated",!1);return{supportsPagination:jsonUtils_n(s,"supportsQueryRelatedPagination",!1),supportsCount:r,supportsOrderBy:r,supportsCacheHint:u(s,"queryRelated")}}function C(t){return{supportsCacheHint:u(t.advancedQueryCapabilities,"queryTopFilter")}}function h(t){const s=t.ownershipBasedAccessControlForFeatures,p=t?t.advancedEditingCapabilities:void 0;return{supportsGeometryUpdate:jsonUtils_n(t,"allowGeometryUpdates",!0),supportsGlobalId:jsonUtils_n(t,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:jsonUtils_n(t,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:jsonUtils_n(t,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:jsonUtils_n(t,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:jsonUtils_n(t,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:jsonUtils_n(s,"allowAnonymousToDelete",!0),supportsDeleteByOthers:jsonUtils_n(s,"allowOthersToDelete",!0),supportsUpdateByAnonymous:jsonUtils_n(s,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:jsonUtils_n(s,"allowOthersToUpdate",!0),supportsAsyncApplyEdits:jsonUtils_n(p,"supportsAsyncApplyEdits",!1),zDefault:r(t,"zDefault",void 0)}}function g(t){return{operations:{supportsExportClip:e(t,"supportsExportClip",!1),supportsMensuration:e(t,"supportsMensuration",!1)},query:{supportsCoverageQuery:e(t,"supportsCoverageQuery",!1)}}}


/***/ }),

/***/ 44360:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  L: () => (/* binding */ K)
});

// UNUSED EXPORTS: JoinTableDataSource

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/reader.js
var serializableProperty_reader = __webpack_require__(61985);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/Field.js
var Field = __webpack_require__(24738);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/source/MapLayerSource.js
var MapLayerSource = __webpack_require__(30750);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry.js
var geometry = __webpack_require__(17639);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/typeUtils.js
var typeUtils = __webpack_require__(12433);
;// ../node_modules/@arcgis/core/layers/support/source/QueryTableDataSource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var c;let a=c=class extends JSONSupport/* JSONSupport */.oY{constructor(e){super(e),this.type="query-table"}clone(){const{workspaceId:e,query:r,oidFields:o,spatialReference:t,geometryType:p}=this,s={workspaceId:e,query:r,oidFields:o,spatialReference:t?.clone()??void 0,geometryType:p};return new c(s)}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({queryTable:"query-table"})],a.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],a.prototype,"workspaceId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],a.prototype,"query",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],a.prototype,"oidFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SpatialReference/* default */.A,json:{write:!0}})],a.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)(typeUtils/* featureGeometryTypeKebabDictionary */.g)],a.prototype,"geometryType",void 0),a=c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.source.QueryTableDataSource")],a);

;// ../node_modules/@arcgis/core/layers/support/source/RasterDataSource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var p;let RasterDataSource_a=p=class extends JSONSupport/* JSONSupport */.oY{constructor(r){super(r),this.type="raster"}clone(){const{workspaceId:r,dataSourceName:o}=this;return new p({workspaceId:r,dataSourceName:o})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({raster:"raster"})],RasterDataSource_a.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],RasterDataSource_a.prototype,"dataSourceName",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],RasterDataSource_a.prototype,"workspaceId",void 0),RasterDataSource_a=p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.source.RasterDataSource")],RasterDataSource_a);

;// ../node_modules/@arcgis/core/layers/support/source/TableDataSource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var TableDataSource_p;let TableDataSource_a=TableDataSource_p=class extends JSONSupport/* JSONSupport */.oY{constructor(r){super(r),this.type="table"}clone(){const{workspaceId:r,gdbVersion:o,dataSourceName:e}=this;return new TableDataSource_p({workspaceId:r,gdbVersion:o,dataSourceName:e})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({table:"table"})],TableDataSource_a.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],TableDataSource_a.prototype,"workspaceId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],TableDataSource_a.prototype,"gdbVersion",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],TableDataSource_a.prototype,"dataSourceName",void 0),TableDataSource_a=TableDataSource_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.source.TableDataSource")],TableDataSource_a);

;// ../node_modules/@arcgis/core/layers/support/source/DataLayerSource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var d,m;const T=(0,jsonMap/* strict */.O)()({esriLeftInnerJoin:"left-inner-join",esriLeftOuterJoin:"left-outer-join"});let j=d=class extends JSONSupport/* JSONSupport */.oY{constructor(e){super(e),this.type="join-table"}readLeftTableSource(e,r,o){return g()(e,r,o)}castLeftTableSource(e){return (0,ensureType/* ensureOneOfType */.aq)(L(),e)}readRightTableSource(e,r,o){return g()(e,r,o)}castRightTableSource(e){return (0,ensureType/* ensureOneOfType */.aq)(L(),e)}clone(){const{leftTableKey:e,rightTableKey:r,leftTableSource:o,rightTableSource:t,joinType:a}=this,s={leftTableKey:e,rightTableKey:r,leftTableSource:o?.clone()??void 0,rightTableSource:t?.clone()??void 0,joinType:a};return new d(s)}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({joinTable:"join-table"})],j.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],j.prototype,"leftTableKey",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],j.prototype,"rightTableKey",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],j.prototype,"leftTableSource",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("leftTableSource")],j.prototype,"readLeftTableSource",null),(0,tslib_es6._)([(0,cast/* cast */.w)("leftTableSource")],j.prototype,"castLeftTableSource",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],j.prototype,"rightTableSource",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("rightTableSource")],j.prototype,"readRightTableSource",null),(0,tslib_es6._)([(0,cast/* cast */.w)("rightTableSource")],j.prototype,"castRightTableSource",null),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)(T)],j.prototype,"joinType",void 0),j=d=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.source.JoinTableDataSource")],j);let h=null;function g(){return h||(h=(0,serializableProperty_reader/* createTypeReader */.C)({types:L()})),h}let v=null;function L(){return v||(v={key:"type",base:null,typeMap:{"data-layer":K,"map-layer":MapLayerSource/* MapLayerSource */.f}}),v}const w={key:"type",base:null,typeMap:{"join-table":j,"query-table":a,raster:RasterDataSource_a,table:TableDataSource_a}};let K=m=class extends JSONSupport/* JSONSupport */.oY{constructor(e){super(e),this.type="data-layer"}clone(){const{fields:e,dataSource:r}=this;return new m({fields:e,dataSource:r})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({dataLayer:"data-layer"})],K.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Field/* default */.A],json:{write:!0}})],K.prototype,"fields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:w,json:{write:!0}})],K.prototype,"dataSource",void 0),K=m=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.source.DataLayerSource")],K),K.from=(0,ensureType/* ensureType */.dp)(K);


/***/ }),

/***/ 30750:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var a;let c=a=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(r){super(r),this.type="map-layer"}clone(){const{mapLayerId:r,gdbVersion:o}=this;return new a({mapLayerId:r,gdbVersion:o})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__/* .enumeration */ .e)({mapLayer:"map-layer"})],c.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__/* .Integer */ .jz,json:{write:!0}})],c.prototype,"mapLayerId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],c.prototype,"gdbVersion",void 0),c=a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.layers.support.source.MapLayerSource")],c);


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

/***/ 27604:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _geometry_support_zscale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8034);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function t(t,o,r){if(!r?.features||!r.hasZ)return;const f=(0,_geometry_support_zscale_js__WEBPACK_IMPORTED_MODULE_0__/* .getGeometryZScaler */ .N)(r.geometryType,o,t.outSpatialReference);if(null!=f)for(const e of r.features)f(e.geometry)}


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

/***/ 27973:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19251);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77542);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var a;let p=a=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(t){super(t),this.attachmentTypes=null,this.attachmentsWhere=null,this.cacheHint=void 0,this.keywords=null,this.globalIds=null,this.name=null,this.num=null,this.objectIds=null,this.returnMetadata=!1,this.size=null,this.start=null,this.where=null}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10}clone(){return new a((0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)({attachmentTypes:this.attachmentTypes,attachmentsWhere:this.attachmentsWhere,cacheHint:this.cacheHint,keywords:this.keywords,where:this.where,globalIds:this.globalIds,name:this.name,num:this.num,objectIds:this.objectIds,returnMetadata:this.returnMetadata,size:this.size,start:this.start}))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[String],json:{write:!0}})],p.prototype,"attachmentTypes",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{read:{source:"attachmentsDefinitionExpression"},write:{target:"attachmentsDefinitionExpression"}}})],p.prototype,"attachmentsWhere",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:Boolean,json:{write:!0}})],p.prototype,"cacheHint",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[String],json:{write:!0}})],p.prototype,"keywords",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[Number],json:{write:!0}})],p.prototype,"globalIds",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{write:!0}})],p.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:Number,json:{read:{source:"resultRecordCount"}}})],p.prototype,"num",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[Number],json:{write:!0}})],p.prototype,"objectIds",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:Boolean,json:{default:!1,write:!0}})],p.prototype,"returnMetadata",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[Number],json:{write:!0}})],p.prototype,"size",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:Number,json:{read:{source:"resultOffset"}}})],p.prototype,"start",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_6__/* .writer */ .K)("start"),(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_6__/* .writer */ .K)("num")],p.prototype,"writeStart",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],p.prototype,"where",void 0),p=a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.rest.support.AttachmentQuery")],p),p.from=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__/* .ensureType */ .dp)(p);const c=p;


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

/***/ 24587:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ b)
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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(4130);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(28902);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/jsonUtils.js
var jsonUtils = __webpack_require__(1171);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/source/DataLayerSource.js + 3 modules
var DataLayerSource = __webpack_require__(44360);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(24793);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
;// ../node_modules/@arcgis/core/rest/support/FullTextSearch.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let p=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(r){super(r),this.onFields=null,this.operator=null,this.searchTerm=null,this.searchType=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],json:{write:{enabled:!0,overridePolicy(){return{enabled:null!=this.onFields&&this.onFields.length>0}}}}})],p.prototype,"onFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"operator",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"searchTerm",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"searchType",void 0),p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.rest.support.FullTextSearch")],p);const i=p;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/QuantizationParameters.js
var QuantizationParameters = __webpack_require__(19925);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/StatisticDefinition.js
var StatisticDefinition = __webpack_require__(41969);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Point.js + 1 modules
var Point = __webpack_require__(78632);
;// ../node_modules/@arcgis/core/rest/support/Query.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var w;const v=new jsonMap/* JSONMap */.J({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),g=new jsonMap/* JSONMap */.J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let R=w=class extends JSONSupport/* JSONSupport */.oY{static from(t){return (0,ensureType/* ensureClass */.PZ)(w,t)}constructor(t){super(t),this.aggregateIds=null,this.cacheHint=void 0,this.compactGeometryEnabled=!1,this.datumTransformation=null,this.defaultSpatialReferenceEnabled=!1,this.distance=void 0,this.dynamicDataSource=void 0,this.formatOf3DObjects=null,this.fullText=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=void 0,this.groupByFieldsForStatistics=null,this.having=null,this.historicMoment=null,this.maxAllowableOffset=void 0,this.maxRecordCountFactor=1,this.multipatchOption=null,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.outStatistics=null,this.parameterValues=null,this.pixelSize=null,this.quantizationParameters=null,this.rangeValues=null,this.relationParameter=null,this.resultType=null,this.returnCentroid=!1,this.returnDistinctValues=!1,this.returnExceededLimitFeatures=!0,this.returnGeometry=!1,this.returnQueryGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.sourceSpatialReference=null,this.spatialRelationship="intersects",this.start=void 0,this.sqlFormat=null,this.text=null,this.timeExtent=null,this.timeReferenceUnknownClient=!1,this.units=null,this.where=null}castDatumTransformation(t){return"number"==typeof t||"object"==typeof t?t:null}writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime()}writeParameterValues(t,e){if(t){const r={};for(const e in t){const i=t[e];Array.isArray(i)?r[e]=i.map((t=>t instanceof Date?t.getTime():t)):i instanceof Date?r[e]=i.getTime():r[e]=i}e.parameterValues=r}}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10,e.where="1=1"}writeWhere(t,e){e.where=t||"1=1"}clone(){return new w((0,lang/* clone */.o8)({aggregateIds:this.aggregateIds,cacheHint:this.cacheHint,compactGeometryEnabled:this.compactGeometryEnabled,datumTransformation:this.datumTransformation,defaultSpatialReferenceEnabled:this.defaultSpatialReferenceEnabled,distance:this.distance,fullText:this.fullText,formatOf3DObjects:this.formatOf3DObjects,gdbVersion:this.gdbVersion,geometry:this.geometry,geometryPrecision:this.geometryPrecision,groupByFieldsForStatistics:this.groupByFieldsForStatistics,having:this.having,historicMoment:null!=this.historicMoment?new Date(this.historicMoment.getTime()):null,maxAllowableOffset:this.maxAllowableOffset,maxRecordCountFactor:this.maxRecordCountFactor,multipatchOption:this.multipatchOption,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,outStatistics:this.outStatistics,parameterValues:this.parameterValues,pixelSize:this.pixelSize,quantizationParameters:this.quantizationParameters,rangeValues:this.rangeValues,relationParameter:this.relationParameter,resultType:this.resultType,returnDistinctValues:this.returnDistinctValues,returnGeometry:this.returnGeometry,returnCentroid:this.returnCentroid,returnExceededLimitFeatures:this.returnExceededLimitFeatures,returnQueryGeometry:this.returnQueryGeometry,returnM:this.returnM,returnZ:this.returnZ,dynamicDataSource:this.dynamicDataSource,sourceSpatialReference:this.sourceSpatialReference,spatialRelationship:this.spatialRelationship,start:this.start,sqlFormat:this.sqlFormat,text:this.text,timeExtent:this.timeExtent,timeReferenceUnknownClient:this.timeReferenceUnknownClient,units:this.units,where:this.where}))}};R.MAX_MAX_RECORD_COUNT_FACTOR=5,(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],R.prototype,"aggregateIds",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],R.prototype,"cacheHint",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"compactGeometryEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],R.prototype,"datumTransformation",void 0),(0,tslib_es6._)([(0,cast/* cast */.w)("datumTransformation")],R.prototype,"castDatumTransformation",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"defaultSpatialReferenceEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:{overridePolicy:t=>({enabled:t>0})}}})],R.prototype,"distance",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:DataLayerSource/* DataLayerSource */.L,json:{write:!0}})],R.prototype,"dynamicDataSource",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],R.prototype,"formatOf3DObjects",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[i],json:{write:{enabled:!0,overridePolicy(){return{enabled:null!=this.fullText&&this.fullText.length>0}}}}})],R.prototype,"fullText",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],R.prototype,"gdbVersion",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:geometry/* geometryTypes */.yR,json:{read:jsonUtils/* fromJSON */.rS,write:!0}})],R.prototype,"geometry",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],R.prototype,"geometryPrecision",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],json:{write:!0}})],R.prototype,"groupByFieldsForStatistics",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],R.prototype,"having",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Date})],R.prototype,"historicMoment",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("historicMoment")],R.prototype,"writeHistoricMoment",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],R.prototype,"maxAllowableOffset",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,cast:t=>t<1?1:t>R.MAX_MAX_RECORD_COUNT_FACTOR?R.MAX_MAX_RECORD_COUNT_FACTOR:t,json:{write:{overridePolicy:t=>({enabled:t>1})}}})],R.prototype,"maxRecordCountFactor",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["xyFootprint"],json:{write:!0}})],R.prototype,"multipatchOption",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{read:{source:"resultRecordCount"}}})],R.prototype,"num",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],R.prototype,"objectIds",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],json:{write:!0}})],R.prototype,"orderByFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],json:{write:!0}})],R.prototype,"outFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SpatialReference/* default */.A,json:{name:"outSR",write:!0}})],R.prototype,"outSpatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[StatisticDefinition/* default */.A],json:{write:{enabled:!0,overridePolicy(){return{enabled:null!=this.outStatistics&&this.outStatistics.length>0}}}}})],R.prototype,"outStatistics",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],R.prototype,"parameterValues",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("parameterValues")],R.prototype,"writeParameterValues",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Point/* default */.A,json:{write:!0}})],R.prototype,"pixelSize",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:QuantizationParameters/* default */.A,json:{write:!0}})],R.prototype,"quantizationParameters",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Object],json:{write:!0}})],R.prototype,"rangeValues",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:{source:"relationParam"},write:{target:"relationParam",overridePolicy(){return{enabled:"relation"===this.spatialRelationship}}}}})],R.prototype,"relationParameter",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],R.prototype,"resultType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"returnCentroid",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"returnDistinctValues",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!0,write:!0}})],R.prototype,"returnExceededLimitFeatures",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],R.prototype,"returnGeometry",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"returnQueryGeometry",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"returnM",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],R.prototype,"returnZ",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SpatialReference/* default */.A,json:{write:!0}})],R.prototype,"sourceSpatialReference",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)(v,{ignoreUnknown:!1,name:"spatialRel"})],R.prototype,"spatialRelationship",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{read:{source:"resultOffset"}}})],R.prototype,"start",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("start"),(0,writer/* writer */.K)("num")],R.prototype,"writeStart",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],R.prototype,"sqlFormat",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],R.prototype,"text",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:TimeExtent/* default */.A,json:{write:!0}})],R.prototype,"timeExtent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"timeReferenceUnknownClient",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)(g,{ignoreUnknown:!1}),(0,property/* property */.MZ)({json:{write:{overridePolicy(t){return{enabled:!!t&&null!=this.distance&&this.distance>0}}}}})],R.prototype,"units",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{overridePolicy(t){return{enabled:null!=t||null!=this.start&&this.start>0}}}}})],R.prototype,"where",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("where")],R.prototype,"writeWhere",null),R=w=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.rest.support.Query")],R);const b=R;


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

/***/ 41969:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59851);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19251);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73446);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77542);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var c;const n=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONMap */ .J({count:"count",sum:"sum",min:"min",max:"max",avg:"avg",stddev:"stddev",var:"var",exceedslimit:"exceedslimit",percentile_cont:"percentile-continuous",percentile_disc:"percentile-discrete",EnvelopeAggregate:"envelope-aggregate",CentroidAggregate:"centroid-aggregate",ConvexHullAggregate:"convex-hull-aggregate"});let p=c=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY{constructor(t){super(t),this.maxPointCount=void 0,this.maxRecordCount=void 0,this.maxVertexCount=void 0,this.onStatisticField=null,this.outStatisticFieldName=null,this.statisticType=null,this.statisticParameters=null}writeStatisticParameters(t,e){"percentile-continuous"!==this.statisticType&&"percentile-discrete"!==this.statisticType||(e.statisticParameters=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__/* .clone */ .o8)(t))}clone(){return new c({maxPointCount:this.maxPointCount,maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,statisticType:this.statisticType,statisticParameters:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__/* .clone */ .o8)(this.statisticParameters)})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Number,json:{write:!0}})],p.prototype,"maxPointCount",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Number,json:{write:!0}})],p.prototype,"maxRecordCount",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Number,json:{write:!0}})],p.prototype,"maxVertexCount",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:!0}})],p.prototype,"onStatisticField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:!0}})],p.prototype,"outStatisticFieldName",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{read:{source:"statisticType",reader:n.read},write:{target:"statisticType",writer:n.write}}})],p.prototype,"statisticType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Object})],p.prototype,"statisticParameters",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__/* .writer */ .K)("statisticParameters")],p.prototype,"writeStatisticParameters",null),p=c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.rest.support.StatisticDefinition")],p);const m=p;


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

/***/ 26207:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A7: () => (/* binding */ u),
/* harmony export */   Cx: () => (/* binding */ c),
/* harmony export */   Hk: () => (/* binding */ a),
/* harmony export */   JJ: () => (/* binding */ y),
/* harmony export */   UK: () => (/* binding */ S),
/* harmony export */   jM: () => (/* binding */ N),
/* harmony export */   x3: () => (/* binding */ O)
/* harmony export */ });
/* unused harmony export getDefaultSymbol2D */
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68882);
/* harmony import */ var _SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40241);
/* harmony import */ var _SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23369);
/* harmony import */ var _TextSymbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42602);
/* harmony import */ var _defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23173);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const S=_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__/* .defaultPointSymbolJSON */ .Cb),u=_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__/* .defaultPolylineSymbolJSON */ .yM),c=_SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__/* .defaultPolygonSymbolJSON */ .WR),a=_TextSymbol_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__/* .defaultTextSymbolJSON */ .JZ);function J(r){if(null==r)return null;switch(r.type){case"mesh":return null;case"point":case"multipoint":return S;case"polyline":return u;case"polygon":case"extent":return c}return null}const N=_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__/* .errorPointSymbolJSON */ .nC),O=_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__/* .errorPolylineSymbolJSON */ .HW),y=_SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__/* .errorPolygonSymbolJSON */ .b6);


/***/ }),

/***/ 23173:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cb: () => (/* binding */ l),
/* harmony export */   HW: () => (/* binding */ s),
/* harmony export */   JZ: () => (/* binding */ t),
/* harmony export */   WR: () => (/* binding */ S),
/* harmony export */   b6: () => (/* binding */ y),
/* harmony export */   nC: () => (/* binding */ r),
/* harmony export */   yM: () => (/* binding */ o)
/* harmony export */ });
/* unused harmony exports defaultColor, defaultOutlineColor */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const e=[252,146,31,255],i=(/* unused pure expression or super */ null && ([153,153,153,255])),l={type:"esriSMS",style:"esriSMSCircle",size:6,color:e,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},o={type:"esriSLS",style:"esriSLSSolid",width:.75,color:e},S={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},t={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},r={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},s={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},y={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null};


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