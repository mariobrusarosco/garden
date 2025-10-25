import { IconReactQuery } from "@/domains/garden-components/icons/react-query";
import { IconLeaf } from "@/domains/garden-components/icons/leaf"; // Default fallback
import { IconSparkles } from "@/domains/garden-components/icons/sparkles";
import { IconMobile } from "@/domains/garden-components/icons/mobile";
import { IconRocket } from "@/domains/garden-components/icons/rocket";
import { IconTestTube } from "@/domains/garden-components/icons/test-tube";
import { IconBook } from "@/domains/garden-components/icons/book";
import { IconGear } from "@/domains/garden-components/icons/gear";
import { IconPuzzle } from "@/domains/garden-components/icons/puzzle";
import { IconLightbulb } from "@/domains/garden-components/icons/lightbulb";
import { IconWrench } from "@/domains/garden-components/icons/wrench";
import { IconShield } from "@/domains/garden-components/icons/shield";

type IconComponent = React.FC<{ className?: string }>;

// Topic-specific icon mapping
// Key: topic slug or icon name from frontmatter
// Value: Icon component
const topicIconMap: Record<string, IconComponent> = {
  // Topic-specific icons
  "react-query": IconReactQuery,

  // Generic/metaphorical icons
  "sparkles": IconSparkles,     // AI, magic, automation
  "mobile": IconMobile,          // Mobile development
  "rocket": IconRocket,          // Performance, startup, launch
  "test-tube": IconTestTube,     // Testing, experimentation
  "book": IconBook,              // Documentation, concepts, learning
  "gear": IconGear,              // Tools, configuration, settings
  "puzzle": IconPuzzle,          // Patterns, architecture, problem-solving
  "lightbulb": IconLightbulb,    // Ideas, concepts, innovation
  "wrench": IconWrench,          // Utilities, helpers, fixes
  "shield": IconShield,          // Security, validation, protection
};

/**
 * Get the icon component for a specific topic
 * @param iconName - Icon name from metadata or topic slug
 * @returns Icon component (defaults to IconLeaf if not found)
 */
export const getTopicIcon = (iconName: string | undefined): IconComponent => {
  if (!iconName) return IconLeaf;
  return topicIconMap[iconName] || IconLeaf;
};

