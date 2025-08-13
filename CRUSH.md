# CRUSH.md - Development Guide

## Build/Test/Lint Commands
- `pnpm dev` - Start development server on port 3333
- `pnpm build` - Build for production using vite-ssg
- `pnpm test` - Run all tests with vitest
- `pnpm test:unit` - Run unit tests only
- `pnpm test:e2e` - Open Cypress for e2e tests
- `pnpm lint` - Run ESLint
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm preview` - Preview production build

## Code Style Guidelines
- Uses @antfu ESLint config with strict TypeScript
- Vue components: kebab-case in templates, PascalCase for files
- Component tag order: `<template>`, `<script setup>`, `<style>`
- Auto-imports enabled for Vue, VueUse, composables, and stores
- Path alias: `~/` maps to `src/`
- Use `lang="ts"` for TypeScript in script blocks
- Use `lang="scss"` for SCSS styling
- Strict null checks and unused locals enforcement

## Architecture
- Vue 3 + TypeScript + Vite + SSG
- Pinia for state management
- File-based routing with vite-plugin-pages
- Auto-imported components and composables
- SCSS for modular and component-based styling
- Markdown support for content pages

## Testing
- Vitest for unit tests (files in `test/` directory)
- Cypress for e2e tests
- JSDOM environment for component testing