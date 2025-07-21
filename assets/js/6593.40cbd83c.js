"use strict";
exports.id = 6593;
exports.ids = [6593];
exports.modules = {

/***/ 38682:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ l)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(24793);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(9272);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
;// ../node_modules/@arcgis/core/analysis/support/AnalysisOriginWebScene.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let t=class extends Clonable/* default */.A{constructor(r){super(r),this.type="web-scene"}equals(r){return this.type===r.type}};(0,tslib_es6._)([(0,property/* property */.MZ)()],t.prototype,"type",void 0),t=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.analysis.support.AnalysisOriginWebScene")],t);const p=t;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(52495);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Identifiable.js
var Identifiable = __webpack_require__(65667);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
;// ../node_modules/@arcgis/core/analysis/Analysis.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let Analysis_p=0,l=class extends(JSONSupport/* default */.A.JSONSupportMixin(Clonable/* default */.A.ClonableMixin(Identifiable/* default */.A.IdentifiableMixin(Accessor/* default */.A)))){constructor(e){super(e),this.id=`${Date.now().toString(16)}-analysis-${Analysis_p++}`,this.origin=null}get parent(){return this._get("parent")}set parent(e){const s=this.parent;if(null!=s)switch(s.type){case"line-of-sight":case"dimension":case"viewshed":s.releaseAnalysis(this);break;case"2d":case"3d":s.analyses.includes(this)&&s.analyses.remove(this)}this._set("parent",e)}equals(e){return!0}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,constructOnly:!0,clonable:!1})],l.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({clonable:!1,value:null})],l.prototype,"parent",null),(0,tslib_es6._)([(0,property/* property */.MZ)({types:{key:"type",base:null,typeMap:{"web-scene":p}}})],l.prototype,"origin",void 0),l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.analysis.Analysis")],l);


/***/ }),

/***/ 6796:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  xH: () => (/* binding */ featureReferenceUtils_c),
  N1: () => (/* binding */ featureReferenceUtils_b)
});

// UNUSED EXPORTS: getFeatureId, updatePointsFromFeatureReference

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(24121);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(58359);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/ray.js
var ray = __webpack_require__(10151);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectorInterfaces.js
var IntersectorInterfaces = __webpack_require__(22531);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js
var mat4 = __webpack_require__(21742);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/aaBoundingBox.js
var aaBoundingBox = __webpack_require__(4675);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/sphere.js + 1 modules
var sphere = __webpack_require__(31803);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectorResult.js
var IntersectorResult = __webpack_require__(69798);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectorTarget.js
var IntersectorTarget = __webpack_require__(9286);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectorType.js
var IntersectorType = __webpack_require__(68427);
;// ../node_modules/@arcgis/core/views/3d/layers/i3s/Intersector.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Intersector_s extends IntersectorTarget/* Graphic3DTarget */.R{constructor(t,e,r,n){super(e,r),this.point=t,this.createGraphic=n}}function Intersector_i(e){return t(e)&&e.intersector===n.PCL&&!!e.target}class Intersector_o extends IntersectorTarget/* LayerTarget */.H{constructor(t,e,r,n,s){super(t),this.layerViewUid=t,this.sublayerId=e,this.nodeIndex=r,this.componentIndex=n,this.triangleNr=s}}class Intersector_c extends IntersectorTarget/* Graphic3DTarget */.R{constructor(t,e,r){super(e,null),this.point=t,this.createVoxelGraphic=r}}class Intersector_l extends IntersectorTarget/* Graphic3DTarget */.R{constructor(t,e){super(t,null),this.createTiles3DGraphic=e}}function Intersector_u(e){return t(e)&&e.intersector===n.I3S&&!!e.target}function Intersector_a(e){return t(e)&&e.intersector===n.VOXEL&&!!e.target}function Intersector_p(e){return t(e)&&e.intersector===n.TILES3D&&!!e.target}

;// ../node_modules/@arcgis/core/views/3d/terrain/Intersector.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function Intersector_n(r){return e(r)&&r.intersector===t.TERRAIN&&!!r.target}class terrain_Intersector_o extends IntersectorTarget/* Graphic3DTarget */.R{constructor(e,r,t){super(e,r),this.triangleNr=t}}function terrain_Intersector_i(r){return e(r)&&r.intersector===t.OVERLAY&&!!r.target}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/HUDIntersectorResult.js + 1 modules
var HUDIntersectorResult = __webpack_require__(94456);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/ObjectIntersectorResult.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function ObjectIntersectorResult_e(e){return r(e)&&e.intersector===t.OBJECT&&!!e.target}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/lodRendering/Intersector.js
var Intersector = __webpack_require__(24721);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/intersectorUtilsConversions.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function f(r,e){return g(r)||s(r)?w(r.target?.object,e):c(r)?e.map?.ground:i(r)||o(r)||u(r)||a(r)?w(r.target,e):null}function d(r,e){const t=m(r,e);return"graphic"===t?.type?t.graphic:null}function m(r,e,t={}){if(null==r)return null;if(g(r)||s(r))return h(r.target?.object,e,t);if(i(r)){const e=r.target.createGraphic();return{type:"graphic",graphic:e,layer:e.layer}}if(a(r)){const e=r.target.createVoxelGraphic();return{type:"graphic",graphic:e,layer:e.layer}}if(l(r)){const e=r.target.createTiles3DGraphic();return{type:"graphic",graphic:e,layer:e.layer}}return u(r)||p(r)?h(r.target,e,t):o(r)?y(r.target,e,t):null}function h(r,e,t){if(null==r?.graphicUid)return null;const n=w(r,e);if(null==n)return null;if(n===e.graphics)return null==e.graphicsView||"number"!=typeof r.graphicUid?null:e.graphicsView.getHit(r.graphicUid,t);const i=e.allLayerViews.find((r=>r.layer===n));return!i||i.suspended||null==r.graphicUid?null:"getHit"in i?i.getHit(r.graphicUid,t):null}function y(r,e,t){const n=w(r,e);if(null==n)return null;const i=e.allLayerViews.find((r=>r.layer===n));if(!i||i.suspended||!("getGraphicFromIntersectorTarget"in i))return null;const a=t.defer;return V(i.getGraphicFromIntersectorTarget(r,{defer:a?async r=>a((async()=>V(await r()))):void 0}))}function j(r,e){const t=w(r,e);if(null==t)return null;const n=e.allLayerViews.find((r=>r.layer===t));return n&&!n.suspended&&"getAABBFromIntersectorTarget"in n?n.getAABBFromIntersectorTarget(r):null}function V(r){return null!=r?{type:"graphic",graphic:r,layer:r.layer}:null}function w(r,e){return null==r?.layerViewUid?null:null!=e.graphicsView&&r.layerViewUid===e.graphicsView.uid?e.graphics:e.allLayerViews.find((e=>e.uid===r.layerViewUid))?.layer}function b(e,i){if(g(e)||s(e))return n(e.target.object.boundingVolumeWorldSpace.bounds);if(p(e)){r(U,e.transformation);const t=Math.max(U[0],U[1],U[2]);return e.target.baseBoundingSphere.radius*t}if(o(e)){const r=j(e.target,i);return r?.5*t(r):null}return null}function I(r){return!g(r)&&!s(r)&&(p(r)?r.target.numLodLevels>1:!!o(r))}const U=(0,vec3f64/* create */.vt)();

;// ../node_modules/@arcgis/core/analysis/featureReferenceUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function featureReferenceUtils_c(e,t){return featureReferenceUtils_d(e)===featureReferenceUtils_d(t)}function featureReferenceUtils_d(e){if(null==e)return null;const t=null!=e.layer?e.layer.id:"";let r=null;return r=null!=e.objectId?e.objectId:null!=e.layer&&"objectIdField"in e.layer&&null!=e.layer.objectIdField&&null!=e.attributes?e.attributes[e.layer.objectIdField]:e.uid,null==r?null:`o-${t}-${r}`}const featureReferenceUtils_b={json:{write:{writer:featureReferenceUtils_f,target:{"feature.layerId":{type:[Number,String],isRequired:!0},"feature.objectId":{type:[Number,String],isRequired:!0}}},origins:{"web-scene":{read:featureReferenceUtils_I}}}};function featureReferenceUtils_f(e,t){null!=e?.layer?.objectIdField&&null!=e.attributes&&(t.feature={layerId:e.layer.id,objectId:e.attributes[e.layer.objectIdField]})}function featureReferenceUtils_I(e){if(null!=e.layerId&&null!=e.objectId)return{uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}function featureReferenceUtils_m(l,s,a,c){const{sceneIntersectionHelper:b}=l,{observer:f,observerFeatureId:I,targetFeatureId:m,target:g}=a;if(null==I&&null==m)return;c||(c=e=>e),e(featureReferenceUtils_p,f,g);const v=t(featureReferenceUtils_p),S=1;r(featureReferenceUtils_p,f,featureReferenceUtils_p,S/v);const F=o(featureReferenceUtils_p,g,featureReferenceUtils_y);s.options.store=i.ALL,b.intersectToolIntersectorRay(F,s);let N=null,w=null,R=null,A=null;for(const e of s.results.all){const t=u(e,l);if(null==t||null==e.distanceInRenderSpace)continue;const r=featureReferenceUtils_d(t);null!=r&&(null!=I&&r===I&&(N??=c(featureReferenceUtils_j(e,l,v)),e.distanceInRenderSpace-S<N&&(R=e)),null!=m&&r===m&&(w??=c(featureReferenceUtils_j(e,l,v)),null==A&&e.distanceInRenderSpace-S<v&&v-e.distanceInRenderSpace+S<w&&(A=e)))}const{observerAdjusted:T,targetAdjusted:h}=a;R?.getIntersectionPoint(T)?a.observerSurfaceNormal=R.getTransformedNormal(n()):a.observerSurfaceNormal=null,A?.getIntersectionPoint(h)?a.targetSurfaceNormal=A.getTransformedNormal(n()):a.targetSurfaceNormal=null}function featureReferenceUtils_j(e,t,r){if(s(e)){const n=a(e,t);if(null!=n)return Math.min(n*featureReferenceUtils_g,r)}return 1e-5*r}const featureReferenceUtils_g=.05,featureReferenceUtils_y=(0,ray/* create */.vt)(),featureReferenceUtils_p=(0,vec3f64/* create */.vt)();


/***/ }),

/***/ 6593:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ m)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/analysis/Analysis.js + 1 modules
var Analysis = __webpack_require__(38682);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/analysis/featureReferenceUtils.js + 4 modules
var featureReferenceUtils = __webpack_require__(6796);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(52495);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(24793);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(6267);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(9272);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/persistable.js
var persistable = __webpack_require__(77841);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Point.js
var Point = __webpack_require__(97066);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/ElevationInfo.js + 1 modules
var ElevationInfo = __webpack_require__(60973);
;// ../node_modules/@arcgis/core/analysis/LineOfSightAnalysisObserver.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let f=class extends(JSONSupport/* default */.A.JSONSupportMixin(Clonable/* default */.A.ClonableMixin(Accessor/* default */.A))){constructor(o){super(o),this.position=null,this.elevationInfo=null,this.feature=null}equals(o){return (0,maybe/* equalsMaybe */.CM)(this.position,o.position)&&(0,maybe/* equalsMaybe */.CM)(this.elevationInfo,o.elevationInfo)&&(0,featureReferenceUtils/* featureReferenceEquals */.xH)(this.feature,o.feature)}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Point/* default */.A,json:{write:{isRequired:!0}}})],f.prototype,"position",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:ElevationInfo/* default */.A}),(0,persistable/* persistable */.P)()],f.prototype,"elevationInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(featureReferenceUtils/* featureReferenceProperty */.N1)],f.prototype,"feature",void 0),f=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.analysis.LineOfSightAnalysisObserver")],f);const u=f;

;// ../node_modules/@arcgis/core/analysis/LineOfSightAnalysisTarget.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let l=class extends(JSONSupport/* default */.A.JSONSupportMixin(Clonable/* default */.A)){constructor(o){super(o),this.position=null,this.elevationInfo=null,this.feature=null}equals(o){return (0,maybe/* equalsMaybe */.CM)(this.position,o.position)&&(0,maybe/* equalsMaybe */.CM)(this.elevationInfo,o.elevationInfo)&&(0,featureReferenceUtils/* featureReferenceEquals */.xH)(this.feature,o.feature)}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Point/* default */.A,json:{write:!0,origins:{"web-scene":{write:{isRequired:!0}}}}}),(0,persistable/* persistable */.P)()],l.prototype,"position",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:ElevationInfo/* default */.A}),(0,persistable/* persistable */.P)()],l.prototype,"elevationInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(featureReferenceUtils/* featureReferenceProperty */.N1)],l.prototype,"feature",void 0),l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.analysis.LineOfSightAnalysisTarget")],l);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(48982);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/collectionUtils.js
var collectionUtils = __webpack_require__(4194);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(85251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projectionUtils.js + 2 modules
var projectionUtils = __webpack_require__(68490);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/aaBoundingBox.js
var aaBoundingBox = __webpack_require__(4675);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/elevationInfoUtils.js
var elevationInfoUtils = __webpack_require__(27451);
;// ../node_modules/@arcgis/core/analysis/LineOfSightAnalysis.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const d=Collection/* default */.A.ofType(l);let j=class extends Analysis/* default */.A{constructor(t){super(t),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles((0,reactiveUtils/* watch */.wB)((()=>this._computeExtent()),(t=>{null==t?.pending&&this._set("extent",null!=t?t.extent:null)}),reactiveUtils/* syncAndInitial */.pc))}get targets(){return this._get("targets")||new d}set targets(t){this._set("targets",(0,collectionUtils/* referenceSetter */.V)(t,this.targets,d))}get spatialReference(){return null!=this.observer?.position?this.observer.position.spatialReference:null}get valid(){return null!=this.observer?.position}async waitComputeExtent(){const t=this._computeExtent();return null!=t?t.pending:Promise.resolve()}_computeExtent(){const t=this.spatialReference;if(null==this.observer?.position||null==t)return null;const e=t=>"absolute-height"===(0,elevationInfoUtils/* getGeometryEffectiveElevationMode */.w7)(t.position,t.elevationInfo),r=this.observer.position,o=(0,aaBoundingBox/* fromValues */.fA)(r.x,r.y,r.z,r.x,r.y,r.z);for(const i of this.targets)if(null!=i.position){const e=(0,projectionUtils.projectOrLoad)(i.position,t);if(null!=e.pending)return{pending:e.pending,extent:null};if(null!=e.geometry){const{x:t,y:r,z:s}=e.geometry;(0,aaBoundingBox/* expandWithVec3 */.iT)(o,[t,r,s])}}const s=(0,aaBoundingBox/* toExtent */.w1)(o,t);return e(this.observer)&&this.targets.every(e)||(s.zmin=void 0,s.zmax=void 0),{pending:null,extent:s}}clear(){this.observer=null,this.targets.removeAll()}equals(t){return this===t||super.equals(t)&&(0,maybe/* equalsMaybe */.CM)(this.observer,t.observer)&&(0,arrayUtils/* equals */.aI)(this.targets.toArray(),t.targets.toArray(),((t,e)=>t.equals(e)))}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["line-of-sight"]})],j.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:u,json:{read:!0,write:!0}})],j.prototype,"observer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({cast:collectionUtils/* castForReferenceSetter */.H,type:d,nonNullable:!0,json:{read:!0,write:!0}})],j.prototype,"targets",null),(0,tslib_es6._)([(0,property/* property */.MZ)({value:null,readOnly:!0})],j.prototype,"extent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],j.prototype,"spatialReference",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],j.prototype,"valid",null),j=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.analysis.LineOfSightAnalysis")],j);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(35775);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/Layer.js + 1 modules
var Layer = __webpack_require__(68833);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(41506);
;// ../node_modules/@arcgis/core/layers/LineOfSightLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const LineOfSightLayer_u=Collection/* default */.A.ofType(l);let LineOfSightLayer_d=class extends((0,OperationalLayer/* OperationalLayer */.q)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)(Layer/* default */.A))){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new j,this.opacity=1}initialize(){this.addHandles((0,reactiveUtils/* watch */.wB)((()=>this.analysis),((e,t)=>{null!=t&&t.parent===this&&(t.parent=null),null!=e&&(e.parent=this)}),reactiveUtils/* syncAndInitial */.pc))}async load(){return null!=this.analysis&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return this.analysis?.observer}set observer(e){const{analysis:t}=this;t&&(t.observer=e)}get targets(){return null!=this.analysis?this.analysis.targets:new Collection/* default */.A}set targets(e){(0,collectionUtils/* referenceSetter */.V)(e,this.analysis?.targets)}get fullExtent(){return null!=this.analysis?this.analysis.extent:null}get spatialReference(){return null!=this.analysis?this.analysis.spatialReference:null}releaseAnalysis(e){this.analysis===e&&(this.analysis=new j)}};(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1},readOnly:!0})],LineOfSightLayer_d.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["LineOfSightLayer"]})],LineOfSightLayer_d.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:u,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],LineOfSightLayer_d.prototype,"observer",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:LineOfSightLayer_u,json:{read:!0,write:{ignoreOrigin:!0,isRequired:!0}}})],LineOfSightLayer_d.prototype,"targets",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:j,nonNullable:!0,json:{read:!1,write:!1}})],LineOfSightLayer_d.prototype,"analysis",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],LineOfSightLayer_d.prototype,"fullExtent",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],LineOfSightLayer_d.prototype,"spatialReference",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],LineOfSightLayer_d.prototype,"opacity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide"]})],LineOfSightLayer_d.prototype,"listMode",void 0),LineOfSightLayer_d=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.LineOfSightLayer")],LineOfSightLayer_d);const m=LineOfSightLayer_d;


/***/ }),

/***/ 94456:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  rQ: () => (/* binding */ c),
  lx: () => (/* binding */ i)
});

// UNUSED EXPORTS: isHUDIntersectorResult

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(58359);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectorResult.js
var IntersectorResult = __webpack_require__(69798);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectorType.js
var IntersectorType = __webpack_require__(68427);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/ObjectTarget.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class t{constructor(t,e,i){this.object=t,this.geometryId=e,this.primitiveIndex=i}}

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/HUDIntersectorResult.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class c extends IntersectorResult/* IntersectorResult */.i{constructor(){super(...arguments),this.intersector=IntersectorType/* IntersectorType */.d.HUD}}class i extends t{constructor(r,e){super(r.object,r.geometryId,r.primitiveIndex),this.center=(0,vec3f64/* clone */.o8)(e)}}function n(t){return e(t)&&t.intersector===s.HUD&&!!t.target&&"center"in t.target}


/***/ }),

/***/ 22531:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ e),
/* harmony export */   o: () => (/* binding */ i)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class e{constructor(){this.verticalOffset=0,this.selectionMode=!1,this.hud=!0,this.selectOpaqueTerrainOnly=!0,this.invisibleTerrain=!1,this.backfacesTerrain=!0,this.isFiltered=!1,this.filteredLayerViewUids=[],this.store=i.ALL,this.normalRequired=!0,this.excludeLabels=!1}}var i;!function(e){e[e.MIN=0]="MIN",e[e.MINMAX=1]="MINMAX",e[e.ALL=2]="ALL"}(i||(i={}));


/***/ }),

/***/ 69798:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ p)
/* harmony export */ });
/* unused harmony export isValidIntersectorResult */
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21742);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86128);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24121);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58359);
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2662);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28152);
/* harmony import */ var _geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10151);
/* harmony import */ var _IntersectorType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68427);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class p{get ray(){return this._ray}get distanceInRenderSpace(){return null==this.distance?null:((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.g)(u,this.ray.direction,this.distance),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.l)(u))}withinDistance(t){return!!g(this)&&this.distanceInRenderSpace<=t}getIntersectionPoint(t){return!!g(this)&&((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.g)(u,this.ray.direction,this.distance),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.f)(t,this.ray.origin,u),!0)}getTransformedNormal(t){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.c)(j,this.normal),j[3]=0,(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_4__.t)(j,j,this.transformation),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.c)(t,j),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.n)(t,t)}constructor(t){this.intersector=_IntersectorType_js__WEBPACK_IMPORTED_MODULE_7__/* .IntersectorType */ .d.OBJECT,this.normal=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .vt)(),this.transformation=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)(),this._ray=(0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),this.init(t)}init(t){this.distance=this.target=this.drapedLayerOrder=this.renderPriority=null,this.intersector=_IntersectorType_js__WEBPACK_IMPORTED_MODULE_7__/* .IntersectorType */ .d.OBJECT,(0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_6__/* .copy */ .C)(t,this._ray)}set(r,s,e,a,o,c,m){this.intersector=r,this.distance=e,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.c)(this.normal,a??_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .UNIT_Z */ .Cb),(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__/* .copy */ .C)(this.transformation,o??_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__/* .IDENTITY */ .zK),this.target=s,this.drapedLayerOrder=c,this.renderPriority=m}copy(r){(0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_6__/* .copy */ .C)(r.ray,this._ray),this.intersector=r.intersector,this.distance=r.distance,this.target=r.target,this.drapedLayerOrder=r.drapedLayerOrder,this.renderPriority=r.renderPriority,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.c)(this.normal,r.normal),(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__/* .copy */ .C)(this.transformation,r.transformation)}}function g(t){return null!=t?.distance}const u=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .vt)(),j=(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__/* .create */ .vt)();


/***/ }),

/***/ 9286:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ s),
/* harmony export */   R: () => (/* binding */ r)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class s{constructor(s){this.layerViewUid=s}}class r extends s{constructor(s,r){super(s),this.graphicUid=r}}


/***/ }),

/***/ 68427:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ E)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var E;!function(E){E[E.OBJECT=0]="OBJECT",E[E.HUD=1]="HUD",E[E.TERRAIN=2]="TERRAIN",E[E.OVERLAY=3]="OVERLAY",E[E.I3S=4]="I3S",E[E.PCL=5]="PCL",E[E.LOD=6]="LOD",E[E.VOXEL=7]="VOXEL",E[E.TILES3D=8]="TILES3D"}(E||(E={}));


/***/ }),

/***/ 24721:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ s)
/* harmony export */ });
/* unused harmony export isLodIntersectorResult */
/* harmony import */ var _IntersectorResult_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69798);
/* harmony import */ var _IntersectorTarget_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9286);
/* harmony import */ var _IntersectorType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68427);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class s extends _IntersectorTarget_js__WEBPACK_IMPORTED_MODULE_1__/* .Graphic3DTarget */ .R{constructor(r,t,e,s,i){super(r,t),this.layerViewUid=r,this.graphicUid=t,this.triangleNr=e,this.baseBoundingSphere=s,this.numLodLevels=i}}function i(t){return r(t)&&t.intersector===e.LOD&&!!t.target}


/***/ })

};
;