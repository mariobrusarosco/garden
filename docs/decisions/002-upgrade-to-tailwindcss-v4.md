# 002: Upgrade to Tailwind CSS v4

- **Status**: Proposed
- **Date**: 2025-09-30

## Context and Problem Statement

The project is currently running on Tailwind CSS v3.4.1. Tailwind CSS v4.0 has been released with significant performance improvements, a new CSS-first architecture, and modernized development experience. To leverage these benefits and stay current with the framework's evolution, we need to upgrade our CSS framework. Staying on an older version will prevent us from accessing performance improvements and new features.

## Decision Drivers

- **Performance**: Tailwind CSS v4 delivers full builds that are up to 5x faster, and incremental builds are over 100x faster—measured in microseconds.
- **Modern Architecture**: The new CSS-first configuration approach replaces JavaScript-based configuration, offering better performance and developer experience.
- **Simplified Setup**: Single CSS import (`@import "tailwindcss"`) replaces the three `@tailwind` directives.
- **Future-Proofing**: Staying current with major dependencies reduces the complexity of future upgrades and ensures access to security updates.
- **Web Platform Optimization**: v4 takes full advantage of the latest advancements the web platform has to offer.

## Considered Options

1. **Upgrade to Tailwind CSS v4**: A direct upgrade to the latest major version.
2. **Remain on Tailwind CSS v3**: Postpone the upgrade, accepting the risk of missing performance improvements and falling behind on framework evolution.

## Decision

We have decided to proceed with **Option 1** and upgrade the project to Tailwind CSS v4.

This decision is based on the substantial performance benefits, the improved developer experience with CSS-first configuration, and the importance of staying current with the framework. The automated upgrade tool provided by Tailwind CSS will handle most of the migration complexity.

## Consequences

### Positive

- **Significant Performance Gains**: Development builds will be dramatically faster, improving developer productivity.
- **Simplified Architecture**: CSS-first configuration is more intuitive and performant than JavaScript-based configuration.
- **Modern Tooling**: Access to the latest features and improvements in the Tailwind CSS ecosystem.
- **Future Compatibility**: Staying current ensures easier future upgrades and continued framework support.

### Negative

- **Breaking Changes**: The upgrade requires migration of existing configuration and CSS imports.
- **Browser Compatibility**: v4 targets Safari 16.4+, Chrome 111+, and Firefox 128+, which may exclude some older browsers.
- **Learning Curve**: Team needs to adapt to new CSS-first configuration approach.

### Risks

- **Custom Theme Migration**: Our extensive custom color palette and breakpoint configuration needs careful migration to the new CSS variable system.
- **Build Process Changes**: PostCSS configuration changes may affect the build pipeline.
- **Potential Regressions**: Visual inconsistencies may occur if the migration doesn't preserve all existing styles correctly.

## Migration Plan

The detailed migration steps are documented in our planning document:

- [Phase 2: Tailwind CSS v4 Migration Plan](./../plan/phase-2-tailwindcss-v4-upgrade.md)