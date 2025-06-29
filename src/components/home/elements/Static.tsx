import React from "react";

const SectionHero = (): React.JSX.Element => (
  <section className="landingSection" aria-labelledby="landing-main-heading">
    <h1 id="landing-main-heading" className="landingHeader">
      Streamline Your Workflow, Accelerate Your Success
    </h1>

    <p className="landingParagraph">
      At <span className="font-bold text-accent">TaskTrail</span>, we simplify
      the way teams manage their projects. Whether you are tracking issues,
      planning sprints, or visualizing your product roadmap, our intuitive
      platform keeps your tasks organized and on track.
    </p>

    <button className="buttonStyle colorTransition">Get Started</button>
  </section>
);

export default SectionHero;
