"use client";

import { GoBack } from "@/domains/garden-components/go-back";
import { IconLeaf } from "./icons/leaf";
import { useListSearcher } from "@/domains/garden-components/hooks/use-list-search";
import { ListSearcher } from "@/domains/garden-components/components/list-search";
import topics from "@/metadata-topics.json";
import type { TopicsMetadata } from "@/types/topic-metadata";

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
      className="flex items-end gap-x-4 text-dark-pink mt-4 mb-10"
    >
      <div className="flex flex-col space-y-2">
        <div className="flex gap-x-2">
          <IconLeaf className="w-5" />

          <h2 className="text-7xl font-serif">{title}</h2>
        </div>
        {subtitle && (
          <p className="text-xl  text-midnight-blue font-light">{subtitle}</p>
        )}
      </div>
      <div className="ml-8 flex-1">{children}</div>

      <GoBack />
    </section>
  );
};

export { PageHeading };
