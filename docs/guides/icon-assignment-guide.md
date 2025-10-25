# Icon Assignment Guide

## Overview

This guide helps assign appropriate icons to topics in the digital garden. Each topic should have a unique icon that visually represents it.

## Total Topics: 64

---

## Icon Assignment Strategy

### 1. **Specific Icons** (for well-known technologies/frameworks)

Use official logos or recognizable symbols:

- `react` → React logo
- `typescript` → TypeScript logo
- `javascript` → JavaScript logo
- `css` → CSS3 logo
- `next-js` → Next.js logo
- `tailwind-css` → Tailwind CSS logo
- `vite` → Vite logo
- `prisma` → Prisma logo
- `shadcn-ui` → Shadcn UI logo
- `material-ui` / `mui` → Material UI logo
- `react-query` → React Query logo (already exists!)
- `bun` → Bun logo

### 2. **Generic/Metaphorical Icons** (for abstract concepts)

Use symbolic representations:

#### 📚 **Book Icon**

For documentation, methodologies, concepts:

- `domain-driven-design`
- `architecture`
- `patterns` (if it becomes a topic)

#### ⚙️ **Gear Icon**

For tools, configuration, setup:

- `environment`
- `vars`
- `env vars`
- `build-system`

#### 🧩 **Puzzle Icon**

For patterns, architecture, integration:

- `refactoring`
- `state-management`

#### 💡 **Lightbulb Icon**

For concepts, ideas, tips:

- `error-handling`
- `validation`
- `type-safety`

#### 🔧 **Wrench Icon**

For utilities, helpers, tools:

- `hooks`
- `routing`
- `forms`
- `inputs`

#### 🚀 **Rocket Icon**

For performance, optimization:

- `ssr`
- `server-side-rendering`

#### 🎨 **Palette Icon**

For styling, design:

- `styling`
- `css library`
- `normalize`
- `reset`
- `icons`
- `ui`

#### 🔐 **Shield Icon**

For security, validation:

- `pydantic`
- `typing`

#### 📦 **Package Icon**

For libraries, packages:

- `orm`

#### 🌐 **Globe Icon**

For web, hosting, domains:

- `hosting`
- `domains`
- `aws`
- `route-53`

#### 🔗 **Link Icon**

For routing, navigation:

- `react-router`

#### 🎬 **Animation Icon**

For animations, transitions:

- `animations`
- `framer`

#### 🖱️ **Cursor Icon**

For events, interactions:

- `events`
- `scroll`
- `scrollbar`

#### 🍔 **Menu Icon**

For navigation, menus:

- `menu`

#### 🐍 **Python Icon**

For Python-related topics:

- `python`
- `fastapi`

#### 🔄 **Refresh Icon**

For caching, state:

- `cache`
- `mutations`
- `query`

#### 📝 **Text Icon**

For text, content:

- `text-wrap`

#### 🔀 **Migration Icon**

For migrations, updates:

- `migration`

#### 🌐 **API Icon**

For APIs, REST:

- `api`
- `rest`

#### 🎯 **Target Icon**

For specific features:

- `react-context`

---

## Icon Naming Convention

### File Naming

- Icon files: `icon-{name}.tsx` (e.g., `icon-book.tsx`, `icon-react.tsx`)
- Component name: `Icon{PascalCase}` (e.g., `IconBook`, `IconReact`)

### In MDX Frontmatter

```yaml
---
title: Domain Driven Design
category: "concepts"
icon: "book" # References IconBook component
---
```

### In Icon Mapping

```typescript
const topicIconMap: Record<string, IconComponent> = {
  "domain-driven-design": IconBook,
  react: IconReact,
  typescript: IconTypescript,
  // ...
};
```

---

## Priority Topics (Start Here)

These are the most important topics with primary files:

1. ✅ **react-query** (already has icon)
2. **react**
3. **typescript**
4. **javascript**
5. **css**
6. **next-js**
7. **tailwind-css**
8. **vite**
9. **prisma**
10. **bun**

---

## Generic Icons Needed

Create these generic icon components first:

1. **IconBook** 📚
2. **IconGear** ⚙️
3. **IconPuzzle** 🧩
4. **IconLightbulb** 💡
5. **IconWrench** 🔧
6. **IconRocket** 🚀
7. **IconPalette** 🎨
8. **IconShield** 🔐
9. **IconPackage** 📦
10. **IconGlobe** 🌐

---

## Implementation Checklist

- [x] Create generic icon components (10 icons) - Completed 2025-10-25
- [ ] Create specific tech icons (12 priority icons) - Using generic icons for now
- [x] Update `get-topic-icon.tsx` mapping - Completed 2025-10-25
- [x] Add `icon` field to primary MDX files - Completed 2025-10-25
- [x] Regenerate metadata - Completed 2025-10-25
- [x] Test all icons display correctly - Completed 2025-10-25

## Updates (2025-10-25)

### Icons Created
✅ Created 10 generic icon components using Heroicons:
- IconSparkles (AI, magic, visual elements)
- IconMobile (Mobile development)
- IconRocket (Performance, fast tools)
- IconTestTube (Testing)
- IconBook (Documentation, concepts)
- IconGear (Tools, configuration)
- IconPuzzle (Patterns, libraries)
- IconLightbulb (Core concepts)
- IconWrench (Utilities)
- IconShield (Security, type safety)

### Topics Updated with Icons
✅ 14 primary topic files updated with `icon` and `summary` fields:
- React → lightbulb
- TypeScript → shield
- JavaScript → lightbulb
- Prisma → gear
- React Query → react-query
- Bun → rocket
- Vite → rocket
- Next.js → rocket
- CSS → puzzle
- Tailwind CSS → gear
- React Context → puzzle
- Routing → puzzle
- Icons → sparkles
- Material UI, MUI, Shadcn UI → puzzle

### Series Updated with Icons
✅ 4 series files updated:
- AI → sparkles
- Creating a Mobile App → mobile
- Start-up Fast Boilerplate → rocket
- E2E Testing → test-tube

### Note on Specific Tech Icons
Currently using generic icons instead of specific tech logos. This approach:
- ✅ Reduces maintenance overhead
- ✅ Provides semantic meaning
- ✅ Works well at small sizes
- ✅ Maintains visual consistency
- 🔄 Can be enhanced later with brand-specific icons if needed

---

## Notes

- Use SVG format for all icons
- Keep consistent sizing (24x24 viewBox)
- Use currentColor for fill/stroke to support theming
- Fallback to `IconLeaf` if icon not found
- Icons should be simple and recognizable at small sizes
