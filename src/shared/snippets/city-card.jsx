import Link from "next/link";
import React, { useState, useEffect } from "react";

const CityCard = ({ data }) => {
  return (
    <Link href={`/zone/${data.slug}`}>
      <div className="card-wrapper card-space">
        <div className="card card-img no-after">
          <div className="img-responsive-wrapper">
            <div className="img-responsive">
              <figure className="img-wrapper">
                <source
                  srcSet={
                    data.cover_image ? data.cover_image[0].url :
                    "/images/placeholder.svg"
                  }
                  media="(min-width: 62.5em)"
                />
                <img
                  srcSet={
                    data.cover_image ? data.cover_image[0].url :
                    "/images/placeholder.svg"
                  }
                  alt={data.title}
                />
              </figure>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title serif underline">{data.title}</h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CityCard;
