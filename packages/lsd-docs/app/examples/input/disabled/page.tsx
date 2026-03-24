'use client';

import { Input } from '@nipsys/shadcn-lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Input } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Input label="Disabled" placeholder="Can't edit this" disabled />
      <Input
        variant="outlined"
        label="Also Disabled"
        placeholder="Can't edit this either"
        disabled
      />
    </div>
  );
}`;

export function InputDisabledExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Input label="Disabled" placeholder="Can't edit this" disabled />
      <Input
        variant="outlined"
        label="Also Disabled"
        placeholder="Can't edit this either"
        disabled
      />
    </div>
  );
}

export default function Disabled() {
  return <InputDisabledExample />;
}
