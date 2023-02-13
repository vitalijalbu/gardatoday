
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
              srcSet={data.cover_image ? data.cover_image[0].url : '/images/placeholder.svg'}
              media="(min-width: 62.5em)"
            />
            <img
              srcSet={data.cover_image ? data.cover_image[0].url : '/images/placeholder.svg'}
              alt="Elezioni Provinciali: Emanuele Moraschini è il nuovo Presidente"
            />
          </picture>
        </Link>
      </div>
      <div className="ps-2 media-body">
        <div className="story-item__body sm">
          <div className="category-top m-0">
            {data?.area.lenght > 0 ? (<Link
              className="category"
              href={`/zone/${data?.area[0]?.slug}`}
            >
              {data?.area[0]?.title}
            </Link>) : 
            (<Link
              className="category"
              href={`/sezioni/${data?.category[0]?.slug}`}
            >
              {data?.category[0]?.title}
            </Link>)}
            <span className="data">{data.postDate}</span>
          </div>
          <h6 className="card-title serif underline"><Link href={`/notizie/${data.slug}`}>{data.title}</Link></h6>
        </div>
      </div>
    </li>
  );
};

export default ArticleListSM;
