'use client';

import { Toggle, Typography } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'md';

export const CODE = `import { Toggle, Typography } from '@nipsys/lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">With Text Labels</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-smaller)">
        <Toggle pressed aria-label="Toggle bold">Bold</Toggle>
        <Toggle aria-label="Toggle italic">Italic</Toggle>
        <Toggle pressed aria-label="Toggle underline">Underline</Toggle>
      </div>
    </div>
  );
}`;

export function ToggleWithTextExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">With Text Labels</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-smaller)">
        <Toggle pressed aria-label="Toggle bold">
          Bold
        </Toggle>
        <Toggle aria-label="Toggle italic">Italic</Toggle>
        <Toggle pressed aria-label="Toggle underline">
          Underline
        </Toggle>
      </div>
    </div>
  );
}

export default function WithText() {
  return <ToggleWithTextExample />;
}
