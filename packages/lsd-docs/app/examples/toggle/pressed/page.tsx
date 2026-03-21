'use client';

import { Toggle, Typography } from '@nipsys/shadcn-lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Toggle, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Pressed State</Typography>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Toggle pressed aria-label="Toggle bold">B</Toggle>
        <Toggle aria-label="Toggle italic">I</Toggle>
        <Toggle pressed aria-label="Toggle underline">U</Toggle>
      </div>
    </div>
  );
}`;

export function TogglePressedExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Pressed State</Typography>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Toggle pressed aria-label="Toggle bold">
          B
        </Toggle>
        <Toggle aria-label="Toggle italic">I</Toggle>
        <Toggle pressed aria-label="Toggle underline">
          U
        </Toggle>
      </div>
    </div>
  );
}

export default function Pressed() {
  return <TogglePressedExample />;
}
