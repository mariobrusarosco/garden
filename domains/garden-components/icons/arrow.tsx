import { cn } from "@/domains/helper-and-utils/classnames";

const IconArrow = ({ className }: { className: string }) => {
  return (
    <div className={cn("icon-wrapper flex", className)}>
      <svg viewBox="0 0 251 251" fill="none">
        <rect
          x="2"
          y="2"
          width="247"
          height="247"
          rx="123.5"
          stroke="inherit"
          stroke-width="4"
        />
        <path
          d="M175.562 102.791L129.588 148.211L75.4414 102.791"
          stroke="inherit"
          stroke-width="6"
        />
      </svg>
    </div>
  );
};

export { IconArrow };
