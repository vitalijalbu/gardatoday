import React, { useState, useEffect } from "react";
import graphQLClient from "@/lib/graphql/client";
import { request, gql } from 'graphql-request';
import MastheadSmall from "@/shared/sections/masthead-small";
import ArticleList from "@/shared/snippets/article-list";

export async function getStaticProps() {
  const data = await graphQLClient.request(gql`
  query {
    entries(section: "news", limit: 30) {
      id
      title
      slug
      dateCreated
      ... on news_default_Entry {
        excerpt
        cover_image {
          id,
          url
        }
        author {
          id,
          fullName
        }
        area {
          id,
          title
        }
         category {
          id,
          title
        }
      }
    }
  }
  `);

  return {
    props: { data },
  };
}

const Index = ({data}) => {
  const [loading, setLoading] = useState(false);
  console.log('🗞️ news-here', data);
  //const head_entries = data.entries.splice(0,10);
  


  if (!data) return <h1 strong>Nessun dato</h1>;

  return (
    
    <div className="page">
      <MastheadSmall articles={data?.entries}/>
      <div className="container">
      <div className="row">
  <div className="col-8">
  {data.entries.map((entry, i) => (
    <ArticleList data={entry} key={i}/>
   ))}
   </div>
     <div className="col-4">
    sidebar

</div>
</div>
</div>
</div>


  )
}

export default Index;
