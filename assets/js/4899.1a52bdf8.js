"use strict";
exports.id = 4899;
exports.ids = [4899];
exports.modules = {

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

/***/ 90166:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ns: () => (/* binding */ y),
/* harmony export */   jh: () => (/* binding */ t),
/* harmony export */   l5: () => (/* binding */ a),
/* harmony export */   s: () => (/* binding */ o),
/* harmony export */   xm: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86942);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function t(n,t=!1){return n<=_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9?t?new Array(n).fill(0):new Array(n):new Float64Array(n)}function e(t){return((0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .cy)(t)?t.length:t.byteLength/8)<=_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9?Array.from(t):new Float64Array(t)}function a(r,n,t){return Array.isArray(r)?r.slice(n,n+t):r.subarray(n,n+t)}function o(r,n){for(let t=0;t<n.length;++t)r[t]=n[t];return r}function y(r){return Array.isArray(r)?new Float64Array(r):r}


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

/***/ 99218:
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
let n=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* .ClonableMixin */ .O)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY)){constructor(o){super(o),this.type="local",this.isRelative=!0,this.isGeoreferenced=!1,this.origin=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__.c)()}getOriginPoint(o){const[r,e,s]=this.origin;return new _Point_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A({x:r,y:e,z:s,spatialReference:o})}setOriginFromPoint({x:o,y:r,z:e}){this.origin=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__.f)(o,r,e??0)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__/* .enumeration */ .e)({local:"local"},{readOnly:!0})],n.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],n.prototype,"origin",void 0),n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.geometry.support.MeshLocalVertexSpace")],n);const m=n;


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

/***/ 14899:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  destroyContext: () => (/* binding */ b),
  dracoDecompressPointCloudData: () => (/* binding */ c),
  filterObbsForModifications: () => (/* binding */ u),
  filterObbsForModificationsSync: () => (/* binding */ L),
  initialize: () => (/* binding */ I),
  interpretObbModificationResults: () => (/* binding */ A),
  process: () => (/* binding */ l),
  project: () => (/* binding */ p),
  setLegacySchema: () => (/* binding */ y),
  setModifications: () => (/* binding */ m),
  setModificationsSync: () => (/* binding */ E),
  test: () => (/* binding */ M),
  transformNormals: () => (/* binding */ SceneLayerWorker_d)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/DoubleArray.js
var DoubleArray = __webpack_require__(90166);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/MeshGeoreferencedRelativeVertexSpace.js
var MeshGeoreferencedRelativeVertexSpace = __webpack_require__(29317);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/MeshLocalVertexSpace.js
var MeshLocalVertexSpace = __webpack_require__(99218);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(24121);
;// ../node_modules/@arcgis/core/libs/i3s/enums.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var enums_n,e;!function(n){n[n.None=0]="None",n[n.Int16=1]="Int16",n[n.Int32=2]="Int32"}(enums_n||(enums_n={})),function(n){n[n.Replace=0]="Replace",n[n.Outside=1]="Outside",n[n.Inside=2]="Inside",n[n.Finished=3]="Finished"}(e||(e={}));

// EXTERNAL MODULE: ../node_modules/@arcgis/core/assets.js
var assets = __webpack_require__(99050);
;// ../node_modules/@arcgis/core/libs/i3s/I3SModule.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function I3SModule_e(){return n||(n=new Promise((t=>__webpack_require__.e(/* import() */ 3983).then(__webpack_require__.bind(__webpack_require__, 13983)).then((t=>t.i)).then((({default:e})=>{const n=e({locateFile:i,onRuntimeInitialized:()=>t(n)});delete n.then})))).catch((t=>{throw t}))),n}function i(e){return (0,assets/* getAssetUrl */.s)(`esri/libs/i3s/${e}`)}let n;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/sphere.js
var sphere = __webpack_require__(96245);
;// ../node_modules/@arcgis/core/views/3d/layers/i3s/I3SNode.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class I3SNode_i{constructor(i,t){this.id=i,this.mbs=t,this.renderMbs=(0,sphere.f)(0,0,0,-1),this.elevationRangeMin=NaN,this.elevationRangeMax=NaN}invalidateElevationRange(){this.elevationRangeMin=NaN}}var t,I3SNode_n,o,a,s;!function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"}(t||(t={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(I3SNode_n||(I3SNode_n={}));class h extends I3SNode_i{constructor(e,i,t,a,s,h,d,c,r,l){super(e,t),this.index=i,this.childCount=a,this.level=s,this.resources=h,this.version=d,this.lodMetric=c,this.maxError=r,this.numFeatures=l,this.failed=!1,this.cacheState=o.Unknown,this.vertexCount=0,this.memory=0,this.childrenLoaded=0,this.hasModifications=!1,this.imModificationImpact=I3SNode_n.NotChecked}}!function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"}(o||(o={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(a||(a={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(s||(s={}));class d{constructor(e,i,t,n){this.nodeHasLOD=e,this.isChosen=i,this.lodLevel=t,this.version=n}}

;// ../node_modules/@arcgis/core/views/3d/layers/SceneLayerWorker.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function l(e){g=await j();const r=[e.geometryBuffer];return{result:w(g,e,r),transferList:r}}async function c(e){g=await j();const r=[e.geometryBuffer],{geometryBuffer:t}=e,o=t.byteLength,n=g._malloc(o),s=new Uint8Array(g.HEAPU8.buffer,n,o);s.set(new Uint8Array(t));const i=g.dracoDecompressPointCloudData(n,s.byteLength);if(g._free(n),i.error.length>0)throw new Error(`i3s.wasm: ${i.error}`);const a=i.featureIds?.length>0?i.featureIds.slice():null,f=i.positions.slice();return a&&r.push(a.buffer),r.push(f.buffer),{result:{positions:f,featureIds:a},transferList:r}}async function u(e){await j(),L(e);const r={buffer:e.buffer};return{result:r,transferList:[r.buffer]}}async function m(e){await j(),E(e)}async function y(e){g=await j(),g.setLegacySchema(e.context,e.jsonSchema)}async function p(n){const{localMatrix:s,origin:i,positions:a,vertexSpace:f,localMode:l}=n,c=SpatialReference/* default */.A.fromJSON(n.inSpatialReference),u=SpatialReference/* default */.A.fromJSON(n.outSpatialReference);let m;if("georeferenced"===f.type){const[{projectBuffer:e},{initializeProjection:r}]=await Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 84119)),Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 97303))]);await r(c,u),m=new Float64Array(a.length),e(a,c,0,m,u,0,m.length/3)}else{const e="georeferencedRelative"===f.type?MeshGeoreferencedRelativeVertexSpace/* default */.A.fromJSON(f):MeshLocalVertexSpace/* default */.A.fromJSON(f),{project:n}=await __webpack_require__.e(/* import() */ 7519).then(__webpack_require__.bind(__webpack_require__, 97519));m=(0,DoubleArray/* toFloat64Array */.Ns)(n({positions:a,transform:s?{localMatrix:s}:void 0,vertexSpace:e,inSpatialReference:c,outSpatialReference:u,localMode:l}))}const y=m.length,[p,d,b]=i;for(let e=0;e<y;e+=3)m[e]-=p,m[e+1]-=d,m[e+2]-=b;return{result:{projected:m,original:a},transferList:[m.buffer,a.buffer]}}async function SceneLayerWorker_d({normalMatrix:e,normals:r}){const t=new Float32Array(r.length);return (0,vec32.a)(t,r,e),(0,vec32.n)(t,t),{result:{transformed:t,original:r},transferList:[t.buffer,r.buffer]}}function b(e){S(e)}let SceneLayerWorker_h,g;function E(e){if(!g)return;const r=e.modifications,t=g._malloc(8*r.length),o=new Float64Array(g.HEAPU8.buffer,t,r.length);for(let n=0;n<r.length;++n)o[n]=r[n];g.setModifications(e.context,t,r.length,e.isGeodetic),g._free(t)}function w(e,r,t){const{context:o,localOrigin:n,globalTrafo:s,mbs:a,obb:f,elevationOffset:l,geometryBuffer:c,geometryDescriptor:u,indexToVertexProjector:m,vertexToRenderProjector:y}=r,p=e._malloc(c.byteLength),d=33,b=e._malloc(d*Float64Array.BYTES_PER_ELEMENT),h=new Uint8Array(e.HEAPU8.buffer,p,c.byteLength);h.set(new Uint8Array(c));const g=new Float64Array(e.HEAPU8.buffer,b,d);_(g,n);let E=g.byteOffset+3*g.BYTES_PER_ELEMENT,w=new Float64Array(g.buffer,E);_(w,s),E+=16*g.BYTES_PER_ELEMENT,w=new Float64Array(g.buffer,E),_(w,a),E+=4*g.BYTES_PER_ELEMENT,null!=f&&(w=new Float64Array(g.buffer,E),_(w,f.center),E+=3*g.BYTES_PER_ELEMENT,w=new Float64Array(g.buffer,E),_(w,f.halfSize),E+=3*g.BYTES_PER_ELEMENT,w=new Float64Array(g.buffer,E),_(w,f.quaternion));const A=u,L={isDraco:!1,isLegacy:!1,color:r.layouts.some((e=>e.some((e=>"color"===e.name)))),normal:r.needNormals&&r.layouts.some((e=>e.some((e=>"normalCompressed"===e.name)))),uv0:r.layouts.some((e=>e.some((e=>"uv0"===e.name)))),uvRegion:r.layouts.some((e=>e.some((e=>"uvRegion"===e.name)))),featureIndex:A.featureIndex},S=e.process(o,!!r.obb,p,h.byteLength,A,L,b,l,m,y,r.normalReferenceFrame);if(e._free(b),e._free(p),S.error.length>0)throw new Error(`i3s.wasm: ${S.error}`);if(S.discarded)return null;const I=S.componentOffsets.length>0?S.componentOffsets.slice():null,j=S.featureIds.length>0?S.featureIds.slice():null,M=S.anchorIds.length>0?Array.from(S.anchorIds):null,P=S.anchors.length>0?Array.from(S.anchors):null,T=S.interleavedVertedData.slice().buffer,x=S.indicesType===enums_n.Int16?new Uint16Array(S.indices.buffer,S.indices.byteOffset,S.indices.byteLength/2).slice():new Uint32Array(S.indices.buffer,S.indices.byteOffset,S.indices.byteLength/4).slice(),R=S.positions.slice(),U=S.positionIndicesType===enums_n.Int16?new Uint16Array(S.positionIndices.buffer,S.positionIndices.byteOffset,S.positionIndices.byteLength/2).slice():new Uint32Array(S.positionIndices.buffer,S.positionIndices.byteOffset,S.positionIndices.byteLength/4).slice(),v={layout:r.layouts[0],interleavedVertexData:T,indices:x,hasColors:S.hasColors,hasModifications:S.hasModifications,positionData:{data:R,indices:U}};return j&&t.push(j.buffer),I&&t.push(I.buffer),t.push(T),t.push(x.buffer),t.push(R.buffer),t.push(U.buffer),{componentOffsets:I,featureIds:j,anchorIds:M,anchors:P,transformedGeometry:v,obb:S.obb}}function A(e){return 0===e?I3SNode_n.Unmodified:1===e?I3SNode_n.PotentiallyModified:2===e?I3SNode_n.Culled:I3SNode_n.Unknown}function L(e){if(!g)return;const{context:r,buffer:t}=e,o=g._malloc(t.byteLength),n=t.byteLength/Float64Array.BYTES_PER_ELEMENT,s=new Float64Array(g.HEAPU8.buffer,o,n),i=new Float64Array(t);s.set(i),g.filterOBBs(r,o,n),i.set(s),g._free(o)}function S(e){g&&0===g.destroy(e)&&(g=null)}function _(e,r){for(let t=0;t<r.length;++t)e[t]=r[t]}async function I(){g||await j()}function j(){return g?Promise.resolve(g):(SceneLayerWorker_h||(SceneLayerWorker_h=I3SModule_e().then((e=>(g=e,SceneLayerWorker_h=null,g)))),SceneLayerWorker_h)}const M={transform:(e,r)=>g&&w(g,e,r),destroy:S};


/***/ })

};
;