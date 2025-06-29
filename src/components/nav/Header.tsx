"use client";

import React, { useState } from "react";
import Link from "next/link";

import Hamburger from "@Images/icons/hamburger-icon.svg";
import { SideNavLink, sideNavLinks } from "@Types/nav";
import { TitleText, HomepageLinks } from "./elements/Static";
import { HomepageIcon } from "./elements/Dynamic";

interface HamburgerProps {
  id: string;
  onClick?: () => void;
  ariaLabel?: string;
  color?: string;
  ariaExpanded?: boolean;
  ariaControls?: string;
}

const HamburgerIcon = ({
  id,
  onClick,
  ariaLabel = "Toggle navigation menu",
  color = "nav",
  ariaExpanded,
  ariaControls,
}: HamburgerProps): React.JSX.Element => (
  <button
    id={id}
    type="button"
    aria-label={ariaLabel}
    aria-expanded={ariaExpanded}
    aria-controls={ariaControls}
    onClick={onClick}
    className={`p-2 cursor-pointer rounded-lg group ${id === "homepage_closed_menu" ? "md:hidden" : "inline-block"}`}
  >
    <Hamburger
      aria-hidden="true"
      focusable="false"
      className={`text-${color} group-hover:text-accent colorTransition`}
    />
  </button>
);

const Header = (): React.JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const openMenu = (): void => {
    setIsMenuOpen(true);
    setIsClosing(false);
  };

  const closeMenu = (): void => {
    setIsClosing(true);

    setTimeout((): void => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const toggleMenu = (): void => {
    if (isMenuOpen && !isClosing) closeMenu();
    else if (!isMenuOpen && !isClosing) openMenu();
    return;
  };

  const shouldShowMenu: boolean = isMenuOpen || isClosing;

  return (
    <>
      <header className="w-full h-12">
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="flex items-center w-full h-full px-4 justify-between bg-nav text-nav"
        >
          <HomepageIcon id={"homepage-title-text-left"} />
          <TitleText id={"homepage-title-text-center"} />
          <HomepageLinks variant={"header"} />
          <HamburgerIcon
            id={"homepage_closed_menu"}
            onClick={toggleMenu}
            ariaExpanded={shouldShowMenu}
            ariaControls="homepage-side-menu"
          />
        </nav>
      </header>

      {shouldShowMenu && (
        <div className={`fixed inset-0 z-50 flex justify-end`}>
          <div
            className={`w-full bg-black/50 fixed inset-0 z-50 ${isClosing ? "animate-fade-out" : "animate-fade-in"}`}
            onClick={toggleMenu}
            aria-hidden="true"
          />

          <aside
            id="homepage-side-menu"
            className={`w-2/3 xs:w-1/2 sm:w-2/5 md:w-1/3 lg:w-1/4 xl:w-1/5 xxl:w-1/6 h-full flex rounded-l-lg flex-col z-60 bg-secondary text-primary border-l-2 border-primary border-solid ${isClosing ? "animate-slide-out-right" : "animate-slide-in-right"}`}
            role="navigation"
            aria-label="Sidebar menu"
          >
            <ul className="flex items-center justify-between border-b-2 border-primary border-solid pt-1 pb-[2px] px-4">
              <li className="p-2 colorTransition hover:text-accent">
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <HamburgerIcon
                  id={"homepage_opened_menu"}
                  onClick={toggleMenu}
                  ariaLabel="Close menu"
                  color="primary"
                  ariaExpanded={shouldShowMenu}
                  ariaControls="homepage-side-menu"
                />
              </li>
            </ul>

            <ul className="flex flex-col space-y-4 p-4">
              {sideNavLinks.map(
                (link: SideNavLink, index: number): React.JSX.Element => (
                  <li
                    className="px-2 colorTransition hover:underline hover:text-accent"
                    key={index}
                  >
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ),
              )}
            </ul>
          </aside>
        </div>
      )}
    </>
  );
};

export default Header;
