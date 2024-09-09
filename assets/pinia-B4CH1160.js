import{P as H,a as M,Q as B,R as G,S as $,w as T,r as tt,s as R,U as D,V as et,N as st,O as nt,n as ot,W as ct,c as rt}from"./@vue-D1s8IK-f.js";var ut=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let J;const p=t=>J=t,K=Symbol();function O(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var E;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(E||(E={}));function St(){const t=H(!0),c=t.run(()=>M({}));let s=[],e=[];const r=B({install(u){p(r),r._a=u,u.provide(K,r),u.config.globalProperties.$pinia=r,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!ut?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:c});return r}const Q=()=>{};function F(t,c,s,e=Q){t.push(c);const r=()=>{const u=t.indexOf(c);u>-1&&(t.splice(u,1),e())};return!s&&st()&&nt(r),r}function P(t,...c){t.slice().forEach(s=>{s(...c)})}const at=t=>t(),A=Symbol(),k=Symbol();function L(t,c){t instanceof Map&&c instanceof Map?c.forEach((s,e)=>t.set(e,s)):t instanceof Set&&c instanceof Set&&c.forEach(t.add,t);for(const s in c){if(!c.hasOwnProperty(s))continue;const e=c[s],r=t[s];O(r)&&O(e)&&t.hasOwnProperty(s)&&!R(e)&&!D(e)?t[s]=L(r,e):t[s]=e}return t}const ft=Symbol();function lt(t){return!O(t)||!t.hasOwnProperty(ft)}const{assign:y}=Object;function it(t){return!!(R(t)&&t.effect)}function ht(t,c,s,e){const{state:r,actions:u,getters:f}=c,a=s.state.value[t];let C;function b(){a||(s.state.value[t]=r?r():{});const S=ct(s.state.value[t]);return y(S,u,Object.keys(f||{}).reduce((v,_)=>(v[_]=B(rt(()=>{p(s);const m=s._s.get(t);return f[_].call(m,m)})),v),{}))}return C=U(t,b,c,s,e,!0),C}function U(t,c,s={},e,r,u){let f;const a=y({actions:{}},s),C={deep:!0};let b,S,v=[],_=[],m;const d=e.state.value[t];!u&&!d&&(e.state.value[t]={}),M({});let W;function N(o){let n;b=S=!1,typeof o=="function"?(o(e.state.value[t]),n={type:E.patchFunction,storeId:t,events:m}):(L(e.state.value[t],o),n={type:E.patchObject,payload:o,storeId:t,events:m});const l=W=Symbol();ot().then(()=>{W===l&&(b=!0)}),S=!0,P(v,n,e.state.value[t])}const q=u?function(){const{state:n}=s,l=n?n():{};this.$patch(j=>{y(j,l)})}:Q;function z(){f.stop(),v=[],_=[],e._s.delete(t)}const V=(o,n="")=>{if(A in o)return o[k]=n,o;const l=function(){p(e);const j=Array.from(arguments),w=[],I=[];function Y(i){w.push(i)}function Z(i){I.push(i)}P(_,{args:j,name:l[k],store:h,after:Y,onError:Z});let x;try{x=o.apply(this&&this.$id===t?this:h,j)}catch(i){throw P(I,i),i}return x instanceof Promise?x.then(i=>(P(w,i),i)).catch(i=>(P(I,i),Promise.reject(i))):(P(w,x),x)};return l[A]=!0,l[k]=n,l},X={_p:e,$id:t,$onAction:F.bind(null,_),$patch:N,$reset:q,$subscribe(o,n={}){const l=F(v,o,n.detached,()=>j()),j=f.run(()=>T(()=>e.state.value[t],w=>{(n.flush==="sync"?S:b)&&o({storeId:t,type:E.direct,events:m},w)},y({},C,n)));return l},$dispose:z},h=tt(X);e._s.set(t,h);const g=(e._a&&e._a.runWithContext||at)(()=>e._e.run(()=>(f=H()).run(()=>c({action:V}))));for(const o in g){const n=g[o];if(R(n)&&!it(n)||D(n))u||(d&&lt(n)&&(R(n)?n.value=d[o]:L(n,d[o])),e.state.value[t][o]=n);else if(typeof n=="function"){const l=V(n,o);g[o]=l,a.actions[o]=n}}return y(h,g),y(et(h),g),Object.defineProperty(h,"$state",{get:()=>e.state.value[t],set:o=>{N(n=>{y(n,o)})}}),e._p.forEach(o=>{y(h,f.run(()=>o({store:h,app:e._a,pinia:e,options:a})))}),d&&u&&s.hydrate&&s.hydrate(h.$state,d),b=!0,S=!0,h}function vt(t,c,s){let e,r;const u=typeof c=="function";typeof t=="string"?(e=t,r=u?s:c):(r=t,e=t.id);function f(a,C){const b=G();return a=a||(b?$(K,null):null),a&&p(a),a=J,a._s.has(e)||(u?U(e,c,r,a):ht(e,r,a)),a._s.get(e)}return f.$id=e,f}export{St as c,vt as d};
