import{S as k,i as x,s as E,k as f,q as S,l as m,m as p,r as q,h,n as v,p as g,b as C,B as _,u as D,A}from"./index-e1a9c520.js";import{c as I}from"./config-d638e341.js";function V(o){let t,e,l,r=b(o[0])+"",i;return{c(){t=f("div"),e=f("div"),l=f("span"),i=S(r),this.h()},l(a){t=m(a,"DIV",{class:!0});var s=p(t);e=m(s,"DIV",{class:!0,style:!0});var c=p(e);l=m(c,"SPAN",{class:!0});var n=p(l);i=q(n,r),n.forEach(h),c.forEach(h),s.forEach(h),this.h()},h(){v(l,"class","text-xl"),v(e,"class","text-neutral-content rounded-full w-16 m-4 select-none border-neutral border-2"),g(e,"background-color",o[1](o[0])),v(t,"class","avatar placeholder")},m(a,s){C(a,t,s),_(t,e),_(e,l),_(l,i)},p(a,[s]){s&1&&r!==(r=b(a[0])+"")&&D(i,r),s&1&&g(e,"background-color",a[1](a[0]))},i:A,o:A,d(a){a&&h(t)}}}function b(o){let t=o.split(" ").map(e=>e.charAt(0));return t.length>=2?t[0]+t[1]:t[0]||"A"}function w(o,t,e){const{posts:l}=I,{colors:r}=l.author;let{name:i="Anonymous"}=t;function a(s){const c=i;var n=0;for(let d=0;d<c.length;d++){let y=c.charCodeAt(d);n=(n<<5)-n+y,n=n&n}let u=n%r.length;return u<0&&(u=r.length+u),r[u]}return o.$$set=s=>{"name"in s&&e(0,i=s.name)},[i,a]}class P extends k{constructor(t){super(),x(this,t,w,V,E,{name:0})}}export{P as A};
