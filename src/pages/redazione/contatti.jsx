import React, { useState, useEffect } from "react";
import Link from "next/link";

const Contatti = () => {
   
  return (
    
   <div className="page">
   
   <div className="container px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="https://www.publimax.eu/wp-content/uploads/office-publimax.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3">Contatti</h1>
        <p className="lead">Inform your opinion and make your next move with expert insight, illuminating analysis and valuable, practical advice. Available anytime on our website and app.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <Link href="mailto:info@gardatoday.it">info@gardatoday.it</Link>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Contatti;
