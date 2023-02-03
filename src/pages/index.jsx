import React, { useState, useEffect } from "react";
/*import SectionFull from "@/shared/sections/section-full";
import SectionGrid from "@/shared/sections/section-grid";
import SectionGridLg from "@/shared/sections/section-grid-lg";
import Section1 from "@/shared/sections/section-1";
import SmallGrid from "@/shared/sections/small-grid";
import FocusVideos from "@/shared/sections/focus-videos";*/
import FocusFeatured from "@/shared/sections/focus-featured";
import FastHeader from "@/shared/sections/fast-header";
import FocusHalf from "@/shared/sections/focus-half";
import MastHead from "@/shared/sections/masthead";
import Areas from "@/shared/sections/areas";
import Topics from "@/shared/sections/topics";
import Newsletter from "@/shared/sections/newsletter";
/*
import Topics from "@/shared/sections/topics";
import Masthead from "@/shared/sections/masthead";
import MastheadHeroLg from "@/shared/sections/masthead-hero-lg";*/
import { Button } from 'reactstrap';


const Home = () => {
  return (
    <div className="page">
      <div className="page-content">
      <FastHeader/>
      <MastHead/>
      <FocusFeatured title="In evidenza" limit={8} topics={[82]}/>
      <FocusHalf title="Attualità e Cronaca" limit={7} topics={[25, 29]}/>
      <FocusFeatured title="In evidenza" limit={8} topics={[25, 29]}/>
      <Areas/>
      <Newsletter/>
      <Topics/>
    </div>
    </div>
  );
};

export default Home;
