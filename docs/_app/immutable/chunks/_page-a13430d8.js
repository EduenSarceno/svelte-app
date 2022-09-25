import{m as d,a as g}from"./api-abb4852f.js";import{H as u,R as f}from"./control-a6874251.js";function h(e,o){return new u(e,o)}function m(e,o){if(isNaN(e)||e<300||e>399)throw new Error("Invalid status code");return new f(e,o)}const N=`query GetPosts($options: Options) {
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
`,w=!1,l={NONE:0,CAT:1,AUTHOR:2};async function O({url:e}){const o=new URL(e),{searchParams:r}=o,a=r.get("author");if(a&&!d(a))throw h(404,"not an author");var n=r.get("old");n&&isNaN(n=+n)?n=0:[0,1].includes(n)||(n=0);var t=r.get("page");t&&isNaN(t=+t)&&(t=1),(!t||t<1)&&(t=1);var i=r.get("group");i&&!(i in l)&&(i=l.NONE),r.set("page",t),n===0&&r.delete("old"),i===0&&r.delete("group");let c=o.toString();if(c!==e.toString())throw m("301",c.toString());const s=Object.create(null);a&&(s.where={authorId:a}),s.order=[["id",n?"ASC":"DESC"]],s.page=t;let p=await g({query:N,variables:{options:s},operationName:"GetPosts"});return S(p.data,t),p}function S(e,o){e.posts.page=o}const v=Object.freeze(Object.defineProperty({__proto__:null,ssr:w,load:O},Symbol.toStringTag,{value:"Module"}));export{v as _,O as l,w as s};
