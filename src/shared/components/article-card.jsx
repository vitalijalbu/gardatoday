import { data } from "@/assets/js/uikit";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const ArticleCard = ({data}) => {
  return (
    <div className="el-item uk-panel uk-margin-remove-first-child">
  <Link
    href="/notizie/edm"
    aria-label="More concerns about possible deflation are rising"
  >
    <picture>
      <source
        type="image/webp"
        srcSet="/https://via.placeholder.com/800x533"
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
  </Link>
  <Link href={`/news /${data?.slug}`}>
  <h3 className="el-title uk-h4 uk-margin-top uk-margin-remove-bottom">
  
      More concerns about possible deflation are rising
    
  </h3>
  </Link>
</div>
            );
};

export default ArticleCard;