import "@/app/animations.css";
import { IconFlower } from "@/domains/garden-components/icons/flower";

export default function LoadingSeriesScreen() {
  return (
    <section
      data-ui="loading-screen-series"
      className="global-spacing h-full grid place-content-center"
    >
      <IconFlower className="w-40 loading-flower" />
    </section>
  );
}
