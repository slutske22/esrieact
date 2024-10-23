"use strict";
exports.id = 2534;
exports.ids = [2534,8751,7081,7724];
exports.modules = {

/***/ 76287:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ e),
/* harmony export */   c: () => (/* binding */ n),
/* harmony export */   f: () => (/* binding */ t)
/* harmony export */ });
/* unused harmony exports b, m */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(){return[1,0,0,0,1,0,0,0,1]}function r(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]}function t(e,r,t,n,o,a,u,c,f){return[e,r,t,n,o,a,u,c,f]}function n(e,r){return new Float64Array(e,r,9)}const o=Object.freeze(Object.defineProperty({__proto__:null,clone:r,create:e,createView:n,fromValues:t},Symbol.toStringTag,{value:"Module"}));


/***/ }),

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

/***/ 76743:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ O),
/* harmony export */   c: () => (/* binding */ B),
/* harmony export */   g: () => (/* binding */ x),
/* harmony export */   j: () => (/* binding */ K),
/* harmony export */   k: () => (/* binding */ T),
/* harmony export */   m: () => (/* binding */ y),
/* harmony export */   s: () => (/* binding */ v)
/* harmony export */ });
/* unused harmony exports A, B, C, D, E, F, G, b, d, e, f, h, i, l, n, o, p, q, r, t, u, v, w, x, y, z */
/* harmony import */ var _mat3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76287);
/* harmony import */ var _quatf64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46991);
/* harmony import */ var _vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22279);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57137);
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21839);
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25102);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function P(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function v(t,s,a){a*=.5;const n=Math.sin(a);return t[0]=n*s[0],t[1]=n*s[1],t[2]=n*s[2],t[3]=Math.cos(a),t}function x(t,s){const a=2*Math.acos(s[3]),n=Math.sin(a/2);return n>(0,_common_js__WEBPACK_IMPORTED_MODULE_3__.g)()?(t[0]=s[0]/n,t[1]=s[1]/n,t[2]=s[2]/n):(t[0]=1,t[1]=0,t[2]=0),a}function y(t,s,a){const n=s[0],o=s[1],r=s[2],e=s[3],c=a[0],u=a[1],i=a[2],h=a[3];return t[0]=n*h+e*c+o*i-r*u,t[1]=o*h+e*u+r*c-n*i,t[2]=r*h+e*i+n*u-o*c,t[3]=e*h-n*c-o*u-r*i,t}function A(t,s,a){a*=.5;const n=s[0],o=s[1],r=s[2],e=s[3],c=Math.sin(a),u=Math.cos(a);return t[0]=n*u+e*c,t[1]=o*u+r*c,t[2]=r*u-o*c,t[3]=e*u-n*c,t}function I(t,s,a){a*=.5;const n=s[0],o=s[1],r=s[2],e=s[3],c=Math.sin(a),u=Math.cos(a);return t[0]=n*u-r*c,t[1]=o*u+e*c,t[2]=r*u+n*c,t[3]=e*u-o*c,t}function _(t,s,a){a*=.5;const n=s[0],o=s[1],r=s[2],e=s[3],c=Math.sin(a),u=Math.cos(a);return t[0]=n*u+o*c,t[1]=o*u-n*c,t[2]=r*u+e*c,t[3]=e*u-r*c,t}function z(t,s){const a=s[0],n=s[1],o=s[2];return t[0]=a,t[1]=n,t[2]=o,t[3]=Math.sqrt(Math.abs(1-a*a-n*n-o*o)),t}function E(t,s,a,n){const r=s[0],e=s[1],c=s[2],u=s[3];let i,h,M,f,l,m=a[0],p=a[1],q=a[2],g=a[3];return h=r*m+e*p+c*q+u*g,h<0&&(h=-h,m=-m,p=-p,q=-q,g=-g),1-h>(0,_common_js__WEBPACK_IMPORTED_MODULE_3__.g)()?(i=Math.acos(h),M=Math.sin(i),f=Math.sin((1-n)*i)/M,l=Math.sin(n*i)/M):(f=1-n,l=n),t[0]=f*r+l*m,t[1]=f*e+l*p,t[2]=f*c+l*q,t[3]=f*u+l*g,t}function k(t){const s=_common_js__WEBPACK_IMPORTED_MODULE_3__.R,a=s(),n=s(),o=s(),e=Math.sqrt(1-a),c=Math.sqrt(a);return t[0]=e*Math.sin(2*Math.PI*n),t[1]=e*Math.cos(2*Math.PI*n),t[2]=c*Math.sin(2*Math.PI*o),t[3]=c*Math.cos(2*Math.PI*o),t}function L(t,s){const a=s[0],n=s[1],o=s[2],r=s[3],e=a*a+n*n+o*o+r*r,c=e?1/e:0;return t[0]=-a*c,t[1]=-n*c,t[2]=-o*c,t[3]=r*c,t}function O(t,s){return t[0]=-s[0],t[1]=-s[1],t[2]=-s[2],t[3]=s[3],t}function S(t,s){const a=s[0]+s[4]+s[8];let n;if(a>0)n=Math.sqrt(a+1),t[3]=.5*n,n=.5/n,t[0]=(s[5]-s[7])*n,t[1]=(s[6]-s[2])*n,t[2]=(s[1]-s[3])*n;else{let a=0;s[4]>s[0]&&(a=1),s[8]>s[3*a+a]&&(a=2);const o=(a+1)%3,r=(a+2)%3;n=Math.sqrt(s[3*a+a]-s[3*o+o]-s[3*r+r]+1),t[a]=.5*n,n=.5/n,t[3]=(s[3*o+r]-s[3*r+o])*n,t[o]=(s[3*o+a]+s[3*a+o])*n,t[r]=(s[3*r+a]+s[3*a+r])*n}return t}function T(t,s,a,n){const o=.5*Math.PI/180;s*=o,a*=o,n*=o;const r=Math.sin(s),e=Math.cos(s),c=Math.sin(a),u=Math.cos(a),i=Math.sin(n),h=Math.cos(n);return t[0]=r*u*h-e*c*i,t[1]=e*c*h+r*u*i,t[2]=e*u*i-r*c*h,t[3]=e*u*h+r*c*i,t}function w(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}const B=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.c,C=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.s,D=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.a,F=y,G=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.b,R=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.d,W=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.l,X=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.f,Y=X,Z=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.g,H=Z,J=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.n,K=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.h,N=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.e;function Q(t,s,a){const n=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.j)(s,a);return n<-.999999?((0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.b)(U,V,s),(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.k)(U)<1e-6&&(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.b)(U,$,s),(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.n)(U,U),v(t,U,Math.PI),t):n>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):((0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.b)(U,s,a),t[0]=U[0],t[1]=U[1],t[2]=U[2],t[3]=1+n,J(t,t))}const U=(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),V=(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.f)(1,0,0),$=(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.f)(0,1,0);function tt(t,s,a,n,o,r){return E(st,s,o,r),E(at,a,n,r),E(t,st,at,2*r*(1-r)),t}const st=(0,_quatf64_js__WEBPACK_IMPORTED_MODULE_1__.a)(),at=(0,_quatf64_js__WEBPACK_IMPORTED_MODULE_1__.a)();function nt(t,s,a,n){const o=ot;return o[0]=a[0],o[3]=a[1],o[6]=a[2],o[1]=n[0],o[4]=n[1],o[7]=n[2],o[2]=-s[0],o[5]=-s[1],o[8]=-s[2],J(t,S(t,o))}const ot=(0,_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__.a)(),rt=Object.freeze(Object.defineProperty({__proto__:null,add:D,calculateW:z,conjugate:O,copy:B,dot:R,equals:N,exactEquals:K,fromEuler:T,fromMat3:S,getAxisAngle:x,identity:P,invert:L,len:Y,length:X,lerp:W,mul:F,multiply:y,normalize:J,random:k,rotateX:A,rotateY:I,rotateZ:_,rotationTo:Q,scale:G,set:C,setAxes:nt,setAxisAngle:v,slerp:E,sqlerp:tt,sqrLen:H,squaredLength:Z,str:w},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 46991:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ o),
/* harmony export */   a: () => (/* binding */ e),
/* harmony export */   b: () => (/* binding */ r),
/* harmony export */   c: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony exports f, q */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(){return[0,0,0,1]}function r(e){return[e[0],e[1],e[2],e[3]]}function t(e,r,t,n){return[e,r,t,n]}function n(e,r){return new Float64Array(e,r,4)}const o=e(),a=Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:o,clone:r,create:e,createView:n,fromValues:t},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 96245:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ B),
/* harmony export */   c: () => (/* binding */ E),
/* harmony export */   f: () => (/* binding */ V),
/* harmony export */   g: () => (/* binding */ U),
/* harmony export */   h: () => (/* binding */ T),
/* harmony export */   j: () => (/* binding */ J),
/* harmony export */   n: () => (/* binding */ it)
/* harmony export */ });
/* unused harmony exports A, B, C, N, b, d, e, i, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z */
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(539);
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92504);
/* harmony import */ var _mat4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37046);
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21839);
/* harmony import */ var _vec3f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22279);
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25102);
/* harmony import */ var _vec4f64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52712);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57137);
/* harmony import */ var _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58331);
/* harmony import */ var _geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(32532);
/* harmony import */ var _geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16597);
/* harmony import */ var _geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(45573);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const w=E();function E(){return (0,_vec4f64_js__WEBPACK_IMPORTED_MODULE_7__.c)()}const L=_vec4_js__WEBPACK_IMPORTED_MODULE_6__.e,O=_vec4_js__WEBPACK_IMPORTED_MODULE_6__.e;function T(t,n=E()){return (0,_vec4_js__WEBPACK_IMPORTED_MODULE_6__.c)(n,t)}function k(t,n){return (0,_vec4f64_js__WEBPACK_IMPORTED_MODULE_7__.f)(t[0],t[1],t[2],n)}function z(t){return t}function N(t){t[0]=t[1]=t[2]=t[3]=0}function Z(t,n){return t[0]=t[1]=t[2]=0,t[3]=n,t}function B(t){return t[3]}function U(t){return t}function V(t,n,r,o){return (0,_vec4f64_js__WEBPACK_IMPORTED_MODULE_7__.f)(t,n,r,o)}function X(t,n,r){return t!==r&&(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.c)(r,t),r[3]=t[3]+n,r}function Y(n,r,o){return _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),n===o?o:T(n,o)}function D(t,n,r){if(null==n)return!1;if(!H(t,n,G))return!1;let{t0:o,t1:e}=G;if((o<0||e<o&&e>0)&&(o=e),o<0)return!1;if(r){const{origin:t,direction:e}=n;r[0]=t[0]+e[0]*o,r[1]=t[1]+e[1]*o,r[2]=t[2]+e[2]*o}return!0}function F(t,n,r){const o=(0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_10__/* .fromPoints */ .Cr)(n,r);if(!H(t,o,G))return[];const{origin:e,direction:s}=o,{t0:i,t1:c}=G,a=n=>{const r=(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.c)();return (0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.q)(r,e,s,n),$(t,r,r)};return Math.abs(i-c)<(0,_common_js__WEBPACK_IMPORTED_MODULE_8__.g)()?[a(i)]:[a(i),a(c)]}const G={t0:0,t1:0};function H(t,n,r){const{origin:o,direction:e}=n,s=I;s[0]=o[0]-t[0],s[1]=o[1]-t[1],s[2]=o[2]-t[2];const i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2];if(0===i)return!1;const c=2*(e[0]*s[0]+e[1]*s[1]+e[2]*s[2]),a=c*c-4*i*(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]-t[3]*t[3]);if(a<0)return!1;const u=Math.sqrt(a);return r.t0=(-c-u)/(2*i),r.t1=(-c+u)/(2*i),!0}const I=(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.c)();function J(t,n){return D(t,n,null)}function K(t,n,r){if(D(t,n,r))return r;const o=Q(t,n,_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get());return (0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.g)(r,n.origin,(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.i)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get(),n.direction,(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.o)(n.origin,o)/(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.l)(n.direction))),r}function Q(t,n,r){const e=_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get(),s=_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sm4d */ .Rc.get();(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.b)(e,n.origin,n.direction);const c=B(t);(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.b)(r,e,n.origin),(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.i)(r,r,1/(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.l)(r)*c);const m=nt(t,n.origin),p=(0,_geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_11__/* .angle */ .g7)(n.origin,r);return (0,_mat4_js__WEBPACK_IMPORTED_MODULE_3__.c)(s,p+m,e),(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.e)(r,r,s),r}function W(t,n,r){return D(t,n,r)?r:((0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_10__/* .closestPoint */ .oC)(n,U(t),r),$(t,r,r))}function $(t,n,r){const o=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.f)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get(),n,U(t)),e=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.i)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get(),o,t[3]/(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.l)(o));return (0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.g)(r,e,U(t))}function tt(t,n){const r=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.f)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get(),n,U(t)),o=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.m)(r),e=t[3]*t[3];return Math.sqrt(Math.abs(o-e))}function nt(t,r){const o=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.f)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get(),r,U(t)),e=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.l)(o),s=B(t),i=s+Math.abs(s-e);return (0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .acosClamped */ .XM)(s/i)}const rt=(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.c)();function ot(t,n,o,e){const s=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.f)(rt,n,U(t));switch(o){case _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_9__/* .Axis */ ._.X:{const t=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .cartesianToSpherical */ .jU)(s,rt)[2];return (0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.s)(e,-Math.sin(t),Math.cos(t),0)}case _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_9__/* .Axis */ ._.Y:{const t=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .cartesianToSpherical */ .jU)(s,rt),n=t[1],o=t[2],i=Math.sin(n);return (0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.s)(e,-i*Math.cos(o),-i*Math.sin(o),Math.cos(n))}case _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_9__/* .Axis */ ._.Z:return (0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.n)(e,s);default:return}}function et(t,n){const r=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.f)(at,n,U(t));return (0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.l)(r)-t[3]}function st(t,n,r,o){const e=et(t,n),c=ot(t,n,_geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_9__/* .Axis */ ._.Z,at),a=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.i)(at,c,r-e);return (0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.g)(o,n,a)}function it(t,n){const r=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.a)(U(t),n),o=B(t);return r<=o*o}function ct(t,n,r=E()){const o=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.o)(t,n),e=t[3],s=n[3];return o+s<e?((0,_vec4_js__WEBPACK_IMPORTED_MODULE_6__.c)(r,t),r):o+e<s?((0,_vec4_js__WEBPACK_IMPORTED_MODULE_6__.c)(r,n),r):((0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.p)(r,t,n,(o+s-e)/(2*o)),r[3]=(o+e+s)/2,r)}const at=(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.c)(),ut=E(),ft=Object.freeze(Object.defineProperty({__proto__:null,NullSphere:w,altitudeAt:et,angleToSilhouette:nt,axisAt:ot,clear:N,closestPoint:W,closestPointOnSilhouette:Q,containsPoint:it,copy:T,create:E,distanceToSilhouette:tt,elevate:X,equals:O,exactEquals:L,fromCenterAndRadius:k,fromRadius:Z,fromValues:V,getCenter:U,getRadius:B,intersectLine:F,intersectRay:D,intersectRayClosestSilhouette:K,intersectsRay:J,projectPoint:$,setAltitudeAt:st,setExtent:Y,tmpSphere:ut,union:ct,wrap:z},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 52712:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ u),
/* harmony export */   c: () => (/* binding */ n),
/* harmony export */   f: () => (/* binding */ r)
/* harmony export */ });
/* unused harmony exports O, U, Z, b, d, e, g, h, i, j, k, o, u, v, z */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function n(){return[0,0,0,0]}function t(n){return[n[0],n[1],n[2],n[3]]}function r(n,t,r,e){return[n,t,r,e]}function e(t,r=n()){const e=Math.min(4,t.length);for(let n=0;n<e;++n)r[n]=t[n];return r}function u(n,t){return new Float64Array(n,t,4)}function a(){return n()}function o(){return r(1,1,1,1)}function s(){return r(1,0,0,0)}function i(){return r(0,1,0,0)}function c(){return r(0,0,1,0)}function f(){return r(0,0,0,1)}const l=a(),_=o(),N=s(),O=i(),T=c(),U=f(),b=Object.freeze(Object.defineProperty({__proto__:null,ONES:_,UNIT_W:U,UNIT_X:N,UNIT_Y:O,UNIT_Z:T,ZEROS:l,clone:t,create:n,createView:u,fromArray:e,fromValues:r,ones:o,unitW:f,unitX:s,unitY:i,unitZ:c,zeros:a},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 84858:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ E)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var E;!function(E){E[E.KILOBYTES=1024]="KILOBYTES",E[E.MEGABYTES=1048576]="MEGABYTES",E[E.GIGABYTES=1073741824]="GIGABYTES"}(E||(E={}));


/***/ }),

/***/ 89926:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _MemCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40210);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class e{constructor(e,s){this._storage=new _MemCache_js__WEBPACK_IMPORTED_MODULE_0__/* .MemCacheStorage */ .F,this.id="",this.name="",this.size=0,this._storage.maxSize=e,this._storage.register(this),s&&this._storage.registerRemoveFunc("",s)}destroy(){this._storage.deregister(this),this._storage.destroy()}put(t,e,s=1){this._storage.put(this,t,e,s,1)}pop(t){return this._storage.pop(this,t)}get(t){return this._storage.get(this,t)}clear(){this._storage.clearAll()}get maxSize(){return this._storage.maxSize}set maxSize(t){this._storage.maxSize=t}resetHitRate(){}}


/***/ }),

/***/ 69075:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ n),
/* harmony export */   d: () => (/* binding */ x)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const n={Base64:0,Hex:1,String:2,Raw:3},t=8,r=(1<<t)-1;function e(n,t){const r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function o(n){const e=[];for(let o=0,u=n.length*t;o<u;o+=t)e[o>>5]|=(n.charCodeAt(o/t)&r)<<o%32;return e}function u(n){const e=[];for(let o=0,u=32*n.length;o<u;o+=t)e.push(String.fromCharCode(n[o>>5]>>>o%32&r));return e.join("")}function c(n){const t="0123456789abcdef",r=[];for(let e=0,o=4*n.length;e<o;e++)r.push(t.charAt(n[e>>2]>>e%4*8+4&15)+t.charAt(n[e>>2]>>e%4*8&15));return r.join("")}function f(n){const t="=",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e=[];for(let o=0,u=4*n.length;o<u;o+=3){const u=(n[o>>2]>>o%4*8&255)<<16|(n[o+1>>2]>>(o+1)%4*8&255)<<8|n[o+2>>2]>>(o+2)%4*8&255;for(let c=0;c<4;c++)8*o+6*c>32*n.length?e.push(t):e.push(r.charAt(u>>6*(3-c)&63))}return e.join("")}function s(n,t){return n<<t|n>>>32-t}function i(n,t,r,o,u,c){return e(s(e(e(t,n),e(o,c)),u),r)}function h(n,t,r,e,o,u,c){return i(t&r|~t&e,n,t,o,u,c)}function a(n,t,r,e,o,u,c){return i(t&e|r&~e,n,t,o,u,c)}function l(n,t,r,e,o,u,c){return i(t^r^e,n,t,o,u,c)}function g(n,t,r,e,o,u,c){return i(r^(t|~e),n,t,o,u,c)}function p(n,t){n[t>>5]|=128<<t%32,n[14+(t+64>>>9<<4)]=t;let r=1732584193,o=-271733879,u=-1732584194,c=271733878;for(let f=0;f<n.length;f+=16){const t=r,s=o,i=u,p=c;r=h(r,o,u,c,n[f],7,-680876936),c=h(c,r,o,u,n[f+1],12,-389564586),u=h(u,c,r,o,n[f+2],17,606105819),o=h(o,u,c,r,n[f+3],22,-1044525330),r=h(r,o,u,c,n[f+4],7,-176418897),c=h(c,r,o,u,n[f+5],12,1200080426),u=h(u,c,r,o,n[f+6],17,-1473231341),o=h(o,u,c,r,n[f+7],22,-45705983),r=h(r,o,u,c,n[f+8],7,1770035416),c=h(c,r,o,u,n[f+9],12,-1958414417),u=h(u,c,r,o,n[f+10],17,-42063),o=h(o,u,c,r,n[f+11],22,-1990404162),r=h(r,o,u,c,n[f+12],7,1804603682),c=h(c,r,o,u,n[f+13],12,-40341101),u=h(u,c,r,o,n[f+14],17,-1502002290),o=h(o,u,c,r,n[f+15],22,1236535329),r=a(r,o,u,c,n[f+1],5,-165796510),c=a(c,r,o,u,n[f+6],9,-1069501632),u=a(u,c,r,o,n[f+11],14,643717713),o=a(o,u,c,r,n[f],20,-373897302),r=a(r,o,u,c,n[f+5],5,-701558691),c=a(c,r,o,u,n[f+10],9,38016083),u=a(u,c,r,o,n[f+15],14,-660478335),o=a(o,u,c,r,n[f+4],20,-405537848),r=a(r,o,u,c,n[f+9],5,568446438),c=a(c,r,o,u,n[f+14],9,-1019803690),u=a(u,c,r,o,n[f+3],14,-187363961),o=a(o,u,c,r,n[f+8],20,1163531501),r=a(r,o,u,c,n[f+13],5,-1444681467),c=a(c,r,o,u,n[f+2],9,-51403784),u=a(u,c,r,o,n[f+7],14,1735328473),o=a(o,u,c,r,n[f+12],20,-1926607734),r=l(r,o,u,c,n[f+5],4,-378558),c=l(c,r,o,u,n[f+8],11,-2022574463),u=l(u,c,r,o,n[f+11],16,1839030562),o=l(o,u,c,r,n[f+14],23,-35309556),r=l(r,o,u,c,n[f+1],4,-1530992060),c=l(c,r,o,u,n[f+4],11,1272893353),u=l(u,c,r,o,n[f+7],16,-155497632),o=l(o,u,c,r,n[f+10],23,-1094730640),r=l(r,o,u,c,n[f+13],4,681279174),c=l(c,r,o,u,n[f],11,-358537222),u=l(u,c,r,o,n[f+3],16,-722521979),o=l(o,u,c,r,n[f+6],23,76029189),r=l(r,o,u,c,n[f+9],4,-640364487),c=l(c,r,o,u,n[f+12],11,-421815835),u=l(u,c,r,o,n[f+15],16,530742520),o=l(o,u,c,r,n[f+2],23,-995338651),r=g(r,o,u,c,n[f],6,-198630844),c=g(c,r,o,u,n[f+7],10,1126891415),u=g(u,c,r,o,n[f+14],15,-1416354905),o=g(o,u,c,r,n[f+5],21,-57434055),r=g(r,o,u,c,n[f+12],6,1700485571),c=g(c,r,o,u,n[f+3],10,-1894986606),u=g(u,c,r,o,n[f+10],15,-1051523),o=g(o,u,c,r,n[f+1],21,-2054922799),r=g(r,o,u,c,n[f+8],6,1873313359),c=g(c,r,o,u,n[f+15],10,-30611744),u=g(u,c,r,o,n[f+6],15,-1560198380),o=g(o,u,c,r,n[f+13],21,1309151649),r=g(r,o,u,c,n[f+4],6,-145523070),c=g(c,r,o,u,n[f+11],10,-1120210379),u=g(u,c,r,o,n[f+2],15,718787259),o=g(o,u,c,r,n[f+9],21,-343485551),r=e(r,t),o=e(o,s),u=e(u,i),c=e(c,p)}return[r,o,u,c]}function x(r,e=n.Hex){const s=e||n.Base64,i=p(o(r),r.length*t);switch(s){case n.Raw:return i;case n.Hex:return c(i);case n.String:return u(i);case n.Base64:return f(i)}}


/***/ }),

/***/ 40210:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ r),
/* harmony export */   Mn: () => (/* binding */ i)
/* harmony export */ });
/* unused harmony exports RemoveMode, minPriority */
/* harmony import */ var _PooledArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63678);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const e=-3;var s;!function(t){t[t.ALL=0]="ALL",t[t.SOME=1]="SOME"}(s||(s={}));class i{constructor(t,e,s){this.name=t,this._storage=e,this.id=h+++":",this.size=0,this.maxSize=0,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),s&&(this._storage.registerRemoveFunc(this.id,s),this._removeFunc=!0)}destroy(){this._storage.clear(this),this._removeFunc&&this._storage.deregisterRemoveFunc(this.id),this._storage.deregister(this),this._storage=null}get hitRate(){return this._hit/(this._hit+this._miss)}get sizeAll(){return this._storage.size}resetHitRate(){this._hit=this._miss=0}put(t,e,s,i=0){this._storage.put(this,t,e,s,i)}get(t){const e=this._storage.get(this,t);return void 0===e?++this._miss:++this._hit,e}peek(t){return this._storage.peek(this,t)}pop(t){const e=this._storage.pop(this,t);return void 0===e?++this._miss:++this._hit,e}updateSize(t,e,s){this._storage.updateSize(this,t,e,s)}clear(){this._storage.clear(this)}clearAll(){this._storage.clearAll()}get performanceInfo(){return this._storage.performanceInfo}resetStats(){this._storage.resetStats()}}class r{get size(){return this._size}constructor(e=10485760){this._maxSize=e,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,this._users=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null}register(t){this._users.push(t)}deregister(t){this._users.removeUnordered(t)}registerRemoveFunc(t,e){this._removeFuncs.push([t,e])}deregisterRemoveFunc(t){this._removeFuncs.filterInPlace((e=>e[0]!==t))}get maxSize(){return this._maxSize}set maxSize(t){this._maxSize=Math.max(t,0),this._checkSizeLimits()}put(t,i,r,h,o){i=t.id+i;const n=this._db.get(i);if(n&&(this._size-=n.size,t.size-=n.size,this._db.delete(i),n.entry!==r&&this._notifyRemove(i,n.entry,s.ALL)),h>this._maxSize)return void this._notifyRemove(i,r,s.ALL);if(void 0===r)return void console.warn("Refusing to cache undefined entry ");if(!h||h<0)return console.warn(`Refusing to cache entry with size ${h} for key ${i}`),void this._notifyRemove(i,r,s.ALL);const _=1+Math.max(o,e)-e;this._db.set(i,{entry:r,size:h,lifetime:_,lives:_}),this._size+=h,t.size+=h,this._checkSizeLimits()}updateSize(t,e,i,r){e=t.id+e;const h=this._db.get(e);if(h&&h.entry===i){for(this._size-=h.size,t.size-=h.size;r>this._maxSize;){const t=this._notifyRemove(e,i,s.SOME);if(!(null!=t&&t>0))return void this._db.delete(e);r=t}h.size=r,this._size+=r,t.size+=r,this._checkSizeLimits()}}pop(t,e){e=t.id+e;const s=this._db.get(e);if(s)return this._size-=s.size,t.size-=s.size,this._db.delete(e),++this._hit,s.entry;++this._miss}get(t,e){e=t.id+e;const s=this._db.get(e);if(void 0!==s)return this._db.delete(e),s.lives=s.lifetime,this._db.set(e,s),++this._hit,s.entry;++this._miss}peek(t,e){const s=this._db.get(t.id+e);return s?++this._hit:++this._miss,s?.entry}get performanceInfo(){const t={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},s={},i=new Array;this._db.forEach(((t,e)=>{const r=t.lifetime;i[r]=(i[r]||0)+t.size,this._users.forAll((i=>{const{id:r,name:h}=i;if(e.startsWith(r)){const e=s[h]||0;s[h]=e+t.size}}))}));const r={};this._users.forAll((t=>{const e=t.name;if("hitRate"in t&&"number"==typeof t.hitRate&&!isNaN(t.hitRate)&&t.hitRate>0){const i=s[e]||0;s[e]=i,r[e]=Math.round(100*t.hitRate)+"%"}else r[e]="0%"}));const h=Object.keys(s);h.sort(((t,e)=>s[e]-s[t])),h.forEach((e=>t[e]=Math.round(s[e]/2**20)+"MB / "+r[e]));for(let o=i.length-1;o>=0;--o){const s=i[o];s&&(t["Priority "+(o+e-1)]=Math.round(s/this._size*100)+"%")}return t}resetStats(){this._hit=this._miss=0,this._users.forAll((t=>t.resetHitRate()))}clear(t){const e=t.id;this._db.forEach(((t,i)=>{i.startsWith(e)&&(this._size-=t.size,this._db.delete(i),this._notifyRemove(i,t.entry,s.ALL))})),t.size=0}clearAll(){this._db.forEach(((t,e)=>this._notifyRemove(e,t.entry,s.ALL))),this._users.forEach((t=>t.size=0)),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemove(t,e,s){let i;return this._removeFuncs.some((r=>{if(t.startsWith(r[0])){const t=r[1](e,s);return"number"==typeof t&&(i=t),!0}return!1})),i}_checkSizeLimits(){if(this._size>this._maxSize)for(const[t,e]of this._db)if(this._purgeItem(t,e),this._size<=.9*this.maxSize)return;this._users.forEach((t=>{if(t.maxSize>0&&t.size>t.maxSize)for(const[e,s]of this._db)if(e.startsWith(t.id)&&(this._purgeItem(e,s,t),t.size<=.9*t.maxSize))return}))}_purgeItem(t,e,i=this._users.find((e=>t.startsWith(e.id)))){if(this._db.delete(t),e.lives<=1){this._size-=e.size,i&&(i.size-=e.size);const r=this._notifyRemove(t,e.entry,s.SOME);null!=r&&r>0&&(this._size+=r,i&&(i.size+=r),e.lives=e.lifetime,e.size=r,this._db.set(t,e))}else--e.lives,this._db.set(t,e)}}let h=0;


/***/ }),

/***/ 35775:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  P: () => (/* binding */ m),
  L: () => (/* binding */ S)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(52495);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/defaultsStoreUtils.js
var defaultsStoreUtils = __webpack_require__(52700);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/PropertyOrigin.js
var PropertyOrigin = __webpack_require__(94255);
;// ../node_modules/@arcgis/core/core/accessorSupport/MultiOriginStore.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class MultiOriginStore_r{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(PropertyOrigin/* OriginIdNum */.Qg),this._values=new Map,this.multipleOriginsSupported=!0}clone(i){const o=new MultiOriginStore_r,n=this._originStores[PropertyOrigin/* OriginId */.Gr.DEFAULTS];n&&n.forEach(((s,r)=>{o.set(r,(0,lang/* clone */.o8)(s),PropertyOrigin/* OriginId */.Gr.DEFAULTS)}));for(let r=PropertyOrigin/* OriginId */.Gr.SERVICE;r<PropertyOrigin/* OriginIdNum */.Qg;r++){const s=this._originStores[r];s&&s.forEach(((s,e)=>{i&&i.has(e)||o.set(e,(0,lang/* clone */.o8)(s),r)}))}return o}get(t,s){const e=void 0===s?this._values:this._originStores[s];return e?e.get(t):void 0}keys(t){const s=null==t?this._values:this._originStores[t];return s?[...s.keys()]:[]}set(t,s,r=PropertyOrigin/* OriginId */.Gr.USER){let i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(t,s),!this._values.has(t)||this._propertyOriginMap.get(t)<=r){const e=this._values.get(t);return this._values.set(t,s),this._propertyOriginMap.set(t,r),e!==s}return!1}delete(t,s=PropertyOrigin/* OriginId */.Gr.USER){const r=this._originStores[s];if(!r)return;const i=r.get(t);if(r.delete(t),this._values.has(t)&&this._propertyOriginMap.get(t)===s){this._values.delete(t);for(let e=s-1;e>=0;e--){const s=this._originStores[e];if(s&&s.has(t)){this._values.set(t,s.get(t)),this._propertyOriginMap.set(t,e);break}}}return i}has(t,s){const e=void 0===s?this._values:this._originStores[s];return!!e&&e.has(t)}revert(t,s){for(;s>0&&!this.has(t,s);)--s;const e=this._originStores[s],r=e?.get(t),i=this._values.get(t);return this._values.set(t,r),this._propertyOriginMap.set(t,s),i!==r}originOf(t){return this._propertyOriginMap.get(t)||PropertyOrigin/* OriginId */.Gr.DEFAULTS}forEach(t){this._values.forEach(t)}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/read.js
var read = __webpack_require__(83312);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/utils.js
var utils = __webpack_require__(55135);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
;// ../node_modules/@arcgis/core/core/ReadOnlyMultiOriginJSONSupport.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const u=t=>{let u=class extends t{constructor(...r){super(...r);const t=(0,utils/* getProperties */.oY)(this),e=t.store,i=new MultiOriginStore_r;t.store=i,(0,defaultsStoreUtils/* setupConstructedDefaults */.k)(t,e,i)}read(r,t){(0,read/* read */.L)(this,r,t)}getAtOrigin(r,t){const s=a(this),o=(0,PropertyOrigin/* nameToId */.aB)(t);if("string"==typeof r)return s.get(r,o);const i={};return r.forEach((r=>{i[r]=s.get(r,o)})),i}originOf(r){return (0,PropertyOrigin/* idToName */.OL)(this.originIdOf(r))}originIdOf(r){return a(this).originOf(r)}revert(r,t){const s=a(this),o=(0,PropertyOrigin/* nameToId */.aB)(t),i=(0,utils/* getProperties */.oY)(this);let c;c="string"==typeof r?"*"===r?s.keys(o):[r]:r,c.forEach((r=>{i.invalidate(r),s.revert(r,o),i.commit(r)}))}};return u=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.core.ReadOnlyMultiOriginJSONSupport")],u),u};function a(r){return (0,utils/* getProperties */.oY)(r).store}let f=class extends(u(Accessor/* default */.A)){};f=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.core.ReadOnlyMultiOriginJSONSupport")],f);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/get.js
var get = __webpack_require__(45066);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/write.js
var write = __webpack_require__(77373);
;// ../node_modules/@arcgis/core/core/MultiOriginJSONSupport.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const l=t=>{let s=class extends t{constructor(...r){super(...r)}clear(r,t="user"){return O(this).delete(r,(0,PropertyOrigin/* nameToId */.aB)(t))}write(r,t){return (0,write/* write */.M)(this,r=r||{},t),r}setAtOrigin(r,t,s){(0,utils/* getProperties */.oY)(this).setAtOrigin(r,t,(0,PropertyOrigin/* nameToId */.aB)(s))}removeOrigin(r){const t=O(this),s=(0,PropertyOrigin/* nameToId */.aB)(r),e=t.keys(s);for(const o of e)t.originOf(o)===s&&t.set(o,t.get(o,s),PropertyOrigin/* OriginId */.Gr.USER)}updateOrigin(r,t){const s=O(this),i=(0,PropertyOrigin/* nameToId */.aB)(t),c=(0,get/* get */.Jt)(this,r);for(let e=i+1;e<PropertyOrigin/* OriginIdNum */.Qg;++e)s.delete(r,e);s.set(r,c,i)}toJSON(r){return this.write({},r)}};return s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.core.WriteableMultiOriginJSONSupport")],s),s.prototype.toJSON.isDefaultToJSON=!0,s};function O(r){return (0,utils/* getProperties */.oY)(r).store}const m=t=>{let e=class extends(l(u(t))){constructor(...r){super(...r)}};return e=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.core.MultiOriginJSONSupport")],e),e};let S=class extends(m(Accessor/* default */.A)){};S=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.core.MultiOriginJSONSupport")],S);


/***/ }),

/***/ 92114:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _nextTick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37103);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class s{constructor(t){this._allocator=t,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,_nextTick_js__WEBPACK_IMPORTED_MODULE_0__/* .nextTick */ .d)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*i);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,i));t++)this._items.push(this._allocator())}}const i=1024;


/***/ }),

/***/ 50579:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let r=class{constructor(t,r,o=""){this.major=t,this.minor=r,this._context=o}lessThan(t,r){return this.major<t||t===this.major&&this.minor<r}since(t,r){return!this.lessThan(t,r)}validate(r){if(this.major!==r.major){const o=this._context&&this._context+":",s=this._context&&this._context+" ";throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(o+"unsupported-version",`Required major ${s}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:r})}}clone(){return new r(this.major,this.minor,this._context)}static parse(o,s=""){const[e,i]=o.split("."),n=/^\s*\d+\s*$/;if(!e?.match||!n.test(e)){throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A((s&&s+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:o})}if(!i?.match||!n.test(i)){throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A((s&&s+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:o})}const a=parseInt(e,10),h=parseInt(i,10);return new r(a,h,s)}};


/***/ }),

/***/ 77841:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ j)
/* harmony export */ });
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/* harmony import */ var _MD5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69075);
/* harmony import */ var _multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55750);
/* harmony import */ var _urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20909);
/* harmony import */ var _uuid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33880);
/* harmony import */ var _metadata_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10245);
/* harmony import */ var _PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94255);
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21564);
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12071);
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63680);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function j(t){const r=t?.origins??[void 0];return(e,o)=>{const s=U(t,e,o);for(const t of r){const r=(0,_property_js__WEBPACK_IMPORTED_MODULE_6__/* .propertyJSONMeta */ .rM)(e,t,o);for(const t in s)r[t]=s[t]}}}function U(t,r,e){if("resource"===t?.type)return w(t,r,e);switch(t?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:t,write:r}=_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__.a;return{read:t,write:r}}}}function w(t,r,n){const i=(0,_metadata_js__WEBPACK_IMPORTED_MODULE_4__/* .getPropertyMetadata */ .z4)(r,n);return{type:String,read:(t,r,e)=>{const o=(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__.r)(t,r,e);return i.type===String?o:"function"==typeof i.type?new i.type({url:o}):void 0},write:{writer(r,p,c,u){if(!u?.resources)return"string"==typeof r?void(p[c]=(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__.t)(r,u)):void(p[c]=r.write({},u));const l=x(r),m=(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__.t)(l,{...u,verifyItemRelativeUrls:u?.verifyItemRelativeUrls?{writtenUrls:u.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__.M.NO),d=i.type!==String&&(!(0,_multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .isMultiOriginJSONMixin */ .H)(this)||u?.origin&&this.originIdOf(n)>(0,_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_5__/* .nameToId */ .aB)(u.origin)),h={object:this,propertyName:n,value:r,targetUrl:m,dest:p,targetPropertyName:c,context:u,params:t};u?.portalItem&&m&&!(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isAbsolute */ .oP)(m)?d&&t?.contentAddressed?I(h):d?N(h):P(h):u?.portalItem&&(null==m||null!=(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__.i)(m)||(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isBlobProtocol */ .w8)(m)||d)?I(h):p[c]=m}}}}function I(e){const{targetUrl:o,params:p,value:u,context:a,dest:l,targetPropertyName:d}=e;if(!a.portalItem)return;const f=(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__.p)(o),y=b(u,o,a);if(p?.contentAddressed&&"json"!==y.type)return void a.messages?.push(new _Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("persistable:contentAddressingUnsupported",`Property "${d}" is trying to serializing a resource with content of type ${y.type} with content addressing. Content addressing is only supported for json resources.`,{content:y}));const g=p?.contentAddressed&&"json"===y.type?(0,_MD5_js__WEBPACK_IMPORTED_MODULE_1__/* .createMD5Hash */ .d)(y.jsonString):f?.filename??(0,_uuid_js__WEBPACK_IMPORTED_MODULE_3__/* .generateUUID */ .lk)(),v=(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(p?.prefix??f?.prefix,g),j=`${v}.${(0,_portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_7__/* .getResourceContentExtension */ .n)(y)}`;if(p?.contentAddressed&&a.resources&&"json"===y.type){const t=a.resources.toKeep.find((t=>t.resource.path===j))??a.resources.toAdd.find((t=>t.resource.path===j));if(t)return void(l[d]=t.resource.itemRelativeUrl)}const U=a.portalItem.resourceFromPath(j);(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isBlobProtocol */ .w8)(o)&&a.resources&&a.resources.pendingOperations.push((0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .blobUrlToBlob */ .tk)(o).then((t=>{U.path=`${v}.${(0,_portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_7__/* .getResourceContentExtension */ .n)({type:"blob",blob:t})}`,l[d]=U.itemRelativeUrl})).catch((()=>{})));const w=p?.compress??!1;a.resources&&S({...e,resource:U,content:y,compress:w,updates:a.resources.toAdd}),l[d]=U.itemRelativeUrl}function N(t){const{context:r,targetUrl:e,params:o,value:s,dest:n,targetPropertyName:i}=t;if(!r.portalItem)return;const c=r.portalItem.resourceFromPath(e),u=b(s,e,r),a=(0,_portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_7__/* .getResourceContentExtension */ .n)(u),l=(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getPathExtension */ .Zo)(c.path),d=o?.compress??!1;a===l?(r.resources&&S({...t,resource:c,content:u,compress:d,updates:r.resources.toUpdate}),n[i]=e):I(t)}function P({context:t,targetUrl:r,dest:e,targetPropertyName:o}){t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(r),compress:!1}),e[o]=r)}function S({object:t,propertyName:r,updates:e,resource:o,content:s,compress:n}){e.push({resource:o,content:s,compress:n,finish:e=>{O(t,r,e)}})}function b(t,r,e){return"string"==typeof t?{type:"url",url:r}:{type:"json",jsonString:JSON.stringify(t.toJSON(e))}}function x(t){return null==t?null:"string"==typeof t?t:t.url}function O(t,r,e){"string"==typeof t[r]?t[r]=e.url:t[r].url=e.url}


/***/ }),

/***/ 64442:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EB: () => (/* binding */ s),
/* harmony export */   Ui: () => (/* binding */ a),
/* harmony export */   ir: () => (/* binding */ p)
/* harmony export */ });
/* unused harmony export isEmpty */
/* harmony import */ var _Accessor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52495);
/* harmony import */ var _Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48982);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55135);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const o=new Set(["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"]);function r(t){return t instanceof _Accessor_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A}function f(e){return e instanceof _Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A?Object.keys(e.items):r(e)?(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .getProperties */ .oY)(e).keys():e?Object.keys(e):[]}function l(e,n){return e instanceof _Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A?e.items[n]:e[n]}function i(e,t){return!(!Array.isArray(e)||!Array.isArray(t))&&e.length!==t.length}function u(e){return e?e.declaredClass:null}function c(e,t){const n=e.diff;if(n&&"function"==typeof n)return n(e,t);const s=f(e),p=f(t);if(0===s.length&&0===p.length)return;if(!s.length||!p.length||i(e,t))return{type:"complete",oldValue:e,newValue:t};const a=p.filter((e=>!s.includes(e))),y=s.filter((e=>!p.includes(e))),m=s.filter((n=>p.includes(n)&&l(e,n)!==l(t,n))).concat(a,y).sort(),d=u(e);if(d&&o.has(d)&&m.length)return{type:"complete",oldValue:e,newValue:t};let h;const b=r(e)&&r(t);for(const o of m){const r=l(e,o),f=l(t,o);let i;if((b||"function"!=typeof r&&"function"!=typeof f)&&(r!==f&&(null!=r||null!=f))){if(n&&n[o]&&"function"==typeof n[o])i=n[o]?.(r,f);else if(r instanceof Date&&f instanceof Date){if(r.getTime()===f.getTime())continue;i={type:"complete",oldValue:r,newValue:f}}else i="object"==typeof r&&"object"==typeof f&&u(r)===u(f)?c(r,f):{type:"complete",oldValue:r,newValue:f};null!=i&&(null!=h?h.diff[o]=i:h={type:"partial",diff:{[o]:i}})}}return h}function s(e,t){if(null==e)return!1;const n=t.split(".");let o=e;for(const r of n){if("complete"===o.type)return!0;if("partial"!==o.type)return!1;{const e=o.diff[r];if(!e)return!1;o=e}}return!0}function p(e,t){for(const n of t)if(s(e,n))return!0;return!1}function a(e,t){if("function"!=typeof e&&"function"!=typeof t&&(null!=e||null!=t))return null==e||null==t||"object"==typeof e&&"object"==typeof t&&u(e)!==u(t)?{type:"complete",oldValue:e,newValue:t}:c(e,t)}function y(e){if(null==e)return!0;switch(e.type){case"complete":return!1;case"collection":{const t=e;for(const e of t.added)if(!y(e))return!1;for(const e of t.removed)if(!y(e))return!1;for(const e of t.changed)if(!y(e))return!1;return!0}case"partial":for(const t in e.diff){if(!y(e.diff[t]))return!1}return!0}}


/***/ }),

/***/ 73324:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ a)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const a=(a=>a)(["operational-layers","basemap","ground"]);


/***/ }),

/***/ 34541:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55750);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function i(i){i?.writtenProperties&&i.writtenProperties.forEach((({target:i,propName:t,newOrigin:e})=>{(0,_multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isMultiOriginJSONMixin */ .H)(i)&&e&&i.originOf(t)!==e&&i.updateOrigin(t,e)}))}


/***/ }),

/***/ 55750:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ i)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function i(i){return i&&"getAtOrigin"in i&&"originOf"in i}


/***/ }),

/***/ 90709:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GB: () => (/* binding */ t),
/* harmony export */   Qo: () => (/* binding */ i),
/* harmony export */   Y4: () => (/* binding */ r)
/* harmony export */ });
/* unused harmony export adoptTimeZone */
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34495);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class t{}function r(n){return n instanceof luxon__WEBPACK_IMPORTED_MODULE_0__/* .Zone */ .bo?n===t.instance:"unknown"===n?.toString().toLowerCase()}function i(n){return r(n)?t.instance:n}function c(n,o){return e.fromObject({day:n.day,year:n.year,month:n.month,hour:n.hour,minute:n.minute,second:n.second,millisecond:n.millisecond},{zone:o})}t.instance=new luxon__WEBPACK_IMPORTED_MODULE_0__/* .IANAZone */ .oh("Etc/UTC");


/***/ }),

/***/ 38394:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* binding */ L)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(92504);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat4.js
var mat4 = __webpack_require__(37046);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3f64.js
var vec3f64 = __webpack_require__(22279);
;// ../node_modules/@arcgis/core/geometry/projection/localRotationUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function localRotationUtils_n(t,n,o){const s=Math.sin(t),r=Math.cos(t),a=Math.sin(n),c=Math.cos(n),h=o;return h[0]=-s,h[4]=-a*r,h[8]=c*r,h[12]=0,h[1]=r,h[5]=-a*s,h[9]=c*s,h[13]=0,h[2]=0,h[6]=c,h[10]=a,h[14]=0,h[3]=0,h[7]=0,h[11]=0,h[15]=1,h}function o(o,s,r){return localRotationUtils_n(o,s,r),(0,mat4.t)(r,r),r}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projection/projectors.js + 1 modules
var projectors = __webpack_require__(11473);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(87926);
;// ../node_modules/@arcgis/core/geometry/projection/computeTranslationToOriginAndRotation.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function L(r,n,L,m){if(null==r||null==m)return!1;const p=(0,projectors/* classifySpatialReference */.Qk)(r,projectors/* sourceClassificationCache */.Wv),P=(0,projectors/* classifySpatialReference */.Qk)(m,projectors/* destClassificationCache */.zp);if(p===P&&!_(P)&&(p!==projectors/* ProjectionID */.rz.UNKNOWN||(0,spatialReferenceUtils/* equals */.aI)(r,m)))return (0,mat4.d)(L,n),!0;if(_(P)){const r=projectors/* projectionTable */.w5[p][projectors/* ProjectionID */.rz.LON_LAT],t=projectors/* projectionTable */.w5[projectors/* ProjectionID */.rz.LON_LAT][P];return null!=r&&null!=t&&(r(n,0,e,0),t(e,0,f,0),localRotationUtils_n(c*e[0],c*e[1],L),L[12]=f[0],L[13]=f[1],L[14]=f[2],!0)}if((P===projectors/* ProjectionID */.rz.WEB_MERCATOR||P===projectors/* ProjectionID */.rz.PLATE_CARREE)&&(p===projectors/* ProjectionID */.rz.WGS84||p===projectors/* ProjectionID */.rz.CGCS2000&&P===projectors/* ProjectionID */.rz.PLATE_CARREE||p===projectors/* ProjectionID */.rz.SPHERICAL_ECEF||p===projectors/* ProjectionID */.rz.WEB_MERCATOR)){const r=projectors/* projectionTable */.w5[p][projectors/* ProjectionID */.rz.LON_LAT],t=projectors/* projectionTable */.w5[projectors/* ProjectionID */.rz.LON_LAT][P];return null!=r&&null!=t&&(r(n,0,e,0),t(e,0,f,0),p===projectors/* ProjectionID */.rz.SPHERICAL_ECEF?o(c*e[0],c*e[1],L):(0,mat4.g)(L),L[12]=f[0],L[13]=f[1],L[14]=f[2],!0)}return!1}function _(r){return r===projectors/* ProjectionID */.rz.SPHERICAL_ECEF||r===projectors/* ProjectionID */.rz.SPHERICAL_MARS_PCPF||r===projectors/* ProjectionID */.rz.SPHERICAL_MOON_PCPF}const c=(0,mathUtils/* deg2rad */.kU)(1),e=(0,vec3f64.c)(),f=(0,vec3f64.c)();


/***/ }),

/***/ 32937:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lO: () => (/* binding */ c)
/* harmony export */ });
/* unused harmony exports SphericalECEFSpatialReference, SphericalPCPFMars, SphericalPCPFMoon, WGS84ECEFSpatialReference */
/* harmony import */ var _ellipsoidUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47936);
/* harmony import */ var _SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78983);
/* harmony import */ var _support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87926);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const f=new _SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(_ellipsoidUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .SphericalECEFSpatialReferenceLike */ .fv),l=new _SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(_ellipsoidUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .SphericalPCPFMarsLike */ .FY),m=new _SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(_ellipsoidUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .SphericalPCPFMoonLike */ .LJ),a=new _SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(_ellipsoidUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .WGS84ECEFSpatialReferenceLike */ .Ro);function c(e){return e&&((0,_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isMars */ .q8)(e)||(0,_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .equals */ .aI)(e,l))?l:e&&((0,_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isMoon */ .KQ)(e)||(0,_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .equals */ .aI)(e,m))?m:f}


/***/ }),

/***/ 80530:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  vt: () => (/* binding */ plane_b),
  lU: () => (/* binding */ X),
  qb: () => (/* binding */ ot)
});

// UNUSED EXPORTS: clip, clipInfinite, copy, distance, equals, exactEquals, fromArray, fromNormalAndOffset, fromPoints, fromPositionAndNormal, fromValues, fromVectorsAndPoint, intersectLine, intersectLineSegment, intersectLineSegmentClamp, intersectPlanes, intersectRay, isPointInside, isPointOutside, isSphereFullyInside, isSphereFullyOutside, isVertical, negate, projectPoint, projectPointLocal, projectVector, setOffsetFromPoint, signedDistance, up, wrap

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(92504);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3.js
var vec3 = __webpack_require__(21839);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3f64.js
var vec3f64 = __webpack_require__(22279);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec4.js
var vec4 = __webpack_require__(25102);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/common.js
var common = __webpack_require__(57137);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/sphere.js
var sphere = __webpack_require__(96245);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/vector.js
var vector = __webpack_require__(16597);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/vectorStacks.js + 1 modules
var vectorStacks = __webpack_require__(45573);
;// ../node_modules/@arcgis/core/views/3d/support/mathUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function mathUtils_M(t,n){return t>n?Math.cos(n):Math.cos(t)}function mathUtils_e(t,n,s){return 2*Math.atan(s*Math.tan(.5*t)/n)}function mathUtils_m(t,n,s){return 2*Math.atan(n*Math.tan(.5*t)/s)}function mathUtils_p(t){const n=t[0]*t[0]+t[4]*t[4]+t[8]*t[8],s=t[1]*t[1]+t[5]*t[5]+t[9]*t[9],a=t[2]*t[2]+t[6]*t[6]+t[10]*t[10];return Math.sqrt(Math.max(n,s,a))}function mathUtils_j(t,s){const a=Math.sqrt(s[0]*s[0]+s[4]*s[4]+s[8]*s[8]),r=Math.sqrt(s[1]*s[1]+s[5]*s[5]+s[9]*s[9]),o=Math.sqrt(s[2]*s[2]+s[6]*s[6]+s[10]*s[10]);return n(t,a,r,o),t}function l(t,r,o){o=o||t;const c=s(t,r);n(o,t[0]-c*r[0],t[1]-c*r[1],t[2]-c*r[2]),a(o,o)}function q(t,s,o){Math.abs(t[0])>Math.abs(t[1])?n(s,0,1,0):n(s,1,0,0),r(o,t,s),a(s,s),r(s,o,t),a(o,o)}function b(t,n,s,a,r,o){const c=t+(n-t)*r;return c+(s+(a-s)*r-c)*o}function mathUtils_g(t,n,a,r=f()){const h=o(t),M=o(n),e=s(t,n)/(h*M);if(e<.9999999999999999){const s=Math.acos(e),o=((1-a)*h+a*M)/Math.sin(s),i=o/h*Math.sin((1-a)*s),f=o/M*Math.sin(a*s);return c(z,t,i),c(A,n,f),u(r,z,A)}return i(r,t,n,a)}function k(t,n,r,M=f(),e=f()){const m=o(t),p=o(n),j=s(t,n)/(m*p);if(j<.9999999999999999){const s=Math.acos(j),a=Math.sin(s),o=Math.sin(r*s),i=Math.sin((1-r)*s),h=(1-r)*m+r*p;{const s=h/a,r=s/p*o;c(z,t,s/m*i),c(A,n,r),u(M,z,A)}{const f=1/m*(-Math.cos((1-r)*s)*s*h+i*(-m+p));c(z,t,f);const M=1/p*(Math.cos(r*s)*s*h+o*(-m+p));c(A,n,M),u(e,z,A),c(e,e,1/a)}return e}return i(M,t,n,r),h(e,n,t),a(e,e),e}function v(n,o,c){n=a(z,n),o=a(A,o);const u=t(s(n,o));if(c){const t=r(y,n,o);if(s(t,c)<0)return-u}return u}function x(t){const n=t.length;return s=>{if(s<=t[0][0])return t[0][1];if(s>=t[n-1][0])return t[n-1][1];let a=1;for(;s>t[a][0];)a++;const r=t[a-1][0],o=t[a][0],c=(o-s)/(o-r);return c*t[a-1][1]+(1-c)*t[a][1]}}function U(t,n,o,c){h(d,n,t),h(w,o,t),r(c,d,w),a(c,c),c[3]=-s(t,c)}const d=(0,vec3f64.c)(),w=(0,vec3f64.c)(),y=(0,vec3f64.c)(),z=(0,vec3f64.c)(),A=(0,vec3f64.c)();

;// ../node_modules/@arcgis/core/geometry/support/plane.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function plane_b(t=ut){return[t[0],t[1],t[2],t[3]]}const plane_l=(/* unused pure expression or super */ null && (N)),plane_v=(/* unused pure expression or super */ null && (M));function plane_A(t=ut[0],n=ut[1],r=ut[2],o=ut[3]){return T(t,n,r,o,p.get())}function F(t,n){return T(n[0],n[1],n[2],n[3],t)}function T(t,n,r,o,c=plane_b()){return c[0]=t,c[1]=n,c[2]=r,c[3]=o,c}function _(t,r,o){return n(o,t),o[3]=r,o}function plane_k(t,n,r){const o=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],c=Math.abs(o-1)>1e-5&&o>1e-12?1/Math.sqrt(o):1;return r[0]=n[0]*c,r[1]=n[1]*c,r[2]=n[2]*c,r[3]=-(r[0]*t[0]+r[1]*t[1]+r[2]*t[2]),r}function plane_d(t,n,r,o=plane_b()){const c=r[0]-n[0],u=r[1]-n[1],e=r[2]-n[2],i=t[0]-n[0],s=t[1]-n[1],f=t[2]-n[2],a=u*f-e*s,I=e*i-c*f,N=c*s-u*i,M=a*a+I*I+N*N,h=Math.abs(M-1)>1e-5&&M>1e-12?1/Math.sqrt(M):1;return o[0]=a*h,o[1]=I*h,o[2]=N*h,o[3]=-(o[0]*t[0]+o[1]*t[1]+o[2]*t[2]),o}function X(t,n,e,i=0,s=Math.floor(e*(1/3)),f=Math.floor(e*(2/3))){if(e<3)return!1;n(L,i);let a=s,I=!1;for(;a<e-1&&!I;)n(P,a),a++,I=!(0,vec3.h)(L,P);if(!I)return!1;for(a=Math.max(a,f),I=!1;a<e&&!I;)n(O,a),a++,(0,vec3.f)(plane_q,L,P),(0,vec3.n)(plane_q,plane_q),(0,vec3.f)(plane_x,P,O),(0,vec3.n)(plane_x,plane_x),I=!(0,vec3.h)(L,O)&&!(0,vec3.h)(P,O)&&Math.abs((0,vec3.j)(plane_q,plane_x))<C;return I?(plane_d(L,P,O,t),!0):(0!==i||1!==s||2!==f)&&X(t,n,e,0,1,2)}function plane_y(t,n,r=!0){const o=n.length/3;return X(t,((t,r)=>e(t,n[3*r+0],n[3*r+1],n[3*r+2])),r?o-1:o)}const C=.99619469809,L=(0,vec3f64.c)(),P=(0,vec3f64.c)(),O=(0,vec3f64.c)(),plane_q=(0,vec3f64.c)(),plane_x=(0,vec3f64.c)();function plane_U(t,n,r){return n!==t&&F(t,n),t[3]=-u(ot(t),r),t}function plane_w(t,n){return n[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n[3]=-t[3],n}function S(t,n,r,o){return i(O,n,t),plane_k(r,O,o)}function plane_z(t,n,r,c){return rt(t,n,o(E.get(),r,n),it,c)}function B(t,n,r){return null!=n&&rt(t,n.origin,n.direction,st,r)}function D(t,n,r){return rt(t,n.origin,n.vector,et.NONE,r)}function G(t,n,r){return rt(t,n.origin,n.vector,et.CLAMP,r)}const H=(()=>{const t=(0,vec3f64.c)();return(r,o,u)=>{const e=ot(r),f=ot(o);(0,vec3.b)(t,e,f);if((0,vec3.m)(t)<(0,common.g)())return!1;(0,vec3.n)(t,t);const[a,I,N]=t,M=u.origin,m=Math.abs(a),g=Math.abs(I),p=Math.abs(N),[E,j,b]=e,[l,v,A]=f,F=r[3],T=o[3];return m>g&&m>p?(M[1]=(T*b-F*A)/a,M[2]=(F*v-T*j)/a):g>p?(M[0]=(F*A-T*b)/I,M[2]=(T*E-F*l)/I):(M[0]=(T*j-F*v)/N,M[1]=(F*l-T*E)/N),(0,vec3.c)(u.direction,t),!0}})();function J(t,n){return nt(t,m(n))-n[3]>=0}function K(t,n){return nt(t,m(n))+n[3]<0}function Q(t,n){return nt(t,n)>=0}function R(t,n){return nt(t,n)<0}function V(t,n){const r=u(ot(t),n.ray.direction),o=-nt(t,n.ray.origin);if(o<0&&r>=0)return!1;if(r>-1e-6&&r<1e-6)return o>0;if((o<0||r<0)&&!(o<0&&r<0))return!0;const c=o/r;return r>0?c<n.c1&&(n.c1=c):c>n.c0&&(n.c0=c),n.c0<=n.c1}function W(t,n){const r=u(ot(t),n.ray.direction),o=-nt(t,n.ray.origin);if(r>-1e-6&&r<1e-6)return o>0;const c=o/r;return r>0?c<n.c1&&(n.c1=c):c>n.c0&&(n.c0=c),n.c0<=n.c1}function Y(t,n,r){const c=f(E.get(),ot(t),-t[3]),u=$(t,o(E.get(),n,c),E.get());return a(r,u,c),r}function Z(t,n,r,c){const u=ot(t),i=E.get(),s=E.get();j(u,i,s);const f=o(E.get(),r,n),a=g(i,f),I=g(s,f),N=g(u,f);return e(c,a,I,N)}function $(t,n,r){const c=f(E.get(),ot(t),u(ot(t),n));return o(r,n,c),r}function tt(t,n){return Math.abs(nt(t,n))}function nt(t,n){return u(ot(t),n)+t[3]}function rt(n,r,o,c,e){const i=u(ot(n),o);if(0===i)return!1;let s=-(u(ot(n),r)+n[3])/i;return c&et.CLAMP&&(s=t(s,0,1)),!(!(c&et.INFINITE_MIN)&&s<0||!(c&et.INFINITE_MAX)&&s>1)&&(a(e,r,f(e,o,s)),!0)}function ot(t){return t}function ct(t){return Math.abs(ot(t)[2])<h()}const ut=[0,0,1,0];var et;!function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX"}(et||(et={}));const it=et.INFINITE_MIN|et.INFINITE_MAX,st=et.INFINITE_MAX;


/***/ }),

/***/ 32532:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cr: () => (/* binding */ h),
/* harmony export */   LV: () => (/* binding */ p),
/* harmony export */   oC: () => (/* binding */ q),
/* harmony export */   vt: () => (/* binding */ d)
/* harmony export */ });
/* unused harmony exports copy, distance, distance2, equals, fromValues */
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85569);
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92114);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21839);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22279);
/* harmony import */ var _vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45573);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function d(i){return i?m((0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.g)(i.origin),(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.g)(i.direction)):m((0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)())}function m(i,n){return{origin:i,direction:n}}function j(n,r){return i(n.origin,r.origin)&&i(n.direction,r.direction)}function p(i,n){const r=S.get();return r.origin=i,r.direction=n,r}function k(i,n=d()){return v(i.origin,i.direction,n)}function h(i,n,o=d()){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.c)(o.origin,i),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.f)(o.direction,n,i),o}function v(i,n,t=d()){return r(t.origin,i),r(t.direction,n),t}function b(i,n){const r=o(a.get(),c(a.get(),i.direction),t(a.get(),n,i.origin));return e(r,r)}function l(i,n){return Math.sqrt(b(i,n))}function q(i,n,r){const o=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.j)(i.direction,(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.f)(r,n,i.origin));return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.g)(r,i.origin,(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.i)(r,i.direction,o)),r}const S=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_4__/* .ObjectStack */ .I((()=>d()));


/***/ }),

/***/ 16597:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g7: () => (/* binding */ e)
/* harmony export */ });
/* unused harmony exports angleAroundAxis, projectPoint, projectPointSignedLength */
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92504);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21839);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22279);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function i(n,r,s){const c=t(n,r)/t(n,n);return o(s,n,c)}function a(n,o){return t(n,o)/r(n)}function e(o,s){const c=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.j)(o,s)/((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.l)(o)*(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.l)(s));return-(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .acosClamped */ .XM)(c)}function f(o,r,u){s(m,o),s(h,r);const i=t(m,h),a=n(i),e=c(m,m,h);return t(e,u)<0?2*Math.PI-a:a}const m=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),h=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)();


/***/ }),

/***/ 45573:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Rc: () => (/* binding */ f),
  rq: () => (/* binding */ vectorStacks_c)
});

// UNUSED EXPORTS: sm3d, sq4d, sv2d, sv4d

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/ByteSizeUnit.js
var ByteSizeUnit = __webpack_require__(84858);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/nextTick.js
var nextTick = __webpack_require__(37103);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat3f64.js
var mat3f64 = __webpack_require__(76287);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat4f64.js
var mat4f64 = __webpack_require__(56192);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/quatf64.js
var quatf64 = __webpack_require__(46991);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec2f64.js
var vec2f64 = __webpack_require__(78286);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3f64.js
var vec3f64 = __webpack_require__(22279);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec4f64.js
var vec4f64 = __webpack_require__(52712);
;// ../node_modules/@arcgis/core/core/VectorStack.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class c{constructor(t,e,s){this._itemByteSize=t,this._itemCreate=e,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(s/this._itemByteSize)}get(){0===this._itemsPtr&&(0,nextTick/* nextTick */.d)((()=>this._reset()));const t=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=t;){const t=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize);for(let e=0;e<this._itemsPerBuffer;++e)this._items.push(this._itemCreate(t,e*this._itemByteSize));this._buffers.push(t)}return this._items[this._itemsPtr++]}_reset(){const t=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>t;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(t=a){return new c(16,vec2f64.c,t)}static createVec3f64(t=a){return new c(24,vec3f64.a,t)}static createVec4f64(t=a){return new c(32,vec4f64.a,t)}static createMat3f64(t=a){return new c(72,mat3f64.c,t)}static createMat4f64(t=a){return new c(128,mat4f64.c,t)}static createQuatf64(t=a){return new c(32,quatf64.c,t)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}}const a=4*ByteSizeUnit/* ByteSizeUnit */.u.KILOBYTES;

;// ../node_modules/@arcgis/core/geometry/support/vectorStacks.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const t=c.createVec2f64(),vectorStacks_c=c.createVec3f64(),r=c.createVec4f64(),vectorStacks_a=c.createMat3f64(),f=c.createMat4f64(),o=c.createQuatf64();


/***/ }),

/***/ 12534:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ me)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/Graphic.js
var Graphic = __webpack_require__(25707);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/PopupTemplate.js + 3 modules
var PopupTemplate = __webpack_require__(56542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/ClassBreaksRenderer.js
var ClassBreaksRenderer = __webpack_require__(17671);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/DictionaryRenderer.js
var DictionaryRenderer = __webpack_require__(84685);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/DotDensityRenderer.js + 1 modules
var DotDensityRenderer = __webpack_require__(20299);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/HeatmapRenderer.js + 1 modules
var HeatmapRenderer = __webpack_require__(25498);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/PieChartRenderer.js + 2 modules
var PieChartRenderer = __webpack_require__(79300);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/Renderer.js
var Renderer = __webpack_require__(76589);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/SimpleRenderer.js
var SimpleRenderer = __webpack_require__(47347);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/UniqueValueRenderer.js + 3 modules
var UniqueValueRenderer = __webpack_require__(2692);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/jsonUtils.js
var jsonUtils = __webpack_require__(48887);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/types.js
var types = __webpack_require__(49169);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/request.js
var request = __webpack_require__(86394);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(24793);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(48982);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(35775);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(85251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(20909);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/utils.js
var utils = __webpack_require__(55135);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/PropertyOrigin.js
var PropertyOrigin = __webpack_require__(94255);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/Layer.js + 1 modules
var Layer = __webpack_require__(68833);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/APIKeyMixin.js
var APIKeyMixin = __webpack_require__(50193);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/ArcGISService.js
var ArcGISService = __webpack_require__(45681);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/EditBusLayer.js
var EditBusLayer = __webpack_require__(46602);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(41506);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/PortalLayer.js
var PortalLayer = __webpack_require__(34722);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js
var ScaleRangeLayer = __webpack_require__(25389);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/SceneService.js + 1 modules
var SceneService = __webpack_require__(68821);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js
var arcgisLayerUrl = __webpack_require__(16123);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/associatedFeatureServiceUtils.js
var associatedFeatureServiceUtils = __webpack_require__(98154);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/capabilities.js
var capabilities = __webpack_require__(97934);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/commonProperties.js + 1 modules
var commonProperties = __webpack_require__(84356);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/featureLayerUtils.js + 1 modules
var featureLayerUtils = __webpack_require__(97461);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/FeatureReduction.js
var FeatureReduction = __webpack_require__(18475);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/FeatureReductionSelection.js
var FeatureReductionSelection = __webpack_require__(99989);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/fieldProperties.js
var fieldProperties = __webpack_require__(77567);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/FieldsIndex.js
var FieldsIndex = __webpack_require__(79005);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/fieldUtils.js
var fieldUtils = __webpack_require__(42453);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/I3SLayerDefinitions.js
var I3SLayerDefinitions = __webpack_require__(84546);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/LabelClass.js + 1 modules
var LabelClass = __webpack_require__(86155);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/labelingInfo.js
var labelingInfo = __webpack_require__(79682);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/LayerFloorInfo.js
var LayerFloorInfo = __webpack_require__(8585);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/lazyLayerLoader.js
var lazyLayerLoader = __webpack_require__(12434);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
;// ../node_modules/@arcgis/core/layers/support/RangeInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let s=class extends JSONSupport/* JSONSupport */.oY{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:!0,write:!0}})],s.prototype,"name",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:!0,write:!0}})],s.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number],json:{read:!0,write:!0}})],s.prototype,"currentRangeExtent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number],json:{read:!0,write:!0}})],s.prototype,"fullRangeExtent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],s.prototype,"type",void 0),s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.RangeInfo")],s);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/persistable.js
var persistable = __webpack_require__(77841);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Warning.js
var Warning = __webpack_require__(68659);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Polygon.js
var Polygon = __webpack_require__(62802);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projection.js + 1 modules
var projection = __webpack_require__(13484);
;// ../node_modules/@arcgis/core/layers/support/PolygonCollection.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var c;let p=c=class extends((0,JSONSupport/* JSONSupportMixin */.Te)(Collection/* default */.A.ofType(Polygon/* default */.A))){constructor(e){super(e)}clone(){return new c(this.items.map((e=>e.clone())))}write(e,r){return this.toJSON(r)}toJSON(e){const r=e?.layer?.spatialReference;return r?this.toArray().map((t=>{if(!r.equals(t.spatialReference)){if(!(0,projection.canProjectWithoutEngine)(t.spatialReference,r))return e?.messages&&e.messages.push(new Warning/* default */.A("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const s=new Polygon/* default */.A;(0,projection.projectPolygon)(t,s,r),t=s}const s=t.toJSON(e);return delete s.spatialReference,s})).filter((e=>null!=e)):(e?.messages&&e.messages.push(new Warning/* default */.A("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map((r=>r.toJSON(e))))}static fromJSON(e,r){const t=new c;return e.forEach((e=>t.add(Polygon/* default */.A.fromJSON(e,r)))),t}};p=c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.PolygonCollection")],p);const l=p;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/persistableUrlUtils.js
var persistableUrlUtils = __webpack_require__(63680);
;// ../node_modules/@arcgis/core/layers/support/SceneFilter.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var u;let g=u=class extends JSONSupport/* JSONSupport */.oY{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new l,this._geometriesSource=null}initialize(){this.addHandles((0,reactiveUtils.on)((()=>this.geometries),"after-changes",(()=>this.geometries=this.geometries),reactiveUtils/* sync */.OH))}readGeometries(e,r,o){Array.isArray(e)?this.geometries=l.fromJSON(e,o):this._geometriesSource={url:(0,persistableUrlUtils.f)(e,o),context:o}}async loadGeometries(e,o){if(null==this._geometriesSource)return;const{url:s,context:t}=this._geometriesSource,i=await (0,request/* default */.A)(s,{responseType:"json",signal:o?.signal}),a=e.toJSON(),p=i.data.map((e=>({...e,spatialReference:a})));this.geometries=l.fromJSON(p,t),this._geometriesSource=null}clone(){const e=new u({geometries:(0,lang/* clone */.o8)(this.geometries),spatialRelationship:this.spatialRelationship});return e._geometriesSource=this._geometriesSource,e}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],g.prototype,"spatialRelationship",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:l,nonNullable:!0,json:{write:!0}}),(0,persistable/* persistable */.P)({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries",contentAddressed:!0})],g.prototype,"geometries",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)(["web-scene","portal-item"],"geometries")],g.prototype,"readGeometries",null),g=u=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.SceneFilter")],g);const h=g;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/styleUtils.js
var styleUtils = __webpack_require__(21484);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/Query.js + 1 modules
var Query = __webpack_require__(24587);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/elevationInfoUtils.js
var elevationInfoUtils = __webpack_require__(27451);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/featureFlags.js
var featureFlags = __webpack_require__(59346);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/popupUtils.js
var popupUtils = __webpack_require__(44116);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/i3s/I3SUtil.js + 4 modules
var I3SUtil = __webpack_require__(88169);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/layers/support/popupUtils.js
var support_popupUtils = __webpack_require__(18846);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/webdoc/support/opacityUtils.js
var opacityUtils = __webpack_require__(48904);
;// ../node_modules/@arcgis/core/layers/SceneLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const ye=new Set(["3DObject","Point"]),ue=(0,fieldProperties/* defineFieldProperties */.p)();let ce=class extends((0,EditBusLayer/* EditBusLayer */.w6)((0,SceneService/* SceneService */.w6)((0,ArcGISService/* ArcGISService */.b)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.A)((0,ScaleRangeLayer/* ScaleRangeLayer */.j)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)((0,APIKeyMixin/* APIKeyMixin */.p)((0,Clonable/* ClonableMixin */.O)(Layer/* default */.A)))))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new Collection/* default */.A,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0,this.serviceItemId=void 0}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this._set("renderer",null)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){const r=this.getFeatureType(t?.feature)?.domains?.[e];return r&&"inherited"!==r.type?r:this.getField(e)?.domain??null}getFeatureType(e){return e&&this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){return this.associatedLayer?.types??[]}get typeIdField(){return this.associatedLayer?.typeIdField??null}get templates(){return this.associatedLayer?.templates??null}get formTemplate(){return this.associatedLayer?.formTemplate??null}get fieldsIndex(){return new FieldsIndex/* default */.A(this.fields)}readNodePages(e,t,r){return"Point"===t.layerType&&(e=t.pointNodePages),null==e||"object"!=typeof e?null:I3SLayerDefinitions/* I3SNodePageDefinition */.W4.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get effectiveCapabilities(){return this._capabilitiesFromAssociatedFeatureLayer(this.associatedLayer?.effectiveCapabilities)}get effectiveEditingEnabled(){return null!=this.associatedLayer&&(0,featureLayerUtils/* computeEffectiveEditingEnabled */.C$)(this.associatedLayer)}get geometryType(){return fe[this.profile]||"mesh"}set renderer(e){(0,fieldUtils/* fixRendererFields */.yp)(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e}get capabilities(){return this._capabilitiesFromAssociatedFeatureLayer(this.associatedLayer?.capabilities)}_capabilitiesFromAssociatedFeatureLayer(e){e=null!=e?e:capabilities/* zeroCapabilities */.P;const{query:t,queryRelated:r,editing:{supportsGlobalId:i,supportsRollbackOnFailure:s,supportsUploadWithItemId:o,supportsGeometryUpdate:a,supportsReturnServiceEditsInSourceSpatialReference:n},data:{supportsZ:l,supportsM:p,isVersioned:d,supportsAttachment:y},operations:{supportsEditing:u,supportsAdd:c,supportsUpdate:h,supportsDelete:f,supportsQuery:m,supportsQueryAttachments:g,supportsAsyncConvert3D:v}}=e,b=e.operations.supportsChangeTracking,I=!!this.associatedLayer?.infoFor3D&&(0,featureFlags/* sceneLayerEditingEnabled */.Vo)();return{query:t,queryRelated:r,editing:{supportsGlobalId:i,supportsReturnServiceEditsInSourceSpatialReference:n,supportsRollbackOnFailure:s,supportsGeometryUpdate:I&&a,supportsUploadWithItemId:o},data:{supportsAttachment:y,supportsZ:l,supportsM:p,isVersioned:d},operations:{supportsQuery:m,supportsQueryAttachments:g,supportsEditing:u&&b,supportsAdd:I&&c&&b,supportsDelete:I&&f&&b,supportsUpdate:h&&b,supportsAsyncConvert3D:v}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.associatedLayer?.editingEnabled??!1}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}get infoFor3D(){return this.associatedLayer?.infoFor3D??null}get relationships(){return this.associatedLayer?.relationships}get defaultPopupTemplate(){return this.associatedLayer||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeOID"===t.type&&(e=t.name),!!e))),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeGlobalID"===t.type&&(e=t.name),!!e))),e||void 0}get displayField(){return this.associatedLayer?.displayField??null}readProfile(e,t){const r=t.store.profile;return null!=r&&he[r]?he[r]:(Logger/* default */.A.getLogger(this).error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}load(e){return this.addResolvingPromise(this._load(e)),Promise.resolve(this)}async _load(e){const t=null!=e?e.signal:null;await this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(promiseUtils/* throwIfAbortError */.QP),await this._fetchService(t),await Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t),this._loadFilterGeometries()]),this._validateElevationInfo(),this._applyAssociatedLayerOverrides(),this._populateFieldUsageInfo(),await (0,styleUtils/* loadStyleRenderer */.L)(this,{origin:"service"},t),(0,fieldUtils/* fixRendererFields */.yp)(this.renderer,this.fieldsIndex),await this.finishLoadEditablePortalLayer(e)}async beforeSave(){null!=this.filter&&(this.filter=this.filter.clone(),await this.load())}async _loadFilterGeometries(){if(this.filter)try{await this.filter.loadGeometries(this.spatialReference)}catch(e){Logger/* default */.A.getLogger(this).error("#_loadFilterGeometries()",this,"Failed to load filter geometries. Geometry filter will not be applied for this layer.",{error:e}),this.filter=null}}createQuery(){const e=new Query/* default */.A;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e.outFields=["*"],e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=this,t.sourceLayer=this;return e}))}async queryRelatedFeatures(e,t){if(await this.load(),!this.associatedLayer)throw new Error/* default */.A("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeatures(e,t)}async queryRelatedFeaturesCount(e,t){if(await this.load(),!this.associatedLayer)throw new Error/* default */.A("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeaturesCount(e,t)}async queryCachedAttributes(e,t){const r=(0,fieldUtils/* unpackFieldNames */.hL)(this.fieldsIndex,await (0,support_popupUtils/* getRequiredFields */.TO)(this,(0,support_popupUtils/* getFetchPopupTemplate */.D8)(this)));return (0,I3SUtil/* queryAttributesFromCachedAttributesId */.s1)(this.parsedUrl.path,this.attributeStorageInfo??[],e,t,r)}async queryCachedFeature(e,r){const i=await this.queryCachedAttributes(e,[r]);if(!i||0===i.length)throw new Error/* default */.A("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const s=new Graphic/* default */.A;return s.attributes=i[0],s.layer=this,s.sourceLayer=this,s}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryAttachments(e,t)))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(Logger/* default */.A.getLogger(this).error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return (0,popupUtils/* createPopupTemplate */.tn)(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e?.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),!this.associatedLayer)throw new Error/* default */.A("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new Error/* default */.A("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return null!=this.statisticsInfo&&this.statisticsInfo.some((t=>t.name===e))}async queryCachedStatistics(e,t){if(await this.load(t),!this.statisticsInfo)throw new Error/* default */.A("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new Error/* default */.A("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const i of this.statisticsInfo)if(i.name===r.name){const e=(0,urlUtils/* join */.fj)(this.parsedUrl.path,i.href);return (0,request/* default */.A)(e,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new Error/* default */.A("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(SceneService/* SaveOperationType */.Xh.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(SceneService/* SaveOperationType */.Xh.SAVE,e)}async applyEdits(e,t){const{applyEdits:r}=await __webpack_require__.e(/* import() */ 8284).then(__webpack_require__.bind(__webpack_require__, 75903));let i=t;await this.load();const s=this.associatedLayer;if(!s)throw new Error/* default */.A(`${this.type}-layer:not-editable`,"Service is not editable");await s.load();const{globalIdField:o}=s,a=!!s.infoFor3D,l=i?.globalIdUsed??!0;if(a&&null==o)throw new Error/* default */.A(`${this.type}-layer:not-editable`,"Valid globalIdField expected on editable SceneLayer");if(a&&!l)throw new Error/* default */.A(`${this.type}-layer:globalid-required`,"globalIdUsed must not be false for SceneLayer editing as globalIds are required.");return (0,arcgisLayerUrl/* isHostedAgolService */.Wo)(s.url)&&a&&null!=e.deleteFeatures&&null!=o&&(i={...i,globalIdToObjectId:await (0,featureLayerUtils/* getGlobalIdToObjectIdMap */.GA)(s,e.deleteFeatures,o)}),r(this,s.source,e,i)}async uploadAssets(e,t){if(await this.load(),null==this.associatedLayer)throw new Error/* default */.A(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),this.associatedLayer.uploadAssets(e,t)}on(e,t){return super.on(e,t)}validateLayer(e){if(e.layerType&&!ye.has(e.layerType))throw new Error/* default */.A("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new Error/* default */.A("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new Error/* default */.A("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});function t(e,t){let r=!1,i=!1;if(null==e)r=!0,i=!0;else{const s=t&&t.isGeographic;switch(e){case"east-north-up":case"earth-centered":r=!0,i=s;break;case"vertex-reference-frame":r=!0,i=!s;break;default:r=!1}}if(!r)throw new Error/* default */.A("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!i)throw new Error/* default */.A("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}t(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if("points"===this.profile)e.push("Point");else{if("mesh-pyramids"!==this.profile)throw new Error/* default */.A("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const t=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some((t=>t.name===e.name))),r=!!this.associatedLayer?.fields?.some((t=>t&&e.name===t.name)),i={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||r,supportsLayerQuery:r};this._fieldUsageInfo[e.name]=i}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides(),this._applyAssociatedLayerExtentOverride(),this._applyAssociatedLayerPrivileges()}_applyAssociatedLayerFieldsOverrides(){if(!this.associatedLayer?.fields)return;let e=null;for(const t of this.associatedLayer.fields){const r=this.getField(t.name);r?(!r.domain&&t.domain&&(r.domain=t.domain.clone()),r.editable=t.editable,r.nullable=t.nullable,r.length=t.length):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if(!this.associatedLayer)return;const e=["popupTemplate","popupEnabled"],t=(0,utils/* getProperties */.oY)(this);for(let r=0;r<e.length;r++){const i=e[r],s=this.originIdOf(i),o=this.associatedLayer.originIdOf(i);s<o&&(o===PropertyOrigin/* OriginId */.Gr.SERVICE||o===PropertyOrigin/* OriginId */.Gr.PORTAL_ITEM)&&t.setAtOrigin(i,this.associatedLayer[i],o)}}_applyAssociatedLayerExtentOverride(){const e=this.associatedLayer?.editingInfo?.lastEditDate,t=this.associatedLayer?.serverGens,r=this.associatedLayer?.getAtOrigin("fullExtent","service");if(!(0,featureFlags/* sceneLayerEditingEnabled */.Vo)()||null==this.associatedLayer?.infoFor3D||!r||!(0,arcgisLayerUrl/* isHostedAgolService */.Wo)(this.associatedLayer?.url)||!e||this.serviceUpdateTimeStamp?.lastUpdate===e.getTime()||!this.serviceUpdateTimeStamp&&t?.minServerGen===t?.serverGen)return;(0,utils/* getProperties */.oY)(this).setAtOrigin("fullExtent",r.clone(),PropertyOrigin/* OriginId */.Gr.SERVICE)}_applyAssociatedLayerPrivileges(){const e=this.associatedLayer;e&&(this._set("userHasEditingPrivileges",e.userHasEditingPrivileges),this._set("userHasFullEditingPrivileges",e.userHasFullEditingPrivileges),this._set("userHasUpdateItemPrivileges",e.userHasUpdateItemPrivileges))}async _setAssociatedFeatureLayer(e){if(["mesh-pyramids","points"].includes(this.profile))try{const{serverUrl:t,layerId:r,portalItem:i}=await (0,associatedFeatureServiceUtils/* findAssociatedFeatureService */.L)(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,apiKey:this.apiKey,signal:e}),s=await lazyLayerLoader/* layerLookupMap */.S.FeatureLayer();this.associatedLayer=new s({url:t,layerId:r,portalItem:i}),await this.associatedLayer.load()}catch(t){(0,promiseUtils/* isAbortError */.zf)(t)||this._logWarningOnPopupEnabled()}}async _logWarningOnPopupEnabled(){await (0,reactiveUtils/* whenOnce */.C_)((()=>this.popupEnabled&&null!=this.popupTemplate));const e=`this SceneLayer: ${this.title}`;null==this.attributeStorageInfo?Logger/* default */.A.getLogger(this).warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):Logger/* default */.A.getLogger(this).info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}_validateElevationInfo(){const e=this.elevationInfo;"mesh-pyramids"===this.profile&&(0,elevationInfoUtils/* logInvalidElevationInfoWarning */.XF)(Logger/* default */.A.getLogger(this),(0,elevationInfoUtils/* elevationModeUnsupportedMessage */.$7)("Mesh scene layers","relative-to-scene",e)),(0,elevationInfoUtils/* logInvalidElevationInfoWarning */.XF)(Logger/* default */.A.getLogger(this),(0,elevationInfoUtils/* featureExpressionUnsupportedMessage */.tW)("Scene layers",e))}};(0,tslib_es6._)([(0,property/* property */.MZ)({types:{key:"type",base:FeatureReduction/* FeatureReduction */.c,typeMap:{selection:FeatureReductionSelection/* default */.A}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],ce.prototype,"featureReduction",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[s],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],ce.prototype,"rangeInfos",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1}})],ce.prototype,"associatedLayer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide"]})],ce.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["ArcGISSceneServiceLayer"]})],ce.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1},readOnly:!0})],ce.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({...ue.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],ce.prototype,"fields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],ce.prototype,"types",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],ce.prototype,"typeIdField",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],ce.prototype,"templates",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],ce.prototype,"formTemplate",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,clonable:!1})],ce.prototype,"fieldsIndex",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:LayerFloorInfo/* default */.A,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],ce.prototype,"floorInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(ue.outFields)],ce.prototype,"outFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:I3SLayerDefinitions/* I3SNodePageDefinition */.W4,readOnly:!0,json:{read:!1}})],ce.prototype,"nodePages",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","nodePages",["nodePages","pointNodePages"])],ce.prototype,"readNodePages",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[I3SLayerDefinitions/* I3SMaterialDefinition */.uV],readOnly:!0})],ce.prototype,"materialDefinitions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[I3SLayerDefinitions/* I3STextureSetDefinition */.Ot],readOnly:!0})],ce.prototype,"textureSetDefinitions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[I3SLayerDefinitions/* I3SGeometryDefinition */.L0],readOnly:!0})],ce.prototype,"geometryDefinitions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],ce.prototype,"serviceUpdateTimeStamp",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],ce.prototype,"attributeStorageInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],ce.prototype,"statisticsInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],ce.prototype,"excludeObjectIds",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],ce.prototype,"definitionExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:h,json:{name:"layerDefinition.polygonFilter",write:{enabled:!0,allowNull:!0},origins:{service:{read:!1,write:!1}}}})],ce.prototype,"filter",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],ce.prototype,"path",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* elevationInfo */.Yj)],ce.prototype,"elevationInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],ce.prototype,"effectiveCapabilities",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],ce.prototype,"effectiveEditingEnabled",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],ce.prototype,"geometryType",null),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* labelsVisible */.kF)],ce.prototype,"labelsVisible",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[LabelClass/* default */.A],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:labelingInfo/* reader */.w},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:labelingInfo/* reader */.w},write:!0}})],ce.prototype,"labelingInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* legendEnabled */.fV)],ce.prototype,"legendEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){if("number"==typeof e&&e>=0&&e<=1)return e;const r=t.layerDefinition?.drawingInfo?.transparency;return void 0!==r?(0,opacityUtils/* transparencyToOpacity */.D)(r):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],ce.prototype,"opacity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],ce.prototype,"priority",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],ce.prototype,"semantic",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:types/* webSceneRendererTypes */.X,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],ce.prototype,"renderer",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1}})],ce.prototype,"cachedDrawingInfo",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","cachedDrawingInfo")],ce.prototype,"readCachedDrawingInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],ce.prototype,"capabilities",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{read:!1}})],ce.prototype,"editingEnabled",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{write:!1,read:!1}})],ce.prototype,"infoFor3D",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{write:!1,read:!1}})],ce.prototype,"relationships",null),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* popupEnabled */.M6)],ce.prototype,"popupEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:PopupTemplate/* default */.A,json:{name:"popupInfo",write:!0}})],ce.prototype,"popupTemplate",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],ce.prototype,"defaultPopupTemplate",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:!1}})],ce.prototype,"objectIdField",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","objectIdField",["objectIdField","fields"])],ce.prototype,"readObjectIdField",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:!1}})],ce.prototype,"globalIdField",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","globalIdField",["globalIdField","fields"])],ce.prototype,"readGlobalIdField",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:String,json:{read:!1}})],ce.prototype,"displayField",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:!1}})],ce.prototype,"profile",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","profile",["store.profile"])],ce.prototype,"readProfile",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],ce.prototype,"normalReferenceFrame",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* screenSizePerspectiveEnabled */.PY)],ce.prototype,"screenSizePerspectiveEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1,origins:{service:{read:!0}}}})],ce.prototype,"serviceItemId",void 0),ce=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.SceneLayer")],ce);const he={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},fe={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},me=ce;


/***/ }),

/***/ 50193:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function t(r){return"portalItem"in r}const i=i=>{let o=class extends i{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):t(this)?this.portalItem?.apiKey:null}set apiKey(r){null!=r?this._override("apiKey",r):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:String})],o.prototype,"apiKey",null),o=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.layers.mixins.APIKeyMixin")],o),o};


/***/ }),

/***/ 45681:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(539);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16123);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const l=l=>{let p=class extends l{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const t=(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_7__/* .parse */ .qg)(this.url);if(null!=t&&t.title)return t.title}return this._get("title")||""}set title(t){this._set("title",t)}set url(t){this._set("url",(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_7__/* .sanitizeUrl */ .Jf)(t,_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getLogger(this)))}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],p.prototype,"title",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String})],p.prototype,"url",null),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.layers.mixins.ArcGISService")],p),p};


/***/ }),

/***/ 46602:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mk: () => (/* binding */ p),
/* harmony export */   Zk: () => (/* binding */ c),
/* harmony export */   w6: () => (/* binding */ F)
/* harmony export */ });
/* unused harmony exports emitUpdateMomentEvent, isLayerWithGDBVersion, onApplyEditsEvent, onUpdateMomentEvent, versionMatches */
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17306);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19251);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40189);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(539);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73446);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98849);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63863);
/* harmony import */ var _versionManagement_support_versionManagementUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(96023);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const o=new _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.EventEmitter;function l(e){return o.on("apply-edits",new WeakRef(e))}function a(e){return o.on("update-moment",new WeakRef(e))}function c(e,t,s=null,r=!1){const d=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .createResolver */ .Tw)();return r=null==t||r,o.emit("apply-edits",{serviceUrl:e,layerId:t,gdbVersion:s,mayReceiveServiceEdits:r,result:d.promise}),d}function h(e,t,s=null,i){o.emit("update-moment",{serviceUrl:e,layerId:t,gdbVersion:s,moment:i})}const u="esri.layers.mixins.EditBusLayer",m=Symbol(u);function p(e){return null!=e&&"object"==typeof e&&m in e}function b(e){return null!=e&&"object"==typeof e&&"gdbVersion"in e}function g(e,t,s){const i=new URL(e).host,r=_versionManagement_support_versionManagementUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .defaultVersionNameLookup */ .Z3.get(i),n=e=>!e||e===r;return n(t)&&n(s)||t===s}const F=t=>{var i;let d=class extends t{constructor(...e){super(...e),this[i]=!0,this._applyEditsHandler=e=>{const{serviceUrl:t,layerId:i,gdbVersion:r,mayReceiveServiceEdits:d,result:o}=e,l=t===this.url,a=null!=i&&null!=this.layerId&&i===this.layerId,c=b(this),h=b(this)&&g(t,r,this.gdbVersion);if(!l||c&&!h||!a&&!d)return;const u=o.then((e=>{if(a&&(e.addedFeatures.length||e.updatedFeatures.length||e.deletedFeatures.length||e.addedAttachments.length||e.updatedAttachments.length||e.deletedAttachments.length))return this.emit("edits",(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(e)),e;const t=e.editedFeatures?.find((({layerId:e})=>e===this.layerId));if(t){const{adds:i,updates:r,deletes:d}=t.editedFeatures,n={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:i?i.map((({attributes:e})=>({objectId:this.objectIdField&&e[this.objectIdField],globalId:this.globalIdField&&e[this.globalIdField]}))):[],deletedFeatures:d?d.map((({attributes:e})=>({objectId:this.objectIdField&&e[this.objectIdField],globalId:this.globalIdField&&e[this.globalIdField]}))):[],updatedFeatures:r?r.map((({current:{attributes:e}})=>({objectId:this.objectIdField&&e[this.objectIdField],globalId:this.globalIdField&&e[this.globalIdField]}))):[],editedFeatures:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(e.editedFeatures),exceededTransferLimit:!1,historicMoment:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(e.historicMoment)};return this.emit("edits",n),n}return{edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:[],deletedFeatures:[],updatedFeatures:[],editedFeatures:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(e.editedFeatures),exceededTransferLimit:!1,historicMoment:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(e.historicMoment)}})).then((e=>("historicMoment"in this&&this.historicMoment!==e.historicMoment&&(0,_versionManagement_support_versionManagementUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .isVersionInEditSession */ .w5)(t,r)&&(this.historicMoment=e.historicMoment),e)));this.emit("apply-edits",{result:u})},this._updateMomentHandler=e=>{const{serviceUrl:t,gdbVersion:s,moment:i}=e,r=t===this.url,d=b(this),n=b(this)&&g(t,s,this.gdbVersion),o=b(this)&&!g(t,this.gdbVersion,null);r&&d&&n&&o&&"historicMoment"in this&&this.historicMoment!==i&&(this.historicMoment=i)},this.when().then((()=>{this.addHandles(l(this._applyEditsHandler)),"historicMoment"in this&&this.addHandles(a(this._updateMomentHandler))}),(()=>{}))}};return i=m,d=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)(u)],d),d};


/***/ }),

/***/ 41506:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: () => (/* binding */ u)
});

// UNUSED EXPORTS: isOperationalLayer

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(20909);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/layerContainerType.js
var layerContainerType = __webpack_require__(73324);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/read.js
var read = __webpack_require__(83312);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/write.js
var write = __webpack_require__(77373);
;// ../node_modules/@arcgis/core/layers/mixins/operationalLayers.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const e={ArcGISAnnotationLayer:!0,ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,CSV:!0,GeoRSS:!0,GeoJSON:!0,GroupLayer:!0,KML:!0,MediaLayer:!0,OGCFeatureLayer:!0,OrientedImageryLayer:!0,SubtypeGroupLayer:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},r={ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},a={ArcGISFeatureLayer:!0},S={"web-scene/operational-layers":{ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,OGCFeatureLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,GeoJSON:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,KML:!0,RasterDataLayer:!0,Voxel:!0,LineOfSightLayer:!0},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-scene/tables":{ArcGISFeatureLayer:!0},"web-map/operational-layers":e,"web-map/basemap":r,"web-map/tables":a,"link-chart/operational-layers":{...e,LinkChartLayer:!0},"link-chart/basemap":r,"link-chart/tables":a,"portal-item/operational-layers":{ArcGISFeatureLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISImageServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0,OrientedImageryLayer:!0,SubtypeGroupLayer:!0}};

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/commonProperties.js + 1 modules
var commonProperties = __webpack_require__(84356);
;// ../node_modules/@arcgis/core/layers/mixins/OperationalLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const u=u=>{let m=class extends u{constructor(){super(...arguments),this.persistenceEnabled=!0,this.title=null}readId(e,r,t){return"Group Layer"===t?.portalItem?.type?void 0:e}writeListMode(e,r,t,o){(o&&"ground"===o.layerContainerType||e&&(0,write/* willPropertyWrite */.R)(this,t,{},o))&&(r[t]=e)}writeOperationalLayerType(e,r,t,o){e&&"tables"!==o?.layerContainerType&&(r.layerType=e)}writeTitle(e,r){r.title=e??"Layer"}read(e,r){r&&(r.layer=this),(0,read/* readLoadable */.t)(this,e,(r=>super.read(e,r)),r)}write(e,o){if(!this.persistenceEnabled)return null;if(o?.origin){const e=`${o.origin}/${o.layerContainerType||"operational-layers"}`,t=S[e];let i=!!t?.[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===e&&(i=!1),"ArcGISDimensionLayer"===this.operationalLayerType&&"web-map/operational-layers"===e&&(i=!1),!i)return o.messages?.push(new Error/* default */.A("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,{layer:this})),null}const i=super.write(e,{...o,layer:this}),s=!!o&&!!o.messages&&!!o.messages.filter((e=>e instanceof Error/* default */.A&&"web-document-write:property-required"===e.name)).length;return (0,urlUtils/* isBlobProtocol */.w8)(i?.url)?(o?.messages?.push(new Error/* default */.A("layer:invalid-url",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`,{layer:this})),null):!this.url&&s?null:i}beforeSave(){}};return (0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],m.prototype,"id",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("id",["id"])],m.prototype,"readId",null),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* listMode */.C1)],m.prototype,"listMode",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("listMode")],m.prototype,"writeListMode",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1},"web-scene":{name:"layerType",read:!1,write:{enabled:!0,ignoreOrigin:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}}}})],m.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("operationalLayerType")],m.prototype,"writeOperationalLayerType",null),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* opacity */.ke)],m.prototype,"opacity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,readOnly:!1})],m.prototype,"persistenceEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],m.prototype,"title",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("title"),(0,writer/* writer */.K)(["web-scene"],"title")],m.prototype,"writeTitle",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{origins:{"web-scene":{name:"visibility",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}},name:"visibility",write:!0}})],m.prototype,"visible",void 0),m=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.mixins.OperationalLayer")],m),m};function m(e){return"operationalLayerType"in e}


/***/ }),

/***/ 34722:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ j)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21121);
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28830);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86394);
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12690);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98849);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(539);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(6267);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40189);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20909);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(75094);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(77542);
/* harmony import */ var _support_layerUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(40454);
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(10282);
/* harmony import */ var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(26099);
/* harmony import */ var _portal_PortalUser_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(68770);
/* harmony import */ var _portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(39532);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const j=j=>{let _=class extends j{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_21__/* .destroyMaybe */ .pR)(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_18__["default"]({id:t.itemId,portal:r?.portal})}writePortalItem(e,t){e?.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem?.id)try{const{load:r}=await __webpack_require__.e(/* import() */ 4085).then(__webpack_require__.bind(__webpack_require__, 14085));return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAborted */ .Te)(t),await r({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData,layerModuleTypeMap:e.layerModuleTypeMap},t)}catch(r){throw (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .isAbortError */ .zf)(r)||_core_Logger_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${r}`),r}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAbortError */ .QP)(e),!0))))}async setUserPrivileges(e,r){if(!_config_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(r);if(this.url)try{const{features:{edit:t,fullEdit:s},content:{updateItem:i}}=await this._fetchUserPrivileges(e,r);this._set("userHasEditingPrivileges",t),this._set("userHasFullEditingPrivileges",s),this._set("userHasUpdateItemPrivileges",i)}catch(s){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAbortError */ .QP)(s)}}async _fetchUserPrivileges(e,t){let s=this.portalItem;if(!e||!s||!s.loaded||s.sourceUrl)return this._fetchFallbackUserPrivileges(t);const i=e===s.id;if(i&&s.portal.user)return (0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_20__/* .getUserPrivileges */ .It)(s);let o,a;if(i)o=s.portal.url;else try{o=await (0,_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_16__/* .getOwningPortalUrl */ .wI)(this.url,t)}catch(m){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAbortError */ .QP)(m)}if(!o||!(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .hasSameCanonicalPortal */ .b8)(o,s.portal.url))return this._fetchFallbackUserPrivileges(t);try{const e=null!=t?t.signal:null;a=await(_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id?.getCredential(`${o}/sharing`,{prompt:!1,signal:e}))}catch(m){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAbortError */ .QP)(m)}const l=!0,n=!1,p=!1;if(!a)return{features:{edit:l,fullEdit:n},content:{updateItem:p}};try{if(i?await s.reload():(s=new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_18__["default"]({id:e,portal:{url:o}}),await s.load(t)),s.portal.user)return (0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_20__/* .getUserPrivileges */ .It)(s)}catch(m){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAbortError */ .QP)(m)}return{features:{edit:l,fullEdit:n},content:{updateItem:p}}}async _fetchFallbackUserPrivileges(e){let t=!0;try{t=await this._fetchUserHasEditingPrivileges(e)}catch(r){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAbortError */ .QP)(r)}return{features:{edit:t,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(e){const t=this.url?_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id?.findCredential(this.url):null;if(!t)return!0;const s=E.credential===t?E.user:await this._fetchEditingUser(e);return E.credential=t,E.user=s,null==s?.privileges||s.privileges.includes("features:user:edit")}async _fetchEditingUser(e){const t=this.portalItem?.portal?.user;if(t)return t;const o=_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id.findServerInfo(this.url??"");if(!o?.owningSystemUrl)return null;const a=`${o.owningSystemUrl}/sharing/rest`,l=_portal_Portal_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A.getDefault();if(l&&l.loaded&&(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .normalize */ .S8)(l.restUrl)===(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .normalize */ .S8)(a))return l.user;const n=`${a}/community/self`,p=null!=e?e.signal:null,u=await (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .result */ .Ke)((0,_request_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(n,{authMode:"no-prompt",query:{f:"json"},signal:p}));return u.ok?_portal_PortalUser_js__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A.fromJSON(u.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t?.portal,s=this.portalItem?.id&&(this.portalItem.portal||_portal_Portal_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A.getDefault());return r&&s&&!(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .hasSamePortal */ .ut)(s.restUrl,r.restUrl)?(t.messages&&t.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .MZ)({type:_portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_18__["default"]})],_.prototype,"portalItem",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_13__/* .reader */ .w)("web-document","portalItem",["itemId"])],_.prototype,"readPortalItem",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_15__/* .writer */ .K)("web-document","portalItem",{itemId:{type:String}})],_.prototype,"writePortalItem",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .MZ)({clonable:!1})],_.prototype,"resourceReferences",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .MZ)({type:Boolean,readOnly:!0})],_.prototype,"userHasEditingPrivileges",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .MZ)({type:Boolean,readOnly:!0})],_.prototype,"userHasFullEditingPrivileges",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .MZ)({type:Boolean,readOnly:!0})],_.prototype,"userHasUpdateItemPrivileges",void 0),_=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__/* .subclass */ .$)("esri.layers.mixins.PortalLayer")],_),_},E={credential:null,user:null};


/***/ }),

/***/ 25389:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const t=t=>{let l=class extends t{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get effectiveScaleRange(){const e={minScale:this.minScale,maxScale:this.maxScale},a=this.parent;a&&"effectiveScaleRange"in a&&r(e,a.effectiveScaleRange);const c=this._get("effectiveScaleRange");return c&&c.minScale===e.minScale&&c.maxScale===e.maxScale?c:e}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:Number,nonNullable:!0,json:{write:!0}})],l.prototype,"minScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:Number,nonNullable:!0,json:{write:!0}})],l.prototype,"maxScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({readOnly:!0})],l.prototype,"effectiveScaleRange",null),l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.layers.mixins.ScaleRangeLayer")],l),l};function r(e,a){return e.minScale=e.minScale>0?a.minScale>0?Math.min(e.minScale,a.minScale):e.minScale:a.minScale,e.maxScale=e.maxScale>0?a.maxScale>0?Math.max(e.maxScale,a.maxScale):e.maxScale:a.maxScale,e}


/***/ }),

/***/ 68821:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Xh: () => (/* binding */ P),
  w6: () => (/* binding */ E)
});

// UNUSED EXPORTS: sceneServiceItemType

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/request.js
var request = __webpack_require__(86394);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/originUtils.js
var originUtils = __webpack_require__(34541);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(84698);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/HeightModelInfo.js
var HeightModelInfo = __webpack_require__(34064);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js
var arcgisLayerUrl = __webpack_require__(16123);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/commonProperties.js + 1 modules
var commonProperties = __webpack_require__(84356);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/I3SIndexInfo.js
var I3SIndexInfo = __webpack_require__(8575);
;// ../node_modules/@arcgis/core/layers/support/schemaValidatorLoader.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let n=null;function t(t){n=t}function u(){return n}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/portal/Portal.js + 2 modules
var Portal = __webpack_require__(10282);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/portal/PortalItem.js + 2 modules
var PortalItem = __webpack_require__(26099);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/webdoc/saveAPIKeyUtils.js
var saveAPIKeyUtils = __webpack_require__(54383);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/webdoc/support/saveUtils.js
var saveUtils = __webpack_require__(22942);
;// ../node_modules/@arcgis/core/layers/mixins/SceneService.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const N="esri.layers.mixins.SceneService",U=Logger/* default */.A.getLogger(N),E=o=>{let E=class extends o{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=(0,promiseUtils/* debounce */.sg)((async(e,t,r)=>{switch(e){case P.SAVE:return this._save(t);case P.SAVE_AS:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return SpatialReference/* default */.A.fromJSON(e.spatialReference);{const t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=o?new SpatialReference/* default */.A(o):null}}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e){const o=null==e.spatialReference?{...e,spatialReference:this._readSpatialReference(t)}:e;return Extent/* default */.A.fromJSON(o,r)}const o=t.store,i=this._readSpatialReference(t);return null==i||null==o?.extent||!Array.isArray(o.extent)||o.extent.some((e=>e<T))?null:new Extent/* default */.A({xmin:o.extent[0],ymin:o.extent[1],xmax:o.extent[2],ymax:o.extent[3],spatialReference:i})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}readVersion(e,t){const r=t.store,o=null!=r.version?r.version.toString():"";return this.parseVersionString(o)}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem?.title;if("item-title"===this.sublayerTitleMode)return (0,arcgisLayerUrl/* titleFromUrlAndName */.yG)(this.url,t.name);let o=t.name;if(!o&&this.url){const e=(0,arcgisLayerUrl/* parse */.qg)(this.url);null!=e&&(o=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(o=r+" - "+o),(0,arcgisLayerUrl/* cleanTitle */.cr)(o)}set url(e){const t=(0,arcgisLayerUrl/* sanitizeUrlWithLayerId */.HZ)({layer:this,url:e,nonStandardUrlAllowed:!1,logger:U});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,o){(0,arcgisLayerUrl/* writeUrlWithLayerId */.LS)(this,e,"layers",t,o)}get parsedUrl(){const e=this._get("url"),t=(0,urlUtils/* urlToObject */.An)(e);return null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=(0,I3SIndexInfo/* fetchIndexInfo */.F)(this.parsedUrl.path,this.rootNode,e,this.apiKey,U,t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===e?.type){const t=e.rootIndex%e.pageSize,o=e.rootPage?.nodes?.[t];if(null==o?.obb?.center||null==o.obb.halfSize)throw new Error/* default */.A("sceneservice:invalid-node-page","Invalid node page.");if(o.obb.center[0]<T||null==this.fullExtent||this.fullExtent.hasZ)return;const i=o.obb.halfSize,s=o.obb.center[2],a=Math.sqrt(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]);this.fullExtent.zmin=s-a,this.fullExtent.zmax=s+a}else if("node"===e?.type){const t=e.rootNode?.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<T)return;const r=t[2],o=t[3],{fullExtent:i}=this;i&&(i.zmin=r-o,i.zmax=r+o)}}async _fetchService(e){if(null==this.url)throw new Error/* default */.A("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const r=await (0,request/* default */.A)(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(r.data&&Array.isArray(r.data.layers)&&r.data.layers.length>0)return r.data.layers[0].id}async _fetchServiceLayer(e){const r=await (0,request/* default */.A)(this.parsedUrl?.path??"",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});r.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let o=!1;if(r.data.layerType&&"Voxel"===r.data.layerType&&(o=!0),o)return this._fetchVoxelServiceLayer();const i=r.data;this.read(i,this._getServiceContext()),this.validateLayer(i)}async _fetchVoxelServiceLayer(e){const r=(await (0,request/* default */.A)(this.parsedUrl?.path+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,this._getServiceContext()),this.validateLayer(r)}_getServiceContext(){return{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const o=t.getTypeKeywords();for(const i of o)e.typeKeywords.push(i);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),r===O.newItem&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}async _saveAs(e,t){const o={...L,...t};let i=PortalItem["default"].from(e);if(!i)throw new Error/* default */.A("sceneservice:portal-item-required","_saveAs() requires a portal item to save to");(0,saveAPIKeyUtils/* validateSaveAPIKey */.X)(i),i.id&&(i=i.clone(),i.id=null);const s=i.portal||Portal/* default */.A.getDefault();await this._ensureLoadBeforeSave(),i.type=K,i.portal=s;const a={origin:"portal-item",url:null,messages:[],portal:s,portalItem:i,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},n={layers:[this.write({},a)]};return await Promise.all(a.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(n,a,o),i.url=this.url,i.title||(i.title=this.title),this._updateTypeKeywords(i,o,O.newItem),await s.signIn(),await(s.user?.addItem({item:i,folder:o?.folder,data:n})),await (0,saveUtils/* saveResources */.rH)(this.resourceReferences,a,null),this.portalItem=i,(0,originUtils/* updateOrigins */.v)(a),a.portalItem=i,i}async _save(e){const t={...L,...e};if(!this.portalItem)throw new Error/* default */.A("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if((0,saveAPIKeyUtils/* validateSaveAPIKey */.X)(this.portalItem),this.portalItem.type!==K)throw new Error/* default */.A("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${K}"`);await this._ensureLoadBeforeSave();const o={origin:"portal-item",url:this.portalItem.itemUrl&&(0,urlUtils/* urlToObject */.An)(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||Portal/* default */.A.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},i={layers:[this.write({},o)]};return await Promise.all(o.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(i,o,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,O.existingItem),await (0,saveUtils/* updateItemWithResources */.SO)(this.portalItem,i,this.resourceReferences,o,null),(0,originUtils/* updateOrigins */.v)(o),this.portalItem}async _validateAgainstJSONSchema(e,t,o){let i=t.messages?.filter((e=>"error"===e.type)).map((e=>new Error/* default */.A(e.name,e.message,e.details)))??[];o?.validationOptions?.ignoreUnsupported&&(i=i.filter((e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name)));const s=o?.validationOptions,a=s?.enabled,n=u();if(a&&n){const t=(await n()).validate(e,o.portalItemLayerType);if(t.length>0){const e=`Layer item did not validate:\n${t.join("\n")}`;if(U.error(`_validateAgainstJSONSchema(): ${e}`),"throw"===s.failPolicy){const e=t.map((e=>new Error/* default */.A("sceneservice:schema-validation",e))).concat(i);throw new Error/* default */.A("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:e})}}}if(i.length>0)throw new Error/* default */.A("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:i})}};return (0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties.id)],E.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SpatialReference/* default */.A})],E.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],E.prototype,"readSpatialReference",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Extent/* default */.A})],E.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],E.prototype,"readFullExtent",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:HeightModelInfo/* default */.A})],E.prototype,"heightModelInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],E.prototype,"minScale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],E.prototype,"maxScale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],E.prototype,"version",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("version",["store.version"])],E.prototype,"readVersion",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:{source:"copyrightText"}}})],E.prototype,"copyright",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:!1}})],E.prototype,"sublayerTitleMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],E.prototype,"title",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("portal-item","title")],E.prototype,"readTitlePortalItem",null),(0,tslib_es6._)([(0,reader/* reader */.w)("service","title",["name"])],E.prototype,"readTitleService",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],E.prototype,"layerId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* url */.OZ)],E.prototype,"url",null),(0,tslib_es6._)([(0,writer/* writer */.K)("url")],E.prototype,"writeUrl",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],E.prototype,"parsedUrl",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],E.prototype,"store",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],E.prototype,"rootNode",void 0),E=(0,tslib_es6._)([(0,subclass/* subclass */.$)(N)],E),E},T=-1e38;var O;!function(e){e[e.existingItem=0]="existingItem",e[e.newItem=1]="newItem"}(O||(O={}));const K="Scene Service",L={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var P;!function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS"}(P||(P={}));


/***/ }),

/***/ 18475:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(){super(...arguments),this.type=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:["selection","cluster","binning"],readOnly:!0,json:{read:!1,write:!0}})],t.prototype,"type",void 0),t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.layers.support.FeatureReduction")],t);


/***/ }),

/***/ 99989:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/* harmony import */ var _FeatureReduction_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18475);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var t;let c=t=class extends _FeatureReduction_js__WEBPACK_IMPORTED_MODULE_6__/* .FeatureReduction */ .c{constructor(r){super(r),this.type="selection"}clone(){return new t}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:["selection"]})],c.prototype,"type",void 0),c=t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.layers.support.FeatureReductionSelection")],c);const p=c;


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

/***/ 79005:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Z)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(539);
/* harmony import */ var _core_MapUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82256);
/* harmony import */ var _core_sql_UnknownTimeZone_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90709);
/* harmony import */ var _fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42453);
/* harmony import */ var _time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12129);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34495);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function y(e){return"timeZone"in e}function _(e){return"timeZone"in e}function g(e){return"dateFieldsTimeZone"in e}const T=new Map;class Z{static fromJSON(e){return new Z(e.fields,e.timeZoneByFieldName)}static fromLayer(e){return new Z(e.fields??[],S(e))}static fromLayerJSON(e){return new Z(e.fields??[],S(e))}constructor(e=[],i){this._fieldsMap=new Map,this._normalizedFieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this._requiredFields=null,this.dateFields=[],this.numericFields=[],this.fields=e||[],this._timeZoneByFieldName=i?new Map(i):null;const t=[];for(const s of this.fields){const e=s?.name,i=M(e);if(e&&i){const n=w(e);this._fieldsMap.set(e,s),this._fieldsMap.set(n,s),this._normalizedFieldsMap.set(i,s),t.push(`${n}:${s.type}:${this._timeZoneByFieldName?.get(e)}`),(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isDateField */ .vE)(s)?(this.dateFields.push(s),this._dateFieldsSet.add(s)):(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isNumericField */ .WA)(s)&&(this._numericFieldsSet.add(s),this.numericFields.push(s)),(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isObjectIDField */ .te)(s)||(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isGlobalIDField */ .Xz)(s)||(s.editable=null==s.editable||!!s.editable,s.nullable=null==s.nullable||!!s.nullable)}}t.sort(),this.uid=t.join()}get requiredFields(){if(!this._requiredFields){this._requiredFields=[];for(const e of this.fields)(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isObjectIDField */ .te)(e)||(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isGlobalIDField */ .Xz)(e)||e.nullable||void 0!==(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .getFieldDefaultValue */ .lD)(e)||this._requiredFields.push(e)}return this._requiredFields}equals(e){return this.uid===e?.uid}has(e){return null!=this.get(e)}get(e){if(!e)return;let i=this._fieldsMap.get(e);return i||(i=this._fieldsMap.get(w(e))??this._normalizedFieldsMap.get(M(e)),i&&this._fieldsMap.set(e,i),i)}getTimeZone(i){const s=this.get(i&&"string"!=typeof i?i.name:i);return s?this._timeZoneByFieldName?this._timeZoneByFieldName.get(s.name):"date"===s.type||"esriFieldTypeDate"===s.type?(_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.getLogger("esri.layers.support.FieldsIndex").error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("getTimeZone:no-timezone-information",`no time zone information for field '${s.name}'`)),_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .utc */ .n$):N.has(s.type)?_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .unknown */ .L5:null:null}getLuxonTimeZone(e){const i=this.getTimeZone(e);return i?i===_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .unknown */ .L5?_core_sql_UnknownTimeZone_js__WEBPACK_IMPORTED_MODULE_3__/* .UnknownTimeZone */ .GB.instance:i===_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .utc */ .n$?luxon__WEBPACK_IMPORTED_MODULE_6__/* .FixedOffsetZone */ .mQ.utcInstance:(0,_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .getOrCreateMapValue */ .tE)(T,i,(()=>luxon__WEBPACK_IMPORTED_MODULE_6__/* .IANAZone */ .oh.create(i))):null}isDateField(e){return this._dateFieldsSet.has(this.get(e))}isTimeOnlyField(e){return (0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isTimeOnlyField */ .OH)(this.get(e))}isNumericField(e){return this._numericFieldsSet.has(this.get(e))}normalizeFieldName(e){return this.get(e)?.name??void 0}toJSON(){return{fields:this.fields.map((e=>(0,_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .isSerializable */ .Wj)(e)?e.toJSON():e)),timeZoneByFieldName:this._timeZoneByFieldName?Array.from(this._timeZoneByFieldName.entries()):null}}}function w(e){return e.trim().toLowerCase()}function M(e){return (0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .normalizeFieldName */ .rS)(e)?.toLowerCase()??""}const N=new Set(["time-only","date-only","timestamp-offset","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"]);function S(e){const i=new Map;if(!e.fields)return i;const t=!0===e.datesInUnknownTimezone,{timeInfo:s,editFieldsInfo:n}=e,r=(s?"startField"in s?s.startField:s.startTimeField:"")??"",l=(s?"endField"in s?s.endField:s.endTimeField:"")??"",o=g(e)?e.dateFieldsTimeZone??null:e.dateFieldsTimeReference?(0,_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .fromTimeReference */ .ZS)(e.dateFieldsTimeReference):null,d=n?y(n)?n.timeZone??o:n.dateFieldsTimeReference?(0,_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .fromTimeReference */ .ZS)(n.dateFieldsTimeReference):o??_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .utc */ .n$:null,a=s?_(s)?s.timeZone??o:s.timeReference?(0,_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .fromTimeReference */ .ZS)(s.timeReference):o:null,m=new Map([[w(n?.creationDateField??""),d],[w(n?.editDateField??""),d],[w(r),a],[w(l),a]]);for(const{name:u,type:f}of e.fields)if(N.has(f))i.set(u,_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .unknown */ .L5);else if("date"!==f&&"esriFieldTypeDate"!==f)i.set(u,null);else if(t)i.set(u,_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .unknown */ .L5);else{const e=m.get(w(u??""))??o;i.set(u,e)}return i}


/***/ }),

/***/ 8575:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86394);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98849);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function r(r,n,t,s,a,i){let l=null;if(null!=t){const o=`${r}/nodepages/`,n=o+Math.floor(t.rootIndex/t.nodesPerPage);try{return{type:"page",rootPage:(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(n,{query:{f:"json",token:s},responseType:"json",signal:i})).data,rootIndex:t.rootIndex,pageSize:t.nodesPerPage,lodMetric:t.lodSelectionMetricType,urlPrefix:o}}catch(u){null!=a&&a.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",n,u),l=u}}if(!n)return null;const d=n?.split("/").pop(),p=`${r}/nodes/`,c=p+d;try{return{type:"node",rootNode:(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(c,{query:{f:"json",token:s},responseType:"json",signal:i})).data,urlPrefix:p}}catch(u){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("sceneservice:root-node-missing","Root node missing.",{pageError:l,nodeError:u,url:c})}}


/***/ }),

/***/ 84546:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L0: () => (/* binding */ m),
/* harmony export */   Ot: () => (/* binding */ u),
/* harmony export */   W4: () => (/* binding */ s),
/* harmony export */   uV: () => (/* binding */ l)
/* harmony export */ });
/* unused harmony exports I3SGeometryAttribute, I3SGeometryBuffer, I3SGeometryCompressedAttributes, I3SMaterialPBRMetallicRoughness, I3SMaterialTexture, I3STextureFormat */
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let s=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number})],s.prototype,"nodesPerPage",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number})],s.prototype,"rootIndex",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String})],s.prototype,"lodSelectionMetricType",void 0),s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.layer.support.I3SNodePageDefinition")],s);let i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(){super(...arguments),this.factor=1}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],i.prototype,"id",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number})],i.prototype,"factor",void 0),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.layer.support.I3SMaterialTexture")],i);let a=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:[Number]})],a.prototype,"baseColorFactor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:i})],a.prototype,"baseColorTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:i})],a.prototype,"metallicRoughnessTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number})],a.prototype,"metallicFactor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number})],a.prototype,"roughnessFactor",void 0),a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],a);let l=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__/* .enumeration */ .e)({opaque:"opaque",mask:"mask",blend:"blend"})],l.prototype,"alphaMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number})],l.prototype,"alphaCutoff",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Boolean})],l.prototype,"doubleSided",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__/* .enumeration */ .e)({none:"none",back:"back",front:"front"})],l.prototype,"cullFace",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:i})],l.prototype,"normalTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:i})],l.prototype,"occlusionTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:i})],l.prototype,"emissiveTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:[Number]})],l.prototype,"emissiveFactor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:a})],l.prototype,"pbrMetallicRoughness",void 0),l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.layer.support.I3SMaterialDefinition")],l);let n=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:`${t.index}`}}})],n.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__/* .enumeration */ .e)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],n.prototype,"format",void 0),n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.layer.support.I3STextureFormat")],n);let u=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(){super(...arguments),this.atlas=!1}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:[n]})],u.prototype,"formats",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Boolean})],u.prototype,"atlas",void 0),u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.layer.support.I3STextureSetDefinition")],u);let y=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__/* .enumeration */ .e)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],y.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number})],y.prototype,"component",void 0),y=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.layer.support.I3SGeometryAttribute")],y);let d=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__/* .enumeration */ .e)({draco:"draco"})],d.prototype,"encoding",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:[String]})],d.prototype,"attributes",void 0),d=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.layer.support.I3SGeometryCompressedAttributes")],d);let c=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(){super(...arguments),this.offset=0}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number})],c.prototype,"offset",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:y})],c.prototype,"position",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:y})],c.prototype,"normal",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:y})],c.prototype,"uv0",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:y})],c.prototype,"color",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:y})],c.prototype,"uvRegion",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:y})],c.prototype,"featureId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:y})],c.prototype,"faceRange",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:d})],c.prototype,"compressedAttributes",void 0),c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.layer.support.I3SGeometryBuffer")],c);let m=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__/* .enumeration */ .e)({triangle:"triangle"})],m.prototype,"topology",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],m.prototype,"geometryBuffers",void 0),m=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.layer.support.I3SGeometryDefinition")],m);


/***/ }),

/***/ 86155:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ C)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols.js + 1 modules
var symbols = __webpack_require__(30822);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/screenUtils.js
var screenUtils = __webpack_require__(89882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/labelUtils.js
var labelUtils = __webpack_require__(74639);
;// ../node_modules/@arcgis/core/layers/support/LabelExpressionInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var l;let n=l=class extends JSONSupport/* JSONSupport */.oY{constructor(){super(...arguments),this.expression=null,this.title=null,this.value=null}readExpression(r,e){return e.value?(0,labelUtils/* convertTemplatedStringToArcade */.mX)(e.value):r}writeExpression(r,e,s){null!=this.value&&(r=(0,labelUtils/* convertTemplatedStringToArcade */.mX)(this.value)),null!=r&&(e[s]=r)}clone(){return new l({expression:this.expression,title:this.title,value:this.value})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{writerEnsuresNonNull:!0}}})],n.prototype,"expression",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("expression",["expression","value"])],n.prototype,"readExpression",null),(0,tslib_es6._)([(0,writer/* writer */.K)("expression")],n.prototype,"writeExpression",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0,origins:{"web-scene":{write:!1}}}})],n.prototype,"title",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1,write:!1}})],n.prototype,"value",void 0),n=l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.LabelExpressionInfo")],n);const a=n;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/layerUtils.js
var layerUtils = __webpack_require__(40454);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/defaults.js
var defaults = __webpack_require__(26207);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/jsonUtils.js + 1 modules
var jsonUtils = __webpack_require__(38463);
;// ../node_modules/@arcgis/core/layers/support/LabelClass.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var h;const P=new jsonMap/* JSONMap */.J({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0});function x(e,r,t){return{enabled:!(0,layerUtils/* isSceneServiceLayer */.TU)(t?.layer)}}function L(e){return!e||"service"!==e.origin&&!("map-image"===e.layer?.type)}function g(e){return"map-image"===e?.type}function E(e){return!!g(e)&&!!e.capabilities?.exportMap?.supportsArcadeExpressionForLabeling}function j(e){return L(e)||E(e?.layer)}let A=h=class extends JSONSupport/* JSONSupport */.oY{static evaluateWhere(e,r){const t=(e,r,t)=>{switch(r){case"=":return e==t;case"<>":return e!=t;case">":return e>t;case">=":return e>=t;case"<":return e<t;case"<=":return e<=t}return!1};try{if(null==e)return!0;const o=e.split(" ");if(3===o.length)return t(r[o[0]],o[1],o[2]);if(7===o.length){const e=t(r[o[0]],o[1],o[2]),i=o[3],n=t(r[o[4]],o[5],o[6]);switch(i){case"AND":return e&&n;case"OR":return e||n}}return!1}catch(o){console.log("Error.: can't parse = "+e)}}constructor(e){super(e),this.type="label",this.name=null,this.allowOverrun=!1,this.deconflictionStrategy="static",this.labelExpression=null,this.labelExpressionInfo=null,this.labelPlacement=null,this.labelPosition="curved",this.maxScale=0,this.minScale=0,this.repeatLabel=!0,this.repeatLabelDistance=null,this.symbol=defaults/* defaultTextSymbol2D */.Hk,this.useCodedValues=void 0,this.where=null}readLabelExpression(e,r){const t=r.labelExpressionInfo;if(!t||!t.value&&!t.expression)return e}writeLabelExpression(e,r,t){if(this.labelExpressionInfo)if(null!=this.labelExpressionInfo.value)e=(0,labelUtils/* templateStringToSql */.D3)(this.labelExpressionInfo.value);else if(null!=this.labelExpressionInfo.expression){const r=(0,labelUtils/* getSingleFieldArcadeExpression */.tH)(this.labelExpressionInfo.expression);r&&(e="["+r+"]")}null!=e&&(r[t]=e)}writeLabelExpressionInfo(e,r,t,o){if(null==e&&null!=this.labelExpression&&L(o))e=new a({expression:this.getLabelExpressionArcade()});else if(!e)return;const i=e.toJSON(o);i.expression&&(r[t]=i)}writeMaxScale(e,r){(e||this.minScale)&&(r.maxScale=e)}writeMinScale(e,r){(e||this.maxScale)&&(r.minScale=e)}getLabelExpression(){return (0,labelUtils/* getLabelExpression */.XJ)(this)}getLabelExpressionArcade(){return (0,labelUtils/* getLabelExpressionArcade */.BI)(this)}getLabelExpressionSingleField(){return (0,labelUtils/* getLabelExpressionSingleField */.rU)(this)}hash(){return JSON.stringify(this)}clone(){return new h({allowOverrun:this.allowOverrun,deconflictionStrategy:this.deconflictionStrategy,labelExpression:this.labelExpression,labelExpressionInfo:(0,lang/* clone */.o8)(this.labelExpressionInfo),labelPosition:this.labelPosition,labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,repeatLabel:this.repeatLabel,repeatLabelDistance:this.repeatLabelDistance,symbol:(0,lang/* clone */.o8)(this.symbol),where:this.where,useCodedValues:this.useCodedValues})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],A.prototype,"name",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1},"portal-item":{default:!1,write:{overridePolicy:x}}}}})],A.prototype,"allowOverrun",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0,default:"static",origins:{"web-scene":{write:!1},"portal-item":{default:"static",write:{overridePolicy:x}}}}})],A.prototype,"deconflictionStrategy",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{overridePolicy(e,r,t){return this.labelExpressionInfo&&"service"===t?.origin&&E(t.layer)?{enabled:!1}:{allowNull:!0}}}}})],A.prototype,"labelExpression",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("labelExpression")],A.prototype,"readLabelExpression",null),(0,tslib_es6._)([(0,writer/* writer */.K)("labelExpression")],A.prototype,"writeLabelExpression",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:a,json:{write:{overridePolicy:(e,r,t)=>j(t)?{allowNull:!0}:{enabled:!1}}}})],A.prototype,"labelExpressionInfo",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("labelExpressionInfo")],A.prototype,"writeLabelExpressionInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:P.apiValues,json:{type:P.jsonValues,read:P.read,write:P.write}})],A.prototype,"labelPlacement",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["curved","parallel"],json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],A.prototype,"labelPosition",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number})],A.prototype,"maxScale",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("maxScale")],A.prototype,"writeMaxScale",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number})],A.prototype,"minScale",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("minScale")],A.prototype,"writeMinScale",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:x}}}}})],A.prototype,"repeatLabel",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,cast:screenUtils/* toPt */.cr,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:x}}}}})],A.prototype,"repeatLabelDistance",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:symbols/* symbolTypesLabel */.em,json:{origins:{"web-scene":{types:symbols/* symbolTypesLabel3D */.Rv,write:jsonUtils/* writeLabelSymbol */.oO,default:null}},write:jsonUtils/* writeLabelSymbol */.oO,default:null}})],A.prototype,"symbol",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],A.prototype,"useCodedValues",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],A.prototype,"where",void 0),A=h=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.LabelClass")],A);const C=A;


/***/ }),

/***/ 8585:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48982);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var l;let i=l=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY{constructor(o){super(o),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A}clone(){return new l({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{write:!0}})],i.prototype,"floorField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{read:!1,write:!1}})],i.prototype,"viewAllMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{read:!1,write:!1}})],i.prototype,"viewAllLevelIds",void 0),i=l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.layers.support.LayerFloorInfo")],i);const p=i;


/***/ }),

/***/ 98154:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28830);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86394);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98849);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40189);
/* harmony import */ var _arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16123);
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10282);
/* harmony import */ var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26099);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function l(r,e){const t=(0,_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_4__/* .parse */ .qg)(r);if(!t)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A("invalid-url","Invalid scene service url");const a={...e,sceneServerUrl:t.url.path,layerId:t.sublayer??void 0};if(a.sceneLayerItem??=await s(a),null==a.sceneLayerItem)return f(a.sceneServerUrl.replace("/SceneServer","/FeatureServer"),a);const i=await y(a);if(!i?.url)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A("related-service-not-found","Could not find feature service through portal item relationship");const l=await f(i.url,a);return l.portalItem=i,l}async function s(r){const e=(await c(r)).serviceItemId;if(!e)return null;const n=new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_6__["default"]({id:e,apiKey:r.apiKey}),o=await u(r);null!=o&&(n.portal=new _portal_Portal_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A({url:o}));try{return n.load({signal:r.signal})}catch(l){return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .throwIfAbortError */ .QP)(l),null}}async function c(r){if(r.rootDocument)return r.rootDocument;const n={query:{f:"json",token:r.apiKey},responseType:"json",signal:r.signal};try{const t=await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(r.sceneServerUrl,n);r.rootDocument=t.data}catch{r.rootDocument={}}return r.rootDocument}async function u(n){const o=_kernel_js__WEBPACK_IMPORTED_MODULE_0__.id?.findServerInfo(n.sceneServerUrl);if(o?.owningSystemUrl)return o.owningSystemUrl;const a=n.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const r=(await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(a,{query:{f:"json"},responseType:"json",signal:n.signal})).data.owningSystemUrl;if(r)return r}catch(i){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .throwIfAbortError */ .QP)(i)}return null}async function f(r,t){const a=(0,_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_4__/* .parse */ .qg)(r);if(!a)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A("invalid-feature-service-url","Invalid feature service url");const i=a.url.path,l=t.layerId;if(null==l)return{serverUrl:i};const s=c(t),u=r=>{const n={query:{f:"json"},responseType:"json",authMode:r,signal:t.signal};return (0,_request_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(i,n)},f=u("anonymous").catch((()=>u("no-prompt"))),[y,m]=await Promise.all([f,s]),p=m?.layers,d=y.data&&y.data.layers;if(!Array.isArray(d))throw new Error("expected layers array");if(Array.isArray(p))for(let e=0;e<Math.min(p.length,d.length);e++){if(p[e].id===l)return{serverUrl:i,layerId:d[e].id}}else if(null!=l&&l<d.length)return{serverUrl:i,layerId:d[l].id};throw new Error("could not find matching associated sublayer")}async function y({sceneLayerItem:r,signal:e}){if(!r)return null;try{const n=(await r.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:e})).find((r=>"Feature Service"===r.type))||null;if(!n)return null;const t=new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_6__["default"]({portal:n.portal,id:n.id});return await t.load(),t}catch(n){return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .throwIfAbortError */ .QP)(n),null}}


/***/ }),

/***/ 97934:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ s)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const s={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsAsyncApplyEdits:!1,zDefault:void 0},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}};


/***/ }),

/***/ 84356:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ui: () => (/* binding */ j),
  Yj: () => (/* binding */ f),
  id: () => (/* binding */ I),
  kF: () => (/* binding */ m),
  fV: () => (/* binding */ c),
  C1: () => (/* binding */ C),
  hG: () => (/* binding */ S),
  hn: () => (/* binding */ T),
  ke: () => (/* binding */ g),
  Ih: () => (/* binding */ b),
  M6: () => (/* binding */ y),
  Qo: () => (/* binding */ w),
  Fm: () => (/* binding */ v),
  PY: () => (/* binding */ p),
  OZ: () => (/* binding */ d)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/TimeExtent.js
var TimeExtent = __webpack_require__(19790);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/layerContainerType.js
var layerContainerType = __webpack_require__(73324);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(84698);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/persistableUrlUtils.js
var persistableUrlUtils = __webpack_require__(63680);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/timeUtils.js
var timeUtils = __webpack_require__(46437);
;// ../node_modules/@arcgis/core/support/timeUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function i(t){return void 0!==t.timeInfo}async function r(n,r){if(0===n.length)return t.allTime;const l=n.filter(i);await Promise.all(l.map((t=>t.load({signal:r}))));const s=[],o=[];for(const t of l)"feature"!==t?.type&&"map-image"!==t?.type||!t.timeInfo?.hasLiveData?o.push(t):s.push(t);const m=t=>null==t||t.isAllTime,u=o.map((t=>t.timeInfo?.fullTimeExtent));if(u.some(m))return t.allTime;const a=s.map((async t=>{const{timeExtent:e}=await t.fetchRecomputedExtents({signal:r});return e||t.timeInfo?.fullTimeExtent})),f=(await Promise.allSettled(a)).map((t=>"fulfilled"===t.status?t.value:null));if(f.some(m))return t.allTime;return[...f,...u].filter(e).reduce(((t,e)=>t.union(e)))}function timeUtils_l(e){if(!e)return e;const{start:i,end:r}=e;return new TimeExtent/* default */.A({start:null!=i?(0,timeUtils/* offsetDate */.S1)(i,-i.getTimezoneOffset(),"minutes"):i,end:null!=r?(0,timeUtils/* offsetDate */.S1)(r,-r.getTimezoneOffset(),"minutes"):r})}function timeUtils_s(e){if(!e)return e;const{start:i,end:r}=e;return new TimeExtent/* default */.A({start:null!=i?(0,timeUtils/* offsetDate */.S1)(i,i.getTimezoneOffset(),"minutes"):i,end:null!=r?(0,timeUtils/* offsetDate */.S1)(r,r.getTimezoneOffset(),"minutes"):r})}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/ElevationInfo.js + 1 modules
var ElevationInfo = __webpack_require__(60973);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/webdoc/support/opacityUtils.js
var opacityUtils = __webpack_require__(48904);
;// ../node_modules/@arcgis/core/layers/support/commonProperties.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const p={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}},y={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,r)=>!r.disablePopup},write:{enabled:!0,writer(e,r,n){r[n]=!e}}}},m={type:Boolean,value:!0,nonNullable:!0,json:{name:"showLabels",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}},d={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:persistableUrlUtils.w}}},c={type:Boolean,value:!0,nonNullable:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}},f={value:null,type:ElevationInfo/* default */.A,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}};function w(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const u={write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K},read:!0},g={type:Number,json:{origins:{"web-document":u,"portal-item":{write:!0}}}},b={...g,json:{...g.json,origins:{"web-document":{...u,write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,r,n)=>n&&"service"!==n.origin||!r.drawingInfo||void 0===r.drawingInfo.transparency?r.layerDefinition?.drawingInfo&&void 0!==r.layerDefinition.drawingInfo.transparency?(0,opacityUtils/* transparencyToOpacity */.D)(r.layerDefinition.drawingInfo.transparency):void 0:(0,opacityUtils/* transparencyToOpacity */.D)(r.drawingInfo.transparency)}}},j={type:TimeExtent/* default */.A,readOnly:!0,get(){if(!this.layer?.timeInfo)return null;const{datesInUnknownTimezone:e,timeOffset:r,useViewTime:n}=this.layer,i=this.view?.timeExtent;let t=this.layer.timeExtent;e&&(t=timeUtils_s(t));let s=n?i&&t?i.intersection(t):i||t:t;if(!s||s.isEmpty||s.isAllTime)return s;r&&(s=s.offset(-r.value,r.unit)),e&&(s=timeUtils_l(s));const l=this._get("timeExtent");return s.equals(l)?l:s}},v={type:Extent/* default */.A,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(e,r)=>{const t=Extent/* default */.A.fromJSON(e);return null!=r.spatialReference&&"object"==typeof r.spatialReference&&(t.spatialReference=SpatialReference/* default */.A.fromJSON(r.spatialReference)),t}}}},read:!1}},I={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},T={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.minScale",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}},name:"layerDefinition.minScale",write:!0}},S={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.maxScale",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}},name:"layerDefinition.maxScale",write:!0}},C={json:{write:{ignoreOrigin:!0,layerContainerTypes:layerContainerType/* excludeTables */.K},origins:{"web-map":{read:!1,write:!1}}}};


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

/***/ 97461:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Xl: () => (/* binding */ m),
  ct: () => (/* binding */ b),
  C$: () => (/* binding */ T),
  PD: () => (/* binding */ D),
  VZ: () => (/* binding */ x),
  mm: () => (/* binding */ j),
  VA: () => (/* binding */ Q),
  WP: () => (/* binding */ I),
  iX: () => (/* binding */ f),
  GA: () => (/* binding */ V),
  jp: () => (/* binding */ S),
  tG: () => (/* binding */ U),
  lV: () => (/* binding */ q),
  B5: () => (/* binding */ O),
  Ye: () => (/* binding */ A),
  sg: () => (/* binding */ F),
  hM: () => (/* binding */ P),
  S2: () => (/* binding */ E),
  jD: () => (/* binding */ R),
  Zm: () => (/* binding */ M),
  $4: () => (/* binding */ C),
  bt: () => (/* binding */ w),
  rn: () => (/* binding */ g)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/kernel.js
var kernel = __webpack_require__(28830);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols.js + 1 modules
var symbols = __webpack_require__(30822);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/asyncUtils.js
var asyncUtils = __webpack_require__(12690);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/sql.js
var sql = __webpack_require__(76859);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/reader.js
var reader = __webpack_require__(61985);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/Query.js + 1 modules
var Query = __webpack_require__(24587);
;// ../node_modules/@arcgis/core/layers/support/featureQueryAll.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function r(e,r,a){r=r.clone(),e.capabilities.query.supportsMaxRecordCountFactor&&(r.maxRecordCountFactor=u(e));const n=t(e),o=e.capabilities.query.supportsPagination;r.start=0,r.num=n;let i=null;for(;;){const t=await e.source.queryFeaturesJSON(r,a);if(null==i?i=t:i.features=i.features.concat(t.features),i.exceededTransferLimit=t.exceededTransferLimit,!o||!t.exceededTransferLimit)break;r.start+=n}return i}function t(e){return u(e)*a(e)}function a(e){return e.capabilities.query.maxRecordCount||2e3}function u(r){return r.capabilities.query.supportsMaxRecordCountFactor?Query/* default */.A.MAX_MAX_RECORD_COUNT_FACTOR:1}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/layerUtils.js
var layerUtils = __webpack_require__(40454);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/SimpleRenderer.js
var SimpleRenderer = __webpack_require__(47347);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/UniqueValueRenderer.js + 3 modules
var UniqueValueRenderer = __webpack_require__(2692);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/AttachmentQuery.js
var AttachmentQuery = __webpack_require__(27973);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/RelationshipQuery.js
var RelationshipQuery = __webpack_require__(97724);
;// ../node_modules/@arcgis/core/layers/support/featureLayerUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const f=new jsonMap/* JSONMap */.J({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"});async function m(t,e,r,o){const a=await G(t);if(await h(t,e,o),!a.addAttachment)throw new Error/* default */.A(o,"Layer source does not support addAttachment capability");return a.addAttachment(e,r)}function h(t,e,r){const{attributes:o}=e,{objectIdField:a}=t;return t.capabilities?.data?.supportsAttachment?e?o?a&&o[a]?Promise.resolve():Promise.reject(new Error/* default */.A(r,`feature is missing the identifying attribute ${a}`)):Promise.reject(new Error/* default */.A(r,"'attributes' are required on a feature to query attachments")):Promise.reject(new Error/* default */.A(r,"A feature is required to add/delete/update attachments")):Promise.reject(new Error/* default */.A(r,"this layer doesn't support attachments"))}async function w(t,e,r,o,a){const s=await G(t);if(await h(t,e,a),!s.updateAttachment)throw new Error/* default */.A(a,"Layer source does not support updateAttachment capability");return s.updateAttachment(e,r,o)}async function b(t,e,r){const{applyEdits:n}=await __webpack_require__.e(/* import() */ 5903).then(__webpack_require__.bind(__webpack_require__, 75903)),o=await t.load(),{source:a,globalIdField:s}=o;let i=r;return("feature"===o.type?o.infoFor3D:null)&&null!=e.deleteFeatures&&null!=s&&(i={...i,globalIdToObjectId:await V(t,e.deleteFeatures,s)}),n(o,a,e,r)}async function g(t,e,r){const{uploadAssets:n}=await __webpack_require__.e(/* import() */ 5903).then(__webpack_require__.bind(__webpack_require__, 75903)),o=await t.load();return n(o,o.source,e,r)}async function j(t,e,r,o){const a=await G(t);if(await h(t,e,o),!a.deleteAttachments)throw new Error/* default */.A(o,"Layer source does not support deleteAttachments capability");return a.deleteAttachments(e,r)}async function I(t,e,r){const o=(await t.load({signal:e?.signal})).source;if(!o.fetchRecomputedExtents)throw new Error/* default */.A(r,"Layer source does not support fetchUpdates capability");return o.fetchRecomputedExtents(e)}async function q(t,e,r,o){e=AttachmentQuery/* default */.A.from(e),await t.load();const a=t.source,s=t.capabilities;if(!s?.data?.supportsAttachment)throw new Error/* default */.A(o,"this layer doesn't support attachments");const{attachmentTypes:i,objectIds:u,globalIds:c,num:l,size:d,start:y,where:f}=e;if(!s?.operations?.supportsQueryAttachments){if(i?.length>0||c?.length>0||d?.length>0||l||y||f)throw new Error/* default */.A(o,"when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",e)}if(!(u?.length||c?.length||f))throw new Error/* default */.A(o,"'objectIds', 'globalIds', or 'where' are required to perform attachment query",e);if(!a.queryAttachments)throw new Error/* default */.A(o,"Layer source does not support queryAttachments capability",e);return a.queryAttachments(e)}async function F(t,e,r,o){const a=await G(t);if(!a.queryObjectIds)throw new Error/* default */.A(o,"Layer source does not support queryObjectIds capability");return a.queryObjectIds(Query/* default */.A.from(e)??t.createQuery(),r)}async function A(t,e,r,o){const a=await G(t);if(!a.queryFeatureCount)throw new Error/* default */.A(o,"Layer source does not support queryFeatureCount capability");return a.queryFeatureCount(Query/* default */.A.from(e)??t.createQuery(),r)}async function O(t,e,r,o){const a=await G(t);if(!a.queryExtent)throw new Error/* default */.A(o,"Layer source does not support queryExtent capability");return a.queryExtent(Query/* default */.A.from(e)??t.createQuery(),r)}async function P(t,e,r,o){const a=await G(t);if(!a.queryRelatedFeatures)throw new Error/* default */.A(o,"Layer source does not support queryRelatedFeatures capability");return a.queryRelatedFeatures(RelationshipQuery["default"].from(e),r)}async function E(t,e,r,o){const a=await G(t);if(!a.queryRelatedFeaturesCount)throw new Error/* default */.A(o,"Layer source does not support queryRelatedFeaturesCount capability");return a.queryRelatedFeaturesCount(RelationshipQuery["default"].from(e),r)}async function S(t){const e=t.source;if(e?.refresh)try{const{dataChanged:r,updates:n}=await e.refresh();if(null!=n&&(t.sourceJSON={...t.sourceJSON,...n},t.read(n,{origin:"service",url:t.parsedUrl})),r)return!0}catch{}if(t.definitionExpression)try{return(await (0,sql/* parseWhereClause */.G)(t.definitionExpression,t.fieldsIndex)).hasDateFunctions}catch{}return!1}function x(t){const e=new Query/* default */.A,r=t.capabilities?.data,n=t.capabilities?.query;e.historicMoment=t.historicMoment,e.gdbVersion=t.gdbVersion,e.returnGeometry=!0,n&&(e.compactGeometryEnabled=n.supportsCompactGeometry,e.defaultSpatialReferenceEnabled=n.supportsDefaultSpatialReference),r&&(r.supportsZ&&null!=t.returnZ&&(e.returnZ=t.returnZ),r.supportsM&&null!=t.returnM&&(e.returnM=t.returnM)),e.outFields=["*"];const{timeOffset:o,timeExtent:a}=t;return e.timeExtent=null!=o&&null!=a?a.offset(-o.value,o.unit):a||null,e.multipatchOption="multipatch"===t.geometryType?"xyFootprint":null,e}function R(t){const{globalIdField:e,fields:r}=t;if(e)return e;if(r)for(const n of r)if("esriFieldTypeGlobalID"===n.type)return n.name}function M(t){const{objectIdField:e,fields:r}=t;if(e)return e;if(r)for(const n of r)if("esriFieldTypeOID"===n.type)return n.name}function C(t){return t.currentVersion?t.currentVersion:t.hasOwnProperty("capabilities")||t.hasOwnProperty("drawingInfo")||t.hasOwnProperty("hasAttachments")||t.hasOwnProperty("htmlPopupType")||t.hasOwnProperty("relationships")||t.hasOwnProperty("timeInfo")||t.hasOwnProperty("typeIdField")||t.hasOwnProperty("types")?10:9.3}async function G(t){return(await t.load()).source}async function L(e,r){if(!kernel.id)return;if(kernel.id.findCredential(e))return;let n;try{const o=await (0,layerUtils/* getOwningPortalUrl */.wI)(e,r);o&&(n=await kernel.id.checkSignInStatus(`${o}/sharing`))}catch(o){}if(n)try{const n=null!=r?r.signal:null;await kernel.id.getCredential(e,{signal:n})}catch(o){}}async function Q(t,e,r){const n=t.parsedUrl?.path;n&&t.authenticationTriggerEvent===e&&await L(n,r)}function T(t){return!t.sourceJSON?.isMultiServicesView&&(t.userHasUpdateItemPrivileges||t.editingEnabled)}const v=(0,reader/* createTypeReader */.C)({types:symbols/* symbolTypesRenderer */.xK});function D(t,e){if(t.defaultSymbol)return t.types?.length?new UniqueValueRenderer/* default */.A({defaultSymbol:v(t.defaultSymbol,t,e),field:t.typeIdField,uniqueValueInfos:t.types.map((t=>({id:t.id,symbol:v(t.symbol,t,e)})))}):new SimpleRenderer/* default */.A({symbol:v(t.defaultSymbol,t,e)})}function U(t){let e=t.sourceJSON?.cacheMaxAge;if(!e)return!1;const r=t.editingInfo?.lastEditDate?.getTime();return null==r||(e*=1e3,Date.now()-r<e)}async function V(t,e,n){if(null==e)return null;const o=[],{objectIdField:a}=t;if(e.forEach((t=>{let e=null;if("attributes"in t){const{attributes:r}=t;e={globalId:r[n],objectId:null!=r[a]&&-1!==r[a]?r[a]:null}}else e={globalId:t.globalId,objectId:null!=t.objectId&&-1!==t.objectId?t.objectId:null};null!=e.globalId&&(null!=e.objectId&&-1!==e.objectId||o.push(e.globalId))})),0===o.length)return null;const s=t.createQuery();s.where=o.map((t=>`${n}='${t}'`)).join(" OR "),s.returnGeometry=!1,s.outFields=[a,n],s.cacheHint=!1;const u=await (0,asyncUtils/* resultOrAbort */.DZ)(r(t,s));if(!u.ok)return null;const c=new Map,l=u.value.features;for(const r of l){const t=r.attributes[n],e=r.attributes[a];null!=t&&null!=e&&-1!==e&&c.set(t,e)}return c}


/***/ }),

/***/ 77567:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(539);
/* harmony import */ var _Field_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24738);
/* harmony import */ var _FieldsIndex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79005);
/* harmony import */ var _fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42453);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function s(){return{fields:{type:[_Field_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A],value:null,set:function(i){if(i&&(0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("big-integer-warning-enabled")){const t=i.filter((e=>"big-integer"===e.type||"oid"===e.type&&(e.length||0)>=8));if(t.length){const i=t.map((e=>`'${e.name}'`)).join(", ");_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getLogger(this).warn("#fields",`Layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}') references big-integer field(s): ${i}, support for which is experimental. Only integers less than ${Number.MAX_SAFE_INTEGER} (Number.MAX_SAFE_INTEGER) are supported.`)}}this._set("fields",i)}},fieldsIndex:{readOnly:!0,get(){return _FieldsIndex_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.fromLayer(this)}},outFields:{type:[String],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields")},get:function(){const i=this._userOutFields;if(!i?.length)return null;if(i.includes("*"))return["*"];if(!this.fields)return i;for(const t of i){const r=this.fieldsIndex?.has(t);r||_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getLogger("esri.layers.support.fieldProperties").error("field-attributes-layer:invalid-field",`Invalid field ${t} found in outFields`,{layer:this,outFields:i})}return (0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .fixFields */ .DB)(this.fieldsIndex,i)}}}}


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

/***/ 74639:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BI: () => (/* binding */ f),
/* harmony export */   D3: () => (/* binding */ u),
/* harmony export */   XJ: () => (/* binding */ x),
/* harmony export */   mX: () => (/* binding */ w),
/* harmony export */   rU: () => (/* binding */ g),
/* harmony export */   tH: () => (/* binding */ _)
/* harmony export */ });
/* unused harmony exports getSingleFieldTemplatedString, sqlToTemplateString */
/* harmony import */ var _core_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96274);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const n="__begin__",r="__end__",s=new RegExp(n,"ig"),t=new RegExp(r,"ig"),l=new RegExp("^"+n,"i"),o=new RegExp(r+"$","i"),i='"',a=i+" + ",c=" + "+i;function p(e){return e.replaceAll(new RegExp("\\[","g"),"{").replaceAll(new RegExp("\\]","g"),"}")}function u(e){return e.replaceAll(new RegExp("\\{","g"),"[").replaceAll(new RegExp("\\}","g"),"]")}function x(e){const n={expression:"",type:"none"};return e.labelExpressionInfo?e.labelExpressionInfo.value?(n.expression=e.labelExpressionInfo.value,n.type="conventional"):e.labelExpressionInfo.expression&&(n.expression=e.labelExpressionInfo.expression,n.type="arcade"):null!=e.labelExpression&&(n.expression=p(e.labelExpression),n.type="conventional"),n}function f(e){const n=x(e);if(!n)return null;switch(n.type){case"conventional":return w(n.expression);case"arcade":return n.expression}return null}function g(e){const n=x(e);if(!n)return null;switch(n.type){case"conventional":return $(n.expression);case"arcade":return _(n.expression)}return null}function w(p){let u;return p?(u=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_0__/* .replace */ .HC)(p,(e=>n+'$feature["'+e+'"]'+r)),u=l.test(u)?u.replace(l,""):i+u,u=o.test(u)?u.replace(o,""):u+i,u=u.replaceAll(s,a).replaceAll(t,c)):u='""',u}const E=/^\s*\{([^}]+)\}\s*$/i;function $(e){const n=e?.match(E);return n?.[1].trim()||null}const b=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,m=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,R=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;function _(e){if(!e)return null;let n=b.exec(e)||m.exec(e);return n?n[1]||n[3]:(n=R.exec(e),n?n[2]:null)}


/***/ }),

/***/ 79682:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ i),
/* harmony export */   z: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19251);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(539);
/* harmony import */ var _LabelClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86155);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const n=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.getLogger("esri.layers.support.labelingInfo"),l=/\[([^\[\]]+)\]/gi;function i(e,r,o){return e?e.map((e=>{const n=new _LabelClass_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A;if(n.read(e,o),n.labelExpression){const e=r.fields||r.layerDefinition?.fields||this.fields;n.labelExpression=n.labelExpression.replaceAll(l,((r,o)=>`[${s(o,e)}]`))}return n})):null}function s(e,r){if(!r)return e;const o=e.toLowerCase();for(let t=0;t<r.length;t++){const e=r[t].name;if(e.toLowerCase()===o)return e}return e}const a={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null};function c(e,o){const t=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(e);return t.some((e=>f(e,o)))?[]:t}function f(r,o){const t=r.labelPlacement,l=a[o];if(!r.symbol)return n.warn("No ILabelClass symbol specified."),!0;if(!l)return n.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("labeling:unsupported-geometry-type",`Unable to create labels for layer, geometry type '${o}' is not supported`)),!0;if(!l.includes(t)){const e=l[0];t&&n.warn(`Found invalid label placement type ${t} for ${o}. Defaulting to ${e}`),r.labelPlacement=e}return!1}


/***/ }),

/***/ 44360:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  L: () => (/* binding */ K)
});

// UNUSED EXPORTS: JoinTableDataSource

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(4130);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(28902);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/reader.js
var serializableProperty_reader = __webpack_require__(61985);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/Field.js
var Field = __webpack_require__(24738);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/source/MapLayerSource.js
var MapLayerSource = __webpack_require__(30750);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry.js
var geometry = __webpack_require__(17639);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/typeUtils.js
var typeUtils = __webpack_require__(12433);
;// ../node_modules/@arcgis/core/layers/support/source/QueryTableDataSource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var c;let a=c=class extends JSONSupport/* JSONSupport */.oY{constructor(e){super(e),this.type="query-table"}clone(){const{workspaceId:e,query:r,oidFields:o,spatialReference:t,geometryType:p}=this,s={workspaceId:e,query:r,oidFields:o,spatialReference:t?.clone()??void 0,geometryType:p};return new c(s)}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({queryTable:"query-table"})],a.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],a.prototype,"workspaceId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],a.prototype,"query",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],a.prototype,"oidFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SpatialReference/* default */.A,json:{write:!0}})],a.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)(typeUtils/* featureGeometryTypeKebabDictionary */.g)],a.prototype,"geometryType",void 0),a=c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.source.QueryTableDataSource")],a);

;// ../node_modules/@arcgis/core/layers/support/source/RasterDataSource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var p;let RasterDataSource_a=p=class extends JSONSupport/* JSONSupport */.oY{constructor(r){super(r),this.type="raster"}clone(){const{workspaceId:r,dataSourceName:o}=this;return new p({workspaceId:r,dataSourceName:o})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({raster:"raster"})],RasterDataSource_a.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],RasterDataSource_a.prototype,"dataSourceName",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],RasterDataSource_a.prototype,"workspaceId",void 0),RasterDataSource_a=p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.source.RasterDataSource")],RasterDataSource_a);

;// ../node_modules/@arcgis/core/layers/support/source/TableDataSource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var TableDataSource_p;let TableDataSource_a=TableDataSource_p=class extends JSONSupport/* JSONSupport */.oY{constructor(r){super(r),this.type="table"}clone(){const{workspaceId:r,gdbVersion:o,dataSourceName:e}=this;return new TableDataSource_p({workspaceId:r,gdbVersion:o,dataSourceName:e})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({table:"table"})],TableDataSource_a.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],TableDataSource_a.prototype,"workspaceId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],TableDataSource_a.prototype,"gdbVersion",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],TableDataSource_a.prototype,"dataSourceName",void 0),TableDataSource_a=TableDataSource_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.source.TableDataSource")],TableDataSource_a);

;// ../node_modules/@arcgis/core/layers/support/source/DataLayerSource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var d,m;const T=(0,jsonMap/* strict */.O)()({esriLeftInnerJoin:"left-inner-join",esriLeftOuterJoin:"left-outer-join"});let j=d=class extends JSONSupport/* JSONSupport */.oY{constructor(e){super(e),this.type="join-table"}readLeftTableSource(e,r,o){return g()(e,r,o)}castLeftTableSource(e){return (0,ensureType/* ensureOneOfType */.aq)(L(),e)}readRightTableSource(e,r,o){return g()(e,r,o)}castRightTableSource(e){return (0,ensureType/* ensureOneOfType */.aq)(L(),e)}clone(){const{leftTableKey:e,rightTableKey:r,leftTableSource:o,rightTableSource:t,joinType:a}=this,s={leftTableKey:e,rightTableKey:r,leftTableSource:o?.clone()??void 0,rightTableSource:t?.clone()??void 0,joinType:a};return new d(s)}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({joinTable:"join-table"})],j.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],j.prototype,"leftTableKey",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],j.prototype,"rightTableKey",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],j.prototype,"leftTableSource",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("leftTableSource")],j.prototype,"readLeftTableSource",null),(0,tslib_es6._)([(0,cast/* cast */.w)("leftTableSource")],j.prototype,"castLeftTableSource",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],j.prototype,"rightTableSource",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("rightTableSource")],j.prototype,"readRightTableSource",null),(0,tslib_es6._)([(0,cast/* cast */.w)("rightTableSource")],j.prototype,"castRightTableSource",null),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)(T)],j.prototype,"joinType",void 0),j=d=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.source.JoinTableDataSource")],j);let h=null;function g(){return h||(h=(0,serializableProperty_reader/* createTypeReader */.C)({types:L()})),h}let v=null;function L(){return v||(v={key:"type",base:null,typeMap:{"data-layer":K,"map-layer":MapLayerSource/* MapLayerSource */.f}}),v}const w={key:"type",base:null,typeMap:{"join-table":j,"query-table":a,raster:RasterDataSource_a,table:TableDataSource_a}};let K=m=class extends JSONSupport/* JSONSupport */.oY{constructor(e){super(e),this.type="data-layer"}clone(){const{fields:e,dataSource:r}=this;return new m({fields:e,dataSource:r})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({dataLayer:"data-layer"})],K.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Field/* default */.A],json:{write:!0}})],K.prototype,"fields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:w,json:{write:!0}})],K.prototype,"dataSource",void 0),K=m=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.source.DataLayerSource")],K),K.from=(0,ensureType/* ensureType */.dp)(K);


/***/ }),

/***/ 30750:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var a;let c=a=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(r){super(r),this.type="map-layer"}clone(){const{mapLayerId:r,gdbVersion:o}=this;return new a({mapLayerId:r,gdbVersion:o})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__/* .enumeration */ .e)({mapLayer:"map-layer"})],c.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__/* .Integer */ .jz,json:{write:!0}})],c.prototype,"mapLayerId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],c.prototype,"gdbVersion",void 0),c=a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.layers.support.source.MapLayerSource")],c);


/***/ }),

/***/ 39532:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ce: () => (/* binding */ f),
/* harmony export */   It: () => (/* binding */ p),
/* harmony export */   LG: () => (/* binding */ i),
/* harmony export */   OM: () => (/* binding */ a),
/* harmony export */   Y: () => (/* binding */ s),
/* harmony export */   bK: () => (/* binding */ c),
/* harmony export */   sQ: () => (/* binding */ l)
/* harmony export */ });
/* unused harmony export toggleTypeKeword */
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13484);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78983);
/* harmony import */ var _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96082);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function o(o){const i=o.spatialReference;if(i.isWGS84)return o.clone();if(i.isWebMercator)return (0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .webMercatorToGeographic */ .ci)(o);const s=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.WGS84;return await (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_0__.initializeProjection)(i,s),(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_0__.project)(o,s)}function i(e,t){if(!s(e,t)){const r=e.typeKeywords;r?r.push(t):e.typeKeywords=[t]}}function s(e,t){return!!e.typeKeywords?.includes(t)}function c(e){return s(e,f.HOSTED_SERVICE)}function a(e,t){const r=e.typeKeywords;if(r){const e=r.indexOf(t);e>-1&&r.splice(e,1)}}function u(e,t,r){r?i(e,t):a(e,t)}async function l(e){const t=e.clone().normalize();let r;if(t.length>1)for(const n of t)r?n.width>r.width&&(r=n):r=n;else r=t[0];return o(r)}const f={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table",HOSTED_SERVICE:"Hosted Service",LOCAL_SCENE:"ViewingMode-Local",TILED_IMAGERY:"Tiled Imagery",GROUP_LAYER_MAP:"Map"};function p(e){const{portal:t,isOrgItem:r,itemControl:n}=e,o=t.user?.privileges;let i=!o||o.includes("features:user:edit"),s=!!r&&!!o?.includes("features:user:fullEdit");const c="update"===n||"admin"===n;return c?s=i=!0:s&&(i=!0),{features:{edit:i,fullEdit:s},content:{updateItem:c}}}


/***/ }),

/***/ 12071:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20909);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function p(i){return o[t(i)]||e}function t(i){return"json"===i.type?"application/json":"blob"===i.type?i.blob.type:n(i.url)}function n(p){const t=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getPathExtension */ .Zo)(p);return g[t]||a}const o={},a="text/plain",e=o[a],g={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const l in g)o[g[l]]=l;


/***/ }),

/***/ 98751:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addOrUpdateResource: () => (/* binding */ s),
/* harmony export */   bg: () => (/* binding */ m),
/* harmony export */   cL: () => (/* binding */ p),
/* harmony export */   fetchResources: () => (/* binding */ o),
/* harmony export */   removeAllResources: () => (/* binding */ l),
/* harmony export */   removeResource: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony exports getSiblingOfSameType, splitPrefixFileNameAndExtension */
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86394);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98849);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20909);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function o(e,t={},a){await e.load(a);const o=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(e.itemUrl,"resources"),{start:s=1,num:n=10,sortOrder:l="asc",sortField:u="created"}=t,c={query:{start:s,num:n,sortOrder:l,sortField:u,token:e.apiKey},signal:a?.signal},i=await e.portal.request(o,c);return{total:i.total,nextStart:i.nextStart,resources:i.resources.map((({created:t,size:r,resource:a})=>({created:new Date(t),size:r,resource:e.resourceFromPath(a)})))}}async function s(e,a,o,s){if(!e.hasPath())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(`portal-item-resource-${a}:invalid-path`,"Resource does not have a valid path");const n=e.portalItem;await n.load(s);const l=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(n.userItemUrl,"add"===a?"addResources":"updateResources"),[c,i]=u(e.path),p=new FormData;return c&&"."!==c&&p.append("resourcesPrefix",c),null!=s&&s.compress&&p.append("compress","true"),p.append("fileName",i),p.append("file",o,i),p.append("f","json"),s?.access&&p.append("access",s.access),await n.portal.request(l,{method:"post",body:p,signal:s?.signal}),e}async function n(e,a,o){if(!a.hasPath())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(o);const s=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(e.userItemUrl,"removeResources");await e.portal.request(s,{method:"post",query:{resource:a.path},signal:o?.signal}),a.portalItem=null}async function l(e,t){await e.load(t);const a=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(e.userItemUrl,"removeResources");return e.portal.request(a,{method:"post",query:{deleteAll:!0},signal:t?.signal})}function u(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function c(e){const[t,r]=i(e),[a,o]=u(t);return[a,o,r]}function i(e){const t=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getPathExtension */ .Zo)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}async function p(t){if("blob"===t.type)return t.blob;if("json"===t.type)return new Blob([t.jsonString],{type:"application/json"});return(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t.url,{responseType:"blob"})).data}function d(e,t){if(!e.hasPath())return null;const[a,,o]=c(e.path);return e.portalItem.resourceFromPath(r(a,t+o))}function m(e,t){if(!e.hasPath())return null;const[a,,o]=c(e.path);return e.portalItem.resourceFromPath((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(a,t+o))}


/***/ }),

/***/ 17671:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ w)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30822);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59851);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19251);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(539);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4130);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75094);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(77542);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(73446);
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(42453);
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(76589);
/* harmony import */ var _mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(63501);
/* harmony import */ var _support_ClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(87729);
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(16758);
/* harmony import */ var _support_LegendOptions_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(38785);
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(28965);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var B;const V="log",F="percent-of-total",S="field",E=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONMap */ .J({esriNormalizeByLog:V,esriNormalizeByPercentOfTotal:F,esriNormalizeByField:S}),j=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_11__/* .ensureType */ .dp)(_support_ClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A);let z=B=class extends((0,_mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_14__/* .VisualVariablesMixin */ .h)(_Renderer_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)){constructor(e){super(e),this._compiledValueExpression={valueExpression:null,compiledFunction:null},this.backgroundFillSymbol=null,this.classBreakInfos=null,this.defaultLabel=null,this.defaultSymbol=null,this.field=null,this.isMaxInclusive=!0,this.legendOptions=null,this.normalizationField=null,this.normalizationTotal=null,this.type="class-breaks",this.valueExpression=null,this.valueExpressionTitle=null,this._set("classBreakInfos",[])}readClassBreakInfos(e,s,t){if(!Array.isArray(e))return;let o=s.minValue;return e.map((e=>{const s=new _support_ClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A;return s.read(e,t),null==s.minValue&&(s.minValue=o),null==s.maxValue&&(s.maxValue=s.minValue),o=s.maxValue,s}))}writeClassBreakInfos(e,s,t,o){const i=e.map((e=>e.write({},o)));this._areClassBreaksConsecutive()&&i.forEach((e=>delete e.classMinValue)),s[t]=i}castField(e){return null==e?e:"function"==typeof e?(_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.getLogger(this).error(".field: field must be a string value"),null):(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_11__/* .ensureString */ .GX)(e)}get minValue(){return this.classBreakInfos&&this.classBreakInfos[0]&&this.classBreakInfos[0].minValue||0}get normalizationType(){let e=this._get("normalizationType");const s=!!this.normalizationField,t=null!=this.normalizationTotal;return s||t?(e=s&&S||t&&F||null,s&&t&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.getLogger(this).warn("warning: both normalizationField and normalizationTotal are set!")):e!==S&&e!==F||(e=null),e}set normalizationType(e){this._set("normalizationType",e)}addClassBreakInfo(e,t,i){let r=null;r="number"==typeof e?new _support_ClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A({minValue:e,maxValue:t,symbol:(0,_symbols_js__WEBPACK_IMPORTED_MODULE_1__/* .ensureType */ .dp)(i)}):j((0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__/* .clone */ .o8)(e)),this.classBreakInfos.push(r),1===this.classBreakInfos.length&&this.notifyChange("minValue")}removeClassBreakInfo(e,s){const t=this.classBreakInfos.length;for(let o=0;o<t;o++){const t=[this.classBreakInfos[o].minValue,this.classBreakInfos[o].maxValue];if(t[0]===e&&t[1]===s){this.classBreakInfos.splice(o,1);break}}}getBreakIndex(e,s){return this.valueExpression&&null==s?.arcade&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.getLogger(this).warn(""),this.valueExpression?this._getBreakIndexForExpression(e,s):this._getBreakIndexForField(e)}async getClassBreakInfo(e,s){let t=s;this.valueExpression&&null==s?.arcade&&(t={...t,arcade:await (0,_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_18__/* .loadArcade */ .lw)()});const o=this.getBreakIndex(e,t);return-1!==o?this.classBreakInfos[o]:null}getSymbol(e,s){if(this.valueExpression&&null==s?.arcade)return void _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.getLogger(this).error("#getSymbol()","Please use getSymbolAsync if valueExpression is used");const t=this.getBreakIndex(e,s);return t>-1?this.classBreakInfos[t].symbol:this.defaultSymbol}async getSymbolAsync(e,s){let t=s;if(this.valueExpression&&null==s?.arcade){const e=await (0,_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_18__/* .loadArcade */ .lw)(),{arcadeUtils:s}=e;s.hasGeometryOperations(this.valueExpression)&&await s.enableGeometryOperations(),t={...t,arcade:e}}const o=this.getBreakIndex(e,t);return o>-1?this.classBreakInfos[o].symbol:this.defaultSymbol}getSymbols(){const e=[];return this.classBreakInfos.forEach((s=>{s.symbol&&e.push(s.symbol)})),this.defaultSymbol&&e.push(this.defaultSymbol),e}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,s)=>e+s.getAttributeHash()),"")}getMeshHash(){const e=JSON.stringify(this.backgroundFillSymbol),s=JSON.stringify(this.defaultSymbol),t=`${this.normalizationField}.${this.normalizationType}.${this.normalizationTotal}`;return`${e}.${s}.${this.classBreakInfos.reduce(((e,s)=>e+s.getMeshHash()),"")}.${t}.${this.field}.${this.valueExpression}`}get arcadeRequired(){return this.arcadeRequiredForVisualVariables||!!this.valueExpression}clone(){return new B({field:this.field,backgroundFillSymbol:this.backgroundFillSymbol?.clone(),defaultLabel:this.defaultLabel,defaultSymbol:this.defaultSymbol?.clone(),valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,classBreakInfos:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__/* .clone */ .o8)(this.classBreakInfos),isMaxInclusive:this.isMaxInclusive,normalizationField:this.normalizationField,normalizationTotal:this.normalizationTotal,normalizationType:this.normalizationType,visualVariables:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__/* .clone */ .o8)(this.visualVariables),legendOptions:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__/* .clone */ .o8)(this.legendOptions),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}async collectRequiredFields(e,s){const t=[this.collectVVRequiredFields(e,s),this.collectSymbolFields(e,s)];await Promise.all(t)}async collectSymbolFields(e,s){const t=[...this.getSymbols().map((t=>t.collectRequiredFields(e,s))),(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .collectArcadeFieldNames */ .Dx)(e,s,this.valueExpression)];(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .collectField */ .rq)(e,s,this.field),(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .collectField */ .rq)(e,s,this.normalizationField),await Promise.all(t)}_getBreakIndexForExpression(e,s){const{viewingMode:t,scale:o,spatialReference:i,arcade:r,timeZone:a}=s??{},{valueExpression:l}=this;let n=this._compiledValueExpression.valueExpression===l?this._compiledValueExpression.compiledFunction:null;const u=r.arcadeUtils;if(!n){const e=u.createSyntaxTree(l);n=u.createFunction(e),this._compiledValueExpression.compiledFunction=n}this._compiledValueExpression.valueExpression=l;const c=u.executeFunction(n,u.createExecContext(e,u.getViewInfo({viewingMode:t,scale:o,spatialReference:i}),a));return this._getBreakIndexfromInfos(c)}_getBreakIndexForField(e){const s=this.field,t=e.attributes,o=this.normalizationType;let i=parseFloat(t[s]);if(o){const e=this.normalizationTotal,s=parseFloat(this.normalizationField?t[this.normalizationField]:void 0);if(o===V)i=Math.log(i)*Math.LOG10E;else if(o!==F||null==e||isNaN(e)){if(o===S&&!isNaN(s)){if(isNaN(i)||isNaN(s))return-1;i/=s}}else i=i/e*100}return this._getBreakIndexfromInfos(i)}_getBreakIndexfromInfos(e){const s=this.isMaxInclusive;if(null!=e&&"number"==typeof e&&!isNaN(e))for(let t=0;t<this.classBreakInfos.length;t++){const o=[this.classBreakInfos[t].minValue,this.classBreakInfos[t].maxValue];if(o[0]<=e&&(s?e<=o[1]:e<o[1]))return t}return-1}_areClassBreaksConsecutive(){const e=this.classBreakInfos,s=e.length;for(let t=1;t<s;t++)if(e[t-1].maxValue!==e[t].minValue)return!1;return!0}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_16__/* .rendererBackgroundFillSymbolProperty */ .As)],z.prototype,"backgroundFillSymbol",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:[_support_ClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A]})],z.prototype,"classBreakInfos",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__/* .reader */ .w)("classBreakInfos")],z.prototype,"readClassBreakInfos",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__/* .writer */ .K)("classBreakInfos")],z.prototype,"writeClassBreakInfos",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:String,json:{write:!0}})],z.prototype,"defaultLabel",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_16__/* .rendererSymbolProperty */ .z4)],z.prototype,"defaultSymbol",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:String,json:{write:!0}})],z.prototype,"field",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_6__/* .cast */ .w)("field")],z.prototype,"castField",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:Boolean})],z.prototype,"isMaxInclusive",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:_support_LegendOptions_js__WEBPACK_IMPORTED_MODULE_17__/* .LegendOptions */ .q,json:{write:!0}})],z.prototype,"legendOptions",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:Number,readOnly:!0,value:null,json:{read:!1,write:{overridePolicy(){return 0!==this.classBreakInfos.length&&this._areClassBreaksConsecutive()?{enabled:!0}:{enabled:!1}}}}})],z.prototype,"minValue",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:String,json:{write:!0}})],z.prototype,"normalizationField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:Number,cast:e=>(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_11__/* .ensureNumber */ .GB)(e),json:{write:!0}})],z.prototype,"normalizationTotal",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:E.apiValues,value:null,json:{type:E.jsonValues,read:E.read,write:E.write}})],z.prototype,"normalizationType",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__/* .enumeration */ .e)({classBreaks:"class-breaks"})],z.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:String,json:{write:!0}})],z.prototype,"valueExpression",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:String,json:{write:!0}})],z.prototype,"valueExpressionTitle",void 0),z=B=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__/* .subclass */ .$)("esri.renderers.ClassBreaksRenderer")],z);const w=z;


/***/ }),

/***/ 84685:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19251);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77542);
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42453);
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76589);
/* harmony import */ var _mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63501);
/* harmony import */ var _support_DictionaryLoader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57081);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var p;let c=p=class extends((0,_mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_8__/* .VisualVariablesMixin */ .h)(_Renderer_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)){constructor(e){super(e),this.config=null,this.fieldMap=null,this.scaleExpression=null,this.scaleExpressionTitle=null,this.url=null,this.type="dictionary"}get _loader(){return new _support_DictionaryLoader_js__WEBPACK_IMPORTED_MODULE_9__.DictionaryLoader(this.url,this.config,this.fieldMap)}writeData(e,r){e&&(r.scalingExpressionInfo={expression:e,returnType:"number"})}writeVisualVariables(e,r,s,i){i?.origin||super.writeVisualVariables(e,r,s,i)}clone(){return new p({config:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(this.config),scaleExpression:this.scaleExpression,scaleExpressionTitle:this.scaleExpressionTitle,fieldMap:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(this.fieldMap),url:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(this.url),visualVariables:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(this.visualVariables)})}async getSymbolAsync(e,r){return this._loader.getSymbolAsync(e,r)}async collectRequiredFields(e,r){await this.collectVVRequiredFields(e,r),this.scaleExpression&&await (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .collectArcadeFieldNames */ .Dx)(e,r,this.scaleExpression);for(const s in this.fieldMap){const i=this.fieldMap[s];r.has(i)&&e.add(i)}}get arcadeRequired(){return!0}getSymbol(){return null}getSymbols(){return[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,r)=>e+r.getAttributeHash()),"")}getMeshHash(){return`${this.url}-${JSON.stringify(this.fieldMap)}`}getSymbolFields(){return this._loader.getSymbolFields()}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_support_DictionaryLoader_js__WEBPACK_IMPORTED_MODULE_9__.DictionaryLoader})],c.prototype,"_loader",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Object,json:{read:{source:"configuration"},write:{target:"configuration"}}})],c.prototype,"config",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Object,json:{write:!0}})],c.prototype,"fieldMap",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{read:{source:"scalingExpressionInfo.expression"},write:!0}})],c.prototype,"scaleExpression",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_5__/* .writer */ .K)("scaleExpression")],c.prototype,"writeData",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{read:{source:"scalingExpressionInfo.title"},write:{target:"scalingExpressionInfo.title",overridePolicy(e){return{enabled:!!e&&!!this.scaleExpression}}}}})],c.prototype,"scaleExpressionTitle",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],c.prototype,"url",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_5__/* .writer */ .K)("visualVariables")],c.prototype,"writeVisualVariables",null),c=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__/* .subclass */ .$)("esri.renderers.DictionaryRenderer")],c);const u=c;


/***/ }),

/***/ 20299:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ y)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(96220);
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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/fieldUtils.js
var fieldUtils = __webpack_require__(42453);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/Renderer.js
var Renderer = __webpack_require__(76589);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/mixins/VisualVariablesMixin.js + 5 modules
var VisualVariablesMixin = __webpack_require__(63501);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/AttributeColorInfo.js
var AttributeColorInfo = __webpack_require__(93101);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
;// ../node_modules/@arcgis/core/renderers/support/DotDensityLegendOptions.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var e;let p=e=class extends JSONSupport/* JSONSupport */.oY{constructor(){super(...arguments),this.unit=null}clone(){return new e({unit:this.unit})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"unit",void 0),p=e=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.DotDensityLegendOptions")],p);const c=p;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleFillSymbol.js
var SimpleFillSymbol = __webpack_require__(68882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleLineSymbol.js + 2 modules
var SimpleLineSymbol = __webpack_require__(40241);
;// ../node_modules/@arcgis/core/renderers/DotDensityRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var h;let m=h=class extends((0,VisualVariablesMixin/* VisualVariablesMixin */.h)(Renderer/* default */.A)){constructor(t){super(t),this.attributes=null,this.backgroundColor=new Color/* default */.A([0,0,0,0]),this.dotBlendingEnabled=!0,this.dotShape="square",this.dotSize=1,this.legendOptions=null,this.outline=new SimpleLineSymbol/* default */.A,this.dotValue=null,this.referenceScale=null,this.seed=1,this.type="dot-density"}calculateDotValue(t){if(null==this.referenceScale)return this.dotValue;const e=t/this.referenceScale*this.dotValue;return e<1?1:e}getSymbol(){return new SimpleFillSymbol/* default */.A({outline:this.outline})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}getAttributeHash(){return this.attributes?.reduce(((t,e)=>t+e.getAttributeHash()),"")??""}getMeshHash(){return JSON.stringify(this.outline)}clone(){return new h({attributes:(0,lang/* clone */.o8)(this.attributes),backgroundColor:(0,lang/* clone */.o8)(this.backgroundColor),dotBlendingEnabled:(0,lang/* clone */.o8)(this.dotBlendingEnabled),dotShape:(0,lang/* clone */.o8)(this.dotShape),dotSize:(0,lang/* clone */.o8)(this.dotSize),dotValue:(0,lang/* clone */.o8)(this.dotValue),legendOptions:(0,lang/* clone */.o8)(this.legendOptions),outline:(0,lang/* clone */.o8)(this.outline),referenceScale:(0,lang/* clone */.o8)(this.referenceScale),visualVariables:(0,lang/* clone */.o8)(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}getControllerHash(){const t=this.attributes?.map((t=>t.field||t.valueExpression||""));return`${t}-${this.outline&&JSON.stringify(this.outline.toJSON())||""}`}async collectRequiredFields(t,e){await this.collectVVRequiredFields(t,e);for(const o of this.attributes??[])o.valueExpression&&await (0,fieldUtils/* collectArcadeFieldNames */.Dx)(t,e,o.valueExpression),o.field&&t.add(o.field)}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[AttributeColorInfo/* default */.A],json:{write:!0}})],m.prototype,"attributes",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Color/* default */.A,json:{write:!0}})],m.prototype,"backgroundColor",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],m.prototype,"dotBlendingEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!1}})],m.prototype,"dotShape",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],m.prototype,"dotSize",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:c,json:{write:!0}})],m.prototype,"legendOptions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SimpleLineSymbol/* default */.A,json:{default:null,write:!0}})],m.prototype,"outline",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],m.prototype,"dotValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],m.prototype,"referenceScale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],m.prototype,"seed",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({dotDensity:"dot-density"})],m.prototype,"type",void 0),m=h=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.DotDensityRenderer")],m);const y=m;


/***/ }),

/***/ 25498:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ P)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(96220);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols.js + 1 modules
var symbols = __webpack_require__(30822);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/deprecate.js
var deprecate = __webpack_require__(50220);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/scheduling.js
var scheduling = __webpack_require__(61449);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/screenUtils.js
var screenUtils = __webpack_require__(89882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/utils.js
var utils = __webpack_require__(55135);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(28902);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/fieldUtils.js
var fieldUtils = __webpack_require__(42453);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/Renderer.js
var Renderer = __webpack_require__(76589);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/AuthoringInfo.js + 3 modules
var AuthoringInfo = __webpack_require__(20699);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/HeatmapColorStop.js
var HeatmapColorStop = __webpack_require__(50769);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(24793);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
;// ../node_modules/@arcgis/core/renderers/support/HeatmapLegendOptions.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let p=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(){super(...arguments),this.minLabel=null,this.maxLabel=null,this.title=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"minLabel",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"maxLabel",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"title",void 0),p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.HeatmapLegendOptions")],p);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/heatmapUtils.js
var heatmapUtils = __webpack_require__(27927);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleMarkerSymbol.js
var SimpleMarkerSymbol = __webpack_require__(23369);
;// ../node_modules/@arcgis/core/renderers/HeatmapRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var j;const D="esri.renderers.HeatmapRenderer",I=Logger/* default */.A.getLogger(D);function S(e){if(null!=e){const{maxDensity:t,minDensity:i,radius:s}=e;if(null!=t||null!=i||null!=s){const{blurRadius:t,maxPixelIntensity:i,minPixelIntensity:s,...r}=e;return r}}return e}let v=j=class extends Renderer/* default */.A{constructor(e){super(e),this.authoringInfo=null,this.colorStops=[new HeatmapColorStop/* default */.A({ratio:0,color:new Color/* default */.A("rgba(255, 140, 0, 0)")}),new HeatmapColorStop/* default */.A({ratio:.75,color:new Color/* default */.A("rgba(255, 140, 0, 1)")}),new HeatmapColorStop/* default */.A({ratio:.9,color:new Color/* default */.A("rgba(255, 0,   0, 1)")})],this.field=null,this.fieldOffset=0,this.legendOptions=null,this.maxDensity=.04,this.minDensity=0,this.radius=18,this.referenceScale=0,this.type="heatmap",this.valueExpression=null,this.valueExpressionTitle=null,this._warnedProps={blurRadius:!1,maxPixelIntensity:!1,minPixelIntensity:!1}}normalizeCtorArgs(e){return S(e)}get blurRadius(){return (0,heatmapUtils/* kernelDensityRadiusPtToGaussianBlurRadiusPx */.PU)(this.radius)}set blurRadius(e){const t=this.maxPixelIntensity,i=this.minPixelIntensity;this._set("radius",(0,heatmapUtils/* gaussianBlurRadiusPxToKernelDensityRadiusPt */.zp)(e)),this._warnAboutDeprecatedGaussianBlurProp("blurRadius","radius"),this._set("maxDensity",t*this._pixelIntensityToDensity),this._set("minDensity",i*this._pixelIntensityToDensity)}get maxPixelIntensity(){return this.maxDensity/this._pixelIntensityToDensity}set maxPixelIntensity(e){this._set("maxDensity",e*this._pixelIntensityToDensity),this._warnAboutDeprecatedGaussianBlurProp("maxPixelIntensity","maxDensity")}get minPixelIntensity(){return this.minDensity/this._pixelIntensityToDensity}set minPixelIntensity(e){this._set("minDensity",e*this._pixelIntensityToDensity),this._warnAboutDeprecatedGaussianBlurProp("minPixelIntensity","minDensity")}get _pixelIntensityToDensity(){return 24/(heatmapUtils/* magicKernelDensityRadiusInflationFactor */.ex**2*this.blurRadius**4)}_warnAboutDeprecatedGaussianBlurProp(e,t){if(this._warnedProps[e])return;"user"===(0,utils/* getProperties */.oY)(this).getDefaultOrigin()&&(this._warnedProps[e]=!0,(0,scheduling/* schedule */._)((()=>{(0,deprecate/* deprecatedProperty */.Lx)(I,e,{replacement:`${String(t)} (suggested value: ${this._get(t)})`,version:"4.24"})})))}read(e,t){e=S(e),super.read(e,t)}getSymbol(){return new SimpleMarkerSymbol/* default */.A}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}async collectRequiredFields(e,t){const i=this.field,s=this.valueExpression;i&&"string"==typeof i&&(0,fieldUtils/* collectField */.rq)(e,t,i),s&&"string"==typeof s&&await (0,fieldUtils/* collectArcadeFieldNames */.Dx)(e,t,s)}getAttributeHash(){return null}getMeshHash(){return`${JSON.stringify(this.colorStops)}.${this.blurRadius}.${this.field}`}clone(){return new j({authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),colorStops:(0,lang/* clone */.o8)(this.colorStops),field:this.field,legendOptions:(0,lang/* clone */.o8)(this.legendOptions),maxDensity:this.maxDensity,minDensity:this.minDensity,radius:this.radius,referenceScale:this.referenceScale,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:AuthoringInfo/* default */.A,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],v.prototype,"authoringInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],v.prototype,"blurRadius",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[HeatmapColorStop/* default */.A],json:{write:!0}})],v.prototype,"colorStops",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],v.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:{overridePolicy:(e,t,i)=>({enabled:null==i})},origins:{"web-scene":{write:!1}}}})],v.prototype,"fieldOffset",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:p,json:{write:!0}})],v.prototype,"legendOptions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],v.prototype,"maxDensity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],v.prototype,"maxPixelIntensity",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],v.prototype,"minDensity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],v.prototype,"minPixelIntensity",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,cast:screenUtils/* toPt */.cr,json:{write:!0}})],v.prototype,"radius",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,range:{min:0},json:{default:0,write:!0}})],v.prototype,"referenceScale",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({heatmap:"heatmap"})],v.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0,origins:{"web-document":{write:!1},"portal-item":{write:!1}}}})],v.prototype,"valueExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],v.prototype,"valueExpressionTitle",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],v.prototype,"_pixelIntensityToDensity",null),v=j=(0,tslib_es6._)([(0,subclass/* subclass */.$)(D)],v);const P=v;


/***/ }),

/***/ 79300:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ j)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(96220);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols.js + 1 modules
var symbols = __webpack_require__(30822);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(24793);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/screenUtils.js
var screenUtils = __webpack_require__(89882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(28902);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/fieldUtils.js
var fieldUtils = __webpack_require__(42453);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/Renderer.js
var Renderer = __webpack_require__(76589);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/mixins/VisualVariablesMixin.js + 5 modules
var VisualVariablesMixin = __webpack_require__(63501);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/AttributeColorInfo.js
var AttributeColorInfo = __webpack_require__(93101);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
;// ../node_modules/@arcgis/core/renderers/support/OthersCategory.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let i=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(){super(...arguments),this.color=new Color/* default */.A([0,0,0,0]),this.label=null,this.threshold=0}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Color/* default */.A,json:{write:!0}})],i.prototype,"color",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],i.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,range:{min:0,max:1},json:{write:!0}})],i.prototype,"threshold",void 0),i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.OthersCategory")],i);

;// ../node_modules/@arcgis/core/renderers/support/PieChartLegendOptions.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let p=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(){super(...arguments),this.title=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"title",void 0),p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.PieChartLegendOptions")],p);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleMarkerSymbol.js
var SimpleMarkerSymbol = __webpack_require__(23369);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleFillSymbol.js
var SimpleFillSymbol = __webpack_require__(68882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleLineSymbol.js + 2 modules
var SimpleLineSymbol = __webpack_require__(40241);
;// ../node_modules/@arcgis/core/renderers/PieChartRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let f=class extends((0,VisualVariablesMixin/* VisualVariablesMixin */.h)((0,Clonable/* ClonableMixin */.O)(Renderer/* default */.A))){constructor(t){super(t),this.attributes=null,this.backgroundFillSymbol=null,this.defaultColor=new Color/* default */.A([0,0,0,0]),this.defaultLabel=null,this.holePercentage=0,this.othersCategory=new i,this.legendOptions=null,this.outline=null,this.size=12,this.type="pie-chart"}getSymbol(){return new SimpleMarkerSymbol/* default */.A({size:this.size?this.size/2+(this.outline?.width||0):0})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol(),this.backgroundFillSymbol].filter(arrayUtils/* isSome */.Ru)}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((t,e)=>t+e.getAttributeHash()),"")}getMeshHash(){return this.getSymbols().reduce(((t,e)=>t+JSON.stringify(e)),"")}async collectRequiredFields(t,e){await this.collectVVRequiredFields(t,e);for(const o of this.attributes)o.valueExpression&&await (0,fieldUtils/* collectArcadeFieldNames */.Dx)(t,e,o.valueExpression),o.field&&t.add(o.field)}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[AttributeColorInfo/* default */.A],json:{write:!0}})],f.prototype,"attributes",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SimpleFillSymbol/* default */.A,json:{default:null,write:!0}})],f.prototype,"backgroundFillSymbol",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Color/* default */.A,json:{write:!0}})],f.prototype,"defaultColor",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],f.prototype,"defaultLabel",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,range:{min:0,max:1},json:{write:!0}})],f.prototype,"holePercentage",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:i,json:{write:!0}})],f.prototype,"othersCategory",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:p,json:{write:!0}})],f.prototype,"legendOptions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SimpleLineSymbol/* default */.A,json:{default:null,write:!0}})],f.prototype,"outline",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,cast:screenUtils/* toPt */.cr,json:{write:!0}})],f.prototype,"size",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({pieChart:"pie-chart"})],f.prototype,"type",void 0),f=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.PieChartRenderer")],f);const j=f;


/***/ }),

/***/ 76589:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59851);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63863);
/* harmony import */ var _support_AuthoringInfo_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20699);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const n=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONMap */ .J({simple:"simple",uniqueValue:"unique-value",classBreaks:"class-breaks",heatmap:"heatmap",dotDensity:"dot-density",dictionary:"dictionary",pieChart:"pie-chart"},{ignoreUnknown:!0});let a=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY{constructor(r){super(r),this.authoringInfo=null,this.type=null}async getRequiredFields(r){if(!this.collectRequiredFields)return[];const e=new Set;return await this.collectRequiredFields(e,r),Array.from(e).sort()}getSymbol(r,e){}async getSymbolAsync(r,e){}getSymbols(){return[]}getAttributeHash(){return JSON.stringify(this)}getMeshHash(){return JSON.stringify(this)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_support_AuthoringInfo_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,json:{write:!0}})],a.prototype,"authoringInfo",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:n.apiValues,readOnly:!0,json:{type:n.jsonValues,read:!1,write:{writer:n.write,ignoreOrigin:!0}}})],a.prototype,"type",void 0),a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.renderers.Renderer")],a);const p=a;


/***/ }),

/***/ 47347:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19251);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76589);
/* harmony import */ var _mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63501);
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16758);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var c;let n=c=class extends((0,_mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_7__/* .VisualVariablesMixin */ .h)(_Renderer_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)){constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.type="simple"}async collectRequiredFields(e,s){await Promise.all([this.collectSymbolFields(e,s),this.collectVVRequiredFields(e,s)])}async collectSymbolFields(e,s){await Promise.all(this.getSymbols().map((r=>r.collectRequiredFields(e,s))))}getSymbol(e,s){return this.symbol}async getSymbolAsync(e,s){return this.symbol}getSymbols(){return this.symbol?[this.symbol]:[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,s)=>e+s.getAttributeHash()),"")}getMeshHash(){return this.getSymbols().reduce(((e,s)=>e+JSON.stringify(s)),"")}get arcadeRequired(){return this.arcadeRequiredForVisualVariables}clone(){return new c({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),visualVariables:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],n.prototype,"description",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],n.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_8__/* .requiredRendererSymbolProperty */ .Wp)],n.prototype,"symbol",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_4__/* .enumeration */ .e)({simple:"simple"})],n.prototype,"type",void 0),n=c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.renderers.SimpleRenderer")],n);const p=n;


/***/ }),

/***/ 2692:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ A)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols.js + 1 modules
var symbols = __webpack_require__(30822);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/object.js
var object = __webpack_require__(76724);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(85251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(4130);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(28902);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/diffUtils.js
var diffUtils = __webpack_require__(64442);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/fieldUtils.js
var fieldUtils = __webpack_require__(42453);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/portal/Portal.js + 2 modules
var Portal = __webpack_require__(10282);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/Renderer.js
var Renderer = __webpack_require__(76589);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/mixins/VisualVariablesMixin.js + 5 modules
var VisualVariablesMixin = __webpack_require__(63501);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/commonProperties.js
var commonProperties = __webpack_require__(16758);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/LegendOptions.js
var LegendOptions = __webpack_require__(38785);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(24793);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
;// ../node_modules/@arcgis/core/renderers/support/UniqueValue.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let c=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(o){super(o),this.value=null,this.value2=null,this.value3=null}};(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* uniqueValueProperty */.Ug)],c.prototype,"value",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* uniqueValueProperty */.Ug)],c.prototype,"value2",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* uniqueValueProperty */.Ug)],c.prototype,"value3",void 0),c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.UniqueValue")],c);const UniqueValue_u=c;

;// ../node_modules/@arcgis/core/renderers/support/UniqueValueClass.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let n=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(r){super(r),this.description=null,this.label=null,this.symbol=null,this.values=null}castValues(r){if(null==r)return null;const o=typeof(r=Array.isArray(r)?r:[r])[0];return"string"===o||"number"===o?r.map((r=>new UniqueValue_u({value:r}))):"object"===o?r[0]instanceof UniqueValue_u?r:r.map((r=>new UniqueValue_u(r))):null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],n.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],n.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* rendererSymbolProperty */.z4)],n.prototype,"symbol",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[UniqueValue_u],json:{type:[[String]],read:{reader:r=>r?r.map((r=>new UniqueValue_u({value:r[0],value2:r[1],value3:r[2]}))):null},write:{writer:(r,e)=>{const t=[];for(const s of r){const r=[s.value,s.value2,s.value3].filter(arrayUtils/* isSome */.Ru).map((r=>r.toString()));t.push(r)}e.values=t}}}})],n.prototype,"values",void 0),(0,tslib_es6._)([(0,cast/* cast */.w)("values")],n.prototype,"castValues",null),n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.UniqueValueClass")],n);const UniqueValueClass_u=n;

;// ../node_modules/@arcgis/core/renderers/support/UniqueValueGroup.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let UniqueValueGroup_c=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(r){super(r),this.heading=null,this.classes=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],UniqueValueGroup_c.prototype,"heading",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[UniqueValueClass_u],json:{write:!0}})],UniqueValueGroup_c.prototype,"classes",void 0),UniqueValueGroup_c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.UniqueValueGroup")],UniqueValueGroup_c);const UniqueValueGroup_i=UniqueValueGroup_c;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/UniqueValueInfo.js
var UniqueValueInfo = __webpack_require__(3324);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/arcadeOnDemand.js
var arcadeOnDemand = __webpack_require__(28965);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/persistableUrlUtils.js
var persistableUrlUtils = __webpack_require__(63680);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/styleUtils.js
var styleUtils = __webpack_require__(28051);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/WebStyleSymbol.js
var WebStyleSymbol = __webpack_require__(75162);
;// ../node_modules/@arcgis/core/renderers/UniqueValueRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var E;const M="esri.renderers.UniqueValueRenderer",N=Logger/* default */.A.getLogger(M),R="uvInfos-watcher",P="uvGroups-watcher",C=",",$=(0,ensureType/* ensureType */.dp)(UniqueValueInfo/* default */.A);function z(e){const{field1:t,field2:s,field3:i,fieldDelimiter:o,uniqueValueInfos:l,valueExpression:r}=e,u=!(!t||!s);return[{classes:(l??[]).map((e=>{const{symbol:l,label:n,value:a,description:p}=e,[f,d,c]=u?a?.toString()?.split(o||"")||[]:[a],h=[];return(t||r)&&h.push(f),s&&h.push(d),i&&h.push(c),{symbol:l,label:n,values:[h],description:p}}))}]}let k=E=class extends((0,VisualVariablesMixin/* VisualVariablesMixin */.h)(Renderer/* default */.A)){constructor(e){super(e),this._valueInfoMap={},this._isDefaultSymbolDerived=!1,this._isInfosSource=null,this.type="unique-value",this.backgroundFillSymbol=null,this.orderByClassesEnabled=!1,this.valueExpressionTitle=null,this.legendOptions=null,this.defaultLabel=null,this.portal=null,this.styleOrigin=null,this.diff={uniqueValueInfos(e,t){if(!e&&!t)return;if(!e||!t)return{type:"complete",oldValue:e,newValue:t};let s=!1;const i={type:"collection",added:[],removed:[],changed:[],unchanged:[]};for(let o=0;o<t.length;o++){const l=e.find((e=>e.value===t[o].value));l?(0,diffUtils/* diff */.Ui)(l,t[o])?(i.changed.push({type:"complete",oldValue:l,newValue:t[o]}),s=!0):i.unchanged.push({oldValue:l,newValue:t[o]}):(i.added.push(t[o]),s=!0)}for(let o=0;o<e.length;o++){t.find((t=>t.value===e[o].value))||(i.removed.push(e[o]),s=!0)}return s?i:void 0}},this._set("uniqueValueInfos",[]),this._set("uniqueValueGroups",[])}get _cache(){return{compiledFunc:null}}set field(e){this._set("field",e),this._updateFieldDelimiter(),this._updateUniqueValues()}castField(e){return null==e||"function"==typeof e?e:(0,ensureType/* ensureString */.GX)(e)}writeField(e,t,i,o){"string"==typeof e?t[i]=e:o?.messages?o.messages.push(new Error/* default */.A("property:unsupported","UniqueValueRenderer.field set to a function cannot be written to JSON")):N.error(".field: cannot write field to JSON since it's not a string value")}set field2(e){this._set("field2",e),this._updateFieldDelimiter(),this._updateUniqueValues()}set field3(e){this._set("field3",e),this._updateUniqueValues()}set valueExpression(e){this._set("valueExpression",e),this._updateUniqueValues()}set defaultSymbol(e){this._isDefaultSymbolDerived=!1,this._set("defaultSymbol",e)}set fieldDelimiter(e){this._set("fieldDelimiter",e),this._updateUniqueValues()}readPortal(e,t,s){return s.portal||Portal/* default */.A.getDefault()}readStyleOrigin(e,t,s){if(t.styleName)return Object.freeze({styleName:t.styleName});if(t.styleUrl){const e=(0,persistableUrlUtils.f)(t.styleUrl,s);return Object.freeze({styleUrl:e})}}writeStyleOrigin(e,t,s,i){e.styleName?t.styleName=e.styleName:e.styleUrl&&(t.styleUrl=(0,persistableUrlUtils.t)(e.styleUrl,i))}set uniqueValueGroups(e){this.styleOrigin?N.error("#uniqueValueGroups=","Cannot modify unique value groups of a UniqueValueRenderer created from a web style"):(this._set("uniqueValueGroups",e),this._updateInfosFromGroups(),this._isInfosSource=!1,this._watchUniqueValueGroups())}set uniqueValueInfos(e){this.styleOrigin?N.error("#uniqueValueInfos=","Cannot modify unique value infos of a UniqueValueRenderer created from a web style"):(this._set("uniqueValueInfos",e),this._updateValueInfoMap(),this._updateGroupsFromInfos(),this._isInfosSource=!0,this._watchUniqueValueInfos())}addUniqueValueInfo(e,s){if(this.styleOrigin)return void N.error("#addUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style");let i;i="object"==typeof e?$(e):new UniqueValueInfo/* default */.A({value:e,symbol:(0,symbols/* ensureType */.dp)(s)}),this.uniqueValueInfos?.push(i),this._valueInfoMap[i.value]=i,this._updateGroupsFromInfos(),this._isInfosSource=!0,this._watchUniqueValueInfos()}removeUniqueValueInfo(e){if(this.styleOrigin)return void N.error("#removeUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style");const t=this.uniqueValueInfos;if(t)for(let s=0;s<t.length;s++){const i=t[s];if(String(i.value)===String(e)){delete this._valueInfoMap[e],t.splice(s,1);break}}this._updateGroupsFromInfos(),this._isInfosSource=!0,this._watchUniqueValueInfos()}async getUniqueValueInfo(e,t){let s=t;return this.valueExpression&&null==t?.arcade&&(s={...s,arcade:await (0,arcadeOnDemand/* loadArcade */.lw)()}),this._getUniqueValueInfo(e,s)}getSymbol(e,t){if(this.valueExpression&&null==t?.arcade)return void N.error("#getSymbol()","Please use getSymbolAsync if valueExpression is used");const s=this._getUniqueValueInfo(e,t);return s?.symbol||this.defaultSymbol}async getSymbolAsync(e,t){let s=t;if(this.valueExpression&&null==s?.arcade){const e=await (0,arcadeOnDemand/* loadArcade */.lw)(),{arcadeUtils:t}=e;t.hasGeometryOperations(this.valueExpression)&&await t.enableGeometryOperations(),s={...s,arcade:e}}const i=this._getUniqueValueInfo(e,s);return i?.symbol||this.defaultSymbol}getSymbols(){const e=[];for(const t of this.uniqueValueInfos??[])t.symbol&&e.push(t.symbol);return this.defaultSymbol&&e.push(this.defaultSymbol),e}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,t)=>e+t.getAttributeHash()),"")}getMeshHash(){const e=JSON.stringify(this.backgroundFillSymbol),t=JSON.stringify(this.defaultSymbol),s=this.uniqueValueInfos?.reduce(((e,t)=>e+t.getMeshHash()),"");return`${e}.${t}.${s}.${`${this.field}.${this.field2}.${this.field3}.${this.fieldDelimiter}`}.${this.valueExpression}`}clone(){const e=new E({field:this.field,field2:this.field2,field3:this.field3,defaultLabel:this.defaultLabel,defaultSymbol:(0,lang/* clone */.o8)(this.defaultSymbol),orderByClassesEnabled:this.orderByClassesEnabled,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,fieldDelimiter:this.fieldDelimiter,visualVariables:(0,lang/* clone */.o8)(this.visualVariables),legendOptions:(0,lang/* clone */.o8)(this.legendOptions),authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),backgroundFillSymbol:(0,lang/* clone */.o8)(this.backgroundFillSymbol)});this._isDefaultSymbolDerived&&(e._isDefaultSymbolDerived=!0),e._set("portal",this.portal);const t=(0,lang/* clone */.o8)(this.uniqueValueInfos),s=(0,lang/* clone */.o8)(this.uniqueValueGroups);return this.styleOrigin&&(e._set("styleOrigin",Object.freeze((0,lang/* clone */.o8)(this.styleOrigin))),Object.freeze(t),Object.freeze(s)),e._set("uniqueValueInfos",t),e._updateValueInfoMap(),e._set("uniqueValueGroups",s),e._isInfosSource=this._isInfosSource,e._watchUniqueValueInfosAndGroups(),e}get arcadeRequired(){return this.arcadeRequiredForVisualVariables||!!this.valueExpression}async collectRequiredFields(e,t){const s=[this.collectVVRequiredFields(e,t),this.collectSymbolFields(e,t)];await Promise.all(s)}async collectSymbolFields(e,t){const s=[...this.getSymbols().map((s=>s.collectRequiredFields(e,t))),(0,fieldUtils/* collectArcadeFieldNames */.Dx)(e,t,this.valueExpression)];(0,fieldUtils/* collectField */.rq)(e,t,this.field),(0,fieldUtils/* collectField */.rq)(e,t,this.field2),(0,fieldUtils/* collectField */.rq)(e,t,this.field3),await Promise.all(s)}populateFromStyle(){return (0,styleUtils/* fetchStyle */.cF)(this.styleOrigin,{portal:this.portal}).then((e=>{const t=[];return this._valueInfoMap={},e&&e.data&&Array.isArray(e.data.items)&&e.data.items.forEach((s=>{const i=new WebStyleSymbol/* default */.A({styleUrl:e.styleUrl,styleName:e.styleName,portal:this.portal,name:s.name});this.defaultSymbol||s.name!==e.data.defaultItem||(this.defaultSymbol=i,this._isDefaultSymbolDerived=!0);const o=new UniqueValueInfo/* default */.A({value:s.name,symbol:i});t.push(o),this._valueInfoMap[s.name]=o})),this._set("uniqueValueInfos",Object.freeze(t)),this._updateGroupsFromInfos(!0),this._isInfosSource=null,this._watchUniqueValueInfos(),!this.defaultSymbol&&this.uniqueValueInfos?.length&&(this.defaultSymbol=this.uniqueValueInfos[0].symbol,this._isDefaultSymbolDerived=!0),this}))}_updateFieldDelimiter(){this.field&&this.field2&&!this.fieldDelimiter&&this._set("fieldDelimiter",C)}_updateUniqueValues(){null!=this._isInfosSource&&(this._isInfosSource?this._updateGroupsFromInfos():this._updateInfosFromGroups())}_updateValueInfoMap(){this._valueInfoMap={};const{uniqueValueInfos:e}=this;if(e)for(const t of e)this._valueInfoMap[t.value+""]=t}_watchUniqueValueInfosAndGroups(){this._watchUniqueValueInfos(),this._watchUniqueValueGroups()}_watchUniqueValueInfos(){this.removeHandles(R);const{uniqueValueInfos:e}=this;if(e){const t=[];for(const s of e)t.push((0,reactiveUtils/* watch */.wB)((()=>({symbol:s.symbol,value:s.value,label:s.label,description:s.description})),((e,t)=>{e!==t&&(this._updateGroupsFromInfos(),this._isInfosSource=!0)}),{sync:!0}));this.addHandles(t,R)}}_watchUniqueValueGroups(){this.removeHandles(P);const{uniqueValueGroups:e}=this;if(e){const t=[];for(const s of e){t.push((0,reactiveUtils/* watch */.wB)((()=>({classes:s.classes})),((e,t)=>{e!==t&&(this._updateInfosFromGroups(),this._isInfosSource=!1)}),{sync:!0}));for(const e of s.classes??[])t.push((0,reactiveUtils/* watch */.wB)((()=>({symbol:e.symbol,values:e.values,label:e.label,description:e.description})),((e,t)=>{e!==t&&(this._updateInfosFromGroups(),this._isInfosSource=!1)}),{sync:!0}))}this.addHandles(t,P)}}_updateInfosFromGroups(){if(!this.uniqueValueGroups)return this._set("uniqueValueInfos",null),this._updateValueInfoMap(),void this._watchUniqueValueInfos();const e=[],{field:t,field2:s,field3:i,fieldDelimiter:o,uniqueValueGroups:l,valueExpression:r}=this;if(!t&&!r)return this._set("uniqueValueInfos",e),this._updateValueInfoMap(),void this._watchUniqueValueInfos();const u=!(!t||!s);for(const n of l)for(const t of n.classes??[]){const{symbol:l,label:r,values:n,description:a}=t;for(const t of n??[]){const{value:n,value2:p,value3:f}=t,d=[n];s&&d.push(p),i&&d.push(f);const c=u?d.join(o||""):d[0];e.push(new UniqueValueInfo/* default */.A({symbol:l,label:r,value:c,description:a}))}}this._set("uniqueValueInfos",e),this._updateValueInfoMap(),this._watchUniqueValueInfos()}_updateGroupsFromInfos(e=!1){if(!this.uniqueValueInfos)return this._set("uniqueValueGroups",null),void this._watchUniqueValueGroups();const{field:t,field2:s,valueExpression:i,fieldDelimiter:o,uniqueValueInfos:l}=this;if(!t&&!i||!l.length)return this._set("uniqueValueGroups",[]),void this._watchUniqueValueGroups();const r=!(!t||!s),u=l.map((e=>{const{symbol:t,label:s,value:i,description:l}=e,[u,n,a]=r?i?.toString()?.split(o||"")||[]:[i];return new UniqueValueClass_u({symbol:t,label:s,description:l,values:[new UniqueValue_u({value:u,value2:n,value3:a})]})})),n=[new UniqueValueGroup_i({classes:u})];e&&Object.freeze(n),this._set("uniqueValueGroups",n),this._watchUniqueValueGroups()}_getUniqueValueInfo(e,t){return this.valueExpression?this._getUnqiueValueInfoForExpression(e,t):this._getUnqiueValueInfoForFields(e)}_getUnqiueValueInfoForExpression(e,t){const{viewingMode:s,scale:i,spatialReference:o,arcade:l,timeZone:r}=t??{};let u=this._cache.compiledFunc;const n=l.arcadeUtils;if(!u){const e=n.createSyntaxTree(this.valueExpression);u=n.createFunction(e),this._cache.compiledFunc=u}const a=n.executeFunction(u,n.createExecContext(e,n.getViewInfo({viewingMode:s,scale:i,spatialReference:o}),r));return this._valueInfoMap[a+""]}_getUnqiueValueInfoForFields(e){const t=this.field,s=e.attributes;let i;if("function"!=typeof t&&this.field2){const e=this.field2,o=this.field3,l=[];t&&l.push(s[t]),e&&l.push(s[e]),o&&l.push(s[o]),i=l.join(this.fieldDelimiter||"")}else"function"==typeof t?i=t(e):t&&(i=s[t]);return this._valueInfoMap[i+""]}static fromPortalStyle(e,t){const s=new E(t?.properties);s._set("styleOrigin",Object.freeze({styleName:e})),s._set("portal",t?.portal||Portal/* default */.A.getDefault());const i=s.populateFromStyle();return i.catch((t=>{N.error(`#fromPortalStyle('${e}'[, ...])`,"Failed to create unique value renderer from style name",t)})),i}static fromStyleUrl(e,t){const s=new E(t?.properties);s._set("styleOrigin",Object.freeze({styleUrl:e}));const i=s.populateFromStyle();return i.catch((t=>{N.error(`#fromStyleUrl('${e}'[, ...])`,"Failed to create unique value renderer from style URL",t)})),i}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],k.prototype,"_cache",null),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({uniqueValue:"unique-value"})],k.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* rendererBackgroundFillSymbolProperty */.As)],k.prototype,"backgroundFillSymbol",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({value:null,json:{type:String,read:{source:"field1"},write:{target:"field1"}}})],k.prototype,"field",null),(0,tslib_es6._)([(0,cast/* cast */.w)("field")],k.prototype,"castField",null),(0,tslib_es6._)([(0,writer/* writer */.K)("field")],k.prototype,"writeField",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,value:null,json:{write:!0}})],k.prototype,"field2",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,value:null,json:{write:!0}})],k.prototype,"field3",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{name:"drawInClassOrder",default:!1,write:!0,origins:{"web-scene":{write:!1}}}})],k.prototype,"orderByClassesEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,value:null,json:{write:!0}})],k.prototype,"valueExpression",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],k.prototype,"valueExpressionTitle",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:LegendOptions/* LegendOptions */.q,json:{write:!0}})],k.prototype,"legendOptions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],k.prototype,"defaultLabel",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)((0,object/* deepMerge */.$N)({...commonProperties/* rendererSymbolProperty */.z4},{json:{write:{overridePolicy(){return{enabled:!this._isDefaultSymbolDerived}}},origins:{"web-scene":{write:{overridePolicy(){return{enabled:!this._isDefaultSymbolDerived}}}}}}}))],k.prototype,"defaultSymbol",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,value:null,json:{write:!0}})],k.prototype,"fieldDelimiter",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Portal/* default */.A,readOnly:!0})],k.prototype,"portal",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("portal",["styleName"])],k.prototype,"readPortal",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{write:{enabled:!1,overridePolicy:()=>({enabled:!0})}}})],k.prototype,"styleOrigin",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("styleOrigin",["styleName","styleUrl"])],k.prototype,"readStyleOrigin",null),(0,tslib_es6._)([(0,writer/* writer */.K)("styleOrigin",{styleName:{type:String},styleUrl:{type:String}})],k.prototype,"writeStyleOrigin",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[UniqueValueGroup_i],json:{read:{source:["uniqueValueGroups","uniqueValueInfos"],reader:(e,t,s)=>(t.uniqueValueGroups||z(t)).map((e=>UniqueValueGroup_i.fromJSON(e,s)))},write:{overridePolicy(){return this.styleOrigin?{enabled:!1}:{enabled:!0}}}}})],k.prototype,"uniqueValueGroups",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[UniqueValueInfo/* default */.A],json:{read:!1,write:{overridePolicy(){return this.styleOrigin?{enabled:!1}:{enabled:!0}}}}})],k.prototype,"uniqueValueInfos",null),k=E=(0,tslib_es6._)([(0,subclass/* subclass */.$)(M)],k);const A=k;


/***/ }),

/***/ 63501:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h: () => (/* binding */ v)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/fieldUtils.js
var fieldUtils = __webpack_require__(42453);
;// ../node_modules/@arcgis/core/renderers/support/randomRotationExpression.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(e){return e.match(t)?.[1]?.replace(/\\'/g,"'")??null}const t=/^hash\(\$feature\['((\\'|[^'])+)'\]\) \* 8\.381e-8$/;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/visualVariables/VisualVariable.js
var VisualVariable = __webpack_require__(57860);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/visualVariables/support/ColorStop.js
var ColorStop = __webpack_require__(5001);
;// ../node_modules/@arcgis/core/renderers/visualVariables/ColorVariable.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var i;let p=i=class extends VisualVariable/* default */.A{constructor(t){super(t),this.type="color",this.normalizationField=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null}}set stops(t){t&&Array.isArray(t)&&(t=t.filter((t=>!!t))).sort(((t,s)=>t.value-s.value)),this._set("stops",t)}clone(){return new i({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map((t=>t.clone())),legendOptions:this.legendOptions?.clone()})}getAttributeHash(){return`${super.getAttributeHash()}-${this.normalizationField}`}_interpolateData(){return this.stops&&this.stops.map((t=>t.value||0))}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],p.prototype,"cache",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["color"],json:{type:["colorInfo"]}})],p.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"normalizationField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[ColorStop/* default */.A],json:{write:!0}})],p.prototype,"stops",null),p=i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.visualVariables.ColorVariable")],p);const a=p;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/webdoc/support/opacityUtils.js
var opacityUtils = __webpack_require__(48904);
;// ../node_modules/@arcgis/core/renderers/visualVariables/support/OpacityStop.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var l;let u=l=class extends JSONSupport/* JSONSupport */.oY{constructor(r){super(r),this.label=null,this.opacity=null,this.value=null}readOpacity(r,t){return (0,opacityUtils/* transparencyToOpacity */.D)(t.transparency)}writeOpacity(r,t,o){t[o]=(0,opacityUtils/* opacityToTransparency */.p)(r)}clone(){return new l({label:this.label,opacity:this.opacity,value:this.value})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],u.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{type:ensureType/* Integer */.jz,write:{target:"transparency"}}})],u.prototype,"opacity",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("opacity",["transparency"])],u.prototype,"readOpacity",null),(0,tslib_es6._)([(0,writer/* writer */.K)("opacity")],u.prototype,"writeOpacity",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],u.prototype,"value",void 0),u=l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.visualVariables.support.OpacityStop")],u);const y=u;

;// ../node_modules/@arcgis/core/renderers/visualVariables/OpacityVariable.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var OpacityVariable_i;let OpacityVariable_a=OpacityVariable_i=class extends VisualVariable/* default */.A{constructor(t){super(t),this.type="opacity",this.normalizationField=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null}}set stops(t){t&&Array.isArray(t)&&(t=t.filter((t=>!!t))).sort(((t,s)=>t.value-s.value)),this._set("stops",t)}clone(){return new OpacityVariable_i({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map((t=>t.clone())),legendOptions:this.legendOptions?.clone()})}getAttributeHash(){return`${super.getAttributeHash()}-${this.normalizationField}`}_interpolateData(){return this.stops&&this.stops.map((t=>t.value||0))}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],OpacityVariable_a.prototype,"cache",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["opacity"],json:{type:["transparencyInfo"]}})],OpacityVariable_a.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],OpacityVariable_a.prototype,"normalizationField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[y],json:{write:!0}})],OpacityVariable_a.prototype,"stops",null),OpacityVariable_a=OpacityVariable_i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.visualVariables.OpacityVariable")],OpacityVariable_a);const OpacityVariable_p=OpacityVariable_a;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/visualVariables/RotationVariable.js
var RotationVariable = __webpack_require__(68090);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/visualVariables/SizeVariable.js + 1 modules
var SizeVariable = __webpack_require__(14977);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(52495);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Warning.js
var Warning = __webpack_require__(68659);
;// ../node_modules/@arcgis/core/renderers/visualVariables/VisualVariableFactory.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const VisualVariableFactory_u={color:a,size:SizeVariable/* default */.A,opacity:OpacityVariable_p,rotation:RotationVariable/* default */.A},b=new jsonMap/* JSONMap */.J({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"}),h=/^\[([^\]]+)\]$/i;let m=class extends Accessor/* default */.A{constructor(){super(...arguments),this.colorVariables=null,this.opacityVariables=null,this.rotationVariables=null,this.sizeVariables=null}set visualVariables(r){if(this._resetVariables(),r=r&&r.filter((r=>!!r)),r?.length){for(const s of r)switch(s.type){case"color":this.colorVariables.push(s);break;case"opacity":this.opacityVariables.push(s);break;case"rotation":this.rotationVariables.push(s);break;case"size":this.sizeVariables.push(s)}if(this.sizeVariables.length){this.sizeVariables.some((r=>!!r.target))&&r.sort(((r,s)=>{let e=null;return e=r.target===s.target?0:r.target?1:-1,e}))}for(let s=0;s<r.length;s++){r[s].index=s}this._set("visualVariables",r)}else this._set("visualVariables",r)}readVariables(r,s,e){const{rotationExpression:a,rotationType:i}=s,l=a?.match(h),n=l?.[1];if(n&&(r||(r=[]),r.push({type:"rotationInfo",rotationType:i,field:n})),r)return r.map((r=>{const s=b.read(r.type),a=VisualVariableFactory_u[s];a||(Logger/* default */.A.getLogger(this).warn(`Unknown variable type: ${s}`),e?.messages&&e.messages.push(new Warning/* default */.A("visual-variable:unsupported",`visualVariable of type '${s}' is not supported`,{definition:r,context:e})));const i=new a;return i.read(r,e),i}))}writeVariables(r,s){const e=[];for(const o of r){const r=o.toJSON(s);r&&e.push(r)}return e}_resetVariables(){this.colorVariables=[],this.opacityVariables=[],this.rotationVariables=[],this.sizeVariables=[]}};(0,tslib_es6._)([(0,property/* property */.MZ)()],m.prototype,"visualVariables",null),m=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.visualVariables.VisualVariableFactory")],m);const V=m;

;// ../node_modules/@arcgis/core/renderers/mixins/VisualVariablesMixin.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const VisualVariablesMixin_m={base:VisualVariable/* default */.A,key:"type",typeMap:{opacity:OpacityVariable_p,color:a,rotation:RotationVariable/* default */.A,size:SizeVariable/* default */.A}},v=l=>{let u=class extends l{constructor(){super(...arguments),this._vvFactory=new V}set visualVariables(r){this._vvFactory.visualVariables=r,this._set("visualVariables",this._vvFactory.visualVariables)}readVisualVariables(r,a,s){return this._vvFactory.readVariables(r,a,s)}writeVisualVariables(r,a,s,i){a[s]=this._vvFactory.writeVariables(r,i)}get arcadeRequiredForVisualVariables(){if(!this.visualVariables)return!1;for(const r of this.visualVariables)if(r.arcadeRequired)return!0;return!1}hasVisualVariables(r,a){return r?this.getVisualVariablesForType(r,a).length>0:this.getVisualVariablesForType("size",a).length>0||this.getVisualVariablesForType("color",a).length>0||this.getVisualVariablesForType("opacity",a).length>0||this.getVisualVariablesForType("rotation",a).length>0}getVisualVariablesForType(r,a){const s=this.visualVariables;return s?s.filter((s=>s.type===r&&("string"==typeof a?s.target===a:!1!==a||!s.target))):[]}async collectVVRequiredFields(r,a){let s=[];this.visualVariables&&(s=s.concat(this.visualVariables));for(const i of s)i&&(i.field&&(0,fieldUtils/* collectField */.rq)(r,a,i.field),i.normalizationField&&(0,fieldUtils/* collectField */.rq)(r,a,i.normalizationField),i.valueExpression&&(VisualVariablesMixin_y(i.valueExpression,r,a)||await (0,fieldUtils/* collectArcadeFieldNames */.Dx)(r,a,i.valueExpression)))}};return (0,tslib_es6._)([(0,property/* property */.MZ)({types:[VisualVariablesMixin_m],value:null,json:{write:!0}})],u.prototype,"visualVariables",null),(0,tslib_es6._)([(0,reader/* reader */.w)("visualVariables",["visualVariables","rotationType","rotationExpression"])],u.prototype,"readVisualVariables",null),(0,tslib_es6._)([(0,writer/* writer */.K)("visualVariables")],u.prototype,"writeVisualVariables",null),u=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.mixins.VisualVariablesMixin")],u),u};function VisualVariablesMixin_y(r,a,s){const i=e(r);return null!=i&&((0,fieldUtils/* collectField */.rq)(a,s,i),!0)}


/***/ }),

/***/ 93101:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96220);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(539);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4130);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73446);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var n;let u=n=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY{constructor(r){super(r),this.color=null,this.field=null,this.label=null,this.valueExpression=null,this.valueExpressionTitle=null}castField(r){return null==r?r:"function"==typeof r?(_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.getLogger(this).error(".field: field must be a string value"),null):(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__/* .ensureString */ .GX)(r)}getAttributeHash(){return`${this.field}-${this.valueExpression}`}clone(){return new n({color:this.color?.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,json:{type:[Number],write:!0}})],u.prototype,"color",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:!0}})],u.prototype,"field",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__/* .cast */ .w)("field")],u.prototype,"castField",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:!0}})],u.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:!0}})],u.prototype,"valueExpression",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:!0}})],u.prototype,"valueExpressionTitle",void 0),u=n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.renderers.support.AttributeColorInfo")],u);const a=u;


/***/ }),

/***/ 20699:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ j)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
;// ../node_modules/@arcgis/core/renderers/support/AuthoringInfoClassBreakInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var t;let p=t=class extends JSONSupport/* JSONSupport */.oY{constructor(r){super(r),this.minValue=0,this.maxValue=0}clone(){return new t({minValue:this.minValue,maxValue:this.maxValue})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],p.prototype,"minValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],p.prototype,"maxValue",void 0),p=t=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderer.support.AuthoringInfoClassBreakInfo")],p);

;// ../node_modules/@arcgis/core/renderers/support/AuthoringInfoFieldInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var n;let AuthoringInfoFieldInfo_p=n=class extends JSONSupport/* JSONSupport */.oY{constructor(o){super(o),this.field="",this.normalizationField="",this.label="",this.classBreakInfos=[]}clone(){return new n({field:this.field,normalizationField:this.normalizationField,label:this.label,classBreakInfos:(0,lang/* clone */.o8)(this.classBreakInfos)})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],AuthoringInfoFieldInfo_p.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],AuthoringInfoFieldInfo_p.prototype,"normalizationField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],AuthoringInfoFieldInfo_p.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[p],json:{write:!0}})],AuthoringInfoFieldInfo_p.prototype,"classBreakInfos",void 0),AuthoringInfoFieldInfo_p=n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.AuthoringInfoFieldInfo")],AuthoringInfoFieldInfo_p);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(4130);
;// ../node_modules/@arcgis/core/renderers/support/AuthoringInfoVisualVariable.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var AuthoringInfoVisualVariable_n;const l=new jsonMap/* JSONMap */.J({percentTotal:"percent-of-total",ratio:"ratio",percent:"percent"}),AuthoringInfoVisualVariable_p=new jsonMap/* JSONMap */.J({sizeInfo:"size",colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation"}),a={key:e=>"number"==typeof e?"number":"string",typeMap:{number:Number,string:String},base:null},u=["high-to-low","above-and-below","centered-on","extremes"],m=[...new Set([...["high-to-low","above-and-below","centered-on","extremes","90-10","above","below"],...["high-to-low","above-and-below","90-10","above","below"]])],y=["seconds","minutes","hours","days","months","years"];let d=AuthoringInfoVisualVariable_n=class extends JSONSupport/* JSONSupport */.oY{constructor(e){super(e),this.endTime=null,this.field=null,this.maxSliderValue=null,this.minSliderValue=null,this.startTime=null,this.type=null,this.units=null}castEndTime(e){return"string"==typeof e||"number"==typeof e?e:null}castStartTime(e){return"string"==typeof e||"number"==typeof e?e:null}get style(){return"color"===this.type?this._get("style"):null}set style(e){this._set("style",e)}get theme(){return"color"===this.type||"size"===this.type?this._get("theme")||"high-to-low":null}set theme(e){this._set("theme",e)}clone(){return new AuthoringInfoVisualVariable_n({endTime:this.endTime,field:this.field,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,startTime:this.startTime,style:this.style,theme:this.theme,type:this.type,units:this.units})}};(0,tslib_es6._)([(0,property/* property */.MZ)({types:a,json:{write:!0}})],d.prototype,"endTime",void 0),(0,tslib_es6._)([(0,cast/* cast */.w)("endTime")],d.prototype,"castEndTime",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],d.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],d.prototype,"maxSliderValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],d.prototype,"minSliderValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:a,json:{write:!0}})],d.prototype,"startTime",void 0),(0,tslib_es6._)([(0,cast/* cast */.w)("startTime")],d.prototype,"castStartTime",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:l.apiValues,value:null,json:{type:l.jsonValues,read:l.read,write:l.write}})],d.prototype,"style",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:m,value:null,json:{type:m,origins:{"web-scene":{type:u,write:{writer:(e,t)=>{u.includes(e)&&(t.theme=e)}}}},write:!0}})],d.prototype,"theme",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:AuthoringInfoVisualVariable_p.apiValues,json:{type:AuthoringInfoVisualVariable_p.jsonValues,read:AuthoringInfoVisualVariable_p.read,write:AuthoringInfoVisualVariable_p.write}})],d.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:y,json:{type:y,write:!0}})],d.prototype,"units",void 0),d=AuthoringInfoVisualVariable_n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.AuthoringInfoVisualVariable")],d);const h=d;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/colorRamps.js
var colorRamps = __webpack_require__(59740);
;// ../node_modules/@arcgis/core/renderers/support/AuthoringInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var c;const AuthoringInfo_h=new jsonMap/* JSONMap */.J({esriClassifyDefinedInterval:"defined-interval",esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation"}),AuthoringInfo_y=new jsonMap/* JSONMap */.J({pieChart:"pie-chart",classedSize:"class-breaks-size",classedColor:"class-breaks-color",univariateColorSize:"univariate-color-size",relationship:"relationship",predominance:"predominance",dotDensity:"dot-density",flow:"flow"}),AuthoringInfo_m=new jsonMap/* JSONMap */.J({classedSize:"class-breaks-size",classedColor:"class-breaks-color",univariateColorSize:"univariate-color-size",relationship:"relationship",predominance:"predominance",dotDensity:"dot-density"}),f=["inches","feet","yards","miles","nautical-miles","millimeters","centimeters","decimeters","meters","kilometers","decimal-degrees"],v=["high-to-low","above-and-below","above","below","90-10"],w=["flow-line","wave-front"],b=["caret","circle-caret","arrow","circle-arrow","plus-minus","circle-plus-minus","square","circle","triangle","happy-sad","thumb","custom"];let g=c=class extends JSONSupport/* JSONSupport */.oY{constructor(e){super(e),this.colorRamp=null,this.fadeRatio=null,this.isAutoGenerated=!1,this.lengthUnit=null,this.maxSliderValue=null,this.minSliderValue=null,this.visualVariables=null}get classificationMethod(){const e=this._get("classificationMethod"),t=this.type;return t&&"relationship"!==t?"class-breaks-size"===t||"class-breaks-color"===t?e||"manual":null:e}set classificationMethod(e){this._set("classificationMethod",e)}readColorRamp(e){return e?(0,colorRamps/* fromJSON */.r)(e):void 0}get fields(){return this.type&&"predominance"!==this.type?null:this._get("fields")}set fields(e){this._set("fields",e)}get field1(){return this.type&&"relationship"!==this.type?null:this._get("field1")}set field1(e){this._set("field1",e)}get field2(){return this.type&&"relationship"!==this.type?null:this._get("field2")}set field2(e){this._set("field2",e)}get flowTheme(){return"flow"===this.type?this._get("flowTheme"):null}set flowTheme(e){this._set("flowTheme",e)}get focus(){return this.type&&"relationship"!==this.type?null:this._get("focus")}set focus(e){this._set("focus",e)}get numClasses(){return this.type&&"relationship"!==this.type?null:this._get("numClasses")}set numClasses(e){this._set("numClasses",e)}get statistics(){return"univariate-color-size"===this.type&&"above-and-below"===this.univariateTheme?this._get("statistics"):null}set statistics(e){this._set("statistics",e)}get standardDeviationInterval(){const e=this.type;return e&&"relationship"!==e&&"class-breaks-size"!==e&&"class-breaks-color"!==e||this.classificationMethod&&"standard-deviation"!==this.classificationMethod?null:this._get("standardDeviationInterval")}set standardDeviationInterval(e){this._set("standardDeviationInterval",e)}get type(){return this._get("type")}set type(e){let t=e;"classed-size"===e?t="class-breaks-size":"classed-color"===e&&(t="class-breaks-color"),this._set("type",t)}get univariateSymbolStyle(){return"univariate-color-size"===this.type&&"above-and-below"===this.univariateTheme?this._get("univariateSymbolStyle"):null}set univariateSymbolStyle(e){this._set("univariateSymbolStyle",e)}get univariateTheme(){return"univariate-color-size"===this.type?this._get("univariateTheme"):null}set univariateTheme(e){this._set("univariateTheme",e)}clone(){return new c({classificationMethod:this.classificationMethod,colorRamp:(0,lang/* clone */.o8)(this.colorRamp),fadeRatio:(0,lang/* clone */.o8)(this.fadeRatio),fields:this.fields?.slice(0),field1:(0,lang/* clone */.o8)(this.field1),field2:(0,lang/* clone */.o8)(this.field2),isAutoGenerated:this.isAutoGenerated,focus:this.focus,numClasses:this.numClasses,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,lengthUnit:this.lengthUnit,statistics:this.statistics,standardDeviationInterval:this.standardDeviationInterval,type:this.type,visualVariables:this.visualVariables&&this.visualVariables.map((e=>e.clone())),univariateSymbolStyle:this.univariateSymbolStyle,univariateTheme:this.univariateTheme,flowTheme:this.flowTheme})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:AuthoringInfo_h.apiValues,value:null,json:{type:AuthoringInfo_h.jsonValues,read:AuthoringInfo_h.read,write:AuthoringInfo_h.write,origins:{"web-document":{default:"manual",type:AuthoringInfo_h.jsonValues,read:AuthoringInfo_h.read,write:AuthoringInfo_h.write}}}})],g.prototype,"classificationMethod",null),(0,tslib_es6._)([(0,property/* property */.MZ)({types:colorRamps/* types */.g,json:{write:!0}})],g.prototype,"colorRamp",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("colorRamp")],g.prototype,"readColorRamp",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],g.prototype,"fadeRatio",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],value:null,json:{write:!0}})],g.prototype,"fields",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:AuthoringInfoFieldInfo_p,value:null,json:{write:!0}})],g.prototype,"field1",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:AuthoringInfoFieldInfo_p,value:null,json:{write:!0}})],g.prototype,"field2",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:w,value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],g.prototype,"flowTheme",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["HH","HL","LH","LL"],value:null,json:{write:!0}})],g.prototype,"focus",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1}}}})],g.prototype,"isAutoGenerated",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,value:null,json:{type:ensureType/* Integer */.jz,write:!0}})],g.prototype,"numClasses",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:f,json:{type:f,read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],g.prototype,"lengthUnit",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],g.prototype,"maxSliderValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],g.prototype,"minSliderValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Object,value:null,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],g.prototype,"statistics",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[.25,.33,.5,1],value:null,json:{type:[.25,.33,.5,1],write:!0}})],g.prototype,"standardDeviationInterval",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:AuthoringInfo_y.apiValues,value:null,json:{type:AuthoringInfo_y.jsonValues,read:AuthoringInfo_y.read,write:AuthoringInfo_y.write,origins:{"web-scene":{type:AuthoringInfo_m.jsonValues,write:{writer:AuthoringInfo_m.write,overridePolicy:e=>({enabled:"flow"!==e})}}}}})],g.prototype,"type",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[h],json:{write:!0}})],g.prototype,"visualVariables",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:b,value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],g.prototype,"univariateSymbolStyle",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:v,value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],g.prototype,"univariateTheme",null),g=c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.AuthoringInfo")],g);const j=g;


/***/ }),

/***/ 87729:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _commonProperties_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16758);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var i;let l=i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(s){super(s),this.description=null,this.label=null,this.minValue=null,this.maxValue=0,this.symbol=null}clone(){return new i({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,symbol:this.symbol?this.symbol.clone():null})}getMeshHash(){const s=JSON.stringify(this.symbol);return`${this.minValue}.${this.maxValue}.${s}`}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],l.prototype,"description",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],l.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],l.prototype,"minValue",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],l.prototype,"maxValue",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)(_commonProperties_js__WEBPACK_IMPORTED_MODULE_7__/* .requiredRendererSymbolProperty */ .Wp)],l.prototype,"symbol",void 0),l=i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.renderers.support.ClassBreakInfo")],l);const a=l;


/***/ }),

/***/ 57081:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DictionaryLoader: () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96220);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86394);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98849);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(539);
/* harmony import */ var _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89926);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40189);
/* harmony import */ var _core_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(96274);
/* harmony import */ var _core_Version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50579);
/* harmony import */ var _layers_support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79005);
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(28965);
/* harmony import */ var _symbols_CIMSymbol_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(54394);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const h="esri.renderers.support.DictionaryLoader",u={type:"CIMSimpleLineCallout",lineSymbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",width:.5,color:[0,0,0,255]}]}};class y{constructor(e,t,s){this.config=null,this.fieldMap=null,this.url=null,this._ongoingRequests=new Map,this._symbolCache=new _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_5__/* .LRUCache */ .q(100),this._dictionaryVersion=null,this._fieldIndex=null,this._dictionaryPromise=null,this.url=e,this.config=t,this.fieldMap=s}getSymbolFields(){return this._symbolFields}async getSymbolAsync(t,s){let i;this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(s));try{i=await this._dictionaryPromise}catch(d){if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .isAbortError */ .zf)(d))return this._dictionaryPromise=null,null}const o=this._dictionaryVersion&&this._dictionaryVersion.since(4,0),l={};if(this.fieldMap)for(const e of this._symbolFields){const s=this._getFieldName(this.fieldMap[e]);if(s){const i=t.attributes[s];l[e]=o?i:null!=i?""+t.attributes[s]:""}else l[e]=""}let a=null;try{a=i?.(l,s)}catch(g){return null}if(!a||"string"!=typeof a)return null;const c=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_7__/* .numericHash */ .Wm)(a).toString(),m=this._symbolCache.get(c);if(m)return m.catch((()=>{this._symbolCache.pop(c)})),m;const f=a.split(";"),h=[],u=[];for(const r of f)if(r)if(r.includes("po:")){const t=r.substr(3).split("|");if(3===t.length){const s=t[0],i=t[1];let o=t[2];if("DashTemplate"===i)o=o.split(" ").map((e=>Number(e)));else if("Color"===i){const t=new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(o).toRgba();o=[t[0],t[1],t[2],255*t[3]]}else o=Number(o);u.push({primitiveName:s,propertyName:i,value:o})}}else if(r.includes("|")){for(const e of r.split("|"))if(this._itemNames.has(e)){h.push(e);break}}else this._itemNames.has(r)&&h.push(r);const y=null==t.geometry||!t.geometry.hasZ&&"point"===t.geometry.type,p=this._cimPartsToCIMSymbol(h,u,y,s);return this._symbolCache.put(c,p,1),p}async fetchResources(e){if(this._dictionaryPromise)return this._dictionaryPromise;if(!this.url)return void _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.getLogger(h).error("no valid URL!");const o=(0,_request_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this.url+"/resources/styles/dictionary-info.json",{responseType:"json",query:{f:"json"},signal:null!=e?e.signal:null}),[{data:r}]=await Promise.all([o,(0,_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_10__/* .loadArcade */ .lw)()]);if(!r)throw this._dictionaryPromise=null,new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A("esri.renderers.DictionaryRenderer","Bad dictionary data!");const{authoringInfo:n,dictionary_version:f,expression:u,itemsNames:y}=r,p=u;let d=!1;f&&(this._dictionaryVersion=_core_Version_js__WEBPACK_IMPORTED_MODULE_8__/* .Version */ .R.parse(f),d=this._dictionaryVersion.since(4,0)),this._refSymbolUrlTemplate=this.url+"/"+r.cimRefTemplateUrl,this._itemNames=new Set(y),this._symbolFields=n.symbol;const g={};if(this.config){const e=this.config;for(const t in e)g[t]=e[t]}if(n.configuration)for(const t of n.configuration)g.hasOwnProperty(t.name)||(g[t.name]=t.value);const b=[];if(e?.fields&&this.fieldMap)for(const t of this._symbolFields){const s=this.fieldMap[t],i=e.fields.filter((e=>e.name.toLowerCase()===s?.toLowerCase()));i.length>0&&b.push({...i[0],type:d?i[0].type:"esriFieldTypeString"})}b.length>0&&(this._fieldIndex=new _layers_support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A(b));const _=(0,_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_10__/* .createDictionaryExpression */ .xR)(p,null!=e?e.spatialReference:null,b,g).then((e=>{const t={scale:0};return(s,i)=>{if(null==e)return null;const o=e.repurposeFeature({geometry:null,attributes:s});return t.scale=null!=i?i.scale??void 0:void 0,e.evaluate({$feature:o,$view:t},e.services)}})).catch((e=>(_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.getLogger(h).error("Creating dictinoary expression failed:",e),null)));return this._dictionaryPromise=_,_}async _cimPartsToCIMSymbol(e,t,s,i){const o=new Array(e.length);for(let l=0;l<e.length;l++)o[l]=this._getSymbolPart(e[l],i);const r=await Promise.all(o),n=this.fieldMap;if(n)for(const l of r)p(l,n);return new _symbols_CIMSymbol_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A({data:this._combineSymbolParts(r,t,s)})}async _getSymbolPart(e,s){if(this._ongoingRequests.has(e))return this._ongoingRequests.get(e).then((e=>e.data));const i=this._refSymbolUrlTemplate.replaceAll(/\{itemName\}/gi,e),o=(0,_request_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(i,{responseType:"json",query:{f:"json"},...s});this._ongoingRequests.set(e,o);try{return(await o).data}catch(r){throw this._ongoingRequests.delete(e),r}}_combineSymbolParts(e,t,s){if(!e||0===e.length)return null;const i={...e[0]};if(e.length>1){i.symbolLayers=[];for(const t of e){const e=t;i.symbolLayers.unshift(...e.symbolLayers)}}return s&&(i.callout=u),{type:"CIMSymbolReference",symbol:i,primitiveOverrides:t}}_getFieldName(e){if(null!==this._fieldIndex){const t=this._fieldIndex.get(e);return t?t.name:e}return e}}function p(e,t){if(!e)return;const s=e.symbolLayers;if(!s)return;let i=s.length;for(;i--;){const e=s[i];if(e&&!1!==e.enable&&"CIMVectorMarker"===e.type)d(e,t)}}function d(e,t){const s=e.markerGraphics;if(s)for(const i of s){if(!i)continue;const e=i.symbol;if(e)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":p(e,t);break;case"CIMTextSymbol":e.fieldMap=t}}}


/***/ }),

/***/ 50769:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96220);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var c;let i=c=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY{constructor(o){super(o),this.color=null,this.ratio=null}clone(){return new c({color:this.color,ratio:this.ratio})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,json:{type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__/* .Integer */ .jz],default:null,write:!0}})],i.prototype,"color",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:Number,json:{write:!0}})],i.prototype,"ratio",void 0),i=c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.renderers.support.HeatmapColorStop")],i);const a=i;


/***/ }),

/***/ 38785:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var s;let p=s=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(){super(...arguments),this.title=null}clone(){return new s({title:this.title})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],p.prototype,"title",void 0),p=s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.renderers.support.LegendOptions")],p);


/***/ }),

/***/ 3324:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _commonProperties_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16758);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var l;let p=l=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(o){super(o),this.description=null,this.label=null,this.symbol=null,this.value=null}clone(){return new l({value:this.value,description:this.description,label:this.label,symbol:this.symbol?this.symbol.clone():null})}getMeshHash(){const o=JSON.stringify(this.symbol?.toJSON());return`${this.value}.${o}`}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],p.prototype,"description",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],p.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)(_commonProperties_js__WEBPACK_IMPORTED_MODULE_7__/* .requiredRendererSymbolProperty */ .Wp)],p.prototype,"symbol",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)(_commonProperties_js__WEBPACK_IMPORTED_MODULE_7__/* .uniqueValueProperty */ .Ug)],p.prototype,"value",void 0),p=l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.renderers.support.UniqueValueInfo")],p);const n=p;


/***/ }),

/***/ 16758:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   As: () => (/* binding */ m),
/* harmony export */   Ug: () => (/* binding */ w),
/* harmony export */   Wp: () => (/* binding */ n),
/* harmony export */   z4: () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30822);
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76724);
/* harmony import */ var _core_accessorSupport_extensions_serializableProperty_reader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61985);
/* harmony import */ var _symbols_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38463);
/* harmony import */ var _symbols_Symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77441);
/* harmony import */ var _symbols_PolygonSymbol3D_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65216);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const y={types:_symbols_js__WEBPACK_IMPORTED_MODULE_0__/* .symbolTypesRenderer */ .xK,json:{write:{writer:_symbols_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .write */ .M9},origins:{"web-scene":{types:_symbols_js__WEBPACK_IMPORTED_MODULE_0__/* .symbolTypesRenderer3D */ .On,write:{writer:_symbols_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .write */ .M9},read:{reader:(0,_core_accessorSupport_extensions_serializableProperty_reader_js__WEBPACK_IMPORTED_MODULE_2__/* .createTypeReader */ .C)({types:_symbols_js__WEBPACK_IMPORTED_MODULE_0__/* .symbolTypesRenderer3D */ .On})}}}}},n=(0,_core_object_js__WEBPACK_IMPORTED_MODULE_1__/* .deepMerge */ .$N)({json:{origins:{"web-scene":{write:{isRequired:!0}}}}},y),m={types:{base:_symbols_Symbol_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,key:"type",typeMap:{"simple-fill":_symbols_js__WEBPACK_IMPORTED_MODULE_0__/* .symbolTypes */ .Es.typeMap["simple-fill"],"picture-fill":_symbols_js__WEBPACK_IMPORTED_MODULE_0__/* .symbolTypes */ .Es.typeMap["picture-fill"],"polygon-3d":_symbols_js__WEBPACK_IMPORTED_MODULE_0__/* .symbolTypes */ .Es.typeMap["polygon-3d"]}},json:{write:{writer:_symbols_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .write */ .M9},origins:{"web-scene":{type:_symbols_PolygonSymbol3D_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,write:{writer:_symbols_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .write */ .M9}}}}},w={cast:e=>null==e||"string"==typeof e||"number"==typeof e?e:`${e}`,json:{type:String,write:{writer:(e,r)=>{r.value=e?.toString()}}}};


/***/ }),

/***/ 27927:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Lh: () => (/* binding */ l),
/* harmony export */   O3: () => (/* binding */ u),
/* harmony export */   PU: () => (/* binding */ c),
/* harmony export */   YW: () => (/* binding */ y),
/* harmony export */   ex: () => (/* binding */ a),
/* harmony export */   hv: () => (/* binding */ m),
/* harmony export */   oQ: () => (/* binding */ s),
/* harmony export */   zp: () => (/* binding */ i)
/* harmony export */ });
/* unused harmony exports createHeatmapImageData, createValueFunctionCursor */
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92504);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89882);
/* harmony import */ var _chunks_vec4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25102);
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52712);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const a=2.4;function i(t){return (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .px2pt */ .PN)(t*a)}function c(t){return (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .pt2px */ .Lz)(t)/a}function f(r,n,e,a){let{color:i,ratio:c}=n,{color:f,ratio:u}=e;if(u===c){const t=1e-6;1===u?c-=t:u+=t}const s=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .clamp */ .qE)((a-c)/(u-c),0,1);(0,_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_1__.l)(r,i.toArray(),f.toArray(),s)}function u(t){const r=512,n=new Uint8ClampedArray(4*r);if(t=t.filter((({ratio:t})=>t>=0&&t<=1)).sort(((t,r)=>t.ratio-r.ratio)).map((({color:t,ratio:r})=>({color:t,ratio:Math.max(r,.001)}))),t.length<1)return n;let o=t[0],a=t[0],i=1;const c=(0,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__.c)();for(let e=0;e<r;e++){const u=(e+.5)/r;for(;u>a.ratio&&i<t.length;)o=a,a=t[i++];f(c,o,a,u),n.set(c,4*e)}return n}function s(t,r,o,e){const{radius:a,fieldOffset:i,field:c}=r,f=Math.round((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .pt2px */ .Lz)(a)),u=new Float64Array(o*e);let s,l=Number.NEGATIVE_INFINITY;const h=d(c,i),y=new Set;for(const n of t){const t=n.getCursor();for(;t.next();){const r=t.getObjectId();if(y.has(r))continue;y.add(r);const n=t.readLegacyPointGeometry(),a=128;if(n.x<-a||n.x>=o+a||n.y<-a||n.y>e+a)continue;const i=+h(t),c=Math.max(0,Math.round(n.x)-f),d=Math.max(0,Math.round(n.y)-f),g=Math.min(e,Math.round(n.y)+f),A=Math.min(o,Math.round(n.x)+f);for(let t=d;t<g;t++)for(let r=c;r<A;r++){const e=t*o+r,a=m(n.x-r,n.y-t,f);s=u[e]+=a*i,s>l&&(l=s)}}}return{matrix:u.buffer,max:l}}function l(t,r,n,o,e,a){t.canvas.width=t.canvas.height=r,t.clearRect(0,0,r,r);const i=t.getImageData(0,0,r,r);n&&o&&i.data.set(new Uint8ClampedArray(h(r,n,o,e,a))),t.putImageData(i,0,0)}function h(r,n,o,e,a){const i=new Uint32Array(r*r),c="buffer"in n?n:new Float64Array(n),f="buffer"in o?new Uint32Array(o.buffer):new Uint32Array(new Uint8Array(o).buffer),u=f.length/(a-e);for(let s=0;s<c.length;s++){const r=c[s],n=Math.floor((r-e)*u);i[s]=f[(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .clamp */ .qE)(n,0,f.length-1)]}return i.buffer}function m(t,r,n){const o=Math.sqrt(t**2+r**2)/n;return o>1?0:3/(Math.PI*n**2)*(1-o**2)**2}function y(t,r){return"function"==typeof t?t:t?"string"==typeof r?r=>-1*+r[t]:n=>+n[t]+r:()=>1}function d(t,r){return null!=t?"string"==typeof r?r=>-1*+r.readAttribute(t):n=>+n.readAttribute(t)+r:t=>1}


/***/ }),

/***/ 48887:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ o),
/* harmony export */   r: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _core_Warning_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68659);
/* harmony import */ var _core_accessorSupport_extensions_serializableProperty_reader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61985);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49169);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function t(e,r){return o(e,null,r)}const s=(0,_core_accessorSupport_extensions_serializableProperty_reader_js__WEBPACK_IMPORTED_MODULE_1__/* .createTypeReader */ .C)({types:_types_js__WEBPACK_IMPORTED_MODULE_2__/* .rendererTypes */ .H});function o(r,n,t){return r?r&&(r.styleName||r.styleUrl)&&"uniqueValue"!==r.type?(t?.messages&&t.messages.push(new _core_Warning_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+r.type+"'",{definition:r,context:t})),null):s(r,n,t):null}


/***/ }),

/***/ 10301:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92976);
/* harmony import */ var _geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99817);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const m={unknown:1,inches:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","inches"),feet:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","feet"),"us-feet":(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","us-feet"),yards:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","yards"),miles:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","miles"),"nautical-miles":(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","nautical-miles"),millimeters:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","millimeters"),centimeters:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","centimeters"),decimeters:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","decimeters"),meters:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","meters"),kilometers:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","kilometers"),"decimal-degrees":1/(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .lengthToDegrees */ .vl)(1,"meters",_geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_1__/* .earth */ .$O.radius)};


/***/ }),

/***/ 21484:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12690);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40189);
/* harmony import */ var _core_Warning_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68659);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function t(t,i,n){const s=t&&t.getAtOrigin&&t.getAtOrigin("renderer",i.origin);if(s&&"unique-value"===s.type&&s.styleOrigin){const a=await (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .result */ .Ke)(s.populateFromStyle());if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .throwIfAborted */ .Te)(n),!1===a.ok){const e=a.error;i?.messages&&i.messages.push(new _core_Warning_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A("renderer:style-reference",`Failed to create unique value renderer from style reference: ${e.message}`,{error:e,context:i})),t.clear("renderer",i?.origin)}}}


/***/ }),

/***/ 49169:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ m),
/* harmony export */   X: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(539);
/* harmony import */ var _ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17671);
/* harmony import */ var _DictionaryRenderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84685);
/* harmony import */ var _DotDensityRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20299);
/* harmony import */ var _HeatmapRenderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25498);
/* harmony import */ var _PieChartRenderer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79300);
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76589);
/* harmony import */ var _SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47347);
/* harmony import */ var _UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2692);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const m={key:"type",base:_Renderer_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,typeMap:{heatmap:_HeatmapRenderer_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,simple:_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,"unique-value":_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,"class-breaks":_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,"dot-density":_DotDensityRenderer_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,dictionary:_DictionaryRenderer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,"pie-chart":_PieChartRenderer_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A},errorContext:"renderer"},u={key:"type",base:_Renderer_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,typeMap:{simple:_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,"unique-value":_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,"class-breaks":_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,heatmap:_HeatmapRenderer_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A},errorContext:"renderer",validate:p};function p(e){switch(e.type){case"simple":return c(e);case"unique-value":return f(e);case"class-breaks":return d(e);case"heatmap":return e}}function c(r){if(r.symbol)return r;_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getLogger("esri.renderers.support.types").error("Removed invalid 'simple' renderer without a symbol from web scene.")}function f(r){const s=r.uniqueValueInfos,t=s?.filter((({symbol:r,label:s},t)=>(r||_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getLogger("esri.renderers.support.types").error(`Removed invalid unique value info ([${t}] ${s}) without a symbol from web scene.`),!!r)));return t?.length!==s?.length&&(r.uniqueValueInfos=t),r}function d(r){const s=r.classBreakInfos,t=s?.filter((({symbol:r,label:s},t)=>(r||_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getLogger("esri.renderers.support.types").error(`Removed invalid class break info ([${t}] ${s}) without a symbol from web scene.`),!!r)));return t?.length!==s?.length&&(r.classBreakInfos=t),r}


/***/ }),

/***/ 68090:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98849);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77542);
/* harmony import */ var _VisualVariable_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57860);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var p;let a=p=class extends _VisualVariable_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A{constructor(e){super(e),this.axis=null,this.type="rotation",this.rotationType="geographic",this.valueExpressionTitle=null}get cache(){return{hasExpression:!!this.valueExpression,compiledFunc:null}}writeValueExpressionTitleWebScene(e,s,o,r){if(r?.messages){const e=`visualVariables[${this.index}]`;r.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("property:unsupported",this.type+"VisualVariable.valueExpressionTitle is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:e+".valueExpressionTitle",context:r}))}}clone(){return new p({axis:this.axis,rotationType:this.rotationType,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,legendOptions:this.legendOptions?.clone()})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({readOnly:!0})],a.prototype,"cache",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:["heading","tilt","roll"],json:{origins:{"web-scene":{default:"heading",write:!0}}}})],a.prototype,"axis",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:["rotation"],json:{type:["rotationInfo"]}})],a.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:["geographic","arithmetic"],json:{write:!0,origins:{"web-document":{write:!0,default:"geographic"}}}})],a.prototype,"rotationType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],a.prototype,"valueExpressionTitle",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__/* .writer */ .K)("web-scene","valueExpressionTitle")],a.prototype,"writeValueExpressionTitleWebScene",null),a=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.renderers.visualVariables.RotationVariable")],a);const n=a;


/***/ }),

/***/ 14977:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ b)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/screenUtils.js
var screenUtils = __webpack_require__(89882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(4130);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/visualVariables/VisualVariable.js
var VisualVariable = __webpack_require__(57860);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/visualVariables/support/SizeStop.js
var SizeStop = __webpack_require__(68745);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/visualVariables/support/VisualVariableLegendOptions.js
var VisualVariableLegendOptions = __webpack_require__(45327);
;// ../node_modules/@arcgis/core/renderers/visualVariables/support/SizeVariableLegendOptions.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var t;let i=t=class extends VisualVariableLegendOptions/* default */.A{constructor(){super(...arguments),this.customValues=null}clone(){return new t({title:this.title,showLegend:this.showLegend,customValues:this.customValues?.slice(0)})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number],json:{write:!0}})],i.prototype,"customValues",void 0),i=t=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.visualVariables.support.SizeVariableLegendOptions")],i);const a=i;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/visualVariables/support/sizeVariableUtils.js
var sizeVariableUtils = __webpack_require__(99412);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/visualVariables/support/visualVariableUtils.js
var visualVariableUtils = __webpack_require__(28479);
;// ../node_modules/@arcgis/core/renderers/visualVariables/SizeVariable.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var z;const v=new jsonMap/* JSONMap */.J({width:"width",depth:"depth",height:"height",widthAndDepth:"width-and-depth",all:"all"}),w=new jsonMap/* JSONMap */.J({unknown:"unknown",inch:"inches",foot:"feet",yard:"yards",mile:"miles","nautical-mile":"nautical-miles",millimeter:"millimeters",centimeter:"centimeters",decimeter:"decimeters",meter:"meters",kilometer:"kilometers","decimal-degree":"decimal-degrees"});function g(e){if(null!=e)return"string"==typeof e||"number"==typeof e?(0,screenUtils/* toPt */.cr)(e):"size"===e.type?(0,sizeVariableUtils/* isSizeVariable */.of)(e)?e:(delete(e={...e}).type,new V(e)):void 0}function f(e,t,i){if("object"!=typeof e)return e;const s=new V;return s.read(e,i),s}let V=z=class extends VisualVariable/* default */.A{constructor(e){super(e),this.axis=null,this.legendOptions=null,this.normalizationField=null,this.scaleBy=null,this.target=null,this.type="size",this.useSymbolValue=null,this.valueExpression=null,this.valueRepresentation=null,this.valueUnit=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null,isScaleDriven:null!=this.valueExpression&&visualVariableUtils.viewScaleRE.test(this.valueExpression)}}set expression(e){Logger/* default */.A.getLogger(this).warn("'expression' is deprecated since version 4.2. Use 'valueExpression' instead. The only supported expression is 'view.scale'."),"view.scale"===e?(this.valueExpression="$view.scale",this._set("expression",e)):this._set("expression",null)}set index(e){(0,sizeVariableUtils/* isSizeVariable */.of)(this.maxSize)&&(this.maxSize.index=`visualVariables[${e}].maxSize`),(0,sizeVariableUtils/* isSizeVariable */.of)(this.minSize)&&(this.minSize.index=`visualVariables[${e}].minSize`),this._set("index",e)}get inputValueType(){return (0,sizeVariableUtils/* getInputValueType */.eh)(this)}set maxDataValue(e){e&&this.stops&&(Logger/* default */.A.getLogger(this).warn("cannot set maxDataValue when stops is not null."),e=null),this._set("maxDataValue",e)}set maxSize(e){e&&this.stops&&(Logger/* default */.A.getLogger(this).warn("cannot set maxSize when stops is not null."),e=null),this._set("maxSize",e)}castMaxSize(e){return g(e)}readMaxSize(e,t,i){return f(e,t,i)}set minDataValue(e){e&&this.stops&&(Logger/* default */.A.getLogger(this).warn("cannot set minDataValue when stops is not null."),e=null),this._set("minDataValue",e)}set minSize(e){e&&this.stops&&(Logger/* default */.A.getLogger(this).warn("cannot set minSize when stops is not null."),e=null),this._set("minSize",e)}castMinSize(e){return g(e)}readMinSize(e,t,i){return f(e,t,i)}get arcadeRequired(){return!!this.valueExpression||(null!=this.minSize&&"object"==typeof this.minSize&&this.minSize.arcadeRequired||null!=this.maxSize&&"object"==typeof this.maxSize&&this.maxSize.arcadeRequired)}set stops(e){null==this.minDataValue&&null==this.maxDataValue&&null==this.minSize&&null==this.maxSize?e&&Array.isArray(e)&&(e=e.filter((e=>!!e))).sort(((e,t)=>e.value-t.value)):e&&(Logger/* default */.A.getLogger(this).warn("cannot set stops when one of minDataValue, maxDataValue, minSize or maxSize is not null."),e=null),this._set("stops",e)}get transformationType(){return (0,sizeVariableUtils/* getTransformationType */.KZ)(this,this.inputValueType)}readValueExpression(e,t){return e||t.expression&&"$view.scale"}writeValueExpressionWebScene(e,i,s,r){if("$view.scale"===e){if(r?.messages){const e=this.index,i="string"==typeof e?e:`visualVariables[${e}]`;r.messages.push(new Error/* default */.A("property:unsupported",this.type+"VisualVariable.valueExpression = '$view.scale' is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:i+".valueExpression",context:r}))}}else i[s]=e}readValueUnit(e){return e?w.read(e):null}clone(){return new z({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:(0,sizeVariableUtils/* isSizeVariable */.of)(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:(0,sizeVariableUtils/* isSizeVariable */.of)(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops?.map((e=>e.clone())),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions?.clone()})}flipSizes(){if(this.transformationType===sizeVariableUtils/* TransformationType */._w.ClampedLinear){const{minSize:e,maxSize:t}=this;return this.minSize=t,this.maxSize=e,this}if(this.transformationType===sizeVariableUtils/* TransformationType */._w.Stops){const e=this.stops;if(!e)return this;const t=e.map((e=>e.size)).reverse(),i=e.length;for(let s=0;s<i;s++)e[s].size=t[s];return this}return this}getAttributeHash(){return`${super.getAttributeHash()}-${this.target}-${this.normalizationField}`}_interpolateData(){return this.stops?.map((e=>e.value||0))}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],V.prototype,"cache",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:v.apiValues,json:{type:v.jsonValues,origins:{"web-map":{read:!1}},read:v.read,write:v.write}})],V.prototype,"axis",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,value:null,json:{read:!1}})],V.prototype,"expression",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],V.prototype,"index",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0})],V.prototype,"inputValueType",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:a,json:{write:!0}})],V.prototype,"legendOptions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,value:null,json:{write:!0}})],V.prototype,"maxDataValue",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,value:null,json:{write:!0}})],V.prototype,"maxSize",null),(0,tslib_es6._)([(0,cast/* cast */.w)("maxSize")],V.prototype,"castMaxSize",null),(0,tslib_es6._)([(0,reader/* reader */.w)("maxSize")],V.prototype,"readMaxSize",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,value:null,json:{write:!0}})],V.prototype,"minDataValue",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,value:null,json:{write:!0}})],V.prototype,"minSize",null),(0,tslib_es6._)([(0,cast/* cast */.w)("minSize")],V.prototype,"castMinSize",null),(0,tslib_es6._)([(0,reader/* reader */.w)("minSize")],V.prototype,"readMinSize",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],V.prototype,"normalizationField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],V.prototype,"arcadeRequired",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],V.prototype,"scaleBy",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[SizeStop/* default */.A],value:null,json:{write:!0}})],V.prototype,"stops",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["outline"],json:{write:!0}})],V.prototype,"target",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0})],V.prototype,"transformationType",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["size"],json:{type:["sizeInfo"]}})],V.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0,origins:{"web-map":{read:!1}}}})],V.prototype,"useSymbolValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],V.prototype,"valueExpression",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("valueExpression",["valueExpression","expression"])],V.prototype,"readValueExpression",null),(0,tslib_es6._)([(0,writer/* writer */.K)("web-scene","valueExpression")],V.prototype,"writeValueExpressionWebScene",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["radius","diameter","area","width","distance"],json:{write:!0}})],V.prototype,"valueRepresentation",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:w.apiValues,json:{write:w.write,origins:{"web-map":{read:!1},"web-scene":{write:!0},"portal-item":{write:!0}}}})],V.prototype,"valueUnit",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("valueUnit")],V.prototype,"readValueUnit",null),V=z=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.visualVariables.SizeVariable")],V);const b=V;


/***/ }),

/***/ 57860:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59851);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(539);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4130);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73446);
/* harmony import */ var _support_VisualVariableLegendOptions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45327);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const a=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONMap */ .J({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"});let u=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY{constructor(e){super(e),this.index=null,this.type=null,this.field=null,this.valueExpression=null,this.valueExpressionTitle=null,this.legendOptions=null}castField(e){return null==e?e:"function"==typeof e?(_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.getLogger(this).error(".field: field must be a string value"),null):(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__/* .ensureString */ .GX)(e)}get arcadeRequired(){return!!this.valueExpression}clone(){}getAttributeHash(){return`${this.type}-${this.field}-${this.valueExpression}`}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)()],u.prototype,"index",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:a.apiValues,readOnly:!0,json:{read:a.read,write:a.write}})],u.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:!0}})],u.prototype,"field",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__/* .cast */ .w)("field")],u.prototype,"castField",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:!0}})],u.prototype,"valueExpression",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:!0}})],u.prototype,"valueExpressionTitle",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({readOnly:!0})],u.prototype,"arcadeRequired",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:_support_VisualVariableLegendOptions_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"legendOptions",void 0),u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.renderers.visualVariables.VisualVariable")],u);const c=u;


/***/ }),

/***/ 5001:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96220);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77542);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var i;let c=i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY{constructor(r){super(r),this.color=null,this.label=null,this.value=null}writeValue(r,o,e){o[e]=r??0}clone(){return new i({color:this.color&&this.color.clone(),label:this.label,value:this.value})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,json:{type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__/* .Integer */ .jz],write:!0}})],c.prototype,"color",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{write:!0}})],c.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:Number,json:{write:{writerEnsuresNonNull:!0}}})],c.prototype,"value",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__/* .writer */ .K)("value")],c.prototype,"writeValue",null),c=i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.renderers.visualVariables.support.ColorStop")],c);const a=c;


/***/ }),

/***/ 68745:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89882);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var p;let i=p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(r){super(r),this.label=null,this.size=null,this.value=null}clone(){return new p({label:this.label,size:this.size,value:this.value})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],i.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number,cast:_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .toPt */ .cr,json:{write:!0}})],i.prototype,"size",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number,json:{write:!0}})],i.prototype,"value",void 0),i=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.renderers.visualVariables.support.SizeStop")],i);const l=i;


/***/ }),

/***/ 45327:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/* harmony import */ var _support_LegendOptions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38785);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var t;let p=t=class extends _support_LegendOptions_js__WEBPACK_IMPORTED_MODULE_6__/* .LegendOptions */ .q{constructor(){super(...arguments),this.showLegend=null}clone(){return new t({title:this.title,showLegend:this.showLegend})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:Boolean,json:{write:!0}})],p.prototype,"showLegend",void 0),p=t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.renderers.visualVariables.support.VisualVariableLegendOptions")],p);const i=p;


/***/ }),

/***/ 99412:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KZ: () => (/* binding */ a),
/* harmony export */   Yf: () => (/* binding */ n),
/* harmony export */   _w: () => (/* binding */ i),
/* harmony export */   eh: () => (/* binding */ t),
/* harmony export */   gf: () => (/* binding */ l),
/* harmony export */   of: () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var n,i;function e(n){return n&&"esri.renderers.visualVariables.SizeVariable"===n.declaredClass}function l(n){return null!=n&&!isNaN(n)&&isFinite(n)}function t(i){return i.valueExpression?n.Expression:i.field&&"string"==typeof i.field?n.Field:n.Unknown}function a(e,l){const a=l||t(e),o=e.valueUnit||"unknown";return a===n.Unknown?i.Constant:e.stops?i.Stops:null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?i.ClampedLinear:"unknown"===o?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?i.Proportional:i.Additive:i.Identity:i.RealWorldSize}!function(n){n.Unknown="unknown",n.Expression="expression",n.Field="field"}(n||(n={})),function(n){n.Unknown="unknown",n.Stops="stops",n.ClampedLinear="clamped-linear",n.Proportional="proportional",n.Additive="additive",n.Constant="constant",n.Identity="identity",n.RealWorldSize="real-world-size"}(i||(i={}));


/***/ }),

/***/ 28479:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllSizes: () => (/* binding */ N),
/* harmony export */   getColor: () => (/* binding */ p),
/* harmony export */   getOpacity: () => (/* binding */ v),
/* harmony export */   getRotationAngle: () => (/* binding */ b),
/* harmony export */   getSize: () => (/* binding */ V),
/* harmony export */   getSizeForValue: () => (/* binding */ C),
/* harmony export */   getSizeFromNumberOrVariable: () => (/* binding */ x),
/* harmony export */   getSizeRangeAtScale: () => (/* binding */ D),
/* harmony export */   getVisualVariableValues: () => (/* binding */ M),
/* harmony export */   viewScaleRE: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96220);
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25707);
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73345);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(539);
/* harmony import */ var _support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10301);
/* harmony import */ var _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99412);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const c=_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),u=new _Graphic_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,f=Math.PI,d=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;function p(a,i,n){const r="visualVariables"in a&&a.visualVariables?a.visualVariables.find((e=>"color"===e.type)):a;if(!r)return;if("esri.renderers.visualVariables.ColorVariable"!==r.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable");const t="number"==typeof i,s=t?null:i,l=s?.attributes;let o=t?i:null;const u=r.field,{ipData:f,hasExpression:d}=r.cache;let p=r.cache.compiledFunc;if(!u&&!d){const e=r.stops;return e&&e[0]&&e[0].color}if("number"!=typeof o)if(d){if(null==n?.arcade)return void c.error("Use of arcade expressions requires an arcade context");const e={viewingMode:n.viewingMode,scale:n.scale,spatialReference:n.spatialReference},a=n.arcade.arcadeUtils,i=a.getViewInfo(e),t=a.createExecContext(s,i,n.timeZone);if(!p){const e=a.createSyntaxTree(r.valueExpression);p=a.createFunction(e),r.cache.compiledFunc=p}o=a.executeFunction(p,t)}else l&&(o=l[u]);const v=r.normalizationField,b=null!=l&&null!=v?parseFloat(l[v]):void 0;if(null!=o&&(!v||t||!isNaN(b)&&0!==b)){isNaN(b)||t||(o/=b);const a=k(o,f);if(a){const i=a[0],t=a[1],s=i===t?r.stops[i].color:_Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.blendColors(r.stops[i].color,r.stops[t].color,a[2],null!=n?n.color:void 0);return new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(s)}}}function v(e,a,i){const n="visualVariables"in e&&e.visualVariables?e.visualVariables.find((e=>"opacity"===e.type)):e;if(!n)return;if("esri.renderers.visualVariables.OpacityVariable"!==n.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable");const r="number"==typeof a,t=r?null:a,s=t?.attributes;let l=r?a:null;const o=n.field,{ipData:u,hasExpression:f}=n.cache;let d=n.cache.compiledFunc;if(!o&&!f){const e=n.stops;return e&&e[0]&&e[0].opacity}if("number"!=typeof l)if(f){if(null==i?.arcade)return void c.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},a=i.arcade.arcadeUtils,r=a.getViewInfo(e),s=a.createExecContext(t,r,i.timeZone);if(!d){const e=a.createSyntaxTree(n.valueExpression);d=a.createFunction(e),n.cache.compiledFunc=d}l=a.executeFunction(d,s)}else s&&(l=s[o]);const p=n.normalizationField,v=null!=s&&null!=p?parseFloat(s[p]):void 0;if(null!=l&&(!p||r||!isNaN(v)&&0!==v)){isNaN(v)||r||(l/=v);const e=k(l,u);if(e){const a=e[0],i=e[1];if(a===i)return n.stops[a].opacity;{const r=n.stops[a].opacity;return r+(n.stops[i].opacity-r)*e[2]}}}}function b(e,a,i){const n="visualVariables"in e&&e.visualVariables?e.visualVariables.find((e=>"rotation"===e.type)):e;if(!n)return;if("esri.renderers.visualVariables.RotationVariable"!==n.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable");const r=n.axis||"heading",t="heading"===r&&"arithmetic"===n.rotationType?90:0,s="heading"===r&&"arithmetic"===n.rotationType?-1:1,l="number"==typeof a?null:a,o=l?.attributes,u=n.field,{hasExpression:f}=n.cache;let d=n.cache.compiledFunc,p=0;if(!u&&!f)return p;if(f){if(null==i?.arcade)return void c.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},a=i.arcade.arcadeUtils,r=a.getViewInfo(e),t=a.createExecContext(l,r,i.timeZone);if(!d){const e=a.createSyntaxTree(n.valueExpression);d=a.createFunction(e),n.cache.compiledFunc=d}p=a.executeFunction(d,t)}else o&&(p=o[u]||0);return p="number"!=typeof p||isNaN(p)?null:t+s*p,p}function m(e,a,i){const n="number"==typeof a,r=n?null:a,t=r?.attributes;let l=n?a:null;const{isScaleDriven:u}=e.cache;let f=e.cache.compiledFunc;if(u){const a=null!=i?i.scale:void 0,n=null!=i?i.view:void 0;l=null==a||"3d"===n?h(e):a}else if(!n)switch(e.inputValueType){case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .InputValueType */ .Yf.Expression:{if(null==i?.arcade)return void c.error("Use of arcade expressions requires an arcade context");const a={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},n=i.arcade.arcadeUtils,t=n.getViewInfo(a),s=n.createExecContext(r,t,i.timeZone);if(!f){const a=n.createSyntaxTree(e.valueExpression);f=n.createFunction(a),e.cache.compiledFunc=f}l=n.executeFunction(f,s);break}case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .InputValueType */ .Yf.Field:t&&(l=t[e.field]);break;case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .InputValueType */ .Yf.Unknown:l=null}if(!(0,_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isValidNumber */ .gf)(l))return null;if(n||!e.normalizationField)return l;const d=t?parseFloat(t[e.normalizationField]):null;return (0,_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isValidNumber */ .gf)(d)&&0!==d?l/d:null}function h(e){let a=null,i=null;const n=e.stops;return n?(a=n[0].value,i=n[n.length-1].value):(a=e.minDataValue||0,i=e.maxDataValue||0),(a+i)/2}function V(e,a,i){const n="visualVariables"in e&&e.visualVariables?e.visualVariables.find((e=>"size"===e.type)):e;if(!n)return;if("esri.renderers.visualVariables.SizeVariable"!==n.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable");const r=C(m(n,a,i),n,a,i,n.cache.ipData);return null==r||isNaN(r)?0:r}function x(e,a,i){return null==e?null:(0,_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isSizeVariable */ .of)(e)?V(e,a,i):(0,_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isValidNumber */ .gf)(e)?e:null}function y(e,a,i){return (0,_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isValidNumber */ .gf)(i)&&e>i?i:(0,_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isValidNumber */ .gf)(a)&&e<a?a:e}function w(e,a,i,n){return e+((x(a.minSize,i,n)||a.minDataValue)??0)}function g(e,a,i){const n=e.stops;let r=n?.length&&n[0].size;return null==r&&(r=e.minSize),x(r,a,i)}function z(e,a,i,n){const r=(e-a.minDataValue)/(a.maxDataValue-a.minDataValue),t=x(a.minSize,i,n),s=x(a.maxSize,i,n),l=null!=n?n.shape:void 0;if(e<=a.minDataValue)return t;if(e>=a.maxDataValue)return s;if(null==t||null==s)return null;if("area"===a.scaleBy&&l){const e="circle"===l,a=e?f*(t/2)**2:t*t,i=a+r*((e?f*(s/2)**2:s*s)-a);return e?2*Math.sqrt(i/f):Math.sqrt(i)}return t+r*(s-t)}function F(e,a,i,n){const r=null!=n?n.shape:void 0,t=e/a.minDataValue,s=x(a.minSize,i,n),l=x(a.maxSize,i,n);let o=null;return o="circle"===r?2*Math.sqrt(t*(s/2)**2):"square"===r||"diamond"===r||"image"===r?Math.sqrt(t*s**2):t*s,y(o,s,l)}function S(e,a,i,n,r){const[t,s,l]=k(e,r);if(t===s)return x(a.stops?.[t].size,i,n);{const e=x(a.stops?.[t].size,i,n);return e+(x(a.stops?.[s].size,i,n)-e)*l}}function E(e,a,i,n){const t=(n?.resolution??1)*_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .meterIn */ .j[a.valueUnit],s=x(a.minSize,i,n),l=x(a.maxSize,i,n),{valueRepresentation:o}=a;let c=null;return c="area"===o?2*Math.sqrt(e/f)/t:"radius"===o||"distance"===o?2*e/t:e/t,y(c,s,l)}function U(e){return e}function C(e,a,i,n,r){switch(a.transformationType){case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .TransformationType */ ._w.Additive:return w(e,a,i,n);case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .TransformationType */ ._w.Constant:return g(a,i,n);case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .TransformationType */ ._w.ClampedLinear:return z(e,a,i,n);case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .TransformationType */ ._w.Proportional:return F(e,a,i,n);case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .TransformationType */ ._w.Stops:return S(e,a,i,n,r);case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .TransformationType */ ._w.RealWorldSize:return E(e,a,i,n);case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .TransformationType */ ._w.Identity:return U(e);case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .TransformationType */ ._w.Unknown:return null}}function D(e,a,i){const{isScaleDriven:n}=e.cache;if(!(n&&"3d"===i||a))return null;const r={scale:a,view:i};let t=x(e.minSize,u,r),s=x(e.maxSize,u,r);if(null!=t||null!=s){if(t>s){const e=s;s=t,t=e}return{minSize:t,maxSize:s}}}function M(e,a,i){if(!e.visualVariables)return;const n=[],r=[],t=[],s=[],l=[];for(const o of e.visualVariables)switch(o.type){case"color":r.push(o);break;case"opacity":t.push(o);break;case"rotation":l.push(o);break;case"size":s.push(o)}return r.forEach((e=>{const r=p(e,a,i);n.push({variable:e,value:r})})),t.forEach((e=>{const r=v(e,a,i);n.push({variable:e,value:r})})),l.forEach((e=>{const r=b(e,a,i);n.push({variable:e,value:r})})),s.forEach((e=>{const r=V(e,a,i);n.push({variable:e,value:r})})),n.filter((e=>null!=e.value))}function k(e,a){if(!a)return;let i=0,n=a.length-1;return a.some(((a,r)=>e<a?(n=r,!0):(i=r,!1))),[i,n,(e-a[i])/(a[n]-a[i])]}function N(e,a,n){const r=["proportional","proportional","proportional"];for(const t of e){const e=t.useSymbolValue?"symbol-value":V(t,a,n);switch(t.axis){case"width":r[0]=e;break;case"depth":r[1]=e;break;case"height":r[2]=e;break;case"width-and-depth":r[0]=e,r[1]=e;break;case"all":case void 0:case null:r[0]=e,r[1]=e,r[2]=e;break;default:(0,_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .neverReached */ .Xb)(t.axis)}}return r}


/***/ }),

/***/ 80196:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96220);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19251);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _ColorRamp_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87673);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var m;let c=m=class extends _ColorRamp_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A{constructor(o){super(o),this.algorithm=null,this.fromColor=null,this.toColor=null,this.type="algorithmic"}clone(){return new m({fromColor:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.fromColor),toColor:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.toColor),algorithm:this.algorithm})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__/* .enumeration */ .e)({esriCIELabAlgorithm:"cie-lab",esriHSVAlgorithm:"hsv",esriLabLChAlgorithm:"lab-lch"})],c.prototype,"algorithm",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,json:{type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__/* .Integer */ .jz],write:!0}})],c.prototype,"fromColor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,json:{type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__/* .Integer */ .jz],write:!0}})],c.prototype,"toColor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:["algorithmic"]})],c.prototype,"type",void 0),c=m=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.rest.support.AlgorithmicColorRamp")],c);const a=c;


/***/ }),

/***/ 27973:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19251);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77542);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var a;let p=a=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(t){super(t),this.attachmentTypes=null,this.attachmentsWhere=null,this.cacheHint=void 0,this.keywords=null,this.globalIds=null,this.name=null,this.num=null,this.objectIds=null,this.returnMetadata=!1,this.size=null,this.start=null,this.where=null}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10}clone(){return new a((0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)({attachmentTypes:this.attachmentTypes,attachmentsWhere:this.attachmentsWhere,cacheHint:this.cacheHint,keywords:this.keywords,where:this.where,globalIds:this.globalIds,name:this.name,num:this.num,objectIds:this.objectIds,returnMetadata:this.returnMetadata,size:this.size,start:this.start}))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[String],json:{write:!0}})],p.prototype,"attachmentTypes",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{read:{source:"attachmentsDefinitionExpression"},write:{target:"attachmentsDefinitionExpression"}}})],p.prototype,"attachmentsWhere",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:Boolean,json:{write:!0}})],p.prototype,"cacheHint",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[String],json:{write:!0}})],p.prototype,"keywords",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[Number],json:{write:!0}})],p.prototype,"globalIds",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{write:!0}})],p.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:Number,json:{read:{source:"resultRecordCount"}}})],p.prototype,"num",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[Number],json:{write:!0}})],p.prototype,"objectIds",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:Boolean,json:{default:!1,write:!0}})],p.prototype,"returnMetadata",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[Number],json:{write:!0}})],p.prototype,"size",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:Number,json:{read:{source:"resultOffset"}}})],p.prototype,"start",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_6__/* .writer */ .K)("start"),(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_6__/* .writer */ .K)("num")],p.prototype,"writeStart",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],p.prototype,"where",void 0),p=a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.rest.support.AttachmentQuery")],p),p.from=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__/* .ensureType */ .dp)(p);const c=p;


/***/ }),

/***/ 87673:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let e=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(r){super(r),this.type=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({readOnly:!0,json:{read:!1,write:!0}})],e.prototype,"type",void 0),e=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.rest.support.ColorRamp")],e);const p=e;


/***/ }),

/***/ 17771:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19251);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63863);
/* harmony import */ var _AlgorithmicColorRamp_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80196);
/* harmony import */ var _ColorRamp_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87673);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var c;let m=c=class extends _ColorRamp_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A{constructor(o){super(o),this.colorRamps=null,this.type="multipart"}clone(){return new c({colorRamps:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(this.colorRamps)})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:[_AlgorithmicColorRamp_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A],json:{write:!0}})],m.prototype,"colorRamps",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:["multipart"]})],m.prototype,"type",void 0),m=c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__/* .subclass */ .$)("esri.rest.support.MultipartColorRamp")],m);const a=m;


/***/ }),

/***/ 24587:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ b)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry.js
var geometry = __webpack_require__(17639);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/TimeExtent.js
var TimeExtent = __webpack_require__(19790);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(4130);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(28902);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/jsonUtils.js
var jsonUtils = __webpack_require__(1171);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/source/DataLayerSource.js + 3 modules
var DataLayerSource = __webpack_require__(44360);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(24793);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
;// ../node_modules/@arcgis/core/rest/support/FullTextSearch.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let p=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(r){super(r),this.onFields=null,this.operator=null,this.searchTerm=null,this.searchType=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],json:{write:{enabled:!0,overridePolicy(){return{enabled:null!=this.onFields&&this.onFields.length>0}}}}})],p.prototype,"onFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"operator",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"searchTerm",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"searchType",void 0),p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.rest.support.FullTextSearch")],p);const i=p;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/QuantizationParameters.js
var QuantizationParameters = __webpack_require__(19925);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/StatisticDefinition.js
var StatisticDefinition = __webpack_require__(41969);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Point.js + 1 modules
var Point = __webpack_require__(78632);
;// ../node_modules/@arcgis/core/rest/support/Query.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var w;const v=new jsonMap/* JSONMap */.J({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),g=new jsonMap/* JSONMap */.J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let R=w=class extends JSONSupport/* JSONSupport */.oY{static from(t){return (0,ensureType/* ensureClass */.PZ)(w,t)}constructor(t){super(t),this.aggregateIds=null,this.cacheHint=void 0,this.compactGeometryEnabled=!1,this.datumTransformation=null,this.defaultSpatialReferenceEnabled=!1,this.distance=void 0,this.dynamicDataSource=void 0,this.formatOf3DObjects=null,this.fullText=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=void 0,this.groupByFieldsForStatistics=null,this.having=null,this.historicMoment=null,this.maxAllowableOffset=void 0,this.maxRecordCountFactor=1,this.multipatchOption=null,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.outStatistics=null,this.parameterValues=null,this.pixelSize=null,this.quantizationParameters=null,this.rangeValues=null,this.relationParameter=null,this.resultType=null,this.returnCentroid=!1,this.returnDistinctValues=!1,this.returnExceededLimitFeatures=!0,this.returnGeometry=!1,this.returnQueryGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.sourceSpatialReference=null,this.spatialRelationship="intersects",this.start=void 0,this.sqlFormat=null,this.text=null,this.timeExtent=null,this.timeReferenceUnknownClient=!1,this.units=null,this.where=null}castDatumTransformation(t){return"number"==typeof t||"object"==typeof t?t:null}writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime()}writeParameterValues(t,e){if(t){const r={};for(const e in t){const i=t[e];Array.isArray(i)?r[e]=i.map((t=>t instanceof Date?t.getTime():t)):i instanceof Date?r[e]=i.getTime():r[e]=i}e.parameterValues=r}}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10,e.where="1=1"}writeWhere(t,e){e.where=t||"1=1"}clone(){return new w((0,lang/* clone */.o8)({aggregateIds:this.aggregateIds,cacheHint:this.cacheHint,compactGeometryEnabled:this.compactGeometryEnabled,datumTransformation:this.datumTransformation,defaultSpatialReferenceEnabled:this.defaultSpatialReferenceEnabled,distance:this.distance,fullText:this.fullText,formatOf3DObjects:this.formatOf3DObjects,gdbVersion:this.gdbVersion,geometry:this.geometry,geometryPrecision:this.geometryPrecision,groupByFieldsForStatistics:this.groupByFieldsForStatistics,having:this.having,historicMoment:null!=this.historicMoment?new Date(this.historicMoment.getTime()):null,maxAllowableOffset:this.maxAllowableOffset,maxRecordCountFactor:this.maxRecordCountFactor,multipatchOption:this.multipatchOption,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,outStatistics:this.outStatistics,parameterValues:this.parameterValues,pixelSize:this.pixelSize,quantizationParameters:this.quantizationParameters,rangeValues:this.rangeValues,relationParameter:this.relationParameter,resultType:this.resultType,returnDistinctValues:this.returnDistinctValues,returnGeometry:this.returnGeometry,returnCentroid:this.returnCentroid,returnExceededLimitFeatures:this.returnExceededLimitFeatures,returnQueryGeometry:this.returnQueryGeometry,returnM:this.returnM,returnZ:this.returnZ,dynamicDataSource:this.dynamicDataSource,sourceSpatialReference:this.sourceSpatialReference,spatialRelationship:this.spatialRelationship,start:this.start,sqlFormat:this.sqlFormat,text:this.text,timeExtent:this.timeExtent,timeReferenceUnknownClient:this.timeReferenceUnknownClient,units:this.units,where:this.where}))}};R.MAX_MAX_RECORD_COUNT_FACTOR=5,(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],R.prototype,"aggregateIds",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],R.prototype,"cacheHint",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"compactGeometryEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],R.prototype,"datumTransformation",void 0),(0,tslib_es6._)([(0,cast/* cast */.w)("datumTransformation")],R.prototype,"castDatumTransformation",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"defaultSpatialReferenceEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:{overridePolicy:t=>({enabled:t>0})}}})],R.prototype,"distance",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:DataLayerSource/* DataLayerSource */.L,json:{write:!0}})],R.prototype,"dynamicDataSource",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],R.prototype,"formatOf3DObjects",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[i],json:{write:{enabled:!0,overridePolicy(){return{enabled:null!=this.fullText&&this.fullText.length>0}}}}})],R.prototype,"fullText",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],R.prototype,"gdbVersion",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:geometry/* geometryTypes */.yR,json:{read:jsonUtils/* fromJSON */.rS,write:!0}})],R.prototype,"geometry",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],R.prototype,"geometryPrecision",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],json:{write:!0}})],R.prototype,"groupByFieldsForStatistics",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],R.prototype,"having",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Date})],R.prototype,"historicMoment",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("historicMoment")],R.prototype,"writeHistoricMoment",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],R.prototype,"maxAllowableOffset",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,cast:t=>t<1?1:t>R.MAX_MAX_RECORD_COUNT_FACTOR?R.MAX_MAX_RECORD_COUNT_FACTOR:t,json:{write:{overridePolicy:t=>({enabled:t>1})}}})],R.prototype,"maxRecordCountFactor",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["xyFootprint"],json:{write:!0}})],R.prototype,"multipatchOption",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{read:{source:"resultRecordCount"}}})],R.prototype,"num",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],R.prototype,"objectIds",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],json:{write:!0}})],R.prototype,"orderByFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],json:{write:!0}})],R.prototype,"outFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SpatialReference/* default */.A,json:{name:"outSR",write:!0}})],R.prototype,"outSpatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[StatisticDefinition/* default */.A],json:{write:{enabled:!0,overridePolicy(){return{enabled:null!=this.outStatistics&&this.outStatistics.length>0}}}}})],R.prototype,"outStatistics",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],R.prototype,"parameterValues",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("parameterValues")],R.prototype,"writeParameterValues",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Point/* default */.A,json:{write:!0}})],R.prototype,"pixelSize",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:QuantizationParameters/* default */.A,json:{write:!0}})],R.prototype,"quantizationParameters",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Object],json:{write:!0}})],R.prototype,"rangeValues",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:{source:"relationParam"},write:{target:"relationParam",overridePolicy(){return{enabled:"relation"===this.spatialRelationship}}}}})],R.prototype,"relationParameter",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],R.prototype,"resultType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"returnCentroid",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"returnDistinctValues",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!0,write:!0}})],R.prototype,"returnExceededLimitFeatures",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],R.prototype,"returnGeometry",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"returnQueryGeometry",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"returnM",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],R.prototype,"returnZ",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SpatialReference/* default */.A,json:{write:!0}})],R.prototype,"sourceSpatialReference",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)(v,{ignoreUnknown:!1,name:"spatialRel"})],R.prototype,"spatialRelationship",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{read:{source:"resultOffset"}}})],R.prototype,"start",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("start"),(0,writer/* writer */.K)("num")],R.prototype,"writeStart",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],R.prototype,"sqlFormat",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],R.prototype,"text",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:TimeExtent/* default */.A,json:{write:!0}})],R.prototype,"timeExtent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"timeReferenceUnknownClient",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)(g,{ignoreUnknown:!1}),(0,property/* property */.MZ)({json:{write:{overridePolicy(t){return{enabled:!!t&&null!=this.distance&&this.distance>0}}}}})],R.prototype,"units",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{overridePolicy(t){return{enabled:null!=t||null!=this.start&&this.start>0}}}}})],R.prototype,"where",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("where")],R.prototype,"writeWhere",null),R=w=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.rest.support.Query")],R);const b=R;


/***/ }),

/***/ 97724:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17639);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19251);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73446);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77542);
/* harmony import */ var _layers_support_source_DataLayerSource_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44360);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(78983);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var u;let c=u=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY{constructor(t){super(t),this.cacheHint=void 0,this.dynamicDataSource=void 0,this.gdbVersion=null,this.geometryPrecision=void 0,this.historicMoment=null,this.maxAllowableOffset=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.relationshipId=void 0,this.start=void 0,this.num=void 0,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.where=null}_writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime()}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10,this.start>0&&null==this.where&&(e.definitionExpression="1=1")}clone(){return new u((0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__/* .clone */ .o8)({cacheHint:this.cacheHint,dynamicDataSource:this.dynamicDataSource,gdbVersion:this.gdbVersion,geometryPrecision:this.geometryPrecision,historicMoment:this.historicMoment&&new Date(this.historicMoment.getTime()),maxAllowableOffset:this.maxAllowableOffset,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,relationshipId:this.relationshipId,start:this.start,num:this.num,returnGeometry:this.returnGeometry,where:this.where,returnZ:this.returnZ,returnM:this.returnM}))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Boolean,json:{write:!0}})],c.prototype,"cacheHint",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:_layers_support_source_DataLayerSource_js__WEBPACK_IMPORTED_MODULE_8__/* .DataLayerSource */ .L,json:{write:!0}})],c.prototype,"dynamicDataSource",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:!0}})],c.prototype,"gdbVersion",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Number,json:{write:!0}})],c.prototype,"geometryPrecision",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Date})],c.prototype,"historicMoment",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__/* .writer */ .K)("historicMoment")],c.prototype,"_writeHistoricMoment",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Number,json:{write:!0}})],c.prototype,"maxAllowableOffset",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:[Number],json:{write:!0}})],c.prototype,"objectIds",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:[String],json:{write:!0}})],c.prototype,"orderByFields",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:[String],json:{write:!0}})],c.prototype,"outFields",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,json:{read:{source:"outSR"},write:{target:"outSR"}}})],c.prototype,"outSpatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:!0}})],c.prototype,"relationshipId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Number,json:{read:{source:"resultOffset"}}})],c.prototype,"start",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__/* .writer */ .K)("start"),(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__/* .writer */ .K)("num")],c.prototype,"writeStart",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Number,json:{read:{source:"resultRecordCount"}}})],c.prototype,"num",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:!0}})],c.prototype,"returnGeometry",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],c.prototype,"returnM",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],c.prototype,"returnZ",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],c.prototype,"where",void 0),c=u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.rest.support.RelationshipQuery")],c),c.from=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__/* .ensureType */ .dp)(c);const d=c;


/***/ }),

/***/ 41969:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59851);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19251);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73446);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77542);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var c;const n=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONMap */ .J({count:"count",sum:"sum",min:"min",max:"max",avg:"avg",stddev:"stddev",var:"var",exceedslimit:"exceedslimit",percentile_cont:"percentile-continuous",percentile_disc:"percentile-discrete",EnvelopeAggregate:"envelope-aggregate",CentroidAggregate:"centroid-aggregate",ConvexHullAggregate:"convex-hull-aggregate"});let p=c=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY{constructor(t){super(t),this.maxPointCount=void 0,this.maxRecordCount=void 0,this.maxVertexCount=void 0,this.onStatisticField=null,this.outStatisticFieldName=null,this.statisticType=null,this.statisticParameters=null}writeStatisticParameters(t,e){"percentile-continuous"!==this.statisticType&&"percentile-discrete"!==this.statisticType||(e.statisticParameters=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__/* .clone */ .o8)(t))}clone(){return new c({maxPointCount:this.maxPointCount,maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,statisticType:this.statisticType,statisticParameters:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__/* .clone */ .o8)(this.statisticParameters)})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Number,json:{write:!0}})],p.prototype,"maxPointCount",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Number,json:{write:!0}})],p.prototype,"maxRecordCount",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Number,json:{write:!0}})],p.prototype,"maxVertexCount",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:!0}})],p.prototype,"onStatisticField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:!0}})],p.prototype,"outStatisticFieldName",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{read:{source:"statisticType",reader:n.read},write:{target:"statisticType",writer:n.write}}})],p.prototype,"statisticType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Object})],p.prototype,"statisticParameters",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__/* .writer */ .K)("statisticParameters")],p.prototype,"writeStatisticParameters",null),p=c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.rest.support.StatisticDefinition")],p);const m=p;


/***/ }),

/***/ 59740:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ m),
/* harmony export */   r: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _AlgorithmicColorRamp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80196);
/* harmony import */ var _ColorRamp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87673);
/* harmony import */ var _MultipartColorRamp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17771);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const m={key:"type",base:_ColorRamp_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,typeMap:{algorithmic:_AlgorithmicColorRamp_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,multipart:_MultipartColorRamp_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A}};function p(o){return o?.type?"algorithmic"===o.type?_AlgorithmicColorRamp_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.fromJSON(o):"multipart"===o.type?_MultipartColorRamp_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.fromJSON(o):null:null}


/***/ }),

/***/ 27451:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $7: () => (/* binding */ b),
/* harmony export */   B: () => (/* binding */ p),
/* harmony export */   XF: () => (/* binding */ x),
/* harmony export */   tW: () => (/* binding */ E),
/* harmony export */   w7: () => (/* binding */ r)
/* harmony export */ });
/* unused harmony exports absoluteHeightElevationInfo, elevationContextAffectsAlignment, elevationInfoLikeEquals, getConvertedElevation, getConvertedElevationFromVector, getEffectiveElevationInfo, getEffectiveElevationMode, getGeometryEffectiveElevationInfo, getGraphicEffectiveElevationInfo, getGraphicEffectiveElevationMode, getZForElevationMode, hasGraphicFeatureExpressionInfo, onTheGroundElevationInfo, zValueInAbsoluteHeightMode */
/* harmony import */ var _symbols_support_unitConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97046);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function n(e){return e?y:Z}function t(e,t){return t?.mode?t.mode:n(e).mode}function o(e,t){return null!=t?t:n(e)}function r(e,n){return t(null!=e&&e.hasZ,n)}function u(e,n){return o(null!=e&&!!e.hasZ,n)}function l(e){const n=a(e);return r(e.geometry,n)}function s(n){const t=a(n),o=r(n.geometry,t);return{mode:o,offset:null!=t&&"on-the-ground"!==o?(t.offset??0)*e(t.unit??"meters"):0}}function i(e){if("on-the-ground"===l(e))return!1;const n=a(e),t=n?.featureExpressionInfo?n.featureExpressionInfo.expression:null;return!(!t||"0"===t)}function a(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}function f(e,n,t){if(!t?.mode)return;const o=e.hasZ?e.z:0,r=null!=t.offset?t.offset:0;switch(t.mode){case"absolute-height":return o-r;case"on-the-ground":return 0;case"relative-to-ground":return o-((n.elevationProvider.getElevation(e.x,e.y,o,e.spatialReference,"ground")??0)+r);case"relative-to-scene":return o-((n.elevationProvider.getElevation(e.x,e.y,o,e.spatialReference,"scene")??0)+r)}}function c(e,n,t,o=null){return v(e,n.x,n.y,n.hasZ?n.z:0,n.spatialReference,t,o)}function d(e,n,t,o,r=null){return v(e,n[0],n[1],n.length>2?n[2]:0,t,o,r)}function v(e,n,t,o,r,u,l=null){if(null==u)return;const s=null!=l?l.mode:"absolute-height";if("on-the-ground"===s)return 0;const{absoluteZ:i}=g(n,t,o,r,e,u);return h(i,n,t,o,r,e,l,s)}function g(e,n,t,o,r,u){const l=null!=u.offset?u.offset:0;switch(u.mode){case"absolute-height":return{absoluteZ:t+l,elevation:0};case"on-the-ground":{const t=r.elevationProvider.getElevation(e,n,0,o,"ground")??0;return{absoluteZ:t,elevation:t}}case"relative-to-ground":{const u=r.elevationProvider.getElevation(e,n,t,o,"ground")??0;return{absoluteZ:t+u+l,elevation:u}}case"relative-to-scene":{const u=r.elevationProvider.getElevation(e,n,t,o,"scene")??0;return{absoluteZ:t+u+l,elevation:u}}}}function h(e,n,t,o,r,u,l,s){const i=null!=l?.offset?l.offset:0;switch(s){case"absolute-height":return e-i;case"relative-to-ground":return e-((u.elevationProvider.getElevation(n,t,o,r,"ground")??0)+i);case"relative-to-scene":return e-((u.elevationProvider.getElevation(n,t,o,r,"scene")??0)+i)}}function m(e,n){if(null==n)return!1;const{mode:t}=n;return null!=t&&("scene"===e&&"relative-to-scene"===t||"ground"===e&&"absolute-height"!==t)}function p(e,n,t){return t&&t.mode!==n?`${e} only support ${n} elevation mode`:null}function b(e,n,t){return t?.mode===n?`${e} do not support ${n} elevation mode`:null}function E(e,n){return null!=n?.featureExpressionInfo&&"0"!==n.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function x(e,n){n&&e.warn(".elevationInfo=",n)}const y={mode:"absolute-height",offset:0},Z={mode:"on-the-ground",offset:null};function I(e,n){return e===n||null!=e&&null!=n&&e.mode===n.mode&&e.offset===n.offset}


/***/ }),

/***/ 59346:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vd: () => (/* binding */ e),
/* harmony export */   Vo: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony exports direct3DObjectFeatureLayerDisplayEnabled, disableDirect3DObjectFeatureLayerDisplay, disableI3SPatching, disableIDBCache, disableSceneLayerEditing, enableDirect3DObjectFeatureLayerDisplay, enableI3SPatching, enableSceneLayerEditing, i3sPatchingEnabled */
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const e=()=>!!(0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("enable-feature:force-wosr"),a=()=>!!has("enable-feature:direct-3d-object-feature-layer-display"),t=()=>_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.add("enable-feature:direct-3d-object-feature-layer-display",!0,!0,!0),i=()=>_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.add("enable-feature:direct-3d-object-feature-layer-display",!1,!0,!0),r=()=>!!has("enable-i3s-patching"),d=()=>_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.add("enable-i3s-patching",!0,!0,!0),c=()=>_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.add("enable-i3s-patching",!1,!0,!0),n=()=>!!(0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("enable-feature:SceneLayer-editing"),l=(e="i3s-patching")=>{switch(c(),i(),_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.add("enable-feature:SceneLayer-editing",!0,!0,!0),e){case"feature-layer-view":t();break;case"i3s-patching":d()}},s=()=>{c(),i(),has.add("enable-feature:SceneLayer-editing",!1,!0,!0)},b=()=>has.add("disable-feature:idb-cache",!0,!0,!0);l("i3s-patching");


/***/ }),

/***/ 44116:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tn: () => (/* binding */ p)
/* harmony export */ });
/* unused harmony exports createFieldInfos, createFieldsContent, createPopupTemplateForFeatureReduction */
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56542);
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42453);
/* harmony import */ var _popup_content_AttachmentsContent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51777);
/* harmony import */ var _popup_content_Content_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27597);
/* harmony import */ var _popup_content_CustomContent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80004);
/* harmony import */ var _popup_content_ExpressionContent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44395);
/* harmony import */ var _popup_content_FieldsContent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3082);
/* harmony import */ var _popup_content_MediaContent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53155);
/* harmony import */ var _popup_content_RelationshipContent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73875);
/* harmony import */ var _popup_content_TextContent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23676);
/* harmony import */ var _popup_FieldInfo_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31386);
/* harmony import */ var _popup_support_FieldInfoFormat_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56473);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function p({displayField:t,editFieldsInfo:n,fields:i,objectIdField:o,title:r},s){if(!i)return null;const l=w({editFieldsInfo:n,fields:i,objectIdField:o},s);if(!l.length)return null;const a=y({titleBase:r,fields:i,displayField:t}),p=j();return new _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({title:a,content:p,fieldInfos:l})}function u(t){const{fields:n,featureReduction:i,title:o}=t,r=i.fields;if(!r)return null;const s=b(r,n??[]);if(!s.length)return null;const l=C();return new e({title:o,content:l,fieldInfos:s})}const c=(e,t)=>t.visibleFieldNames?t.visibleFieldNames.has(e.name):(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .isFieldVisibleByDefault */ .Bz)(e,t);function f(e,t){const n=e;return t&&(e=e.filter((e=>!t.includes(e.type)))),e===n&&(e=e.slice()),e.sort(d),e}function d(e,t){return"oid"===e.type?-1:"oid"===t.type?1:I(e)?-1:I(t)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((t.alias||t.name).toLocaleLowerCase())}function m(e,t){return new s({fieldInfos:w(e,t).filter((e=>e.visible))})}function w(e,n){const i=n?.visibleFieldNames;return f(e.fields??[],n?.ignoreFieldTypes||v).map((n=>new _popup_FieldInfo_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A({fieldName:n.name,isEditable:(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .isFieldEditable */ .R$)(n,e),label:n.alias,format:g(n),visible:c(n,{...e,visibleFieldNames:i})})))}function b(e,t){return e.map((e=>new l({fieldName:e.name,isEditable:!1,label:e.alias,format:F(e,t),visible:!0})))}function F(e,t){const{onStatisticField:n,onStatisticExpression:i,statisticType:o}=e;if(n){const e=t.find((e=>n===e.name));if(e)return g(e)}return"number"===i?.returnType?new a({digitSeparator:!0,places:2}):"count"===o?new a({digitSeparator:!0,places:0}):null}function g(e){switch(e.type){case"small-integer":case"integer":case"single":return new _popup_support_FieldInfoFormat_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A({digitSeparator:!0,places:0});case"double":return new _popup_support_FieldInfoFormat_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A({digitSeparator:!0,places:2});case"string":return (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .isRasterPixelValueField */ .JL)(e.name)?new _popup_support_FieldInfoFormat_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A({digitSeparator:!0,places:0}):null;default:return null}}function j(){return[new _popup_content_FieldsContent_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,new _popup_content_AttachmentsContent_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A]}function C(){return[new s]}function y(e){const t=(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .getDisplayFieldName */ .mB)(e),{titleBase:n}=e;return t?`${n}: {${t.trim()}}`:n??""}function I(e){if("name"===(e.name&&e.name.toLowerCase()))return!0;return"name"===(e.alias&&e.alias.toLowerCase())}const v=["geometry","blob","raster","guid","xml"];


/***/ }),

/***/ 60973:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ h)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(6267);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/fieldUtils.js
var fieldUtils = __webpack_require__(42453);
;// ../node_modules/@arcgis/core/symbols/support/FeatureExpressionInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var i;let p=i=class extends JSONSupport/* JSONSupport */.oY{constructor(r){super(r)}async collectRequiredFields(r,s){return (0,fieldUtils/* collectArcadeFieldNames */.Dx)(r,s,this.expression)}clone(){return new i({expression:this.expression,title:this.title})}equals(r){return this.expression===r.expression&&this.title===r.title}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"expression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"title",void 0),p=i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.FeatureExpressionInfo")],p);const c=p;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/unitConversionUtils.js
var unitConversionUtils = __webpack_require__(97046);
;// ../node_modules/@arcgis/core/symbols/support/ElevationInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var l;const m=(0,jsonMap/* strict */.O)()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),d=new jsonMap/* JSONMap */.J({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let ElevationInfo_c=l=class extends JSONSupport/* JSONSupport */.oY{constructor(e){super(e),this.offset=null}readFeatureExpressionInfo(e,r){return null!=e?e:r.featureExpression&&0===r.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,r,o,t){r[o]=e.write({},t),"0"===e.expression&&(r.featureExpression={value:0})}get mode(){const{offset:e,featureExpressionInfo:r}=this;return this._isOverridden("mode")?this._get("mode"):null!=e||r?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,r){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,r):null}clone(){return new l({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}equals(e){return this.mode===e.mode&&this.offset===e.offset&&this.unit===e.unit&&(0,maybe/* equalsMaybe */.CM)(this.featureExpressionInfo,e.featureExpressionInfo)}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:c,json:{write:!0}})],ElevationInfo_c.prototype,"featureExpressionInfo",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],ElevationInfo_c.prototype,"readFeatureExpressionInfo",null),(0,tslib_es6._)([(0,writer/* writer */.K)("featureExpressionInfo",{featureExpressionInfo:{type:c},"featureExpression.value":{type:[0]}})],ElevationInfo_c.prototype,"writeFeatureExpressionInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:m.apiValues,nonNullable:!0,json:{type:m.jsonValues,read:m.read,write:{writer:m.write,isRequired:!0}}})],ElevationInfo_c.prototype,"mode",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],ElevationInfo_c.prototype,"offset",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:unitConversionUtils/* supportedUnits */.KQ,json:{type:String,read:d.read,write:d.write}})],ElevationInfo_c.prototype,"unit",null),ElevationInfo_c=l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.ElevationInfo")],ElevationInfo_c);const h=ElevationInfo_c;


/***/ }),

/***/ 26207:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A7: () => (/* binding */ u),
/* harmony export */   Cx: () => (/* binding */ c),
/* harmony export */   Hk: () => (/* binding */ a),
/* harmony export */   JJ: () => (/* binding */ y),
/* harmony export */   UK: () => (/* binding */ S),
/* harmony export */   jM: () => (/* binding */ N),
/* harmony export */   x3: () => (/* binding */ O)
/* harmony export */ });
/* unused harmony export getDefaultSymbol2D */
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68882);
/* harmony import */ var _SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40241);
/* harmony import */ var _SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23369);
/* harmony import */ var _TextSymbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42602);
/* harmony import */ var _defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23173);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const S=_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__/* .defaultPointSymbolJSON */ .Cb),u=_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__/* .defaultPolylineSymbolJSON */ .yM),c=_SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__/* .defaultPolygonSymbolJSON */ .WR),a=_TextSymbol_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__/* .defaultTextSymbolJSON */ .JZ);function J(r){if(null==r)return null;switch(r.type){case"mesh":return null;case"point":case"multipoint":return S;case"polyline":return u;case"polygon":case"extent":return c}return null}const N=_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__/* .errorPointSymbolJSON */ .nC),O=_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__/* .errorPolylineSymbolJSON */ .HW),y=_SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__/* .errorPolygonSymbolJSON */ .b6);


/***/ }),

/***/ 23173:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cb: () => (/* binding */ l),
/* harmony export */   HW: () => (/* binding */ s),
/* harmony export */   JZ: () => (/* binding */ t),
/* harmony export */   WR: () => (/* binding */ S),
/* harmony export */   b6: () => (/* binding */ y),
/* harmony export */   nC: () => (/* binding */ r),
/* harmony export */   yM: () => (/* binding */ o)
/* harmony export */ });
/* unused harmony exports defaultColor, defaultOutlineColor */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const e=[252,146,31,255],i=(/* unused pure expression or super */ null && ([153,153,153,255])),l={type:"esriSMS",style:"esriSMSCircle",size:6,color:e,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},o={type:"esriSLS",style:"esriSLSSolid",width:.75,color:e},S={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},t={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},r={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},s={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},y={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null};


/***/ }),

/***/ 38463:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  rS: () => (/* binding */ b),
  M9: () => (/* binding */ l),
  oO: () => (/* binding */ i)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols.js + 1 modules
var symbols = __webpack_require__(30822);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/layerUtils.js
var layerUtils = __webpack_require__(40454);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/Symbol3D.js
var Symbol3D = __webpack_require__(50626);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/WebStyleSymbol.js
var WebStyleSymbol = __webpack_require__(75162);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/PointSymbol3D.js
var PointSymbol3D = __webpack_require__(66960);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleLineSymbol.js + 2 modules
var SimpleLineSymbol = __webpack_require__(40241);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/LineSymbol3D.js
var LineSymbol3D = __webpack_require__(68324);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleMarkerSymbol.js
var SimpleMarkerSymbol = __webpack_require__(23369);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/PictureMarkerSymbol.js
var PictureMarkerSymbol = __webpack_require__(72001);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleFillSymbol.js
var SimpleFillSymbol = __webpack_require__(68882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/MeshSymbol3D.js
var MeshSymbol3D = __webpack_require__(50151);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/PolygonSymbol3D.js
var PolygonSymbol3D = __webpack_require__(65216);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/TextSymbol.js
var TextSymbol = __webpack_require__(42602);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/LabelSymbol3D.js
var LabelSymbol3D = __webpack_require__(27372);
;// ../node_modules/@arcgis/core/symbols/support/symbolConversion.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const a={retainId:!1,ignoreDrivers:!1,hasLabelingContext:!0};function S(S,c=a){if(!S)return{symbol:null};const{retainId:u=a.retainId,ignoreDrivers:d=a.ignoreDrivers,hasLabelingContext:j=a.hasLabelingContext,retainCIM:D=a.retainCIM}=c;let g=null;if((0,symbols/* isSymbol3D */.wk)(S)||S instanceof WebStyleSymbol/* default */.A)g=S.clone();else if("cim"===S.type){const o=S.data?.symbol?.type;if("CIMPointSymbol"!==o)return{error:new Error/* default */.A("symbol-conversion:unsupported-cim-symbol",`CIM symbol of type '${o||"unknown"}' is unsupported in 3D`,{symbol:S})};g=D?S.clone():PointSymbol3D/* default */.A.fromCIMSymbol(S)}else if(S instanceof SimpleLineSymbol/* default */.A)g=LineSymbol3D/* default */.A.fromSimpleLineSymbol(S);else if(S instanceof SimpleMarkerSymbol/* default */.A)g=PointSymbol3D/* default */.A.fromSimpleMarkerSymbol(S);else if(S instanceof PictureMarkerSymbol/* default */.A)g=PointSymbol3D/* default */.A.fromPictureMarkerSymbol(S);else if(S instanceof SimpleFillSymbol/* default */.A)g=c.geometryType&&"mesh"===c.geometryType?MeshSymbol3D/* default */.A.fromSimpleFillSymbol(S):PolygonSymbol3D/* default */.A.fromSimpleFillSymbol(S);else{if(!(S instanceof TextSymbol/* default */.A))return{error:new Error/* default */.A("symbol-conversion:unsupported-2d-symbol",`2D symbol of type '${S.type||S.declaredClass}' is unsupported in 3D`,{symbol:S})};g=j?LabelSymbol3D/* default */.A.fromTextSymbol(S):PointSymbol3D/* default */.A.fromTextSymbol(S)}return u&&g&&"cim"!==g.type&&(g.id=S.id),d&&(0,symbols/* isSymbol3D */.wk)(g)&&g.symbolLayers.forEach((o=>o.ignoreDrivers=!0)),{symbol:g}}

;// ../node_modules/@arcgis/core/symbols/support/jsonUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function l(o,e,n,t){const s=jsonUtils_a(o,{},{context:t,isLabelSymbol:!1});null!=s&&(e[n]=s)}function i(o,e,n,t){const s=jsonUtils_a(o,{},{context:t,isLabelSymbol:!0});null!=s&&(e[n]=s)}function m(o){return o instanceof Symbol3D/* default */.A||o instanceof WebStyleSymbol/* default */.A}function jsonUtils_a(o,t,r){if(null==o)return null;const{context:l,isLabelSymbol:i}=r,a=l?.origin,b=l?.messages;if("web-scene"===a&&!m(o)){const n=S(o,{retainCIM:!0,hasLabelingContext:i});return null!=n.symbol?n.symbol.write(t,l):(b?.push(new Error/* default */.A("symbol:unsupported",`Symbols of type '${o.declaredClass}' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView`,{symbol:o,context:l,error:n.error})),null)}return("web-map"===a||"portal-item"===a&&!(0,layerUtils/* isSceneServiceLayer */.TU)(l?.layer))&&m(o)?(b?.push(new Error/* default */.A("symbol:unsupported",`Symbols of type '${o.declaredClass}' are not supported in web maps and portal items. Use 2D symbology and CIMSymbol instead when working with MapView`,{symbol:o,context:l})),null):o.write(t,l)}function b(e,n){return (0,symbols/* readSymbol */.Bu)(e,null,n)}


/***/ }),

/***/ 28051:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bo: () => (/* binding */ p),
/* harmony export */   cF: () => (/* binding */ c),
/* harmony export */   jg: () => (/* binding */ w),
/* harmony export */   o5: () => (/* binding */ d),
/* harmony export */   yA: () => (/* binding */ b)
/* harmony export */ });
/* unused harmony exports cachedStyles, cleanupStyleUtilsCache */
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86394);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98849);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40189);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20909);
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10282);
/* harmony import */ var _portal_PortalQueryParams_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99990);
/* harmony import */ var _support_featureFlags_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59346);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let u={};async function f(e,t){try{return{data:(await b(e,t)).data,baseUrl:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .removeFile */ .nM)(e),styleUrl:e}}catch(o){return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .throwIfAbortError */ .QP)(o),null}}function i(e,t,r){const o=null!=t.portal?t.portal:_portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.getDefault();let s;const l=`${o.url} - ${o.user&&o.user.username} - ${e}`;return u[l]||(u[l]=y(e,o,r).then((e=>(s=e,e.fetchData()))).then((t=>({data:t,baseUrl:s.itemUrl??"",styleName:e})))),u[l]}function m(){u&&(u={})}function y(e,r,o){return r.load(o).then((()=>{const t=new _portal_PortalQueryParams_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A({disableExtraQuery:!0,query:`owner:${h} AND type:${j} AND typekeywords:"${e}"`});return r.queryItems(t,o)})).then((({results:r})=>{let s=null;const n=e.toLowerCase();if(r&&Array.isArray(r))for(const e of r){const t=e.typeKeywords?.some((e=>e.toLowerCase()===n));if(t&&e.type===j&&e.owner===h){s=e;break}}if(!s)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("symbolstyleutils:style-not-found",`The style '${e}' could not be found`,{styleName:e});return s.load(o)}))}function c(e,r,o){return null!=e?.styleUrl?f(e.styleUrl,o):null!=e?.styleName?i(e.styleName,r,o):Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function p(e){return null===e||"CIMSymbolReference"===e.type?e:{type:"CIMSymbolReference",symbol:e}}function d(e,t,r=["gltf"]){if("cimRef"===t)return e.cimRef;if(e.formatInfos&&!(0,_support_featureFlags_js__WEBPACK_IMPORTED_MODULE_6__/* .enableWebStyleForceWOSR */ .Vd)())for(const o of r){const t=e.formatInfos.find((e=>e.type===o));if(t)return t.href}return e.webRef}function b(t,r){const s={responseType:"json",query:{f:"json"},...r};return (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .normalize */ .S8)(t),s)}const h="esri_en",j="Style",w="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json";


/***/ }),

/***/ 97046:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ao: () => (/* binding */ r),
/* harmony export */   KQ: () => (/* binding */ o)
/* harmony export */ });
/* unused harmony export supportsUnit */
/* harmony import */ var _renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10301);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function n(n){return!!n&&null!=t[n]}function r(n){return 1/(_renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .meterIn */ .j[n]||1)}function e(){const n=Object.keys(_renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .meterIn */ .j);return n.sort(),n}const o=e();


/***/ }),

/***/ 96023:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TA: () => (/* binding */ r),
/* harmony export */   Z3: () => (/* binding */ t),
/* harmony export */   ZJ: () => (/* binding */ s),
/* harmony export */   w5: () => (/* binding */ a)
/* harmony export */ });
/* unused harmony exports versionCollection, versionCollectionCount */
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33880);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const r=(0,_core_uuid_js__WEBPACK_IMPORTED_MODULE_0__/* .generateLowercaseBracedUUID */ .vD)(),t=new Map,n=new Map,o=new Map;async function s(e,t,o=!1){if(!e||!t)return!0;const s=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),a=n.get(s)?.entries();if(a)for(const[n,i]of a)if(i.name===t){const e=!i.stack?.hasForwardEdits();if(!e&&o){const[{deleteForwardEdits:e},{default:t}]=await Promise.all([__webpack_require__.e(/* import() */ 3093).then(__webpack_require__.bind(__webpack_require__, 43093)),__webpack_require__.e(/* import() */ 741).then(__webpack_require__.bind(__webpack_require__, 80741))]);return e(s,n,new t({sessionId:r,moment:i.moment}))}return e}return!0}function a(e,r){if(!e)return!1;const t=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),o=n.get(t)?.entries();if(o)for(const[n,s]of o)if(s.name===r){return"edit"===s.lockType}return!1}


/***/ }),

/***/ 19370:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MA: () => (/* binding */ l),
/* harmony export */   m0: () => (/* binding */ I),
/* harmony export */   wH: () => (/* binding */ w)
/* harmony export */ });
/* unused harmony exports createAttributeDataIndex, createGeometryDescriptor, createGeometryDescriptorForDraco, createGeometryDescriptorFromDefinition, createGeometryDescriptorFromSchema, createRawView, getBytesPerValue, isValueType, readDateStringArray, readHeader, readStringArray, valueType2ArrayBufferReader, valueType2TypedArrayClassMap */
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19251);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(539);
/* harmony import */ var _LEPCC_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68538);
/* harmony import */ var _webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50645);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const u=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function a(t,n,r){let o="",i=0;for(;i<r;){const u=t[n+i];if(u<128)o+=String.fromCharCode(u),i++;else if(u>=192&&u<224){if(i+1>=r)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const a=(31&u)<<6|63&t[n+i+1];o+=String.fromCharCode(a),i+=2}else if(u>=224&&u<240){if(i+2>=r)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(15&u)<<12|(63&t[n+i+1])<<6|63&t[n+i+2];o+=String.fromCharCode(a),i+=3}else{if(!(u>=240&&u<248))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(i+3>=r)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(7&u)<<18|(63&t[n+i+1])<<12|(63&t[n+i+2])<<6|63&t[n+i+3];if(a>=65536){const e=55296+(a-65536>>10),t=56320+(1023&a);o+=String.fromCharCode(e,t)}else o+=String.fromCharCode(a);i+=4}}}return o}function s(e,t){const n={byteOffset:0,byteCount:0,fields:Object.create(null)};let r=0;for(let o=0;o<t.length;o++){const i=t[o],u=i.valueType||i.type,a=A[u];n.fields[i.property]=a(e,r),r+=h[u].BYTES_PER_ELEMENT}return n.byteCount=r,n}function c(e,t,n){return f(e,t,n).map((e=>{const t=e?Date.parse(e):null;return t&&!Number.isNaN(t)?t:null}))}function f(t,n,r){const o=[];let i,u,s=0;for(u=0;u<t;u+=1){if(i=n[u],i>0){if(o.push(a(r,s,i-1)),0!==r[s+i-1])throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("string-array-error","Invalid string array: missing null termination.")}else o.push(null);s+=i}return o}function l(e,t){return new(0,h[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function d(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}function b(n,r,o){const i=null!=r.header?s(n,r.header):{byteOffset:0,byteCount:0,fields:{count:o}},u={header:i,byteOffset:i.byteCount,byteCount:0,entries:Object.create(null)};let a=i.byteCount;for(let s=0;s<r.ordering.length;s++){const n=r.ordering[s],o=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(r[n]);if(o.count=i.fields.count??0,"String"===o.valueType){if(o.byteOffset=a,o.byteCount=i.fields[n+"ByteCount"],"UTF-8"!==o.encoding)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("unsupported-encoding","Unsupported String encoding.",{encoding:o.encoding});if(o.timeEncoding&&"ECMA_ISO8601"!==o.timeEncoding)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("unsupported-time-encoding","Unsupported time encoding.",{timeEncoding:o.timeEncoding})}else{if(!O(o.valueType))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("unsupported-value-type","Unsupported binary valueType",{valueType:o.valueType});{const e=E(o.valueType);a+=a%e!=0?e-a%e:0,o.byteOffset=a,o.byteCount=e*o.valuesPerElement*o.count}}a+=o.byteCount??0,u.entries[n]=o}return u.byteCount=a-u.byteOffset,u}function y(t,n,r){if(n!==t&&u.error(`Invalid ${r} buffer size\n expected: ${t}, actual: ${n})`),n<t)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("buffer-too-small","Binary buffer is too small",{expectedSize:t,actualSize:n})}function g(e){return{isDraco:!1,isLegacy:!1,color:null!=e.color,normal:null!=e.normal,uv0:null!=e.uv0,uvRegion:null!=e.uvRegion,featureIndex:null!=e.faceRange&&null!=e.featureId}}function w(e,t){const n=s(e,t&&t.header);let r=n.byteCount;const o={isDraco:!1,header:n,byteOffset:n.byteCount,byteCount:0,vertexAttributes:{}},i=n.fields,u=null!=i.vertexCount?i.vertexCount:i.count;for(const s of t.ordering){if(!t.vertexAttributes[s])continue;const e={...t.vertexAttributes[s],byteOffset:r,count:u},n=C[s]||"_"+s;o.vertexAttributes[n]=e,r+=E(e.valueType)*e.valuesPerElement*u}const a=i.faceCount;if(t.faces&&a){o.faces={};for(const e of t.ordering){if(!t.faces[e])continue;const n={...t.faces[e],byteOffset:r,count:a};o.faces[e]=n,r+=E(n.valueType)*n.valuesPerElement*a}}const c=i.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&c){o.featureAttributes={};for(const e of t.featureAttributeOrder){if(!t.featureAttributes[e])continue;const n={...t.featureAttributes[e],byteOffset:r,count:c};o.featureAttributes[e]=n;r+=("UInt64"===n.valueType?8:E(n.valueType))*n.valuesPerElement*c}}return y(r,e.byteLength,"geometry"),o.byteCount=r-o.byteOffset,o}function p(e,t){return!(!e||!e.compressedAttributes||"draco"!==e.compressedAttributes.encoding)?v(e.compressedAttributes.attributes):e?g(e):m(t)}function m(e){const t={isDraco:!1,isLegacy:!0,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1};for(const n of e.ordering)if(e.vertexAttributes[n])switch(n){case"position":break;case"normal":t.normal=!0;break;case"color":t.color=!0;break;case"uv0":t.uv0=!0;break;case"region":t.uvRegion=!0}return e.featureAttributes&&e.featureAttributeOrder&&(t.featureIndex=!0),t}function v(e){const t={isDraco:!0,isLegacy:!1,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1};for(const n of e)switch(n){case"position":break;case"normal":t.normal=!0;break;case"uv0":t.uv0=!0;break;case"color":t.color=!0;break;case"uv-region":t.uvRegion=!0;break;case"feature-index":t.featureIndex=!0}return t}const C={position:_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_4__/* .VertexAttribute */ .r.POSITION,normal:_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_4__/* .VertexAttribute */ .r.NORMAL,color:_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_4__/* .VertexAttribute */ .r.COLOR,uv0:_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_4__/* .VertexAttribute */ .r.UV0,region:_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_4__/* .VertexAttribute */ .r.UVREGION};function I(t,n,i){if("lepcc-rgb"===t.encoding)return (0,_LEPCC_js__WEBPACK_IMPORTED_MODULE_3__/* .decodeRGB */ .mb)(n);if("lepcc-intensity"===t.encoding)return (0,_LEPCC_js__WEBPACK_IMPORTED_MODULE_3__/* .decodeIntensity */ .Ax)(n);if(null!=t.encoding&&""!==t.encoding)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");t["attributeByteCounts "]&&!t.attributeByteCounts&&(u.warn("Warning: Trailing space in 'attributeByteCounts '."),t.attributeByteCounts=t["attributeByteCounts "]),"ObjectIds"===t.ordering[0]&&t.hasOwnProperty("objectIds")&&(u.warn("Warning: Case error in objectIds"),t.ordering[0]="objectIds");const a=b(n,t,i);y(a.byteOffset+a.byteCount,n.byteLength,"attribute");const s=a.entries.attributeValues||a.entries.objectIds;if(s){if("String"===s.valueType){const e=a.entries.attributeByteCounts,t=l(n,e),r=d(n,s);return s.timeEncoding?c(e.count,t,r):f(e.count,t,r)}return l(n,s)}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const h={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},A={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function O(e){return h.hasOwnProperty(e)}function E(e){return O(e)?h[e].BYTES_PER_ELEMENT:0}


/***/ }),

/***/ 88169:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  s1: () => (/* binding */ ie)
});

// UNUSED EXPORTS: MbsIntersectResult, SymbolInfo, addWraparound, checkPointCloudLayerCompatibleWithView, checkPointCloudLayerValid, checkRecyclable, checkSceneLayerCompatibleWithView, checkSceneLayerValid, checkSpatialReference, checkSpatialReferences, computeVisibilityObb, containsDraco, extractWkid, filterInPlace, findFieldsCaseInsensitive, findIntersectingNodes, getCacheKeySuffix, getCachedAttributeValue, getClipRect, getIndexCrs, getSymbolInfo, getVertexCrs, intersectBoundingRectWithMbs, invalidateMbs, invalidateObb, isSupportedLocalModeProjection, isValidMbs, isValidObb, objectIdFilter, rendererNeedsTextures, transformObb, transparentEdgeMaterial, whenGraphicAttributes

// EXTERNAL MODULE: ../node_modules/@arcgis/core/request.js
var request = __webpack_require__(86394);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var core_has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/typedArrayUtil.js
var typedArrayUtil = __webpack_require__(86942);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat3.js
var mat3 = __webpack_require__(46615);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat3f64.js
var mat3f64 = __webpack_require__(76287);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat4.js
var mat4 = __webpack_require__(37046);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat4f64.js
var mat4f64 = __webpack_require__(56192);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/quat.js
var quat = __webpack_require__(76743);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/quatf64.js
var quatf64 = __webpack_require__(46991);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3.js
var vec3 = __webpack_require__(21839);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3f64.js
var vec3f64 = __webpack_require__(22279);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/ellipsoidUtils.js
var ellipsoidUtils = __webpack_require__(47936);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projection.js + 1 modules
var projection = __webpack_require__(13484);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/spatialReferenceEllipsoidUtils.js
var spatialReferenceEllipsoidUtils = __webpack_require__(32937);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projection/computeTranslationToOriginAndRotation.js + 1 modules
var computeTranslationToOriginAndRotation = __webpack_require__(38394);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projection/projectBuffer.js
var projectBuffer = __webpack_require__(84119);
;// ../node_modules/@arcgis/core/geometry/projection/projectVectorToVector.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function projectVectorToVector_t(n,t,e,c){return!(null==t||null==c||n.length<2)&&(2===n.length&&(projectVectorToVector_o[0]=n[0],projectVectorToVector_o[1]=n[1],projectVectorToVector_o[2]=0,n=projectVectorToVector_o),r(n,t,0,e,c,0,1))}const projectVectorToVector_o=(0,vec3f64.c)();

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/aaBoundingRect.js
var aaBoundingRect = __webpack_require__(80510);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(87926);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/Query.js + 1 modules
var Query = __webpack_require__(24587);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/i3s/I3SBinaryReader.js
var I3SBinaryReader = __webpack_require__(19370);
;// ../node_modules/@arcgis/core/views/3d/layers/i3s/I3SProjectionUtil.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function I3SProjectionUtil_r(o,n,r,s){const i=c(o,n,r),h=t();return a(r,i,h,s),h}const I3SProjectionUtil_s=1,I3SProjectionUtil_i=5-I3SProjectionUtil_s;function c(t,a,r){const c=o(),h=t[3],e=2**(Math.ceil(Math.log(h)*Math.LOG2E/I3SProjectionUtil_i)*I3SProjectionUtil_i+I3SProjectionUtil_s);if(r.isGeographic){const o=e/n(r).radius*180/Math.PI,a=Math.round(t[1]/o),s=Math.max(-90,Math.min(90,a*o)),i=o/Math.cos((Math.abs(s)-o/2)/180*Math.PI),h=Math.round(t[0]/i)*i;c[0]=h,c[1]=s}else{const o=Math.round(t[0]/e),n=Math.round(t[1]/e);c[0]=o*e,c[1]=n*e}const m=t[2]+a,M=Math.round(m/e);return c[2]=M*e,c}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(96220);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec4f64.js
var vec4f64 = __webpack_require__(52712);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/interfaces.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var A;!function(A){A[A.INVISIBLE=0]="INVISIBLE",A[A.TRANSPARENT=1]="TRANSPARENT",A[A.OPAQUE=2]="OPAQUE"}(A||(A={}));

;// ../node_modules/@arcgis/core/views/3d/layers/support/edgeUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function edgeUtils_c(e){return e&&e.enabled&&(r(e)||s(e))&&null!=e.edges}function edgeUtils_l(e){return e&&e.enabled&&e.edges||null}function edgeUtils_u(e,n){return edgeUtils_a(edgeUtils_l(e),n)}function edgeUtils_a(r,s){if(null==r)return null;const i=null!=r.color?o(e.toUnitRGBA(r.color)):t(0,0,0,0),c=n(r.size),l=n(r.extensionLength);switch(r.type){case"solid":return edgeUtils_f({color:i,size:c,extensionLength:l,...s});case"sketch":return edgeUtils_p({color:i,size:c,extensionLength:l,...s});default:return}}function edgeUtils_f(e){return{...edgeUtils_h,...e,type:"solid"}}function edgeUtils_p(e){return{...edgeUtils_g,...e,type:"sketch"}}const edgeUtils_h={color:(0,vec4f64.f)(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:A.OPAQUE,hasSlicePlane:!1},edgeUtils_g={color:(0,vec4f64.f)(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:A.OPAQUE,hasSlicePlane:!1};

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/support/symbolColorUtils.js
var symbolColorUtils = __webpack_require__(55623);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/support/orientedBoundingBox.js + 1 modules
var orientedBoundingBox = __webpack_require__(29709);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Attribute.js
var Attribute = __webpack_require__(70807);
;// ../node_modules/@arcgis/core/views/3d/layers/i3s/I3SUtil.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function P(e){return e?parseInt(e.substring(e.lastIndexOf("/")+1,e.length),10):void 0}function $(e){if(has("disable-feature:i3s-draco")||!e)return!1;for(const t of e)for(const e of t.geometryBuffers)if("draco"===e.compressedAttributes?.encoding)return!0;return!1}function V(e,t,r,n){r.traverse(t,(t=>{const r=t.mbs;return(null!=r&&Y(e,r))!==X.OUTSIDE&&(n(t),!0)}))}function Q(e,t,r){let n=0,o=0;for(let a=0;a<t.length&&n<e.length;a++)e[n]===t[a]&&(r(a)&&(e[o]=e[n],o++),n++);e.length=o}function Z(e,r,n){let o=0,a=0;for(;o<n.length;){t(e,n[o])>=0===r&&(n[a]=n[o],a++),o++}n.length=a}const H=(0,aaBoundingRect/* create */.vt)();function J(e,t){if(0===t.rotationScale[1]&&0===t.rotationScale[2]&&0===t.rotationScale[3]&&0===t.rotationScale[5]&&0===t.rotationScale[6]&&0===t.rotationScale[7])return H[0]=(e[0]-t.position[0])/t.rotationScale[0],H[1]=(e[1]-t.position[1])/t.rotationScale[4],H[2]=(e[2]-t.position[0])/t.rotationScale[0],H[3]=(e[3]-t.position[1])/t.rotationScale[4],H}var X;function Y(e,t){const r=t[0],n=t[1],o=t[3],a=e[0]-r,i=r-e[2],s=e[1]-n,l=n-e[3],c=Math.max(a,i,0),u=Math.max(s,l,0),f=c*c+u*u;if(f>o*o)return X.OUTSIDE;if(f>0)return X.INTERSECTS_CENTER_OUTSIDE;return-Math.max(a,i,s,l)>o?X.INSIDE:X.INTERSECTS_CENTER_INSIDE}function ee(e,t,r){const n=[],o=r?.missingFields,a=r?.originalFields;for(const i of e){const e=i.toLowerCase();let r=!1;for(const o of t)if(e===o.name.toLowerCase()){n.push(o.name),r=!0,a&&a.push(i);break}!r&&o&&o.push(i)}return n}async function te(e,t,r,o,a){if(0===t.length)return[];const i=e.attributeStorageInfo;if(null!=e.associatedLayer)try{return await ne(e.associatedLayer,t,r,o)}catch(s){if(e.associatedLayer.loaded)throw s}if(i){const s=re(t,r,a);if(null==s)throw new n("scenelayer:features-not-loaded","Tried to query attributes for unloaded features");const l=e.parsedUrl.path;return(await Promise.all(s.map((e=>ae(l,i,e.node,e.indices,o).then((t=>{for(let r=0;r<e.graphics.length;r++){const n=e.graphics[r],o=t[r];if(n.attributes)for(const e in n.attributes)e in o||(o[e]=n.attributes[e]);n.attributes=o}return e.graphics})))))).flat()}throw new n("scenelayer:no-attribute-source","This scene layer does not have a source for attributes available")}function re(e,t,r){const n=new Map,o=[],a=r();for(const i of e){const e=i.attributes[t];for(let t=0;t<a.length;t++){const r=a[t],s=r.featureIds.indexOf(e);if(s>=0){let e=n.get(r.node);e||(e={node:r.node,indices:[],graphics:[]},o.push(e),n.set(r.node,e)),e.indices.push(s),e.graphics.push(i);for(let r=t;r>0;r--)a[r]=a[r-1];a[0]=r;break}}}return o}async function ne(e,t,r,n){t.sort(((e,t)=>e.attributes[r]-t.attributes[r]));const o=t.map((e=>e.attributes[r])),a=[],i=ee(n,e.fields,{originalFields:a}),s=await oe(e,o,i);for(let l=0;l<t.length;l++){const e=t[l],r=s[l],n={};if(e.attributes)for(const t in e.attributes)n[t]=e.attributes[t];for(let t=0;t<a.length;t++)n[a[t]]=r[i[t]];e.attributes=n}return t}function oe(e,t,o){const a=e.capabilities.query.maxRecordCount;if(null!=a&&t.length>a){const n=r(t,a);return Promise.all(n.map((t=>oe(e,t,o)))).then((e=>e.flat()))}const i=new z({objectIds:t,outFields:o,orderByFields:[e.objectIdField]});return e.queryFeatures(i).then((e=>{if(e&&e.features&&e.features.length===t.length)return e.features.map((e=>e.attributes));throw new n("scenelayer:feature-not-in-associated-layer","Feature not found in associated feature layer")}))}function ae(e,t,r,n,o){return ie(e,t,r.resources.attributes,n,o)}async function ie(t,r,n,o,a){const i=[];for(const e of r)if(e&&a.includes(e.name)){const r=`${t}/nodes/${n}/attributes/${e.key}/0`;i.push({url:r,storageInfo:e})}const s=await Promise.allSettled(i.map((t=>(0,request/* default */.A)(t.url,{responseType:"array-buffer"}).then((e=>(0,I3SBinaryReader/* readBinaryAttribute */.m0)(t.storageInfo,e.data)))))),l=[];for(const e of o){const t={};for(let r=0;r<s.length;r++){const n=s[r];if("fulfilled"===n.status){const o=n.value;t[i[r].storageInfo.name]=ce(o,e)}}l.push(t)}return l}!function(e){e[e.OUTSIDE=0]="OUTSIDE",e[e.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",e[e.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",e[e.INSIDE=3]="INSIDE"}(X||(X={}));const se=-32768,le=-(2**31);function ce(e,t){if(!e)return null;const r=e[t];if((0,typedArrayUtil/* isInt16Array */.IY)(e))return r===se?null:r;if((0,typedArrayUtil/* isInt32Array */._G)(e))return r===le?null:r;return r!=r?null:r}function ue(e){const t=e.store,r=t.indexCRS||t.geographicCRS,o=void 0===r?t.indexWKT:void 0;if(o){if(!e.spatialReference)throw new n("layerview:no-store-spatial-reference-wkt-index-and-no-layer-spatial-reference","Found indeWKT in the scene layer store but no layer spatial reference",{});if(o!==e.spatialReference.wkt)throw new n("layerview:store-spatial-reference-wkt-index-incompatible","The indeWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const a=r?new j(P(r)):e.spatialReference;return a.equals(e.spatialReference)?e.spatialReference:a}function fe(e){const t=e.store,r=t.vertexCRS||t.projectedCRS,o=void 0===r?t.vertexWKT:void 0;if(o){if(!e.spatialReference)throw new n("layerview:no-store-spatial-reference-wkt-vertex-and-no-layer-spatial-reference","Found vertexWKT in the scene layer store but no layer spatial reference",{});if(o!==e.spatialReference.wkt)throw new n("layerview:store-spatial-reference-wkt-vertex-incompatible","The vertexWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const a=r?new j(P(r)):e.spatialReference;return a.equals(e.spatialReference)?e.spatialReference:a}function pe(e,t){return null==t?"@null":t===M(t)?"@ECEF":e.equals(t)?"":null!=t.wkid?"@"+t.wkid:null}function me(e,t,r){if(!v(e,t))throw new n("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});if("local"===r&&!de(e,t))throw new n("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{})}function he(e,t,r){if(e.serviceUpdateTimeStamp?.lastUpdate!==t.serviceUpdateTimeStamp?.lastUpdate||!r.isEmpty||e.associatedLayer?.url!==t.associatedLayer?.url)throw new n("layerview:recycle-failed")}function de(e,t){return e.equals(t)||e.isWGS84&&t.isWebMercator||e.isWebMercator&&t.isWGS84}function ye(e,t,r){const n=ue(e),o=fe(e);me(n,t,r),me(o,t,r)}function ge(e){return(null==e.geometryType||"triangles"===e.geometryType)&&((null==e.topology||"PerAttributeArray"===e.topology)&&null!=e.vertexAttributes?.position)}function be(e){if(null==e.store?.defaultGeometrySchema||!ge(e.store.defaultGeometrySchema))throw new n("scenelayer:unsupported-geometry-schema","The geometry schema of this scene layer is not supported.",{url:e.parsedUrl.path})}function Se(e,t){ye(e,t.spatialReference,t.viewingMode)}function we(e){return null!=e.geometryType&&"points"===e.geometryType&&((null==e.topology||"PerAttributeArray"===e.topology)&&((null==e.encoding||""===e.encoding||"lepcc-xyz"===e.encoding)&&null!=e.vertexAttributes?.position))}function Te(e){if(null==e.store?.defaultGeometrySchema||!we(e.store.defaultGeometrySchema))throw new n("pointcloud:unsupported-geometry-schema","The geometry schema of this point cloud scene layer is not supported.",{})}function Ee(e,t){me(e.spatialReference,t.spatialReference,t.viewingMode)}function ve(e){return"simple"===e.type||"class-breaks"===e.type||"unique-value"===e.type}function je(e){return"mesh-3d"===e.type}function Me(e){if(null==e||!ve(e))return!0;if(("unique-value"===e.type||"class-breaks"===e.type)&&null==e.defaultSymbol)return!0;const t=e.getSymbols();if(0===t.length)return!0;for(const r of t){if(!je(r)||0===r.symbolLayers.length)return!0;for(const e of r.symbolLayers.items)if("fill"!==e.type||null==e.material?.color||"replace"!==e.material.colorMixMode)return!0}return!1}const Re=edgeUtils_f({color:[0,0,0,0],opacity:0});class Ie{constructor(){this.edgeMaterial=null,this.material=null,this.castShadows=!0}}function xe(e){const t=new Ie;let r=!1,n=!1;for(const o of e.symbolLayers.items)if("fill"===o.type&&o.enabled){const e=o.material,a=o.edges;if(null!=e&&!r){const n=e.color,a=O(e.colorMixMode);t.material=null!=n?{color:[n.r/255,n.g/255,n.b/255],alpha:n.a,colorMixMode:a}:{color:[1,1,1],alpha:1,colorMixMode:_.Multiply},t.castShadows=o.castShadows,r=!0}null==a||n||(t.edgeMaterial=F(a,{}),n=!0)}return t.material||(t.material={color:[1,1,1],alpha:1,colorMixMode:_.Multiply}),t}function qe(e,t){return(0|e)+(0|t)|0}function ke(e,t,r,n,o=0){n===M(n)?t.isGeographic?_e(e,r,t,o):Oe(e,r,t,o):t.isWGS84&&(n.isWebMercator||N(n))?Ce(t,e,n,r,o):t.isWebMercator&&N(n)?Ae(t,e,n,r,o):e===r?(r.center[2]+=o,I(r.center,t,0,r.center,n,0,1)):(h(r.center,e.center[0],e.center[1],e.center[2]+o),I(r.center,t,0,r.center,n,0,1),u(r.quaternion,e.quaternion),d(r.halfSize,e.halfSize))}function Ce(e,t,r,n,o){d(We,t.center),We[2]+=o;const a=M(r);I(We,e,0,We,a,0,1),Fe(a,t,We,r,n)}const Ue=new Array(24),Ne=new Attribute/* Vertices */.K(Ue,3),ze=(0,vec3f64.c)(),We=(0,vec3f64.c)(),De=(0,mat3f64.a)();function Ae(e,t,r,n,o){d(We,t.center),We[2]+=o,Fe(e,t,We,r,n)}function Fe(e,t,r,n,o){const a=i(De,t.quaternion);for(let i=0;i<8;++i){for(let e=0;e<3;++e)ze[e]=t.halfSize[e]*(0!=(i&1<<e)?-1:1);for(let e=0;e<3;++e){let t=r[e];for(let r=0;r<3;++r)t+=ze[r]*a[3*r+e];Ue[3*i+e]=t}}I(Ue,e,0,Ue,n,0,8),G(Ne,o)}function Oe(e,t,r,n){K(e,Qe),h(t.center,e.center[0],e.center[1],e.center[2]+n),R(r,t.center,$e,M(r)),h(t.center,$e[12],$e[13],$e[14]);const o=2*Math.sqrt(1+$e[0]+$e[5]+$e[10]);Ve[0]=($e[6]-$e[9])/o,Ve[1]=($e[8]-$e[2])/o,Ve[2]=($e[1]-$e[4])/o,Ve[3]=.25*o,f(t.quaternion,Ve,e.quaternion),p(Ve,t.quaternion);let a=0,i=0,s=0;for(const l of Qe)l[2]+=n,I(l,r,0,l,M(r),0,1),y(Xe,l,t.center),g(Xe,Xe,Ve),a=Math.max(a,Math.abs(Xe[0])),i=Math.max(i,Math.abs(Xe[1])),s=Math.max(s,Math.abs(Xe[2]));h(t.halfSize,a,i,s)}function _e(e,t,r,n){const o=E(r),a=1+Math.max(0,n)/(o.radius+e.center[2]);h(t.center,e.center[0],e.center[1],e.center[2]+n),I(t.center,r,0,t.center,M(r),0,1),u(t.quaternion,e.quaternion),p(Ve,e.quaternion),h(Xe,0,0,1),g(Xe,Xe,Ve),h(Xe,e.halfSize[0]*Math.abs(Xe[0]),e.halfSize[1]*Math.abs(Xe[1]),e.halfSize[2]*Math.abs(Xe[2])),b(Xe,Xe,o.inverseFlattening),S(t.halfSize,e.halfSize,Xe),b(t.halfSize,t.halfSize,a)}function Le(e,t,r,n,o,a){if(!a||0===a.length||null==t||!e.mbs)return null;const i=D(e.mbs,o,r,t);l(et,i);let s=null;const c=()=>{if(!s)if(s=Qe,k(He),null!=e.serviceObb){ke(e.serviceObb,r,Je,t,o),K(Je,s);for(const e of s)w(e,e,et),C(He,e)}else{const n=e.mbs;if(!n)return;const a=n[3];x(n,r,Xe,t),w(Xe,Xe,et),Xe[2]+=o;for(let e=0;e<8;++e){const t=1&e?a:-a,r=2&e?a:-a,n=4&e?a:-a,o=s[e];d(o,[Xe[0]+t,Xe[1]+r,Xe[2]+n]),C(He,o)}}};let u=1/0,f=-1/0;const p=e=>{if("replace"!==e.type)return;const r=e.geometry;if(!r?.hasZ)return;k(Ze);const o=r.spatialReference||n,a=r.rings.reduce(((e,r)=>r.reduce(((e,r)=>(x(r,o,Xe,t),w(Xe,Xe,et),C(Ze,Xe),Math.min(Xe[2],e))),e)),1/0);c(),U(He,Ze)&&(u=Math.min(u,a),f=Math.max(f,a))};if(a.forEach((e=>p(e))),u===1/0)return null;const m=(e,t,r)=>{w(Xe,r,i),e[t]=Xe[0],e[t+1]=Xe[1],e[t+2]=Xe[2],t+=24,r[2]=u,w(Xe,r,i),e[t]=Xe[0],e[t+1]=Xe[1],e[t+2]=Xe[2],t+=24,r[2]=f,w(Xe,r,i),e[t]=Xe[0],e[t+1]=Xe[1],e[t+2]=Xe[2]};for(let l=0;l<8;++l)m(Ye.data,3*l,s[l]);return G(Ye)}function Ge(e){return null!=e&&e.halfSize[0]>=0}function Ke(e){return e[3]>=0}function Be(e){null!=e&&(e.halfSize[0]=-1)}function Pe(e){null!=e&&(e[3]=-1)}const $e=(0,mat4f64.a)(),Ve=(0,quatf64.a)(),Qe=(/* unused pure expression or super */ null && ([[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]])),Ze=(0,aaBoundingRect/* create */.vt)(),He=(0,aaBoundingRect/* create */.vt)(),Je=(0,orientedBoundingBox/* create */.vt)(),Xe=(0,vec3f64.c)(),Ye={data:new Array(72),size:3,exclusive:!0,stride:3},et=(0,mat4f64.a)();


/***/ }),

/***/ 68538:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ax: () => (/* binding */ w),
/* harmony export */   Me: () => (/* binding */ c),
/* harmony export */   mb: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const t=!0,o={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function r(e,r,n){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,n+o.identifierOffset,o.identifierLength)),version:r.getUint16(n+o.versionOffset,t),checksum:r.getUint32(n+o.checksumOffset,t)}}const n={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function i(e,o){return{sizeLo:e.getUint32(o+n.sizeLo,t),sizeHi:e.getUint32(o+n.sizeHi,t),minX:e.getFloat64(o+n.minX,t),minY:e.getFloat64(o+n.minY,t),minZ:e.getFloat64(o+n.minZ,t),maxX:e.getFloat64(o+n.maxX,t),maxY:e.getFloat64(o+n.maxY,t),maxZ:e.getFloat64(o+n.maxZ,t),errorX:e.getFloat64(o+n.errorX,t),errorY:e.getFloat64(o+n.errorY,t),errorZ:e.getFloat64(o+n.errorZ,t),count:e.getUint32(o+n.count,t),reserved:e.getUint32(o+n.reserved,t)}}function c(t){const c=new DataView(t,0);let d=0;const{identifier:l,version:a}=r(t,c,d);if(d+=o.byteCount,"LEPCC     "!==l)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Bad identifier");if(a>1)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Unknown version");const u=i(c,d);d+=n.byteCount;if(u.sizeHi*2**32+u.sizeLo!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Bad size");const f=new Float64Array(3*u.count),h=[],w=[],g=[],p=[];if(d=s(t,d,h),d=s(t,d,w),d=s(t,d,g),d=s(t,d,p),d!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Bad length");let m=0,U=0;for(let e=0;e<h.length;e++){U+=h[e];let t=0;for(let o=0;o<w[e];o++){t+=g[m];const e=p[m];f[3*m]=Math.min(u.maxX,u.minX+2*u.errorX*t),f[3*m+1]=Math.min(u.maxY,u.minY+2*u.errorY*U),f[3*m+2]=Math.min(u.maxZ,u.minZ+2*u.errorZ*e),m++}}return{errorX:u.errorX,errorY:u.errorY,errorZ:u.errorZ,result:f}}function s(e,t,o){const r=[];t=d(e,t,r);const n=[];for(let i=0;i<r.length;i++){n.length=0,t=d(e,t,n);for(let e=0;e<n.length;e++)o.push(n[e]+r[i])}return t}function d(o,r,n){const i=new DataView(o,r),c=i.getUint8(0),s=31&c,d=!!(32&c),l=(192&c)>>6;let a=0;if(0===l)a=i.getUint32(1,t),r+=5;else if(1===l)a=i.getUint16(1,t),r+=3;else{if(2!==l)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Bad count type");a=i.getUint8(1),r+=2}if(d)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","LUT not implemented");const u=Math.ceil(a*s/8),f=new Uint8Array(o,r,u);let h=0,w=0,g=0;const p=-1>>>32-s;for(let e=0;e<a;e++){for(;w<s;)h|=f[g]<<w,w+=8,g+=1;n[e]=h&p,h>>>=s,w-=s,w+s>32&&(h|=f[g-1]>>8-w)}return r+g}const l={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function a(e,o){return{sizeLo:e.getUint32(o+l.sizeLo,t),sizeHi:e.getUint32(o+l.sizeHi,t),count:e.getUint32(o+l.count,t),colorMapCount:e.getUint16(o+l.colorMapCount,t),lookupMethod:e.getUint8(o+l.lookupMethod),compressionMethod:e.getUint8(o+l.compressionMethod)}}function u(t){const n=new DataView(t,0);let i=0;const{identifier:c,version:s}=r(t,n,i);if(i+=o.byteCount,"ClusterRGB"!==c)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Bad identifier");if(s>1)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Unknown version");const d=a(n,i);i+=l.byteCount;if(d.sizeHi*2**32+d.sizeLo!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Bad size");if((2===d.lookupMethod||1===d.lookupMethod)&&0===d.compressionMethod){if(3*d.colorMapCount+d.count+i!==t.byteLength||d.colorMapCount>256)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Bad count");const o=new Uint8Array(t,i,3*d.colorMapCount),r=new Uint8Array(t,i+3*d.colorMapCount,d.count),n=new Uint8Array(3*d.count);for(let e=0;e<d.count;e++){const t=r[e];n[3*e]=o[3*t],n[3*e+1]=o[3*t+1],n[3*e+2]=o[3*t+2]}return n}if(0===d.lookupMethod&&0===d.compressionMethod){if(3*d.count+i!==t.byteLength||0!==d.colorMapCount)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Bad count");return new Uint8Array(t,i).slice()}if(d.lookupMethod<=2&&1===d.compressionMethod){if(i+3!==t.byteLength||1!==d.colorMapCount)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Bad count");const o=n.getUint8(i),r=n.getUint8(i+1),c=n.getUint8(i+2),s=new Uint8Array(3*d.count);for(let e=0;e<d.count;e++)s[3*e]=o,s[3*e+1]=r,s[3*e+2]=c;return s}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Bad method "+d.lookupMethod+","+d.compressionMethod)}const f={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function h(e,o){return{sizeLo:e.getUint32(o+f.sizeLo,t),sizeHi:e.getUint32(o+f.sizeHi,t),count:e.getUint32(o+f.count,t),scaleFactor:e.getUint16(o+f.scaleFactor,t),bitsPerPoint:e.getUint8(o+f.bitsPerPoint),reserved:e.getUint8(o+f.reserved)}}function w(t){const n=new DataView(t,0);let i=0;const{identifier:c,version:s}=r(t,n,i);if(i+=o.byteCount,"Intensity "!==c)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Bad identifier");if(s>1)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Unknown version");const l=h(n,i);i+=f.byteCount;if(l.sizeHi*2**32+l.sizeLo!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Bad size");const a=new Uint16Array(l.count);if(8===l.bitsPerPoint){if(l.count+i!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Bad size");const o=new Uint8Array(t,i,l.count);for(let e=0;e<l.count;e++)a[e]=o[e]*l.scaleFactor}else if(16===l.bitsPerPoint){if(2*l.count+i!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Bad size");const o=new Uint16Array(t,i,l.count);for(let e=0;e<l.count;e++)a[e]=o[e]*l.scaleFactor}else{const o=[];if(d(t,i,o)!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Bad size");for(let e=0;e<l.count;e++)a[e]=o[e]*l.scaleFactor}return a}


/***/ }),

/***/ 55623:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k5: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony exports encodeSymbolColor, parseColorMixMode */
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92504);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var n;function e(t){switch(t){case"multiply":default:return n.Multiply;case"ignore":return n.Ignore;case"replace":return n.Replace;case"tint":return n.Tint}}function r(e,r,a){if(null==e||r===n.Ignore)return a[0]=255,a[1]=255,a[2]=255,void(a[3]=255);const c=t(Math.round(e[3]*i),0,i),p=0===c||r===n.Tint?0:r===n.Replace?u:l;a[0]=t(Math.round(e[0]*o),0,o),a[1]=t(Math.round(e[1]*o),0,o),a[2]=t(Math.round(e[2]*o),0,o),a[3]=c+p}!function(t){t[t.Multiply=1]="Multiply",t[t.Ignore=2]="Ignore",t[t.Replace=3]="Replace",t[t.Tint=4]="Tint"}(n||(n={}));const o=255,i=85,u=(/* unused pure expression or super */ null && (i)),l=2*i;


/***/ }),

/***/ 29709:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  gm: () => (/* binding */ ee),
  vt: () => (/* binding */ orientedBoundingBox_H)
});

// UNUSED EXPORTS: clone, compute, corners, intersectLine, intersectPlane, intersectSphere, isVisible, maximumDistancePlane, minimumDistancePlane, projectedArea, projectedRadius, radius, set, toAaBoundingBox

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat3.js
var mat3 = __webpack_require__(46615);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat3f64.js
var mat3f64 = __webpack_require__(76287);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/quat.js
var quat = __webpack_require__(76743);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/quatf64.js
var quatf64 = __webpack_require__(46991);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3.js
var vec3 = __webpack_require__(21839);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3f64.js
var vec3f64 = __webpack_require__(22279);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec4.js
var vec4 = __webpack_require__(25102);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec4f64.js
var vec4f64 = __webpack_require__(52712);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/aaBoundingBox.js
var aaBoundingBox = __webpack_require__(4675);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/plane.js + 1 modules
var plane = __webpack_require__(80530);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/ViewingMode.js
var ViewingMode = __webpack_require__(10714);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Attribute.js
var Attribute = __webpack_require__(70807);
;// ../node_modules/@arcgis/core/views/3d/support/dito.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const n=1e-6,dito_r=(/* unused pure expression or super */ null && ([0,0,0])),i=(/* unused pure expression or super */ null && ([0,0,0]));function o(n,o){const{data:s,size:a}=n,c=s.length/a;if(c<=0)return;const h=new J(n);Q(dito_r,h.minProj,h.maxProj),U(dito_r,dito_r,.5),R(i,h.maxProj,h.minProj);const u=L(i),m=new K;m.quality=u,c<14&&(n=new t(new Float64Array(h.buffer,112,42),3));const f=[0,0,0],l=[0,0,0],j=[0,0,0],b=[0,0,0],x=[0,0,0],I=[0,0,0],N=[0,0,0];switch(dito_e(h,n,N,f,l,j,b,x,I,m)){case 1:return void g(dito_r,i,o);case 2:return void p(n,b,o)}P(n,N,f,l,j,b,x,I,m),O(n,m.b0,m.b1,m.b2,_,dito_S);const V=[0,0,0];R(V,dito_S,_),m.quality=L(V),m.quality<u?D(m.b0,m.b1,m.b2,_,dito_S,V,o):g(dito_r,i,o)}function dito_e(t,r,i,o,e,s,a,c,h,u){if(j(t,o,e),tt(o,e)<n)return 1;R(a,o,e),Z(a,a);return x(r,o,a,s)<n?2:(R(c,e,s),Z(c,c),R(h,s,o),Z(h,h),X(i,c,a),Z(i,i),dito_M(r,i,a,c,h,u),0)}const dito_s=(/* unused pure expression or super */ null && ([0,0,0])),dito_a=(/* unused pure expression or super */ null && ([0,0,0])),dito_c=(/* unused pure expression or super */ null && ([0,0,0])),dito_h=(/* unused pure expression or super */ null && ([0,0,0])),dito_u=(/* unused pure expression or super */ null && ([0,0,0])),dito_m=(/* unused pure expression or super */ null && ([0,0,0])),dito_f=(/* unused pure expression or super */ null && ([0,0,0])),dito_l=(/* unused pure expression or super */ null && ([0,0,0]));function P(t,n,r,i,o,e,P,j,b){N(t,n,r,dito_s,dito_a),void 0!==dito_s[0]&&(R(dito_c,dito_s,r),Z(dito_c,dito_c),R(dito_h,dito_s,i),Z(dito_h,dito_h),R(dito_u,dito_s,o),Z(dito_u,dito_u),X(dito_m,dito_h,e),Z(dito_m,dito_m),X(dito_f,dito_u,P),Z(dito_f,dito_f),X(dito_l,dito_c,j),Z(dito_l,dito_l),dito_M(t,dito_m,e,dito_h,dito_c,b),dito_M(t,dito_f,P,dito_u,dito_h,b),dito_M(t,dito_l,j,dito_c,dito_u,b)),void 0!==dito_a[0]&&(R(dito_c,dito_a,r),Z(dito_c,dito_c),R(dito_h,dito_a,i),Z(dito_h,dito_h),R(dito_u,dito_a,o),Z(dito_u,dito_u),X(dito_m,dito_h,e),Z(dito_m,dito_m),X(dito_f,dito_u,P),Z(dito_f,dito_f),X(dito_l,dito_c,j),Z(dito_l,dito_l),dito_M(t,dito_m,e,dito_h,dito_c,b),dito_M(t,dito_f,P,dito_u,dito_h,b),dito_M(t,dito_l,j,dito_c,dito_u,b))}function j(t,n,r){let i=tt(t.maxVert[0],t.minVert[0]),o=0;for(let e=1;e<7;++e){const n=tt(t.maxVert[e],t.minVert[e]);n>i&&(i=n,o=e)}W(n,t.minVert[o]),W(r,t.maxVert[o])}const dito_b=(/* unused pure expression or super */ null && ([0,0,0]));function x(t,n,r,i){const{data:o,size:e}=t;let s=Number.NEGATIVE_INFINITY,a=0;for(let c=0;c<o.length;c+=e){dito_b[0]=o[c]-n[0],dito_b[1]=o[c+1]-n[1],dito_b[2]=o[c+2]-n[2];const t=r[0]*dito_b[0]+r[1]*dito_b[1]+r[2]*dito_b[2],i=r[0]*r[0]+r[1]*r[1]+r[2]*r[2],e=dito_b[0]*dito_b[0]+dito_b[1]*dito_b[1]+dito_b[2]*dito_b[2]-t*t/i;e>s&&(s=e,a=c)}return W(i,o,a),s}const dito_I=(/* unused pure expression or super */ null && ([0,0]));function N(t,r,i,o,e){E(t,r,dito_I,e,o);const s=nt(i,r);dito_I[1]-n<=s&&(o[0]=void 0),dito_I[0]+n>=s&&(e[0]=void 0)}const V=(/* unused pure expression or super */ null && ([0,0,0])),dito_y=(/* unused pure expression or super */ null && ([0,0,0])),dito_w=(/* unused pure expression or super */ null && ([0,0,0])),q=(/* unused pure expression or super */ null && ([0,0,0])),dito_A=(/* unused pure expression or super */ null && ([0,0,0])),d=(/* unused pure expression or super */ null && ([0,0,0]));function dito_M(t,r,i,o,e,s){if($(r)<n)return;X(V,i,r),X(dito_y,o,r),X(dito_w,e,r),T(t,r,dito_I),dito_A[1]=dito_I[0],q[1]=dito_I[1],d[1]=q[1]-dito_A[1];const a=[i,o,e],c=[V,dito_y,dito_w];for(let n=0;n<3;++n){T(t,a[n],dito_I),dito_A[0]=dito_I[0],q[0]=dito_I[1],T(t,c[n],dito_I),dito_A[2]=dito_I[0],q[2]=dito_I[1],d[0]=q[0]-dito_A[0],d[2]=q[2]-dito_A[2];const i=L(d);i<s.quality&&(W(s.b0,a[n]),W(s.b1,r),W(s.b2,c[n]),s.quality=i)}}const F=(/* unused pure expression or super */ null && ([0,0,0]));function T(t,n,r){const{data:i,size:o}=t;r[0]=Number.POSITIVE_INFINITY,r[1]=Number.NEGATIVE_INFINITY;for(let e=0;e<i.length;e+=o){const t=i[e]*n[0]+i[e+1]*n[1]+i[e+2]*n[2];r[0]=Math.min(r[0],t),r[1]=Math.max(r[1],t)}}function E(t,n,r,i,o){const{data:e,size:s}=t;W(i,e),W(o,i),r[0]=nt(F,n),r[1]=r[0];for(let a=s;a<e.length;a+=s){const t=e[a]*n[0]+e[a+1]*n[1]+e[a+2]*n[2];t<r[0]&&(r[0]=t,W(i,e,a)),t>r[1]&&(r[1]=t,W(o,e,a))}}function g(t,n,r){W(r.center,t),U(r.halfSize,n,.5),r.quaternion[0]=0,r.quaternion[1]=0,r.quaternion[2]=0,r.quaternion[3]=1}const dito_z=(/* unused pure expression or super */ null && ([0,0,0])),v=(/* unused pure expression or super */ null && ([0,0,0])),Y=(/* unused pure expression or super */ null && ([0,0,0])),_=(/* unused pure expression or super */ null && ([0,0,0])),dito_S=(/* unused pure expression or super */ null && ([0,0,0])),G=(/* unused pure expression or super */ null && ([0,0,0]));function p(t,r,i){W(dito_z,r),Math.abs(r[0])>Math.abs(r[1])&&Math.abs(r[0])>Math.abs(r[2])?dito_z[0]=0:Math.abs(r[1])>Math.abs(r[2])?dito_z[1]=0:dito_z[2]=0,$(dito_z)<n&&(dito_z[0]=dito_z[1]=dito_z[2]=1),X(v,r,dito_z),Z(v,v),X(Y,r,v),Z(Y,Y),O(t,r,v,Y,_,dito_S),R(G,dito_S,_),D(r,v,Y,_,dito_S,G,i)}function O(t,n,r,i,o,e){T(t,n,dito_I),o[0]=dito_I[0],e[0]=dito_I[1],T(t,r,dito_I),o[1]=dito_I[0],e[1]=dito_I[1],T(t,i,dito_I),o[2]=dito_I[0],e[2]=dito_I[1]}const dito_B=(/* unused pure expression or super */ null && ([0,0,0])),k=(/* unused pure expression or super */ null && ([1,0,0,0,1,0,0,0,1])),C=(/* unused pure expression or super */ null && ([0,0,0]));function D(t,n,r,i,o,e,s){k[0]=t[0],k[1]=t[1],k[2]=t[2],k[3]=n[0],k[4]=n[1],k[5]=n[2],k[6]=r[0],k[7]=r[1],k[8]=r[2],rt(s.quaternion,k),Q(C,i,o),U(C,C,.5),U(s.center,t,C[0]),U(dito_B,n,C[1]),Q(s.center,s.center,dito_B),U(dito_B,r,C[2]),Q(s.center,s.center,dito_B),U(s.halfSize,e,.5)}const H=7;class J{constructor(t){this.minVert=new Array(H),this.maxVert=new Array(H);const n=64*H;this.buffer=new ArrayBuffer(n);let r=0;this.minProj=new Float64Array(this.buffer,r,H),r+=8*H,this.maxProj=new Float64Array(this.buffer,r,H),r+=8*H;for(let a=0;a<H;++a)this.minVert[a]=new Float64Array(this.buffer,r,3),r+=24;for(let a=0;a<H;++a)this.maxVert[a]=new Float64Array(this.buffer,r,3),r+=24;for(let a=0;a<H;++a)this.minProj[a]=Number.POSITIVE_INFINITY,this.maxProj[a]=Number.NEGATIVE_INFINITY;const i=new Array(H),o=new Array(H),{data:e,size:s}=t;for(let a=0;a<e.length;a+=s){let t=e[a];t<this.minProj[0]&&(this.minProj[0]=t,i[0]=a),t>this.maxProj[0]&&(this.maxProj[0]=t,o[0]=a),t=e[a+1],t<this.minProj[1]&&(this.minProj[1]=t,i[1]=a),t>this.maxProj[1]&&(this.maxProj[1]=t,o[1]=a),t=e[a+2],t<this.minProj[2]&&(this.minProj[2]=t,i[2]=a),t>this.maxProj[2]&&(this.maxProj[2]=t,o[2]=a),t=e[a]+e[a+1]+e[a+2],t<this.minProj[3]&&(this.minProj[3]=t,i[3]=a),t>this.maxProj[3]&&(this.maxProj[3]=t,o[3]=a),t=e[a]+e[a+1]-e[a+2],t<this.minProj[4]&&(this.minProj[4]=t,i[4]=a),t>this.maxProj[4]&&(this.maxProj[4]=t,o[4]=a),t=e[a]-e[a+1]+e[a+2],t<this.minProj[5]&&(this.minProj[5]=t,i[5]=a),t>this.maxProj[5]&&(this.maxProj[5]=t,o[5]=a),t=e[a]-e[a+1]-e[a+2],t<this.minProj[6]&&(this.minProj[6]=t,i[6]=a),t>this.maxProj[6]&&(this.maxProj[6]=t,o[6]=a)}for(let a=0;a<H;++a){let t=i[a];W(this.minVert[a],e,t),t=o[a],W(this.maxVert[a],e,t)}}}class K{constructor(){this.b0=[1,0,0],this.b1=[0,1,0],this.b2=[0,0,1],this.quality=0}}function L(t){return t[0]*t[1]+t[0]*t[2]+t[1]*t[2]}function Q(t,n,r){t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2]}function R(t,n,r){t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2]}function U(t,n,r){t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r}function W(t,n,r=0){t[0]=n[r],t[1]=n[r+1],t[2]=n[r+2]}function X(t,n,r){const i=n[0],o=n[1],e=n[2],s=r[0],a=r[1],c=r[2];t[0]=o*c-e*a,t[1]=e*s-i*c,t[2]=i*a-o*s}function Z(t,n){const r=n[0]*n[0]+n[1]*n[1]+n[2]*n[2];if(r>0){const i=1/Math.sqrt(r);t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i}}function $(t){return t[0]*t[0]+t[1]*t[1]+t[2]*t[2]}function tt(t,n){const r=n[0]-t[0],i=n[1]-t[1],o=n[2]-t[2];return r*r+i*i+o*o}function nt(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function rt(t,n){const r=n[0]+n[4]+n[8];if(r>0){let i=Math.sqrt(r+1);t[3]=.5*i,i=.5/i,t[0]=(n[5]-n[7])*i,t[1]=(n[6]-n[2])*i,t[2]=(n[1]-n[3])*i}else{let r=0;n[4]>n[0]&&(r=1),n[8]>n[3*r+r]&&(r=2);const i=(r+1)%3,o=(r+2)%3;let e=Math.sqrt(n[3*r+r]-n[3*i+i]-n[3*o+o]+1);t[r]=.5*e,e=.5/e,t[3]=(n[3*i+o]-n[3*o+i])*e,t[i]=(n[3*i+r]+n[3*r+i])*e,t[o]=(n[3*o+r]+n[3*r+o])*e}}

;// ../node_modules/@arcgis/core/views/3d/support/orientedBoundingBox.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const orientedBoundingBox_V=(0,quatf64.a)(),orientedBoundingBox_C=(0,vec3f64.c)(),orientedBoundingBox_D=(0,vec3f64.c)(),orientedBoundingBox_E=(0,vec4f64.c)(),orientedBoundingBox_F=(0,mat3f64.a)();function orientedBoundingBox_H(e=[0,0,0],t=[-1,-1,-1],n=(0,quatf64.a)()){return{center:(0,vec3f64.g)(e),halfSize:(0,vec3f64.g)(t),quaternion:(0,quatf64.b)(n)}}function orientedBoundingBox_J(e){return orientedBoundingBox_H(e.center,e.halfSize,e.quaternion)}function orientedBoundingBox_K(e,t){s(t.center,e.center),s(t.halfSize,e.halfSize),a(t.quaternion,e.quaternion)}function orientedBoundingBox_L(e,t){return t=t||orientedBoundingBox_H(),I(e,t),t}function orientedBoundingBox_N(e,t){const n=A(t,e.center),a=orientedBoundingBox_Z(e,B(t));return n>a?1:n<-a?-1:0}function orientedBoundingBox_O(e,t){return orientedBoundingBox_C[0]=e.center[0]-t[0],orientedBoundingBox_C[1]=e.center[1]-t[1],orientedBoundingBox_C[2]=e.center[2]-t[2],r(orientedBoundingBox_V,e.quaternion),f(orientedBoundingBox_C,orientedBoundingBox_C,orientedBoundingBox_V),c(orientedBoundingBox_C,orientedBoundingBox_C),h(orientedBoundingBox_D,orientedBoundingBox_C,e.halfSize),u(orientedBoundingBox_D,orientedBoundingBox_C)<t[3]*t[3]}function orientedBoundingBox_P(t,n){n||(n=w());const a=e(orientedBoundingBox_F,t.quaternion),r=t.halfSize[0]*Math.abs(a[0])+t.halfSize[1]*Math.abs(a[3])+t.halfSize[2]*Math.abs(a[6]),i=t.halfSize[0]*Math.abs(a[1])+t.halfSize[1]*Math.abs(a[4])+t.halfSize[2]*Math.abs(a[7]),o=t.halfSize[0]*Math.abs(a[2])+t.halfSize[1]*Math.abs(a[5])+t.halfSize[2]*Math.abs(a[8]);return n[0]=t.center[0]-r,n[1]=t.center[1]-i,n[2]=t.center[2]-o,n[3]=t.center[0]+r,n[4]=t.center[1]+i,n[5]=t.center[2]+o,n}function orientedBoundingBox_Q(e,t){return A(t,e.center)-orientedBoundingBox_Z(e,B(t))}function orientedBoundingBox_R(e,t){return A(t,e.center)+orientedBoundingBox_Z(e,B(t))}function orientedBoundingBox_T(e,t){return orientedBoundingBox_N(e,t[0])<=0&&orientedBoundingBox_N(e,t[1])<=0&&orientedBoundingBox_N(e,t[2])<=0&&orientedBoundingBox_N(e,t[3])<=0&&orientedBoundingBox_N(e,t[4])<=0&&orientedBoundingBox_N(e,t[5])<=0}function orientedBoundingBox_U(e,t,n,a=0){r(orientedBoundingBox_V,e.quaternion),l(orientedBoundingBox_C,t,e.center);const i=f(orientedBoundingBox_C,orientedBoundingBox_C,orientedBoundingBox_V),o=f(orientedBoundingBox_D,n,orientedBoundingBox_V);let s=-1/0,c=1/0;for(let r=0;r<3;r++)if(Math.abs(o[r])>1e-6){const t=(a+e.halfSize[r]-i[r])/o[r],n=(-a-e.halfSize[r]-i[r])/o[r];s=Math.max(s,Math.min(t,n)),c=Math.min(c,Math.max(t,n))}else if(i[r]>e.halfSize[r]+a||i[r]<-e.halfSize[r]-a)return!1;return s<=c}function orientedBoundingBox_W(n,a,i,o,s){r(orientedBoundingBox_V,n.quaternion),z(orientedBoundingBox_C,a,n.center),f(orientedBoundingBox_C,orientedBoundingBox_C,orientedBoundingBox_V);const c=orientedBoundingBox_C[0]<-n.halfSize[0]?-1:orientedBoundingBox_C[0]>n.halfSize[0]?1:0,h=orientedBoundingBox_C[1]<-n.halfSize[1]?-1:orientedBoundingBox_C[1]>n.halfSize[1]?1:0,u=orientedBoundingBox_C[2]<-n.halfSize[2]?-1:orientedBoundingBox_C[2]>n.halfSize[2]?1:0,l=Math.abs(c)+Math.abs(h)+Math.abs(u);if(0===l)return 1/0;const b=1===l?4:6,q=6*(c+3*h+9*u+13);e(orientedBoundingBox_F,n.quaternion),t(orientedBoundingBox_F,orientedBoundingBox_F,n.halfSize);for(let e=0;e<b;e++){const t=orientedBoundingBox_Y[q+e];S(orientedBoundingBox_C,((1&t)<<1)-1,(2&t)-1,((4&t)>>1)-1),m(orientedBoundingBox_C,orientedBoundingBox_C,orientedBoundingBox_F),M(orientedBoundingBox_E,n.center,orientedBoundingBox_C),orientedBoundingBox_E[3]=1,y(orientedBoundingBox_E,orientedBoundingBox_E,i);const a=1/Math.max(1e-6,orientedBoundingBox_E[3]);orientedBoundingBox_X[2*e]=orientedBoundingBox_E[0]*a,orientedBoundingBox_X[2*e+1]=orientedBoundingBox_E[1]*a}const p=2*b-2;let j=orientedBoundingBox_X[0]*(orientedBoundingBox_X[3]-orientedBoundingBox_X[p+1])+orientedBoundingBox_X[p]*(orientedBoundingBox_X[1]-orientedBoundingBox_X[p-1]);for(let e=2;e<p;e+=2)j+=orientedBoundingBox_X[e]*(orientedBoundingBox_X[e+3]-orientedBoundingBox_X[e-1]);return Math.abs(j)*o*s*.125}const orientedBoundingBox_X=(/* unused pure expression or super */ null && ([.1,.2,.3,.4,.5,.6,.7,.8,.9,1,1.1,1.2])),orientedBoundingBox_Y=(()=>{const e=new Int8Array(162);let t=0;const n=n=>{for(let a=0;a<n.length;a++)e[t+a]=n[a];t+=6};return n([6,2,3,1,5,4]),n([0,2,3,1,5,4]),n([0,2,3,7,5,4]),n([0,1,3,2,6,4]),n([0,1,3,2,0,0]),n([0,1,5,7,3,2]),n([0,1,3,7,6,4]),n([0,1,3,7,6,2]),n([0,1,5,7,6,2]),n([0,1,5,4,6,2]),n([0,1,5,4,0,0]),n([0,1,3,7,5,4]),n([0,2,6,4,0,0]),n([0,0,0,0,0,0]),n([1,3,7,5,0,0]),n([2,3,7,6,4,0]),n([2,3,7,6,0,0]),n([2,3,1,5,7,6]),n([0,1,5,7,6,2]),n([0,1,5,7,6,4]),n([0,1,3,7,6,4]),n([4,5,7,6,2,0]),n([4,5,7,6,0,0]),n([4,5,1,3,7,6]),n([0,2,3,7,5,4]),n([6,2,3,7,5,4]),n([6,2,3,1,5,4]),e})();function orientedBoundingBox_Z(e,t){r(orientedBoundingBox_V,e.quaternion),f(orientedBoundingBox_C,t,orientedBoundingBox_V);const n=e.halfSize;return Math.abs(orientedBoundingBox_C[0]*n[0])+Math.abs(orientedBoundingBox_C[1]*n[1])+Math.abs(orientedBoundingBox_C[2]*n[2])}function orientedBoundingBox_$(e,t){for(let n=0;n<8;++n){const a=t[n];a[0]=1&n?-e.halfSize[0]:e.halfSize[0],a[1]=2&n?-e.halfSize[1]:e.halfSize[1],a[2]=4&n?-e.halfSize[2]:e.halfSize[2],f(a,a,e.quaternion),M(a,a,e.center)}}function orientedBoundingBox_(e){return b(e.halfSize)}function ee(e,t,n,i,o){if((0,quat.c)(o.quaternion,e.quaternion),i===ViewingMode/* ViewingMode */.RT.Global){(0,quat.a)(re,e.quaternion),(0,vec3.v)(te,e.center,re),(0,vec3.w)(ne,te),(0,vec3.x)(ae,ne,e.halfSize),(0,vec3.u)(ae,ne,ae);const a=(0,vec3.l)(ae);(0,vec3.g)(ae,ne,e.halfSize);const i=(0,vec3.l)(ae);if(a<n)(0,vec3.c)(o.center,e.center),(0,vec3.s)(te,n,n,n),(0,vec3.g)(o.halfSize,e.halfSize,te);else{const r=i>0?1+t/i:1,s=a>0?1+n/a:1,c=(s+r)/2,h=(s-r)/2;(0,vec3.i)(o.halfSize,ne,h),(0,vec3.q)(o.halfSize,o.halfSize,e.halfSize,c),(0,vec3.i)(o.center,ne,c),(0,vec3.q)(o.center,o.center,e.halfSize,h),(0,vec3.z)(te,te),(0,vec3.A)(o.center,o.center,te),(0,vec3.v)(o.center,o.center,o.quaternion)}}else{const a=(0,vec3.s)(te,0,0,1);(0,vec3.q)(o.center,e.center,a,(n+t)/2),(0,quat.a)(re,e.quaternion),(0,vec3.v)(a,a,re),(0,vec3.w)(a,a),(0,vec3.q)(o.halfSize,e.halfSize,a,(n-t)/2)}return o}const te=(0,vec3f64.c)(),ne=(0,vec3f64.c)(),ae=(0,vec3f64.c)(),re=(0,quatf64.a)();


/***/ }),

/***/ 70807:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ s),
/* harmony export */   n: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class s{constructor(s,t,i=t){this.data=s,this.size=t,this.stride=i}}class t extends s{constructor(s,t,i,e=!1,c=i){super(s,i,c),this.indices=t,this.exclusive=e}}


/***/ }),

/***/ 50645:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ e)
/* harmony export */ });
/* unused harmony export affectsGeometry */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var e;function E(E){return E===e.POSITION}!function(e){e.POSITION="position",e.NORMAL="normal",e.NORMALCOMPRESSED="normalCompressed",e.UV0="uv0",e.AUXPOS1="auxpos1",e.AUXPOS2="auxpos2",e.COLOR="color",e.SYMBOLCOLOR="symbolColor",e.SIZE="size",e.TANGENT="tangent",e.OFFSET="offset",e.PERSPECTIVEDIVIDE="perspectiveDivide",e.SUBDIVISIONFACTOR="subdivisionFactor",e.COLORFEATUREATTRIBUTE="colorFeatureAttribute",e.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",e.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",e.DISTANCETOSTART="distanceToStart",e.UVMAPSPACE="uvMapSpace",e.BOUNDINGRECT="boundingRect",e.UVREGION="uvRegion",e.PROFILERIGHT="profileRight",e.PROFILEUP="profileUp",e.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",e.FEATUREVALUE="featureValue",e.INSTANCEMODELORIGINHI="instanceModelOriginHi",e.INSTANCEMODELORIGINLO="instanceModelOriginLo",e.INSTANCEMODEL="instanceModel",e.INSTANCEMODELNORMAL="instanceModelNormal",e.INSTANCECOLOR="instanceColor",e.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",e.LOCALTRANSFORM="localTransform",e.GLOBALTRANSFORM="globalTransform",e.BOUNDINGSPHERE="boundingSphere",e.MODELORIGIN="modelOrigin",e.MODELSCALEFACTORS="modelScaleFactors",e.FEATUREATTRIBUTE="featureAttribute",e.STATE="state",e.LODLEVEL="lodLevel",e.POSITION0="position0",e.POSITION1="position1",e.NORMALA="normalA",e.NORMALB="normalB",e.COMPONENTINDEX="componentIndex",e.VARIANTOFFSET="variantOffset",e.VARIANTSTROKE="variantStroke",e.VARIANTEXTENSION="variantExtension",e.SIDENESS="sideness",e.START="start",e.END="end",e.UP="up",e.EXTRUDE="extrude",e.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",e.INSTANCEOBJECTANDLAYERIDCOLOR="instanceObjectAndLayerIdColor"}(e||(e={}));


/***/ }),

/***/ 18846:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D8: () => (/* binding */ p),
/* harmony export */   TO: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony export hasPopupTemplate */
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42453);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function n(n,p=n.popupTemplate){if(null==p)return[];const u=await p.getRequiredFields(n.fieldsIndex),{lastEditInfoEnabled:t}=p,{objectIdField:d,typeIdField:s,globalIdField:i,relationships:a}=n;if(u.includes("*"))return["*"];const o=t?(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getFeatureEditFields */ .eX)(n):[],f=(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .fixFields */ .DB)(n.fieldsIndex,[...u,...o]);return s&&f.push(s),f&&d&&n.fieldsIndex?.has(d)&&!f.includes(d)&&f.push(d),f&&i&&n.fieldsIndex?.has(i)&&!f.includes(i)&&f.push(i),a&&a.forEach((e=>{const{keyField:l}=e;f&&l&&n.fieldsIndex?.has(l)&&!f.includes(l)&&f.push(l)})),f}function p(e,l){return e.popupTemplate?e.popupTemplate:null!=l&&l.defaultPopupTemplateEnabled&&null!=e.defaultPopupTemplate?e.defaultPopupTemplate:null}function u(e,l){return null!=p(e,{defaultPopupTemplateEnabled:l})}


/***/ }),

/***/ 54383:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21121);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98849);
/* harmony import */ var _support_apiKeyUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71647);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function i(i){if(_config_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.apiKey&&(0,_support_apiKeyUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .supportsApiKey */ .Q)(i.portal.url))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("save-api-key-utils:api-key-not-supported",`Saving is not supported on ${i.portal.url} when using an api key`)}


/***/ }),

/***/ 22942:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SO: () => (/* binding */ p),
/* harmony export */   dL: () => (/* binding */ m),
/* harmony export */   rH: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12690);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98849);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40189);
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33880);
/* harmony import */ var _portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98751);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function u(e,r,o=null){const t=await i(e,r,o);await h(t,r,o)}async function p(e,r,o,t,s=null){const a=await i(o,t,s);await e.update({data:r}),await h(a,t,s)}async function i(e,s,n=null){if(!s?.resources)return;const u=s.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=s.portalItem;const p=new Set(s.resources.toKeep.map((e=>e.resource.path))),i=new Set,h=[];p.forEach((r=>{u.delete(r),e.paths.push(r)}));for(const r of s.resources.toUpdate)if(u.delete(r.resource.path),p.has(r.resource.path)||i.has(r.resource.path)){const{resource:o,content:t,finish:s,error:u}=r,p=(0,_portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .getSiblingOfSameTypeI */ .bg)(o,(0,_core_uuid_js__WEBPACK_IMPORTED_MODULE_3__/* .generateUUID */ .lk)());e.paths.push(p.path),h.push(f({resource:p,content:t,compress:r.compress,finish:s,error:u},n))}else e.paths.push(r.resource.path),h.push(l(r,n)),i.add(r.resource.path);for(const r of s.resources.toAdd)e.paths.push(r.resource.path),u.has(r.resource.path)?u.delete(r.resource.path):h.push(f(r,n));if(0===h.length)return u;const m=await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .allSettledErrors */ .Ol)(h);if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .throwIfAborted */ .Te)(n),m.length>0)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("save:resources","Failed to save one or more resources",{errors:m});return u}async function h(e,r,o=null){if(!e||!r.portalItem)return;const t=[];for(const s of e){const e=r.portalItem.resourceFromPath(s);t.push(e.portalItem.removeResource(e,o))}await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .eachAlways */ .Lx)(t)}async function f(r,o){const t={...null!=o?o:{},compress:r.compress},s=await (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .result */ .Ke)(r.resource.portalItem.addResource(r.resource,await (0,_portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .contentToBlob */ .cL)(r.content),t));if(!0!==s.ok)throw r.error?.(s.error),s.error;r.finish?.(r.resource)}async function l(r,o){const t=await (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .result */ .Ke)(r.resource.update(await (0,_portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .contentToBlob */ .cL)(r.content),o));if(!0!==t.ok)throw r.error?.(t.error),t.error;r.finish?.(r.resource)}async function m(e){const r=[];for(const o of e.allLayers)if("beforeSave"in o&&"function"==typeof o.beforeSave){const e=o.beforeSave();e&&r.push(e)}await Promise.allSettled(r)}


/***/ })

};
;