import type { TopicCategory } from "./topic-metadata";

export interface SerieMetadata {
  summary: string;
  category: TopicCategory;
  icon?: string;
  files: string[];
}

export interface SeriesMetadata {
  [serieSlug: string]: SerieMetadata;
}
