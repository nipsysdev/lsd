'use client';

import { Input } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'md';

/**
 * @docSection variant
 */
export const CODE = `import { Input } from '@nipsys/lsd'

export function Example() {
  return (
    <Input
      variant="outlined"
      label="Email Address"
      placeholder="you@example.com"
    />
  );
}`;

export function InputOutlinedExample() {
  useSendThemeToIframes();

  return <Input variant="outlined" label="Email Address" placeholder="you@example.com" />;
}

export default function Outlined() {
  return <InputOutlinedExample />;
}
