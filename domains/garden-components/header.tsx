import Link from "next/link";
import { IconFlower } from "./icons/flower";

export const Header = () => {
  return (
    <header
      className="sticky top-0 shadow-lg backdrop-filter 
  backdrop-blur-md 
  bg-opacity-10 global-x-spacing flex justify-between py-4 lg:py-6"
    >
      <h1 className="text-puce-100 text-2xl font-sans font-light flex items-center justify-between lg:text-4xl">
        <Link href="/">Digital Garden</Link>
      </h1>

      <IconFlower className="h-8 w-8" />
    </header>
  );
};
