
import Link from "next/link";
import React, { useState, useEffect } from "react";

const ArticleCardLg = ({data}) => {
  return (
    <div className="el-item uk-panel uk-margin-remove-first-child">
  <a
    href="/joomla/themes/paladin/business/economy/273-more-concerns-about-possible-deflation-are-rising"
    aria-label="More concerns about possible deflation are rising"
  >
    <picture>
      <source
        type="image/webp"
        srcSet="https://via.placeholder.com/800x533"
        sizes="(min-width: 2400px) 2400px"
      />
      <img
        src="https://via.placeholder.com/800x533"
        width={2400}
        height={1500}
        className="el-image"
        alt=""
        loading="lazy"
      />
    </picture>
  </a>
  <h3 className="el-title uk-h4 uk-margin-top uk-margin-remove-bottom">
  <Link href={`/news /${data?.slug}`}>
      More concerns about possible deflation are rising
    </Link>
  </h3>
</div>
            );
};

export default ArticleCardLg;