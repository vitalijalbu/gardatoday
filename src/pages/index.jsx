import React, { useState, useEffect } from "react";
/*import SectionFull from "@/shared/sections/section-full";
import SectionGrid from "@/shared/sections/section-grid";
import SectionGridLg from "@/shared/sections/section-grid-lg";
import Section1 from "@/shared/sections/section-1";
import SmallGrid from "@/shared/sections/small-grid";
import SmallGrid from "@/shared/sections/small-grid";*/
import Stories from "@/shared/sections/stories";
import FocusFeatured from "@/shared/sections/focus-featured";
import FastHeader from "@/shared/sections/fast-header";
import FocusHalf from "@/shared/sections/focus-half";
import MastHead from "@/shared/sections/masthead";
import Areas from "@/shared/sections/areas";
import Topics from "@/shared/sections/topics";
import TopicsGrid from "@/shared/sections/topics-grid";
import Newsletter from "@/shared/sections/newsletter";
import UpcomingEvents from "@/shared/sections/upcoming-events";

/*
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
      <TopicsGrid/>
      <Stories/>
      <UpcomingEvents/>
      <Newsletter/>
      <Topics/>
    </div>
    </div>
  );
};

export default Home;
