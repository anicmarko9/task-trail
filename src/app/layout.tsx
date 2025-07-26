import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import "./globals.css";

export const metadata: Metadata = {
  title: "TaskTrail",
  description: "Streamline Your Workflow, Accelerate Your Success",
  applicationName: "TaskTrail",
  creator: "Marko Anic",
  generator: "Next.js",
  publisher: "Vercel",
  authors: [{ name: "Marko Anic", url: "https://tasktrail.com" }],
  keywords: [
    "task management",
    "productivity",
    "workflow",
    "project management",
    "team collaboration",
    "task tracking",
    "to-do list",
    "goal setting",
    "time management",
  ],
  referrer: "origin-when-cross-origin",
  robots: { follow: true, index: true },
};

const RobotoFlexFont = Roboto_Flex({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={RobotoFlexFont.className}>
        <ToastContainer position="top-right" autoClose={3000} />
        {children}
      </body>
    </html>
  );
}
