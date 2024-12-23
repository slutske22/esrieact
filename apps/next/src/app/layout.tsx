import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retail Intelligence Hub",
  description: "Retail Intelligence Hub by Ascend Analytics",
};

/**
 * Root Layout for entire app. Renders the Header component on every page.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="grid h-full w-full grid-rows-[64px_1fr]">
          <div className="z-[8] shadow-md">
            <header>Header Here</header>
          </div>
          <div className="relative flex">
            <div id="sidebar-container" />
            <div className="flex-1">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
