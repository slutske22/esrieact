"use strict";
exports.id = 27311;
exports.ids = [27311,49692];
exports.modules = {

/***/ 53244:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54192);
/* harmony import */ var _reactiveUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61985);
/* harmony import */ var _accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81482);
/* harmony import */ var _accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26325);
/* harmony import */ var _accessorSupport_trackingUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89370);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let l=class extends _Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(t){super(t),this.getCollections=null}initialize(){this.addHandles((0,_accessorSupport_trackingUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .autorun */ .fm)((()=>this._refresh()),_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .sync */ .OH))}destroy(){this.getCollections=null}_refresh(){const t=null!=this.getCollections?this.getCollections():null;if(null==t)return void this.removeAll();let o=0;for(const e of t)null!=e&&(o=this._processCollection(o,e));this.splice(o)}_createNewInstance(t){return new _Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(t)}_processCollection(t,o){if(!o)return t;const e=this.itemFilterFunction??(t=>!!t);for(const s of o)if(s){if(e(s)){const o=this.indexOf(s,t);o>=0?o!==t&&this.reorder(s,t):this.add(s,t),++t}if(this.getChildrenFunction){const o=this.getChildrenFunction(s);if(Array.isArray(o))for(const e of o)t=this._processCollection(t,e);else t=this._processCollection(t,o)}}return t}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)()],l.prototype,"getCollections",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)()],l.prototype,"getChildrenFunction",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)()],l.prototype,"itemFilterFunction",void 0),l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__/* .subclass */ .$)("esri.core.CollectionFlattener")],l);


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

/***/ 28208:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $B: () => (/* binding */ t),
/* harmony export */   Qf: () => (/* binding */ i),
/* harmony export */   Qh: () => (/* binding */ u),
/* harmony export */   RS: () => (/* binding */ n),
/* harmony export */   ez: () => (/* binding */ a),
/* harmony export */   lM: () => (/* binding */ e),
/* harmony export */   qK: () => (/* binding */ s)
/* harmony export */ });
/* unused harmony exports baseTypedArrayMemory, estimateFixedArrayMemory */
/* harmony import */ var _typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62088);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(r){return 32+r.length}const n=16;function e(r){if(!r)return 0;let t=s;for(const n in r)r.hasOwnProperty(n)&&(t+=f(r[n],!1));return t}function u(r){if(!r)return 0;if("number"==typeof r[0])return i(r);if(Array.isArray(r))return o(r);let t=s;for(const n in r)r.hasOwnProperty(n)&&(t+=f(r[n]));return t}function o(r){const t=r.length;if(0===t||"number"==typeof r[0])return c(r,8);let n=a;for(let e=0;e<t;e++)n+=f(r[e]);return n}function f(r,e=!0){switch(typeof r){case"object":return e?u(r):s;case"string":return t(r);case"number":return n;case"boolean":return 4;default:return 8}}function i(...t){return t.reduce(((t,e)=>t+(e?(0,_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedArray */ .iu)(e)?e.byteLength+y:Array.isArray(e)?c(e,n):0:0)),0)}function c(r,t){return a+r.length*t}const s=32,a=16,y=145;


/***/ }),

/***/ 16269:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6273);
/* harmony import */ var _memoryEstimations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28208);
/* harmony import */ var _ObjectPool_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39744);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var i;!function(t){t[t.varint=0]="varint",t[t.fixed64=1]="fixed64",t[t.delimited=2]="delimited",t[t.fixed32=5]="fixed32",t[t.unknown=99]="unknown"}(i||(i={}));const s=4294967296,r=new TextDecoder("utf-8"),n=(0,_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("safari")||(0,_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("ios")?6:(0,_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("ff")?12:32;class a{constructor(t,e,s=0,r=(t?t.byteLength:0)){this._tag=0,this._dataType=i.unknown,this._init(t,e,s,r)}_init(t,e,i,s){this._data=t,this._dataView=e,this._pos=i,this._end=s}get usedMemory(){return 64+(0,_memoryEstimations_js__WEBPACK_IMPORTED_MODULE_1__/* .estimateNumberArrayMemory */ .Qf)(this._data)}asUnsafe(){return this}clone(){return new a(this._data,this._dataView,this._pos,this._end)}pos(){return this._pos}move(t){this._pos=t}nextTag(t){for(;;){if(this._pos===this._end)return!1;const e=this._decodeVarint();if(this._tag=e>>3,this._dataType=7&e,!t||t===this._tag)break;this.skip()}return!0}next(){if(this._pos===this._end)return!1;const t=this._decodeVarint();return this._tag=t>>3,this._dataType=7&t,!0}empty(){return this._pos>=this._end}tag(){return this._tag}getInt32(){return this._decodeVarint()}getInt64(){return this._decodeVarint()}getUInt32(){let t=4294967295;if(t=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128)return t;if(t=(t|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128)return t;if(t=(t|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128)return t;if(t=(t|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128)return t;if(t=(t|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128)return t;throw new Error("Varint overflow")}getUInt64(){return this._decodeVarint()}getSInt32(){const t=this.getUInt32();return t>>>1^-(1&t)}getSInt64(){return this._decodeSVarint()}getBool(){const t=0!==this._data[this._pos];return this._skip(1),t}getEnum(){return this._decodeVarint()}getFixed64(){const t=this._dataView,e=this._pos,i=t.getUint32(e,!0)+t.getUint32(e+4,!0)*s;return this._skip(8),i}getSFixed64(){const t=this._dataView,e=this._pos,i=t.getUint32(e,!0)+t.getInt32(e+4,!0)*s;return this._skip(8),i}getDouble(){const t=this._dataView.getFloat64(this._pos,!0);return this._skip(8),t}getFixed32(){const t=this._dataView.getUint32(this._pos,!0);return this._skip(4),t}getSFixed32(){const t=this._dataView.getInt32(this._pos,!0);return this._skip(4),t}getFloat(){const t=this._dataView.getFloat32(this._pos,!0);return this._skip(4),t}getString(){const t=this._getLength(),e=this._pos,i=this._toString(this._data,e,e+t);return this._skip(t),i}getBytes(){const t=this._getLength(),e=this._pos,i=this._toBytes(this._data,e,e+t);return this._skip(t),i}getLength(){return this._getLengthUnsafe()}processMessageWithArgs(t,e,i,s){const r=this.getMessage(),n=t(r,e,i,s);return r.release(),n}processMessage(t){const e=this.getMessage(),i=t(e);return e.release(),i}getMessage(){const t=this._getLength(),e=a.pool.acquire();return e._init(this._data,this._dataView,this._pos,this._pos+t),this._skip(t),e}release(){a.pool.release(this)}dataType(){return this._dataType}skip(){switch(this._dataType){case i.varint:this._decodeVarint();break;case i.fixed64:this._skip(8);break;case i.delimited:this._skip(this._getLength());break;case i.fixed32:this._skip(4);break;default:throw new Error("Invalid data type!")}}skipLen(t){this._skip(t)}_skip(t){if(this._pos+t>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=t}_decodeVarint(){const t=this._data;let e=this._pos,i=0,s=0;if(this._end-e>=10)do{if(s=t[e++],i|=127&s,!(128&s))break;if(s=t[e++],i|=(127&s)<<7,!(128&s))break;if(s=t[e++],i|=(127&s)<<14,!(128&s))break;if(s=t[e++],i|=(127&s)<<21,!(128&s))break;if(s=t[e++],i+=268435456*(127&s),!(128&s))break;if(s=t[e++],i+=34359738368*(127&s),!(128&s))break;if(s=t[e++],i+=4398046511104*(127&s),!(128&s))break;if(s=t[e++],i+=562949953421312*(127&s),!(128&s))break;if(s=t[e++],i+=72057594037927940*(127&s),!(128&s))break;if(s=t[e++],i+=0x8000000000000000*(127&s),!(128&s))break;throw new Error("Varint too long!")}while(0);else{let r=1;for(;e!==this._end&&(s=t[e],128&s);)++e,i+=(127&s)*r,r*=128;if(e===this._end)throw new Error("Varint overrun!");++e,i+=s*r}return this._pos=e,i}_decodeSVarint(){const t=this._data;let e,i=0,s=0;const r=1&t[this._pos];if(s=t[this._pos++],i|=127&s,!(128&s))return r?-(i+1)/2:i/2;if(s=t[this._pos++],i|=(127&s)<<7,!(128&s))return r?-(i+1)/2:i/2;if(s=t[this._pos++],i|=(127&s)<<14,!(128&s))return r?-(i+1)/2:i/2;if(s=t[this._pos++],i|=(127&s)<<21,!(128&s))return r?-(i+1)/2:i/2;if(s=t[this._pos++],i+=268435456*(127&s),!(128&s))return r?-(i+1)/2:i/2;if(s=t[this._pos++],i+=34359738368*(127&s),!(128&s))return r?-(i+1)/2:i/2;if(s=t[this._pos++],i+=4398046511104*(127&s),!(128&s))return r?-(i+1)/2:i/2;if(e=BigInt(i),s=t[this._pos++],e+=0x2000000000000n*BigInt(127&s),!(128&s))return Number(r?-(e+1n)/2n:e/2n);if(s=t[this._pos++],e+=0x100000000000000n*BigInt(127&s),!(128&s))return Number(r?-(e+1n)/2n:e/2n);if(s=t[this._pos++],e+=0x8000000000000000n*BigInt(127&s),!(128&s))return Number(r?-(e+1n)/2n:e/2n);throw new Error("Varint too long!")}_getLength(){if(this._dataType!==i.delimited)throw new Error("Not a delimited data type!");return this._decodeVarint()}_getLengthUnsafe(){return this.getUInt32()}_toString(t,e,i){if((i=Math.min(this._end,i))-e>n){const s=t.subarray(e,i);return r.decode(s)}let s="",a="";for(let r=e;r<i;++r){const e=t[r];128&e?a+="%"+e.toString(16):(s+=decodeURIComponent(a)+String.fromCharCode(e),a="")}return a.length&&(s+=decodeURIComponent(a)),s}_toBytes(t,e,i){return i=Math.min(this._end,i),new Uint8Array(t.buffer,e,i-e)}static{this.pool=new _ObjectPool_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(a,void 0,(t=>{t._data=null,t._dataView=null}))}}


/***/ }),

/***/ 43861:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  O7: () => (/* binding */ P),
  el: () => (/* binding */ R)
});

// UNUSED EXPORTS: getDenormalizedExtent, normalizeMapX, straightLineDensify

// EXTERNAL MODULE: ./node_modules/@arcgis/core/config.js
var config = __webpack_require__(32083);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(62991);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Polygon.js
var Polygon = __webpack_require__(65648);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Polyline.js
var Polyline = __webpack_require__(38648);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/normalizeUtilsCommon.js
var normalizeUtilsCommon = __webpack_require__(75981);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(67488);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/webMercatorUtils.js
var webMercatorUtils = __webpack_require__(64672);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(38116);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/jsonUtils.js
var jsonUtils = __webpack_require__(56053);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/utils.js
var utils = __webpack_require__(36321);
;// ./node_modules/@arcgis/core/rest/geometryService/cut.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function i(i,n,p,m){const a=(0,utils/* parseUrl */.Dl)(i),u=n[0].spatialReference,c={...m,responseType:"json",query:{...a.query,f:"json",sr:(0,spatialReferenceUtils/* srToRESTValue */.YX)(u),target:JSON.stringify({geometryType:(0,jsonUtils/* getJsonType */.$B)(n[0]),geometries:n}),cutter:JSON.stringify(p)}},f=await (0,request/* default */.A)(a.path+"/cut",c),{cutIndexes:y,geometries:g=[]}=f.data;return{cutIndexes:y,geometries:g.map((e=>{const t=(0,jsonUtils/* fromJSON */.rS)(e);return t.spatialReference=u,t}))}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(19759);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/geometryService/utils.js
var geometryService_utils = __webpack_require__(96905);
;// ./node_modules/@arcgis/core/rest/geometryService/simplify.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function m(m,p,f){const n="string"==typeof m?(0,urlUtils/* urlToObject */.An)(m):m,a=p[0].spatialReference,u=(0,jsonUtils/* getJsonType */.$B)(p[0]),l={...f,query:{...n.query,f:"json",sr:(0,spatialReferenceUtils/* srToRESTValue */.YX)(a),geometries:JSON.stringify((0,geometryService_utils/* encodeGeometries */.X)(p))}},{data:y}=await (0,request/* default */.A)(n.path+"/simplify",l);return (0,geometryService_utils/* decodeGeometries */.V)(y.geometries,u,a)}

;// ./node_modules/@arcgis/core/geometry/support/normalizeUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const normalizeUtils_m=()=>Logger/* default */.A.getLogger("esri.geometry.support.normalizeUtils");function g(t){return"polygon"===t.type}function y(t){return"polygon"===t[0].type}function x(t){return"polyline"===t[0].type}function d(t){const e=[];let n=0,o=0;for(let s=0;s<t.length;s++){const r=t[s];let i=null;for(let t=0;t<r.length;t++)i=r[t],e.push(i),0===t?(n=i[0],o=n):(n=Math.min(n,i[0]),o=Math.max(o,i[0]));i&&e.push([(n+o)/2,0])}return e}function M(t,n){if(!(t instanceof Polyline/* default */.A||t instanceof Polygon/* default */.A)){const t="straightLineDensify: the input geometry is neither polyline nor polygon";throw normalizeUtils_m().error(t),new Error/* default */.A("internal:geometry",t)}const r=(0,normalizeUtilsCommon/* getGeometryParts */.r8)(t),i=[];for(const e of r){const t=[];i.push(t),t.push([e[0][0],e[0][1]]);for(let o=0;o<e.length-1;o++){const s=e[o][0],r=e[o][1],i=e[o+1][0],l=e[o+1][1],c=Math.sqrt((i-s)*(i-s)+(l-r)*(l-r)),f=(l-r)/c,u=(i-s)/c,p=c/n;if(p>1){for(let l=1;l<=p-1;l++){const e=l*n,o=u*e+s,i=f*e+r;t.push([o,i])}const e=(c+Math.floor(p-1)*n)/2,o=u*e+s,i=f*e+r;t.push([o,i])}t.push([i,l])}}return g(t)?new Polygon/* default */.A({rings:i,spatialReference:t.spatialReference}):new Polyline/* default */.A({paths:i,spatialReference:t.spatialReference})}function w(t,e,n){if(e){const e=M(t,1e6);t=(0,webMercatorUtils/* webMercatorToGeographic */.ci)(e,!0)}return n&&(t=(0,normalizeUtilsCommon/* updatePolyGeometry */.kS)(t,n)),t}function b(t,e,n){if(Array.isArray(t)){const o=t[0];if(o>e){const n=(0,normalizeUtilsCommon/* offsetMagnitude */.kd)(o,e);t[0]=o+n*(-2*e)}else if(o<n){const e=(0,normalizeUtilsCommon/* offsetMagnitude */.kd)(o,n);t[0]=o+e*(-2*n)}}else{const o=t.x;if(o>e){const n=(0,normalizeUtilsCommon/* offsetMagnitude */.kd)(o,e);t=t.clone().offset(n*(-2*e),0)}else if(o<n){const e=(0,normalizeUtilsCommon/* offsetMagnitude */.kd)(o,n);t=t.clone().offset(e*(-2*n),0)}}return t}function j(t,e){let n=-1;for(let o=0;o<e.cutIndexes.length;o++){const s=e.cutIndexes[o],r=e.geometries[o],l=(0,normalizeUtilsCommon/* getGeometryParts */.r8)(r);for(let t=0;t<l.length;t++){const e=l[t];e.some((n=>{if(n[0]<180)return!0;{let n=0;for(let t=0;t<e.length;t++){const o=e[t][0];n=o>n?o:n}n=Number(n.toFixed(9));const o=-360*(0,normalizeUtilsCommon/* offsetMagnitude */.kd)(n,180);for(let s=0;s<e.length;s++){const e=r.getPoint(t,s);r.setPoint(t,s,e.clone().offset(o,0))}return!0}}))}if(s===n){if(y(t))for(const e of (0,normalizeUtilsCommon/* getGeometryParts */.r8)(r))t[s]=t[s].addRing(e);else if(x(t))for(const e of (0,normalizeUtilsCommon/* getGeometryParts */.r8)(r))t[s]=t[s].addPath(e)}else n=s,t[s]=r}return t}async function R(e,n,c){if(!Array.isArray(e))return R([e],n);n&&"string"!=typeof n&&normalizeUtils_m().warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const p="string"==typeof n?n:n?.url??config/* default */.A.geometryServiceUrl;let g,y,x,d,M,v,P,L,U=0;const z=[],A=[];for(const t of e)if(null!=t)if(g||(g=t.spatialReference,y=(0,spatialReferenceUtils/* getInfo */.Vp)(g),x=g.isWebMercator,v=x?102100:4326,d=normalizeUtilsCommon/* cutParams */.j7[v].maxX,M=normalizeUtilsCommon/* cutParams */.j7[v].minX,P=normalizeUtilsCommon/* cutParams */.j7[v].plus180Line,L=normalizeUtilsCommon/* cutParams */.j7[v].minus180Line),y)if("mesh"===t.type)A.push(t);else if("point"===t.type)A.push(b(t.clone(),d,M));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((t=>b(t,d,M))),A.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,y);A.push(e.rings?new Polygon/* default */.A(e):e)}else if(t.extent){const e=t.extent,n=(0,normalizeUtilsCommon/* offsetMagnitude */.kd)(e.xmin,M)*(2*d);let o=0===n?t.clone():(0,normalizeUtilsCommon/* updatePolyGeometry */.kS)(t.clone(),n);e.offset(n,0);let{xmin:s,xmax:r}=e;s=Number(s.toFixed(9)),r=Number(r.toFixed(9)),e.intersects(P)&&r!==d?(U=r>U?r:U,o=w(o,x),z.push(o),A.push("cut")):e.intersects(L)&&s!==M?(U=r*(2*d)>U?r*(2*d):U,o=w(o,x,360),z.push(o),A.push("cut")):A.push(o)}else A.push(t.clone());else A.push(t);else A.push(t);let F=(0,normalizeUtilsCommon/* offsetMagnitude */.kd)(U,d),N=-90;const S=F,k=new Polyline/* default */.A;for(;F>0;){const t=360*F-180;k.addPath([[t,N],[t,-1*N]]),N*=-1,F--}if(z.length>0&&S>0){const t=j(z,await i(p,z,k,c)),n=[],o=[];for(let i=0;i<A.length;i++){const s=A[i];if("cut"!==s)o.push(s);else{const s=t.shift(),r=e[i];null!=r&&"polygon"===r.type&&r.rings&&r.rings.length>1&&s.rings.length>=r.rings.length?(n.push(s),o.push("simplify")):o.push(x?(0,webMercatorUtils/* geographicToWebMercator */.Gh)(s):s)}}if(!n.length)return o;const s=await m(p,n,c),r=[];for(let e=0;e<o.length;e++){const t=o[e];"simplify"!==t?r.push(t):r.push(x?(0,webMercatorUtils/* geographicToWebMercator */.Gh)(s.shift()):s.shift())}return r}const C=[];for(let t=0;t<A.length;t++){const e=A[t];if("cut"!==e)C.push(e);else{const t=z.shift();C.push(!0===x?(0,webMercatorUtils/* geographicToWebMercator */.Gh)(t):t)}}return C}function v(t){if(!t)return null;const e=t.extent;if(!e)return null;const n=t.spatialReference&&f(t.spatialReference);if(!n)return e;const[o,s]=n.valid,r=2*s,{width:i}=e;let l,{xmin:c,xmax:u}=e;if([c,u]=[u,c],"extent"===t.type||0===i||i<=s||i>r||c<o||u>s)return e;switch(t.type){case"polygon":if(!(t.rings.length>1))return e;l=d(t.rings);break;case"polyline":if(!(t.paths.length>1))return e;l=d(t.paths);break;case"multipoint":l=t.points}const p=e.clone();for(let f=0;f<l.length;f++){let t=l[f][0];t<0?(t+=s,u=Math.max(t,u)):(t-=s,c=Math.min(t,c))}return p.xmin=c,p.xmax=u,p.width<i?(p.xmin-=s,p.xmax-=s,p):e}function P(t,e,n){const o=(0,spatialReferenceUtils/* getInfo */.Vp)(n);if(null==o)return t;const[s,r]=o.valid,i=2*r;let l=0,c=0;e>r?l=Math.ceil(Math.abs(e-r)/i):e<s&&(l=-Math.ceil(Math.abs(e-s)/i)),t>r?c=Math.ceil(Math.abs(t-r)/i):t<s&&(c=-Math.ceil(Math.abs(t-s)/i));let u=t+(l-c)*i;const p=u-e;return p>r?u-=i:p<s&&(u+=i),u}function L(t,e){const n=f(e);if(n){const[e,o]=n.valid,s=o-e;if(t<e)for(;t<e;)t+=s;if(t>o)for(;t>o;)t-=s}return t}


/***/ }),

/***/ 75981:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j7: () => (/* binding */ r),
/* harmony export */   kS: () => (/* binding */ s),
/* harmony export */   kd: () => (/* binding */ i),
/* harmony export */   r8: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _Polyline_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38648);
/* harmony import */ var _SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44153);
/* harmony import */ var _jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56053);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const r={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new _Polyline_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.WebMercator}),minus180Line:new _Polyline_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new _Polyline_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({paths:[[[180,-180],[180,180]]],spatialReference:_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.WGS84}),minus180Line:new _Polyline_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({paths:[[[-180,-180],[-180,180]]],spatialReference:_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.WGS84})}};function i(e,n){return Math.ceil((e-n)/(2*n))}function s(e,n){const t=o(e);for(const r of t)for(const e of r)e[0]+=n;return e}function o(e){return (0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isPolygon */ .Bi)(e)?e.rings:e.paths}


/***/ }),

/***/ 49692:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ G)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(38116);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(62991);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/loadAll.js
var loadAll = __webpack_require__(52686);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(33125);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js + 1 modules
var promiseUtils = __webpack_require__(49175);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(8636);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(25376);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(48524);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/PropertyOrigin.js
var PropertyOrigin = __webpack_require__(91101);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(8000);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/scaleUtils.js
var scaleUtils = __webpack_require__(84459);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(67488);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/Layer.js + 1 modules
var Layer = __webpack_require__(41247);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/APIKeyMixin.js
var APIKeyMixin = __webpack_require__(94763);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ArcGISMapService.js
var ArcGISMapService = __webpack_require__(69543);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ArcGISService.js
var ArcGISService = __webpack_require__(30179);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/BlendLayer.js
var BlendLayer = __webpack_require__(20923);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/CustomParametersMixin.js
var CustomParametersMixin = __webpack_require__(27303);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(90296);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/PortalLayer.js
var PortalLayer = __webpack_require__(60368);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/RefreshableLayer.js + 1 modules
var RefreshableLayer = __webpack_require__(77222);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js
var ScaleRangeLayer = __webpack_require__(22111);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/SublayersOwner.js
var SublayersOwner = __webpack_require__(89856);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/TemporalLayer.js
var TemporalLayer = __webpack_require__(2960);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/commonProperties.js
var commonProperties = __webpack_require__(9014);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(93741);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/sql.js
var sql = __webpack_require__(80189);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
;// ./node_modules/@arcgis/core/layers/support/floorFilterUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function o(o){const n=o.layer;if("floorInfo"in n&&n.floorInfo?.floorField&&"floors"in o.view){return l(o.view.floors,n.floorInfo.floorField)}return null}function n(o,n){return"floorInfo"in n&&n.floorInfo?.floorField?l(o,n.floorInfo.floorField):null}function l(o,n){if(!o?.length)return null;const l=o.filter((o=>""!==o)).map((o=>`'${o}'`));return l.push("''"),`${n} IN (${l.join(",")}) OR ${n} IS NULL`}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/sublayerUtils.js
var sublayerUtils = __webpack_require__(22508);
;// ./node_modules/@arcgis/core/layers/support/ExportImageParameters.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const ExportImageParameters_n={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let y=class extends Accessor/* default */.A{constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const r=n(this.floors,e);return e.toExportImageJSON(r)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,sublayerUtils/* isExportDynamic */.Sk)(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(ExportImageParameters_n[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){const e=!!this.floors?.length,r=this.visibleSublayers.filter((r=>null!=r.definitionExpression||e&&null!=r.floorInfo));return r.length?JSON.stringify(r.reduce(((e,r)=>{const t=n(this.floors,r),i=(0,sql/* sqlAnd */.mA)(t,r.definitionExpression);return null!=i&&(e[r.id]=i),e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const r=this.layer.sublayers,s=this.scale,t=r=>{r.visible&&(0===s||(0,scaleUtils/* isInScaleRange */.zx)(s,r.minScale,r.maxScale))&&(r.sublayers?r.sublayers.forEach(t):e.unshift(r))};r&&r.forEach(t);const i=this._get("visibleSublayers");return!i||i.length!==e.length||i.some(((r,s)=>e[s]!==r))?e:i}toJSON(){const e=this.layer;let r={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?r.dynamicLayers=this.dynamicLayers:r={...r,layers:this.layers,layerDefs:this.layerDefs},r}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],y.prototype,"dynamicLayers",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],y.prototype,"floors",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],y.prototype,"hasDynamicLayers",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],y.prototype,"layer",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],y.prototype,"layers",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],y.prototype,"layerDefs",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number})],y.prototype,"scale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],y.prototype,"version",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],y.prototype,"visibleSublayers",null),y=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.ExportImageParameters")],y);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/imageBitmapUtils.js
var imageBitmapUtils = __webpack_require__(15089);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/Sublayer.js
var Sublayer = __webpack_require__(93221);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/versionUtils.js
var versionUtils = __webpack_require__(23123);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/support/ElevationInfo.js + 1 modules
var ElevationInfo = __webpack_require__(93695);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/TimeExtent.js
var TimeExtent = __webpack_require__(72991);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/time/timeZoneUtils.js + 1 modules
var timeZoneUtils = __webpack_require__(75235);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/webdoc/interfaces.js
var interfaces = __webpack_require__(29759);
;// ./node_modules/@arcgis/core/layers/MapImageLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let k=class extends((0,BlendLayer/* BlendLayer */.dM)((0,TemporalLayer/* TemporalLayer */.e)((0,ScaleRangeLayer/* ScaleRangeLayer */.j)((0,SublayersOwner/* SublayersOwner */.I)((0,ArcGISMapService/* ArcGISMapService */.V)((0,ArcGISService/* ArcGISService */.b)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.A)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)((0,RefreshableLayer/* RefreshableLayer */.J)((0,APIKeyMixin/* APIKeyMixin */.p)((0,CustomParametersMixin/* CustomParametersMixin */.d)(Layer/* default */.A))))))))))))){constructor(...e){super(...e),this._exportImageParameters=new y({layer:this}),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.elevationInfo=new ElevationInfo/* default */.A({mode:"on-the-ground"}),this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null,this._debouncedSaveOperations=(0,promiseUtils/* debounce */.sg)((async(e,r,t)=>{const{save:s,saveAs:i}=await __webpack_require__.e(/* import() */ 42943).then(__webpack_require__.bind(__webpack_require__, 42943));switch(e){case interfaces/* SaveOperationType */.X.SAVE:return s(this,r);case interfaces/* SaveOperationType */.X.SAVE_AS:return i(this,t,r)}}))}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}load(e){const r=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(promiseUtils/* throwIfAbortError */.QP).then((()=>this._fetchService(r)))),Promise.resolve(this)}destroy(){this._exportImageParameters.destroy()}readImageFormat(e,r){const t=r.supportedImageFormatTypes;return t&&t.includes("PNG32")?"png32":"png24"}writeSublayers(e,r,t,s){if(!this.loaded||!e)return;const i=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let o=!1;const a=(0,PropertyOrigin/* nameToId */.aB)(s.origin);let n;if(this.capabilities?.operations.supportsExportMap&&this.capabilities?.exportMap?.supportsDynamicLayers)if(a===PropertyOrigin/* OriginId */.Gr.PORTAL_ITEM){const e=this.createSublayersForOrigin("service").sublayers;o=(0,sublayerUtils/* shouldWriteSublayerStructure */.Zx)(i,e,PropertyOrigin/* OriginId */.Gr.SERVICE)}else if(a>PropertyOrigin/* OriginId */.Gr.PORTAL_ITEM){const e=this.createSublayersForOrigin("portal-item");o=(0,sublayerUtils/* shouldWriteSublayerStructure */.Zx)(i,e.sublayers,(0,PropertyOrigin/* nameToId */.aB)(e.origin)),n=e.originWithPartialOverrides}const p=[],m={writeSublayerStructure:o,...s,minimumWritableOrigin:n};let l=o||this.hasVisibleLayersForOrigin(a);i.forEach((e=>{const r=e.write({},m);p.push(r),l=l||"user"===e.originOf("visible")}));p.some((e=>Object.keys(e).length>1))&&(r.layers=p),l&&(r.visibleLayers=i.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,r,t,s){const i=s?.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian()),this._exportImageParameters.floors=s?.floors??null,this._exportImageParameters.scale=(0,scaleUtils/* getScale */.X_)({extent:e,width:r})*i;const o=this._exportImageParameters.toJSON(),a=!s?.rotation||this.version<10.3?{}:{rotation:-s.rotation},n=e?.spatialReference,p=(0,spatialReferenceUtils/* srToRESTValue */.YX)(n);o.dpi*=i;const m={};if(s?.timeExtent){const{start:e,end:r}=s.timeExtent.toJSON();m.time=e&&r&&e===r?""+e:`${e??"null"},${r??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(m.time="null,null");return{bbox:e?e.xmin+","+e.ymin+","+e.xmax+","+e.ymax:void 0,bboxSR:p,imageSR:p,size:r+","+t,...o,...a,...m}}async fetchImage(e,r,t,s){const{data:i}=await this._fetchImage("image",e,r,t,s);return i}async fetchImageBitmap(e,r,t,s){const{data:i,url:o}=await this._fetchImage("blob",e,r,t,s);return (0,imageBitmapUtils/* createBitmap */.m)(i,o,s?.signal)}async fetchRecomputedExtents(e={}){const t={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:s}=await (0,request/* default */.A)(this.url,t),{extent:i,fullExtent:o,timeExtent:a}=s,n=i||o;return{fullExtent:n&&Extent/* default */.A.fromJSON(n),timeExtent:a&&TimeExtent.T.fromJSON({start:a[0],end:a[1]})}}loadAll(){return (0,loadAll/* loadAll */.g)(this,(e=>{e(this.allSublayers),e(this.subtables)}))}async save(e){return this._debouncedSaveOperations(interfaces/* SaveOperationType */.X.SAVE,e)}async saveAs(e,r){return this._debouncedSaveOperations(interfaces/* SaveOperationType */.X.SAVE_AS,r,e)}serviceSupportsSpatialReference(e){return (0,versionUtils/* serviceSupportsSpatialReference */.D)(this,e)}async _fetchImage(e,s,i,o,a){const p={responseType:e,signal:a?.signal??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(s,i,o,a),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},m=this.parsedUrl.path+"/export";if(null!=p.query?.dynamicLayers&&!this.capabilities?.exportMap?.supportsDynamicLayers)throw new Error/* default */.A("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:p.query});try{const{data:e}=await (0,request/* default */.A)(m,p);return{data:e,url:m}}catch(l){if((0,promiseUtils/* isAbortError */.zf)(l))throw l;throw new Error/* default */.A("mapimagelayer:image-fetch-error",`Unable to load image: ${m}`,{error:l})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:s}=await (0,request/* default */.A)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});s&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}hasVisibleLayersForOrigin(e){return!(null==e||!this.sublayersSourceJSON[e]?.visibleLayers)}};(0,tslib_es6._)([(0,property/* property */.MZ)((0,timeZoneUtils/* timeZoneProperty */.P6)("dateFieldsTimeReference"))],k.prototype,"dateFieldsTimeZone",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean})],k.prototype,"datesInUnknownTimezone",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],k.prototype,"dpi",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],k.prototype,"elevationInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],k.prototype,"gdbVersion",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],k.prototype,"imageFormat",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("imageFormat",["supportedImageFormatTypes"])],k.prototype,"readImageFormat",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],k.prototype,"imageMaxHeight",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],k.prototype,"imageMaxWidth",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],k.prototype,"imageTransparency",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],k.prototype,"isReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1,write:!1}})],k.prototype,"labelsVisible",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["ArcGISMapServiceLayer"]})],k.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1,write:!1}})],k.prototype,"popupEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)((0,timeZoneUtils/* timeZoneProperty */.P6)("preferredTimeReference"))],k.prototype,"preferredTimeZone",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],k.prototype,"sourceJSON",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:{ignoreOrigin:!0}}})],k.prototype,"sublayers",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("sublayers",{layers:{type:[Sublayer/* default */.A]},visibleLayers:{type:[ensureType/* Integer */.jz]}})],k.prototype,"writeSublayers",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide","hide-children"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],k.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1},readOnly:!0,value:"map-image"})],k.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* url */.OZ)],k.prototype,"url",void 0),k=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.MapImageLayer")],k);const G=k;


/***/ }),

/***/ 85747:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N3: () => (/* binding */ o),
/* harmony export */   Om: () => (/* binding */ s)
/* harmony export */ });
/* unused harmony export OptimizedFeatureWithGeometry */
/* harmony import */ var _core_memoryEstimations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28208);
/* harmony import */ var _centroid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91658);
/* harmony import */ var _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65977);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class s{constructor(t=null,e={},r,s,o=0){this.geometry=t,this.attributes=e,this.centroid=r,this.objectId=s,this.displayId=o}static fromJSON(t){const e=t.geometry?_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fromJSON(t.geometry):null,o=t.centroid?_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fromJSON(t.centroid):null,i=t.objectId;return new s(e,t.attributes,o,i)}weakClone(){const t=new s(this.geometry,this.attributes,this.centroid,this.objectId);return t.displayId=this.displayId,t}clone(){const t=this.geometry?.clone(),e=new s(t,{...this.attributes},this.centroid?.clone(),this.objectId);return e.displayId=this.displayId,e}ensureCentroid(t){return this.centroid??=(0,_centroid_js__WEBPACK_IMPORTED_MODULE_2__/* .getCentroidOptimizedGeometry */ .Q)(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,this.geometry,t.hasZ,t.hasM),this.centroid}get usedMemory(){return 128+(0,_core_memoryEstimations_js__WEBPACK_IMPORTED_MODULE_0__/* .estimateAttributesMemory */ .lM)(this.attributes)+(this.geometry?.usedMemory??0)}}function o(t){return!!t.geometry?.coords?.length}class i extends (/* unused pure expression or super */ null && (s)){}


/***/ }),

/***/ 97011:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class e{constructor(){this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const t=new e;return t.globalIdFieldName=this.globalIdFieldName,t.geohashFieldName=this.geohashFieldName,t.geometryProperties=this.geometryProperties,t.geometryType=this.geometryType,t.spatialReference=this.spatialReference,t.hasZ=this.hasZ,t.hasM=this.hasM,t.features=this.features,t.fields=this.fields,t.transform=this.transform,t.exceededTransferLimit=this.exceededTransferLimit,t.uniqueIdField=this.uniqueIdField,t.queryGeometry=this.queryGeometry,t.queryGeometryType=this.queryGeometryType,t}}


/***/ }),

/***/ 65977:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_memoryEstimations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28208);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const s=2;class e{constructor(t=[],s=[]){this.lengths=t??[],this.coords=s??[]}static fromJSON(t){return new e(t.lengths,t.coords)}static fromRect(t){const[s,o,r,h]=t,n=r-s,i=h-o;return new e([5],[s,o,n,0,0,i,-n,0,0,-i])}get isPoint(){return 0===this.lengths.length&&this.coords.length>=2}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((t,s)=>t+s))}get usedMemory(){return 64+(0,_core_memoryEstimations_js__WEBPACK_IMPORTED_MODULE_0__/* .estimateNumberArrayMemory */ .Qf)(this.lengths,this.coords)}area(){let t=0,e=0;if(!this.lengths.length)return 0;for(let o=0;o<this.lengths.length;o++){const r=this.lengths[o];if(r<3)continue;let h=this.coords[s*e],n=this.coords[s*e+1];for(let o=1;o<r;o+=1){const r=this.coords[s*(o+e)],i=this.coords[s*(o+e)+1];t+=-.5*(r-h)*(i+n),h=r,n=i}e+=r}return t}forEachVertex(t){let e=0;this.lengths.length||t(this.coords[0],this.coords[1]);for(let o=0;o<this.lengths.length;o++){const r=this.lengths[o];for(let o=0;o<r;o++){t(this.coords[s*(o+e)],this.coords[s*(o+e)+1])}e+=r}}deltaDecode(){const t=this.clone(),{coords:s,lengths:e}=t;let o=0;for(const r of e){for(let t=1;t<r;t++)s[2*(o+t)]+=s[2*(o+t)-2],s[2*(o+t)+1]+=s[2*(o+t)-1];o+=r}return t}clone(t){if(0===this.lengths.length)return new e([],[this.coords[0],this.coords[1]]);const o=(0===this.lengths.length?1:this.lengths.reduce(((t,s)=>t+s)))*s,r=this.coords.slice(0,o);return t?(t.set(r),new e(this.lengths,t)):new e(Array.from(this.lengths),Array.from(r))}}


/***/ }),

/***/ 91658:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony export lineCentroid */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(t,n){return t?n?4:3:n?3:2}function n(n,I,u,o){if(!I?.lengths.length)return null;n.lengths.length&&(n.lengths.length=0),n.coords.length&&(n.coords.length=0);const N=n.coords,l=[],s=u?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:c,coords:T}=I,f=t(u,o);let h=0;for(const t of c){const n=e(s,T,h,t,u,o);n&&l.push(n),h+=t*f}if(l.sort(((t,n)=>{let e=t[2]-n[2];return 0===e&&u&&(e=t[4]-n[4]),e})),l.length){let t=6*l[0][2];N[0]=l[0][0]/t,N[1]=l[0][1]/t,u&&(t=6*l[0][4],N[2]=0!==t?l[0][3]/t:0),(N[0]<s[0]||N[0]>s[1]||N[1]<s[2]||N[1]>s[3]||u&&(N[2]<s[4]||N[2]>s[5]))&&(N.length=0)}if(!N.length){const t=I.lengths[0]?r(T,0,c[0],u,o):null;if(!t)return null;N[0]=t[0],N[1]=t[1],u&&t.length>2&&(N[2]=t[2])}return n}function e(n,e,r,I,u,o){const N=t(u,o);let l=r,s=r+N,c=0,T=0,f=0,h=0,i=0;for(let t=0,g=I-1;t<g;t++,l+=N,s+=N){const t=e[l],r=e[l+1],I=e[l+2],o=e[s],N=e[s+1],E=e[s+2];let g=t*N-o*r;h+=g,c+=(t+o)*g,T+=(r+N)*g,u&&(g=t*E-o*I,f+=(I+E)*g,i+=g),t<n[0]&&(n[0]=t),t>n[1]&&(n[1]=t),r<n[2]&&(n[2]=r),r>n[3]&&(n[3]=r),u&&(I<n[4]&&(n[4]=I),I>n[5]&&(n[5]=I))}if(h>0&&(h*=-1),i>0&&(i*=-1),!h)return null;const E=[c,T,.5*h];return u&&(E[3]=f,E[4]=.5*i),E}function r(n,e,r,l,s){const c=t(l,s);let T=e,f=e+c,h=0,i=0,E=0,g=0;for(let t=0,b=r-1;t<b;t++,T+=c,f+=c){const t=n[T],e=n[T+1],r=n[T+2],s=n[f],c=n[f+1],b=n[f+2],m=l?u(t,e,r,s,c,b):I(t,e,s,c);if(m)if(h+=m,l){const n=N(t,e,r,s,c,b);i+=m*n[0],E+=m*n[1],g+=m*n[2]}else{const n=o(t,e,s,c);i+=m*n[0],E+=m*n[1]}}return h>0?l?[i/h,E/h,g/h]:[i/h,E/h]:r>0?l?[n[e],n[e+1],n[e+2]]:[n[e],n[e+1]]:null}function I(t,n,e,r){const I=e-t,u=r-n;return Math.sqrt(I*I+u*u)}function u(t,n,e,r,I,u){const o=r-t,N=I-n,l=u-e;return Math.sqrt(o*o+N*N+l*l)}function o(t,n,e,r){return[t+.5*(e-t),n+.5*(r-n)]}function N(t,n,e,r,I,u){return[t+.5*(r-t),n+.5*(I-n),e+.5*(u-e)]}


/***/ }),

/***/ 5525:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B2: () => (/* binding */ T),
/* harmony export */   BW: () => (/* binding */ D),
/* harmony export */   Ch: () => (/* binding */ wt),
/* harmony export */   DF: () => (/* binding */ E),
/* harmony export */   Di: () => (/* binding */ rt),
/* harmony export */   E2: () => (/* binding */ ot),
/* harmony export */   IE: () => (/* binding */ b),
/* harmony export */   Nl: () => (/* binding */ gt),
/* harmony export */   Q4: () => (/* binding */ Gt),
/* harmony export */   Rk: () => (/* binding */ Nt),
/* harmony export */   Ux: () => (/* binding */ ut),
/* harmony export */   Ye: () => (/* binding */ X),
/* harmony export */   ZF: () => (/* binding */ ft),
/* harmony export */   eU: () => (/* binding */ tt),
/* harmony export */   eY: () => (/* binding */ ht),
/* harmony export */   hK: () => (/* binding */ xt),
/* harmony export */   jH: () => (/* binding */ mt),
/* harmony export */   jQ: () => (/* binding */ Mt),
/* harmony export */   kz: () => (/* binding */ dt),
/* harmony export */   oN: () => (/* binding */ st),
/* harmony export */   q3: () => (/* binding */ at),
/* harmony export */   qK: () => (/* binding */ $),
/* harmony export */   qN: () => (/* binding */ R),
/* harmony export */   z5: () => (/* binding */ Q),
/* harmony export */   zv: () => (/* binding */ lt)
/* harmony export */ });
/* unused harmony exports convertFromMultipoint, convertFromMultipointFeatures, convertFromPointFeatures, convertFromPolyline, convertFromPolylineFeatures, convertToFeatures, convertToMultipointFeatures, getQuantizedBoundsOptimizedGeometry, getSignedQuantizedRingArea, removeCollinearVertices, unquantizeValue, unquantizeX, unquantizeY */
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62991);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80861);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57725);
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46373);
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2532);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56053);
/* harmony import */ var _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85747);
/* harmony import */ var _OptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97011);
/* harmony import */ var _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65977);
/* harmony import */ var _data_createFeatureId_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62942);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function g(t,e){return t?e?4:3:e?3:2}const d=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getLogger("esri.layers.graphics.featureConversionUtils"),y={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0,esriGeometryMultiPatch:3,esriGeometryEnvelope:0},p=(t,e,n,o,r,s)=>{t[n]=r,t[n+1]=s},M=(t,e,n,o,r,s)=>{t[n]=r,t[n+1]=s,t[n+2]=e[o+2]},I=(t,e,n,o,r,s)=>{t[n]=r,t[n+1]=s,t[n+2]=e[o+3]},w=(t,e,n,o,r,s)=>{t[n]=r,t[n+1]=s,t[n+2]=e[o+2],t[n+3]=e[o+3]};function G(t,e,n,o){if(t){if(n)return e&&o?w:M;if(e&&o)return I}else if(e&&o)return M;return p}function b({scale:t,translate:e},n){return Math.round((n-e[0])/t[0])}function T({scale:t,translate:e},n){return Math.round((e[1]-n)/t[1])}function N({scale:t,translate:e},n){return Math.round((n-e[0])/t[0])}function P({scale:t,translate:e},n){return Math.round((n-e[1])/t[1])}function x(t,e){return Z(t,e,0)}function F(t,e){return Z(t,-e,1)}function Z({scale:t,translate:e},n,o){return n*t[o]+e[o]}function E(t,e,n){return t?e?n?v(t):z(t):n?Y(t):j(t):null}function j(t){const e=t.coords;return{x:e[0],y:e[1]}}function k(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t}function z(t){const e=t.coords;return{x:e[0],y:e[1],z:e[2]}}function V(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t.coords[2]=e.z,t}function Y(t){const e=t.coords;return{x:e[0],y:e[1],m:e[2]}}function _(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t.coords[2]=e.m,t}function v(t){const e=t.coords;return{x:e[0],y:e[1],z:e[2],m:e[3]}}function L(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t.coords[2]=e.z,t.coords[3]=e.m,t}function O(t,e,n,o){let r=j;n&&o?r=v:n?r=z:o&&(r=Y);for(const s of e){const{geometry:e,attributes:n}=s,o=null!=e?r(e):null;t.push({attributes:n,geometry:o})}return t}function S(t,e){return t&&e?L:t?V:e?_:k}function U(t,e,n,o,r){const s=S(n,o);for(const u of e){const e=null!=u.geometry?s(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,u.geometry):null;t.push(new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_5__/* .OptimizedFeature */ .Om(e,u.attributes,null,(0,_data_createFeatureId_js__WEBPACK_IMPORTED_MODULE_7__/* .createFeatureId */ .W)(u,r)))}return t}function R(t,e,n=S(null!=e.z,null!=e.m)){return n(t,e)}function A(t,e,n,o){for(const{geometry:r,attributes:s}of e)t.push({attributes:s,geometry:null!=r?$(r,n,o):null});return t}function $(t,e,n){if(null==t)return null;const o=g(e,n),r=[];for(let s=0;s<t.coords.length;s+=o){const e=[];for(let n=0;n<o;n++)e.push(t.coords[s+n]);r.push(e)}return e?n?{points:r,hasZ:e,hasM:n}:{points:r,hasZ:e}:n?{points:r,hasM:n}:{points:r}}function q(t,e,n,o,r){const s=g(n,o);for(const u of e){const e=null!=u.geometry?B(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,u.geometry,s):null;t.push(new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_5__/* .OptimizedFeature */ .Om(e,u.attributes,null,(0,_data_createFeatureId_js__WEBPACK_IMPORTED_MODULE_7__/* .createFeatureId */ .W)(u,r)))}return t}function B(t,e,n=g(e.hasZ,e.hasM)){t.lengths[0]=e.points.length;const o=t.coords;let r=0;for(const s of e.points)for(let t=0;t<n;t++)o[r++]=s[t];return t}function C(t,e,n,o){for(const{geometry:r,attributes:s}of e)t.push({attributes:s,geometry:null!=r?D(r,n,o):null});return t}function D(t,e,n){if(!t)return null;const o=g(e,n),{coords:r,lengths:s}=t,u=[];let l=0;for(const c of s){const t=[];for(let e=0;e<c;e++){const e=[];for(let t=0;t<o;t++)e.push(r[l++]);t.push(e)}u.push(t)}return e?n?{paths:u,hasZ:e,hasM:n}:{paths:u,hasZ:e}:n?{paths:u,hasM:n}:{paths:u}}function H(t,e,n,o,r){const s=g(n,o);for(const u of e){const e=null!=u.geometry?J(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,u.geometry,s):null,n=null!=u.centroid?R(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,u.centroid):null;t.push(new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_5__/* .OptimizedFeature */ .Om(e,u.attributes,n,(0,_data_createFeatureId_js__WEBPACK_IMPORTED_MODULE_7__/* .createFeatureId */ .W)(u,r)))}return t}function J(t,e,n=g(e.hasZ,e.hasM)){const{lengths:o,coords:r}=t;let s=0;for(const u of e.paths){for(const t of u)for(let e=0;e<n;e++)r[s++]=t[e];o.push(u.length)}return t}function K(t,e,n,o){for(const{geometry:r,attributes:s,centroid:u}of e){const e=null!=r?Q(r,n,o):null;if(null!=u){const n=j(u);t.push({attributes:s,centroid:n,geometry:e})}else t.push({attributes:s,geometry:e})}return t}function Q(t,e,n){if(!t)return null;const o=g(e,n),{coords:r,lengths:s}=t,u=[];let l=0;for(const c of s){const t=[];for(let e=0;e<c;e++){const e=[];for(let t=0;t<o;t++)e.push(r[l++]);t.push(e)}u.push(t)}return e?n?{rings:u,hasZ:e,hasM:n}:{rings:u,hasZ:e}:n?{rings:u,hasM:n}:{rings:u}}function W(t,e,n,o,r){for(const s of e){const e=null!=s.geometry?X(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,s.geometry,n,o):null,u=(0,_data_createFeatureId_js__WEBPACK_IMPORTED_MODULE_7__/* .createFeatureId */ .W)(s,r);null!=s.centroid?t.push(new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_5__/* .OptimizedFeature */ .Om(e,s.attributes,k(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,s.centroid),u)):t.push(new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_5__/* .OptimizedFeature */ .Om(e,s.attributes,null,u))}return t}function X(t,e,n=e.hasZ,o=e.hasM){return tt(t,e.rings,n,o)}function tt(t,e,n,o){const r=g(n,o),{lengths:s,coords:u}=t;let l=0;Ft(t);for(const c of e){for(const t of c)for(let e=0;e<r;e++)u[l++]=t[e];s.push(c.length)}return t}const et=[],nt=[];function ot(t,e,n,o,r){et[0]=t;const[s]=rt(nt,et,e,n,o,r);return Zt(et),Zt(nt),s}function rt(e,n,o,r,s,u){if(Zt(e),!o){for(const t of n){const n=(0,_data_createFeatureId_js__WEBPACK_IMPORTED_MODULE_7__/* .createFeatureId */ .W)(t,u);e.push(new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_5__/* .OptimizedFeature */ .Om(null,t.attributes,null,n))}return e}switch(o){case"esriGeometryPoint":return U(e,n,r,s,u);case"esriGeometryMultipoint":return q(e,n,r,s,u);case"esriGeometryPolyline":return H(e,n,r,s,u);case"esriGeometryPolygon":case"esriGeometryMultiPatch":return W(e,n,r,s,u);default:d().error("convertToFeatureSet:unknown-geometry",new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("internal:geometry",`Unable to parse unknown geometry type '${o}'`)),Zt(e)}return e}function st(t,e,n,o){nt[0]=t,it(et,nt,e,n,o);const r=et[0];return Zt(et),Zt(nt),r}function ut(e,n,o){if(null==e)return null;const r=new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A;if("hasZ"in e&&null==n&&(n=e.hasZ),"hasM"in e&&null==o&&(o=e.hasM),(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isPoint */ .fT)(e)){return S(null!=n?n:null!=e.z,null!=o?o:null!=e.m)(r,e)}return (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isPolygon */ .Bi)(e)?X(r,e,n,o):(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isPolyline */ .Rg)(e)?J(r,e,g(n,o)):(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isMultipoint */ .U9)(e)?B(r,e,g(n,o)):void d().error("convertFromGeometry:unknown-geometry",new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("internal:geometry",`Unable to parse unknown geometry type '${e}'`))}function lt(e,n,o,r){const s=e&&("coords"in e?e:e.geometry);if(null==s)return null;switch(n){case"esriGeometryPoint":{let t=j;return o&&r?t=v:o?t=z:r&&(t=Y),t(s)}case"esriGeometryMultipoint":return $(s,o,r);case"esriGeometryPolyline":return D(s,o,r);case"esriGeometryPolygon":return Q(s,o,r);default:return d().error("convertToGeometry:unknown-geometry",new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("internal:geometry",`Unable to parse unknown geometry type '${n}'`)),null}}function ct(t,e){for(const n of e)t.push({attributes:n.attributes});return t}function it(e,n,o,r,s){if(Zt(e),null==o)return ct(e,n);switch(o){case"esriGeometryPoint":return O(e,n,r,s);case"esriGeometryMultipoint":return A(e,n,r,s);case"esriGeometryPolyline":return C(e,n,r,s);case"esriGeometryPolygon":return K(e,n,r,s);default:d().error("convertToFeatureSet:unknown-geometry",new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("internal:geometry",`Unable to parse unknown geometry type '${o}'`))}return e}function ft(t){const{spatialReference:e,transform:n,fields:o,hasM:r,hasZ:s,features:u,geometryType:l,exceededTransferLimit:c,queryGeometry:i,queryGeometryType:f}=t,a={features:it([],u,l,s,r),fields:o,geometryType:l,spatialReference:e,queryGeometry:lt(i,f,!1,!1)};return n&&(a.transform=n),c&&(a.exceededTransferLimit=c),r&&(a.hasM=r),s&&(a.hasZ=s),a}function at(t,e){const n=new _OptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,{hasM:o,hasZ:r,features:s,spatialReference:u,geometryType:l,exceededTransferLimit:c,transform:i,fields:f}=t;return f&&(n.fields=f),n.geometryType=l??null,n.spatialReference=u??null,s&&rt(n.features,s,l,r,o,e),c&&(n.exceededTransferLimit=c),o&&(n.hasM=o),r&&(n.hasZ=r),i&&(n.transform=i),n}function ht(t){const{transform:e,features:n,hasM:o,hasZ:r}=t;if(!e)return t;for(const s of n)null!=s.geometry&&wt(s.geometry,s.geometry,o,r,e),null!=s.centroid&&wt(s.centroid,s.centroid,o,r,e);return t.transform=null,t}function mt(t,e){const{geometryType:n,features:o,hasM:r,hasZ:s}=e;if(!t)return e;for(let u=0;u<o.length;u++){const e=o[u],l=e.weakClone();l.geometry=new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,gt(l.geometry,e.geometry,r,s,n,t),e.centroid&&(l.centroid=new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,gt(l.centroid,e.centroid,r,s,"esriGeometryPoint",t)),o[u]=l}return e.transform=t,e}function gt(t,e,n,o,r,s,u=n,l=o){if(Ft(t),!e?.coords.length)return null;const c=y[r],{coords:i,lengths:f}=e,a=g(n,o),h=g(n&&u,o&&l),m=G(n,o,u,l);if(!f.length)return m(t.coords,i,0,0,b(s,i[0]),T(s,i[1])),Ft(t,a,0),t;let d,p,M,I,w=0,N=0,P=N;for(const g of f){if(g<c)continue;let e=0;N=P,M=d=b(s,i[w]),I=p=T(s,i[w+1]),m(t.coords,i,N,w,M,I),e++,w+=a,N+=h;for(let n=1;n<g;n++,w+=a)M=b(s,i[w]),I=T(s,i[w+1]),M===d&&I===p||(m(t.coords,i,N,w,M-d,I-p),N+=h,e++,d=M,p=I);e>=c&&(t.lengths.push(e),P=N)}return Zt(t.coords,P),t.coords.length?t:null}function dt(t,e,n,o,r,s,u=n,l=o){if(Ft(t),!e?.coords.length)return null;const c=y[r],{coords:i,lengths:f}=e,a=g(n,o),h=g(n&&u,o&&l),m=G(n,o,u,l);if(!f.length)return m(t.coords,i,0,0,i[0],i[1]),Ft(t,a,0),t;let d=0;const p=s*s;for(const g of f){if(g<c){d+=g*a;continue}const e=t.coords.length/h,n=d,o=d+(g-1)*a;m(t.coords,i,t.coords.length,n,i[n],i[n+1]),pt(t.coords,i,a,p,m,n,o),m(t.coords,i,t.coords.length,o,i[o],i[o+1]);const r=t.coords.length/h-e;r>=c?t.lengths.push(r):Zt(t.coords,e*h),d+=g*a}return t.coords.length?t:null}function yt(t,e,n,o){const r=t[e],s=t[e+1],u=t[n],l=t[n+1],c=t[o],i=t[o+1];let f=u,a=l,h=c-f,m=i-a;if(0!==h||0!==m){const t=((r-f)*h+(s-a)*m)/(h*h+m*m);t>1?(f=c,a=i):t>0&&(f+=h*t,a+=m*t)}return h=r-f,m=s-a,h*h+m*m}function pt(t,e,n,o,r,s,u){let l,c=o,i=0;for(let f=s+n;f<u;f+=n)l=yt(e,f,s,u),l>c&&(i=f,c=l);c>o&&(i-s>n&&pt(t,e,n,o,r,s,i),r(t,e,t.length,i,e[i],e[i+1]),u-i>n&&pt(t,e,n,o,r,i,u))}function Mt(t,e,n,u){if(!e?.coords?.length)return null;const l=g(n,u);let c=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,f=Number.NEGATIVE_INFINITY,a=Number.NEGATIVE_INFINITY;if(e&&e.coords){const t=e.coords;for(let e=0;e<t.length;e+=l){const n=t[e],o=t[e+1];c=Math.min(c,n),f=Math.max(f,n),i=Math.min(i,o),a=Math.max(a,o)}}return (0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__.is)(t)?(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__/* .fromRectValues */ .BI)(t,c,i,f,a):(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__/* .fromValues */ .fA)(c,i,f,a,t),t}function It(t,e,n,o){const r=g(n,o),{lengths:s,coords:u}=e;let l=Number.POSITIVE_INFINITY,c=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,f=Number.NEGATIVE_INFINITY,a=0;for(const h of s){let t=u[a],e=u[a+1];l=Math.min(t,l),c=Math.min(e,c),i=Math.max(t,i),f=Math.max(e,f),a+=r;for(let n=1;n<h;n++,a+=r){const n=u[a],o=u[a+1];t+=n,e+=o,n<0&&(l=Math.min(l,t)),n>0&&(i=Math.max(i,t)),o<0?c=Math.min(c,e):o>0&&(f=Math.max(f,e))}}return t[0]=l,t[1]=c,t[2]=i,t[3]=f,t}function wt(t,e,o,r,s){const{coords:u,lengths:l}=e,c=g(o,r);if(!u.length)return t!==e&&Ft(t),t;(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_9__/* .assertIsSome */ .Lw)(s);const{originPosition:i,scale:f,translate:a}=s,h=Et;h.originPosition=i;const m=h.scale;m[0]=f[0]??1,m[1]=-(f[1]??1),m[2]=f[2]??1,m[3]=f[3]??1;const d=h.translate;if(d[0]=a[0]??0,d[1]=a[1]??0,d[2]=a[2]??0,d[3]=a[3]??0,!l.length){for(let e=0;e<c;++e)t.coords[e]=Z(h,u[e],e);return t!==e&&Ft(t,c,0),t}let y=0;for(let n=0;n<l.length;n++){const e=l[n];t.lengths[n]=e;for(let n=0;n<c;++n)t.coords[y+n]=Z(h,u[y+n],n);let o=t.coords[y],r=t.coords[y+1];y+=c;for(let n=1;n<e;n++,y+=c){o+=u[y]*m[0],r+=u[y+1]*m[1],t.coords[y]=o,t.coords[y+1]=r;for(let e=2;e<c;++e)t.coords[y+e]=Z(h,u[y+e],e)}}return t!==e&&Ft(t,u.length,l.length),t}function Gt(t,e,n,o,r,s){if(Ft(t),t.lengths.push(...e.lengths),n===r&&o===s)for(let u=0;u<e.coords.length;u++)t.coords.push(e.coords[u]);else{const u=g(n,o),l=G(n,o,r,s),c=e.coords;for(let e=0;e<c.length;e+=u)l(t.coords,c,t.coords.length,e,c[e],c[e+1])}return t}function bt(t,e,n,o,r){if(!e?.coords?.length)return null;const s=y[n],{coords:u,lengths:l}=e,c=G(o,r,o,r),i=g(o,r);let f=0,a=0,h=0,m=0;for(const g of l){a=m,c(t.coords,u,a,f,u[f],u[f+1]),f+=i;let e=u[f],n=u[f+1],o=e,r=n,l=n/e;a+=i,c(t.coords,u,a,f,o,r),f+=i;for(let s=2;s<g;s++){e=u[f],n=u[f+1];const s=n/e,h=l===s||!isFinite(l)&&!isFinite(s),m=h&&isFinite(s)?l>=0&&s>=0||l<=0&&s<=0:r>=0&&n>=0||r<=0&&n<=0;h&&m?(o+=e,r+=n):(o=e,r=n,a+=i),c(t.coords,u,a,f,o,r),f+=i,l=s}a+=i;const d=(a-m)/i;d>=s&&(t.lengths[h]=d,m=a,h++)}return t.coords.length>m&&(t.coords.length=m),t.lengths.length>h&&(t.lengths.length=h),t.coords.length&&t.lengths.length?t:null}function Tt(t,e,n,o){let r=0,s=t[o*e],u=t[o*(e+1)];for(let l=1;l<n;l++){const n=s+t[o*(e+l)],c=u+t[o*(e+l)+1],i=(n-s)*(c+u);s=n,u=c,r+=i}return.5*r}function Nt(t,e){const{coords:n,lengths:o}=t;let r=0,s=0;for(let u=0;u<o.length;u++){const t=o[u];s+=Tt(n,r,t,e),r+=t}return Math.abs(s)}function Pt(t,e,n,o){return 0===t*o-n*e&&t*n+e*o>0}function xt(t,e,n,o,r){const s=g(o,r);if(!t.lengths.length){if(t.coords.length<2)return null;const[n,o]=t.coords,r=N(e,n),s=P(e,o);return new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A([],[r,s])}const u=new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A([],[0,0]),l=y[n],c="esriGeometryPolygon"===n||"esriGeometryPolyline"===n;let i=0,f=0;for(let a=0;a<t.lengths.length;a++){const n=t.lengths[a],o=f;let r=N(e,t.coords[s*i]),h=P(e,t.coords[s*i+1]);u.coords[f++]=r,u.coords[f++]=h;let m=0,g=0,d=1;for(let l=1;l<n;l++){const n=N(e,t.coords[s*(l+i)]),o=P(e,t.coords[s*(l+i)+1]);if(n!==r||o!==h){const t=n-r,e=o-h;c&&Pt(m,g,t,e)?(u.coords[f-2]+=t,u.coords[f-1]+=e,r+=t,h+=e):(u.coords[f++]=n,u.coords[f++]=o,r=n,h=o,m=t,g=e,d+=1)}}d<l?f=o:u.lengths.push(d),i+=n}return 0===u.lengths.length?null:u}function Ft(t,e=0,n=0){Zt(t.lengths,n),Zt(t.coords,e)}function Zt(t,e=0){t.length!==e&&(t.length=e)}const Et={originPosition:"lowerLeft",scale:[1,1,1,1],translate:[0,0,0,0]};


/***/ }),

/***/ 62781:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ S)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(93741);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(62991);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js + 1 modules
var promiseUtils = __webpack_require__(49175);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(19759);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(67488);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/infoFor3D.js
var infoFor3D = __webpack_require__(52360);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/source/DataLayerSource.js + 3 modules
var DataLayerSource = __webpack_require__(95298);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/utils.js
var utils = __webpack_require__(36321);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/query/executeForCount.js
var executeForCount = __webpack_require__(15830);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(8000);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/query/operations/query.js
var query = __webpack_require__(95254);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/Query.js + 1 modules
var Query = __webpack_require__(39609);
;// ./node_modules/@arcgis/core/rest/query/executeForExtent.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function executeForExtent_a(a,m,e){const i=(0,utils/* parseUrl */.Dl)(a),s=await (0,query/* executeQueryForExtent */.Jf)(i,Query/* default */.A.from(m),{...e}),u=s.data.extent;return!u||isNaN(u.xmin)||isNaN(u.ymin)||isNaN(u.xmax)||isNaN(u.ymax)?{count:s.data.count,extent:null}:{count:s.data.count,extent:Extent/* default */.A.fromJSON(u)}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/query/executeForIds.js
var executeForIds = __webpack_require__(30271);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/query/executeQueryJSON.js
var executeQueryJSON = __webpack_require__(500);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(57725);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/zscale.js
var zscale = __webpack_require__(55792);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/graphics/featureConversionUtils.js
var featureConversionUtils = __webpack_require__(5525);
;// ./node_modules/@arcgis/core/rest/query/operations/pbfJSONFeatureSet.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function pbfJSONFeatureSet_o(e,t){return t}function i(e,t,r,s){switch(r){case 0:return u(e,t+s,0);case 1:return"lowerLeft"===e.originPosition?u(e,t+s,1):l(e,t+s,1)}}function n(e,t,r,s){return 2===r?u(e,t,2):i(e,t,r,s)}function pbfJSONFeatureSet_a(e,t,r,s){return 2===r?0===t?0:u(e,t,3):i(e,t,r,s)}function h(e,t,r,s){return 3===r?0===t?0:u(e,t,3):n(e,t,r,s)}function u({translate:e,scale:t},r,s){return e[s]+r*t[s]}function l({translate:e,scale:t},r,s){return e[s]-r*t[s]}class d{constructor(e){this._options=e,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=pbfJSONFeatureSet_o,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._mValueOffset=null,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{}}createFeatureResult(){return{fields:[],features:[]}}finishFeatureResult(e){if(this._options.applyTransform&&(e.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!e.hasZ)return;const r=(0,zscale/* getGeometryZScaler */.N)(e.geometryType,this._options.sourceSpatialReference,e.spatialReference);if(null!=r)for(const t of e.features)r(t.geometry)}createSpatialReference(){return{}}addField(t,r){const s=t.fields;(0,maybe/* assertIsSome */.Lw)(s),s.push(r);const o=s.map((e=>e.name));this._attributesConstructor=function(){for(const e of o)this[e]=null}}addFeature(e,t){e.features.push(t)}prepareFeatures(e){switch(this._transform=e.transform,this._options.applyTransform&&e.transform&&(this._applyTransform=this._deriveApplyTransform(e)),this._mValueOffset=null,this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&(this._mValueOffset=this._vertexDimension,this._vertexDimension++),e.geometryType){case"esriGeometryPoint":this.addCoordinate=(e,t,r)=>this.addCoordinatePoint(e,t,r),this.createGeometry=e=>this.createPointGeometry(e);break;case"esriGeometryPolygon":this.addCoordinate=(e,t,r)=>this._addCoordinatePolygon(e,t,r),this.createGeometry=e=>this._createPolygonGeometry(e);break;case"esriGeometryPolyline":this.addCoordinate=(e,t,r)=>this._addCoordinatePolyline(e,t,r),this.createGeometry=e=>this._createPolylineGeometry(e);break;case"esriGeometryMultipoint":this.addCoordinate=(e,t,r)=>this._addCoordinateMultipoint(e,t,r),this.createGeometry=e=>this._createMultipointGeometry(e)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,{attributes:new this._attributesConstructor}}allocateCoordinates(){}addLength(e,t,r){0===this._lengths.length&&(this._toAddInCurrentPath=t),this._lengths.push(t)}addQueryGeometry(e,t){const{queryGeometry:o,queryGeometryType:i}=t,n=this._transform?(0,featureConversionUtils/* unquantizeOptimizedGeometry */.Ch)(o.clone(),o,!1,!1,this._transform):o.clone(),a=(0,featureConversionUtils/* convertToGeometry */.zv)(n,i,!1,!1);e.queryGeometryType=i,e.queryGeometry={...a}}createPointGeometry(e){const t={x:0,y:0,spatialReference:e.spatialReference};return e.hasZ&&(t.z=0),e.hasM&&(t.m=0),t}addCoordinatePoint(e,t,r){const s=this._transform;switch(t=this._applyTransform(s,t,r,0),r){case 0:e.x=t;break;case 1:e.y=t;break;case 2:"z"in e?e.z=t:e.m=t;break;case 3:e.m=t}}_transformPathLikeValue(e,t){let r=0;t<=1&&(r=this._previousCoordinate[t],this._previousCoordinate[t]+=e);const s=this._transform;return null!==this._mValueOffset&&0===e&&t>0&&!(t%this._mValueOffset)?0:this._applyTransform(s,e,t,r)}_addCoordinatePolyline(e,t,r){this._dehydratedAddPointsCoordinate(e.paths,t,r)}_addCoordinatePolygon(e,t,r){this._dehydratedAddPointsCoordinate(e.rings,t,r)}_addCoordinateMultipoint(e,t,r){0===r&&e.points.push([]);const s=this._transformPathLikeValue(t,r);e.points[e.points.length-1].push(s)}_createPolygonGeometry(e){return{rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createPolylineGeometry(e){return{paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createMultipointGeometry(e){return{points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_dehydratedAddPointsCoordinate(e,t,r){0===r&&0===this._toAddInCurrentPath--&&(e.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const s=this._transformPathLikeValue(t,r),o=e[e.length-1];0===r&&(this._coordinateBufferPtr=0,this._coordinateBuffer=new Array(this._vertexDimension),o.push(this._coordinateBuffer)),this._coordinateBuffer[this._coordinateBufferPtr++]=s}_deriveApplyTransform(e){const{hasZ:t,hasM:r}=e;return t&&r?h:t?n:r?pbfJSONFeatureSet_a:i}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/FeatureSet.js
var FeatureSet = __webpack_require__(74704);
;// ./node_modules/@arcgis/core/rest/query/executeQueryPBF.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function s(r,e,t,s){const p=await executeQueryPBF_n(r,a.from(e),t,s);return o.fromJSON(p)}async function executeQueryPBF_n(o,s,n,p){const i=(0,utils/* parseUrl */.Dl)(o),u={...n},m=Query/* default */.A.from(s),f=!m.quantizationParameters,{data:c}=await (0,query/* executeQueryPBF */.IJ)(i,m,new d({sourceSpatialReference:m.sourceSpatialReference,applyTransform:f}),u,p);return c}

;// ./node_modules/@arcgis/core/layers/graphics/sources/support/QueryTask.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let S=class extends Accessor/* default */.A{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.uniqueIdFields=null,this.url=null}get parsedUrl(){return (0,urlUtils/* urlToObject */.An)(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){const r=this._normalizeQuery(e),o=null!=e.outStatistics?.[0],s=(0,has/* default */.A)("featurelayer-pbf-statistics"),i=(!o||s)&&!0!==e.returnTrueCurves;let u;if(this.pbfSupported&&i)try{u=await executeQueryPBF_n(this.url,r,t,{uniqueIdFields:this.uniqueIdFields})}catch(n){if("query:parsing-pbf"!==n.name)throw n;this.pbfSupported=!1}return this.pbfSupported&&i||(u=await (0,executeQueryJSON/* executeRawQueryJSON */.e)(this.url,r,t,{uniqueIdFields:this.uniqueIdFields})),this._normalizeFields(u.fields),u}async featureSetFromJSON(e,t,r){if(!this._queryIs3DObjectFormat(e)||null==this.infoFor3D||!t.features)return FeatureSet/* default */.A.fromJSON(t);const{meshFeatureSetFromJSON:s}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 78621).then(__webpack_require__.bind(__webpack_require__, 78621)),r);return s(e,this.infoFor3D,t)}executeForCount(e,t){return (0,executeForCount/* executeForCount */.I)(this.url,this._normalizeQuery(e),t,{uniqueIdFields:this.uniqueIdFields})}executeForExtent(e,t){return executeForExtent_a(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return (0,executeForIds/* executeForIds */.V)(this.url,this._normalizeQuery(e),t,{uniqueIdFields:this.uniqueIdFields})}async executeRelationshipQuery(e,t){const[{default:r},{executeRelationshipQuery:s}]=await (0,promiseUtils/* whenOrAbort */.qr)(Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 63498)),__webpack_require__.e(/* import() */ 41213).then(__webpack_require__.bind(__webpack_require__, 41213))]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),s(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:r},{executeRelationshipQueryForCount:s}]=await (0,promiseUtils/* whenOrAbort */.qr)(Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 63498)),__webpack_require__.e(/* import() */ 41213).then(__webpack_require__.bind(__webpack_require__, 41213))]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),s(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:r,fetchAttachments:s,processAttachmentQueryResult:i}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 18740).then(__webpack_require__.bind(__webpack_require__, 18740)),t),u=(0,utils/* parseUrl */.Dl)(this.url);return i(u,await(this.queryAttachmentsSupported?r(u,e,t):s(u,e,t)))}async executeAttributeBinsQuery(e,t){const{executeAttributeBinsQuery:r}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 68735).then(__webpack_require__.bind(__webpack_require__, 68735)),t);return r(this.parsedUrl,e,t)}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:r}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 73304).then(__webpack_require__.bind(__webpack_require__, 50923)),t);return r(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:r}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 9766).then(__webpack_require__.bind(__webpack_require__, 9766)),t);return r(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:r}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 53981).then(__webpack_require__.bind(__webpack_require__, 53981)),t);return r(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:r}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 52751).then(__webpack_require__.bind(__webpack_require__, 52751)),t);return r(this.parsedUrl,e,t)}_normalizeQuery(e){let t=Query/* default */.A.from(e);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?DataLayerSource/* DataLayerSource */.L.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:o}=this;if(null!=o&&this._queryIs3DObjectFormat(e)){if(t=t===e?t.clone():t,t.formatOf3DObjects=(0,infoFor3D/* getGltfQueryFormat */.Hz)(o),!t.formatOf3DObjects)throw new Error/* default */.A("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t.outSpatialReference&&!(0,spatialReferenceUtils/* equals */.aI)(t.outSpatialReference,this.sourceSpatialReference))throw new Error/* default */.A("query:unsupported-out-spatial-reference","3D object feature services do not support projection of geometries");if(null==t.outFields||!t.outFields.includes("*")){t=t===e?t.clone():t,null==t.outFields&&(t.outFields=[]);const{originX:r,originY:s,originZ:i,translationX:u,translationY:n,translationZ:a,scaleX:c,scaleY:p,scaleZ:l,rotationX:d,rotationY:m,rotationZ:y,rotationDeg:h}=o.transformFieldRoles;t.outFields.push(r,s,i,u,n,a,c,p,l,d,m,y,h)}}return t}_normalizeFields(e){if(null!=this.fieldsIndex&&null!=e)for(const t of e){const e=this.fieldsIndex.get(t.name);e&&Object.assign(t,e.toJSON())}}_queryIs3DObjectFormat(e){return null!=this.infoFor3D&&!0===e.returnGeometry&&"xyFootprint"!==e.multipatchOption&&!e.outStatistics}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:DataLayerSource/* DataLayerSource */.L})],S.prototype,"dynamicDataSource",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"fieldsIndex",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"gdbVersion",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"infoFor3D",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],S.prototype,"parsedUrl",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"pbfSupported",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"queryAttachmentsSupported",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"sourceSpatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"uniqueIdFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],S.prototype,"url",void 0),S=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.graphics.sources.support.QueryTask")],S);


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

/***/ 69543:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38116);
/* harmony import */ var _core_MapUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(80294);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49175);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19759);
/* harmony import */ var _core_Version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27805);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80861);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25376);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26325);
/* harmony import */ var _core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(91101);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8000);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(44153);
/* harmony import */ var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(63457);
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9014);
/* harmony import */ var _portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(86074);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const f=f=>{let b=class extends f{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=void 0,this._allLayersAndTablesMap=null}readCapabilities(e,r){const t=r.capabilities&&r.capabilities.split(",").map((e=>e.toLowerCase().trim()));if(!t)return{operations:{supportsExportMap:!1,supportsExportTiles:!1,supportsIdentify:!1,supportsQuery:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const s=this.type,o="tile"!==s&&!!r.supportsDynamicLayers,a=t.includes("query"),p=t.includes("map"),l=!!r.exportTilesAllowed,n=t.includes("tilemap"),c=t.includes("data"),u="tile"!==s&&(!r.tileInfo||o),y="tile"!==s&&(!r.tileInfo||o),m="tile"!==s,d="tile"!==s&&o&&r.currentVersion>=11.1,h=r.cimVersion?_core_Version_js__WEBPACK_IMPORTED_MODULE_4__/* .Version */ .R.parse(r.cimVersion):null,f=h?.greaterEqual(1,4)??!1,b=h?.greaterEqual(2,0)??!1;return{operations:{supportsExportMap:p,supportsExportTiles:l,supportsIdentify:a,supportsQuery:c,supportsTileMap:n},exportMap:p?{supportsArcadeExpressionForLabeling:f,supportsCIMSymbols:b,supportsDynamicLayers:o,supportsSublayerOrderBy:d,supportsSublayerDefinitionExpression:y,supportsSublayerVisibility:u,supportsSublayersChanges:m}:null,exportTiles:l?{maxExportTilesCount:+r.maxExportTilesCount}:null}}readVersion(e,r){let t=r.currentVersion;return t||(t=r.hasOwnProperty("capabilities")||r.hasOwnProperty("tables")?10:r.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),t}async fetchRelatedService(e){const r=this.portalItem;if(!r||!(0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_16__/* .isHostedLayer */ .bK)(r))return null;this._relatedFeatureServicePromise||(this._relatedFeatureServicePromise=r.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},e).then((e=>e.find((e=>"Feature Service"===e.type))??null),(()=>null)));const t=await this._relatedFeatureServicePromise;return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .throwIfAborted */ .Te)(e),t?{itemId:t.id,url:t.url}:null}async fetchSublayerInfo(e,t){const{source:s}=e;if(this?.portalItem&&"tile"===this.type&&"map-layer"===s?.type&&(0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_16__/* .isHostedLayer */ .bK)(this.portalItem)&&e.originIdOf("url")<_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_11__/* .OriginId */ .Gr.SERVICE){const r=await this.fetchRelatedService(t);r&&(e.url=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .join */ .fj)(r.url,s.mapLayerId.toString()),e.layerItemId=r.itemId)}const{url:i}=e;let a;if("data-layer"===s.type){a=(await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(i,{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey},...t})).data}else if(i&&e.originIdOf("url")>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_11__/* .OriginId */ .Gr.SERVICE)try{const e=await this._fetchAllLayersAndTablesFromService(i),r=(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_14__/* .parse */ .qg)(i)?.sublayer??s.mapLayerId;a=e.get(r)}catch{}else{let r=e.id;"map-layer"===s?.type&&(r=s.mapLayerId);try{a=(await this.fetchAllLayersAndTables(t)).get(r)}catch{}}return a}async fetchAllLayersAndTables(e){return this._fetchAllLayersAndTablesFromService(this.parsedUrl?.path,e)}async _fetchAllLayersAndTablesFromService(e,i){await this.load(i),this._allLayersAndTablesMap||=new Map;const a=(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_14__/* .parse */ .qg)(e),p=(0,_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_17__/* .getOrCreateMapValue */ .tE)(this._allLayersAndTablesMap,a?.url.path,(()=>(0,_request_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .join */ .fj)(a?.url.path,"/layers"),{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then((e=>{const r=new Map,{layers:t,tables:s}=e.data,o=[...t??[],...s??[]];for(const i of o)r.set(i.id,i);return{result:r}}),(e=>({error:e}))))),l=await p;if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .throwIfAborted */ .Te)(i),"result"in l)return l.result;throw l.error}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({readOnly:!0})],b.prototype,"capabilities",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__/* .reader */ .w)("service","capabilities",["capabilities","cimVersion","currentVersion","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],b.prototype,"readCapabilities",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({json:{read:{source:"copyrightText"}}})],b.prototype,"copyright",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A})],b.prototype,"fullExtent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_15__.id)],b.prototype,"id",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],b.prototype,"legendEnabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_15__/* .popupEnabled */ .M6)],b.prototype,"popupEnabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A})],b.prototype,"spatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({readOnly:!0})],b.prototype,"version",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__/* .reader */ .w)("service","version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],b.prototype,"readVersion",null),b=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__/* .subclass */ .$)("esri.layers.mixins.ArcGISMapService")],b),b};


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

/***/ 89856:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ m)
/* harmony export */ });
/* unused harmony export forEachSublayer */
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54192);
/* harmony import */ var _core_CollectionFlattener_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53244);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62991);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80861);
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61985);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6273);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(66361);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26325);
/* harmony import */ var _core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(91101);
/* harmony import */ var _support_Sublayer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(93221);
/* harmony import */ var _support_sublayerUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(22508);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function h(e,r){const s=[],t={};return e?(e.forEach((e=>{const o=new _support_Sublayer_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A;if(o.read(e,r),t[o.id]=o,null!=e.parentLayerId&&-1!==e.parentLayerId){const r=t[e.parentLayerId];r.sublayers||(r.sublayers=[]),r.sublayers.unshift(o)}else s.unshift(o)})),s):s}const f=_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.ofType(_support_Sublayer_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A);function S(e,r){e&&e.forEach((e=>{r(e),e.sublayers&&e.sublayers.length&&S(e.sublayers,r)}))}const m=m=>{let E=class extends m{constructor(...e){super(...e),this.allSublayers=new _core_CollectionFlattener_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.sublayersSourceJSON={[_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_11__/* .OriginId */ .Gr.SERVICE]:{},[_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_11__/* .OriginId */ .Gr.PORTAL_ITEM]:{},[_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_11__/* .OriginId */ .Gr.WEB_SCENE]:{},[_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_11__/* .OriginId */ .Gr.WEB_MAP]:{},[_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_11__/* .OriginId */ .Gr.LINK_CHART]:{}},this.subtables=null,this.addHandles([(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .watch */ .wB)((()=>this.sublayers),((e,r)=>this._handleSublayersChange(e,r)),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .sync */ .OH),(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .watch */ .wB)((()=>this.subtables),((e,r)=>this._handleSublayersChange(e,r)),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .sync */ .OH)])}destroy(){this.allSublayers.destroy()}readSublayers(e,r){if(!r||!e)return;const{sublayersSourceJSON:s}=this,t=(0,_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_11__/* .nameToId */ .aB)(r.origin);if(t<_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_11__/* .OriginId */ .Gr.SERVICE)return;if(s[t]={context:r,visibleLayers:e.visibleLayers||s[t].visibleLayers,layers:e.layers||s[t].layers},t>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_11__/* .OriginId */ .Gr.SERVICE)return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:o,origin:a}=this.createSublayersForOrigin("web-document"),l=(0,_core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_9__/* .getProperties */ .oY)(this);l.setDefaultOrigin(a),this._set("sublayers",new f(o)),l.setDefaultOrigin("user")}findSublayerById(e){return this.allSublayers.find((r=>r.id===e))}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(e){let r;const s=(0,_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_11__/* .nameToId */ .aB)("web-document"===e?"web-map":e);let t=_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_11__/* .OriginId */ .Gr.SERVICE,o=this.sublayersSourceJSON[_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_11__/* .OriginId */ .Gr.SERVICE].layers,a=this.sublayersSourceJSON[_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_11__/* .OriginId */ .Gr.SERVICE].context,l=null;const i=[_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_11__/* .OriginId */ .Gr.PORTAL_ITEM,_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_11__/* .OriginId */ .Gr.WEB_SCENE,_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_11__/* .OriginId */ .Gr.WEB_MAP].filter((e=>e<=s));for(const y of i){const e=this.sublayersSourceJSON[y];(0,_support_sublayerUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .isSublayerOverhaul */ ._X)(e.layers)&&(t=y,o=e.layers,a=e.context,e.visibleLayers&&(l={visibleLayers:e.visibleLayers,context:e.context}))}const n=[_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_11__/* .OriginId */ .Gr.PORTAL_ITEM,_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_11__/* .OriginId */ .Gr.WEB_SCENE,_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_11__/* .OriginId */ .Gr.WEB_MAP].filter((e=>e>t&&e<=s));let u=null;for(const y of n){const{layers:e,visibleLayers:s,context:t}=this.sublayersSourceJSON[y];e&&(u={layers:e,context:t},r??=y),s&&(l={visibleLayers:s,context:t})}const d=h(o,a),m=new Map,E=new Set;if(u)for(const y of u.layers)m.set(y.id,y);if(l?.visibleLayers)for(const y of l.visibleLayers)E.add(y);return S(d,(e=>{u&&e.read(m.get(e.id),u.context),l&&e.read({defaultVisibility:E.has(e.id)},l.context)})),{origin:(0,_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_11__/* .idToName */ .OL)(t),originWithPartialOverrides:r?(0,_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_11__/* .idToName */ .OL)(r):null,sublayers:new f({items:d})}}read(e,r){super.read(e,r),this.readSublayers(e,r)}_handleSublayersChange(e,r){r&&(r.forEach((e=>{e.parent=null,e.layer=null})),this.removeHandles("sublayers-owner")),e&&(e.forEach((e=>{e.parent=this,e.layer=this})),this.addHandles([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))],"sublayers-owner"),"tile"===this.type&&this.addHandles(e.on("before-changes",(e=>{_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.getLogger("esri.layers.TileLayer").error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),e.preventDefault()})),"sublayers-owner"))}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({readOnly:!0})],E.prototype,"allSublayers",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({readOnly:!0,type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.ofType(_support_Sublayer_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)})],E.prototype,"serviceSublayers",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({value:null,type:f,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],E.prototype,"sublayers",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({readOnly:!0})],E.prototype,"sublayersSourceJSON",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:f,json:{read:{source:"tables"}}})],E.prototype,"subtables",void 0),E=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__/* .subclass */ .$)("esri.layers.mixins.SublayersOwner")],E),E};


/***/ }),

/***/ 52202:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14755);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22395);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80861);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25376);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26325);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48524);
/* harmony import */ var _domains_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(83611);
/* harmony import */ var _FeatureTemplate_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(84700);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let n=class extends(_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.ClonableMixin(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)){constructor(o){super(o),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(o){const r={};for(const t of Object.keys(o))r[t]=(0,_domains_js__WEBPACK_IMPORTED_MODULE_10__/* .fromJSON */ .rS)(o[t]);return r}writeDomains(o,r){const t={};for(const s of Object.keys(o))o[s]&&(t[s]=o[s]?.toJSON());r.domains=t}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{write:!0}})],n.prototype,"id",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{write:!0}})],n.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{write:!0}})],n.prototype,"domains",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__/* .reader */ .w)("domains")],n.prototype,"readDomains",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__/* .writer */ .K)("domains")],n.prototype,"writeDomains",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[_FeatureTemplate_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A],json:{write:!0}})],n.prototype,"templates",void 0),n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.layers.support.FeatureType")],n);


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

/***/ 93221:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ae)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31352);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38116);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54192);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62991);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6273);
/* harmony import */ var _core_Identifiable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23377);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15565);
/* harmony import */ var _core_Loadable_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11965);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80861);
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(33125);
/* harmony import */ var _core_sql_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(80189);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19759);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(81482);
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(77380);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(25376);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(26325);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(48524);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8636);
/* harmony import */ var _core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(91101);
/* harmony import */ var _core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(66361);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(8000);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(44153);
/* harmony import */ var _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(54483);
/* harmony import */ var _graphics_sources_support_QueryTask_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(62781);
/* harmony import */ var _mixins_OrderedLayer_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(87917);
/* harmony import */ var _featureLayerUtils_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(33039);
/* harmony import */ var _FeatureType_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(52202);
/* harmony import */ var _Field_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(45352);
/* harmony import */ var _FieldsIndex_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(51387);
/* harmony import */ var _fieldUtils_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(46227);
/* harmony import */ var _LabelClass_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(47659);
/* harmony import */ var _labelingInfo_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(6488);
/* harmony import */ var _LayerFloorInfo_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(76591);
/* harmony import */ var _OrderByInfo_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(65681);
/* harmony import */ var _Relationship_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(46148);
/* harmony import */ var _serviceCapabilitiesUtils_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(29093);
/* harmony import */ var _source_DataLayerSource_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(95298);
/* harmony import */ var _source_MapLayerSource_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(90440);
/* harmony import */ var _renderers_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(94403);
/* harmony import */ var _rest_utils_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(36321);
/* harmony import */ var _rest_support_AttachmentQuery_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(95827);
/* harmony import */ var _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(39609);
/* harmony import */ var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(95610);
/* harmony import */ var _symbols_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(59343);
/* harmony import */ var _tables_AttributeTableTemplate_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(27780);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var W;function X(e){return"esriSMS"===e?.type}function Y(e,r,t){const i=t.minimumWritableOrigin||t.origin;return!!i&&e.originIdOf(r)>=(0,_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_18__/* .nameToId */ .aB)(i)}function Z(e,r,t){const i=Y(this,r,t);return{ignoreOrigin:!0,allowNull:i,enabled:!!t&&("map-image"===t.layer?.type&&(t.writeSublayerStructure||i))}}function ee(e,r,t){return{enabled:!!t&&("tile"===t.layer?.type&&(Y(this,r,t)||this._isOverridden(r)))}}function re(e,r,t){return{ignoreOrigin:!0,enabled:t&&t.writeSublayerStructure||!1}}function te(e,r,t){return{ignoreOrigin:!0,enabled:!!t?.writeSublayerStructure&&this.originIdOf(r)>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_18__/* .OriginId */ .Gr.SERVICE}}function ie(e,r,t){return{ignoreOrigin:!0,enabled:!!t&&(t.writeSublayerStructure||Y(this,r,t))}}let oe=0;const se=new Set(["layer","parent","loaded","loadStatus","loadError","loadWarnings"]);let ae=class extends((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_10__/* .MultiOriginJSONMixin */ .P)(_core_Identifiable_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.IdentifiableMixin(_core_Loadable_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A))){static{W=this}constructor(e){super(e),this.attributeTableTemplate=null,this.capabilities=void 0,this.maxScaleRange={minScale:0,maxScale:0},this.fields=null,this.fullExtent=null,this.geometryType=null,this.globalIdField=null,this.isTable=!1,this.legendEnabled=!0,this.objectIdField=null,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.relationships=null,this.sourceJSON=null,this.spatialReference=null,this.title=null,this.typeIdField=null,this.type="sublayer",this.types=null,this._lastParsedUrl=null}async load(e){return this.addResolvingPromise((async()=>{const{layer:r,url:i}=this;if(!r&&!i)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});const s=r?await r.fetchSublayerInfo(this,e):(await (0,_request_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(i,{responseType:"json",query:{f:"json"},...e})).data;s&&(this.sourceJSON=s,this.read({layerDefinition:s},{origin:"service",layer:r,url:(0,_rest_utils_js__WEBPACK_IMPORTED_MODULE_39__/* .parseUrl */ .Dl)(i)}))})()),this}readCapabilities(e,r){r=r.layerDefinition||r;const{attachment:t,operations:{supportsQuery:i,supportsQueryAttachments:o},query:{supportsFormatPBF:s,supportsOrderBy:a,supportsPagination:l},data:{supportsAttachment:n},queryRelated:p}=(0,_serviceCapabilitiesUtils_js__WEBPACK_IMPORTED_MODULE_35__/* .getFeatureLayerCapabilities */ .S)(r,this.url);return{attachment:{supportsOrderByFields:t?.supportsOrderByFields??!1,supportsResize:t?.supportsResize??!1},exportMap:{supportsModification:!!r.canModifyLayer},operations:{supportsQuery:i,supportsQueryAttachments:o},data:{supportsAttachment:n},query:{supportsFormatPBF:s,supportsOrderBy:a,supportsPagination:l},queryRelated:p}}get defaultPopupTemplate(){return this.createPopupTemplate()}set definitionExpression(e){this._setAndNotifyLayer("definitionExpression",e)}get effectiveScaleRange(){const{minScale:e,maxScale:r}=this;return{minScale:e,maxScale:r}}readMaxScaleRange(e,r){return{minScale:(r=r.layerDefinition||r).minScale??0,maxScale:r.maxScale??0}}get fieldsIndex(){return new _FieldsIndex_js__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A(this.fields||[])}set floorInfo(e){this._setAndNotifyLayer("floorInfo",e)}readGlobalIdFieldFromService(e,r){if((r=r.layerDefinition||r).globalIdField)return r.globalIdField;if(r.fields)for(const t of r.fields)if("esriFieldTypeGlobalID"===t.type)return t.name}get id(){const e=this._get("id");return e??oe++}set id(e){this._get("id")!==e&&(!1!==this.layer?.capabilities?.exportMap?.supportsDynamicLayers?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}readIsTable(e,r){return"Table"===r.type}set labelingInfo(e){this._setAndNotifyLayer("labelingInfo",e)}writeLabelingInfo(e,r,t,i){e&&e.length&&(r.layerDefinition={drawingInfo:{labelingInfo:e.map((e=>e.write({},i)))}})}set labelsVisible(e){this._setAndNotifyLayer("labelsVisible",e)}set layer(e){this._set("layer",e),this.sublayers?.forEach((r=>r.layer=e))}set listMode(e){this._set("listMode",e)}set minScale(e){this._setAndNotifyLayer("minScale",e)}readMinScale(e,r){return r.minScale||r.layerDefinition?.minScale||0}set maxScale(e){this._setAndNotifyLayer("maxScale",e)}readMaxScale(e,r){return r.maxScale||r.layerDefinition?.maxScale||0}readObjectIdFieldFromService(e,r){if((r=r.layerDefinition||r).objectIdField)return r.objectIdField;const t=r.fields?.find((e=>"esriFieldTypeOID"===e.type));return t?.name}set opacity(e){this._setAndNotifyLayer("opacity",e)}readOpacity(e,r){const{layerDefinition:t}=r;return 1-.01*(t?.transparency??t?.drawingInfo?.transparency??0)}writeOpacity(e,r,t,i){r.layerDefinition={drawingInfo:{transparency:100-100*e}}}set orderBy(e){this._setAndNotifyLayer("orderBy",e)}writeParent(e,r){this.parent&&this.parent!==this.layer?r.parentLayerId=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_17__/* .ensureInteger */ .Vr)(this.parent.id):r.parentLayerId=-1}get queryTask(){if(!this.layer)return null;const{capabilities:e,fieldsIndex:r,layer:t,url:i}=this,{spatialReference:o}=t,s="gdbVersion"in t?t.gdbVersion:void 0,a=(0,_core_has_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)("featurelayer-pbf")&&e?.query.supportsFormatPBF;return new _graphics_sources_support_QueryTask_js__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A({fieldsIndex:r,gdbVersion:s,pbfSupported:a,queryAttachmentsSupported:e?.operations?.supportsQueryAttachments??!1,sourceSpatialReference:o,url:i})}set renderer(e){if((0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_29__/* .fixRendererFields */ .yp)(e,this.fieldsIndex),e)for(const r of e.symbols)if((0,_symbols_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_43__/* .isSymbol3D */ .wk)(r)){_core_Logger_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A.getLogger(this).warn("Sublayer renderer should use 2D symbols");break}this._setAndNotifyLayer("renderer",e)}get source(){return this._get("source")||new _source_MapLayerSource_js__WEBPACK_IMPORTED_MODULE_37__/* .MapLayerSource */ .f({mapLayerId:this.id})}set source(e){this._setAndNotifyLayer("source",e)}set sublayers(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)}castSublayers(e){return (0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_17__/* .ensureType */ .dp)(_core_Collection_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.ofType(W),e)}writeSublayers(e,r,t){this.sublayers?.length&&(r[t]=this.sublayers.map((e=>e.id)).toArray().reverse())}readTitle(e,r){return r.layerDefinition?.name??r.name}readTypeIdField(e,r){let t=(r=r.layerDefinition||r).typeIdField;if(t&&r.fields){t=t.toLowerCase();const e=r.fields.find((e=>e.name.toLowerCase()===t));e&&(t=e.name)}return t}get url(){const e=this.layer?.parsedUrl??this._lastParsedUrl,r=this.source;if(!e)return null;if(this._lastParsedUrl=e,"map-layer"===r?.type)return`${e.path}/${r.mapLayerId}`;const t={layer:JSON.stringify({source:this.source})};return`${e.path}/dynamicLayer?${(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__/* .objectToQuery */ .x0)(t)}`}set url(e){this._overrideIfSome("url",e)}set visible(e){this._setAndNotifyLayer("visible",e)}writeVisible(e,r,t,i){r[t]=this.getAtOrigin("defaultVisibility","service")||e}clone(){const{store:e}=(0,_core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_19__/* .getProperties */ .oY)(this),r=new W;return (0,_core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_19__/* .getProperties */ .oY)(r).store=e.clone(se),this.commitProperty("url"),r._lastParsedUrl=this._lastParsedUrl,r}createPopupTemplate(e){return (0,_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_42__/* .createPopupTemplate */ .tn)(this,e)}createQuery(){return new _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .A({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){if(this.hasOwnProperty("sublayers"))return null;const e=(await __webpack_require__.e(/* import() */ 61492).then(__webpack_require__.bind(__webpack_require__, 16730))).default,{layer:r,url:t}=this;let i;if(t&&this.originIdOf("url")>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_18__/* .OriginId */ .Gr.SERVICE)i=new e({url:t});else{if(!r?.parsedUrl)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A("createFeatureLayer:missing-information","Cannot create a FeatureLayer without a url or a parent layer");{const t=r.parsedUrl;i=new e({url:t.path}),t&&this.source&&("map-layer"===this.source.type?i.layerId=this.source.mapLayerId:i.dynamicDataSource=this.source)}}return null!=r?.refreshInterval&&(i.refreshInterval=r.refreshInterval),this.definitionExpression&&(i.definitionExpression=this.definitionExpression),this.floorInfo&&(i.floorInfo=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_7__/* .clone */ .o8)(this.floorInfo)),this.originIdOf("labelingInfo")>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_18__/* .OriginId */ .Gr.SERVICE&&(i.labelingInfo=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_7__/* .clone */ .o8)(this.labelingInfo)),this.originIdOf("labelsVisible")>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_18__/* .OriginId */ .Gr.DEFAULTS&&(i.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_18__/* .OriginId */ .Gr.DEFAULTS&&(i.legendEnabled=this.legendEnabled),this.originIdOf("visible")>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_18__/* .OriginId */ .Gr.DEFAULTS&&(i.visible=this.visible),this.originIdOf("minScale")>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_18__/* .OriginId */ .Gr.DEFAULTS&&(i.minScale=this.minScale),this.originIdOf("maxScale")>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_18__/* .OriginId */ .Gr.DEFAULTS&&(i.maxScale=this.maxScale),this.originIdOf("opacity")>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_18__/* .OriginId */ .Gr.DEFAULTS&&(i.opacity=this.opacity),this.originIdOf("popupTemplate")>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_18__/* .OriginId */ .Gr.DEFAULTS&&(i.popupTemplate=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_7__/* .clone */ .o8)(this.popupTemplate)),this.originIdOf("renderer")>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_18__/* .OriginId */ .Gr.SERVICE&&(i.renderer=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_7__/* .clone */ .o8)(this.renderer)),"data-layer"===this.source?.type&&(i.dynamicDataSource=this.source.clone()),this.originIdOf("title")>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_18__/* .OriginId */ .Gr.DEFAULTS&&(i.title=this.title),"map-image"===r?.type&&r.originIdOf("customParameters")>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_18__/* .OriginId */ .Gr.DEFAULTS&&(i.customParameters=r.customParameters),"tile"===r?.type&&r.originIdOf("customParameters")>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_18__/* .OriginId */ .Gr.DEFAULTS&&(i.customParameters=r.customParameters),i}getField(e){return this.fieldsIndex.get(e)}getFeatureType(e){return (0,_featureLayerUtils_js__WEBPACK_IMPORTED_MODULE_25__/* .getFeatureType */ .xd)(this.types,this.typeIdField,e)}getFieldDomain(e,r){const t=r?.feature,i=this.getFeatureType(t);if(i){const r=i.domains&&i.domains[e];if(r&&"inherited"!==r.type)return r}return this._getLayerDomain(e)}async queryAttachments(e,r){await this.load(),e=_rest_support_AttachmentQuery_js__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .A.from(e);const t=this.capabilities;if(!t?.data?.supportsAttachment)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A("queryAttachments:not-supported","this layer doesn't support attachments");const{attachmentTypes:i,objectIds:s,globalIds:a,num:l,size:n,start:p,where:u}=e;if(!t?.operations?.supportsQueryAttachments){if(i?.length>0||a?.length>0||n?.length>0||l||p||u)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A("queryAttachments:option-not-supported","when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",e)}if(!(s?.length||a?.length||u))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A("queryAttachments:invalid-query","'objectIds', 'globalIds', or 'where' are required to perform attachment query",e);return!t?.attachment?.supportsOrderByFields&&e.orderByFields?.length&&((e=e.clone()).orderByFields=null),this.queryTask.executeAttachmentQuery(e,r)}async queryFeatureCount(e=this.createQuery(),r){if(await this.load(),!this.capabilities.operations.supportsQuery)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A("queryFeatureCount:not-supported","this layer doesn't support queries.");if(!this.url)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A("queryFeatureCount:not-supported","this layer has no url.");const t=this.layer?.apiKey;return await this.queryTask.executeForCount(e,{...r,query:{...this.layer?.customParameters,token:t}})}async queryFeatures(e=this.createQuery(),r){if(await this.load(),!this.capabilities.operations.supportsQuery)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A("queryFeatures:not-supported","this layer doesn't support queries.");if(!this.url)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A("queryFeatures:not-supported","this layer has no url.");const t=await this.queryTask.execute(e,{...r,query:{...this.layer?.customParameters,token:this.layer?.apiKey}});if(t?.features)for(const i of t.features)i.sourceLayer=this;return t}async queryObjectIds(e=this.createQuery(),r){if(await this.load(),!this.capabilities.operations.supportsQuery)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A("queryObjectIds:not-supported","this layer doesn't support queries.");if(!this.url)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A("queryObjectIds:not-supported","this layer has no url.");const t=this.layer?.apiKey;return await this.queryTask.executeForIds(e,{...r,query:{...this.layer?.customParameters,token:t}})}async queryRelatedFeatures(e,r){if(await this.load(),!this.capabilities.operations.supportsQuery)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A("queryRelatedFeatures:not-supported","this layer doesn't support queries.");if(!this.url)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A("queryRelatedFeatures:not-supported","this layer has no url.");const t=this.layer?.apiKey;return await this.queryTask.executeRelationshipQuery(e,{...r,query:{...this.layer?.customParameters,token:t}})}async queryRelatedFeaturesCount(e,r){if(await this.load(),!this.capabilities.operations.supportsQuery)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A("queryRelatedFeaturesCount:not-supported","this layer doesn't support queries.");if(!this.capabilities.queryRelated.supportsCount)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A("queryRelatedFeaturesCount:not-supported","this layer doesn't support query related counts.");if(!this.url)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A("queryRelatedFeaturesCount:not-supported","this layer has no url.");const t=this.layer?.apiKey;return await this.queryTask.executeRelationshipQueryForCount(e,{...r,query:{...this.layer?.customParameters,token:t}})}toExportImageJSON(e){const r={id:this.id,source:this.source?.toJSON()||{mapLayerId:this.id,type:"mapLayer"}},t=(0,_core_sql_js__WEBPACK_IMPORTED_MODULE_45__/* .sqlAnd */ .mA)(e,this.definitionExpression);null!=t&&(r.definitionExpression=t);const i=["renderer","labelingInfo","opacity","labelsVisible"].reduce(((e,r)=>(e[r]=this.originIdOf(r),e)),{}),o=Object.keys(i).some((e=>i[e]>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_18__/* .OriginId */ .Gr.SERVICE));if(o){const e=r.drawingInfo={};if(i.renderer>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_18__/* .OriginId */ .Gr.SERVICE&&(e.renderer=this.renderer?this.renderer.toJSON():null),i.labelsVisible>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_18__/* .OriginId */ .Gr.SERVICE&&(e.showLabels=this.labelsVisible),this.labelsVisible&&i.labelingInfo>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_18__/* .OriginId */ .Gr.SERVICE)if(this.labelingInfo){!this.loaded&&this.labelingInfo?.some((e=>!e.labelPlacement))&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A.getLogger(this).warnOnce(`A Sublayer (title: ${this.title}, id: ${this.id}) has an undefined 'labelPlacement' and so labels cannot be displayed. Either define a valid 'labelPlacement' or call Sublayer.load() to use a default value based on geometry type.`,{sublayer:this});let r=this.labelingInfo;null!=this.geometryType&&(r=(0,_labelingInfo_js__WEBPACK_IMPORTED_MODULE_31__/* .validateLabelingInfo */ .z)(this.labelingInfo,_geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_22__/* .featureGeometryTypeKebabDictionary */ .gy.toJSON(this.geometryType))),e.showLabels=!0,e.labelingInfo=r.filter((e=>e.labelPlacement)).map((e=>e.toJSON({origin:"service",layer:this.layer})))}else e.showLabels=!1;i.opacity>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_18__/* .OriginId */ .Gr.SERVICE&&(e.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(e.renderer)}return(this.layer?.capabilities?.exportMap?.supportsSublayerOrderBy??!1)&&this.originIdOf("orderBy")>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_18__/* .OriginId */ .Gr.SERVICE&&(r.orderBy=this.orderBy?.map((e=>e.toJSON()))??null),r}_assignDefaultSymbolColors(e){this._forEachSimpleMarkerSymbols(e,(e=>{e.color||"esriSMSX"!==e.style&&"esriSMSCross"!==e.style||(e.outline?.color?e.color=e.outline.color:e.color=[0,0,0,0])}))}_forEachSimpleMarkerSymbols(e,r){if(e){const t=("uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:null)??[];for(const e of t)X(e.symbol)&&r(e.symbol);"symbol"in e&&X(e.symbol)&&r(e.symbol),"defaultSymbol"in e&&X(e.defaultSymbol)&&r(e.defaultSymbol)}}_setAndNotifyLayer(e,r){const t=this.layer,i=this._get(e);let o,s;switch(e){case"definitionExpression":case"floorInfo":o="supportsSublayerDefinitionExpression";break;case"minScale":case"maxScale":case"visible":o="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":o="supportsDynamicLayers",s="supportsModification";break;case"orderBy":o="supportsSublayerOrderBy",s="supportsModification"}const a=(0,_core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_19__/* .getProperties */ .oY)(this).getDefaultOrigin();if("service"!==a){if(o&&!1===this.layer?.capabilities?.exportMap?.[o])return void this._logLockedError(e,`capability not available 'layer.capabilities.exportMap.${o}'`);if(s&&!1===this.capabilities?.exportMap[s])return void this._logLockedError(e,`capability not available 'capabilities.exportMap.${s}'`)}"source"!==e||"not-loaded"===this.loadStatus?(this._set(e,r),"service"!==a&&i!==r&&t&&t.emit&&t.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(e,r){r&&(r.forEach((e=>{e.parent=null,e.layer=null})),this.removeAllHandles()),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer})),this.addHandles([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null})),e.on("before-changes",(e=>{(this.layer?.capabilities?.exportMap?.supportsSublayersChanges??1)||(_core_Logger_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A.getLogger(this).error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),e.preventDefault())}))]))}_logLockedError(e,r){const{layer:t,declaredClass:i}=this;_core_Logger_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A.getLogger(i).error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A("sublayer:locked",`Property '${String(e)}' can't be changed on Sublayer from the layer '${t?.id}'`,{reason:r,sublayer:this,layer:t}))}_getLayerDomain(e){return this.fieldsIndex.get(e)?.domain??null}static{this.test={isMapImageLayerOverridePolicy:e=>e===te||e===re||e===Z,isTileImageLayerOverridePolicy:e=>e===ee}}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({type:_tables_AttributeTableTemplate_js__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .A,json:{name:"attributeTableInfo",write:{overridePolicy:Z},origins:{"web-scene":{write:!1}}}})],ae.prototype,"attributeTableTemplate",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({readOnly:!0})],ae.prototype,"capabilities",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_14__/* .reader */ .w)("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],ae.prototype,"readCapabilities",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)()],ae.prototype,"defaultPopupTemplate",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:Z}}})],ae.prototype,"definitionExpression",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({readOnly:!0})],ae.prototype,"effectiveScaleRange",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_14__/* .reader */ .w)("service","maxScaleRange",["minScale","maxScale"])],ae.prototype,"readMaxScaleRange",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({type:[_Field_js__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],ae.prototype,"fields",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({readOnly:!0})],ae.prototype,"fieldsIndex",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({type:_LayerFloorInfo_js__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .A,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:Z},origins:{"web-scene":{read:!1,write:!1}}}})],ae.prototype,"floorInfo",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A,json:{read:{source:"layerDefinition.extent"}}})],ae.prototype,"fullExtent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({type:_geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_22__/* .featureGeometryTypeKebabDictionary */ .gy.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:_geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_22__/* .featureGeometryTypeKebabDictionary */ .gy.read}}}}})],ae.prototype,"geometryType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({type:String})],ae.prototype,"globalIdField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_14__/* .reader */ .w)("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],ae.prototype,"readGlobalIdFieldFromService",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_17__/* .Integer */ .jz,json:{write:{ignoreOrigin:!0}}})],ae.prototype,"id",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({readOnly:!0})],ae.prototype,"isTable",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_14__/* .reader */ .w)("service","isTable",["type"])],ae.prototype,"readIsTable",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({value:null,type:[_LabelClass_js__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .A],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:te}}})],ae.prototype,"labelingInfo",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_16__/* .writer */ .K)("labelingInfo")],ae.prototype,"writeLabelingInfo",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:re}}})],ae.prototype,"labelsVisible",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({value:null})],ae.prototype,"layer",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({type:String,json:{write:{overridePolicy:ee}}})],ae.prototype,"layerItemId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:ie}}})],ae.prototype,"legendEnabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],ae.prototype,"listMode",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({type:Number,value:0,json:{write:{overridePolicy:re}}})],ae.prototype,"minScale",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_14__/* .reader */ .w)("minScale",["minScale","layerDefinition.minScale"])],ae.prototype,"readMinScale",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({type:Number,value:0,json:{write:{overridePolicy:re}}})],ae.prototype,"maxScale",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_14__/* .reader */ .w)("maxScale",["maxScale","layerDefinition.maxScale"])],ae.prototype,"readMaxScale",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)()],ae.prototype,"objectIdField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_14__/* .reader */ .w)("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],ae.prototype,"readObjectIdFieldFromService",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:re}}})],ae.prototype,"opacity",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_14__/* .reader */ .w)("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],ae.prototype,"readOpacity",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_16__/* .writer */ .K)("opacity")],ae.prototype,"writeOpacity",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({value:null,type:[_OrderByInfo_js__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A],json:{name:"layerDefinition.orderBy",read:{reader:_mixins_OrderedLayer_js__WEBPACK_IMPORTED_MODULE_24__/* .readOrderByInfos */ .Rr},write:{overridePolicy:Z},origins:{"web-scene":{read:!1,write:!1}}}})],ae.prototype,"orderBy",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({json:{type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_17__/* .Integer */ .jz,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:re}}})],ae.prototype,"parent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_16__/* .writer */ .K)("parent")],ae.prototype,"writeParent",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,r)=>!r.disablePopup},write:{target:"disablePopup",overridePolicy:ie,writer(e,r,t){r[t]=!e}}}})],ae.prototype,"popupEnabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({type:_PopupTemplate_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:ie}}})],ae.prototype,"popupTemplate",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({readOnly:!0})],ae.prototype,"queryTask",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({type:[_Relationship_js__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A],readOnly:!0,json:{origins:{service:{read:{source:"layerDefinition.relationships"}}}}})],ae.prototype,"relationships",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({types:_renderers_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_38__/* .rendererTypes */ .Hg,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:te},origins:{"web-scene":{types:_renderers_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_38__/* .webSceneRendererTypes */ .XJ,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:te}}}}})],ae.prototype,"renderer",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({types:{key:"type",base:null,typeMap:{"data-layer":_source_DataLayerSource_js__WEBPACK_IMPORTED_MODULE_36__/* .DataLayerSource */ .L,"map-layer":_source_MapLayerSource_js__WEBPACK_IMPORTED_MODULE_37__/* .MapLayerSource */ .f}},cast(e){if(e){if("mapLayerId"in e)return (0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_17__/* .ensureClass */ .PZ)(_source_MapLayerSource_js__WEBPACK_IMPORTED_MODULE_37__/* .MapLayerSource */ .f,e);if("dataSource"in e)return (0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_17__/* .ensureClass */ .PZ)(_source_DataLayerSource_js__WEBPACK_IMPORTED_MODULE_36__/* .DataLayerSource */ .L,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:re}}})],ae.prototype,"source",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)()],ae.prototype,"sourceJSON",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A,json:{origins:{service:{read:{source:"layerDefinition.extent.spatialReference"}}}}})],ae.prototype,"spatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({value:null,json:{type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_17__/* .Integer */ .jz],write:{target:"subLayerIds",allowNull:!0,overridePolicy:re}}})],ae.prototype,"sublayers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_13__/* .cast */ .w)("sublayers")],ae.prototype,"castSublayers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_16__/* .writer */ .K)("sublayers")],ae.prototype,"writeSublayers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({type:String,json:{name:"name",write:{overridePolicy:ie}}})],ae.prototype,"title",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_14__/* .reader */ .w)("service","title",["name","layerDefinition.name"])],ae.prototype,"readTitle",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({type:String})],ae.prototype,"typeIdField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({json:{read:!1},readOnly:!0,value:"sublayer"})],ae.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_14__/* .reader */ .w)("typeIdField",["layerDefinition.typeIdField"])],ae.prototype,"readTypeIdField",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({type:[_FeatureType_js__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],ae.prototype,"types",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({type:String,json:{name:"layerUrl",write:{overridePolicy:ee}}})],ae.prototype,"url",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:re}}})],ae.prototype,"visible",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_16__/* .writer */ .K)("visible")],ae.prototype,"writeVisible",null),ae=W=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_15__/* .subclass */ .$)("esri.layers.support.Sublayer")],ae);


/***/ }),

/***/ 15089:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ o),
/* harmony export */   m: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62991);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49175);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function t(t,o,a){let c;try{c=await createImageBitmap(t)}catch(l){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("request:server",`Unable to load ${o}`,{url:o,error:l})}return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .throwIfAborted */ .Te)(a),c}async function o(t,o,a,c,l){let n;try{n=await createImageBitmap(t)}catch(i){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("request:server",`Unable to load tile ${o}/${a}/${c}`,{error:i,level:o,row:a,col:c})}return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .throwIfAborted */ .Te)(l),n}


/***/ }),

/***/ 52360:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fm: () => (/* binding */ s),
/* harmony export */   Hz: () => (/* binding */ d),
/* harmony export */   JQ: () => (/* binding */ p),
/* harmony export */   JZ: () => (/* binding */ h),
/* harmony export */   ND: () => (/* binding */ F),
/* harmony export */   R_: () => (/* binding */ u),
/* harmony export */   U9: () => (/* binding */ a),
/* harmony export */   fu: () => (/* binding */ n),
/* harmony export */   nr: () => (/* binding */ m),
/* harmony export */   oF: () => (/* binding */ r),
/* harmony export */   rq: () => (/* binding */ c),
/* harmony export */   z$: () => (/* binding */ f)
/* harmony export */ });
/* unused harmony exports getFilePickerAcceptType, getFilenameFormatId, getFormatDescription, getFormatExtensions, getFormatId, getFormatMimeType, getGltfFormatId, getSupportedExtensions */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const t=[["binary","application/octet-stream","bin",""]];function n(t,n){return null!=L(n.name,t?.supportedFormats??[])}function r(t,n){if(!t)return!1;const r=c(n,t.supportedFormats??[]);return null!=r&&t.editFormats.includes(r)}function o(t){return w(t?.supportedFormats??[]).flatMap(j).map((t=>`.${t}`))}function e(t){const n={};for(const r of w(t?.supportedFormats??[])){const[t,o]=y(r).split(";"),e=t.trim().toLowerCase(),u=j(r).map((t=>`.${t}`));n[e]??=[],n[e].push(...u)}return{description:"3D Models",accept:n}}function u(t,n){return g(C(t,n))}function i(t,n){return g(L(t,n))}function s(t,n){return y(b(t,n))}function c(t,n){return i(t.name,n)??u(t.type,n)}function f(t,n,r){return u(t,r)??i(n,r)}function a({supportedFormats:t}){return f("model/gltf-binary","glb",t)}function p(t){const n=a(t);return null!=n&&t.editFormats.includes(n)}function l({supportedFormats:t}){return f("model/gltf+json","gltf",t)}function d(t){if(!t)return null;const n=a(t),r=l(t);let o=null;for(const e of t.queryFormats){if(e===n)return e;e===r&&(o=e)}return o}function m({supportedFormats:t}){return f("application/esri3do-SR_world","wld",t)}function F({supportedFormats:t}){return f("application/esri3do-SR_prj","prj",t)}function w(n){return[...t,...n]}function b(t,n){return w(n).find((n=>g(n)===t))}function C(t,n){const r=t.toLowerCase();return w(n).find((t=>y(t)===r))}function L(t,n){const r=t.toLowerCase();return w(n).find((t=>j(t).some((t=>r.endsWith(t)))))}function g(t){return t?.[0]}function y(t){return t?.[1].toLowerCase()}function j(t){return t?.[2].split(",").map((t=>t.toLowerCase()))??[]}function M(t){return t?.[3]}function h(t){return t.tables?.find((t=>"assetMaps"===t.role))}


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

/***/ 22508:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sk: () => (/* binding */ i),
/* harmony export */   Zx: () => (/* binding */ e),
/* harmony export */   _X: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91101);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(r,e,i){const o=e.flatten((({sublayers:r})=>r)).length;if(o!==r.length)return!0;return!!r.some((r=>r.originIdOf("minScale")>i||r.originIdOf("maxScale")>i||r.originIdOf("renderer")>i||r.originIdOf("labelingInfo")>i||r.originIdOf("opacity")>i||r.originIdOf("labelsVisible")>i||r.originIdOf("source")>i))||!n(r,e)}function i(e,i,o){return!!e.some((e=>{const i=e.source,n=!i||"map-layer"===i.type&&i.mapLayerId===e.id&&(null==i.gdbVersion||i.gdbVersion===o);e.commitProperty("renderer"),e.commitProperty("labelingInfo"),e.commitProperty("opacity"),e.commitProperty("labelsVisible"),e.commitProperty("orderBy");const t=e.layer?.capabilities?.exportMap?.supportsSublayerOrderBy??!1;return!n||e.originIdOf("renderer")>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_0__/* .OriginId */ .Gr.SERVICE||e.originIdOf("labelingInfo")>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_0__/* .OriginId */ .Gr.SERVICE||e.originIdOf("opacity")>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_0__/* .OriginId */ .Gr.SERVICE||e.originIdOf("labelsVisible")>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_0__/* .OriginId */ .Gr.SERVICE||t&&e.originIdOf("orderBy")>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_0__/* .OriginId */ .Gr.SERVICE}))||!n(e,i)}function n(r,e){if(!r?.length||null==e)return!0;const i=e.slice().reverse().flatten((({sublayers:r})=>r&&r.toArray().reverse())).map((r=>r.id)).toArray();if(r.length>i.length)return!1;let n=0;const o=i.length;for(const{id:t}of r){for(;n<o&&i[n]!==t;)n++;if(n>=o)return!1}return!0}function o(r){return!!r&&r.some((r=>null!=r.minScale||null!=r.layerDefinition?.minScale))}


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

/***/ 96905:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ o),
/* harmony export */   X: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56053);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function r(e){return{geometryType:(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getJsonType */ .$B)(e[0]),geometries:e.map((e=>e.toJSON()))}}function o(t,r,o){const n=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getGeometryType */ .xD)(r);return t.map((e=>{const t=n.fromJSON(e);return t.spatialReference=o,t}))}


/***/ }),

/***/ 49173:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(n){const o={};for(const e in n){if("declaredClass"===e)continue;const r=n[e];if(null!=r&&"function"!=typeof r)if(Array.isArray(r)){o[e]=[];for(let n=0;n<r.length;n++)o[e][n]=t(r[n])}else"object"==typeof r?r.toJSON&&(o[e]=JSON.stringify(r)):o[e]=r}return o}


/***/ }),

/***/ 15830:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36321);
/* harmony import */ var _operations_query_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95254);
/* harmony import */ var _support_Query_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39609);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function s(s,i,m,n){const p=(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .parseUrl */ .Dl)(s),{data:u}=await (0,_operations_query_js__WEBPACK_IMPORTED_MODULE_1__/* .executeQueryForCount */ .gW)(p,_support_Query_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.from(i),m,n);return u.count}


/***/ }),

/***/ 30271:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36321);
/* harmony import */ var _operations_query_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95254);
/* harmony import */ var _support_Query_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39609);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function i(i,n,u,a){const e=(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .parseUrl */ .Dl)(i),{data:f}=await (0,_operations_query_js__WEBPACK_IMPORTED_MODULE_1__/* .executeQueryForIds */ .Pk)(e,_support_Query_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.from(n),u,a);return f.objectIds??s(f.uniqueIds)??[]}function n(r){return!Array.isArray(r[0])}function s(r){if(r)return n(r)?r:r.map((r=>JSON.stringify(r)))}


/***/ }),

/***/ 500:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ a),
/* harmony export */   s: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36321);
/* harmony import */ var _operations_query_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95254);
/* harmony import */ var _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74704);
/* harmony import */ var _support_Query_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39609);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function s(r,t,e,s){const n=await a(r,t,e,s);return _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.fromJSON(n)}async function a(o,s,a,n){const i=(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .parseUrl */ .Dl)(o),p={...a},u=_support_Query_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.from(s),{data:m}=await (0,_operations_query_js__WEBPACK_IMPORTED_MODULE_1__/* .executeQuery */ .eW)(i,u,u.sourceSpatialReference,p,n);return m}


/***/ }),

/***/ 91212:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SH: () => (/* binding */ S),
/* harmony export */   ae: () => (/* binding */ h),
/* harmony export */   cn: () => (/* binding */ b)
/* harmony export */ });
/* unused harmony export parseFieldType */
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62991);
/* harmony import */ var _core_pbf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16269);
/* harmony import */ var _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65977);
/* harmony import */ var _pbfOptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12443);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const a=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML","esriFieldTypeBigInteger","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"],n=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],i=["upperLeft","lowerLeft"];function o(e){return e>=a.length?null:a[e]}function c(e){return e>=n.length?null:n[e]}function l(e){return e>=i.length?null:i[e]}function g(e,t){return t>=e.geometryTypes.length?null:e.geometryTypes[t]}function p(e,t,s){const r=3,a=e.asUnsafe(),n=t.createPointGeometry(s);for(;a.next();)switch(a.tag()){case r:{const e=a.getUInt32(),s=a.pos()+e;let r=0;for(;a.pos()<s;)t.addCoordinatePoint(n,a.getSInt64(),r++);break}default:a.skip()}return n}function u(e,t,s){const r=2,a=3,n=e.asUnsafe(),i=t.createGeometry(s),o=2+(s.hasZ?1:0)+(s.hasM?1:0);for(;n.next();)switch(n.tag()){case r:{const e=n.getUInt32(),s=n.pos()+e;let r=0;for(;n.pos()<s;)t.addLength(i,n.getUInt32(),r++);break}case a:{const e=n.getUInt32(),s=n.pos()+e;let r=0;for(t.allocateCoordinates(i);n.pos()<s;)t.addCoordinate(i,n.getSInt64(),r),r++,r===o&&(r=0);break}default:n.skip()}return i}function f(e){const t=1,a=2,n=3,i=e.asUnsafe(),o=new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A;let c="esriGeometryPoint";for(;i.next();)switch(i.tag()){case a:{const e=i.getUInt32(),t=i.pos()+e;for(;i.pos()<t;)o.lengths.push(i.getUInt32());break}case n:{const e=i.getUInt32(),t=i.pos()+e;for(;i.pos()<t;)o.coords.push(i.getSInt64());break}case t:c=_pbfOptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_3__/* .optimizedGeometryTypes */ .z[i.getEnum()];break;default:i.skip()}return{queryGeometry:o,queryGeometryType:c}}function y(e){const t=1,s=2,r=3,a=4,n=5,i=6,o=7,c=8,l=9,g=e.asUnsafe();for(;g.next();)switch(g.tag()){case t:return g.getString();case s:return g.getFloat();case r:return g.getDouble();case a:return g.getSInt32();case n:return g.getUInt32();case i:return g.getInt64();case o:return g.getUInt64();case c:return g.getSInt64();case l:return g.getBool();default:return g.skip(),null}return null}function b(e){const t=1,s=2,r=3,a=4,n=5,i=6,l=e.asUnsafe(),g={type:o(0)};for(;l.next();)switch(l.tag()){case t:g.name=l.getString();break;case s:g.type=o(l.getEnum());break;case r:g.alias=l.getString();break;case a:g.sqlType=c(l.getEnum());break;case n:l.skip();break;case i:g.defaultValue=l.getString();break;default:l.skip()}return g}function k(e){const t=1,s=2,r={},a=e.asUnsafe();for(;a.next();)switch(a.tag()){case t:r.name=a.getString();break;case s:r.isSystemMaintained=a.getBool();break;default:a.skip()}return r}function d(e,t,s,r){const a=1,n=2,i=4,o=t.createFeature(s);let c=0;for(;e.next();)switch(e.tag()){case a:{const t=r[c++].name;o.attributes[t]=e.processMessage(y);break}case n:o.geometry=e.processMessageWithArgs(u,t,s);break;case i:o.centroid=e.processMessageWithArgs(p,t,s);break;default:e.skip()}return o}function T(e){const t=1,s=2,r=3,a=4,n=[1,1,1,1],i=e.asUnsafe();for(;i.next();)switch(i.tag()){case t:n[0]=i.getDouble();break;case s:n[1]=i.getDouble();break;case a:n[2]=i.getDouble();break;case r:n[3]=i.getDouble();break;default:i.skip()}return n}function m(e){const t=1,s=2,r=3,a=4,n=[0,0,0,0],i=e.asUnsafe();for(;i.next();)switch(i.tag()){case t:n[0]=i.getDouble();break;case s:n[1]=i.getDouble();break;case a:n[2]=i.getDouble();break;case r:n[3]=i.getDouble();break;default:i.skip()}return n}function h(e){const t=1,s=2,r=3,a={originPosition:l(0)},n=e.asUnsafe();for(;n.next();)switch(n.tag()){case t:a.originPosition=l(n.getEnum());break;case s:a.scale=n.processMessage(T);break;case r:a.translate=n.processMessage(m);break;default:n.skip()}return a}function F(e){const t=1,s=2,r=3,a={},n=e.asUnsafe();for(;n.next();)switch(n.tag()){case t:a.shapeAreaFieldName=n.getString();break;case s:a.shapeLengthFieldName=n.getString();break;case r:a.units=n.getString();break;default:n.skip()}return a}function q(e,t){const s=1,r=2,a=3,n=4,i=5,o=t.createSpatialReference();for(;e.next();)switch(e.tag()){case s:o.wkid=e.getUInt32();break;case i:o.wkt=e.getString();break;case r:o.latestWkid=e.getUInt32();break;case a:o.vcsWkid=e.getUInt32();break;case n:o.latestVcsWkid=e.getUInt32();break;default:e.skip()}return o}function I(e,t){const s=1,r=2,a=3,n=4,i=5,o=7,c=8,l=9,p=10,u=11,f=12,y=13,T=15,m=t.createFeatureResult(),I=e.asUnsafe();m.geometryType=g(t,0);let U=!1;for(;I.next();)switch(I.tag()){case s:m.objectIdFieldName=I.getString();break;case a:m.globalIdFieldName=I.getString();break;case n:m.geohashFieldName=I.getString();break;case i:m.geometryProperties=I.processMessage(F);break;case o:m.geometryType=g(t,I.getEnum());break;case c:m.spatialReference=I.processMessageWithArgs(q,t);break;case p:m.hasZ=I.getBool();break;case u:m.hasM=I.getBool();break;case f:m.transform=I.processMessage(h);break;case l:m.exceededTransferLimit=I.getBool();break;case y:t.addField(m,I.processMessage(b));break;case T:U||(t.prepareFeatures(m),U=!0),t.addFeature(m,I.processMessageWithArgs(d,t,m,m.fields));break;case r:m.uniqueIdField=I.processMessage(k);break;default:I.skip()}return t.finishFeatureResult(m),m}function U(e,t){const s=1,r=4,a={};let n=null;for(;e.next();)switch(e.tag()){case r:n=e.processMessageWithArgs(f);break;case s:a.featureResult=e.processMessageWithArgs(I,t);break;default:e.skip()}return null!=n&&a.featureResult&&t.addQueryGeometry(a,n),a}function S(s,r){try{const e=2,a=new _core_pbf_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(new Uint8Array(s),new DataView(s)),n={};for(;a.next();)if(a.tag()===e)n.queryResult=a.processMessageWithArgs(U,r);else a.skip();return n}catch(a){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:a})}}


/***/ }),

/***/ 12443:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ a),
/* harmony export */   z: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5262);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67488);
/* harmony import */ var _layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85747);
/* harmony import */ var _layers_graphics_OptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97011);
/* harmony import */ var _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65977);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const n=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];class a{constructor(e){this._options=e,this.geometryTypes=n,this._coordinatePtr=0,this._vertexDimension=0}createFeatureResult(){return new _layers_graphics_OptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A}prepareFeatures(e){this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++}finishFeatureResult(o){if(!o?.features||!o.hasZ||!this._options.sourceSpatialReference||!o.spatialReference||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .equals */ .aI)(o.spatialReference,this._options.sourceSpatialReference)||o.spatialReference.vcsWkid)return;const i=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getMetersPerVerticalUnitForSR */ .G9)(this._options.sourceSpatialReference)/(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getMetersPerVerticalUnitForSR */ .G9)(o.spatialReference);if(1!==i)for(const e of o.features){if(!(0,_layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_2__/* .hasGeometry */ .N3)(e))continue;const t=e.geometry.coords;for(let e=2;e<t.length;e+=3)t[e]*=i}}addFeature(e,t){e.features.push(t)}createFeature(){return new _layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_2__/* .OptimizedFeature */ .Om(null,{},null,0)}createSpatialReference(){return{wkid:0}}createGeometry(){return new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A}addField(e,t){e.fields.push(t)}allocateCoordinates(e){e.coords.length=e.lengths.reduce(((e,t)=>e+t),0)*this._vertexDimension,this._coordinatePtr=0}addCoordinate(e,t){e.coords[this._coordinatePtr++]=t}addCoordinatePoint(e,t){e.coords.push(t)}addLength(e,t){e.lengths.push(t)}addQueryGeometry(e,t){e.queryGeometry=t.queryGeometry,e.queryGeometryType=t.queryGeometryType}createPointGeometry(){return new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A}}


/***/ }),

/***/ 91039:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _pbfFeatureServiceParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91212);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(t,r){const u=(0,_pbfFeatureServiceParser_js__WEBPACK_IMPORTED_MODULE_0__/* .parseFeatureQuery */ .SH)(t,r),o=u.queryResult.featureResult,s=u.queryResult.queryGeometry,y=u.queryResult.queryGeometryType;if(o&&o.features&&o.features.length&&o.objectIdFieldName){const e=o.objectIdFieldName;for(const t of o.features)t.attributes&&(t.objectId=t.attributes[e])}return o&&(o.queryGeometry=s,o.queryGeometryType=y),o}


/***/ }),

/***/ 95254:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IJ: () => (/* binding */ f),
/* harmony export */   Jf: () => (/* binding */ O),
/* harmony export */   Pk: () => (/* binding */ p),
/* harmony export */   eW: () => (/* binding */ c),
/* harmony export */   gW: () => (/* binding */ S),
/* harmony export */   kS: () => (/* binding */ m)
/* harmony export */ });
/* unused harmony exports encodeGeometry, queryToQueryStringParameters, runQuery */
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38116);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19759);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56053);
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43861);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67488);
/* harmony import */ var _operations_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49173);
/* harmony import */ var _pbfQueryUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91039);
/* harmony import */ var _queryZScale_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11378);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const l="Layer does not support extent calculation.";function d(e,t){if(t&&"extent"===e.type)return`${e.xmin},${e.ymin},${e.xmax},${e.ymax}`;if(t&&"point"===e.type)return`${e.x},${e.y}`;const r=e.toJSON();return delete r.spatialReference,JSON.stringify(r)}function y(e,t,r){const i=e.geometry,a=e.toJSON();delete a.compactGeometryEnabled,delete a.defaultSpatialReferenceEnabled;const s=a;let u,l,y;if(i&&(l=i.spatialReference,y=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .srToRESTValue */ .YX)(l),s.geometryType=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getJsonType */ .$B)(i),s.geometry=d(i,e.compactGeometryEnabled),s.inSR=y),a.groupByFieldsForStatistics&&(s.groupByFieldsForStatistics=a.groupByFieldsForStatistics.join(",")),a.objectIds)switch(r?.uniqueIdFields?.length){case void 0:s.objectIds=a.objectIds.join(",");break;case 1:s.uniqueIds=JSON.stringify(a.objectIds),delete s.objectIds;break;default:s.uniqueIds=JSON.stringify(a.objectIds.map((e=>JSON.parse(e)))),delete s.objectIds}if(a.orderByFields&&(s.orderByFields=a.orderByFields.join(",")),!a.outFields||!a.returnDistinctValues&&(t?.returnCountOnly||t?.returnExtentOnly||t?.returnIdsOnly)?delete s.outFields:a.outFields.includes("*")?s.outFields="*":s.outFields=a.outFields.join(","),a.outSR?(s.outSR=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .srToRESTValue */ .YX)(a.outSR),u=e.outSpatialReference):i&&(a.returnGeometry||a.returnCentroid)&&(s.outSR=s.inSR,u=l),a.returnGeometry&&delete a.returnGeometry,a.outStatistics&&(s.outStatistics=JSON.stringify(a.outStatistics)),a.fullText&&(s.fullText=JSON.stringify(a.fullText)),a.pixelSize&&(s.pixelSize=JSON.stringify(a.pixelSize)),a.quantizationParameters&&(e.defaultSpatialReferenceEnabled&&null!=l&&null!=e.quantizationParameters?.extent&&l.equals(e.quantizationParameters.extent.spatialReference)&&delete a.quantizationParameters.extent.spatialReference,s.quantizationParameters=JSON.stringify(a.quantizationParameters)),a.parameterValues&&(s.parameterValues=JSON.stringify(a.parameterValues)),a.rangeValues&&(s.rangeValues=JSON.stringify(a.rangeValues)),a.dynamicDataSource&&(s.layer=JSON.stringify({source:a.dynamicDataSource}),delete a.dynamicDataSource),a.timeExtent){const e=a.timeExtent,{start:t,end:r}=e;null==t&&null==r||(s.time=t===r?t:`${t??"null"},${r??"null"}`),delete a.timeExtent}return e.defaultSpatialReferenceEnabled&&null!=l&&null!=u&&l.equals(u)&&(s.defaultSR=s.inSR,delete s.inSR,delete s.outSR),s}async function c(e,t,r,n,i){const o=t.timeExtent?.isEmpty?{data:{features:[]}}:await g(e,t,"json",n,void 0,i);return (0,_queryZScale_js__WEBPACK_IMPORTED_MODULE_6__/* .applyFeatureSetZUnitScaling */ .q)(t,r,o.data),o}async function f(e,t,r,n,i){if(t.timeExtent?.isEmpty)return{data:r.createFeatureResult()};const o=await m(e,t,n,i),a=o;return a.data=(0,_pbfQueryUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .parsePBFFeatureQuery */ .m)(o.data,r),a}function m(e,t,r,n){return g(e,t,"pbf",r,void 0,n)}function p(e,t,r,n){return t.timeExtent?.isEmpty?Promise.resolve({data:{objectIds:[]}}):g(e,t,"json",r,{returnIdsOnly:!0},n)}function S(e,t,r,n){return t.timeExtent?.isEmpty?Promise.resolve({data:{count:0}}):g(e,t,"json",r,{returnIdsOnly:!0,returnCountOnly:!0},n)}async function O(e,t,r){if(t.timeExtent?.isEmpty)return{data:{count:0,extent:null}};const n=await g(e,t,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}),i=n.data;if(i.hasOwnProperty("extent"))return n;if(i.features)throw new Error(l);if(i.hasOwnProperty("count"))throw new Error(l);return n}function x(e,t){if(!e.returnIdsOnly||!t.uniqueIdFields)return e;const r={...e,returnUniqueIdsOnly:!0};return delete r.returnIdsOnly,r}async function g(n,o,s,u={},l={},d={}){const c="string"==typeof n?(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .urlToObject */ .An)(n):n,f=o.geometry?[o.geometry]:[],m=await (0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .normalizeCentralMeridian */ .el)(f,null,{signal:u.signal}),p=m?.[0];null!=p&&((o=o.clone()).geometry=p);const S=(0,_operations_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .mapParameters */ .z)({...c.query,f:s,...x(l,d),...y(o,l,d)});return (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .join */ .fj)(c.path,j(o,l)?"query3d":"query"),{...u,responseType:"pbf"===s?"array-buffer":"json",query:{...S,...u.query}})}function j(e,t){return null!=e.formatOf3DObjects&&!(t.returnCountOnly||t.returnExtentOnly||t.returnIdsOnly)}


/***/ }),

/***/ 11378:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _geometry_support_zscale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55792);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(t,o,r){if(!r?.features||!r.hasZ)return;const f=(0,_geometry_support_zscale_js__WEBPACK_IMPORTED_MODULE_0__/* .getGeometryZScaler */ .N)(r.geometryType,o,t.outSpatialReference);if(null!=f)for(const e of r.features)f(e.geometry)}


/***/ }),

/***/ 36321:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dl: () => (/* binding */ f),
/* harmony export */   gf: () => (/* binding */ a),
/* harmony export */   jV: () => (/* binding */ s),
/* harmony export */   lF: () => (/* binding */ u)
/* harmony export */ });
/* unused harmony export findToken */
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32083);
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6480);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15565);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19759);
/* harmony import */ var _support_apiKeyUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44945);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function s(t,n){return n?{...n,query:{...t??{},...n.query}}:{query:t}}function f(t){return"string"==typeof t?(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .urlToObject */ .An)(t):(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(t)}function u(t,n,r){const e={};for(const i in t){if("declaredClass"===i)continue;const o=t[i];if(null!=o&&"function"!=typeof o)if(Array.isArray(o))e[i]=o.map((t=>u(t)));else if("object"==typeof o)if(o.toJSON){const t=o.toJSON(r?.[i]);e[i]=n?t:JSON.stringify(t)}else e[i]=n?o:JSON.stringify(o);else e[i]=o}return e}function c(t,r){return t?r&&(0,_support_apiKeyUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .supportsApiKey */ .Qc)(t)?r:(0,_support_apiKeyUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .getApiKey */ .CG)(t)??_kernel_js__WEBPACK_IMPORTED_MODULE_1__.id?.findCredential(t)?.token:null}async function a(r,e,i){const o=c(r,e);if(o)return o;!_kernel_js__WEBPACK_IMPORTED_MODULE_1__.id&&_config_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.request.useIdentity&&await __webpack_require__.e(/* import() */ 94018).then(__webpack_require__.bind(__webpack_require__, 94018));const s=await _kernel_js__WEBPACK_IMPORTED_MODULE_1__.id.getCredential(r,i);return s?.token}


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