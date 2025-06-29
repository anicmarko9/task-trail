export interface SideNavLink {
  name: string;
  href: string;
}

export const sideNavLinks: SideNavLink[] = [
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/legal/privacy-policy" },
  { name: "Terms of Service", href: "/legal/terms-of-service" },
];
