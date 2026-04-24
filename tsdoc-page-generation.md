# AI Agent TSDoc Generation Guide

This guide provides precise instructions for AI agents to generate TSDoc for LSD components and produce documentation pages.

## <system_instructions>

You are an AI agent tasked with generating TSDoc for LSD components and running the documentation generator. Follow these instructions exactly.

**CRITICAL RULES:**
1. Complete ALL steps in order before running the generator
2. Do NOT skip any step
3. Do NOT proceed to Step 6 until Steps 1-5 and Pre-Generation are complete
4. Each step has a verification checkpoint - confirm completion before proceeding
5. **ALL example files MUST have @docSection tags before running generator**

**Format:**
- Read the entire document first
- Complete each step sequentially
- Verify before proceeding to next step
- Use the exact tool names and commands specified

</system_instructions>

---

# STEP 1: Identify Radix Imports and Build URLs

## <action>

Use the `read_file` tool to read the main component file from `packages/lsd/src/components/ui/{component-name}/`

## <verification>

Find imports starting with `@radix-ui/react-` and extract the component name.

**Component name format:** Everything after `@radix-ui/react-`

**IMPORTANT:** Even if the component doesn't use a Radix primitive, you MUST still check both documentation sources in Step 2. This is for comprehensive information gathering.

**URL Patterns to build (based on Radix import if present, or component name for custom components):**
- Radix UI: `https://www.radix-ui.com/primitives/docs/components/{component-name}`
- shadcn/ui: Always use component name from directory: `https://ui.shadcn.com/docs/components/{component-name}`

**Examples:**
- Import: `@radix-ui/react-accordion` → Component: `accordion`
  - Radix URL: `https://www.radix-ui.com/primitives/docs/components/accordion`
  - shadcn URL: `https://ui.shadcn.com/docs/components/accordion`
- Component without Radix import: `alert` → Component: `alert`
  - Radix URL: `https://www.radix-ui.com/primitives/docs/components/alert` (may 404, but check anyway)
  - shadcn URL: `https://ui.shadcn.com/docs/components/alert` (shadcn has documentation)

## <checkpoint>

Answer these questions before proceeding:
- [ ] Does this component use a Radix primitive? (if so, which one?)
- [ ] What is the component name to use for URLs?
- [ ] What are the two documentation URLs to check in Step 2?

---

# STEP 2: Fetch and Review Online Documentation

## <action>

This is a MANDATORY step. You MUST fetch and review documentation from both sources, even if one fails or doesn't apply.

**IMPORTANT:** shadcn/ui has documentation for ALL components (including custom ones like alert, badge, etc.). Always check shadcn documentation regardless of Radix import status.

**Use the `execute_command` tool with curl to fetch the pages:**
```bash
curl -s "https://www.radix-ui.com/primitives/docs/components/{component-name}" | head -200
curl -s "https://ui.shadcn.com/docs/components/{component-name}" | head -200
```

**Note:** The Radix URL may return 404 for custom components that don't use Radix primitives. This is expected - but you must still attempt to fetch it to verify.

## <verification>

Extract the following information from the documentation:

**From Radix UI (if available):**
1. Accessibility keyboard shortcuts (Tab, Arrow keys, Enter, Escape, etc.)
2. ARIA attributes used (role, aria-expanded, aria-controls, etc.)
3. Focus management behavior

**From shadcn/ui (ALWAYS available):**
1. Usage patterns and implementation details
2. Props listed and their behaviors
3. Examples of how the component is used
4. Accessibility information (if Radix docs not available)

## <checkpoint>

Answer before proceeding:
- [ ] Have you attempted to fetch both documentation pages?
- [ ] What keyboard shortcuts does the component support? (from either source)
- [ ] What ARIA attributes are used? (from either source)
- [ ] How does focus management work? (from either source)

---

# STEP 3: Generate Concise TSDoc

## <rules>

**CRITICAL: OVERWRITE EXISTING TSDoc**
- You MUST ALWAYS overwrite existing TSDoc, never append or merge
- Replace all descriptions, not just add new comments
- The documentation generator will validate that descriptions exist

**CONCISENESS REQUIREMENTS - HARDCODED LIMITS:**

1. **Prop descriptions MUST be 1-2 sentences maximum** - This is a hard limit
2. **Component descriptions MUST be 2-3 sentences maximum** - This is a hard limit
3. **NO "when to use" guidance in prop descriptions**
4. **NO usage examples in prop descriptions**
5. **NO redundant information**
6. **Focus on WHAT the prop does, not WHEN to use it**
7. **DO NOT start descriptions with "{ComponentName} - " prefix** - The generator strips this automatically

**TEXT QUALITY REQUIREMENTS:**
- Use single spaces between sentences (no double spacing)
- Keep descriptions direct and factual
- Remove filler words like "This prop is used for..."
- Budget: For each description, count sentences before committing

**BAD EXAMPLES (DO NOT DO THIS):**
```
/**
 * Array of options for client-side filtering. When provided, the component
 * filters these options client-side as the user types. The search matches
 * options whose labels start with the typed text (case-insensitive). Use this
 * for smaller datasets that can be loaded upfront. 
 */
```

**GOOD EXAMPLES (DO THIS):**
```
/**
 * Array of options for client-side filtering. Filters options as user types
 * (matches label start, case-insensitive).
 */
```

**DESCRIPTION LENGTH EXAMPLES:**
✅ 1 sentence: "Displays a loading spinner and disables the button."
✅ 2 sentences: "Displays a loading spinner and disables the button. Sets aria-busy to true."
❌ 3 sentences: Too long for prop description
❌ 4+ sentences: Way too long - violates conciseness requirements

## <action>

Use the `edit_file` or `write_to_file` tool to update TSDoc in:

1. **Main component file:** `packages/lsd/src/components/ui/{component-name}/{ComponentName}.tsx`
2. **Types file:** `packages/lsd/src/components/ui/{component-name}/types.ts` (if exists)

**Important: Always use edit_file or write_to_file to REPLACE existing TSDoc, not add to it.**

### Main Component TSDoc Structure:

```tsx
/**
 * {ComponentName} - Brief single-line description
 *
 * 2-3 sentences about what the component does. Focus on functionality,
 * not usage scenarios.
 *
 * @docSectionPageDescription
 * Brief single-line description used for the page header.
 *
 * @docSectionAbout
 * 2-3 sentences describing the component's purpose and key features.
 * This appears in the "About {Component}" section.
 *
 * @docSectionComposition
 * • Table - Main container with horizontal scroll
 * • TableHeader - Wraps column header rows
 *   • TableHead - Column header cell with bold text
 * • TableBody - Wraps data rows
 *   • TableRow - Individual table row with hover state
 *     • TableCell - Data cell with padding and alignment
 * • TableFooter - Optional footer for summaries
 * • TableCaption - Optional caption text
 * 
 * @docSectionAccessibilityKeyboard
 * • Key - Description
 * • Key - Description
 *
 * @docSectionAccessibilityAria
 * • ARIA attribute - Description
 *
 * @docSectionAccessibilityFocus
 * • Focus behavior description
 */
```

### Accessibility Section Examples:

**Keyboard Navigation:**
- Tab - Navigate to the component
- Enter or Space - Activate/select
- Arrow Up/Down - Navigate through options
- Escape - Close/dismiss

**ARIA Attributes:**
- role="combobox" - Identifies as combobox
- aria-expanded - Indicates open/closed state
- aria-controls - Links to controlled element
- aria-activedescendant - Identifies active option

**Focus Management:**
- Focus moves to first option when dropdown opens
- Focus returns to input when option selected
- Focus is trapped in dialog when open

**Rules for Composition Tag:**

1. Only include for components that have sub-components
2. Use bullet points (•) to list each sub-component
3. Indent nested components with additional • symbols to show hierarchy
4. Keep descriptions concise (1 sentence maximum)
5. Focus on the role/purpose of each sub-component
6. Important nesting levels should be clear from indentation

**Example: Table Component**

```tsx
/**
 * Table - Displays data in rows and columns
 *
 * Container for displaying structured data with proper headers and footers.
 * Encompasses multiple sub-components for building complete table layouts.
 *
 * @docSectionPageDescription
 * Displays data in rows and columns with built-in styling.
 *
 * @docSectionAbout
 * A container component for displaying structured data in rows and columns. Includes several sub-components (TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, and TableCaption) for building complete table layouts with proper styling. The table is wrapped in a scrollable container for responsive design.
 *
 * @docSectionComposition
 * • Table - Main container with horizontal scroll capability
 * • TableHeader - Wraps column header rows
 *   • TableHead - Column header cell with bold text and alignment
 * • TableBody - Wraps data rows
 *   • TableRow - Individual table row with hover background
 *     • TableCell - Data cell with consistent padding and vertical alignment
 * • TableFooter - Optional footer for summary information
 * • TableCaption - Optional caption for the table
 *
 * @docSectionAccessibilityKeyboard
 * • Tab - Navigate through interactive elements within table cells
 * • Arrow keys - Navigate interactive elements within rows when they have focus
 *
 * @docSectionAccessibilityAria
 * • Use scope attribute on th elements to define column or row headers
 * • Use caption element to provide a title for the table (via TableCaption)
 * • For sortable tables, aria-sort indicates sorting direction on headers
 *
 * @docSectionAccessibilityFocus
 * Tables follow standard HTML semantics. Keyboard navigation depends on interactive elements within cells. Focus moves through tab navigable elements within table cells in document order.
 */
```

### Component Export Tags (@exportAs)

**IMPORTANT: Components with sub-components must use `@exportAs` tags in their component files.**

For components that export multiple related sub-components, add `@exportAs` JSDoc tags in each component file's main JSDoc comment to identify which are the root component and which are sub-components:

**Syntax:**
```tsx
/**
 * ComponentName - Brief description
 *
 * Detailed description of the component.
 *
 * @exportAs root
 */
```

**Rules:**
1. Only components with sub-components need these tags
2. Root component must have `@exportAs root` tag in its JSDoc
3. Sub-components must have `@exportAs sub` tag in their JSDoc
4. Tags go in the component file's JSDoc, NOT in index.ts
5. This is required for the documentation generator to identify sub-components and validate that composition documentation exists

**Example: Input Group Component**

**Main Component (InputGroup.tsx):**
```tsx
/**
 * InputGroup - Groups inputs with buttons and text addons for composed form controls.
 *
 * A container that combines input fields with buttons or text elements into a single visual group.
 *
 * @docSectionPageDescription
 * Groups inputs with buttons and text addons for composed form controls.
 *
 * @docSectionAbout
 * A container that combines input fields with buttons or text elements into a single visual group.
 *
 * @exportAs root
 */
const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(...) => {};
```

**Subcomponent (InputGroupAddon.tsx):**
```tsx
/**
 * InputGroupAddon - Container for buttons, text, or other elements within an input group.
 *
 * Displayed alongside input fields with appropriate styling and alignment.
 *
 * @exportAs sub
 */
const InputGroupAddon = React.forwardRef<HTMLDivElement, InputGroupAddonProps>(...) => {};
```

**Failure to add these tags will result in:**
- Sub-components not being detected
- Missing API Reference entries for sub-components
- Generator NOT throwing an error about missing composition documentation (as expected)

### Prop Interface TSDoc Structure:

```tsx
export interface ComponentProps {
  /**
   * Brief description (1 sentence preferred, 2 maximum).
   *
   * Only essential information. No examples, no usage patterns.
   */
  propName: string;
}
```

## <verification>

Review your TSDoc against these requirements:

- [ ] Is the main description 2-3 sentences maximum?
- [ ] Are all prop descriptions 1-2 sentences maximum?
- [ ] Are there any "when to use" phrases? Remove them.
- [ ] Are there usage examples? Remove them.
- [ ] Are descriptions redundant? Simplify.
- [ ] Is accessibility information accurate from Step 2?
- [ ] Is `@docSectionPageDescription` included with brief single-line description?
- [ ] Is `@docSectionAbout` included with 2-3 sentence description?

## <checkpoint>

Answer before proceeding:
- [ ] Did you write concise descriptions (1-2 sentences)?
- [ ] Did you avoid "when to use" guidance?
- [ ] Did you add all required custom tags (PageDescription, About, Accessibility*)?
- [ ] Are all custom tags using correct format (no dots)?

---

# PRE-GENERATION: Example File Requirements

## <action>

Before running the documentation generator (Step 4), you MUST ensure ALL example files have the required `@docSection` tag.

## <verification>

Check each example file in `packages/lsd-docs/app/examples/{component-name}/`:
1. Does it have a TSDoc comment above `CODE`?
2. Is the tag exactly `@docSection` (capitalization matters)?
3. Is the value one of the valid options?
4. Are there NO spaces before the `@` symbol?
5. Is there a space between `@docSection` and the value?

## <mandatory>

**@docSection tags are MANDATORY.** The generator will FAIL if any example file is missing the tag or has an invalid value.

**Valid @docSection values:**
| Value | Section | Description |
|-------|---------|-------------|
| `usage` | Usage | Basic usage examples (simplest form) |
| `variant` | Variants | Visual style variants (ghost, outlined, underlined, filled, etc.) |
| `size` | Sizes | Size variations (xs, sm, md, lg, xl) |
| `feature` | Features | Features and capabilities (label, supporting text, types, etc.) |
| `state` | Features | State examples (disabled, error, loading, etc.) |
| `layout` | Features | Layout-related examples |
| `behavior` | Features | Behavior/composition examples |

**REQUIRED example file format:**
```tsx
'use client';

import { Component } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'md';

/**
 * @docSection usage
 * ← MANDATORY: Choose one of the values above
 */
export const CODE = `import { Component } from '@nipsys/lsd'

export function Example() {
  return (
    <Component prop="value" />
  );
}`;

export default function Example() {
  return <Component prop="value" />;
}
```

## <checkpoint>

Answer before proceeding:
- [ ] Do all example files have a TSDoc comment above `CODE`?
- [ ] Are all `@docSection` values valid?
- [ ] Are there any examples missing the tag?

## <errors>

**What happens without @docSection:**
```
Error: Missing @docSection tag in example basic. 
Please add a TSDoc comment above the CODE export with @docSection tag. 
Valid values: usage, variant, size, feature, state, layout, behavior.
```

**What happens with invalid value:**
```
Error: Invalid @docSection value "basic" in example basic. 
Valid values: usage, variant, size, feature, state, layout, behavior.
```

---

# STEP 4: Run Documentation Generator

## <action>

Use the `execute_command` tool to run the generator:

**From monorepo root:**
```bash
pnpm -w run docs:generate {component-name}
```

**Or from packages/lsd-docs:**
```bash
pnpm exec tsx scripts/generate.ts {component-name}
```

Replace `{component-name}` with the actual component name (e.g., `accordion`, `autocomplete`).

**Note:** The `docs:generate` script is defined in the monorepo root package.json and delegates to the lsd-docs package's `generate` script.

## <verification>

Check the console output for:
- Component found
- Props loaded
- Examples loaded
- Page generated successfully

Expected output should show:
```
Found component: {component-name}
Loaded X props
Loaded Y examples
Generated: packages/lsd-docs/app/components/{component-name}/page.tsx
```

## <checkpoint>

Answer before proceeding:
- [ ] Did the generator run successfully?
- [ ] How many props were loaded?
- [ ] How many examples were loaded?
- [ ] Was the page generated?

---

# STEP 5: Verify Generated Documentation

## <action>

Use the `read_file` tool to check the generated page:

`packages/lsd-docs/app/components/{component-name}/page.tsx`

## <verification>

Check these sections:

### 1. About Section
- [ ] Description appears correctly
- [ ] Description is concise (2-3 sentences)

### 2. Accessibility Section
- [ ] Keyboard Navigation section exists
- [ ] ARIA Attributes section exists
- [ ] Focus States section exists
- [ ] Content is from your TSDoc tags

### 3. API Reference
- [ ] All props are listed
- [ ] Type fields show clean type names (no absolute paths)
- [ ] Descriptions are concise (only in CardDescription)
- [ ] No duplicate descriptions

### 4. Page Structure
- [ ] Follows LSD design system conventions
- [ ] Uses LSD spacing variables
- [ ] Typography components used correctly

## <checkpoint>

Answer before proceeding:
- [ ] Is the description concise?
- [ ] Are all 3 accessibility sections present?
- [ ] Are prop types clean (no import paths)?
- [ ] Are descriptions not duplicated?
- [ ] Is the page structure correct?

---

# STEP 6: Final Validation

## <action>

Use the `execute_command` tool to build and check for errors:

```bash
pnpm build
```

## <verification>

- [ ] Build completes without errors
- [ ] No TypeScript errors in generated page
- [ ] Page can be opened without issues

## <final_checkpoint>

Complete this final checklist:
- [ ] Step 1: Identified Radix imports and built URLs ✓
- [ ] Step 2: Fetched and reviewed online documentation ✓
- [ ] Step 3: Generated concise TSDoc ✓
- [ ] Pre-Generation: Verified all examples have @docSection tags ✓
- [ ] Step 4: Ran documentation generator ✓
- [ ] Step 5: Verified generated documentation ✓
- [ ] Step 6: Final validation completed ✓

**ALL STEPS COMPLETE. Documentation generation successful.**

---

# TROUBLESHOOTING

## Issues and Solutions

### Generator shows "Failed to parse TSDoc, using defaults"

**Cause:** TSDoc syntax is incorrect

**Solution:**
1. Check that TSDoc uses `/** */` format (not `/* */`)
2. Verify all custom tags use alphanumeric names (no dots)
3. Ensure tags are: `@docSectionAccessibilityKeyboard`, `@docSectionAccessibilityAria`, `@docSectionAccessibilityFocus`, `@docSectionUsageSingleMode`, `@docSectionUsageMultipleMode`, or `@docSectionFeatures*`
4. Check that each custom tag is on its own line

### Type field shows absolute file paths

**Cause:** Generator bug - outputs absolute import paths

**Solution:** After generator runs, use sed to fix:
```bash
cd packages/lsd-docs/app/components/{component-name}
sed -i 's|import("/var/home/[^"]*")\.||g' page.tsx
```

### Descriptions appear twice

**Cause:** Generator bug - renders descriptions in both CardDescription and Typography

**Solution:** After generator runs, use sed to remove duplicates from API Reference section:
```bash
# Remove Default field and duplicate description items
sed -i '/<Typography variant="label1">/,/<strong>Default:<\/strong>/{<\/Typography>/!d}' page.tsx
```

### Feature content appears in wrong section

**Cause:** Generator not properly parsing `@docSectionFeatures*` tags

**Solution:** This is a known generator limitation. Feature tags may not create separate sections and content may appear in Focus States section.

**IMPORTANT:** Do NOT add `@docSectionFeatures*` tags to TSDoc until the generator is fixed. If you need to document features, include them in the main component description or avoid this tag class.

### PageHeader description includes component name

**Cause:** Generator includes "ComponentName - " prefix in description, making it redundant with title

**Solution:** After generator runs, use sed to remove the component name prefix:

```bash
cd packages/lsd-docs/app/components/{component-name}
# Remove "ComponentName - " from description attribute
sed -i 's/description="[^"]* - /description="/' page.tsx
```

### Prop descriptions are too verbose

**Cause:** Not following conciseness guidelines

**Solution:** Re-read STEP 3 conciseness requirements. Edit TSDoc to:
- Limit to 1-2 sentences per prop
- Remove "when to use" guidance
- Remove usage examples
- Remove redundant information

---

# EXAMPLE: Accordion Component

Here's a complete example following all steps:

## Step 1: Identify
- Import: `@radix-ui/react-accordion`
- Component: `accordion`
- URLs: Radix and shadcn accordion docs

## Step 2: Fetch
- Keyboard: Tab, Enter/Space, ArrowUp/Down, Home/End
- ARIA: role="region", aria-expanded, aria-controls, aria-level
- Focus: Moves to trigger on open, managed between triggers

## Step 3: TSDoc
```tsx
/**
 * Accordion - Collapsible component that displays multiple panels
 *
 * Vertically stacked list of items that can be expanded and collapsed.
 * Supports single (only one open) and multiple (multiple open) modes.
 *
 * @docSectionPageDescription
 * Collapsible component that displays multiple panels in a stack.
 *
 * @docSectionAbout
 * A vertically stacked list of items that can be expanded and collapsed. Supports single mode (only one panel open at a time) and multiple mode (multiple panels can be open simultaneously).
 *
 * @docSectionAccessibilityKeyboard
 * • Tab - Navigate through accordion triggers
 * • Enter or Space - Toggle the currently focused panel
 * • ArrowUp/Down - Move focus to previous/next trigger
 * • Home/End - Move focus to first/last trigger
 *
 * @docSectionAccessibilityAria
 * • role="region" is added to AccordionContent
 * • aria-expanded is managed on AccordionTrigger
 * • aria-controls links AccordionTrigger to AccordionContent
 *
 * @docSectionAccessibilityFocus
 * • Focus is moved to trigger when panel opens
 * • Focus can be moved between triggers using arrow keys
 */
```

```tsx
export interface AccordionProps {
  /**
   * Selection behavior for the accordion.
   *
   * Determines whether one or multiple panels can be open.
   */
  type?: 'single' | 'multiple';

  /**
   * Allows closing all panels when type is "single".
   *
   * When true, users can close all panels. Ignored when type is "multiple".
   */
  collapsible?: boolean;
}
```

## Step 4: Run
```bash
pnpm -w run docs:generate accordion
```

## Step 5: Verify
- Description is concise
- All accessibility sections present
- Props listed with clean types
- No duplicates

## Step 6: Final
```bash
pnpm build
```

---

# QUICK REFERENCE

## Custom Tags ( Exact Format Required)

- `@docSectionPageDescription` - Brief single-line description for page header
- `@docSectionAbout` - 2-3 sentence description for About section
- `@docSectionComposition` - Component composition with sub-components (optional)
- `@docSectionAccessibilityKeyboard` - Keyboard navigation shortcuts
- `@docSectionAccessibilityAria` - ARIA attributes used by component
- `@docSectionAccessibilityFocus` - Focus management behavior
- `@docSectionUsageSingleMode` - Single mode usage description (if applicable)
- `@docSectionUsageMultipleMode` - Multiple mode usage description (if applicable)
- `@docSectionFeatures*` (any name after Features) - Component features (if applicable)

## Common Keyboard Shortcuts

- Tab - Navigate to component
- Enter/Space - Activate/select
- ArrowUp/Down - Navigate options
- Escape - Close/dismiss
- Home/End - Jump to first/last

## Common ARIA Attributes

- role="combobox" - Combobox or similar
- aria-expanded - Open/closed state
- aria-controls - Linked element
- aria-activedescendant - Active option
- aria-label - Accessible label
- aria-describedby - Description reference

---

**Version:** 4.1.0
**Last Updated:** 2026-04-19
**Purpose:** AI agent instruction set for TSDoc generation and documentation production
**Changelog:**
- 4.1.0: Made @docSection tag mandatory with hard errors, added pre-generation step for example verification
- 4.0.0: Refactored to use @docSection annotations instead of complex logic
