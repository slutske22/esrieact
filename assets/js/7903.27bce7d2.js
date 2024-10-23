"use strict";
exports.id = 7903;
exports.ids = [7903];
exports.modules = {

/***/ 57903:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromUrl: () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20909);
/* harmony import */ var _arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16123);
/* harmony import */ var _associatedFeatureServiceUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98154);
/* harmony import */ var _fetchService_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83175);
/* harmony import */ var _layerUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40454);
/* harmony import */ var _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12434);
/* harmony import */ var _support_requestPresets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90176);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const u={FeatureLayer:!0,SceneLayer:!0};async function y(e){const r=e.properties?.customParameters,a=await p(e.url,r),t={...e.properties,url:e.url};if(a.layers.length+a.tables.length===0)return null!=a.layerId&&(t.layerId=a.layerId),null!=a.sourceJSON&&(t.sourceJSON=a.sourceJSON),new a.Constructor(t);const s=new(0,(await __webpack_require__.e(/* import() */ 2102).then(__webpack_require__.bind(__webpack_require__, 62102))).default)({title:a.parsedUrl.title});return await f(s,a,t),s}function m(e,r){return e?e.find((e=>e.id===r)):null}async function f(e,r,a){function t(e,r,t,s){const n={...a,layerId:r,sublayerTitleMode:"service-name"};return null!=e&&(n.url=e),null!=t&&(n.sourceJSON=t),s(n)}const s=r.sublayerConstructorProvider;for(const{id:n,serverUrl:l}of r.layers){const a=m(r.sublayerInfos,n),o=(a&&s?.(a))??r.Constructor,i=t(l,n,a,(e=>new o(e)));e.add(i)}if(r.tables.length){const a=await b("FeatureLayer");r.tables.forEach((({id:s,serverUrl:n})=>{const l=t(n,s,m(r.tableInfos,s),(e=>new a(e)));e.tables.add(l)}))}}async function p(r,a){let s=(0,_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_2__/* .parse */ .qg)(r);if(null==s&&(s=await d(r,a)),null==s)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:r});const{serverType:n,sublayer:l}=s;let i;const y={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"},m="FeatureServer"===n,f="SceneServer"===n,p={parsedUrl:s,Constructor:null,layerId:m||f?l??void 0:void 0,layers:[],tables:[]};switch(n){case"MapServer":if(null!=l)i="FeatureLayer";else{i=await h(r,a)?"TileLayer":"MapImageLayer"}break;case"ImageServer":{const e=await (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_7__/* .fetchArcGISServiceJSON */ .V)(r,{customParameters:a}),{tileInfo:t,cacheType:s}=e;i=t?"LERC"!==t?.format?.toUpperCase()||s&&"elevation"!==s.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const e=await (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_7__/* .fetchArcGISServiceJSON */ .V)(s.url.path,{customParameters:a});if(i="SceneLayer",e){const r=e?.layers;if("Voxel"===e?.layerType)i="VoxelLayer";else if(r?.length){const e=r[0]?.layerType;null!=e&&null!=_layerUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .sceneServiceLayerTypeToClassName */ .XX[e]&&(i=_layerUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .sceneServiceLayerTypeToClassName */ .XX[e])}}break}case"FeatureServer":if(i="FeatureLayer",null!=l){const e=await (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_7__/* .fetchArcGISServiceJSON */ .V)(r,{customParameters:a});p.sourceJSON=e,"Oriented Imagery Layer"===e.type&&(i="OrientedImageryLayer")}break;default:i=y[n]}if(u[i]&&null==l){const e=await S(r,n,a);m&&(p.sublayerInfos=e.layerInfos,p.tableInfos=e.tableInfos);if(1!==e.layers.length+e.tables.length)p.layers=e.layers,p.tables=e.tables,m&&e.layerInfos?.length&&(p.sublayerConstructorProvider=await I(e.layerInfos));else if(m||f){const r=e.layerInfos?.[0]??e.tableInfos?.[0];p.layerId=e.layers[0]?.id??e.tables[0]?.id,p.sourceJSON=r,m&&"Oriented Imagery Layer"===r?.type&&(i="OrientedImageryLayer")}}return p.Constructor=await b(i),p}async function d(e,t){const n=await (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_7__/* .fetchArcGISServiceJSON */ .V)(e,{customParameters:t});let l=null,o=null;const i=n.type;if("Feature Layer"===i||"Table"===i?(l="FeatureServer",o=n.id??null):"indexedVector"===i?l="VectorTileServer":n.hasOwnProperty("mapName")?l="MapServer":n.hasOwnProperty("bandCount")&&n.hasOwnProperty("pixelSizeX")?l="ImageServer":n.hasOwnProperty("maxRecordCount")&&n.hasOwnProperty("allowGeometryUpdates")?l="FeatureServer":n.hasOwnProperty("streamUrls")?l="StreamServer":v(n)?(l="SceneServer",o=n.id):n.hasOwnProperty("layers")&&v(n.layers?.[0])&&(l="SceneServer"),!l)return null;const u=null!=o?(0,_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_2__/* .parseNonStandardSublayerUrl */ .iz)(e):null;return{title:null!=u&&n.name||(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .getFilename */ .e7)(e),serverType:l,sublayer:o,url:{path:null!=u?u.serviceUrl:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .urlToObject */ .An)(e).path}}}function v(e){return null!=e&&e.hasOwnProperty("store")&&e.hasOwnProperty("id")&&"number"==typeof e.id}async function S(e,r,a){let t,s,n=!1;switch(r){case"FeatureServer":{const r=await (0,_fetchService_js__WEBPACK_IMPORTED_MODULE_4__/* .fetchFeatureService */ .Q)(e,{customParameters:a});n=!!r.layersJSON,t=r.layersJSON||r.serviceJSON;break}case"SceneServer":{const r=await w(e,a);t=r.serviceInfo,s=r.tableServerUrl;break}default:t=await (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_7__/* .fetchArcGISServiceJSON */ .V)(e,{customParameters:a})}const o=t?.layers,i=t?.tables;return{layers:o?.map((e=>({id:e.id}))).reverse()||[],tables:i?.map((e=>({serverUrl:s,id:e.id}))).reverse()||[],layerInfos:n?o:[],tableInfos:n?i:[]}}async function w(e,r){const a=await (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_7__/* .fetchArcGISServiceJSON */ .V)(e,{customParameters:r}),t=a.layers?.[0];if(!t)return{serviceInfo:a};try{const{serverUrl:t}=await (0,_associatedFeatureServiceUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .findAssociatedFeatureService */ .L)(e),s=await (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_7__/* .fetchArcGISServiceJSON */ .V)(t,{customParameters:r}).catch((()=>null));return s&&(a.tables=s.tables),{serviceInfo:a,tableServerUrl:t}}catch{return{serviceInfo:a}}}async function b(e){return(0,_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_6__/* .layerLookupMap */ .S[e])()}async function h(e,r){return(await (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_7__/* .fetchArcGISServiceJSON */ .V)(e,{customParameters:r})).tileInfo}async function I(e){const r=[],a=[];if(e.forEach((e=>{const{type:t}=e;"Oriented Imagery Layer"===t?(r.push(t),a.push(b("OrientedImageryLayer"))):(r.push(t),a.push(b("FeatureLayer")))})),!a.length)return;const t=await Promise.all(a),s=new Map;return r.forEach(((e,r)=>{s.set(e,t[r])})),e=>s.get(e.type)}


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