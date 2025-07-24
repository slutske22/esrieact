"use strict";
exports.id = 31197;
exports.ids = [31197,90081];
exports.modules = {

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

/***/ 18031:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ v)
/* harmony export */ });
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62991);
/* harmony import */ var _MD5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89809);
/* harmony import */ var _multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47980);
/* harmony import */ var _urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19759);
/* harmony import */ var _uuid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1874);
/* harmony import */ var _metadata_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88135);
/* harmony import */ var _PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91101);
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81482);
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80925);
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55714);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function v(r){const t=r?.origins??[void 0];return(e,o)=>{const s=U(r,e,o);for(const r of t){const t=(0,_property_js__WEBPACK_IMPORTED_MODULE_6__/* .propertyJSONMeta */ .rM)(e,r,o);for(const r in s)t[r]=s[r]}}}function U(r,t,e){if("resource"===r?.type)return w(r,t,e);switch(r?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:r,write:t}=_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__.b;return{read:r,write:t}}}}function w(r,t,n){const i=(0,_metadata_js__WEBPACK_IMPORTED_MODULE_4__/* .getPropertyMetadata */ .z4)(t,n);return{type:String,read:(r,t,e)=>{const o=(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__.r)(r,t,e);return i.type===String?o:"function"==typeof i.type?new i.type({url:o}):void 0},write:{isRequired:i.json?.write?.isRequired,writer(t,p,c,u){if(!u?.resources)return"string"==typeof t?void(p[c]=(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__.t)(t,u)):void(p[c]=t.write({},u));const l=x(t),m=(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__.t)(l,{...u,verifyItemRelativeUrls:u?.verifyItemRelativeUrls?{writtenUrls:u.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__.M.NO),g=i.type!==String&&(!(0,_multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .isMultiOriginJSONMixin */ .H)(this)||u?.origin&&this.originIdOf(n)>(0,_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_5__/* .nameToId */ .aB)(u.origin)),h={object:this,propertyName:n,value:t,targetUrl:m,dest:p,targetPropertyName:c,context:u,params:r};u?.portalItem&&m&&!(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isAbsolute */ .oP)(m)?g&&r?.contentAddressed?I(h):g?N(h):P(h):u?.portalItem&&(null==m||null!=(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__.i)(m)||(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isBlobProtocol */ .w8)(m)||g)?I(h):p[c]=m}}}}function I(e){const{targetUrl:o,params:p,value:u,context:a,dest:l,targetPropertyName:d}=e;if(!a.portalItem)return;const f=(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__.p)(o),y=S(u,o,a);if(p?.contentAddressed&&"json"!==y.type)return void a.messages?.push(new _Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("persistable:contentAddressingUnsupported",`Property "${d}" is trying to serializing a resource with content of type ${y.type} with content addressing. Content addressing is only supported for json resources.`,{content:y}));const g=p?.contentAddressed&&"json"===y.type?(0,_MD5_js__WEBPACK_IMPORTED_MODULE_1__/* .createMD5Hash */ .d)(y.jsonString):f?.filename??(0,_uuid_js__WEBPACK_IMPORTED_MODULE_3__/* .generateUUID */ .lk)(),j=(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(p?.prefix??f?.prefix,g),v=`${j}.${(0,_portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_7__/* .getResourceContentExtension */ .n)(y)}`;if(p?.contentAddressed&&a.resources&&"json"===y.type){const r=a.resources.toKeep.find((({resource:r})=>r.path===v))??a.resources.toAdd.find((({resource:r})=>r.path===v));if(r)return void(l[d]=r.resource.itemRelativeUrl)}const U=a.portalItem.resourceFromPath(v);(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isBlobProtocol */ .w8)(o)&&a.resources&&a.resources.pendingOperations.push((0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .blobUrlToBlob */ .tk)(o).then((r=>{U.path=`${j}.${(0,_portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_7__/* .getResourceContentExtension */ .n)({type:"blob",blob:r})}`,l[d]=U.itemRelativeUrl})).catch((()=>{})));const w=p?.compress??!1;a.resources&&b({...e,resource:U,content:y,compress:w,updates:a.resources.toAdd}),l[d]=U.itemRelativeUrl}function N(r){const{context:t,targetUrl:e,params:o,value:s,dest:n,targetPropertyName:i}=r;if(!t.portalItem)return;const c=t.portalItem.resourceFromPath(e),u=S(s,e,t),a=(0,_portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_7__/* .getResourceContentExtension */ .n)(u),l=(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getPathExtension */ .Zo)(c.path),d=o?.compress??!1;a===l?(t.resources&&b({...r,resource:c,content:u,compress:d,updates:t.resources.toUpdate}),n[i]=e):I(r)}function P({context:r,targetUrl:t,dest:e,targetPropertyName:o}){r.portalItem&&r.resources&&(r.resources.toKeep.push({resource:r.portalItem.resourceFromPath(t),compress:!1}),e[o]=t)}function b({object:r,propertyName:t,updates:e,resource:o,content:s,compress:n}){const i=e=>{O(r,t,e)};e.push({resource:o,content:s,compress:n,finish:i})}function S(r,t,e){return"string"==typeof r?{type:"url",url:t}:{type:"json",jsonString:JSON.stringify(r.toJSON(e))}}function x(r){return null==r?null:"string"==typeof r?r:r.url}function O(r,t,e){"string"==typeof r[t]?r[t]=e.url:r[t].url=e.url}


/***/ }),

/***/ 2527:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47980);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function i(i){i?.writtenProperties&&i.writtenProperties.forEach((({target:i,propName:t,newOrigin:e})=>{(0,_multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isMultiOriginJSONMixin */ .H)(i)&&e&&i.originOf(t)!==e&&i.updateOrigin(t,e)}))}


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

/***/ 31753:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A6: () => (/* binding */ T),
/* harmony export */   Xd: () => (/* binding */ v),
/* harmony export */   Xr: () => (/* binding */ O),
/* harmony export */   hZ: () => (/* binding */ X),
/* harmony export */   lw: () => (/* binding */ x),
/* harmony export */   t2: () => (/* binding */ N),
/* harmony export */   x8: () => (/* binding */ b)
/* harmony export */ });
/* unused harmony exports add, calculateW, copy, dot, equals, fromMat3, identity, invert, len, length, lerp, mul, normalize, q, random, rotateX, rotateY, rotateZ, rotationTo, scale, setAxes, slerp, sqlerp, sqrLen, squaredLength, str */
/* harmony import */ var _factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79441);
/* harmony import */ var _factories_quatf64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19165);
/* harmony import */ var _factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19913);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78115);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80347);
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74772);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function I(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function b(t,n,s){s*=.5;const o=Math.sin(s);return t[0]=o*n[0],t[1]=o*n[1],t[2]=o*n[2],t[3]=Math.cos(s),t}function v(t,n){const s=2*Math.acos(n[3]),o=Math.sin(s/2);return o>(0,_common_js__WEBPACK_IMPORTED_MODULE_3__/* .getEpsilon */ .FD)()?(t[0]=n[0]/o,t[1]=n[1]/o,t[2]=n[2]/o):(t[0]=1,t[1]=0,t[2]=0),s}function x(t,n,s){const o=n[0],a=n[1],r=n[2],e=n[3],c=s[0],i=s[1],u=s[2],h=s[3];return t[0]=o*h+e*c+a*u-r*i,t[1]=a*h+e*i+r*c-o*u,t[2]=r*h+e*u+o*i-a*c,t[3]=e*h-o*c-a*i-r*u,t}function y(t,n,s){s*=.5;const o=n[0],a=n[1],r=n[2],e=n[3],c=Math.sin(s),i=Math.cos(s);return t[0]=o*i+e*c,t[1]=a*i+r*c,t[2]=r*i-a*c,t[3]=e*i-o*c,t}function A(t,n,s){s*=.5;const o=n[0],a=n[1],r=n[2],e=n[3],c=Math.sin(s),i=Math.cos(s);return t[0]=o*i-r*c,t[1]=a*i+e*c,t[2]=r*i+o*c,t[3]=e*i-a*c,t}function _(t,n,s){s*=.5;const o=n[0],a=n[1],r=n[2],e=n[3],c=Math.sin(s),i=Math.cos(s);return t[0]=o*i+a*c,t[1]=a*i-o*c,t[2]=r*i+e*c,t[3]=e*i-r*c,t}function k(t,n){const s=n[0],o=n[1],a=n[2];return t[0]=s,t[1]=o,t[2]=a,t[3]=Math.sqrt(Math.abs(1-s*s-o*o-a*a)),t}function z(t,n,s,o){const r=n[0],e=n[1],c=n[2],i=n[3];let u,h,M,f,l,m=s[0],p=s[1],q=s[2],j=s[3];return h=r*m+e*p+c*q+i*j,h<0&&(h=-h,m=-m,p=-p,q=-q,j=-j),1-h>(0,_common_js__WEBPACK_IMPORTED_MODULE_3__/* .getEpsilon */ .FD)()?(u=Math.acos(h),M=Math.sin(u),f=Math.sin((1-o)*u)/M,l=Math.sin(o*u)/M):(f=1-o,l=o),t[0]=f*r+l*m,t[1]=f*e+l*p,t[2]=f*c+l*q,t[3]=f*i+l*j,t}function E(t){const n=_common_js__WEBPACK_IMPORTED_MODULE_3__/* .RANDOM */ .Ov,s=n(),o=n(),a=n(),e=Math.sqrt(1-s),c=Math.sqrt(s);return t[0]=e*Math.sin(2*Math.PI*o),t[1]=e*Math.cos(2*Math.PI*o),t[2]=c*Math.sin(2*Math.PI*a),t[3]=c*Math.cos(2*Math.PI*a),t}function L(t,n){const s=n[0],o=n[1],a=n[2],r=n[3],e=s*s+o*o+a*a+r*r,c=e?1/e:0;return t[0]=-s*c,t[1]=-o*c,t[2]=-a*c,t[3]=r*c,t}function O(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t}function S(t,n){const s=n[0]+n[4]+n[8];let o;if(s>0)o=Math.sqrt(s+1),t[3]=.5*o,o=.5/o,t[0]=(n[5]-n[7])*o,t[1]=(n[6]-n[2])*o,t[2]=(n[1]-n[3])*o;else{let s=0;n[4]>n[0]&&(s=1),n[8]>n[3*s+s]&&(s=2);const a=(s+1)%3,r=(s+2)%3;o=Math.sqrt(n[3*s+s]-n[3*a+a]-n[3*r+r]+1),t[s]=.5*o,o=.5/o,t[3]=(n[3*a+r]-n[3*r+a])*o,t[a]=(n[3*a+s]+n[3*s+a])*o,t[r]=(n[3*r+s]+n[3*s+r])*o}return t}function T(t,n,s,o){const a=.5*Math.PI/180;n*=a,s*=a,o*=a;const r=Math.sin(n),e=Math.cos(n),c=Math.sin(s),i=Math.cos(s),u=Math.sin(o),h=Math.cos(o);return t[0]=r*i*h-e*c*u,t[1]=e*c*h+r*i*u,t[2]=e*i*u-r*c*h,t[3]=e*i*h+r*c*u,t}function H(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}const W=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.c,X=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.s,Y=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.g,Z=x,w=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.d,B=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.h,C=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.l,D=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.j,F=D,G=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.b,J=G,K=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.n,N=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.a,Q=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.e;function R(t,n,s){const o=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.e)(n,s);return o<-.999999?((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.h)(U,V,n),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.H)(U)<1e-6&&(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.h)(U,$,n),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.n)(U,U),b(t,U,Math.PI),t):o>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.h)(U,n,s),t[0]=U[0],t[1]=U[1],t[2]=U[2],t[3]=1+o,K(t,t))}const U=(0,_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)(),V=(0,_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__/* .fromValues */ .fA)(1,0,0),$=(0,_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__/* .fromValues */ .fA)(0,1,0);function tt(t,n,s,o,a,r){return z(nt,n,a,r),z(st,s,o,r),z(t,nt,st,2*r*(1-r)),t}const nt=(0,_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)(),st=(0,_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)();function ot(t,n,s,o){const a=at;return a[0]=s[0],a[3]=s[1],a[6]=s[2],a[1]=o[0],a[4]=o[1],a[7]=o[2],a[2]=-n[0],a[5]=-n[1],a[8]=-n[2],K(t,S(t,a))}const at=(0,_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .create */ .vt)(),rt=Object.freeze(Object.defineProperty({__proto__:null,add:Y,calculateW:k,conjugate:O,copy:W,dot:B,equals:Q,exactEquals:N,fromEuler:T,fromMat3:S,getAxisAngle:v,identity:I,invert:L,len:F,length:D,lerp:C,mul:Z,multiply:x,normalize:K,random:E,rotateX:y,rotateY:A,rotateZ:_,rotationTo:R,scale:w,set:X,setAxes:ot,setAxisAngle:b,slerp:z,sqlerp:tt,sqrLen:J,squaredLength:G,str:H},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 47980:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ i)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function i(i){return i&&"getAtOrigin"in i&&"originOf"in i}


/***/ }),

/***/ 21570:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3223);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1817);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22395);
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5262);
/* harmony import */ var _core_Warning_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97629);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80861);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25376);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26325);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48524);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var d;const p=(0,_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__/* .strict */ .O)()({orthometric:"gravity-related-height",gravity_related_height:"gravity-related-height",ellipsoidal:"ellipsoidal"}),u=p.jsonValues.slice();(0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .removeUnordered */ .Xy)(u,"orthometric");const g=(0,_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__/* .strict */ .O)()({meter:"meters",foot:"feet","us-foot":"us-feet","clarke-foot":"clarke-feet","clarke-yard":"clarke-yards","clarke-link":"clarke-links","sears-yard":"sears-yards","sears-foot":"sears-feet","sears-chain":"sears-chains","benoit-1895-b-chain":"benoit-1895-b-chains","indian-yard":"indian-yards","indian-1937-yard":"indian-1937-yards","gold-coast-foot":"gold-coast-feet","sears-1922-truncated-chain":"sears-1922-truncated-chains","50-kilometers":"50-kilometers","150-kilometers":"150-kilometers"});let m=d=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A{constructor(e){super(e),this.heightModel="gravity-related-height",this.heightUnit="meters",this.vertCRS=null}writeHeightModel(e,t,r){return p.write(e,t,r)}readHeightModel(e,t,r){const i=p.read(e);return i||(r?.messages&&r.messages.push(f(e,{context:r})),null)}readHeightUnit(e,t,r){const i=g.read(e);return i||(r?.messages&&r.messages.push(y(e,{context:r})),null)}readHeightUnitService(e,t,r){const i=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .unitFromRESTJSON */ .LA)(e)||g.read(e);return i||(r?.messages&&r.messages.push(y(e,{context:r})),null)}readVertCRS(e,t){return t.vertCRS||t.ellipsoid||t.geoid}clone(){return new d({heightModel:this.heightModel,heightUnit:this.heightUnit,vertCRS:this.vertCRS})}equals(e){return!!e&&(this===e||this.heightModel===e.heightModel&&this.heightUnit===e.heightUnit&&this.vertCRS===e.vertCRS)}static deriveUnitFromSR(e,t){const r=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .getVerticalUnitStringForSR */ .k1)(t);return new d({heightModel:e.heightModel,heightUnit:r??void 0,vertCRS:e.vertCRS})}write(e,t){return t={origin:"web-scene",...t},super.write(e,t)}static fromJSON(e){if(!e)return null;const t=new d;return t.read(e,{origin:"web-scene"}),t}};function y(e,t){return new _core_Warning_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A("height-unit:unsupported",`Height unit of value '${e}' is not supported`,t)}function f(e,t){return new _core_Warning_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A("height-model:unsupported",`Height model of value '${e}' is not supported`,t)}(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:p.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:u,default:"ellipsoidal",write:{isRequired:!0}}}}})],m.prototype,"heightModel",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__/* .writer */ .K)("web-scene","heightModel")],m.prototype,"writeHeightModel",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__/* .reader */ .w)(["web-scene","service"],"heightModel")],m.prototype,"readHeightModel",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:g.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:g.jsonValues,write:{writer:g.write,isRequired:!0}}}}})],m.prototype,"heightUnit",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__/* .reader */ .w)("web-scene","heightUnit")],m.prototype,"readHeightUnit",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__/* .reader */ .w)("service","heightUnit")],m.prototype,"readHeightUnitService",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:String,constructOnly:!0,json:{origins:{"web-scene":{write:!0}}}})],m.prototype,"vertCRS",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__/* .reader */ .w)("service","vertCRS",["vertCRS","ellipsoid","geoid"])],m.prototype,"readVertCRS",null),m=d=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__/* .subclass */ .$)("esri.geometry.HeightModelInfo")],m);


/***/ }),

/***/ 31197:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/PopupTemplate.js + 6 modules
var PopupTemplate = __webpack_require__(31352);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(54192);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(62991);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(33125);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js + 1 modules
var promiseUtils = __webpack_require__(49175);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(8636);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(25376);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(80347);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(19913);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(8000);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/Layer.js + 1 modules
var Layer = __webpack_require__(41247);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/APIKeyMixin.js
var APIKeyMixin = __webpack_require__(94763);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ArcGISService.js
var ArcGISService = __webpack_require__(30179);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/CustomParametersMixin.js
var CustomParametersMixin = __webpack_require__(27303);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(90296);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/PortalLayer.js
var PortalLayer = __webpack_require__(60368);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js
var ScaleRangeLayer = __webpack_require__(22111);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/SceneService.js + 1 modules
var SceneService = __webpack_require__(32655);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js
var arcgisLayerUrl = __webpack_require__(63457);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/commonProperties.js
var commonProperties = __webpack_require__(9014);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/Field.js
var Field = __webpack_require__(45352);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/FieldsIndex.js
var FieldsIndex = __webpack_require__(51387);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/TimeInfo.js
var TimeInfo = __webpack_require__(72523);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(14755);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Cyclical.js
var Cyclical = __webpack_require__(80575);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(22395);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/persistable.js
var persistable = __webpack_require__(18031);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/quat.js
var quat = __webpack_require__(31753);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/quatf64.js
var quatf64 = __webpack_require__(19165);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/common.js
var common = __webpack_require__(78115);
;// ./node_modules/@arcgis/core/layers/voxel/voxelPlaneUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const f=(0,vec3f64/* create */.vt)(),l=(0,quatf64/* create */.vt)(),u=(0,quatf64/* create */.vt)(),p=(0,quatf64/* create */.vt)(),h=(0,vec3f64/* fromValues */.fA)(0,0,1),j=(0,vec3f64/* fromValues */.fA)(0,1,0),x=(0,vec3f64/* fromValues */.fA)(1,0,0);function b(r){(0,vec32.c)(f,r),(0,vec32.n)(f,f);const a=Math.atan2(f[1],f[0]),s=(0,quat/* setAxisAngle */.x8)((0,quatf64/* create */.vt)(),h,-a);(0,vec32.v)(f,f,s);const c=-1*Math.atan2(f[2],f[0]);return[(0,common/* toDegree */.ct)(a)+270,(0,common/* toDegree */.ct)(c)+90]}function g(o,a){return (0,quat/* setAxisAngle */.x8)(u,h,(0,common/* toRadian */.DF)(o-270)),(0,quat/* setAxisAngle */.x8)(p,j,(0,common/* toRadian */.DF)(a-90)),(0,quat/* multiply */.lw)(l,u,p),(0,vec32.c)(f,x),(0,vec32.v)(f,f,l),(0,vec32.n)(f,f),[f[0],f[1],f[2]]}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(77380);
;// ./node_modules/@arcgis/core/layers/voxel/VoxelSlice.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let m=class extends(Clonable/* default */.A.ClonableMixin(JSONSupport/* default */.A)){constructor(o){super(o),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[o,r]=b(this.normal);return Cyclical/* cyclicalDegrees */.ie.normalize((0,ensureType/* ensureNumber */.GB)(o),0,!0)}set orientation(o){const r=g(o,this.tilt);this._set("normal",r),this._set("orientation",o)}get tilt(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[o,r]=b(this.normal);return Cyclical/* cyclicalDegrees */.ie.normalize((0,ensureType/* ensureNumber */.GB)(r),0,!0)}set tilt(o){const r=g(this.orientation,o);this._set("normal",r),this._set("tilt",o)}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],m.prototype,"enabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],m.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),(0,cast/* cast */.w)((o=>Cyclical/* cyclicalDegrees */.ie.normalize((0,ensureType/* ensureNumber */.GB)(o),0,!0)))],m.prototype,"orientation",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),(0,cast/* cast */.w)((o=>Cyclical/* cyclicalDegrees */.ie.normalize((0,ensureType/* ensureNumber */.GB)(o),0,!0)))],m.prototype,"tilt",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number],json:{write:{isRequired:!0}}})],m.prototype,"normal",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number],json:{write:{isRequired:!0}}})],m.prototype,"point",void 0),m=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelSlice")],m);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/persistableUrlUtils.js
var persistableUrlUtils = __webpack_require__(55714);
;// ./node_modules/@arcgis/core/layers/voxel/VoxelSection.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let d=class extends(Clonable/* default */.A.ClonableMixin(JSONSupport/* default */.A)){constructor(){super(...arguments),this.enabled=!0,this.href=null,this.id=null,this.label="",this.normal=null,this.point=null,this.sizeInPixel=null,this.slices=null,this.timeId=0,this.variableId=null}get orientation(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[e,r]=b(this.normal);return Cyclical/* cyclicalDegrees */.ie.normalize((0,ensureType/* ensureNumber */.GB)(e),0,!0)}get tilt(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[e,r]=b(this.normal);return Cyclical/* cyclicalDegrees */.ie.normalize((0,ensureType/* ensureNumber */.GB)(r),0,!0)}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!0,write:!0}})],d.prototype,"enabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{service:{read:persistableUrlUtils.r},"web-scene":{write:{isRequired:!0}}},write:!0}}),(0,persistable/* persistable */.P)({origins:["web-scene"],type:"resource",prefix:"sections",compress:!0})],d.prototype,"href",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:ensureType/* Integer */.jz,json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],d.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],d.prototype,"orientation",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],d.prototype,"tilt",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"normal",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"point",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[ensureType/* Integer */.jz],json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"sizeInPixel",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[m],json:{write:!0}})],d.prototype,"slices",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:ensureType/* Integer */.jz,json:{default:0,write:!0}})],d.prototype,"timeId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:ensureType/* Integer */.jz,json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"variableId",void 0),d=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelSection")],d);

;// ./node_modules/@arcgis/core/layers/voxel/VoxelSimpleShading.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let t=class extends JSONSupport/* default */.A{constructor(){super(...arguments),this.diffuseFactor=.5,this.specularFactor=.5}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],t.prototype,"diffuseFactor",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],t.prototype,"specularFactor",void 0),t=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelSimpleShading")],t);

;// ./node_modules/@arcgis/core/layers/voxel/VoxelFormat.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let s=class extends JSONSupport/* default */.A{constructor(){super(...arguments),this.continuity=null,this.hasNoData=!1,this.noData=0,this.offset=0,this.scale=1,this.type=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["discrete","continuous"],json:{write:!0}})],s.prototype,"continuity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],s.prototype,"hasNoData",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],s.prototype,"noData",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],s.prototype,"offset",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],s.prototype,"scale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"type",void 0),s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelFormat")],s);const VoxelFormat_p=s;

;// ./node_modules/@arcgis/core/layers/voxel/VoxelVariable.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let VoxelVariable_s=class extends JSONSupport/* default */.A{constructor(){super(...arguments),this.id=null,this.description="",this.name=null,this.originalFormat=null,this.renderingFormat=null,this.unit="",this.volumeId=0,this.type=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],VoxelVariable_s.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],VoxelVariable_s.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],VoxelVariable_s.prototype,"name",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:VoxelFormat_p,json:{write:!0}})],VoxelVariable_s.prototype,"originalFormat",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:VoxelFormat_p,json:{write:{enabled:!0,isRequired:!0}}})],VoxelVariable_s.prototype,"renderingFormat",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],VoxelVariable_s.prototype,"unit",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],VoxelVariable_s.prototype,"volumeId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["stc-hot-spot-results","stc-cluster-outlier-results","stc-estimated-bin","generic-nearest-interpolated"],json:{write:!0}})],VoxelVariable_s.prototype,"type",void 0),VoxelVariable_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelVariable")],VoxelVariable_s);const VoxelVariable_p=VoxelVariable_s;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(15565);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(93814);
;// ./node_modules/@arcgis/core/layers/voxel/VoxelIsosurface.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let VoxelIsosurface_l=class extends(Clonable/* default */.A.ClonableMixin(JSONSupport/* default */.A)){constructor(){super(...arguments),this.color=Color/* default */.A.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label="",this.colorLocked=!1}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Color/* default */.A,json:{type:[ensureType/* Integer */.jz],write:{enabled:!0,isRequired:!0}}})],VoxelIsosurface_l.prototype,"color",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],VoxelIsosurface_l.prototype,"value",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!0,write:!0}})],VoxelIsosurface_l.prototype,"enabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],VoxelIsosurface_l.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!1,write:!0}})],VoxelIsosurface_l.prototype,"colorLocked",void 0),VoxelIsosurface_l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelIsosurface")],VoxelIsosurface_l);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/collectionUtils.js
var collectionUtils = __webpack_require__(48);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(4506);
;// ./node_modules/@arcgis/core/layers/voxel/VoxelColorStop.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let c=class extends(Clonable/* default */.A.ClonableMixin(JSONSupport/* default */.A)){constructor(){super(...arguments),this.color=null,this.position=0}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Color/* default */.A,json:{type:[ensureType/* Integer */.jz],write:{enabled:!0,isRequired:!0}}})],c.prototype,"color",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"position",void 0),c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelColorStop")],c);const VoxelColorStop_l=c;

;// ./node_modules/@arcgis/core/layers/voxel/VoxelOpacityStop.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let VoxelOpacityStop_p=class extends(Clonable/* default */.A.ClonableMixin(JSONSupport/* default */.A)){constructor(){super(...arguments),this.opacity=1,this.position=0}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{name:"alpha",write:{enabled:!0,isRequired:!0}}})],VoxelOpacityStop_p.prototype,"opacity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],VoxelOpacityStop_p.prototype,"position",void 0),VoxelOpacityStop_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelOpacityStop")],VoxelOpacityStop_p);const i=VoxelOpacityStop_p;

;// ./node_modules/@arcgis/core/layers/voxel/VoxelRangeFilter.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let VoxelRangeFilter_p=class extends(Clonable/* default */.A.ClonableMixin(JSONSupport/* default */.A)){constructor(){super(...arguments),this.enabled=!1,this.range=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!1,write:!0}})],VoxelRangeFilter_p.prototype,"enabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number],json:{write:{isRequired:!0}}})],VoxelRangeFilter_p.prototype,"range",void 0),VoxelRangeFilter_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelRangeFilter")],VoxelRangeFilter_p);const a=VoxelRangeFilter_p;

;// ./node_modules/@arcgis/core/layers/voxel/VoxelTransferFunctionStyle.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var VoxelTransferFunctionStyle_u;!function(o){o[o.Color=1]="Color",o[o.Alpha=2]="Alpha",o[o.Both=3]="Both"}(VoxelTransferFunctionStyle_u||(VoxelTransferFunctionStyle_u={}));let y=class extends(Clonable/* default */.A.ClonableMixin(JSONSupport/* default */.A)){constructor(o){super(o),this.interpolation=null,this.stretchRange=null,this.rangeFilter=null,this._colorMapSize=256,this.colorStops=new(Collection/* default */.A.ofType(VoxelColorStop_l)),this.opacityStops=new(Collection/* default */.A.ofType(i))}set colorStops(o){this._set("colorStops",(0,collectionUtils/* referenceSetter */.V)(o,this._get("colorStops"),Collection/* default */.A.ofType(VoxelColorStop_l)))}set opacityStops(o){this._set("opacityStops",(0,collectionUtils/* referenceSetter */.V)(o,this._get("opacityStops"),Collection/* default */.A.ofType(i)))}getPreviousNext(o,t,r){let e=o;for(;--e>0&&t[e].type!==r&&t[e].type!==VoxelTransferFunctionStyle_u.Both;);let s=o;const i=t.length;for(;++s<i&&t[s].type!==r&&t[s].type!==VoxelTransferFunctionStyle_u.Both;);return[e,s]}get rasterizedTransferFunction(){const o=[];if(this.colorStops.length<2)return o;const r=[],e=[],s=1e-5;for(const t of this.colorStops){if(!t.color)return o;e.push({color:{r:t.color.r,g:t.color.g,b:t.color.b,a:Math.round(255*(1-t.color.a))},position:t.position,type:VoxelTransferFunctionStyle_u.Color})}if(0===this.opacityStops.length)for(const t of e)r.push({color:t.color,position:t.position});else{for(const t of this.opacityStops){const o=(0,mathUtils/* clamp */.qE)(t.position,0,1),r=Math.round(255*(0,mathUtils/* clamp */.qE)(1-t.opacity,0,1));let i=!1;for(const t of e)if(t.type===VoxelTransferFunctionStyle_u.Color&&Math.abs(t.position-o)<s){t.color.a=r,t.type=VoxelTransferFunctionStyle_u.Both,i=!0;break}i||e.push({color:{r:0,g:0,b:0,a:r},position:t.position,type:VoxelTransferFunctionStyle_u.Alpha})}e.sort(((o,t)=>o.position<t.position?-1:1));const o=e.length;for(let t=0;t<o;++t){const r=e[t];if(r.type!==VoxelTransferFunctionStyle_u.Both)if(r.type===VoxelTransferFunctionStyle_u.Color){const[s,i]=this.getPreviousNext(t,e,VoxelTransferFunctionStyle_u.Alpha);if(-1!==s&&i!==o){const o=(r.position-e[s].position)/(e[i].position-e[s].position);r.color.a=Math.round((0,mathUtils/* lerp */.Cc)(e[s].color.a,e[i].color.a,o))}else r.color.a=-1!==s?e[s].color.a:e[i].color.a}else{const[s,i]=this.getPreviousNext(t,e,VoxelTransferFunctionStyle_u.Color);if(-1!==s&&i!==o){const o=(r.position-e[s].position)/(e[i].position-e[s].position),t=e[s].color,p=e[i].color;S.forEach((e=>{r.color[e]=Math.round((0,mathUtils/* lerp */.Cc)(t[e],p[e],o))}))}else-1!==s?S.forEach((o=>{r.color[o]=e[s].color[o]})):S.forEach((o=>{r.color[o]=e[i].color[o]}))}}for(const t of e)r.push({color:t.color,position:t.position})}r[0].position=0,r[r.length-1].position=1;let i=0,l=1;for(let c=0;c<this._colorMapSize;++c){const e=c/this._colorMapSize;for(;e>r[l].position;)i=l++;const s=(e-r[i].position)/(r[l].position-r[i].position),a=r[i].color,h=r[l].color,f=new Color/* default */.A;S.forEach((o=>{f[o]=Math.round((0,mathUtils/* lerp */.Cc)(a[o],h[o],s))})),f.a=(0,mathUtils/* clamp */.qE)(1-(0,mathUtils/* lerp */.Cc)(a.a,h.a,s)/255,0,1),o.push(f)}return o}getColorForContinuousDataValue(o,t){const r=this.rasterizedTransferFunction;if(this.colorStops.length<2||!Array.isArray(this.stretchRange)||this.stretchRange.length<2||r.length<256)return null;let e=this.stretchRange[0],s=this.stretchRange[1];if(e>s){const o=e;e=s,s=o}o=(0,mathUtils/* clamp */.qE)(o,e,s);const i=r[Math.round((o-e)/(s-e)*(this._colorMapSize-1))].clone();return t||(i.a=1),i}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["linear","nearest"],json:{write:!0}})],y.prototype,"interpolation",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],y.prototype,"stretchRange",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(VoxelColorStop_l),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.colorStops&&this.colorStops.length>0}}}}})],y.prototype,"colorStops",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(i),json:{read:{source:"alphaStops"},write:{enabled:!0,target:"alphaStops",overridePolicy(){return{enabled:!!this.opacityStops&&this.opacityStops.length>0}}}}})],y.prototype,"opacityStops",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:a,json:{write:!0}})],y.prototype,"rangeFilter",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Color/* default */.A],clonable:!1,json:{read:!1}})],y.prototype,"rasterizedTransferFunction",null),y=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelTransferFunctionStyle")],y);const VoxelTransferFunctionStyle_g=y,S=["r","g","b"];

;// ./node_modules/@arcgis/core/layers/voxel/VoxelUniqueValue.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let VoxelUniqueValue_l=class extends(Clonable/* default */.A.ClonableMixin(JSONSupport/* default */.A)){constructor(){super(...arguments),this.color=Color/* default */.A.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label=""}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Color/* default */.A,json:{type:[ensureType/* Integer */.jz],write:{enabled:!0,isRequired:!0}}})],VoxelUniqueValue_l.prototype,"color",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:ensureType/* Integer */.jz,json:{write:{enabled:!0,isRequired:!0}}})],VoxelUniqueValue_l.prototype,"value",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!0,write:!0}})],VoxelUniqueValue_l.prototype,"enabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],VoxelUniqueValue_l.prototype,"label",void 0),VoxelUniqueValue_l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelUniqueValue")],VoxelUniqueValue_l);

;// ./node_modules/@arcgis/core/layers/voxel/VoxelVariableStyle.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var VoxelVariableStyle_p;let VoxelVariableStyle_c=VoxelVariableStyle_p=class extends JSONSupport/* default */.A{constructor(e){super(e),this.variableId=0,this.label="",this.transferFunction=null,this.uniqueValues=null,this.isosurfaces=null,this.uniqueValues=new(Collection/* default */.A.ofType(VoxelUniqueValue_l)),this.isosurfaces=new(Collection/* default */.A.ofType(VoxelIsosurface_l))}clone(){return new VoxelVariableStyle_p({variableId:this.variableId,label:this.label,transferFunction:(0,lang/* clone */.o8)(this.transferFunction),uniqueValues:(0,lang/* clone */.o8)(this.uniqueValues),isosurfaces:(0,lang/* clone */.o8)(this.isosurfaces)})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:ensureType/* Integer */.jz,json:{write:{enabled:!0,isRequired:!0}}})],VoxelVariableStyle_c.prototype,"variableId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],VoxelVariableStyle_c.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:VoxelTransferFunctionStyle_g,json:{write:{enabled:!0,overridePolicy(){return{enabled:!this.uniqueValues||this.uniqueValues.length<1}}}}})],VoxelVariableStyle_c.prototype,"transferFunction",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(VoxelUniqueValue_l),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.uniqueValues&&this.uniqueValues.length>0}}}}})],VoxelVariableStyle_c.prototype,"uniqueValues",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(VoxelIsosurface_l),json:{write:{enabled:!0,overridePolicy(){const e=!this.uniqueValues||this.uniqueValues.length<1,s=!!this.isosurfaces&&this.isosurfaces.length>0;return{enabled:e&&s}}}}})],VoxelVariableStyle_c.prototype,"isosurfaces",void 0),VoxelVariableStyle_c=VoxelVariableStyle_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelVariableStyle")],VoxelVariableStyle_c);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/timeUtils.js
var timeUtils = __webpack_require__(11895);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Point.js + 1 modules
var Point = __webpack_require__(30214);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(44153);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(67488);
;// ./node_modules/@arcgis/core/layers/voxel/NCTimeParser.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function r(r){const e=/^(days?|hours?|minutes?|seconds?|d|h|m|s) since (\d{1,4})-(\d{1,2})-(\d{1,2})[ |T](\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?[\s|Z]?(([+|\-|\s?])(\d{1,2}):(\d{1,2}))?$/i.exec(r);if(null==e)return{didParse:!1};const[,t,s,a,d,n,i,u,N,o,c,f,p]=e;let $="seconds";const P=t.charAt(0).toLowerCase();"d"===P?$="days":"h"===P?$="hours":"m"===P&&($="minutes");const m=parseInt(s,10);if(Number.isNaN(m))return{didParse:!1};const b=parseInt(a,10);if(Number.isNaN(b)||b<1||b>12)return{didParse:!1};const I=parseInt(d,10);if(Number.isNaN(I)||I<1||I>31)return{didParse:!1};if(2===b){const r=m%4==0&&(m%100!=0||m%400==0);if(r&&I>29||!r&&I>28)return{didParse:!1}}else if((4===b||6===b||9===b||11===b)&&I>30)return{didParse:!1};const S=parseInt(n,10);if(Number.isNaN(S)||S<0||S>23)return{didParse:!1};const l=parseInt(i,10);if(Number.isNaN(l)||l<0||l>59)return{didParse:!1};const h=parseInt(u,10);if(Number.isNaN(h)||h<0||h>59)return{didParse:!1};let w=1,x=0,y=0;if(c&&(w="-"===c?-1:1),f){if(x=parseInt(f,10),Number.isNaN(x)||x<0)return{didParse:!1};if(0!==x){const r=w*x;if(r<-12||r>14)return{didParse:!1}}}if(p&&(y=parseInt(p,10),Number.isNaN(y)||y<0||y>59))return{didParse:!1};const T=`${m}`.padStart(4,"0"),Z=`${b}`.padStart(2,"0"),A=`${I}`.padStart(2,"0"),C=`${S}`.padStart(2,"0"),D=`${l}`.padStart(2,"0"),L=`${h}`.padStart(2,"0");let g="Z";0===x&&0===y||(g=""+(w>0?"+":"-"),g+=`${x}`.padStart(2,"0"),g+=":",g+=`${y}`.padStart(2,"0"));return{didParse:!0,unit:$,reference:new Date(`${T}-${Z}-${A}T${C}:${D}:${L}.000${g}`)}}

;// ./node_modules/@arcgis/core/layers/voxel/VoxelIrregularSpacing.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let VoxelIrregularSpacing_t=class extends JSONSupport/* default */.A{constructor(){super(...arguments),this.values=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number],json:{write:!0}})],VoxelIrregularSpacing_t.prototype,"values",void 0),VoxelIrregularSpacing_t=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelIrregularSpacing")],VoxelIrregularSpacing_t);const VoxelIrregularSpacing_p=VoxelIrregularSpacing_t;

;// ./node_modules/@arcgis/core/layers/voxel/VoxelRegularSpacing.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let VoxelRegularSpacing_t=class extends JSONSupport/* default */.A{constructor(){super(...arguments),this.scale=1,this.offset=0}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],VoxelRegularSpacing_t.prototype,"scale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],VoxelRegularSpacing_t.prototype,"offset",void 0),VoxelRegularSpacing_t=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelRegularSpacing")],VoxelRegularSpacing_t);const VoxelRegularSpacing_p=VoxelRegularSpacing_t;

;// ./node_modules/@arcgis/core/layers/voxel/VoxelDimension.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let VoxelDimension_a=class extends JSONSupport/* default */.A{constructor(){super(...arguments),this.irregularSpacing=null,this.isPositiveUp=!0,this.isWrappedDateLine=!1,this.label=null,this.name=null,this.quantity=null,this.regularSpacing=null,this.size=0,this.unit=null}get isRegular(){return(null==this.irregularSpacing||void 0===this.irregularSpacing)&&null!==this.regularSpacing}getRange(){return this.isRegular?[this.regularSpacing.offset,this.regularSpacing.offset+this.regularSpacing.scale*(this.size-1)]:Array.isArray(this.irregularSpacing?.values)&&this.irregularSpacing.values.length>1?[this.irregularSpacing.values[0],this.irregularSpacing.values[this.irregularSpacing.values.length-1]]:[0,0]}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:VoxelIrregularSpacing_p,json:{write:!0}})],VoxelDimension_a.prototype,"irregularSpacing",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],VoxelDimension_a.prototype,"isPositiveUp",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],VoxelDimension_a.prototype,"isWrappedDateLine",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],VoxelDimension_a.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],VoxelDimension_a.prototype,"name",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],VoxelDimension_a.prototype,"quantity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:VoxelRegularSpacing_p,json:{write:!0}})],VoxelDimension_a.prototype,"regularSpacing",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],VoxelDimension_a.prototype,"size",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],VoxelDimension_a.prototype,"unit",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{read:!1}})],VoxelDimension_a.prototype,"isRegular",null),VoxelDimension_a=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelDimension")],VoxelDimension_a);const VoxelDimension_p=VoxelDimension_a;

;// ./node_modules/@arcgis/core/layers/voxel/VoxelVolume.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let VoxelVolume_f=class extends JSONSupport/* default */.A{constructor(e){super(e),this.id=0,this.dimensions=null,this.spatialReference=SpatialReference/* default */.A.WGS84}get zDimension(){if(!this.dimensions)return-1;if(!Array.isArray(this.dimensions))return-1;if(4!==this.dimensions.length)return-1;for(let e=2;e<4;++e)if(this.dimensions[e].size>0)return e;return-1}get isValid(){return!!this.dimensions&&(!!Array.isArray(this.dimensions)&&(4===this.dimensions.length&&(!(this.dimensions[0].size<1||this.dimensions[1].size<1)&&!(-1===this.zDimension||this.dimensions[this.zDimension].size<1))))}get originInLayerSpace3D(){if(!this.isValid||"xyt"===this.volumeType)return[0,0,0];const e=this.dimensions[0].getRange(),i=this.dimensions[1].getRange(),s=this.dimensions[2],r=s.isRegular?s.getRange():[0,s.size];return[e[0],i[0],r[0]]}get voxelSizeInLayerSpaceSigned(){if(!this.isValid||"xyt"===this.volumeType)return[0,0,0];const e=this.dimensions[0].getRange(),i=this.dimensions[1].getRange(),s=this.dimensions[2],r=s.isRegular?s.getRange():[0,s.size],t=[this.sizeInVoxels[0],this.sizeInVoxels[1],this.sizeInVoxels[2]];for(let n=0;n<3;++n)t[n]<2?t[n]=1:t[n]-=1;return s.isRegular&&!s.isPositiveUp&&(t[2]*=-1),[(e[1]-e[0])/t[0],(i[1]-i[0])/t[1],(r[1]-r[0])/t[2]]}get volumeType(){if(this.isValid){const e=this.dimensions[2].size>0;let i=this.dimensions[3].size>0;if(i){const e=this.dimensions[3];if(i="time"===e.quantity,i&&null!==e.unit){i=r(e.unit).didParse}}if(!e&&i)return"xyt";if(e&&i)return"xyzt"}return"xyz"}get sizeInVoxels(){if(!this.isValid)return[0,0,0];const e=this.zDimension;return[this.dimensions[0].size,this.dimensions[1].size,this.dimensions[e].size]}get timeStops(){if("xyzt"!==this.volumeType)return[];const e=this.dimensions[3],i=[],s=r(e.unit);if(s.didParse)if(e.isRegular){const t=e.regularSpacing?.offset??0,n=e.regularSpacing?.scale||1;for(let o=0;o<e.size;++o){const e=t+n*o;i.push((0,timeUtils/* offsetDateUTC */.mi)(s.reference,e,s.unit))}}else if(Array.isArray(e.irregularSpacing?.values)&&e.irregularSpacing.values.length>0)for(let t=0;t<e.irregularSpacing.values.length;++t){const n=e.irregularSpacing.values[t];i.push((0,timeUtils/* offsetDateUTC */.mi)(s.reference,n,s.unit))}return i}computeVoxelSpaceLocation(e){if(!this.isValid)return[0,0,0];if("xyt"===this.volumeType)return Logger/* default */.A.getLogger(this).error("computeVoxelSpacePosition cannot be used with XYT volumes."),[0,0,0];if(!(0,spatialReferenceUtils/* equals */.aI)(this.spatialReference,e.spatialReference))return Logger/* default */.A.getLogger(this).error("pos argument should have the same spatial reference as the VoxelLayer."),[0,0,0];const i=(0,vec3f64/* fromValues */.fA)(e.x,e.y,e.z??0);(0,vec32.d)(i,i,this.originInLayerSpace3D),(0,vec32.D)(i,i,this.voxelSizeInLayerSpaceSigned);const r=this.dimensions[this.zDimension];if(!r.isRegular&&Array.isArray(r.irregularSpacing?.values)&&r.irregularSpacing.values.length>1){const s=e.z??0,t=r.irregularSpacing.values,n=r.isPositiveUp?1:-1,o=t.reduce(((e,i)=>Math.abs(n*i-s)<Math.abs(n*e-s)?i:e));for(let e=0;e<t.length;++e)if(t[e]===o){i[2]=e;break}}return[i[0],i[1],i[2]]}computeLayerSpaceLocation(e){if(!this.isValid)return new Point/* default */.A({x:0,y:0,spatialReference:this.spatialReference});const i=(0,vec3f64/* fromArray */.ci)(e);if((0,vec32.C)(i,i,this.voxelSizeInLayerSpaceSigned),(0,vec32.f)(i,i,this.originInLayerSpace3D),"xyt"===this.volumeType)return new Point/* default */.A({x:i[0],y:i[1],spatialReference:this.spatialReference});const s=this.dimensions[this.zDimension];return s.isRegular||Array.isArray(s.irregularSpacing?.values)&&(e[2]<0?i[2]=s.irregularSpacing.values[0]:e[2]<s.irregularSpacing.values.length?i[2]=s.irregularSpacing.values[e[2]]:i[2]=s.irregularSpacing.values[s.irregularSpacing.values.length-1],s.isPositiveUp||(i[2]*=-1)),new Point/* default */.A({x:i[0],y:i[1],z:i[2],spatialReference:this.spatialReference})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],VoxelVolume_f.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[VoxelDimension_p],json:{write:{enabled:!0,isRequired:!0}}})],VoxelVolume_f.prototype,"dimensions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SpatialReference/* default */.A,json:{read:{enabled:!1}}})],VoxelVolume_f.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{read:!1}})],VoxelVolume_f.prototype,"zDimension",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Boolean],json:{read:!1}})],VoxelVolume_f.prototype,"isValid",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number],json:{read:!1}})],VoxelVolume_f.prototype,"originInLayerSpace3D",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number],json:{read:!1}})],VoxelVolume_f.prototype,"voxelSizeInLayerSpaceSigned",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["xyz","xyzt","xyt"],json:{read:{enabled:!1}}})],VoxelVolume_f.prototype,"volumeType",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number],json:{read:!1}})],VoxelVolume_f.prototype,"sizeInVoxels",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Date],json:{read:!1,write:!1}})],VoxelVolume_f.prototype,"timeStops",null),VoxelVolume_f=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelVolume")],VoxelVolume_f);

;// ./node_modules/@arcgis/core/layers/voxel/VoxelVolumeIndex.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var VoxelVolumeIndex_t;let VoxelVolumeIndex_s=VoxelVolumeIndex_t=class extends JSONSupport/* default */.A{constructor(){super(...arguments),this.apronWidth=1,this.brickSize=[32,32,32],this.maxLodLevel=0,this.nodeSize=[4,4,4]}isValid(){const e=new VoxelVolumeIndex_t;return e.apronWidth===this.apronWidth&&e.maxLodLevel===this.maxLodLevel&&(!!this.brickSize&&(!!this.nodeSize&&(!(!Array.isArray(this.brickSize)||!Array.isArray(this.nodeSize))&&(3===this.brickSize.length&&3===this.nodeSize.length&&(32===this.brickSize[0]&&32===this.brickSize[1]&&32===this.brickSize[2]&&(4===this.nodeSize[0]&&4===this.nodeSize[1]&&4===this.nodeSize[2]))))))}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],VoxelVolumeIndex_s.prototype,"apronWidth",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],VoxelVolumeIndex_s.prototype,"brickSize",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],VoxelVolumeIndex_s.prototype,"maxLodLevel",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],VoxelVolumeIndex_s.prototype,"nodeSize",void 0),VoxelVolumeIndex_s=VoxelVolumeIndex_t=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelVolumeIndex")],VoxelVolumeIndex_s);const VoxelVolumeIndex_d=VoxelVolumeIndex_s;

;// ./node_modules/@arcgis/core/layers/voxel/VoxelDynamicSection.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let VoxelDynamicSection_m=class extends(Clonable/* default */.A.ClonableMixin(JSONSupport/* default */.A)){constructor(o){super(o),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[o,t]=b(this.normal);return Cyclical/* cyclicalDegrees */.ie.normalize((0,ensureType/* ensureNumber */.GB)(o),0,!0)}set orientation(o){const t=g(o,this.tilt);this._set("normal",t),this._set("orientation",o)}get tilt(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[o,t]=b(this.normal);return Cyclical/* cyclicalDegrees */.ie.normalize((0,ensureType/* ensureNumber */.GB)(t),0,!0)}set tilt(o){const t=g(this.orientation,o);this._set("normal",t),this._set("tilt",o)}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!0,write:!0}})],VoxelDynamicSection_m.prototype,"enabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],VoxelDynamicSection_m.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),(0,cast/* cast */.w)((o=>Cyclical/* cyclicalDegrees */.ie.normalize((0,ensureType/* ensureNumber */.GB)(o),0,!0)))],VoxelDynamicSection_m.prototype,"orientation",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),(0,cast/* cast */.w)((o=>Cyclical/* cyclicalDegrees */.ie.normalize((0,ensureType/* ensureNumber */.GB)(o),0,!0)))],VoxelDynamicSection_m.prototype,"tilt",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number],json:{write:{isRequired:!0}}})],VoxelDynamicSection_m.prototype,"normal",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number],json:{write:{isRequired:!0}}})],VoxelDynamicSection_m.prototype,"point",void 0),VoxelDynamicSection_m=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelDynamicSection")],VoxelDynamicSection_m);

;// ./node_modules/@arcgis/core/layers/voxel/VoxelVolumeStyle.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var VoxelVolumeStyle_p;let VoxelVolumeStyle_m=VoxelVolumeStyle_p=class extends JSONSupport/* default */.A{constructor(e){super(e),this.volumeId=0,this.verticalExaggeration=1,this.exaggerationMode="scale-height",this.verticalOffset=0,this.slices=new(Collection/* default */.A.ofType(m)),this.dynamicSections=new(Collection/* default */.A.ofType(VoxelDynamicSection_m))}set slices(e){this._set("slices",(0,collectionUtils/* referenceSetter */.V)(e,this._get("slices"),Collection/* default */.A.ofType(m)))}set dynamicSections(e){this._set("dynamicSections",(0,collectionUtils/* referenceSetter */.V)(e,this._get("dynamicSections"),Collection/* default */.A.ofType(VoxelDynamicSection_m)))}clone(){return new VoxelVolumeStyle_p({volumeId:this.volumeId,verticalExaggeration:this.verticalExaggeration,exaggerationMode:this.exaggerationMode,verticalOffset:this.verticalOffset,slices:(0,lang/* clone */.o8)(this.slices),dynamicSections:(0,lang/* clone */.o8)(this.dynamicSections)})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:ensureType/* Integer */.jz,json:{write:{enabled:!0,isRequired:!0}}})],VoxelVolumeStyle_m.prototype,"volumeId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{default:1,write:!0}})],VoxelVolumeStyle_m.prototype,"verticalExaggeration",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["scale-position","scale-height"],json:{default:"scale-height",write:!0}})],VoxelVolumeStyle_m.prototype,"exaggerationMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{default:0,write:!0}})],VoxelVolumeStyle_m.prototype,"verticalOffset",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(m),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.slices&&this.slices.length>0}}}}})],VoxelVolumeStyle_m.prototype,"slices",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(VoxelDynamicSection_m),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.dynamicSections&&this.dynamicSections.length>0}}}}})],VoxelVolumeStyle_m.prototype,"dynamicSections",null),VoxelVolumeStyle_m=VoxelVolumeStyle_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.voxel.VoxelVolumeStyle")],VoxelVolumeStyle_m);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/support/popupUtils.js
var popupUtils = __webpack_require__(95610);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/TimeExtent.js
var TimeExtent = __webpack_require__(72991);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/TimeInterval.js
var TimeInterval = __webpack_require__(38946);
;// ./node_modules/@arcgis/core/layers/VoxelLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let z=class extends((0,SceneService/* SceneService */.w6)((0,ArcGISService/* ArcGISService */.b)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.A)((0,ScaleRangeLayer/* ScaleRangeLayer */.j)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)((0,CustomParametersMixin/* CustomParametersMixin */.d)((0,APIKeyMixin/* APIKeyMixin */.p)(Layer/* default */.A))))))))){constructor(e){super(e),this.serviceRoot="",this.operationalLayerType="Voxel",this.legendEnabled=!0,this.title=null,this.sections=null,this.currentVariableId=0,this.volumeStyles=null,this.renderMode="volume",this.variableStyles=null,this.enableSlices=!0,this.enableSections=!0,this.enableDynamicSections=!0,this.enableIsosurfaces=!0,this.shading=new t,this.opacity=1,this.variables=new Collection/* default */.A,this.volumes=new Collection/* default */.A,this.index=null,this.minScale=0,this.maxScale=0,this.type="voxel",this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.fullExtent=null,this.popupEnabled=!1,this.popupTemplate=null,this.test=null,this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0,this.volumeStyles=new(Collection/* default */.A.ofType(VoxelVolumeStyle_m)),this.variableStyles=new(Collection/* default */.A.ofType(VoxelVariableStyle_c)),this.sections=new(Collection/* default */.A.ofType(d))}normalizeCtorArgs(e){return e?.constantUpscaling&&(this.test={constantUpscaling:!0},delete e.constantUpscaling),e}set url(e){this._set("url",(0,arcgisLayerUrl/* sanitizeUrl */.Jf)(e,Logger/* default */.A.getLogger(this)))}load(e){const t=null!=e?e.signal:null,i=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(promiseUtils/* throwIfAbortError */.QP).then((()=>this._fetchService(t))).then((()=>this.serviceRoot=this.url));return this.addResolvingPromise(i),Promise.resolve(this)}read(e,t){super.read(e,t),"service"===t?.origin&&this.version.major<=3&&this.version.minor<=0&&!this.getAtOrigin("popupTemplate","service")&&this.setAtOrigin("popupTemplate",this.createPopupTemplate(),"service");for(const i of this.volumes)i.spatialReference=this.spatialReference}readVersion(e,t){return super.parseVersionString(e)}validateLayer(e){if(e.layerType&&e.layerType!==this.operationalLayerType)throw new Error/* default */.A("voxel-layer:layer-type-not-supported","VoxelLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor)||this.version.major<3)throw new Error/* default */.A("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"});if(this.version.major>3)throw new Error/* default */.A("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"})}readFullExtent(e,t,i){if(null!=e&&"object"==typeof e){const o=Extent/* default */.A.fromJSON(e,i);if(0===o.zmin&&0===o.zmax&&Array.isArray(t.volumes)){const e=VoxelVolume_f.fromJSON(t.volumes[0]);if(e.isValid&&"xyt"!==e.volumeType){const t=e.dimensions[2];if(t.isRegular){let e=t.regularSpacing.offset,i=t.regularSpacing.offset+t.regularSpacing.scale*(t.size-1);if(e>i){const t=e;e=i,i=t}o.zmin=e,o.zmax=i}}}return o}return null}get fields(){const e=[new Field/* default */.A({name:"Voxel.Position",alias:"Voxel Position",domain:null,editable:!1,length:128,type:"string"}),new Field/* default */.A({name:"Voxel.CurrentVariable",alias:"Current Variable",domain:null,editable:!1,length:128,type:"string"})];for(const i of this.variables){const t=new Field/* default */.A({name:i.name,alias:i.description,domain:null,editable:!1,length:128,type:"discrete"===i.renderingFormat.continuity?"string":"double"});e.push(t)}const t=this.getVolume(null);if(null!=t){if("xyzt"===t.volumeType||"xyt"===t.volumeType){const t=new Field/* default */.A({name:"Voxel.LocalTime",alias:"Local Time",domain:null,editable:!1,length:256,type:"date"});e.push(t);const i=new Field/* default */.A({name:"Voxel.SourceTime",alias:"Source Time",domain:null,editable:!1,length:256,type:"string"});e.push(i)}if("xyt"!==t.volumeType){const t=new Field/* default */.A({name:"Voxel.Depth",alias:"Depth",domain:null,editable:!1,length:128,type:"double"});e.push(t)}}return e}get fieldsIndex(){return this.loaded?new FieldsIndex/* default */.A(this.fields):null}getField(e){return this.fieldsIndex?.get(e)}get defaultPopupTemplate(){return this.createPopupTemplate()}createPopupTemplate(e){const t=this.fields;return (0,popupUtils/* createPopupTemplate */.tn)({fields:t,title:"{Voxel.Position}"},e)}getConfiguration(){const e={layerType:this.operationalLayerType,version:this.version.versionString,name:this.title,spatialReference:this.spatialReference,fullExtent:this.fullExtent,volumes:this.volumes.toJSON(),variables:this.variables.toJSON(),index:this.index?.toJSON(),sections:this.getSections(),style:{volumeStyles:this.getVolumeStyles(),currentVariableId:this.currentVariableId,renderMode:this.renderMode,variableStyles:this.getVariableStyles(),enableSections:this.enableSections,enableDynamicSections:this.enableDynamicSections,enableIsosurfaces:this.enableIsosurfaces,enableSlices:this.enableSlices,shading:this.shading}};return e.index&&this.index?.isValid()?JSON.stringify(e):""}getVariableStyle(e){let t=-1;t=null!=e?e:this.currentVariableId;if(!this.variableStyles||-1===t)return null;const i=this.variableStyles.findIndex((e=>e.variableId===t));return i<0?null:this.variableStyles.at(i)}getVariable(e){let t=-1;if(t=null!=e?e:this.currentVariableId,!this.variables||-1===t)return null;const i=this.variables.findIndex((e=>e.id===t));return i<0?null:this.variables.at(i)}getVolume(e){const t=this.getVariable(e);return null!=t?this.volumes.find((({id:e})=>e===t.volumeId)):null}get timeInfo(){const e=this.getVolume(null);if("xyzt"!==e?.volumeType)return null;const t=e.timeStops;if(!t?.length)return null;const i=new TimeExtent.T({start:t[0],end:t.at(-1)});return new TimeInfo/* default */.A({fullTimeExtent:i,stops:t})}getVolumeStyle(e){const t=this.getVariable(e);return null!=t?this.volumeStyles.find((({volumeId:e})=>e===t.volumeId)):null}getColorForContinuousDataValue(e,t,i){const o=this.getVariable(e);if(null==o||"continuous"!==o.renderingFormat?.continuity)return null;if(!this.variableStyles)return null;const r=this.variableStyles.findIndex((t=>t.variableId===e));if(r<0)return null;const s=this.variableStyles.at(r);return s?.transferFunction?s.transferFunction.getColorForContinuousDataValue(t,i):null}getSections(){const e=[];for(const t of this.sections)e.push(new d({enabled:t.enabled,href:t.href,id:t.id,label:t.label,normal:t.normal,point:t.point,sizeInPixel:t.sizeInPixel,slices:t.slices,timeId:t.timeId,variableId:t.variableId}));return e}getVariableStyles(){const e=[];for(const t of this.variableStyles){const i=this._getVariable(t);if(null!=i){const o=t.clone();o.isosurfaces.length>4&&(o.isosurfaces=o.isosurfaces.slice(0,3),Logger/* default */.A.getLogger(this).error("A maximum of 4 isosurfaces are supported for Voxel Layers."));for(const e of o.isosurfaces)if(!e.colorLocked){const t=this.getColorForContinuousDataValue(o.variableId,e.value,!1);null==t||t.equals(e.color)||(e.color=t)}if("continuous"===i.renderingFormat.continuity)(null===o.transferFunction||o.transferFunction.colorStops.length<2)&&Logger/* default */.A.getLogger(this).error(`VoxelVariableStyle for variable ${i.id} is invalid. At least 2 color stops are required in the transferFunction for continuous Voxel Layer variables.`),null!==o.transferFunction&&(Array.isArray(o.transferFunction.stretchRange)&&2===o.transferFunction.stretchRange.length||(Logger/* default */.A.getLogger(this).error(`VoxelVariableStyle for variable ${i.id} is invalid. The stretchRange of the transferFunction for continuous Voxel Layer variables must be of the form [minimumDataValue, maximumDataValue].`),o.transferFunction.stretchRange=[0,1],o.transferFunction.colorStops.removeAll()));else if("discrete"===i.renderingFormat.continuity)if(0===t.uniqueValues.length)Logger/* default */.A.getLogger(this).error(`VoxelVariableStyle for variable ${i.id} is invalid. Unique values are required for discrete Voxel Layer variables.`);else for(const e of t.uniqueValues)null!==e.label&&void 0!==e.label||null===e.value||void 0===e.value||(e.label=e.value.toString());e.push(o)}else Logger/* default */.A.getLogger(this).error(`VoxelVariable ID=${t.variableId} doesn't exist, VoxelVariableStyle for this VoxelVariable will be ignored.`)}return e}getVolumeStyles(){const e=[];for(const t of this.volumeStyles){const i=this._getVolumeFromVolumeId(t.volumeId);if(null!=i){const o=t.clone();for(const e of o.slices)this._isPlaneValid(e,[0,1,i.zDimension],i.dimensions)||(e.enabled=!1,e.label="invalid");for(const e of o.dynamicSections)this._isPlaneValid(e,[0,1,i.zDimension],i.dimensions)||(e.enabled=!1,e.label="invalid");e.push(o)}else Logger/* default */.A.getLogger(this).error(`VoxelVolume ID=${t.volumeId} doesn't exist, VoxelVolumeStyle for this VoxelVolume will be ignored.`)}return e}_getVariable(e){const t=e.variableId;for(const i of this.variables)if(i.id===t)return i;return null}_getVolumeFromVolumeId(e){for(const t of this.volumes)if(t.id===e)return t;return null}_isPlaneValid(e,t,i){if(!e.point)return!1;if(!Array.isArray(e.point)||3!==e.point.length)return!1;if(!e.normal)return!1;if(!Array.isArray(e.normal)||3!==e.normal.length)return!1;const o=(0,vec3f64/* fromValues */.fA)(e.normal[0],e.normal[1],e.normal[2]);(0,vec32.n)(o,o);const r=1e-6;return!(Math.abs(o[0])+Math.abs(o[1])+Math.abs(o[2])<r)&&(e.normal[0]=o[0],e.normal[1]=o[1],e.normal[2]=o[2],!0)}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["Voxel"]})],z.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* legendEnabled */.fV)],z.prototype,"legendEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],z.prototype,"title",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* url */.OZ)],z.prototype,"url",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(d),json:{origins:{"web-scene":{name:"layerDefinition.sections",write:!0}}}})],z.prototype,"sections",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:ensureType/* Integer */.jz,json:{origins:{"web-scene":{name:"layerDefinition.style.currentVariableId",write:{enabled:!0,isRequired:!0,ignoreOrigin:!0}},service:{name:"style.currentVariableId"}}}})],z.prototype,"currentVariableId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(VoxelVolumeStyle_m),json:{origins:{"web-scene":{name:"layerDefinition.style.volumeStyles",write:!0},service:{name:"style.volumeStyles"}}}})],z.prototype,"volumeStyles",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["volume","surfaces"],json:{origins:{"web-scene":{name:"layerDefinition.style.renderMode",write:!0},service:{name:"style.renderMode"}}}})],z.prototype,"renderMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(VoxelVariableStyle_c),json:{origins:{"web-scene":{name:"layerDefinition.style.variableStyles",write:!0},service:{name:"style.variableStyles"}}}})],z.prototype,"variableStyles",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSlices",write:!0},service:{name:"style.enableSlices"}}}})],z.prototype,"enableSlices",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSections",write:!0},service:{name:"style.enableSections"}}}})],z.prototype,"enableSections",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableDynamicSections",write:!0},service:{name:"style.enableDynamicSections"}}}})],z.prototype,"enableDynamicSections",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableIsosurfaces",write:!0},service:{name:"style.enableIsosurfaces"}}}})],z.prototype,"enableIsosurfaces",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:t,json:{origins:{"web-scene":{name:"layerDefinition.style.shading",write:!0},service:{name:"style.shading"}}}})],z.prototype,"shading",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide"]})],z.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,range:{min:0,max:1},nonNullable:!0,json:{read:!1,write:!1,origins:{"web-scene":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],z.prototype,"opacity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(VoxelVariable_p)})],z.prototype,"variables",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(VoxelVolume_f)})],z.prototype,"volumes",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:VoxelVolumeIndex_d})],z.prototype,"index",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:!1,write:!1}}}})],z.prototype,"minScale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:!1,write:!1}}}})],z.prototype,"maxScale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1},readOnly:!0})],z.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{name:"serviceVersion"}})],z.prototype,"version",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","version")],z.prototype,"readVersion",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Extent/* default */.A})],z.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","fullExtent",["fullExtent"])],z.prototype,"readFullExtent",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,clonable:!1,json:{read:!1}})],z.prototype,"fields",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],z.prototype,"fieldsIndex",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{name:"disablePopup",read:{reader:(e,t)=>!t.disablePopup},write:{enabled:!0,ignoreOrigin:!0,writer(e,t,i){t[i]=!e}},origins:{"portal-item":{default:!0},"web-scene":{default:!0}}}})],z.prototype,"popupEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:PopupTemplate/* default */.A,json:{name:"popupInfo",write:!0}})],z.prototype,"popupTemplate",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],z.prototype,"defaultPopupTemplate",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:TimeInfo/* default */.A,readOnly:!0,json:{read:!1}})],z.prototype,"timeInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:TimeExtent.T,json:{read:!1}})],z.prototype,"timeExtent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:TimeInterval.T,json:{read:!1}})],z.prototype,"timeOffset",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,nonNullable:!0,json:{origins:{"web-scene":{name:"timeAnimation",write:!0},service:{read:!1}}}})],z.prototype,"useViewTime",void 0),z=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.VoxelLayer")],z);const _=z;


/***/ }),

/***/ 94763:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80861);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26325);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function s(e){return"portalItem"in e}const i=i=>{let o=class extends i{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):s(this)?this.portalItem?.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:String})],o.prototype,"apiKey",null),o=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.layers.mixins.APIKeyMixin")],o),o};


/***/ }),

/***/ 30179:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80861);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6273);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26325);
/* harmony import */ var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63457);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const l=l=>{let p=class extends l{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const t=(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_6__/* .parse */ .qg)(this.url);if(t?.title)return t.title}return this._get("title")||""}set title(t){this._set("title",t)}set url(t){this._set("url",(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_6__/* .sanitizeUrl */ .Jf)(t,_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getLogger(this)))}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],p.prototype,"title",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String})],p.prototype,"url",null),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.layers.mixins.ArcGISService")],p),p};


/***/ }),

/***/ 32655:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Xh: () => (/* binding */ V),
  w6: () => (/* binding */ R)
});

// UNUSED EXPORTS: sceneServiceItemType

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(38116);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(62991);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js + 1 modules
var promiseUtils = __webpack_require__(49175);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(19759);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(25376);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(48524);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/originUtils.js
var originUtils = __webpack_require__(2527);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(8000);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/HeightModelInfo.js
var HeightModelInfo = __webpack_require__(21570);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(44153);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js
var arcgisLayerUrl = __webpack_require__(63457);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/commonProperties.js
var commonProperties = __webpack_require__(9014);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/I3SIndexInfo.js
var I3SIndexInfo = __webpack_require__(72197);
;// ./node_modules/@arcgis/core/layers/support/schemaValidatorLoader.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let n=null;function t(t){n=t}function u(){return n}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/portal/Portal.js + 2 modules
var Portal = __webpack_require__(62304);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/portal/PortalItem.js + 2 modules
var PortalItem = __webpack_require__(11969);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/portal/support/jsonContext.js
var jsonContext = __webpack_require__(10069);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/webdoc/support/resourceUtils.js
var resourceUtils = __webpack_require__(20267);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/webdoc/support/saveUtils.js
var saveUtils = __webpack_require__(49972);
;// ./node_modules/@arcgis/core/layers/mixins/SceneService.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const R=R=>{let C=class extends R{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=(0,promiseUtils/* debounce */.sg)((async(e,t,r)=>{switch(e){case V.SAVE:return this._save(t);case V.SAVE_AS:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return U(t)}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e){const o=null==e.spatialReference?{...e,spatialReference:U(t)}:e;return Extent/* default */.A.fromJSON(o,r)}const o=t.store,i=U(t);return null==i||null==o?.extent||!Array.isArray(o.extent)||o.extent.some((e=>e<L))?null:new Extent/* default */.A({xmin:o.extent[0],ymin:o.extent[1],xmax:o.extent[2],ymax:o.extent[3],spatialReference:i})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}readVersion(e,t){const r=t.store,o=null!=r.version?r.version.toString():"";return this.parseVersionString(o)}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem?.title;if("item-title"===this.sublayerTitleMode)return this.url?(0,arcgisLayerUrl/* titleFromUrlAndName */.yG)(this.url,t.name):t.name;let o=t.name;if(!o&&this.url){const e=(0,arcgisLayerUrl/* parse */.qg)(this.url);null!=e&&(o=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(o=r+" - "+o),(0,arcgisLayerUrl/* cleanTitle */.cr)(o)}set url(e){if(null==e)return void this._set("url",e);const t=(0,arcgisLayerUrl/* sanitizeUrlWithLayerId */.HZ)({layer:this,url:e,nonStandardUrlAllowed:!1,logger:Logger/* default */.A.getLogger(this)});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,o){(0,arcgisLayerUrl/* writeUrlWithLayerId */.LS)(this,e,"layers",t,o)}get parsedUrl(){const e=this._get("url"),t=(0,urlUtils/* urlToObject */.An)(e);return t&&null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=(0,I3SIndexInfo/* fetchIndexInfo */.F)(this.parsedUrl?.path??"",this.rootNode,e,this.customParameters,this.apiKey,Logger/* default */.A.getLogger(this),t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===e?.type){const t=e.rootIndex%e.pageSize,o=e.rootPage?.nodes?.[t];if(null==o?.obb?.center||null==o.obb.halfSize)throw new Error/* default */.A("sceneservice:invalid-node-page","Invalid node page.");if(o.obb.center[0]<L||null==this.fullExtent||this.fullExtent.hasZ)return;const i=o.obb.halfSize,s=o.obb.center[2],a=Math.sqrt(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]);this.fullExtent.zmin=s-a,this.fullExtent.zmax=s+a}else if("node"===e?.type){const t=e.rootNode?.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<L)return;const r=t[2],o=t[3],{fullExtent:i}=this;i&&(i.zmin=r-o,i.zmax=r+o)}}async _fetchService(e){if(null==this.url)throw new Error/* default */.A("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const r=await (0,request/* default */.A)(this.url??"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});if(r.data&&Array.isArray(r.data.layers)&&r.data.layers.length>0)return r.data.layers[0].id}async _fetchServiceLayer(e){const r=await (0,request/* default */.A)(this.parsedUrl?.path??"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});r.ssl&&this.url&&(this.url=this.url.replace(/^http:/i,"https:"));let o=!1;if(r.data.layerType&&"Voxel"===r.data.layerType&&(o=!0),o)return this._fetchVoxelServiceLayer();const i=r.data;this.read(i,this._getServiceContext()),this.validateLayer(i)}async _fetchVoxelServiceLayer(e){const r=(await (0,request/* default */.A)(this.parsedUrl?.path+"/layer",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,this._getServiceContext()),this.validateLayer(r)}_getServiceContext(){return{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}async _saveAs(e,t){const o={...K,...t};let i=PortalItem["default"].from(e);if(!i)throw new Error/* default */.A("sceneservice:portal-item-required","_saveAs() requires a portal item to save to");i.id&&(i=i.clone(),i.id=null);const s=i.portal||Portal/* default */.A.getDefault();await this._ensureLoadBeforeSave(),i.type=P,i.portal=s;const a=(0,jsonContext/* createForItemWrite */.m)(i,"portal-item",!0),n={layers:[this.write({},a)]};return await Promise.all(a.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(n,a,o),this.url&&(i.url=this.url),i.title||(i.title=this.title),T(i,o,O.newItem),await s.signIn(),await s.user.addItem({item:i,folder:o?.folder,data:n}),await (0,resourceUtils/* saveResources */.r)(this.resourceReferences,a),this.portalItem=i,(0,originUtils/* updateOrigins */.v)(a),a.portalItem=i,i}async _save(e){const t={...K,...e};if(!this.portalItem)throw new Error/* default */.A("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if(this.portalItem.type!==P)throw new Error/* default */.A("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${P}"`);await this._ensureLoadBeforeSave();const o=(0,jsonContext/* createForItemWrite */.m)(this.portalItem,"portal-item",!0),i={layers:[this.write({},o)]};return await Promise.all(o.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(i,o,t),this.url&&(this.portalItem.url=this.url),this.portalItem.title||(this.portalItem.title=this.title),T(this.portalItem,t,O.existingItem),await (0,resourceUtils/* updateItemWithResources */.S)(this.portalItem,i,this.resourceReferences,o),(0,originUtils/* updateOrigins */.v)(o),this.portalItem}async _validateAgainstJSONSchema(e,t,i){const s=i?.validationOptions;(0,saveUtils/* evaluateWriteErrors */.ci)(t,{errorName:"sceneservice:save"},{ignoreUnsupported:s?.ignoreUnsupported,supplementalUnsupportedErrors:["scenemodification:unsupported"]});const a=s?.enabled,n=u();if(a&&n){const t=(await n()).validate(e,i.portalItemLayerType);if(!t.length)return;const a=`Layer item did not validate:\n${t.join("\n")}`;if(Logger/* default */.A.getLogger(this).error(`_validateAgainstJSONSchema(): ${a}`),"throw"===s.failPolicy){const e=t.map((e=>new Error/* default */.A("sceneservice:schema-validation",e)));throw new Error/* default */.A("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{validationErrors:e})}}}};return (0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties.id)],C.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SpatialReference/* default */.A})],C.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],C.prototype,"readSpatialReference",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Extent/* default */.A})],C.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],C.prototype,"readFullExtent",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:HeightModelInfo/* default */.A})],C.prototype,"heightModelInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],C.prototype,"minScale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],C.prototype,"maxScale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],C.prototype,"version",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("version",["store.version"])],C.prototype,"readVersion",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:{source:"copyrightText"}}})],C.prototype,"copyright",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:!1}})],C.prototype,"sublayerTitleMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],C.prototype,"title",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("portal-item","title")],C.prototype,"readTitlePortalItem",null),(0,tslib_es6._)([(0,reader/* reader */.w)("service","title",["name"])],C.prototype,"readTitleService",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],C.prototype,"layerId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* url */.OZ)],C.prototype,"url",null),(0,tslib_es6._)([(0,writer/* writer */.K)("url")],C.prototype,"writeUrl",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],C.prototype,"parsedUrl",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],C.prototype,"store",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],C.prototype,"rootNode",void 0),C=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.mixins.SceneService")],C),C},L=-1e38;function U(e){if(null!=e.spatialReference)return SpatialReference/* default */.A.fromJSON(e.spatialReference);const t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.slice(r.lastIndexOf("/")+1),10);return null!=o?new SpatialReference/* default */.A(o):null}function T(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const o=t.getTypeKeywords();for(const i of o)e.typeKeywords.push(i);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),r===O.newItem&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}var O;!function(e){e[e.existingItem=0]="existingItem",e[e.newItem=1]="newItem"}(O||(O={}));const P="Scene Service",K={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var V;!function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS"}(V||(V={}));


/***/ }),

/***/ 72197:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38116);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62991);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function r(r,n,t,s,a,i,l){let d=null;if(null!=t){const o=`${r}/nodepages/`,n=o+Math.floor(t.rootIndex/t.nodesPerPage);try{return{type:"page",rootPage:(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(n,{query:{f:"json",...s,token:a},responseType:"json",signal:l})).data,rootIndex:t.rootIndex,pageSize:t.nodesPerPage,lodMetric:t.lodSelectionMetricType,urlPrefix:o}}catch(g){null!=i&&i.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",n,g),d=g}}if(!n)return null;const p=n?.split("/").pop(),c=`${r}/nodes/`,u=c+p;try{return{type:"node",rootNode:(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(u,{query:{f:"json",...s,token:a},responseType:"json",signal:l})).data,urlPrefix:c}}catch(g){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("sceneservice:root-node-missing","Root node missing.",{pageError:d,nodeError:g,url:u})}}


/***/ }),

/***/ 10069:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ o),
/* harmony export */   v: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19759);
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62304);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(t,r){return{...l(t,r),readResourcePaths:[]}}function o(r,e,o){const i=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .urlToObject */ .An)(r.itemUrl);return{...l(r,e),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:i?{rootPath:i.path,writtenUrls:[]}:null,resources:o?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function l(e,o){return{origin:o,url:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .urlToObject */ .An)(e.itemUrl),portal:e.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getDefault(),portalItem:e}}


/***/ }),

/***/ 80925:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19759);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function p(i){return o[t(i)]||e}function t(i){return"json"===i.type?"application/json":"blob"===i.type?i.blob.type:n(i.url)}function n(p){const t=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getPathExtension */ .Zo)(p);return g[t]||a}const o={},a="text/plain",e=o[a],g={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const l in g)o[g[l]]=l;


/***/ }),

/***/ 90081:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addOrUpdateResources: () => (/* binding */ a),
/* harmony export */   bg: () => (/* binding */ m),
/* harmony export */   cL: () => (/* binding */ p),
/* harmony export */   fetchResources: () => (/* binding */ o),
/* harmony export */   removeAllResources: () => (/* binding */ c),
/* harmony export */   removeResource: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony exports getSiblingOfSameType, splitPrefixFileNameAndExtension */
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38116);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62991);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19759);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function o(e,t={},s){await e.load(s);const o=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(e.itemUrl,"resources"),{start:a=1,num:n=10,sortOrder:c="asc",sortField:l="resource"}=t,i={query:{start:a,num:n,sortOrder:c,sortField:l,token:e.apiKey},signal:s?.signal},u=await e.portal.request(o,i);return{total:u.total,nextStart:u.nextStart,resources:u.resources.map((({created:t,size:r,resource:s})=>({created:new Date(t),size:r,resource:e.resourceFromPath(s)})))}}async function a(e,s,o,a){const n=new Map;for(const{resource:r,content:i,compress:u,access:p}of s){if(!r.hasPath())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(`portal-item-resource-${o}:invalid-path`,"Resource does not have a valid path");const[e,s]=l(r.path),a=`${e}/${u??""}/${p??""}`;n.has(a)||n.set(a,{prefix:e,compress:u,access:p,files:[]});n.get(a).files.push({fileName:s,content:i})}await e.load(a);const c=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(e.userItemUrl,"add"===o?"addResources":"updateResources");for(const{prefix:t,compress:r,access:l,files:i}of n.values()){const s=25;for(let o=0;o<i.length;o+=s){const n=i.slice(o,o+s),u=new FormData;t&&"."!==t&&u.append("resourcesPrefix",t),r&&u.append("compress","true"),l&&u.append("access",l);let p=0;for(const{fileName:e,content:t}of n)u.append("file"+ ++p,t,e);u.append("f","json"),await e.portal.request(c,{method:"post",body:u,signal:a?.signal})}}}async function n(e,s,o){if(!s.hasPath())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(o);const a=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(e.userItemUrl,"removeResources");await e.portal.request(a,{method:"post",query:{resource:s.path},signal:o?.signal}),s.portalItem=null}async function c(e,t){await e.load(t);const s=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(e.userItemUrl,"removeResources");return e.portal.request(s,{method:"post",query:{deleteAll:!0},signal:t?.signal})}function l(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function i(e){const[t,r]=u(e),[s,o]=l(t);return[s,o,r]}function u(e){const t=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getPathExtension */ .Zo)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}async function p(t){if("blob"===t.type)return t.blob;if("json"===t.type)return new Blob([t.jsonString],{type:"application/json"});return(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t.url,{responseType:"blob"})).data}function f(e,t){if(!e.hasPath())return null;const[s,,o]=i(e.path);return e.portalItem.resourceFromPath(r(s,t+o))}function m(e,t){if(!e.hasPath())return null;const[s,,o]=i(e.path);return e.portalItem.resourceFromPath((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(s,t+o))}


/***/ }),

/***/ 20267:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ n),
/* harmony export */   r: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62991);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49175);
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1874);
/* harmony import */ var _portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90081);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function p(e,t,r){const o=await u(e,t,r);await h(o,t,r)}async function n(e,t,r,o,s){const a=await u(r,o,s);await e.update({data:t}),await h(a,o,s)}async function u(o,p,n){if(!p?.resources)return;const u=p.portalItem===o.portalItem?new Set(o.paths):new Set;o.paths.length=0,o.portalItem=p.portalItem;const h=new Set(p.resources.toKeep.map((e=>e.resource.path))),i=new Set,m=[];h.forEach((e=>{u.delete(e),o.paths.push(e)}));const f=[],l=[],w=[];for(const e of p.resources.toUpdate)if(u.delete(e.resource.path),h.has(e.resource.path)||i.has(e.resource.path)){const{resource:t,content:r,finish:p}=e,n=(0,_portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .getSiblingOfSameTypeI */ .bg)(t,(0,_core_uuid_js__WEBPACK_IMPORTED_MODULE_2__/* .generateUUID */ .lk)());o.paths.push(n.path),f.push({resource:n,content:await (0,_portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .contentToBlob */ .cL)(r),compress:e.compress}),p&&w.push((()=>p(n)))}else{o.paths.push(e.resource.path),l.push({resource:e.resource,content:await (0,_portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .contentToBlob */ .cL)(e.content),compress:e.compress});const t=e.finish;t&&w.push((()=>t(e.resource))),i.add(e.resource.path)}for(const e of p.resources.toAdd)if(o.paths.push(e.resource.path),u.has(e.resource.path))u.delete(e.resource.path);else{f.push({resource:e.resource,content:await (0,_portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .contentToBlob */ .cL)(e.content),compress:e.compress});const t=e.finish;t&&w.push((()=>t(e.resource)))}if(f.length||l.length){const{addOrUpdateResources:e}=await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 90081));await e(p.portalItem,f,"add",n),await e(p.portalItem,l,"update",n)}if(w.forEach((e=>e())),0===m.length)return u;const d=await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .allSettledErrors */ .Ol)(m);if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .throwIfAborted */ .Te)(n),d.length>0)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("save:resources","Failed to save one or more resources",{errors:d});return u}async function h(e,t,r){if(!e||!t.portalItem)return;const s=[];for(const o of e){const e=t.portalItem.resourceFromPath(o);s.push(e.portalItem.removeResource(e,r))}await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .eachAlways */ .Lx)(s)}


/***/ }),

/***/ 49972:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ci: () => (/* binding */ s),
/* harmony export */   dL: () => (/* binding */ o)
/* harmony export */ });
/* unused harmony export hasCharts */
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62991);
/* harmony import */ var _layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44837);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function o(e){const r=[];for(const o of e.allLayers)if("beforeSave"in o&&"function"==typeof o.beforeSave){const e=o.beforeSave();e&&r.push(e)}await Promise.allSettled(r)}const t=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function s(r,o,s){let n=(r.messages??[]).filter((({type:e})=>"error"===e)).map((({name:r,message:o,details:t})=>new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(r,o,t)));if(r.blockedRelativeUrls&&(n=n.concat(r.blockedRelativeUrls.map((r=>new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("url:unsupported",`Relative url '${r}' is not supported`))))),s){const{ignoreUnsupported:e,supplementalUnsupportedErrors:r=[],requiredPropertyChecksDisabled:o}=s;e&&(n=n.filter((({name:e})=>!(t.has(e)||r.includes(e))))),o&&(n=n.filter((e=>"web-document-write:property-required"!==e.name)))}if(n.length>0)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(o.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:n})}function n(e){return r(e).some((e=>!!e.charts?.length))}


/***/ })

};
;