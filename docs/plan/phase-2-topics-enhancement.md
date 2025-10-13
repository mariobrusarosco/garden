# Phase 2: Topics Architecture Enhancement

## Overview

Enhance the topics display to include icons and summaries for each topic, requiring a restructure of the metadata format and UI components.

## Current State

### Current Data Structure

```json
{
  "react": ["file1.mdx", "file2.mdx"],
  "typescript": ["file3.mdx"]
}
```

### Current UI

- Simple list of topic names as links
- No visual hierarchy
- No context about what each topic contains

## Target State

### New Data Structure

```json
{
  "react": {
    "summary": "A JavaScript library for building user interfaces with components",
    "files": ["file1.mdx", "file2.mdx"],
    "category": "frameworks"
  },
  "typescript": {
    "summary": "JavaScript with syntax for types, providing better tooling",
    "files": ["file3.mdx"],
    "category": "languages"
  }
}
```

**Note:** Topics use their category's icon. Icon mapping happens at runtime based on category (with fallback to default icon).

### New UI

- Topic cards with icon, title, and summary
- Better visual presentation
- Filterable by category
- Search still works

---

## Tasks Breakdown

### ✅ Phase 2.1: Data Structure Migration

- [x] **Task 1.1**: Create new metadata schema

  - Define TypeScript interface for topic metadata
  - Include: summary, files, category (NO icon field - derived from category)
  - Document the schema

- [x] **Task 1.2**: Update metadata generation script

  - Modify `scripts/create-metadata.js`
  - Read frontmatter from MDX files
  - Generate new JSON structure
  - **No backward compatibility needed - fresh start!**

  **Hybrid Approach Logic:**

  ```javascript
  // For each unique topic (e.g., "react"):
  // 1. Find primary MDX file (react.mdx where title matches topic)
  // 2. Extract from frontmatter: category, summary
  // 3. Find all MDX files with this topic in related-topics
  // 4. Build object: { summary, category, files: [...] }
  // Note: Icon is derived from category at runtime
  ```

- [x] **Task 1.3**: Update MDX frontmatter for primary topics
  - Add `category` and `summary` fields to primary MDX files
  - Example updated frontmatter:
  ```yaml
  ---
  title: React
  category: "frameworks"
  # summary is optional - auto-generated from first paragraph if not provided
  author: mariobrusarosco.github.com
  related-topics:
    - "react"
    - "framework"
  planted-in: 2024-05-24
  last-watered-in: 2024-05-24
  ---
  ```

### ✅ Phase 2.2: Icon System

- [x] **Task 2.1**: Audit existing icons

  - Check `domains/garden-components/icons/`
  - List available icons
  - Identify which category icons we need

- [x] **Task 2.2**: Add category icons

  - Create/import icons for each category (frameworks, languages, tools, concepts, patterns)
  - Follow existing icon component pattern
  - Ensure consistent sizing
  - ~5-6 icons total

- [x] **Task 2.3**: Create category-to-icon mapping utility
  - Map category names to icon components
  - Handle fallback to default icon if category not found
  - Export typed icon getter function: `getCategoryIcon(category: string)`

### ✅ Phase 2.3: UI Components

- [x] **Task 3.1**: Create TopicCard component

  - Display icon, title, summary
  - Handle click/navigation
  - Responsive design
  - Hover states

- [x] **Task 3.2**: Update TopicsScreen

  - Replace simple list with TopicCard grid
  - Maintain search functionality
  - Update filtering logic for new structure

- [x] **Task 3.3**: Update category filtering
  - Wire up category tabs (All, Tools, Frameworks, etc.)
  - Filter topics by category
  - Maintain URL state (optional)

### ✅ Phase 2.4: Migration & Testing

- [ ] **Task 4.1**: Run metadata generation

  - Execute updated script
  - Verify new JSON structure
  - Commit new metadata file

- [ ] **Task 4.2**: Update TypeScript types

  - Create types for new metadata structure
  - Update imports across codebase
  - Fix type errors

- [ ] **Task 4.3**: Test functionality

  - Search still works
  - Category filtering works
  - All links navigate correctly
  - Responsive on mobile

- [ ] **Task 4.4**: Clean up
  - Remove old code
  - Update documentation
  - Commit changes

---

## Technical Decisions

### Icon Strategy

**Option A**: Use existing icon library (lucide-react, react-icons)
**Option B**: Custom SVG icons in our components
**Decision**: TBD - depends on what's already in the project

### Summary Source

**Option A**: Manual - write summaries for each topic
**Option B**: Extract from MDX frontmatter
**Option C**: AI-generated based on content
**Decision**: **Hybrid Approach** ✅

- Add `category` to MDX frontmatter
- Auto-generate `summary` from first paragraph of content
- Optional: Manual `summary` in frontmatter overrides auto-generated one
- Script reads primary MDX file for each topic and merges with files array

### Category Assignment

**Option A**: Manual mapping in metadata
**Option B**: Infer from frontmatter tags
**Option C**: Separate categories config file
**Decision**: Option A for simplicity

---

## File Changes Required

### New Files

- `domains/garden-components/components/topic-card.tsx`
- `domains/helper-and-utils/get-topic-icon.ts`
- `types/topic-metadata.ts`

### Modified Files

- `scripts/create-metadata.js`
- `metadata-topics.json`
- `app/topics/page.tsx`
- `domains/garden-components/hooks/use-list-search.ts` (might need updates)

### Potential New Files

- Additional icon components as needed

---

## Risks & Considerations

1. **Manual Work**: Writing summaries for all topics is time-consuming

   - Mitigation: Start with most important topics, fill in gradually

2. **Icon Consistency**: Need consistent visual style

   - Mitigation: Use single icon library or design system

3. **Performance**: More data in JSON, larger file size
   - Mitigation: Should be fine for current scale, monitor if needed

---

## Success Criteria

- [ ] All topics display with icon and summary
- [ ] Search functionality works with new structure
- [ ] Category filtering works
- [ ] No broken links
- [ ] Responsive design maintained
- [ ] Type-safe implementation
- [ ] Documentation updated

---

## Next Steps

1. Review and approve this plan
2. Decide on icon strategy
3. Start with Phase 2.1, Task 1.1
4. Work through tasks sequentially
5. Test after each phase
