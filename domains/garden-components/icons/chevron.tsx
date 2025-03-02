import { cn } from "@/domains/helper-and-utils/classnames";

const IconChevron = ({ className }: { className: string }) => {
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
          strokeWidth="6"
        />
        <path
          d="M116.796 80L80 121.364M171 121.364H80M80 121.364L116.796 171"
          stroke="inherit"
          strokeWidth="8"
        />
      </svg>
    </div>
  );
};

export { IconChevron };
