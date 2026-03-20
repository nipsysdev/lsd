'use client';

import { Input } from '@nipsys/shadcn-lsd';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { Input } from '@nipsys/shadcn-lsd';

export function Example() {
  return <Input label="Full Name" placeholder="Enter your name" />;
}`;

export function InputLabelExample() {
  useInIframeThemeSync();

  return <Input label="Full Name" placeholder="Enter your name" />;
}
