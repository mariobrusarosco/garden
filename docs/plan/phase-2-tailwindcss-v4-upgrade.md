# Phase 2: Tailwind CSS v4 Migration Plan

This document outlines the plan to upgrade the project from Tailwind CSS v3.4.1 to v4.0.

## ✅ Phase Checklist

- [ ] **1. Preparation & Assessment**
- [ ] **2. Automated Migration**
- [ ] **3. Manual Updates & Configuration**
- [ ] **4. Testing & Validation**
- [ ] **5. Create ADR (Architectural Decision Record)**

---

## 📋 Task Breakdown

### 1. Preparation & Assessment

- **Create a new feature branch:** Create a dedicated branch for the upgrade (e.g., `feat/upgrade-tailwind-v4`) to isolate the changes. (Manual step)
- **Audit current usage:** Review current Tailwind usage across all components and pages.
- **Backup configuration:** Ensure current `tailwind.config.ts` and related files are committed.

### 2. Automated Migration

- **Prerequisites:** Ensure Node.js 20+ is available for the upgrade tool.
- **Run upgrade tool:** Execute `npx @tailwindcss/upgrade` in the project root.
  - This tool will automatically handle most migration tasks
  - Updates dependencies in `package.json`
  - Migrates configuration files
  - Updates CSS imports
- **Review changes:** Carefully review all automated changes before proceeding.

### 3. Manual Updates & Configuration

Based on the current project setup, the following manual updates will be needed:

- **CSS Import Migration:**
  - **Current:** `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;` in `app/globals.css`
  - **New:** Replace with single `@import "tailwindcss";`

- **Custom Theme Migration:**
  - **Colors:** Migrate extensive custom color palette (french_gray, cadet_gray, wenge, etc.) to CSS variables
  - **Breakpoints:** Convert `AppBreakpoints` from TypeScript constants to CSS-based configuration
  - **Fonts:** Migrate font family configuration to CSS variables

- **PostCSS Configuration:**
  - **Current:** Simple `tailwindcss: {}` plugin in `postcss.config.mjs`
  - **New:** Update to use `@tailwindcss/postcss` plugin if needed

- **Custom Utilities:**
  - Review existing `@layer utilities` in `globals.css`
  - Ensure compatibility with v4's new utility system
  - Update any deprecated utility classes

### 4. Testing & Validation

- **Development Server:** Start the app with `yarn dev` to ensure it runs without errors.
- **Visual Testing:** Navigate through all pages to check for visual regressions:
  - Home page (`/`)
  - Topics listing (`/topics`)
  - Series listing (`/series`)
  - Individual topic and series pages
  - MDX component rendering
- **Build Testing:** Run `yarn build` to ensure production build works correctly.
- **Lint Check:** Run `yarn lint` to catch any new issues.
- **Performance Validation:** Compare build times before and after upgrade.

### 5. Create ADR (Architectural Decision Record)

- **Document the decision:** Create an ADR file in `docs/decisions/` to formalize the decision to upgrade, outlining the reasons, benefits, and consequences.

## 🔍 Key Areas to Monitor

### Browser Compatibility
- **Target browsers:** Safari 16.4+, Chrome 111+, Firefox 128+
- **Action:** Verify this aligns with project requirements

### Custom Configuration Impact
- **Extensive color palette:** 10 custom color schemes with multiple shades
- **Custom breakpoints:** `fh` (1920px) breakpoint and others
- **CSS custom properties:** Existing CSS variables in globals.css

### Breaking Changes to Watch
- **Utility renames:** Some utilities may have been renamed in v4
- **Default behavior changes:** Color defaults, spacing, etc.
- **Configuration syntax:** TypeScript config → CSS-based config