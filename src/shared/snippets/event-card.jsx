
import Link from "next/link";
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

const EventCard = ({data}) => {
  return (
<div className="tc-post-grid-default">
  <div className="item">
    <div className="img img-cover th-250 radius-2 overflow-hidden">
      <img src={data.cover_image ? data.cover_image[0]?.url : '/images/placeholder.svg'} alt="" />
    </div>
    <div className="content pt-30">
      <div className="date mb-20 fsz-14px">
      {data?.area && data?.area.length > 0 ? (
          <Link className="tag py-2 px-4 border-1 border brd-gray rounded-pill me-2" href={`/zone/${data?.area[0].slug}`}>
            {data?.area[0].title}
          </Link>
        ) : null}
      </div>
      <h2 className="title mb-20">
        <a href="page-single-post-creative.html">
          {data.title}
        </a>
      </h2>
      <div className="text color-666 fsz-16px">
        Yale historian Timothy Snyder said Russian <br /> President Vladimir
        Putin plans to starve <br /> some countries as part of his <br />{" "}
        efforts in Ukraine [...]
      </div>
    </div>
  </div>
</div>

            );
};

export default EventCard;