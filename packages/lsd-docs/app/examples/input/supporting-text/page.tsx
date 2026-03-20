'use client';

import { Input } from '@nipsys/shadcn-lsd';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { Input } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <Input
      label="Email"
      placeholder="you@example.com"
      supportingText="We'll never share your email with anyone else."
    />
  );
}`;

export function InputSupportingTextExample() {
  useInIframeThemeSync();

  return (
    <Input
      label="Email"
      placeholder="you@example.com"
      supportingText="We'll never share your email with anyone else."
    />
  );
}

export default function SupportingText() {
  return <InputSupportingTextExample />;
}
