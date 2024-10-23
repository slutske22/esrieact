"use strict";
exports.id = 4088;
exports.ids = [4088];
exports.modules = {

/***/ 94088:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  getGeometryServiceURL: () => (/* binding */ geometryServiceUtils_n),
  projectGeometry: () => (/* binding */ geometryServiceUtils_a)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/config.js
var config = __webpack_require__(21121);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/portal/Portal.js + 2 modules
var Portal = __webpack_require__(10282);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/request.js
var request = __webpack_require__(86394);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/jsonUtils.js
var jsonUtils = __webpack_require__(1171);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/utils.js
var utils = __webpack_require__(11499);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/geometryService/utils.js
var geometryService_utils = __webpack_require__(45355);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(87926);
;// ../node_modules/@arcgis/core/rest/support/ProjectParameters.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let a=class extends JSONSupport/* JSONSupport */.oY{constructor(r){super(r),this.geometries=[],this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){const r=this.geometries.map((r=>r.toJSON())),o=this.geometries[0],t={};return t.outSR=(0,spatialReferenceUtils/* srToRESTValue */.YX)(this.outSpatialReference),t.inSR=(0,spatialReferenceUtils/* srToRESTValue */.YX)(o.spatialReference),t.geometries=JSON.stringify({geometryType:(0,jsonUtils/* getJsonType */.$B)(o),geometries:r}),this.transformation&&(t.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(t.transformForward=this.transformForward),t}};(0,tslib_es6._)([(0,property/* property */.MZ)()],a.prototype,"geometries",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:{source:"outSR"}}})],a.prototype,"outSpatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],a.prototype,"transformation",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],a.prototype,"transformForward",void 0),a=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.rest.support.ProjectParameters")],a);const p=a;

;// ../node_modules/@arcgis/core/rest/geometryService/project.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const i=(0,ensureType/* ensureType */.dp)(p);async function n(o,m,n){m=i(m);const u=(0,utils/* parseUrl */.Dl)(o),c={...u.query,f:"json",...m.toJSON()},j=m.outSpatialReference,a=(0,jsonUtils/* getJsonType */.$B)(m.geometries[0]),f=(0,utils/* asValidOptions */.jV)(c,n);return (0,request/* default */.A)(u.path+"/project",f).then((({data:{geometries:r}})=>(0,geometryService_utils/* decodeGeometries */.V)(r,a,j)))}

;// ../node_modules/@arcgis/core/portal/support/geometryServiceUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function geometryServiceUtils_n(o=null,i){if(config/* default */.A.geometryServiceUrl)return config/* default */.A.geometryServiceUrl;if(!o)throw new Error/* default */.A("internal:geometry-service-url-not-configured");let n;n="portal"in o?o.portal||Portal/* default */.A.getDefault():o,await n.load({signal:i});const a=n.helperServices?.geometry?.url;if(!a)throw new Error/* default */.A("internal:geometry-service-url-not-configured");return a}async function geometryServiceUtils_a(r,t,a=null,l){const c=await geometryServiceUtils_n(a,l),s=new p;s.geometries=[r],s.outSpatialReference=t;const m=await n(c,s,{signal:l});if(m&&Array.isArray(m)&&1===m.length)return m[0];throw new Error/* default */.A("internal:geometry-service-projection-failed")}


/***/ })

};
;