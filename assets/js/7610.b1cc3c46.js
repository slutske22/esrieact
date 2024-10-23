"use strict";
exports.id = 7610;
exports.ids = [7610];
exports.modules = {

/***/ 34541:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55750);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function i(i){i?.writtenProperties&&i.writtenProperties.forEach((({target:i,propName:t,newOrigin:e})=>{(0,_multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isMultiOriginJSONMixin */ .H)(i)&&e&&i.originOf(t)!==e&&i.updateOrigin(t,e)}))}


/***/ }),

/***/ 55750:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ i)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function i(i){return i&&"getAtOrigin"in i&&"originOf"in i}


/***/ }),

/***/ 77610:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   save: () => (/* binding */ H),
/* harmony export */   saveAs: () => (/* binding */ W)
/* harmony export */ });
/* unused harmony exports saveAll, saveAllAs */
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85569);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98849);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14103);
/* harmony import */ var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16123);
/* harmony import */ var _support_fetchService_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83175);
/* harmony import */ var _support_layerUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40454);
/* harmony import */ var _support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12434);
/* harmony import */ var _portal_support_jsonContext_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47231);
/* harmony import */ var _portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39532);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const L="Feature Service",P="feature-layer-utils",E=`${P}-save`,$=`${P}-save-as`,A=(/* unused pure expression or super */ null && (`${P}-saveall`)),N=(/* unused pure expression or super */ null && (`${P}-saveall-as`));function g(e){return{isValid:(0,_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isLayerWithFeatureLayerSource */ .W_)(e)&&("feature"!==e.type||!e.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function x(e){const a=[],r=[];for(const{layer:t,layerJSON:o}of e)t.isTable?r.push(o):a.push(o);return{layers:a,tables:r}}function j(e){return x([e])}async function O(e,a){return/\/\d+\/?$/.test(e.url)?j(a[0]):U(a,e)}async function U(e,a){if(!a)return e.reverse(),x(e);const{layer:{url:r,customParameters:t,apiKey:o}}=e[0];let s=await a.fetchData("json");null!=s?.layers&&null!=s?.tables||(s=await F(s,{url:r??"",customParameters:t,apiKey:o},e.map((e=>e.layer.layerId))));for(const n of e)K(n.layer,n.layerJSON,s);return s}async function F(e,a,r){e||={},e.layers||=[],e.tables||=[];const{url:t,customParameters:o,apiKey:s}=a,{serviceJSON:n,layersJSON:l}=await (0,_support_fetchService_js__WEBPACK_IMPORTED_MODULE_4__/* .fetchFeatureService */ .Q)(t,{customParameters:o,apiKey:s}),i=J(e.layers,n.layers,r),c=J(e.tables,n.tables,r);e.layers=i.itemResources,e.tables=c.itemResources;const u=[...i.added,...c.added],p=l?[...l.layers,...l.tables]:[];return await M(e,u,t,p),e}function J(a,r,t){const o=(0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .difference */ .iv)(a,r,((e,a)=>e.id===a.id));a=a.filter((e=>!o.removed.some((a=>a.id===e.id))));const s=o.added;return s.forEach((({id:e})=>{a.push({id:e})})),{itemResources:a,added:s.filter((({id:e})=>!t.includes(e)))}}async function M(e,a,r,t){const o=await R(a),s=a.map((({id:e,type:a})=>new(o.get(a))({url:r,layerId:e,sourceJSON:t.find((({id:a})=>a===e))})));await Promise.allSettled(s.map((e=>e.load()))),s.forEach((a=>{const{layerId:r,loaded:t,defaultPopupTemplate:o}=a;if(!t||null==o)return;const s={id:r,popupInfo:o.toJSON()};"ArcGISFeatureLayer"!==a.operationalLayerType&&(s.layerType=a.operationalLayerType),K(a,s,e)}))}async function R(e){const a=[];e.forEach((({type:e})=>{const r=D(e),t=_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_6__/* .layerLookupMap */ .S[r];a.push(t())}));const r=await Promise.all(a),t=new Map;return e.forEach((({type:e},a)=>{t.set(e,r[a])})),t}function D(e){let a;switch(e){case"Feature Layer":case"Table":a="FeatureLayer";break;case"Oriented Imagery Layer":a="OrientedImageryLayer"}return a}function K(e,a,r){e.isTable?Y(r.tables,a):Y(r.layers,a)}function Y(e,a){const r=e.findIndex((({id:e})=>e===a.id));-1===r?e.push(a):e[r]=a}function _(e,a){if(!e.length)throw new r(`${a}:missing-parameters`,"'layers' array should contain at least one feature layer")}function z(e,a){const t=e.map((e=>e.portalItem.id));if(new Set(t).size>1)throw new r(`${a}:invalid-parameters`,"All layers in the 'layers' array should be loaded from the same portal item")}function G(e,a){const t=e.map((e=>e.layerId));if(new Set(t).size!==t.length)throw new r(`${a}:invalid-parameters`,"'layers' array should contain only one instance each of layer or table in a feature service")}async function B(e){_(e,A),await Promise.all(e.map((e=>e.load())));for(const a of e)u(a,A,g),p({layer:a,itemType:L,errorNamePrefix:A});z(e,A),G(e,A)}async function k(e,a){const{url:r,layerId:t,title:o,fullExtent:s,isTable:n}=e,l=(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_3__/* .parse */ .qg)(r);a.url="FeatureServer"===l?.serverType?r:`${r}/${t}`,a.title||=o,a.extent=null,n||null==s||(a.extent=await (0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .getWGS84ExtentForItem */ .sQ)(s)),(0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .removeTypeKeyword */ .OM)(a,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .TypeKeyword */ .Ce.METADATA),(0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .removeTypeKeyword */ .OM)(a,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .TypeKeyword */ .Ce.MULTI_LAYER),(0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .addTypeKeyword */ .LG)(a,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .TypeKeyword */ .Ce.SINGLE_LAYER),n&&(0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .addTypeKeyword */ .LG)(a,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .TypeKeyword */ .Ce.TABLE)}function C(e,a){for(const n of e){const t=n.parsedUrl.path,o=m(t),s=o?.url.path;if(!s)throw new r(`${a}:invalid-parameters`,y(n,`has unsupported url pattern: ${t}`),{layer:n});const l=o?.serverType;if("FeatureServer"!==l&&"MapServer"!==l)throw new r(`${a}:invalid-parameters`,y(n,`has unsupported server type: ${l}`),{layer:n});if("MapServer"===l&&e.length>1)throw new r(`${a}:invalid-parameters`,"Only one layer or table in a map service can be saved")}const t=m(e[0].parsedUrl.path),o=t?.url.path,s=e.every((e=>{const a=m(e.parsedUrl.path);return a?.url.path===o}));if(!s)throw new r(`${a}:invalid-parameters`,"'layers' array should only contain layers or tables that belong to the same feature service")}async function V(e){_(e,N),await Promise.all(e.map((e=>e.load())));for(const a of e)u(a,N,g);C(e,N),G(e,N)}async function q(e,r){let t=0,o=0;for(const{isTable:a}of r)a?o++:t++;const s=r[0].parsedUrl.path,l=m(s);if(e.url="FeatureServer"===l?.serverType?l.url.path:s,e.title||=l.title,e.extent=null,t>0){const t=r.map((e=>e.fullExtent)).filter(a).reduce(((e,a)=>e.clone().union(a)));t&&(e.extent=await v(t))}I(e,T.METADATA),S(e,T.MULTI_LAYER,r.length>1),S(e,T.SINGLE_LAYER,1===r.length),S(e,T.TABLE,o>0&&0===t),n(e)}async function H(e,a){return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .save */ .UN)({layer:e,itemType:L,validateLayer:g,createItemData:(e,a)=>O(a,[e]),errorNamePrefix:E},a)}async function Q(e,a){await B(e);const r=e[0].portalItem,o=w(r),l=await Promise.all(e.map((e=>s(e,o,a)))),i=await O(r,e.map(((e,a)=>({layer:e,layerJSON:l[a]}))));return n(r),await r.update({data:i}),await Promise.all(e.slice(1).map((e=>e.portalItem.reload()))),t(o),r.clone()}async function W(e,a,r){return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .saveAs */ .Uh)({layer:e,itemType:L,validateLayer:g,createItemData:(e,a)=>Promise.resolve(j(e)),errorNamePrefix:$,newItem:a,setItemProperties:k},r)}async function X(e,a,r){await V(e);const o=i({itemType:L,errorNamePrefix:N,newItem:a}),n=w(o),l=await Promise.all(e.map((e=>s(e,n,r)))),u=await U(e.map(((e,a)=>({layer:e,layerJSON:l[a]}))));await q(o,e),await c(o,u,r);for(const t of e)t.portalItem=o.clone();return t(n),o}


/***/ }),

/***/ 14103:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UN: () => (/* binding */ I),
/* harmony export */   Uh: () => (/* binding */ b)
/* harmony export */ });
/* unused harmony exports addItem, createErrorMessage, ensureItemConfig, ensureLayerConfig, getLayerJSON, getPortalItem, setCommonItemProperties */
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/* harmony import */ var _core_accessorSupport_originUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34541);
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10282);
/* harmony import */ var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26099);
/* harmony import */ var _portal_support_jsonContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47231);
/* harmony import */ var _portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39532);
/* harmony import */ var _webdoc_saveAPIKeyUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54383);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function l(t,r,o){const a=o(t);if(!a.isValid)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(`${r}:invalid-parameters`,a.errorMessage,{layer:t})}async function p(e){const{layer:t,errorNamePrefix:r,validateLayer:o}=e;await t.load(),l(t,r,o)}function m(e,t){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`}function c(t){const{item:r,itemType:o,errorNamePrefix:a,layer:i,validateItem:n}=t;if((0,_webdoc_saveAPIKeyUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .validateSaveAPIKey */ .X)(r),r.type!==o)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(`${a}:portal-item-wrong-type`,`Portal item type should be "${o}"`,{item:r,layer:i});if(n){const t=n(r);if(!t.isValid)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(`${a}:invalid-parameters`,t.errorMessage,{layer:i})}}function d(t){const{layer:r,errorNamePrefix:o}=t,{portalItem:a}=r;if(!a)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(`${o}:portal-item-not-set`,m(r,"requires the portalItem property to be set"));if(!a.loaded)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(`${o}:portal-item-not-loaded`,m(r,"cannot be saved to a portal item that does not exist or is inaccessible"));c({...t,item:a})}function u(e){const{newItem:t,itemType:a}=e;let i=_portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_2__["default"].from(t);return i.id&&(i=i.clone(),i.id=null),i.type??=a,i.portal??=_portal_Portal_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getDefault(),c({...e,item:i}),i}function f(t,r){let o=(t.messages??[]).filter((({type:e})=>"error"===e)).map((({name:t,message:r,details:o})=>new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(t,r,o)));if(t.blockedRelativeUrls&&(o=o.concat(t.blockedRelativeUrls.map((t=>new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("url:unsupported",`Relative url '${t}' is not supported`))))),r?.ignoreUnsupported&&(o=o.filter((({name:e})=>"layer:unsupported"!==e&&"symbol:unsupported"!==e&&"symbol-layer:unsupported"!==e&&"property:unsupported"!==e&&"url:unsupported"!==e))),o.length>0)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("layer-write:unsupported","Failed to save layer due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:o})}async function y(e,t,r){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const o=e.write({},t);return await Promise.all(t.resources?.pendingOperations??[]),f(t,r),o}function w(e){(0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .addTypeKeyword */ .LG)(e,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .TypeKeyword */ .Ce.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)))}async function v(e,t,r){const o=e.portal;await o.signIn(),await(o.user?.addItem({item:e,data:t,folder:r?.folder}))}async function I(e,r){const{layer:o,createItemData:i,createJSONContext:n,saveResources:s}=e;await p(e),d(e);const l=o.portalItem,m=n?n(l):(0,_portal_support_jsonContext_js__WEBPACK_IMPORTED_MODULE_3__/* .createForItemWrite */ .mB)(l),c=await y(o,m,r),u=await i({layer:o,layerJSON:c},l);return w(l),await l.update({data:u}),(0,_core_accessorSupport_originUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .updateOrigins */ .v)(m),await(s?.(l,m)),l}async function b(e,r){const{layer:o,createItemData:i,createJSONContext:n,setItemProperties:s,saveResources:l}=e;await p(e);const m=u(e),c=n?n(m):(0,_portal_support_jsonContext_js__WEBPACK_IMPORTED_MODULE_3__/* .createForItemWrite */ .mB)(m),d=await y(o,c,r),f=await i({layer:o,layerJSON:d},m);return await s(o,m),w(m),await v(m,f,r),o.portalItem=m,(0,_core_accessorSupport_originUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .updateOrigins */ .v)(c),await(l?.(m,c)),m}


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


/***/ }),

/***/ 54383:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21121);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98849);
/* harmony import */ var _support_apiKeyUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71647);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function i(i){if(_config_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.apiKey&&(0,_support_apiKeyUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .supportsApiKey */ .Q)(i.portal.url))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("save-api-key-utils:api-key-not-supported",`Saving is not supported on ${i.portal.url} when using an api key`)}


/***/ })

};
;