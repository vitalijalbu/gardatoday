import React, { useState, useEffect } from "react";
import Link from "next/link";
import ArticleCard from "@/shared/snippets/article-card";
import { request, gql } from 'graphql-request'
import { FEED_QUERY } from "@/lib/graphql/queries/news";

const RelatedArticles = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  

      /* Query API here */
      useEffect(() => {
        //const { query, order_by } = params;
        request('https://beta.resthotels.it/api/v1/', FEED_QUERY)
          .then(({ data }) => {
            //setData(data);
            console.log('res---->', data);
          })
          .finally(() => {
            setLoading(false);
          });
        },[]);

      

  
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
        <ArticleCard/>
        </div>
     </div>
  </div>
  </div>
</section>
);
}
export default RelatedArticles;