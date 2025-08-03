"use client";

import React from "react";

import Management from "@Images/illustrations/management.svg";
import Plan from "@Images/illustrations/plan.svg";
import Roadmap from "@Images/illustrations/roadmap.svg";
import { IllustrationItem, illustrationItems } from "@Types/illustration";

const HomepageIllustration = ({ id }: { id: string }): React.JSX.Element =>
  id === "management" ? (
    <Management
      id={`illustration-${id}`}
      aria-hidden="true"
      focusable="false"
      className="landingIllustration colorTransition"
    />
  ) : id === "plan" ? (
    <Plan
      id={`illustration-${id}`}
      aria-hidden="true"
      focusable="false"
      className="landingIllustration colorTransition"
    />
  ) : (
    <Roadmap
      id={`illustration-${id}`}
      aria-hidden="true"
      focusable="false"
      className="landingIllustration colorTransition"
    />
  );

const HomepageIllustrationList = (): React.JSX.Element => {
  return (
    <ul className="homepageIllustrationList">
      {illustrationItems.map(
        ({ id, text }: IllustrationItem, index: number): React.JSX.Element => (
          <li key={index} className="homepageIllustration">
            <HomepageIllustration id={id} />
            <strong>{text}</strong>
          </li>
        ),
      )}
    </ul>
  );
};

const WhyChoose = (): React.JSX.Element => (
  <section
    className="landingSection"
    aria-labelledby="landing-features-heading"
  >
    <h2 id="landing-features-heading" className="landingHeader">
      Why Choose <span className="text-accent">TaskTrail</span>?
    </h2>

    <HomepageIllustrationList />
  </section>
);

export default WhyChoose;
