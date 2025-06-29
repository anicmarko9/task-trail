import React from "react";

import { HomepageLinks } from "./elements/Static";

const Footer = (): React.JSX.Element => {
  return (
    <footer className="w-full h-12">
      <nav
        role="navigation"
        aria-label="Footer navigation"
        className="flex items-center w-full h-full px-4 bg-nav text-nav"
      >
        <HomepageLinks variant={"footer"} />
      </nav>
    </footer>
  );
};

export default Footer;
