# ADR 003: Topic-Specific Icons

**Date**: 2025-10-25
**Status**: ✅ Completed
**Related Plan**: [Phase 3: Topic-Specific Icons](../plan/phase-3-topic-specific-icons.md)
**Supersedes**: [ADR 002](./002-topics-architecture-enhancement.md) (Icon Strategy section)

---

## Context

Following the implementation of category-based icons in ADR 002, we identified that:
- All topics within the same category looked identical
- No visual distinction between individual topics
- Limited ability to recognize topics at a glance
- Users needed to read text to identify topics

The category-based approach (5 icons for all topics) needed enhancement to provide better visual differentiation.

---

## Decision

We pivoted from **category-based icons** to **topic-specific icons** with the following strategy:

### 1. Icon Architecture

**Decision**: Each topic has its own unique icon

- Topic icons are the primary visual identifier
- Category icons remain as small tags in the top-right corner
- Icon component mapping via `getTopicIcon()` utility
- Fallback to default leaf icon if not found

**Rationale:**
- Better visual recognition
- Maintains category context via corner tag
- Scalable for growing number of topics
- Flexible icon assignment (specific or generic)

### 2. Icon Types

**Decision**: Hybrid approach with specific and generic icons

**Generic/Metaphorical Icons** for abstract concepts:
- **Lightbulb** → Core concepts, ideas (React, JavaScript)
- **Shield** → Security, type safety (TypeScript)
- **Rocket** → Performance, fast tools (Bun, Vite, Next.js)
- **Gear** → Tools, configuration (Prisma, Tailwind CSS)
- **Puzzle** → Patterns, libraries (CSS, React Context, component libraries)
- **Sparkles** → AI, magic, visual elements (Icons)
- **Book** → Documentation, methodologies
- **Wrench** → Utilities, helpers
- **Mobile** → Mobile development
- **Test-tube** → Testing, experimentation

**Specific Icons** for major technologies (future):
- Could add brand-specific icons for major frameworks
- Currently using generic icons for simplicity

**Rationale:**
- Generic icons provide semantic meaning
- Easier to maintain (10 icons vs. 60+ unique logos)
- Works well at small sizes
- Consistent visual language
- Can enhance with specific logos later if needed

### 3. Metadata Structure

**Decision**: Add optional `icon` field to topic frontmatter

```yaml
---
title: TypeScript
summary: "JavaScript with syntax for types"
category: "languages"
icon: "shield"  # Optional: defaults to topic slug
---
```

**Rationale:**
- Simple and explicit
- Optional (uses slug as fallback)
- Easy to understand and maintain
- Flexible for future icon changes

### 4. Icon Component Structure

**Decision**: Use Heroicons (outline style) for generic icons

```tsx
import { cn } from "@/domains/helper-and-utils/classnames";

const IconShield = ({ className }: { className?: string }) => {
  return (
    <div className={cn("icon-wrapper flex", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        {/* SVG path */}
      </svg>
    </div>
  );
};
```

**Rationale:**
- Consistent with existing icon pattern
- Heroicons are free, open-source, and well-maintained
- Outline style works well at small sizes
- `currentColor` supports theming
- Responsive and accessible

---

## Implementation

### New Files Created

1. **Generic Icon Components** (10 files)
   - `domains/garden-components/icons/sparkles.tsx`
   - `domains/garden-components/icons/mobile.tsx`
   - `domains/garden-components/icons/rocket.tsx`
   - `domains/garden-components/icons/test-tube.tsx`
   - `domains/garden-components/icons/book.tsx`
   - `domains/garden-components/icons/gear.tsx`
   - `domains/garden-components/icons/puzzle.tsx`
   - `domains/garden-components/icons/lightbulb.tsx`
   - `domains/garden-components/icons/wrench.tsx`
   - `domains/garden-components/icons/shield.tsx`

2. **Helper Utility**
   - `domains/helper-and-utils/get-topic-icon.tsx` - Maps icon names to components

3. **Type Definitions**
   - `types/serie-metadata.ts` - Series metadata types (reuses TopicCategory)

4. **Components**
   - `domains/garden-components/components/serie-card.tsx` - Card for series display

### Modified Files

1. **`scripts/create-metadata.js`**
   - Enhanced to read `icon` field from frontmatter
   - Applies to both topics and series
   - Includes icon in generated metadata

2. **`app/topics/page.tsx`**
   - Already uses TopicCard which displays topic-specific icons

3. **`app/series/page.tsx`**
   - Updated to use SerieCard with card layout
   - Displays series with icons and summaries

4. **`app/use-cases/page.tsx`**
   - Updated to use SerieCard layout
   - Displays series instead of "Coming soon"

5. **14 Primary Topic MDX Files**
   - Added `icon` and `summary` fields to frontmatter
   - Examples: react.mdx, typescript.mdx, javascript.mdx, etc.

6. **4 Series MDX Files**
   - Added `icon` and `summary` fields to frontmatter
   - Examples: ai.mdx, creating-a-mobile-app.mdx, etc.

---

## Icon Assignments

### Topics (14 updated)
- **React** → lightbulb (core framework)
- **TypeScript** → shield (type safety)
- **JavaScript** → lightbulb (core language)
- **Prisma** → gear (ORM tool)
- **React Query** → react-query (custom icon)
- **Bun** → rocket (fast runtime)
- **Vite** → rocket (fast build)
- **Next.js** → rocket (performance)
- **CSS** → puzzle (styling system)
- **Tailwind CSS** → gear (utility framework)
- **React Context** → puzzle (pattern)
- **Routing** → puzzle (navigation)
- **Icons** → sparkles (visual)
- **Material UI, MUI, Shadcn UI** → puzzle (component libraries)

### Series (4 updated)
- **AI** → sparkles (AI-powered)
- **Creating a Mobile App** → mobile (mobile dev)
- **Start-up Fast Boilerplate** → rocket (fast startup)
- **E2E Testing** → test-tube (testing)

---

## Results

### Before (ADR 002)
- Category-based icons (5 total)
- All topics in same category looked identical
- Category icons as main identifier
- Limited visual distinction

### After (ADR 003)
- Topic-specific icons (10 generic + 1 custom)
- Each topic has unique visual identifier
- Category icons as small corner tags
- Clear visual differentiation
- Better user recognition

---

## Benefits

1. **Visual Recognition** - Users can identify topics at a glance
2. **Semantic Meaning** - Icons convey topic purpose (shield = security, rocket = speed)
3. **Scalability** - Generic icons cover many topics efficiently
4. **Maintainability** - 10 generic icons serve 14+ topics
5. **Flexibility** - Can add specific brand icons later if needed
6. **Category Context** - Corner tags preserve category information
7. **Consistency** - Unified visual language across the garden

---

## Trade-offs

### Advantages
✅ Better visual distinction between topics
✅ Semantic meaning through metaphorical icons
✅ Lower maintenance than 60+ unique logos
✅ Generic icons work well at small sizes
✅ Easy to extend with new icons

### Disadvantages
⚠️ Generic icons lack brand recognition
⚠️ Multiple topics may share same icon
⚠️ Requires thoughtful icon assignment

---

## Future Enhancements

1. **Brand-Specific Icons** - Add official logos for major frameworks (React, TypeScript, Next.js, etc.)
2. **Icon Library Expansion** - Create more generic icons as needed
3. **Icon Categories** - Group icons by type for better organization
4. **Icon Previewer** - Tool to preview all available icons
5. **Auto-Icon Assignment** - Smart defaults based on topic keywords

---

## Lessons Learned

1. **Generic icons are powerful** - 10 metaphorical icons can serve dozens of topics effectively
2. **Semantic meaning matters** - Icons should convey purpose, not just look pretty
3. **Incremental enhancement works** - Building on ADR 002 foundation was smooth
4. **Fallback patterns are essential** - Default leaf icon prevents broken displays
5. **Type safety catches errors** - TypeScript prevented many assignment mistakes

---

## References

- [Phase 3 Plan](../plan/phase-3-topic-specific-icons.md)
- [Icon Assignment Guide](../guides/icon-assignment-guide.md)
- [ADR 002: Topics Architecture Enhancement](./002-topics-architecture-enhancement.md)
- [Heroicons](https://heroicons.com/)
