"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9439,3432],{97588:(t,e,s)=>{s.r(e),s.d(e,{default:()=>F});var r=s(66866),o=(s(17639),s(98849)),i=s(40189),n=s(20909),a=s(21564),p=(s(73446),s(85569),s(39831)),u=s(75094),l=s(63863),d=s(83780),c=s(45307),y=s(90752),h=s(57822),m=s(84698);let v=class extends c.A{constructor(t){super(t),this.type="csv",this.refresh=(0,i.sg)((async t=>{await this.load();const{extent:e,timeExtent:s}=await this._connection.invoke("refresh",t);return e&&(this.sourceJSON.extent=e),s&&(this.sourceJSON.timeInfo.timeExtent=[s.start,s.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}))}load(t){const e=null!=t?t.signal:null;return this.addResolvingPromise(this._startWorker(e)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(t,e={}){await this.load(e);const s=await this._connection.invoke("queryFeatures",t?t.toJSON():null,e);return h.A.fromJSON(s)}async queryFeaturesJSON(t,e={}){return await this.load(e),this._connection.invoke("queryFeatures",t?t.toJSON():null,e)}async queryFeatureCount(t,e={}){return await this.load(e),this._connection.invoke("queryFeatureCount",t?t.toJSON():null,e)}async queryObjectIds(t,e={}){return await this.load(e),this._connection.invoke("queryObjectIds",t?t.toJSON():null,e)}async queryExtent(t,e={}){await this.load(e);const s=await this._connection.invoke("queryExtent",t?t.toJSON():null,e);return{count:s.count,extent:m.A.fromJSON(s.extent)}}async querySnapping(t,e={}){return await this.load(e),this._connection.invoke("querySnapping",t,e)}async _startWorker(t){this._connection=await(0,y.ho)("CSVSourceWorker",{strategy:(0,p.A)("feature-layers-workers")?"dedicated":"local",signal:t,registryTarget:this});const{url:e,delimiter:s,fields:r,latitudeField:o,longitudeField:i,spatialReference:n,timeInfo:a}=this.loadOptions,u=await this._connection.invoke("load",{url:e,customParameters:this.customParameters,parsingOptions:{delimiter:s,fields:r?.map((t=>t.toJSON())),latitudeField:o,longitudeField:i,spatialReference:n?.toJSON(),timeInfo:a?.toJSON()}},{signal:t});this.locationInfo=u.locationInfo,this.sourceJSON=u.layerDefinition,this.delimiter=u.delimiter}};(0,r._)([(0,a.MZ)()],v.prototype,"type",void 0),(0,r._)([(0,a.MZ)()],v.prototype,"loadOptions",void 0),(0,r._)([(0,a.MZ)()],v.prototype,"customParameters",void 0),(0,r._)([(0,a.MZ)()],v.prototype,"locationInfo",void 0),(0,r._)([(0,a.MZ)()],v.prototype,"sourceJSON",void 0),(0,r._)([(0,a.MZ)()],v.prototype,"delimiter",void 0),v=(0,r._)([(0,l.$)("esri.layers.graphics.sources.CSVSource")],v);var g=s(20061),f=s(24587),S=s(63680),w=s(78983);function A(t,e){throw new o.A(e,`CSVLayer (title: ${t.title}, id: ${t.id}) cannot be saved to a portal item`)}let C=class extends d.default{constructor(...t){super(...t),this.geometryType="point",this.capabilities=(0,g.f)(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.spatialReference=w.A.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(t,e){return"string"==typeof t?{url:t,...e}:t}load(t){const e=null!=t?t.signal:null,s=this.loadFromPortal({supportedTypes:["CSV"],supportsData:!1},t).catch(i.QP).then((async()=>this.initLayerProperties(await this.createGraphicsSource(e))));return this.addResolvingPromise(s),Promise.resolve(this)}get isTable(){return this.loaded&&null==this.geometryType}readWebMapLabelsVisible(t,e){return null!=e.showLabels?e.showLabels:!!e.layerDefinition?.drawingInfo?.labelingInfo}set url(t){if(!t)return void this._set("url",t);const e=(0,n.An)(t);this._set("url",e.path),e.query&&(this.customParameters={...this.customParameters,...e.query})}async createGraphicsSource(t){const e=new v({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField??void 0,longitudeField:this.longitudeField??void 0,spatialReference:this.spatialReference??void 0,timeInfo:this.timeInfo??void 0,url:this.url},customParameters:this.customParameters??void 0});return this._set("source",e),await e.load({signal:t}),this.read({locationInfo:e.locationInfo,columnDelimiter:e.delimiter},{origin:"service",url:this.parsedUrl}),e}queryFeatures(t,e){return this.load().then((()=>this.source.queryFeatures(f.A.from(t)||this.createQuery()))).then((t=>{if(t?.features)for(const e of t.features)e.layer=e.sourceLayer=this;return t}))}queryObjectIds(t,e){return this.load().then((()=>this.source.queryObjectIds(f.A.from(t)||this.createQuery())))}queryFeatureCount(t,e){return this.load().then((()=>this.source.queryFeatureCount(f.A.from(t)||this.createQuery())))}queryExtent(t,e){return this.load().then((()=>this.source.queryExtent(f.A.from(t)||this.createQuery())))}read(t,e){super.read(t,e),e&&"service"===e.origin&&this.revert(["latitudeField","longitudeField"],"service")}write(t,e){return super.write(t,{...e,writeLayerSchema:!0})}clone(){throw new o.A("csv-layer:clone",`CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`)}async save(t){return A(this,"csv-layer:save")}async saveAs(t,e){return A(this,"csv-layer:save-as")}async hasDataChanged(){try{const{dataChanged:t,updates:e}=await this.source.refresh(this.customParameters);return null!=e&&this.read(e,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),t}catch{}return!1}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};(0,r._)([(0,a.MZ)({readOnly:!0,json:{read:!1,write:!1}})],C.prototype,"capabilities",void 0),(0,r._)([(0,a.MZ)({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],C.prototype,"delimiter",void 0),(0,r._)([(0,a.MZ)({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],C.prototype,"editingEnabled",void 0),(0,r._)([(0,a.MZ)({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],C.prototype,"fields",void 0),(0,r._)([(0,a.MZ)({type:Boolean,readOnly:!0})],C.prototype,"isTable",null),(0,r._)([(0,u.w)("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],C.prototype,"readWebMapLabelsVisible",null),(0,r._)([(0,a.MZ)({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],C.prototype,"latitudeField",void 0),(0,r._)([(0,a.MZ)({type:["show","hide"]})],C.prototype,"listMode",void 0),(0,r._)([(0,a.MZ)({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],C.prototype,"locationType",void 0),(0,r._)([(0,a.MZ)({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],C.prototype,"longitudeField",void 0),(0,r._)([(0,a.MZ)({type:["CSV"]})],C.prototype,"operationalLayerType",void 0),(0,r._)([(0,a.MZ)()],C.prototype,"outFields",void 0),(0,r._)([(0,a.MZ)({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],C.prototype,"path",void 0),(0,r._)([(0,a.MZ)({json:{read:!1},cast:null,type:v,readOnly:!0})],C.prototype,"source",void 0),(0,r._)([(0,a.MZ)({json:{read:!1},value:"csv",readOnly:!0})],C.prototype,"type",void 0),(0,r._)([(0,a.MZ)({json:{read:S.r,write:{isRequired:!0,ignoreOrigin:!0,writer:S.w}}})],C.prototype,"url",null),C=(0,r._)([(0,l.$)("esri.layers.CSVLayer")],C);const F=C},22567:(t,e,s)=>{s.d(e,{F:()=>r});const r={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByAnonymous:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},20061:(t,e,s)=>{s.d(e,{F0:()=>a,Vx:()=>l,e2:()=>d,f:()=>c});var r=s(39831),o=s(19251),i=s(22567),n=s(23173);function a(t){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?n.Cb:"esriGeometryPolyline"===t?n.yM:n.WR}}}const p=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let u=1;function l(t,e){if((0,r.A)("esri-csp-restrictions"))return()=>({[e]:null,...t});try{let s=`this.${e} = null;`;for(const e in t)s+=`this${p.test(e)?`.${e}`:`["${e}"]`} = ${JSON.stringify(t[e])};`;const r=new Function(`\n      return class AttributesClass$${u++} {\n        constructor() {\n          ${s};\n        }\n      }\n    `)();return()=>new r}catch(s){return()=>({[e]:null,...t})}}function d(t={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,o.o8)(t)}}]}function c(t,e){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:e,supportsDelete:e,supportsEditing:e,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:e,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:i.F,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:e,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}},25392:(t,e,s)=>{s.d(e,{A:()=>y});var r=s(66866),o=s(24793),i=s(21877),n=s(21564),a=(s(73446),s(85569),s(39831),s(75094)),p=s(63863),u=s(77542),l=s(38938),d=s(48330);let c=class extends((0,o.O)(i.oY)){constructor(t){super(t),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(t){const e={};for(const s of Object.keys(t))e[s]=(0,l.rS)(t[s]);return e}writeDomains(t,e){const s={};for(const r of Object.keys(t))t[r]&&(s[r]=t[r]?.toJSON());e.domains=s}};(0,r._)([(0,n.MZ)({json:{write:!0}})],c.prototype,"id",void 0),(0,r._)([(0,n.MZ)({json:{write:!0}})],c.prototype,"name",void 0),(0,r._)([(0,n.MZ)({json:{write:!0}})],c.prototype,"domains",void 0),(0,r._)([(0,a.w)("domains")],c.prototype,"readDomains",null),(0,r._)([(0,u.K)("domains")],c.prototype,"writeDomains",null),(0,r._)([(0,n.MZ)({type:[d.A],json:{write:!0}})],c.prototype,"templates",void 0),c=(0,r._)([(0,p.$)("esri.layers.support.FeatureType")],c);const y=c},8585:(t,e,s)=>{s.d(e,{A:()=>l});var r,o=s(66866),i=s(48982),n=s(21877),a=s(21564),p=(s(73446),s(85569),s(39831),s(63863));let u=r=class extends n.oY{constructor(t){super(t),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new i.A}clone(){return new r({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,o._)([(0,a.MZ)({type:String,json:{write:!0}})],u.prototype,"floorField",void 0),(0,o._)([(0,a.MZ)({json:{read:!1,write:!1}})],u.prototype,"viewAllMode",void 0),(0,o._)([(0,a.MZ)({json:{read:!1,write:!1}})],u.prototype,"viewAllLevelIds",void 0),u=r=(0,o._)([(0,p.$)("esri.layers.support.LayerFloorInfo")],u);const l=u},90351:(t,e,s)=>{s.d(e,{S:()=>d});var r=s(39831),o=s(16123);function i(t,e,s){return!!a(t,e,s)}function n(t,e,s){return a(t,e,s)}function a(t,e,s){return t&&t.hasOwnProperty(e)?t[e]:s}const p={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function u(t){const e=t?.supportedSpatialAggregationStatistics?.map((t=>t.toLowerCase()));return{envelope:!!e?.includes("envelopeaggregate"),centroid:!!e?.includes("centroidaggregate"),convexHull:!!e?.includes("convexhullaggregate")}}function l(t,e){const s=t?.supportedOperationsWithCacheHint?.map((t=>t.toLowerCase()));return!!s?.includes(e.toLowerCase())}function d(t,e){return{analytics:c(t),attachment:y(t),data:h(t),metadata:m(t),operations:v(t.capabilities,t,e),query:g(t,e),queryRelated:f(t),queryTopFeatures:S(t),editing:w(t)}}function c(t){return{supportsCacheHint:l(t.advancedQueryCapabilities,"queryAnalytics")}}function y(t){const e=t.attachmentProperties,s={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:l(t.advancedQueryCapabilities,"queryAttachments"),supportsResize:i(t,"supportsAttachmentsResizing",!1)};return e&&Array.isArray(e)&&e.forEach((t=>{const e=p[t.name];e&&(s[e]=!!t.isEnabled)})),s}function h(t){return{isVersioned:i(t,"isDataVersioned",!1),supportsAttachment:i(t,"hasAttachments",!1),supportsM:i(t,"hasM",!1),supportsZ:i(t,"hasZ",!1)}}function m(t){return{supportsAdvancedFieldProperties:i(t,"supportsFieldDescriptionProperty",!1)}}function v(t,e,s){const r=t?t.toLowerCase().split(",").map((t=>t.trim())):[],n=s?(0,o.qg)(s):null,a=r.includes(null!=n&&"MapServer"===n.serverType?"data":"query"),p=r.includes("editing")&&!e.datesInUnknownTimezone;let u=p&&r.includes("create"),l=p&&r.includes("delete"),d=p&&r.includes("update");const c=r.includes("changetracking"),y=e.advancedQueryCapabilities;return p&&!(u||l||d)&&(u=l=d=!0),{supportsCalculate:i(e,"supportsCalculate",!1),supportsTruncate:i(e,"supportsTruncate",!1),supportsValidateSql:i(e,"supportsValidateSql",!1),supportsAdd:u,supportsDelete:l,supportsEditing:p,supportsChangeTracking:c,supportsQuery:a,supportsQueryAnalytics:i(y,"supportsQueryAnalytic",!1),supportsQueryAttachments:i(y,"supportsQueryAttachments",!1),supportsQueryTopFeatures:i(y,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:i(e,"supportsAttachmentsResizing",!1),supportsSync:r.includes("sync"),supportsUpdate:d,supportsExceedsLimitStatistics:i(e,"supportsExceedsLimitStatistics",!1),supportsAsyncConvert3D:i(e,"supportsAsyncConvert3D",!1)}}function g(t,e){const s=t.advancedQueryCapabilities,a=t.ownershipBasedAccessControlForFeatures,p=t.archivingInfo,d=t.currentVersion,c=e?.includes("MapServer"),y=!c||d>=(0,r.A)("mapserver-pbf-version-support"),h=(0,o.Wo)(e),m=new Set((t.supportedQueryFormats??"").split(",").map((t=>t.toLowerCase().trim())));return{supportsStatistics:i(s,"supportsStatistics",t.supportsStatistics),supportsPercentileStatistics:i(s,"supportsPercentileStatistics",!1),supportsSpatialAggregationStatistics:i(s,"supportsSpatialAggregationStatistics",!1),supportedSpatialAggregationStatistics:u(s),supportsCentroid:i(s,"supportsReturningGeometryCentroid",!1),supportsDistance:i(s,"supportsQueryWithDistance",!1),supportsDistinct:i(s,"supportsDistinct",t.supportsAdvancedQueries),supportsExtent:i(s,"supportsReturningQueryExtent",!1),supportsGeometryProperties:i(s,"supportsReturningGeometryProperties",!1),supportsHavingClause:i(s,"supportsHavingClause",!1),supportsOrderBy:i(s,"supportsOrderBy",t.supportsAdvancedQueries),supportsPagination:i(s,"supportsPagination",!1),supportsQuantization:i(t,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:i(t,"supportsQuantizationEditMode",!1),supportsQueryGeometry:i(t,"supportsReturningQueryGeometry",!1),supportsResultType:i(s,"supportsQueryWithResultType",!1),supportsMaxRecordCountFactor:i(s,"supportsMaxRecordCountFactor",!1),supportsSqlExpression:i(s,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:i(t,"useStandardizedQueries",!1),supportsTopFeaturesQuery:i(s,"supportsTopFeaturesQuery",!1),supportsQueryByAnonymous:i(a,"allowAnonymousToQuery",!0),supportsQueryByOthers:i(a,"allowOthersToQuery",!0),supportsHistoricMoment:i(p,"supportsQueryWithHistoricMoment",!1),supportsFormatPBF:y&&m.has("pbf"),supportsDisjointSpatialRelationship:i(s,"supportsDisjointSpatialRel",!1),supportsCacheHint:i(s,"supportsQueryWithCacheHint",!1)||l(s,"query"),supportsDefaultSpatialReference:i(s,"supportsDefaultSR",!1),supportsCompactGeometry:h,supportsFullTextSearch:i(s,"supportsFullTextSearch",!1),maxRecordCountFactor:n(t,"maxRecordCountFactor",void 0),maxRecordCount:n(t,"maxRecordCount",void 0),standardMaxRecordCount:n(t,"standardMaxRecordCount",void 0),tileMaxRecordCount:n(t,"tileMaxRecordCount",void 0)}}function f(t){const e=t.advancedQueryCapabilities,s=i(e,"supportsAdvancedQueryRelated",!1);return{supportsPagination:i(e,"supportsQueryRelatedPagination",!1),supportsCount:s,supportsOrderBy:s,supportsCacheHint:l(e,"queryRelated")}}function S(t){return{supportsCacheHint:l(t.advancedQueryCapabilities,"queryTopFilter")}}function w(t){const e=t.ownershipBasedAccessControlForFeatures,s=t?t.advancedEditingCapabilities:void 0;return{supportsGeometryUpdate:i(t,"allowGeometryUpdates",!0),supportsGlobalId:i(t,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:i(t,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:i(t,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:i(t,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:i(t,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:i(e,"allowAnonymousToDelete",!0),supportsDeleteByOthers:i(e,"allowOthersToDelete",!0),supportsUpdateByAnonymous:i(e,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:i(e,"allowOthersToUpdate",!0),supportsAsyncApplyEdits:i(s,"supportsAsyncApplyEdits",!1),zDefault:n(t,"zDefault",void 0)}}}}]);