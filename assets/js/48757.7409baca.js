"use strict";
exports.id = 48757;
exports.ids = [48757];
exports.modules = {

/***/ 48757:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerFunctions: () => (/* binding */ A)
/* harmony export */ });
/* harmony import */ var _ArcadeDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28300);
/* harmony import */ var _executionError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90364);
/* harmony import */ var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82951);
/* harmony import */ var _fieldStats_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99057);
/* harmony import */ var _core_sql_SqlTimestampOffset_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9915);
/* harmony import */ var _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88435);
/* harmony import */ var _support_guards_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42663);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function l(n,t,e,a){if(1===e.length){if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_6__/* .isArray */ .cy)(e[0]))return (0,_fieldStats_js__WEBPACK_IMPORTED_MODULE_3__/* .calculateStat */ .t)(n,e[0],(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.J)(e[1],-1));if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.j)(e[0]))return (0,_fieldStats_js__WEBPACK_IMPORTED_MODULE_3__/* .calculateStat */ .t)(n,e[0].toArray(),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.J)(e[1],-1))}else if(2===e.length){if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_6__/* .isArray */ .cy)(e[0]))return (0,_fieldStats_js__WEBPACK_IMPORTED_MODULE_3__/* .calculateStat */ .t)(n,e[0],(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.J)(e[1],-1));if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.j)(e[0]))return (0,_fieldStats_js__WEBPACK_IMPORTED_MODULE_3__/* .calculateStat */ .t)(n,e[0].toArray(),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.J)(e[1],-1));if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.m)(e[0])){const r=await e[0].load(),i=await y(_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.create(e[1],{fieldsIndex:r.getFieldsIndex(),timeZone:r.dateFieldsTimeZoneDefaultUTC}),a,t);return g(t,await e[0].calculateStatistic(n,i,(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.J)(e[2],1e3),t.abortSignal))}}else if(3===e.length&&(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.m)(e[0])){const r=await e[0].load(),i=await y(_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.create(e[1],{fieldsIndex:r.getFieldsIndex(),timeZone:r.dateFieldsTimeZoneDefaultUTC}),a,t);return g(t,await e[0].calculateStatistic(n,i,(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.J)(e[2],1e3),t.abortSignal))}return (0,_fieldStats_js__WEBPACK_IMPORTED_MODULE_3__/* .calculateStat */ .t)(n,e,-1)}function g(t,e){return e instanceof _core_sql_SqlTimestampOffset_js__WEBPACK_IMPORTED_MODULE_4__/* .SqlTimeStampOffset */ .g?_ArcadeDate_js__WEBPACK_IMPORTED_MODULE_0__/* .ArcadeDate */ .lY.fromReaderAsTimeStampOffset(e.toStorageFormat()):e instanceof Date?_ArcadeDate_js__WEBPACK_IMPORTED_MODULE_0__/* .ArcadeDate */ .lY.dateJSAndZoneToArcadeDate(e,(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(t)):e}async function y(n,t,e){const a=n.getVariables();if(a.length>0){const r={};for(const n of a)r[n]=t.evaluateIdentifier(e,{name:n});n.parameters=r}return n}function A(n){"async"===n.mode&&(n.functions.stdev=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>l("stdev",t,r,n)))},n.functions.variance=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>l("variance",t,r,n)))},n.functions.average=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>l("mean",t,r,n)))},n.functions.mean=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>l("mean",t,r,n)))},n.functions.sum=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>l("sum",t,r,n)))},n.functions.min=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>l("min",t,r,n)))},n.functions.max=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>l("max",t,r,n)))},n.functions.count=function(o,s){return n.standardFunctionAsync(o,s,(async(n,c,u)=>{if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.B)(u,1,1,o,s),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.m)(u[0]))return u[0].count(n.abortSignal);if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_6__/* .isArray */ .cy)(u[0])||(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_6__/* .isString */ .Kg)(u[0]))return u[0].length;if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.j)(u[0]))return u[0].length();throw new _executionError_js__WEBPACK_IMPORTED_MODULE_1__/* .ArcadeExecutionError */ .D$(o,_executionError_js__WEBPACK_IMPORTED_MODULE_1__/* .ExecutionErrorCodes */ .TX.InvalidParameter,s)}))})}


/***/ })

};
;