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
                  srcSet={data.cover_image ? data.cover_image[0].url : '/images/placeholder.png'}
                  media="(min-width: 62.5em)"
                />
                <img
                  srcSet={data.cover_image ? data.cover_image[0].url : '/images/placeholder.png'}
                  className="p-card__image"
                  alt={data.title}
                />
              </figure>
            </div>
          </div>
        </Link>
      </div>

      <div className="card-body">
        <a href="https://gardatoday.it/notizie/tremosine-morto-agricoltore-ribaltatosi-con-trattore"></a>
        <div className="category-top">
          <a href="https://gardatoday.it/notizie/tremosine-morto-agricoltore-ribaltatosi-con-trattore"></a>
          <Link href={`/zone/${data?.area?.slug}`} aria-label={data.title} className="category">
            {data?.area?.title}
            </Link>
          <span className="data">{dayjs(data?.postDate).format('dddd')}</span>
        </div>
        <Link href={`/notizie/${data.slug}`} className="uk-link-heading">
          <h5 className="card-title serif underline">{data.title}</h5>
        </Link>

        {excerpt === true && <p className="card-text d-md-block d-none">{data.excerpt}</p>}
      </div>
    </div>
  )
}

export default ArticleCard;
