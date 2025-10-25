import Link from "next/link";
import type { TopicCategory } from "@/types/topic-metadata";
import { getCategoryIcon } from "@/domains/helper-and-utils/get-category-icon";
import { getTopicIcon } from "@/domains/helper-and-utils/get-topic-icon";
import { removeHyphens } from "@/domains/helper-and-utils/string-manipulation";

interface TopicCardProps {
  slug: string;
  category: TopicCategory;
  summary: string;
  icon?: string;
}

export const TopicCard = ({ slug, category, summary, icon }: TopicCardProps) => {
  const TopicIcon = getTopicIcon(icon || slug);
  const CategoryIcon = getCategoryIcon(category);

  return (
    <Link
      href={`/topics/${slug}`}
      className="group relative flex flex-col gap-3 p-4 rounded-lg border border-midnight-blue hover:border-forest-green transition-colors cursor-pointer"
    >
      {/* Category tag in top-right corner */}
      <div className="absolute top-2 right-2 opacity-50 group-hover:opacity-70 transition-opacity">
        <CategoryIcon className="w-4 h-4 text-midnight-blue" />
      </div>

      <div className="flex items-center gap-3">
        <TopicIcon className="w-6 h-6 text-midnight-blue group-hover:text-forest-green transition-colors" />
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

