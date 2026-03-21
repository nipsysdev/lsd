'use client';

import { Input } from '@nipsys/shadcn-lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

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
  useSendThemeToIframes();

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
