"use strict";
exports.id = 11157;
exports.ids = [11157,62706];
exports.modules = {

/***/ 6371:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(t){let r,e,i=[],u=!1;function f(...f){return u&&r===this&&n(f,i)||(e=t.apply(this,f),r=this,i=f,u=!0),e}return f}function n(t,n){if(t.length!==n.length)return!1;for(let r=0;r<t.length;++r)if(t[r]!==n[r])return!1;return!0}


/***/ }),

/***/ 33604:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jd: () => (/* binding */ k),
/* harmony export */   Nk: () => (/* binding */ U),
/* harmony export */   OM: () => (/* binding */ S),
/* harmony export */   Oo: () => (/* binding */ F),
/* harmony export */   ix: () => (/* binding */ x),
/* harmony export */   yh: () => (/* binding */ C)
/* harmony export */ });
/* unused harmony exports formatDMS, formatDecimal, formatImperialArea, formatImperialLength, formatImperialRelativeLength, formatImperialRelativeVerticalLength, formatImperialVerticalLength, formatMetricArea, formatMetricLength, formatMetricRelativeLength, formatMetricRelativeVerticalLength, formatMetricVerticalLength, formatRelativeAngle, formatRelativeDecimal */
/* harmony import */ var _Cyclical_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17505);
/* harmony import */ var _quantityUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73569);
/* harmony import */ var _unitFormatUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26257);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function g(t,a,n,i=2,u="abbr"){return (0,_unitFormatUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .formatDecimal */ .zJ)(t,(0,_quantityUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .toUnit */ .kM)(a,n).value,n,i,u)}function L(t,e,a,n=2,i="abbr"){return (0,_unitFormatUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .formatRelativeDecimal */ .nD)(t,(0,_quantityUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .toUnit */ .kM)(e,a).value,a,n,i)}function d(t,r,e=2,n="abbr"){return (0,_unitFormatUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .formatMetricLength */ .Ee)(t,r.value,r.unit,e,n)}function M(t,r,e=2,a="abbr"){return (0,_unitFormatUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .formatMetricRelativeLength */ .Mm)(t,r.value,r.unit,e,a)}function w(t,r,e=2,a="abbr"){return (0,_unitFormatUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .formatMetricVerticalLength */ .W4)(t,r.value,r.unit,e,a)}function I(t,r,e=2,a="abbr"){return (0,_unitFormatUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .formatMetricRelativeVerticalLength */ .e_)(t,r.value,r.unit,e,a)}function R(t,r,e=2,a="abbr"){return (0,_unitFormatUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .formatMetricArea */ .zq)(t,r.value,r.unit,e,a)}function y(t,r,e=2,a="abbr"){return (0,_unitFormatUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .formatImperialLength */ .tr)(t,r.value,r.unit,e,a)}function V(t,r,e=2,a="abbr"){return (0,_unitFormatUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .formatImperialRelativeLength */ .J1)(t,r.value,r.unit,e,a)}function j(t,r,e=2,a="abbr"){return (0,_unitFormatUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .formatImperialVerticalLength */ .t_)(t,r.value,r.unit,e,a)}function D(t,r,e=2,a="abbr"){return (0,_unitFormatUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .formatImperialRelativeVerticalLength */ .LF)(t,r.value,r.unit,e,a)}function A(t,r,e=2,a="abbr"){return (0,_unitFormatUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .formatImperialArea */ .Sz)(t,r.value,r.unit,e,a)}function T(t){return p(t.value,t.unit)}function U(r,e,a,n=_Cyclical_js__WEBPACK_IMPORTED_MODULE_0__/* .cyclicalDegrees */ .ie,u=!0){return (0,_unitFormatUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .formatAngleDegrees */ .Me)(r.value,r.unit,r.rotationType,e,a,n,u)}function q(t,r,e){return h(t.value,t.unit,t.rotationType,r,e??void 0)}function x(t,r,e,a,n="abbr"){switch(a=a??2,e){case"imperial":return y(t,r,a,n);case"metric":return d(t,r,a,n);default:return g(t,r,e,a,n)}}function C(t,r,e,a=2,n="abbr"){switch(e){case"imperial":return V(t,r,a,n);case"metric":return M(t,r,a,n);default:return L(t,r,e,a,n)}}function F(t,r,e,a=2,n="abbr"){switch(e){case"imperial":return j(t,r,a,n);case"metric":return w(t,r,a,n);default:return g(t,r,e,a,n)}}function S(t,r,e,a=2,n="abbr"){switch(e){case"imperial":return D(t,r,a,n);case"metric":return I(t,r,a,n);default:return L(t,r,e,a,n)}}function k(t,r,e,a=2,n="abbr"){switch(e){case"imperial":return A(t,r,a,n);case"metric":return R(t,r,a,n);default:return g(t,r,e,a,n)}}


/***/ }),

/***/ 26257:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cq: () => (/* binding */ b),
/* harmony export */   Ee: () => (/* binding */ D),
/* harmony export */   J1: () => (/* binding */ h),
/* harmony export */   LF: () => (/* binding */ M),
/* harmony export */   Me: () => (/* binding */ w),
/* harmony export */   Mm: () => (/* binding */ x),
/* harmony export */   Sz: () => (/* binding */ j),
/* harmony export */   W4: () => (/* binding */ y),
/* harmony export */   e_: () => (/* binding */ F),
/* harmony export */   nD: () => (/* binding */ p),
/* harmony export */   t_: () => (/* binding */ B),
/* harmony export */   tr: () => (/* binding */ d),
/* harmony export */   v7: () => (/* binding */ T),
/* harmony export */   zJ: () => (/* binding */ g),
/* harmony export */   zq: () => (/* binding */ $)
/* harmony export */ });
/* unused harmony exports formatDMS, formatRelativeAngleDegrees */
/* harmony import */ var _ByteSizeUnit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84858);
/* harmony import */ var _Cyclical_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17505);
/* harmony import */ var _mathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92504);
/* harmony import */ var _quantityUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73569);
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96274);
/* harmony import */ var _unitUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92976);
/* harmony import */ var _intl_number_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46930);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function b(t,n,i){return t.units[n][i]}function g(t,n,i,r=2,o="abbr"){return`${(0,_intl_number_js__WEBPACK_IMPORTED_MODULE_6__/* .formatNumber */ .ZV)(n,{minimumFractionDigits:r,maximumFractionDigits:r,signDisplay:n>0?"never":"exceptZero"})} ${b(t,i,o)}`}function p(t,n,i,r=2,o="abbr"){return`${(0,_intl_number_js__WEBPACK_IMPORTED_MODULE_6__/* .formatNumber */ .ZV)(n,{minimumFractionDigits:r,maximumFractionDigits:r,signDisplay:"exceptZero"})} ${b(t,i,o)}`}function D(t,n,i,r=2,o="abbr"){const u=(0,_unitUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .adaptiveMetricLengthUnit */ .x0)(n,i);return g(t,(0,_unitUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .convertUnit */ .oU)(n,i,u),u,r,o)}function x(t,n,i,r=2,o="abbr"){const u=(0,_unitUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .adaptiveMetricLengthUnit */ .x0)(n,i);return p(t,(0,_unitUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .convertUnit */ .oU)(n,i,u),u,r,o)}function y(t,n,i,r=2,o="abbr"){const e=(0,_unitUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .adaptiveMetricVerticalLengthUnit */ .x$)(n,i);return g(t,(0,_unitUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .convertUnit */ .oU)(n,i,e),e,r,o)}function F(t,n,i,r=2,o="abbr"){const e=(0,_unitUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .adaptiveMetricVerticalLengthUnit */ .x$)(n,i);return p(t,(0,_unitUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .convertUnit */ .oU)(n,i,e),e,r,o)}function d(t,n,i,r=2,o="abbr"){const e=(0,_unitUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .adaptiveImperialLengthUnit */ .OU)(n,i);return g(t,(0,_unitUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .convertUnit */ .oU)(n,i,e),e,r,o)}function h(t,n,i,r=2,o="abbr"){const e=(0,_unitUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .adaptiveImperialLengthUnit */ .OU)(n,i);return p(t,(0,_unitUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .convertUnit */ .oU)(n,i,e),e,r,o)}function B(t,n,i,r=2,o="abbr"){const e=(0,_unitUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .adaptiveImperialVerticalLengthUnit */ .y7)(n,i);return g(t,(0,_unitUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .convertUnit */ .oU)(n,i,e),e,r,o)}function M(t,n,i,r=2,o="abbr"){const e=(0,_unitUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .adaptiveImperialVerticalLengthUnit */ .y7)(n,i);return p(t,(0,_unitUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .convertUnit */ .oU)(n,i,e),e,r,o)}function $(t,n,i,r=2,o="abbr"){const e=(0,_unitUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .adaptiveMetricAreaUnit */ .wv)(n,i);return g(t,(0,_unitUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .convertUnit */ .oU)(n,i,e),e,r,o)}function j(t,n,i,r=2,o="abbr"){const e=(0,_unitUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .adaptiveImperialAreaUnit */ .TL)(n,i);return g(t,(0,_unitUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .convertUnit */ .oU)(n,i,e),e,r,o)}function S(t,n,i=2){let r=s(t,n,"degrees"),o=r-Math.floor(r);r-=o,o*=60;let e=o-Math.floor(o);return o-=e,e*=60,`${r.toFixed()}° ${o.toFixed()}' ${e.toFixed(i)}"`}const U=(t,n)=>({style:"unit",unitDisplay:"narrow",unit:"degree",maximumFractionDigits:n,minimumFractionDigits:n,signDisplay:t>0?"never":"exceptZero"});function w(t,i,o,e,u,c=_Cyclical_js__WEBPACK_IMPORTED_MODULE_1__/* .cyclicalDegrees */ .ie,a=!0){let m=c.normalize((0,_quantityUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .convertRotationType */ .g2)((0,_unitUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .convertUnit */ .oU)(t,i,"degrees"),o,e),0,a);const f=U(m,u??2);return m=I(m,f),(0,_intl_number_js__WEBPACK_IMPORTED_MODULE_6__/* .formatNumber */ .ZV)(m,f)}function Z(t,n,i,r,o=2){i!==r&&(t=-t);const e={style:"unit",unitDisplay:"narrow",unit:"degree",maximumFractionDigits:o,minimumFractionDigits:o,signDisplay:"exceptZero"};let u=s(t,n,"degrees")%360;return u=I(u,e),l(u,e)}const z=new Map;function I(t,n){const i=JSON.stringify(n);let r=z.get(i);return r||(r=new Intl.NumberFormat("en-US",n),z.set(i,r)),/^[-+]?360\.?0*°?$/.test(r.format(t))?0:t}const O=["B","kB","MB","GB","TB"];function T(n,r){let e=0===(r=Math.round(r))?0:Math.floor(Math.log(r)/Math.log(_ByteSizeUnit_js__WEBPACK_IMPORTED_MODULE_0__/* .ByteSizeUnit */ .u.KILOBYTES));e=(0,_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .clamp */ .qE)(e,0,O.length-1);const s=(0,_intl_number_js__WEBPACK_IMPORTED_MODULE_6__/* .formatNumber */ .ZV)(r/_ByteSizeUnit_js__WEBPACK_IMPORTED_MODULE_0__/* .ByteSizeUnit */ .u.KILOBYTES**e,{maximumFractionDigits:2});return (0,_string_js__WEBPACK_IMPORTED_MODULE_4__/* .replace */ .HC)(n.units.bytes[O[e]],{fileSize:s})}


/***/ }),

/***/ 88204:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hh: () => (/* binding */ E),
/* harmony export */   LM: () => (/* binding */ M),
/* harmony export */   Nf: () => (/* binding */ v),
/* harmony export */   TH: () => (/* binding */ p),
/* harmony export */   U_: () => (/* binding */ P),
/* harmony export */   ht: () => (/* binding */ G),
/* harmony export */   mT: () => (/* binding */ g),
/* harmony export */   o6: () => (/* binding */ w),
/* harmony export */   qn: () => (/* binding */ T),
/* harmony export */   s1: () => (/* binding */ _),
/* harmony export */   ts: () => (/* binding */ m),
/* harmony export */   yy: () => (/* binding */ R)
/* harmony export */ });
/* unused harmony export isSupported */
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/* harmony import */ var _chunks_pe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47063);
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97066);
/* harmony import */ var _SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78983);
/* harmony import */ var _intl_number_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46930);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function _(){return (0,_chunks_pe_js__WEBPACK_IMPORTED_MODULE_1__.i)()}function S(){return s()}function E(){return (0,_chunks_pe_js__WEBPACK_IMPORTED_MODULE_1__.l)()}function w(n,e){const t=k(e),o=n.replaceAll(/[\u00B0\u00BA]/g,"^").replaceAll("′","'").replaceAll("″",'"'),i=[];return _chunks_pe_js__WEBPACK_IMPORTED_MODULE_1__.b.dmsToGeog(t,1,[o],i)?new _Point_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(i[0][0],i[0][1],e||_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.WGS84):null}function g(n){return n&&_()?(0,_intl_number_js__WEBPACK_IMPORTED_MODULE_4__/* .parseNumber */ .$J)(n)??w(`0° 0' 0" N | ${n}`)?.longitude??w(`0 N | ${n}`)?.longitude??null:null}function m(n){return n&&_()?(0,_intl_number_js__WEBPACK_IMPORTED_MODULE_4__/* .parseNumber */ .$J)(n)??w(`${n} | 0° 0' 0" E`)?.latitude??w(`${n} | 0 E`)?.latitude??null:null}function T(n,e,t){const r=[],o=A(t);if(-1===o)return console.warn(`invalid conversionMode: ${t}`),null;const i=k(e);return _chunks_pe_js__WEBPACK_IMPORTED_MODULE_1__.e.mgrsToGeogExtended(i,1,[n],o,r)?new _Point_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(r[0][0],r[0][1],e||_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.WGS84):null}function P(n,e){const t=[];!e&&/\(.+27/.test(n)&&(e=_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.GCS_NAD_1927);const r=k(e);return _chunks_pe_js__WEBPACK_IMPORTED_MODULE_1__.c.usngToGeog(r,1,[n],t)?new _Point_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(t[0][0],t[0][1],e||_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.WGS84):null}function G(n,e,t){const r=[],o=D(t);if(-1===o)return console.warn(`invalid conversionMode: ${t}`),null;const i=k(e);return _chunks_pe_js__WEBPACK_IMPORTED_MODULE_1__.d.utmToGeog(i,1,[n],o,r)?new _Point_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(r[0][0],r[0][1],e||_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.WGS84):null}function p(n,e,t=0){const o=[[n.x,n.y]],i=[],l=k(n.spatialReference);let u=0;switch(e){case"dd":u=_chunks_pe_js__WEBPACK_IMPORTED_MODULE_1__.b.geogToDd(l,1,o,t,i);break;case"ddm":u=_chunks_pe_js__WEBPACK_IMPORTED_MODULE_1__.b.geogToDdm(l,1,o,t,i);break;case"dms":u=_chunks_pe_js__WEBPACK_IMPORTED_MODULE_1__.b.geogToDms(l,1,o,t,i);break;default:return console.warn(`invalid format: ${e}`),null}return u?i[0]:null}function M(n,e,t=0,r=!1){const o=[[n.x,n.y]],i=[],l=k(n.spatialReference);let u=A(e);if(-1===u)return console.warn(`invalid conversionMode: ${e}`),null;r&&(u|=_chunks_pe_js__WEBPACK_IMPORTED_MODULE_1__.e.PE_MGRS_ADD_SPACES);return _chunks_pe_js__WEBPACK_IMPORTED_MODULE_1__.e.geogToMgrsExtended(l,1,o,t,!1,u,i)?i[0]:null}function v(n,e=0,t=!1){const r=[[n.x,n.y]],o=[],i=k(n.spatialReference);return _chunks_pe_js__WEBPACK_IMPORTED_MODULE_1__.c.geogToUsng(i,1,r,e,!1,t,o)?o[0]:null}function R(n,e,t=!1){const r=[[n.x,n.y]],o=[],i=k(n.spatialReference);let l=D(e);if(-1===l)return console.warn(`invalid conversionMode: ${e}`),null;t&&(l|=_chunks_pe_js__WEBPACK_IMPORTED_MODULE_1__.d.PE_UTM_OPTS_ADD_SPACES);return _chunks_pe_js__WEBPACK_IMPORTED_MODULE_1__.d.geogToUtm(i,1,r,l,o)?o[0]:null}function k(e){if(e??=_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.WGS84,e.wkid){const t=_chunks_pe_js__WEBPACK_IMPORTED_MODULE_1__.P.geogcs(e.wkid);if(!t)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("coordinate-formatter:invalid-spatial-reference","wkid is not valid");return t}const t=e.wkt2??e.wkt;if(t){const e=_chunks_pe_js__WEBPACK_IMPORTED_MODULE_1__.P.fromString(_chunks_pe_js__WEBPACK_IMPORTED_MODULE_1__.a.PE_TYPE_GEOGCS,t);if(!e)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("coordinate-formatter:invalid-spatial-reference","wkt is not valid");return e}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("coordinate-formatter:invalid-spatial-reference","wkid and wkt are missing")}function A(n){switch(n){case"automatic":return _chunks_pe_js__WEBPACK_IMPORTED_MODULE_1__.e.PE_MGRS_STYLE_AUTO;case"new-180-in-zone-01":return _chunks_pe_js__WEBPACK_IMPORTED_MODULE_1__.e.PE_MGRS_STYLE_NEW|_chunks_pe_js__WEBPACK_IMPORTED_MODULE_1__.e.PE_MGRS_180_ZONE_1_PLUS;case"new-180-in-zone-60":return _chunks_pe_js__WEBPACK_IMPORTED_MODULE_1__.e.PE_MGRS_STYLE_NEW;case"old-180-in-zone-01":return _chunks_pe_js__WEBPACK_IMPORTED_MODULE_1__.e.PE_MGRS_STYLE_OLD|_chunks_pe_js__WEBPACK_IMPORTED_MODULE_1__.e.PE_MGRS_180_ZONE_1_PLUS;case"old-180-in-zone-60":return _chunks_pe_js__WEBPACK_IMPORTED_MODULE_1__.e.PE_MGRS_STYLE_OLD;default:return-1}}function D(n){switch(n){case"latitude-band-indicators":return _chunks_pe_js__WEBPACK_IMPORTED_MODULE_1__.d.PE_UTM_OPTS_NONE;case"north-south-indicators":return _chunks_pe_js__WEBPACK_IMPORTED_MODULE_1__.d.PE_UTM_OPTS_NS;default:return-1}}


/***/ }),

/***/ 97557:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24793);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var c;let i=class extends(_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.ClonableMixin(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)){static{c=this}constructor(e){super(e),this.type="georeferenced",this.origin=null}static{this.absolute=new c}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__/* .enumeration */ .e)({georeferenced:"georeferenced"},{readOnly:!0})],i.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[Number],nonNullable:!1,json:{write:!0}})],i.prototype,"origin",void 0),i=c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.geometry.support.MeshGeoreferencedVertexSpace")],i);


/***/ }),

/***/ 99218:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24793);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63863);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58359);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let i=class extends(_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.ClonableMixin(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)){constructor(o){super(o),this.type="local",this.origin=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__/* .create */ .vt)()}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__/* .enumeration */ .e)({local:"local"},{readOnly:!0})],i.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],i.prototype,"origin",void 0),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.geometry.support.MeshLocalVertexSpace")],i);


/***/ }),

/***/ 1114:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CK: () => (/* binding */ c),
/* harmony export */   E9: () => (/* binding */ o),
/* harmony export */   Hq: () => (/* binding */ t),
/* harmony export */   MW: () => (/* binding */ u),
/* harmony export */   TE: () => (/* binding */ l),
/* harmony export */   yJ: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24121);
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97066);
/* harmony import */ var _MeshGeoreferencedVertexSpace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97557);
/* harmony import */ var _MeshLocalVertexSpace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99218);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function o(e){return null==e.origin}function t(e){return null!=e.origin}function c(e){return t(e.vertexSpace)}function u(e,r){if(!t(e))return null;const[i,o,c]=e.origin;return new _Point_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A({x:i,y:o,z:c,spatialReference:r})}function l(e,n){const{x:o,y:t,z:c,spatialReference:u}=e,l=[o,t,c??0];return"local"===(n?.vertexSpace??f(u))?new _MeshLocalVertexSpace_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A({origin:l}):new _MeshGeoreferencedVertexSpace_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A({origin:l})}function f(e){return e.isGeographic||e.isWebMercator?"local":"georeferenced"}function a(n,r){return n.type===r.type&&(n.origin===r.origin||null!=n.origin&&null!=r.origin&&(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.q)(n.origin,r.origin))}


/***/ }),

/***/ 47228:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92976);
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10282);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(e){const n="metric";if(null==e)return n;const i=e.map,l=(i&&"portalItem"in i?i.portalItem?.portal:null)??_portal_Portal_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getDefault();switch(l.user?.units??l.units){case n:return n;case"english":return"imperial"}return (0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getDefaultUnitSystem */ .jM)(e.spatialReference)??n}


/***/ }),

/***/ 22126:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25707);
/* harmony import */ var _core_handleUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20464);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(89882);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73446);
/* harmony import */ var _core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60704);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59646);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58359);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97066);
/* harmony import */ var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42238);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78983);
/* harmony import */ var _symbols_CIMSymbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(54394);
/* harmony import */ var _symbols_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(40241);
/* harmony import */ var _symbols_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23369);
/* harmony import */ var _symbols_cim_enums_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(63643);
/* harmony import */ var _interactive_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(97847);
/* harmony import */ var _interactive_snapping_Settings_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1381);
/* harmony import */ var _interactive_snapping_SnappingVisualizer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(86548);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class d extends _interactive_snapping_SnappingVisualizer_js__WEBPACK_IMPORTED_MODULE_15__/* .SnappingVisualizer */ .b{constructor(e){super(),this._graphicsLayer=e,this._symbolPairingsByType=new Map}visualizeIntersectionPoint(e,t){return this._visualizeSnappingIndicator(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A({x:e.intersectionPoint[0],y:e.intersectionPoint[1],spatialReference:t.spatialReference}),this._getOrCreateSymbol("intersectionPoint",t.view.effectiveTheme.accentColor))}visualizePoint(e,t){return this._visualizeSnappingIndicator(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A({x:e.point[0],y:e.point[1],spatialReference:t.spatialReference}),this._getOrCreateSymbol("point",t.view.effectiveTheme.accentColor))}visualizeLine(e,t){return this._visualizeSnappingIndicator(new _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A({paths:[[[...e.lineStart],[...e.lineEnd]]],spatialReference:(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__/* .ensureClass */ .PZ)(_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,t.spatialReference)}),this._getOrCreateSymbol("line",t.view.effectiveTheme.accentColor))}visualizeParallelSign(e,t){return this._visualizeSnappingIndicator(new _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A({paths:[[[...e.lineStart],[...e.lineEnd]]],spatialReference:(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__/* .ensureClass */ .PZ)(_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,t.spatialReference)}),this._getOrCreateSymbol("parallelSign",t.view.effectiveTheme.accentColor))}visualizeRightAngleQuad(e,t){const r=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),s=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),p=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__/* .create */ .vt)();(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_3__/* .subtract */ .Re)(r,(0,_interactive_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_13__/* .asVec2 */ .Xz)(e.centerVertex),(0,_interactive_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_13__/* .asVec2 */ .Xz)(e.previousVertex)),(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_3__/* .subtract */ .Re)(s,(0,_interactive_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_13__/* .asVec2 */ .Xz)(e.nextVertex),(0,_interactive_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_13__/* .asVec2 */ .Xz)(e.previousVertex)),(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_3__/* .cross */ .$A)(p,r,s);const y=`rightAngleQuad${p[2]<0?45:225}`;return this._visualizeSnappingIndicator(new _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A({paths:[[[...e.previousVertex],[...e.centerVertex],[...e.nextVertex]]],spatialReference:(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__/* .ensureClass */ .PZ)(_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,t.spatialReference)}),this._getOrCreateSymbol(y,t.view.effectiveTheme.accentColor))}_visualizeSnappingIndicator(r,i){const o=new _Graphic_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({geometry:r,symbol:i});return this._graphicsLayer.add(o),(0,_core_handleUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .makeHandle */ .hA)((()=>{this._graphicsLayer.remove(o)}))}_getOrCreateSymbol(e,t){const r=this._symbolPairingsByType;return r.get(e)?.color!==t&&r.set(e,{color:t,symbol:M(e,t)}),r.get(e).symbol}}function M(e,t){const i=[...t.toRgb(),255*t.a];switch(e){case"point":return new _symbols_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A({outline:{width:.5,color:[0,0,0,1]},size:10,color:t});case"intersectionPoint":return new _symbols_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A({outline:new _symbols_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A({width:1.5,color:t}),size:15,color:[0,0,0,0]});case"line":return new _symbols_CIMSymbol_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:_symbols_cim_enums_js__WEBPACK_IMPORTED_MODULE_12__/* .LineCapStyle */ .uT.Butt,joinStyle:_symbols_cim_enums_js__WEBPACK_IMPORTED_MODULE_12__/* .LineJoinStyle */ .wd.Round,miterLimit:10,width:(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_16__/* .px2pt */ .PN)(_interactive_snapping_Settings_js__WEBPACK_IMPORTED_MODULE_14__/* .defaults */ .N.lineHintWidthTarget),color:i}]}}});case"parallelSign":return new _symbols_CIMSymbol_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:-1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,1.5],[7,1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:i}]}}],scaleSymbolsProportionally:!0,respectFrame:!0},{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,-1.5],[7,-1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:i}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}});case"rightAngleQuad45":case"rightAngleQuad225":{const o="rightAngleQuad45"===e?45:225;return new _symbols_CIMSymbol_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:.5,y:.5,z:0},anchorPointUnits:"Relative",size:(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_16__/* .px2pt */ .PN)(_interactive_snapping_Settings_js__WEBPACK_IMPORTED_MODULE_14__/* .defaults */ .N.rightAngleHintSize),rotation:o,markerPlacement:{type:"CIMMarkerPlacementOnVertices",placePerPart:!0,angleToLine:!0,placeOnEndPoints:!1},frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{paths:[[[5,-5],[-5,-5],[-5,5],[5,5],[5,-5]]]},symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_16__/* .px2pt */ .PN)(_interactive_snapping_Settings_js__WEBPACK_IMPORTED_MODULE_14__/* .defaults */ .N.rightAngleHintOutlineSize),color:i},{type:"CIMSolidFill",enable:!0,color:[...t.toRgb(),255*t.a*.4]}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}})}}}


/***/ }),

/***/ 74056:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17306);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let e=class extends _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.EventedAccessor{constructor(r){super(r),this.tracking=!1,this.displaying=!1,this.error=null,this.isDraped=!1}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({constructOnly:!0})],e.prototype,"graphic",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],e.prototype,"tracking",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],e.prototype,"displaying",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],e.prototype,"error",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],e.prototype,"isDraped",void 0),e=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.views.3d.layers.graphics.GraphicState")],e);


/***/ }),

/***/ 62706:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ E)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Evented.js
var Evented = __webpack_require__(17306);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(85251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/GraphicsLayer.js
var GraphicsLayer = __webpack_require__(31828);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleFillSymbol.js
var SimpleFillSymbol = __webpack_require__(68882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleLineSymbol.js + 2 modules
var SimpleLineSymbol = __webpack_require__(40241);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleMarkerSymbol.js
var SimpleMarkerSymbol = __webpack_require__(23369);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/draw/support/drawUtils.js
var drawUtils = __webpack_require__(18578);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/draw/support/HighlightHelper.js
var HighlightHelper = __webpack_require__(91933);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/draw/support/layerUtils.js
var layerUtils = __webpack_require__(7407);
;// ../node_modules/@arcgis/core/views/draw/support/input/GraphicMoverEvents.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class GraphicMoverEvents_t{constructor(t,i,s,h,e){this.graphic=t,this.index=i,this.x=s,this.y=h,this.viewEvent=e,this.type="graphic-click"}}class GraphicMoverEvents_i{constructor(t,i,s,h,e){this.graphic=t,this.index=i,this.x=s,this.y=h,this.viewEvent=e,this.type="graphic-double-click"}}class GraphicMoverEvents_s{constructor(t,i,s,h,e,r,c,a,n,p){this.graphic=t,this.allGraphics=i,this.index=s,this.x=h,this.y=e,this.dx=r,this.dy=c,this.totalDx=a,this.totalDy=n,this.viewEvent=p,this.defaultPrevented=!1,this.type="graphic-move-start"}preventDefault(){this.defaultPrevented=!0}}class GraphicMoverEvents_h{constructor(t,i,s,h,e,r,c,a,n,p){this.graphic=t,this.allGraphics=i,this.index=s,this.x=h,this.y=e,this.dx=r,this.dy=c,this.totalDx=a,this.totalDy=n,this.viewEvent=p,this.defaultPrevented=!1,this.type="graphic-move"}preventDefault(){this.defaultPrevented=!0}}class e{constructor(t,i,s,h,e,r,c,a,n,p){this.graphic=t,this.allGraphics=i,this.index=s,this.x=h,this.y=e,this.dx=r,this.dy=c,this.totalDx=a,this.totalDy=n,this.viewEvent=p,this.defaultPrevented=!1,this.type="graphic-move-stop"}preventDefault(){this.defaultPrevented=!0}}class GraphicMoverEvents_r{constructor(t,i,s,h,e){this.graphic=t,this.index=i,this.x=s,this.y=h,this.viewEvent=e,this.type="graphic-pointer-over"}}class c{constructor(t,i,s,h,e){this.graphic=t,this.index=i,this.x=s,this.y=h,this.viewEvent=e,this.type="graphic-pointer-out"}}class a{constructor(t,i,s,h,e){this.graphic=t,this.index=i,this.x=s,this.y=h,this.viewEvent=e,this.type="graphic-pointer-down"}}class n{constructor(t,i,s,h,e){this.graphic=t,this.index=i,this.x=s,this.y=h,this.viewEvent=e,this.type="graphic-pointer-up"}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/input/InputManager.js + 2 modules
var InputManager = __webpack_require__(54874);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/GraphicManipulator.js
var GraphicManipulator = __webpack_require__(285);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/support/screenUtils.js
var screenUtils = __webpack_require__(30687);
;// ../node_modules/@arcgis/core/views/draw/support/GraphicMover.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const M="indicator-symbols";let E=class extends Evented/* default */.A.EventedAccessor{constructor(i){super(i),this._activeGraphic=null,this._dragEvent=null,this._hoverGraphic=null,this._indicators=[],this._initialDragGeometry=null,this._manipulators=[],this._layerViews=null,this.type="graphic-mover",this.callbacks={onGraphicClick(){},onGraphicDoubleClick(){},onGraphicMoveStart(){},onGraphicMove(){},onGraphicMoveStop(){},onGraphicPointerOver(){},onGraphicPointerOut(){},onGraphicPointerDown(){},onGraphicPointerUp(){}},this.enableMoveAllGraphics=!1,this.graphics=[],this.highlightName=null,this.highlightsEnabled=!1,this.indicatorsEnabled=!1,this._defaultLayer=new GraphicsLayer/* default */.A({listMode:"hide",internal:!0,title:"GraphicMover highlight layer"}),this.layer=this._defaultLayer,this.view=null}initialize(){(0,layerUtils/* addUniqueLayer */.Y3)(this.view,this.layer),this._highlightHelper=new HighlightHelper/* default */.A({view:this.view}),this.refresh(),this.addHandles([(0,reactiveUtils/* watch */.wB)((()=>this.graphics.length),(()=>this.refresh())),(0,reactiveUtils/* when */.z7)((()=>this.view?.ready),(()=>{this.addHandles([this.view.on("immediate-click",(i=>this._clickHandler(i)),InputManager/* ViewEventPriorities */.o.TOOL),this.view.on("double-click",(i=>this._doubleClickHandler(i)),InputManager/* ViewEventPriorities */.o.TOOL),this.view.on("pointer-down",(i=>this._pointerDownHandler(i)),InputManager/* ViewEventPriorities */.o.TOOL),this.view.on("pointer-move",(i=>this._pointerMoveHandler(i)),InputManager/* ViewEventPriorities */.o.TOOL),this.view.on("pointer-up",(i=>this._pointerUpHandler(i)),InputManager/* ViewEventPriorities */.o.TOOL),this.view.on("drag",(i=>this._dragHandler(i)),InputManager/* ViewEventPriorities */.o.TOOL),this.view.on("key-down",(i=>this._keyDownHandler(i)),InputManager/* ViewEventPriorities */.o.TOOL)])}),{once:!0,initial:!0}),(0,reactiveUtils/* watch */.wB)((()=>this.view),(i=>{this._highlightHelper.removeAll(),this._highlightHelper.view=i})),(0,reactiveUtils/* watch */.wB)((()=>[this.highlightsEnabled,this.highlightName]),(()=>{this._highlightHelper?.removeAll(),this._setUpHighlights()}))])}destroy(){this._removeIndicators(),this.view.map?.remove(this.layer),this._defaultLayer.destroy(),this.reset(),this._manipulators.forEach((i=>i.destroy())),this._manipulators=null}get state(){const i=this.view.ready,t=this.graphics.length>0,e=this._activeGraphic;return i&&t?e?"moving":"active":i?"ready":"disabled"}refresh(){this.reset(),this._setup()}reset(){this._activeGraphic=null,this._hoverGraphic=null,this._dragEvent=null,this._highlightHelper.removeAll()}updateGeometry(i,t){const e=this.graphics[i];e&&(e.set("geometry",t),this._setUpIndicators())}_setup(){this._setUpHighlights(),this._setUpIndicators(),this._setUpManipulators(),this._syncLayerViews()}_clickHandler(i){const t=this._findTargetGraphic((0,screenUtils/* createScreenPointFromEvent */.ZV)(i));if(t){const e=new GraphicMoverEvents_t(t,this.graphics.indexOf(t),i.x,i.y,i);this.emit("graphic-click",e),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(e)}}_doubleClickHandler(i){const t=this._findTargetGraphic((0,screenUtils/* createScreenPointFromEvent */.ZV)(i));if(t){const e=new GraphicMoverEvents_i(t,this.graphics.indexOf(t),i.x,i.y,i);this.emit("graphic-double-click",e),this.callbacks.onGraphicDoubleClick&&this.callbacks.onGraphicDoubleClick(e)}}_pointerDownHandler(i){const t=this._findTargetGraphic((0,screenUtils/* createScreenPointFromEvent */.ZV)(i));if(t){this._activeGraphic=t;const{x:e,y:s}=i,r=new a(t,this.graphics.indexOf(t),e,s,i);this.emit("graphic-pointer-down",r),this.callbacks.onGraphicPointerDown&&this.callbacks.onGraphicPointerDown(r)}else this._activeGraphic=null}_pointerUpHandler(i){if(this._activeGraphic){const{x:t,y:e}=i,s=this.graphics.indexOf(this._activeGraphic),r=new n(this._activeGraphic,s,t,e,i);this.emit("graphic-pointer-up",r),this.callbacks.onGraphicPointerUp&&this.callbacks.onGraphicPointerUp(r)}}_pointerMoveHandler(i){if(this._dragEvent)return;const t=this._findTargetGraphic((0,screenUtils/* createScreenPointFromEvent */.ZV)(i));if(t){const{x:e,y:s}=i;if(this._hoverGraphic){if(this._hoverGraphic===t)return;const r=this.graphics.indexOf(this._hoverGraphic),h=new c(this.graphics[r],r,e,s,i);this._hoverGraphic=null,this.emit("graphic-pointer-out",h),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(h)}const r=this.graphics.indexOf(t),h=new GraphicMoverEvents_r(t,r,e,s,i);return this._hoverGraphic=t,this.emit("graphic-pointer-over",h),void(this.callbacks.onGraphicPointerOver&&this.callbacks.onGraphicPointerOver(h))}if(this._hoverGraphic){const{x:t,y:e}=i,s=this.graphics.indexOf(this._hoverGraphic),r=new c(this.graphics[s],s,t,e,i);this._hoverGraphic=null,this.emit("graphic-pointer-out",r),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(r)}}_dragHandler(i){if("start"!==i.action&&!this._dragEvent||!this._activeGraphic?.geometry)return;"start"===i.action&&this._removeIndicators(),i.stopPropagation();const{action:t,x:s,y:r}=i,h=this.graphics.indexOf(this._activeGraphic),a=this._dragEvent?s-this._dragEvent.x:0,o=this._dragEvent?r-this._dragEvent.y:0,c=s-i.origin.x,n=r-i.origin.y,l="start"===t?this._activeGraphic.geometry:this._initialDragGeometry,d=(0,drawUtils/* cloneMove */.lR)(l,c,n,this.view);if(this._activeGraphic.geometry=d,this.enableMoveAllGraphics&&this.graphics.forEach((i=>{i!==this._activeGraphic&&(i.geometry=(0,drawUtils/* cloneMove */.lR)(i.geometry,a,o,this.view))})),this._dragEvent=i,"start"===t){this._initialDragGeometry=(0,lang/* clone */.o8)(l);const t=new GraphicMoverEvents_s(this._activeGraphic,this.graphics,h,s,r,a,o,c,n,i);this.emit("graphic-move-start",t),this.callbacks.onGraphicMoveStart&&this.callbacks.onGraphicMoveStart(t),t.defaultPrevented&&this._activeGraphic.set("geometry",l)}else if("update"===t){const t=new GraphicMoverEvents_h(this._activeGraphic,this.graphics,h,s,r,a,o,c,n,i);this.emit("graphic-move",t),this.callbacks.onGraphicMove&&this.callbacks.onGraphicMove(t),t.defaultPrevented&&(this._activeGraphic.geometry=l)}else{const t=new e(this._activeGraphic,this.graphics,h,s,r,a,o,c,n,i);this._dragEvent=null,this._activeGraphic=null,this._setUpIndicators(),this.emit("graphic-move-stop",t),this.callbacks.onGraphicMoveStop&&this.callbacks.onGraphicMoveStop(t),t.defaultPrevented&&(this.graphics[h].set("geometry",this._initialDragGeometry),this._setUpIndicators()),this._initialDragGeometry=null}}_keyDownHandler(i){"a"!==i.key&&"d"!==i.key&&"n"!==i.key||"moving"!==this.state||i.stopPropagation()}_findTargetGraphic(i){const t=this.view.toMap(i),e=this.graphics;let s=null,r=Number.MAX_VALUE;this._syncLayerViews();const h=this._layerViews.flatMap((i=>"graphicsViews"in i?Array.from(i.graphicsViews(),(i=>i.hitTest(t))).flat():i.graphicsView.hitTest(t))).filter((i=>e.includes(i))).sort(((i,t)=>e.indexOf(i)-e.indexOf(t)));return h.length?h[0]:(this._manipulators.forEach((t=>{const e=t.intersectionDistance(i);null!=e&&e<r&&(r=e,s=t.graphic)})),s)}_syncLayerViews(){this._layerViews=[];const i=new Set;for(const t of this.graphics){const e=(0,layerUtils/* findLayerView */["in"])(this.view,t.layer);e&&i.add(e)}this._layerViews=[...i]}_setUpManipulators(){const{graphics:i,view:t}=this;this._manipulators.forEach((i=>i.destroy())),this._manipulators=i.length?i.map((i=>new GraphicManipulator/* GraphicManipulator */.l({graphic:i,view:t}))):[]}_setUpHighlights(){this.highlightsEnabled&&this.graphics.length&&this._highlightHelper.add(this.graphics,this.highlightName)}_setUpIndicators(){if(this._removeIndicators(),this.indicatorsEnabled){for(const i of this.graphics){const t=i.clone();t.symbol=U(i),this._indicators.push(t),this.addHandles((0,reactiveUtils/* watch */.wB)((()=>i.symbol),(()=>this._setUpIndicators())),M)}this.layer.addMany(this._indicators)}}_removeIndicators(){this.removeHandles(M),this._indicators.length&&(this.layer.removeMany(this._indicators),this._indicators.forEach((i=>i.destroy())),this._indicators=[])}};function U(i){const t=12;if(null==i.symbol)return null;switch(i.symbol.type){case"cim":return new SimpleMarkerSymbol/* default */.A({style:"circle",size:t,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}});case"picture-marker":{const{xoffset:t,yoffset:e,height:s,width:r}=i.symbol,h=s===r?r:Math.max(s,r);return new SimpleMarkerSymbol/* default */.A({xoffset:t,yoffset:e,size:h,style:"square",color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}case"simple-marker":{const{xoffset:t,yoffset:e,size:s,style:r}=i.symbol;return new SimpleMarkerSymbol/* default */.A({xoffset:t,yoffset:e,style:"circle"===r?"circle":"square",size:s+2,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}case"simple-fill":return new SimpleFillSymbol/* default */.A({color:[0,0,0,0],outline:{style:"dash",color:[255,127,0,1],width:1}});case"simple-line":return new SimpleLineSymbol/* default */.A({color:[255,127,0,1],style:"dash",width:1});case"text":{const{xoffset:e,yoffset:s}=i.symbol;return new SimpleMarkerSymbol/* default */.A({xoffset:e,yoffset:s,size:t,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}default:return null}}(0,tslib_es6._)([(0,property/* property */.MZ)()],E.prototype,"_activeGraphic",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],E.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],E.prototype,"callbacks",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],E.prototype,"enableMoveAllGraphics",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],E.prototype,"graphics",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],E.prototype,"highlightName",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],E.prototype,"highlightsEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],E.prototype,"indicatorsEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],E.prototype,"_defaultLayer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],E.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],E.prototype,"state",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],E.prototype,"view",void 0),E=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.draw.support.GraphicMover")],E);


/***/ }),

/***/ 91933:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52495);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _layerUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7407);
/* harmony import */ var _support_HighlightDefaults_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29736);
/* harmony import */ var _support_layerViewUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38201);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let a=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(e){super(e),this._layerViewCache=new Map,this.highlightName=_support_HighlightDefaults_js__WEBPACK_IMPORTED_MODULE_8__/* .defaultHighlightName */ .Tv,this.view=null}add(e,r){const t=!e||Array.isArray(e)?e:[e];if(!t?.length)return;const i=r??this.highlightName;t.forEach((e=>this._highlight(e,i)))}getKeyForFeature(e){const r=e.getObjectId();return null!=r?`oid:${r}`:`uid:${e.uid}`}remove(e){const r=!e||Array.isArray(e)?e:[e];r?.length&&r.forEach((e=>e&&this._removeHighlight(this.getKeyForFeature(e))))}removeByKey(e){e?.forEach((e=>e&&this._removeHighlight(e)))}removeAll(){this.removeAllHandles()}update(e,r){this.remove(e),this.add(e,r)}_highlight(e,r){const t=e.layer??e.sourceLayer;if(!t)return;const i=this._layerViewCache.get(t);if(i)return void this.addHandles(i.highlight(e,{name:r}),this.getKeyForFeature(e));const s=(0,_layerUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .findLayerView */ ["in"])(this.view,t);(0,_support_layerViewUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .highlightsSupported */ .Of)(s)&&(this._layerViewCache.set(t,s),this.addHandles(s.highlight(e,{name:r}),this.getKeyForFeature(e)))}_removeHighlight(e){this.removeHandles(e)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],a.prototype,"_layerViewCache",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],a.prototype,"highlightName",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],a.prototype,"view",void 0),a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.views.draw.support.HighlightHelper")],a);


/***/ }),

/***/ 11157:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ce)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/Graphic.js
var Graphic = __webpack_require__(25707);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/asyncUtils.js
var asyncUtils = __webpack_require__(12690);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(48982);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Evented.js
var Evented = __webpack_require__(17306);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(6267);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(85251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(9272);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Point.js
var Point = __webpack_require__(97066);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Polyline.js
var Polyline = __webpack_require__(42238);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/coordsUtils.js
var coordsUtils = __webpack_require__(65319);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/GraphicsLayer.js
var GraphicsLayer = __webpack_require__(31828);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleMarkerSymbol.js
var SimpleMarkerSymbol = __webpack_require__(23369);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/ViewingMode.js
var ViewingMode = __webpack_require__(10714);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/2d/interactive/SnappingVisualizer2D.js
var SnappingVisualizer2D = __webpack_require__(22126);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(52495);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/handleUtils.js
var handleUtils = __webpack_require__(20464);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/MapUtils.js
var MapUtils = __webpack_require__(82256);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/SetUtils.js
var SetUtils = __webpack_require__(76286);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/support/UpdatingHandles.js
var UpdatingHandles = __webpack_require__(4238);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/layerUtils.js
var layerUtils = __webpack_require__(40454);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/symbolUtils.js
var symbolUtils = __webpack_require__(42624);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/GraphicState.js
var GraphicState = __webpack_require__(74056);
;// ../node_modules/@arcgis/core/views/draw/support/ConnectedReshapeManager.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var _;!function(e){e[e.FeatureMove=0]="FeatureMove",e[e.VertexMove=1]="VertexMove"}(_||(_={}));const w=()=>Logger/* default */.A.getLogger("esri.views.draw.support.ConnectedReshapeManager"),G=Symbol();let L=class extends Accessor/* default */.A{constructor(e){super(e),this.activeOperationType=null,this.providerFactories=[],this.view=null,this._activeProviders=new Set,this._graphics=new Map,this._modifiedFeatures=new Map,this._modifiedGraphicsLayer=new GraphicsLayer/* default */.A({listMode:"hide",internal:!0,title:"Connected Reshape Modified Graphics (Internal)"}),this._pendingGraphicsLayer=new GraphicsLayer/* default */.A({listMode:"hide",internal:!0,title:"Connected Reshape Pending Graphics (Internal)"}),this._pendingFeatures=new Map,this._updatingHandles=new UpdatingHandles/* UpdatingHandles */.U}initialize(){this.view.map.addMany([this._modifiedGraphicsLayer,this._pendingGraphicsLayer])}destroy(){this.view.destroyed||this.view.map.removeMany([this._modifiedGraphicsLayer,this._pendingGraphicsLayer]),this._modifiedGraphicsLayer.destroy(),this._pendingGraphicsLayer.destroy(),this._updatingHandles.destroy()}get updating(){return this._updatingHandles.updating||Array.from(this._activeProviders).some((e=>e.updating))}startFeatureMove(e){this.activeOperationType=_.FeatureMove,this._activeProviders.clear();for(const i of this.providerFactories)(0,SetUtils/* addMaybe */.kb)(this._activeProviders,i.getFeatureReshapeProvider(e))}startVertexMove(e,i){this.activeOperationType=_.VertexMove,this._activeProviders.clear();for(const t of this.providerFactories)(0,SetUtils/* addMaybe */.kb)(this._activeProviders,t.getVertexReshapeProvider(e,i))}finish(){this.activeOperationType=null,this._activeProviders.clear();for(const[e,i]of this._pendingFeatures){this._pendingFeatures.delete(e),this._modifiedFeatures.set(e,i);const t=this._graphics.get(e);t&&(this._modifiedGraphicsLayer.add(t),this._pendingGraphicsLayer.remove(t))}}translate(e,i,t=0){if(null===this.activeOperationType)return;const r=P(e),s=P(i),a=P(t);for(const o of this._activeProviders){const e=o.translate(r,s,a);this._update(e)}}async _initializeGraphic(e,i){e.symbol??=await this._updatingHandles.addPromise((0,symbolUtils/* getDisplayedSymbol */.Kf)(e,{scale:this.view.scale,useSourceLayer:!0})),this._pendingFeatures.has(i.uniqueId)?this._pendingGraphicsLayer.add(e):this._modifiedFeatures.has(i.uniqueId)&&this._modifiedGraphicsLayer.add(e),this.addHandles(await F(i.originalGraphic,e,this.view),G)}_update(e){for(const i of e){const e=this._modifiedFeatures.delete(i.uniqueId);this._pendingFeatures.set(i.uniqueId,i);const t=(0,MapUtils/* getOrCreateMapValue */.tE)(this._graphics,i.uniqueId,(()=>{const e=i.graphic.cloneShallow();return this._initializeGraphic(e,i),e}));t.geometry=i.graphic.geometry,e&&(this._modifiedGraphicsLayer.remove(t),this._pendingGraphicsLayer.add(t))}}get test(){return{activeProviders:this._activeProviders,modifiedFeatures:this._modifiedFeatures,modifiedGraphicsLayer:this._modifiedGraphicsLayer,pendingFeatures:this._pendingFeatures,pendingGraphicsLayer:this._pendingGraphicsLayer}}};async function F(e,i,a){const o=e.sourceLayer,d=e.getObjectId();if(null==d)return w().error("editing:cannot-hide-graphic","Unable to hide original graphic because it has no objectId."),(0,handleUtils/* makeHandle */.hA)();let c=null;function h(e){c?.abort(),c=(0,asyncUtils/* createTask */.UT)((async i=>{const t=await b(a,o);(0,promiseUtils/* throwIfAborted */.Te)(i),t&&t.setVisibility?.(d,e)}))}return await M(a,i),h(!1),(0,handleUtils/* handlesGroup */.vE)([j(a,i,(e=>h(!e))),(0,handleUtils/* makeHandle */.hA)((async()=>{h(!0);const e=await b(a,o);await (0,reactiveUtils/* whenOnce */.C_)((()=>!e?.updating))}))])}function j(e,i,t){if("3d"===e.type){const r=new GraphicState/* GraphicState */.y({graphic:i});return (0,handleUtils/* handlesGroup */.vE)([e.trackGraphicState(r),(0,reactiveUtils/* watch */.wB)((()=>r.displaying),t)])}return (0,reactiveUtils/* watch */.wB)((()=>i.visible),t)}async function M(e,i){if("3d"===e.type){const t=new GraphicState/* GraphicState */.y({graphic:i}),r=e.trackGraphicState(t);await (0,reactiveUtils/* whenOnce */.C_)((()=>t.displaying||t.error)),r.remove()}else await (0,reactiveUtils/* whenOnce */.C_)((()=>i.visible))}async function b(e,i){const t=(0,layerUtils/* isSubtypeSublayer */.Sv)(i)||(0,layerUtils/* isKnowledgeGraphSublayer */.UC)(i)?i.parent:i;return t?e.whenLayerView(t):null}function P(e){return isNaN(e)?0:e}(0,tslib_es6._)([(0,property/* property */.MZ)()],L.prototype,"activeOperationType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],L.prototype,"providerFactories",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],L.prototype,"updating",null),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],L.prototype,"view",void 0),L=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.draw.support.ConnectedReshapeManager")],L);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/draw/support/drawUtils.js
var drawUtils = __webpack_require__(18578);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/draw/support/GraphicMover.js + 1 modules
var GraphicMover = __webpack_require__(62706);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/draw/support/HighlightHelper.js
var HighlightHelper = __webpack_require__(91933);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/draw/support/layerUtils.js
var support_layerUtils = __webpack_require__(7407);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/quantityUtils.js
var quantityUtils = __webpack_require__(73569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/screenUtils.js
var screenUtils = __webpack_require__(89882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/tooltip/tooltipCommonUtils.js + 26 modules
var tooltipCommonUtils = __webpack_require__(45565);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/tooltip/infos/MovePointTooltipInfo.js
var MovePointTooltipInfo = __webpack_require__(57087);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/tooltip/infos/SelectedVertexTooltipInfo.js
var SelectedVertexTooltipInfo = __webpack_require__(45165);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/tooltip/infos/TranslateTooltipInfo.js
var TranslateTooltipInfo = __webpack_require__(56326);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/tooltip/infos/SketchTooltipInfo.js
var SketchTooltipInfo = __webpack_require__(83856);
;// ../node_modules/@arcgis/core/views/interactive/tooltip/infos/TranslateVertexTooltipInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let i=class extends SketchTooltipInfo/* SketchTooltipInfo */.w{constructor(t){super(t),this.type="translate-vertex",this.distance=quantityUtils/* zeroMeters */.r7,this.elevation=null,this.area=null,this.totalLength=null}clear(){this.distance=quantityUtils/* zeroMeters */.r7,this.elevation=null,this.area=null,this.totalLength=null}};(0,tslib_es6._)([(0,property/* property */.MZ)()],i.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],i.prototype,"distance",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],i.prototype,"elevation",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],i.prototype,"area",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],i.prototype,"totalLength",void 0),i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.tooltip.infos.TranslateVertexTooltipInfo")],i);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/support/euclideanLengthMeasurementUtils.js
var euclideanLengthMeasurementUtils = __webpack_require__(91199);
;// ../node_modules/@arcgis/core/views/draw/support/reshapeTooltipUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function y(t){const e={sketchOptions:t,viewType:"2d"};return{movePoint:new MovePointTooltipInfo/* MovePointTooltipInfo */.F(e),selectedVertex:new SelectedVertexTooltipInfo/* SelectedVertexTooltipInfo */.d(e),translateGraphic:new TranslateTooltipInfo/* TranslateTooltipInfo */.M(e),translateVertices:new i(e)}}function v(e,r){function a(){const t=r(),e=t.sketchOptions.tooltips.effectiveEnabled?t.activeTooltipInfo:null;return{...t,activeTooltipInfo:e}}let s=!1;function l(t){s||(s=!0,t(),s=!1)}return (0,handleUtils/* handlesGroup */.vE)([(0,reactiveUtils/* watch */.wB)((()=>{const t=a();return{context:t,geometry:t.graphic?.geometry,vertexGeometry:t.selectedVertex?.geometry}}),(({context:t})=>{l((()=>{g(t),e.info=t.activeTooltipInfo}))}),reactiveUtils/* syncAndInitial */.pc),(0,reactiveUtils/* watch */.wB)((()=>{const t=a(),{activeTooltipInfo:e}=t;if(e&&"key"in e)return{context:t,key:e.key}}),((t,e)=>{t&&e&&t.key!==e.key&&l((()=>T(t.context)))}),reactiveUtils/* sync */.OH),(0,tooltipCommonUtils/* connectPasteEvent */.sZ)(e,{onBeforePaste:()=>{s=!0},onAfterPaste:()=>{T(a()),s=!1}})])}function g(t){const e=t.activeTooltipInfo;if(e){switch(e?.type){case"move-point":return h(e,t);case"selected-vertex":return d(e,t)}e.sketchOptions=t.sketchOptions}}function h(t,{graphic:e}){x(t,e,e?.geometry)}function d(t,{graphic:e,selectedVertex:o,automaticAreaMeasurementUtils:n,automaticLengthMeasurementUtils:i}){x(t,e,o?.geometry);const r=e?.geometry;switch(r?.type){case"polygon":t.geometryType="polygon",t.totalLength.visible=!1,t.area.actual=n.autoArea2D(r);break;case"polyline":t.geometryType="polyline",t.totalLength.actual=i.autoLength2D(r),t.area.visible=!1}}function x(t,e,o){e&&"point"===o?.type&&(t.setLocationFromPoint(o),t.elevation.actual=(0,euclideanLengthMeasurementUtils/* elevationFromPoint */.Of)(o),t.elevation.visible=!!e.geometry?.hasZ,t.elevation.readOnly=!1,t.elevation.showAsZ=!0)}function T(t){function e(e,o){const n=o?.geometry;if(!n||"point"!==n.type)return;const{dx:i,dy:r,dz:c}=(0,tooltipCommonUtils/* getXYZDeltasFromTooltipInfo */.mu)(e,n);if(0===i&&0===r&&0===c)return;const{x:l,y:p,z:m,m:u,spatialReference:f}=n,y=new Point/* default */.A({x:l+i,y:p+r,z:null!=m?m+c:void 0,m:u,spatialReference:f});t.updateGeometry(o,y,n,i,r)}const{activeTooltipInfo:o,graphic:n,selectedVertex:i}=t;switch(o?.type){case"move-point":return e(o,n);case"selected-vertex":return e(o,i)}}function reshapeTooltipUtils_j(t,e,o,n){t.clear(),U(t,e,n,o)}function reshapeTooltipUtils_w(t,e,o,n,i){t.clear();const{automaticAreaMeasurementUtils:r,automaticLengthMeasurementUtils:a}=n;"polygon"===o?.type?t.area=r.autoArea2D(o):"polyline"===o?.type&&(t.totalLength=a.autoLength2D(o)),U(t,e,i,n)}function U(t,o,n,{automaticLengthMeasurementUtils:i}){if(!n)return;const{x:a,y:c}=n.origin,s=o.toMap(n),l=o.toMap((0,screenUtils/* createScreenPoint */.tc)(a,c)),p=i.autoDistanceBetweenPoints2D(l,s);t.distance=null!=p?p:quantityUtils/* zeroMeters */.r7}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/draw/support/settings.js
var settings = __webpack_require__(38620);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/input/InputManager.js + 2 modules
var InputManager = __webpack_require__(54874);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/coordinateHelper.js
var coordinateHelper = __webpack_require__(75999);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/keybindings.js
var keybindings = __webpack_require__(70384);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/editGeometry/EditGeometryOperations.js + 8 modules
var EditGeometryOperations = __webpack_require__(59147);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/sketch/SketchOptions.js
var SketchOptions = __webpack_require__(76748);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/snapping/SnappingContext.js
var SnappingContext = __webpack_require__(53333);
;// ../node_modules/@arcgis/core/views/draw/support/Reshape.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class X{constructor(e,t,i){this.graphic=e,this.mover=t,this.selected=i,this.type="reshape-start"}}class Y{constructor(e,t,i){this.graphic=e,this.mover=t,this.selected=i,this.type="reshape"}}class K{constructor(e,t,i){this.graphic=e,this.mover=t,this.selected=i,this.type="reshape-stop"}}class q{constructor(e,t,i){this.mover=e,this.dx=t,this.dy=i,this.type="move-start"}}class B{constructor(e,t,i){this.mover=e,this.dx=t,this.dy=i,this.type="move"}}class J{constructor(e,t,i){this.mover=e,this.dx=t,this.dy=i,this.type="move-stop"}}class Q{constructor(e){this.added=e,this.type="vertex-select"}}class W{constructor(e){this.removed=e,this.type="vertex-deselect"}}class ${constructor(e,t,i,s){this.added=e,this.graphic=t,this.oldGraphic=i,this.vertices=s,this.type="vertex-add"}}class ee{constructor(e,t,i,s){this.removed=e,this.graphic=t,this.oldGraphic=i,this.vertices=s,this.type="vertex-remove"}}const te=settings/* settings */.W.reshapeGraphics,ie={vertices:{default:new SimpleMarkerSymbol/* default */.A({style:"circle",size:te.vertex.size,color:te.vertex.color,outline:{color:te.vertex.outlineColor,width:1}}),hover:new SimpleMarkerSymbol/* default */.A({style:"circle",size:te.vertex.hoverSize,color:te.vertex.hoverColor,outline:{color:te.vertex.hoverOutlineColor,width:1}}),selected:new SimpleMarkerSymbol/* default */.A({style:"circle",size:te.selected.size,color:te.selected.color,outline:{color:te.selected.outlineColor,width:1}})},midpoints:{default:new SimpleMarkerSymbol/* default */.A({style:"circle",size:te.midpoint.size,color:te.midpoint.color,outline:{color:te.midpoint.outlineColor,width:1}}),hover:new SimpleMarkerSymbol/* default */.A({style:"circle",size:te.midpoint.size,color:te.midpoint.color,outline:{color:te.midpoint.outlineColor,width:1}})}};let se=class extends Evented/* default */.A.EventedAccessor{constructor(e){super(e),this._updateHandlesOnExternalGeometryChange=null,this._activeOperationInfo=null,this._connectedReshapeManager=null,this._editGeometryOperations=null,this._graphicAttributes={esriSketchTool:"box"},this._mover=null,this._snappingContext=null,this._snappingGraphicsLayer=null,this._hoverGraphic=null,this._snappingTask=null,this._stagedVertex=null,this.tooltip=null,this.activeTooltipInfo=null,this.callbacks={onReshapeStart(){},onReshape(){},onReshapeStop(){},onMoveStart(){},onMove(){},onMoveStop(){},onGraphicClick(){}},this.connectedReshapeProviders=[],this.enableMidpoints=!0,this.enableMovement=!0,this.enableVertices=!0,this.graphic=null,this.highlightName=null,this.highlightsEnabled=!0,this.layer=null,this.midpointGraphics=new Collection/* default */.A,this.midpointSymbol=new SimpleMarkerSymbol/* default */.A({style:"circle",size:6,color:[200,200,200],outline:{color:[100,100,100],width:1}}),this.selectedVertices=new Collection/* default */.A,this.snappingManager=null,this.symbols=ie,this.sketchOptions=new SketchOptions/* default */.A,this.type="reshape",this.vertexGraphics=new Collection/* default */.A,this.view=null}initialize(){const e=this.view;this._highlightHelper=new HighlightHelper/* default */.A({view:e}),this._setup(),this._updateHandlesOnExternalGeometryChange=(0,reactiveUtils/* pausable */.C1)((()=>this.graphic?.geometry),(e=>{if(!e)return;const t=new Set(this.selectedVertices.map((e=>e.attributes?.pointIndex)));this._highlightHelper.removeAll(),this._setUpHighlights(),this._setupGraphics(),this._clearSelection(),this.vertexGraphics.filter((e=>t.has(e.attributes.pointIndex))).forEach((e=>this._addToSelection(e)));const{enableMovement:i,_mover:s,graphic:o,midpointGraphics:r,vertexGraphics:n}=this,h=n.concat(r).items;i&&h.push(o),s?.set("graphics",h)}),reactiveUtils/* sync */.OH),this.tooltip=(0,tooltipCommonUtils/* makeTooltip */.A)((()=>({view:e,options:this.sketchOptions.tooltips}))),this.tooltipInfos=y(this.sketchOptions),this.addHandles([(0,reactiveUtils/* when */.z7)((()=>e?.ready),(()=>{const{layer:e,view:t}=this;(0,support_layerUtils/* addUniqueLayer */.Y3)(t,e),this.addHandles(t.on("key-down",(e=>this._keyDownHandler(e)),InputManager/* ViewEventPriorities */.o.TOOL))}),{once:!0,initial:!0}),(0,reactiveUtils/* watch */.wB)((()=>this.graphic),(()=>this.refresh())),(0,reactiveUtils/* watch */.wB)((()=>this.layer),((e,t)=>{t&&(this._clearSelection(),this._resetGraphics(t)),this.refresh()})),(0,reactiveUtils/* watch */.wB)((()=>[this.highlightsEnabled,this.highlightName]),(()=>{this._highlightHelper?.removeAll(),this._setUpHighlights()})),(0,reactiveUtils/* watch */.wB)((()=>this.enableMidpoints),(()=>this.refresh())),v(this.tooltip,(()=>this._tooltipsContext)),(0,reactiveUtils/* watch */.wB)((()=>this.view.effectiveTheme.accentColor),(()=>this._updateSymbolsForTheme()),reactiveUtils/* initial */.Vh),this._updateHandlesOnExternalGeometryChange]),this._updateTooltip()}destroy(){this._reset(),this._mover?.destroy(),this._mover=null,this._connectedReshapeManager=(0,maybe/* destroyMaybe */.pR)(this._connectedReshapeManager),this.tooltip=(0,maybe/* destroyMaybe */.pR)(this.tooltip)}get _coordinateHelper(){return this._editGeometryOperations?.data.coordinateHelper??(0,coordinateHelper/* createCoordinateHelper */.BV)(!!this.graphic.geometry?.hasZ,!!this.graphic.geometry?.hasM,this.view.spatialReference)}get _selectedVertex(){return 1===this.selectedVertices.length?this.selectedVertices.at(0):void 0}get _tooltipsContext(){const{automaticAreaMeasurementUtils:e,automaticLengthMeasurementUtils:t,sketchOptions:i,activeTooltipInfo:s,graphic:o}=this;return{sketchOptions:i,activeTooltipInfo:s,graphic:o,selectedVertex:this._selectedVertex,automaticAreaMeasurementUtils:e,automaticLengthMeasurementUtils:t,updateGeometry:(e,t,i,s,o)=>{this._setUpGeometryHelper();const r=e===this.graphic;r?this._emitMoveStartEvent(0,0):this._emitReshapeStartEvent(e);const n=!0;if(this._syncGeometryAfterVertexMove(e,t,s,o,n),r){const{view:e}=this,s=e.toScreen(i),o=e.toScreen(t),r=(o?.x??0)-(s?.x??0),n=(o?.y??0)-(s?.y??0);this._emitMoveEvent(r,n),this._emitMoveStopEvent(r,n)}else this._emitReshapeEvent(e),this._emitReshapeStopEvent(e);this._editGeometryOperations=(0,maybe/* destroyMaybe */.pR)(this._editGeometryOperations)}}}get state(){const e=this.view.ready,t=!(!this.graphic||!this.layer);return e&&t?"active":e?"ready":"disabled"}isUIGraphic(e){const t=[];return this.graphic&&t.push(this.graphic),t.concat(this.vertexGraphics.items,this.midpointGraphics.items),t.length>0&&t.includes(e)}refresh(){this._reset(),this._setup()}reset(){this.graphic=null}clearSelection(){this._clearSelection()}removeSelectedVertices(){const{selectedVertices:e}=this;e.length&&this._removeVertices(e)}_setup(){const{graphic:e,layer:t}=this;if(!t||null==e?.geometry)return;const i=e.geometry;"mesh"!==i.type&&"extent"!==i.type?("polygon"===i.type&&(0,coordsUtils/* closeRingsAndFixWinding */.uC)(i),this._setUpHighlights(),this._setupGraphics(),this._setupMover(),this._setupConnectedReshapeManager()):this._logGeometryTypeError()}_setUpHighlights(){this.highlightsEnabled&&this.graphic&&this._highlightHelper?.add(this.graphic,this.highlightName)}_setUpGeometryHelper(){const e=this.graphic.geometry;if(null==e||"mesh"===e.type||"extent"===e.type)return void this._logGeometryTypeError();const t="multipoint"===e.type?new Polyline/* default */.A({paths:[e.points],spatialReference:e.spatialReference}):e;this._editGeometryOperations=EditGeometryOperations/* EditGeometryOperations */.p.fromGeometry(t,ViewingMode/* ViewingMode */.RT.Local)}_saveSnappingContextForHandle(e,t){this._snappingGraphicsLayer=new GraphicsLayer/* default */.A({listMode:"hide",internal:!0,title:"Reshape snapping layer"}),this.view.map.layers.add(this._snappingGraphicsLayer);const i=this._editGeometryOperations;(0,maybe/* assertIsSome */.Lw)(i),this._snappingContext=new SnappingContext/* SnappingContext */.e({editGeometryOperations:i,elevationInfo:{mode:"on-the-ground",offset:0},pointer:t.viewEvent?.pointerType||"mouse",excludeFeature:this.graphic,feature:this.graphic,visualizer:new SnappingVisualizer2D/* SnappingVisualizer2D */.J(this._snappingGraphicsLayer),vertexHandle:this._getVertexFromEditGeometry(e)})}_reset(){this._clearSelection(),this._highlightHelper?.removeAll(),this._updateTooltip(),this._resetGraphics(),this._resetSnappingStateVars(),this._activeOperationInfo=null,this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}_resetSnappingStateVars(){null!=this.snappingManager&&this.snappingManager.doneSnapping(),null!=this._snappingGraphicsLayer&&(this.view?.map&&this.view.map.layers.remove(this._snappingGraphicsLayer),this._snappingGraphicsLayer.destroy()),this._editGeometryOperations=(0,maybe/* destroyMaybe */.pR)(this._editGeometryOperations),this._snappingTask=(0,maybe/* abortMaybe */.DC)(this._snappingTask),this._snappingTask=null,this._snappingContext=null,this._stagedVertex=null}_resetGraphics(e){this._removeMidpointGraphics(e),this._removeVertexGraphics(e),this.selectedVertices.removeAll(),this._updateTooltip()}_removeMidpointGraphics(e){const t=e||this.layer;t&&t.removeMany(this.midpointGraphics.items),this.midpointGraphics.items.forEach((e=>e.destroy())),this.midpointGraphics.removeAll()}_removeVertexGraphics(e){const t=e||this.layer;t&&t.removeMany(this.vertexGraphics.items),this.vertexGraphics.items.forEach((e=>e.destroy())),this.vertexGraphics.removeAll()}_setupGraphics(){const e=this.graphic.geometry;if(null!=e&&("polyline"===e.type||"polygon"===e.type)){const t=oe(e);this.enableMidpoints&&this._setUpMidpointGraphics(t),this.enableVertices&&this._setUpVertexGraphics(t)}}_setUpMidpointGraphics(e){this._removeMidpointGraphics();const t=this._createMidpointGraphics(e);this.midpointGraphics.addMany(t),this.layer.addMany(t)}_setUpVertexGraphics(e){this._removeVertexGraphics();const t=this._createVertexGraphics(e);this.vertexGraphics.addMany(t),this._storeRelatedVertexIndices(),this.layer.addMany(t)}_createVertexGraphics(e){const{_graphicAttributes:i,symbols:s}=this,o=[];return e?.forEach(((e,r)=>{e.forEach(((e,n)=>{o.push(new Graphic/* default */.A({geometry:this._coordinateHelper.arrayToPoint(e),symbol:s?.vertices?.default,attributes:{...i,pathIndex:r,pointIndex:n}}))}))})),o}_createMidpointGraphics(e){const{_graphicAttributes:i,symbols:s}=this,o=[];for(let r=0;r<e.length;r++){const n=e[r];for(let e=0;e<n.length;e++){const h=(e+1)%n.length;if("polyline"===this.graphic.geometry?.type&&0===h)continue;const a=n[e],p=n[h],c=this._getMidpoint(a,p);o.push(new Graphic/* default */.A({geometry:c,symbol:s.midpoints.default,attributes:{...i,pathIndex:r,pointIndexStart:e,pointIndexEnd:h}}))}}return o}_updateSymbolsForTheme(){const e=this.view.effectiveTheme.accentColor;this.symbols={vertices:{...this.symbols.vertices,default:this.symbols.vertices.default.clone().set("color",e),hover:this.symbols.vertices.hover?.clone().set("color",e)},midpoints:{...this.symbols.midpoints}};for(const t of this.vertexGraphics)this._isSelected(t)?t.symbol=this.symbols.vertices.selected:this._hoverGraphic===t?t.symbol=this.symbols.vertices.hover:t.symbol=this.symbols.vertices.default}_storeRelatedVertexIndices(){const e=this.vertexGraphics.items;if(!e)return;const t=e.map((({geometry:e})=>({x:e.x,y:e.y})));for(let i=0;i<t.length;i++){const s=[];for(let e=0;e<t.length;e++){if(i===e)continue;const o=t[i],r=t[e];o.x===r.x&&o.y===r.y&&s.push(e)}e[i].attributes.relatedGraphicIndices=s}}_setupMover(){const{enableMovement:e,graphic:t,midpointGraphics:i,vertexGraphics:s,view:o}=this,r=s.concat(i).items;e&&r.push(t),this._mover=new GraphicMover["default"]({enableMoveAllGraphics:!1,highlightsEnabled:!1,indicatorsEnabled:!1,graphics:r,view:o,callbacks:{onGraphicClick:e=>this._onGraphicClickCallback(e),onGraphicMoveStart:e=>this._onGraphicMoveStartCallback(e),onGraphicMove:e=>this._onGraphicMoveCallback(e),onGraphicMoveStop:e=>this._onGraphicMoveStopCallback(e),onGraphicPointerOver:e=>this._onGraphicPointerOverCallback(e),onGraphicPointerOut:e=>this._onGraphicPointerOutCallback(e)}})}_setupConnectedReshapeManager(){const{connectedReshapeProviders:e}=this;0!==e.length&&(this._connectedReshapeManager=new L({providerFactories:e,view:this.view}))}_onGraphicClickCallback(e){e.viewEvent.stopPropagation();const t=e.graphic;if(t===this.graphic)this.clearSelection(),this.emit("graphic-click",e),this.callbacks.onGraphicClick?.(e);else if(this._isMidpoint(t)){if(2===e.viewEvent.button)return;const i=this.graphic.clone(),s=this._createVertexFromMidpoint(t);this.refresh(),this._emitVertexAddEvent([t],i,s)}else if(this._isVertex(t))if(e.viewEvent.stopPropagation(),2===e.viewEvent.button)this._removeVertices(t);else{e.viewEvent.native.shiftKey||this._clearSelection(),this.selectedVertices.includes(t)?this._removeFromSelection(t,!0):this._addToSelection(t)}}_setUpOperation(e){const{graphic:t,dx:i,dy:s}=e,o=t===this.graphic;this._resetSnappingStateVars(),this._setUpGeometryHelper(),this._saveSnappingContextForHandle(t,e),this._activeOperationInfo={target:this.graphic,mover:t,operationType:o?"move":"reshape",totalDx:i,totalDy:s}}_onGraphicMoveStartCallback(e){const{dx:t,dy:i,graphic:s}=e,o=this._connectedReshapeManager,r=o?he(this.graphic):null;if(s===this.graphic){const{geometry:n}=s;return this._setUpOperation(e),this._emitMoveStartEvent(t,i),r&&o?.startFeatureMove([r]),void(null!=n&&"point"===n.type&&this._onHandleMove(s,t,i,e,(()=>{this._updateTooltip(this.graphic,e.viewEvent),this._emitMoveEvent(t,i)})))}const{selectedVertices:n}=this;if(!n.includes(s)){if(this._clearSelection(),this._isMidpoint(s)){const e=this.graphic.clone(),t=this._createVertexFromMidpoint(s);this._emitVertexAddEvent([s],e,t)}this._addToSelection(s)}this._setUpOperation(e),r&&o?.startVertexMove(r,ae(n)),this._emitReshapeStartEvent(s),this._onHandleMove(s,t,i,e,(()=>{this._updateTooltip(s,e.viewEvent),this._emitReshapeEvent(s)}))}_onGraphicMoveCallback(e){const t=this._activeOperationInfo;if(!t)return;const{dx:i,dy:s,graphic:o}=e;t.totalDx+=i,t.totalDy+=s;const{operationType:r}=t,{geometry:n}=o;if(null!=n)if("move"!==r)this._onHandleMove(o,i,s,e,(()=>{this._updateTooltip(o,e.viewEvent),this._emitReshapeEvent(o)}));else if("point"===n.type)this._onHandleMove(o,i,s,e,(()=>{this._updateTooltip(this.graphic,e.viewEvent),this._emitMoveEvent(i,s)}));else if("polyline"===n.type||"polygon"===n.type){const t=oe(n);this._updateVertexGraphicLocations(t);const{dxMap:o,dyMap:r}=pe(i,s,this.view);this._connectedReshapeManager?.translate(o,r,0),this._updateTooltip(this.graphic,e.viewEvent),this._emitMoveEvent(i,s)}}_onGraphicMoveStopCallback(e){const t=this._activeOperationInfo;if(!t)return;const{dx:i,dy:s,graphic:o}=e,{operationType:r}=t;t.totalDx+=i,t.totalDy+=s,this._onHandleMove(o,i,s,e,(()=>"move"===r?this._emitMoveStopEvent():this._emitReshapeStopEvent(o))),this._isMidpoint(o)?this.refresh():(this._updateTooltip(this._isVertex(o)?o:null),this._resetSnappingStateVars(),this._connectedReshapeManager?.finish(),this._activeOperationInfo=null)}_updateVertexGraphicLocations(e){const{_coordinateHelper:t}=this;for(const i of this.vertexGraphics){const{pathIndex:s,pointIndex:o}=i.attributes;i.geometry=t.arrayToPoint(e[s][o])}this._updateMidpointGraphicLocations(e)}_updateMidpointGraphicLocations(e){for(const t of this.midpointGraphics){const{pathIndex:i,pointIndexStart:s,pointIndexEnd:o}=t.attributes,r=e[i];t.geometry=this._getMidpoint(r[s],r[o])}}_getMidpoint(e,t){const{_coordinateHelper:i}=this,s=i.arrayToVector(e),o=i.arrayToVector(t),r=i.toXYZ(s),n=i.toXYZ(o),[h,a,p]=(0,coordsUtils/* getMidpoint */.t9)(r,n),c=i.hasM()?0:void 0;return new Point/* default */.A({x:h,y:a,z:p,m:c,spatialReference:i.spatialReference})}_getVertexFromEditGeometry(e){const[t,i]=re(e);return (0,maybe/* assertIsSome */.Lw)(this._editGeometryOperations),this._editGeometryOperations.data.components[t].vertices[i]}_onHandleMove(e,t,s,o,r){(0,maybe/* abortMaybe */.DC)(this._snappingTask);const n=this._snappingContext;if(!n)return;const h=e.geometry,a="graphic-move-stop"===o.type;if(null!=this.snappingManager&&this.selectedVertices.length<2&&!a){const o=this.snappingManager;this._stagedVertex=o.update({point:h,context:n}),this._syncGeometryAfterVertexMove(e,new Point/* default */.A(this._stagedVertex),t,s,a),r(),this._snappingTask=(0,asyncUtils/* createTask */.UT)((async i=>{const p=await o.snap({point:h,context:n,signal:i});p.valid&&(this._stagedVertex=p.apply(),this._syncGeometryAfterVertexMove(e,new Point/* default */.A(this._stagedVertex),t,s,a),r())}))}else{const i=null!=this._stagedVertex?new Point/* default */.A(this._stagedVertex):h;this._syncGeometryAfterVertexMove(e,i,t,s,a),r()}}_syncGeometryAfterVertexMove(e,t,i,s,o=!1){const r=this._editGeometryOperations?.data.geometry;if(r)if("point"===r.type)e.geometry=t;else if("mesh"===r.type)e.geometry=r.centerAt(t);else{const{_coordinateHelper:n}=this,[h,a]=re(e);let p=(0,coordsUtils/* geometryToCoordinates */.$K)(r);const c=p[h].length-1,l=n.pointToArray(t);p[h][a]=l,"polygon"===r.type&&(0===a?p[h][c]=l:a===c&&(p[h][0]=l)),this._isVertex(e)&&(p=this._moveRelatedCoordinates(p,e,l),p=this._moveSelectedHandleCoordinates(p,e,i,s,"polygon"===r.type),this._updateMidpointGraphicLocations(p)),this._updateGraphicGeometry(r.clone());const d=n.pointToVector(t),m=this._getVertexFromEditGeometry(e),v=n.getZ(d),y=d[0]-m.pos[0],_=d[1]-m.pos[1],g=null!=v?v-m.pos[2]:0;this._editGeometryOperations?.moveVertices([m],y,_,g),this._connectedReshapeManager?.translate(y,_,g),o&&(this._mover?this._mover.updateGeometry(this._mover.graphics.indexOf(e),t):e.geometry=t)}}_moveRelatedCoordinates(e,t,i){const{relatedGraphicIndices:s}=t.attributes;for(const o of s){const s=this.vertexGraphics.at(o),{pathIndex:r,pointIndex:n}=s.attributes;e[r][n]=i,s.geometry=t.geometry}return e}_moveSelectedHandleCoordinates(e,t,i,s,o){for(const r of this.selectedVertices)if(r!==t){const{pathIndex:t,pointIndex:n,relatedGraphicIndices:h}=r.attributes,a=(0,drawUtils/* cloneMove */.lR)(r.geometry,i,s,this.view),p=(0,coordsUtils/* geometryToCoordinates */.$K)(a),c=e[t].length-1;e[t][n]=p,r.geometry=a,o&&(0===n?e[t][c]=p:n===c&&(e[t][0]=p));for(const i of h){const t=this.vertexGraphics.at(i),{pathIndex:s,pointIndex:o}=t.attributes;e[s][o]=p,t.geometry=a}}return e}_onGraphicPointerOverCallback(e){const t=e.graphic;this._hoverGraphic=t;const i=this._isVertex(t);i&&!this._isSelected(t)&&(t.symbol=this.symbols.vertices.hover),this._updateTooltip(i?t:null),this._updateHoverCursor(t)}_onGraphicPointerOutCallback(e){const t=e.graphic;this._hoverGraphic=null,this._isVertex(t)&&!this._isSelected(t)&&(t.symbol=this.symbols.vertices.default),this.view.cursor="default",this._updateTooltip()}_createVertexFromMidpoint(e){const{_graphicAttributes:t,graphic:i}=this,s=i.geometry;if(null==s||"polygon"!==s.type&&"polyline"!==s.type)return[];const o=s.clone(),r=[],{pathIndex:n,pointIndexStart:h,pointIndexEnd:a}=e.attributes,p=(0,coordsUtils/* geometryToCoordinates */.$K)(e.geometry),c=0===a?h+1:a,l=(0,coordsUtils/* geometryToCoordinates */.$K)(o);return l[n].splice(c,0,p),e.attributes={...t,pathIndex:n,pointIndex:c,relatedGraphicIndices:[]},r.push({coordinates:l[n][c],componentIndex:n,vertexIndex:c}),this._updateGraphicGeometry(o),r}_addToSelection(e){const t=ne(e);for(const i of t)i.symbol=this.symbols.vertices.selected,this.selectedVertices.add(i),this._updateTooltip(i);this._emitSelectEvent(t)}_removeFromSelection(e,t){const{vertices:i}=this.symbols,s=t?i.hover:i.default;this.selectedVertices.remove(e),e.symbol=s,this._emitDeselectEvent([e]),this._updateTooltip()}_clearSelection(){const e=this.selectedVertices.toArray();if(e.length>0){for(const t of e)t.set("symbol",this.symbols.vertices.default);this.selectedVertices.removeAll(),this._emitDeselectEvent(e),this._updateTooltip()}}_keyDownHandler(e){null==this._activeOperationInfo&&(0,tooltipCommonUtils/* enterInputModeIfAvailable */.wG)(e,this.tooltip)||keybindings/* sketchKeys */.NE.delete.includes(e.key)&&!e.repeat&&this.selectedVertices.length&&this._removeVertices(this.selectedVertices)}_removeVertices(e){const t=this.graphic.geometry;if(null==t||"polygon"!==t.type&&"polyline"!==t.type)return;if("polygon"===t.type&&this.vertexGraphics.length<4||this.vertexGraphics.length<3)return;const i=this.graphic.clone(),s=t.clone();let o=(0,coordsUtils/* geometryToCoordinates */.$K)(s);const r=[],n=ne(e);for(const h of n){const{x:e,y:t}=h.geometry;for(let i=0;i<o.length;i++){const s=o[i];for(let n=0;n<s.length;n++){const[h,a]=s[n];e===h&&t===a&&(r.push({coordinates:o[i][n],componentIndex:i,vertexIndex:n}),o[i].splice(Number(n),1))}}}if("polygon"===s.type)o=o.filter((e=>{if(e.length<2)return!1;const[t,i]=e[0],[s,o]=e[e.length-1];return(2!==e.length||t!==s||i!==o)&&(t===s&&i===o||e.push(e[0]),!0)})),s.rings=o;else{for(const e of o)1===e.length&&o.splice(o.indexOf(e),1);s.paths=o}this._updateGraphicGeometry(s),this.refresh(),this._emitVertexRemoveEvent(n,i,r)}_isVertex(e){return this.vertexGraphics.includes(e)}_isSelected(e){return this._isVertex(e)&&this.selectedVertices.includes(e)}_isMidpoint(e){return this.midpointGraphics.includes(e)}_updateHoverCursor(e){this.view.cursor=this._isMidpoint(e)?"copy":"move"}_updateTooltip(e,t){let i=null;const{graphic:s,view:o,tooltipInfos:r}=this,n=s?.geometry;"point"===n?.type?i=r.movePoint:this._selectedVertex?i=r.selectedVertex:e===this.graphic?(i=r.translateGraphic,reshapeTooltipUtils_j(i,o,this._tooltipsContext,t)):e&&this.selectedVertices.length>1&&(i=r.translateVertices,reshapeTooltipUtils_w(i,o,n,this._tooltipsContext,t)),this.activeTooltipInfo=i}_updateGraphicGeometry(e){this._updateHandlesOnExternalGeometryChange?.pause(),this.graphic.geometry=e,this._updateHandlesOnExternalGeometryChange?.resume()}_emitMoveStartEvent(e,t){const i=new q(this.graphic,e,t);this.emit("move-start",i),this.callbacks.onMoveStart?.(i)}_emitMoveEvent(e,t){const i=new B(this.graphic,e,t);this.emit("move",i),this.callbacks.onMove?.(i)}_emitMoveStopEvent(e,t){if(null==e||null==t){const i=this._activeOperationInfo;if(!i)return;e=i.totalDx,t=i.totalDy}const i=new J(this.graphic,e,t);this.emit("move-stop",i),this.callbacks.onMoveStop?.(i)}_emitReshapeStartEvent(e){const t=new X(this.graphic,e,this.selectedVertices.toArray());this.emit("reshape-start",t),this.callbacks.onReshapeStart?.(t)}_emitReshapeEvent(e){const t=new Y(this.graphic,e,this.selectedVertices.toArray());this.emit("reshape",t),this.callbacks.onReshape?.(t)}_emitReshapeStopEvent(e){const t=new K(this.graphic,e,this.selectedVertices.toArray());this.emit("reshape-stop",t),this.callbacks.onReshapeStop?.(t)}_emitSelectEvent(e){const t=new Q(e);this.emit("select",t),this.callbacks.onVertexSelect?.(t)}_emitDeselectEvent(e){const t=new W(e);this.emit("deselect",t),this.callbacks.onVertexDeselect?.(t)}_emitVertexAddEvent(e,t,i){const s=new $(e,this.graphic,t,i);this.emit("vertex-add",s),this.callbacks.onVertexAdd?.(s)}_emitVertexRemoveEvent(e,t,i){const s=new ee(e,this.graphic,t,i);this.emit("vertex-remove",s),this.callbacks.onVertexRemove?.(s)}_logGeometryTypeError(){Logger/* default */.A.getLogger(this).error(new Error/* default */.A("reshape:invalid-geometry","Reshape operation not supported for the provided graphic. The geometry type is not supported."))}};function oe(e){const t=(0,coordsUtils/* geometryToCoordinates */.$K)(e.clone());if("polygon"===e.type)for(const i of t){const e=i[i.length-1];i[0][0]===e[0]&&i[0][1]===e[1]&&i.length>2&&i.pop()}return t}function re({attributes:e}){return[e?.pathIndex||0,e?.pointIndex||0]}function ne(e){return e instanceof Graphic/* default */.A?[e]:[...e]}function he(e){const t=e.sourceLayer??e.layer;return (0,support_layerUtils/* isConnectedReshapeSupportedLayer */.Nu)(t)?{graphic:e,layer:t}:null}function ae(e){return e.toArray().map((e=>({pathIndex:e.attributes.pathIndex,vertexIndex:e.attributes.pointIndex})))}function pe(e,t,i){const s=i.state.inverseTransform;return{dxMap:s[0]*e+s[2]*t,dyMap:s[1]*e+s[3]*t}}(0,tslib_es6._)([(0,property/* property */.MZ)()],se.prototype,"_activeOperationInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],se.prototype,"_connectedReshapeManager",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],se.prototype,"_coordinateHelper",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],se.prototype,"_editGeometryOperations",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],se.prototype,"tooltip",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],se.prototype,"tooltipInfos",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],se.prototype,"activeTooltipInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],se.prototype,"automaticAreaMeasurementUtils",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],se.prototype,"automaticLengthMeasurementUtils",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],se.prototype,"_selectedVertex",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],se.prototype,"_tooltipsContext",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],se.prototype,"callbacks",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],se.prototype,"connectedReshapeProviders",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],se.prototype,"enableMidpoints",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],se.prototype,"enableMovement",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],se.prototype,"enableVertices",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],se.prototype,"graphic",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],se.prototype,"highlightName",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],se.prototype,"highlightsEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],se.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],se.prototype,"midpointGraphics",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],se.prototype,"midpointSymbol",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],se.prototype,"selectedVertices",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],se.prototype,"snappingManager",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],se.prototype,"state",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],se.prototype,"symbols",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SketchOptions/* default */.A})],se.prototype,"sketchOptions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],se.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],se.prototype,"vertexGraphics",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],se.prototype,"view",void 0),se=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.draw.support.Reshape")],se);const ce=se;


/***/ }),

/***/ 18578:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UT: () => (/* binding */ m),
/* harmony export */   hs: () => (/* binding */ s),
/* harmony export */   lR: () => (/* binding */ i),
/* harmony export */   wW: () => (/* binding */ a)
/* harmony export */ });
/* unused harmony export move */
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92504);
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80510);
/* harmony import */ var _geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36358);
/* harmony import */ var _geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65319);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function r(t,n,e,r){if(null==r||t.hasZ||(r=void 0),"point"===t.type)return t.x+=n,t.y+=e,t.hasZ&&null!=r&&(t.z+=r),t;if("multipoint"===t.type){const o=t.points;for(let t=0;t<o.length;t++)o[t]=l(o[t],n,e,r);return t}if("extent"===t.type)return t.xmin+=n,t.xmax+=n,t.ymin+=e,t.ymax+=e,null!=r&&(t.zmin??=0,t.zmin+=r,t.zmax??=0,t.zmax+=r),t;const i=(0,_geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .geometryToCoordinates */ .$K)(t),s="polyline"===t.type?t.paths:t.rings;for(let o=0;o<i.length;o++){const t=i[o];for(let o=0;o<t.length;o++)t[o]=l(t[o],n,e,r)}return"paths"in t?t.paths=s:t.rings=s,t}function i(t,n,e,i,s){const a=t.clone(),m=i.resolution;if("point"===a.type){if(s)r(a,n*m,-e*m);else{const t=i.state.transform,o=i.state.inverseTransform,r=t[0]*a.x+t[2]*a.y+t[4],s=t[1]*a.x+t[3]*a.y+t[5];a.x=o[0]*(r+n)+o[2]*(s+e)+o[4],a.y=o[1]*(r+n)+o[3]*(s+e)+o[5]}return a}if("multipoint"===a.type){if(s)r(a,n*m,-e*m);else{const t=a.points,o=i.state.transform,r=i.state.inverseTransform;for(let i=0;i<t.length;i++){const s=t[i],a=o[0]*s[0]+o[2]*s[1]+o[4],m=o[1]*s[0]+o[3]*s[1]+o[5],l=r[0]*(a+n)+r[2]*(m+e)+r[4],p=r[1]*(a+n)+r[3]*(m+e)+r[5];t[i]=x(s,l,p,void 0)}}return a}if("extent"===a.type){if(s)r(a,n*m,-e*m);else{const t=i.state.transform,o=i.state.inverseTransform,r=t[0]*a.xmin+t[2]*a.ymin+t[4],s=t[1]*a.xmin+t[3]*a.ymin+t[5],m=t[0]*a.xmax+t[2]*a.ymax+t[4],l=t[1]*a.xmax+t[3]*a.ymax+t[5];a.xmin=o[0]*(r+n)+o[2]*(s+e)+o[4],a.ymin=o[1]*(r+n)+o[3]*(s+e)+o[5],a.xmax=o[0]*(m+n)+o[2]*(l+e)+o[4],a.ymax=o[1]*(m+n)+o[3]*(l+e)+o[5]}return a}if(s)r(a,n*m,-e*m);else{const t=(0,_geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .geometryToCoordinates */ .$K)(a),r="polyline"===a.type?a.paths:a.rings,s=i.state.transform,m=i.state.inverseTransform;for(let o=0;o<t.length;o++){const r=t[o];for(let t=0;t<r.length;t++){const o=r[t],i=s[0]*o[0]+s[2]*o[1]+s[4],a=s[1]*o[0]+s[3]*o[1]+s[5],l=m[0]*(i+n)+m[2]*(a+e)+m[4],p=m[1]*(i+n)+m[3]*(a+e)+m[5];r[t]=x(o,l,p,void 0)}}"paths"in a?a.paths=r:a.rings=r}return a}function s(t,r,i,s){if("point"===t.type){const{x:n,y:e}=t,o=s?s[0]:n,a=s?s[1]:e,m=t.clone(),l=(n-o)*r+o,x=(e-a)*i+a;return m.x=l,m.y=x,m}if("multipoint"===t.type){const a=(0,_geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .geometryToCoordinates */ .$K)(t),m=(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)(),[l,p,y,f]=(0,_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getRingsOrPathsBounds */ .Yz)(m,[a]),u=s?s[0]:(l+y)/2,c=s?s[1]:(f+p)/2,h=t.clone(),g=h.points;for(let t=0;t<g.length;t++){const n=g[t],[e,o]=n,s=(e-u)*r+u,a=(o-c)*i+c;g[t]=x(n,s,a,void 0)}return h}if("extent"===t.type){const{xmin:n,xmax:e,ymin:o,ymax:a}=t,m=s?s[0]:(n+e)/2,l=s?s[1]:(a+o)/2,x=t.clone();if(x.xmin=(n-m)*r+m,x.ymax=(a-l)*i+l,x.xmax=(e-m)*r+m,x.ymin=(o-l)*i+l,x.xmin>x.xmax){const t=x.xmin,n=x.xmax;x.xmin=n,x.xmax=t}if(x.ymin>x.ymax){const t=x.ymin,n=x.ymax;x.ymin=n,x.ymax=t}return x}const a=(0,_geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .geometryToCoordinates */ .$K)(t),m=(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)(),[l,p,y,f]=(0,_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getRingsOrPathsBounds */ .Yz)(m,a),u=s?s[0]:(l+y)/2,c=s?s[1]:(f+p)/2,h=t.clone(),g="polyline"===h.type?h.paths:h.rings;for(let n=0;n<a.length;n++){const t=a[n];for(let e=0;e<t.length;e++){const o=t[e],[s,a]=o,m=(s-u)*r+u,l=(a-c)*i+c;g[n][e]=x(o,m,l,void 0)}}return"paths"in h?h.paths=g:h.rings=g,h}function a(t,n,e,o,r,i){const s=Math.sqrt((e-t)*(e-t)+(o-n)*(o-n));return Math.sqrt((r-t)*(r-t)+(i-n)*(i-n))/s}function m(n,e,o,r=!1){const i=Math.atan2(e.y-o.y,e.x-o.x)-Math.atan2(n.y-o.y,n.x-o.x),s=Math.atan2(Math.sin(i),Math.cos(i));return r?s:(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .rad2deg */ .KJ)(s)}function l(t,n,e,o){return x(t,t[0]+n,t[1]+e,null!=t[2]&&null!=o?t[2]+o:void 0)}function x(t,n,e,o){const r=[n,e];return t.length>2&&r.push(null!=o?o:t[2]),t.length>3&&r.push(t[3]),r}


/***/ }),

/***/ 38620:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ h)
/* harmony export */ });
/* unused harmony export colors */
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96220);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const o={main:new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A([255,127,0]),selected:new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A([255,255,255]),outline:new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A([0,0,0,.5]),selectedOutline:new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A([255,255,255]),hoverOutline:new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A([255,255,255]),secondary:new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A([255,255,255]),secondaryOutline:new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A([100,100,100]),transparent:new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A([0,0,0,0])};function t(e,o){Object.assign(e,o)}class s{constructor(e){this.size=8,this.hoverSize=10,this.color=o.main,this.hoverColor=o.main,this.outlineColor=o.outline,this.hoverOutlineColor=o.hoverOutline,t(this,e)}}class n{constructor(e){this.color=o.secondary,this.hoverColor=o.main,t(this,e)}}class r{constructor(e){this.color=o.transparent,this.hoverColor=o.transparent,this.outlineColor=o.main,this.hoverOutlineColor=o.main,this.stagedColor=o.transparent,this.stagedOutlineColor=o.secondary,t(this,e)}}class i{constructor(e){this.vertex=new s,this.midpoint=new s({color:o.secondary,outlineColor:o.secondaryOutline,size:6}),this.selected=new s({color:o.selected,hoverColor:o.selected,hoverOutlineColor:o.hoverOutline}),t(this,e)}}class l{constructor(e){this.center=new s({color:o.secondaryOutline}),this.fill=new r,this.line=new n,this.vertex=new s({color:o.selected,outlineColor:o.main,hoverColor:o.selected,hoverOutlineColor:o.secondaryOutline}),t(this,e)}}class c{constructor(e){this.reshapeGraphics=new i,this.transformGraphics=new l,t(this,e)}}const h=new c;


/***/ }),

/***/ 285:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ S)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52495);
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17306);
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85251);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(89882);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63863);
/* harmony import */ var _core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(60704);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24121);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(58359);
/* harmony import */ var _geometry_projectionUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(68490);
/* harmony import */ var _geometry_projection_projectPointToVector_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(42609);
/* harmony import */ var _support_elevationInfoUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(27451);
/* harmony import */ var _symbols_support_defaults_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(26207);
/* harmony import */ var _symbols_support_ElevationInfo_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(60973);
/* harmony import */ var _support_utils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(68928);
/* harmony import */ var _support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(49313);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let S=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{set graphic(t){this._circleCollisionCache=null,this._originalSymbol=t.symbol,this._set("graphic",t),this.attachSymbolChanged()}get elevationInfo(){const{layer:t}=this.graphic,e=t&&"elevationInfo"in t?t.elevationInfo:null,o=(0,_support_elevationInfoUtils_js__WEBPACK_IMPORTED_MODULE_14__/* .getGraphicEffectiveElevationMode */ .ky)(this.graphic),i=e?e.offset:0;return new _symbols_support_ElevationInfo_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A({mode:o,offset:i})}set focusedSymbol(t){t!==this._get("focusedSymbol")&&(this._set("focusedSymbol",t),this._updateGraphicSymbol(),this._circleCollisionCache=null)}grabbableForEvent(){return!0}set grabbing(t){t!==this._get("grabbing")&&(this._set("grabbing",t),this._updateGraphicSymbol())}set hovering(t){t!==this._get("hovering")&&(this._set("hovering",t),this._updateGraphicSymbol())}set selected(t){t!==this._get("selected")&&(this._set("selected",t),this._updateGraphicSymbol(),this.events.emit("select-changed",{action:t?"select":"deselect"}))}get _focused(){return this._get("hovering")||this._get("grabbing")}constructor(t){super(t),this.layer=null,this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.dragging=!1,this.cursor=null,this.consumesClicks=!0,this.events=new _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.EventEmitter,this._circleCollisionCache=null,this._graphicSymbolChangedHandle=null,this._originalSymbol=null}destroy(){this.detachSymbolChanged(),this._resetGraphicSymbol(),this._set("view",null)}intersectionDistance(t){const e=this.graphic;if(!1===e.visible)return null;const o=e.geometry;if(null==o)return null;const i=this._get("focusedSymbol"),s=null!=i?i:e.symbol;return"2d"===this.view.type?this._intersectDistance2D(this.view,t,o,s):this._intersectDistance3D(this.view,t,e)}attach(){this.attachSymbolChanged(),null!=this.layer&&this.layer.add(this.graphic)}detach(){this.detachSymbolChanged(),this._resetGraphicSymbol(),null!=this.layer&&this.layer.remove(this.graphic)}attachSymbolChanged(){this.detachSymbolChanged(),this._graphicSymbolChangedHandle=(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .watch */ .wB)((()=>this.graphic?.symbol),(t=>{null!=t&&t!==this.focusedSymbol&&t!==this._originalSymbol&&(this._originalSymbol=t,this._focused&&null!=this.focusedSymbol&&(this.graphic.symbol=this.focusedSymbol))}),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .sync */ .OH)}detachSymbolChanged(){null!=this._graphicSymbolChangedHandle&&(this._graphicSymbolChangedHandle.remove(),this._graphicSymbolChangedHandle=null)}onElevationChange(){}onViewChange(){}_updateGraphicSymbol(){this.graphic.symbol=this._focused&&null!=this.focusedSymbol?this.focusedSymbol:this._originalSymbol}_resetGraphicSymbol(){this.graphic.symbol=this._originalSymbol}_intersectDistance2D(t,e,o,i){if(null==(i=i||(0,_symbols_support_defaults_js__WEBPACK_IMPORTED_MODULE_15__/* .getDefaultSymbol2D */ .SF)(o)))return null;const s=1;let n=this._circleCollisionCache;if("point"===o.type&&"cim"===i.type&&"CIMPointSymbol"===i.data.symbol?.type&&i.data.symbol.symbolLayers){const{offsetX:l,offsetY:n,size:a}=(0,_support_utils_js__WEBPACK_IMPORTED_MODULE_18__/* .getSymbolInfo */ .T)(i),c=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_19__/* .screenPointObjectToArray */ .WA)(e,j),p=a/2,m=t.toScreen(o),u=m.x+l,y=m.y+n;return (0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_9__/* .squaredDistance */ .hG)(c,[u,y])<p*p?s:null}if("point"!==o.type||"simple-marker"!==i.type)return (0,_support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_17__/* .intersectsDrapedGeometry */ .t)(e,o,t)?s:null;if(null==n||!n.originalPoint.equals(o)){const e=o,s=t.spatialReference;if((0,_geometry_projectionUtils_js__WEBPACK_IMPORTED_MODULE_12__.canProjectWithoutEngine)(e.spatialReference,s)){const t=(0,_geometry_projectionUtils_js__WEBPACK_IMPORTED_MODULE_12__.project)(e,s);n={originalPoint:e.clone(),mapPoint:t,radiusPx:(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_19__/* .pt2px */ .Lz)(i.size)},this._circleCollisionCache=n}}if(null!=n){const o=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_19__/* .screenPointObjectToArray */ .WA)(e,j),a=t.toScreen?.(n.mapPoint);if(!a)return null;const c=n.radiusPx,p=a.x+(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_19__/* .pt2px */ .Lz)(i.xoffset),m=a.y-(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_19__/* .pt2px */ .Lz)(i.yoffset);return (0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_9__/* .squaredDistance */ .hG)(o,[p,m])<c*c?s:null}return null}_intersectDistance3D(t,e,o){const i=t.toMap(e,{include:[o]});return i&&(0,_geometry_projection_projectPointToVector_js__WEBPACK_IMPORTED_MODULE_13__/* .projectPointToVector */ .g)(i,C,t.renderSpatialReference)?(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_10__.j)(C,t.state.camera.eye):null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({constructOnly:!0,nonNullable:!0})],S.prototype,"graphic",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)()],S.prototype,"elevationInfo",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({constructOnly:!0,nonNullable:!0})],S.prototype,"view",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({value:null})],S.prototype,"focusedSymbol",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({constructOnly:!0})],S.prototype,"layer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)()],S.prototype,"interactive",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)()],S.prototype,"selectable",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)()],S.prototype,"grabbable",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({value:!1})],S.prototype,"grabbing",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)()],S.prototype,"dragging",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)()],S.prototype,"hovering",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({value:!1})],S.prototype,"selected",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)()],S.prototype,"cursor",void 0),S=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.views.interactive.GraphicManipulator")],S);const C=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_11__/* .create */ .vt)(),j=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_19__/* .createScreenPointArray */ .gs)();


/***/ }),

/***/ 75999:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BV: () => (/* binding */ P)
/* harmony export */ });
/* unused harmony exports CoordinateHelper2D, CoordinateHelper3D, CoordinateHelper4D */
/* harmony import */ var _core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60704);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59646);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24121);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58359);
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2662);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28152);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97066);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var x;!function(e){e[e.Z=0]="Z",e[e.M=1]="M"}(x||(x={}));class R{constructor(e){this.spatialReference=e}createVector(){return this._tag((0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)())}pointToVector(e){return this._tag((0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__/* .fromValues */ .fA)(e.x,e.y))}arrayToVector(e){return this._tag((0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__/* .fromValues */ .fA)(e[0],e[1]))}vectorToArray(e){return[e[0],e[1]]}pointToArray(e){return[e.x,e.y]}vectorToPoint(e,r=new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A){if(e)return r.x=e[0],r.y=e[1],r.z=void 0,r.m=void 0,r.spatialReference=this.spatialReference,r}arrayToPoint(e,r=new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A){return r.x=e[0],r.y=e[1],r.z=void 0,r.m=void 0,r.spatialReference=this.spatialReference,r}vectorToDehydratedPoint(e,r){if(e)return r??={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"},r.x=e[0],r.y=e[1],r.z=void 0,r.m=void 0,r.hasZ=!1,r.hasM=!1,r.spatialReference=this.spatialReference,r}lerp(e,t,a,i){return (0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__/* .lerp */ .Cc)(i,e,t,a)}addDelta(e,r,t){e[0]+=r,e[1]+=t}distance(r,t){return (0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__/* .distance */ .Io)(r,t)}getZ(e,r=void 0){return r}hasZ(){return!1}getM(e,r=void 0){return r}hasM(){return!1}clone(e){return this._tag((0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__/* .fromArray */ .ci)(e))}copy(e,r){return (0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__/* .copy */ .C)(r,e)}fromXYZ(e){return this._tag((0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__/* .fromValues */ .fA)(e[0],e[1]))}toXYZ(e,r=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .vt)()){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.i)(r,e[0],e[1],0)}pointToXYZ(e,r=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .vt)()){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.i)(r,e.x,e.y,0)}equals(e,r){return (0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__/* .equals */ .aI)(e,r)}_tag(e){return e}}class M{constructor(e,r){this._valueType=e,this.spatialReference=r}createVector(){return this._tag((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .vt)())}pointToVector(e){return this._tag((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .fromValues */ .fA)(e.x,e.y,this._valueType===x.Z?e.z:e.m))}arrayToVector(e){return this._tag((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .fromValues */ .fA)(e[0],e[1],e[2]||0))}vectorToArray(e){return[e[0],e[1],e[2]]}pointToArray(e){return this._valueType===x.Z?[e.x,e.y,e.z]:[e.x,e.y,e.m]}vectorToPoint(e,r=new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A){if(e)return r.x=e[0],r.y=e[1],r.z=this._valueType===x.Z?e[2]:void 0,r.m=this._valueType===x.M?e[2]:void 0,r.spatialReference=this.spatialReference,r}arrayToPoint(e,r=new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A){return r.x=e[0],r.y=e[1],r.z=this._valueType===x.Z?e[2]:void 0,r.m=this._valueType===x.M?e[2]:void 0,r.spatialReference=this.spatialReference,r}vectorToDehydratedPoint(e,r){if(!e)return;r??={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"};const t=this._valueType===x.Z,a=this._valueType===x.M;return r.x=e[0],r.y=e[1],r.z=t?e[2]:void 0,r.m=a?e[2]:void 0,r.hasZ=t,r.hasM=a,r.spatialReference=this.spatialReference,r}lerp(e,r,t,a){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.m)(a,e,r,t)}addDelta(e,r,t,a){e[0]+=r,e[1]+=t,this._valueType===x.Z&&(e[2]+=a)}distance(r,t){return this._valueType===x.Z?(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.j)(r,t):(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__/* .distance */ .Io)(w(r),w(t))}getZ(e,r=void 0){return this._valueType===x.Z?e[2]:r}hasZ(){return this._valueType===x.Z}getM(e,r=void 0){return this._valueType===x.M?e[2]:r}hasM(){return this._valueType===x.M}clone(e){return this._tag((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .fromArray */ .ci)(e))}copy(e,r){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.c)(r,e)}fromXYZ(e,r=0,t=0){return this._tag((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .fromValues */ .fA)(e[0],e[1],this._valueType===x.Z?e.length>2?e[2]:r:t))}toXYZ(e,r=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .vt)()){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.i)(r,e[0],e[1],this._valueType===x.Z?e[2]:0)}pointToXYZ(e,r=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .vt)()){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.i)(r,e.x,e.y,this._valueType===x.Z?e.z??0:0)}equals(e,r){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.G)(e,r)}_tag(e){return e}}class z{constructor(e){this.spatialReference=e}createVector(){return this._tag((0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__/* .create */ .vt)())}pointToVector(e){return this._tag((0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__/* .fromValues */ .fA)(e.x,e.y,e.z,e.m))}arrayToVector(e){return this._tag((0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__/* .fromValues */ .fA)(e[0],e[1],e[2]||0,e[3]||0))}vectorToArray(e){return[e[0],e[1],e[2],e[3]]}pointToArray(e){return[e.x,e.y,e.z,e.m]}vectorToPoint(e,r=new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A){return r.x=e[0],r.y=e[1],r.z=e[2],r.m=e[3],r.spatialReference=this.spatialReference,r}arrayToPoint(e,r=new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A){return r.x=e[0],r.y=e[1],r.z=e[2],r.m=e[3],r.spatialReference=this.spatialReference,r}vectorToDehydratedPoint(e,r){if(e)return r??={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"},r.x=e[0],r.y=e[1],r.z=e[2],r.m=e[3],r.hasZ=!0,r.hasM=!0,r.spatialReference=this.spatialReference,r}lerp(e,r,t,a){return (0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_4__.l)(a,e,r,t)}addDelta(e,r,t,a){e[0]+=r,e[1]+=t,e[2]+=a}distance(e,r){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.j)(V(e),V(r))}getZ(e){return e[2]}hasZ(){return!0}getM(e){return e[3]}hasM(){return!0}clone(e){return this._tag((0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__/* .fromArray */ .ci)(e))}copy(e,r){return (0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_4__.c)(r,e)}fromXYZ(e,r=0,t=0){return this._tag((0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__/* .fromValues */ .fA)(e[0],e[1],e.length>2?e[2]:r,t))}toXYZ(e,r=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .vt)()){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.i)(r,e[0],e[1],e[2])}pointToXYZ(e,r=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .vt)()){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.i)(r,e.x,e.y,e.z??0)}equals(e,r){return (0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_4__.e)(e,r)}_tag(e){return e}}function V(e){return e}function w(e){return e}function P(e,r,t){return e&&r?new z(t):r?new M(x.M,t):e?new M(x.Z,t):new R(t)}


/***/ }),

/***/ 4057:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  uA: () => (/* binding */ a),
  oH: () => (/* binding */ l),
  ZE: () => (/* binding */ EditGeometry_p),
  Li: () => (/* binding */ h),
  oF: () => (/* binding */ f)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/compilerUtils.js
var compilerUtils = __webpack_require__(73345);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Evented.js
var Evented = __webpack_require__(17306);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Polygon.js
var Polygon = __webpack_require__(62802);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Polyline.js
var Polyline = __webpack_require__(42238);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/coordinateHelper.js
var coordinateHelper = __webpack_require__(75999);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(87926);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/ViewingMode.js
var ViewingMode = __webpack_require__(10714);
;// ../node_modules/@arcgis/core/views/interactive/editGeometry/unnormalizationHelper.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(o,r){if(!r.supported)return;let e=1/0,p=-1/0;const n=r.upperBoundX-r.lowerBoundX;o.forEach((o=>{let u=o.pos[0];for(;u<r.lowerBoundX;)u+=n;for(;u>r.upperBoundX;)u-=n;e=Math.min(e,u),p=Math.max(p,u),o.pos[0]=u}));const u=p-e;n-u<u&&o.forEach((o=>{o.pos[0]<0&&(o.pos[0]+=n)}))}function p(e,p){const n=(0,spatialReferenceUtils/* getInfo */.Vp)(e);return p===ViewingMode/* ViewingMode */.RT.Global&&n?{supported:!0,lowerBoundX:n.valid[0],upperBoundX:n.valid[1]}:{supported:!1,lowerBoundX:null,upperBoundX:null}}

;// ../node_modules/@arcgis/core/views/interactive/editGeometry/EditGeometry.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class h{constructor(e){this.component=e,this.leftEdge=null,this.rightEdge=null,this.type="vertex",this.index=null}get pos(){return this._pos}set pos(e){this._pos=e,this.component.unnormalizeVertexPositions()}}class l{constructor(e,t,s){this.component=e,this.leftVertex=t,this.rightVertex=s,this.type="edge",t.rightEdge=this,s.leftEdge=this}}class a{constructor(e,t){this._spatialReference=e,this._viewingMode=t,this.vertices=[],this.edges=[],this.index=null}unnormalizeVertexPositions(){this.vertices.length<=1||e(this.vertices,p(this._spatialReference,this._viewingMode))}updateVertexIndex(e,t){if(0===this.vertices.length)return;const s=this.vertices[0];let i=null,r=e,o=t;do{i=r,i.index=o++,r=i.rightEdge?i.rightEdge.rightVertex:null}while(null!=r&&r!==s);i.leftEdge&&i!==this.vertices[this.vertices.length-1]&&this.swapVertices(this.vertices.indexOf(i),this.vertices.length-1)}getFirstVertex(){return this.vertices.at(0)}getLastVertex(){return this.vertices.at(-1)}isClosed(){return this.vertices.length>2&&null!==this.vertices[0].leftEdge}swapVertices(e,t){const s=this.vertices[e];this.vertices[e]=this.vertices[t],this.vertices[t]=s}iterateVertices(e){if(0===this.vertices.length)return;const t=this.vertices[0];let s=t;do{e(s,s.index),s=null!=s.rightEdge?s.rightEdge.rightVertex:null}while(s!==t&&null!=s)}}class EditGeometry_p extends Evented/* default */.A{constructor(e,t){super(),this.type=e,this.coordinateHelper=t,this._geometry=null,this._dirty=!0,this.components=[]}get geometry(){if(this._dirty){switch(this.type){case"point":this._geometry=this._toPoint();break;case"polyline":this._geometry=this._toPolyline();break;case"polygon":this._geometry=this._toPolygon();break;case"mesh":break;default:(0,compilerUtils/* neverReached */.Xb)(this.type)}this._dirty=!1}return this._geometry}get spatialReference(){return this.coordinateHelper.spatialReference}get allVertices(){return Array.from(this.iterateVertices())}*iterateVertices(){for(const e of this.components)for(const t of e.vertices)yield t}notifyChanges(e){this._dirty=!0,this.emit("change",e)}_toPoint(){return 0===this.components.length||0===this.components[0].vertices.length?null:this.coordinateHelper.vectorToPoint(this.components[0].vertices[0].pos)}_toPolyline(){const e=[],t=this.coordinateHelper.vectorToArray;for(const s of this.components){if(s.vertices.length<1)continue;const i=[];let r=s.vertices.find((e=>null==e.leftEdge));const o=r;do{i.push(t(r.pos)),r=r.rightEdge?r.rightEdge.rightVertex:null}while(r&&r!==o);e.push(i)}return new Polyline/* default */.A({paths:e,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})}_toPolygon(){const e=[],t=this.coordinateHelper.vectorToArray;for(const s of this.components){if(s.vertices.length<1)continue;const i=[],r=s.vertices[0];let o=r;const n=o;do{i.push(t(o.pos)),o=null!=o.rightEdge?o.rightEdge.rightVertex:null}while(o&&o!==n);s.isClosed()&&i.push(t(r.pos)),e.push(i)}return new Polygon/* default */.A({rings:e,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})}static fromGeometry(e,t){const s=e.spatialReference,i=(0,coordinateHelper/* createCoordinateHelper */.BV)(e.hasZ,e.hasM,s),r=new EditGeometry_p(e.type,i);switch(e.type){case"polygon":g(r,e,t);break;case"polyline":d(r,e,t);break;case"point":u(r,e,t);break;case"mesh":u(r,e.origin,t),r._geometry=e,r._dirty=!1}return r}}function g(t,s,i){const r=s.spatialReference,o=t.coordinateHelper,n=s.rings;for(let c=0;c<n.length;++c){const s=n[c],p=new a(r,i);p.index=c;const g=s.length>2&&(0,arrayUtils/* equals */.aI)(s[0],s[s.length-1]),d=g?s.length-1:s.length;for(let e=0;e<d;++e){const t=o.arrayToVector(s[e]),i=new h(p);p.vertices.push(i),i.pos=t,i.index=e}const u=p.vertices.length-1;for(let e=0;e<u;++e){const t=p.vertices[e],s=p.vertices[e+1],i=new l(p,t,s);p.edges.push(i)}if(g){const e=new l(p,p.vertices[p.vertices.length-1],p.vertices[0]);p.edges.push(e)}t.components.push(p)}}function d(e,t,s){const i=t.spatialReference,r=e.coordinateHelper,o=t.paths;for(let n=0;n<o.length;++n){const t=o[n],c=new a(i,s);c.index=n;const p=t.length;for(let e=0;e<p;++e){const s=r.arrayToVector(t[e]),i=new h(c);c.vertices.push(i),i.pos=s,i.index=e}const g=c.vertices.length-1;for(let e=0;e<g;++e){const t=c.vertices[e],s=c.vertices[e+1],i=new l(c,t,s);c.edges.push(i)}e.components.push(c)}}function u(e,t,s){const i=t.spatialReference,r=e.coordinateHelper,o=new a(i,s);o.index=0;const n=new h(o);n.index=0,n.pos=r.pointToVector(t),o.vertices.push(n),e.components.push(o)}function f(e){return"mesh"===e.type}


/***/ }),

/***/ 59147:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  p: () => (/* binding */ E)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Evented.js
var Evented = __webpack_require__(17306);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/handleUtils.js
var handleUtils = __webpack_require__(20464);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(58359);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/coordsUtils.js
var coordsUtils = __webpack_require__(65319);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/editGeometry/EditGeometry.js + 1 modules
var EditGeometry = __webpack_require__(4057);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/editGeometry/interfaces.js
var interfaces = __webpack_require__(35880);
;// ../node_modules/@arcgis/core/views/interactive/editGeometry/operations/AppendVertex.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class i{constructor(e,t,i){this._editGeometry=e,this._component=t,this._pos=i,this._addedVertex=null,this._originalEdge=null,this._left=null,this._right=null}apply(){let i="redo";null==this._addedVertex&&(i="apply",this._addedVertex=new EditGeometry/* Vertex */.Li(this._component));const s=this._component.getLastVertex();if(null==s)this._component.vertices.push(this._addedVertex),this._addedVertex.pos=this._pos,this._addedVertex.index=0;else{let e=null;s.rightEdge&&(this._originalEdge=s.rightEdge,e=this._originalEdge.rightVertex,this._component.edges.splice(this._component.edges.indexOf(this._originalEdge),1)),this._component.vertices.push(this._addedVertex),this._addedVertex.pos=this._pos,null==this._left&&(this._left=new EditGeometry/* Edge */.oH(this._component,s,this._addedVertex)),this._component.edges.push(this._left),s.rightEdge=this._left,null!=this._originalEdge&&null!=e&&(null==this._right&&(this._right=new EditGeometry/* Edge */.oH(this._component,this._addedVertex,e)),this._component.edges.push(this._right),e.leftEdge=this._right),this._component.updateVertexIndex(this._addedVertex,s.index+1)}this._editGeometry.notifyChanges({operation:i,addedVertices:[this._addedVertex]})}undo(){null!=this._addedVertex&&(this._component.vertices.splice(this._component.vertices.indexOf(this._addedVertex),1),null!=this._left&&(this._component.edges.splice(this._component.edges.indexOf(this._left),1),this._left.leftVertex.rightEdge=null),null!=this._right&&(this._component.edges.splice(this._component.edges.indexOf(this._right),1),this._right.rightVertex.leftEdge=null),null!=this._originalEdge&&(this._component.edges.push(this._originalEdge),this._originalEdge.leftVertex.rightEdge=this._originalEdge,this._originalEdge.rightVertex.leftEdge=this._originalEdge),null!=this._left?this._component.updateVertexIndex(this._left.leftVertex,this._left.leftVertex.index):this._component.updateVertexIndex(this._addedVertex,0),this._editGeometry.notifyChanges({operation:"undo",removedVertices:[this._addedVertex]}))}accumulate(){return!1}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/editGeometry/operations/UpdateVertices.js
var UpdateVertices = __webpack_require__(63387);
;// ../node_modules/@arcgis/core/views/interactive/editGeometry/operations/RemoveVertices.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class RemoveVertices_t{constructor(e,t,r=0){this._editGeometry=e,this._vertices=t,this._minNumberOfVertices=r,this.removedVertices=null}apply(){let e="redo";if(null==this.removedVertices){const t=this.removedVertices=[];this._vertices.forEach((e=>{const r=this._removeVertex(e);null!=r&&t.push(r)})),e="apply"}else this.removedVertices.forEach((e=>{this._removeVertex(e.removedVertex)}));this._editGeometry.notifyChanges({operation:e,removedVertices:this._vertices})}undo(){this.removedVertices?.forEach((e=>{this._undoRemoveVertex(e)})),this._editGeometry.notifyChanges({operation:"undo",addedVertices:this._vertices})}accumulate(){return!1}_removeVertex(t){const r=t.component;if(r.vertices.length<=this._minNumberOfVertices)return null;const i={removedVertex:t,createdEdge:null},s=t.leftEdge,d=t.rightEdge;return r.vertices.splice(r.vertices.indexOf(t),1),s&&(r.edges.splice(r.edges.indexOf(s),1),s.leftVertex.rightEdge=null),d&&(r.edges.splice(r.edges.indexOf(d),1),d.rightVertex.leftEdge=null),0===t.index&&d&&this._vertices.length>0&&r.swapVertices(r.vertices.indexOf(d.rightVertex),0),s&&d&&(i.createdEdge=new EditGeometry/* Edge */.oH(r,s.leftVertex,d.rightVertex),r.edges.push(i.createdEdge)),d&&r.updateVertexIndex(d.rightVertex,d.rightVertex.index-1),i}_undoRemoveVertex(e){const t=e.removedVertex,r=e.removedVertex.component,i=t.leftEdge,s=t.rightEdge;e.createdEdge&&r.edges.splice(r.edges.indexOf(e.createdEdge),1),r.vertices.push(t),i&&(r.edges.push(i),i.leftVertex.rightEdge=i),s&&(r.edges.push(s),s.rightVertex.leftEdge=s),r.updateVertexIndex(t,t.index)}}

;// ../node_modules/@arcgis/core/views/interactive/editGeometry/operations/SplitEdge.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class SplitEdge_i{constructor(e,t,i){this._editGeometry=e,this._edge=t,this._t=i,this.createdVertex=null,this._left=null,this._right=null}apply(){let i="redo";const r=this._edge,s=r.component,d=r.leftVertex,h=r.rightVertex;s.edges.splice(s.edges.indexOf(r),1),null==this.createdVertex&&(i="apply",this.createdVertex=new EditGeometry/* Vertex */.Li(r.component)),s.vertices.push(this.createdVertex),this.createdVertex.pos=this._editGeometry.coordinateHelper.lerp(r.leftVertex.pos,r.rightVertex.pos,this._t,this._editGeometry.coordinateHelper.createVector()),null==this._left&&(this._left=new EditGeometry/* Edge */.oH(s,d,this.createdVertex)),this._left.leftVertex.leftEdge?s.edges.push(this._left):s.edges.unshift(this._left),d.rightEdge=this._left,null==this._right&&(this._right=new EditGeometry/* Edge */.oH(s,this.createdVertex,h)),s.edges.push(this._right),h.leftEdge=this._right,s.updateVertexIndex(this.createdVertex,d.index+1),this._editGeometry.notifyChanges({operation:i,addedVertices:[this.createdVertex]})}undo(){if(null==this.createdVertex||null==this._left||null==this._right)return null;const e=this._edge,t=e.component,i=this.createdVertex.leftEdge,r=this.createdVertex.rightEdge,s=i?.leftVertex,d=r?.rightVertex;t.vertices.splice(t.vertices.indexOf(this.createdVertex),1),t.edges.splice(t.edges.indexOf(this._left),1),t.edges.splice(t.edges.indexOf(this._right),1),this._edge.leftVertex.leftEdge?t.edges.push(this._edge):t.edges.unshift(this._edge),s&&(s.rightEdge=e),d&&(d.leftEdge=e),s&&t.updateVertexIndex(s,s.index),this._editGeometry.notifyChanges({operation:"undo",removedVertices:[this.createdVertex]})}accumulate(){return!1}}

;// ../node_modules/@arcgis/core/views/interactive/editGeometry/operations/SetVertexPosition.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class SetVertexPosition_t{constructor(t,e,i){this._editGeometry=t,this._vertex=e,this._pos=i}apply(){const t=null==this._originalPosition;t&&(this._originalPosition=this._vertex.pos),this._apply(t?"apply":"redo")}undo(){this._vertex.pos=this._originalPosition,this._editGeometry.notifyChanges({operation:"undo",updatedVertices:[this._vertex]})}accumulate(e){return e instanceof SetVertexPosition_t&&e._vertex===this._vertex&&(this._pos=e._pos,this._apply("apply"),!0)}_apply(t){this._vertex.pos=this._pos,this._editGeometry.components.forEach((t=>t.unnormalizeVertexPositions())),this._editGeometry.notifyChanges({operation:t,updatedVertices:[this._vertex]})}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
;// ../node_modules/@arcgis/core/views/interactive/editGeometry/operations/CloseComponent.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class r{constructor(e,t){this._editGeometry=e,this._component=t,this._createdEdge=null}apply(){let e="redo";if(null==this._createdEdge){e="apply";const r=this._component.getFirstVertex(),i=this._component.getLastVertex();if(this._component.isClosed()||this._component.vertices.length<3||null==r||null==i)return;this._createdEdge=new EditGeometry/* Edge */.oH(this._component,i,r)}this._createdEdge.leftVertex.rightEdge=this._createdEdge,this._createdEdge.rightVertex.leftEdge=this._createdEdge,this._component.edges.push(this._createdEdge),this._editGeometry.notifyChanges({operation:e})}undo(){null!=this._createdEdge&&((0,arrayUtils/* remove */.TF)(this._component.edges,this._createdEdge),this._createdEdge.leftVertex.rightEdge=null,this._createdEdge.rightVertex.leftEdge=null,this._editGeometry.notifyChanges({operation:"undo"}))}accumulate(){return!1}}

;// ../node_modules/@arcgis/core/views/interactive/editGeometry/operations/MoveMesh.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class MoveMesh_t{constructor(t,e,i,s){this._editGeometry=t,this.dx=e,this.dy=i,this.dz=s,this._firstTime=!0}apply(){const t=this._firstTime?"apply":"redo";this._firstTime=!1,this._apply(t,this.dx,this.dy,this.dz)}undo(){this._apply("undo",-this.dx,-this.dy,-this.dz)}accumulate(e){const i=this._editGeometry.geometry;return e instanceof MoveMesh_t&&e._editGeometry.geometry===i&&(this._apply("apply",e.dx,e.dy,e.dz),this.dx+=e.dx,this.dy+=e.dy,this.dz+=e.dz,!0)}_apply(t,e,i,s){const o=this._editGeometry.geometry;o.offset(e,i,s);const d=this._editGeometry.components[0].getFirstVertex();if(!d)return;const r=this._editGeometry.coordinateHelper;d.pos=r.pointToVector(o.origin),this._editGeometry.notifyChanges({operation:t,updatedVertices:[d]})}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/editGeometry/operations/MoveVertex.js
var MoveVertex = __webpack_require__(61434);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/editGeometry/operations/OffsetEdgeVertex.js
var OffsetEdgeVertex = __webpack_require__(12677);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/editGeometry/operations/RotateVertex.js
var RotateVertex = __webpack_require__(36504);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/editGeometry/operations/ScaleVertex.js
var ScaleVertex = __webpack_require__(37673);
;// ../node_modules/@arcgis/core/views/interactive/editGeometry/operations/SetAllVertexPositions.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class SetAllVertexPositions_i{constructor(i,t){this._editGeometry=i,this._newPositions=t}apply(){const i=null==this._originalPositions?"apply":"redo";if(!this._originalPositions){const i=this._editGeometry.coordinateHelper;this._originalPositions=this._editGeometry.allVertices.map((t=>i.clone(t.pos)))}this._apply(i,this._newPositions)}undo(){this._originalPositions&&this._apply("undo",this._originalPositions)}accumulate(t){return t instanceof SetAllVertexPositions_i&&(this._newPositions=t._newPositions,this._apply("apply",this._newPositions),!0)}_apply(i,t){const o=this._editGeometry.coordinateHelper,s=this._editGeometry.allVertices;for(let e=0;e<s.length;e++)o.copy(t[e],s[e].pos);this._editGeometry.components.forEach((i=>i.unnormalizeVertexPositions())),this._editGeometry.notifyChanges({operation:i,updatedVertices:s})}}

;// ../node_modules/@arcgis/core/views/interactive/editGeometry/operations/UndoGroup.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var t;const s=Symbol();class o{static{t=s}constructor(s){this._operations=[],this._closed=!1,this[t]=!0,s&&(this._operations=s,this._closed=!0)}close(){this._closed=!0}apply(){for(const t of this._operations)t.apply()}undo(){for(let t=this._operations.length-1;t>=0;t--)this._operations[t].undo()}accumulate(t){if(this._closed)return!1;const s=this._operations.length?this._operations[this._operations.length-1]:null;return s&&s.accumulate(t)||(this._operations.push(t),t.apply()),!0}}

;// ../node_modules/@arcgis/core/views/interactive/editGeometry/EditGeometryOperations.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class E extends Evented/* default */.A{constructor(t,e){super(),this.data=t,this.viewingMode=e,this._undoStack=[],this._redoStack=[],this._listener=this.data.on("change",(t=>{t.addedVertices&&this.emit("vertex-add",{type:"vertex-add",vertices:t.addedVertices,operation:t.operation}),t.removedVertices&&this.emit("vertex-remove",{type:"vertex-remove",vertices:t.removedVertices,operation:t.operation}),t.updatedVertices&&this.emit("vertex-update",{type:"vertex-update",vertices:t.updatedVertices,operation:t.operation})}))}destroy(){this._listener.remove()}splitEdge(t,e){return this._apply(new SplitEdge_i(this.data,t,e))}updateVertices(t,e,r=interfaces/* AccumulationBehavior */.Y.ACCUMULATE_STEPS){return this._apply(new UpdateVertices/* UpdateVertices */.D(this.data,t,e),r)}move(t,e,r,s=interfaces/* AccumulationBehavior */.Y.ACCUMULATE_STEPS){return (0,EditGeometry/* isMeshEditGeometry */.oF)(this.data)?this._apply(new MoveMesh_t(this.data,t,e,r),s):this.moveVertices(this.data.allVertices,t,e,r,s)}moveVertices(t,e,r,s,o=interfaces/* AccumulationBehavior */.Y.ACCUMULATE_STEPS){return (0,EditGeometry/* isMeshEditGeometry */.oF)(this.data)?this._apply(new MoveMesh_t(this.data,e,r,s),o):this.updateVertices(t,new MoveVertex/* MoveVertex */.a(this.data.coordinateHelper,e,r,s),o)}scale(t,e,r,s,i=interfaces/* AccumulationBehavior */.Y.ACCUMULATE_STEPS,o=UpdateVertices/* AccumulationType */.K.CUMULATIVE){return this.scaleVertices(this.data.allVertices,t,e,r,s,i,o)}scaleVertices(t,e,r,s,i,o=interfaces/* AccumulationBehavior */.Y.ACCUMULATE_STEPS,n=UpdateVertices/* AccumulationType */.K.CUMULATIVE){return this.updateVertices(t,new ScaleVertex/* ScaleVertex */.j(e,r,s,i,n),o)}rotate(t,e,r=interfaces/* AccumulationBehavior */.Y.ACCUMULATE_STEPS,s=UpdateVertices/* AccumulationType */.K.CUMULATIVE){return this.rotateVertices(this.data.allVertices,t,e,r,s)}rotateVertices(t,e,r,s=interfaces/* AccumulationBehavior */.Y.ACCUMULATE_STEPS,i=UpdateVertices/* AccumulationType */.K.CUMULATIVE){return this.updateVertices(t,new RotateVertex/* RotateVertex */.m(e,r,i),s)}removeVertices(t){return this._apply(new RemoveVertices_t(this.data,t,this._minNumVerticesPerType))}appendVertex(t){return 0===this.data.components.length?null:this._apply(new i(this.data,this.data.components[0],t))}setVertexPosition(t,e){return this._apply(new SetVertexPosition_t(this.data,t,e))}offsetEdge(t,e,r,s=interfaces/* AccumulationBehavior */.Y.ACCUMULATE_STEPS){return this.updateVertices([e.leftVertex,e.rightVertex],new OffsetEdgeVertex/* OffsetEdgeVertex */.L(this.data.coordinateHelper,t,e,r),s)}trySetGeometry(t,e=interfaces/* AccumulationBehavior */.Y.ACCUMULATE_STEPS){const{data:r}=this,{coordinateHelper:n}=r;if(r.type!==t.type||!r.spatialReference.equals(t.spatialReference)||n.hasZ()!==t.hasZ||n.hasM()!==t.hasM||!(0,coordsUtils/* hasCompatibleTopology */.It)(r.geometry,t)||(0,EditGeometry/* isMeshEditGeometry */.oF)(r))return;const p=Array.from(EditGeometry/* EditGeometry */.ZE.fromGeometry(t,this.viewingMode).iterateVertices(),(t=>t.pos));return this.setVertexPositions(p,e)}setVertexPositions(t,e=interfaces/* AccumulationBehavior */.Y.ACCUMULATE_STEPS){return this._apply(new SetAllVertexPositions_i(this.data,t),e)}createResetState(){if((0,EditGeometry/* isMeshEditGeometry */.oF)(this.data))return this._createResetStateMesh();const t=this.data.geometry.clone();return (0,handleUtils/* makeHandle */.hA)((()=>this.trySetGeometry(t)))}closeComponent(t){return this.data.components.includes(t)?this._apply(new r(this.data,t)):null}canRemoveVertex(t){return t.vertices.length>this._minNumVerticesPerType}createUndoGroup(){const t=new o;return this._apply(t),(0,handleUtils/* makeHandle */.hA)((()=>t.close()))}undo(){if(this._undoStack.length>0){const t=this._undoStack.pop();return t.undo(),this._redoStack.push(t),t}return null}redo(){if(this._redoStack.length>0){const t=this._redoStack.pop();return t.apply(),this._undoStack.push(t),t}return null}get canUndo(){return this._undoStack.length>0}get canRedo(){return this._redoStack.length>0}get lastOperation(){return this._undoStack.length>0?this._undoStack[this._undoStack.length-1]:null}get _minNumVerticesPerType(){switch(this.data.type){case"point":return 1;case"polyline":return 2;case"polygon":return 3;default:return 0}}_apply(t,e=interfaces/* AccumulationBehavior */.Y.ACCUMULATE_STEPS){return e!==interfaces/* AccumulationBehavior */.Y.NEW_STEP&&null!=this.lastOperation&&this.lastOperation.accumulate(t)||(t.apply(),this._undoStack.push(t),this._redoStack=[]),t}_createResetStateMesh(){if(!(0,EditGeometry/* isMeshEditGeometry */.oF)(this.data))return (0,handleUtils/* makeHandle */.hA)();const t=this.data.geometry,{vertexSpace:s}=t;if(s.origin){const i=(0,vec3f64/* clone */.o8)(s.origin);return (0,handleUtils/* makeHandle */.hA)((()=>{t.vertexSpace.origin=i}))}const o=t.vertexAttributes.clonePositional();return (0,handleUtils/* makeHandle */.hA)((()=>{t.vertexAttributes=o,t.vertexAttributesChanged()}))}static fromGeometry(t,e){return new E(EditGeometry/* EditGeometry */.ZE.fromGeometry(t,e),e)}}


/***/ }),

/***/ 35880:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ E)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var E;!function(E){E[E.NEW_STEP=0]="NEW_STEP",E[E.ACCUMULATE_STEPS=1]="ACCUMULATE_STEPS"}(E||(E={}));


/***/ }),

/***/ 61434:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class t{constructor(t,s,d,h){this._helper=t,this.dx=s,this.dy=d,this.dz=h}_move(t,s,d,h){this._helper.addDelta(t.pos,s,d,h)}apply(t){this._move(t,this.dx,this.dy,this.dz)}undo(t){this._move(t,-this.dx,-this.dy,-this.dz)}canAccumulate(s){return s instanceof t}accumulate(t,s){this._move(t,s.dx,s.dy,s.dz)}accumulateParams(t){this.dx+=t.dx,this.dy+=t.dy,this.dz+=t.dz}}


/***/ }),

/***/ 12677:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ z),
/* harmony export */   L: () => (/* binding */ P)
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92504);
/* harmony import */ var _core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60704);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59646);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24121);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58359);
/* harmony import */ var _geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38774);
/* harmony import */ var _geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16597);
/* harmony import */ var _support_geometry2dUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41561);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class P{get plane(){return this._plane}get requiresSplitEdgeLeft(){return!this._left.isOriginalDirection}get requiresSplitEdgeRight(){return!this._right.isOriginalDirection}get edgeDirection(){return this._edgeDirection}constructor(t,i,e,s=0,n=j.IMMEDIATE){this._helper=t,this._planeType=i,this._edge=e,this.distance=s,this._plane=(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_5__/* .create */ .vt)(),this._offsetPlane=(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_5__/* .create */ .vt)(),this._minDistance=-1/0,this._maxDistance=1/0,this._selectedArrow=1,n===j.IMMEDIATE&&this._initialize()}_initialize(){this._initializeNeighbors(),this._initializePlane(),this._initializeDistanceConstraints()}_initializeNeighbors(){const t=this._toXYZ(this._edge.leftVertex.pos),i=this._toXYZ(this._edge.leftVertex.leftEdge?.leftVertex?.pos),e=this._toXYZ(this._edge.rightVertex.pos),s=this._toXYZ(this._edge.rightVertex.rightEdge?.rightVertex?.pos);this._edgeDirection=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.E)((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),t,e),i?(this._left=this._computeNeighbor(t,i,this._edgeDirection),this._right=this._computeNeighbor(e,s,this._edgeDirection,this._left)):(this._right=this._computeNeighbor(e,s,this._edgeDirection),this._left=this._computeNeighbor(t,i,this._edgeDirection,this._right))}_toXYZ(t){return null!=t?this._helper.toXYZ(t):null}_pointToXYZ(t){return this._toXYZ(this._helper.pointToVector(t))}_computeNeighbor(t,i,e,s){const n=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)();if(i){(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.E)(n,t,i);const s=!this._passesBisectingAngleThreshold(n,e);return{start:t,end:i,direction:s?this._bisectVectorsPerpendicular(e,n):n,isOriginalDirection:!s}}return this._helper.hasZ()?s&&((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.h)(n,e,s.direction),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.h)(n,n,e),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.n)(n,n),Math.sign(n[1])!==Math.sign(e[0])&&(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.g)(n,n,-1)):(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.i)(n,-e[1],e[0],0),{start:t,end:i,direction:n,isOriginalDirection:!0}}_passesBisectingAngleThreshold(t,i){const e=Math.abs((0,_geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_6__/* .angle */ .g7)(i,t));return e>=y&&e<=Math.PI-y}_bisectVectorsPerpendicular(t,i){const e=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.e)(t,i)<0?t:(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.u)((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),t),s=Math.abs((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.e)(e,i));if(!(s<A||s>1-A))return this._bisectDirection(e,i);const n=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.h)((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),e,[0,0,1]);return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.n)(n,n)}_bisectDirection(t,i){const e=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.f)((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),t,i);return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.n)(e,e)}_initializePlane(){const t=this._computeNormalDirection(this._left),i=this._computeNormalDirection(this._right);(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.e)(t,i)<0&&(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.u)(i,i),(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_5__/* .fromPositionAndNormal */ .O_)(this._left.start,this._bisectDirection(t,i),this._plane)}_computeNormalDirection(t){const i=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.h)((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),t.direction,this._edgeDirection);(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.n)(i,i);const e=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.h)((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),this._edgeDirection,i);return this._planeType===z.XY&&(e[2]=0),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.n)(e,e)}_initializeDistanceConstraints(){null==this._left.end||this.requiresSplitEdgeLeft||this._updateDistanceConstraint((0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_5__/* .signedDistance */ .mN)(this._plane,this._left.end)),null==this._right.end||this.requiresSplitEdgeRight||this._updateDistanceConstraint((0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_5__/* .signedDistance */ .mN)(this._plane,this._right.end)),this._updateIntersectDistanceConstraint(this._plane)}_updateDistanceConstraint(t){t<=0&&(this._minDistance=Math.max(this._minDistance,t)),t>=0&&(this._maxDistance=Math.min(this._maxDistance,t))}_updateIntersectDistanceConstraint(t){const i=(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_5__/* .getNormal */ .Qj)(t),h=this._edgeDirection,o=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.f)((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),this._left.start,this._left.direction),a=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.f)((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),this._right.start,this._right.direction),_=this._pointInBasis2D((0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)(),i,h,this._left.start),l=this._pointInBasis2D((0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)(),i,h,o),p=this._pointInBasis2D((0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)(),i,h,this._right.start),d=this._pointInBasis2D((0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)(),i,h,a),[u]=(0,_support_geometry2dUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .intersectLineAndRay */ .jI)({start:l,end:_,type:_support_geometry2dUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .LineType */ .Vv.LINE},{start:d,end:p,type:_support_geometry2dUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .LineType */ .Vv.LINE});if(!u)return;const m=(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_1__/* .subtract */ .Re)((0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)(),_,l);(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_1__/* .normalize */ .S8)(m,m);const D=(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_1__/* .subtract */ .Re)((0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)(),u,l),E=(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_1__/* .dot */ .Om)(m,D),I=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.f)((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),o,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.g)((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),this._left.direction,-E)),M=(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_5__/* .signedDistance */ .mN)(t,I);this._updateDistanceConstraint(M)}_pointInBasis2D(t,i,e,s){return t[0]=(0,_geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_6__/* .projectPointSignedLength */ .gr)(i,s),t[1]=(0,_geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_6__/* .projectPointSignedLength */ .gr)(e,s),t}_offset(t,i){Number.isFinite(this._minDistance)&&(i=Math.max(this._minDistance,i)),Number.isFinite(this._maxDistance)&&(i=Math.min(this._maxDistance,i)),(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_5__/* .copy */ .C)(this._offsetPlane,this._plane),this._offsetPlane[3]-=i;const e=(t,i,e)=>null!=i&&(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_5__/* .intersectLine */ .U5)(this._offsetPlane,t,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.f)((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),t,i),e),s=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)();(t===this._edge.leftVertex?e(this._left.start,this._left.direction,s):e(this._right.start,this._right.direction,s))&&this._helper.copy(this._helper.fromXYZ(s,void 0,this._helper.getM(t.pos)),t.pos)}selectArrowFromStartPoint(t){this._selectedArrow=(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_5__/* .isPointInside */ .Tj)(this.plane,this._pointToXYZ(t))?1:-1}get selectedArrow(){return this._selectedArrow}signedDistanceToPoint(t){return (0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_5__/* .signedDistance */ .mN)(this.plane,this._pointToXYZ(t))}clampedStartAndEnd(i){const e=this._helper.toXYZ(this._helper.pointToVector(i)),s=(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_5__/* .projectPoint */ ._I)(this._plane,e,(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)()),n=(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_5__/* .signedDistance */ .mN)(this._plane,e),r=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .clamp */ .qE)(n,this._minDistance,this._maxDistance);return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.m)(e,s,e,r/n),{start:s,end:e}}apply(t){this._offset(t,this.distance)}undo(t){this._offset(t,0)}canAccumulate(t){return t instanceof P&&this._edge.leftVertex.index===t._edge.leftVertex.index&&this._edge.rightVertex.index===t._edge.rightVertex.index&&this._edge.component===t._edge.component&&this._maybeEqualsVec3(this._left.direction,t._left.direction)&&this._maybeEqualsVec3(this._right.direction,t._right.direction)&&(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.G)((0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_5__/* .getNormal */ .Qj)(this._plane),(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_5__/* .getNormal */ .Qj)(t._plane))}accumulate(t,i){const e=this._plane[3]-i._plane[3]+i.distance;this._offset(t,e)}accumulateParams(t){const i=t.distance-t._plane[3];this.distance=i+this._plane[3]}clone(){const t=new P(this._helper,this._planeType,this._edge,this.distance,j.DEFERRED);return (0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_5__/* .copy */ .C)(t._plane,this._plane),(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_5__/* .copy */ .C)(t._offsetPlane,this._offsetPlane),t._maxDistance=this._maxDistance,t._minDistance=this._minDistance,t._left=this._cloneNeighbor(this._left),t._right=this._cloneNeighbor(this._right),t._edgeDirection=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.c)((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),this._edgeDirection),t}_maybeEqualsVec3(t,i){return null==t&&null==i||null!=t&&null!=i&&(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.G)(t,i)}_cloneNeighbor({start:t,end:i,direction:e,isOriginalDirection:s}){return{start:(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.c)((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),t),end:null!=i?(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.c)((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),i):null,direction:(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.c)((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),e),isOriginalDirection:s}}}const y=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .deg2rad */ .kU)(15),A=.001;var z,j;!function(t){t[t.XYZ=0]="XYZ",t[t.XY=1]="XY"}(z||(z={})),function(t){t[t.IMMEDIATE=0]="IMMEDIATE",t[t.DEFERRED=1]="DEFERRED"}(j||(j={}));


/***/ }),

/***/ 36504:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85569);
/* harmony import */ var _core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60704);
/* harmony import */ var _UpdateVertices_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63387);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class e{constructor(t,a,e=_UpdateVertices_js__WEBPACK_IMPORTED_MODULE_2__/* .AccumulationType */ .K.CUMULATIVE){this.origin=t,this.angle=a,this._accumulationType=e}_rotate(t,i){(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_1__/* .rotate */ .e$)(t.pos,t.pos,this.origin,i)}apply(t){this._rotate(t,this.angle)}undo(t){this._rotate(t,-this.angle)}canAccumulate(a){return a instanceof e&&(0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .equals */ .aI)(this.origin,a.origin)}accumulate(t,a){const e=a._accumulationType===_UpdateVertices_js__WEBPACK_IMPORTED_MODULE_2__/* .AccumulationType */ .K.REPLACE;this._rotate(t,e?a.angle-this.angle:a.angle)}accumulateParams(t){const a=t._accumulationType===_UpdateVertices_js__WEBPACK_IMPORTED_MODULE_2__/* .AccumulationType */ .K.REPLACE;this.angle=a?t.angle:this.angle+t.angle}}


/***/ }),

/***/ 37673:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85569);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59646);
/* harmony import */ var _core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60704);
/* harmony import */ var _UpdateVertices_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63387);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class c{constructor(t,s,c,o,r=_UpdateVertices_js__WEBPACK_IMPORTED_MODULE_3__/* .AccumulationType */ .K.CUMULATIVE){this.origin=t,this.axis1=s,this.factor1=c,this.factor2=o,this._accumulationType=r,this.axis2=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__/* .fromValues */ .fA)(s[1],-s[0])}_scale(t,i,a){(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_2__/* .projectAndScale */ .Vj)(t.pos,t.pos,this.origin,this.axis1,i),(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_2__/* .projectAndScale */ .Vj)(t.pos,t.pos,this.origin,this.axis2,a)}apply(t){this._scale(t,this.factor1,this.factor2)}undo(t){this._scale(t,1/this.factor1,1/this.factor2)}canAccumulate(i){return i instanceof c&&(0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .equals */ .aI)(this.origin,i.origin)&&(0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .equals */ .aI)(this.axis1,i.axis1)}accumulate(t,i){i._accumulationType===_UpdateVertices_js__WEBPACK_IMPORTED_MODULE_3__/* .AccumulationType */ .K.REPLACE?this._scale(t,i.factor1/this.factor1,i.factor2/this.factor2):this._scale(t,i.factor1,i.factor2)}accumulateParams(t){const i=t._accumulationType===_UpdateVertices_js__WEBPACK_IMPORTED_MODULE_3__/* .AccumulationType */ .K.REPLACE;this.factor1=i?t.factor1:this.factor1*t.factor1,this.factor2=i?t.factor2:this.factor2*t.factor2}}


/***/ }),

/***/ 63387:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ t),
/* harmony export */   K: () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class t{constructor(t,e,i){this._editGeometry=t,this._vertices=e,this.operation=i,this._undone=!1}_notifyChanges(t){this._editGeometry.components.forEach((t=>t.unnormalizeVertexPositions())),this._editGeometry.notifyChanges({operation:t,updatedVertices:this._vertices})}apply(){this._vertices.forEach((t=>this.operation.apply(t))),this._notifyChanges(this._undone?"redo":"apply")}undo(){this._vertices.forEach((t=>this.operation.undo(t))),this._undone=!0,this._notifyChanges("undo")}canAccumulate(t){if(this._undone||t._vertices.length!==this._vertices.length)return!1;for(let e=0;e<t._vertices.length;++e)if(t._vertices[e]!==this._vertices[e])return!1;return this.operation.canAccumulate(t.operation)}accumulate(e){return!!(e instanceof t&&this.canAccumulate(e))&&(this._vertices.forEach((t=>this.operation.accumulate(t,e.operation))),this.operation.accumulateParams(e.operation),this._notifyChanges("apply"),!0)}}var e;!function(t){t[t.CUMULATIVE=0]="CUMULATIVE",t[t.REPLACE=1]="REPLACE"}(e||(e={}));


/***/ }),

/***/ 53333:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class e{constructor(e){this.vertexHandle=null,this.excludeFeature=null,this.visualizer=null,this.selfSnappingZ=null,this.drawConstraints=null,this.editGeometryOperations=e.editGeometryOperations,this.elevationInfo=e.elevationInfo,this.pointer=e.pointer,this.vertexHandle=e.vertexHandle,this.excludeFeature=e.excludeFeature,this.feature=e.feature,this.visualizer=e.visualizer,this.selfSnappingZ=e.selfSnappingZ,this.drawConstraints=e.drawConstraints}get coordinateHelper(){return this.editGeometryOperations.data.coordinateHelper}get spatialReference(){return this.coordinateHelper.spatialReference}}


/***/ }),

/***/ 86548:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _core_handleUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20464);
/* harmony import */ var _hints_IntersectionSnappingHint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13795);
/* harmony import */ var _hints_LineSnappingHint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4368);
/* harmony import */ var _hints_ParallelSnappingHint_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74989);
/* harmony import */ var _hints_PointSnappingHint_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75796);
/* harmony import */ var _hints_RightAngleSnappingHint_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23495);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class r{draw(r,p){const h=a(r),f=this.sortUniqueHints(h),u=[];for(const i of f)i instanceof _hints_IntersectionSnappingHint_js__WEBPACK_IMPORTED_MODULE_1__/* .IntersectionSnappingHint */ .v&&u.push(this.visualizeIntersectionPoint(i,p)),i instanceof _hints_LineSnappingHint_js__WEBPACK_IMPORTED_MODULE_2__/* .LineSnappingHint */ .c&&u.push(this.visualizeLine(i,p)),i instanceof _hints_ParallelSnappingHint_js__WEBPACK_IMPORTED_MODULE_3__/* .ParallelSnappingHint */ .r&&u.push(this.visualizeParallelSign(i,p)),i instanceof _hints_RightAngleSnappingHint_js__WEBPACK_IMPORTED_MODULE_5__/* .RightAngleSnappingHint */ .l&&u.push(this.visualizeRightAngleQuad(i,p)),i instanceof _hints_PointSnappingHint_js__WEBPACK_IMPORTED_MODULE_4__/* .PointSnappingHint */ ._&&u.push(this.visualizePoint(i,p));return (0,_core_handleUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .handlesGroup */ .vE)(u)}sortUniqueHints(i){return i}}function a(i){const n=[];for(const t of i){let i=!0;for(const s of n)if(t.equals(s)){i=!1;break}i&&n.push(t)}return n}


/***/ }),

/***/ 75796:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24121);
/* harmony import */ var _SnappingHint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53830);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class n extends _SnappingHint_js__WEBPACK_IMPORTED_MODULE_1__/* .SnappingHint */ .m{constructor(t,s,n){super(s,n),this.point=t}equals(s){return s instanceof n&&(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.q)(this.point,s.point)}}


/***/ }),

/***/ 68928:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89882);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function s(s){let t=0,a=0,e=0;return s?("cim"===s.type&&s.data.symbol&&"symbolLayers"in s.data.symbol&&s.data.symbol.symbolLayers&&s.data.symbol.symbolLayers.map((o=>{"CIMVectorMarker"===o.type&&o.anchorPoint&&(Math.abs(o.anchorPoint.x)>t&&(t=o.anchorPoint.x),Math.abs(o.anchorPoint.y)>a&&(a=o.anchorPoint.y),null!=o.size&&o.size>e&&(e=o.size))})),t=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .pt2px */ .Lz)(t),a=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .pt2px */ .Lz)(a),e=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .pt2px */ .Lz)(e),{offsetX:t,offsetY:a,size:e}):{offsetX:t,offsetY:a,size:e}}


/***/ }),

/***/ 69733:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Am: () => (/* binding */ Q),
  Gk: () => (/* binding */ y),
  Ku: () => (/* binding */ F),
  S3: () => (/* binding */ M),
  fL: () => (/* binding */ O),
  em: () => (/* binding */ D),
  LJ: () => (/* binding */ k),
  Y3: () => (/* binding */ x),
  dy: () => (/* binding */ R),
  qP: () => (/* binding */ j),
  fr: () => (/* binding */ w),
  Hw: () => (/* binding */ T),
  uf: () => (/* binding */ A)
});

// UNUSED EXPORTS: makeLengthField

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/quantityUtils.js
var quantityUtils = __webpack_require__(73569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/tooltip/fields/parsingAndFormattingUtils.js
var parsingAndFormattingUtils = __webpack_require__(86568);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(52495);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/uuid.js
var uuid = __webpack_require__(33880);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(9272);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
;// ../node_modules/@arcgis/core/views/interactive/tooltip/fields/TooltipField.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let s=class extends Accessor/* default */.A{constructor(t){super(t),this.actual=null,this.lockable=!0,this.id=(0,uuid/* generateUUID */.lk)(),this.inputValue=null,this.readOnly=!1,this.suffix=null,this.visible=!0,this.invalid=!1,this.unlockOnVertexPlacement=!0}get committed(){return this.lockable?this._get("committed"):null}set committed(t){this.lockable&&this._set("committed",t)}get dirty(){return null!=this.inputValue}get locked(){return this.lockable&&null!=this.committed}onInput(t){this.inputValue=t,this.invalid=!1}onCommit(t,o,i){this.lockable?this._onCommitLockable(t,i):this._onCommitNonLockable(i),this.invalid&&"commit-and-exit"===t||i.onCommit(o,t)}_onCommitLockable(t,o){const{inputValue:i,locked:l}=this;l&&n(i)?this.unlock():("commit-and-exit"===t&&!l||null!=i)&&this._parseInputAndLock(o)}_onCommitNonLockable(t){const{inputValue:o}=this;n(o)?this.lockable?this.setActual(null):this.clearInputValue():null!=o&&this._parseInputAndSetActual(t)}applyValue(t){this.lockable?this.lock(t):this.setActual(t)}clearInputValue(){this.inputValue=null,this.invalid=!1}setActual(t){this.actual=t,this.clearInputValue()}lock(t){this.lockable&&(this.committed=t??this.actual,this.clearInputValue())}unlock(){this.lockable&&(this.committed=null,this.clearInputValue())}toggleLock(t){this.lockable&&(this.locked?this.unlock():this._parseInputAndLock(t))}getSuffix(t){const{suffix:o}=this;return"function"==typeof o?o(t):o}getFormattedValue(t){const{actual:o,committed:i,format:l}=this;return null!=i?l(i,t):null!=o?l(o,t):null}getRawDisplayValue(t){const{actual:o,committed:i,inputValue:l}=this;return null!=l?l:this.lockable&&null!=i?this.formatForInputMode(i,t):null!=o?this.formatForInputMode(o,t):null}_parseInputAndSetActual(t){const{inputValue:o}=this;if(null==o||n(o))return this.setActual(null);const i=this.parse(o,t);null!=i?this.setActual(i):this.invalid=!0}_parseInputAndLock(t){const{inputValue:o,actual:i}=this;if(n(o))return this.unlock();if(null==o)return this.lock(i);const l=this.parse(o,t);null!=l?this.lock(l):this.invalid=!0}};function n(t){return null!=t&&""===t.trim()}(0,tslib_es6._)([(0,property/* property */.MZ)()],s.prototype,"actual",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],s.prototype,"committed",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],s.prototype,"dirty",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],s.prototype,"format",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],s.prototype,"formatForInputMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],s.prototype,"lockable",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],s.prototype,"locked",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],s.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],s.prototype,"inputValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],s.prototype,"name",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],s.prototype,"parse",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],s.prototype,"readOnly",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],s.prototype,"suffix",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],s.prototype,"title",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],s.prototype,"visible",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],s.prototype,"invalid",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],s.prototype,"unlockOnVertexPlacement",void 0),s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.tooltip.fields.TooltipField")],s);

;// ../node_modules/@arcgis/core/views/interactive/tooltip/fields/TooltipFieldElevation.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let c=class extends s{constructor(t){super(t),this.showAsZ=!1}normalizeCtorArgs(t){const s=t=>t.inputUnitInfos.verticalLength.unit;return{name:"elevation",actual:quantityUtils/* zeroMeters */.r7,parse:(0,parsingAndFormattingUtils/* makeQuantityParser */.hw)({createQuantity:(t,o)=>(0,quantityUtils/* createLength */.d_)(t,s(o))}),format:(t,o)=>o.formatters.verticalLength(t),formatForInputMode:(t,o)=>o.formatters.scalar((0,quantityUtils/* toUnit */.kM)(t,s(o))),suffix:t=>t.inputUnitInfos.verticalLength.abbreviation,title:t=>t.messages.sketch[this.showAsZ?"z":"elevation"],unlockOnVertexPlacement:!1,...t}}};(0,tslib_es6._)([(0,property/* property */.MZ)()],c.prototype,"showAsZ",void 0),c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.tooltip.fields.TooltipFieldElevation")],c);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/quantityFormatUtils.js
var quantityFormatUtils = __webpack_require__(33604);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/support/angularMeasurementUtils.js
var angularMeasurementUtils = __webpack_require__(52857);
;// ../node_modules/@arcgis/core/views/interactive/tooltip/fields/TooltipFieldOrientation.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let TooltipFieldOrientation_c=class extends s{constructor(t){super(t),this.precision=1}normalizeCtorArgs(t){const i=t=>t.inputUnitInfos.angle.unit;return{name:"orientation",actual:null,parse:(0,parsingAndFormattingUtils/* makeQuantityParser */.hw)({createQuantity:(t,r)=>(0,quantityUtils/* createAngle */.Wq)(t,i(r),"geographic"),sanitize:parsingAndFormattingUtils/* sanitizeAngle */.D5}),format:t=>{const o=(0,angularMeasurementUtils/* getNormalizedGeographicOrientation */.P1)(t);return (0,quantityFormatUtils/* formatAngle */.Nk)(o,"geographic",this.precision)},formatForInputMode:(t,r)=>{const o=(0,angularMeasurementUtils/* getNormalizedGeographicOrientation */.P1)(t);return r.formatters.scalar(o)},suffix:t=>t.inputUnitInfos.angle.abbreviation,title:t=>t.messages.sketch.orientation,...t}}};(0,tslib_es6._)([(0,property/* property */.MZ)()],TooltipFieldOrientation_c.prototype,"precision",void 0),TooltipFieldOrientation_c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.tooltip.fields.TooltipFieldOrientation")],TooltipFieldOrientation_c);

;// ../node_modules/@arcgis/core/views/interactive/tooltip/fields/TooltipFieldSize.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let a=class extends s{constructor(t){super(t),this.precision=null}normalizeCtorArgs(t){const s=t=>t.inputUnitInfos.length.unit;return{name:"size",actual:null,parse:(0,parsingAndFormattingUtils/* makeQuantityParser */.hw)({createQuantity:(t,o)=>(0,quantityUtils/* createLength */.d_)(t,s(o))}),format:(t,o)=>o.formatters.length(t),formatForInputMode:(t,r)=>r.formatters.scalar((0,quantityUtils/* toUnit */.kM)(t,s(r))),suffix:t=>t.inputUnitInfos.length.abbreviation,title:t=>t.messages.sketch.size,...t}}};(0,tslib_es6._)([(0,property/* property */.MZ)()],a.prototype,"precision",void 0),a=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.tooltip.fields.TooltipFieldSize")],a);

;// ../node_modules/@arcgis/core/views/interactive/tooltip/fields/fields.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function y(t){const e=t=>t.inputUnitInfos.angle.unit,r=t=>t.sketchOptions.values.effectiveDirectionMode;return new s({name:"direction",actual:quantityUtils/* zeroDegrees */.IV,parse:(0,parsingAndFormattingUtils/* makeQuantityParser */.hw)({createQuantity:(t,a)=>(0,quantityUtils/* createAngle */.Wq)(t,e(a),"geographic"),sanitize:parsingAndFormattingUtils/* sanitizeAngle */.D5}),format:(t,e)=>{const a=r(e),n=(0,angularMeasurementUtils/* getNormalizedDirection */.jQ)(t,a);switch(a){case angularMeasurementUtils/* DirectionMode */.rZ.Absolute:return e.formatters.direction(n);case angularMeasurementUtils/* DirectionMode */.rZ.Relative:return e.formatters.directionRelative(n);case angularMeasurementUtils/* DirectionMode */.rZ.RelativeBilateral:return e.formatters.directionRelativeBilateral(n)}},formatForInputMode:(t,n)=>{const i=(0,angularMeasurementUtils/* getNormalizedDirection */.jQ)(t,r(n));return n.formatters.scalar((0,quantityUtils/* toUnit */.kM)(i,e(n)))},suffix:t=>t.inputUnitInfos.angle.abbreviation,title:t=>{const e=r(t),{absolute:a,relative:n}=t.messages.sketch.direction;switch(e){case angularMeasurementUtils/* DirectionMode */.rZ.Absolute:return a;case angularMeasurementUtils/* DirectionMode */.rZ.Relative:case angularMeasurementUtils/* DirectionMode */.rZ.RelativeBilateral:return n}},...t})}function U(t){const e=t=>t.inputUnitInfos.length.unit;return new s({name:"distance",actual:quantityUtils/* zeroMeters */.r7,parse:(0,parsingAndFormattingUtils/* makeQuantityParser */.hw)({createQuantity:(t,a)=>(0,quantityUtils/* createLength */.d_)(Math.max(t,0),e(a))}),format:(t,e)=>e.formatters.length(t),formatForInputMode:(t,n)=>n.formatters.scalar((0,quantityUtils/* toUnit */.kM)(t,e(n))),suffix:t=>t.inputUnitInfos.length.abbreviation,title:t=>t.messages.sketch.distance,...t})}function w(t){return U({format:(t,e)=>e.formatters.totalLength(t),title:t=>t.messages.sketch.totalLength,readOnly:!0,...t})}function F(t){return U({...t})}function x(t){const e=t=>t.inputUnitInfos.length.unit;return U({...t,parse:(0,parsingAndFormattingUtils/* makeQuantityParser */.hw)({createQuantity:(t,a)=>(0,quantityUtils/* createLength */.d_)(t,e(a))}),format:(t,e)=>e.formatters.lengthRelative(t)})}function M(t){return new c(t)}function k(t){return new TooltipFieldOrientation_c(t)}function j(t){return new a(t)}function R(e){return B("scale",{name:"scale",actual:null,parse:(0,parsingAndFormattingUtils/* makeQuantityParser */.hw)({createQuantity:e=>(0,quantityUtils/* createScalar */.LF)(Math.abs(e))}),...e})}function Q(t){const n=t=>t.inputUnitInfos.area.unit;return new s({name:"area",actual:quantityUtils/* zeroSquareMeters */.iT,parse:(0,parsingAndFormattingUtils/* makeQuantityParser */.hw)({createQuantity:(t,e)=>(0,quantityUtils/* createArea */.gT)(t,n(e))}),format:(t,e)=>e.formatters.area(t),formatForInputMode:(t,e)=>e.formatters.scalar((0,quantityUtils/* toUnit */.kM)(t,n(e))),suffix:t=>t.inputUnitInfos.area.abbreviation,title:t=>t.messages.sketch.area,readOnly:!0,...t})}function D(t){return new s({name:"x",actual:quantityUtils/* zeroDegrees */.IV,parse:parsingAndFormattingUtils/* parseLongitude */.L5,format:(t,e)=>e.formatters.longitudeDecimalDegrees(t),formatForInputMode:t=>(0,parsingAndFormattingUtils/* formatLongitudeDecimalDegreesForInputMode */.zX)(t),suffix:t=>t.inputUnitInfos.angle.abbreviation,title:t=>t.messages.sketch.longitude,...t})}function O(t){return new s({name:"y",actual:quantityUtils/* zeroDegrees */.IV,parse:parsingAndFormattingUtils/* parseLatitude */.A3,format:(t,e)=>e.formatters.latitudeDecimalDegrees(t),formatForInputMode:t=>(0,parsingAndFormattingUtils/* formatLatitudeDecimalDegreesForInputMode */.oZ)(t),suffix:t=>t.inputUnitInfos.angle.abbreviation,title:t=>t.messages.sketch.latitude,...t})}function T(t){return B("x",{name:"x",...t})}function A(t){return B("y",{name:"y",...t})}function B(e,a){return new s({actual:(0,quantityUtils/* createScalar */.LF)(0),parse:(0,parsingAndFormattingUtils/* makeQuantityParser */.hw)({createQuantity:e=>(0,quantityUtils/* createScalar */.LF)(e)}),format:(t,e)=>e.formatters.scalar(t),formatForInputMode:(t,e)=>e.formatters.scalar(t),title:t=>t.messages.sketch[e],...a})}


/***/ }),

/***/ 86568:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A3: () => (/* binding */ J),
/* harmony export */   D5: () => (/* binding */ C),
/* harmony export */   GC: () => (/* binding */ D),
/* harmony export */   L5: () => (/* binding */ H),
/* harmony export */   Nr: () => (/* binding */ Q),
/* harmony export */   X3: () => (/* binding */ G),
/* harmony export */   hw: () => (/* binding */ B),
/* harmony export */   m6: () => (/* binding */ K),
/* harmony export */   oZ: () => (/* binding */ A),
/* harmony export */   zX: () => (/* binding */ w)
/* harmony export */ });
/* unused harmony export cleanNumber */
/* harmony import */ var _core_Cyclical_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17505);
/* harmony import */ var _core_quantityFormatUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33604);
/* harmony import */ var _core_quantityUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73569);
/* harmony import */ var _geometry_coordinateFormatter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88204);
/* harmony import */ var _intl_number_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46930);
/* harmony import */ var _support_angularMeasurementUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52857);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const v=1,y=6;function D(t,l){return{angleRelative:x,direction:j,directionRelative:R,directionRelativeBilateral:$,latitudeDecimalDegrees:L,longitudeDecimalDegrees:F,area:(n,e)=>(0,_core_quantityFormatUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .formatArea */ .Jd)(t,n,e??l.area),length:(n,e,i)=>(0,_core_quantityFormatUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .formatLength */ .ix)(t,n,e??l.length,i),lengthRelative:(n,e)=>(0,_core_quantityFormatUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .formatRelativeLength */ .yh)(t,n,e??l.length),totalLength:(n,e)=>(0,_core_quantityFormatUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .formatLength */ .ix)(t,n,e??l.length),verticalLength:(n,r)=>(0,_core_quantityFormatUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .formatVerticalLength */ .Oo)(t,n,r??l.verticalLength),verticalLengthRelative:(e,r)=>(0,_core_quantityFormatUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .formatRelativeVerticalLength */ .OM)(t,e,r??l.verticalLength),percentage:z,scalar:Z,scale:T}}function x(t){return (0,_intl_number_js__WEBPACK_IMPORTED_MODULE_4__/* .formatNumber */ .ZV)(t,{signDisplay:"exceptZero",...b(v)})}function j(t){return (0,_core_quantityFormatUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .formatAngle */ .Nk)(t,t.rotationType,v)}function R(t){const n=(0,_support_angularMeasurementUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .getDegreesGeographic */ .hF)(t);return (0,_intl_number_js__WEBPACK_IMPORTED_MODULE_4__/* .formatNumber */ .ZV)(n,{style:"unit",unitDisplay:"narrow",unit:"degree",signDisplay:n>0?"never":"exceptZero",...b(v)})}function $(t){return (0,_core_quantityFormatUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .formatAngle */ .Nk)(t,t.rotationType,v)}function F(t){return U(t,N)}function L(t){return U(t,O)}function w(t){return q(t,N)}function A(t){return q(t,O)}function U(t,n){const e=!1,r="geographic";return (0,_core_quantityFormatUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .formatAngle */ .Nk)((0,_core_quantityUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .toUnit */ .kM)(t,"degrees"),r,y,n,e)}function q(t,n){const e=!1,r=n.normalize((0,_core_quantityUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .toUnit */ .kM)(t,"degrees").value,void 0,e);return Z((0,_core_quantityUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .createScalar */ .LF)(r),y)}function z(t){return (0,_intl_number_js__WEBPACK_IMPORTED_MODULE_4__/* .formatNumber */ .ZV)(t.value,{style:"percent"})}function T(t){return (0,_intl_number_js__WEBPACK_IMPORTED_MODULE_4__/* .formatNumber */ .ZV)(t,{style:"percent",maximumFractionDigits:0})}function Z(t,n){return (0,_intl_number_js__WEBPACK_IMPORTED_MODULE_4__/* .formatNumber */ .ZV)(t.value,b(n))}function b(t){return{minimumFractionDigits:t,maximumFractionDigits:t}}function B({createQuantity:t,sanitize:n}){return(e,r)=>{if(null==e)return null;n&&(e=n(e));const i=(0,_intl_number_js__WEBPACK_IMPORTED_MODULE_4__/* .parseNumber */ .$J)(e);return null==i?null:t(i,r)}}function C(t){return t.replaceAll(/[*^~°º]/g,"")}const E=t=>{let n=`[-+]?[0-9${t.thousands}]+`;return""!==t.decimal&&(n+=`${t.decimal}[0-9]+`),new RegExp(`^(${n}\\s*)${t.separator}(\\s*${n})$`,"i")},I=" ",M=[];for(const P of[",","\\|","\\s+"])for(const t of["\\.",",",""])for(const n of["",",","\\.",I,"\\s+"])P!==t&&P!==n&&t!==n&&M.push({separator:P,decimal:t,thousands:n,pattern:E({decimal:t,thousands:n,separator:P})});function Q(t){for(const{decimal:n,thousands:e,pattern:r}of M){r.lastIndex=0;const i=t.match(r);if(!i)continue;const o=(0,_intl_number_js__WEBPACK_IMPORTED_MODULE_4__/* .parseNumber */ .$J)(k(i[1],n,e)),l=(0,_intl_number_js__WEBPACK_IMPORTED_MODULE_4__/* .parseNumber */ .$J)(k(i[2],n,e));if(null!=o&&null!=l)return{x:(0,_core_quantityUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .createScalar */ .LF)(o),y:(0,_core_quantityUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .createScalar */ .LF)(l)}}return null}function k(t,n,e){let r=t.replaceAll(/[\s+]/g,"");return""!==e&&(r=r.replaceAll(e,"")),""!==n&&(r=r.replaceAll(n,".")),r}function G(t){if(!t||null!=(0,_intl_number_js__WEBPACK_IMPORTED_MODULE_4__/* .parseNumber */ .$J)(t)||!(0,_geometry_coordinateFormatter_js__WEBPACK_IMPORTED_MODULE_3__/* .isLoaded */ .s1)())return null;const n=(0,_geometry_coordinateFormatter_js__WEBPACK_IMPORTED_MODULE_3__/* .fromLatitudeLongitude */ .o6)(t),e=K(n?.latitude),r=K(n?.longitude);return null!=r&&null!=e?{latitude:e,longitude:r}:null}function H(t){return K((0,_geometry_coordinateFormatter_js__WEBPACK_IMPORTED_MODULE_3__/* .fromLongitude */ .mT)(t))}function J(t){return K((0,_geometry_coordinateFormatter_js__WEBPACK_IMPORTED_MODULE_3__/* .fromLatitude */ .ts)(t))}function K(t){return null!=t?(0,_core_quantityUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .createAngle */ .Wq)(t,"degrees","geographic"):null}const N=new _core_Cyclical_js__WEBPACK_IMPORTED_MODULE_0__/* .Cyclical */ .hr(-180,180),O=new _core_Cyclical_js__WEBPACK_IMPORTED_MODULE_0__/* .Cyclical */ .hr(-90,90);


/***/ }),

/***/ 57087:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/* harmony import */ var _SketchTooltipInfo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83856);
/* harmony import */ var _TooltipInfoWithCoordinates_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38153);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let i=class extends((0,_TooltipInfoWithCoordinates_js__WEBPACK_IMPORTED_MODULE_7__/* .TooltipInfoWithCoordinates */ .B)(_SketchTooltipInfo_js__WEBPACK_IMPORTED_MODULE_6__/* .SketchTooltipInfo */ .w)){constructor(o){super(o),this.type="move-point",this.allFields.forEach((o=>{o.lockable=!1,o.setActual(null)}))}get allFields(){return[this.longitude,this.latitude,this.x,this.y,this.elevation]}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)()],i.prototype,"allFields",null),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.views.interactive.tooltip.infos.MovePointTooltipInfo")],i);


/***/ }),

/***/ 45165:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/* harmony import */ var _fields_fields_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69733);
/* harmony import */ var _SketchTooltipInfo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(83856);
/* harmony import */ var _TooltipInfoWithCoordinates_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38153);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let p=class extends((0,_TooltipInfoWithCoordinates_js__WEBPACK_IMPORTED_MODULE_8__/* .TooltipInfoWithCoordinates */ .B)(_SketchTooltipInfo_js__WEBPACK_IMPORTED_MODULE_7__/* .SketchTooltipInfo */ .w)){constructor(t){super(t),this.type="selected-vertex",this.area=(0,_fields_fields_js__WEBPACK_IMPORTED_MODULE_6__/* .makeAreaField */ .Am)(),this.totalLength=(0,_fields_fields_js__WEBPACK_IMPORTED_MODULE_6__/* .makeTotalLengthField */ .fr)(),this.geometryType="polyline",this.allFields.forEach((t=>{t.lockable=!1,t.setActual(null)}))}get allFields(){return[this.longitude,this.latitude,this.x,this.y,this.elevation,"polygon"===this.geometryType?this.area:this.totalLength]}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)()],p.prototype,"geometryType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)()],p.prototype,"allFields",null),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.views.interactive.tooltip.infos.SelectedVertexTooltipInfo")],p);


/***/ }),

/***/ 83856:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52495);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let r=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(e){super(e),this.helpMessage=void 0,this.viewType=void 0}get visibleElements(){return this.sketchOptions.tooltips.visibleElements}get allFields(){return[]}get editableFields(){return this.allFields.filter((e=>e.visible&&!e.readOnly))}clearInputValues(){this.allFields.forEach((e=>e.clearInputValue()))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],r.prototype,"sketchOptions",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],r.prototype,"visibleElements",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],r.prototype,"helpMessage",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],r.prototype,"viewType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],r.prototype,"allFields",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],r.prototype,"editableFields",null),r=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.views.interactive.tooltip.infos.SketchTooltipInfo")],r);


/***/ }),

/***/ 38153:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_quantityUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73569);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _geometry_support_pointUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76557);
/* harmony import */ var _fields_fields_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69733);
/* harmony import */ var _fields_parsingAndFormattingUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(86568);
/* harmony import */ var _support_geodesicMeasurementUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25358);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const h=h=>{let f=class extends h{constructor(){super(...arguments),this.longitude=(0,_fields_fields_js__WEBPACK_IMPORTED_MODULE_8__/* .makeLongitudeField */ .em)(),this.latitude=(0,_fields_fields_js__WEBPACK_IMPORTED_MODULE_8__/* .makeLatitudeField */ .fL)(),this.x=(0,_fields_fields_js__WEBPACK_IMPORTED_MODULE_8__/* .makeXField */ .Hw)(),this.y=(0,_fields_fields_js__WEBPACK_IMPORTED_MODULE_8__/* .makeYField */ .uf)(),this.elevation=(0,_fields_fields_js__WEBPACK_IMPORTED_MODULE_8__/* .makeElevationField */ .S3)(),this.geographic=!1}get effectiveX(){return this.geographic?this.longitude:this.x}get effectiveY(){return this.geographic?this.latitude:this.y}get key(){return{longitude:this.longitude.actual,latitude:this.latitude.actual,x:this.x.actual,y:this.y.actual,elevation:this.elevation.actual,geographic:this.geographic}}setLocationFromPoint(t,i=t?.spatialReference){if(this.geographic=!!i&&(0,_support_geodesicMeasurementUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .supportsGeodesicMeasurement */ .yF)(i),null==t)return this._setActualLonLat(null,null),void this._setActualXY(null,null);if(this.geographic){const e=(0,_geometry_support_pointUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .getLongitudeLatitude */ .QP)(t,g);this._setActualLonLat((0,_fields_parsingAndFormattingUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .createGeographicCoordinate */ .m6)(e?.[0]),(0,_fields_parsingAndFormattingUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .createGeographicCoordinate */ .m6)(e?.[1]))}else this._setActualXY((0,_core_quantityUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .createScalar */ .LF)(t.x),(0,_core_quantityUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .createScalar */ .LF)(t.y))}_setActualLonLat(t,e){this.longitude.actual=t,this.latitude.actual=e}_setActualXY(t,e){this.x.actual=t,this.y.actual=e}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],f.prototype,"geographic",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],f.prototype,"effectiveX",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],f.prototype,"effectiveY",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],f.prototype,"key",null),f=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.views.interactive.tooltip.infos.TooltipInfoWithCoordinates")],f),f},g=[0,0];


/***/ }),

/***/ 56326:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_quantityUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73569);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _SketchTooltipInfo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(83856);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let i=class extends _SketchTooltipInfo_js__WEBPACK_IMPORTED_MODULE_7__/* .SketchTooltipInfo */ .w{constructor(o){super(o),this.type="translate",this.distance=_core_quantityUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .zeroMeters */ .r7}clear(){this.distance=_core_quantityUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .zeroMeters */ .r7}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],i.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],i.prototype,"distance",void 0),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.views.interactive.tooltip.infos.TranslateTooltipInfo")],i);


/***/ }),

/***/ 45565:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  sZ: () => (/* binding */ tooltipCommonUtils_C),
  wG: () => (/* binding */ H),
  mu: () => (/* binding */ F),
  A: () => (/* binding */ R),
  HA: () => (/* binding */ J),
  IA: () => (/* binding */ z),
  Ue: () => (/* binding */ V)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/asyncUtils.js
var asyncUtils = __webpack_require__(12690);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/handleUtils.js
var handleUtils = __webpack_require__(20464);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(92504);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/quantityUtils.js
var quantityUtils = __webpack_require__(73569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(85251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/unitUtils.js
var unitUtils = __webpack_require__(92976);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(24121);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(58359);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/coordinateFormatter.js
var coordinateFormatter = __webpack_require__(88204);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/MeshTransform.js
var MeshTransform = __webpack_require__(8695);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/meshVertexSpaceUtils.js
var meshVertexSpaceUtils = __webpack_require__(1114);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(87926);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/webMercatorUtils.js
var webMercatorUtils = __webpack_require__(96082);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/keybindings.js
var keybindings = __webpack_require__(70384);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Evented.js
var Evented = __webpack_require__(17306);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/events.js
var events = __webpack_require__(64874);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(6267);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/screenUtils.js
var screenUtils = __webpack_require__(89882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(9272);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/modeUtils.js
var modeUtils = __webpack_require__(67923);
;// ../node_modules/@arcgis/core/views/interactive/tooltip/css.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const e="esri-tooltip",css_t=`${e}-content`,css_n=`${e}-content--input`,_=`${e}-content__header`,a=`${e}-content__header__spacer`,css_o=`${e}-content__header__actions`,s=`${e}-draw-header-actions`,c=`${e}-table`,$=`${e}-help-message`,r=`${e}-help-message__text`,h=`${e}-help-message__icon`;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/widgets/Widget.js + 4 modules
var Widget = __webpack_require__(46928);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/widgets/support/widgetUtils.js
var widgetUtils = __webpack_require__(99484);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/widgets/support/jsxFactory.js
var jsxFactory = __webpack_require__(96704);
;// ../node_modules/@arcgis/core/views/interactive/tooltip/components/TooltipField.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const p=`${e}-field`,d={base:p,inputMode:`${p}--input`,title:`${p}__title`,value:`${p}__value`};let TooltipField_a=class extends Widget/* default */.A{constructor(){super(...arguments),this.hidden=!1,this.mode="feedback"}render(){return (0,jsxFactory/* tsx */.K)("div",{class:this.classes({[d.base]:!0,[d.inputMode]:"input"===this.mode})},(0,jsxFactory/* tsx */.K)("div",{class:d.title,key:"title"},this.title),(0,jsxFactory/* tsx */.K)("div",{class:d.value,key:"value"},this.value))}};(0,tslib_es6._)([(0,property/* property */.MZ)()],TooltipField_a.prototype,"hidden",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],TooltipField_a.prototype,"mode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],TooltipField_a.prototype,"title",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],TooltipField_a.prototype,"value",void 0),TooltipField_a=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.tooltip.components.TooltipField")],TooltipField_a);

;// ../node_modules/@arcgis/core/views/interactive/tooltip/components/ValueByValue.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const ValueByValue_p={base:`${e}-value-by-value`};let ValueByValue_a=class extends Widget/* default */.A{constructor(){super(...arguments),this.divider="×"}render(){return (0,jsxFactory/* tsx */.K)("div",{class:ValueByValue_p.base},(0,jsxFactory/* tsx */.K)("span",null,this.left),(0,jsxFactory/* tsx */.K)("span",null,this.divider),(0,jsxFactory/* tsx */.K)("span",null,this.right))}};(0,tslib_es6._)([(0,property/* property */.MZ)()],ValueByValue_a.prototype,"left",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],ValueByValue_a.prototype,"divider",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],ValueByValue_a.prototype,"right",void 0),ValueByValue_a=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.tooltip.components.ValueByValue")],ValueByValue_a);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/a11yUtils.js
var a11yUtils = __webpack_require__(77058);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/memoize.js
var memoize = __webpack_require__(6371);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/scheduling.js
var scheduling = __webpack_require__(61449);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/unitFormatUtils.js
var unitFormatUtils = __webpack_require__(26257);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/getDefaultUnitForView.js
var getDefaultUnitForView = __webpack_require__(47228);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/tooltip/fields/parsingAndFormattingUtils.js
var parsingAndFormattingUtils = __webpack_require__(86568);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/widgets/support/componentsUtils.js + 1 modules
var componentsUtils = __webpack_require__(17199);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/widgets/support/decorators/messageBundle.js
var messageBundle = __webpack_require__(43955);
;// ../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContent.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const E=Symbol("dragHandles");let S=class extends Widget/* default */.A{constructor(){super(...arguments),this._focusAbortController=new AbortController,this._transitionInfo=null,this._mode="feedback",this._getFormatters=(0,memoize/* memoize */.B)(parsingAndFormattingUtils/* getFormatters */.GC),this._onHeaderPointerDown=t=>{const e=t.target;e instanceof HTMLElement&&"calcite-button"!==e?.tagName?.toLowerCase()&&(this.removeHandles(E),t.preventDefault(),t.stopPropagation(),e.setPointerCapture(t.pointerId),this.tooltip.onDragStart(t.clientX,t.clientY),this.addHandles([(0,events.on)(e,"pointermove",(({clientX:t,clientY:e})=>{this.tooltip.onDrag(t,e)})),(0,events.on)(e,["pointerup","pointercancel"],(o=>{this.removeHandles(E),e.releasePointerCapture(t.pointerId),this.tooltip.onDragEnd()})),(0,events.on)(e,"touchstart",(t=>t.preventDefault()))],E))},this._onDiscard=()=>{this.destroyed||(this.tooltip.emit("discard"),this.info.clearInputValues(),this.exitInputMode())},this._onCommit=(t,e)=>{if(this.destroyed)return;if(this.tooltip.emit("commit",{type:e}),"commit-and-exit"===e)return void this.exitInputMode();if("commit-on-blur"===e)return;const o=this._getFocusableElements(),s=o.length,i=o.indexOf(t);if(-1===i)return void this.exitInputMode();const n=((i+("commit-and-next"===e?1:-1))%s+s)%s;L(o.at(n))},this._onKeyDown=t=>{switch(t.code){case keybindings/* tooltipKeys */.ac.next:return this._onNextKey(t);case keybindings/* tooltipKeys */.ac.discard:return t.stopPropagation(),this._onDiscard()}}}get mode(){return this._mode}get _displayUnits(){const{displayUnits:t}=this.info.sketchOptions.values,e=(0,getDefaultUnitForView/* getDefaultUnitForView */.c)(this.tooltip.view);return{length:t.length??e,verticalLength:t.verticalLength??e,area:t.area??e}}get _inputUnitInfos(){const t=this._messagesUnits,e=e=>({unit:e,abbreviation:(0,unitFormatUtils/* unitName */.Cq)(t,e,"abbr")}),{inputUnits:o}=this.info.sketchOptions.values,s=(0,getDefaultUnitForView/* getDefaultUnitForView */.c)(this.tooltip.view),i=o.length??s,n=o.verticalLength??s,r=o.area??s;return{length:e((0,unitUtils/* defaultLengthUnit */.wL)(i)),verticalLength:e((0,unitUtils/* defaultVerticalLengthUnit */.m5)(n)),area:e((0,unitUtils/* defaultAreaUnit */.tW)(r)),angle:e("degrees")}}get _formatters(){return this._getFormatters(this._messagesUnits,this._displayUnits)}get fieldContext(){return{formatters:this._formatters,inputUnitInfos:this._inputUnitInfos,messages:this._messagesTooltip,sketchOptions:this.info.sketchOptions,onCommit:this._onCommit,onDiscard:this._onDiscard}}render(){const{visibleElements:t}=this.info.sketchOptions.tooltips,e=this._renderedContent,o=this._renderedActions,s=this._renderedHelpMessage,i=e.length>0,n=i||!!s,r="input"===this.mode;return (0,jsxFactory/* tsx */.K)("div",{class:(0,widgetUtils/* classes */.Ly)(css_t,r&&css_n),onkeydown:this._onKeyDown,tabIndex:-1},r&&n&&t.header?(0,jsxFactory/* tsx */.K)("div",{class:_,"data-testid":"tooltip-header",key:"header",onpointerdown:this._onHeaderPointerDown},(0,jsxFactory/* tsx */.K)("calcite-button",{appearance:"transparent","data-testid":"tooltip-back-button",iconFlipRtl:"both",iconStart:"chevron-left",key:"discard-button",kind:"neutral",onclick:this._onDiscard,scale:"s",tabIndex:-1}),o.length>0?(0,jsxFactory/* tsx */.K)(jsxFactory/* tsxFragment */.w,null,(0,jsxFactory/* tsx */.K)("div",{class:a,key:"spacer"}),(0,jsxFactory/* tsx */.K)("div",{class:css_o,key:"actions"},o)):null):null,i?(0,jsxFactory/* tsx */.K)("div",{class:c,key:"content"},...e):null,s)}destroy(){this._focusAbortController.abort(),this._transitionInfo?.transition.skipTransition()}_renderActions(){return null}loadDependencies(){return (0,componentsUtils/* loadCalciteComponents */.W)({button:()=>__webpack_require__.e(/* import() */ 42817).then(__webpack_require__.bind(__webpack_require__, 42817)),icon:()=>__webpack_require__.e(/* import() */ 96446).then(__webpack_require__.bind(__webpack_require__, 96446)),input:()=>__webpack_require__.e(/* import() */ 7311).then(__webpack_require__.bind(__webpack_require__, 7311))})}async enterInputMode(t,e){try{await this._transitionTo("input",e),await this._focusField(t)}catch(o){(0,promiseUtils/* throwIfNotAbortError */.jH)(o)}}async exitInputMode({focusOnView:t=!0}={}){try{const{container:e,info:o}=this;o.clearInputValues();const s=t?e?.closest(".esri-view")?.querySelector(".esri-view-surface"):null;await this._transitionTo("feedback"),s instanceof HTMLElement&&s.focus()}catch(e){(0,promiseUtils/* throwIfNotAbortError */.jH)(e)}}_onNextKey(t){const e=this._getFocusableElements(),o=e.at(0),s=e.at(-1);o&&s&&(t.shiftKey?document.activeElement===o&&(t.preventDefault(),t.stopPropagation(),L(s)):document.activeElement===s&&(t.preventDefault(),t.stopPropagation(),L(o)))}get _renderedContent(){return N(this._renderContent())}get _renderedActions(){return N(this._renderActions())}get _renderedHelpMessage(){const{sketchOptions:t,visibleElements:e}=this.info;if(!e.helpMessage)return null;const o=t.tooltips.helpMessage??this._defaultHelpMessage;if(!o)return null;const s=t.tooltips.helpMessageIcon??"information";return (0,jsxFactory/* tsx */.K)("div",{class:$,key:"help-message"},s?(0,jsxFactory/* tsx */.K)("calcite-icon",{class:h,icon:s,scale:"s"}):null,(0,jsxFactory/* tsx */.K)("div",{class:r},o))}get _defaultHelpMessage(){const{helpMessage:t,viewType:e}=this.info;if(null==t)return null;const o="3d"===e?"helpMessages3d":"helpMessages2d";return this._messagesTooltip?.sketch?.[o]?.[t]}async _focusField(t){this._focusAbortController?.abort(),this._focusAbortController=new AbortController;const{signal:e}=this._focusAbortController;await this._waitForInputs(),(0,promiseUtils/* throwIfAborted */.Te)(e);const o=this._getFocusableInputs(),s=t?o.find((e=>e.getAttribute("data-field-name")===t)):o.at(0);await L(s)}async _transitionTo(t,o){if(this._mode===t&&!this._transitionInfo)return;if(this._transitionInfo?.mode===t)return this._transitionInfo.transition.finished;this._transitionInfo?.transition.skipTransition();const s=async()=>{this.destroyed||(this._mode=t,await (0,scheduling/* waitTick */.NO)(),this.destroyed||(this.renderNow(),await (0,scheduling/* waitTick */.NO)(),this.destroyed||o?.()))};if(!this.domNode?.firstChild||!document.startViewTransition||(0,a11yUtils/* prefersReducedMotion */.O)())return void await s();this.autoRenderingEnabled=!1;const i=this._transitionInfo={transition:document.startViewTransition((async()=>{this.destroyed||i!==this._transitionInfo||(this.autoRenderingEnabled=!0,await s())})),mode:t};try{await i.transition.finished}finally{i===this._transitionInfo&&(this._transitionInfo=null)}}async _waitForInputs(){const t=()=>Array.from(this.domNode?.querySelectorAll("calcite-input")??[]);for(;0===t().length;)await (0,promiseUtils/* after */.Pl)(O);await (0,scheduling/* waitAnimationFrame */.$m)()}_getFocusableInputs(){return Array.from(this.domNode?.querySelectorAll("calcite-input:not([read-only]):not([disabled])")??[])}_getFocusableElements(){const t=this.domNode?.querySelector(`.${s}`);return[...Array.from(t?.querySelectorAll(`.${css_o} calcite-button:not([disabled])`)??[]),...this._getFocusableInputs()]}};async function L(t){await(t?.setFocus())}function N(t){return(Array.isArray(t)?t:[t]).flat(10).filter((t=>!!t))}(0,tslib_es6._)([(0,messageBundle/* messageBundle */.G)("esri/core/t9n/Units"),(0,property/* property */.MZ)()],S.prototype,"_messagesUnits",void 0),(0,tslib_es6._)([(0,messageBundle/* messageBundle */.G)("esri/views/interactive/tooltip/t9n/Tooltip"),(0,property/* property */.MZ)()],S.prototype,"_messagesTooltip",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"info",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"tooltip",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"_mode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"mode",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"_displayUnits",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"_inputUnitInfos",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"_formatters",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"fieldContext",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"_renderedContent",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"_renderedActions",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"_renderedHelpMessage",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"_defaultHelpMessage",null),S=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.tooltip.content.TooltipContent")],S);const O=20;

;// ../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentDrawCircle.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let n=class extends S{_renderContent(){const{area:t,radius:e,xSize:s,ySize:n,visibleElements:a}=this.info,p=this._messagesTooltip.sketch,m=this._formatters;return (0,jsxFactory/* tsx */.K)(jsxFactory/* tsxFragment */.w,null,a.radius&&null!=e?(0,jsxFactory/* tsx */.K)(TooltipField_a,{title:p.radius,value:m.length(e)}):null,a.size&&null!=s&&null!=n?(0,jsxFactory/* tsx */.K)(TooltipField_a,{title:p.size,value:(0,jsxFactory/* tsx */.K)(ValueByValue_a,{left:m.length(s),right:m.length(n)})}):null,a.area?(0,jsxFactory/* tsx */.K)(TooltipField_a,{title:p.area,value:m.area(t)}):null)}};n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.tooltip.content.TooltipContentDrawCircle")],n);

;// ../node_modules/@arcgis/core/views/interactive/tooltip/components/TooltipEditableField.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const TooltipEditableField_p=`${e}-editable-field`,TooltipEditableField_d={base:TooltipEditableField_p,inputMode:`${TooltipEditableField_p}--input`,feedbackMode:`${TooltipEditableField_p}--feedback`,readOnly:`${TooltipEditableField_p}--read-only`,locked:`${TooltipEditableField_p}--locked`,title:`${TooltipEditableField_p}__title`,value:`${TooltipEditableField_p}__value`,valueContent:`${TooltipEditableField_p}__value__content`,valueContentReadOnly:`${TooltipEditableField_p}__value__content--read-only`,lockIcon:`${TooltipEditableField_p}__lock-icon`,input:`${TooltipEditableField_p}__input`,inputWrapper:`${TooltipEditableField_p}__input-wrapper`,inputMessage:`${TooltipEditableField_p}__input-message`,inputSuffix:`${TooltipEditableField_p}__input-suffix`,button:`${TooltipEditableField_p}__button`},TooltipEditableField_h={lock:"lock",unlock:"unlock"};let TooltipEditableField_=class extends Widget/* default */.A{constructor(){super(...arguments),this._input=null,this._lock=null,this._onLockClick=()=>{this.field.toggleLock(this.context)},this._onLockAfterCreate=t=>{this._lock=t},this._onLockAfterRemoved=()=>{this._lock=null},this._onKeyDown=t=>{t.key===keybindings/* tooltipKeys */.ac.discard&&"input"===this.mode&&this._input&&this.context.onDiscard(this._input)},this._onInputKeyDown=t=>{const e=this._input;if(e)switch(t.key){case keybindings/* tooltipKeys */.ac.commit:return this.field.onCommit("commit-and-exit",e,this.context);case keybindings/* tooltipKeys */.ac.next:{t.preventDefault(),t.stopPropagation();const i=t.shiftKey?"commit-and-previous":"commit-and-next";return this.field.onCommit(i,e,this.context)}}},this._onInput=t=>{this.field.onInput(t.currentTarget.value)},this._onInputBlur=t=>{const e=this._input;e&&t.relatedTarget!==this._lock&&this.field.onCommit("commit-on-blur",e,this.context)},this._selectText=()=>{const t=()=>{this._input===document.activeElement&&this._input?.selectText()};t(),(0,scheduling/* waitAnimationFrame */.$m)().then(t)},this._onAfterCreate=t=>{this._input=t,t.addEventListener("paste",this._onPaste),t.addEventListener("beforeinput",this._onBeforeInput)},this._onAfterRemoved=t=>{t.removeEventListener("paste",this._onPaste),t.removeEventListener("beforeinput",this._onBeforeInput)},this._onPaste=t=>{const e=t.clipboardData?.getData("text");if(!e)return;null!=this.field.parse(e,this.context)&&(t.stopPropagation(),this.field.onInput(e))},this._onBeforeInput=t=>{("historyUndo"===t.inputType||"historyRedo"===t.inputType)&&!this.field.dirty&&t.preventDefault()}}initialize(){this.addHandles((0,reactiveUtils/* watch */.wB)((()=>this._rawDisplayValue),(()=>{const{committed:t,inputValue:e}=this.field;t||e||this._input!==document.activeElement||this._selectText()})))}loadDependencies(){return (0,componentsUtils/* loadCalciteComponents */.W)({button:()=>__webpack_require__.e(/* import() */ 42817).then(__webpack_require__.bind(__webpack_require__, 42817)),icon:()=>__webpack_require__.e(/* import() */ 96446).then(__webpack_require__.bind(__webpack_require__, 96446)),input:()=>__webpack_require__.e(/* import() */ 7311).then(__webpack_require__.bind(__webpack_require__, 7311)),"input-message":()=>__webpack_require__.e(/* import() */ 45177).then(__webpack_require__.bind(__webpack_require__, 45177))})}render(){const{field:t,mode:e}=this,i="input"===e,{locked:o,readOnly:n}=t;return (0,jsxFactory/* tsx */.K)("div",{class:this.classes({[TooltipEditableField_d.base]:!0,[TooltipEditableField_d.feedbackMode]:"feedback"===e,[TooltipEditableField_d.inputMode]:"input"===e,[TooltipEditableField_d.locked]:o,[TooltipEditableField_d.readOnly]:n})},(0,jsxFactory/* tsx */.K)("div",{class:TooltipEditableField_d.title,key:"title"},this._title),(0,jsxFactory/* tsx */.K)("div",{class:TooltipEditableField_d.value,key:"value",onkeydown:this._onKeyDown},i?this._renderValueInputMode():this._renderValueFeedbackMode()))}get _formattedValue(){return this.field.getFormattedValue(this.context)||m}get _rawDisplayValue(){return this.field.getRawDisplayValue(this.context)}get _suffix(){return this.field.getSuffix(this.context)}get _title(){const{title:t}=this.field;return"string"==typeof t?t:t(this.context)}get _messages(){return this.context?.messages.sketch??{}}_renderValueFeedbackMode(){return (0,jsxFactory/* tsx */.K)(jsxFactory/* tsxFragment */.w,null,(0,jsxFactory/* tsx */.K)("div",{class:TooltipEditableField_d.valueContent,key:"value-feedback"},this._formattedValue),this.field.locked&&"input"!==this.mode?(0,jsxFactory/* tsx */.K)("calcite-icon",{class:TooltipEditableField_d.lockIcon,icon:TooltipEditableField_h.lock,key:"icon",scale:"s"}):null)}_renderValueInputMode(){return this.field.readOnly?this._renderValueReadOnly():this._renderValueWritable()}_renderValueReadOnly(){return (0,jsxFactory/* tsx */.K)("div",{class:this.classes(TooltipEditableField_d.valueContent,TooltipEditableField_d.valueContentReadOnly),key:"value-read-only"},this._formattedValue)}_renderValueWritable(){const{field:t}=this,e=this._messages,{name:i,invalid:o}=t;return (0,jsxFactory/* tsx */.K)(jsxFactory/* tsxFragment */.w,null,(0,jsxFactory/* tsx */.K)("div",{class:TooltipEditableField_d.inputWrapper,key:"value-input"},(0,jsxFactory/* tsx */.K)("calcite-input",{afterCreate:this._onAfterCreate,afterRemoved:this._onAfterRemoved,class:TooltipEditableField_d.input,"data-field-name":i,"data-testid":`tooltip-field-${i}`,key:"input",onblur:this._onInputBlur,onfocus:this._selectText,onkeydown:this._onInputKeyDown,scale:"s",status:o?"invalid":"idle",type:"text",value:this._rawDisplayValue??m,onCalciteInputInput:this._onInput}),o?(0,jsxFactory/* tsx */.K)("calcite-input-message",{class:TooltipEditableField_d.inputMessage,scale:"s",status:"invalid"},e.invalidValue):null),(0,jsxFactory/* tsx */.K)("div",{class:TooltipEditableField_d.inputSuffix,key:"suffix"},this._suffix),this._renderedLockButton)}get _renderedLockButton(){const{name:t,locked:e,lockable:i}=this.field;if(!i)return (0,jsxFactory/* tsx */.K)("div",{key:"no-lock-button"});const o=this._messages,n=e?o.unlockConstraint:o.lockConstraint;return (0,jsxFactory/* tsx */.K)("calcite-button",{afterCreate:this._onLockAfterCreate,afterRemoved:this._onLockAfterRemoved,alignment:"center",appearance:"transparent",class:TooltipEditableField_d.button,"data-testid":`tooltip-field-${t}-lock`,iconStart:e?TooltipEditableField_h.lock:TooltipEditableField_h.unlock,key:"lock-button",kind:"neutral",label:n,onclick:this._onLockClick,scale:"s",tabIndex:-1,title:n})}};(0,tslib_es6._)([(0,property/* property */.MZ)()],TooltipEditableField_.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],TooltipEditableField_.prototype,"context",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],TooltipEditableField_.prototype,"mode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],TooltipEditableField_.prototype,"_input",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],TooltipEditableField_.prototype,"_lock",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],TooltipEditableField_.prototype,"_formattedValue",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],TooltipEditableField_.prototype,"_rawDisplayValue",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],TooltipEditableField_.prototype,"_suffix",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],TooltipEditableField_.prototype,"_title",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],TooltipEditableField_.prototype,"_messages",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],TooltipEditableField_.prototype,"_renderedLockButton",null),TooltipEditableField_=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.tooltip.components.TooltipEditableField")],TooltipEditableField_);const m="—";

;// ../node_modules/@arcgis/core/views/interactive/tooltip/content/Fields.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function Fields_i(i){const l=i.fields.filter((t=>!0===t?.visible));return 0===l.length?null:(0,jsxFactory/* tsx */.K)(jsxFactory/* tsxFragment */.w,null,l.map((e=>(0,jsxFactory/* tsx */.K)(TooltipEditableField_,{context:i.context,field:e,key:e.id,mode:i.mode}))))}

;// ../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentDrawMesh.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let TooltipContentDrawMesh_s=class extends S{_renderContent(){const{fieldContext:o,info:t,mode:i}=this,{visibleElements:s}=t;return (0,jsxFactory/* tsx */.K)(Fields_i,{context:o,fields:[s.coordinates?t.effectiveX:void 0,s.coordinates?t.effectiveY:void 0,s.elevation?t.elevation:void 0,s.orientation?t.orientation:void 0,s.scale?t.scale:void 0],mode:i})}};TooltipContentDrawMesh_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.tooltip.content.TooltipContentDrawMesh")],TooltipContentDrawMesh_s);

;// ../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentDrawPoint.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let i=class extends S{_renderContent(){const{fieldContext:o,info:t,mode:r}=this,{elevation:i,visibleElements:n}=t;return (0,jsxFactory/* tsx */.K)(Fields_i,{context:o,fields:[n.coordinates?t.effectiveX:void 0,n.coordinates?t.effectiveY:void 0,n.elevation?i:void 0],mode:r})}};i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.tooltip.content.TooltipContentDrawPoint")],i);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/tooltip/components/directionModeIcons.js
var directionModeIcons = __webpack_require__(96088);
;// ../node_modules/@arcgis/core/views/interactive/tooltip/components/DrawHeaderActions.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let DrawHeaderActions_p=class extends Widget/* default */.A{constructor(e){super(e),this.visibleElements={}}render(){return (0,jsxFactory/* tsx */.K)("div",{class:s},this._isElementVisible("direction")?(0,jsxFactory/* tsx */.K)(l,{messages:this.messages,sketchOptions:this.sketchOptions}):null)}loadDependencies(){return (0,componentsUtils/* loadCalciteComponents */.W)({button:()=>__webpack_require__.e(/* import() */ 42817).then(__webpack_require__.bind(__webpack_require__, 42817)),dropdown:()=>__webpack_require__.e(/* import() */ 13406).then(__webpack_require__.bind(__webpack_require__, 13406)),"dropdown-item":()=>__webpack_require__.e(/* import() */ 44490).then(__webpack_require__.bind(__webpack_require__, 44490)),"dropdown-group":()=>__webpack_require__.e(/* import() */ 16792).then(__webpack_require__.bind(__webpack_require__, 16792))})}_isElementVisible(e){return this.visibleElements?.[e]??this.sketchOptions.tooltips.visibleElements[e]}};function l(e){const{directionMode:t}=e.sketchOptions.values,o=e.messages?.sketch,s=o?.directionModeSelect?.title,r="absolute",c="relative";return (0,jsxFactory/* tsx */.K)("calcite-dropdown",{key:"direction-mode",placement:"bottom-end",scale:"s",widthScale:"s",onCalciteDropdownSelect:t=>{const o=t.currentTarget.selectedItems?.[0]?.getAttribute("data-mode");e.sketchOptions.values.directionMode=o??"absolute"}},(0,jsxFactory/* tsx */.K)("calcite-button",{alignment:"end",appearance:"transparent",iconStart:directionModeIcons/* directionModeIcons */.N[t],kind:"neutral",label:s,scale:"s",slot:"trigger",title:s}),(0,jsxFactory/* tsx */.K)("calcite-dropdown-group",{selectionMode:"single"},(0,jsxFactory/* tsx */.K)("calcite-dropdown-item",{"data-mode":c,"data-testid":"tooltip-direction-mode-relative",iconStart:directionModeIcons/* directionModeIcons */.N.relative,key:"relative",selected:t===c},o?.directionModeSelect?.relative),(0,jsxFactory/* tsx */.K)("calcite-dropdown-item",{"data-mode":r,"data-testid":"tooltip-direction-mode-absolute",iconStart:directionModeIcons/* directionModeIcons */.N.absolute,key:"absolute",selected:t===r},o?.directionModeSelect?.absolute)))}(0,tslib_es6._)([(0,messageBundle/* messageBundle */.G)("esri/views/interactive/tooltip/t9n/Tooltip"),(0,property/* property */.MZ)()],DrawHeaderActions_p.prototype,"messages",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],DrawHeaderActions_p.prototype,"sketchOptions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],DrawHeaderActions_p.prototype,"visibleElements",void 0),DrawHeaderActions_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.tooltip.components.DrawHeaderActions")],DrawHeaderActions_p);

;// ../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentDrawPolygon.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let TooltipContentDrawPolygon_n=class extends S{_renderContent(){const{fieldContext:o,info:e,mode:t}=this,{xyMode:r,visibleElements:n}=e;return (0,jsxFactory/* tsx */.K)(Fields_i,{context:o,fields:[..."direction-distance"===r?[n.direction?e.direction:void 0,n.distance?e.distance:void 0]:[n.coordinates?e.effectiveX:void 0,n.coordinates?e.effectiveY:void 0],n.elevation?e.elevation:void 0,n.area?e.area:void 0],mode:t})}_renderActions(){const{xyMode:o,sketchOptions:e}=this.info;return (0,jsxFactory/* tsx */.K)(DrawHeaderActions_p,{sketchOptions:e,visibleElements:{direction:"direction-distance"===o}})}};TooltipContentDrawPolygon_n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.tooltip.content.TooltipContentDrawPolygon")],TooltipContentDrawPolygon_n);

;// ../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentDrawPolyline.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let TooltipContentDrawPolyline_n=class extends S{_renderContent(){const{fieldContext:o,info:t,mode:e}=this,{xyMode:s,visibleElements:n}=t;return (0,jsxFactory/* tsx */.K)(Fields_i,{context:o,fields:[..."direction-distance"===s?[n.direction?t.direction:void 0,n.distance?t.distance:void 0]:[n.coordinates?t.effectiveX:void 0,n.coordinates?t.effectiveY:void 0],n.elevation?t.elevation:void 0,n.totalLength?t.totalLength:void 0],mode:e})}_renderActions(){const{xyMode:o,sketchOptions:t}=this.info;return (0,jsxFactory/* tsx */.K)(DrawHeaderActions_p,{sketchOptions:t,visibleElements:{direction:"direction-distance"===o}})}};TooltipContentDrawPolyline_n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.tooltip.content.TooltipContentDrawPolyline")],TooltipContentDrawPolyline_n);

;// ../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentDrawRectangle.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let TooltipContentDrawRectangle_n=class extends S{_renderContent(){const{area:t,xSize:e,ySize:s,visibleElements:n}=this.info,a=this._messagesTooltip.sketch,p=this._formatters;return (0,jsxFactory/* tsx */.K)(jsxFactory/* tsxFragment */.w,null,n.size&&null!=e&&null!=s?(0,jsxFactory/* tsx */.K)(TooltipField_a,{title:a.size,value:(0,jsxFactory/* tsx */.K)(ValueByValue_a,{left:p.length(e),right:p.length(s)})}):null,n.area?(0,jsxFactory/* tsx */.K)(TooltipField_a,{title:a.area,value:p.area(t)}):null)}};TooltipContentDrawRectangle_n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.tooltip.content.TooltipContentDrawRectangle")],TooltipContentDrawRectangle_n);

;// ../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentExtentRotate.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let TooltipContentExtentRotate_n=class extends S{_renderContent(){const{angle:t,visibleElements:o}=this.info,s=this._messagesTooltip.sketch;return (0,jsxFactory/* tsx */.K)(jsxFactory/* tsxFragment */.w,null,o.rotation?(0,jsxFactory/* tsx */.K)(TooltipField_a,{title:s.rotation,value:this._formatters.angleRelative(t)}):null)}};TooltipContentExtentRotate_n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.tooltip.content.TooltipContentExtentRotate")],TooltipContentExtentRotate_n);

;// ../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentExtentScale.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let TooltipContentExtentScale_n=class extends S{_renderContent(){const t=this.info,{visibleElements:e}=t,r=this._messagesTooltip.sketch,n=this._formatters;return (0,jsxFactory/* tsx */.K)(jsxFactory/* tsxFragment */.w,null,e.size?(0,jsxFactory/* tsx */.K)(TooltipField_a,{title:r.size,value:(0,jsxFactory/* tsx */.K)(ValueByValue_a,{left:n.length(t.xSize),right:n.length(t.ySize)})}):null,e.scale?(0,jsxFactory/* tsx */.K)(TooltipField_a,{title:r.scale,value:(0,jsxFactory/* tsx */.K)(ValueByValue_a,{left:n.scale(t.xScale),right:n.scale(t.yScale)})}):null)}};TooltipContentExtentScale_n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.tooltip.content.TooltipContentExtentScale")],TooltipContentExtentScale_n);

;// ../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentMovePoint.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let TooltipContentMovePoint_i=class extends S{_renderContent(){const{fieldContext:o,info:t,mode:r}=this,{visibleElements:i}=t;return (0,jsxFactory/* tsx */.K)(Fields_i,{context:o,fields:[i.coordinates?t.effectiveX:void 0,i.coordinates?t.effectiveY:void 0,i.elevation?t.elevation:void 0],mode:r})}};TooltipContentMovePoint_i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.tooltip.content.TooltipContentMovePoint")],TooltipContentMovePoint_i);

;// ../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentReshapeEdgeOffset.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let TooltipContentReshapeEdgeOffset_i=class extends S{_renderContent(){const{fieldContext:t,info:o,mode:s}=this,{visibleElements:i}=o;return (0,jsxFactory/* tsx */.K)(Fields_i,{context:t,fields:[i.distance?o.distance:void 0,i.area?o.area:void 0,i.totalLength?o.totalLength:void 0],mode:s})}};TooltipContentReshapeEdgeOffset_i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.tooltip.content.TooltipContentReshapeEdgeOffset")],TooltipContentReshapeEdgeOffset_i);

;// ../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentSelectedVertex.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let TooltipContentSelectedVertex_i=class extends S{_renderContent(){const{fieldContext:e,info:o,mode:r}=this,{visibleElements:i}=o;return (0,jsxFactory/* tsx */.K)(Fields_i,{context:e,fields:[i.coordinates?o.effectiveX:void 0,i.coordinates?o.effectiveY:void 0,i.elevation?o.elevation:void 0,i.area&&"polygon"===o.geometryType?o.area:null,i.totalLength&&"polyline"===o.geometryType?o.totalLength:null],mode:r})}};TooltipContentSelectedVertex_i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.tooltip.content.TooltipContentSelectedVertex")],TooltipContentSelectedVertex_i);

;// ../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentTransformMesh.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let TooltipContentTransformMesh_s=class extends S{_renderContent(){const{fieldContext:o,info:t,mode:i}=this,{visibleElements:s}=t;return (0,jsxFactory/* tsx */.K)(Fields_i,{context:o,fields:[s.coordinates?t.effectiveX:void 0,s.coordinates?t.effectiveY:void 0,s.elevation?t.elevation:void 0,s.orientation?t.orientation:void 0,s.scale?t.scale:void 0],mode:i})}};TooltipContentTransformMesh_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.tooltip.content.TooltipContentTransformMesh")],TooltipContentTransformMesh_s);

;// ../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentTransformPoint.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let TooltipContentTransformPoint_s=class extends S{_renderContent(){const{fieldContext:o,info:t,mode:i}=this,{visibleElements:s}=t;return (0,jsxFactory/* tsx */.K)(Fields_i,{context:o,fields:[s.coordinates?t.effectiveX:void 0,s.coordinates?t.effectiveY:void 0,s.elevation?t.elevation:void 0,s.orientation?t.orientation:void 0,s.size?t.size:void 0],mode:i})}};TooltipContentTransformPoint_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.tooltip.content.TooltipContentTransformPoint")],TooltipContentTransformPoint_s);

;// ../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentTranslate.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let TooltipContentTranslate_n=class extends S{_renderContent(){const{info:t}=this,{visibleElements:o}=t,e=this._messagesTooltip.sketch,n=this._formatters;return (0,jsxFactory/* tsx */.K)(jsxFactory/* tsxFragment */.w,null,o.distance?(0,jsxFactory/* tsx */.K)(TooltipField_a,{title:e.distance,value:n.length(t.distance)}):null)}};TooltipContentTranslate_n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.tooltip.content.TooltipContentTranslate")],TooltipContentTranslate_n);

;// ../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentTranslateVertex.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let TooltipContentTranslateVertex_i=class extends S{_renderContent(){const{distance:t,elevation:e,area:l,totalLength:i,visibleElements:n}=this.info,a=this._messagesTooltip.sketch,c=this._formatters;return (0,jsxFactory/* tsx */.K)(jsxFactory/* tsxFragment */.w,null,n.distance?(0,jsxFactory/* tsx */.K)(TooltipField_a,{title:a.distance,value:c.length(t)}):null,n.elevation&&null!=e?.actual?(0,jsxFactory/* tsx */.K)(TooltipField_a,{title:a.elevation,value:c.verticalLength(e.actual)}):null,n.area&&null!=l?(0,jsxFactory/* tsx */.K)(TooltipField_a,{title:a.area,value:c.area(l)}):null,n.totalLength&&null!=i?(0,jsxFactory/* tsx */.K)(TooltipField_a,{title:a.totalLength,value:c.length(i)}):null)}};TooltipContentTranslateVertex_i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.tooltip.content.TooltipContentTranslateVertex")],TooltipContentTranslateVertex_i);

;// ../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentTranslateXY.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let TooltipContentTranslateXY_n=class extends S{_renderContent(){const{info:t}=this,{visibleElements:o}=t,e=this._messagesTooltip.sketch,n=this._formatters;return (0,jsxFactory/* tsx */.K)(jsxFactory/* tsxFragment */.w,null,o.distance?(0,jsxFactory/* tsx */.K)(TooltipField_a,{title:e.distance,value:n.length(t.distance)}):null)}};TooltipContentTranslateXY_n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.tooltip.content.TooltipContentTranslateXY")],TooltipContentTranslateXY_n);

;// ../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentTranslateZ.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let TooltipContentTranslateZ_n=class extends S{_renderContent(){const{info:t}=this,{visibleElements:o}=t,e=this._messagesTooltip.sketch;return (0,jsxFactory/* tsx */.K)(jsxFactory/* tsxFragment */.w,null,o.distance?(0,jsxFactory/* tsx */.K)(TooltipField_a,{title:e.distance,value:this._formatters.verticalLengthRelative(t.distance)}):null)}};TooltipContentTranslateZ_n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.tooltip.content.TooltipContentTranslateZ")],TooltipContentTranslateZ_n);

;// ../node_modules/@arcgis/core/views/interactive/tooltip/content/tooltipContentFactory.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function j(j,d){if(null==d)return null;const x=document.createElement("div");switch(d.type){case"draw-point":case"draw-multipoint":return new i({tooltip:j,info:d,container:x});case"draw-polygon":return new TooltipContentDrawPolygon_n({tooltip:j,info:d,container:x});case"draw-polyline":return new TooltipContentDrawPolyline_n({tooltip:j,info:d,container:x});case"draw-mesh":return new TooltipContentDrawMesh_s({tooltip:j,info:d,container:x});case"draw-rectangle":return new TooltipContentDrawRectangle_n({tooltip:j,info:d,container:x});case"draw-circle":return new n({tooltip:j,info:d,container:x});case"extent-rotate":return new TooltipContentExtentRotate_n({tooltip:j,info:d,container:x});case"extent-scale":return new TooltipContentExtentScale_n({tooltip:j,info:d,container:x});case"move-point":return new TooltipContentMovePoint_i({tooltip:j,info:d,container:x});case"selected-vertex":return new TooltipContentSelectedVertex_i({tooltip:j,info:d,container:x});case"transform-point":return new TooltipContentTransformPoint_s({tooltip:j,info:d,container:x});case"transform-mesh":return new TooltipContentTransformMesh_s({tooltip:j,info:d,container:x});case"translate":return new TooltipContentTranslate_n({tooltip:j,info:d,container:x});case"translate-vertex":return new TooltipContentTranslateVertex_i({tooltip:j,info:d,container:x});case"translate-z":return new TooltipContentTranslateZ_n({tooltip:j,info:d,container:x});case"translate-xy":return new TooltipContentTranslateXY_n({tooltip:j,info:d,container:x});case"reshape-edge-offset":return new TooltipContentReshapeEdgeOffset_i({tooltip:j,info:d,container:x})}}

;// ../node_modules/@arcgis/core/views/interactive/Tooltip.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const y={base:`${e}`,ltr:`${e}--ltr`,rtl:`${e}--rtl`,debug:`${e}--debug`},g=20,Tooltip_=16,C="bottom-end";let b=class extends Evented/* default */.A.EventedAccessor{constructor(t){super(t),this.info=null,this.options=null,this.position=null,this.content=null,this._focused=!1,this.outerContainer=document.createElement("div"),this.debug=!1,this._lastPosition=null,this._rtl=!1,this._prevXY=[0,0]}initialize(){const{outerContainer:t}=this;this.addHandles([(0,reactiveUtils/* watch */.wB)((()=>this.view.overlay?.surface),(e=>{t.remove(),e?.appendChild(t),this._rtl=(0,widgetUtils/* isRTL */.V8)(e)}),reactiveUtils/* syncAndInitial */.pc),(0,reactiveUtils/* watch */.wB)((()=>this.info),((e,o)=>{if(null!=this.content&&null!=e&&null!=o&&e.type===o.type)this.content.info=e;else{(0,maybe/* destroyMaybe */.pR)(this.content);const o=j(this,e);o?(this.content=o,o.container&&t.appendChild(o.container),this.exitInputMode()):this.content=null}}),reactiveUtils/* syncAndInitial */.pc),(0,reactiveUtils/* watch */.wB)((()=>({container:this.outerContainer,style:this._outerContainerStyle})),(({container:t,style:e})=>{Object.assign(t.style,e)}),reactiveUtils/* initial */.Vh),(0,reactiveUtils/* watch */.wB)((()=>({outerContainer:this.outerContainer,placement:this.effectivePlacement,effectiveOffset:this._effectiveOffset,rtl:this._rtl,debug:this.debug})),(({outerContainer:t,placement:e,effectiveOffset:o,rtl:n,debug:i})=>{const{classList:s}=t;s.add(y.base),s.toggle(y.rtl,n),s.toggle(y.ltr,!n),s.toggle(y.debug,i),this.outerContainer.style.setProperty("--offset",`${o}px`),(0,modeUtils/* setCalciteModeClass */.Tu)(t),w(t,e)}),reactiveUtils/* initial */.Vh),(0,reactiveUtils/* when */.z7)((()=>"feedback"===this.mode),(()=>{this.position=null,this._clearOverride("effectivePlacement")}),reactiveUtils/* sync */.OH),(0,events.on)(this.outerContainer,"paste",(t=>{this.emit("paste",t)})),(0,events.on)(this.outerContainer,["focusin","focusout"],(()=>{this._focused=this.content?.container?.contains(document.activeElement)??!1}))])}destroy(){this.info=null,this.content=(0,maybe/* destroyMaybe */.pR)(this.content),this.outerContainer.remove()}get mode(){return this.content?.mode??"feedback"}get focused(){return this._focused}get visible(){return"none"!==this._outerContainerStyle.display}get contentContainer(){return this.content?.container}get effectivePlacement(){const t=this.options?.placement;return"auto"===t?"bottom-end":t??C}get _screenPoint(){const{inputManager:t}=this.view;return t?.multiTouchActive?null:t?.latestPointerLocation}get _effectiveOffset(){return this.options?.offset??g}get _outerContainerStyle(){const t=this.position??this._screenPoint;if(this._lastPosition=(0,screenUtils/* cloneScreenPoint */.y8)(t),null!=t&&null!=this.content){return{display:"block",transform:`translate(${Math.round(t.x)}px, ${Math.round(t.y)}px)`}}return{display:"none",transform:"none"}}clear(){this.info=null}async enterInputMode(t){const e=this.position??this._lastPosition??this._screenPoint,o=this.position=(0,screenUtils/* cloneScreenPoint */.y8)(e),{effectivePlacement:n}=this;this._override("effectivePlacement",n);const i=()=>{o&&(this.position=Tooltip_j(this.contentContainer,o,this._effectiveOffset,this.view),Object.assign(this.outerContainer.style,this._outerContainerStyle))};await(this.content?.enterInputMode(t,i))}async exitInputMode(t){await(this.content?.exitInputMode(t))}onDragStart(t,e){this._prevXY=[t,e]}onDrag(t,e){const o=t-this._prevXY[0],n=e-this._prevXY[1];this._prevXY=[t,e];const{position:i}=this;if(i){const{view:s}=this,r=t-s.position[0],c=e-s.position[1];if(r<0||r>s.width||c<0||c>s.height-Tooltip_)return;this.position=(0,screenUtils/* createScreenPoint */.tc)(i.x+o,i.y+n)}}onDragEnd(){this._prevXY=[0,0]}};function Tooltip_j(t,e,o,n){if(!t||!n.container)return e;const i=t.getBoundingClientRect(),{left:s,top:r}=n.container.getBoundingClientRect();let{x:c,y:l}=e;const a=i.left-s-o;a<0&&(c-=a);const u=i.right-s+o-n.width;u>0&&(c-=u);const h=i.top-r-o;h<0&&(l-=h);const f=i.bottom-r+o-n.height;return f>0&&(l-=f),(0,screenUtils/* createScreenPoint */.tc)(c,l)}(0,tslib_es6._)([(0,property/* property */.MZ)({nonNullable:!0})],b.prototype,"view",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],b.prototype,"info",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],b.prototype,"options",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],b.prototype,"position",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],b.prototype,"content",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],b.prototype,"mode",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],b.prototype,"_focused",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],b.prototype,"focused",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],b.prototype,"outerContainer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],b.prototype,"contentContainer",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],b.prototype,"effectivePlacement",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],b.prototype,"debug",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],b.prototype,"_lastPosition",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],b.prototype,"_screenPoint",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],b.prototype,"_rtl",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],b.prototype,"_effectiveOffset",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],b.prototype,"_outerContainerStyle",null),b=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.Tooltip")],b);const P=["top","bottom","leading","trailing"].flatMap((t=>[Tooltip_O(`${t}-start`),Tooltip_O(t),Tooltip_O(`${t}-end`)]));function Tooltip_O(t){return`${y.base}--${t}`}function w({classList:t},e){P.forEach((e=>t.remove(e))),t.add(Tooltip_O(e))}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/support/angularMeasurementUtils.js
var angularMeasurementUtils = __webpack_require__(52857);
;// ../node_modules/@arcgis/core/views/interactive/tooltip/tooltipCommonUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function R(t){const o=new b(t());return o.addHandles((0,reactiveUtils/* watch */.wB)((()=>t()),(({view:t,options:e,info:n})=>{o.view=t,void 0!==e&&(o.options=e),void 0!==n&&(o.info=n)}))),o}function V(t,o){const e=(0,meshVertexSpaceUtils/* isRelativeVertexSpace */.Hq)(o.vertexSpace),{scale:n,orientation:l}=t,{transform:a}=o,s=T(a);e&&null!=s?(l.actual=(0,quantityUtils/* createAngle */.Wq)(s,"degrees","arithmetic"),l.visible=!0):(l.actual=null,l.visible=!1),e?(n.actual=(0,quantityUtils/* createScalar */.LF)(G(a)),n.visible=!0):(n.actual=null,n.visible=!1)}function z(t,o,e){if(!o||!(0,meshVertexSpaceUtils/* isRelativeVertexSpace */.Hq)(o.vertexSpace))return;const n=o.transform??=new MeshTransform/* default */.A;D(t,n,e),tooltipCommonUtils_P(t,n,e)}function D(t,o,e){const n=(0,angularMeasurementUtils/* getDegreesArithmetic */.Ef)(t.orientation.actual),r=q(o.rotationAxis);if(null==n||null==r)return;const i=o.rotationAngle,l=n*r,a=(n-i)*r;i!==l&&(e?.onRotateStart(0),o.rotationAngle=l,e?.onRotate(a),e?.onRotateStop(a))}function tooltipCommonUtils_P(t,o,e){const n=t.scale.actual?.value,r=G(o);if(null==n||n===r)return;const{scale:i}=o;let l;if(0===r)l=(0,vec3f64/* clone */.o8)(vec3f64/* ONES */.Un);else{const t=n/r;l=(0,vec32.g)((0,vec3f64/* create */.vt)(),i,t)}e?.onScaleStart(i[0],i[1],i[2]),o.scale=l,e?.onScale(l[0],l[1],l[2]),e?.onScaleStop(l[0],l[1],l[2])}function F(t,o){const{x:e,y:r,z:i}=o,{x:l,y:a,z:s}=tooltipCommonUtils_E(t,o.spatialReference);return{dx:null==l||(0,mathUtils/* floatEqualUlp */.Io)(l,e)?0:l-e,dy:null==a||(0,mathUtils/* floatEqualUlp */.Io)(a,r)?0:a-r,dz:null==s||null==i||(0,mathUtils/* floatEqualUlp */.Io)(s,i)?0:s-i}}function tooltipCommonUtils_E(t,o){let e,n;t.geographic?(e=(0,angularMeasurementUtils/* getDegreesGeographic */.hF)(t.longitude.actual),n=(0,angularMeasurementUtils/* getDegreesGeographic */.hF)(t.latitude.actual),(0,spatialReferenceUtils/* isWebMercator */.K8)(o)&&(null!=e&&null!=n?[e,n]=(0,webMercatorUtils/* lngLatToXY */.je)(e,n,I):null!=e?e=(0,webMercatorUtils/* lngLatToXY */.je)(e,0,I)[0]:null!=n&&(n=(0,webMercatorUtils/* lngLatToXY */.je)(0,n,I)[1]))):(e=t.x.actual?.value,n=t.y.actual?.value);const r=t.elevation.actual,i=(0,unitUtils/* verticalLengthUnitFromSpatialReference */.mq)(o);return{x:e,y:n,z:null!=i&&null!=r?(0,quantityUtils/* valueInUnit */.l3)(r,i):void 0}}const I=[0,0];function T(t){if(!t)return 0;const o=q(t.rotationAxis);return null!=o?o*t.rotationAngle:null}function q(t){return (0,vec32.G)(t,vec3f64/* UNIT_Z */.Cb)?1:(0,vec32.G)(t,B)?-1:null}const B=(0,vec32.u)((0,vec3f64/* create */.vt)(),vec3f64/* UNIT_Z */.Cb);function G(t){return t?Math.max(...t.scale):1}function H(t,o){return!("key-down"!==t.type||t.key!==keybindings/* tooltipKeys */.ac.enterInputMode||!o||!tooltipCommonUtils_O(o.info))&&(o.enterInputMode(),t.preventDefault(),t.stopPropagation(),!0)}function tooltipCommonUtils_O(t){const o=t?.sketchOptions;if(!o)return!1;const{inputEnabled:e,visibleElements:n}=o.tooltips;return e&&!0===t.editableFields.some((({name:t})=>"x"===t||"y"===t?n.coordinates:n[t]))}function tooltipCommonUtils_C(n,r){let i=null;return (0,handleUtils/* handlesGroup */.vE)([n.on("paste",(async o=>{i?.abort(),i=(0,asyncUtils/* createTask */.UT)((async()=>{(0,coordinateFormatter/* isLoaded */.s1)()||await (0,coordinateFormatter/* load */.Hh)(),J(o,n.info,r)}))})),(0,asyncUtils/* createTask */.UT)((()=>(0,coordinateFormatter/* load */.Hh)())),(0,handleUtils/* makeHandle */.hA)((()=>i?.abort()))])}function J(t,o,e){if(!o||!("geographic"in o))return;const n=t.clipboardData?.getData("text");if(!n)return;const r=o=>{t.stopPropagation(),t.preventDefault(),e?.onBeforePaste(),o(),e?.onAfterPaste()};if(o.geographic){const t=(0,parsingAndFormattingUtils/* parseLatitudeLongitude */.X3)(n);t&&r((()=>{o.longitude.applyValue(t.longitude),o.latitude.applyValue(t.latitude)}))}else{const t=(0,parsingAndFormattingUtils/* parseXY */.Nr)(n);t&&r((()=>{o.x.applyValue(t.x),o.y.applyValue(t.y)}))}}


/***/ })

};
;