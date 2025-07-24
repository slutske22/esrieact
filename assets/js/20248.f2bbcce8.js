"use strict";
exports.id = 20248;
exports.ids = [20248];
exports.modules = {

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

/***/ 20248:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  createConnection: () => (/* binding */ r)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(38116);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(62991);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js + 1 modules
var promiseUtils = __webpack_require__(49175);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(19759);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(44153);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/jsonUtils.js
var jsonUtils = __webpack_require__(56053);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/zscale.js
var zscale = __webpack_require__(55792);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Evented.js
var Evented = __webpack_require__(57888);
;// ./node_modules/@arcgis/core/layers/support/StreamConnection.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let c=class extends Evented/* default */.A.EventedAccessor{destroy(){this.emit("destroy")}get connectionError(){return this.errorString?new Error/* default */.A("stream-connection",this.errorString):null}onFeature(r){this.emit("data-received",r)}onMessage(r){this.emit("message-received",r)}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],c.prototype,"connectionError",null),c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.StreamConnection")],c);

;// ./node_modules/@arcgis/core/layers/graphics/sources/connections/WebSocketConnection.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var h;!function(e){e[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSING=2]="CLOSING",e[e.CLOSED=3]="CLOSED"}(h||(h={}));let d=class extends c{constructor(e){super({}),this._outstandingMessages=[],this.errorString=null;const{geometryType:t,spatialReference:o,sourceSpatialReference:s}=e;this._config=e,this._featureZScaler=(0,zscale/* getGeometryZScaler */.N)(t,s,o),this._open()}normalizeCtorArgs(){return{}}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake()}destroy(){super.destroy(),null!=this._websocket&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if(null==this._websocket)return"disconnected";switch(this._websocket.readyState){case h.CONNECTING:case h.OPEN:return"connected";case h.CLOSING:case h.CLOSED:return"disconnected"}}sendMessageToSocket(e){null!=this._websocket?this._websocket.send(JSON.stringify(e)):this._outstandingMessages.push(e)}sendMessageToClient(e){this._onMessage(e)}updateCustomParameters(e){this._config.customParameters=e,null!=this._websocket&&this._websocket.close()}async _tryCreateWebSocket(e=this._config.source.path,r=1e3,i=0){try{if(this.destroyed)return;const t=(0,urlUtils/* addQueryParameters */.a6)(e,this._config.customParameters??{});this._websocket=await this._createWebSocket(t),this.notifyChange("connectionStatus")}catch(c){const n=r/1e3;return this._config.maxReconnectionAttempts&&i>=this._config.maxReconnectionAttempts?(Logger/* default */.A.getLogger(this).error(new Error/* default */.A("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(Logger/* default */.A.getLogger(this).error(new Error/* default */.A("websocket-connection",`Failed to connect. Attempting to reconnect in ${n}s`,c)),await (0,promiseUtils/* after */.Pl)(r),this._tryCreateWebSocket(e,Math.min(1.5*r,1e3*this._config.maxReconnectionInterval),i+1))}}_setWebSocketJSONParseHandler(e){e.onmessage=e=>{try{const t=JSON.parse(e.data);this._onMessage(t)}catch(s){return void Logger/* default */.A.getLogger(this).error(new Error/* default */.A("websocket-connection","Failed to parse message, invalid JSON",{error:s}))}}}_createWebSocket(e){return new Promise(((t,o)=>{const s=new WebSocket(e);s.onopen=()=>{if(s.onopen=null,this.destroyed)return s.onclose=null,void s.close();s.onclose=e=>this._onClose(e),s.onerror=e=>this._onError(e),this._setWebSocketJSONParseHandler(s),t(s)},s.onclose=e=>{s.onopen=s.onclose=null,o(e)}}))}async _handshake(e=1e4){const s=this._websocket;if(null==s)return;const n=(0,promiseUtils/* createResolver */.Tw)(),i=s.onmessage,{filter:c,outFields:a,spatialReference:l}=this._config;return n.timeout(e),s.onmessage=e=>{let r=null;try{r=JSON.parse(e.data)}catch(h){}r&&"object"==typeof r||(Logger/* default */.A.getLogger(this).error(new Error/* default */.A("websocket-connection","Protocol violation. Handshake failed - malformed message",e.data)),n.reject(),this.destroy()),r.spatialReference?.wkid!==l?.wkid&&(Logger/* default */.A.getLogger(this).error(new Error/* default */.A("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${l.wkid}`,e.data)),n.reject(),this.destroy()),"json"!==r.format&&(Logger/* default */.A.getLogger(this).error(new Error/* default */.A("websocket-connection","Protocol violation. Handshake failed - format is not set",e.data)),n.reject(),this.destroy()),c&&r.filter!==c&&Logger/* default */.A.getLogger(this).error(new Error/* default */.A("websocket-connection","Tried to set filter, but server doesn't support it")),a&&r.outFields!==a&&Logger/* default */.A.getLogger(this).error(new Error/* default */.A("websocket-connection","Tried to set outFields, but server doesn't support it")),s.onmessage=i;for(const t of this._outstandingMessages)s.send(JSON.stringify(t));this._outstandingMessages=[],n.resolve()},s.send(JSON.stringify({filter:c,outFields:a,format:"json",spatialReference:{wkid:l.wkid}})),n.promise}_onMessage(e){if(this.onMessage(e),"type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)null!=this._featureZScaler&&this._featureZScaler(t.geometry),this.onFeature(t)}}_onError(e){const t="Encountered an error over WebSocket connection";this._set("errorString",t),Logger/* default */.A.getLogger(this).error("websocket-connection",t)}_onClose(e){this._websocket=null,this.notifyChange("connectionStatus"),1e3!==e.code&&Logger/* default */.A.getLogger(this).error("websocket-connection",`WebSocket closed unexpectedly with error code ${e.code}`),this.destroyed||this._open()}};(0,tslib_es6._)([(0,property/* property */.MZ)()],d.prototype,"connectionStatus",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],d.prototype,"errorString",void 0),d=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.graphics.sources.connections.WebSocketConnection")],d);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/query/operations/query.js
var query = __webpack_require__(95254);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/Query.js + 1 modules
var Query = __webpack_require__(39609);
;// ./node_modules/@arcgis/core/layers/graphics/sources/connections/GeoEventConnection.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const GeoEventConnection_h=1e4,GeoEventConnection_d={maxQueryDepth:5,maxRecordCountFactor:3};let g=class extends d{constructor(e){super({...GeoEventConnection_d,...e}),this._buddyServicesQuery=null,this._relatedFeatures=null}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||Logger/* default */.A.getLogger(this).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:r,outFields:o}=this._config;this.destroyed||this._setFilter(r,o)}_onMessage(e){if("attributes"in e){let o;try{o=this._enrich(e),null!=this._featureZScaler&&this._featureZScaler(o.geometry)}catch(t){return void Logger/* default */.A.getLogger(this).error(new Error/* default */.A("geoevent-connection","Failed to parse message",t))}this.onFeature(o)}else this.onMessage(e)}async _fetchServiceDefinition(e){const r={f:"json",...this._config.customParameters},i=(0,request/* default */.A)(e.path,{query:r,responseType:"json"}),o=(await i).data;return this._serviceDefinition=o,o}_fetchWebSocketUrl(e,t){const r=e[0],{urls:i,token:o}=r,n=this._inferWebSocketBaseUrl(i);return (0,urlUtils/* addQueryParameters */.a6)(`${n}/subscribe`,{outSR:""+t.wkid,token:o})}_inferWebSocketBaseUrl(e){if(1===e.length)return e[0];for(const t of e)if(t.includes("wss"))return t;return Logger/* default */.A.getLogger(this).error(new Error/* default */.A("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,t){const s=this._websocket;if(null==s||null==e&&null==t)return;const n=JSON.stringify({filter:this._serializeFilter(e,t)});let a=!1;const c=(0,promiseUtils/* createResolver */.Tw)(),u=()=>{a||(this.destroyed||this._websocket!==s||Logger/* default */.A.getLogger(this).error(new Error/* default */.A("geoevent-connection","Server timed out when setting filter")),c.reject())},l=e=>{const t=JSON.parse(e.data);t.filter&&(t.error&&(Logger/* default */.A.getLogger(this).error(new Error/* default */.A("geoevent-connection","Failed to set service filter",t.error)),this._set("errorString",`Could not set service filter - ${t.error}`),c.reject(t.error)),this._setWebSocketJSONParseHandler(s),a=!0,c.resolve())};return s.onmessage=l,s.send(n),setTimeout(u,GeoEventConnection_h),c.promise}_serializeFilter(e,t){const o={};if(null==e&&null==t)return o;if(e?.geometry)try{const t=(0,jsonUtils/* fromJSON */.rS)(e.geometry);if("extent"!==t.type)throw new Error/* default */.A("geoevent-connection",`Expected extent but found type ${t.type}`);o.geometry=JSON.stringify(t.shiftCentralMeridian())}catch(s){Logger/* default */.A.getLogger(this).error(new Error/* default */.A("geoevent-connection","Encountered an error when setting connection geometryDefinition",s))}return e?.where&&"1 = 1"!==e.where&&"1=1"!==e.where&&(o.where=e.where),null!=t&&(o.outFields=t.join(",")),o}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,o=e.attributes[t],s=this._relatedFeatures.get(o);if(!s)return Logger/* default */.A.getLogger(this).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:n,geometry:a}=s;for(const r in n)e.attributes[r]=n[r];return a&&(e.geometry=a),e.geometry||e.centroid||Logger/* default */.A.getLogger(this).error(new Error/* default */.A("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,r=this._queryRelatedFeatures(e),i=this._queryArchive(t);await r;const o=await i;if(!o)return;for(const s of o.features)this.onFeature(this._enrich(s))}catch(e){Logger/* default */.A.getLogger(this).error(new Error/* default */.A("geoevent-connection","Encountered an error when querying buddy services",{error:e}))}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t)}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){const t=new((await __webpack_require__.e(/* import() */ 94349).then(__webpack_require__.bind(__webpack_require__, 16730))).default)({url:e}),{capabilities:r}=await t.load(),i=r.query.supportsMaxRecordCountFactor,o=r.query.supportsPagination,s=r.query.supportsCentroid,n=this._config.maxRecordCountFactor,c=t.capabilities.query.maxRecordCount,u=i?c*n:c,h=new Query/* default */.A;if(h.outFields=this._config.outFields??["*"],h.where=this._config.filter?.where??"1=1",h.returnGeometry=!0,h.returnExceededLimitFeatures=!0,h.outSpatialReference=SpatialReference/* default */.A.fromJSON(this._config.spatialReference),s&&(h.returnCentroid=!0),i&&(h.maxRecordCountFactor=n),o)return h.num=u,t.destroy(),this._queryPages(e,h);const d=await (0,query/* executeQuery */.eW)(e,h,this._config.sourceSpatialReference);return t.destroy(),d.data}async _queryPages(e,t,r=[],i=0){t.start=null!=t.num?i*t.num:null;const{data:o}=await (0,query/* executeQuery */.eW)(e,t,this._config.sourceSpatialReference);return o.exceededTransferLimit&&i<(this._config.maxQueryDepth??0)?(o.features.forEach((e=>r.push(e))),this._queryPages(e,t,r,i+1)):(r.forEach((e=>o.features.push(e))),o)}_addRelatedFeatures(e){const t=new Map,r=e.features,i=this._serviceDefinition.relatedFeatures.joinField;for(const o of r){const e=o.attributes[i];t.set(e,o)}this._relatedFeatures=t}};g=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.graphics.sources.connections.GeoEventConnection")],g);

;// ./node_modules/@arcgis/core/layers/support/ClientSideConnection.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let ClientSideConnection_a=class extends c{constructor(e){super({}),this.connectionStatus="connected",this.errorString=null;const{geometryType:r,spatialReference:t,sourceSpatialReference:s}=e;this._featureZScaler=(0,zscale/* getGeometryZScaler */.N)(r,s,t)}normalizeCtorArgs(){return{}}updateCustomParameters(e){}sendMessageToSocket(e){}sendMessageToClient(e){if("type"in e)switch(e.type){case"features":case"featureResult":for(const r of e.features)null!=this._featureZScaler&&this._featureZScaler(r.geometry),this.onFeature(r)}this.onMessage(e)}};(0,tslib_es6._)([(0,property/* property */.MZ)()],ClientSideConnection_a.prototype,"connectionStatus",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],ClientSideConnection_a.prototype,"errorString",void 0),ClientSideConnection_a=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.ClientSideConnection")],ClientSideConnection_a);

;// ./node_modules/@arcgis/core/layers/graphics/sources/connections/createConnection.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function o(e,t){if(null==e&&null==t)return null;const n={};return null!=t&&(n.geometry=t),null!=e&&(n.where=e),n}function r(r,i,s,c,l,u,a,m,p){const f={source:r,sourceSpatialReference:i,spatialReference:s,geometryType:c,filter:o(l,u),maxReconnectionAttempts:a,maxReconnectionInterval:m,customParameters:p};if(!r)return new ClientSideConnection_a(f);return r.path.startsWith("wss://")||r.path.startsWith("ws://")?new d(f):new g(f)}


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


/***/ })

};
;