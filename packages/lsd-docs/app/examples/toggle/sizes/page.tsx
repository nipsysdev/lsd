'use client';

import { Toggle, Typography } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'md';

export const CODE = `import { Toggle, Typography } from '@nipsys/lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Small Size</Typography>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Toggle size="sm" aria-label="Toggle bold">B</Toggle>
        <Toggle size="sm" pressed aria-label="Toggle italic">I</Toggle>
        <Toggle size="sm" aria-label="Toggle underline">U</Toggle>
      </div>
    </div>
  );
}`;

export function ToggleSizesExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Small Size</Typography>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Toggle size="sm" aria-label="Toggle bold">
          B
        </Toggle>
        <Toggle size="sm" pressed aria-label="Toggle italic">
          I
        </Toggle>
        <Toggle size="sm" aria-label="Toggle underline">
          U
        </Toggle>
      </div>
    </div>
  );
}

export default function Sizes() {
  return <ToggleSizesExample />;
}
