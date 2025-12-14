"use client";
import React from "react";
import Hero from "./hero/Hero";
import WhoAre from "./who-are-we/WhoAre";
import Values from "./values/Values";
import Events from "./events/Events";
import WeProjects from "./we-projects/WeProjects";
import Blog from "./blog/Blog";
import Partners from "./partners/Partners";
import Contacts from "./contacts/Contacts";

import "aos/dist/aos.css";
import Aos from "aos";

const HomeComponents = () => {
  React.useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Hero />
      <WhoAre />
      <Values />
      <WeProjects />
      <Events />
      <Blog />
      {/* <Partners /> */}
      <Contacts />
    </>
  );
};

export default HomeComponents;
