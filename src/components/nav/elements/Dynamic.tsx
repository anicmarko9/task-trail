"use client";

import React from "react";
import Link from "next/link";

import Logo from "@Images/logo/logo-header.svg";
import { TitleText } from "./Static";

export const HomepageIcon = ({ id }: { id: string }): React.JSX.Element => (
  <Link
    href="/"
    aria-label="Homepage"
    className="p-1 cursor-pointer rounded-lg group flex items-center space-x-2"
  >
    <Logo
      aria-hidden="true"
      focusable="false"
      className="text-nav group-hover:text-accent colorTransition"
    />
    <span className="hidden md:inline-block">
      <TitleText id={id} />
    </span>
  </Link>
);
