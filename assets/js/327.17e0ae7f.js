"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[327],{327:(e,t,n)=>{n.r(t),n.d(t,{registerFunctions:()=>k});var a=n(98918),i=n(52276),r=n(60886),s=n(72234),l=n(79918),o=n(98664),u=n(48623),f=n(33379),c=n(62261),d=n(55091),m=n(90546),y=n(84309),h=n(34822),p=n(62120),w=n(31239),g=n(3648),F=n(98139),D=n(44930),T=n(20182),I=n(16307),A=n(40189),E=n(1615),$=n(83780),b=n(24738),C=n(10282);async function S(e,t,n){const a=e.getVariables();if(a.length>0){const i=[];for(let e=0;e<a.length;e++){const r={name:a[e]};i.push(await t.evaluateIdentifier(n,r))}const r={};for(let e=0;e<a.length;e++)r[a[e]]=i[e];return e.parameters=r,e}return e}function N(e,t,n=null){for(const a in e)if(a.toLowerCase()===t.toLowerCase())return e[a];return n}function x(e){if(null===e)return null;const t={type:N(e,"type",""),name:N(e,"name","")};if("range"===t.type)t.range=N(e,"range",[]);else{t.codedValues=[];for(const n of N(e,"codedValues",[]))t.codedValues.push({name:N(n,"name",""),code:N(n,"code",null)})}return t}function L(e){if(null===e)return null;const t={},n=N(e,"wkt",null);null!==n&&(t.wkt=n);const a=N(e,"wkid",null);return null!==a&&(t.wkid=a),t}function v(e){if(null===e)return null;const t={hasZ:N(e,"hasz",!1),hasM:N(e,"hasm",!1)},n=N(e,"spatialreference",null);n&&(t.spatialReference=L(n));const a=N(e,"x",null);if(null!==a)return t.x=a,t.y=N(e,"y",null),t;const i=N(e,"rings",null);if(null!==i)return t.rings=i,t;const r=N(e,"paths",null);if(null!==r)return t.paths=r,t;const s=N(e,"points",null);if(null!==s)return t.points=s,t;for(const l of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const n=N(e,l,null);null!==n&&(t[l]=n)}return t}function P(e){return"utc"===e?.toLowerCase()?"UTC":"unknown"===e?.toLowerCase()?"Unknown":e}function k(e){"async"===e.mode&&(e.functions.timezone=function(t,n){return e.standardFunctionAsync(t,n,(async(e,i,l)=>{if((0,c.E)(l,1,2,t,n),(0,c.n)(l[0]))return"Unknown";if((0,c.m)(l[0]))return"Unknown";if((0,c.u)(l[0])){if(await l[0].load(),1===l.length||null===l[1])return l[0].datesInUnknownTimezone?P("unknown"):P(l[0].dateFieldsTimeZone);if(!(l[1]instanceof r.A)||!1===l[1].hasField("type"))throw new s.D$(t,s.TX.InvalidParameter,n);const e=l[1].field("type");if(!1===(0,c.c)(e))throw new s.D$(t,s.TX.InvalidParameter,n);switch((0,c.j)(e).toLowerCase()){case"preferredtimezone":return P(l[0].preferredTimeZone);case"editfieldsinfo":return P(l[0].editFieldsInfo?.timeZone??null);case"timeinfo":return P(l[0].timeInfo?.timeZone??null);case"field":if(l[1].hasField("fieldname")&&(0,c.c)(l[1].field("fieldname")))return P(l[0].fieldTimeZone((0,c.j)(l[1].field("fieldname"))))}throw new s.D$(t,s.TX.InvalidParameter,n)}const o=(0,c.l)(l[0],(0,c.L)(t));if(null===o)return null;const u=o.timeZone;return"system"===u?a.lY.systemTimeZoneCanonicalName:"utc"===u.toLowerCase()?"UTC":"unknown"===u.toLowerCase()?"Unknown":u}))},e.functions.sqltimestamp=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,i)=>{(0,c.E)(i,1,3,t,n);const r=i[0];if((0,c.k)(r)){if(1===i.length)return r.toSQLWithKeyword();if(2===i.length)return r.changeTimeZone((0,c.j)(i[1])).toSQLWithKeyword();throw new s.D$(t,s.TX.InvalidParameter,n)}if((0,c.m)(r))return r.toSQLWithKeyword();if((0,c.u)(r)){if(3!==i.length)throw new s.D$(t,s.TX.InvalidParameter,n);await r.load();const e=(0,c.j)(i[1]);if((0,c.m)(i[2]))return i[2].toSQLWithKeyword();if(!1===(0,c.k)(i[2]))throw new s.D$(t,s.TX.InvalidParameter,n);const a=r.fieldTimeZone(e);return null===a?i[2].toSQLWithKeyword():i[2].changeTimeZone(a).toSQLWithKeyword()}throw new s.D$(t,s.TX.InvalidParameter,n)}))},e.signatures.push({name:"sqltimestamp",min:2,max:4}),e.functions.featuresetbyid=function(t,n){return e.standardFunctionAsync(t,n,((e,a,i)=>{if((0,c.E)(i,2,4,t,n),i[0]instanceof o.A){const e=(0,c.j)(i[1]);let a=(0,c.H)(i[2],null);const r=(0,c.h)((0,c.H)(i[3],!0));if(null===a&&(a=["*"]),!1===(0,c.o)(a))throw new s.D$(t,s.TX.InvalidParameter,n);return i[0].featureSetById(e,r,a)}throw new s.D$(t,s.TX.InvalidParameter,n)}))},e.signatures.push({name:"featuresetbyid",min:2,max:4}),e.functions.getfeatureset=function(t,n){return e.standardFunctionAsync(t,n,((e,a,i)=>{if((0,c.E)(i,1,2,t,n),(0,c.r)(i[0])){let e=(0,c.H)(i[1],"datasource");return null===e&&(e="datasource"),e=(0,c.j)(e).toLowerCase(),(0,u.convertToFeatureSet)(i[0].fullSchema(),e,t.lrucache,t.interceptor,t.spatialReference)}throw new s.D$(t,s.TX.InvalidParameter,n)}))},e.signatures.push({name:"getfeatureset",min:1,max:2}),e.functions.featuresetbyportalitem=function(t,n){return e.standardFunctionAsync(t,n,((e,a,r)=>{if((0,c.E)(r,2,5,t,n),null===r[0])throw new s.D$(t,s.TX.PortalRequired,n);if(r[0]instanceof i.A){const e=(0,c.j)(r[1]),a=(0,c.j)(r[2]);let i=(0,c.H)(r[3],null);const l=(0,c.h)((0,c.H)(r[4],!0));if(null===i&&(i=["*"]),!1===(0,c.o)(i))throw new s.D$(t,s.TX.InvalidParameter,n);let o=null;return o=t.services?.portal?t.services.portal:C.A.getDefault(),o=(0,d.R)(r[0],o),(0,u.constructFeatureSetFromPortalItem)(e,a,t.spatialReference,i,l,o,t.lrucache,t.interceptor)}if(!1===(0,c.c)(r[0]))throw new s.D$(t,s.TX.PortalRequired,n);const l=(0,c.j)(r[0]),o=(0,c.j)(r[1]);let f=(0,c.H)(r[2],null);const m=(0,c.h)((0,c.H)(r[3],!0));if(null===f&&(f=["*"]),!1===(0,c.o)(f))throw new s.D$(t,s.TX.InvalidParameter,n);return(0,u.constructFeatureSetFromPortalItem)(l,o,t.spatialReference,f,m,t.services?.portal??C.A.getDefault(),t.lrucache,t.interceptor)}))},e.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),e.functions.featuresetbyname=function(t,n){return e.standardFunctionAsync(t,n,((e,a,i)=>{if((0,c.E)(i,2,4,t,n),i[0]instanceof o.A){const e=(0,c.j)(i[1]);let a=(0,c.H)(i[2],null);const r=(0,c.h)((0,c.H)(i[3],!0));if(null===a&&(a=["*"]),!1===(0,c.o)(a))throw new s.D$(t,s.TX.InvalidParameter,n);return i[0].featureSetByName(e,r,a)}throw new s.D$(t,s.TX.InvalidParameter,n)}))},e.signatures.push({name:"featuresetbyname",min:2,max:4}),e.functions.featureset=function(t,n){return e.standardFunction(t,n,((e,a,i)=>{(0,c.E)(i,1,1,t,n);let l=i[0];const o={layerDefinition:{geometryType:"",objectIdField:"",hasM:!1,hasZ:!1,globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if((0,c.c)(l))l=JSON.parse(l),void 0!==l.layerDefinition?(o.layerDefinition=l.layerDefinition,o.featureSet=l.featureSet,l.layerDefinition.spatialReference&&(o.layerDefinition.spatialReference=l.layerDefinition.spatialReference)):(o.featureSet.features=l.features,o.featureSet.geometryType=l.geometryType,o.layerDefinition.geometryType=o.featureSet.geometryType,o.layerDefinition.objectIdField=l.objectIdFieldName??"",o.layerDefinition.typeIdField=l.typeIdFieldName,o.layerDefinition.globalIdField=l.globalIdFieldName,o.layerDefinition.fields=l.fields,l.spatialReference&&(o.layerDefinition.spatialReference=l.spatialReference));else{if(!(i[0]instanceof r.A))throw new s.D$(t,s.TX.InvalidParameter,n);{l=JSON.parse(i[0].castToText(!0));const e=N(l,"layerdefinition");if(null!==e){o.layerDefinition.geometryType=N(e,"geometrytype",""),o.featureSet.geometryType=o.layerDefinition.geometryType,o.layerDefinition.globalIdField=N(e,"globalidfield",""),o.layerDefinition.objectIdField=N(e,"objectidfield",""),o.layerDefinition.typeIdField=N(e,"typeidfield",""),o.layerDefinition.hasZ=!0===N(e,"hasz",!1),o.layerDefinition.hasM=!0===N(e,"hasm",!1);const t=N(e,"spatialreference",null);t&&(o.layerDefinition.spatialReference=L(t));for(const a of N(e,"fields",[])){const e={name:N(a,"name",""),alias:N(a,"alias",""),type:N(a,"type",""),nullable:N(a,"nullable",!0),editable:N(a,"editable",!0),length:N(a,"length",null),domain:x(N(a,"domain"))};o.layerDefinition.fields.push(e)}const n=N(l,"featureset",null);if(n){const e={};for(const t of o.layerDefinition.fields)e[t.name.toLowerCase()]=t.name;for(const t of N(n,"features",[])){const n={},a=N(t,"attributes",{});for(const t in a)n[e[t.toLowerCase()]]=a[t];o.featureSet.features.push({attributes:n,geometry:v(N(t,"geometry",null))})}}}else{o.layerDefinition.hasZ=!0===N(l,"hasz",!1),o.layerDefinition.hasM=!0===N(l,"hasm",!1),o.layerDefinition.geometryType=N(l,"geometrytype",""),o.featureSet.geometryType=o.layerDefinition.geometryType,o.layerDefinition.objectIdField=N(l,"objectidfieldname",""),o.layerDefinition.typeIdField=N(l,"typeidfieldname","");const e=N(l,"spatialreference",null);e&&(o.layerDefinition.spatialReference=L(e));let t=N(l,"fields",null);if((0,c.o)(t))for(const i of t){const e={name:N(i,"name",""),alias:N(i,"alias",""),type:N(i,"type",""),nullable:N(i,"nullable",!0),editable:N(i,"editable",!0),length:N(i,"length",null),domain:x(N(i,"domain"))};o.layerDefinition.fields.push(e)}else t=null,o.layerDefinition.fields=t;const n={};for(const i of o.layerDefinition.fields)n[i.name.toLowerCase()]=i.name;let a=N(l,"features",null);if((0,c.o)(a))for(const i of a){const e={},t=N(i,"attributes",{});for(const a in t)e[n[a.toLowerCase()]]=t[a];o.featureSet.features.push({attributes:e,geometry:v(N(i,"geometry",null))})}else a=null,o.featureSet.features=a}}}if(!1===function(e){return!!e.layerDefinition&&!!e.featureSet&&!1!==function(e,t){for(const n of t)if(n===e)return!0;return!1}(e.layerDefinition.geometryType,["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])&&!1!==(0,c.o)(e.layerDefinition.fields)&&!1!==(0,c.o)(e.featureSet.features)}(o))throw new s.D$(t,s.TX.InvalidParameter,n);return o.layerDefinition.geometryType||(o.layerDefinition.geometryType="esriGeometryNull"),g.A.create(o,t.spatialReference)}))},e.signatures.push({name:"featureset",min:1,max:1}),e.functions.filter=function(t,n){return e.standardFunctionAsync(t,n,(async(a,i,r)=>{if((0,c.E)(r,2,2,t,n),(0,c.o)(r[0])||(0,c.q)(r[0])){const e=[];let a=r[0];a instanceof f.A&&(a=a.toArray());let i=null;if(!(0,c.i)(r[1]))throw new s.D$(t,s.TX.InvalidParameter,n);i=r[1].createFunction(t);for(const t of a){const n=i(t);(0,A.$X)(n)?!0===await n&&e.push(t):!0===n&&e.push(t)}return e}if((0,c.u)(r[0])){const n=await r[0].load(),a=E.WhereClause.create(r[1],n.getFieldsIndex(),n.dateFieldsTimeZoneDefaultUTC),i=a.getVariables();if(i.length>0){const n=[];for(let a=0;a<i.length;a++){const r={name:i[a]};n.push(await e.evaluateIdentifier(t,r))}const s={};for(let e=0;e<i.length;e++)s[i[e]]=n[e];return a.parameters=s,new y.A({parentfeatureset:r[0],whereclause:a})}return new y.A({parentfeatureset:r[0],whereclause:a})}throw new s.D$(t,s.TX.InvalidParameter,n)}))},e.signatures.push({name:"filter",min:2,max:2}),e.functions.orderby=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,i)=>{if((0,c.E)(i,2,2,t,n),(0,c.u)(i[0])){const e=new F.A(i[1]);return new h.A({parentfeatureset:i[0],orderbyclause:e})}throw new s.D$(t,s.TX.InvalidParameter,n)}))},e.signatures.push({name:"orderby",min:2,max:2}),e.functions.top=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,i)=>{if((0,c.E)(i,2,2,t,n),(0,c.u)(i[0]))return new p.A({parentfeatureset:i[0],topnum:i[1]});if((0,c.o)(i[0]))return(0,c.g)(i[1])>=i[0].length?i[0].slice(0):i[0].slice(0,(0,c.g)(i[1]));if((0,c.q)(i[0]))return(0,c.g)(i[1])>=i[0].length()?i[0].slice(0):i[0].slice(0,(0,c.g)(i[1]));throw new s.D$(t,s.TX.InvalidParameter,n)}))},e.signatures.push({name:"top",min:2,max:2}),e.functions.first=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,i)=>{if((0,c.E)(i,1,1,t,n),(0,c.u)(i[0])){const n=await i[0].first(e.abortSignal);if(null!==n){const e=l.A.createFromGraphicLikeObject(n.geometry,n.attributes,i[0],t.timeZone);return e._underlyingGraphic=n,e}return n}return(0,c.o)(i[0])?0===i[0].length?null:i[0][0]:(0,c.q)(i[0])?0===i[0].length()?null:i[0].get(0):null}))},e.signatures.push({name:"first",min:1,max:1}),e.functions.attachments=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,i)=>{(0,c.E)(i,1,2,t,n);const l={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(i.length>1)if(i[1]instanceof r.A){if(i[1].hasField("minsize")&&(l.minsize=(0,c.g)(i[1].field("minsize"))),i[1].hasField("metadata")&&(l.returnMetadata=(0,c.h)(i[1].field("metadata"))),i[1].hasField("maxsize")&&(l.maxsize=(0,c.g)(i[1].field("maxsize"))),i[1].hasField("types")){const e=(0,c.a2)(i[1].field("types"),!1);e.length>0&&(l.types=e)}}else if(null!==i[1])throw new s.D$(t,s.TX.InvalidParameter,n);if((0,c.r)(i[0])){let e=i[0]._layer;return e instanceof $.default&&(e=(0,u.constructFeatureSet)(e,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===e||!1===(0,c.u)(e)?[]:(await e.load(),e.queryAttachments(i[0].field(e.objectIdField),l.minsize,l.maxsize,l.types,l.returnMetadata))}if(null===i[0])return[];throw new s.D$(t,s.TX.InvalidParameter,n)}))},e.signatures.push({name:"attachments",min:1,max:2}),e.functions.featuresetbyrelationshipname=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,i)=>{(0,c.E)(i,2,4,t,n);const r=i[0],l=(0,c.j)(i[1]);let o=(0,c.H)(i[2],null);const f=(0,c.h)((0,c.H)(i[3],!0));if(null===o&&(o=["*"]),!1===(0,c.o)(o))throw new s.D$(t,s.TX.InvalidParameter,n);if(null===i[0])return null;if(!(0,c.r)(i[0]))throw new s.D$(t,s.TX.InvalidParameter,n);let d=r._layer;if(d instanceof $.default&&(d=(0,u.constructFeatureSet)(d,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===d)return null;if(!1===(0,c.u)(d))return null;d=await d.load();const m=d.relationshipMetaData().filter((e=>e.name===l));if(0===m.length)return null;if(void 0!==m[0].relationshipTableId&&null!==m[0].relationshipTableId&&m[0].relationshipTableId>-1)return(0,u.constructFeatureSetFromRelationship)(d,m[0],r.field(d.objectIdField),d.spatialReference,o,f,t.lrucache,t.interceptor);let y=d.serviceUrl();if(!y)return null;y="/"===y.charAt(y.length-1)?y+m[0].relatedTableId.toString():y+"/"+m[0].relatedTableId.toString();const h=await(0,u.constructFeatureSetFromUrl)(y,d.spatialReference,o,f,t.lrucache,t.interceptor);await h.load();let p=h.relationshipMetaData();if(p=p.filter((e=>e.id===m[0].id)),!1===r.hasField(m[0].keyField)||null===r.field(m[0].keyField)){const e=await d.getFeatureByObjectId(r.field(d.objectIdField),[m[0].keyField]);if(e){const t=E.WhereClause.create(p[0].keyField+"= @id",h.getFieldsIndex(),h.dateFieldsTimeZoneDefaultUTC);return t.parameters={id:e.attributes[m[0].keyField]},h.filter(t)}return new w.A({parentfeatureset:h})}const g=E.WhereClause.create(p[0].keyField+"= @id",h.getFieldsIndex(),h.dateFieldsTimeZoneDefaultUTC);return g.parameters={id:r.field(m[0].keyField)},h.filter(g)}))},e.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),e.functions.featuresetbyassociation=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,i)=>{(0,c.E)(i,2,3,t,n);const r=i[0],l=(0,c.j)((0,c.H)(i[1],"")).toLowerCase(),o=(0,c.c)(i[2])?(0,c.j)(i[2]):null;if(null===i[0])return null;if(!(0,c.r)(i[0]))throw new s.D$(t,s.TX.InvalidParameter,n);let f=r._layer;if(f instanceof $.default&&(f=(0,u.constructFeatureSet)(f,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===f)return null;if(!1===(0,c.u)(f))return null;await f.load();const d=f.serviceUrl(),y=await(0,u.constructAssociationMetaDataFeatureSetFromUrl)(d,t.spatialReference);let h=null,p=null,w=!1;if(null!==o&&""!==o&&void 0!==o){for(const e of y.terminals)e.terminalName===o&&(p=e.terminalId);null===p&&(w=!0)}const g=y.associations.getFieldsIndex(),F=g.get("TOGLOBALID").name,T=g.get("FROMGLOBALID").name,I=g.get("TOTERMINALID").name,A=g.get("FROMTERMINALID").name,C=g.get("FROMNETWORKSOURCEID").name,S=g.get("TONETWORKSOURCEID").name,N=g.get("ASSOCIATIONTYPE").name,x=g.get("ISCONTENTVISIBLE").name,L=g.get("OBJECTID").name;for(const t of f.fields)if("global-id"===t.type){h=r.field(t.name);break}let v=null,P=new m.Gr(new b.A({name:"percentalong",alias:"percentalong",type:"double"}),E.WhereClause.create("0",y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC)),k=new m.Gr(new b.A({name:"side",alias:"side",type:"string"}),E.WhereClause.create("''",y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC));const X="globalid",R="globalId",U={};for(const t in y.lkp)U[t]=y.lkp[t].sourceId;const W=new m.bV(new b.A({name:"classname",alias:"classname",type:"string"}),null,U);let Z="";switch(l){case"midspan":{Z=`((${F}='${h}') OR ( ${T}='${h}')) AND (${N} IN (5))`,W.codefield=E.WhereClause.create(`CASE WHEN (${F}='${h}') THEN ${C} ELSE ${S} END`,y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC);const e=(0,D.ke)(m.a.findField(y.associations.fields,T));e.name=X,e.alias=X,v=new m.Gr(e,E.WhereClause.create(`CASE WHEN (${T}='${h}') THEN ${F} ELSE ${T} END`,y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC)),P=y.unVersion>=4?new m.IO(m.a.findField(y.associations.fields,g.get("PERCENTALONG").name)):new m.Gr(new b.A({name:"percentalong",alias:"percentalong",type:"double"}),E.WhereClause.create("0",y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC));break}case"junctionedge":{Z=`((${F}='${h}') OR ( ${T}='${h}')) AND (${N} IN (4,6))`,W.codefield=E.WhereClause.create(`CASE WHEN (${F}='${h}') THEN ${C} ELSE ${S} END`,y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC);const e=(0,D.ke)(m.a.findField(y.associations.fields,T));e.name=X,e.alias=X,v=new m.Gr(e,E.WhereClause.create(`CASE WHEN (${T}='${h}') THEN ${F} ELSE ${T} END`,y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC)),k=new m.Gr(new b.A({name:"side",alias:"side",type:"string"}),E.WhereClause.create(`CASE WHEN (${N}=4) THEN 'from' ELSE 'to' END`,y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC));break}case"connected":{let e=`${F}='@T'`,t=`${T}='@T'`;null!==p&&(e+=` AND ${I}=@A`,t+=` AND ${A}=@A`),Z="(("+e+") OR ("+t+"))",Z=(0,c.S)(Z,"@T",h??""),e=(0,c.S)(e,"@T",h??""),null!==p&&(e=(0,c.S)(e,"@A",p.toString()),Z=(0,c.S)(Z,"@A",p.toString())),W.codefield=E.WhereClause.create("CASE WHEN "+e+` THEN ${C} ELSE ${S} END`,y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC);const n=(0,D.ke)(m.a.findField(y.associations.fields,T));n.name=X,n.alias=X,v=new m.Gr(n,E.WhereClause.create("CASE WHEN "+e+` THEN ${T} ELSE ${F} END`,y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC));break}case"container":Z=`${F}='${h}' AND ${N} = 2`,null!==p&&(Z+=` AND ${I} = `+p.toString()),W.codefield=C,Z="( "+Z+" )",v=new m.p8(m.a.findField(y.associations.fields,T),X,X);break;case"content":Z=`(${T}='${h}' AND ${N} = 2)`,null!==p&&(Z+=` AND ${A} = `+p.toString()),W.codefield=S,Z="( "+Z+" )",v=new m.p8(m.a.findField(y.associations.fields,F),X,X);break;case"structure":Z=`(${F}='${h}' AND ${N} = 3)`,null!==p&&(Z+=` AND ${I} = `+p.toString()),W.codefield=C,Z="( "+Z+" )",v=new m.p8(m.a.findField(y.associations.fields,T),X,R);break;case"attached":Z=`(${T}='${h}' AND ${N} = 3)`,null!==p&&(Z+=` AND ${A} = `+p.toString()),W.codefield=S,Z="( "+Z+" )",v=new m.p8(m.a.findField(y.associations.fields,F),X,R);break;default:throw new s.D$(t,s.TX.InvalidParameter,n)}return w&&(Z="1 <> 1"),new m.a({parentfeatureset:y.associations,adaptedFields:[new m.IO(m.a.findField(y.associations.fields,L)),new m.IO(m.a.findField(y.associations.fields,x)),v,k,W,P],extraFilter:Z?E.WhereClause.create(Z,y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC):null})}))},e.signatures.push({name:"featuresetbyassociation",min:2,max:6}),e.functions.groupby=function(t,n){return e.standardFunctionAsync(t,n,(async(a,i,l)=>{if((0,c.E)(l,3,3,t,n),!(0,c.u)(l[0]))throw new s.D$(t,s.TX.InvalidParameter,n);const o=await l[0].load(),u=[],f=[];let d=!1,m=[];if((0,c.c)(l[1]))m.push(l[1]);else if(l[1]instanceof r.A)m.push(l[1]);else if((0,c.o)(l[1]))m=l[1];else{if(!(0,c.q)(l[1]))throw new s.D$(t,s.TX.InvalidParameter,n);m=l[1].toArray()}for(const e of m)if((0,c.c)(e)){const t=E.WhereClause.create((0,c.j)(e),o.getFieldsIndex(),o.dateFieldsTimeZoneDefaultUTC),n=!0===(0,T.DA)(t)?(0,c.j)(e):"%%%%FIELDNAME";u.push({name:n,expression:t}),"%%%%FIELDNAME"===n&&(d=!0)}else{if(!(e instanceof r.A))throw new s.D$(t,s.TX.InvalidParameter,n);{const a=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",i=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===a&&(d=!0),!a)throw new s.D$(t,s.TX.InvalidParameter,n);u.push({name:a,expression:E.WhereClause.create(i||a,o.getFieldsIndex(),o.dateFieldsTimeZoneDefaultUTC)})}}if(m=[],(0,c.c)(l[2]))m.push(l[2]);else if((0,c.o)(l[2]))m=l[2];else if((0,c.q)(l[2]))m=l[2].toArray();else{if(!(l[2]instanceof r.A))throw new s.D$(t,s.TX.InvalidParameter,n);m.push(l[2])}for(const e of m){if(!(e instanceof r.A))throw new s.D$(t,s.TX.InvalidParameter,n);{const a=e.hasField("name")?e.field("name"):"",i=e.hasField("statistic")?e.field("statistic"):"",r=e.hasField("expression")?e.field("expression"):"";if(!a||!i||!r)throw new s.D$(t,s.TX.InvalidParameter,n);f.push({name:a,statistic:i.toLowerCase(),expression:E.WhereClause.create(r,o.getFieldsIndex(),o.dateFieldsTimeZoneDefaultUTC)})}}if(d){const e={};for(const n of o.fields)e[n.name.toLowerCase()]=1;for(const n of u)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);for(const n of f)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);let t=0;for(const n of u)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString()}}for(const n of u)await S(n.expression,e,t);for(const n of f)await S(n.expression,e,t);return l[0].groupby(u,f)}))},e.signatures.push({name:"groupby",min:3,max:3}),e.functions.distinct=function(t,n){return e.standardFunctionAsync(t,n,(async(a,i,l)=>{if((0,c.u)(l[0])){(0,c.E)(l,2,2,t,n);const a=await l[0].load(),i=[];let o=[];if((0,c.c)(l[1]))o.push(l[1]);else if(l[1]instanceof r.A)o.push(l[1]);else if((0,c.o)(l[1]))o=l[1];else{if(!(0,c.q)(l[1]))throw new s.D$(t,s.TX.InvalidParameter,n);o=l[1].toArray()}let u=!1;for(const e of o)if((0,c.c)(e)){const t=E.WhereClause.create((0,c.j)(e),a.getFieldsIndex(),a.dateFieldsTimeZoneDefaultUTC),n=!0===(0,T.DA)(t)?(0,c.j)(e):"%%%%FIELDNAME";i.push({name:n,expression:t}),"%%%%FIELDNAME"===n&&(u=!0)}else{if(!(e instanceof r.A))throw new s.D$(t,s.TX.InvalidParameter,n);{const r=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",l=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===r&&(u=!0),!r)throw new s.D$(t,s.TX.InvalidParameter,n);i.push({name:r,expression:E.WhereClause.create(l||r,a.getFieldsIndex(),a.dateFieldsTimeZoneDefaultUTC)})}}if(u){const e={};for(const n of a.fields)e[n.name.toLowerCase()]=1;for(const n of i)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);let t=0;for(const n of i)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString()}}for(const n of i)await S(n.expression,e,t);return l[0].groupby(i,[])}return function(e,t,n,a){if(1===a.length){if((0,c.o)(a[0]))return(0,I.t)(e,a[0],-1);if((0,c.q)(a[0]))return(0,I.t)(e,a[0].toArray(),-1)}return(0,I.t)(e,a,-1)}("distinct",0,0,l)}))}),e.functions.getfeaturesetinfo=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,i)=>{if((0,c.E)(i,1,1,t,n),!(0,c.u)(i[0]))return null;const s=await i[0].getFeatureSetInfo();return s?r.A.convertObjectToArcadeDictionary({layerId:s.layerId,layerName:s.layerName,itemId:s.itemId,serviceLayerUrl:s.serviceLayerUrl,webMapLayerId:s.webMapLayerId??null,webMapLayerTitle:s.webMapLayerTitle??null,className:null,objectClassId:null},(0,c.L)(t),!1,!1):null}))},e.signatures.push({name:"getfeaturesetinfo",min:1,max:1})}},55091:(e,t,n)=>{n.d(t,{R:()=>i});var a=n(10282);function i(e,t){return null===e?t:new a.A({url:e.field("url")})}}}]);