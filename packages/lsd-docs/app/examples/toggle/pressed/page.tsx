'use client';

import { Toggle, Typography } from '@nipsys/shadcn-lsd';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { Toggle, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
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
  useInIframeThemeSync();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
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
