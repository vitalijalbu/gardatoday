import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getEntries } from "@/lib/graphql/articles/";
import { request, gql } from "graphql-request";
import { FEED_QUERY } from "@/lib/graphql/articles/";
import ArticleCard from "@/shared/snippets/article-card";

const SectionGridLg = () => {
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

  return (
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
                  Section grid Large
                </Link>
              </h2>
              <div className="row">
                <div
                  className="tm-grid-expand uk-grid-column-small uk-grid-divider uk-grid-margin uk-grid uk-grid-stack"
                  uk-grid=""
                >
                  <div className="uk-width-2-5@l uk-first-column">
                    <div className="uk-light uk-margin uk-text-center">
                      <Link
                        href={`/notizie/${firstArticle?.slug}`}
                        aria-label={firstArticle?.title}
                        className="el-container uk-inline-clip uk-link-toggle"
                      >
                        <picture>
                          <source
                            type="image/webp"
                            srcSet={firstArticle?.cover_image[0]?.url ?? "null"}
                            sizes="(min-width: 630px) 630px"
                          />
                          <img
                            src={firstArticle?.cover_image[0]?.url ?? "null"}
                            width={630}
                            height={450}
                            alt=""
                            loading="lazy"
                            className="el-image uk-transition-opaque"
                          />
                        </picture>
                        <div className="uk-position-bottom-center">
                          <div className="uk-panel uk-padding uk-margin-remove-first-child">
                            {firstArticle?.categories?.map((category, cat) => (
                              <div
                                className="el-meta uk-h6 uk-margin-top uk-margin-remove-bottom"
                                key={cat}
                              >
                                {category.title}
                              </div>
                            ))}
                            <h3 className="el-title uk-h1 uk-margin-small-top uk-margin-remove-bottom">
                              <span >
                                {firstArticle?.title}
                              </span>
                            </h3>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="uk-width-3-5@l uk-visible@l">
                    <div className="uk-margin">
                      <div
                        className="uk-child-width-1-1 uk-child-width-1-3@m uk-grid-column-small uk-grid-divider uk-grid-match uk-grid uk-grid-stack"
                        uk-grid=""
                      >
                        {entries.map((article, i) => (
                          <div key={i} className="uk-first-column">
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
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionGridLg;
