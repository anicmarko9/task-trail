"use client";

import React from "react";

import Hero from "./elements/Hero";
import WhyChoose from "./elements/WhyChoose";
import Testimonials from "./elements/Testimonials";

const Landing = (): React.JSX.Element => {
  return (
    <main role="main" className="landingMain">
      <Hero />
      <WhyChoose />
      <Testimonials />
    </main>
  );
};

export default Landing;
