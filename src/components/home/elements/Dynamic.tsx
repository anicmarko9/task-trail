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
    <ul className="w-full flex items-start justify-between font-normal [font-size:clamp(10px,2.2vw,18px)] [line-height:clamp(14px,2.6vw,24px)] [gap:clamp(16px,4vw,64px)] tracking-wide">
      {illustrationItems.map(
        ({ id, text }: IllustrationItem, index: number): React.JSX.Element => (
          <li
            key={index}
            className="flex flex-col flex-1 items-center justify-center [gap:clamp(12px,3vw,24px)]"
          >
            <HomepageIllustration id={id} />
            <strong>{text}</strong>
          </li>
        ),
      )}
    </ul>
  );
};

const SectionContent = (): React.JSX.Element => (
  <section
    className="landingSection"
    aria-labelledby="landing-features-heading"
  >
    <h2 id="landing-features-heading" className="landingHeader">
      Why choose <span className="text-accent">TaskTrail</span>?
    </h2>

    <HomepageIllustrationList />
  </section>
);

export default SectionContent;
