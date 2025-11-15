"use client";

import { GoBack } from "@/domains/garden-components/go-back";
import { IconLeaf } from "./icons/leaf";

const PageHeading = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) => {
  return (
    <section
      data-ui="page-heading"
      className="flex items-end gap-x-4 mt-4 mb-10"
    >
      <div className="flex flex-col space-y-2">
        <div className="flex gap-x-2">
          <IconLeaf className="w-5" />

          <h2 className="text-7xl text-spring-lobster-brown font-serif">{title}</h2>
        </div>
        {subtitle && (
          <p className="text-xl text-sunken-cascades font-light">{subtitle}</p>
        )}
      </div>
      <div className="ml-8 flex-1">{children}</div>

      <GoBack />
    </section>
  );
};

export { PageHeading };
