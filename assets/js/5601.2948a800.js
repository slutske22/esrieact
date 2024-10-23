"use strict";
exports.id = 5601;
exports.ids = [5601,7982,8284];
exports.modules = {

/***/ 56192:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ o),
/* harmony export */   a: () => (/* binding */ e),
/* harmony export */   b: () => (/* binding */ r),
/* harmony export */   c: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony exports f, m */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function r(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function t(e,r,t,n,o,a,u,c,f,l,s,i,b,_,m,p){return[e,r,t,n,o,a,u,c,f,l,s,i,b,_,m,p]}function n(e,r){return new Float64Array(e,r,16)}const o=e(),a=Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:o,clone:r,create:e,createView:n,fromValues:t},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 24121:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ n),
/* harmony export */   b: () => (/* binding */ f),
/* harmony export */   c: () => (/* binding */ t),
/* harmony export */   d: () => (/* binding */ i),
/* harmony export */   e: () => (/* binding */ o),
/* harmony export */   n: () => (/* binding */ s),
/* harmony export */   s: () => (/* binding */ u),
/* harmony export */   t: () => (/* binding */ r)
/* harmony export */ });
/* unused harmony exports f, v */
/* harmony import */ var _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64521);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function t(e,t,f){r(e.typedBuffer,t.typedBuffer,f,e.typedBufferStride,t.typedBufferStride)}function r(t,r,f,n=3,o=n){if(t.length/n!==Math.ceil(r.length/o))return _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__/* .mathLogger */ .J.error("source and destination buffers need to have the same number of elements"),t;const u=t.length/n,i=f[0],s=f[1],a=f[2],d=f[4],c=f[5],l=f[6],p=f[8],y=f[9],h=f[10],m=f[12],B=f[13],g=f[14];let S=0,M=0;for(let e=0;e<u;e++){const e=r[S],f=r[S+1],u=r[S+2];t[M]=i*e+d*f+p*u+m,t[M+1]=s*e+c*f+y*u+B,t[M+2]=a*e+l*f+h*u+g,S+=o,M+=n}return t}function f(e,t,r){n(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function n(t,r,f,n=3,o=n){if(t.length/n!==Math.ceil(r.length/o))return void _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__/* .mathLogger */ .J.error("source and destination buffers need to have the same number of elements");const u=t.length/n,i=f[0],s=f[1],a=f[2],d=f[3],c=f[4],l=f[5],p=f[6],y=f[7],h=f[8];let m=0,B=0;for(let e=0;e<u;e++){const e=r[m],f=r[m+1],u=r[m+2];t[B]=i*e+d*f+p*u,t[B+1]=s*e+c*f+y*u,t[B+2]=a*e+l*f+h*u,m+=o,B+=n}}function o(e,t,r){u(e.typedBuffer,t,r,e.typedBufferStride)}function u(e,t,r,f=3){const n=Math.min(e.length/f,t.count),o=t.typedBuffer,u=t.typedBufferStride;let i=0,s=0;for(let a=0;a<n;a++)e[s]=r*o[i],e[s+1]=r*o[i+1],e[s+2]=r*o[i+2],i+=u,s+=f}function i(e,t){s(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function s(e,t,r=3,f=r){const n=Math.min(e.length/r,t.length/f);let o=0,u=0;for(let i=0;i<n;i++){const n=t[o],i=t[o+1],s=t[o+2],a=n*n+i*i+s*s;if(a>0){const t=1/Math.sqrt(a);e[u]=t*n,e[u+1]=t*i,e[u+2]=t*s}o+=f,u+=r}}function a(e,t,r){const f=Math.min(e.count,t.count),n=e.typedBuffer,o=e.typedBufferStride,u=t.typedBuffer,i=t.typedBufferStride;let s=0,a=0;for(let d=0;d<f;d++)n[a]=u[s]>>r,n[a+1]=u[s+1]>>r,n[a+2]=u[s+2]>>r,s+=i,a+=o}const d=Object.freeze(Object.defineProperty({__proto__:null,normalize:s,normalizeView:i,scale:u,scaleView:o,shiftRight:a,transformMat3:n,transformMat3View:f,transformMat4:r,transformMat4View:t},Symbol.toStringTag,{value:"Module"}));


/***/ }),

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

/***/ 29317:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24793);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63863);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22279);
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(78632);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let a=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* .ClonableMixin */ .O)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY)){constructor(e){super(e),this.type="georeferenced-relative",this.isRelative=!0,this.isGeoreferenced=!0,this.origin=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__.c)()}getOriginPoint(e){const[r,o,t]=this.origin;return new _Point_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A({x:r,y:o,z:t,spatialReference:e})}setOriginFromPoint({x:e,y:r,z:o}){this.origin=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__.f)(e,r,o??0)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__/* .enumeration */ .e)({georeferencedRelative:"georeferenced-relative"},{readOnly:!0})],a.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],a.prototype,"origin",void 0),a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.geometry.support.MeshGeoreferencedRelativeVertexSpace")],a);const m=a;


/***/ }),

/***/ 64521:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(539);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const e=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getLogger("esri.views.3d.support.buffer.math");


/***/ }),

/***/ 21690:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bq: () => (/* binding */ o),
/* harmony export */   Qp: () => (/* binding */ i),
/* harmony export */   WN: () => (/* binding */ A),
/* harmony export */   dK: () => (/* binding */ v),
/* harmony export */   eN: () => (/* binding */ h),
/* harmony export */   fH: () => (/* binding */ N),
/* harmony export */   "in": () => (/* binding */ y),
/* harmony export */   yr: () => (/* binding */ u)
/* harmony export */ });
/* unused harmony exports assetIsOnService, isDisplayAsset, isDisplaySource, sourceIsOnService */
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86394);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85569);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40189);
/* harmony import */ var _layers_support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40906);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class i{constructor(t,r,e){this.assetName=t,this.assetMimeType=r,this.parts=e}equals(t){return this===t||this.assetName===t.assetName&&this.assetMimeType===t.assetMimeType&&(0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .equals */ .aI)(this.parts,t.parts,((t,r)=>t.equals(r)))}isOnService(t){return this.parts.every((r=>r.isOnService(t)))}makeHash(){let t="";for(const r of this.parts)t+=r.partHash;return t}async toBlob(t){const{parts:r}=this;if(1===r.length)return r[0].toBlob(t);const s=await Promise.all(r.map((r=>r.toBlob(t))));return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .throwIfAborted */ .Te)(t),new Blob(s)}}class o{constructor(t,r){this.partUrl=t,this.partHash=r}equals(t){return this===t||this.partUrl===t.partUrl&&this.partHash===t.partHash}isOnService(t){return this.partUrl.startsWith(`${t.path}/assets/`)}async toBlob(r){const{data:s}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this.partUrl,{responseType:"blob"});return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .throwIfAborted */ .Te)(r),s}}function u(t){return p(t?.source)}function c(t){if(!Array.isArray(t))return!1;return t.every((t=>t instanceof i))}const f=/^(model\/gltf\+json)|(model\/gltf-binary)$/,l=/\.(gltf|glb)/i;function p(t){if(!t)return!1;if(Array.isArray(t)){return t.some(m)}return m(t)}function m(t){if(t instanceof File){const{type:r,name:e}=t;return f.test(r)||l.test(e)}return f.test(t.assetMimeType)||l.test(t.assetName)}function h(t,r){if(!t)return!1;const{source:e}=t;return g(e,r)}function y(t,r){if(t===r)return!0;const{source:e}=t,{source:s}=r;if(e===s)return!0;if(c(e)&&c(s)){if(e.length!==s.length)return!1;const t=(t,r)=>t.assetName<r.assetName?-1:t.assetName>r.assetName?1:0,r=[...e].sort(t),n=[...s].sort(t);for(let e=0;e<r.length;++e)if(!r[e].equals(n[e]))return!1;return!0}return!1}function g(t,r){if(Array.isArray(t)){const e=t;return e.length>0&&e.every((t=>b(t,r)))}return b(t,r)}function b(t,r){return t instanceof i&&t.isOnService(r)}function N(t,r){return t instanceof File?(0,_layers_support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_3__/* .getFileFormatId */ .rq)(t,r):(0,_layers_support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_3__/* .getMimeTypeFormatId */ .R_)(t.assetMimeType,r)??(0,_layers_support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_3__/* .getFilenameFormatId */ .E1)(t.assetName,r)}function A(t){return Array.isArray(t)?t:[t]}function v(t){return!!t.original}


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

/***/ 22567:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const t={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByAnonymous:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0};


/***/ }),

/***/ 75903:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyEdits: () => (/* binding */ A),
/* harmony export */   r3: () => (/* binding */ b),
/* harmony export */   uploadAssets: () => (/* binding */ M),
/* harmony export */   zp: () => (/* binding */ F)
/* harmony export */ });
/* unused harmony exports checkEditingCapabilities, isFeatureIdentifierWithGlobalId, isFeatureIdentifierWithObjectId, normalizeCollections, normalizeEdits, normalizeGeometries, shallowCloneFeature */
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25707);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48982);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98849);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19251);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(539);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40189);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20909);
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33880);
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65231);
/* harmony import */ var _mixins_EditBusLayer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46602);
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(42453);
/* harmony import */ var _support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(40906);
/* harmony import */ var _support_layerUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(40454);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function y(e){return null!=e?.applyEdits}function g(e){return"object"==typeof e&&null!=e&&"objectId"in e&&!!e.objectId}function b(e){return e.every(g)}function w(e){return"object"==typeof e&&null!=e&&"globalId"in e&&!!e.globalId}function F(e){return e.every(w)}async function A(e,t,a,s={}){let i;const n="gdbVersion"in e?e.gdbVersion:null,d=s.gdbVersion??n;if((0,_mixins_EditBusLayer_js__WEBPACK_IMPORTED_MODULE_9__/* .isEditBusLayer */ .Mk)(e)&&e.url)i=(0,_mixins_EditBusLayer_js__WEBPACK_IMPORTED_MODULE_9__/* .emitApplyEditsEvent */ .Zk)(e.url,e.layerId,d,"original-and-current-features"===s.returnServiceEditsOption);else{i=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .createResolver */ .Tw)(),i.promise.then((t=>{(t.addedFeatures.length||t.updatedFeatures.length||t.deletedFeatures.length||t.addedAttachments.length||t.updatedAttachments.length||t.deletedAttachments.length)&&e.emit("edits",t)}));const t={result:i.promise};e.emit("apply-edits",t)}try{const{results:o,edits:n}=await v(e,t,a,s),d=e=>e.filter((e=>!e.error)).map(_core_lang_js__WEBPACK_IMPORTED_MODULE_3__/* .clone */ .o8),l={edits:n,addedFeatures:d(o.addFeatureResults),updatedFeatures:d(o.updateFeatureResults),deletedFeatures:d(o.deleteFeatureResults),addedAttachments:d(o.addAttachmentResults),updatedAttachments:d(o.updateAttachmentResults),deletedAttachments:d(o.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:o.editMoment?new Date(o.editMoment):null,globalIdToObjectId:s.globalIdToObjectId};return o.editedFeatureResults?.length&&(l.editedFeatures=o.editedFeatureResults),i.resolve(l),o}catch(p){throw i.reject(p),p}}async function v(e,t,r,s){if(await e.load(),!y(t))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!(0,_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_11__/* .getEffectiveEditingEnabled */ .tk)(e))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:o,options:i}=await I(e,r,s);return o.addFeatures?.length||o.updateFeatures?.length||o.deleteFeatures?.length||o.addAttachments?.length||o.updateAttachments?.length||o.deleteAttachments?.length?{edits:o,results:await t.applyEdits(o,i)}:{edits:o,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}async function I(e,t,r){const o=(0,_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_11__/* .getEffectiveLayerCapabilities */ .BR)(e),i=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),n=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),d=null!=e.infoFor3D;if(T(t,o,r,!!i,!!n,`${e.type}-layer`),!o.data.isVersioned&&r?.gdbVersion)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!o.editing.supportsRollbackOnFailure&&r?.rollbackOnFailureEnabled)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");const l={...r};if(null!=l.rollbackOnFailureEnabled||o.editing.supportsRollbackOnFailure||(l.rollbackOnFailureEnabled=!0),l.rollbackOnFailureEnabled||"original-and-current-features"!==l.returnServiceEditsOption||(!1===l.rollbackOnFailureEnabled&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.getLogger("esri.layers.graphics.editingSupport").warn(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwrritten and set to true."),l.rollbackOnFailureEnabled=!0),!o.editing.supportsReturnServiceEditsInSourceSpatialReference&&l.returnServiceEditsInSourceSR)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(l.returnServiceEditsInSourceSR&&"original-and-current-features"!==l.returnServiceEditsOption)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const u=B(t,o,`${e.type}-layer`),p=r?.globalIdUsed||d,c=e.fields.filter((e=>"big-integer"===e.type||"oid"===e.type&&(e.length||0)>=8));if(p){const{globalIdField:t}=e;if(null==t)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${e.type}-layer:invalid-parameter`,"Layer does not specify a global id field.");u.addFeatures.forEach((e=>U(e,t)))}u.addFeatures.forEach((t=>S(t,e,p,c))),u.updateFeatures.forEach((t=>j(t,e,p,c))),u.deleteFeatures.forEach((t=>R(t,e,p,c))),u.addAttachments.forEach((t=>O(t,e))),u.updateAttachments.forEach((t=>O(t,e))),d&&await G(u,e);return{edits:await L(u),options:l}}function $(e,t,r,s){if(r){if("attributes"in e&&!e.attributes[t.globalIdField])throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:invalid-parameter`,`Feature should have '${t.globalIdField}' when 'globalIdUsed' is true`);if(!("attributes"in e)&&!e.globalId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:invalid-parameter`,"`'globalId' of the feature should be passed when 'globalIdUsed' is true")}if(s.length&&"attributes"in e)for(const o of s){const r=e.attributes[o.name];if(void 0!==r&&!(0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .isValidFieldValue */ .OG)(o,r))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:invalid-parameter`,`Big-integer field '${o.name}' of the feature must be less than ${Number.MAX_SAFE_INTEGER}`,{feature:e})}if("geometry"in e&&null!=e.geometry){if(e.geometry.hasZ&&!1===t.capabilities?.data.supportsZ)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities?.data.supportsM)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function E(e,t){if("geometry"in e&&"mesh"===e.geometry?.type&&null!=t.infoFor3D){const{geometry:r}=e;if(r.vertexSpace.isGeoreferenced)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:georeferenced-mesh-unsupported`,"Uploading georeferenced meshes to a layer is not supported.")}}function S(e,t,a,r){$(e,t,a,r),E(e,t)}function R(e,t,a,r){$(e,t,a,r)}function j(e,t,r,s){$(e,t,r,s),E(e,t);const o=(0,_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_11__/* .getEffectiveLayerCapabilities */ .BR)(t);if("geometry"in e&&null!=e.geometry&&!o?.editing.supportsGeometryUpdate)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}function O(e,t){const{feature:r,attachment:s}=e;if(!r||"attributes"in r&&!r.attributes[t.globalIdField])throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in r)&&!r.globalId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!s.globalId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!s.data&&!s.uploadId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(s.data instanceof File&&!!s.data.name)&&!s.name)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities?.editing.supportsUploadWithItemId&&s.uploadId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof s.data){const e=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .dataComponents */ .r$)(s.data);if(e&&!e.isBase64)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}function U(e,t){const{attributes:a}=e;null==a[t]&&(a[t]=(0,_core_uuid_js__WEBPACK_IMPORTED_MODULE_7__/* .generateBracedUUID */ .yS)())}async function L(e){const t=e.addFeatures??[],a=e.updateFeatures??[],r=t.concat(a).map((e=>e.geometry)),s=await (0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .normalizeCentralMeridian */ .el)(r),o=t.length,i=a.length;return s.slice(0,o).forEach(((e,a)=>t[a].geometry=e)),s.slice(o,o+i).forEach(((e,t)=>a[t].geometry=e)),e}function k(e){return{addFeatures:Array.from(e?.addFeatures??[]),updateFeatures:Array.from(e?.updateFeatures??[]),deleteFeatures:e&&_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.isCollection(e.deleteFeatures)?e.deleteFeatures.toArray():e.deleteFeatures||[],addAttachments:e.addAttachments||[],updateAttachments:e.updateAttachments||[],deleteAttachments:e.deleteAttachments||[]}}function B(e,t,r){const s=k(e);if(s.addFeatures?.length&&!t.operations.supportsAdd)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${r}:unsupported-operation`,"Layer does not support adding features.");if(s.updateFeatures?.length&&!t.operations.supportsUpdate)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${r}:unsupported-operation`,"Layer does not support updating features.");if(s.deleteFeatures?.length&&!t.operations.supportsDelete)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${r}:unsupported-operation`,"Layer does not support deleting features.");return s.addFeatures=s.addFeatures.map(D),s.updateFeatures=s.updateFeatures.map(D),s.addAssetFeatures=[],s}function T(e,t,r,s,o,i){if(!e||!s&&!o)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${i}:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!t.editing.supportsGlobalId&&r?.globalIdUsed)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${i}:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!t.editing.supportsGlobalId&&o)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${i}:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!r?.globalIdUsed&&o)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${i}:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true")}function D(t){const a=new _Graphic_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A;return t.attributes||(t.attributes={}),a.geometry=t.geometry,a.attributes=t.attributes,a}async function G(e,t){if(null==t.infoFor3D)return;const{infoFor3D:r}=t,s=(0,_support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_12__/* .getMimeTypeFormatId */ .R_)("model/gltf-binary",r.supportedFormats)??(0,_support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_12__/* .getFilenameFormatId */ .E1)("glb",r.supportedFormats);if(!(!!s&&r.editFormats.includes(s)))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");e.addAssetFeatures??=[];const{addAssetFeatures:o}=e;for(const a of e.addFeatures??[])V(a)&&o.push(a);for(const a of e.updateFeatures??[])V(a)&&o.push(a)}function V(e){return"mesh"===e?.geometry?.type}function M(e,t,r,s){if(!y(t))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${e.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(r,s)}


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

/***/ 35601:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ $)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry.js
var geometry = __webpack_require__(17639);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/kernel.js
var kernel = __webpack_require__(28830);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/request.js
var request = __webpack_require__(86394);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/TimeExtent.js
var TimeExtent = __webpack_require__(19790);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Loadable.js
var Loadable = __webpack_require__(45307);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/object.js
var object = __webpack_require__(76724);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(20909);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/uuid.js
var uuid = __webpack_require__(33880);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(84698);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat4.js
var mat4 = __webpack_require__(37046);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat4f64.js
var mat4f64 = __webpack_require__(56192);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/MeshGeoreferencedRelativeVertexSpace.js
var MeshGeoreferencedRelativeVertexSpace = __webpack_require__(29317);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(24121);
;// ../node_modules/@arcgis/core/geometry/support/meshVertexSpaceUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function n(t){const{vertexSpace:n}=t;if(n.isRelative)return t.clone();const{anchor:i}=t,c=i.clone(),a=(0,mat4.d)(s,[-c.x,-c.y,-c.z]),m=new MeshGeoreferencedRelativeVertexSpace/* default */.A({origin:[c.x,c.y,c.z]}),p=t.cloneWithVertexSpace(m),{position:u}=p.vertexAttributes;return p.vertexAttributes.position=(0,vec32.t)(new Float64Array(u.length),u,a),p.vertexAttributesChanged(),p}const s=(0,mat4f64.a)();

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/meshUtils/External.js
var External = __webpack_require__(21690);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/Graphic.js
var Graphic = __webpack_require__(25707);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/unitUtils.js
var unitUtils = __webpack_require__(92976);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projection.js + 1 modules
var projection = __webpack_require__(13484);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/jsonUtils.js
var jsonUtils = __webpack_require__(1171);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/editingSupport.js
var editingSupport = __webpack_require__(75903);
;// ../node_modules/@arcgis/core/layers/graphics/applyEditsUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function applyEditsUtils_u(e,t,a){const{geometry:s}=t,l={...t.attributes};if(null!=a&&"mesh"===s?.type){const{transformFieldRoles:t}=a,{origin:i,spatialReference:d,transform:u}=s,c=e.spatialReference;await (0,projection.initializeProjection)(d,c);const p=(0,projection.project)(i,c);if(l[t.originX]=p.x,l[t.originY]=p.y,l[t.originZ]=p.z??0,null!=u){const{translation:e,scale:a,rotation:o}=u,{vertexSpace:n}=s,i=n.isGeoreferenced?1:(0,unitUtils/* getMetersPerCartesianUnitForSR */.KX)(d)/(0,unitUtils/* getMetersPerCartesianUnitForSR */.KX)(c);l[t.translationX]=e[0]*i,l[t.translationY]=e[2]*i,l[t.translationZ]=-e[1]*i,l[t.scaleX]=a[0],l[t.scaleY]=a[2],l[t.scaleZ]=a[1],l[t.rotationX]=o[0],l[t.rotationY]=o[2],l[t.rotationZ]=-o[1],l[t.rotationDeg]=o[3]}return{attributes:l}}return null==s?{attributes:l}:"mesh"===s.type||"extent"===s.type?null:{geometry:s.toJSON(),attributes:l}}async function applyEditsUtils_c(e,t){const a=await Promise.all((t.addAttachments??[]).map((t=>p(e,t)))),r=await Promise.all((t.updateAttachments??[]).map((t=>p(e,t)))),s=t.deleteAttachments??[];return a.length||r.length||s.length?{adds:a,updates:r,deletes:[...s]}:null}async function p(e,t){const{feature:a,attachment:r}=t,{globalId:o,name:n,contentType:l,data:i,uploadId:d}=r,u={globalId:o};if(a&&("attributes"in a?u.parentGlobalId=a.attributes?.[e.globalIdField]:a.globalId&&(u.parentGlobalId=a.globalId)),d)u.uploadId=d;else if(i){const e=await (0,urlUtils/* parseData */._0)(i);e&&(u.contentType=e.mediaType,u.data=e.data),i instanceof File&&(u.name=i.name)}return n&&(u.name=n),l&&(u.contentType=l),u}function applyEditsUtils_m(e,t,a){if(!t||0===t.length)return[];if(a&&(0,editingSupport/* isFeatureIdentifierArrayWithGlobalId */.zp)(t))return t.map((e=>e.globalId));if((0,editingSupport/* isFeatureIdentifierArrayWithObjectId */.r3)(t))return t.map((e=>e.objectId));const r=a?e.globalIdField:e.objectIdField;return r?t.map((e=>e.getAttribute(r))):[]}function f(e){const t=e?.assetMaps;if(t){for(const e of t.addResults)e.success||Logger/* default */.A.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${e.globalId}.`);for(const e of t.updateResults)e.success||Logger/* default */.A.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${e.globalId}.`)}const r=e?.attachments,s={addFeatureResults:e?.addResults?.map(g)??[],updateFeatureResults:e?.updateResults?.map(g)??[],deleteFeatureResults:e?.deleteResults?.map(g)??[],addAttachmentResults:r?.addResults?r.addResults.map(g):[],updateAttachmentResults:r?.updateResults?r.updateResults.map(g):[],deleteAttachmentResults:r?.deleteResults?r.deleteResults.map(g):[]};return e?.editMoment&&(s.editMoment=e.editMoment),s}function g(e){const a=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:a?new Error/* default */.A("feature-layer-source:edit-failure",a.description,{code:a.code}):null}}function b(t,a){return new Graphic/* default */.A({attributes:t.attributes,geometry:(0,jsonUtils/* fromJSON */.rS)({...t.geometry,spatialReference:a})})}function R(e,t){return{adds:e?.adds?.map((e=>b(e,t)))||[],updates:e?.updates?.map((e=>({original:b(e[0],t),current:b(e[1],t)})))||[],deletes:e?.deletes?.map((e=>b(e,t)))||[],spatialReference:t}}function I(e){const t=e.details.raw,a=+t.code,r=+t.extendedCode;return 500===a&&(-2147217144===r||-2147467261===r)}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/sources/support/clientSideDefaults.js
var clientSideDefaults = __webpack_require__(20061);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/sources/support/QueryTask.js + 1 modules
var QueryTask = __webpack_require__(47753);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js
var arcgisLayerUrl = __webpack_require__(16123);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/featureLayerUtils.js + 1 modules
var featureLayerUtils = __webpack_require__(97461);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/infoFor3D.js
var infoFor3D = __webpack_require__(40906);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/query/executeQueryJSON.js
var executeQueryJSON = __webpack_require__(9190);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/query/operations/editsZScale.js
var editsZScale = __webpack_require__(9669);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/Query.js + 1 modules
var Query = __webpack_require__(24587);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/versionManagement/support/versionManagementUtils.js
var versionManagementUtils = __webpack_require__(96023);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
;// ../node_modules/@arcgis/core/layers/graphics/sources/FeatureLayerSource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const L=new jsonMap/* JSONMap */.J({originalAndCurrentFeatures:"original-and-current-features",none:"none"}),Q=new Set(["Feature Layer","Oriented Imagery Layer","Table"]),D=new jsonMap/* JSONMap */.J({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let P=class extends Loadable/* default */.A{constructor(){super(...arguments),this.type="feature-layer",this.refresh=(0,promiseUtils/* debounce */.sg)((async()=>{await this.load();const e=this.sourceJSON.editingInfo?.lastEditDate;if(null==e)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const t=e!==this.sourceJSON.editingInfo?.lastEditDate;return{dataChanged:t,updates:t?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}})),this._ongoingAssetUploads=new Map}load(e){const t=this.layer.sourceJSON,s=this._fetchService(t,{...e}).then((()=>this.layer.setUserPrivileges(this.sourceJSON.serviceItemId,e))).then((()=>this._ensureLatestMetadata(e)));return this.addResolvingPromise(s),Promise.resolve(this)}get queryTask(){const{capabilities:e,parsedUrl:t,dynamicDataSource:s,infoFor3D:r,gdbVersion:a,spatialReference:i,fieldsIndex:o}=this.layer,n=(0,has/* default */.A)("featurelayer-pbf")&&e?.query.supportsFormatPBF&&null==r,u=e?.operations?.supportsQueryAttachments??!1;return new QueryTask/* default */.A({url:t.path,pbfSupported:n,fieldsIndex:o,infoFor3D:r,dynamicDataSource:s,gdbVersion:a,sourceSpatialReference:i,queryAttachmentsSupported:u})}async addAttachment(e,t){await this.load();const{layer:r}=this;await (0,featureLayerUtils/* ensureLayerCredential */.VA)(r,"editing");const a=e.attributes[r.objectIdField],i=r.parsedUrl.path+"/"+a+"/addAttachment",o=this._getLayerRequestOptions(),n=this._getFormDataForAttachment(t,o.query);try{const e=await (0,request/* default */.A)(i,{body:n});return g(e.data.addAttachmentResult)}catch(u){throw this._createAttachmentErrorResult(a,u)}}async updateAttachment(e,t,r){await this.load();const{layer:a}=this;await (0,featureLayerUtils/* ensureLayerCredential */.VA)(a,"editing");const i=e.attributes[a.objectIdField],o=a.parsedUrl.path+"/"+i+"/updateAttachment",n=this._getLayerRequestOptions({query:{attachmentId:t}}),u=this._getFormDataForAttachment(r,n.query);try{const e=await (0,request/* default */.A)(o,{body:u});return g(e.data.updateAttachmentResult)}catch(l){throw this._createAttachmentErrorResult(i,l)}}async applyEdits(e,r){await this.load();const{layer:i}=this;await (0,featureLayerUtils/* ensureLayerCredential */.VA)(i,"editing");const o=i.infoFor3D,n=null!=o,u=n||(r?.globalIdUsed??!1),l=n?await this._uploadMeshesAndGetAssetMapEditsJSON(e):null,c=e.addFeatures?.map((e=>applyEditsUtils_u(this.layer,e,o)))??[],d=(await Promise.all(c)).filter(arrayUtils/* isSome */.Ru),p=e.updateFeatures?.map((e=>applyEditsUtils_u(this.layer,e,o)))??[],y=(await Promise.all(p)).filter(arrayUtils/* isSome */.Ru),h=applyEditsUtils_m(this.layer,e.deleteFeatures,u);(0,editsZScale/* unapplyEditsZUnitScaling */.u)(d,y,i.spatialReference);const m=await applyEditsUtils_c(this.layer,e),f=i.capabilities.editing.supportsAsyncApplyEdits&&n,g=r?.gdbVersion||i.gdbVersion,S={gdbVersion:g,rollbackOnFailure:r?.rollbackOnFailureEnabled,useGlobalIds:u,returnEditMoment:r?.returnEditMoment,usePreviousEditMoment:r?.usePreviousEditMoment,async:f};await (0,versionManagementUtils/* isSafeToEditVersion */.ZJ)(this.layer.url,g,!0);const w=(0,versionManagementUtils/* isVersionInEditSession */.w5)(this.layer.url,g||null);r?.returnServiceEditsOption?(S.edits=JSON.stringify([{id:i.layerId,adds:d,updates:y,deletes:h,attachments:m,assetMaps:l}]),S.returnServiceEditsOption=L.toJSON(r?.returnServiceEditsOption),S.returnServiceEditsInSourceSR=r?.returnServiceEditsInSourceSR):(S.adds=d.length?JSON.stringify(d):null,S.updates=y.length?JSON.stringify(y):null,S.deletes=h.length?u?JSON.stringify(h):h.join(","):null,S.attachments=m&&JSON.stringify(m),S.assetMaps=null!=l?JSON.stringify(l):void 0);const q=this._getLayerRequestOptions({method:"post",query:S});w&&(q.authMode="immediate",q.query.returnEditMoment=!0,q.query.sessionId=versionManagementUtils/* currentSessionId */.TA);const A=r?.returnServiceEditsOption?i.url:i.parsedUrl.path;let F;try{F=f?await this._asyncApplyEdits(A+"/applyEdits",q):await (0,request/* default */.A)(A+"/applyEdits",q)}catch(_){if(!I(_))throw _;q.authMode="immediate",F=f?await this._asyncApplyEdits(A+"/applyEdits",q):await (0,request/* default */.A)(A+"/applyEdits",q)}if(!i.capabilities.operations?.supportsEditing&&i.effectiveCapabilities?.operations?.supportsEditing){const e=kernel.id?.findCredential(i.url);await(e?.refreshToken())}return this._createEditsResult(F)}async deleteAttachments(e,t){await this.load();const{layer:r}=this;await (0,featureLayerUtils/* ensureLayerCredential */.VA)(r,"editing");const a=e.attributes[r.objectIdField],i=r.parsedUrl.path+"/"+a+"/deleteAttachments";try{return(await (0,request/* default */.A)(i,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(g)}catch(o){throw this._createAttachmentErrorResult(a,o)}}fetchRecomputedExtents(e={}){const t=e.signal;return this.load({signal:t}).then((async()=>{const t=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:a,url:i}=this.layer,{data:o}=await (0,request/* default */.A)(`${i}/${a}`,t),{id:n,extent:u,fullExtent:l,timeExtent:c}=o,d=u||l;return{id:n,fullExtent:d&&Extent/* default */.A.fromJSON(d),timeExtent:c&&TimeExtent/* default */.A.fromJSON({start:c[0],end:c[1]})}}))}async queryAttachments(e,t={}){await this.load();const s=this._getLayerRequestOptions(t);return this.queryTask.executeAttachmentQuery(e,s)}async queryFeatures(e,t){await this.load();const s=await this.queryTask.execute(e,{...t,query:this._createRequestQueryOptions(t)});return e.outStatistics?.length&&s.features.length&&s.features.forEach((t=>{const s=t.attributes;e.outStatistics?.forEach((({outStatisticFieldName:e})=>{if(e){const t=e.toLowerCase();t&&t in s&&e!==t&&(s[e]=s[t],delete s[t])}}))})),s}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:this._createRequestQueryOptions(t)})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopFeatures(e,t){return await this.load(),this.queryTask.executeTopFeaturesQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopObjectIds(e,t){return await this.load(),this.queryTask.executeForTopIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopExtents(e,t){return await this.load(),this.queryTask.executeForTopExtents(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopCount(e,t){return await this.load(),this.queryTask.executeForTopCount(e,{...t,query:this._createRequestQueryOptions(t)})}async fetchPublishingStatus(){if(!(0,arcgisLayerUrl/* isHostedAgolService */.Wo)(this.layer.url))return"unavailable";const e=(0,urlUtils/* join */.fj)(this.layer.url,"status"),t=await (0,request/* default */.A)(e,{query:{f:"json"}});return D.fromJSON(t.data.status)}async uploadAssets(e,t){const{uploadAssets:s}=await __webpack_require__.e(/* import() */ 4075).then(__webpack_require__.bind(__webpack_require__, 24075));return s(e,{layer:this.layer,ongoingUploads:this._ongoingAssetUploads},t)}async _asyncApplyEdits(e,t){const r=(await (0,request/* default */.A)(e,t)).data.statusUrl;for(;;){const e=(await (0,request/* default */.A)(r,{query:{f:"json"},responseType:"json"})).data;switch(e.status){case"Completed":return (0,request/* default */.A)(e.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new Error/* default */.A("async-applyEdits-failed","asynchronous applyEdits call failed.");case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new Error/* default */.A("async-applyEdits-failed","asynchronous applyEdits call failed (undefined response status)")}await (0,promiseUtils/* after */.Pl)(V)}}_createRequestQueryOptions(e){const t={...this.layer.customParameters,token:this.layer.apiKey,...e?.query};return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t}async _fetchService(e,t){if(!e){const r={};(0,has/* default */.A)("featurelayer-advanced-symbols")&&(r.returnAdvancedSymbols=!0),t?.cacheBust&&(r._ts=Date.now());const{data:a}=await (0,request/* default */.A)(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:r,signal:t?.signal}));e=a}this.sourceJSON=await this._patchServiceJSON(e,t?.signal);const r=e.type;if(!Q.has(r))throw new Error/* default */.A("feature-layer-source:unsupported-type",`Source type "${r}" is not supported`)}async _patchServiceJSON(e,t){if("Table"!==e.type&&e.geometryType&&!e?.drawingInfo?.renderer&&!e.defaultSymbol){const t=(0,clientSideDefaults/* createDrawingInfo */.F0)(e.geometryType).renderer;(0,object/* setDeepValue */.sM)("drawingInfo.renderer",t,e)}if("esriGeometryMultiPatch"===e.geometryType&&e.infoFor3D&&(e.geometryType="mesh"),null==e.extent)try{const{data:r}=await (0,request/* default */.A)(this.layer.url,this._getLayerRequestOptions({signal:t}));r.spatialReference&&(e.extent={xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:r.spatialReference})}catch(r){(0,promiseUtils/* throwIfAbortError */.QP)(r)}return e}async _ensureLatestMetadata(e){if(this.layer.userHasUpdateItemPrivileges&&this.sourceJSON.cacheMaxAge>0)return this._fetchService(null,{...e,cacheBust:!0})}async _uploadMeshesAndGetAssetMapEditsJSON(e){const{addAssetFeatures:t}=e;if(!t?.length)return null;const s=await this._filterRedundantAssetMaps(t);if(!t?.length)return null;const r=new Array,a=new Map;for(const i of s){const{geometry:e}=i,{vertexSpace:t}=e;if(t.isRelative)r.push(e);else{const t=n(e);a.set(t,e),i.geometry=t,r.push(t)}}await this.uploadAssets(r);for(const[i,o]of a)o.addExternalSources(i.metadata.externalSources.items);return{adds:this._getAssetMapEditsJSON(s),updates:[],deletes:[]}}_getAssetMapEditsJSON(e){const t=new Array,s=this.layer.globalIdField,r=this.layer.parsedUrl;for(const a of e){const e=a.geometry,{metadata:i}=e,o=i.getExternalSourcesOnService(r),n=a.getAttribute(s);if(0===o.length){Logger/* default */.A.getLogger(this).error(`Skipping feature ${n}. The mesh it is associated with has not been uploaded to the service and cannot be mapped to it.`);continue}const{source:l}=o.find(External/* isOriginalExternal */.dK)??o[0],{vertexSpace:c}=e,d=c.isGeoreferenced?["PROJECT_VERTICES"]:[];for(const s of l)1===s.parts.length?t.push({globalId:(0,uuid/* generateBracedUUID */.yS)(),parentGlobalId:n,assetName:s.assetName,assetHash:s.parts[0].partHash,flags:d}):Logger/* default */.A.getLogger(this).error(`Skipping asset ${s.assetName}. It does not have exactly one part, so we cannot map it to a feature.`)}return t}_createEditsResult(e){const t=e.data,{layerId:s}=this.layer,r=[];let a=null;if(Array.isArray(t))for(const o of t)r.push({id:o.id,editedFeatures:o.editedFeatures}),o.id===s&&(a={addResults:o.addResults??[],updateResults:o.updateResults??[],deleteResults:o.deleteResults??[],attachments:o.attachments,editMoment:o.editMoment});else a=t;const i=f(a);if(r.length>0){i.editedFeatureResults=[];for(const e of r){const{editedFeatures:t}=e,s=t?.spatialReference?new SpatialReference/* default */.A(t.spatialReference):null;i.editedFeatureResults.push({layerId:e.id,editedFeatures:R(t,s)})}}return i}_createAttachmentErrorResult(e,t){const s=t.details.messages?.[0]||t.message,r=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new Error/* default */.A("feature-layer-source:attachment-failure",s,{code:r})}}_getFormDataForAttachment(e,t){const s=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(s)for(const r in t){const e=t[r];null!=e&&(s.set?s.set(r,e):s.append(r,e))}return s}_getLayerRequestOptions(e={}){const{parsedUrl:t,gdbVersion:s,dynamicDataSource:r}=this.layer;return{...e,query:{gdbVersion:s,layer:r?JSON.stringify({source:r}):void 0,...t.query,f:"json",...this._createRequestQueryOptions(e)},responseType:"json"}}async _filterRedundantAssetMaps(e){const{layer:t}=this,{globalIdField:s,infoFor3D:r,parsedUrl:i}=t;if(null==r||null==s)return e;const o=(0,infoFor3D/* getAssetMapTable */.JZ)(r);if(null==o)return e;const n=(0,urlUtils/* join */.fj)(i.path,`../${o.id}`),u=new Array,l=new Array;for(const a of e)a.geometry.metadata.getExternalSourcesOnService(i).length>0?l.push(a):u.push(a);const c=l.map((e=>e.getAttribute(s))).filter(arrayUtils/* isSome */.Ru);if(0===c.length)return e;const{assetMapFieldRoles:{parentGlobalId:d,assetHash:p}}=r,h=new Query/* default */.A;h.where=`${d} IN (${c.map((e=>`'${e}'`))})`,h.outFields=[p,d],h.returnGeometry=!1;const m=await (0,executeQueryJSON/* executeQueryJSON */.s)(n,h),{features:f}=m;return 0===f.length?e:[...u,...l.filter((e=>{const t=e.getAttribute(s);if(!t)return!0;const{metadata:r}=e.geometry,a=f.filter((e=>e.getAttribute(d)===t));if(0===a.length)return!0;const o=a.map((e=>e.getAttribute(p)));return r.getExternalSourcesOnService(i).flatMap((({source:e})=>e.flatMap((e=>e.parts.map((e=>e.partHash)))))).some((e=>o.every((t=>e!==t))))}))]}};(0,tslib_es6._)([(0,property/* property */.MZ)()],P.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],P.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],P.prototype,"queryTask",null),P=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.graphics.sources.FeatureLayerSource")],P);const V=1e3,$=P;


/***/ }),

/***/ 47753:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ x)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(52495);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/infoFor3D.js
var infoFor3D = __webpack_require__(40906);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/source/DataLayerSource.js + 3 modules
var DataLayerSource = __webpack_require__(44360);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/utils.js
var utils = __webpack_require__(11499);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/query/executeForCount.js
var executeForCount = __webpack_require__(60920);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry.js
var geometry = __webpack_require__(17639);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/query/operations/query.js
var query = __webpack_require__(8132);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/Query.js + 1 modules
var Query = __webpack_require__(24587);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(84698);
;// ../node_modules/@arcgis/core/rest/query/executeForExtent.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function m(m,n,s){const p=(0,utils/* parseUrl */.Dl)(m);return (0,query/* executeQueryForExtent */.Jf)(p,Query/* default */.A.from(n),{...s}).then((t=>({count:t.data.count,extent:Extent/* default */.A.fromJSON(t.data.extent)})))}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/query/executeForIds.js
var executeForIds = __webpack_require__(1177);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/query/executeQueryJSON.js
var executeQueryJSON = __webpack_require__(9190);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/query/executeQueryPBF.js + 1 modules
var executeQueryPBF = __webpack_require__(89538);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/FeatureSet.js
var FeatureSet = __webpack_require__(57822);
;// ../node_modules/@arcgis/core/layers/graphics/sources/support/QueryTask.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let F=class extends Accessor/* default */.A{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return (0,urlUtils/* urlToObject */.An)(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){const r=this._normalizeQuery(e),o=null!=e.outStatistics?.[0],s=(0,has/* default */.A)("featurelayer-pbf-statistics"),i=!o||s;let u;if(this.pbfSupported&&i)try{u=await (0,executeQueryPBF/* executeRawQueryPBF */.S)(this.url,r,t)}catch(a){if("query:parsing-pbf"!==a.name)throw a;this.pbfSupported=!1}return this.pbfSupported&&i||(u=await (0,executeQueryJSON/* executeRawQueryJSON */.e)(this.url,r,t)),this._normalizeFields(u.fields),u}async featureSetFromJSON(e,t,r){if(!this._queryIs3DObjectFormat(e)||null==this.infoFor3D||!t.features)return FeatureSet/* default */.A.fromJSON(t);const{meshFeatureSetFromJSON:s}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 4591).then(__webpack_require__.bind(__webpack_require__, 24591)),r);return s(e,this.infoFor3D,t)}executeForCount(e,t){return (0,executeForCount/* executeForCount */.I)(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return m(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return (0,executeForIds/* executeForIds */.V)(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,t){const[{default:r},{executeRelationshipQuery:s}]=await (0,promiseUtils/* whenOrAbort */.qr)(Promise.all([__webpack_require__.e(/* import() */ 7724).then(__webpack_require__.bind(__webpack_require__, 97724)),__webpack_require__.e(/* import() */ 1743).then(__webpack_require__.bind(__webpack_require__, 1743))]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),s(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:r},{executeRelationshipQueryForCount:s}]=await (0,promiseUtils/* whenOrAbort */.qr)(Promise.all([__webpack_require__.e(/* import() */ 7724).then(__webpack_require__.bind(__webpack_require__, 97724)),__webpack_require__.e(/* import() */ 1743).then(__webpack_require__.bind(__webpack_require__, 1743))]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),s(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:r,fetchAttachments:s,processAttachmentQueryResult:i}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 7184).then(__webpack_require__.bind(__webpack_require__, 27184)),t),u=(0,utils/* parseUrl */.Dl)(this.url);return i(u,await(this.queryAttachmentsSupported?r(u,e,t):s(u,e,t)))}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:r}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 2078).then(__webpack_require__.bind(__webpack_require__, 62078)),t);return r(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:r}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 2264).then(__webpack_require__.bind(__webpack_require__, 12264)),t);return r(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:r}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 4747).then(__webpack_require__.bind(__webpack_require__, 4747)),t);return r(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:r}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 8361).then(__webpack_require__.bind(__webpack_require__, 38361)),t);return r(this.parsedUrl,e,t)}_normalizeQuery(e){let t=Query/* default */.A.from(e);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?DataLayerSource/* DataLayerSource */.L.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:o}=this;if(null!=o&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null;const{supportedFormats:s,queryFormats:i}=o,u=(0,infoFor3D/* getMimeTypeFormatId */.R_)("model/gltf-binary",s)??(0,infoFor3D/* getFilenameFormatId */.E1)("glb",s),c=(0,infoFor3D/* getMimeTypeFormatId */.R_)("model/gltf+json",s)??(0,infoFor3D/* getFilenameFormatId */.E1)("gtlf",s);for(const e of i){if(e===u){t.formatOf3DObjects=e;break}e!==c||t.formatOf3DObjects||(t.formatOf3DObjects=e)}if(!t.formatOf3DObjects)throw new Error/* default */.A("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(null==t.outFields||!t.outFields.includes("*")){t=t===e?t.clone():t,null==t.outFields&&(t.outFields=[]);const{originX:r,originY:s,originZ:i,translationX:u,translationY:a,translationZ:n,scaleX:c,scaleY:p,scaleZ:l,rotationX:m,rotationY:y,rotationZ:d,rotationDeg:f}=o.transformFieldRoles;t.outFields.push(r,s,i,u,a,n,c,p,l,m,y,d,f)}}return t}_normalizeFields(e){if(null!=this.fieldsIndex&&null!=e)for(const t of e){const e=this.fieldsIndex.get(t.name);e&&Object.assign(t,e.toJSON())}}_queryIs3DObjectFormat(e){return null!=this.infoFor3D&&!0===e.returnGeometry&&"xyFootprint"!==e.multipatchOption&&!e.outStatistics}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:DataLayerSource/* DataLayerSource */.L})],F.prototype,"dynamicDataSource",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],F.prototype,"fieldsIndex",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],F.prototype,"gdbVersion",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],F.prototype,"infoFor3D",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],F.prototype,"parsedUrl",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],F.prototype,"pbfSupported",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],F.prototype,"queryAttachmentsSupported",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],F.prototype,"sourceSpatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],F.prototype,"url",void 0),F=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.tasks.QueryTask")],F);const x=F;


/***/ }),

/***/ 20061:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F0: () => (/* binding */ o),
/* harmony export */   Vx: () => (/* binding */ i),
/* harmony export */   e2: () => (/* binding */ a),
/* harmony export */   f: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19251);
/* harmony import */ var _data_QueryEngineCapabilities_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22567);
/* harmony import */ var _symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23173);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function o(t){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?_symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_3__/* .defaultPointSymbolJSON */ .Cb:"esriGeometryPolyline"===t?_symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_3__/* .defaultPolylineSymbolJSON */ .yM:_symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_3__/* .defaultPolygonSymbolJSON */ .WR}}}const u=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let n=1;function i(t,s){if((0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("esri-csp-restrictions"))return()=>({[s]:null,...t});try{let e=`this.${s} = null;`;for(const s in t){e+=`this${u.test(s)?`.${s}`:`["${s}"]`} = ${JSON.stringify(t[s])};`}const r=new Function(`\n      return class AttributesClass$${n++} {\n        constructor() {\n          ${e};\n        }\n      }\n    `)();return()=>new r}catch(e){return()=>({[s]:null,...t})}}function a(s={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(s)}}]}function l(t,e){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:e,supportsDelete:e,supportsEditing:e,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:e,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:_data_QueryEngineCapabilities_js__WEBPACK_IMPORTED_MODULE_2__/* .queryCapabilities */ .F,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:e,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}


/***/ }),

/***/ 80323:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function t(n){const o={};for(const e in n){if("declaredClass"===e)continue;const r=n[e];if(null!=r&&"function"!=typeof r)if(Array.isArray(r)){o[e]=[];for(let n=0;n<r.length;n++)o[e][n]=t(r[n])}else"object"==typeof r?r.toJSON&&(o[e]=JSON.stringify(r)):o[e]=r}return o}


/***/ }),

/***/ 60920:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11499);
/* harmony import */ var _operations_query_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8132);
/* harmony import */ var _support_Query_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24587);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function n(n,s,m){const p=(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .parseUrl */ .Dl)(n);return (0,_operations_query_js__WEBPACK_IMPORTED_MODULE_1__/* .executeQueryForCount */ .gW)(p,_support_Query_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.from(s),{...m}).then((o=>o.data.count))}


/***/ }),

/***/ 1177:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11499);
/* harmony import */ var _operations_query_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8132);
/* harmony import */ var _support_Query_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24587);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function s(s,e,m){const n=(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .parseUrl */ .Dl)(s);return (0,_operations_query_js__WEBPACK_IMPORTED_MODULE_1__/* .executeQueryForIds */ .Pk)(n,_support_Query_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.from(e),{...m}).then((o=>o.data.objectIds))}


/***/ }),

/***/ 9190:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ a),
/* harmony export */   s: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11499);
/* harmony import */ var _operations_query_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8132);
/* harmony import */ var _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57822);
/* harmony import */ var _support_Query_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24587);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function s(r,t,e){const s=await a(r,t,e);return _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.fromJSON(s)}async function a(o,s,a){const n=(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .parseUrl */ .Dl)(o),i={...a},p=_support_Query_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.from(s),{data:u}=await (0,_operations_query_js__WEBPACK_IMPORTED_MODULE_1__/* .executeQuery */ .eW)(n,p,p.sourceSpatialReference,i);return u}


/***/ }),

/***/ 89538:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ executeQueryPBF_n)
});

// UNUSED EXPORTS: executeQueryPBF

// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/utils.js
var utils = __webpack_require__(11499);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(6267);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/zscale.js
var zscale = __webpack_require__(8034);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/featureConversionUtils.js
var featureConversionUtils = __webpack_require__(21355);
;// ../node_modules/@arcgis/core/rest/query/operations/pbfJSONFeatureSet.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function pbfJSONFeatureSet_o(e,t){return t}function i(e,t,r,s){switch(r){case 0:return u(e,t+s,0);case 1:return"lowerLeft"===e.originPosition?u(e,t+s,1):d(e,t+s,1)}}function n(e,t,r,s){return 2===r?u(e,t,2):i(e,t,r,s)}function pbfJSONFeatureSet_a(e,t,r,s){return 2===r?u(e,t,3):i(e,t,r,s)}function h(e,t,r,s){return 3===r?u(e,t,3):n(e,t,r,s)}function u({translate:e,scale:t},r,s){return e[s]+r*t[s]}function d({translate:e,scale:t},r,s){return e[s]-r*t[s]}class l{constructor(e){this._options=e,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=pbfJSONFeatureSet_o,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{}}createFeatureResult(){return{fields:[],features:[]}}finishFeatureResult(e){if(this._options.applyTransform&&(e.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!e.hasZ)return;const r=(0,zscale/* getGeometryZScaler */.N)(e.geometryType,this._options.sourceSpatialReference,e.spatialReference);if(null!=r)for(const t of e.features)r(t.geometry)}createSpatialReference(){return{}}addField(t,r){const s=t.fields;(0,maybe/* assertIsSome */.Lw)(s),s.push(r);const o=s.map((e=>e.name));this._attributesConstructor=function(){for(const e of o)this[e]=null}}addFeature(e,t){e.features.push(t)}prepareFeatures(e){switch(this._transform=e.transform,this._options.applyTransform&&e.transform&&(this._applyTransform=this._deriveApplyTransform(e)),this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++,e.geometryType){case"esriGeometryPoint":this.addCoordinate=(e,t,r)=>this.addCoordinatePoint(e,t,r),this.createGeometry=e=>this.createPointGeometry(e);break;case"esriGeometryPolygon":this.addCoordinate=(e,t,r)=>this._addCoordinatePolygon(e,t,r),this.createGeometry=e=>this._createPolygonGeometry(e);break;case"esriGeometryPolyline":this.addCoordinate=(e,t,r)=>this._addCoordinatePolyline(e,t,r),this.createGeometry=e=>this._createPolylineGeometry(e);break;case"esriGeometryMultipoint":this.addCoordinate=(e,t,r)=>this._addCoordinateMultipoint(e,t,r),this.createGeometry=e=>this._createMultipointGeometry(e)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,{attributes:new this._attributesConstructor}}allocateCoordinates(){}addLength(e,t,r){0===this._lengths.length&&(this._toAddInCurrentPath=t),this._lengths.push(t)}addQueryGeometry(e,t){const{queryGeometry:o,queryGeometryType:i}=t,n=(0,featureConversionUtils/* unquantizeOptimizedGeometry */.Ch)(o.clone(),o,!1,!1,this._transform),a=(0,featureConversionUtils/* convertToGeometry */.zv)(n,i,!1,!1);e.queryGeometryType=i,e.queryGeometry={...a}}createPointGeometry(e){const t={x:0,y:0,spatialReference:e.spatialReference};return e.hasZ&&(t.z=0),e.hasM&&(t.m=0),t}addCoordinatePoint(e,t,r){const s=this._transform;switch(t=this._applyTransform(s,t,r,0),r){case 0:e.x=t;break;case 1:e.y=t;break;case 2:"z"in e?e.z=t:e.m=t;break;case 3:e.m=t}}_transformPathLikeValue(e,t){let r=0;t<=1&&(r=this._previousCoordinate[t],this._previousCoordinate[t]+=e);const s=this._transform;return this._applyTransform(s,e,t,r)}_addCoordinatePolyline(e,t,r){this._dehydratedAddPointsCoordinate(e.paths,t,r)}_addCoordinatePolygon(e,t,r){this._dehydratedAddPointsCoordinate(e.rings,t,r)}_addCoordinateMultipoint(e,t,r){0===r&&e.points.push([]);const s=this._transformPathLikeValue(t,r);e.points[e.points.length-1].push(s)}_createPolygonGeometry(e){return{rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createPolylineGeometry(e){return{paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createMultipointGeometry(e){return{points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_dehydratedAddPointsCoordinate(e,t,r){0===r&&0==this._toAddInCurrentPath--&&(e.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const s=this._transformPathLikeValue(t,r),o=e[e.length-1];0===r&&(this._coordinateBufferPtr=0,this._coordinateBuffer=new Array(this._vertexDimension),o.push(this._coordinateBuffer)),this._coordinateBuffer[this._coordinateBufferPtr++]=s}_deriveApplyTransform(e){const{hasZ:t,hasM:r}=e;return t&&r?h:t?n:r?pbfJSONFeatureSet_a:i}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/query/operations/query.js
var query = __webpack_require__(8132);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/FeatureSet.js
var FeatureSet = __webpack_require__(57822);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/Query.js + 1 modules
var Query = __webpack_require__(24587);
;// ../node_modules/@arcgis/core/rest/query/executeQueryPBF.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function s(r,e,t){const s=await executeQueryPBF_n(r,a.from(e),t);return o.fromJSON(s)}async function executeQueryPBF_n(o,s,n){const p=(0,utils/* parseUrl */.Dl)(o),i={...n},u=Query/* default */.A.from(s),m=!u.quantizationParameters,{data:f}=await (0,query/* executeQueryPBF */.IJ)(p,u,new l({sourceSpatialReference:u.sourceSpatialReference,applyTransform:m}),i);return f}


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

/***/ 8132:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IJ: () => (/* binding */ f),
/* harmony export */   Jf: () => (/* binding */ x),
/* harmony export */   Pk: () => (/* binding */ p),
/* harmony export */   eW: () => (/* binding */ c),
/* harmony export */   gW: () => (/* binding */ S),
/* harmony export */   kS: () => (/* binding */ d)
/* harmony export */ });
/* unused harmony exports encodeGeometry, queryToQueryStringParameters, runQuery */
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86394);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20909);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1171);
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65231);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87926);
/* harmony import */ var _operations_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80323);
/* harmony import */ var _pbfQueryUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79305);
/* harmony import */ var _queryZScale_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27604);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const s="Layer does not support extent calculation.";function m(t,e){if(e&&"extent"===t.type)return`${t.xmin},${t.ymin},${t.xmax},${t.ymax}`;if(e&&"point"===t.type)return`${t.x},${t.y}`;const n=t.toJSON();return delete n.spatialReference,JSON.stringify(n)}function y(t,e){const n=t.geometry,i=t.toJSON();delete i.compactGeometryEnabled,delete i.defaultSpatialReferenceEnabled;const o=i;let u,l,s;if(null!=n&&(l=n.spatialReference,s=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .srToRESTValue */ .YX)(l),o.geometryType=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getJsonType */ .$B)(n),o.geometry=m(n,t.compactGeometryEnabled),o.inSR=s),i.groupByFieldsForStatistics&&(o.groupByFieldsForStatistics=i.groupByFieldsForStatistics.join(",")),i.objectIds&&(o.objectIds=i.objectIds.join(",")),i.orderByFields&&(o.orderByFields=i.orderByFields.join(",")),!i.outFields||!i.returnDistinctValues&&(e?.returnCountOnly||e?.returnExtentOnly||e?.returnIdsOnly)?delete o.outFields:i.outFields.includes("*")?o.outFields="*":o.outFields=i.outFields.join(","),i.outSR?(o.outSR=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .srToRESTValue */ .YX)(i.outSR),u=t.outSpatialReference):n&&(i.returnGeometry||i.returnCentroid)&&(o.outSR=o.inSR,u=l),i.returnGeometry&&delete i.returnGeometry,i.outStatistics&&(o.outStatistics=JSON.stringify(i.outStatistics)),i.fullText&&(o.fullText=JSON.stringify(i.fullText)),i.pixelSize&&(o.pixelSize=JSON.stringify(i.pixelSize)),i.quantizationParameters&&(t.defaultSpatialReferenceEnabled&&null!=l&&null!=t.quantizationParameters?.extent&&l.equals(t.quantizationParameters.extent.spatialReference)&&delete i.quantizationParameters.extent.spatialReference,o.quantizationParameters=JSON.stringify(i.quantizationParameters)),i.parameterValues&&(o.parameterValues=JSON.stringify(i.parameterValues)),i.rangeValues&&(o.rangeValues=JSON.stringify(i.rangeValues)),i.dynamicDataSource&&(o.layer=JSON.stringify({source:i.dynamicDataSource}),delete i.dynamicDataSource),i.timeExtent){const t=i.timeExtent,{start:e,end:n}=t;null==e&&null==n||(o.time=e===n?e:`${e??"null"},${n??"null"}`),delete i.timeExtent}return t.defaultSpatialReferenceEnabled&&null!=l&&null!=u&&l.equals(u)&&(o.defaultSR=o.inSR,delete o.inSR,delete o.outSR),o}async function c(t,e,n,r){const i=null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{features:[]}}:await E(t,e,"json",r);return (0,_queryZScale_js__WEBPACK_IMPORTED_MODULE_6__/* .applyFeatureSetZUnitScaling */ .q)(e,n,i.data),i}async function f(t,e,n,r){if(null!=e.timeExtent&&e.timeExtent.isEmpty)return{data:n.createFeatureResult()};const i=await d(t,e,r),a=i;return a.data=(0,_pbfQueryUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .parsePBFFeatureQuery */ .m)(i.data,n),a}function d(t,e,n){return E(t,e,"pbf",n)}function p(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):E(t,e,"json",n,{returnIdsOnly:!0})}function S(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):E(t,e,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}async function x(t,e,n){if(null!=e.timeExtent&&e.timeExtent.isEmpty)return{data:{count:0,extent:null}};const r=await E(t,e,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}),i=r.data;if(i.hasOwnProperty("extent"))return r;if(i.features)throw new Error(s);if(i.hasOwnProperty("count"))throw new Error(s);return r}async function E(r,a,u,l={},s={}){const m="string"==typeof r?(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .urlToObject */ .An)(r):r,c=a.geometry?[a.geometry]:[],f=await (0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .normalizeCentralMeridian */ .el)(c,null,{signal:l.signal}),d=f?.[0];null!=d&&((a=a.clone()).geometry=d);const p=(0,_operations_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .mapParameters */ .z)({...m.query,f:u,...s,...y(a,s)});return (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .join */ .fj)(m.path,g(a,s)?"query3d":"query"),{...l,responseType:"pbf"===u?"array-buffer":"json",query:{...p,...l.query}})}function g(t,e){return null!=t.formatOf3DObjects&&!(e.returnCountOnly||e.returnExtentOnly||e.returnIdsOnly)}


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


/***/ })

};
;