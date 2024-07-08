"use client";

import { useRouter } from "next/navigation";
import { IconChevron } from "./icons/chevron";

const GoBack = ({ label }: { label?: string }) => {
  const { back } = useRouter();
  const handleGoBack = () => back();

  return (
    <div
      onClick={handleGoBack}
      role="button"
      className="flex gap-x-2 items-center justify-center"
    >
      {label ? <span className="uppercase font-sans">{label}</span> : null}
      <IconChevron className="w-8 md:w-10 stroke-wenge" />
    </div>
  );
};

export { GoBack };
