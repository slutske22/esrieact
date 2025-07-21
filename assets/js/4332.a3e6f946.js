"use strict";
exports.id = 4332;
exports.ids = [4332];
exports.modules = {

/***/ 14332:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   save: () => (/* binding */ v),
/* harmony export */   saveAs: () => (/* binding */ x)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14103);
/* harmony import */ var _portal_support_jsonContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47231);
/* harmony import */ var _portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39532);
/* harmony import */ var _webdoc_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52273);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const i="Media Layer",u="media-layer-save",p="media-layer-save-as",l=["media-layer:unsupported-source"];function m(e){return{isValid:"media"===e.type,errorMessage:"Layer.type should be 'media'"}}function c(e){return (0,_portal_support_jsonContext_js__WEBPACK_IMPORTED_MODULE_1__/* .createForItemWrite */ .m)(e,"portal-item",!0)}function y(e){return Promise.resolve(e.layerJSON)}async function f(e,r){r.extent=e.fullExtent?await (0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getWGS84ExtentForItem */ .sQ)(e.fullExtent):null}async function d(e,r){r.title||=e.title,await f(e,r),(0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .removeTypeKeyword */ .OM)(r,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .typeKeyword */ .mm.METADATA)}async function v(r,t){return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .save */ .UN)({layer:r,itemType:i,validateLayer:m,createJSONContext:e=>c(e),createItemData:y,errorNamePrefix:u,supplementalUnsupportedErrors:l,setItemProperties:f,saveResources:(e,t)=>(0,_webdoc_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .saveResources */ .r)(r.resourceReferences,t)},t)}async function x(e,t,a){return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .saveAs */ .Uh)({layer:e,itemType:i,validateLayer:m,createJSONContext:e=>c(e),createItemData:y,errorNamePrefix:p,supplementalUnsupportedErrors:l,newItem:t,setItemProperties:d,saveResources:(r,t)=>(0,_webdoc_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .saveResources */ .r)(e.resourceReferences,t)},a)}


/***/ }),

/***/ 14103:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UN: () => (/* binding */ P),
/* harmony export */   Uh: () => (/* binding */ $)
/* harmony export */ });
/* unused harmony exports addItem, createErrorMessage, ensureItemConfig, ensureLayerConfig, getLayerJSON, getPortalItem, setCommonItemProperties */
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/* harmony import */ var _core_accessorSupport_originUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34541);
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10282);
/* harmony import */ var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26099);
/* harmony import */ var _portal_support_jsonContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47231);
/* harmony import */ var _portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39532);
/* harmony import */ var _webdoc_support_saveUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22942);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function p(t,r,a){const o=a(t);if(!o.isValid)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(`${r}:invalid-parameters`,o.errorMessage,{layer:t})}async function l(e){const{layer:t,errorNamePrefix:r,validateLayer:a}=e;await t.load(),p(t,r,a)}function m(e,t){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`}function c(t){const{item:r,errorNamePrefix:a,layer:o,validateItem:i}=t;if(u(t),i){const t=i(r);if(!t.isValid)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(`${a}:invalid-parameters`,t.errorMessage,{layer:o})}}function u(t){const{item:r,itemType:a,additionalItemType:o,errorNamePrefix:i,layer:n}=t,s=[a];if(o&&s.push(o),!s.includes(r.type)){const t=s.map((e=>`'${e}'`)).join(", ");throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(`${i}:portal-item-wrong-type`,`Portal item type should be one of: "${t}"`,{item:r,layer:n})}}function f(t){const{layer:r,errorNamePrefix:a}=t,{portalItem:o}=r;if(!o)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(`${a}:portal-item-not-set`,m(r,"requires the portalItem property to be set"));if(!o.loaded)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(`${a}:portal-item-not-loaded`,m(r,"cannot be saved to a portal item that does not exist or is inaccessible"));c({...t,item:o})}function d(e){const{newItem:t,itemType:o}=e;let i=_portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_2__["default"].from(t);return i.id&&(i=i.clone(),i.id=null),i.type??=o,i.portal??=_portal_Portal_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getDefault(),c({...e,item:i}),i}function y(e){return (0,_portal_support_jsonContext_js__WEBPACK_IMPORTED_MODULE_3__/* .createForItemWrite */ .m)(e,"portal-item")}async function w(e,t,r){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const a=e.write({},t);return await Promise.all(t.resources?.pendingOperations??[]),(0,_webdoc_support_saveUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .evaluateWriteErrors */ .ci)(t,{errorName:"layer-write:unsupported"},r),a}function I(e){(0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .addTypeKeyword */ .LG)(e,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .typeKeyword */ .mm.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)))}async function v(e,t,r){const a=e.portal;await a.signIn(),await a.user.addItem({item:e,data:t,folder:r?.folder})}async function P(e,r){const{layer:a,createItemData:o,createJSONContext:i,setItemProperties:n,saveResources:s,supplementalUnsupportedErrors:p}=e;await l(e),f(e);const m=a.portalItem,c=i?i(m):y(m),u=await w(a,c,{...r,supplementalUnsupportedErrors:p}),d=await o({layer:a,layerJSON:u},m);return await(n?.(a,m,d)),I(m),await m.update({data:d}),(0,_core_accessorSupport_originUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .updateOrigins */ .v)(c),await(s?.(m,c)),m}async function $(e,r){const{layer:a,createItemData:o,createJSONContext:i,setItemProperties:n,saveResources:s,supplementalUnsupportedErrors:p}=e;await l(e);const m=d(e),c=i?i(m):y(m),u=await w(a,c,{...r,supplementalUnsupportedErrors:p}),f=await o({layer:a,layerJSON:u},m);return await n(a,m,f),I(m),await v(m,f,r),a.portalItem=m,(0,_core_accessorSupport_originUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .updateOrigins */ .v)(c),await(s?.(m,c)),m}


/***/ })

};
;