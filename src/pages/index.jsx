import React, { useState, useEffect } from "react";
import SectionBlog from "@/shared/sections/section-full";
import SectionGrid from "@/shared/sections/section-grid";
import Section1 from "@/shared/sections/section-1";
import SmallGrid from "@/shared/sections/small-grid";
import Videos from "@/shared/sections/videos";
import Stories from "@/shared/sections/stories";
import Topics from "@/shared/sections/topics";
import Demo from "@/shared/sections/demo";
import Demo1 from "@/shared/sections/demo-1";



const Home = () => {
  return (
    <div className="page">
      <SmallGrid/>
<Demo1/>
  
  <Section1/>
  <SectionGrid/>
  <Videos/>
  <SectionBlog/>
  <hr/>
  <Topics/>
  <Stories/>
  <Demo/>
  
      
    </div>
  );
};

export default Home;
