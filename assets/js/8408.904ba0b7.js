"use strict";
exports.id = 8408;
exports.ids = [8408];
exports.modules = {

/***/ 20698:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $X: () => (/* binding */ q),
/* harmony export */   Gy: () => (/* binding */ L),
/* harmony export */   P5: () => (/* binding */ v),
/* harmony export */   SW: () => (/* binding */ U),
/* harmony export */   Tr: () => (/* binding */ k),
/* harmony export */   VV: () => (/* binding */ m),
/* harmony export */   qj: () => (/* binding */ d)
/* harmony export */ });
/* unused harmony exports equals, getQuantizedBoundsCoordsArray, getQuantizedBoundsCoordsArrayArray, getQuantizedBoundsPaths, getQuantizedBoundsPoints, getQuantizedBoundsRings, quantizeBounds, quantizeExtent, quantizeMultipoint, quantizePaths, quantizePoints, quantizePolygon, quantizePolyline, quantizeRings, quantizeX, quantizeY, unquantizeBounds, unquantizeCoordsArray, unquantizeCoordsArrayArray, unquantizeExtent, unquantizePaths, unquantizePoints, unquantizeRings, unquantizeX, unquantizeY */
/* harmony import */ var _jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1171);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function l(n){return n&&"upperLeft"===n.originPosition}const i=(n,t,e)=>[t,e],o=(n,t,e)=>[t,e,n[2]],a=(n,t,e)=>[t,e,n[2],n[3]];function m(n){if(!n)return null;return{originPosition:"upper-left"===n.originPosition?"upperLeft":"lower-left"===n.originPosition?"lowerLeft":n.originPosition,scale:n.tolerance?[n.tolerance,n.tolerance]:[1,1],translate:null!=n.extent?[n.extent.xmin,n.extent.ymax]:[0,0]}}function c(n,t){if(n===t||null==n&&null==t)return!0;if(null==n||null==t)return!1;let e,r,u,i,o,a;return l(n)?(e=n.translate[0],r=n.translate[1],u=n.scale[0]):(e=null!=n.extent?n.extent.xmin:0,r=null!=n.extent?n.extent.ymax:0,u=n.tolerance),l(t)?(i=t.translate[0],o=t.translate[1],a=t.scale[0]):(i=null!=t.extent?t.extent.xmin:0,o=null!=t.extent?t.extent.ymax:0,a=t.tolerance),e===i&&r===o&&u===a}function s({scale:n,translate:t},e){return Math.round((e-t[0])/n[0])}function f({scale:n,translate:t},e){return Math.round((t[1]-e)/n[1])}function x(n,t,e){const r=[];let u,l,i,o;for(let a=0;a<e.length;a++){const m=e[a];a>0?(i=s(n,m[0]),o=f(n,m[1]),i===u&&o===l||(r.push(t(m,i-u,o-l)),u=i,l=o)):(u=s(n,m[0]),l=f(n,m[1]),r.push(t(m,u,l)))}return r.length>0?r:null}function h(n,t,e){return t[0]=s(n,e[0]),t[3]=f(n,e[1]),t[2]=s(n,e[2]),t[1]=f(n,e[3]),t}function I(n,t,e,r){return x(n,e?r?a:o:r?o:i,t)}function g(n,t,e,r){const u=[],l=e?r?a:o:r?o:i;for(let i=0;i<t.length;i++){const e=x(n,l,t[i]);e&&e.length>=3&&u.push(e)}return u.length?u:null}function N(n,t,e,r){const u=[],l=e?r?a:o:r?o:i;for(let i=0;i<t.length;i++){const e=x(n,l,t[i]);e&&e.length>=2&&u.push(e)}return u.length?u:null}function p({scale:n,translate:t},e){return e*n[0]+t[0]}function y({scale:n,translate:t},e){return t[1]-e*n[1]}function z(n,t,e){const r=new Array(e.length);if(!e.length)return r;const[u,l]=n.scale;let i=p(n,e[0][0]),o=y(n,e[0][1]);r[0]=t(e[0],i,o);for(let a=1;a<e.length;a++){const n=e[a];i+=n[0]*u,o-=n[1]*l,r[a]=t(n,i,o)}return r}function T(n,t,e){const r=new Array(e.length);for(let u=0;u<e.length;u++)r[u]=z(n,t,e[u]);return r}function M(n,t,e){return e?(t[0]=p(n,e[0]),t[1]=y(n,e[3]),t[2]=p(n,e[2]),t[3]=y(n,e[1]),t):[p(n,t[0]),y(n,t[3]),p(n,t[2]),y(n,t[1])]}function E(n,t,e,r){return z(n,e?r?a:o:r?o:i,t)}function P(n,t,e,r){return T(n,e?r?a:o:r?o:i,t)}function b(n,t,e,r){return T(n,e?r?a:o:r?o:i,t)}function F(n,t,e){let[r,u]=e[0],l=Math.min(r,t[0]),i=Math.min(u,t[1]),o=Math.max(r,t[2]),a=Math.max(u,t[3]);for(let m=1;m<e.length;m++){const[n,t]=e[m];r+=n,u+=t,n<0&&(l=Math.min(l,r)),n>0&&(o=Math.max(o,r)),t<0?i=Math.min(i,u):t>0&&(a=Math.max(a,u))}return n[0]=l,n[1]=i,n[2]=o,n[3]=a,n}function V(n,t){if(!t.length)return null;n[0]=n[1]=Number.POSITIVE_INFINITY,n[2]=n[3]=Number.NEGATIVE_INFINITY;for(let e=0;e<t.length;e++)F(n,n,t[e]);return n}function Y(n){const t=[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY];return F(t,t,n)}function _(n){return V([0,0,0,0],n)}function A(n){return V([0,0,0,0],n)}function w(n,t,e,r,u){return t.xmin=s(n,e.xmin),t.ymin=f(n,e.ymin),t.xmax=s(n,e.xmax),t.ymax=f(n,e.ymax),t!==e&&(r&&(t.zmin=e.zmin,t.zmax=e.zmax),u&&(t.mmin=e.mmin,t.mmax=e.mmax)),t}function G(n,t,e,r,u){return t.points=I(n,e.points,r,u)??[],t}function L(n,t,e,r,u){return t.x=s(n,e.x),t.y=f(n,e.y),t!==e&&(r&&(t.z=e.z),u&&(t.m=e.m)),t}function O(n,t,e,r,u){const l=g(n,e.rings,r,u);return l?(t.rings=l,t):null}function S(n,t,e,r,u){const l=N(n,e.paths,r,u);return l?(t.paths=l,t):null}function d(l,i){return l&&i?(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isPoint */ .fT)(i)?L(l,{},i,!1,!1):(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isPolyline */ .Rg)(i)?S(l,{},i,!1,!1):(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isPolygon */ .Bi)(i)?O(l,{},i,!1,!1):(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isMultipoint */ .U9)(i)?G(l,{},i,!1,!1):(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isExtent */ .ZC)(i)?w(l,{},i,!1,!1):null:null}function j(n,t,e,r,u){return t.xmin=p(n,e.xmin),t.ymin=y(n,e.ymin),t.xmax=p(n,e.xmax),t.ymax=y(n,e.ymax),t!==e&&(r&&(t.zmin=e.zmin,t.zmax=e.zmax),u&&(t.mmin=e.mmin,t.mmax=e.mmax)),t}function U(n,t,e,r,u){return null!=e&&(t.points=E(n,e.points,r,u)),t}function k(n,t,e,r,u){return null==e||(t.x=p(n,e.x),t.y=y(n,e.y),t!==e&&(r&&(t.z=e.z),u&&(t.m=e.m))),t}function q(n,t,e,r,u){return null!=e&&(t.rings=b(n,e.rings,r,u)),t}function v(n,t,e,r,u){return null!=e&&(t.paths=P(n,e.paths,r,u)),t}


/***/ }),

/***/ 9723:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ r)
/* harmony export */ });
/* unused harmony export equals */
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87926);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function n(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++){const r=e[t],a=n[t];if(r.length!==a.length)return!1;for(let e=0;e<r.length;e++)if(r[e]!==a[e])return!1}return!0}function t(e,t){if(e===t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!n(e[r],t[r]))return!1;return!0}function r(n,t){return n===t||null!=n&&null!=t&&(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .equals */ .aI)(n.spatialReference,t.spatialReference)&&n.x===t.x&&n.y===t.y&&n.z===t.z&&n.m===t.m}function a(n,r){return n.hasZ===r.hasZ&&n.hasM===r.hasM&&(!!e(n.spatialReference,r.spatialReference)&&t(n.paths,r.paths))}function u(n,r){return n.hasZ===r.hasZ&&n.hasM===r.hasM&&(!!e(n.spatialReference,r.spatialReference)&&t(n.rings,r.rings))}function i(t,r){return t.hasZ===r.hasZ&&t.hasM===r.hasM&&(!!e(t.spatialReference,r.spatialReference)&&n(t.points,r.points))}function s(n,t){return n.hasZ===t.hasZ&&n.hasM===t.hasM&&(!!e(n.spatialReference,t.spatialReference)&&(n.xmin===t.xmin&&n.ymin===t.ymin&&n.zmin===t.zmin&&n.xmax===t.xmax&&n.ymax===t.ymax&&n.zmax===t.zmax))}function l(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(e.type!==n.type)return!1;switch(e.type){case"point":return r(e,n);case"extent":return s(e,n);case"polyline":return a(e,n);case"polygon":return u(e,n);case"multipoint":return i(e,n);case"mesh":return!1;default:return}}function f(e,n){if(e===n)return!0;if(!e||!n)return!1;const t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(const a of t)if(e[a]!==n[a])return!1;return!0}function c(e,n){return e===n||null!=e&&null!=n&&e.objectId===n.objectId&&(!!l(e.geometry,n.geometry)&&!!f(e.attributes,n.attributes))}


/***/ }),

/***/ 28413:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HP: () => (/* binding */ y),
/* harmony export */   N3: () => (/* binding */ f),
/* harmony export */   RW: () => (/* binding */ z),
/* harmony export */   iQ: () => (/* binding */ F),
/* harmony export */   jy: () => (/* binding */ g),
/* harmony export */   w9: () => (/* binding */ N)
/* harmony export */ });
/* unused harmony exports estimateGeometryObjectSize, estimateSize, fromFeatureSetJSON, fromJSONGeometry, hasVertices, numVertices */
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86942);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78983);
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4675);
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80510);
/* harmony import */ var _geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20698);
/* harmony import */ var _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12433);
/* harmony import */ var _support_Field_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24738);
/* harmony import */ var _dehydratedFeatureComparison_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9723);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class y{constructor(e,t,s){this.uid=e,this.geometry=t,this.attributes=s,this.visible=!0,this.objectId=null,this.centroid=null}}function f(e){return null!=e.geometry}class g{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}}function d(e){const t=c.fromJSON(e.geometryType),s=r.fromJSON(e.spatialReference),n=e.transform,a=e.features.map((r=>{const a=b(r,t,s,e.objectIdFieldName),o=a.geometry;if(null!=o&&n)switch(o.type){case"point":a.geometry=h(n,o,o,o.hasZ,o.hasM);break;case"multipoint":a.geometry=u(n,o,o,!!o.hasZ,!!o.hasM);break;case"polygon":a.geometry=p(n,o,o,!!o.hasZ,!!o.hasM);break;case"polyline":a.geometry=l(n,o,o,!!o.hasZ,!!o.hasM);break;case"extent":case"mesh":a.geometry=o}return a}));return{geometryType:t,features:a,spatialReference:s,fields:e.fields?.map((e=>m.fromJSON(e)))??[],objectIdFieldName:e.objectIdFieldName,globalIdFieldName:e.globalIdFieldName,geohashFieldName:e.geohashFieldName,geometryProperties:e.geometryProperties,hasZ:e.hasZ,hasM:e.hasM,exceededTransferLimit:e.exceededTransferLimit,transform:null}}function b(e,t,r,n){return{uid:s(),objectId:n&&e.attributes?e.attributes[n]:null,attributes:e.attributes,geometry:x(e.geometry,t,r),visible:!0}}function x(e,t,s){if(null==e)return null;switch(t){case"point":{const t=e;return{x:t.x,y:t.y,z:t.z,m:t.m,hasZ:null!=t.z,hasM:null!=t.m,type:"point",spatialReference:s}}case"polyline":{const t=e;return{paths:t.paths,hasZ:!!t.hasZ,hasM:!!t.hasM,type:"polyline",spatialReference:s}}case"polygon":{const t=e;return{rings:t.rings,hasZ:!!t.hasZ,hasM:!!t.hasM,type:"polygon",spatialReference:s}}case"multipoint":{const t=e;return{points:t.points,hasZ:!!t.hasZ,hasM:!!t.hasM,type:"multipoint",spatialReference:s}}}}function Z(e){if(null==e)return 0;let s=32;switch(e.type){case"point":s+=42;break;case"polyline":case"polygon":{let t=0;const r=2+(e.hasZ?1:0)+(e.hasM?1:0),n="polyline"===e.type?e.paths:e.rings;for(const e of n)t+=e.length;s+=8*t*r+64,s+=128*t,s+=34,s+=32*(n.length+1);break}case"multipoint":{const t=2+(e.hasZ?1:0)+(e.hasM?1:0),r=e.points.length;s+=8*r*t+64,s+=128*r,s+=34,s+=32;break}case"extent":s+=98,e.hasM&&(s+=32),e.hasZ&&(s+=32);break;case"mesh":s+=t(e.vertexAttributes.position,e.vertexAttributes.normal,e.vertexAttributes.uv,e.vertexAttributes.tangent)}return s}function j(t){let s=32;return s+=e(t.attributes),s+=3,s+=8+Z(t.geometry),s}function M(e){if(null==e)return 0;switch(e.type){case"point":return 1;case"polyline":{let t=0;for(const s of e.paths)t+=s.length;return t}case"polygon":{let t=0;for(const s of e.rings)t+=s.length;return t}case"multipoint":return e.points.length;case"extent":return 2;case"mesh":{const t=e.vertexAttributes&&e.vertexAttributes.position;return t?t.length/3:0}default:return}}function k(e){if(null==e)return!1;switch(e.type){case"extent":case"point":return!0;case"polyline":for(const t of e.paths)if(t.length>0)return!0;return!1;case"polygon":for(const t of e.rings)if(t.length>0)return!0;return!1;case"multipoint":return e.points.length>0;case"mesh":return!e.loaded||e.vertexAttributes.position.length>0}}function N(e,t){switch((0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_3__/* .empty */ .Ie)(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[3]=e.x,t[1]=t[4]=e.y,e.hasZ&&(t[2]=t[5]=e.z);break;case"polyline":for(let s=0;s<e.paths.length;s++)(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_3__/* .expandWithNestedArray */ .Jf)(t,e.paths[s],!!e.hasZ);break;case"polygon":for(let s=0;s<e.rings.length;s++)(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_3__/* .expandWithNestedArray */ .Jf)(t,e.rings[s],!!e.hasZ);break;case"multipoint":(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_3__/* .expandWithNestedArray */ .Jf)(t,e.points,!!e.hasZ);break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[3]=e.xmax,t[4]=e.ymax,null!=e.zmin&&(t[2]=e.zmin),null!=e.zmax&&(t[5]=e.zmax)}}function F(e,t){switch((0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__/* .empty */ .Ie)(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[2]=e.x,t[1]=t[3]=e.y;break;case"polyline":for(let s=0;s<e.paths.length;s++)(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__/* .expandWithNestedArray */ .Jf)(t,e.paths[s]);break;case"polygon":for(let s=0;s<e.rings.length;s++)(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__/* .expandWithNestedArray */ .Jf)(t,e.rings[s]);break;case"multipoint":(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__/* .expandWithNestedArray */ .Jf)(t,e.points);break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[2]=e.xmax,t[3]=e.ymax}}function z(e,t){return null!=e.objectId?e.objectId:e.attributes&&t?e.attributes[t]:null}


/***/ }),

/***/ 58408:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ s)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/compilerUtils.js
var compilerUtils = __webpack_require__(73345);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/uid.js
var uid = __webpack_require__(65061);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/zscale.js
var zscale = __webpack_require__(8034);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/dehydratedFeatures.js
var dehydratedFeatures = __webpack_require__(28413);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/featureConversionUtils.js
var featureConversionUtils = __webpack_require__(21355);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/Field.js
var Field = __webpack_require__(24738);
;// ../node_modules/@arcgis/core/rest/query/operations/pbfDehydratedFeatureSet.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function l(t,e){return e}function u(t,e,r,s){switch(r){case 0:return f(t,e+s,0);case 1:return"lowerLeft"===t.originPosition?f(t,e+s,1):y(t,e+s,1)}}function p(t,e,r,s){return 2===r?f(t,e,2):u(t,e,r,s)}function c(t,e,r,s){return 2===r?f(t,e,3):u(t,e,r,s)}function d(t,e,r,s){return 3===r?f(t,e,3):p(t,e,r,s)}function f({translate:t,scale:e},r,s){return t[s]+r*e[s]}function y({translate:t,scale:e},r,s){return t[s]-r*e[s]}class m{constructor(t){this._options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=l,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{}}createFeatureResult(){return new dehydratedFeatures/* DehydratedFeatureSetClass */.jy}finishFeatureResult(t){if(this._options.applyTransform&&(t.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!t.hasZ)return;const e=(0,zscale/* getGeometryZScaler */.N)(t.geometryType,this._options.sourceSpatialReference,t.spatialReference);if(null!=e)for(const r of t.features)e(r.geometry)}createSpatialReference(){return new SpatialReference/* default */.A}addField(t,e){t.fields.push(Field/* default */.A.fromJSON(e));const r=t.fields.map((t=>t.name));this._attributesConstructor=function(){for(const t of r)this[t]=null}}addFeature(t,e){const r=this._options.maxStringAttributeLength??0;if(r>0)for(const s in e.attributes){const t=e.attributes[s];"string"==typeof t&&t.length>r&&(e.attributes[s]="")}t.features.push(e)}addQueryGeometry(t,e){const{queryGeometry:r,queryGeometryType:s}=e,o=(0,featureConversionUtils/* unquantizeOptimizedGeometry */.Ch)(r.clone(),r,!1,!1,this._transform),i=(0,featureConversionUtils/* convertToGeometry */.zv)(o,s,!1,!1);let h=null;switch(s){case"esriGeometryPoint":h="point";break;case"esriGeometryPolygon":h="polygon";break;case"esriGeometryPolyline":h="polyline";break;case"esriGeometryMultipoint":h="multipoint"}i.type=h,t.queryGeometryType=s,t.queryGeometry=i}prepareFeatures(e){switch(this._transform=e.transform??null,this._options.applyTransform&&e.transform&&(this._applyTransform=this._deriveApplyTransform(e)),this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++,e.geometryType){case"point":this.addCoordinate=(t,e,r)=>this.addCoordinatePoint(t,e,r),this.createGeometry=t=>this.createPointGeometry(t);break;case"polygon":this.addCoordinate=(t,e,r)=>this._addCoordinatePolygon(t,e,r),this.createGeometry=t=>this._createPolygonGeometry(t);break;case"polyline":this.addCoordinate=(t,e,r)=>this._addCoordinatePolyline(t,e,r),this.createGeometry=t=>this._createPolylineGeometry(t);break;case"multipoint":this.addCoordinate=(t,e,r)=>this._addCoordinateMultipoint(t,e,r),this.createGeometry=t=>this._createMultipointGeometry(t);break;case"mesh":case"extent":break;default:(0,compilerUtils/* neverReached */.Xb)(e.geometryType)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,new dehydratedFeatures/* DehydratedFeatureClass */.HP((0,uid/* generateUID */.L)(),null,new this._attributesConstructor)}allocateCoordinates(){const t=this._lengths.reduce(((t,e)=>t+e),0);this._coordinateBuffer=new Float64Array(t*this._vertexDimension),this._coordinateBufferPtr=0}addLength(t,e){0===this._lengths.length&&(this._toAddInCurrentPath=e),this._lengths.push(e)}createPointGeometry(t){const e={type:"point",x:0,y:0,spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM};return e.hasZ&&(e.z=0),e.hasM&&(e.m=0),e}addCoordinatePoint(t,e,r){const s=this._transform?this._applyTransform(this._transform,e,r,0):e;if(null!=s)switch(r){case 0:t.x=s;break;case 1:t.y=s;break;case 2:t.hasZ?t.z=s:t.m=s;break;case 3:t.m=s}}_transformPathLikeValue(t,e){let r=0;return e<=1&&(r=this._previousCoordinate[e],this._previousCoordinate[e]+=t),this._transform?this._applyTransform(this._transform,t,e,r):t}_addCoordinatePolyline(t,e,r){this._dehydratedAddPointsCoordinate(t.paths,e,r)}_addCoordinatePolygon(t,e,r){this._dehydratedAddPointsCoordinate(t.rings,e,r)}_addCoordinateMultipoint(t,e,r){0===r&&t.points.push([]);const s=this._transformPathLikeValue(e,r);t.points[t.points.length-1].push(s)}_createPolygonGeometry(t){return{type:"polygon",rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createPolylineGeometry(t){return{type:"polyline",paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createMultipointGeometry(t){return{type:"multipoint",points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_dehydratedAddPointsCoordinate(t,e,r){0===r&&0==this._toAddInCurrentPath--&&(t.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const s=this._transformPathLikeValue(e,r),o=t[t.length-1],i=this._coordinateBuffer;if(i){if(0===r){const t=this._coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT;o.push(new Float64Array(i.buffer,t,this._vertexDimension))}i[this._coordinateBufferPtr++]=s}}_deriveApplyTransform(t){const{hasZ:e,hasM:r}=t;return e&&r?d:e?p:r?c:u}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/query/operations/pbfQueryUtils.js
var pbfQueryUtils = __webpack_require__(79305);
;// ../node_modules/@arcgis/core/views/3d/support/PBFDecoderWorker.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class t{_parseFeatureQuery(t){const s=(0,pbfQueryUtils/* parsePBFFeatureQuery */.m)(t.buffer,new m(t.options)),o={...s,spatialReference:s.spatialReference?.toJSON(),fields:s.fields?s.fields.map((e=>e.toJSON())):void 0};return Promise.resolve(o)}}function s(){return new t}


/***/ })

};
;