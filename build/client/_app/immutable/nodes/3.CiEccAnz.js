import{c as ct,a as i,d as vt,f as $,t as E,s as v}from"../chunks/BMgd0Fyj.js";import{f as pt,p as ut,a as ft,s as o,c as e,g as t,u as z,r,n as B,t as J}from"../chunks/CjCuP7Dm.js";import{I as bt,s as xt,e as _t}from"../chunks/CYYjoGKG.js";import{l as gt,s as mt,i as ht}from"../chunks/CClzeexG.js";import{B as N,s as K,a as $t}from"../chunks/Cby4HzBB.js";import{c as b}from"../chunks/CIvDA1ud.js";import{o as yt}from"../chunks/DOXevDdN.js";import{g as Q}from"../chunks/BEL6xb7T.js";import"../chunks/D7iuV7Fv.js";function kt(y,x){const _=gt(x,["children","$$slots","$$events","$$legacy"]);/**
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
 */const l=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];bt(y,mt({name:"trash-2"},()=>_,{get iconNode(){return l},children:(p,V)=>{var g=ct(),m=pt(g);xt(m,x,"default",{}),i(p,g)},$$slots:{default:!0}}))}var wt=$('<div class="text-center py-12 bg-secondary/50 rounded-lg"><p class="text-lg text-muted-foreground mb-6">Tu carrito está vacío</p> <!></div>'),Ct=$('<div class="flex gap-4 bg-card p-4 rounded-lg border border-border"><img class="w-20 h-20 object-cover rounded-md bg-secondary"/> <div class="flex-1"><h3 class="font-semibold text-foreground"> </h3> <p class="text-sm text-muted-foreground"> </p></div> <div class="flex items-center gap-2"><button class="px-2 py-1 border border-border rounded hover:bg-secondary">−</button> <span class="w-8 text-center font-semibold"> </span> <button class="px-2 py-1 border border-border rounded hover:bg-secondary">+</button></div> <div class="text-right"><p class="font-bold text-foreground"> </p> <button class="text-destructive hover:opacity-80 transition-opacity mt-2" title="Eliminar producto"><!></button></div></div>'),It=$('<div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="lg:col-span-2"><div class="space-y-4"></div></div> <div class="bg-card p-6 rounded-lg border border-border h-fit"><h2 class="text-xl font-bold text-foreground mb-4">Resumen</h2> <div class="space-y-2 mb-6 text-sm"><div class="flex justify-between text-muted-foreground"><span> </span> <span> </span></div> <div class="flex justify-between text-muted-foreground"><span>Envío</span> <span>Gratis</span></div> <div class="border-t border-border pt-2 mt-2 flex justify-between font-bold text-foreground"><span>Total</span> <span> </span></div></div> <!> <!></div></div>'),Mt=$('<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><h1 class="text-3xl font-bold text-foreground mb-8">Carrito de Compras</h1> <!></div>');function Nt(y,x){ut(x,!0);let _=z(()=>{let s;return $t.subscribe(d=>s=d)(),s}),l=z(()=>b.items),p=z(()=>b.getTotal());function V(){if(!t(_)){alert("Por favor inicia sesión para continuar");return}if(t(l).length===0){alert("El carrito está vacío");return}yt.createOrder(t(_).id,t(l),t(p)),b.clearCart(),Q("/orders")}function g(s){b.removeItem(s)}function m(s,d){b.updateQuantity(s,d)}var k=Mt(),L=o(e(k),2);{var W=s=>{var d=wt(),u=o(e(d),2);N(u,{onclick:()=>Q("/"),class:"bg-accent text-accent-foreground",children:(h,w)=>{B();var f=E("Continuar comprando");i(h,f)},$$slots:{default:!0}}),r(d),i(s,d)},X=s=>{var d=It(),u=e(d),h=e(u);_t(h,21,()=>t(l),n=>n.id,(n,a)=>{var c=Ct(),M=e(c),P=o(M,2),j=e(P),et=e(j,!0);r(j);var U=o(j,2),at=e(U);r(U),r(P);var q=o(P,2),A=e(q);A.__click=()=>m(t(a).id,t(a).quantity-1);var F=o(A,2),ot=e(F,!0);r(F);var st=o(F,2);st.__click=()=>m(t(a).id,t(a).quantity+1),r(q);var D=o(q,2),S=e(D),dt=e(S);r(S);var T=o(S,2);T.__click=()=>g(t(a).id);var nt=e(T);kt(nt,{size:18}),r(T),r(D),r(c),J((it,lt)=>{K(M,"src",t(a).image||"/placeholder.svg"),K(M,"alt",t(a).name),v(et,t(a).name),v(at,`$${it??""}`),v(ot,t(a).quantity),v(dt,`$${lt??""}`)},[()=>t(a).price.toFixed(2),()=>(t(a).price*t(a).quantity).toFixed(2)]),i(n,c)}),r(h),r(u);var w=o(u,2),f=o(e(w),2),C=e(f),I=e(C),Y=e(I);r(I);var G=o(I,2),Z=e(G);r(G),r(C);var H=o(C,4),O=o(e(H),2),tt=e(O);r(O),r(H),r(f);var R=o(f,2);N(R,{onclick:V,class:"w-full bg-accent text-accent-foreground hover:opacity-90",children:(n,a)=>{B();var c=E("Ir al Checkout");i(n,c)},$$slots:{default:!0}});var rt=o(R,2);N(rt,{onclick:()=>Q("/"),variant:"outline",class:"w-full mt-2 border-border",children:(n,a)=>{B();var c=E("Seguir comprando");i(n,c)},$$slots:{default:!0}}),r(w),r(d),J((n,a)=>{v(Y,`Subtotal (${t(l).length??""} items)`),v(Z,`$${n??""}`),v(tt,`$${a??""}`)},[()=>t(p).toFixed(2),()=>t(p).toFixed(2)]),i(s,d)};ht(L,s=>{t(l).length===0?s(W):s(X,!1)})}r(k),i(y,k),ft()}vt(["click"]);export{Nt as component};
