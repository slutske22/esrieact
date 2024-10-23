"use strict";
exports.id = 8623;
exports.ids = [8623,7081,1399,9018,7724];
exports.modules = {

/***/ 50019:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24793);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_timeUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46437);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63863);
/* harmony import */ var _portal_timeUnitKebabDictionary_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55134);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let a=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* .ClonableMixin */ .O)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY)){constructor(o){super(o),this.unit="milliseconds",this.value=0}toMilliseconds(){return (0,_core_timeUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .convertTime */ .t)(this.value,this.unit,"milliseconds")}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_8__/* .enumeration */ .e)(_portal_timeUnitKebabDictionary_js__WEBPACK_IMPORTED_MODULE_10__/* .timeUnitKebabDictionary */ .j,{nonNullable:!0})],a.prototype,"unit",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Number,json:{write:!0},nonNullable:!0})],a.prototype,"value",void 0),a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__/* .subclass */ .$)("esri.TimeInterval")],a);const l=a;


/***/ }),

/***/ 98664:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class e{constructor(){this.declaredRootClass="esri.arcade.featureSetCollection",this._layerById={},this._layerByName={}}add(e,t,a){this._layerById[t]=a,this._layerByName[e]=a}async featureSetByName(e,t=!0,a=["*"]){return void 0===this._layerByName[e]?null:this._layerByName[e]}async featureSetById(e,t=!0,a=["*"]){return void 0===this._layerById[e]?null:this._layerById[e]}castToText(e=!1){return"object, FeatureSetCollection"}}


/***/ }),

/***/ 48623:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  constructAssociationMetaDataFeatureSetFromUrl: () => (/* binding */ featureSetUtils_T),
  constructFeatureSet: () => (/* binding */ g),
  constructFeatureSetFromPortalItem: () => (/* binding */ q),
  constructFeatureSetFromRelationship: () => (/* binding */ k),
  constructFeatureSetFromUrl: () => (/* binding */ F),
  convertToFeatureSet: () => (/* binding */ j),
  createFeatureSetCollectionFromMap: () => (/* binding */ D),
  createFeatureSetCollectionFromService: () => (/* binding */ E),
  initialiseMetaDataCache: () => (/* binding */ L)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/request.js
var request = __webpack_require__(86394);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/arcade/featureSetCollection.js
var featureSetCollection = __webpack_require__(98664);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/languageUtils.js
var languageUtils = __webpack_require__(62261);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/arcade/featureset/actions/AttributeFilter.js
var AttributeFilter = __webpack_require__(84309);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/Graphic.js
var Graphic = __webpack_require__(25707);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/arcade/featureset/actions/Adapted.js
var Adapted = __webpack_require__(90546);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/arcade/featureset/actions/OrderBy.js
var OrderBy = __webpack_require__(34822);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/arcade/featureset/support/errorsupport.js
var errorsupport = __webpack_require__(80778);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/arcade/featureset/support/FeatureSet.js + 1 modules
var FeatureSet = __webpack_require__(64753);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/arcade/featureset/support/IdSet.js
var IdSet = __webpack_require__(22772);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/arcade/featureset/support/OrderbyClause.js
var OrderbyClause = __webpack_require__(20520);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/arcade/featureset/support/shared.js
var shared = __webpack_require__(44930);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/arcade/featureset/support/sqlUtils.js
var sqlUtils = __webpack_require__(20182);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/arcade/featureset/support/stats.js
var stats = __webpack_require__(88620);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/sql/WhereClause.js + 7 modules
var WhereClause = __webpack_require__(1615);
;// ../node_modules/@arcgis/core/arcade/featureset/support/StatsField.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function s(s){if("function"===s.parseTree.type){if(0===s.parseTree.args.value.length)return{name:s.parseTree.name,expr:null};if(s.parseTree.args.value.length>1)throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.MissingStatisticParameters);const a=WhereClause.WhereClause.create((0,sqlUtils/* toWhereClauseFromTree */.Mi)(s.parseTree.args.value[0],shared/* FeatureServiceDatabaseType */.zl.Standardised,s.parameters),s.fieldsIndex,s.timeZone);return{name:s.parseTree.name,expr:a}}return null}class StatsField_a{constructor(){this.field="",this.tofieldname="",this.typeofstat="MIN",this.workingexpr=null}clone(){const e=new StatsField_a;return e.field=this.field,e.tofieldname=this.tofieldname,e.typeofstat=this.typeofstat,e.workingexpr=this.workingexpr,e}static parseStatField(r,n,o,l){const p=new StatsField_a;p.field=r;const f=WhereClause.WhereClause.create(n,o,l),u=s(f);if(null===u)throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.UnsupportedSqlFunction,{function:""});const c=u.name.toUpperCase().trim();if("MIN"===c){if(p.typeofstat="MIN",p.workingexpr=u.expr,null===f)throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidFunctionParameters,{function:"min"})}else if("MAX"===c){if(p.typeofstat="MAX",p.workingexpr=u.expr,null===f)throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidFunctionParameters,{function:"max"})}else if("COUNT"===c)p.typeofstat="COUNT",p.workingexpr=u.expr;else if("STDEV"===c){if(p.typeofstat="STDDEV",p.workingexpr=u.expr,null===f)throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidFunctionParameters,{function:"stdev"})}else if("SUM"===c){if(p.typeofstat="SUM",p.workingexpr=u.expr,null===f)throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidFunctionParameters,{function:"sum"})}else if("MEAN"===c){if(p.typeofstat="AVG",p.workingexpr=u.expr,null===f)throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidFunctionParameters,{function:c})}else if("AVG"===c){if(p.typeofstat="AVG",p.workingexpr=u.expr,null===f)throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidFunctionParameters,{function:"avg"})}else{if("VAR"!==c)throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.UnsupportedSqlFunction,{function:c});if(p.typeofstat="VAR",p.workingexpr=u.expr,null===f)throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidFunctionParameters,{function:"var"})}return p}toStatisticsName(){switch(this.typeofstat.toUpperCase()){case"MIN":return"min";case"MAX":return"max";case"SUM":return"sum";case"COUNT":default:return"count";case"VAR":return"var";case"STDDEV":return"stddev";case"AVG":return"avg"}}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/MD5.js
var MD5 = __webpack_require__(69075);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/sql/DateOnly.js
var DateOnly = __webpack_require__(45132);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/sql/SqlTimestampOffset.js
var SqlTimestampOffset = __webpack_require__(64473);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/sql/TimeOnly.js
var TimeOnly = __webpack_require__(40845);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/Field.js
var Field = __webpack_require__(24738);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/FieldsIndex.js
var FieldsIndex = __webpack_require__(79005);
;// ../node_modules/@arcgis/core/arcade/featureset/actions/GroupBy.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function G(e){if(!e)return"COUNT";switch(e.toLowerCase()){case"max":return"MAX";case"var":case"variance":return"VAR";case"avg":case"average":case"mean":return"AVG";case"min":return"MIN";case"sum":return"SUM";case"stdev":case"stddev":return"STDDEV";case"count":return"COUNT"}return"COUNT"}class O extends FeatureSet/* default */.A{constructor(e){super(e),this._decodedStatsfield=[],this._decodedGroupbyfield=[],this._candosimplegroupby=!0,this.phsyicalgroupbyfields=[],this.objectIdField="ROW__ID",this._internalObjectIdField="ROW__ID",this._adaptedFields=[],this.declaredClass="esri.arcade.featureset.actions.Aggregate",this._uniqueIds=1,this._maxQuery=10,this._maxProcessing=10,this._parent=e.parentfeatureset,this._config=e}isTable(){return!0}async _getSet(e){if(null===this._wset){const t=await this._getFilteredSet("",null,null,null,e);return this._wset=t,this._wset}return this._wset}_isInFeatureSet(){return shared/* IdState */.J6.InFeatureSet}_nextUniqueName(e){for(;1===e["T"+this._uniqueIds.toString()];)this._uniqueIds++;const t="T"+this._uniqueIds.toString();return e[t]=1,t}_convertToEsriFieldType(e){return e}_initialiseFeatureSet(){const e={};let t=!1,n=1;const r=this._parent?this._parent.getFieldsIndex():new FieldsIndex/* default */.A([]);for(this.objectIdField="ROW__ID",this.globalIdField="";!1===t;){let e=!1;for(let t=0;t<this._config.groupbyfields.length;t++)if(this._config.groupbyfields[t].name.toLowerCase()===this.objectIdField.toLowerCase()){e=!0;break}if(!1===e)for(let t=0;t<this._config.statsfields.length;t++)if(this._config.statsfields[t].name.toLowerCase()===this.objectIdField.toLowerCase()){e=!0;break}!1===e?t=!0:(this.objectIdField="ROW__ID"+n.toString(),n++)}for(const i of this._config.statsfields){const e=new StatsField_a;e.field=i.name,e.tofieldname=i.name,e.workingexpr=i.expression instanceof WhereClause.WhereClause?i.expression:WhereClause.WhereClause.create(i.expression,r,this.dateFieldsTimeZoneDefaultUTC),e.typeofstat=G(i.statistic),this._decodedStatsfield.push(e)}this._decodedGroupbyfield=[];for(const i of this._config.groupbyfields){const e={name:i.name,singlefield:null,tofieldname:i.name,expression:i.expression instanceof WhereClause.WhereClause?i.expression:WhereClause.WhereClause.create(i.expression,r,this.dateFieldsTimeZoneDefaultUTC),sqlType:null};this._decodedGroupbyfield.push(e)}if(null!==this._parent){this.geometryType=this._parent.geometryType,this.spatialReference=this._parent.spatialReference,this.hasM=this._parent.hasM,this.hasZ=this._parent.hasZ,this.typeIdField="";for(const t of this._parent.fields)e[t.name.toUpperCase()]=1;this.types=null}else this.geometryType=shared/* layerGeometryEsriConstants */.ik.point,this.typeIdField="",this.types=null,this.spatialReference=new SpatialReference/* default */.A({wkid:4326});this.fields=[];const a=new StatsField_a;a.field=this._nextUniqueName(e),a.tofieldname=this.objectIdField,a.workingexpr=WhereClause.WhereClause.create(this._parent.objectIdField,this._parent.getFieldsIndex(),this.dateFieldsTimeZoneDefaultUTC),a.typeofstat="MIN",this._decodedStatsfield.push(a);for(const s of this._decodedGroupbyfield){const t=new Field/* default */.A;if(s.name=this._nextUniqueName(e),t.name=s.tofieldname,t.alias=t.name,(0,sqlUtils/* isSingleField */.DA)(s.expression)){const e=this._parent.getField((0,sqlUtils/* toWhereClause */.YY)(s.expression,shared/* FeatureServiceDatabaseType */.zl.Standardised));if(!e)throw new errorsupport/* FeatureSetError */.dr(errorsupport/* FeatureSetErrorCodes */.D_.AggregationFieldNotFound);s.name=e.name,s.singlefield=e.name,this.phsyicalgroupbyfields.push(e.name),t.type=e.type,s.sqlType=e.type}else{t.type=this._convertToEsriFieldType((0,sqlUtils/* predictType */.IY)(s.expression,this._parent.fields));const e=new Field/* default */.A;e.name=s.name,e.alias=e.name,this.phsyicalgroupbyfields.push(s.name),this._adaptedFields.push(new Adapted/* SqlExpressionAdapted */.Gr(e,s.expression)),this._candosimplegroupby=!1,s.sqlType=t.type}this.fields.push(t)}if(this._adaptedFields.length>0)for(const i of this._parent.fields)this._adaptedFields.push(new Adapted/* OriginalField */.IO(i));for(let i=0;i<this._decodedStatsfield.length;i++){const t=new Field/* default */.A;let s=null;const n=this._decodedStatsfield[i];n.field=this._nextUniqueName(e),n.tofieldname===this.objectIdField&&(this._internalObjectIdField=n.field),t.name=n.tofieldname,t.alias=t.name;const r=null!==n.workingexpr&&(0,sqlUtils/* isSingleField */.DA)(n.workingexpr)?(0,sqlUtils/* toWhereClause */.YY)(n.workingexpr,shared/* FeatureServiceDatabaseType */.zl.Standardised):"";switch(this._decodedStatsfield[i].typeofstat){case"SUM":if(""!==r){if(s=this._parent.getField(r),!s)throw new errorsupport/* FeatureSetError */.dr(errorsupport/* FeatureSetErrorCodes */.D_.AggregationFieldNotFound);t.type=s.type}else t.type="double";break;case"MIN":case"MAX":if(""!==r){if(s=this._parent.getField(r),!s)throw new errorsupport/* FeatureSetError */.dr(errorsupport/* FeatureSetErrorCodes */.D_.AggregationFieldNotFound);t.type=s.type}else t.type="double";break;case"COUNT":t.type="integer";break;case"STDDEV":case"VAR":case"AVG":if(""!==r&&(s=this._parent.getField(r),!s))throw new errorsupport/* FeatureSetError */.dr(errorsupport/* FeatureSetErrorCodes */.D_.AggregationFieldNotFound);t.type="double"}this.fields.push(t)}}async _canDoAggregates(){return!1}async _getFeatures(e,t,i,s){-1!==t&&this._featureCache[t];const n=this._maxQuery;return!0===this._checkIfNeedToExpandKnownPage(e,n)?(await this._expandPagedSet(e,n,0,0,s),this._getFeatures(e,t,i,s)):"success"}async _getFilteredSet(e,t,i,s,o){if(""!==e)return new IdSet/* default */.A([],[],!0,null);let l=null;const d={ordered:!1,nowhereclause:!1};if(await this._ensureLoaded(),null!==i)for(let n=0;n<this._decodedStatsfield.length;n++)if(!0===(0,sqlUtils/* scanForField */.Ju)(i,this._decodedStatsfield[n].tofieldname)){d.nowhereclause=!0,i=null;break}if(null!==s){d.ordered=!0;for(let e=0;e<this._decodedStatsfield.length;e++)if(!0===s.scanForField(this._decodedStatsfield[e].tofieldname)){s=null,d.ordered=!1;break}if(null!==s)for(const e of this._decodedGroupbyfield)if(null===e.singlefield&&!0===s.scanForField(e.tofieldname)){s=null,d.ordered=!1;break}}if(!1!==this._candosimplegroupby&&await this._parent._canDoAggregates(this.phsyicalgroupbyfields,this._decodedStatsfield,"",null,null)){let e=null;i&&(e=this._reformulateWhereClauseWithoutGroupByFields(i));let t=null;s&&(t=this._reformulateOrderClauseWithoutGroupByFields(s));const n=await this._parent._getAggregatePagesDataSourceDefinition(this.phsyicalgroupbyfields,this._decodedStatsfield,"",null,e,t,this._internalObjectIdField);return this._checkCancelled(o),l=!0===d.nowhereclause?new IdSet/* default */.A(n._candidates.slice(0).concat(n._known.slice(0)),[],!0===d.ordered&&n._ordered,this._clonePageDefinition(n.pagesDefinition)):new IdSet/* default */.A(n._candidates.slice(0),n._known.slice(0),!0===d.ordered&&n._ordered,this._clonePageDefinition(n.pagesDefinition)),l}let c=this._parent;if(this._adaptedFields.length>0&&(c=new Adapted/* AdaptedFeatureSet */.a({parentfeatureset:this._parent,adaptedFields:this._adaptedFields,extraFilter:null})),!0===d.nowhereclause)l=new IdSet/* default */.A(["GETPAGES"],[],!1,{aggregatefeaturesetpagedefinition:!0,resultOffset:0,resultRecordCount:this._maxQuery,internal:{fullyResolved:!1,workingItem:null,type:"manual",iterator:null,set:[],subfeatureset:new OrderBy/* default */.A({parentfeatureset:c,orderbyclause:new OrderbyClause/* default */.A(this.phsyicalgroupbyfields.join(",")+","+this._parent.objectIdField+" ASC")})}});else{let e=c;if(null!==i){let t=null;i&&(t=this._reformulateWhereClauseWithoutGroupByFields(i)),e=new AttributeFilter/* default */.A({parentfeatureset:e,whereclause:t})}l=new IdSet/* default */.A(["GETPAGES"],[],!1,{aggregatefeaturesetpagedefinition:!0,resultOffset:0,resultRecordCount:this._maxQuery,internal:{fullyResolved:!1,workingItem:null,type:"manual",iterator:null,set:[],subfeatureset:new OrderBy/* default */.A({parentfeatureset:e,orderbyclause:new OrderbyClause/* default */.A(this.phsyicalgroupbyfields.join(",")+","+this._parent.objectIdField+" ASC")})}})}return l}_reformulateWhereClauseWithoutStatsFields(e){for(const t of this._decodedStatsfield)e=(0,sqlUtils/* reformulateWithoutField */.bD)(e,t.tofieldname,(0,sqlUtils/* toWhereClause */.YY)(t.workingexpr,shared/* FeatureServiceDatabaseType */.zl.Standardised),this._parent.getFieldsIndex());return e}_reformulateWhereClauseWithoutGroupByFields(e){for(const t of this._decodedGroupbyfield)t.tofieldname!==t.name&&(e=(0,sqlUtils/* reformulateWithoutField */.bD)(e,t.tofieldname,(0,sqlUtils/* toWhereClause */.YY)(t.expression,shared/* FeatureServiceDatabaseType */.zl.Standardised),this._parent.getFieldsIndex()));return e}_reformulateOrderClauseWithoutGroupByFields(e){const t=[];for(const i of this._decodedGroupbyfield)i.tofieldname!==i.name&&t.push({field:i.tofieldname,newfield:i.name});return t.length>0?e.replaceFields(t):e}_clonePageDefinition(e){return null===e?null:!0===e.aggregatefeaturesetpagedefinition?{aggregatefeaturesetpagedefinition:!0,resultRecordCount:e.resultRecordCount,resultOffset:e.resultOffset,internal:e.internal}:this._parent._clonePageDefinition(e)}async _refineSetBlock(e,t,i){if(!0===this._checkIfNeedToExpandCandidatePage(e,this._maxQuery))return await this._expandPagedSet(e,this._maxQuery,0,0,i),this._refineSetBlock(e,t,i);this._checkCancelled(i);const s=e._candidates.length;this._refineKnowns(e,t);e._candidates.length;return e._candidates.length,e}_expandPagedSet(e,t,i,s,n){return this._expandPagedSetFeatureSet(e,t,i,s,n)}async _getPhysicalPage(t,i,s){if(!0===t.pagesDefinition.aggregatefeaturesetpagedefinition)return this._sequentialGetPhysicalItem(t,t.pagesDefinition.resultRecordCount,s,[]);const n=await this._getAgregagtePhysicalPage(t,i,s);for(const r of n){const t={geometry:r.geometry,attributes:{}},i={};for(const e in r.attributes)i[e.toLowerCase()]=r.attributes[e];for(const e of this._decodedGroupbyfield)t.attributes[e.tofieldname]=i[e.name.toLowerCase()];for(const e of this._decodedStatsfield)t.attributes[e.tofieldname]=i[e.field.toLowerCase()];this._featureCache[t.attributes[this.objectIdField]]=new Graphic/* default */.A(t)}return n.length}_sequentialGetPhysicalItem(e,t,i,s){return new Promise(((n,r)=>{null===e.pagesDefinition.internal.iterator&&(e.pagesDefinition.internal.iterator=e.pagesDefinition.internal.subfeatureset.iterator(i)),!0===e.pagesDefinition.internal.fullyResolved||0===t?n(s.length):this._nextAggregateItem(e,t,i,s,(r=>{null===r?n(s.length):(t-=1,n(this._sequentialGetPhysicalItem(e,t,i,s)))}),r)}))}_nextAggregateItem(e,i,s,n,r,a){try{(0,languageUtils.a1)(e.pagesDefinition.internal.iterator.next()).then((t=>{if(null===t)if(null!==e.pagesDefinition.internal.workingItem){const t=this._calculateAndAppendAggregateItem(e.pagesDefinition.internal.workingItem);n.push(t),e.pagesDefinition.internal.workingItem=null,e.pagesDefinition.internal.set.push(t.attributes[this.objectIdField]),e.pagesDefinition.internal.fullyResolved=!0,r(null)}else e.pagesDefinition.internal.fullyResolved=!0,r(null);else{const o=this._generateAggregateHash(t);if(null===e.pagesDefinition.internal.workingItem)e.pagesDefinition.internal.workingItem={features:[t],id:o};else{if(o!==e.pagesDefinition.internal.workingItem.id){const s=this._calculateAndAppendAggregateItem(e.pagesDefinition.internal.workingItem);return n.push(s),e.pagesDefinition.internal.workingItem=null,e.pagesDefinition.internal.set.push(s.attributes[this.objectIdField]),i-=1,e.pagesDefinition.internal.workingItem={features:[t],id:o},void r(s)}e.pagesDefinition.internal.workingItem.features.push(t)}this._nextAggregateItem(e,i,s,n,r,a)}}),a)}catch(o){a(o)}}_calculateFieldStat(e,t,i){const s=[];for(let n=0;n<e.features.length;n++)if(null!==t.workingexpr){const i=t.workingexpr.calculateValue(e.features[n]);null!==i&&(i instanceof DateOnly/* DateOnly */.n||i instanceof TimeOnly/* TimeOnly */.k?s.push(i.toNumber()):i instanceof SqlTimestampOffset/* SqlTimeStampOffset */.g?s.push(i.toMilliseconds()):s.push(i))}else s.push(null);switch(t.typeofstat){case"MIN":i.attributes[t.tofieldname]=(0,stats/* calculateStat */.tQ)("min",s,-1);break;case"MAX":i.attributes[t.tofieldname]=(0,stats/* calculateStat */.tQ)("max",s,-1);break;case"SUM":i.attributes[t.tofieldname]=(0,stats/* calculateStat */.tQ)("sum",s,-1);break;case"COUNT":i.attributes[t.tofieldname]=s.length;break;case"VAR":i.attributes[t.tofieldname]=(0,stats/* calculateStat */.tQ)("var",s,-1);break;case"STDDEV":i.attributes[t.tofieldname]=(0,stats/* calculateStat */.tQ)("stddev",s,-1);break;case"AVG":i.attributes[t.tofieldname]=(0,stats/* calculateStat */.tQ)("avg",s,-1)}return!0}_calculateAndAppendAggregateItem(t){const i={attributes:{},geometry:null};for(const e of this._decodedGroupbyfield){const s=e.singlefield?t.features[0].attributes[e.singlefield]:WhereClause.WhereClause.convertValueToStorageFormat(e.expression.calculateValue(t.features[0]),e.sqlType);i.attributes[e.tofieldname]=s}for(const e of this._decodedStatsfield)this._calculateFieldStat(t,e,i);const s=[];for(let e=0;e<this._decodedStatsfield.length;e++)s.push(this._calculateFieldStat(t,this._decodedStatsfield[e],i));return this._featureCache[i.attributes[this.objectIdField]]=new Graphic/* default */.A({attributes:i.attributes,geometry:i.geometry}),i}_generateAggregateHash(e){let t="";for(const i of this._decodedGroupbyfield){const s=i.singlefield?e.attributes[i.singlefield]:i.expression.calculateValue(e);t+=null==s?":":":"+s.toString()}return (0,MD5/* createMD5Hash */.d)(t,MD5/* outputTypes */.T.String)}async _stat(){return{calculated:!1}}async getFeatureByObjectId(){return null}static registerAction(){FeatureSet/* default */.A._featuresetFunctions.groupby=function(e,t){return new O({parentfeatureset:this,groupbyfields:e,statsfields:t})}}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/arcade/featureset/actions/SpatialFilter.js
var SpatialFilter = __webpack_require__(21101);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/arcade/featureset/actions/Top.js
var Top = __webpack_require__(62120);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/kernel.js
var kernel = __webpack_require__(28830);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/arcade/Attachment.js
var Attachment = __webpack_require__(71095);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/arcade/Dictionary.js
var Dictionary = __webpack_require__(60886);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/jsonUtils.js
var jsonUtils = __webpack_require__(1171);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(87926);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/FeatureLayer.js + 3 modules
var FeatureLayer = __webpack_require__(83780);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/SubtypeGroupLayer.js + 1 modules
var SubtypeGroupLayer = __webpack_require__(64810);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/infoFor3D.js
var infoFor3D = __webpack_require__(40906);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/source/DataLayerSource.js + 3 modules
var DataLayerSource = __webpack_require__(44360);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/query/executeQueryJSON.js
var executeQueryJSON = __webpack_require__(9190);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/query/executeQueryPBF.js + 1 modules
var executeQueryPBF = __webpack_require__(89538);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/FeatureSet.js
var support_FeatureSet = __webpack_require__(57822);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/Query.js + 1 modules
var Query = __webpack_require__(24587);
;// ../node_modules/@arcgis/core/rest/query/executeQuery.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function f(t,o,r,e){return m(o,await c(t,o,r,e),r,e)}async function c(t,o,r,e){const n={...e},i=p(o,r),u=null!=o.outStatistics?.[0],f=(0,has/* default */.A)("featurelayer-pbf-statistics"),c=!u||f;let m;if("pbf"===r?.format&&c)try{m=await (0,executeQueryPBF/* executeRawQueryPBF */.S)(t,i,n)}catch(d){if("query:parsing-pbf"!==d.name)throw d;r.format="json"}return"json"!==r?.format&&c||(m=await (0,executeQueryJSON/* executeRawQueryJSON */.e)(t,i,n)),l(r?.fieldsIndex,m.fields),m}function l(t,o){if(null!=t&&null!=o)for(const r of o){const o=t.get(r.name);o&&Object.assign(r,o.toJSON())}}async function m(t,r,e,n){const s=e?.infoFor3D;if(!d(t,s)||null==s||!r.assetMaps||!r.features?.length)return support_FeatureSet/* default */.A.fromJSON(r);const{meshFeatureSetFromJSON:a}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 4591).then(__webpack_require__.bind(__webpack_require__, 24591)),n);return a(t,s,r)}function p(o,s){let a=Query/* default */.A.from(o);a.sourceSpatialReference=a.sourceSpatialReference??s?.sourceSpatialReference??null,(s?.gdbVersion||s?.dynamicDataSource)&&(a=a===o?a.clone():a,a.gdbVersion=o.gdbVersion||s.gdbVersion,a.dynamicDataSource=o.dynamicDataSource?DataLayerSource/* DataLayerSource */.L.from(o.dynamicDataSource):s.dynamicDataSource);const i=s?.infoFor3D;if(null!=i&&d(o,i)){a=a===o?a.clone():a,a.formatOf3DObjects=null;const{supportedFormats:n,queryFormats:s}=i,u=(0,infoFor3D/* getMimeTypeFormatId */.R_)("model/gltf-binary",n)??(0,infoFor3D/* getFilenameFormatId */.E1)("glb",n),f=(0,infoFor3D/* getMimeTypeFormatId */.R_)("model/gltf+json",n)??(0,infoFor3D/* getFilenameFormatId */.E1)("gtlf",n);for(const t of s){if(t===u){a.formatOf3DObjects=t;break}t!==f||a.formatOf3DObjects||(a.formatOf3DObjects=t)}if(!a.formatOf3DObjects)throw new Error/* default */.A("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(null==a.outFields||!a.outFields.includes("*")){a=a===o?a.clone():a,null==a.outFields&&(a.outFields=[]);const{originX:t,originY:r,originZ:e,translationX:n,translationY:s,translationZ:u,scaleX:f,scaleY:c,scaleZ:l,rotationX:m,rotationY:p,rotationZ:d,rotationDeg:y}=i.transformFieldRoles;a.outFields.push(t,r,e,n,s,u,f,c,l,m,p,d,y)}}return a}function d(t,o){return null!=o&&!0===t.returnGeometry&&"xyFootprint"!==t.multipatchOption&&!t.outStatistics}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/config.js
var config = __webpack_require__(21121);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(20909);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/query/support/AttachmentInfo.js + 1 modules
var AttachmentInfo = __webpack_require__(22531);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/AttachmentQuery.js
var AttachmentQuery = __webpack_require__(27973);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/query/executeForCount.js
var executeForCount = __webpack_require__(60920);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry.js
var geometry = __webpack_require__(17639);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/normalizeUtils.js + 2 modules
var normalizeUtils = __webpack_require__(65231);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/pbf.js
var pbf = __webpack_require__(66471);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/unitUtils.js
var unitUtils = __webpack_require__(92976);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/ellipsoidUtils.js
var ellipsoidUtils = __webpack_require__(47936);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/query/executeForIds.js
var executeForIds = __webpack_require__(1177);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/featureConversionUtils.js
var featureConversionUtils = __webpack_require__(21355);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/RelationshipQuery.js
var RelationshipQuery = __webpack_require__(97724);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/TopFeaturesQuery.js + 1 modules
var TopFeaturesQuery = __webpack_require__(56051);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/StatisticDefinition.js
var StatisticDefinition = __webpack_require__(41969);
;// ../node_modules/@arcgis/core/arcade/featureset/sources/FeatureLayerDynamic.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class T extends FeatureSet/* default */.A{constructor(e){super(e),this.declaredClass="esri.arcade.featureset.sources.FeatureLayerDynamic",this._removeGeometry=!1,this._overrideFields=null,this.formulaCredential=null,this._pageJustIds=!1,this._requestStandardised=!1,this._useDefinitionExpression=!0,e.spatialReference&&(this.spatialReference=e.spatialReference),this._transparent=!0,this._maxProcessing=1e3,this._layer=e.layer,this._wset=null,void 0!==e.outFields&&(this._overrideFields=e.outFields),void 0!==e.includeGeometry&&(this._removeGeometry=!1===e.includeGeometry)}_maxQueryRate(){return shared/* defaultMaxRecords */.gO}end(){return this._layer}optimisePagingFeatureQueries(e){this._pageJustIds=e}get urlQueryPath(){return this._layer.parsedUrl.path||""}convertQueryToLruCacheKey(e){const t=this.urlQueryPath+","+(0,shared/* stableStringify */.JB)(e.toJSON());return (0,MD5/* createMD5Hash */.d)(t,MD5/* outputTypes */.T.String)}async loadImpl(){return!0===this._layer.loaded?(this._initialiseFeatureSet(),this):(await this._layer.load(),this._initialiseFeatureSet(),this)}_initialiseFeatureSet(){if(null==this.spatialReference&&(this.spatialReference=this._layer.spatialReference),this.geometryType=this._layer.geometryType,this.fields=this._layer.fields.slice(0),this.hasZ=!0===this._layer?.capabilities?.data?.supportsZ,this.hasM=!0===this._layer?.capabilities?.data?.supportsM,null!==this._overrideFields)if(1===this._overrideFields.length&&"*"===this._overrideFields[0])this._overrideFields=null;else{const e=[],t=[];for(const i of this.fields)if("oid"===i.type)e.push(i),t.push(i.name);else for(const r of this._overrideFields)if(r.toLowerCase()===i.name.toLowerCase()){e.push(i),t.push(i.name);break}this.fields=e,this._overrideFields=t}if(this._layer.source&&this._layer.source.sourceJSON){const e=this._layer.source.sourceJSON.currentVersion;!0===this._layer.source.sourceJSON.useStandardizedQueries?(this._databaseType=shared/* FeatureServiceDatabaseType */.zl.StandardisedNoInterval,null!=e&&e>=10.61&&(this._databaseType=shared/* FeatureServiceDatabaseType */.zl.Standardised)):null!=e&&(e>=10.5&&(this._databaseType=shared/* FeatureServiceDatabaseType */.zl.StandardisedNoInterval,this._requestStandardised=!0),e>=10.61&&(this._databaseType=shared/* FeatureServiceDatabaseType */.zl.Standardised))}this.objectIdField=this._layer.objectIdField;for(const e of this.fields)"global-id"===e.type&&(this.globalIdField=e.name);this._layer instanceof SubtypeGroupLayer["default"]?(this.typeIdField=this._layer.subtypeField??"",this.types=this._layer.subtypes):(this.typeIdField=this._layer.typeIdField??"",this.types=this._layer.types)}_isInFeatureSet(){return shared/* IdState */.J6.InFeatureSet}async _refineSetBlock(e){return e}_candidateIdTransform(e){return e}async _getSet(e){if(null===this._wset){await this._ensureLoaded();const t=await this._getFilteredSet("",null,null,null,e);return this._wset=t,t}return this._wset}async _runDatabaseProbe(e){await this._ensureLoaded();const t=new Query/* default */.A;this.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t.where=e.replace("OBJECTID",this._layer.objectIdField);try{return await this._layer.queryObjectIds(t),!0}catch(i){return!1}}_canUsePagination(){return!(!this._layer.capabilities||!this._layer.capabilities.query||!0!==this._layer.capabilities.query.supportsPagination)}_cacheableFeatureSetSourceKey(){return this._layer.url}pbfSupportedForQuery(e){const t=this._layer?.capabilities?.query;return!e.outStatistics&&!0===t?.supportsFormatPBF&&!0===t?.supportsQuantizationEditMode}async queryPBF(e){return e.quantizationParameters={mode:"edit"},(await f(this._layer.parsedUrl,e,{format:"pbf"},{})).unquantize()}get gdbVersion(){return this._layer&&this._layer.capabilities&&this._layer.capabilities.data&&this._layer.capabilities.data.isVersioned?this._layer.gdbVersion||"SDE.DEFAULT":""}nativeCapabilities(){return{title:this._layer.title??"",source:this,canQueryRelated:!0,capabilities:this._layer.capabilities,databaseType:this._databaseType,requestStandardised:this._requestStandardised}}executeQuery(e,t){e.returnZ=this.hasZ,e.returnM=this.hasM;const i="execute"===t?executeQueryJSON/* executeQueryJSON */.s:"executeForCount"===t?executeForCount/* executeForCount */.I:executeForIds/* executeForIds */.V,r="execute"===t&&this.pbfSupportedForQuery(e);let s=null;if(this.recentlyUsedQueries){const t=this.convertQueryToLruCacheKey(e);s=this.recentlyUsedQueries.getFromCache(t),null===s&&(s=!0!==r?i(this._layer.parsedUrl.path,e):this.queryPBF(e),this.recentlyUsedQueries.addToCache(t,s),s=s.catch((e=>{throw this.recentlyUsedQueries?.removeFromCache(t),e})))}return this.featureSetQueryInterceptor&&this.featureSetQueryInterceptor.preLayerQueryCallback({layer:this._layer,query:e,method:t}),null===s&&(s=!0!==r?i(this._layer.parsedUrl.path,e):this.queryPBF(e)),s}async _getFilteredSet(e,t,i,r,s){const a=await this.databaseType();if(this.isTable()&&t&&null!==e&&""!==e){return new IdSet/* default */.A([],[],!0,null)}if(this._canUsePagination())return this._getFilteredSetUsingPaging(e,t,i,r,s);let n="",l=!1;null!==r&&this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsOrderBy&&(n=r.constructClause(),l=!0);const u=new Query/* default */.A;this.datesInUnknownTimezone&&(u.timeReferenceUnknownClient=!0),u.where=null===i?null===t?"1=1":"":(0,sqlUtils/* toWhereClause */.YY)(i,a),this._requestStandardised&&(u.sqlFormat="standard"),u.spatialRelationship=this._makeRelationshipEnum(e),u.outSpatialReference=this.spatialReference,u.orderByFields=""!==n?n.split(","):null,u.geometry=null===t?null:t,u.relationParameter=this._makeRelationshipParam(e);let d=await this.executeQuery(u,"executeForIds");null===d&&(d=[]),this._checkCancelled(s);return new IdSet/* default */.A([],d,l,null)}_expandPagedSet(e,t,i,r,s){return this._expandPagedSetFeatureSet(e,t,i,r,s)}async _getFilteredSetUsingPaging(e,t,i,r,s){let a="",n=!1;null!==r&&this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsOrderBy&&(a=r.constructClause(),n=!0);const l=await this.databaseType();let u=null===i?null===t?"1=1":"":(0,sqlUtils/* toWhereClause */.YY)(i,l);this._layer.definitionExpression&&this._useDefinitionExpression&&(u=""!==u?"(("+this._layer.definitionExpression+") AND ("+u+"))":this._layer.definitionExpression);let d=this._maxQueryRate();const h=this._layer.capabilities?.query.maxRecordCount;null!=h&&h<d&&(d=h);let p=null;if(!0===this._pageJustIds)p=new IdSet/* default */.A([],["GETPAGES"],n,{spatialRel:this._makeRelationshipEnum(e),relationParam:this._makeRelationshipParam(e),outFields:this._layer.objectIdField,resultRecordCount:d,resultOffset:0,geometry:null===t?null:t,where:u,orderByFields:a,returnGeometry:!1,returnIdsOnly:"false",internal:{set:[],lastRetrieved:0,lastPage:0,fullyResolved:!1}});else{let i=!0;!0===this._removeGeometry&&(i=!1);const r=this._overrideFields??this._fieldsIncludingObjectId(["*"]);p=new IdSet/* default */.A([],["GETPAGES"],n,{spatialRel:this._makeRelationshipEnum(e),relationParam:this._makeRelationshipParam(e),outFields:r.join(","),resultRecordCount:d,resultOffset:0,geometry:null===t?null:t,where:u,orderByFields:a,returnGeometry:i,returnIdsOnly:"false",internal:{set:[],lastRetrieved:0,lastPage:0,fullyResolved:!1}})}return await this._expandPagedSet(p,d,0,1,s),p}_clonePageDefinition(e){return null===e?null:!0!==e.groupbypage?{groupbypage:!1,spatialRel:e.spatialRel,relationParam:e.relationParam,outFields:e.outFields,resultRecordCount:e.resultRecordCount,resultOffset:e.resultOffset,geometry:e.geometry,where:e.where,orderByFields:e.orderByFields,returnGeometry:e.returnGeometry,returnIdsOnly:e.returnIdsOnly,internal:e.internal}:{groupbypage:!0,spatialRel:e.spatialRel,relationParam:e.relationParam,outFields:e.outFields,resultRecordCount:e.resultRecordCount,useOIDpagination:e.useOIDpagination,generatedOid:e.generatedOid,groupByFieldsForStatistics:e.groupByFieldsForStatistics,resultOffset:e.resultOffset,outStatistics:e.outStatistics,geometry:e.geometry,where:e.where,orderByFields:e.orderByFields,returnGeometry:e.returnGeometry,returnIdsOnly:e.returnIdsOnly,internal:e.internal}}async _getPhysicalPage(e,t,i){const r=e.pagesDefinition.internal.lastRetrieved,s=r,a=e.pagesDefinition.internal.lastPage,n=new Query/* default */.A;this._requestStandardised&&(n.sqlFormat="standard"),this.datesInUnknownTimezone&&(n.timeReferenceUnknownClient=!0),n.spatialRelationship=e.pagesDefinition.spatialRel,n.relationParameter=e.pagesDefinition.relationParam,n.outFields=e.pagesDefinition.outFields.split(","),n.num=e.pagesDefinition.resultRecordCount,n.start=e.pagesDefinition.internal.lastPage,n.geometry=e.pagesDefinition.geometry,n.where=e.pagesDefinition.where,n.orderByFields=""!==e.pagesDefinition.orderByFields?e.pagesDefinition.orderByFields.split(","):null,n.returnGeometry=e.pagesDefinition.returnGeometry,n.outSpatialReference=this.spatialReference;const l=await this.executeQuery(n,"execute");if(this._checkCancelled(i),e.pagesDefinition.internal.lastPage!==a)return"done";const o=this._layer.objectIdField;for(let u=0;u<l.features.length;u++)e.pagesDefinition.internal.set[s+u]=l.features[u].attributes[o];if(!1===this._pageJustIds)for(let u=0;u<l.features.length;u++)this._featureCache[l.features[u].attributes[o]]=l.features[u];return(void 0===l.exceededTransferLimit&&l.features.length!==e.pagesDefinition.resultRecordCount||!1===l.exceededTransferLimit)&&(e.pagesDefinition.internal.fullyResolved=!0),e.pagesDefinition.internal.lastRetrieved=r+l.features.length,e.pagesDefinition.internal.lastPage+=e.pagesDefinition.resultRecordCount,"done"}_fieldsIncludingObjectId(e){if(null===e)return[this.objectIdField];const t=e.slice(0);if(t.includes("*"))return t;let i=!1;for(const r of t)if(r.toUpperCase()===this.objectIdField.toUpperCase()){i=!0;break}return!1===i&&t.push(this.objectIdField),t}async _getFeatures(e,t,i,r){const s=[];if(-1!==t&&void 0===this._featureCache[t]&&s.push(t),!0===this._checkIfNeedToExpandKnownPage(e,this._maxProcessingRate()))return await this._expandPagedSet(e,this._maxProcessingRate(),0,0,r),this._getFeatures(e,t,i,r);let l=0;for(let a=e._lastFetchedIndex;a<e._known.length;a++){if(e._lastFetchedIndex+=1,l++,void 0===this._featureCache[e._known[a]]){let i=!1;if(null!==this._layer._mode&&void 0!==this._layer._mode){const t=this._layer._mode;if(void 0!==t._featureMap[e._known[a]]){const r=t._featureMap[e._known[a]];null!==r&&(i=!0,this._featureCache[e._known[a]]=r)}}if(!1===i&&(e._known[a]!==t&&s.push(e._known[a]),s.length>=this._maxProcessingRate()-1))break}if(l>=i&&0===s.length)break}if(0===s.length)return"success";const o=new Query/* default */.A;this._requestStandardised&&(o.sqlFormat="standard"),this.datesInUnknownTimezone&&(o.timeReferenceUnknownClient=!0),o.objectIds=s,o.outFields=this._overrideFields??this._fieldsIncludingObjectId(["*"]),o.returnGeometry=!0,!0===this._removeGeometry&&(o.returnGeometry=!1),o.outSpatialReference=this.spatialReference;const u=await this.executeQuery(o,"execute");if(this._checkCancelled(r),void 0!==u.error)throw new errorsupport/* FeatureSetError */.dr(errorsupport/* FeatureSetErrorCodes */.D_.RequestFailed,{reason:u.error});const d=this._layer.objectIdField;for(let a=0;a<u.features.length;a++)this._featureCache[u.features[a].attributes[d]]=u.features[a];return"success"}async _getDistinctPages(e,t,i,r,s,l,o,u,d){await this._ensureLoaded();const h=await this.databaseType();let p=i.parseTree.column;const c=this._layer.fields??[];for(let a=0;a<c.length;a++)if(c[a].name.toLowerCase()===p.toLowerCase()){p=c[a].name;break}const f=new Query/* default */.A;this._requestStandardised&&(f.sqlFormat="standard"),this.datesInUnknownTimezone&&(f.timeReferenceUnknownClient=!0);let m=null===l?null===s?"1=1":"":(0,sqlUtils/* toWhereClause */.YY)(l,h);this._layer.definitionExpression&&this._useDefinitionExpression&&(m=""!==m?"(("+this._layer.definitionExpression+") AND ("+m+"))":this._layer.definitionExpression),f.where=m,f.spatialRelationship=this._makeRelationshipEnum(r),f.relationParameter=this._makeRelationshipParam(r),f.geometry=null===s?null:s,f.returnDistinctValues=!0,f.returnGeometry=!1,f.outFields=[p];const _=await this.executeQuery(f,"execute");if(this._checkCancelled(d),!_.hasOwnProperty("features"))throw new errorsupport/* FeatureSetError */.dr(errorsupport/* FeatureSetErrorCodes */.D_.InvalidStatResponse);let g=!1;for(let a=0;a<c.length;a++)if(c[a].name===p){"date"===c[a].type&&(g=!0);break}for(let a=0;a<_.features.length;a++){if(g){const e=_.features[a].attributes[p];null!==e?u.push(new Date(e)):u.push(e)}else u.push(_.features[a].attributes[p]);if(u.length>=o)break}if(0===_.features.length)return u;if(_.features.length===this._layer.capabilities?.query.maxRecordCount&&u.length<o){return{calculated:!0,result:await this._getDistinctPages(e+_.features.length,t,i,r,s,l,o,u,d)}}return u}async _distinctStat(e,t,i,r,s,a,n){return{calculated:!0,result:await this._getDistinctPages(0,e,t,i,r,s,a,[],n)}}isTable(){return this._layer.isTable||null===this._layer.geometryType||"table"===this._layer.type||""===this._layer.geometryType||"esriGeometryNull"===this._layer.geometryType}async _countstat(e,t,i,r){const s=await this.databaseType(),a=new Query/* default */.A;if(this._requestStandardised&&(a.sqlFormat="standard"),this.isTable()&&i&&null!==t&&""!==t)return{calculated:!0,result:0};let n=null===r?null===i?"1=1":"":(0,sqlUtils/* toWhereClause */.YY)(r,s);this._layer.definitionExpression&&this._useDefinitionExpression&&(n=""!==n?"(("+this._layer.definitionExpression+") AND ("+n+"))":this._layer.definitionExpression),a.where=n,this.datesInUnknownTimezone&&(a.timeReferenceUnknownClient=!0),a.where=n,a.spatialRelationship=this._makeRelationshipEnum(t),a.relationParameter=this._makeRelationshipParam(t),a.geometry=null===i?null:i,a.returnGeometry=!1;return{calculated:!0,result:await this.executeQuery(a,"executeForCount")}}async _stats(e,t,i,r,s,l,o){await this._ensureLoaded();const u=this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsSqlExpression,d=this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsStatistics,h=this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsDistinct;if("count"===e)return h?this._countstat(e,i,r,s):{calculated:!1};if(!1===d||!1===(0,sqlUtils/* isSingleField */.DA)(t)&&!1===u||!1===t.isStandardized)return""!==i||null!==s?{calculated:!1}:this._manualStat(e,t,l,o);if("distinct"===e)return!1===h?""!==i||null!==s?{calculated:!1}:this._manualStat(e,t,l,o):this._distinctStat(e,t,i,r,s,l,o);const p=await this.databaseType();if(this.isTable()&&r&&null!==i&&""!==i)return{calculated:!0,result:null};const c=new Query/* default */.A;this._requestStandardised&&(c.sqlFormat="standard");let _=null===s?null===r?"1=1":"":(0,sqlUtils/* toWhereClause */.YY)(s,p);this._layer.definitionExpression&&this._useDefinitionExpression&&(_=""!==_?"(("+this._layer.definitionExpression+") AND ("+_+"))":this._layer.definitionExpression),c.where=_,c.spatialRelationship=this._makeRelationshipEnum(i),c.relationParameter=this._makeRelationshipParam(i),c.geometry=null===r?null:r,this.datesInUnknownTimezone&&(c.timeReferenceUnknownClient=!0);const g=new StatisticDefinition/* default */.A;g.statisticType=(0,stats/* decodeStatType */.Dp)(e),g.onStatisticField=(0,sqlUtils/* toWhereClause */.YY)(t,p),g.outStatisticFieldName="ARCADE_STAT_RESULT",c.returnGeometry=!1;let w="ARCADE_STAT_RESULT";c.outStatistics=[g];const R=await this.executeQuery(c,"execute");if(!R.hasOwnProperty("features")||0===R.features.length)throw new errorsupport/* FeatureSetError */.dr(errorsupport/* FeatureSetErrorCodes */.D_.InvalidStatResponse);let S=!1;const F=R.fields??[];for(let a=0;a<F.length;a++)if("ARCADE_STAT_RESULT"===F[a].name.toUpperCase()){w=F[a].name,"date"===F[a].type&&(S=!0);break}if(S){let e=R.features[0].attributes[w];return null!==e&&(e=new Date(R.features[0].attributes[w])),{calculated:!0,result:e}}return{calculated:!0,result:R.features[0].attributes[w]}}_stat(e,t,i,r,s,a,n){return this._stats(e,t,i,r,s,a,n)}async _canDoAggregates(e,t){await this._ensureLoaded();let i=!1;const r=this._layer.capabilities?.query,s=!0===r?.supportsSqlExpression;if(null!=r&&!0===r.supportsStatistics&&!0===r.supportsOrderBy&&(i=!0),i)for(let a=0;a<t.length-1;a++)(!1===t[a].workingexpr?.isStandardized||!1===(0,sqlUtils/* isSingleField */.DA)(t[a].workingexpr)&&!1===s)&&(i=!1);return!1!==i}_makeRelationshipEnum(e){if(e.includes("esriSpatialRelRelation"))return"relation";switch(e){case"esriSpatialRelRelation":return"relation";case"esriSpatialRelIntersects":return"intersects";case"esriSpatialRelContains":return"contains";case"esriSpatialRelOverlaps":return"overlaps";case"esriSpatialRelWithin":return"within";case"esriSpatialRelTouches":return"touches";case"esriSpatialRelCrosses":return"crosses";case"esriSpatialRelEnvelopeIntersects":return"envelope-intersects"}return e}_makeRelationshipParam(e){return e.includes("esriSpatialRelRelation")?e.split(":")[1]:""}async _getAggregatePagesDataSourceDefinition(e,t,i,r,s,a,n){await this._ensureLoaded();const l=await this.databaseType();let u="",d=!1,h=!1;null!==a&&this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsOrderBy&&(u=a.constructClause(),h=!0),this._layer.capabilities&&this._layer.capabilities.query&&!1===this._layer.capabilities.query.supportsPagination&&(h=!1,d=!0,u=this._layer.objectIdField);const p=[];for(let o=0;o<t.length;o++){const e=new StatisticDefinition/* default */.A;e.onStatisticField=null!==t[o].workingexpr?(0,sqlUtils/* toWhereClause */.YY)(t[o].workingexpr,l):"",e.outStatisticFieldName=t[o].field,e.statisticType=t[o].toStatisticsName(),p.push(e)}""===u&&(u=e.join(","));let c=this._maxQueryRate();const f=this._layer.capabilities?.query.maxRecordCount;null!=f&&f<c&&(c=f);let m=null===s?null===r?"1=1":"":(0,sqlUtils/* toWhereClause */.YY)(s,l);this._layer.definitionExpression&&this._useDefinitionExpression&&(m=""!==m?"(("+this._layer.definitionExpression+") AND ("+m+"))":this._layer.definitionExpression);return new IdSet/* default */.A([],["GETPAGES"],h,{groupbypage:!0,spatialRel:this._makeRelationshipEnum(i),relationParam:this._makeRelationshipParam(i),outFields:["*"],useOIDpagination:d,generatedOid:n,resultRecordCount:c,resultOffset:0,groupByFieldsForStatistics:e,outStatistics:p,geometry:null===r?null:r,where:m,orderByFields:u,returnGeometry:!1,returnIdsOnly:!1,internal:{lastMaxId:-1,set:[],lastRetrieved:0,lastPage:0,fullyResolved:!1}})}async _getAgregagtePhysicalPage(t,i,r){let s=t.pagesDefinition.where;!0===t.pagesDefinition.useOIDpagination&&(s=""!==s?"("+s+") AND ("+t.pagesDefinition.generatedOid+">"+t.pagesDefinition.internal.lastMaxId.toString()+")":t.pagesDefinition.generatedOid+">"+t.pagesDefinition.internal.lastMaxId.toString());const l=t.pagesDefinition.internal.lastRetrieved,o=l,u=t.pagesDefinition.internal.lastPage,d=new Query/* default */.A;if(this._requestStandardised&&(d.sqlFormat="standard"),d.where=s,d.spatialRelationship=t.pagesDefinition.spatialRel,d.relationParameter=t.pagesDefinition.relationParam,d.outFields=t.pagesDefinition.outFields,d.outStatistics=t.pagesDefinition.outStatistics,d.geometry=t.pagesDefinition.geometry,d.groupByFieldsForStatistics=t.pagesDefinition.groupByFieldsForStatistics,d.num=t.pagesDefinition.resultRecordCount,d.start=t.pagesDefinition.internal.lastPage,d.returnGeometry=t.pagesDefinition.returnGeometry,this.datesInUnknownTimezone&&(d.timeReferenceUnknownClient=!0),d.orderByFields=""!==t.pagesDefinition.orderByFields?t.pagesDefinition.orderByFields.split(","):null,this.isTable()&&d.geometry&&d.spatialRelationship)return[];const h=await this.executeQuery(d,"execute");if(this._checkCancelled(r),!h.hasOwnProperty("features"))throw new errorsupport/* FeatureSetError */.dr(errorsupport/* FeatureSetErrorCodes */.D_.InvalidStatResponse);const p=[];if(t.pagesDefinition.internal.lastPage!==u)return[];h.features.length>0&&void 0===h.features[0].attributes[t.pagesDefinition.generatedOid]&&(t.pagesDefinition.generatedOid=t.pagesDefinition.generatedOid.toLowerCase());for(let e=0;e<h.features.length;e++)t.pagesDefinition.internal.set[o+e]=h.features[e].attributes[t.pagesDefinition.generatedOid];for(let a=0;a<h.features.length;a++)p.push(new Graphic/* default */.A({attributes:h.features[a].attributes,geometry:null}));return!0===t.pagesDefinition.useOIDpagination?0===h.features.length?t.pagesDefinition.internal.fullyResolved=!0:t.pagesDefinition.internal.lastMaxId=h.features[h.features.length-1].attributes[t.pagesDefinition.generatedOid]:(void 0===h.exceededTransferLimit&&h.features.length!==t.pagesDefinition.resultRecordCount||!1===h.exceededTransferLimit)&&(t.pagesDefinition.internal.fullyResolved=!0),t.pagesDefinition.internal.lastRetrieved=l+h.features.length,t.pagesDefinition.internal.lastPage+=t.pagesDefinition.resultRecordCount,p}static create(e,t,i,r,s){const a=new FeatureLayer["default"]({url:e,outFields:null===t?["*"]:t});return new T({layer:a,spatialReference:i,lrucache:r,interceptor:s})}relationshipMetaData(){return this._layer&&this._layer.source&&this._layer.source.sourceJSON?.relationships?this._layer.source.sourceJSON.relationships:[]}serviceUrl(){return (0,shared/* extractServiceUrl */.Qi)(this._layer.parsedUrl.path)}async queryAttachments(e,t,i,a,n){const l=this._layer.capabilities;if(l?.data.supportsAttachment&&l?.operations.supportsQueryAttachments){const l={objectIds:[e],returnMetadata:n};(t&&t>0||i&&i>0)&&(l.size=[t&&t>0?t:0,i&&i>0?i:t+1]),a&&a.length>0&&(l.attachmentTypes=a),this.featureSetQueryInterceptor&&this.featureSetQueryInterceptor.preLayerQueryCallback({layer:this._layer,query:l,method:"attachments"});const o=await this._layer.queryAttachments(l),u=[];return o&&o[e]&&o[e].forEach((t=>{const i=this._layer.parsedUrl.path+"/"+e.toString()+"/attachments/"+t.id.toString();let a=null;n&&t.exifInfo&&(a=Dictionary/* default */.A.convertJsonToArcade(t.exifInfo,"system",!0)),u.push(new Attachment/* default */.A(t.id,t.name,t.contentType,t.size,i,a,t.keywords??null))})),u}return[]}async queryRelatedFeatures(t){const r={f:"json",relationshipId:t.relationshipId.toString(),definitionExpression:t.where,outFields:t.outFields?.join(","),returnGeometry:t.returnGeometry.toString()};void 0!==t.resultOffset&&null!==t.resultOffset&&(r.resultOffset=t.resultOffset.toString()),void 0!==t.resultRecordCount&&null!==t.resultRecordCount&&(r.resultRecordCount=t.resultRecordCount.toString()),t.orderByFields&&(r.orderByFields=t.orderByFields.join(",")),t.objectIds&&t.objectIds.length>0&&(r.objectIds=t.objectIds.join(",")),t.outSpatialReference&&(r.outSR=(0,spatialReferenceUtils/* srToRESTValue */.YX)(t.outSpatialReference)),this.featureSetQueryInterceptor&&this.featureSetQueryInterceptor.preRequestCallback({layer:this._layer,queryPayload:r,method:"relatedrecords",url:this._layer.parsedUrl.path+"/queryRelatedRecords"});const s=await (0,request/* default */.A)(this._layer.parsedUrl.path+"/queryRelatedRecords",{responseType:"json",query:r});if(s.data){const t={},i=s.data;if(i?.relatedRecordGroups){const r=i.spatialReference;for(const s of i.relatedRecordGroups){const a=s.objectId,n=[];for(const t of s.relatedRecords){t.geometry&&(t.geometry.spatialReference=r);const i=new Graphic/* default */.A({geometry:t.geometry?(0,jsonUtils/* fromJSON */.rS)(t.geometry):null,attributes:t.attributes});n.push(i)}t[a]={features:n,exceededTransferLimit:!0===i.exceededTransferLimit}}}return t}throw new errorsupport/* FeatureSetError */.dr(errorsupport/* FeatureSetErrorCodes */.D_.InvalidRequest)}async getFeatureByObjectId(e,t){const i=new Query/* default */.A;i.outFields=t,i.returnGeometry=!1,i.outSpatialReference=this.spatialReference,i.where=this.objectIdField+"="+e.toString(),this.datesInUnknownTimezone&&(i.timeReferenceUnknownClient=!0),this.featureSetQueryInterceptor&&this.featureSetQueryInterceptor.preLayerQueryCallback({layer:this._layer,query:i,method:"execute"});const r=await (0,executeQueryJSON/* executeQueryJSON */.s)(this._layer.parsedUrl.path,i);return 1===r.features.length?r.features[0]:null}async getIdentityUser(){await this.load();const e=kernel.id?.findCredential(this._layer.url);return e?e.userId:null}async getOwningSystemUrl(){await this.load();const e=kernel.id?.findServerInfo(this._layer.url);if(e)return e.owningSystemUrl;let r=this._layer.url;const s=r.toLowerCase().indexOf("/rest/services");if(r=s>-1?r.substring(0,s):r,r){r+="/rest/info";try{const e=await (0,request/* default */.A)(r,{query:{f:"json"}});let t="";return e.data?.owningSystemUrl&&(t=e.data.owningSystemUrl),t}catch(a){return""}}return""}getDataSourceFeatureSet(){const e=new T({layer:this._layer,spatialReference:this.spatialReference??void 0,outFields:this._overrideFields??void 0,includeGeometry:!this._removeGeometry,lrucache:this.recentlyUsedQueries??void 0,interceptor:this.featureSetQueryInterceptor??void 0});return e._useDefinitionExpression=!1,e}get preferredTimeZone(){return this._layer.preferredTimeZone??null}get dateFieldsTimeZone(){return this._layer.dateFieldsTimeZone??null}get datesInUnknownTimezone(){return this._layer.datesInUnknownTimezone}get editFieldsInfo(){return this._layer.editFieldsInfo??null}get timeInfo(){return this._layer.timeInfo??null}async getFeatureSetInfo(){if(this.fsetInfo)return this.fsetInfo;let e=null,{parsedUrl:{path:t},serviceItemId:r=null}=this._layer;if(t){const s=await (0,request/* default */.A)(t,{responseType:"json",query:{f:"json"}});e=s?.data?.name??null,r=s?.data?.serviceItemId??null}const s=this._layer.title&&null!==(this._layer.parent??null);return this.featureSetInfo={layerId:this._layer.layerId,layerName:""===e?null:e,itemId:""===r?null:r,serviceLayerUrl:""===t?null:t,webMapLayerId:s?this._layer.id??null:null,webMapLayerTitle:s?this._layer.title??null:null,className:null,objectClassId:null},this.fsetInfo}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/arcade/featureset/sources/FeatureLayerMemory.js
var FeatureLayerMemory = __webpack_require__(3648);
;// ../node_modules/@arcgis/core/arcade/featureset/sources/FeatureLayerRelated.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class FeatureLayerRelated_d extends FeatureSet/* default */.A{constructor(e){super(e),this.declaredClass="esri.arcade.featureset.sources.FeatureLayerRelated",this._findObjectId=-1,this._requestStandardised=!1,this._removeGeometry=!1,this._overrideFields=null,this.featureObjectId=null,e.spatialReference&&(this.spatialReference=e.spatialReference),this._transparent=!0,this._maxProcessing=1e3,this._layer=e.layer,this._wset=null,this._findObjectId=e.objectId,this.featureObjectId=e.objectId,this.relationship=e.relationship,this._relatedLayer=e.relatedLayer,void 0!==e.outFields&&(this._overrideFields=e.outFields),void 0!==e.includeGeometry&&(this._removeGeometry=!1===e.includeGeometry)}_maxQueryRate(){return shared/* defaultMaxRecords */.gO}end(){return this._layer}optimisePagingFeatureQueries(){}async loadImpl(){return await Promise.all([this._layer.load(),this._relatedLayer?.load()]),this._initialiseFeatureSet(),this}nativeCapabilities(){return this._relatedLayer.nativeCapabilities()}_initialiseFeatureSet(){if(null==this.spatialReference&&(this.spatialReference=this._layer.spatialReference),this.geometryType=this._relatedLayer.geometryType,this.fields=this._relatedLayer.fields.slice(0),this.hasZ=this._relatedLayer.hasZ,this.hasM=this._relatedLayer.hasM,null!==this._overrideFields)if(1===this._overrideFields.length&&"*"===this._overrideFields[0])this._overrideFields=null;else{const e=[],t=[];for(const r of this.fields)if("oid"===r.type)e.push(r),t.push(r.name);else for(const i of this._overrideFields)if(i.toLowerCase()===r.name.toLowerCase()){e.push(r),t.push(r.name);break}this.fields=e,this._overrideFields=t}const e=this._layer.nativeCapabilities();e&&(this._databaseType=e.databaseType,this._requestStandardised=e.requestStandardised),this.objectIdField=this._relatedLayer.objectIdField,this.globalIdField=this._relatedLayer.globalIdField,this.hasM=this._relatedLayer.supportsM,this.hasZ=this._relatedLayer.supportsZ,this.typeIdField=this._relatedLayer.typeIdField,this.types=this._relatedLayer.types}async databaseType(){return await this._relatedLayer.databaseType(),this._databaseType=this._relatedLayer._databaseType,this._databaseType}isTable(){return this._relatedLayer.isTable()}_isInFeatureSet(){return shared/* IdState */.J6.InFeatureSet}_candidateIdTransform(e){return e}async _getSet(e){if(null===this._wset){await this._ensureLoaded();const t=await this._getFilteredSet("",null,null,null,e);return this._wset=t,t}return this._wset}_changeFeature(t){const r={};for(const e of this.fields)r[e.name]=t.attributes[e.name];return new Graphic/* default */.A({geometry:!0===this._removeGeometry?null:t.geometry,attributes:r})}async _getFilteredSet(e,t,r,i,a){if(await this.databaseType(),this.isTable()&&t&&null!==e&&""!==e){return new IdSet/* default */.A([],[],!0,null)}const n=this._layer.nativeCapabilities();if(!1===n.canQueryRelated){return new IdSet/* default */.A([],[],!0,null)}if(n.capabilities?.queryRelated&&n.capabilities.queryRelated.supportsPagination)return this._getFilteredSetUsingPaging(e,t,r,i,a);let d="",o=!1;null!==i&&n.capabilities?.queryRelated&&!0===n.capabilities.queryRelated.supportsOrderBy&&(d=i.constructClause(),o=!0);const u=new RelationshipQuery["default"];u.objectIds=[this._findObjectId];const h=null!==this._overrideFields?this._overrideFields:this._fieldsIncludingObjectId(this._relatedLayer.fields?this._relatedLayer.fields.map((e=>e.name)):["*"]);u.outFields=h,u.relationshipId=this.relationship.id,u.where="1=1";let c=!0;!0===this._removeGeometry&&(c=!1),u.returnGeometry=c,this._requestStandardised&&(u.sqlFormat="standard"),u.outSpatialReference=this.spatialReference,u.orderByFields=""!==d?d.split(","):null;const y=await n.source.queryRelatedFeatures(u);this._checkCancelled(a);const p=y[this._findObjectId]?y[this._findObjectId].features:[],_=[];for(let s=0;s<p.length;s++)this._featureCache[p[s].attributes[this._relatedLayer.objectIdField]]=p[s],_.push(p[s].attributes[this._relatedLayer.objectIdField]);const f=t&&null!==e&&""!==e,g=null!=r;return new IdSet/* default */.A(f||g?_:[],f||g?[]:_,o,null)}_fieldsIncludingObjectId(e){if(null===e)return[this.objectIdField];const t=e.slice(0);if(t.includes("*"))return t;let r=!1;for(const i of t)if(i.toUpperCase()===this.objectIdField.toUpperCase()){r=!0;break}return!1===r&&t.push(this.objectIdField),t}async _getFilteredSetUsingPaging(e,t,r,i,a){let n="",l=!1;const d=this._layer.nativeCapabilities();null!==i&&d?.capabilities?.queryRelated&&!0===d.capabilities.queryRelated.supportsOrderBy&&(n=i.constructClause(),l=!0),await this.databaseType();const o="1=1";let u=this._maxQueryRate();const h=d.capabilities?.query.maxRecordCount;null!=h&&h<u&&(u=h);const c=t&&null!==e&&""!==e,y=null!=r;let p=null,_=!0;!0===this._removeGeometry&&(_=!1);const f=null!==this._overrideFields?this._overrideFields:this._fieldsIncludingObjectId(this._relatedLayer.fields?this._relatedLayer.fields.map((e=>e.name)):["*"]);return p=new IdSet/* default */.A(c||y?["GETPAGES"]:[],c||y?[]:["GETPAGES"],l,{outFields:f.join(","),resultRecordCount:u,resultOffset:0,objectIds:[this._findObjectId],where:o,orderByFields:n,returnGeometry:_,returnIdsOnly:"false",internal:{set:[],lastRetrieved:0,lastPage:0,fullyResolved:!1}}),await this._expandPagedSet(p,u,0,0,a),p}_expandPagedSet(e,t,r,i,s){return this._expandPagedSetFeatureSet(e,t,r,i,s)}_clonePageDefinition(e){return null===e?null:!0!==e.groupbypage?{groupbypage:!1,outFields:e.outFields,resultRecordCount:e.resultRecordCount,resultOffset:e.resultOffset,where:e.where,objectIds:e.objectIds,orderByFields:e.orderByFields,returnGeometry:e.returnGeometry,returnIdsOnly:e.returnIdsOnly,internal:e.internal}:{groupbypage:!0,outFields:e.outFields,resultRecordCount:e.resultRecordCount,useOIDpagination:e.useOIDpagination,generatedOid:e.generatedOid,groupByFieldsForStatistics:e.groupByFieldsForStatistics,resultOffset:e.resultOffset,outStatistics:e.outStatistics,geometry:e.geometry,where:e.where,objectIds:e.objectIds,orderByFields:e.orderByFields,returnGeometry:e.returnGeometry,returnIdsOnly:e.returnIdsOnly,internal:e.internal}}async _getPhysicalPage(e,t,r){const i=e.pagesDefinition.internal.lastRetrieved,s=i,a=e.pagesDefinition.internal.lastPage,n=this._layer.nativeCapabilities(),d=new RelationshipQuery["default"];!0===this._requestStandardised&&(d.sqlFormat="standard"),d.relationshipId=this.relationship.id,d.objectIds=e.pagesDefinition.objectIds,d.resultOffset=e.pagesDefinition.internal.lastPage,d.resultRecordCount=e.pagesDefinition.resultRecordCount,d.outFields=e.pagesDefinition.outFields.split(","),d.where=e.pagesDefinition.where,d.orderByFields=""!==e.pagesDefinition.orderByFields?e.pagesDefinition.orderByFields.split(","):null,d.returnGeometry=e.pagesDefinition.returnGeometry,d.outSpatialReference=this.spatialReference;const o=await n.source.queryRelatedFeatures(d);if(this._checkCancelled(r),e.pagesDefinition.internal.lastPage!==a)return 0;const u=o[this._findObjectId]?o[this._findObjectId].features:[];for(let l=0;l<u.length;l++)e.pagesDefinition.internal.set[s+l]=u[l].attributes[this._relatedLayer.objectIdField];for(let l=0;l<u.length;l++)this._featureCache[u[l].attributes[this._relatedLayer.objectIdField]]=u[l];const h=!o[this._findObjectId]||!1===o[this._findObjectId].exceededTransferLimit;return u.length!==e.pagesDefinition.resultRecordCount&&h&&(e.pagesDefinition.internal.fullyResolved=!0),e.pagesDefinition.internal.lastRetrieved=i+u.length,e.pagesDefinition.internal.lastPage+=e.pagesDefinition.resultRecordCount,u.length}async _getFeatures(e,i,s,a){const n=[];-1!==i&&void 0===this._featureCache[i]&&n.push(i);const l=this._maxQueryRate();if(!0===this._checkIfNeedToExpandKnownPage(e,l))return await this._expandPagedSet(e,l,0,0,a),this._getFeatures(e,i,s,a);let d=0;for(let t=e._lastFetchedIndex;t<e._known.length&&(d++,d<=s&&(e._lastFetchedIndex+=1),!("GETPAGES"!==e._known[t]&&void 0===this._featureCache[e._known[t]]&&(e._known[t]!==i&&n.push(e._known[t]),n.length>s)))&&!(d>=s&&0===n.length);t++);if(0===n.length)return"success";throw new errorsupport/* FeatureSetError */.dr(errorsupport/* FeatureSetErrorCodes */.D_.MissingFeatures)}async _refineSetBlock(e,t,r){return e}async _stat(e,t,r,i,s,a,n){return{calculated:!1}}get gdbVersion(){return this._relatedLayer.gdbVersion}async _canDoAggregates(e,t,r,i,s){return!1}relationshipMetaData(){return this._relatedLayer.relationshipMetaData()}serviceUrl(){return this._relatedLayer.serviceUrl()}queryAttachments(e,t,r,i,s){return this._relatedLayer.queryAttachments(e,t,r,i,s)}getFeatureByObjectId(e,t){return this._relatedLayer.getFeatureByObjectId(e,t)}getOwningSystemUrl(){return this._relatedLayer.getOwningSystemUrl()}getIdentityUser(){return this._relatedLayer.getIdentityUser()}getDataSourceFeatureSet(){return this._relatedLayer}get preferredTimeZone(){return this._relatedLayer?.preferredTimeZone??null}get dateFieldsTimeZone(){return this._relatedLayer?.dateFieldsTimeZone??null}get datesInUnknownTimezone(){return this._relatedLayer?.datesInUnknownTimezone}get editFieldsInfo(){return this._relatedLayer?.editFieldsInfo??null}get timeInfo(){return this._relatedLayer?.timeInfo??null}async getFeatureSetInfo(){return this.fsetInfo??this._layer.featureSetInfo}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/arcade/featureset/support/cache.js
var cache = __webpack_require__(58961);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/portal/PortalItem.js + 2 modules
var PortalItem = __webpack_require__(26099);
;// ../node_modules/@arcgis/core/arcade/featureSetUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function L(){null===cache/* default */.A.applicationCache&&(cache/* default */.A.applicationCache=new cache/* default */.A)}async function I(e,t){if(cache/* default */.A.applicationCache){const r=cache/* default */.A.applicationCache.getLayerInfo(e);if(r){const a=await r;return new FeatureLayer["default"]({url:e,outFields:t,sourceJSON:a})}const n=new FeatureLayer["default"]({url:e,outFields:t}),i=(async()=>(await n.load(),n.sourceJSON))();if(cache/* default */.A.applicationCache){cache/* default */.A.applicationCache.setLayerInfo(e,i);try{return await i,n}catch(a){throw cache/* default */.A.applicationCache.clearLayerInfo(e),a}}return await i,n}return new FeatureLayer["default"]({url:e,outFields:t})}async function F(e,t,a,r,n,i=null){return g(await I(e,["*"]),t,a,r,n,i)}function g(e,t=null,r=null,n=!0,i=null,s=null){if(e instanceof FeatureLayer["default"]||(0,languageUtils.$)(e)){const a={layer:e,spatialReference:t,outFields:r,includeGeometry:n,lrucache:i,interceptor:s};return!0==!(e.url||!e.source)?new FeatureLayerMemory/* default */.A(a):new T(a)}const l=g(e.parent,t,r,n,i,s);return l.filter(WhereClause.WhereClause.create(e.parent.subtypeField+"="+e.subtypeCode.toString(),e.parent.fieldsIndex,l.dateFieldsTimeZoneDefaultUTC))}async function A(t){if(null!==cache/* default */.A.applicationCache){const e=cache/* default */.A.applicationCache.getLayerInfo(t);if(null!==e)return e}const a=(async()=>{const a=await (0,request/* default */.A)(t,{responseType:"json",query:{f:"json"}});return a.data?a.data:null})();if(null!==cache/* default */.A.applicationCache){cache/* default */.A.applicationCache.setLayerInfo(t,a);try{return await a}catch(r){throw cache/* default */.A.applicationCache.clearLayerInfo(t),r}}return a}async function N(t,a){const r="QUERYDATAELEMTS:"+a.toString()+":"+t;if(null!==cache/* default */.A.applicationCache){const e=cache/* default */.A.applicationCache.getLayerInfo(r);if(null!==e)return e}const n=(async()=>{const r=await (0,request/* default */.A)(t+"/queryDataElements",{method:"post",responseType:"json",query:{layers:JSON.stringify([a.toString()]),f:"json"}});if(r.data){const e=r.data;if(e.layerDataElements?.[0])return e.layerDataElements[0]}throw new errorsupport/* FeatureSetError */.dr(errorsupport/* FeatureSetErrorCodes */.D_.DataElementsNotFound)})();if(null!==cache/* default */.A.applicationCache){cache/* default */.A.applicationCache.setLayerInfo(r,n);try{return await n}catch(i){throw cache/* default */.A.applicationCache.clearLayerInfo(r),i}}return n}async function C(t){if(null!==cache/* default */.A.applicationCache){const e=cache/* default */.A.applicationCache.getLayerInfo(t);if(null!==e)return e}const a=(async()=>{const a=await (0,request/* default */.A)(t,{responseType:"json",query:{f:"json"}});if(a.data){const e=a.data;return e.layers||(e.layers=[]),e.tables||(e.tables=[]),e}return{layers:[],tables:[]}})();if(null!==cache/* default */.A.applicationCache){cache/* default */.A.applicationCache.setLayerInfo(t,a);try{return await a}catch(r){throw cache/* default */.A.applicationCache.clearLayerInfo(t),r}}return a}async function featureSetUtils_T(e,t){const a={metadata:null,networkId:-1,unVersion:3,terminals:[],queryelem:null,layerNameLkp:{},lkp:null},r=await C(e);if(a.metadata=r,void 0!==r.controllerDatasetLayers?.utilityNetworkLayerId&&null!==r.controllerDatasetLayers.utilityNetworkLayerId){if(r.layers)for(const e of r.layers)a.layerNameLkp[e.id]=e.name;if(r.tables)for(const e of r.tables)a.layerNameLkp[e.id]=e.name;const n=r.controllerDatasetLayers.utilityNetworkLayerId;a.networkId=n;const i=await N(e,n);if(i){a.queryelem=i,a.queryelem?.dataElement&&void 0!==a.queryelem.dataElement.schemaGeneration&&(a.unVersion=a.queryelem.dataElement.schemaGeneration),a.lkp={},a.queryelem.dataElement.domainNetworks||(a.queryelem.dataElement.domainNetworks=[]);for(const e of a.queryelem.dataElement.domainNetworks){for(const t of e.edgeSources??[]){const e={layerId:t.layerId,sourceId:t.sourceId,className:a.layerNameLkp[t.layerId]??null};e.className&&(a.lkp[e.className]=e)}for(const t of e.junctionSources??[]){const e={layerId:t.layerId,sourceId:t.sourceId,className:a.layerNameLkp[t.layerId]??null};e.className&&(a.lkp[e.className]=e)}}if(a.queryelem.dataElement.terminalConfigurations)for(const e of a.queryelem.dataElement.terminalConfigurations)for(const t of e.terminals)a.terminals.push({terminalId:t.terminalId,terminalName:t.terminalName});const r=await A(e+"/"+n);if(void 0!==r.systemLayers?.associationsTableId&&null!==r.systemLayers.associationsTableId){const n=[];a.unVersion>=4&&(n.push("STATUS"),n.push("PERCENTALONG"));let i=await F(e+"/"+r.systemLayers.associationsTableId.toString(),t,["OBJECTID","FROMNETWORKSOURCEID","TONETWORKSOURCEID","FROMGLOBALID","TOGLOBALID","TOTERMINALID","FROMTERMINALID","ASSOCIATIONTYPE","ISCONTENTVISIBLE","GLOBALID",...n],!1,null,null);return await i.load(),a.unVersion>=4&&(i=i.filter(WhereClause.WhereClause.create("STATUS NOT IN (1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47, 49, 50, 51, 52, 53, 54, 55, 57, 58, 59, 60, 61, 62, 63)",i.getFieldsIndex(),i.dateFieldsTimeZoneDefaultUTC)),await i.load()),{lkp:a.lkp,associations:i,unVersion:a.unVersion,terminals:a.terminals}}return{associations:null,unVersion:a.unVersion,lkp:null,terminals:[]}}return{associations:null,unVersion:a.unVersion,lkp:null,terminals:[]}}return{associations:null,unVersion:a.unVersion,lkp:null,terminals:[]}}async function k(e,t,a,r=null,n=null,i=!0,s=null,l=null){let o=e.serviceUrl();if(!o)return null;o="/"===o.charAt(o.length-1)?o+t.relatedTableId.toString():o+"/"+t.relatedTableId.toString();const u=await F(o,r,n,i,s,l);return new FeatureLayerRelated_d({layer:e,relatedLayer:u,relationship:t,objectId:a,spatialReference:r,outFields:n,includeGeometry:i,lrucache:s,interceptor:l})}AttributeFilter/* default */.A.registerAction(),O.registerAction(),OrderBy/* default */.A.registerAction(),SpatialFilter/* default */.A.registerAction(),Top/* default */.A.registerAction();class b extends featureSetCollection/* default */.A{constructor(e,t=null,a=null,r=null){super(),this._map=e,this._overridespref=t,this._lrucache=a,this._interceptor=r,this._instantLayers=[]}_makeAndAddFeatureSet(e,t=!0,a=null){const r=g(e,this._overridespref,null===a?["*"]:a,t,this._lrucache,this._interceptor);return this._instantLayers.push({featureset:r,opitem:e,includeGeometry:t,outFields:JSON.stringify(a)}),r}async featureSetByName(e,t=!0,r=null){if(void 0!==this._map.loaded&&void 0!==this._map.load&&!1===this._map.loaded)return await this._map.load(),this.featureSetByName(e,t,r);null===r&&(r=["*"]),r=(r=r.slice(0)).sort();const n=JSON.stringify(r);for(let a=0;a<this._instantLayers.length;a++){const r=this._instantLayers[a];if(r.opitem.title===e&&r.includeGeometry===t&&r.outFields===n)return this._instantLayers[a].featureset}const i=[],s=this._map.allLayers.find((t=>{if(t instanceof FeatureLayer["default"]){if(t.title===e)return!0}else if((0,languageUtils.$)(t)){if(t.title===e)return!0;i.push(t)}return!1}));if(s)return this._makeAndAddFeatureSet(s,t,r);if(this._map.tables){const a=this._map.tables.find((t=>!!(t.title&&t.title===e||t.title&&t.title===e)));if(a){if(a instanceof FeatureLayer["default"])return this._makeAndAddFeatureSet(a,t,r);if(a._materializedTable);else{const e=a.outFields?a:{...a,outFields:["*"]};a._materializedTable=new FeatureLayer["default"](e)}return await a._materializedTable.load(),this._makeAndAddFeatureSet(a._materializedTable,t,r)}}for(const a of i){if("not-loaded"===a.loadStatus||"loading"===a.loadStatus)try{await a.load()}catch(l){}const n=a.sublayers.find((t=>t.title===e));if(n)return this._makeAndAddFeatureSet(n,t,r)}return null}async featureSetById(e,t=!0,r=["*"]){if(void 0!==this._map.loaded&&void 0!==this._map.load&&!1===this._map.loaded)return await this._map.load(),this.featureSetById(e,t,r);null===r&&(r=["*"]),r=(r=r.slice(0)).sort();const n=JSON.stringify(r);for(let a=0;a<this._instantLayers.length;a++){const r=this._instantLayers[a];if(r.opitem.id===e&&r.includeGeometry===t&&r.outFields===n)return this._instantLayers[a].featureset}const i=[],s=this._map.allLayers.find((t=>{if(t instanceof FeatureLayer["default"]){if(t.id===e)return!0}else if((0,languageUtils.$)(t)){if(t.id===e)return!0;i.push(t)}return!1}));if(s)return this._makeAndAddFeatureSet(s,t,r);if(this._map.tables){const a=this._map.tables.find((t=>t.id===e));if(a){if(a instanceof FeatureLayer["default"])return this._makeAndAddFeatureSet(a,t,r);if(a._materializedTable);else{const e={...a,outFields:["*"]};a._materializedTable=new FeatureLayer["default"](e)}return await a._materializedTable.load(),this._makeAndAddFeatureSet(a._materializedTable,t,r)}}for(const a of i){if("not-loaded"===a.loadStatus||"loading"===a.loadStatus)try{await a.load()}catch(l){}const n=a.sublayers.find((t=>t.id===e));if(n)return this._makeAndAddFeatureSet(n,t,r)}return null}}class featureSetUtils_O extends featureSetCollection/* default */.A{constructor(e,t=null,a=null,r=null){super(),this._url=e,this._overridespref=t,this._lrucache=a,this._interceptor=r,this.metadata=null,this._instantLayers=[]}get url(){return this._url}_makeAndAddFeatureSet(e,t=!0,a=null){const r=g(e,this._overridespref,null===a?["*"]:a,t,this._lrucache);return this._instantLayers.push({featureset:r,opitem:e,includeGeometry:t,outFields:JSON.stringify(a)}),r}async _loadMetaData(){const e=await C(this._url);return this.metadata=e,e}load(){return this._loadMetaData()}clone(){return new featureSetUtils_O(this._url,this._overridespref,this._lrucache,this._interceptor)}async featureSetByName(e,t=!0,a=null){null===a&&(a=["*"]),a=(a=a.slice(0)).sort();const r=JSON.stringify(a);for(let s=0;s<this._instantLayers.length;s++){const a=this._instantLayers[s];if(a.opitem.title===e&&a.includeGeometry===t&&a.outFields===r)return this._instantLayers[s].featureset}const n=await this._loadMetaData();let i=null;for(const s of n.layers??[])s.name===e&&(i=s);if(!i)for(const s of n.tables??[])s.name===e&&(i=s);if(i){const e=await I(this._url+"/"+i.id,["*"]);return this._makeAndAddFeatureSet(e,t,a)}return null}async featureSetById(e,t=!0,a=["*"]){null===a&&(a=["*"]),a=(a=a.slice(0)).sort();const r=JSON.stringify(a);e=null!=e?e.toString():"";for(let s=0;s<this._instantLayers.length;s++){const a=this._instantLayers[s];if(a.opitem.id===e&&a.includeGeometry===t&&a.outFields===r)return this._instantLayers[s].featureset}const n=await this._loadMetaData();let i=null;for(const s of n.layers??[])null!==s.id&&void 0!==s.id&&s.id.toString()===e&&(i=s);if(!i)for(const s of n.tables??[])null!==s.id&&void 0!==s.id&&s.id.toString()===e&&(i=s);if(i){const e=await I(this._url+"/"+i.id,["*"]);return this._makeAndAddFeatureSet(e,t,a)}return null}}function D(e,t,a=null,r=null){return new b(e,t,a,r)}function E(e,t,a=null,r=null){return new featureSetUtils_O(e,t,a,r)}function j(e,t,n,i,s){if(null===e)return null;if(e instanceof FeatureLayer["default"]){switch(t){case"datasource":return g(e,s,e.outFields,!0,n,i).getDataSourceFeatureSet();case"parent":case"root":return g(e,s,e.outFields,!0,n,i)}return null}if((0,languageUtils.$)(e)){switch(t){case"datasource":return g(e,s,e.outFields,!0,n,i).getDataSourceFeatureSet();case"parent":case"root":return g(e,s,e.outFields,!0,n,i)}return null}if((0,languageUtils.a0)(e)){switch(t){case"datasource":return g(e.parent,s,e.parent.outFields,!0,n,i).getDataSourceFeatureSet();case"parent":case"root":return g(e,s,e.parent.outFields,!0,n,i)}return null}if(e instanceof FeatureSet/* default */.A)switch(t){case"datasource":return e.getDataSourceFeatureSet();case"parent":return e;case"root":return e.getRootFeatureSet()}return null}async function q(e,t,a,r,n,i,s,l=null){if(cache/* default */.A.applicationCache){const o=cache/* default */.A.applicationCache.getLayerInfo(e+":"+i.url);if(o){const e=await o;return g(new FeatureLayer["default"]({url:(0,shared/* extractServiceUrl */.Qi)(e.url)+"/"+t,outFields:["*"]}),a,r,n,s,l)}}const o=new PortalItem["default"]({id:e,portal:i}).load();cache/* default */.A.applicationCache&&cache/* default */.A.applicationCache.setLayerInfo(e+":"+i.url,o);try{const e=await o;return g(new FeatureLayer["default"]({url:(0,shared/* extractServiceUrl */.Qi)(e.url??"")+"/"+t,outFields:["*"]}),a,r,n,s,l)}catch(u){throw cache/* default */.A.applicationCache&&cache/* default */.A.applicationCache.clearLayerInfo(e+":"+i.url),u}}


/***/ }),

/***/ 90546:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gr: () => (/* binding */ B),
/* harmony export */   IO: () => (/* binding */ I),
/* harmony export */   a: () => (/* binding */ L),
/* harmony export */   bV: () => (/* binding */ b),
/* harmony export */   p8: () => (/* binding */ k)
/* harmony export */ });
/* unused harmony export AdaptedField */
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25707);
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47303);
/* harmony import */ var _support_errorsupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80778);
/* harmony import */ var _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64753);
/* harmony import */ var _support_IdSet_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22772);
/* harmony import */ var _support_shared_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44930);
/* harmony import */ var _support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20182);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6267);
/* harmony import */ var _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1615);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78983);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class D{constructor(e){this.field=e,this.sqlRewritable=!1}postInitialization(e,t){}}class I extends D{constructor(e){super(e),this.sqlRewritable=!0}extractValue(e){return e.attributes[this.field.name]}rewriteSql(e){return{rewritten:this.sqlRewritable,where:e}}}class k extends D{constructor(e,t,r){super((0,_support_shared_js__WEBPACK_IMPORTED_MODULE_4__/* .cloneField */ .ke)(e)),this.originalField=e,this.sqlRewritable=!0,this.field.name=t,this.field.alias=r}rewriteSql(e,t){return{rewritten:this.sqlRewritable,where:(0,_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .reformulateWithoutField */ .bD)(e,this.field.name,this.originalField.name,t.getFieldsIndex())}}extractValue(e){return e.attributes[this.originalField.name]}}class b extends D{constructor(e,t,r){super(e),this.codefield=t,this.lkp=r,this.reverseLkp={};for(const s in r)this.reverseLkp[r[s]]=s;this.sqlRewritable=!0}rewriteSql(e,t){const r=this.evaluateNodeToWhereClause(e.parseTree,_support_shared_js__WEBPACK_IMPORTED_MODULE_4__/* .FeatureServiceDatabaseType */ .zl.Standardised,this.field.name,this.codefield instanceof _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_6__.WhereClause?(0,_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .toWhereClause */ .YY)(this.codefield,_support_shared_js__WEBPACK_IMPORTED_MODULE_4__/* .FeatureServiceDatabaseType */ .zl.Standardised):this.codefield,e.parameters);return r.includes(b.BADNESS)?{rewritten:!1,where:e}:{rewritten:this.sqlRewritable,where:_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_6__.WhereClause.create(r,t._parent.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC)}}evaluateNodeToWhereClause(e,t,a=null,i=null,l){let n,o,h,g;switch(e.type){case"interval":return (0,_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .convertIntervalToSql */ .oj)(this.evaluateNodeToWhereClause(e.value,t,a,i,l),e.qualifier,e.op);case"case-expression":{let r=" CASE ";"simple"===e.format&&(r+=this.evaluateNodeToWhereClause(e.operand,t,a,b.BADNESS,l));for(let s=0;s<e.clauses.length;s++)r+=" WHEN "+this.evaluateNodeToWhereClause(e.clauses[s].operand,t,a,b.BADNESS,l)+" THEN "+this.evaluateNodeToWhereClause(e.clauses[s].value,t,a,b.BADNESS,l);return null!==e.else&&(r+=" ELSE "+this.evaluateNodeToWhereClause(e.else,t,a,b.BADNESS,l)),r+=" END ",r}case"parameter":{const r=l[e.value.toLowerCase()];if("string"==typeof r)return"'"+r.toString().replaceAll("'","''")+"'";if((0,_support_shared_js__WEBPACK_IMPORTED_MODULE_4__/* .isDate */ .$P)(r))return (0,_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .makeSqlFromDateTimeParameter */ .bm)(r,t);if((0,_support_shared_js__WEBPACK_IMPORTED_MODULE_4__/* .isLuxonDate */ .Lk)(r))return (0,_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .makeSqlFromDateTimeParameter */ .bm)(r,t);if((0,_support_shared_js__WEBPACK_IMPORTED_MODULE_4__/* .isArcadeTime */ .eg)(r))return (0,_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .makeTimeString */ .F1)(r,t);if((0,_support_shared_js__WEBPACK_IMPORTED_MODULE_4__/* .isArcadeDate */ .rX)(r))return (0,_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .arcadeDateToSqlString */ .R8)(r,t);if((0,_support_shared_js__WEBPACK_IMPORTED_MODULE_4__/* .isArcadeDateOnly */ .f0)(r))return (0,_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .arcadeDateOnlyToSqlString */ .Nf)(r,t);if(r instanceof Array){const e=[];for(let s=0;s<r.length;s++)"string"==typeof r[s]?e.push("'"+r[s].toString().replaceAll("'","''")+"'"):(0,_support_shared_js__WEBPACK_IMPORTED_MODULE_4__/* .isDate */ .$P)(r[s])||(0,_support_shared_js__WEBPACK_IMPORTED_MODULE_4__/* .isLuxonDate */ .Lk)(r[s])?e.push((0,_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .makeSqlFromDateTimeParameter */ .bm)(r[s],t)):(0,_support_shared_js__WEBPACK_IMPORTED_MODULE_4__/* .isArcadeTime */ .eg)(r[s])?e.push((0,_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .makeTimeString */ .F1)(r[s],t)):(0,_support_shared_js__WEBPACK_IMPORTED_MODULE_4__/* .isArcadeDate */ .rX)(r[s])?e.push((0,_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .arcadeDateToSqlString */ .R8)(r[s],t)):(0,_support_shared_js__WEBPACK_IMPORTED_MODULE_4__/* .isArcadeDateOnly */ .f0)(r[s])?e.push((0,_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .arcadeDateOnlyToSqlString */ .Nf)(r[s],t)):e.push(r[s].toString());return e}return r.toString()}case"expression-list":o=[];for(const r of e.value)o.push(this.evaluateNodeToWhereClause(r,t,a,i,l));return o;case"unary-expression":return" ( NOT "+this.evaluateNodeToWhereClause(e.expr,t,a,b.BADNESS,l)+" ) ";case"binary-expression":switch(e.operator){case"AND":return" ("+this.evaluateNodeToWhereClause(e.left,t,a,i,l)+" AND "+this.evaluateNodeToWhereClause(e.right,t,a,i,l)+") ";case"OR":return" ("+this.evaluateNodeToWhereClause(e.left,t,a,i,l)+" OR "+this.evaluateNodeToWhereClause(e.right,t,a,i,l)+") ";case"IS":if("null"!==e.right.type)throw new _support_errorsupport_js__WEBPACK_IMPORTED_MODULE_2__/* .SqlError */ .L8(_support_errorsupport_js__WEBPACK_IMPORTED_MODULE_2__/* .SqlErrorCodes */ .Z7.UnsupportedIsRhs);return" ("+this.evaluateNodeToWhereClause(e.left,t,a,i,l)+" IS NULL )";case"ISNOT":if("null"!==e.right.type)throw new _support_errorsupport_js__WEBPACK_IMPORTED_MODULE_2__/* .SqlError */ .L8(_support_errorsupport_js__WEBPACK_IMPORTED_MODULE_2__/* .SqlErrorCodes */ .Z7.UnsupportedIsRhs);return" ("+this.evaluateNodeToWhereClause(e.left,t,a,i,l)+" IS NOT NULL )";case"IN":if(n=[],"expression-list"===e.right.type){if("column-reference"===e.left.type&&e.left.column.toUpperCase()===this.field.name.toUpperCase()){const r=[];let s=!0;for(const t of e.right.value){if("string"!==t.type){s=!1;break}if(void 0===this.lkp[t.value]){s=!1;break}r.push(this.lkp[t.value].toString())}if(s)return" ("+this.evaluateNodeToWhereClause(e.left,t,a,i,l)+" IN ("+r.join(",")+")) "}return n=this.evaluateNodeToWhereClause(e.right,t,a,i,l)," ("+this.evaluateNodeToWhereClause(e.left,t,a,i,l)+" IN ("+n.join(",")+")) "}return g=this.evaluateNodeToWhereClause(e.right,t,a,i,l),g instanceof Array?" ("+this.evaluateNodeToWhereClause(e.left,t,a,i,l)+" IN ("+g.join(",")+")) ":" ("+this.evaluateNodeToWhereClause(e.left,t,a,i,l)+" IN ("+g+")) ";case"NOT IN":if(n=[],"expression-list"===e.right.type){if("column-reference"===e.left.type&&e.left.column.toUpperCase()===this.field.name.toUpperCase()){const r=[];let s=!0;for(const t of e.right.value){if("string"!==t.type){s=!1;break}if(void 0===this.lkp[t.value]){s=!1;break}r.push(this.lkp[t.value].toString())}if(s)return" ("+this.evaluateNodeToWhereClause(e.left,t,a,i,l)+" NOT IN ("+r.join(",")+")) "}return n=this.evaluateNodeToWhereClause(e.right,t,a,i,l)," ("+this.evaluateNodeToWhereClause(e.left,t,a,i,l)+" NOT IN ("+n.join(",")+")) "}return g=this.evaluateNodeToWhereClause(e.right,t,a,i,l),g instanceof Array?" ("+this.evaluateNodeToWhereClause(e.left,t,a,i,l)+" NOT IN ("+g.join(",")+")) ":" ("+this.evaluateNodeToWhereClause(e.left,t,a,i,l)+" NOT IN ("+g+")) ";case"BETWEEN":return h=this.evaluateNodeToWhereClause(e.right,t,a,b.BADNESS,l)," ("+this.evaluateNodeToWhereClause(e.left,t,a,b.BADNESS,l)+" BETWEEN "+h[0]+" AND "+h[1]+" ) ";case"NOTBETWEEN":return h=this.evaluateNodeToWhereClause(e.right,t,a,b.BADNESS,l)," ("+this.evaluateNodeToWhereClause(e.left,t,a,b.BADNESS,l)+" NOT BETWEEN "+h[0]+" AND "+h[1]+" ) ";case"LIKE":return""!==e.escape?" ("+this.evaluateNodeToWhereClause(e.left,t,a,b.BADNESS,l)+" LIKE "+this.evaluateNodeToWhereClause(e.right,t,a,b.BADNESS,l)+" ESCAPE '"+e.escape+"') ":" ("+this.evaluateNodeToWhereClause(e.left,t,a,b.BADNESS,l)+" LIKE "+this.evaluateNodeToWhereClause(e.right,t,a,b.BADNESS,l)+") ";case"NOT LIKE":return""!==e.escape?" ("+this.evaluateNodeToWhereClause(e.left,t,a,b.BADNESS,l)+" NOT LIKE "+this.evaluateNodeToWhereClause(e.right,t,a,b.BADNESS,l)+" ESCAPE '"+e.escape+"') ":" ("+this.evaluateNodeToWhereClause(e.left,t,a,b.BADNESS,l)+" NOT LIKE "+this.evaluateNodeToWhereClause(e.right,t,a,b.BADNESS,l)+") ";case"<>":case"=":if("column-reference"===e.left.type&&"string"===e.right.type){if(e.left.column.toUpperCase()===this.field.name.toUpperCase()&&void 0!==this.lkp[e.right.value.toString()])return" ("+i+" "+e.operator+" "+this.lkp[e.right.value.toString()].toString()+") "}else if("column-reference"===e.right.type&&"string"===e.left.type&&e.right.column.toUpperCase()===this.field.name.toUpperCase())return" ("+this.lkp[e.right.value.toString()].toString()+" "+e.operator+" "+i+") ";return" ("+this.evaluateNodeToWhereClause(e.left,t,a,b.BADNESS,l)+" "+e.operator+" "+this.evaluateNodeToWhereClause(e.right,t,a,b.BADNESS,l)+") ";case"<":case">":case">=":case"<=":case"*":case"-":case"+":case"/":case"||":return" ("+this.evaluateNodeToWhereClause(e.left,t,a,b.BADNESS,l)+" "+e.operator+" "+this.evaluateNodeToWhereClause(e.right,t,a,b.BADNESS,l)+") "}case"null":return"null";case"boolean":return!0===e.value?"1":"0";case"string":return"'"+e.value.toString().replaceAll("'","''")+"'";case"timestamp":return`timestamp '${e.value}'`;case"date":return`date '${e.value}'`;case"time":return`time '${e.value}'`;case"number":return e.value.toString();case"current-time":return (0,_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .makeToday */ .C6)("date"===e.mode,t);case"column-reference":return a&&a.toLowerCase()===e.column.toLowerCase()?"("+i+")":e.column;case"data-type":return e.value;case"function":{const r=this.evaluateNodeToWhereClause(e.args,t,a,b.BADNESS,l);return (0,_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .translateFunctionToDatabaseSpecific */ .F6)(e.name,r,t)}}throw new _support_errorsupport_js__WEBPACK_IMPORTED_MODULE_2__/* .SqlError */ .L8(_support_errorsupport_js__WEBPACK_IMPORTED_MODULE_2__/* .SqlErrorCodes */ .Z7.UnsupportedSyntax,{node:e.type})}extractValue(e){return this.codefield instanceof _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_6__.WhereClause?this.reverseLkp[_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_6__.WhereClause.convertValueToStorageFormat(this.codefield.calculateValueCompiled(e))]:this.reverseLkp[e.attributes[this.codefield]]}}b.BADNESS="_!!!_BAD_LKP_!!!!";class B extends D{constructor(e,t){super(e),this._sql=t}rewriteSql(e,t){return{rewritten:!0,where:(0,_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .reformulateWithoutField */ .bD)(e,this.field.name,(0,_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .toWhereClause */ .YY)(this._sql,_support_shared_js__WEBPACK_IMPORTED_MODULE_4__/* .FeatureServiceDatabaseType */ .zl.Standardised),t.getFieldsIndex())}}extractValue(e){return _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_6__.WhereClause.convertValueToStorageFormat(this._sql.calculateValueCompiled(e),this.field.type)}}class L extends _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A{static findField(e,t){for(const r of e)if(r.name.toLowerCase()===t.toString().toLowerCase())return r;return null}constructor(e){super(e),this._calcFunc=null,this.declaredClass="esri.arcade.featureset.actions.Adapted",this.adaptedFields=[],this._extraFilter=null,this._extraFilter=e.extraFilter,this._parent=e.parentfeatureset,this._maxProcessing=30,this.adaptedFields=e.adaptedFields}_initialiseFeatureSet(){null!==this._parent?(this.geometryType=this._parent.geometryType,this.objectIdField=this._parent.objectIdField,this.globalIdField=this._parent.globalIdField,this.spatialReference=this._parent.spatialReference,this.hasM=this._parent.hasM,this.hasZ=this._parent.hasZ,this.typeIdField=this._parent.typeIdField,this.types=this._parent.types):(this.spatialReference=new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A({wkid:4326}),this.objectIdField="",this.globalIdField="",this.geometryType=_support_shared_js__WEBPACK_IMPORTED_MODULE_4__/* .layerGeometryEsriConstants */ .ik.point,this.typeIdField="",this.types=null),this.fields=[];for(const e of this.adaptedFields)e.postInitialization(this,this._parent),this.fields.push(e.field)}async _getSet(e){if(null===this._wset){await this._ensureLoaded();let t=null;return t=this._extraFilter?await this._getFilteredSet("",null,null,null,e):await(this._parent?._getSet(e)),this._checkCancelled(e),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_8__/* .assertIsSome */ .Lw)(t),this._wset=new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A(t._candidates.slice(0),t._known.slice(0),t._ordered,this._clonePageDefinition(t.pagesDefinition)),this._wset}return this._wset}_isInFeatureSet(e){return this._parent._isInFeatureSet(e)}async _getFeatures(r,s,a,i){const l=[];-1!==s&&void 0===this._featureCache[s]&&l.push(s);const o=this._maxQueryRate();if(!0===this._checkIfNeedToExpandKnownPage(r,o))return await this._expandPagedSet(r,o,0,0,i),this._getFeatures(r,s,a,i);let h=0;for(let e=r._lastFetchedIndex;e<r._known.length&&(h++,h<=a&&(r._lastFetchedIndex+=1),!(void 0===this._featureCache[r._known[e]]&&(r._known[e]!==s&&l.push(r._known[e]),l.length>=o)));e++);if(0===l.length)return"success";r=new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A([],l,r._ordered,null);const u=Math.min(l.length,a);await(this._parent?._getFeatures(r,-1,u,i)),this._checkCancelled(i);const c=[];for(let e=0;e<u;e++){const t=this._parent?._featureFromCache(l[e]);void 0!==t&&c.push({geometry:t.geometry,attributes:t.attributes,id:l[e]})}for(const n of c){const r=[];for(const e of this.adaptedFields)r[e.field.name]=e.extractValue(n);this._featureCache[n.id]=new _Graphic_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({attributes:r,geometry:(0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .cloneGeometry */ .Yq)(n.geometry)})}return"success"}async _fetchAndRefineFeatures(){throw new _support_errorsupport_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureSetError */ .dr(_support_errorsupport_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureSetErrorCodes */ .D_.NeverReach)}async _getFilteredSet(e,t,r,s,a){let i=!1;const l=this._reformulateWithoutAdaptions(r);i=l.cannot,r=l.where;let o=!1;if(null!==s){o=!0;const e=[];for(const t of this.adaptedFields)if(!(t instanceof I)&&!0===s.scanForField(t.field.name)){if(!(t instanceof k)){s=null,o=!1;break}e.push({field:t.field.name,newfield:t.originalField.name})}s&&e.length>0&&(s=s.replaceFields(e))}null!==r?null!==this._extraFilter&&(r=(0,_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .combine */ .kg)(this._extraFilter,r)):r=this._extraFilter,await this._ensureLoaded();const h=await this._parent._getFilteredSet(e,t,r,s,a);let u;return this._checkCancelled(a),u=!0===i?new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A(h._candidates.slice(0).concat(h._known.slice(0)),[],!0===o&&h._ordered,this._clonePageDefinition(h.pagesDefinition)):new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A(h._candidates.slice(0),h._known.slice(0),!0===o&&h._ordered,this._clonePageDefinition(h.pagesDefinition)),u}_reformulateWithoutAdaptions(e){const t={cannot:!1,where:e};if(null!==e)for(const r of this.adaptedFields)if(!0===(0,_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .scanForField */ .Ju)(e,r.field.name)){const s=r.rewriteSql(e,this);if(!0!==s.rewritten){t.cannot=!0,t.where=null;break}t.where=s.where}return t}async _stat(e,t,r,s,a,i,l){let n=!1,o=this._reformulateWithoutAdaptions(t);if(n=o.cannot,t=o.where,o=this._reformulateWithoutAdaptions(a),n=n||o.cannot,null!==(a=o.where)?null!==this._extraFilter&&(a=(0,_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .combine */ .kg)(this._extraFilter,a)):a=this._extraFilter,!0===n)return null===a&&""===r&&null===s?this._manualStat(e,t,i,l):{calculated:!1};const h=await this._parent._stat(e,t,r,s,a,i,l);return!1===h.calculated?null===a&&""===r&&null===s?this._manualStat(e,t,i,l):{calculated:!1}:h}async _canDoAggregates(e,t,r,s,a){if(null===this._parent)return!1;for(let n=0;n<e.length;n++)for(const t of this.adaptedFields)if(e[n].toLowerCase()===t.field.name.toLowerCase()&&!(t instanceof I))return!1;const i=[];for(let n=0;n<t.length;n++){const e=t[n];if(null!==e.workingexpr){const t=this._reformulateWithoutAdaptions(e.workingexpr);if(t.cannot)return!1;const r=e.clone();r.workingexpr=t.where,i.push(r)}else i.push(e)}const l=this._reformulateWithoutAdaptions(a);return!l.cannot&&(null!==(a=l.where)?null!==this._extraFilter&&(a=(0,_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .combine */ .kg)(this._extraFilter,a)):a=this._extraFilter,this._parent._canDoAggregates(e,i,r,s,a))}async _getAggregatePagesDataSourceDefinition(e,t,r,s,l,n,o){if(null===this._parent)throw new _support_errorsupport_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureSetError */ .dr(_support_errorsupport_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureSetErrorCodes */ .D_.NeverReach);const h=[];for(let c=0;c<t.length;c++){const e=t[c];if(null!==e.workingexpr){const t=this._reformulateWithoutAdaptions(e.workingexpr);if(t.cannot)throw new _support_errorsupport_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureSetError */ .dr(_support_errorsupport_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureSetErrorCodes */ .D_.NeverReach);const r=e.clone();r.workingexpr=t.where,h.push(r)}else h.push(e)}const u=this._reformulateWithoutAdaptions(l);if(u.cannot)throw new _support_errorsupport_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureSetError */ .dr(_support_errorsupport_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureSetErrorCodes */ .D_.NeverReach);return null!==(l=u.where)?null!==this._extraFilter&&(l=(0,_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .combine */ .kg)(this._extraFilter,l)):l=this._extraFilter,this._parent._getAggregatePagesDataSourceDefinition(e,h,r,s,l,n,o)}}


/***/ }),

/***/ 84309:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _support_errorsupport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80778);
/* harmony import */ var _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64753);
/* harmony import */ var _support_IdSet_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22772);
/* harmony import */ var _support_shared_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44930);
/* harmony import */ var _support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20182);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40189);
/* harmony import */ var _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1615);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78983);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class c extends _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(e){super(e),this.declaredClass="esri.arcade.featureset.actions.AttributeFilter",this._maxProcessing=1e3,this._parent=e.parentfeatureset,e.whereclause instanceof _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_5__.WhereClause?(this._whereclause=e.whereclause,this._whereClauseFunction=null):(this._whereClauseFunction=e.whereclause,this._whereclause=null)}_initialiseFeatureSet(){null!==this._parent?(this.fields=this._parent.fields.slice(0),this.geometryType=this._parent.geometryType,this.objectIdField=this._parent.objectIdField,this.globalIdField=this._parent.globalIdField,this.spatialReference=this._parent.spatialReference,this.hasM=this._parent.hasM,this.hasZ=this._parent.hasZ,this.typeIdField=this._parent.typeIdField,this.types=this._parent.types):(this.fields=[],this.typeIdField="",this.objectIdField="",this.globalIdField="",this.spatialReference=new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A({wkid:4326}),this.geometryType=_support_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .layerGeometryEsriConstants */ .ik.point)}async _getSet(e){if(null===this._wset){await this._ensureLoaded();const t=await this._parent._getFilteredSet("",null,this._whereclause,null,e);return this._checkCancelled(e),null!==this._whereClauseFunction?this._wset=new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A(t._candidates.slice(0).concat(t._known.slice(0)),[],t._ordered,this._clonePageDefinition(t.pagesDefinition)):this._wset=new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A(t._candidates.slice(0),t._known.slice(0),t._ordered,this._clonePageDefinition(t.pagesDefinition)),this._wset}return this._wset}_isInFeatureSet(e){let t=this._parent?._isInFeatureSet(e);return t===_support_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .IdState */ .J6.NotInFeatureSet?t:(t=this._idstates[e],void 0===t?_support_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .IdState */ .J6.Unknown:t)}_getFeature(e,t,s){return this._parent._getFeature(e,t,s)}_getFeatures(e,t,s,i){return this._parent._getFeatures(e,t,s,i)}_featureFromCache(e){return this._parent._featureFromCache(e)}executeWhereClause(e){return this._whereclause?.testFeature(e)??!1}async executeWhereClauseDeferred(e){if(null!==this._whereClauseFunction){const t=this._whereClauseFunction(e);return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isPromiseLike */ .$X)(t),t}return this.executeWhereClause(e)}async _fetchAndRefineFeatures(e,t,s){const r=new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A([],e,!1,null),a=Math.min(t,e.length);if(await(this._parent?._getFeatures(r,-1,a,s)),this._checkCancelled(s),null==this._whereClauseFunction){for(let t=0;t<a;t++){const s=this._parent?._featureFromCache(e[t]);!0===this.executeWhereClause(s)?this._idstates[e[t]]=_support_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .IdState */ .J6.InFeatureSet:this._idstates[e[t]]=_support_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .IdState */ .J6.NotInFeatureSet}return"success"}const l=[];for(let i=0;i<a;i++){const t=this._parent?._featureFromCache(e[i]);l.push(await this.executeWhereClauseDeferred(t))}for(let i=0;i<t;i++)!0===l[i]?this._idstates[e[i]]=_support_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .IdState */ .J6.InFeatureSet:this._idstates[e[i]]=_support_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .IdState */ .J6.NotInFeatureSet;return"success"}async _getFilteredSet(e,t,s,r,n){null!==this._whereClauseFunction||(null!==s?null!==this._whereclause&&(s=(0,_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .combine */ .kg)(this._whereclause,s)):s=this._whereclause),await this._ensureLoaded();const l=await this._parent._getFilteredSet(e,t,s,r,n);let h;return this._checkCancelled(n),h=null!==this._whereClauseFunction?new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A(l._candidates.slice(0).concat(l._known.slice(0)),[],l._ordered,this._clonePageDefinition(l.pagesDefinition)):new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A(l._candidates.slice(0),l._known.slice(0),l._ordered,this._clonePageDefinition(l.pagesDefinition)),h}async _stat(e,t,s,i,r,n,l){if(null!==this._whereClauseFunction)return null===r&&""===s&&null===i?this._manualStat(e,t,n,l):{calculated:!1};let h=this._whereclause;null!==r&&null!==this._whereclause&&(h=(0,_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .combine */ .kg)(this._whereclause,r));const u=await this._parent._stat(e,t,s,i,h,n,l);return!1===u.calculated?null===r&&""===s&&null===i?this._manualStat(e,t,n,l):{calculated:!1}:u}async _canDoAggregates(e,t,s,i,r){return null===this._whereClauseFunction&&(null!==r?null!==this._whereclause&&(r=(0,_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .combine */ .kg)(this._whereclause,r)):r=this._whereclause,null!==this._parent&&this._parent._canDoAggregates(e,t,s,i,r))}async _getAggregatePagesDataSourceDefinition(s,i,r,n,l,h,u){if(null===this._parent)throw new _support_errorsupport_js__WEBPACK_IMPORTED_MODULE_0__/* .FeatureSetError */ .dr(_support_errorsupport_js__WEBPACK_IMPORTED_MODULE_0__/* .FeatureSetErrorCodes */ .D_.NeverReach);return null!==l?null!==this._whereclause&&(l=(0,_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .combine */ .kg)(this._whereclause,l)):l=this._whereclause,this._parent._getAggregatePagesDataSourceDefinition(s,i,r,n,l,h,u)}static registerAction(){_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A._featuresetFunctions.filter=function(e){if("function"==typeof e)return new c({parentfeatureset:this,whereclause:e});let t=null;return e instanceof _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_5__.WhereClause&&(t=e),new c({parentfeatureset:this,whereclause:t})}}getFieldsIndex(){return this._parent.getFieldsIndex()}}


/***/ }),

/***/ 34822:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62261);
/* harmony import */ var _support_errorsupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80778);
/* harmony import */ var _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64753);
/* harmony import */ var _support_IdSet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22772);
/* harmony import */ var _support_OrderbyClause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20520);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class a extends _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A{constructor(e){super(e),this._orderbyclause=null,this.declaredClass="esri.arcade.featureset.actions.OrderBy",this._maxProcessing=100,this._orderbyclause=e.orderbyclause,this._parent=e.parentfeatureset}async _getSet(e){if(null===this._wset){await this._ensureLoaded();const t=await this._getFilteredSet("",null,null,this._orderbyclause,e);return this._checkCancelled(e),this._wset=t,this._wset}return this._wset}async manualOrderSet(e,t){const r=await this.getIdColumnDictionary(e,[],-1,t);this._orderbyclause?.order(r);const n=new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A([],[],!0,null);for(let s=0;s<r.length;s++)n._known.push(r[s].id);return n}async getIdColumnDictionary(t,r,n,s){if(n<t._known.length-1){const i=this._maxQueryRate();if("GETPAGES"===t._known[n+1])return await (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.a1)(this._parent._expandPagedSet(t,i,0,0,s)),this.getIdColumnDictionary(t,r,n,s);let a=n+1;const o=[];for(;a<t._known.length&&"GETPAGES"!==t._known[a];)o.push(t._known[a]),a++;n+=o.length;const u=await (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.a1)(this._parent._getFeatureBatch(o,s));this._checkCancelled(s);for(const e of u)r.push({id:e.attributes[this.objectIdField],feature:e});return this.getIdColumnDictionary(t,r,n,s)}return t._candidates.length>0?(await (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.a1)(this._refineSetBlock(t,this._maxProcessingRate(),s)),this._checkCancelled(s),this.getIdColumnDictionary(t,r,n,s)):r}_isInFeatureSet(e){return this._parent._isInFeatureSet(e)}_getFeatures(e,t,r,n){return this._parent._getFeatures(e,t,r,n)}_featureFromCache(e){if(void 0===this._featureCache[e]){const t=this._parent._featureFromCache(e);if(void 0===t)return;return null===t?null:(this._featureCache[e]=t,t)}return this._featureCache[e]}async _fetchAndRefineFeatures(){throw new _support_errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .FeatureSetError */ .dr(_support_errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .FeatureSetErrorCodes */ .D_.NeverReach)}async _getFilteredSet(e,t,r,n,i){await this._ensureLoaded();const a=await this._parent._getFilteredSet(e,t,r,null===n?this._orderbyclause:n,i);this._checkCancelled(i);const o=new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A(a._candidates.slice(0),a._known.slice(0),a._ordered,this._clonePageDefinition(a.pagesDefinition));let u=!0;if(a._candidates.length>0&&(u=!1),!1===o._ordered){let e=await this.manualOrderSet(o,i);return!1===u&&(null===t&&null===r||(e=new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A(e._candidates.slice(0).concat(e._known.slice(0)),[],e._ordered,this._clonePageDefinition(e.pagesDefinition)))),e}return o}static registerAction(){_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A._featuresetFunctions.orderBy=function(e){return""===e?this:new a({parentfeatureset:this,orderbyclause:new _support_OrderbyClause_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A(e)})}}getFieldsIndex(){return this._parent.getFieldsIndex()}}


/***/ }),

/***/ 21101:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var _sources_Empty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31239);
/* harmony import */ var _support_errorsupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80778);
/* harmony import */ var _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64753);
/* harmony import */ var _support_IdSet_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22772);
/* harmony import */ var _support_shared_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44930);
/* harmony import */ var _geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92978);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class f extends _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A{constructor(e){super(e),this._relation="",this._relationGeom=null,this._relationString="",this.declaredClass="esri.arcade.featureset.actions.SpatialFilter",this._relationString=e.relationString,this._parent=e.parentfeatureset,this._maxProcessing=40,this._relation=e.relation,this._relationGeom=e.relationGeom}async _getSet(e){if(null===this._wset){await this._ensureLoaded();const t=await this._parent._getFilteredSet("esriSpatialRelRelation"!==this._relation?this._relation:this._relation+":"+this._relationString,this._relationGeom,null,null,e);return this._checkCancelled(e),this._wset=new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A(t._candidates.slice(0),t._known.slice(0),t._ordered,this._clonePageDefinition(t.pagesDefinition)),this._wset}return this._wset}_isInFeatureSet(e){let t=this._parent._isInFeatureSet(e);return t===_support_shared_js__WEBPACK_IMPORTED_MODULE_3__/* .IdState */ .J6.NotInFeatureSet?t:(t=this._idstates[e],void 0===t?_support_shared_js__WEBPACK_IMPORTED_MODULE_3__/* .IdState */ .J6.Unknown:t)}_getFeature(e,t,i){return this._parent._getFeature(e,t,i)}_getFeatures(e,t,i,r){return this._parent._getFeatures(e,t,i,r)}_featureFromCache(e){return this._parent._featureFromCache(e)}async executeSpatialRelationTest(e){if(null===e.geometry)return!1;switch(this._relation){case"esriSpatialRelEnvelopeIntersects":return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_4__/* .intersects */ .HY)((0,_support_shared_js__WEBPACK_IMPORTED_MODULE_3__/* .shapeExtent */ .Yc)(this._relationGeom),(0,_support_shared_js__WEBPACK_IMPORTED_MODULE_3__/* .shapeExtent */ .Yc)(e.geometry));case"esriSpatialRelIntersects":return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_4__/* .intersects */ .HY)(this._relationGeom,e.geometry);case"esriSpatialRelContains":return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_4__/* .contains */ .gR)(this._relationGeom,e.geometry);case"esriSpatialRelOverlaps":return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_4__/* .overlaps */ .$f)(this._relationGeom,e.geometry);case"esriSpatialRelWithin":return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_4__/* .within */ .ux)(this._relationGeom,e.geometry);case"esriSpatialRelTouches":return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_4__/* .touches */ .yI)(this._relationGeom,e.geometry);case"esriSpatialRelCrosses":return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_4__/* .crosses */ .NN)(this._relationGeom,e.geometry);case"esriSpatialRelRelation":return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_4__/* .relate */ .c7)(this._relationGeom,e.geometry,this._relationString??"")}}async _fetchAndRefineFeatures(e,t,i){const r=new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A([],e,!1,null),s=Math.min(t,e.length);await(this._parent?._getFeatures(r,-1,s,i)),this._checkCancelled(i);const l=[];for(let n=0;n<s;n++){const t=this._parent._featureFromCache(e[n]);l.push(await this.executeSpatialRelationTest(t))}for(let n=0;n<t;n++)!0===l[n]?this._idstates[e[n]]=_support_shared_js__WEBPACK_IMPORTED_MODULE_3__/* .IdState */ .J6.InFeatureSet:this._idstates[e[n]]=_support_shared_js__WEBPACK_IMPORTED_MODULE_3__/* .IdState */ .J6.NotInFeatureSet;return"success"}async _getFilteredSet(e,t,i,r,a){await this._ensureLoaded();const s=await this._parent._getFilteredSet("esriSpatialRelRelation"!==this._relation?this._relation:this._relation+":"+this._relationString,this._relationGeom,i,r,a);let l;return this._checkCancelled(a),l=null!==t?new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A(s._candidates.slice(0).concat(s._known.slice(0)),[],s._ordered,this._clonePageDefinition(s.pagesDefinition)):new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A(s._candidates.slice(0),s._known.slice(0),s._ordered,this._clonePageDefinition(s.pagesDefinition)),l}async _stat(e,t,i,r,n,a,s){if(""!==i)return{calculated:!1};const l=await this._parent._stat(e,t,"esriSpatialRelRelation"!==this._relation?this._relation:this._relation+":"+this._relationString,this._relationGeom,n,a,s);return!1===l.calculated?null===n&&""===i&&null===r?this._manualStat(e,t,a,s):{calculated:!1}:l}async _canDoAggregates(e,t,i,r,n){return""===i&&null===r&&(null!==this._parent&&this._parent._canDoAggregates(e,t,"esriSpatialRelRelation"!==this._relation?this._relation:this._relation+":"+this._relationString,this._relationGeom,n))}async _getAggregatePagesDataSourceDefinition(e,r,n,a,s,l,o){if(null===this._parent)throw new _support_errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .FeatureSetError */ .dr(_support_errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .FeatureSetErrorCodes */ .D_.NeverReach);return this._parent._getAggregatePagesDataSourceDefinition(e,r,"esriSpatialRelRelation"!==this._relation?this._relation:this._relation+":"+this._relationString,this._relationGeom,s,l,o)}static registerAction(){_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A._featuresetFunctions.intersects=function(t){return null==t?new _sources_Empty_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({parentfeatureset:this}):new f({parentfeatureset:this,relation:"esriSpatialRelIntersects",relationGeom:t})},_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A._featuresetFunctions.envelopeIntersects=function(t){return null==t?new _sources_Empty_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({parentfeatureset:this}):new f({parentfeatureset:this,relation:"esriSpatialRelEnvelopeIntersects",relationGeom:t})},_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A._featuresetFunctions.contains=function(t){return null==t?new _sources_Empty_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({parentfeatureset:this}):new f({parentfeatureset:this,relation:"esriSpatialRelContains",relationGeom:t})},_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A._featuresetFunctions.overlaps=function(t){return null==t?new _sources_Empty_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({parentfeatureset:this}):new f({parentfeatureset:this,relation:"esriSpatialRelOverlaps",relationGeom:t})},_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A._featuresetFunctions.within=function(t){return null==t?new _sources_Empty_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({parentfeatureset:this}):new f({parentfeatureset:this,relation:"esriSpatialRelWithin",relationGeom:t})},_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A._featuresetFunctions.touches=function(t){return null==t?new _sources_Empty_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({parentfeatureset:this}):new f({parentfeatureset:this,relation:"esriSpatialRelTouches",relationGeom:t})},_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A._featuresetFunctions.crosses=function(t){return null==t?new _sources_Empty_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({parentfeatureset:this}):new f({parentfeatureset:this,relation:"esriSpatialRelCrosses",relationGeom:t})},_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A._featuresetFunctions.relate=function(t,i){return null==t?new _sources_Empty_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({parentfeatureset:this}):new f({parentfeatureset:this,relation:"esriSpatialRelRelation",relationGeom:t,relationString:i})}}getFieldsIndex(){return this._parent.getFieldsIndex()}}


/***/ }),

/***/ 62120:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _support_errorsupport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80778);
/* harmony import */ var _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64753);
/* harmony import */ var _support_IdSet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22772);
/* harmony import */ var _support_shared_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44930);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class a extends _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(t){super(t),this._topnum=0,this.declaredClass="esri.arcade.featureset.actions.Top",this._countedin=0,this._maxProcessing=100,this._topnum=t.topnum,this._parent=t.parentfeatureset}async _getSet(t){if(null===this._wset){await this._ensureLoaded();const e=await this._parent._getSet(t);return this._wset=new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A(e._candidates.slice(0),e._known.slice(0),!1,this._clonePageDefinition(e.pagesDefinition)),this._setKnownLength(this._wset)>this._topnum&&(this._wset._known=this._wset._known.slice(0,this._topnum)),this._setKnownLength(this._wset)>=this._topnum&&(this._wset._candidates=[]),this._wset}return this._wset}_setKnownLength(t){return t._known.length>0&&"GETPAGES"===t._known[t._known.length-1]?t._known.length-1:t._known.length}_isInFeatureSet(t){const e=this._parent._isInFeatureSet(t);if(e===_support_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .IdState */ .J6.NotInFeatureSet)return e;const n=this._idstates[t];return n===_support_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .IdState */ .J6.InFeatureSet||n===_support_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .IdState */ .J6.NotInFeatureSet?n:e===_support_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .IdState */ .J6.InFeatureSet&&void 0===n?this._countedin<this._topnum?(this._idstates[t]=_support_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .IdState */ .J6.InFeatureSet,this._countedin++,_support_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .IdState */ .J6.InFeatureSet):(this._idstates[t]=_support_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .IdState */ .J6.NotInFeatureSet,_support_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .IdState */ .J6.NotInFeatureSet):_support_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .IdState */ .J6.Unknown}async _expandPagedSet(n,s,i,a,o){if(null===this._parent)throw new _support_errorsupport_js__WEBPACK_IMPORTED_MODULE_0__/* .FeatureSetError */ .dr(_support_errorsupport_js__WEBPACK_IMPORTED_MODULE_0__/* .FeatureSetErrorCodes */ .D_.NotImplemented);if(s>this._topnum&&(s=this._topnum),this._countedin>=this._topnum&&n.pagesDefinition.internal.set.length<=n.pagesDefinition.resultOffset){let t=n._known.length;return t>0&&"GETPAGES"===n._known[t-1]&&(n._known.length=t-1),t=n._candidates.length,t>0&&"GETPAGES"===n._candidates[t-1]&&(n._candidates.length=t-1),"success"}const r=await this._parent._expandPagedSet(n,s,i,a,o);return this._setKnownLength(n)>this._topnum&&(n._known.length=this._topnum),this._setKnownLength(n)>=this._topnum&&(n._candidates.length=0),r}async _getFeatures(t,e,n,i){const a=[],o=this._maxQueryRate();if(!0===this._checkIfNeedToExpandKnownPage(t,o))return await this._expandPagedSet(t,o,0,0,i),this._getFeatures(t,e,n,i);-1!==e&&void 0===this._featureCache[e]&&a.push(e);let r=0;for(let s=t._lastFetchedIndex;s<t._known.length&&(r++,r<=n&&(t._lastFetchedIndex+=1),!(void 0===this._featureCache[t._known[s]]&&(t._known[s]!==e&&a.push(t._known[s]),a.length>o)));s++);if(0===a.length)return"success";const _=new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A([],a,!1,null),h=Math.min(a.length,n);await this._parent._getFeatures(_,-1,h,i);for(let s=0;s<h;s++){const t=this._parent._featureFromCache(a[s]);void 0!==t&&(this._featureCache[a[s]]=t)}return"success"}async _getFilteredSet(t,e,n,i,a){await this._ensureLoaded();const o=await this._getSet(a);return new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A(o._candidates.slice(0).concat(o._known.slice(0)),[],!1,this._clonePageDefinition(o.pagesDefinition))}_refineKnowns(t,e){let n=0,s=null;const a=[];for(let o=0;o<t._candidates.length;o++){const r=this._isInFeatureSet(t._candidates[o]);if(r===_support_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .IdState */ .J6.InFeatureSet){if(t._known.push(t._candidates[o]),n+=1,null===s?s={start:o,end:o}:s.end===o-1?s.end=o:(a.push(s),s={start:o,end:o}),t._known.length>=this._topnum)break}else if(r===_support_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .IdState */ .J6.NotInFeatureSet)null===s?s={start:o,end:o}:s.end===o-1?s.end=o:(a.push(s),s={start:o,end:o}),n+=1;else if(r===_support_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .IdState */ .J6.Unknown)break;if(n>=e)break}null!==s&&a.push(s);for(let i=a.length-1;i>=0;i--)t._candidates.splice(a[i].start,a[i].end-a[i].start+1);this._setKnownLength(t)>this._topnum&&(t._known=t._known.slice(0,this._topnum)),this._setKnownLength(t)>=this._topnum&&(t._candidates=[])}async _stat(){return{calculated:!1}}async _canDoAggregates(){return!1}static registerAction(){_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A._featuresetFunctions.top=function(t){return new a({parentfeatureset:this,topnum:t})}}getFieldsIndex(){return this._parent.getFieldsIndex()}}


/***/ }),

/***/ 31239:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _support_errorsupport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80778);
/* harmony import */ var _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64753);
/* harmony import */ var _support_IdSet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22772);
/* harmony import */ var _support_shared_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44930);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class u extends _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(e){super(e),this.declaredClass="esri.layers.featureset.sources.Empty",this._maxProcessing=1e3,this._wset=new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A([],[],!1,null),this._parent=e.parentfeatureset,this._databaseType=_support_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.Standardised}async _getSet(){return this._wset}optimisePagingFeatureQueries(){}_isInFeatureSet(){return _support_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .IdState */ .J6.NotInFeatureSet}async _getFeature(){throw new _support_errorsupport_js__WEBPACK_IMPORTED_MODULE_0__/* .FeatureSetError */ .dr(_support_errorsupport_js__WEBPACK_IMPORTED_MODULE_0__/* .FeatureSetErrorCodes */ .D_.NeverReach)}async queryAttachments(){return[]}async _getFeatures(){return"success"}_featureFromCache(){return null}async _fetchAndRefineFeatures(){throw new _support_errorsupport_js__WEBPACK_IMPORTED_MODULE_0__/* .FeatureSetError */ .dr(_support_errorsupport_js__WEBPACK_IMPORTED_MODULE_0__/* .FeatureSetErrorCodes */ .D_.NeverReach)}async _getFilteredSet(){return new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A([],[],!1,null)}_stat(e,t,r,s,a,n,u){return this._manualStat(e,t,n,u)}async _canDoAggregates(){return!1}}


/***/ }),

/***/ 3648:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25707);
/* harmony import */ var _support_errorsupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80778);
/* harmony import */ var _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64753);
/* harmony import */ var _support_IdSet_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(22772);
/* harmony import */ var _support_shared_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44930);
/* harmony import */ var _support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20182);
/* harmony import */ var _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88266);
/* harmony import */ var _layers_FeatureLayer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83780);
/* harmony import */ var _layers_SubtypeGroupLayer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64810);
/* harmony import */ var _layers_support_FeatureType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25392);
/* harmony import */ var _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24738);
/* harmony import */ var _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24587);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class f extends _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A{constructor(e){super(e),this.declaredClass="esri.arcade.featureset.sources.FeatureLayerMemory",this._removeGeometry=!1,this._overrideFields=null,this._forceIsTable=!1,e.spatialReference&&(this.spatialReference=e.spatialReference),this._transparent=!0,this._maxProcessing=1e3,this._layer=e.layer,this._wset=null,!0===e.isTable&&(this._forceIsTable=!0),void 0!==e.outFields&&(this._overrideFields=e.outFields),void 0!==e.includeGeometry&&(this._removeGeometry=!1===e.includeGeometry)}_maxQueryRate(){return _support_shared_js__WEBPACK_IMPORTED_MODULE_3__/* .defaultMaxRecords */ .gO}end(){return this._layer}optimisePagingFeatureQueries(){}async loadImpl(){return!0===this._layer.loaded?(this._initialiseFeatureSet(),this):(await this._layer.load(),this._initialiseFeatureSet(),this)}get gdbVersion(){return""}_initialiseFeatureSet(){if(null==this.spatialReference&&(this.spatialReference=this._layer.spatialReference),this.geometryType=this._layer.geometryType,this.fields=this._layer.fields.slice(0),null!==this._overrideFields)if(1===this._overrideFields.length&&"*"===this._overrideFields[0])this._overrideFields=null;else{const e=[],t=[];for(const r of this.fields)if("oid"===r.type)e.push(r),t.push(r.name);else for(const s of this._overrideFields)if(s.toLowerCase()===r.name.toLowerCase()){e.push(r),t.push(r.name);break}this.fields=e,this._overrideFields=t}this.objectIdField=this._layer.objectIdField;for(const e of this.fields)"global-id"===e.type&&(this.globalIdField=e.name);this._databaseType=_support_shared_js__WEBPACK_IMPORTED_MODULE_3__/* .FeatureServiceDatabaseType */ .zl.Standardised,this.hasZ=!0===this._layer?.capabilities?.data?.supportsZ,this.hasM=!0===this._layer?.capabilities?.data?.supportsM,this._layer instanceof _layers_SubtypeGroupLayer_js__WEBPACK_IMPORTED_MODULE_7__["default"]?(this.typeIdField=this._layer.subtypeField??"",this.types=this._layer.subtypes):(this.typeIdField=this._layer.typeIdField??"",this.types=this._layer.types)}isTable(){return this._forceIsTable||this._layer.isTable||"table"===this._layer.type||!this._layer.geometryType}_isInFeatureSet(){return _support_shared_js__WEBPACK_IMPORTED_MODULE_3__/* .IdState */ .J6.InFeatureSet}_candidateIdTransform(e){return e}async _getSet(e){if(null===this._wset){await this._ensureLoaded();const t=await this._getFilteredSet("",null,null,null,e);return this._wset=t,t}return this._wset}_changeFeature(t){const r={};for(const e of this.fields)r[e.name]=t.attributes[e.name];return new _Graphic_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({geometry:!0===this._removeGeometry?null:t.geometry,attributes:r})}async _getFilteredSet(e,t,r,s,a){let n="",u=!1;if(null!==s&&(n=s.constructClause(),u=!0),this.isTable()&&t&&null!==e&&""!==e){return new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A([],[],!0,null)}const h=new _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A;h.returnZ=this.hasZ,h.returnM=this.hasM,h.where=null===r?null===t?"1=1":"":(0,_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .toWhereClause */ .YY)(r,_support_shared_js__WEBPACK_IMPORTED_MODULE_3__/* .FeatureServiceDatabaseType */ .zl.Standardised),h.spatialRelationship=this._makeRelationshipEnum(e),h.outSpatialReference=this.spatialReference,h.orderByFields=""!==n?n.split(","):null,h.geometry=null===t?null:t,h.returnGeometry=!0,h.relationParameter=this._makeRelationshipParam(e);const y=await this._layer.queryFeatures(h);if(null===y)return new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A([],[],u,null);this._checkCancelled(a);const c=[];y.features.forEach((e=>{const t=e.attributes[this._layer.objectIdField];c.push(t),this._featureCache[t]=this._changeFeature(e)}));return new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A([],c,u,null)}_makeRelationshipEnum(e){if(e.includes("esriSpatialRelRelation"))return"relation";switch(e){case"esriSpatialRelRelation":return"relation";case"esriSpatialRelIntersects":return"intersects";case"esriSpatialRelContains":return"contains";case"esriSpatialRelOverlaps":return"overlaps";case"esriSpatialRelWithin":return"within";case"esriSpatialRelTouches":return"touches";case"esriSpatialRelCrosses":return"crosses";case"esriSpatialRelEnvelopeIntersects":return"envelope-intersects"}return e}_makeRelationshipParam(e){return e.includes("esriSpatialRelRelation")?e.split(":")[1]:""}async _queryAllFeatures(){if(this._wset)return this._wset;const e=new _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A;if(e.where="1=1",await this._ensureLoaded(),this._layer.source&&this._layer.source.items){const e=[];return this._layer.source.items.forEach((t=>{const r=t.attributes[this._layer.objectIdField];e.push(r),this._featureCache[r]=this._changeFeature(t)})),this._wset=new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A([],e,!1,null),this._wset}e.returnZ=this.hasZ,e.returnM=this.hasM;const t=await this._layer.queryFeatures(e),r=[];return t.features.forEach((e=>{const t=e.attributes[this._layer.objectIdField];r.push(t),this._featureCache[t]=this._changeFeature(e)})),this._wset=new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A([],r,!1,null),this._wset}async _getFeatures(e,s,i){const a=[];-1!==s&&void 0===this._featureCache[s]&&a.push(s);for(let t=e._lastFetchedIndex;t<e._known.length&&(e._lastFetchedIndex+=1,!(void 0===this._featureCache[e._known[t]]&&(e._known[t]!==s&&a.push(e._known[t]),a.length>i)));t++);if(0===a.length)return"success";throw new _support_errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .FeatureSetError */ .dr(_support_errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .FeatureSetErrorCodes */ .D_.MissingFeatures)}async _refineSetBlock(e){return e}async _stat(){return{calculated:!1}}async _canDoAggregates(){return!1}relationshipMetaData(){return[]}static _cloneAttr(e){const t={};for(const r in e)t[r]=e[r];return t}nativeCapabilities(){return{title:this._layer.title??"",canQueryRelated:!1,source:this,capabilities:this._layer.capabilities,databaseType:this._databaseType,requestStandardised:!0}}static create(e,t){let r=e.layerDefinition.objectIdField;const s=e.layerDefinition.typeIdField??"",i=[];if(e.layerDefinition.types)for(const u of e.layerDefinition.types)i.push(_layers_support_FeatureType_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A.fromJSON(u));let a=e.layerDefinition.geometryType;void 0===a&&(a=e.featureSet.geometryType||"");let l=e.featureSet.features;const n=t.toJSON();if(!r){let t=!1;for(const s of e.layerDefinition.fields)if("oid"===s.type||"esriFieldTypeOID"===s.type){r=s.name,t=!0;break}if(!1===t){let t="FID",s=!0,i=0;for(;s;){let r=!0;for(const s of e.layerDefinition.fields)if(s.name===t){r=!1;break}!0===r?s=!1:(i++,t="FID"+i.toString())}e.layerDefinition.fields.push({type:"esriFieldTypeOID",name:t,alias:t});const a=[];for(let r=0;r<l.length;r++)a.push({geometry:e.featureSet.features[r].geometry,attributes:e.featureSet.features[r].attributes?this._cloneAttr(e.featureSet.features[r].attributes):{}}),a[r].attributes[t]=r;l=a,r=t}}const o=[];for(const u of e.layerDefinition.fields)u instanceof _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A?o.push(u):o.push(_layers_support_Field_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A.fromJSON(u));let y=a;switch(y||(y=""),y){case"esriGeometryPoint":y="point";break;case"esriGeometryPolyline":y="polyline";break;case"esriGeometryPolygon":y="polygon";break;case"esriGeometryEnvelope":y="extent";break;case"esriGeometryMultipoint":y="multipoint";break;case"":case"esriGeometryNull":y="esriGeometryNull"}if("esriGeometryNull"!==y)for(const h of l)h.geometry&&h.geometry instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A==!1&&(h.geometry.type=y,void 0===h.geometry.spatialReference&&(h.geometry.spatialReference=n));else for(const u of l)u.geometry&&(u.geometry=null);const p={outFields:["*"],source:l,fields:o,hasZ:!0===e?.layerDefinition?.hasZ||!0===e?.featureSet?.hasZ,hasM:!0===e?.layerDefinition?.hasM||!0===e?.featureSet?.hasM,types:i,typeIdField:s,objectIdField:r,spatialReference:t},m="esriGeometryNull"===y||null===y;m||(p.geometryType=y);const _=new _layers_FeatureLayer_js__WEBPACK_IMPORTED_MODULE_6__["default"](p);return new f({layer:_,spatialReference:t,isTable:m})}async queryAttachments(){return[]}async getFeatureByObjectId(e){const t=new _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A;t.where=this.objectIdField+"="+e.toString(),t.returnZ=this.hasZ,t.returnM=this.hasM;const r=await this._layer.queryFeatures(t);return 1===r.features.length?r.features[0]:null}async getOwningSystemUrl(){return""}async getIdentityUser(){return""}get preferredTimeZone(){return this._layer.preferredTimeZone??null}get dateFieldsTimeZone(){return this._layer.dateFieldsTimeZone??null}get datesInUnknownTimezone(){return this._layer?.datesInUnknownTimezone}get editFieldsInfo(){return this._layer?.editFieldsInfo}get timeInfo(){return this._layer?.timeInfo}async getFeatureSetInfo(){const e=this._layer.title&&this._layer.parent;return this.fsetInfo??{layerId:null,layerName:null,itemId:null,serviceLayerUrl:null,webMapLayerId:e?this._layer.id??null:null,webMapLayerTitle:e?this._layer.title??null:null,className:null,objectClassId:null}}}


/***/ }),

/***/ 64753:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ x)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/arcade/featureset/support/cache.js
var cache = __webpack_require__(58961);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/arcade/featureset/support/errorsupport.js
var errorsupport = __webpack_require__(80778);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/arcade/Feature.js
var Feature = __webpack_require__(79918);
;// ../node_modules/@arcgis/core/arcade/featureset/support/FeatureSetIterator.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class FeatureSetIterator_e{constructor(t,e){this._lastId=-1,this._progress=e,this._parent=t}reset(){this._lastId=-1}async nextBatchAsArcadeFeatures(e,s){const n=await this.nextBatch(e);return null===n?n:n.map((e=>Feature/* default */.A.createFromGraphicLikeObject(e.geometry,e.attributes,this._parent,s)))}nextBatch(t){if(null!==this._parent._mainSetInUse)return this._parent._mainSetInUse.then((e=>this.nextBatch(t)),(e=>this.nextBatch(t)));const e={returnpromise:null,hasset:!1},s=[];return e.returnpromise=new Promise(((n,a)=>{this._parent._getSet(this._progress).then((r=>{const i=r._known;let h=i.length-1;if("GETPAGES"===i[i.length-1]&&(h-=1),this._lastId+t>h&&i.length>0&&"GETPAGES"===i[i.length-1])return void this._parent._expandPagedSet(r,this._parent._maxQueryRate(),0,0,this._progress).then((s=>{e.hasset=!0,this._parent._mainSetInUse=null,this.nextBatch(t).then(n,a)}),(t=>{e.hasset=!0,this._parent._mainSetInUse=null,a(t)}));const _=r._candidates;if(h>=this._lastId+t||0===_.length){for(let e=0;e<t;e++){const t=e+this._lastId+1;if(t>=i.length)break;s[e]=i[t]}return this._lastId+=s.length,0===s.length&&(e.hasset=!0,this._parent._mainSetInUse=null,n([])),void this._parent._getFeatureBatch(s,this._progress).then((t=>{e.hasset=!0,this._parent._mainSetInUse=null,n(t)}),(t=>{e.hasset=!0,this._parent._mainSetInUse=null,a(t)}))}this._parent._refineSetBlock(r,this._parent._maxProcessingRate(),this._progress).then((()=>{e.hasset=!0,this._parent._mainSetInUse=null,this.nextBatch(t).then(n,a)}),(t=>{e.hasset=!0,this._parent._mainSetInUse=null,a(t)}))}),(t=>{e.hasset=!0,this._parent._mainSetInUse=null,a(t)}))})),!1===e.hasset&&(this._parent._mainSetInUse=e.returnpromise,e.hasset=!0),e.returnpromise}next(){if(null!==this._parent._mainSetInUse)return this._parent._mainSetInUse.then((t=>this.next()),(t=>this.next()));const t={returnpromise:null,hasset:!1};return t.returnpromise=new Promise(((e,s)=>{this._parent._getSet(this._progress).then((n=>{const a=n._known;if(this._lastId<a.length-1)"GETPAGES"===a[this._lastId+1]?this._parent._expandPagedSet(n,this._parent._maxQueryRate(),0,0,this._progress).then((e=>(t.hasset=!0,this._parent._mainSetInUse=null,this.next()))).then(e,s):(this._lastId+=1,this._parent._getFeature(n,a[this._lastId],this._progress).then((s=>{t.hasset=!0,this._parent._mainSetInUse=null,e(s)}),(e=>{t.hasset=!0,this._parent._mainSetInUse=null,s(e)})));else{n._candidates.length>0?this._parent._refineSetBlock(n,this._parent._maxProcessingRate(),this._progress).then((()=>{t.hasset=!0,this._parent._mainSetInUse=null,this.next().then(e,s)}),(e=>{t.hasset=!0,this._parent._mainSetInUse=null,s(e)})):(t.hasset=!0,this._parent._mainSetInUse=null,e(null))}}),(e=>{t.hasset=!0,this._parent._mainSetInUse=null,s(e)}))})),!1===t.hasset&&(this._parent._mainSetInUse=t.returnpromise,t.hasset=!0),t.returnpromise}async count(){if(-1!==this._parent._totalCount)return this._parent._totalCount;const t=await this._parent._getSet(this._progress),e=await this._refineAllSets(t);return this._parent._totalCount=e._known.length,this._parent._totalCount}async _refineAllSets(t){if(t._known.length>0&&"GETPAGES"===t._known[t._known.length-1])return await this._parent._expandPagedSet(t,this._parent._maxQueryRate(),0,1,this._progress),this._refineAllSets(t);if(t._candidates.length>0){if("GETPAGES"===t._known[t._candidates.length-1])return await this._parent._expandPagedSet(t,this._parent._maxQueryRate(),0,2,this._progress),this._refineAllSets(t);const e=await this._parent._refineSetBlock(t,this._parent._maxProcessingRate(),this._progress);return e._candidates.length>0?this._refineAllSets(e):e}return t}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/arcade/featureset/support/IdSet.js
var IdSet = __webpack_require__(22772);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/arcade/featureset/support/shared.js
var shared = __webpack_require__(44930);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/arcade/featureset/support/stats.js
var stats = __webpack_require__(88620);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/sql/WhereClause.js + 7 modules
var WhereClause = __webpack_require__(1615);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/geometryEngineAsync.js
var geometryEngineAsync = __webpack_require__(92978);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/FieldsIndex.js
var FieldsIndex = __webpack_require__(79005);
;// ../node_modules/@arcgis/core/arcade/featureset/support/FeatureSet.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class x{constructor(e){this.recentlyUsedQueries=null,this.featureSetQueryInterceptor=null,this._idstates=[],this._parent=null,this._wset=null,this._mainSetInUse=null,this._maxProcessing=200,this._maxQuery=500,this._totalCount=-1,this._databaseType=shared/* FeatureServiceDatabaseType */.zl.NotEvaluated,this._databaseTypeProbed=null,this.declaredRootClass="esri.arcade.featureset.support.FeatureSet",this._featureCache=[],this.typeIdField=null,this.types=null,this.fields=null,this.geometryType="",this.objectIdField="",this.globalIdField="",this.spatialReference=null,this.hasM=!1,this.hasZ=!1,this._transparent=!1,this.loaded=!1,this._loadPromise=null,this._fieldsIndex=null,this.fsetInfo=null,e?.lrucache&&(this.recentlyUsedQueries=e.lrucache),e?.interceptor&&(this.featureSetQueryInterceptor=e.interceptor)}optimisePagingFeatureQueries(e){this._parent&&this._parent.optimisePagingFeatureQueries(e)}_hasMemorySource(){return!0}prop(e,t){return void 0===t?this[e]:(void 0!==this[e]&&(this[e]=t),this)}end(){return null!==this._parent&&!0===this._parent._transparent?this._parent.end():this._parent}_ensureLoaded(){return this.load()}load(){return null===this._loadPromise&&(this._loadPromise=this.loadImpl()),this._loadPromise}async loadImpl(){return!0===this._parent?.loaded?(this._initialiseFeatureSet(),this):(await(this._parent?.load()),this._initialiseFeatureSet(),this)}_initialiseFeatureSet(){null!==this._parent?(this.fields=this._parent.fields.slice(0),this.geometryType=this._parent.geometryType,this.objectIdField=this._parent.objectIdField,this.globalIdField=this._parent.globalIdField,this.spatialReference=this._parent.spatialReference,this.hasM=this._parent.hasM,this.hasZ=this._parent.hasZ,this.typeIdField=this._parent.typeIdField,this.types=this._parent.types):(this.fields=[],this.typeIdField="",this.objectIdField="",this.globalIdField="",this.spatialReference=new SpatialReference/* default */.A({wkid:4326}),this.geometryType=shared/* layerGeometryEsriConstants */.ik.point)}getField(e,t){let s;return(t=t||this.fields)&&(e=e.toLowerCase(),t.some((t=>(t&&t.name.toLowerCase()===e&&(s=t),!!s)))),s}getFieldsIndex(){return null===this._fieldsIndex&&(this._fieldsIndex=FieldsIndex/* default */.A.fromLayer({timeInfo:this.timeInfo,editFieldsInfo:this.editFieldsInfo,dateFieldsTimeZone:this.dateFieldsTimeZone,datesInUnknownTimezone:this.datesInUnknownTimezone,fields:this.fields})),this._fieldsIndex}_maxProcessingRate(){return null!==this._parent?Math.min(this._maxProcessing,this._parent._maxProcessingRate()):Math.min(this._maxProcessing,this._maxQueryRate())}_maxQueryRate(){return null!==this._parent?Math.max(this._maxQuery,this._parent._maxQueryRate()):this._maxQuery}_checkCancelled(e){if(null!=e&&e.aborted)throw new errorsupport/* FeatureSetError */.dr(errorsupport/* FeatureSetErrorCodes */.D_.Cancelled)}nativeCapabilities(){return this._parent.nativeCapabilities()}async _canDoAggregates(e,t,s,n,i){return null!==this._parent&&this._parent._canDoAggregates(e,t,s,n,i)}async _getAggregatePagesDataSourceDefinition(e,n,i,a,r,l,u){if(null===this._parent)throw new errorsupport/* FeatureSetError */.dr(errorsupport/* FeatureSetErrorCodes */.D_.NeverReach);return this._parent._getAggregatePagesDataSourceDefinition(e,n,i,a,r,l,u)}async _getAgregagtePhysicalPage(e,n,i){if(null===this._parent)throw new errorsupport/* FeatureSetError */.dr(errorsupport/* FeatureSetErrorCodes */.D_.NeverReach);return this._parent._getAgregagtePhysicalPage(e,n,i)}async databaseType(){if(this._databaseType===shared/* FeatureServiceDatabaseType */.zl.NotEvaluated){if(null!==cache/* default */.A.applicationCache){const t=cache/* default */.A.applicationCache.getDatabaseType(this._cacheableFeatureSetSourceKey());if(null!==t)return t}if(null!==this._databaseTypeProbed)return this._databaseTypeProbed;try{this._databaseTypeProbed=this._getDatabaseTypeImpl(),null!==cache/* default */.A.applicationCache&&cache/* default */.A.applicationCache.setDatabaseType(this._cacheableFeatureSetSourceKey(),this._databaseTypeProbed)}catch(t){throw null!==cache/* default */.A.applicationCache&&cache/* default */.A.applicationCache.clearDatabaseType(this._cacheableFeatureSetSourceKey()),t}return this._databaseTypeProbed}return this._databaseType}async _getDatabaseTypeImpl(){const e=[{thetype:shared/* FeatureServiceDatabaseType */.zl.SqlServer,testwhere:"(CAST( '2015-01-01' as DATETIME) = CAST( '2015-01-01' as DATETIME)) AND OBJECTID<0"},{thetype:shared/* FeatureServiceDatabaseType */.zl.Oracle,testwhere:"(TO_DATE('2003-11-18','YYYY-MM-DD') = TO_DATE('2003-11-18','YYYY-MM-DD')) AND OBJECTID<0"},{thetype:shared/* FeatureServiceDatabaseType */.zl.StandardisedNoInterval,testwhere:"(date '2015-01-01 10:10:10' = date '2015-01-01 10:10:10') AND OBJECTID<0"}];for(const t of e){if(!0===await this._runDatabaseProbe(t.testwhere))return t.thetype}return shared/* FeatureServiceDatabaseType */.zl.StandardisedNoInterval}_cacheableFeatureSetSourceKey(){return"MUSTBESET"}async _runDatabaseProbe(e){if(null!==this._parent)return this._parent._runDatabaseProbe(e);throw new errorsupport/* FeatureSetError */.dr(errorsupport/* FeatureSetErrorCodes */.D_.NotImplemented)}isTable(){return this._parent?.isTable()??!1}_featureFromCache(e){if(void 0!==this._featureCache[e])return this._featureCache[e]}_isInFeatureSet(e){return shared/* IdState */.J6.Unknown}_getSet(e){throw new errorsupport/* FeatureSetError */.dr(errorsupport/* FeatureSetErrorCodes */.D_.NotImplemented)}async _getFeature(e,n,i){if(this._checkCancelled(i),void 0!==this._featureFromCache(n))return this._featureFromCache(n);if(await this._getFeatures(e,n,this._maxProcessingRate(),i),this._checkCancelled(i),void 0!==this._featureFromCache(n))return this._featureFromCache(n);throw new errorsupport/* FeatureSetError */.dr(errorsupport/* FeatureSetErrorCodes */.D_.MissingFeatures)}async _getFeatureBatch(e,t){this._checkCancelled(t);const s=new IdSet/* default */.A([],e,!1,null),n=[];await this._getFeatures(s,-1,e.length,t),this._checkCancelled(t);for(const i of e)void 0!==this._featureFromCache(i)&&n.push(this._featureFromCache(i));return n}async _getFeatures(e,t,s,n){return"success"}_getFilteredSet(e,n,i,a,r){throw new errorsupport/* FeatureSetError */.dr(errorsupport/* FeatureSetErrorCodes */.D_.NotImplemented)}async _refineSetBlock(e,t,s){if(!0===this._checkIfNeedToExpandCandidatePage(e,this._maxQueryRate()))return await this._expandPagedSet(e,this._maxQueryRate(),0,0,s),this._refineSetBlock(e,t,s);this._checkCancelled(s);const n=e._candidates.length;this._refineKnowns(e,t);let i=n-e._candidates.length;if(0===e._candidates.length)return e;if(i>=t)return e;if(await this._refineIfParentKnown(e,t-i,s),this._checkCancelled(s),this._refineKnowns(e,t-i),i=n-e._candidates.length,i<t&&e._candidates.length>0){const n=t-i,a=this._prepareFetchAndRefineSet(e._candidates);return await this._fetchAndRefineFeatures(a,a.length>n?n:e._candidates.length,s),this._checkCancelled(s),this._refineKnowns(e,t-i),e}return e}_fetchAndRefineFeatures(e,t,s){return null}_prepareFetchAndRefineSet(e){const t=[];for(let s=0;s<e.length;s++)this._isPhysicalFeature(e[s])&&t.push(e[s]);return t}_isPhysicalFeature(e){return null===this._parent||this._parent._isPhysicalFeature(e)}_refineKnowns(e,t){let s=0,n=null;const i=[];t=this._maxQueryRate();for(let a=0;a<e._candidates.length&&"GETPAGES"!==e._candidates[a];a++){let r=!1;const u=this._candidateIdTransform(e._candidates[a]);u!==e._candidates[a]&&(r=!0);const h=this._isInFeatureSet(u);if(h===shared/* IdState */.J6.InFeatureSet)!0===r?e._known.includes(u)||(e._known.push(u),s+=1):(e._known.push(e._candidates[a]),s+=1),null===n?n={start:a,end:a}:n.end===a-1?n.end=a:(i.push(n),n={start:a,end:a});else if(h===shared/* IdState */.J6.NotInFeatureSet)null===n?n={start:a,end:a}:n.end===a-1?n.end=a:(i.push(n),n={start:a,end:a}),s+=1;else if(h===shared/* IdState */.J6.Unknown&&(s+=1,!0===e._ordered))break;if(s>=t)break}null!==n&&i.push(n);for(let a=i.length-1;a>=0;a--)e._candidates.splice(i[a].start,i[a].end-i[a].start+1)}_refineIfParentKnown(e,t,s){const n=new IdSet/* default */.A([],[],e._ordered,null);return n._candidates=e._candidates.slice(0),this._parent._refineSetBlock(n,t,s)}_candidateIdTransform(e){return this._parent._candidateIdTransform(e)}_checkIfNeedToExpandKnownPage(e,t){if(null===e.pagesDefinition)return!1;let s=0;for(let n=e._lastFetchedIndex;n<e._known.length;n++){if("GETPAGES"===e._known[n])return!0;if(void 0===this._featureCache[e._known[n]]&&(s+=1,s>=t))break}return!1}_checkIfNeedToExpandCandidatePage(e,t){if(null===e.pagesDefinition)return!1;let s=0;for(let n=0;n<e._candidates.length;n++){if("GETPAGES"===e._candidates[n])return!0;if(s+=1,s>=t)break}return!1}async _expandPagedSet(e,n,i,a,r){if(null===this._parent)throw new errorsupport/* FeatureSetError */.dr(errorsupport/* FeatureSetErrorCodes */.D_.NotImplemented);return this._parent._expandPagedSet(e,n,i,a,r)}async _expandPagedSetFeatureSet(e,t,s,n,i){if(e._known.length>0&&"GETPAGES"===e._known[e._known.length-1]&&(n=1),0===n&&e._candidates.length>0&&"GETPAGES"===e._candidates[e._candidates.length-1]&&(n=2),0===n)return"finished";const a=await this._getPage(e,n,i);return s+a<t?this._expandPagedSet(e,t,s+a,0,i):"success"}async _getPage(e,t,s){const n=1===t?e._known:e._candidates;if(e.pagesDefinition.internal.set.length>e.pagesDefinition.resultOffset||!0===e.pagesDefinition.internal.fullyResolved){n.length=n.length-1;let t=0;for(let i=0;i<e.pagesDefinition.resultRecordCount&&!(e.pagesDefinition.resultOffset+i>=e.pagesDefinition.internal.set.length);i++)n[n.length]=e.pagesDefinition.internal.set[e.pagesDefinition.resultOffset+i],t++;e.pagesDefinition.resultOffset+=t;let s=!1;return!0===e.pagesDefinition.internal.fullyResolved&&e.pagesDefinition.internal.set.length<=e.pagesDefinition.resultOffset&&(s=!0),!1===s&&n.push("GETPAGES"),t}return await this._getPhysicalPage(e,t,s),this._getPage(e,t,s)}_getPhysicalPage(e,t,s){return null}_clonePageDefinition(e){return null===this._parent?null:this._parent._clonePageDefinition(e)}_first(e){return this.iterator(e).next()}first(e){return this._first(e)}async calculateStatistic(e,t,s,n){await this._ensureLoaded();let i=await this._stat(e,t,"",null,null,s,n);return!1===i.calculated&&(i=await this._manualStat(e,t,s,n)),i.result}async _manualStat(e,t,s,n){let i=null;switch(e.toLowerCase()){case"count":return i=await (0,stats/* count */.U9)(this,n),{calculated:!0,result:i};case"distinct":return i=await (0,stats/* distinct */.dM)(this,t,s,n),{calculated:!0,result:i};case"avg":case"mean":return i=await (0,stats/* mean */.i2)(this,t,n),{calculated:!0,result:i};case"stdev":return i=await (0,stats/* stdev */.b$)(this,t,n),{calculated:!0,result:i};case"variance":return i=await (0,stats/* variance */.GV)(this,t,n),{calculated:!0,result:i};case"sum":return i=await (0,stats/* sum */.cz)(this,t,n),{calculated:!0,result:i};case"min":return i=await (0,stats/* min */.jk)(this,t,n),{calculated:!0,result:i};case"max":return i=await (0,stats/* max */.T9)(this,t,n),{calculated:!0,result:i};default:return{calculated:!0,result:0}}}async _stat(e,t,s,n,i,a,r){const l=await this._parent._stat(e,t,s,n,i,a,r);return!1===l.calculated?null===i&&""===s&&null===n?this._manualStat(e,t,a,r):{calculated:!1}:l}_unionAllGeomSelf(e){const t=this.iterator(this._defaultTracker(e)),s=[];return new Promise(((e,n)=>{this._unionShapeInBatches(s,t,e,n)}))}_unionAllGeom(e){return new Promise(((t,s)=>{const n=this.iterator(this._defaultTracker(e)),i=[];this._unionShapeInBatches(i,n,t,s)}))}_unionShapeInBatches(e,t,s,n){t.next().then((i=>{try{null!==i&&null!==i.geometry&&e.push(i.geometry),e.length>30||null===i&&e.length>1?(0,geometryEngineAsync/* union */.KC)(e).then((a=>{try{null===i?s(a):(e=[a],this._unionShapeInBatches(e,t,s,n))}catch(r){n(r)}}),n):null===i?1===e.length?s(e[0]):s(null):this._unionShapeInBatches(e,t,s,n)}catch(a){n(a)}}),n)}iterator(e){return new FeatureSetIterator_e(this,e)}intersection(e,t=!1){return x._featuresetFunctions.intersection.bind(this)(e,t)}difference(e,t=!1,s=!0){return x._featuresetFunctions.difference.bind(this)(e,t,s)}symmetricDifference(e,t=!1,s=!0){return x._featuresetFunctions.symmetricDifference.bind(this)(e,t,s)}morphShape(e,t,s="unknown",n=null){return x._featuresetFunctions.morphShape.bind(this)(e,t,s,n)}morphShapeAndAttributes(e,t,s="unknown"){return x._featuresetFunctions.morphShapeAndAttributes.bind(this)(e,t,s)}union(e,t=!1){return x._featuresetFunctions.union.bind(this)(e,t)}intersects(e){return x._featuresetFunctions.intersects.bind(this)(e)}envelopeIntersects(e){return x._featuresetFunctions.envelopeIntersects.bind(this)(e)}contains(e){return x._featuresetFunctions.contains.bind(this)(e)}overlaps(e){return x._featuresetFunctions.overlaps.bind(this)(e)}relate(e,t){return x._featuresetFunctions.relate.bind(this)(e,t)}within(e){return x._featuresetFunctions.within.bind(this)(e)}touches(e){return x._featuresetFunctions.touches.bind(this)(e)}top(e){return x._featuresetFunctions.top.bind(this)(e)}crosses(e){return x._featuresetFunctions.crosses.bind(this)(e)}buffer(e,t,s,n=!0){return x._featuresetFunctions.buffer.bind(this)(e,t,s,n)}filter(e,t=null){return x._featuresetFunctions.filter.bind(this)(e,t)}orderBy(e){return x._featuresetFunctions.orderBy.bind(this)(e)}dissolve(e,t){return x._featuresetFunctions.dissolve.bind(this)(e,t)}groupby(e,t){return x._featuresetFunctions.groupby.bind(this)(e,t)}reduce(e,t=null,s){return new Promise(((n,i)=>{this._reduceImpl(this.iterator(this._defaultTracker(s)),e,t,0,n,i,0)}))}_reduceImpl(e,t,s,n,i,a,r){try{if(++r>1e3)return void setTimeout((()=>{r=0,this._reduceImpl(e,t,s,n,i,a,r)}));e.next().then((l=>{try{if(null===l)i(s);else{const u=t(s,l,n,this);(0,promiseUtils/* isPromiseLike */.$X)(u)?u.then((s=>{this._reduceImpl(e,t,s,n+1,i,a,r)}),a):this._reduceImpl(e,t,u,n+1,i,a,r)}}catch(u){a(u)}}),a)}catch(l){a(l)}}removeField(e){return x._featuresetFunctions.removeField.bind(this)(e)}addField(e,t,s=null){return x._featuresetFunctions.addField.bind(this)(e,t,s)}sumArea(e,t=!1,s){const n=(0,shared/* convertSquareUnitsToCode */.uf)(e);return this.reduce(((e,s)=>null===s.geometry?0:t?(0,geometryEngineAsync/* geodesicArea */.PW)(s.geometry,n).then((t=>e+t)):(0,geometryEngineAsync/* planarArea */._2)(s.geometry,n).then((t=>e+t))),0,s)}sumLength(e,t=!1,s){const n=(0,shared/* convertLinearUnitsToCode */.SQ)(e);return this.reduce(((e,s)=>null===s.geometry?0:t?(0,geometryEngineAsync/* geodesicLength */.mh)(s.geometry,n).then((t=>e+t)):(0,geometryEngineAsync/* planarLength */.Zu)(s.geometry,n).then((t=>e+t))),0,s)}_substituteVars(e,t){if(null!==t){const s={};for(const e in t)s[e.toLowerCase()]=t[e];e.parameters=s}}async distinct(e,t=1e3,s=null,n){await this.load();const i=WhereClause.WhereClause.create(e,this.getFieldsIndex(),this.dateFieldsTimeZoneDefaultUTC);return this._substituteVars(i,s),this.calculateStatistic("distinct",i,t,this._defaultTracker(n))}async min(e,t=null,s){await this.load();const n=WhereClause.WhereClause.create(e,this.getFieldsIndex(),this.dateFieldsTimeZoneDefaultUTC);return this._substituteVars(n,t),this.calculateStatistic("min",n,-1,this._defaultTracker(s))}async max(e,t=null,s){await this.load();const n=WhereClause.WhereClause.create(e,this.getFieldsIndex(),this.dateFieldsTimeZoneDefaultUTC);return this._substituteVars(n,t),this.calculateStatistic("max",n,-1,this._defaultTracker(s))}async avg(e,t=null,s){await this.load();const n=WhereClause.WhereClause.create(e,this.getFieldsIndex(),this.dateFieldsTimeZoneDefaultUTC);return this._substituteVars(n,t),this.calculateStatistic("avg",n,-1,this._defaultTracker(s))}async sum(e,t=null,s){await this.load();const n=WhereClause.WhereClause.create(e,this.getFieldsIndex(),this.dateFieldsTimeZoneDefaultUTC);return this._substituteVars(n,t),this.calculateStatistic("sum",n,-1,this._defaultTracker(s))}async stdev(e,t=null,s){await this.load();const n=WhereClause.WhereClause.create(e,this.getFieldsIndex(),this.dateFieldsTimeZoneDefaultUTC);return this._substituteVars(n,t),this.calculateStatistic("stdev",n,-1,this._defaultTracker(s))}async variance(e,t=null,s){await this.load();const n=WhereClause.WhereClause.create(e,this.getFieldsIndex(),this.dateFieldsTimeZoneDefaultUTC);return this._substituteVars(n,t),this.calculateStatistic("variance",n,-1,this._defaultTracker(s))}async count(e){return await this.load(),this.calculateStatistic("count",WhereClause.WhereClause.create("1",this.getFieldsIndex(),this.dateFieldsTimeZoneDefaultUTC),-1,this._defaultTracker(e))}_defaultTracker(e){return e??{aborted:!1}}forEach(e,t){return new Promise(((s,n)=>{this._forEachImpl(this.iterator(this._defaultTracker(t)),e,this,s,n,0)}))}_forEachImpl(e,t,s,n,i,a){try{if(++a>1e3)return void setTimeout((()=>{a=0,this._forEachImpl(e,t,s,n,i,a)}),0);e.next().then((r=>{try{if(null===r)n(s);else{const l=t(r);null==l?this._forEachImpl(e,t,s,n,i,a):(0,promiseUtils/* isPromiseLike */.$X)(l)?l.then((()=>{try{this._forEachImpl(e,t,s,n,i,a)}catch(r){i(r)}}),i):this._forEachImpl(e,t,s,n,i,a)}}catch(l){i(l)}}),i)}catch(r){i(r)}}convertToJSON(e){const t={layerDefinition:{geometryType:this.geometryType,fields:[]},featureSet:{features:[],geometryType:this.geometryType}};for(let s=0;s<this.fields.length;s++)t.layerDefinition.fields.push((0,shared/* esriFieldToJson */.nE)(this.fields[s]));return this.reduce(((e,s)=>{const n={geometry:s.geometry?.toJSON(),attributes:{}};for(const t in s.attributes)n.attributes[t]=s.attributes[t];return t.featureSet.features.push(n),1}),0,e).then((()=>t))}castToText(e=!1){return"object, FeatureSet"}queryAttachments(e,t,s,n,i){return this._parent.queryAttachments(e,t,s,n,i)}serviceUrl(){return this._parent.serviceUrl()}subtypes(){return this.typeIdField?{subtypeField:this.typeIdField,subtypes:this.types?this.types.map((e=>({name:e.name,code:e.id}))):[]}:null}relationshipMetaData(){return this._parent.relationshipMetaData()}get gdbVersion(){return this._parent?this._parent.gdbVersion:""}schema(){const e=[];for(const t of this.fields)e.push((0,shared/* esriFieldToJson */.nE)(t));return{objectIdField:this.objectIdField,globalIdField:this.globalIdField,geometryType:void 0===shared/* layerGeometryEsriRestConstants */.yT[this.geometryType]?"esriGeometryNull":shared/* layerGeometryEsriRestConstants */.yT[this.geometryType],fields:e}}async convertToText(e,t){if("schema"===e)return await this._ensureLoaded(),JSON.stringify(this.schema());if("featureset"===e){await this._ensureLoaded();const e=[];await this.reduce(((t,s)=>{const n={geometry:s.geometry?s.geometry.toJSON():null,attributes:s.attributes};return null!==n.geometry&&n.geometry.spatialReference&&delete n.geometry.spatialReference,e.push(n),1}),0,t);const s=this.schema();return s.features=e,s.spatialReference=this.spatialReference.toJSON(),JSON.stringify(s)}return this.castToText()}getFeatureByObjectId(e,t){return this._parent.getFeatureByObjectId(e,t)}getOwningSystemUrl(){return this._parent.getOwningSystemUrl()}getIdentityUser(){return this._parent.getIdentityUser()}getRootFeatureSet(){return null!==this._parent?this._parent.getRootFeatureSet():this}getDataSourceFeatureSet(){return null!==this._parent?this._parent.getDataSourceFeatureSet():this}castAsJson(e=null){return"keeptype"===e?.featureset?this:"none"===e?.featureset?null:{type:"FeatureSet"}}async castAsJsonAsync(e=null,t=null){if("keeptype"===t?.featureset)return this;if("schema"===t?.featureset)return await this._ensureLoaded(),JSON.parse(JSON.stringify(this.schema()));if("none"===t?.featureset)return null;await this._ensureLoaded();const s=[];await this.reduce(((e,n)=>{const i={geometry:n.geometry?!0===t?.keepGeometryType?n.geometry:n.geometry.toJSON():null,attributes:n.attributes};return null!==i.geometry&&i.geometry.spatialReference&&!0!==t?.keepGeometryType&&delete i.geometry.spatialReference,s.push(i),1}),0,e);const n=this.schema();return n.features=s,n.spatialReference=!0===t?.keepGeometryType?this.spatialReference:this.spatialReference?.toJSON(),n}fieldTimeZone(e){return this.getFieldsIndex().getTimeZone(e)}get preferredTimeZone(){return this._parent?.preferredTimeZone??null}get dateFieldsTimeZone(){return this._parent?.dateFieldsTimeZone??null}get dateFieldsTimeZoneDefaultUTC(){if(this.datesInUnknownTimezone)return"unknown";const e=this.dateFieldsTimeZone??"UTC";return""===e?"UTC":e}get datesInUnknownTimezone(){return this._parent.datesInUnknownTimezone}get editFieldsInfo(){return this._parent?.editFieldsInfo??null}get timeInfo(){return this._parent?.timeInfo??null}set featureSetInfo(e){this.fsetInfo=e}async getFeatureSetInfo(){return this.fsetInfo??await(this._parent?.getFeatureSetInfo())??null}}x._featuresetFunctions={};


/***/ }),

/***/ 22772:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class t{constructor(t,s,e,i){this._lastFetchedIndex=0,this._ordered=!1,this.pagesDefinition=null,this._candidates=t,this._known=s,this._ordered=e,this.pagesDefinition=i}}


/***/ }),

/***/ 20520:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function t(t,e){return t===e?0:null===t?-1:null===e?1:t<e?-1:1}class e{constructor(t){const e=t.split(",");this._fields=[],this._directions=[];for(let s=0;s<e.length;s++){const t=e[s].match(/\S+/g);this._fields.push(t[0]),2===t.length?"asc"===t[1].toLowerCase()?this._directions.push(1):this._directions.push(0):this._directions.push(1)}}constructClause(){let t="";for(let e=0;e<this._fields.length;e++)0!==e&&(t+=","),t+=this._fields[e],1===this._directions[e]?t+=" ASC":t+=" DESC";return t}order(e){e.sort(((e,s)=>{for(let i=0;i<this._fields.length;i++){const r=this.featureValue(e.feature,this._fields[i],i),l=this.featureValue(s.feature,this._fields[i],i);let o=0;if(o=1===this._directions[i]?t(r,l):-1*t(r,l),0!==o)return o}return 0}))}scanForField(t){for(let e=0;e<this._fields.length;e++)if(this._fields[e].toLowerCase().trim()===t.toLowerCase().trim())return!0;return!1}replaceFields(t){let s="";for(let e=0;e<this._fields.length;e++){0!==e&&(s+=",");let i=this._fields[e];for(const e of t)if(i.toLowerCase()===e.field.toLowerCase()){i=e.newfield;break}s+=i,1===this._directions[e]?s+=" ASC":s+=" DESC"}return new e(s)}featureValue(t,e,s){const i=t.attributes[e];if(void 0!==i)return i;for(const r in t.attributes)if(e.toLowerCase()===r.toLowerCase())return this._fields[s]=r,t.attributes[r];return null}}


/***/ }),

/***/ 58961:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ a)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class a{constructor(){this._databaseTypeMetaData={},this._layerInfo={}}clearDatabaseType(a){void 0===this._databaseTypeMetaData[a]&&delete this._databaseTypeMetaData[a]}getDatabaseType(a){return"MUSTBESET"===a||void 0===this._databaseTypeMetaData[a]?null:this._databaseTypeMetaData[a]}setDatabaseType(a,e){this._databaseTypeMetaData[a]=e}getLayerInfo(a){return void 0===this._layerInfo[a]?null:this._layerInfo[a]}setLayerInfo(a,e){this._layerInfo[a]=e}clearLayerInfo(a){void 0!==this._layerInfo[a]&&delete this._layerInfo[a]}}a.applicationCache=null;


/***/ }),

/***/ 80778:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D_: () => (/* binding */ r),
/* harmony export */   L8: () => (/* binding */ n),
/* harmony export */   Z7: () => (/* binding */ t),
/* harmony export */   dr: () => (/* binding */ s)
/* harmony export */ });
/* unused harmony exports FeatureSetErrorMessages, SqlErrorMessages */
/* harmony import */ var _core_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96274);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var t;!function(e){e.InvalidFunctionParameters="InvalidFunctionParameters",e.InvalidValueForAggregateFunction="InvalidValueForAggregateFunction",e.UnsupportedSqlFunction="UnsupportedSqlFunction",e.UnsupportedOperator="UnsupportedOperator",e.UnsupportedSyntax="UnsupportedSyntax",e.UnsupportedIsRhs="UnsupportedIsRhs",e.UnsupportedIsLhs="UnsupportedIsLhs",e.InvalidDataType="InvalidDataType",e.CannotCastValue="CannotCastValue",e.FunctionNotRecognized="FunctionNotRecognized",e.InvalidTime="InvalidTime",e.InvalidParameterCount="InvalidParameterCount",e.InvalidTimeStamp="InvalidTimeStamp",e.InvalidDate="InvalidDate",e.InvalidOperator="InvalidOperator",e.IllegalInterval="IllegalInterval",e.YearMonthIntervals="YearMonthIntervals",e.PrimarySecondaryQualifiers="PrimarySecondaryQualifiers",e.MissingStatisticParameters="MissingStatisticParameters"}(t||(t={}));const a={[t.InvalidValueForAggregateFunction]:"Invalid value used in aggregate function",[t.MissingStatisticParameters]:"Statistic does not have 1 or 0 Parameters",[t.InvalidFunctionParameters]:"Invalid parameters for call to {function}",[t.UnsupportedIsLhs]:"Unsupported left hand expression in is statement",[t.UnsupportedIsRhs]:"Unsupported right hand expression in is statement",[t.UnsupportedOperator]:"Unsupported operator - {operator}",[t.UnsupportedSyntax]:"Unsupported syntax - {node}",[t.UnsupportedSqlFunction]:"Sql function not found = {function}",[t.InvalidDataType]:"Invalid sql data type",[t.InvalidDate]:"Invalid date encountered",[t.InvalidOperator]:"Invalid operator encountered",[t.InvalidTime]:"Invalid time encountered",[t.IllegalInterval]:"Illegal interval",[t.FunctionNotRecognized]:"Function not recognized",[t.InvalidTimeStamp]:"Invalid timestamp encountered",[t.InvalidParameterCount]:"Invalid parameter count for call to {name}",[t.PrimarySecondaryQualifiers]:"Primary and Secondary SqlInterval qualifiers not supported",[t.YearMonthIntervals]:"Year-Month Intervals not supported",[t.CannotCastValue]:"Cannot cast value to the required data type"};class n extends Error{constructor(t,r){super((0,_core_string_js__WEBPACK_IMPORTED_MODULE_0__/* .replace */ .HC)(a[t],r)),this.declaredRootClass="esri.arcade.featureset.support.sqlerror",Error.captureStackTrace&&Error.captureStackTrace(this,n)}}var r;!function(e){e.NeverReach="NeverReach",e.NotImplemented="NotImplemented",e.Cancelled="Cancelled",e.InvalidStatResponse="InvalidStatResponse",e.InvalidRequest="InvalidRequest",e.RequestFailed="RequestFailed",e.MissingFeatures="MissingFeatures",e.AggregationFieldNotFound="AggregationFieldNotFound",e.DataElementsNotFound="DataElementsNotFound"}(r||(r={}));const o={[r.Cancelled]:"Cancelled",[r.InvalidStatResponse]:"Invalid statistics response from service",[r.InvalidRequest]:"Invalid request",[r.RequestFailed]:"Request failed - {reason}",[r.MissingFeatures]:"Missing features",[r.AggregationFieldNotFound]:"Aggregation field not found",[r.DataElementsNotFound]:"Data elements not found on service",[r.NeverReach]:"Encountered unreachable logic",[r.NotImplemented]:"Not implemented"};class s extends Error{constructor(t,a){super((0,_core_string_js__WEBPACK_IMPORTED_MODULE_0__/* .replace */ .HC)(o[t],a)),this.declaredRootClass="esri.arcade.featureset.support.featureseterror",Error.captureStackTrace&&Error.captureStackTrace(this,s)}}


/***/ }),

/***/ 20182:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C6: () => (/* binding */ L),
/* harmony export */   DA: () => (/* binding */ D),
/* harmony export */   F1: () => (/* binding */ E),
/* harmony export */   F6: () => (/* binding */ y),
/* harmony export */   IY: () => (/* binding */ I),
/* harmony export */   Ju: () => (/* binding */ v),
/* harmony export */   Mi: () => (/* binding */ p),
/* harmony export */   Nf: () => (/* binding */ S),
/* harmony export */   R8: () => (/* binding */ T),
/* harmony export */   YY: () => (/* binding */ f),
/* harmony export */   bD: () => (/* binding */ m),
/* harmony export */   bm: () => (/* binding */ w),
/* harmony export */   kg: () => (/* binding */ g),
/* harmony export */   oj: () => (/* binding */ F)
/* harmony export */ });
/* harmony import */ var _ArcadeDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98918);
/* harmony import */ var _errorsupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80778);
/* harmony import */ var _shared_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44930);
/* harmony import */ var _core_sql_TimeOnly_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40845);
/* harmony import */ var _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1615);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34495);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function f(e,r){return h(e?.parseTree,r,e?.parameters)}function p(e,r,t){return h(e,r,t)}function m(e,r,t,s){return _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_4__.WhereClause.create(h(e.parseTree,_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.Standardised,e.parameters,r,t),s,e.timeZone)}function g(e,r,t="AND"){return _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_4__.WhereClause.create("(("+f(e,_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.Standardised)+")"+t+"("+f(r,_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.Standardised)+"))",e.fieldsIndex,e.timeZone)}function h(e,l,u,d=null,f=null){let p,m,g,I;switch(e.type){case"interval":return F(h(e.value,l,u,d,f),e.qualifier,e.op);case"case-expression":{let r=" CASE ";"simple"===e.format&&(r+=h(e.operand,l,u,d,f));for(let t=0;t<e.clauses.length;t++)r+=" WHEN "+h(e.clauses[t].operand,l,u,d,f)+" THEN "+h(e.clauses[t].value,l,u,d,f);return null!==e.else&&(r+=" ELSE "+h(e.else,l,u,d,f)),r+=" END ",r}case"parameter":{const r=u[e.value.toLowerCase()];if("string"==typeof r){return"'"+u[e.value.toLowerCase()].toString().replaceAll("'","''")+"'"}if((0,_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .isDate */ .$P)(r))return w(r,l);if((0,_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .isLuxonDate */ .Lk)(r))return w(r,l);if((0,_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .isArcadeTime */ .eg)(r))return E(r,l);if((0,_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .isArcadeDate */ .rX)(r))return T(r,l);if((0,_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .isArcadeDateOnly */ .f0)(r))return S(r,l);if(r instanceof Array){const e=[];for(let t=0;t<r.length;t++)"string"==typeof r[t]?e.push("'"+r[t].toString().replaceAll("'","''")+"'"):(0,_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .isDate */ .$P)(r[t])||(0,_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .isLuxonDate */ .Lk)(r[t])?e.push(w(r[t],l)):(0,_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .isArcadeTime */ .eg)(r[t])?e.push(E(r[t],l)):(0,_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .isArcadeDate */ .rX)(r[t])?e.push(T(r[t],l)):(0,_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .isArcadeDateOnly */ .f0)(r[t])?e.push(S(r[t],l)):e.push(r[t].toString());return e}return r.toString()}case"expression-list":m=[];for(const r of e.value)m.push(h(r,l,u,d,f));return m;case"unary-expression":return" ( NOT "+h(e.expr,l,u,d,f)+" ) ";case"binary-expression":switch(e.operator){case"AND":return" ("+h(e.left,l,u,d,f)+" AND "+h(e.right,l,u,d,f)+") ";case"OR":return" ("+h(e.left,l,u,d,f)+" OR "+h(e.right,l,u,d,f)+") ";case"IS":if("null"!==e.right.type)throw new _errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlError */ .L8(_errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlErrorCodes */ .Z7.UnsupportedIsRhs);return" ("+h(e.left,l,u,d,f)+" IS NULL )";case"ISNOT":if("null"!==e.right.type)throw new _errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlError */ .L8(_errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlErrorCodes */ .Z7.UnsupportedIsRhs);return" ("+h(e.left,l,u,d,f)+" IS NOT NULL )";case"IN":return p=[],"expression-list"===e.right.type?(p=h(e.right,l,u,d,f)," ("+h(e.left,l,u,d,f)+" IN ("+p.join(",")+")) "):(I=h(e.right,l,u,d,f),I instanceof Array?" ("+h(e.left,l,u,d,f)+" IN ("+I.join(",")+")) ":" ("+h(e.left,l,u,d,f)+" IN ("+I+")) ");case"NOT IN":return p=[],"expression-list"===e.right.type?(p=h(e.right,l,u,d,f)," ("+h(e.left,l,u,d,f)+" NOT IN ("+p.join(",")+")) "):(I=h(e.right,l,u,d,f),I instanceof Array?" ("+h(e.left,l,u,d,f)+" NOT IN ("+I.join(",")+")) ":" ("+h(e.left,l,u,d,f)+" NOT IN ("+I+")) ");case"BETWEEN":return g=h(e.right,l,u,d,f)," ("+h(e.left,l,u,d,f)+" BETWEEN "+g[0]+" AND "+g[1]+" ) ";case"NOTBETWEEN":return g=h(e.right,l,u,d,f)," ("+h(e.left,l,u,d,f)+" NOT BETWEEN "+g[0]+" AND "+g[1]+" ) ";case"LIKE":return""!==e.escape?" ("+h(e.left,l,u,d,f)+" LIKE "+h(e.right,l,u,d,f)+" ESCAPE '"+e.escape+"') ":" ("+h(e.left,l,u,d,f)+" LIKE "+h(e.right,l,u,d,f)+") ";case"NOT LIKE":return""!==e.escape?" ("+h(e.left,l,u,d,f)+" NOT LIKE "+h(e.right,l,u,d,f)+" ESCAPE '"+e.escape+"') ":" ("+h(e.left,l,u,d,f)+" NOT LIKE "+h(e.right,l,u,d,f)+") ";case"<>":case"<":case">":case">=":case"<=":case"=":case"*":case"-":case"+":case"/":return" ("+h(e.left,l,u,d,f)+" "+e.operator+" "+h(e.right,l,u,d,f)+") ";case"||":return" ("+h(e.left,l,u,d,f)+" "+(l===_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.SqlServer?"+":e.operator)+" "+h(e.right,l,u,d,f)+") "}throw new _errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlError */ .L8(_errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlErrorCodes */ .Z7.UnsupportedOperator,{operator:e.operator});case"null":return"null";case"boolean":return!0===e.value?"1":"0";case"string":return"'"+e.value.toString().replaceAll("'","''")+"'";case"timestamp":return`timestamp '${e.value}'`;case"date":return`date '${e.value}'`;case"time":return`time '${e.value}'`;case"number":return e.value.toString();case"current-time":return L("date"===e.mode,l);case"column-reference":return d?d.toLowerCase()===e.column.toLowerCase()?"("+f+")":!0===e.delimited?`"${e.column.split('"').join('""')}"`:e.column:e.column;case"data-type":return e.value;case"function":{const r=h(e.args,l,u,d,f);return y(e.name,r,l)}}throw new _errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlError */ .L8(_errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlErrorCodes */ .Z7.UnsupportedSyntax,{node:e.type})}function y(e,s,n){switch(e.toLowerCase().trim()){case"cos":case"sin":case"tan":case"cosh":case"tanh":case"sinh":case"acos":case"asin":case"atan":case"floor":case"log10":case"log":case"abs":if(1!==s.length)throw new _errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlError */ .L8(_errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlErrorCodes */ .Z7.InvalidFunctionParameters,{function:e.toLowerCase().trim()});return`${e.toUpperCase().trim()}(${s[0]})`;case"ceiling":case"ceil":if(1!==s.length)throw new _errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlError */ .L8(_errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlErrorCodes */ .Z7.InvalidFunctionParameters,{function:"ceiling"});switch(n){case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.Standardised:case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.StandardisedNoInterval:}return"CEILING("+s[0]+")";case"mod":case"power":case"nullif":if(2!==s.length)throw new _errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlError */ .L8(_errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlErrorCodes */ .Z7.InvalidFunctionParameters,{function:e.toLowerCase().trim()});return`${e.toUpperCase().trim()}(${s[0]},${s[1]})`;case"round":if(2===s.length)return"ROUND("+s[0]+","+s[1]+")";if(1===s.length)return"ROUND("+s[0]+")";throw new _errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlError */ .L8(_errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlErrorCodes */ .Z7.InvalidFunctionParameters,{function:"round"});case"truncate":if(s.length<1||s.length>2)throw new _errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlError */ .L8(_errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlErrorCodes */ .Z7.InvalidFunctionParameters,{function:"truncate"});return n===_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.SqlServer?"ROUND("+s[0]+(1===s.length?"0":","+s[1])+",1)":"TRUNCATE("+s[0]+(1===s.length?")":","+s[1]+")");case"char_length":case"len":if(1!==s.length)throw new _errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlError */ .L8(_errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlErrorCodes */ .Z7.InvalidFunctionParameters,{function:"char_length"});switch(n){case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.SqlServer:return"LEN("+s[0]+")";case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.Oracle:return"LENGTH("+s[0]+")";default:return"CHAR_LENGTH("+s[0]+")"}case"coalesce":case"concat":{if(s.length<1)throw new _errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlError */ .L8(_errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlErrorCodes */ .Z7.InvalidFunctionParameters,{function:e.toLowerCase()});let a=e.toUpperCase().trim()+"(";for(let e=0;e<s.length;e++)0!==e&&(a+=","),a+=s[e];return a+=")",a}case"lower":case"lcase":if(1!==s.length)throw new _errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlError */ .L8(_errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlErrorCodes */ .Z7.InvalidFunctionParameters,{function:"lower"});return"LOWER("+s[0]+")";case"upper":case"ucase":if(1!==s.length)throw new _errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlError */ .L8(_errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlErrorCodes */ .Z7.InvalidFunctionParameters,{function:"upper"});return"UPPER("+s[0]+")";case"substring":{let e="";switch(n){case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.Oracle:return e="SUBSTR("+s[0]+","+s[1],3===s.length&&(e+=","+s[2]),e+=")",e;case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.SqlServer:return e=3===s.length?"SUBSTRING("+s[0]+","+s[1]+","+s[2]+")":"SUBSTRING("+s[0]+",  "+s[1]+", LEN("+s[0]+") - "+s[1]+")",e;default:return e="SUBSTRING("+s[0]+" FROM "+s[1],3===s.length&&(e+=" FOR "+s[2]),e+=")",e}}case"extract":return"EXTRACT("+s[0].replaceAll("'","")+" FROM "+s[1]+")";case"cast":{let e="";switch(n){case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.Oracle:switch(s[1].type){case"date":e="DATE";break;case"float":e="DOUBLE";break;case"integer":e="INTEGER";break;case"real":e="REAL";break;case"smallint":e="SMALLINT";break;case"timestamp":e="TIMESTAMP";break;case"varchar":e="VARCHAR("+s[1].size.toString()+")"}return`CAST(${s[0]} AS ${e})`;case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.Postgres:switch(s[1].type){case"date":e="DATE";break;case"float":e="DOUBLE PRECISION";break;case"integer":e="INT";break;case"real":e="REAL";break;case"smallint":e="SMALLINT";break;case"timestamp":e="TIMESTAMP";break;case"varchar":e="VARCHAR("+s[1].size.toString()+")"}return`CAST(${s[0]} AS ${e})`;case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.SqlServer:switch(s[1].type){case"date":e="DATE";break;case"float":e="FLOAT";break;case"integer":e="INT";break;case"real":e="REAL";break;case"smallint":e="SMALLINT";break;case"timestamp":e="DATETIME";break;case"varchar":e="VARCHAR("+s[1].size.toString()+")"}return`CAST(${s[0]} AS ${e})`;default:switch(s[1].type){case"date":e="DATE";break;case"float":e="FLOAT";break;case"integer":e="INTEGER";break;case"real":e="REAL";break;case"smallint":e="SMALLINT";break;case"timestamp":e="TIMESTAMP";break;case"varchar":e="VARCHAR("+s[1].size.toString()+")"}return`CAST(${s[0]} AS ${e})`}}}throw new _errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlError */ .L8(_errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlErrorCodes */ .Z7.InvalidFunctionParameters,{function:e})}function T(e,r){const t=e.toDateTime(),s=0===t.hour&&0===t.minute&&0===t.second&&0===t.millisecond;switch(r){case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.FILEGDB:case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.Standardised:case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.StandardisedNoInterval:return s?`date '${t.toFormat("yyyy-LL-dd")}'`:`timestamp '${t.toFormat("yyyy-LL-dd HH:mm:ss")}'`;case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.Oracle:return s?`TO_DATE('${t.toFormat("yyyy-LL-dd")}','YYYY-MM-DD')`:`TO_DATE('${t.toFormat("yyyy-LL-dd HH:mm:ss")}','YYYY-MM-DD HH24:MI:SS')`;case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.SqlServer:return`'${t.toFormat(s?"yyyy-LL-dd":"yyyy-LL-dd HH:mm:ss")}'`;case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.PGDB:return`#${t.toFormat(s?"LL-dd-yyyy":"LL-dd-yyyy HH:mm:ss")}#`;case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.Postgres:return`TIMESTAMP '${t.toFormat(s?"yyyy-LL-dd":"yyyy-LL-dd HH:mm:ss")}'`;default:return`timestamp '${t.toFormat("yyyy-LL-dd HH:mm:ss")}'`}}function S(e,r){switch(r){case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.FILEGDB:case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.Standardised:case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.StandardisedNoInterval:return e.toSQLWithKeyword();case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.Oracle:return`TO_DATE('${e.toFormat("Y-MM-DD")}'`;case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.SqlServer:return`'${e.toFormat("Y-MM-DD")}'`;case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.PGDB:return`#${e.toFormat("Y-MM-DD")}#`;case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.Postgres:return`TIMESTAMP '${e.toFormat("Y-MM-DD")}'`;default:return e.toSQLWithKeyword()}}function E(e,r){switch(e instanceof _core_sql_TimeOnly_js__WEBPACK_IMPORTED_MODULE_3__/* .TimeOnly */ .k&&(e=e.toStorageString()),r){case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.Oracle:return`TO_DATE('${e}', 'HH24:MI:SS')`;case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.SqlServer:return`'${e}'`;case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.FILEGDB:case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.Standardised:case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.StandardisedNoInterval:case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.Postgres:default:return`time '${e}'`}}function w(r,t){return T(_ArcadeDate_js__WEBPACK_IMPORTED_MODULE_0__/* .ArcadeDate */ .lY.dateTimeToArcadeDate((0,_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .isLuxonDate */ .Lk)(r)?r:luxon__WEBPACK_IMPORTED_MODULE_5__/* .DateTime */ .c9.fromJSDate(r)),t)}function L(e,r){switch(r){case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.FILEGDB:case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.Standardised:case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.StandardisedNoInterval:case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.Oracle:return e?"CURRENT_DATE":"CURRENT_TIMESTAMP";case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.SqlServer:return e?"CAST(GETDATE() AS DATE)":"GETDATE()";case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.PGDB:case _shared_js__WEBPACK_IMPORTED_MODULE_2__/* .FeatureServiceDatabaseType */ .zl.Postgres:default:return e?"CURRENT_DATE":"CURRENT_TIMESTAMP"}}function I(e,r,t={}){const a={},s={},n={esriFieldTypeSmallInteger:"integer",esriFieldTypeInteger:"integer",esriFieldTypeBigInteger:"integer",esriFieldTypeSingle:"double",esriFieldTypeDouble:"double",esriFieldTypeString:"string",esriFieldTypeTimeOnly:"time-only",esriFieldTypeDateOnly:"date-only",esriFieldTypeTimestampOffset:"timestamp-offset",esriFieldTypeDate:"date",esriFieldTypeOID:"integer",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"guid",oid:"integer",long:"integer","small-integer":"integer",integer:"integer","big-integer":"integer",single:"double","time-only":"time-only","date-only":"date-only","timestamp-offset":"timestemp-offset",double:"double",date:"date",guid:"guid","global-id":"guid",string:"string"};for(const c of r){const e=c.type?n[c.type]:void 0;a[c.name.toLowerCase()]=void 0===e?"":e}for(const c in t){const e=n[t[c]];s[c.toLowerCase()]=void 0===e?"":e}switch(A(a,e.parseTree,e.parameters,s)){case"double":return"double";case"integer":return"integer";case"date":return"date";case"date-only":return"date-only";case"time-only":return"time-only";case"timestamp-offset":return"timestamp-offset";case"string":return"string";case"global-id":case"guid":return"guid"}return""}function A(e,a,n,l){let u;switch(a.type){case"interval":return"integer";case"case-expression":{const r=[];if("simple"===a.format){for(let t=0;t<a.clauses.length;t++)r.push(A(e,a.clauses[t].value,n,l));null!==a.else&&r.push(A(e,a.else,n,l))}else{for(let t=0;t<a.clauses.length;t++)r.push(A(e,a.else,n,l));null!==a.else&&r.push(A(e,a.else,n,l))}return b(r)}case"parameter":{const e=l[a.value.toLowerCase()];if(void 0===e&&n){const e=n[a.value.toLowerCase()];if(void 0===e)return"";if(null===e)return"";if("string"==typeof e||e instanceof String)return"string";if("boolean"==typeof e)return"boolean";if((0,_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .isDate */ .$P)(e))return"date";if((0,_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .isArcadeDate */ .rX)(e))return"date";if((0,_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .isArcadeDateOnly */ .f0)(e))return"date-only";if((0,_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .isArcadeTime */ .eg)(e))return"time-only";if("number"==typeof e)return e%1==0?"integer":"double"}return void 0===e?"":e}case"expression-list":{const r=[];for(const t of a.value)r.push(A(e,t,n,l));return r}case"unary-expression":return"boolean";case"binary-expression":switch(a.operator){case"AND":case"OR":case"IN":case"NOT IN":case"BETWEEN":case"NOTBETWEEN":case"LIKE":case"NOT LIKE":case"<>":case"<":case">":case">=":case"<=":case"=":return"boolean";case"IS":case"ISNOT":if("null"!==a.right.type)throw new _errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlError */ .L8(_errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlErrorCodes */ .Z7.UnsupportedIsRhs);return"boolean";case"*":case"-":case"+":case"/":return b([A(e,a.left,n,l),A(e,a.right,n,l)]);case"||":return"string";default:throw new _errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlError */ .L8(_errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlErrorCodes */ .Z7.UnsupportedOperator,{operator:a.operator})}case"null":return"";case"boolean":return"boolean";case"string":return"string";case"number":return null===a.value?"":a.value%1==0?"integer":"double";case"date":return"date";case"timestamp":return a.withtimezone?"timestamp-offset":"date";case"time":return"time-only";case"current-time":return"date";case"column-reference":{const r=e[a.column.toLowerCase()];return void 0===r?"":r}case"function":switch(a.name.toLowerCase()){case"cast":switch(a.args?.value[1]?.value.type??""){case"integer":case"smallint":return"integer";case"real":case"float":return"double";case"date":case"timestamp":return!0===a.args?.value[1]?.value?.withtimezone?"timestamp-offset":"date";case"time":return"time-only";case"varchar":return"string";default:return""}case"position":case"extract":case"char_length":case"mod":return"integer";case"round":if(u=A(e,a.args,n,l),u instanceof Array){if(u.length<=0)return"double";u=u[0]}return u;case"sign":return"integer";case"ceiling":case"floor":case"abs":return u=A(e,a.args,n,l),u instanceof Array&&(u=b(u)),"integer"===u||"double"===u?u:"double";case"area":case"length":case"log":case"log10":case"sin":case"cos":case"tan":case"asin":case"acos":case"atan":case"cosh":case"sinh":case"tanh":case"power":return"double";case"substring":case"trim":case"concat":case"lower":case"upper":return"string";case"truncate":return"double";case"nullif":case"coalesce":return u=A(e,a.args,n,l),u instanceof Array?u.length>0?u[0]:"":u}return""}throw new _errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlError */ .L8(_errorsupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlErrorCodes */ .Z7.UnsupportedSyntax,{node:a.type})}const N={boolean:1,string:2,integer:3,double:4,date:5};function b(e){if(e){let r="";for(const t of e)""!==t&&(r=""===r||N[r]<N[t]?t:r);return r}return""}function v(e,r){return O(e.parseTree,r)}function D(e){return"column-reference"===e?.parseTree.type}function O(e,r){if(null==e)return!1;switch(e.type){case"when-clause":return O(e.operand,r)||O(e.value,r);case"case-expression":for(const t of e.clauses)if(O(t,r))return!0;return!("simple"!==e.format||!O(e.operand,r))||!(null===e.else||!O(e.else,r));case"parameter":case"null":case"boolean":case"date":case"timestamp":case"time":case"string":case"number":return!1;case"expression-list":for(const t of e.value)if(O(t,r))return!0;return!1;case"unary-expression":return O(e.expr,r);case"binary-expression":return O(e.left,r)||O(e.right,r);case"column-reference":return r.toLowerCase()===e.column.toLowerCase();case"function":return O(e.args,r)}return!1}function R(e){let r="";return r+=e.period.toUpperCase(),r}function F(e,r,t){let a="";return a="interval-period"===r.type?R(r):R(r.start)+" TO "+R(r.end),"INTERVAL "+t+" "+e+" "+a}


/***/ }),

/***/ 88620:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dp: () => (/* binding */ w),
/* harmony export */   GV: () => (/* binding */ x),
/* harmony export */   T9: () => (/* binding */ y),
/* harmony export */   U9: () => (/* binding */ q),
/* harmony export */   b$: () => (/* binding */ T),
/* harmony export */   cz: () => (/* binding */ k),
/* harmony export */   dM: () => (/* binding */ S),
/* harmony export */   i2: () => (/* binding */ M),
/* harmony export */   jk: () => (/* binding */ v),
/* harmony export */   tQ: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _errorsupport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80778);
/* harmony import */ var _shared_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44930);
/* harmony import */ var _sqlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20182);
/* harmony import */ var _core_sql_DateOnly_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45132);
/* harmony import */ var _core_sql_SqlTimestampOffset_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64473);
/* harmony import */ var _core_sql_TimeOnly_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40845);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function u(t){return t=+t,isFinite(t)?t-t%1||(t<0?-0:0===t?t:0):t}function f(t){let n=0;for(let e=0;e<t.length;e++)n+=t[e];return n/t.length}function h(t){const n=f(t);let e=0;for(let r=0;r<t.length;r++)e+=(n-t[r])**2;return e/t.length}function m(t){const n=f(t);let e=0;for(let r=0;r<t.length;r++)e+=(n-t[r])**2;return e/(t.length-1)}function g(t){let n=0;for(let e=0;e<t.length;e++)n+=t[e];return n}function p(t,n){const c=[],s={},i=[];for(let o=0;o<t.length;o++){if(void 0!==t[o]&&null!==t[o]){const n=t[o];if((0,_shared_js__WEBPACK_IMPORTED_MODULE_1__/* .isNumber */ .Et)(n)||(0,_shared_js__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .Kg)(n))void 0===s[n]&&(c.push(n),s[n]=1);else{let t=!1;for(let e=0;e<i.length;e++)!0===(0,_shared_js__WEBPACK_IMPORTED_MODULE_1__/* .equalityTest */ .Tf)(i[e],n)&&(t=!0);!1===t&&(i.push(n),c.push(n))}}if(c.length>=n&&-1!==n)return c}return c}function w(t){switch(t.toLowerCase()){case"distinct":return"distinct";case"avg":case"mean":return"avg";case"min":return"min";case"sum":return"sum";case"max":return"max";case"stdev":case"stddev":return"stddev";case"var":case"variance":return"var";case"count":return"count"}return""}function d(t,n,e=1e3){switch(t.toLowerCase()){case"distinct":return p(n,e);case"avg":case"mean":return f(n);case"min":return Math.min.apply(Math,n);case"sum":return g(n);case"max":return Math.max.apply(Math,n);case"stdev":case"stddev":return Math.sqrt(h(n));case"var":case"variance":return h(n);case"count":return n.length}return 0}async function v(t,n,e){const r=await O(t,n,e,!0);return 0===r.length?null:Math.min.apply(Math,r)}async function y(t,n,e){const r=await O(t,n,e,!0);return 0===r.length?null:Math.max.apply(Math,r)}async function M(t,n,e){let r="";n&&!(0,_sqlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isSingleField */ .DA)(n)&&(r=(0,_sqlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .predictType */ .IY)(n,t.fields));const a=await O(t,n,e,!0);if(0===a.length)return null;const i=f(a);return null===i?i:"integer"===r?u(i):i}async function x(t,n,e){const r=await O(t,n,e,!0);return 0===r.length?null:m(r)}async function T(t,n,e){const r=await O(t,n,e,!0);return 0===r.length?null:Math.sqrt(m(r))}async function k(t,n,e){const r=await O(t,n,e,!0);return 0===r.length?null:g(r)}async function q(t,n){return t.iterator(n).count()}async function O(e,r,a,c=!1){const s=e.iterator(a),u=[],f={ticker:0};let h=await s.next();for(;null!==h;){if(f.ticker++,a.aborted)throw new _errorsupport_js__WEBPACK_IMPORTED_MODULE_0__/* .FeatureSetError */ .dr(_errorsupport_js__WEBPACK_IMPORTED_MODULE_0__/* .FeatureSetErrorCodes */ .D_.Cancelled);f.ticker%100==0&&(f.ticker=0,await new Promise((t=>{setTimeout(t,0)})));const e=r?.calculateValue(h);null===e?!1===c&&(u[u.length]=e):u[u.length]=e instanceof _core_sql_DateOnly_js__WEBPACK_IMPORTED_MODULE_3__/* .DateOnly */ .n||e instanceof _core_sql_TimeOnly_js__WEBPACK_IMPORTED_MODULE_5__/* .TimeOnly */ .k?e.toNumber():e instanceof _core_sql_SqlTimestampOffset_js__WEBPACK_IMPORTED_MODULE_4__/* .SqlTimeStampOffset */ .g?e.toMilliseconds():e,h=await s.next()}return u}async function S(e,r,a=1e3,c=null){const s=e.iterator(c),u=[],f={},h={ticker:0};let m=await s.next();for(;null!==m;){if(h.ticker++,c&&c.aborted)throw new _errorsupport_js__WEBPACK_IMPORTED_MODULE_0__/* .FeatureSetError */ .dr(_errorsupport_js__WEBPACK_IMPORTED_MODULE_0__/* .FeatureSetErrorCodes */ .D_.Cancelled);h.ticker%100==0&&(h.ticker=0,await new Promise((t=>{setTimeout(t,0)})));const e=r?.calculateValue(m);let g=e;if(e instanceof _core_sql_DateOnly_js__WEBPACK_IMPORTED_MODULE_3__/* .DateOnly */ .n?g="!!DATEONLY!!-"+e.toString():e instanceof _core_sql_SqlTimestampOffset_js__WEBPACK_IMPORTED_MODULE_4__/* .SqlTimeStampOffset */ .g?g="!!TSOFFSETONLY!!-"+e.toString():e instanceof _core_sql_TimeOnly_js__WEBPACK_IMPORTED_MODULE_5__/* .TimeOnly */ .k?g="!!TIMEONLY!!-"+e.toString():e instanceof Date&&(g="!!DATE!!-"+e.toString()),null!=e&&void 0===f[g]&&(u.push(e),f[g]=1),u.length>=a&&-1!==a)return u;m=await s.next()}return u}


/***/ }),

/***/ 52712:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ u),
/* harmony export */   c: () => (/* binding */ n),
/* harmony export */   f: () => (/* binding */ r)
/* harmony export */ });
/* unused harmony exports O, U, Z, b, d, e, g, h, i, j, k, o, u, v, z */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function n(){return[0,0,0,0]}function t(n){return[n[0],n[1],n[2],n[3]]}function r(n,t,r,e){return[n,t,r,e]}function e(t,r=n()){const e=Math.min(4,t.length);for(let n=0;n<e;++n)r[n]=t[n];return r}function u(n,t){return new Float64Array(n,t,4)}function a(){return n()}function o(){return r(1,1,1,1)}function s(){return r(1,0,0,0)}function i(){return r(0,1,0,0)}function c(){return r(0,0,1,0)}function f(){return r(0,0,0,1)}const l=a(),_=o(),N=s(),O=i(),T=c(),U=f(),b=Object.freeze(Object.defineProperty({__proto__:null,ONES:_,UNIT_W:U,UNIT_X:N,UNIT_Y:O,UNIT_Z:T,ZEROS:l,clone:t,create:n,createView:u,fromArray:e,fromValues:r,ones:o,unitW:f,unitX:s,unitY:i,unitZ:c,zeros:a},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 89926:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _MemCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40210);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class e{constructor(e,s){this._storage=new _MemCache_js__WEBPACK_IMPORTED_MODULE_0__/* .MemCacheStorage */ .F,this.id="",this.name="",this.size=0,this._storage.maxSize=e,this._storage.register(this),s&&this._storage.registerRemoveFunc("",s)}destroy(){this._storage.deregister(this),this._storage.destroy()}put(t,e,s=1){this._storage.put(this,t,e,s,1)}pop(t){return this._storage.pop(this,t)}get(t){return this._storage.get(this,t)}clear(){this._storage.clearAll()}get maxSize(){return this._storage.maxSize}set maxSize(t){this._storage.maxSize=t}resetHitRate(){}}


/***/ }),

/***/ 69075:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ n),
/* harmony export */   d: () => (/* binding */ x)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const n={Base64:0,Hex:1,String:2,Raw:3},t=8,r=(1<<t)-1;function e(n,t){const r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function o(n){const e=[];for(let o=0,u=n.length*t;o<u;o+=t)e[o>>5]|=(n.charCodeAt(o/t)&r)<<o%32;return e}function u(n){const e=[];for(let o=0,u=32*n.length;o<u;o+=t)e.push(String.fromCharCode(n[o>>5]>>>o%32&r));return e.join("")}function c(n){const t="0123456789abcdef",r=[];for(let e=0,o=4*n.length;e<o;e++)r.push(t.charAt(n[e>>2]>>e%4*8+4&15)+t.charAt(n[e>>2]>>e%4*8&15));return r.join("")}function f(n){const t="=",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e=[];for(let o=0,u=4*n.length;o<u;o+=3){const u=(n[o>>2]>>o%4*8&255)<<16|(n[o+1>>2]>>(o+1)%4*8&255)<<8|n[o+2>>2]>>(o+2)%4*8&255;for(let c=0;c<4;c++)8*o+6*c>32*n.length?e.push(t):e.push(r.charAt(u>>6*(3-c)&63))}return e.join("")}function s(n,t){return n<<t|n>>>32-t}function i(n,t,r,o,u,c){return e(s(e(e(t,n),e(o,c)),u),r)}function h(n,t,r,e,o,u,c){return i(t&r|~t&e,n,t,o,u,c)}function a(n,t,r,e,o,u,c){return i(t&e|r&~e,n,t,o,u,c)}function l(n,t,r,e,o,u,c){return i(t^r^e,n,t,o,u,c)}function g(n,t,r,e,o,u,c){return i(r^(t|~e),n,t,o,u,c)}function p(n,t){n[t>>5]|=128<<t%32,n[14+(t+64>>>9<<4)]=t;let r=1732584193,o=-271733879,u=-1732584194,c=271733878;for(let f=0;f<n.length;f+=16){const t=r,s=o,i=u,p=c;r=h(r,o,u,c,n[f],7,-680876936),c=h(c,r,o,u,n[f+1],12,-389564586),u=h(u,c,r,o,n[f+2],17,606105819),o=h(o,u,c,r,n[f+3],22,-1044525330),r=h(r,o,u,c,n[f+4],7,-176418897),c=h(c,r,o,u,n[f+5],12,1200080426),u=h(u,c,r,o,n[f+6],17,-1473231341),o=h(o,u,c,r,n[f+7],22,-45705983),r=h(r,o,u,c,n[f+8],7,1770035416),c=h(c,r,o,u,n[f+9],12,-1958414417),u=h(u,c,r,o,n[f+10],17,-42063),o=h(o,u,c,r,n[f+11],22,-1990404162),r=h(r,o,u,c,n[f+12],7,1804603682),c=h(c,r,o,u,n[f+13],12,-40341101),u=h(u,c,r,o,n[f+14],17,-1502002290),o=h(o,u,c,r,n[f+15],22,1236535329),r=a(r,o,u,c,n[f+1],5,-165796510),c=a(c,r,o,u,n[f+6],9,-1069501632),u=a(u,c,r,o,n[f+11],14,643717713),o=a(o,u,c,r,n[f],20,-373897302),r=a(r,o,u,c,n[f+5],5,-701558691),c=a(c,r,o,u,n[f+10],9,38016083),u=a(u,c,r,o,n[f+15],14,-660478335),o=a(o,u,c,r,n[f+4],20,-405537848),r=a(r,o,u,c,n[f+9],5,568446438),c=a(c,r,o,u,n[f+14],9,-1019803690),u=a(u,c,r,o,n[f+3],14,-187363961),o=a(o,u,c,r,n[f+8],20,1163531501),r=a(r,o,u,c,n[f+13],5,-1444681467),c=a(c,r,o,u,n[f+2],9,-51403784),u=a(u,c,r,o,n[f+7],14,1735328473),o=a(o,u,c,r,n[f+12],20,-1926607734),r=l(r,o,u,c,n[f+5],4,-378558),c=l(c,r,o,u,n[f+8],11,-2022574463),u=l(u,c,r,o,n[f+11],16,1839030562),o=l(o,u,c,r,n[f+14],23,-35309556),r=l(r,o,u,c,n[f+1],4,-1530992060),c=l(c,r,o,u,n[f+4],11,1272893353),u=l(u,c,r,o,n[f+7],16,-155497632),o=l(o,u,c,r,n[f+10],23,-1094730640),r=l(r,o,u,c,n[f+13],4,681279174),c=l(c,r,o,u,n[f],11,-358537222),u=l(u,c,r,o,n[f+3],16,-722521979),o=l(o,u,c,r,n[f+6],23,76029189),r=l(r,o,u,c,n[f+9],4,-640364487),c=l(c,r,o,u,n[f+12],11,-421815835),u=l(u,c,r,o,n[f+15],16,530742520),o=l(o,u,c,r,n[f+2],23,-995338651),r=g(r,o,u,c,n[f],6,-198630844),c=g(c,r,o,u,n[f+7],10,1126891415),u=g(u,c,r,o,n[f+14],15,-1416354905),o=g(o,u,c,r,n[f+5],21,-57434055),r=g(r,o,u,c,n[f+12],6,1700485571),c=g(c,r,o,u,n[f+3],10,-1894986606),u=g(u,c,r,o,n[f+10],15,-1051523),o=g(o,u,c,r,n[f+1],21,-2054922799),r=g(r,o,u,c,n[f+8],6,1873313359),c=g(c,r,o,u,n[f+15],10,-30611744),u=g(u,c,r,o,n[f+6],15,-1560198380),o=g(o,u,c,r,n[f+13],21,1309151649),r=g(r,o,u,c,n[f+4],6,-145523070),c=g(c,r,o,u,n[f+11],10,-1120210379),u=g(u,c,r,o,n[f+2],15,718787259),o=g(o,u,c,r,n[f+9],21,-343485551),r=e(r,t),o=e(o,s),u=e(u,i),c=e(c,p)}return[r,o,u,c]}function x(r,e=n.Hex){const s=e||n.Base64,i=p(o(r),r.length*t);switch(s){case n.Raw:return i;case n.Hex:return c(i);case n.String:return u(i);case n.Base64:return f(i)}}


/***/ }),

/***/ 40210:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ r),
/* harmony export */   Mn: () => (/* binding */ i)
/* harmony export */ });
/* unused harmony exports RemoveMode, minPriority */
/* harmony import */ var _PooledArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63678);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const e=-3;var s;!function(t){t[t.ALL=0]="ALL",t[t.SOME=1]="SOME"}(s||(s={}));class i{constructor(t,e,s){this.name=t,this._storage=e,this.id=h+++":",this.size=0,this.maxSize=0,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),s&&(this._storage.registerRemoveFunc(this.id,s),this._removeFunc=!0)}destroy(){this._storage.clear(this),this._removeFunc&&this._storage.deregisterRemoveFunc(this.id),this._storage.deregister(this),this._storage=null}get hitRate(){return this._hit/(this._hit+this._miss)}get sizeAll(){return this._storage.size}resetHitRate(){this._hit=this._miss=0}put(t,e,s,i=0){this._storage.put(this,t,e,s,i)}get(t){const e=this._storage.get(this,t);return void 0===e?++this._miss:++this._hit,e}peek(t){return this._storage.peek(this,t)}pop(t){const e=this._storage.pop(this,t);return void 0===e?++this._miss:++this._hit,e}updateSize(t,e,s){this._storage.updateSize(this,t,e,s)}clear(){this._storage.clear(this)}clearAll(){this._storage.clearAll()}get performanceInfo(){return this._storage.performanceInfo}resetStats(){this._storage.resetStats()}}class r{get size(){return this._size}constructor(e=10485760){this._maxSize=e,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,this._users=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null}register(t){this._users.push(t)}deregister(t){this._users.removeUnordered(t)}registerRemoveFunc(t,e){this._removeFuncs.push([t,e])}deregisterRemoveFunc(t){this._removeFuncs.filterInPlace((e=>e[0]!==t))}get maxSize(){return this._maxSize}set maxSize(t){this._maxSize=Math.max(t,0),this._checkSizeLimits()}put(t,i,r,h,o){i=t.id+i;const n=this._db.get(i);if(n&&(this._size-=n.size,t.size-=n.size,this._db.delete(i),n.entry!==r&&this._notifyRemove(i,n.entry,s.ALL)),h>this._maxSize)return void this._notifyRemove(i,r,s.ALL);if(void 0===r)return void console.warn("Refusing to cache undefined entry ");if(!h||h<0)return console.warn(`Refusing to cache entry with size ${h} for key ${i}`),void this._notifyRemove(i,r,s.ALL);const _=1+Math.max(o,e)-e;this._db.set(i,{entry:r,size:h,lifetime:_,lives:_}),this._size+=h,t.size+=h,this._checkSizeLimits()}updateSize(t,e,i,r){e=t.id+e;const h=this._db.get(e);if(h&&h.entry===i){for(this._size-=h.size,t.size-=h.size;r>this._maxSize;){const t=this._notifyRemove(e,i,s.SOME);if(!(null!=t&&t>0))return void this._db.delete(e);r=t}h.size=r,this._size+=r,t.size+=r,this._checkSizeLimits()}}pop(t,e){e=t.id+e;const s=this._db.get(e);if(s)return this._size-=s.size,t.size-=s.size,this._db.delete(e),++this._hit,s.entry;++this._miss}get(t,e){e=t.id+e;const s=this._db.get(e);if(void 0!==s)return this._db.delete(e),s.lives=s.lifetime,this._db.set(e,s),++this._hit,s.entry;++this._miss}peek(t,e){const s=this._db.get(t.id+e);return s?++this._hit:++this._miss,s?.entry}get performanceInfo(){const t={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},s={},i=new Array;this._db.forEach(((t,e)=>{const r=t.lifetime;i[r]=(i[r]||0)+t.size,this._users.forAll((i=>{const{id:r,name:h}=i;if(e.startsWith(r)){const e=s[h]||0;s[h]=e+t.size}}))}));const r={};this._users.forAll((t=>{const e=t.name;if("hitRate"in t&&"number"==typeof t.hitRate&&!isNaN(t.hitRate)&&t.hitRate>0){const i=s[e]||0;s[e]=i,r[e]=Math.round(100*t.hitRate)+"%"}else r[e]="0%"}));const h=Object.keys(s);h.sort(((t,e)=>s[e]-s[t])),h.forEach((e=>t[e]=Math.round(s[e]/2**20)+"MB / "+r[e]));for(let o=i.length-1;o>=0;--o){const s=i[o];s&&(t["Priority "+(o+e-1)]=Math.round(s/this._size*100)+"%")}return t}resetStats(){this._hit=this._miss=0,this._users.forAll((t=>t.resetHitRate()))}clear(t){const e=t.id;this._db.forEach(((t,i)=>{i.startsWith(e)&&(this._size-=t.size,this._db.delete(i),this._notifyRemove(i,t.entry,s.ALL))})),t.size=0}clearAll(){this._db.forEach(((t,e)=>this._notifyRemove(e,t.entry,s.ALL))),this._users.forEach((t=>t.size=0)),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemove(t,e,s){let i;return this._removeFuncs.some((r=>{if(t.startsWith(r[0])){const t=r[1](e,s);return"number"==typeof t&&(i=t),!0}return!1})),i}_checkSizeLimits(){if(this._size>this._maxSize)for(const[t,e]of this._db)if(this._purgeItem(t,e),this._size<=.9*this.maxSize)return;this._users.forEach((t=>{if(t.maxSize>0&&t.size>t.maxSize)for(const[e,s]of this._db)if(e.startsWith(t.id)&&(this._purgeItem(e,s,t),t.size<=.9*t.maxSize))return}))}_purgeItem(t,e,i=this._users.find((e=>t.startsWith(e.id)))){if(this._db.delete(t),e.lives<=1){this._size-=e.size,i&&(i.size-=e.size);const r=this._notifyRemove(t,e.entry,s.SOME);null!=r&&r>0&&(this._size+=r,i&&(i.size+=r),e.lives=e.lifetime,e.size=r,this._db.set(t,e))}else--e.lives,this._db.set(t,e)}}let h=0;


/***/ }),

/***/ 35775:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  P: () => (/* binding */ m),
  L: () => (/* binding */ S)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(52495);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/defaultsStoreUtils.js
var defaultsStoreUtils = __webpack_require__(52700);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/PropertyOrigin.js
var PropertyOrigin = __webpack_require__(94255);
;// ../node_modules/@arcgis/core/core/accessorSupport/MultiOriginStore.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class MultiOriginStore_r{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(PropertyOrigin/* OriginIdNum */.Qg),this._values=new Map,this.multipleOriginsSupported=!0}clone(i){const o=new MultiOriginStore_r,n=this._originStores[PropertyOrigin/* OriginId */.Gr.DEFAULTS];n&&n.forEach(((s,r)=>{o.set(r,(0,lang/* clone */.o8)(s),PropertyOrigin/* OriginId */.Gr.DEFAULTS)}));for(let r=PropertyOrigin/* OriginId */.Gr.SERVICE;r<PropertyOrigin/* OriginIdNum */.Qg;r++){const s=this._originStores[r];s&&s.forEach(((s,e)=>{i&&i.has(e)||o.set(e,(0,lang/* clone */.o8)(s),r)}))}return o}get(t,s){const e=void 0===s?this._values:this._originStores[s];return e?e.get(t):void 0}keys(t){const s=null==t?this._values:this._originStores[t];return s?[...s.keys()]:[]}set(t,s,r=PropertyOrigin/* OriginId */.Gr.USER){let i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(t,s),!this._values.has(t)||this._propertyOriginMap.get(t)<=r){const e=this._values.get(t);return this._values.set(t,s),this._propertyOriginMap.set(t,r),e!==s}return!1}delete(t,s=PropertyOrigin/* OriginId */.Gr.USER){const r=this._originStores[s];if(!r)return;const i=r.get(t);if(r.delete(t),this._values.has(t)&&this._propertyOriginMap.get(t)===s){this._values.delete(t);for(let e=s-1;e>=0;e--){const s=this._originStores[e];if(s&&s.has(t)){this._values.set(t,s.get(t)),this._propertyOriginMap.set(t,e);break}}}return i}has(t,s){const e=void 0===s?this._values:this._originStores[s];return!!e&&e.has(t)}revert(t,s){for(;s>0&&!this.has(t,s);)--s;const e=this._originStores[s],r=e?.get(t),i=this._values.get(t);return this._values.set(t,r),this._propertyOriginMap.set(t,s),i!==r}originOf(t){return this._propertyOriginMap.get(t)||PropertyOrigin/* OriginId */.Gr.DEFAULTS}forEach(t){this._values.forEach(t)}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/read.js
var read = __webpack_require__(83312);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/utils.js
var utils = __webpack_require__(55135);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
;// ../node_modules/@arcgis/core/core/ReadOnlyMultiOriginJSONSupport.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const u=t=>{let u=class extends t{constructor(...r){super(...r);const t=(0,utils/* getProperties */.oY)(this),e=t.store,i=new MultiOriginStore_r;t.store=i,(0,defaultsStoreUtils/* setupConstructedDefaults */.k)(t,e,i)}read(r,t){(0,read/* read */.L)(this,r,t)}getAtOrigin(r,t){const s=a(this),o=(0,PropertyOrigin/* nameToId */.aB)(t);if("string"==typeof r)return s.get(r,o);const i={};return r.forEach((r=>{i[r]=s.get(r,o)})),i}originOf(r){return (0,PropertyOrigin/* idToName */.OL)(this.originIdOf(r))}originIdOf(r){return a(this).originOf(r)}revert(r,t){const s=a(this),o=(0,PropertyOrigin/* nameToId */.aB)(t),i=(0,utils/* getProperties */.oY)(this);let c;c="string"==typeof r?"*"===r?s.keys(o):[r]:r,c.forEach((r=>{i.invalidate(r),s.revert(r,o),i.commit(r)}))}};return u=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.core.ReadOnlyMultiOriginJSONSupport")],u),u};function a(r){return (0,utils/* getProperties */.oY)(r).store}let f=class extends(u(Accessor/* default */.A)){};f=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.core.ReadOnlyMultiOriginJSONSupport")],f);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/get.js
var get = __webpack_require__(45066);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/write.js
var write = __webpack_require__(77373);
;// ../node_modules/@arcgis/core/core/MultiOriginJSONSupport.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const l=t=>{let s=class extends t{constructor(...r){super(...r)}clear(r,t="user"){return O(this).delete(r,(0,PropertyOrigin/* nameToId */.aB)(t))}write(r,t){return (0,write/* write */.M)(this,r=r||{},t),r}setAtOrigin(r,t,s){(0,utils/* getProperties */.oY)(this).setAtOrigin(r,t,(0,PropertyOrigin/* nameToId */.aB)(s))}removeOrigin(r){const t=O(this),s=(0,PropertyOrigin/* nameToId */.aB)(r),e=t.keys(s);for(const o of e)t.originOf(o)===s&&t.set(o,t.get(o,s),PropertyOrigin/* OriginId */.Gr.USER)}updateOrigin(r,t){const s=O(this),i=(0,PropertyOrigin/* nameToId */.aB)(t),c=(0,get/* get */.Jt)(this,r);for(let e=i+1;e<PropertyOrigin/* OriginIdNum */.Qg;++e)s.delete(r,e);s.set(r,c,i)}toJSON(r){return this.write({},r)}};return s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.core.WriteableMultiOriginJSONSupport")],s),s.prototype.toJSON.isDefaultToJSON=!0,s};function O(r){return (0,utils/* getProperties */.oY)(r).store}const m=t=>{let e=class extends(l(u(t))){constructor(...r){super(...r)}};return e=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.core.MultiOriginJSONSupport")],e),e};let S=class extends(m(Accessor/* default */.A)){};S=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.core.MultiOriginJSONSupport")],S);


/***/ }),

/***/ 50579:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let r=class{constructor(t,r,o=""){this.major=t,this.minor=r,this._context=o}lessThan(t,r){return this.major<t||t===this.major&&this.minor<r}since(t,r){return!this.lessThan(t,r)}validate(r){if(this.major!==r.major){const o=this._context&&this._context+":",s=this._context&&this._context+" ";throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(o+"unsupported-version",`Required major ${s}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:r})}}clone(){return new r(this.major,this.minor,this._context)}static parse(o,s=""){const[e,i]=o.split("."),n=/^\s*\d+\s*$/;if(!e?.match||!n.test(e)){throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A((s&&s+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:o})}if(!i?.match||!n.test(i)){throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A((s&&s+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:o})}const a=parseInt(e,10),h=parseInt(i,10);return new r(a,h,s)}};


/***/ }),

/***/ 64442:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EB: () => (/* binding */ s),
/* harmony export */   Ui: () => (/* binding */ a),
/* harmony export */   ir: () => (/* binding */ p)
/* harmony export */ });
/* unused harmony export isEmpty */
/* harmony import */ var _Accessor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52495);
/* harmony import */ var _Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48982);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55135);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const o=new Set(["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"]);function r(t){return t instanceof _Accessor_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A}function f(e){return e instanceof _Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A?Object.keys(e.items):r(e)?(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .getProperties */ .oY)(e).keys():e?Object.keys(e):[]}function l(e,n){return e instanceof _Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A?e.items[n]:e[n]}function i(e,t){return!(!Array.isArray(e)||!Array.isArray(t))&&e.length!==t.length}function u(e){return e?e.declaredClass:null}function c(e,t){const n=e.diff;if(n&&"function"==typeof n)return n(e,t);const s=f(e),p=f(t);if(0===s.length&&0===p.length)return;if(!s.length||!p.length||i(e,t))return{type:"complete",oldValue:e,newValue:t};const a=p.filter((e=>!s.includes(e))),y=s.filter((e=>!p.includes(e))),m=s.filter((n=>p.includes(n)&&l(e,n)!==l(t,n))).concat(a,y).sort(),d=u(e);if(d&&o.has(d)&&m.length)return{type:"complete",oldValue:e,newValue:t};let h;const b=r(e)&&r(t);for(const o of m){const r=l(e,o),f=l(t,o);let i;if((b||"function"!=typeof r&&"function"!=typeof f)&&(r!==f&&(null!=r||null!=f))){if(n&&n[o]&&"function"==typeof n[o])i=n[o]?.(r,f);else if(r instanceof Date&&f instanceof Date){if(r.getTime()===f.getTime())continue;i={type:"complete",oldValue:r,newValue:f}}else i="object"==typeof r&&"object"==typeof f&&u(r)===u(f)?c(r,f):{type:"complete",oldValue:r,newValue:f};null!=i&&(null!=h?h.diff[o]=i:h={type:"partial",diff:{[o]:i}})}}return h}function s(e,t){if(null==e)return!1;const n=t.split(".");let o=e;for(const r of n){if("complete"===o.type)return!0;if("partial"!==o.type)return!1;{const e=o.diff[r];if(!e)return!1;o=e}}return!0}function p(e,t){for(const n of t)if(s(e,n))return!0;return!1}function a(e,t){if("function"!=typeof e&&"function"!=typeof t&&(null!=e||null!=t))return null==e||null==t||"object"==typeof e&&"object"==typeof t&&u(e)!==u(t)?{type:"complete",oldValue:e,newValue:t}:c(e,t)}function y(e){if(null==e)return!0;switch(e.type){case"complete":return!1;case"collection":{const t=e;for(const e of t.added)if(!y(e))return!1;for(const e of t.removed)if(!y(e))return!1;for(const e of t.changed)if(!y(e))return!1;return!0}case"partial":for(const t in e.diff){if(!y(e.diff[t]))return!1}return!0}}


/***/ }),

/***/ 73324:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ a)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const a=(a=>a)(["operational-layers","basemap","ground"]);


/***/ }),

/***/ 66471:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _ObjectPool_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90086);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var e;!function(t){t[t.varint=0]="varint",t[t.fixed64=1]="fixed64",t[t.delimited=2]="delimited",t[t.fixed32=5]="fixed32",t[t.unknown=99]="unknown"}(e||(e={}));const i=4294967296,s=new TextDecoder("utf-8"),n=(0,_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("safari")||(0,_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("ios")?6:(0,_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("ff")?12:32;class r{constructor(t,i,s=0,n=(t?t.byteLength:0)){this._tag=0,this._dataType=e.unknown,this._init(t,i,s,n)}_init(t,e,i,s){this._data=t,this._dataView=e,this._pos=i,this._end=s}asUnsafe(){return this}clone(){return new r(this._data,this._dataView,this._pos,this._end)}pos(){return this._pos}move(t){this._pos=t}nextTag(t){for(;;){if(this._pos===this._end)return!1;const e=this._decodeVarint();if(this._tag=e>>3,this._dataType=7&e,!t||t===this._tag)break;this.skip()}return!0}next(){if(this._pos===this._end)return!1;const t=this._decodeVarint();return this._tag=t>>3,this._dataType=7&t,!0}empty(){return this._pos>=this._end}tag(){return this._tag}getInt32(){return this._decodeVarint()}getInt64(){return this._decodeVarint()}getUInt32(){let t=4294967295;return t=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128?t:(t=(t|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128?t:(t=(t|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128?t:(t=(t|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128?t:(t=(t|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128?t:void 0))))}getUInt64(){return this._decodeVarint()}getSInt32(){const t=this.getUInt32();if(void 0!==t)return t>>>1^-(1&t)|0}getSInt64(){return this._decodeSVarint()}getBool(){const t=0!==this._data[this._pos];return this._skip(1),t}getEnum(){return this._decodeVarint()}getFixed64(){const t=this._dataView,e=this._pos,s=t.getUint32(e,!0)+t.getUint32(e+4,!0)*i;return this._skip(8),s}getSFixed64(){const t=this._dataView,e=this._pos,s=t.getUint32(e,!0)+t.getInt32(e+4,!0)*i;return this._skip(8),s}getDouble(){const t=this._dataView.getFloat64(this._pos,!0);return this._skip(8),t}getFixed32(){const t=this._dataView.getUint32(this._pos,!0);return this._skip(4),t}getSFixed32(){const t=this._dataView.getInt32(this._pos,!0);return this._skip(4),t}getFloat(){const t=this._dataView.getFloat32(this._pos,!0);return this._skip(4),t}getString(){const t=this._getLength(),e=this._pos,i=this._toString(this._data,e,e+t);return this._skip(t),i}getBytes(){const t=this._getLength(),e=this._pos,i=this._toBytes(this._data,e,e+t);return this._skip(t),i}getLength(){return this._getLengthUnsafe()}processMessageWithArgs(t,e,i,s){const n=this.getMessage(),r=t(n,e,i,s);return n.release(),r}processMessage(t){const e=this.getMessage(),i=t(e);return e.release(),i}getMessage(){const t=this._getLength(),e=r.pool.acquire();return e._init(this._data,this._dataView,this._pos,this._pos+t),this._skip(t),e}release(){r.pool.release(this)}dataType(){return this._dataType}skip(){switch(this._dataType){case e.varint:this._decodeVarint();break;case e.fixed64:this._skip(8);break;case e.delimited:this._skip(this._getLength());break;case e.fixed32:this._skip(4);break;default:throw new Error("Invalid data type!")}}skipLen(t){this._skip(t)}_skip(t){if(this._pos+t>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=t}_decodeVarint(){const t=this._data;let e=this._pos,i=0,s=0;if(this._end-e>=10)do{if(s=t[e++],i|=127&s,0==(128&s))break;if(s=t[e++],i|=(127&s)<<7,0==(128&s))break;if(s=t[e++],i|=(127&s)<<14,0==(128&s))break;if(s=t[e++],i|=(127&s)<<21,0==(128&s))break;if(s=t[e++],i+=268435456*(127&s),0==(128&s))break;if(s=t[e++],i+=34359738368*(127&s),0==(128&s))break;if(s=t[e++],i+=4398046511104*(127&s),0==(128&s))break;if(s=t[e++],i+=562949953421312*(127&s),0==(128&s))break;if(s=t[e++],i+=72057594037927940*(127&s),0==(128&s))break;if(s=t[e++],i+=0x8000000000000000*(127&s),0==(128&s))break;throw new Error("Varint too long!")}while(0);else{let n=1;for(;e!==this._end&&(s=t[e],0!=(128&s));)++e,i+=(127&s)*n,n*=128;if(e===this._end)throw new Error("Varint overrun!");++e,i+=s*n}return this._pos=e,i}_decodeSVarint(){const t=this._data;let e,i=0,s=0;const n=1&t[this._pos];if(s=t[this._pos++],i|=127&s,0==(128&s))return n?-(i+1)/2:i/2;if(s=t[this._pos++],i|=(127&s)<<7,0==(128&s))return n?-(i+1)/2:i/2;if(s=t[this._pos++],i|=(127&s)<<14,0==(128&s))return n?-(i+1)/2:i/2;if(s=t[this._pos++],i|=(127&s)<<21,0==(128&s))return n?-(i+1)/2:i/2;if(s=t[this._pos++],i+=268435456*(127&s),0==(128&s))return n?-(i+1)/2:i/2;if(s=t[this._pos++],i+=34359738368*(127&s),0==(128&s))return n?-(i+1)/2:i/2;if(s=t[this._pos++],i+=4398046511104*(127&s),0==(128&s))return n?-(i+1)/2:i/2;if(e=BigInt(i),s=t[this._pos++],e+=0x2000000000000n*BigInt(127&s),0==(128&s))return Number(n?-(e+1n)/2n:e/2n);if(s=t[this._pos++],e+=0x100000000000000n*BigInt(127&s),0==(128&s))return Number(n?-(e+1n)/2n:e/2n);if(s=t[this._pos++],e+=0x8000000000000000n*BigInt(127&s),0==(128&s))return Number(n?-(e+1n)/2n:e/2n);throw new Error("Varint too long!")}_getLength(){if(this._dataType!==e.delimited)throw new Error("Not a delimited data type!");return this._decodeVarint()}_getLengthUnsafe(){return this.getUInt32()}_toString(t,e,i){if((i=Math.min(this._end,i))-e>n){const n=t.subarray(e,i);return s.decode(n)}let r="",h="";for(let s=e;s<i;++s){const e=t[s];128&e?h+="%"+e.toString(16):(r+=decodeURIComponent(h)+String.fromCharCode(e),h="")}return h.length&&(r+=decodeURIComponent(h)),r}_toBytes(t,e,i){return i=Math.min(this._end,i),new Uint8Array(t.buffer,e,i-e)}}r.pool=new _ObjectPool_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(r,void 0,(t=>{t._data=null,t._dataView=null}));


/***/ }),

/***/ 64473:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34495);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(t){return Number.isNaN(t)||0===t?t:Math.trunc(t)}class r{constructor(t){this._timeStampOffset=t,this._date=null}toDateTime(){return this._date??=luxon__WEBPACK_IMPORTED_MODULE_0__/* .DateTime */ .c9.fromISO(this._timeStampOffset,{setZone:!0}),this._date}get isValid(){return this.toDateTime().isValid}get timezoneOffsetHour(){return e(this.toDateTime().offset/60)}get timezoneOffsetMinutes(){return e(this.toDateTime().offset%60)}toMilliseconds(){return this.toDateTime().toMillis()}get hour(){return this.toDateTime().hour}get minute(){return this.toDateTime().minute}get second(){return this.toDateTime().second}get day(){return this.toDateTime().day}get month(){return this.toDateTime().month}get year(){return this.toDateTime().year}startOfDay(){return r.fromDateTime(this.toDateTime().startOf("day"))}static fromJSDate(e){return new r(luxon__WEBPACK_IMPORTED_MODULE_0__/* .DateTime */ .c9.fromJSDate(e).toISO({includeOffset:!0}))}static fromDateTime(t){return new r(t.toISO({includeOffset:!0}))}static fromParts(t,e,i=0,a=0,o=0,n=0,s=0,m=!1,u=0,f=0){const S=`${t.toString().padStart(4,"0")}-${e.toString().padStart(2,"0")}-${i.toString().padStart(2,"0")}`;let d="";n<10&&(d="0");let h=`${a.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}:${d+n.toString()}`;0!==s&&(h+="."+s.toString().padStart(3,"0"));const l=`${m?"-":"+"}${u.toString().padStart(2,"0")}:${f.toString().padStart(2,"0")}`;return new r(S+"T"+h+l)}toStorageFormat(){return this._timeStampOffset}toString(){return this._timeStampOffset}toSQLValue(){let t=this.toDateTime().toSQL({includeOffset:!0,includeOffsetSpace:!0});return t&&(t=t.replace(".000","")),t}toSQLWithKeyword(){return`timestamp '${this.toSQLValue()}'`}addMilliseconds(t){const e=this.toDateTime().plus(t);return r.fromDateTime(e)}}


/***/ }),

/***/ 1615:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  WhereClause: () => (/* binding */ WhereClause_x)
});

// UNUSED EXPORTS: defaultAttributeAdapter

// EXTERNAL MODULE: ../node_modules/@arcgis/core/arcade/ArcadeDate.js
var ArcadeDate = __webpack_require__(98918);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/arcade/featureset/support/errorsupport.js
var errorsupport = __webpack_require__(80778);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/sql/DateOnly.js
var DateOnly = __webpack_require__(45132);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/sql/SqlTimestampOffset.js
var SqlTimestampOffset = __webpack_require__(64473);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/sql/TimeOnly.js
var TimeOnly = __webpack_require__(40845);
// EXTERNAL MODULE: ../node_modules/luxon/src/luxon.js + 23 modules
var luxon = __webpack_require__(34495);
;// ../node_modules/@arcgis/core/core/sql/AggregateFunctions.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function AggregateFunctions_u(t,a){const e=m[t.toLowerCase()];if(null==e)throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.FunctionNotRecognized);if(a.length<e.minParams||a.length>e.maxParams)throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidParameterCount,{name:t.toUpperCase()});return e.evaluate(a)}function o(n,l){const t=m[n.toLowerCase()];return null!=t&&l>=t.minParams&&l<=t.maxParams}const m={min:{minParams:1,maxParams:1,evaluate:n=>f(n[0],"min")},max:{minParams:1,maxParams:1,evaluate:n=>f(n[0],"max")},avg:{minParams:1,maxParams:1,evaluate:n=>i(n[0])},sum:{minParams:1,maxParams:1,evaluate:n=>c(n[0])},stddev:{minParams:1,maxParams:1,evaluate:n=>g(n[0])},count:{minParams:1,maxParams:1,evaluate:n=>null==n[0]?null:n[0].length},var:{minParams:1,maxParams:1,evaluate:n=>P(n[0])}};function i(t){if(null===t)return null;let a=0,e=0;for(let r=0;r<t.length;r++){const u=t[r];if(null!==u){if(!s(u))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidValueForAggregateFunction);e++,a+=u}}return 0===e?null:a/t.length}function s(n){return"number"==typeof n}function f(n,l){if(null===n)return null;let u=null,o=null;for(const m of n){let n=m;n=m instanceof DateOnly/* DateOnly */.n||m instanceof TimeOnly/* TimeOnly */.k?m.toNumber():m instanceof luxon/* DateTime */.c9?m.toMillis():m instanceof SqlTimestampOffset/* SqlTimeStampOffset */.g?m.toMilliseconds():m,(null===u||"max"===l&&null!==o&&null!==n&&o<=n||"min"===l&&null!==o&&null!==n&&o>=n)&&(u=m,o=n)}return u}function c(t){if(null===t)return null;let a=0;for(let e=0;e<t.length;e++){const r=t[e];if(null!==r){if(!s(r))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidValueForAggregateFunction);a+=r}}return a}function g(n){if(null===n)return null;const l=P(n);return null===l?null:Math.sqrt(l)}function P(t){if(null===t)return null;if(0===(t=t.filter((n=>null!==n))).length)return null;const a=i(t);if(null===a)return null;let e=0;for(const r of t){if(!s(r))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidValueForAggregateFunction);e+=(a-r)**2}return e/(t.length-1)}

;// ../node_modules/@arcgis/core/core/sql/SqlInterval.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class SqlInterval_s{constructor(){this.op="+",this.day=0,this.second=0,this.hour=0,this.month=0,this.year=0,this.minute=0,this.millis=0}static _fixDefaults(s){if(null!==s.precision||null!==s.secondary)throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.PrimarySecondaryQualifiers)}static _parseSecondsComponent(e,t){if(t.includes(".")){const s=t.split(".");e.second=parseFloat(s[0]),e.millis=parseInt(s[1],10)}else e.second=parseFloat(t)}static createFromMilliseconds(e){const t=new SqlInterval_s;return t.second=e/1e3,t}static createFromValueAndQualifer(r,a,l){let o=null;const n=new SqlInterval_s;if(n.op="-"===l?"-":"+","interval-period"===a.type){SqlInterval_s._fixDefaults(a);const l=new RegExp("^[0-9]{1,}$");if("year"===a.period||"month"===a.period)throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.YearMonthIntervals);if("second"===a.period){if(!/^[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$/.test(r))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.IllegalInterval);SqlInterval_s._parseSecondsComponent(n,r)}else{if(!l.test(r))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.IllegalInterval);n[a.period]=parseFloat(r)}}else{if(SqlInterval_s._fixDefaults(a.start),SqlInterval_s._fixDefaults(a.end),"year"===a.start.period||"month"===a.start.period||"year"===a.end.period||"month"===a.end.period)throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.YearMonthIntervals);switch(a.start.period){case"day":switch(a.end.period){case"hour":if(o=new RegExp("^[0-9]{1,} [0-9]{1,}$"),!o.test(r))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.IllegalInterval);n[a.start.period]=parseFloat(r.split(" ")[0]),n[a.end.period]=parseFloat(r.split(" ")[1]);break;case"minute":if(o=new RegExp("^[0-9]{1,} [0-9]{1,2}:[0-9]{1,}$"),!o.test(r))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.IllegalInterval);{n[a.start.period]=parseFloat(r.split(" ")[0]);const e=r.split(" ")[1].split(":");n.hour=parseFloat(e[0]),n.minute=parseFloat(e[1])}break;case"second":if(o=new RegExp("^[0-9]{1,} [0-9]{1,2}:[0-9]{1,2}:[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$"),!o.test(r))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.IllegalInterval);{n[a.start.period]=parseFloat(r.split(" ")[0]);const e=r.split(" ")[1].split(":");n.hour=parseFloat(e[0]),n.minute=parseFloat(e[1]),SqlInterval_s._parseSecondsComponent(n,e[2])}break;default:throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.IllegalInterval)}break;case"hour":switch(a.end.period){case"minute":if(o=new RegExp("^[0-9]{1,}:[0-9]{1,}$"),!o.test(r))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.IllegalInterval);n.hour=parseFloat(r.split(":")[0]),n.minute=parseFloat(r.split(":")[1]);break;case"second":if(o=new RegExp("^[0-9]{1,}:[0-9]{1,2}:[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$"),!o.test(r))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.IllegalInterval);{const e=r.split(":");n.hour=parseFloat(e[0]),n.minute=parseFloat(e[1]),SqlInterval_s._parseSecondsComponent(n,e[2])}break;default:throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.IllegalInterval)}break;case"minute":if("second"!==a.end.period)throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.IllegalInterval);if(o=new RegExp("^[0-9]{1,}:[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$"),!o.test(r))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.IllegalInterval);{const e=r.split(":");n.minute=parseFloat(e[0]),SqlInterval_s._parseSecondsComponent(n,e[1])}break;default:throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.IllegalInterval)}}return n}valueInMilliseconds(){return("-"===this.op?-1:1)*(this.millis+1e3*this.second+60*this.minute*1e3+60*this.hour*60*1e3+24*this.day*60*60*1e3+this.month*(365/12)*24*60*60*1e3+365*this.year*24*60*60*1e3)}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/sql/UnknownTimeZone.js
var UnknownTimeZone = __webpack_require__(90709);
;// ../node_modules/@arcgis/core/core/sql/sqlDateParsingUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const l=/^(\d{1,2}):(\d{1,2}):(\d{1,2})$/,d=/^(\d{1,2}):(\d{1,2})$/,sqlDateParsingUtils_c=/^(\d{1,2}):(\d{1,2}):(\d{1,2}).([0-9]+)$/,u=/^(\d{4})-(\d{1,2})-(\d{1,2})$/,sqlDateParsingUtils_m=/^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?$/,I=/^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?[ ]{0,1}(\+|\-)(\d{1,2}):(\d{1,2})$/,w=/^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})?[ ]{0,1}(\+|\-)(\d{1,2}):(\d{1,2})$/,h=/^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})$/;function T(n,e){if(e instanceof luxon/* Zone */.bo)return e===UnknownTimeZone/* UnknownTimeZone */.GB.instance?luxon/* DateTime */.c9.fromMillis(n.getTime(),{zone:UnknownTimeZone/* UnknownTimeZone */.GB.instance}):luxon/* DateTime */.c9.fromJSDate(n,{zone:e});switch(e){case"system":case"local":case null:return luxon/* DateTime */.c9.fromJSDate(n);default:return"unknown"===e?.toLowerCase()?luxon/* DateTime */.c9.fromMillis(n.getTime(),{zone:UnknownTimeZone/* UnknownTimeZone */.GB.instance}):luxon/* DateTime */.c9.fromJSDate(n,{zone:e})}}function v(n){return"number"==typeof n}function y(n){return"string"==typeof n||n instanceof String}function S(n){return n instanceof SqlInterval_s}function sqlDateParsingUtils_x(n){return n instanceof Date}function j(n){return n instanceof luxon/* DateTime */.c9}function $(n){return n instanceof DateOnly/* DateOnly */.n}function z(n){return n instanceof TimeOnly/* TimeOnly */.k}function D(n){return n instanceof SqlTimestampOffset/* SqlTimeStampOffset */.g}function O(t){let r=l.exec(t);if(null!==r){const[,t,a,s]=r,i=TimeOnly/* TimeOnly */.k.fromParts(parseInt(t,10),parseInt(a,10),parseInt(s,10),0);if(null!==i)return i;throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidTime)}if(r=d.exec(t),null!==r){const[,t,a]=r,s=TimeOnly/* TimeOnly */.k.fromParts(parseInt(t,10),parseInt(a,10),0,0);if(null!==s)return s;throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidTime)}if(r=sqlDateParsingUtils_c.exec(t),null!==r){const[,t,a,s,i]=r,f=TimeOnly/* TimeOnly */.k.fromParts(parseInt(t,10),parseInt(a,10),parseInt(s,10),parseInt(i,10));if(null!==f)return f;throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidTime)}throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidTime)}function sqlDateParsingUtils_P(t,r,o=!1){let s=sqlDateParsingUtils_m.exec(t);if(null!==s){const[,t,a,o,f,l,d,c]=s,u=luxon/* DateTime */.c9.fromObject({year:parseInt(t,10),month:parseInt(a,10),day:parseInt(o,10),hour:parseInt(f,10),minute:parseInt(l,10),second:parseInt(d,10),millisecond:c?parseInt(c.replace(".",""),10):0},{zone:(0,UnknownTimeZone/* substituteUnknownTimezone */.Qo)(r)});if(!1===u.isValid)throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidTimeStamp);return u}if(s=I.exec(t),null!==s){const[,t,r,o,i,f,p,l,d,c,u]=s,m=SqlTimestampOffset/* SqlTimeStampOffset */.g.fromParts(parseInt(t,10),parseInt(r,10),parseInt(o,10),parseInt(i,10),parseInt(f,10),parseInt(p,10),l?parseInt(l.replace(".",""),10):0,"-"===d,parseInt(c,10),parseInt(u,10));if(!1===m.isValid)throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidTimeStamp);return m}if(s=w.exec(t),null!==s){const[,t,r,o,i,f,p,l,d]=s,c=SqlTimestampOffset/* SqlTimeStampOffset */.g.fromParts(parseInt(t,10),parseInt(r,10),parseInt(o,10),parseInt(i,10),parseInt(f,10),0,0,"-"===p,parseInt(l,10),parseInt(d,10));if(!1===c.isValid)throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidTimeStamp);return c}if(s=h.exec(t),null!==s){const[,t,a,o,f,l]=s,d=luxon/* DateTime */.c9.fromObject({year:parseInt(t,10),month:parseInt(a,10),day:parseInt(o,10),hour:parseInt(f,10),minute:parseInt(l,10),second:0},{zone:(0,UnknownTimeZone/* substituteUnknownTimezone */.Qo)(r)});if(!1===d.isValid)throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidTimeStamp);return d}if(s=u.exec(t),null!==s){const[,t,a,o]=s,f=luxon/* DateTime */.c9.fromObject({year:parseInt(t,10),month:parseInt(a,10),day:parseInt(o,10),hour:0,minute:0,second:0},{zone:(0,UnknownTimeZone/* substituteUnknownTimezone */.Qo)(r)});if(!1===f.isValid)throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidTimeStamp);return f}throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidTimeStamp)}function V(r,a){const o=u.exec(r);if(null===o)try{return sqlDateParsingUtils_P(r,a)}catch{throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidDate)}const[,s,i,f]=o,p=DateOnly/* DateOnly */.n.fromParts(parseInt(s,10),parseInt(i,10),parseInt(f,10));if(null===p)throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidDate);return p}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/string.js
var string = __webpack_require__(96274);
;// ../node_modules/@arcgis/core/core/sql/sqlCompareUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const sqlCompareUtils_l=321408e5,sqlCompareUtils_w=26784e5,p=864e5,sqlCompareUtils_d=36e5,sqlCompareUtils_m=6e4;function sqlCompareUtils_h(r){return!!j(r)||!!D(r)}function sqlCompareUtils_O(r){return!!j(r)||(!!$(r)||(!!D(r)||!!z(r)))}function sqlCompareUtils_v(o){if(j(o))return o.toMillis();if($(o))return o.toNumber();if(D(o))return o.toMilliseconds();throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidDataType)}function sqlCompareUtils_I(l,w,p,d){if(null==l||null==w)return null;if(v(l)){if(v(w))return sqlCompareUtils_D(l,w,p);if(y(w))return sqlCompareUtils_T(l,w,p);if(sqlCompareUtils_O(w))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator);if($(w))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}else if(y(l)){if(v(w))return M(l,w,p);if(y(w))return sqlCompareUtils_z(l,w,p);if(j(w))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator);if($(w))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator);if(z(w))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator);if(D(w))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}else if(j(l)){if(sqlCompareUtils_h(w)){if(l instanceof luxon/* DateTime */.c9&&(0,UnknownTimeZone/* isUnknownTimeZone */.Y4)(l.zone)){if(w instanceof luxon/* DateTime */.c9&&!1===(0,UnknownTimeZone/* isUnknownTimeZone */.Y4)(w.zone))return sqlCompareUtils_j(l,w,p);if(w instanceof SqlTimestampOffset/* SqlTimeStampOffset */.g)return sqlCompareUtils_j(l,w,p)}else if(w instanceof luxon/* DateTime */.c9&&(0,UnknownTimeZone/* isUnknownTimeZone */.Y4)(w.zone)){if(l instanceof luxon/* DateTime */.c9&&!1===(0,UnknownTimeZone/* isUnknownTimeZone */.Y4)(l.zone))return sqlCompareUtils_j(l,w,p);if(l instanceof SqlTimestampOffset/* SqlTimeStampOffset */.g)return sqlCompareUtils_j(l,w,p)}return sqlCompareUtils_D(sqlCompareUtils_v(l),sqlCompareUtils_v(w),p)}if(y(w))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator);if($(w))return N(l,w,p);if(z(w))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator);if(v(w))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}else if($(l)){if(D(w))return b(l,w,p);if(j(w))return x(l,w,p);if(y(w))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator);if($(w))return sqlCompareUtils_D(l.toNumber(),w.toNumber(),p);if(z(w))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator);if(v(w))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}else if(z(l)){if(z(w))return sqlCompareUtils_D(l.toNumber(),w.toNumber(),p);if(y(w))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator);if(v(w))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator);if($(w))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator);if(sqlCompareUtils_h(w))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}else if(D(l)){if(sqlCompareUtils_h(w))return w instanceof luxon/* DateTime */.c9&&(0,UnknownTimeZone/* isUnknownTimeZone */.Y4)(w.zone)?sqlCompareUtils_j(l,w,p):sqlCompareUtils_D(sqlCompareUtils_v(l),sqlCompareUtils_v(w),p);if(y(w))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator);if($(w))return sqlCompareUtils_y(l,w,p);if(z(w))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator);if(v(w))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}switch(p){case"<>":return l!==w;case"=":return l===w;case">":return l>w;case"<":return l<w;case">=":return l>=w;case"<=":return l<=w}}function sqlCompareUtils_D(r,e,t){switch(t){case"<>":return r!==e;case"=":return r===e;case">":return r>e;case"<":return r<e;case">=":return r>=e;case"<=":return r<=e}}function sqlCompareUtils_T(r,e,t){const n=parseFloat(e);if(!isNaN(n))return sqlCompareUtils_D(r,n,t);const i=r.toString();switch(t){case"<>":return i!==e;case"=":return i===e;case">":return i>e;case"<":return i<e;case">=":return i>=e;case"<=":return i<=e}}function M(r,e,t){const n=parseFloat(r);if(!isNaN(n))return sqlCompareUtils_D(n,e,t);const i=e.toString();switch(t){case"<>":return r!==i;case"=":return r===i;case">":return r>i;case"<":return r<i;case">=":return r>=i;case"<=":return r<=i}}function sqlCompareUtils_z(r,e,t){switch(t){case"<>":return r!==e;case"=":return r===e;case">":return r>e;case"<":return r<e;case">=":return r>=e;case"<=":return r<=e}}function N(r,e,t){const n=e.toDateTimeLuxon(r.zone);return sqlCompareUtils_D((r=r.startOf("day")).toMillis(),n.toMillis(),t)}function sqlCompareUtils_y(r,e,t){const n=e.toDateTimeLuxon(r.toDateTime().zone);return sqlCompareUtils_D((r=r.startOfDay()).toMilliseconds(),n.toMillis(),t)}function x(r,e,t){const n=r.toDateTimeLuxon(e.zone);return e=e.startOf("day"),sqlCompareUtils_D(n.toMillis(),e.toMillis(),t)}function b(r,e,t){const n=r.toDateTimeLuxon(e.toDateTime().zone);return e=e.startOfDay(),sqlCompareUtils_D(n.toMillis(),e.toMilliseconds(),t)}function sqlCompareUtils_j(r,e,t){r instanceof SqlTimestampOffset/* SqlTimeStampOffset */.g&&(r=r.toDateTime()),e instanceof SqlTimestampOffset/* SqlTimeStampOffset */.g&&(e=e.toDateTime());const n=L(r),i=L(e);switch(t){case"<>":return n!==i;case"=":return n===i;case">":return n>i;case"<":return n<i;case">=":return n>=i;case"<=":return n<=i}}function L(r){return r.year*sqlCompareUtils_l+r.month*sqlCompareUtils_w+r.day*p+r.hour*sqlCompareUtils_d+r.minute*sqlCompareUtils_m+1e3*r.second+r.millisecond}

;// ../node_modules/@arcgis/core/core/sql/StandardizedFunctions.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function StandardizedFunctions_w(e,t,r){const l=StandardizedFunctions_T[e.toLowerCase()];if(null==l)throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.FunctionNotRecognized);if(t.length<l.minParams||t.length>l.maxParams)throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidParameterCount,{name:e.toUpperCase()});return l.evaluate(t,r)}function C(a,n){const e=StandardizedFunctions_T[a.toLowerCase()];return null!=e&&n>=e.minParams&&n<=e.maxParams}function StandardizedFunctions_p(a){return"string"==typeof a||a instanceof String}function StandardizedFunctions_g(a){return!sqlDateParsingUtils_x(a)&&(!$(a)&&(!j(a)&&(!z(a)&&!D(a))))}function StandardizedFunctions_x(a){return $(a)||z(a)?a.toString():D(a)?a.toSQLValue():j(a)?0===a.millisecond?a.toFormat("yyyy-LL-dd HH:mm:ss"):a.toSQL({includeOffset:!1}):sqlDateParsingUtils_x(a)?StandardizedFunctions_x(luxon/* DateTime */.c9.fromJSDate(a)):a.toString()}function E(e){if(sqlDateParsingUtils_x(e))return DateOnly/* DateOnly */.n.fromDateJS(e);if(j(e))return DateOnly/* DateOnly */.n.fromParts(e.year,e.month,e.day);if($(e))return e;if(z(e))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.CannotCastValue);if(D(e)){if(null===DateOnly/* DateOnly */.n.fromParts(e.year,e.month,e.day))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.CannotCastValue)}if(StandardizedFunctions_p(e)){const a=DateOnly/* DateOnly */.n.fromReader(e);if(null!==a&&a.isValid)return a}throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.CannotCastValue)}function StandardizedFunctions_M(e,t,r){if(sqlDateParsingUtils_x(e))return T(e,t);if(j(e))return e;if($(e))return e.toDateTimeLuxon("unknown");if(z(e))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.CannotCastValue);if(D(e))return e;if(StandardizedFunctions_p(e))return sqlDateParsingUtils_P(e,"unknown",r);throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.CannotCastValue)}function StandardizedFunctions_v(e){if(sqlDateParsingUtils_x(e))return TimeOnly/* TimeOnly */.k.fromDateJS(e);if(j(e))return TimeOnly/* TimeOnly */.k.fromDateTime(e);if($(e))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.CannotCastValue);if(z(e))return e;if(D(e))return TimeOnly/* TimeOnly */.k.fromSqlTimeStampOffset(e);if(StandardizedFunctions_p(e))return O(e);throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.CannotCastValue)}const StandardizedFunctions_T={extract:{minParams:2,maxParams:2,evaluate:([e,t])=>{if(null==t)return null;if(sqlDateParsingUtils_x(t))switch(e.toUpperCase()){case"SECOND":return t.getSeconds();case"MINUTE":return t.getMinutes();case"HOUR":return t.getHours();case"DAY":return t.getDate();case"MONTH":return t.getMonth()+1;case"YEAR":return t.getFullYear();case"TIMEZONE_HOUR":case"TIMEZONE_MINUTE":return 0}else if(j(t))switch(e.toUpperCase()){case"SECOND":return t.second;case"MINUTE":return t.minute;case"HOUR":return t.hour;case"DAY":return t.day;case"MONTH":return t.month;case"YEAR":return t.year;case"TIMEZONE_HOUR":case"TIMEZONE_MINUTE":throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidFunctionParameters,{function:"EXTRACT"})}else if($(t))switch(e.toUpperCase()){case"DAY":return t.day;case"MONTH":return t.month;case"YEAR":return t.year;case"TIMEZONE_HOUR":case"TIMEZONE_MINUTE":throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidFunctionParameters,{function:"EXTRACT"})}else if(z(t))switch(e.toUpperCase()){case"SECOND":return t.second;case"MINUTE":return t.minute;case"HOUR":return t.hour}else if(D(t))switch(e.toUpperCase()){case"SECOND":return t.second;case"MINUTE":return t.minute;case"HOUR":return t.hour;case"DAY":return t.day;case"MONTH":return t.month;case"YEAR":return t.year;case"TIMEZONE_HOUR":return t.timezoneOffsetHour;case"TIMEZONE_MINUTE":return t.timezoneOffsetMinutes}throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidFunctionParameters,{function:"EXTRACT"})}},substring:{minParams:2,maxParams:3,evaluate:a=>{if(2===a.length){const[n,e]=a;return null==n||null==e?null:n.toString().substring(e-1)}if(3===a.length){const[n,e,t]=a;return null==n||null==e||null==t?null:t<=0?"":n.toString().substring(e-1,e+t-1)}}},position:{minParams:2,maxParams:2,evaluate:([a,n])=>null==a||null==n?null:n.indexOf(a)+1},trim:{minParams:2,maxParams:3,evaluate:t=>{const r=3===t.length,l=r?t[1]:" ",s=r?t[2]:t[1];if(null==l||null==s)return null;const u=`(${(0,string/* escapeRegExpString */.Cj)(l)})`;switch(t[0]){case"BOTH":return s.replaceAll(new RegExp(`^${u}*|${u}*$`,"g"),"");case"LEADING":return s.replaceAll(new RegExp(`^${u}*`,"g"),"");case"TRAILING":return s.replaceAll(new RegExp(`${u}*$`,"g"),"")}throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidFunctionParameters,{function:"TRIM"})}},abs:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.abs(a[0])},ceiling:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.ceil(a[0])},floor:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.floor(a[0])},log:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.log(a[0])},log10:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.log(a[0])*Math.LOG10E},sin:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.sin(a[0])},cos:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.cos(a[0])},tan:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.tan(a[0])},asin:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.asin(a[0])},acos:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.acos(a[0])},atan:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.atan(a[0])},sign:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:a[0]>0?1:a[1]<0?-1:0},power:{minParams:2,maxParams:2,evaluate:a=>null==a[0]||null==a[1]?null:a[0]**a[1]},mod:{minParams:2,maxParams:2,evaluate:a=>null==a[0]||null==a[1]?null:a[0]%a[1]},round:{minParams:1,maxParams:2,evaluate:a=>{const n=a[0],e=2===a.length?10**a[1]:1;return null==n?null:Math.round(n*e)/e}},truncate:{minParams:1,maxParams:2,evaluate:a=>null==a[0]?null:1===a.length?parseInt(a[0].toFixed(0),10):parseFloat(a[0].toFixed(a[1]))},char_length:{minParams:1,maxParams:1,evaluate:a=>StandardizedFunctions_p(a[0])?a[0].length:0},concat:{minParams:1,maxParams:1/0,evaluate:a=>{let n="";for(let e=0;e<a.length;e++){if(null==a[e])return null;n+=a[e].toString()}return n}},lower:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:a[0].toString().toLowerCase()},upper:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:a[0].toString().toUpperCase()},coalesce:{minParams:1,maxParams:1/0,evaluate:a=>{for(const n of a)if(null!==n)return n;return null}},cosh:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.cosh(a[0])},sinh:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.sinh(a[0])},tanh:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.tanh(a[0])},nullif:{minParams:2,maxParams:2,evaluate:(a,n)=>sqlCompareUtils_I(a[0],a[1],"=")?null:a[0]},cast:{minParams:2,maxParams:2,evaluate:(e,t)=>{const r=e[0],l=e[1];if(null===r)return null;switch(l.type){case"integer":{if(!StandardizedFunctions_g(r))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.CannotCastValue);const e=parseInt(r,10);if(isNaN(e))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.CannotCastValue);return e}case"smallint":{if(!StandardizedFunctions_g(r))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.CannotCastValue);const e=parseInt(r,10);if(isNaN(e))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.CannotCastValue);if(e>32767||e<-32767)throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.CannotCastValue);return e}case"float":case"real":{if(!StandardizedFunctions_g(r))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.CannotCastValue);const e=parseFloat(r);if(isNaN(e))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.CannotCastValue);return e}case"time":return StandardizedFunctions_v(r);case"date":return E(r);case"timestamp":return StandardizedFunctions_M(r,t,!0===l.withtimezone);case"varchar":{const e=StandardizedFunctions_x(r);if(e.length>l.size)throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.CannotCastValue);return e}default:throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidDataType)}}}};

;// ../node_modules/@arcgis/core/core/sql/sqlArithmeticUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function sqlArithmeticUtils_d(u,d,sn,un){if("||"===u)return StandardizedFunctions_w("concat",[d,sn],un);if(null===d||null===sn)return null;if(v(d)){if(v(sn))return sqlArithmeticUtils_f(d,sn,u);if(S(sn))return sqlArithmeticUtils_M(d,sn,u);if(z(sn))return U();if($(sn))return q();if(D(sn))return sqlArithmeticUtils_N();if(j(sn))return sqlArithmeticUtils_z();if(y(sn))return sqlArithmeticUtils_C(d,sn,u);throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}if($(d)){if(v(sn))return sqlArithmeticUtils_x(d,sn,u);if(S(sn))return sqlArithmeticUtils_T(d,sn,u);if(z(sn))return sqlArithmeticUtils_E();if($(sn))return B(d,sn,u);if(D(sn))return A(d,sn,u);if(j(sn))return k(d,sn,u);if(y(sn))return _();throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}if(z(d)){if(v(sn))return sqlArithmeticUtils_L(d,sn,u);if(S(sn))return sqlArithmeticUtils_p(d,sn,u);if(z(sn))return W();if($(sn))return R();if(D(sn))return sqlArithmeticUtils_V();if(j(sn))return Q();if(y(sn))return nn();throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}if(S(d)){if(v(sn))return sqlArithmeticUtils_m(d,sn,u);if(S(sn))return sqlArithmeticUtils_O(d,sn,u);if(z(sn))return sqlArithmeticUtils_v(d,sn,u);if($(sn))return sqlArithmeticUtils_I(d,sn,u);if(D(sn))return sqlArithmeticUtils_h(d,sn,u);if(j(sn))return sqlArithmeticUtils_w(d,sn,u);if(y(sn))return sqlArithmeticUtils_P();throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}if(j(d)){if(v(sn))return sqlArithmeticUtils_y(d,sn,u);if(S(sn))return sqlArithmeticUtils_D(d,sn,u);if(z(sn))return sqlArithmeticUtils_$();if($(sn))return Y(d,sn,u);if(D(sn))return Z(d,sn,u);if(j(sn))return X(d,sn,u);if(y(sn))return rn();throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}if(D(d)){if(v(sn))return sqlArithmeticUtils_j(d,sn,u);if(S(sn))return F(d,sn,u);if(z(sn))return G();if($(sn))return H(d,sn,u);if(D(sn))return K(d,sn,u);if(j(sn))return J(d,sn,u);if(y(sn))return en();throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}if(y(d)){if(v(sn))return sqlArithmeticUtils_S(d,sn,u);if(S(sn))return sqlArithmeticUtils_b();if(z(sn))return tn();if($(sn))return on();if(D(sn))return ln();if(j(sn))return an();if(y(sn))return sqlArithmeticUtils_g(d,sn,u);throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_f(e,i,t){switch(t){case"+":return e+i;case"-":return e-i;case"*":return e*i;case"/":return e/i}throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_w(e,i,t){switch(t){case"+":return i.plus({milliseconds:e.valueInMilliseconds()});case"-":return e.valueInMilliseconds()-i.toMillis()}throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_v(e,i,t){if("+"===t)return i.plus("milliseconds",e.valueInMilliseconds());throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_I(e,i,t){if("+"===t)return i.plus("milliseconds",e.valueInMilliseconds());throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_p(e,i,t){switch(t){case"+":return e.plus("milliseconds",i.valueInMilliseconds());case"-":return e.plus("milliseconds",-1*i.valueInMilliseconds())}throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_h(e,i,t){if("+"===t)return i.addMilliseconds(e.valueInMilliseconds());throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_O(e,i,t){switch(t){case"+":return SqlInterval_s.createFromMilliseconds(e.valueInMilliseconds()+i.valueInMilliseconds());case"-":return SqlInterval_s.createFromMilliseconds(e.valueInMilliseconds()-i.valueInMilliseconds());case"*":return SqlInterval_s.createFromMilliseconds(e.valueInMilliseconds()*i.valueInMilliseconds());case"/":return SqlInterval_s.createFromMilliseconds(e.valueInMilliseconds()/i.valueInMilliseconds())}throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_m(e,i,t){switch(t){case"+":return SqlInterval_s.createFromMilliseconds(e.valueInMilliseconds()+i);case"-":return SqlInterval_s.createFromMilliseconds(e.valueInMilliseconds()-i);case"*":return SqlInterval_s.createFromMilliseconds(e.valueInMilliseconds()*i);case"/":return SqlInterval_s.createFromMilliseconds(e.valueInMilliseconds()/i)}throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_M(e,i,t){switch(t){case"+":return SqlInterval_s.createFromMilliseconds(e+i.valueInMilliseconds());case"-":return SqlInterval_s.createFromMilliseconds(e-i.valueInMilliseconds());case"*":return SqlInterval_s.createFromMilliseconds(e*i.valueInMilliseconds());case"/":return SqlInterval_s.createFromMilliseconds(e/i.valueInMilliseconds())}throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_T(e,i,t){switch(t){case"+":return e.plus("milliseconds",i.valueInMilliseconds());case"-":return e.plus("milliseconds",-1*i.valueInMilliseconds())}throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_D(e,i,t){switch(t){case"+":return e.plus({milliseconds:i.valueInMilliseconds()});case"-":return e.minus({milliseconds:i.valueInMilliseconds()})}throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function F(e,i,t){switch(t){case"+":return e.addMilliseconds(i.valueInMilliseconds());case"-":return e.addMilliseconds(-1*i.valueInMilliseconds())}throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_y(e,i,t){const o=1e3*i*24*60*60;switch(t){case"+":return e.plus({milliseconds:o});case"-":return e.minus({milliseconds:o})}throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_x(e,i,t){const o=1e3*i*24*60*60;switch(t){case"+":return e.plus("milliseconds",o);case"-":return e.plus("milliseconds",-1*o)}throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_L(e,i,t){const o=1e3*i*24*60*60;switch(t){case"+":return e.plus("milliseconds",o);case"-":return e.plus("milliseconds",-1*o)}throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_z(e,i,t){throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_j(e,i,t){const o=1e3*i*24*60*60;switch(t){case"+":return e.addMilliseconds(o);case"-":return e.addMilliseconds(-1*o)}throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_N(e,i,t){throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function U(e,i,t){throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function q(e,i,t){throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_C(e,i,t){const o=parseFloat(i);if(isNaN(o))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator);return sqlArithmeticUtils_f(e,o,t)}function sqlArithmeticUtils_S(e,i,t){const o=parseFloat(e);if(isNaN(o))throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator);return sqlArithmeticUtils_f(o,i,t)}function sqlArithmeticUtils_g(e,i,t){if("+"===t)return e+i;throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_P(e,i,t){throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_b(e,i,t){throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function k(e,i,t){if("-"===t)return e.toDateTimeLuxon(i.zone).diff(i).as("days");throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function A(e,i,t){if("-"===t)return e.toDateTimeLuxon(i.toDateTime().zone).diff(i.toDateTime()).as("days");throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function B(e,i,t){if("-"===t)return e.toDateTimeLuxon("UTC").diff(i.toDateTimeLuxon("UTC")).as("days");throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_E(e,i,t){throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function G(e,i,t){throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function H(e,i,t){if("-"===t)return e.toDateTime().diff(i.toDateTimeLuxon(e.toDateTime().zone)).as("days");throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function J(e,i,t){if("-"===t)return e.toDateTime().diff(i).as("days");throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function K(e,i,t){if("-"===t)return e.toDateTime().diff(i.toDateTime()).as("days");throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function Q(e,i,t){throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function R(e,i,t){throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_V(e,i,t){throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function W(e,i,t){throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function X(e,i,t){if("-"===t)return e.diff(i).as("days");throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function Y(e,i,t){if("-"===t)return e.diff(i.toDateTimeLuxon(e.zone)).as("days");throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function Z(e,i,t){if("-"===t)return e.diff(i.toDateTime()).as("days");throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_$(e,i,t){throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function _(e,i,t){throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function nn(e,i,t){throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function rn(e,i,t){throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function en(e,i,t){throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function tn(e,i,t){throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function on(e,i,t){throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function an(e,i,t){throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}function ln(e,i,t){throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.InvalidOperator)}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/_commonjsHelpers.js
var _commonjsHelpers = __webpack_require__(42784);
;// ../node_modules/@arcgis/core/core/sql/WhereGrammar.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var t,n,e={exports:{}};e.exports,n=function(){function r(r,t){function n(){this.constructor=r}n.prototype=t.prototype,r.prototype=new n}function t(r,n,e,u){var o=Error.call(this,r);return Object.setPrototypeOf&&Object.setPrototypeOf(o,t.prototype),o.expected=n,o.found=e,o.location=u,o.name="SyntaxError",o}function n(r,t,n){return n=n||" ",r.length>t?r:(t-=r.length,r+(n+=n.repeat(t)).slice(0,t))}function e(r,n){var e,u={},o=(n=void 0!==n?n:{}).grammarSource,i={start:Bu},a=Bu,s="!",c="=",f=">=",l=">",v="<=",p="<>",d="<",h="!=",y="+",b="-",A="||",C="*",g="/",m="@",E="'",L="N'",T="''",w=".",x="null",N="true",I="false",O="in",R="is",S="like",F="escape",M="not",H="and",U="or",$="between",_="from",D="for",j="substring",Z="extract",z="trim",P="position",B="timestamp",G="date",V="time",W="leading",Y="trailing",k="both",q="cast",K="as",X="integer",J="smallint",Q="float",rr="real",tr="varchar",nr="to",er="interval",ur="year",or="timezone_hour",ir="timezone_minute",ar="month",sr="day",cr="hour",fr="minute",lr="second",vr="case",pr="end",dr="when",hr="then",yr="else",br=",",Ar="(",Cr=")",gr="`",mr=/^[A-Za-z_\x80-\uFFFF]/,Er=/^[A-Za-z0-9_]/,Lr=/^[A-Za-z0-9_.\x80-\uFFFF]/,Tr=/^["]/,wr=/^[^']/,xr=/^[0-9]/,Nr=/^[eE]/,Ir=/^[+\-]/,Or=/^[ \t\n\r]/,Rr=/^[^`]/,Sr=Uu("!",!1),Fr=Uu("=",!1),Mr=Uu(">=",!1),Hr=Uu(">",!1),Ur=Uu("<=",!1),$r=Uu("<>",!1),_r=Uu("<",!1),Dr=Uu("!=",!1),jr=Uu("+",!1),Zr=Uu("-",!1),zr=Uu("||",!1),Pr=Uu("*",!1),Br=Uu("/",!1),Gr=$u([["A","Z"],["a","z"],"_",["","￿"]],!1,!1),Vr=$u([["A","Z"],["a","z"],["0","9"],"_"],!1,!1),Wr=$u([["A","Z"],["a","z"],["0","9"],"_",".",["","￿"]],!1,!1),Yr=$u(['"'],!1,!1),kr=Uu("@",!1),qr=Uu("'",!1),Kr=Uu("N'",!1),Xr=Uu("''",!1),Jr=$u(["'"],!0,!1),Qr=Uu(".",!1),rt=$u([["0","9"]],!1,!1),tt=$u(["e","E"],!1,!1),nt=$u(["+","-"],!1,!1),et=Uu("NULL",!0),ut=Uu("TRUE",!0),ot=Uu("FALSE",!0),it=Uu("IN",!0),at=Uu("IS",!0),st=Uu("LIKE",!0),ct=Uu("ESCAPE",!0),ft=Uu("NOT",!0),lt=Uu("AND",!0),vt=Uu("OR",!0),pt=Uu("BETWEEN",!0),dt=Uu("FROM",!0),ht=Uu("FOR",!0),yt=Uu("SUBSTRING",!0),bt=Uu("EXTRACT",!0),At=Uu("TRIM",!0),Ct=Uu("POSITION",!0),gt=Uu("TIMESTAMP",!0),mt=Uu("DATE",!0),Et=Uu("TIME",!0),Lt=Uu("LEADING",!0),Tt=Uu("TRAILING",!0),wt=Uu("BOTH",!0),xt=Uu("CAST",!0),Nt=Uu("AS",!0),It=Uu("INTEGER",!0),Ot=Uu("SMALLINT",!0),Rt=Uu("FLOAT",!0),St=Uu("REAL",!0),Ft=Uu("VARCHAR",!0),Mt=Uu("TO",!0),Ht=Uu("INTERVAL",!0),Ut=Uu("YEAR",!0),$t=Uu("TIMEZONE_HOUR",!0),_t=Uu("TIMEZONE_MINUTE",!0),Dt=Uu("MONTH",!0),jt=Uu("DAY",!0),Zt=Uu("HOUR",!0),zt=Uu("MINUTE",!0),Pt=Uu("SECOND",!0),Bt=Uu("CASE",!0),Gt=Uu("END",!0),Vt=Uu("WHEN",!0),Wt=Uu("THEN",!0),Yt=Uu("ELSE",!0),kt=Uu(",",!1),qt=Uu("(",!1),Kt=Uu(")",!1),Xt=$u([" ","\t","\n","\r"],!1,!1),Jt=Uu("`",!1),Qt=$u(["`"],!0,!1),rn=function(r){return r},tn=function(r,t){var n={type:"expression-list"},e=ca(r,t);return n.value=e,n},nn=function(r,t){return fa(r,t)},en=function(r,t){return fa(r,t)},un=function(r){return ia("NOT",r)},on=function(r,t){return""==t||null==t||null==t?r:"arithmetic"==t.type?fa(r,t.tail):aa(t.op,r,t.right,t.escape)},an=function(r){return{type:"arithmetic",tail:r}},sn=function(r,t){return{op:r+"NOT",right:t}},cn=function(r,t){return{op:r,right:t}},fn=function(r,t,n){return{op:"NOT"+r,right:{type:"expression-list",value:[t,n]}}},ln=function(r,t,n){return{op:r,right:{type:"expression-list",value:[t,n]}}},vn=function(r){return r[0]+" "+r[2]},pn=function(r){return r[0]+" "+r[2]},dn=function(r,t,n){return{op:r,right:t,escape:n.value}},hn=function(r,t){return{op:r,right:t,escape:""}},yn=function(r,t){return{op:r,right:t}},bn=function(r){return{op:r,right:{type:"expression-list",value:[]}}},An=function(r,t){return{op:r,right:t}},Cn=function(r,t){return fa(r,t)},gn=function(r,t){return fa(r,t)},mn=function(r){return r.paren=!0,r},En=function(r){return/^CURRENT_DATE$/i.test(r)?{type:"current-time",mode:"date"}:/^CURRENT_TIMESTAMP$/i.test(r)?{type:"current-time",mode:"timestamp"}:{type:"column-reference",table:"",column:r}},Ln=function(r){return{type:"column-reference",table:"",column:r,delimited:!0}},Tn=function(r){return r},wn=function(r,t){return r+t.join("")},xn=function(r,t){return r+t.join("")},Nn=function(r){return r},In=function(r){return r.join("")},On=function(){return'"'},Rn=function(r){return{type:"parameter",value:r[1]}},Sn=function(r,t){return{type:"function",name:"extract",args:{type:"expression-list",value:[{type:"string",value:r},t]}}},Fn=function(r,t,n){return{type:"function",name:"substring",args:{type:"expression-list",value:n?[r,t,n[2]]:[r,t]}}},Mn=function(r,t){return{type:"function",name:"cast",args:{type:"expression-list",value:[r,t]}}},Hn=function(){return{type:"data-type",value:{type:"integer"}}},Un=function(){return{type:"data-type",value:{type:"smallint"}}},$n=function(){return{type:"data-type",value:{type:"float"}}},_n=function(){return{type:"data-type",value:{type:"real"}}},Dn=function(){return{type:"data-type",value:{type:"date"}}},jn=function(){return{type:"data-type",value:{type:"timestamp"}}},Zn=function(){return{type:"data-type",value:{type:"time"}}},zn=function(r){return{type:"data-type",value:{type:"varchar",size:parseInt(r)}}},Pn=function(r,t,n){return{type:"function",name:"trim",args:{type:"expression-list",value:[{type:"string",value:r??"BOTH"},t,n]}}},Bn=function(r,t){return{type:"function",name:"trim",args:{type:"expression-list",value:[{type:"string",value:r??"BOTH"},t]}}},Gn=function(r,t){return{type:"function",name:"position",args:{type:"expression-list",value:[r,t]}}},Vn=function(r,t){return{type:"function",name:r,args:t||{type:"expression-list",value:[]}}},Wn=function(r){return"string"===r.type&&la(r.value),{type:"timestamp",value:r.value}},Yn=function(r){return"string"===r.type&&va(r.value),{type:"time",value:r.value}},kn=function(r,t,n){return{type:"interval",value:t,qualifier:n,op:r}},qn=function(r,t){return{type:"interval",value:r,qualifier:t,op:""}},Kn=function(r,t){return{type:"interval-qualifier",start:r,end:t}},Xn=function(r,t){return{type:"interval-period",period:r.value,precision:t,secondary:null}},Jn=function(r){return{type:"interval-period",period:r.value,precision:null,secondary:null}},Qn=function(r){return{type:"interval-period",period:r.value,precision:null,secondary:null}},re=function(r,t){return{type:"interval-period",period:"second",precision:r,secondary:t}},te=function(r){return{type:"interval-period",period:"second",precision:r,secondary:null}},ne=function(){return{type:"interval-period",period:"second",precision:null,secondary:null}},ee=function(r,t){return{type:"interval-period",period:r.value,precision:t,secondary:null}},ue=function(r){return{type:"interval-period",period:r.value,precision:null,secondary:null}},oe=function(r,t){return{type:"interval-period",period:"second",precision:r,secondary:t}},ie=function(r){return{type:"interval-period",period:"second",precision:r,secondary:null}},ae=function(){return{type:"interval-period",period:"second",precision:null,secondary:null}},se=function(){return{type:"string",value:"day"}},ce=function(){return{type:"string",value:"hour"}},fe=function(){return{type:"string",value:"minute"}},le=function(){return{type:"string",value:"month"}},ve=function(){return{type:"string",value:"year"}},pe=function(r){return parseFloat(r)},de=function(r){return parseFloat(r)},he=function(r){return"string"===r.type&&pa(r.value),{type:"date",value:r.value}},ye=function(){return{type:"null",value:null}},be=function(){return{type:"boolean",value:!0}},Ae=function(){return{type:"boolean",value:!1}},Ce=function(){return"'"},ge=function(r){return{type:"string",value:r.join("")}},me=function(r,t){return{type:"case-expression",format:"simple",operand:r,clauses:t,else:null}},Ee=function(r,t,n){return{type:"case-expression",format:"simple",operand:r,clauses:t,else:n.value}},Le=function(r){return{type:"case-expression",format:"searched",clauses:r,else:null}},Te=function(r,t){return{type:"case-expression",format:"searched",clauses:r,else:t.value}},we=function(r,t){return{type:"when-clause",operand:r,value:t}},xe=function(r,t){return{type:"when-clause",operand:r,value:t}},Ne=function(r){return{type:"else-clause",value:r}},Ie=function(r){return{type:"number",value:r}},Oe=function(r,t,n){return parseFloat(r+t+n)},Re=function(r,t){return parseFloat(r+t)},Se=function(r,t){return parseFloat(r+t)},Fe=function(r){return parseFloat(r)},Me=function(r,t){return r[0]+t},He=function(r){return"."+(null!=r?r:"")},Ue=function(r,t){return r+t},$e=function(r){return r.join("")},_e=function(r,t){return"e"+(null===t?"":t)},De=function(){return"IN"},je=function(){return"IS"},Ze=function(){return"LIKE"},ze=function(){return"ESCAPE"},Pe=function(){return"NOT"},Be=function(){return"AND"},Ge=function(){return"OR"},Ve=function(){return"BETWEEN"},We=function(){return"FROM"},Ye=function(){return"FOR"},ke=function(){return"SUBSTRING"},qe=function(){return"EXTRACT"},Ke=function(){return"TRIM"},Xe=function(){return"POSITION"},Je=function(){return"TIMESTAMP"},Qe=function(){return"DATE"},ru=function(){return"TIME"},tu=function(){return"LEADING"},nu=function(){return"TRAILING"},eu=function(){return"BOTH"},uu=function(){return"CAST"},ou=function(){return"AS"},iu=function(){return"INTEGER"},au=function(){return"SMALLINT"},su=function(){return"FLOAT"},cu=function(){return"REAL"},fu=function(){return"VARCHAR"},lu=function(){return"TO"},vu=function(){return"INTERVAL"},pu=function(){return"YEAR"},du=function(){return"TIMEZONE_HOUR"},hu=function(){return"TIMEZONE_MINUTE"},yu=function(){return"MONTH"},bu=function(){return"DAY"},Au=function(){return"HOUR"},Cu=function(){return"MINUTE"},gu=function(){return"SECOND"},mu=function(){return"CASE"},Eu=function(){return"END"},Lu=function(){return"WHEN"},Tu=function(){return"THEN"},wu=function(){return"ELSE"},xu=function(r){return r},Nu=function(r){return r.join("")},Iu=0,Ou=0,Ru=[{line:1,column:1}],Su=0,Fu=[],Mu=0;if("startRule"in n){if(!(n.startRule in i))throw new Error("Can't start parsing from rule \""+n.startRule+'".');a=i[n.startRule]}function Hu(r,t){throw zu(r,t=void 0!==t?t:ju(Ou,Iu))}function Uu(r,t){return{type:"literal",text:r,ignoreCase:t}}function $u(r,t,n){return{type:"class",parts:r,inverted:t,ignoreCase:n}}function _u(){return{type:"end"}}function Du(t){var n,e=Ru[t];if(e)return e;for(n=t-1;!Ru[n];)n--;for(e={line:(e=Ru[n]).line,column:e.column};n<t;)10===r.charCodeAt(n)?(e.line++,e.column=1):e.column++,n++;return Ru[t]=e,e}function ju(r,t,n){var e=Du(r),u=Du(t),i={source:o,start:{offset:r,line:e.line,column:e.column},end:{offset:t,line:u.line,column:u.column}};return n&&o&&"function"==typeof o.offset&&(i.start=o.offset(i.start),i.end=o.offset(i.end)),i}function Zu(r){Iu<Su||(Iu>Su&&(Su=Iu,Fu=[]),Fu.push(r))}function zu(r,n){return new t(r,null,null,n)}function Pu(r,n,e){return new t(t.buildMessage(r,n),r,n,e)}function Bu(){var r,t;return r=Iu,ea(),(t=Vu())!==u?(ea(),Ou=r,r=rn(t)):(Iu=r,r=u),r}function Gu(){var r,t,n,e,o,i,a,s;if(r=Iu,(t=Vu())!==u){for(n=[],e=Iu,o=ea(),(i=ra())!==u?(a=ea(),(s=Vu())!==u?e=o=[o,i,a,s]:(Iu=e,e=u)):(Iu=e,e=u);e!==u;)n.push(e),e=Iu,o=ea(),(i=ra())!==u?(a=ea(),(s=Vu())!==u?e=o=[o,i,a,s]:(Iu=e,e=u)):(Iu=e,e=u);Ou=r,r=tn(t,n)}else Iu=r,r=u;return r}function Vu(){var r,t,n,e,o,i,a,s;if(r=Iu,(t=Wu())!==u){for(n=[],e=Iu,o=ea(),(i=Ai())!==u?(a=ea(),(s=Wu())!==u?e=o=[o,i,a,s]:(Iu=e,e=u)):(Iu=e,e=u);e!==u;)n.push(e),e=Iu,o=ea(),(i=Ai())!==u?(a=ea(),(s=Wu())!==u?e=o=[o,i,a,s]:(Iu=e,e=u)):(Iu=e,e=u);Ou=r,r=nn(t,n)}else Iu=r,r=u;return r}function Wu(){var r,t,n,e,o,i,a,s;if(r=Iu,(t=Yu())!==u){for(n=[],e=Iu,o=ea(),(i=bi())!==u?(a=ea(),(s=Yu())!==u?e=o=[o,i,a,s]:(Iu=e,e=u)):(Iu=e,e=u);e!==u;)n.push(e),e=Iu,o=ea(),(i=bi())!==u?(a=ea(),(s=Yu())!==u?e=o=[o,i,a,s]:(Iu=e,e=u)):(Iu=e,e=u);Ou=r,r=en(t,n)}else Iu=r,r=u;return r}function Yu(){var t,n,e,o,i;return t=Iu,(n=yi())===u&&(n=Iu,33===r.charCodeAt(Iu)?(e=s,Iu++):(e=u,0===Mu&&Zu(Sr)),e!==u?(o=Iu,Mu++,61===r.charCodeAt(Iu)?(i=c,Iu++):(i=u,0===Mu&&Zu(Fr)),Mu--,i===u?o=void 0:(Iu=o,o=u),o!==u?n=e=[e,o]:(Iu=n,n=u)):(Iu=n,n=u)),n!==u?(e=ea(),(o=Yu())!==u?(Ou=t,t=un(o)):(Iu=t,t=u)):(Iu=t,t=u),t===u&&(t=ku()),t}function ku(){var r,t,n;return r=Iu,(t=uo())!==u?(ea(),(n=qu())===u&&(n=null),Ou=r,r=on(t,n)):(Iu=r,r=u),r}function qu(){var r;return(r=Ku())===u&&(r=eo())===u&&(r=Qu())===u&&(r=Ju())===u&&(r=no()),r}function Ku(){var r,t,n,e,o,i,a;if(r=Iu,t=[],n=Iu,e=ea(),(o=Xu())!==u?(i=ea(),(a=uo())!==u?n=e=[e,o,i,a]:(Iu=n,n=u)):(Iu=n,n=u),n!==u)for(;n!==u;)t.push(n),n=Iu,e=ea(),(o=Xu())!==u?(i=ea(),(a=uo())!==u?n=e=[e,o,i,a]:(Iu=n,n=u)):(Iu=n,n=u);else t=u;return t!==u&&(Ou=r,t=an(t)),r=t}function Xu(){var t;return r.substr(Iu,2)===f?(t=f,Iu+=2):(t=u,0===Mu&&Zu(Mr)),t===u&&(62===r.charCodeAt(Iu)?(t=l,Iu++):(t=u,0===Mu&&Zu(Hr)),t===u&&(r.substr(Iu,2)===v?(t=v,Iu+=2):(t=u,0===Mu&&Zu(Ur)),t===u&&(r.substr(Iu,2)===p?(t=p,Iu+=2):(t=u,0===Mu&&Zu($r)),t===u&&(60===r.charCodeAt(Iu)?(t=d,Iu++):(t=u,0===Mu&&Zu(_r)),t===u&&(61===r.charCodeAt(Iu)?(t=c,Iu++):(t=u,0===Mu&&Zu(Fr)),t===u&&(r.substr(Iu,2)===h?(t=h,Iu+=2):(t=u,0===Mu&&Zu(Dr)))))))),t}function Ju(){var r,t,n,e;return r=Iu,(t=pi())!==u?(ea(),(n=yi())!==u?(ea(),(e=uo())!==u?(Ou=r,r=sn(t,e)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u),r===u&&(r=Iu,(t=pi())!==u?(ea(),(n=uo())!==u?(Ou=r,r=cn(t,n)):(Iu=r,r=u)):(Iu=r,r=u)),r}function Qu(){var r,t,n,e,o,i;return r=Iu,(t=yi())!==u?(ea(),(n=Ci())!==u?(ea(),(e=uo())!==u?(ea(),(o=bi())!==u?(ea(),(i=uo())!==u?(Ou=r,r=fn(n,e,i)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u),r===u&&(r=Iu,(t=Ci())!==u?(ea(),(n=uo())!==u?(ea(),(e=bi())!==u?(ea(),(o=uo())!==u?(Ou=r,r=ln(t,n,o)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)),r}function ro(){var r,t,n,e,o;return r=Iu,t=Iu,(n=yi())!==u?(e=ea(),(o=di())!==u?t=n=[n,e,o]:(Iu=t,t=u)):(Iu=t,t=u),t!==u&&(Ou=r,t=vn(t)),(r=t)===u&&(r=di()),r}function to(){var r,t,n,e,o;return r=Iu,t=Iu,(n=yi())!==u?(e=ea(),(o=vi())!==u?t=n=[n,e,o]:(Iu=t,t=u)):(Iu=t,t=u),t!==u&&(Ou=r,t=pn(t)),(r=t)===u&&(r=vi()),r}function no(){var r,t,n,e;return r=Iu,(t=ro())!==u?(ea(),(n=Yo())!==u?(ea(),hi()!==u?(ea(),(e=ko())!==u?(Ou=r,r=dn(t,n,e)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u),r===u&&(r=Iu,(t=ro())!==u?(ea(),(n=Yo())!==u?(Ou=r,r=hn(t,n)):(Iu=r,r=u)):(Iu=r,r=u)),r}function eo(){var r,t,n,e;return r=Iu,(t=to())!==u?(ea(),(n=ta())!==u?(ea(),(e=Gu())!==u?(ea(),na()!==u?(Ou=r,r=yn(t,e)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u),r===u&&(r=Iu,(t=to())!==u?(ea(),(n=ta())!==u?(ea(),(e=na())!==u?(Ou=r,r=bn(t)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u),r===u&&(r=Iu,(t=to())!==u?(ea(),(n=Lo())!==u?(Ou=r,r=An(t,n)):(Iu=r,r=u)):(Iu=r,r=u))),r}function uo(){var r,t,n,e,o,i,a,s;if(r=Iu,(t=io())!==u){for(n=[],e=Iu,o=ea(),(i=oo())!==u?(a=ea(),(s=io())!==u?e=o=[o,i,a,s]:(Iu=e,e=u)):(Iu=e,e=u);e!==u;)n.push(e),e=Iu,o=ea(),(i=oo())!==u?(a=ea(),(s=io())!==u?e=o=[o,i,a,s]:(Iu=e,e=u)):(Iu=e,e=u);Ou=r,r=Cn(t,n)}else Iu=r,r=u;return r}function oo(){var t;return 43===r.charCodeAt(Iu)?(t=y,Iu++):(t=u,0===Mu&&Zu(jr)),t===u&&(45===r.charCodeAt(Iu)?(t=b,Iu++):(t=u,0===Mu&&Zu(Zr)),t===u&&(r.substr(Iu,2)===A?(t=A,Iu+=2):(t=u,0===Mu&&Zu(zr)))),t}function io(){var r,t,n,e,o,i,a,s;if(r=Iu,(t=so())!==u){for(n=[],e=Iu,o=ea(),(i=ao())!==u?(a=ea(),(s=so())!==u?e=o=[o,i,a,s]:(Iu=e,e=u)):(Iu=e,e=u);e!==u;)n.push(e),e=Iu,o=ea(),(i=ao())!==u?(a=ea(),(s=so())!==u?e=o=[o,i,a,s]:(Iu=e,e=u)):(Iu=e,e=u);Ou=r,r=gn(t,n)}else Iu=r,r=u;return r}function ao(){var t;return 42===r.charCodeAt(Iu)?(t=C,Iu++):(t=u,0===Mu&&Zu(Pr)),t===u&&(47===r.charCodeAt(Iu)?(t=g,Iu++):(t=u,0===Mu&&Zu(Br))),t}function so(){var r,t;return(r=Mo())===u&&(r=To())===u&&(r=wo())===u&&(r=Io())===u&&(r=Ro())===u&&(r=xo())===u&&(r=So())===u&&(r=qo())===u&&(r=co())===u&&(r=Lo())===u&&(r=Iu,ta()!==u?(ea(),(t=Vu())!==u?(ea(),na()!==u?(Ou=r,r=mn(t)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)),r}function co(){var r,t;return r=Iu,(t=fo())!==u&&(Ou=r,t=En(t)),(r=t)===u&&(r=Iu,(t=bo())!==u&&(Ou=r,t=Ln(t)),r=t),r}function fo(){var r,t;return r=Iu,(t=lo())!==u&&(Ou=r,t=Tn(t)),r=t}function lo(){var r,t,n,e;if(r=Iu,(t=po())!==u){for(n=[],e=yo();e!==u;)n.push(e),e=yo();Ou=r,r=wn(t,n)}else Iu=r,r=u;return r}function vo(){var r,t,n,e;if(r=Iu,(t=po())!==u){for(n=[],e=ho();e!==u;)n.push(e),e=ho();Ou=r,r=xn(t,n)}else Iu=r,r=u;return r}function po(){var t;return mr.test(r.charAt(Iu))?(t=r.charAt(Iu),Iu++):(t=u,0===Mu&&Zu(Gr)),t}function ho(){var t;return Er.test(r.charAt(Iu))?(t=r.charAt(Iu),Iu++):(t=u,0===Mu&&Zu(Vr)),t}function yo(){var t;return Lr.test(r.charAt(Iu))?(t=r.charAt(Iu),Iu++):(t=u,0===Mu&&Zu(Wr)),t}function bo(){var r,t;return r=Iu,Eo()!==u?(t=Ao(),Eo()!==u?(Ou=r,r=Nn(t)):(Iu=r,r=u)):(Iu=r,r=u),r}function Ao(){var r,t,n;for(r=Iu,t=[],n=Co();n!==u;)t.push(n),n=Co();return Ou=r,r=t=In(t)}function Co(){var r;return(r=mo())===u&&(r=go()),r}function go(){var r;return r=Iu,Eo()!==u&&Eo()!==u?(Ou=r,r=On()):(Iu=r,r=u),r}function mo(){var t;return Lr.test(r.charAt(Iu))?(t=r.charAt(Iu),Iu++):(t=u,0===Mu&&Zu(Wr)),t}function Eo(){var t;return Tr.test(r.charAt(Iu))?(t=r.charAt(Iu),Iu++):(t=u,0===Mu&&Zu(Yr)),t}function Lo(){var t,n,e,o;return t=Iu,n=Iu,64===r.charCodeAt(Iu)?(e=m,Iu++):(e=u,0===Mu&&Zu(kr)),e!==u&&(o=vo())!==u?n=e=[e,o]:(Iu=n,n=u),n!==u&&(Ou=t,n=Rn(n)),t=n}function To(){var r,t,n;return r=Iu,Li()!==u?(ea(),ta()!==u?(ea(),(t=Fo())!==u?(ea(),gi()!==u?(ea(),(n=Vu())!==u?(ea(),na()!==u?(Ou=r,r=Sn(t,n)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u),r}function wo(){var r,t,n,e,o,i,a;return r=Iu,Ei()!==u?(ea(),ta()!==u?(ea(),(t=Vu())!==u?(ea(),gi()!==u?(ea(),(n=Vu())!==u?(ea(),e=Iu,(o=mi())!==u?(i=ea(),(a=Vu())!==u?e=o=[o,i,a,ea()]:(Iu=e,e=u)):(Iu=e,e=u),e===u&&(e=null),(o=na())!==u?(Ou=r,r=Fn(t,n,e)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u),r}function xo(){var r,t,n;return r=Iu,Fi()!==u?(ea(),ta()!==u?(ea(),(t=Vu())!==u?(ea(),Mi()!==u?(ea(),(n=No())!==u?(ea(),na()!==u?(Ou=r,r=Mn(t,n)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u),r}function No(){var r,t,n;return r=Iu,(t=Hi())!==u&&(Ou=r,t=Hn()),(r=t)===u&&(r=Iu,(t=Ui())!==u&&(Ou=r,t=Un()),(r=t)===u&&(r=Iu,(t=$i())!==u&&(Ou=r,t=$n()),(r=t)===u&&(r=Iu,(t=_i())!==u&&(Ou=r,t=_n()),(r=t)===u&&(r=Iu,(t=Ni())!==u&&(Ou=r,t=Dn()),(r=t)===u&&(r=Iu,(t=xi())!==u&&(Ou=r,t=jn()),(r=t)===u&&(r=Iu,(t=Ii())!==u&&(Ou=r,t=Zn()),(r=t)===u&&(r=Iu,(t=Di())!==u?(ea(),ta()!==u?(ea(),(n=ii())!==u?(ea(),na()!==u?(Ou=r,r=zn(n)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)))))))),r}function Io(){var r,t,n,e;return r=Iu,Ti()!==u?(ea(),ta()!==u?(ea(),(t=Oo())===u&&(t=null),ea(),(n=Vu())!==u?(ea(),gi()!==u?(ea(),(e=Vu())!==u?(ea(),na()!==u?(Ou=r,r=Pn(t,n,e)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u),r===u&&(r=Iu,Ti()!==u?(ea(),ta()!==u?(ea(),(t=Oo())===u&&(t=null),ea(),(n=Vu())!==u?(ea(),na()!==u?(Ou=r,r=Bn(t,n)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)),r}function Oo(){var r;return(r=Oi())===u&&(r=Ri())===u&&(r=Si()),r}function Ro(){var r,t,n;return r=Iu,wi()!==u?(ea(),ta()!==u?(ea(),(t=Vu())!==u?(ea(),vi()!==u?(ea(),(n=Vu())!==u?(ea(),na()!==u?(Ou=r,r=Gn(t,n)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u),r}function So(){var r,t,n;return r=Iu,(t=oa())!==u?(ea(),ta()!==u?(ea(),(n=Gu())===u&&(n=null),ea(),na()!==u?(Ou=r,r=Vn(t,n)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u),r}function Fo(){var r;return(r=zi())===u&&(r=Gi())===u&&(r=Vi())===u&&(r=Wi())===u&&(r=Yi())===u&&(r=ki())===u&&(r=Pi())===u&&(r=Bi()),r}function Mo(){var r;return(r=ko())===u&&(r=ti())===u&&(r=Wo())===u&&(r=Vo())===u&&(r=Go())===u&&(r=Ho())===u&&(r=$o())===u&&(r=Uo()),r}function Ho(){var r,t;return r=Iu,xi()!==u?(ea(),(t=Yo())!==u?(Ou=r,r=Wn(t)):(Iu=r,r=u)):(Iu=r,r=u),r}function Uo(){var r,t;return r=Iu,Ii()!==u?(ea(),(t=Yo())!==u?(Ou=r,r=Yn(t)):(Iu=r,r=u)):(Iu=r,r=u),r}function $o(){var t,n,e,o;return t=Iu,Zi()!==u?(ea(),45===r.charCodeAt(Iu)?(n=b,Iu++):(n=u,0===Mu&&Zu(Zr)),n===u&&(43===r.charCodeAt(Iu)?(n=y,Iu++):(n=u,0===Mu&&Zu(jr))),n!==u?(ea(),(e=Yo())!==u?(ea(),(o=_o())!==u?(Ou=t,t=kn(n,e,o)):(Iu=t,t=u)):(Iu=t,t=u)):(Iu=t,t=u)):(Iu=t,t=u),t===u&&(t=Iu,Zi()!==u?(ea(),(n=Yo())!==u?(ea(),(e=_o())!==u?(Ou=t,t=qn(n,e)):(Iu=t,t=u)):(Iu=t,t=u)):(Iu=t,t=u)),t}function _o(){var r,t,n;return r=Iu,(t=Do())!==u?(ea(),ji()!==u?(ea(),(n=jo())!==u?(Ou=r,r=Kn(t,n)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u),r===u&&(r=Zo()),r}function Do(){var r,t,n;return r=Iu,(t=zo())!==u?(ea(),ta()!==u?(ea(),(n=Bo())!==u?(ea(),na()!==u?(Ou=r,r=Xn(t,n)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u),r===u&&(r=Iu,(t=zo())!==u&&(Ou=r,t=Jn(t)),r=t),r}function jo(){var r,t,n,e;return r=Iu,(t=zo())!==u&&(Ou=r,t=Qn(t)),(r=t)===u&&(r=Iu,(t=ki())!==u?(ea(),ta()!==u?(ea(),(n=Bo())!==u?(ea(),ra()!==u?(ea(),(e=Po())!==u?(ea(),na()!==u?(Ou=r,r=re(n,e)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u),r===u&&(r=Iu,(t=ki())!==u?(ea(),ta()!==u?(ea(),(n=Bo())!==u?(ea(),na()!==u?(Ou=r,r=te(n)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u),r===u&&(r=Iu,(t=ki())!==u&&(Ou=r,t=ne()),r=t))),r}function Zo(){var r,t,n,e;return r=Iu,(t=zo())!==u?(ea(),ta()!==u?(ea(),(n=Po())!==u?(ea(),na()!==u?(Ou=r,r=ee(t,n)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u),r===u&&(r=Iu,(t=zo())!==u&&(Ou=r,t=ue(t)),(r=t)===u&&(r=Iu,(t=ki())!==u?(ea(),ta()!==u?(ea(),(n=Bo())!==u?(ea(),ra()!==u?(ea(),(e=Po())!==u?(ea(),na()!==u?(Ou=r,r=oe(n,e)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u),r===u&&(r=Iu,(t=ki())!==u?(ea(),ta()!==u?(ea(),(n=Po())!==u?(ea(),na()!==u?(Ou=r,r=ie(n)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u),r===u&&(r=Iu,(t=ki())!==u&&(Ou=r,t=ae()),r=t)))),r}function zo(){var r,t;return r=Iu,(t=Vi())!==u&&(Ou=r,t=se()),(r=t)===u&&(r=Iu,(t=Wi())!==u&&(Ou=r,t=ce()),(r=t)===u&&(r=Iu,(t=Yi())!==u&&(Ou=r,t=fe()),(r=t)===u&&(r=Iu,(t=Gi())!==u&&(Ou=r,t=le()),(r=t)===u&&(r=Iu,(t=zi())!==u&&(Ou=r,t=ve()),r=t)))),r}function Po(){var r,t;return r=Iu,(t=ii())!==u&&(Ou=r,t=pe(t)),r=t}function Bo(){var r,t;return r=Iu,(t=ii())!==u&&(Ou=r,t=de(t)),r=t}function Go(){var r,t;return r=Iu,Ni()!==u?(ea(),(t=Yo())!==u?(Ou=r,r=he(t)):(Iu=r,r=u)):(Iu=r,r=u),r}function Vo(){var r,t;return r=Iu,(t=ci())!==u&&(Ou=r,t=ye()),r=t}function Wo(){var r,t;return r=Iu,(t=fi())!==u&&(Ou=r,t=be()),(r=t)===u&&(r=Iu,(t=li())!==u&&(Ou=r,t=Ae()),r=t),r}function Yo(){var r;return(r=ko())===u&&(r=Lo()),r}function ko(){var t,n,e,o,i;if(t=Iu,39===r.charCodeAt(Iu)?(n=E,Iu++):(n=u,0===Mu&&Zu(qr)),n===u&&(r.substr(Iu,2)===L?(n=L,Iu+=2):(n=u,0===Mu&&Zu(Kr))),n!==u){for(e=[],o=Iu,r.substr(Iu,2)===T?(i=T,Iu+=2):(i=u,0===Mu&&Zu(Xr)),i!==u&&(Ou=o,i=Ce()),(o=i)===u&&(wr.test(r.charAt(Iu))?(o=r.charAt(Iu),Iu++):(o=u,0===Mu&&Zu(Jr)));o!==u;)e.push(o),o=Iu,r.substr(Iu,2)===T?(i=T,Iu+=2):(i=u,0===Mu&&Zu(Xr)),i!==u&&(Ou=o,i=Ce()),(o=i)===u&&(wr.test(r.charAt(Iu))?(o=r.charAt(Iu),Iu++):(o=u,0===Mu&&Zu(Jr)));39===r.charCodeAt(Iu)?(o=E,Iu++):(o=u,0===Mu&&Zu(qr)),o!==u?(Ou=t,t=ge(e)):(Iu=t,t=u)}else Iu=t,t=u;return t}function qo(){var r;return(r=Ko())===u&&(r=Xo()),r}function Ko(){var r,t,n,e,o;if(r=Iu,qi()!==u)if(ea(),(t=Vu())!==u){for(ea(),n=[],e=Qo();e!==u;)n.push(e),e=Qo();e=ea(),(o=Ki())!==u?(Ou=r,r=me(t,n)):(Iu=r,r=u)}else Iu=r,r=u;else Iu=r,r=u;if(r===u)if(r=Iu,qi()!==u)if(ea(),(t=Vu())!==u){for(ea(),n=[],e=Qo();e!==u;)n.push(e),e=Qo();e=ea(),(o=ri())!==u?(ea(),Ki()!==u?(Ou=r,r=Ee(t,n,o)):(Iu=r,r=u)):(Iu=r,r=u)}else Iu=r,r=u;else Iu=r,r=u;return r}function Xo(){var r,t,n,e;if(r=Iu,qi()!==u){for(ea(),t=[],n=Jo();n!==u;)t.push(n),n=Jo();n=ea(),(e=Ki())!==u?(Ou=r,r=Le(t)):(Iu=r,r=u)}else Iu=r,r=u;if(r===u)if(r=Iu,qi()!==u){for(ea(),t=[],n=Jo();n!==u;)t.push(n),n=Jo();n=ea(),(e=ri())!==u?(ea(),Ki()!==u?(Ou=r,r=Te(t,e)):(Iu=r,r=u)):(Iu=r,r=u)}else Iu=r,r=u;return r}function Jo(){var r,t,n;return r=Iu,Xi()!==u?(ea(),(t=Vu())!==u?(ea(),Ji()!==u?(ea(),(n=Vu())!==u?(Ou=r,r=we(t,n)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u),r}function Qo(){var r,t,n;return r=Iu,Xi()!==u?(ea(),(t=Vu())!==u?(ea(),Ji()!==u?(ea(),(n=Vu())!==u?(Ou=r,r=xe(t,n)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u)):(Iu=r,r=u),r}function ri(){var r,t;return r=Iu,Qi()!==u?(ea(),(t=Vu())!==u?(Ou=r,r=Ne(t)):(Iu=r,r=u)):(Iu=r,r=u),r}function ti(){var r,t,n,e;return r=Iu,(t=ni())!==u?(n=Iu,Mu++,e=po(),Mu--,e===u?n=void 0:(Iu=n,n=u),n!==u?(Ou=r,r=Ie(t)):(Iu=r,r=u)):(Iu=r,r=u),r}function ni(){var r,t,n,e;return r=Iu,(t=ei())!==u&&(n=ui())!==u&&(e=oi())!==u?(Ou=r,r=Oe(t,n,e)):(Iu=r,r=u),r===u&&(r=Iu,(t=ei())!==u&&(n=ui())!==u?(Ou=r,r=Re(t,n)):(Iu=r,r=u),r===u&&(r=Iu,(t=ei())!==u&&(n=oi())!==u?(Ou=r,r=Se(t,n)):(Iu=r,r=u),r===u&&(r=Iu,(t=ei())!==u&&(Ou=r,t=Fe(t)),r=t))),r}function ei(){var t,n,e;return(t=ii())===u&&(t=Iu,45===r.charCodeAt(Iu)?(n=b,Iu++):(n=u,0===Mu&&Zu(Zr)),n===u&&(43===r.charCodeAt(Iu)?(n=y,Iu++):(n=u,0===Mu&&Zu(jr))),n!==u&&(e=ii())!==u?(Ou=t,t=Me(n,e)):(Iu=t,t=u)),t}function ui(){var t,n,e;return t=Iu,46===r.charCodeAt(Iu)?(n=w,Iu++):(n=u,0===Mu&&Zu(Qr)),n!==u?((e=ii())===u&&(e=null),Ou=t,t=He(e)):(Iu=t,t=u),t}function oi(){var r,t,n;return r=Iu,(t=si())!==u&&(n=ii())!==u?(Ou=r,r=Ue(t,n)):(Iu=r,r=u),r}function ii(){var r,t,n;if(r=Iu,t=[],(n=ai())!==u)for(;n!==u;)t.push(n),n=ai();else t=u;return t!==u&&(Ou=r,t=$e(t)),r=t}function ai(){var t;return xr.test(r.charAt(Iu))?(t=r.charAt(Iu),Iu++):(t=u,0===Mu&&Zu(rt)),t}function si(){var t,n,e;return t=Iu,Nr.test(r.charAt(Iu))?(n=r.charAt(Iu),Iu++):(n=u,0===Mu&&Zu(tt)),n!==u?(Ir.test(r.charAt(Iu))?(e=r.charAt(Iu),Iu++):(e=u,0===Mu&&Zu(nt)),e===u&&(e=null),Ou=t,t=_e(n,e)):(Iu=t,t=u),t}function ci(){var t,n,e,o;return t=Iu,r.substr(Iu,4).toLowerCase()===x?(n=r.substr(Iu,4),Iu+=4):(n=u,0===Mu&&Zu(et)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?t=n=[n,e]:(Iu=t,t=u)):(Iu=t,t=u),t}function fi(){var t,n,e,o;return t=Iu,r.substr(Iu,4).toLowerCase()===N?(n=r.substr(Iu,4),Iu+=4):(n=u,0===Mu&&Zu(ut)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?t=n=[n,e]:(Iu=t,t=u)):(Iu=t,t=u),t}function li(){var t,n,e,o;return t=Iu,r.substr(Iu,5).toLowerCase()===I?(n=r.substr(Iu,5),Iu+=5):(n=u,0===Mu&&Zu(ot)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?t=n=[n,e]:(Iu=t,t=u)):(Iu=t,t=u),t}function vi(){var t,n,e,o;return t=Iu,r.substr(Iu,2).toLowerCase()===O?(n=r.substr(Iu,2),Iu+=2):(n=u,0===Mu&&Zu(it)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=De()):(Iu=t,t=u)):(Iu=t,t=u),t}function pi(){var t,n,e,o;return t=Iu,r.substr(Iu,2).toLowerCase()===R?(n=r.substr(Iu,2),Iu+=2):(n=u,0===Mu&&Zu(at)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=je()):(Iu=t,t=u)):(Iu=t,t=u),t}function di(){var t,n,e,o;return t=Iu,r.substr(Iu,4).toLowerCase()===S?(n=r.substr(Iu,4),Iu+=4):(n=u,0===Mu&&Zu(st)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=Ze()):(Iu=t,t=u)):(Iu=t,t=u),t}function hi(){var t,n,e,o;return t=Iu,r.substr(Iu,6).toLowerCase()===F?(n=r.substr(Iu,6),Iu+=6):(n=u,0===Mu&&Zu(ct)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=ze()):(Iu=t,t=u)):(Iu=t,t=u),t}function yi(){var t,n,e,o;return t=Iu,r.substr(Iu,3).toLowerCase()===M?(n=r.substr(Iu,3),Iu+=3):(n=u,0===Mu&&Zu(ft)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=Pe()):(Iu=t,t=u)):(Iu=t,t=u),t}function bi(){var t,n,e,o;return t=Iu,r.substr(Iu,3).toLowerCase()===H?(n=r.substr(Iu,3),Iu+=3):(n=u,0===Mu&&Zu(lt)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=Be()):(Iu=t,t=u)):(Iu=t,t=u),t}function Ai(){var t,n,e,o;return t=Iu,r.substr(Iu,2).toLowerCase()===U?(n=r.substr(Iu,2),Iu+=2):(n=u,0===Mu&&Zu(vt)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=Ge()):(Iu=t,t=u)):(Iu=t,t=u),t}function Ci(){var t,n,e,o;return t=Iu,r.substr(Iu,7).toLowerCase()===$?(n=r.substr(Iu,7),Iu+=7):(n=u,0===Mu&&Zu(pt)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=Ve()):(Iu=t,t=u)):(Iu=t,t=u),t}function gi(){var t,n,e,o;return t=Iu,r.substr(Iu,4).toLowerCase()===_?(n=r.substr(Iu,4),Iu+=4):(n=u,0===Mu&&Zu(dt)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=We()):(Iu=t,t=u)):(Iu=t,t=u),t}function mi(){var t,n,e,o;return t=Iu,r.substr(Iu,3).toLowerCase()===D?(n=r.substr(Iu,3),Iu+=3):(n=u,0===Mu&&Zu(ht)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=Ye()):(Iu=t,t=u)):(Iu=t,t=u),t}function Ei(){var t,n,e,o;return t=Iu,r.substr(Iu,9).toLowerCase()===j?(n=r.substr(Iu,9),Iu+=9):(n=u,0===Mu&&Zu(yt)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=ke()):(Iu=t,t=u)):(Iu=t,t=u),t}function Li(){var t,n,e,o;return t=Iu,r.substr(Iu,7).toLowerCase()===Z?(n=r.substr(Iu,7),Iu+=7):(n=u,0===Mu&&Zu(bt)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=qe()):(Iu=t,t=u)):(Iu=t,t=u),t}function Ti(){var t,n,e,o;return t=Iu,r.substr(Iu,4).toLowerCase()===z?(n=r.substr(Iu,4),Iu+=4):(n=u,0===Mu&&Zu(At)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=Ke()):(Iu=t,t=u)):(Iu=t,t=u),t}function wi(){var t,n,e,o;return t=Iu,r.substr(Iu,8).toLowerCase()===P?(n=r.substr(Iu,8),Iu+=8):(n=u,0===Mu&&Zu(Ct)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=Xe()):(Iu=t,t=u)):(Iu=t,t=u),t}function xi(){var t,n,e,o;return t=Iu,r.substr(Iu,9).toLowerCase()===B?(n=r.substr(Iu,9),Iu+=9):(n=u,0===Mu&&Zu(gt)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=Je()):(Iu=t,t=u)):(Iu=t,t=u),t}function Ni(){var t,n,e,o;return t=Iu,r.substr(Iu,4).toLowerCase()===G?(n=r.substr(Iu,4),Iu+=4):(n=u,0===Mu&&Zu(mt)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=Qe()):(Iu=t,t=u)):(Iu=t,t=u),t}function Ii(){var t,n,e,o;return t=Iu,r.substr(Iu,4).toLowerCase()===V?(n=r.substr(Iu,4),Iu+=4):(n=u,0===Mu&&Zu(Et)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=ru()):(Iu=t,t=u)):(Iu=t,t=u),t}function Oi(){var t,n,e,o;return t=Iu,r.substr(Iu,7).toLowerCase()===W?(n=r.substr(Iu,7),Iu+=7):(n=u,0===Mu&&Zu(Lt)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=tu()):(Iu=t,t=u)):(Iu=t,t=u),t}function Ri(){var t,n,e,o;return t=Iu,r.substr(Iu,8).toLowerCase()===Y?(n=r.substr(Iu,8),Iu+=8):(n=u,0===Mu&&Zu(Tt)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=nu()):(Iu=t,t=u)):(Iu=t,t=u),t}function Si(){var t,n,e,o;return t=Iu,r.substr(Iu,4).toLowerCase()===k?(n=r.substr(Iu,4),Iu+=4):(n=u,0===Mu&&Zu(wt)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=eu()):(Iu=t,t=u)):(Iu=t,t=u),t}function Fi(){var t,n,e,o;return t=Iu,r.substr(Iu,4).toLowerCase()===q?(n=r.substr(Iu,4),Iu+=4):(n=u,0===Mu&&Zu(xt)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=uu()):(Iu=t,t=u)):(Iu=t,t=u),t}function Mi(){var t,n,e,o;return t=Iu,r.substr(Iu,2).toLowerCase()===K?(n=r.substr(Iu,2),Iu+=2):(n=u,0===Mu&&Zu(Nt)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=ou()):(Iu=t,t=u)):(Iu=t,t=u),t}function Hi(){var t,n,e,o;return t=Iu,r.substr(Iu,7).toLowerCase()===X?(n=r.substr(Iu,7),Iu+=7):(n=u,0===Mu&&Zu(It)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=iu()):(Iu=t,t=u)):(Iu=t,t=u),t}function Ui(){var t,n,e,o;return t=Iu,r.substr(Iu,8).toLowerCase()===J?(n=r.substr(Iu,8),Iu+=8):(n=u,0===Mu&&Zu(Ot)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=au()):(Iu=t,t=u)):(Iu=t,t=u),t}function $i(){var t,n,e,o;return t=Iu,r.substr(Iu,5).toLowerCase()===Q?(n=r.substr(Iu,5),Iu+=5):(n=u,0===Mu&&Zu(Rt)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=su()):(Iu=t,t=u)):(Iu=t,t=u),t}function _i(){var t,n,e,o;return t=Iu,r.substr(Iu,4).toLowerCase()===rr?(n=r.substr(Iu,4),Iu+=4):(n=u,0===Mu&&Zu(St)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=cu()):(Iu=t,t=u)):(Iu=t,t=u),t}function Di(){var t,n,e,o;return t=Iu,r.substr(Iu,7).toLowerCase()===tr?(n=r.substr(Iu,7),Iu+=7):(n=u,0===Mu&&Zu(Ft)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=fu()):(Iu=t,t=u)):(Iu=t,t=u),t}function ji(){var t,n,e,o;return t=Iu,r.substr(Iu,2).toLowerCase()===nr?(n=r.substr(Iu,2),Iu+=2):(n=u,0===Mu&&Zu(Mt)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=lu()):(Iu=t,t=u)):(Iu=t,t=u),t}function Zi(){var t,n,e,o;return t=Iu,r.substr(Iu,8).toLowerCase()===er?(n=r.substr(Iu,8),Iu+=8):(n=u,0===Mu&&Zu(Ht)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=vu()):(Iu=t,t=u)):(Iu=t,t=u),t}function zi(){var t,n,e,o;return t=Iu,r.substr(Iu,4).toLowerCase()===ur?(n=r.substr(Iu,4),Iu+=4):(n=u,0===Mu&&Zu(Ut)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=pu()):(Iu=t,t=u)):(Iu=t,t=u),t}function Pi(){var t,n,e,o;return t=Iu,r.substr(Iu,13).toLowerCase()===or?(n=r.substr(Iu,13),Iu+=13):(n=u,0===Mu&&Zu($t)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=du()):(Iu=t,t=u)):(Iu=t,t=u),t}function Bi(){var t,n,e,o;return t=Iu,r.substr(Iu,15).toLowerCase()===ir?(n=r.substr(Iu,15),Iu+=15):(n=u,0===Mu&&Zu(_t)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=hu()):(Iu=t,t=u)):(Iu=t,t=u),t}function Gi(){var t,n,e,o;return t=Iu,r.substr(Iu,5).toLowerCase()===ar?(n=r.substr(Iu,5),Iu+=5):(n=u,0===Mu&&Zu(Dt)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=yu()):(Iu=t,t=u)):(Iu=t,t=u),t}function Vi(){var t,n,e,o;return t=Iu,r.substr(Iu,3).toLowerCase()===sr?(n=r.substr(Iu,3),Iu+=3):(n=u,0===Mu&&Zu(jt)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=bu()):(Iu=t,t=u)):(Iu=t,t=u),t}function Wi(){var t,n,e,o;return t=Iu,r.substr(Iu,4).toLowerCase()===cr?(n=r.substr(Iu,4),Iu+=4):(n=u,0===Mu&&Zu(Zt)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=Au()):(Iu=t,t=u)):(Iu=t,t=u),t}function Yi(){var t,n,e,o;return t=Iu,r.substr(Iu,6).toLowerCase()===fr?(n=r.substr(Iu,6),Iu+=6):(n=u,0===Mu&&Zu(zt)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=Cu()):(Iu=t,t=u)):(Iu=t,t=u),t}function ki(){var t,n,e,o;return t=Iu,r.substr(Iu,6).toLowerCase()===lr?(n=r.substr(Iu,6),Iu+=6):(n=u,0===Mu&&Zu(Pt)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=gu()):(Iu=t,t=u)):(Iu=t,t=u),t}function qi(){var t,n,e,o;return t=Iu,r.substr(Iu,4).toLowerCase()===vr?(n=r.substr(Iu,4),Iu+=4):(n=u,0===Mu&&Zu(Bt)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=mu()):(Iu=t,t=u)):(Iu=t,t=u),t}function Ki(){var t,n,e,o;return t=Iu,r.substr(Iu,3).toLowerCase()===pr?(n=r.substr(Iu,3),Iu+=3):(n=u,0===Mu&&Zu(Gt)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=Eu()):(Iu=t,t=u)):(Iu=t,t=u),t}function Xi(){var t,n,e,o;return t=Iu,r.substr(Iu,4).toLowerCase()===dr?(n=r.substr(Iu,4),Iu+=4):(n=u,0===Mu&&Zu(Vt)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=Lu()):(Iu=t,t=u)):(Iu=t,t=u),t}function Ji(){var t,n,e,o;return t=Iu,r.substr(Iu,4).toLowerCase()===hr?(n=r.substr(Iu,4),Iu+=4):(n=u,0===Mu&&Zu(Wt)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=Tu()):(Iu=t,t=u)):(Iu=t,t=u),t}function Qi(){var t,n,e,o;return t=Iu,r.substr(Iu,4).toLowerCase()===yr?(n=r.substr(Iu,4),Iu+=4):(n=u,0===Mu&&Zu(Yt)),n!==u?(e=Iu,Mu++,o=ho(),Mu--,o===u?e=void 0:(Iu=e,e=u),e!==u?(Ou=t,t=wu()):(Iu=t,t=u)):(Iu=t,t=u),t}function ra(){var t;return 44===r.charCodeAt(Iu)?(t=br,Iu++):(t=u,0===Mu&&Zu(kt)),t}function ta(){var t;return 40===r.charCodeAt(Iu)?(t=Ar,Iu++):(t=u,0===Mu&&Zu(qt)),t}function na(){var t;return 41===r.charCodeAt(Iu)?(t=Cr,Iu++):(t=u,0===Mu&&Zu(Kt)),t}function ea(){var r,t;for(r=[],t=ua();t!==u;)r.push(t),t=ua();return r}function ua(){var t;return Or.test(r.charAt(Iu))?(t=r.charAt(Iu),Iu++):(t=u,0===Mu&&Zu(Xt)),t}function oa(){var t,n,e,o;if(t=Iu,(n=vo())!==u&&(Ou=t,n=xu(n)),(t=n)===u)if(t=Iu,96===r.charCodeAt(Iu)?(n=gr,Iu++):(n=u,0===Mu&&Zu(Jt)),n!==u){if(e=[],Rr.test(r.charAt(Iu))?(o=r.charAt(Iu),Iu++):(o=u,0===Mu&&Zu(Qt)),o!==u)for(;o!==u;)e.push(o),Rr.test(r.charAt(Iu))?(o=r.charAt(Iu),Iu++):(o=u,0===Mu&&Zu(Qt));else e=u;e!==u?(96===r.charCodeAt(Iu)?(o=gr,Iu++):(o=u,0===Mu&&Zu(Jt)),o!==u?(Ou=t,t=Nu(e)):(Iu=t,t=u)):(Iu=t,t=u)}else Iu=t,t=u;return t}function ia(r,t){return{type:"unary-expression",operator:r,expr:t}}function aa(r,t,n,e){var u={type:"binary-expression",operator:r,left:t,right:n};return void 0!==e&&(u.escape=e),u}function sa(r,t){for(var n=[r],e=0;e<t.length;e++)n.push(t[e][3]);return n}function ca(r,t,n){return sa(r,t)}function fa(r,t){for(var n=r,e=0;e<t.length;e++)n=aa(t[e][1],n,t[e][3]);return n}function la(r){!0!==/^(\d{4})-(\d{1,2})-(\d{1,2})$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?[ ]{0,1}(\+|\-)(\d{1,2}):(\d{1,2})$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})?[ ]{0,1}(\+|\-)(\d{1,2}):(\d{1,2})$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})$/.test(r)&&Hu("Timestamp literal is invalid")}function va(r){!0!==/^(\d{1,2}):(\d{1,2}):(\d{1,2})$|^(\d{1,2}):(\d{1,2})$|^(\d{1,2}):(\d{1,2}):(\d{1,2}).([0-9]+)$/.test(r)&&Hu("Time literal is invalid")}function pa(r){!0!==/^(\d{4})-(\d{1,2})-(\d{1,2})$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?[ ]{0,1}(\+|\-)(\d{1,2}):(\d{1,2})$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})?[ ]{0,1}(\+|\-)(\d{1,2}):(\d{1,2})$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})$/.test(r)&&Hu("Date literal is invalid")}if((e=a())!==u&&Iu===r.length)return e;throw e!==u&&Iu<r.length&&Zu(_u()),Pu(Fu,Su<r.length?r.charAt(Su):null,Su<r.length?ju(Su,Su+1):ju(Su,Su))}return r(t,Error),t.prototype.format=function(r){var t="Error: "+this.message;if(this.location){var e,u=null;for(e=0;e<r.length;e++)if(r[e].source===this.location.source){u=r[e].text.split(/\r\n|\n|\r/g);break}var o=this.location.start,i=this.location.source&&"function"==typeof this.location.source.offset?this.location.source.offset(o):o,a=this.location.source+":"+i.line+":"+i.column;if(u){var s=this.location.end,c=n("",i.line.toString().length," "),f=u[o.line-1],l=(o.line===s.line?s.column:f.length+1)-o.column||1;t+="\n --\x3e "+a+"\n"+c+" |\n"+i.line+" | "+f+"\n"+c+" | "+n("",o.column-1," ")+n("",l,"^")}else t+="\n at "+a}return t},t.buildMessage=function(r,t){var n={literal:function(r){return'"'+u(r.text)+'"'},class:function(r){var t=r.parts.map((function(r){return Array.isArray(r)?o(r[0])+"-"+o(r[1]):o(r)}));return"["+(r.inverted?"^":"")+t.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(r){return r.description}};function e(r){return r.charCodeAt(0).toString(16).toUpperCase()}function u(r){return r.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(r){return"\\x0"+e(r)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(r){return"\\x"+e(r)}))}function o(r){return r.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(r){return"\\x0"+e(r)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(r){return"\\x"+e(r)}))}function i(r){return n[r.type](r)}function a(r){var t,n,e=r.map(i);if(e.sort(),e.length>0){for(t=1,n=1;t<e.length;t++)e[t-1]!==e[t]&&(e[n]=e[t],n++);e.length=n}switch(e.length){case 1:return e[0];case 2:return e[0]+" or "+e[1];default:return e.slice(0,-1).join(", ")+", or "+e[e.length-1]}}function s(r){return r?'"'+u(r)+'"':"end of input"}return"Expected "+a(r)+" but "+s(t)+" found."},{SyntaxError:t,parse:e}},(t=e).exports&&(t.exports=n());var WhereGrammar_u=e.exports;class WhereGrammar_o{static parse(r){return WhereGrammar_u.parse(r)}}

;// ../node_modules/@arcgis/core/core/sql/WhereClause.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const WhereClause_A=new Set(["current_timestamp","current_date","current_time"]);class WhereClause_I{static makeBool(e){return WhereClause_O(e)}static featureValue(e,t,a,r){return WhereClause_C(e,t,a,r)}static equalsNull(e){return null===e}static applyLike(e,t,a){return WhereClause_j(e,t,a)}static ensureArray(e){return WhereClause_F(e)}static applyIn(e,t){return WhereClause_E(e,t)}static currentDate(e){return DateOnly/* DateOnly */.n.fromNow(e)}static makeSqlInterval(e,t,a){return SqlInterval_s.createFromValueAndQualifer(e,t,a)}static convertInterval(e){return e instanceof SqlInterval_s?e.valueInMilliseconds():e}static currentTimestamp(e){return T(new Date,e)}static compare(e,t,a,r){return sqlCompareUtils_I(t,a,e)}static calculate(e,t,a,r){return sqlArithmeticUtils_d(e,t,a,r)}static evaluateTime(e){return O(e)}static evaluateTimestamp(e,t,a){return sqlDateParsingUtils_P(e,t,a)}static evaluateDate(e,t){return V(e,t)}static evaluateFunction(e,t,a){return StandardizedFunctions_w(e,t,a)}static lookup(e,t){const a=t[e];return void 0===a?null:a}static between(e,t,a){return null==e||null==t[0]||null==t[1]?null:sqlCompareUtils_I(e,t[0],">=")&&sqlCompareUtils_I(e,t[1],"<=")}static notbetween(e,t,a){return null==e||null==t[0]||null==t[1]?null:sqlCompareUtils_I(e,t[0],"<")||sqlCompareUtils_I(e,t[1],">")}static ternaryNot(e){return WhereClause_b(e)}static ternaryAnd(e,t){return WhereClause_D(e,t)}static ternaryOr(e,t){return WhereClause_k(e,t)}}class WhereClause_x{constructor(e,t,a="UTC"){this.fieldsIndex=t,this.timeZone=a,this.parameters={},this._hasDateFunctions=void 0,this.parseTree=WhereGrammar_o.parse(e);const{isStandardized:r,isAggregate:s,referencedFieldNames:i}=this._extractExpressionInfo(t);this._referencedFieldNames=i,this.isStandardized=r,this.isAggregate=s}static convertValueToStorageFormat(e,t=null){if(null===t)return sqlDateParsingUtils_x(e)?e.getTime():j(e)?e.toMillis():D(e)?e.toStorageFormat():z(e)?e.toStorageString():$(e)?e.toStorageFormat():e;switch(t){case"date":return sqlDateParsingUtils_x(e)?e.getTime():j(e)?e.toMillis():D(e)?e.toMilliseconds():$(e)?e.toNumber():e;case"date-only":return sqlDateParsingUtils_x(e)?DateOnly/* DateOnly */.n.fromDateJS(e).toString():D(e)?DateOnly/* DateOnly */.n.fromSqlTimeStampOffset(e).toString():j(e)?DateOnly/* DateOnly */.n.fromDateTime(e).toString():e;case"time-only":return sqlDateParsingUtils_x(e)?TimeOnly/* TimeOnly */.k.fromDateJS(e).toStorageString():j(e)?TimeOnly/* TimeOnly */.k.fromDateTime(e).toStorageString():D(e)?TimeOnly/* TimeOnly */.k.fromSqlTimeStampOffset(e).toStorageString():z(e)?e.toStorageString():e;case"timestamp-offset":if(sqlDateParsingUtils_x(e))return SqlTimestampOffset/* SqlTimeStampOffset */.g.fromJSDate(e).toStorageFormat();if(j(e))return SqlTimestampOffset/* SqlTimeStampOffset */.g.fromDateTime(e).toStorageFormat();if(D(e))return e.toStorageFormat()}return e}static create(e,t,a="UTC"){return new WhereClause_x(e,t,a)}get fieldNames(){return this._referencedFieldNames}testSet(e,t=WhereClause_U){return!!this._evaluateNode(this.parseTree,null,t,e)}calculateValue(e,t=WhereClause_U){const a=this._evaluateNode(this.parseTree,e,t,null);return a instanceof SqlInterval_s?a.valueInMilliseconds()/864e5:a}calculateValueCompiled(e,t=WhereClause_U){return null!=this.parseTree._compiledVersion?this.parseTree._compiledVersion(e,this.parameters,t,this.fieldsIndex,this.timeZone):(0,has/* default */.A)("esri-csp-restrictions")?this.calculateValue(e,t):(this._compileMe(),this.parseTree._compiledVersion(e,this.parameters,t,this.fieldsIndex,this.timeZone))}testFeature(e,t=WhereClause_U){return!!this._evaluateNode(this.parseTree,e,t,null)}testFeatureCompiled(e,t=WhereClause_U){return null!=this.parseTree._compiledVersion?!!this.parseTree._compiledVersion(e,this.parameters,t,this.fieldsIndex,this.timeZone):(0,has/* default */.A)("esri-csp-restrictions")?this.testFeature(e,t):(this._compileMe(),!!this.parseTree._compiledVersion(e,this.parameters,t,this.fieldsIndex,this.timeZone))}get hasDateFunctions(){return null!=this._hasDateFunctions||(this._hasDateFunctions=!1,this._visitAll(this.parseTree,(e=>{"current-time"===e.type?this._hasDateFunctions=!0:"function"===e.type&&(this._hasDateFunctions=this._hasDateFunctions||WhereClause_A.has(e.name.toLowerCase()))}))),this._hasDateFunctions}getFunctions(){const e=new Set;return this._visitAll(this.parseTree,(t=>{"function"===t.type&&e.add(t.name.toLowerCase())})),Array.from(e)}getExpressions(){const e=new Map;return this._visitAll(this.parseTree,(t=>{if("function"===t.type){const a=t.name.toLowerCase(),r=t.args.value[0];if("column-reference"===r.type){const t=r.column,s=`${a}-${t}`;e.has(s)||e.set(s,{aggregateType:a,field:t})}}})),[...e.values()]}getVariables(){const e=new Set;return this._visitAll(this.parseTree,(t=>{"parameter"===t.type&&e.add(t.value.toLowerCase())})),Array.from(e)}_compileMe(){const e="return this.convertInterval("+this.evaluateNodeToJavaScript(this.parseTree)+")";this.parseTree._compiledVersion=new Function("feature","lookups","attributeAdapter","fieldsIndex","timeZone",e).bind(WhereClause_I)}_extractExpressionInfo(e){const t=[],a=new Set;let s=!0,i=!1;return this._visitAll(this.parseTree,(n=>{switch(n.type){case"column-reference":{const r=e?.get(n.column);let s,i;r?s=i=r.name??"":(i=n.column,s=i.toLowerCase()),a.has(s)||(a.add(s),t.push(i)),n.column=i;break}case"function":{const{name:e,args:t}=n,a=t.value.length;s&&(s=C(e,a)),!1===i&&(i=o(e,a));break}}})),{referencedFieldNames:Array.from(t),isStandardized:s,isAggregate:i}}_visitAll(e,t){if(null!=e)switch(t(e),e.type){case"when-clause":this._visitAll(e.operand,t),this._visitAll(e.value,t);break;case"case-expression":for(const a of e.clauses)this._visitAll(a,t);"simple"===e.format&&this._visitAll(e.operand,t),null!==e.else&&this._visitAll(e.else,t);break;case"expression-list":for(const a of e.value)this._visitAll(a,t);break;case"unary-expression":this._visitAll(e.expr,t);break;case"binary-expression":this._visitAll(e.left,t),this._visitAll(e.right,t);break;case"function":this._visitAll(e.args,t)}}evaluateNodeToJavaScript(e){switch(e.type){case"interval":return"this.makeSqlInterval("+this.evaluateNodeToJavaScript(e.value)+", "+JSON.stringify(e.qualifier)+","+JSON.stringify(e.op)+")";case"case-expression":{let t="";if("simple"===e.format){const a=this.evaluateNodeToJavaScript(e.operand);t="( ";for(let r=0;r<e.clauses.length;r++)t+=" (this.compare('=',"+a+","+this.evaluateNodeToJavaScript(e.clauses[r].operand)+") ? ("+this.evaluateNodeToJavaScript(e.clauses[r].value)+") : ";null!==e.else?t+=this.evaluateNodeToJavaScript(e.else):t+="null",t+=" )"}else{t="( ";for(let a=0;a<e.clauses.length;a++)t+=" this.makeBool("+this.evaluateNodeToJavaScript(e.clauses[a].operand)+")===true ? ("+this.evaluateNodeToJavaScript(e.clauses[a].value)+") : ";null!==e.else?t+=this.evaluateNodeToJavaScript(e.else):t+="null",t+=" )"}return t}case"parameter":return"this.lookup("+JSON.stringify(e.value.toLowerCase())+",lookups)";case"expression-list":{let t="[";for(const a of e.value)"["!==t&&(t+=","),t+=this.evaluateNodeToJavaScript(a);return t+="]",t}case"unary-expression":return"this.ternaryNot("+this.evaluateNodeToJavaScript(e.expr)+")";case"binary-expression":switch(e.operator){case"AND":return"this.ternaryAnd("+this.evaluateNodeToJavaScript(e.left)+","+this.evaluateNodeToJavaScript(e.right)+" )";case"OR":return"this.ternaryOr("+this.evaluateNodeToJavaScript(e.left)+","+this.evaluateNodeToJavaScript(e.right)+" )";case"IS":if("null"!==e.right.type)throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.UnsupportedIsRhs);return"this.equalsNull("+this.evaluateNodeToJavaScript(e.left)+")";case"ISNOT":if("null"!==e.right.type)throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.UnsupportedIsRhs);return"(!(this.equalsNull("+this.evaluateNodeToJavaScript(e.left)+")))";case"IN":return"this.applyIn("+this.evaluateNodeToJavaScript(e.left)+",this.ensureArray("+this.evaluateNodeToJavaScript(e.right)+"))";case"NOT IN":return"this.ternaryNot(this.applyIn("+this.evaluateNodeToJavaScript(e.left)+",this.ensureArray("+this.evaluateNodeToJavaScript(e.right)+")))";case"BETWEEN":return"this.between("+this.evaluateNodeToJavaScript(e.left)+","+this.evaluateNodeToJavaScript(e.right)+", timeZone)";case"NOTBETWEEN":return"this.notbetween("+this.evaluateNodeToJavaScript(e.left)+","+this.evaluateNodeToJavaScript(e.right)+", timeZone)";case"LIKE":return"this.applyLike("+this.evaluateNodeToJavaScript(e.left)+","+this.evaluateNodeToJavaScript(e.right)+","+JSON.stringify(e.escape)+")";case"NOT LIKE":return"this.ternaryNot(this.applyLike("+this.evaluateNodeToJavaScript(e.left)+","+this.evaluateNodeToJavaScript(e.right)+","+JSON.stringify(e.escape)+"))";case"<>":case"<":case">":case">=":case"<=":case"=":return"this.compare("+JSON.stringify(e.operator)+","+this.evaluateNodeToJavaScript(e.left)+","+this.evaluateNodeToJavaScript(e.right)+", timeZone)";case"*":case"-":case"+":case"/":case"||":return"this.calculate("+JSON.stringify(e.operator)+","+this.evaluateNodeToJavaScript(e.left)+","+this.evaluateNodeToJavaScript(e.right)+", timeZone)"}throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.UnsupportedOperator,{operator:e.operator});case"null":case"boolean":case"string":case"number":return JSON.stringify(e.value);case"time":return"this.evaluateTime(JSON.stringify(node.value))";case"date":return"this.evaluateDate(JSON.stringify(node.value), 'unknown')";case"timestamp":return"this.evaluateTimestamp(JSON.stringify(node.value), 'unknown')";case"current-time":return"date"===e.mode?"this.currentDate(timeZone)":"this.currentTimestamp(timeZone)";case"column-reference":return"this.featureValue(feature,"+JSON.stringify(e.column)+",fieldsIndex,attributeAdapter)";case"function":return"this.evaluateFunction("+JSON.stringify(e.name)+","+this.evaluateNodeToJavaScript(e.args)+", timeZone)"}throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.UnsupportedSyntax,{node:e.type})}_evaluateNode(u,c,h,p){let g;switch(u.type){case"interval":{const e=this._evaluateNode(u.value,c,h,p);return SqlInterval_s.createFromValueAndQualifer(e,u.qualifier,u.op)}case"case-expression":if("simple"===u.format){const e=this._evaluateNode(u.operand,c,h,p);for(let t=0;t<u.clauses.length;t++)if(sqlCompareUtils_I(e,this._evaluateNode(u.clauses[t].operand,c,h,p),"=",this.timeZone))return this._evaluateNode(u.clauses[t].value,c,h,p);if(null!==u.else)return this._evaluateNode(u.else,c,h,p)}else{for(let e=0;e<u.clauses.length;e++)if(WhereClause_O(this._evaluateNode(u.clauses[e].operand,c,h,p)))return this._evaluateNode(u.clauses[e].value,c,h,p);if(null!==u.else)return this._evaluateNode(u.else,c,h,p)}return null;case"parameter":return g=this.parameters[u.value.toLowerCase()],sqlDateParsingUtils_x(g)?luxon/* DateTime */.c9.fromJSDate(g):g instanceof ArcadeDate/* ArcadeDate */.lY?g.toDateTime():g;case"expression-list":{const e=[];for(const t of u.value)e.push(this._evaluateNode(t,c,h,p));return e}case"unary-expression":return WhereClause_b(this._evaluateNode(u.expr,c,h,p));case"binary-expression":switch(u.operator){case"AND":return WhereClause_D(this._evaluateNode(u.left,c,h,p),this._evaluateNode(u.right,c,h,p));case"OR":return WhereClause_k(this._evaluateNode(u.left,c,h,p),this._evaluateNode(u.right,c,h,p));case"IS":if("null"!==u.right.type)throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.UnsupportedIsRhs);return null===this._evaluateNode(u.left,c,h,p);case"ISNOT":if("null"!==u.right.type)throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.UnsupportedIsRhs);return null!==this._evaluateNode(u.left,c,h,p);case"IN":{const e=WhereClause_F(this._evaluateNode(u.right,c,h,p));return WhereClause_E(this._evaluateNode(u.left,c,h,p),e)}case"NOT IN":{const e=WhereClause_F(this._evaluateNode(u.right,c,h,p));return WhereClause_b(WhereClause_E(this._evaluateNode(u.left,c,h,p),e))}case"BETWEEN":{const e=this._evaluateNode(u.left,c,h,p),t=this._evaluateNode(u.right,c,h,p);return null==e||null==t[0]||null==t[1]?null:sqlCompareUtils_I(e,t[0],">=",this.timeZone)&&sqlCompareUtils_I(e,t[1],"<=",this.timeZone)}case"NOTBETWEEN":{const e=this._evaluateNode(u.left,c,h,p),t=this._evaluateNode(u.right,c,h,p);return null==e||null==t[0]||null==t[1]?null:sqlCompareUtils_I(e,t[0],"<",this.timeZone)||sqlCompareUtils_I(e,t[1],">",this.timeZone)}case"LIKE":return WhereClause_j(this._evaluateNode(u.left,c,h,p),this._evaluateNode(u.right,c,h,p),u.escape);case"NOT LIKE":return WhereClause_b(WhereClause_j(this._evaluateNode(u.left,c,h,p),this._evaluateNode(u.right,c,h,p),u.escape));case"<>":case"<":case">":case">=":case"<=":case"=":return sqlCompareUtils_I(this._evaluateNode(u.left,c,h,p),this._evaluateNode(u.right,c,h,p),u.operator,this.timeZone);case"-":case"+":case"*":case"/":case"||":return sqlArithmeticUtils_d(u.operator,this._evaluateNode(u.left,c,h,p),this._evaluateNode(u.right,c,h,p),this.timeZone)}case"null":case"boolean":case"string":case"number":return u.value;case"date":return u.parsedValue??=V(u.value,"unknown"),u.parsedValue;case"timestamp":return u.parsedValue??=sqlDateParsingUtils_P(u.value,"unknown"),u.parsedValue;case"time":return O(u.value);case"current-time":return"date"===u.mode?DateOnly/* DateOnly */.n.fromNow(this.timeZone):T(new Date,this.timeZone);case"column-reference":return WhereClause_C(c,u.column,this.fieldsIndex,h);case"data-type":return u.value;case"function":{if(this.isAggregate&&o(u.name,u.args.value.length)){const e=[];for(const t of u.args?.value||[]){const a=[];for(const e of p||[])a.push(this._evaluateNode(t,e,h,null));e.push(a)}return AggregateFunctions_u(u.name,e)}const e=this._evaluateNode(u.args,c,h,p);return StandardizedFunctions_w(u.name,e,this.timeZone)}}throw new errorsupport/* SqlError */.L8(errorsupport/* SqlErrorCodes */.Z7.UnsupportedSyntax,{node:u.type})}}function WhereClause_O(e){return!0===e}function WhereClause_F(e){return Array.isArray(e)?e:[e]}function WhereClause_b(e){return null!==e?!0!==e:null}function WhereClause_D(e,t){return null!=e&&null!=t?!0===e&&!0===t:!1!==e&&!1!==t&&null}function WhereClause_k(e,t){return null!=e&&null!=t?!0===e||!0===t:!0===e||!0===t||null}function WhereClause_E(e,t){if(null==e)return null;let a=!1;for(const r of t)if(null==r)a=null;else if(e===r){a=!0;break}return a}const WhereClause_Z="-[]/{}()*+?.\\^$|";var WhereClause_V;function WhereClause_L(e,t){const a=t;let r="",s=WhereClause_V.Normal;for(let i=0;i<e.length;i++){const t=e.charAt(i);switch(s){case WhereClause_V.Normal:t===a?s=WhereClause_V.Escaped:WhereClause_Z.includes(t)?r+="\\"+t:r+="%"===t?".*":"_"===t?".":t;break;case WhereClause_V.Escaped:WhereClause_Z.includes(t)?r+="\\"+t:r+=t,s=WhereClause_V.Normal}}return new RegExp("^"+r+"$","m")}function WhereClause_j(e,t,a){if(null==e)return null;return WhereClause_L(t,a).test(e)}function WhereClause_q(e){return e&&"object"==typeof e.attributes}function WhereClause_C(e,t,a,r){const s=r.getAttribute(e,t),n=a?.get(t);return null==s||"esriFieldTypeDate"!==n?.type&&"date"!==n?.type?null==s||"esriFieldTypeDateOnly"!==n?.type&&"date-only"!==n?.type?null==s||"esriFieldTypeTimeOnly"!==n?.type&&"time-only"!==n?.type?null==s||"esriFieldTypeTimestampOffset"!==n?.type&&"timestamp-offset"!==n?.type?s:new SqlTimestampOffset/* SqlTimeStampOffset */.g(s):TimeOnly/* TimeOnly */.k.fromReader(s):DateOnly/* DateOnly */.n.fromReader(s):T(new Date(s),a?.getLuxonTimeZone(n.name)??luxon/* FixedOffsetZone */.mQ.utcInstance)}!function(e){e[e.Normal=0]="Normal",e[e.Escaped=1]="Escaped"}(WhereClause_V||(WhereClause_V={}));const WhereClause_U={getAttribute:(e,t)=>(WhereClause_q(e)?e.attributes:e)[t]};


/***/ }),

/***/ 94882:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ FormTemplate_y)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(4130);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
;// ../node_modules/@arcgis/core/form/ExpressionInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var s;let p=s=class extends JSONSupport/* JSONSupport */.oY{constructor(r){super(r),this.expression=null,this.name=null,this.returnType="boolean",this.title=null}clone(){return new s({name:this.name,title:this.title,expression:this.expression,returnType:this.returnType})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"expression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"name",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["boolean","date","number","string"],json:{write:!0}})],p.prototype,"returnType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"title",void 0),p=s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.ExpressionInfo")],p);const i=p;

;// ../node_modules/@arcgis/core/form/elements/Element.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let e=class extends JSONSupport/* JSONSupport */.oY{constructor(t){super(t),this.description=null,this.label=null,this.type=null,this.visibilityExpression=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],e.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],e.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],e.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],e.prototype,"visibilityExpression",void 0),e=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.Element")],e);const Element_i=e;

;// ../node_modules/@arcgis/core/form/elements/inputs/AttachmentInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var AttachmentInput_s;let AttachmentInput_p=AttachmentInput_s=class extends JSONSupport/* JSONSupport */.oY{constructor(r){super(r),this.type=null}clone(){return new AttachmentInput_s({type:this.type})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["attachment","audio","document","image","signature","video"],json:{write:!0}})],AttachmentInput_p.prototype,"type",void 0),AttachmentInput_p=AttachmentInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.AttachmentInput")],AttachmentInput_p);const c=AttachmentInput_p;

;// ../node_modules/@arcgis/core/form/elements/AttachmentElement.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var AttachmentElement_i;let AttachmentElement_p=AttachmentElement_i=class extends Element_i{constructor(t){super(t),this.attachmentKeyword=null,this.editableExpression=null,this.input=null,this.type="attachment"}clone(){return new AttachmentElement_i({attachmentKeyword:this.attachmentKeyword,description:this.description,editableExpression:this.editableExpression,input:this.input,label:this.label,visibilityExpression:this.visibilityExpression})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],AttachmentElement_p.prototype,"attachmentKeyword",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],AttachmentElement_p.prototype,"editableExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:c,json:{read:{source:"inputType"},write:{target:"inputType"}}})],AttachmentElement_p.prototype,"input",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["attachment"],json:{read:!1,write:!0}})],AttachmentElement_p.prototype,"type",void 0),AttachmentElement_p=AttachmentElement_i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.AttachmentElement")],AttachmentElement_p);const n=AttachmentElement_p;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/deprecate.js
var deprecate = __webpack_require__(50220);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
;// ../node_modules/@arcgis/core/form/elements/inputs/Input.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let Input_e=class extends JSONSupport/* JSONSupport */.oY{constructor(r){super(r),this.type=null}};(0,tslib_es6._)([(0,property/* property */.MZ)()],Input_e.prototype,"type",void 0),Input_e=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.Input")],Input_e);const Input_p=Input_e;

;// ../node_modules/@arcgis/core/form/elements/inputs/TextInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let TextInput_e=class extends Input_p{constructor(r){super(r),this.maxLength=null,this.minLength=0}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],TextInput_e.prototype,"maxLength",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],TextInput_e.prototype,"minLength",void 0),TextInput_e=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.TextInput")],TextInput_e);const TextInput_p=TextInput_e;

;// ../node_modules/@arcgis/core/form/elements/inputs/BarcodeScannerInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var o;let BarcodeScannerInput_c=o=class extends TextInput_p{constructor(r){super(r),this.type="barcode-scanner"}clone(){return new o({maxLength:this.maxLength,minLength:this.minLength})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["barcode-scanner"],json:{read:!1,write:!0}})],BarcodeScannerInput_c.prototype,"type",void 0),BarcodeScannerInput_c=o=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.BarcodeScannerInput")],BarcodeScannerInput_c);const BarcodeScannerInput_p=BarcodeScannerInput_c;

;// ../node_modules/@arcgis/core/form/elements/inputs/ComboBoxInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var ComboBoxInput_s;let ComboBoxInput_p=ComboBoxInput_s=class extends Input_p{constructor(o){super(o),this.noValueOptionLabel=null,this.showNoValueOption=!0,this.type="combo-box"}clone(){return new ComboBoxInput_s({showNoValueOption:this.showNoValueOption,noValueOptionLabel:this.noValueOptionLabel})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],ComboBoxInput_p.prototype,"noValueOptionLabel",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],ComboBoxInput_p.prototype,"showNoValueOption",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["combo-box"],json:{read:!1,write:!0}})],ComboBoxInput_p.prototype,"type",void 0),ComboBoxInput_p=ComboBoxInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.ComboBoxInput")],ComboBoxInput_p);const ComboBoxInput_i=ComboBoxInput_p;

;// ../node_modules/@arcgis/core/form/elements/inputs/DatePickerInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var DatePickerInput_p;function DatePickerInput_n(r){return null!=r?r:null}function a(r){return null!=r?r:null}let DatePickerInput_c=DatePickerInput_p=class extends Input_p{constructor(r){super(r),this.max=null,this.min=null,this.type="date-picker"}readMax(r,t){return DatePickerInput_n(t.max)}writeMax(r,t){t.max=a(r)}readMin(r,t){return DatePickerInput_n(t.min)}writeMin(r,t){t.min=a(r)}clone(){return new DatePickerInput_p({max:this.max,min:this.min})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],DatePickerInput_c.prototype,"max",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("max")],DatePickerInput_c.prototype,"readMax",null),(0,tslib_es6._)([(0,writer/* writer */.K)("max")],DatePickerInput_c.prototype,"writeMax",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],DatePickerInput_c.prototype,"min",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("min")],DatePickerInput_c.prototype,"readMin",null),(0,tslib_es6._)([(0,writer/* writer */.K)("min")],DatePickerInput_c.prototype,"writeMin",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["date-picker"],json:{read:!1,write:!0}})],DatePickerInput_c.prototype,"type",void 0),DatePickerInput_c=DatePickerInput_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.DatePickerInput")],DatePickerInput_c);const m=DatePickerInput_c;

;// ../node_modules/@arcgis/core/form/elements/inputs/DateTimeOffsetPickerInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var DateTimeOffsetPickerInput_n;function DateTimeOffsetPickerInput_p(t){return null!=t?t:null}function DateTimeOffsetPickerInput_m(t){return null!=t?t:null}let u=DateTimeOffsetPickerInput_n=class extends Input_p{constructor(t){super(t),this.includeTimeOffset=!0,this.max=null,this.min=null,this.timeResolution="minutes",this.type="datetimeoffset-picker"}readMax(t,e){return DateTimeOffsetPickerInput_p(e.max)}writeMax(t,e){e.max=DateTimeOffsetPickerInput_m(t)}readMin(t,e){return DateTimeOffsetPickerInput_p(e.min)}writeMin(t,e){e.min=DateTimeOffsetPickerInput_m(t)}readTimeResolution(t,e){return DateTimeOffsetPickerInput_p(e.timeResolution)}writeTimeResolution(t,e){e.timeResolution=DateTimeOffsetPickerInput_m(t)}clone(){return new DateTimeOffsetPickerInput_n({includeTimeOffset:this.includeTimeOffset,max:this.max,min:this.min,timeResolution:this.timeResolution})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],u.prototype,"includeTimeOffset",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],u.prototype,"max",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("max")],u.prototype,"readMax",null),(0,tslib_es6._)([(0,writer/* writer */.K)("max")],u.prototype,"writeMax",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],u.prototype,"min",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("min")],u.prototype,"readMin",null),(0,tslib_es6._)([(0,writer/* writer */.K)("min")],u.prototype,"writeMin",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],u.prototype,"timeResolution",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("timeResolution")],u.prototype,"readTimeResolution",null),(0,tslib_es6._)([(0,writer/* writer */.K)("timeResolution")],u.prototype,"writeTimeResolution",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["datetimeoffset-picker"],json:{read:!1,write:!0}})],u.prototype,"type",void 0),u=DateTimeOffsetPickerInput_n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.DateTimeOffsetPickerInput")],u);const l=u;

;// ../node_modules/@arcgis/core/form/elements/inputs/DateTimePickerInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var DateTimePickerInput_p;function DateTimePickerInput_n(e){return null!=e?new Date(e):null}function DateTimePickerInput_a(e){return e?e.getTime():null}let DateTimePickerInput_m=DateTimePickerInput_p=class extends Input_p{constructor(e){super(e),this.includeTime=!1,this.max=null,this.min=null,this.type="datetime-picker"}readMax(e,r){return DateTimePickerInput_n(r.max)}writeMax(e,r){r.max=DateTimePickerInput_a(e)}readMin(e,r){return DateTimePickerInput_n(r.min)}writeMin(e,r){r.min=DateTimePickerInput_a(e)}clone(){return new DateTimePickerInput_p({includeTime:this.includeTime,max:this.max,min:this.min})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],DateTimePickerInput_m.prototype,"includeTime",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Date,json:{type:Number,write:!0}})],DateTimePickerInput_m.prototype,"max",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("max")],DateTimePickerInput_m.prototype,"readMax",null),(0,tslib_es6._)([(0,writer/* writer */.K)("max")],DateTimePickerInput_m.prototype,"writeMax",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Date,json:{type:Number,write:!0}})],DateTimePickerInput_m.prototype,"min",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("min")],DateTimePickerInput_m.prototype,"readMin",null),(0,tslib_es6._)([(0,writer/* writer */.K)("min")],DateTimePickerInput_m.prototype,"writeMin",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["datetime-picker"],json:{read:!1,write:!0}})],DateTimePickerInput_m.prototype,"type",void 0),DateTimePickerInput_m=DateTimePickerInput_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.DateTimePickerInput")],DateTimePickerInput_m);const DateTimePickerInput_c=DateTimePickerInput_m;

;// ../node_modules/@arcgis/core/form/elements/inputs/RadioButtonsInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var RadioButtonsInput_s;let RadioButtonsInput_p=RadioButtonsInput_s=class extends Input_p{constructor(o){super(o),this.noValueOptionLabel=null,this.showNoValueOption=!0,this.type="radio-buttons"}clone(){return new RadioButtonsInput_s({noValueOptionLabel:this.noValueOptionLabel,showNoValueOption:this.showNoValueOption})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],RadioButtonsInput_p.prototype,"noValueOptionLabel",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],RadioButtonsInput_p.prototype,"showNoValueOption",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["radio-buttons"],json:{read:!1,write:!0}})],RadioButtonsInput_p.prototype,"type",void 0),RadioButtonsInput_p=RadioButtonsInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.RadioButtonsInput")],RadioButtonsInput_p);const RadioButtonsInput_i=RadioButtonsInput_p;

;// ../node_modules/@arcgis/core/form/elements/inputs/SwitchInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var SwitchInput_s;let SwitchInput_p=SwitchInput_s=class extends Input_p{constructor(o){super(o),this.offValue=null,this.onValue=null,this.type="switch"}clone(){return new SwitchInput_s({offValue:this.offValue,onValue:this.onValue})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String,Number],json:{write:!0}})],SwitchInput_p.prototype,"offValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String,Number],json:{write:!0}})],SwitchInput_p.prototype,"onValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["switch"],json:{read:!1,write:!0}})],SwitchInput_p.prototype,"type",void 0),SwitchInput_p=SwitchInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.SwitchInput")],SwitchInput_p);const SwitchInput_i=SwitchInput_p;

;// ../node_modules/@arcgis/core/form/elements/inputs/TextAreaInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var TextAreaInput_o;let TextAreaInput_p=TextAreaInput_o=class extends TextInput_p{constructor(r){super(r),this.type="text-area"}clone(){return new TextAreaInput_o({maxLength:this.maxLength,minLength:this.minLength})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["text-area"],json:{read:!1,write:!0}})],TextAreaInput_p.prototype,"type",void 0),TextAreaInput_p=TextAreaInput_o=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.TextAreaInput")],TextAreaInput_p);const TextAreaInput_a=TextAreaInput_p;

;// ../node_modules/@arcgis/core/form/elements/inputs/TextBoxInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var TextBoxInput_s;let TextBoxInput_p=TextBoxInput_s=class extends TextInput_p{constructor(t){super(t),this.type="text-box"}clone(){return new TextBoxInput_s({maxLength:this.maxLength,minLength:this.minLength})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["text-box"],json:{read:!1,write:!0}})],TextBoxInput_p.prototype,"type",void 0),TextBoxInput_p=TextBoxInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.TextBoxInput")],TextBoxInput_p);const TextBoxInput_c=TextBoxInput_p;

;// ../node_modules/@arcgis/core/form/elements/inputs/TimePickerInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var TimePickerInput_s;function TimePickerInput_p(t){return null!=t?t:null}function TimePickerInput_m(t){return null!=t?t:null}let TimePickerInput_u=TimePickerInput_s=class extends Input_p{constructor(t){super(t),this.max=null,this.min=null,this.timeResolution="minutes",this.type="time-picker"}readMax(t,e){return TimePickerInput_p(e.max)}writeMax(t,e){e.max=TimePickerInput_m(t)}readMin(t,e){return TimePickerInput_p(e.min)}writeMin(t,e){e.min=TimePickerInput_m(t)}readTimeResolution(t,e){return TimePickerInput_p(e.timeResolution)}writeTimeResolution(t,e){e.timeResolution=TimePickerInput_m(t)}clone(){return new TimePickerInput_s({max:this.max,min:this.min,timeResolution:this.timeResolution})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],TimePickerInput_u.prototype,"max",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("max")],TimePickerInput_u.prototype,"readMax",null),(0,tslib_es6._)([(0,writer/* writer */.K)("max")],TimePickerInput_u.prototype,"writeMax",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],TimePickerInput_u.prototype,"min",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("min")],TimePickerInput_u.prototype,"readMin",null),(0,tslib_es6._)([(0,writer/* writer */.K)("min")],TimePickerInput_u.prototype,"writeMin",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],TimePickerInput_u.prototype,"timeResolution",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("timeResolution")],TimePickerInput_u.prototype,"readTimeResolution",null),(0,tslib_es6._)([(0,writer/* writer */.K)("timeResolution")],TimePickerInput_u.prototype,"writeTimeResolution",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["time-picker"],json:{read:!1,write:!0}})],TimePickerInput_u.prototype,"type",void 0),TimePickerInput_u=TimePickerInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.TimePickerInput")],TimePickerInput_u);const TimePickerInput_l=TimePickerInput_u;

;// ../node_modules/@arcgis/core/form/elements/support/inputs.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const inputs_c={base:Input_p,key:"type",typeMap:{"barcode-scanner":BarcodeScannerInput_p,"combo-box":ComboBoxInput_i,"date-picker":m,"datetime-picker":DateTimePickerInput_c,"datetimeoffset-picker":l,"radio-buttons":RadioButtonsInput_i,switch:SwitchInput_i,"text-area":TextAreaInput_a,"text-box":TextBoxInput_c,"time-picker":TimePickerInput_l}};

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/domains.js + 5 modules
var domains = __webpack_require__(38938);
;// ../node_modules/@arcgis/core/form/elements/FieldElement.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var FieldElement_a;const d="esri.form.elements.FieldElement",FieldElement_u=Logger/* default */.A.getLogger(d);let FieldElement_m=FieldElement_a=class extends Element_i{constructor(e){super(e),this.domain=null,this.editableExpression=null,this.fieldName=null,this.hint=null,this.input=null,this.requiredExpression=null,this.type="field",this.valueExpression=null}get editable(){return (0,deprecate/* deprecatedProperty */.Lx)(FieldElement_u,"editable",{replacement:"editableExpression",version:"4.26",warnOnce:!0}),this._get("editable")??!0}set editable(e){(0,deprecate/* deprecatedProperty */.Lx)(FieldElement_u,"editable",{replacement:"editableExpression",version:"4.26",warnOnce:!0}),this._set("editable",e)}clone(){return new FieldElement_a({description:this.description,domain:this.domain,editable:this.editable,editableExpression:this.editableExpression,fieldName:this.fieldName,hint:this.hint,input:this.input,label:this.label,requiredExpression:this.requiredExpression,valueExpression:this.valueExpression,visibilityExpression:this.visibilityExpression})}};(0,tslib_es6._)([(0,property/* property */.MZ)({types:domains/* types */.gK,json:{read:{reader:domains/* fromJSON */.rS},write:!0}})],FieldElement_m.prototype,"domain",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],FieldElement_m.prototype,"editable",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],FieldElement_m.prototype,"editableExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],FieldElement_m.prototype,"fieldName",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],FieldElement_m.prototype,"hint",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:inputs_c,json:{read:{source:"inputType"},write:{target:"inputType"}}})],FieldElement_m.prototype,"input",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],FieldElement_m.prototype,"requiredExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:!1,write:!0}})],FieldElement_m.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],FieldElement_m.prototype,"valueExpression",void 0),FieldElement_m=FieldElement_a=(0,tslib_es6._)([(0,subclass/* subclass */.$)(d)],FieldElement_m);const FieldElement_c=FieldElement_m;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/popup/support/RelatedRecordsInfoFieldOrder.js
var RelatedRecordsInfoFieldOrder = __webpack_require__(33083);
;// ../node_modules/@arcgis/core/form/elements/RelationshipElement.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var RelationshipElement_p;let RelationshipElement_l=RelationshipElement_p=class extends Element_i{constructor(e){super(e),this.displayCount=null,this.displayType="list",this.editableExpression=null,this.orderByFields=null,this.relationshipId=null,this.type="relationship"}clone(){return new RelationshipElement_p({description:this.description,displayCount:this.displayCount,displayType:this.displayType,editableExpression:this.editableExpression,label:this.label,orderByFields:(0,lang/* clone */.o8)(this.orderByFields),relationshipId:this.relationshipId,visibilityExpression:this.visibilityExpression})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],RelationshipElement_l.prototype,"displayCount",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["list"],json:{write:!0}})],RelationshipElement_l.prototype,"displayType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],RelationshipElement_l.prototype,"editableExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[RelatedRecordsInfoFieldOrder/* default */.A],json:{write:!0}})],RelationshipElement_l.prototype,"orderByFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],RelationshipElement_l.prototype,"relationshipId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["relationship"],json:{read:!1,write:!0}})],RelationshipElement_l.prototype,"type",void 0),RelationshipElement_l=RelationshipElement_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.RelationshipElement")],RelationshipElement_l);const RelationshipElement_n=RelationshipElement_l;

;// ../node_modules/@arcgis/core/form/support/elements.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function elements_n(t){return{typesWithGroup:{base:Element_i,key:"type",typeMap:{attachment:n,field:FieldElement_c,group:t,relationship:RelationshipElement_n}},typesWithoutGroup:{base:Element_i,key:"type",typeMap:{attachment:n,field:FieldElement_c,relationship:RelationshipElement_n}}}}function elements_i(t,e,p=!0){if(!t)return null;const r=p?e.typesWithGroup.typeMap:e.typesWithoutGroup.typeMap;return t.filter((t=>r[t.type])).map((t=>r[t.type].fromJSON(t)))}function elements_u(t,e,p=!0){if(!t)return null;const r=p?e.typesWithGroup.typeMap:e.typesWithoutGroup.typeMap;return t.filter((t=>r[t.type])).map((t=>t.toJSON()))}function elements_s(e,p,r=!0){return e?e.map((e=>(0,ensureType/* ensureOneOfType */.aq)(r?p.typesWithGroup:p.typesWithoutGroup,e))):null}

;// ../node_modules/@arcgis/core/form/elements/GroupElement.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var GroupElement_d;let GroupElement_u=GroupElement_d=class extends Element_i{constructor(e){super(e),this.elements=null,this.initialState="expanded",this.type="group"}castElements(e){return elements_s(e,f,!1)}readElements(e,t){return elements_i(t.formElements,f,!1)}writeElements(e,t){t.formElements=elements_u(e,f,!1)}clone(){return new GroupElement_d({description:this.description,elements:(0,lang/* clone */.o8)(this.elements),initialState:this.initialState,label:this.label,visibilityExpression:this.visibilityExpression})}};(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],GroupElement_u.prototype,"elements",void 0),(0,tslib_es6._)([(0,cast/* cast */.w)("elements")],GroupElement_u.prototype,"castElements",null),(0,tslib_es6._)([(0,reader/* reader */.w)("elements",["formElements"])],GroupElement_u.prototype,"readElements",null),(0,tslib_es6._)([(0,writer/* writer */.K)("elements")],GroupElement_u.prototype,"writeElements",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["collapsed","expanded"],json:{write:!0}})],GroupElement_u.prototype,"initialState",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:!1,write:!0}})],GroupElement_u.prototype,"type",void 0),GroupElement_u=GroupElement_d=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.GroupElement")],GroupElement_u);const f=elements_n(GroupElement_u),y=GroupElement_u;

;// ../node_modules/@arcgis/core/form/FormTemplate.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var FormTemplate_f;const j=elements_n(y);let h=FormTemplate_f=class extends JSONSupport/* JSONSupport */.oY{constructor(e){super(e),this.description=null,this.elements=null,this.expressionInfos=null,this.preserveFieldValuesWhenHidden=!1,this.title=null}castElements(e){return elements_s(e,j)}readElements(e,t){return elements_i(t.formElements,j)}writeElements(e,t){t.formElements=elements_u(e,j)}clone(){return new FormTemplate_f({description:this.description,expressionInfos:(0,lang/* clone */.o8)(this.expressionInfos),elements:(0,lang/* clone */.o8)(this.elements),title:this.title,preserveFieldValuesWhenHidden:this.preserveFieldValuesWhenHidden})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],h.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],h.prototype,"elements",void 0),(0,tslib_es6._)([(0,cast/* cast */.w)("elements")],h.prototype,"castElements",null),(0,tslib_es6._)([(0,reader/* reader */.w)("elements",["formElements"])],h.prototype,"readElements",null),(0,tslib_es6._)([(0,writer/* writer */.K)("elements")],h.prototype,"writeElements",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[i],json:{write:!0}})],h.prototype,"expressionInfos",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!1,write:!0}})],h.prototype,"preserveFieldValuesWhenHidden",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],h.prototype,"title",void 0),h=FormTemplate_f=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.FormTemplate")],h);const FormTemplate_y=h;


/***/ }),

/***/ 92978:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Q: () => (/* binding */ y),
/* harmony export */   $f: () => (/* binding */ O),
/* harmony export */   BT: () => (/* binding */ k),
/* harmony export */   CR: () => (/* binding */ N),
/* harmony export */   HF: () => (/* binding */ j),
/* harmony export */   HY: () => (/* binding */ h),
/* harmony export */   Io: () => (/* binding */ d),
/* harmony export */   JT: () => (/* binding */ V),
/* harmony export */   Jj: () => (/* binding */ w),
/* harmony export */   KC: () => (/* binding */ b),
/* harmony export */   NN: () => (/* binding */ m),
/* harmony export */   Ow: () => (/* binding */ U),
/* harmony export */   PW: () => (/* binding */ K),
/* harmony export */   SE: () => (/* binding */ P),
/* harmony export */   Zu: () => (/* binding */ F),
/* harmony export */   _2: () => (/* binding */ W),
/* harmony export */   aI: () => (/* binding */ g),
/* harmony export */   c7: () => (/* binding */ R),
/* harmony export */   cY: () => (/* binding */ v),
/* harmony export */   e$: () => (/* binding */ H),
/* harmony export */   fC: () => (/* binding */ T),
/* harmony export */   gR: () => (/* binding */ p),
/* harmony export */   iv: () => (/* binding */ E),
/* harmony export */   jL: () => (/* binding */ C),
/* harmony export */   mh: () => (/* binding */ M),
/* harmony export */   nf: () => (/* binding */ A),
/* harmony export */   pn: () => (/* binding */ J),
/* harmony export */   px: () => (/* binding */ B),
/* harmony export */   r: () => (/* binding */ L),
/* harmony export */   ux: () => (/* binding */ x),
/* harmony export */   y$: () => (/* binding */ D),
/* harmony export */   yI: () => (/* binding */ S)
/* harmony export */ });
/* unused harmony exports changeDefaultSpatialReferenceTolerance, clearDefaultSpatialReferenceTolerance, extendedSpatialReferenceInfo, flipHorizontal, flipVertical, intersectLinesToPoints, nearestVertices */
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17639);
/* harmony import */ var _core_workers_workers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90752);
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78632);
/* harmony import */ var _support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1171);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function r(n){return Array.isArray(n)?n[0]?.spatialReference:n?.spatialReference}function a(n){return n?Array.isArray(n)?n.map(a):n.toJSON?n.toJSON():n:n}function i(n){return Array.isArray(n)?n.map((n=>(0,_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .fromJSON */ .rS)(n))):(0,_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .fromJSON */ .rS)(n)}function o(n,t){let e;return Array.isArray(n)?e=n:(e=[],e.push(n),null!=t&&e.push(t)),e}let c;async function u(){return c||(c=(0,_core_workers_workers_js__WEBPACK_IMPORTED_MODULE_1__/* .open */ .ho)("geometryEngineWorker",{strategy:"distributed"})),c}async function s(n,t){return(await u()).invoke("executeGEOperation",{operation:n,parameters:a(t)})}async function f(n,t){const e=await u();return Promise.all(e.broadcast("executeGEOperation",{operation:n,parameters:a(t)}))}function l(n){return s("extendedSpatialReferenceInfo",[n])}async function y(n,t){return i(await s("clip",[r(n),n,t]))}async function w(n,t){return i(await s("cut",[r(n),n,t]))}function p(n,t){return s("contains",[r(n),n,t])}function m(n,t){return s("crosses",[r(n),n,t])}function d(n,t,e){return s("distance",[r(n),n,t,e])}function g(n,t){return s("equals",[r(n),n,t])}function h(n,t){return s("intersects",[r(n),n,t])}function S(n,t){return s("touches",[r(n),n,t])}function x(n,t){return s("within",[r(n),n,t])}function A(n,t){return s("disjoint",[r(n),n,t])}function O(n,t){return s("overlaps",[r(n),n,t])}function R(n,t,e){return s("relate",[r(n),n,t,e])}function J(n){return s("isSimple",[r(n),n])}async function N(n){return i(await s("simplify",[r(n),n]))}async function j(n,t=!1){return i(await s("convexHull",[r(n),n,t]))}async function E(n,t){return i(await s("difference",[r(n),n,t]))}async function k(n,t){return i(await s("symmetricDifference",[r(n),n,t]))}async function D(n,t){return i(await s("intersect",[r(n),n,t]))}async function b(n,t=null){const e=o(n,t);return i(await s("union",[r(e),e]))}async function v(n,t,e,a,o,c){return i(await s("offset",[r(n),n,t,e,a,o,c]))}async function L(n,t,e,a=!1){const o=[r(n),n,t,e,a];return i(await s("buffer",o))}async function P(n,t,e,a,o,c){const u=[r(n),n,t,e,a,o,c];return i(await s("geodesicBuffer",u))}async function T(n,e,a=!0){const i=await s("nearestCoordinate",[r(n),n,e,a]);return{...i,coordinate:_Point_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.fromJSON(i.coordinate)}}async function V(n,e){const a=await s("nearestVertex",[r(n),n,e]);return{...a,coordinate:_Point_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.fromJSON(a.coordinate)}}async function z(n,e,a,i){return(await s("nearestVertices",[r(n),n,e,a,i])).map((n=>({...n,coordinate:t.fromJSON(n.coordinate)})))}function G(n){return"xmin"in n?n.center:"x"in n?n:n.extent?.center}async function H(n,t,e){if(null==n)throw new Z;const r=n.spatialReference;if(null==(e=e??G(n)))throw new Z;const a=n.constructor.fromJSON(await s("rotate",[r,n,t,e]));return a.spatialReference=r,a}async function I(n,t){if(null==n)throw new Z;const e=n.spatialReference;if(null==(t=t??G(n)))throw new Z;const r=n.constructor.fromJSON(await s("flipHorizontal",[e,n,t]));return r.spatialReference=e,r}async function q(n,t){if(null==n)throw new Z;const e=n.spatialReference;if(null==(t=t??G(n)))throw new Z;const r=n.constructor.fromJSON(await s("flipVertical",[e,n,t]));return r.spatialReference=e,r}async function B(n,t,e,a){return i(await s("generalize",[r(n),n,t,e,a]))}async function C(n,t,e){return i(await s("densify",[r(n),n,t,e]))}async function U(n,t,e,a=0){return i(await s("geodesicDensify",[r(n),n,t,e,a]))}function W(n,t){return s("planarArea",[r(n),n,t])}function F(n,t){return s("planarLength",[r(n),n,t])}function K(n,t,e){return s("geodesicArea",[r(n),n,t,e])}function M(n,t,e){return s("geodesicLength",[r(n),n,t,e])}async function Q(n,t){return i(await s("intersectLinesToPoints",[r(n),n,t]))}async function X(n,t){await f("changeDefaultSpatialReferenceTolerance",[n,t])}async function Y(n){await f("clearDefaultSpatialReferenceTolerance",[n])}class Z extends Error{constructor(){super("Illegal Argument Exception")}}


/***/ }),

/***/ 83780:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Ze)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/PopupTemplate.js + 3 modules
var PopupTemplate = __webpack_require__(56542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/ClassBreaksRenderer.js
var ClassBreaksRenderer = __webpack_require__(17671);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/DictionaryRenderer.js
var DictionaryRenderer = __webpack_require__(84685);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/DotDensityRenderer.js + 1 modules
var DotDensityRenderer = __webpack_require__(20299);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/HeatmapRenderer.js + 1 modules
var HeatmapRenderer = __webpack_require__(25498);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/PieChartRenderer.js + 2 modules
var PieChartRenderer = __webpack_require__(79300);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/Renderer.js
var Renderer = __webpack_require__(76589);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/SimpleRenderer.js
var SimpleRenderer = __webpack_require__(47347);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/UniqueValueRenderer.js + 3 modules
var UniqueValueRenderer = __webpack_require__(2692);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/jsonUtils.js
var jsonUtils = __webpack_require__(48887);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/types.js
var types = __webpack_require__(49169);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/request.js
var request = __webpack_require__(86394);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols.js + 1 modules
var symbols = __webpack_require__(30822);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(24793);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(48982);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(35775);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/object.js
var object = __webpack_require__(76724);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/sql.js
var sql = __webpack_require__(76859);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(20909);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(4130);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/layerContainerType.js
var layerContainerType = __webpack_require__(73324);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/form/FormTemplate.js + 21 modules
var FormTemplate = __webpack_require__(94882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/Layer.js + 1 modules
var Layer = __webpack_require__(68833);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry.js
var geometry = __webpack_require__(17639);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/Graphic.js
var Graphic = __webpack_require__(25707);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Loadable.js
var Loadable = __webpack_require__(45307);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Promise.js
var core_Promise = __webpack_require__(84410);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/workers/workers.js + 5 modules
var workers = __webpack_require__(90752);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/shared.js
var shared = __webpack_require__(64996);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/query/operations/editsZScale.js
var editsZScale = __webpack_require__(9669);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/query/operations/queryZScale.js
var queryZScale = __webpack_require__(27604);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/FeatureSet.js
var FeatureSet = __webpack_require__(57822);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(84698);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Polygon.js
var Polygon = __webpack_require__(62802);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/typeUtils.js
var typeUtils = __webpack_require__(12433);
;// ../node_modules/@arcgis/core/layers/graphics/sources/MemorySource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let _=0,T=class extends(Loadable/* default */.A.LoadableMixin((0,core_Promise/* EsriPromiseMixin */.g)(Collection/* default */.A))){constructor(e){super(e),this._idToClientGraphic=null,this.type="memory"}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}get _workerGeometryType(){const e=this.layer?.geometryType;return e?this._geometryTypeRequiresClientGraphicMapping(e)?"polygon":e:null}applyEdits(e){return this.load().then((()=>this._applyEdits(e)))}openPorts(){return this.load().then((()=>this._connection.openPorts()))}async queryFeatures(e,t={}){await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);(0,queryZScale/* applyFeatureSetZUnitScaling */.q)(e,this.layer.spatialReference,r);const s=FeatureSet/* default */.A.fromJSON(r);if(!this._requiresClientGraphicMapping())return s;const i=this.layer.objectIdField;for(const o of s.features){const e=o.attributes[i],t=this._idToClientGraphic.get(e);t&&(o.geometry=t.geometry)}return s.geometryType=this.layer.geometryType,s}async queryFeaturesJSON(e,t={}){if(this._requiresClientGraphicMapping())throw new Error/* default */.A("query-features-json:unsupported","Cannot query in JSON format for client only geometry types (mesh and extent)");await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return (0,queryZScale/* applyFeatureSetZUnitScaling */.q)(e,this.layer.spatialReference,r),r}queryFeatureCount(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:Extent/* default */.A.fromJSON(e.extent)})))}querySnapping(e,t={}){return this.load(t).then((()=>this._connection.invoke("querySnapping",e,t)))}async _applyEdits(e){if(!this._connection)throw new Error/* default */.A("feature-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField;let r=null;const i=[],o=[];await Promise.all([this._prepareClientMapping(e.addFeatures,null),this._prepareClientMapping(e.updateFeatures,null)]);const n=e=>"objectId"in e&&null!=e.objectId?e.objectId:"attributes"in e&&null!=e.attributes[t]?e.attributes[t]:null;if(e.addFeatures&&(r=this._prepareAddFeatures(e.addFeatures)),e.deleteFeatures)for(const s of e.deleteFeatures){const e=n(s);null!=e&&i.push(e)}const a=e.updateFeatures&&this._idToClientGraphic?new Map:null;if(e.updateFeatures)for(const s of e.updateFeatures)if(o.push(this._serializeFeature(s)),a){const e=n(s);null!=e&&a.set(e,s)}(0,editsZScale/* unapplyEditsZUnitScaling */.u)(r?r.features:null,o,this.layer.spatialReference);const{fullExtent:l,featureEditResults:u}=await this._connection.invoke("applyEdits",{adds:r?r.features:[],updates:o,deletes:i});return this.fullExtent=l,r&&r.finish(u.uidToObjectId),this._updateClientGraphicIds(a,u),this._createEditsResult(u)}async _prepareClientMapping(e,t){if("mesh"!==this._layerOrSourceGeometryType||null==e)return;const r=[];for(const{geometry:s}of e)null==s||"mesh"!==s.type||s.hasExtent||s.loaded||r.push(s.load({signal:t}));r.length&&await Promise.all(r)}_updateClientGraphicIds(e,t){if(this._idToClientGraphic){if(e)for(const r of t.updateResults){if(!r.success)continue;const t=e.get(r.objectId);null!=t&&this._addIdToClientGraphic(t)}for(const e of t.deleteResults)e.success&&this._idToClientGraphic.delete(e.objectId)}}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new Error/* default */.A("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_prepareAddFeatures(e){const t=new Map,r=new Array(e.length);let s=null;for(let o=0;o<e.length;o++){const i=e[o],n=this._serializeFeature(i);s||null==i.geometry||(s=i.geometry.type),r[o]=n,t.set(`${n.uid}`,i)}const i=this;return{features:r,inferredGeometryType:s,finish(e){const r=i.sourceJSON.objectIdField;for(const s in e){const o=e[s],n=t.get(s);n&&(n.attributes||(n.attributes={}),-1===o?delete n.attributes[r]:n.attributes[r]=o,i._addIdToClientGraphic(n))}}}}_addIdToClientGraphic(e){if(!this._idToClientGraphic)return;const t=this.sourceJSON.objectIdField,r=e.attributes?.[t];null!=r&&this._idToClientGraphic.set(r,e)}get _layerOrSourceGeometryType(){return this.layer?.geometryType??this.sourceJSON?.geometryType}_requiresClientGraphicMapping(){return this._geometryTypeRequiresClientGraphicMapping(this._layerOrSourceGeometryType)}_geometryRequiresClientGraphicMapping(e){return this._geometryTypeRequiresClientGraphicMapping(e.type)}_geometryTypeRequiresClientGraphicMapping(e){return"mesh"===e||"multipatch"===e||"extent"===e}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e),s=(_++).toString();return r?{uid:s,geometry:r.toJSON(),attributes:t}:{uid:s,attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;if(null==t)return null;if(this._geometryRequiresClientGraphicMapping(t)){return t.extent?Polygon/* default */.A.fromExtent(t.extent):null}return t}async _startWorker(e){this._connection=await (0,workers/* open */.ho)("MemorySourceWorker",{strategy:(0,has/* default */.A)("feature-layers-workers")?"dedicated":"local",signal:e,registryTarget:this});const{fields:t,spatialReference:r,objectIdField:s,hasM:i,hasZ:n,timeInfo:l,dateFieldsTimeZone:u}=this.layer,p="defaults"===this.layer.originOf("spatialReference");await this._prepareClientMapping(this.items,e);const c=this._prepareAddFeatures(this.items);this.addHandles(this.on("before-changes",(e=>{Logger/* default */.A.getLogger(this).error("Source modifications will not propagate after layer has been loaded. Please use .applyEdits() instead"),e.preventDefault()})));const d={features:c.features,fields:t?.map((e=>e.toJSON())),geometryType:typeUtils/* typeKebabDictionary */.Y.toJSON(this._workerGeometryType),hasM:"mesh"!==this._layerOrSourceGeometryType&&i,hasZ:"mesh"===this._layerOrSourceGeometryType||n,objectIdField:s,spatialReference:p?null:r&&r.toJSON(),timeInfo:l?.toJSON()??null,dateFieldsTimeZone:u},h=await this._connection.invoke("load",d,{signal:e});for(const a of h.warnings)Logger/* default */.A.getLogger(this.layer).warn("#load()",`${a.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:a});h.featureErrors.length&&Logger/* default */.A.getLogger(this.layer).warn("#load()",`Encountered ${h.featureErrors.length} validation errors while loading features. (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{errors:h.featureErrors});const y=h.layerDefinition;this._geometryTypeRequiresClientGraphicMapping(c.inferredGeometryType)&&(y.geometryType=typeUtils/* typeKebabDictionary */.Y.toJSON(c.inferredGeometryType)),this.sourceJSON=y,this._requiresClientGraphicMapping()&&(this._idToClientGraphic=new Map),c.finish(h.assignedObjectIds)}};(0,tslib_es6._)([(0,shared/* shared */.u)({Type:Graphic/* default */.A,ensureType:(0,ensureType/* ensureType */.dp)(Graphic/* default */.A)})],T.prototype,"itemType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],T.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],T.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],T.prototype,"_workerGeometryType",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],T.prototype,"sourceJSON",void 0),T=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.graphics.sources.MemorySource")],T);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/APIKeyMixin.js
var APIKeyMixin = __webpack_require__(50193);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/ArcGISService.js
var ArcGISService = __webpack_require__(45681);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/BlendLayer.js
var BlendLayer = __webpack_require__(15305);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/CustomParametersMixin.js
var CustomParametersMixin = __webpack_require__(16161);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/EditBusLayer.js
var EditBusLayer = __webpack_require__(46602);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/FeatureEffectLayer.js
var FeatureEffectLayer = __webpack_require__(15053);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/FeatureLayerBase.js + 5 modules
var FeatureLayerBase = __webpack_require__(71679);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/FeatureReductionLayer.js + 3 modules
var FeatureReductionLayer = __webpack_require__(64782);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(41506);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/OrderedLayer.js + 1 modules
var OrderedLayer = __webpack_require__(94795);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/PortalLayer.js
var PortalLayer = __webpack_require__(34722);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(52495);
;// ../node_modules/@arcgis/core/layers/support/PublishingInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let e=class extends Accessor/* default */.A{constructor(){super(...arguments),this.updating=!1,this.status="unknown"}};(0,tslib_es6._)([(0,property/* property */.MZ)()],e.prototype,"updating",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],e.prototype,"status",void 0),e=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.PublishingInfo")],e);const p=e;

;// ../node_modules/@arcgis/core/layers/mixins/PublishableLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const o="esri.layers.mixins.PublishableLayer",i=Symbol(o);function n(s){return null!=s&&"object"==typeof s&&i in s}const u=n=>{var u;let a=class extends n{constructor(){super(...arguments),this[u]=!0}get publishingInfo(){if(this.destroyed)return null;const s=this._get("publishingInfo");if(s)return s;const t=new p;return this._checkPublishingStatus(t),t}_checkPublishingStatus(s){const t=250,e=125;let r=0;const o=async t=>{let n;s.updating=!0;try{n=await this.fetchPublishingStatus()}catch(u){n="unavailable"}"published"!==n&&"unavailable"!==n||("publishing"===s.status&&this.refresh(),i.remove()),s.status=n,s.updating=!1,i.removed||(r=setTimeout(o,t,t+e))},i={removed:!1,remove(){this.removed=!0,clearTimeout(r)}};this.when().catch((()=>i.remove())),o(t),this.addHandles(i)}};return u=i,(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,clonable:!1})],a.prototype,"publishingInfo",null),a=(0,tslib_es6._)([(0,subclass/* subclass */.$)(o)],a),a};

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/RefreshableLayer.js + 1 modules
var RefreshableLayer = __webpack_require__(50508);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js
var ScaleRangeLayer = __webpack_require__(25389);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/TemporalLayer.js
var TemporalLayer = __webpack_require__(90826);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js
var arcgisLayerUrl = __webpack_require__(16123);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/commonProperties.js + 1 modules
var commonProperties = __webpack_require__(84356);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/featureLayerUtils.js + 1 modules
var featureLayerUtils = __webpack_require__(97461);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/FeatureTemplate.js
var FeatureTemplate = __webpack_require__(48330);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/FeatureType.js
var FeatureType = __webpack_require__(25392);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/fieldProperties.js
var fieldProperties = __webpack_require__(77567);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/fieldUtils.js
var fieldUtils = __webpack_require__(42453);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/LabelClass.js + 1 modules
var LabelClass = __webpack_require__(86155);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/labelingInfo.js
var labelingInfo = __webpack_require__(79682);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/serviceCapabilitiesUtils.js + 1 modules
var serviceCapabilitiesUtils = __webpack_require__(90351);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/TimeInfo.js
var TimeInfo = __webpack_require__(83849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/versionUtils.js
var versionUtils = __webpack_require__(93797);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/source/DataLayerSource.js + 3 modules
var DataLayerSource = __webpack_require__(44360);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/styleUtils.js
var styleUtils = __webpack_require__(21484);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/Query.js + 1 modules
var Query = __webpack_require__(24587);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/TopFeaturesQuery.js + 1 modules
var TopFeaturesQuery = __webpack_require__(56051);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/popupUtils.js
var popupUtils = __webpack_require__(44116);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/webdoc/interfaces.js
var interfaces = __webpack_require__(15954);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/webdoc/support/opacityUtils.js
var opacityUtils = __webpack_require__(48904);
;// ../node_modules/@arcgis/core/layers/FeatureLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const Ue="FeatureLayer",Qe="esri.layers.FeatureLayer",Ne=Logger/* default */.A.getLogger(Qe);function $e(e,r){return new Error/* default */.A("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${r}`,{layer:e})}function Ge(e){return e&&e instanceof Collection/* default */.A}const Je=(0,fieldProperties/* defineFieldProperties */.p)();function We(e,r,t){const i=!!t?.writeLayerSchema;return{enabled:i,ignoreOrigin:i}}let Be=class extends((0,FeatureLayerBase/* FeatureLayerBase */.j)((0,FeatureReductionLayer/* FeatureReductionLayer */.J)((0,FeatureEffectLayer/* FeatureEffectLayer */.F)(u((0,EditBusLayer/* EditBusLayer */.w6)((0,BlendLayer/* BlendLayer */.d)((0,OrderedLayer/* OrderedLayer */.f)((0,TemporalLayer/* TemporalLayer */.e)((0,ScaleRangeLayer/* ScaleRangeLayer */.j)((0,RefreshableLayer/* RefreshableLayer */.J)((0,ArcGISService/* ArcGISService */.b)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.A)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)((0,CustomParametersMixin/* CustomParametersMixin */.d)((0,APIKeyMixin/* APIKeyMixin */.p)((0,Clonable/* ClonableMixin */.O)(Layer/* default */.A)))))))))))))))))){constructor(...e){super(...e),this.charts=null,this.copyright=null,this.displayField=null,this.dynamicDataSource=null,this.fields=null,this.fieldsIndex=null,this.formTemplate=null,this.fullExtent=null,this.geometryType=null,this.hasM=void 0,this.hasZ=void 0,this.infoFor3D=null,this.isTable=!1,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.outFields=null,this.path=null,this.popupEnabled=!0,this.popupTemplate=null,this.resourceInfo=null,this.screenSizePerspectiveEnabled=!0,this.spatialReference=SpatialReference/* default */.A.WGS84,this.subtypeCode=null,this.templates=null,this.timeInfo=null,this.title=null,this.sublayerTitleMode="item-title",this.type="feature",this.typeIdField=null,this.types=null,this.visible=!0,this._debouncedSaveOperations=(0,promiseUtils/* debounce */.sg)((async(e,r,t)=>{const{save:i,saveAs:o}=await __webpack_require__.e(/* import() */ 7610).then(__webpack_require__.bind(__webpack_require__, 77610));switch(e){case interfaces/* SaveOperationType */.X.SAVE:return i(this,r);case interfaces/* SaveOperationType */.X.SAVE_AS:return o(this,t,r)}}))}destroy(){this.source?.destroy()}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}load(e){const r=null!=e?e.signal:null;if(this.portalItem?.loaded&&this.source)return this.addResolvingPromise(this.createGraphicsSource(r).then((e=>this.initLayerProperties(e)))),Promise.resolve(this);const t=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},e).catch(promiseUtils/* throwIfAbortError */.QP).then((async()=>{if(this.url&&null==this.layerId&&/FeatureServer|MapServer\/*$/i.test(this.url)){const e=await this._fetchFirstValidLayerId(r);null!=e&&(this.layerId=e)}if(!this.url&&!this._hasMemorySource())throw new Error/* default */.A("feature-layer:missing-url-or-source","Feature layer must be created with either a url or a source");return this.initLayerProperties(await this.createGraphicsSource(r))})).then((()=>(0,featureLayerUtils/* ensureLayerCredential */.VA)(this,"load",e)));return this.addResolvingPromise(t),Promise.resolve(this)}readCapabilities(e,r){return r=r.layerDefinition||r,(0,serviceCapabilitiesUtils/* getFeatureLayerCapabilities */.S)(r,this.url)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("dynamicDataSource"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return!(this.loaded&&!this.capabilities?.operations.supportsEditing)&&(this._isOverridden("editingEnabled")?this._get("editingEnabled"):this._hasMemorySource()||this.userHasEditingPrivileges)}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}readEditingEnabled(e,r){return this._readEditingEnabled(r,!1)}readEditingEnabledFromWebMap(e,r,t){return this._readEditingEnabled(r,!0,t)}writeEditingEnabled(e,r){this._writeEditingEnabled(e,r,!1)}writeEditingEnabledToWebMap(e,r,t,i){this._writeEditingEnabled(e,r,!0,i)}get effectiveEditingEnabled(){return (0,featureLayerUtils/* computeEffectiveEditingEnabled */.C$)(this)}readIsTable(e,r){return"Table"===(r=r?.layerDefinition??r).type||!r.geometryType}writeIsTable(e,r,t,i){i?.writeLayerSchema&&(0,object/* setDeepValue */.sM)(t,e?"Table":"Feature Layer",r)}readGlobalIdField(e,r){return (0,featureLayerUtils/* readGlobalIdField */.jD)(r.layerDefinition||r)}readObjectIdField(e,r){return (0,featureLayerUtils/* readObjectIdField */.Zm)(r.layerDefinition||r)}get parsedUrl(){const e=(0,urlUtils/* urlToObject */.An)(this.url);return null!=e&&(null!=this.dynamicDataSource?e.path=(0,urlUtils/* join */.fj)(e.path,"dynamicLayer"):null!=this.layerId&&(e.path=(0,urlUtils/* join */.fj)(e.path,this.layerId.toString()))),e}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){(0,fieldUtils/* fixRendererFields */.yp)(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,r,i){r=r.layerDefinition||r;const o=r.drawingInfo?.renderer;if(o){const e=(0,jsonUtils/* read */.L)(o,r,i)??void 0;return e||Ne.error("Failed to create renderer",{rendererDefinition:r.drawingInfo.renderer,layer:this,context:i}),e}return (0,featureLayerUtils/* createDefaultRenderer */.PD)(r,i)}set source(e){const r=this._get("source");r!==e&&(Ge(r)&&this._resetMemorySource(r),Ge(e)&&this._initMemorySource(e),this._set("source",e))}castSource(e){return e?Array.isArray(e)||e instanceof Collection/* default */.A?new T({layer:this,items:e}):e:null}readSource(e,r){const t=FeatureSet/* default */.A.fromJSON(r.featureSet);return new T({layer:this,items:t?.features??[]})}readTemplates(e,r){const t=r.editFieldsInfo,i=t?.creatorField,o=t?.editorField;return e=e?.map((e=>FeatureTemplate/* default */.A.fromJSON(e))),this._fixTemplates(e,i),this._fixTemplates(e,o),e}readTitle(e,r){const t=r.layerDefinition?.name??r.name,i=r.title||r.layerDefinition?.title;if(t){const e=this.portalItem?.title;if("item-title"===this.sublayerTitleMode)return this.url?(0,arcgisLayerUrl/* titleFromUrlAndName */.yG)(this.url,t):t;let r=t;if(!r&&this.url){const e=(0,arcgisLayerUrl/* parse */.qg)(this.url);null!=e&&(r=e.title)}if(!r)return;return"item-title-and-service-name"===this.sublayerTitleMode&&e&&e!==r&&(r=e+" - "+r),(0,arcgisLayerUrl/* cleanTitle */.cr)(r)}if("item-title"===this.sublayerTitleMode&&i)return i}readTitleFromWebMap(e,r){return r.title||r.layerDefinition?.name}readTypeIdField(e,r){let t=(r=r.layerDefinition||r).typeIdField;if(t&&r.fields){t=t.toLowerCase();const e=r.fields.find((e=>e.name.toLowerCase()===t));e&&(t=e.name)}return t}readTypes(e,r){e=(r=r.layerDefinition||r).types;const t=r.editFieldsInfo,i=t?.creatorField,o=t?.editorField;return e?.map((e=>(e=FeatureType/* default */.A.fromJSON(e),this._fixTemplates(e.templates,i),this._fixTemplates(e.templates,o),e)))}readVisible(e,r){return null!=r.layerDefinition?.defaultVisibility?!!r.layerDefinition.defaultVisibility:null!=r.visibility?!!r.visibility:void 0}async addAttachment(e,r){return (0,featureLayerUtils/* addAttachment */.Xl)(this,e,r,Ue)}async updateAttachment(e,r,t){return (0,featureLayerUtils/* updateAttachment */.bt)(this,e,r,t,Ue)}async applyEdits(e,r){return (0,featureLayerUtils/* applyEdits */.ct)(this,e,r)}async uploadAssets(e,r){return (0,featureLayerUtils/* uploadAssets */.rn)(this,e,r)}on(e,r){return super.on(e,r)}createPopupTemplate(e){return (0,popupUtils/* createPopupTemplate */.tn)(this,e)}async createGraphicsSource(e){if(this._hasMemorySource()&&this.source)return this.source.load({signal:e});const{default:r}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 7982).then(__webpack_require__.bind(__webpack_require__, 35601)),e);return new r({layer:this}).load({signal:e})}createQuery(){const e=(0,featureLayerUtils/* createQuery */.VZ)(this);e.dynamicDataSource=this.dynamicDataSource;const r=null!=this.subtypeCode?`${this.subtypeField} = ${this.subtypeCode}`:null,t=(0,sql/* sqlAnd */.m)(this.definitionExpression,r);return e.where=t||"1=1",e}async deleteAttachments(e,r){return (0,featureLayerUtils/* deleteAttachments */.mm)(this,e,r,Ue)}async fetchRecomputedExtents(e){return (0,featureLayerUtils/* fetchRecomputedExtents */.WP)(this,e,Ue)}getFeatureType(e){const{typeIdField:r,types:t}=this;if(!r||!e)return null;const i=e.attributes?e.attributes[r]:void 0;if(null==i)return null;let o=null;return t?.some((e=>{const{id:r}=e;return null!=r&&(r.toString()===i.toString()&&(o=e),!!o)})),o}getFieldDomain(e,r){const t=r?.feature,i=this.getFeatureType(t);if(i){const r=i.domains&&i.domains[e];if(r&&"inherited"!==r.type)return r}return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}async queryAttachments(e,r){return (0,featureLayerUtils/* queryAttachments */.lV)(this,e,r,Ue)}async queryFeatures(e,r){const t=await this.load(),i=await t.source.queryFeatures(Query/* default */.A.from(e)??t.createQuery(),r);if(i?.features)for(const o of i.features)o.layer=o.sourceLayer=t;return i}async queryObjectIds(e,r){return (0,featureLayerUtils/* queryObjectIds */.sg)(this,e,r,Ue)}async queryFeatureCount(e,r){return (0,featureLayerUtils/* queryFeatureCount */.Ye)(this,e,r,Ue)}async queryExtent(e,r){return (0,featureLayerUtils/* queryExtent */.B5)(this,e,r,Ue)}async queryRelatedFeatures(e,r){return (0,featureLayerUtils/* queryRelatedFeatures */.hM)(this,e,r,Ue)}async queryRelatedFeaturesCount(e,r){return (0,featureLayerUtils/* queryRelatedFeaturesCount */.S2)(this,e,r,Ue)}async queryTopFeatures(e,r){const{source:t,capabilities:i}=await this.load();if(!t.queryTopFeatures||!i?.query?.supportsTopFeaturesQuery)throw new Error/* default */.A(Ue,"Layer source does not support queryTopFeatures capability");const o=await t.queryTopFeatures(TopFeaturesQuery/* default */.A.from(e),r);if(o?.features)for(const s of o.features)s.layer=s.sourceLayer=this;return o}async queryTopObjectIds(e,r){const{source:t,capabilities:i}=await this.load();if(!t.queryTopObjectIds||!i?.query.supportsTopFeaturesQuery)throw new Error/* default */.A(Ue,"Layer source does not support queryTopObjectIds capability");return t.queryTopObjectIds(TopFeaturesQuery/* default */.A.from(e),r)}async queryTopFeaturesExtent(e,r){const{source:t,capabilities:i}=await this.load();if(!t.queryTopExtents||!i?.query?.supportsTopFeaturesQuery)throw new Error/* default */.A(Ue,"Layer source does not support queryTopExtents capability");return t.queryTopExtents(TopFeaturesQuery/* default */.A.from(e),r)}async queryTopFeatureCount(e,r){const{source:t,capabilities:i}=await this.load();if(!t.queryTopCount||!i?.query?.supportsTopFeaturesQuery)throw new Error/* default */.A(Ue,"Layer source does not support queryFeatureCount capability");return t.queryTopCount(TopFeaturesQuery/* default */.A.from(e),r)}read(e,r){const t=e.featureCollection;if(t){this.resourceInfo=e;const i=t.layers;i&&1===i.length&&(super.read(i[0],r),null!=t.showLegend&&super.read({showLegend:t.showLegend},r))}super.read(e,r),r&&"service"===r.origin&&(this.revert(["objectIdField","fields","timeInfo","dateFieldsTimeZone"],"service"),this.spatialReference||this.revert(["spatialReference"],"service"))}write(e,r){r={...r,origin:r?.origin??void 0,writeLayerSchema:r?.writeLayerSchema??this._hasMemorySource()};const{origin:t,layerContainerType:i,messages:o}=r;if(this.dynamicDataSource)return o?.push($e(this,"using a dynamic data source cannot be written to web scenes, web maps and feature service items")),null;if(this.isTable){if(("web-map"===t||"web-scene"===t)&&"tables"!==i)return o?.push($e(this,`a table source can only be written to tables, not ${i}`)),null;if(this._hasMemorySource())return o?.push($e(this,"using an in-memory table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&("web-map"===t||"web-scene"===t)&&"tables"===i)return o?.push($e(this,"using a non-table source cannot be written to tables in web maps or web scenes")),null;return super.write(e,r)}clone(){if(this._hasMemorySource())throw new Error/* default */.A(Ue,`FeatureLayer (title: ${this.title}, id: ${this.id}) created using in-memory source cannot be cloned`);return super.clone()}serviceSupportsSpatialReference(e){return!!this.loaded&&("memory"===this.source?.type||(0,versionUtils/* serviceSupportsSpatialReference */.D)(this,e))}async save(e){return this._debouncedSaveOperations(interfaces/* SaveOperationType */.X.SAVE,e)}async saveAs(e,r){return this._debouncedSaveOperations(interfaces/* SaveOperationType */.X.SAVE_AS,r,e)}_readEditingEnabled(e,r,t){let i=e.layerDefinition?.capabilities;return i?this._hasEditingCapability(i):(i=e.capabilities,r&&"web-map"===t?.origin&&!this._hasMemorySource()&&i?this._hasEditingCapability(i):void 0)}_hasEditingCapability(e){return e.toLowerCase().split(",").map((e=>e.trim())).includes("editing")}_writeEditingEnabled(e,r,t,i){if(!e){const e=this.capabilities?.operations?.supportsSync?"Query,Sync":"Query";(0,object/* setDeepValue */.sM)("layerDefinition.capabilities",e,r),t&&!i?.writeLayerSchema&&(r.capabilities=e)}}_getLayerDomain(e){const r=this.fieldsIndex.get(e);return r?r.domain:null}_fetchFirstValidLayerId(e){return (0,request/* default */.A)(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then((e=>{const r=e.data;if(r)return this.findFirstValidLayerId(r)}))}async initLayerProperties(e){return this._set("source",e),e.sourceJSON&&(this.sourceJSON=e.sourceJSON,this.read(e.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl})),this._verifySource(),this._verifyFields(),(0,fieldUtils/* fixRendererFields */.yp)(this.renderer,this.fieldsIndex),(0,fieldUtils/* fixTimeInfoFields */.sv)(this.timeInfo,this.fieldsIndex),(0,styleUtils/* loadStyleRenderer */.L)(this,{origin:"service"})}async hasDataChanged(){return (0,featureLayerUtils/* hasDataChanged */.jp)(this)}async fetchPublishingStatus(){const e=this.source;return e?.fetchPublishingStatus?e.fetchPublishingStatus():"unavailable"}_verifyFields(){const e=this.parsedUrl?.path??"undefined";this.objectIdField||console.log("FeatureLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||this._hasMemorySource()||-1!==e.search(/\/FeatureServer\//i)||this.fields?.some((e=>"geometry"===e.type))||console.log("FeatureLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_fixTemplates(e,r){e&&e.forEach((e=>{const t=e.prototype?.attributes;t&&r&&delete t[r]}))}_verifySource(){if(this._hasMemorySource()){if(this.url)throw new Error/* default */.A("feature-layer:mixed-source-and-url","FeatureLayer cannot be created with both an in-memory source and a url")}else if(!this.url)throw new Error/* default */.A("feature-layer:source-or-url-required","FeatureLayer requires either a url, a valid portal item or a source")}_initMemorySource(e){e.forEach((e=>{e.layer=this,e.sourceLayer=this})),this.addHandles([e.on("after-add",(e=>{e.item.layer=this,e.item.sourceLayer=this})),e.on("after-remove",(e=>{e.item.layer=null,e.item.sourceLayer=null}))],"fl-source")}_resetMemorySource(e){e.forEach((e=>{e.layer=null,e.sourceLayer=null})),this.removeHandles("fl-source")}_hasMemorySource(){return!(this.url||!this.source)}findFirstValidLayerId(e){return Array.isArray(e.layers)&&e.layers.length>0?e.layers[0].id:Array.isArray(e.tables)&&e.tables.length>0?e.tables[0].id:void 0}};(0,tslib_es6._)([(0,reader/* reader */.w)("service","capabilities")],Be.prototype,"readCapabilities",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{"web-scene":{write:!1}},write:!0}})],Be.prototype,"charts",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],Be.prototype,"createQueryVersion",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:{source:"layerDefinition.copyrightText"}}})],Be.prototype,"copyright",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:{source:"layerDefinition.displayField"}}})],Be.prototype,"displayField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:symbols/* symbolTypes */.Es,readOnly:!0})],Be.prototype,"defaultSymbol",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:DataLayerSource/* DataLayerSource */.L})],Be.prototype,"dynamicDataSource",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean})],Be.prototype,"editingEnabled",null),(0,tslib_es6._)([(0,reader/* reader */.w)(["portal-item","web-scene"],"editingEnabled",["layerDefinition.capabilities"])],Be.prototype,"readEditingEnabled",null),(0,tslib_es6._)([(0,reader/* reader */.w)("web-map","editingEnabled",["capabilities","layerDefinition.capabilities"])],Be.prototype,"readEditingEnabledFromWebMap",null),(0,tslib_es6._)([(0,writer/* writer */.K)(["portal-item","web-scene"],"editingEnabled",{"layerDefinition.capabilities":{type:String}})],Be.prototype,"writeEditingEnabled",null),(0,tslib_es6._)([(0,writer/* writer */.K)("web-map","editingEnabled",{capabilities:{type:String},"layerDefinition.capabilities":{type:String}})],Be.prototype,"writeEditingEnabledToWebMap",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],Be.prototype,"effectiveEditingEnabled",null),(0,tslib_es6._)([(0,property/* property */.MZ)({...Je.fields,json:{read:{source:"layerDefinition.fields"},origins:{service:{name:"fields"},"web-map":{write:{target:"layerDefinition.fields",overridePolicy:We}}}}})],Be.prototype,"fields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(Je.fieldsIndex)],Be.prototype,"fieldsIndex",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:FormTemplate/* default */.A,json:{name:"formInfo",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],Be.prototype,"formTemplate",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:{source:"layerDefinition.extent"}}})],Be.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{"web-map":{write:{target:"layerDefinition.geometryType",overridePolicy:We,writer(e,r,t){const i=e?featureLayerUtils/* geometryTypeKebabDict */.iX.toJSON(e):null;i&&(0,object/* setDeepValue */.sM)(t,i,r)}}}},read:{source:"layerDefinition.geometryType",reader:featureLayerUtils/* geometryTypeKebabDict */.iX.read}}})],Be.prototype,"geometryType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:{source:"layerDefinition.hasM"}}})],Be.prototype,"hasM",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:{source:"layerDefinition.hasZ"}}})],Be.prototype,"hasZ",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties.id)],Be.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],Be.prototype,"infoFor3D",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{"web-map":{write:{target:"layerDefinition.type"}}}}})],Be.prototype,"isTable",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","isTable",["type","geometryType"]),(0,reader/* reader */.w)("isTable",["layerDefinition.type","layerDefinition.geometryType"])],Be.prototype,"readIsTable",null),(0,tslib_es6._)([(0,writer/* writer */.K)("web-map","isTable")],Be.prototype,"writeIsTable",null),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* labelsVisible */.kF)],Be.prototype,"labelsVisible",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[LabelClass/* default */.A],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:labelingInfo/* reader */.w,write:!1},"web-scene":{name:"layerDefinition.drawingInfo.labelingInfo",read:labelingInfo/* reader */.w,write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}},name:"layerDefinition.drawingInfo.labelingInfo",read:labelingInfo/* reader */.w,write:!0}})],Be.prototype,"labelingInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)((()=>{const e=(0,lang/* clone */.o8)(commonProperties/* opacityDrawingInfo */.Ih);return e.json.origins["portal-item"]={write:{target:"layerDefinition.drawingInfo.transparency",writer(e,r,t){(0,object/* setDeepValue */.sM)(t,(0,opacityUtils/* opacityToTransparency */.p)(e),r)}}},e})())],Be.prototype,"opacity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* legendEnabled */.fV)],Be.prototype,"legendEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide"],json:(()=>{const e=(0,lang/* clone */.o8)(commonProperties/* listMode */.C1.json);return e.origins["portal-item"]={read:!1,write:!1},e})()})],Be.prototype,"listMode",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],Be.prototype,"readGlobalIdField",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{"web-map":{write:{target:"layerDefinition.objectIdField",overridePolicy:We}}}}})],Be.prototype,"objectIdField",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],Be.prototype,"readObjectIdField",null),(0,tslib_es6._)([(0,property/* property */.MZ)({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],Be.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(Je.outFields)],Be.prototype,"outFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],Be.prototype,"parsedUrl",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],Be.prototype,"path",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* popupEnabled */.M6)],Be.prototype,"popupEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:PopupTemplate/* default */.A,json:{name:"popupInfo",write:!0}})],Be.prototype,"popupTemplate",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],Be.prototype,"defaultPopupTemplate",null),(0,tslib_es6._)([(0,property/* property */.MZ)({types:types/* rendererTypes */.H,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{types:types/* webSceneRendererTypes */.X,name:"layerDefinition.drawingInfo.renderer",write:{layerContainerTypes:layerContainerType/* excludeTables */.K,overridePolicy:(e,r,t)=>({ignoreOrigin:t?.writeLayerSchema})}}},write:{target:"layerDefinition.drawingInfo.renderer",overridePolicy:(e,r,t)=>({ignoreOrigin:t?.writeLayerSchema})}}})],Be.prototype,"renderer",null),(0,tslib_es6._)([(0,reader/* reader */.w)("service","renderer",["drawingInfo.renderer","defaultSymbol"]),(0,reader/* reader */.w)("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],Be.prototype,"readRenderer",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],Be.prototype,"resourceInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)((()=>{const e=(0,lang/* clone */.o8)(commonProperties/* screenSizePerspectiveEnabled */.PY);return e.json.origins["portal-item"]={read:!1,write:!1},e})())],Be.prototype,"screenSizePerspectiveEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({clonable:!1})],Be.prototype,"source",null),(0,tslib_es6._)([(0,cast/* cast */.w)("source")],Be.prototype,"castSource",null),(0,tslib_es6._)([(0,reader/* reader */.w)("portal-item","source",["featureSet"]),(0,reader/* reader */.w)("web-map","source",["featureSet"])],Be.prototype,"readSource",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:{source:"layerDefinition.extent.spatialReference"}}})],Be.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number})],Be.prototype,"subtypeCode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[FeatureTemplate/* default */.A]})],Be.prototype,"templates",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("templates",["editFieldsInfo","creatorField","editorField","templates"])],Be.prototype,"readTemplates",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:TimeInfo/* default */.A})],Be.prototype,"timeInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],Be.prototype,"title",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","title",["name"]),(0,reader/* reader */.w)("portal-item","title",["layerDefinition.title","layerDefinition.name","title"])],Be.prototype,"readTitle",null),(0,tslib_es6._)([(0,reader/* reader */.w)("web-map","title",["layerDefinition.name","title"])],Be.prototype,"readTitleFromWebMap",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],Be.prototype,"sublayerTitleMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1}})],Be.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],Be.prototype,"typeIdField",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","typeIdField"),(0,reader/* reader */.w)("typeIdField",["layerDefinition.typeIdField"])],Be.prototype,"readTypeIdField",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[FeatureType/* default */.A]})],Be.prototype,"types",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","types",["types"]),(0,reader/* reader */.w)("types",["layerDefinition.types"])],Be.prototype,"readTypes",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{origins:{"portal-item":{write:{target:"layerDefinition.defaultVisibility"}}}}})],Be.prototype,"visible",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("portal-item","visible",["visibility","layerDefinition.defaultVisibility"])],Be.prototype,"readVisible",null),Be=(0,tslib_es6._)([(0,subclass/* subclass */.$)(Qe)],Be);const Ze=Be;


/***/ }),

/***/ 64810:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ae)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(24793);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(48982);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/loadAll.js
var loadAll = __webpack_require__(6412);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(35775);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(85251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/sql.js
var sql = __webpack_require__(76859);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(20909);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/PropertyOrigin.js
var PropertyOrigin = __webpack_require__(94255);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/Layer.js + 1 modules
var Layer = __webpack_require__(68833);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/APIKeyMixin.js
var APIKeyMixin = __webpack_require__(50193);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/ArcGISService.js
var ArcGISService = __webpack_require__(45681);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/BlendLayer.js
var BlendLayer = __webpack_require__(15305);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/CustomParametersMixin.js
var CustomParametersMixin = __webpack_require__(16161);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/EditBusLayer.js
var EditBusLayer = __webpack_require__(46602);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/FeatureLayerBase.js + 5 modules
var FeatureLayerBase = __webpack_require__(71679);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(41506);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/PortalLayer.js
var PortalLayer = __webpack_require__(34722);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/RefreshableLayer.js + 1 modules
var RefreshableLayer = __webpack_require__(50508);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js
var ScaleRangeLayer = __webpack_require__(25389);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/TemporalLayer.js
var TemporalLayer = __webpack_require__(90826);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js
var arcgisLayerUrl = __webpack_require__(16123);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/commonProperties.js + 1 modules
var commonProperties = __webpack_require__(84356);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/featureLayerUtils.js + 1 modules
var featureLayerUtils = __webpack_require__(97461);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/fieldProperties.js
var fieldProperties = __webpack_require__(77567);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/fieldUtils.js
var fieldUtils = __webpack_require__(42453);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/PopupTemplate.js + 3 modules
var PopupTemplate = __webpack_require__(56542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/ClassBreaksRenderer.js
var ClassBreaksRenderer = __webpack_require__(17671);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/DictionaryRenderer.js
var DictionaryRenderer = __webpack_require__(84685);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/DotDensityRenderer.js + 1 modules
var DotDensityRenderer = __webpack_require__(20299);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/HeatmapRenderer.js + 1 modules
var HeatmapRenderer = __webpack_require__(25498);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/PieChartRenderer.js + 2 modules
var PieChartRenderer = __webpack_require__(79300);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/Renderer.js
var Renderer = __webpack_require__(76589);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/SimpleRenderer.js
var SimpleRenderer = __webpack_require__(47347);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/UniqueValueRenderer.js + 3 modules
var UniqueValueRenderer = __webpack_require__(2692);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/jsonUtils.js
var jsonUtils = __webpack_require__(48887);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Identifiable.js
var Identifiable = __webpack_require__(65667);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Loadable.js
var Loadable = __webpack_require__(45307);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/object.js
var object = __webpack_require__(76724);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/reader.js
var serializableProperty_reader = __webpack_require__(61985);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/form/FormTemplate.js + 21 modules
var FormTemplate = __webpack_require__(94882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/FeatureTemplate.js
var FeatureTemplate = __webpack_require__(48330);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/LabelClass.js + 1 modules
var LabelClass = __webpack_require__(86155);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/labelingInfo.js
var labelingInfo = __webpack_require__(79682);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/Query.js + 1 modules
var Query = __webpack_require__(24587);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/popupUtils.js
var popupUtils = __webpack_require__(44116);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/defaults.js
var defaults = __webpack_require__(26207);
;// ../node_modules/@arcgis/core/layers/support/SubtypeSublayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const G=["charts","editingEnabled","formTemplate","labelsVisible","labelingInfo","legendEnabled","minScale","maxScale","opacity","popupEnabled","popupTemplate","renderer","subtypeCode","templates","title","visible"],N={key:"type",base:Renderer/* default */.A,errorContext:"renderer",typeMap:{simple:SimpleRenderer/* default */.A,"unique-value":UniqueValueRenderer/* default */.A,"class-breaks":ClassBreaksRenderer/* default */.A}},$=(0,fieldProperties/* defineFieldProperties */.p)(),k=(0,serializableProperty_reader/* createTypeReader */.C)({types:N});let M=0;function _(e){const t=e.json.write;return"object"==typeof t?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function B(e){return new SimpleRenderer/* default */.A({symbol:H(e)})}function H(e){switch(e){case"point":case"multipoint":return defaults/* defaultPointSymbol2D */.UK.clone();case"polyline":return defaults/* defaultPolylineSymbol2D */.A7.clone();case"polygon":case"multipatch":return defaults/* defaultPolygonSymbol2D */.Cx.clone();default:return null}}function Q(e,t){return!!t&&("unique-value"===e?.type&&"string"==typeof e.field&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression)}function z(e,t){return null==e?null:t.subtypes?.find((t=>t.code===e))}function J(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const i={},o=z(e,t);if(null!=o){const{defaultValues:e}=o;for(const t in e)i[t]=e[t]}return i[t.subtypeField]=e,new FeatureTemplate/* default */.A({name:"New Feature",drawingTool:r,prototype:{attributes:i}})}const K="esri.layers.support.SubtypeSublayer";let W=class extends((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)((0,Clonable/* ClonableMixin */.O)((0,Identifiable/* IdentifiableMixin */.sA)(Loadable/* default */.A)))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${M++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}get capabilities(){return this.parent?.capabilities}get effectiveCapabilities(){return this.parent?.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){return this.parent?.elevationInfo}writeFieldOverrides(e,t,r){const{fields:i,parent:o}=this;let n;if(i){n=[];let e=0;i.forEach((({name:t,alias:r,editable:i,visible:s})=>{if(!s)return;const l=o?.fields?.find((e=>e.name===t));if(!l)return;const a={name:t};let p=!1;r!==l.alias&&(a.alias=r,p=!0),i!==l.editable&&(a.editable=i,p=!0),n.push(a),p&&e++})),0===e&&n.length===i.length&&(n=null)}else n=(0,lang/* clone */.o8)(e);n?.length&&(0,object/* setDeepValue */.sM)(r,n,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,i=e?.fields;if(!e||!i?.length)return null;const{subtypes:o,subtypeField:n}=e,s=o?.find((e=>e.code===r)),l=s?.defaultValues,a=s?.domains,p=[];for(const d of i){const e=d.clone(),{name:i}=e,o=t?.find((e=>e.name===i));if(e.visible=!t||!!o,o){const{alias:t,editable:r}=o;t&&(e.alias=t),!1===r&&(e.editable=!1)}const s=l?.[i]??null;e.defaultValue=i===n?r:s;const u=a?.[i]??null;e.domain=i===n?null:u?"inherited"===u.type?e.domain:u.clone():null,p.push(e)}return p}get floorInfo(){return this.parent?.floorInfo}get geometryType(){return this.parent?.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){return this.parent||Logger/* default */.A.getLogger(K).error(Y("objectIdField")),this.parent?.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){(0,fieldUtils/* fixRendererFields */.yp)(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&"mesh"!==e.geometryType?B(e.geometryType):null}readRendererFromService(e,t,r){if("Table"===t.type)return null;const i=t.drawingInfo?.renderer,n=k(i,t,r);let s;const{subtypeCode:l}=this;if(null!=l&&Q(n,t.subtypeField)){const e=n.uniqueValueInfos?.find((({value:e})=>(e="number"==typeof e?String(e):e)===String(l)));e&&(s=new SimpleRenderer/* default */.A({symbol:e.symbol}))}else"simple"!==n?.type||n.visualVariables?.length||(s=n);return s}readRenderer(e,t,r){const i=t?.layerDefinition?.drawingInfo?.renderer;if(!i)return;const o=i.visualVariables?.some((e=>"rotationInfo"!==e.type));return o?void 0:k(i,t,r)||void 0}get spatialReference(){return this.parent?.spatialReference}readTemplatesFromService(e,t){return[J(this.subtypeCode,t)]}readTitleFromService(e,t){const r=z(this.subtypeCode,t);return null!=r?r.name:null}get url(){return this.parent?.url}get userHasUpdateItemPrivileges(){return!!this.parent?.userHasUpdateItemPrivileges}async addAttachment(e,t){const{parent:r}=this;if(!r)throw Y("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new Error/* default */.A("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:i}=this;if(!i)throw Y("updateAttachment");if(e.getAttribute(i.subtypeField)!==this.subtypeCode)throw new Error/* default */.A("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return i.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw Y("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new Error/* default */.A("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw Y("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:i,title:o}=this;if(r){const{displayField:e,editFieldsInfo:n,objectIdField:s}=r;t={displayField:e,editFieldsInfo:n,fields:i,objectIdField:s,title:o}}return (0,popupUtils/* createPopupTemplate */.tn)(t,e)}createQuery(){if(!this.parent)throw Y("createQuery");const e=(0,featureLayerUtils/* createQuery */.VZ)(this.parent),t=`${this.parent.subtypeField}=${this.subtypeCode}`;return e.where=(0,sql/* sqlAnd */.m)(t,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}hasUserOverrides(){return G.some((e=>this.originIdOf(e)===PropertyOrigin/* OriginId */.Gr.USER))}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw Y("queryAttachments");const i=e.clone();return i.where=X(i.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatures(e,t){const r=await this.load();if(!r.parent)throw Y("queryFeatures");const i=Query/* default */.A.from(e)??r.createQuery();return null!=e&&(i.where=X(i.where,r.parent.subtypeField,r.subtypeCode)),r.parent.queryFeatures(i,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],W.prototype,"capabilities",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],W.prototype,"effectiveCapabilities",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:{ignoreOrigin:!0}}})],W.prototype,"charts",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],W.prototype,"editingEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,readOnly:!0})],W.prototype,"effectiveEditingEnabled",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],W.prototype,"elevationInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],W.prototype,"fieldOverrides",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("fieldOverrides")],W.prototype,"writeFieldOverrides",null),(0,tslib_es6._)([(0,property/* property */.MZ)({...$.fields,readOnly:!0,json:{read:!1}})],W.prototype,"fields",null),(0,tslib_es6._)([(0,property/* property */.MZ)($.fieldsIndex)],W.prototype,"fieldsIndex",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],W.prototype,"floorInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:FormTemplate/* default */.A,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],W.prototype,"formTemplate",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,clonable:!1,readOnly:!0,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],W.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],W.prototype,"geometryType",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],W.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(_((0,lang/* clone */.o8)(commonProperties/* labelsVisible */.kF)))],W.prototype,"labelsVisible",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[LabelClass/* default */.A],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:labelingInfo/* reader */.w},write:{ignoreOrigin:!0}}})],W.prototype,"labelingInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],W.prototype,"layerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(_((0,lang/* clone */.o8)(commonProperties/* legendEnabled */.fV)))],W.prototype,"legendEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide"]})],W.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)((()=>{const e=(0,lang/* clone */.o8)(commonProperties/* minScale */.hn);return e.json.origins.service.read=!1,_(e)})())],W.prototype,"minScale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)((()=>{const e=(0,lang/* clone */.o8)(commonProperties/* maxScale */.hG);return e.json.origins.service.read=!1,_(e)})())],W.prototype,"maxScale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],W.prototype,"effectiveScaleRange",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],W.prototype,"objectIdField",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],W.prototype,"opacity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({clonable:!1})],W.prototype,"parent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(_((0,lang/* clone */.o8)(commonProperties/* popupEnabled */.M6)))],W.prototype,"popupEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:PopupTemplate/* default */.A,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],W.prototype,"popupTemplate",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],W.prototype,"defaultPopupTemplate",null),(0,tslib_es6._)([(0,property/* property */.MZ)({types:N,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],W.prototype,"renderer",null),(0,tslib_es6._)([(0,reader/* reader */.w)("service","renderer",["drawingInfo.renderer","subtypeField","type"])],W.prototype,"readRendererFromService",null),(0,tslib_es6._)([(0,reader/* reader */.w)("renderer",["layerDefinition.drawingInfo.renderer"])],W.prototype,"readRenderer",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],W.prototype,"spatialReference",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],W.prototype,"subtypeCode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[FeatureTemplate/* default */.A],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],W.prototype,"templates",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","templates",["geometryType","subtypeField","subtypes","type"])],W.prototype,"readTemplatesFromService",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{ignoreOrigin:!0}}})],W.prototype,"title",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","title",["subtypes"])],W.prototype,"readTitleFromService",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],W.prototype,"url",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],W.prototype,"userHasUpdateItemPrivileges",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],W.prototype,"visible",void 0),W=(0,tslib_es6._)([(0,subclass/* subclass */.$)(K)],W);const X=(e,t,r)=>{const i=new RegExp(`${t}\\s*=\\s*\\d+`),o=`${t}=${r}`,n=e??"";return i.test(n)?n.replace(i,o):(0,sql/* sqlAnd */.m)(o,n)},Y=e=>new Error/* default */.A(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),Z=W;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/TimeInfo.js
var TimeInfo = __webpack_require__(83849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/versionUtils.js
var versionUtils = __webpack_require__(93797);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/webdoc/interfaces.js
var interfaces = __webpack_require__(15954);
;// ../node_modules/@arcgis/core/layers/SubtypeGroupLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const re="SubtypeGroupLayer",te="esri.layers.SubtypeGroupLayer";function se(e,r){return new Error/* default */.A("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${r}`,{layer:e})}const ie=(0,fieldProperties/* defineFieldProperties */.p)();let oe=class extends((0,FeatureLayerBase/* FeatureLayerBase */.j)((0,EditBusLayer/* EditBusLayer */.w6)((0,BlendLayer/* BlendLayer */.d)((0,TemporalLayer/* TemporalLayer */.e)((0,ScaleRangeLayer/* ScaleRangeLayer */.j)((0,RefreshableLayer/* RefreshableLayer */.J)((0,ArcGISService/* ArcGISService */.b)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.A)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)((0,CustomParametersMixin/* CustomParametersMixin */.d)((0,APIKeyMixin/* APIKeyMixin */.p)((0,Clonable/* ClonableMixin */.O)(Layer/* default */.A)))))))))))))){constructor(...e){super(...e),this._sublayersCollectionChanged=!1,this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.sublayers=new(Collection/* default */.A.ofType(Z)),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this._debouncedSaveOperations=(0,promiseUtils/* debounce */.sg)((async(e,r,t)=>{const{save:s,saveAs:i}=await __webpack_require__.e(/* import() */ 7610).then(__webpack_require__.bind(__webpack_require__, 77610));switch(e){case interfaces/* SaveOperationType */.X.SAVE:return s(this,r);case interfaces/* SaveOperationType */.X.SAVE_AS:return i(this,t,r)}})),this.addHandles((0,reactiveUtils/* watch */.wB)((()=>this.sublayers),((e,r)=>this._handleSublayersChange(e,r)),reactiveUtils/* sync */.OH))}destroy(){this.source?.destroy()}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}load(e){const r=null!=e?e.signal:null,t=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(promiseUtils/* throwIfAbortError */.QP).then((async()=>{if(!this.url)throw new Error/* default */.A("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(null==this.layerId)throw new Error/* default */.A("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(r))})).then((()=>(0,featureLayerUtils/* ensureLayerCredential */.VA)(this,"load",e)));return this.addResolvingPromise(t),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&null!=this.capabilities&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return (0,featureLayerUtils/* computeEffectiveEditingEnabled */.C$)(this)}get parsedUrl(){const e=(0,urlUtils/* urlToObject */.An)(this.url);return null!=e&&null!=this.layerId&&(e.path=(0,urlUtils/* join */.fj)(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:r}){return this.url?(0,arcgisLayerUrl/* titleFromUrlAndName */.yG)(this.url,r):r}async addAttachment(e,r){return (0,featureLayerUtils/* addAttachment */.Xl)(this,e,r,re)}async updateAttachment(e,r,t){return (0,featureLayerUtils/* updateAttachment */.bt)(this,e,r,t,re)}async applyEdits(e,r){return (0,featureLayerUtils/* applyEdits */.ct)(this,e,r)}on(e,r){return super.on(e,r)}async createGraphicsSource(e){const{default:r}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 5601).then(__webpack_require__.bind(__webpack_require__, 35601)),e);return new r({layer:this}).load({signal:e})}createQuery(){const e=(0,featureLayerUtils/* createQuery */.VZ)(this),r=this.sublayers.map((e=>e.subtypeCode));return e.where=(0,sql/* sqlAnd */.m)(`${this.subtypeField} IN (${r.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,r){return (0,featureLayerUtils/* deleteAttachments */.mm)(this,e,r,re)}async fetchRecomputedExtents(e){return (0,featureLayerUtils/* fetchRecomputedExtents */.WP)(this,e,re)}findSublayerForFeature(e){const r=this.fieldsIndex.get(this.subtypeField),t=e.attributes[r.name];return this.findSublayerForSubtypeCode(t)}findSublayerForSubtypeCode(e){return this._sublayerLookup.get(e)}getFieldDomain(e,r){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}loadAll(){return (0,loadAll/* loadAll */.g)(this,(e=>{e(this.sublayers)}))}async queryAttachments(e,r){return (0,featureLayerUtils/* queryAttachments */.lV)(this,e,r,re)}async queryFeatures(e,r){const t=await this.load(),s=Query/* default */.A.from(e)??t.createQuery(),i=s.outFields??[];i.includes(this.subtypeField)||(i.push(this.subtypeField),s.outFields=i);const o=await t.source.queryFeatures(s,r);if(o?.features)for(const a of o.features)a.layer=a.sourceLayer=this.findSublayerForFeature(a);return o}async queryObjectIds(e,r){return (0,featureLayerUtils/* queryObjectIds */.sg)(this,e,r,re)}async queryFeatureCount(e,r){return (0,featureLayerUtils/* queryFeatureCount */.Ye)(this,e,r,re)}async queryExtent(e,r){return (0,featureLayerUtils/* queryExtent */.B5)(this,e,r,re)}async queryRelatedFeatures(e,r){return (0,featureLayerUtils/* queryRelatedFeatures */.hM)(this,e,r,re)}async queryRelatedFeaturesCount(e,r){return (0,featureLayerUtils/* queryRelatedFeaturesCount */.S2)(this,e,r,re)}async save(e){return this._debouncedSaveOperations(interfaces/* SaveOperationType */.X.SAVE,e)}async saveAs(e,r){return this._debouncedSaveOperations(interfaces/* SaveOperationType */.X.SAVE_AS,r,e)}write(e,r){const{origin:t,layerContainerType:i,messages:o}=r;if(this.isTable){if("web-scene"===t||"web-map"===t&&"tables"!==i)return o?.push(se(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&"web-map"===t&&"tables"===i)return o?.push(se(this,"using a non-table source cannot be written to tables in web maps")),null;return this.sublayers?.length?super.write(e,r):(o?.push(new Error/* default */.A("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&(0,versionUtils/* serviceSupportsSpatialReference */.D)(this,e)}_getLayerDomain(e){const r=this.fieldsIndex.get(e);return r?r.domain:null}async _initLayerProperties(e){this._set("source",e);const{sourceJSON:r}=e;if(r&&(this.sourceJSON=r,this.read(r,{origin:"service",url:this.parsedUrl})),this.isTable)throw new Error/* default */.A("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");if(!this.subtypes?.length)throw new Error/* default */.A("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),(0,fieldUtils/* fixTimeInfoFields */.sv)(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return (0,featureLayerUtils/* hasDataChanged */.jp)(this)}_verifyFields(){const e=this.parsedUrl?.path??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||-1!==e.search(/\/FeatureServer\//i)||this.fields?.some((e=>"geometry"===e.type))||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,r){r&&(r.forEach((e=>{e.parent=null})),this.removeHandles("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach((e=>{e.parent=this,this._sublayerLookup.set(e.subtypeCode,e)})),this._sublayersCollectionChanged=!1,this.addHandles([e.on("after-add",(({item:e})=>{e.parent=this,this._sublayerLookup.set(e.subtypeCode,e)})),e.on("after-remove",(({item:e})=>{e.parent=null,this._sublayerLookup.delete(e.subtypeCode)})),e.on("after-changes",(()=>{this._sublayersCollectionChanged=!0}))],"sublayers-owner"))}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],oe.prototype,"createQueryVersion",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],oe.prototype,"editingEnabled",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],oe.prototype,"effectiveEditingEnabled",null),(0,tslib_es6._)([(0,property/* property */.MZ)({...ie.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],oe.prototype,"fields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(ie.fieldsIndex)],oe.prototype,"fieldsIndex",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties.id)],oe.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide","hide-children"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],oe.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],oe.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(ie.outFields)],oe.prototype,"outFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],oe.prototype,"parsedUrl",null),(0,tslib_es6._)([(0,property/* property */.MZ)({clonable:!1})],oe.prototype,"source",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(Z),json:{origins:{service:{read:{source:"subtypes",reader:(e,r,s)=>{const i=e.map((({code:e})=>{const t=new Z({subtypeCode:e});return t.read(r,s),t}));return new(Collection/* default */.A.ofType(Z))(i)}}}},name:"layers",write:{overridePolicy(e,r,t){const s=this.originOf("sublayers"),i=PropertyOrigin/* OriginId */.Gr.PORTAL_ITEM;let o=!0;if((0,PropertyOrigin/* nameToId */.aB)(s)===i&&(0,PropertyOrigin/* nameToId */.aB)(t.origin)>i){const r=e.some((e=>e.hasUserOverrides()));o=this._sublayersCollectionChanged||r}return{enabled:o,ignoreOrigin:!0}}}}})],oe.prototype,"sublayers",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:TimeInfo/* default */.A})],oe.prototype,"timeInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{"portal-item":{write:{enabled:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],oe.prototype,"title",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","title",["name"])],oe.prototype,"readTitleFromService",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1}})],oe.prototype,"type",void 0),oe=(0,tslib_es6._)([(0,subclass/* subclass */.$)(te)],oe);const ae=oe;


/***/ }),

/***/ 27664:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LF: () => (/* binding */ n),
/* harmony export */   M9: () => (/* binding */ a),
/* harmony export */   zu: () => (/* binding */ i)
/* harmony export */ });
/* unused harmony exports fromJSON, toJSON */
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76724);
/* harmony import */ var _parser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81816);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57922);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function n(e,t,r){try{return c(e)}catch(s){r?.messages?.push(s)}return null}function a(e,r,s,n){try{const n=o(e);(0,_core_object_js__WEBPACK_IMPORTED_MODULE_1__/* .setDeepValue */ .sM)(s,n,r)}catch(a){n.messages&&n.messages.push(a)}}function o(e){const t=(0,_parser_js__WEBPACK_IMPORTED_MODULE_2__/* .parse */ .q)(e);return t?(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__/* .isEffectFunctions */ .dw)(t)?t.map((e=>e.toJSON())):t.map((({scale:e,effects:t})=>({scale:e,value:t.map((e=>e.toJSON()))}))):null}function c(e){if(!e||0===e.length)return null;if(f(e)){const t=[];for(const r of e)t.push({scale:r.scale,value:i(r.value)});return t}return i(e)}function f(e){const t=e[0];return!!t&&"scale"in t}function i(e){if(!e?.length)return"";const t=[];for(const s of e){let e=[];switch(s.type){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":case"opacity":e=[u(s,"amount")];break;case"blur":e=[u(s,"radius","pt")];break;case"hue-rotate":e=[u(s,"angle","deg")];break;case"drop-shadow":e=[u(s,"xoffset","pt"),u(s,"yoffset","pt"),u(s,"blurRadius","pt"),l(s,"color")];break;case"bloom":e=[u(s,"strength"),u(s,"radius","pt"),u(s,"threshold")]}const n=`${s.type}(${e.filter(Boolean).join(" ")})`;(0,_parser_js__WEBPACK_IMPORTED_MODULE_2__/* .parse */ .q)(n),t.push(n)}return t.join(" ")}function u(t,r,s){if(null==t[r])throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("effect:missing-parameter",`Missing parameter '${r}' in ${t.type} effect`,{effect:t});return s?t[r]+s:""+t[r]}function l(t,r){if(null==t[r])throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("effect:missing-parameter",`Missing parameter '${r}' in ${t.type} effect`,{effect:t});const s=t[r];return`rgba(${s[0]||0}, ${s[1]||0}, ${s[2]||0}, ${s[3]/255||0})`}


/***/ }),

/***/ 81816:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var _colorUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31415);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98849);
/* harmony import */ var _effects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78138);
/* harmony import */ var _chunks_commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42784);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57922);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var m,g,v={exports:{}};v.exports,g=function(){function t(t,e){function r(){this.constructor=t}r.prototype=e.prototype,t.prototype=new r}function e(t,r,n,u){var a=Error.call(this,t);return Object.setPrototypeOf&&Object.setPrototypeOf(a,e.prototype),a.expected=r,a.found=n,a.location=u,a.name="SyntaxError",a}function r(t,e,r){return r=r||" ",t.length>e?t:(e-=t.length,t+(r+=r.repeat(e)).slice(0,e))}function n(t,r){var n,u={},a=(r=void 0!==r?r:{}).grammarSource,o={start:Lt},c=Lt,i="none",s=")",f=",",l="(",p="%",h="px",m="cm",g="mm",v="in",d="pt",y="pc",A="deg",w="rad",x="grad",b="turn",C="#",F=".",E="e",j=/^[ \t\n\r]/,$=/^[a-z\-]/,O=/^[0-9a-fA-F]/,k=/^[+\-]/,q=/^[0-9]/,S=Bt("none"),z=Ut("none",!1),R=Ut(")",!1),I=Ut(",",!1),M=Bt("whitespace"),P=Ht([" ","\t","\n","\r"],!1,!1),N=Bt("function"),T=Ut("(",!1),U=Bt("identifier"),H=Ht([["a","z"],"-"],!1,!1),_=Bt("percentage"),B=Ut("%",!1),D=Bt("length"),G=Ut("px",!1),J=Ut("cm",!1),K=Ut("mm",!1),L=Ut("in",!1),Q=Ut("pt",!1),V=Ut("pc",!1),W=Bt("angle"),X=Ut("deg",!1),Y=Ut("rad",!1),Z=Ut("grad",!1),tt=Ut("turn",!1),et=Bt("number"),rt=Bt("color"),nt=Ut("#",!1),ut=Ht([["0","9"],["a","f"],["A","F"]],!1,!1),at=Ht(["+","-"],!1,!1),ot=Ht([["0","9"]],!1,!1),ct=Ut(".",!1),it=Ut("e",!1),st=function(){return[]},ft=function(t,e){return{type:"function",name:t,parameters:e||[]}},lt=function(t,e){return e.length>0?se(t,e,3):[t]},pt=function(t){return{type:"quantity",value:t.value,unit:t.unit}},ht=function(t){return{type:"color",colorType:t.type,value:t.value}},mt=function(t){return t},gt=function(){return Tt()},vt=function(t){return{value:t,unit:"%"}},dt=function(t){return{value:t,unit:"px"}},yt=function(t){return{value:t,unit:"cm"}},At=function(t){return{value:t,unit:"mm"}},wt=function(t){return{value:t,unit:"in"}},xt=function(t){return{value:t,unit:"pt"}},bt=function(t){return{value:t,unit:"pc"}},Ct=function(t){return{value:t,unit:"deg"}},Ft=function(t){return{value:t,unit:"rad"}},Et=function(t){return{value:t,unit:"grad"}},jt=function(t){return{value:t,unit:"turn"}},$t=function(t){return{value:t,unit:null}},Ot=function(){return{type:"hex",value:Tt()}},kt=function(t){return{type:"function",value:t}},qt=function(){return{type:"named",value:Tt()}},St=function(){return parseFloat(Tt())},zt=0,Rt=0,It=[{line:1,column:1}],Mt=0,Pt=[],Nt=0;if("startRule"in r){if(!(r.startRule in o))throw new Error("Can't start parsing from rule \""+r.startRule+'".');c=o[r.startRule]}function Tt(){return t.substring(Rt,zt)}function Ut(t,e){return{type:"literal",text:t,ignoreCase:e}}function Ht(t,e,r){return{type:"class",parts:t,inverted:e,ignoreCase:r}}function _t(){return{type:"end"}}function Bt(t){return{type:"other",description:t}}function Dt(e){var r,n=It[e];if(n)return n;for(r=e-1;!It[r];)r--;for(n={line:(n=It[r]).line,column:n.column};r<e;)10===t.charCodeAt(r)?(n.line++,n.column=1):n.column++,r++;return It[e]=n,n}function Gt(t,e,r){var n=Dt(t),u=Dt(e),o={source:a,start:{offset:t,line:n.line,column:n.column},end:{offset:e,line:u.line,column:u.column}};return r&&a&&"function"==typeof a.offset&&(o.start=a.offset(o.start),o.end=a.offset(o.end)),o}function Jt(t){zt<Mt||(zt>Mt&&(Mt=zt,Pt=[]),Pt.push(t))}function Kt(t,r,n){return new e(e.buildMessage(t,r),t,r,n)}function Lt(){var t;return(t=Qt())===u&&(t=Vt()),t}function Qt(){var e,r;return Nt++,e=zt,Zt(),t.substr(zt,4)===i?(r=i,zt+=4):(r=u,0===Nt&&Jt(z)),r!==u?(Zt(),Rt=e,e=st()):(zt=e,e=u),Nt--,e===u&&0===Nt&&Jt(S),e}function Vt(){var t,e;if(t=[],(e=Wt())!==u)for(;e!==u;)t.push(e),e=Wt();else t=u;return t}function Wt(){var e,r,n,a;return e=zt,Zt(),(r=te())!==u?(Zt(),(n=Xt())===u&&(n=null),Zt(),41===t.charCodeAt(zt)?(a=s,zt++):(a=u,0===Nt&&Jt(R)),a!==u?(Zt(),Rt=e,e=ft(r,n)):(zt=e,e=u)):(zt=e,e=u),e}function Xt(){var e,r,n,a,o,c,i,s;if(e=zt,(r=Yt())!==u){for(n=[],a=zt,o=Zt(),44===t.charCodeAt(zt)?(c=f,zt++):(c=u,0===Nt&&Jt(I)),c===u&&(c=null),i=Zt(),(s=Yt())!==u?a=o=[o,c,i,s]:(zt=a,a=u);a!==u;)n.push(a),a=zt,o=Zt(),44===t.charCodeAt(zt)?(c=f,zt++):(c=u,0===Nt&&Jt(I)),c===u&&(c=null),i=Zt(),(s=Yt())!==u?a=o=[o,c,i,s]:(zt=a,a=u);Rt=e,e=lt(r,n)}else zt=e,e=u;return e}function Yt(){var t,e;return t=zt,(e=re())===u&&(e=ne())===u&&(e=ue())===u&&(e=ae()),e!==u&&(Rt=t,e=pt(e)),(t=e)===u&&(t=zt,(e=oe())!==u&&(Rt=t,e=ht(e)),t=e),t}function Zt(){var e,r;for(Nt++,e=[],j.test(t.charAt(zt))?(r=t.charAt(zt),zt++):(r=u,0===Nt&&Jt(P));r!==u;)e.push(r),j.test(t.charAt(zt))?(r=t.charAt(zt),zt++):(r=u,0===Nt&&Jt(P));return Nt--,r=u,0===Nt&&Jt(M),e}function te(){var e,r,n;return Nt++,e=zt,(r=ee())!==u?(40===t.charCodeAt(zt)?(n=l,zt++):(n=u,0===Nt&&Jt(T)),n!==u?(Rt=e,e=mt(r)):(zt=e,e=u)):(zt=e,e=u),Nt--,e===u&&(r=u,0===Nt&&Jt(N)),e}function ee(){var e,r,n;if(Nt++,e=zt,r=[],$.test(t.charAt(zt))?(n=t.charAt(zt),zt++):(n=u,0===Nt&&Jt(H)),n!==u)for(;n!==u;)r.push(n),$.test(t.charAt(zt))?(n=t.charAt(zt),zt++):(n=u,0===Nt&&Jt(H));else r=u;return r!==u&&(Rt=e,r=gt()),Nt--,(e=r)===u&&(r=u,0===Nt&&Jt(U)),e}function re(){var e,r,n;return Nt++,e=zt,Zt(),(r=ce())!==u?(37===t.charCodeAt(zt)?(n=p,zt++):(n=u,0===Nt&&Jt(B)),n!==u?(Rt=e,e=vt(r)):(zt=e,e=u)):(zt=e,e=u),Nt--,e===u&&0===Nt&&Jt(_),e}function ne(){var e,r,n;return Nt++,e=zt,Zt(),(r=ce())!==u?(t.substr(zt,2)===h?(n=h,zt+=2):(n=u,0===Nt&&Jt(G)),n!==u?(Rt=e,e=dt(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,Zt(),(r=ce())!==u?(t.substr(zt,2)===m?(n=m,zt+=2):(n=u,0===Nt&&Jt(J)),n!==u?(Rt=e,e=yt(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,Zt(),(r=ce())!==u?(t.substr(zt,2)===g?(n=g,zt+=2):(n=u,0===Nt&&Jt(K)),n!==u?(Rt=e,e=At(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,Zt(),(r=ce())!==u?(t.substr(zt,2)===v?(n=v,zt+=2):(n=u,0===Nt&&Jt(L)),n!==u?(Rt=e,e=wt(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,Zt(),(r=ce())!==u?(t.substr(zt,2)===d?(n=d,zt+=2):(n=u,0===Nt&&Jt(Q)),n!==u?(Rt=e,e=xt(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,Zt(),(r=ce())!==u?(t.substr(zt,2)===y?(n=y,zt+=2):(n=u,0===Nt&&Jt(V)),n!==u?(Rt=e,e=bt(r)):(zt=e,e=u)):(zt=e,e=u)))))),Nt--,e===u&&0===Nt&&Jt(D),e}function ue(){var e,r,n;return Nt++,e=zt,(r=ce())!==u?(t.substr(zt,3)===A?(n=A,zt+=3):(n=u,0===Nt&&Jt(X)),n!==u?(Rt=e,e=Ct(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,(r=ce())!==u?(t.substr(zt,3)===w?(n=w,zt+=3):(n=u,0===Nt&&Jt(Y)),n!==u?(Rt=e,e=Ft(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,(r=ce())!==u?(t.substr(zt,4)===x?(n=x,zt+=4):(n=u,0===Nt&&Jt(Z)),n!==u?(Rt=e,e=Et(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,(r=ce())!==u?(t.substr(zt,4)===b?(n=b,zt+=4):(n=u,0===Nt&&Jt(tt)),n!==u?(Rt=e,e=jt(r)):(zt=e,e=u)):(zt=e,e=u)))),Nt--,e===u&&(r=u,0===Nt&&Jt(W)),e}function ae(){var t,e;return Nt++,t=zt,Zt(),(e=ce())!==u?(Rt=t,t=$t(e)):(zt=t,t=u),Nt--,t===u&&0===Nt&&Jt(et),t}function oe(){var e,r,n,a;if(Nt++,e=zt,35===t.charCodeAt(zt)?(r=C,zt++):(r=u,0===Nt&&Jt(nt)),r!==u){if(n=[],O.test(t.charAt(zt))?(a=t.charAt(zt),zt++):(a=u,0===Nt&&Jt(ut)),a!==u)for(;a!==u;)n.push(a),O.test(t.charAt(zt))?(a=t.charAt(zt),zt++):(a=u,0===Nt&&Jt(ut));else n=u;n!==u?(Rt=e,e=Ot()):(zt=e,e=u)}else zt=e,e=u;return e===u&&(e=zt,(r=Wt())!==u&&(Rt=e,r=kt(r)),(e=r)===u&&(e=zt,(r=ee())!==u&&(Rt=e,r=qt()),e=r)),Nt--,e===u&&(r=u,0===Nt&&Jt(rt)),e}function ce(){var e,r,n,a,o,c,i;for(e=zt,k.test(t.charAt(zt))?(t.charAt(zt),zt++):0===Nt&&Jt(at),r=zt,n=[],q.test(t.charAt(zt))?(a=t.charAt(zt),zt++):(a=u,0===Nt&&Jt(ot));a!==u;)n.push(a),q.test(t.charAt(zt))?(a=t.charAt(zt),zt++):(a=u,0===Nt&&Jt(ot));if(46===t.charCodeAt(zt)?(a=F,zt++):(a=u,0===Nt&&Jt(ct)),a!==u){if(o=[],q.test(t.charAt(zt))?(c=t.charAt(zt),zt++):(c=u,0===Nt&&Jt(ot)),c!==u)for(;c!==u;)o.push(c),q.test(t.charAt(zt))?(c=t.charAt(zt),zt++):(c=u,0===Nt&&Jt(ot));else o=u;o!==u?r=n=[n,a,o]:(zt=r,r=u)}else zt=r,r=u;if(r===u)if(r=[],q.test(t.charAt(zt))?(n=t.charAt(zt),zt++):(n=u,0===Nt&&Jt(ot)),n!==u)for(;n!==u;)r.push(n),q.test(t.charAt(zt))?(n=t.charAt(zt),zt++):(n=u,0===Nt&&Jt(ot));else r=u;if(r!==u){if(n=zt,101===t.charCodeAt(zt)?(a=E,zt++):(a=u,0===Nt&&Jt(it)),a!==u){if(k.test(t.charAt(zt))?(o=t.charAt(zt),zt++):(o=u,0===Nt&&Jt(at)),o===u&&(o=null),c=[],q.test(t.charAt(zt))?(i=t.charAt(zt),zt++):(i=u,0===Nt&&Jt(ot)),i!==u)for(;i!==u;)c.push(i),q.test(t.charAt(zt))?(i=t.charAt(zt),zt++):(i=u,0===Nt&&Jt(ot));else c=u;c!==u?n=a=[a,o,c]:(zt=n,n=u)}else zt=n,n=u;n===u&&(n=null),Rt=e,e=St()}else zt=e,e=u;return e}function ie(t,e){return t.map((function(t){return t[e]}))}function se(t,e,r){return[t].concat(ie(e,r))}if((n=c())!==u&&zt===t.length)return n;throw n!==u&&zt<t.length&&Jt(_t()),Kt(Pt,Mt<t.length?t.charAt(Mt):null,Mt<t.length?Gt(Mt,Mt+1):Gt(Mt,Mt))}return t(e,Error),e.prototype.format=function(t){var e="Error: "+this.message;if(this.location){var n,u=null;for(n=0;n<t.length;n++)if(t[n].source===this.location.source){u=t[n].text.split(/\r\n|\n|\r/g);break}var a=this.location.start,o=this.location.source&&"function"==typeof this.location.source.offset?this.location.source.offset(a):a,c=this.location.source+":"+o.line+":"+o.column;if(u){var i=this.location.end,s=r("",o.line.toString().length," "),f=u[a.line-1],l=(a.line===i.line?i.column:f.length+1)-a.column||1;e+="\n --\x3e "+c+"\n"+s+" |\n"+o.line+" | "+f+"\n"+s+" | "+r("",a.column-1," ")+r("",l,"^")}else e+="\n at "+c}return e},e.buildMessage=function(t,e){var r={literal:function(t){return'"'+u(t.text)+'"'},class:function(t){var e=t.parts.map((function(t){return Array.isArray(t)?a(t[0])+"-"+a(t[1]):a(t)}));return"["+(t.inverted?"^":"")+e.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(t){return t.description}};function n(t){return t.charCodeAt(0).toString(16).toUpperCase()}function u(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+n(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+n(t)}))}function a(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+n(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+n(t)}))}function o(t){return r[t.type](t)}function c(t){var e,r,n=t.map(o);if(n.sort(),n.length>0){for(e=1,r=1;e<n.length;e++)n[e-1]!==n[e]&&(n[r]=n[e],r++);n.length=r}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}function i(t){return t?'"'+u(t)+'"':"end of input"}return"Expected "+c(t)+" but "+i(e)+" found."},{SyntaxError:e,parse:n}},(m=v).exports&&(m.exports=g());var d=v.exports;function y(t){if(!t||0===t.length)return null;if("string"==typeof t){const e=A(t);return e&&0!==e.length?e:null}const e=t.map((t=>{if(!Number.isFinite(t.scale)||t.scale<=0)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:invalid-scale","scale must be finite and greater than 0",{stop:t});return{scale:t.scale,effects:A(t.value)}}));e.sort(((t,e)=>e.effects.length-t.effects.length));for(let r=0;r<e.length-1;r++){if(!(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .canInterpolateEffects */ .mj)(e[r].effects,e[r+1].effects))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:interpolation-impossible","Cannot interpolate by scale between 2 lists of mixed effects",{a:e[r].effects,b:e[r+1].effects});(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .normalizeEffects */ .O9)(e[r].effects,e[r+1].effects)}return e.sort(((t,e)=>e.scale-t.scale)),e}function A(t){let e;if(!t)return[];try{e=d.parse(t)}catch(r){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:invalid-syntax","Invalid effect syntax",{value:t,error:r})}return e.map((t=>w(t)))}function w(t){try{switch(t.name){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":return x(t);case"opacity":return b(t);case"hue-rotate":return C(t);case"blur":return F(t);case"drop-shadow":return E(t);case"bloom":return j(t)}}catch(e){throw e.details.filter=t,e}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:unknown-effect",`Effect '${t.name}' is not supported`,{effect:t})}function x(t){let e=1;return $(t.parameters,1),1===t.parameters.length&&(e=P(t.parameters[0])),new _effects_js__WEBPACK_IMPORTED_MODULE_2__/* .ColorMatrixEffect */ .yG(t.name,e)}function b(t){let e=1;return $(t.parameters,1),1===t.parameters.length&&(e=P(t.parameters[0])),new _effects_js__WEBPACK_IMPORTED_MODULE_2__/* .OpacityEffect */ .jm(e)}function C(t){let e=0;return $(t.parameters,1),1===t.parameters.length&&(e=T(t.parameters[0])),new _effects_js__WEBPACK_IMPORTED_MODULE_2__/* .HueRotateEffect */ .Nd(e)}function F(t){let e=0;return $(t.parameters,1),1===t.parameters.length&&(e=U(t.parameters[0]),k(e,t.parameters[0])),new _effects_js__WEBPACK_IMPORTED_MODULE_2__/* .BlurEffect */ .Fk(e)}function E(t){const e=[];let r=null;for(const n of t.parameters)if("color"===n.type){if(e.length&&Object.freeze(e),r)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error","Accepts only one color",{});r=H(n)}else{const t=U(n);if(Object.isFrozen(e))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error","<length> parameters not consecutive",{lengths:e});e.push(t),3===e.length&&k(t,n)}if(e.length<2||e.length>3)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error",`Expected <length>{2,3}, Actual: <length>{${e.length}}`,{lengths:e});return new _effects_js__WEBPACK_IMPORTED_MODULE_2__/* .DropShadowEffect */ .$b(e[0],e[1],e[2]||0,r||_("black"))}function j(t){let e=1,r=0,n=0;return $(t.parameters,3),t.parameters[0]&&(e=P(t.parameters[0])),t.parameters[1]&&(r=U(t.parameters[1]),k(r,t.parameters[1])),t.parameters[2]&&(n=P(t.parameters[2])),new _effects_js__WEBPACK_IMPORTED_MODULE_2__/* .BloomEffect */ .bv(e,r,n)}function $(t,e){if(t.length>e)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error",`Function supports up to ${e} parameters, Actual: ${t.length}`,{parameters:t})}function O(t){if("color"===t.type)return"<color>";if(t.unit){if(t.unit in I)return"<length>";if(t.unit in z)return"<angle>";if("%"===t.unit)return"<percentage>"}return"<double>"}function k(t,e){if(t<0)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error",`Negative values are not allowed, Actual: ${t}`,{term:e})}function q(t){if("quantity"!==t.type||null!==t.unit)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error",`Expected <double>, Actual: ${O(t)}`,{term:t})}function S(t){if("quantity"!==t.type||null!==t.unit&&"%"!==t.unit)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error",`Expected <double> or <percentage>, Actual: ${O(t)}`,{term:t})}const z={deg:1,grad:.9,rad:180/Math.PI,turn:360};function R(t){if("quantity"!==t.type||!(0===t.value&&null===t.unit||t.unit&&null!=z[t.unit]))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error",`Expected <angle>, Actual: ${O(t)}`,{term:t})}const I={px:1,cm:96/2.54,mm:96/2.54/10,in:96,pc:16,pt:96/72};function M(t){if("quantity"!==t.type||!(0===t.value&&null===t.unit||t.unit&&null!=I[t.unit]))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error",`Expected <length>, Actual: ${O(t)}`,{term:t})}function P(t){S(t);const e=t.value;return k(e,t),"%"===t.unit?.01*e:e}function N(t){return q(t),k(t.value,t),t.value}function T(t){return R(t),t.value*z[t.unit]||0}function U(t){return M(t),t.value*I[t.unit]||0}function H(e){switch(e.colorType){case"hex":return (0,_colorUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .hex2rgba */ .qh)(e.value);case"named":return _(e.value);case"function":return G(e.value)}}function _(t){if(!(0,_colorUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isNamedColor */ .V6)(t))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:unknown-color",`color '${t}' isn't valid`,{namedColor:t});return (0,_colorUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getNamedColorCopy */ .c4)(t)}const B=/^rgba?/i,D=/^hsla?/i;function G(t){if($(t.parameters,4),B.test(t.name))return[P(t.parameters[0]),P(t.parameters[1]),P(t.parameters[2]),t.parameters[3]?P(t.parameters[3]):1];if(D.test(t.name))return (0,_colorUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .hsla2rgba */ .z$)(N(t.parameters[0]),P(t.parameters[1]),P(t.parameters[2]),t.parameters[3]?P(t.parameters[3]):1);throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:syntax-error",`Invalid color function '${t.name}'`,{colorFunction:t})}


/***/ }),

/***/ 50193:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function t(r){return"portalItem"in r}const i=i=>{let o=class extends i{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):t(this)?this.portalItem?.apiKey:null}set apiKey(r){null!=r?this._override("apiKey",r):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:String})],o.prototype,"apiKey",null),o=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.layers.mixins.APIKeyMixin")],o),o};


/***/ }),

/***/ 45681:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(539);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16123);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const l=l=>{let p=class extends l{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const t=(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_7__/* .parse */ .qg)(this.url);if(null!=t&&t.title)return t.title}return this._get("title")||""}set title(t){this._set("title",t)}set url(t){this._set("url",(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_7__/* .sanitizeUrl */ .Jf)(t,_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getLogger(this)))}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],p.prototype,"title",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String})],p.prototype,"url",null),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.layers.mixins.ArcGISService")],p),p};


/***/ }),

/***/ 15305:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/* harmony import */ var _effects_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27664);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const i={read:{reader:_effects_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .read */ .LF},write:{allowNull:!0,writer:_effects_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .write */ .M9}},a=t=>{let s=class extends t{constructor(){super(...arguments),this.blendMode="normal",this.effect=null}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:["average","color-burn","color-dodge","color","darken","destination-atop","destination-in","destination-out","destination-over","difference","exclusion","hard-light","hue","invert","lighten","lighter","luminosity","minus","multiply","normal","overlay","plus","reflect","saturation","screen","soft-light","source-atop","source-in","source-out","vivid-light","xor"],nonNullable:!0,json:{read:!1,write:!1,origins:{"web-map":{read:!0,write:!0},"portal-item":{read:!0,write:!0}}}})],s.prototype,"blendMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({json:{read:!1,write:!1,origins:{"web-map":i,"portal-item":i}}})],s.prototype,"effect",void 0),s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.layers.mixins.BlendLayer")],s),s};


/***/ }),

/***/ 16161:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const o=o=>{let t=class extends o{constructor(){super(...arguments),this.customParameters=null}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:Object,json:{write:{overridePolicy:r=>({enabled:!!(r&&Object.keys(r).length>0)})}}})],t.prototype,"customParameters",void 0),t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.layers.mixins.CustomParametersMixin")],t),t};


/***/ }),

/***/ 46602:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mk: () => (/* binding */ p),
/* harmony export */   Zk: () => (/* binding */ c),
/* harmony export */   w6: () => (/* binding */ F)
/* harmony export */ });
/* unused harmony exports emitUpdateMomentEvent, isLayerWithGDBVersion, onApplyEditsEvent, onUpdateMomentEvent, versionMatches */
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17306);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19251);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40189);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(539);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73446);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98849);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63863);
/* harmony import */ var _versionManagement_support_versionManagementUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(96023);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const o=new _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.EventEmitter;function l(e){return o.on("apply-edits",new WeakRef(e))}function a(e){return o.on("update-moment",new WeakRef(e))}function c(e,t,s=null,r=!1){const d=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .createResolver */ .Tw)();return r=null==t||r,o.emit("apply-edits",{serviceUrl:e,layerId:t,gdbVersion:s,mayReceiveServiceEdits:r,result:d.promise}),d}function h(e,t,s=null,i){o.emit("update-moment",{serviceUrl:e,layerId:t,gdbVersion:s,moment:i})}const u="esri.layers.mixins.EditBusLayer",m=Symbol(u);function p(e){return null!=e&&"object"==typeof e&&m in e}function b(e){return null!=e&&"object"==typeof e&&"gdbVersion"in e}function g(e,t,s){const i=new URL(e).host,r=_versionManagement_support_versionManagementUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .defaultVersionNameLookup */ .Z3.get(i),n=e=>!e||e===r;return n(t)&&n(s)||t===s}const F=t=>{var i;let d=class extends t{constructor(...e){super(...e),this[i]=!0,this._applyEditsHandler=e=>{const{serviceUrl:t,layerId:i,gdbVersion:r,mayReceiveServiceEdits:d,result:o}=e,l=t===this.url,a=null!=i&&null!=this.layerId&&i===this.layerId,c=b(this),h=b(this)&&g(t,r,this.gdbVersion);if(!l||c&&!h||!a&&!d)return;const u=o.then((e=>{if(a&&(e.addedFeatures.length||e.updatedFeatures.length||e.deletedFeatures.length||e.addedAttachments.length||e.updatedAttachments.length||e.deletedAttachments.length))return this.emit("edits",(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(e)),e;const t=e.editedFeatures?.find((({layerId:e})=>e===this.layerId));if(t){const{adds:i,updates:r,deletes:d}=t.editedFeatures,n={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:i?i.map((({attributes:e})=>({objectId:this.objectIdField&&e[this.objectIdField],globalId:this.globalIdField&&e[this.globalIdField]}))):[],deletedFeatures:d?d.map((({attributes:e})=>({objectId:this.objectIdField&&e[this.objectIdField],globalId:this.globalIdField&&e[this.globalIdField]}))):[],updatedFeatures:r?r.map((({current:{attributes:e}})=>({objectId:this.objectIdField&&e[this.objectIdField],globalId:this.globalIdField&&e[this.globalIdField]}))):[],editedFeatures:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(e.editedFeatures),exceededTransferLimit:!1,historicMoment:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(e.historicMoment)};return this.emit("edits",n),n}return{edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:[],deletedFeatures:[],updatedFeatures:[],editedFeatures:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(e.editedFeatures),exceededTransferLimit:!1,historicMoment:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(e.historicMoment)}})).then((e=>("historicMoment"in this&&this.historicMoment!==e.historicMoment&&(0,_versionManagement_support_versionManagementUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .isVersionInEditSession */ .w5)(t,r)&&(this.historicMoment=e.historicMoment),e)));this.emit("apply-edits",{result:u})},this._updateMomentHandler=e=>{const{serviceUrl:t,gdbVersion:s,moment:i}=e,r=t===this.url,d=b(this),n=b(this)&&g(t,s,this.gdbVersion),o=b(this)&&!g(t,this.gdbVersion,null);r&&d&&n&&o&&"historicMoment"in this&&this.historicMoment!==i&&(this.historicMoment=i)},this.when().then((()=>{this.addHandles(l(this._applyEditsHandler)),"historicMoment"in this&&this.addHandles(a(this._updateMomentHandler))}),(()=>{}))}};return i=m,d=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)(u)],d),d};


/***/ }),

/***/ 15053:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/* harmony import */ var _support_FeatureEffect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76137);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const t={write:{allowNull:!0}},p=p=>{let c=class extends p{constructor(){super(...arguments),this.featureEffect=null}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:_support_FeatureEffect_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,json:{origins:{"web-map":t,"portal-item":t}}})],c.prototype,"featureEffect",void 0),c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.layers.mixins.FeatureEffectLayer")],c),c};


/***/ }),

/***/ 71679:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  j: () => (/* binding */ D)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(48982);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/layerContainerType.js
var layerContainerType = __webpack_require__(73324);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(84698);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/HeightModelInfo.js
var HeightModelInfo = __webpack_require__(34064);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js
var arcgisLayerUrl = __webpack_require__(16123);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/commonProperties.js + 1 modules
var commonProperties = __webpack_require__(84356);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(24793);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/time/timeZoneUtils.js + 1 modules
var timeZoneUtils = __webpack_require__(12129);
;// ../node_modules/@arcgis/core/layers/support/EditFieldsInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let p=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(e){super(e),this.creatorField=null,this.creationDateField=null,this.editorField=null,this.editDateField=null,this.realm=null,this.timeZone=null}};(0,tslib_es6._)([(0,property/* property */.MZ)()],p.prototype,"creatorField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],p.prototype,"creationDateField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],p.prototype,"editorField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],p.prototype,"editDateField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],p.prototype,"realm",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)((0,timeZoneUtils/* timeZoneProperty */.P6)("dateFieldsTimeReference",!0))],p.prototype,"timeZone",void 0),p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.EditFieldsInfo")],p);const l=p;

;// ../node_modules/@arcgis/core/layers/support/FeatureIndex.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let FeatureIndex_p=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(o){super(o)}};(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0,json:{write:!0}})],FeatureIndex_p.prototype,"name",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0,json:{write:!0}})],FeatureIndex_p.prototype,"fields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0,json:{write:!0}})],FeatureIndex_p.prototype,"isAscending",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0,json:{write:!0}})],FeatureIndex_p.prototype,"indexType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0,json:{write:!0}})],FeatureIndex_p.prototype,"isUnique",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0,json:{write:!0}})],FeatureIndex_p.prototype,"description",void 0),FeatureIndex_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.FeatureIndex")],FeatureIndex_p);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/featureLayerUtils.js + 1 modules
var featureLayerUtils = __webpack_require__(97461);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/unitUtils.js
var unitUtils = __webpack_require__(92976);
;// ../node_modules/@arcgis/core/layers/support/GeometryFieldsInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let a=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(e){super(e),this.shapeAreaField=null,this.shapeLengthField=null,this.units=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:{source:"shapeAreaFieldName"}}})],a.prototype,"shapeAreaField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:{source:"shapeLengthFieldName"}}})],a.prototype,"shapeLengthField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:e=>unitUtils/* areaUnitsJSONMap */.dk.read(e)||unitUtils/* lengthUnitsJSONMap */.Sk.read(e)}})],a.prototype,"units",void 0),a=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.GeometryFieldsInfo")],a);const c=a;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/LayerFloorInfo.js
var LayerFloorInfo = __webpack_require__(8585);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
;// ../node_modules/@arcgis/core/layers/support/Relationship.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const Relationship_a=new jsonMap/* JSONMap */.J({esriRelCardinalityOneToOne:"one-to-one",esriRelCardinalityOneToMany:"one-to-many",esriRelCardinalityManyToMany:"many-to-many"}),n=new jsonMap/* JSONMap */.J({esriRelRoleOrigin:"origin",esriRelRoleDestination:"destination"});let Relationship_l=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(e){super(e),this.cardinality=null,this.composite=null,this.id=null,this.keyField=null,this.keyFieldInRelationshipTable=null,this.name=null,this.relatedTableId=null,this.relationshipTableId=null,this.role=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:Relationship_a.read,write:Relationship_a.write}})],Relationship_l.prototype,"cardinality",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!0,write:!0}})],Relationship_l.prototype,"composite",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!0,write:!0}})],Relationship_l.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!0,write:!0}})],Relationship_l.prototype,"keyField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!0,write:!0}})],Relationship_l.prototype,"keyFieldInRelationshipTable",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!0,write:!0}})],Relationship_l.prototype,"name",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!0,write:!0}})],Relationship_l.prototype,"relatedTableId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!0,write:!0}})],Relationship_l.prototype,"relationshipTableId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:n.read,write:n.write}})],Relationship_l.prototype,"role",void 0),Relationship_l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.Relationship")],Relationship_l);const Relationship_p=Relationship_l;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/serviceCapabilitiesUtils.js + 1 modules
var serviceCapabilitiesUtils = __webpack_require__(90351);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/domains.js + 5 modules
var domains = __webpack_require__(38938);
;// ../node_modules/@arcgis/core/layers/support/Subtype.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let Subtype_c=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(o){super(o),this.code=null,this.defaultValues={},this.domains=null,this.name=null}readDomains(o){if(!o)return null;const r={};for(const t of Object.keys(o))r[t]=(0,domains/* fromJSON */.rS)(o[t]);return r}writeDomains(o,r){if(!o)return;const t={};for(const s of Object.keys(o))o[s]&&(t[s]=o[s]?.toJSON());r.domains=t}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],Subtype_c.prototype,"code",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Object,json:{write:!0}})],Subtype_c.prototype,"defaultValues",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],Subtype_c.prototype,"domains",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("domains")],Subtype_c.prototype,"readDomains",null),(0,tslib_es6._)([(0,writer/* writer */.K)("domains")],Subtype_c.prototype,"writeDomains",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],Subtype_c.prototype,"name",void 0),Subtype_c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.Subtype")],Subtype_c);const Subtype_n=Subtype_c;

;// ../node_modules/@arcgis/core/layers/mixins/FeatureLayerBase.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const D=D=>{let R=class extends D{constructor(){super(...arguments),this.copyright=null,this.capabilities=null,this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.definitionExpression=null,this.displayField=null,this.editFieldsInfo=null,this.editingInfo=null,this.elevationInfo=null,this.floorInfo=null,this.fullExtent=null,this.gdbVersion=null,this.geometryFieldsInfo=null,this.geometryType=null,this.globalIdField=null,this.hasM=void 0,this.hasZ=void 0,this.heightModelInfo=null,this.historicMoment=null,this.indexes=new(Collection/* default */.A.ofType(FeatureIndex_p)),this.isTable=!1,this.layerId=void 0,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.preferredTimeZone=null,this.relationships=null,this.returnM=void 0,this.returnZ=void 0,this.serviceDefinitionExpression=null,this.serviceItemId=null,this.sourceJSON=null,this.spatialReference=SpatialReference/* default */.A.WGS84,this.subtypeField=null,this.subtypes=null,this.trackIdField=null,this.version=void 0}get authenticationTriggerEvent(){if(!this.url)return null;const{capabilities:e}=this;if(e){const{query:t,operations:r,editing:i}=e;if(!t.supportsQueryByOthers||!t.supportsQueryByAnonymous)return"load";if(r.supportsEditing&&!(i.supportsUpdateByOthers&&i.supportsUpdateByAnonymous&&i.supportsDeleteByOthers&&i.supportsDeleteByAnonymous))return"load"}return this.userHasUpdateItemPrivileges?(0,featureLayerUtils/* isLayerCacheStale */.tG)(this)?"load":this.hasUpdateItemRestrictions?e.operations.supportsQuery?"editing":"load":null:this.userHasFullEditingPrivileges&&this.hasFullEditingRestrictions?"editing":null}readCapabilitiesFromService(e,t){return (0,serviceCapabilitiesUtils/* getFeatureLayerCapabilities */.S)(t,this.url)}readEditingInfo(e,t){const{editingInfo:r}=t;return r?{lastEditDate:null!=r.lastEditDate?new Date(r.lastEditDate):null}:null}get effectiveCapabilities(){const e=this.capabilities;if(!e)return null;const t=(0,lang/* clone */.o8)(e),{operations:i,editing:o}=t;return this.sourceJSON?.isMultiServicesView?(this.userHasUpdateItemPrivileges&&(i.supportsQuery=!0),t):this.userHasUpdateItemPrivileges?(i.supportsAdd=i.supportsDelete=i.supportsEditing=i.supportsQuery=i.supportsUpdate=o.supportsDeleteByOthers=o.supportsGeometryUpdate=o.supportsUpdateByOthers=!0,t):(this.userHasFullEditingPrivileges&&i.supportsEditing&&(i.supportsAdd=i.supportsDelete=i.supportsUpdate=o.supportsGeometryUpdate=!0),t)}readGlobalIdFieldFromService(e,t){return (0,featureLayerUtils/* readGlobalIdField */.jD)(t)}get hasFullEditingRestrictions(){const e=this.capabilities;if(!e||this.sourceJSON?.isMultiServicesView)return!1;const{operations:t,editing:r}=e;return t.supportsEditing&&!(t.supportsAdd&&t.supportsDelete&&t.supportsUpdate&&r.supportsGeometryUpdate)}get hasUpdateItemRestrictions(){const e=this.capabilities;if(!e)return!1;const{operations:t,editing:r}=e;return this.sourceJSON?.isMultiServicesView?!t.supportsQuery:!(t.supportsAdd&&t.supportsDelete&&t.supportsEditing&&t.supportsQuery&&t.supportsUpdate&&r.supportsDeleteByOthers&&r.supportsGeometryUpdate&&r.supportsUpdateByOthers)}readIsTableFromService(e,t){return"Table"===t.type}readMaxScale(e,t){return t.effectiveMaxScale||e||0}readMinScale(e,t){return t.effectiveMinScale||e||0}readObjectIdFieldFromService(e,t){return (0,featureLayerUtils/* readObjectIdField */.Zm)(t)}readServiceDefinitionExpression(e,t){return t.definitionQuery||t.definitionExpression}set url(e){const t=(0,arcgisLayerUrl/* sanitizeUrlWithLayerId */.HZ)({layer:this,url:e,nonStandardUrlAllowed:!0,logger:Logger/* default */.A.getLogger(this)});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,i){(0,arcgisLayerUrl/* writeUrlWithLayerId */.LS)(this,e,null,t,i)}readVersion(e,t){return (0,featureLayerUtils/* readVersion */.$4)(t)}};return (0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],R.prototype,"authenticationTriggerEvent",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{service:{read:{source:"copyrightText"}}}}})],R.prototype,"copyright",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1,origins:{service:{read:{source:["advancedQueryCapabilities","allowGeometryUpdates","allowUpdateWithoutMValues","archivingInfo","capabilities","datesInUnknownTimezone","hasAttachments","hasM","hasZ","maxRecordCount","maxRecordCountFactor","ownershipBasedAccessControlForFeatures","standardMaxRecordCount","supportedQueryFormats","supportsAdvancedQueries","supportsApplyEditsWithGlobalIds","supportsAttachmentsByUploadId","supportsAttachmentsResizing","supportsCalculate","supportsCoordinatesQuantization","supportsExceedsLimitStatistics","supportsFieldDescriptionProperty","supportsQuantizationEditMode","supportsRollbackOnFailureParameter","supportsStatistics","supportsTruncate","supportsValidateSql","tileMaxRecordCount","useStandardizedQueries"]}}}}})],R.prototype,"capabilities",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","capabilities")],R.prototype,"readCapabilitiesFromService",null),(0,tslib_es6._)([(0,property/* property */.MZ)((0,timeZoneUtils/* timeZoneProperty */.P6)("dateFieldsTimeReference"))],R.prototype,"dateFieldsTimeZone",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean})],R.prototype,"datesInUnknownTimezone",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],R.prototype,"definitionExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{service:{read:{source:"displayField"}}}}})],R.prototype,"displayField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:l})],R.prototype,"editFieldsInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],R.prototype,"editingInfo",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("editingInfo")],R.prototype,"readEditingInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],R.prototype,"effectiveCapabilities",null),(0,tslib_es6._)([(0,property/* property */.MZ)((()=>{const e=(0,lang/* clone */.o8)(commonProperties/* elevationInfo */.Yj),t=e.json.origins;return t["web-map"]={read:!1,write:!1},t["portal-item"]={read:!1,write:!1},e})())],R.prototype,"elevationInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:LayerFloorInfo/* default */.A,json:{name:"layerDefinition.floorInfo",write:!0,origins:{"web-scene":{name:"layerDefinition.floorInfo",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}}}})],R.prototype,"floorInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Extent/* default */.A,json:{origins:{service:{read:{source:"extent"}}}}})],R.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],R.prototype,"gdbVersion",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:c,json:{read:{source:"geometryProperties"}}})],R.prototype,"geometryFieldsInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["point","polygon","polyline","multipoint","multipatch","mesh"],json:{origins:{service:{read:featureLayerUtils/* geometryTypeKebabDict */.iX.read}}}})],R.prototype,"geometryType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],R.prototype,"globalIdField",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","globalIdField",["globalIdField","fields"])],R.prototype,"readGlobalIdFieldFromService",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],R.prototype,"hasFullEditingRestrictions",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{origins:{service:{read:!0}}}})],R.prototype,"hasM",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],R.prototype,"hasUpdateItemRestrictions",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{origins:{service:{read:!0}}}})],R.prototype,"hasZ",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:HeightModelInfo/* default */.A})],R.prototype,"heightModelInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Date})],R.prototype,"historicMoment",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(FeatureIndex_p),readOnly:!0})],R.prototype,"indexes",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],R.prototype,"isTable",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","isTable",["type"])],R.prototype,"readIsTableFromService",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{read:!1,write:{target:"id"}}},read:!1}})],R.prototype,"layerId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* maxScale */.hG)],R.prototype,"maxScale",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","maxScale",["maxScale","effectiveMaxScale"])],R.prototype,"readMaxScale",null),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* minScale */.hn)],R.prototype,"minScale",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","minScale",["minScale","effectiveMinScale"])],R.prototype,"readMinScale",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],R.prototype,"objectIdField",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","objectIdField",["objectIdField","fields"])],R.prototype,"readObjectIdFieldFromService",null),(0,tslib_es6._)([(0,property/* property */.MZ)((0,timeZoneUtils/* timeZoneProperty */.P6)("preferredTimeReference"))],R.prototype,"preferredTimeZone",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Relationship_p],readOnly:!0})],R.prototype,"relationships",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean})],R.prototype,"returnM",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean})],R.prototype,"returnZ",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{write:!1}})],R.prototype,"serverGens",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],R.prototype,"serviceDefinitionExpression",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","serviceDefinitionExpression",["definitionQuery","definitionExpression"])],R.prototype,"readServiceDefinitionExpression",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],R.prototype,"serviceItemId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],R.prototype,"sourceJSON",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SpatialReference/* default */.A,json:{origins:{service:{read:{source:"extent.spatialReference"}}}}})],R.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0,json:{origins:{service:{read:!0}}}})],R.prototype,"subtypeField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Subtype_n],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],R.prototype,"subtypes",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:{source:"timeInfo.trackIdField"}}})],R.prototype,"trackIdField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* url */.OZ)],R.prototype,"url",null),(0,tslib_es6._)([(0,writer/* writer */.K)("url")],R.prototype,"writeUrl",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{service:{read:!0}},read:!1}})],R.prototype,"version",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","version",["currentVersion","capabilities","drawingInfo","hasAttachments","htmlPopupType","relationships","timeInfo","typeIdField","types"])],R.prototype,"readVersion",null),R=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.mixins.FeatureLayerBase")],R),R};


/***/ }),

/***/ 64782:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ c)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(85251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/AggregateField.js
var AggregateField = __webpack_require__(94301);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/layerContainerType.js
var layerContainerType = __webpack_require__(73324);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/FeatureReduction.js
var FeatureReduction = __webpack_require__(18475);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/PopupTemplate.js + 3 modules
var PopupTemplate = __webpack_require__(56542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/ClassBreaksRenderer.js
var ClassBreaksRenderer = __webpack_require__(17671);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/DictionaryRenderer.js
var DictionaryRenderer = __webpack_require__(84685);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/DotDensityRenderer.js + 1 modules
var DotDensityRenderer = __webpack_require__(20299);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/HeatmapRenderer.js + 1 modules
var HeatmapRenderer = __webpack_require__(25498);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/PieChartRenderer.js + 2 modules
var PieChartRenderer = __webpack_require__(79300);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/Renderer.js
var Renderer = __webpack_require__(76589);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/SimpleRenderer.js
var SimpleRenderer = __webpack_require__(47347);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/UniqueValueRenderer.js + 3 modules
var UniqueValueRenderer = __webpack_require__(2692);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/jsonUtils.js
var jsonUtils = __webpack_require__(48887);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/types.js
var types = __webpack_require__(49169);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/object.js
var object = __webpack_require__(76724);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(28902);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/commonProperties.js + 1 modules
var commonProperties = __webpack_require__(84356);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/featureLayerUtils.js + 1 modules
var featureLayerUtils = __webpack_require__(97461);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/LabelClass.js + 1 modules
var LabelClass = __webpack_require__(86155);
;// ../node_modules/@arcgis/core/layers/support/FeatureReductionBinning.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var b;const g="esri.layers.support.FeatureReductionBinning";let h=b=class extends FeatureReduction/* FeatureReduction */.c{constructor(e){super(e),this.type="binning",this.binType="geohash",this.fixedBinLevel=3,this.labelingInfo=null,this.labelsVisible=!0,this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.fields=[],this.renderer=null}writeFields(e,r,o){const t=e.filter((e=>"avg_angle"!==e.statisticType)).map((e=>e.toJSON()));(0,object/* setDeepValue */.sM)(o,t,r)}readRenderer(e,r,t){const s=r.drawingInfo?.renderer;return s?(0,jsonUtils/* read */.L)(s,r,t)??void 0:(0,featureLayerUtils/* createDefaultRenderer */.PD)(r,t)}clone(){return new b({fields:(0,lang/* clone */.o8)(this.fields),fixedBinLevel:this.fixedBinLevel,labelingInfo:(0,lang/* clone */.o8)(this.labelingInfo),labelsVisible:this.labelsVisible,maxScale:this.maxScale,popupEnabled:this.popupEnabled,popupTemplate:(0,lang/* clone */.o8)(this.popupTemplate),renderer:(0,lang/* clone */.o8)(this.renderer)})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({binning:"binning"})],h.prototype,"type",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({geohash:"geohash"})],h.prototype,"binType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,range:{min:1,max:9},json:{write:!0}})],h.prototype,"fixedBinLevel",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[LabelClass/* default */.A],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],h.prototype,"labelingInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* labelsVisible */.kF)],h.prototype,"labelsVisible",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{default:0,name:"visibilityInfo.maxScale"}})],h.prototype,"maxScale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* popupEnabled */.M6)],h.prototype,"popupEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:PopupTemplate/* default */.A,json:{name:"popupInfo",write:!0}})],h.prototype,"popupTemplate",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[AggregateField/* default */.A],json:{write:!0}})],h.prototype,"fields",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("fields")],h.prototype,"writeFields",null),(0,tslib_es6._)([(0,property/* property */.MZ)({types:types/* rendererTypes */.H,json:{write:{target:"drawingInfo.renderer"}}})],h.prototype,"renderer",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("renderer",["drawingInfo.renderer"])],h.prototype,"readRenderer",null),h=b=(0,tslib_es6._)([(0,subclass/* subclass */.$)(g)],h);const v=h;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols.js + 1 modules
var symbols = __webpack_require__(30822);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/screenUtils.js
var screenUtils = __webpack_require__(89882);
;// ../node_modules/@arcgis/core/layers/support/FeatureReductionCluster.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var FeatureReductionCluster_g;const S="esri.layers.support.FeatureReductionCluster";function w(e){return"simple"===e.type&&!e.visualVariables?.length}let I=FeatureReductionCluster_g=class extends JSONSupport/* JSONSupport */.oY{constructor(e){super(e),this.type="cluster",this.clusterRadius=(0,screenUtils/* toPt */.cr)("80px"),this.clusterMinSize=(0,screenUtils/* toPt */.cr)("12px"),this.clusterMaxSize=(0,screenUtils/* toPt */.cr)("50px"),this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.renderer=null,this.symbol=null,this.labelingInfo=null,this.labelsVisible=!0,this.fields=null}readRenderer(e,r,t){const s=r.drawingInfo?.renderer;return s?.authoringInfo?.isAutoGenerated?null:s?w(s)?null:(0,jsonUtils/* read */.L)(s,r,t)??void 0:(0,featureLayerUtils/* createDefaultRenderer */.PD)(r,t)}readSymbol(e,r,t){const s=r.drawingInfo?.renderer;if(s?.authoringInfo?.isAutoGenerated)return null;if(s&&w(s)){const e=(0,jsonUtils/* read */.L)(s,r,t);return e?.symbol}return null}writeSymbol(e,r,o,s){const i=this.renderer?.authoringInfo?.isAutoGenerated;if(!this.renderer||i){const o=new SimpleRenderer/* default */.A({symbol:e});r.drawingInfo={renderer:o.write({},s)}}}writeFields(e,r,t){const o=e.filter((e=>"avg_angle"!==e.statisticType)).map((e=>e.toJSON()));(0,object/* setDeepValue */.sM)(t,o,r)}readFields(e,r,t){return e.filter((e=>!e.isAutoGenerated)).map((e=>AggregateField/* default */.A.fromJSON(e)))}clone(){return new FeatureReductionCluster_g({clusterRadius:this.clusterRadius,clusterMinSize:this.clusterMinSize,clusterMaxSize:this.clusterMaxSize,labelingInfo:(0,lang/* clone */.o8)(this.labelingInfo),labelsVisible:this.labelsVisible,fields:(0,lang/* clone */.o8)(this.fields),maxScale:this.maxScale,renderer:(0,lang/* clone */.o8)(this.renderer),symbol:(0,lang/* clone */.o8)(this.symbol),popupEnabled:this.popupEnabled,popupTemplate:(0,lang/* clone */.o8)(this.popupTemplate)})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["cluster"],readOnly:!0,json:{write:!0}})],I.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,cast:e=>"auto"===e?e:(0,screenUtils/* toPt */.cr)(e),json:{write:!0}})],I.prototype,"clusterRadius",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,cast:screenUtils/* toPt */.cr,json:{write:!0}})],I.prototype,"clusterMinSize",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,cast:screenUtils/* toPt */.cr,json:{write:!0}})],I.prototype,"clusterMaxSize",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{default:0,name:"visibilityInfo.maxScale"}})],I.prototype,"maxScale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* popupEnabled */.M6)],I.prototype,"popupEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:PopupTemplate/* default */.A,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],I.prototype,"popupTemplate",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:types/* rendererTypes */.H,json:{write:{target:"drawingInfo.renderer"}}})],I.prototype,"renderer",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("renderer",["drawingInfo.renderer"])],I.prototype,"readRenderer",null),(0,tslib_es6._)([(0,property/* property */.MZ)({types:symbols/* symbolTypesCluster */.q8})],I.prototype,"symbol",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("symbol",["drawingInfo.renderer"])],I.prototype,"readSymbol",null),(0,tslib_es6._)([(0,writer/* writer */.K)("symbol")],I.prototype,"writeSymbol",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[LabelClass/* default */.A],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],I.prototype,"labelingInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* labelsVisible */.kF)],I.prototype,"labelsVisible",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[AggregateField/* default */.A],json:{write:!0}})],I.prototype,"fields",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("fields")],I.prototype,"writeFields",null),(0,tslib_es6._)([(0,reader/* reader */.w)("fields")],I.prototype,"readFields",null),I=FeatureReductionCluster_g=(0,tslib_es6._)([(0,subclass/* subclass */.$)(S)],I);const FeatureReductionCluster_v=I;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/FeatureReductionSelection.js
var FeatureReductionSelection = __webpack_require__(99989);
;// ../node_modules/@arcgis/core/layers/support/featureReductionUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const o={key:"type",base:FeatureReduction/* FeatureReduction */.c,typeMap:{cluster:FeatureReductionCluster_v,binning:v}},p={types:{key:"type",base:FeatureReduction/* FeatureReduction */.c,typeMap:{selection:FeatureReductionSelection/* default */.A,cluster:FeatureReductionCluster_v,binning:v}},json:{name:"layerDefinition.featureReduction",write:{allowNull:!0},origins:{"web-map":{types:o},"portal-item":{types:o},"web-scene":{types:{key:"type",base:FeatureReduction/* FeatureReduction */.c,typeMap:{selection:FeatureReductionSelection/* default */.A}},name:"layerDefinition.featureReduction",write:{layerContainerTypes:layerContainerType/* excludeTables */.K}}}}};

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/2d/layers/support/clusterUtils.js + 1 modules
var clusterUtils = __webpack_require__(85205);
;// ../node_modules/@arcgis/core/layers/mixins/FeatureReductionLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const c=c=>{let a=class extends c{constructor(...e){super(...e),this.addHandles((0,reactiveUtils/* watch */.wB)((()=>this.renderer),(()=>{if(this.featureReduction){const e=this._normalizeFeatureReduction(this.featureReduction);this._set("featureReduction",e)}}),reactiveUtils/* sync */.OH))}set featureReduction(e){const r=this._normalizeFeatureReduction(e);this._set("featureReduction",r)}set renderer(e){}_normalizeFeatureReduction(e){if("cluster"!==e?.type)return e;const r=e.clone(),t=[new AggregateField/* default */.A({name:"cluster_count",isAutoGenerated:!0,statisticType:"count"})],s=(r.fields??[]).filter((e=>!e.isAutoGenerated));if(e.renderer&&!e.renderer.authoringInfo?.isAutoGenerated)return r.fields=[...t,...s],r;if(e.symbol)return r.fields=[...t,...s],r.renderer=null,r;if(!this.renderer)return e;const o=(0,clusterUtils/* createClusterRenderer */.ur)(t,this.renderer,e,null,!1);return r.fields=[...t,...s],r.renderer=o,r}};return (0,tslib_es6._)([(0,property/* property */.MZ)(p)],a.prototype,"featureReduction",null),a=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.mixins.FeatureReductionLayer")],a),a};


/***/ }),

/***/ 41506:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: () => (/* binding */ u)
});

// UNUSED EXPORTS: isOperationalLayer

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(20909);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/layerContainerType.js
var layerContainerType = __webpack_require__(73324);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/read.js
var read = __webpack_require__(83312);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/write.js
var write = __webpack_require__(77373);
;// ../node_modules/@arcgis/core/layers/mixins/operationalLayers.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const e={ArcGISAnnotationLayer:!0,ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,CSV:!0,GeoRSS:!0,GeoJSON:!0,GroupLayer:!0,KML:!0,MediaLayer:!0,OGCFeatureLayer:!0,OrientedImageryLayer:!0,SubtypeGroupLayer:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},r={ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},a={ArcGISFeatureLayer:!0},S={"web-scene/operational-layers":{ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,OGCFeatureLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,GeoJSON:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,KML:!0,RasterDataLayer:!0,Voxel:!0,LineOfSightLayer:!0},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-scene/tables":{ArcGISFeatureLayer:!0},"web-map/operational-layers":e,"web-map/basemap":r,"web-map/tables":a,"link-chart/operational-layers":{...e,LinkChartLayer:!0},"link-chart/basemap":r,"link-chart/tables":a,"portal-item/operational-layers":{ArcGISFeatureLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISImageServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0,OrientedImageryLayer:!0,SubtypeGroupLayer:!0}};

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/commonProperties.js + 1 modules
var commonProperties = __webpack_require__(84356);
;// ../node_modules/@arcgis/core/layers/mixins/OperationalLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const u=u=>{let m=class extends u{constructor(){super(...arguments),this.persistenceEnabled=!0,this.title=null}readId(e,r,t){return"Group Layer"===t?.portalItem?.type?void 0:e}writeListMode(e,r,t,o){(o&&"ground"===o.layerContainerType||e&&(0,write/* willPropertyWrite */.R)(this,t,{},o))&&(r[t]=e)}writeOperationalLayerType(e,r,t,o){e&&"tables"!==o?.layerContainerType&&(r.layerType=e)}writeTitle(e,r){r.title=e??"Layer"}read(e,r){r&&(r.layer=this),(0,read/* readLoadable */.t)(this,e,(r=>super.read(e,r)),r)}write(e,o){if(!this.persistenceEnabled)return null;if(o?.origin){const e=`${o.origin}/${o.layerContainerType||"operational-layers"}`,t=S[e];let i=!!t?.[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===e&&(i=!1),"ArcGISDimensionLayer"===this.operationalLayerType&&"web-map/operational-layers"===e&&(i=!1),!i)return o.messages?.push(new Error/* default */.A("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,{layer:this})),null}const i=super.write(e,{...o,layer:this}),s=!!o&&!!o.messages&&!!o.messages.filter((e=>e instanceof Error/* default */.A&&"web-document-write:property-required"===e.name)).length;return (0,urlUtils/* isBlobProtocol */.w8)(i?.url)?(o?.messages?.push(new Error/* default */.A("layer:invalid-url",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`,{layer:this})),null):!this.url&&s?null:i}beforeSave(){}};return (0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],m.prototype,"id",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("id",["id"])],m.prototype,"readId",null),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* listMode */.C1)],m.prototype,"listMode",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("listMode")],m.prototype,"writeListMode",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1},"web-scene":{name:"layerType",read:!1,write:{enabled:!0,ignoreOrigin:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}}}})],m.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("operationalLayerType")],m.prototype,"writeOperationalLayerType",null),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* opacity */.ke)],m.prototype,"opacity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,readOnly:!1})],m.prototype,"persistenceEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],m.prototype,"title",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("title"),(0,writer/* writer */.K)(["web-scene"],"title")],m.prototype,"writeTitle",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{origins:{"web-scene":{name:"visibility",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}},name:"visibility",write:!0}})],m.prototype,"visible",void 0),m=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.mixins.OperationalLayer")],m),m};function m(e){return"operationalLayerType"in e}


/***/ }),

/***/ 94795:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: () => (/* binding */ c)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/object.js
var object = __webpack_require__(76724);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
;// ../node_modules/@arcgis/core/layers/support/OrderByInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var i;const p=new jsonMap/* JSONMap */.J({asc:"ascending",desc:"descending"});let n=i=class extends JSONSupport/* JSONSupport */.oY{constructor(r){super(r),this.field=null,this.valueExpression=null,this.order="ascending"}clone(){return new i({field:this.field,valueExpression:this.valueExpression,order:this.order})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],n.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],n.prototype,"valueExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:p.apiValues,json:{read:p.read,write:p.write}})],n.prototype,"order",void 0),n=i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.OrderByInfo")],n);const OrderByInfo_c=n;

;// ../node_modules/@arcgis/core/layers/mixins/OrderedLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function OrderedLayer_i(r,e,o){if(!r)return null;const t=r.find((r=>!!r.field));if(!t)return null;const i=new OrderByInfo_c;return i.read(t,o),[i]}function OrderedLayer_n(r,o,t,s){const i=r.find((r=>!!r.field));i&&(0,object/* setDeepValue */.sM)(t,[i.toJSON()],o)}const c=e=>{let c=class extends e{constructor(){super(...arguments),this.orderBy=null}};return (0,tslib_es6._)([(0,property/* property */.MZ)({type:[OrderByInfo_c],json:{origins:{"web-scene":{write:!1,read:!1}},read:{source:"layerDefinition.orderBy",reader:OrderedLayer_i},write:{target:"layerDefinition.orderBy",writer:OrderedLayer_n}}})],c.prototype,"orderBy",void 0),c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.mixins.OrderedLayer")],c),c};


/***/ }),

/***/ 34722:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ j)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21121);
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28830);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86394);
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12690);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98849);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(539);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(6267);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40189);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20909);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(75094);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(77542);
/* harmony import */ var _support_layerUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(40454);
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(10282);
/* harmony import */ var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(26099);
/* harmony import */ var _portal_PortalUser_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(68770);
/* harmony import */ var _portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(39532);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const j=j=>{let _=class extends j{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_21__/* .destroyMaybe */ .pR)(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_18__["default"]({id:t.itemId,portal:r?.portal})}writePortalItem(e,t){e?.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem?.id)try{const{load:r}=await __webpack_require__.e(/* import() */ 4085).then(__webpack_require__.bind(__webpack_require__, 14085));return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAborted */ .Te)(t),await r({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData,layerModuleTypeMap:e.layerModuleTypeMap},t)}catch(r){throw (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .isAbortError */ .zf)(r)||_core_Logger_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${r}`),r}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAbortError */ .QP)(e),!0))))}async setUserPrivileges(e,r){if(!_config_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(r);if(this.url)try{const{features:{edit:t,fullEdit:s},content:{updateItem:i}}=await this._fetchUserPrivileges(e,r);this._set("userHasEditingPrivileges",t),this._set("userHasFullEditingPrivileges",s),this._set("userHasUpdateItemPrivileges",i)}catch(s){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAbortError */ .QP)(s)}}async _fetchUserPrivileges(e,t){let s=this.portalItem;if(!e||!s||!s.loaded||s.sourceUrl)return this._fetchFallbackUserPrivileges(t);const i=e===s.id;if(i&&s.portal.user)return (0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_20__/* .getUserPrivileges */ .It)(s);let o,a;if(i)o=s.portal.url;else try{o=await (0,_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_16__/* .getOwningPortalUrl */ .wI)(this.url,t)}catch(m){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAbortError */ .QP)(m)}if(!o||!(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .hasSameCanonicalPortal */ .b8)(o,s.portal.url))return this._fetchFallbackUserPrivileges(t);try{const e=null!=t?t.signal:null;a=await(_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id?.getCredential(`${o}/sharing`,{prompt:!1,signal:e}))}catch(m){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAbortError */ .QP)(m)}const l=!0,n=!1,p=!1;if(!a)return{features:{edit:l,fullEdit:n},content:{updateItem:p}};try{if(i?await s.reload():(s=new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_18__["default"]({id:e,portal:{url:o}}),await s.load(t)),s.portal.user)return (0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_20__/* .getUserPrivileges */ .It)(s)}catch(m){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAbortError */ .QP)(m)}return{features:{edit:l,fullEdit:n},content:{updateItem:p}}}async _fetchFallbackUserPrivileges(e){let t=!0;try{t=await this._fetchUserHasEditingPrivileges(e)}catch(r){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAbortError */ .QP)(r)}return{features:{edit:t,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(e){const t=this.url?_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id?.findCredential(this.url):null;if(!t)return!0;const s=E.credential===t?E.user:await this._fetchEditingUser(e);return E.credential=t,E.user=s,null==s?.privileges||s.privileges.includes("features:user:edit")}async _fetchEditingUser(e){const t=this.portalItem?.portal?.user;if(t)return t;const o=_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id.findServerInfo(this.url??"");if(!o?.owningSystemUrl)return null;const a=`${o.owningSystemUrl}/sharing/rest`,l=_portal_Portal_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A.getDefault();if(l&&l.loaded&&(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .normalize */ .S8)(l.restUrl)===(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .normalize */ .S8)(a))return l.user;const n=`${a}/community/self`,p=null!=e?e.signal:null,u=await (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .result */ .Ke)((0,_request_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(n,{authMode:"no-prompt",query:{f:"json"},signal:p}));return u.ok?_portal_PortalUser_js__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A.fromJSON(u.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t?.portal,s=this.portalItem?.id&&(this.portalItem.portal||_portal_Portal_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A.getDefault());return r&&s&&!(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .hasSamePortal */ .ut)(s.restUrl,r.restUrl)?(t.messages&&t.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .MZ)({type:_portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_18__["default"]})],_.prototype,"portalItem",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_13__/* .reader */ .w)("web-document","portalItem",["itemId"])],_.prototype,"readPortalItem",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_15__/* .writer */ .K)("web-document","portalItem",{itemId:{type:String}})],_.prototype,"writePortalItem",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .MZ)({clonable:!1})],_.prototype,"resourceReferences",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .MZ)({type:Boolean,readOnly:!0})],_.prototype,"userHasEditingPrivileges",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .MZ)({type:Boolean,readOnly:!0})],_.prototype,"userHasFullEditingPrivileges",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .MZ)({type:Boolean,readOnly:!0})],_.prototype,"userHasUpdateItemPrivileges",void 0),_=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__/* .subclass */ .$)("esri.layers.mixins.PortalLayer")],_),_},E={credential:null,user:null};


/***/ }),

/***/ 50508:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ RefreshableLayer_f)
});

// UNUSED EXPORTS: isRefreshableLayer

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(4130);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/layerContainerType.js
var layerContainerType = __webpack_require__(73324);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(48982);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/asyncUtils.js
var asyncUtils = __webpack_require__(12690);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/watch.js
var watch = __webpack_require__(39425);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/trackingUtils.js
var trackingUtils = __webpack_require__(97996);
;// ../node_modules/@arcgis/core/layers/mixins/refresh.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const t=new Collection/* default */.A,o=new WeakMap;function n(e){f(e)&&t.push(new WeakRef(e))}function s(e){const r=t.find((r=>r.deref()===e));r&&t.remove(r)}function f(e){return null!=e&&"object"==typeof e&&"refreshInterval"in e&&"refresh"in e}function c(e,r){return Number.isFinite(e)&&Number.isFinite(r)?r<=0?e:c(r,e%r):0}let i=0,l=0;function a(){const e=Date.now();let r=!1;for(const n of t){const t=n.deref();if(t){if(t.refreshInterval){e-(o.get(t)??0)+5>=6e4*t.refreshInterval&&(o.set(t,e),t.refresh(e))}}else r=!0}if(r)for(let o=t.length-1;o>=0;o--){t.at(o).deref()||t.removeAt(o)}}(0,trackingUtils/* autorun */.fm)((()=>{const e=Date.now();let r=0;for(const n of t){const t=n.deref();t&&(r=c(Math.round(6e4*t.refreshInterval),r),t.refreshInterval?o.get(t)||o.set(t,e):o.delete(t))}if(r!==l){if(l=r,clearInterval(i),0===l)return void(i=0);i=setInterval(a,l)}}));const u={get hasRefreshTimer(){return i>0},get tickInterval(){return l},forceRefresh(){a()},hasLayer:e=>f(e)&&t.some((r=>r.deref()===e)),clear(){for(const e of t){const r=e.deref();r&&o.delete(r)}t.removeAll()}};

;// ../node_modules/@arcgis/core/layers/mixins/RefreshableLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function RefreshableLayer_c(e){return null!=e&&"object"==typeof e&&"refreshTimestamp"in e&&"refresh"in e}const m=.1,RefreshableLayer_f=c=>{let f=class extends c{constructor(...e){super(...e),this.refreshInterval=0,this.refreshTimestamp=0,this._debounceHasDataChanged=(0,promiseUtils/* debounce */.sg)((()=>this.hasDataChanged())),this.when().then((()=>{this.destroyed||n(this)}),(()=>{}))}destroy(){s(this)}castRefreshInterval(e){return e>=m?e:e<=0?0:m}get refreshParameters(){return{_ts:this.refreshTimestamp||null}}refresh(e=Date.now()){(0,promiseUtils/* ignoreAbortErrors */.QZ)(this._debounceHasDataChanged()).then((r=>{r&&this._set("refreshTimestamp",e),this.emit("refresh",{dataChanged:r})}),(e=>{Logger/* default */.A.getLogger(this).error(e),this.emit("refresh",{dataChanged:!1,error:e})}))}async hasDataChanged(){return!0}get test(){const e=this;return{set refreshInterval(r){e._set("refreshInterval",r)}}}};return (0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0,origins:{"web-scene":{write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}}}})],f.prototype,"refreshInterval",void 0),(0,tslib_es6._)([(0,cast/* cast */.w)("refreshInterval")],f.prototype,"castRefreshInterval",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],f.prototype,"refreshTimestamp",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],f.prototype,"refreshParameters",null),f=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.mixins.RefreshableLayer")],f),f};


/***/ }),

/***/ 25389:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const t=t=>{let l=class extends t{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get effectiveScaleRange(){const e={minScale:this.minScale,maxScale:this.maxScale},a=this.parent;a&&"effectiveScaleRange"in a&&r(e,a.effectiveScaleRange);const c=this._get("effectiveScaleRange");return c&&c.minScale===e.minScale&&c.maxScale===e.maxScale?c:e}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:Number,nonNullable:!0,json:{write:!0}})],l.prototype,"minScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:Number,nonNullable:!0,json:{write:!0}})],l.prototype,"maxScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({readOnly:!0})],l.prototype,"effectiveScaleRange",null),l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.layers.mixins.ScaleRangeLayer")],l),l};function r(e,a){return e.minScale=e.minScale>0?a.minScale>0?Math.min(e.minScale,a.minScale):e.minScale:a.minScale,e.maxScale=e.maxScale>0?a.maxScale>0?Math.max(e.maxScale,a.maxScale):e.maxScale:a.maxScale,e}


/***/ }),

/***/ 90826:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _TimeExtent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19790);
/* harmony import */ var _TimeInterval_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50019);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75094);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63863);
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42453);
/* harmony import */ var _support_TimeInfo_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(83849);
/* harmony import */ var _portal_timeUnitKebabDictionary_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(55134);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const a=a=>{let f=class extends a{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0}readOffset(e,t){const o=t.timeInfo.exportOptions;if(!o)return null;const s=o.timeOffset,i=_portal_timeUnitKebabDictionary_js__WEBPACK_IMPORTED_MODULE_11__/* .timeUnitKebabDictionary */ .j.fromJSON(o.timeOffsetUnits);return s&&i?new _TimeInterval_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A({value:s,unit:i}):null}set timeInfo(e){(0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .fixTimeInfoFields */ .sv)(e,this.fieldsIndex),this._set("timeInfo",e)}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_TimeExtent_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,json:{write:!1}})],f.prototype,"timeExtent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_TimeInterval_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A})],f.prototype,"timeOffset",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__/* .reader */ .w)("service","timeOffset",["timeInfo.exportOptions"])],f.prototype,"readOffset",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({value:null,type:_support_TimeInfo_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],f.prototype,"timeInfo",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation"},origins:{"web-scene":{read:!1,write:!1}}}})],f.prototype,"useViewTime",void 0),f=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.layers.mixins.TemporalLayer")],f),f};


/***/ }),

/***/ 94301:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19251);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/* harmony import */ var _ExpressionInfo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54746);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var p;let n=p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(t){super(t),this.isAutoGenerated=!1,this.name=null,this.alias=null,this.onStatisticField=null,this.onStatisticExpression=null,this.statisticType=null}clone(){return new p({name:this.name,alias:this.alias,isAutoGenerated:this.isAutoGenerated,onStatisticExpression:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.onStatisticExpression),onStatisticField:this.onStatisticField,statisticType:this.statisticType})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:Boolean,json:{write:!0}})],n.prototype,"isAutoGenerated",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{write:!0}})],n.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{write:!0}})],n.prototype,"alias",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{write:!0}})],n.prototype,"onStatisticField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_ExpressionInfo_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,json:{write:!0}})],n.prototype,"onStatisticExpression",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{write:!0}})],n.prototype,"statisticType",void 0),n=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.layers.support.AggregateField")],n);const a=n;


/***/ }),

/***/ 54746:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24793);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let p=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* .ClonableMixin */ .O)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY)){constructor(r){super(r),this.expression=null,this.title=null,this.returnType=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{write:!0}})],p.prototype,"expression",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{write:!0}})],p.prototype,"title",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{write:!0}})],p.prototype,"returnType",void 0),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.layers.support.ExpressionInfo")],p);const i=p;


/***/ }),

/***/ 76137:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ w)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98849);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76724);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63863);
/* harmony import */ var _effects_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(27664);
/* harmony import */ var _FeatureFilter_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25758);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var f;const d={read:{reader:_effects_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .read */ .LF},write:{writer:_effects_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .write */ .M9,overridePolicy(){return{allowNull:null!=this.excludedEffect,isRequired:null==this.excludedEffect}}}},n={read:{reader:_effects_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .read */ .LF},write:{writer:_effects_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .write */ .M9,overridePolicy(){return{allowNull:null!=this.includedEffect,isRequired:null==this.includedEffect}}}},a={name:"showExcludedLabels",default:!0};let p=f=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY{constructor(e){super(e),this.filter=null,this.includedEffect=null,this.excludedEffect=null,this.excludedLabelsVisible=!1}write(e,t){const l=super.write(e,t);if(t?.origin){if(l.filter){const e=Object.keys(l.filter);if(e.length>1||"where"!==e[0])return t.messages?.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("web-document-write:unsupported-feature-effect","Invalid feature effect 'filter'. A filter can only contain a 'where' property",{layer:t.layer,effect:this})),null}if("showExcludedLabels"in l)return t.messages?.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("web-document-write:unsupported-feature-effect","Invalid value for property 'excludedLabelsVisible' which should always be 'true'",{layer:t.layer,effect:this})),null}return l}clone(){return new f({filter:null!=this.filter?this.filter.clone():null,includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:_FeatureFilter_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,json:{write:{allowNull:!0,writer(e,r,t,i){const s=e?.write({},i);s&&0!==Object.keys(s).length?(0,_core_object_js__WEBPACK_IMPORTED_MODULE_3__/* .setDeepValue */ .sM)(t,s,r):(0,_core_object_js__WEBPACK_IMPORTED_MODULE_3__/* .setDeepValue */ .sM)(t,null,r)}}}})],p.prototype,"filter",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:!0,origins:{"web-map":d,"portal-item":d}}})],p.prototype,"includedEffect",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:!0,origins:{"web-map":n,"portal-item":n}}})],p.prototype,"excludedEffect",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Boolean,json:{write:!0,name:"showExcludedLabels",origins:{"web-map":a,"portal-item":a}}})],p.prototype,"excludedLabelsVisible",void 0),p=f=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.layers.support.FeatureEffect")],p);const w=p;


/***/ }),

/***/ 25758:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17639);
/* harmony import */ var _TimeExtent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19790);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59851);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21877);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19251);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73446);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63863);
/* harmony import */ var _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24587);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var p;const c=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_3__/* .JSONMap */ .J({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),u=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_3__/* .JSONMap */ .J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let m=p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_4__/* .JSONSupport */ .oY{constructor(e){super(e),this.where=null,this.geometry=null,this.spatialRelationship="intersects",this.distance=void 0,this.objectIds=null,this.units=null,this.timeExtent=null}createQuery(e={}){const{where:t,geometry:i,spatialRelationship:r,timeExtent:s,objectIds:n,units:l,distance:p}=this;return new _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A({geometry:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_5__/* .clone */ .o8)(i),objectIds:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_5__/* .clone */ .o8)(n),spatialRelationship:r,timeExtent:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_5__/* .clone */ .o8)(s),where:t,units:l,distance:p,...e})}clone(){const{where:e,geometry:t,spatialRelationship:i,timeExtent:r,objectIds:s,units:n,distance:l}=this;return new p({geometry:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_5__/* .clone */ .o8)(t),objectIds:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_5__/* .clone */ .o8)(s),spatialRelationship:i,timeExtent:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_5__/* .clone */ .o8)(r),where:e,units:n,distance:l})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:String,json:{write:!0}})],m.prototype,"where",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({types:_geometry_js__WEBPACK_IMPORTED_MODULE_1__/* .geometryTypes */ .yR,json:{write:!0}})],m.prototype,"geometry",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:c.apiValues,json:{name:"spatialRel",read:{reader:c.read},write:{allowNull:!1,writer:c.write,overridePolicy(){return{enabled:null!=this.geometry}}}}})],m.prototype,"spatialRelationship",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:Number,json:{write:{overridePolicy(e){return{enabled:null!=e&&null!=this.geometry}}}}})],m.prototype,"distance",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:[Number],json:{write:!0}})],m.prototype,"objectIds",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:u.apiValues,json:{read:u.read,write:{writer:u.write,overridePolicy(e){return{enabled:null!=e&&null!=this.geometry}}}}})],m.prototype,"units",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:_TimeExtent_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,json:{write:!0}})],m.prototype,"timeExtent",void 0),m=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.layers.support.FeatureFilter")],m);const d=m;


/***/ }),

/***/ 18475:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(){super(...arguments),this.type=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:["selection","cluster","binning"],readOnly:!0,json:{read:!1,write:!0}})],t.prototype,"type",void 0),t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.layers.support.FeatureReduction")],t);


/***/ }),

/***/ 99989:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/* harmony import */ var _FeatureReduction_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18475);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var t;let c=t=class extends _FeatureReduction_js__WEBPACK_IMPORTED_MODULE_6__/* .FeatureReduction */ .c{constructor(r){super(r),this.type="selection"}clone(){return new t}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:["selection"]})],c.prototype,"type",void 0),c=t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.layers.support.FeatureReductionSelection")],c);const p=c;


/***/ }),

/***/ 48330:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24793);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59851);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const l=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONMap */ .J({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let a=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* .ClonableMixin */ .O)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__/* .JSONSupport */ .oY)){constructor(o){super(o),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:!0}})],a.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:!0}})],a.prototype,"description",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{read:l.read,write:l.write}})],a.prototype,"drawingTool",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:!0}})],a.prototype,"prototype",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:!0}})],a.prototype,"thumbnail",void 0),a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.layers.support.FeatureTemplate")],a);const p=a;


/***/ }),

/***/ 25392:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24793);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75094);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(77542);
/* harmony import */ var _domains_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38938);
/* harmony import */ var _FeatureTemplate_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48330);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let c=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* .ClonableMixin */ .O)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY)){constructor(o){super(o),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(o){const r={};for(const s of Object.keys(o))r[s]=(0,_domains_js__WEBPACK_IMPORTED_MODULE_10__/* .fromJSON */ .rS)(o[s]);return r}writeDomains(o,r){const s={};for(const t of Object.keys(o))o[t]&&(s[t]=o[t]?.toJSON());r.domains=s}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{write:!0}})],c.prototype,"id",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{write:!0}})],c.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{write:!0}})],c.prototype,"domains",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__/* .reader */ .w)("domains")],c.prototype,"readDomains",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__/* .writer */ .K)("domains")],c.prototype,"writeDomains",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[_FeatureTemplate_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A],json:{write:!0}})],c.prototype,"templates",void 0),c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.layers.support.FeatureType")],c);const n=c;


/***/ }),

/***/ 86155:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ C)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols.js + 1 modules
var symbols = __webpack_require__(30822);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/screenUtils.js
var screenUtils = __webpack_require__(89882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/labelUtils.js
var labelUtils = __webpack_require__(74639);
;// ../node_modules/@arcgis/core/layers/support/LabelExpressionInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var l;let n=l=class extends JSONSupport/* JSONSupport */.oY{constructor(){super(...arguments),this.expression=null,this.title=null,this.value=null}readExpression(r,e){return e.value?(0,labelUtils/* convertTemplatedStringToArcade */.mX)(e.value):r}writeExpression(r,e,s){null!=this.value&&(r=(0,labelUtils/* convertTemplatedStringToArcade */.mX)(this.value)),null!=r&&(e[s]=r)}clone(){return new l({expression:this.expression,title:this.title,value:this.value})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{writerEnsuresNonNull:!0}}})],n.prototype,"expression",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("expression",["expression","value"])],n.prototype,"readExpression",null),(0,tslib_es6._)([(0,writer/* writer */.K)("expression")],n.prototype,"writeExpression",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0,origins:{"web-scene":{write:!1}}}})],n.prototype,"title",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1,write:!1}})],n.prototype,"value",void 0),n=l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.LabelExpressionInfo")],n);const a=n;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/layerUtils.js
var layerUtils = __webpack_require__(40454);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/defaults.js
var defaults = __webpack_require__(26207);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/jsonUtils.js + 1 modules
var jsonUtils = __webpack_require__(38463);
;// ../node_modules/@arcgis/core/layers/support/LabelClass.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var h;const P=new jsonMap/* JSONMap */.J({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0});function x(e,r,t){return{enabled:!(0,layerUtils/* isSceneServiceLayer */.TU)(t?.layer)}}function L(e){return!e||"service"!==e.origin&&!("map-image"===e.layer?.type)}function g(e){return"map-image"===e?.type}function E(e){return!!g(e)&&!!e.capabilities?.exportMap?.supportsArcadeExpressionForLabeling}function j(e){return L(e)||E(e?.layer)}let A=h=class extends JSONSupport/* JSONSupport */.oY{static evaluateWhere(e,r){const t=(e,r,t)=>{switch(r){case"=":return e==t;case"<>":return e!=t;case">":return e>t;case">=":return e>=t;case"<":return e<t;case"<=":return e<=t}return!1};try{if(null==e)return!0;const o=e.split(" ");if(3===o.length)return t(r[o[0]],o[1],o[2]);if(7===o.length){const e=t(r[o[0]],o[1],o[2]),i=o[3],n=t(r[o[4]],o[5],o[6]);switch(i){case"AND":return e&&n;case"OR":return e||n}}return!1}catch(o){console.log("Error.: can't parse = "+e)}}constructor(e){super(e),this.type="label",this.name=null,this.allowOverrun=!1,this.deconflictionStrategy="static",this.labelExpression=null,this.labelExpressionInfo=null,this.labelPlacement=null,this.labelPosition="curved",this.maxScale=0,this.minScale=0,this.repeatLabel=!0,this.repeatLabelDistance=null,this.symbol=defaults/* defaultTextSymbol2D */.Hk,this.useCodedValues=void 0,this.where=null}readLabelExpression(e,r){const t=r.labelExpressionInfo;if(!t||!t.value&&!t.expression)return e}writeLabelExpression(e,r,t){if(this.labelExpressionInfo)if(null!=this.labelExpressionInfo.value)e=(0,labelUtils/* templateStringToSql */.D3)(this.labelExpressionInfo.value);else if(null!=this.labelExpressionInfo.expression){const r=(0,labelUtils/* getSingleFieldArcadeExpression */.tH)(this.labelExpressionInfo.expression);r&&(e="["+r+"]")}null!=e&&(r[t]=e)}writeLabelExpressionInfo(e,r,t,o){if(null==e&&null!=this.labelExpression&&L(o))e=new a({expression:this.getLabelExpressionArcade()});else if(!e)return;const i=e.toJSON(o);i.expression&&(r[t]=i)}writeMaxScale(e,r){(e||this.minScale)&&(r.maxScale=e)}writeMinScale(e,r){(e||this.maxScale)&&(r.minScale=e)}getLabelExpression(){return (0,labelUtils/* getLabelExpression */.XJ)(this)}getLabelExpressionArcade(){return (0,labelUtils/* getLabelExpressionArcade */.BI)(this)}getLabelExpressionSingleField(){return (0,labelUtils/* getLabelExpressionSingleField */.rU)(this)}hash(){return JSON.stringify(this)}clone(){return new h({allowOverrun:this.allowOverrun,deconflictionStrategy:this.deconflictionStrategy,labelExpression:this.labelExpression,labelExpressionInfo:(0,lang/* clone */.o8)(this.labelExpressionInfo),labelPosition:this.labelPosition,labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,repeatLabel:this.repeatLabel,repeatLabelDistance:this.repeatLabelDistance,symbol:(0,lang/* clone */.o8)(this.symbol),where:this.where,useCodedValues:this.useCodedValues})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],A.prototype,"name",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1},"portal-item":{default:!1,write:{overridePolicy:x}}}}})],A.prototype,"allowOverrun",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0,default:"static",origins:{"web-scene":{write:!1},"portal-item":{default:"static",write:{overridePolicy:x}}}}})],A.prototype,"deconflictionStrategy",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{overridePolicy(e,r,t){return this.labelExpressionInfo&&"service"===t?.origin&&E(t.layer)?{enabled:!1}:{allowNull:!0}}}}})],A.prototype,"labelExpression",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("labelExpression")],A.prototype,"readLabelExpression",null),(0,tslib_es6._)([(0,writer/* writer */.K)("labelExpression")],A.prototype,"writeLabelExpression",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:a,json:{write:{overridePolicy:(e,r,t)=>j(t)?{allowNull:!0}:{enabled:!1}}}})],A.prototype,"labelExpressionInfo",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("labelExpressionInfo")],A.prototype,"writeLabelExpressionInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:P.apiValues,json:{type:P.jsonValues,read:P.read,write:P.write}})],A.prototype,"labelPlacement",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["curved","parallel"],json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],A.prototype,"labelPosition",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number})],A.prototype,"maxScale",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("maxScale")],A.prototype,"writeMaxScale",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number})],A.prototype,"minScale",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("minScale")],A.prototype,"writeMinScale",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:x}}}}})],A.prototype,"repeatLabel",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,cast:screenUtils/* toPt */.cr,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:x}}}}})],A.prototype,"repeatLabelDistance",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:symbols/* symbolTypesLabel */.em,json:{origins:{"web-scene":{types:symbols/* symbolTypesLabel3D */.Rv,write:jsonUtils/* writeLabelSymbol */.oO,default:null}},write:jsonUtils/* writeLabelSymbol */.oO,default:null}})],A.prototype,"symbol",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],A.prototype,"useCodedValues",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],A.prototype,"where",void 0),A=h=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.LabelClass")],A);const C=A;


/***/ }),

/***/ 8585:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48982);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var l;let i=l=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY{constructor(o){super(o),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A}clone(){return new l({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{write:!0}})],i.prototype,"floorField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{read:!1,write:!1}})],i.prototype,"viewAllMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{read:!1,write:!1}})],i.prototype,"viewAllLevelIds",void 0),i=l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.layers.support.LayerFloorInfo")],i);const p=i;


/***/ }),

/***/ 83849:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _TimeExtent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19790);
/* harmony import */ var _TimeInterval_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50019);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24793);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75094);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(77542);
/* harmony import */ var _time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(12129);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function p(e,t){return _TimeInterval_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.fromJSON({value:e,unit:t})}let u=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_3__/* .ClonableMixin */ .O)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_4__/* .JSONSupport */ .oY)){constructor(e){super(e),this.cumulative=!1,this.endField=null,this.fullTimeExtent=null,this.hasLiveData=!1,this.interval=null,this.startField=null,this.timeZone=null,this.trackIdField=null,this.useTime=!0}readFullTimeExtent(e,r){if(!r.timeExtent||!Array.isArray(r.timeExtent)||2!==r.timeExtent.length)return null;const l=new Date(r.timeExtent[0]),i=new Date(r.timeExtent[1]);return new _TimeExtent_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A({start:l,end:i})}writeFullTimeExtent(e,t){null!=e?.start&&null!=e.end?t.timeExtent=[e.start.getTime(),e.end.getTime()]:t.timeExtent=null}readInterval(e,t){return t.timeInterval&&t.timeIntervalUnits?p(t.timeInterval,t.timeIntervalUnits):t.defaultTimeInterval&&t.defaultTimeIntervalUnits?p(t.defaultTimeInterval,t.defaultTimeIntervalUnits):null}writeInterval(e,t){t.timeInterval=e?.toJSON().value??null,t.timeIntervalUnits=e?.toJSON().unit??null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:Boolean,json:{name:"exportOptions.timeDataCumulative",write:!0}})],u.prototype,"cumulative",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:String,json:{name:"endTimeField",write:{enabled:!0,allowNull:!0}}})],u.prototype,"endField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:_TimeExtent_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,json:{write:{enabled:!0,allowNull:!0}}})],u.prototype,"fullTimeExtent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__/* .reader */ .w)("fullTimeExtent",["timeExtent"])],u.prototype,"readFullTimeExtent",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__/* .writer */ .K)("fullTimeExtent")],u.prototype,"writeFullTimeExtent",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:Boolean,json:{write:!0}})],u.prototype,"hasLiveData",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:_TimeInterval_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,json:{write:{enabled:!0,allowNull:!0}}})],u.prototype,"interval",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__/* .reader */ .w)("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],u.prototype,"readInterval",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__/* .writer */ .K)("interval")],u.prototype,"writeInterval",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:String,json:{name:"startTimeField",write:{enabled:!0,allowNull:!0}}})],u.prototype,"startField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)((0,_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .timeZoneProperty */ .P6)("timeReference",!0))],u.prototype,"timeZone",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:String,json:{write:{enabled:!0,allowNull:!0}}})],u.prototype,"trackIdField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:Boolean,json:{name:"exportOptions.useTime",write:!0}})],u.prototype,"useTime",void 0),u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__/* .subclass */ .$)("esri.layers.support.TimeInfo")],u);const d=u;


/***/ }),

/***/ 84356:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ui: () => (/* binding */ j),
  Yj: () => (/* binding */ f),
  id: () => (/* binding */ I),
  kF: () => (/* binding */ m),
  fV: () => (/* binding */ c),
  C1: () => (/* binding */ C),
  hG: () => (/* binding */ S),
  hn: () => (/* binding */ T),
  ke: () => (/* binding */ g),
  Ih: () => (/* binding */ b),
  M6: () => (/* binding */ y),
  Qo: () => (/* binding */ w),
  Fm: () => (/* binding */ v),
  PY: () => (/* binding */ p),
  OZ: () => (/* binding */ d)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/TimeExtent.js
var TimeExtent = __webpack_require__(19790);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/layerContainerType.js
var layerContainerType = __webpack_require__(73324);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(84698);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/persistableUrlUtils.js
var persistableUrlUtils = __webpack_require__(63680);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/timeUtils.js
var timeUtils = __webpack_require__(46437);
;// ../node_modules/@arcgis/core/support/timeUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function i(t){return void 0!==t.timeInfo}async function r(n,r){if(0===n.length)return t.allTime;const l=n.filter(i);await Promise.all(l.map((t=>t.load({signal:r}))));const s=[],o=[];for(const t of l)"feature"!==t?.type&&"map-image"!==t?.type||!t.timeInfo?.hasLiveData?o.push(t):s.push(t);const m=t=>null==t||t.isAllTime,u=o.map((t=>t.timeInfo?.fullTimeExtent));if(u.some(m))return t.allTime;const a=s.map((async t=>{const{timeExtent:e}=await t.fetchRecomputedExtents({signal:r});return e||t.timeInfo?.fullTimeExtent})),f=(await Promise.allSettled(a)).map((t=>"fulfilled"===t.status?t.value:null));if(f.some(m))return t.allTime;return[...f,...u].filter(e).reduce(((t,e)=>t.union(e)))}function timeUtils_l(e){if(!e)return e;const{start:i,end:r}=e;return new TimeExtent/* default */.A({start:null!=i?(0,timeUtils/* offsetDate */.S1)(i,-i.getTimezoneOffset(),"minutes"):i,end:null!=r?(0,timeUtils/* offsetDate */.S1)(r,-r.getTimezoneOffset(),"minutes"):r})}function timeUtils_s(e){if(!e)return e;const{start:i,end:r}=e;return new TimeExtent/* default */.A({start:null!=i?(0,timeUtils/* offsetDate */.S1)(i,i.getTimezoneOffset(),"minutes"):i,end:null!=r?(0,timeUtils/* offsetDate */.S1)(r,r.getTimezoneOffset(),"minutes"):r})}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/ElevationInfo.js + 1 modules
var ElevationInfo = __webpack_require__(60973);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/webdoc/support/opacityUtils.js
var opacityUtils = __webpack_require__(48904);
;// ../node_modules/@arcgis/core/layers/support/commonProperties.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const p={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}},y={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,r)=>!r.disablePopup},write:{enabled:!0,writer(e,r,n){r[n]=!e}}}},m={type:Boolean,value:!0,nonNullable:!0,json:{name:"showLabels",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}},d={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:persistableUrlUtils.w}}},c={type:Boolean,value:!0,nonNullable:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}},f={value:null,type:ElevationInfo/* default */.A,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}};function w(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const u={write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K},read:!0},g={type:Number,json:{origins:{"web-document":u,"portal-item":{write:!0}}}},b={...g,json:{...g.json,origins:{"web-document":{...u,write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,r,n)=>n&&"service"!==n.origin||!r.drawingInfo||void 0===r.drawingInfo.transparency?r.layerDefinition?.drawingInfo&&void 0!==r.layerDefinition.drawingInfo.transparency?(0,opacityUtils/* transparencyToOpacity */.D)(r.layerDefinition.drawingInfo.transparency):void 0:(0,opacityUtils/* transparencyToOpacity */.D)(r.drawingInfo.transparency)}}},j={type:TimeExtent/* default */.A,readOnly:!0,get(){if(!this.layer?.timeInfo)return null;const{datesInUnknownTimezone:e,timeOffset:r,useViewTime:n}=this.layer,i=this.view?.timeExtent;let t=this.layer.timeExtent;e&&(t=timeUtils_s(t));let s=n?i&&t?i.intersection(t):i||t:t;if(!s||s.isEmpty||s.isAllTime)return s;r&&(s=s.offset(-r.value,r.unit)),e&&(s=timeUtils_l(s));const l=this._get("timeExtent");return s.equals(l)?l:s}},v={type:Extent/* default */.A,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(e,r)=>{const t=Extent/* default */.A.fromJSON(e);return null!=r.spatialReference&&"object"==typeof r.spatialReference&&(t.spatialReference=SpatialReference/* default */.A.fromJSON(r.spatialReference)),t}}}},read:!1}},I={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},T={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.minScale",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}},name:"layerDefinition.minScale",write:!0}},S={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.maxScale",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}},name:"layerDefinition.maxScale",write:!0}},C={json:{write:{ignoreOrigin:!0,layerContainerTypes:layerContainerType/* excludeTables */.K},origins:{"web-map":{read:!1,write:!1}}}};


/***/ }),

/***/ 97461:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Xl: () => (/* binding */ m),
  ct: () => (/* binding */ b),
  C$: () => (/* binding */ T),
  PD: () => (/* binding */ D),
  VZ: () => (/* binding */ x),
  mm: () => (/* binding */ j),
  VA: () => (/* binding */ Q),
  WP: () => (/* binding */ I),
  iX: () => (/* binding */ f),
  GA: () => (/* binding */ V),
  jp: () => (/* binding */ S),
  tG: () => (/* binding */ U),
  lV: () => (/* binding */ q),
  B5: () => (/* binding */ O),
  Ye: () => (/* binding */ A),
  sg: () => (/* binding */ F),
  hM: () => (/* binding */ P),
  S2: () => (/* binding */ E),
  jD: () => (/* binding */ R),
  Zm: () => (/* binding */ M),
  $4: () => (/* binding */ C),
  bt: () => (/* binding */ w),
  rn: () => (/* binding */ g)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/kernel.js
var kernel = __webpack_require__(28830);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols.js + 1 modules
var symbols = __webpack_require__(30822);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/asyncUtils.js
var asyncUtils = __webpack_require__(12690);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/sql.js
var sql = __webpack_require__(76859);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/reader.js
var reader = __webpack_require__(61985);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/Query.js + 1 modules
var Query = __webpack_require__(24587);
;// ../node_modules/@arcgis/core/layers/support/featureQueryAll.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function r(e,r,a){r=r.clone(),e.capabilities.query.supportsMaxRecordCountFactor&&(r.maxRecordCountFactor=u(e));const n=t(e),o=e.capabilities.query.supportsPagination;r.start=0,r.num=n;let i=null;for(;;){const t=await e.source.queryFeaturesJSON(r,a);if(null==i?i=t:i.features=i.features.concat(t.features),i.exceededTransferLimit=t.exceededTransferLimit,!o||!t.exceededTransferLimit)break;r.start+=n}return i}function t(e){return u(e)*a(e)}function a(e){return e.capabilities.query.maxRecordCount||2e3}function u(r){return r.capabilities.query.supportsMaxRecordCountFactor?Query/* default */.A.MAX_MAX_RECORD_COUNT_FACTOR:1}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/layerUtils.js
var layerUtils = __webpack_require__(40454);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/SimpleRenderer.js
var SimpleRenderer = __webpack_require__(47347);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/UniqueValueRenderer.js + 3 modules
var UniqueValueRenderer = __webpack_require__(2692);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/AttachmentQuery.js
var AttachmentQuery = __webpack_require__(27973);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/RelationshipQuery.js
var RelationshipQuery = __webpack_require__(97724);
;// ../node_modules/@arcgis/core/layers/support/featureLayerUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const f=new jsonMap/* JSONMap */.J({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"});async function m(t,e,r,o){const a=await G(t);if(await h(t,e,o),!a.addAttachment)throw new Error/* default */.A(o,"Layer source does not support addAttachment capability");return a.addAttachment(e,r)}function h(t,e,r){const{attributes:o}=e,{objectIdField:a}=t;return t.capabilities?.data?.supportsAttachment?e?o?a&&o[a]?Promise.resolve():Promise.reject(new Error/* default */.A(r,`feature is missing the identifying attribute ${a}`)):Promise.reject(new Error/* default */.A(r,"'attributes' are required on a feature to query attachments")):Promise.reject(new Error/* default */.A(r,"A feature is required to add/delete/update attachments")):Promise.reject(new Error/* default */.A(r,"this layer doesn't support attachments"))}async function w(t,e,r,o,a){const s=await G(t);if(await h(t,e,a),!s.updateAttachment)throw new Error/* default */.A(a,"Layer source does not support updateAttachment capability");return s.updateAttachment(e,r,o)}async function b(t,e,r){const{applyEdits:n}=await __webpack_require__.e(/* import() */ 5903).then(__webpack_require__.bind(__webpack_require__, 75903)),o=await t.load(),{source:a,globalIdField:s}=o;let i=r;return("feature"===o.type?o.infoFor3D:null)&&null!=e.deleteFeatures&&null!=s&&(i={...i,globalIdToObjectId:await V(t,e.deleteFeatures,s)}),n(o,a,e,r)}async function g(t,e,r){const{uploadAssets:n}=await __webpack_require__.e(/* import() */ 5903).then(__webpack_require__.bind(__webpack_require__, 75903)),o=await t.load();return n(o,o.source,e,r)}async function j(t,e,r,o){const a=await G(t);if(await h(t,e,o),!a.deleteAttachments)throw new Error/* default */.A(o,"Layer source does not support deleteAttachments capability");return a.deleteAttachments(e,r)}async function I(t,e,r){const o=(await t.load({signal:e?.signal})).source;if(!o.fetchRecomputedExtents)throw new Error/* default */.A(r,"Layer source does not support fetchUpdates capability");return o.fetchRecomputedExtents(e)}async function q(t,e,r,o){e=AttachmentQuery/* default */.A.from(e),await t.load();const a=t.source,s=t.capabilities;if(!s?.data?.supportsAttachment)throw new Error/* default */.A(o,"this layer doesn't support attachments");const{attachmentTypes:i,objectIds:u,globalIds:c,num:l,size:d,start:y,where:f}=e;if(!s?.operations?.supportsQueryAttachments){if(i?.length>0||c?.length>0||d?.length>0||l||y||f)throw new Error/* default */.A(o,"when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",e)}if(!(u?.length||c?.length||f))throw new Error/* default */.A(o,"'objectIds', 'globalIds', or 'where' are required to perform attachment query",e);if(!a.queryAttachments)throw new Error/* default */.A(o,"Layer source does not support queryAttachments capability",e);return a.queryAttachments(e)}async function F(t,e,r,o){const a=await G(t);if(!a.queryObjectIds)throw new Error/* default */.A(o,"Layer source does not support queryObjectIds capability");return a.queryObjectIds(Query/* default */.A.from(e)??t.createQuery(),r)}async function A(t,e,r,o){const a=await G(t);if(!a.queryFeatureCount)throw new Error/* default */.A(o,"Layer source does not support queryFeatureCount capability");return a.queryFeatureCount(Query/* default */.A.from(e)??t.createQuery(),r)}async function O(t,e,r,o){const a=await G(t);if(!a.queryExtent)throw new Error/* default */.A(o,"Layer source does not support queryExtent capability");return a.queryExtent(Query/* default */.A.from(e)??t.createQuery(),r)}async function P(t,e,r,o){const a=await G(t);if(!a.queryRelatedFeatures)throw new Error/* default */.A(o,"Layer source does not support queryRelatedFeatures capability");return a.queryRelatedFeatures(RelationshipQuery["default"].from(e),r)}async function E(t,e,r,o){const a=await G(t);if(!a.queryRelatedFeaturesCount)throw new Error/* default */.A(o,"Layer source does not support queryRelatedFeaturesCount capability");return a.queryRelatedFeaturesCount(RelationshipQuery["default"].from(e),r)}async function S(t){const e=t.source;if(e?.refresh)try{const{dataChanged:r,updates:n}=await e.refresh();if(null!=n&&(t.sourceJSON={...t.sourceJSON,...n},t.read(n,{origin:"service",url:t.parsedUrl})),r)return!0}catch{}if(t.definitionExpression)try{return(await (0,sql/* parseWhereClause */.G)(t.definitionExpression,t.fieldsIndex)).hasDateFunctions}catch{}return!1}function x(t){const e=new Query/* default */.A,r=t.capabilities?.data,n=t.capabilities?.query;e.historicMoment=t.historicMoment,e.gdbVersion=t.gdbVersion,e.returnGeometry=!0,n&&(e.compactGeometryEnabled=n.supportsCompactGeometry,e.defaultSpatialReferenceEnabled=n.supportsDefaultSpatialReference),r&&(r.supportsZ&&null!=t.returnZ&&(e.returnZ=t.returnZ),r.supportsM&&null!=t.returnM&&(e.returnM=t.returnM)),e.outFields=["*"];const{timeOffset:o,timeExtent:a}=t;return e.timeExtent=null!=o&&null!=a?a.offset(-o.value,o.unit):a||null,e.multipatchOption="multipatch"===t.geometryType?"xyFootprint":null,e}function R(t){const{globalIdField:e,fields:r}=t;if(e)return e;if(r)for(const n of r)if("esriFieldTypeGlobalID"===n.type)return n.name}function M(t){const{objectIdField:e,fields:r}=t;if(e)return e;if(r)for(const n of r)if("esriFieldTypeOID"===n.type)return n.name}function C(t){return t.currentVersion?t.currentVersion:t.hasOwnProperty("capabilities")||t.hasOwnProperty("drawingInfo")||t.hasOwnProperty("hasAttachments")||t.hasOwnProperty("htmlPopupType")||t.hasOwnProperty("relationships")||t.hasOwnProperty("timeInfo")||t.hasOwnProperty("typeIdField")||t.hasOwnProperty("types")?10:9.3}async function G(t){return(await t.load()).source}async function L(e,r){if(!kernel.id)return;if(kernel.id.findCredential(e))return;let n;try{const o=await (0,layerUtils/* getOwningPortalUrl */.wI)(e,r);o&&(n=await kernel.id.checkSignInStatus(`${o}/sharing`))}catch(o){}if(n)try{const n=null!=r?r.signal:null;await kernel.id.getCredential(e,{signal:n})}catch(o){}}async function Q(t,e,r){const n=t.parsedUrl?.path;n&&t.authenticationTriggerEvent===e&&await L(n,r)}function T(t){return!t.sourceJSON?.isMultiServicesView&&(t.userHasUpdateItemPrivileges||t.editingEnabled)}const v=(0,reader/* createTypeReader */.C)({types:symbols/* symbolTypesRenderer */.xK});function D(t,e){if(t.defaultSymbol)return t.types?.length?new UniqueValueRenderer/* default */.A({defaultSymbol:v(t.defaultSymbol,t,e),field:t.typeIdField,uniqueValueInfos:t.types.map((t=>({id:t.id,symbol:v(t.symbol,t,e)})))}):new SimpleRenderer/* default */.A({symbol:v(t.defaultSymbol,t,e)})}function U(t){let e=t.sourceJSON?.cacheMaxAge;if(!e)return!1;const r=t.editingInfo?.lastEditDate?.getTime();return null==r||(e*=1e3,Date.now()-r<e)}async function V(t,e,n){if(null==e)return null;const o=[],{objectIdField:a}=t;if(e.forEach((t=>{let e=null;if("attributes"in t){const{attributes:r}=t;e={globalId:r[n],objectId:null!=r[a]&&-1!==r[a]?r[a]:null}}else e={globalId:t.globalId,objectId:null!=t.objectId&&-1!==t.objectId?t.objectId:null};null!=e.globalId&&(null!=e.objectId&&-1!==e.objectId||o.push(e.globalId))})),0===o.length)return null;const s=t.createQuery();s.where=o.map((t=>`${n}='${t}'`)).join(" OR "),s.returnGeometry=!1,s.outFields=[a,n],s.cacheHint=!1;const u=await (0,asyncUtils/* resultOrAbort */.DZ)(r(t,s));if(!u.ok)return null;const c=new Map,l=u.value.features;for(const r of l){const t=r.attributes[n],e=r.attributes[a];null!=t&&null!=e&&-1!==e&&c.set(t,e)}return c}


/***/ }),

/***/ 77567:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(539);
/* harmony import */ var _Field_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24738);
/* harmony import */ var _FieldsIndex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79005);
/* harmony import */ var _fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42453);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function s(){return{fields:{type:[_Field_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A],value:null,set:function(i){if(i&&(0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("big-integer-warning-enabled")){const t=i.filter((e=>"big-integer"===e.type||"oid"===e.type&&(e.length||0)>=8));if(t.length){const i=t.map((e=>`'${e.name}'`)).join(", ");_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getLogger(this).warn("#fields",`Layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}') references big-integer field(s): ${i}, support for which is experimental. Only integers less than ${Number.MAX_SAFE_INTEGER} (Number.MAX_SAFE_INTEGER) are supported.`)}}this._set("fields",i)}},fieldsIndex:{readOnly:!0,get(){return _FieldsIndex_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.fromLayer(this)}},outFields:{type:[String],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields")},get:function(){const i=this._userOutFields;if(!i?.length)return null;if(i.includes("*"))return["*"];if(!this.fields)return i;for(const t of i){const r=this.fieldsIndex?.has(t);r||_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getLogger("esri.layers.support.fieldProperties").error("field-attributes-layer:invalid-field",`Invalid field ${t} found in outFields`,{layer:this,outFields:i})}return (0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .fixFields */ .DB)(this.fieldsIndex,i)}}}}


/***/ }),

/***/ 74639:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BI: () => (/* binding */ f),
/* harmony export */   D3: () => (/* binding */ u),
/* harmony export */   XJ: () => (/* binding */ x),
/* harmony export */   mX: () => (/* binding */ w),
/* harmony export */   rU: () => (/* binding */ g),
/* harmony export */   tH: () => (/* binding */ _)
/* harmony export */ });
/* unused harmony exports getSingleFieldTemplatedString, sqlToTemplateString */
/* harmony import */ var _core_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96274);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const n="__begin__",r="__end__",s=new RegExp(n,"ig"),t=new RegExp(r,"ig"),l=new RegExp("^"+n,"i"),o=new RegExp(r+"$","i"),i='"',a=i+" + ",c=" + "+i;function p(e){return e.replaceAll(new RegExp("\\[","g"),"{").replaceAll(new RegExp("\\]","g"),"}")}function u(e){return e.replaceAll(new RegExp("\\{","g"),"[").replaceAll(new RegExp("\\}","g"),"]")}function x(e){const n={expression:"",type:"none"};return e.labelExpressionInfo?e.labelExpressionInfo.value?(n.expression=e.labelExpressionInfo.value,n.type="conventional"):e.labelExpressionInfo.expression&&(n.expression=e.labelExpressionInfo.expression,n.type="arcade"):null!=e.labelExpression&&(n.expression=p(e.labelExpression),n.type="conventional"),n}function f(e){const n=x(e);if(!n)return null;switch(n.type){case"conventional":return w(n.expression);case"arcade":return n.expression}return null}function g(e){const n=x(e);if(!n)return null;switch(n.type){case"conventional":return $(n.expression);case"arcade":return _(n.expression)}return null}function w(p){let u;return p?(u=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_0__/* .replace */ .HC)(p,(e=>n+'$feature["'+e+'"]'+r)),u=l.test(u)?u.replace(l,""):i+u,u=o.test(u)?u.replace(o,""):u+i,u=u.replaceAll(s,a).replaceAll(t,c)):u='""',u}const E=/^\s*\{([^}]+)\}\s*$/i;function $(e){const n=e?.match(E);return n?.[1].trim()||null}const b=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,m=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,R=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;function _(e){if(!e)return null;let n=b.exec(e)||m.exec(e);return n?n[1]||n[3]:(n=R.exec(e),n?n[2]:null)}


/***/ }),

/***/ 79682:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ i),
/* harmony export */   z: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19251);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(539);
/* harmony import */ var _LabelClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86155);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const n=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.getLogger("esri.layers.support.labelingInfo"),l=/\[([^\[\]]+)\]/gi;function i(e,r,o){return e?e.map((e=>{const n=new _LabelClass_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A;if(n.read(e,o),n.labelExpression){const e=r.fields||r.layerDefinition?.fields||this.fields;n.labelExpression=n.labelExpression.replaceAll(l,((r,o)=>`[${s(o,e)}]`))}return n})):null}function s(e,r){if(!r)return e;const o=e.toLowerCase();for(let t=0;t<r.length;t++){const e=r[t].name;if(e.toLowerCase()===o)return e}return e}const a={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null};function c(e,o){const t=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(e);return t.some((e=>f(e,o)))?[]:t}function f(r,o){const t=r.labelPlacement,l=a[o];if(!r.symbol)return n.warn("No ILabelClass symbol specified."),!0;if(!l)return n.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("labeling:unsupported-geometry-type",`Unable to create labels for layer, geometry type '${o}' is not supported`)),!0;if(!l.includes(t)){const e=l[0];t&&n.warn(`Found invalid label placement type ${t} for ${o}. Defaulting to ${e}`),r.labelPlacement=e}return!1}


/***/ }),

/***/ 90351:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ a)
});

// UNUSED EXPORTS: getVideoLayerCapabilities

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js
var arcgisLayerUrl = __webpack_require__(16123);
;// ../node_modules/@arcgis/core/rest/support/jsonUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function jsonUtils_n(n,r,u){return!!t(n,r,u)}function r(n,r,u){return t(n,r,u)}function t(n,r,t){return n&&n.hasOwnProperty(r)?n[r]:t}

;// ../node_modules/@arcgis/core/layers/support/serviceCapabilitiesUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const p={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function o(t){const s=t?.supportedSpatialAggregationStatistics?.map((t=>t.toLowerCase()));return{envelope:!!s?.includes("envelopeaggregate"),centroid:!!s?.includes("centroidaggregate"),convexHull:!!s?.includes("convexhullaggregate")}}function u(t,s){const e=t?.supportedOperationsWithCacheHint?.map((t=>t.toLowerCase()));return!!e?.includes(s.toLowerCase())}function a(t,s){return{analytics:n(t),attachment:i(t),data:c(t),metadata:d(t),operations:l(t.capabilities,t,s),query:y(t,s),queryRelated:m(t),queryTopFeatures:C(t),editing:h(t)}}function n(t){return{supportsCacheHint:u(t.advancedQueryCapabilities,"queryAnalytics")}}function i(t){const s=t.attachmentProperties,r={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:u(t.advancedQueryCapabilities,"queryAttachments"),supportsResize:jsonUtils_n(t,"supportsAttachmentsResizing",!1)};return s&&Array.isArray(s)&&s.forEach((t=>{const s=p[t.name];s&&(r[s]=!!t.isEnabled)})),r}function c(t){return{isVersioned:jsonUtils_n(t,"isDataVersioned",!1),supportsAttachment:jsonUtils_n(t,"hasAttachments",!1),supportsM:jsonUtils_n(t,"hasM",!1),supportsZ:jsonUtils_n(t,"hasZ",!1)}}function d(t){return{supportsAdvancedFieldProperties:jsonUtils_n(t,"supportsFieldDescriptionProperty",!1)}}function l(s,r,p){const o=s?s.toLowerCase().split(",").map((t=>t.trim())):[],u=p?(0,arcgisLayerUrl/* parse */.qg)(p):null,a=o.includes(null!=u&&"MapServer"===u.serverType?"data":"query"),n=o.includes("editing")&&!r.datesInUnknownTimezone;let i=n&&o.includes("create"),c=n&&o.includes("delete"),d=n&&o.includes("update");const l=o.includes("changetracking"),y=r.advancedQueryCapabilities;return n&&!(i||c||d)&&(i=c=d=!0),{supportsCalculate:jsonUtils_n(r,"supportsCalculate",!1),supportsTruncate:jsonUtils_n(r,"supportsTruncate",!1),supportsValidateSql:jsonUtils_n(r,"supportsValidateSql",!1),supportsAdd:i,supportsDelete:c,supportsEditing:n,supportsChangeTracking:l,supportsQuery:a,supportsQueryAnalytics:jsonUtils_n(y,"supportsQueryAnalytic",!1),supportsQueryAttachments:jsonUtils_n(y,"supportsQueryAttachments",!1),supportsQueryTopFeatures:jsonUtils_n(y,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:jsonUtils_n(r,"supportsAttachmentsResizing",!1),supportsSync:o.includes("sync"),supportsUpdate:d,supportsExceedsLimitStatistics:jsonUtils_n(r,"supportsExceedsLimitStatistics",!1),supportsAsyncConvert3D:jsonUtils_n(r,"supportsAsyncConvert3D",!1)}}function y(t,p){const a=t.advancedQueryCapabilities,n=t.ownershipBasedAccessControlForFeatures,i=t.archivingInfo,c=t.currentVersion,d=p?.includes("MapServer"),l=!d||c>=(0,has/* default */.A)("mapserver-pbf-version-support"),y=(0,arcgisLayerUrl/* isHostedAgolService */.Wo)(p),m=new Set((t.supportedQueryFormats??"").split(",").map((t=>t.toLowerCase().trim())));return{supportsStatistics:jsonUtils_n(a,"supportsStatistics",t.supportsStatistics),supportsPercentileStatistics:jsonUtils_n(a,"supportsPercentileStatistics",!1),supportsSpatialAggregationStatistics:jsonUtils_n(a,"supportsSpatialAggregationStatistics",!1),supportedSpatialAggregationStatistics:o(a),supportsCentroid:jsonUtils_n(a,"supportsReturningGeometryCentroid",!1),supportsDistance:jsonUtils_n(a,"supportsQueryWithDistance",!1),supportsDistinct:jsonUtils_n(a,"supportsDistinct",t.supportsAdvancedQueries),supportsExtent:jsonUtils_n(a,"supportsReturningQueryExtent",!1),supportsGeometryProperties:jsonUtils_n(a,"supportsReturningGeometryProperties",!1),supportsHavingClause:jsonUtils_n(a,"supportsHavingClause",!1),supportsOrderBy:jsonUtils_n(a,"supportsOrderBy",t.supportsAdvancedQueries),supportsPagination:jsonUtils_n(a,"supportsPagination",!1),supportsQuantization:jsonUtils_n(t,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:jsonUtils_n(t,"supportsQuantizationEditMode",!1),supportsQueryGeometry:jsonUtils_n(t,"supportsReturningQueryGeometry",!1),supportsResultType:jsonUtils_n(a,"supportsQueryWithResultType",!1),supportsMaxRecordCountFactor:jsonUtils_n(a,"supportsMaxRecordCountFactor",!1),supportsSqlExpression:jsonUtils_n(a,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:jsonUtils_n(t,"useStandardizedQueries",!1),supportsTopFeaturesQuery:jsonUtils_n(a,"supportsTopFeaturesQuery",!1),supportsQueryByAnonymous:jsonUtils_n(n,"allowAnonymousToQuery",!0),supportsQueryByOthers:jsonUtils_n(n,"allowOthersToQuery",!0),supportsHistoricMoment:jsonUtils_n(i,"supportsQueryWithHistoricMoment",!1),supportsFormatPBF:l&&m.has("pbf"),supportsDisjointSpatialRelationship:jsonUtils_n(a,"supportsDisjointSpatialRel",!1),supportsCacheHint:jsonUtils_n(a,"supportsQueryWithCacheHint",!1)||u(a,"query"),supportsDefaultSpatialReference:jsonUtils_n(a,"supportsDefaultSR",!1),supportsCompactGeometry:y,supportsFullTextSearch:jsonUtils_n(a,"supportsFullTextSearch",!1),maxRecordCountFactor:r(t,"maxRecordCountFactor",void 0),maxRecordCount:r(t,"maxRecordCount",void 0),standardMaxRecordCount:r(t,"standardMaxRecordCount",void 0),tileMaxRecordCount:r(t,"tileMaxRecordCount",void 0)}}function m(t){const s=t.advancedQueryCapabilities,r=jsonUtils_n(s,"supportsAdvancedQueryRelated",!1);return{supportsPagination:jsonUtils_n(s,"supportsQueryRelatedPagination",!1),supportsCount:r,supportsOrderBy:r,supportsCacheHint:u(s,"queryRelated")}}function C(t){return{supportsCacheHint:u(t.advancedQueryCapabilities,"queryTopFilter")}}function h(t){const s=t.ownershipBasedAccessControlForFeatures,p=t?t.advancedEditingCapabilities:void 0;return{supportsGeometryUpdate:jsonUtils_n(t,"allowGeometryUpdates",!0),supportsGlobalId:jsonUtils_n(t,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:jsonUtils_n(t,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:jsonUtils_n(t,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:jsonUtils_n(t,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:jsonUtils_n(t,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:jsonUtils_n(s,"allowAnonymousToDelete",!0),supportsDeleteByOthers:jsonUtils_n(s,"allowOthersToDelete",!0),supportsUpdateByAnonymous:jsonUtils_n(s,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:jsonUtils_n(s,"allowOthersToUpdate",!0),supportsAsyncApplyEdits:jsonUtils_n(p,"supportsAsyncApplyEdits",!1),zDefault:r(t,"zDefault",void 0)}}function g(t){return{operations:{supportsExportClip:e(t,"supportsExportClip",!1),supportsMensuration:e(t,"supportsMensuration",!1)},query:{supportsCoverageQuery:e(t,"supportsCoverageQuery",!1)}}}


/***/ }),

/***/ 44360:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  L: () => (/* binding */ K)
});

// UNUSED EXPORTS: JoinTableDataSource

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(4130);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(28902);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/reader.js
var serializableProperty_reader = __webpack_require__(61985);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/Field.js
var Field = __webpack_require__(24738);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/source/MapLayerSource.js
var MapLayerSource = __webpack_require__(30750);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry.js
var geometry = __webpack_require__(17639);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/typeUtils.js
var typeUtils = __webpack_require__(12433);
;// ../node_modules/@arcgis/core/layers/support/source/QueryTableDataSource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var c;let a=c=class extends JSONSupport/* JSONSupport */.oY{constructor(e){super(e),this.type="query-table"}clone(){const{workspaceId:e,query:r,oidFields:o,spatialReference:t,geometryType:p}=this,s={workspaceId:e,query:r,oidFields:o,spatialReference:t?.clone()??void 0,geometryType:p};return new c(s)}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({queryTable:"query-table"})],a.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],a.prototype,"workspaceId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],a.prototype,"query",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],a.prototype,"oidFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SpatialReference/* default */.A,json:{write:!0}})],a.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)(typeUtils/* featureGeometryTypeKebabDictionary */.g)],a.prototype,"geometryType",void 0),a=c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.source.QueryTableDataSource")],a);

;// ../node_modules/@arcgis/core/layers/support/source/RasterDataSource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var p;let RasterDataSource_a=p=class extends JSONSupport/* JSONSupport */.oY{constructor(r){super(r),this.type="raster"}clone(){const{workspaceId:r,dataSourceName:o}=this;return new p({workspaceId:r,dataSourceName:o})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({raster:"raster"})],RasterDataSource_a.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],RasterDataSource_a.prototype,"dataSourceName",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],RasterDataSource_a.prototype,"workspaceId",void 0),RasterDataSource_a=p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.source.RasterDataSource")],RasterDataSource_a);

;// ../node_modules/@arcgis/core/layers/support/source/TableDataSource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var TableDataSource_p;let TableDataSource_a=TableDataSource_p=class extends JSONSupport/* JSONSupport */.oY{constructor(r){super(r),this.type="table"}clone(){const{workspaceId:r,gdbVersion:o,dataSourceName:e}=this;return new TableDataSource_p({workspaceId:r,gdbVersion:o,dataSourceName:e})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({table:"table"})],TableDataSource_a.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],TableDataSource_a.prototype,"workspaceId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],TableDataSource_a.prototype,"gdbVersion",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],TableDataSource_a.prototype,"dataSourceName",void 0),TableDataSource_a=TableDataSource_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.source.TableDataSource")],TableDataSource_a);

;// ../node_modules/@arcgis/core/layers/support/source/DataLayerSource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var d,m;const T=(0,jsonMap/* strict */.O)()({esriLeftInnerJoin:"left-inner-join",esriLeftOuterJoin:"left-outer-join"});let j=d=class extends JSONSupport/* JSONSupport */.oY{constructor(e){super(e),this.type="join-table"}readLeftTableSource(e,r,o){return g()(e,r,o)}castLeftTableSource(e){return (0,ensureType/* ensureOneOfType */.aq)(L(),e)}readRightTableSource(e,r,o){return g()(e,r,o)}castRightTableSource(e){return (0,ensureType/* ensureOneOfType */.aq)(L(),e)}clone(){const{leftTableKey:e,rightTableKey:r,leftTableSource:o,rightTableSource:t,joinType:a}=this,s={leftTableKey:e,rightTableKey:r,leftTableSource:o?.clone()??void 0,rightTableSource:t?.clone()??void 0,joinType:a};return new d(s)}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({joinTable:"join-table"})],j.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],j.prototype,"leftTableKey",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],j.prototype,"rightTableKey",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],j.prototype,"leftTableSource",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("leftTableSource")],j.prototype,"readLeftTableSource",null),(0,tslib_es6._)([(0,cast/* cast */.w)("leftTableSource")],j.prototype,"castLeftTableSource",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],j.prototype,"rightTableSource",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("rightTableSource")],j.prototype,"readRightTableSource",null),(0,tslib_es6._)([(0,cast/* cast */.w)("rightTableSource")],j.prototype,"castRightTableSource",null),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)(T)],j.prototype,"joinType",void 0),j=d=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.source.JoinTableDataSource")],j);let h=null;function g(){return h||(h=(0,serializableProperty_reader/* createTypeReader */.C)({types:L()})),h}let v=null;function L(){return v||(v={key:"type",base:null,typeMap:{"data-layer":K,"map-layer":MapLayerSource/* MapLayerSource */.f}}),v}const w={key:"type",base:null,typeMap:{"join-table":j,"query-table":a,raster:RasterDataSource_a,table:TableDataSource_a}};let K=m=class extends JSONSupport/* JSONSupport */.oY{constructor(e){super(e),this.type="data-layer"}clone(){const{fields:e,dataSource:r}=this;return new m({fields:e,dataSource:r})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({dataLayer:"data-layer"})],K.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Field/* default */.A],json:{write:!0}})],K.prototype,"fields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:w,json:{write:!0}})],K.prototype,"dataSource",void 0),K=m=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.source.DataLayerSource")],K),K.from=(0,ensureType/* ensureType */.dp)(K);


/***/ }),

/***/ 30750:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var a;let c=a=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(r){super(r),this.type="map-layer"}clone(){const{mapLayerId:r,gdbVersion:o}=this;return new a({mapLayerId:r,gdbVersion:o})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__/* .enumeration */ .e)({mapLayer:"map-layer"})],c.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__/* .Integer */ .jz,json:{write:!0}})],c.prototype,"mapLayerId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],c.prototype,"gdbVersion",void 0),c=a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.layers.support.source.MapLayerSource")],c);


/***/ }),

/***/ 93797:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16123);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const t=[];function e(e,r){if((0,_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_0__/* .isHostedAgolService */ .Wo)(e.url??""))return!0;const{wkid:o}=r;for(const d of t){if((e.version??0)>=d[0])return!0;if("function"==typeof d[1]&&(d[1]=d[1]()),d[1].has(o))return!1}return!0}t.push([10.91,()=>{const d=new Set([9709,9716,9741,9761,9766]);for(let t=9712;t<=9713;t++)d.add(t);for(let t=9748;t<=9749;t++)d.add(t);for(let t=20904;t<=20932;t++)d.add(t);for(let t=21004;t<=21032;t++)d.add(t);for(let t=21207;t<=21264;t++)d.add(t);for(let t=21307;t<=21364;t++)d.add(t);for(let t=23301;t<=23333;t++)d.add(t);for(let t=102759;t<=102760;t++)d.add(t);for(let t=102934;t<=102955;t++)d.add(t);return d}]),t.push([10.9,()=>{const d=new Set([9300,9354,9364,9367,9373,9377,9387,9456,9473,9498,9678,9680,29874,103599,103872,104028]);for(let t=9356;t<=9360;t++)d.add(t);for(let t=9404;t<=9407;t++)d.add(t);for(let t=9476;t<=9482;t++)d.add(t);for(let t=9487;t<=9494;t++)d.add(t);for(let t=9697;t<=9699;t++)d.add(t);return d}]),t.push([10.81,()=>{const d=new Set([9265,9333,103598,103699]);for(let t=9248;t<=9254;t++)d.add(t);for(let t=9271;t<=9273;t++)d.add(t);for(let t=9284;t<=9285;t++)d.add(t);for(let t=21453;t<=21463;t++)d.add(t);return d}]),t.push([10.8,()=>{const d=new Set([8088,8395,8428,8433,8531,8687,8692,8694,8699,8900,9003,9006,9009,9012,9017,9191]);for(let t=8035;t<=8036;t++)d.add(t);for(let t=8455;t<=8456;t++)d.add(t);for(let t=8518;t<=8529;t++)d.add(t);for(let t=8533;t<=8536;t++)d.add(t);for(let t=8538;t<=8540;t++)d.add(t);for(let t=8677;t<=8679;t++)d.add(t);for(let t=8902;t<=8903;t++)d.add(t);for(let t=8907;t<=8910;t++)d.add(t);for(let t=8949;t<=8951;t++)d.add(t);for(let t=8972;t<=8987;t++)d.add(t);for(let t=9039;t<=9040;t++)d.add(t);for(let t=9068;t<=9069;t++)d.add(t);for(let t=9140;t<=9141;t++)d.add(t);for(let t=9148;t<=9150;t++)d.add(t);for(let t=9153;t<=9159;t++)d.add(t);for(let t=9205;t<=9218;t++)d.add(t);for(let t=9221;t<=9222;t++)d.add(t);for(let t=54098;t<=54101;t++)d.add(t);return d}]),t.push([10.71,()=>{const d=new Set([6316]);for(let t=8351;t<=8353;t++)d.add(t);for(let t=9294;t<=9297;t++)d.add(t);for(let t=22619;t<=22621;t++)d.add(t);for(let t=103586;t<=103594;t++)d.add(t);return d}]),t.push([10.7,()=>{const d=new Set([8387,8391,8427,8545,8682,8685,8818,31370,104022,104024,104975]);for(let t=8065;t<=8068;t++)d.add(t);for(let t=8082;t<=8083;t++)d.add(t);for(let t=8379;t<=8385;t++)d.add(t);for(let t=8836;t<=8840;t++)d.add(t);for(let t=8857;t<=8860;t++)d.add(t);for(let t=53035;t<=53037;t++)d.add(t);for(let t=54090;t<=54091;t++)d.add(t);for(let t=102498;t<=102499;t++)d.add(t);return d}]),t.push([10.61,()=>new Set([102497])]),t.push([10.6,()=>{const d=new Set([7803,7805,7887,8086,8232,8237,8240,8246,8249,8252,8255,9019,9391]);for(let t=7755;t<=7787;t++)d.add(t);for(let t=7791;t<=7795;t++)d.add(t);for(let t=7799;t<=7801;t++)d.add(t);for(let t=7825;t<=7831;t++)d.add(t);for(let t=7877;t<=7878;t++)d.add(t);for(let t=7882;t<=7883;t++)d.add(t);for(let t=7991;t<=7992;t++)d.add(t);for(let t=8042;t<=8043;t++)d.add(t);for(let t=8058;t<=8059;t++)d.add(t);for(let t=8311;t<=8348;t++)d.add(t);for(let t=9060;t<=9067;t++)d.add(t);for(let t=102562;t<=102568;t++)d.add(t);for(let t=102799;t<=102900;t++)d.add(t);return d}]);


/***/ }),

/***/ 39532:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ce: () => (/* binding */ f),
/* harmony export */   It: () => (/* binding */ p),
/* harmony export */   LG: () => (/* binding */ i),
/* harmony export */   OM: () => (/* binding */ a),
/* harmony export */   Y: () => (/* binding */ s),
/* harmony export */   bK: () => (/* binding */ c),
/* harmony export */   sQ: () => (/* binding */ l)
/* harmony export */ });
/* unused harmony export toggleTypeKeword */
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13484);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78983);
/* harmony import */ var _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96082);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function o(o){const i=o.spatialReference;if(i.isWGS84)return o.clone();if(i.isWebMercator)return (0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .webMercatorToGeographic */ .ci)(o);const s=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.WGS84;return await (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_0__.initializeProjection)(i,s),(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_0__.project)(o,s)}function i(e,t){if(!s(e,t)){const r=e.typeKeywords;r?r.push(t):e.typeKeywords=[t]}}function s(e,t){return!!e.typeKeywords?.includes(t)}function c(e){return s(e,f.HOSTED_SERVICE)}function a(e,t){const r=e.typeKeywords;if(r){const e=r.indexOf(t);e>-1&&r.splice(e,1)}}function u(e,t,r){r?i(e,t):a(e,t)}async function l(e){const t=e.clone().normalize();let r;if(t.length>1)for(const n of t)r?n.width>r.width&&(r=n):r=n;else r=t[0];return o(r)}const f={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table",HOSTED_SERVICE:"Hosted Service",LOCAL_SCENE:"ViewingMode-Local",TILED_IMAGERY:"Tiled Imagery",GROUP_LAYER_MAP:"Map"};function p(e){const{portal:t,isOrgItem:r,itemControl:n}=e,o=t.user?.privileges;let i=!o||o.includes("features:user:edit"),s=!!r&&!!o?.includes("features:user:fullEdit");const c="update"===n||"admin"===n;return c?s=i=!0:s&&(i=!0),{features:{edit:i,fullEdit:s},content:{updateItem:c}}}


/***/ }),

/***/ 55134:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59851);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const e=(0,_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__/* .strict */ .O)()({esriTimeUnitsMilliseconds:"milliseconds",esriTimeUnitsSeconds:"seconds",esriTimeUnitsMinutes:"minutes",esriTimeUnitsHours:"hours",esriTimeUnitsDays:"days",esriTimeUnitsWeeks:"weeks",esriTimeUnitsMonths:"months",esriTimeUnitsYears:"years",esriTimeUnitsDecades:"decades",esriTimeUnitsCenturies:"centuries",esriTimeUnitsUnknown:void 0});


/***/ }),

/***/ 17671:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ w)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30822);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59851);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19251);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(539);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4130);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75094);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(77542);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(73446);
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(42453);
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(76589);
/* harmony import */ var _mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(63501);
/* harmony import */ var _support_ClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(87729);
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(16758);
/* harmony import */ var _support_LegendOptions_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(38785);
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(28965);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var B;const V="log",F="percent-of-total",S="field",E=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONMap */ .J({esriNormalizeByLog:V,esriNormalizeByPercentOfTotal:F,esriNormalizeByField:S}),j=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_11__/* .ensureType */ .dp)(_support_ClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A);let z=B=class extends((0,_mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_14__/* .VisualVariablesMixin */ .h)(_Renderer_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)){constructor(e){super(e),this._compiledValueExpression={valueExpression:null,compiledFunction:null},this.backgroundFillSymbol=null,this.classBreakInfos=null,this.defaultLabel=null,this.defaultSymbol=null,this.field=null,this.isMaxInclusive=!0,this.legendOptions=null,this.normalizationField=null,this.normalizationTotal=null,this.type="class-breaks",this.valueExpression=null,this.valueExpressionTitle=null,this._set("classBreakInfos",[])}readClassBreakInfos(e,s,t){if(!Array.isArray(e))return;let o=s.minValue;return e.map((e=>{const s=new _support_ClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A;return s.read(e,t),null==s.minValue&&(s.minValue=o),null==s.maxValue&&(s.maxValue=s.minValue),o=s.maxValue,s}))}writeClassBreakInfos(e,s,t,o){const i=e.map((e=>e.write({},o)));this._areClassBreaksConsecutive()&&i.forEach((e=>delete e.classMinValue)),s[t]=i}castField(e){return null==e?e:"function"==typeof e?(_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.getLogger(this).error(".field: field must be a string value"),null):(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_11__/* .ensureString */ .GX)(e)}get minValue(){return this.classBreakInfos&&this.classBreakInfos[0]&&this.classBreakInfos[0].minValue||0}get normalizationType(){let e=this._get("normalizationType");const s=!!this.normalizationField,t=null!=this.normalizationTotal;return s||t?(e=s&&S||t&&F||null,s&&t&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.getLogger(this).warn("warning: both normalizationField and normalizationTotal are set!")):e!==S&&e!==F||(e=null),e}set normalizationType(e){this._set("normalizationType",e)}addClassBreakInfo(e,t,i){let r=null;r="number"==typeof e?new _support_ClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A({minValue:e,maxValue:t,symbol:(0,_symbols_js__WEBPACK_IMPORTED_MODULE_1__/* .ensureType */ .dp)(i)}):j((0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__/* .clone */ .o8)(e)),this.classBreakInfos.push(r),1===this.classBreakInfos.length&&this.notifyChange("minValue")}removeClassBreakInfo(e,s){const t=this.classBreakInfos.length;for(let o=0;o<t;o++){const t=[this.classBreakInfos[o].minValue,this.classBreakInfos[o].maxValue];if(t[0]===e&&t[1]===s){this.classBreakInfos.splice(o,1);break}}}getBreakIndex(e,s){return this.valueExpression&&null==s?.arcade&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.getLogger(this).warn(""),this.valueExpression?this._getBreakIndexForExpression(e,s):this._getBreakIndexForField(e)}async getClassBreakInfo(e,s){let t=s;this.valueExpression&&null==s?.arcade&&(t={...t,arcade:await (0,_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_18__/* .loadArcade */ .lw)()});const o=this.getBreakIndex(e,t);return-1!==o?this.classBreakInfos[o]:null}getSymbol(e,s){if(this.valueExpression&&null==s?.arcade)return void _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.getLogger(this).error("#getSymbol()","Please use getSymbolAsync if valueExpression is used");const t=this.getBreakIndex(e,s);return t>-1?this.classBreakInfos[t].symbol:this.defaultSymbol}async getSymbolAsync(e,s){let t=s;if(this.valueExpression&&null==s?.arcade){const e=await (0,_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_18__/* .loadArcade */ .lw)(),{arcadeUtils:s}=e;s.hasGeometryOperations(this.valueExpression)&&await s.enableGeometryOperations(),t={...t,arcade:e}}const o=this.getBreakIndex(e,t);return o>-1?this.classBreakInfos[o].symbol:this.defaultSymbol}getSymbols(){const e=[];return this.classBreakInfos.forEach((s=>{s.symbol&&e.push(s.symbol)})),this.defaultSymbol&&e.push(this.defaultSymbol),e}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,s)=>e+s.getAttributeHash()),"")}getMeshHash(){const e=JSON.stringify(this.backgroundFillSymbol),s=JSON.stringify(this.defaultSymbol),t=`${this.normalizationField}.${this.normalizationType}.${this.normalizationTotal}`;return`${e}.${s}.${this.classBreakInfos.reduce(((e,s)=>e+s.getMeshHash()),"")}.${t}.${this.field}.${this.valueExpression}`}get arcadeRequired(){return this.arcadeRequiredForVisualVariables||!!this.valueExpression}clone(){return new B({field:this.field,backgroundFillSymbol:this.backgroundFillSymbol?.clone(),defaultLabel:this.defaultLabel,defaultSymbol:this.defaultSymbol?.clone(),valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,classBreakInfos:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__/* .clone */ .o8)(this.classBreakInfos),isMaxInclusive:this.isMaxInclusive,normalizationField:this.normalizationField,normalizationTotal:this.normalizationTotal,normalizationType:this.normalizationType,visualVariables:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__/* .clone */ .o8)(this.visualVariables),legendOptions:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__/* .clone */ .o8)(this.legendOptions),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}async collectRequiredFields(e,s){const t=[this.collectVVRequiredFields(e,s),this.collectSymbolFields(e,s)];await Promise.all(t)}async collectSymbolFields(e,s){const t=[...this.getSymbols().map((t=>t.collectRequiredFields(e,s))),(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .collectArcadeFieldNames */ .Dx)(e,s,this.valueExpression)];(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .collectField */ .rq)(e,s,this.field),(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .collectField */ .rq)(e,s,this.normalizationField),await Promise.all(t)}_getBreakIndexForExpression(e,s){const{viewingMode:t,scale:o,spatialReference:i,arcade:r,timeZone:a}=s??{},{valueExpression:l}=this;let n=this._compiledValueExpression.valueExpression===l?this._compiledValueExpression.compiledFunction:null;const u=r.arcadeUtils;if(!n){const e=u.createSyntaxTree(l);n=u.createFunction(e),this._compiledValueExpression.compiledFunction=n}this._compiledValueExpression.valueExpression=l;const c=u.executeFunction(n,u.createExecContext(e,u.getViewInfo({viewingMode:t,scale:o,spatialReference:i}),a));return this._getBreakIndexfromInfos(c)}_getBreakIndexForField(e){const s=this.field,t=e.attributes,o=this.normalizationType;let i=parseFloat(t[s]);if(o){const e=this.normalizationTotal,s=parseFloat(this.normalizationField?t[this.normalizationField]:void 0);if(o===V)i=Math.log(i)*Math.LOG10E;else if(o!==F||null==e||isNaN(e)){if(o===S&&!isNaN(s)){if(isNaN(i)||isNaN(s))return-1;i/=s}}else i=i/e*100}return this._getBreakIndexfromInfos(i)}_getBreakIndexfromInfos(e){const s=this.isMaxInclusive;if(null!=e&&"number"==typeof e&&!isNaN(e))for(let t=0;t<this.classBreakInfos.length;t++){const o=[this.classBreakInfos[t].minValue,this.classBreakInfos[t].maxValue];if(o[0]<=e&&(s?e<=o[1]:e<o[1]))return t}return-1}_areClassBreaksConsecutive(){const e=this.classBreakInfos,s=e.length;for(let t=1;t<s;t++)if(e[t-1].maxValue!==e[t].minValue)return!1;return!0}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_16__/* .rendererBackgroundFillSymbolProperty */ .As)],z.prototype,"backgroundFillSymbol",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:[_support_ClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A]})],z.prototype,"classBreakInfos",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__/* .reader */ .w)("classBreakInfos")],z.prototype,"readClassBreakInfos",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__/* .writer */ .K)("classBreakInfos")],z.prototype,"writeClassBreakInfos",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:String,json:{write:!0}})],z.prototype,"defaultLabel",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_16__/* .rendererSymbolProperty */ .z4)],z.prototype,"defaultSymbol",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:String,json:{write:!0}})],z.prototype,"field",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_6__/* .cast */ .w)("field")],z.prototype,"castField",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:Boolean})],z.prototype,"isMaxInclusive",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:_support_LegendOptions_js__WEBPACK_IMPORTED_MODULE_17__/* .LegendOptions */ .q,json:{write:!0}})],z.prototype,"legendOptions",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:Number,readOnly:!0,value:null,json:{read:!1,write:{overridePolicy(){return 0!==this.classBreakInfos.length&&this._areClassBreaksConsecutive()?{enabled:!0}:{enabled:!1}}}}})],z.prototype,"minValue",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:String,json:{write:!0}})],z.prototype,"normalizationField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:Number,cast:e=>(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_11__/* .ensureNumber */ .GB)(e),json:{write:!0}})],z.prototype,"normalizationTotal",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:E.apiValues,value:null,json:{type:E.jsonValues,read:E.read,write:E.write}})],z.prototype,"normalizationType",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__/* .enumeration */ .e)({classBreaks:"class-breaks"})],z.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:String,json:{write:!0}})],z.prototype,"valueExpression",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:String,json:{write:!0}})],z.prototype,"valueExpressionTitle",void 0),z=B=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__/* .subclass */ .$)("esri.renderers.ClassBreaksRenderer")],z);const w=z;


/***/ }),

/***/ 84685:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19251);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77542);
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42453);
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76589);
/* harmony import */ var _mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63501);
/* harmony import */ var _support_DictionaryLoader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57081);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var p;let c=p=class extends((0,_mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_8__/* .VisualVariablesMixin */ .h)(_Renderer_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)){constructor(e){super(e),this.config=null,this.fieldMap=null,this.scaleExpression=null,this.scaleExpressionTitle=null,this.url=null,this.type="dictionary"}get _loader(){return new _support_DictionaryLoader_js__WEBPACK_IMPORTED_MODULE_9__.DictionaryLoader(this.url,this.config,this.fieldMap)}writeData(e,r){e&&(r.scalingExpressionInfo={expression:e,returnType:"number"})}writeVisualVariables(e,r,s,i){i?.origin||super.writeVisualVariables(e,r,s,i)}clone(){return new p({config:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(this.config),scaleExpression:this.scaleExpression,scaleExpressionTitle:this.scaleExpressionTitle,fieldMap:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(this.fieldMap),url:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(this.url),visualVariables:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(this.visualVariables)})}async getSymbolAsync(e,r){return this._loader.getSymbolAsync(e,r)}async collectRequiredFields(e,r){await this.collectVVRequiredFields(e,r),this.scaleExpression&&await (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .collectArcadeFieldNames */ .Dx)(e,r,this.scaleExpression);for(const s in this.fieldMap){const i=this.fieldMap[s];r.has(i)&&e.add(i)}}get arcadeRequired(){return!0}getSymbol(){return null}getSymbols(){return[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,r)=>e+r.getAttributeHash()),"")}getMeshHash(){return`${this.url}-${JSON.stringify(this.fieldMap)}`}getSymbolFields(){return this._loader.getSymbolFields()}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_support_DictionaryLoader_js__WEBPACK_IMPORTED_MODULE_9__.DictionaryLoader})],c.prototype,"_loader",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Object,json:{read:{source:"configuration"},write:{target:"configuration"}}})],c.prototype,"config",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Object,json:{write:!0}})],c.prototype,"fieldMap",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{read:{source:"scalingExpressionInfo.expression"},write:!0}})],c.prototype,"scaleExpression",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_5__/* .writer */ .K)("scaleExpression")],c.prototype,"writeData",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{read:{source:"scalingExpressionInfo.title"},write:{target:"scalingExpressionInfo.title",overridePolicy(e){return{enabled:!!e&&!!this.scaleExpression}}}}})],c.prototype,"scaleExpressionTitle",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],c.prototype,"url",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_5__/* .writer */ .K)("visualVariables")],c.prototype,"writeVisualVariables",null),c=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__/* .subclass */ .$)("esri.renderers.DictionaryRenderer")],c);const u=c;


/***/ }),

/***/ 20299:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ y)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(96220);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(28902);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/fieldUtils.js
var fieldUtils = __webpack_require__(42453);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/Renderer.js
var Renderer = __webpack_require__(76589);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/mixins/VisualVariablesMixin.js + 5 modules
var VisualVariablesMixin = __webpack_require__(63501);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/AttributeColorInfo.js
var AttributeColorInfo = __webpack_require__(93101);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
;// ../node_modules/@arcgis/core/renderers/support/DotDensityLegendOptions.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var e;let p=e=class extends JSONSupport/* JSONSupport */.oY{constructor(){super(...arguments),this.unit=null}clone(){return new e({unit:this.unit})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"unit",void 0),p=e=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.DotDensityLegendOptions")],p);const c=p;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleFillSymbol.js
var SimpleFillSymbol = __webpack_require__(68882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleLineSymbol.js + 2 modules
var SimpleLineSymbol = __webpack_require__(40241);
;// ../node_modules/@arcgis/core/renderers/DotDensityRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var h;let m=h=class extends((0,VisualVariablesMixin/* VisualVariablesMixin */.h)(Renderer/* default */.A)){constructor(t){super(t),this.attributes=null,this.backgroundColor=new Color/* default */.A([0,0,0,0]),this.dotBlendingEnabled=!0,this.dotShape="square",this.dotSize=1,this.legendOptions=null,this.outline=new SimpleLineSymbol/* default */.A,this.dotValue=null,this.referenceScale=null,this.seed=1,this.type="dot-density"}calculateDotValue(t){if(null==this.referenceScale)return this.dotValue;const e=t/this.referenceScale*this.dotValue;return e<1?1:e}getSymbol(){return new SimpleFillSymbol/* default */.A({outline:this.outline})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}getAttributeHash(){return this.attributes?.reduce(((t,e)=>t+e.getAttributeHash()),"")??""}getMeshHash(){return JSON.stringify(this.outline)}clone(){return new h({attributes:(0,lang/* clone */.o8)(this.attributes),backgroundColor:(0,lang/* clone */.o8)(this.backgroundColor),dotBlendingEnabled:(0,lang/* clone */.o8)(this.dotBlendingEnabled),dotShape:(0,lang/* clone */.o8)(this.dotShape),dotSize:(0,lang/* clone */.o8)(this.dotSize),dotValue:(0,lang/* clone */.o8)(this.dotValue),legendOptions:(0,lang/* clone */.o8)(this.legendOptions),outline:(0,lang/* clone */.o8)(this.outline),referenceScale:(0,lang/* clone */.o8)(this.referenceScale),visualVariables:(0,lang/* clone */.o8)(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}getControllerHash(){const t=this.attributes?.map((t=>t.field||t.valueExpression||""));return`${t}-${this.outline&&JSON.stringify(this.outline.toJSON())||""}`}async collectRequiredFields(t,e){await this.collectVVRequiredFields(t,e);for(const o of this.attributes??[])o.valueExpression&&await (0,fieldUtils/* collectArcadeFieldNames */.Dx)(t,e,o.valueExpression),o.field&&t.add(o.field)}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[AttributeColorInfo/* default */.A],json:{write:!0}})],m.prototype,"attributes",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Color/* default */.A,json:{write:!0}})],m.prototype,"backgroundColor",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],m.prototype,"dotBlendingEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!1}})],m.prototype,"dotShape",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],m.prototype,"dotSize",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:c,json:{write:!0}})],m.prototype,"legendOptions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SimpleLineSymbol/* default */.A,json:{default:null,write:!0}})],m.prototype,"outline",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],m.prototype,"dotValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],m.prototype,"referenceScale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],m.prototype,"seed",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({dotDensity:"dot-density"})],m.prototype,"type",void 0),m=h=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.DotDensityRenderer")],m);const y=m;


/***/ }),

/***/ 25498:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ P)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(96220);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols.js + 1 modules
var symbols = __webpack_require__(30822);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/deprecate.js
var deprecate = __webpack_require__(50220);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/scheduling.js
var scheduling = __webpack_require__(61449);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/screenUtils.js
var screenUtils = __webpack_require__(89882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/utils.js
var utils = __webpack_require__(55135);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(28902);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/fieldUtils.js
var fieldUtils = __webpack_require__(42453);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/Renderer.js
var Renderer = __webpack_require__(76589);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/AuthoringInfo.js + 3 modules
var AuthoringInfo = __webpack_require__(20699);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/HeatmapColorStop.js
var HeatmapColorStop = __webpack_require__(50769);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(24793);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
;// ../node_modules/@arcgis/core/renderers/support/HeatmapLegendOptions.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let p=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(){super(...arguments),this.minLabel=null,this.maxLabel=null,this.title=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"minLabel",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"maxLabel",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"title",void 0),p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.HeatmapLegendOptions")],p);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/heatmapUtils.js
var heatmapUtils = __webpack_require__(27927);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleMarkerSymbol.js
var SimpleMarkerSymbol = __webpack_require__(23369);
;// ../node_modules/@arcgis/core/renderers/HeatmapRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var j;const D="esri.renderers.HeatmapRenderer",I=Logger/* default */.A.getLogger(D);function S(e){if(null!=e){const{maxDensity:t,minDensity:i,radius:s}=e;if(null!=t||null!=i||null!=s){const{blurRadius:t,maxPixelIntensity:i,minPixelIntensity:s,...r}=e;return r}}return e}let v=j=class extends Renderer/* default */.A{constructor(e){super(e),this.authoringInfo=null,this.colorStops=[new HeatmapColorStop/* default */.A({ratio:0,color:new Color/* default */.A("rgba(255, 140, 0, 0)")}),new HeatmapColorStop/* default */.A({ratio:.75,color:new Color/* default */.A("rgba(255, 140, 0, 1)")}),new HeatmapColorStop/* default */.A({ratio:.9,color:new Color/* default */.A("rgba(255, 0,   0, 1)")})],this.field=null,this.fieldOffset=0,this.legendOptions=null,this.maxDensity=.04,this.minDensity=0,this.radius=18,this.referenceScale=0,this.type="heatmap",this.valueExpression=null,this.valueExpressionTitle=null,this._warnedProps={blurRadius:!1,maxPixelIntensity:!1,minPixelIntensity:!1}}normalizeCtorArgs(e){return S(e)}get blurRadius(){return (0,heatmapUtils/* kernelDensityRadiusPtToGaussianBlurRadiusPx */.PU)(this.radius)}set blurRadius(e){const t=this.maxPixelIntensity,i=this.minPixelIntensity;this._set("radius",(0,heatmapUtils/* gaussianBlurRadiusPxToKernelDensityRadiusPt */.zp)(e)),this._warnAboutDeprecatedGaussianBlurProp("blurRadius","radius"),this._set("maxDensity",t*this._pixelIntensityToDensity),this._set("minDensity",i*this._pixelIntensityToDensity)}get maxPixelIntensity(){return this.maxDensity/this._pixelIntensityToDensity}set maxPixelIntensity(e){this._set("maxDensity",e*this._pixelIntensityToDensity),this._warnAboutDeprecatedGaussianBlurProp("maxPixelIntensity","maxDensity")}get minPixelIntensity(){return this.minDensity/this._pixelIntensityToDensity}set minPixelIntensity(e){this._set("minDensity",e*this._pixelIntensityToDensity),this._warnAboutDeprecatedGaussianBlurProp("minPixelIntensity","minDensity")}get _pixelIntensityToDensity(){return 24/(heatmapUtils/* magicKernelDensityRadiusInflationFactor */.ex**2*this.blurRadius**4)}_warnAboutDeprecatedGaussianBlurProp(e,t){if(this._warnedProps[e])return;"user"===(0,utils/* getProperties */.oY)(this).getDefaultOrigin()&&(this._warnedProps[e]=!0,(0,scheduling/* schedule */._)((()=>{(0,deprecate/* deprecatedProperty */.Lx)(I,e,{replacement:`${String(t)} (suggested value: ${this._get(t)})`,version:"4.24"})})))}read(e,t){e=S(e),super.read(e,t)}getSymbol(){return new SimpleMarkerSymbol/* default */.A}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}async collectRequiredFields(e,t){const i=this.field,s=this.valueExpression;i&&"string"==typeof i&&(0,fieldUtils/* collectField */.rq)(e,t,i),s&&"string"==typeof s&&await (0,fieldUtils/* collectArcadeFieldNames */.Dx)(e,t,s)}getAttributeHash(){return null}getMeshHash(){return`${JSON.stringify(this.colorStops)}.${this.blurRadius}.${this.field}`}clone(){return new j({authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),colorStops:(0,lang/* clone */.o8)(this.colorStops),field:this.field,legendOptions:(0,lang/* clone */.o8)(this.legendOptions),maxDensity:this.maxDensity,minDensity:this.minDensity,radius:this.radius,referenceScale:this.referenceScale,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:AuthoringInfo/* default */.A,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],v.prototype,"authoringInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],v.prototype,"blurRadius",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[HeatmapColorStop/* default */.A],json:{write:!0}})],v.prototype,"colorStops",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],v.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:{overridePolicy:(e,t,i)=>({enabled:null==i})},origins:{"web-scene":{write:!1}}}})],v.prototype,"fieldOffset",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:p,json:{write:!0}})],v.prototype,"legendOptions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],v.prototype,"maxDensity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],v.prototype,"maxPixelIntensity",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],v.prototype,"minDensity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],v.prototype,"minPixelIntensity",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,cast:screenUtils/* toPt */.cr,json:{write:!0}})],v.prototype,"radius",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,range:{min:0},json:{default:0,write:!0}})],v.prototype,"referenceScale",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({heatmap:"heatmap"})],v.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0,origins:{"web-document":{write:!1},"portal-item":{write:!1}}}})],v.prototype,"valueExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],v.prototype,"valueExpressionTitle",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],v.prototype,"_pixelIntensityToDensity",null),v=j=(0,tslib_es6._)([(0,subclass/* subclass */.$)(D)],v);const P=v;


/***/ }),

/***/ 79300:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ j)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(96220);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols.js + 1 modules
var symbols = __webpack_require__(30822);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(24793);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/screenUtils.js
var screenUtils = __webpack_require__(89882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(28902);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/fieldUtils.js
var fieldUtils = __webpack_require__(42453);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/Renderer.js
var Renderer = __webpack_require__(76589);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/mixins/VisualVariablesMixin.js + 5 modules
var VisualVariablesMixin = __webpack_require__(63501);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/AttributeColorInfo.js
var AttributeColorInfo = __webpack_require__(93101);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
;// ../node_modules/@arcgis/core/renderers/support/OthersCategory.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let i=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(){super(...arguments),this.color=new Color/* default */.A([0,0,0,0]),this.label=null,this.threshold=0}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Color/* default */.A,json:{write:!0}})],i.prototype,"color",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],i.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,range:{min:0,max:1},json:{write:!0}})],i.prototype,"threshold",void 0),i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.OthersCategory")],i);

;// ../node_modules/@arcgis/core/renderers/support/PieChartLegendOptions.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let p=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(){super(...arguments),this.title=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"title",void 0),p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.PieChartLegendOptions")],p);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleMarkerSymbol.js
var SimpleMarkerSymbol = __webpack_require__(23369);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleFillSymbol.js
var SimpleFillSymbol = __webpack_require__(68882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleLineSymbol.js + 2 modules
var SimpleLineSymbol = __webpack_require__(40241);
;// ../node_modules/@arcgis/core/renderers/PieChartRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let f=class extends((0,VisualVariablesMixin/* VisualVariablesMixin */.h)((0,Clonable/* ClonableMixin */.O)(Renderer/* default */.A))){constructor(t){super(t),this.attributes=null,this.backgroundFillSymbol=null,this.defaultColor=new Color/* default */.A([0,0,0,0]),this.defaultLabel=null,this.holePercentage=0,this.othersCategory=new i,this.legendOptions=null,this.outline=null,this.size=12,this.type="pie-chart"}getSymbol(){return new SimpleMarkerSymbol/* default */.A({size:this.size?this.size/2+(this.outline?.width||0):0})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol(),this.backgroundFillSymbol].filter(arrayUtils/* isSome */.Ru)}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((t,e)=>t+e.getAttributeHash()),"")}getMeshHash(){return this.getSymbols().reduce(((t,e)=>t+JSON.stringify(e)),"")}async collectRequiredFields(t,e){await this.collectVVRequiredFields(t,e);for(const o of this.attributes)o.valueExpression&&await (0,fieldUtils/* collectArcadeFieldNames */.Dx)(t,e,o.valueExpression),o.field&&t.add(o.field)}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[AttributeColorInfo/* default */.A],json:{write:!0}})],f.prototype,"attributes",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SimpleFillSymbol/* default */.A,json:{default:null,write:!0}})],f.prototype,"backgroundFillSymbol",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Color/* default */.A,json:{write:!0}})],f.prototype,"defaultColor",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],f.prototype,"defaultLabel",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,range:{min:0,max:1},json:{write:!0}})],f.prototype,"holePercentage",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:i,json:{write:!0}})],f.prototype,"othersCategory",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:p,json:{write:!0}})],f.prototype,"legendOptions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SimpleLineSymbol/* default */.A,json:{default:null,write:!0}})],f.prototype,"outline",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,cast:screenUtils/* toPt */.cr,json:{write:!0}})],f.prototype,"size",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({pieChart:"pie-chart"})],f.prototype,"type",void 0),f=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.PieChartRenderer")],f);const j=f;


/***/ }),

/***/ 76589:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59851);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63863);
/* harmony import */ var _support_AuthoringInfo_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20699);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const n=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONMap */ .J({simple:"simple",uniqueValue:"unique-value",classBreaks:"class-breaks",heatmap:"heatmap",dotDensity:"dot-density",dictionary:"dictionary",pieChart:"pie-chart"},{ignoreUnknown:!0});let a=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY{constructor(r){super(r),this.authoringInfo=null,this.type=null}async getRequiredFields(r){if(!this.collectRequiredFields)return[];const e=new Set;return await this.collectRequiredFields(e,r),Array.from(e).sort()}getSymbol(r,e){}async getSymbolAsync(r,e){}getSymbols(){return[]}getAttributeHash(){return JSON.stringify(this)}getMeshHash(){return JSON.stringify(this)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_support_AuthoringInfo_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,json:{write:!0}})],a.prototype,"authoringInfo",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:n.apiValues,readOnly:!0,json:{type:n.jsonValues,read:!1,write:{writer:n.write,ignoreOrigin:!0}}})],a.prototype,"type",void 0),a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.renderers.Renderer")],a);const p=a;


/***/ }),

/***/ 47347:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19251);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76589);
/* harmony import */ var _mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63501);
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16758);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var c;let n=c=class extends((0,_mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_7__/* .VisualVariablesMixin */ .h)(_Renderer_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)){constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.type="simple"}async collectRequiredFields(e,s){await Promise.all([this.collectSymbolFields(e,s),this.collectVVRequiredFields(e,s)])}async collectSymbolFields(e,s){await Promise.all(this.getSymbols().map((r=>r.collectRequiredFields(e,s))))}getSymbol(e,s){return this.symbol}async getSymbolAsync(e,s){return this.symbol}getSymbols(){return this.symbol?[this.symbol]:[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,s)=>e+s.getAttributeHash()),"")}getMeshHash(){return this.getSymbols().reduce(((e,s)=>e+JSON.stringify(s)),"")}get arcadeRequired(){return this.arcadeRequiredForVisualVariables}clone(){return new c({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),visualVariables:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],n.prototype,"description",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],n.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_8__/* .requiredRendererSymbolProperty */ .Wp)],n.prototype,"symbol",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_4__/* .enumeration */ .e)({simple:"simple"})],n.prototype,"type",void 0),n=c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.renderers.SimpleRenderer")],n);const p=n;


/***/ }),

/***/ 2692:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ A)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols.js + 1 modules
var symbols = __webpack_require__(30822);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/object.js
var object = __webpack_require__(76724);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(85251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(4130);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(28902);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/diffUtils.js
var diffUtils = __webpack_require__(64442);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/fieldUtils.js
var fieldUtils = __webpack_require__(42453);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/portal/Portal.js + 2 modules
var Portal = __webpack_require__(10282);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/Renderer.js
var Renderer = __webpack_require__(76589);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/mixins/VisualVariablesMixin.js + 5 modules
var VisualVariablesMixin = __webpack_require__(63501);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/commonProperties.js
var commonProperties = __webpack_require__(16758);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/LegendOptions.js
var LegendOptions = __webpack_require__(38785);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(24793);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
;// ../node_modules/@arcgis/core/renderers/support/UniqueValue.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let c=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(o){super(o),this.value=null,this.value2=null,this.value3=null}};(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* uniqueValueProperty */.Ug)],c.prototype,"value",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* uniqueValueProperty */.Ug)],c.prototype,"value2",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* uniqueValueProperty */.Ug)],c.prototype,"value3",void 0),c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.UniqueValue")],c);const UniqueValue_u=c;

;// ../node_modules/@arcgis/core/renderers/support/UniqueValueClass.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let n=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(r){super(r),this.description=null,this.label=null,this.symbol=null,this.values=null}castValues(r){if(null==r)return null;const o=typeof(r=Array.isArray(r)?r:[r])[0];return"string"===o||"number"===o?r.map((r=>new UniqueValue_u({value:r}))):"object"===o?r[0]instanceof UniqueValue_u?r:r.map((r=>new UniqueValue_u(r))):null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],n.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],n.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* rendererSymbolProperty */.z4)],n.prototype,"symbol",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[UniqueValue_u],json:{type:[[String]],read:{reader:r=>r?r.map((r=>new UniqueValue_u({value:r[0],value2:r[1],value3:r[2]}))):null},write:{writer:(r,e)=>{const t=[];for(const s of r){const r=[s.value,s.value2,s.value3].filter(arrayUtils/* isSome */.Ru).map((r=>r.toString()));t.push(r)}e.values=t}}}})],n.prototype,"values",void 0),(0,tslib_es6._)([(0,cast/* cast */.w)("values")],n.prototype,"castValues",null),n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.UniqueValueClass")],n);const UniqueValueClass_u=n;

;// ../node_modules/@arcgis/core/renderers/support/UniqueValueGroup.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let UniqueValueGroup_c=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(r){super(r),this.heading=null,this.classes=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],UniqueValueGroup_c.prototype,"heading",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[UniqueValueClass_u],json:{write:!0}})],UniqueValueGroup_c.prototype,"classes",void 0),UniqueValueGroup_c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.UniqueValueGroup")],UniqueValueGroup_c);const UniqueValueGroup_i=UniqueValueGroup_c;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/UniqueValueInfo.js
var UniqueValueInfo = __webpack_require__(3324);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/arcadeOnDemand.js
var arcadeOnDemand = __webpack_require__(28965);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/persistableUrlUtils.js
var persistableUrlUtils = __webpack_require__(63680);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/styleUtils.js
var styleUtils = __webpack_require__(28051);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/WebStyleSymbol.js
var WebStyleSymbol = __webpack_require__(75162);
;// ../node_modules/@arcgis/core/renderers/UniqueValueRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var E;const M="esri.renderers.UniqueValueRenderer",N=Logger/* default */.A.getLogger(M),R="uvInfos-watcher",P="uvGroups-watcher",C=",",$=(0,ensureType/* ensureType */.dp)(UniqueValueInfo/* default */.A);function z(e){const{field1:t,field2:s,field3:i,fieldDelimiter:o,uniqueValueInfos:l,valueExpression:r}=e,u=!(!t||!s);return[{classes:(l??[]).map((e=>{const{symbol:l,label:n,value:a,description:p}=e,[f,d,c]=u?a?.toString()?.split(o||"")||[]:[a],h=[];return(t||r)&&h.push(f),s&&h.push(d),i&&h.push(c),{symbol:l,label:n,values:[h],description:p}}))}]}let k=E=class extends((0,VisualVariablesMixin/* VisualVariablesMixin */.h)(Renderer/* default */.A)){constructor(e){super(e),this._valueInfoMap={},this._isDefaultSymbolDerived=!1,this._isInfosSource=null,this.type="unique-value",this.backgroundFillSymbol=null,this.orderByClassesEnabled=!1,this.valueExpressionTitle=null,this.legendOptions=null,this.defaultLabel=null,this.portal=null,this.styleOrigin=null,this.diff={uniqueValueInfos(e,t){if(!e&&!t)return;if(!e||!t)return{type:"complete",oldValue:e,newValue:t};let s=!1;const i={type:"collection",added:[],removed:[],changed:[],unchanged:[]};for(let o=0;o<t.length;o++){const l=e.find((e=>e.value===t[o].value));l?(0,diffUtils/* diff */.Ui)(l,t[o])?(i.changed.push({type:"complete",oldValue:l,newValue:t[o]}),s=!0):i.unchanged.push({oldValue:l,newValue:t[o]}):(i.added.push(t[o]),s=!0)}for(let o=0;o<e.length;o++){t.find((t=>t.value===e[o].value))||(i.removed.push(e[o]),s=!0)}return s?i:void 0}},this._set("uniqueValueInfos",[]),this._set("uniqueValueGroups",[])}get _cache(){return{compiledFunc:null}}set field(e){this._set("field",e),this._updateFieldDelimiter(),this._updateUniqueValues()}castField(e){return null==e||"function"==typeof e?e:(0,ensureType/* ensureString */.GX)(e)}writeField(e,t,i,o){"string"==typeof e?t[i]=e:o?.messages?o.messages.push(new Error/* default */.A("property:unsupported","UniqueValueRenderer.field set to a function cannot be written to JSON")):N.error(".field: cannot write field to JSON since it's not a string value")}set field2(e){this._set("field2",e),this._updateFieldDelimiter(),this._updateUniqueValues()}set field3(e){this._set("field3",e),this._updateUniqueValues()}set valueExpression(e){this._set("valueExpression",e),this._updateUniqueValues()}set defaultSymbol(e){this._isDefaultSymbolDerived=!1,this._set("defaultSymbol",e)}set fieldDelimiter(e){this._set("fieldDelimiter",e),this._updateUniqueValues()}readPortal(e,t,s){return s.portal||Portal/* default */.A.getDefault()}readStyleOrigin(e,t,s){if(t.styleName)return Object.freeze({styleName:t.styleName});if(t.styleUrl){const e=(0,persistableUrlUtils.f)(t.styleUrl,s);return Object.freeze({styleUrl:e})}}writeStyleOrigin(e,t,s,i){e.styleName?t.styleName=e.styleName:e.styleUrl&&(t.styleUrl=(0,persistableUrlUtils.t)(e.styleUrl,i))}set uniqueValueGroups(e){this.styleOrigin?N.error("#uniqueValueGroups=","Cannot modify unique value groups of a UniqueValueRenderer created from a web style"):(this._set("uniqueValueGroups",e),this._updateInfosFromGroups(),this._isInfosSource=!1,this._watchUniqueValueGroups())}set uniqueValueInfos(e){this.styleOrigin?N.error("#uniqueValueInfos=","Cannot modify unique value infos of a UniqueValueRenderer created from a web style"):(this._set("uniqueValueInfos",e),this._updateValueInfoMap(),this._updateGroupsFromInfos(),this._isInfosSource=!0,this._watchUniqueValueInfos())}addUniqueValueInfo(e,s){if(this.styleOrigin)return void N.error("#addUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style");let i;i="object"==typeof e?$(e):new UniqueValueInfo/* default */.A({value:e,symbol:(0,symbols/* ensureType */.dp)(s)}),this.uniqueValueInfos?.push(i),this._valueInfoMap[i.value]=i,this._updateGroupsFromInfos(),this._isInfosSource=!0,this._watchUniqueValueInfos()}removeUniqueValueInfo(e){if(this.styleOrigin)return void N.error("#removeUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style");const t=this.uniqueValueInfos;if(t)for(let s=0;s<t.length;s++){const i=t[s];if(String(i.value)===String(e)){delete this._valueInfoMap[e],t.splice(s,1);break}}this._updateGroupsFromInfos(),this._isInfosSource=!0,this._watchUniqueValueInfos()}async getUniqueValueInfo(e,t){let s=t;return this.valueExpression&&null==t?.arcade&&(s={...s,arcade:await (0,arcadeOnDemand/* loadArcade */.lw)()}),this._getUniqueValueInfo(e,s)}getSymbol(e,t){if(this.valueExpression&&null==t?.arcade)return void N.error("#getSymbol()","Please use getSymbolAsync if valueExpression is used");const s=this._getUniqueValueInfo(e,t);return s?.symbol||this.defaultSymbol}async getSymbolAsync(e,t){let s=t;if(this.valueExpression&&null==s?.arcade){const e=await (0,arcadeOnDemand/* loadArcade */.lw)(),{arcadeUtils:t}=e;t.hasGeometryOperations(this.valueExpression)&&await t.enableGeometryOperations(),s={...s,arcade:e}}const i=this._getUniqueValueInfo(e,s);return i?.symbol||this.defaultSymbol}getSymbols(){const e=[];for(const t of this.uniqueValueInfos??[])t.symbol&&e.push(t.symbol);return this.defaultSymbol&&e.push(this.defaultSymbol),e}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,t)=>e+t.getAttributeHash()),"")}getMeshHash(){const e=JSON.stringify(this.backgroundFillSymbol),t=JSON.stringify(this.defaultSymbol),s=this.uniqueValueInfos?.reduce(((e,t)=>e+t.getMeshHash()),"");return`${e}.${t}.${s}.${`${this.field}.${this.field2}.${this.field3}.${this.fieldDelimiter}`}.${this.valueExpression}`}clone(){const e=new E({field:this.field,field2:this.field2,field3:this.field3,defaultLabel:this.defaultLabel,defaultSymbol:(0,lang/* clone */.o8)(this.defaultSymbol),orderByClassesEnabled:this.orderByClassesEnabled,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,fieldDelimiter:this.fieldDelimiter,visualVariables:(0,lang/* clone */.o8)(this.visualVariables),legendOptions:(0,lang/* clone */.o8)(this.legendOptions),authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),backgroundFillSymbol:(0,lang/* clone */.o8)(this.backgroundFillSymbol)});this._isDefaultSymbolDerived&&(e._isDefaultSymbolDerived=!0),e._set("portal",this.portal);const t=(0,lang/* clone */.o8)(this.uniqueValueInfos),s=(0,lang/* clone */.o8)(this.uniqueValueGroups);return this.styleOrigin&&(e._set("styleOrigin",Object.freeze((0,lang/* clone */.o8)(this.styleOrigin))),Object.freeze(t),Object.freeze(s)),e._set("uniqueValueInfos",t),e._updateValueInfoMap(),e._set("uniqueValueGroups",s),e._isInfosSource=this._isInfosSource,e._watchUniqueValueInfosAndGroups(),e}get arcadeRequired(){return this.arcadeRequiredForVisualVariables||!!this.valueExpression}async collectRequiredFields(e,t){const s=[this.collectVVRequiredFields(e,t),this.collectSymbolFields(e,t)];await Promise.all(s)}async collectSymbolFields(e,t){const s=[...this.getSymbols().map((s=>s.collectRequiredFields(e,t))),(0,fieldUtils/* collectArcadeFieldNames */.Dx)(e,t,this.valueExpression)];(0,fieldUtils/* collectField */.rq)(e,t,this.field),(0,fieldUtils/* collectField */.rq)(e,t,this.field2),(0,fieldUtils/* collectField */.rq)(e,t,this.field3),await Promise.all(s)}populateFromStyle(){return (0,styleUtils/* fetchStyle */.cF)(this.styleOrigin,{portal:this.portal}).then((e=>{const t=[];return this._valueInfoMap={},e&&e.data&&Array.isArray(e.data.items)&&e.data.items.forEach((s=>{const i=new WebStyleSymbol/* default */.A({styleUrl:e.styleUrl,styleName:e.styleName,portal:this.portal,name:s.name});this.defaultSymbol||s.name!==e.data.defaultItem||(this.defaultSymbol=i,this._isDefaultSymbolDerived=!0);const o=new UniqueValueInfo/* default */.A({value:s.name,symbol:i});t.push(o),this._valueInfoMap[s.name]=o})),this._set("uniqueValueInfos",Object.freeze(t)),this._updateGroupsFromInfos(!0),this._isInfosSource=null,this._watchUniqueValueInfos(),!this.defaultSymbol&&this.uniqueValueInfos?.length&&(this.defaultSymbol=this.uniqueValueInfos[0].symbol,this._isDefaultSymbolDerived=!0),this}))}_updateFieldDelimiter(){this.field&&this.field2&&!this.fieldDelimiter&&this._set("fieldDelimiter",C)}_updateUniqueValues(){null!=this._isInfosSource&&(this._isInfosSource?this._updateGroupsFromInfos():this._updateInfosFromGroups())}_updateValueInfoMap(){this._valueInfoMap={};const{uniqueValueInfos:e}=this;if(e)for(const t of e)this._valueInfoMap[t.value+""]=t}_watchUniqueValueInfosAndGroups(){this._watchUniqueValueInfos(),this._watchUniqueValueGroups()}_watchUniqueValueInfos(){this.removeHandles(R);const{uniqueValueInfos:e}=this;if(e){const t=[];for(const s of e)t.push((0,reactiveUtils/* watch */.wB)((()=>({symbol:s.symbol,value:s.value,label:s.label,description:s.description})),((e,t)=>{e!==t&&(this._updateGroupsFromInfos(),this._isInfosSource=!0)}),{sync:!0}));this.addHandles(t,R)}}_watchUniqueValueGroups(){this.removeHandles(P);const{uniqueValueGroups:e}=this;if(e){const t=[];for(const s of e){t.push((0,reactiveUtils/* watch */.wB)((()=>({classes:s.classes})),((e,t)=>{e!==t&&(this._updateInfosFromGroups(),this._isInfosSource=!1)}),{sync:!0}));for(const e of s.classes??[])t.push((0,reactiveUtils/* watch */.wB)((()=>({symbol:e.symbol,values:e.values,label:e.label,description:e.description})),((e,t)=>{e!==t&&(this._updateInfosFromGroups(),this._isInfosSource=!1)}),{sync:!0}))}this.addHandles(t,P)}}_updateInfosFromGroups(){if(!this.uniqueValueGroups)return this._set("uniqueValueInfos",null),this._updateValueInfoMap(),void this._watchUniqueValueInfos();const e=[],{field:t,field2:s,field3:i,fieldDelimiter:o,uniqueValueGroups:l,valueExpression:r}=this;if(!t&&!r)return this._set("uniqueValueInfos",e),this._updateValueInfoMap(),void this._watchUniqueValueInfos();const u=!(!t||!s);for(const n of l)for(const t of n.classes??[]){const{symbol:l,label:r,values:n,description:a}=t;for(const t of n??[]){const{value:n,value2:p,value3:f}=t,d=[n];s&&d.push(p),i&&d.push(f);const c=u?d.join(o||""):d[0];e.push(new UniqueValueInfo/* default */.A({symbol:l,label:r,value:c,description:a}))}}this._set("uniqueValueInfos",e),this._updateValueInfoMap(),this._watchUniqueValueInfos()}_updateGroupsFromInfos(e=!1){if(!this.uniqueValueInfos)return this._set("uniqueValueGroups",null),void this._watchUniqueValueGroups();const{field:t,field2:s,valueExpression:i,fieldDelimiter:o,uniqueValueInfos:l}=this;if(!t&&!i||!l.length)return this._set("uniqueValueGroups",[]),void this._watchUniqueValueGroups();const r=!(!t||!s),u=l.map((e=>{const{symbol:t,label:s,value:i,description:l}=e,[u,n,a]=r?i?.toString()?.split(o||"")||[]:[i];return new UniqueValueClass_u({symbol:t,label:s,description:l,values:[new UniqueValue_u({value:u,value2:n,value3:a})]})})),n=[new UniqueValueGroup_i({classes:u})];e&&Object.freeze(n),this._set("uniqueValueGroups",n),this._watchUniqueValueGroups()}_getUniqueValueInfo(e,t){return this.valueExpression?this._getUnqiueValueInfoForExpression(e,t):this._getUnqiueValueInfoForFields(e)}_getUnqiueValueInfoForExpression(e,t){const{viewingMode:s,scale:i,spatialReference:o,arcade:l,timeZone:r}=t??{};let u=this._cache.compiledFunc;const n=l.arcadeUtils;if(!u){const e=n.createSyntaxTree(this.valueExpression);u=n.createFunction(e),this._cache.compiledFunc=u}const a=n.executeFunction(u,n.createExecContext(e,n.getViewInfo({viewingMode:s,scale:i,spatialReference:o}),r));return this._valueInfoMap[a+""]}_getUnqiueValueInfoForFields(e){const t=this.field,s=e.attributes;let i;if("function"!=typeof t&&this.field2){const e=this.field2,o=this.field3,l=[];t&&l.push(s[t]),e&&l.push(s[e]),o&&l.push(s[o]),i=l.join(this.fieldDelimiter||"")}else"function"==typeof t?i=t(e):t&&(i=s[t]);return this._valueInfoMap[i+""]}static fromPortalStyle(e,t){const s=new E(t?.properties);s._set("styleOrigin",Object.freeze({styleName:e})),s._set("portal",t?.portal||Portal/* default */.A.getDefault());const i=s.populateFromStyle();return i.catch((t=>{N.error(`#fromPortalStyle('${e}'[, ...])`,"Failed to create unique value renderer from style name",t)})),i}static fromStyleUrl(e,t){const s=new E(t?.properties);s._set("styleOrigin",Object.freeze({styleUrl:e}));const i=s.populateFromStyle();return i.catch((t=>{N.error(`#fromStyleUrl('${e}'[, ...])`,"Failed to create unique value renderer from style URL",t)})),i}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],k.prototype,"_cache",null),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({uniqueValue:"unique-value"})],k.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* rendererBackgroundFillSymbolProperty */.As)],k.prototype,"backgroundFillSymbol",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({value:null,json:{type:String,read:{source:"field1"},write:{target:"field1"}}})],k.prototype,"field",null),(0,tslib_es6._)([(0,cast/* cast */.w)("field")],k.prototype,"castField",null),(0,tslib_es6._)([(0,writer/* writer */.K)("field")],k.prototype,"writeField",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,value:null,json:{write:!0}})],k.prototype,"field2",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,value:null,json:{write:!0}})],k.prototype,"field3",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{name:"drawInClassOrder",default:!1,write:!0,origins:{"web-scene":{write:!1}}}})],k.prototype,"orderByClassesEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,value:null,json:{write:!0}})],k.prototype,"valueExpression",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],k.prototype,"valueExpressionTitle",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:LegendOptions/* LegendOptions */.q,json:{write:!0}})],k.prototype,"legendOptions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],k.prototype,"defaultLabel",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)((0,object/* deepMerge */.$N)({...commonProperties/* rendererSymbolProperty */.z4},{json:{write:{overridePolicy(){return{enabled:!this._isDefaultSymbolDerived}}},origins:{"web-scene":{write:{overridePolicy(){return{enabled:!this._isDefaultSymbolDerived}}}}}}}))],k.prototype,"defaultSymbol",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,value:null,json:{write:!0}})],k.prototype,"fieldDelimiter",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Portal/* default */.A,readOnly:!0})],k.prototype,"portal",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("portal",["styleName"])],k.prototype,"readPortal",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{write:{enabled:!1,overridePolicy:()=>({enabled:!0})}}})],k.prototype,"styleOrigin",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("styleOrigin",["styleName","styleUrl"])],k.prototype,"readStyleOrigin",null),(0,tslib_es6._)([(0,writer/* writer */.K)("styleOrigin",{styleName:{type:String},styleUrl:{type:String}})],k.prototype,"writeStyleOrigin",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[UniqueValueGroup_i],json:{read:{source:["uniqueValueGroups","uniqueValueInfos"],reader:(e,t,s)=>(t.uniqueValueGroups||z(t)).map((e=>UniqueValueGroup_i.fromJSON(e,s)))},write:{overridePolicy(){return this.styleOrigin?{enabled:!1}:{enabled:!0}}}}})],k.prototype,"uniqueValueGroups",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[UniqueValueInfo/* default */.A],json:{read:!1,write:{overridePolicy(){return this.styleOrigin?{enabled:!1}:{enabled:!0}}}}})],k.prototype,"uniqueValueInfos",null),k=E=(0,tslib_es6._)([(0,subclass/* subclass */.$)(M)],k);const A=k;


/***/ }),

/***/ 63501:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h: () => (/* binding */ v)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/fieldUtils.js
var fieldUtils = __webpack_require__(42453);
;// ../node_modules/@arcgis/core/renderers/support/randomRotationExpression.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(e){return e.match(t)?.[1]?.replace(/\\'/g,"'")??null}const t=/^hash\(\$feature\['((\\'|[^'])+)'\]\) \* 8\.381e-8$/;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/visualVariables/VisualVariable.js
var VisualVariable = __webpack_require__(57860);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/visualVariables/support/ColorStop.js
var ColorStop = __webpack_require__(5001);
;// ../node_modules/@arcgis/core/renderers/visualVariables/ColorVariable.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var i;let p=i=class extends VisualVariable/* default */.A{constructor(t){super(t),this.type="color",this.normalizationField=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null}}set stops(t){t&&Array.isArray(t)&&(t=t.filter((t=>!!t))).sort(((t,s)=>t.value-s.value)),this._set("stops",t)}clone(){return new i({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map((t=>t.clone())),legendOptions:this.legendOptions?.clone()})}getAttributeHash(){return`${super.getAttributeHash()}-${this.normalizationField}`}_interpolateData(){return this.stops&&this.stops.map((t=>t.value||0))}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],p.prototype,"cache",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["color"],json:{type:["colorInfo"]}})],p.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"normalizationField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[ColorStop/* default */.A],json:{write:!0}})],p.prototype,"stops",null),p=i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.visualVariables.ColorVariable")],p);const a=p;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/webdoc/support/opacityUtils.js
var opacityUtils = __webpack_require__(48904);
;// ../node_modules/@arcgis/core/renderers/visualVariables/support/OpacityStop.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var l;let u=l=class extends JSONSupport/* JSONSupport */.oY{constructor(r){super(r),this.label=null,this.opacity=null,this.value=null}readOpacity(r,t){return (0,opacityUtils/* transparencyToOpacity */.D)(t.transparency)}writeOpacity(r,t,o){t[o]=(0,opacityUtils/* opacityToTransparency */.p)(r)}clone(){return new l({label:this.label,opacity:this.opacity,value:this.value})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],u.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{type:ensureType/* Integer */.jz,write:{target:"transparency"}}})],u.prototype,"opacity",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("opacity",["transparency"])],u.prototype,"readOpacity",null),(0,tslib_es6._)([(0,writer/* writer */.K)("opacity")],u.prototype,"writeOpacity",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],u.prototype,"value",void 0),u=l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.visualVariables.support.OpacityStop")],u);const y=u;

;// ../node_modules/@arcgis/core/renderers/visualVariables/OpacityVariable.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var OpacityVariable_i;let OpacityVariable_a=OpacityVariable_i=class extends VisualVariable/* default */.A{constructor(t){super(t),this.type="opacity",this.normalizationField=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null}}set stops(t){t&&Array.isArray(t)&&(t=t.filter((t=>!!t))).sort(((t,s)=>t.value-s.value)),this._set("stops",t)}clone(){return new OpacityVariable_i({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map((t=>t.clone())),legendOptions:this.legendOptions?.clone()})}getAttributeHash(){return`${super.getAttributeHash()}-${this.normalizationField}`}_interpolateData(){return this.stops&&this.stops.map((t=>t.value||0))}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],OpacityVariable_a.prototype,"cache",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["opacity"],json:{type:["transparencyInfo"]}})],OpacityVariable_a.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],OpacityVariable_a.prototype,"normalizationField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[y],json:{write:!0}})],OpacityVariable_a.prototype,"stops",null),OpacityVariable_a=OpacityVariable_i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.visualVariables.OpacityVariable")],OpacityVariable_a);const OpacityVariable_p=OpacityVariable_a;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/visualVariables/RotationVariable.js
var RotationVariable = __webpack_require__(68090);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/visualVariables/SizeVariable.js + 1 modules
var SizeVariable = __webpack_require__(14977);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(52495);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Warning.js
var Warning = __webpack_require__(68659);
;// ../node_modules/@arcgis/core/renderers/visualVariables/VisualVariableFactory.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const VisualVariableFactory_u={color:a,size:SizeVariable/* default */.A,opacity:OpacityVariable_p,rotation:RotationVariable/* default */.A},b=new jsonMap/* JSONMap */.J({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"}),h=/^\[([^\]]+)\]$/i;let m=class extends Accessor/* default */.A{constructor(){super(...arguments),this.colorVariables=null,this.opacityVariables=null,this.rotationVariables=null,this.sizeVariables=null}set visualVariables(r){if(this._resetVariables(),r=r&&r.filter((r=>!!r)),r?.length){for(const s of r)switch(s.type){case"color":this.colorVariables.push(s);break;case"opacity":this.opacityVariables.push(s);break;case"rotation":this.rotationVariables.push(s);break;case"size":this.sizeVariables.push(s)}if(this.sizeVariables.length){this.sizeVariables.some((r=>!!r.target))&&r.sort(((r,s)=>{let e=null;return e=r.target===s.target?0:r.target?1:-1,e}))}for(let s=0;s<r.length;s++){r[s].index=s}this._set("visualVariables",r)}else this._set("visualVariables",r)}readVariables(r,s,e){const{rotationExpression:a,rotationType:i}=s,l=a?.match(h),n=l?.[1];if(n&&(r||(r=[]),r.push({type:"rotationInfo",rotationType:i,field:n})),r)return r.map((r=>{const s=b.read(r.type),a=VisualVariableFactory_u[s];a||(Logger/* default */.A.getLogger(this).warn(`Unknown variable type: ${s}`),e?.messages&&e.messages.push(new Warning/* default */.A("visual-variable:unsupported",`visualVariable of type '${s}' is not supported`,{definition:r,context:e})));const i=new a;return i.read(r,e),i}))}writeVariables(r,s){const e=[];for(const o of r){const r=o.toJSON(s);r&&e.push(r)}return e}_resetVariables(){this.colorVariables=[],this.opacityVariables=[],this.rotationVariables=[],this.sizeVariables=[]}};(0,tslib_es6._)([(0,property/* property */.MZ)()],m.prototype,"visualVariables",null),m=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.visualVariables.VisualVariableFactory")],m);const V=m;

;// ../node_modules/@arcgis/core/renderers/mixins/VisualVariablesMixin.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const VisualVariablesMixin_m={base:VisualVariable/* default */.A,key:"type",typeMap:{opacity:OpacityVariable_p,color:a,rotation:RotationVariable/* default */.A,size:SizeVariable/* default */.A}},v=l=>{let u=class extends l{constructor(){super(...arguments),this._vvFactory=new V}set visualVariables(r){this._vvFactory.visualVariables=r,this._set("visualVariables",this._vvFactory.visualVariables)}readVisualVariables(r,a,s){return this._vvFactory.readVariables(r,a,s)}writeVisualVariables(r,a,s,i){a[s]=this._vvFactory.writeVariables(r,i)}get arcadeRequiredForVisualVariables(){if(!this.visualVariables)return!1;for(const r of this.visualVariables)if(r.arcadeRequired)return!0;return!1}hasVisualVariables(r,a){return r?this.getVisualVariablesForType(r,a).length>0:this.getVisualVariablesForType("size",a).length>0||this.getVisualVariablesForType("color",a).length>0||this.getVisualVariablesForType("opacity",a).length>0||this.getVisualVariablesForType("rotation",a).length>0}getVisualVariablesForType(r,a){const s=this.visualVariables;return s?s.filter((s=>s.type===r&&("string"==typeof a?s.target===a:!1!==a||!s.target))):[]}async collectVVRequiredFields(r,a){let s=[];this.visualVariables&&(s=s.concat(this.visualVariables));for(const i of s)i&&(i.field&&(0,fieldUtils/* collectField */.rq)(r,a,i.field),i.normalizationField&&(0,fieldUtils/* collectField */.rq)(r,a,i.normalizationField),i.valueExpression&&(VisualVariablesMixin_y(i.valueExpression,r,a)||await (0,fieldUtils/* collectArcadeFieldNames */.Dx)(r,a,i.valueExpression)))}};return (0,tslib_es6._)([(0,property/* property */.MZ)({types:[VisualVariablesMixin_m],value:null,json:{write:!0}})],u.prototype,"visualVariables",null),(0,tslib_es6._)([(0,reader/* reader */.w)("visualVariables",["visualVariables","rotationType","rotationExpression"])],u.prototype,"readVisualVariables",null),(0,tslib_es6._)([(0,writer/* writer */.K)("visualVariables")],u.prototype,"writeVisualVariables",null),u=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.mixins.VisualVariablesMixin")],u),u};function VisualVariablesMixin_y(r,a,s){const i=e(r);return null!=i&&((0,fieldUtils/* collectField */.rq)(a,s,i),!0)}


/***/ }),

/***/ 93101:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96220);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(539);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4130);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73446);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var n;let u=n=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY{constructor(r){super(r),this.color=null,this.field=null,this.label=null,this.valueExpression=null,this.valueExpressionTitle=null}castField(r){return null==r?r:"function"==typeof r?(_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.getLogger(this).error(".field: field must be a string value"),null):(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__/* .ensureString */ .GX)(r)}getAttributeHash(){return`${this.field}-${this.valueExpression}`}clone(){return new n({color:this.color?.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,json:{type:[Number],write:!0}})],u.prototype,"color",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:!0}})],u.prototype,"field",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__/* .cast */ .w)("field")],u.prototype,"castField",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:!0}})],u.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:!0}})],u.prototype,"valueExpression",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:!0}})],u.prototype,"valueExpressionTitle",void 0),u=n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.renderers.support.AttributeColorInfo")],u);const a=u;


/***/ }),

/***/ 20699:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ j)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
;// ../node_modules/@arcgis/core/renderers/support/AuthoringInfoClassBreakInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var t;let p=t=class extends JSONSupport/* JSONSupport */.oY{constructor(r){super(r),this.minValue=0,this.maxValue=0}clone(){return new t({minValue:this.minValue,maxValue:this.maxValue})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],p.prototype,"minValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],p.prototype,"maxValue",void 0),p=t=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderer.support.AuthoringInfoClassBreakInfo")],p);

;// ../node_modules/@arcgis/core/renderers/support/AuthoringInfoFieldInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var n;let AuthoringInfoFieldInfo_p=n=class extends JSONSupport/* JSONSupport */.oY{constructor(o){super(o),this.field="",this.normalizationField="",this.label="",this.classBreakInfos=[]}clone(){return new n({field:this.field,normalizationField:this.normalizationField,label:this.label,classBreakInfos:(0,lang/* clone */.o8)(this.classBreakInfos)})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],AuthoringInfoFieldInfo_p.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],AuthoringInfoFieldInfo_p.prototype,"normalizationField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],AuthoringInfoFieldInfo_p.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[p],json:{write:!0}})],AuthoringInfoFieldInfo_p.prototype,"classBreakInfos",void 0),AuthoringInfoFieldInfo_p=n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.AuthoringInfoFieldInfo")],AuthoringInfoFieldInfo_p);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(4130);
;// ../node_modules/@arcgis/core/renderers/support/AuthoringInfoVisualVariable.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var AuthoringInfoVisualVariable_n;const l=new jsonMap/* JSONMap */.J({percentTotal:"percent-of-total",ratio:"ratio",percent:"percent"}),AuthoringInfoVisualVariable_p=new jsonMap/* JSONMap */.J({sizeInfo:"size",colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation"}),a={key:e=>"number"==typeof e?"number":"string",typeMap:{number:Number,string:String},base:null},u=["high-to-low","above-and-below","centered-on","extremes"],m=[...new Set([...["high-to-low","above-and-below","centered-on","extremes","90-10","above","below"],...["high-to-low","above-and-below","90-10","above","below"]])],y=["seconds","minutes","hours","days","months","years"];let d=AuthoringInfoVisualVariable_n=class extends JSONSupport/* JSONSupport */.oY{constructor(e){super(e),this.endTime=null,this.field=null,this.maxSliderValue=null,this.minSliderValue=null,this.startTime=null,this.type=null,this.units=null}castEndTime(e){return"string"==typeof e||"number"==typeof e?e:null}castStartTime(e){return"string"==typeof e||"number"==typeof e?e:null}get style(){return"color"===this.type?this._get("style"):null}set style(e){this._set("style",e)}get theme(){return"color"===this.type||"size"===this.type?this._get("theme")||"high-to-low":null}set theme(e){this._set("theme",e)}clone(){return new AuthoringInfoVisualVariable_n({endTime:this.endTime,field:this.field,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,startTime:this.startTime,style:this.style,theme:this.theme,type:this.type,units:this.units})}};(0,tslib_es6._)([(0,property/* property */.MZ)({types:a,json:{write:!0}})],d.prototype,"endTime",void 0),(0,tslib_es6._)([(0,cast/* cast */.w)("endTime")],d.prototype,"castEndTime",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],d.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],d.prototype,"maxSliderValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],d.prototype,"minSliderValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:a,json:{write:!0}})],d.prototype,"startTime",void 0),(0,tslib_es6._)([(0,cast/* cast */.w)("startTime")],d.prototype,"castStartTime",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:l.apiValues,value:null,json:{type:l.jsonValues,read:l.read,write:l.write}})],d.prototype,"style",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:m,value:null,json:{type:m,origins:{"web-scene":{type:u,write:{writer:(e,t)=>{u.includes(e)&&(t.theme=e)}}}},write:!0}})],d.prototype,"theme",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:AuthoringInfoVisualVariable_p.apiValues,json:{type:AuthoringInfoVisualVariable_p.jsonValues,read:AuthoringInfoVisualVariable_p.read,write:AuthoringInfoVisualVariable_p.write}})],d.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:y,json:{type:y,write:!0}})],d.prototype,"units",void 0),d=AuthoringInfoVisualVariable_n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.AuthoringInfoVisualVariable")],d);const h=d;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/colorRamps.js
var colorRamps = __webpack_require__(59740);
;// ../node_modules/@arcgis/core/renderers/support/AuthoringInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var c;const AuthoringInfo_h=new jsonMap/* JSONMap */.J({esriClassifyDefinedInterval:"defined-interval",esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation"}),AuthoringInfo_y=new jsonMap/* JSONMap */.J({pieChart:"pie-chart",classedSize:"class-breaks-size",classedColor:"class-breaks-color",univariateColorSize:"univariate-color-size",relationship:"relationship",predominance:"predominance",dotDensity:"dot-density",flow:"flow"}),AuthoringInfo_m=new jsonMap/* JSONMap */.J({classedSize:"class-breaks-size",classedColor:"class-breaks-color",univariateColorSize:"univariate-color-size",relationship:"relationship",predominance:"predominance",dotDensity:"dot-density"}),f=["inches","feet","yards","miles","nautical-miles","millimeters","centimeters","decimeters","meters","kilometers","decimal-degrees"],v=["high-to-low","above-and-below","above","below","90-10"],w=["flow-line","wave-front"],b=["caret","circle-caret","arrow","circle-arrow","plus-minus","circle-plus-minus","square","circle","triangle","happy-sad","thumb","custom"];let g=c=class extends JSONSupport/* JSONSupport */.oY{constructor(e){super(e),this.colorRamp=null,this.fadeRatio=null,this.isAutoGenerated=!1,this.lengthUnit=null,this.maxSliderValue=null,this.minSliderValue=null,this.visualVariables=null}get classificationMethod(){const e=this._get("classificationMethod"),t=this.type;return t&&"relationship"!==t?"class-breaks-size"===t||"class-breaks-color"===t?e||"manual":null:e}set classificationMethod(e){this._set("classificationMethod",e)}readColorRamp(e){return e?(0,colorRamps/* fromJSON */.r)(e):void 0}get fields(){return this.type&&"predominance"!==this.type?null:this._get("fields")}set fields(e){this._set("fields",e)}get field1(){return this.type&&"relationship"!==this.type?null:this._get("field1")}set field1(e){this._set("field1",e)}get field2(){return this.type&&"relationship"!==this.type?null:this._get("field2")}set field2(e){this._set("field2",e)}get flowTheme(){return"flow"===this.type?this._get("flowTheme"):null}set flowTheme(e){this._set("flowTheme",e)}get focus(){return this.type&&"relationship"!==this.type?null:this._get("focus")}set focus(e){this._set("focus",e)}get numClasses(){return this.type&&"relationship"!==this.type?null:this._get("numClasses")}set numClasses(e){this._set("numClasses",e)}get statistics(){return"univariate-color-size"===this.type&&"above-and-below"===this.univariateTheme?this._get("statistics"):null}set statistics(e){this._set("statistics",e)}get standardDeviationInterval(){const e=this.type;return e&&"relationship"!==e&&"class-breaks-size"!==e&&"class-breaks-color"!==e||this.classificationMethod&&"standard-deviation"!==this.classificationMethod?null:this._get("standardDeviationInterval")}set standardDeviationInterval(e){this._set("standardDeviationInterval",e)}get type(){return this._get("type")}set type(e){let t=e;"classed-size"===e?t="class-breaks-size":"classed-color"===e&&(t="class-breaks-color"),this._set("type",t)}get univariateSymbolStyle(){return"univariate-color-size"===this.type&&"above-and-below"===this.univariateTheme?this._get("univariateSymbolStyle"):null}set univariateSymbolStyle(e){this._set("univariateSymbolStyle",e)}get univariateTheme(){return"univariate-color-size"===this.type?this._get("univariateTheme"):null}set univariateTheme(e){this._set("univariateTheme",e)}clone(){return new c({classificationMethod:this.classificationMethod,colorRamp:(0,lang/* clone */.o8)(this.colorRamp),fadeRatio:(0,lang/* clone */.o8)(this.fadeRatio),fields:this.fields?.slice(0),field1:(0,lang/* clone */.o8)(this.field1),field2:(0,lang/* clone */.o8)(this.field2),isAutoGenerated:this.isAutoGenerated,focus:this.focus,numClasses:this.numClasses,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,lengthUnit:this.lengthUnit,statistics:this.statistics,standardDeviationInterval:this.standardDeviationInterval,type:this.type,visualVariables:this.visualVariables&&this.visualVariables.map((e=>e.clone())),univariateSymbolStyle:this.univariateSymbolStyle,univariateTheme:this.univariateTheme,flowTheme:this.flowTheme})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:AuthoringInfo_h.apiValues,value:null,json:{type:AuthoringInfo_h.jsonValues,read:AuthoringInfo_h.read,write:AuthoringInfo_h.write,origins:{"web-document":{default:"manual",type:AuthoringInfo_h.jsonValues,read:AuthoringInfo_h.read,write:AuthoringInfo_h.write}}}})],g.prototype,"classificationMethod",null),(0,tslib_es6._)([(0,property/* property */.MZ)({types:colorRamps/* types */.g,json:{write:!0}})],g.prototype,"colorRamp",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("colorRamp")],g.prototype,"readColorRamp",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],g.prototype,"fadeRatio",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],value:null,json:{write:!0}})],g.prototype,"fields",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:AuthoringInfoFieldInfo_p,value:null,json:{write:!0}})],g.prototype,"field1",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:AuthoringInfoFieldInfo_p,value:null,json:{write:!0}})],g.prototype,"field2",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:w,value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],g.prototype,"flowTheme",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["HH","HL","LH","LL"],value:null,json:{write:!0}})],g.prototype,"focus",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1}}}})],g.prototype,"isAutoGenerated",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,value:null,json:{type:ensureType/* Integer */.jz,write:!0}})],g.prototype,"numClasses",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:f,json:{type:f,read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],g.prototype,"lengthUnit",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],g.prototype,"maxSliderValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],g.prototype,"minSliderValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Object,value:null,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],g.prototype,"statistics",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[.25,.33,.5,1],value:null,json:{type:[.25,.33,.5,1],write:!0}})],g.prototype,"standardDeviationInterval",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:AuthoringInfo_y.apiValues,value:null,json:{type:AuthoringInfo_y.jsonValues,read:AuthoringInfo_y.read,write:AuthoringInfo_y.write,origins:{"web-scene":{type:AuthoringInfo_m.jsonValues,write:{writer:AuthoringInfo_m.write,overridePolicy:e=>({enabled:"flow"!==e})}}}}})],g.prototype,"type",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[h],json:{write:!0}})],g.prototype,"visualVariables",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:b,value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],g.prototype,"univariateSymbolStyle",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:v,value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],g.prototype,"univariateTheme",null),g=c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.AuthoringInfo")],g);const j=g;


/***/ }),

/***/ 87729:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _commonProperties_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16758);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var i;let l=i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(s){super(s),this.description=null,this.label=null,this.minValue=null,this.maxValue=0,this.symbol=null}clone(){return new i({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,symbol:this.symbol?this.symbol.clone():null})}getMeshHash(){const s=JSON.stringify(this.symbol);return`${this.minValue}.${this.maxValue}.${s}`}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],l.prototype,"description",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],l.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],l.prototype,"minValue",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],l.prototype,"maxValue",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)(_commonProperties_js__WEBPACK_IMPORTED_MODULE_7__/* .requiredRendererSymbolProperty */ .Wp)],l.prototype,"symbol",void 0),l=i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.renderers.support.ClassBreakInfo")],l);const a=l;


/***/ }),

/***/ 57081:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DictionaryLoader: () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96220);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86394);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98849);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(539);
/* harmony import */ var _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89926);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40189);
/* harmony import */ var _core_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(96274);
/* harmony import */ var _core_Version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50579);
/* harmony import */ var _layers_support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79005);
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(28965);
/* harmony import */ var _symbols_CIMSymbol_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(54394);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const h="esri.renderers.support.DictionaryLoader",u={type:"CIMSimpleLineCallout",lineSymbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",width:.5,color:[0,0,0,255]}]}};class y{constructor(e,t,s){this.config=null,this.fieldMap=null,this.url=null,this._ongoingRequests=new Map,this._symbolCache=new _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_5__/* .LRUCache */ .q(100),this._dictionaryVersion=null,this._fieldIndex=null,this._dictionaryPromise=null,this.url=e,this.config=t,this.fieldMap=s}getSymbolFields(){return this._symbolFields}async getSymbolAsync(t,s){let i;this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(s));try{i=await this._dictionaryPromise}catch(d){if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .isAbortError */ .zf)(d))return this._dictionaryPromise=null,null}const o=this._dictionaryVersion&&this._dictionaryVersion.since(4,0),l={};if(this.fieldMap)for(const e of this._symbolFields){const s=this._getFieldName(this.fieldMap[e]);if(s){const i=t.attributes[s];l[e]=o?i:null!=i?""+t.attributes[s]:""}else l[e]=""}let a=null;try{a=i?.(l,s)}catch(g){return null}if(!a||"string"!=typeof a)return null;const c=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_7__/* .numericHash */ .Wm)(a).toString(),m=this._symbolCache.get(c);if(m)return m.catch((()=>{this._symbolCache.pop(c)})),m;const f=a.split(";"),h=[],u=[];for(const r of f)if(r)if(r.includes("po:")){const t=r.substr(3).split("|");if(3===t.length){const s=t[0],i=t[1];let o=t[2];if("DashTemplate"===i)o=o.split(" ").map((e=>Number(e)));else if("Color"===i){const t=new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(o).toRgba();o=[t[0],t[1],t[2],255*t[3]]}else o=Number(o);u.push({primitiveName:s,propertyName:i,value:o})}}else if(r.includes("|")){for(const e of r.split("|"))if(this._itemNames.has(e)){h.push(e);break}}else this._itemNames.has(r)&&h.push(r);const y=null==t.geometry||!t.geometry.hasZ&&"point"===t.geometry.type,p=this._cimPartsToCIMSymbol(h,u,y,s);return this._symbolCache.put(c,p,1),p}async fetchResources(e){if(this._dictionaryPromise)return this._dictionaryPromise;if(!this.url)return void _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.getLogger(h).error("no valid URL!");const o=(0,_request_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this.url+"/resources/styles/dictionary-info.json",{responseType:"json",query:{f:"json"},signal:null!=e?e.signal:null}),[{data:r}]=await Promise.all([o,(0,_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_10__/* .loadArcade */ .lw)()]);if(!r)throw this._dictionaryPromise=null,new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A("esri.renderers.DictionaryRenderer","Bad dictionary data!");const{authoringInfo:n,dictionary_version:f,expression:u,itemsNames:y}=r,p=u;let d=!1;f&&(this._dictionaryVersion=_core_Version_js__WEBPACK_IMPORTED_MODULE_8__/* .Version */ .R.parse(f),d=this._dictionaryVersion.since(4,0)),this._refSymbolUrlTemplate=this.url+"/"+r.cimRefTemplateUrl,this._itemNames=new Set(y),this._symbolFields=n.symbol;const g={};if(this.config){const e=this.config;for(const t in e)g[t]=e[t]}if(n.configuration)for(const t of n.configuration)g.hasOwnProperty(t.name)||(g[t.name]=t.value);const b=[];if(e?.fields&&this.fieldMap)for(const t of this._symbolFields){const s=this.fieldMap[t],i=e.fields.filter((e=>e.name.toLowerCase()===s?.toLowerCase()));i.length>0&&b.push({...i[0],type:d?i[0].type:"esriFieldTypeString"})}b.length>0&&(this._fieldIndex=new _layers_support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A(b));const _=(0,_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_10__/* .createDictionaryExpression */ .xR)(p,null!=e?e.spatialReference:null,b,g).then((e=>{const t={scale:0};return(s,i)=>{if(null==e)return null;const o=e.repurposeFeature({geometry:null,attributes:s});return t.scale=null!=i?i.scale??void 0:void 0,e.evaluate({$feature:o,$view:t},e.services)}})).catch((e=>(_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.getLogger(h).error("Creating dictinoary expression failed:",e),null)));return this._dictionaryPromise=_,_}async _cimPartsToCIMSymbol(e,t,s,i){const o=new Array(e.length);for(let l=0;l<e.length;l++)o[l]=this._getSymbolPart(e[l],i);const r=await Promise.all(o),n=this.fieldMap;if(n)for(const l of r)p(l,n);return new _symbols_CIMSymbol_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A({data:this._combineSymbolParts(r,t,s)})}async _getSymbolPart(e,s){if(this._ongoingRequests.has(e))return this._ongoingRequests.get(e).then((e=>e.data));const i=this._refSymbolUrlTemplate.replaceAll(/\{itemName\}/gi,e),o=(0,_request_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(i,{responseType:"json",query:{f:"json"},...s});this._ongoingRequests.set(e,o);try{return(await o).data}catch(r){throw this._ongoingRequests.delete(e),r}}_combineSymbolParts(e,t,s){if(!e||0===e.length)return null;const i={...e[0]};if(e.length>1){i.symbolLayers=[];for(const t of e){const e=t;i.symbolLayers.unshift(...e.symbolLayers)}}return s&&(i.callout=u),{type:"CIMSymbolReference",symbol:i,primitiveOverrides:t}}_getFieldName(e){if(null!==this._fieldIndex){const t=this._fieldIndex.get(e);return t?t.name:e}return e}}function p(e,t){if(!e)return;const s=e.symbolLayers;if(!s)return;let i=s.length;for(;i--;){const e=s[i];if(e&&!1!==e.enable&&"CIMVectorMarker"===e.type)d(e,t)}}function d(e,t){const s=e.markerGraphics;if(s)for(const i of s){if(!i)continue;const e=i.symbol;if(e)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":p(e,t);break;case"CIMTextSymbol":e.fieldMap=t}}}


/***/ }),

/***/ 50769:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96220);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var c;let i=c=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY{constructor(o){super(o),this.color=null,this.ratio=null}clone(){return new c({color:this.color,ratio:this.ratio})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,json:{type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__/* .Integer */ .jz],default:null,write:!0}})],i.prototype,"color",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:Number,json:{write:!0}})],i.prototype,"ratio",void 0),i=c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.renderers.support.HeatmapColorStop")],i);const a=i;


/***/ }),

/***/ 38785:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var s;let p=s=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(){super(...arguments),this.title=null}clone(){return new s({title:this.title})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],p.prototype,"title",void 0),p=s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.renderers.support.LegendOptions")],p);


/***/ }),

/***/ 3324:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _commonProperties_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16758);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var l;let p=l=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(o){super(o),this.description=null,this.label=null,this.symbol=null,this.value=null}clone(){return new l({value:this.value,description:this.description,label:this.label,symbol:this.symbol?this.symbol.clone():null})}getMeshHash(){const o=JSON.stringify(this.symbol?.toJSON());return`${this.value}.${o}`}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],p.prototype,"description",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],p.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)(_commonProperties_js__WEBPACK_IMPORTED_MODULE_7__/* .requiredRendererSymbolProperty */ .Wp)],p.prototype,"symbol",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)(_commonProperties_js__WEBPACK_IMPORTED_MODULE_7__/* .uniqueValueProperty */ .Ug)],p.prototype,"value",void 0),p=l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.renderers.support.UniqueValueInfo")],p);const n=p;


/***/ }),

/***/ 16758:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   As: () => (/* binding */ m),
/* harmony export */   Ug: () => (/* binding */ w),
/* harmony export */   Wp: () => (/* binding */ n),
/* harmony export */   z4: () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30822);
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76724);
/* harmony import */ var _core_accessorSupport_extensions_serializableProperty_reader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61985);
/* harmony import */ var _symbols_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38463);
/* harmony import */ var _symbols_Symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77441);
/* harmony import */ var _symbols_PolygonSymbol3D_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65216);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const y={types:_symbols_js__WEBPACK_IMPORTED_MODULE_0__/* .symbolTypesRenderer */ .xK,json:{write:{writer:_symbols_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .write */ .M9},origins:{"web-scene":{types:_symbols_js__WEBPACK_IMPORTED_MODULE_0__/* .symbolTypesRenderer3D */ .On,write:{writer:_symbols_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .write */ .M9},read:{reader:(0,_core_accessorSupport_extensions_serializableProperty_reader_js__WEBPACK_IMPORTED_MODULE_2__/* .createTypeReader */ .C)({types:_symbols_js__WEBPACK_IMPORTED_MODULE_0__/* .symbolTypesRenderer3D */ .On})}}}}},n=(0,_core_object_js__WEBPACK_IMPORTED_MODULE_1__/* .deepMerge */ .$N)({json:{origins:{"web-scene":{write:{isRequired:!0}}}}},y),m={types:{base:_symbols_Symbol_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,key:"type",typeMap:{"simple-fill":_symbols_js__WEBPACK_IMPORTED_MODULE_0__/* .symbolTypes */ .Es.typeMap["simple-fill"],"picture-fill":_symbols_js__WEBPACK_IMPORTED_MODULE_0__/* .symbolTypes */ .Es.typeMap["picture-fill"],"polygon-3d":_symbols_js__WEBPACK_IMPORTED_MODULE_0__/* .symbolTypes */ .Es.typeMap["polygon-3d"]}},json:{write:{writer:_symbols_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .write */ .M9},origins:{"web-scene":{type:_symbols_PolygonSymbol3D_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,write:{writer:_symbols_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .write */ .M9}}}}},w={cast:e=>null==e||"string"==typeof e||"number"==typeof e?e:`${e}`,json:{type:String,write:{writer:(e,r)=>{r.value=e?.toString()}}}};


/***/ }),

/***/ 27927:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Lh: () => (/* binding */ l),
/* harmony export */   O3: () => (/* binding */ u),
/* harmony export */   PU: () => (/* binding */ c),
/* harmony export */   YW: () => (/* binding */ y),
/* harmony export */   ex: () => (/* binding */ a),
/* harmony export */   hv: () => (/* binding */ m),
/* harmony export */   oQ: () => (/* binding */ s),
/* harmony export */   zp: () => (/* binding */ i)
/* harmony export */ });
/* unused harmony exports createHeatmapImageData, createValueFunctionCursor */
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92504);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89882);
/* harmony import */ var _chunks_vec4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25102);
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52712);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const a=2.4;function i(t){return (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .px2pt */ .PN)(t*a)}function c(t){return (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .pt2px */ .Lz)(t)/a}function f(r,n,e,a){let{color:i,ratio:c}=n,{color:f,ratio:u}=e;if(u===c){const t=1e-6;1===u?c-=t:u+=t}const s=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .clamp */ .qE)((a-c)/(u-c),0,1);(0,_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_1__.l)(r,i.toArray(),f.toArray(),s)}function u(t){const r=512,n=new Uint8ClampedArray(4*r);if(t=t.filter((({ratio:t})=>t>=0&&t<=1)).sort(((t,r)=>t.ratio-r.ratio)).map((({color:t,ratio:r})=>({color:t,ratio:Math.max(r,.001)}))),t.length<1)return n;let o=t[0],a=t[0],i=1;const c=(0,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__.c)();for(let e=0;e<r;e++){const u=(e+.5)/r;for(;u>a.ratio&&i<t.length;)o=a,a=t[i++];f(c,o,a,u),n.set(c,4*e)}return n}function s(t,r,o,e){const{radius:a,fieldOffset:i,field:c}=r,f=Math.round((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .pt2px */ .Lz)(a)),u=new Float64Array(o*e);let s,l=Number.NEGATIVE_INFINITY;const h=d(c,i),y=new Set;for(const n of t){const t=n.getCursor();for(;t.next();){const r=t.getObjectId();if(y.has(r))continue;y.add(r);const n=t.readLegacyPointGeometry(),a=128;if(n.x<-a||n.x>=o+a||n.y<-a||n.y>e+a)continue;const i=+h(t),c=Math.max(0,Math.round(n.x)-f),d=Math.max(0,Math.round(n.y)-f),g=Math.min(e,Math.round(n.y)+f),A=Math.min(o,Math.round(n.x)+f);for(let t=d;t<g;t++)for(let r=c;r<A;r++){const e=t*o+r,a=m(n.x-r,n.y-t,f);s=u[e]+=a*i,s>l&&(l=s)}}}return{matrix:u.buffer,max:l}}function l(t,r,n,o,e,a){t.canvas.width=t.canvas.height=r,t.clearRect(0,0,r,r);const i=t.getImageData(0,0,r,r);n&&o&&i.data.set(new Uint8ClampedArray(h(r,n,o,e,a))),t.putImageData(i,0,0)}function h(r,n,o,e,a){const i=new Uint32Array(r*r),c="buffer"in n?n:new Float64Array(n),f="buffer"in o?new Uint32Array(o.buffer):new Uint32Array(new Uint8Array(o).buffer),u=f.length/(a-e);for(let s=0;s<c.length;s++){const r=c[s],n=Math.floor((r-e)*u);i[s]=f[(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .clamp */ .qE)(n,0,f.length-1)]}return i.buffer}function m(t,r,n){const o=Math.sqrt(t**2+r**2)/n;return o>1?0:3/(Math.PI*n**2)*(1-o**2)**2}function y(t,r){return"function"==typeof t?t:t?"string"==typeof r?r=>-1*+r[t]:n=>+n[t]+r:()=>1}function d(t,r){return null!=t?"string"==typeof r?r=>-1*+r.readAttribute(t):n=>+n.readAttribute(t)+r:t=>1}


/***/ }),

/***/ 48887:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ o),
/* harmony export */   r: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _core_Warning_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68659);
/* harmony import */ var _core_accessorSupport_extensions_serializableProperty_reader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61985);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49169);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function t(e,r){return o(e,null,r)}const s=(0,_core_accessorSupport_extensions_serializableProperty_reader_js__WEBPACK_IMPORTED_MODULE_1__/* .createTypeReader */ .C)({types:_types_js__WEBPACK_IMPORTED_MODULE_2__/* .rendererTypes */ .H});function o(r,n,t){return r?r&&(r.styleName||r.styleUrl)&&"uniqueValue"!==r.type?(t?.messages&&t.messages.push(new _core_Warning_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+r.type+"'",{definition:r,context:t})),null):s(r,n,t):null}


/***/ }),

/***/ 10301:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92976);
/* harmony import */ var _geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99817);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const m={unknown:1,inches:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","inches"),feet:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","feet"),"us-feet":(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","us-feet"),yards:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","yards"),miles:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","miles"),"nautical-miles":(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","nautical-miles"),millimeters:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","millimeters"),centimeters:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","centimeters"),decimeters:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","decimeters"),meters:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","meters"),kilometers:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","kilometers"),"decimal-degrees":1/(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .lengthToDegrees */ .vl)(1,"meters",_geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_1__/* .earth */ .$O.radius)};


/***/ }),

/***/ 21484:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12690);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40189);
/* harmony import */ var _core_Warning_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68659);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function t(t,i,n){const s=t&&t.getAtOrigin&&t.getAtOrigin("renderer",i.origin);if(s&&"unique-value"===s.type&&s.styleOrigin){const a=await (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .result */ .Ke)(s.populateFromStyle());if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .throwIfAborted */ .Te)(n),!1===a.ok){const e=a.error;i?.messages&&i.messages.push(new _core_Warning_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A("renderer:style-reference",`Failed to create unique value renderer from style reference: ${e.message}`,{error:e,context:i})),t.clear("renderer",i?.origin)}}}


/***/ }),

/***/ 49169:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ m),
/* harmony export */   X: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(539);
/* harmony import */ var _ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17671);
/* harmony import */ var _DictionaryRenderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84685);
/* harmony import */ var _DotDensityRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20299);
/* harmony import */ var _HeatmapRenderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25498);
/* harmony import */ var _PieChartRenderer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79300);
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76589);
/* harmony import */ var _SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47347);
/* harmony import */ var _UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2692);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const m={key:"type",base:_Renderer_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,typeMap:{heatmap:_HeatmapRenderer_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,simple:_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,"unique-value":_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,"class-breaks":_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,"dot-density":_DotDensityRenderer_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,dictionary:_DictionaryRenderer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,"pie-chart":_PieChartRenderer_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A},errorContext:"renderer"},u={key:"type",base:_Renderer_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,typeMap:{simple:_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,"unique-value":_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,"class-breaks":_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,heatmap:_HeatmapRenderer_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A},errorContext:"renderer",validate:p};function p(e){switch(e.type){case"simple":return c(e);case"unique-value":return f(e);case"class-breaks":return d(e);case"heatmap":return e}}function c(r){if(r.symbol)return r;_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getLogger("esri.renderers.support.types").error("Removed invalid 'simple' renderer without a symbol from web scene.")}function f(r){const s=r.uniqueValueInfos,t=s?.filter((({symbol:r,label:s},t)=>(r||_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getLogger("esri.renderers.support.types").error(`Removed invalid unique value info ([${t}] ${s}) without a symbol from web scene.`),!!r)));return t?.length!==s?.length&&(r.uniqueValueInfos=t),r}function d(r){const s=r.classBreakInfos,t=s?.filter((({symbol:r,label:s},t)=>(r||_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getLogger("esri.renderers.support.types").error(`Removed invalid class break info ([${t}] ${s}) without a symbol from web scene.`),!!r)));return t?.length!==s?.length&&(r.classBreakInfos=t),r}


/***/ }),

/***/ 68090:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98849);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77542);
/* harmony import */ var _VisualVariable_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57860);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var p;let a=p=class extends _VisualVariable_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A{constructor(e){super(e),this.axis=null,this.type="rotation",this.rotationType="geographic",this.valueExpressionTitle=null}get cache(){return{hasExpression:!!this.valueExpression,compiledFunc:null}}writeValueExpressionTitleWebScene(e,s,o,r){if(r?.messages){const e=`visualVariables[${this.index}]`;r.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("property:unsupported",this.type+"VisualVariable.valueExpressionTitle is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:e+".valueExpressionTitle",context:r}))}}clone(){return new p({axis:this.axis,rotationType:this.rotationType,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,legendOptions:this.legendOptions?.clone()})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({readOnly:!0})],a.prototype,"cache",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:["heading","tilt","roll"],json:{origins:{"web-scene":{default:"heading",write:!0}}}})],a.prototype,"axis",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:["rotation"],json:{type:["rotationInfo"]}})],a.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:["geographic","arithmetic"],json:{write:!0,origins:{"web-document":{write:!0,default:"geographic"}}}})],a.prototype,"rotationType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],a.prototype,"valueExpressionTitle",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__/* .writer */ .K)("web-scene","valueExpressionTitle")],a.prototype,"writeValueExpressionTitleWebScene",null),a=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.renderers.visualVariables.RotationVariable")],a);const n=a;


/***/ }),

/***/ 14977:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ b)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/screenUtils.js
var screenUtils = __webpack_require__(89882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(4130);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/visualVariables/VisualVariable.js
var VisualVariable = __webpack_require__(57860);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/visualVariables/support/SizeStop.js
var SizeStop = __webpack_require__(68745);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/visualVariables/support/VisualVariableLegendOptions.js
var VisualVariableLegendOptions = __webpack_require__(45327);
;// ../node_modules/@arcgis/core/renderers/visualVariables/support/SizeVariableLegendOptions.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var t;let i=t=class extends VisualVariableLegendOptions/* default */.A{constructor(){super(...arguments),this.customValues=null}clone(){return new t({title:this.title,showLegend:this.showLegend,customValues:this.customValues?.slice(0)})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number],json:{write:!0}})],i.prototype,"customValues",void 0),i=t=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.visualVariables.support.SizeVariableLegendOptions")],i);const a=i;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/visualVariables/support/sizeVariableUtils.js
var sizeVariableUtils = __webpack_require__(99412);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/visualVariables/support/visualVariableUtils.js
var visualVariableUtils = __webpack_require__(28479);
;// ../node_modules/@arcgis/core/renderers/visualVariables/SizeVariable.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var z;const v=new jsonMap/* JSONMap */.J({width:"width",depth:"depth",height:"height",widthAndDepth:"width-and-depth",all:"all"}),w=new jsonMap/* JSONMap */.J({unknown:"unknown",inch:"inches",foot:"feet",yard:"yards",mile:"miles","nautical-mile":"nautical-miles",millimeter:"millimeters",centimeter:"centimeters",decimeter:"decimeters",meter:"meters",kilometer:"kilometers","decimal-degree":"decimal-degrees"});function g(e){if(null!=e)return"string"==typeof e||"number"==typeof e?(0,screenUtils/* toPt */.cr)(e):"size"===e.type?(0,sizeVariableUtils/* isSizeVariable */.of)(e)?e:(delete(e={...e}).type,new V(e)):void 0}function f(e,t,i){if("object"!=typeof e)return e;const s=new V;return s.read(e,i),s}let V=z=class extends VisualVariable/* default */.A{constructor(e){super(e),this.axis=null,this.legendOptions=null,this.normalizationField=null,this.scaleBy=null,this.target=null,this.type="size",this.useSymbolValue=null,this.valueExpression=null,this.valueRepresentation=null,this.valueUnit=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null,isScaleDriven:null!=this.valueExpression&&visualVariableUtils.viewScaleRE.test(this.valueExpression)}}set expression(e){Logger/* default */.A.getLogger(this).warn("'expression' is deprecated since version 4.2. Use 'valueExpression' instead. The only supported expression is 'view.scale'."),"view.scale"===e?(this.valueExpression="$view.scale",this._set("expression",e)):this._set("expression",null)}set index(e){(0,sizeVariableUtils/* isSizeVariable */.of)(this.maxSize)&&(this.maxSize.index=`visualVariables[${e}].maxSize`),(0,sizeVariableUtils/* isSizeVariable */.of)(this.minSize)&&(this.minSize.index=`visualVariables[${e}].minSize`),this._set("index",e)}get inputValueType(){return (0,sizeVariableUtils/* getInputValueType */.eh)(this)}set maxDataValue(e){e&&this.stops&&(Logger/* default */.A.getLogger(this).warn("cannot set maxDataValue when stops is not null."),e=null),this._set("maxDataValue",e)}set maxSize(e){e&&this.stops&&(Logger/* default */.A.getLogger(this).warn("cannot set maxSize when stops is not null."),e=null),this._set("maxSize",e)}castMaxSize(e){return g(e)}readMaxSize(e,t,i){return f(e,t,i)}set minDataValue(e){e&&this.stops&&(Logger/* default */.A.getLogger(this).warn("cannot set minDataValue when stops is not null."),e=null),this._set("minDataValue",e)}set minSize(e){e&&this.stops&&(Logger/* default */.A.getLogger(this).warn("cannot set minSize when stops is not null."),e=null),this._set("minSize",e)}castMinSize(e){return g(e)}readMinSize(e,t,i){return f(e,t,i)}get arcadeRequired(){return!!this.valueExpression||(null!=this.minSize&&"object"==typeof this.minSize&&this.minSize.arcadeRequired||null!=this.maxSize&&"object"==typeof this.maxSize&&this.maxSize.arcadeRequired)}set stops(e){null==this.minDataValue&&null==this.maxDataValue&&null==this.minSize&&null==this.maxSize?e&&Array.isArray(e)&&(e=e.filter((e=>!!e))).sort(((e,t)=>e.value-t.value)):e&&(Logger/* default */.A.getLogger(this).warn("cannot set stops when one of minDataValue, maxDataValue, minSize or maxSize is not null."),e=null),this._set("stops",e)}get transformationType(){return (0,sizeVariableUtils/* getTransformationType */.KZ)(this,this.inputValueType)}readValueExpression(e,t){return e||t.expression&&"$view.scale"}writeValueExpressionWebScene(e,i,s,r){if("$view.scale"===e){if(r?.messages){const e=this.index,i="string"==typeof e?e:`visualVariables[${e}]`;r.messages.push(new Error/* default */.A("property:unsupported",this.type+"VisualVariable.valueExpression = '$view.scale' is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:i+".valueExpression",context:r}))}}else i[s]=e}readValueUnit(e){return e?w.read(e):null}clone(){return new z({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:(0,sizeVariableUtils/* isSizeVariable */.of)(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:(0,sizeVariableUtils/* isSizeVariable */.of)(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops?.map((e=>e.clone())),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions?.clone()})}flipSizes(){if(this.transformationType===sizeVariableUtils/* TransformationType */._w.ClampedLinear){const{minSize:e,maxSize:t}=this;return this.minSize=t,this.maxSize=e,this}if(this.transformationType===sizeVariableUtils/* TransformationType */._w.Stops){const e=this.stops;if(!e)return this;const t=e.map((e=>e.size)).reverse(),i=e.length;for(let s=0;s<i;s++)e[s].size=t[s];return this}return this}getAttributeHash(){return`${super.getAttributeHash()}-${this.target}-${this.normalizationField}`}_interpolateData(){return this.stops?.map((e=>e.value||0))}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],V.prototype,"cache",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:v.apiValues,json:{type:v.jsonValues,origins:{"web-map":{read:!1}},read:v.read,write:v.write}})],V.prototype,"axis",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,value:null,json:{read:!1}})],V.prototype,"expression",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],V.prototype,"index",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0})],V.prototype,"inputValueType",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:a,json:{write:!0}})],V.prototype,"legendOptions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,value:null,json:{write:!0}})],V.prototype,"maxDataValue",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,value:null,json:{write:!0}})],V.prototype,"maxSize",null),(0,tslib_es6._)([(0,cast/* cast */.w)("maxSize")],V.prototype,"castMaxSize",null),(0,tslib_es6._)([(0,reader/* reader */.w)("maxSize")],V.prototype,"readMaxSize",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,value:null,json:{write:!0}})],V.prototype,"minDataValue",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,value:null,json:{write:!0}})],V.prototype,"minSize",null),(0,tslib_es6._)([(0,cast/* cast */.w)("minSize")],V.prototype,"castMinSize",null),(0,tslib_es6._)([(0,reader/* reader */.w)("minSize")],V.prototype,"readMinSize",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],V.prototype,"normalizationField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],V.prototype,"arcadeRequired",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],V.prototype,"scaleBy",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[SizeStop/* default */.A],value:null,json:{write:!0}})],V.prototype,"stops",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["outline"],json:{write:!0}})],V.prototype,"target",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0})],V.prototype,"transformationType",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["size"],json:{type:["sizeInfo"]}})],V.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0,origins:{"web-map":{read:!1}}}})],V.prototype,"useSymbolValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],V.prototype,"valueExpression",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("valueExpression",["valueExpression","expression"])],V.prototype,"readValueExpression",null),(0,tslib_es6._)([(0,writer/* writer */.K)("web-scene","valueExpression")],V.prototype,"writeValueExpressionWebScene",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["radius","diameter","area","width","distance"],json:{write:!0}})],V.prototype,"valueRepresentation",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:w.apiValues,json:{write:w.write,origins:{"web-map":{read:!1},"web-scene":{write:!0},"portal-item":{write:!0}}}})],V.prototype,"valueUnit",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("valueUnit")],V.prototype,"readValueUnit",null),V=z=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.visualVariables.SizeVariable")],V);const b=V;


/***/ }),

/***/ 57860:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59851);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(539);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4130);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73446);
/* harmony import */ var _support_VisualVariableLegendOptions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45327);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const a=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONMap */ .J({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"});let u=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY{constructor(e){super(e),this.index=null,this.type=null,this.field=null,this.valueExpression=null,this.valueExpressionTitle=null,this.legendOptions=null}castField(e){return null==e?e:"function"==typeof e?(_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.getLogger(this).error(".field: field must be a string value"),null):(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__/* .ensureString */ .GX)(e)}get arcadeRequired(){return!!this.valueExpression}clone(){}getAttributeHash(){return`${this.type}-${this.field}-${this.valueExpression}`}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)()],u.prototype,"index",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:a.apiValues,readOnly:!0,json:{read:a.read,write:a.write}})],u.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:!0}})],u.prototype,"field",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__/* .cast */ .w)("field")],u.prototype,"castField",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:!0}})],u.prototype,"valueExpression",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:!0}})],u.prototype,"valueExpressionTitle",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({readOnly:!0})],u.prototype,"arcadeRequired",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:_support_VisualVariableLegendOptions_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"legendOptions",void 0),u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.renderers.visualVariables.VisualVariable")],u);const c=u;


/***/ }),

/***/ 5001:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96220);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77542);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var i;let c=i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY{constructor(r){super(r),this.color=null,this.label=null,this.value=null}writeValue(r,o,e){o[e]=r??0}clone(){return new i({color:this.color&&this.color.clone(),label:this.label,value:this.value})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,json:{type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__/* .Integer */ .jz],write:!0}})],c.prototype,"color",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{write:!0}})],c.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:Number,json:{write:{writerEnsuresNonNull:!0}}})],c.prototype,"value",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__/* .writer */ .K)("value")],c.prototype,"writeValue",null),c=i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.renderers.visualVariables.support.ColorStop")],c);const a=c;


/***/ }),

/***/ 68745:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89882);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var p;let i=p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(r){super(r),this.label=null,this.size=null,this.value=null}clone(){return new p({label:this.label,size:this.size,value:this.value})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],i.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number,cast:_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .toPt */ .cr,json:{write:!0}})],i.prototype,"size",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number,json:{write:!0}})],i.prototype,"value",void 0),i=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.renderers.visualVariables.support.SizeStop")],i);const l=i;


/***/ }),

/***/ 45327:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/* harmony import */ var _support_LegendOptions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38785);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var t;let p=t=class extends _support_LegendOptions_js__WEBPACK_IMPORTED_MODULE_6__/* .LegendOptions */ .q{constructor(){super(...arguments),this.showLegend=null}clone(){return new t({title:this.title,showLegend:this.showLegend})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:Boolean,json:{write:!0}})],p.prototype,"showLegend",void 0),p=t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.renderers.visualVariables.support.VisualVariableLegendOptions")],p);const i=p;


/***/ }),

/***/ 99412:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KZ: () => (/* binding */ a),
/* harmony export */   Yf: () => (/* binding */ n),
/* harmony export */   _w: () => (/* binding */ i),
/* harmony export */   eh: () => (/* binding */ t),
/* harmony export */   gf: () => (/* binding */ l),
/* harmony export */   of: () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var n,i;function e(n){return n&&"esri.renderers.visualVariables.SizeVariable"===n.declaredClass}function l(n){return null!=n&&!isNaN(n)&&isFinite(n)}function t(i){return i.valueExpression?n.Expression:i.field&&"string"==typeof i.field?n.Field:n.Unknown}function a(e,l){const a=l||t(e),o=e.valueUnit||"unknown";return a===n.Unknown?i.Constant:e.stops?i.Stops:null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?i.ClampedLinear:"unknown"===o?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?i.Proportional:i.Additive:i.Identity:i.RealWorldSize}!function(n){n.Unknown="unknown",n.Expression="expression",n.Field="field"}(n||(n={})),function(n){n.Unknown="unknown",n.Stops="stops",n.ClampedLinear="clamped-linear",n.Proportional="proportional",n.Additive="additive",n.Constant="constant",n.Identity="identity",n.RealWorldSize="real-world-size"}(i||(i={}));


/***/ }),

/***/ 28479:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllSizes: () => (/* binding */ N),
/* harmony export */   getColor: () => (/* binding */ p),
/* harmony export */   getOpacity: () => (/* binding */ v),
/* harmony export */   getRotationAngle: () => (/* binding */ b),
/* harmony export */   getSize: () => (/* binding */ V),
/* harmony export */   getSizeForValue: () => (/* binding */ C),
/* harmony export */   getSizeFromNumberOrVariable: () => (/* binding */ x),
/* harmony export */   getSizeRangeAtScale: () => (/* binding */ D),
/* harmony export */   getVisualVariableValues: () => (/* binding */ M),
/* harmony export */   viewScaleRE: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96220);
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25707);
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73345);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(539);
/* harmony import */ var _support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10301);
/* harmony import */ var _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99412);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const c=_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),u=new _Graphic_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,f=Math.PI,d=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;function p(a,i,n){const r="visualVariables"in a&&a.visualVariables?a.visualVariables.find((e=>"color"===e.type)):a;if(!r)return;if("esri.renderers.visualVariables.ColorVariable"!==r.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable");const t="number"==typeof i,s=t?null:i,l=s?.attributes;let o=t?i:null;const u=r.field,{ipData:f,hasExpression:d}=r.cache;let p=r.cache.compiledFunc;if(!u&&!d){const e=r.stops;return e&&e[0]&&e[0].color}if("number"!=typeof o)if(d){if(null==n?.arcade)return void c.error("Use of arcade expressions requires an arcade context");const e={viewingMode:n.viewingMode,scale:n.scale,spatialReference:n.spatialReference},a=n.arcade.arcadeUtils,i=a.getViewInfo(e),t=a.createExecContext(s,i,n.timeZone);if(!p){const e=a.createSyntaxTree(r.valueExpression);p=a.createFunction(e),r.cache.compiledFunc=p}o=a.executeFunction(p,t)}else l&&(o=l[u]);const v=r.normalizationField,b=null!=l&&null!=v?parseFloat(l[v]):void 0;if(null!=o&&(!v||t||!isNaN(b)&&0!==b)){isNaN(b)||t||(o/=b);const a=k(o,f);if(a){const i=a[0],t=a[1],s=i===t?r.stops[i].color:_Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.blendColors(r.stops[i].color,r.stops[t].color,a[2],null!=n?n.color:void 0);return new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(s)}}}function v(e,a,i){const n="visualVariables"in e&&e.visualVariables?e.visualVariables.find((e=>"opacity"===e.type)):e;if(!n)return;if("esri.renderers.visualVariables.OpacityVariable"!==n.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable");const r="number"==typeof a,t=r?null:a,s=t?.attributes;let l=r?a:null;const o=n.field,{ipData:u,hasExpression:f}=n.cache;let d=n.cache.compiledFunc;if(!o&&!f){const e=n.stops;return e&&e[0]&&e[0].opacity}if("number"!=typeof l)if(f){if(null==i?.arcade)return void c.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},a=i.arcade.arcadeUtils,r=a.getViewInfo(e),s=a.createExecContext(t,r,i.timeZone);if(!d){const e=a.createSyntaxTree(n.valueExpression);d=a.createFunction(e),n.cache.compiledFunc=d}l=a.executeFunction(d,s)}else s&&(l=s[o]);const p=n.normalizationField,v=null!=s&&null!=p?parseFloat(s[p]):void 0;if(null!=l&&(!p||r||!isNaN(v)&&0!==v)){isNaN(v)||r||(l/=v);const e=k(l,u);if(e){const a=e[0],i=e[1];if(a===i)return n.stops[a].opacity;{const r=n.stops[a].opacity;return r+(n.stops[i].opacity-r)*e[2]}}}}function b(e,a,i){const n="visualVariables"in e&&e.visualVariables?e.visualVariables.find((e=>"rotation"===e.type)):e;if(!n)return;if("esri.renderers.visualVariables.RotationVariable"!==n.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable");const r=n.axis||"heading",t="heading"===r&&"arithmetic"===n.rotationType?90:0,s="heading"===r&&"arithmetic"===n.rotationType?-1:1,l="number"==typeof a?null:a,o=l?.attributes,u=n.field,{hasExpression:f}=n.cache;let d=n.cache.compiledFunc,p=0;if(!u&&!f)return p;if(f){if(null==i?.arcade)return void c.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},a=i.arcade.arcadeUtils,r=a.getViewInfo(e),t=a.createExecContext(l,r,i.timeZone);if(!d){const e=a.createSyntaxTree(n.valueExpression);d=a.createFunction(e),n.cache.compiledFunc=d}p=a.executeFunction(d,t)}else o&&(p=o[u]||0);return p="number"!=typeof p||isNaN(p)?null:t+s*p,p}function m(e,a,i){const n="number"==typeof a,r=n?null:a,t=r?.attributes;let l=n?a:null;const{isScaleDriven:u}=e.cache;let f=e.cache.compiledFunc;if(u){const a=null!=i?i.scale:void 0,n=null!=i?i.view:void 0;l=null==a||"3d"===n?h(e):a}else if(!n)switch(e.inputValueType){case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .InputValueType */ .Yf.Expression:{if(null==i?.arcade)return void c.error("Use of arcade expressions requires an arcade context");const a={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},n=i.arcade.arcadeUtils,t=n.getViewInfo(a),s=n.createExecContext(r,t,i.timeZone);if(!f){const a=n.createSyntaxTree(e.valueExpression);f=n.createFunction(a),e.cache.compiledFunc=f}l=n.executeFunction(f,s);break}case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .InputValueType */ .Yf.Field:t&&(l=t[e.field]);break;case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .InputValueType */ .Yf.Unknown:l=null}if(!(0,_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isValidNumber */ .gf)(l))return null;if(n||!e.normalizationField)return l;const d=t?parseFloat(t[e.normalizationField]):null;return (0,_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isValidNumber */ .gf)(d)&&0!==d?l/d:null}function h(e){let a=null,i=null;const n=e.stops;return n?(a=n[0].value,i=n[n.length-1].value):(a=e.minDataValue||0,i=e.maxDataValue||0),(a+i)/2}function V(e,a,i){const n="visualVariables"in e&&e.visualVariables?e.visualVariables.find((e=>"size"===e.type)):e;if(!n)return;if("esri.renderers.visualVariables.SizeVariable"!==n.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable");const r=C(m(n,a,i),n,a,i,n.cache.ipData);return null==r||isNaN(r)?0:r}function x(e,a,i){return null==e?null:(0,_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isSizeVariable */ .of)(e)?V(e,a,i):(0,_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isValidNumber */ .gf)(e)?e:null}function y(e,a,i){return (0,_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isValidNumber */ .gf)(i)&&e>i?i:(0,_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isValidNumber */ .gf)(a)&&e<a?a:e}function w(e,a,i,n){return e+((x(a.minSize,i,n)||a.minDataValue)??0)}function g(e,a,i){const n=e.stops;let r=n?.length&&n[0].size;return null==r&&(r=e.minSize),x(r,a,i)}function z(e,a,i,n){const r=(e-a.minDataValue)/(a.maxDataValue-a.minDataValue),t=x(a.minSize,i,n),s=x(a.maxSize,i,n),l=null!=n?n.shape:void 0;if(e<=a.minDataValue)return t;if(e>=a.maxDataValue)return s;if(null==t||null==s)return null;if("area"===a.scaleBy&&l){const e="circle"===l,a=e?f*(t/2)**2:t*t,i=a+r*((e?f*(s/2)**2:s*s)-a);return e?2*Math.sqrt(i/f):Math.sqrt(i)}return t+r*(s-t)}function F(e,a,i,n){const r=null!=n?n.shape:void 0,t=e/a.minDataValue,s=x(a.minSize,i,n),l=x(a.maxSize,i,n);let o=null;return o="circle"===r?2*Math.sqrt(t*(s/2)**2):"square"===r||"diamond"===r||"image"===r?Math.sqrt(t*s**2):t*s,y(o,s,l)}function S(e,a,i,n,r){const[t,s,l]=k(e,r);if(t===s)return x(a.stops?.[t].size,i,n);{const e=x(a.stops?.[t].size,i,n);return e+(x(a.stops?.[s].size,i,n)-e)*l}}function E(e,a,i,n){const t=(n?.resolution??1)*_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .meterIn */ .j[a.valueUnit],s=x(a.minSize,i,n),l=x(a.maxSize,i,n),{valueRepresentation:o}=a;let c=null;return c="area"===o?2*Math.sqrt(e/f)/t:"radius"===o||"distance"===o?2*e/t:e/t,y(c,s,l)}function U(e){return e}function C(e,a,i,n,r){switch(a.transformationType){case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .TransformationType */ ._w.Additive:return w(e,a,i,n);case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .TransformationType */ ._w.Constant:return g(a,i,n);case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .TransformationType */ ._w.ClampedLinear:return z(e,a,i,n);case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .TransformationType */ ._w.Proportional:return F(e,a,i,n);case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .TransformationType */ ._w.Stops:return S(e,a,i,n,r);case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .TransformationType */ ._w.RealWorldSize:return E(e,a,i,n);case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .TransformationType */ ._w.Identity:return U(e);case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .TransformationType */ ._w.Unknown:return null}}function D(e,a,i){const{isScaleDriven:n}=e.cache;if(!(n&&"3d"===i||a))return null;const r={scale:a,view:i};let t=x(e.minSize,u,r),s=x(e.maxSize,u,r);if(null!=t||null!=s){if(t>s){const e=s;s=t,t=e}return{minSize:t,maxSize:s}}}function M(e,a,i){if(!e.visualVariables)return;const n=[],r=[],t=[],s=[],l=[];for(const o of e.visualVariables)switch(o.type){case"color":r.push(o);break;case"opacity":t.push(o);break;case"rotation":l.push(o);break;case"size":s.push(o)}return r.forEach((e=>{const r=p(e,a,i);n.push({variable:e,value:r})})),t.forEach((e=>{const r=v(e,a,i);n.push({variable:e,value:r})})),l.forEach((e=>{const r=b(e,a,i);n.push({variable:e,value:r})})),s.forEach((e=>{const r=V(e,a,i);n.push({variable:e,value:r})})),n.filter((e=>null!=e.value))}function k(e,a){if(!a)return;let i=0,n=a.length-1;return a.some(((a,r)=>e<a?(n=r,!0):(i=r,!1))),[i,n,(e-a[i])/(a[n]-a[i])]}function N(e,a,n){const r=["proportional","proportional","proportional"];for(const t of e){const e=t.useSymbolValue?"symbol-value":V(t,a,n);switch(t.axis){case"width":r[0]=e;break;case"depth":r[1]=e;break;case"height":r[2]=e;break;case"width-and-depth":r[0]=e,r[1]=e;break;case"all":case void 0:case null:r[0]=e,r[1]=e,r[2]=e;break;default:(0,_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .neverReached */ .Xb)(t.axis)}}return r}


/***/ }),

/***/ 80323:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function t(n){const o={};for(const e in n){if("declaredClass"===e)continue;const r=n[e];if(null!=r&&"function"!=typeof r)if(Array.isArray(r)){o[e]=[];for(let n=0;n<r.length;n++)o[e][n]=t(r[n])}else"object"==typeof r?r.toJSON&&(o[e]=JSON.stringify(r)):o[e]=r}return o}


/***/ }),

/***/ 60920:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11499);
/* harmony import */ var _operations_query_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8132);
/* harmony import */ var _support_Query_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24587);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function n(n,s,m){const p=(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .parseUrl */ .Dl)(n);return (0,_operations_query_js__WEBPACK_IMPORTED_MODULE_1__/* .executeQueryForCount */ .gW)(p,_support_Query_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.from(s),{...m}).then((o=>o.data.count))}


/***/ }),

/***/ 1177:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11499);
/* harmony import */ var _operations_query_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8132);
/* harmony import */ var _support_Query_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24587);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function s(s,e,m){const n=(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .parseUrl */ .Dl)(s);return (0,_operations_query_js__WEBPACK_IMPORTED_MODULE_1__/* .executeQueryForIds */ .Pk)(n,_support_Query_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.from(e),{...m}).then((o=>o.data.objectIds))}


/***/ }),

/***/ 9190:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ a),
/* harmony export */   s: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11499);
/* harmony import */ var _operations_query_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8132);
/* harmony import */ var _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57822);
/* harmony import */ var _support_Query_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24587);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function s(r,t,e){const s=await a(r,t,e);return _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.fromJSON(s)}async function a(o,s,a){const n=(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .parseUrl */ .Dl)(o),i={...a},p=_support_Query_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.from(s),{data:u}=await (0,_operations_query_js__WEBPACK_IMPORTED_MODULE_1__/* .executeQuery */ .eW)(n,p,p.sourceSpatialReference,i);return u}


/***/ }),

/***/ 89538:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ executeQueryPBF_n)
});

// UNUSED EXPORTS: executeQueryPBF

// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/utils.js
var utils = __webpack_require__(11499);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(6267);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/zscale.js
var zscale = __webpack_require__(8034);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/featureConversionUtils.js
var featureConversionUtils = __webpack_require__(21355);
;// ../node_modules/@arcgis/core/rest/query/operations/pbfJSONFeatureSet.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function pbfJSONFeatureSet_o(e,t){return t}function i(e,t,r,s){switch(r){case 0:return u(e,t+s,0);case 1:return"lowerLeft"===e.originPosition?u(e,t+s,1):d(e,t+s,1)}}function n(e,t,r,s){return 2===r?u(e,t,2):i(e,t,r,s)}function pbfJSONFeatureSet_a(e,t,r,s){return 2===r?u(e,t,3):i(e,t,r,s)}function h(e,t,r,s){return 3===r?u(e,t,3):n(e,t,r,s)}function u({translate:e,scale:t},r,s){return e[s]+r*t[s]}function d({translate:e,scale:t},r,s){return e[s]-r*t[s]}class l{constructor(e){this._options=e,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=pbfJSONFeatureSet_o,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{}}createFeatureResult(){return{fields:[],features:[]}}finishFeatureResult(e){if(this._options.applyTransform&&(e.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!e.hasZ)return;const r=(0,zscale/* getGeometryZScaler */.N)(e.geometryType,this._options.sourceSpatialReference,e.spatialReference);if(null!=r)for(const t of e.features)r(t.geometry)}createSpatialReference(){return{}}addField(t,r){const s=t.fields;(0,maybe/* assertIsSome */.Lw)(s),s.push(r);const o=s.map((e=>e.name));this._attributesConstructor=function(){for(const e of o)this[e]=null}}addFeature(e,t){e.features.push(t)}prepareFeatures(e){switch(this._transform=e.transform,this._options.applyTransform&&e.transform&&(this._applyTransform=this._deriveApplyTransform(e)),this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++,e.geometryType){case"esriGeometryPoint":this.addCoordinate=(e,t,r)=>this.addCoordinatePoint(e,t,r),this.createGeometry=e=>this.createPointGeometry(e);break;case"esriGeometryPolygon":this.addCoordinate=(e,t,r)=>this._addCoordinatePolygon(e,t,r),this.createGeometry=e=>this._createPolygonGeometry(e);break;case"esriGeometryPolyline":this.addCoordinate=(e,t,r)=>this._addCoordinatePolyline(e,t,r),this.createGeometry=e=>this._createPolylineGeometry(e);break;case"esriGeometryMultipoint":this.addCoordinate=(e,t,r)=>this._addCoordinateMultipoint(e,t,r),this.createGeometry=e=>this._createMultipointGeometry(e)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,{attributes:new this._attributesConstructor}}allocateCoordinates(){}addLength(e,t,r){0===this._lengths.length&&(this._toAddInCurrentPath=t),this._lengths.push(t)}addQueryGeometry(e,t){const{queryGeometry:o,queryGeometryType:i}=t,n=(0,featureConversionUtils/* unquantizeOptimizedGeometry */.Ch)(o.clone(),o,!1,!1,this._transform),a=(0,featureConversionUtils/* convertToGeometry */.zv)(n,i,!1,!1);e.queryGeometryType=i,e.queryGeometry={...a}}createPointGeometry(e){const t={x:0,y:0,spatialReference:e.spatialReference};return e.hasZ&&(t.z=0),e.hasM&&(t.m=0),t}addCoordinatePoint(e,t,r){const s=this._transform;switch(t=this._applyTransform(s,t,r,0),r){case 0:e.x=t;break;case 1:e.y=t;break;case 2:"z"in e?e.z=t:e.m=t;break;case 3:e.m=t}}_transformPathLikeValue(e,t){let r=0;t<=1&&(r=this._previousCoordinate[t],this._previousCoordinate[t]+=e);const s=this._transform;return this._applyTransform(s,e,t,r)}_addCoordinatePolyline(e,t,r){this._dehydratedAddPointsCoordinate(e.paths,t,r)}_addCoordinatePolygon(e,t,r){this._dehydratedAddPointsCoordinate(e.rings,t,r)}_addCoordinateMultipoint(e,t,r){0===r&&e.points.push([]);const s=this._transformPathLikeValue(t,r);e.points[e.points.length-1].push(s)}_createPolygonGeometry(e){return{rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createPolylineGeometry(e){return{paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createMultipointGeometry(e){return{points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_dehydratedAddPointsCoordinate(e,t,r){0===r&&0==this._toAddInCurrentPath--&&(e.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const s=this._transformPathLikeValue(t,r),o=e[e.length-1];0===r&&(this._coordinateBufferPtr=0,this._coordinateBuffer=new Array(this._vertexDimension),o.push(this._coordinateBuffer)),this._coordinateBuffer[this._coordinateBufferPtr++]=s}_deriveApplyTransform(e){const{hasZ:t,hasM:r}=e;return t&&r?h:t?n:r?pbfJSONFeatureSet_a:i}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/query/operations/query.js
var query = __webpack_require__(8132);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/FeatureSet.js
var FeatureSet = __webpack_require__(57822);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/Query.js + 1 modules
var Query = __webpack_require__(24587);
;// ../node_modules/@arcgis/core/rest/query/executeQueryPBF.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function s(r,e,t){const s=await executeQueryPBF_n(r,a.from(e),t);return o.fromJSON(s)}async function executeQueryPBF_n(o,s,n){const p=(0,utils/* parseUrl */.Dl)(o),i={...n},u=Query/* default */.A.from(s),m=!u.quantizationParameters,{data:f}=await (0,query/* executeQueryPBF */.IJ)(p,u,new l({sourceSpatialReference:u.sourceSpatialReference,applyTransform:m}),i);return f}


/***/ }),

/***/ 9669:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92976);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87926);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function t(n,e,t){if(null==n.hasM||n.hasZ)for(const i of e)for(const n of i)n.length>2&&(n[2]*=t)}function i(e,t,i){if(!e&&!t||!i)return;const s=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getMetersPerVerticalUnitForSR */ .G9)(i);o(e,i,s),o(t,i,s)}function o(n,e,t){if(n)for(const i of n)s(i.geometry,e,t)}function s(i,o,s){if(!i?.spatialReference||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .equals */ .aI)(i.spatialReference,o))return;const f=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getMetersPerVerticalUnitForSR */ .G9)(i.spatialReference)/s;if(1!==f)if("x"in i)null!=i.z&&(i.z*=f);else if("rings"in i)t(i,i.rings,f);else if("paths"in i)t(i,i.paths,f);else if("points"in i&&(null==i.hasM||i.hasZ))for(const n of i.points)n.length>2&&(n[2]*=f)}


/***/ }),

/***/ 37610:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SH: () => (/* binding */ S),
/* harmony export */   ae: () => (/* binding */ h),
/* harmony export */   cn: () => (/* binding */ b)
/* harmony export */ });
/* unused harmony export parseFieldType */
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/* harmony import */ var _core_pbf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66471);
/* harmony import */ var _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88443);
/* harmony import */ var _pbfOptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38333);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const a=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML","esriFieldTypeBigInteger","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"],n=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],i=["upperLeft","lowerLeft"];function o(e){return e>=a.length?null:a[e]}function c(e){return e>=n.length?null:n[e]}function l(e){return e>=i.length?null:i[e]}function g(e,t){return t>=e.geometryTypes.length?null:e.geometryTypes[t]}function p(e,t,s){const r=3,a=e.asUnsafe(),n=t.createPointGeometry(s);for(;a.next();)switch(a.tag()){case r:{const e=a.getUInt32(),s=a.pos()+e;let r=0;for(;a.pos()<s;)t.addCoordinatePoint(n,a.getSInt64(),r++);break}default:a.skip()}return n}function u(e,t,s){const r=2,a=3,n=e.asUnsafe(),i=t.createGeometry(s),o=2+(s.hasZ?1:0)+(s.hasM?1:0);for(;n.next();)switch(n.tag()){case r:{const e=n.getUInt32(),s=n.pos()+e;let r=0;for(;n.pos()<s;)t.addLength(i,n.getUInt32(),r++);break}case a:{const e=n.getUInt32(),s=n.pos()+e;let r=0;for(t.allocateCoordinates(i);n.pos()<s;)t.addCoordinate(i,n.getSInt64(),r),r++,r===o&&(r=0);break}default:n.skip()}return i}function f(e){const t=1,a=2,n=3,i=e.asUnsafe(),o=new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A;let c="esriGeometryPoint";for(;i.next();)switch(i.tag()){case a:{const e=i.getUInt32(),t=i.pos()+e;for(;i.pos()<t;)o.lengths.push(i.getUInt32());break}case n:{const e=i.getUInt32(),t=i.pos()+e;for(;i.pos()<t;)o.coords.push(i.getSInt64());break}case t:c=_pbfOptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_2__/* .optimizedGeometryTypes */ .z[i.getEnum()];break;default:i.skip()}return{queryGeometry:o,queryGeometryType:c}}function y(e){const t=1,s=2,r=3,a=4,n=5,i=6,o=7,c=8,l=9,g=e.asUnsafe();for(;g.next();)switch(g.tag()){case t:return g.getString();case s:return g.getFloat();case r:return g.getDouble();case a:return g.getSInt32();case n:return g.getUInt32();case i:return g.getInt64();case o:return g.getUInt64();case c:return g.getSInt64();case l:return g.getBool();default:return g.skip(),null}return null}function b(e){const t=1,s=2,r=3,a=4,n=5,i=6,l=e.asUnsafe(),g={type:o(0)};for(;l.next();)switch(l.tag()){case t:g.name=l.getString();break;case s:g.type=o(l.getEnum());break;case r:g.alias=l.getString();break;case a:g.sqlType=c(l.getEnum());break;case n:l.skip();break;case i:g.defaultValue=l.getString();break;default:l.skip()}return g}function k(e){const t=1,s=2,r={},a=e.asUnsafe();for(;a.next();)switch(a.tag()){case t:r.name=a.getString();break;case s:r.isSystemMaintained=a.getBool();break;default:a.skip()}return r}function d(e,t,s,r){const a=1,n=2,i=4,o=t.createFeature(s);let c=0;for(;e.next();)switch(e.tag()){case a:{const t=r[c++].name;o.attributes[t]=e.processMessage(y);break}case n:o.geometry=e.processMessageWithArgs(u,t,s);break;case i:o.centroid=e.processMessageWithArgs(p,t,s);break;default:e.skip()}return o}function T(e){const t=1,s=2,r=3,a=4,n=[1,1,1,1],i=e.asUnsafe();for(;i.next();)switch(i.tag()){case t:n[0]=i.getDouble();break;case s:n[1]=i.getDouble();break;case a:n[2]=i.getDouble();break;case r:n[3]=i.getDouble();break;default:i.skip()}return n}function m(e){const t=1,s=2,r=3,a=4,n=[0,0,0,0],i=e.asUnsafe();for(;i.next();)switch(i.tag()){case t:n[0]=i.getDouble();break;case s:n[1]=i.getDouble();break;case a:n[2]=i.getDouble();break;case r:n[3]=i.getDouble();break;default:i.skip()}return n}function h(e){const t=1,s=2,r=3,a={originPosition:l(0)},n=e.asUnsafe();for(;n.next();)switch(n.tag()){case t:a.originPosition=l(n.getEnum());break;case s:a.scale=n.processMessage(T);break;case r:a.translate=n.processMessage(m);break;default:n.skip()}return a}function F(e){const t=1,s=2,r=3,a={},n=e.asUnsafe();for(;n.next();)switch(n.tag()){case t:a.shapeAreaFieldName=n.getString();break;case s:a.shapeLengthFieldName=n.getString();break;case r:a.units=n.getString();break;default:n.skip()}return a}function q(e,t){const s=1,r=2,a=3,n=4,i=5,o=t.createSpatialReference();for(;e.next();)switch(e.tag()){case s:o.wkid=e.getUInt32();break;case i:o.wkt=e.getString();break;case r:o.latestWkid=e.getUInt32();break;case a:o.vcsWkid=e.getUInt32();break;case n:o.latestVcsWkid=e.getUInt32();break;default:e.skip()}return o}function I(e,t){const s=1,r=2,a=3,n=4,i=5,o=7,c=8,l=9,p=10,u=11,f=12,y=13,T=15,m=t.createFeatureResult(),I=e.asUnsafe();m.geometryType=g(t,0);let U=!1;for(;I.next();)switch(I.tag()){case s:m.objectIdFieldName=I.getString();break;case a:m.globalIdFieldName=I.getString();break;case n:m.geohashFieldName=I.getString();break;case i:m.geometryProperties=I.processMessage(F);break;case o:m.geometryType=g(t,I.getEnum());break;case c:m.spatialReference=I.processMessageWithArgs(q,t);break;case p:m.hasZ=I.getBool();break;case u:m.hasM=I.getBool();break;case f:m.transform=I.processMessage(h);break;case l:m.exceededTransferLimit=I.getBool();break;case y:t.addField(m,I.processMessage(b));break;case T:U||(t.prepareFeatures(m),U=!0),t.addFeature(m,I.processMessageWithArgs(d,t,m,m.fields));break;case r:m.uniqueIdField=I.processMessage(k);break;default:I.skip()}return t.finishFeatureResult(m),m}function U(e,t){const s=1,r=4,a={};let n=null;for(;e.next();)switch(e.tag()){case r:n=e.processMessageWithArgs(f);break;case s:a.featureResult=e.processMessageWithArgs(I,t);break;default:e.skip()}return null!=n&&a.featureResult&&t.addQueryGeometry(a,n),a}function S(s,r){try{const e=2,a=new _core_pbf_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(new Uint8Array(s),new DataView(s)),n={};for(;a.next();)if(a.tag()===e)n.queryResult=a.processMessageWithArgs(U,r);else a.skip();return n}catch(a){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:a})}}


/***/ }),

/***/ 38333:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ a),
/* harmony export */   z: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92976);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87926);
/* harmony import */ var _layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32597);
/* harmony import */ var _layers_graphics_OptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46461);
/* harmony import */ var _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88443);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const n=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];class a{constructor(e){this._options=e,this.geometryTypes=n,this._coordinatePtr=0,this._vertexDimension=0}createFeatureResult(){return new _layers_graphics_OptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A}prepareFeatures(e){this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++}finishFeatureResult(o){if(!o?.features||!o.hasZ||!this._options.sourceSpatialReference||!o.spatialReference||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .equals */ .aI)(o.spatialReference,this._options.sourceSpatialReference)||o.spatialReference.vcsWkid)return;const i=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getMetersPerVerticalUnitForSR */ .G9)(this._options.sourceSpatialReference)/(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getMetersPerVerticalUnitForSR */ .G9)(o.spatialReference);if(1!==i)for(const e of o.features){if(!(0,_layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_3__/* .hasGeometry */ .N3)(e))continue;const t=e.geometry.coords;for(let e=2;e<t.length;e+=3)t[e]*=i}}addFeature(e,t){e.features.push(t)}createFeature(){return new _layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_3__/* .OptimizedFeature */ .Om}createSpatialReference(){return{wkid:0}}createGeometry(){return new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A}addField(e,t){e.fields.push(t)}allocateCoordinates(e){e.coords.length=e.lengths.reduce(((e,t)=>e+t),0)*this._vertexDimension,this._coordinatePtr=0}addCoordinate(e,t){e.coords[this._coordinatePtr++]=t}addCoordinatePoint(e,t){e.coords.push(t)}addLength(e,t){e.lengths.push(t)}addQueryGeometry(e,t){e.queryGeometry=t.queryGeometry,e.queryGeometryType=t.queryGeometryType}createPointGeometry(){return new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A}}


/***/ }),

/***/ 79305:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _pbfFeatureServiceParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37610);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function t(t,r){const u=(0,_pbfFeatureServiceParser_js__WEBPACK_IMPORTED_MODULE_0__/* .parseFeatureQuery */ .SH)(t,r),o=u.queryResult.featureResult,s=u.queryResult.queryGeometry,y=u.queryResult.queryGeometryType;if(o&&o.features&&o.features.length&&o.objectIdFieldName){const e=o.objectIdFieldName;for(const t of o.features)t.attributes&&(t.objectId=t.attributes[e])}return o&&(o.queryGeometry=s,o.queryGeometryType=y),o}


/***/ }),

/***/ 8132:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IJ: () => (/* binding */ f),
/* harmony export */   Jf: () => (/* binding */ x),
/* harmony export */   Pk: () => (/* binding */ p),
/* harmony export */   eW: () => (/* binding */ c),
/* harmony export */   gW: () => (/* binding */ S),
/* harmony export */   kS: () => (/* binding */ d)
/* harmony export */ });
/* unused harmony exports encodeGeometry, queryToQueryStringParameters, runQuery */
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86394);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20909);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1171);
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65231);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87926);
/* harmony import */ var _operations_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80323);
/* harmony import */ var _pbfQueryUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79305);
/* harmony import */ var _queryZScale_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27604);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const s="Layer does not support extent calculation.";function m(t,e){if(e&&"extent"===t.type)return`${t.xmin},${t.ymin},${t.xmax},${t.ymax}`;if(e&&"point"===t.type)return`${t.x},${t.y}`;const n=t.toJSON();return delete n.spatialReference,JSON.stringify(n)}function y(t,e){const n=t.geometry,i=t.toJSON();delete i.compactGeometryEnabled,delete i.defaultSpatialReferenceEnabled;const o=i;let u,l,s;if(null!=n&&(l=n.spatialReference,s=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .srToRESTValue */ .YX)(l),o.geometryType=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getJsonType */ .$B)(n),o.geometry=m(n,t.compactGeometryEnabled),o.inSR=s),i.groupByFieldsForStatistics&&(o.groupByFieldsForStatistics=i.groupByFieldsForStatistics.join(",")),i.objectIds&&(o.objectIds=i.objectIds.join(",")),i.orderByFields&&(o.orderByFields=i.orderByFields.join(",")),!i.outFields||!i.returnDistinctValues&&(e?.returnCountOnly||e?.returnExtentOnly||e?.returnIdsOnly)?delete o.outFields:i.outFields.includes("*")?o.outFields="*":o.outFields=i.outFields.join(","),i.outSR?(o.outSR=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .srToRESTValue */ .YX)(i.outSR),u=t.outSpatialReference):n&&(i.returnGeometry||i.returnCentroid)&&(o.outSR=o.inSR,u=l),i.returnGeometry&&delete i.returnGeometry,i.outStatistics&&(o.outStatistics=JSON.stringify(i.outStatistics)),i.fullText&&(o.fullText=JSON.stringify(i.fullText)),i.pixelSize&&(o.pixelSize=JSON.stringify(i.pixelSize)),i.quantizationParameters&&(t.defaultSpatialReferenceEnabled&&null!=l&&null!=t.quantizationParameters?.extent&&l.equals(t.quantizationParameters.extent.spatialReference)&&delete i.quantizationParameters.extent.spatialReference,o.quantizationParameters=JSON.stringify(i.quantizationParameters)),i.parameterValues&&(o.parameterValues=JSON.stringify(i.parameterValues)),i.rangeValues&&(o.rangeValues=JSON.stringify(i.rangeValues)),i.dynamicDataSource&&(o.layer=JSON.stringify({source:i.dynamicDataSource}),delete i.dynamicDataSource),i.timeExtent){const t=i.timeExtent,{start:e,end:n}=t;null==e&&null==n||(o.time=e===n?e:`${e??"null"},${n??"null"}`),delete i.timeExtent}return t.defaultSpatialReferenceEnabled&&null!=l&&null!=u&&l.equals(u)&&(o.defaultSR=o.inSR,delete o.inSR,delete o.outSR),o}async function c(t,e,n,r){const i=null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{features:[]}}:await E(t,e,"json",r);return (0,_queryZScale_js__WEBPACK_IMPORTED_MODULE_6__/* .applyFeatureSetZUnitScaling */ .q)(e,n,i.data),i}async function f(t,e,n,r){if(null!=e.timeExtent&&e.timeExtent.isEmpty)return{data:n.createFeatureResult()};const i=await d(t,e,r),a=i;return a.data=(0,_pbfQueryUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .parsePBFFeatureQuery */ .m)(i.data,n),a}function d(t,e,n){return E(t,e,"pbf",n)}function p(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):E(t,e,"json",n,{returnIdsOnly:!0})}function S(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):E(t,e,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}async function x(t,e,n){if(null!=e.timeExtent&&e.timeExtent.isEmpty)return{data:{count:0,extent:null}};const r=await E(t,e,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}),i=r.data;if(i.hasOwnProperty("extent"))return r;if(i.features)throw new Error(s);if(i.hasOwnProperty("count"))throw new Error(s);return r}async function E(r,a,u,l={},s={}){const m="string"==typeof r?(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .urlToObject */ .An)(r):r,c=a.geometry?[a.geometry]:[],f=await (0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .normalizeCentralMeridian */ .el)(c,null,{signal:l.signal}),d=f?.[0];null!=d&&((a=a.clone()).geometry=d);const p=(0,_operations_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .mapParameters */ .z)({...m.query,f:u,...s,...y(a,s)});return (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .join */ .fj)(m.path,g(a,s)?"query3d":"query"),{...l,responseType:"pbf"===u?"array-buffer":"json",query:{...p,...l.query}})}function g(t,e){return null!=t.formatOf3DObjects&&!(e.returnCountOnly||e.returnExtentOnly||e.returnIdsOnly)}


/***/ }),

/***/ 27604:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _geometry_support_zscale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8034);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function t(t,o,r){if(!r?.features||!r.hasZ)return;const f=(0,_geometry_support_zscale_js__WEBPACK_IMPORTED_MODULE_0__/* .getGeometryZScaler */ .N)(r.geometryType,o,t.outSpatialReference);if(null!=f)for(const e of r.features)f(e.geometry)}


/***/ }),

/***/ 22531:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ l)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
;// ../node_modules/@arcgis/core/layers/support/exifUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function n(n){const{exifInfo:e,exifName:a,tagName:u}=n;if(!e||!a||!u)return null;const f=e.find((n=>n.name===a));return f?t({tagName:u,tags:f.tags}):null}function t(n){const{tagName:t,tags:e}=n;if(!e||!t)return null;const a=e.find((n=>n.name===t));return a?.value||null}

;// ../node_modules/@arcgis/core/rest/query/support/AttachmentInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var s;const p={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}};let a=s=class extends JSONSupport/* JSONSupport */.oY{constructor(t){super(t),this.contentType=null,this.exifInfo=null,this.id=null,this.globalId=null,this.keywords=null,this.name=null,this.parentGlobalId=null,this.parentObjectId=null,this.size=null,this.url=null}get orientationInfo(){const{exifInfo:t}=this,o=n({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:t});return p[o]||null}clone(){return new s({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,globalId:this.globalId,keywords:this.keywords,name:this.name,parentGlobalId:this.parentGlobalId,parentObjectId:this.parentObjectId,size:this.size,url:this.url})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],a.prototype,"contentType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],a.prototype,"exifInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],a.prototype,"orientationInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:ensureType/* Integer */.jz})],a.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],a.prototype,"globalId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],a.prototype,"keywords",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],a.prototype,"name",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1}})],a.prototype,"parentGlobalId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1}})],a.prototype,"parentObjectId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:ensureType/* Integer */.jz})],a.prototype,"size",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1}})],a.prototype,"url",void 0),a=s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.AttachmentInfo")],a);const l=a;


/***/ }),

/***/ 80196:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96220);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19251);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _ColorRamp_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87673);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var m;let c=m=class extends _ColorRamp_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A{constructor(o){super(o),this.algorithm=null,this.fromColor=null,this.toColor=null,this.type="algorithmic"}clone(){return new m({fromColor:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.fromColor),toColor:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.toColor),algorithm:this.algorithm})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__/* .enumeration */ .e)({esriCIELabAlgorithm:"cie-lab",esriHSVAlgorithm:"hsv",esriLabLChAlgorithm:"lab-lch"})],c.prototype,"algorithm",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,json:{type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__/* .Integer */ .jz],write:!0}})],c.prototype,"fromColor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,json:{type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__/* .Integer */ .jz],write:!0}})],c.prototype,"toColor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:["algorithmic"]})],c.prototype,"type",void 0),c=m=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.rest.support.AlgorithmicColorRamp")],c);const a=c;


/***/ }),

/***/ 27973:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19251);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77542);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var a;let p=a=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(t){super(t),this.attachmentTypes=null,this.attachmentsWhere=null,this.cacheHint=void 0,this.keywords=null,this.globalIds=null,this.name=null,this.num=null,this.objectIds=null,this.returnMetadata=!1,this.size=null,this.start=null,this.where=null}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10}clone(){return new a((0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)({attachmentTypes:this.attachmentTypes,attachmentsWhere:this.attachmentsWhere,cacheHint:this.cacheHint,keywords:this.keywords,where:this.where,globalIds:this.globalIds,name:this.name,num:this.num,objectIds:this.objectIds,returnMetadata:this.returnMetadata,size:this.size,start:this.start}))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[String],json:{write:!0}})],p.prototype,"attachmentTypes",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{read:{source:"attachmentsDefinitionExpression"},write:{target:"attachmentsDefinitionExpression"}}})],p.prototype,"attachmentsWhere",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:Boolean,json:{write:!0}})],p.prototype,"cacheHint",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[String],json:{write:!0}})],p.prototype,"keywords",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[Number],json:{write:!0}})],p.prototype,"globalIds",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{write:!0}})],p.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:Number,json:{read:{source:"resultRecordCount"}}})],p.prototype,"num",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[Number],json:{write:!0}})],p.prototype,"objectIds",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:Boolean,json:{default:!1,write:!0}})],p.prototype,"returnMetadata",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[Number],json:{write:!0}})],p.prototype,"size",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:Number,json:{read:{source:"resultOffset"}}})],p.prototype,"start",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_6__/* .writer */ .K)("start"),(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_6__/* .writer */ .K)("num")],p.prototype,"writeStart",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],p.prototype,"where",void 0),p=a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.rest.support.AttachmentQuery")],p),p.from=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__/* .ensureType */ .dp)(p);const c=p;


/***/ }),

/***/ 87673:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let e=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(r){super(r),this.type=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({readOnly:!0,json:{read:!1,write:!0}})],e.prototype,"type",void 0),e=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.rest.support.ColorRamp")],e);const p=e;


/***/ }),

/***/ 57822:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17639);
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25707);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59851);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21877);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19251);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73446);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75094);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(77542);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(78983);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1171);
/* harmony import */ var _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(24738);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var f;const h=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_3__/* .JSONMap */ .J({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let g=f=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_4__/* .JSONSupport */ .oY{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const o=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A.fromJSON(t.spatialReference),s=[];for(let n=0;n<e.length;n++){const t=e[n],i=_Graphic_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.fromJSON(t),l=t.geometry?.spatialReference;null==i.geometry||l||(i.geometry.spatialReference=o);const a=t.aggregateGeometries,p=i.aggregateGeometries;if(a&&null!=p)for(const e in p){const t=p[e],r=a[e],s=r?.spatialReference;null==t||s||(t.spatialReference=o)}s.push(i)}return s}writeGeometryType(e,t,r,o){if(e)return void h.write(e,t,r,o);const{features:s}=this;if(s)for(const n of s)if(null!=n?.geometry)return void h.write(n.geometry.type,t,r,o)}readQueryGeometry(e,t){if(!e)return null;const r=!!e.spatialReference,o=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .fromJSON */ .rS)(e);return o&&!r&&t.spatialReference&&(o.spatialReference=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A.fromJSON(t.spatialReference)),o}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:r}=this;if(r)for(const o of r)if(o&&null!=o.geometry&&o.geometry.spatialReference)return void(t.spatialReference=o.geometry.spatialReference.toJSON())}clone(){return new f(this.cloneProperties())}cloneProperties(){return (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_5__/* .clone */ .o8)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(e){const t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){const o=t.features[r];if(o.geometry){const t=e?.[r];o.geometry=t?.toJSON()||o.geometry}}return t}quantize(e){const{scale:[t,r],translate:[o,s]}=e,n=e=>Math.round((e-o)/t),i=e=>Math.round((s-e)/r),l=this.features,a=this._getQuantizationFunction(this.geometryType,n,i);for(let p=0,m=l.length;p<m;p++)a?.(l[p].geometry)||(l.splice(p,1),p--,m--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:r}=this;if(!r)return this;const{translate:[o,s],scale:[n,i]}=r,l=e=>e*n+o,a=e=>s-e*i;let p=null,m=null;if(this.hasZ&&null!=r?.scale?.[2]){const{translate:[,,e],scale:[,,t]}=r;p=r=>r*t+e}if(this.hasM&&null!=r?.scale?.[3]){const{translate:[,,,e],scale:[,,,t]}=r;m=r=>null==r?r:r*t+e}const c=this._getHydrationFunction(e,l,a,p,m);for(const{geometry:u}of t)null!=u&&c&&c(u);return this.transform=null,this}_quantizePoints(e,t,r){let o,s;const n=[];for(let i=0,l=e.length;i<l;i++){const l=e[i];if(i>0){const e=t(l[0]),i=r(l[1]);e===o&&i===s||(n.push([e-o,i-s]),o=e,s=i)}else o=t(l[0]),s=r(l[1]),n.push([o,s])}return n.length>0?n:null}_getQuantizationFunction(e,t,r){return"point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{const o=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .isPolygon */ .Bi)(e)?e.rings:e.paths,s=[];for(let n=0,i=o.length;n<i;n++){const e=o[n],i=this._quantizePoints(e,t,r);i&&s.push(i)}return s.length>0?((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .isPolygon */ .Bi)(e)?e.rings=s:e.paths=s,e):null}:"multipoint"===e?e=>{const o=this._quantizePoints(e.points,t,r);return o&&o.length>0?(e.points=o,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r,o,s){return"point"===e?e=>{e.x=t(e.x),e.y=r(e.y),o&&(e.z=o(e.z))}:"polyline"===e||"polygon"===e?e=>{const n=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .isPolygon */ .Bi)(e)?e.rings:e.paths;let i,l;for(let o=0,s=n.length;o<s;o++){const e=n[o];for(let o=0,s=e.length;o<s;o++){const s=e[o];o>0?(i+=s[0],l+=s[1]):(i=s[0],l=s[1]),s[0]=t(i),s[1]=r(l)}}if(o&&s)for(let t=0,r=n.length;t<r;t++){const e=n[t];for(let t=0,r=e.length;t<r;t++){const r=e[t];r[2]=o(r[2]),r[3]=s(r[3])}}else if(o)for(let t=0,r=n.length;t<r;t++){const e=n[t];for(let t=0,r=e.length;t<r;t++){const r=e[t];r[2]=o(r[2])}}else if(s)for(let t=0,r=n.length;t<r;t++){const e=n[t];for(let t=0,r=e.length;t<r;t++){const r=e[t];r[2]=s(r[2])}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax),o&&null!=e.zmax&&null!=e.zmin&&(e.zmax=o(e.zmax),e.zmin=o(e.zmin)),s&&null!=e.mmax&&null!=e.mmin&&(e.mmax=s(e.mmax),e.mmin=s(e.mmin))}:"multipoint"===e?e=>{const n=e.points;let i,l;for(let o=0,s=n.length;o<s;o++){const e=n[o];o>0?(i+=e[0],l+=e[1]):(i=e[0],l=e[1]),e[0]=t(i),e[1]=r(l)}if(o&&s)for(let t=0,r=n.length;t<r;t++){const e=n[t];e[2]=o(e[2]),e[3]=s(e[3])}else if(o)for(let t=0,r=n.length;t<r;t++){const e=n[t];e[2]=o(e[2])}else if(s)for(let t=0,r=n.length;t<r;t++){const e=n[t];e[2]=s(e[2])}}:null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:String,json:{write:!0}})],g.prototype,"displayFieldName",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],g.prototype,"exceededTransferLimit",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:[_Graphic_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A],json:{write:!0}})],g.prototype,"features",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__/* .reader */ .w)("features")],g.prototype,"readFeatures",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:[_layers_support_Field_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A],json:{write:!0}})],g.prototype,"fields",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:h.read}}})],g.prototype,"geometryType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__/* .writer */ .K)("geometryType")],g.prototype,"writeGeometryType",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],g.prototype,"hasM",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],g.prototype,"hasZ",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({types:_geometry_js__WEBPACK_IMPORTED_MODULE_1__/* .geometryTypes */ .yR,json:{write:!0}})],g.prototype,"queryGeometry",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__/* .reader */ .w)("queryGeometry")],g.prototype,"readQueryGeometry",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A,json:{write:!0}})],g.prototype,"spatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__/* .writer */ .K)("spatialReference")],g.prototype,"writeSpatialReference",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({json:{write:!0}})],g.prototype,"transform",void 0),g=f=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__/* .subclass */ .$)("esri.rest.support.FeatureSet")],g),g.prototype.toJSON.isDefaultToJSON=!0;const d=g;


/***/ }),

/***/ 17771:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19251);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63863);
/* harmony import */ var _AlgorithmicColorRamp_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80196);
/* harmony import */ var _ColorRamp_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87673);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var c;let m=c=class extends _ColorRamp_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A{constructor(o){super(o),this.colorRamps=null,this.type="multipart"}clone(){return new c({colorRamps:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(this.colorRamps)})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:[_AlgorithmicColorRamp_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A],json:{write:!0}})],m.prototype,"colorRamps",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:["multipart"]})],m.prototype,"type",void 0),m=c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__/* .subclass */ .$)("esri.rest.support.MultipartColorRamp")],m);const a=m;


/***/ }),

/***/ 24587:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ b)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry.js
var geometry = __webpack_require__(17639);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/TimeExtent.js
var TimeExtent = __webpack_require__(19790);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(4130);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(28902);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/jsonUtils.js
var jsonUtils = __webpack_require__(1171);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/source/DataLayerSource.js + 3 modules
var DataLayerSource = __webpack_require__(44360);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(24793);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
;// ../node_modules/@arcgis/core/rest/support/FullTextSearch.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let p=class extends((0,Clonable/* ClonableMixin */.O)(JSONSupport/* JSONSupport */.oY)){constructor(r){super(r),this.onFields=null,this.operator=null,this.searchTerm=null,this.searchType=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],json:{write:{enabled:!0,overridePolicy(){return{enabled:null!=this.onFields&&this.onFields.length>0}}}}})],p.prototype,"onFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"operator",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"searchTerm",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"searchType",void 0),p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.rest.support.FullTextSearch")],p);const i=p;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/QuantizationParameters.js
var QuantizationParameters = __webpack_require__(19925);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/StatisticDefinition.js
var StatisticDefinition = __webpack_require__(41969);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Point.js + 1 modules
var Point = __webpack_require__(78632);
;// ../node_modules/@arcgis/core/rest/support/Query.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var w;const v=new jsonMap/* JSONMap */.J({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),g=new jsonMap/* JSONMap */.J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let R=w=class extends JSONSupport/* JSONSupport */.oY{static from(t){return (0,ensureType/* ensureClass */.PZ)(w,t)}constructor(t){super(t),this.aggregateIds=null,this.cacheHint=void 0,this.compactGeometryEnabled=!1,this.datumTransformation=null,this.defaultSpatialReferenceEnabled=!1,this.distance=void 0,this.dynamicDataSource=void 0,this.formatOf3DObjects=null,this.fullText=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=void 0,this.groupByFieldsForStatistics=null,this.having=null,this.historicMoment=null,this.maxAllowableOffset=void 0,this.maxRecordCountFactor=1,this.multipatchOption=null,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.outStatistics=null,this.parameterValues=null,this.pixelSize=null,this.quantizationParameters=null,this.rangeValues=null,this.relationParameter=null,this.resultType=null,this.returnCentroid=!1,this.returnDistinctValues=!1,this.returnExceededLimitFeatures=!0,this.returnGeometry=!1,this.returnQueryGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.sourceSpatialReference=null,this.spatialRelationship="intersects",this.start=void 0,this.sqlFormat=null,this.text=null,this.timeExtent=null,this.timeReferenceUnknownClient=!1,this.units=null,this.where=null}castDatumTransformation(t){return"number"==typeof t||"object"==typeof t?t:null}writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime()}writeParameterValues(t,e){if(t){const r={};for(const e in t){const i=t[e];Array.isArray(i)?r[e]=i.map((t=>t instanceof Date?t.getTime():t)):i instanceof Date?r[e]=i.getTime():r[e]=i}e.parameterValues=r}}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10,e.where="1=1"}writeWhere(t,e){e.where=t||"1=1"}clone(){return new w((0,lang/* clone */.o8)({aggregateIds:this.aggregateIds,cacheHint:this.cacheHint,compactGeometryEnabled:this.compactGeometryEnabled,datumTransformation:this.datumTransformation,defaultSpatialReferenceEnabled:this.defaultSpatialReferenceEnabled,distance:this.distance,fullText:this.fullText,formatOf3DObjects:this.formatOf3DObjects,gdbVersion:this.gdbVersion,geometry:this.geometry,geometryPrecision:this.geometryPrecision,groupByFieldsForStatistics:this.groupByFieldsForStatistics,having:this.having,historicMoment:null!=this.historicMoment?new Date(this.historicMoment.getTime()):null,maxAllowableOffset:this.maxAllowableOffset,maxRecordCountFactor:this.maxRecordCountFactor,multipatchOption:this.multipatchOption,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,outStatistics:this.outStatistics,parameterValues:this.parameterValues,pixelSize:this.pixelSize,quantizationParameters:this.quantizationParameters,rangeValues:this.rangeValues,relationParameter:this.relationParameter,resultType:this.resultType,returnDistinctValues:this.returnDistinctValues,returnGeometry:this.returnGeometry,returnCentroid:this.returnCentroid,returnExceededLimitFeatures:this.returnExceededLimitFeatures,returnQueryGeometry:this.returnQueryGeometry,returnM:this.returnM,returnZ:this.returnZ,dynamicDataSource:this.dynamicDataSource,sourceSpatialReference:this.sourceSpatialReference,spatialRelationship:this.spatialRelationship,start:this.start,sqlFormat:this.sqlFormat,text:this.text,timeExtent:this.timeExtent,timeReferenceUnknownClient:this.timeReferenceUnknownClient,units:this.units,where:this.where}))}};R.MAX_MAX_RECORD_COUNT_FACTOR=5,(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],R.prototype,"aggregateIds",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],R.prototype,"cacheHint",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"compactGeometryEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],R.prototype,"datumTransformation",void 0),(0,tslib_es6._)([(0,cast/* cast */.w)("datumTransformation")],R.prototype,"castDatumTransformation",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"defaultSpatialReferenceEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:{overridePolicy:t=>({enabled:t>0})}}})],R.prototype,"distance",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:DataLayerSource/* DataLayerSource */.L,json:{write:!0}})],R.prototype,"dynamicDataSource",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],R.prototype,"formatOf3DObjects",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[i],json:{write:{enabled:!0,overridePolicy(){return{enabled:null!=this.fullText&&this.fullText.length>0}}}}})],R.prototype,"fullText",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],R.prototype,"gdbVersion",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:geometry/* geometryTypes */.yR,json:{read:jsonUtils/* fromJSON */.rS,write:!0}})],R.prototype,"geometry",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],R.prototype,"geometryPrecision",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],json:{write:!0}})],R.prototype,"groupByFieldsForStatistics",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],R.prototype,"having",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Date})],R.prototype,"historicMoment",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("historicMoment")],R.prototype,"writeHistoricMoment",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],R.prototype,"maxAllowableOffset",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,cast:t=>t<1?1:t>R.MAX_MAX_RECORD_COUNT_FACTOR?R.MAX_MAX_RECORD_COUNT_FACTOR:t,json:{write:{overridePolicy:t=>({enabled:t>1})}}})],R.prototype,"maxRecordCountFactor",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["xyFootprint"],json:{write:!0}})],R.prototype,"multipatchOption",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{read:{source:"resultRecordCount"}}})],R.prototype,"num",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],R.prototype,"objectIds",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],json:{write:!0}})],R.prototype,"orderByFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],json:{write:!0}})],R.prototype,"outFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SpatialReference/* default */.A,json:{name:"outSR",write:!0}})],R.prototype,"outSpatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[StatisticDefinition/* default */.A],json:{write:{enabled:!0,overridePolicy(){return{enabled:null!=this.outStatistics&&this.outStatistics.length>0}}}}})],R.prototype,"outStatistics",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],R.prototype,"parameterValues",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("parameterValues")],R.prototype,"writeParameterValues",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Point/* default */.A,json:{write:!0}})],R.prototype,"pixelSize",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:QuantizationParameters/* default */.A,json:{write:!0}})],R.prototype,"quantizationParameters",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Object],json:{write:!0}})],R.prototype,"rangeValues",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:{source:"relationParam"},write:{target:"relationParam",overridePolicy(){return{enabled:"relation"===this.spatialRelationship}}}}})],R.prototype,"relationParameter",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],R.prototype,"resultType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"returnCentroid",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"returnDistinctValues",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!0,write:!0}})],R.prototype,"returnExceededLimitFeatures",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],R.prototype,"returnGeometry",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"returnQueryGeometry",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"returnM",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],R.prototype,"returnZ",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SpatialReference/* default */.A,json:{write:!0}})],R.prototype,"sourceSpatialReference",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)(v,{ignoreUnknown:!1,name:"spatialRel"})],R.prototype,"spatialRelationship",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{read:{source:"resultOffset"}}})],R.prototype,"start",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("start"),(0,writer/* writer */.K)("num")],R.prototype,"writeStart",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],R.prototype,"sqlFormat",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],R.prototype,"text",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:TimeExtent/* default */.A,json:{write:!0}})],R.prototype,"timeExtent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"timeReferenceUnknownClient",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)(g,{ignoreUnknown:!1}),(0,property/* property */.MZ)({json:{write:{overridePolicy(t){return{enabled:!!t&&null!=this.distance&&this.distance>0}}}}})],R.prototype,"units",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{overridePolicy(t){return{enabled:null!=t||null!=this.start&&this.start>0}}}}})],R.prototype,"where",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("where")],R.prototype,"writeWhere",null),R=w=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.rest.support.Query")],R);const b=R;


/***/ }),

/***/ 97724:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17639);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19251);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73446);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77542);
/* harmony import */ var _layers_support_source_DataLayerSource_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44360);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(78983);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var u;let c=u=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY{constructor(t){super(t),this.cacheHint=void 0,this.dynamicDataSource=void 0,this.gdbVersion=null,this.geometryPrecision=void 0,this.historicMoment=null,this.maxAllowableOffset=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.relationshipId=void 0,this.start=void 0,this.num=void 0,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.where=null}_writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime()}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10,this.start>0&&null==this.where&&(e.definitionExpression="1=1")}clone(){return new u((0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__/* .clone */ .o8)({cacheHint:this.cacheHint,dynamicDataSource:this.dynamicDataSource,gdbVersion:this.gdbVersion,geometryPrecision:this.geometryPrecision,historicMoment:this.historicMoment&&new Date(this.historicMoment.getTime()),maxAllowableOffset:this.maxAllowableOffset,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,relationshipId:this.relationshipId,start:this.start,num:this.num,returnGeometry:this.returnGeometry,where:this.where,returnZ:this.returnZ,returnM:this.returnM}))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Boolean,json:{write:!0}})],c.prototype,"cacheHint",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:_layers_support_source_DataLayerSource_js__WEBPACK_IMPORTED_MODULE_8__/* .DataLayerSource */ .L,json:{write:!0}})],c.prototype,"dynamicDataSource",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:!0}})],c.prototype,"gdbVersion",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Number,json:{write:!0}})],c.prototype,"geometryPrecision",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Date})],c.prototype,"historicMoment",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__/* .writer */ .K)("historicMoment")],c.prototype,"_writeHistoricMoment",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Number,json:{write:!0}})],c.prototype,"maxAllowableOffset",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:[Number],json:{write:!0}})],c.prototype,"objectIds",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:[String],json:{write:!0}})],c.prototype,"orderByFields",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:[String],json:{write:!0}})],c.prototype,"outFields",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,json:{read:{source:"outSR"},write:{target:"outSR"}}})],c.prototype,"outSpatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:!0}})],c.prototype,"relationshipId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Number,json:{read:{source:"resultOffset"}}})],c.prototype,"start",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__/* .writer */ .K)("start"),(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__/* .writer */ .K)("num")],c.prototype,"writeStart",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Number,json:{read:{source:"resultRecordCount"}}})],c.prototype,"num",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:!0}})],c.prototype,"returnGeometry",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],c.prototype,"returnM",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],c.prototype,"returnZ",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],c.prototype,"where",void 0),c=u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.rest.support.RelationshipQuery")],c),c.from=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__/* .ensureType */ .dp)(c);const d=c;


/***/ }),

/***/ 41969:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59851);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19251);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73446);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77542);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var c;const n=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONMap */ .J({count:"count",sum:"sum",min:"min",max:"max",avg:"avg",stddev:"stddev",var:"var",exceedslimit:"exceedslimit",percentile_cont:"percentile-continuous",percentile_disc:"percentile-discrete",EnvelopeAggregate:"envelope-aggregate",CentroidAggregate:"centroid-aggregate",ConvexHullAggregate:"convex-hull-aggregate"});let p=c=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY{constructor(t){super(t),this.maxPointCount=void 0,this.maxRecordCount=void 0,this.maxVertexCount=void 0,this.onStatisticField=null,this.outStatisticFieldName=null,this.statisticType=null,this.statisticParameters=null}writeStatisticParameters(t,e){"percentile-continuous"!==this.statisticType&&"percentile-discrete"!==this.statisticType||(e.statisticParameters=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__/* .clone */ .o8)(t))}clone(){return new c({maxPointCount:this.maxPointCount,maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,statisticType:this.statisticType,statisticParameters:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__/* .clone */ .o8)(this.statisticParameters)})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Number,json:{write:!0}})],p.prototype,"maxPointCount",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Number,json:{write:!0}})],p.prototype,"maxRecordCount",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Number,json:{write:!0}})],p.prototype,"maxVertexCount",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:!0}})],p.prototype,"onStatisticField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:!0}})],p.prototype,"outStatisticFieldName",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{read:{source:"statisticType",reader:n.read},write:{target:"statisticType",writer:n.write}}})],p.prototype,"statisticType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Object})],p.prototype,"statisticParameters",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__/* .writer */ .K)("statisticParameters")],p.prototype,"writeStatisticParameters",null),p=c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.rest.support.StatisticDefinition")],p);const m=p;


/***/ }),

/***/ 56051:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ S)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry.js
var geometry = __webpack_require__(17639);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/TimeExtent.js
var TimeExtent = __webpack_require__(19790);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/jsonUtils.js
var jsonUtils = __webpack_require__(1171);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
;// ../node_modules/@arcgis/core/rest/support/TopFilter.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var e;let p=e=class extends JSONSupport/* JSONSupport */.oY{constructor(o){super(o),this.groupByFields=void 0,this.topCount=void 0,this.orderByFields=void 0}clone(){return new e({groupByFields:this.groupByFields,topCount:this.topCount,orderByFields:this.orderByFields})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],json:{write:!0}})],p.prototype,"groupByFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],p.prototype,"topCount",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],json:{write:!0}})],p.prototype,"orderByFields",void 0),p=e=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.rest.support.TopFilter")],p);const i=p;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
;// ../node_modules/@arcgis/core/rest/support/TopFeaturesQuery.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var y;const m=new jsonMap/* JSONMap */.J({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),h=new jsonMap/* JSONMap */.J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let j=y=class extends JSONSupport/* JSONSupport */.oY{constructor(e){super(e),this.cacheHint=void 0,this.distance=void 0,this.geometry=null,this.geometryPrecision=void 0,this.maxAllowableOffset=void 0,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.resultType=null,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.start=void 0,this.spatialRelationship="intersects",this.timeExtent=null,this.topFilter=void 0,this.units=null,this.where="1=1"}writeStart(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10}clone(){return new y((0,lang/* clone */.o8)({cacheHint:this.cacheHint,distance:this.distance,geometry:this.geometry,geometryPrecision:this.geometryPrecision,maxAllowableOffset:this.maxAllowableOffset,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,resultType:this.resultType,returnGeometry:this.returnGeometry,returnZ:this.returnZ,returnM:this.returnM,start:this.start,spatialRelationship:this.spatialRelationship,timeExtent:this.timeExtent,topFilter:this.topFilter,units:this.units,where:this.where}))}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],j.prototype,"cacheHint",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:{overridePolicy:e=>({enabled:e>0})}}})],j.prototype,"distance",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:geometry/* geometryTypes */.yR,json:{read:jsonUtils/* fromJSON */.rS,write:!0}})],j.prototype,"geometry",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],j.prototype,"geometryPrecision",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],j.prototype,"maxAllowableOffset",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{read:{source:"resultRecordCount"}}})],j.prototype,"num",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],j.prototype,"objectIds",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],json:{write:!0}})],j.prototype,"orderByFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],json:{write:!0}})],j.prototype,"outFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SpatialReference/* default */.A,json:{read:{source:"outSR"},write:{target:"outSR"}}})],j.prototype,"outSpatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],j.prototype,"resultType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],j.prototype,"returnGeometry",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],j.prototype,"returnM",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],j.prototype,"returnZ",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{read:{source:"resultOffset"}}})],j.prototype,"start",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("start"),(0,writer/* writer */.K)("num")],j.prototype,"writeStart",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:{source:"spatialRel",reader:m.read},write:{target:"spatialRel",writer:m.write}}})],j.prototype,"spatialRelationship",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:TimeExtent/* default */.A,json:{write:!0}})],j.prototype,"timeExtent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:i,json:{write:!0}})],j.prototype,"topFilter",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:h.read,write:{writer:h.write,overridePolicy(e){return{enabled:null!=e&&null!=this.distance&&this.distance>0}}}}})],j.prototype,"units",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],j.prototype,"where",void 0),j=y=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.rest.support.TopFeaturesQuery")],j),j.from=(0,ensureType/* ensureType */.dp)(j);const S=j;


/***/ }),

/***/ 59740:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ m),
/* harmony export */   r: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _AlgorithmicColorRamp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80196);
/* harmony import */ var _ColorRamp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87673);
/* harmony import */ var _MultipartColorRamp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17771);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const m={key:"type",base:_ColorRamp_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,typeMap:{algorithmic:_AlgorithmicColorRamp_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,multipart:_MultipartColorRamp_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A}};function p(o){return o?.type?"algorithmic"===o.type?_AlgorithmicColorRamp_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.fromJSON(o):"multipart"===o.type?_MultipartColorRamp_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.fromJSON(o):null:null}


/***/ }),

/***/ 59346:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vd: () => (/* binding */ e),
/* harmony export */   Vo: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony exports direct3DObjectFeatureLayerDisplayEnabled, disableDirect3DObjectFeatureLayerDisplay, disableI3SPatching, disableIDBCache, disableSceneLayerEditing, enableDirect3DObjectFeatureLayerDisplay, enableI3SPatching, enableSceneLayerEditing, i3sPatchingEnabled */
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const e=()=>!!(0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("enable-feature:force-wosr"),a=()=>!!has("enable-feature:direct-3d-object-feature-layer-display"),t=()=>_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.add("enable-feature:direct-3d-object-feature-layer-display",!0,!0,!0),i=()=>_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.add("enable-feature:direct-3d-object-feature-layer-display",!1,!0,!0),r=()=>!!has("enable-i3s-patching"),d=()=>_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.add("enable-i3s-patching",!0,!0,!0),c=()=>_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.add("enable-i3s-patching",!1,!0,!0),n=()=>!!(0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("enable-feature:SceneLayer-editing"),l=(e="i3s-patching")=>{switch(c(),i(),_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.add("enable-feature:SceneLayer-editing",!0,!0,!0),e){case"feature-layer-view":t();break;case"i3s-patching":d()}},s=()=>{c(),i(),has.add("enable-feature:SceneLayer-editing",!1,!0,!0)},b=()=>has.add("disable-feature:idb-cache",!0,!0,!0);l("i3s-patching");


/***/ }),

/***/ 44116:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tn: () => (/* binding */ p)
/* harmony export */ });
/* unused harmony exports createFieldInfos, createFieldsContent, createPopupTemplateForFeatureReduction */
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56542);
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42453);
/* harmony import */ var _popup_content_AttachmentsContent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51777);
/* harmony import */ var _popup_content_Content_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27597);
/* harmony import */ var _popup_content_CustomContent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80004);
/* harmony import */ var _popup_content_ExpressionContent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44395);
/* harmony import */ var _popup_content_FieldsContent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3082);
/* harmony import */ var _popup_content_MediaContent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53155);
/* harmony import */ var _popup_content_RelationshipContent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73875);
/* harmony import */ var _popup_content_TextContent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23676);
/* harmony import */ var _popup_FieldInfo_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31386);
/* harmony import */ var _popup_support_FieldInfoFormat_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56473);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function p({displayField:t,editFieldsInfo:n,fields:i,objectIdField:o,title:r},s){if(!i)return null;const l=w({editFieldsInfo:n,fields:i,objectIdField:o},s);if(!l.length)return null;const a=y({titleBase:r,fields:i,displayField:t}),p=j();return new _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({title:a,content:p,fieldInfos:l})}function u(t){const{fields:n,featureReduction:i,title:o}=t,r=i.fields;if(!r)return null;const s=b(r,n??[]);if(!s.length)return null;const l=C();return new e({title:o,content:l,fieldInfos:s})}const c=(e,t)=>t.visibleFieldNames?t.visibleFieldNames.has(e.name):(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .isFieldVisibleByDefault */ .Bz)(e,t);function f(e,t){const n=e;return t&&(e=e.filter((e=>!t.includes(e.type)))),e===n&&(e=e.slice()),e.sort(d),e}function d(e,t){return"oid"===e.type?-1:"oid"===t.type?1:I(e)?-1:I(t)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((t.alias||t.name).toLocaleLowerCase())}function m(e,t){return new s({fieldInfos:w(e,t).filter((e=>e.visible))})}function w(e,n){const i=n?.visibleFieldNames;return f(e.fields??[],n?.ignoreFieldTypes||v).map((n=>new _popup_FieldInfo_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A({fieldName:n.name,isEditable:(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .isFieldEditable */ .R$)(n,e),label:n.alias,format:g(n),visible:c(n,{...e,visibleFieldNames:i})})))}function b(e,t){return e.map((e=>new l({fieldName:e.name,isEditable:!1,label:e.alias,format:F(e,t),visible:!0})))}function F(e,t){const{onStatisticField:n,onStatisticExpression:i,statisticType:o}=e;if(n){const e=t.find((e=>n===e.name));if(e)return g(e)}return"number"===i?.returnType?new a({digitSeparator:!0,places:2}):"count"===o?new a({digitSeparator:!0,places:0}):null}function g(e){switch(e.type){case"small-integer":case"integer":case"single":return new _popup_support_FieldInfoFormat_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A({digitSeparator:!0,places:0});case"double":return new _popup_support_FieldInfoFormat_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A({digitSeparator:!0,places:2});case"string":return (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .isRasterPixelValueField */ .JL)(e.name)?new _popup_support_FieldInfoFormat_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A({digitSeparator:!0,places:0}):null;default:return null}}function j(){return[new _popup_content_FieldsContent_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,new _popup_content_AttachmentsContent_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A]}function C(){return[new s]}function y(e){const t=(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .getDisplayFieldName */ .mB)(e),{titleBase:n}=e;return t?`${n}: {${t.trim()}}`:n??""}function I(e){if("name"===(e.name&&e.name.toLowerCase()))return!0;return"name"===(e.alias&&e.alias.toLowerCase())}const v=["geometry","blob","raster","guid","xml"];


/***/ }),

/***/ 60973:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ h)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(6267);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/fieldUtils.js
var fieldUtils = __webpack_require__(42453);
;// ../node_modules/@arcgis/core/symbols/support/FeatureExpressionInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var i;let p=i=class extends JSONSupport/* JSONSupport */.oY{constructor(r){super(r)}async collectRequiredFields(r,s){return (0,fieldUtils/* collectArcadeFieldNames */.Dx)(r,s,this.expression)}clone(){return new i({expression:this.expression,title:this.title})}equals(r){return this.expression===r.expression&&this.title===r.title}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"expression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"title",void 0),p=i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.FeatureExpressionInfo")],p);const c=p;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/unitConversionUtils.js
var unitConversionUtils = __webpack_require__(97046);
;// ../node_modules/@arcgis/core/symbols/support/ElevationInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var l;const m=(0,jsonMap/* strict */.O)()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),d=new jsonMap/* JSONMap */.J({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let ElevationInfo_c=l=class extends JSONSupport/* JSONSupport */.oY{constructor(e){super(e),this.offset=null}readFeatureExpressionInfo(e,r){return null!=e?e:r.featureExpression&&0===r.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,r,o,t){r[o]=e.write({},t),"0"===e.expression&&(r.featureExpression={value:0})}get mode(){const{offset:e,featureExpressionInfo:r}=this;return this._isOverridden("mode")?this._get("mode"):null!=e||r?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,r){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,r):null}clone(){return new l({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}equals(e){return this.mode===e.mode&&this.offset===e.offset&&this.unit===e.unit&&(0,maybe/* equalsMaybe */.CM)(this.featureExpressionInfo,e.featureExpressionInfo)}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:c,json:{write:!0}})],ElevationInfo_c.prototype,"featureExpressionInfo",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],ElevationInfo_c.prototype,"readFeatureExpressionInfo",null),(0,tslib_es6._)([(0,writer/* writer */.K)("featureExpressionInfo",{featureExpressionInfo:{type:c},"featureExpression.value":{type:[0]}})],ElevationInfo_c.prototype,"writeFeatureExpressionInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:m.apiValues,nonNullable:!0,json:{type:m.jsonValues,read:m.read,write:{writer:m.write,isRequired:!0}}})],ElevationInfo_c.prototype,"mode",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],ElevationInfo_c.prototype,"offset",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:unitConversionUtils/* supportedUnits */.KQ,json:{type:String,read:d.read,write:d.write}})],ElevationInfo_c.prototype,"unit",null),ElevationInfo_c=l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.ElevationInfo")],ElevationInfo_c);const h=ElevationInfo_c;


/***/ }),

/***/ 26207:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A7: () => (/* binding */ u),
/* harmony export */   Cx: () => (/* binding */ c),
/* harmony export */   Hk: () => (/* binding */ a),
/* harmony export */   JJ: () => (/* binding */ y),
/* harmony export */   UK: () => (/* binding */ S),
/* harmony export */   jM: () => (/* binding */ N),
/* harmony export */   x3: () => (/* binding */ O)
/* harmony export */ });
/* unused harmony export getDefaultSymbol2D */
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68882);
/* harmony import */ var _SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40241);
/* harmony import */ var _SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23369);
/* harmony import */ var _TextSymbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42602);
/* harmony import */ var _defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23173);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const S=_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__/* .defaultPointSymbolJSON */ .Cb),u=_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__/* .defaultPolylineSymbolJSON */ .yM),c=_SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__/* .defaultPolygonSymbolJSON */ .WR),a=_TextSymbol_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__/* .defaultTextSymbolJSON */ .JZ);function J(r){if(null==r)return null;switch(r.type){case"mesh":return null;case"point":case"multipoint":return S;case"polyline":return u;case"polygon":case"extent":return c}return null}const N=_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__/* .errorPointSymbolJSON */ .nC),O=_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__/* .errorPolylineSymbolJSON */ .HW),y=_SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__/* .errorPolygonSymbolJSON */ .b6);


/***/ }),

/***/ 23173:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cb: () => (/* binding */ l),
/* harmony export */   HW: () => (/* binding */ s),
/* harmony export */   JZ: () => (/* binding */ t),
/* harmony export */   WR: () => (/* binding */ S),
/* harmony export */   b6: () => (/* binding */ y),
/* harmony export */   nC: () => (/* binding */ r),
/* harmony export */   yM: () => (/* binding */ o)
/* harmony export */ });
/* unused harmony exports defaultColor, defaultOutlineColor */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const e=[252,146,31,255],i=(/* unused pure expression or super */ null && ([153,153,153,255])),l={type:"esriSMS",style:"esriSMSCircle",size:6,color:e,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},o={type:"esriSLS",style:"esriSLSSolid",width:.75,color:e},S={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},t={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},r={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},s={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},y={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null};


/***/ }),

/***/ 38463:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  rS: () => (/* binding */ b),
  M9: () => (/* binding */ l),
  oO: () => (/* binding */ i)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols.js + 1 modules
var symbols = __webpack_require__(30822);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/layerUtils.js
var layerUtils = __webpack_require__(40454);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/Symbol3D.js
var Symbol3D = __webpack_require__(50626);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/WebStyleSymbol.js
var WebStyleSymbol = __webpack_require__(75162);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/PointSymbol3D.js
var PointSymbol3D = __webpack_require__(66960);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleLineSymbol.js + 2 modules
var SimpleLineSymbol = __webpack_require__(40241);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/LineSymbol3D.js
var LineSymbol3D = __webpack_require__(68324);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleMarkerSymbol.js
var SimpleMarkerSymbol = __webpack_require__(23369);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/PictureMarkerSymbol.js
var PictureMarkerSymbol = __webpack_require__(72001);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleFillSymbol.js
var SimpleFillSymbol = __webpack_require__(68882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/MeshSymbol3D.js
var MeshSymbol3D = __webpack_require__(50151);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/PolygonSymbol3D.js
var PolygonSymbol3D = __webpack_require__(65216);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/TextSymbol.js
var TextSymbol = __webpack_require__(42602);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/LabelSymbol3D.js
var LabelSymbol3D = __webpack_require__(27372);
;// ../node_modules/@arcgis/core/symbols/support/symbolConversion.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const a={retainId:!1,ignoreDrivers:!1,hasLabelingContext:!0};function S(S,c=a){if(!S)return{symbol:null};const{retainId:u=a.retainId,ignoreDrivers:d=a.ignoreDrivers,hasLabelingContext:j=a.hasLabelingContext,retainCIM:D=a.retainCIM}=c;let g=null;if((0,symbols/* isSymbol3D */.wk)(S)||S instanceof WebStyleSymbol/* default */.A)g=S.clone();else if("cim"===S.type){const o=S.data?.symbol?.type;if("CIMPointSymbol"!==o)return{error:new Error/* default */.A("symbol-conversion:unsupported-cim-symbol",`CIM symbol of type '${o||"unknown"}' is unsupported in 3D`,{symbol:S})};g=D?S.clone():PointSymbol3D/* default */.A.fromCIMSymbol(S)}else if(S instanceof SimpleLineSymbol/* default */.A)g=LineSymbol3D/* default */.A.fromSimpleLineSymbol(S);else if(S instanceof SimpleMarkerSymbol/* default */.A)g=PointSymbol3D/* default */.A.fromSimpleMarkerSymbol(S);else if(S instanceof PictureMarkerSymbol/* default */.A)g=PointSymbol3D/* default */.A.fromPictureMarkerSymbol(S);else if(S instanceof SimpleFillSymbol/* default */.A)g=c.geometryType&&"mesh"===c.geometryType?MeshSymbol3D/* default */.A.fromSimpleFillSymbol(S):PolygonSymbol3D/* default */.A.fromSimpleFillSymbol(S);else{if(!(S instanceof TextSymbol/* default */.A))return{error:new Error/* default */.A("symbol-conversion:unsupported-2d-symbol",`2D symbol of type '${S.type||S.declaredClass}' is unsupported in 3D`,{symbol:S})};g=j?LabelSymbol3D/* default */.A.fromTextSymbol(S):PointSymbol3D/* default */.A.fromTextSymbol(S)}return u&&g&&"cim"!==g.type&&(g.id=S.id),d&&(0,symbols/* isSymbol3D */.wk)(g)&&g.symbolLayers.forEach((o=>o.ignoreDrivers=!0)),{symbol:g}}

;// ../node_modules/@arcgis/core/symbols/support/jsonUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function l(o,e,n,t){const s=jsonUtils_a(o,{},{context:t,isLabelSymbol:!1});null!=s&&(e[n]=s)}function i(o,e,n,t){const s=jsonUtils_a(o,{},{context:t,isLabelSymbol:!0});null!=s&&(e[n]=s)}function m(o){return o instanceof Symbol3D/* default */.A||o instanceof WebStyleSymbol/* default */.A}function jsonUtils_a(o,t,r){if(null==o)return null;const{context:l,isLabelSymbol:i}=r,a=l?.origin,b=l?.messages;if("web-scene"===a&&!m(o)){const n=S(o,{retainCIM:!0,hasLabelingContext:i});return null!=n.symbol?n.symbol.write(t,l):(b?.push(new Error/* default */.A("symbol:unsupported",`Symbols of type '${o.declaredClass}' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView`,{symbol:o,context:l,error:n.error})),null)}return("web-map"===a||"portal-item"===a&&!(0,layerUtils/* isSceneServiceLayer */.TU)(l?.layer))&&m(o)?(b?.push(new Error/* default */.A("symbol:unsupported",`Symbols of type '${o.declaredClass}' are not supported in web maps and portal items. Use 2D symbology and CIMSymbol instead when working with MapView`,{symbol:o,context:l})),null):o.write(t,l)}function b(e,n){return (0,symbols/* readSymbol */.Bu)(e,null,n)}


/***/ }),

/***/ 28051:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bo: () => (/* binding */ p),
/* harmony export */   cF: () => (/* binding */ c),
/* harmony export */   jg: () => (/* binding */ w),
/* harmony export */   o5: () => (/* binding */ d),
/* harmony export */   yA: () => (/* binding */ b)
/* harmony export */ });
/* unused harmony exports cachedStyles, cleanupStyleUtilsCache */
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86394);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98849);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40189);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20909);
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10282);
/* harmony import */ var _portal_PortalQueryParams_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99990);
/* harmony import */ var _support_featureFlags_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59346);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let u={};async function f(e,t){try{return{data:(await b(e,t)).data,baseUrl:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .removeFile */ .nM)(e),styleUrl:e}}catch(o){return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .throwIfAbortError */ .QP)(o),null}}function i(e,t,r){const o=null!=t.portal?t.portal:_portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.getDefault();let s;const l=`${o.url} - ${o.user&&o.user.username} - ${e}`;return u[l]||(u[l]=y(e,o,r).then((e=>(s=e,e.fetchData()))).then((t=>({data:t,baseUrl:s.itemUrl??"",styleName:e})))),u[l]}function m(){u&&(u={})}function y(e,r,o){return r.load(o).then((()=>{const t=new _portal_PortalQueryParams_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A({disableExtraQuery:!0,query:`owner:${h} AND type:${j} AND typekeywords:"${e}"`});return r.queryItems(t,o)})).then((({results:r})=>{let s=null;const n=e.toLowerCase();if(r&&Array.isArray(r))for(const e of r){const t=e.typeKeywords?.some((e=>e.toLowerCase()===n));if(t&&e.type===j&&e.owner===h){s=e;break}}if(!s)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("symbolstyleutils:style-not-found",`The style '${e}' could not be found`,{styleName:e});return s.load(o)}))}function c(e,r,o){return null!=e?.styleUrl?f(e.styleUrl,o):null!=e?.styleName?i(e.styleName,r,o):Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function p(e){return null===e||"CIMSymbolReference"===e.type?e:{type:"CIMSymbolReference",symbol:e}}function d(e,t,r=["gltf"]){if("cimRef"===t)return e.cimRef;if(e.formatInfos&&!(0,_support_featureFlags_js__WEBPACK_IMPORTED_MODULE_6__/* .enableWebStyleForceWOSR */ .Vd)())for(const o of r){const t=e.formatInfos.find((e=>e.type===o));if(t)return t.href}return e.webRef}function b(t,r){const s={responseType:"json",query:{f:"json"},...r};return (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .normalize */ .S8)(t),s)}const h="esri_en",j="Style",w="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json";


/***/ }),

/***/ 97046:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ao: () => (/* binding */ r),
/* harmony export */   KQ: () => (/* binding */ o)
/* harmony export */ });
/* unused harmony export supportsUnit */
/* harmony import */ var _renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10301);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function n(n){return!!n&&null!=t[n]}function r(n){return 1/(_renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .meterIn */ .j[n]||1)}function e(){const n=Object.keys(_renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .meterIn */ .j);return n.sort(),n}const o=e();


/***/ }),

/***/ 96023:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TA: () => (/* binding */ r),
/* harmony export */   Z3: () => (/* binding */ t),
/* harmony export */   ZJ: () => (/* binding */ s),
/* harmony export */   w5: () => (/* binding */ a)
/* harmony export */ });
/* unused harmony exports versionCollection, versionCollectionCount */
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33880);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const r=(0,_core_uuid_js__WEBPACK_IMPORTED_MODULE_0__/* .generateLowercaseBracedUUID */ .vD)(),t=new Map,n=new Map,o=new Map;async function s(e,t,o=!1){if(!e||!t)return!0;const s=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),a=n.get(s)?.entries();if(a)for(const[n,i]of a)if(i.name===t){const e=!i.stack?.hasForwardEdits();if(!e&&o){const[{deleteForwardEdits:e},{default:t}]=await Promise.all([__webpack_require__.e(/* import() */ 3093).then(__webpack_require__.bind(__webpack_require__, 43093)),__webpack_require__.e(/* import() */ 741).then(__webpack_require__.bind(__webpack_require__, 80741))]);return e(s,n,new t({sessionId:r,moment:i.moment}))}return e}return!0}function a(e,r){if(!e)return!1;const t=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),o=n.get(t)?.entries();if(o)for(const[n,s]of o)if(s.name===r){return"edit"===s.lockType}return!1}


/***/ }),

/***/ 85205:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  zf: () => (/* binding */ v),
  ur: () => (/* binding */ c),
  Np: () => (/* binding */ d),
  tc: () => (/* binding */ f),
  kZ: () => (/* binding */ b)
});

// UNUSED EXPORTS: hasClusterCountVV

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/MD5.js
var MD5 = __webpack_require__(69075);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/AggregateField.js
var AggregateField = __webpack_require__(94301);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/ExpressionInfo.js
var ExpressionInfo = __webpack_require__(54746);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/AuthoringInfo.js + 3 modules
var AuthoringInfo = __webpack_require__(20699);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/visualVariables/SizeVariable.js + 1 modules
var SizeVariable = __webpack_require__(14977);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/visualVariables/support/SizeStop.js
var SizeStop = __webpack_require__(68745);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/visualVariables/support/sizeVariableUtils.js
var sizeVariableUtils = __webpack_require__(99412);
;// ../node_modules/@arcgis/core/views/2d/engine/LevelDependentSizeVariable.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var l;let n=l=class extends SizeVariable/* default */.A{writeLevels(e,s,i){for(const t in e){const e=this.levels[t];return void(s.stops=e)}}clone(){return new l({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:(0,sizeVariableUtils/* isSizeVariable */.of)(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:(0,sizeVariableUtils/* isSizeVariable */.of)(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops?.map((e=>e.clone())),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions?.clone(),levels:(0,lang/* clone */.o8)(this.levels)})}};(0,tslib_es6._)([(0,property/* property */.MZ)()],n.prototype,"levels",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("levels")],n.prototype,"writeLevels",null),n=l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.2d.engine.LevelDependentSizeVariable")],n);

;// ../node_modules/@arcgis/core/views/2d/layers/support/clusterUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const o=Logger/* default */.A.getLogger("esri.views.2d.layers.support.clusterUtils");has/* default */.A.add("esri-cluster-arcade-enabled",!0);const p=(0,has/* default */.A)("esri-cluster-arcade-enabled"),c=(e,r,s,i,n)=>{const t=r.clone();if(!b(t))return t;if(t.authoringInfo||(t.authoringInfo=new AuthoringInfo/* default */.A),t.authoringInfo.isAutoGenerated=!0,"visualVariables"in t){const r=(t.visualVariables||[]).filter((e=>"$view.scale"!==e.valueExpression)),a=d(r);r.forEach((r=>{"rotation"===r.type?r.field?r.field=E(e,r.field,"avg_angle","number"):r.valueExpression&&(r.field=x(e,r.valueExpression,"avg_angle","number"),r.valueExpression=null):r.normalizationField?(r.field=E(e,r.field,"avg_norm","number",r.normalizationField),r.normalizationField=null):r.field?r.field=E(e,r.field,"avg","number"):r.valueExpression&&(r.field=x(e,r.valueExpression,"avg","number"),r.valueExpression=null)})),null==a&&!m(r)&&n&&(r.push(v(s,i)),t.dynamicClusterSize=!0),t.visualVariables=r}switch(t.type){case"simple":break;case"pie-chart":for(const r of t.attributes)r.field?r.field=E(e,r.field,"sum","number"):r.valueExpression&&(r.field=x(e,r.valueExpression,"sum","number"),r.valueExpression=null);break;case"unique-value":t.field?t.field=E(e,t.field,"mode","string"):t.valueExpression&&(t.field=x(e,t.valueExpression,"mode","string"),t.valueExpression=null);break;case"class-breaks":t.normalizationField?(t.field=E(e,t.field,"avg_norm","number",t.normalizationField),t.normalizationField=null):t.field?t.field=E(e,t.field,"avg","number"):t.valueExpression&&(t.field=x(e,t.valueExpression,"avg","number"),t.valueExpression=null)}return t},d=e=>{for(const r of e)if("size"===r.type)return r;return null};function f(e,r,s){const i=e.clone();let n=!1;if("visualVariables"in i){const e=(i.visualVariables||[]).filter((e=>"$view.scale"!==e.valueExpression));null==d(e)&&(i.visualVariables||(i.visualVariables=[]),i.visualVariables.push(v(r,s)),i.dynamicClusterSize=!0,n=!0)}return{renderer:i,didInject:n}}const m=e=>{for(const r of e)if("cluster_count"===r.field)return!0;return!1},v=(e,r)=>{const s=[new SizeStop/* default */.A({value:0,size:0}),new SizeStop/* default */.A({value:1})];if(null==r)return new SizeVariable/* default */.A({field:"cluster_count",stops:[...s,new SizeStop/* default */.A({value:2,size:0})]});const i=Object.keys(r).reduce(((i,n)=>({...i,[n]:[...s,new SizeStop/* default */.A({value:Math.max(2,r[n].minValue),size:e.clusterMinSize}),new SizeStop/* default */.A({value:Math.max(3,r[n].maxValue),size:e.clusterMaxSize})]})),{});return new n({field:"cluster_count",levels:i})},b=r=>{const s=s=>o.error(new Error/* default */.A("Unsupported-renderer",s,{renderer:r}));if(!r)return!1;switch(r.type){case"unique-value":if(r.field2||r.field3)return s("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1;break;case"class-breaks":if(r.normalizationField){const e=r.normalizationType;if("field"!==e)return s(`FeatureReductionCluster does not support a normalizationType of ${e}`),!1}break;case"simple":case"pie-chart":break;default:return s(`FeatureReductionCluster does not support renderers of type ${r.type}`),!1}if(!p){if("valueExpression"in r&&r.valueExpression)return s("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in r&&r.visualVariables||[]).some((e=>!(!("valueExpression"in e)||!e.valueExpression))))return s("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0};function g(e,r,i){switch(e){case"sum":return`cluster_sum_${r}`;case"avg":case"avg_angle":return`cluster_avg_${r}`;case"mode":return`cluster_type_${r}`;case"avg_norm":{const e=i,n="field",a=r.toLowerCase()+",norm:"+n+","+e.toLowerCase();return"cluster_avg_"+(0,MD5/* createMD5Hash */.d)(a)}}}function x(e,r,a,t){const l=(0,MD5/* createMD5Hash */.d)(r),u="mode"===a?`cluster_type_${l}`:"sum"===a?`cluster_sum_${l}`:`cluster_avg_${l}`;return e.some((e=>e.name===u))||e.push(new AggregateField/* default */.A({name:u,isAutoGenerated:!0,onStatisticExpression:new ExpressionInfo/* default */.A({expression:r,returnType:t}),statisticType:a})),u}function E(e,r,s,a,t){if("cluster_count"===r||e.some((e=>e.name===r)))return r;const l=g(s,r,t);return e.some((e=>e.name===l))||("avg_norm"===s?e.push(new AggregateField/* default */.A({name:l,isAutoGenerated:!0,onStatisticExpression:new ExpressionInfo/* default */.A({expression:`$feature.${r} / $feature.${t}`,returnType:a}),statisticType:"avg"})):e.push(new AggregateField/* default */.A({name:l,isAutoGenerated:!0,onStatisticField:r,statisticType:s}))),l}


/***/ }),

/***/ 15954:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ A)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var A;!function(A){A[A.SAVE=0]="SAVE",A[A.SAVE_AS=1]="SAVE_AS"}(A||(A={}));


/***/ })

};
;