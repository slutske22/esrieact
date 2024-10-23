"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3366],{18580:(e,n,t)=>{t.d(n,{A:()=>V,B:()=>E,C:()=>H,D:()=>I,E:()=>j,F:()=>C,G:()=>k,H:()=>q,I:()=>B,J:()=>P,K:()=>_,L:()=>M,M:()=>F,N:()=>J,a:()=>u,b:()=>f,c:()=>o,d:()=>a,e:()=>c,f:()=>l,g:()=>K,h:()=>s,i:()=>g,j:()=>G,k:()=>y,l:()=>D,m:()=>S,n:()=>w,o:()=>h,p:()=>R,q:()=>A,r:()=>m,s:()=>x,t:()=>p,u:()=>v,v:()=>L,w:()=>d,x:()=>b,y:()=>T,z:()=>z});var r=t(40835),i=t(27243);function c(e){return r.G.extendedSpatialReferenceInfo(e)}function o(e,n,t){return r.G.clip(i.g,e,n,t)}function u(e,n,t){return r.G.cut(i.g,e,n,t)}function f(e,n,t){return r.G.contains(i.g,e,n,t)}function a(e,n,t){return r.G.crosses(i.g,e,n,t)}function l(e,n,t,c){return r.G.distance(i.g,e,n,t,c)}function s(e,n,t){return r.G.equals(i.g,e,n,t)}function g(e,n,t){return r.G.intersects(i.g,e,n,t)}function p(e,n,t){return r.G.touches(i.g,e,n,t)}function d(e,n,t){return r.G.within(i.g,e,n,t)}function G(e,n,t){return r.G.disjoint(i.g,e,n,t)}function h(e,n,t){return r.G.overlaps(i.g,e,n,t)}function m(e,n,t,c){return r.G.relate(i.g,e,n,t,c)}function y(e,n){return r.G.isSimple(i.g,e,n)}function x(e,n){return r.G.simplify(i.g,e,n)}function D(e,n,t=!1){return r.G.convexHull(i.g,e,n,t)}function S(e,n,t){return r.G.difference(i.g,e,n,t)}function w(e,n,t){return r.G.symmetricDifference(i.g,e,n,t)}function R(e,n,t){return r.G.intersect(i.g,e,n,t)}function v(e,n,t=null){return r.G.union(i.g,e,n,t)}function A(e,n,t,c,o,u,f){return r.G.offset(i.g,e,n,t,c,o,u,f)}function L(e,n,t,c,o=!1){return r.G.buffer(i.g,e,n,t,c,o)}function b(e,n,t,c,o,u,f){return r.G.geodesicBuffer(i.g,e,n,t,c,o,u,f)}function T(e,n,t,c=!0){return r.G.nearestCoordinate(i.g,e,n,t,c)}function z(e,n,t){return r.G.nearestVertex(i.g,e,n,t)}function V(e,n,t,c,o){return r.G.nearestVertices(i.g,e,n,t,c,o)}function E(e,n,t,i){if(null==n||null==i)throw new Error("Illegal Argument Exception");const c=r.G.rotate(n,t,i);return c.spatialReference=e,c}function H(e,n,t){if(null==n||null==t)throw new Error("Illegal Argument Exception");const i=r.G.flipHorizontal(n,t);return i.spatialReference=e,i}function I(e,n,t){if(null==n||null==t)throw new Error("Illegal Argument Exception");const i=r.G.flipVertical(n,t);return i.spatialReference=e,i}function j(e,n,t,c,o){return r.G.generalize(i.g,e,n,t,c,o)}function C(e,n,t,c){return r.G.densify(i.g,e,n,t,c)}function k(e,n,t,c,o=0){return r.G.geodesicDensify(i.g,e,n,t,c,o)}function q(e,n,t){return r.G.planarArea(i.g,e,n,t)}function B(e,n,t){return r.G.planarLength(i.g,e,n,t)}function P(e,n,t,c){return r.G.geodesicArea(i.g,e,n,t,c)}function _(e,n,t,c){return r.G.geodesicLength(i.g,e,n,t,c)}function M(e,n,t){return null==n||null==t?[]:r.G.intersectLinesToPoints(i.g,e,n,t)}function F(e,n){r.G.changeDefaultSpatialReferenceTolerance(e,n)}function J(e){r.G.clearDefaultSpatialReferenceTolerance(e)}const K=Object.freeze(Object.defineProperty({__proto__:null,buffer:L,changeDefaultSpatialReferenceTolerance:F,clearDefaultSpatialReferenceTolerance:J,clip:o,contains:f,convexHull:D,crosses:a,cut:u,densify:C,difference:S,disjoint:G,distance:l,equals:s,extendedSpatialReferenceInfo:c,flipHorizontal:H,flipVertical:I,generalize:j,geodesicArea:P,geodesicBuffer:b,geodesicDensify:k,geodesicLength:_,intersect:R,intersectLinesToPoints:M,intersects:g,isSimple:y,nearestCoordinate:T,nearestVertex:z,nearestVertices:V,offset:A,overlaps:h,planarArea:q,planarLength:B,relate:m,rotate:E,simplify:x,symmetricDifference:w,touches:p,union:v,within:d},Symbol.toStringTag,{value:"Module"}))},53366:(e,n,t)=>{t.r(n),t.d(n,{buffer:()=>r.v,changeDefaultSpatialReferenceTolerance:()=>r.M,clearDefaultSpatialReferenceTolerance:()=>r.N,clip:()=>r.c,contains:()=>r.b,convexHull:()=>r.l,crosses:()=>r.d,cut:()=>r.a,densify:()=>r.F,difference:()=>r.m,disjoint:()=>r.j,distance:()=>r.f,equals:()=>r.h,extendedSpatialReferenceInfo:()=>r.e,flipHorizontal:()=>r.C,flipVertical:()=>r.D,generalize:()=>r.E,geodesicArea:()=>r.J,geodesicBuffer:()=>r.x,geodesicDensify:()=>r.G,geodesicLength:()=>r.K,intersect:()=>r.p,intersectLinesToPoints:()=>r.L,intersects:()=>r.i,isSimple:()=>r.k,nearestCoordinate:()=>r.y,nearestVertex:()=>r.z,nearestVertices:()=>r.A,offset:()=>r.q,overlaps:()=>r.o,planarArea:()=>r.H,planarLength:()=>r.I,relate:()=>r.r,rotate:()=>r.B,simplify:()=>r.s,symmetricDifference:()=>r.n,touches:()=>r.t,union:()=>r.u,within:()=>r.w});t(40835),t(27243);var r=t(18580)}}]);