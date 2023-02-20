
import Link from "next/link";
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

const EventCard = ({data}) => {
  return (
    <div className="card-wrapper event-item mb-3">
      <div className="card card-img no-after">
        <Link href={`/eventi/${data.slug}`} aria-label={data.title}>
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
      {data?.area && data?.area.length > 0 ? (
          <Link className="category" href={`/sezioni/${data?.area[0].slug}`}>
            {data?.area[0].title}
          </Link>
        ) : null}
            <span className="data">{data.postDate}</span>
          </div>
        
        <Link href={`/eventi/${data.slug}`} >
          <h5 className="card-title serif underline">{data.title}</h5>
        </Link>

        <p className="card-text d-md-block d-none">{data.excerpt}</p>
      </div>
    </div>
            );
};

export default EventCard;