"use strict";
exports.id = 615;
exports.ids = [615];
exports.modules = {

/***/ 66471:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _ObjectPool_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90086);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var e;!function(t){t[t.varint=0]="varint",t[t.fixed64=1]="fixed64",t[t.delimited=2]="delimited",t[t.fixed32=5]="fixed32",t[t.unknown=99]="unknown"}(e||(e={}));const i=4294967296,s=new TextDecoder("utf-8"),n=(0,_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("safari")||(0,_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("ios")?6:(0,_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("ff")?12:32;class r{constructor(t,i,s=0,n=(t?t.byteLength:0)){this._tag=0,this._dataType=e.unknown,this._init(t,i,s,n)}_init(t,e,i,s){this._data=t,this._dataView=e,this._pos=i,this._end=s}asUnsafe(){return this}clone(){return new r(this._data,this._dataView,this._pos,this._end)}pos(){return this._pos}move(t){this._pos=t}nextTag(t){for(;;){if(this._pos===this._end)return!1;const e=this._decodeVarint();if(this._tag=e>>3,this._dataType=7&e,!t||t===this._tag)break;this.skip()}return!0}next(){if(this._pos===this._end)return!1;const t=this._decodeVarint();return this._tag=t>>3,this._dataType=7&t,!0}empty(){return this._pos>=this._end}tag(){return this._tag}getInt32(){return this._decodeVarint()}getInt64(){return this._decodeVarint()}getUInt32(){let t=4294967295;return t=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128?t:(t=(t|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128?t:(t=(t|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128?t:(t=(t|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128?t:(t=(t|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128?t:void 0))))}getUInt64(){return this._decodeVarint()}getSInt32(){const t=this.getUInt32();if(void 0!==t)return t>>>1^-(1&t)|0}getSInt64(){return this._decodeSVarint()}getBool(){const t=0!==this._data[this._pos];return this._skip(1),t}getEnum(){return this._decodeVarint()}getFixed64(){const t=this._dataView,e=this._pos,s=t.getUint32(e,!0)+t.getUint32(e+4,!0)*i;return this._skip(8),s}getSFixed64(){const t=this._dataView,e=this._pos,s=t.getUint32(e,!0)+t.getInt32(e+4,!0)*i;return this._skip(8),s}getDouble(){const t=this._dataView.getFloat64(this._pos,!0);return this._skip(8),t}getFixed32(){const t=this._dataView.getUint32(this._pos,!0);return this._skip(4),t}getSFixed32(){const t=this._dataView.getInt32(this._pos,!0);return this._skip(4),t}getFloat(){const t=this._dataView.getFloat32(this._pos,!0);return this._skip(4),t}getString(){const t=this._getLength(),e=this._pos,i=this._toString(this._data,e,e+t);return this._skip(t),i}getBytes(){const t=this._getLength(),e=this._pos,i=this._toBytes(this._data,e,e+t);return this._skip(t),i}getLength(){return this._getLengthUnsafe()}processMessageWithArgs(t,e,i,s){const n=this.getMessage(),r=t(n,e,i,s);return n.release(),r}processMessage(t){const e=this.getMessage(),i=t(e);return e.release(),i}getMessage(){const t=this._getLength(),e=r.pool.acquire();return e._init(this._data,this._dataView,this._pos,this._pos+t),this._skip(t),e}release(){r.pool.release(this)}dataType(){return this._dataType}skip(){switch(this._dataType){case e.varint:this._decodeVarint();break;case e.fixed64:this._skip(8);break;case e.delimited:this._skip(this._getLength());break;case e.fixed32:this._skip(4);break;default:throw new Error("Invalid data type!")}}skipLen(t){this._skip(t)}_skip(t){if(this._pos+t>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=t}_decodeVarint(){const t=this._data;let e=this._pos,i=0,s=0;if(this._end-e>=10)do{if(s=t[e++],i|=127&s,0==(128&s))break;if(s=t[e++],i|=(127&s)<<7,0==(128&s))break;if(s=t[e++],i|=(127&s)<<14,0==(128&s))break;if(s=t[e++],i|=(127&s)<<21,0==(128&s))break;if(s=t[e++],i+=268435456*(127&s),0==(128&s))break;if(s=t[e++],i+=34359738368*(127&s),0==(128&s))break;if(s=t[e++],i+=4398046511104*(127&s),0==(128&s))break;if(s=t[e++],i+=562949953421312*(127&s),0==(128&s))break;if(s=t[e++],i+=72057594037927940*(127&s),0==(128&s))break;if(s=t[e++],i+=0x8000000000000000*(127&s),0==(128&s))break;throw new Error("Varint too long!")}while(0);else{let n=1;for(;e!==this._end&&(s=t[e],0!=(128&s));)++e,i+=(127&s)*n,n*=128;if(e===this._end)throw new Error("Varint overrun!");++e,i+=s*n}return this._pos=e,i}_decodeSVarint(){const t=this._data;let e,i=0,s=0;const n=1&t[this._pos];if(s=t[this._pos++],i|=127&s,0==(128&s))return n?-(i+1)/2:i/2;if(s=t[this._pos++],i|=(127&s)<<7,0==(128&s))return n?-(i+1)/2:i/2;if(s=t[this._pos++],i|=(127&s)<<14,0==(128&s))return n?-(i+1)/2:i/2;if(s=t[this._pos++],i|=(127&s)<<21,0==(128&s))return n?-(i+1)/2:i/2;if(s=t[this._pos++],i+=268435456*(127&s),0==(128&s))return n?-(i+1)/2:i/2;if(s=t[this._pos++],i+=34359738368*(127&s),0==(128&s))return n?-(i+1)/2:i/2;if(s=t[this._pos++],i+=4398046511104*(127&s),0==(128&s))return n?-(i+1)/2:i/2;if(e=BigInt(i),s=t[this._pos++],e+=0x2000000000000n*BigInt(127&s),0==(128&s))return Number(n?-(e+1n)/2n:e/2n);if(s=t[this._pos++],e+=0x100000000000000n*BigInt(127&s),0==(128&s))return Number(n?-(e+1n)/2n:e/2n);if(s=t[this._pos++],e+=0x8000000000000000n*BigInt(127&s),0==(128&s))return Number(n?-(e+1n)/2n:e/2n);throw new Error("Varint too long!")}_getLength(){if(this._dataType!==e.delimited)throw new Error("Not a delimited data type!");return this._decodeVarint()}_getLengthUnsafe(){return this.getUInt32()}_toString(t,e,i){if((i=Math.min(this._end,i))-e>n){const n=t.subarray(e,i);return s.decode(n)}let r="",h="";for(let s=e;s<i;++s){const e=t[s];128&e?h+="%"+e.toString(16):(r+=decodeURIComponent(h)+String.fromCharCode(e),h="")}return h.length&&(r+=decodeURIComponent(h)),r}_toBytes(t,e,i){return i=Math.min(this._end,i),new Uint8Array(t.buffer,e,i-e)}}r.pool=new _ObjectPool_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(r,void 0,(t=>{t._data=null,t._dataView=null}));


/***/ }),

/***/ 20698:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $X: () => (/* binding */ q),
/* harmony export */   Gy: () => (/* binding */ L),
/* harmony export */   P5: () => (/* binding */ v),
/* harmony export */   SW: () => (/* binding */ U),
/* harmony export */   Tr: () => (/* binding */ k),
/* harmony export */   VV: () => (/* binding */ m),
/* harmony export */   qj: () => (/* binding */ d)
/* harmony export */ });
/* unused harmony exports equals, getQuantizedBoundsCoordsArray, getQuantizedBoundsCoordsArrayArray, getQuantizedBoundsPaths, getQuantizedBoundsPoints, getQuantizedBoundsRings, quantizeBounds, quantizeExtent, quantizeMultipoint, quantizePaths, quantizePoints, quantizePolygon, quantizePolyline, quantizeRings, quantizeX, quantizeY, unquantizeBounds, unquantizeCoordsArray, unquantizeCoordsArrayArray, unquantizeExtent, unquantizePaths, unquantizePoints, unquantizeRings, unquantizeX, unquantizeY */
/* harmony import */ var _jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1171);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function l(n){return n&&"upperLeft"===n.originPosition}const i=(n,t,e)=>[t,e],o=(n,t,e)=>[t,e,n[2]],a=(n,t,e)=>[t,e,n[2],n[3]];function m(n){if(!n)return null;return{originPosition:"upper-left"===n.originPosition?"upperLeft":"lower-left"===n.originPosition?"lowerLeft":n.originPosition,scale:n.tolerance?[n.tolerance,n.tolerance]:[1,1],translate:null!=n.extent?[n.extent.xmin,n.extent.ymax]:[0,0]}}function c(n,t){if(n===t||null==n&&null==t)return!0;if(null==n||null==t)return!1;let e,r,u,i,o,a;return l(n)?(e=n.translate[0],r=n.translate[1],u=n.scale[0]):(e=null!=n.extent?n.extent.xmin:0,r=null!=n.extent?n.extent.ymax:0,u=n.tolerance),l(t)?(i=t.translate[0],o=t.translate[1],a=t.scale[0]):(i=null!=t.extent?t.extent.xmin:0,o=null!=t.extent?t.extent.ymax:0,a=t.tolerance),e===i&&r===o&&u===a}function s({scale:n,translate:t},e){return Math.round((e-t[0])/n[0])}function f({scale:n,translate:t},e){return Math.round((t[1]-e)/n[1])}function x(n,t,e){const r=[];let u,l,i,o;for(let a=0;a<e.length;a++){const m=e[a];a>0?(i=s(n,m[0]),o=f(n,m[1]),i===u&&o===l||(r.push(t(m,i-u,o-l)),u=i,l=o)):(u=s(n,m[0]),l=f(n,m[1]),r.push(t(m,u,l)))}return r.length>0?r:null}function h(n,t,e){return t[0]=s(n,e[0]),t[3]=f(n,e[1]),t[2]=s(n,e[2]),t[1]=f(n,e[3]),t}function I(n,t,e,r){return x(n,e?r?a:o:r?o:i,t)}function g(n,t,e,r){const u=[],l=e?r?a:o:r?o:i;for(let i=0;i<t.length;i++){const e=x(n,l,t[i]);e&&e.length>=3&&u.push(e)}return u.length?u:null}function N(n,t,e,r){const u=[],l=e?r?a:o:r?o:i;for(let i=0;i<t.length;i++){const e=x(n,l,t[i]);e&&e.length>=2&&u.push(e)}return u.length?u:null}function p({scale:n,translate:t},e){return e*n[0]+t[0]}function y({scale:n,translate:t},e){return t[1]-e*n[1]}function z(n,t,e){const r=new Array(e.length);if(!e.length)return r;const[u,l]=n.scale;let i=p(n,e[0][0]),o=y(n,e[0][1]);r[0]=t(e[0],i,o);for(let a=1;a<e.length;a++){const n=e[a];i+=n[0]*u,o-=n[1]*l,r[a]=t(n,i,o)}return r}function T(n,t,e){const r=new Array(e.length);for(let u=0;u<e.length;u++)r[u]=z(n,t,e[u]);return r}function M(n,t,e){return e?(t[0]=p(n,e[0]),t[1]=y(n,e[3]),t[2]=p(n,e[2]),t[3]=y(n,e[1]),t):[p(n,t[0]),y(n,t[3]),p(n,t[2]),y(n,t[1])]}function E(n,t,e,r){return z(n,e?r?a:o:r?o:i,t)}function P(n,t,e,r){return T(n,e?r?a:o:r?o:i,t)}function b(n,t,e,r){return T(n,e?r?a:o:r?o:i,t)}function F(n,t,e){let[r,u]=e[0],l=Math.min(r,t[0]),i=Math.min(u,t[1]),o=Math.max(r,t[2]),a=Math.max(u,t[3]);for(let m=1;m<e.length;m++){const[n,t]=e[m];r+=n,u+=t,n<0&&(l=Math.min(l,r)),n>0&&(o=Math.max(o,r)),t<0?i=Math.min(i,u):t>0&&(a=Math.max(a,u))}return n[0]=l,n[1]=i,n[2]=o,n[3]=a,n}function V(n,t){if(!t.length)return null;n[0]=n[1]=Number.POSITIVE_INFINITY,n[2]=n[3]=Number.NEGATIVE_INFINITY;for(let e=0;e<t.length;e++)F(n,n,t[e]);return n}function Y(n){const t=[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY];return F(t,t,n)}function _(n){return V([0,0,0,0],n)}function A(n){return V([0,0,0,0],n)}function w(n,t,e,r,u){return t.xmin=s(n,e.xmin),t.ymin=f(n,e.ymin),t.xmax=s(n,e.xmax),t.ymax=f(n,e.ymax),t!==e&&(r&&(t.zmin=e.zmin,t.zmax=e.zmax),u&&(t.mmin=e.mmin,t.mmax=e.mmax)),t}function G(n,t,e,r,u){return t.points=I(n,e.points,r,u)??[],t}function L(n,t,e,r,u){return t.x=s(n,e.x),t.y=f(n,e.y),t!==e&&(r&&(t.z=e.z),u&&(t.m=e.m)),t}function O(n,t,e,r,u){const l=g(n,e.rings,r,u);return l?(t.rings=l,t):null}function S(n,t,e,r,u){const l=N(n,e.paths,r,u);return l?(t.paths=l,t):null}function d(l,i){return l&&i?(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isPoint */ .fT)(i)?L(l,{},i,!1,!1):(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isPolyline */ .Rg)(i)?S(l,{},i,!1,!1):(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isPolygon */ .Bi)(i)?O(l,{},i,!1,!1):(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isMultipoint */ .U9)(i)?G(l,{},i,!1,!1):(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isExtent */ .ZC)(i)?w(l,{},i,!1,!1):null:null}function j(n,t,e,r,u){return t.xmin=p(n,e.xmin),t.ymin=y(n,e.ymin),t.xmax=p(n,e.xmax),t.ymax=y(n,e.ymax),t!==e&&(r&&(t.zmin=e.zmin,t.zmax=e.zmax),u&&(t.mmin=e.mmin,t.mmax=e.mmax)),t}function U(n,t,e,r,u){return null!=e&&(t.points=E(n,e.points,r,u)),t}function k(n,t,e,r,u){return null==e||(t.x=p(n,e.x),t.y=y(n,e.y),t!==e&&(r&&(t.z=e.z),u&&(t.m=e.m))),t}function q(n,t,e,r,u){return null!=e&&(t.rings=b(n,e.rings,r,u)),t}function v(n,t,e,r,u){return null!=e&&(t.paths=P(n,e.paths,r,u)),t}


/***/ }),

/***/ 32597:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ib: () => (/* binding */ e),
/* harmony export */   N3: () => (/* binding */ s),
/* harmony export */   Om: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class t{constructor(t=null,s={},e,h){this.geometry=t,this.attributes=s,this.centroid=e,this.objectId=h,this.displayId=0,this.geohashX=0,this.geohashY=0}weakClone(){const s=new t(this.geometry,this.attributes,this.centroid,this.objectId);return s.displayId=this.displayId,s.geohashX=this.geohashX,s.geohashY=this.geohashY,s}}function s(t){return!!t.geometry?.coords?.length}class e extends t{}


/***/ }),

/***/ 46461:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class e{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const t=new e;return t.objectIdFieldName=this.objectIdFieldName,t.globalIdFieldName=this.globalIdFieldName,t.geohashFieldName=this.geohashFieldName,t.geometryProperties=this.geometryProperties,t.geometryType=this.geometryType,t.spatialReference=this.spatialReference,t.hasZ=this.hasZ,t.hasM=this.hasM,t.features=this.features,t.fields=this.fields,t.transform=this.transform,t.exceededTransferLimit=this.exceededTransferLimit,t.uniqueIdField=this.uniqueIdField,t.queryGeometry=this.queryGeometry,t.queryGeometryType=this.queryGeometryType,t}}


/***/ }),

/***/ 88443:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class t{constructor(t=[],e=[],s=!1){this.lengths=t??[],this.coords=e??[],this.hasIndeterminateRingOrder=s}static fromRect(e){const[s,h,n,r]=e,i=n-s,o=r-h;return new t([5],[s,h,i,0,0,o,-i,0,0,-o])}get isPoint(){return 0===this.lengths.length}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((t,e)=>t+e))}forEachVertex(t){let e=0;this.lengths.length||t(this.coords[0],this.coords[1]);for(let s=0;s<this.lengths.length;s++){const h=this.lengths[s];for(let s=0;s<h;s++){t(this.coords[2*(s+e)],this.coords[2*(s+e)+1])}e+=h}}clone(e){return e?(e.set(this.coords),new t(this.lengths.slice(),e,this.hasIndeterminateRingOrder)):new t(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}


/***/ }),

/***/ 21355:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ap: () => (/* binding */ C),
/* harmony export */   B2: () => (/* binding */ N),
/* harmony export */   BW: () => (/* binding */ $),
/* harmony export */   Ch: () => (/* binding */ It),
/* harmony export */   DF: () => (/* binding */ P),
/* harmony export */   Di: () => (/* binding */ et),
/* harmony export */   E2: () => (/* binding */ tt),
/* harmony export */   IE: () => (/* binding */ M),
/* harmony export */   Nl: () => (/* binding */ ht),
/* harmony export */   Q4: () => (/* binding */ bt),
/* harmony export */   Rk: () => (/* binding */ Nt),
/* harmony export */   Ux: () => (/* binding */ rt),
/* harmony export */   X9: () => (/* binding */ ot),
/* harmony export */   Ye: () => (/* binding */ K),
/* harmony export */   ZF: () => (/* binding */ ct),
/* harmony export */   eU: () => (/* binding */ Q),
/* harmony export */   eY: () => (/* binding */ ft),
/* harmony export */   jH: () => (/* binding */ at),
/* harmony export */   jQ: () => (/* binding */ yt),
/* harmony export */   kz: () => (/* binding */ dt),
/* harmony export */   oN: () => (/* binding */ nt),
/* harmony export */   q3: () => (/* binding */ it),
/* harmony export */   qK: () => (/* binding */ U),
/* harmony export */   qN: () => (/* binding */ L),
/* harmony export */   z5: () => (/* binding */ H),
/* harmony export */   zv: () => (/* binding */ st)
/* harmony export */ });
/* unused harmony exports convertFromMultipoint, convertFromMultipointFeatures, convertFromPointFeatures, convertFromPolylineFeatures, convertToFeatures, convertToMultipointFeatures, deltaDecodeGeometry, deltaEncodeGeometry, getQuantizedBoundsOptimizedGeometry, getSignedQuantizedRingArea, removeCollinearVectices, unquantizeValue, unquantizeX, unquantizeY */
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(539);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6267);
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4675);
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80510);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1171);
/* harmony import */ var _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32597);
/* harmony import */ var _OptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46461);
/* harmony import */ var _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88443);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function d(t,e){return t?e?4:3:e?3:2}const m=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getLogger("esri.layers.graphics.featureConversionUtils"),g={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0,esriGeometryEnvelope:0},y=(t,e,o,n,r,s)=>{t[o]=r,t[o+1]=s},p=(t,e,o,n,r,s)=>{t[o]=r,t[o+1]=s,t[o+2]=e[n+2]},I=(t,e,o,n,r,s)=>{t[o]=r,t[o+1]=s,t[o+2]=e[n+3]},b=(t,e,o,n,r,s)=>{t[o]=r,t[o+1]=s,t[o+2]=e[n+2],t[o+3]=e[n+3]};function w(t,e,o,n){if(t){if(o)return e&&n?b:p;if(e&&n)return I}else if(e&&n)return p;return y}function M({scale:t,translate:e},o){return Math.round((o-e[0])/t[0])}function N({scale:t,translate:e},o){return Math.round((e[1]-o)/t[1])}function G(t,e){return F(t,e,0)}function T(t,e){return F(t,-e,1)}function F({scale:t,translate:e},o,n){return o*t[n]+e[n]}function P(t,e,o){return t?e?o?z(t):Z(t):o?v(t):x(t):null}function x(t){const e=t.coords;return{x:e[0],y:e[1]}}function j(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t}function Z(t){const e=t.coords;return{x:e[0],y:e[1],z:e[2]}}function k(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t.coords[2]=e.z,t}function v(t){const e=t.coords;return{x:e[0],y:e[1],m:e[2]}}function E(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t.coords[2]=e.m,t}function z(t){const e=t.coords;return{x:e[0],y:e[1],z:e[2],m:e[3]}}function S(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t.coords[2]=e.z,t.coords[3]=e.m,t}function V(t,e,o,n){let r=x;o&&n?r=z:o?r=Z:n&&(r=v);for(const s of e){const{geometry:e,attributes:o}=s,n=null!=e?r(e):null;t.push({attributes:o,geometry:n})}return t}function Y(t,e){return t&&e?S:t?k:e?E:j}function _(t,e,o,n,r){const s=Y(o,n);for(const{geometry:u,attributes:l}of e){const e=null!=u?s(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,u):null;t.push(new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_6__/* .OptimizedFeature */ .Om(e,l,null,r?l[r]:void 0))}return t}function L(t,e,o=Y(null!=e.z,null!=e.m)){return o(t,e)}function O(t,e,o,n){for(const{geometry:r,attributes:s}of e)t.push({attributes:s,geometry:null!=r?U(r,o,n):null});return t}function U(t,e,o){if(null==t)return null;const n=d(e,o),r=[];for(let s=0;s<t.coords.length;s+=n){const e=[];for(let o=0;o<n;o++)e.push(t.coords[s+o]);r.push(e)}return e?o?{points:r,hasZ:e,hasM:o}:{points:r,hasZ:e}:o?{points:r,hasM:o}:{points:r}}function A(t,e,o,n,r){const s=d(o,n);for(const{geometry:u,attributes:l}of e){const e=null!=u?q(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,u,s):null;t.push(new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_6__/* .OptimizedFeature */ .Om(e,l,null,r?l[r]:void 0))}return t}function q(t,e,o=d(e.hasZ,e.hasM)){t.lengths[0]=e.points.length;const n=t.coords;let r=0;for(const s of e.points)for(let t=0;t<o;t++)n[r++]=s[t];return t}function R(t,e,o,n){for(const{geometry:r,attributes:s}of e)t.push({attributes:s,geometry:null!=r?$(r,o,n):null});return t}function $(t,e,o){if(!t)return null;const n=d(e,o),{coords:r,lengths:s}=t,u=[];let l=0;for(const c of s){const t=[];for(let e=0;e<c;e++){const e=[];for(let t=0;t<n;t++)e.push(r[l++]);t.push(e)}u.push(t)}return e?o?{paths:u,hasZ:e,hasM:o}:{paths:u,hasZ:e}:o?{paths:u,hasM:o}:{paths:u}}function B(t,e,o,n,r){const s=d(o,n);for(const{geometry:u,attributes:l}of e){const e=null!=u?C(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,u,s):null;t.push(new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_6__/* .OptimizedFeature */ .Om(e,l,null,r?l[r]:void 0))}return t}function C(t,e,o=d(e.hasZ,e.hasM)){const{lengths:n,coords:r}=t;let s=0;for(const u of e.paths){for(const t of u)for(let e=0;e<o;e++)r[s++]=t[e];n.push(u.length)}return t}function D(t,e,o,n){for(const{geometry:r,attributes:s,centroid:u}of e){const e=null!=r?H(r,o,n):null;if(null!=u){const o=x(u);t.push({attributes:s,centroid:o,geometry:e})}else t.push({attributes:s,geometry:e})}return t}function H(t,e,o){if(!t)return null;const n=d(e,o),{coords:r,lengths:s}=t,u=[];let l=0;for(const c of s){const t=[];for(let e=0;e<c;e++){const e=[];for(let t=0;t<n;t++)e.push(r[l++]);t.push(e)}u.push(t)}return e?o?{rings:u,hasZ:e,hasM:o}:{rings:u,hasZ:e}:o?{rings:u,hasM:o}:{rings:u}}function J(t,e,o,n,r){for(const{geometry:s,centroid:u,attributes:l}of e){const e=null!=s?K(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,s,o,n):null,c=r?l[r]:void 0;null!=u?t.push(new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_6__/* .OptimizedFeature */ .Om(e,l,j(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,u),c)):t.push(new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_6__/* .OptimizedFeature */ .Om(e,l,null,c))}return t}function K(t,e,o=e.hasZ,n=e.hasM){return Q(t,e.rings,o,n)}function Q(t,e,o,n){const r=d(o,n),{lengths:s,coords:u}=t;let l=0;Ft(t);for(const c of e){for(const t of c)for(let e=0;e<r;e++)u[l++]=t[e];s.push(c.length)}return t}const W=[],X=[];function tt(t,e,o,n,r){W[0]=t;const[s]=et(X,W,e,o,n,r);return Pt(W),Pt(X),s}function et(e,o,n,r,s,u){if(Pt(e),!n){for(const t of o){const o=u?t.attributes[u]:void 0;e.push(new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_6__/* .OptimizedFeature */ .Om(null,t.attributes,null,o))}return e}switch(n){case"esriGeometryPoint":return _(e,o,r,s,u);case"esriGeometryMultipoint":return A(e,o,r,s,u);case"esriGeometryPolyline":return B(e,o,r,s,u);case"esriGeometryPolygon":return J(e,o,r,s,u);default:m.error("convertToFeatureSet:unknown-geometry",new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(`Unable to parse unknown geometry type '${n}'`)),Pt(e)}return e}function ot(e,o,n,r,s,u){const l=e.length;switch(n){case"esriGeometryPoint":_(e,o,r,s,u);break;case"esriGeometryMultipoint":A(e,o,r,s,u);break;case"esriGeometryPolyline":B(e,o,r,s,u);break;case"esriGeometryPolygon":J(e,o,r,s,u);break;default:m.error("convertToFeatureSet:unknown-geometry",new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(`Unable to parse unknown geometry type '${n}'`))}for(let t=0;t<o.length;t++)e[t+l].geometryType=n,e[t+l].insertAfter=o[t].insertAfter,e[t+l].groupId=o[t].groupId;return e}function nt(t,e,o,n){X[0]=t,lt(W,X,e,o,n);const r=W[0];return Pt(W),Pt(X),r}function rt(e,o,n){if(null==e)return null;const r=new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A;if("hasZ"in e&&null==o&&(o=e.hasZ),"hasM"in e&&null==n&&(n=e.hasM),(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isPoint */ .fT)(e)){return Y(null!=o?o:null!=e.z,null!=n?n:null!=e.m)(r,e)}return (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isPolygon */ .Bi)(e)?K(r,e,o,n):(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isPolyline */ .Rg)(e)?C(r,e,d(o,n)):(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isMultipoint */ .U9)(e)?q(r,e,d(o,n)):void m.error("convertFromGeometry:unknown-geometry",new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(`Unable to parse unknown geometry type '${e}'`))}function st(e,o,n,r){const s=e&&("coords"in e?e:e.geometry);if(null==s)return null;switch(o){case"esriGeometryPoint":{let t=x;return n&&r?t=z:n?t=Z:r&&(t=v),t(s)}case"esriGeometryMultipoint":return U(s,n,r);case"esriGeometryPolyline":return $(s,n,r);case"esriGeometryPolygon":return H(s,n,r);default:return m.error("convertToGeometry:unknown-geometry",new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(`Unable to parse unknown geometry type '${o}'`)),null}}function ut(t,e){for(const o of e)t.push({attributes:o.attributes});return t}function lt(e,o,n,r,s){if(Pt(e),null==n)return ut(e,o);switch(n){case"esriGeometryPoint":return V(e,o,r,s);case"esriGeometryMultipoint":return O(e,o,r,s);case"esriGeometryPolyline":return R(e,o,r,s);case"esriGeometryPolygon":return D(e,o,r,s);default:m.error("convertToFeatureSet:unknown-geometry",new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(`Unable to parse unknown geometry type '${n}'`))}return e}function ct(t){const{objectIdFieldName:e,spatialReference:o,transform:n,fields:r,hasM:s,hasZ:u,features:l,geometryType:c,exceededTransferLimit:i,uniqueIdField:f,queryGeometry:a,queryGeometryType:h}=t,d={features:lt([],l,c,u,s),fields:r,geometryType:c,objectIdFieldName:e,spatialReference:o,uniqueIdField:f,queryGeometry:st(a,h,!1,!1)};return n&&(d.transform=n),i&&(d.exceededTransferLimit=i),s&&(d.hasM=s),u&&(d.hasZ=u),d}function it(e,o){const n=new _OptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{hasM:r,hasZ:s,features:u,objectIdFieldName:l,spatialReference:c,geometryType:i,exceededTransferLimit:f,transform:h,fields:d}=e;return d&&(n.fields=d),n.geometryType=i??null,n.objectIdFieldName=l??o??null,n.spatialReference=c??null,n.objectIdFieldName?(u&&et(n.features,u,i,s,r,n.objectIdFieldName),f&&(n.exceededTransferLimit=f),r&&(n.hasM=r),s&&(n.hasZ=s),h&&(n.transform=h),n):(m.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),n)}function ft(t){const{transform:e,features:o,hasM:n,hasZ:r}=t;if(!e)return t;for(const s of o)null!=s.geometry&&It(s.geometry,s.geometry,n,r,e),null!=s.centroid&&It(s.centroid,s.centroid,n,r,e);return t.transform=null,t}function at(t,e){const{geometryType:o,features:n,hasM:r,hasZ:s}=e;if(!t)return e;for(let u=0;u<n.length;u++){const e=n[u],l=e.weakClone();l.geometry=new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,ht(l.geometry,e.geometry,r,s,o,t),e.centroid&&(l.centroid=new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,ht(l.centroid,e.centroid,r,s,"esriGeometryPoint",t)),n[u]=l}return e.transform=t,e}function ht(t,e,o,n,r,s,u=o,l=n){if(Ft(t),!e?.coords.length)return null;const c=g[r],{coords:i,lengths:f}=e,a=d(o,n),h=d(o&&u,n&&l),m=w(o,n,u,l);if(!f.length)return m(t.coords,i,0,0,M(s,i[0]),N(s,i[1])),Ft(t,a,0),t;let y,p,I,b,G=0,T=0,F=T;for(const d of f){if(d<c)continue;let e=0;T=F,I=y=M(s,i[G]),b=p=N(s,i[G+1]),m(t.coords,i,T,G,I,b),e++,G+=a,T+=h;for(let o=1;o<d;o++,G+=a)I=M(s,i[G]),b=N(s,i[G+1]),I===y&&b===p||(m(t.coords,i,T,G,I-y,b-p),T+=h,e++,y=I,p=b);e>=c&&(t.lengths.push(e),F=T)}return Pt(t.coords,F),t.coords.length?t:null}function dt(t,e,o,n,r,s,u=o,l=n){if(Ft(t),!e?.coords.length)return null;const c=g[r],{coords:i,lengths:f}=e,a=d(o,n),h=d(o&&u,n&&l),m=w(o,n,u,l);if(!f.length)return m(t.coords,i,0,0,i[0],i[1]),Ft(t,a,0),t;let y=0;const p=s*s;for(const d of f){if(d<c){y+=d*a;continue}const e=t.coords.length/h,o=y,n=y+(d-1)*a;m(t.coords,i,t.coords.length,o,i[o],i[o+1]),gt(t.coords,i,a,p,m,o,n),m(t.coords,i,t.coords.length,n,i[n],i[n+1]);const r=t.coords.length/h-e;r>=c?t.lengths.push(r):Pt(t.coords,e*h),y+=d*a}return t.coords.length?t:null}function mt(t,e,o,n){const r=t[e],s=t[e+1],u=t[o],l=t[o+1],c=t[n],i=t[n+1];let f=u,a=l,h=c-f,d=i-a;if(0!==h||0!==d){const t=((r-f)*h+(s-a)*d)/(h*h+d*d);t>1?(f=c,a=i):t>0&&(f+=h*t,a+=d*t)}return h=r-f,d=s-a,h*h+d*d}function gt(t,e,o,n,r,s,u){let l,c=n,i=0;for(let f=s+o;f<u;f+=o)l=mt(e,f,s,u),l>c&&(i=f,c=l);c>n&&(i-s>o&&gt(t,e,o,n,r,s,i),r(t,e,t.length,i,e[i],e[i+1]),u-i>o&&gt(t,e,o,n,r,i,u))}function yt(t,e,o,u){if(!e?.coords?.length)return null;const l=d(o,u);let c=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,f=Number.NEGATIVE_INFINITY,a=Number.NEGATIVE_INFINITY;if(e&&e.coords){const t=e.coords;for(let e=0;e<t.length;e+=l){const o=t[e],n=t[e+1];c=Math.min(c,o),f=Math.max(f,o),i=Math.min(i,n),a=Math.max(a,n)}}return (0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__.is)(t)?(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__/* .fromRectValues */ .BI)(t,c,i,f,a):(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__/* .fromValues */ .fA)(c,i,f,a,t),t}function pt(t,e,o,n){const r=d(o,n),{lengths:s,coords:u}=e;let l=Number.POSITIVE_INFINITY,c=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,f=Number.NEGATIVE_INFINITY,a=0;for(const h of s){let t=u[a],e=u[a+1];l=Math.min(t,l),c=Math.min(e,c),i=Math.max(t,i),f=Math.max(e,f),a+=r;for(let o=1;o<h;o++,a+=r){const o=u[a],n=u[a+1];t+=o,e+=n,o<0&&(l=Math.min(l,t)),o>0&&(i=Math.max(i,t)),n<0?c=Math.min(c,e):n>0&&(f=Math.max(f,e))}}return t[0]=l,t[1]=c,t[2]=i,t[3]=f,t}function It(t,e,n,r,s){const{coords:u,lengths:l}=e,c=d(n,r);if(!u.length)return t!==e&&Ft(t),t;(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_8__/* .assertIsSome */ .Lw)(s);const{originPosition:i,scale:f,translate:a}=s,h=xt;h.originPosition=i;const m=h.scale;m[0]=f[0]??1,m[1]=-(f[1]??1),m[2]=f[2]??1,m[3]=f[3]??1;const g=h.translate;if(g[0]=a[0]??0,g[1]=a[1]??0,g[2]=a[2]??0,g[3]=a[3]??0,!l.length){for(let e=0;e<c;++e)t.coords[e]=F(h,u[e],e);return t!==e&&Ft(t,c,0),t}let y=0;for(let o=0;o<l.length;o++){const e=l[o];t.lengths[o]=e;for(let o=0;o<c;++o)t.coords[y+o]=F(h,u[y+o],o);let n=t.coords[y],r=t.coords[y+1];y+=c;for(let o=1;o<e;o++,y+=c){n+=u[y]*m[0],r+=u[y+1]*m[1],t.coords[y]=n,t.coords[y+1]=r;for(let e=2;e<c;++e)t.coords[y+e]=F(h,u[y+e],e)}}return t!==e&&Ft(t,u.length,l.length),t}function bt(t,e,o,n,r,s){if(Ft(t),t.lengths.push(...e.lengths),o===r&&n===s)for(let u=0;u<e.coords.length;u++)t.coords.push(e.coords[u]);else{const u=d(o,n),l=w(o,n,r,s),c=e.coords;for(let e=0;e<c.length;e+=u)l(t.coords,c,t.coords.length,e,c[e],c[e+1])}return t}function wt(t,e,o,n,r){if(!e?.coords?.length)return null;const s=g[o],{coords:u,lengths:l}=e,c=w(n,r,n,r),i=d(n,r);let f=0,a=0,h=0,m=0;for(const d of l){a=m,c(t.coords,u,a,f,u[f],u[f+1]),f+=i;let e=u[f],o=u[f+1],n=e,r=o,l=o/e;a+=i,c(t.coords,u,a,f,n,r),f+=i;for(let s=2;s<d;s++){e=u[f],o=u[f+1];const s=o/e,h=l===s||!isFinite(l)&&!isFinite(s),d=h&&isFinite(s)?l>=0&&s>=0||l<=0&&s<=0:r>=0&&o>=0||r<=0&&o<=0;h&&d?(n+=e,r+=o):(n=e,r=o,a+=i),c(t.coords,u,a,f,n,r),f+=i,l=s}a+=i;const g=(a-m)/i;g>=s&&(t.lengths[h]=g,m=a,h++)}return t.coords.length>m&&(t.coords.length=m),t.lengths.length>h&&(t.lengths.length=h),t.coords.length&&t.lengths.length?t:null}function Mt(t,e,o,n){let r=0,s=t[n*e],u=t[n*(e+1)];for(let l=1;l<o;l++){const o=s+t[n*(e+l)],c=u+t[n*(e+l)+1],i=(o-s)*(c+u);s=o,u=c,r+=i}return.5*r}function Nt(t,e){const{coords:o,lengths:n}=t;let r=0,s=0;for(let u=0;u<n.length;u++){const t=n[u];s+=Mt(o,r,t,e),r+=t}return Math.abs(s)}function Gt(t,e){const o=t.clone(),n=t.coords,r=t.lengths;let s=0;for(let u=0;u<r.length;u++){const t=r[u];let l=n[e*s],c=n[e*s+1];for(let r=1;r<t;r++){const t=n[e*(s+r)],u=n[e*(s+r)+1],i=t-l,f=u-c;o.coords[e*(s+r)]=i,o.coords[e*(s+r)+1]=f,l=t,c=u}s+=t}return o}function Tt(t,e){if(null==t)return null;const o=t.clone(),n=t.coords,r=t.lengths;let s=0;for(let u=0;u<r.length;u++){const t=r[u];let l=n[e*s],c=n[e*s+1];for(let r=1;r<t;r++){const t=l+n[e*(s+r)],u=c+n[e*(s+r)+1];o.coords[e*(s+r)]=t,o.coords[e*(s+r)+1]=u,l=t,c=u}s+=t}return o}function Ft(t,e=0,o=0){Pt(t.lengths,o),Pt(t.coords,e)}function Pt(t,e=0){t.length!==e&&(t.length=e)}const xt={originPosition:"lowerLeft",scale:[1,1,1,1],translate:[0,0,0,0]};


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

/***/ 37610:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SH: () => (/* binding */ S),
/* harmony export */   ae: () => (/* binding */ h),
/* harmony export */   cn: () => (/* binding */ b)
/* harmony export */ });
/* unused harmony export parseFieldType */
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/* harmony import */ var _core_pbf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66471);
/* harmony import */ var _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88443);
/* harmony import */ var _pbfOptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38333);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const a=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML","esriFieldTypeBigInteger","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"],n=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],i=["upperLeft","lowerLeft"];function o(e){return e>=a.length?null:a[e]}function c(e){return e>=n.length?null:n[e]}function l(e){return e>=i.length?null:i[e]}function g(e,t){return t>=e.geometryTypes.length?null:e.geometryTypes[t]}function p(e,t,s){const r=3,a=e.asUnsafe(),n=t.createPointGeometry(s);for(;a.next();)switch(a.tag()){case r:{const e=a.getUInt32(),s=a.pos()+e;let r=0;for(;a.pos()<s;)t.addCoordinatePoint(n,a.getSInt64(),r++);break}default:a.skip()}return n}function u(e,t,s){const r=2,a=3,n=e.asUnsafe(),i=t.createGeometry(s),o=2+(s.hasZ?1:0)+(s.hasM?1:0);for(;n.next();)switch(n.tag()){case r:{const e=n.getUInt32(),s=n.pos()+e;let r=0;for(;n.pos()<s;)t.addLength(i,n.getUInt32(),r++);break}case a:{const e=n.getUInt32(),s=n.pos()+e;let r=0;for(t.allocateCoordinates(i);n.pos()<s;)t.addCoordinate(i,n.getSInt64(),r),r++,r===o&&(r=0);break}default:n.skip()}return i}function f(e){const t=1,a=2,n=3,i=e.asUnsafe(),o=new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A;let c="esriGeometryPoint";for(;i.next();)switch(i.tag()){case a:{const e=i.getUInt32(),t=i.pos()+e;for(;i.pos()<t;)o.lengths.push(i.getUInt32());break}case n:{const e=i.getUInt32(),t=i.pos()+e;for(;i.pos()<t;)o.coords.push(i.getSInt64());break}case t:c=_pbfOptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_2__/* .optimizedGeometryTypes */ .z[i.getEnum()];break;default:i.skip()}return{queryGeometry:o,queryGeometryType:c}}function y(e){const t=1,s=2,r=3,a=4,n=5,i=6,o=7,c=8,l=9,g=e.asUnsafe();for(;g.next();)switch(g.tag()){case t:return g.getString();case s:return g.getFloat();case r:return g.getDouble();case a:return g.getSInt32();case n:return g.getUInt32();case i:return g.getInt64();case o:return g.getUInt64();case c:return g.getSInt64();case l:return g.getBool();default:return g.skip(),null}return null}function b(e){const t=1,s=2,r=3,a=4,n=5,i=6,l=e.asUnsafe(),g={type:o(0)};for(;l.next();)switch(l.tag()){case t:g.name=l.getString();break;case s:g.type=o(l.getEnum());break;case r:g.alias=l.getString();break;case a:g.sqlType=c(l.getEnum());break;case n:l.skip();break;case i:g.defaultValue=l.getString();break;default:l.skip()}return g}function k(e){const t=1,s=2,r={},a=e.asUnsafe();for(;a.next();)switch(a.tag()){case t:r.name=a.getString();break;case s:r.isSystemMaintained=a.getBool();break;default:a.skip()}return r}function d(e,t,s,r){const a=1,n=2,i=4,o=t.createFeature(s);let c=0;for(;e.next();)switch(e.tag()){case a:{const t=r[c++].name;o.attributes[t]=e.processMessage(y);break}case n:o.geometry=e.processMessageWithArgs(u,t,s);break;case i:o.centroid=e.processMessageWithArgs(p,t,s);break;default:e.skip()}return o}function T(e){const t=1,s=2,r=3,a=4,n=[1,1,1,1],i=e.asUnsafe();for(;i.next();)switch(i.tag()){case t:n[0]=i.getDouble();break;case s:n[1]=i.getDouble();break;case a:n[2]=i.getDouble();break;case r:n[3]=i.getDouble();break;default:i.skip()}return n}function m(e){const t=1,s=2,r=3,a=4,n=[0,0,0,0],i=e.asUnsafe();for(;i.next();)switch(i.tag()){case t:n[0]=i.getDouble();break;case s:n[1]=i.getDouble();break;case a:n[2]=i.getDouble();break;case r:n[3]=i.getDouble();break;default:i.skip()}return n}function h(e){const t=1,s=2,r=3,a={originPosition:l(0)},n=e.asUnsafe();for(;n.next();)switch(n.tag()){case t:a.originPosition=l(n.getEnum());break;case s:a.scale=n.processMessage(T);break;case r:a.translate=n.processMessage(m);break;default:n.skip()}return a}function F(e){const t=1,s=2,r=3,a={},n=e.asUnsafe();for(;n.next();)switch(n.tag()){case t:a.shapeAreaFieldName=n.getString();break;case s:a.shapeLengthFieldName=n.getString();break;case r:a.units=n.getString();break;default:n.skip()}return a}function q(e,t){const s=1,r=2,a=3,n=4,i=5,o=t.createSpatialReference();for(;e.next();)switch(e.tag()){case s:o.wkid=e.getUInt32();break;case i:o.wkt=e.getString();break;case r:o.latestWkid=e.getUInt32();break;case a:o.vcsWkid=e.getUInt32();break;case n:o.latestVcsWkid=e.getUInt32();break;default:e.skip()}return o}function I(e,t){const s=1,r=2,a=3,n=4,i=5,o=7,c=8,l=9,p=10,u=11,f=12,y=13,T=15,m=t.createFeatureResult(),I=e.asUnsafe();m.geometryType=g(t,0);let U=!1;for(;I.next();)switch(I.tag()){case s:m.objectIdFieldName=I.getString();break;case a:m.globalIdFieldName=I.getString();break;case n:m.geohashFieldName=I.getString();break;case i:m.geometryProperties=I.processMessage(F);break;case o:m.geometryType=g(t,I.getEnum());break;case c:m.spatialReference=I.processMessageWithArgs(q,t);break;case p:m.hasZ=I.getBool();break;case u:m.hasM=I.getBool();break;case f:m.transform=I.processMessage(h);break;case l:m.exceededTransferLimit=I.getBool();break;case y:t.addField(m,I.processMessage(b));break;case T:U||(t.prepareFeatures(m),U=!0),t.addFeature(m,I.processMessageWithArgs(d,t,m,m.fields));break;case r:m.uniqueIdField=I.processMessage(k);break;default:I.skip()}return t.finishFeatureResult(m),m}function U(e,t){const s=1,r=4,a={};let n=null;for(;e.next();)switch(e.tag()){case r:n=e.processMessageWithArgs(f);break;case s:a.featureResult=e.processMessageWithArgs(I,t);break;default:e.skip()}return null!=n&&a.featureResult&&t.addQueryGeometry(a,n),a}function S(s,r){try{const e=2,a=new _core_pbf_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(new Uint8Array(s),new DataView(s)),n={};for(;a.next();)if(a.tag()===e)n.queryResult=a.processMessageWithArgs(U,r);else a.skip();return n}catch(a){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:a})}}


/***/ }),

/***/ 38333:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ a),
/* harmony export */   z: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92976);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87926);
/* harmony import */ var _layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32597);
/* harmony import */ var _layers_graphics_OptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46461);
/* harmony import */ var _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88443);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const n=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];class a{constructor(e){this._options=e,this.geometryTypes=n,this._coordinatePtr=0,this._vertexDimension=0}createFeatureResult(){return new _layers_graphics_OptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A}prepareFeatures(e){this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++}finishFeatureResult(o){if(!o?.features||!o.hasZ||!this._options.sourceSpatialReference||!o.spatialReference||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .equals */ .aI)(o.spatialReference,this._options.sourceSpatialReference)||o.spatialReference.vcsWkid)return;const i=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getMetersPerVerticalUnitForSR */ .G9)(this._options.sourceSpatialReference)/(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getMetersPerVerticalUnitForSR */ .G9)(o.spatialReference);if(1!==i)for(const e of o.features){if(!(0,_layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_3__/* .hasGeometry */ .N3)(e))continue;const t=e.geometry.coords;for(let e=2;e<t.length;e+=3)t[e]*=i}}addFeature(e,t){e.features.push(t)}createFeature(){return new _layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_3__/* .OptimizedFeature */ .Om}createSpatialReference(){return{wkid:0}}createGeometry(){return new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A}addField(e,t){e.fields.push(t)}allocateCoordinates(e){e.coords.length=e.lengths.reduce(((e,t)=>e+t),0)*this._vertexDimension,this._coordinatePtr=0}addCoordinate(e,t){e.coords[this._coordinatePtr++]=t}addCoordinatePoint(e,t){e.coords.push(t)}addLength(e,t){e.lengths.push(t)}addQueryGeometry(e,t){e.queryGeometry=t.queryGeometry,e.queryGeometryType=t.queryGeometryType}createPointGeometry(){return new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A}}


/***/ }),

/***/ 79305:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _pbfFeatureServiceParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37610);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function t(t,r){const u=(0,_pbfFeatureServiceParser_js__WEBPACK_IMPORTED_MODULE_0__/* .parseFeatureQuery */ .SH)(t,r),o=u.queryResult.featureResult,s=u.queryResult.queryGeometry,y=u.queryResult.queryGeometryType;if(o&&o.features&&o.features.length&&o.objectIdFieldName){const e=o.objectIdFieldName;for(const t of o.features)t.attributes&&(t.objectId=t.attributes[e])}return o&&(o.queryGeometry=s,o.queryGeometryType=y),o}


/***/ }),

/***/ 615:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PBFDecoderWorker_s)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/compilerUtils.js
var compilerUtils = __webpack_require__(73345);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/uid.js
var uid = __webpack_require__(65061);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/zscale.js
var zscale = __webpack_require__(8034);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/typedArrayUtil.js
var typedArrayUtil = __webpack_require__(86942);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/aaBoundingBox.js
var aaBoundingBox = __webpack_require__(4675);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/aaBoundingRect.js
var aaBoundingRect = __webpack_require__(80510);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/quantizationUtils.js
var quantizationUtils = __webpack_require__(20698);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/typeUtils.js
var typeUtils = __webpack_require__(12433);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/Field.js
var Field = __webpack_require__(24738);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(87926);
;// ../node_modules/@arcgis/core/layers/graphics/dehydratedFeatureComparison.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function dehydratedFeatureComparison_n(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++){const r=e[t],a=n[t];if(r.length!==a.length)return!1;for(let e=0;e<r.length;e++)if(r[e]!==a[e])return!1}return!0}function dehydratedFeatureComparison_t(e,t){if(e===t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!dehydratedFeatureComparison_n(e[r],t[r]))return!1;return!0}function dehydratedFeatureComparison_r(n,t){return n===t||null!=n&&null!=t&&e(n.spatialReference,t.spatialReference)&&n.x===t.x&&n.y===t.y&&n.z===t.z&&n.m===t.m}function dehydratedFeatureComparison_a(n,r){return n.hasZ===r.hasZ&&n.hasM===r.hasM&&(!!e(n.spatialReference,r.spatialReference)&&dehydratedFeatureComparison_t(n.paths,r.paths))}function dehydratedFeatureComparison_u(n,r){return n.hasZ===r.hasZ&&n.hasM===r.hasM&&(!!e(n.spatialReference,r.spatialReference)&&dehydratedFeatureComparison_t(n.rings,r.rings))}function dehydratedFeatureComparison_i(t,r){return t.hasZ===r.hasZ&&t.hasM===r.hasM&&(!!e(t.spatialReference,r.spatialReference)&&dehydratedFeatureComparison_n(t.points,r.points))}function dehydratedFeatureComparison_s(n,t){return n.hasZ===t.hasZ&&n.hasM===t.hasM&&(!!e(n.spatialReference,t.spatialReference)&&(n.xmin===t.xmin&&n.ymin===t.ymin&&n.zmin===t.zmin&&n.xmax===t.xmax&&n.ymax===t.ymax&&n.zmax===t.zmax))}function dehydratedFeatureComparison_l(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(e.type!==n.type)return!1;switch(e.type){case"point":return dehydratedFeatureComparison_r(e,n);case"extent":return dehydratedFeatureComparison_s(e,n);case"polyline":return dehydratedFeatureComparison_a(e,n);case"polygon":return dehydratedFeatureComparison_u(e,n);case"multipoint":return dehydratedFeatureComparison_i(e,n);case"mesh":return!1;default:return}}function f(e,n){if(e===n)return!0;if(!e||!n)return!1;const t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(const a of t)if(e[a]!==n[a])return!1;return!0}function dehydratedFeatureComparison_c(e,n){return e===n||null!=e&&null!=n&&e.objectId===n.objectId&&(!!dehydratedFeatureComparison_l(e.geometry,n.geometry)&&!!f(e.attributes,n.attributes))}

;// ../node_modules/@arcgis/core/layers/graphics/dehydratedFeatures.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class y{constructor(e,t,s){this.uid=e,this.geometry=t,this.attributes=s,this.visible=!0,this.objectId=null,this.centroid=null}}function dehydratedFeatures_f(e){return null!=e.geometry}class g{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}}function d(e){const t=c.fromJSON(e.geometryType),s=r.fromJSON(e.spatialReference),n=e.transform,a=e.features.map((r=>{const a=b(r,t,s,e.objectIdFieldName),o=a.geometry;if(null!=o&&n)switch(o.type){case"point":a.geometry=h(n,o,o,o.hasZ,o.hasM);break;case"multipoint":a.geometry=u(n,o,o,!!o.hasZ,!!o.hasM);break;case"polygon":a.geometry=p(n,o,o,!!o.hasZ,!!o.hasM);break;case"polyline":a.geometry=l(n,o,o,!!o.hasZ,!!o.hasM);break;case"extent":case"mesh":a.geometry=o}return a}));return{geometryType:t,features:a,spatialReference:s,fields:e.fields?.map((e=>m.fromJSON(e)))??[],objectIdFieldName:e.objectIdFieldName,globalIdFieldName:e.globalIdFieldName,geohashFieldName:e.geohashFieldName,geometryProperties:e.geometryProperties,hasZ:e.hasZ,hasM:e.hasM,exceededTransferLimit:e.exceededTransferLimit,transform:null}}function b(e,t,r,n){return{uid:s(),objectId:n&&e.attributes?e.attributes[n]:null,attributes:e.attributes,geometry:x(e.geometry,t,r),visible:!0}}function x(e,t,s){if(null==e)return null;switch(t){case"point":{const t=e;return{x:t.x,y:t.y,z:t.z,m:t.m,hasZ:null!=t.z,hasM:null!=t.m,type:"point",spatialReference:s}}case"polyline":{const t=e;return{paths:t.paths,hasZ:!!t.hasZ,hasM:!!t.hasM,type:"polyline",spatialReference:s}}case"polygon":{const t=e;return{rings:t.rings,hasZ:!!t.hasZ,hasM:!!t.hasM,type:"polygon",spatialReference:s}}case"multipoint":{const t=e;return{points:t.points,hasZ:!!t.hasZ,hasM:!!t.hasM,type:"multipoint",spatialReference:s}}}}function Z(e){if(null==e)return 0;let s=32;switch(e.type){case"point":s+=42;break;case"polyline":case"polygon":{let t=0;const r=2+(e.hasZ?1:0)+(e.hasM?1:0),n="polyline"===e.type?e.paths:e.rings;for(const e of n)t+=e.length;s+=8*t*r+64,s+=128*t,s+=34,s+=32*(n.length+1);break}case"multipoint":{const t=2+(e.hasZ?1:0)+(e.hasM?1:0),r=e.points.length;s+=8*r*t+64,s+=128*r,s+=34,s+=32;break}case"extent":s+=98,e.hasM&&(s+=32),e.hasZ&&(s+=32);break;case"mesh":s+=t(e.vertexAttributes.position,e.vertexAttributes.normal,e.vertexAttributes.uv,e.vertexAttributes.tangent)}return s}function j(t){let s=32;return s+=e(t.attributes),s+=3,s+=8+Z(t.geometry),s}function M(e){if(null==e)return 0;switch(e.type){case"point":return 1;case"polyline":{let t=0;for(const s of e.paths)t+=s.length;return t}case"polygon":{let t=0;for(const s of e.rings)t+=s.length;return t}case"multipoint":return e.points.length;case"extent":return 2;case"mesh":{const t=e.vertexAttributes&&e.vertexAttributes.position;return t?t.length/3:0}default:return}}function k(e){if(null==e)return!1;switch(e.type){case"extent":case"point":return!0;case"polyline":for(const t of e.paths)if(t.length>0)return!0;return!1;case"polygon":for(const t of e.rings)if(t.length>0)return!0;return!1;case"multipoint":return e.points.length>0;case"mesh":return!e.loaded||e.vertexAttributes.position.length>0}}function N(e,t){switch(n(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[3]=e.x,t[1]=t[4]=e.y,e.hasZ&&(t[2]=t[5]=e.z);break;case"polyline":for(let s=0;s<e.paths.length;s++)a(t,e.paths[s],!!e.hasZ);break;case"polygon":for(let s=0;s<e.rings.length;s++)a(t,e.rings[s],!!e.hasZ);break;case"multipoint":a(t,e.points,!!e.hasZ);break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[3]=e.xmax,t[4]=e.ymax,null!=e.zmin&&(t[2]=e.zmin),null!=e.zmax&&(t[5]=e.zmax)}}function F(e,t){switch(o(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[2]=e.x,t[1]=t[3]=e.y;break;case"polyline":for(let s=0;s<e.paths.length;s++)i(t,e.paths[s]);break;case"polygon":for(let s=0;s<e.rings.length;s++)i(t,e.rings[s]);break;case"multipoint":i(t,e.points);break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[2]=e.xmax,t[3]=e.ymax}}function z(e,t){return null!=e.objectId?e.objectId:e.attributes&&t?e.attributes[t]:null}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/featureConversionUtils.js
var featureConversionUtils = __webpack_require__(21355);
;// ../node_modules/@arcgis/core/rest/query/operations/pbfDehydratedFeatureSet.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function pbfDehydratedFeatureSet_l(t,e){return e}function pbfDehydratedFeatureSet_u(t,e,r,s){switch(r){case 0:return pbfDehydratedFeatureSet_f(t,e+s,0);case 1:return"lowerLeft"===t.originPosition?pbfDehydratedFeatureSet_f(t,e+s,1):pbfDehydratedFeatureSet_y(t,e+s,1)}}function pbfDehydratedFeatureSet_p(t,e,r,s){return 2===r?pbfDehydratedFeatureSet_f(t,e,2):pbfDehydratedFeatureSet_u(t,e,r,s)}function pbfDehydratedFeatureSet_c(t,e,r,s){return 2===r?pbfDehydratedFeatureSet_f(t,e,3):pbfDehydratedFeatureSet_u(t,e,r,s)}function pbfDehydratedFeatureSet_d(t,e,r,s){return 3===r?pbfDehydratedFeatureSet_f(t,e,3):pbfDehydratedFeatureSet_p(t,e,r,s)}function pbfDehydratedFeatureSet_f({translate:t,scale:e},r,s){return t[s]+r*e[s]}function pbfDehydratedFeatureSet_y({translate:t,scale:e},r,s){return t[s]-r*e[s]}class pbfDehydratedFeatureSet_m{constructor(t){this._options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=pbfDehydratedFeatureSet_l,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{}}createFeatureResult(){return new g}finishFeatureResult(t){if(this._options.applyTransform&&(t.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!t.hasZ)return;const e=(0,zscale/* getGeometryZScaler */.N)(t.geometryType,this._options.sourceSpatialReference,t.spatialReference);if(null!=e)for(const r of t.features)e(r.geometry)}createSpatialReference(){return new SpatialReference/* default */.A}addField(t,e){t.fields.push(Field/* default */.A.fromJSON(e));const r=t.fields.map((t=>t.name));this._attributesConstructor=function(){for(const t of r)this[t]=null}}addFeature(t,e){const r=this._options.maxStringAttributeLength??0;if(r>0)for(const s in e.attributes){const t=e.attributes[s];"string"==typeof t&&t.length>r&&(e.attributes[s]="")}t.features.push(e)}addQueryGeometry(t,e){const{queryGeometry:r,queryGeometryType:s}=e,o=(0,featureConversionUtils/* unquantizeOptimizedGeometry */.Ch)(r.clone(),r,!1,!1,this._transform),i=(0,featureConversionUtils/* convertToGeometry */.zv)(o,s,!1,!1);let h=null;switch(s){case"esriGeometryPoint":h="point";break;case"esriGeometryPolygon":h="polygon";break;case"esriGeometryPolyline":h="polyline";break;case"esriGeometryMultipoint":h="multipoint"}i.type=h,t.queryGeometryType=s,t.queryGeometry=i}prepareFeatures(e){switch(this._transform=e.transform??null,this._options.applyTransform&&e.transform&&(this._applyTransform=this._deriveApplyTransform(e)),this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++,e.geometryType){case"point":this.addCoordinate=(t,e,r)=>this.addCoordinatePoint(t,e,r),this.createGeometry=t=>this.createPointGeometry(t);break;case"polygon":this.addCoordinate=(t,e,r)=>this._addCoordinatePolygon(t,e,r),this.createGeometry=t=>this._createPolygonGeometry(t);break;case"polyline":this.addCoordinate=(t,e,r)=>this._addCoordinatePolyline(t,e,r),this.createGeometry=t=>this._createPolylineGeometry(t);break;case"multipoint":this.addCoordinate=(t,e,r)=>this._addCoordinateMultipoint(t,e,r),this.createGeometry=t=>this._createMultipointGeometry(t);break;case"mesh":case"extent":break;default:(0,compilerUtils/* neverReached */.Xb)(e.geometryType)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,new y((0,uid/* generateUID */.L)(),null,new this._attributesConstructor)}allocateCoordinates(){const t=this._lengths.reduce(((t,e)=>t+e),0);this._coordinateBuffer=new Float64Array(t*this._vertexDimension),this._coordinateBufferPtr=0}addLength(t,e){0===this._lengths.length&&(this._toAddInCurrentPath=e),this._lengths.push(e)}createPointGeometry(t){const e={type:"point",x:0,y:0,spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM};return e.hasZ&&(e.z=0),e.hasM&&(e.m=0),e}addCoordinatePoint(t,e,r){const s=this._transform?this._applyTransform(this._transform,e,r,0):e;if(null!=s)switch(r){case 0:t.x=s;break;case 1:t.y=s;break;case 2:t.hasZ?t.z=s:t.m=s;break;case 3:t.m=s}}_transformPathLikeValue(t,e){let r=0;return e<=1&&(r=this._previousCoordinate[e],this._previousCoordinate[e]+=t),this._transform?this._applyTransform(this._transform,t,e,r):t}_addCoordinatePolyline(t,e,r){this._dehydratedAddPointsCoordinate(t.paths,e,r)}_addCoordinatePolygon(t,e,r){this._dehydratedAddPointsCoordinate(t.rings,e,r)}_addCoordinateMultipoint(t,e,r){0===r&&t.points.push([]);const s=this._transformPathLikeValue(e,r);t.points[t.points.length-1].push(s)}_createPolygonGeometry(t){return{type:"polygon",rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createPolylineGeometry(t){return{type:"polyline",paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createMultipointGeometry(t){return{type:"multipoint",points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_dehydratedAddPointsCoordinate(t,e,r){0===r&&0==this._toAddInCurrentPath--&&(t.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const s=this._transformPathLikeValue(e,r),o=t[t.length-1],i=this._coordinateBuffer;if(i){if(0===r){const t=this._coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT;o.push(new Float64Array(i.buffer,t,this._vertexDimension))}i[this._coordinateBufferPtr++]=s}}_deriveApplyTransform(t){const{hasZ:e,hasM:r}=t;return e&&r?pbfDehydratedFeatureSet_d:e?pbfDehydratedFeatureSet_p:r?pbfDehydratedFeatureSet_c:pbfDehydratedFeatureSet_u}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/query/operations/pbfQueryUtils.js
var pbfQueryUtils = __webpack_require__(79305);
;// ../node_modules/@arcgis/core/views/3d/support/PBFDecoderWorker.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class PBFDecoderWorker_t{_parseFeatureQuery(t){const s=(0,pbfQueryUtils/* parsePBFFeatureQuery */.m)(t.buffer,new pbfDehydratedFeatureSet_m(t.options)),o={...s,spatialReference:s.spatialReference?.toJSON(),fields:s.fields?s.fields.map((e=>e.toJSON())):void 0};return Promise.resolve(o)}}function PBFDecoderWorker_s(){return new PBFDecoderWorker_t}


/***/ })

};
;