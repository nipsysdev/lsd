'use client';

import { Input } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Input } from '@nipsys/lsd';

export function Example() {
  return <Input label="Full Name" placeholder="Enter your name" />;
}`;

export function InputLabelExample() {
  useSendThemeToIframes();

  return <Input label="Full Name" placeholder="Enter your name" />;
}

export default function Label() {
  return <InputLabelExample />;
}
