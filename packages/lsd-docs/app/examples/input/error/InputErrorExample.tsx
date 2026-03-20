'use client';

import { Input } from '@nipsys/shadcn-lsd';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { Input } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <Input
      label="Password"
      type="password"
      placeholder="Enter password"
      error
      supportingText="Password must be at least 8 characters."
    />
  );
}`;

export function InputErrorExample() {
  useInIframeThemeSync();

  return (
    <Input
      label="Password"
      type="password"
      placeholder="Enter password"
      error
      supportingText="Password must be at least 8 characters."
    />
  );
}
