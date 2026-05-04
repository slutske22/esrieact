"use strict";
exports.id = 70145;
exports.ids = [70145];
exports.modules = {

/***/ 70145:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  OverrideHelper: () => (/* binding */ v)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(93814);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/colorUtils.js
var colorUtils = __webpack_require__(60861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(15565);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/FieldsIndex.js
var FieldsIndex = __webpack_require__(51387);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/support/ArcadeExpression.js
var ArcadeExpression = __webpack_require__(46279);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/cim/utils.js
var utils = __webpack_require__(77234);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(62991);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/quantizationUtils.js
var quantizationUtils = __webpack_require__(66220);
;// ./node_modules/@arcgis/core/views/2d/arcade/callExpressionWithFeature.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function callExpressionWithFeature_s(e,t,o,n,a,s){if(null==e)return null;const u=e.references("geometry")&&s?i(t,n,s):t,c=e.repurposeFeature(u,a);try{return e.evaluate(c,o)}catch(m){return Logger/* default */.A.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",m),null}}const u=new Map;function i(e,r,t){const{transform:o,hasZ:n,hasM:a}=t;u.has(r)||u.set(r,c(r));const s=u.get(r)(e.geometry,o,n,a);return{...e,geometry:s}}function c(s){const u={};switch(s){case"esriGeometryPoint":return(e,r,t,o)=>(0,quantizationUtils/* unquantizePoint */.Tr)(r,u,e,t,o);case"esriGeometryPolygon":return(e,r,t,o)=>(0,quantizationUtils/* unquantizePolygon */.$X)(r,u,e,t,o);case"esriGeometryPolyline":return(e,r,t,n)=>(0,quantizationUtils/* unquantizePolyline */.P5)(r,u,e,t,n);case"esriGeometryMultipoint":return(e,r,o,n)=>(0,quantizationUtils/* unquantizeMultipoint */.SW)(r,u,e,o,n);default:return Logger/* default */.A.getLogger("esri.views.2d.support.arcadeOnDemand").error(new Error/* default */.A("mapview-arcade",`Unable to handle geometryType: ${s}`)),e=>e}}

;// ./node_modules/@arcgis/core/symbols/cim/OverrideHelper.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const y=e=>{if(!e)return[0,0,0,0];const{r,g:i,b:s,a:t}=e;return[r,i,s,255*t]};class v{static findApplicableOverrides(e,r,i){if(e&&r){if(e.primitiveName){let s=!1;for(const r of i)if(r.primitiveName===e.primitiveName){s=!0;break}if(!s)for(const t of r)t.primitiveName===e.primitiveName&&i.push(t)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const s of e.effects)v.findApplicableOverrides(s,r,i);if(e.symbolLayers)for(const s of e.symbolLayers)v.findApplicableOverrides(s,r,i);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMSolidFill":case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":if(e.effects)for(const s of e.effects)v.findApplicableOverrides(s,r,i);if(e.markerPlacement&&v.findApplicableOverrides(e.markerPlacement,r,i),"CIMVectorMarker"===e.type){if(e.markerGraphics)for(const s of e.markerGraphics)v.findApplicableOverrides(s,r,i),v.findApplicableOverrides(s.symbol,r,i)}else"CIMCharacterMarker"===e.type?v.findApplicableOverrides(e.symbol,r,i):"CIMHatchFill"===e.type?v.findApplicableOverrides(e.lineSymbol,r,i):"CIMPictureMarker"===e.type&&v.findApplicableOverrides(e.animatedSymbolProperties,r,i)}}}static findEffectOverrides(e,r){if(!e)return null;if("CIMGeometricEffectDashes"===e.type&&(0,utils/* normalizeDashEffectTemplate */.FH)(e),!r||!e.primitiveName)return{type:"cim-effect-param",effect:e,overrides:[]};const i=(0,utils/* toLowerCaseProps */.rB)(e),s=e.primitiveName,t=[];for(const o of r)o.primitiveName===s&&t.push((0,utils/* toLowerCaseProps */.rB)(o));return{type:"cim-effect-param",effect:i,overrides:(0,utils/* normalizePrimitiveOverrideProps */.pk)(t)}}static async resolveSymbolOverrides(e,r,t,o,a,c,n){if(!e?.symbol)return null;let{symbol:p,primitiveOverrides:f}=e;const m=!!f;if(!m&&!o)return p;p=(0,lang/* clone */.o8)(p),f=(0,lang/* clone */.o8)(f);let y=!0;if(r||(r={attributes:{}},y=!1),m){if(y||(f=f.filter((e=>!e.valueExpressionInfo?.expression.includes("$feature")))),n||(f=f.filter((e=>!e.valueExpressionInfo?.expression.includes("$view")))),f.length>0){const e=(0,utils/* attributesToFields */.O2)(r.attributes),i={spatialReference:t,fields:e,geometryType:a};await v.createRenderExpressions(f,i),v.evaluateOverrides(f,r,a??"esriGeometryPoint",c,n,new FieldsIndex/* default */.A(e))}v.applyOverrides(p,f)}return o&&v.applyDictionaryTextOverrides(p,r,o,null),p}static{this._expressionToRenderExpression=new Map}static async createRenderExpressions(e,r){const i=[];for(const s of e){const e=s.valueExpressionInfo;if(!e||v._expressionToRenderExpression.has(e.expression))continue;const o=(0,ArcadeExpression/* createRendererExpression */.Ad)(e.expression,r.spatialReference);i.push(o),o.then((r=>v._expressionToRenderExpression.set(e.expression,r)))}i.length>0&&await Promise.all(i)}static evaluateOverrides(e,i,s,t,o,a){const c={$view:{scale:o?.scale}};for(const l of e){l.value&&"object"==typeof l.value&&(0,colorUtils/* isRGB */.IB)(l.value)&&("Color"===l.propertyName||"StrokeColor"===l.propertyName)&&(l.value=y(l.value));const e=l.valueExpressionInfo;if(!e)continue;const o=v._expressionToRenderExpression.get(e.expression);o&&(l.value=callExpressionWithFeature_s(o,i,c,s,a,t))}}static applyDictionaryTextOverrides(e,r,i,s,t="Normal"){if(e?.type)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":case"CIMTextSymbol":{const o=e.symbolLayers;if(!o)return;for(const a of o)a&&"CIMVectorMarker"===a.type&&v.applyDictionaryTextOverrides(a,r,i,s,"CIMTextSymbol"===e.type?e.textCase:t)}break;case"CIMVectorMarker":{const t=e.markerGraphics;if(!t)return;for(const e of t)e&&v.applyDictionaryTextOverrides(e,r,i,s)}break;case"CIMMarkerGraphic":{const o=e.textString;if(o&&o.includes("[")){const a=(0,utils/* analyzeTextParts */.gQ)(o,i);e.textString=(0,utils/* assignTextValuesFromFeature */.FM)(r,a,s,t)}}}}static applyOverrides(e,r,i,s){if(e.primitiveName)for(const t of r)if(t.primitiveName===e.primitiveName){const r=(0,utils/* uncapitalize */.YF)(t.propertyName);if(s&&s.push({cim:e,nocapPropertyName:r,value:e[r]}),i){let r=!1;for(const s of i)s.primitiveName===e.primitiveName&&(r=!0);r||i.push(t)}null!=t.value&&(e[r]=t.value)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const t of e.effects)v.applyOverrides(t,r,i,s);if(e.symbolLayers)for(const t of e.symbolLayers)v.applyOverrides(t,r,i,s);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(e.effects)for(const t of e.effects)v.applyOverrides(t,r,i,s);if("CIMVectorMarker"===e.type&&e.markerGraphics)for(const t of e.markerGraphics)v.applyOverrides(t,r,i,s),v.applyOverrides(t.symbol,r,i,s)}}static restoreOverrides(e){for(const r of e)r.cim[r.nocapPropertyName]=r.value}static buildOverrideKey(e){let r="";for(const i of e)void 0!==i.value&&(r+=`${i.primitiveName}${i.propertyName}${JSON.stringify(i.value)}`);return r}static toValue(r,i){if("DashTemplate"===r)return i.split(" ").map((e=>Number(e)));if("Color"===r){const r=new Color/* default */.A(i).toRgba();return r[3]*=255,r}return i}}


/***/ })

};
;