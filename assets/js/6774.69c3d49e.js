"use strict";
exports.id = 6774;
exports.ids = [6774];
exports.modules = {

/***/ 28769:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ Z),
/* harmony export */   b: () => (/* binding */ ks),
/* harmony export */   d: () => (/* binding */ W),
/* harmony export */   f: () => (/* binding */ J),
/* harmony export */   h: () => (/* binding */ ts),
/* harmony export */   j: () => (/* binding */ gs),
/* harmony export */   u: () => (/* binding */ K)
/* harmony export */ });
/* unused harmony exports A, B, C, D, E, c, e, g, i, k, l, m, n, o, p, q, r, s, t, v, w, x, y, z */
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(539);
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92504);
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(92114);
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21742);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86128);
/* harmony import */ var _vec32_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24121);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58359);
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80510);
/* harmony import */ var _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(58331);
/* harmony import */ var _geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22759);
/* harmony import */ var _geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38774);
/* harmony import */ var _geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(10151);
/* harmony import */ var _geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16597);
/* harmony import */ var _geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(45573);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const z=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");class D{constructor(){this.plane=(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .create */ .vt)(),this.origin=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),this.basis1=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),this.basis2=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)()}}const G=D;function W(s=Ms){return{plane:(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .create */ .vt)(s.plane),origin:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__/* .clone */ .o8)(s.origin),basis1:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__/* .clone */ .o8)(s.basis1),basis2:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__/* .clone */ .o8)(s.basis2)}}function X(s,t,i){const n=As.get();return n.origin=s,n.basis1=t,n.basis2=i,n.plane=(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .wrap */ .LV)(0,0,0,0),K(n),n}function Z(s,t=W()){return J(s.origin,s.basis1,s.basis2,t)}function H(s,t){(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.c)(t.origin,s.origin),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.c)(t.basis1,s.basis1),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.c)(t.basis2,s.basis2),(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .copy */ .C)(t.plane,s.plane)}function J(s,t,i,n=W()){return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.c)(n.origin,s),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.c)(n.basis1,t),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.c)(n.basis2,i),K(n),ws(n,"fromValues()"),n}function K(s){(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .fromVectorsAndPoint */ .mR)(s.basis2,s.basis1,s.origin,s.plane)}function Q(s,t,i){s!==i&&Z(s,i);const n=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.g)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__/* .sv3d */ .rq.get(),ys(s),t);return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.f)(i.origin,i.origin,n),i.plane[3]-=t,i}function $(s,t,i){return ts(t,i),Q(i,ls(s,s.origin),i),i}function ss(s,t){const i=s.basis1[0],n=s.basis2[1],[r,o]=s.origin;return (0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_7__/* .fromValues */ .fA)(r-i,o-n,r+i,o+n,t)}function ts(s,t=W()){const i=(s[2]-s[0])/2,n=(s[3]-s[1])/2;return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.i)(t.origin,s[0]+i,s[1]+n,0),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.i)(t.basis1,i,0,0),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.i)(t.basis2,0,n,0),(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .fromValues */ .fA)(0,0,1,0,t.plane),t}function is(s,t,i){return!!(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .intersectRay */ .Ui)(s.plane,t,i)&&Ps(s,i)}function ns(s,t,i){if(is(s,t,i))return i;const n=rs(s,t,_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__/* .sv3d */ .rq.get());return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.f)(i,t.origin,(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.g)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__/* .sv3d */ .rq.get(),t.direction,(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.j)(t.origin,n)/(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.l)(t.direction))),i}function rs(s,i,n){const r=Ss.get();xs(s,i,r,Ss.get());let o=Number.POSITIVE_INFINITY;for(const e of Es){const c=Ns(s,e,Ts.get()),u=_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__/* .sv3d */ .rq.get();if((0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .intersectLineSegment */ .T7)(r,c,u)){const s=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.E)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__/* .sv3d */ .rq.get(),i.origin,u),r=Math.abs((0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .acosClamped */ .XM)((0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.e)(i.direction,s)));r<o&&(o=r,(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.c)(n,u))}}return o===Number.POSITIVE_INFINITY?es(s,i,n):n}function os(s,t){return(t-s)/t}function es(s,t,i){if(is(s,t,i))return i;const n=Ss.get(),r=Ss.get();xs(s,t,n,r);let o=Number.POSITIVE_INFINITY;for(const e of Es){const c=Ns(s,e,Ts.get()),u=_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__/* .sv3d */ .rq.get();if((0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .intersectLineSegmentClamp */ .gv)(n,c,u)){const s=(0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_11__/* .distance2 */ .kb)(t,u);if(!(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .isPointInside */ .Tj)(r,u))continue;s<o&&(o=s,(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.c)(i,u))}}return us(s,t.origin)<o&&as(s,t.origin,i),i}function as(s,t,i){const n=(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .projectPoint */ ._I)(s.plane,t,_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__/* .sv3d */ .rq.get()),r=(0,_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_9__/* .projectPointClamp */ .H6)(vs(s,s.basis1),n,-1,1,_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__/* .sv3d */ .rq.get()),o=(0,_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_9__/* .projectPointClamp */ .H6)(vs(s,s.basis2),n,-1,1,_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__/* .sv3d */ .rq.get());return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.d)(i,(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.f)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__/* .sv3d */ .rq.get(),r,o),s.origin),i}function cs(s,t,i){const{origin:n,basis1:r,basis2:o}=s,e=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.d)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__/* .sv3d */ .rq.get(),t,n),a=(0,_geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_12__/* .projectPointSignedLength */ .gr)(r,e),c=(0,_geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_12__/* .projectPointSignedLength */ .gr)(o,e),u=(0,_geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_12__/* .projectPointSignedLength */ .gr)(ys(s),e);return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.i)(i,a,c,u)}function us(s,t){const i=cs(s,t,_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__/* .sv3d */ .rq.get()),{basis1:n,basis2:r}=s,o=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.l)(n),e=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.l)(r),a=Math.max(Math.abs(i[0])-o,0),c=Math.max(Math.abs(i[1])-e,0),u=i[2];return a*a+c*c+u*u}function gs(s,t){return Math.sqrt(us(s,t))}function bs(s,t){let i=Number.NEGATIVE_INFINITY;for(const n of Es){const r=Ns(s,n,Ts.get()),o=(0,_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_9__/* .distance2 */ .kb)(r,t);o>i&&(i=o)}return Math.sqrt(i)}function fs(s,t){return (0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .isPointInside */ .Tj)(s.plane,t)&&Ps(s,t)}function ps(s,t,i,n){return Is(s,i,n)}function ls(s,t){const i=-s.plane[3];return (0,_geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_12__/* .projectPointSignedLength */ .gr)(ys(s),t)-i}function ms(s,t,i,n){const r=ls(s,t),o=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.g)(Vs,ys(s),i-r);return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.f)(n,t,o),n}function ds(s,t){return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.q)(s.basis1,t.basis1)&&(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.q)(s.basis2,t.basis2)&&(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.q)(s.origin,t.origin)}function hs(s,t,i){return s!==i&&Z(s,i),(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_3__/* .invert */ .B8)(_s,t),(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_3__/* .transpose */ .mg)(_s,_s),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.t)(i.basis1,s.basis1,_s),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.t)(i.basis2,s.basis2,_s),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.t)((0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .getNormal */ .Qj)(i.plane),(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .getNormal */ .Qj)(s.plane),_s),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.t)(i.origin,s.origin,t),(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .setOffsetFromPoint */ .mP)(i.plane,i.plane,i.origin),i}function js(s,t,i,n){return s!==n&&Z(s,n),(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_3__/* .fromRotation */ .$0)(Os,t,i),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.t)(n.basis1,s.basis1,Os),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.t)(n.basis2,s.basis2,Os),K(n),n}function ys(s){return (0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .getNormal */ .Qj)(s.plane)}function Is(s,t,i){switch(t){case _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_8__/* .Axis */ ._.X:(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.c)(i,s.basis1),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.n)(i,i);break;case _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_8__/* .Axis */ ._.Y:(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.c)(i,s.basis2),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.n)(i,i);break;case _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_8__/* .Axis */ ._.Z:(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.c)(i,ys(s))}return i}function Ps(s,t){const i=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.d)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__/* .sv3d */ .rq.get(),t,s.origin),n=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.k)(s.basis1),r=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.k)(s.basis2),o=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.e)(s.basis1,i),e=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.e)(s.basis2,i);return-o-n<0&&o-n<0&&-e-r<0&&e-r<0}function vs(s,t){const i=Ts.get();return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.c)(i.origin,s.origin),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.c)(i.vector,t),i}function Ns(s,t,i){const{basis1:n,basis2:r,origin:o}=s,e=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.g)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__/* .sv3d */ .rq.get(),n,t.origin[0]),a=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.g)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__/* .sv3d */ .rq.get(),r,t.origin[1]);(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.f)(i.origin,e,a),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.f)(i.origin,i.origin,o);const g=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.g)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__/* .sv3d */ .rq.get(),n,t.direction[0]),b=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.g)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__/* .sv3d */ .rq.get(),r,t.direction[1]);return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.g)(i.vector,(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.f)(g,g,b),2),i}function ws(s,t){Math.abs((0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.e)(s.basis1,s.basis2)/((0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.l)(s.basis1)*(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.l)(s.basis2)))>1e-6&&z().warn(t,"Provided basis vectors are not perpendicular"),Math.abs((0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.e)(s.basis1,ys(s)))>1e-6&&z().warn(t,"Basis vectors and plane normal are not perpendicular"),Math.abs(-(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.e)(ys(s),s.origin)-s.plane[3])>1e-6&&z().warn(t,"Plane offset is not consistent with plane origin")}function xs(s,t,i,n){const r=ys(s);(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .fromVectorsAndPoint */ .mR)(r,t.direction,t.origin,i),(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .fromVectorsAndPoint */ .mR)((0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .getNormal */ .Qj)(i),r,t.origin,n)}const Ms={plane:(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .create */ .vt)(),origin:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__/* .fromValues */ .fA)(0,0,0),basis1:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__/* .fromValues */ .fA)(1,0,0),basis2:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__/* .fromValues */ .fA)(0,1,0)},Ss=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_14__/* .ObjectStack */ .I(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .create */ .vt),Ts=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_14__/* .ObjectStack */ .I(_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_9__/* .create */ .vt),Vs=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),As=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_14__/* .ObjectStack */ .I((()=>W())),Es=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],_s=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),Os=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),ks=Object.freeze(Object.defineProperty({__proto__:null,BoundedPlaneClass:G,altitudeAt:ls,axisAt:ps,cameraFrustumCoverage:os,closestPoint:es,closestPointOnSilhouette:rs,copy:Z,copyWithoutVerify:H,create:W,distance:gs,distance2:us,distanceToSilhouette:bs,elevate:Q,equals:ds,extrusionContainsPoint:fs,fromAABoundingRect:ts,fromValues:J,getExtent:ss,intersectRay:is,intersectRayClosestSilhouette:ns,normal:ys,projectPoint:as,projectPointLocal:cs,rotate:js,setAltitudeAt:ms,setExtent:$,transform:hs,up:Ms,updateUnboundedPlane:K,wrap:X},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 6371:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(t){let r,e,i=[],u=!1;function f(...f){return u&&r===this&&n(f,i)||(e=t.apply(this,f),r=this,i=f,u=!0),e}return f}function n(t,n){if(t.length!==n.length)return!1;for(let r=0;r<t.length;++r)if(t[r]!==n[r])return!1;return!0}


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

/***/ 22970:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _sketch_constraints_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81066);
/* harmony import */ var _FeatureSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90814);
/* harmony import */ var _hints_PointSnappingHint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75796);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class r extends _FeatureSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_1__/* .FeatureSnappingCandidate */ .w{constructor(n){super({...n,constraint:new _sketch_constraints_js__WEBPACK_IMPORTED_MODULE_0__/* .PointConstraint */ .i7(n.targetPoint)})}get hints(){return[new _hints_PointSnappingHint_js__WEBPACK_IMPORTED_MODULE_2__/* .PointSnappingHint */ ._(this.targetPoint,this.isDraped,this.domain)]}}


/***/ }),

/***/ 56774:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  FeatureServiceSnappingSource: () => (/* binding */ O)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(52495);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/asyncUtils.js
var asyncUtils = __webpack_require__(12690);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/handleUtils.js
var handleUtils = __webpack_require__(20464);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/memoize.js
var memoize = __webpack_require__(6371);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(85251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/sql.js
var sql = __webpack_require__(76859);
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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/support/UpdatingHandles.js
var UpdatingHandles = __webpack_require__(4238);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/layerUtils.js
var layerUtils = __webpack_require__(40454);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/elevationInfoUtils.js
var elevationInfoUtils = __webpack_require__(27451);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/TileKey.js
var TileKey = __webpack_require__(88061);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(24121);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(58359);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/boundedPlane.js
var boundedPlane = __webpack_require__(28769);
;// ../node_modules/@arcgis/core/views/interactive/snapping/featureSources/featureServiceSource/tileUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function a(s,o){return (0,boundedPlane.h)(o.extent,c),(0,boundedPlane.j)(c,(0,vec32.i)(n,s.x,s.y,0))}const c=(0,boundedPlane.d)(),n=(0,vec3f64/* create */.vt)();

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/support/layerViewUtils.js
var layerViewUtils = __webpack_require__(38201);
;// ../node_modules/@arcgis/core/views/2d/interactive/snapping/featureSources/featureServiceSource/FeatureServiceTiles2D.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let p=class extends Accessor/* default */.A{get tiles(){const e=this.tilesCoveringView,t=null!=this.pointOfInterest?this.pointOfInterest:this.view.center;return e.sort(((e,i)=>a(t,e)-a(t,i))),e}_scaleEnabled(){return (0,layerViewUtils/* scaleBoundsPredicate */.JU)(this.view.scale,this.layer.minScale||0,this.layer.maxScale||0)}get tilesCoveringView(){if(!this.view.ready||!this.view.featuresTilingScheme||!this.view.state||null==this.tileInfo)return[];if(!this._scaleEnabled)return[];const{spans:e,lodInfo:t}=this.view.featuresTilingScheme.getTileCoverage(this.view.state,0),{level:i}=t,r=[];for(const{row:o,colFrom:s,colTo:n}of e)for(let e=s;e<=n;e++){const s=t.normalizeCol(e),n=new TileKey/* TileKey */.U(null,i,o,s);this.tileInfo.updateTileInfo(n),r.push(n)}return r}get tileInfo(){return this.view.featuresTilingScheme?.tileInfo??null}get tileSize(){return null!=this.tileInfo?this.tileInfo.size[0]:256}constructor(e){super(e),this.pointOfInterest=null}initialize(){this.addHandles((0,reactiveUtils/* watch */.wB)((()=>this.view?.state?.viewpoint),(()=>this.notifyChange("tilesCoveringView")),reactiveUtils/* sync */.OH))}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],p.prototype,"tiles",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],p.prototype,"_scaleEnabled",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],p.prototype,"tilesCoveringView",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],p.prototype,"tileInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],p.prototype,"tileSize",null),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],p.prototype,"view",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],p.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],p.prototype,"pointOfInterest",void 0),p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.2d.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles2D")],p);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
;// ../node_modules/@arcgis/core/views/3d/interactive/snapping/featureSources/featureServiceSource/FeatureServiceTiles3D.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let FeatureServiceTiles3D_a=class extends Accessor/* default */.A{get _sortedTilesCoveringView(){const e=(this.view.featureTiles?.tiles?.toArray()??[]).map(FeatureServiceTiles3D_c),t=this._effectivePointOfInterest;return null!=t&&e.sort(((e,r)=>a(t,e)-a(t,r))),e}get tileInfo(){return this.view.featureTiles?.tilingScheme?.toTileInfo()??null}get tileSize(){return this.view.featureTiles?.tileSize??256}get _effectivePointOfInterest(){const e=this.pointOfInterest;return null!=e?e:this.view.pointsOfInterest?.focus.location}constructor(e){super(e),this.tiles=[],this.pointOfInterest=null}initialize(){this.addHandles([(0,reactiveUtils/* watch */.wB)((()=>this.view.featureTiles),(e=>{this.removeHandles(u),e&&this.addHandles(e.addClient(),u)}),reactiveUtils/* initial */.Vh),(0,reactiveUtils/* watch */.wB)((()=>this._sortedTilesCoveringView),(e=>this._set("tiles",e)),{initial:!0,equals:(e,t)=>(0,arrayUtils/* equals */.aI)(e,t,((e,t)=>e.id===t.id))})])}};function FeatureServiceTiles3D_c({lij:[e,t,r],extent:i}){return new TileKey/* TileKey */.U(`${e}/${t}/${r}`,e,t,r,i)}(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],FeatureServiceTiles3D_a.prototype,"tiles",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],FeatureServiceTiles3D_a.prototype,"_sortedTilesCoveringView",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],FeatureServiceTiles3D_a.prototype,"tileInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],FeatureServiceTiles3D_a.prototype,"tileSize",null),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],FeatureServiceTiles3D_a.prototype,"view",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],FeatureServiceTiles3D_a.prototype,"pointOfInterest",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],FeatureServiceTiles3D_a.prototype,"_effectivePointOfInterest",null),FeatureServiceTiles3D_a=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.3d.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles3D")],FeatureServiceTiles3D_a);const u="feature-tiles";

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/snapping/snappingUtils.js
var snappingUtils = __webpack_require__(61851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/snapping/featureSources/queryEngineUtils.js
var queryEngineUtils = __webpack_require__(78200);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Polygon.js
var Polygon = __webpack_require__(62802);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/aaBoundingRect.js
var aaBoundingRect = __webpack_require__(80510);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(96220);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/Graphic.js
var Graphic = __webpack_require__(25707);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(48982);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(92504);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/PointSymbol3D.js
var PointSymbol3D = __webpack_require__(66960);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleFillSymbol.js
var SimpleFillSymbol = __webpack_require__(68882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/TextSymbol.js
var TextSymbol = __webpack_require__(42602);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/TextSymbol3DLayer.js + 2 modules
var TextSymbol3DLayer = __webpack_require__(85467);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/callouts/LineCallout3D.js
var LineCallout3D = __webpack_require__(76550);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/callouts/LineCallout3DBorder.js
var LineCallout3DBorder = __webpack_require__(69676);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/Symbol3DVerticalOffset.js
var Symbol3DVerticalOffset = __webpack_require__(11195);
;// ../node_modules/@arcgis/core/views/support/TileTreeDebugger.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const TileTreeDebugger_u=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]];let d=class extends Accessor/* default */.A{constructor(e){super(e),this.updating=!1,this.enablePolygons=!0,this.enableLabels=!0,this._polygons=new Map,this._labels=new Map,this._symbols=TileTreeDebugger_u.map((e=>new SimpleFillSymbol/* default */.A({color:[e[0],e[1],e[2],.6],outline:{color:"black",width:1}}))),this._enabled=!0}initialize(){this.update()}destroy(){this._enabled=!1,this.clear()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&(this._enabled=e,this.update())}update(){if(!this._enabled)return void this.clear();const e=e=>{if(null!=e.label)return e.label;let s=e.lij.toString();return null!=e.loadPriority&&(s+=` (${e.loadPriority})`),e.measures&&(s+=`[${e.measures.lodLevel}]`),s},t=this.getTiles(),i=new Array,a=new Set((this._labels.size,this._labels.keys()));t.forEach(((m,u)=>{const d=m.lij.toString();a.delete(d);const g=m.measures?.lodLevel??m.level,f=m.geometry;if(this.enablePolygons&&!this._polygons.has(d)){const e=new Graphic/* default */.A({geometry:f,symbol:this._symbols[g%this._symbols.length]});this._polygons.set(d,e),i.push(e)}if(this.enableLabels){const a=e(m),g=u/(t.length-1),w=(0,mathUtils/* lerp */.Cc)(0,200,g),_=(0,mathUtils/* lerp */.Cc)(20,6,g)/.75,j=null!=m.loadPriority&&m.loadPriority>=t.length,v=new Color/* default */.A([w,j?0:w,j?0:w]),S="3d"===this.view.type?()=>new PointSymbol3D/* default */.A({verticalOffset:new Symbol3DVerticalOffset/* default */.A({screenLength:40/.75}),callout:new LineCallout3D/* default */.A({color:new Color/* default */.A("white"),border:new LineCallout3DBorder/* default */.A({color:new Color/* default */.A("black")})}),symbolLayers:new Collection/* default */.A([new TextSymbol3DLayer/* default */.A({text:a,halo:{color:"white",size:1/.75},material:{color:v},size:_})])}):()=>new TextSymbol/* default */.A({text:a,haloColor:"white",haloSize:1/.75,color:v,size:_}),L=this._labels.get(d);if(L){const e=S();null!=L.symbol&&JSON.stringify(e)===JSON.stringify(L.symbol)||(L.symbol=e)}else{const e=new Graphic/* default */.A({geometry:f.extent.center,symbol:S()});this._labels.set(d,e),i.push(e)}}}));const m=new Array;a.forEach((e=>{const s=this._polygons.get(e);null!=s&&(m.push(s),this._polygons.delete(e));const o=this._labels.get(e);null!=o&&(m.push(o),this._labels.delete(e))})),this.view.graphics.removeMany(m),this.view.graphics.addMany(i)}clear(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}};(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],d.prototype,"view",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],d.prototype,"updating",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],d.prototype,"enabled",null),d=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.support.TileTreeDebugger")],d);

;// ../node_modules/@arcgis/core/views/interactive/snapping/featureSources/WorkerTileTreeDebugger.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let WorkerTileTreeDebugger_n=class extends d{constructor(e){super(e)}initialize(){const e=setInterval((()=>this._fetchDebugInfo()),2e3);this.addHandles((0,handleUtils/* makeHandle */.hA)((()=>clearInterval(e))))}getTiles(){if(!this._debugInfo)return[];const e=new Map,t=new Map;this._debugInfo.storedTiles.forEach((t=>{e.set(t.data.id,t.featureCount)})),this._debugInfo.pendingTiles.forEach((r=>{e.set(r.data.id,r.featureCount),t.set(r.data.id,r.state)}));const r=r=>{const o=t.get(r),s=e.get(r)??"?";return o?`${o}:${s}\n${r}`:`store:${s}\n${r}`},o=new Map;return this._debugInfo.storedTiles.forEach((e=>{o.set(e.data.id,e.data)})),this._debugInfo.pendingTiles.forEach((e=>{o.set(e.data.id,e.data)})),Array.from(o.values()).map((e=>({lij:[e.level,e.row,e.col],level:e.level,geometry:Polygon/* default */.A.fromExtent((0,aaBoundingRect/* toExtent */.w1)(e.extent,this.view.spatialReference)),label:r(e.id)})))}_fetchDebugInfo(){this.handle.getDebugInfo(null).then((e=>{this._debugInfo=e,this.update()}))}};(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],WorkerTileTreeDebugger_n.prototype,"handle",void 0),WorkerTileTreeDebugger_n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.snapping.featureSources.WorkerTileTreeDebugger")],WorkerTileTreeDebugger_n);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(6267);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/workers/WorkerHandle.js
var WorkerHandle = __webpack_require__(83055);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/typeUtils.js
var typeUtils = __webpack_require__(12433);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/dehydratedPoint.js
var dehydratedPoint = __webpack_require__(29394);
;// ../node_modules/@arcgis/core/views/interactive/snapping/featureSources/featureServiceSource/FeatureServiceSnappingSourceWorkerHandle.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let FeatureServiceSnappingSourceWorkerHandle_u=class extends Accessor/* default */.A{get updating(){return this._updatingHandles.updating||this._workerHandleUpdating}constructor(e){super(e),this._updatingHandles=new UpdatingHandles/* UpdatingHandles */.U,this._suspendController=null,this.schedule=null,this.hasZ=!1,this.elevationAlignPointsInFeatures=async e=>{const t=[];for(const{points:o}of e.pointsInFeatures)for(const{z:e}of o)t.push(e);return{elevations:t,drapedObjectIds:new Set,failedObjectIds:new Set}},this.queryForSymbologySnapping=async()=>({candidates:[],sourceCandidateIndices:[]}),this.availability=0,this._workerHandleUpdating=!0,this.updateOutFields=(0,promiseUtils/* debounce */.sg)((async(e,t)=>{await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateOutFields",[...e],t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}))}destroy(){this._suspendController=(0,maybe/* abortMaybe */.DC)(this._suspendController),this._workerHandle.destroy(),this._updatingHandles.destroy()}initialize(){this._workerHandle=new y(this.schedule,{alignElevation:async(e,{signal:t})=>({result:await this.elevationAlignPointsInFeatures(e.query,t)}),getSymbologyCandidates:async(e,{signal:t})=>({result:await this.queryForSymbologySnapping(e,t)})}),this.addHandles([this._workerHandle.on("notify-updating",(({updating:e})=>this._workerHandleUpdating=e)),this._workerHandle.on("notify-availability",(({availability:e})=>this._set("availability",e)))])}async setup(e,t){const o=FeatureServiceSnappingSourceWorkerHandle_c(e.layer);if(null==o)return;const i={configuration:h(e.configuration),serviceInfo:o,spatialReference:e.spatialReference.toJSON(),hasZ:this.hasZ,elevationInfo:e.layer.elevationInfo?.toJSON()};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("setup",i,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async configure(e,t){const o=h(e);await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("configure",o,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async refresh(e){await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("refresh",{},e)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},e))}async fetchCandidates(e,t){const{point:o,filter:i,coordinateHelper:n}=e,a={...e,point:(0,dehydratedPoint/* makeDehydratedPoint */.T)(o[0],o[1],o[2],n.spatialReference.toJSON()),filter:i?.toJSON()};return this._workerHandle.invoke(a,t)}async updateTiles(e,t){const o={tiles:e.tiles,tileInfo:null!=e.tileInfo?e.tileInfo.toJSON():null,tileSize:e.tileSize};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateTiles",o,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async handleEdits({historicMoment:e,addedFeatures:t,deletedFeatures:i,updatedFeatures:n},a){const s={historicMoment:e,addedFeatures:t?.map((({objectId:e})=>e)).filter(arrayUtils/* isSome */.Ru)??[],deletedFeatures:i?.map((({objectId:e,globalId:t})=>({objectId:e,globalId:t})))??[],updatedFeatures:n?.map((({objectId:e})=>e)).filter(arrayUtils/* isSome */.Ru)??[]};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("handleEdits",s,a)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},a))}async setHistoricMoment(e,t){await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("setHistoricMoment",{moment:e},t))}getDebugInfo(e){return this._workerHandle.invokeMethod("getDebugInfo",{},e)}async notifyElevationSourceChange(){await this._workerHandle.invokeMethod("notifyElevationSourceChange",{})}async notifySymbologyChange(){await this._workerHandle.invokeMethod("notifySymbologyChange",{})}async setSymbologySnappingSupported(e){await this._workerHandle.invokeMethod("setSymbologySnappingSupported",e)}async setSuspended(e){this._suspendController?.abort(),this._suspendController=new AbortController,await this._workerHandle.invokeMethod("setSuspended",e,this._suspendController.signal)}};function h(e){return{filter:null!=e.filter?e.filter.toJSON():null,customParameters:e.customParameters,viewType:e.viewType}}function FeatureServiceSnappingSourceWorkerHandle_c(e){return"multipatch"===e.geometryType||"mesh"===e.geometryType?null:{url:e.parsedUrl?.path??"",fieldsIndex:e.fieldsIndex.toJSON(),geometryType:typeUtils/* featureGeometryTypeKebabDictionary */.gy.toJSON(e.geometryType),capabilities:e.capabilities,objectIdField:e.objectIdField,globalIdField:e.globalIdField,spatialReference:e.spatialReference.toJSON(),timeInfo:e.timeInfo?.toJSON()}}(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],FeatureServiceSnappingSourceWorkerHandle_u.prototype,"schedule",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],FeatureServiceSnappingSourceWorkerHandle_u.prototype,"hasZ",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],FeatureServiceSnappingSourceWorkerHandle_u.prototype,"elevationAlignPointsInFeatures",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],FeatureServiceSnappingSourceWorkerHandle_u.prototype,"queryForSymbologySnapping",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],FeatureServiceSnappingSourceWorkerHandle_u.prototype,"updating",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],FeatureServiceSnappingSourceWorkerHandle_u.prototype,"availability",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],FeatureServiceSnappingSourceWorkerHandle_u.prototype,"_workerHandleUpdating",void 0),FeatureServiceSnappingSourceWorkerHandle_u=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorkerHandle")],FeatureServiceSnappingSourceWorkerHandle_u);class y extends WorkerHandle/* WorkerHandle */.B{constructor(e,t){super("FeatureServiceSnappingSourceWorker","fetchCandidates",{},e,{strategy:"dedicated",client:t})}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Point.js
var Point = __webpack_require__(97066);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/LOD.js
var LOD = __webpack_require__(50437);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/TileInfo.js
var TileInfo = __webpack_require__(65228);
;// ../node_modules/@arcgis/core/views/interactive/snapping/featureSources/featureServiceSource/FeatureServiceTilesSimple.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let FeatureServiceTilesSimple_a=class extends Accessor/* default */.A{get tiles(){return[new TileKey/* TileKey */.U("0/0/0",0,0,0,(0,aaBoundingRect/* fromValues */.fA)(-1e8,-1e8,1e8,1e8))]}get tileInfo(){return new TileInfo/* default */.A({origin:new Point/* default */.A({x:-1e8,y:1e8,spatialReference:this.layer.spatialReference}),size:[512,512],lods:[new LOD/* default */.A({level:0,scale:1,resolution:390625})],spatialReference:this.layer.spatialReference})}get tileSize(){return this.tileInfo.size[0]}constructor(e){super(e),this.pointOfInterest=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],FeatureServiceTilesSimple_a.prototype,"tiles",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],FeatureServiceTilesSimple_a.prototype,"tileInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],FeatureServiceTilesSimple_a.prototype,"tileSize",null),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],FeatureServiceTilesSimple_a.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],FeatureServiceTilesSimple_a.prototype,"pointOfInterest",void 0),FeatureServiceTilesSimple_a=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTilesSimple")],FeatureServiceTilesSimple_a);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/support/debugFlags.js
var debugFlags = __webpack_require__(71678);
;// ../node_modules/@arcgis/core/views/interactive/snapping/featureSources/FeatureServiceSnappingSource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let O=class extends Accessor/* default */.A{get _updateTilesParameters(){return{tiles:this._tilesOfInterest.tiles,tileInfo:this._tilesOfInterest.tileInfo,tileSize:this._tilesOfInterest.tileSize}}get _layerView(){return this.view?.allLayerViews.find((e=>e.layer===this._layer))}get _isSuspended(){if((0,layerUtils/* isSubtypeGroupLayer */.F2)(this._layer)){if(!this.layerSource.sublayerSources.some((e=>e.enabled&&e.layer.visible)))return!0}return!!this.view&&(!1!==this._layerView?.suspended||!this.layerSource.enabled)}get updating(){return this._workerHandle?.updating||this._updatingHandles.updating}get _outFields(){const{view:e,_layerView:t,layerSource:r}=this,{layer:i}=r,{fieldsIndex:s,timeInfo:o,floorInfo:a,subtypeField:n}=i,l=t&&"filter"in t?t.filter:null,d=l?.where&&"1=1"!==l.where?this._getOrLoadWhereFields(l.where,s):[];if(l?.timeExtent&&o){const{startField:e,endField:t}=o,r=s.get(e)?.name??e,i=s.get(t)?.name??t;r&&d.push(r),i&&d.push(i)}if(e?.map&&(0,snappingUtils/* isUtilityNetworkWebMap */.Tu)(e.map)&&e.map.utilityNetworks?.find((e=>e.isUtilityLayer(i)))){const e=i.fieldsIndex.get("assetGroup")?.name,t=i.fieldsIndex.get("assetType")?.name;e&&t&&(d.push(e),d.push(t))}if(i&&a?.floorField&&e?.floors?.length){const e=s.get(a.floorField)?.name??a.floorField;e&&d.push(e)}if(n){const e=s.get(n)?.name??n;e&&d.push(e)}return new Set(d)}get configuration(){const{view:e}=this,{apiKey:t,customParameters:r}=this._layer,i=null!=e?e.type:"2d",s=this._layer.createQuery();return this._layerView&&"effectiveDisplayFilter"in this._layerView&&(s.where=(0,sql/* sqlAnd */.mA)(s.where,this._layerView.effectiveDisplayFilter?.where)),{filter:s,customParameters:t?{...r,token:t}:r,viewType:i}}get availability(){return this._workerHandle?.availability??0}get _layer(){return this.layerSource.layer}constructor(e){super(e),this._updatingHandles=new UpdatingHandles/* UpdatingHandles */.U,this._workerHandle=null,this._debug=null,this._memoizedMakeGetGroundElevation=(0,memoize/* memoize */.B)(queryEngineUtils/* makeGetGroundElevation */.p)}initialize(){let e;const t=this.view;if(null==t||t.destroyed)this._tilesOfInterest=new FeatureServiceTilesSimple_a({layer:this._layer}),e=this._workerHandle=new FeatureServiceSnappingSourceWorkerHandle_u;else switch(t.type){case"2d":this._tilesOfInterest=new p({view:t,layer:this._layer}),e=this._workerHandle=new FeatureServiceSnappingSourceWorkerHandle_u;break;case"3d":{const{resourceController:r}=t,i=this._layer;this._tilesOfInterest=new FeatureServiceTiles3D_a({view:t}),e=this._workerHandle=new FeatureServiceSnappingSourceWorkerHandle_u({schedule:e=>r.immediate.schedule(e),hasZ:this._layer.hasZ&&(this._layer.returnZ??!0),elevationAlignPointsInFeatures:async(e,r)=>{const s=await t.whenLayerView(i);return (0,promiseUtils/* throwIfAborted */.Te)(r),s.elevationAlignPointsInFeatures(e,r)},queryForSymbologySnapping:async(e,r)=>{const s=await t.whenLayerView(i);return (0,promiseUtils/* throwIfAborted */.Te)(r),s.queryForSymbologySnapping(e,r)}}),this.addHandles([t.elevationProvider.on("elevation-change",(({context:t})=>{const{elevationInfo:r}=i;(0,elevationInfoUtils/* elevationContextAffectsAlignment */.Up)(t,r)&&(0,promiseUtils/* ignoreAbortErrors */.QZ)(e.notifyElevationSourceChange())})),(0,reactiveUtils/* watch */.wB)((()=>i.elevationInfo),(()=>(0,promiseUtils/* ignoreAbortErrors */.QZ)(e.notifyElevationSourceChange())),reactiveUtils/* initial */.Vh),(0,reactiveUtils/* watch */.wB)((()=>this._layerView?.layer?.renderer),(()=>(0,promiseUtils/* ignoreAbortErrors */.QZ)(e.notifySymbologyChange())),reactiveUtils/* initial */.Vh),(0,reactiveUtils/* watch */.wB)((()=>this._layerView?.symbologySnappingSupported??!1),(t=>(0,promiseUtils/* ignoreAbortErrors */.QZ)(e.setSymbologySnappingSupported(t))),reactiveUtils/* initial */.Vh),(0,reactiveUtils.on)((()=>this._layerView?.layer),["edits","apply-edits","graphic-update"],(()=>e.notifySymbologyChange()))]);break}}this.addHandles([(0,handleUtils/* destroyHandle */.DQ)(e)]),(0,promiseUtils/* ignoreAbortErrors */.QZ)(e.setup({layer:this._layer,spatialReference:this.spatialReference,configuration:this.configuration},null)),this._updatingHandles.add((()=>this._updateTilesParameters),(()=>(0,promiseUtils/* ignoreAbortErrors */.QZ)(e.updateTiles(this._updateTilesParameters,null))),reactiveUtils/* initial */.Vh),this.addHandles([(0,reactiveUtils/* watch */.wB)((()=>this.configuration),(t=>(0,promiseUtils/* ignoreAbortErrors */.QZ)(e.configure(t,null))),reactiveUtils/* sync */.OH),(0,reactiveUtils/* watch */.wB)((()=>this._layer.historicMoment),(t=>(0,promiseUtils/* ignoreAbortErrors */.QZ)(e.setHistoricMoment(t))),reactiveUtils/* syncAndInitial */.pc),(0,reactiveUtils/* watch */.wB)((()=>this._outFields),(t=>(0,promiseUtils/* ignoreAbortErrors */.QZ)(e.updateOutFields(t))),reactiveUtils/* initial */.Vh),(0,reactiveUtils/* watch */.wB)((()=>this._isSuspended),(t=>(0,promiseUtils/* ignoreAbortErrors */.QZ)(e.setSuspended(t))),reactiveUtils/* syncAndInitial */.pc)]),null!=t&&this.addHandles((0,reactiveUtils/* watch */.wB)((()=>debugFlags/* default */.A.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES),(r=>{r&&!this._debug?(this._debug=new WorkerTileTreeDebugger_n({view:t,handle:e}),this.addHandles((0,handleUtils/* destroyHandle */.DQ)(this._debug),"debug")):!r&&this._debug&&this.removeHandles("debug")}),reactiveUtils/* initial */.Vh)),this.addHandles([this.layerSource.layer.on("edits",(t=>(0,promiseUtils/* ignoreAbortErrors */.QZ)(e.handleEdits(t,null)))),this.layerSource.layer.on("apply-edits",(e=>this._updatingHandles.addPromise(e.result)))])}destroy(){this._updatingHandles.destroy(),this._tilesOfInterest.destroy()}refresh(){this._workerHandle?.refresh(null)}async fetchCandidates(e,t){const{coordinateHelper:r,point:i}=e;this._tilesOfInterest.pointOfInterest=r.arrayToPoint(i);const s=this._memoizedMakeGetGroundElevation(this.view,r.spatialReference);return(await this._workerHandle.fetchCandidates({...e},t)).candidates.map((e=>(0,queryEngineUtils/* convertSnappingCandidate */.$)(e,s)))}getDebugInfo(e){return this._workerHandle.getDebugInfo(e)}_getOrLoadWhereFields(e,t){const{_whereModule:i}=this;if(!this._loadWhereModuleTask&&!i){const e=(0,asyncUtils/* createTask */.UT)((async()=>{const e=await __webpack_require__.e(/* import() */ 6826).then(__webpack_require__.bind(__webpack_require__, 46826));return this._whereModule=e.default,this._whereModule}));return this._loadWhereModuleTask=e,this._updatingHandles.addPromise(e.promise),[]}if(!i)return[];try{return i.create(e,{fieldsIndex:t}).fieldNames}catch(s){return[]}}};(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],O.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],O.prototype,"layerSource",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],O.prototype,"view",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],O.prototype,"_tilesOfInterest",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],O.prototype,"_updateTilesParameters",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],O.prototype,"_layerView",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],O.prototype,"_isSuspended",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],O.prototype,"updating",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],O.prototype,"_outFields",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],O.prototype,"configuration",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],O.prototype,"availability",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],O.prototype,"_loadWhereModuleTask",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],O.prototype,"_whereModule",void 0),O=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")],O);


/***/ }),

/***/ 78200:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ o),
/* harmony export */   p: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97847);
/* harmony import */ var _candidates_DrapedEdgeSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46113);
/* harmony import */ var _candidates_EdgeSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15991);
/* harmony import */ var _candidates_VertexSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22970);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function a({x:e,y:n,z:d}){return (0,_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_0__/* .fromValues */ .fA)(e,n,d??0)}function o(t,o){switch(t.type){case"edge":return t.draped?new _candidates_DrapedEdgeSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_1__/* .DrapedEdgeSnappingCandidate */ .X({edgeStart:a(t.start),edgeEnd:a(t.end),targetPoint:(0,_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_0__/* .markAsTarget */ .de)(a(t.target)),objectId:t.objectId,getGroundElevation:o}):new _candidates_EdgeSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_2__/* .EdgeSnappingCandidate */ .z({edgeStart:a(t.start),edgeEnd:a(t.end),targetPoint:(0,_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_0__/* .markAsTarget */ .de)(a(t.target)),objectId:t.objectId,isDraped:!1});case"vertex":return new _candidates_VertexSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_3__/* .VertexSnappingCandidate */ .C({targetPoint:(0,_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_0__/* .markAsTarget */ .de)(a(t.target)),objectId:t.objectId,isDraped:!1})}}function i(e,t){return null!=e&&"3d"===e.type?(n,d)=>e.elevationProvider.getElevation(n,d,0,t,"ground"):()=>null}


/***/ }),

/***/ 75796:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24121);
/* harmony import */ var _SnappingHint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53830);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class n extends _SnappingHint_js__WEBPACK_IMPORTED_MODULE_1__/* .SnappingHint */ .m{constructor(t,s,n){super(s,n),this.point=t}equals(s){return s instanceof n&&(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.q)(this.point,s.point)}}


/***/ })

};
;