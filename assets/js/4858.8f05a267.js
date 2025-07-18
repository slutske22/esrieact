"use strict";
exports.id = 4858;
exports.ids = [4858];
exports.modules = {

/***/ 28769:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ W),
/* harmony export */   c: () => (/* binding */ Z),
/* harmony export */   g: () => (/* binding */ $),
/* harmony export */   h: () => (/* binding */ as),
/* harmony export */   u: () => (/* binding */ J)
/* harmony export */ });
/* unused harmony exports A, B, C, b, d, e, f, i, j, k, l, m, n, o, p, q, r, s, t, v, w, x, y, z */
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(539);
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92504);
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(92114);
/* harmony import */ var _mat4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37046);
/* harmony import */ var _mat4f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56192);
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21839);
/* harmony import */ var _vec3f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22279);
/* harmony import */ var _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58331);
/* harmony import */ var _geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22759);
/* harmony import */ var _geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38774);
/* harmony import */ var _geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(32532);
/* harmony import */ var _geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16597);
/* harmony import */ var _geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(45573);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const U=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");class z{constructor(){this.plane=(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__/* .create */ .vt)(),this.origin=(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__.c)(),this.basis1=(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__.c)(),this.basis2=(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__.c)()}}const G=z;function W(s=Ns){return{plane:(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__/* .create */ .vt)(s.plane),origin:(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__.g)(s.origin),basis1:(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__.g)(s.basis1),basis2:(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__.g)(s.basis2)}}function X(s,t,i){const n=Ts.get();return n.origin=s,n.basis1=t,n.basis2=i,n.plane=(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__/* .wrap */ .LV)(0,0,0,0),J(n),n}function Z(s,t=W()){return H(s.origin,s.basis1,s.basis2,t)}function D(s,t){(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.c)(t.origin,s.origin),(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.c)(t.basis1,s.basis1),(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.c)(t.basis2,s.basis2),(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__/* .copy */ .C)(t.plane,s.plane)}function H(s,t,i,n=W()){return (0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.c)(n.origin,s),(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.c)(n.basis1,t),(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.c)(n.basis2,i),J(n),Ps(n,"fromValues()"),n}function J(s){(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__/* .fromVectorsAndPoint */ .mR)(s.basis2,s.basis1,s.origin,s.plane)}function K(s,t,i){s!==i&&Z(s,i);const n=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.i)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get(),ds(s),t);return (0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.g)(i.origin,i.origin,n),i.plane[3]-=t,i}function Q(s,t,i){return $(t,i),K(i,bs(s,s.origin),i),i}function $(s,t=W()){const i=(s[2]-s[0])/2,n=(s[3]-s[1])/2;return (0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.s)(t.origin,s[0]+i,s[1]+n,0),(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.s)(t.basis1,i,0,0),(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.s)(t.basis2,0,n,0),(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__/* .fromValues */ .fA)(0,0,1,0,t.plane),t}function ss(s,t,i){return!!(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__/* .intersectRay */ .Ui)(s.plane,t,i)&&js(s,i)}function ts(s,t,i){if(ss(s,t,i))return i;const n=is(s,t,_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get());return (0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.g)(i,t.origin,(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.i)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get(),t.direction,(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.o)(t.origin,n)/(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.l)(t.direction))),i}function is(s,i,n){const o=ws.get();vs(s,i,o,ws.get());let r=Number.POSITIVE_INFINITY;for(const e of As){const c=ys(s,e,Ms.get()),u=_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get();if((0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__/* .intersectLineSegment */ .T7)(o,c,u)){const s=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.C)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get(),i.origin,u),o=Math.abs((0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .acosClamped */ .XM)((0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.j)(i.direction,s)));o<r&&(r=o,(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.c)(n,u))}}return r===Number.POSITIVE_INFINITY?ns(s,i,n):n}function ns(s,t,i){if(ss(s,t,i))return i;const n=ws.get(),o=ws.get();vs(s,t,n,o);let r=Number.POSITIVE_INFINITY;for(const e of As){const c=ys(s,e,Ms.get()),u=_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get();if((0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__/* .intersectLineSegmentClamp */ .gv)(n,c,u)){const s=(0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_10__/* .distance2 */ .kb)(t,u);if(!(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__/* .isPointInside */ .Tj)(o,u))continue;s<r&&(r=s,(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.c)(i,u))}}return es(s,t.origin)<r&&os(s,t.origin,i),i}function os(s,t,i){const n=(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__/* .projectPoint */ ._I)(s.plane,t,_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get()),o=(0,_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_8__/* .projectPointClamp */ .H6)(Is(s,s.basis1),n,-1,1,_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get()),r=(0,_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_8__/* .projectPointClamp */ .H6)(Is(s,s.basis2),n,-1,1,_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get());return (0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.f)(i,(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.g)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get(),o,r),s.origin),i}function rs(s,t,i){const{origin:n,basis1:o,basis2:r}=s,e=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.f)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get(),t,n),a=(0,_geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_11__/* .projectPointSignedLength */ .gr)(o,e),c=(0,_geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_11__/* .projectPointSignedLength */ .gr)(r,e),u=(0,_geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_11__/* .projectPointSignedLength */ .gr)(ds(s),e);return (0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.s)(i,a,c,u)}function es(s,t){const i=rs(s,t,_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get()),{basis1:n,basis2:o}=s,r=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.l)(n),e=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.l)(o),a=Math.max(Math.abs(i[0])-r,0),c=Math.max(Math.abs(i[1])-e,0),u=i[2];return a*a+c*c+u*u}function as(s,t){return Math.sqrt(es(s,t))}function cs(s,t){let i=Number.NEGATIVE_INFINITY;for(const n of As){const o=ys(s,n,Ms.get()),r=(0,_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_8__/* .distance2 */ .kb)(o,t);r>i&&(i=r)}return Math.sqrt(i)}function us(s,t){return (0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__/* .isPointInside */ .Tj)(s.plane,t)&&js(s,t)}function gs(s,t,i,n){return hs(s,i,n)}function bs(s,t){const i=-s.plane[3];return (0,_geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_11__/* .projectPointSignedLength */ .gr)(ds(s),t)-i}function fs(s,t,i,n){const o=bs(s,t),r=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.i)(Ss,ds(s),i-o);return (0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.g)(n,t,r),n}function ps(s,t){return (0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.h)(s.basis1,t.basis1)&&(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.h)(s.basis2,t.basis2)&&(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.h)(s.origin,t.origin)}function ls(s,t,i){return s!==i&&Z(s,i),(0,_mat4_js__WEBPACK_IMPORTED_MODULE_3__.i)(xs,t),(0,_mat4_js__WEBPACK_IMPORTED_MODULE_3__.t)(xs,xs),(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.e)(i.basis1,s.basis1,xs),(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.e)(i.basis2,s.basis2,xs),(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.e)((0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__/* .normal */ .qb)(i.plane),(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__/* .normal */ .qb)(s.plane),xs),(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.e)(i.origin,s.origin,t),(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__/* .setOffsetFromPoint */ .mP)(i.plane,i.plane,i.origin),i}function ms(s,t,i,n){return s!==n&&Z(s,n),(0,_mat4_js__WEBPACK_IMPORTED_MODULE_3__.c)(Vs,t,i),(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.e)(n.basis1,s.basis1,Vs),(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.e)(n.basis2,s.basis2,Vs),J(n),n}function ds(s){return (0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__/* .normal */ .qb)(s.plane)}function hs(s,t,i){switch(t){case _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_7__/* .Axis */ ._.X:(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.c)(i,s.basis1),(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.n)(i,i);break;case _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_7__/* .Axis */ ._.Y:(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.c)(i,s.basis2),(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.n)(i,i);break;case _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_7__/* .Axis */ ._.Z:(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.c)(i,ds(s))}return i}function js(s,t){const i=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.f)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get(),t,s.origin),n=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.m)(s.basis1),o=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.m)(s.basis2),r=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.j)(s.basis1,i),e=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.j)(s.basis2,i);return-r-n<0&&r-n<0&&-e-o<0&&e-o<0}function Is(s,t){const i=Ms.get();return (0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.c)(i.origin,s.origin),(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.c)(i.vector,t),i}function ys(s,t,i){const{basis1:n,basis2:o,origin:r}=s,e=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.i)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get(),n,t.origin[0]),a=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.i)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get(),o,t.origin[1]);(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.g)(i.origin,e,a),(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.g)(i.origin,i.origin,r);const g=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.i)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get(),n,t.direction[0]),b=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.i)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get(),o,t.direction[1]);return (0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.i)(i.vector,(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.g)(g,g,b),2),i}function Ps(s,t){Math.abs((0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.j)(s.basis1,s.basis2)/((0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.l)(s.basis1)*(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.l)(s.basis2)))>1e-6&&U.warn(t,"Provided basis vectors are not perpendicular"),Math.abs((0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.j)(s.basis1,ds(s)))>1e-6&&U.warn(t,"Basis vectors and plane normal are not perpendicular"),Math.abs(-(0,_vec3_js__WEBPACK_IMPORTED_MODULE_5__.j)(ds(s),s.origin)-s.plane[3])>1e-6&&U.warn(t,"Plane offset is not consistent with plane origin")}function vs(s,t,i,n){const o=ds(s);(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__/* .fromVectorsAndPoint */ .mR)(o,t.direction,t.origin,i),(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__/* .fromVectorsAndPoint */ .mR)((0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__/* .normal */ .qb)(i),o,t.origin,n)}const Ns={plane:(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__/* .create */ .vt)(),origin:(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__.f)(0,0,0),basis1:(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__.f)(1,0,0),basis2:(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__.f)(0,1,0)},ws=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_13__/* .ObjectStack */ .I(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__/* .create */ .vt),Ms=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_13__/* .ObjectStack */ .I(_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_8__/* .create */ .vt),Ss=(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__.c)(),Ts=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_13__/* .ObjectStack */ .I((()=>W())),As=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],xs=(0,_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__.a)(),Vs=(0,_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__.a)(),_s=Object.freeze(Object.defineProperty({__proto__:null,BoundedPlaneClass:G,altitudeAt:bs,axisAt:gs,closestPoint:ns,closestPointOnSilhouette:is,copy:Z,copyWithoutVerify:D,create:W,distance:as,distance2:es,distanceToSilhouette:cs,elevate:K,equals:ps,extrusionContainsPoint:us,fromAABoundingRect:$,fromValues:H,intersectRay:ss,intersectRayClosestSilhouette:ts,normal:ds,projectPoint:os,projectPointLocal:rs,rotate:ms,setAltitudeAt:fs,setExtent:Q,transform:ls,up:Ns,updateUnboundedPlane:J,wrap:X},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 6371:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
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
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class h{constructor(e,t,r,h,o={}){this._mainMethod=t,this._transferLists=r,this._listeners=[],this._promise=(0,_workers_js__WEBPACK_IMPORTED_MODULE_4__/* .open */ .ho)(e,{...o,schedule:h}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,o.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>_Logger_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.getLogger("esri.core.workers.WorkerHandle").error(`Failed to initialize ${e} worker: ${t}`)))}on(s,r){const i={removed:!1,eventName:s,callback:r,threadHandle:null};return this._listeners.push(i),this._connectListener(i),(0,_handleUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .makeHandle */ .hA)((()=>{i.removed=!0,(0,_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .remove */ .TF)(this._listeners,i),this._thread&&null!=i.threadHandle&&i.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null,this._listeners.length=0,this._transferLists={}}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,s){if(this._thread){const r=this._transferLists[e],i=r?r(t):[];return this._thread.invoke(e,t,{transferList:i,signal:s})}return this._promise?this._promise.then((()=>((0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .throwIfAborted */ .Te)(s),this.invokeMethod(e,t,s)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}


/***/ }),

/***/ 22759:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ p),
/* harmony export */   Cr: () => (/* binding */ b),
/* harmony export */   H6: () => (/* binding */ d),
/* harmony export */   _I: () => (/* binding */ l),
/* harmony export */   dz: () => (/* binding */ B),
/* harmony export */   fA: () => (/* binding */ h),
/* harmony export */   kb: () => (/* binding */ M),
/* harmony export */   ld: () => (/* binding */ k),
/* harmony export */   sd: () => (/* binding */ A),
/* harmony export */   vt: () => (/* binding */ v)
/* harmony export */ });
/* unused harmony exports closestLineSegmentDistance2, distance, wrap */
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92504);
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92114);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21839);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22279);
/* harmony import */ var _vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45573);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function v(t){return t?{origin:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.g)(t.origin),vector:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.g)(t.vector)}:{origin:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),vector:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)()}}function m(t,r){const n=x.get();return n.origin=t,n.vector=r,n}function p(t,r=v()){return h(t.origin,t.vector,r)}function h(t,r,o=v()){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.c)(o.origin,t),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.c)(o.vector,r),o}function b(t,r,i=v()){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.c)(i.origin,t),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.f)(i.vector,r,t),i}function M(r,n){const c=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.f)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__/* .sv3d */ .rq.get(),n,r.origin),s=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.j)(r.vector,c),u=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.j)(r.vector,r.vector),a=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .clamp */ .qE)(s/u,0,1),g=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.f)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__/* .sv3d */ .rq.get(),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.i)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__/* .sv3d */ .rq.get(),r.vector,a),c);return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.j)(g,g)}function j(t,r){return Math.sqrt(M(t,r))}function l(t,r,n){return d(t,r,0,1,n)}function A(t,r,n){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.g)(n,t.origin,(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.i)(n,t.vector,r))}function d(r,n,u,a,g){const{vector:v,origin:m}=r,p=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.f)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__/* .sv3d */ .rq.get(),n,m),h=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.j)(v,p)/(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.m)(v);return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.i)(g,v,(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .clamp */ .qE)(h,u,a)),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.g)(g,g,r.origin)}function B(t,r){if(q(t,m(r.origin,r.direction),!1,w)){const{tA:r,pB:n,distance2:o}=w;if(r>=0&&r<=1)return o;if(r<0)return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.a)(t.origin,n);if(r>1)return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.a)((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.g)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__/* .sv3d */ .rq.get(),t.origin,t.vector),n)}return null}function k(t,r,o){return!!q(t,r,!0,w)&&((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.c)(o,w.pA),!0)}function S(t,r){return q(t,r,!0,w)?w.distance2:null}function q(r,n,o,i){const e=1e-6,s=r.origin,a=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.g)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__/* .sv3d */ .rq.get(),s,r.vector),g=n.origin,v=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.g)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__/* .sv3d */ .rq.get(),g,n.vector),m=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__/* .sv3d */ .rq.get(),p=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__/* .sv3d */ .rq.get();if(m[0]=s[0]-g[0],m[1]=s[1]-g[1],m[2]=s[2]-g[2],p[0]=v[0]-g[0],p[1]=v[1]-g[1],p[2]=v[2]-g[2],Math.abs(p[0])<e&&Math.abs(p[1])<e&&Math.abs(p[2])<e)return!1;const h=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__/* .sv3d */ .rq.get();if(h[0]=a[0]-s[0],h[1]=a[1]-s[1],h[2]=a[2]-s[2],Math.abs(h[0])<e&&Math.abs(h[1])<e&&Math.abs(h[2])<e)return!1;const b=m[0]*p[0]+m[1]*p[1]+m[2]*p[2],M=p[0]*h[0]+p[1]*h[1]+p[2]*h[2],j=m[0]*h[0]+m[1]*h[1]+m[2]*h[2],l=p[0]*p[0]+p[1]*p[1]+p[2]*p[2],A=(h[0]*h[0]+h[1]*h[1]+h[2]*h[2])*l-M*M;if(Math.abs(A)<e)return!1;let d=(b*M-j*l)/A,B=(b+M*d)/l;o&&(d=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .clamp */ .qE)(d,0,1),B=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .clamp */ .qE)(B,0,1));const k=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__/* .sv3d */ .rq.get(),S=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__/* .sv3d */ .rq.get();return k[0]=s[0]+d*h[0],k[1]=s[1]+d*h[1],k[2]=s[2]+d*h[2],S[0]=g[0]+B*p[0],S[1]=g[1]+B*p[1],S[2]=g[2]+B*p[2],i.tA=d,i.tB=B,i.pA=k,i.pB=S,i.distance2=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.a)(k,S),!0}const w={tA:0,tB:0,pA:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),pB:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),distance2:0},x=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_4__/* .ObjectStack */ .I((()=>v()));


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
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class r extends _FeatureSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_1__/* .FeatureSnappingCandidate */ .w{constructor(n){super({...n,constraint:new _sketch_constraints_js__WEBPACK_IMPORTED_MODULE_0__/* .PointConstraint */ .i7(n.targetPoint)})}get hints(){return[new _hints_PointSnappingHint_js__WEBPACK_IMPORTED_MODULE_2__/* .PointSnappingHint */ ._(this.targetPoint,this.isDraped,this.domain)]}}


/***/ }),

/***/ 44858:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  FeatureServiceSnappingSource: () => (/* binding */ F)
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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3.js
var vec3 = __webpack_require__(21839);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec4f64.js
var vec4f64 = __webpack_require__(52712);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/boundedPlane.js
var boundedPlane = __webpack_require__(28769);
;// ../node_modules/@arcgis/core/views/interactive/snapping/featureSources/featureServiceSource/tileUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function c(n,o){return (0,boundedPlane.g)(o.extent,tileUtils_e),(0,boundedPlane.h)(tileUtils_e,(0,vec3.s)(a,n.x,n.y,0))}const tileUtils_e=(0,boundedPlane.a)(),a=(0,vec4f64.c)();

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/support/layerViewUtils.js
var layerViewUtils = __webpack_require__(38201);
;// ../node_modules/@arcgis/core/views/2d/interactive/snapping/featureSources/featureServiceSource/FeatureServiceTiles2D.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let p=class extends Accessor/* default */.A{get tiles(){const e=this.tilesCoveringView,t=null!=this.pointOfInterest?this.pointOfInterest:this.view.center;return e.sort(((e,r)=>c(t,e)-c(t,r))),e}_scaleEnabled(){return (0,layerViewUtils/* scaleBoundsPredicate */.JU)(this.view.scale,this.layer.minScale||0,this.layer.maxScale||0)}get tilesCoveringView(){if(!this.view.ready||!this.view.featuresTilingScheme||!this.view.state||null==this.tileInfo)return[];if(!this._scaleEnabled)return[];const{spans:e,lodInfo:t}=this.view.featuresTilingScheme.getTileCoverage(this.view.state,0),{level:r}=t,i=[];for(const{row:o,colFrom:s,colTo:n}of e)for(let e=s;e<=n;e++){const s=t.normalizeCol(e),n=new TileKey/* TileKey */.U(null,r,o,s);this.tileInfo.updateTileInfo(n),i.push(n)}return i}get tileInfo(){return this.view.featuresTilingScheme?.tileInfo??null}get tileSize(){return null!=this.tileInfo?this.tileInfo.size[0]:256}constructor(e){super(e),this.pointOfInterest=null}initialize(){this.addHandles((0,reactiveUtils/* watch */.wB)((()=>this.view?.state?.viewpoint),(()=>this.notifyChange("tilesCoveringView")),reactiveUtils/* sync */.OH))}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],p.prototype,"tiles",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],p.prototype,"_scaleEnabled",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],p.prototype,"tilesCoveringView",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],p.prototype,"tileInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],p.prototype,"tileSize",null),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],p.prototype,"view",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],p.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],p.prototype,"pointOfInterest",void 0),p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles2D")],p);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/aaBoundingRect.js
var aaBoundingRect = __webpack_require__(80510);
;// ../node_modules/@arcgis/core/views/3d/layers/support/FeatureTileDescriptor3D.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class t{constructor(e,t,h,r=null){this.lij=[0,0,0],this.extent=i(),this.resolution=0,this.loadPriority=0,this.measures={visibility:s.VISIBLE_ON_SURFACE,screenRect:i(),distance:0,shouldSplit:!1},this.used=!1,r&&this.acquire(e,t,h,r)}acquire(i,e,s,h){this.tilingScheme=h,this.id=t.id(i,e,s),this.lij[0]=i,this.lij[1]=e,this.lij[2]=s,h.getExtent(i,e,s,this.extent),this.resolution=h.resolutionAtLevel(i)}release(){this.tilingScheme=null}getChildren(i){const e=this.lij[0]+1,s=2*this.lij[1],h=2*this.lij[2];return i?(i[0].acquire(e,s,h,this.tilingScheme),i[1].acquire(e,s+1,h,this.tilingScheme),i[2].acquire(e,s,h+1,this.tilingScheme),i[3].acquire(e,s+1,h+1,this.tilingScheme),i):[new t(e,s,h,this.tilingScheme),new t(e,s+1,h,this.tilingScheme),new t(e,s,h+1,this.tilingScheme),new t(e,s+1,h+1,this.tilingScheme)]}copyMeasurementsFrom(i){this.measures.visibility=i.measures.visibility,this.measures.shouldSplit=i.measures.shouldSplit,this.measures.distance=i.measures.distance,e(i.measures.screenRect,this.measures.screenRect)}static id(i,e,t){return`${i}/${e}/${t}`}}var s;!function(i){i[i.INVISIBLE=0]="INVISIBLE",i[i.VISIBLE_WHEN_EXTENDED=1]="VISIBLE_WHEN_EXTENDED",i[i.VISIBLE_ON_SURFACE=2]="VISIBLE_ON_SURFACE"}(s||(s={}));

;// ../node_modules/@arcgis/core/views/3d/interactive/snapping/featureSources/featureServiceSource/FeatureServiceTiles3D.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let FeatureServiceTiles3D_p=class extends Accessor/* default */.A{get tiles(){const e=this.tilesCoveringView,t=this._effectivePointOfInterest;if(null!=t){const r=e.map((e=>c(t,e)));for(let i=1;i<r.length;i++)if(r[i-1]>r[i])return e.sort(((e,r)=>c(t,e)-c(t,r))),e.slice()}return e}get tilesCoveringView(){return this._filterTiles(this.view.featureTiles?.tiles?.toArray()).map(u)}get tileInfo(){return this.view.featureTiles?.tilingScheme.toTileInfo()??null}get tileSize(){return this.view.featureTiles?.tileSize??256}get _effectivePointOfInterest(){const e=this.pointOfInterest;return null!=e?e:this.view.pointsOfInterest?.focus.location}constructor(e){super(e),this.pointOfInterest=null}initialize(){this.addHandles((0,reactiveUtils/* watch */.wB)((()=>this.view.featureTiles),(e=>{this.removeHandles(f),e&&this.addHandles(e.addClient(),f)}),reactiveUtils/* initial */.Vh))}_filterTiles(e){if(null==e)return[];return e.filter((e=>Math.abs(e.measures.screenRect[3]-e.measures.screenRect[1])>FeatureServiceTiles3D_a&&e.measures.visibility===s.VISIBLE_ON_SURFACE))}};function u({lij:[e,t,r],extent:i}){return new TileKey/* TileKey */.U(`${e}/${t}/${r}`,e,t,r,i)}(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],FeatureServiceTiles3D_p.prototype,"tiles",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],FeatureServiceTiles3D_p.prototype,"tilesCoveringView",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],FeatureServiceTiles3D_p.prototype,"tileInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],FeatureServiceTiles3D_p.prototype,"tileSize",null),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],FeatureServiceTiles3D_p.prototype,"view",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],FeatureServiceTiles3D_p.prototype,"pointOfInterest",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],FeatureServiceTiles3D_p.prototype,"_effectivePointOfInterest",null),FeatureServiceTiles3D_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles3D")],FeatureServiceTiles3D_p);const FeatureServiceTiles3D_a=50,f="feature-tiles";

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/snapping/snappingUtils.js
var snappingUtils = __webpack_require__(61851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/snapping/featureSources/queryEngineUtils.js
var queryEngineUtils = __webpack_require__(78200);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Polygon.js
var Polygon = __webpack_require__(62802);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(96220);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/Graphic.js
var Graphic = __webpack_require__(25707);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols.js + 1 modules
var symbols = __webpack_require__(30822);
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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/Symbol3DVerticalOffset.js
var Symbol3DVerticalOffset = __webpack_require__(11195);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/callouts/LineCallout3D.js
var LineCallout3D = __webpack_require__(76550);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/callouts/LineCallout3DBorder.js
var LineCallout3DBorder = __webpack_require__(69676);
;// ../node_modules/@arcgis/core/views/support/TileTreeDebugger.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const TileTreeDebugger_u=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]];let d=class extends Accessor/* default */.A{constructor(e){super(e),this.updating=!1,this.enablePolygons=!0,this.enableLabels=!0,this._polygons=new Map,this._labels=new Map,this._enabled=!0}initialize(){this._symbols=TileTreeDebugger_u.map((e=>new SimpleFillSymbol/* default */.A({color:[e[0],e[1],e[2],.6],outline:{color:"black",width:1}}))),this.update()}destroy(){this._enabled=!1,this.clear()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&(this._enabled=e,this.update())}update(){if(!this._enabled)return void this.clear();const e=e=>{if(null!=e.label)return e.label;let s=e.lij.toString();return null!=e.loadPriority&&(s+=` (${e.loadPriority})`),s},t=this.getTiles(),i=new Array,a=new Set((this._labels.size,this._labels.keys()));t.forEach(((m,u)=>{const d=m.lij.toString();a.delete(d);const g=m.lij[0],f=m.geometry;if(this.enablePolygons&&!this._polygons.has(d)){const e=new Graphic/* default */.A({geometry:f,symbol:this._symbols[g%this._symbols.length]});this._polygons.set(d,e),i.push(e)}if(this.enableLabels){const a=e(m),g=u/(t.length-1),w=(0,mathUtils/* lerp */.Cc)(0,200,g),_=(0,mathUtils/* lerp */.Cc)(20,6,g)/.75,j=null!=m.loadPriority&&m.loadPriority>=t.length,v=new Color/* default */.A([w,j?0:w,j?0:w]),S="3d"===this.view.type?()=>new PointSymbol3D/* default */.A({verticalOffset:new Symbol3DVerticalOffset/* default */.A({screenLength:40/.75}),callout:new LineCallout3D/* default */.A({color:new Color/* default */.A("white"),border:new LineCallout3DBorder/* default */.A({color:new Color/* default */.A("black")})}),symbolLayers:new Collection/* default */.A([new TextSymbol3DLayer/* default */.A({text:a,halo:{color:"white",size:1/.75},material:{color:v},size:_})])}):()=>new TextSymbol/* default */.A({text:a,haloColor:"white",haloSize:1/.75,color:v,size:_}),x=this._labels.get(d);if(x){const e=S();null!=x.symbol&&JSON.stringify(e)===JSON.stringify(x.symbol)||(x.symbol=e)}else{const e=new Graphic/* default */.A({geometry:f.extent.center,symbol:S()});this._labels.set(d,e),i.push(e)}}}));const m=new Array;a.forEach((e=>{const s=this._polygons.get(e);null!=s&&(m.push(s),this._polygons.delete(e));const o=this._labels.get(e);null!=o&&(m.push(o),this._labels.delete(e))})),this.view.graphics.removeMany(m),this.view.graphics.addMany(i)}clear(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}};(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],d.prototype,"view",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],d.prototype,"updating",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],d.prototype,"enabled",null),d=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.support.TileTreeDebugger")],d);

;// ../node_modules/@arcgis/core/views/interactive/snapping/featureSources/WorkerTileTreeDebugger.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let n=class extends d{constructor(e){super(e)}initialize(){const e=setInterval((()=>this._fetchDebugInfo()),2e3);this.addHandles((0,handleUtils/* makeHandle */.hA)((()=>clearInterval(e))))}getTiles(){if(!this._debugInfo)return[];const e=new Map,t=new Map;this._debugInfo.storedTiles.forEach((t=>{e.set(t.data.id,t.featureCount)})),this._debugInfo.pendingTiles.forEach((r=>{e.set(r.data.id,r.featureCount),t.set(r.data.id,r.state)}));const r=r=>{const o=t.get(r),s=e.get(r)??"?";return o?`${o}:${s}\n${r}`:`store:${s}\n${r}`},o=new Map;return this._debugInfo.storedTiles.forEach((e=>{o.set(e.data.id,e.data)})),this._debugInfo.pendingTiles.forEach((e=>{o.set(e.data.id,e.data)})),Array.from(o.values()).map((e=>({lij:[e.level,e.row,e.col],geometry:Polygon/* default */.A.fromExtent((0,aaBoundingRect/* toExtent */.w1)(e.extent,this.view.spatialReference)),label:r(e.id)})))}_fetchDebugInfo(){this.handle.getDebugInfo(null).then((e=>{this._debugInfo=e,this.update()}))}};(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],n.prototype,"handle",void 0),n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.snapping.featureSources.WorkerTileTreeDebugger")],n);

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
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let h=class extends Accessor/* default */.A{get updating(){return this._updatingHandles.updating||this._workerHandleUpdating}constructor(e){super(e),this._updatingHandles=new UpdatingHandles/* UpdatingHandles */.U,this._suspendController=null,this.schedule=null,this.hasZ=!1,this.elevationAlignPointsInFeatures=async e=>{const t=[];for(const{points:i}of e.pointsInFeatures)for(const{z:e}of i)t.push(e);return{elevations:t,drapedObjectIds:new Set,failedObjectIds:new Set}},this.queryForSymbologySnapping=async()=>({candidates:[],sourceCandidateIndices:[]}),this.availability=0,this._workerHandleUpdating=!0,this._editId=0,this.updateOutFields=(0,promiseUtils/* debounce */.sg)((async(e,t)=>{await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateOutFields",[...e],t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}))}destroy(){this._suspendController=(0,maybe/* abortMaybe */.DC)(this._suspendController),this._workerHandle.destroy(),this._updatingHandles.destroy()}initialize(){this._workerHandle=new FeatureServiceSnappingSourceWorkerHandle_c(this.schedule,{alignElevation:async(e,{signal:t})=>({result:await this.elevationAlignPointsInFeatures(e.query,t)}),getSymbologyCandidates:async(e,{signal:t})=>({result:await this.queryForSymbologySnapping(e,t)})}),this.addHandles([this._workerHandle.on("notify-updating",(({updating:e})=>this._workerHandleUpdating=e)),this._workerHandle.on("notify-availability",(({availability:e})=>this._set("availability",e)))])}async setup(e,t){const i=this._serviceInfoFromLayer(e.layer);if(null==i)return;const o={configuration:this._convertConfiguration(e.configuration),serviceInfo:i,spatialReference:e.spatialReference.toJSON(),hasZ:this.hasZ,elevationInfo:e.layer.elevationInfo?.toJSON()};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("setup",o,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async configure(e,t){const i=this._convertConfiguration(e);await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("configure",i,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async refresh(e){await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("refresh",{},e)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},e))}async fetchCandidates(e,t){const{point:i,filter:o,coordinateHelper:n}=e,a={...e,point:(0,dehydratedPoint/* makeDehydratedPoint */.T)(i[0],i[1],i[2],n.spatialReference.toJSON()),filter:o?.toJSON()};return this._workerHandle.invoke(a,t)}async updateTiles(e,t){const i={tiles:e.tiles,tileInfo:null!=e.tileInfo?e.tileInfo.toJSON():null,tileSize:e.tileSize};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateTiles",i,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async applyEdits(e,t){const o=this._editId++,n={id:o};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("beginApplyEdits",n,t));const r=await this._updatingHandles.addPromise((0,promiseUtils/* whenOrAbort */.qr)(e.result,t)),s={id:o,edits:{addedFeatures:r.addedFeatures?.map((({objectId:e})=>e)).filter(arrayUtils/* isSome */.Ru)??[],deletedFeatures:r.deletedFeatures?.map((({objectId:e,globalId:t})=>({objectId:e,globalId:t})))??[],updatedFeatures:r.updatedFeatures?.map((({objectId:e})=>e)).filter(arrayUtils/* isSome */.Ru)??[]}};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("endApplyEdits",s,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}getDebugInfo(e){return this._workerHandle.invokeMethod("getDebugInfo",{},e)}async notifyElevationSourceChange(){await this._workerHandle.invokeMethod("notifyElevationSourceChange",{})}async notifySymbologyChange(){await this._workerHandle.invokeMethod("notifySymbologyChange",{})}async setSymbologySnappingSupported(e){await this._workerHandle.invokeMethod("setSymbologySnappingSupported",e)}async setSuspended(e){this._suspendController?.abort(),this._suspendController=new AbortController,await this._workerHandle.invokeMethod("setSuspended",e,this._suspendController.signal)}_convertConfiguration(e){return{filter:null!=e.filter?e.filter.toJSON():null,customParameters:e.customParameters,viewType:e.viewType}}_serviceInfoFromLayer(e){return"multipatch"===e.geometryType||"mesh"===e.geometryType?null:{url:e.parsedUrl?.path??"",fieldsIndex:e.fieldsIndex.toJSON(),geometryType:typeUtils/* featureGeometryTypeKebabDictionary */.g.toJSON(e.geometryType),capabilities:e.capabilities,objectIdField:e.objectIdField,globalIdField:e.globalIdField,spatialReference:e.spatialReference.toJSON(),timeInfo:e.timeInfo?.toJSON()}}};(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],h.prototype,"schedule",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],h.prototype,"hasZ",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],h.prototype,"elevationAlignPointsInFeatures",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],h.prototype,"queryForSymbologySnapping",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],h.prototype,"updating",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],h.prototype,"availability",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],h.prototype,"_workerHandleUpdating",void 0),h=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorkerHandle")],h);class FeatureServiceSnappingSourceWorkerHandle_c extends WorkerHandle/* WorkerHandle */.B{constructor(e,t){super("FeatureServiceSnappingSourceWorker","fetchCandidates",{},e,{strategy:"dedicated",client:t})}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Point.js + 1 modules
var Point = __webpack_require__(78632);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/LOD.js
var LOD = __webpack_require__(50437);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/TileInfo.js
var TileInfo = __webpack_require__(65228);
;// ../node_modules/@arcgis/core/views/interactive/snapping/featureSources/featureServiceSource/FeatureServiceTilesSimple.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let FeatureServiceTilesSimple_a=class extends Accessor/* default */.A{get tiles(){return[new TileKey/* TileKey */.U("0/0/0",0,0,0,(0,aaBoundingRect/* fromValues */.fA)(-1e8,-1e8,1e8,1e8))]}get tileInfo(){return new TileInfo/* default */.A({origin:new Point/* default */.A({x:-1e8,y:1e8,spatialReference:this.layer.spatialReference}),size:[512,512],lods:[new LOD/* default */.A({level:0,scale:1,resolution:390625})],spatialReference:this.layer.spatialReference})}get tileSize(){return this.tileInfo.size[0]}constructor(e){super(e),this.pointOfInterest=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],FeatureServiceTilesSimple_a.prototype,"tiles",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],FeatureServiceTilesSimple_a.prototype,"tileInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],FeatureServiceTilesSimple_a.prototype,"tileSize",null),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],FeatureServiceTilesSimple_a.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],FeatureServiceTilesSimple_a.prototype,"pointOfInterest",void 0),FeatureServiceTilesSimple_a=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTilesSimple")],FeatureServiceTilesSimple_a);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/support/debugFlags.js
var debugFlags = __webpack_require__(71678);
;// ../node_modules/@arcgis/core/views/interactive/snapping/featureSources/FeatureServiceSnappingSource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let F=class extends Accessor/* default */.A{get _updateTilesParameters(){return{tiles:this._tilesOfInterest.tiles,tileInfo:this._tilesOfInterest.tileInfo,tileSize:this._tilesOfInterest.tileSize}}get _layerView(){return this.view?.allLayerViews.find((e=>e.layer===this._layer))}get _isSuspended(){if((0,layerUtils/* isSubtypeGroupLayer */.F2)(this._layer)){if(!this._layer.sublayers.find((e=>e.visible)))return!0}return!!this.view&&(!1!==this._layerView?.suspended||!this.layerSource.enabled)}get updating(){return this._workerHandle?.updating||this._updatingHandles.updating}get _outFields(){const{view:e,_layerView:t,layerSource:r}=this,{layer:i}=r,{fieldsIndex:s,timeInfo:o,floorInfo:a,subtypeField:n}=i,l=t&&"filter"in t?t.filter:null,u=l?.where&&"1=1"!==l.where?this._getOrLoadWhereFields(l.where,s):[];if(l?.timeExtent&&o){const{startField:e,endField:t}=o,r=s.get(e)?.name??e,i=s.get(t)?.name??t;r&&u.push(r),i&&u.push(i)}if(e?.map&&(0,snappingUtils/* isUtilityNetworkWebMap */.Tu)(e.map)&&e.map.utilityNetworks?.find((e=>e.isUtilityLayer(i)))){const e=i.fieldsIndex.get("assetGroup")?.name,t=i.fieldsIndex.get("assetType")?.name;e&&t&&(u.push(e),u.push(t))}if(i&&a?.floorField&&e?.floors?.length){const e=s.get(a.floorField)?.name??a.floorField;e&&u.push(e)}if(n){const e=s.get(n)?.name??n;e&&u.push(e)}return new Set(u)}get configuration(){const{view:e}=this,t=null!=e?e.type:"2d";return{filter:this._layer.createQuery(),customParameters:this._layer.customParameters,viewType:t}}get availability(){return this._workerHandle?.availability??0}get _layer(){return this.layerSource.layer}constructor(e){super(e),this._updatingHandles=new UpdatingHandles/* UpdatingHandles */.U,this._workerHandle=null,this._debug=null,this._memoizedMakeGetGroundElevation=(0,memoize/* memoize */.B)(queryEngineUtils/* makeGetGroundElevation */.p)}initialize(){let e;const t=this.view;if(null!=t)switch(t.type){case"2d":this._tilesOfInterest=new p({view:t,layer:this._layer}),e=this._workerHandle=new h;break;case"3d":{const{resourceController:r}=t,i=this._layer;this._tilesOfInterest=new FeatureServiceTiles3D_p({view:t}),e=this._workerHandle=new h({schedule:e=>r.immediate.schedule(e),hasZ:this._layer.hasZ&&(this._layer.returnZ??!0),elevationAlignPointsInFeatures:async(e,r)=>{const s=await t.whenLayerView(i);return (0,promiseUtils/* throwIfAborted */.Te)(r),s.elevationAlignPointsInFeatures(e,r)},queryForSymbologySnapping:async(e,r)=>{const s=await t.whenLayerView(i);return (0,promiseUtils/* throwIfAborted */.Te)(r),s.queryForSymbologySnapping(e,r)}}),this.addHandles([t.elevationProvider.on("elevation-change",(({context:t})=>{const{elevationInfo:r}=i;(0,elevationInfoUtils/* elevationContextAffectsAlignment */.Up)(t,r)&&(0,promiseUtils/* ignoreAbortErrors */.QZ)(e.notifyElevationSourceChange())})),(0,reactiveUtils/* watch */.wB)((()=>i.elevationInfo),(()=>(0,promiseUtils/* ignoreAbortErrors */.QZ)(e.notifyElevationSourceChange())),reactiveUtils/* initial */.Vh),(0,reactiveUtils/* watch */.wB)((()=>this._layerView?.processor?.renderer),(()=>(0,promiseUtils/* ignoreAbortErrors */.QZ)(e.notifySymbologyChange())),reactiveUtils/* initial */.Vh),(0,reactiveUtils/* watch */.wB)((()=>this._layerView?.symbologySnappingSupported??!1),(t=>(0,promiseUtils/* ignoreAbortErrors */.QZ)(e.setSymbologySnappingSupported(t))),reactiveUtils/* initial */.Vh),(0,reactiveUtils.on)((()=>this._layerView?.layer),["edits","apply-edits","graphic-update"],(()=>e.notifySymbologyChange()))]);break}}else this._tilesOfInterest=new FeatureServiceTilesSimple_a({layer:this._layer}),e=this._workerHandle=new h;this.addHandles([(0,handleUtils/* destroyHandle */.DQ)(e)]),(0,promiseUtils/* ignoreAbortErrors */.QZ)(e.setup({layer:this._layer,spatialReference:this.spatialReference,configuration:this.configuration},null)),this._updatingHandles.add((()=>this._updateTilesParameters),(()=>(0,promiseUtils/* ignoreAbortErrors */.QZ)(e.updateTiles(this._updateTilesParameters,null))),reactiveUtils/* initial */.Vh),this.addHandles([(0,reactiveUtils/* watch */.wB)((()=>this.configuration),(t=>(0,promiseUtils/* ignoreAbortErrors */.QZ)(e.configure(t,null))),reactiveUtils/* sync */.OH),(0,reactiveUtils/* watch */.wB)((()=>this._outFields),(t=>(0,promiseUtils/* ignoreAbortErrors */.QZ)(e.updateOutFields(t))),reactiveUtils/* initial */.Vh),(0,reactiveUtils/* watch */.wB)((()=>this._isSuspended),(t=>(0,promiseUtils/* ignoreAbortErrors */.QZ)(e.setSuspended(t))),reactiveUtils/* syncAndInitial */.pc)]),null!=t&&this.addHandles((0,reactiveUtils/* watch */.wB)((()=>debugFlags/* default */.A.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES),(r=>{r&&!this._debug?(this._debug=new n({view:t,handle:e}),this.addHandles((0,handleUtils/* destroyHandle */.DQ)(this._debug),"debug")):!r&&this._debug&&this.removeHandles("debug")}),reactiveUtils/* initial */.Vh)),this.addHandles(this.layerSource.layer.on("apply-edits",(t=>{(0,promiseUtils/* ignoreAbortErrors */.QZ)(e.applyEdits(t,null))})))}destroy(){this._updatingHandles.destroy()}refresh(){this._workerHandle?.refresh(null)}async fetchCandidates(e,t){const{coordinateHelper:r,point:i}=e;this._tilesOfInterest.pointOfInterest=r.arrayToPoint(i);const s=this._memoizedMakeGetGroundElevation(this.view,r.spatialReference);return(await this._workerHandle.fetchCandidates({...e},t)).candidates.map((e=>(0,queryEngineUtils/* convertSnappingCandidate */.$)(e,s)))}getDebugInfo(e){return this._workerHandle.getDebugInfo(e)}_getOrLoadWhereFields(e,t){const{_whereModule:i}=this;if(!this._loadWhereModuleTask&&!i){const e=(0,asyncUtils/* createTask */.UT)((async()=>{const e=await __webpack_require__.e(/* import() */ 1615).then(__webpack_require__.bind(__webpack_require__, 1615));return this._whereModule=e.WhereClause,this._whereModule}));return this._loadWhereModuleTask=e,this._updatingHandles.addPromise(e.promise),[]}if(!i)return[];try{return i.create(e,t).fieldNames}catch(s){return[]}}};(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],F.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],F.prototype,"layerSource",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],F.prototype,"view",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],F.prototype,"_tilesOfInterest",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],F.prototype,"_updateTilesParameters",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],F.prototype,"_layerView",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],F.prototype,"_isSuspended",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],F.prototype,"updating",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],F.prototype,"_outFields",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],F.prototype,"configuration",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],F.prototype,"availability",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],F.prototype,"_loadWhereModuleTask",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],F.prototype,"_whereModule",void 0),F=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")],F);


/***/ }),

/***/ 78200:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ a),
/* harmony export */   p: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97847);
/* harmony import */ var _candidates_DrapedEdgeSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46113);
/* harmony import */ var _candidates_EdgeSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15991);
/* harmony import */ var _candidates_VertexSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22970);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function r({x:t,y:n,z:d}){return (0,_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_0__/* .fromValues */ .fA)(t,n,d??0)}function a(e,a){switch(e.type){case"edge":return e.draped?new _candidates_DrapedEdgeSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_1__/* .DrapedEdgeSnappingCandidate */ .X({edgeStart:r(e.start),edgeEnd:r(e.end),targetPoint:r(e.target),objectId:e.objectId,getGroundElevation:a}):new _candidates_EdgeSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_2__/* .EdgeSnappingCandidate */ .z({edgeStart:r(e.start),edgeEnd:r(e.end),targetPoint:r(e.target),objectId:e.objectId,isDraped:!1});case"vertex":return new _candidates_VertexSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_3__/* .VertexSnappingCandidate */ .C({targetPoint:r(e.target),objectId:e.objectId,isDraped:!1})}}function o(e,t){return null!=e&&"3d"===e.type?(n,d)=>e.elevationProvider.getElevation(n,d,0,t,"ground"):()=>null}


/***/ }),

/***/ 75796:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21839);
/* harmony import */ var _SnappingHint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53830);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class n extends _SnappingHint_js__WEBPACK_IMPORTED_MODULE_1__/* .SnappingHint */ .m{constructor(t,s,n){super(s,n),this.point=t}equals(s){return s instanceof n&&(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.h)(this.point,s.point)}}


/***/ })

};
;