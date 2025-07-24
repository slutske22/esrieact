"use strict";
exports.id = 97223;
exports.ids = [97223];
exports.modules = {

/***/ 68844:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93741);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80861);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26325);
/* harmony import */ var _GeographicTransformationStep_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45166);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var p;let c=p=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(r){super(r),this.steps=[]}getInverse(){const r=new p;for(let s=this.steps.length-1;s>=0;s--){const o=this.steps[s];r.steps.push(o.getInverse())}return r}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:[_GeographicTransformationStep_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A],nonNullable:!0})],c.prototype,"steps",void 0),c=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.geometry.operators.support.GeographicTransformation")],c);


/***/ }),

/***/ 45166:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93741);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80861);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26325);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var t;let i=t=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(r){super(r),this.isInverse=!1,this.wkt=null,this.wkid=null}getInverse(){return new t({isInverse:!this.isInverse,wkid:this.wkid,wkt:this.wkt})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],i.prototype,"isInverse",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],i.prototype,"wkt",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],i.prototype,"wkid",void 0),i=t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.geometry.operators.support.GeographicTransformationStep")],i);


/***/ }),

/***/ 97223:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTransformation: () => (/* binding */ u),
/* harmony export */   getTransformations: () => (/* binding */ f),
/* harmony export */   isLoaded: () => (/* binding */ p),
/* harmony export */   load: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _chunks_pe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89349);
/* harmony import */ var _GeographicTransformation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68844);
/* harmony import */ var _GeographicTransformationStep_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45166);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let s,i,a,c;function p(){return!!s&&(0,_chunks_pe_js__WEBPACK_IMPORTED_MODULE_0__.i)()}async function m(){if(!p()){const[t,e,r,p]=await Promise.all([__webpack_require__.e(/* import() */ 68164).then(__webpack_require__.bind(__webpack_require__, 68164)),__webpack_require__.e(/* import() */ 45262).then(__webpack_require__.bind(__webpack_require__, 45262)).then((n=>n.aK)).then((({queryTransformationList:n})=>n)),__webpack_require__.e(/* import() */ 45262).then(__webpack_require__.bind(__webpack_require__, 45262)).then((n=>n.aG)).then((({injectPe:n})=>n)),__webpack_require__.e(/* import() */ 65534).then(__webpack_require__.bind(__webpack_require__, 65534)),(0,_chunks_pe_js__WEBPACK_IMPORTED_MODULE_0__.l)()]);c=t.Envelope2D.constructEmpty(),s=e,r(_chunks_pe_js__WEBPACK_IMPORTED_MODULE_0__.p),i=p.fromExtent,a=p.fromSpatialReference}}function u(n,t,o=null){const e=o?i(o).asEnvelope2D():c,r=s(0,a(n),a(t),e,1,!0);return r.length>0?l(r[0]):null}function f(n,t,o=null){const e=o?i(o).asEnvelope2D():c;return s(0,a(n),a(t),e,0,!0).map((n=>l(n)))}function l(n){const t=new _GeographicTransformation_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A;for(let o=0;o<n.count();o++){const e=n.getStep(o);t.steps.push(new _GeographicTransformationStep_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A({wkid:e.getID(),isInverse:e.isInverted()}))}return t}


/***/ })

};
;