import{m as h}from"./uuid-cce78d13.js";import{a as O,b as w}from"./api-79b9779c.js";import{H as N,R as b}from"./control-a6874251.js";import{c as v}from"./config-845f6e27.js";function G(i,a){return new N(i,a)}function R(i,a){if(isNaN(i)||i<300||i>399)throw new Error("Invalid status code");return new b(i,a)}const y=`query GetPosts($options: Options) {
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
`,j=!1,{limits:{posts:S,group:_}}=v.api,{GROUP:c,ORDER:g}=w;async function E({url:i}){const{author:a,old:n,page:p,group:s,order:r}=C(i),o=Object.create(null);o.order=[["id",n?"ASC":"DESC"]],o.page=p,o.limit=S,s&&(o.limit=_),a&&(o.where={authorId:a});let e={};e.variables={options:o},e.query=y,e.operationName="GetPosts",s&&(e.query=P,e.operationName="GetGroupedPosts");let t=await O(e);return s&&I(t,s,r),Object.assign(t,{page:p,old:n,order:r,group:s}),t}function C(i){const a=new URL(i),{searchParams:n}=a,p=n.get("author");if(!(p===null||h(p)))throw G(404,"not an author");var s=n.get("old");s===null||isNaN(s=+s)?s=0:[0,1].includes(s)||(s=0);var r=n.get("page");(r===null||isNaN(r=+r))&&(r=1),r<1&&(r=1);var o=n.get("group");o===null||m(c,o=+o)?o===null&&(o=c.NONE):o=c.NONE;var e=n.get("order");if(e===null||m(g,e=+e)?e===null&&(e=g.ASC):e=g.ASC,n.set("page",r),n.set("old",s),n.set("group",o),n.set("order",e),s===0&&n.delete("old"),o===0&&(n.delete("group"),n.delete("order")),a.toString()!==i.toString())throw R("302",a);return{author:p,old:s,page:r,group:o,order:e}}function I(i,a,n){const p=(e,t)=>n?e.name>t.name:t.name>e.name;let s,r=i.data;if(r&&a==c.CATEGORY){let e=r.posts,t={};for(let l of e.rows)for(let f of l.categories){let{id:u,name:d}=f;u in t?t[u].posts.push(l):t[u]={id:u,name:d,posts:[l]}}s=Object.values(t).sort(p)}else if(r&&a===c.AUTHOR){let e=r.posts,t={};for(let l of e.rows){let f=l.author,{id:u,name:d}=f;u in t?t[u].posts.push(l):t[u]={id:u,name:d,posts:[l]}}s=Object.values(t).sort(p)}let o={};for(let e of s){let{name:t}=e;t=t.toUpperCase();let l=t[0];l in o?o[l].rows.push(e):o[l]={name:l,rows:[e]}}console.log(Object.values(o)),r.groups=Object.values(o).sort(p),console.log(r.groups)}function m(i,a){return Object.values(i).includes(a)}const L=Object.freeze(Object.defineProperty({__proto__:null,ssr:j,load:E},Symbol.toStringTag,{value:"Module"}));export{L as _,E as l,j as s};
