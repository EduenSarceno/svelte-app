import{m as h}from"./uuid-cce78d13.js";import{a as O,b as w}from"./api-fae0dd8d.js";import{H as N,R as b}from"./control-a6874251.js";import{c as v}from"./config-845f6e27.js";function G(a,l){return new N(a,l)}function R(a,l){if(isNaN(a)||a<300||a>399)throw new Error("Invalid status code");return new b(a,l)}const y=`query GetPosts($options: Options) {
  posts(options: $options) {
    length,
    pages,
    rows {
      id,
      title,
      reactions,
      body,
      author {id, name},
      categories {id, name}
    }
  }
}
`,P=`query GetGroupedPosts($options: Options) {
  posts(options: $options) {
    length,
    pages,
    rows {
      id,
      title,
      reactions,
      author {id, name},
      categories {id, name}
    }
  }
}
`,S=!1,{limits:{posts:_,group:j}}=v.api,{GROUP:c,ORDER:g}=w;async function E({url:a,fetch:l}){const{author:r,old:p,page:i,group:o,order:s}=C(a),e=Object.create(null);e.order=[["id",p?"ASC":"DESC"]],e.page=i,e.limit=_,o&&(e.limit=j),r&&(e.where={authorId:r});let t={};t.variables={options:e},t.query=y,t.operationName="GetPosts",o&&(t.query=P,t.operationName="GetGroupedPosts");let n=await O(t,l);return o&&I(n,o,s),Object.assign(n,{page:i,old:p,order:s,group:o}),console.log(n),n}function C(a){const l=new URL(a),{searchParams:r}=l,p=r.get("author");if(!(p===null||h(p)))throw G(404,"not an author");var i=r.get("old");i===null||isNaN(i=+i)?i=0:[0,1].includes(i)||(i=0);var o=r.get("page");(o===null||isNaN(o=+o))&&(o=1),o<1&&(o=1);var s=r.get("group");s===null||m(c,s=+s)?s===null&&(s=c.NONE):s=c.NONE;var e=r.get("order");if(e===null||m(g,e=+e)?e===null&&(e=g.ASC):e=g.ASC,r.set("page",o),r.set("old",i),r.set("group",s),r.set("order",e),i===0&&r.delete("old"),s===0&&(r.delete("group"),r.delete("order")),l.toString()!==a.toString())throw R("302",l);return{author:p,old:i,page:o,group:s,order:e}}function I(a,l,r){const p=(e,t)=>r?e.name>t.name:t.name>e.name;let i,o=a.data;if(o&&l==c.CATEGORY){let e=o.posts,t={};for(let n of e.rows)for(let f of n.categories){let{id:u,name:d}=f;u in t?t[u].posts.push(n):t[u]={id:u,name:d,posts:[n]}}i=Object.values(t).sort(p)}else if(o&&l===c.AUTHOR){let e=o.posts,t={};for(let n of e.rows){let f=n.author,{id:u,name:d}=f;u in t?t[u].posts.push(n):t[u]={id:u,name:d,posts:[n]}}i=Object.values(t).sort(p)}let s={};for(let e of i){let{name:t}=e;t=t.toUpperCase();let n=t[0];n in s?s[n].rows.push(e):s[n]={name:n,rows:[e]}}o.groups=Object.values(s).sort(p)}function m(a,l){return Object.values(a).includes(l)}const L=Object.freeze(Object.defineProperty({__proto__:null,ssr:S,load:E},Symbol.toStringTag,{value:"Module"}));export{L as _,E as l,S as s};
