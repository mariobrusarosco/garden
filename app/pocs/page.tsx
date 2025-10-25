import { IconLeaf } from "@/domains/garden-components/icons/leaf";

export default function PocsScreen() {
  return (
    <main data-ui="screen-pocs" className="global-spacing h-full">
      <section className="heading text-dark-pink mt-4 mb-10">
        <div className="flex justify-start items-center gap-x-4">
          <IconLeaf className="w-5" />
          <h2 className="text-7xl font-serif">Pocs</h2>
        </div>  
        <p className="text-3xl mt-10 font-light font-sans">Coming soon!</p>
      </section>
    </main>
  );
}
