"use strict";
exports.id = 84022;
exports.ids = [84022,90081];
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

/***/ 61641:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   save: () => (/* binding */ v),
/* harmony export */   saveAs: () => (/* binding */ x)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61693);
/* harmony import */ var _portal_support_jsonContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10069);
/* harmony import */ var _portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86074);
/* harmony import */ var _webdoc_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20267);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const i="Media Layer",u="media-layer-save",p="media-layer-save-as",l=["media-layer:unsupported-source"];function m(e){return{isValid:"media"===e.type,errorMessage:"Layer.type should be 'media'"}}function c(e){return (0,_portal_support_jsonContext_js__WEBPACK_IMPORTED_MODULE_1__/* .createForItemWrite */ .m)(e,"portal-item",!0)}function y(e){return Promise.resolve(e.layerJSON)}async function f(e,r){r.extent=e.fullExtent?await (0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getWGS84ExtentForItem */ .sQ)(e.fullExtent):null}async function d(e,r){r.title||=e.title,await f(e,r),(0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .removeTypeKeyword */ .OM)(r,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .typeKeyword */ .mm.METADATA)}async function v(r,t){return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .save */ .UN)({layer:r,itemType:i,validateLayer:m,createJSONContext:e=>c(e),createItemData:y,errorNamePrefix:u,supplementalUnsupportedErrors:l,setItemProperties:f,saveResources:(e,t)=>(0,_webdoc_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .saveResources */ .r)(r.resourceReferences,t)},t)}async function x(e,t,a){return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .saveAs */ .Uh)({layer:e,itemType:i,validateLayer:m,createJSONContext:e=>c(e),createItemData:y,errorNamePrefix:p,supplementalUnsupportedErrors:l,newItem:t,setItemProperties:d,saveResources:(r,t)=>(0,_webdoc_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .saveResources */ .r)(e.resourceReferences,t)},a)}


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

/***/ 90081:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addOrUpdateResources: () => (/* binding */ a),
/* harmony export */   bg: () => (/* binding */ m),
/* harmony export */   cL: () => (/* binding */ p),
/* harmony export */   fetchResources: () => (/* binding */ o),
/* harmony export */   removeAllResources: () => (/* binding */ c),
/* harmony export */   removeResource: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony exports getSiblingOfSameType, splitPrefixFileNameAndExtension */
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38116);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62991);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19759);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function o(e,t={},s){await e.load(s);const o=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(e.itemUrl,"resources"),{start:a=1,num:n=10,sortOrder:c="asc",sortField:l="resource"}=t,i={query:{start:a,num:n,sortOrder:c,sortField:l,token:e.apiKey},signal:s?.signal},u=await e.portal.request(o,i);return{total:u.total,nextStart:u.nextStart,resources:u.resources.map((({created:t,size:r,resource:s})=>({created:new Date(t),size:r,resource:e.resourceFromPath(s)})))}}async function a(e,s,o,a){const n=new Map;for(const{resource:r,content:i,compress:u,access:p}of s){if(!r.hasPath())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(`portal-item-resource-${o}:invalid-path`,"Resource does not have a valid path");const[e,s]=l(r.path),a=`${e}/${u??""}/${p??""}`;n.has(a)||n.set(a,{prefix:e,compress:u,access:p,files:[]});n.get(a).files.push({fileName:s,content:i})}await e.load(a);const c=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(e.userItemUrl,"add"===o?"addResources":"updateResources");for(const{prefix:t,compress:r,access:l,files:i}of n.values()){const s=25;for(let o=0;o<i.length;o+=s){const n=i.slice(o,o+s),u=new FormData;t&&"."!==t&&u.append("resourcesPrefix",t),r&&u.append("compress","true"),l&&u.append("access",l);let p=0;for(const{fileName:e,content:t}of n)u.append("file"+ ++p,t,e);u.append("f","json"),await e.portal.request(c,{method:"post",body:u,signal:a?.signal})}}}async function n(e,s,o){if(!s.hasPath())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(o);const a=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(e.userItemUrl,"removeResources");await e.portal.request(a,{method:"post",query:{resource:s.path},signal:o?.signal}),s.portalItem=null}async function c(e,t){await e.load(t);const s=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(e.userItemUrl,"removeResources");return e.portal.request(s,{method:"post",query:{deleteAll:!0},signal:t?.signal})}function l(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function i(e){const[t,r]=u(e),[s,o]=l(t);return[s,o,r]}function u(e){const t=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getPathExtension */ .Zo)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}async function p(t){if("blob"===t.type)return t.blob;if("json"===t.type)return new Blob([t.jsonString],{type:"application/json"});return(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t.url,{responseType:"blob"})).data}function f(e,t){if(!e.hasPath())return null;const[s,,o]=i(e.path);return e.portalItem.resourceFromPath(r(s,t+o))}function m(e,t){if(!e.hasPath())return null;const[s,,o]=i(e.path);return e.portalItem.resourceFromPath((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(s,t+o))}


/***/ }),

/***/ 20267:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ n),
/* harmony export */   r: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62991);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49175);
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1874);
/* harmony import */ var _portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90081);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function p(e,t,r){const o=await u(e,t,r);await h(o,t,r)}async function n(e,t,r,o,s){const a=await u(r,o,s);await e.update({data:t}),await h(a,o,s)}async function u(o,p,n){if(!p?.resources)return;const u=p.portalItem===o.portalItem?new Set(o.paths):new Set;o.paths.length=0,o.portalItem=p.portalItem;const h=new Set(p.resources.toKeep.map((e=>e.resource.path))),i=new Set,m=[];h.forEach((e=>{u.delete(e),o.paths.push(e)}));const f=[],l=[],w=[];for(const e of p.resources.toUpdate)if(u.delete(e.resource.path),h.has(e.resource.path)||i.has(e.resource.path)){const{resource:t,content:r,finish:p}=e,n=(0,_portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .getSiblingOfSameTypeI */ .bg)(t,(0,_core_uuid_js__WEBPACK_IMPORTED_MODULE_2__/* .generateUUID */ .lk)());o.paths.push(n.path),f.push({resource:n,content:await (0,_portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .contentToBlob */ .cL)(r),compress:e.compress}),p&&w.push((()=>p(n)))}else{o.paths.push(e.resource.path),l.push({resource:e.resource,content:await (0,_portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .contentToBlob */ .cL)(e.content),compress:e.compress});const t=e.finish;t&&w.push((()=>t(e.resource))),i.add(e.resource.path)}for(const e of p.resources.toAdd)if(o.paths.push(e.resource.path),u.has(e.resource.path))u.delete(e.resource.path);else{f.push({resource:e.resource,content:await (0,_portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .contentToBlob */ .cL)(e.content),compress:e.compress});const t=e.finish;t&&w.push((()=>t(e.resource)))}if(f.length||l.length){const{addOrUpdateResources:e}=await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 90081));await e(p.portalItem,f,"add",n),await e(p.portalItem,l,"update",n)}if(w.forEach((e=>e())),0===m.length)return u;const d=await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .allSettledErrors */ .Ol)(m);if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .throwIfAborted */ .Te)(n),d.length>0)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("save:resources","Failed to save one or more resources",{errors:d});return u}async function h(e,t,r){if(!e||!t.portalItem)return;const s=[];for(const o of e){const e=t.portalItem.resourceFromPath(o);s.push(e.portalItem.removeResource(e,r))}await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .eachAlways */ .Lx)(s)}


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