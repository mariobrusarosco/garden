import { cn } from "@/domains/helper-and-utils/classnames";

const IconFlower = ({ className }: { className: string }) => {
  return (
    <div className={cn("icon-wrapper flex", className)}>
      <svg viewBox="0 0 291 550" fill="none">
        <circle
          cx="146.5"
          cy="65.5"
          r="65.5"
          fill="#CF6689"
          className="petal"
        />
        <circle
          cx="219.5"
          cy="102.5"
          r="65.5"
          fill="#CF6689"
          className="petal"
        />

        <circle
          cx="225.5"
          cy="187.5"
          r="65.5"
          fill="#CF6689"
          className="petal"
        />

        <circle
          cx="137.5"
          cy="221.5"
          r="65.5"
          fill="#CF6689"
          className="petal"
        />
        <circle
          cx="65.5"
          cy="184.5"
          r="65.5"
          fill="#CF6689"
          className="petal"
        />
        <circle cx="68.5" cy="98.5" r="65.5" fill="#CF6689" className="petal" />

        <circle
          className="core"
          cx="145.514"
          cy="152.284"
          r="40.0769"
          fill="#604D53"
        />
        <path
          d="M120.207 409.276C122.069 360.909 135.168 287.443 135.168 287.443L142.652 283.168C135.974 333.251 128.756 363.481 127.153 414.245C125.55 465.009 133.565 549.813 133.565 549.813H128.224C128.224 549.813 118.098 464.025 120.207 409.276Z"
          fill="#604D53"
        />
        <path
          d="M41.0372 409.284C65.9051 430.16 120.122 434.934 120.122 434.934C120.122 434.934 116.382 394.857 83.2515 372.414C50.1208 349.971 0.576647 352.168 3.63215 352.642C-1.49658 348.006 13.7914 386.413 41.0372 409.284Z"
          fill="#604D53"
          className="leaf"
        />
      </svg>
    </div>
  );
};

export { IconFlower };
