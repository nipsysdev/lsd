'use client';

import { Toggle, Typography } from '@nipsys/shadcn-lsd';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { Toggle, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Typography variant="label1">Basic Toggle</Typography>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Toggle aria-label="Toggle bold">B</Toggle>
        <Toggle aria-label="Toggle italic">I</Toggle>
        <Toggle aria-label="Toggle underline">U</Toggle>
      </div>

      <Typography variant="label1">Pressed State</Typography>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Toggle pressed aria-label="Toggle bold">B</Toggle>
        <Toggle aria-label="Toggle italic">I</Toggle>
        <Toggle pressed aria-label="Toggle underline">U</Toggle>
      </div>

      <Typography variant="label1">With Text Labels</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-smaller)">
        <Toggle pressed aria-label="Toggle bold">
          Bold
        </Toggle>
        <Toggle aria-label="Toggle italic">
          Italic
        </Toggle>
        <Toggle pressed aria-label="Toggle underline">
          Underline
        </Toggle>
      </div>

      <Typography variant="label1">Small Size</Typography>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Toggle size="sm" aria-label="Toggle bold">B</Toggle>
        <Toggle size="sm" pressed aria-label="Toggle italic">I</Toggle>
        <Toggle size="sm" aria-label="Toggle underline">U</Toggle>
      </div>
    </div>
  );
}`;

export function ToggleExample() {
  useInIframeThemeSync();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Typography variant="label1">Basic Toggle</Typography>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Toggle aria-label="Toggle bold">B</Toggle>
        <Toggle aria-label="Toggle italic">I</Toggle>
        <Toggle aria-label="Toggle underline">U</Toggle>
      </div>

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
