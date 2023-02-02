import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getEntries } from "@/lib/graphql/articles/";
import { request, gql } from 'graphql-request'
import { GET_BY_CATEGORY } from "@/lib/graphql/articles/";
import ArticleCard from "@/shared/snippets/article-card";



const SectionGrid = ({title, query}) => {
  const [loading, setLoading] = useState(false);
  const [entries, setEntries] = useState([]);
  console.log('✅ received-articles', entries)

useEffect(() => {
  request('https://gardatoday.it/api/v1', GET_BY_CATEGORY).then((data) => setEntries(data?.entries || []))
}, [])

  return(
<section className="uk-section uk-section-default uk-section-small">
<div className="uk-section-default uk-section uk-padding-remove-bottom">
  <div className="uk-container uk-container-xlarge">
    <div
      className="uk-margin-remove-bottom tm-grid-expand uk-child-width-1-1 uk-margin-large uk-grid uk-grid-stack"
      uk-grid=""
    >
      <div className="uk-width-1-1@m uk-first-column">
        <hr />
        <h2 className="section-title">
          <Link
            className="el-link uk-link-heading"
            href="/notizie/demo-notizia"
          >
            {title}
          </Link>
        </h2>
        <div className="row">
          <div
            className="uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-4@m uk-grid-column-small uk-grid-divider uk-grid-match uk-grid"
            uk-grid=""
          >
            {entries.map((article, i) => (
           
           <ArticleCard data={article} key={i}/>


            ))}

          </div>
        </div>
      </div>
    </div>

  </div>
</div>

</section>

);
}
export default SectionGrid;