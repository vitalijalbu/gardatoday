import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getEntries } from "@/lib/graphql/articles/";
import { request, gql } from 'graphql-request'
import { FEED_QUERY } from "@/lib/graphql/articles/";
import ArticleCard from "@/shared/snippets/article-card";


const SmallGrid = () => {
  const [loading, setLoading] = useState(false);
  const [entries, setEntries] = useState([]);
  console.log('✅ received-articles', entries)

useEffect(() => {
  request('https://gardatoday.it/api/v1', FEED_QUERY).then((data) => setEntries(data?.entries || []))
}, [])

  return(<div className="uk-visible@s uk-section-default uk-section uk-section-small uk-padding-remove-top">
  <div className="uk-container uk-container-xlarge">
    <div
      className="uk-visible@s tm-grid-expand uk-child-width-1-1 uk-grid-margin uk-grid uk-grid-stack"
      uk-grid=""
    >
      <div className="uk-width-1-1@m uk-visible@s uk-first-column">
        <h2 className="uk-h6 uk-visible@s"> Small grid </h2>
        <div className="uk-visible@s uk-margin">
          <div
            className="uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-4@l uk-grid-column-medium uk-grid-row-small uk-grid-divider uk-grid-match uk-grid"
            uk-grid=""
          >
             {entries.map((article, i) => (
           
            <div className="uk-first-column">
              <div className="el-item uk-panel uk-margin-remove-first-child">
                <div
                  className="uk-child-width-expand uk-grid-column-small uk-grid"
                  uk-grid=""
                >
                  <div className="uk-width-auto uk-first-column">
                  <Link
                  href={`/notizie/${article.slug}`}
                  aria-label={article.title}
                >
                      <picture>
                        <source
                          type="image/webp"
                          srcSet={article.cover_image[0]?.url}
                          sizes="(min-width: 70px) 70px"
                        />
                        <img
                          src={article.cover_image[0]?.url}
                          width={70}
                          height={70}
                          className="el-image"
                          alt=""
                          loading="eager"
                        />
                      </picture>
                    </Link>
                  </div>
                  <div className="uk-margin-remove-first-child">
                    <h3 className="el-title uk-h5 uk-margin-top uk-margin-remove-bottom">
                      
                    <Link
                    href={`/notizie/${article.slug}`}
                    
                  >
                   {article.title}
                  </Link>
                    </h3>
                    <div className="el-meta uk-text-meta uk-margin-small-top">
                    {article.createdAt}
                    </div>
                  </div>
                </div>
              </div>
            </div>
             ))}
          </div>
        </div>
        <hr className="uk-visible@s uk-margin-medium" />
      </div>
    </div>
  </div>
</div>

);
}
export default SmallGrid;