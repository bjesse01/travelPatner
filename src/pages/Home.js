import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Contacts from "../components/Contacts";

import "./Home.css";
import Testimonials from "../components/Testimonials";
import Features from "../components/Features";
export const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Services />
      <Contacts />
      <Testimonials />
      <Features />
    </div>
  );
};
