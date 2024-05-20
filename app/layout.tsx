import type { Metadata } from "next";
import { Bitter, Cormorant, Josefin_Sans, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { IconFlower } from "@/domains/garden-components/icons/flower";

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
        className={`${bitter.variable} ${josefinSans.variable} bg-misty_rose-700`}
      >
        <header className="container global-spacing sticky top-0 shadow-xl bg-puce">
          <h1 className="text-misty_rose text-2xl font-sans font-light flex items-center justify-between">
            <Link href="/">Digital Garden</Link>
          </h1>
        </header>

        {children}
      </body>
    </html>
  );
}
