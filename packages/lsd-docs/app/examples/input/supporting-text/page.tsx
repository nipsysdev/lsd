'use client';

import { Input } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'md';

/**
 * @docSection feature
 */
export const CODE = `import { Input } from '@nipsys/lsd';

export const SIZE = 'md';

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
