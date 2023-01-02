import React, { useState, useEffect } from "react";
import SectionBlog from "@/shared/sections/section-full";
import SectionGrid from "@/shared/sections/section-grid";
import Section1 from "@/shared/sections/section-1";
import Section2 from "@/shared/sections/section-2";



const Home = () => {
  return (
    <div className="page">

  <Section2/>
  <Section1/>
  <SectionGrid/>
  <SectionBlog/>
      
    </div>
  );
};

export default Home;
