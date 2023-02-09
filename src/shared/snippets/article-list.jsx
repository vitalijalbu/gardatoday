
import Link from "next/link";
import React, { useState, useEffect } from "react";

const ArticleList = ({data}) => {
  return (
  <li className="d-flex article-item_list">
      <div className=" flex-shrink-0 story-media__image align-self-start ml-3 media-thumb">
   <Link href={`/notizie/${data.slug}`} aria-label={data.title}>
      <picture>
        <source
          srcSet={data.cover_image ? data.cover_image[0].url : '/images/placeholder.png'}
          media="(min-width: 62.5em)"
        />
        <img
          srcSet={data.cover_image ? data.cover_image[0].url : '/images/placeholder.png'}
          alt={data.title}
        />
      </picture>
    </Link>
  </div>
  <div className="media-body flex-grow-1 ms-3">
    <div className="story-item__body rvt-grow-1">
      <div className="category-top">
        <Link className="category" href="https://gardatoday.it/sezioni/cronaca">
          Cronaca
        </Link>
        <span className="data">02/02/2023</span>
      </div>
     <Link href={`/notizie/${data.slug}`} aria-label={data.title}>
        <h5 className="card-title serif big-heading underline text-serif mb-3">
          {data.title}
        </h5>
        <p className="card-text text-muted d-md-block d-none">
          {data.excerpt}
        </p>
      </Link>
    </div>
  </div>

</li>

            )
}

export default ArticleList;