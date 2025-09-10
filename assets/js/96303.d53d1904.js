"use strict";
exports.id = 96303;
exports.ids = [96303];
exports.modules = {

/***/ 96303:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PBFDecoderWorker_s)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/compilerUtils.js
var compilerUtils = __webpack_require__(95039);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/uid.js
var uid = __webpack_require__(78851);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(44153);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/zscale.js
var zscale = __webpack_require__(55792);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var core_has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/memoryEstimations.js
var memoryEstimations = __webpack_require__(28208);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/aaBoundingBox.js
var aaBoundingBox = __webpack_require__(46373);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/aaBoundingRect.js
var aaBoundingRect = __webpack_require__(2532);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/quantizationUtils.js
var quantizationUtils = __webpack_require__(66220);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/typeUtils.js
var typeUtils = __webpack_require__(54483);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/Field.js
var Field = __webpack_require__(45352);
;// ./node_modules/@arcgis/core/views/2d/layers/graphics/densificationConstants.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function densificationConstants_n(){return has("curve-densification-coarse-segments")}function densificationConstants_e(){return has("curve-densification-max-segments")}function densificationConstants_i(){return has("curve-densification-min-segments")}function densificationConstants_t(){return has("curve-densification-pixel-deviation")}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(4506);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(67488);
;// ./node_modules/@arcgis/core/layers/graphics/dehydratedFeatureComparison.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function dehydratedFeatureComparison_t(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++){const r=e[t],a=n[t];if(r.length!==a.length)return!1;for(let e=0;e<r.length;e++)if(r[e]!==a[e])return!1}return!0}function dehydratedFeatureComparison_r(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(!dehydratedFeatureComparison_t(e[r],n[r]))return!1;return!0}function dehydratedFeatureComparison_a(e,t){return e===t||null!=e&&null!=t&&n(e.spatialReference,t.spatialReference)&&e.x===t.x&&e.y===t.y&&e.z===t.z&&e.m===t.m}function dehydratedFeatureComparison_i(t,r,a){return t===r||null!=t&&null!=r&&n(t.spatialReference,r.spatialReference)&&e(t.x,r.x,a)&&e(t.y,r.y,a)&&e(t.z??0,r.z??0,a)&&e(t.m??0,r.m??0,a)}function dehydratedFeatureComparison_u(e,t){return e.hasZ===t.hasZ&&e.hasM===t.hasM&&(!!n(e.spatialReference,t.spatialReference)&&dehydratedFeatureComparison_r(e.paths,t.paths))}function dehydratedFeatureComparison_l(e,t){return e.hasZ===t.hasZ&&e.hasM===t.hasM&&(!!n(e.spatialReference,t.spatialReference)&&dehydratedFeatureComparison_r(e.rings,t.rings))}function dehydratedFeatureComparison_s(e,r){return e.hasZ===r.hasZ&&e.hasM===r.hasM&&(!!n(e.spatialReference,r.spatialReference)&&dehydratedFeatureComparison_t(e.points,r.points))}function dehydratedFeatureComparison_f(e,t){return e.hasZ===t.hasZ&&e.hasM===t.hasM&&(!!n(e.spatialReference,t.spatialReference)&&(e.xmin===t.xmin&&e.ymin===t.ymin&&e.zmin===t.zmin&&e.xmax===t.xmax&&e.ymax===t.ymax&&e.zmax===t.zmax))}function dehydratedFeatureComparison_c(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(e.type!==n.type)return!1;switch(e.type){case"point":return dehydratedFeatureComparison_a(e,n);case"extent":return dehydratedFeatureComparison_f(e,n);case"polyline":return dehydratedFeatureComparison_u(e,n);case"polygon":return dehydratedFeatureComparison_l(e,n);case"multipoint":return dehydratedFeatureComparison_s(e,n);case"mesh":return!1;default:return}}function dehydratedFeatureComparison_o(e,n){if(e===n)return!0;if(!e||!n)return!1;const t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(const a of t)if(e[a]!==n[a])return!1;return!0}function dehydratedFeatureComparison_h(e,n){return e===n||null!=e&&null!=n&&e.objectId===n.objectId&&(!!dehydratedFeatureComparison_c(e.geometry,n.geometry)&&!!dehydratedFeatureComparison_o(e.attributes,n.attributes))}

;// ./node_modules/@arcgis/core/layers/graphics/dehydratedFeatures.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class d{constructor(e,t,s){this.uid=e,this.geometry=t,this.attributes=s,this.visible=!0,this.objectId=null,this.centroid=null}}function b(e){return null!=e.geometry}class x{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}}function j(e,t){const s=f.fromJSON(e.geometryType),n=i.fromJSON(e.spatialReference),r=e.transform,o=e.objectIdFieldName,a=t?.maxStringAttributeLength,l=t?.maxStringAttributeFields;let u;const g=e.features.map((t=>{const i=N(t,s,n,e.objectIdFieldName),f=i.geometry;if(w(i.attributes,l,a,(e=>{u??=[];const t=R(i,o);null!=t&&u.push({objectId:t,attribute:e})})),null!=f&&r)switch(f.type){case"point":i.geometry=h(r,f,f);break;case"multipoint":i.geometry=m(r,f,f);break;case"polygon":i.geometry=p(r,f,f);break;case"polyline":i.geometry=c(r,f,f);break;case"extent":case"mesh":i.geometry=f}return i}));return{geometryType:s,features:g,spatialReference:n,fields:e.fields?.map((e=>y.fromJSON(e)))??[],objectIdFieldName:e.objectIdFieldName,globalIdFieldName:e.globalIdFieldName,geohashFieldName:e.geohashFieldName,geometryProperties:e.geometryProperties,hasZ:e.hasZ,hasM:e.hasM,exceededTransferLimit:e.exceededTransferLimit,transform:null,missingAttributes:u}}function N(e,t,s,n){return{uid:r(),objectId:n&&e.attributes?e.attributes[n]:null,attributes:e.attributes,geometry:Z(e.geometry,t,s),visible:!0}}function Z(e,t,s){if(null==e)return null;switch(t){case"point":{const t=e;return{x:t.x,y:t.y,z:t.z,m:t.m,hasZ:null!=t.z,hasM:null!=t.m,type:"point",spatialReference:s}}case"polyline":{const t=e;return{paths:t.paths,hasZ:!!t.hasZ,hasM:!!t.hasM,type:"polyline",spatialReference:s}}case"polygon":{const t=e;return{rings:t.rings,hasZ:!!t.hasZ,hasM:!!t.hasM,type:"polygon",spatialReference:s}}case"multipoint":{const t=e;return{points:t.points,hasZ:!!t.hasZ,hasM:!!t.hasM,type:"multipoint",spatialReference:s}}}}function F(n){if(null==n)return 0;switch(n.type){case"point":return e+10+8+24;case"polyline":case"polygon":{let t=0;const r=2+(n.hasZ?1:0)+(n.hasM?1:0),i="polyline"===n.type?n.paths:n.rings,o="polyline"===n.type?n.curvePaths:n.curveRings;if(o?.length){const e=3*g()*128;t=8*e*r+128*e+32*(i.length+1)}else t=s(i);return e+64+t+34}case"multipoint":{const t=s(n.points);return e+t+64+34+32}case"extent":return e+10+64+34;case"mesh":{const s=n.vertexAttributes;return e+t(s.position,s.normal,s.uv,s.tangent)}default:return e}}function I(e){let t=32;return t+=n(e.attributes),t+=3,t+=8+F(e.geometry),t}function k(e){if(null==e)return 0;switch(e.type){case"point":return 1;case"polyline":{let t=0;for(const s of e.paths)t+=s.length;return t}case"polygon":{let t=0;for(const s of e.rings)t+=s.length;return t}case"multipoint":return e.points.length;case"extent":return 2;case"mesh":{const t=e.vertexAttributes&&e.vertexAttributes.position;return t?t.length/3:0}default:return}}function M(e){if(null==e)return!1;switch(e.type){case"extent":case"point":return!0;case"polyline":for(const t of e.paths)if(t.length>0)return!0;return!1;case"polygon":for(const t of e.rings)if(t.length>0)return!0;return!1;case"multipoint":return e.points.length>0;case"mesh":return!e.loaded||e.vertexAttributes.position.length>0}}function v(e,t){switch(o(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[3]=e.x,t[1]=t[4]=e.y,e.hasZ&&(t[2]=t[5]=e.z);break;case"polyline":for(let s=0;s<e.paths.length;s++)a(t,e.paths[s],!!e.hasZ);break;case"polygon":for(let s=0;s<e.rings.length;s++)a(t,e.rings[s],!!e.hasZ);break;case"multipoint":a(t,e.points,!!e.hasZ);break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[3]=e.xmax,t[4]=e.ymax,null!=e.zmin&&(t[2]=e.zmin),null!=e.zmax&&(t[5]=e.zmax)}return t}function z(e,t){switch(l(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[2]=e.x,t[1]=t[3]=e.y;break;case"polyline":for(let s=0;s<e.paths.length;s++)u(t,e.paths[s]);break;case"polygon":for(let s=0;s<e.rings.length;s++)u(t,e.rings[s]);break;case"multipoint":u(t,e.points);break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[2]=e.xmax,t[3]=e.ymax}}function R(e,t){return null!=e.objectId?e.objectId:e.attributes&&t?e.attributes[t]:null}function w(e,t,s,n){if(t?.size&&null!=s&&e)for(const r in e){if(!t.has(r))continue;const i=e[r];"string"==typeof i&&i.length>s&&(n(r),e[r]="")}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/graphics/featureConversionUtils.js
var featureConversionUtils = __webpack_require__(5525);
;// ./node_modules/@arcgis/core/rest/query/operations/pbfDehydratedFeatureSet.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function pbfDehydratedFeatureSet_u(t,e){return e}function pbfDehydratedFeatureSet_p(t,e,r,s){switch(r){case 0:return pbfDehydratedFeatureSet_f(t,e+s,0);case 1:return"lowerLeft"===t.originPosition?pbfDehydratedFeatureSet_f(t,e+s,1):pbfDehydratedFeatureSet_y(t,e+s,1)}}function pbfDehydratedFeatureSet_d(t,e,r,s){return 2===r?pbfDehydratedFeatureSet_f(t,e,2):pbfDehydratedFeatureSet_p(t,e,r,s)}function pbfDehydratedFeatureSet_c(t,e,r,s){return 2===r?pbfDehydratedFeatureSet_f(t,e,3):pbfDehydratedFeatureSet_p(t,e,r,s)}function pbfDehydratedFeatureSet_m(t,e,r,s){return 3===r?pbfDehydratedFeatureSet_f(t,e,3):pbfDehydratedFeatureSet_d(t,e,r,s)}function pbfDehydratedFeatureSet_f({translate:t,scale:e},r,s){return t[s]+r*e[s]}function pbfDehydratedFeatureSet_y({translate:t,scale:e},r,s){return t[s]-r*e[s]}class _{constructor(t){this._options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=pbfDehydratedFeatureSet_u,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{},this._missingAttributes=[]}get missingAttributes(){return this._missingAttributes}createFeatureResult(){return new x}finishFeatureResult(t){if(this._options.applyTransform&&(t.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!t.hasZ)return;const e=(0,zscale/* getGeometryZScaler */.N)(t.geometryType,this._options.sourceSpatialReference,t.spatialReference);if(null!=e)for(const r of t.features)e(r.geometry)}createSpatialReference(){return new SpatialReference/* default */.A}addField(t,e){t.fields.push(Field/* default */.A.fromJSON(e));const r=t.fields.map((t=>t.name));this._attributesConstructor=function(){for(const t of r)this[t]=null}}addFeature(t,e){const r=this._options.maxStringAttributeLength,s=this._options.maxStringAttributeFields;w(e.attributes,s,r,(r=>{const s=e.attributes[t.objectIdFieldName];null!=s&&this._missingAttributes.push({objectId:s,attribute:r})})),t.features.push(e)}addQueryGeometry(t,e){const{queryGeometry:r,queryGeometryType:s}=e,i=this._transform?(0,featureConversionUtils/* unquantizeOptimizedGeometry */.Ch)(r.clone(),r,!1,!1,this._transform):r.clone(),o=(0,featureConversionUtils/* convertToGeometry */.zv)(i,s,!1,!1);switch(s){case"esriGeometryPoint":o.type="point";break;case"esriGeometryPolygon":o.type="polygon";break;case"esriGeometryPolyline":o.type="polyline";break;case"esriGeometryMultipoint":o.type="multipoint"}t.queryGeometryType=s,t.queryGeometry=o}prepareFeatures(e){switch(this._transform=e.transform??null,this._options.applyTransform&&e.transform&&(this._applyTransform=this._deriveApplyTransform(e)),this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++,e.geometryType){case"point":this.addCoordinate=(t,e,r)=>this.addCoordinatePoint(t,e,r),this.createGeometry=t=>this.createPointGeometry(t);break;case"polygon":this.addCoordinate=(t,e,r)=>this._addCoordinatePolygon(t,e,r),this.createGeometry=t=>this._createPolygonGeometry(t);break;case"polyline":this.addCoordinate=(t,e,r)=>this._addCoordinatePolyline(t,e,r),this.createGeometry=t=>this._createPolylineGeometry(t);break;case"multipoint":this.addCoordinate=(t,e,r)=>this._addCoordinateMultipoint(t,e,r),this.createGeometry=t=>this._createMultipointGeometry(t);break;case"mesh":case"extent":break;default:(0,compilerUtils/* neverReached */.Xb)(e.geometryType)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,new d((0,uid/* generateUID */.c)(),null,new this._attributesConstructor)}allocateCoordinates(){const t=this._lengths.reduce(((t,e)=>t+e),0);this._coordinateBuffer=new Float64Array(t*this._vertexDimension),this._coordinateBufferPtr=0}addLength(t,e){0===this._lengths.length&&(this._toAddInCurrentPath=e),this._lengths.push(e)}createPointGeometry(t){const e={type:"point",x:0,y:0,spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM};return e.hasZ&&(e.z=0),e.hasM&&(e.m=0),e}addCoordinatePoint(t,e,r){const s=this._transform?this._applyTransform(this._transform,e,r,0):e;if(null!=s)switch(r){case 0:t.x=s;break;case 1:t.y=s;break;case 2:t.hasZ?t.z=s:t.m=s;break;case 3:t.m=s}}_transformPathLikeValue(t,e){let r=0;return e<=1&&(r=this._previousCoordinate[e],this._previousCoordinate[e]+=t),this._transform?this._applyTransform(this._transform,t,e,r):t}_addCoordinatePolyline(t,e,r){this._dehydratedAddPointsCoordinate(t.paths,e,r)}_addCoordinatePolygon(t,e,r){this._dehydratedAddPointsCoordinate(t.rings,e,r)}_addCoordinateMultipoint(t,e,r){0===r&&t.points.push([]);const s=this._transformPathLikeValue(e,r);t.points[t.points.length-1].push(s)}_createPolygonGeometry(t){return{type:"polygon",rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createPolylineGeometry(t){return{type:"polyline",paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createMultipointGeometry(t){return{type:"multipoint",points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_dehydratedAddPointsCoordinate(t,e,r){0===r&&0===this._toAddInCurrentPath--&&(t.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const s=this._transformPathLikeValue(e,r),i=t[t.length-1],o=this._coordinateBuffer;if(o){if(0===r){const t=this._coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT;i.push(new Float64Array(o.buffer,t,this._vertexDimension))}o[this._coordinateBufferPtr++]=s}}_deriveApplyTransform(t){const{hasZ:e,hasM:r}=t;return e&&r?pbfDehydratedFeatureSet_m:e?pbfDehydratedFeatureSet_d:r?pbfDehydratedFeatureSet_c:pbfDehydratedFeatureSet_p}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/query/operations/pbfQueryUtils.js
var pbfQueryUtils = __webpack_require__(91039);
;// ./node_modules/@arcgis/core/views/3d/support/PBFDecoderWorker.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class PBFDecoderWorker_t{_parseFeatureQuery(t){const s=new _(t.options),i=(0,pbfQueryUtils/* parsePBFFeatureQuery */.m)(t.buffer,s),o={...i,spatialReference:i.spatialReference?.toJSON(),fields:i.fields?i.fields.map((e=>e.toJSON())):void 0,missingAttributes:s.missingAttributes};return Promise.resolve(o)}}function PBFDecoderWorker_s(){return new PBFDecoderWorker_t}


/***/ })

};
;