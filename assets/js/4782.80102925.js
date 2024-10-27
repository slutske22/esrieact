"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4782,7461],{64782:(e,t,r)=>{r.d(t,{J:()=>C});var n,o=r(66866),i=r(85251),s=r(21564),a=(r(73446),r(85569),r(39831),r(63863)),l=r(94301),u=r(73324),c=r(18475),p=r(56542),d=(r(17671),r(84685),r(20299),r(25498),r(79300),r(76589),r(47347)),y=(r(2692),r(48887)),f=r(49169),h=r(19251),b=r(76724),m=r(28902),w=r(75094),g=r(77542),I=r(84356),A=r(97461),M=r(86155);let v=n=class extends c.c{constructor(e){super(e),this.type="binning",this.binType="geohash",this.fixedBinLevel=3,this.labelingInfo=null,this.labelsVisible=!0,this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.fields=[],this.renderer=null}writeFields(e,t,r){const n=e.filter((e=>"avg_angle"!==e.statisticType)).map((e=>e.toJSON()));(0,b.sM)(r,n,t)}readRenderer(e,t,r){const n=t.drawingInfo?.renderer;return n?(0,y.L)(n,t,r)??void 0:(0,A.PD)(t,r)}clone(){return new n({fields:(0,h.o8)(this.fields),fixedBinLevel:this.fixedBinLevel,labelingInfo:(0,h.o8)(this.labelingInfo),labelsVisible:this.labelsVisible,maxScale:this.maxScale,popupEnabled:this.popupEnabled,popupTemplate:(0,h.o8)(this.popupTemplate),renderer:(0,h.o8)(this.renderer)})}};(0,o._)([(0,m.e)({binning:"binning"})],v.prototype,"type",void 0),(0,o._)([(0,m.e)({geohash:"geohash"})],v.prototype,"binType",void 0),(0,o._)([(0,s.MZ)({type:Number,range:{min:1,max:9},json:{write:!0}})],v.prototype,"fixedBinLevel",void 0),(0,o._)([(0,s.MZ)({type:[M.A],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],v.prototype,"labelingInfo",void 0),(0,o._)([(0,s.MZ)(I.kF)],v.prototype,"labelsVisible",void 0),(0,o._)([(0,s.MZ)({type:Number,json:{default:0,name:"visibilityInfo.maxScale"}})],v.prototype,"maxScale",void 0),(0,o._)([(0,s.MZ)(I.M6)],v.prototype,"popupEnabled",void 0),(0,o._)([(0,s.MZ)({type:p.A,json:{name:"popupInfo",write:!0}})],v.prototype,"popupTemplate",void 0),(0,o._)([(0,s.MZ)({type:[l.A],json:{write:!0}})],v.prototype,"fields",void 0),(0,o._)([(0,g.K)("fields")],v.prototype,"writeFields",null),(0,o._)([(0,s.MZ)({types:f.H,json:{write:{target:"drawingInfo.renderer"}}})],v.prototype,"renderer",void 0),(0,o._)([(0,w.w)("renderer",["drawingInfo.renderer"])],v.prototype,"readRenderer",null),v=n=(0,o._)([(0,a.$)("esri.layers.support.FeatureReductionBinning")],v);const _=v;var x,F=r(30822),R=r(21877),j=r(89882);function S(e){return"simple"===e.type&&!e.visualVariables?.length}let q=x=class extends R.oY{constructor(e){super(e),this.type="cluster",this.clusterRadius=(0,j.cr)("80px"),this.clusterMinSize=(0,j.cr)("12px"),this.clusterMaxSize=(0,j.cr)("50px"),this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.renderer=null,this.symbol=null,this.labelingInfo=null,this.labelsVisible=!0,this.fields=null}readRenderer(e,t,r){const n=t.drawingInfo?.renderer;return n?.authoringInfo?.isAutoGenerated?null:n?S(n)?null:(0,y.L)(n,t,r)??void 0:(0,A.PD)(t,r)}readSymbol(e,t,r){const n=t.drawingInfo?.renderer;if(n?.authoringInfo?.isAutoGenerated)return null;if(n&&S(n)){const e=(0,y.L)(n,t,r);return e?.symbol}return null}writeSymbol(e,t,r,n){const o=this.renderer?.authoringInfo?.isAutoGenerated;if(!this.renderer||o){const r=new d.A({symbol:e});t.drawingInfo={renderer:r.write({},n)}}}writeFields(e,t,r){const n=e.filter((e=>"avg_angle"!==e.statisticType)).map((e=>e.toJSON()));(0,b.sM)(r,n,t)}readFields(e,t,r){return e.filter((e=>!e.isAutoGenerated)).map((e=>l.A.fromJSON(e)))}clone(){return new x({clusterRadius:this.clusterRadius,clusterMinSize:this.clusterMinSize,clusterMaxSize:this.clusterMaxSize,labelingInfo:(0,h.o8)(this.labelingInfo),labelsVisible:this.labelsVisible,fields:(0,h.o8)(this.fields),maxScale:this.maxScale,renderer:(0,h.o8)(this.renderer),symbol:(0,h.o8)(this.symbol),popupEnabled:this.popupEnabled,popupTemplate:(0,h.o8)(this.popupTemplate)})}};(0,o._)([(0,s.MZ)({type:["cluster"],readOnly:!0,json:{write:!0}})],q.prototype,"type",void 0),(0,o._)([(0,s.MZ)({type:Number,cast:e=>"auto"===e?e:(0,j.cr)(e),json:{write:!0}})],q.prototype,"clusterRadius",void 0),(0,o._)([(0,s.MZ)({type:Number,cast:j.cr,json:{write:!0}})],q.prototype,"clusterMinSize",void 0),(0,o._)([(0,s.MZ)({type:Number,cast:j.cr,json:{write:!0}})],q.prototype,"clusterMaxSize",void 0),(0,o._)([(0,s.MZ)({type:Number,json:{default:0,name:"visibilityInfo.maxScale"}})],q.prototype,"maxScale",void 0),(0,o._)([(0,s.MZ)(I.M6)],q.prototype,"popupEnabled",void 0),(0,o._)([(0,s.MZ)({type:p.A,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],q.prototype,"popupTemplate",void 0),(0,o._)([(0,s.MZ)({types:f.H,json:{write:{target:"drawingInfo.renderer"}}})],q.prototype,"renderer",void 0),(0,o._)([(0,w.w)("renderer",["drawingInfo.renderer"])],q.prototype,"readRenderer",null),(0,o._)([(0,s.MZ)({types:F.q8})],q.prototype,"symbol",void 0),(0,o._)([(0,w.w)("symbol",["drawingInfo.renderer"])],q.prototype,"readSymbol",null),(0,o._)([(0,g.K)("symbol")],q.prototype,"writeSymbol",null),(0,o._)([(0,s.MZ)({type:[M.A],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],q.prototype,"labelingInfo",void 0),(0,o._)([(0,s.MZ)(I.kF)],q.prototype,"labelsVisible",void 0),(0,o._)([(0,s.MZ)({type:[l.A],json:{write:!0}})],q.prototype,"fields",void 0),(0,o._)([(0,g.K)("fields")],q.prototype,"writeFields",null),(0,o._)([(0,w.w)("fields")],q.prototype,"readFields",null),q=x=(0,o._)([(0,a.$)("esri.layers.support.FeatureReductionCluster")],q);const O=q;var Z=r(99989);const T={key:"type",base:c.c,typeMap:{cluster:O,binning:_}},E={types:{key:"type",base:c.c,typeMap:{selection:Z.A,cluster:O,binning:_}},json:{name:"layerDefinition.featureReduction",write:{allowNull:!0},origins:{"web-map":{types:T},"portal-item":{types:T},"web-scene":{types:{key:"type",base:c.c,typeMap:{selection:Z.A}},name:"layerDefinition.featureReduction",write:{layerContainerTypes:u.K}}}}};var P=r(85205);const C=e=>{let t=class extends e{constructor(...e){super(...e),this.addHandles((0,i.wB)((()=>this.renderer),(()=>{if(this.featureReduction){const e=this._normalizeFeatureReduction(this.featureReduction);this._set("featureReduction",e)}}),i.OH))}set featureReduction(e){const t=this._normalizeFeatureReduction(e);this._set("featureReduction",t)}set renderer(e){}_normalizeFeatureReduction(e){if("cluster"!==e?.type)return e;const t=e.clone(),r=[new l.A({name:"cluster_count",isAutoGenerated:!0,statisticType:"count"})],n=(t.fields??[]).filter((e=>!e.isAutoGenerated));if(e.renderer&&!e.renderer.authoringInfo?.isAutoGenerated)return t.fields=[...r,...n],t;if(e.symbol)return t.fields=[...r,...n],t.renderer=null,t;if(!this.renderer)return e;const o=(0,P.ur)(r,this.renderer,e,null,!1);return t.fields=[...r,...n],t.renderer=o,t}};return(0,o._)([(0,s.MZ)(E)],t.prototype,"featureReduction",null),t=(0,o._)([(0,a.$)("esri.layers.mixins.FeatureReductionLayer")],t),t}},18475:(e,t,r)=>{r.d(t,{c:()=>a});var n=r(66866),o=r(21877),i=r(21564),s=(r(73446),r(85569),r(39831),r(63863));let a=class extends o.oY{constructor(){super(...arguments),this.type=null}};(0,n._)([(0,i.MZ)({type:["selection","cluster","binning"],readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0),a=(0,n._)([(0,s.$)("esri.layers.support.FeatureReduction")],a)},99989:(e,t,r)=>{r.d(t,{A:()=>u});var n,o=r(66866),i=r(21564),s=(r(73446),r(85569),r(39831),r(63863)),a=r(18475);let l=n=class extends a.c{constructor(e){super(e),this.type="selection"}clone(){return new n}};(0,o._)([(0,i.MZ)({type:["selection"]})],l.prototype,"type",void 0),l=n=(0,o._)([(0,s.$)("esri.layers.support.FeatureReductionSelection")],l);const u=l},97461:(e,t,r)=>{r.d(t,{Xl:()=>I,ct:()=>v,C$:()=>N,PD:()=>k,VZ:()=>E,mm:()=>x,VA:()=>V,WP:()=>F,iX:()=>g,GA:()=>$,jp:()=>T,tG:()=>z,lV:()=>R,B5:()=>q,Ye:()=>S,sg:()=>j,hM:()=>O,S2:()=>Z,jD:()=>P,Zm:()=>C,$4:()=>L,bt:()=>M,rn:()=>_});var n=r(28830),o=r(30822),i=r(12690),s=r(98849),a=r(59851),l=r(76859),u=r(61985),c=r(24587);async function p(e,t,r){t=t.clone(),e.capabilities.query.supportsMaxRecordCountFactor&&(t.maxRecordCountFactor=y(e));const n=d(e),o=e.capabilities.query.supportsPagination;t.start=0,t.num=n;let i=null;for(;;){const s=await e.source.queryFeaturesJSON(t,r);if(null==i?i=s:i.features=i.features.concat(s.features),i.exceededTransferLimit=s.exceededTransferLimit,!o||!s.exceededTransferLimit)break;t.start+=n}return i}function d(e){return y(e)*function(e){return e.capabilities.query.maxRecordCount||2e3}(e)}function y(e){return e.capabilities.query.supportsMaxRecordCountFactor?c.A.MAX_MAX_RECORD_COUNT_FACTOR:1}var f=r(40454),h=r(47347),b=r(2692),m=r(27973),w=r(97724);const g=new a.J({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"});async function I(e,t,r,n){const o=await G(e);if(await A(e,t,n),!o.addAttachment)throw new s.A(n,"Layer source does not support addAttachment capability");return o.addAttachment(t,r)}function A(e,t,r){const{attributes:n}=t,{objectIdField:o}=e;return e.capabilities?.data?.supportsAttachment?t?n?o&&n[o]?Promise.resolve():Promise.reject(new s.A(r,`feature is missing the identifying attribute ${o}`)):Promise.reject(new s.A(r,"'attributes' are required on a feature to query attachments")):Promise.reject(new s.A(r,"A feature is required to add/delete/update attachments")):Promise.reject(new s.A(r,"this layer doesn't support attachments"))}async function M(e,t,r,n,o){const i=await G(e);if(await A(e,t,o),!i.updateAttachment)throw new s.A(o,"Layer source does not support updateAttachment capability");return i.updateAttachment(t,r,n)}async function v(e,t,n){const{applyEdits:o}=await r.e(5903).then(r.bind(r,75903)),i=await e.load(),{source:s,globalIdField:a}=i;let l=n;return("feature"===i.type?i.infoFor3D:null)&&null!=t.deleteFeatures&&null!=a&&(l={...l,globalIdToObjectId:await $(e,t.deleteFeatures,a)}),o(i,s,t,n)}async function _(e,t,n){const{uploadAssets:o}=await r.e(5903).then(r.bind(r,75903)),i=await e.load();return o(i,i.source,t,n)}async function x(e,t,r,n){const o=await G(e);if(await A(e,t,n),!o.deleteAttachments)throw new s.A(n,"Layer source does not support deleteAttachments capability");return o.deleteAttachments(t,r)}async function F(e,t,r){const n=(await e.load({signal:t?.signal})).source;if(!n.fetchRecomputedExtents)throw new s.A(r,"Layer source does not support fetchUpdates capability");return n.fetchRecomputedExtents(t)}async function R(e,t,r,n){t=m.A.from(t),await e.load();const o=e.source,i=e.capabilities;if(!i?.data?.supportsAttachment)throw new s.A(n,"this layer doesn't support attachments");const{attachmentTypes:a,objectIds:l,globalIds:u,num:c,size:p,start:d,where:y}=t;if(!i?.operations?.supportsQueryAttachments&&(a?.length>0||u?.length>0||p?.length>0||c||d||y))throw new s.A(n,"when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",t);if(!(l?.length||u?.length||y))throw new s.A(n,"'objectIds', 'globalIds', or 'where' are required to perform attachment query",t);if(!o.queryAttachments)throw new s.A(n,"Layer source does not support queryAttachments capability",t);return o.queryAttachments(t)}async function j(e,t,r,n){const o=await G(e);if(!o.queryObjectIds)throw new s.A(n,"Layer source does not support queryObjectIds capability");return o.queryObjectIds(c.A.from(t)??e.createQuery(),r)}async function S(e,t,r,n){const o=await G(e);if(!o.queryFeatureCount)throw new s.A(n,"Layer source does not support queryFeatureCount capability");return o.queryFeatureCount(c.A.from(t)??e.createQuery(),r)}async function q(e,t,r,n){const o=await G(e);if(!o.queryExtent)throw new s.A(n,"Layer source does not support queryExtent capability");return o.queryExtent(c.A.from(t)??e.createQuery(),r)}async function O(e,t,r,n){const o=await G(e);if(!o.queryRelatedFeatures)throw new s.A(n,"Layer source does not support queryRelatedFeatures capability");return o.queryRelatedFeatures(w.default.from(t),r)}async function Z(e,t,r,n){const o=await G(e);if(!o.queryRelatedFeaturesCount)throw new s.A(n,"Layer source does not support queryRelatedFeaturesCount capability");return o.queryRelatedFeaturesCount(w.default.from(t),r)}async function T(e){const t=e.source;if(t?.refresh)try{const{dataChanged:r,updates:n}=await t.refresh();if(null!=n&&(e.sourceJSON={...e.sourceJSON,...n},e.read(n,{origin:"service",url:e.parsedUrl})),r)return!0}catch{}if(e.definitionExpression)try{return(await(0,l.G)(e.definitionExpression,e.fieldsIndex)).hasDateFunctions}catch{}return!1}function E(e){const t=new c.A,r=e.capabilities?.data,n=e.capabilities?.query;t.historicMoment=e.historicMoment,t.gdbVersion=e.gdbVersion,t.returnGeometry=!0,n&&(t.compactGeometryEnabled=n.supportsCompactGeometry,t.defaultSpatialReferenceEnabled=n.supportsDefaultSpatialReference),r&&(r.supportsZ&&null!=e.returnZ&&(t.returnZ=e.returnZ),r.supportsM&&null!=e.returnM&&(t.returnM=e.returnM)),t.outFields=["*"];const{timeOffset:o,timeExtent:i}=e;return t.timeExtent=null!=o&&null!=i?i.offset(-o.value,o.unit):i||null,t.multipatchOption="multipatch"===e.geometryType?"xyFootprint":null,t}function P(e){const{globalIdField:t,fields:r}=e;if(t)return t;if(r)for(const n of r)if("esriFieldTypeGlobalID"===n.type)return n.name}function C(e){const{objectIdField:t,fields:r}=e;if(t)return t;if(r)for(const n of r)if("esriFieldTypeOID"===n.type)return n.name}function L(e){return e.currentVersion?e.currentVersion:e.hasOwnProperty("capabilities")||e.hasOwnProperty("drawingInfo")||e.hasOwnProperty("hasAttachments")||e.hasOwnProperty("htmlPopupType")||e.hasOwnProperty("relationships")||e.hasOwnProperty("timeInfo")||e.hasOwnProperty("typeIdField")||e.hasOwnProperty("types")?10:9.3}async function G(e){return(await e.load()).source}async function V(e,t,r){const o=e.parsedUrl?.path;o&&e.authenticationTriggerEvent===t&&await async function(e,t){if(!n.id)return;if(n.id.findCredential(e))return;let r;try{const o=await(0,f.wI)(e,t);o&&(r=await n.id.checkSignInStatus(`${o}/sharing`))}catch(o){}if(r)try{const r=null!=t?t.signal:null;await n.id.getCredential(e,{signal:r})}catch(o){}}(o,r)}function N(e){return!e.sourceJSON?.isMultiServicesView&&(e.userHasUpdateItemPrivileges||e.editingEnabled)}const D=(0,u.C)({types:o.xK});function k(e,t){if(e.defaultSymbol)return e.types?.length?new b.A({defaultSymbol:D(e.defaultSymbol,e,t),field:e.typeIdField,uniqueValueInfos:e.types.map((e=>({id:e.id,symbol:D(e.symbol,e,t)})))}):new h.A({symbol:D(e.defaultSymbol,e,t)})}function z(e){let t=e.sourceJSON?.cacheMaxAge;if(!t)return!1;const r=e.editingInfo?.lastEditDate?.getTime();return null==r||(t*=1e3,Date.now()-r<t)}async function $(e,t,r){if(null==t)return null;const n=[],{objectIdField:o}=e;if(t.forEach((e=>{let t=null;if("attributes"in e){const{attributes:n}=e;t={globalId:n[r],objectId:null!=n[o]&&-1!==n[o]?n[o]:null}}else t={globalId:e.globalId,objectId:null!=e.objectId&&-1!==e.objectId?e.objectId:null};null!=t.globalId&&(null!=t.objectId&&-1!==t.objectId||n.push(t.globalId))})),0===n.length)return null;const s=e.createQuery();s.where=n.map((e=>`${r}='${e}'`)).join(" OR "),s.returnGeometry=!1,s.outFields=[o,r],s.cacheHint=!1;const a=await(0,i.DZ)(p(e,s));if(!a.ok)return null;const l=new Map,u=a.value.features;for(const i of u){const e=i.attributes[r],t=i.attributes[o];null!=e&&null!=t&&-1!==t&&l.set(e,t)}return l}}}]);