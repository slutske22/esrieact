"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4218],{90618:(e,t,r)=>{r.d(t,{D:()=>V,b:()=>z});var i=r(40641),o=r(26163),n=r(55274),a=r(1110),s=r(66012),l=r(24682),c=r(81283),d=r(99915),u=r(67691),h=r(26139),m=r(39739),f=r(82089),p=r(80333),v=r(16045),g=r(76080),_=r(26011),x=r(21549),T=r(696),b=r(80600),A=r(46971),E=r(17666),y=r(39486),S=r(64062),w=r(25541),M=r(71389),C=r(33448),O=r(29724),I=r(66676),R=r(63592),N=r(60840),L=r(1411),P=r(35449),H=r(99152),D=r(4274),F=r(79856),B=r(81868),G=r(50645);function z(e){const t=new D.N5,{vertex:r,fragment:z,varyings:V}=t;if((0,R.NB)(r,e),t.include(d.I),V.add("vpos","vec3"),t.include(M.A,e),t.include(l.BK,e),t.include(p.G,e),e.hasColorTextureTransform&&t.include(w.q2),e.output===n.V.Color||e.output===n.V.Alpha){e.hasNormalTextureTransform&&t.include(w.Sx),e.hasEmissionTextureTransform&&t.include(w.MU),e.hasOcclusionTextureTransform&&t.include(w.O1),e.hasMetallicRoughnessTextureTransform&&t.include(w.QM),(0,R.yu)(r,e),t.include(c.Y,e),t.include(s.d,e);const n=e.normalType===c.W.Attribute||e.normalType===c.W.Compressed;n&&e.offsetBackfaces&&t.include(o.M),t.include(g.W,e),t.include(f.Mh,e),e.instancedColor&&t.attributes.add(G.r.INSTANCECOLOR,"vec4"),V.add("vPositionLocal","vec3"),t.include(h.U,e),t.include(i.oD,e),t.include(u.K,e),t.include(m.c,e),r.uniforms.add(new L.E("externalColor",(e=>e.externalColor))),V.add("vcolorExt","vec4"),e.multipassEnabled&&V.add("depth","float"),r.code.add(H.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${H.H.float(C.y)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${n?H.H`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${n&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${e.hasColorTextureTransform?H.H`forwardColorUV();`:""}
        ${e.hasNormalTextureTransform?H.H`forwardNormalUV();`:""}
        ${e.hasEmissionTextureTransform?H.H`forwardEmissiveUV();`:""}
        ${e.hasOcclusionTextureTransform?H.H`forwardOcclusionUV();`:""}
        ${e.hasMetallicRoughnessTextureTransform?H.H`forwardMetallicRoughnessUV();`:""}
      }
    `)}switch(e.output){case n.V.Alpha:t.include(a.HQ,e),t.include(O.S,e),t.include(b.Q,e),z.uniforms.add(new P.m("opacity",(e=>e.opacity)),new P.m("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&z.uniforms.add(new F.N("tex",(e=>e.texture))),z.include(I.N),z.code.add(H.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?H.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?H.H`colorUV`:H.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:H.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?H.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:H.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);break;case n.V.Color:t.include(a.HQ,e),t.include(x.kA,e),t.include(_.n,e),t.include(O.S,e),t.include(e.instancedDoublePrecision?S.G:S.Bz,e),t.include(b.Q,e),(0,R.yu)(z,e),z.uniforms.add(r.uniforms.get("localOrigin"),new N.t("ambient",(e=>e.ambient)),new N.t("diffuse",(e=>e.diffuse)),new P.m("opacity",(e=>e.opacity)),new P.m("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&z.uniforms.add(new F.N("tex",(e=>e.texture))),t.include(y._Z,e),t.include(E.c,e),z.include(I.N),t.include(A.r,e),(0,x.a8)(z),(0,x.eU)(z),(0,T.O4)(z),z.code.add(H.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?H.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?H.H`colorUV`:H.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:H.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===c.W.ScreenDerivative?H.H`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:H.H`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===y.A9.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?H.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:H.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?H.H`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${e.hasNormalTextureTransform?H.H`normalUV`:"vuv0"});`:H.H`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?H.H`normalize(posWorld);`:H.H`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?H.H`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===y.A9.Normal||e.pbrMode===y.A9.Schematic?H.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?H.H`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:H.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===B.y.Color?H.H`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `)}return t.include(v.E,e),t}const V=Object.freeze(Object.defineProperty({__proto__:null,build:z},Symbol.toStringTag,{value:"Module"}))},3458:(e,t,r)=>{r.d(t,{R:()=>F,b:()=>D});var i=r(40641),o=r(26163),n=r(55274),a=r(1110),s=r(66012),l=r(24682),c=r(81283),d=r(99915),u=r(67691),h=r(26139),m=r(39739),f=r(80333),p=r(16045),v=r(26011),g=r(21549),_=r(696),x=r(80600),T=r(17666),b=r(39486),A=r(64062),E=r(71389),y=r(33448),S=r(29724),w=r(66676),M=r(63592),C=r(60840),O=r(1411),I=r(35449),R=r(99152),N=r(4274),L=r(79856),P=r(81868),H=r(50645);function D(e){const t=new N.N5,{vertex:r,fragment:D,varyings:F}=t;return(0,M.NB)(r,e),t.include(d.I),F.add("vpos","vec3"),t.include(E.A,e),t.include(l.BK,e),t.include(f.G,e),e.output!==n.V.Color&&e.output!==n.V.Alpha||((0,M.yu)(t.vertex,e),t.include(c.Y,e),t.include(s.d,e),e.offsetBackfaces&&t.include(o.M),e.instancedColor&&t.attributes.add(H.r.INSTANCECOLOR,"vec4"),F.add("vNormalWorld","vec3"),F.add("localvpos","vec3"),e.multipassEnabled&&F.add("depth","float"),t.include(h.U,e),t.include(i.oD,e),t.include(u.K,e),t.include(m.c,e),r.uniforms.add(new O.E("externalColor",(e=>e.externalColor))),F.add("vcolorExt","vec4"),r.code.add(R.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${R.H.float(y.y)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = getVertexInLocalOriginSpace();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.multipassEnabled?R.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===n.V.Alpha&&(t.include(a.HQ,e),t.include(S.S,e),t.include(x.Q,e),D.uniforms.add(new I.m("opacity",(e=>e.opacity)),new I.m("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&D.uniforms.add(new L.N("tex",(e=>e.texture))),D.include(w.N),D.code.add(R.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?R.H`terrainDepthTest(depth);`:""}
        ${e.hasColorTexture?R.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?R.H`colorUV`:R.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:R.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?R.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:R.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        fragColor = vec4(opacity_);
      }
    `)),e.output===n.V.Color&&(t.include(a.HQ,e),t.include(g.kA,e),t.include(v.n,e),t.include(S.S,e),t.include(e.instancedDoublePrecision?A.G:A.Bz,e),t.include(x.Q,e),(0,M.yu)(t.fragment,e),(0,_.Gc)(D),(0,g.a8)(D),(0,g.eU)(D),D.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new C.t("ambient",(e=>e.ambient)),new C.t("diffuse",(e=>e.diffuse)),new I.m("opacity",(e=>e.opacity)),new I.m("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&D.uniforms.add(new L.N("tex",(e=>e.texture))),t.include(b._Z,e),t.include(T.c,e),D.include(w.N),(0,_.O4)(D),D.code.add(R.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?R.H`terrainDepthTest(depth);`:""}
        ${e.hasColorTexture?R.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?R.H`colorUV`:R.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:R.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===b.A9.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?R.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:R.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?R.H`albedo = mix(albedo, vec3(1), 0.9);`:R.H``}
        ${R.H`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===b.A9.Normal||e.pbrMode===b.A9.Schematic?e.spherical?R.H`vec3 normalGround = normalize(vpos + localOrigin);`:R.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:R.H``}
        ${e.pbrMode===b.A9.Normal||e.pbrMode===b.A9.Schematic?R.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?R.H`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:R.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===P.y.Color?R.H`fragColor = premultiplyAlpha(fragColor);`:R.H``}
      }
    `)),t.include(p.E,e),t}const F=Object.freeze(Object.defineProperty({__proto__:null,build:D},Symbol.toStringTag,{value:"Module"}))},51522:(e,t,r)=>{r.d(t,{S:()=>g,b:()=>f,g:()=>p});var i=r(58680),o=r(78286),n=r(16961),a=r(67726),s=r(1062),l=r(54473),c=r(35449),d=r(99152),u=r(4274),h=r(79856);const m=16;function f(){const e=new u.N5,t=e.fragment;return e.include(n.c),t.include(a.D),e.include(s.Ir),t.uniforms.add(new c.m("radius",((e,t)=>p(t.camera)))),t.code.add(d.H`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),t.code.add(d.H`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add(new l.G("nearFar",((e,t)=>t.camera.nearFar)),new h.N("normalMap",(e=>e.normalTexture)),new h.N("depthMap",(e=>e.depthTexture)),new c.m("projScale",(e=>e.projScale)),new h.N("rnm",(e=>e.noiseTexture)),new l.G("rnmScale",((e,t)=>(0,i.s)(v,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height))),new c.m("intensity",(e=>e.intensity)),new l.G("screenSize",((e,t)=>(0,i.s)(v,t.camera.fullWidth,t.camera.fullHeight)))),e.outputs.add("fragOcclusion","float"),t.code.add(d.H`
    void main(void) {
      fillSphere();
      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth > nearFar.y || -currentPixelDepth < nearFar.x) {
        fragOcclusion = 0.0;
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w < 0.5;

      float sum = 0.0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${d.H.int(m)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          if (texture(normalMap, tcTap).w < 0.5) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${d.H.int(m)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

      fragOcclusion = A;
    }
  `),e}function p(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const v=(0,o.a)(),g=Object.freeze(Object.defineProperty({__proto__:null,build:f,getRadius:p},Symbol.toStringTag,{value:"Module"}))},45789:(e,t,r)=>{r.d(t,{S:()=>p,b:()=>f});var i=r(21839),o=r(16961),n=r(67726),a=r(96320),s=r(54473),l=r(35449),c=r(99152),d=r(4274),u=r(52293),h=r(79856);const m=4;function f(){const e=new d.N5,t=e.fragment;e.include(o.c);const r=(m+1)/2,f=1/(2*r*r);return t.include(n.D),t.uniforms.add(new h.N("depthMap",(e=>e.depthTexture)),new u.o("tex",(e=>e.colorTexture)),new a.t("blurSize",(e=>e.blurSize)),new l.m("projScale",((e,t)=>{const r=(0,i.o)(t.camera.eye,t.camera.center);return r>5e4?Math.max(0,e.projScale-(r-5e4)):e.projScale})),new s.G("nearFar",((e,t)=>t.camera.nearFar))),t.code.add(c.H`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${c.H.float(f)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.code.add(c.H`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${c.H.int(m)}; r <= ${c.H.int(m)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragBlur = b / w_total;
    }
  `),e}const p=Object.freeze(Object.defineProperty({__proto__:null,build:f},Symbol.toStringTag,{value:"Module"}))},24121:(e,t,r)=>{r.d(t,{a:()=>s,b:()=>a,c:()=>o,d:()=>d,e:()=>l,n:()=>u,s:()=>c,t:()=>n});var i=r(64521);function o(e,t,r){n(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function n(e,t,r,o=3,n=o){if(e.length/o!==Math.ceil(t.length/n))return i.J.error("source and destination buffers need to have the same number of elements"),e;const a=e.length/o,s=r[0],l=r[1],c=r[2],d=r[4],u=r[5],h=r[6],m=r[8],f=r[9],p=r[10],v=r[12],g=r[13],_=r[14];let x=0,T=0;for(let i=0;i<a;i++){const r=t[x],i=t[x+1],a=t[x+2];e[T]=s*r+d*i+m*a+v,e[T+1]=l*r+u*i+f*a+g,e[T+2]=c*r+h*i+p*a+_,x+=n,T+=o}return e}function a(e,t,r){s(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function s(e,t,r,o=3,n=o){if(e.length/o!==Math.ceil(t.length/n))return void i.J.error("source and destination buffers need to have the same number of elements");const a=e.length/o,s=r[0],l=r[1],c=r[2],d=r[3],u=r[4],h=r[5],m=r[6],f=r[7],p=r[8];let v=0,g=0;for(let i=0;i<a;i++){const r=t[v],i=t[v+1],a=t[v+2];e[g]=s*r+d*i+m*a,e[g+1]=l*r+u*i+f*a,e[g+2]=c*r+h*i+p*a,v+=n,g+=o}}function l(e,t,r){c(e.typedBuffer,t,r,e.typedBufferStride)}function c(e,t,r,i=3){const o=Math.min(e.length/i,t.count),n=t.typedBuffer,a=t.typedBufferStride;let s=0,l=0;for(let c=0;c<o;c++)e[l]=r*n[s],e[l+1]=r*n[s+1],e[l+2]=r*n[s+2],s+=a,l+=i}function d(e,t){u(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function u(e,t,r=3,i=r){const o=Math.min(e.length/r,t.length/i);let n=0,a=0;for(let s=0;s<o;s++){const o=t[n],s=t[n+1],l=t[n+2],c=o*o+s*s+l*l;if(c>0){const t=1/Math.sqrt(c);e[a]=t*o,e[a+1]=t*s,e[a+2]=t*l}n+=i,a+=r}}Object.freeze(Object.defineProperty({__proto__:null,normalize:u,normalizeView:d,scale:c,scaleView:l,shiftRight:function(e,t,r){const i=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;let l=0,c=0;for(let d=0;d<i;d++)o[c]=a[l]>>r,o[c+1]=a[l+1]>>r,o[c+2]=a[l+2]>>r,l+=s,c+=n},transformMat3:s,transformMat3View:a,transformMat4:n,transformMat4View:o},Symbol.toStringTag,{value:"Module"}))},80912:(e,t,r)=>{r.d(t,{O:()=>i});class i{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){return this._outer.get(e)?.get(t)}set(e,t,r){const i=this._outer.get(e);i?i.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,r)=>e(t,r)))}}},19382:(e,t,r)=>{function i(e){return e=e||globalThis.location.hostname,c.some((t=>null!=e?.match(t)))}function o(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(n)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(a)||null!=t.match(l)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}r.d(t,{EM:()=>o,b5:()=>i});const n=/^devext.arcgis.com$/,a=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,l=/^[\w-]*\.mapsqa.arcgis.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,n,a,/^jsapps.esri.com$/,s,l]},64521:(e,t,r)=>{r.d(t,{J:()=>i});const i=r(539).A.getLogger("esri.views.3d.support.buffer.math")},22759:(e,t,r)=>{r.d(t,{Cr:()=>c,_I:()=>d,vt:()=>l});var i=r(92504),o=r(92114),n=r(21839),a=r(22279),s=r(45573);function l(e){return e?{origin:(0,a.g)(e.origin),vector:(0,a.g)(e.vector)}:{origin:(0,a.c)(),vector:(0,a.c)()}}function c(e,t,r=l()){return(0,n.c)(r.origin,e),(0,n.f)(r.vector,t,e),r}function d(e,t,r){return function(e,t,r,o,a){const{vector:l,origin:c}=e,d=(0,n.f)(s.rq.get(),t,c),u=(0,n.j)(l,d)/(0,n.m)(l);return(0,n.i)(a,l,(0,i.qE)(u,r,o)),(0,n.g)(a,a,e.origin)}(e,t,0,1,r)}(0,a.c)(),(0,a.c)(),new o.I((()=>l()))},34528:(e,t,r)=>{r.d(t,{D:()=>o});var i=r(86394);async function o(e,t){const{data:r}=await(0,i.A)(e,{responseType:"image",...t});return r}},14218:(e,t,r)=>{r.d(t,{fetch:()=>jt});var i=r(19382),o=r(46615),n=r(76287),a=r(37046),s=r(56192),l=r(21839),c=r(22279),d=r(4675),u=r(86942);function h(e,t=!1){return e<=u.y9?t?new Array(e).fill(0):new Array(e):new Float32Array(e)}var m=r(57813),f=r(24121),p=r(2662),v=r(56016),g=r(53866),_=r(33381),x=r(13298),T=r(31068),b=r(8823),A=r(46629),E=r(21360),y=r(48325);function S(e){if(null==e)return null;const t=null!=e.offset?e.offset:y.Z,r=null!=e.rotation?e.rotation:0,i=null!=e.scale?e.scale:y.O,n=(0,E.f)(1,0,0,0,1,0,t[0],t[1],1),a=(0,E.f)(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),s=(0,E.f)(i[0],0,0,0,i[1],0,0,0,1),l=(0,E.c)();return(0,o.m)(l,a,s),(0,o.m)(l,n,l),l}class w{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class M{constructor(e,t,r){this.name=e,this.lodThreshold=t,this.pivotOffset=r,this.stageResources=new w,this.numberOfVertices=0}}var C=r(86394),O=r(12690),I=r(13274),R=r(98849),N=r(539),L=r(80912),P=r(40189),H=r(50579),D=r(42965),F=r(34528),B=r(70807),G=r(91013),z=r(9781),V=r(39831),W=r(17306),U=r(6267),j=r(20909),k=r(89125),q=r(99050);let $;var X;!function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"}(X||(X={}));var Y=r(41746),Z=r(6940),J=r(19282);let K=null,Q=null;async function ee(){return null==Q&&(Q=function(){if(null==$){const e=e=>(0,q.s)(`esri/libs/basisu/${e}`);$=r.e(3964).then(r.bind(r,63964)).then((e=>e.b)).then((({default:t})=>t({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return $}(),K=await Q),Q}function te(e,t,r,i,o){const n=(0,J.IB)(t?Y.CQ.COMPRESSED_RGBA8_ETC2_EAC:Y.CQ.COMPRESSED_RGB8_ETC2),a=o&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*i*n*a)}function re(e){return e.getNumImages()>=1&&!e.isUASTC()}function ie(e){return e.getFaces()>=1&&e.isETC1S()}function oe(e,t,r,i,o,n,a,s){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[d,u]=l?i?[X.ETC2_RGBA,Y.CQ.COMPRESSED_RGBA8_ETC2_EAC]:[X.ETC1_RGB,Y.CQ.COMPRESSED_RGB8_ETC2]:c?i?[X.BC3_RGBA,Y.CQ.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[X.BC1_RGB,Y.CQ.COMPRESSED_RGB_S3TC_DXT1_EXT]:[X.RGBA32,Y.Ab.RGBA],h=t.hasMipmap?r:Math.min(1,r),m=[];for(let f=0;f<h;f++)m.push(new Uint8Array(a(f,d))),s(f,d,m[f]);return t.internalFormat=u,t.hasMipmap=m.length>1,t.samplingMode=t.hasMipmap?Y.Cj.LINEAR_MIPMAP_LINEAR:Y.Cj.LINEAR,t.width=o,t.height=n,new Z.g(e,t,{type:"compressed",levels:m})}var ne=r(71077),ae=r(52997);const se=N.A.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),le=542327876,ce=131072;function de(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const ue=de("DXT1"),he=de("DXT3"),me=de("DXT5");function fe(e,t,r){const i=function(e,t){const r=new Int32Array(e,0,31);if(r[0]!==le)return se.error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return se.error("Unsupported format, must contain a FourCC code"),null;const i=r[21];let o,n;switch(i){case ue:o=8,n=Y.CQ.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case he:o=16,n=Y.CQ.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case me:o=16,n=Y.CQ.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return se.error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(i)),null}let a=1,s=r[4],l=r[3];!(3&s)&&!(3&l)||(se.warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,l=l+3&-4);const c=s,d=l;let u,h;r[2]&ce&&!1!==t&&(a=Math.max(1,r[7]));let m=r[1]+4;const f=[];for(let p=0;p<a;++p)h=(s+3>>2)*(l+3>>2)*o,u=new Uint8Array(e,m,h),f.push(u),m+=h,s=Math.max(1,s>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:f},internalFormat:n,width:c,height:d}}(r,t.hasMipmap??!1);if(null==i)throw new Error("DDS texture data is null");const{textureData:o,internalFormat:n,width:a,height:s}=i;return t.samplingMode=o.levels.length>1?Y.Cj.LINEAR_MIPMAP_LINEAR:Y.Cj.LINEAR,t.hasMipmap=o.levels.length>1,t.internalFormat=n,t.width=a,t.height=s,new Z.g(e,t,o)}function pe(e,t,r){if(e instanceof ImageData)return pe(ve(e),t,r);const i=document.createElement("canvas");return i.width=t,i.height=r,i.getContext("2d").drawImage(e,0,0,i.width,i.height),i}function ve(e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");if(null==r)throw new R.A("Failed to create 2d context from HTMLCanvasElement");return r.putImageData(e,0,0),t}var ge,_e=r(58947),xe=r(45758);class Te extends ne.J{get parameters(){return this._parameters}constructor(e,t){super(),this._data=e,this.type=ae.X.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new W.A,this._parameters={...Ae,...t},this._startPreload(e)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(e){null!=e&&(e instanceof HTMLVideoElement?(this.frameUpdate=t=>this._frameUpdate(e,t),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!((0,j.w8)(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){(0,j.DB)(e.src)||(0,j.w8)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}_createDescriptor(e){const t=new xe.R;return t.wrapMode=this._parameters.wrap??Y.pF.REPEAT,t.flipped=!this._parameters.noUnpackFlip,t.samplingMode=this._parameters.mipmap?Y.Cj.LINEAR_MIPMAP_LINEAR:Y.Cj.LINEAR,t.hasMipmap=!!this._parameters.mipmap,t.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,t.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),t}get glTexture(){return this._glTexture}get memoryEstimate(){return this._glTexture?.gpuMemoryUsage||function(e,t){if(null==e)return 0;if((0,u.mw)(e)||(0,u.mg)(e))return t.encoding===G.JS.KTX2_ENCODING?function(e,t){if(null==K)return e.byteLength;const r=new K.KTX2File(new Uint8Array(e)),i=ie(r)?te(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}(e,!!t.mipmap):t.encoding===G.JS.BASIS_ENCODING?function(e,t){if(null==K)return e.byteLength;const r=new K.BasisFile(new Uint8Array(e)),i=re(r)?te(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}(e,!!t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?be(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}(this._data,this._parameters)}load(e){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const t=this._data;return null==t?(this._glTexture=new Z.g(e,this._createDescriptor(e),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),"string"==typeof t?this._loadFromURL(e,t):t instanceof Image?this._loadFromImageElement(e,t):t instanceof HTMLVideoElement?this._loadFromVideoElement(e,t):t instanceof ImageData||t instanceof HTMLCanvasElement?this._loadFromImage(e,t):((0,u.mw)(t)||(0,u.mg)(t))&&this._parameters.encoding===G.JS.DDS_ENCODING?this._loadFromDDSData(e,t):((0,u.mw)(t)||(0,u.mg)(t))&&this._parameters.encoding===G.JS.KTX2_ENCODING?this._loadFromKTX2(e,t):((0,u.mw)(t)||(0,u.mg)(t))&&this._parameters.encoding===G.JS.BASIS_ENCODING?this._loadFromBasis(e,t):(0,u.mg)(t)?this._loadFromPixelData(e,t):(0,u.mw)(t)?this._loadFromPixelData(e,new Uint8Array(t)):null)}_frameUpdate(e,t){return null==this._glTexture||e.readyState<ge.HAVE_CURRENT_DATA||t===e.currentTime?t:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,t){return this._glTexture=fe(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>async function(e,t,r){null==K&&(K=await ee());const i=new K.KTX2File(new Uint8Array(r));if(!ie(i))return null;i.startTranscoding();const o=oe(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),o}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>async function(e,t,r){null==K&&(K=await ee());const i=new K.BasisFile(new Uint8Array(r));if(!re(i))return null;i.startTranscoding();const o=oe(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>i.transcodeImage(r,0,e,t,0,0)));return i.close(),i.delete(),o}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){(0,_e.vA)(this._parameters.width>0&&this._parameters.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this._parameters.components?Y.Ab.LUMINANCE:3===this._parameters.components?Y.Ab.RGB:Y.Ab.RGBA,r.width=this._parameters.width??0,r.height=this._parameters.height??0,this._glTexture=new Z.g(e,r,t),this._glTexture}_loadFromURL(e,t){return this._loadAsync((async r=>{const i=await(0,F.D)(t,{signal:r});return(0,P.Te)(r),this._loadFromImage(e,i)}))}_loadFromImageElement(e,t){return t.complete?this._loadFromImage(e,t):this._loadAsync((async r=>{const i=await(0,k.Sx)(t,t.src,!1,r);return(0,P.Te)(r),this._loadFromImage(e,i)}))}_loadFromVideoElement(e,t){return t.readyState>=ge.HAVE_CURRENT_DATA?this._loadFromImage(e,t):this._loadFromVideoElementAsync(e,t)}_loadFromVideoElementAsync(e,t){return this._loadAsync((r=>new Promise(((i,o)=>{const n=()=>{t.removeEventListener("loadeddata",a),t.removeEventListener("error",s),(0,U.xt)(l)},a=()=>{t.readyState>=ge.HAVE_CURRENT_DATA&&(n(),i(this._loadFromImage(e,t)))},s=e=>{n(),o(e||new R.A("Failed to load video"))};t.addEventListener("loadeddata",a),t.addEventListener("error",s);const l=(0,P.u7)(r,(()=>s((0,P.NK)())))}))))}_loadFromImage(e,t){let r=t;if(!(r instanceof HTMLVideoElement)){const{maxTextureSize:t}=e.parameters;r=this._parameters.downsampleUncompressed?function(e,t){let r=e.width*e.height;if(r<4096)return e instanceof ImageData?ve(e):e;let i=e.width,o=e.height;do{i=Math.ceil(i/2),o=Math.ceil(o/2),r=i*o}while(r>1048576||null!=t&&(i>t||o>t));return pe(e,i,o)}(r,t):function(e,t){const r=Math.max(e.width,e.height);if(r<=t)return e;const i=t/r;return pe(e,Math.round(e.width*i),Math.round(e.height*i))}(r,t)}const i=be(r);this._parameters.width=i.width,this._parameters.height=i.height;const o=this._createDescriptor(e);return o.pixelFormat=3===this._parameters.components?Y.Ab.RGB:Y.Ab.RGBA,o.width=i.width,o.height=i.height,this._glTexture=new Z.g(e,o,r),this._glTexture}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const i=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(i,i),r}unload(){if(this._glTexture=(0,U.WD)(this._glTexture),null!=this._loadingController){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}function be(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}!function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(ge||(ge={}));const Ae={wrap:{s:Y.pF.REPEAT,t:Y.pF.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};var Ee=r(50645),ye=r(10714),Se=r(11110),we=r(55274),Me=r(81283),Ce=r(46971),Oe=r(39486),Ie=r(98174),Re=r(18429),Ne=r(1931),Le=r(38323),Pe=r(96245),He=r(29709);const De=new class{constructor(e=0){this.offset=e,this.sphere=(0,Pe.c)(),this.tmpVertex=(0,c.c)()}applyToVertex(e,t,r){const i=this.objectTransform.transform,o=(0,l.s)(Fe,e,t,r),n=(0,l.e)(o,o,i),a=this.offset/(0,l.l)(n);(0,l.q)(n,n,n,a);const s=this.objectTransform.inverse;return(0,l.e)(this.tmpVertex,n,s),this.tmpVertex}applyToMinMax(e,t){const r=this.offset/(0,l.l)(e);(0,l.q)(e,e,e,r);const i=this.offset/(0,l.l)(t);(0,l.q)(t,t,t,i)}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=(0,l.l)(e),r=this.offset/t;return(0,l.q)(this.sphere,e,e,r),this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};new class{constructor(e=0){this.componentLocalOriginLength=0,this._tmpVertex=(0,c.c)(),this._mbs=(0,Pe.c)(),this._obb=(0,He.vt)(),this._totalOffset=0,this._offset=0,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=(0,l.l)(e)}applyToVertex(e,t,r){const i=(0,l.s)(Fe,e,t,r),o=(0,l.s)(Be,e,t,r+this.componentLocalOriginLength),n=this._totalOffset/(0,l.l)(o);return(0,l.q)(this._tmpVertex,i,o,n),this._tmpVertex}applyToAabb(e){const t=(0,l.s)(Fe,e[0],e[1],e[2]+this.componentLocalOriginLength),r=(0,l.s)(Be,e[3],e[4],e[5]+this.componentLocalOriginLength),i=(0,l.z)(Ge,t),o=(0,l.z)(ze,r),n=(0,l.w)(Ve,t),a=(0,l.w)(We,r),s=(0,l.x)(Ue,n,a);s[0]=i[0]*o[0]<0?0:s[0],s[1]=i[1]*o[1]<0?0:s[1],s[2]=i[2]*o[2]<0?0:s[2];const c=(0,l.l)(s);if(c<this._totalOffset)return e[0]-=t[0]<0?this._totalOffset:0,e[1]-=t[1]<0?this._totalOffset:0,e[2]-=t[2]<0?this._totalOffset:0,e[3]+=r[0]>0?this._totalOffset:0,e[4]+=r[1]>0?this._totalOffset:0,e[5]+=r[2]>0?this._totalOffset:0,e;const d=(0,l.D)(Ue,n,a),u=(0,l.l)(d),h=this._totalOffset/u,m=this._totalOffset/c;return e[0]+=t[0]*(t[0]>0?h:m),e[1]+=t[1]*(t[1]>0?h:m),e[2]+=t[2]*(t[2]>0?h:m),e[3]+=r[0]*(r[0]<0?h:m),e[4]+=r[1]*(r[1]<0?h:m),e[5]+=r[2]*(r[2]<0?h:m),e}applyToMbs(e){const t=(0,l.l)(e),r=this._totalOffset/t;return(0,l.q)(this._mbs,e,e,r),this._mbs[3]=e[3]+e[3]*this._totalOffset/t,this._mbs}applyToObb(e){return(0,He.gm)(e,this._totalOffset,this._totalOffset,ye.RT.Global,this._obb),this._obb}};new class{constructor(e=0){this.offset=e,this.tmpVertex=(0,c.c)()}applyToVertex(e,t,r){const i=(0,l.s)(Fe,e,t,r),o=(0,l.g)(Be,i,this.localOrigin),n=this.offset/(0,l.l)(o);return(0,l.q)(this.tmpVertex,i,o,n),this.tmpVertex}applyToAabb(e){const t=Ge,r=ze,i=Ve;for(let s=0;s<3;++s)t[s]=e[0+s]+this.localOrigin[s],r[s]=e[3+s]+this.localOrigin[s],i[s]=t[s];const o=this.applyToVertex(t[0],t[1],t[2]);for(let s=0;s<3;++s)e[s]=o[s],e[s+3]=o[s];const n=t=>{const r=this.applyToVertex(t[0],t[1],t[2]);for(let i=0;i<3;++i)e[i]=Math.min(e[i],r[i]),e[i+3]=Math.max(e[i+3],r[i])};for(let s=1;s<8;++s){for(let e=0;e<3;++e)i[e]=s&1<<e?r[e]:t[e];n(i)}let a=0;for(let s=0;s<3;++s)t[s]*r[s]<0&&(a|=1<<s);if(0!==a&&7!==a)for(let s=0;s<8;++s)if(!(a&s)){for(let e=0;e<3;++e)i[e]=a&1<<e?0:s&1<<e?t[e]:r[e];n(i)}for(let s=0;s<3;++s)e[s]-=this.localOrigin[s],e[s+3]-=this.localOrigin[s];return e}};const Fe=(0,c.c)(),Be=(0,c.c)(),Ge=(0,c.c)(),ze=(0,c.c)(),Ve=(0,c.c)(),We=(0,c.c)(),Ue=(0,c.c)();function je(e,t,r){const{data:i,indices:o}=e,n=t.typedBuffer,a=t.typedBufferStride,s=o.length;r*=a;for(let l=0;l<s;++l){const e=2*o[l];n[r]=i[e],n[r+1]=i[e+1],r+=a}}function ke(e,t,r,i){const{data:o,indices:n}=e,a=t.typedBuffer,s=t.typedBufferStride,l=n.length;if(r*=s,null==i||1===i)for(let c=0;c<l;++c){const e=3*n[c];a[r]=o[e],a[r+1]=o[e+1],a[r+2]=o[e+2],r+=s}else for(let c=0;c<l;++c){const e=3*n[c];for(let t=0;t<i;++t)a[r]=o[e],a[r+1]=o[e+1],a[r+2]=o[e+2],r+=s}}function qe(e,t,r,i=1){const{data:o,indices:n}=e,a=t.typedBuffer,s=t.typedBufferStride,l=n.length;if(r*=s,1===i)for(let c=0;c<l;++c){const e=4*n[c];a[r]=o[e],a[r+1]=o[e+1],a[r+2]=o[e+2],a[r+3]=o[e+3],r+=s}else for(let c=0;c<l;++c){const e=4*n[c];for(let t=0;t<i;++t)a[r]=o[e],a[r+1]=o[e+1],a[r+2]=o[e+2],a[r+3]=o[e+3],r+=s}}function $e(e,t,r,i,o=1){const n=t.typedBuffer,a=t.typedBufferStride;if(i*=a,1===o)for(let s=0;s<r;++s)n[i]=e[0],n[i+1]=e[1],n[i+2]=e[2],n[i+3]=e[3],i+=a;else for(let s=0;s<r;++s)for(let t=0;t<o;++t)n[i]=e[0],n[i+1]=e[1],n[i+2]=e[2],n[i+3]=e[3],i+=a}function Xe(e,t,r,i,o,n){switch(e){case Ee.r.POSITION:{(0,_e.vA)(3===t.size);const i=o.getField(e,m.xs);(0,_e.vA)(!!i,`No buffer view for ${e}`),i&&function(e,t,r,i,o=1){if(!t)return void ke(e,r,i,o);const{data:n,indices:s}=e,l=r.typedBuffer,c=r.typedBufferStride,d=s.length,u=t[0],h=t[1],m=t[2],f=t[4],p=t[5],v=t[6],g=t[8],_=t[9],x=t[10],T=t[12],b=t[13],A=t[14];i*=c;let E=0,y=0,S=0;const w=(0,a.y)(t)?e=>{E=n[e]+T,y=n[e+1]+b,S=n[e+2]+A}:e=>{const t=n[e],r=n[e+1],i=n[e+2];E=u*t+f*r+g*i+T,y=h*t+p*r+_*i+b,S=m*t+v*r+x*i+A};if(1===o)for(let a=0;a<d;++a)w(3*s[a]),l[i]=E,l[i+1]=y,l[i+2]=S,i+=c;else for(let a=0;a<d;++a){w(3*s[a]);for(let e=0;e<o;++e)l[i]=E,l[i+1]=y,l[i+2]=S,i+=c}}(t,r,i,n);break}case Ee.r.NORMAL:{(0,_e.vA)(3===t.size);const r=o.getField(e,m.xs);(0,_e.vA)(!!r,`No buffer view for ${e}`),r&&function(e,t,r,i,o=1){if(!t)return void ke(e,r,i,o);const{data:n,indices:s}=e,l=t,c=r.typedBuffer,d=r.typedBufferStride,u=s.length,h=l[0],m=l[1],f=l[2],p=l[4],v=l[5],g=l[6],_=l[8],x=l[9],T=l[10],b=!(0,a.z)(l),A=1e-6,E=1-A;i*=d;let y=0,S=0,w=0;const M=(0,a.y)(l)?e=>{y=n[e],S=n[e+1],w=n[e+2]}:e=>{const t=n[e],r=n[e+1],i=n[e+2];y=h*t+p*r+_*i,S=m*t+v*r+x*i,w=f*t+g*r+T*i};if(1===o)if(b)for(let a=0;a<u;++a){M(3*s[a]);const e=y*y+S*S+w*w;if(e<E&&e>A){const t=1/Math.sqrt(e);c[i]=y*t,c[i+1]=S*t,c[i+2]=w*t}else c[i]=y,c[i+1]=S,c[i+2]=w;i+=d}else for(let a=0;a<u;++a)M(3*s[a]),c[i]=y,c[i+1]=S,c[i+2]=w,i+=d;else for(let a=0;a<u;++a){if(M(3*s[a]),b){const e=y*y+S*S+w*w;if(e<E&&e>A){const t=1/Math.sqrt(e);y*=t,S*=t,w*=t}}for(let e=0;e<o;++e)c[i]=y,c[i+1]=S,c[i+2]=w,i+=d}}(t,i,r,n);break}case Ee.r.NORMALCOMPRESSED:{(0,_e.vA)(2===t.size);const r=o.getField(e,m.mJ);(0,_e.vA)(!!r,`No buffer view for ${e}`),r&&je(t,r,n);break}case Ee.r.UV0:{(0,_e.vA)(2===t.size);const r=o.getField(e,m.gH);(0,_e.vA)(!!r,`No buffer view for ${e}`),r&&je(t,r,n);break}case Ee.r.COLOR:case Ee.r.SYMBOLCOLOR:{const r=o.getField(e,m.XP);(0,_e.vA)(!!r,`No buffer view for ${e}`),(0,_e.vA)(3===t.size||4===t.size),!r||3!==t.size&&4!==t.size||function(e,t,r,i,o=1){const{data:n,indices:a}=e,s=r.typedBuffer,l=r.typedBufferStride,c=a.length;if(i*=l,t!==n.length||4!==t)if(1!==o)if(4!==t)for(let d=0;d<c;++d){const e=3*a[d];for(let t=0;t<o;++t)s[i]=n[e],s[i+1]=n[e+1],s[i+2]=n[e+2],s[i+3]=255,i+=l}else for(let d=0;d<c;++d){const e=4*a[d];for(let t=0;t<o;++t)s[i]=n[e],s[i+1]=n[e+1],s[i+2]=n[e+2],s[i+3]=n[e+3],i+=l}else{if(4===t){for(let e=0;e<c;++e){const t=4*a[e];s[i]=n[t],s[i+1]=n[t+1],s[i+2]=n[t+2],s[i+3]=n[t+3],i+=l}return}for(let e=0;e<c;++e){const t=3*a[e];s[i]=n[t],s[i+1]=n[t+1],s[i+2]=n[t+2],s[i+3]=255,i+=l}}else{s[i]=n[0],s[i+1]=n[1],s[i+2]=n[2],s[i+3]=n[3];const e=new Uint32Array(r.typedBuffer.buffer,r.start),t=l/4,a=e[i/=4];i+=t;const d=c*o;for(let r=1;r<d;++r)e[i]=a,i+=t}}(t,t.size,r,n);break}case Ee.r.COLORFEATUREATTRIBUTE:{const r=o.getField(e,m.Y$);(0,_e.vA)(!!r,`No buffer view for ${e}`),(0,_e.vA)(1===t.size),r&&1===t.size&&function(e,t,r){const{data:i,indices:o}=e,n=t.typedBuffer,a=t.typedBufferStride,s=o.length,l=i[0];r*=a;for(let c=0;c<s;++c)n[r]=l,r+=a}(t,r,n);break}case Ee.r.TANGENT:{(0,_e.vA)(4===t.size);const r=o.getField(e,m.Eq);(0,_e.vA)(!!r,`No buffer view for ${e}`),r&&function(e,t,r,i,o=1){if(!t)return void qe(e,r,i,o);const{data:n,indices:s}=e,l=t,c=r.typedBuffer,d=r.typedBufferStride,u=s.length,h=l[0],m=l[1],f=l[2],p=l[4],v=l[5],g=l[6],_=l[8],x=l[9],T=l[10],b=!(0,a.z)(l),A=1e-6,E=1-A;if(i*=d,1===o)for(let a=0;a<u;++a){const e=4*s[a],t=n[e],r=n[e+1],o=n[e+2],l=n[e+3];let u=h*t+p*r+_*o,y=m*t+v*r+x*o,S=f*t+g*r+T*o;if(b){const e=u*u+y*y+S*S;if(e<E&&e>A){const t=1/Math.sqrt(e);u*=t,y*=t,S*=t}}c[i]=u,c[i+1]=y,c[i+2]=S,c[i+3]=l,i+=d}else for(let a=0;a<u;++a){const e=4*s[a],t=n[e],r=n[e+1],l=n[e+2],u=n[e+3];let y=h*t+p*r+_*l,S=m*t+v*r+x*l,w=f*t+g*r+T*l;if(b){const e=y*y+S*S+w*w;if(e<E&&e>A){const t=1/Math.sqrt(e);y*=t,S*=t,w*=t}}for(let n=0;n<o;++n)c[i]=y,c[i+1]=S,c[i+2]=w,c[i+3]=u,i+=d}}(t,i,r,n);break}case Ee.r.PROFILERIGHT:case Ee.r.PROFILEUP:case Ee.r.PROFILEVERTEXANDNORMAL:case Ee.r.FEATUREVALUE:{(0,_e.vA)(4===t.size);const r=o.getField(e,m.Eq);(0,_e.vA)(!!r,`No buffer view for ${e}`),r&&qe(t,r,n)}}}class Ye{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.attributes.get(Ee.r.POSITION).indices.length}write(e,t,r,i,o){!function(e,t,r,i,o,n){for(const a of t.fields.keys()){const t=e.attributes.get(a),s=t?.indices;if(t&&s)Xe(a,t,r,i,o,n);else if(a===Ee.r.OBJECTANDLAYERIDCOLOR&&null!=e.objectAndLayerIdColor){const t=e.attributes.get(Ee.r.POSITION)?.indices;if(t){const r=t.length,i=o.getField(a,m.XP);$e(e.objectAndLayerIdColor,i,r,n)}}}}(r,this.vertexBufferLayout,e,t,i,o)}}var Ze=r(19647),Je=r(52712),Ke=r(26139),Qe=r(82089),et=r(33448),tt=r(47705),rt=r(33444),it=r(13148),ot=r(58123);Y.MT.LESS,Y.MT.ALWAYS;const nt={mask:255},at={function:{func:Y.MT.ALWAYS,ref:G.dd.OutlineVisualElementMask,mask:G.dd.OutlineVisualElementMask},operation:{fail:Y.eA.KEEP,zFail:Y.eA.KEEP,zPass:Y.eA.ZERO}},st={function:{func:Y.MT.ALWAYS,ref:G.dd.OutlineVisualElementMask,mask:G.dd.OutlineVisualElementMask},operation:{fail:Y.eA.KEEP,zFail:Y.eA.KEEP,zPass:Y.eA.REPLACE}};Y.MT.EQUAL,G.dd.OutlineVisualElementMask,G.dd.OutlineVisualElementMask,Y.eA.KEEP,Y.eA.KEEP,Y.eA.KEEP,Y.MT.NOTEQUAL,G.dd.OutlineVisualElementMask,G.dd.OutlineVisualElementMask,Y.eA.KEEP,Y.eA.KEEP,Y.eA.KEEP;var lt=r(81868);const ct=[1,1,.5],dt=[0,.6,.2],ut=[0,1,.2];var ht=r(90618),mt=r(2449);class ft extends Qe.Zo{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,c.e)(ct),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=G.s2.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=(0,c.f)(0,0,0),this.instancedDoublePrecision=!1,this.normalType=Me.W.Attribute,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,c.f)(.2,.2,.2),this.diffuse=(0,c.f)(.8,.8,.8),this.externalColor=(0,Je.f)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,c.c)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=G.it.Less,this.textureAlphaMode=G.sf.Blend,this.textureAlphaCutoff=et.H,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=Re.m$.Occlude,this.isDecoration=!1}}Qe.gy;class pt extends rt.w{initializeConfiguration(e,t){t.spherical=e.viewingMode===ye.RT.Global,t.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?Ke.q.Default:Ke.q.None,t.objectAndLayerIdColorInstanced=t.instanced}initializeProgram(e){return this._initializeProgram(e,pt.shader)}_initializeProgram(e,t){return new ot.B(e.rctx,t.get().build(this.configuration),it.D)}_convertDepthTestFunction(e){return e===G.it.Lequal?Y.MT.LEQUAL:Y.MT.LESS}_makePipeline(e,t){const r=this.configuration,i=e===lt.y.NONE,o=e===lt.y.FrontFace;return(0,mt.Ey)({blending:r.output!==we.V.Color&&r.output!==we.V.Alpha||!r.transparent?null:i?Ne.V0:(0,Ne.ez)(e),culling:vt(r)?(0,mt.Xt)(r.cullFace):null,depthTest:{func:(0,Ne.K_)(e,this._convertDepthTestFunction(r.customDepthTest))},depthWrite:(i||o)&&r.writeDepth?mt.kn:null,colorWrite:mt.wE,stencilWrite:r.hasOccludees?nt:null,stencilTest:r.hasOccludees?t?st:at:null,polygonOffset:i||o?null:(0,Ne.aB)(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}function vt(e){return e.cullFace!==G.s2.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}pt.shader=new tt.$(ht.D,(()=>r.e(1318).then(r.bind(r,71318))));var gt=r(66866),_t=r(69948),xt=r(24682),Tt=r(57198);class bt extends xt.nW{}(0,gt._)([(0,_t.W)({constValue:!0})],bt.prototype,"hasSliceHighlight",void 0),(0,gt._)([(0,_t.W)({constValue:!1})],bt.prototype,"hasSliceInVertexProgram",void 0),(0,gt._)([(0,_t.W)({constValue:Tt.c.Pass})],bt.prototype,"pbrTextureBindType",void 0);class At extends bt{constructor(){super(...arguments),this.output=we.V.Color,this.alphaDiscardMode=G.sf.Opaque,this.doubleSidedMode=Ce.W.None,this.pbrMode=Oe.A9.Disabled,this.cullFace=G.s2.None,this.transparencyPassType=lt.y.NONE,this.normalType=Me.W.Attribute,this.textureCoordinateType=Ke.q.None,this.customDepthTest=G.it.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}(0,gt._)([(0,_t.W)({count:we.V.COUNT})],At.prototype,"output",void 0),(0,gt._)([(0,_t.W)({count:G.sf.COUNT})],At.prototype,"alphaDiscardMode",void 0),(0,gt._)([(0,_t.W)({count:Ce.W.COUNT})],At.prototype,"doubleSidedMode",void 0),(0,gt._)([(0,_t.W)({count:Oe.A9.COUNT})],At.prototype,"pbrMode",void 0),(0,gt._)([(0,_t.W)({count:G.s2.COUNT})],At.prototype,"cullFace",void 0),(0,gt._)([(0,_t.W)({count:lt.y.COUNT})],At.prototype,"transparencyPassType",void 0),(0,gt._)([(0,_t.W)({count:Me.W.COUNT})],At.prototype,"normalType",void 0),(0,gt._)([(0,_t.W)({count:Ke.q.COUNT})],At.prototype,"textureCoordinateType",void 0),(0,gt._)([(0,_t.W)({count:G.it.COUNT})],At.prototype,"customDepthTest",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"spherical",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"hasVertexColors",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"hasSymbolColors",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"hasVerticalOffset",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"hasSlicePlane",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"hasSliceHighlight",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"hasColorTexture",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"hasMetallicRoughnessTexture",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"hasEmissionTexture",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"hasOcclusionTexture",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"hasNormalTexture",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"hasScreenSizePerspective",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"hasVertexTangents",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"hasOccludees",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"multipassEnabled",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"hasModelTransformation",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"offsetBackfaces",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"vvSize",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"vvColor",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"receiveShadows",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"receiveAmbientOcclusion",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"textureAlphaPremultiplied",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"instanced",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"instancedColor",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"objectAndLayerIdColorInstanced",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"instancedDoublePrecision",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"writeDepth",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"transparent",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"enableOffset",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"cullAboveGround",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"snowCover",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"hasColorTextureTransform",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"hasEmissionTextureTransform",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"hasNormalTextureTransform",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"hasOcclusionTextureTransform",void 0),(0,gt._)([(0,_t.W)()],At.prototype,"hasMetallicRoughnessTextureTransform",void 0),(0,gt._)([(0,_t.W)({constValue:!1})],At.prototype,"occlusionPass",void 0),(0,gt._)([(0,_t.W)({constValue:!0})],At.prototype,"hasVvInstancing",void 0),(0,gt._)([(0,_t.W)({constValue:!1})],At.prototype,"useCustomDTRExponentForWater",void 0),(0,gt._)([(0,_t.W)({constValue:!1})],At.prototype,"supportsTextureAtlas",void 0),(0,gt._)([(0,_t.W)({constValue:!0})],At.prototype,"useFillLights",void 0);var Et=r(3458);class yt extends pt{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetallicRoughnessTexture=!1,t.hasEmissionTexture=!1,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=Me.W.Attribute,t.doubleSidedMode=Ce.W.WindingOrder,t.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,yt.shader)}}yt.shader=new tt.$(Et.R,(()=>r.e(1198).then(r.bind(r,91198))));class St extends Re.im{constructor(e){super(e,Mt),this.supportsEdges=!0,this._configuration=new At,this._vertexBufferLayout=function(e){const t=(0,Se.BP)().vec3f(Ee.r.POSITION);return e.normalType===Me.W.Compressed?t.vec2i16(Ee.r.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(Ee.r.NORMAL),e.hasVertexTangents&&t.vec4f(Ee.r.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(Ee.r.UV0),e.hasVertexColors&&t.vec4u8(Ee.r.COLOR),e.hasSymbolColors&&t.vec4u8(Ee.r.SYMBOLCOLOR),(0,V.A)("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(Ee.r.OBJECTANDLAYERIDCOLOR),t}(this.parameters)}isVisibleForOutput(e){return e!==we.V.Shadow&&e!==we.V.ShadowExcludeHighlight&&e!==we.V.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{hasInstancedColor:t,hasVertexColors:r,hasSymbolColors:i,vvColor:o}=e,n="replace"===e.colorMixMode,a=e.opacity>0,s=e.externalColor&&e.externalColor[3]>0,l=t||o||i;return r&&l?n||a:r?n?s:a:l?n||a:n?s:a}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=null!=this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=null!=this.parameters.screenSizePerspective,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,null!=this.parameters.customDepthTest&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?G.s2.None:this.parameters.cullFace,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=null!=this.parameters.modelTransformation,e!==we.V.Color&&e!==we.V.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=Ce.W.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?Ce.W.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?Ce.W.WindingOrder:Ce.W.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=null!=t.ssao,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?Oe.A9.Schematic:Oe.A9.Normal:Oe.A9.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<Ne.xt,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,t,r,i,o,n){if(null!=this.parameters.verticalOffset){const e=r.camera;(0,l.s)(Lt,t[12],t[13],t[14]);let n=null;switch(r.viewingMode){case ye.RT.Global:n=(0,l.n)(Rt,Lt);break;case ye.RT.Local:n=(0,l.c)(Rt,It)}let a=0;const s=(0,l.f)(Pt,Lt,e.eye),c=(0,l.l)(s),d=(0,l.i)(s,s,1/c);let u=null;this.parameters.screenSizePerspective&&(u=(0,l.j)(n,d)),a+=(0,Ze.kE)(e,c,this.parameters.verticalOffset,u??0,this.parameters.screenSizePerspective),(0,l.i)(n,n,a),(0,l.t)(Nt,n,r.transform.inverseRotation),i=(0,l.f)(Ct,i,Nt),o=(0,l.f)(Ot,o,Nt)}(0,Ze.Uy)(e,r,i,o,function(e){return null!=e?(De.offset=e,De):null}(r.verticalOffset),n)}produces(e,t){return(t===we.V.Color||t===we.V.Alpha||t===we.V.Depth||t===we.V.Normal||t===we.V.Shadow||t===we.V.ShadowHighlight||t===we.V.ShadowExcludeHighlight||t===we.V.Highlight||t===we.V.ObjectAndLayerIdColor)&&(e===(this.parameters.transparent?this.parameters.writeDepth?Le.N.TRANSPARENT_MATERIAL:Le.N.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:Le.N.OPAQUE_MATERIAL)||e===Le.N.DRAPED_MATERIAL)}createGLMaterial(e){return new wt(e)}createBufferWriter(){return new Ye(this._vertexBufferLayout)}}class wt extends Ie.m{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==we.V.Color&&this._output!==we.V.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e));const t=this._material.parameters;this.updateTexture(t.textureId);const r=e.camera.viewInverseTransposeMatrix;return(0,l.s)(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?yt:pt,e)}}const Mt=new class extends ft{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}};const Ct=(0,c.c)(),Ot=(0,c.c)(),It=(0,c.f)(0,0,1),Rt=(0,c.c)(),Nt=(0,c.c)(),Lt=(0,c.c)(),Pt=(0,c.c)(),Ht=N.A.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Dt(e,t){const r=await async function(e,t){const r=t?.streamDataRequester;if(r)return async function(e,t,r){const i=await(0,O.Ke)(t.request(e,"json",r));if(!0===i.ok)return i.value;(0,P.QP)(i.error),Ft(i.error.details.url)}(e,r,t);const i=await(0,O.Ke)((0,C.A)(e,t));if(!0===i.ok)return i.value.data;(0,P.QP)(i.error),Ft(i.error)}(e,t),i=await async function(e,t){const r=new Array;for(const n in e){const i=e[n],o=i.images[0].data;if(!o){Ht.warn("Externally referenced texture data is not yet supported");continue}const a=i.encoding+";base64,"+o,s="/textureDefinitions/"+n,l="rgba"===i.channels?i.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:Y.pF.REPEAT,t:Y.pF.REPEAT},preMultiplyAlpha:zt(l)!==G.sf.Opaque},d=null!=t&&t.disableTextures?Promise.resolve(null):(0,F.D)(a,t);r.push(d.then((e=>({refId:s,image:e,parameters:c,alphaChannelUsage:l}))))}const i=await Promise.all(r),o={};for(const n of i)o[n.refId]=n;return o}(r.textureDefinitions??{},t);let o=0;for(const n in i)if(i.hasOwnProperty(n)){const e=i[n];o+=e?.image?e.image.width*e.image.height*4:0}return{resource:r,textures:i,size:o+(0,I.iL)(r)}}function Ft(e){throw new R.A("",`Request for object resource failed: ${e}`)}function Bt(e){const t=e.params,r=t.topology;let i=!0;switch(t.vertexAttributes||(Ht.warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t?.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(Ht.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(Ht.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(Ht.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),i=!1)}}else Ht.warn("Indexed geometries must specify faces"),i=!1;break}default:Ht.warn(`Unsupported topology '${r}'`),i=!1}e.params.material||(Ht.warn("Geometry requires material"),i=!1);const o=e.params.vertexAttributes;for(const n in o)o[n].values||(Ht.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function Gt(e){const t=(0,d.Ie)();return e.forEach((e=>{const r=e.boundingInfo;null!=r&&((0,d.iT)(t,r.bbMin),(0,d.iT)(t,r.bbMax))})),t}function zt(e){switch(e){case"mask":return G.sf.Mask;case"maskAndTransparency":return G.sf.MaskBlend;case"none":return G.sf.Opaque;default:return G.sf.Blend}}function Vt(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Wt=new H.R(1,2,"wosr");var Ut=r(42440);async function jt(e,t){const r=function(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}((0,i.EM)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):Dt(r.url,t)),{engineResources:i,referenceBoundingBox:o}=function(e,t){const r=new Array,i=new Array,o=new Array,n=new L.O,a=e.resource,s=H.R.parse(a.version||"1.0","wosr");Wt.validate(s);const l=a.model.name,d=a.model.geometries,u=a.materialDefinitions??{},h=e.textures;let m=0;const f=new Map;for(let p=0;p<d.length;p++){const e=d[p];if(!Bt(e))continue;const a=Vt(e),s=e.params.vertexAttributes,l=[],v=t=>{if("PerAttributeArray"===e.params.topology)return null;const r=e.params.faces;for(const e in r)if(e===t)return r[e].values;return null},g=s[Ee.r.POSITION],_=g.values.length/g.valuesPerElement;for(const t in s){const e=s[t],r=e.values,i=v(t)??(0,D.tM)(_);l.push([t,new B.n(r,i,e.valuesPerElement,!0)])}const x=a.texture,T=h&&h[x];if(T&&!f.has(x)){const{image:e,parameters:t}=T,r=new Te(e,t);i.push(r),f.set(x,r)}const b=f.get(x),A=b?b.id:void 0,E=a.material;let y=n.get(E,x);if(null==y){const e=u[E.substring(E.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=T&&T.alphaChannelUsage,i=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,o=T?zt(T.alphaChannelUsage):void 0,a={ambient:(0,c.e)(e.diffuse),diffuse:(0,c.e)(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:o,textureAlphaCutoff:.33,textureId:A,initTextureTransparent:!0,doubleSided:!0,cullFace:G.s2.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:T?.parameters.preMultiplyAlpha??!1};t?.materialParameters&&Object.assign(a,t.materialParameters),y=new St(a),n.set(E,x,y)}o.push(y);const S=new z.V(y,l);m+=l.find((e=>e[0]===Ee.r.POSITION))?.[1]?.indices.length??0,r.push(S)}return{engineResources:[{name:l,stageResources:{textures:i,materials:o,geometries:r},pivotOffset:a.model.pivotOffset,numberOfVertices:m,lodThreshold:null}],referenceBoundingBox:Gt(r)}}(e,t);return{lods:i,referenceBoundingBox:o,isEsriSymbolResource:!1,isWosr:!0}}const n=await(t.cache?t.cache.loadGLTF(r.url,t,!!t.usePBR):(0,T.y)(new x.R(t.streamDataRequester),r.url,t,t.usePBR)),u=n.model.meta?.ESRI_proxyEllipsoid,E=n.meta.isEsriSymbolResource&&null!=u&&n.meta.uri.includes("/RealisticTrees/");E&&!n.customMeta.esriTreeRendering&&(n.customMeta.esriTreeRendering=!0,function(e,t){for(let r=0;r<e.model.lods.length;++r){const i=e.model.lods[r];for(const o of i.parts){const i=o.attributes.normal;if(null==i)return;const n=o.attributes.position,d=n.count,u=(0,c.c)(),h=(0,c.c)(),f=(0,c.c)(),p=new Uint8Array(4*d),v=new Float64Array(3*d),g=(0,a.i)((0,s.a)(),o.transform);let _=0,x=0;for(let a=0;a<d;a++){n.getVec(a,h),i.getVec(a,u),(0,l.e)(h,h,o.transform),(0,l.f)(f,h,t.center),(0,l.B)(f,f,t.radius);const s=f[2],c=(0,l.l)(f),d=Math.min(.45+.55*c*c,1);(0,l.B)(f,f,t.radius),null!==g&&(0,l.e)(f,f,g),(0,l.n)(f,f),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,l.p)(f,f,u,s>-1?.2:Math.min(-4*s-3.8,1)),v[_]=f[0],v[_+1]=f[1],v[_+2]=f[2],_+=3,p[x]=255*d,p[x+1]=255*d,p[x+2]=255*d,p[x+3]=255,x+=4}o.attributes.normal=new m.xs(v),o.attributes.color=new m.XP(p)}}}(n,u));const y=!!t.usePBR,w=n.meta.isEsriSymbolResource?{usePBR:y,isSchematic:!1,treeRendering:E,mrrFactors:[...ut]}:{usePBR:y,isSchematic:!1,treeRendering:!1,mrrFactors:[...ct]},C={...t.materialParameters,treeRendering:E},{engineResources:O,referenceBoundingBox:I}=function(e,t,r,i){const n=e.model,a=new Array,s=new Map,u=new Map,x=n.lods.length,T=(0,d.Ie)();return n.lods.forEach(((e,E)=>{const y=!0===i.skipHighLods&&(x>1&&0===E||x>3&&1===E)||!1===i.skipHighLods&&null!=i.singleLodIndex&&E!==i.singleLodIndex;if(y&&0!==E)return;const w=new M(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const i=y?new St({}):function(e,t,r,i,o,n,a){const s=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),d=e.materials.get(t.material),u=null!=t.attributes.texCoord0,h=null!=t.attributes.normal;if(null==d)return null;const m=function(e){switch(e){case"BLEND":return G.sf.Blend;case"MASK":return G.sf.Mask;case"OPAQUE":case null:case void 0:return G.sf.Opaque}}(d.alphaMode);if(!n.has(s)){if(u){const t=(t,r=!1)=>{if(null!=t&&!a.has(t)){const i=e.textures.get(t);if(null!=i){const e=i.data;a.set(t,new Te((0,A.x3)(e)?e.data:e,{...i.parameters,preMultiplyAlpha:!(0,A.x3)(e)&&r,encoding:(0,A.x3)(e)&&null!=e.encoding?e.encoding:void 0}))}}};t(d.textureColor,m!==G.sf.Opaque),t(d.textureNormal),t(d.textureOcclusion),t(d.textureEmissive),t(d.textureMetallicRoughness)}const r=d.color[0]**(1/Ut.T),f=d.color[1]**(1/Ut.T),p=d.color[2]**(1/Ut.T),v=d.emissiveFactor[0]**(1/Ut.T),g=d.emissiveFactor[1]**(1/Ut.T),_=d.emissiveFactor[2]**(1/Ut.T),x=null!=d.textureColor&&u?a.get(d.textureColor):null,T=function({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:r,roughnessFactor:i,emissiveTexture:o,emissiveFactor:n,occlusionTexture:a}){return null==e&&null==t&&null==o&&(null==n||(0,l.h)(n,c.Z))&&null==a&&(null==i||1===i)&&(null==r||1===r||0===r)}({normalTexture:d.textureNormal,metallicRoughnessTexture:d.textureMetallicRoughness,metallicFactor:d.metallicFactor,roughnessFactor:d.roughnessFactor,emissiveTexture:d.textureEmissive,emissiveFactor:d.emissiveFactor,occlusionTexture:d.textureOcclusion});n.set(s,new St({...i,transparent:m===G.sf.Blend,customDepthTest:G.it.Lequal,textureAlphaMode:m,textureAlphaCutoff:d.alphaCutoff,diffuse:[r,f,p],ambient:[r,f,p],opacity:d.opacity,doubleSided:d.doubleSided,doubleSidedType:"winding-order",cullFace:d.doubleSided?G.s2.None:G.s2.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:h?Me.W.Attribute:Me.W.ScreenDerivative,castShadows:!0,textureId:null!=x?x.id:void 0,colorMixMode:d.colorMixMode,normalTextureId:null!=d.textureNormal&&u?a.get(d.textureNormal).id:void 0,textureAlphaPremultiplied:null!=x&&!!x.parameters.preMultiplyAlpha,occlusionTextureId:null!=d.textureOcclusion&&u?a.get(d.textureOcclusion).id:void 0,emissiveTextureId:null!=d.textureEmissive&&u?a.get(d.textureEmissive).id:void 0,metallicRoughnessTextureId:null!=d.textureMetallicRoughness&&u?a.get(d.textureMetallicRoughness).id:void 0,emissiveFactor:[v,g,_],mrrFactors:T?[...dt]:[d.metallicFactor,d.roughnessFactor,i.mrrFactors[2]],isSchematic:T,colorTextureTransformMatrix:S(d.colorTextureTransform),normalTextureTransformMatrix:S(d.normalTextureTransform),occlusionTextureTransformMatrix:S(d.occlusionTextureTransform),emissiveTextureTransformMatrix:S(d.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:S(d.metallicRoughnessTextureTransform),...o}))}const f=n.get(s);if(r.stageResources.materials.push(f),u){const e=e=>{null!=e&&r.stageResources.textures.push(a.get(e))};e(d.textureColor),e(d.textureNormal),e(d.textureOcclusion),e(d.textureEmissive),e(d.textureMetallicRoughness)}return f}(n,e,w,t,r,s,u),{geometry:a,vertexCount:x}=function(e,t){const r=e.attributes.position.count,i=(0,b.x)(e.indices||r,e.primitiveType),n=h(3*r),{typedBuffer:a,typedBufferStride:s}=e.attributes.position;(0,f.t)(n,a,e.transform,3,s);const l=[[Ee.r.POSITION,new B.n(n,i,3,!0)]];if(null!=e.attributes.normal){const t=h(3*r),{typedBuffer:n,typedBufferStride:a}=e.attributes.normal;(0,o.n)(kt,e.transform),(0,f.a)(t,n,kt,3,a),l.push([Ee.r.NORMAL,new B.n(t,i,3,!0)])}if(null!=e.attributes.tangent){const t=h(4*r),{typedBuffer:n,typedBufferStride:a}=e.attributes.tangent;(0,o.n)(kt,e.transform),(0,p.t)(t,n,kt,4,a),l.push([Ee.r.TANGENT,new B.n(t,i,4,!0)])}if(null!=e.attributes.texCoord0){const t=h(2*r),{typedBuffer:o,typedBufferStride:n}=e.attributes.texCoord0;(0,v.n)(t,o,2,n),l.push([Ee.r.UV0,new B.n(t,i,2,!0)])}if(null!=e.attributes.color){const t=new Uint8Array(4*r);4===e.attributes.color.elementCount?e.attributes.color instanceof m.Eq?(0,p.s)(t,e.attributes.color,255):e.attributes.color instanceof m.XP?(0,_.c)(t,e.attributes.color):e.attributes.color instanceof m.Uz&&(0,p.s)(t,e.attributes.color,1/256):(t.fill(255),e.attributes.color instanceof m.xs?(0,f.s)(t,e.attributes.color,255,4):e.attributes.color instanceof m.eI?(0,g.c)(t,e.attributes.color.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof m.nS&&(0,f.s)(t,e.attributes.color,1/256,4)),l.push([Ee.r.COLOR,new B.n(t,i,4,!0)])}return{geometry:new z.V(t,l),vertexCount:r}}(e,null!=i?i:new St({})),M=a.boundingInfo;null!=M&&0===E&&((0,d.iT)(T,M.bbMin),(0,d.iT)(T,M.bbMax)),null!=i&&(w.stageResources.geometries.push(a),w.numberOfVertices+=x)})),y||a.push(w)})),{engineResources:a,referenceBoundingBox:T}}(n,w,C,t.skipHighLods&&null==r.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:r.specifiedLodIndex});return{lods:O,referenceBoundingBox:I,isEsriSymbolResource:n.meta.isEsriSymbolResource,isWosr:!1}}const kt=(0,n.a)()},55623:(e,t,r)=>{r.d(t,{k5:()=>i});var i;r(92504);!function(e){e[e.Multiply=1]="Multiply",e[e.Ignore=2]="Ignore",e[e.Replace=3]="Replace",e[e.Tint=4]="Tint"}(i||(i={}))},11110:(e,t,r)=>{r.d(t,{BP:()=>l,l5:()=>c});var i=r(57813),o=r(32846),n=r(58947);class a{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const r of e.fields.keys()){const t=e.fields.get(r);this[r]=new t.constructor(this.buffer,t.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const r=this[e];return r&&r.elementCount===t.ElementCount&&r.elementType===t.ElementType?r:null}slice(e,t){return new a(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t=0,r=0,i=e.count){const o=this.stride;if(o%4==0){const n=new Uint32Array(e.buffer,t*o,i*o/4);new Uint32Array(this.buffer,r*o,i*o/4).set(n)}else{const n=new Uint8Array(e.buffer,t*o,i*o);new Uint8Array(this.buffer,r*o,i*o).set(n)}return this}get usedMemory(){return this.byteLength}dispose(){}}class s{constructor(e=null){this._stride=0,this._lastAligned=0,this._fields=new Map,e&&(this._stride=e.stride,e.fields.forEach((e=>this._fields.set(e[0],{...e[1],constructor:h(e[1].constructor)}))))}vec2f(e,t){return this._appendField(e,i.gH,t),this}vec2f64(e,t){return this._appendField(e,i.si,t),this}vec3f(e,t){return this._appendField(e,i.xs,t),this}vec3f64(e,t){return this._appendField(e,i.Xm,t),this}vec4f(e,t){return this._appendField(e,i.Eq,t),this}vec4f64(e,t){return this._appendField(e,i.Aj,t),this}mat3f(e,t){return this._appendField(e,i.jZ,t),this}mat3f64(e,t){return this._appendField(e,i.j0,t),this}mat4f(e,t){return this._appendField(e,i.Sx,t),this}mat4f64(e,t){return this._appendField(e,i.E$,t),this}vec4u8(e,t){return this._appendField(e,i.XP,t),this}f32(e,t){return this._appendField(e,i.Y$,t),this}f64(e,t){return this._appendField(e,i.qB,t),this}u8(e,t){return this._appendField(e,i.SL,t),this}u16(e,t){return this._appendField(e,i.h,t),this}i8(e,t){return this._appendField(e,i.bf,t),this}vec2i8(e,t){return this._appendField(e,i.D6,t),this}vec2i16(e,t){return this._appendField(e,i.mJ,t),this}vec2u8(e,t){return this._appendField(e,i.LC,t),this}vec4u16(e,t){return this._appendField(e,i.Uz,t),this}u32(e,t){return this._appendField(e,i.P,t),this}_appendField(e,t,r){if(this._fields.has(e))return void(0,n.vA)(!1,`${e} already added to vertex buffer layout`);const i=t.ElementCount*(0,o.GJ)(t.ElementType),a=this._stride;this._stride+=i,this._fields.set(e,{size:i,constructor:t,offset:a,optional:r})}createBuffer(e){return new a(this,e)}createView(e){return new a(this,e)}clone(){const e=new s;return e._stride=this._stride,e._fields=new Map,this._fields.forEach(((t,r)=>e._fields.set(r,t))),e.BufferType=this.BufferType,e}get stride(){if(this._lastAligned!==this._fields.size){let e=1;this._fields.forEach((t=>e=Math.max(e,(0,o.GJ)(t.constructor.ElementType)))),this._stride=Math.floor((this._stride+e-1)/e)*e,this._lastAligned=this._fields.size}return this._stride}get fields(){return this._fields}}function l(){return new s}class c{constructor(e){this.fields=new Array,e.fields.forEach(((e,t)=>{const r={...e,constructor:u(e.constructor)};this.fields.push([t,r])})),this.stride=e.stride}}const d=[i.Y$,i.gH,i.xs,i.Eq,i.jZ,i.Sx,i.qB,i.si,i.Xm,i.Aj,i.j0,i.E$,i.SL,i.LC,i.eI,i.XP,i.h,i.Yi,i.nS,i.Uz,i.P,i.An,i.H$,i.ml,i.bf,i.D6,i.m8,i.TX,i.Qt,i.mJ,i.Vp,i.E7,i.My,i.UL,i.zD,i.Y4];function u(e){return`${e.ElementType}_${e.ElementCount}`}function h(e){return m.get(e)}const m=new Map;d.forEach((e=>m.set(u(e),e)))},29709:(e,t,r)=>{r.d(t,{gm:()=>u,vt:()=>d});r(46615);var i=r(76287),o=r(76743),n=r(46991),a=r(21839),s=r(22279),l=(r(25102),r(52712)),c=(r(4675),r(80530),r(10714));r(70807);(0,n.a)(),(0,s.c)(),(0,s.c)(),(0,l.c)(),(0,i.a)();function d(e=[0,0,0],t=[-1,-1,-1],r=(0,n.a)()){return{center:(0,s.g)(e),halfSize:(0,s.g)(t),quaternion:(0,n.b)(r)}}(()=>{const e=new Int8Array(162);let t=0;const r=r=>{for(let i=0;i<r.length;i++)e[t+i]=r[i];t+=6};r([6,2,3,1,5,4]),r([0,2,3,1,5,4]),r([0,2,3,7,5,4]),r([0,1,3,2,6,4]),r([0,1,3,2,0,0]),r([0,1,5,7,3,2]),r([0,1,3,7,6,4]),r([0,1,3,7,6,2]),r([0,1,5,7,6,2]),r([0,1,5,4,6,2]),r([0,1,5,4,0,0]),r([0,1,3,7,5,4]),r([0,2,6,4,0,0]),r([0,0,0,0,0,0]),r([1,3,7,5,0,0]),r([2,3,7,6,4,0]),r([2,3,7,6,0,0]),r([2,3,1,5,7,6]),r([0,1,5,7,6,2]),r([0,1,5,7,6,4]),r([0,1,3,7,6,4]),r([4,5,7,6,2,0]),r([4,5,7,6,0,0]),r([4,5,1,3,7,6]),r([0,2,3,7,5,4]),r([6,2,3,7,5,4]),r([6,2,3,1,5,4])})();function u(e,t,r,i,n){if((0,o.c)(n.quaternion,e.quaternion),i===c.RT.Global){(0,o.a)(p,e.quaternion),(0,a.v)(h,e.center,p),(0,a.w)(m,h),(0,a.x)(f,m,e.halfSize),(0,a.u)(f,m,f);const i=(0,a.l)(f);(0,a.g)(f,m,e.halfSize);const s=(0,a.l)(f);if(i<r)(0,a.c)(n.center,e.center),(0,a.s)(h,r,r,r),(0,a.g)(n.halfSize,e.halfSize,h);else{const o=s>0?1+t/s:1,l=i>0?1+r/i:1,c=(l+o)/2,d=(l-o)/2;(0,a.i)(n.halfSize,m,d),(0,a.q)(n.halfSize,n.halfSize,e.halfSize,c),(0,a.i)(n.center,m,c),(0,a.q)(n.center,n.center,e.halfSize,d),(0,a.z)(h,h),(0,a.A)(n.center,n.center,h),(0,a.v)(n.center,n.center,n.quaternion)}}else{const i=(0,a.s)(h,0,0,1);(0,a.q)(n.center,e.center,i,(r+t)/2),(0,o.a)(p,e.quaternion),(0,a.v)(i,i,p),(0,a.w)(i,i),(0,a.q)(n.halfSize,e.halfSize,i,(r-t)/2)}return n}const h=(0,s.c)(),m=(0,s.c)(),f=(0,s.c)(),p=(0,n.a)()},40641:(e,t,r)=>{r.d(t,{i$:()=>c,oD:()=>d,xJ:()=>l});var i=r(55274),o=r(16989),n=r(54473),a=r(99152);function s(e){e.varyings.add("linearDepth","float")}function l(e){e.vertex.uniforms.add(new n.G("nearFar",((e,t)=>t.camera.nearFar)))}function c(e){e.vertex.code.add(a.H`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function d(e,t){const{vertex:r}=e;switch(t.output){case i.V.Color:if(t.receiveShadows)return s(e),void r.code.add(a.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case i.V.Depth:case i.V.Shadow:case i.V.ShadowHighlight:case i.V.ShadowExcludeHighlight:return e.include(o.em,t),s(e),l(e),c(e),void r.code.add(a.H`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(a.H`void forwardLinearDepth() {}`)}},26163:(e,t,r)=>{r.d(t,{M:()=>o});var i=r(99152);function o(e){e.vertex.code.add(i.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},16961:(e,t,r)=>{r.d(t,{c:()=>n});var i=r(99152),o=r(50645);function n(e,t=!0){e.attributes.add(o.r.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.code.add(i.H`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?i.H`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}},55274:(e,t,r)=>{var i;r.d(t,{V:()=>i}),function(e){e[e.Color=0]="Color",e[e.Depth=1]="Depth",e[e.Normal=2]="Normal",e[e.Shadow=3]="Shadow",e[e.ShadowHighlight=4]="ShadowHighlight",e[e.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",e[e.Highlight=6]="Highlight",e[e.Alpha=7]="Alpha",e[e.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",e[e.CompositeColor=9]="CompositeColor",e[e.COUNT=10]="COUNT"}(i||(i={}))},1110:(e,t,r)=>{r.d(t,{HQ:()=>c});var i=r(37046),o=r(56192),n=r(21839),a=r(22279),s=r(13501),l=(r(60840),r(99152));l.Y;function c(e,t){d(e,t,new s.W("slicePlaneOrigin",((e,r)=>f(t,e,r))),new s.W("slicePlaneBasis1",((e,r)=>p(t,e,r,r.slicePlane?.basis1))),new s.W("slicePlaneBasis2",((e,r)=>p(t,e,r,r.slicePlane?.basis2))))}function d(e,t,...r){if(!t.hasSlicePlane){const r=l.H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(r),void e.fragment.code.add(r)}t.hasSliceInVertexProgram&&e.vertex.uniforms.add(...r),e.fragment.uniforms.add(...r);const i=l.H`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,o=l.H`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,n=t.hasSliceHighlight?l.H`
        ${o}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:l.H`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.code.add(i),e.fragment.code.add(i),e.fragment.code.add(n)}function u(e,t,r){return e.instancedDoublePrecision?(0,n.s)(v,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function h(e,t){return null!=e?(0,n.f)(g,t.origin,e):t.origin}function m(e,t,r){return e.hasSliceTranslatedView?null!=t?(0,i.w)(x,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function f(e,t,r){if(null==r.slicePlane)return a.Z;const i=u(e,t,r),o=h(i,r.slicePlane),s=m(e,i,r);return null!=s?(0,n.e)(g,o,s):o}function p(e,t,r,i){if(null==i||null==r.slicePlane)return a.Z;const o=u(e,t,r),s=h(o,r.slicePlane),l=m(e,o,r);return null!=l?((0,n.g)(_,i,s),(0,n.e)(g,s,l),(0,n.e)(_,_,l),(0,n.f)(_,_,g)):i}const v=(0,a.c)(),g=(0,a.c)(),_=(0,a.c)(),x=(0,o.a)()},66012:(e,t,r)=>{r.d(t,{d:()=>n});var i=r(40641),o=r(99152);function n(e){(0,i.i$)(e),e.vertex.code.add(o.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(o.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},24682:(e,t,r)=>{r.d(t,{BK:()=>b,nW:()=>x});var i=r(66866),o=r(46615),n=r(76287),a=r(56192),s=r(21839),l=r(22279),c=r(55274),d=r(10470),u=r(63592),h=r(13501),m=r(99152),f=r(6561),p=r(20778),v=r(69948),g=r(50645),_=r(76698);class x extends v.K{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}}(0,i._)([(0,v.W)()],x.prototype,"instancedDoublePrecision",void 0),(0,i._)([(0,v.W)()],x.prototype,"hasModelTransformation",void 0);m.Y;const T=(0,n.a)();function b(e,t){const r=t.hasModelTransformation,i=t.instancedDoublePrecision;r&&(e.vertex.uniforms.add(new p.X("model",(e=>e.modelTransformation??a.I))),e.vertex.uniforms.add(new f.k("normalLocalOriginFromModel",(e=>((0,o.n)(T,e.modelTransformation??a.I),T))))),t.instanced&&i&&(e.attributes.add(g.r.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(g.r.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(g.r.INSTANCEMODEL,"mat3"),e.attributes.add(g.r.INSTANCEMODELNORMAL,"mat3"));const n=e.vertex;i&&(n.include(d.u,t),n.uniforms.add(new h.W("viewOriginHi",((e,t)=>(0,_.Zo)((0,s.s)(A,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),A))),new h.W("viewOriginLo",((e,t)=>(0,_.jA)((0,s.s)(A,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),A))))),n.code.add(m.H`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?i?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":i?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${i?m.H`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),n.code.add(m.H`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?i?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":i?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),t.output===c.V.Normal&&((0,u.S7)(n),n.code.add(m.H`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?i?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":i?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),t.hasVertexTangents&&n.code.add(m.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?i?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":i?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const A=(0,l.c)()},81283:(e,t,r)=>{r.d(t,{W:()=>i,Y:()=>s});var i,o=r(73345),n=r(99152),a=r(50645);function s(e,t){switch(t.normalType){case i.Compressed:e.attributes.add(a.r.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(n.H`vec3 normalModel() {
float z = 1.0 - abs(normalCompressed.x) - abs(normalCompressed.y);
return vec3(normalCompressed + sign(normalCompressed) * min(z, 0.0), z);
}`);break;case i.Attribute:e.attributes.add(a.r.NORMAL,"vec3"),e.vertex.code.add(n.H`vec3 normalModel() {
return normal;
}`);break;case i.ScreenDerivative:e.fragment.code.add(n.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,o.Xb)(t.normalType);case i.COUNT:case i.Ground:}}!function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"}(i||(i={}))},99915:(e,t,r)=>{r.d(t,{I:()=>n});var i=r(99152),o=r(50645);function n(e){e.attributes.add(o.r.POSITION,"vec3"),e.vertex.code.add(i.H`vec3 positionModel() { return position; }`)}},67691:(e,t,r)=>{r.d(t,{K:()=>c});var i=r(55623),o=r(99152);function n(e){e.vertex.code.add(o.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${o.H.int(i.k5.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${o.H.int(i.k5.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${o.H.int(i.k5.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${o.H.int(i.k5.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}var a=r(3445),s=r(50645),l=r(19647);function c(e,t){t.hasSymbolColors?(e.include(n),e.attributes.add(s.r.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(o.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new a.c("colorMixMode",(e=>l.Um[e.colorMixMode]))),e.vertex.code.add(o.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},26139:(e,t,r)=>{r.d(t,{U:()=>s,q:()=>i});var i,o=r(73345),n=r(99152),a=r(50645);function s(e,t){switch(t.textureCoordinateType){case i.Default:return e.attributes.add(a.r.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(n.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case i.Compressed:return e.attributes.add(a.r.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(n.H`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case i.Atlas:return e.attributes.add(a.r.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(a.r.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(n.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:(0,o.Xb)(t.textureCoordinateType);case i.None:return void e.vertex.code.add(n.H`void forwardTextureCoordinates() {}`);case i.COUNT:return}}!function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT"}(i||(i={}))},39739:(e,t,r)=>{r.d(t,{c:()=>n});var i=r(99152),o=r(50645);function n(e,t){t.hasVertexColors?(e.attributes.add(o.r.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(i.H`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(i.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(i.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},82089:(e,t,r)=>{r.d(t,{Mh:()=>u,Zo:()=>h,gy:()=>m});var i=r(73345),o=r(76287),n=r(52712),a=r(81283),s=r(16989),l=r(99152),c=r(8376),d=r(6561);function u(e,t){switch(t.normalType){case a.W.Attribute:case a.W.Compressed:e.include(a.Y,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new c.h("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new d.k("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))),e.vertex.code.add(l.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case a.W.Ground:e.include(s.em,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(l.H`
        void forwardNormal() {
          vNormalWorld = ${t.spherical?l.H`normalize(vPositionWorldCameraRelative);`:l.H`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case a.W.ScreenDerivative:e.vertex.code.add(l.H`void forwardNormal() {}`);break;default:(0,i.Xb)(t.normalType);case a.W.COUNT:}}class h extends s.dO{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,o.a)()}}class m extends s.EM{constructor(){super(...arguments),this.transformNormalGlobalFromModel=(0,o.a)(),this.toMapSpace=(0,n.c)()}}},16989:(e,t,r)=>{r.d(t,{EM:()=>v,dO:()=>p,em:()=>f});var i=r(76287),o=r(56192),n=r(22279),a=r(99915),s=r(10470),l=r(13501),c=r(60840),d=r(99152),u=r(8376),h=r(6561),m=r(20778);function f(e,t){e.include(a.I);const r=e.vertex;r.include(s.u,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add(new c.t("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new c.t("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new h.k("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new m.X("transformProjFromView",(e=>e.transformProjFromView)),new u.h("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new l.W("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new l.W("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))),r.code.add(d.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(d.H`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?d.H`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:d.H`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new c.t("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL))),r.code.add(d.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(d.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class p extends d.Y{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,n.c)(),this.transformWorldFromViewTL=(0,n.c)(),this.transformViewFromCameraRelativeRS=(0,i.a)(),this.transformProjFromView=(0,o.a)()}}class v extends d.Y{constructor(){super(...arguments),this.transformWorldFromModelRS=(0,i.a)(),this.transformWorldFromModelTH=(0,n.c)(),this.transformWorldFromModelTL=(0,n.c)()}}},81783:(e,t,r)=>{r.d(t,{r:()=>s});var i=r(73345),o=r(26139),n=r(99152);function a(e){e.fragment.code.add(n.H`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function s(e,t){switch(e.include(o.U,t),t.textureCoordinateType){case o.q.Default:case o.q.Compressed:return void e.fragment.code.add(n.H`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case o.q.Atlas:return e.include(a),void e.fragment.code.add(n.H`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:(0,i.Xb)(t.textureCoordinateType);case o.q.None:case o.q.COUNT:return}}},80333:(e,t,r)=>{r.d(t,{G:()=>f});var i=r(25102),o=r(52712),n=r(21839),a=r(22279),s=r(60840),l=r(99152);function c(e){e.vertex.code.add(l.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(l.H`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add(l.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(l.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(l.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(l.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function d(e){return(0,n.s)(u,e.parameters.divisor,e.parameters.offset,e.minScaleFactor)}const u=(0,a.c)();var h=r(63592),m=r(1411);function f(e,t){const r=e.vertex;t.hasVerticalOffset?(function(e){e.uniforms.add(new m.E("verticalOffset",((e,t)=>{const{minWorldLength:r,maxWorldLength:o,screenLength:n}=e.verticalOffset,a=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),s=t.camera.pixelRatio||1;return(0,i.s)(p,n*s,a,r,o)})))}(r),t.hasScreenSizePerspective&&(e.include(c),function(e){e.uniforms.add(new s.t("screenSizePerspectiveAlignment",(e=>d(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}(r),(0,h.yu)(e.vertex,t)),r.code.add(l.H`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?l.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:l.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?l.H`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:l.H`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(l.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const p=(0,o.c)()},16045:(e,t,r)=>{r.d(t,{E:()=>S});var i=r(40641),o=r(55274),n=r(1110),a=r(66012),s=r(81283),l=r(99152),c=r(50645);function d(e,t){const r=t.output===o.V.ObjectAndLayerIdColor,i=t.objectAndLayerIdColorInstanced;r&&(e.varyings.add("objectAndLayerIdColorVarying","vec4"),i?e.attributes.add(c.r.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):e.attributes.add(c.r.OBJECTANDLAYERIDCOLOR,"vec4")),e.vertex.code.add(l.H`
     void forwardObjectAndLayerIdColor() {
      ${r?i?l.H`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:l.H`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:l.H``} }`),e.fragment.code.add(l.H`
      void outputObjectAndLayerIdColor() {
        ${r?l.H`fragColor = objectAndLayerIdColorVarying;`:l.H``} }`)}var u=r(26139),h=r(82089),m=r(4969),f=r(70224);function p(e,t){switch(t.output){case o.V.Shadow:case o.V.ShadowHighlight:case o.V.ShadowExcludeHighlight:e.fragment.include(m.U),e.fragment.code.add(l.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`);break;case o.V.Depth:e.fragment.include(f.W),e.fragment.code.add(l.H`void outputDepth(float _linearDepth) {
fragColor = float2rgba(_linearDepth);
}`)}}var v=r(52712),g=r(79856);const _=(0,v.f)(1,1,0,1),x=(0,v.f)(1,0,1,1);function T(e){e.fragment.uniforms.add(new g.N("depthTexture",((e,t)=>t.mainDepth))),e.fragment.constants.add("occludedHighlightFlag","vec4",_).add("unoccludedHighlightFlag","vec4",x),e.fragment.code.add(l.H`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}var b=r(71389),A=r(29724),E=r(63592),y=r(91013);function S(e,t){const{vertex:r,fragment:c}=e,m=t.hasColorTexture&&t.alphaDiscardMode!==y.sf.Opaque;switch(t.output){case o.V.Depth:case o.V.Shadow:case o.V.ShadowHighlight:case o.V.ShadowExcludeHighlight:case o.V.ObjectAndLayerIdColor:(0,E.NB)(r,t),e.include(a.d,t),e.include(u.U,t),e.include(b.A,t),e.include(p,t),e.include(n.HQ,t),e.include(d,t),(0,i.xJ)(e),e.varyings.add("depth","float"),m&&c.uniforms.add(new g.N("tex",(e=>e.texture))),r.code.add(l.H`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),e.include(A.S,t),c.code.add(l.H`
          void main(void) {
            discardBySlice(vpos);
            ${m?l.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?l.H`colorUV`:l.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===o.V.ObjectAndLayerIdColor?l.H`outputObjectAndLayerIdColor();`:l.H`outputDepth(depth);`}
          }
        `);break;case o.V.Normal:{(0,E.NB)(r,t),e.include(a.d,t),e.include(s.Y,t),e.include(h.Mh,t),e.include(u.U,t),e.include(b.A,t),m&&c.uniforms.add(new g.N("tex",(e=>e.texture))),t.normalType===s.W.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const i=t.normalType===s.W.Attribute||t.normalType===s.W.Compressed;r.code.add(l.H`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${i?l.H`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:l.H`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),e.include(n.HQ,t),e.include(A.S,t),c.code.add(l.H`
          void main() {
            discardBySlice(vpos);
            ${m?l.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?l.H`colorUV`:l.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===s.W.ScreenDerivative?l.H`vec3 normal = screenDerivativeNormal(vPositionView);`:l.H`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case o.V.Highlight:(0,E.NB)(r,t),e.include(a.d,t),e.include(u.U,t),e.include(b.A,t),m&&c.uniforms.add(new g.N("tex",(e=>e.texture))),r.code.add(l.H`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(n.HQ,t),e.include(A.S,t),e.include(T,t),c.code.add(l.H`
          void main() {
            discardBySlice(vpos);
            ${m?l.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?l.H`colorUV`:l.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}},67726:(e,t,r)=>{r.d(t,{D:()=>n});var i=r(70224),o=r(99152);function n(e){e.include(i.W),e.code.add(o.H`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromRGBA(vec4 depth, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(depth), nearFar);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTex, 0)));
return linearDepthFromRGBA(texelFetch(depthTex, iuv, 0), nearFar);
}`)}},76080:(e,t,r)=>{r.d(t,{W:()=>u});var i=r(26139),o=r(81783),n=r(46971),a=r(99152),s=r(52293),l=r(79856),c=r(57198),d=r(50645);function u(e,t){const r=e.fragment;t.hasVertexTangents?(e.attributes.add(d.r.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===n.W.WindingOrder?r.code.add(a.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(a.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):r.code.add(a.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`),t.textureCoordinateType!==i.q.None&&(e.include(o.r,t),r.uniforms.add(t.pbrTextureBindType===c.c.Pass?new l.N("normalTexture",(e=>e.textureNormal)):new s.o("normalTexture",(e=>e.textureNormal))),r.code.add(a.H`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;
return tangentSpace * rawNormal;
}`))}},26011:(e,t,r)=>{r.d(t,{n:()=>J});var i=r(99152),o=r(79856),n=r(66866),a=r(6267),s=r(85251),l=r(60882),c=r(21564),d=(r(73446),r(85569),r(39831),r(63863)),u=r(58680);r(40210);r(63678);var h,m=r(41746),f=(r(84852),r(74416),r(94669)),p=r(6940),v=r(45758);!function(e){e[e.RED=0]="RED",e[e.RG=1]="RG",e[e.RGBA4=2]="RGBA4",e[e.RGBA=3]="RGBA",e[e.RGBA_MIPMAP=4]="RGBA_MIPMAP",e[e.R16F=5]="R16F",e[e.RGBA16F=6]="RGBA16F"}(h||(h={}));const g=new v.R;g.pixelFormat=m.Ab.RED,g.internalFormat=m.H0.R8,g.wrapMode=m.pF.CLAMP_TO_EDGE;const _=new v.R;_.pixelFormat=m.Ab.RG,_.internalFormat=m.H0.RG8,_.wrapMode=m.pF.CLAMP_TO_EDGE;const x=new v.R;x.internalFormat=m.H0.RGBA4,x.dataType=m.ld.UNSIGNED_SHORT_4_4_4_4,x.wrapMode=m.pF.CLAMP_TO_EDGE;const T=new v.R;T.wrapMode=m.pF.CLAMP_TO_EDGE;const b=new v.R;b.wrapMode=m.pF.CLAMP_TO_EDGE,b.samplingMode=m.Cj.LINEAR_MIPMAP_LINEAR,b.hasMipmap=!0,b.maxAnisotropy=8;const A=new v.R;A.pixelFormat=m.Ab.RED,A.dataType=m.ld.HALF_FLOAT,A.internalFormat=m.H0.R16F,A.samplingMode=m.Cj.NEAREST;const E=new v.R;E.dataType=m.ld.HALF_FLOAT,E.internalFormat=m.H0.RGBA16F,E.samplingMode=m.Cj.NEAREST;h.RED,h.RG,h.RGBA4,h.RGBA,h.RGBA_MIPMAP,h.R16F,h.RGBA16F;var y;!function(e){e[e.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",e[e.DEPTH_STENCIL_BUFFER=1]="DEPTH_STENCIL_BUFFER",e[e.DEPTH24_BUFFER=2]="DEPTH24_BUFFER",e[e.DEPTH16_BUFFER=3]="DEPTH16_BUFFER"}(y||(y={}));const S=new v.R;S.pixelFormat=m.Ab.DEPTH_STENCIL,S.dataType=m.ld.UNSIGNED_INT_24_8,S.samplingMode=m.Cj.NEAREST,S.wrapMode=m.pF.CLAMP_TO_EDGE;y.DEPTH_STENCIL_TEXTURE,y.DEPTH_STENCIL_BUFFER,new f.q(m.yQ.DEPTH24_STENCIL8,4),y.DEPTH24_BUFFER,new f.q(m.yQ.DEPTH_COMPONENT24,4),y.DEPTH16_BUFFER,new f.q(m.yQ.DEPTH_COMPONENT16,4);var w=r(52495),M=r(55274);const C={required:[]},O=(M.V.Depth,M.V.CompositeColor,M.V.Highlight,{required:[M.V.Depth,M.V.Normal]});class I extends w.A{consumes(){return C}get usedMemory(){return 0}get isDecoration(){return!1}get running(){return!1}}class R extends I{}var N=r(47705),L=r(33444),P=r(13148),H=r(58123),D=r(45789),F=r(2449);class B extends L.w{initializeProgram(e){return new H.B(e.rctx,B.shader.get().build(),P.D)}initializePipeline(){return(0,F.Ey)({colorWrite:F.wE})}}B.shader=new N.$(D.S,(()=>r.e(3513).then(r.bind(r,13513))));var G=r(78286);class z extends i.Y{constructor(){super(...arguments),this.projScale=1}}class V extends z{constructor(){super(...arguments),this.intensity=1}}class W extends i.Y{}class U extends W{constructor(){super(...arguments),this.blurSize=(0,G.a)()}}var j=r(51522);class k extends L.w{initializeProgram(e){return new H.B(e.rctx,k.shader.get().build(),P.D)}initializePipeline(){return(0,F.Ey)({colorWrite:F.wE})}}k.shader=new N.$(j.S,(()=>r.e(350).then(r.bind(r,30350))));var q;r(40695);!function(e){e[e.Antialiasing=0]="Antialiasing",e[e.HighQualityTransparency=1]="HighQualityTransparency",e[e.HighResolutionVoxel=2]="HighResolutionVoxel",e[e.HighResolutionAtmosphere=3]="HighResolutionAtmosphere",e[e.SSAO=4]="SSAO",e[e.WaterReflection=5]="WaterReflection",e[e.HighResolutionShadows=6]="HighResolutionShadows",e[e.PhysicalPixelRendering=7]="PhysicalPixelRendering"}(q||(q={}));var $=r(38323);const X=2;let Y=class extends R{constructor(e){super(e),this._context=null,this._passParameters=new V,this._drawParameters=new U,this.produces=new Map([[$.N.SSAO,()=>this._produces()]])}_produces(){return null!=this._enableTime&&null!=this._context}consumes(){return this._produces()?O:C}initializeRenderContext(e){this._context=e,this.addHandles([(0,s.wB)((()=>this.view.qualitySettings.ambientOcclusion||this._context?.isFeatureEnabled(q.SSAO)),(e=>e?this._enable():this._disable()),s.pc)])}uninitializeRenderContext(){this._disable(),this._context=null}_disable(){this._passParameters.noiseTexture=(0,a.WD)(this._passParameters.noiseTexture),this._enableTime=null}destroy(){this._disable()}_enable(){if(null!=this._enableTime||!this._context)return;const e=Uint8Array.from(atob("eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM"),(e=>e.charCodeAt(0))),t=new v.R;t.wrapMode=m.pF.CLAMP_TO_EDGE,t.pixelFormat=m.Ab.RGB,t.wrapMode=m.pF.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new p.g(this._context.renderContext.rctx,t,e),null==this._ssaoTechnique&&(this._ssaoTechnique=this._context.techniqueRepository.acquire(k)),null==this._blurTechnique&&(this._blurTechnique=this._context.techniqueRepository.acquire(B)),this._enableTime=(0,l.l5)(0),this._context?.requestRender()}renderNode(e,t,r){const i=e.bindParameters,o=i.linearDepth?.colorTexture,n=r?.normal?.colorTexture;if(null==this._enableTime||null==this._context||null==o||!n)return;if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=e.time,void this._context.requestRender();0===this._enableTime&&(this._enableTime=e.time);const a=e.rctx,s=i.camera,l=this.view.qualitySettings.fadeDuration,c=l>0?Math.min(l,e.time-this._enableTime)/l:1;this._passParameters.normalTexture=n,this._passParameters.depthTexture=o,this._passParameters.projScale=1/s.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*Z/(0,j.g)(s)**6*c;const d=s.fullViewport[2],f=s.fullViewport[3],p=Math.round(d/X),v=Math.round(f/X),g=this._context.fbos,_=g.acquire(h.RED,d,f);a.bindFramebuffer(_.fbo),a.setViewport(0,0,d,f),a.bindTechnique(this._ssaoTechnique,this._passParameters,i).bindDraw(this._drawParameters,i,this._passParameters),a.screen.draw();const x=a.bindTechnique(this._blurTechnique,this._passParameters,i);a.setViewport(0,0,p,v);const T=g.acquire(h.RED,p,v);a.bindFramebuffer(T.fbo),this._drawParameters.colorTexture=_.colorTexture,(0,u.s)(this._drawParameters.blurSize,0,X/f),x.bindDraw(this._drawParameters,i,this._passParameters),a.setViewport(0,0,p,v),a.screen.draw(),_.release();const b=g.acquire(h.RED,p,v);return a.bindFramebuffer(b.fbo),a.setViewport(0,0,d,f),a.setClearColor(1,1,1,0),a.clear(m.hn.COLOR_BUFFER_BIT),a.setViewport(0,0,p,v),this._drawParameters.colorTexture=T.colorTexture,(0,u.s)(this._drawParameters.blurSize,X/d,0),x.bindDraw(this._drawParameters,i,this._passParameters),a.screen.draw(),a.setViewport4fv(s.fullViewport),T.release(),c<1&&this._context.requestRender(),b}};(0,n._)([(0,c.MZ)({constructOnly:!0})],Y.prototype,"view",void 0),(0,n._)([(0,c.MZ)()],Y.prototype,"_context",void 0),Y=(0,n._)([(0,d.$)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],Y);const Z=.5;function J(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add(new o.N("ssaoTex",((e,t)=>t.ssao?.colorTexture))),r.constants.add("blurSizePixelsInverse","float",1/X),r.code.add(i.H`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add(i.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},21549:(e,t,r)=>{r.d(t,{kA:()=>w,a8:()=>y,eU:()=>S});var i=r(73345),o=r(21839),n=r(22279),a=r(25102),s=r(52712),l=r(39486),c=r(60840),d=r(1411),u=r(99152);function h(e,t){const r=e.fragment,i=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===i?(r.uniforms.add(new c.t("lightingAmbientSH0",((e,t)=>(0,o.s)(m,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===i?(r.uniforms.add(new d.E("lightingAmbientSH_R",((e,t)=>(0,a.s)(f,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new d.E("lightingAmbientSH_G",((e,t)=>(0,a.s)(f,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new d.E("lightingAmbientSH_B",((e,t)=>(0,a.s)(f,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):2===i&&(r.uniforms.add(new c.t("lightingAmbientSH0",((e,t)=>(0,o.s)(m,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new d.E("lightingAmbientSH_R1",((e,t)=>(0,a.s)(f,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new d.E("lightingAmbientSH_G1",((e,t)=>(0,a.s)(f,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new d.E("lightingAmbientSH_B1",((e,t)=>(0,a.s)(f,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new d.E("lightingAmbientSH_R2",((e,t)=>(0,a.s)(f,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new d.E("lightingAmbientSH_G2",((e,t)=>(0,a.s)(f,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new d.E("lightingAmbientSH_B2",((e,t)=>(0,a.s)(f,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),t.pbrMode!==l.A9.Normal&&t.pbrMode!==l.A9.Schematic||r.code.add(u.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const m=(0,n.c)(),f=(0,s.c)();var p=r(26011),v=r(696),g=r(17666),_=r(66579),x=r(99198),T=r(57198);class b extends x.n{constructor(e,t){super(e,"bool",T.c.Pass,((r,i,o)=>r.setUniform1b(e,t(i,o))))}}var A=r(35449);r(92504);(0,n.c)();const E=.4;(0,n.c)();function y(e){e.constants.add("ambientBoostFactor","float",E)}function S(e){e.uniforms.add(new A.m("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function w(e,t){const r=e.fragment;switch(e.include(p.n,t),t.pbrMode!==l.A9.Disabled&&e.include(g.c,t),e.include(h,t),e.include(_.p),r.code.add(u.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===l.A9.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),y(r),S(r),(0,v.Gc)(r),r.code.add(u.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?u.H`normalize(vPosWorld)`:u.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,v.O4)(r),r.code.add(u.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case l.A9.Disabled:case l.A9.WaterOnIntegratedMesh:case l.A9.Water:e.include(v.qU),r.code.add(u.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case l.A9.Normal:case l.A9.Schematic:r.code.add(u.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(u.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?r.uniforms.add(new b("hasFillLights",((e,t)=>t.enableFillLights))):r.constants.add("hasFillLights","bool",!1),r.code.add(u.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new A.m("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new A.m("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))),r.code.add(u.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(u.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission == vec3(0.0) ? _emission : pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==l.A9.Schematic||t.hasColorTexture?u.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:u.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case l.A9.Terrain:case l.A9.TerrainWithWater:e.include(v.qU),r.code.add(u.H`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluateTerrainLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
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
}`);break;default:(0,i.Xb)(t.pbrMode);case l.A9.COUNT:}}},696:(e,t,r)=>{r.d(t,{Gc:()=>n,O4:()=>a,qU:()=>s});var i=r(60840),o=r(99152);function n(e){e.uniforms.add(new i.t("mainLightDirection",((e,t)=>t.lighting.mainLight.direction)))}function a(e){e.uniforms.add(new i.t("mainLightIntensity",((e,t)=>t.lighting.mainLight.intensity)))}function s(e){n(e.fragment),a(e.fragment),e.fragment.code.add(o.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}},80600:(e,t,r)=>{r.d(t,{Q:()=>s});var i=r(67726),o=r(54473),n=r(99152),a=r(79856);function s(e,t){if(!t.multipassEnabled)return;e.fragment.include(i.D),e.fragment.uniforms.add(new a.N("terrainDepthTexture",((e,t)=>t.multipassTerrain.linearDepth?.colorTexture))),e.fragment.uniforms.add(new o.G("nearFar",((e,t)=>t.camera.nearFar)));const r=t.occlusionPass;e.fragment.code.add(n.H`
   ${r?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      vec4 data = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0);
      float linearDepth = linearDepthFromRGBA(data, nearFar);
      ${r?n.H`return fragmentDepth < linearDepth && data != vec4(0.0, 0.0, 0.0, 1.0);`:n.H`
          if(fragmentDepth ${t.cullAboveGround?">":"<="} linearDepth){
            discard;
          }`}
    }`)}},46971:(e,t,r)=>{r.d(t,{W:()=>i,r:()=>a});var i,o=r(73345),n=r(99152);function a(e,t){const r=e.fragment;switch(r.code.add(n.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case i.None:r.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case i.View:r.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case i.WindingOrder:r.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,o.Xb)(t.doubleSidedMode);case i.COUNT:}}!function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"}(i||(i={}))},17666:(e,t,r)=>{r.d(t,{c:()=>s});var i=r(99152);function o(e){const t=e.fragment.code;t.add(i.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(i.H`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(i.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var n=r(39486),a=r(66579);function s(e,t){const r=e.fragment.code;e.include(a.p),t.pbrMode!==n.A9.Normal&&t.pbrMode!==n.A9.Schematic&&t.pbrMode!==n.A9.Terrain&&t.pbrMode!==n.A9.TerrainWithWater||(r.add(i.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(i.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==n.A9.Normal&&t.pbrMode!==n.A9.Schematic||(e.include(o),r.add(i.H`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(i.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(i.H`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(i.H`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},39486:(e,t,r)=>{r.d(t,{A9:()=>i,_Z:()=>u});var i,o=r(81783),n=r(13501),a=r(60840),s=r(99152),l=r(52293),c=r(79856),d=r(57198);r(98174);!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Terrain=5]="Terrain",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT"}(i||(i={}));function u(e,t){const r=e.fragment,u=t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===i.Normal&&u&&e.include(o.r,t),t.pbrMode!==i.Schematic)if(t.pbrMode!==i.Disabled){if(t.pbrMode===i.Normal){r.code.add(s.H`vec3 mrr;
vec3 emission;
float occlusion;`);const e=t.pbrTextureBindType;t.hasMetallicRoughnessTexture&&(r.uniforms.add(e===d.c.Pass?new c.N("texMetallicRoughness",(e=>e.textureMetallicRoughness)):new l.o("texMetallicRoughness",(e=>e.textureMetallicRoughness))),r.code.add(s.H`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add(e===d.c.Pass?new c.N("texEmission",(e=>e.textureEmissive)):new l.o("texEmission",(e=>e.textureEmissive))),r.code.add(s.H`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add(e===d.c.Pass?new c.N("texOcclusion",(e=>e.textureOcclusion)):new l.o("texOcclusion",(e=>e.textureOcclusion))),r.code.add(s.H`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(s.H`float getBakedOcclusion() { return 1.0; }`),e===d.c.Pass?r.uniforms.add(new a.t("emissionFactor",(e=>e.emissiveFactor)),new a.t("mrrFactors",(e=>e.mrrFactors))):r.uniforms.add(new n.W("emissionFactor",(e=>e.emissiveFactor)),new n.W("mrrFactors",(e=>e.mrrFactors))),r.code.add(s.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${t.hasMetallicRoughnessTexture?s.H`applyMetallnessAndRoughness(${t.hasMetallicRoughnessTextureTransform?s.H`metallicRoughnessUV`:"vuv0"});`:""}

      ${t.hasEmissionTexture?s.H`applyEmission(${t.hasEmissiveTextureTransform?s.H`emissiveUV`:"vuv0"});`:""}

      ${t.hasOcclusionTexture?s.H`applyOcclusion(${t.hasOcclusionTextureTransform?s.H`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else r.code.add(s.H`float getBakedOcclusion() { return 1.0; }`);else r.code.add(s.H`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}},66579:(e,t,r)=>{r.d(t,{p:()=>o});var i=r(99152);function o(e){e.vertex.code.add(i.H`const float PI = 3.141592653589793;`),e.fragment.code.add(i.H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},64062:(e,t,r)=>{r.d(t,{Bz:()=>m,G:()=>h});r(56192),r(22279);var i=r(4969),o=r(1411),n=r(3445),a=r(99152),s=r(99198),l=r(57198);class c extends s.n{constructor(e,t,r){super(e,"mat4",l.c.Draw,((r,i,o,n)=>r.setUniformMatrix4fv(e,t(i,o,n))),r)}}class d extends s.n{constructor(e,t,r){super(e,"mat4",l.c.Pass,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))),r)}}var u=r(79856);a.Y;a.Y;function h(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new d("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),f(e))}function m(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new c("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),f(e))}function f(e){const t=e.fragment;t.include(i.U),t.uniforms.add(new u.N("shadowMapTex",((e,t)=>t.shadowMap.depthTexture)),new n.c("numCascades",((e,t)=>t.shadowMap.numCascades)),new o.E("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances))),t.code.add(a.H`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMapTex, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMapTex);
}`)}},25541:(e,t,r)=>{r.d(t,{MU:()=>l,O1:()=>c,QM:()=>d,Sx:()=>s,q2:()=>a});var i=r(21360),o=r(99152),n=r(6561);function a(e){e.vertex.uniforms.add(new n.k("colorTextureTransformMatrix",(e=>null!=e.colorTextureTransformMatrix?e.colorTextureTransformMatrix:(0,i.c)()))),e.varyings.add("colorUV","vec2"),e.vertex.code.add(o.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function s(e){e.vertex.uniforms.add(new n.k("normalTextureTransformMatrix",(e=>null!=e.normalTextureTransformMatrix?e.normalTextureTransformMatrix:(0,i.c)()))),e.varyings.add("normalUV","vec2"),e.vertex.code.add(o.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function l(e){e.vertex.uniforms.add(new n.k("emissiveTextureTransformMatrix",(e=>null!=e.emissiveTextureTransformMatrix?e.emissiveTextureTransformMatrix:(0,i.c)()))),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(o.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function c(e){e.vertex.uniforms.add(new n.k("occlusionTextureTransformMatrix",(e=>null!=e.occlusionTextureTransformMatrix?e.occlusionTextureTransformMatrix:(0,i.c)()))),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(o.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function d(e){e.vertex.uniforms.add(new n.k("metallicRoughnessTextureTransformMatrix",(e=>null!=e.metallicRoughnessTextureTransformMatrix?e.metallicRoughnessTextureTransformMatrix:(0,i.c)()))),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(o.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}},71389:(e,t,r)=>{r.d(t,{A:()=>b});var i=r(60840),o=r(99198),n=r(57198);class a extends o.n{constructor(e,t,r){super(e,"vec4",n.c.Pass,((r,i,o)=>r.setUniform4fv(e,t(i,o))),r)}}class s extends o.n{constructor(e,t,r){super(e,"float",n.c.Pass,((r,i,o)=>r.setUniform1fv(e,t(i,o))),r)}}var l=r(99152),c=r(6561),d=r(50645),u=(r(39831),r(92504),r(46615),r(76287),r(37046),r(56192)),h=(r(21839),r(22279)),m=(r(10301),r(66866)),f=r(52495),p=r(21564),v=(r(73446),r(85569),r(63863));let g=class extends f.A{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};(0,m._)([(0,p.MZ)()],g.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"DECONFLICTOR_SHOW_GRID",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"LABELS_SHOW_BORDER",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"TEXT_SHOW_BASELINE",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"TEXT_SHOW_BORDER",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"OVERLAY_SHOW_CENTER",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"SHOW_POI",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"I3S_TREE_SHOW_TILES",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"I3S_SHOW_MODIFICATIONS",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"LINE_WIREFRAMES",void 0),g=(0,m._)([(0,v.$)("esri.views.3d.support.DebugFlags")],g);new g;var _,x;!function(e){e[e.Undefined=0]="Undefined",e[e.DefinedSize=1]="DefinedSize",e[e.DefinedScale=2]="DefinedScale"}(_||(_={})),function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}(x||(x={}));l.Y;(0,u.a)(),(0,h.c)(),(0,u.a)();r(18429);const T=8;function b(e,t){const{vertex:r,attributes:o}=e;t.hasVvInstancing&&(t.vvSize||t.vvColor)&&o.add(d.r.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(r.uniforms.add(new i.t("vvSizeMinSize",(e=>e.vvSize.minSize))),r.uniforms.add(new i.t("vvSizeMaxSize",(e=>e.vvSize.maxSize))),r.uniforms.add(new i.t("vvSizeOffset",(e=>e.vvSize.offset))),r.uniforms.add(new i.t("vvSizeFactor",(e=>e.vvSize.factor))),r.uniforms.add(new c.k("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),r.uniforms.add(new i.t("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),r.code.add(l.H`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(l.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?l.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(l.H`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",T),r.uniforms.add(new s("vvColorValues",(e=>e.vvColor.values),T),new a("vvColorColors",(e=>e.vvColor.colors),T)),r.code.add(l.H`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${t.hasVvInstancing?l.H`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(l.H`vec4 vvColor() { return vec4(1.0); }`)}},33448:(e,t,r)=>{r.d(t,{H:()=>i,y:()=>o});const i=.1,o=.001},29724:(e,t,r)=>{r.d(t,{S:()=>c});var i=r(33448),o=r(99152);function n(e){e.fragment.code.add(o.H`
    #define discardOrAdjustAlpha(color) { if (color.a < ${o.H.float(i.y)}) { discard; } }
  `)}var a=r(99198);r(57198);a.n;var s=r(35449),l=r(91013);function c(e,t){d(e,t,new s.m("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function d(e,t,r){const i=e.fragment;switch(t.alphaDiscardMode!==l.sf.Mask&&t.alphaDiscardMode!==l.sf.MaskBlend||i.uniforms.add(r),t.alphaDiscardMode){case l.sf.Blend:return e.include(n);case l.sf.Opaque:i.code.add(o.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case l.sf.Mask:i.code.add(o.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case l.sf.MaskBlend:e.fragment.code.add(o.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}},1062:(e,t,r)=>{r.d(t,{Ir:()=>d});var i=r(58680),o=r(78286),n=r(25102),a=r(52712),s=r(54473),l=r(1411),c=r(99152);function d(e){e.fragment.uniforms.add(new l.E("projInfo",((e,t)=>function(e){const t=e.camera.projectionMatrix;return 0===t[11]?(0,n.s)(u,2/(e.camera.fullWidth*t[0]),2/(e.camera.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):(0,n.s)(u,-2/(e.camera.fullWidth*t[0]),-2/(e.camera.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}(t)))),e.fragment.uniforms.add(new s.G("zScale",((e,t)=>function(e){return 0===e.camera.projectionMatrix[11]?(0,i.s)(h,0,1):(0,i.s)(h,1,0)}(t)))),e.fragment.code.add(c.H`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}const u=(0,a.c)();const h=(0,o.a)()},10470:(e,t,r)=>{r.d(t,{u:()=>o});var i=r(99152);function o({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(i.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(i.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}},66676:(e,t,r)=>{r.d(t,{N:()=>a});var i=r(55623),o=r(99152);function n(e){e.code.add(o.H`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function a(e){e.include(n),e.code.add(o.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${o.H.int(i.k5.Multiply)}) {
        return allMixed;
      }
      if (mode == ${o.H.int(i.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${o.H.int(i.k5.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${o.H.int(i.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${o.H.int(i.k5.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},4969:(e,t,r)=>{r.d(t,{U:()=>o});var i=r(99152);function o(e){e.code.add(i.H`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}},70224:(e,t,r)=>{r.d(t,{W:()=>o});var i=r(99152);function o(e){e.code.add(i.H`const float MAX_RGBA_FLOAT =
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
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}},63592:(e,t,r)=>{r.d(t,{yu:()=>m,NB:()=>f,S7:()=>g});var i=r(37046),o=r(56192),n=r(21839),a=r(22279),s=r(13501),l=r(60840),c=(r(35449),r(99198)),d=r(57198);class u extends c.n{constructor(e,t){super(e,"mat4",d.c.Draw,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))))}}var h=r(20778);function m(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",a.Z):e.uniforms.add(new s.W("cameraPosition",((e,t)=>(0,n.s)(v,t.camera.viewInverseTransposeMatrix[3]-e.origin[0],t.camera.viewInverseTransposeMatrix[7]-e.origin[1],t.camera.viewInverseTransposeMatrix[11]-e.origin[2]))))}function f(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add(new h.X("proj",((e,t)=>t.camera.projectionMatrix)),new u("view",((e,t)=>(0,i.w)(p,t.camera.viewMatrix,e.origin))),new s.W("localOrigin",(e=>e.origin)));const r=e=>(0,n.s)(v,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new h.X("proj",((e,t)=>t.camera.projectionMatrix)),new h.X("view",((e,t)=>(0,i.w)(p,t.camera.viewMatrix,r(t)))),new l.t("localOrigin",((e,t)=>r(t))))}const p=(0,o.a)(),v=(0,a.c)();function g(e){e.uniforms.add(new h.X("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix)))}},96320:(e,t,r)=>{r.d(t,{t:()=>n});var i=r(99198),o=r(57198);class n extends i.n{constructor(e,t){super(e,"vec2",o.c.Draw,((r,i,o,n)=>r.setUniform2fv(e,t(i,o,n))))}}},54473:(e,t,r)=>{r.d(t,{G:()=>n});var i=r(99198),o=r(57198);class n extends i.n{constructor(e,t){super(e,"vec2",o.c.Pass,((r,i,o)=>r.setUniform2fv(e,t(i,o))))}}},13501:(e,t,r)=>{r.d(t,{W:()=>n});var i=r(99198),o=r(57198);class n extends i.n{constructor(e,t){super(e,"vec3",o.c.Draw,((r,i,o,n)=>r.setUniform3fv(e,t(i,o,n))))}}},60840:(e,t,r)=>{r.d(t,{t:()=>n});var i=r(99198),o=r(57198);class n extends i.n{constructor(e,t){super(e,"vec3",o.c.Pass,((r,i,o)=>r.setUniform3fv(e,t(i,o))))}}},1411:(e,t,r)=>{r.d(t,{E:()=>n});var i=r(99198),o=r(57198);class n extends i.n{constructor(e,t){super(e,"vec4",o.c.Pass,((r,i,o)=>r.setUniform4fv(e,t(i,o))))}}},35449:(e,t,r)=>{r.d(t,{m:()=>n});var i=r(99198),o=r(57198);class n extends i.n{constructor(e,t){super(e,"float",o.c.Pass,((r,i,o)=>r.setUniform1f(e,t(i,o))))}}},3445:(e,t,r)=>{r.d(t,{c:()=>n});var i=r(99198),o=r(57198);class n extends i.n{constructor(e,t){super(e,"int",o.c.Pass,((r,i,o)=>r.setUniform1i(e,t(i,o))))}}},8376:(e,t,r)=>{r.d(t,{h:()=>n});var i=r(99198),o=r(57198);class n extends i.n{constructor(e,t){super(e,"mat3",o.c.Draw,((r,i,o)=>r.setUniformMatrix3fv(e,t(i,o))))}}},6561:(e,t,r)=>{r.d(t,{k:()=>n});var i=r(99198),o=r(57198);class n extends i.n{constructor(e,t){super(e,"mat3",o.c.Pass,((r,i,o)=>r.setUniformMatrix3fv(e,t(i,o))))}}},20778:(e,t,r)=>{r.d(t,{X:()=>n});var i=r(99198),o=r(57198);class n extends i.n{constructor(e,t){super(e,"mat4",o.c.Pass,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))))}}},4274:(e,t,r)=>{r.d(t,{N5:()=>c});var i=r(98849),o=r(539),n=r(57198),a=r(58947);const s=o.A.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class l{constructor(){this._includedModules=new Map}include(e,t){if(this._includedModules.has(e)){const r=this._includedModules.get(e);if(r!==t){s.error("Trying to include shader module multiple times with different sets of options.");const t=new Set;for(const i of Object.keys(r))r[i]!==e[i]&&t.add(i);for(const i of Object.keys(e))r[i]!==e[i]&&t.add(i);t.forEach((t=>console.error(`  ${t}: current ${r[t]} new ${e[t]}`)))}}else this._includedModules.set(e,t),e(this.builder,t)}}class c extends l{constructor(){super(...arguments),this.vertex=new h,this.fragment=new h,this.attributes=new m,this.varyings=new f,this.extensions=new p,this.constants=new g,this.outputs=new v}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(e),o="vertex"===e?this.vertex:this.fragment,n=o.uniforms.generateSource(),a=o.code.generateSource(),s="vertex"===e?x:_,l=this.constants.generateSource().concat(o.constants.generateSource()),c=this.outputs.generateSource(e);return`#version 300 es\n${t.join("\n")}\n\n${s}\n\n${l.join("\n")}\n\n${n.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${c.join("\n")}\n\n${a.join("\n")}`}generateBindPass(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const r=e.bind[n.c.Pass];r&&t.set(e.name,r)})),this.fragment.uniforms.entries.forEach((e=>{const r=e.bind[n.c.Pass];r&&t.set(e.name,r)}));const r=Array.from(t.values()),i=r.length;return(t,o)=>{for(let n=0;n<i;++n)r[n](e,t,o)}}generateBindDraw(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const r=e.bind[n.c.Draw];r&&t.set(e.name,r)})),this.fragment.uniforms.entries.forEach((e=>{const r=e.bind[n.c.Draw];r&&t.set(e.name,r)}));const r=Array.from(t.values()),i=r.length;return(t,o,n)=>{for(let a=0;a<i;++a)r[a](e,t,o,n)}}}class d{constructor(){this._entries=new Map}add(...e){for(const t of e)this._add(t)}get(e){return this._entries.get(e)}_add(e){if(null!=e){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new i.A(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else s.error(`Trying to add null Uniform from ${(new Error).stack}.`)}generateSource(){return Array.from(this._entries.values()).map((e=>null!=e.arraySize?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class u{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class h extends l{constructor(){super(...arguments),this.uniforms=new d,this.code=new u,this.constants=new g}get builder(){return this}}class m{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`in ${e[1]} ${e[0]};`))}}class f{constructor(){this._entries=new Map}add(e,t){this._entries.has(e)&&(0,a.vA)(this._entries.get(e)===t),this._entries.set(e,t)}generateSource(e){const t=new Array;return this._entries.forEach(((r,i)=>t.push("vertex"===e?`out ${r} ${i};`:`in ${r} ${i};`))),t}}class p{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?p.ALLOWLIST_VERTEX:p.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}p.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],p.ALLOWLIST_VERTEX=[];class v{constructor(){this._entries=new Map}add(e,t,r=0){const i=this._entries.get(r);i?(0,a.vA)(i.name===e&&i.type===t,`Fragment shader output location ${r} occupied`):this._entries.set(r,{name:e,type:t})}generateSource(e){if("vertex"===e)return[];0===this._entries.size&&this._entries.set(0,{name:v.DEFAULT_NAME,type:v.DEFAULT_TYPE});const t=new Array;return this._entries.forEach(((e,r)=>t.push(`layout(location = ${r}) out ${e.type} ${e.name};`))),t}}v.DEFAULT_TYPE="vec4",v.DEFAULT_NAME="fragColor";class g{constructor(){this._entries=new Set}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=g._numberToFloatStr(r);break;case"int":i=g._numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${g._numberToFloatStr(r[0])},                            ${g._numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${g._numberToFloatStr(r[0])},                            ${g._numberToFloatStr(r[1])},                            ${g._numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${g._numberToFloatStr(r[0])},                            ${g._numberToFloatStr(r[1])},                            ${g._numberToFloatStr(r[2])},                            ${g._numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${g._numberToIntStr(r[0])},                             ${g._numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${g._numberToIntStr(r[0])},                             ${g._numberToIntStr(r[1])},                             ${g._numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${g._numberToIntStr(r[0])},                             ${g._numberToIntStr(r[1])},                             ${g._numberToIntStr(r[2])},                             ${g._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,(e=>g._numberToFloatStr(e))).join(", ")})`}return this._entries.add(`const ${t} ${e} = ${i};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const _="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",x="precision highp float;\nprecision highp sampler2D;"},52293:(e,t,r)=>{r.d(t,{o:()=>n});var i=r(99198),o=r(57198);class n extends i.n{constructor(e,t){super(e,"sampler2D",o.c.Draw,((r,i,o)=>r.bindTexture(e,t(i,o))))}}},79856:(e,t,r)=>{r.d(t,{N:()=>n});var i=r(99198),o=r(57198);class n extends i.n{constructor(e,t){super(e,"sampler2D",o.c.Pass,((r,i,o)=>r.bindTexture(e,t(i,o))))}}},99198:(e,t,r)=>{r.d(t,{n:()=>o});var i=r(57198);class o{constructor(e,t,r,o,n=null){if(this.name=e,this.type=t,this.arraySize=n,this.bind={[i.c.Pass]:null,[i.c.Draw]:null},o)switch(r){case i.c.Pass:this.bind[i.c.Pass]=o;break;case i.c.Draw:this.bind[i.c.Draw]=o}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}},99152:(e,t,r)=>{r.d(t,{H:()=>o,Y:()=>i});const i=class{};function o(e,...t){let r="";for(let i=0;i<t.length;i++)r+=e[i]+t[i];return r+=e[e.length-1],r}!function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(o||(o={}))},57198:(e,t,r)=>{var i;r.d(t,{c:()=>i}),function(e){e[e.Pass=0]="Pass",e[e.Draw=1]="Draw"}(i||(i={}))},47705:(e,t,r)=>{r.d(t,{$:()=>i});class i{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}},33444:(e,t,r)=>{r.d(t,{w:()=>n});var i=r(6267),o=r(41746);class n{constructor(e,t,r){this.release=r,this.initializeConfiguration(e,t),this._configuration=t.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=(0,i.WD)(this._program),this._pipeline=this._configuration=null}reload(e){(0,i.WD)(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return o.WR.TRIANGLES}getPipeline(e,t,r){return this._pipeline}initializeConfiguration(e,t){}}},69948:(e,t,r)=>{r.d(t,{K:()=>o,W:()=>n});var i=r(99152);class o extends i.Y{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}function n(e={}){return(t,r)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(r),null!=e.constValue)Object.defineProperty(t,r,{get:()=>e.constValue});else{const i=t._parameterNames.length-1,o=e.count||2,n=Math.ceil(Math.log2(o)),a=t._parameterBits??[0];let s=0;for(;a[s]+n>16;)s++,s>=a.length&&a.push(0);t._parameterBits=a;const l=a[s],c=(1<<n)-1<<l;a[s]+=n,Object.defineProperty(t,r,{get(){return this[i]},set(e){if(this[i]!==e&&(this[i]=e,this._keyDirty=!0,this._parameterBits[s]=this._parameterBits[s]&~c|+e<<l&c,"number"!=typeof e&&"boolean"!=typeof e))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof e)}})}}}},71077:(e,t,r)=>{r.d(t,{J:()=>o});var i=r(65061);class o{constructor(){this.id=(0,i.L)()}}},52997:(e,t,r)=>{var i;r.d(t,{X:()=>i}),function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Mesh=2]="Mesh",e[e.Line=3]="Line",e[e.Point=4]="Point",e[e.Material=5]="Material",e[e.Texture=6]="Texture",e[e.COUNT=7]="COUNT"}(i||(i={}))},13148:(e,t,r)=>{r.d(t,{D:()=>o});var i=r(50645);const o=new Map([[i.r.POSITION,0],[i.r.NORMAL,1],[i.r.NORMALCOMPRESSED,1],[i.r.UV0,2],[i.r.COLOR,3],[i.r.COLORFEATUREATTRIBUTE,3],[i.r.SIZE,4],[i.r.TANGENT,4],[i.r.AUXPOS1,5],[i.r.SYMBOLCOLOR,5],[i.r.AUXPOS2,6],[i.r.FEATUREATTRIBUTE,6],[i.r.INSTANCEFEATUREATTRIBUTE,6],[i.r.INSTANCECOLOR,7],[i.r.OBJECTANDLAYERIDCOLOR,7],[i.r.INSTANCEOBJECTANDLAYERIDCOLOR,7],[i.r.INSTANCEMODEL,8],[i.r.INSTANCEMODELNORMAL,12],[i.r.INSTANCEMODELORIGINHI,11],[i.r.INSTANCEMODELORIGINLO,15]])},98174:(e,t,r)=>{r.d(t,{m:()=>l});var i=r(6267),o=r(40189),n=r(99152),a=r(91013);class s{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}get _markerTextureRepository(){return this._techniqueRepository.constructionContext.markerTextureRepository}ensureTechnique(e,t){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(this._output,t),this._technique),this._technique}ensureResources(e){return a.Am.LOADED}}class l extends s{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRepository,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){this._texture=(0,i.Gz)(this._texture),this._textureNormal=(0,i.Gz)(this._textureNormal),this._textureEmissive=(0,i.Gz)(this._textureEmissive),this._textureOcclusion=(0,i.Gz)(this._textureOcclusion),this._textureMetallicRoughness=(0,i.Gz)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?a.Am.LOADED:a.Am.LOADING}get textureBindParameters(){return new c(null!=this._texture?this._texture.glTexture:null,null!=this._textureNormal?this._textureNormal.glTexture:null,null!=this._textureEmissive?this._textureEmissive.glTexture:null,null!=this._textureOcclusion?this._textureOcclusion.glTexture:null,null!=this._textureMetallicRoughness?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){null!=this._texture&&e===this._texture.id||(this._texture=(0,i.Gz)(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}_acquire(e,t){if(null==e)return void t(null);const r=this._textureRepository.acquire(e);if((0,o.$X)(r))return++this._numLoading,void r.then((e=>{if(this._disposed)return(0,i.Gz)(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(r)}}class c extends n.Y{constructor(e=null,t=null,r=null,i=null,o=null){super(),this.texture=e,this.textureNormal=t,this.textureEmissive=r,this.textureOcclusion=i,this.textureMetallicRoughness=o}}},9781:(e,t,r)=>{r.d(t,{V:()=>O});var i=r(56192),o=r(21839),n=r(42965),a=r(86942);function s(e){if(e.length<a.y9)return Array.from(e);if((0,a.cy)(e))return Float64Array.from(e);if(!("BYTES_PER_ELEMENT"in e))return Array.from(e);switch(e.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(e);case 2:return(0,a.jq)(e)?Uint16Array.from(e):Int16Array.from(e);case 4:return Float32Array.from(e);default:return Float64Array.from(e)}}var l=r(91013),c=r(63678),d=r(22279),u=r(58947);class h{constructor(e,t,r){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.position=r,this._children=void 0,(0,u.vA)(e.length>=1),(0,u.vA)(3===r.size||4===r.size);const{data:i,size:n,indices:a}=r;(0,u.vA)(a.length%this._numIndexPerPrimitive==0),(0,u.vA)(a.length>=e.length*this._numIndexPerPrimitive);const s=e.length;let l=n*a[this._numIndexPerPrimitive*e[0]];m.clear(),m.push(l);const c=(0,d.f)(i[l],i[l+1],i[l+2]),h=(0,d.g)(c);for(let o=0;o<s;++o){const t=this._numIndexPerPrimitive*e[o];for(let e=0;e<this._numIndexPerPrimitive;++e){l=n*a[t+e],m.push(l);let r=i[l];c[0]=Math.min(r,c[0]),h[0]=Math.max(r,h[0]),r=i[l+1],c[1]=Math.min(r,c[1]),h[1]=Math.max(r,h[1]),r=i[l+2],c[2]=Math.min(r,c[2]),h[2]=Math.max(r,h[2])}}this.bbMin=c,this.bbMax=h;const f=(0,o.p)((0,d.c)(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(h[0]-c[0],h[1]-c[1]),h[2]-c[2]);let p=this.radius*this.radius;for(let o=0;o<m.length;++o){l=m.at(o);const e=i[l]-f[0],t=i[l+1]-f[1],r=i[l+2]-f[2],n=e*e+t*t+r*r;if(n<=p)continue;const a=Math.sqrt(n),s=.5*(a-this.radius);this.radius=this.radius+s,p=this.radius*this.radius;const c=s/a;f[0]+=e*c,f[1]+=t*c,f[2]+=r*c}this.center=f,m.clear()}getChildren(){if(this._children||(0,o.a)(this.bbMin,this.bbMax)<=1)return this._children;const e=(0,o.p)((0,d.c)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=new Array(8);for(let o=0;o<8;++o)i[o]=0;const{data:n,size:a,indices:s}=this.position;for(let o=0;o<t;++o){let t=0;const l=this._numIndexPerPrimitive*this.primitiveIndices[o];let c=a*s[l],d=n[c],u=n[c+1],h=n[c+2];for(let e=1;e<this._numIndexPerPrimitive;++e){c=a*s[l+e];const t=n[c],r=n[c+1],i=n[c+2];t<d&&(d=t),r<u&&(u=r),i<h&&(h=i)}d<e[0]&&(t|=1),u<e[1]&&(t|=2),h<e[2]&&(t|=4),r[o]=t,++i[t]}let l=0;for(let o=0;o<8;++o)i[o]>0&&++l;if(l<2)return;const c=new Array(8);for(let o=0;o<8;++o)c[o]=i[o]>0?new Uint32Array(i[o]):void 0;for(let o=0;o<8;++o)i[o]=0;for(let o=0;o<t;++o){const e=r[o];c[e][i[e]++]=this.primitiveIndices[o]}this._children=new Array;for(let o=0;o<8;++o)void 0!==c[o]&&this._children.push(new h(c[o],this._numIndexPerPrimitive,this.position));return this._children}static prune(){m.prune()}}const m=new c.A({deallocator:null});var f=r(71077),p=r(52997),v=r(92114),g=r(22759);r(45573);function _(e){return e?{p0:(0,d.g)(e.p0),p1:(0,d.g)(e.p1),p2:(0,d.g)(e.p2)}:{p0:(0,d.c)(),p1:(0,d.c)(),p2:(0,d.c)()}}function x(e,t,r){return(0,o.f)(T,t,e),(0,o.f)(b,r,e),(0,o.l)((0,o.b)(T,T,b))/2}new v.I(g.vt),new v.I((()=>_()));const T=(0,d.c)(),b=(0,d.c)();const A=(0,d.c)(),E=(0,d.c)(),y=(0,d.c)(),S=(0,d.c)();var w=r(65061);class M{constructor(e){this.channel=e,this.id=(0,w.L)()}}var C=r(50645);r(76698);(0,d.c)(),new Float32Array(6);class O extends f.J{constructor(e,t,r=null,i=p.X.Mesh,o=null,a=-1){super(),this.material=e,this.mapPositions=r,this.type=i,this.objectAndLayerIdColor=o,this.edgeIndicesLength=a,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[s,l]of t)this._attributes.set(s,{...l,indices:(0,n.Dg)(l.indices)}),s===C.r.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(s).indices.length:this.edgeIndicesLength)}instantiate(e={}){const t=new O(e.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach(((e,r)=>{e.exclusive=!1,t._attributes.set(r,e)})),t._boundingInfo=this._boundingInfo,t.transformation=e.transformation||this.transformation,t}get attributes(){return this._attributes}getMutableAttribute(e){let t=this._attributes.get(e);return t&&!t.exclusive&&(t={...t,exclusive:!0,data:s(t.data)},this._attributes.set(e,t)),t}setAttributeData(e,t){const r=this._attributes.get(e);r&&this._attributes.set(e,{...r,exclusive:!0,data:t})}get indexCount(){const e=this._attributes.values().next().value.indices;return e?.length??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===p.X.Mesh?this._computeAttachmentOriginTriangles(e):this.type===p.X.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(null!=this._transformation&&(0,o.e)(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){return function(e,t){if(!e)return!1;const{size:r,data:i,indices:n}=e;(0,o.s)(t,0,0,0),(0,o.s)(S,0,0,0);let a=0,s=0;for(let l=0;l<n.length-2;l+=3){const e=n[l]*r,c=n[l+1]*r,d=n[l+2]*r;(0,o.s)(A,i[e],i[e+1],i[e+2]),(0,o.s)(E,i[c],i[c+1],i[c+2]),(0,o.s)(y,i[d],i[d+1],i[d+2]);const u=x(A,E,y);u?((0,o.g)(A,A,E),(0,o.g)(A,A,y),(0,o.i)(A,A,1/3*u),(0,o.g)(t,t,A),a+=u):((0,o.g)(S,S,A),(0,o.g)(S,S,E),(0,o.g)(S,S,y),s+=3)}return!(0===s&&0===a||(0!==a?((0,o.i)(t,t,1/a),0):0===s||((0,o.i)(t,S,1/s),0)))}(this.attributes.get(C.r.POSITION),e)}_computeAttachmentOriginLines(e){const t=this.attributes.get(C.r.POSITION);return function(e,t,r){if(!e)return!1;(0,o.s)(r,0,0,0),(0,o.s)(S,0,0,0);let i=0,n=0;const{size:a,data:s,indices:l}=e,c=l.length-1,d=c+(t?2:0);for(let u=0;u<d;u+=2){const e=u<c?u+1:0,t=l[u<c?u:c]*a,d=l[e]*a;A[0]=s[t],A[1]=s[t+1],A[2]=s[t+2],E[0]=s[d],E[1]=s[d+1],E[2]=s[d+2],(0,o.i)(A,(0,o.g)(A,A,E),.5);const h=(0,o.r)(A,E);h>0?((0,o.g)(r,r,(0,o.i)(A,A,h)),i+=h):0===i&&((0,o.g)(S,S,A),n++)}return 0!==i?((0,o.i)(r,r,1/i),!0):0!==n&&((0,o.i)(r,S,1/n),!0)}(t,function(e,t){return!(!("isClosed"in e)||!e.isClosed)&&t.indices.length>2}(this.material.parameters,t),e)}_computeAttachmentOriginPoints(e){return function(e,t){if(!e)return!1;const{size:r,data:i,indices:n}=e;(0,o.s)(t,0,0,0);let a=-1,s=0;for(let o=0;o<n.length;o++){const e=n[o]*r;a!==e&&(t[0]+=i[e],t[1]+=i[e+1],t[2]+=i[e+2],s++),a=e}return s>1&&(0,o.i)(t,t,1/s),s>0}(this.attributes.get(C.r.POSITION),e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.attributes.get(C.r.POSITION);if(!e||0===e.indices.length)return null;const t=this.type===p.X.Mesh?3:1;(0,u.vA)(e.indices.length%t==0,"Indexing error: "+e.indices.length+" not divisible by "+t);const r=(0,n.tM)(e.indices.length/t);return new h(r,t,e)}get transformation(){return this._transformation??i.I}set transformation(e){this._transformation=e&&e!==i.I?(0,i.b)(e):null}addHighlight(){const e=new M(l.Mg.Highlight);return this.highlights=function(e,t){return null==e&&(e=[]),e.push(t),e}(this.highlights,e),e}removeHighlight(e){this.highlights=function(e,t){if(null==e)return null;const r=e.filter((e=>e!==t));return 0===r.length?null:r}(this.highlights,e)}}},18429:(e,t,r)=>{r.d(t,{im:()=>u,m$:()=>n});var i=r(22279),o=r(99152);var n,a=r(91013),s=r(71077),l=r(52997),c=r(13148),d=r(19647);class u extends s.J{constructor(e,t){super(),this.type=l.X.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._vertexAttributeLocations=c.D,this._pp0=(0,i.f)(0,0,1),this._pp1=(0,i.f)(0,0,0),this._parameters=(0,d.qu)(e,t),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(e){return!1}setParameters(e,t=!0){(0,d.MB)(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&(!this.parameters.isDecoration||e.bindParameters.decorations===a.ID.ON)&&!!(this.parameters.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){this.repository?.materialChanged(this)}intersectDraped(e,t,r,i,o,n){return this._pp0[0]=this._pp1[0]=i[0],this._pp0[1]=this._pp1[1]=i[1],this.intersect(e,t,r,this._pp0,this._pp1,o)}}!function(e){e[e.None=0]="None",e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"}(n||(n={}));o.Y},1931:(e,t,r)=>{r.d(t,{AJ:()=>l,K_:()=>m,V0:()=>a,aB:()=>h,ez:()=>c,xt:()=>d});var i=r(81868),o=r(41746),n=r(2449);const a=(0,n.p3)(o.dn.SRC_ALPHA,o.dn.ONE,o.dn.ONE_MINUS_SRC_ALPHA,o.dn.ONE_MINUS_SRC_ALPHA),s=(0,n.ox)(o.dn.ONE,o.dn.ONE),l=(0,n.ox)(o.dn.ZERO,o.dn.ONE_MINUS_SRC_ALPHA);function c(e){return e===i.y.FrontFace?null:e===i.y.Alpha?l:s}const d=5e5,u={factor:-1,units:-2};function h(e){return e?u:null}function m(e,t=o.MT.LESS){return e===i.y.NONE||e===i.y.FrontFace?t:o.MT.LEQUAL}},58123:(e,t,r)=>{r.d(t,{B:()=>n});var i=r(63678),o=r(16541);class n{constructor(e,t,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new i.A({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBindPass(this),this.bindDraw=t.generateBindDraw(this),this._fragmentUniforms=(0,o.en)()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get compiled(){return this._glProgram.compiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(null==t?.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let r=this._textures.get(e);return null==r?(r=this._allocTextureUnit(t),this._textures.set(e,r)):r.texture=t,this._context.useProgram(this),this.setUniform1i(e,r.unit),this._context.bindTexture(t,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),null!=this._fragmentUniforms&&this._fragmentUniforms.forEach((e=>{"sampler2D"!==e.type&&"samplerCube"!==e.type||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}},38323:(e,t,r)=>{var i;r.d(t,{N:()=>i}),function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",e[e.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",e[e.ANTIALIASING=10]="ANTIALIASING",e[e.COMPOSITE=11]="COMPOSITE",e[e.BLIT=12]="BLIT",e[e.SSAO=13]="SSAO",e[e.HIGHLIGHT=14]="HIGHLIGHT",e[e.SHADOW_HIGHLIGHT=15]="SHADOW_HIGHLIGHT",e[e.ENVIRONMENT_OPAQUE=16]="ENVIRONMENT_OPAQUE",e[e.ENVIRONMENT_TRANSPARENT=17]="ENVIRONMENT_TRANSPARENT",e[e.LASERLINES=18]="LASERLINES",e[e.LASERLINES_CONTRAST_CONTROL=19]="LASERLINES_CONTRAST_CONTROL",e[e.HUD_MATERIAL=20]="HUD_MATERIAL",e[e.LABEL_MATERIAL=21]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=22]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=23]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=24]="DRAPED_MATERIAL",e[e.DRAPED_WATER=25]="DRAPED_WATER",e[e.VOXEL=26]="VOXEL",e[e.MAX_SLOTS=27]="MAX_SLOTS"}(i||(i={}))},81868:(e,t,r)=>{var i;r.d(t,{y:()=>i}),function(e){e[e.Color=0]="Color",e[e.Alpha=1]="Alpha",e[e.FrontFace=2]="FrontFace",e[e.NONE=3]="NONE",e[e.COUNT=4]="COUNT"}(i||(i={}))},91013:(e,t,r)=>{var i,o,n,a,s,l,c,d,u;r.d(t,{Am:()=>a,ID:()=>d,JS:()=>u,Mg:()=>l,dd:()=>s,it:()=>o,s2:()=>i,sf:()=>c}),function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(i||(i={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(o||(o={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(n||(n={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(a||(a={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(s||(s={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee",e[e.COUNT=2]="COUNT"}(l||(l={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(c||(c={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(d||(d={})),function(e){e.DDS_ENCODING="image/vnd-ms.dds",e.KTX2_ENCODING="image/ktx2",e.BASIS_ENCODING="image/x.basis"}(u||(u={}))},19647:(e,t,r)=>{r.d(t,{Um:()=>C,qu:()=>S,Uy:()=>v,MB:()=>w,kE:()=>y});var i=r(85569),o=r(92504),n=r(21839),a=r(22279),s=r(4675),l=r(52997);r(10714);function c(e,t,r){const i=r.parameters;return h.scale=Math.min(i.divisor/(t-i.offset),1),h.factor=function(e){return Math.abs(e*e*e)}(e),h}function d(e,t){return(0,o.Cc)(e*Math.max(t.scale,t.minScaleFactor),e,t.factor)}function u(e,t,r,i){return d(e,c(t,r,i))}(0,o.kU)(10),(0,o.kU)(12),(0,o.kU)(70),(0,o.kU)(40);const h={scale:0,factor:0,minScaleFactor:0};var m=r(58947),f=r(50645);const p=(0,s.vt)();function v(e,t,r,i,o,n){if(e.visible)if(e.boundingInfo){(0,m.vA)(e.type===l.X.Mesh);const a=t.tolerance;_(e.boundingInfo,r,i,a,o,n)}else{const t=e.attributes.get(f.r.POSITION),a=t.indices;T(r,i,0,a.length/3,a,t,void 0,o,n)}}const g=(0,a.c)();function _(e,t,r,i,o,a){if(null==e)return;const l=function(e,t,r){return(0,n.s)(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(t,r,g);if((0,s.Ne)(p,e.bbMin),(0,s.vI)(p,e.bbMax),null!=o&&o.applyToAabb(p),function(e,t,r,i){return function(e,t,r,i,o){const n=(e[0]-i-t[0])*r[0],a=(e[3]+i-t[0])*r[0];let s=Math.min(n,a),l=Math.max(n,a);const c=(e[1]-i-t[1])*r[1],d=(e[4]+i-t[1])*r[1];if(l=Math.min(l,Math.max(c,d)),l<0)return!1;if(s=Math.max(s,Math.min(c,d)),s>l)return!1;const u=(e[2]-i-t[2])*r[2],h=(e[5]+i-t[2])*r[2];return l=Math.min(l,Math.max(u,h)),!(l<0)&&(s=Math.max(s,Math.min(u,h)),!(s>l)&&s<o)}(e,t,r,i,1/0)}(p,t,l,i)){const{primitiveIndices:n,position:s}=e,l=n?n.length:s.indices.length/3;if(l>O){const n=e.getChildren();if(void 0!==n){for(const e of n)_(e,t,r,i,o,a);return}}T(t,r,0,l,s.indices,s,n,o,a)}}const x=(0,a.c)();function T(e,t,r,i,o,n,a,s,l){if(a)return function(e,t,r,i,o,n,a,s,l){const{data:c,stride:d}=n,u=e[0],h=e[1],m=e[2],f=t[0]-u,p=t[1]-h,v=t[2]-m;for(let g=r;g<i;++g){const e=a[g];let t=3*e,r=d*o[t++],i=c[r++],n=c[r++],_=c[r];r=d*o[t++];let T=c[r++],b=c[r++],A=c[r];r=d*o[t];let y=c[r++],S=c[r++],w=c[r];null!=s&&([i,n,_]=s.applyToVertex(i,n,_,g),[T,b,A]=s.applyToVertex(T,b,A,g),[y,S,w]=s.applyToVertex(y,S,w,g));const M=T-i,C=b-n,O=A-_,I=y-i,R=S-n,N=w-_,L=p*N-R*v,P=v*I-N*f,H=f*R-I*p,D=M*L+C*P+O*H;if(Math.abs(D)<=Number.EPSILON)continue;const F=u-i,B=h-n,G=m-_,z=F*L+B*P+G*H;if(D>0){if(z<0||z>D)continue}else if(z>0||z<D)continue;const V=B*O-C*G,W=G*M-O*F,U=F*C-M*B,j=f*V+p*W+v*U;if(D>0){if(j<0||z+j>D)continue}else if(j>0||z+j<D)continue;const k=(I*V+R*W+N*U)/D;k>=0&&l(k,E(M,C,O,I,R,N,x),e,!1)}}(e,t,r,i,o,n,a,s,l);const{data:c,stride:d}=n,u=e[0],h=e[1],m=e[2],f=t[0]-u,p=t[1]-h,v=t[2]-m;for(let g=r,_=3*r;g<i;++g){let e=d*o[_++],t=c[e++],r=c[e++],i=c[e];e=d*o[_++];let n=c[e++],a=c[e++],T=c[e];e=d*o[_++];let b=c[e++],A=c[e++],y=c[e];null!=s&&([t,r,i]=s.applyToVertex(t,r,i,g),[n,a,T]=s.applyToVertex(n,a,T,g),[b,A,y]=s.applyToVertex(b,A,y,g));const S=n-t,w=a-r,M=T-i,C=b-t,O=A-r,I=y-i,R=p*I-O*v,N=v*C-I*f,L=f*O-C*p,P=S*R+w*N+M*L;if(Math.abs(P)<=Number.EPSILON)continue;const H=u-t,D=h-r,F=m-i,B=H*R+D*N+F*L;if(P>0){if(B<0||B>P)continue}else if(B>0||B<P)continue;const G=D*M-w*F,z=F*S-M*H,V=H*w-S*D,W=f*G+p*z+v*V;if(P>0){if(W<0||B+W>P)continue}else if(W>0||B+W<P)continue;const U=(C*G+O*z+I*V)/P;U>=0&&l(U,E(S,w,M,C,O,I,x),g,!1)}}const b=(0,a.c)(),A=(0,a.c)();function E(e,t,r,i,o,a,s){return(0,n.s)(b,e,t,r),(0,n.s)(A,i,o,a),(0,n.b)(s,b,A),(0,n.n)(s,s),s}function y(e,t,r,i,n){let a=(r.screenLength||0)*e.pixelRatio;null!=n&&(a=u(a,i,t,n));const s=a*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,o.qE)(s*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function S(e,t){const r=t?S(t):{};for(const i in e){let t=e[i];t?.forEach&&(t=M(t)),null==t&&i in r||(r[i]=t)}return r}function w(e,t){let r=!1;for(const o in t){const n=t[o];void 0!==n&&(Array.isArray(n)?null===e[o]?(e[o]=n.slice(),r=!0):(0,i.yo)(e[o],n)&&(r=!0):e[o]!==n&&(r=!0,e[o]=n))}return r}function M(e){const t=[];return e.forEach((e=>t.push(e))),t}const C={multiply:1,ignore:2,replace:3,tint:4},O=1e3},40695:(e,t,r)=>{var i;r.d(t,{M:()=>i}),function(e){e[e.ANIMATING=0]="ANIMATING",e[e.INTERACTING=1]="INTERACTING",e[e.IDLE=2]="IDLE"}(i||(i={}))},76698:(e,t,r)=>{function i(e,t,r){for(let i=0;i<r;++i)t[2*i]=e[i],t[2*i+1]=e[i]-t[2*i]}function o(e,t){const r=e.length;for(let i=0;i<r;++i)a[0]=e[i],t[i]=a[0];return t}function n(e,t){const r=e.length;for(let i=0;i<r;++i)a[0]=e[i],a[1]=e[i]-a[0],t[i]=a[1];return t}r.d(t,{Zo:()=>o,jA:()=>n,jS:()=>i});const a=new Float32Array(2)},2449:(e,t,r)=>{r.d(t,{Ey:()=>b,Ms:()=>U,Xt:()=>c,kn:()=>d,ox:()=>n,p3:()=>a,wE:()=>u});var i=r(91013),o=r(41746);function n(e,t,r=o.Tb.ADD,i=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}function a(e,t,r,i,n=o.Tb.ADD,a=o.Tb.ADD,s=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:i,opRgb:n,opAlpha:a,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}const s={face:o.Y7.BACK,mode:o.Ac.CCW},l={face:o.Y7.FRONT,mode:o.Ac.CCW},c=e=>e===i.s2.Back?s:e===i.s2.Front?l:null,d={zNear:0,zFar:1},u={r:!0,g:!0,b:!0,a:!0};function h(e){return y.intern(e)}function m(e){return w.intern(e)}function f(e){return C.intern(e)}function p(e){return I.intern(e)}function v(e){return N.intern(e)}function g(e){return P.intern(e)}function _(e){return D.intern(e)}function x(e){return B.intern(e)}function T(e){return z.intern(e)}function b(e){return W.intern(e)}class A{constructor(e,t){this._makeKey=e,this._makeRef=t,this._interns=new Map}intern(e){if(!e)return null;const t=this._makeKey(e),r=this._interns;return r.has(t)||r.set(t,this._makeRef(e)),r.get(t)??null}}function E(e){return"["+e.join(",")+"]"}const y=new A(S,(e=>({__tag:"Blending",...e})));function S(e){return e?E([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const w=new A(M,(e=>({__tag:"Culling",...e})));function M(e){return e?E([e.face,e.mode]):null}const C=new A(O,(e=>({__tag:"PolygonOffset",...e})));function O(e){return e?E([e.factor,e.units]):null}const I=new A(R,(e=>({__tag:"DepthTest",...e})));function R(e){return e?E([e.func]):null}const N=new A(L,(e=>({__tag:"StencilTest",...e})));function L(e){return e?E([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const P=new A(H,(e=>({__tag:"DepthWrite",...e})));function H(e){return e?E([e.zNear,e.zFar]):null}const D=new A(F,(e=>({__tag:"ColorWrite",...e})));function F(e){return e?E([e.r,e.g,e.b,e.a]):null}const B=new A(G,(e=>({__tag:"StencilWrite",...e})));function G(e){return e?E([e.mask]):null}const z=new A(V,(e=>({__tag:"DrawBuffers",...e})));function V(e){return e?E(e.buffers):null}const W=new A((function(e){return e?E([S(e.blending),M(e.culling),O(e.polygonOffset),R(e.depthTest),L(e.stencilTest),H(e.depthWrite),F(e.colorWrite),G(e.stencilWrite),V(e.drawBuffers)]):null}),(e=>({blending:h(e.blending),culling:m(e.culling),polygonOffset:f(e.polygonOffset),depthTest:p(e.depthTest),stencilTest:v(e.stencilTest),depthWrite:g(e.depthWrite),colorWrite:_(e.colorWrite),stencilWrite:x(e.stencilWrite),drawBuffers:T(e.drawBuffers)})));class U{constructor(e){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._drawBuffersInvalid=!0,this._stateSetters=e}setPipeline(e){(this._pipelineInvalid||e!==this._pipeline)&&(this._setBlending(e.blending),this._setCulling(e.culling),this._setPolygonOffset(e.polygonOffset),this._setDepthTest(e.depthTest),this._setStencilTest(e.stencilTest),this._setDepthWrite(e.depthWrite),this._setColorWrite(e.colorWrite),this._setStencilWrite(e.stencilWrite),this._setDrawBuffers(e.drawBuffers),this._pipeline=e),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDrawBuffers(){this._drawBuffersInvalid=!0,this._pipelineInvalid=!0}_setBlending(e){this._blending=this._setSubState(e,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(e){this._culling=this._setSubState(e,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(e){this._polygonOffset=this._setSubState(e,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(e){this._depthTest=this._setSubState(e,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(e){this._stencilTest=this._setSubState(e,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(e){this._depthWrite=this._setSubState(e,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(e){this._colorWrite=this._setSubState(e,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(e){this._stencilWrite=this._setSubState(e,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setDrawBuffers(e){this._drawBuffers=this._setSubState(e,this._drawBuffers,this._drawBuffersInvalid,this._stateSetters.setDrawBuffers),this._drawBuffersInvalid=!1}_setSubState(e,t,r,i){return(r||e!==t)&&(i(e),this._pipelineInvalid=!0),e}}}}]);