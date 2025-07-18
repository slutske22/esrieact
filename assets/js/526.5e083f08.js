"use strict";
exports.id = 526;
exports.ids = [526];
exports.modules = {

/***/ 50526:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createLabelFunction: () => (/* binding */ w)
/* harmony export */ });
/* unused harmony export formatField */
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(539);
/* harmony import */ var _core_sql_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(76859);
/* harmony import */ var _intl_date_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76459);
/* harmony import */ var _intl_number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46930);
/* harmony import */ var _domainUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92309);
/* harmony import */ var _fieldUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42453);
/* harmony import */ var _labelUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74639);
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28965);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const m=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getLogger("esri.layers.support.labelFormatUtils"),p={type:"simple",evaluate:()=>null},d={getAttribute:(e,r)=>e.field(r)};async function w(r,n,o){if(!r||!r.symbol||!n)return p;const a=r.where,l=(0,_labelUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .getLabelExpression */ .XJ)(r);let i;if("arcade"===l.type){const r=await (0,_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_7__/* .createLabelExpression */ .$I)(l.expression,o,n);if(null==r)return p;i={type:"arcade",evaluate(t,n){try{const e="attributes"in t?r.repurposeFeature(t):t;e.contextTimeZone=n??null;const o=r.evaluate({$view:{timeZone:n},$feature:e},r.services);if(null!=o)return o.toString()}catch(o){m.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("arcade-expression-error","Encountered an error when evaluating label expression for feature",{error:o,feature:t,expression:l}))}return null},needsHydrationToEvaluate:()=>null==(0,_labelUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .getSingleFieldArcadeExpression */ .tH)(l.expression)}}else i={type:"simple",evaluate:e=>l.expression.replaceAll(/{[^}]*}/g,(r=>{const t=r.slice(1,-1),o=n.get(t);if(!o)return r;let a=null;if("attributes"in e){e&&e.attributes&&(a=e.attributes[o.name])}else a=e.field(o.name);return null==a?"":g(a,o)}))};if(a){let r;try{r=await (0,_core_sql_js__WEBPACK_IMPORTED_MODULE_8__/* .parseWhereClause */ .G)(a,n)}catch(s){return m.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:a,error:s})),p}const o=i.evaluate;i.evaluate=(t,n)=>{const l="attributes"in t?void 0:d;try{if(r.testFeature(t,l))return o(t,n)}catch(s){m.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:a,feature:t,error:s}))}return null}}return i}function g(e,r){if(null==e)return"";const t=r.domain;if(t)if("codedValue"===t.type||"coded-value"===t.type){const r=e;for(const e of t.codedValues)if(e.code===r)return e.name}else if("range"===t.type){const{max:n,min:o}=(0,_domainUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .getDomainRange */ .A5)(r),a=+e;if(null!=o&&null!=n&&o<=a&&a<=n)return t.name}let u=e;return (0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isDateField */ .vE)(r)?u=(0,_intl_date_js__WEBPACK_IMPORTED_MODULE_2__/* .formatDate */ .Yq)(u,(0,_intl_date_js__WEBPACK_IMPORTED_MODULE_2__/* .convertDateFormatToIntlOptions */ .J2)("short-date")):(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isNumericField */ .WA)(r)&&(u=(0,_intl_number_js__WEBPACK_IMPORTED_MODULE_3__/* .formatNumber */ .ZV)(+u)),u||""}


/***/ })

};
;