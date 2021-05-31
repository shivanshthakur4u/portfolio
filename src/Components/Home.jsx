import React from "react";
import { NavLink } from "react-router-dom";
import web from "../img/img-1.jpg";
import Pages from "../Components/Pages";
const Home = () => {
  return (
    <>
      <Pages
        head="Grow your business with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};
export default Home;
