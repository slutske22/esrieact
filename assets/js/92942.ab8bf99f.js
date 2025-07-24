"use strict";
exports.id = 92942;
exports.ids = [92942];
exports.modules = {

/***/ 92942:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hydratedAdapter: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _Extent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8000);
/* harmony import */ var _Multipoint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67709);
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30214);
/* harmony import */ var _Polygon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65648);
/* harmony import */ var _Polyline_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38648);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const r={convertToGEGeometry:s,exportPoint:a,exportPolygon:c,exportPolyline:h,exportMultipoint:m,exportExtent:x};function s(e,n){if(null==n)return null;let t="cache"in n?n.cache._geVersion:void 0;return null==t&&(t=e.convertJSONToGeometry(n),"cache"in n&&(n.cache._geVersion=t)),t}function a(e,n,o){const i=e.hasZ(n),r=e.hasM(n),s=new _Point_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A({x:e.getPointX(n),y:e.getPointY(n),spatialReference:o});return i&&(s.z=e.getPointZ(n)),r&&(s.m=e.getPointM(n)),s.cache._geVersion=n,s}function c(e,n,t){const i=new _Polygon_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A({rings:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return i.cache._geVersion=n,i}function h(e,n,t){const o=new _Polyline_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A({paths:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return o.cache._geVersion=n,o}function m(e,t,o){const i=new _Multipoint_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A({hasZ:e.hasZ(t),hasM:e.hasM(t),points:e.exportPoints(t),spatialReference:o});return i.cache._geVersion=t,i}function x(n,t,o){const i=n.hasZ(t),r=n.hasM(t),s=new _Extent_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({xmin:n.getXMin(t),ymin:n.getYMin(t),xmax:n.getXMax(t),ymax:n.getYMax(t),spatialReference:o});if(i){const e=n.getZExtent(t);s.zmin=e.vmin,s.zmax=e.vmax}if(r){const e=n.getMExtent(t);s.mmin=e.vmin,s.mmax=e.vmax}return s.cache._geVersion=t,s}


/***/ })

};
;