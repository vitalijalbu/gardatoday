import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getEntries } from "@/lib/graphql/articles/";
import { request, gql } from "graphql-request";
import { FEED_QUERY } from "@/lib/graphql/articles/";
import ArticleCard from "@/shared/snippets/article-card";

const MastheadHeroLg = () => {
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
    <div
      className="tm-grid-expand uk-child-width-1-1 uk-grid-margin uk-grid uk-grid-stack"
      uk-grid=""
    >
      <div className="uk-grid-item-match uk-light uk-width-1-1@m uk-first-column">
        <div className="uk-tile-secondary uk-flex uk-preserve-color">
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
            <div className="uk-panel uk-width-1-1">
              <div className="uk-hidden@s uk-margin">
                <Link
                  className="el-link"
                  href={`/notizie/${firstArticle?.slug}`}
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
                </Link>
              </div>
              <div className="uk-h6 uk-text-primary uk-margin-small">
                Cullen's Last Night Out
              </div>
              <h2 className="uk-heading-small uk-margin-small uk-width-xlarge">
                <Link
                  className="el-link uk-link-heading"
                  href={`/notizie/${firstArticle?.slug}`}
                >
                  {firstArticle?.title}
                </Link>
              </h2>
              <div className="uk-panel uk-text-lead uk-margin uk-width-large">
                {firstArticle?.excerpt}
              </div>
              <h3 className="uk-h6 uk-margin-large uk-margin-remove-bottom">
                More Coverage
              </h3>
              <div className="uk-width-3-5@l uk-margin-medium">
                <div
                  className="uk-child-width-1-1 uk-child-width-1-3@s uk-grid-column-small uk-grid-divider uk-grid-match uk-grid"
                  uk-grid=""
                >
                  {entries.map((article, i) => (
                    <div>
                      <div className="el-item uk-panel uk-margin-remove-first-child">
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
                        <h4 className="el-title uk-margin-top uk-margin-remove-bottom">
                          <Link
                            href={`/notizie/${article.slug}`}
                            className="uk-link-heading"
                          >
                            {article.title}
                          </Link>
                        </h4>
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
  );
};
export default MastheadHeroLg;
