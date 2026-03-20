# shadcn-lsd Documentation Site TODO

## Priority Legend
- 🚨 **P0** — Critical blocker, must do soon
- 🔴 **P1** — High priority, important improvements
- 🟡 **P2** — Medium priority, nice to have
- 🟢 **P3** — Low priority, deferred

---

## Project 1: Split Monolithic Examples (13 files)

**Pattern:** Refactor large example files showing multiple features into focused files (one file per feature/state).
**Reference:** Input refactoring (1 file → 7 focused files)

### 🚨 P0 — Highest Complexity

#### 1. ~~Split SonnerExample~~ ✅ COMPLETED (38f29df)
**File:** `packages/lsd-docs/app/examples/sonner/SonnerExample.tsx` (296 lines)
**Split into:**
- `toast-types/ToastTypesExample.tsx`
- `duration/ToastDurationExample.tsx`
- `positions/ToastPositionsExample.tsx`
- `actions/ToastActionsExample.tsx`
- `persistent/ToastPersistentExample.tsx`
- `promise/ToastPromiseExample.tsx`
- `rich/ToastRichExample.tsx`
**Pages to update:** Sonner component page (update imports and IframeExample refs)

---

#### 2. ~~Split TooltipExample~~ ✅ COMPLETED (aa0c849)
**File:** `packages/lsd-docs/app/examples/tooltip/TooltipExample.tsx` (166 lines)
**Split into:**
- `basic/TooltipBasicExample.tsx`
- `with-icon/TooltipWithIconExample.tsx`
- `positions/TooltipPositionsExample.tsx`
**Pages to update:** Tooltip component page

---

#### 3. ~~Split SkeletonExample~~ ✅ COMPLETED (7fdde43)
**File:** `packages/lsd-docs/app/examples/skeleton/SkeletonExample.tsx` (91 lines)
**Split into:**
- `card/SkeletonCardExample.tsx`
- `avatar/SkeletonAvatarExample.tsx`
- `list/SkeletonListExample.tsx`
- `sizes/SkeletonSizesExample.tsx`
**Pages to update:** Skeleton component page

---

### 🔴 P1 — High Priority

#### 4. ~~Split ToggleExample~~ ✅ COMPLETED (1e2454f)
**File:** `packages/lsd-docs/app/examples/toggle/ToggleExample.tsx` (96 lines)
**Split into:**
- `basic/ToggleBasicExample.tsx`
- `pressed/TogglePressedExample.tsx`
- `with-text/ToggleWithTextExample.tsx`
- `sizes/ToggleSizesExample.tsx`

#### 5. ~~Split ToggleGroupExample~~ ✅ COMPLETED (89dbb09)
**File:** `packages/lsd-docs/app/examples/toggle-group/ToggleGroupExample.tsx` (98 lines)
**Split into:**
- `single/ToggleGroupSingleExample.tsx`
- `multiple/ToggleGroupMultipleExample.tsx`
- `sizes/ToggleGroupSizesExample.tsx`

#### 6. Split CheckboxExample
**File:** `packages/lsd-docs/app/examples/checkbox/CheckboxExample.tsx` (123 lines)
**Split into:**
- `basic/CheckboxBasicExample.tsx`
- `controlled/CheckboxControlledExample.tsx`
- `with-label/CheckboxWithLabelExample.tsx`

#### 7. Split ProgressFeaturesExample
**File:** `packages/lsd-docs/app/examples/progress/features/ProgressFeaturesExample.tsx` (89 lines)
**Split into:**
- `indeterminate/ProgressIndeterminateExample.tsx`
- `paused/ProgressPausedExample.tsx`
- `colors/ProgressColorsExample.tsx`
- `sizes/ProgressSizesExample.tsx`

#### 8. Split AutocompleteFeaturesExample
**File:** `packages/lsd-docs/app/examples/autocomplete/features/AutocompleteFeaturesExample.tsx` (56 lines)
**Split into:**
- `icon/AutocompleteIconExample.tsx`
- `clearable/AutocompleteClearableExample.tsx`
- `error/AutocompleteErrorExample.tsx`
- `disabled/AutocompleteDisabledExample.tsx`
**(Basic already exists: `packages/lsd-docs/app/examples/autocomplete/basic/AutocompleteBasicExample.tsx`)**

#### 9. Split SeparatorExample
**File:** `packages/lsd-docs/app/examples/separator/SeparatorExample.tsx` (114 lines)
**Split into:**
- `horizontal/SeparatorHorizontalExample.tsx`
- `vertical/SeparatorVerticalExample.tsx`
- `with-text/SeparatorWithTextExample.tsx`

#### 10. Split SelectVariantsExample
**File:** `packages/lsd-docs/app/examples/select/variants/SelectVariantsExample.tsx` (131 lines)
**Split into:**
- `grouped/SelectGroupedExample.tsx`
- `controlled/SelectControlledExample.tsx`
**(Basic already exists: `packages/lsd-docs/app/examples/select/basic/SelectBasicExample.tsx`)**

---

### 🟡 P2 — Medium Priority

#### 11. Split ScrollAreaExample
**File:** `packages/lsd-docs/app/examples/scroll-area/ScrollAreaExample.tsx` (102 lines)
**Split into:**
- `basic/ScrollAreaBasicExample.tsx`
- `horizontal/ScrollAreaHorizontalExample.tsx`
- `both/ScrollAreaBothExample.tsx`

#### 12. Split SheetExample
**File:** `packages/lsd-docs/app/examples/sheet/SheetExample.tsx` (126 lines)
**Split into:**
- `basic/SheetBasicExample.tsx`
- `left/SheetLeftExample.tsx`

#### 13. Split AccordionExample
**File:** `packages/lsd-docs/app/examples/accordion/AccordionExample.tsx` (118 lines)
**Split into:**
- `basic/AccordionBasicExample.tsx`
- `multiple/AccordionMultipleExample.tsx`

**Estimated work:** 13 files → ~50 focused example files

---

## Project 2: Extract Inline Examples to IframeExample (6 pages)

**Pattern:** Convert inline component examples in documentation pages to separate iframe examples.

### 🚨 P0 — Most Inline Examples

#### 14. ~~Extract Tabs Inline Examples~~ ✅ COMPLETED (ddad4fe)
**Page:** `packages/lsd-docs/app/components/tabs/page.tsx`
**Inline examples to extract:**
- Sizes (3 examples) → `examples/tabs/sizes/TabsSizesExample.tsx`
- Full Width → `examples/tabs/full-width/TabsFullWidthExample.tsx`
- Bordered → `examples/tabs/bordered/TabsBorderedExample.tsx`
- With Icons (3 examples) → `examples/tabs/with-icons/TabsWithIconsExample.tsx`
- Disabled → `examples/tabs/disabled/TabsDisabledExample.tsx`

---

#### 15. ~~Extract Select Inline Examples~~ ✅ COMPLETED (22c3316)
**Page:** `packages/lsd-docs/app/components/select/page.tsx`
**Inline examples to extract:**
- Sizes (2 examples) → `examples/select/sizes/SelectSizesExample.tsx`
- Basic Usage (with state) → `examples/select/controlled-basic/SelectControlledBasicExample.tsx`
- Grouped Items → `examples/select/grouped/SelectGroupedExample.tsx` (may overlap with SelectVariantsExample split)
- With Separator → `examples/select/with-separator/SelectWithSeparatorExample.tsx`
- Disabled Items → `examples/select/disabled/SelectDisabledExample.tsx`
- Controlled Component → `examples/select/controlled/SelectControlledExample.tsx` (may overlap with SelectVariantsExample split)

---

### 🔴 P1

#### 16. Extract Menubar Inline Examples
**Page:** `packages/lsd-docs/app/components/menubar/page.tsx`
**Inline examples to extract:**
- Submenus → `examples/menubar/submenus/MenubarSubmenusExample.tsx`
- Destructive Items → `examples/menubar/destructive/MenubarDestructiveExample.tsx`
- Labels and Separators → `examples/menubar/labels/MenubarLabelsExample.tsx`
- Inset Items → `examples/menubar/inset/MenubarInsetExample.tsx`
- Keyboard Shortcuts → `examples/menubar/shortcuts/MenubarShortcutsExample.tsx`

---

#### 17. Extract Button-Group Inline Examples
**Page:** `packages/lsd-docs/app/components/button-group/page.tsx`
**Inline examples to extract:**
- Orientation (horizontal/vertical) → `examples/button-group/orientation/ButtonGroupOrientationExample.tsx`
- With Separators → `examples/button-group/separators/ButtonGroupSeparatorsExample.tsx`
- With Text Labels → `examples/button-group/text/ButtonGroupTextExample.tsx`
- Different Button Variants → `examples/button-group/mixed/ButtonGroupMixedExample.tsx`
- Icon Buttons → `examples/button-group/icons/ButtonGroupIconsExample.tsx`

---

### 🟡 P2

#### 18. Extract Button Inline Examples
**Page:** `packages/lsd-docs/app/components/button/page.tsx`
**Inline examples to extract:**
- Full Width → `examples/button/full-width/ButtonFullWidthExample.tsx`
- Disabled State → `examples/button/disabled/ButtonDisabledExample.tsx`
- asChild/Link Button → `examples/button/as-child/ButtonAsChildExample.tsx`

---

#### 19. Extract Switch Inline Examples
**Page:** `packages/lsd-docs/app/components/switch/page.tsx`
**Inline examples to extract:**
- Sizes → `examples/switch/sizes/SwitchSizesExample.tsx`

**Estimated work:** 6 pages → ~25 inline examples to extract

---

## Project 3: Other Improvements

#### 20. Refactoring Opportunities (from KiloCode Analysis) 🟡 P2
**Rename misnamed hooks:**
- `useIframeThemeSync` → `useSendThemeToIframes` (it *sends* messages, doesn't sync themes)
- Description: More accurate naming for clarity

**Split `useIframeSync.ts`:**
- Currently contains both listener (iframe-side) and sender (page-side) functions
- Suggest: `useIframeListener.ts` + `sendToIframe.ts`

---

#### 21. Icon Consistency Check 🟢 P3
**Task:** Ensure all examples use consistent Phosphor icon imports
- Some use `require()`, some use `import`
- Standardize to: `import { PlusIcon } from '@phosphor-icons/react'`

---

## Project 3: Remove Redundant Example Page Wrappers (54 files) 🚨 P0

**Pattern:** All example `page.tsx` files follow the same useless indirection:

```tsx
'use client';

import { XExample } from './XExample';

export default function XPage() {
  return <XExample />;
}
```

**Refactoring:** Merge Example.tsx content directly into page.tsx and delete redundant Example.tsx files.

### All 54 Identified Redundant Pairs

#### Depth 1 (Direct component examples — 14 pairs)
1. `accordion/page.tsx` → `AccordionExample.tsx`
2. `button-group/page.tsx` → `ButtonGroupExample.tsx`
3. `checkbox/page.tsx` → `CheckboxExample.tsx`
4. `menubar/page.tsx` → `MenubarExample.tsx`
5. `popover/page.tsx` → `PopoverExample.tsx`
6. `scroll-area/page.tsx` → `ScrollAreaExample.tsx`
7. `separator/page.tsx` → `SeparatorExample.tsx`
8. `sheet/page.tsx` → `SheetExample.tsx`
9. `skeleton/page.tsx` → `SkeletonExample.tsx`
10. `sonner/page.tsx` → `SonnerExample.tsx`
11. `toggle/page.tsx` → `ToggleExample.tsx`
12. `toggle-group/page.tsx` → `ToggleGroupExample.tsx`
13. `tooltip/page.tsx` → `TooltipExample.tsx`

#### Depth 2 (Component subfolders — 41 pairs)

**Badge (7):**
14. `badge/basic/page.tsx` → `BadgeBasicExample.tsx`
15. `badge/dismissible/page.tsx` → `BadgeDismissibleExample.tsx`
16. `badge/dots/page.tsx` → `BadgeDotsExample.tsx`
17. `badge/features/page.tsx` → `BadgeFeaturesExample.tsx`
18. `badge/interactive/page.tsx` → `BadgeInteractiveExample.tsx`
19. `badge/sizes/page.tsx` → `BadgeSizesExample.tsx`
20. `badge/variants/page.tsx` → `BadgeVariantsExample.tsx`

**Autocomplete (4):**
21. `autocomplete/basic/page.tsx` → `AutocompleteBasicExample.tsx`
22. `autocomplete/features/page.tsx` → `AutocompleteFeaturesExample.tsx`
23. `autocomplete/sizes/page.tsx` → `AutocompleteSizesExample.tsx`
24. `autocomplete/variants/page.tsx` → `AutocompleteVariantsExample.tsx`

**Button (4):**
25. `button/icons/page.tsx` → `ButtonIconsExample.tsx`
26. `button/loading/page.tsx` → `ButtonLoadingExample.tsx`
27. `button/sizes/page.tsx` → `ButtonSizesExample.tsx`
28. `button/variants/page.tsx` → `ButtonVariantsExample.tsx`

**Command (4):**
29. `command/basic/page.tsx` → `CommandBasicExample.tsx`
30. `command/dialog/page.tsx` → `CommandDialogExample.tsx`
31. `command/groups/page.tsx` → `CommandGroupsExample.tsx`
32. `command/shortcuts/page.tsx` → `CommandShortcutsExample.tsx`

**Input (7):**
33. `input/disabled/page.tsx` → `InputDisabledExample.tsx`
34. `input/error/page.tsx` → `InputErrorExample.tsx`
35. `input/label/page.tsx` → `InputLabelExample.tsx`
36. `input/sizes/page.tsx` → `InputSizesExample.tsx`
37. `input/supporting-text/page.tsx` → `InputSupportingTextExample.tsx`
38. `input/types/page.tsx` → `InputTypesExample.tsx`
39. `input/variants/page.tsx` → `InputVariantsExample.tsx`

**Label (3):**
40. `label/basic/page.tsx` → `LabelBasicExample.tsx`
41. `label/sizes/page.tsx` → `LabelSizesExample.tsx`
42. `label/variants/page.tsx` → `LabelVariantsExample.tsx`

**Progress (2):**
43. `progress/basic/page.tsx` → `ProgressBasicExample.tsx`
44. `progress/features/page.tsx` → `ProgressFeaturesExample.tsx`

**Select (2):**
45. `select/basic/page.tsx` → `SelectBasicExample.tsx`
46. `select/variants/page.tsx` → `SelectVariantsExample.tsx`

**Switch (2):**
47. `switch/basic/page.tsx` → `SwitchBasicExample.tsx`
48. `switch/controlled/page.tsx` → `SwitchControlledExample.tsx`

**Tabs (2):**
49. `tabs/basic/page.tsx` → `TabsBasicExample.tsx`
50. `tabs/controlled/page.tsx` → `TabsControlledExample.tsx`

**Others (7):**
51. `card/basic/page.tsx` → `CardBasicExample.tsx`
52. `alert-dialog/basic/page.tsx` → `AlertDialogBasicExample.tsx`
53. `dialog/basic/page.tsx` → `DialogBasicExample.tsx`
54. `sidebar/basic/page.tsx` → `SidebarBasicExample.tsx`

---

## Project 4: Other Improvements

#### 55. Refactoring Opportunities (from KiloCode Analysis) 🟡 P2

**Recommended starting order:**
1. 🚨 **Project 1.1** — Split SonnerExample (highest complexity, biggest win)
2. 🚨 **Project 2.1** — Extract Tabs inline examples (most inline examples)
3. 🚨 **Project 1.2** — Split TooltipExample
4. 🔴 **Project 1.4** — Split ToggleExample
5. 🔴 **Project 2.2** — Extract Select inline examples

---

**Last updated:** 2026-03-20
下次更新时，按完成状态更新已完成的项目。


---

## Summary

| Project | Count | Estimated Work |
|---------|-------|----------------|
| **Project 1: Split Monolithic Examples** | 13 files | ~50 new example files |
| **Project 2: Extract Inline Examples** | 6 pages | ~25 new example files |
| **Project 3: Remove Redundant Example Wrappers** | 54 pairs | 54 Example.tsx files deleted |
| **Project 4: Other Improvements** | 2 tasks | Minor refactoring |
| **Total** | 24 tasks | 54 deletions + ~75 new files + refactoring |

**Recommended starting order:**
1. 🚨 **Project 3** — Remove redundant Example wrappers (biggest immediate cleanup)
2. 🚨 **Project 1.1** — Split SonnerExample (highest complexity, biggest win)
3. 🚨 **Project 2.1** — Extract Tabs inline examples (most inline examples)
4. 🚨 **Project 1.2** — Split TooltipExample
5. 🔴 **Project 1.4** — Split ToggleExample
6. 🔴 **Project 2.2** — Extract Select inline examples

---

**Last updated:** 2026-03-20
