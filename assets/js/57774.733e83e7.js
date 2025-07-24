"use strict";
exports.id = 57774;
exports.ids = [57774];
exports.modules = {

/***/ 43861:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  O7: () => (/* binding */ P),
  el: () => (/* binding */ R)
});

// UNUSED EXPORTS: getDenormalizedExtent, normalizeMapX, straightLineDensify

// EXTERNAL MODULE: ./node_modules/@arcgis/core/config.js
var config = __webpack_require__(32083);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(62991);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Polygon.js
var Polygon = __webpack_require__(65648);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Polyline.js
var Polyline = __webpack_require__(38648);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/normalizeUtilsCommon.js
var normalizeUtilsCommon = __webpack_require__(75981);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(67488);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/webMercatorUtils.js
var webMercatorUtils = __webpack_require__(64672);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(38116);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/jsonUtils.js
var jsonUtils = __webpack_require__(56053);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/utils.js
var utils = __webpack_require__(36321);
;// ./node_modules/@arcgis/core/rest/geometryService/cut.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function i(i,n,p,m){const a=(0,utils/* parseUrl */.Dl)(i),u=n[0].spatialReference,c={...m,responseType:"json",query:{...a.query,f:"json",sr:(0,spatialReferenceUtils/* srToRESTValue */.YX)(u),target:JSON.stringify({geometryType:(0,jsonUtils/* getJsonType */.$B)(n[0]),geometries:n}),cutter:JSON.stringify(p)}},f=await (0,request/* default */.A)(a.path+"/cut",c),{cutIndexes:y,geometries:g=[]}=f.data;return{cutIndexes:y,geometries:g.map((e=>{const t=(0,jsonUtils/* fromJSON */.rS)(e);return t.spatialReference=u,t}))}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(19759);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/geometryService/utils.js
var geometryService_utils = __webpack_require__(96905);
;// ./node_modules/@arcgis/core/rest/geometryService/simplify.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function m(m,p,f){const n="string"==typeof m?(0,urlUtils/* urlToObject */.An)(m):m,a=p[0].spatialReference,u=(0,jsonUtils/* getJsonType */.$B)(p[0]),l={...f,query:{...n.query,f:"json",sr:(0,spatialReferenceUtils/* srToRESTValue */.YX)(a),geometries:JSON.stringify((0,geometryService_utils/* encodeGeometries */.X)(p))}},{data:y}=await (0,request/* default */.A)(n.path+"/simplify",l);return (0,geometryService_utils/* decodeGeometries */.V)(y.geometries,u,a)}

;// ./node_modules/@arcgis/core/geometry/support/normalizeUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const normalizeUtils_m=()=>Logger/* default */.A.getLogger("esri.geometry.support.normalizeUtils");function g(t){return"polygon"===t.type}function y(t){return"polygon"===t[0].type}function x(t){return"polyline"===t[0].type}function d(t){const e=[];let n=0,o=0;for(let s=0;s<t.length;s++){const r=t[s];let i=null;for(let t=0;t<r.length;t++)i=r[t],e.push(i),0===t?(n=i[0],o=n):(n=Math.min(n,i[0]),o=Math.max(o,i[0]));i&&e.push([(n+o)/2,0])}return e}function M(t,n){if(!(t instanceof Polyline/* default */.A||t instanceof Polygon/* default */.A)){const t="straightLineDensify: the input geometry is neither polyline nor polygon";throw normalizeUtils_m().error(t),new Error/* default */.A("internal:geometry",t)}const r=(0,normalizeUtilsCommon/* getGeometryParts */.r8)(t),i=[];for(const e of r){const t=[];i.push(t),t.push([e[0][0],e[0][1]]);for(let o=0;o<e.length-1;o++){const s=e[o][0],r=e[o][1],i=e[o+1][0],l=e[o+1][1],c=Math.sqrt((i-s)*(i-s)+(l-r)*(l-r)),f=(l-r)/c,u=(i-s)/c,p=c/n;if(p>1){for(let l=1;l<=p-1;l++){const e=l*n,o=u*e+s,i=f*e+r;t.push([o,i])}const e=(c+Math.floor(p-1)*n)/2,o=u*e+s,i=f*e+r;t.push([o,i])}t.push([i,l])}}return g(t)?new Polygon/* default */.A({rings:i,spatialReference:t.spatialReference}):new Polyline/* default */.A({paths:i,spatialReference:t.spatialReference})}function w(t,e,n){if(e){const e=M(t,1e6);t=(0,webMercatorUtils/* webMercatorToGeographic */.ci)(e,!0)}return n&&(t=(0,normalizeUtilsCommon/* updatePolyGeometry */.kS)(t,n)),t}function b(t,e,n){if(Array.isArray(t)){const o=t[0];if(o>e){const n=(0,normalizeUtilsCommon/* offsetMagnitude */.kd)(o,e);t[0]=o+n*(-2*e)}else if(o<n){const e=(0,normalizeUtilsCommon/* offsetMagnitude */.kd)(o,n);t[0]=o+e*(-2*n)}}else{const o=t.x;if(o>e){const n=(0,normalizeUtilsCommon/* offsetMagnitude */.kd)(o,e);t=t.clone().offset(n*(-2*e),0)}else if(o<n){const e=(0,normalizeUtilsCommon/* offsetMagnitude */.kd)(o,n);t=t.clone().offset(e*(-2*n),0)}}return t}function j(t,e){let n=-1;for(let o=0;o<e.cutIndexes.length;o++){const s=e.cutIndexes[o],r=e.geometries[o],l=(0,normalizeUtilsCommon/* getGeometryParts */.r8)(r);for(let t=0;t<l.length;t++){const e=l[t];e.some((n=>{if(n[0]<180)return!0;{let n=0;for(let t=0;t<e.length;t++){const o=e[t][0];n=o>n?o:n}n=Number(n.toFixed(9));const o=-360*(0,normalizeUtilsCommon/* offsetMagnitude */.kd)(n,180);for(let s=0;s<e.length;s++){const e=r.getPoint(t,s);r.setPoint(t,s,e.clone().offset(o,0))}return!0}}))}if(s===n){if(y(t))for(const e of (0,normalizeUtilsCommon/* getGeometryParts */.r8)(r))t[s]=t[s].addRing(e);else if(x(t))for(const e of (0,normalizeUtilsCommon/* getGeometryParts */.r8)(r))t[s]=t[s].addPath(e)}else n=s,t[s]=r}return t}async function R(e,n,c){if(!Array.isArray(e))return R([e],n);n&&"string"!=typeof n&&normalizeUtils_m().warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const p="string"==typeof n?n:n?.url??config/* default */.A.geometryServiceUrl;let g,y,x,d,M,v,P,L,U=0;const z=[],A=[];for(const t of e)if(null!=t)if(g||(g=t.spatialReference,y=(0,spatialReferenceUtils/* getInfo */.Vp)(g),x=g.isWebMercator,v=x?102100:4326,d=normalizeUtilsCommon/* cutParams */.j7[v].maxX,M=normalizeUtilsCommon/* cutParams */.j7[v].minX,P=normalizeUtilsCommon/* cutParams */.j7[v].plus180Line,L=normalizeUtilsCommon/* cutParams */.j7[v].minus180Line),y)if("mesh"===t.type)A.push(t);else if("point"===t.type)A.push(b(t.clone(),d,M));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((t=>b(t,d,M))),A.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,y);A.push(e.rings?new Polygon/* default */.A(e):e)}else if(t.extent){const e=t.extent,n=(0,normalizeUtilsCommon/* offsetMagnitude */.kd)(e.xmin,M)*(2*d);let o=0===n?t.clone():(0,normalizeUtilsCommon/* updatePolyGeometry */.kS)(t.clone(),n);e.offset(n,0);let{xmin:s,xmax:r}=e;s=Number(s.toFixed(9)),r=Number(r.toFixed(9)),e.intersects(P)&&r!==d?(U=r>U?r:U,o=w(o,x),z.push(o),A.push("cut")):e.intersects(L)&&s!==M?(U=r*(2*d)>U?r*(2*d):U,o=w(o,x,360),z.push(o),A.push("cut")):A.push(o)}else A.push(t.clone());else A.push(t);else A.push(t);let F=(0,normalizeUtilsCommon/* offsetMagnitude */.kd)(U,d),N=-90;const S=F,k=new Polyline/* default */.A;for(;F>0;){const t=360*F-180;k.addPath([[t,N],[t,-1*N]]),N*=-1,F--}if(z.length>0&&S>0){const t=j(z,await i(p,z,k,c)),n=[],o=[];for(let i=0;i<A.length;i++){const s=A[i];if("cut"!==s)o.push(s);else{const s=t.shift(),r=e[i];null!=r&&"polygon"===r.type&&r.rings&&r.rings.length>1&&s.rings.length>=r.rings.length?(n.push(s),o.push("simplify")):o.push(x?(0,webMercatorUtils/* geographicToWebMercator */.Gh)(s):s)}}if(!n.length)return o;const s=await m(p,n,c),r=[];for(let e=0;e<o.length;e++){const t=o[e];"simplify"!==t?r.push(t):r.push(x?(0,webMercatorUtils/* geographicToWebMercator */.Gh)(s.shift()):s.shift())}return r}const C=[];for(let t=0;t<A.length;t++){const e=A[t];if("cut"!==e)C.push(e);else{const t=z.shift();C.push(!0===x?(0,webMercatorUtils/* geographicToWebMercator */.Gh)(t):t)}}return C}function v(t){if(!t)return null;const e=t.extent;if(!e)return null;const n=t.spatialReference&&f(t.spatialReference);if(!n)return e;const[o,s]=n.valid,r=2*s,{width:i}=e;let l,{xmin:c,xmax:u}=e;if([c,u]=[u,c],"extent"===t.type||0===i||i<=s||i>r||c<o||u>s)return e;switch(t.type){case"polygon":if(!(t.rings.length>1))return e;l=d(t.rings);break;case"polyline":if(!(t.paths.length>1))return e;l=d(t.paths);break;case"multipoint":l=t.points}const p=e.clone();for(let f=0;f<l.length;f++){let t=l[f][0];t<0?(t+=s,u=Math.max(t,u)):(t-=s,c=Math.min(t,c))}return p.xmin=c,p.xmax=u,p.width<i?(p.xmin-=s,p.xmax-=s,p):e}function P(t,e,n){const o=(0,spatialReferenceUtils/* getInfo */.Vp)(n);if(null==o)return t;const[s,r]=o.valid,i=2*r;let l=0,c=0;e>r?l=Math.ceil(Math.abs(e-r)/i):e<s&&(l=-Math.ceil(Math.abs(e-s)/i)),t>r?c=Math.ceil(Math.abs(t-r)/i):t<s&&(c=-Math.ceil(Math.abs(t-s)/i));let u=t+(l-c)*i;const p=u-e;return p>r?u-=i:p<s&&(u+=i),u}function L(t,e){const n=f(e);if(n){const[e,o]=n.valid,s=o-e;if(t<e)for(;t<e;)t+=s;if(t>o)for(;t>o;)t-=s}return t}


/***/ }),

/***/ 75981:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j7: () => (/* binding */ r),
/* harmony export */   kS: () => (/* binding */ s),
/* harmony export */   kd: () => (/* binding */ i),
/* harmony export */   r8: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _Polyline_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38648);
/* harmony import */ var _SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44153);
/* harmony import */ var _jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56053);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const r={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new _Polyline_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.WebMercator}),minus180Line:new _Polyline_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new _Polyline_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({paths:[[[180,-180],[180,180]]],spatialReference:_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.WGS84}),minus180Line:new _Polyline_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({paths:[[[-180,-180],[-180,180]]],spatialReference:_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.WGS84})}};function i(e,n){return Math.ceil((e-n)/(2*n))}function s(e,n){const t=o(e);for(const r of t)for(const e of r)e[0]+=n;return e}function o(e){return (0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isPolygon */ .Bi)(e)?e.rings:e.paths}


/***/ }),

/***/ 35393:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyEdits: () => (/* binding */ $),
/* harmony export */   r3: () => (/* binding */ A),
/* harmony export */   uploadAssets: () => (/* binding */ q),
/* harmony export */   zp: () => (/* binding */ I)
/* harmony export */ });
/* unused harmony exports checkEditingCapabilities, isFeatureIdentifierWithGlobalId, isFeatureIdentifierWithObjectId, normalizeCollections, normalizeEdits, normalizeGeometries, shallowCloneFeature */
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20857);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54192);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62991);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15565);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80861);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49175);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19759);
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1874);
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43861);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(67488);
/* harmony import */ var _mixins_EditBusLayer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(88940);
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(46227);
/* harmony import */ var _support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(52360);
/* harmony import */ var _support_layerUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(44837);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function w(e){return null!=e?.applyEdits}function F(e){return"object"==typeof e&&null!=e&&"objectId"in e&&!!e.objectId}function A(e){return e.every(F)}function v(e){return"object"==typeof e&&null!=e&&"globalId"in e&&!!e.globalId}function I(e){return e.every(v)}async function $(e,t,a,s={}){let n;const o="gdbVersion"in e?e.gdbVersion:null,l=s.gdbVersion??o;if((0,_mixins_EditBusLayer_js__WEBPACK_IMPORTED_MODULE_10__/* .isEditBusLayer */ .Mk)(e)&&e.url)n=(0,_mixins_EditBusLayer_js__WEBPACK_IMPORTED_MODULE_10__/* .emitApplyEditsEvent */ .Zk)(e.url,e.layerId,l,"original-and-current-features"===s.returnServiceEditsOption);else{n=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .createResolver */ .Tw)(),n.promise.then((t=>{(t.addedFeatures.length||t.updatedFeatures.length||t.deletedFeatures.length||t.addedAttachments.length||t.updatedAttachments.length||t.deletedAttachments.length)&&e.emit("edits",t)}));const t={result:n.promise};e.emit("apply-edits",t)}try{const{results:i,edits:o}=await E(e,t,a,s),l=e=>e.filter((e=>!e.error)).map(_core_lang_js__WEBPACK_IMPORTED_MODULE_3__/* .clone */ .o8),d={edits:o,addedFeatures:l(i.addFeatureResults),updatedFeatures:l(i.updateFeatureResults),deletedFeatures:l(i.deleteFeatureResults),addedAttachments:l(i.addAttachmentResults),updatedAttachments:l(i.updateAttachmentResults),deletedAttachments:l(i.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:i.editMoment?new Date(i.editMoment):null,globalIdToObjectId:s.globalIdToObjectId};return i.editedFeatureResults?.length&&(d.editedFeatures=i.editedFeatureResults),n.resolve(d),i}catch(d){throw n.reject(d),d}}async function E(e,t,r,s){if(await e.load(),!w(t))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!(0,_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .getEffectiveEditingEnabled */ .tk)(e))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:i,options:n}=await S(e,r,s);return i.addFeatures?.length||i.updateFeatures?.length||i.deleteFeatures?.length||i.addAttachments?.length||i.updateAttachments?.length||i.deleteAttachments?.length?{edits:i,results:await t.applyEdits(i,n)}:{edits:i,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}async function S(e,t,r){const i=(0,_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .getEffectiveLayerCapabilities */ .BR)(e),n=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),o=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),l=null!=e.infoFor3D;if(V(t,i,r,!!n,!!o,`${e.type}-layer`),!i.data.isVersioned&&r?.gdbVersion)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!i.editing.supportsRollbackOnFailure&&r?.rollbackOnFailureEnabled)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");const d={...r};if(null!=d.rollbackOnFailureEnabled||i.editing.supportsRollbackOnFailure||(d.rollbackOnFailureEnabled=!0),d.rollbackOnFailureEnabled||"original-and-current-features"!==d.returnServiceEditsOption||(!1===d.rollbackOnFailureEnabled&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.getLogger("esri.layers.graphics.editingSupport").warn(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwritten and set to true."),d.rollbackOnFailureEnabled=!0),!i.editing.supportsReturnServiceEditsInSourceSpatialReference&&d.returnServiceEditsInSourceSR)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(d.returnServiceEditsInSourceSR&&"original-and-current-features"!==d.returnServiceEditsOption)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const u=G(t,i,`${e.type}-layer`),p=r?.globalIdUsed||l,c=e.fields.filter((e=>"big-integer"===e.type||"oid"===e.type&&(e.length||0)>=8));if(p){const{globalIdField:t}=e;if(null==t)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${e.type}-layer:invalid-parameter`,"Layer does not specify a global id field.");u.addFeatures.forEach((e=>T(e,t)))}u.addFeatures.forEach((t=>O(t,e,p,c))),u.updateFeatures.forEach((t=>k(t,e,p,c))),u.deleteFeatures.forEach((t=>U(t,e,p,c))),u.addAttachments.forEach((t=>L(t,e))),u.updateAttachments.forEach((t=>L(t,e))),l&&await x(u,e);return{edits:await B(u),options:d}}function R(e,t,r,s){if(r){if("attributes"in e&&!e.attributes[t.globalIdField])throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:invalid-parameter`,`Feature should have '${t.globalIdField}' when 'globalIdUsed' is true`);if(!("attributes"in e)&&!e.globalId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:invalid-parameter`,"`'globalId' of the feature should be passed when 'globalIdUsed' is true")}if(s.length&&"attributes"in e)for(const i of s){const r=e.attributes[i.name];if(void 0!==r&&!(0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_11__/* .isValidFieldValue */ .OG)(i,r))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:invalid-parameter`,`Big-integer field '${i.name}' of the feature must be less than ${Number.MAX_SAFE_INTEGER}`,{feature:e})}if("geometry"in e&&null!=e.geometry){if(e.geometry.hasZ&&!1===t.capabilities?.data.supportsZ)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities?.data.supportsM)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function j(e,t){if("geometry"in e&&"mesh"===e.geometry?.type&&null!=t.infoFor3D&&null!=t.spatialReference){const{geometry:r}=e,{spatialReference:s,vertexSpace:i}=r,n=t.spatialReference,o="local"===i.type,l=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .isGeographic */ .EA)(n),h=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .equals */ .aI)(n,s),m=h||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .isWGS84 */ .oT)(n)&&((0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .isWGS84 */ .oT)(s)||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .isWebMercator */ .K8)(s));if(!(o&&l&&m||!o&&!l&&h))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:mesh-unsupported`,`Uploading a mesh with a ${i.type} vertex space and a spatial reference wkid:${s.wkid} to a layer with a spatial reference wkid:${n.wkid} is not supported.`)}}function O(e,t,a,r){R(e,t,a,r),j(e,t)}function U(e,t,a,r){R(e,t,a,r)}function k(e,t,r,s){R(e,t,r,s),j(e,t);const i=(0,_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .getEffectiveLayerCapabilities */ .BR)(t);if("geometry"in e&&null!=e.geometry&&!i?.editing.supportsGeometryUpdate)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}function L(e,t){const{feature:r,attachment:s}=e;if(!r||"attributes"in r&&!r.attributes[t.globalIdField])throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in r)&&!r.globalId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!s.globalId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!s.data&&!s.uploadId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(s.data instanceof File&&!!s.data.name)&&!s.name)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities?.editing.supportsUploadWithItemId&&s.uploadId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof s.data){const e=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .dataComponents */ .r$)(s.data);if(e&&!e.isBase64)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}function T(e,t){const{attributes:a}=e;null==a[t]&&(a[t]=(0,_core_uuid_js__WEBPACK_IMPORTED_MODULE_7__/* .generateBracedUUID */ .yS)())}async function B(e){const t=e.addFeatures??[],a=e.updateFeatures??[],r=t.concat(a).map((e=>e.geometry)),s=await (0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .normalizeCentralMeridian */ .el)(r),i=t.length,n=a.length;return s.slice(0,i).forEach(((e,a)=>t[a].geometry=e)),s.slice(i,i+n).forEach(((e,t)=>a[t].geometry=e)),e}function D(e){return{addFeatures:Array.from(e?.addFeatures??[]),updateFeatures:Array.from(e?.updateFeatures??[]),deleteFeatures:e&&_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.isCollection(e.deleteFeatures)?e.deleteFeatures.toArray():e.deleteFeatures||[],addAttachments:e.addAttachments||[],updateAttachments:e.updateAttachments||[],deleteAttachments:e.deleteAttachments||[]}}function G(e,t,r){const s=D(e);if(s.addFeatures?.length&&!t.operations.supportsAdd)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${r}:unsupported-operation`,"Layer does not support adding features.");if(s.updateFeatures?.length&&!t.operations.supportsUpdate)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${r}:unsupported-operation`,"Layer does not support updating features.");if(s.deleteFeatures?.length&&!t.operations.supportsDelete)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${r}:unsupported-operation`,"Layer does not support deleting features.");return s.addFeatures=s.addFeatures.map(M),s.updateFeatures=s.updateFeatures.map(M),s.addAssetFeatures=[],s}function V(e,t,r,s,i,n){if(!(e&&(s||i)||r?.usingTelecomOperations))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${n}:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!t.editing.supportsGlobalId&&r?.globalIdUsed&&!r.usingFeatureServiceEndpoint)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${n}:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!t.editing.supportsGlobalId&&i)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${n}:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!r?.globalIdUsed&&i)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${n}:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true")}function M(t){const a=new _Graphic_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A;return t.attributes||(t.attributes={}),a.geometry=t.geometry,a.attributes=t.attributes,a}async function x(e,t){const{infoFor3D:r}=t;if(null==r)return;if(!(0,_support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_13__/* .isGlbSupportedEditFormat */ .JQ)(r))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");e.addAssetFeatures??=[];const{addAssetFeatures:s}=e;for(const a of e.addFeatures??[])z(a)&&s.push(a);for(const a of e.updateFeatures??[])z(a)&&s.push(a)}function z(e){return"mesh"===e?.geometry?.type}function q(e,t,r,s){if(!w(t))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${e.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(r,s)}


/***/ }),

/***/ 96905:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ o),
/* harmony export */   X: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56053);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function r(e){return{geometryType:(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getJsonType */ .$B)(e[0]),geometries:e.map((e=>e.toJSON()))}}function o(t,r,o){const n=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getGeometryType */ .xD)(r);return t.map((e=>{const t=n.fromJSON(e);return t.spatialReference=o,t}))}


/***/ }),

/***/ 36321:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dl: () => (/* binding */ f),
/* harmony export */   gf: () => (/* binding */ a),
/* harmony export */   jV: () => (/* binding */ s),
/* harmony export */   lF: () => (/* binding */ u)
/* harmony export */ });
/* unused harmony export findToken */
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32083);
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6480);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15565);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19759);
/* harmony import */ var _support_apiKeyUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44945);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function s(t,n){return n?{...n,query:{...t??{},...n.query}}:{query:t}}function f(t){return"string"==typeof t?(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .urlToObject */ .An)(t):(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(t)}function u(t,n,r){const e={};for(const i in t){if("declaredClass"===i)continue;const o=t[i];if(null!=o&&"function"!=typeof o)if(Array.isArray(o))e[i]=o.map((t=>u(t)));else if("object"==typeof o)if(o.toJSON){const t=o.toJSON(r?.[i]);e[i]=n?t:JSON.stringify(t)}else e[i]=n?o:JSON.stringify(o);else e[i]=o}return e}function c(t,r){return t?r&&(0,_support_apiKeyUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .supportsApiKey */ .Qc)(t)?r:(0,_support_apiKeyUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .getApiKey */ .CG)(t)??_kernel_js__WEBPACK_IMPORTED_MODULE_1__.id?.findCredential(t)?.token:null}async function a(r,e,i){const o=c(r,e);if(o)return o;!_kernel_js__WEBPACK_IMPORTED_MODULE_1__.id&&_config_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.request.useIdentity&&await __webpack_require__.e(/* import() */ 94018).then(__webpack_require__.bind(__webpack_require__, 94018));const s=await _kernel_js__WEBPACK_IMPORTED_MODULE_1__.id.getCredential(r,i);return s?.token}


/***/ })

};
;