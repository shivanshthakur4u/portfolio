import React from "react";
import { Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Service from "./Components/Service";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/service" component={Service} />
      </Switch>
      <Footer />
    </>
  );
};
export default App;
