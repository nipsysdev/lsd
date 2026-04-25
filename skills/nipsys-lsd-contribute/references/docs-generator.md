# LSD Docs Generator

Automated documentation generation system that creates component documentation pages from TSDoc annotations.

## Overview
The docs generator runs from `packages/lsd-docs/` and generates React pages at `app/components/{component}/page.tsx` by parsing TSDoc annotations and example files.

## CLI Usage

### Installation
The generator is in `packages/lsd-docs/scripts/docs-generator/` and requires tsx.

### Commands
```bash
# From packages/lsd-docs directory
pnpm run generate [component-name] [--all] [--help]

# Or from the root of the monorepo
pnpm run docs:generate [component-name] [--all] [--help]
```

**Examples:**
```bash
pnpm run generate button        # Generate docs for button
pnpm run generate --all         # Generate docs for all components
pnpm run generate --help        # Show help
```

## Prerequisites

### Component Requirements

**Must be exported from main.ts:**
```typescript
// packages/lsd/src/main.ts
export * from '@/components/ui/component';
```

**Required TSDoc tags:**
```typescript
/**
 * @docSectionPageDescription Brief description for page header
 * @docSectionAbout Detailed description for About section
 */
```

**If has sub-components:**
```typescript
/**
 * @docSectionComposition
 * • Component - Description
 *   • SubComponent - Description
 */
```

### Example Requirements

**Example files at:** `app/examples/{component}/{variant}/page.tsx`

**Must include:**
```typescript
export const SIZE: 'sm' | 'md' | 'lg' | 'xl' = 'md';

/** @docSection usage */
export const CODE = `import { Component } from '@nipsys/lsd';
export function Example() {
  return <Component />;
}`;

function Example() {
  useSendThemeToIframes();
  return <Component />;
}

export default function ExamplePage() {
  return <Example />;
}
```

## Pipeline Flow

```
1. Component Discovery
   └─ Parse packages/lsd/src/main.ts
   └─ Extract all export statements

2. Metadata Extraction
   ├─ Load main component file
   ├─ Extract props from interfaces
   ├─ Extract variants from CVA definitions
   ├─ Extract sizes and sub-components
   └─ Detect Radix UI primitive usage

3. TSDoc Parsing
   ├─ Parse @docSectionPageDescription (required)
   ├─ Parse @docSectionAbout (required)
   ├─ Parse @docSectionComposition (if has sub-components)
   └─ Parse accessibility/usage/feature tags

4. Example Discovery & Loading
   ├─ Scan app/examples/{component}/
   ├─ Extract @docSection category
   ├─ Load CODE and SIZE exports
   └─ Return array of loaded examples

5. Page Generation
   ├─ Generate About section
   ├─ Generate Installation section
   ├─ Generate Basic Usage section
   ├─ Generate Variants section
   ├─ Generate Sizes section
   ├─ Generate Features section
   ├─ Generate Composition section
   ├─ Generate API Reference section
   └─ Generate Accessibility section

6. File Output
   └─ Write to app/components/{component}/page.tsx
```

## Common Errors

| Error | Cause | Fix |
|-------|-------|-----|
| Missing @docSectionPageDescription | Required tag absent | Add tag with content |
| Missing @docSectionAbout | Required tag absent | Add tag with content |
| Invalid @docSection category | Category not in allowed list | Use: usage, variant, size, feature, state, layout, behavior |
| Missing CODE export | Example missing constant | Add `export const CODE = \`...\`;` |
| Missing useSendThemeToIframes() | Example doesn't sync theme | Add hook call without arguments |

## Workflow

1. **Annotate components** in packages/lsd/src/components/ui/{component}/
2. **Create examples** in packages/lsd-docs/app/examples/{component}/{variant}/
3. **Verify exports** in packages/lsd/src/main.ts
4. **Run generator:** `pnpm run generate {component-name}`
5. **Review output** at packages/lsd-docs/app/components/{component}/page.tsx
6. **Test in browser:** Start dev server and navigate to /components/{component}

## Key Modules

| Module | Purpose |
|--------|---------|
| component-discovery.ts | Find all exported components from main.ts |
| metadata-extractor.ts | Extract props, variants, sizes, sub-components |
| tsdoc-parser.ts | Parse TSDoc annotations and custom tags |
| example-scanner.ts | Discover example files |
| example-loader.ts | Load CODE and SIZE exports |
| page-generator.ts | Orchestrate all sections into complete page |
| about.ts, installation.ts, basic-usage.ts, etc. | Generate individual sections |

## Running --all

To generate docs for all components:
```bash
pnpm run generate --all
```

This will:
- Discover all components from main.ts
- Generate docs for each one with valid TSDoc tags
- Skip components missing required tags (throws error)
- Output to app/components/{component}/page.tsx for each

## Validation

The generator validates:
- Component exists in main.ts exports
- Required TSDoc tags exist and have content
- Examples have @docSection tags
- Example categories are valid
- Components with sub-components have @docSectionComposition tag
