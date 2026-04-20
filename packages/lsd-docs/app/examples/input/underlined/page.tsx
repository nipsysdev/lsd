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
      variant="underlined"
      label="Password"
      type="password"
      placeholder="Enter your password"
    />
  );
}`;

export function InputUnderlinedExample() {
  useSendThemeToIframes();

  return (
    <Input
      variant="underlined"
      label="Password"
      type="password"
      placeholder="Enter your password"
    />
  );
}

export default function Underlined() {
  return <InputUnderlinedExample />;
}
