import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getEntries } from "@/lib/graphql/articles/";
import { request, gql } from 'graphql-request'
import { FEED_QUERY } from "@/lib/graphql/articles/";
import ArticleCard from "@/shared/snippets/article-card";



const Section1 = () => {
  const [loading, setLoading] = useState(false);
  const [entries, setEntries] = useState([]);
  const firstArticle = entries[0];
  
  console.log('✅ received-articles', entries);
  console.log('✅ firstArticle', firstArticle);

useEffect(() => {
  request('https://gardatoday.it/api/v1', FEED_QUERY)
  .then((data ) => {
    setEntries(data?.entries || []);
    //setfirstArticle(data?.entries);
  })
  .finally(() => {
    setLoading(false);
  });
}, []);

  return(
<div className="uk-section-default uk-light">
  <div
    data-src={firstArticle?.cover_image[0]?.url ?? 'null'}
    data-sources='[{"type":"image\/webp","srcset":"\/joomla\/themes\/paladin\/component\/ajax\/?p=image&src=WyIuLi9kZW1vL3BhbGFkaW4vaW1hZ2VzL3BvbGl0aWNzLXBvc3QtZW50ZXJpbmctbmV4dC1yb3VuZC1icmV4aXQtbmVnb3RpYXRpb25zLXRlYXNlci1iZy1jZW50ZXIuanBnIixbWyJ0eXBlIixbIndlYnAiLCI4NSJdXSxbImRvUmVzaXplIixbNzY4LDI3MCw3NjgsMjcwXV0sWyJkb0Nyb3AiLFs3NjgsMjcwLDAsMF1dXSwxNjY5NzM1Njg4XQ%3D%3D&file=9b%2Fpolitics-post-entering-next-round-brexit-negotiations-teaser-bg-center-9b4533df.webp&hash=bf0d7a27 768w, \/joomla\/themes\/paladin\/component\/ajax\/?p=image&src=WyIuLi9kZW1vL3BhbGFkaW4vaW1hZ2VzL3BvbGl0aWNzLXBvc3QtZW50ZXJpbmctbmV4dC1yb3VuZC1icmV4aXQtbmVnb3RpYXRpb25zLXRlYXNlci1iZy1jZW50ZXIuanBnIixbWyJ0eXBlIixbIndlYnAiLCI4NSJdXSxbImRvUmVzaXplIixbMTAyNCwzNjAsMTAyNCwzNjBdXSxbImRvQ3JvcCIsWzEwMjQsMzYwLDAsMF1dXSwxNjY5NzM1Njg4XQ%3D%3D&file=ee%2Fpolitics-post-entering-next-round-brexit-negotiations-teaser-bg-center-eed2512e.webp&hash=48e54989 1024w, \/joomla\/themes\/paladin\/component\/ajax\/?p=image&src=WyIuLi9kZW1vL3BhbGFkaW4vaW1hZ2VzL3BvbGl0aWNzLXBvc3QtZW50ZXJpbmctbmV4dC1yb3VuZC1icmV4aXQtbmVnb3RpYXRpb25zLXRlYXNlci1iZy1jZW50ZXIuanBnIixbWyJ0eXBlIixbIndlYnAiLCI4NSJdXSxbImRvUmVzaXplIixbMTM2NSw0ODAsMTM2NSw0ODBdXSxbImRvQ3JvcCIsWzEzNjYsNDgwLDAsMF1dXSwxNjY5NzM1Njg4XQ%3D%3D&file=8c%2Fpolitics-post-entering-next-round-brexit-negotiations-teaser-bg-center-8cdad67d.webp&hash=536ee08f 1366w, \/joomla\/templates\/yootheme\/cache\/af\/politics-post-entering-next-round-brexit-negotiations-teaser-bg-center-af7eb6e1.webp 1600w, \/joomla\/themes\/paladin\/component\/ajax\/?p=image&src=WyIuLi9kZW1vL3BhbGFkaW4vaW1hZ2VzL3BvbGl0aWNzLXBvc3QtZW50ZXJpbmctbmV4dC1yb3VuZC1icmV4aXQtbmVnb3RpYXRpb25zLXRlYXNlci1iZy1jZW50ZXIuanBnIixbWyJ0eXBlIixbIndlYnAiLCI4NSJdXSxbImRvUmVzaXplIixbMTkyMCw2NzUsMTkyMCw2NzVdXSxbImRvQ3JvcCIsWzE5MjAsNjc1LDAsMF1dXSwxNjY5NzM1Njg4XQ%3D%3D&file=5e%2Fpolitics-post-entering-next-round-brexit-negotiations-teaser-bg-center-5e2481bf.webp&hash=528c4cd7 1920w, \/joomla\/templates\/yootheme\/cache\/d7\/politics-post-entering-next-round-brexit-negotiations-teaser-bg-center-d736acbc.webp 2560w","sizes":"(max-aspect-ratio: 2560\/900) 284vh"}]'
    uk-img=""
    className="uk-background-norepeat uk-background-cover uk-background-center-center uk-section uk-section-large"
    style={{
      backgroundImage:
      `url(${firstArticle?.cover_image[0]?.url ?? 'null'})`
    }}
  >
    <div className="uk-container uk-container-xlarge">
      <div
        className="tm-grid-expand uk-grid-large uk-grid-margin-large uk-grid"
        uk-grid=""
      >
        <div className="uk-width-3-5@m uk-first-column">
          <div className="uk-h6"> Brexit negotiations </div>
          <h2 className="uk-heading-small uk-margin-small uk-width-xlarge">
            
          <Link
                href={`/notizie/${firstArticle?.slug}`}
                 aria-label={firstArticle?.title}
              className="el-link uk-link-heading"
            >
              {firstArticle?.title}
            </Link>
          </h2>
          <div className="uk-panel uk-text-lead uk-margin-medium uk-width-large">
          {firstArticle?.excerpt}
          </div>
        </div>
        <div className="uk-width-2-5@m">
          <h3 className="uk-h6">Altro</h3>
          <ul className="uk-list uk-list-divider uk-list-large uk-margin">
          {entries.map((article, i) => (
            <li className="el-item">
              <div className="el-content uk-panel uk-h3">
              <Link
                 href={`/notizie/${article.slug}`}
                 className="el-link uk-link-heading uk-margin-remove-last-child"
                 >
                  {article.title}
                 </Link>
              </div>
            </li>
          ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
);
}
export default Section1;