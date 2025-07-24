"use strict";
exports.id = 41570;
exports.ids = [41570,25302];
exports.modules = {

/***/ 86270:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _support_requestPresets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88426);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class e{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(e,a){const s=this._serviceMetadatas.get(e);if(s)return s;const r=await (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_0__/* .fetchArcGISServiceJSON */ .V)(e,a);return this._serviceMetadatas.set(e,r),r}async fetchItemData(t){const{id:e}=t;if(!e)return null;const{_itemDatas:a}=this;if(a.has(e))return a.get(e);const s=await t.fetchData();return a.set(e,s),s}async fetchCustomParameters(t,e){const a=await this.fetchItemData(t);return a&&"object"==typeof a&&(e?e(a):a.customParameters)||null}}


/***/ }),

/***/ 28904:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6480);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38116);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62991);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49175);
/* harmony import */ var _arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63457);
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62304);
/* harmony import */ var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11969);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function s(e,r){const n=(0,_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_4__/* .parse */ .qg)(e);if(!n)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A("invalid-url","Invalid scene service url");const o={...r,sceneServerUrl:n.url.path,layerId:n.sublayer??void 0};if(o.sceneLayerItem??=await l(o),null==o.sceneLayerItem)return f(o.sceneServerUrl.replace("/SceneServer","/FeatureServer"),o);const i=await y(o);if(!i?.url)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A("related-service-not-found","Could not find feature service through portal item relationship");o.featureServiceItem=i;const s=await f(i.url,o);return s.portalItem=i,s}async function l(e){const r=(await c(e)).serviceItemId;if(!r)return null;const t=new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_6__["default"]({id:r,apiKey:e.apiKey}),a=await u(e);null!=a&&(t.portal=new _portal_Portal_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A({url:a}));try{return await t.load({signal:e.signal})}catch(s){return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .throwIfAbortError */ .QP)(s),null}}async function c(e){if(e.rootDocument)return e.rootDocument;const t={query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:e.signal};try{const n=await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(e.sceneServerUrl,t);e.rootDocument=n.data}catch{e.rootDocument={}}return e.rootDocument}async function u(t){const a=_kernel_js__WEBPACK_IMPORTED_MODULE_0__.id?.findServerInfo(t.sceneServerUrl);if(a?.owningSystemUrl)return a.owningSystemUrl;const o=t.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const e=(await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(o,{query:{f:"json"},responseType:"json",signal:t.signal})).data.owningSystemUrl;if(e)return e}catch(i){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .throwIfAbortError */ .QP)(i)}return null}async function f(e,n){const o=(0,_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_4__/* .parse */ .qg)(e);if(!o)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A("invalid-feature-service-url","Invalid feature service url");const i=o.url.path,s=n.layerId;if(null==s)return{serverUrl:i};const l=c(n),u=n.featureServiceItem?await n.featureServiceItem.fetchData("json"):null,f=(u?.layers?.[0]||u?.tables?.[0])?.customParameters,y=e=>{const t={query:{f:"json",...f},responseType:"json",authMode:e,signal:n.signal};return (0,_request_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(i,t)},m=y("anonymous").catch((()=>y("no-prompt"))),[p,d]=await Promise.all([m,l]),v=d?.layers,w=p.data&&p.data.layers;if(!Array.isArray(w))throw new Error("expected layers array");if(Array.isArray(v))for(let r=0;r<Math.min(v.length,w.length);r++){if(v[r].id===s)return{serverUrl:i,layerId:w[r].id}}else if(null!=s&&s<w.length)return{serverUrl:i,layerId:w[s].id};throw new Error("could not find matching associated sublayer")}async function y({sceneLayerItem:e,signal:r}){if(!e)return null;try{const t=(await e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:r})).find((e=>"Feature Service"===e.type))||null;if(!t)return null;const n=new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_6__["default"]({portal:t.portal,id:t.id});return await n.load(),n}catch(t){return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .throwIfAbortError */ .QP)(t),null}}


/***/ }),

/***/ 48101:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ l),
/* harmony export */   Q: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _layerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44837);
/* harmony import */ var _support_requestPresets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88426);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const a=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function n(a,n){const{loadContext:s,...o}=n||{},y=s?await s.fetchServiceMetadata(a,o):await (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_1__/* .fetchArcGISServiceJSON */ .V)(a,o),i=(0,_layerUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getPreferredHost */ .G$)();u(y),c(y);const l={serviceJSON:y,preferredHost:i};if((y.currentVersion??0)<10.5)return l;const f=`${(0,_layerUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getPreferredUrl */ .$x)()??a}/layers`,L=s?await s.fetchServiceMetadata(f,o):await (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_1__/* .fetchArcGISServiceJSON */ .V)(f,o);return u(L),c(L),l.layersJSON={layers:L.layers,tables:L.tables},l}function s(e){const{type:r}=e;return!!r&&a.has(r)}function o(e){return"Table"===e.type}function c(e){e.layers=e.layers?.filter(s),e.tables=e.tables?.filter(o)}function y(e){e.type||="Feature Layer"}function i(e){e.type||="Table"}function u(e){e.layers?.forEach(y),e.tables?.forEach(i)}function l(e){switch(e){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}


/***/ }),

/***/ 41570:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* binding */ v),
  populateOperationalLayers: () => (/* binding */ l)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(54192);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/LayerLoadContext.js
var LayerLoadContext = __webpack_require__(86270);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/lazyLayerLoader.js
var lazyLayerLoader = __webpack_require__(97364);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/portal/PortalItem.js + 2 modules
var PortalItem = __webpack_require__(11969);
;// ./node_modules/@arcgis/core/portal/support/featureCollectionUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function featureCollectionUtils_e(e){return t(e,"notes")}function r(e){return t(e,"markup")}function featureCollectionUtils_n(e){return t(e,"route")}function t(e,r){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===r}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/portal/support/portalLayers.js
var portalLayers = __webpack_require__(25302);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/support/styleUtils.js
var styleUtils = __webpack_require__(99650);
;// ./node_modules/@arcgis/core/layers/support/layersCreator.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function l(e,r,a){if(!r)return;const y=r.map((e=>G(e,a))),t=await Promise.allSettled(y);for(const i of t)"rejected"===i.status||i.value&&e.add(i.value)}const c={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISSceneServiceLayer:"SceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BuildingSceneLayer:"BuildingSceneLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",IntegratedMesh3DTilesLayer:"IntegratedMesh3DTilesLayer",Object3DTilesLayer:"UnsupportedLayer",IntegratedMeshLayer:"IntegratedMeshLayer",KML:"KMLLayer",LineOfSightLayer:"LineOfSightLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",PointCloudLayer:"PointCloudLayer",RasterDataLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",ViewshedLayer:"ViewshedLayer",Voxel:"VoxelLayer",WCS:"WCSLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},s={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},p={ArcGISFeatureLayer:"FeatureLayer"},S={ArcGISImageServiceLayer:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",DefaultTileLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WCS:"UnsupportedLayer",WMS:"UnsupportedLayer",WebTiledLayer:"WebTileLayer"},u={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",ArcGISVideoLayer:"VideoLayer",BingMapsAerial:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoJSON:"GeoJSONLayer",GeoRSS:"GeoRSSLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",KnowledgeGraphLayer:"KnowledgeGraphLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WCS:"WCSLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},d={ArcGISFeatureLayer:"FeatureLayer",SubtypeGroupTable:"SubtypeGroupLayer"},I={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",DefaultTileLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WCS:"WCSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},m={...u,LinkChartLayer:"LinkChartLayer"},g={...d},T={...I};async function G(e,r){return f(await M(e,r),e,r)}async function f(e,r,a){const y=new e;return y.read(r,a.context),"group"===y.type&&("GroupLayer"===r.layerType?await v(y,r,a):b(r)?C(y,r,a.context):A(r)&&await h(y,r,a.context)),await (0,styleUtils/* loadStyleRenderer */.L)(y,a.context),y}async function M(e,n){const l=n.context,c=w(l);let s=e.layerType||e.type;!s&&n?.defaultLayerType&&(s=n.defaultLayerType);const p=c[s];let S=p?lazyLayerLoader/* layerLookupMap */.S[p]:lazyLayerLoader/* layerLookupMap */.S.UnknownLayer;if(b(e)){const t=l?.portal;if(e.itemId){const i=new PortalItem["default"]({id:e.itemId,portal:t});await i.load();const L=(await (0,portalLayers/* selectLayerClassPath */.n)(i,new LayerLoadContext/* LayerLoadContext */.v)).className||"UnknownLayer";S=lazyLayerLoader/* layerLookupMap */.S[L]}}else"ArcGISFeatureLayer"===s?featureCollectionUtils_e(e)||r(e)?S=lazyLayerLoader/* layerLookupMap */.S.MapNotesLayer:featureCollectionUtils_n(e)?S=lazyLayerLoader/* layerLookupMap */.S.RouteLayer:A(e)&&(S=lazyLayerLoader/* layerLookupMap */.S.GroupLayer):e.wmtsInfo?.url&&e.wmtsInfo.layerIdentifier?S=lazyLayerLoader/* layerLookupMap */.S.WMTSLayer:"WFS"===s&&"2.0.0"!==e.wfsInfo?.version&&(S=lazyLayerLoader/* layerLookupMap */.S.UnsupportedLayer);return S()}function A(e){if("ArcGISFeatureLayer"!==e.layerType||b(e))return!1;return(e.featureCollection?.layers?.length??0)>1}function b(e){return"Feature Collection"===e.type}function w(e){let r;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":r=S;break;case"ground":r=s;break;case"tables":r=p;break;default:r=c}break;case"link-chart":switch(e.layerContainerType){case"basemap":r=T;break;case"tables":r=g;break;default:r=m}break;default:switch(e.layerContainerType){case"basemap":r=I;break;case"tables":r=d;break;default:r=u}}return r}async function v(r,a,y){const t=new Collection/* default */.A,i=l(t,Array.isArray(a.layers)?a.layers:[],y);try{try{if(await i,"group"===r.type)return r.layers.addMany(t),r}catch(L){r.destroy();for(const e of t)e.destroy();throw L}}catch(L){throw L}}function C(e,r,a){r.itemId&&(e.portalItem=new PortalItem["default"]({id:r.itemId,portal:a?.portal}),e.when((()=>{const y=y=>{const t=y.layerId;W(y,e,r,t,a);const i=r.featureCollection?.layers?.[t];i&&y.read(i,a)};e.layers?.forEach(y),e.tables?.forEach(y)})))}async function h(e,r,y){const t=lazyLayerLoader/* layerLookupMap */.S.FeatureLayer,i=await t(),L=r.featureCollection,o=L?.showLegend,n=L?.layers?.map(((a,t)=>{const L=new i;L.read(a,y);const n={...y,ignoreDefaults:!0};return W(L,e,r,t,n),null!=o&&L.read({showLegend:o},n),L}));e.layers.addMany(n??[])}function W(e,r,a,y,t){e.read({id:`${r.id}-sublayer-${y}`,visibility:a.visibleLayers?.includes(y)??!0},t)}


/***/ }),

/***/ 97364:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ a)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const a={BingMapsLayer:async()=>(await __webpack_require__.e(/* import() */ 79314).then(__webpack_require__.bind(__webpack_require__, 79314))).default,BuildingSceneLayer:async()=>(await __webpack_require__.e(/* import() */ 39586).then(__webpack_require__.bind(__webpack_require__, 39586))).default,CSVLayer:async()=>(await __webpack_require__.e(/* import() */ 56262).then(__webpack_require__.bind(__webpack_require__, 56262))).default,CatalogLayer:async()=>(await __webpack_require__.e(/* import() */ 55554).then(__webpack_require__.bind(__webpack_require__, 55554))).default,DimensionLayer:async()=>(await __webpack_require__.e(/* import() */ 17988).then(__webpack_require__.bind(__webpack_require__, 17988))).default,ElevationLayer:async()=>(await __webpack_require__.e(/* import() */ 91856).then(__webpack_require__.bind(__webpack_require__, 91856))).default,FeatureLayer:async()=>(await __webpack_require__.e(/* import() */ 16730).then(__webpack_require__.bind(__webpack_require__, 16730))).default,GeoJSONLayer:async()=>(await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 74135))).default,GeoRSSLayer:async()=>(await __webpack_require__.e(/* import() */ 27612).then(__webpack_require__.bind(__webpack_require__, 27612))).default,GroupLayer:async()=>(await __webpack_require__.e(/* import() */ 7378).then(__webpack_require__.bind(__webpack_require__, 7378))).default,ImageryLayer:async()=>(await __webpack_require__.e(/* import() */ 51749).then(__webpack_require__.bind(__webpack_require__, 51749))).default,ImageryTileLayer:async()=>(await __webpack_require__.e(/* import() */ 36423).then(__webpack_require__.bind(__webpack_require__, 36423))).default,IntegratedMesh3DTilesLayer:async()=>(await __webpack_require__.e(/* import() */ 54951).then(__webpack_require__.bind(__webpack_require__, 54951))).default,IntegratedMeshLayer:async()=>(await __webpack_require__.e(/* import() */ 18577).then(__webpack_require__.bind(__webpack_require__, 18577))).default,KMLLayer:async()=>(await __webpack_require__.e(/* import() */ 25756).then(__webpack_require__.bind(__webpack_require__, 25756))).default,KnowledgeGraphLayer:async()=>(await __webpack_require__.e(/* import() */ 8825).then(__webpack_require__.bind(__webpack_require__, 8825))).default,LineOfSightLayer:async()=>(await __webpack_require__.e(/* import() */ 37759).then(__webpack_require__.bind(__webpack_require__, 37759))).default,LinkChartLayer:async()=>(await __webpack_require__.e(/* import() */ 42848).then(__webpack_require__.bind(__webpack_require__, 42848))).default,MapImageLayer:async()=>(await __webpack_require__.e(/* import() */ 27311).then(__webpack_require__.bind(__webpack_require__, 49692))).default,MapNotesLayer:async()=>(await __webpack_require__.e(/* import() */ 66636).then(__webpack_require__.bind(__webpack_require__, 66636))).default,MediaLayer:async()=>(await __webpack_require__.e(/* import() */ 14822).then(__webpack_require__.bind(__webpack_require__, 14822))).default,OGCFeatureLayer:async()=>(await __webpack_require__.e(/* import() */ 53986).then(__webpack_require__.bind(__webpack_require__, 53986))).default,OpenStreetMapLayer:async()=>(await __webpack_require__.e(/* import() */ 2774).then(__webpack_require__.bind(__webpack_require__, 2774))).default,OrientedImageryLayer:async()=>(await __webpack_require__.e(/* import() */ 93989).then(__webpack_require__.bind(__webpack_require__, 93989))).default,PointCloudLayer:async()=>(await __webpack_require__.e(/* import() */ 19158).then(__webpack_require__.bind(__webpack_require__, 19158))).default,RouteLayer:async()=>(await __webpack_require__.e(/* import() */ 67548).then(__webpack_require__.bind(__webpack_require__, 67548))).default,SceneLayer:async()=>(await __webpack_require__.e(/* import() */ 92387).then(__webpack_require__.bind(__webpack_require__, 92387))).default,StreamLayer:async()=>(await __webpack_require__.e(/* import() */ 65732).then(__webpack_require__.bind(__webpack_require__, 65732))).default,SubtypeGroupLayer:async()=>(await __webpack_require__.e(/* import() */ 8337).then(__webpack_require__.bind(__webpack_require__, 8337))).default,TileLayer:async()=>(await __webpack_require__.e(/* import() */ 65977).then(__webpack_require__.bind(__webpack_require__, 88358))).default,UnknownLayer:async()=>(await __webpack_require__.e(/* import() */ 89001).then(__webpack_require__.bind(__webpack_require__, 89001))).default,UnsupportedLayer:async()=>(await __webpack_require__.e(/* import() */ 94122).then(__webpack_require__.bind(__webpack_require__, 94122))).default,VectorTileLayer:async()=>(await __webpack_require__.e(/* import() */ 6414).then(__webpack_require__.bind(__webpack_require__, 6414))).default,VideoLayer:async()=>(await __webpack_require__.e(/* import() */ 98816).then(__webpack_require__.bind(__webpack_require__, 98816))).default,ViewshedLayer:async()=>(await __webpack_require__.e(/* import() */ 20265).then(__webpack_require__.bind(__webpack_require__, 20265))).default,VoxelLayer:async()=>(await __webpack_require__.e(/* import() */ 31197).then(__webpack_require__.bind(__webpack_require__, 31197))).default,WCSLayer:async()=>(await __webpack_require__.e(/* import() */ 46280).then(__webpack_require__.bind(__webpack_require__, 46280))).default,WFSLayer:async()=>(await __webpack_require__.e(/* import() */ 63461).then(__webpack_require__.bind(__webpack_require__, 63461))).default,WMSLayer:async()=>(await __webpack_require__.e(/* import() */ 44505).then(__webpack_require__.bind(__webpack_require__, 44505))).default,WMTSLayer:async()=>(await __webpack_require__.e(/* import() */ 78703).then(__webpack_require__.bind(__webpack_require__, 78703))).default,WebTileLayer:async()=>(await __webpack_require__.e(/* import() */ 221).then(__webpack_require__.bind(__webpack_require__, 221))).default};


/***/ }),

/***/ 3173:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ju: () => (/* binding */ u),
/* harmony export */   K8: () => (/* binding */ i),
/* harmony export */   XH: () => (/* binding */ c),
/* harmony export */   _r: () => (/* binding */ a),
/* harmony export */   bO: () => (/* binding */ l),
/* harmony export */   l: () => (/* binding */ o),
/* harmony export */   nu: () => (/* binding */ y),
/* harmony export */   pJ: () => (/* binding */ s),
/* harmony export */   rc: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _layers_support_associatedFeatureServiceUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28904);
/* harmony import */ var _layers_support_fetchService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48101);
/* harmony import */ var _layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44837);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function a(e){const t={id:e.id,name:e.name},a=(0,_layers_support_fetchService_js__WEBPACK_IMPORTED_MODULE_1__/* .getLayerModuleType */ .K)(e.type);return"FeatureLayer"!==a&&(t.layerType=a),t}async function l(e,r,l){let n;if(null==e?.layers||null==e?.tables){const u=await l.fetchServiceMetadata(r,{customParameters:s(e)?.customParameters});n=(0,_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getPreferredHost */ .G$)(),(e=e||{}).layers=e.layers||u?.layers?.map(a),e.tables=e.tables||u?.tables?.map(a)}return{data:e,preferredHost:n}}function s(e){if(!e)return null;const{layers:r,tables:t}=e;return r?.length?r[0]:t?.length?t[0]:null}function n(e,r){if(null==r)return null;return[...e.layers||[],...e.tables||[]].find((e=>e.id===r))}function u(e,r){return[...e.layers||[],...e.tables||[]].filter((({layerType:e})=>e?r.includes(e):r.includes("ArcGISFeatureLayer")))}function c(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}function o(e){switch(e){case"catalog":return["CatalogLayer"];case"feature":return["ArcGISFeatureLayer"];case"oriented-imagery":return["OrientedImageryLayer"];case"subtype-group":return["SubtypeGroupLayer","SubtypeGroupTable"]}return null}function i(e){switch(e){case"CatalogLayer":return"CatalogLayer";case"OrientedImageryLayer":return"OrientedImageryLayer";case"SubtypeGroupLayer":case"SubtypeGroupTable":return"SubtypeGroupLayer"}return"FeatureLayer"}async function y(r,t,l){if(!r?.url)return t??{};if(t??={},!t.layers){const e=await l.fetchServiceMetadata(r.url);t.layers=e.layers?.map(a)}const{serverUrl:n,portalItem:u}=await (0,_layers_support_associatedFeatureServiceUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .findAssociatedFeatureService */ .L)(r.url,{sceneLayerItem:r,customParameters:s(t)?.customParameters}).catch((()=>({serverUrl:null,portalItem:null})));if(null==n)return t.tables=[],t;if(!t.tables&&u){const e=await u.fetchData().catch((()=>null));if(e?.tables)t.tables=e.tables.map(a);else{const r=await l.fetchServiceMetadata(n,{customParameters:s(e)?.customParameters}).catch((()=>null));t.tables=r?.tables?.map(a)}}if(t.tables)for(const e of t.tables)e.url=`${n}/${e.id}`;return t}


/***/ }),

/***/ 25302:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromItem: () => (/* binding */ L),
/* harmony export */   n: () => (/* binding */ N)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62991);
/* harmony import */ var _layers_support_associatedFeatureServiceUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28904);
/* harmony import */ var _layers_support_fetchService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48101);
/* harmony import */ var _layers_support_LayerLoadContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86270);
/* harmony import */ var _layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44837);
/* harmony import */ var _layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97364);
/* harmony import */ var _PortalItem_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11969);
/* harmony import */ var _loadUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3173);
/* harmony import */ var _portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86074);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function L(e){let{portalItem:a}=e;!a||a instanceof _PortalItem_js__WEBPACK_IMPORTED_MODULE_6__["default"]||(a=new _PortalItem_js__WEBPACK_IMPORTED_MODULE_6__["default"](a));const r=await w(a);return new(0,r.constructor)({portalItem:a,...r.properties})}async function w(e){await e.load();const a=new _layers_support_LayerLoadContext_js__WEBPACK_IMPORTED_MODULE_3__/* .LayerLoadContext */ .v;return S(await N(e,a))}async function N(a,r){switch(a.type){case"3DTiles Service":return a.typeKeywords.includes("3DObject")?b():P();case"CSV":return F();case"Feature Collection":return M(a);case"Feature Service":return h(a,r);case"Feed":return x();case"GeoJson":return G();case"Group Layer":return J();case"Image Service":return g(a,r);case"KML":return V();case"Knowledge Graph Layer":return K();case"Map Service":return v(a,r);case"Media Layer":return k();case"Scene Service":return I(a,r);case"Stream Service":return j();case"Video Service":return T(a,r);case"Vector Tile Service":return C();case"WCS":return W();case"WFS":return U();case"WMS":return D();case"WMTS":return O();default:throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("portal:unknown-item-type","Unknown item type '${type}'",{type:a.type})}}async function S(e){const a=e.className,r=_layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__/* .layerLookupMap */ .S[a];return{constructor:await r(),properties:e.properties}}async function v(e,a){return await $(e,a)?{className:"TileLayer"}:{className:"MapImageLayer"}}async function h(e,a){const r=await A(e,a);if("object"==typeof r){const{sourceJSON:e,className:a}=r,t={sourceJSON:e};return null!=r.id&&(t.layerId=r.id),{className:a||"FeatureLayer",properties:t}}return{className:"GroupLayer"}}async function I(e,r){const t=await A(e,r,(async()=>{try{if(!e.url)return[];const{serverUrl:t}=await (0,_layers_support_associatedFeatureServiceUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .findAssociatedFeatureService */ .L)(e.url,{sceneLayerItem:e}),s=await r.fetchServiceMetadata(t);return s?.tables??[]}catch{return[]}}));if("object"==typeof t){const a={};let c;if(null!=t.id?(a.layerId=t.id,c=`${e.url}/layers/${t.id}`):c=e.url,e.typeKeywords?.length)for(const r of Object.keys(_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .sceneServiceLayerTypeToClassName */ .XX))if(e.typeKeywords.includes(r))return{className:_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .sceneServiceLayerTypeToClassName */ .XX[r]};const n=await r.fetchServiceMetadata(c,{customParameters:await r.fetchCustomParameters(e,(e=>(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .getFirstLayerOrTable */ .pJ)(e)?.customParameters))});return{className:_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .sceneServiceLayerTypeToClassName */ .XX[n?.layerType]||"SceneLayer",properties:a}}if(!1===t){const a=await r.fetchServiceMetadata(e.url);if("Voxel"===a?.layerType)return{className:"VoxelLayer"}}return{className:"GroupLayer"}}async function M(e){await e.load();const a=(0,_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .hasTypeKeyword */ .Y)(e,"Map Notes"),r=(0,_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .hasTypeKeyword */ .Y)(e,"Markup");if(a||r)return{className:"MapNotesLayer"};if((0,_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .hasTypeKeyword */ .Y)(e,"Route Layer"))return{className:"RouteLayer"};const t=await e.fetchData();return 1===(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .getNumLayersAndTables */ .XH)(t)?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function g(e,a){await e.load();const r=e.typeKeywords?.map((e=>e.toLowerCase()))??[];if(r.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(r.includes("tiled imagery"))return{className:"ImageryTileLayer"};const t=await a.fetchItemData(e),s=t?.layerType;if("ArcGISTiledImageServiceLayer"===s)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===s)return{className:"ImageryLayer"};const c=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)}),n=c.cacheType?.toLowerCase(),o=c.capabilities?.toLowerCase().includes("tilesonly"),i=c.tileInfo?.format?.toLowerCase()??"",u=null==n&&["jpg","jpeg","png","png8","png24","png32","mixed"].includes(i);return"map"===n||u||o?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function j(){return{className:"StreamLayer"}}async function T(e,a){return"object"==typeof await A(e,a)?{className:"VideoLayer"}:{className:"GroupLayer"}}function C(){return{className:"VectorTileLayer"}}function G(){return{className:"GeoJSONLayer"}}function P(){return{className:"IntegratedMesh3DTilesLayer"}}function b(){return{className:"UnsupportedLayer"}}function F(){return{className:"CSVLayer"}}function V(){return{className:"KMLLayer"}}function K(){return{className:"KnowledgeGraphLayer"}}function W(){return{className:"WCSLayer"}}function U(){return{className:"WFSLayer"}}function D(){return{className:"WMSLayer"}}function O(){return{className:"WMTSLayer"}}function x(){return{className:"StreamLayer"}}function J(){return{className:"GroupLayer"}}function k(){return{className:"MediaLayer"}}async function $(e,a){const{tileInfo:r}=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)});return r}async function A(e,a,t){const{url:s,type:o}=e,i="Feature Service"===o;if(!s)return{};if(/\/\d+$/.test(s)){if(i){const t=await a.fetchServiceMetadata(s,{customParameters:await a.fetchCustomParameters(e,(e=>(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .getFirstLayerOrTable */ .pJ)(e)?.customParameters))});return (0,_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .applyPreferredHostToPortalItem */ .Gh)(e,(0,_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .getPreferredHost */ .G$)()),{id:t.id,className:(0,_layers_support_fetchService_js__WEBPACK_IMPORTED_MODULE_2__/* .getLayerModuleType */ .K)(t.type),sourceJSON:t}}return{}}if("Video Service"===o){const e=await a.fetchServiceMetadata(s);return!((e.layers?.length??0)>1)&&{}}await e.load();let d=await a.fetchItemData(e);if(i){const{data:r,preferredHost:t}=await (0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .preprocessFSItemData */ .bO)(d,s,a);(0,_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .applyPreferredHostToPortalItem */ .Gh)(e,t);const n=E(r);if("object"==typeof n){const e=(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .getLayerOrTable */ .rc)(r,n.id);n.className=(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .layerTypeToLayerModuleType */ .K8)(e?.layerType)}return n}"Scene Service"===o&&(d=await (0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .populateSceneServiceItemData */ .nu)(e,d,a));if((0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .getNumLayersAndTables */ .XH)(d)>0)return E(d);const L=await a.fetchServiceMetadata(s);return t&&(L.tables=await t()),E(L)}function E(e){return 1===(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .getNumLayersAndTables */ .XH)(e)&&{id:(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .getFirstLayerOrTable */ .pJ)(e)?.id}}


/***/ }),

/***/ 99650:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3132);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49175);
/* harmony import */ var _core_Warning_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97629);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function t(t,i,n){const s=t&&t.getAtOrigin&&t.getAtOrigin("renderer",i.origin);if(s&&"unique-value"===s.type&&s.styleOrigin){const a=await (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .result */ .Ke)(s.populateFromStyle());if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .throwIfAborted */ .Te)(n),!1===a.ok){const e=a.error;i?.messages&&i.messages.push(new _core_Warning_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A("renderer:style-reference",`Failed to create unique value renderer from style reference: ${e.message}`,{error:e,context:i})),t.clear("renderer",i?.origin)}}}


/***/ }),

/***/ 88426:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38116);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function t(t,o){const{data:r}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t,{responseType:"json",query:{f:"json",...o?.customParameters,token:o?.apiKey}});return r}


/***/ })

};
;