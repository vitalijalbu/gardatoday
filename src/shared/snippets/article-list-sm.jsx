import { data } from "@/assets/js/uikit";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const ArticleList = ({data}) => {
  return (
    <div className="media story-item sm">
  <div className="story-media__image sm align-self-start mr-3 media-thumb">
    <Link
       href={`/notizie/${data.slug}`}
    aria-label={data.title}
      className=""
      data-focus-mouse="false"
    >
      <picture>
        <source
          srcSet="https://gardatoday.it/web/uploads/media/moraschini-presidente-provincia-brescia.jpg"
          media="(min-width: 62.5em)"
        />
        <img
          srcSet="https://gardatoday.it/web/uploads/media/moraschini-presidente-provincia-brescia.jpg"
          alt="Elezioni Provinciali: Emanuele Moraschini è il nuovo Presidente"
        />
      </picture>
    </Link>
  </div>
  <div className="media-body">
    <div className="story-item__body sm">
      <div className="category-top m-0">
        <Link className="category" href="https://gardatoday.it/sezioni/politica">
          Politica
        </Link>
        <span className="data">{data.postDate}</span>
      </div>
      <Link  href={`/notizie/${data.slug}`}
    aria-label={data.title}>
        <h5 className="card-title underline">
          {data.title}
        </h5>
      </Link>
    </div>
  </div>
  </div>

            )
}

export default ArticleList;