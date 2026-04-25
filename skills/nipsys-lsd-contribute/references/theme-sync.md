# Theme Sync System

Synchronized theme management between documentation pages and iframe examples.

## Architecture

```
Parent (Doc Page)
├─ useThemeSync() - detects theme changes
└─ useSendThemeToIframes(ref1, ref2, ...) - sends to iframes

↓ postMessage

Child (Example Page)
└─ useSendThemeToIframes() - receives and applies theme
```

## Message Protocol

**Parent → Iframe:**
```typescript
type ExampleParams = {
  theme?: 'light' | 'dark';
  accent?: 'monochrome' | 'teal' | 'nord' | 'terracotta' | 'catppuccin';
  font?: 'monospace' | 'sans-serif' | 'serif';
};

iframe.contentWindow.postMessage({
  type: 'example-params',
  data: { theme: 'dark', accent: 'teal', font: 'monospace' }
}, '*');
```

## Parent Implementation

### Step 1: Create refs for iframes
```tsx
'use client';

import { useRef } from 'react';
import { useSendThemeToIframes } from '@/components/docs/useSendIframes';

export default function ComponentPage() {
  const iframeRefs = {
    basic: useRef<HTMLIFrameElement>(null),
    variant1: useRef<HTMLIFrameElement>(null),
    variant2: useRef<HTMLIFrameElement>(null),
  };

  useSendThemeToIframes(
    iframeRefs.basic,
    iframeRefs.variant1,
    iframeRefs.variant2
  );

  return (
    <IframeExample
      ref={iframeRefs.basic}
      src="/examples/component/basic"
    />
  );
}
```

## Child Implementation

Example component MUST call `useSendThemeToIframes()` with NO arguments:

```tsx
'use client';

import { Button } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendIframes';

export const SIZE = 'md';

/** @docSection usage */
export const CODE = `...`;

function ButtonBasicExample() {
  useSendThemeToIframes();  // REQUIRED - no arguments
  return <Button>Button</Button>;
}

export default function Basic() {
  return <ButtonBasicExample />;
}
```

## Theme Application

**Light/Dark:**
```typescript
document.documentElement.classList.toggle('dark');
```

**Accent theme:**
```typescript
document.documentElement.setAttribute('data-theme', 'teal');
// or remove for monochrome
document.documentElement.removeAttribute('data-theme');
```

**Font:**
```typescript
document.documentElement.classList.add('font-serif');
// or font-sans, font-mono
```

## When to Call useSendThemeToIframes

✅ **DO call in:**
- Documentation pages with iframes: `useSendThemeToIframes(ref1, ref2, ...)`
- Example pages: `useSendThemeToIframes()` (no arguments)

❌ **DON'T call in:**
- Regular pages without examples
- Server components (requires 'use client')

## Common Issues

| Issue | Cause | Solution |
|-------|-------|---------|
| Iframe wrong theme | Theme changed before load | Load listener handles automatically |
| No sync | Missing useSendThemeToIframes | Add hook call |
| Console warnings | Null/undefined refs | Filter refs before passing |

## Key Features

- **Automatic detection:** MutationObserver detects DOM changes
- **Lazy load support:** Sends theme when iframe loads
- **SSR safe:** Handles window undefined
- **Multiple iframes:** Handles any number of iframes
- **Duplicate prevention:** Tracks which iframes have listeners
