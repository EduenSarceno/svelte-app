import{m as a,a as n}from"./api-abb4852f.js";const r=`query GetPost($id: UUID!)
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
`,o=!1;function s({url:t}){const e=t.searchParams.get("id");return a(e)?n({query:r,variables:{id:e},operationName:"GetPost"}):{errors:[{message:"id is not a valid UUID"}]}}const c=Object.freeze(Object.defineProperty({__proto__:null,ssr:o,load:s},Symbol.toStringTag,{value:"Module"}));export{c as _,s as l,o as s};
