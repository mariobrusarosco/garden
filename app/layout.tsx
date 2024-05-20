import type { Metadata } from "next";
import { Cormorant, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
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
      <body className={`${cormorant.variable} ${openSans.variable} bg-primary`}>
        <header className="container global-spacing sticky top-0 shadow-md bg-primary">
          <h1>
            <Link href="/">Digital Garden</Link>
          </h1>
        </header>
        {children}
      </body>
    </html>
  );
}
