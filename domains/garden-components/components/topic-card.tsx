import Link from "next/link";
import type { TopicCategory } from "@/types/topic-metadata";
import { getCategoryIcon } from "@/domains/helper-and-utils/get-category-icon";
import { removeHyphens } from "@/domains/helper-and-utils/string-manipulation";

interface TopicCardProps {
  slug: string;
  category: TopicCategory;
  summary: string;
}

export const TopicCard = ({ slug, category, summary }: TopicCardProps) => {
  const Icon = getCategoryIcon(category);

  return (
    <Link
      href={`/topics/${slug}`}
      className="group flex flex-col gap-3 p-4 rounded-lg border border-midnight-blue hover:border-forest-green transition-colors cursor-pointer"
    >
      <div className="flex items-center gap-3">
        <Icon className="w-6 h-6 text-midnight-blue group-hover:text-forest-green transition-colors" />
        <h3 className="text-lg font-sans font-light text-midnight-blue uppercase">
          {removeHyphens(slug)}
        </h3>
      </div>
      
      {summary && (
        <p className="text-sm text-midnight-blue/70 font-sans font-light line-clamp-2">
          {summary}
        </p>
      )}
    </Link>
  );
};

