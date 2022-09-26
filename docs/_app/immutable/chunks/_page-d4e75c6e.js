import{m as n}from"./uuid-cce78d13.js";import{a as r}from"./api-79b9779c.js";const o=`query GetAuthor($id: UUID!)
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
`,a=!1;function s({url:t}){const e=t.searchParams.get("id");return n(e)?r({query:o,variables:{id:e},operationName:"GetAuthor"}):{errors:[{message:"id is not a valid UUID"}]}}const m=Object.freeze(Object.defineProperty({__proto__:null,ssr:a,load:s},Symbol.toStringTag,{value:"Module"}));export{m as _,s as l,a as s};
