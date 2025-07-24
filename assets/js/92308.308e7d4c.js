"use strict";
exports.id = 92308;
exports.ids = [92308];
exports.modules = {

/***/ 92308:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SelfSnappingEngine: () => (/* binding */ SelfSnappingEngine_h)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(52495);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(48982);
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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Cyclical.js
var Cyclical = __webpack_require__(17505);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/quantityUtils.js
var quantityUtils = __webpack_require__(73569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(58359);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/elevationInfoUtils.js
var elevationInfoUtils = __webpack_require__(27451);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/sketch/normalizedPoint.js
var normalizedPoint = __webpack_require__(97847);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/unitUtils.js
var unitUtils = __webpack_require__(92976);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/math/vec2.js
var vec2 = __webpack_require__(60704);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/snapping/Settings.js
var Settings = __webpack_require__(1381);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/snapping/snappingUtils.js
var snappingUtils = __webpack_require__(61851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/support/viewUtils.js
var viewUtils = __webpack_require__(38175);
;// ../node_modules/@arcgis/core/views/interactive/snapping/SnappingAlgorithm.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class l{constructor(e,t){this.view=e,this.options=t,this.squaredShortLineThreshold=Settings/* defaults */.N.shortLineThreshold*Settings/* defaults */.N.shortLineThreshold}snap(e,t){return null!=t.vertexHandle?"vertex"!==t.vertexHandle.type?[]:this.snapExistingVertex(e,t):this.snapNewVertex(e,t)}edgeExceedsShortLineThreshold(e,t){return this.exceedsShortLineThreshold((0,normalizedPoint/* fromAnyMapPoint */.Lp)(e.leftVertex.pos,this.view,t),(0,normalizedPoint/* fromAnyMapPoint */.Lp)(e.rightVertex.pos,this.view,t),t)}exceedsShortLineThreshold(e,t,{spatialReference:s}){return 0===this.squaredShortLineThreshold||(0,snappingUtils/* squaredScreenDistance */.pM)((0,viewUtils/* vectorToScreenPoint */.j)(t,s,elevationInfoUtils/* absoluteHeightElevationInfo */.qt,this.view),(0,viewUtils/* vectorToScreenPoint */.j)(e,s,elevationInfoUtils/* absoluteHeightElevationInfo */.qt,this.view))>this.squaredShortLineThreshold}isVertical(r,s,{spatialReference:h}){const n=(0,unitUtils/* getMetersPerUnitForSR */.GA)(h);return (0,vec2/* distance */.Io)((0,normalizedPoint/* asVec2 */.Xz)(r),(0,normalizedPoint/* asVec2 */.Xz)(s))*n<Settings/* defaults */.N.verticalLineThresholdMeters}squaredProximityThreshold(e){return"touch"===e?this._squaredTouchProximityThreshold:this._squaredMouseProximityThreshold}get _squaredMouseProximityThreshold(){return this.options.distance*this.options.distance}get _squaredTouchProximityThreshold(){const{distance:e,touchSensitivityMultiplier:t}=this.options,r=e*t;return r*r}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/snapping/candidates/LineSnappingCandidate.js
var LineSnappingCandidate = __webpack_require__(59250);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/support/angularMeasurementUtils.js
var angularMeasurementUtils = __webpack_require__(52857);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/support/geometry3dUtils.js
var geometry3dUtils = __webpack_require__(29106);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/support/geometry2dUtils.js
var geometry2dUtils = __webpack_require__(41561);
;// ../node_modules/@arcgis/core/views/interactive/snapping/LineSnapper.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class E extends l{constructor(e,t,s){super(e,t),this._geodesicLengthMeasurementUtils=s}snapNewVertex(e,t){const s=t.editGeometryOperations.data.components[0],r=s.edges.length,i=[];if(r<1)return i;const{spatialReference:n}=t,a=(0,viewUtils/* vectorToScreenPoint */.j)(e,n,elevationInfoUtils/* absoluteHeightElevationInfo */.qt,this.view),{view:d}=this,l=s.edges[r-1];let h=l;do{if(this.edgeExceedsShortLineThreshold(h,t)){const s=(0,snappingUtils/* editEdgeToSnappingEdge */.is)(h,d,t);this._processCandidateProposal(s.left,s.right,e,a,t,i)}h=h.leftVertex.leftEdge}while(h&&h!==l);return i}snapExistingVertex(e,t){const s=[],r=t.vertexHandle,i=r.component;if(i.edges.length<2)return s;const{view:a}=this,{spatialReference:d}=t,l=(0,viewUtils/* vectorToScreenPoint */.j)(e,d,elevationInfoUtils/* absoluteHeightElevationInfo */.qt,a),h=r.leftEdge,c=r.rightEdge;h&&c&&this.edgeExceedsShortLineThreshold(h,t)&&this.edgeExceedsShortLineThreshold(c,t)&&this._processCandidateProposal((0,normalizedPoint/* fromAnyMapPoint */.Lp)(h.leftVertex.pos,a,t),(0,normalizedPoint/* fromAnyMapPoint */.Lp)(c.rightVertex.pos,a,t),e,l,t,s);const f=i.edges[0];let m=f;do{if(m!==r.leftEdge&&m!==r.rightEdge&&this.edgeExceedsShortLineThreshold(m,t)){const r=(0,snappingUtils/* editEdgeToSnappingEdge */.is)(m,a,t);this._processCandidateProposal(r.left,r.right,e,l,t,s)}m=m.rightVertex.rightEdge}while(m&&m!==f);return s}_processCandidateProposal(e,t,s,r,n,l){const{spatialReference:p,pointer:f}=n,m=(0,vec3f64/* create */.vt)();j(m,e,t,s,n,this._geodesicLengthMeasurementUtils);const u=(0,normalizedPoint/* markAsTarget */.de)((0,normalizedPoint/* fromVec3 */._7)(m));(0,snappingUtils/* squaredScreenDistance */.pM)(r,(0,viewUtils/* vectorToScreenPoint */.j)(u,p,elevationInfoUtils/* absoluteHeightElevationInfo */.qt,this.view))<this.squaredProximityThreshold(f)&&l.push(new LineSnappingCandidate/* LineSnappingCandidate */.o({lineStart:e,lineEnd:t,targetPoint:u,isDraped:"on-the-ground"===n.elevationInfo?.mode}))}}function j(e,t,s,r,i,o){v(e,t,s,r,i,o)||w(e,r,t,s)}function v(i,o,n,a,{spatialReference:d},l){const p=(0,angularMeasurementUtils/* radiansGeographicBetweenVec */.IP)(o,n,d,d);if(null==p)return!1;const h=(0,angularMeasurementUtils/* radiansGeographicBetweenVec */.IP)(n,a,d,d);if(null==h)return!1;const c=l.geodesicDistance(n,a,d);if(null==c)return!1;const g=Math.abs(Cyclical/* cyclicalPI */.wf.shortestSignedDiff(p,h))>Math.PI/2?Cyclical/* cyclical2PI */.uC.normalize(p+Math.PI):p;return (0,angularMeasurementUtils/* pointFromDistanceAlongAzimuth */.rT)(i,n,d,(0,quantityUtils/* valueInUnit */.l3)(c,"meters"),(0,quantityUtils/* createAngle */.Wq)(g,"radians","geographic"),"geodesic"),i[2]=a[2],!0}function w(e,t,s,r){(0,geometry3dUtils/* projectPointToLineLike */.Yv)(t,{start:s,end:r,type:geometry2dUtils/* LineType */.Vv.LINE},e),e[2]=t[2]}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec2f64.js
var vec2f64 = __webpack_require__(59646);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/snapping/candidates/ParallelLineSnappingCandidate.js
var ParallelLineSnappingCandidate = __webpack_require__(84819);
;// ../node_modules/@arcgis/core/views/interactive/snapping/ParallelLineSnapper.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class f extends l{snapNewVertex(e,t){const s=t.editGeometryOperations.data.components[0],o=s.edges.length,n=s.vertices.length,l=[];if(o<2)return l;const{view:a}=this,h=(0,viewUtils/* vectorToScreenPoint */.j)(e,t.spatialReference,elevationInfoUtils/* absoluteHeightElevationInfo */.qt,a),d=(0,normalizedPoint/* fromAnyMapPoint */.Lp)(s.vertices[n-1].pos,a,t),g=(0,normalizedPoint/* fromAnyMapPoint */.Lp)(s.vertices[0].pos,a,t),f=s.edges[o-1];let m=f;do{if(this.edgeExceedsShortLineThreshold(m,t)){const r=(0,snappingUtils/* editEdgeToSnappingEdge */.is)(m,a,t);this._checkEdgeForParallelLines(r,d,e,h,t,l),this._checkEdgeForParallelLines(r,g,e,h,t,l)}m=m.leftVertex.leftEdge}while(m&&m!==f);return l}snapExistingVertex(e,t){const s=[],o=t.vertexHandle,n=o.component;if(n.edges.length<3)return s;const{view:l}=this,a=(0,viewUtils/* vectorToScreenPoint */.j)(e,t.spatialReference,elevationInfoUtils/* absoluteHeightElevationInfo */.qt,l),h=o.leftEdge,d=o.rightEdge,g=n.vertices[0],f=(0,normalizedPoint/* fromAnyMapPoint */.Lp)(g.pos,l,t),m=n.vertices.length,u=n.vertices[m-1],v=(0,normalizedPoint/* fromAnyMapPoint */.Lp)(u.pos,l,t),x=n.edges[0];let E=x;do{if(E!==h&&E!==d&&this.edgeExceedsShortLineThreshold(E,t)){const r=(0,snappingUtils/* editEdgeToSnappingEdge */.is)(E,l,t);h&&this._checkEdgeForParallelLines(r,(0,normalizedPoint/* fromAnyMapPoint */.Lp)(h.leftVertex.pos,l,t),e,a,t,s),d&&this._checkEdgeForParallelLines(r,(0,normalizedPoint/* fromAnyMapPoint */.Lp)(d.rightVertex.pos,l,t),e,a,t,s),o===g?this._checkEdgeForParallelLines(r,v,e,a,t,s):o===u&&this._checkEdgeForParallelLines(r,f,e,a,t,s)}E=E.rightVertex.rightEdge}while(E&&E!==x);return s}_checkEdgeForParallelLines(t,i,a,c,f,v){const x=t.left,E=t.right;if((0,geometry2dUtils/* projectPointToLine */.fg)(u,(0,normalizedPoint/* asVec2 */.Xz)(i),(0,normalizedPoint/* asVec2 */.Xz)(x),(0,normalizedPoint/* asVec2 */.Xz)(E)),(0,vec2/* squaredDistance */.hG)(u,(0,normalizedPoint/* asVec2 */.Xz)(i))<Settings/* defaults */.N.parallelLineThreshold)return;(0,geometry2dUtils/* projectPointToLine */.fg)(u,(0,normalizedPoint/* asVec2 */.Xz)(a),(0,normalizedPoint/* asVec2 */.Xz)(x),(0,normalizedPoint/* asVec2 */.Xz)(E),(0,normalizedPoint/* asVec2 */.Xz)(i));const{spatialReference:L,pointer:P}=f,j=(0,normalizedPoint/* markAsTarget */.de)((0,normalizedPoint/* fromValues */.fA)(u[0],u[1],a[2]));if((0,snappingUtils/* squaredScreenDistance */.pM)(c,(0,viewUtils/* vectorToScreenPoint */.j)(j,L,elevationInfoUtils/* absoluteHeightElevationInfo */.qt,this.view))<this.squaredProximityThreshold(P)){if(this.isVertical(j,i,f)||this.isVertical(x,E,f))return;if(m(t,v))return;v.push(new ParallelLineSnappingCandidate/* ParallelLineSnappingCandidate */.B({referenceLine:t,lineStart:i,targetPoint:j,isDraped:"on-the-ground"===f.elevationInfo?.mode}))}}}function m(t,r){const i=t.left,o=t.right;for(const n of r)if((0,geometry2dUtils/* projectPointToLine */.fg)(u,(0,normalizedPoint/* asVec2 */.Xz)(o),(0,normalizedPoint/* asVec2 */.Xz)(n.constraint.start),(0,normalizedPoint/* asVec2 */.Xz)(n.constraint.end),(0,normalizedPoint/* asVec2 */.Xz)(i)),(0,vec2/* squaredDistance */.hG)(u,(0,normalizedPoint/* asVec2 */.Xz)(o))<Settings/* defaults */.N.parallelLineThreshold)return n.addReferenceLine(t),!0;return!1}const u=(0,vec2f64/* create */.vt)();

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(24121);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/sketch/constraints.js
var constraints = __webpack_require__(81066);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/snapping/candidates/RightAngleSnappingCandidate.js
var RightAngleSnappingCandidate = __webpack_require__(49935);
;// ../node_modules/@arcgis/core/views/interactive/snapping/RightAngleSnapper.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class y extends l{constructor(e,t,i){super(e,t),this._geodesicLengthMeasurementUtils=i}snapNewVertex(e,t){const i=t.editGeometryOperations.data.components[0],r=[];if(i.vertices.length<2)return r;const{view:s}=this,n=(0,viewUtils/* vectorToScreenPoint */.j)(e,t.spatialReference,elevationInfoUtils/* absoluteHeightElevationInfo */.qt,s),o=i.vertices.at(-1);this._checkForSnappingCandidate(RightAngleSnappingCandidate/* SelfSnappingRightAngleType */._b.LastVertex,r,o.leftEdge,o,o.leftEdge.leftVertex,e,n,t);const a=i.vertices[0];return this._checkForSnappingCandidate(RightAngleSnappingCandidate/* SelfSnappingRightAngleType */._b.FirstVertex,r,a.rightEdge,a,a.rightEdge.rightVertex,e,n,t),r}snapExistingVertex(e,t){const i=[],r=t.vertexHandle;if(r.component.vertices.length<3)return i;const{view:s}=this,n=(0,viewUtils/* vectorToScreenPoint */.j)(e,t.spatialReference,elevationInfoUtils/* absoluteHeightElevationInfo */.qt,s),o=r.leftEdge,a=r.rightEdge;if(o?.leftVertex.leftEdge){const r=o.leftVertex.leftEdge;this._checkForSnappingCandidate(RightAngleSnappingCandidate/* SelfSnappingRightAngleType */._b.ExistingEdge,i,r,r.rightVertex,r.leftVertex,e,n,t)}if(a?.rightVertex.rightEdge){const r=a.rightVertex.rightEdge;this._checkForSnappingCandidate(RightAngleSnappingCandidate/* SelfSnappingRightAngleType */._b.ExistingEdge,i,r,r.leftVertex,r.rightVertex,e,n,t)}return i}_checkForSnappingCandidate(e,t,i,r,s,n,o,a){if(!this.edgeExceedsShortLineThreshold(i,a))return;const c=this.view,p=(0,normalizedPoint/* fromAnyMapPoint */.Lp)(r.pos,c,a),g=(0,normalizedPoint/* fromAnyMapPoint */.Lp)(s.pos,c,a);F(P,g,p,n,a,this._geodesicLengthMeasurementUtils),this._checkForSnappingCandidateAlongProjectedRay(e,t,g,p,P,n,o,a)}_checkForSnappingCandidateAlongProjectedRay(e,t,i,a,p,g,f,E){const{spatialReference:j,pointer:_}=E,w=(0,vec2/* subtract */.Re)(M,(0,normalizedPoint/* asVec2 */.Xz)(g),(0,normalizedPoint/* asVec2 */.Xz)(a)),y=(0,vec2/* dot */.Om)(p,w)/(0,vec2/* squaredLength */.m3)(p),F=(0,vec2/* scaleAndAdd */.Ln)(M,(0,normalizedPoint/* asVec2 */.Xz)(a),p,y),R=(0,normalizedPoint/* markAsTarget */.de)((0,normalizedPoint/* fromValues */.fA)(F[0],F[1],g[2]));if((0,snappingUtils/* squaredScreenDistance */.pM)(f,(0,viewUtils/* vectorToScreenPoint */.j)(R,j,elevationInfoUtils/* absoluteHeightElevationInfo */.qt,this.view))>this.squaredProximityThreshold(_)||this.isVertical(R,a,E)||this.isVertical(a,i,E))return;const U=(0,vec32.b)((0,vec3f64/* create */.vt)(),a,p,Math.sign(y));t.push(new RightAngleSnappingCandidate/* RightAngleSnappingCandidate */.HJ({targetPoint:R,constraint:new constraints/* VerticalHalfPlaneConstraint */.FX(a,(0,normalizedPoint/* fromVec3 */._7)(U)),previousVertex:i,otherVertex:a,otherVertexType:RightAngleSnappingCandidate/* OtherVertexType */.pn.CENTER,selfSnappingType:e,isDraped:"on-the-ground"===E.elevationInfo?.mode}))}}function F(e,t,i,r,s,n){R(e,t,i,r,s,n)||U(e,t,i)}function R(r,s,n,o,{spatialReference:a},c){const g=(0,angularMeasurementUtils/* radiansGeographicBetweenVec */.IP)(s,n,a,a);if(null==g)return!1;const d=(0,angularMeasurementUtils/* radiansGeographicBetweenVec */.IP)(n,o,a,a);if(null==d)return!1;const l=Math.sign(Cyclical/* cyclical2PI */.uC.shortestSignedDiff(g,d))*Math.PI*.5,f=(0,quantityUtils/* createAngle */.Wq)(g+l,"radians","geographic"),m=(0,vec3f64/* create */.vt)(),u=c.geodesicDistance(n,o,a);return null!=u&&((0,angularMeasurementUtils/* pointFromDistanceAlongAzimuth */.rT)(m,n,a,(0,quantityUtils/* valueInUnit */.l3)(u,"meters"),f,"geodesic"),(0,vec32.d)(r,m,n),!0)}function U(e,t,i){const s=(0,vec2/* subtract */.Re)(M,(0,normalizedPoint/* asVec2 */.Xz)(i),(0,normalizedPoint/* asVec2 */.Xz)(t));(0,vec32.i)(e,s[1],-s[0],0)}const M=(0,vec2f64/* create */.vt)(),P=(0,vec3f64/* create */.vt)();

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/snapping/candidates/RightAngleTriangleSnappingCandidate.js
var RightAngleTriangleSnappingCandidate = __webpack_require__(8947);
;// ../node_modules/@arcgis/core/views/interactive/snapping/RightAngleTriangleSnapper.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class h extends l{snapNewVertex(e,t){const i=t.editGeometryOperations.data.components[0],r=[],s=i.vertices.length;if("polygon"!==t.editGeometryOperations.data.type||s<2)return r;const{view:n}=this,p=i.vertices[0],a=i.vertices[s-1],d=(0,normalizedPoint/* fromAnyMapPoint */.Lp)(p.pos,n,t),l=(0,normalizedPoint/* fromAnyMapPoint */.Lp)(a.pos,n,t);return this._processCandidateProposal(d,l,e,t,r),r}snapExistingVertex(e,t){const i=[],r=t.vertexHandle,s=r.component;if(s.edges.length<2)return i;if("polyline"===t.editGeometryOperations.data.type&&(0===r.index||r.index===s.vertices.length-1))return i;const{view:n}=this,p=(0,normalizedPoint/* fromAnyMapPoint */.Lp)(r.leftEdge.leftVertex.pos,n,t),a=(0,normalizedPoint/* fromAnyMapPoint */.Lp)(r.rightEdge.rightVertex.pos,n,t);return this._processCandidateProposal(p,a,e,t,i),i}_processCandidateProposal(i,o,a,h,g){if(!this.exceedsShortLineThreshold(i,o,h))return;const v=(0,vec2/* lerp */.Cc)(RightAngleTriangleSnapper_f,(0,normalizedPoint/* asVec2 */.Xz)(i),(0,normalizedPoint/* asVec2 */.Xz)(o),.5),x=.5*(0,vec2/* distance */.Io)((0,normalizedPoint/* asVec2 */.Xz)(i),(0,normalizedPoint/* asVec2 */.Xz)(o)),u=(0,geometry2dUtils/* projectPointToCircle */.Dh)(RightAngleTriangleSnapper_f,(0,normalizedPoint/* asVec2 */.Xz)(a),v,x),j=(0,normalizedPoint/* markAsTarget */.de)((0,normalizedPoint/* fromValues */.fA)(u[0],u[1],a[2])),{spatialReference:y,pointer:w}=h,P=(0,viewUtils/* vectorToScreenPoint */.j)(a,y,elevationInfoUtils/* absoluteHeightElevationInfo */.qt,this.view);if((0,snappingUtils/* squaredScreenDistance */.pM)(P,(0,viewUtils/* vectorToScreenPoint */.j)(j,y,elevationInfoUtils/* absoluteHeightElevationInfo */.qt,this.view))<this.squaredProximityThreshold(w)){if(this.isVertical(i,j,h)||this.isVertical(j,o,h))return;g.push(new RightAngleTriangleSnappingCandidate/* RightAngleTriangleSnappingCandidate */.R({targetPoint:j,point1:i,point2:o,isDraped:"on-the-ground"===h.elevationInfo?.mode}))}}}const RightAngleTriangleSnapper_f=(0,vec2f64/* create */.vt)();

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/snapping/SnappingDomain.js
var SnappingDomain = __webpack_require__(40508);
;// ../node_modules/@arcgis/core/views/interactive/snapping/SelfSnappingEngine.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let SelfSnappingEngine_h=class extends Accessor/* default */.A{constructor(s){super(s),this.updating=!1,this._snappers=new Collection/* default */.A,this._domain=SnappingDomain/* SnappingDomain */.n.SELF}initialize(){this._snappers.push(new f(this.view,this.options),new E(this.view,this.options,this.geodesicLengthMeasurementUtils),new y(this.view,this.options,this.geodesicLengthMeasurementUtils),new h(this.view,this.options))}set options(s){this._set("options",s);for(const o of this._snappers)o.options=s}async fetchCandidates(s,o,t){if(!(o&this._domain&&this.options.effectiveSelfEnabled))return[];const e=[];for(const i of this._snappers.items)for(const o of i.snap(s,t))e.push(o);return (0,snappingUtils/* sortCandidatesInPlace */.xX)(s,e),e}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],SelfSnappingEngine_h.prototype,"updating",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],SelfSnappingEngine_h.prototype,"view",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],SelfSnappingEngine_h.prototype,"geodesicLengthMeasurementUtils",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],SelfSnappingEngine_h.prototype,"options",null),SelfSnappingEngine_h=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.snapping.SelfSnappingEngine")],SelfSnappingEngine_h);


/***/ })

};
;