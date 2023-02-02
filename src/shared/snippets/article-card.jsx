import { data } from "@/assets/js/uikit";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const ArticleCard = ({data}) => {
  return (
    <div className="el-item uk-panel uk-margin-remove-first-child">
  <Link
     href={`/notizie/${data.slug}`}
    aria-label={data.title}
  >
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
  <h3 className="el-title uk-h3 uk-margin-top uk-margin-remove-bottom">
                  
                  <Link
                    href={`/notizie/${data.slug}`}
                      className="uk-link-heading"
                    >
                     {data.title}
                    </Link>
                  </h3>
                  <div className="el-content uk-panel uk-margin-top">
                    {data.excerpt}
                  </div>
</div>
            );
};

export default ArticleCard;