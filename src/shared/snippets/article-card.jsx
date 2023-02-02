import { data } from "@/assets/js/uikit";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

const ArticleCard = ({ data }) => {
  return (
    <div className="card-wrapper article-item">
      <div className="card card-img no-after">
        <Link href={`/notizie/${data.slug}`} aria-label={data.title}>
          <div className="img-responsive-wrapper">
            <div className="img-responsive">
              <figure className="img-wrapper">
                <source
                  srcSet={data.cover_image[0]?.url}
                  media="(min-width: 62.5em)"
                />
                <img
                  srcSet={data.cover_image[0]?.url}
                  className="p-card__image"
                  alt=" CanevaWorld Resort alla ricerca di oltre 200 lavoratori stagionali﻿ "
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
          <a
            className="category"
            href="https://gardatoday.it/comuni/tremosine-sul-garda"
          >
            Tremosine sul Garda
          </a>
          <span className="data">{dayjs(data?.postDate).format('dddd')}</span>
        </div>
        <Link href={`/notizie/${data.slug}`} className="uk-link-heading">
          <h5 className="card-title underline">{data.title}</h5>
        </Link>

        <p className="card-text d-md-block d-none">{data.excerpt}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
