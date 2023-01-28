import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getEntries } from "@/lib/graphql/articles/";
import { request, gql } from "graphql-request";
import { FEED_QUERY } from "@/lib/graphql/articles/";
import ArticleCard from "@/shared/snippets/article-card";

const RelatedArticles = () => {
  const [loading, setLoading] = useState(false);
  const [entries, setEntries] = useState([]);
  const firstArticle = entries[0];

  console.log("✅ received-articles", entries);
  console.log("✅ firstArticle", firstArticle);

  useEffect(() => {
    request("https://gardatoday.it/api/v1", FEED_QUERY)
      .then((data) => {
        setEntries(data?.entries || []);
        //setfirstArticle(data?.entries);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

      

  
  return(
  <section className="uk-section uk-section-small">
  <div className="container">
  <div className="row">
  <div className="page-head uk-grid-small uk-flex-middle uk-margin-bottom">
     <h2 className="section-title">Articoli correlati</h2>
   </div>
   </div>
   <div className="row">
     <div className="tm-ignore-container">
        <div className="uk-grid uk-child-width-1-3 uk-child-width-1-4@m  uk-grid" uk-grid="">
        {entries.map((article, i) => (<ArticleCard data={article} key={i}/>))}
        </div>
     </div>
  </div>
  </div>
</section>
);
}
export default RelatedArticles;