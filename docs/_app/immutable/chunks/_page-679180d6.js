import{m as t,a as r}from"./api-abb4852f.js";const a=`query GetAuthor($id: UUID!)
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
`,o=!1;function s({url:n}){const e=n.searchParams.get("id");return t(e)?r({query:a,variables:{id:e},operationName:"GetAuthor"}):{errors:[{message:"id is not a valid UUID"}]}}const l=Object.freeze(Object.defineProperty({__proto__:null,ssr:o,load:s},Symbol.toStringTag,{value:"Module"}));export{l as _,s as l,o as s};
