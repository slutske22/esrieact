"use strict";
exports.id = 1976;
exports.ids = [1976];
exports.modules = {

/***/ 91976:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGeometryServiceURL: () => (/* binding */ n),
/* harmony export */   projectGeometry: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21121);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98849);
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10282);
/* harmony import */ var _rest_geometryService_project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70727);
/* harmony import */ var _rest_support_ProjectParameters_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72387);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function n(o=null,i){if(_config_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.geometryServiceUrl)return _config_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.geometryServiceUrl;if(!o)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("internal:geometry-service-url-not-configured");let n;n="portal"in o?o.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.getDefault():o,await n.load({signal:i});const a=n.helperServices?.geometry?.url;if(!a)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("internal:geometry-service-url-not-configured");return a}async function a(r,t,a=null,l){const c=await n(a,l),s=new _rest_support_ProjectParameters_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A;s.geometries=[r],s.outSpatialReference=t;const m=await (0,_rest_geometryService_project_js__WEBPACK_IMPORTED_MODULE_3__/* .project */ .C)(c,s,{signal:l});if(m&&Array.isArray(m)&&1===m.length)return m[0];throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("internal:geometry-service-projection-failed")}


/***/ })

};
;