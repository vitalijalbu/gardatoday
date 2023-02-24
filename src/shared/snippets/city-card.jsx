import Link from "next/link";
import React, { useState, useEffect } from "react";

const CityCard = ({ data }) => {
  return (
    <Link href={`/zone/${data.slug}`} className="story-item">
  <div className="img img-cover">
    <img src={
                    data.cover_image ? data.cover_image[0]?.url :
                    "/images/placeholder.svg"
                  } alt="" />
  </div>
  <div className="title fsz-14px color-000 mt-10">{data.title}</div>
    </Link>
  );
};

export default CityCard;
