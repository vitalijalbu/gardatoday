
import Link from "next/link";
import React, { useState, useEffect } from "react";

const VoucherCard = ({data}) => {
  return (
    <div className="el-item uk-panel uk-margin-remove-first-child">
  <Link
     href={`/notizie/${data.slug}`}
    aria-label={data.title}
  >
    <picture>
      <source
        type="image/webp"
        srcSet={data?.cover_image?.[0].url}
        sizes="(min-width: 2400px) 2400px"
      />
      <img
        src={data?.cover_image?.[0].url}
        width={2400}
        height={1500}
        className="el-image"
        alt=""
        loading="lazy"
      />
    </picture>
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

export default VoucherCard;