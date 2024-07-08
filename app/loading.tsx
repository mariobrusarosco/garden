import { IconLeaf } from "@/domains/garden-components/icons/leaf";

export default function LoadingScreen() {
  return (
    <main className="container global-spacing">
      <section className="heading text-wenge mt-4 mb-10">
        <div className="flex font-light justify-start items-center gap-x-4">
          <IconLeaf className="w-5" />
          <h2 className="text-5xl font-serif">Loading!</h2>
        </div>
      </section>
    </main>
  );
}
