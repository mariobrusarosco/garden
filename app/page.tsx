import { IconFlower } from "@/domains/garden-components/icons/flower";
import { IconGithub } from "@/domains/garden-components/icons/github";

export default function Home() {
  return (
    <main className="container global-spacing">
      <section className="intro text-wenge mb-8">
        <div className="flex font-light justify-start items-center gap-x-3">
          <IconFlower className="min-w-6" />
          <h2 className="text-5xl font-serif my-10 ">The backyard</h2>
        </div>
        <p className="text-2xl font-sans font-thin mb-4">
          This is sort of a collection of my notes regarding{" "}
          <strong>Software Development</strong>.
          {/* It&apos;s
        a mix of code snippets, tutorials, POC&apos;, and
        &quot;copy-and-paste&quot; code. */}
        </p>

        <p className="text-2xl font-sans font-thin">
          All based on a <b>Digital Garden</b> concept because I think it&apos;s
          a nice way to share things I&apos;m learning and struggling.
          Definetaly not a way to organize my Notion. Everything is fine over
          there.
        </p>
        {/* 
      <HomeParagraph>
        I guess this will achieve the same as a blog would. It has a diffent
        name, but let&apos;s face it: It&apos;s just me trying to organize
        everything I have on Notion, but in a pleasent way!
      </HomeParagraph> */}
      </section>

      <section className="navigation-area">
        <p className="font-sans font-semibold text-2xl mb-2">Browse by</p>
        <div className="flex items-center gap-4 text-puce-500 ">
          <p className="rounded-lg px-6 py-4 cursor-pointer lowercase  font-sans font-normal text-xl hover:text-puce-100">
            <a href="/topics">Topics</a>
          </p>

          <p className="rounded-lg px-6 py-4 cursor-pointer lowercase  font-sans font-normal text-xl hover:text-puce-100">
            <a href="/series">series</a>
          </p>
        </div>
      </section>

      <section className="self-promotion-area mt-20">
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
    </main>
  );
}
