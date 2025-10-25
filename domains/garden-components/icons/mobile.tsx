import { cn } from "@/domains/helper-and-utils/classnames";

const IconMobile = ({ className }: { className?: string }) => {
  return (
    <div className={cn("icon-wrapper flex", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0h3m-3 0v1.125c0 .621.504 1.125 1.125 1.125h.75c.621 0 1.125-.504 1.125-1.125V1.5m-3 0h3m-6 0h.008v.008H7.5V1.5zm9 0h.008v.008h-.008V1.5z"
        />
      </svg>
    </div>
  );
};

export { IconMobile };
