"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6568],{83763:(e,n,t)=>{t.d(n,{A:()=>f});var l=t(66866),a=t(59851),i=t(21877),o=t(21564),r=(t(73446),t(85569),t(39831),t(28902)),s=t(63863);const u=new a.J({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),c=new a.J({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});let m=class extends i.oY{constructor(e){super(e),this.type="class-breaks-definition",this.breakCount=null,this.classificationField=null,this.classificationMethod=null,this.normalizationField=null,this.normalizationType=null}set standardDeviationInterval(e){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",e)}set definedInterval(e){"defined-interval"===this.classificationMethod&&this._set("definedInterval",e)}};(0,l._)([(0,r.e)({classBreaksDef:"class-breaks-definition"})],m.prototype,"type",void 0),(0,l._)([(0,o.MZ)({json:{write:!0}})],m.prototype,"breakCount",void 0),(0,l._)([(0,o.MZ)({json:{write:!0}})],m.prototype,"classificationField",void 0),(0,l._)([(0,o.MZ)({type:String,json:{read:u.read,write:u.write}})],m.prototype,"classificationMethod",void 0),(0,l._)([(0,o.MZ)({json:{write:!0}})],m.prototype,"normalizationField",void 0),(0,l._)([(0,o.MZ)({json:{read:c.read,write:c.write}})],m.prototype,"normalizationType",void 0),(0,l._)([(0,o.MZ)({value:null,json:{write:!0}})],m.prototype,"standardDeviationInterval",null),(0,l._)([(0,o.MZ)({value:null,json:{write:!0}})],m.prototype,"definedInterval",null),m=(0,l._)([(0,s.$)("esri.rest.support.ClassBreaksDefinition")],m);const f=m},47003:(e,n,t)=>{t.d(n,{t:()=>i});const l=t(539).A.getLogger("esri.rest.support.generateRendererUtils");function a(e,n){return Number(e.toFixed(n))}function i(e){const{normalizationTotal:n}=e;return{classBreaks:o(e),normalizationTotal:n}}function o(e){const n=e.definition,{classificationMethod:t,normalizationType:l,definedInterval:i}=n,o=n.breakCount??1,c=[];let m=e.values;if(0===m.length)return[];m=m.sort(((e,n)=>e-n));const f=m[0],d=m[m.length-1];if("equal-interval"===t)if(m.length>=o){const e=(d-f)/o;let n=f;for(let t=1;t<o;t++){const i=a(f+t*e,6);c.push({minValue:n,maxValue:i,label:r(n,i,l)}),n=i}c.push({minValue:n,maxValue:d,label:r(n,d,l)})}else m.forEach((e=>{c.push({minValue:e,maxValue:e,label:r(e,e,l)})}));else if("natural-breaks"===t){const n=s(m),t=e.valueFrequency||n.valueFrequency,i=u(n.uniqueValues,t,o);let p=f;for(let e=1;e<o;e++)if(n.uniqueValues.length>e){const t=a(n.uniqueValues[i[e]],6);c.push({minValue:p,maxValue:t,label:r(p,t,l)}),p=t}c.push({minValue:p,maxValue:d,label:r(p,d,l)})}else if("quantile"===t)if(m.length>=o&&f!==d){let e=f,n=Math.ceil(m.length/o),t=0;for(let a=1;a<o;a++){let i=n+t-1;i>m.length&&(i=m.length-1),i<0&&(i=0),c.push({minValue:e,maxValue:m[i],label:r(e,m[i],l)}),e=m[i],t+=n,n=Math.ceil((m.length-t)/(o-a))}c.push({minValue:e,maxValue:d,label:r(e,d,l)})}else{let e=-1;for(let n=0;n<m.length;n++){const t=m[n];t!==e&&(e=t,c.push({minValue:e,maxValue:t,label:r(e,t,l)}),e=t)}}else if("standard-deviation"===t){const e=function(e){let n=0;for(let t=0;t<e.length;t++)n+=e[t];return n/=e.length,n}(m),n=function(e,n){let t=0;for(let l=0;l<e.length;l++){const a=e[l];t+=(a-n)*(a-n)}return t/=e.length,Math.sqrt(t)}(m,e);if(0===n)c.push({minValue:m[0],maxValue:m[0],label:r(m[0],m[0],l)});else{const t=function(e,n,t,l,a){let i=Math.max(l-e,n-l)/a/t;return i=i>=1?1:i>=.5?.5:.25,i}(f,d,o,e,n)*n;let i=0,s=f;for(let n=o;n>=1;n--){const o=a(e-(n-.5)*t,6);c.push({minValue:s,maxValue:o,label:r(s,o,l)}),s=o,i++}let u=a(e+.5*t,6);c.push({minValue:s,maxValue:u,label:r(s,u,l)}),s=u,i++;for(let n=1;n<=o;n++)u=i===2*o?d:a(e+(n+.5)*t,6),c.push({minValue:s,maxValue:u,label:r(s,u,l)}),s=u,i++}}else if("defined-interval"===t){if(!i)return c;const e=m[0],n=m[m.length-1],t=Math.ceil((n-e)/i);let o=e;for(let s=1;s<t;s++){const n=a(e+s*i,6);c.push({minValue:o,maxValue:n,label:r(o,n,l)}),o=n}c.push({minValue:o,maxValue:n,label:r(o,n,l)})}return c}function r(e,n,t){let l=null;return l=e===n?t&&"percent-of-total"===t?e+"%":e.toString():t&&"percent-of-total"===t?e+"% - "+n+"%":e+" - "+n,l}function s(e){const n=[],t=[];let l=Number.MIN_VALUE,a=1,i=-1;for(let o=0;o<e.length;o++){const r=e[o];r===l?(a++,t[i]=a):null!==r&&(n.push(r),l=r,a=1,t.push(a),i++)}return{uniqueValues:n,valueFrequency:t}}function u(e,n,t){const l=e.length,a=[];t>l&&(t=l);for(let o=0;o<t;o++)a.push(Math.round(o*l/t-1));a.push(l-1);let i=c(a,e,n,t);return function(e,n,t,l,a,i){let o=0,r=0,s=0,u=0,c=!0;for(let f=0;f<2&&c;f++){0===f&&(c=!1);for(let f=0;f<i-1;f++)for(;t[f+1]+1!==t[f+2];){t[f+1]=t[f+1]+1;const i=m(f,t,l,a);s=i.sbMean,o=i.sbSdcm;const d=m(f+1,t,l,a);if(u=d.sbMean,r=d.sbSdcm,!(o+r<n[f]+n[f+1])){t[f+1]=t[f+1]-1;break}n[f]=o,n[f+1]=r,e[f]=s,e[f+1]=u,c=!0}for(let f=i-1;f>0;f--)for(;t[f]!==t[f-1]+1;){t[f]=t[f]-1;const i=m(f-1,t,l,a);s=i.sbMean,o=i.sbSdcm;const d=m(f,t,l,a);if(u=d.sbMean,r=d.sbSdcm,!(o+r<n[f-1]+n[f])){t[f]=t[f]+1;break}n[f-1]=o,n[f]=r,e[f-1]=s,e[f]=u,c=!0}}return c}(i.mean,i.sdcm,a,e,n,t)&&(i=c(a,e,n,t)),a}function c(e,n,t,l){let a=[],i=[],o=[],r=0;const s=[],u=[];for(let p=0;p<l;p++){const l=m(p,e,n,t);s.push(l.sbMean),u.push(l.sbSdcm),r+=u[p]}let c,f=r,d=!0;for(;d||r<f;){d=!1,a=[];for(let n=0;n<l;n++)a.push(e[n]);for(let t=0;t<l;t++)for(let a=e[t]+1;a<=e[t+1];a++)if(c=n[a],t>0&&a!==e[t+1]&&Math.abs(c-s[t])>Math.abs(c-s[t-1]))e[t]=a;else if(t<l-1&&e[t]!==a-1&&Math.abs(c-s[t])>Math.abs(c-s[t+1])){e[t+1]=a-1;break}f=r,r=0,i=[],o=[];for(let a=0;a<l;a++){i.push(s[a]),o.push(u[a]);const l=m(a,e,n,t);s[a]=l.sbMean,u[a]=l.sbSdcm,r+=u[a]}}if(r>f){for(let n=0;n<l;n++)e[n]=a[n],s[n]=i[n],u[n]=o[n];r=f}return{mean:s,sdcm:u}}function m(e,n,t,a){let i=0,o=0;for(let l=n[e]+1;l<=n[e+1];l++){const e=a[l];i+=t[l]*e,o+=e}o<=0&&l.warn("Exception in Natural Breaks calculation");const r=i/o;let s=0;for(let l=n[e]+1;l<=n[e+1];l++)s+=a[l]*(t[l]-r)**2;return{sbMean:r,sbSdcm:s}}},96568:(e,n,t)=>{t.d(n,{$r:()=>v,Jc:()=>g,gV:()=>b,rb:()=>y});t(17639),t(98849);var l=t(89882),a=t(46437),i=t(78983),o=t(20698),r=t(87926),s=t(42453),u=t(27927),c=t(99340),m=t(27218),f=t(28965),d=t(78632);let p=null;const h=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function v(e,n,t,l){const a=(0,r.d9)(t)?(0,r.Vp)(t):null,i=a?Math.round((a.valid[1]-a.valid[0])/n.scale[0]):null;return e.map((e=>{const t=new d.A(e.geometry);return(0,o.Gy)(n,t,t,t.hasZ,t.hasM),e.geometry=a?function(e,n,t){return e.x<0?e.x+=n:e.x>t&&(e.x-=n),e}(t,i??0,l[0]):t,e}))}function b(e,n=18,t,a,i,o){const r=new Float64Array(i*o);n=Math.round((0,l.Lz)(n));let s=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,m=0,f=0,d=0,p=0;const h=(0,u.YW)(a,t);for(const{geometry:l,attributes:b}of e){const{x:e,y:t}=l,a=Math.max(0,e-n),v=Math.max(0,t-n),y=Math.min(o,t+n),g=Math.min(i,e+n),V=+h(b);for(let l=v;l<y;l++)for(let o=a;o<g;o++){const a=l*i+o,h=(0,u.hv)(o-e,l-t,n),v=r[a];m=r[a]+=h*V;const b=m-v;f+=b,d+=b*b,m<s&&(s=m),m>c&&(c=m),p++}}if(!p)return{mean:0,stddev:0,min:0,max:0,mid:0,count:0};const v=(c-s)/2;return{mean:f/p,stdDev:Math.sqrt((d-f*f/p)/p),min:s,max:c,mid:v,count:p}}function y(e){const n=h.exec(e);if(!n)return null;const{hh:t,mm:l,ss:i,ms:o}=n.groups;return Number(t)*a.vf.hours+Number(l)*a.vf.minutes+Number(i)*a.vf.seconds+Number(o||0)}async function g(e,n,t=!0){if(!n)return[];const{field:l,field2:a,field3:o,fieldDelimiter:r,fieldInfos:u,timeZone:d}=e,h=l&&u?.find((e=>e.name.toLowerCase()===l.toLowerCase())),v=!!h&&(0,s.OH)(h),b=!!h&&(0,c.fs)(h),g=e.valueExpression,V=e.normalizationType,x=e.normalizationField,T=e.normalizationTotal,M=[],F=e.viewInfoParams;let I=null,z=null;if(g){if(!p){const{arcadeUtils:e}=await(0,f.lw)();p=e}p.hasGeometryOperations(g)&&await p.enableGeometryOperations(),I=p.createFunction(g),z=F?p.getViewInfo({viewingMode:F.viewingMode,scale:F.scale,spatialReference:new i.A(F.spatialReference)}):null}const w=e.fieldInfos,N=n[0]&&"declaredClass"in n[0]&&"esri.Graphic"===n[0].declaredClass||!w?null:{fields:w};return n.forEach((e=>{const n=e.attributes;let i;if(g){const n=N?{...e,layer:N}:e,t=p.createExecContext(n,z,d);i=p.executeFunction(I,t)}else n&&(i=n[l],a?(i=`${(0,m.gJ)(i)}${r}${(0,m.gJ)(n[a])}`,o&&(i=`${i}${r}${(0,m.gJ)(n[o])}`)):"string"==typeof i&&t&&(b?i=i?new Date(i).getTime():null:v&&(i=i?y(i):null)));if(V&&"number"==typeof i&&isFinite(i)){const e=n&&parseFloat(n[x]);i=(0,m.zS)(i,V,e,T)}M.push(i)})),M}},99340:(e,n,t)=>{t.d(n,{fs:()=>o,i0:()=>r});var l=t(76459),a=t(42453),i=(t(28965),t(30405),t(12129));new Set(["integer","small-integer"]);function o(e){return(0,a.vE)(e)||(0,a.zD)(e)||(0,a.Ah)(e)}function r(e,n){const{format:t,timeZoneOptions:a,fieldType:o}=n??{};let r,s;if(a&&({timeZone:r,timeZoneName:s}=(0,i.hv)(a.layerTimeZone,a.datesInUnknownTimezone,a.viewTimeZone,(0,l.J2)(t||"short-date-short-time"),o)),"string"==typeof e&&isNaN(Date.parse("time-only"===o?`1970-01-01T${e}Z`:e)))return e;switch(o){case"date-only":{const n=(0,l.J2)(t||"short-date");return"string"==typeof e?(0,l.iS)(e,{...n}):(0,l.Yq)(e,{...n,timeZone:i.n$})}case"time-only":{const n=(0,l.J2)(t||"short-time");return"string"==typeof e?(0,l.F8)(e,n):(0,l.Yq)(e,{...n,timeZone:i.n$})}case"timestamp-offset":{if(!r&&"string"==typeof e&&new Date(e).toISOString()!==e)return e;const n=t||a?(0,l.J2)(t||"short-date-short-time"):void 0,i=n?{...n,timeZone:r,timeZoneName:s}:void 0;return"string"==typeof e?(0,l.Ey)(e,i):(0,l.Yq)(e,i)}default:{const n=t||a?(0,l.J2)(t||"short-date-short-time"):void 0;return(0,l.Yq)("string"==typeof e?new Date(e):e,n?{...n,timeZone:r,timeZoneName:s}:void 0)}}}},27218:(e,n,t)=>{t.d(n,{$y:()=>O,FM:()=>g,G_:()=>b,Rw:()=>E,Vb:()=>h,b3:()=>C,gJ:()=>p,jM:()=>B,lv:()=>Z,oZ:()=>k,qg:()=>y,z9:()=>v,zS:()=>$});var l=t(83763),a=t(47003);const i="<Null>",o="equal-interval",r=1,s=5,u=10,c=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,m=new Set(["esriFieldTypeDate","esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeOID","esriFieldTypeBigInteger"]),f=new Set(["esriFieldTypeTimeOnly","esriFieldTypeDateOnly"]),d=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function p(e){return null==e||"string"==typeof e&&!e?i:e}function h(e){const n=null!=e.normalizationField||null!=e.normalizationType,t=null!=e.minValue||null!=e.maxValue,l=!!e.sqlExpression&&e.supportsSQLExpression;return!n&&!t&&!l}function v(e){const n=e.returnDistinct?[...new Set(e.values)]:e.values,t=n.filter((e=>null!=e)).sort(),l=t.length,a={count:l,min:t[0],max:t[l-1]};return e.supportsNullCount&&(a.nullcount=n.length-l),e.percentileParams&&(a.median=y(n,e.percentileParams)),a}function b(e){const{values:n,useSampleStdDev:t,supportsNullCount:l}=e;let a=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,o=null,r=null,s=null,u=null,c=0;const m=null==e.minValue?-1/0:e.minValue,f=null==e.maxValue?1/0:e.maxValue;for(const p of n)Number.isFinite(p)?p>=m&&p<=f&&(o=null===o?p:o+p,a=Math.min(a,p),i=Math.max(i,p),c++):"string"==typeof p&&c++;if(c&&null!=o){r=o/c;let e=0;for(const t of n)Number.isFinite(t)&&t>=m&&t<=f&&(e+=(t-r)**2);u=t?c>1?e/(c-1):0:c>0?e/c:0,s=Math.sqrt(u)}else a=null,i=null;const d={avg:r,count:c,max:i,min:a,stddev:s,sum:o,variance:u};return l&&(d.nullcount=n.length-c),e.percentileParams&&(d.median=y(n,e.percentileParams)),d}function y(e,n){const{fieldType:t,value:l,orderBy:a,isDiscrete:i}=n,o=g(t,"desc"===a);if(0===(e=[...e].filter((e=>null!=e)).sort(((e,n)=>o(e,n)))).length)return null;if(l<=0)return e[0];if(l>=1)return e[e.length-1];const r=(e.length-1)*l,s=Math.floor(r),u=s+1,c=r%1,m=e[s],f=e[u];return u>=e.length||i||"string"==typeof m||"string"==typeof f?m:m*(1-c)+f*c}function g(e,n){if(e){if(m.has(e))return D(n);if(f.has(e))return z(n,!1);if("esriFieldTypeTimestampOffset"===e)return function(e){return e?M:T}(n);const t=z(n,!0);if("esriFieldTypeString"===e)return t;if("esriFieldTypeGUID"===e||"esriFieldTypeGlobalID"===e)return(e,n)=>t(S(e),S(n))}const t=n?1:-1,l=D(n),a=z(n,!0);return(e,n)=>"number"==typeof e&&"number"==typeof n?l(e,n):"string"==typeof e&&"string"==typeof n?a(e,n):t}const V=(e,n)=>null==e?null==n?0:1:null==n?-1:null,x=(e,n)=>null==e?null==n?0:-1:null==n?1:null;const T=(e,n)=>x(e,n)??(e===n?0:new Date(e).getTime()-new Date(n).getTime()),M=(e,n)=>V(e,n)??(e===n?0:new Date(n).getTime()-new Date(e).getTime());const F=(e,n)=>x(e,n)??(e===n?0:e<n?-1:1),I=(e,n)=>V(e,n)??(e===n?0:e<n?1:-1);function z(e,n){if(!n)return e?I:F;const t=function(e){return e?V:x}(e);return e?(e,n)=>{const l=t(e,n);return null!=l?l:(e=e.toUpperCase())>(n=n.toUpperCase())?-1:e<n?1:0}:(e,n)=>{const l=t(e,n);return null!=l?l:(e=e.toUpperCase())<(n=n.toUpperCase())?-1:e>n?1:0}}const w=(e,n)=>V(e,n)??n-e,N=(e,n)=>x(e,n)??e-n;function D(e){return e?w:N}function S(e){return e.substr(24,12)+e.substr(19,4)+e.substr(16,2)+e.substr(14,2)+e.substr(11,2)+e.substr(9,2)+e.substr(6,2)+e.substr(4,2)+e.substr(2,2)+e.substr(0,2)}function k(e,n){let t;for(t in e)d.includes(t)&&(Number.isFinite(e[t])||(e[t]=null));return n?(["avg","stddev","variance"].forEach((n=>{null!=e[n]&&(e[n]=Math.ceil(e[n]??0))})),e):e}function C(e){const n={};for(let t of e)(null==t||"string"==typeof t&&""===t.trim())&&(t=null),null==n[t]?n[t]={count:1,data:t}:n[t].count++;return{count:n}}function q(e){return"coded-value"!==e?.type?[]:e.codedValues.map((e=>e.code))}function Z(e,n,t,l){const a=e.count,i=[];if(t&&n){const e=[],t=q(n[0]);for(const a of t)if(n[1]){const t=q(n[1]);for(const i of t)if(n[2]){const t=q(n[2]);for(const n of t)e.push(`${p(a)}${l}${p(i)}${l}${p(n)}`)}else e.push(`${p(a)}${l}${p(i)}`)}else e.push(a);for(const n of e)a.hasOwnProperty(n)||(a[n]={data:n,count:0})}for(const o in a){const e=a[o];i.push({value:e.data,count:e.count,label:e.label})}return{uniqueValueInfos:i}}function $(e,n,t,l){let a=null;switch(n){case"log":0!==e&&(a=Math.log(e)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(l)&&0!==l&&(a=e/l*100);break;case"field":Number.isFinite(t)&&0!==t&&(a=e/t);break;case"natural-log":e>0&&(a=Math.log(e));break;case"square-root":e>0&&(a=e**.5)}return a}function E(e,n){const t=_({field:n.field,normalizationType:n.normalizationType,normalizationField:n.normalizationField,classificationMethod:n.classificationMethod,standardDeviationInterval:n.standardDeviationInterval,breakCount:n.numClasses||s});return e=function(e,n,t){const l=n??-1/0,a=t??1/0;return e.filter((e=>Number.isFinite(e)&&e>=l&&e<=a))}(e,n.minValue,n.maxValue),(0,a.t)({definition:t,values:e,normalizationTotal:n.normalizationTotal})}function _(e){const{breakCount:n,field:t,normalizationField:a,normalizationType:i}=e,s=e.classificationMethod||o,u="standard-deviation"===s?e.standardDeviationInterval||r:void 0;return new l.A({breakCount:n,classificationField:t,classificationMethod:s,normalizationField:"field"===i?a:void 0,normalizationType:i,standardDeviationInterval:u})}function B(e,n){let t=e.classBreaks;const l=t.length,a=t[0]?.minValue,i=t[l-1]?.maxValue,o="standard-deviation"===n,r=c;return t=t.map((e=>{const n=e.label,t={minValue:e.minValue,maxValue:e.maxValue,label:n};if(o&&n){const e=n.match(r),l=e?.map((e=>+e.trim()))??[];2===l.length?(t.minStdDev=l[0],t.maxStdDev=l[1],l[0]<0&&l[1]>0&&(t.hasAvg=!0)):1===l.length&&(n.includes("<")?(t.minStdDev=null,t.maxStdDev=l[0]):n.includes(">")&&(t.minStdDev=l[0],t.maxStdDev=null))}return t})),{minValue:a,maxValue:i,classBreakInfos:t,normalizationTotal:e.normalizationTotal}}function O(e,n){const t=J(e,n);if(null==t.min&&null==t.max)return{bins:[],minValue:t.min,maxValue:t.max,normalizationTotal:n.normalizationTotal};const l=t.intervals,a=t.min??0,i=t.max??0,o=l.map(((e,n)=>({minValue:l[n][0],maxValue:l[n][1],count:0})));for(const r of e)if(null!=r&&r>=a&&r<=i){const e=A(l,r);e>-1&&o[e].count++}return{bins:o,minValue:a,maxValue:i,normalizationTotal:n.normalizationTotal}}function J(e,n){const{field:t,classificationMethod:l,standardDeviationInterval:a,normalizationType:i,normalizationField:o,normalizationTotal:r,minValue:s,maxValue:c}=n,m=n.numBins||u;let f=null,d=null,p=null;if(l&&"equal-interval"!==l||i){const{classBreaks:n}=E(e,{field:t,normalizationType:i,normalizationField:o,normalizationTotal:r,classificationMethod:l,standardDeviationInterval:a,minValue:s,maxValue:c,numClasses:m});f=n[0].minValue,d=n[n.length-1].maxValue,p=n.map((e=>[e.minValue,e.maxValue]))}else{if(null!=s&&null!=c)f=s,d=c;else{const n=b({values:e,minValue:s,maxValue:c,useSampleStdDev:!i,supportsNullCount:h({normalizationType:i,normalizationField:o,minValue:s,maxValue:c})});f=n.min??null,d=n.max??null}p=function(e,n,t){const l=(n-e)/t,a=[];let i,o=e;for(let r=1;r<=t;r++)i=o+l,i=Number(i.toFixed(16)),a.push([o,r===t?n:i]),o=i;return a}(f??0,d??0,m)}return{min:f,max:d,intervals:p}}function A(e,n){let t=-1;for(let l=e.length-1;l>=0;l--)if(n>=e[l][0]){t=l;break}return t}}}]);