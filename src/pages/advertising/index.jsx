import React, { useState, useEffect } from "react";


const Index = () => {
   
  return (
    
   <div className="page">
   
   <div className="px-4 pt-5 my-5 text-center">
  <h1 className="display-4 fw-bold">Pubblicità su GardaToday</h1>
  <div className="col-lg-6 mx-auto">
    <p className="lead mb-4">
      Quickly design and customize responsive mobile-first sites with Bootstrap,
      the world’s most popular front-end open source toolkit, featuring Sass
      variables and mixins, responsive grid system, extensive prebuilt
      components, and powerful JavaScript plugins.
    </p>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
      <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">
        Scarica MediaKit
      </button>
      <button type="button" className="btn btn-outline-secondary btn-lg px-4">
        Contattaci
      </button>
    </div>
  </div>
  <div className="overflow-hidden" style={{ maxHeight: "30vh" }}>
    <div className="container px-5">
      <img
        src="https://getbootstrap.com/docs/5.3/examples/heroes/bootstrap-docs.png"
        className="img-fluid border rounded-3 shadow-lg mb-4"
        alt="Example image"
        width={700}
        height={500}
        loading="lazy"
      />
    </div>
  </div>
</div>

    </div>
    
  );a
};

export default Index;
