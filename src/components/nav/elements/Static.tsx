import React from "react";
import Link from "next/link";

import { SideNavLink, sideNavLinks } from "@Types/nav";

export const TitleText = ({ id }: { id: string }): React.JSX.Element => (
  <h1
    id={id}
    className={`text-center group ${id === "homepage-title-text-center" ? "md:hidden" : "inline-block"}`}
    aria-label="TaskTrail branding and slogan"
  >
    <span className="text-xl tracking-wider font-bold relative block mb-[-6px] colorTransition group-hover:text-accent">
      TaskTrail
    </span>
    <span className="block text-[8px] uppercase font-light text-accent tracking-wider mt-[-4px] colorTransition group-hover:text-nav">
      Task it. Trail it. Crush it!
    </span>
  </h1>
);

export const HomepageLinks = ({
  variant,
}: {
  variant: string;
}): React.JSX.Element => (
  <ul
    className={`${
      variant === "header"
        ? "hidden md:flex items-center text-sm font-light text-center space-x-8"
        : "flex w-full items-center justify-between md:justify-evenly text-xs sm:text-sm font-light text-center space-x-4"
    }`}
  >
    {sideNavLinks.map(
      (link: SideNavLink, index: number): React.JSX.Element => (
        <li
          key={index}
          className="colorTransition hover:underline hover:text-accent"
        >
          <Link href={link.href}>{link.name}</Link>
        </li>
      ),
    )}
    <li key={"last-index"} className="colorTransition hover:text-accent">
      <Link href="/dashboard">Dashboard</Link>
    </li>
  </ul>
);
