# Phase 1: Next.js 15 Migration Plan

This document outlines the plan to upgrade the project from Next.js v14.2.3 to v15.

## ✅ Phase Checklist

- [ ] **1. Preparation & Branching**
- [ ] **2. Dependency Upgrades**
- [ ] **3. Address Breaking Changes**
- [ ] **4. Codebase Verification & Testing**
- [ ] **5. Create ADR (Architectural Decision Record)**

---

## 📋 Task Breakdown

### 1. Preparation & Branching

- **Create a new feature branch:** Create a dedicated branch for the upgrade (e.g., `feat/upgrade-next-15`) to isolate the changes. (Manual step)

### 2. Dependency Upgrades

- **Update `package.json`:** Update the following core dependencies to their latest stable versions for Next.js 15.
  - `next`
  - `react` & `react-dom` (Next.js 15 often requires a newer React version)
  - `@types/react` & `@types/react-dom`
  - `@mdx-js/loader`, `@mdx-js/react`, `@next/mdx`
  - `eslint-config-next`

### 3. Address Breaking Changes

Based on the official Next.js 15 Upgrade Guide, the following breaking changes need to be addressed:

- **`fetch` Caching**:

  - **The Change:** In Next.js 15, `fetch` requests are **no longer cached by default**. This is a major change to improve predictability.
  - **Action:** We need to audit all `fetch` calls in the application. Any fetch that should be cached must be explicitly opted-in using the `next: { revalidate: <seconds> }` option or by using React's `cache` function.

- **`@next/font` Removal**:

  - **The Change:** The `@next/font` package is deprecated and removed.
  - **Action:** Run the `npx @next/codemod@latest v15-font-mod .` codemod to automatically update all imports to the new `next/font` package.

- **`next.config.mjs` updates**:

  - **The Change:** `experimental` flags have been stabilized.
  - **Action:** Check `next.config.mjs` for `experimental.bundlePagesExternals` and `experimental.serverComponentsExternalPackages` and rename them to `bundlePagesRouterDependencies` and `serverExternalPackages` respectively.

- **Client-side Router Cache**:
  - **The Change:** The router cache behavior has changed. Segments are not reused on navigation by default.
  - **Action:** Review the application's navigation. For most informational sites like this one, the default behavior is often acceptable. No immediate action is required unless specific caching behavior is desired.

### 4. Codebase Verification & Testing

- **Run the development server:** Start the app with `yarn dev` to ensure it runs without errors.
- **Lint the code:** Run `yarn lint` to catch any new issues.
- **Thorough Manual Testing:**
  - Navigate through all pages (`/`, `/topics`, `/series`, and individual notes).
  - Verify that content loads correctly.
  - Check that MDX components are rendering as expected.
  - Test browser back/forward navigation.

### 5. Create ADR (Architectural Decision Record)

- **Document the decision:** Create an ADR file in `docs/decisions/` to formalize the decision to upgrade, outlining the reasons, benefits, and consequences.
