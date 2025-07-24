"use strict";
exports.id = 39647;
exports.ids = [39647];
exports.modules = {

/***/ 21839:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ a),
/* harmony export */   b: () => (/* binding */ n),
/* harmony export */   c: () => (/* binding */ f),
/* harmony export */   d: () => (/* binding */ e),
/* harmony export */   e: () => (/* binding */ s),
/* harmony export */   f: () => (/* binding */ l),
/* harmony export */   l: () => (/* binding */ u),
/* harmony export */   n: () => (/* binding */ d),
/* harmony export */   t: () => (/* binding */ r)
/* harmony export */ });
/* unused harmony exports g, h, s, v */
/* harmony import */ var _colorUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31415);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(539);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(t,e,f){r(t.typedBuffer,e.typedBuffer,f,t.typedBufferStride,e.typedBufferStride)}function r(t,e,r,f=3,n=f){if(t.length/f!==Math.ceil(e.length/n))return t;const o=t.length/f,i=r[0],u=r[1],l=r[2],a=r[4],s=r[5],d=r[6],c=r[8],p=r[9],h=r[10],y=r[12],B=r[13],g=r[14];let S=0,m=0;for(let M=0;M<o;M++){const r=e[S],o=e[S+1],M=e[S+2];t[m]=i*r+a*o+c*M+y,t[m+1]=u*r+s*o+p*M+B,t[m+2]=l*r+d*o+h*M+g,S+=n,m+=f}return t}function f(t,e,r){n(t.typedBuffer,e.typedBuffer,r,t.typedBufferStride,e.typedBufferStride)}function n(t,e,r,f=3,n=f){if(t.length/f!==Math.ceil(e.length/n))return;const o=t.length/f,i=r[0],u=r[1],l=r[2],a=r[3],s=r[4],d=r[5],c=r[6],p=r[7],h=r[8];let y=0,B=0;for(let g=0;g<o;g++){const r=e[y],o=e[y+1],g=e[y+2];t[B]=i*r+a*o+c*g,t[B+1]=u*r+s*o+p*g,t[B+2]=l*r+d*o+h*g,y+=n,B+=f}}function o(t,e,r){i(t.typedBuffer,e.typedBuffer,r,t.typedBufferStride,e.typedBufferStride)}function i(t,e,r,f=3,n=f){const o=Math.min(t.length/f,e.length/n);let i=0,u=0;for(let l=0;l<o;l++)t[u]=r*e[i],t[u+1]=r*e[i+1],t[u+2]=r*e[i+2],i+=n,u+=f;return t}function u(t,e,r,f){l(t.typedBuffer,e.typedBuffer,r,f,t.typedBufferStride,e.typedBufferStride)}function l(e,r,f,n,o=3,i=o){const u=Math.min(e.length/o,r.length/i);let l=0,a=0;const s=1/_colorUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .colorGamma */ .Tf;for(let t=0;t<u;t++)e[a]=n*(f*r[l])**s,e[a+1]=n*(f*r[l+1])**s,e[a+2]=n*(f*r[l+2])**s,l+=i,a+=o}function a(t,e,r,f=3,n=f){const o=t.length/f;if(o!==Math.ceil(e.length/n))return t;let i=0,u=0;for(let l=0;l<o;l++)t[u]=e[i]+r[0],t[u+1]=e[i+1]+r[1],t[u+2]=e[i+2]+r[2],i+=n,u+=f;return t}function s(t,e){d(t.typedBuffer,e.typedBuffer,t.typedBufferStride,e.typedBufferStride)}function d(t,e,r=3,f=r){const n=Math.min(t.length/r,e.length/f);let o=0,i=0;for(let u=0;u<n;u++){const n=e[o],u=e[o+1],l=e[o+2],a=n*n+u*u+l*l;if(a>0){const e=1/Math.sqrt(a);t[i]=e*n,t[i+1]=e*u,t[i+2]=e*l}o+=f,i+=r}}function c(t,e,r){const f=Math.min(t.count,e.count),n=t.typedBuffer,o=t.typedBufferStride,i=e.typedBuffer,u=e.typedBufferStride;let l=0,a=0;for(let s=0;s<f;s++)n[a]=i[l]>>r,n[a+1]=i[l+1]>>r,n[a+2]=i[l+2]>>r,l+=u,a+=o}const p=Object.freeze(Object.defineProperty({__proto__:null,linearToSRGB:l,linearToSRGBView:u,normalize:d,normalizeView:s,scale:i,scaleView:o,shiftRight:c,transformMat3:n,transformMat3View:f,transformMat4:r,transformMat4View:e,translate:a},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 12364:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* binding */ n),
  b: () => (/* binding */ d),
  l: () => (/* binding */ c),
  n: () => (/* binding */ u),
  t: () => (/* binding */ o)
});

// UNUSED EXPORTS: c, d, e, s, v

// EXTERNAL MODULE: ../node_modules/@arcgis/core/colorUtils.js
var colorUtils = __webpack_require__(31415);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
;// ../node_modules/@arcgis/core/geometry/support/buffer/math/common.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const e=()=>Logger/* default */.A.getLogger("esri.views.3d.support.buffer.math");

;// ../node_modules/@arcgis/core/chunks/vec4.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function r(t,e,r){if(t.count!==e.count)return;const f=t.count,n=r[0],o=r[1],u=r[2],i=r[3],s=r[4],c=r[5],d=r[6],a=r[7],l=r[8],p=r[9],y=r[10],B=r[11],m=r[12],h=r[13],S=r[14],g=r[15],M=t.typedBuffer,b=t.typedBufferStride,j=e.typedBuffer,v=e.typedBufferStride;for(let w=0;w<f;w++){const t=w*b,e=w*v,r=j[e],f=j[e+1],V=j[e+2],_=j[e+3];M[t]=n*r+s*f+l*V+m*_,M[t+1]=o*r+c*f+p*V+h*_,M[t+2]=u*r+d*f+y*V+S*_,M[t+3]=i*r+a*f+B*V+g*_}}function f(t,r,f,n=4,o=n){if(t.length/n!==r.length/o)return void e().error("source and destination buffers need to have the same number of elements");const u=t.length/n,i=f[0],s=f[1],c=f[2],d=f[3],a=f[4],l=f[5],p=f[6],y=f[7],B=f[8],m=f[9],h=f[10],S=f[11],g=f[12],M=f[13],b=f[14],j=f[15];let v=0,w=0;for(let e=0;e<u;e++){const e=r[v],f=r[v+1],u=r[v+2],V=r[v+3];t[w]=i*e+a*f+B*u+g*V,t[w+1]=s*e+l*f+m*u+M*V,t[w+2]=c*e+p*f+h*u+b*V,t[w+3]=d*e+y*f+S*u+j*V,v+=o,w+=n}}function n(t,e,r){o(t.typedBuffer,e.typedBuffer,r,t.typedBufferStride,e.typedBufferStride)}function o(t,e,r,f=4,n=f){if(t.length/f!==e.length/n)return;const o=t.length/f,u=r[0],i=r[1],s=r[2],c=r[3],d=r[4],a=r[5],l=r[6],p=r[7],y=r[8];let B=0,m=0;for(let h=0;h<o;h++){const r=e[B],o=e[B+1],h=e[B+2],S=e[B+3];t[m]=u*r+c*o+l*h,t[m+1]=i*r+d*o+p*h,t[m+2]=s*r+a*o+y*h,t[m+3]=S,B+=n,m+=f}}function u(t,e){const r=Math.min(t.count,e.count),f=t.typedBuffer,n=t.typedBufferStride,o=e.typedBuffer,u=e.typedBufferStride;for(let i=0;i<r;i++){const t=i*n,e=i*u,r=o[e],s=o[e+1],c=o[e+2],d=r*r+s*s+c*c;if(d>0){const e=1/Math.sqrt(d);f[t]=e*r,f[t+1]=e*s,f[t+2]=e*c}}}function i(t,e,r){s(t.typedBuffer,e,r,t.typedBufferStride)}function s(t,e,r,f=4){const n=Math.min(t.length/f,e.count),o=e.typedBuffer,u=e.typedBufferStride;let i=0,s=0;for(let c=0;c<n;c++)t[s]=r*o[i],t[s+1]=r*o[i+1],t[s+2]=r*o[i+2],t[s+3]=r*o[i+3],i+=u,s+=f}function c(t,e,r,f){d(t.typedBuffer,e,r,f,t.typedBufferStride)}function d(e,r,f,n,o=4){const u=Math.min(e.length/o,r.count),i=r.typedBuffer,s=r.typedBufferStride;let c=0,d=0;const a=1/colorUtils/* colorGamma */.Tf;for(let t=0;t<u;t++)e[d]=n*(f*i[c])**a,e[d+1]=n*(f*i[c+1])**a,e[d+2]=n*(f*i[c+2])**a,e[d+3]=n*f*i[c+3],c+=s,d+=o}const a=Object.freeze(Object.defineProperty({__proto__:null,linearToSRGB:d,linearToSRGBView:c,normalize:u,scale:s,scaleView:i,transformMat3:o,transformMat3View:n,transformMat4:f,transformMat4View:r},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 39647:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Mesh_q)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var core_Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Loadable.js
var Loadable = __webpack_require__(45307);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Promise.js
var core_Promise = __webpack_require__(84410);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(85251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(9272);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(58359);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Geometry.js
var Geometry = __webpack_require__(88266);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Point.js
var Point = __webpack_require__(97066);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Polygon.js
var Polygon = __webpack_require__(62802);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/aaBoundingBox.js
var aaBoundingBox = __webpack_require__(4675);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/axisAngleDegrees.js
var axisAngleDegrees = __webpack_require__(69175);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/MeshComponent.js
var MeshComponent = __webpack_require__(21104);
;// ../node_modules/@arcgis/core/geometry/support/meshErrors.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const t="Mesh must be loaded before applying operations",meshErrors_e="Provided component is not part of the list of components",n="Expected polygon to be a Polygon instance",meshErrors_s="Expected location to be a Point instance";class i extends core_Error/* default */.A{constructor(){super("invalid-input:location",meshErrors_s)}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/MeshGeoreferencedVertexSpace.js
var MeshGeoreferencedVertexSpace = __webpack_require__(97557);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/MeshLocalVertexSpace.js
var MeshLocalVertexSpace = __webpack_require__(99218);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/MeshTransform.js
var MeshTransform = __webpack_require__(8695);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/MeshVertexAttributes.js
var MeshVertexAttributes = __webpack_require__(29796);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/meshVertexSpaceUtils.js
var meshVertexSpaceUtils = __webpack_require__(1114);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/triangulationUtils.js
var triangulationUtils = __webpack_require__(17566);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(24121);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projection/projectPointToVector.js
var projectPointToVector = __webpack_require__(42609);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/deprecate.js
var deprecate = __webpack_require__(50220);
;// ../node_modules/@arcgis/core/geometry/support/meshUtils/geographicUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function o(e,r){return e.isGeographic||e.isWebMercator&&(r??!0)}function geographicUtils_t(o,t,i,a){if(void 0!==a){(0,deprecate/* deprecated */.io)(o(),"option: geographic",{replacement:"Use mesh `vertexSpace` and spatial reference to control how operations are performed instead.",version:"4.30",warnOnce:!0});const c="local"===t.type;if(!(0,meshVertexSpaceUtils/* isRelativeVertexSpace */.Hq)(t)||a===c)return i.isGeographic||i.isWebMercator&&a;o().warnOnce(`Specifying the 'geographic' parameter (${a}) for a Mesh vertex space of type "${t.type}" is not supported. This parameter will be ignored.`)}switch(t.type){case"georeferenced":return i.isGeographic;case"local":return i.isGeographic||i.isWebMercator}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/meshUtils/projection.js
var projection = __webpack_require__(72188);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/meshUtils/vertexSpaceConversion.js
var vertexSpaceConversion = __webpack_require__(5025);
;// ../node_modules/@arcgis/core/geometry/support/meshUtils/centerAt.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const g=()=>Logger/* default */.A.getLogger("esri.geometry.support.meshUtils.centerAt");function u(e,t,r){if(!e.vertexAttributes?.position)return;const{vertexSpace:i}=e,o=r?.origin??e.origin,n=geographicUtils_t(g,i,o.spatialReference,r?.geographic);(0,meshVertexSpaceUtils/* isRelativeVertexSpace */.Hq)(i)?x(e,t,o):n?v(e,t,o):R(e,t,o)}function x(e,o,s){const{vertexSpace:c}=e;if(!(0,meshVertexSpaceUtils/* isRelativeVertexSpace */.Hq)(c))return;const f=h,m=b;if(!(0,projectPointToVector/* projectPointToVector */.g)(o,m,e.spatialReference))return void (0,projection/* logProjectionError */.CN)(g(),o.spatialReference,e.spatialReference,projection/* loadProjectErrorMessage */.JP);if(!(0,projectPointToVector/* projectPointToVector */.g)(s,f,e.spatialReference)){const t=e.origin;return f[0]=t.x,f[1]=t.y,f[2]=t.z,void (0,projection/* logProjectionError */.CN)(g(),s.spatialReference,e.spatialReference,projection/* loadProjectErrorMessage */.JP)}const u=(0,vec32.d)(A,m,f);c.origin=(0,vec32.f)((0,vec3f64/* create */.vt)(),c.origin,u)}function v(e,t,r){const i=(0,vec3f64/* fromValues */.fA)(r.x,r.y,r.z??0),n=(0,vertexSpaceConversion/* convertVertexSpace */.UR)(e,new MeshLocalVertexSpace/* default */.A({origin:i}));if(!n)return;const a=(0,vec3f64/* fromValues */.fA)(t.x,t.y,t.z??0),f=(0,vertexSpaceConversion/* convertVertexSpace */.UR)({vertexAttributes:n,spatialReference:e.spatialReference,vertexSpace:new MeshLocalVertexSpace/* default */.A({origin:a})},MeshGeoreferencedVertexSpace/* default */.A.absolute);if(!f)return;const{position:p,normal:l,tangent:g}=f;e.vertexAttributes.position=p,e.vertexAttributes.normal=l,e.vertexAttributes.tangent=g,e.vertexAttributesChanged()}function R(e,t,r){const i=h,o=b;if((0,projectPointToVector/* projectPointToVector */.g)(t,o,e.spatialReference)){if(!(0,projectPointToVector/* projectPointToVector */.g)(r,i,e.spatialReference)){const t=e.origin;return i[0]=t.x,i[1]=t.y,i[2]=t.z,void (0,projection/* logProjectionError */.CN)(g(),r.spatialReference,e.spatialReference,projection/* loadProjectErrorMessage */.JP)}j(e.vertexAttributes.position,o,i),e.vertexAttributesChanged()}else (0,projection/* logProjectionError */.CN)(g(),t.spatialReference,e.spatialReference,projection/* loadProjectErrorMessage */.JP)}function j(e,t,r){if(e)for(let i=0;i<e.length;i+=3)for(let o=0;o<3;o++)e[i+o]+=t[o]-r[o]}const b=(0,vec3f64/* create */.vt)(),h=(0,vec3f64/* create */.vt)(),A=(0,vec3f64/* create */.vt)();

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js
var mat4f64 = __webpack_require__(86128);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(84698);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projectionUtils.js + 2 modules
var projectionUtils = __webpack_require__(68490);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/spatialReferenceEllipsoidUtils.js
var spatialReferenceEllipsoidUtils = __webpack_require__(32937);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projection/computeTranslationToOriginAndRotation.js
var computeTranslationToOriginAndRotation = __webpack_require__(59538);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projection/projectBuffer.js
var projectBuffer = __webpack_require__(84119);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/DoubleArray.js
var DoubleArray = __webpack_require__(90166);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3.js
var vec3 = __webpack_require__(21839);
;// ../node_modules/@arcgis/core/geometry/support/meshUtils/extent.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function l(r){const{spatialReference:f,vertexSpace:l,untransformedBounds:d}=r,g=(0,aaBoundingBox/* toCorners */.gE)(d,extent_u);if((0,meshVertexSpaceUtils/* isRelativeVertexSpace */.Hq)(l)&&r.transform&&(0,vec3.t)(g,g,r.transform.localMatrix),"georeferenced"===l.type){const r=l.origin;return r&&(0,vec3.a)(g,g,r),(0,aaBoundingBox/* toExtent */.w1)((0,aaBoundingBox/* fromBuffer */.vY)(g),f)}const y=(0,spatialReferenceEllipsoidUtils/* getSphericalPCPF */.lO)(f),B=l.origin;if(!(0,projectionUtils.canProjectWithoutEngine)(y,f)){const[r,t,e]=B;return new Extent/* default */.A({xmin:r,ymin:t,zmin:e,xmax:r,ymax:t,zmax:e,spatialReference:f})}return (0,computeTranslationToOriginAndRotation/* computeTranslationToOriginAndRotation */.l)(f,B,extent_x,y),(0,vec3.t)(g,g,extent_x),(0,projectBuffer.projectBuffer)(g,y,0,g,f,0),(0,aaBoundingBox/* toExtent */.w1)((0,aaBoundingBox/* fromBuffer */.vY)(g),f)}const extent_x=(0,mat4f64/* create */.vt)(),extent_u=(0,DoubleArray/* newDoubleArray */.jh)(24);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/compilerUtils.js
var compilerUtils = __webpack_require__(73345);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(20909);
;// ../node_modules/@arcgis/core/geometry/support/meshUtils/loadExternal.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function loadExternal_u(t,s,r){switch(s.source.type){case"client":case"service":return f(t,s,r);case"loadable":return s.source.load(t,r);default:(0,compilerUtils/* neverReached */.Xb)(s.source)}}async function f(e,t,n){const{source:o}=t,{loadGLTFMesh:i}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 88614).then(__webpack_require__.bind(__webpack_require__, 88614)),n),l=await p(o,n);(0,promiseUtils/* throwIfAborted */.Te)(n);const a=i(new Point/* default */.A({x:0,y:0,z:0,spatialReference:e.spatialReference}),l.url,{resolveFile:m(l),signal:n?.signal,expectedType:l.type,unitConversionDisabled:t.unitConversionDisabled});a.then((()=>l.dispose()),(()=>l.dispose()));const{vertexAttributes:u,components:f}=await a;e.vertexAttributes=u,e.components=f}function m(e){const t=(0,urlUtils/* removeFile */.nM)(e.url);return s=>{const r=(0,urlUtils/* makeRelative */.V1)(s,t,t),n=r?r.replace(/^ *\.\//,""):null;return(n?e.files.get(n):null)??s}}async function p(e,s){switch(e.type){case"client":return Array.isArray(e.files)?y(e.files):loadExternal_h(e.files);case"service":return w(e.assets,s);default:throw new core_Error/* default */.A("mesh-load-external:invalid-source","Invalid source type")}}async function d(e,t){const{parts:s,assetMimeType:n,assetName:o}=e;if(1===s.length)return new M(s[0].partUrl);const i=await e.toBlob(t);return (0,promiseUtils/* throwIfAborted */.Te)(t),M.fromBlob(i,loadExternal_R(o,n))}function loadExternal_h(e){return M.fromBlob(e,loadExternal_R(e.name,e.type))}function y(e){if(!e.length)throw new core_Error/* default */.A("mesh-load-external:missing-assets","There must be at least one file to load");return loadExternal_j(e.map((e=>({name:e.name,mimeType:e.type,source:loadExternal_h(e)}))))}async function w(e,s){if(!e.length)throw new core_Error/* default */.A("mesh-load-external:missing-assets","There must be at least one file to load");const l=await (0,promiseUtils/* allSettledValues */.nA)(e.map((async e=>{const t=await d(e);return (0,promiseUtils/* throwIfAborted */.Te)(s),{name:e.assetName,mimeType:e.assetMimeType,source:t}})));if((0,promiseUtils/* isAborted */.G4)(s))throw l.forEach((e=>e.source.dispose())),(0,promiseUtils/* createAbortError */.NK)();return loadExternal_j(l)}const loadExternal_g=/^model\/gltf\+json$/,loadExternal_b=/^model\/gltf-binary$/,loadExternal_v=/\.gltf$/i,loadExternal_x=/\.glb$/i;function T({mimeType:e,source:t,name:s}){return loadExternal_g.test(e)||loadExternal_v.test(s)?{url:t.url,type:"gltf"}:loadExternal_b.test(e)||loadExternal_x.test(s)?{url:t.url,type:"glb"}:null}function loadExternal_j(e){const s=new Map;let r=null,n=null;for(const t of e){const{source:e,name:o}=t;r??=T(t),"ESRI3DO_NORM.glb"===o&&(n=T(t)),s.set(o,e.url),e.files.forEach(((e,t)=>s.set(t,e)))}const o=n??r;if(null==o)throw new core_Error/* default */.A("mesh-load-external:missing-files","Missing files to load external mesh source");return new M(o.url,(()=>e.forEach((({source:e})=>e.dispose()))),s,o.type)}class M{constructor(e,t=()=>{},s=new Map,r){this.url=e,this.dispose=t,this.files=s,this.type=r}static fromBlob(e,t){const s=URL.createObjectURL(e);return new M(s,(()=>URL.revokeObjectURL(s)),void 0,t)}}function loadExternal_R(e,t){return loadExternal_g.test(t)||loadExternal_v.test(e)?"gltf":loadExternal_b.test(t)||loadExternal_v.test(e)?"glb":void 0}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(24793);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(48982);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/meshUtils/External.js
var External = __webpack_require__(21690);
;// ../node_modules/@arcgis/core/geometry/support/meshUtils/Metadata.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let Metadata_a=class extends Clonable/* default */.A{constructor(e){super(e),this.externalSources=new Collection/* default */.A,this._explicitDisplaySource=null,this.georeferenced=!1,this.addHandles((0,reactiveUtils.on)((()=>this.externalSources),"after-remove",(({item:e})=>{e===this._explicitDisplaySource&&(this._explicitDisplaySource=null)}),{sync:!0,onListenerRemove:()=>this._explicitDisplaySource=null}))}get displaySource(){return this._explicitDisplaySource??this._implicitDisplaySource}set displaySource(e){if(null!=e&&!(0,External/* isDisplayExternal */.yr)(e))throw new Error("Cannot use this source for display: it is not in a supported format.");this._explicitDisplaySource=e,e&&this.externalSources.every((r=>!(0,External/* externalSourcesAreEqual */["in"])(r,e)))&&this.externalSources.add(e)}clearSources(){this.externalSources.removeAll()}getExternalSourcesOnService(e){return this.externalSources.items.filter((r=>(0,External/* externalIsOnService */.eN)(r,e)))}get _implicitDisplaySource(){return this.externalSources.find(External/* isDisplayExternal */.yr)}};(0,tslib_es6._)([(0,property/* property */.MZ)()],Metadata_a.prototype,"externalSources",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],Metadata_a.prototype,"displaySource",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],Metadata_a.prototype,"_implicitDisplaySource",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],Metadata_a.prototype,"_explicitDisplaySource",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],Metadata_a.prototype,"georeferenced",void 0),Metadata_a=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.geometry.support.meshUtils.Metadata")],Metadata_a);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js
var mat3f64 = __webpack_require__(78607);
;// ../node_modules/@arcgis/core/geometry/support/meshUtils/primitives.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function c(){const{faceDescriptions:t,faceVertexOffsets:e,uvScales:r}=F,n=4*t.length,o=new Float64Array(3*n),s=new Float32Array(3*n),a=new Float32Array(2*n),i=new Uint32Array(2*t.length*3);let l=0,c=0,f=0,u=0;for(let h=0;h<t.length;h++){const n=t[h],p=l/3;for(const t of e)i[u++]=p+t;const m=n.corners;for(let t=0;t<4;t++){const e=m[t];let i=0;a[f++]=.25*r[t][0]+n.uvOrigin[0],a[f++]=n.uvOrigin[1]-.25*r[t][1];for(let t=0;t<3;t++)0!==n.axis[t]?(o[l++]=.5*n.axis[t],s[c++]=n.axis[t]):(o[l++]=.5*e[i++],s[c++]=0)}}return{position:o,normal:s,uv:a,faces:i}}function primitives_f(t,e){const r=t.components[0],n=r.faces,s=primitives_b[e],a=6*s,i=new Array(6),l=new Array(n.length-6);let c=0,f=0;for(let o=0;o<n.length;o++)o>=a&&o<a+6?i[c++]=n[o]:l[f++]=n[o];if(null!=t.vertexAttributes.uv){const e=new Float32Array(t.vertexAttributes.uv),r=4*s*2,n=[0,1,1,1,1,0,0,0];for(let t=0;t<n.length;t++)e[r+t]=n[t];t.vertexAttributes.uv=e}return t.components=[new MeshComponent/* default */.A({faces:i,material:r.material}),new MeshComponent/* default */.A({faces:l})],t}function primitives_u(t=0){const e=Math.round(8*2**t),r=2*e,n=(e-1)*(r+1)+2*r,o=new Float64Array(3*n),s=new Float32Array(3*n),a=new Float32Array(2*n),i=new Uint32Array(3*((e-1)*r*2));let l=0,c=0,f=0,u=0;for(let h=0;h<=e;h++){const t=h/e*Math.PI+.5*Math.PI,n=Math.cos(t),p=Math.sin(t);O[2]=p;const m=0===h||h===e,w=m?r-1:r;for(let v=0;v<=w;v++){const t=v/w*2*Math.PI;O[0]=-Math.sin(t)*n,O[1]=Math.cos(t)*n;for(let e=0;e<3;e++)o[l]=.5*O[e],s[l]=O[e],++l;a[c++]=(v+(m?.5:0))/r,a[c++]=h/e,0!==h&&v!==r&&(h!==e&&(i[f++]=u,i[f++]=u+1,i[f++]=u-r),1!==h&&(i[f++]=u,i[f++]=u-r,i[f++]=u-r-1)),u++}}return{position:o,normal:s,uv:a,faces:i}}function primitives_h(t=0){const e=5,r=Math.round(16*2**t),n=(e-1)*(r+1)+2*r,o=new Float64Array(3*n),s=new Float32Array(3*n),a=new Float32Array(2*n),i=new Uint32Array(3*(4*r));let l=0,c=0,f=0,u=0,h=0;for(let p=0;p<=e;p++){const t=0===p||p===e,n=p<=1||p>=e-1,m=2===p||4===p,w=t?r-1:r;for(let v=0;v<=w;v++){const g=v/w*2*Math.PI,A=t?0:.5;O[0]=A*Math.sin(g),O[1]=A*-Math.cos(g),O[2]=p<=2?.5:-.5;for(let t=0;t<3;t++)o[l++]=O[t],s[c++]=n?2===t?p<=1?1:-1:0:2===t?0:O[t]/A;a[f++]=(v+(t?.5:0))/r,a[f++]=p<=1?1*p/3:p<=3?1*(p-2)/3+1/3:1*(p-4)/3+2/3,m||0===p||v===r||(p!==e&&(i[u++]=h,i[u++]=h+1,i[u++]=h-r),1!==p&&(i[u++]=h,i[u++]=h-r,i[u++]=h-r-1)),h++}}return{position:o,normal:s,uv:a,faces:i}}function primitives_p(t,e){const r="number"==typeof e?e:null!=e?e.width:1,n="number"==typeof e?e:null!=e?e.height:1;switch(t){case"up":case"down":return{width:r,depth:n};case"north":case"south":return{width:r,height:n};case"east":case"west":return{depth:r,height:n}}}function primitives_m(t){const e=primitives_A.facingAxisOrderSwap[t],r=primitives_A.position,n=primitives_A.normal,o=new Float64Array(r.length),s=new Float32Array(n.length);let a=0;for(let i=0;i<4;i++){const t=a;for(let i=0;i<3;i++){const l=e[i],c=Math.abs(l)-1,f=l>=0?1:-1;o[a]=r[t+c]*f,s[a]=n[t+c]*f,a++}}return{position:o,normal:s,uv:new Float32Array(primitives_A.uv),faces:new Uint32Array(primitives_A.faces),isPlane:!0}}const primitives_w=1,primitives_v=2,primitives_g=3,primitives_A={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[primitives_g,primitives_w,primitives_v],west:[-3,-1,primitives_v],north:[-1,primitives_g,primitives_v],south:[primitives_w,-3,primitives_v],up:[primitives_w,primitives_v,primitives_g],down:[primitives_w,-2,-3]}};function primitives_x(t,e,r){t.isPlane||primitives_y(t),primitives_M(t,primitives_d(r?.size,r?.unit,e.spatialReference));const n=(0,meshVertexSpaceUtils/* selectVertexSpace */.TE)(e,r),l=e.spatialReference.isGeographic?(0,meshVertexSpaceUtils/* selectVertexSpace */.TE)(e):n,c=(0,vertexSpaceConversion/* convertVertexSpace */.UR)({vertexAttributes:t,vertexSpace:l,spatialReference:e.spatialReference},n,{allowBufferReuse:!0});return{vertexAttributes:new MeshVertexAttributes/* MeshVertexAttributes */.H({...c,uv:t.uv}),vertexSpace:n,components:[new MeshComponent/* default */.A({faces:t.faces,material:r?.material||null})],spatialReference:e.spatialReference}}function primitives_y(t){for(let e=0;e<t.position.length;e+=3)t.position[e+2]+=.5}function primitives_d(t,e,r){const n=(0,vertexSpaceConversion/* getUnitToSpatialReferenceScaleConversion */.xK)(e,r);if(null==t&&1===n)return null;if(null==t)return[n,n,n];if("number"==typeof t){const e=t*n;return[e,e,e]}return[null!=t.width?t.width*n:n,null!=t.depth?t.depth*n:n,null!=t.height?t.height*n:n]}function primitives_M(t,n){if(null!=n){S[0]=n[0],S[4]=n[1],S[8]=n[2];for(let r=0;r<t.position.length;r+=3){for(let e=0;e<3;e++)O[e]=t.position[r+e];(0,vec32.o)(O,O,S);for(let e=0;e<3;e++)t.position[r+e]=O[e]}if(n[0]!==n[1]||n[1]!==n[2]){S[0]=1/n[0],S[4]=1/n[1],S[8]=1/n[2];for(let n=0;n<t.normal.length;n+=3){for(let e=0;e<3;e++)O[e]=t.normal[n+e];(0,vec32.o)(O,O,S),(0,vec32.n)(O,O);for(let e=0;e<3;e++)t.normal[n+e]=O[e]}}}}const F={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},primitives_b={south:0,east:1,north:2,west:3,up:4,down:5},O=(0,vec3f64/* create */.vt)(),S=(0,mat3f64/* create */.vt)();

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat3.js
var mat3 = __webpack_require__(25423);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js
var mat4 = __webpack_require__(21742);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/math/quat.js
var quat = __webpack_require__(42927);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/quatf64.js
var quatf64 = __webpack_require__(38911);
;// ../node_modules/@arcgis/core/geometry/support/meshUtils/rotate.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const rotate_O=()=>Logger/* default */.A.getLogger("esri.geometry.support.meshUtils.rotate");function B(t,e,r){if(!t.vertexAttributes?.position||0===e[3])return;const{spatialReference:o,vertexSpace:i}=t,n=r?.origin??t.origin,s=r?.geographic,a=geographicUtils_t(rotate_O,i,o,s);(0,meshVertexSpaceUtils/* isMeshWithRelativeVertexSpace */.CK)(t)?G(t,e,n):a?H(t,e,n):I(t,e,n)}function G(t,e,r){t.transform??=new MeshTransform/* default */.A;const{vertexSpace:l,transform:c,spatialReference:f}=t,[u,x,h]=l.origin,R=new Point/* default */.A({x:u,y:x,z:h,spatialReference:f}),d=K;if(R.equals(r))(0,vec32.i)(d,0,0,0);else if(!(0,vertexSpaceConversion/* projectPointToVertexSpace */.p5)(d,r,t))return void (0,projection/* logProjectionError */.CN)(rotate_O(),r.spatialReference,f,projection/* loadProjectErrorMessage */.JP);(0,quat/* setAxisAngle */.x8)(Z,(0,axisAngleDegrees/* axis */.yo)(e),(0,axisAngleDegrees/* angleRad */.$I)(e));const S=(0,mat4/* fromRotationTranslationScaleOrigin */.O7)(N,Z,vec3f64/* ZEROS */.uY,vec3f64/* ONES */.Un,d),{localMatrix:U}=c,q=(0,mat4/* multiply */.lw)(N,S,U);c.scale=(0,mat4/* getScale */.X_)((0,vec3f64/* create */.vt)(),q),(0,mat4/* scale */.hs)(q,q,(0,vec32.r)(K,c.scale));const z=c.rotationAxis;c.rotation=(0,axisAngleDegrees/* fromMatrix */.ui)(q),0===c.rotationAngle&&(c.rotationAxis=z),c.translation=(0,mat4/* getTranslation */.sC)((0,vec3f64/* create */.vt)(),q)}function H(t,r,o){const i=t.spatialReference,n=(0,spatialReferenceEllipsoidUtils/* getSphericalPCPF */.lO)(i),s=Y;if(!(0,projectPointToVector/* projectPointToVector */.g)(o,s,n)&&((0,projection/* logProjectionError */.CN)(rotate_O(),o.spatialReference,n,"Falling back to mesh origin"),!(0,projectPointToVector/* projectPointToVector */.g)(t.origin,s,n)))return void (0,projection/* logProjectionError */.CN)(rotate_O(),t.origin.spatialReference,n);const a=t.vertexAttributes.position,l=t.vertexAttributes.normal,c=t.vertexAttributes.tangent,m=new Float64Array(a.length),f=null!=l?new Float32Array(l.length):null,p=null!=c?new Float32Array(c.length):null;(0,computeTranslationToOriginAndRotation/* computeTranslationToOriginAndRotation */.l)(n,s,W,n),(0,mat3/* fromMat4 */.z0)(X,W);const g=Q;(0,vec32.o)((0,axisAngleDegrees/* axis */.yo)(Q),(0,axisAngleDegrees/* axis */.yo)(r),X),g[3]=r[3],(0,projection/* projectToPCPF */.gr)(a,i,m,n)&&(null==l||null==f||(0,projection/* projectNormalToPCPF */.X4)(l,a,i,m,n,f))&&(null==c||null==p||(0,projection/* projectTangentToPCPF */.xA)(c,a,i,m,n,p))?(J(m,g,3,s),(0,projection/* projectFromPCPF */.$5)(m,n,a,i)&&(null==l||null==f||(J(f,g,3),(0,projection/* projectNormalFromPCPF */.si)(f,a,i,m,n,l)))&&(null==c||null==p||(J(p,g,4),(0,projection/* projectTangentFromPCPF */.Mv)(p,a,i,m,n,c)))?t.vertexAttributesChanged():(0,projection/* logProjectionError */.CN)(rotate_O(),n,i)):(0,projection/* logProjectionError */.CN)(rotate_O(),i,n)}function I(t,e,r){const o=Y;if(!(0,projectPointToVector/* projectPointToVector */.g)(r,o,t.spatialReference)){const e=t.origin;return o[0]=e.x,o[1]=e.y,o[2]=e.z,void (0,projection/* logProjectionError */.CN)(rotate_O(),r.spatialReference,t.spatialReference,projection/* loadProjectErrorMessage */.JP)}J(t.vertexAttributes.position,e,3,o),J(t.vertexAttributes.normal,e,3),J(t.vertexAttributes.tangent,e,4),t.vertexAttributesChanged()}function J(t,e,r,o=vec3f64/* ZEROS */.uY){if(null!=t){(0,mat4/* fromRotation */.$0)(W,(0,axisAngleDegrees/* angleRad */.$I)(e),(0,axisAngleDegrees/* axis */.yo)(e));for(let e=0;e<t.length;e+=r){for(let r=0;r<3;r++)K[r]=t[e+r]-o[r];(0,vec32.t)(K,K,W);for(let r=0;r<3;r++)t[e+r]=K[r]+o[r]}}}const K=(0,vec3f64/* create */.vt)(),N=(0,mat4f64/* create */.vt)(),Q=(0,axisAngleDegrees/* create */.vt)(),W=(0,mat4f64/* create */.vt)(),X=(0,mat3f64/* create */.vt)(),Y=(0,vec3f64/* create */.vt)(),Z=(0,quatf64/* create */.vt)();

;// ../node_modules/@arcgis/core/geometry/support/meshUtils/scale.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const k=()=>Logger/* default */.A.getLogger("esri.geometry.support.meshUtils.scale");function q(e,t,r){if(!e.vertexAttributes?.position)return;const{vertexSpace:o,spatialReference:i}=e,n=r?.origin??e.origin,s=r?.geographic,a=geographicUtils_t(k,o,i,s);(0,meshVertexSpaceUtils/* isMeshWithRelativeVertexSpace */.CK)(e)?z(e,t,n):a?L(e,t,n):scale_M(e,t,n)}function z(e,s,f){e.transform??=new MeshTransform/* default */.A;const{vertexSpace:u,transform:x,spatialReference:h}=e,[A,d,y]=u.origin,w=new Point/* default */.A({x:A,y:d,z:y,spatialReference:h}),F=scale_T;if(w.equals(f))(0,vec32.i)(F,0,0,0);else if(!(0,vertexSpaceConversion/* projectPointToVertexSpace */.p5)(F,f,e))return void (0,projection/* logProjectionError */.CN)(k(),f.spatialReference,h,projection/* loadProjectErrorMessage */.JP);const S=(0,vec32.i)(V,s,s,s),U=(0,mat4/* fromRotationTranslationScaleOrigin */.O7)(D,quatf64/* IDENTITY */.zK,vec3f64/* ZEROS */.uY,S,F),{localMatrix:q}=x,z=(0,mat4/* multiply */.lw)(D,U,q);x.scale=(0,mat4/* getScale */.X_)((0,vec3f64/* create */.vt)(),z),(0,mat4/* scale */.hs)(z,z,(0,vec32.r)(scale_T,x.scale));const L=x.rotationAxis;x.rotation=(0,axisAngleDegrees/* fromMatrix */.ui)(z),0===x.rotationAngle&&(x.rotationAxis=L),x.translation=(0,mat4/* getTranslation */.sC)((0,vec3f64/* create */.vt)(),z)}function L(e,t,r){const o=e.spatialReference,i=(0,spatialReferenceEllipsoidUtils/* getSphericalPCPF */.lO)(o),n=E;if(!(0,projectPointToVector/* projectPointToVector */.g)(r,n,i)&&((0,projection/* logProjectionError */.CN)(k(),r.spatialReference,i,"Falling back to mesh origin"),!(0,projectPointToVector/* projectPointToVector */.g)(e.origin,n,i)))return void (0,projection/* logProjectionError */.CN)(k(),e.origin.spatialReference,i);const s=e.vertexAttributes.position,a=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,c=new Float64Array(s.length),f=null!=a?new Float32Array(a.length):null,m=null!=l?new Float32Array(l.length):null;(0,projection/* projectToPCPF */.gr)(s,o,c,i)&&(null==a||null==f||(0,projection/* projectNormalToPCPF */.X4)(a,s,o,c,i,f))&&(null==l||null==m||(0,projection/* projectTangentToPCPF */.xA)(l,s,o,c,i,m))?(P(c,t,n),(0,projection/* projectFromPCPF */.$5)(c,i,s,o)&&(null==a||null==f||(0,projection/* projectNormalFromPCPF */.si)(f,s,o,c,i,a))&&(null==l||null==m||(0,projection/* projectTangentFromPCPF */.Mv)(m,s,o,c,i,l))?e.vertexAttributesChanged():(0,projection/* logProjectionError */.CN)(k(),i,o)):(0,projection/* logProjectionError */.CN)(k(),o,i)}function scale_M(e,t,r){const o=E;if(!(0,projectPointToVector/* projectPointToVector */.g)(r,o,e.spatialReference)){const t=e.origin;return o[0]=t.x,o[1]=t.y,o[2]=t.z,void (0,projection/* logProjectionError */.CN)(k(),r.spatialReference,e.spatialReference,projection/* loadProjectErrorMessage */.JP)}P(e.vertexAttributes.position,t,o),e.vertexAttributesChanged()}function P(e,t,r=vec3f64/* ZEROS */.uY){if(e)for(let o=0;o<e.length;o+=3){for(let t=0;t<3;t++)scale_T[t]=e[o+t]-r[t];(0,vec32.g)(scale_T,scale_T,t);for(let t=0;t<3;t++)e[o+t]=scale_T[t]+r[t]}}const scale_T=(0,vec3f64/* create */.vt)(),V=(0,vec3f64/* create */.vt)(),D=(0,mat4f64/* create */.vt)(),E=(0,vec3f64/* create */.vt)();

;// ../node_modules/@arcgis/core/geometry/Mesh.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var Mesh_H;const Mesh_K={base:null,key:"type",defaultKeyValue:"georeferenced",typeMap:{georeferenced:MeshGeoreferencedVertexSpace/* default */.A,local:MeshLocalVertexSpace/* default */.A}};let Mesh_q=Mesh_H=class extends(Loadable/* default */.A.LoadableMixin(core_Promise/* default */.A.EsriPromiseMixin(Geometry/* default */.A))){constructor(e){super(e),this.components=null,this.vertexSpace=new MeshGeoreferencedVertexSpace/* default */.A,this.transform=null,this.metadata=new Metadata_a,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new MeshVertexAttributes/* MeshVertexAttributes */.H,this.type="mesh"}initialize(){(0===this.metadata.externalSources.length||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when((()=>{this.addHandles((0,reactiveUtils/* watch */.wB)((()=>({vertexAttributes:this.vertexAttributes,components:this.components?.map((e=>e.clone()))})),(()=>this._clearSources()),{once:!0,sync:!0}))}))}get hasExtent(){return this.loaded?this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0):null!=this.metadata.displaySource?.extent}get _transformedExtent(){const{spatialReference:e,vertexSpace:t}=this,r=this;return l({get transform(){return r.transform},vertexSpace:t,spatialReference:e,untransformedBounds:this._untransformedBounds})}get _untransformedBounds(){const{vertexAttributes:{position:e},components:t}=this;return 0===e.length||0===t?.length?(0,aaBoundingBox/* create */.vt)(aaBoundingBox/* zero */.v_):(0,aaBoundingBox/* fromBuffer */.vY)(e)}get origin(){const e=(0,meshVertexSpaceUtils/* vertexSpaceOriginToPoint */.MW)(this.vertexSpace,this.spatialReference);if(null!=e)return e;const{center:t,zmin:r}=this._transformedExtent;return new Point/* default */.A({x:t.x,y:t.y,z:r,spatialReference:this.spatialReference})}get extent(){return this.loaded||null==this.metadata?.displaySource?.extent?this._transformedExtent:this.metadata.displaySource.extent.clone()}addComponent(e){this._checkIfLoaded("addComponent()")&&(this.components||(this.components=[]),this.components.push(MeshComponent/* default */.A.from(e)),this.notifyChange("components"))}removeComponent(e){if(this._checkIfLoaded("removeComponent()")){if(this.components){const t=this.components.indexOf(e);if(-1!==t)return this.components.splice(t,1),void this.notifyChange("components")}Logger/* default */.A.getLogger(this).error("removeComponent()",meshErrors_e)}}rotate(e,t,r,o){return (0,axisAngleDegrees/* composeAxes */.AU)(e,t,r,Mesh_J),B(this,Mesh_J,o),this}offset(e,t,r){if(!this._checkIfLoaded("offset()"))return this;const{vertexSpace:o,vertexAttributes:s}=this,n=s?.position;if(!n)return this;if((0,meshVertexSpaceUtils/* isRelativeVertexSpace */.Hq)(o)){const[s,n,i]=o.origin;o.origin=(0,vec3f64/* fromValues */.fA)(s+e,n+t,i+r)}else{for(let o=0;o<n.length;o+=3)n[o]+=e,n[o+1]+=t,n[o+2]+=r;this.vertexAttributesChanged()}return this}scale(e,t){return this._checkIfLoaded("scale()")?(q(this,e,t),this):this}centerAt(e,t){return this._checkIfLoaded("centerAt()")?(u(this,e,t),this):this}load(e){const{metadata:{displaySource:t}}=this;return t&&this.addResolvingPromise(loadExternal_u(this,t,e)),Promise.resolve(this)}addExternalSources(e){this.metadata.externalSources.addMany(e)}updateDisplaySource(e){this.metadata.displaySource=e}clone(){return this.cloneAndModifyVertexAttributes(this.vertexAttributes.clone(),this.vertexSpace.clone(),{preserveMetadata:!0})}cloneAndModifyVertexAttributes(e,t,r){let o=null;if(this.components){const e=new Map,t=new Map;o=this.components.map((r=>r.cloneWithDeduplication(e,t)))}const s={components:o,spatialReference:this.spatialReference,vertexAttributes:e,vertexSpace:t,transform:this.transform?.clone()??null,metadata:r?.preserveMetadata?this.metadata.clone():new Metadata_a};return new Mesh_H(s)}cloneShallow(){return new Mesh_H({components:this.components,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes,vertexSpace:this.vertexSpace.clone(),transform:this.transform,metadata:this.metadata})}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(e){const[{toBinaryGLTF:t}]=await Promise.all([__webpack_require__.e(/* import() */ 2110).then(__webpack_require__.bind(__webpack_require__, 2110)),this.load(e)]);return (0,promiseUtils/* throwIfAborted */.Te)(e),await t(this,e)}get usedMemory(){return this.components?this.components.reduce(((e,t)=>e+t.memoryUsage),this.vertexAttributes.usedMemory):this.vertexAttributes.usedMemory}_clearSources(){this.metadata.clearSources()}_checkIfLoaded(e){return!!this.loaded||(Logger/* default */.A.getLogger(this).error(e,t),!1)}static createBox(e,t){if(!(e instanceof Point/* default */.A))return Logger/* default */.A.getLogger(this.prototype).error(".createBox()",meshErrors_s),null;const r=new Mesh_H(primitives_x(c(),e,t));return t?.imageFace&&"all"!==t.imageFace?primitives_f(r,t.imageFace):r}static createSphere(e,t){return e instanceof Point/* default */.A?new Mesh_H(primitives_x(primitives_u(t?.densificationFactor||0),e,t)):(Logger/* default */.A.getLogger(this.prototype).error(".createSphere()",meshErrors_s),null)}static createCylinder(e,t){return e instanceof Point/* default */.A?new Mesh_H(primitives_x(primitives_h(t?.densificationFactor||0),e,t)):(Logger/* default */.A.getLogger(this.prototype).error(".createCylinder()",meshErrors_s),null)}static createPlane(e,t){if(!(e instanceof Point/* default */.A))return Logger/* default */.A.getLogger(this.prototype).error(".createPlane()",meshErrors_s),null;const r=t?.facing??"up",s=primitives_p(r,t?.size);return new Mesh_H(primitives_x(primitives_m(r),e,{...t,size:s}))}static createFromPolygon(e,t){if(!(e instanceof Polygon/* default */.A))return Logger/* default */.A.getLogger(this.prototype).error(".createFromPolygon()",n),null;const r=(0,triangulationUtils/* triangulate */.lO)(e);return new Mesh_H({vertexAttributes:new MeshVertexAttributes/* MeshVertexAttributes */.H({position:r.position}),components:[new MeshComponent/* default */.A({faces:r.faces,shading:"flat",material:t?.material??null})],spatialReference:e.spatialReference,vertexSpace:new MeshGeoreferencedVertexSpace/* default */.A})}static async createFromGLTF(e,t,r){if(!(e instanceof Point/* default */.A)){const e=new i;throw Logger/* default */.A.getLogger(this.prototype).error(".createfromGLTF()",e.message),e}const{loadGLTFMesh:s}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 88614).then(__webpack_require__.bind(__webpack_require__, 88614)),r);return new Mesh_H(await s(e,t,r))}static createWithExternalSource(e,t,r){const o=r?.extent??null,{spatialReference:s}=e,n=r?.transform?.clone()??new MeshTransform/* default */.A,i=(0,meshVertexSpaceUtils/* selectVertexSpace */.TE)(e,r),a=r?.unitConversionDisabled,p={source:t,extent:o,unitConversionDisabled:a},c=new Metadata_a;return c.externalSources.push(p),new Mesh_H({metadata:c,transform:n,vertexSpace:i,spatialReference:s})}static createIncomplete(e,r){const{spatialReference:o}=e,s=r?.transform?.clone()??new MeshTransform/* default */.A,n=(0,meshVertexSpaceUtils/* selectVertexSpace */.TE)(e,r),i=new Mesh_H({transform:s,vertexSpace:n,spatialReference:o});return i.addResolvingPromise(Promise.reject(new core_Error/* default */.A("mesh-incomplete","Mesh resources are not complete"))),i}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[MeshComponent/* default */.A],json:{write:!0}})],Mesh_q.prototype,"components",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({nonNullable:!0,types:Mesh_K,constructOnly:!0,json:{write:!0}})],Mesh_q.prototype,"vertexSpace",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:MeshTransform/* default */.A,json:{write:!0}})],Mesh_q.prototype,"transform",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],Mesh_q.prototype,"metadata",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],Mesh_q.prototype,"hasExtent",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],Mesh_q.prototype,"_transformedExtent",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],Mesh_q.prototype,"_untransformedBounds",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],Mesh_q.prototype,"origin",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],Mesh_q.prototype,"extent",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1,write:!0,default:!0}})],Mesh_q.prototype,"hasZ",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1,write:!0,default:!1}})],Mesh_q.prototype,"hasM",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:MeshVertexAttributes/* MeshVertexAttributes */.H,nonNullable:!0,json:{write:!0}})],Mesh_q.prototype,"vertexAttributes",void 0),Mesh_q=Mesh_H=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.geometry.Mesh")],Mesh_q);const Mesh_J=(0,axisAngleDegrees/* create */.vt)();


/***/ }),

/***/ 42965:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dg: () => (/* binding */ e),
/* harmony export */   EH: () => (/* binding */ U),
/* harmony export */   JH: () => (/* binding */ a),
/* harmony export */   my: () => (/* binding */ f),
/* harmony export */   tM: () => (/* binding */ A),
/* harmony export */   uW: () => (/* binding */ t)
/* harmony export */ });
/* unused harmony export pruneIndexArrays */
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86942);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(r){return e(r,!0)}function e(t,e){if(Array.isArray(t)){if(t.length<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9)return t}else if(t.length<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9)return Array.from(t);let f=!0,a=!0;return t.some(((r,n)=>(f=f&&0===r,a=a&&r===n,!f&&!a))),f?U(t.length):a?A(t.length):(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedArray */ .iu)(t)&&t.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT?t:i(t,!e)}function i(r,t){for(const e of r){if(e>=65536)return (0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedArray */ .iu)(r)?r:new Uint32Array(r);e>=256&&(t=!1)}return t?new Uint8Array(r):new Uint16Array(r)}function f(n){return n<=_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9?new Array(n):n<=65536?new Uint16Array(n):new Uint32Array(n)}function a(n){return n<=_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9?new Array(n):new Uint32Array(n)}let u=l(131072);const o=[0],y=(()=>{const r=new Uint16Array(65536);for(let n=0;n<r.length;++n)r[n]=n;return r})();function A(n){return 1===n?o:n<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9?Array.from(new Uint16Array(y.buffer,0,n)):n<y.length?new Uint16Array(y.buffer,0,n):(n>u.length&&(u=l(Math.max(2*u.length,n))),new Uint32Array(u.buffer,0,n))}function l(r){const n=new Uint32Array(r);for(let t=0;t<n.length;t++)n[t]=t;return n}let w=new Uint8Array(65536);function U(n){if(1===n)return o;if(n<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9)return new Array(n).fill(0);if(n>w.length){const r=Math.max(2*w.length,n);w=new Uint8Array(r)}return new Uint8Array(w.buffer,0,n)}function c(){u=l(131072),w=new Uint8Array(65536)}


/***/ }),

/***/ 21104:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19251);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(539);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4130);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73446);
/* harmony import */ var _MeshMaterial_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78118);
/* harmony import */ var _MeshMaterialMetallicRoughness_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93413);
/* harmony import */ var _meshProperties_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(67082);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var u;let h=u=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{static from(t){return (0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__/* .ensureClass */ .PZ)(u,t)}constructor(t){super(t),this.faces=null,this.material=null,this.name=void 0,this.shading="source",this.trustSourceNormals=!1}castFaces(t){return (0,_meshProperties_js__WEBPACK_IMPORTED_MODULE_10__/* .castArray */ .b)(t,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.getLogger(this))}castMaterial(t){return (0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__/* .ensureClass */ .PZ)(t&&"object"==typeof t&&("metallic"in t||"roughness"in t||"metallicRoughnessTexture"in t)?_MeshMaterialMetallicRoughness_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A:_MeshMaterial_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,t)}clone(){return new u({faces:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.faces),shading:this.shading,material:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.material),trustSourceNormals:this.trustSourceNormals,name:this.name})}cloneWithDeduplication(t,r){const s={faces:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(t,r):null,trustSourceNormals:this.trustSourceNormals,name:this.name};return new u(s)}get memoryUsage(){let t=0;return null!=this.faces&&(t+=this.faces.byteLength),null!=this.material&&(t+=this.material.memoryUsage),t}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:_meshProperties_js__WEBPACK_IMPORTED_MODULE_10__/* .writeTypedArray */ .B}})],h.prototype,"faces",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__/* .cast */ .w)("faces")],h.prototype,"castFaces",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:_MeshMaterial_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,json:{write:!0}})],h.prototype,"material",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__/* .cast */ .w)("material")],h.prototype,"castMaterial",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:!0}})],h.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:!0}})],h.prototype,"shading",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Boolean})],h.prototype,"trustSourceNormals",void 0),h=u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.geometry.support.MeshComponent")],h);


/***/ }),

/***/ 97557:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24793);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var c;let i=class extends(_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.ClonableMixin(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)){static{c=this}constructor(e){super(e),this.type="georeferenced",this.origin=null}static{this.absolute=new c}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__/* .enumeration */ .e)({georeferenced:"georeferenced"},{readOnly:!0})],i.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[Number],nonNullable:!1,json:{write:!0}})],i.prototype,"origin",void 0),i=c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.geometry.support.MeshGeoreferencedVertexSpace")],i);


/***/ }),

/***/ 99218:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24793);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63863);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58359);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let i=class extends(_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.ClonableMixin(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)){constructor(o){super(o),this.type="local",this.origin=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__/* .create */ .vt)()}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__/* .enumeration */ .e)({local:"local"},{readOnly:!0})],i.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],i.prototype,"origin",void 0),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.geometry.support.MeshLocalVertexSpace")],i);


/***/ }),

/***/ 78118:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96220);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63863);
/* harmony import */ var _MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34804);
/* harmony import */ var _MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(94578);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var n;let u=n=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A{constructor(o){super(o),this.color=null,this.colorTexture=null,this.colorTextureTransform=null,this.normalTexture=void 0,this.normalTextureTransform=void 0,this.alphaMode="auto",this.alphaCutoff=.5,this.doubleSided=!0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(o,r){const e=null!=o?o.get(this):null;if(e)return e;const t=new n(this.clonePropertiesWithDeduplication(r));return null!=o&&o.set(this,t),t}clonePropertiesWithDeduplication(o){return{color:null!=this.color?this.color.clone():null,colorTexture:this.colorTexture?.cloneWithDeduplication(o),normalTexture:this.normalTexture?.cloneWithDeduplication(o),alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided,colorTextureTransform:this.colorTextureTransform?.clone(),normalTextureTransform:this.normalTextureTransform?.clone()}}get memoryUsage(){return this.getMemoryUsage()}getMemoryUsage(){let o=0;return o+=null!=this.color?16:0,null!=this.colorTexture&&(o+=this.colorTexture.memoryUsage),o+=null!=this.colorTextureTransform?20:0,null!=this.normalTexture&&(o+=this.normalTexture.memoryUsage),o+=null!=this.normalTextureTransform?20:0,o}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"color",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"colorTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"colorTextureTransform",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"normalTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"normalTextureTransform",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({nonNullable:!0,json:{write:!0}})],u.prototype,"alphaMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({nonNullable:!0,json:{write:!0}})],u.prototype,"alphaCutoff",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({nonNullable:!0,json:{write:!0}})],u.prototype,"doubleSided",void 0),u=n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.geometry.support.MeshMaterial")],u);


/***/ }),

/***/ 93413:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96220);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _MeshMaterial_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78118);
/* harmony import */ var _MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34804);
/* harmony import */ var _MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(94578);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var n;let u=n=class extends _MeshMaterial_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A{constructor(e){super(e),this.emissiveColor=null,this.emissiveTexture=null,this.emissiveTextureTransform=void 0,this.occlusionTexture=null,this.occlusionTextureTransform=void 0,this.metallic=1,this.roughness=1,this.metallicRoughnessTexture=null,this.metallicRoughnessTextureTransform=void 0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,s){const o=null!=e?e.get(this):null;if(o)return o;const t=new n(this.clonePropertiesWithDeduplication(s));return null!=e&&e.set(this,t),t}getMemoryUsage(){let e=super.getMemoryUsage();return e+=null!=this.emissiveColor?16:0,null!=this.emissiveTexture&&(e+=this.emissiveTexture.memoryUsage),e+=null!=this.emissiveTextureTransform?20:0,null!=this.occlusionTexture&&(e+=this.occlusionTexture.memoryUsage),e+=null!=this.occlusionTextureTransform?20:0,null!=this.metallicRoughnessTexture&&(e+=this.metallicRoughnessTexture.memoryUsage),e+=null!=this.metallicRoughnessTextureTransform?20:0,e}clonePropertiesWithDeduplication(e){return{...super.clonePropertiesWithDeduplication(e),emissiveColor:this.emissiveColor?.clone(),emissiveTexture:this.emissiveTexture?.cloneWithDeduplication(e),emissiveTextureTransform:this.emissiveTextureTransform?.clone(),occlusionTexture:this.occlusionTexture?.cloneWithDeduplication(e),occlusionTextureTransform:this.occlusionTextureTransform?.clone(),metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:this.metallicRoughnessTexture?.cloneWithDeduplication(e),metallicRoughnessTextureTransform:this.metallicRoughnessTextureTransform?.clone()}}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"emissiveColor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"emissiveTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"emissiveTextureTransform",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"occlusionTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"occlusionTextureTransform",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],u.prototype,"metallic",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],u.prototype,"roughness",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"metallicRoughnessTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"metallicRoughnessTextureTransform",void 0),u=n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.geometry.support.MeshMaterialMetallicRoughness")],u);


/***/ }),

/***/ 34804:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39831);
/* harmony import */ var _core_imageUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25801);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73446);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75094);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(77542);
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(63680);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var p;const h=new WeakMap;let d=0,u=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A{static{p=this}constructor(t){super(t),this.wrap="repeat"}get url(){return this._get("url")||null}set url(t){this._set("url",t),t&&this._set("data",null)}get data(){return this._get("data")||null}set data(t){this._set("data",t),t&&this._set("url",null)}writeData(t,e,a,r){if(t instanceof HTMLImageElement){const s={type:"image-element",src:(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_10__.t)(t.src,r),crossOrigin:t.crossOrigin};e[a]=s}else if(t instanceof HTMLCanvasElement){const r={type:"canvas-element",imageData:m(t.getContext("2d").getImageData(0,0,t.width,t.height))};e[a]=r}else if(t instanceof HTMLVideoElement){const s={type:"video-element",src:(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_10__.t)(t.src,r),autoplay:t.autoplay,loop:t.loop,muted:t.muted,crossOrigin:t.crossOrigin,preload:t.preload};e[a]=s}else if(t instanceof ImageData){const r={type:"image-data",imageData:m(t)};e[a]=r}}readData(t){switch(t.type){case"image-element":{const e=new Image;return e.src=t.src,e.crossOrigin=t.crossOrigin,e}case"canvas-element":{const e=g(t.imageData),a=document.createElement("canvas");return a.width=e.width,a.height=e.height,a.getContext("2d").putImageData(e,0,0),a}case"image-data":return g(t.imageData);case"video-element":{const e=document.createElement("video");return e.src=t.src,e.crossOrigin=t.crossOrigin,e.autoplay=t.autoplay,e.loop=t.loop,e.muted=t.muted,e.preload=t.preload,e}default:return}}get transparent(){const{data:t,url:e}=this,a=t=>t?.toLowerCase().endsWith(".png")||t?.toLocaleLowerCase().startsWith("data:image/png;");return t instanceof HTMLCanvasElement?f(t.getContext("2d").getImageData(0,0,t.width,t.height)):t instanceof ImageData?f(t):!(!e||!a(e))||!!(t instanceof HTMLImageElement&&a(t.src))}set transparent(t){this._overrideIfSome("transparent",t)}get contentHash(){const t="string"==typeof this.wrap?this.wrap:"object"==typeof this.wrap?`${this.wrap.horizontal}/${this.wrap.vertical}`:"",e=(e="")=>`d:${e},t:${this.transparent},w:${t}`;return null!=this.url?e(this.url):null!=this.data?this.data instanceof HTMLImageElement||this.data instanceof HTMLVideoElement?e(this.data.src):(h.has(this.data)||h.set(this.data,++d),e(h.get(this.data))):e()}get memoryUsage(){let t=0;if(t+=null!=this.url?this.url.length:0,null!=this.data){const e=this.data;"data"in e?t+=e.data.byteLength:e instanceof HTMLImageElement?t+=e.naturalWidth*e.naturalHeight*3:e instanceof HTMLCanvasElement&&(t+=e.width*e.height*3)}return t}clone(){const t={url:this.url,data:this.data,transparent:this.transparent,wrap:this._cloneWrap()};return new p(t)}cloneWithDeduplication(t){const e=t.get(this);if(e)return e;const a=this.clone();return t.set(this,a),a}_cloneWrap(){return"string"==typeof this.wrap?this.wrap:{horizontal:this.wrap.horizontal,vertical:this.wrap.vertical}}static from(t){return"string"==typeof t?new p({url:t}):t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof ImageData||t instanceof HTMLVideoElement?new p({data:t}):(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__/* .ensureClass */ .PZ)(p,t)}};function m(t){let e="";for(let a=0;a<t.data.length;a++)e+=String.fromCharCode(t.data[a]);return{data:btoa(e),width:t.width,height:t.height}}function g(t){const a=atob(t.data),r=new Uint8ClampedArray(a.length);for(let e=0;e<a.length;e++)r[e]=a.charCodeAt(e);return (0,_core_imageUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .wrapImageData */ .eV)(r,t.width,t.height)}function f(t){for(let e=3;e<t.data.length;e+=4)if(255!==t.data[e])return!0;return!1}(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_10__.w}})],u.prototype,"url",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:{overridePolicy(){return{enabled:!this.url}}}}}),(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)()],u.prototype,"data",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__/* .writer */ .K)("data")],u.prototype,"writeData",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__/* .reader */ .w)("data")],u.prototype,"readData",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Boolean,json:{write:{overridePolicy(){return{enabled:this._isOverridden("transparent")}}}}})],u.prototype,"transparent",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:!0}})],u.prototype,"wrap",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({readOnly:!0})],u.prototype,"contentHash",null),u=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.geometry.support.MeshTexture")],u);


/***/ }),

/***/ 94578:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24793);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let p=class extends(_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.ClonableMixin(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)){constructor(o){super(o),this.offset=[0,0],this.rotation=0,this.scale=[1,1]}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"offset",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"rotation",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"scale",void 0),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.geometry.support.MeshTextureTransform")],p);


/***/ }),

/***/ 29796:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19251);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(539);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4130);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _meshProperties_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67082);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var g;let p=g=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(t){super(t),this.color=null,this.position=new Float64Array(0),this.uv=null,this.normal=null,this.tangent=null}castColor(t){return (0,_meshProperties_js__WEBPACK_IMPORTED_MODULE_7__/* .castArray */ .b)(t,Uint8Array,[Uint8ClampedArray],{loggerTag:".color=",stride:4},_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.getLogger(this))}castPosition(t){t&&t instanceof Float32Array&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.getLogger(this).warn(".position=","Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array");return (0,_meshProperties_js__WEBPACK_IMPORTED_MODULE_7__/* .castArray */ .b)(t,Float64Array,[Float32Array],{loggerTag:".position=",stride:3},_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.getLogger(this))}castUv(t){return (0,_meshProperties_js__WEBPACK_IMPORTED_MODULE_7__/* .castArray */ .b)(t,Float32Array,[Float64Array],{loggerTag:".uv=",stride:2},_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.getLogger(this))}castNormal(t){return (0,_meshProperties_js__WEBPACK_IMPORTED_MODULE_7__/* .castArray */ .b)(t,Float32Array,[Float64Array],{loggerTag:".normal=",stride:3},_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.getLogger(this))}castTangent(t){return (0,_meshProperties_js__WEBPACK_IMPORTED_MODULE_7__/* .castArray */ .b)(t,Float32Array,[Float64Array],{loggerTag:".tangent=",stride:4},_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.getLogger(this))}clone(){const t={position:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.position),uv:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.uv),normal:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.normal),tangent:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.tangent),color:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.color)};return new g(t)}clonePositional(){const t={position:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.position),normal:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.normal),tangent:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.tangent),uv:this.uv,color:this.color};return new g(t)}get usedMemory(){return this.position.byteLength+(this.uv?.byteLength??0)+(this.normal?.byteLength??0)+(this.tangent?.byteLength??0)+(this.color?.byteLength??0)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:_meshProperties_js__WEBPACK_IMPORTED_MODULE_7__/* .writeTypedArray */ .B}})],p.prototype,"color",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__/* .cast */ .w)("color")],p.prototype,"castColor",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({nonNullable:!0,json:{write:_meshProperties_js__WEBPACK_IMPORTED_MODULE_7__/* .writeTypedArray */ .B}})],p.prototype,"position",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__/* .cast */ .w)("position")],p.prototype,"castPosition",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:_meshProperties_js__WEBPACK_IMPORTED_MODULE_7__/* .writeTypedArray */ .B}})],p.prototype,"uv",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__/* .cast */ .w)("uv")],p.prototype,"castUv",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:_meshProperties_js__WEBPACK_IMPORTED_MODULE_7__/* .writeTypedArray */ .B}})],p.prototype,"normal",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__/* .cast */ .w)("normal")],p.prototype,"castNormal",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:_meshProperties_js__WEBPACK_IMPORTED_MODULE_7__/* .writeTypedArray */ .B}})],p.prototype,"tangent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__/* .cast */ .w)("tangent")],p.prototype,"castTangent",null),p=g=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.geometry.support.MeshVertexAttributes")],p);


/***/ }),

/***/ 57813:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y$: () => (/* binding */ f),
  XW: () => (/* binding */ a),
  qB: () => (/* binding */ B),
  Qt: () => (/* binding */ H),
  My: () => (/* binding */ P),
  bf: () => (/* binding */ z),
  jZ: () => (/* binding */ d),
  j0: () => (/* binding */ x),
  Sx: () => (/* binding */ E),
  E$: () => (/* binding */ A),
  h: () => (/* binding */ w),
  P: () => (/* binding */ v),
  SL: () => (/* binding */ I),
  gH: () => (/* binding */ y),
  ZD: () => (/* binding */ p),
  si: () => (/* binding */ b),
  mJ: () => (/* binding */ J),
  UL: () => (/* binding */ Q),
  D6: () => (/* binding */ C),
  Yi: () => (/* binding */ L),
  An: () => (/* binding */ S),
  LC: () => (/* binding */ j),
  xs: () => (/* binding */ o),
  EC: () => (/* binding */ h),
  Xm: () => (/* binding */ U),
  Vp: () => (/* binding */ K),
  zD: () => (/* binding */ R),
  m8: () => (/* binding */ D),
  nS: () => (/* binding */ V),
  H$: () => (/* binding */ k),
  eI: () => (/* binding */ O),
  Eq: () => (/* binding */ T),
  jz: () => (/* binding */ m),
  Aj: () => (/* binding */ F),
  E7: () => (/* binding */ N),
  Y4: () => (/* binding */ W),
  TX: () => (/* binding */ G),
  Uz: () => (/* binding */ M),
  ml: () => (/* binding */ q),
  XP: () => (/* binding */ g)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/float16.js
var float16 = __webpack_require__(11449);
;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Mat3.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class t{static{this.ElementCount=9}constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.elementCount=9;const i=this.TypedArrayConstructor;void 0===f&&(f=9*i.BYTES_PER_ELEMENT);const d=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,d):new i(e,d,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<9;f++)e[f]=this.typedBuffer[r++];return e}setMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<9;f++)this.typedBuffer[r++]=e[f]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,d=r*e.typedBufferStride;for(let u=0;u<9;++u)f[i++]=s[d++]}get buffer(){return this.typedBuffer.buffer}}

;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Mat4.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Mat4_t{static{this.ElementCount=16}constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.elementCount=16;const i=this.TypedArrayConstructor;void 0===f&&(f=16*i.BYTES_PER_ELEMENT);const d=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,d):new i(e,d,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<16;f++)e[f]=this.typedBuffer[r++];return e}setMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<16;f++)this.typedBuffer[r++]=e[f]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}copyFrom(t,e,r){this.copyFromTypedBuffer(t,e.typedBuffer,r*e.typedBufferStride)}copyFromTypedBuffer(t,e,r){const f=this.typedBuffer;let s=t*this.typedBufferStride;for(let i=0;i<16;++i)f[s++]=e[r++]}get buffer(){return this.typedBuffer.buffer}}

;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Scalar.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Scalar_t{static{this.ElementCount=1}constructor(t,e,r=0,s,i){this.TypedArrayConstructor=t,this.elementCount=1;const f=this.TypedArrayConstructor;void 0===s&&(s=f.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==i?new f(e,u):new f(e,u,(i-r)/f.BYTES_PER_ELEMENT),this.stride=s,this.typedBufferStride=s/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride)}sliceBuffer(t,e,r=this.count-e){const s=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,s,this.stride,s+r*this.stride)}get(t){return this.typedBuffer[t*this.typedBufferStride]}set(t,e){this.typedBuffer[t*this.typedBufferStride]=e}get buffer(){return this.typedBuffer.buffer}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/math/vec2.js
var vec2 = __webpack_require__(60704);
;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Vec2.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class e{static{this.ElementCount=2}constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.start=r,this.elementCount=2;const i=this.TypedArrayConstructor;void 0===f&&(f=2*i.BYTES_PER_ELEMENT);const d=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,d):new i(e,d,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getVec(e,r){return e*=this.typedBufferStride,(0,vec2/* set */.hZ)(r,this.typedBuffer[e],this.typedBuffer[e+1])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t]=e[1]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t]=r}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,d=r*e.typedBufferStride;f[i++]=s[d++],f[i]=s[d]}get buffer(){return this.typedBuffer.buffer}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(24121);
;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Vec3.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Vec3_e{static{this.ElementCount=3}constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.elementCount=3;const i=this.TypedArrayConstructor;void 0===f&&(f=3*i.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,u):new i(e,u,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getVec(e,r){return e*=this.typedBufferStride,(0,vec32.i)(r,this.typedBuffer[e],this.typedBuffer[e+1],this.typedBuffer[e+2])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t++]=e[1],this.typedBuffer[t]=e[2]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r,f){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t++]=r,this.typedBuffer[t]=f}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,u=r*e.typedBufferStride;f[i++]=s[u++],f[i++]=s[u++],f[i]=s[u]}get buffer(){return this.typedBuffer.buffer}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec42.js
var vec42 = __webpack_require__(2662);
;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Vec4.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Vec4_e{static{this.ElementCount=4}constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.start=r,this.elementCount=4;const i=this.TypedArrayConstructor;void 0===f&&(f=4*i.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,u):new i(e,u,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getVec(e,r){return e*=this.typedBufferStride,(0,vec42.s)(r,this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t++]=e[1],this.typedBuffer[t++]=e[2],this.typedBuffer[t]=e[3]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r,f,s){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t++]=r,this.typedBuffer[t++]=f,this.typedBuffer[t]=s}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,u=r*e.typedBufferStride;f[i++]=s[u++],f[i++]=s[u++],f[i++]=s[u++],f[i]=s[u]}get buffer(){return this.typedBuffer.buffer}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js
var Util = __webpack_require__(58947);
;// ../node_modules/@arcgis/core/geometry/support/buffer/BufferView.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class a extends Scalar_t{constructor(s,r=0,i,n){(0,Util/* assert */.vA)(float16/* hasNativeFloat16Array */.SX),super((0,float16/* getFloat16ArrayConstructor */.pX)(),s,r,i,n),this.elementType="f16"}static{this.ElementType="f16"}}class f extends Scalar_t{constructor(e,t=0,s,r){super(Float32Array,e,t,s,r),this.elementType="f32"}static{this.ElementType="f32"}}class p extends e{constructor(s,r=0,i,n){(0,Util/* assert */.vA)(float16/* hasNativeFloat16Array */.SX),super((0,float16/* getFloat16ArrayConstructor */.pX)(),s,r,i,n),this.elementType="f16"}slice(e,t){return this.sliceBuffer(p,e,t)}static{this.ElementType="f16"}}class y extends e{constructor(e,t=0,s,r){super(Float32Array,e,t,s,r),this.elementType="f32"}slice(e,t){return this.sliceBuffer(y,e,t)}static{this.ElementType="f32"}}class h extends Vec3_e{constructor(s,r=0,i,n){(0,Util/* assert */.vA)(float16/* hasNativeFloat16Array */.SX),super((0,float16/* getFloat16ArrayConstructor */.pX)(),s,r,i,n),this.elementType="f16"}slice(e,t){return this.sliceBuffer(h,e,t)}static{this.ElementType="f16"}}class o extends Vec3_e{constructor(e,t=0,s,r){super(Float32Array,e,t,s,r),this.elementType="f32"}slice(e,t){return this.sliceBuffer(o,e,t)}static fromTypedArray(e,t){return new o(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}static{this.ElementType="f32"}}class m extends Vec4_e{constructor(s,r=0,i,n){(0,Util/* assert */.vA)(float16/* hasNativeFloat16Array */.SX),super((0,float16/* getFloat16ArrayConstructor */.pX)(),s,r,i,n),this.elementType="f16"}slice(e,t){return this.sliceBuffer(m,e,t)}static{this.ElementType="f16"}}class T extends Vec4_e{constructor(e,t=0,s,r){super(Float32Array,e,t,s,r),this.elementType="f32"}slice(e,t){return this.sliceBuffer(T,e,t)}static{this.ElementType="f32"}}class d extends t{constructor(e,t=0,s,r){super(Float32Array,e,t,s,r),this.elementType="f32"}slice(e,t){return this.sliceBuffer(d,e,t)}static{this.ElementType="f32"}}class x extends t{constructor(e,t=0,s,r){super(Float64Array,e,t,s,r),this.elementType="f64"}slice(e,t){return this.sliceBuffer(x,e,t)}static{this.ElementType="f64"}}class E extends Mat4_t{constructor(e,t=0,s,r){super(Float32Array,e,t,s,r),this.elementType="f32"}slice(e,t){return this.sliceBuffer(E,e,t)}static{this.ElementType="f32"}}class A extends Mat4_t{constructor(e,t=0,s,r){super(Float64Array,e,t,s,r),this.elementType="f64"}slice(e,t){return this.sliceBuffer(A,e,t)}static{this.ElementType="f64"}}class B extends Scalar_t{constructor(e,t=0,s,r){super(Float64Array,e,t,s,r),this.elementType="f64"}slice(e,t){return this.sliceBuffer(B,e,t)}static{this.ElementType="f64"}}class b extends e{constructor(e,t=0,s,r){super(Float64Array,e,t,s,r),this.elementType="f64"}slice(e,t){return this.sliceBuffer(b,e,t)}static{this.ElementType="f64"}}class U extends Vec3_e{constructor(e,t=0,s,r){super(Float64Array,e,t,s,r),this.elementType="f64"}slice(e,t){return this.sliceBuffer(U,e,t)}static fromTypedArray(e,t){return new U(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}static{this.ElementType="f64"}}class F extends Vec4_e{constructor(e,t=0,s,r){super(Float64Array,e,t,s,r),this.elementType="f64"}slice(e,t){return this.sliceBuffer(F,e,t)}static{this.ElementType="f64"}}class I extends Scalar_t{constructor(e,t=0,s,r){super(Uint8Array,e,t,s,r),this.elementType="u8"}slice(e,t){return this.sliceBuffer(I,e,t)}static{this.ElementType="u8"}}class j extends e{constructor(e,t=0,s,r){super(Uint8Array,e,t,s,r),this.elementType="u8"}slice(e,t){return this.sliceBuffer(j,e,t)}static{this.ElementType="u8"}}class O extends Vec3_e{constructor(e,t=0,s,r){super(Uint8Array,e,t,s,r),this.elementType="u8"}slice(e,t){return this.sliceBuffer(O,e,t)}static fromTypedArray(e,t){return new O(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}static{this.ElementType="u8"}}class g extends Vec4_e{constructor(e,t=0,s,r){super(Uint8Array,e,t,s,r),this.elementType="u8"}slice(e,t){return this.sliceBuffer(g,e,t)}static{this.ElementType="u8"}}class w extends Scalar_t{constructor(e,t=0,s,r){super(Uint16Array,e,t,s,r),this.elementType="u16"}slice(e,t){return this.sliceBuffer(w,e,t)}static{this.ElementType="u16"}}class L extends e{constructor(e,t=0,s,r){super(Uint16Array,e,t,s,r),this.elementType="u16"}slice(e,t){return this.sliceBuffer(L,e,t)}static{this.ElementType="u16"}}class V extends Vec3_e{constructor(e,t=0,s,r){super(Uint16Array,e,t,s,r),this.elementType="u16"}slice(e,t){return this.sliceBuffer(V,e,t)}static{this.ElementType="u16"}}class M extends Vec4_e{constructor(e,t=0,s,r){super(Uint16Array,e,t,s,r),this.elementType="u16"}slice(e,t){return this.sliceBuffer(M,e,t)}static{this.ElementType="u16"}}class v extends Scalar_t{constructor(e,t=0,s,r){super(Uint32Array,e,t,s,r),this.elementType="u32"}slice(e,t){return this.sliceBuffer(v,e,t)}static{this.ElementType="u32"}}class S extends e{constructor(e,t=0,s,r){super(Uint32Array,e,t,s,r),this.elementType="u32"}slice(e,t){return this.sliceBuffer(S,e,t)}static{this.ElementType="u32"}}class k extends Vec3_e{constructor(e,t=0,s,r){super(Uint32Array,e,t,s,r),this.elementType="u32"}slice(e,t){return this.sliceBuffer(k,e,t)}static{this.ElementType="u32"}}class q extends Vec4_e{constructor(e,t=0,s,r){super(Uint32Array,e,t,s,r),this.elementType="u32"}slice(e,t){return this.sliceBuffer(q,e,t)}static{this.ElementType="u32"}}class z extends Scalar_t{constructor(e,t=0,s,r){super(Int8Array,e,t,s,r),this.elementType="i8"}slice(e,t){return this.sliceBuffer(z,e,t)}static{this.ElementType="i8"}}class C extends e{constructor(e,t=0,s,r){super(Int8Array,e,t,s,r),this.elementType="i8"}slice(e,t){return this.sliceBuffer(C,e,t)}static{this.ElementType="i8"}}class D extends Vec3_e{constructor(e,t=0,s,r){super(Int8Array,e,t,s,r),this.elementType="i8"}slice(e,t){return this.sliceBuffer(D,e,t)}static{this.ElementType="i8"}}class G extends Vec4_e{constructor(e,t=0,s,r){super(Int8Array,e,t,s,r),this.elementType="i8"}slice(e,t){return this.sliceBuffer(G,e,t)}static{this.ElementType="i8"}}class H extends Scalar_t{constructor(e,t=0,s,r){super(Int16Array,e,t,s,r),this.elementType="i16"}slice(e,t){return this.sliceBuffer(H,e,t)}static{this.ElementType="i16"}}class J extends e{constructor(e,t=0,s,r){super(Int16Array,e,t,s,r),this.elementType="i16"}slice(e,t){return this.sliceBuffer(J,e,t)}static{this.ElementType="i16"}}class K extends Vec3_e{constructor(e,t=0,s,r){super(Int16Array,e,t,s,r),this.elementType="i16"}slice(e,t){return this.sliceBuffer(K,e,t)}static{this.ElementType="i16"}}class N extends Vec4_e{constructor(e,t=0,s,r){super(Int16Array,e,t,s,r),this.elementType="i16"}slice(e,t){return this.sliceBuffer(N,e,t)}static{this.ElementType="i16"}}class P extends Scalar_t{constructor(e,t=0,s,r){super(Int32Array,e,t,s,r),this.elementType="i32"}slice(e,t){return this.sliceBuffer(P,e,t)}static{this.ElementType="i32"}}class Q extends e{constructor(e,t=0,s,r){super(Int32Array,e,t,s,r),this.elementType="i32"}slice(e,t){return this.sliceBuffer(Q,e,t)}static{this.ElementType="i32"}}class R extends Vec3_e{constructor(e,t=0,s,r){super(Int32Array,e,t,s,r),this.elementType="i32"}slice(e,t){return this.sliceBuffer(R,e,t)}static{this.ElementType="i32"}}class W extends Vec4_e{constructor(e,t=0,s,r){super(Int32Array,e,t,s,r),this.elementType="i32"}slice(e,t){return this.sliceBuffer(W,e,t)}static{this.ElementType="i32"}}


/***/ }),

/***/ 11449:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bg: () => (/* binding */ t),
/* harmony export */   SX: () => (/* binding */ r),
/* harmony export */   pX: () => (/* binding */ l)
/* harmony export */ });
/* unused harmony exports disableNativeF16Array, resetNativeF16Array */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let n=globalThis.Float16Array;function t(...t){return new(n??Float32Array)(...t)}function l(){return n}let r=!!n;function o(){n=null,r=!1}function a(){n=globalThis.Float16Array,r=!!n}


/***/ }),

/***/ 67082:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ r),
/* harmony export */   b: () => (/* binding */ n)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(e,n,r,t){const{loggerTag:o,stride:f}=n;return e.length%f!==0?(t.error(o,`Invalid array length, expected a multiple of ${f}`),new r([])):e}function n(n,r,t,o,f){if(!n)return n;if(n instanceof r)return e(n,o,r,f);for(const i of t)if(n instanceof i)return e(new r(n),o,r,f);if(Array.isArray(n))return e(new r(n),o,r,f);{const e=t.map((e=>`'${e.name}'`));return f.error(`Failed to set property, expected one of ${e}, but got ${n.constructor.name}`),new r([])}}function r(e,n,r){n[r]=t(e)}function t(e){const n=new Array(e.length);for(let r=0;r<e.length;r++)n[r]=e[r];return n}


/***/ }),

/***/ 21690:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bq: () => (/* binding */ n),
/* harmony export */   Qp: () => (/* binding */ i),
/* harmony export */   WN: () => (/* binding */ b),
/* harmony export */   dK: () => (/* binding */ v),
/* harmony export */   eN: () => (/* binding */ f),
/* harmony export */   fH: () => (/* binding */ y),
/* harmony export */   "in": () => (/* binding */ m),
/* harmony export */   yr: () => (/* binding */ o)
/* harmony export */ });
/* unused harmony exports isDisplayAsset, isDisplaySource */
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86394);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39831);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40189);
/* harmony import */ var _layers_support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40906);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class i{constructor(s,t,e){this.assetName=s,this.assetMimeType=t,this.parts=e}equals(s){return this===s||this.assetName===s.assetName&&this.assetMimeType===s.assetMimeType&&(0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .equals */ .aI)(this.parts,s.parts,((s,t)=>s.equals(t)))}isOnService(s){return this.parts.every((t=>t.isOnService(s)))}makeHash(){let s="";for(const t of this.parts)s+=t.partHash;return s}async toBlob(s){const{parts:t}=this;if(1===t.length)return t[0].toBlob(s);const r=await Promise.all(t.map((t=>t.toBlob(s))));return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .throwIfAborted */ .Te)(s),new Blob(r)}}class n{constructor(s,t){this.partUrl=s,this.partHash=t}equals(s){return this===s||this.partUrl===s.partUrl&&this.partHash===s.partHash}isOnService(s){return this.partUrl.startsWith(`${s.path}/assets/`)}async toBlob(t){const{data:r}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this.partUrl,{responseType:"blob"});return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .throwIfAborted */ .Te)(t),r}}function o(s){return l(s?.source)}const c=/^(model\/gltf\+json)|(model\/gltf-binary)$/,u=/\.(gltf|glb)/i;function l(s){switch(s?.type){case"client":return Array.isArray(s.files)?s.files.some(p):p(s.files);case"service":return s.assets.some(p);case"loadable":return!0;default:return!1}}function p(s){if(s instanceof File){const{type:t,name:e}=s;return c.test(t)||u.test(e)}return c.test(s.assetMimeType)||u.test(s.assetName)}function f(s,t){if(!s)return!1;const{source:e}=s;return h(e,t)}function m(s,t){if(s===t)return!0;const{source:e}=s,{source:r}=t;if(e===r)return!0;if("service"===e.type&&"service"===r.type){if(e.assets.length!==r.assets.length)return!1;const s=(s,t)=>s.assetName<t.assetName?-1:s.assetName>t.assetName?1:0,t=[...e.assets].sort(s),a=[...r.assets].sort(s);for(let e=0;e<t.length;++e)if(!t[e].equals(a[e]))return!1;return!0}return!1}function h(s,t){return"service"===s.type&&s.assets.every((s=>s.isOnService(t)))}function y(s,t){return s instanceof File?(0,_layers_support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_4__/* .getFileFormatId */ .rq)(s,t):(0,_layers_support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_4__/* .getMimeTypeOrFilenameFormatId */ .z$)(s.assetMimeType,s.assetName,t)}function b(s){switch(s.type){case"client":return Array.isArray(s.files)?s.files:[s.files];case"service":return s.assets;case"loadable":return}}function v(s){return!!s.original}


/***/ }),

/***/ 52209:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92504);
/* harmony import */ var _Indices_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42965);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(e,s,u){const c=Array.isArray(e),a=c?e.length/s:e.byteLength/(4*s),h=c?e:new Uint32Array(e,0,a*s),y=u?.minReduction??0,A=u?.originalIndices||null,g=A?A.length:0,m=u?.componentOffsets||null;let w=0;if(m)for(let t=0;t<m.length-1;t++){const n=m[t+1]-m[t];n>w&&(w=n)}else w=a;const U=Math.floor(1.1*w)+1;(null==i||i.length<2*U)&&(i=new Uint32Array((0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .nextHighestPowerOfTwo */ .cU)(2*U)));for(let t=0;t<2*U;t++)i[t]=0;let b=0;const d=!!m&&!!A,p=d?g:a;let M=(0,_Indices_js__WEBPACK_IMPORTED_MODULE_1__/* .newIndexArray */ .my)(a);const j=new Uint32Array(g),q=1.96;let I=0!==y?Math.ceil(4*q*q/(y*y)*y*(1-y)):p,k=1,x=m?m[1]:p;for(let t=0;t<p;t++){if(t===I){const n=1-b/t;if(n+q*Math.sqrt(n*(1-n)/t)<y)return null;I*=2}if(t===x){for(let t=0;t<2*U;t++)i[t]=0;if(A)for(let t=m[k-1];t<m[k];t++)j[t]=M[A[t]];x=m[++k]}const n=d?A[t]:t,r=n*s,e=f(h,r,s);let o=e%U,u=b;for(;0!==i[2*o+1];){if(i[2*o]===e){const t=i[2*o+1]-1;if(l(h,r,t*s,s)){u=M[t];break}}o++,o>=U&&(o-=U)}u===b&&(i[2*o]=e,i[2*o+1]=n+1,b++),M[n]=u}if(0!==y&&1-b/a<y)return null;if(d){for(let t=m[k-1];t<j.length;t++)j[t]=M[A[t]];M=(0,_Indices_js__WEBPACK_IMPORTED_MODULE_1__/* .compactMeshIndices */ .uW)(j)}const C=c?new Array(b):new Uint32Array(b*s);b=0;for(let t=0;t<p;t++)if(M[t]===b){o(h,(d?A[t]:t)*s,C,b*s,s),b++}if(A&&!d){const t=new Uint32Array(g);for(let n=0;n<t.length;n++)t[n]=M[A[n]];M=(0,_Indices_js__WEBPACK_IMPORTED_MODULE_1__/* .compactMeshIndices */ .uW)(t)}return{buffer:Array.isArray(C)?C:C.buffer,indices:M,uniqueCount:b}}function l(t,n,r,e){for(let l=0;l<e;l++)if(t[n+l]!==t[r+l])return!1;return!0}function o(t,n,r,e,l){for(let o=0;o<l;o++)r[e+o]=t[n+o]}function f(t,n,r){let e=0;for(let l=0;l<r;l++)e=t[n+l]+e|0,e=e+(e<<11)+(e>>>2)|0;return e>>>0}let i=null;


/***/ }),

/***/ 72188:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $5: () => (/* binding */ h),
/* harmony export */   CN: () => (/* binding */ F),
/* harmony export */   GN: () => (/* binding */ L),
/* harmony export */   JP: () => (/* binding */ O),
/* harmony export */   KM: () => (/* binding */ C),
/* harmony export */   Mv: () => (/* binding */ G),
/* harmony export */   OD: () => (/* binding */ V),
/* harmony export */   X4: () => (/* binding */ E),
/* harmony export */   gZ: () => (/* binding */ b),
/* harmony export */   gr: () => (/* binding */ g),
/* harmony export */   qs: () => (/* binding */ _),
/* harmony export */   si: () => (/* binding */ R),
/* harmony export */   xA: () => (/* binding */ w)
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92504);
/* harmony import */ var _core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25423);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78607);
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21742);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86128);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24121);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58359);
/* harmony import */ var _projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59538);
/* harmony import */ var _projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84119);
/* harmony import */ var _Ellipsoid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99817);
/* harmony import */ var _spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87926);
/* harmony import */ var _webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(96082);
/* harmony import */ var _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57813);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(21839);
/* harmony import */ var _chunks_vec4_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(12364);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const O="Projection may be possible after calling projection.load().";function F(r,t,o,e){r.error(`Failed to project from (wkid:${t.wkid}) to (wkid:${o.wkid}).${e?" ":""}${e}`)}function E(r,t,o,e,n,i){return B(x.TO_PCPF,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f */ .xs.fromTypedArray(r),V.NORMAL,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(t),o,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(e),n,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f */ .xs.fromTypedArray(i))?i:null}function R(r,t,o,e,n,i){return B(x.FROM_PCPF,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f */ .xs.fromTypedArray(r),V.NORMAL,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(t),o,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(e),n,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f */ .xs.fromTypedArray(i))?i:null}function g(r,t,o,e){return (0,_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_8__.projectBuffer)(r,t,0,o,e,0)?o:null}function h(r,t,o,e){return (0,_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_8__.projectBuffer)(r,t,0,o,e,0)?o:null}function _(t,e,n){return (0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_1__/* .normalFromMat4 */ .Ge)(q,n),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_13__.b)(e,t,q),(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .hasScaling */ .or)(q)&&(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_13__.n)(e,e),e}function C(t,o,n){return (0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_1__/* .fromMat4 */ .z0)(q,n),(0,_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_14__.t)(o,t,q),(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .hasScaling */ .or)(q)&&(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_13__.n)(o,o,4),o}function b(r,o,e,n){const i=o===V.NORMAL;return k(r,o,e,((r,o)=>{const e=Math.cos((0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .deg2rad */ .kU)(r));o[0]=i?e:1/e,o[1]=1}),n)}function L(r,t,o,e){const n=t===V.NORMAL;return k(r,t,o,((r,t)=>{const o=Math.cosh(-r/_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_9__/* .earth */ .$O.radius);t[0]=1,t[1]=n?o:1/o}),e)}function k(r,t,o,e,n){const i=t===V.NORMAL?3:4,f=[0,0];for(let c=0,a=1;c<r.length;c+=i,a+=3){e(o[a],f);const t=r[c]*f[0],s=r[c+1]*f[1],m=r[c+2],u=1/Math.sqrt(t*t+s*s+m*m);n[c]=t*u,n[c+1]=s*u,n[c+2]=m*u,4===i&&(n[c+3]=r[c+3])}return n}function w(r,t,o,e,n,i){if(!B(x.TO_PCPF,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f */ .xs.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),V.TANGENT,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(t),o,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(e),n,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f */ .xs.fromTypedArray(i,4*Float32Array.BYTES_PER_ELEMENT)))return null;for(let f=3;f<r.length;f+=4)i[f]=r[f];return i}function G(r,t,o,e,n,i){if(!B(x.FROM_PCPF,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f */ .xs.fromTypedArray(r,16),V.TANGENT,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(t),o,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(e),n,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f */ .xs.fromTypedArray(i,16)))return null;for(let f=3;f<r.length;f+=4)i[f]=r[f];return i}var V,x;function v(r,t,n,f,c){switch((0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_7__/* .computeTranslationToOriginAndRotation */ .l)(f,n,Y,f),r===x.FROM_PCPF&&(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_3__/* .invert */ .B8)(Y,Y),t){case V.NORMAL:return (0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_1__/* .normalFromMat4 */ .Ge)(c,Y);case V.TANGENT:return (0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_1__/* .fromMat4 */ .z0)(c,Y)}}function B(r,t,o,e,n,i,f,s){if(!t)return;const m=e.count;if($(n))for(let a=0;a<m;a++)i.getVec(a,S),t.getVec(a,U),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.o)(U,U,v(r,o,S,f,q)),s.setVec(a,U);else for(let u=0;u<m;u++){i.getVec(u,S),t.getVec(u,U);const n=(0,_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_11__/* .y2lat */ .jg)(e.get(u,1));let m=Math.cos(n);o===V.TANGENT!=(r===x.TO_PCPF)&&(m=1/m),v(r,o,S,f,q),r===x.TO_PCPF?(q[0]*=m,q[1]*=m,q[2]*=m,q[3]*=m,q[4]*=m,q[5]*=m):(q[0]*=m,q[3]*=m,q[6]*=m,q[1]*=m,q[4]*=m,q[7]*=m),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.o)(U,U,q),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.n)(U,U),s.setVec(u,U)}return s}function $(r){return r.isWGS84||(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .isCGCS2000 */ .x1)(r)||(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .isMars */ .q8)(r)||(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .isMoon */ .KQ)(r)}!function(r){r[r.NORMAL=0]="NORMAL",r[r.TANGENT=1]="TANGENT"}(V||(V={})),function(r){r[r.TO_PCPF=0]="TO_PCPF",r[r.FROM_PCPF=1]="FROM_PCPF"}(x||(x={}));const S=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),U=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),Y=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),q=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)();


/***/ }),

/***/ 5025:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UR: () => (/* binding */ B),
/* harmony export */   p5: () => (/* binding */ k),
/* harmony export */   xK: () => (/* binding */ nt)
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(539);
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92504);
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92976);
/* harmony import */ var _core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25423);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78607);
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21742);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86128);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24121);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(58359);
/* harmony import */ var _spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32937);
/* harmony import */ var _projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59538);
/* harmony import */ var _projection_projectPointToVector_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(42609);
/* harmony import */ var _meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1114);
/* harmony import */ var _spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(87926);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(21839);
/* harmony import */ var _projection_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(72188);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const M=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");function k(t,n,{vertexSpace:r,spatialReference:e}){if("georeferenced"===r.type){const o=t;if(!(0,_projection_projectPointToVector_js__WEBPACK_IMPORTED_MODULE_11__/* .projectPointToVector */ .g)(n,o,e))return!1;const{origin:i}=r;return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.d)(t,o,i),!0}const o=(0,_spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .getSphericalPCPF */ .lO)(e),i=t;if(!(0,_projection_projectPointToVector_js__WEBPACK_IMPORTED_MODULE_11__/* .projectPointToVector */ .g)(n,i,o))return!1;const{origin:l}=r,a=lt;if(!(0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_10__/* .computeTranslationToOriginAndRotation */ .l)(e,l,a,o))return!1;const c=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .invert */ .B8)(lt,a);return null!=c&&((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.t)(t,i,c),!0)}function B(t,n,r){const{vertexSpace:e,transform:o,vertexAttributes:i}=t,a=(0,_meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .isRelativeVertexSpace */ .Hq)(e)?o:null,s=X(t.spatialReference,r,at.SOURCE_AND_TARGET);if((0,_meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .vertexSpaceEquals */ .yJ)(e,n)&&(!a||(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .exactEquals */ .t2)(a.localMatrix,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__/* .IDENTITY */ .zK))&&Y(s)){const{position:t,normal:n,tangent:e}=i,o=r?.allowBufferReuse;return{position:o?t:t.slice(),normal:o?n:n?.slice(),tangent:o?e:e?.slice()}}switch(t.vertexSpace.type){case"local":return"local"===n.type?H(t,t.vertexSpace,n.origin,r):P(t,t.vertexSpace,n.origin,r);case"georeferenced":return"local"===n.type?q(t,t.vertexSpace,n.origin,r):L(t,t.vertexSpace,n.origin,r)}}function L({vertexAttributes:t,transform:n,spatialReference:r},{origin:e},o,i){const l=X(r,i,at.SOURCE_AND_TARGET),a=e||!Y(l)?(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .copy */ .C)(rt,n?.localMatrix??_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__/* .IDENTITY */ .zK):null;a&&W(a,r,i,at.SOURCE_AND_TARGET);const{position:s,normal:u,tangent:f}=a?I(t,a):t,g=i?.allowBufferReuse,A=g?s:new Float64Array(s.length);let R=s;if(e&&(R=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.a)(A,R,e)),o){const t=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.u)(it,o);R=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.a)(A,R,t)}return{position:R!==t.position||g?R:R.slice(),normal:u!==t.normal||g?u:u?.slice(),tangent:f!==t.tangent||g?f:f?.slice()}}function V(t,n){return n?.useEllipsoid&&(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .isEarth */ .B3)(t)?_spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .WGS84ECEFSpatialReference */ .Y0:(0,_spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .getSphericalPCPF */ .lO)(t)}function P({spatialReference:t,vertexAttributes:n,transform:r},{origin:e},o,i){const l=V(t,i);if(!(0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_10__/* .computeTranslationToOriginAndRotation */ .l)(t,e,rt,l))return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),t,l),null;r&&(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .multiply */ .lw)(rt,rt,r.localMatrix),W(rt,t,i,at.SOURCE);const a=new Float64Array(n.position.length),s=J(n.position,rt,t,a,l);if(!s)return null;const c=K(s,t,a,l,n.normal,rt);if(n.normal&&!c)return null;const f=Q(s,t,a,l,n.tangent,rt);if(n.tangent&&!f)return null;if(o){const t=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.u)(it,o);(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.a)(s,s,t)}return{position:s,normal:c,tangent:f}}function q({vertexAttributes:t,spatialReference:n,transform:r},{origin:e},i,l){const c=V(n,l);if(!(0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_10__/* .computeTranslationToOriginAndRotation */ .l)(n,i,rt,c))return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),n,c),null;const u=1/X(n,l,at.TARGET);(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .scale */ .hs)(rt,rt,[u,u,u]);const f=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .invert */ .B8)(et,rt),{position:m,normal:p,tangent:g}=z(t,e,r),A=new Float64Array(m.length),R=Z(m,n,f,A,c);if(!R)return null;const x=(0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_3__/* .normalFromMat4 */ .Ge)(ot,f),E=$(p,m,n,A,c,x,p!==t.normal?p:void 0);if(!E&&p)return null;const v=tt(g,m,n,A,c,x,g!==t.tangent?g:void 0);return!v&&g?null:{position:R,normal:E,tangent:v}}function z(t,n,r){if(!n)return t;if(!r){const{position:r,normal:e,tangent:o}=t;return{position:(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.a)(new Float64Array(r.length),r,n),tangent:o,normal:e}}const e=I(t,r.localMatrix);return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.a)(e.position,e.position,n),e}function H({vertexAttributes:t,spatialReference:n,transform:r},{origin:e},o,i){const l=V(n,i);if(!(0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_10__/* .computeTranslationToOriginAndRotation */ .l)(n,e,rt,l))return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),n,l),null;if(r&&(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .multiply */ .lw)(rt,rt,r.localMatrix),!(0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_10__/* .computeTranslationToOriginAndRotation */ .l)(n,o,et,l))return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),l,n),null;(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .invert */ .B8)(et,et);const a=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .multiply */ .lw)(rt,et,rt);return W(a,n,i,at.SOURCE_AND_TARGET),I(t,a)}function I(t,n){const r=new Float64Array(t.position.length);(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.t)(r,t.position,n);const e=t.normal?new Float32Array(t.normal.length):null,o=t.tangent?new Float32Array(t.tangent.length):null;return e&&t.normal&&(0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .transformNormal */ .qs)(t.normal,e,n),o&&t.tangent&&(0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .transformTangent */ .KM)(t.tangent,o,n),{position:r,normal:e,tangent:o}}function J(t,n,r,e,o){(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.t)(e,t,n);const i=new Float64Array(t.length);return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .projectFromPCPF */ .$5)(e,o,i,r)?i:((0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),o,r),null)}function K(t,n,r,e,o,i){if(null==o)return null;const l=new Float32Array(o.length);return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .transformNormal */ .qs)(o,l,i),(0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .projectNormalFromPCPF */ .si)(l,t,n,r,e,l)?l:((0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),e,n),null)}function Q(t,n,r,e,o,i){if(null==o)return null;const l=new Float32Array(o.length);return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .transformTangent */ .KM)(o,l,i),(0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .projectTangentFromPCPF */ .Mv)(l,t,n,r,e,l)?l:((0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),e,n),null)}function W(t,n,r,e){const o=X(n,r,e);Y(o)||(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .scale */ .hs)(t,t,[o,o,o])}function X(t,n,r){const e=!!(r&at.SOURCE),o=!!(r&at.TARGET),i=n?.sourceUnit,l=n?.targetUnit;if(!i&&!l)return 1;let a=nt(i,t);e||!i||Y(a)||(M().warn("source unit conversion not supported"),a=1);let s=1/nt(l,t);return o||!l||Y(s)||(M().warn("target unit conversion not supported"),s=1),a*s}function Y(t){return (0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .floatEqualUlp */ .Io)(t,1)}function Z(t,n,r,e,o){const i=(0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .projectToPCPF */ .gr)(t,n,e,o);if(!i)return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),n,o),null;const l=new Float64Array(i.length);return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.t)(l,i,r),l}function $(t,n,r,e,o,i,l){if(null==t)return null;const a=l??new Float32Array(t.length);return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .projectNormalToPCPF */ .X4)(t,n,r,e,o,a)?((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.b)(a,a,i),a):((0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),r,o),null)}function tt(t,n,r,e,o,i,l){if(null==t)return null;const a=l??new Float32Array(t.length);return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .projectTangentToPCPF */ .xA)(t,n,r,e,o,a)?((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.b)(a,a,i,4),a):((0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),r,o),null)}function nt(t,n){if(null==t)return 1;const o=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getMetersPerCartesianUnitForSR */ .KX)(n);return 1/(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .convertUnit */ .oU)(o,"meters",t)}const rt=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),et=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),ot=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),it=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__/* .create */ .vt)(),lt=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)();var at;!function(t){t[t.NONE=0]="NONE",t[t.SOURCE=1]="SOURCE",t[t.TARGET=2]="TARGET",t[t.SOURCE_AND_TARGET=3]="SOURCE_AND_TARGET"}(at||(at={}));


/***/ }),

/***/ 1114:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CK: () => (/* binding */ c),
/* harmony export */   E9: () => (/* binding */ o),
/* harmony export */   Hq: () => (/* binding */ t),
/* harmony export */   MW: () => (/* binding */ u),
/* harmony export */   TE: () => (/* binding */ l),
/* harmony export */   yJ: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24121);
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97066);
/* harmony import */ var _MeshGeoreferencedVertexSpace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97557);
/* harmony import */ var _MeshLocalVertexSpace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99218);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function o(e){return null==e.origin}function t(e){return null!=e.origin}function c(e){return t(e.vertexSpace)}function u(e,r){if(!t(e))return null;const[i,o,c]=e.origin;return new _Point_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A({x:i,y:o,z:c,spatialReference:r})}function l(e,n){const{x:o,y:t,z:c,spatialReference:u}=e,l=[o,t,c??0];return"local"===(n?.vertexSpace??f(u))?new _MeshLocalVertexSpace_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A({origin:l}):new _MeshGeoreferencedVertexSpace_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A({origin:l})}function f(e){return e.isGeographic||e.isWebMercator?"local":"georeferenced"}function a(n,r){return n.type===r.type&&(n.origin===r.origin||null!=n.origin&&null!=r.origin&&(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.q)(n.origin,r.origin))}


/***/ }),

/***/ 57829:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ c)
/* harmony export */ });
/* unused harmony export fitPlane */
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92504);
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92976);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24121);
/* harmony import */ var _Axis_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58331);
/* harmony import */ var _plane_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38774);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function c(t,o,s){const n=e(f,t,o,s)?(0,_plane_js__WEBPACK_IMPORTED_MODULE_4__/* .getNormal */ .Qj)(f):[0,0,1];return Math.abs(n[2])>Math.cos((0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .deg2rad */ .kU)(80))?_Axis_js__WEBPACK_IMPORTED_MODULE_3__/* .Axis */ ._.Z:Math.abs(n[1])>Math.abs(n[0])?_Axis_js__WEBPACK_IMPORTED_MODULE_3__/* .Axis */ ._.Y:_Axis_js__WEBPACK_IMPORTED_MODULE_3__/* .Axis */ ._.X}function e(r,i,a,n){const c=(r=>!Array.isArray(r[0]))(i)?(r,t)=>i[3*r+t]:(r,t)=>i[r][t],e=n?(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .getMetersPerUnitForSR */ .GA)(n)/(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .getMetersPerVerticalUnitForSR */ .G9)(n):1;return (0,_plane_js__WEBPACK_IMPORTED_MODULE_4__/* .fromManyPoints */ .lU)(r,((r,t)=>(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.i)(r,c(t,0)*e,c(t,1)*e,c(t,2))),a)}const f=(0,_plane_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)();


/***/ }),

/***/ 17566:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Wq: () => (/* binding */ p),
/* harmony export */   lO: () => (/* binding */ f),
/* harmony export */   oR: () => (/* binding */ a)
/* harmony export */ });
/* unused harmony export isCounterClockwise */
/* harmony import */ var _chunks_earcut_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16528);
/* harmony import */ var _Axis_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58331);
/* harmony import */ var _coordsUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65319);
/* harmony import */ var _DoubleArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90166);
/* harmony import */ var _Indices_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42965);
/* harmony import */ var _polygonUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57829);
/* harmony import */ var _meshUtils_deduplicate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52209);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function f(t){const e=a(t.rings,t.hasZ,p.CCW_IS_HOLE,t.spatialReference),s=new Array;let l=0,f=0;for(const r of e.polygons){const t=r.count,c=r.index,h=(0,_DoubleArray_js__WEBPACK_IMPORTED_MODULE_3__/* .doubleSubArray */ .l5)(e.position,3*c,3*t),a=r.holeIndices.map((n=>n-c)),g=(0,_Indices_js__WEBPACK_IMPORTED_MODULE_4__/* .compactMeshIndices */ .uW)((0,_chunks_earcut_js__WEBPACK_IMPORTED_MODULE_0__.e)(h,a,3));s.push({position:h,faces:g}),l+=h.length,f+=g.length}const g=h(s,l,f),u=Array.isArray(g.position)?(0,_meshUtils_deduplicate_js__WEBPACK_IMPORTED_MODULE_6__/* .deduplicate */ .b)(g.position,3,{originalIndices:g.faces}):(0,_meshUtils_deduplicate_js__WEBPACK_IMPORTED_MODULE_6__/* .deduplicate */ .b)(g.position.buffer,6,{originalIndices:g.faces});return g.position=(0,_DoubleArray_js__WEBPACK_IMPORTED_MODULE_3__/* .doubleArrayFrom */ .xm)(new Float64Array(u.buffer)),g.faces=u.indices,g}function h(n,t,e){if(1===n.length)return n[0];const o=(0,_DoubleArray_js__WEBPACK_IMPORTED_MODULE_3__/* .newDoubleArray */ .jh)(t),r=new Array(e);let l=0,c=0,f=0;for(const s of n){for(let n=0;n<s.position.length;n++)o[l++]=s.position[n];for(const n of s.faces)r[c++]=n+f;f=l/3}return{position:o,faces:(0,_Indices_js__WEBPACK_IMPORTED_MODULE_4__/* .compactMeshIndices */ .uW)(r)}}function a(n,t,e,o){const r=n.length,i=new Array(r),l=new Array(r),c=new Array(r);let f=0;for(let s=0;s<r;++s)f+=n[s].length;let h=0,a=0,m=0;const d=(0,_DoubleArray_js__WEBPACK_IMPORTED_MODULE_3__/* .newDoubleArray */ .jh)(3*f);let y=0;for(let s=r-1;s>=0;s--){const f=n[s],A=e===p.CCW_IS_HOLE&&u(f,t,o);if(A&&1!==r)i[h++]=f;else{let n=f.length;for(let t=0;t<h;++t)n+=i[t].length;const e={index:y,pathLengths:new Array(h+1),count:n,holeIndices:new Array(h)};e.pathLengths[0]=f.length,f.length>0&&(c[m++]={index:y,count:f.length}),y=A?g(f,f.length-1,-1,d,y,f.length,t):g(f,0,1,d,y,f.length,t);for(let o=0;o<h;++o){const n=i[o];e.holeIndices[o]=y,e.pathLengths[o+1]=n.length,n.length>0&&(c[m++]={index:y,count:n.length}),y=g(n,0,1,d,y,n.length,t)}h=0,e.count>0&&(l[a++]=e)}}for(let s=0;s<h;++s){const n=i[s];n.length>0&&(c[m++]={index:y,count:n.length}),y=g(n,0,1,d,y,n.length,t)}return l.length=a,c.length=m,{position:d,polygons:l,outlines:c}}function g(n,t,e,o,r,s,i){r*=3;for(let l=0;l<s;++l){const s=n[t];o[r++]=s[0],o[r++]=s[1],o[r++]=i&&s[2]?s[2]:0,t+=e}return r/3}function u(n,o,r){if(!o)return!(0,_coordsUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isClockwise */ .$3)(n);const s=n.length-1;switch((0,_polygonUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .leastSignificantAxis */ .S)(n,s,r)){case _Axis_js__WEBPACK_IMPORTED_MODULE_1__/* .Axis */ ._.X:return!(0,_coordsUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isClockwise */ .$3)(n,_Axis_js__WEBPACK_IMPORTED_MODULE_1__/* .Axis */ ._.Y,_Axis_js__WEBPACK_IMPORTED_MODULE_1__/* .Axis */ ._.Z);case _Axis_js__WEBPACK_IMPORTED_MODULE_1__/* .Axis */ ._.Y:return!(0,_coordsUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isClockwise */ .$3)(n,_Axis_js__WEBPACK_IMPORTED_MODULE_1__/* .Axis */ ._.X,_Axis_js__WEBPACK_IMPORTED_MODULE_1__/* .Axis */ ._.Z);case _Axis_js__WEBPACK_IMPORTED_MODULE_1__/* .Axis */ ._.Z:return!(0,_coordsUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isClockwise */ .$3)(n,_Axis_js__WEBPACK_IMPORTED_MODULE_1__/* .Axis */ ._.X,_Axis_js__WEBPACK_IMPORTED_MODULE_1__/* .Axis */ ._.Y)}}var p;!function(n){n[n.NONE=0]="NONE",n[n.CCW_IS_HOLE=1]="CCW_IS_HOLE"}(p||(p={}));


/***/ }),

/***/ 58947:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ f),
/* harmony export */   MX: () => (/* binding */ c),
/* harmony export */   O_: () => (/* binding */ i),
/* harmony export */   kL: () => (/* binding */ u),
/* harmony export */   vA: () => (/* binding */ s),
/* harmony export */   zH: () => (/* binding */ m)
/* harmony export */ });
/* unused harmony exports project, setMatrixTranslation3 */
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59646);
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2662);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28152);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const e=(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)();class o{constructor(t){this.message=t}toString(){return`AssertException: ${this.message}`}}function s(t,r="Assertion"){if(!t){const t=new Error(r).stack;throw new o(`${r} at ${t}`)}}function c(t,r){t||(r=r||"",console.warn("Verify failed: "+r+"\n"+new Error("verify").stack))}function i(t,r,n,e){let o,s=(n[0]-t[0])/r[0],c=(e[0]-t[0])/r[0];s>c&&(o=s,s=c,c=o);let i=(n[1]-t[1])/r[1],f=(e[1]-t[1])/r[1];if(i>f&&(o=i,i=f,f=o),s>f||i>c)return!1;i>s&&(s=i),f<c&&(c=f);let a=(n[2]-t[2])/r[2],u=(e[2]-t[2])/r[2];return a>u&&(o=a,a=u,u=o),!(s>u||a>c)&&(u<c&&(c=u),!(c<0))}function f(r,n,e,o,s,c=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_0__/* .create */ .vt)()){const i=(o[s]-e[s])*(n[0]-r[0])-(o[0]-e[0])*(n[s]-r[s]),f=(o[0]-e[0])*(r[s]-e[s])-(o[s]-e[s])*(r[0]-e[0]);if(0===i)return!1;const a=f/i;return c[0]=r[0]+a*(n[0]-r[0]),c[1]=r[s]+a*(n[s]-r[s]),!0}function a(t,n,o,c,i){e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=1,r(e,e,n),i.length>2&&(i[2]=-e[2]),r(e,e,o),s(0!==e[3]),i[0]=e[0]/e[3],i[1]=e[1]/e[3],i[2]=e[2]/e[3],i[0]=(.5*i[0]+.5)*c[2]+c[0],i[1]=(.5*i[1]+.5)*c[3]+c[1]}function u(t,r){return Math.log(t)/Math.log(r)}function l(t,r,n,e){t[12]=r,t[13]=n,t[14]=e}function m(t){return 1===t[0]&&0===t[1]&&0===t[2]&&0===t[3]&&0===t[4]&&1===t[5]&&0===t[6]&&0===t[7]&&0===t[8]&&0===t[9]&&1===t[10]&&0===t[11]&&1===t[15]}


/***/ })

};
;