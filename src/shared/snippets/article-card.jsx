import Link from "next/link";
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

const ArticleCard = ({ data, excerpt }) => {
  return (
    <div className="item">
  <div className="img img-cover th-180">
  <figure className="img img-cover th-180">
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
  <div className="content pt-20">
    <a href="#" className="news-cat color-999 fsz-13px text-uppercase mb-10">
      sport
    </a>
    <h4 className="title ltspc--1 mb-10">
      <Link href={`/notizie/${data.slug}`}>{data.title}</Link>
    </h4>
    <div className="text color-666">
      The Boston Red Sox scored three runs in the 10th inning [...]
    </div>
    <div className="meta-bot lh-1 mt-20">
      <ul className="d-flex">
        <li className="date me-5">
          <a href="#">
            <i className="la la-calendar me-2" /> {data.postDate}
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default ArticleCard;
