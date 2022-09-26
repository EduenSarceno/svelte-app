import{m as r}from"./uuid-cce78d13.js";import{a as o}from"./api-fae0dd8d.js";const a=`query GetAuthor($id: UUID!)
{
  author(id:$id) {
    id, name
  },
  posts(options: {
    where: {
      authorId: $id
    },
    limit: 5
  }){
    pages,
    length,
    rows {
      id,
      title
    }
  }
}
`,s=!1;function i({url:t,fetch:n}){const e=t.searchParams.get("id");return r(e)?o({query:a,variables:{id:e},operationName:"GetAuthor"},n):{errors:[{message:"id is not a valid UUID"}]}}const u=Object.freeze(Object.defineProperty({__proto__:null,ssr:s,load:i},Symbol.toStringTag,{value:"Module"}));export{u as _,i as l,s};
