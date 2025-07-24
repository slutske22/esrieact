"use strict";
exports.id = 91976;
exports.ids = [91976];
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
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function n(t=null,i){if(_config_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.geometryServiceUrl)return _config_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.geometryServiceUrl;if(!t)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("internal:geometry-service-url-not-configured","No geometryServiceUrl in configuration");let n;n="portal"in t?t.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.getDefault():t,await n.load({signal:i});const a=n.helperServices?.geometry?.url;if(!a)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("internal:geometry-service-url-not-configured","No geometryServiceUrl in configuration");return a}async function a(e,o,a=null,c){const l=await n(a,c),m=new _rest_support_ProjectParameters_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A({geometries:[e],outSpatialReference:o}),s=await (0,_rest_geometryService_project_js__WEBPACK_IMPORTED_MODULE_3__/* .project */ .C)(l,m,{signal:c});if(s&&Array.isArray(s)&&1===s.length)return s[0];throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("internal:geometry-service-projection-failed","Geometry projection failed on service")}


/***/ })

};
;