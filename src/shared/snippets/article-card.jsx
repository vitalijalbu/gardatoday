import Link from "next/link";
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

const ArticleCard = ({ data, excerpt }) => {
  return (
    <div className="card-wrapper article-item mb-3">
      <div className="card card-img no-after">
        <Link href={`/notizie/${data.slug}`} aria-label={data.title}>
          <div className="img-responsive-wrapper">
            <div className="img-responsive">
              <figure className="img-wrapper">
                <source
                  srcSet={data.cover_image ? data.cover_image[0].url : '/images/placeholder.svg'}
                  media="(min-width: 62.5em)"
                />
                <img
                  srcSet={data.cover_image ? data.cover_image[0].url : '/images/placeholder.svg'}
                  className="p-card__image"
                  alt={data.title}
                />
              </figure>
            </div>
          </div>
        </Link>
      </div>

      <div className="card-body">
      <div className="category-top m-0">
      {data?.category && data?.category.length > 0 ? (
          <Link className="category" href={`/sezioni/${data?.category[0].slug}`}>
            {data?.category[0].title}
          </Link>
        ) : null}
            <span className="data">{data.postDate}</span>
          </div>
        
          <h5 className="card-title serif underline"><Link href={`/notizie/${data.slug}`}>{data.title}</Link></h5>
        

        {excerpt === true && <p className="card-text d-md-block d-none">{data.excerpt}</p>}
      </div>
    </div>
  )
}

export default ArticleCard;
