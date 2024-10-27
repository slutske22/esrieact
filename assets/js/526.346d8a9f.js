"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[526],{50526:(e,r,t)=>{t.d(r,{createLabelFunction:()=>h});var n=t(98849),a=t(539),u=t(76859),l=t(76459),o=t(46930),s=t(92309),i=t(42453),c=t(74639),f=t(28965);const d=a.A.getLogger("esri.layers.support.labelFormatUtils"),p={type:"simple",evaluate:()=>null},w={getAttribute:(e,r)=>e.field(r)};async function h(e,r,t){if(!e||!e.symbol||!r)return p;const a=e.where,h=(0,c.XJ)(e);let v;if("arcade"===h.type){const e=await(0,f.$I)(h.expression,t,r);if(null==e)return p;v={type:"arcade",evaluate(r,a){try{const t="attributes"in r?e.repurposeFeature(r):r;t.contextTimeZone=a??null;const n=e.evaluate({$view:{timeZone:a},$feature:t},e.services);if(null!=n)return n.toString()}catch(t){d.error(new n.A("arcade-expression-error","Encountered an error when evaluating label expression for feature",{error:t,feature:r,expression:h}))}return null},needsHydrationToEvaluate:()=>null==(0,c.tH)(h.expression)}}else v={type:"simple",evaluate:e=>h.expression.replaceAll(/{[^}]*}/g,(t=>{const n=t.slice(1,-1),a=r.get(n);if(!a)return t;let u=null;return"attributes"in e?e&&e.attributes&&(u=e.attributes[a.name]):u=e.field(a.name),null==u?"":function(e,r){if(null==e)return"";const t=r.domain;if(t)if("codedValue"===t.type||"coded-value"===t.type){const r=e;for(const e of t.codedValues)if(e.code===r)return e.name}else if("range"===t.type){const{max:n,min:a}=(0,s.A5)(r),u=+e;if(null!=a&&null!=n&&a<=u&&u<=n)return t.name}let n=e;return(0,i.vE)(r)?n=(0,l.Yq)(n,(0,l.J2)("short-date")):(0,i.WA)(r)&&(n=(0,o.ZV)(+n)),n||""}(u,a)}))};if(a){let e;try{e=await(0,u.G)(a,r)}catch(b){return d.error(new n.A("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:a,error:b})),p}const t=v.evaluate;v.evaluate=(r,u)=>{const l="attributes"in r?void 0:w;try{if(e.testFeature(r,l))return t(r,u)}catch(b){d.error(new n.A("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:a,feature:r,error:b}))}return null}}return v}}}]);