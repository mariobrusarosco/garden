import type { Metadata } from "next";
import { Bitter, Josefin_Sans } from "next/font/google";
import "./globals.css";

import { Header } from "@/domains/garden-components/header";
import { Navbar } from "@/domains/garden-components/navbar";
import { Suspense } from "react";
import LoadingScreen from "./loading";

const bitter = Bitter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-bitter",
});

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-josefin-sans",
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
        className={`${bitter.variable} ${josefinSans.variable} bg-misty_rose-800 grid grid-rows-[70px_70px_1fr]`}
      >
        <Header />
        <Navbar />
        <main className="main-container">
          <Suspense fallback={<LoadingScreen />}>{children}</Suspense>
        </main>
      </body>
    </html>
  );
}
