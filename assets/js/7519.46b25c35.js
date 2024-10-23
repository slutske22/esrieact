"use strict";
exports.id = 7519;
exports.ids = [7519];
exports.modules = {

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

/***/ 19938:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24793);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(539);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39831);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98849);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let c=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* .ClonableMixin */ .O)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY)){constructor(){super({}),this.type="georeferenced",this.isRelative=!1,this.isGeoreferenced=!0}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_8__/* .enumeration */ .e)({georeferenced:"georeferenced"},{readOnly:!0})],c.prototype,"type",void 0),c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__/* .subclass */ .$)("esri.geometry.support.MeshGeoreferencedVertexSpace")],c);const p=c;


/***/ }),

/***/ 8695:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ N)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37046);
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56192);
/* harmony import */ var _chunks_quat_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76743);
/* harmony import */ var _chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46991);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(21839);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(22279);
/* harmony import */ var _axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(69175);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var v;let b=v=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(t){super(t),this.translation=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_12__.c)(),this.rotationAxis=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_12__.e)(_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_13__.up),this.rotationAngle=0,this.scale=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_12__.f)(1,1,1)}get rotation(){return (0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_13__/* .fromAxisAndAngle */ .i4)(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_12__.g)((0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_13__/* .axis */ .yo)(t)),this.rotationAngle=(0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_13__/* .angle */ .g7)(t)}get localMatrix(){const t=(0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_8__.a)();return (0,_chunks_quat_js__WEBPACK_IMPORTED_MODULE_9__.s)(M,(0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_13__/* .axis */ .yo)(this.rotation),(0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_13__/* .angleRad */ .$I)(this.rotation)),(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_7__.f)(t,M,this.translation,this.scale),t}get localMatrixInverse(){return (0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_7__.i)((0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_8__.a)(),this.localMatrix)}applyLocal(t,o){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_11__.e)(o,t,this.localMatrix)}applyLocalInverse(t,o){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_11__.e)(o,t,this.localMatrixInverse)}equals(t){return this===t||null!=t&&(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_7__.e)(this.localMatrix,t.localMatrix)}clone(){const t={translation:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_12__.g)(this.translation),rotationAxis:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_12__.g)(this.rotationAxis),rotationAngle:this.rotationAngle,scale:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_12__.g)(this.scale)};return new v(t)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],b.prototype,"translation",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],b.prototype,"rotationAxis",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number,nonNullable:!0,json:{write:!0}})],b.prototype,"rotationAngle",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],b.prototype,"scale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],b.prototype,"rotation",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],b.prototype,"localMatrix",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],b.prototype,"localMatrixInverse",null),b=v=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.geometry.support.MeshTransform")],b);const M=(0,_chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_10__.a)(),N=b;


/***/ }),

/***/ 69175:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $I: () => (/* binding */ w),
/* harmony export */   AU: () => (/* binding */ g),
/* harmony export */   Zz: () => (/* binding */ U),
/* harmony export */   g7: () => (/* binding */ x),
/* harmony export */   i4: () => (/* binding */ q),
/* harmony export */   up: () => (/* binding */ z),
/* harmony export */   vt: () => (/* binding */ h),
/* harmony export */   yo: () => (/* binding */ l)
/* harmony export */ });
/* unused harmony exports copy, fromPoints, fromValues, setAngle, wrap, wrapAxisAngle */
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92504);
/* harmony import */ var _chunks_quat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76743);
/* harmony import */ var _chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46991);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21839);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22279);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function h(n=z){return[n[0],n[1],n[2],n[3]]}function j(n,r,t,u){return d(n,r,t,u,C)}function k(n,r){return d(n[0],n[1],n[2],r,C)}function b(n,r=h()){return d(n[0],n[1],n[2],n[3],r)}function d(n,r,t,u,o=h()){return o[0]=n,o[1]=r,o[2]=t,o[3]=u,o}function q(n,r,t=h()){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__.c)(l(t),n),t[3]=r,t}function v(n,r,t=h()){return f(t,n,r),i(t,t),t[3]=-e(n,r),t}function U(r,s,c=h()){return (0,_chunks_quat_js__WEBPACK_IMPORTED_MODULE_1__.s)(A,l(r),w(r)),(0,_chunks_quat_js__WEBPACK_IMPORTED_MODULE_1__.s)(B,l(s),w(s)),(0,_chunks_quat_js__WEBPACK_IMPORTED_MODULE_1__.m)(A,B,A),y(c,(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .rad2deg */ .KJ)((0,_chunks_quat_js__WEBPACK_IMPORTED_MODULE_1__.g)(l(c),A)))}function g(n,r,t,u=h()){return q(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.U,n,D),q(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.b,r,E),q(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.d,t,F),U(D,E,D),U(D,F,u),u}function l(n){return n}function x(n){return n[3]}function w(n){return (0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .deg2rad */ .kU)(n[3])}function y(n,r){return n[3]=r,n}const z=[0,0,1,0],A=(0,_chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_2__.a)(),B=(0,_chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_2__.a)(),C=h(),D=h(),E=h(),F=h();


/***/ }),

/***/ 57813:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y$: () => (/* binding */ y),
  qB: () => (/* binding */ o),
  Qt: () => (/* binding */ k),
  My: () => (/* binding */ C),
  bf: () => (/* binding */ j),
  jZ: () => (/* binding */ l),
  j0: () => (/* binding */ a),
  Sx: () => (/* binding */ p),
  E$: () => (/* binding */ b),
  h: () => (/* binding */ g),
  P: () => (/* binding */ B),
  SL: () => (/* binding */ d),
  gH: () => (/* binding */ u),
  si: () => (/* binding */ m),
  mJ: () => (/* binding */ q),
  UL: () => (/* binding */ D),
  D6: () => (/* binding */ V),
  Yi: () => (/* binding */ w),
  An: () => (/* binding */ F),
  LC: () => (/* binding */ A),
  xs: () => (/* binding */ i),
  Xm: () => (/* binding */ T),
  Vp: () => (/* binding */ v),
  zD: () => (/* binding */ G),
  m8: () => (/* binding */ M),
  nS: () => (/* binding */ E),
  H$: () => (/* binding */ I),
  eI: () => (/* binding */ O),
  Eq: () => (/* binding */ c),
  Aj: () => (/* binding */ h),
  E7: () => (/* binding */ z),
  Y4: () => (/* binding */ H),
  TX: () => (/* binding */ S),
  Uz: () => (/* binding */ L),
  ml: () => (/* binding */ U),
  XP: () => (/* binding */ x)
});

;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Mat3.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class t{constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.elementCount=9;const i=this.TypedArrayConstructor;void 0===f&&(f=9*i.BYTES_PER_ELEMENT);const d=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,d):new i(e,d,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<9;f++)e[f]=this.typedBuffer[r++];return e}setMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<9;f++)this.typedBuffer[r++]=e[f]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,d=r*e.typedBufferStride;for(let u=0;u<9;++u)f[i++]=s[d++]}get buffer(){return this.typedBuffer.buffer}}t.ElementCount=9;

;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Mat4.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class Mat4_t{constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.elementCount=16;const i=this.TypedArrayConstructor;void 0===f&&(f=16*i.BYTES_PER_ELEMENT);const d=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,d):new i(e,d,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<16;f++)e[f]=this.typedBuffer[r++];return e}setMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<16;f++)this.typedBuffer[r++]=e[f]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,d=r*e.typedBufferStride;for(let u=0;u<16;++u)f[i++]=s[d++]}get buffer(){return this.typedBuffer.buffer}}Mat4_t.ElementCount=16;

;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Scalar.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class Scalar_t{constructor(t,e,r=0,s,i){this.TypedArrayConstructor=t,this.elementCount=1;const f=this.TypedArrayConstructor;void 0===s&&(s=f.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==i?new f(e,u):new f(e,u,(i-r)/f.BYTES_PER_ELEMENT),this.stride=s,this.typedBufferStride=s/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride)}sliceBuffer(t,e,r=this.count-e){const s=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,s,this.stride,s+r*this.stride)}get(t){return this.typedBuffer[t*this.typedBufferStride]}set(t,e){this.typedBuffer[t*this.typedBufferStride]=e}get buffer(){return this.typedBuffer.buffer}}Scalar_t.ElementCount=1;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec2.js
var vec2 = __webpack_require__(58680);
;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Vec2.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class e{constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.elementCount=2;const i=this.TypedArrayConstructor;void 0===f&&(f=2*i.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,u):new i(e,u,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getVec(e,r){return e*=this.typedBufferStride,(0,vec2.s)(r,this.typedBuffer[e],this.typedBuffer[e+1])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t]=e[1]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t]=r}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,u=r*e.typedBufferStride;f[i++]=s[u++],f[i]=s[u]}get buffer(){return this.typedBuffer.buffer}}e.ElementCount=2;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3.js
var vec3 = __webpack_require__(21839);
;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Vec3.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class Vec3_e{constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.elementCount=3;const i=this.TypedArrayConstructor;void 0===f&&(f=3*i.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,u):new i(e,u,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getVec(e,r){return e*=this.typedBufferStride,(0,vec3.s)(r,this.typedBuffer[e],this.typedBuffer[e+1],this.typedBuffer[e+2])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t++]=e[1],this.typedBuffer[t]=e[2]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r,f){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t++]=r,this.typedBuffer[t]=f}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,u=r*e.typedBufferStride;f[i++]=s[u++],f[i++]=s[u++],f[i]=s[u]}get buffer(){return this.typedBuffer.buffer}}Vec3_e.ElementCount=3;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec4.js
var vec4 = __webpack_require__(25102);
;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Vec4.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class Vec4_e{constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.start=r,this.elementCount=4;const i=this.TypedArrayConstructor;void 0===f&&(f=4*i.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,u):new i(e,u,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getVec(e,r){return e*=this.typedBufferStride,(0,vec4.s)(r,this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t++]=e[1],this.typedBuffer[t++]=e[2],this.typedBuffer[t]=e[3]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r,f,s){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t++]=r,this.typedBuffer[t++]=f,this.typedBuffer[t]=s}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,u=r*e.typedBufferStride;f[i++]=s[u++],f[i++]=s[u++],f[i++]=s[u++],f[i]=s[u]}get buffer(){return this.typedBuffer.buffer}}Vec4_e.ElementCount=4;

;// ../node_modules/@arcgis/core/geometry/support/buffer/BufferView.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class y extends Scalar_t{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}static fromTypedArray(e,t){return new y(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}y.ElementType="f32";class u extends e{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(u,e,t)}static fromTypedArray(e,t){return new u(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}u.ElementType="f32";class i extends Vec3_e{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(i,e,t)}static fromTypedArray(e,t){return new i(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}i.ElementType="f32";class c extends Vec4_e{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(c,e,t)}static fromTypedArray(e,t){return new c(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}c.ElementType="f32";class l extends t{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(l,e,t)}static fromTypedArray(e,t){return new l(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}l.ElementType="f32";class a extends t{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(a,e,t)}static fromTypedArray(e,t){return new a(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}a.ElementType="f64";class p extends Mat4_t{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(p,e,t)}static fromTypedArray(e,t){return new p(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}p.ElementType="f32";class b extends Mat4_t{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(b,e,t)}static fromTypedArray(e,t){return new b(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}b.ElementType="f64";class o extends Scalar_t{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(o,e,t)}static fromTypedArray(e,t){return new o(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}o.ElementType="f64";class m extends e{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(m,e,t)}static fromTypedArray(e,t){return new m(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}m.ElementType="f64";class T extends Vec3_e{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(T,e,t)}static fromTypedArray(e,t){return new T(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}T.ElementType="f64";class h extends Vec4_e{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(h,e,t)}static fromTypedArray(e,t){return new h(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}h.ElementType="f64";class d extends Scalar_t{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(d,e,t)}static fromTypedArray(e,t){return new d(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}d.ElementType="u8";class A extends e{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(A,e,t)}static fromTypedArray(e,t){return new A(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}A.ElementType="u8";class O extends Vec3_e{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(O,e,t)}static fromTypedArray(e,t){return new O(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}O.ElementType="u8";class x extends Vec4_e{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(x,e,t)}static fromTypedArray(e,t){return new x(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}x.ElementType="u8";class g extends Scalar_t{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(g,e,t)}static fromTypedArray(e,t){return new g(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}g.ElementType="u16";class w extends e{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(w,e,t)}static fromTypedArray(e,t){return new w(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}w.ElementType="u16";class E extends Vec3_e{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(E,e,t)}static fromTypedArray(e,t){return new E(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}E.ElementType="u16";class L extends Vec4_e{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(L,e,t)}static fromTypedArray(e,t){return new L(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}L.ElementType="u16";class B extends Scalar_t{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(B,e,t)}static fromTypedArray(e,t){return new B(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}B.ElementType="u32";class F extends e{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(F,e,t)}static fromTypedArray(e,t){return new F(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}F.ElementType="u32";class I extends Vec3_e{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(I,e,t)}static fromTypedArray(e,t){return new I(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}I.ElementType="u32";class U extends Vec4_e{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(U,e,t)}static fromTypedArray(e,t){return new U(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}U.ElementType="u32";class j extends Scalar_t{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(j,e,t)}static fromTypedArray(e,t){return new j(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}j.ElementType="i8";class V extends e{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(V,e,t)}static fromTypedArray(e,t){return new V(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}V.ElementType="i8";class M extends Vec3_e{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(M,e,t)}static fromTypedArray(e,t){return new M(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}M.ElementType="i8";class S extends Vec4_e{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(S,e,t)}static fromTypedArray(e,t){return new S(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}S.ElementType="i8";class k extends Scalar_t{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(k,e,t)}static fromTypedArray(e,t){return new k(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}k.ElementType="i16";class q extends e{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(q,e,t)}static fromTypedArray(e,t){return new q(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}q.ElementType="i16";class v extends Vec3_e{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(v,e,t)}static fromTypedArray(e,t){return new v(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}v.ElementType="i16";class z extends Vec4_e{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(z,e,t)}static fromTypedArray(e,t){return new z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}z.ElementType="i16";class C extends Scalar_t{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(C,e,t)}static fromTypedArray(e,t){return new C(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}C.ElementType="i32";class D extends e{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(D,e,t)}static fromTypedArray(e,t){return new D(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}D.ElementType="i32";class G extends Vec3_e{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(G,e,t)}static fromTypedArray(e,t){return new G(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}G.ElementType="i32";class H extends Vec4_e{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(H,e,t)}static fromTypedArray(e,t){return new H(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}H.ElementType="i32";


/***/ }),

/***/ 87773:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ r),
/* harmony export */   O: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(539);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function r(e,r){return e.isGeographic||e.isWebMercator&&(r?.geographic??!0)}function o(r,o,g){const i=!r.isGeoreferenced;null!=g?.geographic&&g.geographic!==i&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getLogger(o).warnOnce(`Specifying the 'geographic' parameter (${g.geographic}) for a Mesh vertex space of type "${r.type}" is not supported. This parameter will be ignored.`)}


/***/ }),

/***/ 97519:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $y: () => (/* binding */ U),
/* harmony export */   NW: () => (/* binding */ V),
/* harmony export */   YL: () => (/* binding */ D),
/* harmony export */   bA: () => (/* binding */ q),
/* harmony export */   h7: () => (/* binding */ E),
/* harmony export */   project: () => (/* binding */ I),
/* harmony export */   qD: () => (/* binding */ B)
/* harmony export */ });
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92976);
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76287);
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37046);
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56192);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21839);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22279);
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46615);
/* harmony import */ var _projection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13484);
/* harmony import */ var _spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32937);
/* harmony import */ var _projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38394);
/* harmony import */ var _projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(84119);
/* harmony import */ var _DoubleArray_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90166);
/* harmony import */ var _MeshGeoreferencedRelativeVertexSpace_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(29317);
/* harmony import */ var _MeshGeoreferencedVertexSpace_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19938);
/* harmony import */ var _MeshLocalVertexSpace_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(99218);
/* harmony import */ var _MeshTransform_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8695);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(24121);
/* harmony import */ var _geographicUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(87773);
/* harmony import */ var _projection_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(72188);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function U(n,t,e){return (0,_geographicUtils_js__WEBPACK_IMPORTED_MODULE_17__/* .isGeographicMesh */ .D)(t.spatialReference,e)?W(n,t,e):L(n,t,e)}function V(n,t=_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__.I){const{position:e,normal:r,tangent:o}=n;return{position:(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_16__.t)(new Float64Array(e.length),e,t),normal:null!=r?(0,_projection_js__WEBPACK_IMPORTED_MODULE_18__/* .transformNormal */ .qs)(r,new Float32Array(r.length),t):null,tangent:null!=o?(0,_projection_js__WEBPACK_IMPORTED_MODULE_18__/* .transformTangent */ .KM)(o,new Float32Array(o.length),t):null}}function q(n,t,e,r){const{position:o,normal:i,tangent:a}=n;if(!t.isRelative)return{position:o,normal:i,tangent:a};return U(V(n,e?.localMatrix),t.getOriginPoint(r),{geographic:!t.isGeoreferenced})}function B(n,t,e){if(e?.useTransform){const{position:r,normal:o,tangent:i}=n,{x:a,y:s,z:l}=t,c=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.f)(a,s,l??0);return{vertexAttributes:{position:r,normal:o,tangent:i},vertexSpace:e.geographic??1?new _MeshLocalVertexSpace_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A({origin:c}):new _MeshGeoreferencedRelativeVertexSpace_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A({origin:c}),transform:new _MeshTransform_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A}}return{vertexAttributes:U(n,t,e),vertexSpace:new _MeshGeoreferencedVertexSpace_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A,transform:null}}function D(n,t,e){return (0,_geographicUtils_js__WEBPACK_IMPORTED_MODULE_17__/* .isGeographicMesh */ .D)(t.spatialReference,e)?K(n,t,e):J(n,t,e)}function E(n,t,e,r,o){if(!t.isRelative)return D(n,r,o);const{spatialReference:i}=r,a=q(n,t,e,i);return r.equals(t.getOriginPoint(i))?J(a,r,o):D(a,r,o)}function I({positions:n,transform:t,vertexSpace:e,inSpatialReference:i,outSpatialReference:a,outPositions:l,localMode:f}){const p=e.isRelative?e.origin:_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.Z,w=e.isRelative?t?.localMatrix??_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__.I:_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__.I;if(e.isGeoreferenced){const t=l??(0,_DoubleArray_js__WEBPACK_IMPORTED_MODULE_11__/* .newDoubleArray */ .jh)(n.length);if((0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_2__.a)(w,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__.I)?(0,_DoubleArray_js__WEBPACK_IMPORTED_MODULE_11__/* .copyInto */ .s)(t,n):(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_16__.t)(t,n,w),!(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__.h)(p,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.Z)){const[n,e,r]=p;for(let o=0;o<t.length;o+=3)t[o]+=n,t[o+1]+=e,t[o+2]+=r}return (0,_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_10__.projectBuffer)(t,i,0,t,a,0,t.length/3),t}let A=i;const x=(0,_spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .getSphericalPCPF */ .lO)(i);A=a.isWebMercator&&f||!(0,_projection_js__WEBPACK_IMPORTED_MODULE_7__.canProjectWithoutEngine)(i,x)?A:x,(0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_9__/* .computeTranslationToOriginAndRotation */ .l)(i,p,_,A),(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_2__.m)(_,_,w);const v=l??(0,_DoubleArray_js__WEBPACK_IMPORTED_MODULE_11__/* .newDoubleArray */ .jh)(n.length);return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_16__.t)(v,n,_),(0,_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_10__.projectBuffer)(v,A,0,v,a,0,v.length/3),v}function L(n,t,e){const r=new Float64Array(n.position.length),o=n.position,i=t.x,a=t.y,s=t.z??0,l=$(e?e.unit:null,t.spatialReference);for(let c=0;c<o.length;c+=3)r[c]=o[c]*l+i,r[c+1]=o[c+1]*l+a,r[c+2]=o[c+2]*l+s;return{position:r,normal:n.normal,tangent:n.tangent}}function W(n,t,e){const r=t.spatialReference,o=N(t,e,_),i=new Float64Array(n.position.length),a=Z(n.position,o,r,i),s=(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_6__.n)(tn,o);return{position:a,normal:C(a,i,n.normal,s,r),tangent:H(a,i,n.tangent,s,r)}}function Z(n,t,e,r){(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_16__.t)(r,n,t);const o=new Float64Array(n.length);return (0,_projection_js__WEBPACK_IMPORTED_MODULE_18__/* .projectFromPCPF */ .$5)(r,o,e)}function C(n,t,e,r,o){if(null==e)return null;const i=new Float32Array(e.length);return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_16__.a)(i,e,r),(0,_projection_js__WEBPACK_IMPORTED_MODULE_18__/* .projectNormalFromPCPF */ .si)(i,n,t,o,i),i}function H(n,t,e,r,o){if(null==e)return null;const i=new Float32Array(e.length);(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_16__.a)(i,e,r,4);for(let a=3;a<i.length;a+=4)i[a]=e[a];return (0,_projection_js__WEBPACK_IMPORTED_MODULE_18__/* .projectTangentFromPCPF */ .Mv)(i,n,t,o,i),i}function J(n,t,e){const r=new Float64Array(n.position.length),o=n.position,i=t.x,a=t.y,s=t.z??0,l=$(e?e.unit:null,t.spatialReference);for(let c=0;c<o.length;c+=3)r[c]=(o[c]-i)/l,r[c+1]=(o[c+1]-a)/l,r[c+2]=(o[c+2]-s)/l;return{position:r,normal:n.normal,tangent:n.tangent}}function K(n,t,e){const r=t.spatialReference;N(t,e,_);const o=(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_2__.i)(nn,_),a=new Float64Array(n.position.length),s=Q(n.position,r,o,a),l=(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_6__.n)(tn,o);return{position:s,normal:X(n.normal,n.position,a,r,l),tangent:Y(n.tangent,n.position,a,r,l)}}function N(n,t,e){(0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_9__/* .computeTranslationToOriginAndRotation */ .l)(n.spatialReference,[n.x,n.y,n.z??0],e,(0,_spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .getSphericalPCPF */ .lO)(n.spatialReference));const r=$(t?t.unit:null,n.spatialReference);return (0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_2__.b)(e,e,[r,r,r]),e}function Q(n,t,e,r){const o=(0,_projection_js__WEBPACK_IMPORTED_MODULE_18__/* .projectToPCPF */ .gr)(n,t,r),i=new Float64Array(o.length);return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_16__.t)(i,o,e),i}function X(n,t,e,r,o){if(null==n)return null;const i=(0,_projection_js__WEBPACK_IMPORTED_MODULE_18__/* .projectNormalToPCPF */ .X4)(n,t,e,r,new Float32Array(n.length));return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_16__.a)(i,i,o),i}function Y(n,t,e,r,o){if(null==n)return null;const i=(0,_projection_js__WEBPACK_IMPORTED_MODULE_18__/* .projectTangentToPCPF */ .xA)(n,t,e,r,new Float32Array(n.length));return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_16__.a)(i,i,o,4),i}function $(e,r){if(null==e)return 1;const o=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getMetersPerCartesianUnitForSR */ .KX)(r);return 1/(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(o,"meters",e)}const _=(0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__.a)(),nn=(0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__.a)(),tn=(0,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__.a)();


/***/ }),

/***/ 72188:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $5: () => (/* binding */ O),
/* harmony export */   KM: () => (/* binding */ M),
/* harmony export */   Mv: () => (/* binding */ v),
/* harmony export */   X4: () => (/* binding */ j),
/* harmony export */   gr: () => (/* binding */ h),
/* harmony export */   qs: () => (/* binding */ E),
/* harmony export */   si: () => (/* binding */ _),
/* harmony export */   xA: () => (/* binding */ R)
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(539);
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46615);
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76287);
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56192);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21839);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22279);
/* harmony import */ var _spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32937);
/* harmony import */ var _projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38394);
/* harmony import */ var _projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84119);
/* harmony import */ var _spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87926);
/* harmony import */ var _webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(96082);
/* harmony import */ var _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(57813);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24121);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const g=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getLogger("esri.geometry.support.meshUtils.normalProjection");function j(r,e,o,t,n){return k(t)?(V(U.TO_PCPF,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__/* .BufferViewVec3f */ .xs.fromTypedArray(r),_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(e),_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(o),t,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__/* .BufferViewVec3f */ .xs.fromTypedArray(n)),n):(g.error("Cannot convert spatial reference to PCPF"),n)}function _(r,e,o,t,n){return k(t)?(V(U.FROM_PCPF,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__/* .BufferViewVec3f */ .xs.fromTypedArray(r),_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(e),_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(o),t,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__/* .BufferViewVec3f */ .xs.fromTypedArray(n)),n):(g.error("Cannot convert to spatial reference from PCPF"),n)}function h(r,e,o){return (0,_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_8__.projectBuffer)(r,e,0,o,(0,_spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .getSphericalPCPF */ .lO)(e),0,r.length/3),o}function O(r,e,o){return (0,_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_8__.projectBuffer)(r,(0,_spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .getSphericalPCPF */ .lO)(o),0,e,o,0,r.length/3),e}function E(r,t,n){return (0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.n)(N,n),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_12__.a)(t,r,N),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.i)(N)||(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_12__.n)(t,t),t}function M(r,t,n){if((0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.n)(N,n),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_12__.a)(t,r,N,4),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.i)(N)||(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_12__.n)(t,t,4),r!==t)for(let e=3;e<r.length;e+=4)t[e]=r[e];return t}function R(r,e,o,t,n){if(!k(t))return g.error("Cannot convert spatial reference to PCPF"),n;V(U.TO_PCPF,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__/* .BufferViewVec3f */ .xs.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(e),_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(o),t,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__/* .BufferViewVec3f */ .xs.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT));for(let f=3;f<r.length;f+=4)n[f]=r[f];return n}function v(r,e,o,t,n){if(!k(t))return g.error("Cannot convert to spatial reference from PCPF"),n;V(U.FROM_PCPF,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__/* .BufferViewVec3f */ .xs.fromTypedArray(r,16),_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(e),_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(o),t,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__/* .BufferViewVec3f */ .xs.fromTypedArray(n,16));for(let f=3;f<r.length;f+=4)n[f]=r[f];return n}function V(r,e,o,f,a,c){if(!e)return;const u=o.count,y=(0,_spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .getSphericalPCPF */ .lO)(a);if(B(a))for(let s=0;s<u;s++)f.getVec(s,b),e.getVec(s,S),(0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_7__/* .computeTranslationToOriginAndRotation */ .l)(y,b,w,y),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.f)(N,w),r===U.FROM_PCPF&&(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.t)(N,N),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__.t)(S,S,N),c.setVec(s,S);else for(let m=0;m<u;m++){f.getVec(m,b),e.getVec(m,S),(0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_7__/* .computeTranslationToOriginAndRotation */ .l)(y,b,w,y),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.f)(N,w);const a=(0,_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .y2lat */ .jg)(o.get(m,1));let u=Math.cos(a);r===U.TO_PCPF&&(u=1/u),N[0]*=u,N[1]*=u,N[2]*=u,N[3]*=u,N[4]*=u,N[5]*=u,r===U.FROM_PCPF&&(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.t)(N,N),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__.t)(S,S,N),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__.n)(S,S),c.setVec(m,S)}return c}function k(r){return B(r)||L(r)}function B(r){return r.isWGS84||(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .isCGCS2000 */ .x1)(r)||(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .isMars */ .q8)(r)||(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .isMoon */ .KQ)(r)}function L(r){return r.isWebMercator}var U;!function(r){r[r.TO_PCPF=0]="TO_PCPF",r[r.FROM_PCPF=1]="FROM_PCPF"}(U||(U={}));const b=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.c)(),S=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.c)(),w=(0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__.a)(),N=(0,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__.a)();


/***/ })

};
;