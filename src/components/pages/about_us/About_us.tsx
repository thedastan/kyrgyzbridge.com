import React from "react";
import About_hero from "./about_hero/About_hero";
import About_card from "./about_cards/About_card";
// import Partners from "../home/partners/Partners";
import Contacts from "../home/contacts/Contacts";

const About_us = () => {
  return (
    <div>
      <About_hero />
      <About_card />
      {/* <Partners /> */}
      <Contacts />
    </div>
  );
};

export default About_us;
