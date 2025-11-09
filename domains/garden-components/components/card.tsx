import Link from "next/link";
import type { TopicCategory } from "@/types/topic-metadata";
import { getCategoryIcon } from "@/domains/helper-and-utils/get-category-icon";
import { getTopicIcon } from "@/domains/helper-and-utils/get-topic-icon";
import { IconLeaf } from "@/domains/garden-components/icons/leaf";
import { removeHyphens } from "@/domains/helper-and-utils/string-manipulation";

interface CardProps {
  href: string;
  title: string;
  category: TopicCategory;
  summary?: string;
  icon?: string;
  useLeafIcon?: boolean;
}

export const Card = ({
  href,
  title,
  category,
  summary,
  icon,
  useLeafIcon = false,
}: CardProps) => {
  const CategoryIcon = getCategoryIcon(category);
  const CustomIcon = useLeafIcon ? IconLeaf : getTopicIcon(icon || title);
  const normalizedTitle = removeHyphens(title);

  return (
    <Link
      href={href}
      className="group relative flex flex-col gap-3 p-4 rounded-lg border border-midnight-blue hover:border-forest-green transition-colors cursor-pointer"
    >
      {/* Category tag in top-right corner */}
      <div className="absolute top-2 right-2 opacity-50 group-hover:opacity-70 transition-opacity">
        <CategoryIcon className="w-4 h-4 text-midnight-blue" />
      </div>

      <div className="flex items-center gap-3">
        <CustomIcon className="w-6 h-6 text-midnight-blue group-hover:text-forest-green transition-colors" />
        <h3 className="text-lg font-sans font-light text-midnight-blue uppercase">
          {normalizedTitle}
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

