import type { TopicCategory } from "@/types/topic-metadata";
import { IconFrameworks } from "@/domains/garden-components/icons/frameworks";
import { IconLanguages } from "@/domains/garden-components/icons/languages";
import { IconTools } from "@/domains/garden-components/icons/tools";
import { IconConcepts } from "@/domains/garden-components/icons/concepts";
import { IconPatterns } from "@/domains/garden-components/icons/patterns";
import { IconLeaf } from "@/domains/garden-components/icons/leaf";

const categoryIconMap = {
  frameworks: IconFrameworks,
  languages: IconLanguages,
  tools: IconTools,
  concepts: IconConcepts,
  patterns: IconPatterns,
} as const;

export const getCategoryIcon = (category: TopicCategory) => {
  return categoryIconMap[category] || IconLeaf;
};

