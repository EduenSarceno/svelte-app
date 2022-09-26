import{m as r}from"./uuid-cce78d13.js";import{a}from"./api-79b9779c.js";const o=`query GetPost($id: UUID!)
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
`,n=!1;function s({url:t}){const e=t.searchParams.get("id");return r(e)?a({query:o,variables:{id:e},operationName:"GetPost"}):{errors:[{message:"id is not a valid UUID"}]}}const l=Object.freeze(Object.defineProperty({__proto__:null,ssr:n,load:s},Symbol.toStringTag,{value:"Module"}));export{l as _,s as l,n as s};
