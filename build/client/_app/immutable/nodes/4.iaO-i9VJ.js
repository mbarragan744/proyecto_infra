import{c as R,a as n,f as u,t as G,s as v}from"../chunks/BMgd0Fyj.js";import{f as W,p as le,a as ve,s as d,c as t,g as a,u as H,r as e,n as J,t as M}from"../chunks/CjCuP7Dm.js";import{I as ce,s as pe,e as K,i as ue}from"../chunks/CYYjoGKG.js";import{l as me,s as xe,i as N}from"../chunks/CClzeexG.js";import{a as fe,B as O,b as ge}from"../chunks/Cby4HzBB.js";import{o as _e}from"../chunks/DOXevDdN.js";import{g as Q}from"../chunks/BEL6xb7T.js";import"../chunks/D7iuV7Fv.js";function be(D,$){const f=me($,["children","$$slots","$$events","$$legacy"]);/**
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
 */const y=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];ce(D,xe({name:"package"},()=>f,{get iconNode(){return y},children:(E,V)=>{var m=R(),P=W(m);pe(P,$,"default",{}),n(E,m)},$$slots:{default:!0}}))}var he=u('<div class="text-center py-12 bg-secondary/50 rounded-lg"><p class="text-lg text-muted-foreground mb-6">Por favor inicia sesión para ver tus órdenes</p> <!></div>'),$e=u('<div class="text-center py-12 bg-secondary/50 rounded-lg"><!> <p class="text-lg text-muted-foreground mb-6">No tienes órdenes todavía</p> <!></div>'),ye=u('<div class="flex justify-between text-sm"><span> </span> <span class="text-foreground font-medium"> </span></div>'),we=u('<p class="text-xs text-muted-foreground mt-2"> </p>'),De=u('<div class="bg-card p-6 rounded-lg border border-border"><div class="flex items-start justify-between mb-4"><div><h3 class="text-lg font-semibold text-foreground"> </h3> <p class="text-sm text-muted-foreground"> </p></div> <span> </span></div> <div class="mb-4"><p class="text-sm text-muted-foreground mb-2"> </p> <div class="space-y-1"></div></div> <div class="border-t border-border pt-4"><div class="flex justify-between"><span class="font-semibold text-foreground">Total:</span> <span class="font-bold text-lg text-accent"> </span></div> <!></div></div>'),Ee=u('<div class="space-y-4"></div>'),Pe=u('<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><h1 class="text-3xl font-bold text-foreground mb-8">Mis Órdenes</h1> <!></div>');function Ne(D,$){le($,!0);let f=H(()=>{let s;return fe.subscribe(r=>s=r)(),s}),y=H(()=>{if(!a(f))return[];let s=[];return _e.subscribe(r=>s=r)(),s.filter(r=>r.userId===a(f).id)});const E={pending:"Pendiente",confirmed:"Confirmada",shipped:"Enviada",delivered:"Entregada"},V={pending:"bg-yellow-100 text-yellow-800",confirmed:"bg-blue-100 text-blue-800",shipped:"bg-purple-100 text-purple-800",delivered:"bg-green-100 text-green-800"};var m=Pe(),P=d(t(m),2);{var X=s=>{var r=he(),S=d(t(r),2);O(S,{onclick:()=>Q("/"),class:"bg-accent text-accent-foreground",children:(k,q)=>{J();var l=G("Volver al inicio");n(k,l)},$$slots:{default:!0}}),e(r),n(s,r)},Y=s=>{var r=R(),S=W(r);{var k=l=>{var c=$e(),x=t(c);be(x,{class:"w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50"});var o=d(x,4);O(o,{onclick:()=>Q("/"),class:"bg-accent text-accent-foreground",children:(g,w)=>{J();var _=G("Empezar a comprar");n(g,_)},$$slots:{default:!0}}),e(c),n(l,c)},q=l=>{var c=Ee();K(c,21,()=>a(y),x=>x.id,(x,o)=>{var g=De(),w=t(g),_=t(w),A=t(_),Z=t(A,!0);e(A);var B=d(A,2),ee=t(B,!0);e(B),e(_);var j=d(_,2),te=t(j,!0);e(j),e(w);var z=d(w,2),I=t(z),ae=t(I);e(I);var C=d(I,2);K(C,21,()=>a(o).items,ue,(p,i)=>{var b=ye(),h=t(b),de=t(h);e(h);var U=d(h,2),ne=t(U);e(U),e(b),M(ie=>{v(de,`${a(i).name??""} x ${a(i).quantity??""}`),v(ne,`$${ie??""}`)},[()=>(a(i).price*a(i).quantity).toFixed(2)]),n(p,b)}),e(C),e(z);var F=d(z,2),L=t(F),T=d(t(L),2),se=t(T);e(T),e(L);var re=d(L,2);{var oe=p=>{var i=we(),b=t(i);e(i),M(h=>v(b,`Entrega estimada: ${h??""}`),[()=>new Date(a(o).deliveryDate).toLocaleDateString("es-ES")]),n(p,i)};N(re,p=>{a(o).deliveryDate&&p(oe)})}e(F),e(g),M((p,i)=>{v(Z,a(o).id),v(ee,p),ge(j,1,`px-3 py-1 rounded-full text-sm font-semibold ${V[a(o).status]}`),v(te,E[a(o).status]),v(ae,`Artículos (${a(o).items.length??""})`),v(se,`$${i??""}`)},[()=>new Date(a(o).createdAt).toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric"}),()=>a(o).total.toFixed(2)]),n(x,g)}),e(c),n(l,c)};N(S,l=>{a(y).length===0?l(k):l(q,!1)},!0)}n(s,r)};N(P,s=>{a(f)?s(Y,!1):s(X)})}e(m),n(D,m),ve()}export{Ne as component};
