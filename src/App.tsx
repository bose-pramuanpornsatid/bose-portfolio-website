import React from "react";
import { HashRouter as BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Scrollspy
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Scrollspy />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="tech"><Tech /></section>
        <section id="contact"><Contact /></section>
      </div>
    </BrowserRouter>
  );
};

export default App;
