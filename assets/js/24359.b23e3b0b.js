"use strict";
exports.id = 24359;
exports.ids = [24359];
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

/***/ 24359:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ u)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/analysis/featureReferenceUtils.js + 4 modules
var featureReferenceUtils = __webpack_require__(6796);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(24793);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Cyclical.js
var Cyclical = __webpack_require__(17505);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(6267);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(4130);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(9272);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Point.js
var Point = __webpack_require__(97066);
;// ../node_modules/@arcgis/core/analysis/Viewshed.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let c=class extends(JSONSupport/* default */.A.JSONSupportMixin(Clonable/* default */.A)){constructor(e){super(e),this.observer=null,this.farDistance=1e3,this.heading=0,this.tilt=90,this.horizontalFieldOfView=45,this.verticalFieldOfView=45,this.feature=null}get valid(){return null!=this.observer&&this.farDistance>0}equals(e){return (0,maybe/* equalsMaybe */.CM)(this.observer,e.observer)&&this.farDistance===e.farDistance&&this.heading===e.heading&&this.tilt===e.tilt&&this.horizontalFieldOfView===e.horizontalFieldOfView&&this.verticalFieldOfView===e.verticalFieldOfView&&(0,featureReferenceUtils/* featureReferenceEquals */.xH)(this.feature,e.feature)}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Point/* default */.A,json:{write:{isRequired:!0}}})],c.prototype,"observer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,nonNullable:!0,range:{min:0},json:{write:{isRequired:!0}}})],c.prototype,"farDistance",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),(0,cast/* cast */.w)((e=>Cyclical/* cyclicalDegrees */.ie.normalize((0,ensureType/* ensureNumber */.GB)(e),void 0,!0)))],c.prototype,"heading",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],c.prototype,"tilt",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,nonNullable:!0,range:{min:0,max:360},json:{write:{isRequired:!0}}})],c.prototype,"horizontalFieldOfView",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],c.prototype,"verticalFieldOfView",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(featureReferenceUtils/* featureReferenceProperty */.N1)],c.prototype,"feature",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],c.prototype,"valid",null),c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.analysis.Viewshed")],c);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/analysis/Analysis.js + 1 modules
var Analysis = __webpack_require__(38682);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(48982);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/collectionUtils.js
var collectionUtils = __webpack_require__(4194);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(92504);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(85251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(84698);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projectionUtils.js + 2 modules
var projectionUtils = __webpack_require__(68490);
;// ../node_modules/@arcgis/core/analysis/ViewshedAnalysis.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const v=Collection/* default */.A.ofType(c);let y=class extends Analysis/* default */.A{constructor(e){super(e),this.type="viewshed",this._extent=null}initialize(){this.addHandles((0,reactiveUtils/* watch */.wB)((()=>this._computeExtent()),(e=>{null==e.pending&&(this._extent=e.extent)}),reactiveUtils/* syncAndInitial */.pc))}get viewsheds(){return this._get("viewsheds")||new v}set viewsheds(e){this._set("viewsheds",(0,collectionUtils/* referenceSetter */.V)(e,this.viewsheds,v))}get spatialReference(){for(const e of this.viewsheds)if(null!=e.observer)return e.observer.spatialReference;return null}get extent(){return this._extent}get valid(){return this.viewsheds.every((e=>e.valid))}async waitComputeExtent(){const e=this._computeExtent();null!=e.pending&&await e.pending}_computeExtent(){const{spatialReference:e}=this;if(null==e)return{pending:null,extent:null};const t=this.viewsheds.filter((e=>null!=e.observer)),r=t.map((e=>e.observer)).toArray(),s=(0,projectionUtils.projectOrLoadMany)(r,e);if(null!=s.pending)return{pending:s.pending,extent:null};return{pending:null,extent:s.geometries.map(((e,r)=>{const s=t.at(r);return null!=e&&null!=s?this._computeViewshedExtent(this.viewsheds.at(r),e):null})).filter((e=>null!=e)).reduce(((e,t)=>x(e,t)),null)}}_computeViewshedExtent(e,t){const{farDistance:r,heading:s,tilt:n,horizontalFieldOfView:i,verticalFieldOfView:o}=e,{spatialReference:u}=t,c=i/2,m=o/2,h=r/u.metersPerUnit,f=[Cyclical/* cyclicalDegrees */.ie.normalize(s-c),s,Cyclical/* cyclicalDegrees */.ie.normalize(s+c)],v=Extent/* default */.A.fromPoint(t),y=e=>{const t=f.map((t=>Cyclical/* cyclicalDegrees */.ie.normalize(t-e)));if(t[0]>t[2]||360===i)return h;const r=t.map((e=>Math.abs(e>180?360-e:e))).reduce(((e,t)=>e>t?t:e));return r>90?0:h*Math.cos((0,mathUtils/* deg2rad */.kU)(r))};v.xmax+=y(90),v.xmin-=y(-90),v.ymax+=y(0),v.ymin-=y(180);const x=t.z;if(null!=x){let e=x,t=x;const s=n-90,i=(0,mathUtils/* clamp */.qE)(s+m,-90,90),o=(0,mathUtils/* clamp */.qE)(s-m,-90,90),l=u?.isGeographic?r:h;e+=l*g(i),t+=l*g(o);const a=w(m)*l,d=g(s)*a*(1-w(c));n<90&&(e-=d),n>90&&(t-=d),v.zmax=Math.max(e,x),v.zmin=Math.min(t,x)}return v}equals(e){return this===e||super.equals(e)&&(0,arrayUtils/* equals */.aI)(this.viewsheds.toArray(),e.viewsheds.toArray(),((e,t)=>e.equals(t)))}clear(){this.viewsheds.removeAll()}};function x(e,t){return null==e?t:null==t?e:e.union(t)}function w(e){return Math.cos((0,mathUtils/* deg2rad */.kU)(e))}function g(e){return Math.sin((0,mathUtils/* deg2rad */.kU)(e))}(0,tslib_es6._)([(0,property/* property */.MZ)({type:["viewshed"]})],y.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({cast:collectionUtils/* castForReferenceSetter */.H,type:v,nonNullable:!0})],y.prototype,"viewsheds",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],y.prototype,"spatialReference",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],y.prototype,"_extent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],y.prototype,"extent",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],y.prototype,"valid",null),y=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.analysis.ViewshedAnalysis")],y);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(35775);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/Layer.js + 1 modules
var Layer = __webpack_require__(68833);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(41506);
;// ../node_modules/@arcgis/core/layers/ViewshedLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let ViewshedLayer_y=class extends((0,OperationalLayer/* OperationalLayer */.q)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)(Layer/* default */.A))){constructor(e){super(e),this.type="viewshed",this.operationalLayerType="ViewshedLayer",this.source=new y,this.opacity=1}initialize(){this.addHandles((0,reactiveUtils/* watch */.wB)((()=>this.source),((e,r)=>{null!=r&&r.parent===this&&(r.parent=null),null!=e&&(e.parent=this)}),reactiveUtils/* syncAndInitial */.pc))}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new y)}get analysis(){return this.source}set analysis(e){this.source=e}get viewsheds(){return this.source.viewsheds}set viewsheds(e){this.source.viewsheds=e}writeViewsheds(e,r,s,t){r.viewsheds=e.filter((e=>e.valid)).toJSON(t)}};(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1},readOnly:!0})],ViewshedLayer_y.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["ViewshedLayer"]})],ViewshedLayer_y.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:y,nonNullable:!0})],ViewshedLayer_y.prototype,"source",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],ViewshedLayer_y.prototype,"spatialReference",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],ViewshedLayer_y.prototype,"fullExtent",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],ViewshedLayer_y.prototype,"opacity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide"]})],ViewshedLayer_y.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(c),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],ViewshedLayer_y.prototype,"viewsheds",null),(0,tslib_es6._)([(0,writer/* writer */.K)("web-scene","viewsheds")],ViewshedLayer_y.prototype,"writeViewsheds",null),ViewshedLayer_y=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.ViewshedLayer")],ViewshedLayer_y);const u=ViewshedLayer_y;


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