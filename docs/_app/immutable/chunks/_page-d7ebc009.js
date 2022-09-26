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
`,S=!1,{limits:{posts:_,group:j}}=v.api,{GROUP:c,ORDER:g}=w;async function E({url:i}){const{author:a,old:s,page:p,group:r,order:n}=C(i),t=Object.create(null);t.order=[["id",s?"ASC":"DESC"]],t.page=p,t.limit=_,r&&(t.limit=j),a&&(t.where={authorId:a});let e={};e.variables={options:t},e.query=y,e.operationName="GetPosts",r&&(e.query=P,e.operationName="GetGroupedPosts");let o=await O(e);return r&&I(o,r,n),Object.assign(o,{page:p,old:s,order:n,group:r}),o}function C(i){const a=new URL(i),{searchParams:s}=a,p=s.get("author");if(!(p===null||h(p)))throw G(404,"not an author");var r=s.get("old");r===null||isNaN(r=+r)?r=0:[0,1].includes(r)||(r=0);var n=s.get("page");(n===null||isNaN(n=+n))&&(n=1),n<1&&(n=1);var t=s.get("group");t===null||m(c,t=+t)?t===null&&(t=c.NONE):t=c.NONE;var e=s.get("order");if(e===null||m(g,e=+e)?e===null&&(e=g.ASC):e=g.ASC,s.set("page",n),s.set("old",r),s.set("group",t),s.set("order",e),r===0&&s.delete("old"),t===0&&(s.delete("group"),s.delete("order")),a.toString()!==i.toString())throw R("302",a);return{author:p,old:r,page:n,group:t,order:e}}function I(i,a,s){const p=(e,o)=>s?o.name<e.name:o.name>e.namme;let r,n=i.data;if(n&&a==c.CATEGORY){let e=n.posts,o={};for(let l of e.rows)for(let f of l.categories){let{id:u,name:d}=f;u in o?o[u].posts.push(l):o[u]={id:u,name:d,posts:[l]}}r=Object.values(o).sort(p)}else if(n&&a===c.AUTHOR){let e=n.posts,o={};for(let l of e.rows){let f=l.author,{id:u,name:d}=f;u in o?o[u].posts.push(l):o[u]={id:u,name:d,posts:[l]}}r=Object.values(o).sort(p)}let t={};for(let e of r){let{name:o}=e;o=o.toUpperCase();let l=o[0];l in t?t[l].rows.push(e):t[l]={name:l,rows:[e]}}n.groups=Object.values(t).sort(p)}function m(i,a){return Object.values(i).includes(a)}const L=Object.freeze(Object.defineProperty({__proto__:null,ssr:S,load:E},Symbol.toStringTag,{value:"Module"}));export{L as _,E as l,S as s};
