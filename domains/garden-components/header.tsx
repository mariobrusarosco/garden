import Link from "next/link";
import { IconFlower } from "@/domains/garden-components/icons/flower";
import { Navbar } from "@/domains/garden-components/navbar";
import { IconGithub } from "@/domains/garden-components/icons/github";

export const Header = () => {
  return (
    <header
      className="sticky top-0 backdrop-filter 
  backdrop-blur-md 
  bg-opacity-10 global-x-spacing flex justify-between py-4"
  >
    <div className="flex gap-2 items-center">
      <Link href="/">
        <IconFlower className="h-12 w-12 cursor-pointer hover:opacity-80 transition-opacity" />
      </Link>
      <Navbar />

    </div>

    <div className="flex gap-2 items-center font-sans font-thin">
        <IconGithub className="w-4 h-4 fill-wenge group-hover:fill-puce" />
        <p className="cursor-pointer text-wenge lowercase font-sans  group-hover:bg-puce/20">
          <a
            href="https://github.com/mariobrusarosco"
            rel="noopener noreferer"
            target="_blank"
          >
            Mario Brusarosco
          </a>
        </p>
      </div>
    </header>
  );
};
