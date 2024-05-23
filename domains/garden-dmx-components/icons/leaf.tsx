import { cn } from "@/domains/helper-and-utils/classnames";

const IconLeaf = ({ className }: { className: string }) => {
  return (
    <div className={cn("icon-wrapper flex", className)}>
      <svg viewBox="0 0 119 83" fill="none">
        <path
          d="M39.0392 57.0771C63.907 77.9525 118.124 82.7263 118.124 82.7263C118.124 82.7263 114.384 42.6494 81.2535 20.2064C48.1227 -2.23665 -1.4214 -0.0389468 1.6341 0.435133C-3.49463 -4.20167 11.7934 34.2055 39.0392 57.0771Z"
          fill="#604D53"
        />
      </svg>
    </div>
  );
};

export { IconLeaf };
