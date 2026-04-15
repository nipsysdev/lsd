'use client';

import { Input } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Input } from '@nipsys/lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Input variant="outlined" label="Outlined" placeholder="Outlined input" />
      <Input variant="underlined" label="Underlined" placeholder="Underlined input" />
    </div>
  );
}`;

export function InputVariantsExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Input variant="outlined" label="Outlined" placeholder="Outlined input" />
      <Input variant="underlined" label="Underlined" placeholder="Underlined input" />
    </div>
  );
}

export default function Variants() {
  return <InputVariantsExample />;
}
