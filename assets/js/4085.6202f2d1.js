"use strict";
exports.id = 4085;
exports.ids = [4085];
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

/***/ 83175:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _support_requestPresets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90176);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function t(t,r){const a=await (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_0__/* .fetchArcGISServiceJSON */ .V)(t,r);y(a),n(a);const s={serviceJSON:a};if((a.currentVersion??0)<10.5)return s;const o=await (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_0__/* .fetchArcGISServiceJSON */ .V)(t+"/layers",r);return y(o),n(o),s.layersJSON={layers:o.layers,tables:o.tables},s}function r(e){return"Feature Layer"===e.type||"Oriented Imagery Layer"===e.type}function a(e){return"Table"===e.type}function n(e){e.layers=e.layers?.filter(r),e.tables=e.tables?.filter(a)}function s(e){e.type||="Feature Layer"}function o(e){e.type||="Table"}function y(e){e.layers?.forEach(s),e.tables?.forEach(o)}


/***/ }),

/***/ 86452:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* binding */ w),
  populateOperationalLayers: () => (/* binding */ c)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(48982);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/LayerLoadContext.js
var LayerLoadContext = __webpack_require__(75804);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/lazyLayerLoader.js
var lazyLayerLoader = __webpack_require__(12434);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/portal/PortalItem.js + 2 modules
var PortalItem = __webpack_require__(26099);
;// ../node_modules/@arcgis/core/portal/support/featureCollectionUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function featureCollectionUtils_e(e){return t(e,"notes")}function r(e){return t(e,"markup")}function featureCollectionUtils_n(e){return t(e,"route")}function t(e,r){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===r}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/portal/support/portalLayers.js
var portalLayers = __webpack_require__(20784);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/styleUtils.js
var styleUtils = __webpack_require__(21484);
;// ../node_modules/@arcgis/core/layers/support/layersCreator.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function c(e,r,a){if(!r)return;const t=[];for(const i of r)t.push(g(i,a));const y=await Promise.allSettled(t);for(const i of y)"rejected"===i.status||i.value&&e.add(i.value)}const l={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},s={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},p={ArcGISFeatureLayer:"FeatureLayer"},S={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",DefaultTileLayer:"TileLayer"},u={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},d={ArcGISFeatureLayer:"FeatureLayer"},I={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"},m={...u,LinkChartLayer:"LinkChartLayer"},f={...d},T={...I};async function g(e,r){return G(await M(e,r),e,r)}async function G(e,r,a){const t=new e;return t.read(r,a.context),"group"===t.type&&("GroupLayer"===r.layerType?await w(t,r,a):v(r)?h(t,r,a.context):A(r)&&await C(t,r,a.context)),await (0,styleUtils/* loadStyleRenderer */.L)(t,a.context),t}async function M(e,n){const c=n.context,l=b(c);let s=e.layerType||e.type;!s&&n?.defaultLayerType&&(s=n.defaultLayerType);const p=l[s];let S=p?lazyLayerLoader/* layerLookupMap */.S[p]:lazyLayerLoader/* layerLookupMap */.S.UnknownLayer;if(v(e)){const y=c?.portal;if(e.itemId){const i=new PortalItem["default"]({id:e.itemId,portal:y});await i.load();const L=(await (0,portalLayers/* selectLayerClassPath */.n)(i,new LayerLoadContext/* LayerLoadContext */.v)).className||"UnknownLayer";S=lazyLayerLoader/* layerLookupMap */.S[L]}}else"ArcGISFeatureLayer"===s?featureCollectionUtils_e(e)||r(e)?S=lazyLayerLoader/* layerLookupMap */.S.MapNotesLayer:featureCollectionUtils_n(e)?S=lazyLayerLoader/* layerLookupMap */.S.RouteLayer:A(e)&&(S=lazyLayerLoader/* layerLookupMap */.S.GroupLayer):e.wmtsInfo?.url&&e.wmtsInfo.layerIdentifier?S=lazyLayerLoader/* layerLookupMap */.S.WMTSLayer:"WFS"===s&&"2.0.0"!==e.wfsInfo?.version&&(S=lazyLayerLoader/* layerLookupMap */.S.UnsupportedLayer);return S()}function A(e){if("ArcGISFeatureLayer"!==e.layerType||v(e))return!1;return(e.featureCollection?.layers?.length??0)>1}function v(e){return"Feature Collection"===e.type}function b(e){let r;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":r=S;break;case"ground":r=s;break;case"tables":r=p;break;default:r=l}break;case"link-chart":switch(e.layerContainerType){case"basemap":r=T;break;case"tables":r=f;break;default:r=m}break;default:switch(e.layerContainerType){case"basemap":r=I;break;case"tables":r=d;break;default:r=u}}return r}async function w(r,a,t){const y=new Collection/* default */.A,i=c(y,Array.isArray(a.layers)?a.layers:[],t);try{try{if(await i,"group"===r.type)return r.layers.addMany(y),r}catch(L){r.destroy();for(const e of y)e.destroy();throw L}}catch(L){throw L}}function h(e,r,a){r.itemId&&(e.portalItem=new PortalItem["default"]({id:r.itemId,portal:a?.portal}),e.when((()=>{const t=t=>{const y=t.layerId;F(t,e,r,y,a);const i=r.featureCollection?.layers?.[y];i&&t.read(i,a)};e.layers?.forEach(t),e.tables?.forEach(t)})))}async function C(e,r,t){const y=lazyLayerLoader/* layerLookupMap */.S.FeatureLayer,i=await y(),L=r.featureCollection,o=L?.showLegend,n=L?.layers?.map(((a,y)=>{const L=new i;L.read(a,t);const n={...t,ignoreDefaults:!0};return F(L,e,r,y,n),null!=o&&L.read({showLegend:o},n),L}));e.layers.addMany(n??[])}function F(e,r,a,t,y){e.read({id:`${r.id}-sublayer-${t}`,visibility:a.visibleLayers?.includes(t)??!0},y)}


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

/***/ 47231:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JV: () => (/* binding */ l),
/* harmony export */   Sv: () => (/* binding */ a),
/* harmony export */   mB: () => (/* binding */ o),
/* harmony export */   vk: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20909);
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10282);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(e){return{origin:"portal-item",url:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .urlToObject */ .An)(e.itemUrl),portal:e.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getDefault(),portalItem:e,readResourcePaths:[]}}function o(e){const o=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .urlToObject */ .An)(e.itemUrl);return{origin:"portal-item",messages:[],writtenProperties:[],url:o,portal:e.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getDefault(),portalItem:e,verifyItemRelativeUrls:o?{rootPath:o.path,writtenUrls:[]}:null,blockedRelativeUrls:[]}}function l(e){return{origin:"web-map",url:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .urlToObject */ .An)(e.itemUrl),portal:e.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getDefault(),portalItem:e,readResourcePaths:[]}}function a(e,o){const l=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .urlToObject */ .An)(e.itemUrl);return{origin:"web-map",messages:[],writtenProperties:[],url:l,portal:e.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getDefault(),portalItem:e,initiator:o,verifyItemRelativeUrls:l?{rootPath:l.path,writtenUrls:[]}:null,blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}}}


/***/ }),

/***/ 14085:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   load: () => (/* binding */ g)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/* harmony import */ var _layers_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16123);
/* harmony import */ var _layers_support_fetchService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83175);
/* harmony import */ var _layers_support_LayerLoadContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75804);
/* harmony import */ var _layers_support_layersCreator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86452);
/* harmony import */ var _layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12434);
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10282);
/* harmony import */ var _jsonContext_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47231);
/* harmony import */ var _loadUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(58035);
/* harmony import */ var _portalItemUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39532);
/* harmony import */ var _renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(21484);
/* harmony import */ var _support_requestPresets_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90176);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function g(e,t){const r=e.instance.portalItem;if(r?.id)return await r.load(t),I(e),L(e,t)}function I(t){const r=t.instance.portalItem;if(!r?.type||!t.supportedTypes.includes(r.type))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r?.type,expectedType:t.supportedTypes.join(", ")})}async function L(e,t){const r=e.instance,n=r.portalItem;if(!n)return;const{url:o,title:s}=n,i=(0,_jsonContext_js__WEBPACK_IMPORTED_MODULE_7__/* .createForItemRead */ .vk)(n);if("group"===r.type)return S(r,i,e);o&&r.read({url:o},i);const p=new _layers_support_LayerLoadContext_js__WEBPACK_IMPORTED_MODULE_3__/* .LayerLoadContext */ .v,u=await F(e,p,t);return u&&r.read(u,i),r.resourceReferences={portalItem:n,paths:i.readResourcePaths??[]},"subtype-group"!==r.type&&r.read({title:s},i),(0,_renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .loadStyleRenderer */ .L)(r,i)}async function S(t,r,a){const n=t.portalItem;if(!t.sourceIsPortalItem)return;const{title:o,type:s}=n;if("Group Layer"===s){if(!(0,_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .hasTypeKeyword */ .Y)(n,"Map"))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("portal:invalid-layer-item-typekeyword","'Group Layer' item without 'Map' type keyword is not supported");return T(t)}return t.read({title:o},r),j(t,a)}async function T(e){const t=e.portalItem,r=await t.fetchData("json");if(!r)return;const a=(0,_jsonContext_js__WEBPACK_IMPORTED_MODULE_7__/* .createForGroupLayerItemRead */ .JV)(t);e.read(r,a),await (0,_layers_support_layersCreator_js__WEBPACK_IMPORTED_MODULE_4__/* .populateGroupLayer */ .N)(e,r,{context:a}),e.resourceReferences={portalItem:t,paths:a.readResourcePaths??[]}}async function j(t,r){let n;const{portalItem:o}=t;if(!o)return;const s=o.type,l=r.layerModuleTypeMap;switch(s){case"Feature Service":case"Feature Collection":n=l.FeatureLayer;break;case"Stream Service":n=l.StreamLayer;break;case"Scene Service":n=l.SceneLayer;break;default:throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("portal:unsupported-item-type-as-group",`The item type '${s}' is not supported as a 'IGroupLayer'`)}const i=new _layers_support_LayerLoadContext_js__WEBPACK_IMPORTED_MODULE_3__/* .LayerLoadContext */ .v;let[d,m]=await Promise.all([n(),F(r,i)]),h=()=>d;if("Feature Service"===s){m=o.url?await (0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .preprocessFSItemData */ .bO)(m,o.url,i):{};const e=(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .getSubtypeGroupLayerIds */ .z8)(m),r=(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .getOrientedImageryLayerIds */ .ay)(m),a=[];if(e.length||r?.length){e.length&&a.push("SubtypeGroupLayer"),r?.length&&a.push("OrientedImageryLayer");const t=[];for(const e of a){const r=l[e];t.push(r())}const n=await Promise.all(t),o=new Map;a.forEach(((e,t)=>{o.set(e,n[t])})),h=e=>e.layerType?o.get(e.layerType)??d:d}const n=await E(o.url);return await M(t,h,m,n)}return"Scene Service"===s&&o.url&&(m=await (0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .populateSceneServiceItemData */ .nu)(o,m,i)),(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .getNumLayersAndTables */ .XH)(m)>0?await M(t,h,m):await v(t,h)}async function v(e,t){const{portalItem:r}=e;if(!r?.url)return;const a=await (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_11__/* .fetchArcGISServiceJSON */ .V)(r.url);a&&M(e,t,{layers:a.layers?.map(_loadUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .createSublayerData */ ._r),tables:a.tables?.map(_loadUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .createSublayerData */ ._r)})}async function M(e,t,r,a){let n=r.layers||[];const s=r.tables||[];if("Feature Collection"===e.portalItem?.type?(n.forEach(((e,t)=>{e.id=t,"Table"===e?.layerDefinition?.type&&s.push(e)})),n=n.filter((e=>"Table"!==e?.layerDefinition?.type))):(n.reverse(),s.reverse()),n.forEach((n=>{const o=a?.(n);if(o||!a){const a=x(e,t(n),r,n,o);e.add(a)}})),s.length){const t=await _layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__/* .layerLookupMap */ .S.FeatureLayer();s.forEach((n=>{const o=a?.(n);if(o||!a){const a=x(e,t,r,n,o);e.tables.add(a)}}))}}function x(e,t,r,a,n){const o=e.portalItem,l={portalItem:o.clone(),layerId:a.id};null!=a.url&&(l.url=a.url);const i=new t(l);if("sourceJSON"in i&&(i.sourceJSON=n),"subtype-group"!==i.type&&(i.sublayerTitleMode="service-name"),"Feature Collection"===o.type){const e={origin:"portal-item",portal:o.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.getDefault()};i.read(a,e);const t=r.showLegend;null!=t&&i.read({showLegend:t},e)}return i}async function F(e,t,r){if(!1===e.supportsData)return;const a=e.instance,n=a.portalItem;if(!n)return;let o=null;try{o=await n.fetchData("json",r)}catch(s){}if(D(a)){let e=null;const r=await P(n,o,t);if((o?.layers||o?.tables)&&r>0){if(null==a.layerId){const e=(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .getSubtypeGroupLayerIds */ .z8)(o);a.layerId="subtype-group"===a.type?e?.[0]:(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .getFirstLayerOrTableId */ .WZ)(o)}e=C(o,a),e&&null!=o.showLegend&&(e.showLegend=o.showLegend)}return r>1&&"sublayerTitleMode"in a&&"service-name"!==a.sublayerTitleMode&&(a.sublayerTitleMode="item-title-and-service-name"),e}return o}async function P(e,r,a){if(r?.layers&&r?.tables)return (0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .getNumLayersAndTables */ .XH)(r);const n=(0,_layers_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_1__/* .parse */ .qg)(e.url);if(!n)return 1;const o=await a.fetchServiceMetadata(n.url.path).catch((()=>null));return(r?.layers?.length??o?.layers?.length??0)+(r?.tables?.length??o?.tables?.length??0)}function C(e,t){const{layerId:r}=t,a=e.layers?.find((e=>e.id===r))||e.tables?.find((e=>e.id===r));return a&&k(a,t)?a:null}function D(e){return"stream"!==e.type&&"layerId"in e}function k(e,t){return!("feature"===t.type&&"layerType"in e&&"SubtypeGroupLayer"===e.layerType||"subtype-group"===t.type&&!("layerType"in e))}async function E(e){const{layersJSON:t}=await (0,_layers_support_fetchService_js__WEBPACK_IMPORTED_MODULE_2__/* .fetchFeatureService */ .Q)(e);if(!t)return null;const a=[...t.layers,...t.tables];return e=>a.find((t=>t.id===e.id))}


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

/***/ 21484:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12690);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40189);
/* harmony import */ var _core_Warning_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68659);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function t(t,i,n){const s=t&&t.getAtOrigin&&t.getAtOrigin("renderer",i.origin);if(s&&"unique-value"===s.type&&s.styleOrigin){const a=await (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .result */ .Ke)(s.populateFromStyle());if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .throwIfAborted */ .Te)(n),!1===a.ok){const e=a.error;i?.messages&&i.messages.push(new _core_Warning_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A("renderer:style-reference",`Failed to create unique value renderer from style reference: ${e.message}`,{error:e,context:i})),t.clear("renderer",i?.origin)}}}


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