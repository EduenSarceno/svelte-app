import{S as Ge,i as He,s as We,a as Me,e as J,c as Xe,b as W,g as ie,t as K,d as le,f as x,h as G,j as Ye,o as be,k as Qe,l as Ze,m as et,n as ge,p as V,q as tt,r as nt,u as rt,v as M,w as Re,x as X,y as Y,z as Ne}from"./chunks/index-2f768baa.js";import{g as Ve,f as Ce,s as H,a as ve,i as at}from"./chunks/singletons-476678d1.js";import{R as qe,H as we}from"./chunks/control-a6874251.js";import{s as ot}from"./chunks/paths-6cd3a76e.js";const st=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),it=function(r,e){return new URL(r,e).href},Be={},C=function(e,t,c){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=it(s,c),s in Be)return;Be[s]=!0;const d=s.endsWith(".css"),n=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${n}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":st,d||(f.as="script",f.crossOrigin=""),f.href=s,document.head.appendChild(f),d)return new Promise((w,_)=>{f.addEventListener("load",w),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};function lt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function ct(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const ft=["href","pathname","search","searchParams","toString","toJSON"];function ut(r,e){const t=new URL(r);for(const c of ft){let s=t[c];Object.defineProperty(t,c,{get(){return e(),s},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(c,s,d)=>d(r,s),dt(t),t}function dt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function pt(r){let e=5381,t=r.length;if(typeof r=="string")for(;t;)e=e*33^r.charCodeAt(--t);else for(;t;)e=e*33^r[--t];return(e>>>0).toString(36)}const Le=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const c=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;se.delete(c)}return Le(r,e)};const se=new Map;function ht(r,e,t){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(typeof r=="string"?r:r.url)}]`;t&&typeof t.body=="string"&&(s+=`[data-hash="${pt(t.body)}"]`);const d=document.querySelector(s);if(d!=null&&d.textContent){const{body:n,...f}=JSON.parse(d.textContent),w=d.getAttribute("data-ttl");return w&&se.set(e,{body:n,init:f,ttl:1e3*Number(w)}),Promise.resolve(new Response(n,f))}return Le(r,t)}function mt(r,e){const t=se.get(r);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);se.delete(r)}return Le(r,e)}const _t=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function gt(r){const e=[],t=[];let c=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${r.split(/(?:\/|$)/).filter(wt).map((d,n,f)=>{const w=decodeURIComponent(d),_=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(w);if(_)return e.push(_[1]),t.push(_[2]),"(?:/(.*))?";const b=n===f.length-1;return w&&"/"+w.split(/\[(.+?)\]/).map((S,R)=>{if(R%2){const T=_t.exec(S);if(!T)throw new Error(`Invalid param: ${S}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,I,D,q]=T;return e.push(D),t.push(q),I?"(.*?)":"([^/]+?)"}return b&&S.includes(".")&&(c=!1),S.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${c?"/?":""}$`),names:e,types:t}}function wt(r){return!/^\([^)]+\)$/.test(r)}function yt(r,e,t,c){const s={};for(let d=0;d<e.length;d+=1){const n=e[d],f=t[d],w=r[d+1]||"";if(f){const _=c[f];if(!_)throw new Error(`Missing "${f}" param matcher`);if(!_(w))return}s[n]=w}return s}function bt(r,e,t,c){const s=new Set(e);return Object.entries(t).map(([f,[w,_,b]])=>{const{pattern:S,names:R,types:T}=gt(f),I={id:f,exec:D=>{const q=S.exec(D);if(q)return yt(q,R,T,c)},errors:[1,...b||[]].map(D=>r[D]),layouts:[0,..._||[]].map(n),leaf:d(w)};return I.errors.length=I.layouts.length=Math.max(I.errors.length,I.layouts.length),I});function d(f){const w=f<0;return w&&(f=~f),[w,r[f]]}function n(f){return f===void 0?f:[s.has(f),r[f]]}}function vt(r){let e,t,c;var s=r[0][0];function d(n){return{props:{data:n[2],form:n[1]}}}return s&&(e=new s(d(r))),{c(){e&&M(e.$$.fragment),t=J()},l(n){e&&Re(e.$$.fragment,n),t=J()},m(n,f){e&&X(e,n,f),W(n,t,f),c=!0},p(n,f){const w={};if(f&4&&(w.data=n[2]),f&2&&(w.form=n[1]),s!==(s=n[0][0])){if(e){ie();const _=e;K(_.$$.fragment,1,0,()=>{Y(_,1)}),le()}s?(e=new s(d(n)),M(e.$$.fragment),x(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else s&&e.$set(w)},i(n){c||(e&&x(e.$$.fragment,n),c=!0)},o(n){e&&K(e.$$.fragment,n),c=!1},d(n){n&&G(t),e&&Y(e,n)}}}function Et(r){let e,t,c;var s=r[0][0];function d(n){return{props:{data:n[2],$$slots:{default:[kt]},$$scope:{ctx:n}}}}return s&&(e=new s(d(r))),{c(){e&&M(e.$$.fragment),t=J()},l(n){e&&Re(e.$$.fragment,n),t=J()},m(n,f){e&&X(e,n,f),W(n,t,f),c=!0},p(n,f){const w={};if(f&4&&(w.data=n[2]),f&523&&(w.$$scope={dirty:f,ctx:n}),s!==(s=n[0][0])){if(e){ie();const _=e;K(_.$$.fragment,1,0,()=>{Y(_,1)}),le()}s?(e=new s(d(n)),M(e.$$.fragment),x(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else s&&e.$set(w)},i(n){c||(e&&x(e.$$.fragment,n),c=!0)},o(n){e&&K(e.$$.fragment,n),c=!1},d(n){n&&G(t),e&&Y(e,n)}}}function kt(r){let e,t,c;var s=r[0][1];function d(n){return{props:{data:n[3],form:n[1]}}}return s&&(e=new s(d(r))),{c(){e&&M(e.$$.fragment),t=J()},l(n){e&&Re(e.$$.fragment,n),t=J()},m(n,f){e&&X(e,n,f),W(n,t,f),c=!0},p(n,f){const w={};if(f&8&&(w.data=n[3]),f&2&&(w.form=n[1]),s!==(s=n[0][1])){if(e){ie();const _=e;K(_.$$.fragment,1,0,()=>{Y(_,1)}),le()}s?(e=new s(d(n)),M(e.$$.fragment),x(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else s&&e.$set(w)},i(n){c||(e&&x(e.$$.fragment,n),c=!0)},o(n){e&&K(e.$$.fragment,n),c=!1},d(n){n&&G(t),e&&Y(e,n)}}}function ze(r){let e,t=r[5]&&Fe(r);return{c(){e=Qe("div"),t&&t.c(),this.h()},l(c){e=Ze(c,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=et(e);t&&t.l(s),s.forEach(G),this.h()},h(){ge(e,"id","svelte-announcer"),ge(e,"aria-live","assertive"),ge(e,"aria-atomic","true"),V(e,"position","absolute"),V(e,"left","0"),V(e,"top","0"),V(e,"clip","rect(0 0 0 0)"),V(e,"clip-path","inset(50%)"),V(e,"overflow","hidden"),V(e,"white-space","nowrap"),V(e,"width","1px"),V(e,"height","1px")},m(c,s){W(c,e,s),t&&t.m(e,null)},p(c,s){c[5]?t?t.p(c,s):(t=Fe(c),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(c){c&&G(e),t&&t.d()}}}function Fe(r){let e;return{c(){e=tt(r[6])},l(t){e=nt(t,r[6])},m(t,c){W(t,e,c)},p(t,c){c&64&&rt(e,t[6])},d(t){t&&G(e)}}}function Rt(r){let e,t,c,s,d;const n=[Et,vt],f=[];function w(b,S){return b[0][1]?0:1}e=w(r),t=f[e]=n[e](r);let _=r[4]&&ze(r);return{c(){t.c(),c=Me(),_&&_.c(),s=J()},l(b){t.l(b),c=Xe(b),_&&_.l(b),s=J()},m(b,S){f[e].m(b,S),W(b,c,S),_&&_.m(b,S),W(b,s,S),d=!0},p(b,[S]){let R=e;e=w(b),e===R?f[e].p(b,S):(ie(),K(f[R],1,1,()=>{f[R]=null}),le(),t=f[e],t?t.p(b,S):(t=f[e]=n[e](b),t.c()),x(t,1),t.m(c.parentNode,c)),b[4]?_?_.p(b,S):(_=ze(b),_.c(),_.m(s.parentNode,s)):_&&(_.d(1),_=null)},i(b){d||(x(t),d=!0)},o(b){K(t),d=!1},d(b){f[e].d(b),b&&G(c),_&&_.d(b),b&&G(s)}}}function Lt(r,e,t){let{stores:c}=e,{page:s}=e,{components:d}=e,{form:n}=e,{data_0:f=null}=e,{data_1:w=null}=e;Ye(c.page.notify);let _=!1,b=!1,S=null;return be(()=>{const R=c.page.subscribe(()=>{_&&(t(5,b=!0),t(6,S=document.title||"untitled page"))});return t(4,_=!0),R}),r.$$set=R=>{"stores"in R&&t(7,c=R.stores),"page"in R&&t(8,s=R.page),"components"in R&&t(0,d=R.components),"form"in R&&t(1,n=R.form),"data_0"in R&&t(2,f=R.data_0),"data_1"in R&&t(3,w=R.data_1)},r.$$.update=()=>{r.$$.dirty&384&&c.page.set(s)},[d,n,f,w,_,b,S,c,s]}class St extends Ge{constructor(e){super(),He(this,e,Lt,Rt,We,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const $t={},ce=[()=>C(()=>import("./chunks/0-0c5c7cac.js"),["chunks\\0-0c5c7cac.js","chunks\\_layout-8d2a742b.js","components\\pages\\_layout.svelte-a1635e25.js","assets\\_layout-0a7e730c.css","chunks\\index-2f768baa.js","chunks\\config-e61ce09a.js","chunks\\stores-43c2dd42.js","chunks\\singletons-476678d1.js","chunks\\paths-6cd3a76e.js"],import.meta.url),()=>C(()=>import("./chunks/1-23caf565.js"),["chunks\\1-23caf565.js","components\\error.svelte-fd28d2f2.js","chunks\\index-2f768baa.js","chunks\\stores-43c2dd42.js","chunks\\singletons-476678d1.js","chunks\\paths-6cd3a76e.js"],import.meta.url),()=>C(()=>import("./chunks/2-a5cf6681.js"),["chunks\\2-a5cf6681.js","chunks\\_page-1f7cb387.js","components\\pages\\_page.svelte-0782c3ad.js","chunks\\index-2f768baa.js","chunks\\paths-6cd3a76e.js"],import.meta.url),()=>C(()=>import("./chunks/3-a2312486.js"),["chunks\\3-a2312486.js","chunks\\_page-c712cc8d.js","components\\pages\\about-us\\_page.svelte-843242ad.js","chunks\\index-2f768baa.js"],import.meta.url),()=>C(()=>import("./chunks/4-9ee5d610.js"),["chunks\\4-9ee5d610.js","chunks\\_page-d4b6e670.js","components\\pages\\contact-us\\_page.svelte-f3f5efbe.js","chunks\\index-2f768baa.js"],import.meta.url),()=>C(()=>import("./chunks/5-126ea312.js"),["chunks\\5-126ea312.js","chunks\\_page-a13430d8.js","chunks\\api-abb4852f.js","chunks\\config-e61ce09a.js","chunks\\control-a6874251.js","components\\pages\\posts\\_page.svelte-9eb0efbe.js","chunks\\index-2f768baa.js","chunks\\paths-6cd3a76e.js","chunks\\singletons-476678d1.js","chunks\\Avatar-2373978b.js","chunks\\Errors-aa5d9454.js"],import.meta.url),()=>C(()=>import("./chunks/6-9e078f28.js"),["chunks\\6-9e078f28.js","chunks\\_page-679180d6.js","chunks\\api-abb4852f.js","chunks\\config-e61ce09a.js","components\\pages\\view\\author\\_page.svelte-dd0fecc7.js","assets\\_page-38d3f039.css","chunks\\index-2f768baa.js","chunks\\Avatar-2373978b.js","chunks\\Errors-aa5d9454.js","chunks\\paths-6cd3a76e.js"],import.meta.url),()=>C(()=>import("./chunks/7-5a0b6c2b.js"),["chunks\\7-5a0b6c2b.js","chunks\\_page-2bc11095.js","chunks\\api-abb4852f.js","chunks\\config-e61ce09a.js","components\\pages\\view\\post\\_page.svelte-714519eb.js","chunks\\index-2f768baa.js","chunks\\paths-6cd3a76e.js","chunks\\Errors-aa5d9454.js"],import.meta.url)],Pt=[],Ot={"":[2],"about-us":[3],"contact-us":[4],posts:[5],"view/author":[6],"view/post":[7]},It={handleError:({error:r})=>(console.error(r),{message:"Internal Error"})},jt="/__data.js",xe="sveltekit:scroll",F="sveltekit:index",re=bt(ce,Pt,Ot,$t),Ee=ce[0],ke=ce[1];Ee();ke();let te={};try{te=JSON.parse(sessionStorage[xe])}catch{}function ye(r){te[r]=ve()}function At({target:r,base:e,trailing_slash:t}){var Te;const c=[],s={id:null,promise:null},d={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,session_id:0,url:null},f=!1,w=!0,_=!1,b=1,S=null,R=!1,T,I=(Te=history.state)==null?void 0:Te[F];I||(I=Date.now(),history.replaceState({...history.state,[F]:I},"",location.href));const D=te[I];D&&(history.scrollRestoration="manual",scrollTo(D.x,D.y));let q=!1,B,Se;function $e(){if(!S){const a=new URL(location.href);S=Promise.resolve().then(async()=>{const i=pe(a,!0);await Oe(i,a,[]),S=null,R=!1})}return S}async function fe(a,{noscroll:i=!1,replaceState:p=!1,keepfocus:o=!1,state:l={}},h){return typeof a=="string"&&(a=new URL(a,Ve(document))),he({url:a,scroll:i?ve():null,keepfocus:o,redirect_chain:h,details:{state:l,replaceState:p},accepted:()=>{},blocked:()=>{},type:"goto"})}async function Pe(a){const i=pe(a,!1);if(!i)throw new Error("Attempted to prefetch a URL that does not belong to this app");return s.promise=Ae(i),s.id=i.id,s.promise}async function Oe(a,i,p,o,l){var v,E;const h=Se={};let m=a&&await Ae(a);if(!m&&i.origin===location.origin&&i.pathname===location.pathname&&(m=await ne({status:404,error:new Error(`Not found: ${i.pathname}`),url:i,routeId:null})),!m)return await Z(i),!1;if(i=(a==null?void 0:a.url)||i,Se!==h)return!1;if(c.length=0,m.type==="redirect")if(p.length>10||p.includes(i.pathname))m=await ne({status:500,error:new Error("Redirect loop"),url:i,routeId:null});else return fe(new URL(m.location,i).href,{},[...p,i.pathname]),!1;else((E=(v=m.props)==null?void 0:v.page)==null?void 0:E.status)>=400&&await H.updated.check()&&await Z(i);if(_=!0,o&&o.details){const{details:y}=o,g=y.replaceState?0:1;y.state[F]=I+=g,history[y.replaceState?"replaceState":"pushState"](y.state,"",i)}if(f){n=m.state,m.props.page&&(m.props.page.url=i);const y=oe();T.$set(m.props),y()}else Ie(m);if(o){const{scroll:y,keepfocus:g}=o;if(!g){const k=document.body,j=k.getAttribute("tabindex");k.tabIndex=-1,k.focus({preventScroll:!0}),setTimeout(()=>{var $;($=getSelection())==null||$.removeAllRanges()}),j!==null?k.setAttribute("tabindex",j):k.removeAttribute("tabindex")}if(await Ne(),w){const k=i.hash&&document.getElementById(i.hash.slice(1));y?scrollTo(y.x,y.y):k?k.scrollIntoView():scrollTo(0,0)}}else await Ne();s.promise=null,s.id=null,w=!0,m.props.page&&(B=m.props.page),l&&l(),_=!1}function Ie(a){var l,h;n=a.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),B=a.props.page;const p=oe();T=new St({target:r,props:{...a.props,stores:H},hydrate:!0}),p();const o={from:null,to:ae("to",{params:n.params,routeId:(h=(l=n.route)==null?void 0:l.id)!=null?h:null,url:new URL(location.href)}),type:"load"};d.after_navigate.forEach(m=>m(o)),f=!0}async function Q({url:a,params:i,branch:p,status:o,error:l,route:h,form:m}){var j;const v=p.filter(Boolean),E={type:"loaded",state:{url:a,params:i,branch:p,error:l,route:h,session_id:b},props:{components:v.map($=>$.node.component)}};m!==void 0&&(E.props.form=m);let y={},g=!B;for(let $=0;$<v.length;$+=1){const A=v[$];y={...y,...A.data},(g||!n.branch.some(U=>U===A))&&(E.props[`data_${$}`]=y,g=g||Object.keys((j=A.data)!=null?j:{}).length>0)}if(g||(g=Object.keys(B.data).length!==Object.keys(y).length),!n.url||a.href!==n.url.href||n.error!==l||g){E.props.page={error:l,params:i,routeId:h&&h.id,status:o,url:a,data:g?y:B.data};const $=(A,U)=>{Object.defineProperty(E.props.page,A,{get:()=>{throw new Error(`$page.${A} has been replaced by $page.url.${U}`)}})};$("origin","origin"),$("path","pathname"),$("query","searchParams")}return E}async function ue({loader:a,parent:i,url:p,params:o,routeId:l,server_data_node:h}){var y,g,k,j,$;let m=null;const v={dependencies:new Set,params:new Set,parent:!1,url:!1},E=await a();if((y=E.shared)!=null&&y.load){let A=function(...u){for(const L of u){const{href:O}=new URL(L,p);v.dependencies.add(O)}};const U={};for(const u in o)Object.defineProperty(U,u,{get(){return v.params.add(u),o[u]},enumerable:!0});const z={routeId:l,params:U,data:(g=h==null?void 0:h.data)!=null?g:null,url:ut(p,()=>{v.url=!0}),async fetch(u,L){let O;typeof u=="string"?O=u:(O=u.url,L={body:u.method==="GET"||u.method==="HEAD"?void 0:await u.blob(),cache:u.cache,credentials:u.credentials,headers:u.headers,integrity:u.integrity,keepalive:u.keepalive,method:u.method,mode:u.mode,redirect:u.redirect,referrer:u.referrer,referrerPolicy:u.referrerPolicy,signal:u.signal,...L});const P=new URL(O,p).href;return A(P),f?mt(P,L):ht(O,P,L)},setHeaders:()=>{},depends:A,parent(){return v.parent=!0,i()}};Object.defineProperties(z,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),m=(k=await E.shared.load.call(null,z))!=null?k:null}return{node:E,loader:a,server:h,shared:(j=E.shared)!=null&&j.load?{type:"data",data:m,uses:v}:null,data:($=m!=null?m:h==null?void 0:h.data)!=null?$:null}}function je(a,i,p){if(R)return!0;if(!p)return!1;if(p.parent&&i||a.url&&p.url)return!0;for(const o of a.params)if(p.params.has(o))return!0;for(const o of p.dependencies)if(c.some(l=>l(new URL(o))))return!0;return!1}function de(a,i){var p,o;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((p=a.uses.dependencies)!=null?p:[]),params:new Set((o=a.uses.params)!=null?o:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&i!=null?i:null}async function Ae({id:a,invalidating:i,url:p,params:o,route:l}){var z;if(s.id===a&&s.promise)return s.promise;const{errors:h,layouts:m,leaf:v}=l,E=n.url&&{url:a!==n.url.pathname+n.url.search,params:Object.keys(o).filter(u=>n.params[u]!==o[u])},y=[...m,v];h.forEach(u=>u==null?void 0:u().catch(()=>{})),y.forEach(u=>u==null?void 0:u[1]().catch(()=>{}));let g=null;const k=y.reduce((u,L,O)=>{var N;const P=n.branch[O],ee=!!(L!=null&&L[0])&&((P==null?void 0:P.loader)!==L[1]||je(E,u.some(Boolean),(N=P.server)==null?void 0:N.uses));return u.push(ee),u},[]);if(k.some(Boolean)){try{g=await Je(p,k)}catch(u){return ne({status:500,error:u,url:p,routeId:l.id})}if(g.type==="redirect")return g}const j=g==null?void 0:g.nodes;let $=!1;const A=y.map(async(u,L)=>{var N;if(!u)return;const O=n.branch[L],P=j==null?void 0:j[L];if((!P||P.type==="skip")&&u[1]===(O==null?void 0:O.loader)&&!je(E,$,(N=O.shared)==null?void 0:N.uses))return O;if($=!0,(P==null?void 0:P.type)==="error")throw P;return ue({loader:u[1],url:p,params:o,routeId:l.id,parent:async()=>{var De;const me={};for(let _e=0;_e<L;_e+=1)Object.assign(me,(De=await A[_e])==null?void 0:De.data);return me},server_data_node:de(P===void 0&&u[0]?{type:"skip"}:P!=null?P:null,O==null?void 0:O.server)})});for(const u of A)u.catch(()=>{});const U=[];for(let u=0;u<y.length;u+=1)if(y[u])try{U.push(await A[u])}catch(L){if(L instanceof qe)return{type:"redirect",location:L.location};let O=500,P;for(j!=null&&j.includes(L)?(O=(z=L.status)!=null?z:O,P=L.error):L instanceof we?(O=L.status,P=L.body):P=Ke(L,{params:o,url:p,routeId:l.id});u--;)if(h[u]){let ee,N=u;for(;!U[N];)N-=1;try{return ee={node:await h[u](),loader:h[u],data:{},server:null,shared:null},await Q({url:p,params:o,branch:U.slice(0,N+1).concat(ee),status:O,error:P,route:l})}catch{continue}}await Z(p);return}else U.push(void 0);return await Q({url:p,params:o,branch:U,status:200,error:null,route:l,form:i?void 0:null})}async function ne({status:a,error:i,url:p,routeId:o}){var y;const l={},h=await Ee();let m=null;if(h.server)try{const g=await Je(p,[!0]);if(g.type!=="data"||g.nodes[0]&&g.nodes[0].type!=="data")throw 0;m=(y=g.nodes[0])!=null?y:null}catch{await Z(p);return}const v=await ue({loader:Ee,url:p,params:l,routeId:o,parent:()=>Promise.resolve({}),server_data_node:de(m)}),E={node:await ke(),loader:ke,shared:null,server:null,data:null};return await Q({url:p,params:l,branch:[v,E],status:a,error:i instanceof we?i.body:Ke(i,{url:p,params:l,routeId:null}),route:null})}function pe(a,i){if(Ue(a))return;const p=decodeURI(a.pathname.slice(e.length)||"/");for(const o of re){const l=o.exec(p);if(l){const h=new URL(a.origin+lt(a.pathname,t)+a.search+a.hash);return{id:h.pathname+h.search,invalidating:i,route:o,params:ct(l),url:h}}}}function Ue(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function he({url:a,scroll:i,keepfocus:p,redirect_chain:o,details:l,type:h,delta:m,accepted:v,blocked:E}){var $,A,U,z;let y=!1;const g=pe(a,!1),k={from:ae("from",{params:n.params,routeId:(A=($=n.route)==null?void 0:$.id)!=null?A:null,url:n.url}),to:ae("to",{params:(U=g==null?void 0:g.params)!=null?U:null,routeId:(z=g==null?void 0:g.route.id)!=null?z:null,url:a}),type:h};m!==void 0&&(k.delta=m);const j={...k,cancel:()=>{y=!0}};if(d.before_navigate.forEach(u=>u(j)),y){E();return}ye(I),v(),f&&H.navigating.set(k),await Oe(g,a,o,{scroll:i,keepfocus:p,details:l},()=>{d.after_navigate.forEach(u=>u(k)),H.navigating.set(null)})}function Z(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{be(()=>(d.after_navigate.push(a),()=>{const i=d.after_navigate.indexOf(a);d.after_navigate.splice(i,1)}))},before_navigate:a=>{be(()=>(d.before_navigate.push(a),()=>{const i=d.before_navigate.indexOf(a);d.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(_||!f)&&(w=!1)},goto:(a,i={})=>fe(a,i,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")c.push(a);else{const{href:i}=new URL(a,location.href);c.push(p=>p.href===i)}return $e()},invalidateAll:()=>(R=!0,$e()),prefetch:async a=>{const i=new URL(a,Ve(document));await Pe(i)},prefetch_routes:async a=>{const p=(a?re.filter(o=>a.some(l=>o.exec(l))):re).map(o=>Promise.all([...o.layouts,o.leaf].map(l=>l==null?void 0:l[1]())));await Promise.all(p)},apply_action:async a=>{if(a.type==="error"){const i=new URL(location.href),{branch:p,route:o}=n;if(!o)return;let l=n.branch.length;for(;l--;)if(o.errors[l]){let h,m=l;for(;!p[m];)m-=1;try{h={node:await o.errors[l](),loader:o.errors[l],data:{},server:null,shared:null};const v=await Q({url:i,params:n.params,branch:p.slice(0,m+1).concat(h),status:500,error:a.error,route:o});n=v.state;const E=oe();T.$set(v.props),E();return}catch{continue}}}else if(a.type==="redirect")fe(a.location,{},[]);else{const i={form:a.data};a.status!==B.status&&(i.page={...B,status:a.status});const p=oe();T.$set(i),p()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var m,v;let l=!1;const h={from:ae("from",{params:n.params,routeId:(v=(m=n.route)==null?void 0:m.id)!=null?v:null,url:n.url}),to:null,type:"unload",cancel:()=>l=!0};d.before_navigate.forEach(E=>E(h)),l?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ye(I);try{sessionStorage[xe]=JSON.stringify(te)}catch{}}});const a=o=>{const{url:l,options:h}=Ce(o);if(l&&h.prefetch){if(Ue(l))return;Pe(l)}};let i;const p=o=>{clearTimeout(i),i=setTimeout(()=>{var l;(l=o.target)==null||l.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",p),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const{a:l,url:h,options:m}=Ce(o);if(!l||!h)return;const v=l instanceof SVGAElement;if(!v&&!(h.protocol==="https:"||h.protocol==="http:"))return;const E=(l.getAttribute("rel")||"").split(/\s+/);if(l.hasAttribute("download")||E.includes("external")||m.reload||(v?l.target.baseVal:l.target))return;const[y,g]=h.href.split("#");if(g!==void 0&&y===location.href.split("#")[0]){q=!0,ye(I),n.url=h,H.page.set({...B,url:h}),H.page.notify();return}he({url:h,scroll:m.noscroll?ve():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),addEventListener("popstate",o=>{if(o.state){if(o.state[F]===I)return;const l=o.state[F]-I;he({url:new URL(location.href),scroll:te[o.state[F]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{I=o.state[F]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{q&&(q=!1,history.replaceState({...history.state,[F]:++I},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&H.navigating.set(null)})},_hydrate:async({status:a,error:i,node_ids:p,params:o,routeId:l,data:h,form:m})=>{var y;const v=new URL(location.href);let E;try{const g=p.map(async(k,j)=>{const $=h[j];return ue({loader:ce[k],url:v,params:o,routeId:l,parent:async()=>{const A={};for(let U=0;U<j;U+=1)Object.assign(A,(await g[U]).data);return A},server_data_node:de($)})});E=await Q({url:v,params:o,branch:await Promise.all(g),status:a,error:i,form:m,route:(y=re.find(k=>k.id===l))!=null?y:null})}catch(g){const k=g;if(k instanceof qe){await Z(new URL(g.location,location.href));return}E=await ne({status:k instanceof we?k.status:500,error:k,url:v,routeId:l})}Ie(E)}}}let Ut=1;async function Je(r,e){const t=new URL(r);t.pathname=r.pathname.replace(/\/$/,"")+jt,t.searchParams.set("__invalid",e.map(s=>s?"y":"n").join("")),t.searchParams.set("__id",String(Ut++)),await C(()=>import(t.href),[],import.meta.url);const c=window.__sveltekit_data;return delete window.__sveltekit_data,c}function Ke(r,e){var t;return(t=It.handleError({error:r,event:e}))!=null?t:{message:e.routeId?"Internal Error":"Not Found"}}const Tt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ae(r,e){for(const t of Tt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`)}});return e}function oe(){return()=>{}}async function qt({env:r,hydrate:e,paths:t,target:c,trailing_slash:s}){ot(t);const d=At({target:c,base:t.base,trailing_slash:s});at({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{qt as start};
