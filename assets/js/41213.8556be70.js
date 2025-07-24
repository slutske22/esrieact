"use strict";
exports.id = 41213;
exports.ids = [41213];
exports.modules = {

/***/ 41213:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  executeRelationshipQuery: () => (/* binding */ n),
  executeRelationshipQueryForCount: () => (/* binding */ u)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/utils.js
var utils = __webpack_require__(36321);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(38116);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(67488);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/operations/urlUtils.js
var urlUtils = __webpack_require__(49173);
;// ./node_modules/@arcgis/core/rest/query/operations/queryRelatedRecords.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function r(e,o){const r=e.toJSON();return r.objectIds&&(r.objectIds=r.objectIds.join(",")),r.orderByFields&&(r.orderByFields=r.orderByFields.join(",")),r.outFields&&!o?.returnCountOnly?r.outFields.includes("*")?r.outFields="*":r.outFields=r.outFields.join(","):delete r.outFields,r.outSR&&(r.outSR=(0,spatialReferenceUtils/* srToRESTValue */.YX)(r.outSR)),r.dynamicDataSource&&(r.layer=JSON.stringify({source:r.dynamicDataSource}),delete r.dynamicDataSource),r}async function s(e,t,o){const r=await a(e,t,o),s=r.data,n=s.geometryType,d=s.spatialReference,c={};for(const a of s.relatedRecordGroups){const e={fields:void 0,geometryType:n,spatialReference:d,hasZ:!!s.hasZ,hasM:!!s.hasM,features:a.relatedRecords};if(null!=a.objectId)c[a.objectId]=e;else for(const t of Object.keys(a))"relatedRecords"!==t&&(c[a[t]]=e)}return{...r,data:c}}async function queryRelatedRecords_n(e,t,o){const r=await a(e,t,o,{returnCountOnly:!0}),s=r.data,n={};for(const a of s.relatedRecordGroups)null!=a.objectId&&(n[a.objectId]=a.count);return{...r,data:n}}async function a(t,s,n={},a){const d=(0,urlUtils/* mapParameters */.z)({...t.query,f:"json",...a,...r(s,a)});return (0,request/* default */.A)(t.path+"/queryRelatedRecords",{...n,query:{...n.query,...d}})}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/FeatureSet.js
var FeatureSet = __webpack_require__(74704);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/RelationshipQuery.js
var RelationshipQuery = __webpack_require__(63498);
;// ./node_modules/@arcgis/core/rest/query/executeRelationshipQuery.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function n(e,n,u){n=RelationshipQuery["default"].from(n);const a=(0,utils/* parseUrl */.Dl)(e);return s(a,n,u).then((t=>{const r=t.data,e={};return Object.keys(r).forEach((t=>e[t]=FeatureSet/* default */.A.fromJSON(r[t]))),e}))}async function u(r,o,n){o=RelationshipQuery["default"].from(o);const u=(0,utils/* parseUrl */.Dl)(r);return queryRelatedRecords_n(u,o,{...n}).then((t=>t.data))}


/***/ })

};
;