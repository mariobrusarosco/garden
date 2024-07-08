import { IconLeaf } from "@/domains/garden-components/icons/leaf";

export default function NotFoundScreen() {
  return (
    <main className="container global-spacing">
      <section className="heading text-wenge mt-4 mb-10">
        <div className="flex font-light justify-start items-center gap-x-4">
          <IconLeaf className="w-5" />
          <h2 className="text-5xl font-serif">Ops!</h2>
        </div>
        <p className="text-3xl mt-10 font-light font-sans">
          Page Not Found - 404!
        </p>
      </section>
    </main>
  );
}
