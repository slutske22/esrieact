"use strict";
exports.id = 8029;
exports.ids = [8029];
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

/***/ 58029:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   save: () => (/* binding */ u),
/* harmony export */   saveAs: () => (/* binding */ g)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14103);
/* harmony import */ var _portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39532);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const s="Image Service",l="imagery-layer-save",y="imagery-layer-save-as",n="imagery-tile-layer-save",o="imagery-tile-layer-save-as";function m(e){if("imagery"===e.type)return{isValid:!0};const{raster:t}=e,r="Function"===t?.datasetFormat?t.primaryRasters?.rasters[0]:t;return{isValid:"RasterTileServer"===r?.datasetFormat&&("Raster"===r.tileType||"Map"===r.tileType),errorMessage:"imagery tile layer should be created from a tiled image service."}}function c(e){const t=e.layerJSON;return Promise.resolve(t&&Object.keys(t).length?t:null)}async function p(e,t){const{parsedUrl:s,title:l,fullExtent:y}=e;t.url=s.path,t.title||=l,t.extent=await (0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .getWGS84ExtentForItem */ .sQ)(y),"imagery-tile"===e.type&&(0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .addTypeKeyword */ .LG)(t,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .TypeKeyword */ .Ce.TILED_IMAGERY)}async function u(t,r){const a="imagery"===t.type?l:n;return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .save */ .UN)({layer:t,itemType:s,validateLayer:m,createItemData:c,errorNamePrefix:a},r)}async function g(e,r,a){const i="imagery"===e.type?y:o;return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .saveAs */ .Uh)({layer:e,itemType:s,validateLayer:m,createItemData:c,errorNamePrefix:i,newItem:r,setItemProperties:p},a)}


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