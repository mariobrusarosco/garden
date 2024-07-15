import { IconFlower } from "@/domains/garden-components/icons/flower";
import "@/app/animations.css";

export default function LoadingScreen() {
  return (
    <section
      data-ui="topic-loading"
      className="global-spacing h-full grid place-content-center"
    >
      <IconFlower className="w-40 loading-flower" />
    </section>
  );
}
