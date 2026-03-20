'use client';

import { Input } from '@nipsys/shadcn-lsd';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { Input } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Input variant="outlined" label="Outlined" placeholder="Outlined input" />
      <Input variant="underlined" label="Underlined" placeholder="Underlined input" />
    </div>
  );
}`;

export function InputVariantsExample() {
  useInIframeThemeSync();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Input variant="outlined" label="Outlined" placeholder="Outlined input" />
      <Input variant="underlined" label="Underlined" placeholder="Underlined input" />
    </div>
  );
}
