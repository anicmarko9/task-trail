"use client";

import React from "react";

import SectionHero from "./elements/Static";
import SectionContent from "./elements/Dynamic";

const Landing = (): React.JSX.Element => {
  return (
    <main role="main" className="landingMain">
      <SectionHero />
      <SectionContent />
    </main>
  );
};

export default Landing;
