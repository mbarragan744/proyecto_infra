import{b as fe,i as ue,e as oe,a as U,c as ce}from"./BMgd0Fyj.js";import{i as ve}from"./D7iuV7Fv.js";import{G as z,H as j,I as ee,J as H,y as p,K as ae,L as F,g as L,M as de,N as _e,O as he,P as X,Q as B,R as I,S as me,T as ge,U as J,v as pe,V as Y,W as Ee,X as ke,Y as K,Z as re,_ as we,$ as ne,a0 as te,a1 as ie,a2 as xe,a3 as Ne,a4 as P,a5 as Te,a6 as be,a7 as Ae,a8 as Ce,a9 as Se,aa as Ie,ab as Me,ac as De,ad as Re,ae as Oe,af as He,ag as We,p as ye,a as Le,s as Be,c as ze,h as Q,k as y,f as Fe,r as Pe,u as Ve,ah as Ye}from"./CjCuP7Dm.js";import{B as qe,l as Z,p as O}from"./CClzeexG.js";import{c as $}from"./Cby4HzBB.js";function Ge(a,e){return e}function Ue(a,e,n){for(var v=[],h=e.length,f=0;f<h;f++)Ce(e[f].e,v,!0);Se(v,()=>{var i=v.length===0&&n!==null;if(i){var s=n,t=s.parentNode;Ie(t),t.append(s),a.items.clear(),x(a,e[0].prev,e[h-1].next)}for(var d=0;d<h;d++){var l=e[d];i||(a.items.delete(l.k),x(a,l.prev,l.next)),Me(l.e,!i)}a.first===e[0]&&(a.first=e[0].prev)})}function Xe(a,e,n,v,h,f=null){var i=a,s=new Map,t=null,d=(e&ee)!==0,l=(e&ne)!==0,g=(e&te)!==0;if(d){var c=a;i=p?H(ae(c)):c.appendChild(z())}p&&F();var u=null,k=de(()=>{var _=n();return we(_)?_:_==null?[]:re(_)}),m,r=!0;function o(){Je(N,m,i,e,v),u!==null&&(m.length===0?(u.fragment?(i.before(u.fragment),u.fragment=null):ie(u.effect),C.first=u.effect):xe(u.effect,()=>{u=null}))}var C=j(()=>{m=L(k);var _=m.length;let T=!1;if(p){var M=_e(i)===he;M!==(_===0)&&(i=X(),H(i),B(!1),T=!0)}for(var b=new Set,A=pe,D=null,W=Ee(),w=0;w<_;w+=1){p&&I.nodeType===me&&I.data===ge&&(i=I,T=!0,B(!1));var R=m[w],S=v(R,w),E=r?null:s.get(S);E?(l&&J(E.v,R),g?J(E.i,w):E.i=w,W&&A.skipped_effects.delete(E.e)):(E=Ke(r?i:null,D,R,S,w,h,e,n),r&&(E.o=!0,D===null?t=E:D.next=E,D=E),s.set(S,E)),b.add(S)}if(_===0&&f&&!u)if(r)u={fragment:null,effect:Y(()=>f(i))};else{var q=document.createDocumentFragment(),G=z();q.append(G),u={fragment:q,effect:Y(()=>f(G))}}if(p&&_>0&&H(X()),!r)if(W){for(const[se,le]of s)b.has(se)||A.skipped_effects.add(le.e);A.oncommit(o),A.ondiscard(()=>{})}else o();T&&B(!0),L(k)}),N={effect:C,items:s,first:t};r=!1,p&&(i=I)}function Je(a,e,n,v,h){var W,w,R,S;var f=(v&be)!==0,i=e.length,s=a.items,t=a.first,d,l=null,g,c=[],u=[],k,m,r,o;if(f)for(o=0;o<i;o+=1)k=e[o],m=h(k,o),r=s.get(m),(W=r.a)==null||W.measure(),(g??(g=new Set)).add(r);for(o=0;o<i;o+=1){if(k=e[o],m=h(k,o),r=s.get(m),a.first??(a.first=r),!r.o){r.o=!0;var C=l?l.next:t;x(a,l,r),x(a,r,C),V(r,C,n),l=r,c=[],u=[],t=l.next;continue}if((r.e.f&P)!==0&&(ie(r.e),f&&((w=r.a)==null||w.unfix(),(g??(g=new Set)).delete(r))),r!==t){if(d!==void 0&&d.has(r)){if(c.length<u.length){var N=u[0],_;l=N.prev;var T=c[0],M=c[c.length-1];for(_=0;_<c.length;_+=1)V(c[_],N,n);for(_=0;_<u.length;_+=1)d.delete(u[_]);x(a,T.prev,M.next),x(a,l,T),x(a,M,N),t=N,l=M,o-=1,c=[],u=[]}else d.delete(r),V(r,t,n),x(a,r.prev,r.next),x(a,r,l===null?a.first:l.next),x(a,l,r),l=r;continue}for(c=[],u=[];t!==null&&t.k!==m;)(t.e.f&P)===0&&(d??(d=new Set)).add(t),u.push(t),t=t.next;if(t===null)continue;r=t}c.push(r),l=r,t=r.next}if(t!==null||d!==void 0){for(var b=d===void 0?[]:re(d);t!==null;)(t.e.f&P)===0&&b.push(t),t=t.next;var A=b.length;if(A>0){var D=(v&ee)!==0&&i===0?n:null;if(f){for(o=0;o<A;o+=1)(R=b[o].a)==null||R.measure();for(o=0;o<A;o+=1)(S=b[o].a)==null||S.fix()}Ue(a,b,D)}}f&&Te(()=>{var E;if(g!==void 0)for(r of g)(E=r.a)==null||E.apply()})}function Ke(a,e,n,v,h,f,i,s){var t=(i&ne)!==0,d=(i&Ne)===0,l=t?d?ke(n,!1,!1):K(n):n,g=(i&te)===0?h:K(h),c={i:g,v:l,k:v,a:null,e:null,o:!1,prev:e,next:null};try{if(a===null){var u=document.createDocumentFragment();u.append(a=z())}return c.e=Y(()=>f(a,l,g,s)),e!==null&&(e.next=c),c}finally{}}function V(a,e,n){for(var v=a.next?a.next.e.nodes_start:n,h=e?e.e.nodes_start:n,f=a.e.nodes_start;f!==null&&f!==v;){var i=Ae(f);h.before(f),f=i}}function x(a,e,n){e===null?(a.first=n,a.effect.first=n&&n.e):(e.e.next&&(e.e.next.prev=null),e.next=n,e.e.next=n&&n.e),n===null?a.effect.last=e&&e.e:(n.e.prev&&(n.e.prev.next=null),n.prev=e,n.e.prev=e&&e.e)}function Qe(a,e,n,v,h){var s;p&&F();var f=(s=e.$$slots)==null?void 0:s[n],i=!1;f===!0&&(f=e.children,i=!0),f===void 0||f(a,i?()=>v:v)}function Ze(a,e,n,v,h,f){let i=p;p&&F();var s=null;p&&I.nodeType===De&&(s=I,F());var t=p?I:a,d=new qe(t,!1);j(()=>{const l=e()||null;var g=Oe;if(l===null){d.ensure(null,null);return}return d.ensure(l,c=>{if(l){if(s=p?s:document.createElementNS(g,l),fe(s,s),v){p&&ue(l)&&s.append(document.createComment(""));var u=p?ae(s):s.appendChild(z());p&&(u===null?B(!1):H(u)),v(s,u)}He.nodes_end=s,c.before(s)}p&&H(c)}),()=>{}},Re),We(()=>{}),i&&(B(!0),H(t))}/**
 * @license lucide-svelte v0.554.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const $e={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var je=oe("<svg><!><!></svg>");function ia(a,e){const n=Z(e,["children","$$slots","$$events","$$legacy"]),v=Z(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);ye(e,!1);let h=O(e,"name",8,void 0),f=O(e,"color",8,"currentColor"),i=O(e,"size",8,24),s=O(e,"strokeWidth",8,2),t=O(e,"absoluteStrokeWidth",8,!1),d=O(e,"iconNode",24,()=>[]);const l=(...k)=>k.filter((m,r,o)=>!!m&&o.indexOf(m)===r).join(" ");ve();var g=je();$(g,(k,m)=>({...$e,...v,width:i(),height:i(),stroke:f(),"stroke-width":k,class:m}),[()=>(y(t()),y(s()),y(i()),Q(()=>t()?Number(s())*24/Number(i()):s())),()=>(y(h()),y(n),Q(()=>l("lucide-icon","lucide",h()?`lucide-${h()}`:"",n.class)))]);var c=ze(g);Xe(c,1,d,Ge,(k,m)=>{var r=Ve(()=>Ye(L(m),2));let o=()=>L(r)[0],C=()=>L(r)[1];var N=ce(),_=Fe(N);Ze(_,o,!0,(T,M)=>{$(T,()=>({...C()}))}),U(k,N)});var u=Be(c);Qe(u,e,"default",{}),Pe(g),U(a,g),Le()}export{ia as I,Xe as e,Ge as i,Qe as s};
