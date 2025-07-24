"use strict";
exports.id = 20265;
exports.ids = [20265];
exports.modules = {

/***/ 96932:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ l)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(14755);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
;// ./node_modules/@arcgis/core/analysis/support/AnalysisOriginWebScene.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let t=class extends Clonable/* default */.A{constructor(r){super(r),this.type="web-scene"}equals(r){return this.type===r.type}};(0,tslib_es6._)([(0,property/* property */.MZ)()],t.prototype,"type",void 0),t=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.analysis.support.AnalysisOriginWebScene")],t);const p=t;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(93741);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Identifiable.js
var Identifiable = __webpack_require__(23377);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(22395);
;// ./node_modules/@arcgis/core/analysis/Analysis.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let Analysis_p=0,l=class extends(JSONSupport/* default */.A.JSONSupportMixin(Clonable/* default */.A.ClonableMixin(Identifiable/* default */.A.IdentifiableMixin(Accessor/* default */.A)))){constructor(e){super(e),this.id=`${Date.now().toString(16)}-analysis-${Analysis_p++}`,this.origin=null}get parent(){return this._get("parent")}set parent(e){const s=this.parent;if(null!=s)switch(s.type){case"line-of-sight":case"dimension":case"viewshed":s.releaseAnalysis(this);break;case"2d":case"3d":s.analyses.includes(this)&&s.analyses.remove(this)}this._set("parent",e)}equals(e){return!0}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,constructOnly:!0,clonable:!1})],l.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({clonable:!1,value:null})],l.prototype,"parent",null),(0,tslib_es6._)([(0,property/* property */.MZ)({types:{key:"type",base:null,typeMap:{"web-scene":p}}})],l.prototype,"origin",void 0),l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.analysis.Analysis")],l);


/***/ }),

/***/ 35568:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  xH: () => (/* binding */ featureReferenceUtils_c),
  N1: () => (/* binding */ featureReferenceUtils_b)
});

// UNUSED EXPORTS: getFeatureId, updatePointsFromFeatureReference

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(80347);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(19913);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/ray.js
var ray = __webpack_require__(63918);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectorInterfaces.js
var IntersectorInterfaces = __webpack_require__(30165);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js
var mat4 = __webpack_require__(25336);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/aaBoundingBox.js
var aaBoundingBox = __webpack_require__(46373);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/sphere.js + 1 modules
var sphere = __webpack_require__(59661);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectorResult.js
var IntersectorResult = __webpack_require__(40476);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectorTarget.js
var IntersectorTarget = __webpack_require__(76388);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectorType.js
var IntersectorType = __webpack_require__(33409);
;// ./node_modules/@arcgis/core/views/3d/layers/i3s/Intersector.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Intersector_s extends IntersectorTarget/* Graphic3DTarget */.R{constructor(t,e,r,n){super(e,r),this.point=t,this.createGraphic=n}}function Intersector_i(e){return t(e)&&e.intersector===n.PCL&&!!e.target}class Intersector_o extends IntersectorTarget/* LayerTarget */.H{constructor(t,e,r,n,s){super(t),this.layerViewUid=t,this.sublayerId=e,this.nodeIndex=r,this.componentIndex=n,this.triangleNr=s}}class Intersector_c extends IntersectorTarget/* Graphic3DTarget */.R{constructor(t,e,r){super(e,null),this.point=t,this.createVoxelGraphic=r}}class Intersector_l extends IntersectorTarget/* Graphic3DTarget */.R{constructor(t,e){super(t,null),this.createTiles3DGraphic=e}}function Intersector_u(e){return t(e)&&e.intersector===n.I3S&&!!e.target}function Intersector_a(e){return t(e)&&e.intersector===n.VOXEL&&!!e.target}function Intersector_p(e){return t(e)&&e.intersector===n.TILES3D&&!!e.target}

;// ./node_modules/@arcgis/core/views/3d/terrain/Intersector.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function Intersector_n(r){return e(r)&&r.intersector===t.TERRAIN&&!!r.target}class terrain_Intersector_o extends IntersectorTarget/* Graphic3DTarget */.R{constructor(e,r,t){super(e,r),this.triangleNr=t}}function terrain_Intersector_i(r){return e(r)&&r.intersector===t.OVERLAY&&!!r.target}

;// ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/ObjectTarget.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class ObjectTarget_t{constructor(t,e,i){this.object=t,this.geometryId=e,this.primitiveIndex=i}}

;// ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/HUDIntersectorResult.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class HUDIntersectorResult_c extends IntersectorResult/* IntersectorResult */.i{constructor(){super(...arguments),this.intersector=IntersectorType/* IntersectorType */.d.HUD}}class HUDIntersectorResult_i extends ObjectTarget_t{constructor(r,e){super(r.object,r.geometryId,r.primitiveIndex),this.center=(0,vec3f64/* clone */.o8)(e)}}function HUDIntersectorResult_n(t){return e(t)&&t.intersector===s.HUD&&!!t.target&&"center"in t.target}

;// ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/ObjectIntersectorResult.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function ObjectIntersectorResult_e(e){return r(e)&&e.intersector===t.OBJECT&&!!e.target}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/lodRendering/Intersector.js
var Intersector = __webpack_require__(62847);
;// ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/intersectorUtilsConversions.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function f(r,e){return g(r)||s(r)?w(r.target?.object,e):c(r)?e.map?.ground:i(r)||o(r)||u(r)||a(r)?w(r.target,e):null}function d(r,e){const t=m(r,e);return"graphic"===t?.type?t.graphic:null}function m(r,e,t={}){if(null==r)return null;if(g(r)||s(r))return h(r.target?.object,e,t);if(i(r)){const e=r.target.createGraphic();return{type:"graphic",graphic:e,layer:e.layer}}if(a(r)){const e=r.target.createVoxelGraphic();return{type:"graphic",graphic:e,layer:e.layer}}if(l(r)){const e=r.target.createTiles3DGraphic();return{type:"graphic",graphic:e,layer:e.layer}}return u(r)||p(r)?h(r.target,e,t):o(r)?y(r.target,e,t):null}function h(r,e,t){if(null==r?.graphicUid)return null;const n=w(r,e);if(null==n)return null;if(n===e.graphics)return null==e.graphicsView||"number"!=typeof r.graphicUid?null:e.graphicsView.getHit(r.graphicUid,t);const i=e.allLayerViews.find((r=>r.layer===n));return!i||i.suspended||null==r.graphicUid?null:"getHit"in i?i.getHit(r.graphicUid,t):null}function y(r,e,t){const n=w(r,e);if(null==n)return null;const i=e.allLayerViews.find((r=>r.layer===n));if(!i||i.suspended||!("getGraphicFromIntersectorTarget"in i))return null;const a=t.defer;return V(i.getGraphicFromIntersectorTarget(r,{defer:a?async r=>a((async()=>V(await r()))):void 0}))}function j(r,e){const t=w(r,e);if(null==t)return null;const n=e.allLayerViews.find((r=>r.layer===t));return n&&!n.suspended&&"getAABBFromIntersectorTarget"in n?n.getAABBFromIntersectorTarget(r):null}function V(r){return null!=r?{type:"graphic",graphic:r,layer:r.layer}:null}function w(r,e){return null==r?.layerViewUid?null:null!=e.graphicsView&&r.layerViewUid===e.graphicsView.uid?e.graphics:e.allLayerViews.find((e=>e.uid===r.layerViewUid))?.layer}function b(e,i){if(g(e)||s(e))return n(e.target.object.boundingVolumeWorldSpace.bounds);if(p(e)){r(U,e.transformation);const t=Math.max(U[0],U[1],U[2]);return e.target.baseBoundingSphere.radius*t}if(o(e)){const r=j(e.target,i);return r?.5*t(r):null}return null}function I(r){return!g(r)&&!s(r)&&(p(r)?r.target.numLodLevels>1:!!o(r))}const U=(0,vec3f64/* create */.vt)();

;// ./node_modules/@arcgis/core/analysis/featureReferenceUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function featureReferenceUtils_c(e,t){return featureReferenceUtils_d(e)===featureReferenceUtils_d(t)}function featureReferenceUtils_d(e){if(null==e)return null;const t=null!=e.layer?e.layer.id:"";let r=null;return r=null!=e.objectId?e.objectId:null!=e.layer&&"objectIdField"in e.layer&&null!=e.layer.objectIdField&&null!=e.attributes?e.attributes[e.layer.objectIdField]:e.uid,null==r?null:`o-${t}-${r}`}const featureReferenceUtils_b={json:{write:{writer:featureReferenceUtils_f,target:{"feature.layerId":{type:[Number,String],isRequired:!0},"feature.objectId":{type:[Number,String],isRequired:!0}}},origins:{"web-scene":{read:featureReferenceUtils_I}}}};function featureReferenceUtils_f(e,t){null!=e?.layer?.objectIdField&&null!=e.attributes&&(t.feature={layerId:e.layer.id,objectId:e.attributes[e.layer.objectIdField]})}function featureReferenceUtils_I(e){if(null!=e.layerId&&null!=e.objectId)return{uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}function featureReferenceUtils_m(l,s,a,c){const{sceneIntersectionHelper:b}=l,{observer:f,observerFeatureId:I,targetFeatureId:m,target:g}=a;if(null==I&&null==m)return;c||(c=e=>e),e(featureReferenceUtils_p,f,g);const v=t(featureReferenceUtils_p),S=1;r(featureReferenceUtils_p,f,featureReferenceUtils_p,S/v);const F=o(featureReferenceUtils_p,g,featureReferenceUtils_y);s.options.store=i.ALL,b.intersectToolIntersectorRay(F,s);let N=null,w=null,R=null,A=null;for(const e of s.results.all){const t=u(e,l);if(null==t||null==e.distanceInRenderSpace)continue;const r=featureReferenceUtils_d(t);null!=r&&(null!=I&&r===I&&(N??=c(featureReferenceUtils_j(e,l,v)),e.distanceInRenderSpace-S<N&&(R=e)),null!=m&&r===m&&(w??=c(featureReferenceUtils_j(e,l,v)),null==A&&e.distanceInRenderSpace-S<v&&v-e.distanceInRenderSpace+S<w&&(A=e)))}const{observerAdjusted:T,targetAdjusted:h}=a;R?.getIntersectionPoint(T)?a.observerSurfaceNormal=R.getTransformedNormal(n()):a.observerSurfaceNormal=null,A?.getIntersectionPoint(h)?a.targetSurfaceNormal=A.getTransformedNormal(n()):a.targetSurfaceNormal=null}function featureReferenceUtils_j(e,t,r){if(s(e)){const n=a(e,t);if(null!=n)return Math.min(n*featureReferenceUtils_g,r)}return 1e-5*r}const featureReferenceUtils_g=.05,featureReferenceUtils_y=(0,ray/* create */.vt)(),featureReferenceUtils_p=(0,vec3f64/* create */.vt)();


/***/ }),

/***/ 59661:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* binding */ U),
  c: () => (/* binding */ E),
  e: () => (/* binding */ w),
  f: () => (/* binding */ V),
  g: () => (/* binding */ N),
  k: () => (/* binding */ H),
  o: () => (/* binding */ it),
  s: () => (/* binding */ ft)
});

// UNUSED EXPORTS: A, B, C, D, E, N, b, d, h, i, j, l, m, n, p, q, r, t, u, v, w, x, y, z

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(4506);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js
var mat4 = __webpack_require__(25336);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(80347);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(19913);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec42.js
var vec42 = __webpack_require__(74772);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js
var vec4f64 = __webpack_require__(76982);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/common.js
var common = __webpack_require__(78115);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/Axis.js
var Axis = __webpack_require__(60929);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/ray.js
var ray = __webpack_require__(63918);
;// ./node_modules/@arcgis/core/geometry/support/sphereUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function sphereUtils_n(n,a){const c=(0,vec32.l)(n),i=(0,mathUtils/* asinClamped */.YN)(n[2]/c),r=Math.atan2(n[1]/c,n[0]/c);return (0,vec32.i)(a,c,i,r),a}function a(t,o){const n=t[0],a=t[1],c=t[2],i=Math.cos(a);s(o,n*i*Math.cos(c),n*i*Math.sin(c),n*Math.sin(a))}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/vector.js
var vector = __webpack_require__(74695);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/vectorStacks.js + 1 modules
var vectorStacks = __webpack_require__(83339);
;// ./node_modules/@arcgis/core/chunks/sphere.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const C=E();function E(){return (0,vec4f64/* create */.vt)()}const _=vec42.e,k=vec42.e;function w(t,r){return (0,vec42.c)(r,t)}function O(t,r){return (0,vec4f64/* fromValues */.fA)(t[0],t[1],t[2],r)}function T(t){return t}function z(t){t[0]=t[1]=t[2]=t[3]=0}function L(t,r){return t[0]=t[1]=t[2]=0,t[3]=r,t}function N(t){return t[3]}function U(t){return t}function V(t,r,n,s){return (0,vec4f64/* fromValues */.fA)(t,r,n,s)}function Z(t,r,n){return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),n[3]=t[3]+r,n}function B(t,r,n){return t!==n&&w(t,n),n}function D(t,r){return r}function F(t,r,n){if(null==r)return!1;if(!Y(t,r,X))return!1;let{t0:s,t1:o}=X;if((s<0||o<s&&o>0)&&(s=o),s<0)return!1;if(n){const{origin:t,direction:o}=r;n[0]=t[0]+o[0]*s,n[1]=t[1]+o[1]*s,n[2]=t[2]+o[2]*s}return!0}function I(t,r,n){const s=(0,ray/* fromPoints */.Cr)(r,n);if(!Y(t,s,X))return[];const{origin:o,direction:e}=s,{t0:i,t1:a}=X,c=r=>{const n=(0,vec3f64/* create */.vt)();return (0,vec32.b)(n,o,e,r),$(t,n,n)};return Math.abs(i-a)<(0,common/* getEpsilon */.FD)()?[c(i)]:[c(i),c(a)]}const X={t0:0,t1:0};function Y(t,r,n){const{origin:s,direction:o}=r,e=G;e[0]=s[0]-t[0],e[1]=s[1]-t[1],e[2]=s[2]-t[2];const i=o[0]*o[0]+o[1]*o[1]+o[2]*o[2];if(0===i)return!1;const a=2*(o[0]*e[0]+o[1]*e[1]+o[2]*e[2]),c=a*a-4*i*(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]-t[3]*t[3]);if(c<0)return!1;const u=Math.sqrt(c);return n.t0=(-a-u)/(2*i),n.t1=(-a+u)/(2*i),!0}const G=(0,vec3f64/* create */.vt)();function H(t,r){return F(t,r,null)}function J(t,r,n){if(F(t,r,n))return n;const a=K(t,r,vectorStacks/* sv3d */.rq.get());return (0,vec32.f)(n,r.origin,(0,vec32.g)(vectorStacks/* sv3d */.rq.get(),r.direction,(0,vec32.j)(r.origin,a)/(0,vec32.l)(r.direction))),n}function K(t,n,s){const e=vectorStacks/* sv3d */.rq.get(),u=vectorStacks/* sm4d */.Rc.get();(0,vec32.h)(e,n.origin,n.direction);const f=N(t);(0,vec32.h)(s,e,n.origin),(0,vec32.g)(s,s,1/(0,vec32.l)(s)*f);const m=rt(t,n.origin),l=(0,vector/* angle */.g7)(n.origin,s);return (0,mat4/* fromRotation */.$0)(u,l+m,e),(0,vec32.t)(s,s,u),s}function Q(t,r,n,s){const o=N(t),e=o*o,i=r+.5*Math.PI,a=n*n+e-2*Math.cos(i)*n*o,c=Math.sqrt(a),u=a-e;if(u<=0)return.5;const f=Math.sqrt(u),m=Math.acos(f/c)-Math.asin(o/(c/Math.sin(i)));return Math.min(1,(m+.5*s)/s)}function W(t,r,n){return F(t,r,n)?n:((0,ray/* closestPoint */.oC)(r,U(t),n),$(t,n,n))}function $(t,r,n){const e=(0,vec32.d)(vectorStacks/* sv3d */.rq.get(),r,U(t)),a=(0,vec32.g)(vectorStacks/* sv3d */.rq.get(),e,t[3]/(0,vec32.l)(e));return (0,vec32.f)(n,a,U(t))}function tt(t,r){const n=(0,vec32.d)(vectorStacks/* sv3d */.rq.get(),r,U(t)),s=(0,vec32.k)(n),o=t[3]*t[3];return Math.sqrt(Math.abs(s-o))}function rt(r,n){const s=(0,vec32.d)(vectorStacks/* sv3d */.rq.get(),n,U(r)),o=(0,vec32.l)(s),e=N(r),a=e+Math.abs(e-o);return (0,mathUtils/* acosClamped */.XM)(e/a)}const nt=(0,vec3f64/* create */.vt)();function st(t,r,n,s){const o=(0,vec32.d)(nt,r,U(t));switch(n){case Axis/* Axis */._.X:{const t=sphereUtils_n(o,nt)[2];return (0,vec32.i)(s,-Math.sin(t),Math.cos(t),0)}case Axis/* Axis */._.Y:{const t=sphereUtils_n(o,nt),r=t[1],n=t[2],e=Math.sin(r);return (0,vec32.i)(s,-e*Math.cos(n),-e*Math.sin(n),Math.cos(r))}case Axis/* Axis */._.Z:return (0,vec32.n)(s,o);default:return}}function ot(t,r){const n=(0,vec32.d)(ct,r,U(t));return (0,vec32.l)(n)-t[3]}function et(t,r,n,e){const i=ot(t,r),a=st(t,r,Axis/* Axis */._.Z,ct),c=(0,vec32.g)(ct,a,n-i);return (0,vec32.f)(e,r,c)}function it(t,r){const s=(0,vec32.s)(U(t),r),o=N(t);return s<=o*o}function at(t,r,n=(0,vec4f64/* create */.vt)()){const s=(0,vec32.j)(U(t),U(r)),o=t[3],i=r[3];return s+i<o?((0,vec42.c)(n,t),n):s+o<i?((0,vec42.c)(n,r),n):((0,vec32.m)(n,U(t),U(r),(s+i-o)/(2*s)),n[3]=(s+o+i)/2,n)}const ct=(0,vec3f64/* create */.vt)(),ut=E(),ft=Object.freeze(Object.defineProperty({__proto__:null,NullSphere:C,altitudeAt:ot,angleToSilhouette:rt,axisAt:st,cameraFrustumCoverage:Q,clear:z,closestPoint:W,closestPointOnSilhouette:K,containsPoint:it,copy:w,create:E,distanceToSilhouette:tt,elevate:Z,equals:k,exactEquals:_,fromCenterAndRadius:O,fromRadius:L,fromValues:V,getCenter:U,getExtent:D,getRadius:N,intersectLine:I,intersectRay:F,intersectRayClosestSilhouette:J,intersectsRay:H,projectPoint:$,setAltitudeAt:et,setExtent:B,tmpSphere:ut,union:at,wrap:T},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 80347:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ l),
/* harmony export */   B: () => (/* binding */ m),
/* harmony export */   C: () => (/* binding */ e),
/* harmony export */   D: () => (/* binding */ i),
/* harmony export */   E: () => (/* binding */ K),
/* harmony export */   F: () => (/* binding */ W),
/* harmony export */   H: () => (/* binding */ Y),
/* harmony export */   a: () => (/* binding */ R),
/* harmony export */   b: () => (/* binding */ q),
/* harmony export */   c: () => (/* binding */ s),
/* harmony export */   d: () => (/* binding */ c),
/* harmony export */   e: () => (/* binding */ P),
/* harmony export */   f: () => (/* binding */ u),
/* harmony export */   g: () => (/* binding */ g),
/* harmony export */   h: () => (/* binding */ _),
/* harmony export */   i: () => (/* binding */ o),
/* harmony export */   j: () => (/* binding */ p),
/* harmony export */   k: () => (/* binding */ j),
/* harmony export */   l: () => (/* binding */ r),
/* harmony export */   m: () => (/* binding */ I),
/* harmony export */   n: () => (/* binding */ A),
/* harmony export */   o: () => (/* binding */ N),
/* harmony export */   q: () => (/* binding */ H),
/* harmony export */   r: () => (/* binding */ z),
/* harmony export */   s: () => (/* binding */ v),
/* harmony export */   t: () => (/* binding */ E),
/* harmony export */   u: () => (/* binding */ y),
/* harmony export */   v: () => (/* binding */ Q),
/* harmony export */   w: () => (/* binding */ f),
/* harmony export */   x: () => (/* binding */ X),
/* harmony export */   y: () => (/* binding */ Z),
/* harmony export */   z: () => (/* binding */ d)
/* harmony export */ });
/* unused harmony exports G, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, p */
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19913);
/* harmony import */ var _core_libs_gl_matrix_2_math_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78115);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function r(t){const n=t[0],a=t[1],r=t[2];return Math.sqrt(n*n+a*a+r*r)}function s(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function o(t,n,a,r){return t[0]=n,t[1]=a,t[2]=r,t}function u(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t}function c(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t}function e(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t[2]=n[2]*a[2],t}function i(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t[2]=n[2]/a[2],t}function h(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t}function M(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t}function f(t,n){return t[0]=Math.abs(n[0]),t[1]=Math.abs(n[1]),t[2]=Math.abs(n[2]),t}function m(t,n){return t[0]=Math.sign(n[0]),t[1]=Math.sign(n[1]),t[2]=Math.sign(n[2]),t}function l(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t[2]=Math.min(n[2],a[2]),t}function d(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t[2]=Math.max(n[2],a[2]),t}function b(t,n=0,a=1){return t[0]=Math.min(Math.max(t[0],n),a),t[1]=Math.min(Math.max(t[1],n),a),t[2]=Math.min(Math.max(t[2],n),a),t}function x(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t}function g(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t}function q(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t}function p(t,n){const a=n[0]-t[0],r=n[1]-t[1],s=n[2]-t[2];return Math.sqrt(a*a+r*r+s*s)}function v(t,n){const a=n[0]-t[0],r=n[1]-t[1],s=n[2]-t[2];return a*a+r*r+s*s}function j(t){const n=t[0],a=t[1],r=t[2];return n*n+a*a+r*r}function y(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t}function z(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t}function A(t,n){const a=n[0],r=n[1],s=n[2];let o=a*a+r*r+s*s;return o>0&&(o=1/Math.sqrt(o),t[0]=n[0]*o,t[1]=n[1]*o,t[2]=n[2]*o),t}function P(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function _(t,n,a){const r=n[0],s=n[1],o=n[2],u=a[0],c=a[1],e=a[2];return t[0]=s*e-o*c,t[1]=o*u-r*e,t[2]=r*c-s*u,t}function D(t,n,a){const r=n[0],s=n[1],o=n[2],u=a[0],c=a[1],e=a[2],i=s*e-o*c,h=o*u-r*e,M=r*c-s*u,f=Math.sqrt(i*i+h*h+M*M);return t[0]=i/f,t[1]=h/f,t[2]=M/f,t}function I(t,n,a,r){const s=n[0],o=n[1],u=n[2];return t[0]=s+r*(a[0]-s),t[1]=o+r*(a[1]-o),t[2]=u+r*(a[2]-u),t}function L(t,n,a,r,s,o){const u=o*o,c=u*(2*o-3)+1,e=u*(o-2)+o,i=u*(o-1),h=u*(3-2*o);return t[0]=n[0]*c+a[0]*e+r[0]*i+s[0]*h,t[1]=n[1]*c+a[1]*e+r[1]*i+s[1]*h,t[2]=n[2]*c+a[2]*e+r[2]*i+s[2]*h,t}function O(t,n,a,r,s,o){const u=1-o,c=u*u,e=o*o,i=c*u,h=3*o*c,M=3*e*u,f=e*o;return t[0]=n[0]*i+a[0]*h+r[0]*M+s[0]*f,t[1]=n[1]*i+a[1]*h+r[1]*M+s[1]*f,t[2]=n[2]*i+a[2]*h+r[2]*M+s[2]*f,t}function S(t,n=1){const r=_core_libs_gl_matrix_2_math_common_js__WEBPACK_IMPORTED_MODULE_1__/* .RANDOM */ .Ov,s=2*r()*Math.PI,o=2*r()-1,u=Math.sqrt(1-o*o)*n;return t[0]=Math.cos(s)*u,t[1]=Math.sin(s)*u,t[2]=o*n,t}function E(t,n,a){const r=n[0],s=n[1],o=n[2];return t[0]=a[0]*r+a[4]*s+a[8]*o+a[12],t[1]=a[1]*r+a[5]*s+a[9]*o+a[13],t[2]=a[2]*r+a[6]*s+a[10]*o+a[14],t}function N(t,n,a){const r=n[0],s=n[1],o=n[2];return t[0]=r*a[0]+s*a[3]+o*a[6],t[1]=r*a[1]+s*a[4]+o*a[7],t[2]=r*a[2]+s*a[5]+o*a[8],t}function Q(t,n,a){const r=a[0],s=a[1],o=a[2],u=a[3],c=n[0],e=n[1],i=n[2],h=s*i-o*e,M=o*c-r*i,f=r*e-s*c,m=s*f-o*M,l=o*h-r*f,d=r*M-s*h,b=2*u;return t[0]=c+h*b+2*m,t[1]=e+M*b+2*l,t[2]=i+f*b+2*d,t}function T(t,n,a,r){const s=[],o=[];return s[0]=n[0]-a[0],s[1]=n[1]-a[1],s[2]=n[2]-a[2],o[0]=s[0],o[1]=s[1]*Math.cos(r)-s[2]*Math.sin(r),o[2]=s[1]*Math.sin(r)+s[2]*Math.cos(r),t[0]=o[0]+a[0],t[1]=o[1]+a[1],t[2]=o[2]+a[2],t}function k(t,n,a,r){const s=[],o=[];return s[0]=n[0]-a[0],s[1]=n[1]-a[1],s[2]=n[2]-a[2],o[0]=s[2]*Math.sin(r)+s[0]*Math.cos(r),o[1]=s[1],o[2]=s[2]*Math.cos(r)-s[0]*Math.sin(r),t[0]=o[0]+a[0],t[1]=o[1]+a[1],t[2]=o[2]+a[2],t}function w(t,n,a,r){const s=[],o=[];return s[0]=n[0]-a[0],s[1]=n[1]-a[1],s[2]=n[2]-a[2],o[0]=s[0]*Math.cos(r)-s[1]*Math.sin(r),o[1]=s[0]*Math.sin(r)+s[1]*Math.cos(r),o[2]=s[2],t[0]=o[0]+a[0],t[1]=o[1]+a[1],t[2]=o[2]+a[2],t}function B(t,n){A(C,t),A(F,n);const a=P(C,F);return a>1?0:a<-1?Math.PI:Math.acos(a)}const C=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .create */ .vt)(),F=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .create */ .vt)();function G(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"}function H(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]}function J(t,a){if(t===a)return!0;const r=t[0],s=t[1],o=t[2],u=a[0],c=a[1],e=a[2],i=(0,_core_libs_gl_matrix_2_math_common_js__WEBPACK_IMPORTED_MODULE_1__/* .getEpsilon */ .FD)();return Math.abs(r-u)<=i*Math.max(1,Math.abs(r),Math.abs(u))&&Math.abs(s-c)<=i*Math.max(1,Math.abs(s),Math.abs(c))&&Math.abs(o-e)<=i*Math.max(1,Math.abs(o),Math.abs(e))}function K(t,n,a){const r=a[0]-n[0],s=a[1]-n[1],o=a[2]-n[2];let u=r*r+s*s+o*o;return u>0?(u=1/Math.sqrt(u),t[0]=r*u,t[1]=s*u,t[2]=o*u,t):(t[0]=0,t[1]=0,t[2]=0,t)}const R=c,U=e,V=i,W=p,X=v,Y=r,Z=j,$=Object.freeze(Object.defineProperty({__proto__:null,abs:f,add:u,angle:B,bezier:O,ceil:h,clamp:b,copy:s,cross:_,crossAndNormalize:D,direction:K,dist:W,distance:p,div:V,divide:i,dot:P,equals:J,exactEquals:H,floor:M,hermite:L,inverse:z,len:Y,length:r,lerp:I,max:d,min:l,mul:U,multiply:e,negate:y,normalize:A,random:S,rotateX:T,rotateY:k,rotateZ:w,round:x,scale:g,scaleAndAdd:q,set:o,sign:m,sqrDist:X,sqrLen:Z,squaredDistance:v,squaredLength:j,str:G,sub:R,subtract:c,transformMat3:N,transformMat4:E,transformQuat:Q},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 80575:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ie: () => (/* binding */ a)
/* harmony export */ });
/* unused harmony exports Cyclical, cyclical2PI, cyclicalPI */
/* harmony import */ var _mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4506);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class n{constructor(t,n){this.min=t,this.max=n,this.range=n-t}normalize(t,n=0,o=!1){return i(this.range,this.min,this.max,t,n,o)}clamp(n,i=0){return (0,_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .clamp */ .qE)(n-i,this.min,this.max)+i}monotonic(t,n,i){return t<n?n:n+o(this.range,t-n,i)}minimalMonotonic(t,n,o){return i(this.range,t,t+this.range,n,o)}center(t,n,i){return n=this.monotonic(t,n,i),this.normalize((t+n)/2,i)}diff(t,n,i){return this.monotonic(t,n,i)-t}shortestSignedDiff(t,n){t=this.normalize(t);const i=(n=this.normalize(n))-t,o=n<t?this.minimalMonotonic(t,n)-t:n-this.minimalMonotonic(n,t);return Math.abs(i)<Math.abs(o)?i:o}contains(t,n,i){return n=this.minimalMonotonic(t,n),(i=this.minimalMonotonic(t,i))>t&&i<n}}function i(t,n,i,r,s=0,a=!1){return(r-=s)<n?r+=o(t,n-r):r>i&&(r-=o(t,r-i)),a&&r===i&&(r=n),r+s}function o(t,n,i=0){return Math.ceil((n-i)/t)*t+i}const r=new n(0,2*Math.PI),s=new n(-Math.PI,Math.PI),a=new n(0,360);


/***/ }),

/***/ 82444:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _nextTick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71709);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class s{constructor(t){this._allocator=t,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,_nextTick_js__WEBPACK_IMPORTED_MODULE_0__/* .nextTick */ .d)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*i);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,i));t++)this._items.push(this._allocator())}}const i=1024;


/***/ }),

/***/ 79441:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fA: () => (/* binding */ n),
/* harmony export */   vt: () => (/* binding */ e),
/* harmony export */   zK: () => (/* binding */ r)
/* harmony export */ });
/* unused harmony exports clone, m */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(){return[1,0,0,0,1,0,0,0,1]}function t(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]}function n(e,t,n,r,o,u,c,l,f){return[e,t,n,r,o,u,c,l,f]}const r=e(),o=Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:r,clone:t,create:e,fromValues:n},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 26110:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o8: () => (/* binding */ t),
/* harmony export */   vt: () => (/* binding */ e),
/* harmony export */   zK: () => (/* binding */ r)
/* harmony export */ });
/* unused harmony exports fromValues, m */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function t(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function n(e,t,n,r,o,u,c,l,f,a,i,_,b,m,p,s){return[e,t,n,r,o,u,c,l,f,a,i,_,b,m,p,s]}const r=e(),o=Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:r,clone:t,create:e,fromValues:n},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 19165:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o8: () => (/* binding */ t),
/* harmony export */   vt: () => (/* binding */ e),
/* harmony export */   zK: () => (/* binding */ r)
/* harmony export */ });
/* unused harmony exports fromValues, q */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(){return[0,0,0,1]}function t(e){return[e[0],e[1],e[2],e[3]]}function n(e,t,n,r){return[e,t,n,r]}const r=e(),o=Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:r,clone:t,create:e,fromValues:n},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 56560:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Un: () => (/* binding */ a),
/* harmony export */   fA: () => (/* binding */ r),
/* harmony export */   vt: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony exports UNIT_X, UNIT_Y, ZEROS, clone, freeze, fromArray, ones, unitX, unitY, v, zeros */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function n(){return[0,0]}function t(n){return[n[0],n[1]]}function r(n,t){return[n,t]}function e(n,t){return[n,t]}function o(t,r=n()){const e=Math.min(2,t.length);for(let n=0;n<e;++n)r[n]=t[n];return r}function u(){return n()}function c(){return r(1,1)}function f(){return r(1,0)}function i(){return r(0,1)}const l=u(),a=c(),s=f(),_=i(),m=Object.freeze(Object.defineProperty({__proto__:null,ONES:a,UNIT_X:s,UNIT_Y:_,ZEROS:l,clone:t,create:n,freeze:e,fromArray:o,fromValues:r,ones:c,unitX:f,unitY:i,zeros:u},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 82541:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B8: () => (/* binding */ s),
/* harmony export */   Ge: () => (/* binding */ j),
/* harmony export */   I0: () => (/* binding */ p),
/* harmony export */   KC: () => (/* binding */ c),
/* harmony export */   hZ: () => (/* binding */ r),
/* harmony export */   hs: () => (/* binding */ f),
/* harmony export */   lw: () => (/* binding */ i),
/* harmony export */   mg: () => (/* binding */ u),
/* harmony export */   z0: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony exports add, copy, determinant, equals, exactEquals, frob, fromMat2d, fromRotation, fromScaling, fromTranslation, identity, isOrthoNormal, m, mul, multiplyScalar, multiplyScalarAndAdd, normalFromMat4Legacy, projection, rotate, scaleByVec2, str, sub, subtract, translate */
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78115);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function n(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[4],t[4]=n[5],t[5]=n[6],t[6]=n[8],t[7]=n[9],t[8]=n[10],t}function a(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t}function r(t,n,a,r,o,u,s,c,e,i){return t[0]=n,t[1]=a,t[2]=r,t[3]=o,t[4]=u,t[5]=s,t[6]=c,t[7]=e,t[8]=i,t}function o(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function u(t,n){if(t===n){const a=n[1],r=n[2],o=n[5];t[1]=n[3],t[2]=n[6],t[3]=a,t[5]=n[7],t[6]=r,t[7]=o}else t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8];return t}function s(t,n){const a=n[0],r=n[1],o=n[2],u=n[3],s=n[4],c=n[5],e=n[6],i=n[7],M=n[8],h=M*s-c*i,f=-M*u+c*e,b=i*u-s*e;let l=a*h+r*f+o*b;return l?(l=1/l,t[0]=h*l,t[1]=(-M*r+o*i)*l,t[2]=(c*r-o*s)*l,t[3]=f*l,t[4]=(M*a-o*e)*l,t[5]=(-c*a+o*u)*l,t[6]=b*l,t[7]=(-i*a+r*e)*l,t[8]=(s*a-r*u)*l,t):null}function c(t,n){const a=n[0],r=n[1],o=n[2],u=n[3],s=n[4],c=n[5],e=n[6],i=n[7],M=n[8];return t[0]=s*M-c*i,t[1]=o*i-r*M,t[2]=r*c-o*s,t[3]=c*e-u*M,t[4]=a*M-o*e,t[5]=o*u-a*c,t[6]=u*i-s*e,t[7]=r*e-a*i,t[8]=a*s-r*u,t}function e(t){const n=t[0],a=t[1],r=t[2],o=t[3],u=t[4],s=t[5],c=t[6],e=t[7],i=t[8];return n*(i*u-s*e)+a*(-i*o+s*c)+r*(e*o-u*c)}function i(t,n,a){const r=n[0],o=n[1],u=n[2],s=n[3],c=n[4],e=n[5],i=n[6],M=n[7],h=n[8],f=a[0],b=a[1],l=a[2],m=a[3],d=a[4],x=a[5],p=a[6],y=a[7],j=a[8];return t[0]=f*r+b*s+l*i,t[1]=f*o+b*c+l*M,t[2]=f*u+b*e+l*h,t[3]=m*r+d*s+x*i,t[4]=m*o+d*c+x*M,t[5]=m*u+d*e+x*h,t[6]=p*r+y*s+j*i,t[7]=p*o+y*c+j*M,t[8]=p*u+y*e+j*h,t}function M(t,n,a){const r=n[0],o=n[1],u=n[2],s=n[3],c=n[4],e=n[5],i=n[6],M=n[7],h=n[8],f=a[0],b=a[1];return t[0]=r,t[1]=o,t[2]=u,t[3]=s,t[4]=c,t[5]=e,t[6]=f*r+b*s+i,t[7]=f*o+b*c+M,t[8]=f*u+b*e+h,t}function h(t,n,a){const r=n[0],o=n[1],u=n[2],s=n[3],c=n[4],e=n[5],i=n[6],M=n[7],h=n[8],f=Math.sin(a),b=Math.cos(a);return t[0]=b*r+f*s,t[1]=b*o+f*c,t[2]=b*u+f*e,t[3]=b*s-f*r,t[4]=b*c-f*o,t[5]=b*e-f*u,t[6]=i,t[7]=M,t[8]=h,t}function f(t,n,a){const r=a[0],o=a[1],u=a[2];return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=o*n[3],t[4]=o*n[4],t[5]=o*n[5],t[6]=u*n[6],t[7]=u*n[7],t[8]=u*n[8],t}function b(t,n,a){const r=a[0],o=a[1];return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=o*n[3],t[4]=o*n[4],t[5]=o*n[5],t}function l(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=n[0],t[7]=n[1],t[8]=1,t}function m(t,n){const a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=0,t[3]=-a,t[4]=r,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function d(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=n[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function x(t,n){return t[0]=n[0],t[1]=n[1],t[2]=0,t[3]=n[2],t[4]=n[3],t[5]=0,t[6]=n[4],t[7]=n[5],t[8]=1,t}function p(t,n){const a=n[0],r=n[1],o=n[2],u=n[3],s=a+a,c=r+r,e=o+o,i=a*s,M=r*s,h=r*c,f=o*s,b=o*c,l=o*e,m=u*s,d=u*c,x=u*e;return t[0]=1-h-l,t[3]=M-x,t[6]=f+d,t[1]=M+x,t[4]=1-i-l,t[7]=b-m,t[2]=f-d,t[5]=b+m,t[8]=1-i-h,t}function y(t,n){const a=n[0],r=n[1],o=n[2],u=n[4],s=n[5],c=n[6],e=n[8],i=n[9],M=n[10],h=M*s-c*i,f=-M*u+c*e,b=i*u-s*e,l=a*h+r*f+o*b;if(!l)return null;const m=1/l;return t[0]=h*m,t[1]=(-M*r+o*i)*m,t[2]=(c*r-o*s)*m,t[3]=f*m,t[4]=(M*a-o*e)*m,t[5]=(-c*a+o*u)*m,t[6]=b*m,t[7]=(-i*a+r*e)*m,t[8]=(s*a-r*u)*m,t}function j(t,n){const a=n[0],r=n[1],o=n[2],u=n[3],s=n[4],c=n[5],e=n[6],i=n[7],M=n[8],h=n[9],f=n[10],b=n[11],l=n[12],m=n[13],d=n[14],x=n[15],p=a*c-r*s,y=a*e-o*s,j=a*i-u*s,S=r*e-o*c,g=r*i-u*c,_=o*i-u*e,q=M*m-h*l,O=M*d-f*l,v=M*x-b*l,A=h*d-f*m,F=h*x-b*m,T=f*x-b*d;let z=p*T-y*F+j*A+S*v-g*O+_*q;return z?(z=1/z,t[0]=(c*T-e*F+i*A)*z,t[1]=(e*v-s*T-i*O)*z,t[2]=(s*F-c*v+i*q)*z,t[3]=(o*F-r*T-u*A)*z,t[4]=(a*T-o*v+u*O)*z,t[5]=(r*v-a*F-u*q)*z,t[6]=(m*_-d*g+x*S)*z,t[7]=(d*j-l*_-x*y)*z,t[8]=(l*g-m*j+x*p)*z,t):null}function S(t,n,a){return t[0]=2/n,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/a,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t}function g(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"}function _(t){return Math.sqrt(t[0]**2+t[1]**2+t[2]**2+t[3]**2+t[4]**2+t[5]**2+t[6]**2+t[7]**2+t[8]**2)}function q(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t[6]=n[6]+a[6],t[7]=n[7]+a[7],t[8]=n[8]+a[8],t}function O(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t[4]=n[4]-a[4],t[5]=n[5]-a[5],t[6]=n[6]-a[6],t[7]=n[7]-a[7],t[8]=n[8]-a[8],t}function v(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t[8]=n[8]*a,t}function A(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t[4]=n[4]+a[4]*r,t[5]=n[5]+a[5]*r,t[6]=n[6]+a[6]*r,t[7]=n[7]+a[7]*r,t[8]=n[8]+a[8]*r,t}function F(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]}function T(n,a){const r=n[0],o=n[1],u=n[2],s=n[3],c=n[4],e=n[5],i=n[6],M=n[7],h=n[8],f=a[0],b=a[1],l=a[2],m=a[3],d=a[4],x=a[5],p=a[6],y=a[7],j=a[8],S=(0,_common_js__WEBPACK_IMPORTED_MODULE_0__/* .getEpsilon */ .FD)();return Math.abs(r-f)<=S*Math.max(1,Math.abs(r),Math.abs(f))&&Math.abs(o-b)<=S*Math.max(1,Math.abs(o),Math.abs(b))&&Math.abs(u-l)<=S*Math.max(1,Math.abs(u),Math.abs(l))&&Math.abs(s-m)<=S*Math.max(1,Math.abs(s),Math.abs(m))&&Math.abs(c-d)<=S*Math.max(1,Math.abs(c),Math.abs(d))&&Math.abs(e-x)<=S*Math.max(1,Math.abs(e),Math.abs(x))&&Math.abs(i-p)<=S*Math.max(1,Math.abs(i),Math.abs(p))&&Math.abs(M-y)<=S*Math.max(1,Math.abs(M),Math.abs(y))&&Math.abs(h-j)<=S*Math.max(1,Math.abs(h),Math.abs(j))}function z(n){const a=(0,_common_js__WEBPACK_IMPORTED_MODULE_0__/* .getEpsilon */ .FD)(),r=n[0],o=n[1],u=n[2],s=n[3],c=n[4],e=n[5],i=n[6],M=n[7],h=n[8];return Math.abs(1-(r*r+s*s+i*i))<=a&&Math.abs(1-(o*o+c*c+M*M))<=a&&Math.abs(1-(u*u+e*e+h*h))<=a}const B=i,E=O,L=Object.freeze(Object.defineProperty({__proto__:null,add:q,adjoint:c,copy:a,determinant:e,equals:T,exactEquals:F,frob:_,fromMat2d:x,fromMat4:n,fromQuat:p,fromRotation:m,fromScaling:d,fromTranslation:l,identity:o,invert:s,isOrthoNormal:z,mul:B,multiply:i,multiplyScalar:v,multiplyScalarAndAdd:A,normalFromMat4:j,normalFromMat4Legacy:y,projection:S,rotate:h,scale:f,scaleByVec2:b,set:r,str:g,sub:E,subtract:O,translate:M,transpose:u},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 63918:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ v),
/* harmony export */   Cr: () => (/* binding */ S),
/* harmony export */   LV: () => (/* binding */ k),
/* harmony export */   kb: () => (/* binding */ w),
/* harmony export */   oC: () => (/* binding */ y),
/* harmony export */   vt: () => (/* binding */ b)
/* harmony export */ });
/* unused harmony exports closestPoints, equals, fromValues */
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3223);
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82444);
/* harmony import */ var _core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82541);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79441);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80347);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19913);
/* harmony import */ var _vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83339);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function b(i){return i?h((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .clone */ .o8)(i.origin),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .clone */ .o8)(i.direction)):h((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)())}function h(i,r){return{origin:i,direction:r}}function x(r,n){return i(r.origin,n.origin)&&i(r.direction,n.direction)}function k(i,r){const n=O.get();return n.origin=i,n.direction=r,n}function v(i,r=b()){return q(i.origin,i.direction,r)}function S(i,r,n=b()){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.c)(n.origin,i),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.d)(n.direction,r,i),n}function q(i,r,n=b()){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.c)(n.origin,i),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.c)(n.direction,r),n}function w(i,r){const n=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.h)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__/* .sv3d */ .rq.get(),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.n)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__/* .sv3d */ .rq.get(),i.direction),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.d)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__/* .sv3d */ .rq.get(),r,i.origin));return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.e)(n,n)}function y(i,r,n){const t=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.e)(i.direction,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.d)(n,r,i.origin));return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.f)(n,i.origin,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.g)(n,i.direction,t)),n}function M(i,r,o,e){const c=i.origin,l=r.origin,j=i.direction,p=r.direction,b=s(g(z,j),g(A,p));if(Math.abs(b)>=1)return null;const h=f(z,j,p),x=m(U,l,c),k=n(B,j[0],j[1],j[2],-p[0],-p[1],-p[2],h[0],h[1],h[2]),v=t(B,k);if(null==v)return[o,e];const S=s(d(z,v[0],v[3],v[6]),x),q=s(d(A,v[1],v[4],v[7]),x);return a(o,c,u(U,j,S)),a(e,l,u(U,p,q)),[o,e]}const O=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_6__/* .ObjectStack */ .I((()=>b())),U=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),z=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),A=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),B=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)();


/***/ }),

/***/ 74695:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EJ: () => (/* binding */ u),
/* harmony export */   g7: () => (/* binding */ f),
/* harmony export */   gr: () => (/* binding */ a)
/* harmony export */ });
/* unused harmony export projectPoint */
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4506);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80347);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19913);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function i(t,r,o){const s=n(t,r)/n(t,t);return c(o,t,s)}function a(t,r){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.e)(t,r)/(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.l)(t)}function f(r,o){const c=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.e)(r,o)/((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.l)(r)*(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.l)(o));return-(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .acosClamped */ .XM)(c)}function u(s,c,e){(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.n)(m,s),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.n)(h,c);const i=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.e)(m,h),a=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .acosClamped */ .XM)(i),f=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.h)(m,m,h);return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.e)(f,e)<0?2*Math.PI-a:a}const m=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)(),h=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)();


/***/ }),

/***/ 83339:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Rc: () => (/* binding */ f),
  J8: () => (/* binding */ o),
  rq: () => (/* binding */ c),
  Km: () => (/* binding */ r)
});

// UNUSED EXPORTS: sm3d, sv2d

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/nextTick.js
var nextTick = __webpack_require__(71709);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js
var mat3f64 = __webpack_require__(79441);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js
var mat4f64 = __webpack_require__(26110);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/quatf64.js
var quatf64 = __webpack_require__(19165);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec2f64.js
var vec2f64 = __webpack_require__(56560);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(19913);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js
var vec4f64 = __webpack_require__(76982);
;// ./node_modules/@arcgis/core/core/VectorStack.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class m{constructor(t){this._create=t,this._items=new Array,this._itemsPtr=0}get(){return 0===this._itemsPtr&&(0,nextTick/* nextTick */.d)((()=>this._reset())),this._itemsPtr>=this._items.length&&this._items.push(this._create()),this._items[this._itemsPtr++]}_reset(){const t=2*this._itemsPtr;this._items.length>t&&(this._items.length=t),this._itemsPtr=0}static createVec2f64(){return new m(vec2f64/* create */.vt)}static createVec3f64(){return new m(vec3f64/* create */.vt)}static createVec4f64(){return new m(vec4f64/* create */.vt)}static createMat3f64(){return new m(mat3f64/* create */.vt)}static createMat4f64(){return new m(mat4f64/* create */.vt)}static createQuatf64(){return new m(quatf64/* create */.vt)}get test(){}}

;// ./node_modules/@arcgis/core/geometry/support/vectorStacks.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const t=m.createVec2f64(),c=m.createVec3f64(),r=m.createVec4f64(),a=m.createMat3f64(),f=m.createMat4f64(),o=m.createQuatf64();


/***/ }),

/***/ 20265:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ u)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/analysis/featureReferenceUtils.js + 6 modules
var featureReferenceUtils = __webpack_require__(35568);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(14755);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Cyclical.js
var Cyclical = __webpack_require__(80575);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(22395);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(57725);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(77380);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(8636);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Point.js + 1 modules
var Point = __webpack_require__(30214);
;// ./node_modules/@arcgis/core/analysis/Viewshed.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let c=class extends(JSONSupport/* default */.A.JSONSupportMixin(Clonable/* default */.A)){constructor(e){super(e),this.observer=null,this.farDistance=1e3,this.heading=0,this.tilt=90,this.horizontalFieldOfView=45,this.verticalFieldOfView=45,this.feature=null}get valid(){return null!=this.observer&&this.farDistance>0}equals(e){return (0,maybe/* equalsMaybe */.CM)(this.observer,e.observer)&&this.farDistance===e.farDistance&&this.heading===e.heading&&this.tilt===e.tilt&&this.horizontalFieldOfView===e.horizontalFieldOfView&&this.verticalFieldOfView===e.verticalFieldOfView&&(0,featureReferenceUtils/* featureReferenceEquals */.xH)(this.feature,e.feature)}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Point/* default */.A,json:{write:{isRequired:!0}}})],c.prototype,"observer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,nonNullable:!0,range:{min:0},json:{write:{isRequired:!0}}})],c.prototype,"farDistance",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),(0,cast/* cast */.w)((e=>Cyclical/* cyclicalDegrees */.ie.normalize((0,ensureType/* ensureNumber */.GB)(e),void 0,!0)))],c.prototype,"heading",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],c.prototype,"tilt",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,nonNullable:!0,range:{min:0,max:360},json:{write:{isRequired:!0}}})],c.prototype,"horizontalFieldOfView",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],c.prototype,"verticalFieldOfView",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(featureReferenceUtils/* featureReferenceProperty */.N1)],c.prototype,"feature",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],c.prototype,"valid",null),c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.analysis.Viewshed")],c);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/analysis/Analysis.js + 1 modules
var Analysis = __webpack_require__(96932);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(3223);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(54192);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/collectionUtils.js
var collectionUtils = __webpack_require__(48);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(4506);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(61985);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(8000);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/projectionUtils.js + 3 modules
var projectionUtils = __webpack_require__(27646);
;// ./node_modules/@arcgis/core/analysis/ViewshedAnalysis.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const v=Collection/* default */.A.ofType(c);let y=class extends Analysis/* default */.A{constructor(e){super(e),this.type="viewshed",this._extent=null}initialize(){this.addHandles((0,reactiveUtils/* watch */.wB)((()=>this._computeExtent()),(e=>{null==e.pending&&(this._extent=e.extent)}),reactiveUtils/* syncAndInitial */.pc))}get viewsheds(){return this._get("viewsheds")||new v}set viewsheds(e){this._set("viewsheds",(0,collectionUtils/* referenceSetter */.V)(e,this.viewsheds,v))}get spatialReference(){for(const e of this.viewsheds)if(null!=e.observer)return e.observer.spatialReference;return null}get extent(){return this._extent}get valid(){return this.viewsheds.every((e=>e.valid))}async waitComputeExtent(){const e=this._computeExtent();null!=e.pending&&await e.pending}_computeExtent(){const{spatialReference:e}=this;if(null==e)return{pending:null,extent:null};const t=this.viewsheds.filter((e=>null!=e.observer)),r=t.map((e=>e.observer)).toArray(),s=(0,projectionUtils.projectOrLoadMany)(r,e);if(null!=s.pending)return{pending:s.pending,extent:null};return{pending:null,extent:s.geometries.map(((e,r)=>{const s=t.at(r);return null!=e&&null!=s?this._computeViewshedExtent(this.viewsheds.at(r),e):null})).filter((e=>null!=e)).reduce(((e,t)=>x(e,t)),null)}}_computeViewshedExtent(e,t){const{farDistance:r,heading:s,tilt:n,horizontalFieldOfView:i,verticalFieldOfView:o}=e,{spatialReference:u}=t,c=i/2,m=o/2,h=r/u.metersPerUnit,f=[Cyclical/* cyclicalDegrees */.ie.normalize(s-c),s,Cyclical/* cyclicalDegrees */.ie.normalize(s+c)],v=Extent/* default */.A.fromPoint(t),y=e=>{const t=f.map((t=>Cyclical/* cyclicalDegrees */.ie.normalize(t-e)));if(t[0]>t[2]||360===i)return h;const r=t.map((e=>Math.abs(e>180?360-e:e))).reduce(((e,t)=>e>t?t:e));return r>90?0:h*Math.cos((0,mathUtils/* deg2rad */.kU)(r))};v.xmax+=y(90),v.xmin-=y(-90),v.ymax+=y(0),v.ymin-=y(180);const x=t.z;if(null!=x){let e=x,t=x;const s=n-90,i=(0,mathUtils/* clamp */.qE)(s+m,-90,90),o=(0,mathUtils/* clamp */.qE)(s-m,-90,90),l=u?.isGeographic?r:h;e+=l*g(i),t+=l*g(o);const a=w(m)*l,d=g(s)*a*(1-w(c));n<90&&(e-=d),n>90&&(t-=d),v.zmax=Math.max(e,x),v.zmin=Math.min(t,x)}return v}equals(e){return this===e||super.equals(e)&&(0,arrayUtils/* equals */.aI)(this.viewsheds.toArray(),e.viewsheds.toArray(),((e,t)=>e.equals(t)))}clear(){this.viewsheds.removeAll()}};function x(e,t){return null==e?t:null==t?e:e.union(t)}function w(e){return Math.cos((0,mathUtils/* deg2rad */.kU)(e))}function g(e){return Math.sin((0,mathUtils/* deg2rad */.kU)(e))}(0,tslib_es6._)([(0,property/* property */.MZ)({type:["viewshed"]})],y.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({cast:collectionUtils/* castForReferenceSetter */.H,type:v,nonNullable:!0})],y.prototype,"viewsheds",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],y.prototype,"spatialReference",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],y.prototype,"_extent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],y.prototype,"extent",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],y.prototype,"valid",null),y=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.analysis.ViewshedAnalysis")],y);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(33125);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(48524);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/Layer.js + 1 modules
var Layer = __webpack_require__(41247);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(90296);
;// ./node_modules/@arcgis/core/layers/ViewshedLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let ViewshedLayer_y=class extends((0,OperationalLayer/* OperationalLayer */.q)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)(Layer/* default */.A))){constructor(e){super(e),this.type="viewshed",this.operationalLayerType="ViewshedLayer",this.source=new y,this.opacity=1}initialize(){this.addHandles((0,reactiveUtils/* watch */.wB)((()=>this.source),((e,r)=>{null!=r&&r.parent===this&&(r.parent=null),null!=e&&(e.parent=this)}),reactiveUtils/* syncAndInitial */.pc))}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new y)}get analysis(){return this.source}set analysis(e){this.source=e}get viewsheds(){return this.source.viewsheds}set viewsheds(e){this.source.viewsheds=e}writeViewsheds(e,r,s,t){r.viewsheds=e.filter((e=>e.valid)).toJSON(t)}};(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1},readOnly:!0})],ViewshedLayer_y.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["ViewshedLayer"]})],ViewshedLayer_y.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:y,nonNullable:!0})],ViewshedLayer_y.prototype,"source",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],ViewshedLayer_y.prototype,"spatialReference",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],ViewshedLayer_y.prototype,"fullExtent",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],ViewshedLayer_y.prototype,"opacity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide"]})],ViewshedLayer_y.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(c),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],ViewshedLayer_y.prototype,"viewsheds",null),(0,tslib_es6._)([(0,writer/* writer */.K)("web-scene","viewsheds")],ViewshedLayer_y.prototype,"writeViewsheds",null),ViewshedLayer_y=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.ViewshedLayer")],ViewshedLayer_y);const u=ViewshedLayer_y;


/***/ }),

/***/ 30165:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports IntersectorOptions, StoreResults */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class e{constructor(){this.verticalOffset=0,this.selectionMode=!1,this.hud=!0,this.selectOpaqueTerrainOnly=!0,this.invisibleTerrain=!1,this.backfacesTerrain=!0,this.isFiltered=!1,this.filteredLayerViewUids=[],this.store=i.ALL,this.normalRequired=!0,this.excludeLabels=!1}}var i;!function(e){e[e.MIN=0]="MIN",e[e.MINMAX=1]="MINMAX",e[e.ALL=2]="ALL"}(i||(i={}));


/***/ }),

/***/ 40476:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ p)
/* harmony export */ });
/* unused harmony export isValidIntersectorResult */
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25336);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26110);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80347);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19913);
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74772);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76982);
/* harmony import */ var _geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63918);
/* harmony import */ var _IntersectorType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33409);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class p{get ray(){return this._ray}get distanceInRenderSpace(){return null==this.distance?null:((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.g)(u,this.ray.direction,this.distance),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.l)(u))}withinDistance(t){return!!g(this)&&this.distanceInRenderSpace<=t}getIntersectionPoint(t){return!!g(this)&&((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.g)(u,this.ray.direction,this.distance),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.f)(t,this.ray.origin,u),!0)}getTransformedNormal(t){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.c)(j,this.normal),j[3]=0,(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_4__.t)(j,j,this.transformation),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.c)(t,j),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.n)(t,t)}constructor(t){this.intersector=_IntersectorType_js__WEBPACK_IMPORTED_MODULE_7__/* .IntersectorType */ .d.OBJECT,this.normal=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .vt)(),this.transformation=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)(),this._ray=(0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),this.init(t)}init(t){this.distance=this.target=this.drapedLayerOrder=this.renderPriority=null,this.intersector=_IntersectorType_js__WEBPACK_IMPORTED_MODULE_7__/* .IntersectorType */ .d.OBJECT,(0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_6__/* .copy */ .C)(t,this._ray)}set(r,s,e,a,o,c,m){this.intersector=r,this.distance=e,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.c)(this.normal,a??_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .UNIT_Z */ .Cb),(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__/* .copy */ .C)(this.transformation,o??_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__/* .IDENTITY */ .zK),this.target=s,this.drapedLayerOrder=c,this.renderPriority=m}copy(r){(0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_6__/* .copy */ .C)(r.ray,this._ray),this.intersector=r.intersector,this.distance=r.distance,this.target=r.target,this.drapedLayerOrder=r.drapedLayerOrder,this.renderPriority=r.renderPriority,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.c)(this.normal,r.normal),(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__/* .copy */ .C)(this.transformation,r.transformation)}}function g(t){return null!=t?.distance}const u=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .vt)(),j=(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__/* .create */ .vt)();


/***/ }),

/***/ 76388:
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

/***/ 33409:
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

/***/ 62847:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports LodTarget, isLodIntersectorResult */
/* harmony import */ var _IntersectorResult_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40476);
/* harmony import */ var _IntersectorTarget_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76388);
/* harmony import */ var _IntersectorType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33409);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class s extends _IntersectorTarget_js__WEBPACK_IMPORTED_MODULE_1__/* .Graphic3DTarget */ .R{constructor(r,t,e,s,i){super(r,t),this.layerViewUid=r,this.graphicUid=t,this.triangleNr=e,this.baseBoundingSphere=s,this.numLodLevels=i}}function i(t){return r(t)&&t.intersector===e.LOD&&!!t.target}


/***/ })

};
;