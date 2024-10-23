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

/***/ 12434:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ a)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const a={BingMapsLayer:async()=>(await __webpack_require__.e(/* import() */ 6132).then(__webpack_require__.bind(__webpack_require__, 16132))).default,BuildingSceneLayer:async()=>(await __webpack_require__.e(/* import() */ 9436).then(__webpack_require__.bind(__webpack_require__, 59436))).default,CSVLayer:async()=>(await __webpack_require__.e(/* import() */ 7588).then(__webpack_require__.bind(__webpack_require__, 97588))).default,DimensionLayer:async()=>(await __webpack_require__.e(/* import() */ 9994).then(__webpack_require__.bind(__webpack_require__, 39994))).default,ElevationLayer:async()=>(await __webpack_require__.e(/* import() */ 3010).then(__webpack_require__.bind(__webpack_require__, 73010))).default,FeatureLayer:async()=>(await __webpack_require__.e(/* import() */ 3780).then(__webpack_require__.bind(__webpack_require__, 83780))).default,GeoJSONLayer:async()=>(await __webpack_require__.e(/* import() */ 8485).then(__webpack_require__.bind(__webpack_require__, 8485))).default,GeoRSSLayer:async()=>(await __webpack_require__.e(/* import() */ 5730).then(__webpack_require__.bind(__webpack_require__, 5730))).default,GroupLayer:async()=>(await __webpack_require__.e(/* import() */ 2102).then(__webpack_require__.bind(__webpack_require__, 62102))).default,ImageryLayer:async()=>(await __webpack_require__.e(/* import() */ 1874).then(__webpack_require__.bind(__webpack_require__, 81874))).default,ImageryTileLayer:async()=>(await __webpack_require__.e(/* import() */ 7663).then(__webpack_require__.bind(__webpack_require__, 87663))).default,IntegratedMeshLayer:async()=>(await __webpack_require__.e(/* import() */ 2491).then(__webpack_require__.bind(__webpack_require__, 22491))).default,KMLLayer:async()=>(await __webpack_require__.e(/* import() */ 9062).then(__webpack_require__.bind(__webpack_require__, 19062))).default,LineOfSightLayer:async()=>(await __webpack_require__.e(/* import() */ 9081).then(__webpack_require__.bind(__webpack_require__, 49081))).default,LinkChartLayer:async()=>(await __webpack_require__.e(/* import() */ 2459).then(__webpack_require__.bind(__webpack_require__, 92459))).default,MapImageLayer:async()=>(await __webpack_require__.e(/* import() */ 1330).then(__webpack_require__.bind(__webpack_require__, 11330))).default,MapNotesLayer:async()=>(await __webpack_require__.e(/* import() */ 266).then(__webpack_require__.bind(__webpack_require__, 60266))).default,MediaLayer:async()=>(await __webpack_require__.e(/* import() */ 4749).then(__webpack_require__.bind(__webpack_require__, 74749))).default,OGCFeatureLayer:async()=>(await __webpack_require__.e(/* import() */ 8820).then(__webpack_require__.bind(__webpack_require__, 28820))).default,OpenStreetMapLayer:async()=>(await __webpack_require__.e(/* import() */ 8628).then(__webpack_require__.bind(__webpack_require__, 8628))).default,OrientedImageryLayer:async()=>(await __webpack_require__.e(/* import() */ 1092).then(__webpack_require__.bind(__webpack_require__, 51092))).default,PointCloudLayer:async()=>(await __webpack_require__.e(/* import() */ 5840).then(__webpack_require__.bind(__webpack_require__, 75840))).default,RouteLayer:async()=>(await __webpack_require__.e(/* import() */ 4030).then(__webpack_require__.bind(__webpack_require__, 44030))).default,SceneLayer:async()=>(await __webpack_require__.e(/* import() */ 2534).then(__webpack_require__.bind(__webpack_require__, 12534))).default,StreamLayer:async()=>(await __webpack_require__.e(/* import() */ 1058).then(__webpack_require__.bind(__webpack_require__, 31058))).default,SubtypeGroupLayer:async()=>(await __webpack_require__.e(/* import() */ 4810).then(__webpack_require__.bind(__webpack_require__, 64810))).default,TileLayer:async()=>(await __webpack_require__.e(/* import() */ 107).then(__webpack_require__.bind(__webpack_require__, 10107))).default,UnknownLayer:async()=>(await __webpack_require__.e(/* import() */ 5335).then(__webpack_require__.bind(__webpack_require__, 75335))).default,UnsupportedLayer:async()=>(await __webpack_require__.e(/* import() */ 7400).then(__webpack_require__.bind(__webpack_require__, 7400))).default,VectorTileLayer:async()=>(await __webpack_require__.e(/* import() */ 8782).then(__webpack_require__.bind(__webpack_require__, 38782))).default,VoxelLayer:async()=>(await __webpack_require__.e(/* import() */ 9901).then(__webpack_require__.bind(__webpack_require__, 89901))).default,WFSLayer:async()=>(await __webpack_require__.e(/* import() */ 2783).then(__webpack_require__.bind(__webpack_require__, 62783))).default,WMSLayer:async()=>(await __webpack_require__.e(/* import() */ 5719).then(__webpack_require__.bind(__webpack_require__, 25719))).default,WMTSLayer:async()=>(await __webpack_require__.e(/* import() */ 9685).then(__webpack_require__.bind(__webpack_require__, 89685))).default,WebTileLayer:async()=>(await __webpack_require__.e(/* import() */ 7187).then(__webpack_require__.bind(__webpack_require__, 47187))).default};


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