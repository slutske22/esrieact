"use strict";
exports.id = 8751;
exports.ids = [8751];
exports.modules = {

/***/ 98751:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addOrUpdateResource: () => (/* binding */ s),
/* harmony export */   bg: () => (/* binding */ m),
/* harmony export */   cL: () => (/* binding */ p),
/* harmony export */   fetchResources: () => (/* binding */ o),
/* harmony export */   removeAllResources: () => (/* binding */ l),
/* harmony export */   removeResource: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony exports getSiblingOfSameType, splitPrefixFileNameAndExtension */
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86394);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98849);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20909);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function o(e,t={},a){await e.load(a);const o=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(e.itemUrl,"resources"),{start:s=1,num:n=10,sortOrder:l="asc",sortField:u="created"}=t,c={query:{start:s,num:n,sortOrder:l,sortField:u,token:e.apiKey},signal:a?.signal},i=await e.portal.request(o,c);return{total:i.total,nextStart:i.nextStart,resources:i.resources.map((({created:t,size:r,resource:a})=>({created:new Date(t),size:r,resource:e.resourceFromPath(a)})))}}async function s(e,a,o,s){if(!e.hasPath())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(`portal-item-resource-${a}:invalid-path`,"Resource does not have a valid path");const n=e.portalItem;await n.load(s);const l=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(n.userItemUrl,"add"===a?"addResources":"updateResources"),[c,i]=u(e.path),p=new FormData;return c&&"."!==c&&p.append("resourcesPrefix",c),null!=s&&s.compress&&p.append("compress","true"),p.append("fileName",i),p.append("file",o,i),p.append("f","json"),s?.access&&p.append("access",s.access),await n.portal.request(l,{method:"post",body:p,signal:s?.signal}),e}async function n(e,a,o){if(!a.hasPath())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(o);const s=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(e.userItemUrl,"removeResources");await e.portal.request(s,{method:"post",query:{resource:a.path},signal:o?.signal}),a.portalItem=null}async function l(e,t){await e.load(t);const a=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(e.userItemUrl,"removeResources");return e.portal.request(a,{method:"post",query:{deleteAll:!0},signal:t?.signal})}function u(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function c(e){const[t,r]=i(e),[a,o]=u(t);return[a,o,r]}function i(e){const t=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getPathExtension */ .Zo)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}async function p(t){if("blob"===t.type)return t.blob;if("json"===t.type)return new Blob([t.jsonString],{type:"application/json"});return(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t.url,{responseType:"blob"})).data}function d(e,t){if(!e.hasPath())return null;const[a,,o]=c(e.path);return e.portalItem.resourceFromPath(r(a,t+o))}function m(e,t){if(!e.hasPath())return null;const[a,,o]=c(e.path);return e.portalItem.resourceFromPath((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(a,t+o))}


/***/ })

};
;