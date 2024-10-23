"use strict";
exports.id = 2483;
exports.ids = [2483];
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

/***/ 80952:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ n),
/* harmony export */   f: () => (/* binding */ r)
/* harmony export */ });
/* unused harmony exports O, U, Z, a, b, d, e, g, h, o, u, v, z */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function n(){return new Float32Array(3)}function t(n){const t=new Float32Array(3);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function r(n,t,r){const e=new Float32Array(3);return e[0]=n,e[1]=t,e[2]=r,e}function e(n,t){return new Float32Array(n,t,3)}function a(){return n()}function o(){return r(1,1,1)}function u(){return r(1,0,0)}function s(){return r(0,1,0)}function c(){return r(0,0,1)}const i=a(),f=o(),l=u(),_=s(),y=c(),w=Object.freeze(Object.defineProperty({__proto__:null,ONES:f,UNIT_X:l,UNIT_Y:_,UNIT_Z:y,ZEROS:i,clone:t,create:n,createView:e,fromValues:r,ones:o,unitX:u,unitY:s,unitZ:c,zeros:a},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 93321:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ d)
});

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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/PointCloudRenderer.js + 5 modules
var PointCloudRenderer = __webpack_require__(42422);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/LegendOptions.js
var LegendOptions = __webpack_require__(38785);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(96220);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
;// ../node_modules/@arcgis/core/renderers/support/pointCloud/ColorClassBreakInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var a;let p=a=class extends JSONSupport/* JSONSupport */.oY{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new a({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,lang/* clone */.o8)(this.color)})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],p.prototype,"minValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],p.prototype,"maxValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Color/* default */.A,json:{type:[ensureType/* Integer */.jz],write:!0}})],p.prototype,"color",void 0),p=a=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],p);const c=p;

;// ../node_modules/@arcgis/core/renderers/PointCloudClassBreaksRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var l;let PointCloudClassBreaksRenderer_a=l=class extends PointCloudRenderer/* default */.A{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new l({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,lang/* clone */.o8)(this.colorClassBreakInfos),legendOptions:(0,lang/* clone */.o8)(this.legendOptions)})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],PointCloudClassBreaksRenderer_a.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0},type:String})],PointCloudClassBreaksRenderer_a.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:LegendOptions/* LegendOptions */.q,json:{write:!0}})],PointCloudClassBreaksRenderer_a.prototype,"legendOptions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:PointCloudRenderer/* default */.A.fieldTransformTypeKebabDict.apiValues,json:{type:PointCloudRenderer/* default */.A.fieldTransformTypeKebabDict.jsonValues,read:PointCloudRenderer/* default */.A.fieldTransformTypeKebabDict.read,write:PointCloudRenderer/* default */.A.fieldTransformTypeKebabDict.write}})],PointCloudClassBreaksRenderer_a.prototype,"fieldTransformType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[c],json:{write:!0}})],PointCloudClassBreaksRenderer_a.prototype,"colorClassBreakInfos",void 0),PointCloudClassBreaksRenderer_a=l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.PointCloudClassBreaksRenderer")],PointCloudClassBreaksRenderer_a);const d=PointCloudClassBreaksRenderer_a;


/***/ }),

/***/ 42422:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ PointCloudRenderer_a)
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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
;// ../node_modules/@arcgis/core/renderers/support/pointCloud/ColorModulation.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var s;let i=s=class extends JSONSupport/* JSONSupport */.oY{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new s({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],i.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],i.prototype,"minValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],i.prototype,"maxValue",void 0),i=s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.pointCloud.ColorModulation")],i);const p=i;

;// ../node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeAlgorithm.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const PointSizeAlgorithm_p=new jsonMap/* JSONMap */.J({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let PointSizeAlgorithm_i=class extends JSONSupport/* JSONSupport */.oY{};(0,tslib_es6._)([(0,property/* property */.MZ)({type:PointSizeAlgorithm_p.apiValues,readOnly:!0,nonNullable:!0,json:{type:PointSizeAlgorithm_p.jsonValues,read:!1,write:PointSizeAlgorithm_p.write}})],PointSizeAlgorithm_i.prototype,"type",void 0),PointSizeAlgorithm_i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],PointSizeAlgorithm_i);const a=PointSizeAlgorithm_i;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(28902);
;// ../node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeFixedSizeAlgorithm.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var PointSizeFixedSizeAlgorithm_i;let PointSizeFixedSizeAlgorithm_p=PointSizeFixedSizeAlgorithm_i=class extends a{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new PointSizeFixedSizeAlgorithm_i({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({pointCloudFixedSizeAlgorithm:"fixed-size"})],PointSizeFixedSizeAlgorithm_p.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],PointSizeFixedSizeAlgorithm_p.prototype,"size",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],PointSizeFixedSizeAlgorithm_p.prototype,"useRealWorldSymbolSizes",void 0),PointSizeFixedSizeAlgorithm_p=PointSizeFixedSizeAlgorithm_i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],PointSizeFixedSizeAlgorithm_p);const l=PointSizeFixedSizeAlgorithm_p;

;// ../node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeSplatAlgorithm.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var PointSizeSplatAlgorithm_p;let c=PointSizeSplatAlgorithm_p=class extends a{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new PointSizeSplatAlgorithm_p({scaleFactor:this.scaleFactor})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({pointCloudSplatAlgorithm:"splat"})],c.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],c.prototype,"scaleFactor",void 0),c=PointSizeSplatAlgorithm_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],c);const PointSizeSplatAlgorithm_a=c;

;// ../node_modules/@arcgis/core/renderers/support/pointCloud/pointSizeAlgorithmTypeUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const e={key:"type",base:a,typeMap:{"fixed-size":l,splat:PointSizeSplatAlgorithm_a}};

;// ../node_modules/@arcgis/core/renderers/PointCloudRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const u=(0,jsonMap/* strict */.O)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let PointCloudRenderer_c=class extends JSONSupport/* JSONSupport */.oY{constructor(o){super(o),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:(0,lang/* clone */.o8)(this.pointSizeAlgorithm),colorModulation:(0,lang/* clone */.o8)(this.colorModulation),pointsPerInch:(0,lang/* clone */.o8)(this.pointsPerInch)}}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:u.apiValues,readOnly:!0,nonNullable:!0,json:{type:u.jsonValues,read:!1,write:u.write}})],PointCloudRenderer_c.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:e,json:{write:!0}})],PointCloudRenderer_c.prototype,"pointSizeAlgorithm",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:p,json:{write:!0}})],PointCloudRenderer_c.prototype,"colorModulation",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0},nonNullable:!0,type:Number})],PointCloudRenderer_c.prototype,"pointsPerInch",void 0),PointCloudRenderer_c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.PointCloudRenderer")],PointCloudRenderer_c),function(o){o.fieldTransformTypeKebabDict=new jsonMap/* JSONMap */.J({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"})}(PointCloudRenderer_c||(PointCloudRenderer_c={}));const PointCloudRenderer_a=PointCloudRenderer_c;


/***/ }),

/***/ 36275:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19251);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/* harmony import */ var _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42422);
/* harmony import */ var _support_LegendOptions_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38785);
/* harmony import */ var _visualVariables_support_ColorStop_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5001);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var l;let d=l=class extends _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new l({...this.cloneProperties(),field:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(this.field),fieldTransformType:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(this.fieldTransformType),stops:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(this.stops),legendOptions:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(this.legendOptions)})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_4__/* .enumeration */ .e)({pointCloudStretchRenderer:"point-cloud-stretch"})],d.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({json:{write:!0},type:String})],d.prototype,"field",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_support_LegendOptions_js__WEBPACK_IMPORTED_MODULE_7__/* .LegendOptions */ .q,json:{write:!0}})],d.prototype,"legendOptions",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.fieldTransformTypeKebabDict.apiValues,json:{type:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.fieldTransformTypeKebabDict.jsonValues,read:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.fieldTransformTypeKebabDict.read,write:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.fieldTransformTypeKebabDict.write}})],d.prototype,"fieldTransformType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:[_visualVariables_support_ColorStop_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A],json:{write:!0}})],d.prototype,"stops",void 0),d=l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.renderers.PointCloudStretchRenderer")],d);const a=d;


/***/ }),

/***/ 12954:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ a)
});

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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/PointCloudRenderer.js + 5 modules
var PointCloudRenderer = __webpack_require__(42422);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/LegendOptions.js
var LegendOptions = __webpack_require__(38785);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(96220);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
;// ../node_modules/@arcgis/core/renderers/support/pointCloud/ColorUniqueValueInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var l;let c=l=class extends JSONSupport/* JSONSupport */.oY{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new l({description:this.description,label:this.label,values:(0,lang/* clone */.o8)(this.values),color:(0,lang/* clone */.o8)(this.color)})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],c.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],c.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],json:{write:!0}})],c.prototype,"values",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Color/* default */.A,json:{type:[ensureType/* Integer */.jz],write:!0}})],c.prototype,"color",void 0),c=l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],c);const n=c;

;// ../node_modules/@arcgis/core/renderers/PointCloudUniqueValueRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var PointCloudUniqueValueRenderer_l;let u=PointCloudUniqueValueRenderer_l=class extends PointCloudRenderer/* default */.A{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new PointCloudUniqueValueRenderer_l({...this.cloneProperties(),field:(0,lang/* clone */.o8)(this.field),fieldTransformType:(0,lang/* clone */.o8)(this.fieldTransformType),colorUniqueValueInfos:(0,lang/* clone */.o8)(this.colorUniqueValueInfos),legendOptions:(0,lang/* clone */.o8)(this.legendOptions)})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],u.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0},type:String})],u.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:PointCloudRenderer/* default */.A.fieldTransformTypeKebabDict.apiValues,json:{type:PointCloudRenderer/* default */.A.fieldTransformTypeKebabDict.jsonValues,read:PointCloudRenderer/* default */.A.fieldTransformTypeKebabDict.read,write:PointCloudRenderer/* default */.A.fieldTransformTypeKebabDict.write}})],u.prototype,"fieldTransformType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[n],json:{write:!0}})],u.prototype,"colorUniqueValueInfos",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:LegendOptions/* LegendOptions */.q,json:{write:!0}})],u.prototype,"legendOptions",void 0),u=PointCloudUniqueValueRenderer_l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.PointCloudUniqueValueRenderer")],u);const a=u;


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

/***/ 72483:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ h)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/typedArrayUtil.js
var typedArrayUtil = __webpack_require__(86942);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/quat.js
var quat = __webpack_require__(76743);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/quatf64.js
var quatf64 = __webpack_require__(46991);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3.js
var vec3 = __webpack_require__(21839);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3f32.js
var vec3f32 = __webpack_require__(80952);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projection/projectBuffer.js
var projectBuffer = __webpack_require__(84119);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/PointCloudClassBreaksRenderer.js + 1 modules
var PointCloudClassBreaksRenderer = __webpack_require__(93321);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/PointCloudStretchRenderer.js
var PointCloudStretchRenderer = __webpack_require__(36275);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/PointCloudUniqueValueRenderer.js + 1 modules
var PointCloudUniqueValueRenderer = __webpack_require__(12954);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/i3s/I3SBinaryReader.js
var I3SBinaryReader = __webpack_require__(19370);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/i3s/LEPCC.js
var LEPCC = __webpack_require__(68538);
;// ../node_modules/@arcgis/core/views/3d/layers/i3s/PointCloudWorkerUtil.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function i(t,n,l,s){const{rendererJSON:i,isRGBRenderer:u}=t;let c=null,a=null;if(n&&u)c=n;else if(n&&"pointCloudUniqueValueRenderer"===i?.type){a=PointCloudUniqueValueRenderer/* default */.A.fromJSON(i);const e=a.colorUniqueValueInfos;c=new Uint8Array(3*s);const r=d(a.fieldTransformType);for(let o=0;o<s;o++){const t=(r?r(n[o]):n[o])+"";for(let r=0;r<e.length;r++)if(e[r].values.includes(t)){c[3*o]=e[r].color.r,c[3*o+1]=e[r].color.g,c[3*o+2]=e[r].color.b;break}}}else if(n&&"pointCloudStretchRenderer"===i?.type){a=PointCloudStretchRenderer/* default */.A.fromJSON(i);const e=a.stops;c=new Uint8Array(3*s);const o=d(a.fieldTransformType);for(let r=0;r<s;r++){const t=o?o(n[r]):n[r],l=e.length-1;if(t<e[0].value)c[3*r]=e[0].color.r,c[3*r+1]=e[0].color.g,c[3*r+2]=e[0].color.b;else if(t>=e[l].value)c[3*r]=e[l].color.r,c[3*r+1]=e[l].color.g,c[3*r+2]=e[l].color.b;else for(let o=1;o<e.length;o++)if(t<e[o].value){const n=(t-e[o-1].value)/(e[o].value-e[o-1].value);c[3*r]=e[o].color.r*n+e[o-1].color.r*(1-n),c[3*r+1]=e[o].color.g*n+e[o-1].color.g*(1-n),c[3*r+2]=e[o].color.b*n+e[o-1].color.b*(1-n);break}}}else if(n&&"pointCloudClassBreaksRenderer"===i?.type){a=PointCloudClassBreaksRenderer/* default */.A.fromJSON(i);const r=a.colorClassBreakInfos;c=new Uint8Array(3*s);const o=d(a.fieldTransformType);for(let e=0;e<s;e++){const t=o?o(n[e]):n[e];for(let o=0;o<r.length;o++)if(t>=r[o].minValue&&t<=r[o].maxValue){c[3*e]=r[o].color.r,c[3*e+1]=r[o].color.g,c[3*e+2]=r[o].color.b;break}}}else c=new Uint8Array(3*s).fill(255);if(l&&a?.colorModulation){const e=a.colorModulation.minValue,r=a.colorModulation.maxValue,o=.3;for(let t=0;t<s;t++){const n=l[t],s=n>=r?1:n<=e?o:o+(1-o)*(n-e)/(r-e);c[3*t]=s*c[3*t],c[3*t+1]=s*c[3*t+1],c[3*t+2]=s*c[3*t+2]}}return c}function u(e,r){if(null==e.encoding||""===e.encoding){const o=(0,I3SBinaryReader/* createGeometryIndexFromSchema */.wH)(r,e);if(null==o.vertexAttributes.position)return;const l=(0,I3SBinaryReader/* createTypedView */.MA)(r,o.vertexAttributes.position),s=o.header.fields,i=[s.offsetX,s.offsetY,s.offsetZ],u=[s.scaleX,s.scaleY,s.scaleZ],c=l.length/3,a=new Float64Array(3*c);for(let e=0;e<c;e++)a[3*e]=l[3*e]*u[0]+i[0],a[3*e+1]=l[3*e+1]*u[1]+i[1],a[3*e+2]=l[3*e+2]*u[2]+i[2];return a}if("lepcc-xyz"===e.encoding)return (0,LEPCC/* decodeXYZ */.Me)(r).result}function PointCloudWorkerUtil_c(e,r,o){return e?.attributeInfo.useElevation?r?a(r,o):null:e?.attributeInfo.storageInfo?(0,I3SBinaryReader/* readBinaryAttribute */.m0)(e.attributeInfo.storageInfo,e.buffer,o):null}function a(e,r){const o=new Float64Array(r);for(let t=0;t<r;t++)o[t]=e[3*t+2];return o}function PointCloudWorkerUtil_f(e,r,o,t,n){const l=e.length/3;let s=0;for(let i=0;i<l;i++){let l=!0;for(let e=0;e<t.length&&l;e++){const{filterJSON:r}=t[e],o=n[e].values[i];switch(r.type){case"pointCloudValueFilter":{const e="exclude"===r.mode;r.values.includes(o)===e&&(l=!1);break}case"pointCloudBitfieldFilter":{const e=p(r.requiredSetBits),t=p(r.requiredClearBits);(o&e)===e&&0==(o&t)||(l=!1);break}case"pointCloudReturnFilter":{const e=15&o,t=o>>>4&15,n=t>1,s=1===e,i=e===t;let u=!1;for(const o of r.includedReturns)if("last"===o&&i||"firstOfMany"===o&&s&&n||"lastOfMany"===o&&i&&n||"single"===o&&!n){u=!0;break}u||(l=!1);break}}}l&&(o[s]=i,e[3*s]=e[3*i],e[3*s+1]=e[3*i+1],e[3*s+2]=e[3*i+2],r[3*s]=r[3*i],r[3*s+1]=r[3*i+1],r[3*s+2]=r[3*i+2],s++)}return s}function d(e){switch(e){default:case null:case"none":return e=>e;case"low-four-bit":return e=>15&e;case"high-four-bit":return e=>(240&e)>>4;case"absolute-value":return e=>Math.abs(e);case"modulo-ten":return e=>e%10}}function p(e){let r=0;for(const o of e||[])r|=1<<o;return r}

;// ../node_modules/@arcgis/core/views/3d/layers/PointCloudWorker.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class PointCloudWorker_p{transform(t){const e=this._transform(t),a=[e.points.buffer,e.rgb.buffer];null!=e.pointIdFilterMap&&a.push(e.pointIdFilterMap.buffer);for(const o of e.attributes)"buffer"in o.values&&(0,typedArrayUtil/* isArrayBuffer */.mw)(o.values.buffer)&&o.values.buffer!==e.rgb.buffer&&a.push(o.values.buffer);return Promise.resolve({result:e,transferList:a})}_transform(r){const e=u(r.schema,r.geometryBuffer);let a=e.length/3,o=null;const n=new Array,f=PointCloudWorkerUtil_c(r.primaryAttributeData,e,a);null!=r.primaryAttributeData&&f&&n.push({attributeInfo:r.primaryAttributeData.attributeInfo,values:f});const s=PointCloudWorkerUtil_c(r.modulationAttributeData,e,a);null!=r.modulationAttributeData&&s&&n.push({attributeInfo:r.modulationAttributeData.attributeInfo,values:s});let p=i(r.rendererInfo,f,s,a);if(r.filterInfo&&r.filterInfo.length>0&&null!=r.filterAttributesData){const f=r.filterAttributesData.filter(arrayUtils/* isSome */.Ru).map((t=>{const r=PointCloudWorkerUtil_c(t,e,a),o={attributeInfo:t.attributeInfo,values:r};return n.push(o),o}));o=new Uint32Array(a),a=PointCloudWorkerUtil_f(e,p,o,r.filterInfo,f)}for(const t of r.userAttributesData){const r=PointCloudWorkerUtil_c(t,e,a);n.push({attributeInfo:t.attributeInfo,values:r})}3*a<p.length&&(p=new Uint8Array(p.buffer.slice(0,3*a))),this._applyElevationOffsetInPlace(e,a,r.elevationOffset);const c=this._transformCoordinates(e,a,r.obb,SpatialReference/* default */.A.fromJSON(r.inSR),SpatialReference/* default */.A.fromJSON(r.outSR));return{obb:r.obb,points:c,rgb:p,attributes:n,pointIdFilterMap:o}}_transformCoordinates(t,r,a,i,u){if(!(0,projectBuffer.projectBuffer)(t,i,0,t,u,0,r))throw new Error("Can't reproject");const l=(0,vec3f32.f)(a.center[0],a.center[1],a.center[2]),b=(0,vec3f32.c)(),m=(0,vec3f32.c)();(0,quat.a)(c,a.quaternion);const p=new Float32Array(3*r);for(let e=0;e<r;e++)b[0]=t[3*e]-l[0],b[1]=t[3*e+1]-l[1],b[2]=t[3*e+2]-l[2],(0,vec3.v)(m,b,c),a.halfSize[0]=Math.max(a.halfSize[0],Math.abs(m[0])),a.halfSize[1]=Math.max(a.halfSize[1],Math.abs(m[1])),a.halfSize[2]=Math.max(a.halfSize[2],Math.abs(m[2])),p[3*e]=b[0],p[3*e+1]=b[1],p[3*e+2]=b[2];return p}_applyElevationOffsetInPlace(t,r,e){if(0!==e)for(let a=0;a<r;a++)t[3*a+2]+=e}}const c=(0,quatf64.a)();function h(){return new PointCloudWorker_p}


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


/***/ })

};
;