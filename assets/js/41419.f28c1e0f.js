"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41419],{41419:(e,n,o)=>{o.d(n,{Cc:()=>h,CC:()=>f,RF:()=>d});var t=o(96220),r=(o(39831),o(89882)),a=o(28152);var c=o(34443),i=(o(73345),o(51859),o(66976),o(55274),o(70224),o(84674),o(72196),o(11809),o(99120));i.n;var l;o(52293),o(36340),o(50645);!function(e){e[e.Uniform=0]="Uniform",e[e.Varying=1]="Varying",e[e.COUNT=2]="COUNT"}(l||(l={}));var s,u;o(81283),o(10470),o(13501),o(60840),o(8376),o(6561),o(82088);function d(e){return e&&e.enabled&&(function(e){return"extrude"===e.type}(e)||function(e){return"fill"===e.type}(e))&&null!=e.edges}function h(e,n){return function(e,n){if(null==e)return null;const o=null!=e.color?(0,a.ci)(t.A.toUnitRGBA(e.color)):(0,a.fA)(0,0,0,0),c=(0,r.Lz)(e.size),i=(0,r.Lz)(e.extensionLength);switch(e.type){case"solid":return f({color:o,size:c,extensionLength:i,...n});case"sketch":return function(e){return{...v,...e,type:s.Sketch}}({color:o,size:c,extensionLength:i,...n});default:return}}(function(e){return e&&e.enabled&&e.edges||null}(e),n)}function f(e){return{...m,...e,type:s.Solid}}!function(e){e[e.Solid=0]="Solid",e[e.Sketch=1]="Sketch",e[e.Mixed=2]="Mixed",e[e.COUNT=3]="COUNT"}(s||(s={})),function(e){e[e.REGULAR=0]="REGULAR",e[e.SILHOUETTE=1]="SILHOUETTE"}(u||(u={}));const m={color:(0,a.fA)(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:c.x.OPAQUE,hasSlicePlane:!1},v={color:(0,a.fA)(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:c.x.OPAQUE,hasSlicePlane:!1}},55623:(e,n,o)=>{o.d(n,{Eb:()=>a,_j:()=>c,k5:()=>t});var t,r=o(92504);function a(e){switch(e){case"multiply":default:return t.Multiply;case"ignore":return t.Ignore;case"replace":return t.Replace;case"tint":return t.Tint}}function c(e,n,o){if(null==e||n===t.Ignore)return o[0]=255,o[1]=255,o[2]=255,void(o[3]=255);const a=(0,r.qE)(Math.round(e[3]*l),0,l),c=0===a||n===t.Tint?0:n===t.Replace?s:u;o[0]=(0,r.qE)(Math.round(e[0]*i),0,i),o[1]=(0,r.qE)(Math.round(e[1]*i),0,i),o[2]=(0,r.qE)(Math.round(e[2]*i),0,i),o[3]=a+c}!function(e){e[e.Multiply=1]="Multiply",e[e.Ignore=2]="Ignore",e[e.Replace=3]="Replace",e[e.Tint=4]="Tint"}(t||(t={}));const i=255,l=85,s=l,u=2*l},66976:(e,n,o)=>{o.d(n,{A:()=>a});var t=o(55623),r=o(72196);function a(e){e.vertex.code.add(r.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${r.H.int(t.k5.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${r.H.int(t.k5.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${r.H.int(t.k5.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${r.H.int(t.k5.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}},55274:(e,n,o)=>{var t;function r(e){return e===t.Shadow||e===t.ShadowHighlight||e===t.ShadowExcludeHighlight||e===t.ViewshedShadow}function a(e){return function(e){return v(e)||b(e)}(e)||e===t.Normal}function c(e){return A(e)||e===t.Normal}function i(e){return e===t.Highlight||e===t.ObjectAndLayerIdColor}function l(e){return s(e)||i(e)}function s(e){return e===t.Color}function u(e){return s(e)||g(e)}function d(e){return s(e)||e===t.ObjectAndLayerIdColor}function h(e){return u(e)||e===t.ObjectAndLayerIdColor}function f(e){return s(e)||e===t.Highlight}function m(e){return f(e)||b(e)}function v(e){return s(e)||i(e)}function p(e){return u(e)||i(e)}function A(e){return p(e)||b(e)}function b(e){return e===t.Depth}function g(e){return e===t.ColorEmission}function y(e){switch(e){case t.Depth:case t.Shadow:case t.ShadowHighlight:case t.ShadowExcludeHighlight:case t.ViewshedShadow:return!0}return!1}o.d(n,{CL:()=>i,LG:()=>g,Mb:()=>p,PJ:()=>r,QG:()=>h,RN:()=>u,T2:()=>A,V:()=>t,Vg:()=>y,XY:()=>a,_o:()=>s,aD:()=>m,dX:()=>v,eh:()=>b,i3:()=>l,iq:()=>c,zW:()=>d}),function(e){e[e.Color=0]="Color",e[e.ColorEmission=1]="ColorEmission",e[e.Depth=2]="Depth",e[e.Normal=3]="Normal",e[e.Shadow=4]="Shadow",e[e.ShadowHighlight=5]="ShadowHighlight",e[e.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",e[e.ViewshedShadow=7]="ViewshedShadow",e[e.Highlight=8]="Highlight",e[e.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",e[e.COUNT=10]="COUNT"}(t||(t={}))},81283:(e,n,o)=>{o.d(n,{W:()=>t,Y:()=>i});var t,r=o(73345),a=o(72196),c=o(50645);function i(e,n){switch(n.normalType){case t.Compressed:e.attributes.add(c.r.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(a.H`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case t.Attribute:e.attributes.add(c.r.NORMAL,"vec3"),e.vertex.code.add(a.H`vec3 normalModel() {
return normal;
}`);break;case t.ScreenDerivative:e.fragment.code.add(a.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,r.Xb)(n.normalType);case t.COUNT:}}!function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.ScreenDerivative=2]="ScreenDerivative",e[e.COUNT=3]="COUNT"}(t||(t={}))},10470:(e,n,o)=>{o.d(n,{u:()=>a});var t=o(17983),r=o(72196);function a({code:e,uniforms:n},o){n.add(new t.U("dpDummy",(()=>1))),e.add(r.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 hiD = hiA + hiB;
vec3 loD = loA + loB;
return  dpDummy * hiD + loD;
}`)}},70224:(e,n,o)=>{o.d(n,{W:()=>r});var t=o(72196);function r(e){e.code.add(t.H`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}`),e.code.add(t.H`const vec4 RGBA_TO_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgbaTofloat(vec4 rgba) {
return dot(rgba, RGBA_TO_FLOAT_FACTORS);
}`),e.code.add(t.H`const vec4 uninterpolatedRGBAToFloatFactors = vec4(
1.0 / 256.0,
1.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0 / 256.0
);
float uninterpolatedRGBAToFloat(vec4 rgba) {
return (dot(round(rgba * 255.0), uninterpolatedRGBAToFloatFactors) - 0.5) * 2.0;
}`)}},13501:(e,n,o)=>{o.d(n,{W:()=>a});var t=o(11809),r=o(99120);class a extends r.n{constructor(e,n){super(e,"vec3",t.c.Draw,((o,t,r,a)=>o.setUniform3fv(e,n(t,r,a))))}}},60840:(e,n,o)=>{o.d(n,{t:()=>a});var t=o(11809),r=o(99120);class a extends r.n{constructor(e,n){super(e,"vec3",t.c.Pass,((o,t,r)=>o.setUniform3fv(e,n(t,r))))}}},84674:(e,n,o)=>{o.d(n,{V:()=>a});var t=o(11809),r=o(99120);class a extends r.n{constructor(e,n){super(e,"vec4",t.c.Draw,((o,t,r)=>o.setUniform4fv(e,n(t,r))))}}},17983:(e,n,o)=>{o.d(n,{U:()=>a});var t=o(11809),r=o(99120);class a extends r.n{constructor(e,n){super(e,"float",t.c.Bind,((o,t)=>o.setUniform1f(e,n(t))))}}},8376:(e,n,o)=>{o.d(n,{h:()=>a});var t=o(11809),r=o(99120);class a extends r.n{constructor(e,n){super(e,"mat3",t.c.Draw,((o,t,r)=>o.setUniformMatrix3fv(e,n(t,r))))}}},6561:(e,n,o)=>{o.d(n,{k:()=>a});var t=o(11809),r=o(99120);class a extends r.n{constructor(e,n){super(e,"mat3",t.c.Pass,((o,t,r)=>o.setUniformMatrix3fv(e,n(t,r))))}}},82088:(e,n,o)=>{o.d(n,{F:()=>a});var t=o(11809),r=o(99120);class a extends r.n{constructor(e,n){super(e,"mat4",t.c.Bind,((o,t)=>o.setUniformMatrix4fv(e,n(t))))}}},52293:(e,n,o)=>{o.d(n,{o:()=>a});var t=o(11809),r=o(99120);class a extends r.n{constructor(e,n){super(e,"sampler2D",t.c.Draw,((o,t,r)=>o.bindTexture(e,n(t,r))))}}},72196:(e,n,o)=>{function t(e,...n){let o="";for(let t=0;t<n.length;t++)o+=e[t]+n[t];return o+=e[e.length-1],o}function r(e,n,o=""){return e?n:o}o.d(n,{H:()=>t,If:()=>r}),function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(t||(t={}))},36340:(e,n,o)=>{o.d(n,{E:()=>r});var t=o(39831);function r(){return!!(0,t.A)("enable-feature:objectAndLayerId-rendering")}},34443:(e,n,o)=>{var t;o.d(n,{x:()=>t}),function(e){e[e.TRANSPARENT=0]="TRANSPARENT",e[e.OPAQUE=1]="OPAQUE"}(t||(t={}))},99120:(e,n,o)=>{o.d(n,{n:()=>r});o(39831);var t=o(11809);class r{constructor(e,n,o,r,a=null){if(this.name=e,this.type=n,this.arraySize=a,this.bind={[t.c.Bind]:null,[t.c.Pass]:null,[t.c.Draw]:null},r)switch(o){case void 0:break;case t.c.Bind:this.bind[t.c.Bind]=r;break;case t.c.Pass:this.bind[t.c.Pass]=r;break;case t.c.Draw:this.bind[t.c.Draw]=r}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}}}]);