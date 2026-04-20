'use client';

import { Input } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'sm';

/**
 * @docSection state
 */
export const CODE = `import { Input } from '@nipsys/lsd'

export function Example() {
  return (
    <Input label="Disabled" placeholder="Can't edit this" disabled />
  );
}`;

export function InputDisabledExample() {
  useSendThemeToIframes();

  return <Input label="Disabled" placeholder="Can't edit this" disabled />;
}

export default function Disabled() {
  return <InputDisabledExample />;
}
