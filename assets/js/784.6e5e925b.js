"use strict";
exports.id = 784;
exports.ids = [784];
exports.modules = {

/***/ 75804:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _support_requestPresets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90176);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class e{constructor(){this._serviceMetadatas=new Map}async fetchServiceMetadata(e,s){const a=this._serviceMetadatas.get(e);if(a)return a;const r=await (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_0__/* .fetchArcGISServiceJSON */ .V)(e,s);return this._serviceMetadatas.set(e,r),r}}


/***/ }),

/***/ 58035:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WZ: () => (/* binding */ r),
/* harmony export */   XH: () => (/* binding */ l),
/* harmony export */   _r: () => (/* binding */ t),
/* harmony export */   ay: () => (/* binding */ s),
/* harmony export */   bO: () => (/* binding */ a),
/* harmony export */   nu: () => (/* binding */ i),
/* harmony export */   z8: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _layers_support_associatedFeatureServiceUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98154);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function t(e){const t={id:e.id,name:e.name};return"Oriented Imagery Layer"===e.type&&(t.layerType="OrientedImageryLayer"),t}async function a(e,a,r){if(null==e?.layers||null==e?.tables){const l=await r.fetchServiceMetadata(a);(e=e||{}).layers=e.layers||l?.layers?.map(t),e.tables=e.tables||l?.tables?.map(t)}return e}function r(e){const t=e.layers;if(t?.length)return t[0].id;const a=e.tables;return a?.length?a[0].id:null}function l(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}function n(e){const t=[];return e?.layers?.forEach((e=>{"SubtypeGroupLayer"===e.layerType&&t.push(e.id)})),t}function s(e){return e?.layers?.filter((({layerType:e})=>"OrientedImageryLayer"===e)).map((({id:e})=>e))}async function i(a,r,l){if(!a?.url)return r??{};if(r??={},!r.layers){const e=await l.fetchServiceMetadata(a.url);r.layers=e.layers?.map(t)}const{serverUrl:n,portalItem:s}=await (0,_layers_support_associatedFeatureServiceUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .findAssociatedFeatureService */ .L)(a.url,{sceneLayerItem:a}).catch((()=>({serverUrl:null,portalItem:null})));if(null==n)return r.tables=[],r;if(!r.tables&&s){const e=await s.fetchData();if(e?.tables)r.tables=e.tables.map(t);else{const e=await l.fetchServiceMetadata(n);r.tables=e?.tables?.map(t)}}if(r.tables)for(const e of r.tables)e.url=`${n}/${e.id}`;return r}


/***/ }),

/***/ 20784:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromItem: () => (/* binding */ p),
/* harmony export */   n: () => (/* binding */ L)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/* harmony import */ var _layers_support_associatedFeatureServiceUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98154);
/* harmony import */ var _layers_support_LayerLoadContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75804);
/* harmony import */ var _layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40454);
/* harmony import */ var _layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12434);
/* harmony import */ var _PortalItem_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26099);
/* harmony import */ var _loadUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58035);
/* harmony import */ var _portalItemUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39532);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function p(e){!e.portalItem||e.portalItem instanceof _PortalItem_js__WEBPACK_IMPORTED_MODULE_5__["default"]||(e={...e,portalItem:new _PortalItem_js__WEBPACK_IMPORTED_MODULE_5__["default"](e.portalItem)});const a=await f(e.portalItem);return new(0,a.constructor)({portalItem:e.portalItem,...a.properties})}async function f(e){await e.load();const a=new _layers_support_LayerLoadContext_js__WEBPACK_IMPORTED_MODULE_2__/* .LayerLoadContext */ .v;return d(await L(e,a))}async function L(a,r){switch(a.type){case"Map Service":return w(a,r);case"Feature Service":return S(a,r);case"Feature Collection":return I(a);case"Scene Service":return N(a,r);case"Image Service":return v(a,r);case"Stream Service":return M();case"Vector Tile Service":return h();case"GeoJson":return T();case"CSV":return g();case"KML":return j();case"WFS":return F();case"WMTS":return b();case"WMS":return G();case"Feed":return C();case"Group Layer":return U();default:throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("portal:unknown-item-type","Unknown item type '${type}'",{type:a.type})}}async function d(e){const a=e.className,r=_layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_4__/* .layerLookupMap */ .S[a];return{constructor:await r(),properties:e.properties}}async function w(e,a){return await V(e,a)?{className:"TileLayer"}:{className:"MapImageLayer"}}async function S(e,a){const r=await W(e,a);if("object"==typeof r){const e={};return null!=r.id&&(e.layerId=r.id),{className:r.className||"FeatureLayer",properties:e}}return{className:"GroupLayer"}}async function N(e,r){const n=await W(e,r,(async()=>{try{if(!e.url)return[];const{serverUrl:t}=await (0,_layers_support_associatedFeatureServiceUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .findAssociatedFeatureService */ .L)(e.url,{sceneLayerItem:e}),n=await r.fetchServiceMetadata(t);return n?.tables??[]}catch{return[]}}));if("object"==typeof n){const a={};let s;if(null!=n.id?(a.layerId=n.id,s=`${e.url}/layers/${n.id}`):s=e.url,e.typeKeywords?.length)for(const r of Object.keys(_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .sceneServiceLayerTypeToClassName */ .XX))if(e.typeKeywords.includes(r))return{className:_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .sceneServiceLayerTypeToClassName */ .XX[r]};const c=await r.fetchServiceMetadata(s);return{className:_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .sceneServiceLayerTypeToClassName */ .XX[c?.layerType]||"SceneLayer",properties:a}}if(!1===n){const a=await r.fetchServiceMetadata(e.url);if("Voxel"===a?.layerType)return{className:"VoxelLayer"}}return{className:"GroupLayer"}}async function I(e){await e.load();const a=(0,_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .hasTypeKeyword */ .Y)(e,"Map Notes"),r=(0,_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .hasTypeKeyword */ .Y)(e,"Markup");if(a||r)return{className:"MapNotesLayer"};if((0,_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .hasTypeKeyword */ .Y)(e,"Route Layer"))return{className:"RouteLayer"};const t=await e.fetchData();return 1===(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .getNumLayersAndTables */ .XH)(t)?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function v(e,a){await e.load();const r=e.typeKeywords?.map((e=>e.toLowerCase()))??[];if(r.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(r.includes("tiled imagery"))return{className:"ImageryTileLayer"};const t=await e.fetchData(),n=t?.layerType;if("ArcGISTiledImageServiceLayer"===n)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===n)return{className:"ImageryLayer"};const s=await a.fetchServiceMetadata(e.url),c=s.cacheType?.toLowerCase(),o=s.capabilities?.toLowerCase().includes("tilesonly");return"map"===c||o?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function M(){return{className:"StreamLayer"}}function h(){return{className:"VectorTileLayer"}}function T(){return{className:"GeoJSONLayer"}}function g(){return{className:"CSVLayer"}}function j(){return{className:"KMLLayer"}}function F(){return{className:"WFSLayer"}}function G(){return{className:"WMSLayer"}}function b(){return{className:"WMTSLayer"}}function C(){return{className:"StreamLayer"}}function U(){return{className:"GroupLayer"}}async function V(e,a){return(await a.fetchServiceMetadata(e.url)).tileInfo}async function W(e,a,r){const t=e.url;if(!t||/\/\d+$/.test(t))return{};await e.load();let n=await e.fetchData();if("Feature Service"===e.type){const e=await (0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .preprocessFSItemData */ .bO)(n,t,a),r=K(e);if("object"==typeof r){const a=(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .getSubtypeGroupLayerIds */ .z8)(e),t=(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .getOrientedImageryLayerIds */ .ay)(e);r.className=null!=r.id&&a.includes(r.id)?"SubtypeGroupLayer":null!=r.id&&t?.includes(r.id)?"OrientedImageryLayer":"FeatureLayer"}return r}"Scene Service"===e.type&&(n=await (0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .populateSceneServiceItemData */ .nu)(e,n,a));if((0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .getNumLayersAndTables */ .XH)(n)>0)return K(n);const s=await a.fetchServiceMetadata(t);return r&&(s.tables=await r()),K(s)}function K(e){return 1===(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .getNumLayersAndTables */ .XH)(e)&&{id:(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .getFirstLayerOrTableId */ .WZ)(e)}}


/***/ }),

/***/ 90176:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86394);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function t(t,o){const{data:r}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t,{responseType:"json",query:{f:"json",...o?.customParameters,token:o?.apiKey}});return r}


/***/ })

};
;