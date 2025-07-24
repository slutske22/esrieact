"use strict";
exports.id = 8380;
exports.ids = [8380];
exports.modules = {

/***/ 2527:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47980);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function i(i){i?.writtenProperties&&i.writtenProperties.forEach((({target:i,propName:t,newOrigin:e})=>{(0,_multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isMultiOriginJSONMixin */ .H)(i)&&e&&i.originOf(t)!==e&&i.updateOrigin(t,e)}))}


/***/ }),

/***/ 47980:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ i)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function i(i){return i&&"getAtOrigin"in i&&"originOf"in i}


/***/ }),

/***/ 8380:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   save: () => (/* binding */ p),
/* harmony export */   saveAs: () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61693);
/* harmony import */ var _portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86074);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const n="Stream Service",i="Feed",o="stream-layer-save",m="stream-layer-save-as";function u(e){return{isValid:"stream"===e.type&&!!e.url&&!e.webSocketUrl,errorMessage:"Stream layer should be created using a url to a stream service"}}function c(e){const t=e.layerJSON;return Promise.resolve(t&&Object.keys(t).length?t:null)}async function y(e,t){const{parsedUrl:n,title:i,fullExtent:o}=e;t.url=n.path,t.title||=i,t.extent=null,null!=o&&(t.extent=await (0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .getWGS84ExtentForItem */ .sQ)(o)),(0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .removeTypeKeyword */ .OM)(t,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .typeKeyword */ .mm.METADATA),(0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .addTypeKeyword */ .LG)(t,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .typeKeyword */ .mm.SINGLE_LAYER)}async function p(t,r){return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .save */ .UN)({layer:t,itemType:n,additionalItemType:i,validateLayer:u,createItemData:c,errorNamePrefix:o},r)}async function f(e,r,a){return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .saveAs */ .Uh)({layer:e,itemType:n,validateLayer:u,createItemData:c,errorNamePrefix:m,newItem:r,setItemProperties:y},a)}


/***/ }),

/***/ 61693:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UN: () => (/* binding */ P),
/* harmony export */   Uh: () => (/* binding */ $)
/* harmony export */ });
/* unused harmony exports addItem, createErrorMessage, ensureItemConfig, ensureLayerConfig, getLayerJSON, getPortalItem, setCommonItemProperties */
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62991);
/* harmony import */ var _core_accessorSupport_originUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2527);
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62304);
/* harmony import */ var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11969);
/* harmony import */ var _portal_support_jsonContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10069);
/* harmony import */ var _portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86074);
/* harmony import */ var _webdoc_support_saveUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49972);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function p(t,r,a){const o=a(t);if(!o.isValid)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(`${r}:invalid-parameters`,o.errorMessage,{layer:t})}async function l(e){const{layer:t,errorNamePrefix:r,validateLayer:a}=e;await t.load(),p(t,r,a)}function m(e,t){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`}function c(t){const{item:r,errorNamePrefix:a,layer:o,validateItem:i}=t;if(u(t),i){const t=i(r);if(!t.isValid)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(`${a}:invalid-parameters`,t.errorMessage,{layer:o})}}function u(t){const{item:r,itemType:a,additionalItemType:o,errorNamePrefix:i,layer:n}=t,s=[a];if(o&&s.push(o),!s.includes(r.type)){const t=s.map((e=>`'${e}'`)).join(", ");throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(`${i}:portal-item-wrong-type`,`Portal item type should be one of: "${t}"`,{item:r,layer:n})}}function f(t){const{layer:r,errorNamePrefix:a}=t,{portalItem:o}=r;if(!o)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(`${a}:portal-item-not-set`,m(r,"requires the portalItem property to be set"));if(!o.loaded)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(`${a}:portal-item-not-loaded`,m(r,"cannot be saved to a portal item that does not exist or is inaccessible"));c({...t,item:o})}function d(e){const{newItem:t,itemType:o}=e;let i=_portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_2__["default"].from(t);return i.id&&(i=i.clone(),i.id=null),i.type??=o,i.portal??=_portal_Portal_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getDefault(),c({...e,item:i}),i}function y(e){return (0,_portal_support_jsonContext_js__WEBPACK_IMPORTED_MODULE_3__/* .createForItemWrite */ .m)(e,"portal-item")}async function w(e,t,r){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const a=e.write({},t);return await Promise.all(t.resources?.pendingOperations??[]),(0,_webdoc_support_saveUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .evaluateWriteErrors */ .ci)(t,{errorName:"layer-write:unsupported"},r),a}function I(e){(0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .addTypeKeyword */ .LG)(e,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .typeKeyword */ .mm.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)))}async function v(e,t,r){const a=e.portal;await a.signIn(),await a.user.addItem({item:e,data:t,folder:r?.folder})}async function P(e,r){const{layer:a,createItemData:o,createJSONContext:i,setItemProperties:n,saveResources:s,supplementalUnsupportedErrors:p}=e;await l(e),f(e);const m=a.portalItem,c=i?i(m):y(m),u=await w(a,c,{...r,supplementalUnsupportedErrors:p}),d=await o({layer:a,layerJSON:u},m);return await(n?.(a,m,d)),I(m),await m.update({data:d}),(0,_core_accessorSupport_originUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .updateOrigins */ .v)(c),await(s?.(m,c)),m}async function $(e,r){const{layer:a,createItemData:o,createJSONContext:i,setItemProperties:n,saveResources:s,supplementalUnsupportedErrors:p}=e;await l(e);const m=d(e),c=i?i(m):y(m),u=await w(a,c,{...r,supplementalUnsupportedErrors:p}),f=await o({layer:a,layerJSON:u},m);return await n(a,m,f),I(m),await v(m,f,r),a.portalItem=m,(0,_core_accessorSupport_originUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .updateOrigins */ .v)(c),await(s?.(m,c)),m}


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

/***/ 49972:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ci: () => (/* binding */ s),
/* harmony export */   dL: () => (/* binding */ o)
/* harmony export */ });
/* unused harmony export hasCharts */
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62991);
/* harmony import */ var _layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44837);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function o(e){const r=[];for(const o of e.allLayers)if("beforeSave"in o&&"function"==typeof o.beforeSave){const e=o.beforeSave();e&&r.push(e)}await Promise.allSettled(r)}const t=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function s(r,o,s){let n=(r.messages??[]).filter((({type:e})=>"error"===e)).map((({name:r,message:o,details:t})=>new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(r,o,t)));if(r.blockedRelativeUrls&&(n=n.concat(r.blockedRelativeUrls.map((r=>new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("url:unsupported",`Relative url '${r}' is not supported`))))),s){const{ignoreUnsupported:e,supplementalUnsupportedErrors:r=[],requiredPropertyChecksDisabled:o}=s;e&&(n=n.filter((({name:e})=>!(t.has(e)||r.includes(e))))),o&&(n=n.filter((e=>"web-document-write:property-required"!==e.name)))}if(n.length>0)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(o.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:n})}function n(e){return r(e).some((e=>!!e.charts?.length))}


/***/ })

};
;