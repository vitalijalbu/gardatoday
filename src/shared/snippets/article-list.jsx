import { data } from "@/assets/js/uikit";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const ArticleList = ({data}) => {
  return (<li className="media story-item">
  <div className="media-body">
    <div className="story-item__body rvt-grow-1">
      <div className="category-top">
        <a className="category" href="https://gardatoday.it/sezioni/cronaca">
          Cronaca
        </a>
        <span className="data">02/02/2023</span>
      </div>
      <a href="https://gardatoday.it/notizie/montichiari-pazienti-senza-medico-base">
        <h5 className="card-title big-heading underline text-serif mb-3">
          Montichiari: 3mila pazienti restano senza medico di base
        </h5>
        <p className="card-text text-muted d-md-block d-none">
          Il pensionamento contemporaneo di due dottori lascia senza medico
          molte persone, cui è stata rifiutata la riassegnazione per un errore
          informatico.
        </p>
      </a>
    </div>
  </div>
  <div className="story-media__image align-self-start ml-3 media-thumb">
    <a href="https://gardatoday.it/notizie/montichiari-pazienti-senza-medico-base">
      <picture>
        <source
          srcSet="https://gardatoday.it/web/uploads/media/medico-base.png"
          media="(min-width: 62.5em)"
        />
        <img
          srcSet="https://gardatoday.it/web/uploads/media/medico-base.png"
          alt="Montichiari: 3mila pazienti restano senza medico di base"
        />
      </picture>
    </a>
  </div>
</li>

            );
};

export default ArticleList;