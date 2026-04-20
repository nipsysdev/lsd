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
      variant="ghost"
      label="Search"
      type="search"
      placeholder="Search for anything..."
    />
  );
}`;

export function InputGhostExample() {
  useSendThemeToIframes();

  return (
    <Input variant="ghost" label="Search" type="search" placeholder="Search for anything..." />
  );
}

export default function Ghost() {
  return <InputGhostExample />;
}
