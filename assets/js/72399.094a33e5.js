"use strict";
exports.id = 72399;
exports.ids = [72399,62706];
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

/***/ 72399:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ J)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/Graphic.js
var Graphic = __webpack_require__(25707);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Evented.js
var Evented = __webpack_require__(17306);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(6267);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/quantityUtils.js
var quantityUtils = __webpack_require__(73569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(85251);
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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Point.js
var Point = __webpack_require__(97066);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Polygon.js
var Polygon = __webpack_require__(62802);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Polyline.js
var Polyline = __webpack_require__(42238);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/aaBoundingRect.js
var aaBoundingRect = __webpack_require__(80510);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/boundsUtils.js
var boundsUtils = __webpack_require__(36358);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/coordsUtils.js
var coordsUtils = __webpack_require__(65319);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Multipoint.js
var Multipoint = __webpack_require__(90067);
;// ../node_modules/@arcgis/core/geometry/support/rotate.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function o(n,e,t,s){const i=[];for(const o of n){const n=o.slice();i.push(n);const r=e*(o[0]-s.x)-t*(o[1]-s.y)+s.x,a=t*(o[0]-s.x)+e*(o[1]-s.y)+s.y;n[0]=r,n[1]=a}return i}function rotate_r(r,a,c){const{hasM:m,hasZ:x,spatialReference:f}=r,p=a*Math.PI/180,l=Math.cos(p),h=Math.sin(p);if("xmin"in r&&(c=c??r.center,r=new Polygon/* default */.A({spatialReference:f,rings:[[[r.xmin,r.ymin],[r.xmin,r.ymax],[r.xmax,r.ymax],[r.xmax,r.ymin],[r.xmin,r.ymin]]]})),"paths"in r){c=c??r.extent.center;const n=[];for(const e of r.paths)n.push(o(e,l,h,c));return new Polyline/* default */.A({hasM:m,hasZ:x,spatialReference:f,paths:n})}if("rings"in r){c=c??r.extent.center;const n=[];for(const e of r.rings){const t=(0,coordsUtils/* isClockwise */.$3)(e),s=o(e,l,h,c);(0,coordsUtils/* isClockwise */.$3)(s)!==t&&s.reverse(),n.push(s)}return new Polygon/* default */.A({hasM:m,hasZ:x,spatialReference:f,rings:n})}if("x"in r){c=c??r;const n=new Point/* default */.A({x:l*(r.x-c.x)-h*(r.y-c.y)+c.x,y:h*(r.x-c.x)+l*(r.y-c.y)+c.y,spatialReference:f});return null!=r.z&&(n.z=r.z),null!=r.m&&(n.m=r.m),n}return"points"in r?(c=c??r.extent.center,new Multipoint/* default */.A({hasM:m,hasZ:x,points:o(r.points,l,h,c),spatialReference:f})):null}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleFillSymbol.js
var SimpleFillSymbol = __webpack_require__(68882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleLineSymbol.js + 2 modules
var SimpleLineSymbol = __webpack_require__(40241);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleMarkerSymbol.js
var SimpleMarkerSymbol = __webpack_require__(23369);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/draw/support/drawUtils.js
var drawUtils = __webpack_require__(18578);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/draw/support/GraphicMover.js + 1 modules
var GraphicMover = __webpack_require__(62706);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/draw/support/HighlightHelper.js
var HighlightHelper = __webpack_require__(91933);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/draw/support/layerUtils.js
var layerUtils = __webpack_require__(7407);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/draw/support/settings.js
var settings = __webpack_require__(38620);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/sketch/SketchOptions.js
var SketchOptions = __webpack_require__(76748);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/tooltip/tooltipCommonUtils.js + 26 modules
var tooltipCommonUtils = __webpack_require__(45565);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/tooltip/infos/ExtentRotateTooltipInfo.js
var ExtentRotateTooltipInfo = __webpack_require__(5577);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/tooltip/infos/ExtentScaleTooltipInfo.js
var ExtentScaleTooltipInfo = __webpack_require__(63874);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/interactive/tooltip/infos/TranslateTooltipInfo.js
var TranslateTooltipInfo = __webpack_require__(56326);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/support/extentUtils.js
var extentUtils = __webpack_require__(41811);
;// ../node_modules/@arcgis/core/views/draw/support/Box.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class E{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.dx=i,this.dy=s,this.type="move-start"}}class z{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.dx=i,this.dy=s,this.type="move"}}class B{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.dx=i,this.dy=s,this.type="move-stop"}}class N{constructor(t,e,i){this.graphics=t,this.mover=e,this.angle=i,this.type="rotate-start"}}class U{constructor(t,e,i){this.graphics=t,this.mover=e,this.angle=i,this.type="rotate"}}class Y{constructor(t,e,i){this.graphics=t,this.mover=e,this.angle=i,this.type="rotate-stop"}}class P{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.xScale=i,this.yScale=s,this.type="scale-start"}}class A{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.xScale=i,this.yScale=s,this.type="scale"}}class X{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.xScale=i,this.yScale=s,this.type="scale-stop"}}const D=settings/* settings */.W.transformGraphics,F={centerIndicator:new SimpleMarkerSymbol/* default */.A({style:"cross",size:D.center.size,color:D.center.color}),fill:{default:new SimpleFillSymbol/* default */.A({color:D.fill.color,outline:{color:D.fill.outlineColor,join:"round",width:1}}),active:new SimpleFillSymbol/* default */.A({color:D.fill.stagedColor,outline:{color:D.fill.outlineColor,join:"round",style:"dash",width:1}})},handles:{default:new SimpleMarkerSymbol/* default */.A({style:"square",size:D.vertex.size,color:D.vertex.color,outline:{color:D.vertex.outlineColor,width:1}}),hover:new SimpleMarkerSymbol/* default */.A({style:"square",size:D.vertex.hoverSize,color:D.vertex.hoverColor,outline:{color:D.vertex.hoverOutlineColor,width:1}})},rotator:{default:new SimpleMarkerSymbol/* default */.A({style:"circle",size:D.vertex.size,color:D.vertex.color,outline:{color:D.vertex.outlineColor,width:1}}),hover:new SimpleMarkerSymbol/* default */.A({style:"circle",size:D.vertex.hoverSize,color:D.vertex.hoverColor,outline:{color:D.vertex.hoverOutlineColor,width:1}})},rotatorLine:new SimpleLineSymbol/* default */.A({color:D.line.color,width:1})};let V=class extends Evented/* default */.A.EventedAccessor{constructor(t){super(t),this._activeHandleGraphic=null,this._graphicAttributes={esriSketchTool:"box"},this._mover=null,this._centerGraphic=null,this._backgroundGraphic=null,this._vertexGraphics=[],this._rotateHandleGraphic=null,this._rotateGraphicOffset=20,this._angleOfRotation=0,this._rotateLineGraphic=null,this._startInfo=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this.tooltip=null,this.type="box",this.callbacks={onMoveStart(){},onMove(){},onMoveStop(){},onScaleStart(){},onScale(){},onScaleStop(){},onRotateStart(){},onRotate(){},onRotateStop(){},onGraphicClick(){}},this.enableMovement=!0,this.enableRotation=!0,this.enableScaling=!0,this.graphics=[],this.highlightName=null,this.highlightsEnabled=!0,this.layer=null,this.preserveAspectRatio=!1,this.showCenterGraphic=!0,this.symbols=F,this.sketchOptions=new SketchOptions/* default */.A,this.view=null,this._getBounds=(()=>{const t=(0,aaBoundingRect/* create */.vt)();return(e,i)=>{e[0]=Number.POSITIVE_INFINITY,e[1]=Number.POSITIVE_INFINITY,e[2]=Number.NEGATIVE_INFINITY,e[3]=Number.NEGATIVE_INFINITY;for(const s of i){if(!s)continue;let i,o,r,a;if("point"===s.type)i=r=s.x,o=a=s.y;else if("multipoint"===s.type){const e=(0,coordsUtils/* geometryToCoordinates */.$K)(s);[i,o,r,a]=(0,boundsUtils/* getRingsOrPathsBounds */.Yz)(t,[e])}else if("extent"===s.type)[i,o,r,a]=[s.xmin,s.ymin,s.xmax,s.ymax];else{const e=(0,coordsUtils/* geometryToCoordinates */.$K)(s);[i,o,r,a]=(0,boundsUtils/* getRingsOrPathsBounds */.Yz)(t,e)}e[0]=Math.min(i,e[0]),e[1]=Math.min(o,e[1]),e[2]=Math.max(r,e[2]),e[3]=Math.max(a,e[3])}return e}})()}initialize(){const t=this.view;this._highlightHelper=new HighlightHelper/* default */.A({view:t}),this._setup(),this.addHandles([(0,reactiveUtils/* when */.z7)((()=>t?.ready),(()=>{const{layer:t,view:e}=this;(0,layerUtils/* addUniqueLayer */.Y3)(e,t)}),{once:!0,initial:!0}),(0,reactiveUtils/* watch */.wB)((()=>this.preserveAspectRatio),(()=>{this._activeHandleGraphic&&(this._scaleGraphic(this._activeHandleGraphic),this._updateGraphics(),this._updateTooltip(this._activeHandleGraphic))})),(0,reactiveUtils/* watch */.wB)((()=>t?.scale),(()=>{this._updateRotateGraphic(),this._updateRotateLineGraphic()})),(0,reactiveUtils/* watch */.wB)((()=>this.graphics),(()=>this.refresh())),(0,reactiveUtils/* watch */.wB)((()=>this.layer),((t,e)=>{e&&this._resetGraphics(e),this.refresh()})),(0,reactiveUtils/* watch */.wB)((()=>[this.highlightsEnabled,this.highlightName]),(()=>{this._highlightHelper?.removeAll(),this._setUpHighlights()})),(0,reactiveUtils/* watch */.wB)((()=>this.sketchOptions.tooltips.effectiveEnabled),(e=>{this.tooltip=e?(0,tooltipCommonUtils/* makeTooltip */.A)((()=>({view:t,options:this.sketchOptions.tooltips}))):(0,maybe/* destroyMaybe */.pR)(this.tooltip)}),reactiveUtils/* syncAndInitial */.pc),(0,reactiveUtils/* watch */.wB)((()=>this.view.effectiveTheme.accentColor),(()=>this._updateSymbolsForTheme()),reactiveUtils/* initial */.Vh),this.on("move-start",(t=>this.callbacks?.onMoveStart?.(t))),this.on("move",(t=>this.callbacks?.onMove?.(t))),this.on("move-stop",(t=>this.callbacks?.onMoveStop?.(t))),this.on("rotate-start",(t=>this.callbacks?.onRotateStart?.(t))),this.on("rotate",(t=>this.callbacks?.onRotate?.(t))),this.on("rotate-stop",(t=>this.callbacks?.onRotateStop?.(t))),this.on("scale-start",(t=>this.callbacks?.onScaleStart?.(t))),this.on("scale",(t=>this.callbacks?.onScale?.(t))),this.on("scale-stop",(t=>this.callbacks?.onScaleStop?.(t)))])}destroy(){this._reset(),this.tooltip=(0,maybe/* destroyMaybe */.pR)(this.tooltip)}get state(){const t=this.view?.ready??!1,e=this.graphics.length&&this.layer;return t&&e?"active":t?"ready":"disabled"}isUIGraphic(t){return this._vertexGraphics.includes(t)||t===this._backgroundGraphic||t===this._centerGraphic||t===this._rotateHandleGraphic||t===this._rotateLineGraphic}move(t,e){if(this._mover&&this.graphics.length){for(const i of this.graphics){const s=i.geometry,o=(0,drawUtils/* cloneMove */.lR)(s,t,e,this.view);i.geometry=o}this.refresh(),this.emit("move-stop",new B(this.graphics,null,t,e))}}scale(t,e){if(this._mover&&this.graphics.length){for(const i of this.graphics){const s=i.geometry,o=(0,drawUtils/* scale */.hs)(s,t,e);i.geometry=o}this.refresh(),this.emit("scale-stop",new X(this.graphics,null,t,e))}}rotate(t,e){if(this._mover&&this.graphics.length){if(!e){const t=this._vertexGraphics[1].geometry.x,i=this._vertexGraphics[3].geometry.y;e=new Point/* default */.A(t,i,this.view.spatialReference)}for(const i of this.graphics){const s=i.geometry,o=rotate_r(s,t,e);i.geometry=o}this.refresh(),this.emit("rotate-stop",new Y(this.graphics,null,t))}}refresh(){this._reset(),this._setup()}reset(){this.graphics=[]}_setup(){"active"===this.state&&(this._setUpHighlights(),this._setupGraphics(),this._setupMover(),this._updateGraphics())}_reset(){this._highlightHelper?.removeAll(),this._resetGraphicStateVars(),this._resetGraphics(),this._updateTooltip(),this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}_resetGraphicStateVars(){this._startInfo=null,this._activeHandleGraphic=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this._angleOfRotation=0}_resetGraphics(t){(t=t||this.layer)&&(t.removeMany(this._vertexGraphics),t.remove(this._backgroundGraphic),t.remove(this._centerGraphic),t.remove(this._rotateHandleGraphic),t.remove(this._rotateLineGraphic)),this._vertexGraphics.forEach((t=>!t.destroyed&&t.destroy())),!this._backgroundGraphic.destroyed&&this._backgroundGraphic.destroy(),!this._centerGraphic.destroyed&&this._centerGraphic.destroy(),!this._rotateHandleGraphic.destroyed&&this._rotateHandleGraphic.destroy(),!this._rotateLineGraphic.destroyed&&this._rotateLineGraphic.destroy(),this._vertexGraphics=[],this._backgroundGraphic=null,this._centerGraphic=null,this._rotateHandleGraphic=null,this._rotateLineGraphic=null}_setupMover(){let t=[];this.enableScaling&&(t=t.concat(this._vertexGraphics)),this.enableRotation&&t.push(this._rotateHandleGraphic),this.enableMovement&&(t=t.concat(this.graphics,this._backgroundGraphic)),this.showCenterGraphic&&t.push(this._centerGraphic),this._mover=new GraphicMover["default"]({enableMoveAllGraphics:!1,highlightsEnabled:!1,indicatorsEnabled:!1,view:this.view,graphics:t,callbacks:{onGraphicClick:t=>this._onGraphicClickCallback(t),onGraphicMoveStart:t=>this._onGraphicMoveStartCallback(t),onGraphicMove:t=>this._onGraphicMoveCallback(t),onGraphicMoveStop:t=>this._onGraphicMoveStopCallback(t),onGraphicPointerOver:t=>this._onGraphicPointerOverCallback(t),onGraphicPointerOut:t=>this._onGraphicPointerOutCallback(t)}})}_getStartInfo(t){const[e,i,s,o]=this._getBoxBounds((0,aaBoundingRect/* create */.vt)()),r=Math.abs(s-e),a=Math.abs(o-i),h=(s+e)/2,c=(o+i)/2,{x:n,y:l}=t.geometry;return{width:r,height:a,centerX:h,centerY:c,startX:n,startY:l,graphicInfos:this._getGraphicInfos(),box:this._backgroundGraphic.geometry,rotate:this._rotateHandleGraphic.geometry}}_getGraphicInfos(){return this.graphics.map((t=>this._getGraphicInfo(t)))}_getGraphicInfo(t){const e=t.geometry,[i,s,o,r]=this._getBounds((0,aaBoundingRect/* create */.vt)(),[e]);return{width:Math.abs(o-i),height:Math.abs(r-s),centerX:(o+i)/2,centerY:(r+s)/2,geometry:e}}_onGraphicClickCallback(t){t.viewEvent.stopPropagation(),this.emit("graphic-click",t),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(t)}_onGraphicMoveStartCallback(t){const{_angleOfRotation:e,_xScale:i,_yScale:s,_backgroundGraphic:o,_vertexGraphics:r,_rotateHandleGraphic:a,symbols:h}=this,c=t.graphic;this._resetGraphicStateVars(),this._hideGraphicsBeforeUpdate(),o.symbol=h.fill.active,this._startInfo=this._getStartInfo(c),this._updateTooltip(c,t.viewEvent),c===a?(this.view.cursor="grabbing",this.emit("rotate-start",new N(this.graphics,c,e))):r.includes(c)?(this._activeHandleGraphic=c,this.emit("scale-start",new P(this.graphics,c,i,s))):this.emit("move-start",new E(this.graphics,c,t.dx,t.dy))}_onGraphicMoveCallback(t){const e=t.graphic;if(this._startInfo)if(this._vertexGraphics.includes(e))this._scaleGraphic(e),this._updateTooltip(e,t.viewEvent),this.emit("scale",new A(this.graphics,e,this._xScale,this._yScale));else if(e===this._rotateHandleGraphic)this._rotateGraphic(e),this._updateTooltip(e,t.viewEvent),this.emit("rotate",new U(this.graphics,e,this._angleOfRotation));else{const{dx:i,dy:s}=t;this._totalDx+=i,this._totalDy+=s,this._moveGraphic(e,i,s),this._updateTooltip(e,t.viewEvent),this.emit("move",new z(this.graphics,e,i,s))}}_onGraphicMoveStopCallback(t){const e=t.graphic;if(!this._startInfo)return void this.refresh();const{_angleOfRotation:i,_totalDx:s,_totalDy:o,_xScale:r,_yScale:a,_vertexGraphics:h,_rotateHandleGraphic:c}=this;this.refresh(),e===c?(this.view.cursor="pointer",this.emit("rotate-stop",new Y(this.graphics,e,i))):h.includes(e)?this.emit("scale-stop",new X(this.graphics,e,r,a)):this.emit("move-stop",new B(this.graphics,e,s,o))}_onGraphicPointerOverCallback(t){const{_backgroundGraphic:e,_vertexGraphics:i,graphics:s,_rotateHandleGraphic:o,symbols:r,view:a}=this,h=t.graphic;if(this._hoveredGraphic=h,h===o)return o.symbol=r.rotator.hover,a.cursor="pointer",void this._updateTooltip(h);if(s.includes(h)||h===e)return void(a.cursor="move");if(!i.includes(h))return void(a.cursor="pointer");this._updateTooltip(h),t.graphic.symbol=r.handles.hover;const c=a.rotation;let n,l=t.index;switch(l<8&&(c>=0&&c<45?l%=8:l=c>=45&&c<90?(l+1)%8:c>=90&&c<135?(l+2)%8:c>=135&&c<180?(l+3)%8:c>=180&&c<225?(l+4)%8:c>=225&&c<270?(l+5)%8:c>=270&&c<315?(l+6)%8:(l+7)%8),l){case 0:case 4:n="nwse-resize";break;case 1:case 5:n="ns-resize";break;case 2:case 6:n="nesw-resize";break;case 3:case 7:n="ew-resize";break;default:n="pointer"}a.cursor=n}_onGraphicPointerOutCallback(t){const{_vertexGraphics:e,_rotateHandleGraphic:i,symbols:s,view:o}=this;this._hoveredGraphic=null,t.graphic===i?i.symbol=s.rotator.default:e.includes(t.graphic)&&(t.graphic.symbol=s.handles.default),o.cursor="default",this._updateTooltip()}_scaleGraphic(t){const{_startInfo:e,_vertexGraphics:i,preserveAspectRatio:s,view:o}=this,{centerX:r,centerY:a,graphicInfos:h,height:c,startX:n,startY:l,width:_}=e,{resolution:d,transform:m}=o.state,u=i.indexOf(t);1!==u&&5!==u||this._updateX(t,r),3!==u&&7!==u||this._updateY(t,a);const{x:g,y}=t.geometry,v=m[0]*g+m[2]*y+m[4],f=m[1]*g+m[3]*y+m[5],G=h?.map((t=>t.geometry))??[],S=G.every((t=>"point"===t.type));if((0===_||0===c)&&S){const t=q((g-n)/d),i=q((l-y)/d);for(let e=0;e<G.length;e++)this.graphics[e].geometry=(0,drawUtils/* cloneMove */.lR)(G[e],t,i,o,!0);return this._centerGraphic.geometry=new Point/* default */.A(g,y,o.spatialReference),void(this._backgroundGraphic.geometry=(0,drawUtils/* cloneMove */.lR)(e.box,t,i,o,!0))}if(s){const t=q(m[0]*r+m[2]*a+m[4],2),e=q(m[1]*r+m[3]*a+m[5],2),i=q(m[0]*n+m[2]*l+m[4],2),s=q(m[1]*n+m[3]*l+m[5],2);let o=(0,drawUtils/* getScaleRatio */.wW)(t,e,i,s,v,f);0!==o&&Math.abs(o)!==1/0||(o=1),this._xScale=this._yScale=o;for(const h of G){const t=G.indexOf(h);this.graphics[t].geometry=(0,drawUtils/* scale */.hs)(h,this._xScale,this._yScale,[r,a])}this._updateBackgroundGraphic()}else{let t=g-n,i=l-y;if(1===u||5===u?t=0:3!==u&&7!==u||(i=0),0===t&&0===i)return;const s=r+t/2,h=a+i/2;let m=(_+(n>r?t:-1*t))/_,v=(c+(l<a?i:-1*i))/c;1!==u&&5!==u&&0!==m&&Math.abs(m)!==1/0||(m=1),3!==u&&7!==u&&0!==v&&Math.abs(v)!==1/0||(v=1),this._xScale=m,this._yScale=v;const f=(s-r)/d,x=(h-a)/d,S=(0,drawUtils/* scale */.hs)(e.box,this._xScale,this._yScale);this._backgroundGraphic.geometry=(0,drawUtils/* cloneMove */.lR)(S,f,x,o,!0);const{centerX:k,centerY:R}=this._getGraphicInfo(this._backgroundGraphic),M=(k-r)/d,I=-1*(R-a)/d;for(const e of G){const t=G.indexOf(e),i=(0,drawUtils/* scale */.hs)(e,this._xScale,this._yScale,[r,a]);this.graphics[t].geometry=(0,drawUtils/* cloneMove */.lR)(i,M,I,o,!0)}this._centerGraphic.geometry=new Point/* default */.A(k,R,o.spatialReference)}}_rotateGraphic(t){const{centerX:e,centerY:i,startX:s,startY:o,box:r,rotate:a}=this._startInfo,h=this.view.spatialReference,c=new Point/* default */.A(s,o,h),n=new Point/* default */.A(e,i,h),l=t.geometry;this._angleOfRotation=(0,drawUtils/* getRotationAngle */.UT)(c,l,n);const _=this._startInfo.graphicInfos?.map((t=>t.geometry))??[];for(const p of _){const t=_.indexOf(p),e=rotate_r(p,this._angleOfRotation,n);this.graphics[t].geometry=e}this._backgroundGraphic.geometry=rotate_r(r,this._angleOfRotation,n),this._rotateHandleGraphic.geometry=rotate_r(a,this._angleOfRotation,n)}_moveGraphic(t,e,i){if(this.graphics.includes(t)){const s=this._backgroundGraphic.geometry;this._backgroundGraphic.geometry=(0,drawUtils/* cloneMove */.lR)(s,e,i,this.view);for(const o of this.graphics)o!==t&&(o.geometry=(0,drawUtils/* cloneMove */.lR)(o.geometry,e,i,this.view))}else if(t===this._centerGraphic){const t=this._backgroundGraphic.geometry;this._backgroundGraphic.geometry=(0,drawUtils/* cloneMove */.lR)(t,e,i,this.view)}if(t===this._backgroundGraphic||t===this._centerGraphic)for(const s of this.graphics)s.geometry=(0,drawUtils/* cloneMove */.lR)(s.geometry,e,i,this.view)}_setUpHighlights(){this.highlightsEnabled&&this.graphics.length&&this._highlightHelper?.add(this.graphics,this.highlightName)}_setupGraphics(){const{_graphicAttributes:t,symbols:i}=this;this._centerGraphic=new Graphic/* default */.A({symbol:i.centerIndicator,attributes:t}),this.showCenterGraphic&&this.layer.add(this._centerGraphic),this._backgroundGraphic=new Graphic/* default */.A({symbol:i.fill.default,attributes:t}),this.layer.add(this._backgroundGraphic),this._rotateLineGraphic=new Graphic/* default */.A({symbol:i.rotatorLine,attributes:t}),this._rotateHandleGraphic=new Graphic/* default */.A({symbol:i.rotator.default,attributes:t}),this.enableRotation&&!this._hasExtentGraphic()&&this.layer.addMany([this._rotateLineGraphic,this._rotateHandleGraphic]);for(let s=0;s<8;s++)this._vertexGraphics.push(new Graphic/* default */.A({symbol:i.handles.default,attributes:t}));this.enableScaling&&this.layer.addMany(this._vertexGraphics)}_updateSymbolsForTheme(){const t=this.view.effectiveTheme.accentColor;this.symbols={...this.symbols,fill:{active:this.symbols.fill.active?.clone().set("outline.color",t),default:this.symbols.fill.default?.clone().set("outline.color",t)},handles:{...this.symbols.handles,default:this.symbols.handles.default.clone().set("outline.color",t)},rotator:{...this.symbols.rotator,default:this.symbols.rotator.default.clone().set("outline.color",t)},rotatorLine:this.symbols.rotatorLine.clone().set("color",t)};for(const e of this._vertexGraphics)e.symbol=e===this._hoveredGraphic?this.symbols.handles.hover:this.symbols.handles.default;this._backgroundGraphic.symbol=this.symbols.fill.default,this._rotateHandleGraphic.symbol=this._rotateHandleGraphic===this._hoveredGraphic?this.symbols.rotator.hover:this.symbols.rotator.default,this._rotateLineGraphic.symbol=this.symbols.rotatorLine}_updateGraphics(){this._updateBackgroundGraphic(),this._updateHandleGraphics(),this._updateCenterGraphic(),this._updateRotateGraphic(),this._updateRotateLineGraphic()}_hideGraphicsBeforeUpdate(){this._centerGraphic.visible=!1,this._rotateHandleGraphic.visible=!1,this._rotateLineGraphic.visible=!1,this._vertexGraphics.forEach((t=>t.visible=!1))}_updateHandleGraphics(){const t=this._getCoordinates(!0);this._vertexGraphics.forEach(((e,i)=>{const[s,o]=t[i];this._updateXY(e,s,o)}))}_updateBackgroundGraphic(){const t=this._getCoordinates().map((([t,e])=>[t,e]));this._backgroundGraphic.geometry=new Polygon/* default */.A({rings:[t],spatialReference:this.view.spatialReference})}_updateCenterGraphic(){const[t,e,i,s]=this._getBoxBounds((0,aaBoundingRect/* create */.vt)()),o=(i+t)/2,r=(s+e)/2;this._centerGraphic.geometry=new Point/* default */.A(o,r,this.view.spatialReference)}_updateRotateGraphic(){if(!this._vertexGraphics.length)return;const{x:t,y:e}=this._vertexGraphics[1].geometry,i=e+this.view.state.resolution*this._rotateGraphicOffset;this._rotateHandleGraphic.geometry=new Point/* default */.A(t,i,this.view.spatialReference)}_updateRotateLineGraphic(){if(!this._vertexGraphics.length||!this._rotateHandleGraphic?.geometry)return;const t=this._vertexGraphics[1].geometry,e=this._rotateHandleGraphic.geometry;this._rotateLineGraphic.geometry=new Polyline/* default */.A({paths:[[[t.x,t.y],[e.x,e.y]]],spatialReference:this.view.spatialReference})}_updateXY(t,e,i){t.geometry=new Point/* default */.A(e,i,this.view.spatialReference)}_updateX(t,e){const i=t.geometry.y;t.geometry=new Point/* default */.A(e,i,this.view.spatialReference)}_updateY(t,e){const i=t.geometry.x;t.geometry=new Point/* default */.A(i,e,this.view.spatialReference)}_hasExtentGraphic(){return this.graphics.some((t=>null!=t?.geometry&&"extent"===t.geometry.type))}_getBoxBounds(t){const e=this.graphics.map((t=>t.geometry));return this._getBounds(t,e)}_getCoordinates(t){const[e,i,s,o]=this._getBoxBounds((0,aaBoundingRect/* create */.vt)());if(t){const t=(e+s)/2,r=(o+i)/2;return[[e,o],[t,o],[s,o],[s,r],[s,i],[t,i],[e,i],[e,r]]}return[[e,o],[s,o],[s,i],[e,i]]}_updateTooltip(t,e){if(null==this.tooltip)return;if(!t)return void this.tooltip.clear();const{_backgroundGraphic:i,graphics:s,_vertexGraphics:o,_rotateHandleGraphic:r}=this;t===r?this._updateRotateTooltip():o.includes(t)?this._updateScaleTooltip():(s.includes(t)||t===i)&&this._updateMoveTooltip(e)}_updateRotateTooltip(){null!=this.tooltip&&(this.tooltip.info=new ExtentRotateTooltipInfo/* ExtentRotateTooltipInfo */.d({sketchOptions:this.sketchOptions,angle:-this._angleOfRotation}))}_updateScaleTooltip(){const{tooltip:t,_xScale:e,_yScale:i,sketchOptions:s,view:o,automaticLengthMeasurementUtils:r}=this;if(null==t)return;const a=this._getCoordinates(),h=(0,extentUtils/* autoSize2D */.b)({topLeft:a[0],topRight:a[1],bottomRight:a[2],bottomLeft:a[3],spatialReference:o.spatialReference,automaticLengthMeasurementUtils:r});if(null==h)return;const{xSize:c,ySize:n}=h,l=Math.abs(e),p=Math.abs(i);t.info=new ExtentScaleTooltipInfo/* ExtentScaleTooltipInfo */.c({sketchOptions:s,xScale:l,yScale:p,xSize:c,ySize:n})}_updateMoveTooltip(t){const{tooltip:e,sketchOptions:i,view:s,automaticLengthMeasurementUtils:r}=this;if(null==e)return;const a=new TranslateTooltipInfo/* TranslateTooltipInfo */.M({sketchOptions:i});if(t){const{x:e,y:i}=t.origin,h=s.toMap(t),c=s.toMap({x:e,y:i}),n=r.autoDistanceBetweenPoints2D(c,h);a.distance=null!=n?n:quantityUtils/* zeroMeters */.r7}e.info=a}};function q(t,e=2){return Number.parseFloat(t.toFixed(e))}(0,tslib_es6._)([(0,property/* property */.MZ)()],V.prototype,"tooltip",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],V.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],V.prototype,"callbacks",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],V.prototype,"enableMovement",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],V.prototype,"enableRotation",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],V.prototype,"enableScaling",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],V.prototype,"graphics",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],V.prototype,"highlightName",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],V.prototype,"highlightsEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],V.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],V.prototype,"preserveAspectRatio",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],V.prototype,"showCenterGraphic",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],V.prototype,"state",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],V.prototype,"symbols",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SketchOptions/* default */.A})],V.prototype,"sketchOptions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],V.prototype,"view",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],V.prototype,"automaticLengthMeasurementUtils",void 0),V=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.draw.support.Box")],V);const J=V;


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

/***/ 5577:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/* harmony import */ var _SketchTooltipInfo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83856);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let s=class extends _SketchTooltipInfo_js__WEBPACK_IMPORTED_MODULE_6__/* .SketchTooltipInfo */ .w{constructor(o){super(o),this.type="extent-rotate",this.angle=0}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)()],s.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)()],s.prototype,"angle",void 0),s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.views.interactive.tooltip.infos.ExtentRotateTooltipInfo")],s);


/***/ }),

/***/ 63874:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ i)
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
let i=class extends _SketchTooltipInfo_js__WEBPACK_IMPORTED_MODULE_7__/* .SketchTooltipInfo */ .w{constructor(o){super(o),this.type="extent-scale",this.xScale=0,this.yScale=0,this.xSize=_core_quantityUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .zeroMeters */ .r7,this.ySize=_core_quantityUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .zeroMeters */ .r7}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],i.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],i.prototype,"xScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],i.prototype,"yScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],i.prototype,"xSize",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],i.prototype,"ySize",void 0),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.views.interactive.tooltip.infos.ExtentScaleTooltipInfo")],i);


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


/***/ }),

/***/ 41811:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_quantityUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73569);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e({topLeft:e,topRight:n,bottomRight:o,bottomLeft:i,spatialReference:l,automaticLengthMeasurementUtils:{autoDistance2D:u}}){const r=(0,_core_quantityUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .max */ .T9)(u(i,o,l),u(e,n,l));if(null==r)return null;const a=(0,_core_quantityUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .max */ .T9)(u(o,n,l),u(i,e,l));return null==a?null:{xSize:r,ySize:a}}


/***/ })

};
;