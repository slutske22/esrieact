"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5567],{69726:(e,t,i)=>{i.d(t,{H:()=>M,b:()=>w,c:()=>H,f:()=>j});var o=i(60704),r=i(59646),s=i(28152),a=i(99817),n=i(55274),l=i(1110),c=i(33045),d=i(16917),u=i(97085),f=i(36985),p=i(3097),h=i(1361),v=i(34328),g=i(89002),m=i(70224),x=i(6916),S=i(63592),C=i(54473),b=i(45393),O=i(84674),A=i(1411),P=i(17983),T=i(35449),E=i(72196),z=i(96390),y=i(79856),I=i(69338),F=i(50645),R=i(96028),_=i(63199);function w(e){const t=new R.N5,{signedDistanceFieldEnabled:i,occlusionTestEnabled:r,horizonCullingEnabled:w,pixelSnappingEnabled:j,hasScreenSizePerspective:M,debugDrawLabelBorder:V,vvSize:U,vvColor:B,hasRotation:$,occludedFragmentFade:W,sampleSignedDistanceFieldTexelCenter:q}=e;t.include(u.Q,e),t.vertex.include(l.rA,e);const{occlusionPass:Y,output:k,oitPass:Q}=e;if(Y)return t.include(f.I,e),t;const{vertex:Z,fragment:G}=t;t.include(x.Y6),t.include(v.A,e),t.include(c.g,e),r&&t.include(p.y),G.include(m.W),G.include(g.a),t.varyings.add("vcolor","vec4"),t.varyings.add("vtc","vec2"),t.varyings.add("vsize","vec2");const X=k===n.V.Highlight,J=X&&r;J&&t.varyings.add("voccluded","float"),Z.uniforms.add(new b.I("viewport",(e=>e.camera.fullViewport)),new C.G("screenOffset",((e,t)=>(0,o.hZ)(N,2*e.screenOffset[0]*t.camera.pixelRatio,2*e.screenOffset[1]*t.camera.pixelRatio))),new C.G("anchorPosition",(e=>H(e))),new A.E("materialColor",(e=>e.color)),new T.m("materialRotation",(e=>e.rotation)),new y.N("tex",(e=>e.texture))),(0,S.Nz)(Z),i&&(Z.uniforms.add(new A.E("outlineColor",(e=>e.outlineColor))),G.uniforms.add(new A.E("outlineColor",(e=>D(e)?e.outlineColor:s.uY)),new T.m("outlineSize",(e=>D(e)?e.outlineSize:0)))),w&&Z.uniforms.add(new O.V("pointDistanceSphere",((e,t)=>{const i=t.camera.eye,o=e.origin;return(0,s.fA)(o[0]-i[0],o[1]-i[1],o[2]-i[2],a.$O.radius)}))),j&&Z.include(d.K),M&&((0,x.pM)(Z),(0,x.OH)(Z)),V&&t.varyings.add("debugBorderCoords","vec4"),t.attributes.add(F.r.UVI,"vec2"),t.attributes.add(F.r.COLOR,"vec4"),t.attributes.add(F.r.SIZE,"vec2"),t.attributes.add(F.r.ROTATION,"float"),(U||B)&&t.attributes.add(F.r.FEATUREATTRIBUTE,"vec4"),Z.code.add(w?E.H`bool behindHorizon(vec3 posModel) {
vec3 camToEarthCenter = pointDistanceSphere.xyz - localOrigin;
vec3 camToPos = pointDistanceSphere.xyz + posModel;
float earthRadius = pointDistanceSphere.w;
float a = dot(camToPos, camToPos);
float b = dot(camToPos, camToEarthCenter);
float c = dot(camToEarthCenter, camToEarthCenter) - earthRadius * earthRadius;
return b > 0.0 && b < a && b * b  > a * c;
}`:E.H`bool behindHorizon(vec3 posModel) { return false; }`),Z.main.add(E.H`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      // Project outside of clip plane
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
      return;
    }

    if (behindHorizon(projectAux.posModel)) {
      // Project outside of clip plane
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
      return;
    }

    vec2 inputSize;
    ${(0,E.If)(M,E.H`
        inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,E.H`
        inputSize = size;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${(0,E.If)(U,E.H`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);

    ${(0,E.If)(r,E.H`
    bool visible = testHUDVisibility(posProj);
    if (!visible) {
      vtc = vec2(0.0);
      ${(0,E.If)(V,"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);")}
      return;
    }`)}
    ${(0,E.If)(J,E.H`voccluded = visible ? 0.0 : 1.0;`)}
  `);const K=E.H`
      vec2 uvi1 = vec2(uvi.x < 0.0 ? 1.0 : 0.0, uvi.y < 0.0 ? 1.0 : 0.0);
      vec2 uv = abs(uvi + uvi1);
      vec2 texSize = vec2(textureSize(tex, 0));
      uv.x = uv.x >= ${L} ? 1.0 : uv.x / texSize.x;
      uv.y = uv.y >= ${L} ? 1.0 : uv.y / texSize.y;
      quadOffset.xy = (uvi1 - anchorPosition) * 2.0 * combinedSize;

      ${(0,E.If)($,E.H`
          float angle = radians(materialRotation + rotation);
          float cosAngle = cos(angle);
          float sinAngle = sin(angle);
          mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

          quadOffset.xy = rotate * quadOffset.xy;
        `)}

      quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,ee=j?i?E.H`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:E.H`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:E.H`posProj += quadOffset;`;Z.main.add(E.H`
    ${K}
    ${B?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${(0,E.If)(k===n.V.ObjectAndLayerIdColor,E.H`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${E.H.float(_.Q)};
    ${(0,E.If)(i,`alphaDiscard = alphaDiscard && outlineColor.a < ${E.H.float(_.Q)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${ee}
      gl_Position = posProj;
    }

    vtc = uv;

    ${(0,E.If)(V,E.H`debugBorderCoords = vec4(uv01, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `),G.uniforms.add(new y.N("tex",(e=>e.texture))),W&&!X&&G.uniforms.add(new z.x("depthMap",(e=>e.mainDepth)),new P.U("occludedOpacity",(e=>e.hudOccludedFragmentOpacity)));const te=V?E.H`(isBorder > 0.0 ? 0.0 : ${E.H.float(_.Q)})`:E.H.float(_.Q),ie=E.H`
    ${(0,E.If)(V,E.H`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    vec2 samplePos = vtc;

    ${(0,E.If)(q,E.H`
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`)}

    ${i?E.H`
      vec4 fillPixelColor = vcolor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgbaTofloat(texture(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${te} ||
          fillPixelColor.a + outlinePixelColor.a < ${E.H.float(_.Q)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${(0,E.If)(!X,E.H`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${te}) {
          discard;
        }

        ${(0,E.If)(!X,E.H`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:E.H`
          vec4 texColor = texture(tex, samplePos, -0.5);
          if (texColor.a < ${te}) {
            discard;
          }
          ${(0,E.If)(!X,E.H`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${(0,E.If)(W&&!X,E.H`
        float zSample = texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x;
        if (zSample < gl_FragCoord.z) {
          fragColor *= occludedOpacity;
        }
        `)}

    ${(0,E.If)(!X&&V,E.H`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}
  `;switch(k){case n.V.Color:case n.V.ColorEmission:t.outputs.add("fragColor","vec4",0),k===n.V.ColorEmission&&t.outputs.add("fragEmission","vec4",1),Q===I.Y.ColorAlpha&&t.outputs.add("fragAlpha","float",k===n.V.ColorEmission?2:1),G.main.add(E.H`
        ${ie}
        ${(0,E.If)(Q===I.Y.FrontFace,E.H`fragColor.rgb /= fragColor.a;`)}
        ${(0,E.If)(k===n.V.ColorEmission,E.H`fragEmission = vec4(0.0);`)}
        ${(0,E.If)(Q===I.Y.ColorAlpha,E.H`fragAlpha = fragColor.a;`)}`);break;case n.V.ObjectAndLayerIdColor:G.main.add(E.H`
        ${ie}
        outputObjectAndLayerIdColor();`);break;case n.V.Highlight:t.include(h.Q,e),G.main.add(E.H`
        ${ie}
        outputHighlight(${(0,E.If)(J,E.H`voccluded == 1.0`,E.H`false`)});`)}return t}function D(e){return e.outlineColor[3]>0&&e.outlineSize>0}function H(e){return e.textureIsSignedDistanceField?(t=e.anchorPosition,i=e.distanceFieldBoundingBox,r=N,(0,o.hZ)(r,t[0]*(i[2]-i[0])+i[0],t[1]*(i[3]-i[1])+i[1])):(0,o.C)(N,e.anchorPosition),N;var t,i,r}const N=(0,r.vt)(),j=32e3,L=E.H.float(j),M=Object.freeze(Object.defineProperty({__proto__:null,build:w,calculateAnchorPosition:H,fullUV:j},Symbol.toStringTag,{value:"Module"}))},70397:(e,t,i)=>{i.d(t,{E:()=>s});var o=i(58359),r=(i(68490),i(42120));function s(e,t,i){return!!(0,r.F)(e,t,a,i.spatialReference)&&(i.x=a[0],i.y=a[1],i.z=a[2],!0)}const a=(0,o.vt)()},36985:(e,t,i)=>{i.d(t,{I:()=>a});var o=i(16917),r=i(23233),s=i(72196);function a(e,t){const{vertex:i,fragment:a}=e;e.include(r.Z,t),i.include(o.K),i.main.add(s.H`vec4 posProjCenter;
if (dot(position, position) > 0.0) {
ProjectHUDAux projectAux;
vec4 posProj = projectPositionHUD(projectAux);
posProjCenter = alignToPixelCenter(posProj, viewport.zw);
forwardViewPosDepth(projectAux.posView);
vec3 vpos = projectAux.posModel;
if (rejectBySlice(vpos)) {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
} else {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
gl_Position = posProjCenter;
gl_PointSize = 1.0;`),a.main.add(s.H`fragColor = vec4(1);
if(discardByTerrainDepth()) {
fragColor.g = 0.5;
}`)}},62331:(e,t,i)=>{i.d(t,{R:()=>k});var o=i(92504),r=i(25423),s=i(78607),a=i(21742),n=i(86128),l=i(60704),c=i(59646),d=i(24121),u=i(58359),f=i(28152);function p(e){return function(e){return e instanceof Float32Array&&e.length>=16}(e)||function(e){return Array.isArray(e)&&e.length>=16}(e)}var h=i(80510),v=i(57813),g=i(69463),m=i(19620),x=i(11110),S=i(55274),C=i(97085),b=i(36340),O=i(89140),A=i(45722),P=i(38323),T=i(28953),E=i(58947),z=i(50645);class y{constructor(){this.scale=0,this.factor=0,this.minScaleFactor=0}}var I=i(81500),F=i(29117),R=i(69726),_=i(47705),w=i(28347),D=i(69338),H=i(1931),N=i(41746),j=i(2449);class L extends w.w{constructor(e,t){super(e,t,new _.$(R.H,(()=>i.e(5466).then(i.bind(i,35466))))),this.primitiveType=t.occlusionPass?N.WR.POINTS:N.WR.TRIANGLES}initializePipeline(e){const{oitPass:t,hasPolygonOffset:i,draped:o,output:r,depthTestEnabled:s,occlusionPass:a}=e,n=t===D.Y.NONE,l=t===D.Y.ColorAlpha,c=r===S.V.Highlight,d=s&&!o&&!l&&!a&&!c;return(0,j.Ey)({blending:(0,S.RN)(r)?n?j.RC:(0,H.ez)(t):null,depthTest:s&&!o?{func:N.MT.LEQUAL}:null,depthWrite:d?j.Uy:null,drawBuffers:(0,H.m6)(t,r),colorWrite:j.kn,polygonOffset:i?M:null})}}const M={factor:0,units:-4};var V=i(66866),U=i(26139),B=i(15420),$=i(77941),W=i(9319);class q extends W.E{constructor(e){super(),this.spherical=e,this.screenCenterOffsetUnitsEnabled=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.vvSize=!1,this.vvColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.hasPolygonOffset=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.occlusionPass=!1,this.occludedFragmentFade=!1,this.objectAndLayerIdColorInstanced=!1,this.horizonCullingEnabled=!0,this.isFocused=!0,this.textureCoordinateType=U.I.None,this.emissionSource=B.ZX.None,this.discardInvisibleFragments=!0,this.hasVvInstancing=!1,this.snowCover=!1}}(0,V._)([(0,$.W)()],q.prototype,"screenCenterOffsetUnitsEnabled",void 0),(0,V._)([(0,$.W)()],q.prototype,"occlusionTestEnabled",void 0),(0,V._)([(0,$.W)()],q.prototype,"signedDistanceFieldEnabled",void 0),(0,V._)([(0,$.W)()],q.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),(0,V._)([(0,$.W)()],q.prototype,"vvSize",void 0),(0,V._)([(0,$.W)()],q.prototype,"vvColor",void 0),(0,V._)([(0,$.W)()],q.prototype,"hasVerticalOffset",void 0),(0,V._)([(0,$.W)()],q.prototype,"hasScreenSizePerspective",void 0),(0,V._)([(0,$.W)()],q.prototype,"hasRotation",void 0),(0,V._)([(0,$.W)()],q.prototype,"debugDrawLabelBorder",void 0),(0,V._)([(0,$.W)()],q.prototype,"hasPolygonOffset",void 0),(0,V._)([(0,$.W)()],q.prototype,"depthTestEnabled",void 0),(0,V._)([(0,$.W)()],q.prototype,"pixelSnappingEnabled",void 0),(0,V._)([(0,$.W)()],q.prototype,"draped",void 0),(0,V._)([(0,$.W)()],q.prototype,"terrainDepthTest",void 0),(0,V._)([(0,$.W)()],q.prototype,"cullAboveTerrain",void 0),(0,V._)([(0,$.W)()],q.prototype,"occlusionPass",void 0),(0,V._)([(0,$.W)()],q.prototype,"occludedFragmentFade",void 0),(0,V._)([(0,$.W)()],q.prototype,"objectAndLayerIdColorInstanced",void 0),(0,V._)([(0,$.W)()],q.prototype,"horizonCullingEnabled",void 0),(0,V._)([(0,$.W)()],q.prototype,"isFocused",void 0);var Y=i(63199);class k extends A.im{constructor(e,t){super(e,me),this.produces=new Map([[P.N.HUD_MATERIAL,e=>(0,S.Mb)(e)&&!this.parameters.drawAsLabel],[P.N.LABEL_MATERIAL,e=>(0,S.Mb)(e)&&this.parameters.drawAsLabel],[P.N.OCCLUSION_PIXELS,()=>this.parameters.occlusionTest],[P.N.DRAPED_MATERIAL,e=>this.parameters.draped&&(0,S.Mb)(e)]]),this._visible=!0,this._configuration=new q(t)}getConfiguration(e,t){const i=this.parameters.draped;return super.getConfiguration(e,t,this._configuration),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled="screen"===this.parameters.centerOffsetUnits,this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=i,this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.hasRotation=this.parameters.hasRotation,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.occlusionPass=t.slot===P.N.OCCLUSION_PIXELS,this._configuration.occludedFragmentFade=!i&&this.parameters.occludedFragmentFade,this._configuration.horizonCullingEnabled=this.parameters.horizonCullingEnabled,this._configuration.isFocused=this.parameters.isFocused,this._configuration.depthTestEnabled=this.parameters.depthEnabled||t.slot===P.N.OCCLUSION_PIXELS,(0,S.RN)(e)&&(this._configuration.debugDrawLabelBorder=!!m.b.LABELS_SHOW_BORDER),this._configuration.oitPass=t.oitPass,this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration}intersect(e,t,i,o,s,n){const{options:{selectionMode:l,hud:c,excludeLabels:p},point:h,camera:v}=i,{parameters:g}=this;if(!l||!c||p&&g.isLabel||!e.visible||!h||!v)return;const m=e.attributes.get(z.r.FEATUREATTRIBUTE),x=null==m?null:(0,f.ci)(m.data,ue),{scaleX:S,scaleY:C}=be(x,g,v.pixelRatio);(0,r.z0)(se,t),e.attributes.has(z.r.FEATUREATTRIBUTE)&&function(e){const t=e[0],i=e[1],o=e[2],r=e[3],s=e[4],a=e[5],n=e[6],l=e[7],c=e[8],d=1/Math.sqrt(t*t+i*i+o*o),u=1/Math.sqrt(r*r+s*s+a*a),f=1/Math.sqrt(n*n+l*l+c*c);e[0]=t*d,e[1]=i*d,e[2]=o*d,e[3]=r*u,e[4]=s*u,e[5]=a*u,e[6]=n*f,e[7]=l*f,e[8]=c*f}(se);const b=e.attributes.get(z.r.POSITION),O=e.attributes.get(z.r.SIZE),A=e.attributes.get(z.r.NORMAL),P=e.attributes.get(z.r.ROTATION),y=e.attributes.get(z.r.CENTEROFFSETANDDISTANCE);(0,E.vA)(b.size>=3);const I=(0,R.c)(g),F="screen"===this.parameters.centerOffsetUnits;for(let r=0;r<b.data.length/b.size;r++){const e=r*b.size;(0,d.i)(J,b.data[e],b.data[e+1],b.data[e+2]),(0,d.t)(J,J,t),(0,d.t)(J,J,v.viewMatrix);const o=r*y.size;if((0,d.i)(ce,y.data[o],y.data[o+1],y.data[o+2]),!F&&(J[0]+=ce[0],J[1]+=ce[1],0!==ce[2])){const e=ce[2];(0,d.n)(ce,J),(0,d.d)(J,J,(0,d.g)(ce,ce,e))}const s=r*A.size;if((0,d.i)(K,A.data[s],A.data[s+1],A.data[s+2]),Z(K,se,v,fe),Oe(this.parameters,J,fe,v,X),v.applyProjection(J,ee),ee[0]>-1){F&&(ce[0]||ce[1])&&(ee[0]+=ce[0]*v.pixelRatio,0!==ce[1]&&(ee[1]+=(0,T.m0)(ce[1],X.factorAlignment)*v.pixelRatio),v.unapplyProjection(ee,J)),ee[0]+=this.parameters.screenOffset[0]*v.pixelRatio,ee[1]+=this.parameters.screenOffset[1]*v.pixelRatio,ee[0]=Math.floor(ee[0]),ee[1]=Math.floor(ee[1]);const e=r*O.size;ve[0]=O.data[e],ve[1]=O.data[e+1],(0,T.MD)(ve,X.factor,ve);const t=pe*v.pixelRatio;let o=0;g.textureIsSignedDistanceField&&(o=Math.min(g.outlineSize,.5*ve[0])*v.pixelRatio/2),ve[0]*=S,ve[1]*=C;const s=r*P.size,l=g.rotation+P.data[s];if(G(h,ee[0],ee[1],ve,t,o,l,g,I)){const e=i.ray;if((0,d.t)(ie,J,(0,a.B8)(ne,v.viewMatrix)),ee[0]=h[0],ee[1]=h[1],v.unprojectFromRenderScreen(ee,J)){const t=(0,u.vt)();(0,d.c)(t,e.direction);const i=1/(0,d.l)(t);(0,d.g)(t,t,i),n((0,d.j)(e.origin,J)*i,t,-1,ie)}}}}}intersectDraped(e,t,i,o,r){const s=e.attributes.get(z.r.POSITION),a=e.attributes.get(z.r.SIZE),n=e.attributes.get(z.r.ROTATION),l=this.parameters,c=(0,R.c)(l),d=e.attributes.get(z.r.FEATUREATTRIBUTE),u=null==d?null:(0,f.ci)(d.data,ue),{scaleX:p,scaleY:h}=be(u,l,e.screenToWorldRatio),v=he*e.screenToWorldRatio;for(let f=0;f<s.data.length/s.size;f++){const t=f*s.size,d=s.data[t],u=s.data[t+1],g=f*a.size;ve[0]=a.data[g],ve[1]=a.data[g+1];let m=0;l.textureIsSignedDistanceField&&(m=Math.min(l.outlineSize,.5*ve[0])*e.screenToWorldRatio/2),ve[0]*=p,ve[1]*=h;const x=f*n.size,S=l.rotation+n.data[x];G(i,d,u,ve,v,m,S,l,c)&&o(r.distance,r.normal,-1)}}createBufferWriter(){return new Ce}applyShaderOffsetsView(e,t,i,o,r,s,a){const n=Z(t,i,r,fe);return this._applyVerticalGroundOffsetView(e,n,r,a),Oe(this.parameters,a,n,r,s),this._applyPolygonOffsetView(a,n,o[3],r,a),this._applyCenterOffsetView(a,o,a),a}applyShaderOffsetsNDC(e,t,i,o,r){return this._applyCenterOffsetNDC(e,t,i,o),null!=r&&(0,d.c)(r,o),this._applyPolygonOffsetNDC(o,t,i,o),o}_applyPolygonOffsetView(e,t,i,r,s){const a=r.aboveGround?1:-1;let n=Math.sign(i);0===n&&(n=a);const l=a*n;if(this.parameters.shaderPolygonOffset<=0)return(0,d.c)(s,e);const c=(0,o.qE)(Math.abs(t.cosAngle),.01,1),u=1-Math.sqrt(1-c*c)/c/r.viewport[2];return(0,d.g)(s,e,l>0?u:1/u),s}_applyVerticalGroundOffsetView(e,t,i,o){const r=(0,d.l)(e),s=i.aboveGround?1:-1,a=i.computeRenderPixelSizeAtDist(r)*C.R,n=(0,d.g)(J,t.normal,s*a);return(0,d.f)(o,e,n),o}_applyCenterOffsetView(e,t,i){const o="screen"!==this.parameters.centerOffsetUnits;return i!==e&&(0,d.c)(i,e),o&&(i[0]+=t[0],i[1]+=t[1],t[2]&&((0,d.n)(K,i),(0,d.a)(i,i,(0,d.g)(K,K,t[2])))),i}_applyCenterOffsetNDC(e,t,i,o){const r="screen"!==this.parameters.centerOffsetUnits;return o!==e&&(0,d.c)(o,e),r||(o[0]+=t[0]/i.fullWidth*2,o[1]+=t[1]/i.fullHeight*2),o}_applyPolygonOffsetNDC(e,t,i,o){const r=this.parameters.shaderPolygonOffset;if(e!==o&&(0,d.c)(o,e),r){const e=i.aboveGround?1:-1,s=e*Math.sign(t[3]);o[2]-=(s||e)*r}return o}set visible(e){this._visible=e}get visible(){const{color:e,outlineSize:t,outlineColor:i}=this.parameters,o=e[3]>=Y.Q||t>=Y.Q&&i[3]>=Y.Q;return this._visible&&o}createGLMaterial(e){return new Q(e)}calculateRelativeScreenBounds(e,t,i=(0,h.vt)()){return function(e,t,i,o){o[0]=e.anchorPosition[0]*-t[0]+e.screenOffset[0]*i,o[1]=e.anchorPosition[1]*-t[1]+e.screenOffset[1]*i}(this.parameters,e,t,i),i[2]=i[0]+e[0],i[3]=i[1]+e[1],i}}class Q extends O.m8{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(L,e)}}function Z(e,t,i,o){return p(t)&&(t=(0,r.z0)(ae,t)),(0,d.o)(o.normal,e,t),(0,d.t)(o.normal,o.normal,i.viewInverseTransposeMatrix),o.cosAngle=(0,d.e)(te,ge),o}function G(e,t,i,r,s,a,n,c,d){let u=t-s-r[0]*d[0],f=u+r[0]+2*s,p=i-s-r[1]*d[1],h=p+r[1]+2*s;const v=c.distanceFieldBoundingBox;return c.textureIsSignedDistanceField&&null!=v&&(u+=r[0]*v[0],p+=r[1]*v[1],f-=r[0]*(1-v[2]),h-=r[1]*(1-v[3]),u-=a,f+=a,p-=a,h+=a),(0,l.hZ)(re,t,i),(0,l.e$)(oe,e,re,(0,o.kU)(n)),oe[0]>u&&oe[0]<f&&oe[1]>p&&oe[1]<h}const X=new class{constructor(){this.factor=new y,this.factorAlignment=new y}},J=(0,u.vt)(),K=(0,u.vt)(),ee=(0,f.vt)(),te=(0,u.vt)(),ie=(0,u.vt)(),oe=(0,c.vt)(),re=(0,c.vt)(),se=(0,s.vt)(),ae=(0,s.vt)(),ne=(0,n.vt)(),le=(0,f.vt)(),ce=(0,u.vt)(),de=(0,u.vt)(),ue=(0,f.vt)(),fe={normal:te,cosAngle:0},pe=1,he=2,ve=(0,c.fA)(0,0),ge=(0,u.fA)(0,0,1);class me extends O.NV{constructor(){super(...arguments),this.renderOccluded=A.m$.Occlude,this.isDecoration=!1,this.color=(0,f.CN)(1,1,1,1),this.polygonOffset=!1,this.anchorPosition=(0,c.fA)(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=(0,f.CN)(1,1,1,1),this.outlineSize=0,this.distanceFieldBoundingBox=(0,f.vt)(),this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.occludedFragmentFade=!1,this.horizonCullingEnabled=!1,this.centerOffsetUnits="world",this.drawAsLabel=!1,this.depthEnabled=!0,this.isFocused=!0,this.focusStyle="bright",this.draped=!1,this.isLabel=!1}}const xe=(0,x.BP)().vec3f(z.r.POSITION).vec3f(z.r.NORMAL).vec2i16(z.r.UVI).vec4u8(z.r.COLOR).vec2f(z.r.SIZE).f32(z.r.ROTATION).vec4f(z.r.CENTEROFFSETANDDISTANCE).vec4f(z.r.FEATUREATTRIBUTE),Se=xe.clone().vec4u8(z.r.OLIDCOLOR);class Ce{constructor(){this.vertexBufferLayout=(0,b.E)()?Se:xe}elementCount(e){return 6*e.get(z.r.POSITION).indices.length}write(e,t,i,o,r,s){const{position:a,normal:n,uvi:l,color:c,size:d,rotation:u,centerOffsetAndDistance:f,featureAttribute:p}=r;(0,I.Hk)(i.get(z.r.POSITION),e,a,s,6),(0,I.p1)(i.get(z.r.NORMAL),t,n,s,6);const h=i.get(z.r.UVI)?.data;let g=0,m=0,x=-1-R.f,S=-1-R.f;h&&h.length>=4&&(g=h[0],m=h[1],x=-1-h[2],S=-1-h[3]);let C=i.get(z.r.POSITION).indices.length,b=s;for(let v=0;v<C;++v)l.set(b,0,g),l.set(b,1,m),b++,l.set(b,0,x),l.set(b,1,m),b++,l.set(b,0,x),l.set(b,1,S),b++,l.set(b,0,x),l.set(b,1,S),b++,l.set(b,0,g),l.set(b,1,S),b++,l.set(b,0,g),l.set(b,1,m),b++;(0,I.tb)(i.get(z.r.COLOR),4,c,s,6);const{data:O,indices:A}=i.get(z.r.SIZE);C=A.length,b=s;for(let v=0;v<C;++v){const e=O[2*A[v]],t=O[2*A[v]+1];for(let i=0;i<6;++i)d.set(b,0,e),d.set(b,1,t),b++}if((0,I.uO)(i.get(z.r.ROTATION),u,s,6),i.get(z.r.CENTEROFFSETANDDISTANCE)?(0,I.Ut)(i.get(z.r.CENTEROFFSETANDDISTANCE),f,s,6):(0,I.Pq)(f,s,6*C),i.get(z.r.FEATUREATTRIBUTE)?(0,I.Ut)(i.get(z.r.FEATUREATTRIBUTE),p,s,6):(0,I.Pq)(p,s,6*C),null!=o){const e=i.get(z.r.POSITION)?.indices;if(e){const t=e.length,i=r.getField(z.r.OLIDCOLOR,v.XP);(0,I.vx)(o,i,t,s,6)}}return{numVerticesPerItem:6,numItems:C}}intersect(e,t,i,o,r,s,n){const{options:{selectionMode:l,hud:c,excludeLabels:f},point:p,camera:h}=o;if(!l||!c||f&&t.isLabel||!p)return;const g=this.vertexBufferLayout.createView(e),m=g.getField(z.r.POSITION,v.xs),x=g.getField(z.r.NORMAL,v.xs),S=g.getField(z.r.ROTATION,v.Y$),C=g.getField(z.r.SIZE,v.gH),b=g.getField(z.r.FEATUREATTRIBUTE,v.Eq),O=g.getField(z.r.CENTEROFFSETANDDISTANCE,v.Eq),A="screen"===t.centerOffsetUnits,P=(0,R.c)(t);if(null==m||null==x||null==S||null==C||null==O||null==h)return;const E=null==b?null:b.getVec(0,ue),{scaleX:y,scaleY:I}=be(E,t,h.pixelRatio),F=m.count/6;for(let v=0;v<F;v++){const e=6*v;if(m.getVec(e,J),null!=i&&(0,d.f)(J,J,i),(0,d.t)(J,J,h.viewMatrix),O.getVec(e,le),(0,d.i)(ce,le[0],le[1],le[2]),!A&&(J[0]+=ce[0],J[1]+=ce[1],0!==ce[2])){const e=ce[2];(0,d.n)(ce,J),(0,d.d)(J,J,(0,d.g)(ce,ce,e))}if(x.getVec(e,K),Z(K,se,h,fe),Oe(t,J,fe,h,X),h.applyProjection(J,ee),ee[0]>-1){A&&(ce[0]||ce[1])&&(ee[0]+=ce[0]*h.pixelRatio,0!==ce[1]&&(ee[1]+=(0,T.m0)(ce[1],X.factorAlignment)*h.pixelRatio),h.unapplyProjection(ee,J)),ee[0]+=t.screenOffset[0]*h.pixelRatio,ee[1]+=t.screenOffset[1]*h.pixelRatio,ee[0]=Math.floor(ee[0]),ee[1]=Math.floor(ee[1]),C.getVec(e,ve),(0,T.MD)(ve,X.factor,ve);const i=pe*h.pixelRatio;let r=0;t.textureIsSignedDistanceField&&(r=Math.min(t.outlineSize,.5*ve[0])*h.pixelRatio/2),ve[0]*=y,ve[1]*=I;const s=S.get(e),l=t.rotation+s;if(G(p,ee[0],ee[1],ve,i,r,l,t,P)){const e=o.ray;if((0,d.t)(ie,J,(0,a.B8)(ne,h.viewMatrix)),ee[0]=p[0],ee[1]=p[1],h.unprojectFromRenderScreen(ee,J)){const t=(0,u.vt)();(0,d.c)(t,e.direction);const i=1/(0,d.l)(t);(0,d.g)(t,t,i),n((0,d.j)(e.origin,J)*i,t,v,ie)}}}}}}function be(e,t,i){return null==e||null==t.vvSize?{scaleX:i,scaleY:i}:((0,g.VC)(de,t,e),{scaleX:de[0]*i,scaleY:de[1]*i})}function Oe(e,t,i,o,r){if(!e.verticalOffset?.screenLength)return e.screenSizePerspective||e.screenSizePerspectiveAlignment?Ae(e,r,(0,d.l)(t),i.cosAngle):(r.factor.scale=1,r.factorAlignment.scale=1),t;const s=(0,d.l)(t),a=e.screenSizePerspectiveAlignment??e.screenSizePerspective,n=(0,F.kE)(o,s,e.verticalOffset,i.cosAngle,a);return Ae(e,r,s,i.cosAngle),(0,d.g)(i.normal,i.normal,n),(0,d.f)(t,t,i.normal)}function Ae(e,t,i,o){null!=e.screenSizePerspective?(0,T.cJ)(o,i,e.screenSizePerspective,t.factor):(t.factor.scale=1,t.factor.factor=0,t.factor.minScaleFactor=0),null!=e.screenSizePerspectiveAlignment?(0,T.cJ)(o,i,e.screenSizePerspectiveAlignment,t.factorAlignment):(t.factorAlignment.factor=t.factor.factor,t.factorAlignment.scale=t.factor.scale,t.factorAlignment.minScaleFactor=t.factor.minScaleFactor)}}}]);