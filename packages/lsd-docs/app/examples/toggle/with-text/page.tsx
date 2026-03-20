'use client';

import { Toggle, Typography } from '@nipsys/shadcn-lsd';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { Toggle, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
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
  useInIframeThemeSync();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
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
