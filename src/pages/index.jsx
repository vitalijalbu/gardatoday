import React, { useState, useEffect } from "react";
import SectionFull from "@/shared/sections/section-full";
import SectionGrid from "@/shared/sections/section-grid";
import SectionGridLg from "@/shared/sections/section-grid-lg";
import Section1 from "@/shared/sections/section-1";
import SmallGrid from "@/shared/sections/small-grid";
import Videos from "@/shared/sections/videos";

import Topics from "@/shared/sections/topics";
import Masthead from "@/shared/sections/masthead";
import MastheadHeroLg from "@/shared/sections/masthead-hero-lg";



const Home = () => {
  return (
    <div className="page">
      <SmallGrid/>
<Masthead/>
<SectionGrid/>
  <Section1/>
  <SectionGrid/>
  <SectionGridLg/>
  <Videos/>
  <SectionFull/>
  <Topics/>

  <MastheadHeroLg/>
  
      
    </div>
  );
};

export default Home;
