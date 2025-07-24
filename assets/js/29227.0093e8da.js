"use strict";
exports.id = 29227;
exports.ids = [29227];
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

/***/ 10069:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ o),
/* harmony export */   v: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19759);
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62304);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(t,r){return{...l(t,r),readResourcePaths:[]}}function o(r,e,o){const i=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .urlToObject */ .An)(r.itemUrl);return{...l(r,e),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:i?{rootPath:i.path,writtenUrls:[]}:null,resources:o?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function l(e,o){return{origin:o,url:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .urlToObject */ .An)(e.itemUrl),portal:e.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getDefault(),portalItem:e}}


/***/ }),

/***/ 29227:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   load: () => (/* binding */ b)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62991);
/* harmony import */ var _layers_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63457);
/* harmony import */ var _layers_support_fetchService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48101);
/* harmony import */ var _layers_support_LayerLoadContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86270);
/* harmony import */ var _layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44837);
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62304);
/* harmony import */ var _jsonContext_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10069);
/* harmony import */ var _loadUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3173);
/* harmony import */ var _portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86074);
/* harmony import */ var _renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99650);
/* harmony import */ var _support_requestPresets_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(88426);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function b(e,t){const r=e.instance.portalItem;if(r?.id)return await r.load(t),v(e),e.validateItem&&e.validateItem(r),L(e,t)}function v(t){const r=t.instance.portalItem;if(!r?.type||!t.supportedTypes.includes(r.type))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r?.type,expectedType:t.supportedTypes.join(", ")})}async function L(e,t){const r=e.instance,o=r.portalItem;if(!o)return;let{url:n}=o;const{title:s}=o,l=(0,_jsonContext_js__WEBPACK_IMPORTED_MODULE_6__/* .createForItemRead */ .v)(o,"portal-item");if("group"===r.type)return S(r,l,e);n&&"media"!==r.type&&r.read({url:n},l);const p=new _layers_support_LayerLoadContext_js__WEBPACK_IMPORTED_MODULE_3__/* .LayerLoadContext */ .v,{data:u,preferredHost:c}=await x(e,p,t);return n=o.url,"isUrlHostModified"in r&&(c?r.applyPreferredHost({preferredHost:c}):r.applyHostFromPortalItem()),u&&r.read(u,l),r.resourceReferences={portalItem:o,paths:l.readResourcePaths??[]},"subtype-group"!==r.type&&r.read({title:s},l),(0,_renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .loadStyleRenderer */ .L)(r,l)}async function S(t,r,a){const o=t.portalItem;if(!t.sourceIsPortalItem)return;const{title:n,type:s}=o;if("Group Layer"===s){if(!(0,_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .hasTypeKeyword */ .Y)(o,"Map"))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("portal:invalid-layer-item-typekeyword","'Group Layer' item without 'Map' type keyword is not supported");return T(t,a)}return t.read({title:n},r),j(t,a)}async function T(t,r){const a=t.portalItem,o=await a.fetchData("json");if(!o)return;if(!r.populateGroupLayer)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("portal:missing-populate-group-layer","Missing populate group layer");const n=(0,_jsonContext_js__WEBPACK_IMPORTED_MODULE_6__/* .createForItemRead */ .v)(a,"web-map");t.read(o,n),await r.populateGroupLayer(t,o,{context:n}),t.resourceReferences={portalItem:a,paths:n.readResourcePaths??[]}}async function j(t,r){let n;const{portalItem:s}=t;if(!s)return;const l=s.type,i=r.layerModuleTypeMap;if(!i)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("portal:missing-layer-module-type-map","Layer module type map is required to construct sub layers");switch(l){case"Feature Service":case"Feature Collection":n=i.FeatureLayer;break;case"Stream Service":n=i.StreamLayer;break;case"Scene Service":n=i.SceneLayer;break;case"Video Service":n=i.VideoLayer;break;default:throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("portal:unsupported-item-type-as-group",`The item type '${l}' is not supported as a 'IGroupLayer'`)}const p="Video Service"===l,u=new _layers_support_LayerLoadContext_js__WEBPACK_IMPORTED_MODULE_3__/* .LayerLoadContext */ .v;let[m,{data:w}]=await Promise.all([n(),p?{data:null}:x(r,u)]),h=()=>m;if(p)return F(t,h,i);if("Feature Service"===l){const e=(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .getFirstLayerOrTable */ .pJ)(w)?.customParameters;w=s.url?(await (0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .preprocessFSItemData */ .bO)(w,s.url,u)).data:{},h=await E(w,i)||h;const{provider:r,preferredHost:a}=await U(s.url,{customParameters:e,loadContext:u});return (0,_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .applyPreferredHostToPortalItem */ .Gh)(s,a),await H(t,h,h,w,i,r)}return"Scene Service"===l&&s.url&&(w=await (0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .populateSceneServiceItemData */ .nu)(s,w,u)),(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .getNumLayersAndTables */ .XH)(w)>0?await H(t,h,null,w,i):await P(t,h,i)}async function P(e,t,r){const{portalItem:a}=e;if(!a?.url)return;const o=await (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_10__/* .fetchArcGISServiceJSON */ .V)(a.url);o&&H(e,t,null,{layers:o.layers?.map(_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .createSublayerData */ ._r),tables:o.tables?.map(_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .createSublayerData */ ._r)},r)}async function F(e,t,r){const{portalItem:a}=e;if(!a?.url)return;const o=await (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_10__/* .fetchArcGISServiceJSON */ .V)(a.url);o&&H(e,t,null,{layers:o.layers?.map((({id:e,name:t})=>({id:e,name:t})))},r)}async function H(e,t,r,a,o,n){let s=a.layers||[];const l=a.tables||[];if("Feature Collection"===e.portalItem?.type?(s.forEach(((e,t)=>{e.id=t,"Table"===e?.layerDefinition?.type&&l.push(e)})),s=s.filter((e=>"Table"!==e?.layerDefinition?.type))):(s.reverse(),l.reverse()),s.forEach((r=>{const o=n?.(r);if(o||!n){const n=M(e,t(r),a,r,o);e.add(n)}})),l.length){const t=r?null:await o.FeatureLayer();l.forEach((o=>{const s=n?.(o);if(s||!n){const n=M(e,r?r(o):t,a,o,s);e.tables.add(n)}}))}}function M(e,t,r,a,o){const n=e.portalItem,s={portalItem:n.clone(),layerId:a.id};null!=a.url&&(s.url=a.url);const i=new t(s);if("sourceJSON"in i&&(i.sourceJSON=o),"subtype-group"!==i.type&&"catalog"!==i.type&&(i.sublayerTitleMode="service-name"),"Feature Collection"===n.type){const e={origin:"portal-item",portal:n.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.getDefault()};i.read(a,e);const t=r.showLegend;null!=t&&i.read({showLegend:t},e)}return i}async function x(e,t,r){if(!1===e.supportsData)return{data:void 0};const a=e.instance,n=a.portalItem;if(!n)return{data:void 0};let s=null;try{s=await n.fetchData("json",r)}catch(l){}if(C(a)){let e=null;const{count:r,preferredHost:l}=await G(n,s,t);if((0,_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .applyPreferredHostToPortalItem */ .Gh)(n,l),(s?.layers||s?.tables)&&r>0){if(null==a.layerId){const e=(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .instanceTypeToLayerTypes */ .l)(a.type),t=e?.length?(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .getSublayersByLayerType */ .Ju)(s,e)[0]:(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .getFirstLayerOrTable */ .pJ)(s);t&&(a.layerId=t.id)}e=k(s,a),"OrientedImageryLayer"===e?.layerType&&"oriented-imagery"===a.type&&a.supportedSourceTypes.add("Feature Layer"),e&&null!=s.showLegend&&(e.showLegend=s.showLegend)}return r>1&&"sublayerTitleMode"in a&&"service-name"!==a.sublayerTitleMode&&(a.sublayerTitleMode="item-title-and-service-name"),{data:e,preferredHost:l}}return{data:s}}async function G(e,r,a){if(r?.layers&&r?.tables)return{count:(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .getNumLayersAndTables */ .XH)(r)};const o=(0,_layers_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_1__/* .parse */ .qg)(e.url);if(!o)return{count:1};const l=o.url.path,i=await a.fetchServiceMetadata(l,{customParameters:(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .getFirstLayerOrTable */ .pJ)(r)?.customParameters}).catch((()=>null));return{count:(r?.layers?.length??i?.layers?.length??0)+(r?.tables?.length??i?.tables?.length??0),preferredHost:(0,_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isPreferredUrlApplicable */ .OP)(e)?(0,_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .getPreferredHost */ .G$)():null}}function k(e,t){const{layerId:r}=t,a=e.layers?.find((e=>e.id===r))||e.tables?.find((e=>e.id===r));return a&&D(a,t)?a:null}function C(e){return"stream"!==e.type&&"layerId"in e}function D(e,t){const r="layerType"in e&&e.layerType,{type:a}=t;return!("feature"===a&&r&&"ArcGISFeatureLayer"!==e.layerType||"catalog"===a&&!r||"oriented-imagery"===a&&!r||"subtype-group"===a&&!r)}async function U(e,t){const{layersJSON:a,preferredHost:o}=await (0,_layers_support_fetchService_js__WEBPACK_IMPORTED_MODULE_2__/* .fetchFeatureService */ .Q)(e,t);if(!a)return{provider:null,preferredHost:o};const n=[...a.layers,...a.tables];return{provider:e=>n.find((t=>t.id===e.id)),preferredHost:o}}async function E(e,t){const{layers:r,tables:a}=e,o=[...r??[],...a??[]];if(!o.length)return;const n=new Set,s=[];for(const{layerType:p}of o){const e=p??"ArcGISFeatureLayer";if(n.has(e))continue;n.add(e);const r=t[(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .layerTypeToLayerModuleType */ .K8)(e)];s.push(r())}const l=await Promise.all(s),i=new Map;return Array.from(n).forEach(((e,t)=>{i.set(e,l[t])})),({layerType:e})=>{const t=e??"ArcGISFeatureLayer";return i.get(t)}}


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