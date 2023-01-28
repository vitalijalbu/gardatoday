import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getEntries } from "@/lib/graphql/articles/";
import { request, gql } from 'graphql-request'
import { GET_BY_CATEGORY } from "@/lib/graphql/articles/";
import ArticleCard from "@/shared/snippets/article-card";



const SectionGrid = () => {
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
            Section grid
          </Link>
        </h2>
        <div className="row">
          <div
            className="uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-4@m uk-grid-column-small uk-grid-divider uk-grid-match uk-grid"
            uk-grid=""
          >
            {entries.map((article, i) => (
           
            <div key={i}>
              <div className="el-item">
                <Link
                  href={`/notizie/${article.slug}`}
                  aria-label={article.title}
                >
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={article.cover_image[0]?.url}
                      sizes="(min-width: 610px) 610px"
                    />
                    <img
                      src={article.cover_image[0]?.url}
                      width={610}
                      height={381}
                      className="el-image"
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </Link>
                <h3 className="el-title uk-h3 uk-margin-top uk-margin-remove-bottom">
                  
                <Link
                  href={`/notizie/${article.slug}`}
                    className="uk-link-heading"
                  >
                   {article.title}
                  </Link>
                </h3>
                <div className="el-content uk-panel uk-margin-top">
                  {article.excerpt}
                </div>
              </div>
            </div>

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