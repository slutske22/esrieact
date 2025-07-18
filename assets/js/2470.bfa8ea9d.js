"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2470],{90618:(e,t,o)=>{o.d(t,{D:()=>F,b:()=>W});var r=o(40641),a=o(26163),i=o(55274),n=o(1110),s=o(66012),l=o(24682),c=o(81283),d=o(99915),u=o(67691),h=o(26139),m=o(39739),p=o(82089),f=o(54009),v=o(23399),g=o(76080),x=o(56349),b=o(75988),y=o(696),T=o(80600),M=o(46971),C=o(17666),w=o(39486),S=o(64062),E=o(25541),O=o(34328),_=o(33448),A=o(29724),H=o(60915),R=o(63592),N=o(60840),P=o(1411),I=o(35449),z=o(99152),G=o(4274),L=o(79856),B=o(81868),V=o(50645);function W(e){const t=new G.N5,{vertex:o,fragment:W,varyings:F}=t;if((0,R.NB)(o,e),t.include(d.I),F.add("vpos","vec3"),t.include(O.A,e),t.include(l.BK,e),t.include(f.G,e),e.hasColorTextureTransform&&t.include(E.q2),e.output===i.V.Color||e.output===i.V.Alpha){e.hasNormalTextureTransform&&t.include(E.Sx),e.hasEmissionTextureTransform&&t.include(E.MU),e.hasOcclusionTextureTransform&&t.include(E.O1),e.hasMetallicRoughnessTextureTransform&&t.include(E.QM),(0,R.yu)(o,e),t.include(c.Y,e),t.include(s.d,e);const i=e.normalType===c.W.Attribute||e.normalType===c.W.Compressed;i&&e.offsetBackfaces&&t.include(a.M),t.include(g.W,e),t.include(p.Mh,e),e.instancedColor&&t.attributes.add(V.r.INSTANCECOLOR,"vec4"),F.add("vPositionLocal","vec3"),t.include(h.U,e),t.include(r.oD,e),t.include(u.K,e),t.include(m.c,e),o.uniforms.add(new P.E("externalColor",(e=>e.externalColor))),F.add("vcolorExt","vec4"),e.multipassEnabled&&F.add("depth","float"),o.code.add(z.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${z.H.float(_.y)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${i?z.H`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${i&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${e.hasColorTextureTransform?z.H`forwardColorUV();`:""}
        ${e.hasNormalTextureTransform?z.H`forwardNormalUV();`:""}
        ${e.hasEmissionTextureTransform?z.H`forwardEmissiveUV();`:""}
        ${e.hasOcclusionTextureTransform?z.H`forwardOcclusionUV();`:""}
        ${e.hasMetallicRoughnessTextureTransform?z.H`forwardMetallicRoughnessUV();`:""}
      }
    `)}switch(e.output){case i.V.Alpha:t.include(n.HQ,e),t.include(A.S,e),t.include(T.Q,e),W.uniforms.add(new I.m("opacity",(e=>e.opacity)),new I.m("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&W.uniforms.add(new L.N("tex",(e=>e.texture))),W.include(H.N),W.code.add(z.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?z.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?z.H`colorUV`:z.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:z.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?z.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:z.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);break;case i.V.Color:t.include(n.HQ,e),t.include(b.kA,e),t.include(x.n,e),t.include(A.S,e),t.include(e.instancedDoublePrecision?S.G:S.Bz,e),t.include(T.Q,e),(0,R.yu)(W,e),W.uniforms.add(o.uniforms.get("localOrigin"),new N.t("ambient",(e=>e.ambient)),new N.t("diffuse",(e=>e.diffuse)),new I.m("opacity",(e=>e.opacity)),new I.m("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&W.uniforms.add(new L.N("tex",(e=>e.texture))),t.include(w._Z,e),t.include(C.c,e),W.include(H.N),t.include(M.r,e),(0,b.a8)(W),(0,b.eU)(W),(0,y.O4)(W),W.code.add(z.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?z.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?z.H`colorUV`:z.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:z.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===c.W.ScreenDerivative?z.H`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:z.H`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===w.A9.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?z.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:z.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?z.H`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${e.hasNormalTextureTransform?z.H`normalUV`:"vuv0"});`:z.H`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?z.H`normalize(posWorld);`:z.H`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?z.H`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===w.A9.Normal||e.pbrMode===w.A9.Schematic?z.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?z.H`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:z.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===B.y.Color?z.H`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `)}return t.include(v.E,e),t}const F=Object.freeze(Object.defineProperty({__proto__:null,build:W},Symbol.toStringTag,{value:"Module"}))},3458:(e,t,o)=>{o.d(t,{R:()=>L,b:()=>G});var r=o(40641),a=o(26163),i=o(55274),n=o(1110),s=o(66012),l=o(24682),c=o(81283),d=o(99915),u=o(67691),h=o(26139),m=o(39739),p=o(54009),f=o(23399),v=o(56349),g=o(75988),x=o(696),b=o(80600),y=o(17666),T=o(39486),M=o(64062),C=o(34328),w=o(33448),S=o(29724),E=o(60915),O=o(63592),_=o(60840),A=o(1411),H=o(35449),R=o(99152),N=o(4274),P=o(79856),I=o(81868),z=o(50645);function G(e){const t=new N.N5,{vertex:o,fragment:G,varyings:L}=t;return(0,O.NB)(o,e),t.include(d.I),L.add("vpos","vec3"),t.include(C.A,e),t.include(l.BK,e),t.include(p.G,e),e.output!==i.V.Color&&e.output!==i.V.Alpha||((0,O.yu)(t.vertex,e),t.include(c.Y,e),t.include(s.d,e),e.offsetBackfaces&&t.include(a.M),e.instancedColor&&t.attributes.add(z.r.INSTANCECOLOR,"vec4"),L.add("vNormalWorld","vec3"),L.add("localvpos","vec3"),e.multipassEnabled&&L.add("depth","float"),t.include(h.U,e),t.include(r.oD,e),t.include(u.K,e),t.include(m.c,e),o.uniforms.add(new A.E("externalColor",(e=>e.externalColor))),L.add("vcolorExt","vec4"),o.code.add(R.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${R.H.float(w.y)}) {
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
      `)),e.output===i.V.Alpha&&(t.include(n.HQ,e),t.include(S.S,e),t.include(b.Q,e),G.uniforms.add(new H.m("opacity",(e=>e.opacity)),new H.m("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&G.uniforms.add(new P.N("tex",(e=>e.texture))),G.include(E.N),G.code.add(R.H`
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
    `)),e.output===i.V.Color&&(t.include(n.HQ,e),t.include(g.kA,e),t.include(v.n,e),t.include(S.S,e),t.include(e.instancedDoublePrecision?M.G:M.Bz,e),t.include(b.Q,e),(0,O.yu)(t.fragment,e),(0,x.Gc)(G),(0,g.a8)(G),(0,g.eU)(G),G.uniforms.add(o.uniforms.get("localOrigin"),o.uniforms.get("view"),new _.t("ambient",(e=>e.ambient)),new _.t("diffuse",(e=>e.diffuse)),new H.m("opacity",(e=>e.opacity)),new H.m("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&G.uniforms.add(new P.N("tex",(e=>e.texture))),t.include(T._Z,e),t.include(y.c,e),G.include(E.N),(0,x.O4)(G),G.code.add(R.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?R.H`terrainDepthTest(depth);`:""}
        ${e.hasColorTexture?R.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?R.H`colorUV`:R.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:R.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===T.A9.Normal?"applyPBRFactors();":""}
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
        ${e.pbrMode===T.A9.Normal||e.pbrMode===T.A9.Schematic?e.spherical?R.H`vec3 normalGround = normalize(vpos + localOrigin);`:R.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:R.H``}
        ${e.pbrMode===T.A9.Normal||e.pbrMode===T.A9.Schematic?R.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?R.H`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:R.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===I.y.Color?R.H`fragColor = premultiplyAlpha(fragColor);`:R.H``}
      }
    `)),t.include(f.E,e),t}const L=Object.freeze(Object.defineProperty({__proto__:null,build:G},Symbol.toStringTag,{value:"Module"}))},51522:(e,t,o)=>{o.d(t,{S:()=>g,b:()=>p,g:()=>f});var r=o(58680),a=o(78286),i=o(16961),n=o(67726),s=o(1062),l=o(54473),c=o(35449),d=o(99152),u=o(4274),h=o(79856);const m=16;function p(){const e=new u.N5,t=e.fragment;return e.include(i.c),t.include(n.D),e.include(s.Ir),t.uniforms.add(new c.m("radius",((e,t)=>f(t.camera)))),t.code.add(d.H`vec3 sphere[16];
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
}`),t.uniforms.add(new l.G("nearFar",((e,t)=>t.camera.nearFar)),new h.N("normalMap",(e=>e.normalTexture)),new h.N("depthMap",(e=>e.depthTexture)),new c.m("projScale",(e=>e.projScale)),new h.N("rnm",(e=>e.noiseTexture)),new l.G("rnmScale",((e,t)=>(0,r.s)(v,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height))),new c.m("intensity",(e=>e.intensity)),new l.G("screenSize",((e,t)=>(0,r.s)(v,t.camera.fullWidth,t.camera.fullHeight)))),e.outputs.add("fragOcclusion","float"),t.code.add(d.H`
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
  `),e}function f(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const v=(0,a.a)(),g=Object.freeze(Object.defineProperty({__proto__:null,build:p,getRadius:f},Symbol.toStringTag,{value:"Module"}))},45789:(e,t,o)=>{o.d(t,{S:()=>f,b:()=>p});var r=o(21839),a=o(16961),i=o(67726),n=o(96320),s=o(54473),l=o(35449),c=o(99152),d=o(4274),u=o(52293),h=o(79856);const m=4;function p(){const e=new d.N5,t=e.fragment;e.include(a.c);const o=(m+1)/2,p=1/(2*o*o);return t.include(i.D),t.uniforms.add(new h.N("depthMap",(e=>e.depthTexture)),new u.o("tex",(e=>e.colorTexture)),new n.t("blurSize",(e=>e.blurSize)),new l.m("projScale",((e,t)=>{const o=(0,r.o)(t.camera.eye,t.camera.center);return o>5e4?Math.max(0,e.projScale-(o-5e4)):e.projScale})),new s.G("nearFar",((e,t)=>t.camera.nearFar))),t.code.add(c.H`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${c.H.float(p)} - ddiff * ddiff * sharpness);
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
  `),e}const f=Object.freeze(Object.defineProperty({__proto__:null,build:p},Symbol.toStringTag,{value:"Module"}))},80954:(e,t,o)=>{o.d(t,{G:()=>n});var r=o(21360),a=o(48325),i=o(46615);function n(e){if(null==e)return null;const t=null!=e.offset?e.offset:a.Z,o=null!=e.rotation?e.rotation:0,n=null!=e.scale?e.scale:a.O,s=(0,r.f)(1,0,0,0,1,0,t[0],t[1],1),l=(0,r.f)(Math.cos(o),-Math.sin(o),0,Math.sin(o),Math.cos(o),0,0,0,1),c=(0,r.f)(n[0],0,0,0,n[1],0,0,0,1),d=(0,r.c)();return(0,i.m)(d,l,c),(0,i.m)(d,s,d),d}},2470:(e,t,o)=>{o.d(t,{fetch:()=>Q});var r=o(19382),a=o(46615),i=o(76287),n=o(37046),s=o(56192),l=o(21839),c=o(22279),d=o(4675),u=o(50961),h=o(57813),m=o(24121),p=o(2662),f=o(56016),v=o(53866),g=o(33381),x=o(13298),b=o(31068),y=o(8823),T=o(46629),M=o(80954);class C{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class w{constructor(e,t,o){this.name=e,this.lodThreshold=t,this.pivotOffset=o,this.stageResources=new C,this.numberOfVertices=0}}var S=o(86394),E=o(12690),O=o(13274),_=o(98849),A=o(539),H=o(80912),R=o(40189),N=o(50579),P=o(42965),I=o(34528),z=o(70807),G=o(91013),L=o(59568),B=o(28443),V=o(50645),W=o(54482),F=o(41746);const j=A.A.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function D(e,t){const o=await async function(e,t){const o=t?.streamDataRequester;if(o)return async function(e,t,o){const r=await(0,E.Ke)(t.request(e,"json",o));if(!0===r.ok)return r.value;(0,R.QP)(r.error),U(r.error.details.url)}(e,o,t);const r=await(0,E.Ke)((0,S.A)(e,t));if(!0===r.ok)return r.value.data;(0,R.QP)(r.error),U(r.error)}(e,t),r=await async function(e,t){const o=new Array;for(const i in e){const r=e[i],a=r.images[0].data;if(!a){j.warn("Externally referenced texture data is not yet supported");continue}const n=r.encoding+";base64,"+a,s="/textureDefinitions/"+i,l="rgba"===r.channels?r.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:F.pF.REPEAT,t:F.pF.REPEAT},preMultiplyAlpha:Y(l)!==G.sf.Opaque},d=null!=t&&t.disableTextures?Promise.resolve(null):(0,I.D)(n,t);o.push(d.then((e=>({refId:s,image:e,parameters:c,alphaChannelUsage:l}))))}const r=await Promise.all(o),a={};for(const i of r)a[i.refId]=i;return a}(o.textureDefinitions??{},t);let a=0;for(const i in r)if(r.hasOwnProperty(i)){const e=r[i];a+=e?.image?e.image.width*e.image.height*4:0}return{resource:o,textures:r,size:a+(0,O.iL)(o)}}function U(e){throw new _.A("",`Request for object resource failed: ${e}`)}function q(e){const t=e.params,o=t.topology;let r=!0;switch(t.vertexAttributes||(j.warn("Geometry must specify vertex attributes"),r=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const o in t.vertexAttributes){const t=e[o];t?.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(j.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),r=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(j.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),r=!1)):(j.warn(`Indexed geometry does not specify face indices for '${o}' attribute`),r=!1)}}else j.warn("Indexed geometries must specify faces"),r=!1;break}default:j.warn(`Unsupported topology '${o}'`),r=!1}e.params.material||(j.warn("Geometry requires material"),r=!1);const a=e.params.vertexAttributes;for(const i in a)a[i].values||(j.warn("Geometries with externally defined attributes are not yet supported"),r=!1);return r}function k(e){const t=(0,d.Ie)();return e.forEach((e=>{const o=e.boundingInfo;null!=o&&((0,d.iT)(t,o.bbMin),(0,d.iT)(t,o.bbMax))})),t}function Y(e){switch(e){case"mask":return G.sf.Mask;case"maskAndTransparency":return G.sf.MaskBlend;case"none":return G.sf.Opaque;default:return G.sf.Blend}}function $(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const J=new N.R(1,2,"wosr");var Z=o(81283),X=o(42440),K=o(12221);async function Q(e,t){const o=function(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}((0,r.EM)(e));if("wosr"===o.fileType){const e=await(t.cache?t.cache.loadWOSR(o.url,t):D(o.url,t)),{engineResources:r,referenceBoundingBox:a}=function(e,t){const o=new Array,r=new Array,a=new Array,i=new H.O,n=e.resource,s=N.R.parse(n.version||"1.0","wosr");J.validate(s);const l=n.model.name,d=n.model.geometries,u=n.materialDefinitions??{},h=e.textures;let m=0;const p=new Map;for(let f=0;f<d.length;f++){const e=d[f];if(!q(e))continue;const n=$(e),s=e.params.vertexAttributes,l=[],v=t=>{if("PerAttributeArray"===e.params.topology)return null;const o=e.params.faces;for(const e in o)if(e===t)return o[e].values;return null},g=s[V.r.POSITION],x=g.values.length/g.valuesPerElement;for(const t in s){const e=s[t],o=e.values,r=v(t)??(0,P.tM)(x);l.push([t,new z.n(o,r,e.valuesPerElement,!0)])}const b=n.texture,y=h&&h[b];if(y&&!p.has(b)){const{image:e,parameters:t}=y,o=new B.g(e,t);r.push(o),p.set(b,o)}const T=p.get(b),M=T?T.id:void 0,C=n.material;let w=i.get(C,b);if(null==w){const e=u[C.substring(C.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const o=y&&y.alphaChannelUsage,r=e.transparency>0||"transparency"===o||"maskAndTransparency"===o,a=y?Y(y.alphaChannelUsage):void 0,n={ambient:(0,c.e)(e.diffuse),diffuse:(0,c.e)(e.diffuse),opacity:1-(e.transparency||0),transparent:r,textureAlphaMode:a,textureAlphaCutoff:.33,textureId:M,initTextureTransparent:!0,doubleSided:!0,cullFace:G.s2.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:y?.parameters.preMultiplyAlpha??!1};t?.materialParameters&&Object.assign(n,t.materialParameters),w=new W.$U(n),i.set(C,b,w)}a.push(w);const S=new L.V(w,l);m+=l.find((e=>e[0]===V.r.POSITION))?.[1]?.indices.length??0,o.push(S)}return{engineResources:[{name:l,stageResources:{textures:r,materials:a,geometries:o},pivotOffset:n.model.pivotOffset,numberOfVertices:m,lodThreshold:null}],referenceBoundingBox:k(o)}}(e,t);return{lods:r,referenceBoundingBox:a,isEsriSymbolResource:!1,isWosr:!0}}const i=await(t.cache?t.cache.loadGLTF(o.url,t,!!t.usePBR):(0,b.y)(new x.R(t.streamDataRequester),o.url,t,t.usePBR)),C=i.model.meta?.ESRI_proxyEllipsoid,S=i.meta.isEsriSymbolResource&&null!=C&&i.meta.uri.includes("/RealisticTrees/");S&&!i.customMeta.esriTreeRendering&&(i.customMeta.esriTreeRendering=!0,function(e,t){for(let o=0;o<e.model.lods.length;++o){const r=e.model.lods[o];for(const a of r.parts){const r=a.attributes.normal;if(null==r)return;const i=a.attributes.position,d=i.count,u=(0,c.c)(),m=(0,c.c)(),p=(0,c.c)(),f=new Uint8Array(4*d),v=new Float64Array(3*d),g=(0,n.i)((0,s.a)(),a.transform);let x=0,b=0;for(let n=0;n<d;n++){i.getVec(n,m),r.getVec(n,u),(0,l.e)(m,m,a.transform),(0,l.f)(p,m,t.center),(0,l.B)(p,p,t.radius);const s=p[2],c=(0,l.l)(p),d=Math.min(.45+.55*c*c,1);(0,l.B)(p,p,t.radius),null!==g&&(0,l.e)(p,p,g),(0,l.n)(p,p),o+1!==e.model.lods.length&&e.model.lods.length>1&&(0,l.p)(p,p,u,s>-1?.2:Math.min(-4*s-3.8,1)),v[x]=p[0],v[x+1]=p[1],v[x+2]=p[2],x+=3,f[b]=255*d,f[b+1]=255*d,f[b+2]=255*d,f[b+3]=255,b+=4}a.attributes.normal=new h.xs(v),a.attributes.color=new h.XP(f)}}}(i,C));const E=!!t.usePBR,O=i.meta.isEsriSymbolResource?{usePBR:E,isSchematic:!1,treeRendering:S,mrrFactors:[...K.d_]}:{usePBR:E,isSchematic:!1,treeRendering:!1,mrrFactors:[...K.Rk]},_={...t.materialParameters,treeRendering:S},{engineResources:A,referenceBoundingBox:R}=function(e,t,o,r){const i=e.model,n=new Array,s=new Map,l=new Map,c=i.lods.length,x=(0,d.Ie)();return i.lods.forEach(((e,b)=>{const C=!0===r.skipHighLods&&(c>1&&0===b||c>3&&1===b)||!1===r.skipHighLods&&null!=r.singleLodIndex&&b!==r.singleLodIndex;if(C&&0!==b)return;const S=new w(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const r=C?new W.$U({}):function(e,t,o,r,a,i,n){const s=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),l=e.materials.get(t.material),c=null!=t.attributes.texCoord0,d=null!=t.attributes.normal;if(null==l)return null;const u=function(e){switch(e){case"BLEND":return G.sf.Blend;case"MASK":return G.sf.Mask;case"OPAQUE":case null:case void 0:return G.sf.Opaque}}(l.alphaMode);if(!i.has(s)){if(c){const t=(t,o=!1)=>{if(null!=t&&!n.has(t)){const r=e.textures.get(t);if(null!=r){const e=r.data;n.set(t,new B.g((0,T.x3)(e)?e.data:e,{...r.parameters,preMultiplyAlpha:!(0,T.x3)(e)&&o,encoding:(0,T.x3)(e)&&null!=e.encoding?e.encoding:void 0}))}}};t(l.textureColor,u!==G.sf.Opaque),t(l.textureNormal),t(l.textureOcclusion),t(l.textureEmissive),t(l.textureMetallicRoughness)}const o=l.color[0]**(1/X.T),h=l.color[1]**(1/X.T),m=l.color[2]**(1/X.T),p=l.emissiveFactor[0]**(1/X.T),f=l.emissiveFactor[1]**(1/X.T),v=l.emissiveFactor[2]**(1/X.T),g=null!=l.textureColor&&c?n.get(l.textureColor):null,x=(0,K.Jr)({normalTexture:l.textureNormal,metallicRoughnessTexture:l.textureMetallicRoughness,metallicFactor:l.metallicFactor,roughnessFactor:l.roughnessFactor,emissiveTexture:l.textureEmissive,emissiveFactor:l.emissiveFactor,occlusionTexture:l.textureOcclusion});i.set(s,new W.$U({...r,transparent:u===G.sf.Blend,customDepthTest:G.it.Lequal,textureAlphaMode:u,textureAlphaCutoff:l.alphaCutoff,diffuse:[o,h,m],ambient:[o,h,m],opacity:l.opacity,doubleSided:l.doubleSided,doubleSidedType:"winding-order",cullFace:l.doubleSided?G.s2.None:G.s2.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:d?Z.W.Attribute:Z.W.ScreenDerivative,castShadows:!0,textureId:null!=g?g.id:void 0,colorMixMode:l.colorMixMode,normalTextureId:null!=l.textureNormal&&c?n.get(l.textureNormal).id:void 0,textureAlphaPremultiplied:null!=g&&!!g.parameters.preMultiplyAlpha,occlusionTextureId:null!=l.textureOcclusion&&c?n.get(l.textureOcclusion).id:void 0,emissiveTextureId:null!=l.textureEmissive&&c?n.get(l.textureEmissive).id:void 0,metallicRoughnessTextureId:null!=l.textureMetallicRoughness&&c?n.get(l.textureMetallicRoughness).id:void 0,emissiveFactor:[p,f,v],mrrFactors:x?[...K.mX]:[l.metallicFactor,l.roughnessFactor,r.mrrFactors[2]],isSchematic:x,colorTextureTransformMatrix:(0,M.G)(l.colorTextureTransform),normalTextureTransformMatrix:(0,M.G)(l.normalTextureTransform),occlusionTextureTransformMatrix:(0,M.G)(l.occlusionTextureTransform),emissiveTextureTransformMatrix:(0,M.G)(l.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:(0,M.G)(l.metallicRoughnessTextureTransform),...a}))}const h=i.get(s);if(o.stageResources.materials.push(h),c){const e=e=>{null!=e&&o.stageResources.textures.push(n.get(e))};e(l.textureColor),e(l.textureNormal),e(l.textureOcclusion),e(l.textureEmissive),e(l.textureMetallicRoughness)}return h}(i,e,S,t,o,s,l),{geometry:n,vertexCount:c}=function(e,t){const o=e.attributes.position.count,r=(0,y.x)(e.indices||o,e.primitiveType),i=(0,u.oe)(3*o),{typedBuffer:n,typedBufferStride:s}=e.attributes.position;(0,m.t)(i,n,e.transform,3,s);const l=[[V.r.POSITION,new z.n(i,r,3,!0)]];if(null!=e.attributes.normal){const t=(0,u.oe)(3*o),{typedBuffer:i,typedBufferStride:n}=e.attributes.normal;(0,a.n)(ee,e.transform),(0,m.a)(t,i,ee,3,n),l.push([V.r.NORMAL,new z.n(t,r,3,!0)])}if(null!=e.attributes.tangent){const t=(0,u.oe)(4*o),{typedBuffer:i,typedBufferStride:n}=e.attributes.tangent;(0,a.n)(ee,e.transform),(0,p.t)(t,i,ee,4,n),l.push([V.r.TANGENT,new z.n(t,r,4,!0)])}if(null!=e.attributes.texCoord0){const t=(0,u.oe)(2*o),{typedBuffer:a,typedBufferStride:i}=e.attributes.texCoord0;(0,f.n)(t,a,2,i),l.push([V.r.UV0,new z.n(t,r,2,!0)])}if(null!=e.attributes.color){const t=new Uint8Array(4*o);4===e.attributes.color.elementCount?e.attributes.color instanceof h.Eq?(0,p.s)(t,e.attributes.color,255):e.attributes.color instanceof h.XP?(0,g.c)(t,e.attributes.color):e.attributes.color instanceof h.Uz&&(0,p.s)(t,e.attributes.color,1/256):(t.fill(255),e.attributes.color instanceof h.xs?(0,m.s)(t,e.attributes.color,255,4):e.attributes.color instanceof h.eI?(0,v.c)(t,e.attributes.color.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof h.nS&&(0,m.s)(t,e.attributes.color,1/256,4)),l.push([V.r.COLOR,new z.n(t,r,4,!0)])}return{geometry:new L.V(t,l),vertexCount:o}}(e,null!=r?r:new W.$U({})),w=n.boundingInfo;null!=w&&0===b&&((0,d.iT)(x,w.bbMin),(0,d.iT)(x,w.bbMax)),null!=r&&(S.stageResources.geometries.push(n),S.numberOfVertices+=c)})),C||n.push(S)})),{engineResources:n,referenceBoundingBox:x}}(i,O,_,t.skipHighLods&&null==o.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:o.specifiedLodIndex});return{lods:A,referenceBoundingBox:R,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1}}const ee=(0,i.a)()},26163:(e,t,o)=>{o.d(t,{M:()=>a});var r=o(99152);function a(e){e.vertex.code.add(r.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},67691:(e,t,o)=>{o.d(t,{K:()=>c});var r=o(55623),a=o(99152);function i(e){e.vertex.code.add(a.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${a.H.int(r.k5.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${a.H.int(r.k5.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${a.H.int(r.k5.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${a.H.int(r.k5.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}var n=o(3445),s=o(50645),l=o(29117);function c(e,t){t.hasSymbolColors?(e.include(i),e.attributes.add(s.r.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(a.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new n.c("colorMixMode",(e=>l.Um[e.colorMixMode]))),e.vertex.code.add(a.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},23399:(e,t,o)=>{o.d(t,{E:()=>b});var r=o(40641),a=o(55274),i=o(1110),n=o(66012),s=o(81283),l=o(33045),c=o(26139),d=o(82089),u=o(56178),h=o(63269),m=o(34328),p=o(29724),f=o(63592),v=o(99152),g=o(79856),x=o(91013);function b(e,t){const{vertex:o,fragment:b}=e,y=t.hasColorTexture&&t.alphaDiscardMode!==x.sf.Opaque;switch(t.output){case a.V.Depth:case a.V.Shadow:case a.V.ShadowHighlight:case a.V.ShadowExcludeHighlight:case a.V.ObjectAndLayerIdColor:(0,f.NB)(o,t),e.include(n.d,t),e.include(c.U,t),e.include(m.A,t),e.include(u.L,t),e.include(i.HQ,t),e.include(l.g,t),(0,r.xJ)(e),e.varyings.add("depth","float"),y&&b.uniforms.add(new g.N("tex",(e=>e.texture))),o.code.add(v.H`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),e.include(p.S,t),b.code.add(v.H`
          void main(void) {
            discardBySlice(vpos);
            ${y?v.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?v.H`colorUV`:v.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===a.V.ObjectAndLayerIdColor?v.H`outputObjectAndLayerIdColor();`:v.H`outputDepth(depth);`}
          }
        `);break;case a.V.Normal:{(0,f.NB)(o,t),e.include(n.d,t),e.include(s.Y,t),e.include(d.Mh,t),e.include(c.U,t),e.include(m.A,t),y&&b.uniforms.add(new g.N("tex",(e=>e.texture))),t.normalType===s.W.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const r=t.normalType===s.W.Attribute||t.normalType===s.W.Compressed;o.code.add(v.H`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${r?v.H`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:v.H`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),e.include(i.HQ,t),e.include(p.S,t),b.code.add(v.H`
          void main() {
            discardBySlice(vpos);
            ${y?v.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?v.H`colorUV`:v.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===s.W.ScreenDerivative?v.H`vec3 normal = screenDerivativeNormal(vPositionView);`:v.H`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case a.V.Highlight:(0,f.NB)(o,t),e.include(n.d,t),e.include(c.U,t),e.include(m.A,t),y&&b.uniforms.add(new g.N("tex",(e=>e.texture))),o.code.add(v.H`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(i.HQ,t),e.include(p.S,t),e.include(h.Qh,t),b.code.add(v.H`
          void main() {
            discardBySlice(vpos);
            ${y?v.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?v.H`colorUV`:v.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}},76080:(e,t,o)=>{o.d(t,{W:()=>u});var r=o(26139),a=o(81783),i=o(46971),n=o(99152),s=o(52293),l=o(79856),c=o(57198),d=o(50645);function u(e,t){const o=e.fragment;t.hasVertexTangents?(e.attributes.add(d.r.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===i.W.WindingOrder?o.code.add(n.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(n.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):o.code.add(n.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`),t.textureCoordinateType!==r.q.None&&(e.include(a.r,t),o.uniforms.add(t.pbrTextureBindType===c.c.Pass?new l.N("normalTexture",(e=>e.textureNormal)):new s.o("normalTexture",(e=>e.textureNormal))),o.code.add(n.H`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;
return tangentSpace * rawNormal;
}`))}},56349:(e,t,o)=>{o.d(t,{n:()=>G});var r=o(99152),a=o(79856),i=o(66866),n=o(6267),s=o(85251),l=o(60882),c=o(21564),d=(o(73446),o(85569),o(39831),o(63863)),u=o(58680),h=o(4588),m=o(38931),p=o(47705),f=o(33444),v=o(13148),g=o(58123),x=o(45789),b=o(2449);class y extends f.w{initializeProgram(e){return new g.B(e.rctx,y.shader.get().build(),v.D)}initializePipeline(){return(0,b.Ey)({colorWrite:b.wE})}}y.shader=new p.$(x.S,(()=>o.e(3513).then(o.bind(o,13513))));var T=o(78286);class M extends r.Y{constructor(){super(...arguments),this.projScale=1}}class C extends M{constructor(){super(...arguments),this.intensity=1}}class w extends r.Y{}class S extends w{constructor(){super(...arguments),this.blurSize=(0,T.a)()}}var E=o(51522);class O extends f.w{initializeProgram(e){return new g.B(e.rctx,O.shader.get().build(),v.D)}initializePipeline(){return(0,b.Ey)({colorWrite:b.wE})}}O.shader=new p.$(E.S,(()=>o.e(350).then(o.bind(o,30350))));var _;o(40695);!function(e){e[e.Antialiasing=0]="Antialiasing",e[e.HighQualityTransparency=1]="HighQualityTransparency",e[e.HighResolutionVoxel=2]="HighResolutionVoxel",e[e.HighResolutionAtmosphere=3]="HighResolutionAtmosphere",e[e.SSAO=4]="SSAO",e[e.WaterReflection=5]="WaterReflection",e[e.HighResolutionShadows=6]="HighResolutionShadows",e[e.PhysicalPixelRendering=7]="PhysicalPixelRendering"}(_||(_={}));var A=o(38323),H=o(41746),R=o(6940),N=o(45758);const P=2;let I=class extends m.RW{constructor(e){super(e),this._context=null,this._passParameters=new C,this._drawParameters=new S,this.produces=new Map([[A.N.SSAO,()=>this._produces()]])}_produces(){return null!=this._enableTime&&null!=this._context}consumes(){return this._produces()?m.A9:m.qo}initializeRenderContext(e){this._context=e,this.addHandles([(0,s.wB)((()=>this.view.qualitySettings.ambientOcclusion||this._context?.isFeatureEnabled(_.SSAO)),(e=>e?this._enable():this._disable()),s.pc)])}uninitializeRenderContext(){this._disable(),this._context=null}_disable(){this._passParameters.noiseTexture=(0,n.WD)(this._passParameters.noiseTexture),this._enableTime=null}destroy(){this._disable()}_enable(){if(null!=this._enableTime||!this._context)return;const e=Uint8Array.from(atob("eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM"),(e=>e.charCodeAt(0))),t=new N.R;t.wrapMode=H.pF.CLAMP_TO_EDGE,t.pixelFormat=H.Ab.RGB,t.wrapMode=H.pF.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new R.g(this._context.renderContext.rctx,t,e),null==this._ssaoTechnique&&(this._ssaoTechnique=this._context.techniqueRepository.acquire(O)),null==this._blurTechnique&&(this._blurTechnique=this._context.techniqueRepository.acquire(y)),this._enableTime=(0,l.l5)(0),this._context?.requestRender()}renderNode(e,t,o){const r=e.bindParameters,a=r.linearDepth?.colorTexture,i=o?.normal?.colorTexture;if(null==this._enableTime||null==this._context||null==a||!i)return;if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=e.time,void this._context.requestRender();0===this._enableTime&&(this._enableTime=e.time);const n=e.rctx,s=r.camera,l=this.view.qualitySettings.fadeDuration,c=l>0?Math.min(l,e.time-this._enableTime)/l:1;this._passParameters.normalTexture=i,this._passParameters.depthTexture=a,this._passParameters.projScale=1/s.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*z/(0,E.g)(s)**6*c;const d=s.fullViewport[2],m=s.fullViewport[3],p=Math.round(d/P),f=Math.round(m/P),v=this._context.fbos,g=v.acquire(h.NV.RED,d,m);n.bindFramebuffer(g.fbo),n.setViewport(0,0,d,m),n.bindTechnique(this._ssaoTechnique,this._passParameters,r).bindDraw(this._drawParameters,r,this._passParameters),n.screen.draw();const x=n.bindTechnique(this._blurTechnique,this._passParameters,r);n.setViewport(0,0,p,f);const b=v.acquire(h.NV.RED,p,f);n.bindFramebuffer(b.fbo),this._drawParameters.colorTexture=g.colorTexture,(0,u.s)(this._drawParameters.blurSize,0,P/m),x.bindDraw(this._drawParameters,r,this._passParameters),n.setViewport(0,0,p,f),n.screen.draw(),g.release();const y=v.acquire(h.NV.RED,p,f);return n.bindFramebuffer(y.fbo),n.setViewport(0,0,d,m),n.setClearColor(1,1,1,0),n.clear(H.hn.COLOR_BUFFER_BIT),n.setViewport(0,0,p,f),this._drawParameters.colorTexture=b.colorTexture,(0,u.s)(this._drawParameters.blurSize,P/d,0),x.bindDraw(this._drawParameters,r,this._passParameters),n.screen.draw(),n.setViewport4fv(s.fullViewport),b.release(),c<1&&this._context.requestRender(),y}};(0,i._)([(0,c.MZ)({constructOnly:!0})],I.prototype,"view",void 0),(0,i._)([(0,c.MZ)()],I.prototype,"_context",void 0),I=(0,i._)([(0,d.$)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],I);const z=.5;function G(e,t){const o=e.fragment;t.receiveAmbientOcclusion?(o.uniforms.add(new a.N("ssaoTex",((e,t)=>t.ssao?.colorTexture))),o.constants.add("blurSizePixelsInverse","float",1/P),o.code.add(r.H`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):o.code.add(r.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},75988:(e,t,o)=>{o.d(t,{a8:()=>p,eU:()=>f,kA:()=>v});var r=o(73345),a=o(52636),i=o(56349),n=o(696),s=o(17666),l=o(39486),c=o(66579),d=o(72563),u=o(35449),h=o(99152),m=o(9409);function p(e){e.constants.add("ambientBoostFactor","float",m.u)}function f(e){e.uniforms.add(new u.m("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function v(e,t){const o=e.fragment;switch(e.include(i.n,t),t.pbrMode!==l.A9.Disabled&&e.include(s.c,t),e.include(a.W,t),e.include(c.p),o.code.add(h.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===l.A9.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),p(o),f(o),(0,n.Gc)(o),o.code.add(h.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?h.H`normalize(vPosWorld)`:h.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,n.O4)(o),o.code.add(h.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case l.A9.Disabled:case l.A9.WaterOnIntegratedMesh:case l.A9.Water:e.include(n.qU),o.code.add(h.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case l.A9.Normal:case l.A9.Schematic:o.code.add(h.H`const float fillLightIntensity = 0.25;
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
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),o.code.add(h.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?o.uniforms.add(new d.e("hasFillLights",((e,t)=>t.enableFillLights))):o.constants.add("hasFillLights","bool",!1),o.code.add(h.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),o.uniforms.add(new u.m("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new u.m("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))),o.code.add(h.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),o.code.add(h.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission == vec3(0.0) ? _emission : pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==l.A9.Schematic||t.hasColorTexture?h.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:h.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case l.A9.Terrain:case l.A9.TerrainWithWater:e.include(n.qU),o.code.add(h.H`const float roughnessTerrain = 0.5;
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
}`);break;default:(0,r.Xb)(t.pbrMode);case l.A9.COUNT:}}},46971:(e,t,o)=>{o.d(t,{W:()=>r,r:()=>s});var r,a,i=o(73345),n=o(99152);function s(e,t){const o=e.fragment;switch(o.code.add(n.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case r.None:o.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case r.View:o.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case r.WindingOrder:o.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,i.Xb)(t.doubleSidedMode);case r.COUNT:}}(a=r||(r={}))[a.None=0]="None",a[a.View=1]="View",a[a.WindingOrder=2]="WindingOrder",a[a.COUNT=3]="COUNT"},25541:(e,t,o)=>{o.d(t,{MU:()=>l,O1:()=>c,QM:()=>d,Sx:()=>s,q2:()=>n});var r=o(21360),a=o(99152),i=o(6561);function n(e){e.vertex.uniforms.add(new i.k("colorTextureTransformMatrix",(e=>null!=e.colorTextureTransformMatrix?e.colorTextureTransformMatrix:(0,r.c)()))),e.varyings.add("colorUV","vec2"),e.vertex.code.add(a.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function s(e){e.vertex.uniforms.add(new i.k("normalTextureTransformMatrix",(e=>null!=e.normalTextureTransformMatrix?e.normalTextureTransformMatrix:(0,r.c)()))),e.varyings.add("normalUV","vec2"),e.vertex.code.add(a.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function l(e){e.vertex.uniforms.add(new i.k("emissiveTextureTransformMatrix",(e=>null!=e.emissiveTextureTransformMatrix?e.emissiveTextureTransformMatrix:(0,r.c)()))),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(a.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function c(e){e.vertex.uniforms.add(new i.k("occlusionTextureTransformMatrix",(e=>null!=e.occlusionTextureTransformMatrix?e.occlusionTextureTransformMatrix:(0,r.c)()))),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(a.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function d(e){e.vertex.uniforms.add(new i.k("metallicRoughnessTextureTransformMatrix",(e=>null!=e.metallicRoughnessTextureTransformMatrix?e.metallicRoughnessTextureTransformMatrix:(0,r.c)()))),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(a.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}},29724:(e,t,o)=>{o.d(t,{S:()=>c});var r=o(33448),a=o(99152);function i(e){e.fragment.code.add(a.H`
    #define discardOrAdjustAlpha(color) { if (color.a < ${a.H.float(r.y)}) { discard; } }
  `)}var n=o(99198);o(57198);n.n;var s=o(35449),l=o(91013);function c(e,t){d(e,t,new s.m("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function d(e,t,o){const r=e.fragment;switch(t.alphaDiscardMode!==l.sf.Mask&&t.alphaDiscardMode!==l.sf.MaskBlend||r.uniforms.add(o),t.alphaDiscardMode){case l.sf.Blend:return e.include(i);case l.sf.Opaque:r.code.add(a.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case l.sf.Mask:r.code.add(a.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case l.sf.MaskBlend:e.fragment.code.add(a.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}},60915:(e,t,o)=>{o.d(t,{N:()=>n});var r=o(55623),a=o(89002),i=o(99152);function n(e){e.include(a.a),e.code.add(i.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${i.H.int(r.k5.Multiply)}) {
        return allMixed;
      }
      if (mode == ${i.H.int(r.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.H.int(r.k5.Replace)}) {
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

      if (mode == ${i.H.int(r.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.H.int(r.k5.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},96320:(e,t,o)=>{o.d(t,{t:()=>i});var r=o(99198),a=o(57198);class i extends r.n{constructor(e,t){super(e,"vec2",a.c.Draw,((o,r,a,i)=>o.setUniform2fv(e,t(r,a,i))))}}},54482:(e,t,o)=>{o.d(t,{$U:()=>R});var r=o(39831),a=o(21839),i=o(22279),n=o(10714),s=o(11110),l=o(55274),c=o(81283),d=o(46971),u=o(39486),h=o(91013),m=o(89140),p=o(45722),f=o(1931),v=o(38323),g=o(50645),x=o(689),b=o(25146),y=o(29117),T=o(73418),M=o(66866),C=o(26139),w=o(69948),S=o(81868),E=o(9319);class O extends E.E{constructor(){super(...arguments),this.output=l.V.Color,this.alphaDiscardMode=h.sf.Opaque,this.doubleSidedMode=d.W.None,this.pbrMode=u.A9.Disabled,this.cullFace=h.s2.None,this.transparencyPassType=S.y.NONE,this.normalType=c.W.Attribute,this.textureCoordinateType=C.q.None,this.customDepthTest=h.it.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}(0,M._)([(0,w.W)({count:l.V.COUNT})],O.prototype,"output",void 0),(0,M._)([(0,w.W)({count:h.sf.COUNT})],O.prototype,"alphaDiscardMode",void 0),(0,M._)([(0,w.W)({count:d.W.COUNT})],O.prototype,"doubleSidedMode",void 0),(0,M._)([(0,w.W)({count:u.A9.COUNT})],O.prototype,"pbrMode",void 0),(0,M._)([(0,w.W)({count:h.s2.COUNT})],O.prototype,"cullFace",void 0),(0,M._)([(0,w.W)({count:S.y.COUNT})],O.prototype,"transparencyPassType",void 0),(0,M._)([(0,w.W)({count:c.W.COUNT})],O.prototype,"normalType",void 0),(0,M._)([(0,w.W)({count:C.q.COUNT})],O.prototype,"textureCoordinateType",void 0),(0,M._)([(0,w.W)({count:h.it.COUNT})],O.prototype,"customDepthTest",void 0),(0,M._)([(0,w.W)()],O.prototype,"spherical",void 0),(0,M._)([(0,w.W)()],O.prototype,"hasVertexColors",void 0),(0,M._)([(0,w.W)()],O.prototype,"hasSymbolColors",void 0),(0,M._)([(0,w.W)()],O.prototype,"hasVerticalOffset",void 0),(0,M._)([(0,w.W)()],O.prototype,"hasSlicePlane",void 0),(0,M._)([(0,w.W)()],O.prototype,"hasSliceHighlight",void 0),(0,M._)([(0,w.W)()],O.prototype,"hasColorTexture",void 0),(0,M._)([(0,w.W)()],O.prototype,"hasMetallicRoughnessTexture",void 0),(0,M._)([(0,w.W)()],O.prototype,"hasEmissionTexture",void 0),(0,M._)([(0,w.W)()],O.prototype,"hasOcclusionTexture",void 0),(0,M._)([(0,w.W)()],O.prototype,"hasNormalTexture",void 0),(0,M._)([(0,w.W)()],O.prototype,"hasScreenSizePerspective",void 0),(0,M._)([(0,w.W)()],O.prototype,"hasVertexTangents",void 0),(0,M._)([(0,w.W)()],O.prototype,"hasOccludees",void 0),(0,M._)([(0,w.W)()],O.prototype,"multipassEnabled",void 0),(0,M._)([(0,w.W)()],O.prototype,"hasModelTransformation",void 0),(0,M._)([(0,w.W)()],O.prototype,"offsetBackfaces",void 0),(0,M._)([(0,w.W)()],O.prototype,"vvSize",void 0),(0,M._)([(0,w.W)()],O.prototype,"vvColor",void 0),(0,M._)([(0,w.W)()],O.prototype,"receiveShadows",void 0),(0,M._)([(0,w.W)()],O.prototype,"receiveAmbientOcclusion",void 0),(0,M._)([(0,w.W)()],O.prototype,"textureAlphaPremultiplied",void 0),(0,M._)([(0,w.W)()],O.prototype,"instanced",void 0),(0,M._)([(0,w.W)()],O.prototype,"instancedColor",void 0),(0,M._)([(0,w.W)()],O.prototype,"objectAndLayerIdColorInstanced",void 0),(0,M._)([(0,w.W)()],O.prototype,"instancedDoublePrecision",void 0),(0,M._)([(0,w.W)()],O.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,M._)([(0,w.W)()],O.prototype,"writeDepth",void 0),(0,M._)([(0,w.W)()],O.prototype,"transparent",void 0),(0,M._)([(0,w.W)()],O.prototype,"enableOffset",void 0),(0,M._)([(0,w.W)()],O.prototype,"cullAboveGround",void 0),(0,M._)([(0,w.W)()],O.prototype,"snowCover",void 0),(0,M._)([(0,w.W)()],O.prototype,"hasColorTextureTransform",void 0),(0,M._)([(0,w.W)()],O.prototype,"hasEmissionTextureTransform",void 0),(0,M._)([(0,w.W)()],O.prototype,"hasNormalTextureTransform",void 0),(0,M._)([(0,w.W)()],O.prototype,"hasOcclusionTextureTransform",void 0),(0,M._)([(0,w.W)()],O.prototype,"hasMetallicRoughnessTextureTransform",void 0),(0,M._)([(0,w.W)({constValue:!1})],O.prototype,"occlusionPass",void 0),(0,M._)([(0,w.W)({constValue:!0})],O.prototype,"hasVvInstancing",void 0),(0,M._)([(0,w.W)({constValue:!1})],O.prototype,"useCustomDTRExponentForWater",void 0),(0,M._)([(0,w.W)({constValue:!1})],O.prototype,"supportsTextureAtlas",void 0),(0,M._)([(0,w.W)({constValue:!0})],O.prototype,"useFillLights",void 0);var _=o(47705),A=o(3458);class H extends T.R5{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetallicRoughnessTexture=!1,t.hasEmissionTexture=!1,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=c.W.Attribute,t.doubleSidedMode=d.W.WindingOrder,t.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,H.shader)}}H.shader=new _.$(A.R,(()=>o.e(1198).then(o.bind(o,91198))));class R extends p.im{constructor(e){super(e,I),this.supportsEdges=!0,this._configuration=new O,this._vertexBufferLayout=function(e){const t=(0,s.BP)().vec3f(g.r.POSITION);return e.normalType===c.W.Compressed?t.vec2i16(g.r.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(g.r.NORMAL),e.hasVertexTangents&&t.vec4f(g.r.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(g.r.UV0),e.hasVertexColors&&t.vec4u8(g.r.COLOR),e.hasSymbolColors&&t.vec4u8(g.r.SYMBOLCOLOR),(0,r.A)("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(g.r.OBJECTANDLAYERIDCOLOR),t}(this.parameters)}isVisibleForOutput(e){return e!==l.V.Shadow&&e!==l.V.ShadowExcludeHighlight&&e!==l.V.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{hasInstancedColor:t,hasVertexColors:o,hasSymbolColors:r,vvColor:a}=e,i="replace"===e.colorMixMode,n=e.opacity>0,s=e.externalColor&&e.externalColor[3]>0,l=t||a||r;return o&&l?i||n:o?i?s:n:l?i||n:i?s:n}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=null!=this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=null!=this.parameters.screenSizePerspective,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,null!=this.parameters.customDepthTest&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?h.s2.None:this.parameters.cullFace,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=null!=this.parameters.modelTransformation,e!==l.V.Color&&e!==l.V.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=d.W.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?d.W.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?d.W.WindingOrder:d.W.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=null!=t.ssao,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?u.A9.Schematic:u.A9.Normal:u.A9.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<f.xt,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,t,o,r,i,s){if(null!=this.parameters.verticalOffset){const e=o.camera;(0,a.s)(W,t[12],t[13],t[14]);let s=null;switch(o.viewingMode){case n.RT.Global:s=(0,a.n)(B,W);break;case n.RT.Local:s=(0,a.c)(B,L)}let l=0;const c=(0,a.f)(F,W,e.eye),d=(0,a.l)(c),u=(0,a.i)(c,c,1/d);let h=null;this.parameters.screenSizePerspective&&(h=(0,a.j)(s,u)),l+=(0,y.kE)(e,d,this.parameters.verticalOffset,h??0,this.parameters.screenSizePerspective),(0,a.i)(s,s,l),(0,a.t)(V,s,o.transform.inverseRotation),r=(0,a.f)(z,r,V),i=(0,a.f)(G,i,V)}(0,y.Uy)(e,o,r,i,(0,x.ou)(o.verticalOffset),s)}produces(e,t){return(t===l.V.Color||t===l.V.Alpha||t===l.V.Depth||t===l.V.Normal||t===l.V.Shadow||t===l.V.ShadowHighlight||t===l.V.ShadowExcludeHighlight||t===l.V.Highlight||t===l.V.ObjectAndLayerIdColor)&&(e===(this.parameters.transparent?this.parameters.writeDepth?v.N.TRANSPARENT_MATERIAL:v.N.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:v.N.OPAQUE_MATERIAL)||e===v.N.DRAPED_MATERIAL)}createGLMaterial(e){return new N(e)}createBufferWriter(){return new b.Z(this._vertexBufferLayout)}}class N extends m.m{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==l.V.Color&&this._output!==l.V.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e));const t=this._material.parameters;this.updateTexture(t.textureId);const o=e.camera.viewInverseTransposeMatrix;return(0,a.s)(t.origin,o[3],o[7],o[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?H:T.R5,e)}}class P extends T.uD{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}const I=new P;const z=(0,i.c)(),G=(0,i.c)(),L=(0,i.f)(0,0,1),B=(0,i.c)(),V=(0,i.c)(),W=(0,i.c)(),F=(0,i.c)()},12221:(e,t,o)=>{o.d(t,{Jr:()=>i,Rk:()=>n,d_:()=>l,mX:()=>s});var r=o(21839),a=o(22279);function i({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:o,roughnessFactor:i,emissiveTexture:n,emissiveFactor:s,occlusionTexture:l}){return null==e&&null==t&&null==n&&(null==s||(0,r.h)(s,a.Z))&&null==l&&(null==i||1===i)&&(null==o||1===o||0===o)}const n=[1,1,.5],s=[0,.6,.2],l=[0,1,.2]},73418:(e,t,o)=>{o.d(t,{R5:()=>E,V:()=>S,uD:()=>w});var r=o(22279),a=o(52712),i=o(10714),n=o(55274),s=o(81283),l=o(26139),c=o(82089),d=o(33448),u=o(47705),h=o(33444),m=o(91013),p=o(13148),f=o(45722),v=o(1931),g=o(58123),x=o(98546),b=o(81868),y=o(12221),T=o(90618),M=o(41746),C=o(2449);class w extends c.Zo{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,r.e)(y.Rk),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=m.s2.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=(0,r.f)(0,0,0),this.instancedDoublePrecision=!1,this.normalType=s.W.Attribute,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,r.f)(.2,.2,.2),this.diffuse=(0,r.f)(.8,.8,.8),this.externalColor=(0,a.f)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,r.c)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=m.it.Less,this.textureAlphaMode=m.sf.Blend,this.textureAlphaCutoff=d.H,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=f.m$.Occlude,this.isDecoration=!1}}class S extends c.gy{constructor(){super(...arguments),this.origin=(0,r.c)(),this.slicePlaneLocalOrigin=this.origin}}class E extends h.w{initializeConfiguration(e,t){t.spherical=e.viewingMode===i.RT.Global,t.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?l.q.Default:l.q.None,t.objectAndLayerIdColorInstanced=t.instanced}initializeProgram(e){return this._initializeProgram(e,E.shader)}_initializeProgram(e,t){return new g.B(e.rctx,t.get().build(this.configuration),p.D)}_convertDepthTestFunction(e){return e===m.it.Lequal?M.MT.LEQUAL:M.MT.LESS}_makePipeline(e,t){const o=this.configuration,r=e===b.y.NONE,a=e===b.y.FrontFace;return(0,C.Ey)({blending:o.output!==n.V.Color&&o.output!==n.V.Alpha||!o.transparent?null:r?v.V0:(0,v.ez)(e),culling:O(o)?(0,C.Xt)(o.cullFace):null,depthTest:{func:(0,v.K_)(e,this._convertDepthTestFunction(o.customDepthTest))},depthWrite:(r||a)&&o.writeDepth?C.kn:null,colorWrite:C.wE,stencilWrite:o.hasOccludees?x.v0:null,stencilTest:o.hasOccludees?t?x.a9:x.qh:null,polygonOffset:r||a?null:(0,v.aB)(o.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}function O(e){return e.cullFace!==m.s2.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}E.shader=new u.$(T.D,(()=>o.e(1318).then(o.bind(o,71318))))}}]);