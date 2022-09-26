import{m as a}from"./uuid-cce78d13.js";import{a as o}from"./api-fae0dd8d.js";const n=`query GetPost($id: UUID!)
{
  post(id:$id) {
    id, 
    title, 
    body, 
    reactions, 
    author { id, name },
    categories {id, name}
  }
}
`,s=!1;function i({url:t,fetch:r}){const e=t.searchParams.get("id");return a(e)?o({query:n,variables:{id:e},operationName:"GetPost"},r):{errors:[{message:"id is not a valid UUID"}]}}const m=Object.freeze(Object.defineProperty({__proto__:null,ssr:s,load:i},Symbol.toStringTag,{value:"Module"}));export{m as _,i as l,s};
