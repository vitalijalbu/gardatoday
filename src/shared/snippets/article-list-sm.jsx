
import Link from "next/link";
import React, { useState, useEffect } from "react";

const ArticleListSM = ({ data }) => {
  return (
    <li className="d-flex article-item_list">
      <div className="story-media__image sm align-self-start flex-shrink-0 media-thumb">
        <Link
          href={`/notizie/${data.slug}`}
          aria-label={data.title}
          className=""
          data-focus-mouse="false"
        >
          <picture>
            <source
              srcSet={data.cover_image ? data.cover_image[0].url : '/images/placeholder.png'}
              media="(min-width: 62.5em)"
            />
            <img
              srcSet={data.cover_image ? data.cover_image[0].url : '/images/placeholder.png'}
              alt="Elezioni Provinciali: Emanuele Moraschini è il nuovo Presidente"
            />
          </picture>
        </Link>
      </div>
      <div className="ps-2 media-body">
        <div className="story-item__body sm">
          <div className="category-top m-0">
            <Link
              className="category"
              href="https://gardatoday.it/sezioni/politica"
            >
              Politica
            </Link>
            <span className="data">{data.postDate}</span>
          </div>
          <Link href={`/notizie/${data.slug}`} aria-label={data.title}>
            <h5 className="card-title serif underline">{data.title}</h5>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default ArticleListSM;
