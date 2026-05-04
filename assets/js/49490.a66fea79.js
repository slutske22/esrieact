"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49490],{68237:(e,t,o)=>{o.d(t,{D:()=>W,b:()=>B});var a=o(28152),i=o(40641),r=o(26163),n=o(55274),s=o(1110),l=o(66012),c=o(24682),d=o(81283),u=o(53429),m=o(26139),h=o(39739),v=o(82089),p=o(54009),f=o(23399),g=o(76080),x=o(3325),b=o(93929),w=o(696),M=o(46971),T=o(17666),S=o(39486),y=o(53402),C=o(23233),N=o(25541),O=o(34328),I=o(4139),E=o(60915),z=o(63592),H=o(60840),A=o(1411),_=o(35449),L=o(72196),P=o(79856),G=o(77581),V=o(50645),R=o(19274),j=o(96028),D=o(63199);function B(e){const t=new j.N5,{attributes:o,vertex:B,fragment:W,varyings:F}=t,{output:U,normalType:q,offsetBackfaces:Y,instancedColor:Z,spherical:J,receiveShadows:k,snowCover:X,pbrMode:$,textureAlphaPremultiplied:K,instancedDoublePrecision:Q,hasVertexColors:ee,hasVertexTangents:te,hasColorTexture:oe,hasNormalTexture:ae,hasNormalTextureTransform:ie,hasColorTextureTransform:re,hasBloom:ne}=e;if((0,z.NB)(B,e),o.add(V.r.POSITION,"vec3"),F.add("vpos","vec3",{invariant:!0}),t.include(O.A,e),t.include(c.B,e),t.include(p.G,e),t.include(N.q2,e),!(0,n.RN)(U))return t.include(f.E,e),t;t.include(N.Sx,e),t.include(N.MU,e),t.include(N.O1,e),t.include(N.QM,e),(0,z.yu)(B,e),t.include(d.Y,e),t.include(l.d,e);const se=q===d.W.Attribute||q===d.W.Compressed;return se&&Y&&t.include(r.M),t.include(g.W,e),t.include(v.Mh,e),Z&&t.attributes.add(V.r.INSTANCECOLOR,"vec4"),F.add("vPositionLocal","vec3"),t.include(m.U,e),t.include(i.oD,e),t.include(u.K,e),t.include(h.c,e),B.uniforms.add(new A.E("externalColor",(e=>"ignore"===e.colorMixMode?a.Un:e.externalColor))),F.add("vcolorExt","vec4"),t.include(C.Z,e),B.main.add(L.H`
    forwardNormalizedVertexColor();
    vcolorExt = externalColor;
    ${(0,L.If)(Z,"vcolorExt *= instanceColor * 0.003921568627451;")}
    vcolorExt *= vvColor();
    vcolorExt *= getSymbolColor();
    forwardColorMixMode();

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${(0,L.If)(se,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${(0,L.If)(te,"vTangent = dpTransformVertexTangent(tangent);")}
    gl_Position = transformPosition(proj, view, vpos);
    ${(0,L.If)(se&&Y,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardLinearDepth();
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (vcolorExt.a < ${L.H.float(D.Q)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
  `),t.include(b.kA,e),W.include(x.n,e),t.include(I.S,e),t.include(Q?y.G:y.Bz,e),W.include(s.HQ,e),t.include(R.z,e),(0,z.yu)(W,e),W.uniforms.add(B.uniforms.get("localOrigin"),new H.t("ambient",(e=>e.ambient)),new H.t("diffuse",(e=>e.diffuse)),new _.m("opacity",(e=>e.opacity)),new _.m("layerOpacity",(e=>e.layerOpacity))),oe&&W.uniforms.add(new P.N("tex",(e=>e.texture))),t.include(S._Z,e),W.include(T.c,e),W.include(E.N),t.include(M.r,e),W.include(G.b,e),(0,b.a8)(W),(0,b.eU)(W),(0,w.O4)(W),W.main.add(L.H`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${oe?L.H`
            vec4 texColor = texture(tex, ${re?"colorUV":"vuv0"});
            ${(0,L.If)(K,"texColor.rgb /= texColor.a;")}
            discardOrAdjustAlpha(texColor);`:L.H`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${q===d.W.ScreenDerivative?L.H`vec3 normal = screenDerivativeNormal(vPositionLocal);`:L.H`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${k?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":(0,L.If)(J,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${(0,L.If)(ee,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
    float opacity_ = layerOpacity * mixExternalOpacity(${(0,L.If)(ee,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
    ${ae?`mat3 tangentSpace = computeTangentSpace(${te?"normal":"normal, vpos, vuv0"});\n            vec3 shadingNormal = computeTextureNormal(tangentSpace, ${ie?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
    vec3 normalGround = ${J?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

    ${(0,L.If)(X,L.H`
          float snow = getSnow(normal, normalGround);
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${$===S.A9.Normal||$===S.A9.Schematic?L.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            vec4 emission = ${ne?"vec4(0.0)":"getEmissions(albedo)"};
            ${(0,L.If)(X,"mrr = applySnowToMRR(mrr, snow);\n                 emission = snowCoverForEmissions(emission, snow);")}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:L.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOID(finalColor, vpos, albedo ${(0,L.If)(X,", snow")});
  `),t}const W=Object.freeze(Object.defineProperty({__proto__:null,build:B},Symbol.toStringTag,{value:"Module"}))},3458:(e,t,o)=>{o.d(t,{R:()=>G,b:()=>P});var a=o(40641),i=o(26163),r=o(55274),n=o(1110),s=o(66012),l=o(24682),c=o(81283),d=o(53429),u=o(26139),m=o(39739),h=o(54009),v=o(23399),p=o(3325),f=o(93929),g=o(696),x=o(17666),b=o(39486),w=o(53402),M=o(23233),T=o(34328),S=o(4139),y=o(60915),C=o(63592),N=o(60840),O=o(1411),I=o(35449),E=o(72196),z=o(79856),H=o(50645),A=o(19274),_=o(96028),L=o(63199);function P(e){const t=new _.N5,{attributes:o,vertex:P,fragment:G,varyings:V}=t,{output:R,offsetBackfaces:j,instancedColor:D,pbrMode:B,snowCover:W,spherical:F,hasBloom:U}=e,q=B===b.A9.Normal||B===b.A9.Schematic;if((0,C.NB)(P,e),o.add(H.r.POSITION,"vec3"),V.add("vpos","vec3",{invariant:!0}),t.include(T.A,e),t.include(l.B,e),t.include(h.G,e),t.include(M.Z,e),(0,r.RN)(R)&&((0,C.yu)(t.vertex,e),t.include(c.Y,e),t.include(s.d,e),j&&t.include(i.M),D&&t.attributes.add(H.r.INSTANCECOLOR,"vec4"),V.add("vNormalWorld","vec3"),V.add("localvpos","vec3",{invariant:!0}),t.include(u.U,e),t.include(a.oD,e),t.include(d.K,e),t.include(m.c,e),P.uniforms.add(new O.E("externalColor",(e=>e.externalColor))),V.add("vcolorExt","vec4"),P.main.add(E.H`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${(0,E.If)(D,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      bool alphaCut = vcolorExt.a < ${E.H.float(L.Q)};
      vpos = getVertexInLocalOriginSpace();
      localvpos = vpos - view[3].xyz;
      vpos = subtractOrigin(vpos);
      vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
      vpos = addVerticalOffset(vpos, localOrigin);
      vec4 basePosition = transformPosition(proj, view, vpos);

      forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
      forwardLinearDepth();
      forwardTextureCoordinates();

      gl_Position = alphaCut ? vec4(1e38, 1e38, 1e38, 1.0) :
      ${(0,E.If)(j,"offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);","basePosition;")}
    `)),(0,r.RN)(R)){const{hasColorTexture:o,hasColorTextureTransform:a,receiveShadows:i}=e;t.include(f.kA,e),G.include(p.n,e),t.include(S.S,e),t.include(e.instancedDoublePrecision?w.G:w.Bz,e),G.include(n.HQ,e),t.include(A.z,e),(0,C.yu)(G,e),(0,g.Gc)(G),(0,f.a8)(G),(0,f.eU)(G),G.uniforms.add(P.uniforms.get("localOrigin"),P.uniforms.get("view"),new N.t("ambient",(e=>e.ambient)),new N.t("diffuse",(e=>e.diffuse)),new I.m("opacity",(e=>e.opacity)),new I.m("layerOpacity",(e=>e.layerOpacity))),o&&G.uniforms.add(new z.N("tex",(e=>e.texture))),t.include(b._Z,e),G.include(x.c,e),G.include(y.N),(0,g.O4)(G),G.main.add(E.H`
      discardBySlice(vpos);
      discardByTerrainDepth();
      vec4 texColor = ${o?`texture(tex, ${a?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${(0,E.If)(o,`${(0,E.If)(e.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}\n        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${i?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":F?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
      vec3 matColor = max(ambient, diffuse);
      ${e.hasVertexColors?E.H`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:E.H`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
      ${(0,E.If)(W,"albedo = mix(albedo, vec3(1), 0.9);")}
      ${E.H`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${(0,E.If)(q,`vec3 normalGround = ${F?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${q?E.H`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${(0,E.If)(W,E.H`mrr = applySnowToMRR(mrr, 1.0)`)}
            vec4 emission = ${W||U?"vec4(0.0)":"getEmissions(albedo)"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:E.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos, albedo ${(0,E.If)(W,", 1.0")});`)}return t.include(v.E,e),t}const G=Object.freeze(Object.defineProperty({__proto__:null,build:P},Symbol.toStringTag,{value:"Module"}))},51522:(e,t,o)=>{o.d(t,{S:()=>b,b:()=>f,g:()=>g});var a=o(60704),i=o(59646),r=o(16961),n=o(65743),s=o(1062),l=o(74767),c=o(54473),d=o(17983),u=o(35449),m=o(72196),h=o(79856),v=o(96028);const p=16;function f(){const e=new v.N5,t=e.fragment;return e.include(r.c),e.include(s.Ir),t.include(n.E),t.uniforms.add(new d.U("radius",(e=>g(e.camera)))).code.add(m.H`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),t.code.add(m.H`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.outputs.add("fragOcclusion","float"),t.uniforms.add(new h.N("normalMap",(e=>e.normalTexture)),new h.N("depthMap",(e=>e.depthTexture)),new u.m("projScale",(e=>e.projScale)),new h.N("rnm",(e=>e.noiseTexture)),new c.G("rnmScale",((e,t)=>(0,a.hZ)(x,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height))),new u.m("intensity",(e=>e.intensity)),new l.E("screenSize",(e=>(0,a.hZ)(x,e.camera.fullWidth,e.camera.fullHeight)))).main.add(m.H`
    float depth = depthFromTexture(depthMap, uv);

    // Early out if depth is out of range, such as in the sky
    if (depth >= 1.0 || depth <= 0.0) {
      fragOcclusion = 1.0;
      return;
    }

    // get the normal of current fragment
    ivec2 iuv = ivec2(uv * vec2(textureSize(normalMap, 0)));
    vec4 norm4 = texelFetch(normalMap, iuv, 0);
    if(norm4.a != 1.0) {
      fragOcclusion = 1.0;
      return;
    }
    vec3 norm = normalize(norm4.xyz * 2.0 - 1.0);

    float currentPixelDepth = linearizeDepth(depth);
    vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

    float sum = 0.0;
    vec3 tapPixelPos;

    vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

    // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
    // bug or deviation from CE somewhere else?
    float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

    for(int i = 0; i < ${m.H.int(p)}; ++i) {
      vec2 unitOffset = reflect(sphere[i], fres).xy;
      vec2 offset = vec2(-unitOffset * radius * ps);

      // don't use current or very nearby samples
      if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
        continue;
      }

      vec2 tc = vec2(gl_FragCoord.xy + offset);
      if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
      vec2 tcTap = tc / screenSize;
      float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

      tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

      sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
    }

    // output the result
    float A = max(1.0 - sum * intensity / float(${m.H.int(p)}), 0.0);

    // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
    A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

    fragOcclusion = A;
  `),e}function g(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const x=(0,i.vt)(),b=Object.freeze(Object.defineProperty({__proto__:null,build:f,getRadius:g},Symbol.toStringTag,{value:"Module"}))},45789:(e,t,o)=>{o.d(t,{S:()=>h,b:()=>m});var a=o(16961),i=o(65743),r=o(96320),n=o(35449),s=o(72196),l=o(52293),c=o(79856),d=o(96028);const u=4;function m(){const e=new d.N5,t=e.fragment;e.include(a.c);const o=(u+1)/2,m=1/(2*o*o);return t.include(i.E),t.uniforms.add(new c.N("depthMap",(e=>e.depthTexture)),new l.o("tex",(e=>e.colorTexture)),new r.t("blurSize",(e=>e.blurSize)),new n.m("projScale",((e,t)=>{const o=t.camera.distance;return o>5e4?Math.max(0,e.projScale-(o-5e4)):e.projScale}))),t.code.add(s.H`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${s.H.float(m)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.main.add(s.H`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${s.H.int(u)}; r <= ${s.H.int(u)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}const h=Object.freeze(Object.defineProperty({__proto__:null,build:m},Symbol.toStringTag,{value:"Module"}))},28769:(e,t,o)=>{o.d(t,{a:()=>w,b:()=>Y,d:()=>b,f:()=>M,h:()=>y,j:()=>H,u:()=>T});o(39831);var a=o(539),i=o(92504),r=o(92114),n=o(21742),s=o(86128),l=o(24121),c=o(58359),d=o(80510),u=o(58331),m=o(22759),h=o(38774),v=o(10151),p=o(16597),f=o(45573);const g=()=>a.A.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");const x=class{constructor(){this.plane=(0,h.vt)(),this.origin=(0,c.vt)(),this.basis1=(0,c.vt)(),this.basis2=(0,c.vt)()}};function b(e=R){return{plane:(0,h.vt)(e.plane),origin:(0,c.o8)(e.origin),basis1:(0,c.o8)(e.basis1),basis2:(0,c.o8)(e.basis2)}}function w(e,t=b()){return M(e.origin,e.basis1,e.basis2,t)}function M(e,t,o,a=b()){return(0,l.c)(a.origin,e),(0,l.c)(a.basis1,t),(0,l.c)(a.basis2,o),T(a),function(e,t){Math.abs((0,l.e)(e.basis1,e.basis2)/((0,l.l)(e.basis1)*(0,l.l)(e.basis2)))>1e-6&&g().warn(t,"Provided basis vectors are not perpendicular"),Math.abs((0,l.e)(e.basis1,_(e)))>1e-6&&g().warn(t,"Basis vectors and plane normal are not perpendicular"),Math.abs(-(0,l.e)(_(e),e.origin)-e.plane[3])>1e-6&&g().warn(t,"Plane offset is not consistent with plane origin")}(a,"fromValues()"),a}function T(e){(0,h.mR)(e.basis2,e.basis1,e.origin,e.plane)}function S(e,t,o){e!==o&&w(e,o);const a=(0,l.g)(f.rq.get(),_(e),t);return(0,l.f)(o.origin,o.origin,a),o.plane[3]-=t,o}function y(e,t=b()){const o=(e[2]-e[0])/2,a=(e[3]-e[1])/2;return(0,l.i)(t.origin,e[0]+o,e[1]+a,0),(0,l.i)(t.basis1,o,0,0),(0,l.i)(t.basis2,0,a,0),(0,h.fA)(0,0,1,0,t.plane),t}function C(e,t,o){return!!(0,h.Ui)(e.plane,t,o)&&L(e,o)}function N(e,t,o){const a=j.get();V(e,t,a,j.get());let r=Number.POSITIVE_INFINITY;for(const n of F){const s=G(e,n,D.get()),c=f.rq.get();if((0,h.T7)(a,s,c)){const e=(0,l.E)(f.rq.get(),t.origin,c),a=Math.abs((0,i.XM)((0,l.e)(t.direction,e)));a<r&&(r=a,(0,l.c)(o,c))}}return r===Number.POSITIVE_INFINITY?O(e,t,o):o}function O(e,t,o){if(C(e,t,o))return o;const a=j.get(),i=j.get();V(e,t,a,i);let r=Number.POSITIVE_INFINITY;for(const n of F){const s=G(e,n,D.get()),c=f.rq.get();if((0,h.gv)(a,s,c)){const e=(0,v.kb)(t,c);if(!(0,h.Tj)(i,c))continue;e<r&&(r=e,(0,l.c)(o,c))}}return z(e,t.origin)<r&&I(e,t.origin,o),o}function I(e,t,o){const a=(0,h._I)(e.plane,t,f.rq.get()),i=(0,m.H6)(P(e,e.basis1),a,-1,1,f.rq.get()),r=(0,m.H6)(P(e,e.basis2),a,-1,1,f.rq.get());return(0,l.d)(o,(0,l.f)(f.rq.get(),i,r),e.origin),o}function E(e,t,o){const{origin:a,basis1:i,basis2:r}=e,n=(0,l.d)(f.rq.get(),t,a),s=(0,p.gr)(i,n),c=(0,p.gr)(r,n),d=(0,p.gr)(_(e),n);return(0,l.i)(o,s,c,d)}function z(e,t){const o=E(e,t,f.rq.get()),{basis1:a,basis2:i}=e,r=(0,l.l)(a),n=(0,l.l)(i),s=Math.max(Math.abs(o[0])-r,0),c=Math.max(Math.abs(o[1])-n,0),d=o[2];return s*s+c*c+d*d}function H(e,t){return Math.sqrt(z(e,t))}function A(e,t){const o=-e.plane[3];return(0,p.gr)(_(e),t)-o}function _(e){return(0,h.Qj)(e.plane)}function L(e,t){const o=(0,l.d)(f.rq.get(),t,e.origin),a=(0,l.k)(e.basis1),i=(0,l.k)(e.basis2),r=(0,l.e)(e.basis1,o),n=(0,l.e)(e.basis2,o);return-r-a<0&&r-a<0&&-n-i<0&&n-i<0}function P(e,t){const o=D.get();return(0,l.c)(o.origin,e.origin),(0,l.c)(o.vector,t),o}function G(e,t,o){const{basis1:a,basis2:i,origin:r}=e,n=(0,l.g)(f.rq.get(),a,t.origin[0]),s=(0,l.g)(f.rq.get(),i,t.origin[1]);(0,l.f)(o.origin,n,s),(0,l.f)(o.origin,o.origin,r);const c=(0,l.g)(f.rq.get(),a,t.direction[0]),d=(0,l.g)(f.rq.get(),i,t.direction[1]);return(0,l.g)(o.vector,(0,l.f)(c,c,d),2),o}function V(e,t,o,a){const i=_(e);(0,h.mR)(i,t.direction,t.origin,o),(0,h.mR)((0,h.Qj)(o),i,t.origin,a)}const R={plane:(0,h.vt)(),origin:(0,c.fA)(0,0,0),basis1:(0,c.fA)(1,0,0),basis2:(0,c.fA)(0,1,0)},j=new r.I(h.vt),D=new r.I(m.vt),B=(0,c.vt)(),W=new r.I((()=>b())),F=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],U=(0,s.vt)(),q=(0,s.vt)(),Y=Object.freeze(Object.defineProperty({__proto__:null,BoundedPlaneClass:x,altitudeAt:A,axisAt:function(e,t,o,a){return function(e,t,o){switch(t){case u._.X:(0,l.c)(o,e.basis1),(0,l.n)(o,o);break;case u._.Y:(0,l.c)(o,e.basis2),(0,l.n)(o,o);break;case u._.Z:(0,l.c)(o,_(e))}return o}(e,o,a)},cameraFrustumCoverage:function(e,t){return(t-e)/t},closestPoint:O,closestPointOnSilhouette:N,copy:w,copyWithoutVerify:function(e,t){(0,l.c)(t.origin,e.origin),(0,l.c)(t.basis1,e.basis1),(0,l.c)(t.basis2,e.basis2),(0,h.C)(t.plane,e.plane)},create:b,distance:H,distance2:z,distanceToSilhouette:function(e,t){let o=Number.NEGATIVE_INFINITY;for(const a of F){const i=G(e,a,D.get()),r=(0,m.kb)(i,t);r>o&&(o=r)}return Math.sqrt(o)},elevate:S,equals:function(e,t){return(0,l.q)(e.basis1,t.basis1)&&(0,l.q)(e.basis2,t.basis2)&&(0,l.q)(e.origin,t.origin)},extrusionContainsPoint:function(e,t){return(0,h.Tj)(e.plane,t)&&L(e,t)},fromAABoundingRect:y,fromValues:M,getExtent:function(e,t){const o=e.basis1[0],a=e.basis2[1],[i,r]=e.origin;return(0,d.fA)(i-o,r-a,i+o,r+a,t)},intersectRay:C,intersectRayClosestSilhouette:function(e,t,o){if(C(e,t,o))return o;const a=N(e,t,f.rq.get());return(0,l.f)(o,t.origin,(0,l.g)(f.rq.get(),t.direction,(0,l.j)(t.origin,a)/(0,l.l)(t.direction))),o},normal:_,projectPoint:I,projectPointLocal:E,rotate:function(e,t,o,a){return e!==a&&w(e,a),(0,n.$0)(q,t,o),(0,l.t)(a.basis1,e.basis1,q),(0,l.t)(a.basis2,e.basis2,q),T(a),a},setAltitudeAt:function(e,t,o,a){const i=A(e,t),r=(0,l.g)(B,_(e),o-i);return(0,l.f)(a,t,r),a},setExtent:function(e,t,o){return y(t,o),S(o,A(e,e.origin),o),o},transform:function(e,t,o){return e!==o&&w(e,o),(0,n.B8)(U,t),(0,n.mg)(U,U),(0,l.t)(o.basis1,e.basis1,U),(0,l.t)(o.basis2,e.basis2,U),(0,l.t)((0,h.Qj)(o.plane),(0,h.Qj)(e.plane),U),(0,l.t)(o.origin,e.origin,t),(0,h.mP)(o.plane,o.plane,o.origin),o},up:R,updateUnboundedPlane:T,wrap:function(e,t,o){const a=W.get();return a.origin=e,a.basis1=t,a.basis2=o,a.plane=(0,h.LV)(0,0,0,0),T(a),a}},Symbol.toStringTag,{value:"Module"}))},26163:(e,t,o)=>{o.d(t,{M:()=>i});var a=o(72196);function i(e){e.vertex.code.add(a.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},24682:(e,t,o)=>{o.d(t,{B:()=>b});var a=o(25423),i=o(78607),r=o(86128),n=o(24121),s=o(58359),l=o(55274),c=o(10470),d=o(63592),u=o(81598),m=o(72196),h=o(6561),v=o(20778),p=o(50645),f=o(76698),g=o(22005);g.Y;const x=(0,i.vt)();function b(e,t){const{hasModelTransformation:o,instancedDoublePrecision:i,instanced:s,output:g,hasVertexTangents:b}=t;o&&(e.vertex.uniforms.add(new v.X("model",(e=>e.modelTransformation??r.zK))),e.vertex.uniforms.add(new h.k("normalLocalOriginFromModel",(e=>((0,a.Ge)(x,e.modelTransformation??r.zK),x))))),s&&i&&(e.attributes.add(p.r.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(p.r.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(p.r.INSTANCEMODEL,"mat3"),e.attributes.add(p.r.INSTANCEMODELNORMAL,"mat3"));const M=e.vertex;i&&(M.include(c.u,t),M.uniforms.add(new u.d("viewOriginHi",(e=>(0,f.Zo)((0,n.i)(w,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),w))),new u.d("viewOriginLo",(e=>(0,f.jA)((0,n.i)(w,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),w))))),M.code.add(m.H`
    vec3 getVertexInLocalOriginSpace() {
      return ${o?i?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":i?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${i?m.H`
          // Issue: (should be resolved now with invariant position) https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -instanceModelOriginHi, -instanceModelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),M.code.add(m.H`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${o?i?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":i?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),g===l.V.Normal&&((0,d.S7)(M),M.code.add(m.H`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${o?i?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":i?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),b&&M.code.add(m.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${o?i?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":i?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const w=(0,s.vt)()},53429:(e,t,o)=>{o.d(t,{K:()=>l});var a=o(66976),i=o(72196),r=o(3445),n=o(50645),s=o(29117);function l(e,t){t.hasSymbolColors?(e.include(a.A),e.attributes.add(n.r.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(i.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new r.c("colorMixMode",(e=>s.Um[e.colorMixMode]))),e.vertex.code.add(i.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},82089:(e,t,o)=>{o.d(t,{Mh:()=>u,Zo:()=>m,gy:()=>h});var a=o(73345),i=o(78607),r=o(28152),n=o(81283),s=o(16989),l=o(72196),c=o(8376),d=o(6561);function u(e,t){switch(t.normalType){case n.W.Attribute:case n.W.Compressed:e.include(n.Y,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new c.h("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new d.k("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))),e.vertex.code.add(l.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case n.W.ScreenDerivative:e.vertex.code.add(l.H`void forwardNormal() {}`);break;default:(0,a.Xb)(t.normalType);case n.W.COUNT:}}class m extends s.dO{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,i.vt)()}}class h extends s.EM{constructor(){super(...arguments),this.transformNormalGlobalFromModel=(0,i.vt)(),this.toMapSpace=(0,r.vt)()}}},23399:(e,t,o)=>{o.d(t,{E:()=>b});var a=o(40641),i=o(55274),r=o(1110),n=o(66012),s=o(81283),l=o(33045),c=o(26139),d=o(82089),u=o(56178),m=o(1361),h=o(34328),v=o(4139),p=o(63592),f=o(72196),g=o(79856),x=o(91013);function b(e,t){const{vertex:o,fragment:b,varyings:w}=e,{hasColorTexture:M,alphaDiscardMode:T}=t,S=M&&T!==x.sf.Opaque,{output:y,normalType:C,hasColorTextureTransform:N}=t;switch(y){case i.V.Depth:(0,p.NB)(o,t),e.include(n.d,t),b.include(r.HQ,t),e.include(c.U,t),S&&b.uniforms.add(new g.N("tex",(e=>e.texture))),o.main.add(f.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(v.S,t),b.main.add(f.H`
        discardBySlice(vpos);
        ${(0,f.If)(S,f.H`vec4 texColor = texture(tex, ${N?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}`);break;case i.V.Shadow:case i.V.ShadowHighlight:case i.V.ShadowExcludeHighlight:case i.V.ViewshedShadow:case i.V.ObjectAndLayerIdColor:(0,p.NB)(o,t),e.include(n.d,t),e.include(c.U,t),e.include(h.A,t),e.include(u.L,t),b.include(r.HQ,t),e.include(l.g,t),(0,a.xJ)(e),w.add("depth","float",{invariant:!0}),S&&b.uniforms.add(new g.N("tex",(e=>e.texture))),o.main.add(f.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(v.S,t),b.main.add(f.H`
        discardBySlice(vpos);
        ${(0,f.If)(S,f.H`vec4 texColor = texture(tex, ${N?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        ${y===i.V.ObjectAndLayerIdColor?f.H`outputObjectAndLayerIdColor();`:f.H`outputDepth(depth);`}`);break;case i.V.Normal:{(0,p.NB)(o,t),e.include(n.d,t),e.include(s.Y,t),e.include(d.Mh,t),e.include(c.U,t),e.include(h.A,t),S&&b.uniforms.add(new g.N("tex",(e=>e.texture))),C===s.W.ScreenDerivative&&w.add("vPositionView","vec3",{invariant:!0});const a=C===s.W.Attribute||C===s.W.Compressed;o.main.add(f.H`
        vpos = getVertexInLocalOriginSpace();
        ${a?f.H`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:f.H`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),b.include(r.HQ,t),e.include(v.S,t),b.main.add(f.H`
        discardBySlice(vpos);
        ${(0,f.If)(S,f.H`vec4 texColor = texture(tex, ${N?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}

        ${C===s.W.ScreenDerivative?f.H`vec3 normal = screenDerivativeNormal(vPositionView);`:f.H`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case i.V.Highlight:(0,p.NB)(o,t),e.include(n.d,t),e.include(c.U,t),e.include(h.A,t),S&&b.uniforms.add(new g.N("tex",(e=>e.texture))),o.main.add(f.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),b.include(r.HQ,t),e.include(v.S,t),e.include(m.Q,t),b.main.add(f.H`
        discardBySlice(vpos);
        ${(0,f.If)(S,f.H`vec4 texColor = texture(tex, ${N?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}},56178:(e,t,o)=>{o.d(t,{L:()=>r});var a=o(55274),i=o(72196);function r(e,t){switch(t.output){case a.V.Shadow:case a.V.ShadowHighlight:case a.V.ShadowExcludeHighlight:case a.V.ViewshedShadow:e.fragment.code.add(i.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth){
float fragDepth = _calculateFragDepth(_linearDepth);
gl_FragDepth = fragDepth;
}`)}}},76080:(e,t,o)=>{o.d(t,{W:()=>p});var a=o(78607),i=o(59646),r=o(26139),n=o(81783),s=o(46971),l=o(54473),c=o(72196),d=o(6561),u=o(52293),m=o(79856),h=o(50645),v=o(11809);function p(e,t){const o=e.fragment,{hasVertexTangents:p,doubleSidedMode:f,hasNormalTexture:g,textureCoordinateType:x,bindType:b,hasNormalTextureTransform:w}=t;p?(e.attributes.add(h.r.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),f===s.W.WindingOrder?o.code.add(c.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(c.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):o.code.add(c.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),g&&x!==r.I.None&&(e.include(n.r,t),o.uniforms.add(b===v.c.Pass?new m.N("normalTexture",(e=>e.textureNormal)):new u.o("normalTexture",(e=>e.textureNormal))),w&&(o.uniforms.add(new l.G("scale",(e=>e.scale??i.Un))),o.uniforms.add(new d.k("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??a.zK)))),o.code.add(c.H`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),w&&o.code.add(c.H`mat3 normalRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),o.code.add(c.H`return tangentSpace * rawNormal;
}`))}},52636:(e,t,o)=>{o.d(t,{W:()=>u});var a=o(24121),i=o(58359),r=o(2662),n=o(28152),s=o(39486),l=o(81598),c=o(45393),d=o(72196);function u(e,t){const o=e.fragment,i=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===i?(o.uniforms.add(new l.d("lightingAmbientSH0",(({lighting:e})=>(0,a.i)(m,e.sh.r[0],e.sh.g[0],e.sh.b[0])))),o.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===i?(o.uniforms.add(new c.I("lightingAmbientSH_R",(({lighting:e})=>(0,r.s)(h,e.sh.r[0],e.sh.r[1],e.sh.r[2],e.sh.r[3]))),new c.I("lightingAmbientSH_G",(({lighting:e})=>(0,r.s)(h,e.sh.g[0],e.sh.g[1],e.sh.g[2],e.sh.g[3]))),new c.I("lightingAmbientSH_B",(({lighting:e})=>(0,r.s)(h,e.sh.b[0],e.sh.b[1],e.sh.b[2],e.sh.b[3])))),o.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===i&&(o.uniforms.add(new l.d("lightingAmbientSH0",(({lighting:e})=>(0,a.i)(m,e.sh.r[0],e.sh.g[0],e.sh.b[0]))),new c.I("lightingAmbientSH_R1",(({lighting:e})=>(0,r.s)(h,e.sh.r[1],e.sh.r[2],e.sh.r[3],e.sh.r[4]))),new c.I("lightingAmbientSH_G1",(({lighting:e})=>(0,r.s)(h,e.sh.g[1],e.sh.g[2],e.sh.g[3],e.sh.g[4]))),new c.I("lightingAmbientSH_B1",(({lighting:e})=>(0,r.s)(h,e.sh.b[1],e.sh.b[2],e.sh.b[3],e.sh.b[4]))),new c.I("lightingAmbientSH_R2",(({lighting:e})=>(0,r.s)(h,e.sh.r[5],e.sh.r[6],e.sh.r[7],e.sh.r[8]))),new c.I("lightingAmbientSH_G2",(({lighting:e})=>(0,r.s)(h,e.sh.g[5],e.sh.g[6],e.sh.g[7],e.sh.g[8]))),new c.I("lightingAmbientSH_B2",(({lighting:e})=>(0,r.s)(h,e.sh.b[5],e.sh.b[6],e.sh.b[7],e.sh.b[8])))),o.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==s.A9.Normal&&t.pbrMode!==s.A9.Schematic||o.code.add(d.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const m=(0,i.vt)(),h=(0,n.vt)()},3325:(e,t,o)=>{o.d(t,{n:()=>V});var a=o(72196),i=o(96390),r=o(66866),n=o(92504),s=o(6267),l=o(85251),c=o(60882),d=o(21564),u=(o(39831),o(539),o(9272),o(63863)),m=o(60704),h=o(11041),v=o(43196),p=o(79320),f=o(23606),g=o(47705),x=o(28347),b=o(45789),w=o(2449);class M extends x.w{constructor(e,t){super(e,t,new g.$(b.S,(()=>o.e(13513).then(o.bind(o,13513)))))}initializePipeline(){return(0,w.Ey)({colorWrite:w.kn})}}var T=o(59646),S=o(22005);class y extends S.Y{constructor(){super(...arguments),this.projScale=1}}class C extends y{constructor(){super(...arguments),this.intensity=1}}class N extends S.Y{}class O extends N{constructor(){super(...arguments),this.blurSize=(0,T.vt)()}}var I=o(51522);class E extends x.w{constructor(e,t){super(e,t,new g.$(I.S,(()=>o.e(30350).then(o.bind(o,30350)))))}initializePipeline(){return(0,w.Ey)({colorWrite:w.kn})}}var z=o(91013),H=o(41746),A=o(8595),_=o(45758);const L=2;let P=class extends v.A{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=h.OG.SSAO,this.isEnabled=()=>!1,this._enableTime=(0,c.l5)(0),this._passParameters=new C,this._drawParameters=new O}initialize(){const e=Uint8Array.from(atob("eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM"),(e=>e.charCodeAt(0))),t=new _.R;t.wrapMode=H.pF.CLAMP_TO_EDGE,t.pixelFormat=H.Ab.RGB,t.wrapMode=H.pF.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new A.g(this.renderingContext,t,e),this.techniques.precompile(E),this.techniques.precompile(M),this.addHandles((0,l.wB)((()=>this.isEnabled()),(()=>this._enableTime=(0,c.l5)(0))))}destroy(){this._passParameters.noiseTexture=(0,s.WD)(this._passParameters.noiseTexture)}render(e){const t=e.find((({name:e})=>"normals"===e)),o=t?.getTexture(),a=t?.getTexture(H.nI);if(!o||!a)return;const i=this.techniques.get(E),r=this.techniques.get(M);if(!i.compiled||!r.compiled)return this._enableTime=(0,c.l5)(performance.now()),void this.requestRender(z.C7.UPDATE);0===this._enableTime&&(this._enableTime=(0,c.l5)(performance.now()));const s=this.renderingContext,l=this.view.qualitySettings.fadeDuration,d=this.bindParameters,u=d.camera,v=u.relativeElevation,g=(0,n.qE)((f.b-v)/(f.b-f.O),0,1),x=l>0?Math.min(l,performance.now()-this._enableTime)/l:1,b=x*g;this._passParameters.normalTexture=o,this._passParameters.depthTexture=a,this._passParameters.projScale=1/u.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*G/(0,I.g)(u)**6*b;const w=u.fullViewport[2],T=u.fullViewport[3],S=this.fboCache.acquire(w,T,"ssao input",p.NV.RG8UNORM);s.bindFramebuffer(S.fbo),s.setViewport(0,0,w,T),s.bindTechnique(i,d,this._passParameters,this._drawParameters),s.screen.draw();const y=Math.round(w/L),C=Math.round(T/L),N=this.fboCache.acquire(y,C,"ssao blur",p.NV.R8UNORM);s.bindFramebuffer(N.fbo),this._drawParameters.colorTexture=S.getTexture(),(0,m.hZ)(this._drawParameters.blurSize,0,L/T),s.bindTechnique(r,d,this._passParameters,this._drawParameters),s.setViewport(0,0,y,C),s.screen.draw(),S.release();const O=this.fboCache.acquire(y,C,h.OG.SSAO,p.NV.R8UNORM);return s.bindFramebuffer(O.fbo),s.setViewport(0,0,w,T),s.setClearColor(1,1,1,0),s.clear(H.NV.COLOR),this._drawParameters.colorTexture=N.getTexture(),(0,m.hZ)(this._drawParameters.blurSize,L/w,0),s.bindTechnique(r,d,this._passParameters,this._drawParameters),s.setViewport(0,0,y,C),s.screen.draw(),s.setViewport4fv(u.fullViewport),N.release(),x<1&&this.requestRender(z.C7.UPDATE),O}};(0,r._)([(0,d.MZ)()],P.prototype,"consumes",void 0),(0,r._)([(0,d.MZ)()],P.prototype,"produces",void 0),(0,r._)([(0,d.MZ)({constructOnly:!0})],P.prototype,"isEnabled",void 0),P=(0,r._)([(0,u.$)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],P);const G=.5;function V(e,t){t.receiveAmbientOcclusion?(e.uniforms.add(new i.x("ssaoTex",(e=>e.ssao?.getTexture()))),e.constants.add("blurSizePixelsInverse","float",1/L),e.code.add(a.H`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):e.code.add(a.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},93929:(e,t,o)=>{o.d(t,{kA:()=>x,a8:()=>f,eU:()=>g});var a=o(31415),i=(o(39831),o(52636)),r=o(3325),n=o(696),s=o(17666),l=o(39486),c=o(88960),d=o(10561),u=o(17983),m=o(72196),h=o(9409);function v(e){e.code.add(m.H`float mapChannel(float x, vec2 p) {
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),e.code.add(m.H`vec3 blackLevelSoftCompression(vec3 color, float averageAmbientRadiance) {
vec2 p = vec2(0.02, 0.0075) * averageAmbientRadiance;
return vec3(mapChannel(color.x, p), mapChannel(color.y, p), mapChannel(color.z, p));
}`)}var p=o(85856);function f(e){e.constants.add("ambientBoostFactor","float",h.uH)}function g(e){e.uniforms.add(new u.U("lightingGlobalFactor",(e=>e.lighting.globalFactor)))}function x(e,t){const o=e.fragment,{pbrMode:h,spherical:x,hasColorTexture:b}=t;o.include(r.n,t),h!==l.A9.Disabled&&o.include(s.c,t),e.include(i.W,t),o.include(c.p),o.include(p.b,t);const w=!(h===l.A9.Schematic&&!b);switch(w&&o.include(v),o.code.add(m.H`
    const float GAMMA_SRGB = ${m.H.float(a.Tf)};
    const float INV_GAMMA_SRGB = 0.4761904;
    ${(0,m.If)(h!==l.A9.Disabled,"const float GROUND_REFLECTANCE = 0.2;")}
  `),f(o),g(o),(0,n.Gc)(o),o.code.add(m.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${x?m.H`normalize(vPosWorld)`:m.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,n.O4)(o),o.code.add(m.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),h){case l.A9.Disabled:case l.A9.WaterOnIntegratedMesh:case l.A9.Water:e.include(n.Vt),o.code.add(m.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case l.A9.Normal:case l.A9.Schematic:o.code.add(m.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight,
vec3 viewDir, vec3 groundNormal, vec3 mrr, vec4 _emission,
float additionalAmbientIrradiance) {
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotNG = clamp(dot(normal, groundNormal), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, groundNormal), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),o.code.add(m.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?o.uniforms.add(new d.o("hasFillLights",(e=>e.enableFillLights))):o.constants.add("hasFillLights","bool",!1),o.code.add(m.H`vec3 ambientDir = vec3(5.0 * groundNormal[1] - groundNormal[0] * groundNormal[2], - 5.0 * groundNormal[0] - groundNormal[2] * groundNormal[1], groundNormal[1] * groundNormal[1] + groundNormal[0] * groundNormal[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),o.uniforms.add(new u.U("lightingSpecularStrength",(e=>e.lighting.mainLight.specularStrength)),new u.U("lightingEnvironmentStrength",(e=>e.lighting.mainLight.environmentStrength))).code.add(m.H`vec3 horizonRingDir = inputs.RdotNG * groundNormal - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE);`),o.code.add(m.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission.rgb == vec3(0.0) ? _emission.rgb : tonemapACES(pow(_emission.rgb, vec3(GAMMA_SRGB)));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${w?m.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:m.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case l.A9.Simplified:case l.A9.TerrainWithWater:(0,n.Gc)(o),(0,n.O4)(o),o.code.add(m.H`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);default:case l.A9.COUNT:}}},46971:(e,t,o)=>{o.d(t,{W:()=>a,r:()=>n});var a,i=o(73345),r=o(72196);function n(e,t){const o=e.fragment;switch(o.code.add(r.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case a.None:o.code.add(r.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case a.View:o.code.add(r.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case a.WindingOrder:o.code.add(r.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,i.Xb)(t.doubleSidedMode);case a.COUNT:}}!function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"}(a||(a={}))},53402:(e,t,o)=>{o.d(t,{Bz:()=>g,G:()=>f});o(58359);var a=o(45393),i=o(72196),r=o(65083),n=o(11809),s=o(99120);class l extends s.n{constructor(e,t,o){super(e,"mat4",n.c.Draw,((o,a,i,r)=>o.setUniformMatrix4fv(e,t(a,i,r))),o)}}class c extends s.n{constructor(e,t,o){super(e,"mat4",n.c.Pass,((o,a,i)=>o.setUniformMatrix4fv(e,t(a,i))),o)}}var d=o(22005);d.Y;function u(e){e.fragment.uniforms.add(new c("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),h(e)}function m(e){e.fragment.uniforms.add(new l("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),h(e)}function h(e){const{fragment:t}=e;t.uniforms.add(new a.I("cascadeDistances",(e=>e.shadowMap.cascadeDistances)),new r.W("numCascades",(e=>e.shadowMap.numCascades))),t.code.add(i.H`const vec3 invalidShadowmapUVZ = vec3(0.0, 0.0, -1.0);
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
vec3 calculateUVZShadow(in vec3 _worldPos, in float _linearDepth, in ivec2 shadowMapSize) {
int i = _linearDepth < cascadeDistances[1] ? 0 : _linearDepth < cascadeDistances[2] ? 1 : _linearDepth < cascadeDistances[3] ? 2 : 3;
if (i >= numCascades) {
return invalidShadowmapUVZ;
}
mat4 shadowMatrix = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
vec3 lvpos = lightSpacePosition(_worldPos, shadowMatrix);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
return invalidShadowmapUVZ;
}
vec2 uvShadow = cascadeCoordinates(i, shadowMapSize, lvpos);
return vec3(uvShadow, lvpos.z);
}`)}function v(e){e.fragment.code.add(i.H`float readShadowMapUVZ(vec3 uvzShadow, sampler2DShadow _shadowMap) {
return texture(_shadowMap, uvzShadow);
}`)}class p extends s.n{constructor(e,t){super(e,"sampler2DShadow",n.c.Bind,((o,a)=>o.bindTexture(e,t(a))))}}d.Y;function f(e,t){t.receiveShadows&&(e.include(u),x(e))}function g(e,t){t.receiveShadows&&(e.include(m),x(e))}function x(e){e.include(v);const{fragment:t}=e;t.uniforms.add(new p("shadowMap",(e=>e.shadowMap.depthTexture))),t.code.add(i.H`float readShadowMap(const in vec3 _worldPos, float _linearDepth) {
vec3 uvzShadow = calculateUVZShadow(_worldPos, _linearDepth, textureSize(shadowMap,0));
if (uvzShadow.z < 0.0) {
return 0.0;
}
return readShadowMapUVZ(uvzShadow, shadowMap);
}`)}},25541:(e,t,o)=>{o.d(t,{MU:()=>c,O1:()=>d,QM:()=>u,Sx:()=>l,q2:()=>s});var a=o(78607),i=o(26139),r=o(72196),n=o(6561);function s(e,t){t.hasColorTextureTransform?(e.varyings.add("colorUV","vec2"),e.vertex.uniforms.add(new n.k("colorTextureTransformMatrix",(e=>e.colorTextureTransformMatrix??a.zK))).code.add(r.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(r.H`void forwardColorUV(){}`)}function l(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==i.I.None?(e.varyings.add("normalUV","vec2"),e.vertex.uniforms.add(new n.k("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??a.zK))).code.add(r.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(r.H`void forwardNormalUV(){}`)}function c(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==i.I.None?(e.varyings.add("emissiveUV","vec2"),e.vertex.uniforms.add(new n.k("emissiveTextureTransformMatrix",(e=>e.emissiveTextureTransformMatrix??a.zK))).code.add(r.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(r.H`void forwardEmissiveUV(){}`)}function d(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==i.I.None?(e.varyings.add("occlusionUV","vec2"),e.vertex.uniforms.add(new n.k("occlusionTextureTransformMatrix",(e=>e.occlusionTextureTransformMatrix??a.zK))).code.add(r.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(r.H`void forwardOcclusionUV(){}`)}function u(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==i.I.None?(e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.uniforms.add(new n.k("metallicRoughnessTextureTransformMatrix",(e=>e.metallicRoughnessTextureTransformMatrix??a.zK))).code.add(r.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(r.H`void forwardMetallicRoughnessUV(){}`)}},4139:(e,t,o)=>{o.d(t,{S:()=>s});o(31824);var a=o(35449),i=o(72196),r=o(91013),n=o(63199);function s(e,t){l(e,t,new a.m("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function l(e,t,o){const a=e.fragment,s=t.alphaDiscardMode,l=s===r.sf.Blend;s!==r.sf.Mask&&s!==r.sf.MaskBlend||a.uniforms.add(o),a.code.add(i.H`
    void discardOrAdjustAlpha(inout vec4 color) {
      ${s===r.sf.Opaque?"color.a = 1.0;":`if (color.a < ${l?i.H.float(n.Q):"textureAlphaCutoff"}) {\n              discard;\n             } ${(0,i.If)(s===r.sf.Mask,"else { color.a = 1.0; }")}`}
    }
  `)}},60915:(e,t,o)=>{o.d(t,{N:()=>n});var a=o(55623),i=o(89002),r=o(72196);function n(e){e.include(i.a),e.code.add(r.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${r.H.int(a.k5.Multiply)}) {
        return allMixed;
      }
      if (mode == ${r.H.int(a.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${r.H.int(a.k5.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${r.H.int(a.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${r.H.int(a.k5.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},77581:(e,t,o)=>{o.d(t,{b:()=>i});var a=o(72196);function i(e,t){t.snowCover&&(e.code.add(a.H`float getSnow(vec3 normal, vec3 normalGround) {
return smoothstep(0.5, 0.55, dot(normal, normalGround));
}`),e.code.add(a.H`vec3 applySnowToMRR(vec3 mrr, float snow) {
return mix(mrr, vec3(0.0, 1.0, 0.04), snow);
}
vec4 snowCoverForEmissions(vec4 emission, float snow) {
return mix(emission, vec4(0.0), snow);
}`))}},54482:(e,t,o)=>{o.d(t,{$U:()=>L,fs:()=>G,ty:()=>V});var a=o(24121),i=o(58359),r=o(59427),n=o(10714),s=o(11110),l=o(55274),c=o(81283),d=o(15420),u=o(46971),m=o(39486),h=o(36340),v=o(91013),p=o(89140),f=o(45722),g=o(1931),x=o(6833),b=o(38323),w=o(50645),M=o(689),T=o(25146),S=o(29117),y=o(73418),C=o(66866),N=o(26139),O=o(77941),I=o(9319);class E extends I.E{constructor(e){super(),this.spherical=e,this.alphaDiscardMode=v.sf.Opaque,this.doubleSidedMode=u.W.None,this.pbrMode=m.A9.Disabled,this.cullFace=v.s2.None,this.normalType=c.W.Attribute,this.customDepthTest=v.it.Less,this.emissionSource=d.ZX.None,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.instancedDoublePrecision=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasBloom=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.hasVvInstancing=!0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0,this.draped=!1}get textureCoordinateType(){return this.hasColorTexture||this.hasMetallicRoughnessTexture||this.emissionSource===d.ZX.Texture||this.hasOcclusionTexture||this.hasNormalTexture?N.I.Default:N.I.None}get objectAndLayerIdColorInstanced(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}(0,C._)([(0,O.W)({count:v.sf.COUNT})],E.prototype,"alphaDiscardMode",void 0),(0,C._)([(0,O.W)({count:u.W.COUNT})],E.prototype,"doubleSidedMode",void 0),(0,C._)([(0,O.W)({count:m.A9.COUNT})],E.prototype,"pbrMode",void 0),(0,C._)([(0,O.W)({count:v.s2.COUNT})],E.prototype,"cullFace",void 0),(0,C._)([(0,O.W)({count:c.W.COUNT})],E.prototype,"normalType",void 0),(0,C._)([(0,O.W)({count:v.it.COUNT})],E.prototype,"customDepthTest",void 0),(0,C._)([(0,O.W)({count:d.ZX.COUNT})],E.prototype,"emissionSource",void 0),(0,C._)([(0,O.W)()],E.prototype,"hasVertexColors",void 0),(0,C._)([(0,O.W)()],E.prototype,"hasSymbolColors",void 0),(0,C._)([(0,O.W)()],E.prototype,"hasVerticalOffset",void 0),(0,C._)([(0,O.W)()],E.prototype,"hasColorTexture",void 0),(0,C._)([(0,O.W)()],E.prototype,"hasMetallicRoughnessTexture",void 0),(0,C._)([(0,O.W)()],E.prototype,"hasOcclusionTexture",void 0),(0,C._)([(0,O.W)()],E.prototype,"hasNormalTexture",void 0),(0,C._)([(0,O.W)()],E.prototype,"hasScreenSizePerspective",void 0),(0,C._)([(0,O.W)()],E.prototype,"hasVertexTangents",void 0),(0,C._)([(0,O.W)()],E.prototype,"hasOccludees",void 0),(0,C._)([(0,O.W)()],E.prototype,"instancedDoublePrecision",void 0),(0,C._)([(0,O.W)()],E.prototype,"hasModelTransformation",void 0),(0,C._)([(0,O.W)()],E.prototype,"offsetBackfaces",void 0),(0,C._)([(0,O.W)()],E.prototype,"vvSize",void 0),(0,C._)([(0,O.W)()],E.prototype,"vvColor",void 0),(0,C._)([(0,O.W)()],E.prototype,"receiveShadows",void 0),(0,C._)([(0,O.W)()],E.prototype,"receiveAmbientOcclusion",void 0),(0,C._)([(0,O.W)()],E.prototype,"textureAlphaPremultiplied",void 0),(0,C._)([(0,O.W)()],E.prototype,"instanced",void 0),(0,C._)([(0,O.W)()],E.prototype,"instancedColor",void 0),(0,C._)([(0,O.W)()],E.prototype,"writeDepth",void 0),(0,C._)([(0,O.W)()],E.prototype,"transparent",void 0),(0,C._)([(0,O.W)()],E.prototype,"enableOffset",void 0),(0,C._)([(0,O.W)()],E.prototype,"terrainDepthTest",void 0),(0,C._)([(0,O.W)()],E.prototype,"cullAboveTerrain",void 0),(0,C._)([(0,O.W)()],E.prototype,"snowCover",void 0),(0,C._)([(0,O.W)()],E.prototype,"hasBloom",void 0),(0,C._)([(0,O.W)()],E.prototype,"hasColorTextureTransform",void 0),(0,C._)([(0,O.W)()],E.prototype,"hasEmissionTextureTransform",void 0),(0,C._)([(0,O.W)()],E.prototype,"hasNormalTextureTransform",void 0),(0,C._)([(0,O.W)()],E.prototype,"hasOcclusionTextureTransform",void 0),(0,C._)([(0,O.W)()],E.prototype,"hasMetallicRoughnessTextureTransform",void 0);var z=o(47705),H=o(3458);class A extends y.R5{constructor(e,t){super(e,t,new z.$(H.R,(()=>o.e(91198).then(o.bind(o,91198))))),this.type="RealisticTreeTechnique"}}var _=o(63199);class L extends f.im{constructor(e,t){super(e,G),this.materialType="default",this.supportsEdges=!0,this.intersectDraped=void 0,this.produces=new Map([[b.N.OPAQUE_MATERIAL,e=>((0,l.iq)(e)||(0,l.PJ)(e))&&!this.transparent],[b.N.TRANSPARENT_MATERIAL,e=>((0,l.iq)(e)||(0,l.PJ)(e))&&this.transparent&&this.parameters.writeDepth],[b.N.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>((0,l.XY)(e)||(0,l.PJ)(e))&&this.transparent&&!this.parameters.writeDepth]]),this._vertexBufferLayout=function(e){const t=(0,s.BP)().vec3f(w.r.POSITION);return e.normalType===c.W.Compressed?t.vec2i16(w.r.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(w.r.NORMAL),e.hasVertexTangents&&t.vec4f(w.r.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f16(w.r.UV0),e.hasVertexColors&&t.vec4u8(w.r.COLOR),e.hasSymbolColors&&t.vec4u8(w.r.SYMBOLCOLOR),(0,h.E)()&&t.vec4u8(w.r.OLIDCOLOR),t}(this.parameters),this._configuration=new E(t.spherical)}isVisibleForOutput(e){return e!==l.V.Shadow&&e!==l.V.ShadowExcludeHighlight&&e!==l.V.ShadowHighlight||this.parameters.castShadows}get visible(){const{layerOpacity:e,colorMixMode:t,opacity:o,externalColor:a}=this.parameters;return e*("replace"===t?1:o)*("ignore"===t?1:a[3])>=_.Q}get _hasEmissiveBase(){return!!this.parameters.emissiveTextureId||!(0,a.q)(this.parameters.emissiveBaseColor,i.uY)}get hasEmissions(){return this.parameters.emissiveStrength>0&&(this.parameters.emissiveSource===r.YJ.Emissive&&this._hasEmissiveBase||this.parameters.emissiveSource===r.YJ.Color)}getConfiguration(e,t){const{parameters:o,_configuration:a}=this,{treeRendering:i,doubleSided:n,doubleSidedType:s}=o;return super.getConfiguration(e,t,this._configuration),a.hasNormalTexture=!i&&!!o.normalTextureId,a.hasColorTexture=!!o.textureId,a.hasVertexTangents=!i&&o.hasVertexTangents,a.instanced=o.isInstanced,a.instancedDoublePrecision=o.instancedDoublePrecision,a.vvSize=!!o.vvSize,a.hasVerticalOffset=null!=o.verticalOffset,a.hasScreenSizePerspective=null!=o.screenSizePerspective,a.hasSlicePlane=o.hasSlicePlane,a.alphaDiscardMode=o.textureAlphaMode,a.normalType=i?c.W.Attribute:o.normalType,a.transparent=this.transparent,a.writeDepth=o.writeDepth,a.customDepthTest=o.customDepthTest??v.it.Less,a.hasOccludees=t.hasOccludees,a.cullFace=o.hasSlicePlane?v.s2.None:o.cullFace,a.cullAboveTerrain=t.cullAboveTerrain,a.hasModelTransformation=!i&&null!=o.modelTransformation,a.hasVertexColors=o.hasVertexColors,a.hasSymbolColors=o.hasSymbolColors,a.doubleSidedMode=i?u.W.WindingOrder:n&&"normal"===s?u.W.View:n&&"winding-order"===s?u.W.WindingOrder:u.W.None,a.instancedColor=o.hasInstancedColor,(0,l.RN)(e)?(a.terrainDepthTest=t.terrainDepthTest,a.receiveShadows=o.receiveShadows,a.receiveAmbientOcclusion=o.receiveAmbientOcclusion&&null!=t.ssao):(a.terrainDepthTest=!1,a.receiveShadows=a.receiveAmbientOcclusion=!1),a.vvColor=!!o.vvColor,a.textureAlphaPremultiplied=!!o.textureAlphaPremultiplied,a.pbrMode=o.usePBR?o.isSchematic?m.A9.Schematic:m.A9.Normal:m.A9.Disabled,a.hasMetallicRoughnessTexture=!i&&!!o.metallicRoughnessTextureId,a.emissionSource=i?d.ZX.None:null!=o.emissiveTextureId&&o.emissiveSource===r.YJ.Emissive?d.ZX.Texture:o.usePBR?o.emissiveSource===r.YJ.Emissive?d.ZX.EmissiveColor:d.ZX.SymbolColor:d.ZX.None,a.hasOcclusionTexture=!i&&!!o.occlusionTextureId,a.offsetBackfaces=!(!this.transparent||!o.offsetTransparentBackfaces),a.oitPass=t.oitPass,a.enableOffset=t.camera.relativeElevation<g.xt,a.snowCover=t.snowCover,a.hasBloom=(0,l.LG)(e),a.hasColorTextureTransform=!!o.colorTextureTransformMatrix,a.hasNormalTextureTransform=!!o.normalTextureTransformMatrix,a.hasEmissionTextureTransform=!!o.emissiveTextureTransformMatrix,a.hasOcclusionTextureTransform=!!o.occlusionTextureTransformMatrix,a.hasMetallicRoughnessTextureTransform=!!o.metallicRoughnessTextureTransformMatrix,a}intersect(e,t,o,i,r,s){if(null!=this.parameters.verticalOffset){const e=o.camera;(0,a.i)(F,t[12],t[13],t[14]);let s=null;switch(o.viewingMode){case n.RT.Global:s=(0,a.n)(B,F);break;case n.RT.Local:s=(0,a.c)(B,D)}let l=0;const c=(0,a.d)(U,F,e.eye),d=(0,a.l)(c),u=(0,a.g)(c,c,1/d);let m=null;this.parameters.screenSizePerspective&&(m=(0,a.e)(s,u)),l+=(0,S.kE)(e,d,this.parameters.verticalOffset,m??0,this.parameters.screenSizePerspective),(0,a.g)(s,s,l),(0,a.o)(W,s,o.transform.inverseRotation),i=(0,a.d)(R,i,W),r=(0,a.d)(j,r,W)}(0,x.Uy)(e,o,i,r,(0,M.ou)(o.verticalOffset),s)}createGLMaterial(e){return new P(e)}createBufferWriter(){return new T.Z(this._vertexBufferLayout)}get transparent(){return V(this.parameters)}}class P extends p.m8{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){this._material.setParameters({receiveShadows:e.shadowMap.enabled});const t=this._material.parameters;this.updateTexture(t.textureId);const o=e.camera.viewInverseTransposeMatrix;return(0,a.i)(t.origin,o[3],o[7],o[11]),this._material.setParameters(this.textureBindParameters),this.getTechnique(t.treeRendering?A:y.R5,e)}}class G extends y.uD{constructor(){super(...arguments),this.treeRendering=!1,this.hasVertexTangents=!1}}function V(e){const{drivenOpacity:t,opacity:o,externalColor:[a,i,r,n],layerOpacity:s,texture:l,textureId:c,textureAlphaMode:d,colorMixMode:u}=e;return t||o<1&&"replace"!==u||n<1&&"ignore"!==u||s<1||(null!=l||null!=c)&&d!==v.sf.Opaque&&d!==v.sf.Mask&&"replace"!==u}const R=(0,i.vt)(),j=(0,i.vt)(),D=(0,i.fA)(0,0,1),B=(0,i.vt)(),W=(0,i.vt)(),F=(0,i.vt)(),U=(0,i.vt)()},73418:(e,t,o)=>{o.d(t,{R5:()=>T,V:()=>M,uD:()=>w});var a=o(58359),i=o(28152),r=o(59427),n=o(55274),s=o(81283),l=o(82089),c=o(47705),d=o(28347),u=o(91013),m=o(45722),h=o(1931),v=o(98546),p=o(12221),f=o(68237),g=o(41746),x=o(2449),b=o(63199);class w extends l.Zo{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=p.mb,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=u.s2.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveStrength=0,this.emissiveSource=r.YJ.Color,this.emissiveBaseColor=a.uY,this.instancedDoublePrecision=!1,this.normalType=s.W.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=(0,a.CN)(.2,.2,.2),this.diffuse=(0,a.CN)(.8,.8,.8),this.externalColor=(0,i.fA)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,a.vt)(),this.hasSlicePlane=!1,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.drivenOpacity=!1,this.writeDepth=!0,this.customDepthTest=u.it.Less,this.textureAlphaMode=u.sf.Blend,this.textureAlphaCutoff=b.Q,this.textureAlphaPremultiplied=!1,this.renderOccluded=m.m$.Occlude,this.isDecoration=!1}}class M extends l.gy{constructor(){super(...arguments),this.origin=(0,a.vt)(),this.slicePlaneLocalOrigin=this.origin}}class T extends d.w{constructor(e,t,a=new c.$(f.D,(()=>o.e(71318).then(o.bind(o,71318))))){super(e,t,a),this.type="DefaultMaterialTechnique"}_makePipeline(e,t){const{oitPass:o,output:a,transparent:i,cullFace:r,customDepthTest:s,hasOccludees:l}=e;return(0,x.Ey)({blending:(0,n.RN)(a)&&i?(0,h.Yf)(o):null,culling:y(e)?(0,x.Xt)(r):null,depthTest:{func:(0,h.K_)(o,S(s))},depthWrite:(0,h.z5)(e),drawBuffers:(0,d.L)(a,(0,h.m6)(o,a)),colorWrite:x.kn,stencilWrite:l?v.v0:null,stencilTest:l?t?v.a9:v.qh:null,polygonOffset:(0,h.mE)(e)})}initializePipeline(e){return this._occludeePipelineState=this._makePipeline(e,!0),this._makePipeline(e,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}function S(e){return e===u.it.Lequal?g.MT.LEQUAL:g.MT.LESS}function y(e){return e.cullFace!==u.s2.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}}}]);