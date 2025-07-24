"use strict";
exports.id = 54951;
exports.ids = [54951];
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

/***/ 54951:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ G)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38116);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62991);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80861);
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4506);
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33125);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49175);
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61985);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6273);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(25376);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(26325);
/* harmony import */ var _core_accessorSupport_decorators_persistable_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(18031);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(80347);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(19913);
/* harmony import */ var _geometry_ellipsoidUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(34670);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8000);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(44153);
/* harmony import */ var _geometry_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(88133);
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(41247);
/* harmony import */ var _mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(94763);
/* harmony import */ var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(30179);
/* harmony import */ var _mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(27303);
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(90296);
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(60368);
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(22111);
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(9014);
/* harmony import */ var _support_SceneModifications_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(8638);
/* harmony import */ var _support_elevationInfoUtils_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(19541);
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(55714);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let X=class extends((0,_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_22__/* .ArcGISService */ .b)((0,_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_24__/* .OperationalLayer */ .q)((0,_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_25__/* .PortalLayer */ .A)((0,_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_26__/* .ScaleRangeLayer */ .j)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_5__/* .MultiOriginJSONMixin */ .P)((0,_mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_23__/* .CustomParametersMixin */ .d)((0,_mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_21__/* .APIKeyMixin */ .p)(_Layer_js__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A)))))))){readModifications(e,t,i){this._modificationsSource={url:(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_30__.f)(e,i),context:i}}initialize(){this.addHandles((0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_7__.on)((()=>this.modifications),"after-changes",(()=>this.modifications=this.modifications),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .sync */ .OH))}constructor(e){super(e),this.operationalLayerType="IntegratedMesh3DTilesLayer",this.modifications=null,this._modificationsSource=null,this.spatialReference=new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A({wkid:4326,vcsWkid:115700}),this.fullExtent=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A(-180,-90,180,90,this.spatialReference),this.url=null,this.type="integrated-mesh-3dtiles",this.path=null,this.minScale=0,this.maxScale=0,this.rootTilesetJSON=null}set elevationInfo(e){null!=e&&"absolute-height"!==e.mode||this._set("elevationInfo",e),this._validateElevationInfo(e)}_verifyArray(e,t){if(!Array.isArray(e)||e.length<t)return!1;for(const i of e)if("number"!=typeof i)return!1;return!0}_initFullExtent(){const e=this.rootTilesetJSON?.root?.boundingVolume;if(!e)return;if(e.box){const t=e?.box;if(t[3]>7645211&&t[7]>7645211&&t[11]>7645211)return}const t=this.rootTilesetJSON?.root?.transform,i=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_15__/* .create */ .vt)();if(e.region&&this._verifyArray(e.region,6)){const t=e.region,i=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .rad2deg */ .KJ)(t[0]),r=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .rad2deg */ .KJ)(t[1]),s=t[4],a=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .rad2deg */ .KJ)(t[2]),n=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .rad2deg */ .KJ)(t[3]),l=t[5];this.fullExtent=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A({xmin:i,ymin:r,zmin:s,xmax:a,ymax:n,zmax:l,spatialReference:this.spatialReference})}else if(e.sphere&&this._verifyArray(e.sphere,4)){const r=e.sphere,o=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_15__/* .fromValues */ .fA)(r[0],r[1],r[2]),s=r[3]/Math.sqrt(3),a=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_15__/* .create */ .vt)();(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.d)(a,o,(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_15__/* .fromValues */ .fA)(s,s,s));const n=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_15__/* .create */ .vt)();if((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.f)(n,o,(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_15__/* .fromValues */ .fA)(s,s,s)),t&&this._verifyArray(t,16)){const e=t;(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.t)(i,a,e),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.c)(a,i),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.t)(i,n,e),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.c)(n,i)}(0,_geometry_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_19__.projectBuffer)(a,_geometry_ellipsoidUtils_js__WEBPACK_IMPORTED_MODULE_16__/* .WGS84ECEFSpatialReferenceLike */ .Ro,0,a,_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A.WGS84,0),(0,_geometry_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_19__.projectBuffer)(n,_geometry_ellipsoidUtils_js__WEBPACK_IMPORTED_MODULE_16__/* .WGS84ECEFSpatialReferenceLike */ .Ro,0,n,_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A.WGS84,0);const l=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_15__/* .create */ .vt)(),m=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_15__/* .create */ .vt)();(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.A)(l,a,n),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.z)(m,a,n),this.fullExtent=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A({xmin:l[0],ymin:l[1],zmin:l[2],xmax:m[0],ymax:m[1],zmax:m[2],spatialReference:this.spatialReference})}else if(e.box&&this._verifyArray(e.box,12)){const i=e.box,r=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_15__/* .fromValues */ .fA)(i[0],i[1],i[2]),o=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_15__/* .fromValues */ .fA)(i[3],i[4],i[5]),s=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_15__/* .fromValues */ .fA)(i[6],i[7],i[8]),a=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_15__/* .fromValues */ .fA)(i[9],i[10],i[11]),n=[];for(let e=0;e<8;++e)n.push((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_15__/* .create */ .vt)());if((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.f)(n[0],r,o),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.f)(n[0],n[0],s),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.f)(n[0],n[0],a),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.a)(n[1],r,o),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.f)(n[1],n[1],s),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.f)(n[1],n[1],a),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.f)(n[2],r,o),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.a)(n[2],n[2],s),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.f)(n[2],n[2],a),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.a)(n[3],r,o),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.a)(n[3],n[3],s),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.f)(n[3],n[3],a),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.f)(n[4],r,o),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.f)(n[4],n[4],s),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.a)(n[4],n[4],a),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.a)(n[5],r,o),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.f)(n[5],n[5],s),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.a)(n[5],n[5],a),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.f)(n[6],r,o),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.a)(n[6],n[6],s),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.a)(n[6],n[6],a),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.a)(n[7],r,o),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.a)(n[7],n[7],s),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.a)(n[7],n[7],a),t&&this._verifyArray(t,16)){const e=t;for(let t=0;t<8;++t)(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.t)(n[t],n[t],e)}const l=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_15__/* .fromValues */ .fA)(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),m=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_15__/* .fromValues */ .fA)(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE);for(let e=0;e<8;++e)(0,_geometry_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_19__.projectBuffer)(n[e],_geometry_ellipsoidUtils_js__WEBPACK_IMPORTED_MODULE_16__/* .WGS84ECEFSpatialReferenceLike */ .Ro,0,n[e],_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A.WGS84,0),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.A)(m,m,n[e]),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_14__.z)(l,l,n[e]);this.fullExtent=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A({xmin:m[0],ymin:m[1],zmin:m[2],xmax:l[0],ymax:l[1],zmax:l[2],spatialReference:this.spatialReference})}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const r=null!=e?e.signal:null;try{await this.loadFromPortal({supportedTypes:["3DTiles Service"],validateItem:e=>{if(e.typeKeywords?.includes("IntegratedMesh"))return!0;throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A("portal:invalid-layer-item-type","Invalid layer item, expected '${expectedType}' ",{expectedType:"3DTiles Service containing IntegratedMesh"})}},e)}catch(o){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .throwIfAbortError */ .QP)(o)}if(null!=this._modificationsSource){const t=await _support_SceneModifications_js__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}if(this.url){const e=(0,_request_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this.url,{query:{...this.customParameters,token:this.apiKey},responseType:"json",signal:r}).then((e=>{this.rootTilesetJSON=e.data,this._initFullExtent()}),(e=>{(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .throwIfAbortError */ .QP)(e)}));await e}}beforeSave(){if(null!=this._modificationsSource)return this.load().then((()=>{}),(()=>{}))}async fetchAttributionData(){return this.load().then((()=>({})))}_validateElevationInfo(e){const t="Integrated mesh 3d tiles layers";(0,_support_elevationInfoUtils_js__WEBPACK_IMPORTED_MODULE_29__/* .logInvalidElevationInfoWarning */ .XF)(_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.getLogger(this),(0,_support_elevationInfoUtils_js__WEBPACK_IMPORTED_MODULE_29__/* .elevationModeRequiredMessage */ .B)(t,"absolute-height",e)),(0,_support_elevationInfoUtils_js__WEBPACK_IMPORTED_MODULE_29__/* .logInvalidElevationInfoWarning */ .XF)(_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.getLogger(this),(0,_support_elevationInfoUtils_js__WEBPACK_IMPORTED_MODULE_29__/* .featureExpressionUnsupportedMessage */ .tW)(t,e))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__/* .property */ .MZ)({type:["IntegratedMesh3DTilesLayer"]})],X.prototype,"operationalLayerType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__/* .property */ .MZ)({type:_support_SceneModifications_js__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A,clonable:e=>e.clone()}),(0,_core_accessorSupport_decorators_persistable_js__WEBPACK_IMPORTED_MODULE_13__/* .persistable */ .P)({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],X.prototype,"modifications",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__/* .reader */ .w)(["web-scene","portal-item"],"modifications")],X.prototype,"readModifications",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__/* .property */ .MZ)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A})],X.prototype,"spatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__/* .property */ .MZ)({type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A})],X.prototype,"fullExtent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__/* .property */ .MZ)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_27__/* .elevationInfo */ .Yj)],X.prototype,"elevationInfo",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__/* .property */ .MZ)({type:["show","hide"]})],X.prototype,"listMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__/* .property */ .MZ)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_27__/* .url */ .OZ)],X.prototype,"url",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__/* .property */ .MZ)({readOnly:!0})],X.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__/* .property */ .MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],X.prototype,"path",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__/* .property */ .MZ)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:!1,write:!1}}}})],X.prototype,"minScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__/* .property */ .MZ)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:!1,write:!1}}}})],X.prototype,"maxScale",void 0),X=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__/* .subclass */ .$)("esri.layers.IntegratedMesh3DTilesLayer")],X);const G=X;


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

/***/ 8638:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ n)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(38116);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(54192);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(22395);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(19759);
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
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(15565);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Warning.js
var Warning = __webpack_require__(97629);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(48524);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/persistable.js
var persistable = __webpack_require__(18031);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Polygon.js
var Polygon = __webpack_require__(65648);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/projectionUtils.js + 3 modules
var projectionUtils = __webpack_require__(27646);
;// ./node_modules/@arcgis/core/layers/support/SceneModification.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var m;let f=m=class extends JSONSupport/* default */.A{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,r,o,s){if(s.layer?.spatialReference&&!s.layer.spatialReference.equals(this.geometry.spatialReference)){if(!(0,projectionUtils.canProjectWithoutEngine)(e.spatialReference,s.layer.spatialReference))return void(s?.messages&&s.messages.push(new Warning/* default */.A("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:s.layer.spatialReference,context:s})));const p=new Polygon/* default */.A;(0,projectionUtils.projectPolygon)(e,p,s.layer.spatialReference),r[o]=p.toJSON(s)}else r[o]=e.toJSON(s);delete r[o].spatialReference}clone(){return new m({geometry:(0,lang/* clone */.o8)(this.geometry),type:this.type})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Polygon/* default */.A}),(0,persistable/* persistable */.P)()],f.prototype,"geometry",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)(["web-scene","portal-item"],"geometry")],f.prototype,"writeGeometry",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["clip","mask","replace"],nonNullable:!0}),(0,persistable/* persistable */.P)()],f.prototype,"type",void 0),f=m=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.SceneModification")],f);

;// ./node_modules/@arcgis/core/layers/support/SceneModifications.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var SceneModifications_m;let n=SceneModifications_m=class extends(JSONSupport/* default */.A.JSONSupportMixin(Collection/* default */.A.ofType(f))){constructor(r){super(r),this.url=null}clone(){return new SceneModifications_m({url:this.url,items:this.items.map((r=>r.clone()))})}toJSON(r){return this.toArray().map((o=>o.toJSON(r))).filter((r=>!!r.geometry))}static fromJSON(r,o){const t=new SceneModifications_m;for(const e of r)t.add(f.fromJSON(e,o));return t}static async fromUrl(r,t,e){const i={url:(0,urlUtils/* urlToObject */.An)(r),origin:"service"},c=await (0,request/* default */.A)(r,{responseType:"json",signal:e?.signal}),n=t.toJSON(),a=[];for(const o of c.data)a.push(f.fromJSON({...o,geometry:{...o.geometry,spatialReference:n}},i));return new SceneModifications_m({url:r,items:a})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],n.prototype,"url",void 0),n=SceneModifications_m=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.SceneModifications")],n);


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

/***/ 19541:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $7: () => (/* binding */ P),
/* harmony export */   B: () => (/* binding */ Z),
/* harmony export */   XF: () => (/* binding */ $),
/* harmony export */   tW: () => (/* binding */ w),
/* harmony export */   w7: () => (/* binding */ i)
/* harmony export */ });
/* unused harmony exports absoluteHeightElevationInfo, elevationContextAffectsAlignment, featureExpressionInfoIsZero, getConvertedElevation, getConvertedElevationFromVector, getConvertedElevationFromXYZ, getEffectiveElevationInfo, getEffectiveElevationMode, getElevationOffset, getElevationOffsetInMeters, getGeometryEffectiveElevationInfo, getGraphicEffectiveElevationInfo, getGraphicEffectiveElevationMode, getZForElevationMode, hasEffectiveFeatureExpressionInfo, hasFeatureExpressionInfo, hasGraphicFeatureExpressionInfo, onTheGroundElevationInfo, zValueInAbsoluteHeightMode */
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5262);
/* harmony import */ var _symbols_support_unitConversionUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69172);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function o(e){return e?j:z}function r(e,n){return n?.mode?n.mode:o(e).mode}function u(e,n){return null!=n?n:o(e)}function i(e,n){return r(null==e||(e.hasZ??!1),n)}function s(e,n){return u(null==e||(e.hasZ??!1),n)}function l(e){const n=g(e);return i(e.geometry,n)}function a(e){const n=g(e),t=i(e.geometry,n),o=null!=n&&"on-the-ground"!==t?R(n):0,r=n?.featureExpressionInfo;return{mode:t,offset:o,featureExpressionInfo:r}}function f(e){return v(a(e))}function c(e){return v(e)||d(e)}function d(e){return"0"===e?.featureExpressionInfo?.expression}function v(e){if(!e)return!1;if("on-the-ground"===e.mode)return!1;const n=e?.featureExpressionInfo?e.featureExpressionInfo.expression:null;return!(!n||"0"===n)}function g(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}function h(t,o){if(!t?.offset)return 0;const{offset:r,unit:u}=t;if("decimal-degrees"===u)return 0;const i="unknown"!==u&&u?u:"meters",s=e(o);return s?n(r,i,s):0}function p(e,n,t){if(!t?.mode)return;const o=e.hasZ?e.z:0,r=h(t,e.spatialReference);switch(t.mode){case"absolute-height":return o-r;case"on-the-ground":return 0;case"relative-to-ground":return o-((n.elevationProvider.getElevation(e.x,e.y,o,e.spatialReference,"ground")??0)+r);case"relative-to-scene":return o-((n.elevationProvider.getElevation(e.x,e.y,o,e.spatialReference,"scene")??0)+r)}}function m(e,n,t,o=null){return E(e,n.x,n.y,n.hasZ?n.z:0,n.spatialReference,t,o)}function x(e,n,t,o,r=null){return E(e,n[0],n[1],n.length>2?n[2]:0,t,o,r)}function E(e,n,t,o,r,u,i=null){if(null==u)return;const s=null!=i?i.mode:"absolute-height";if("on-the-ground"===s)return 0;const{absoluteZ:l}=b(n,t,o,r,e,u);return I(l,n,t,o,r,e,i,s)}function b(e,n,t,o,r,u){const i=h(u,o);switch(u.mode){case"absolute-height":return{absoluteZ:t+i,elevation:0};case"on-the-ground":{const t=r.elevationProvider.getElevation(e,n,0,o,"ground")??0;return{absoluteZ:t,elevation:t}}case"relative-to-ground":{const u=r.elevationProvider.getElevation(e,n,t,o,"ground")??0;return{absoluteZ:t+u+i,elevation:u}}case"relative-to-scene":{const u=r.elevationProvider.getElevation(e,n,t,o,"scene")??0;return{absoluteZ:t+u+i,elevation:u}}}}function I(e,n,t,o,r,u,i,s){const l=h(i,r);switch(s){case"absolute-height":return e-l;case"relative-to-ground":return e-((u.elevationProvider.getElevation(n,t,o,r,"ground")??0)+l);case"relative-to-scene":return e-((u.elevationProvider.getElevation(n,t,o,r,"scene")??0)+l)}}function y(e,n){if(null==n)return!1;const{mode:t}=n;return null!=t&&("scene"===e&&"relative-to-scene"===t||"ground"===e&&"absolute-height"!==t)}function Z(e,n,t){return t&&t.mode!==n?`${e} only support ${n} elevation mode`:null}function P(e,n,t){return t?.mode===n?`${e} do not support ${n} elevation mode`:null}function w(e,n){return null!=n?.featureExpressionInfo&&"0"!==n.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function $(e,n){n&&e.warn(".elevationInfo=",n)}function R(e){return(e?.offset??0)*t(e?.unit)}const j={mode:"absolute-height",offset:0},z={mode:"on-the-ground",offset:null};


/***/ })

};
;