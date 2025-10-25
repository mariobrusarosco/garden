export type TopicCategory = 
  | "frameworks"
  | "languages" 
  | "tools"
  | "concepts"
  | "patterns";

export interface TopicMetadata {
  summary: string;
  category: TopicCategory;
  icon?: string; // Optional: icon name/slug (e.g., "react", "book", "gear")
  files: string[];
}

export interface TopicsMetadata {
  [topicSlug: string]: TopicMetadata;
}

export const isValidCategory = (category: string): category is TopicCategory => {
  return new Set(["frameworks", "languages", "tools", "concepts", "patterns"]).has(category);
};

export const getDefaultCategory = (): TopicCategory => "concepts";

