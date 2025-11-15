import type { Metadata } from "next";
import { Bitter, Raleway } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { Header } from "@/domains/garden-components/header";
import { Navbar } from "@/domains/garden-components/navbar";
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
        className={`${bitter.variable} ${raleway.variable} bg-ghost-white grid grid-rows-[70px_1fr]`}
      >
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "u3dxg98gv4");
            `,
          }}
        />
        <Header />

        <main data-ui="main-container">{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
