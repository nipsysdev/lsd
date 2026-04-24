'use client';

import { Input } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'md';

/**
 * @docSection usage
 */
export const CODE = `import { Input } from '@nipsys/lsd'

export function Example() {
  return (
    <Input
      label="Username"
      placeholder="Enter your username"
    />
  );
}`;

export function InputDefaultExample() {
  useSendThemeToIframes();

  return <Input label="Username" placeholder="Enter your username" />;
}

export default function Default() {
  return <InputDefaultExample />;
}
