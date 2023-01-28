import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getEntries } from "@/lib/graphql/articles/";
import { request, gql } from "graphql-request";
import { FEED_QUERY } from "@/lib/graphql/articles/";
import ArticleCard from "@/shared/snippets/article-card";

const SectionFull = () => {
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
    <div className="uk-section-default uk-section uk-padding-remove-bottom">
      <div className="uk-container uk-container-xlarge">
        <div
          className="uk-margin-remove-bottom tm-grid-expand uk-child-width-1-1 uk-margin-large uk-grid uk-grid-stack"
          uk-grid=""
        >
          <div className="uk-width-1-1@m uk-first-column">
            <hr />
            <h2 className="section-title">
              <a
                className="el-link uk-link-heading"
                href="/notizie/demo-notizia"
              >
                Categoria demo
              </a>
            </h2>
          </div>
        </div>
        <div
          className="tm-grid-expand uk-grid-column-small uk-grid-divider uk-grid-margin uk-grid"
          uk-grid=""
        >
          <div className="uk-grid-item-match uk-width-1-2@m uk-width-3-5@l uk-first-column">
            <div className="uk-flex">
              <div
                data-src={firstArticle?.cover_image[0]?.url ?? "null"}
                data-sources='[{"type":"image\/webp","srcset":"\/joomla\/themes\/paladin\/component\/ajax\/?p=image&src=WyIuLi9kZW1vL3BhbGFkaW4vaW1hZ2VzL3RlY2hub2xvZ3ktcG9zdC1tb3N0LXByb21pbmVudC1mZWF0dXJlcy1vZi10aGUtbmV3LW1vYmlsZS1vcy10ZWFzZXItYmctcmlnaHQuanBnIixbWyJ0eXBlIixbIndlYnAiLCI4NSJdXSxbImRvUmVzaXplIixbNzY4LDQ4MCw3NjgsNDgwXV0sWyJkb0Nyb3AiLFs3NjgsNDgwLDAsMF1dXSwxNjY5NzM1NjkzXQ%3D%3D&file=0d%2Ftechnology-post-most-prominent-features-of-the-new-mobile-os-teaser-bg-right-0d1418a1.webp&hash=84b43ae7 768w, \/joomla\/themes\/paladin\/component\/ajax\/?p=image&src=WyIuLi9kZW1vL3BhbGFkaW4vaW1hZ2VzL3RlY2hub2xvZ3ktcG9zdC1tb3N0LXByb21pbmVudC1mZWF0dXJlcy1vZi10aGUtbmV3LW1vYmlsZS1vcy10ZWFzZXItYmctcmlnaHQuanBnIixbWyJ0eXBlIixbIndlYnAiLCI4NSJdXSxbImRvUmVzaXplIixbOTUwLDU5NCw5NTAsNTk0XV1dLDE2Njk3MzU2OTNd&file=ed%2Ftechnology-post-most-prominent-features-of-the-new-mobile-os-teaser-bg-right-ed262ace.webp&hash=cd3e60d7 950w, \/joomla\/themes\/paladin\/component\/ajax\/?p=image&src=WyIuLi9kZW1vL3BhbGFkaW4vaW1hZ2VzL3RlY2hub2xvZ3ktcG9zdC1tb3N0LXByb21pbmVudC1mZWF0dXJlcy1vZi10aGUtbmV3LW1vYmlsZS1vcy10ZWFzZXItYmctcmlnaHQuanBnIixbWyJ0eXBlIixbIndlYnAiLCI4NSJdXSxbImRvUmVzaXplIixbMTAyNCw2NDAsMTAyNCw2NDBdXSxbImRvQ3JvcCIsWzEwMjQsNjQwLDAsMF1dXSwxNjY5NzM1NjkzXQ%3D%3D&file=df%2Ftechnology-post-most-prominent-features-of-the-new-mobile-os-teaser-bg-right-dfc74423.webp&hash=e9798e7d 1024w, \/joomla\/themes\/paladin\/component\/ajax\/?p=image&src=WyIuLi9kZW1vL3BhbGFkaW4vaW1hZ2VzL3RlY2hub2xvZ3ktcG9zdC1tb3N0LXByb21pbmVudC1mZWF0dXJlcy1vZi10aGUtbmV3LW1vYmlsZS1vcy10ZWFzZXItYmctcmlnaHQuanBnIixbWyJ0eXBlIixbIndlYnAiLCI4NSJdXSxbImRvUmVzaXplIixbMTM2Niw4NTQsMTM2Niw4NTRdXSxbImRvQ3JvcCIsWzEzNjYsODU0LDAsMF1dXSwxNjY5NzM1NjkzXQ%3D%3D&file=7b%2Ftechnology-post-most-prominent-features-of-the-new-mobile-os-teaser-bg-right-7b1de13c.webp&hash=3af9b3cf 1366w, \/joomla\/templates\/yootheme\/cache\/fd\/technology-post-most-prominent-features-of-the-new-mobile-os-teaser-bg-right-fd4a2022.webp 1600w, \/joomla\/templates\/yootheme\/cache\/b5\/technology-post-most-prominent-features-of-the-new-mobile-os-teaser-bg-right-b5f8be73.webp 1899w, \/joomla\/templates\/yootheme\/cache\/0f\/technology-post-most-prominent-features-of-the-new-mobile-os-teaser-bg-right-0f929b41.webp 1900w","sizes":"(max-aspect-ratio: 950\/594) 160vh"}]'
                uk-img=""
                className="uk-background-norepeat uk-background-cover uk-background-bottom-right uk-background-image@xl uk-tile uk-width-1-1 uk-padding-remove"
                style={{
                  backgroundImage: `url(${
                    firstArticle?.cover_image[0]?.url ?? "null"
                  })`,
                }}
              >
                <h3 className="uk-heading-small uk-width-large@xl">
                  <Link
                    href={`/notizie/${firstArticle?.slug}`}
                    aria-label={firstArticle?.title}
                    className="el-link uk-link-heading"
                  >
                    {firstArticle?.title}
                  </Link>
                </h3>
                <div className="uk-panel uk-margin-medium uk-width-large@xl">
                  {firstArticle?.excerpt}
                </div>
                <div className="uk-panel uk-margin-remove-first-child uk-margin-large">
                  <div
                    className="uk-child-width-expand uk-grid-column-small uk-flex-middle uk-grid"
                    uk-grid=""
                  >
                    <div className="uk-width-auto@m uk-first-column">
                      <picture>
                        <source
                          type="image/webp"
                          srcSet="https://via.placeholder.com/800x533"
                          sizes="(min-width: 40px) 40px"
                        />
                        <img
                          src="https://via.placeholder.com/800x533"
                          width={40}
                          height={40}
                          className="el-image uk-border-circle"
                          alt=""
                          loading="lazy"
                        />
                      </picture>
                    </div>
                    <div className="uk-margin-remove-first-child">
                      <div className="el-title uk-h5 uk-margin-top uk-margin-remove-bottom">
                        Adrian Phelps
                      </div>
                    </div>
                  </div>
                </div>
                <div className="uk-hidden@xl uk-margin uk-width-large uk-margin-auto">
                  <Link className="el-link" href="/notizie/demo-notizia">
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="https://via.placeholder.com/800x533"
                        sizes="(min-width: 450px) 450px"
                      />
                      <img
                        src="https://via.placeholder.com/800x533"
                        width={450}
                        height={590}
                        className="el-image"
                        alt=""
                        loading="lazy"
                      />
                    </picture>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="uk-width-1-2@m uk-width-2-5@l">
            <div className="uk-margin">
              <div
                className="uk-child-width-1-1 uk-child-width-1-2@s uk-grid-column-small uk-grid-divider uk-grid-match uk-grid"
                uk-grid=""
              >
                {entries.map((article, i) => (
                  <ArticleCard data={article} key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionFull;
