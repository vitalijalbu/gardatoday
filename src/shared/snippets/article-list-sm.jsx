
import Link from "next/link";
import React, { useState, useEffect } from "react";

const ArticleListSM = ({ data }) => {
  return (
    <div className="media story-item sm d-flex">
      <div className="story-media__image sm align-self-start mr-3 media-thumb">
        <Link
          href={`/notizie/${data.slug}`}
          aria-label={data.title}
          className=""
          data-focus-mouse="false"
        >
          <picture>
            <source
              srcSet={
                data.cover_image[0]?.url ??
                "https://gardatoday.it/web/assets/images/placeholder.png"
              }
              media="(min-width: 62.5em)"
            />
            <img
              srcSet={
                data.cover_image[0]?.url ??
                "https://gardatoday.it/web/assets/images/placeholder.png"
              }
              alt="Elezioni Provinciali: Emanuele Moraschini è il nuovo Presidente"
            />
          </picture>
        </Link>
      </div>
      <div className="pl-2 media-body">
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
            <h5 className="card-title underline">{data.title}</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleListSM;
