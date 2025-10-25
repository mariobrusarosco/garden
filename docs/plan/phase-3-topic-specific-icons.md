# Phase 3: Topic-Specific Icons

## Overview

Pivot from category-based icons to topic-specific icons, while maintaining category icons as small tags in the corner of each card.

## Current State

- Each topic uses its category's icon
- 5 category icons (frameworks, languages, tools, concepts, patterns)
- No visual distinction between individual topics

## Target State

- Each topic has its own unique icon
- Category icon displayed as a small tag in top-right corner
- Generic/metaphorical icons for abstract topics (e.g., book for domain-driven-design)

---

## Tasks Breakdown

### Phase 3.1: Icon Mapping Infrastructure

- [x] **Task 1.1**: Update metadata structure

  - Add `icon` field to MDX frontmatter (optional)
  - Default to topic slug for icon lookup
  - Document icon naming convention

- [x] **Task 1.2**: Create topic-to-icon mapping utility

  - Map topic slugs to icon components
  - Handle fallback to default icon if not found
  - Export typed icon getter function: `getTopicIcon(slug: string)`

- [x] **Task 1.3**: Update TypeScript types
  - Add optional `icon` field to `TopicMetadata` interface
  - Create `IconName` type for available icons

### Phase 3.2: Update UI Components

- [x] **Task 2.1**: Update TopicCard component

  - Use topic-specific icon as main icon
  - Add category icon as small tag in top-right corner
  - Style category tag (small, subtle, positioned absolutely)

- [x] **Task 2.2**: Test responsive behavior
  - Verify category tag doesn't overlap content
  - Test on mobile, tablet, desktop

### Phase 3.3: Icon Creation & Assignment

- [x] **Task 3.1**: Audit all topics

  - List all unique topics from metadata
  - Identify which need custom icons
  - Identify which can use generic icons (book, gear, etc.)

- [x] **Task 3.2**: Create placeholder icon components

  - Use react-query.tsx as template
  - Create generic icons (book, gear, puzzle, lightbulb, etc.)
  - Create specific icons for major topics (react, typescript, etc.)

- [x] **Task 3.3**: Update MDX frontmatter
  - Add `icon` field to primary topic files
  - Assign appropriate icons to each topic

### Phase 3.4: Migration & Testing

- [x] **Task 4.1**: Update metadata generation script

  - Read `icon` field from frontmatter
  - Include in generated metadata

- [x] **Task 4.2**: Test functionality

  - All topics display correct icon
  - Category tags display correctly
  - Fallback works for missing icons

- [x] **Task 4.3**: Update documentation
  - Document icon naming convention
  - Update ADR with new icon strategy

---

## Technical Decisions

### Icon Naming Convention

**Decision**: Use topic slug as icon component name

Example:

- Topic: `react` → Icon: `IconReact`
- Topic: `domain-driven-design` → Icon: `IconBook` (generic)
- Topic: `typescript` → Icon: `IconTypescript`

### Generic Icons Library

Common metaphorical icons for abstract topics:

- **Book**: Documentation, concepts, methodologies (DDD, patterns)
- **Gear**: Tools, configuration, setup (Prisma, Tailwind CSS)
- **Puzzle**: Patterns, architecture, component libraries (CSS, React Context, Routing, Material UI, MUI, Shadcn UI)
- **Lightbulb**: Concepts, ideas, core technologies (React, JavaScript)
- **Wrench**: Utilities, helpers
- **Rocket**: Performance, optimization, fast tools (Bun, Vite, Next.js)
- **Shield**: Security, validation, type safety (TypeScript)
- **Sparkles**: AI, magic, visual elements (Icons)
- **Mobile**: Mobile development
- **Test-tube**: Testing, experimentation

#### Icon Assignments (Completed 2025-10-25)
**Topics Updated:**
- React → lightbulb
- TypeScript → shield
- JavaScript → lightbulb
- Prisma → gear
- React Query → react-query (custom)
- Bun → rocket
- Vite → rocket
- Next.js → rocket
- CSS → puzzle
- Tailwind CSS → gear
- React Context → puzzle
- Routing → puzzle
- Icons → sparkles
- Material UI, MUI, Shadcn UI → puzzle

**Series Updated:**
- AI → sparkles
- Creating a Mobile App → mobile
- Start-up Fast Boilerplate → rocket
- E2E Testing → test-tube

### Category Tag Styling

- Small size (w-4 h-4)
- Positioned absolutely in top-right corner
- Subtle opacity (50-70%)
- Tooltip on hover showing category name

---

## File Changes Required

### New Files

- `domains/helper-and-utils/get-topic-icon.tsx`
- Generic icon components (book, gear, puzzle, etc.)
- Topic-specific icon components (as needed)

### Modified Files

- `domains/garden-components/components/topic-card.tsx`
- `types/topic-metadata.ts`
- `scripts/create-metadata.js`
- Primary topic MDX files (add `icon` field)

---

## Success Criteria

- [x] Each topic displays its own unique icon
- [x] Category icon appears as tag in corner
- [x] Generic icons work for abstract topics
- [x] Fallback icon works for missing icons
- [x] Responsive design maintained
- [x] Documentation updated

---

## Next Steps

1. Review and approve this plan
2. Start with Phase 3.1, Task 1.1
3. Work through tasks sequentially
4. Ask permission before starting each new task
