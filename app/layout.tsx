import type { Metadata } from "next";
import { Bitter, Raleway } from "next/font/google";
import "./globals.css";

import { Header } from "@/domains/garden-components/header";
import { Navbar } from "@/domains/garden-components/navbar";
import { Suspense } from "react";
import LoadingScreen from "./loading";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const bitter = Bitter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-bitter",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});


export const metadata: Metadata = {
  title: "Digital Garden - Mario Brusarosco",
  description: "Digital Garden - Mario Brusarosco",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bitter.variable} ${raleway.variable} bg-neutral-white grid grid-rows-[70px_70px_1fr]`}
      >
        <Header />

        <main data-ui="main-container">
          <Suspense fallback={<LoadingScreen />}>{children}</Suspense>
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
