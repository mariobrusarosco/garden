"use client";

import { ReactElement, useState } from "react";
import { IconArrow } from "./icons/arrow";

type AccordionProps = {
  header: ReactElement;
  content: ReactElement;
  startWithVisibleContent?: boolean;
};

const Accordion = ({
  header,
  content,
  startWithVisibleContent,
}: AccordionProps) => {
  const [visibility, setVisibilty] = useState(startWithVisibleContent ?? false);
  const toggleVisibility = () => setVisibilty((prev) => !prev);

  return (
    <div className="h-fit rounded-lg mb-4 flex-1 lg:mb-0">
      <div onClick={toggleVisibility} className="flex gap-x-3">
        {header}

        <IconArrow className="stroke-wenge w-6 cursor-pointer" />
      </div>

      {visibility ? content : null}
    </div>
  );
};

export default Accordion;
