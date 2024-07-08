import { IconFlower } from "../domains/garden-components/icons/flower";
import { IconGithub } from "../domains/garden-components/icons/github";

export default function Home() {
  return (
    <div className="container global-x-spacing lg:grid lg:gap-2 lg:grid-rows-[120px]">
      <section
        data-ui="intro"
        className="text-wenge mt-6 lg:max-w-[500px] lg:col-start-1 lg:col-end-2"
      >
        <div className="flex font-light justify-start items-center gap-x-3 mb-10">
          <IconFlower className="min-w-6" />
          <h2 className="text-5xl font-serif">The backyard</h2>
        </div>
        <p className="text-2xl font-sans font-thin mb-4">
          This is sort of a collection of my notes regarding{" "}
          <strong>Software Development</strong>.
        </p>

        <p className="text-2xl font-sans font-thin mb-4">
          All based on a <b>Digital Garden</b> concept because I think it&apos;s
          a nice way to share things I&apos;m learning and struggling.
          Definitely not a way to organize my Notion.
        </p>

        <p className="text-2xl font-sans font-thin">
          Nope. Everything is fine over there.
        </p>
      </section>

      <section
        data-ui="self-promotion-area"
        className="mt-14 lg:col-start-2 lg:col-end-3 lg:row-start-1  lg:mt-0"
      >
        <div className="flex items-center gap-2 cursor-pointer group">
          <IconGithub className="w-8 h-full fill-wenge group-hover:fill-puce" />
          <p className="rounded-lg px-6 py-4 cursor-pointer text-wenge lowercase font-sans text-xl group-hover:bg-puce/20">
            <a
              href="https://github.com/mariobrusarosco"
              rel="noopener noreferer"
              target="_blank"
            >
              Mario Brusarosco
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
