import React, { useState, useEffect } from "react";
import SectionBlog from "@/shared/sections/section-full";
import SectionGrid from "@/shared/sections/section-grid";
import Section1 from "@/shared/sections/section-1";
import Section2 from "@/shared/sections/section-2";



const Home = () => {
  return (
    <div className="page">

      <section className="hero-wrapper dark overlay" style={{borderRadius: '12px'}}>
        {/* - img*/}
        <div className="img-responsive-wrapper">
          <div className="img-responsive">
            <div className="img-wrapper">
              <img
                src="https://images.unsplash.com/photo-1585418694458-dc80a5c20294?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80"
                title="titolo immagine"
                alt="descrizione immagine"
              />
            </div>
          </div>
        </div>
        </section>
      
    </div>
  );
};

export default Home;
