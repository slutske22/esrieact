"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3432],{25392:(t,s,e)=>{e.d(s,{A:()=>y});var o=e(66866),r=e(24793),p=e(21877),u=e(21564),n=(e(73446),e(85569),e(39831),e(75094)),i=e(63863),a=e(77542),l=e(38938),c=e(48330);let d=class extends((0,r.O)(p.oY)){constructor(t){super(t),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(t){const s={};for(const e of Object.keys(t))s[e]=(0,l.rS)(t[e]);return s}writeDomains(t,s){const e={};for(const o of Object.keys(t))t[o]&&(e[o]=t[o]?.toJSON());s.domains=e}};(0,o._)([(0,u.MZ)({json:{write:!0}})],d.prototype,"id",void 0),(0,o._)([(0,u.MZ)({json:{write:!0}})],d.prototype,"name",void 0),(0,o._)([(0,u.MZ)({json:{write:!0}})],d.prototype,"domains",void 0),(0,o._)([(0,n.w)("domains")],d.prototype,"readDomains",null),(0,o._)([(0,a.K)("domains")],d.prototype,"writeDomains",null),(0,o._)([(0,u.MZ)({type:[c.A],json:{write:!0}})],d.prototype,"templates",void 0),d=(0,o._)([(0,i.$)("esri.layers.support.FeatureType")],d);const y=d},8585:(t,s,e)=>{e.d(s,{A:()=>l});var o,r=e(66866),p=e(48982),u=e(21877),n=e(21564),i=(e(73446),e(85569),e(39831),e(63863));let a=o=class extends u.oY{constructor(t){super(t),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new p.A}clone(){return new o({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,r._)([(0,n.MZ)({type:String,json:{write:!0}})],a.prototype,"floorField",void 0),(0,r._)([(0,n.MZ)({json:{read:!1,write:!1}})],a.prototype,"viewAllMode",void 0),(0,r._)([(0,n.MZ)({json:{read:!1,write:!1}})],a.prototype,"viewAllLevelIds",void 0),a=o=(0,r._)([(0,i.$)("esri.layers.support.LayerFloorInfo")],a);const l=a},90351:(t,s,e)=>{e.d(s,{S:()=>c});var o=e(39831),r=e(16123);function p(t,s,e){return!!n(t,s,e)}function u(t,s,e){return n(t,s,e)}function n(t,s,e){return t&&t.hasOwnProperty(s)?t[s]:e}const i={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function a(t){const s=t?.supportedSpatialAggregationStatistics?.map((t=>t.toLowerCase()));return{envelope:!!s?.includes("envelopeaggregate"),centroid:!!s?.includes("centroidaggregate"),convexHull:!!s?.includes("convexhullaggregate")}}function l(t,s){const e=t?.supportedOperationsWithCacheHint?.map((t=>t.toLowerCase()));return!!e?.includes(s.toLowerCase())}function c(t,s){return{analytics:d(t),attachment:y(t),data:m(t),metadata:h(t),operations:v(t.capabilities,t,s),query:A(t,s),queryRelated:C(t),queryTopFeatures:g(t),editing:w(t)}}function d(t){return{supportsCacheHint:l(t.advancedQueryCapabilities,"queryAnalytics")}}function y(t){const s=t.attachmentProperties,e={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:l(t.advancedQueryCapabilities,"queryAttachments"),supportsResize:p(t,"supportsAttachmentsResizing",!1)};return s&&Array.isArray(s)&&s.forEach((t=>{const s=i[t.name];s&&(e[s]=!!t.isEnabled)})),e}function m(t){return{isVersioned:p(t,"isDataVersioned",!1),supportsAttachment:p(t,"hasAttachments",!1),supportsM:p(t,"hasM",!1),supportsZ:p(t,"hasZ",!1)}}function h(t){return{supportsAdvancedFieldProperties:p(t,"supportsFieldDescriptionProperty",!1)}}function v(t,s,e){const o=t?t.toLowerCase().split(",").map((t=>t.trim())):[],u=e?(0,r.qg)(e):null,n=o.includes(null!=u&&"MapServer"===u.serverType?"data":"query"),i=o.includes("editing")&&!s.datesInUnknownTimezone;let a=i&&o.includes("create"),l=i&&o.includes("delete"),c=i&&o.includes("update");const d=o.includes("changetracking"),y=s.advancedQueryCapabilities;return i&&!(a||l||c)&&(a=l=c=!0),{supportsCalculate:p(s,"supportsCalculate",!1),supportsTruncate:p(s,"supportsTruncate",!1),supportsValidateSql:p(s,"supportsValidateSql",!1),supportsAdd:a,supportsDelete:l,supportsEditing:i,supportsChangeTracking:d,supportsQuery:n,supportsQueryAnalytics:p(y,"supportsQueryAnalytic",!1),supportsQueryAttachments:p(y,"supportsQueryAttachments",!1),supportsQueryTopFeatures:p(y,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:p(s,"supportsAttachmentsResizing",!1),supportsSync:o.includes("sync"),supportsUpdate:c,supportsExceedsLimitStatistics:p(s,"supportsExceedsLimitStatistics",!1),supportsAsyncConvert3D:p(s,"supportsAsyncConvert3D",!1)}}function A(t,s){const e=t.advancedQueryCapabilities,n=t.ownershipBasedAccessControlForFeatures,i=t.archivingInfo,c=t.currentVersion,d=s?.includes("MapServer"),y=!d||c>=(0,o.A)("mapserver-pbf-version-support"),m=(0,r.Wo)(s),h=new Set((t.supportedQueryFormats??"").split(",").map((t=>t.toLowerCase().trim())));return{supportsStatistics:p(e,"supportsStatistics",t.supportsStatistics),supportsPercentileStatistics:p(e,"supportsPercentileStatistics",!1),supportsSpatialAggregationStatistics:p(e,"supportsSpatialAggregationStatistics",!1),supportedSpatialAggregationStatistics:a(e),supportsCentroid:p(e,"supportsReturningGeometryCentroid",!1),supportsDistance:p(e,"supportsQueryWithDistance",!1),supportsDistinct:p(e,"supportsDistinct",t.supportsAdvancedQueries),supportsExtent:p(e,"supportsReturningQueryExtent",!1),supportsGeometryProperties:p(e,"supportsReturningGeometryProperties",!1),supportsHavingClause:p(e,"supportsHavingClause",!1),supportsOrderBy:p(e,"supportsOrderBy",t.supportsAdvancedQueries),supportsPagination:p(e,"supportsPagination",!1),supportsQuantization:p(t,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:p(t,"supportsQuantizationEditMode",!1),supportsQueryGeometry:p(t,"supportsReturningQueryGeometry",!1),supportsResultType:p(e,"supportsQueryWithResultType",!1),supportsMaxRecordCountFactor:p(e,"supportsMaxRecordCountFactor",!1),supportsSqlExpression:p(e,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:p(t,"useStandardizedQueries",!1),supportsTopFeaturesQuery:p(e,"supportsTopFeaturesQuery",!1),supportsQueryByAnonymous:p(n,"allowAnonymousToQuery",!0),supportsQueryByOthers:p(n,"allowOthersToQuery",!0),supportsHistoricMoment:p(i,"supportsQueryWithHistoricMoment",!1),supportsFormatPBF:y&&h.has("pbf"),supportsDisjointSpatialRelationship:p(e,"supportsDisjointSpatialRel",!1),supportsCacheHint:p(e,"supportsQueryWithCacheHint",!1)||l(e,"query"),supportsDefaultSpatialReference:p(e,"supportsDefaultSR",!1),supportsCompactGeometry:m,supportsFullTextSearch:p(e,"supportsFullTextSearch",!1),maxRecordCountFactor:u(t,"maxRecordCountFactor",void 0),maxRecordCount:u(t,"maxRecordCount",void 0),standardMaxRecordCount:u(t,"standardMaxRecordCount",void 0),tileMaxRecordCount:u(t,"tileMaxRecordCount",void 0)}}function C(t){const s=t.advancedQueryCapabilities,e=p(s,"supportsAdvancedQueryRelated",!1);return{supportsPagination:p(s,"supportsQueryRelatedPagination",!1),supportsCount:e,supportsOrderBy:e,supportsCacheHint:l(s,"queryRelated")}}function g(t){return{supportsCacheHint:l(t.advancedQueryCapabilities,"queryTopFilter")}}function w(t){const s=t.ownershipBasedAccessControlForFeatures,e=t?t.advancedEditingCapabilities:void 0;return{supportsGeometryUpdate:p(t,"allowGeometryUpdates",!0),supportsGlobalId:p(t,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:p(t,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:p(t,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:p(t,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:p(t,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:p(s,"allowAnonymousToDelete",!0),supportsDeleteByOthers:p(s,"allowOthersToDelete",!0),supportsUpdateByAnonymous:p(s,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:p(s,"allowOthersToUpdate",!0),supportsAsyncApplyEdits:p(e,"supportsAsyncApplyEdits",!1),zDefault:u(t,"zDefault",void 0)}}}}]);