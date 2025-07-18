"use strict";
exports.id = 8361;
exports.ids = [8361];
exports.modules = {

/***/ 38361:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeForTopCount: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11499);
/* harmony import */ var _operations_queryTopFeatures_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69130);
/* harmony import */ var _support_TopFeaturesQuery_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56051);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function s(s,e,p){const u=(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .parseUrl */ .Dl)(s);return(await (0,_operations_queryTopFeatures_js__WEBPACK_IMPORTED_MODULE_1__/* .executeQueryForTopCount */ .xs)(u,_support_TopFeaturesQuery_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.from(e),{...p})).data.count}


/***/ }),

/***/ 69130:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $K: () => (/* binding */ d),
/* harmony export */   KW: () => (/* binding */ m),
/* harmony export */   Yb: () => (/* binding */ p),
/* harmony export */   xs: () => (/* binding */ a)
/* harmony export */ });
/* unused harmony export queryToQueryStringParameters */
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86394);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20909);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1171);
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65231);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87926);
/* harmony import */ var _operations_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80323);
/* harmony import */ var _queryZScale_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27604);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const u="Layer does not support extent calculation.";function y(t,e){const r=t.geometry,o=t.toJSON(),s=o;if(null!=r&&(s.geometry=JSON.stringify(r),s.geometryType=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getJsonType */ .$B)(r),s.inSR=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .srToRESTValue */ .YX)(r.spatialReference)),o.topFilter?.groupByFields&&(s.topFilter.groupByFields=o.topFilter.groupByFields.join(",")),o.topFilter?.orderByFields&&(s.topFilter.orderByFields=o.topFilter.orderByFields.join(",")),o.topFilter&&(s.topFilter=JSON.stringify(s.topFilter)),o.objectIds&&(s.objectIds=o.objectIds.join(",")),o.orderByFields&&(s.orderByFields=o.orderByFields.join(",")),o.outFields&&!(e?.returnCountOnly||e?.returnExtentOnly||e?.returnIdsOnly)?o.outFields.includes("*")?s.outFields="*":s.outFields=o.outFields.join(","):delete s.outFields,o.outSR?s.outSR=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .srToRESTValue */ .YX)(o.outSR):r&&o.returnGeometry&&(s.outSR=s.inSR),o.returnGeometry&&delete o.returnGeometry,o.timeExtent){const t=o.timeExtent,{start:e,end:r}=t;null==e&&null==r||(s.time=e===r?e:`${e??"null"},${r??"null"}`),delete o.timeExtent}return s}async function p(t,e,r,n){const o=await c(t,e,"json",n);return (0,_queryZScale_js__WEBPACK_IMPORTED_MODULE_5__/* .applyFeatureSetZUnitScaling */ .q)(e,r,o.data),o}async function m(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:c(t,e,"json",r,{returnIdsOnly:!0})}async function d(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:c(t,e,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(u);if(e.hasOwnProperty("count"))throw new Error(u);return t}))}function a(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):c(t,e,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function c(n,i,l,u={},p={}){const m="string"==typeof n?(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .urlToObject */ .An)(n):n,d=i.geometry?[i.geometry]:[];return u.responseType="pbf"===l?"array-buffer":"json",(0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .normalizeCentralMeridian */ .el)(d,null,u).then((e=>{const n=e?.[0];null!=n&&((i=i.clone()).geometry=n);const o=(0,_operations_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .mapParameters */ .z)({...m.query,f:l,...p,...y(i,p)});return (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .join */ .fj)(m.path,"queryTopFeatures"),{...u,query:{...o,...u.query}})}))}


/***/ })

};
;