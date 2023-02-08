
import Link from "next/link";
import React, { useState, useEffect } from "react";

const ArticleCard = ({data}) => {
  return (
<div className="card-wrapper">
  <a href="https://gardatoday.it/notizie/canevaworld-resort-ricerca-oltre-200-lavoratori-stagionali"></a>
  <div className="card card-img no-after">
    <a
      href="https://gardatoday.it/notizie/canevaworld-resort-ricerca-oltre-200-lavoratori-stagionali"
      className=""
      data-focus-mouse="false"
    >
      <div className="img-responsive-wrapper">
        <div className="img-responsive">
          <figure className="img-wrapper">
            <source
              srcSet="https://gardatoday.it/web/uploads/media/movieland-the-hollywood-park-portale.jpg"
              media="(min-width: 62.5em)"
            />
            <img
              srcSet="https://gardatoday.it/web/uploads/media/movieland-the-hollywood-park-portale.jpg"
              className="p-card__image"
              alt=" CanevaWorld Resort alla ricerca di oltre 200 lavoratori stagionali﻿ "
            />
          </figure>
        </div>
      </div>
    </a>
    <div className="card-body">
      <a href="https://gardatoday.it/notizie/canevaworld-resort-ricerca-oltre-200-lavoratori-stagionali"></a>
      <div className="category-top">
        <a href="https://gardatoday.it/notizie/canevaworld-resort-ricerca-oltre-200-lavoratori-stagionali"></a>
        <a className="category" href="https://gardatoday.it/comuni/lazise">
          Lazise
        </a>
        <span className="data">2 febbraio 2023</span>
      </div>
      <h5 className="card-title underline">
        <a href="https://gardatoday.it/notizie/canevaworld-resort-ricerca-oltre-200-lavoratori-stagionali">
          CanevaWorld Resort alla ricerca di oltre 200 lavoratori
          stagionali﻿&nbsp;
        </a>
      </h5>
      <p className="card-text d-md-block d-none">
        Aperte numerose posizioni presso i parchi divertimento Movieland e
        Caneva Aquapark, dagli artisti agli addetti a ristorazione, attrazioni e
        non solo
      </p>
    </div>
  </div>
</div>

            );
};

export default ArticleCard;