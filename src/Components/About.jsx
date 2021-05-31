import React from "react";

import web from "../img/img-7.jpg";
import Pages from "../Components/Pages";
const About = () => {
  return (
    <>
      <Pages
        head="Welcome to About Page"
        width="300"
        height="250"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};
export default About;
