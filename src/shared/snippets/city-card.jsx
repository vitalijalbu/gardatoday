import { data } from "@/assets/js/uikit";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const CityCard = ({data}) => {
  return (

      <Link href={`/hosts/${data.id}`}>
      <div className="card-wrapper card-space">

    <div className="card card-img no-after">
      <div className="img-responsive-wrapper">
        <div className="img-responsive">
          <figure className="img-wrapper">
            <source
              srcSet="https://gardatoday.it/web/uploads/static/IMG_5485.jpg"
              media="(min-width: 62.5em)"
            />
            <img
              srcSet="https://gardatoday.it/web/uploads/static/IMG_5485.jpg"
              alt=" Castel Goffredo"
            />
          </figure>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title underline">{data.title}</h5>
      </div>
    </div>
</div>

    </Link>
            )
}

export default CityCard;