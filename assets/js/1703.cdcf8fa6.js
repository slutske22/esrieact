"use strict";
exports.id = 1703;
exports.ids = [1703];
exports.modules = {

/***/ 21839:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ a),
/* harmony export */   b: () => (/* binding */ n),
/* harmony export */   c: () => (/* binding */ f),
/* harmony export */   d: () => (/* binding */ e),
/* harmony export */   e: () => (/* binding */ s),
/* harmony export */   f: () => (/* binding */ l),
/* harmony export */   l: () => (/* binding */ u),
/* harmony export */   n: () => (/* binding */ d),
/* harmony export */   t: () => (/* binding */ r)
/* harmony export */ });
/* unused harmony exports g, h, s, v */
/* harmony import */ var _colorUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31415);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(539);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(t,e,f){r(t.typedBuffer,e.typedBuffer,f,t.typedBufferStride,e.typedBufferStride)}function r(t,e,r,f=3,n=f){if(t.length/f!==Math.ceil(e.length/n))return t;const o=t.length/f,i=r[0],u=r[1],l=r[2],a=r[4],s=r[5],d=r[6],c=r[8],p=r[9],h=r[10],y=r[12],B=r[13],g=r[14];let S=0,m=0;for(let M=0;M<o;M++){const r=e[S],o=e[S+1],M=e[S+2];t[m]=i*r+a*o+c*M+y,t[m+1]=u*r+s*o+p*M+B,t[m+2]=l*r+d*o+h*M+g,S+=n,m+=f}return t}function f(t,e,r){n(t.typedBuffer,e.typedBuffer,r,t.typedBufferStride,e.typedBufferStride)}function n(t,e,r,f=3,n=f){if(t.length/f!==Math.ceil(e.length/n))return;const o=t.length/f,i=r[0],u=r[1],l=r[2],a=r[3],s=r[4],d=r[5],c=r[6],p=r[7],h=r[8];let y=0,B=0;for(let g=0;g<o;g++){const r=e[y],o=e[y+1],g=e[y+2];t[B]=i*r+a*o+c*g,t[B+1]=u*r+s*o+p*g,t[B+2]=l*r+d*o+h*g,y+=n,B+=f}}function o(t,e,r){i(t.typedBuffer,e.typedBuffer,r,t.typedBufferStride,e.typedBufferStride)}function i(t,e,r,f=3,n=f){const o=Math.min(t.length/f,e.length/n);let i=0,u=0;for(let l=0;l<o;l++)t[u]=r*e[i],t[u+1]=r*e[i+1],t[u+2]=r*e[i+2],i+=n,u+=f;return t}function u(t,e,r,f){l(t.typedBuffer,e.typedBuffer,r,f,t.typedBufferStride,e.typedBufferStride)}function l(e,r,f,n,o=3,i=o){const u=Math.min(e.length/o,r.length/i);let l=0,a=0;const s=1/_colorUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .colorGamma */ .Tf;for(let t=0;t<u;t++)e[a]=n*(f*r[l])**s,e[a+1]=n*(f*r[l+1])**s,e[a+2]=n*(f*r[l+2])**s,l+=i,a+=o}function a(t,e,r,f=3,n=f){const o=t.length/f;if(o!==Math.ceil(e.length/n))return t;let i=0,u=0;for(let l=0;l<o;l++)t[u]=e[i]+r[0],t[u+1]=e[i+1]+r[1],t[u+2]=e[i+2]+r[2],i+=n,u+=f;return t}function s(t,e){d(t.typedBuffer,e.typedBuffer,t.typedBufferStride,e.typedBufferStride)}function d(t,e,r=3,f=r){const n=Math.min(t.length/r,e.length/f);let o=0,i=0;for(let u=0;u<n;u++){const n=e[o],u=e[o+1],l=e[o+2],a=n*n+u*u+l*l;if(a>0){const e=1/Math.sqrt(a);t[i]=e*n,t[i+1]=e*u,t[i+2]=e*l}o+=f,i+=r}}function c(t,e,r){const f=Math.min(t.count,e.count),n=t.typedBuffer,o=t.typedBufferStride,i=e.typedBuffer,u=e.typedBufferStride;let l=0,a=0;for(let s=0;s<f;s++)n[a]=i[l]>>r,n[a+1]=i[l+1]>>r,n[a+2]=i[l+2]>>r,l+=u,a+=o}const p=Object.freeze(Object.defineProperty({__proto__:null,linearToSRGB:l,linearToSRGBView:u,normalize:d,normalizeView:s,scale:i,scaleView:o,shiftRight:c,transformMat3:n,transformMat3View:f,transformMat4:r,transformMat4View:e,translate:a},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 83055:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85569);
/* harmony import */ var _handleUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20464);
/* harmony import */ var _Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(539);
/* harmony import */ var _promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40189);
/* harmony import */ var _workers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90752);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class h{constructor(e,t,r,h,o={}){this._mainMethod=t,this._transferLists=r,this._listeners=[],this._promise=(0,_workers_js__WEBPACK_IMPORTED_MODULE_4__/* .open */ .ho)(e,{...o,schedule:h}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,o.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>_Logger_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.getLogger("esri.core.workers.WorkerHandle").error(`Failed to initialize ${e} worker: ${t}`)))}on(s,r){const i={removed:!1,eventName:s,callback:r,threadHandle:null};return this._listeners.push(i),this._connectListener(i),(0,_handleUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .makeHandle */ .hA)((()=>{i.removed=!0,(0,_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .remove */ .TF)(this._listeners,i),this._thread&&null!=i.threadHandle&&i.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null,this._listeners.length=0,this._transferLists={}}invoke(e,t,s){return this.invokeMethod(this._mainMethod,e,t,s)}invokeMethod(e,t,s,i){if(this._thread){const r=this._transferLists[e],h=r?r(t):[];return this._thread.invoke(e,t,{transferList:h,signal:s,priority:i})}return this._promise?this._promise.then((()=>((0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .throwIfAborted */ .Te)(s),this.invokeMethod(e,t,s)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}


/***/ }),

/***/ 97557:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24793);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var c;let i=class extends(_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.ClonableMixin(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)){static{c=this}constructor(e){super(e),this.type="georeferenced",this.origin=null}static{this.absolute=new c}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__/* .enumeration */ .e)({georeferenced:"georeferenced"},{readOnly:!0})],i.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[Number],nonNullable:!1,json:{write:!0}})],i.prototype,"origin",void 0),i=c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.geometry.support.MeshGeoreferencedVertexSpace")],i);


/***/ }),

/***/ 99218:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24793);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63863);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58359);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let i=class extends(_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.ClonableMixin(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)){constructor(o){super(o),this.type="local",this.origin=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__/* .create */ .vt)()}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__/* .enumeration */ .e)({local:"local"},{readOnly:!0})],i.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],i.prototype,"origin",void 0),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.geometry.support.MeshLocalVertexSpace")],i);


/***/ }),

/***/ 91703:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  destroyContext: () => (/* binding */ g),
  dracoDecompressPointCloudData: () => (/* binding */ m),
  filterObbsForModifications: () => (/* binding */ y),
  filterObbsForModificationsSync: () => (/* binding */ S),
  initialize: () => (/* binding */ P),
  interpretObbModificationResults: () => (/* binding */ L),
  process: () => (/* binding */ SceneLayerWorker_u),
  project: () => (/* binding */ SceneLayerWorker_h),
  setLegacySchema: () => (/* binding */ SceneLayerWorker_d),
  setModifications: () => (/* binding */ p),
  setModificationsSync: () => (/* binding */ j),
  test: () => (/* binding */ M),
  transformNormals: () => (/* binding */ b)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(92504);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/MeshGeoreferencedVertexSpace.js
var MeshGeoreferencedVertexSpace = __webpack_require__(97557);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/MeshLocalVertexSpace.js
var MeshLocalVertexSpace = __webpack_require__(99218);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3.js
var vec3 = __webpack_require__(21839);
;// ../node_modules/@arcgis/core/libs/i3s/enums.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var enums_n,enums_e;!function(n){n[n.None=0]="None",n[n.Int16=1]="Int16",n[n.Int32=2]="Int32"}(enums_n||(enums_n={})),function(n){n[n.Replace=0]="Replace",n[n.Outside=1]="Outside",n[n.Inside=2]="Inside",n[n.Finished=3]="Finished"}(enums_e||(enums_e={}));

// EXTERNAL MODULE: ../node_modules/@arcgis/core/assets.js
var assets = __webpack_require__(99050);
;// ../node_modules/@arcgis/core/libs/i3s/I3SModule.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(){return n||(n=new Promise((t=>__webpack_require__.e(/* import() */ 3983).then(__webpack_require__.bind(__webpack_require__, 13983)).then((t=>t.i)).then((({default:e})=>{const n=e({locateFile:i,onRuntimeInitialized:()=>t(n)});delete n.then})))).catch((t=>{throw t}))),n}function i(e){return (0,assets/* getAssetUrl */.s)(`esri/libs/i3s/${e}`)}let n;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/PooledArray.js + 1 modules
var PooledArray = __webpack_require__(63678);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(58359);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/workers/WorkerHandle.js
var WorkerHandle = __webpack_require__(83055);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projectionUtils.js + 2 modules
var projectionUtils = __webpack_require__(68490);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projection/projectVectorToVector.js
var projectVectorToVector = __webpack_require__(42120);
;// ../node_modules/@arcgis/core/views/3d/layers/I3SMeshWorkerHandle.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class I3SMeshWorkerHandle_n{constructor(s,e,t,o,r,i){this.layout=s,this.interleavedVertexData=e,this.indices=t,this.hasColors=o,this.hasModifications=r,this.positionData=i}}class I3SMeshWorkerHandle_p{constructor(s,e,t,o,r,i,h){this.componentOffsets=s,this.featureIds=e,this.anchorIds=t,this.anchors=o,this.transformedGeometry=r,this.globalTrafo=i,this.obb=h}}class a extends WorkerHandle/* WorkerHandle */.B{constructor(s){super("SceneLayerWorker","process",{process:s=>[s.geometryBuffer],project:s=>[s.positions.buffer],transformNormals:s=>[s.normals.buffer]},s,{hasInitialize:!0})}setModifications(s,e,t,o){const r={context:s,modifications:f(e,t,o),isGeodetic:o.isGeographic};this.broadcast(r,"setModifications")}setLegacySchema(s,e){const t=JSON.stringify(e);return this.broadcast({context:s,jsonSchema:t},"setLegacySchema")}destroyContext(s){return this.broadcast(s,"destroyContext")}project(s,e){return this.invokeMethod("project",s,e)}transformNormals(s,e){return this.invokeMethod("transformNormals",s,e)}}const u=new PooledArray/* default */.A({deallocator:null}),c=(0,vec3f64/* create */.vt)();function f(e,t,o){u.clear();let n=1/0,p=1/0,a=-1/0,f=-1/0,l=!1;for(const d of t){const e="clip"===d.type?enums_e.Inside:"mask"===d.type?enums_e.Outside:enums_e.Replace,t=d.geometry;let m=s=>s;if(t.spatialReference){if(!(0,projectionUtils.canProjectWithoutEngine)(t.spatialReference,o)){Logger/* default */.A.getLogger("esri.views.3d.layers.I3SMeshWorkerHandle").warn("Can't project modification polygon into layer spatial reference, ignoring modification");continue}m=s=>((0,projectVectorToVector/* projectVectorToVector */.F)(s,t.spatialReference,c,o),c)}else t.hasZ||(c[2]=0,m=s=>(c[0]=s[0],c[1]=s[1],c));l=l||e===enums_e.Outside,u.push(e),u.push(t.rings.length);for(const s of t.rings){u.push(s.length);for(const e of s){const s=m(e);u.push(s[0]),u.push(s[1]),u.push(s[2]),n=Math.min(n,s[0]),p=Math.min(p,s[1]),a=Math.max(a,s[0]),f=Math.max(f,s[1])}}}if(null!=e)if(l){const s=1e-4;u.push(enums_e.Inside),u.push(2),u.push(4),u.push(n-s),u.push(p-s),u.push(0),u.push(a+s),u.push(p-s),u.push(0),u.push(a+s),u.push(f+s),u.push(0),u.push(n-s),u.push(f+s),u.push(0),u.push(4),u.push(e[0]),u.push(e[1]),u.push(0),u.push(e[2]),u.push(e[1]),u.push(0),u.push(e[2]),u.push(e[3]),u.push(0),u.push(e[0]),u.push(e[3]),u.push(0)}else u.push(enums_e.Outside),u.push(1),u.push(4),u.push(e[0]),u.push(e[1]),u.push(0),u.push(e[2]),u.push(e[1]),u.push(0),u.push(e[2]),u.push(e[3]),u.push(0),u.push(e[0]),u.push(e[3]),u.push(0);u.push(enums_e.Finished);const m=new Float64Array(u.length);for(let s=0;s<u.length;++s)m[s]=u.at(s);return m}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js
var vec4f64 = __webpack_require__(28152);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/sphere.js + 1 modules
var sphere = __webpack_require__(31803);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/i3s/I3SUtil.js + 1 modules
var I3SUtil = __webpack_require__(15976);
;// ../node_modules/@arcgis/core/views/3d/support/ElevationRange.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class ElevationRange_e{constructor(e=1/0,a=-1/0){this.elevationRangeMin=e,this.elevationRangeMax=a}get elevationRangeValid(){return!Number.isNaN(this.elevationRangeMin)}invalidateElevationRange(){this.elevationRangeMin=NaN}expandElevationRangeValues(e,a){this.elevationRangeMin=Math.min(this.elevationRangeMin,e),this.elevationRangeMax=Math.max(this.elevationRangeMax,a)}expandElevationRange(e){this.elevationRangeMin=Math.min(this.elevationRangeMin,e.elevationRangeMin),this.elevationRangeMax=Math.max(this.elevationRangeMax,e.elevationRangeMax)}setElevationRange(e){this.elevationRangeMin=e.elevationRangeMin,this.elevationRangeMax=e.elevationRangeMax}}

;// ../node_modules/@arcgis/core/views/3d/layers/i3s/I3SNode.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class s extends ElevationRange_e{constructor(e,n){super(NaN,NaN),this.id=e,this.serviceMbsInIndexSR=n,this.serviceMbsInRenderSR=(0,sphere.f)(0,0,0,-1)}invalidateServiceBVsInRenderSR(){(0,I3SUtil/* invalidateMbs */.Q7)(this.serviceMbsInRenderSR),this.serviceObbInRenderSR?.invalidate()}shareServiceBVsInRenderSRWith(e){this.serviceObbInRenderSR=e.serviceObbInRenderSR,this.serviceMbsInRenderSR=e.serviceMbsInRenderSR}}var o,r,I3SNode_a,d,I3SNode_c;!function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"}(o||(o={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(r||(r={}));class h extends s{constructor(i,n,t,s,o,d,c,h,l,u){super(i,t),this.index=n,this.childCount=s,this.level=o,this.resources=d,this.version=c,this.lodMetric=h,this.maxError=l,this.numFeatures=u,this.failed=!1,this.cacheState=I3SNode_a.Unknown,this.vertexCount=0,this.memory=0,this.childrenLoaded=0,this.hasModifications=!1,this.imModificationImpact=r.NotChecked,this.elevationAgnosticBoundingVolume=(0,vec4f64/* fromValues */.fA)(0,0,0,-1)}invalidateServiceBVsInRenderSR(){super.invalidateServiceBVsInRenderSR(),this.elevationAgnosticBoundingVolume[3]=-1}}!function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"}(I3SNode_a||(I3SNode_a={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(d||(d={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(I3SNode_c||(I3SNode_c={}));class l{constructor(e,i,n,t){this.nodeHasLOD=e,this.isChosen=i,this.lodLevel=n,this.version=t}}

;// ../node_modules/@arcgis/core/views/3d/layers/SceneLayerWorker.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function SceneLayerWorker_u(e){E=await U();const r=[e.geometryBuffer];return{result:A(E,e,r),transferList:r}}async function m(e){E=await U();const r=[e.geometryBuffer],{geometryBuffer:t}=e,o=t.byteLength,n=E._malloc(o),s=new Uint8Array(E.HEAPU8.buffer,n,o);s.set(new Uint8Array(t));const i=E.dracoDecompressPointCloudData(n,s.byteLength);if(E._free(n),i.error.length>0)throw new Error(`i3s.wasm: ${i.error}`);const a=i.featureIds?.length>0?i.featureIds.slice():null,f=i.positions.slice();return a&&r.push(a.buffer),r.push(f.buffer),{result:{positions:f,featureIds:a},transferList:r}}async function y(e){await U(),S(e);const r={buffer:e.buffer};return{result:r,transferList:[r.buffer]}}async function p(e){await U(),j(e)}async function SceneLayerWorker_d(e){E=await U(),E.setLegacySchema(e.context,e.jsonSchema)}async function SceneLayerWorker_h(e){const{localMatrix:n,origin:s,positions:i,vertexSpace:a}=e,f=SpatialReference/* default */.A.fromJSON(e.inSpatialReference),c=SpatialReference/* default */.A.fromJSON(e.outSpatialReference);let l;const[{projectBuffer:u},{initializeProjection:m}]=await Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 84119)),Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 68490))]);await m(f,c);const y=[0,0,0];if(!u(s,f,0,y,c,0))throw new Error("Failed to project");if("georeferenced"===a.type&&null==a.origin){if(l=new Float64Array(i.length),!u(i,f,0,l,c,0,l.length/3))throw new Error("Failed to project")}else{const e="georeferenced"===a.type?MeshGeoreferencedVertexSpace/* default */.A.fromJSON(a):MeshLocalVertexSpace/* default */.A.fromJSON(a),{projectMeshVertexPositions:r}=await __webpack_require__.e(/* import() */ 8507).then(__webpack_require__.bind(__webpack_require__, 28507)),s=r({vertexAttributes:{position:i},transform:n?{localMatrix:n}:void 0,vertexSpace:e,spatialReference:f},c);if(!s)throw new Error("Failed to project");l=s}const p=l.length,[d,h,b]=y;for(let r=0;r<p;r+=3)l[r]-=d,l[r+1]-=h,l[r+2]-=b;return{result:{projected:l,original:i,projectedOrigin:y},transferList:[l.buffer,i.buffer]}}async function b({normalMatrix:r,normals:t}){const o=new Float32Array(t.length);return (0,vec3.b)(o,t,r),(0,mathUtils/* hasScaling */.or)(r)&&(0,vec3.n)(o,o),{result:{transformed:o,original:t},transferList:[o.buffer,t.buffer]}}function g(e){x(e)}let w,E;function j(e){if(!E)return;const r=e.modifications,t=E._malloc(8*r.length),o=new Float64Array(E.HEAPU8.buffer,t,r.length);for(let n=0;n<r.length;++n)o[n]=r[n];E.setModifications(e.context,t,r.length,e.isGeodetic),E._free(t)}function A(e,r,t){const{context:o,globalTrafo:n,mbs:s,obbData:a,elevationOffset:l,geometryBuffer:u,geometryDescriptor:m,indexToVertexProjector:y,vertexToRenderProjector:p}=r,d=e._malloc(u.byteLength),h=33,b=e._malloc(h*Float64Array.BYTES_PER_ELEMENT),g=new Uint8Array(e.HEAPU8.buffer,d,u.byteLength);g.set(new Uint8Array(u));const w=new Float64Array(e.HEAPU8.buffer,b,h);_(w,[NaN,NaN,NaN]);let E=w.byteOffset+3*w.BYTES_PER_ELEMENT,j=new Float64Array(w.buffer,E);_(j,n),E+=16*w.BYTES_PER_ELEMENT,j=new Float64Array(w.buffer,E),_(j,s),E+=4*w.BYTES_PER_ELEMENT,a&&(j=new Float64Array(w.buffer,E),_(j,a));const A=m,L={isDraco:!1,isLegacy:!1,color:r.layouts.some((e=>e.some((e=>"color"===e.name)))),normal:r.needNormals&&r.layouts.some((e=>e.some((e=>"normalCompressed"===e.name)))),uv0:r.layouts.some((e=>e.some((e=>"uv0"===e.name)))),uvRegion:r.layouts.some((e=>e.some((e=>"uvRegion"===e.name)))),featureIndex:A.featureIndex},S=e.process(o,!!r.obbData,d,g.byteLength,A,L,b,l,y,p,r.normalReferenceFrame);if(e._free(b),e._free(d),S.error.length>0)throw new Error(`i3s.wasm: ${S.error}`);if(S.discarded)return null;const x=S.componentOffsets.length>0?S.componentOffsets.slice():null,P=S.featureIds.length>0?S.featureIds.slice():null,U=S.anchorIds.length>0?Array.from(S.anchorIds):null,M=S.anchors.length>0?Array.from(S.anchors):null,N=S.interleavedVertedData.slice().buffer,I=S.indicesType===enums_n.Int16?new Uint16Array(S.indices.buffer,S.indices.byteOffset,S.indices.byteLength/2).slice():new Uint32Array(S.indices.buffer,S.indices.byteOffset,S.indices.byteLength/4).slice(),F=S.positions.slice(),{buffer:T,byteOffset:B,byteLength:O}=S.positionIndices,R=S.positionIndicesType===enums_n.Int16?new Uint16Array(T,B,O/2).slice():new Uint32Array(T,B,O/4).slice(),v=new I3SMeshWorkerHandle_n(r.layouts[0],N,I,S.hasColors,S.hasModifications,{data:F,indices:R});return P&&t.push(P.buffer),x&&t.push(x.buffer),t.push(N),t.push(I.buffer),t.push(F.buffer),t.push(R.buffer),new I3SMeshWorkerHandle_p(x,P,U,M,v,n,S.obb)}function L(e){return 0===e?r.Unmodified:1===e?r.PotentiallyModified:2===e?r.Culled:r.Unknown}function S(e){if(!E)return;const{context:r,buffer:t}=e,o=E._malloc(t.byteLength),n=t.byteLength/Float64Array.BYTES_PER_ELEMENT,s=new Float64Array(E.HEAPU8.buffer,o,n),i=new Float64Array(t);s.set(i),E.filterOBBs(r,o,n),i.set(s),E._free(o)}function x(e){E&&0===E.destroy(e)&&(E=null)}function _(e,r){for(let t=0;t<r.length;++t)e[t]=r[t]}async function P(){E||await U()}async function U(){return E||(E=await(w??=e())),E}const M={transform:(e,r)=>E&&A(E,e,r),destroy:x};


/***/ })

};
;