'use client';

import { Separator, Typography } from '@nipsys/shadcn-lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Separator, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex items-center gap-(--lsd-spacing-base)">
      <div className="flex flex-col items-center gap-(--lsd-spacing-smaller)">
        <div className="size-(--lsd-spacing-2x) rounded-full bg-(--lsd-color-primary)"></div>
        <Typography variant="body2">Item 1</Typography>
      </div>
      <Separator orientation="vertical" className="h-(--lsd-spacing-5x)" />
      <div className="flex flex-col items-center gap-(--lsd-spacing-smaller)">
        <div className="size-(--lsd-spacing-2x) rounded-full bg-(--lsd-color-accent)"></div>
        <Typography variant="body2">Item 2</Typography>
      </div>
      <Separator orientation="vertical" className="h-(--lsd-spacing-5x)" />
      <div className="flex flex-col items-center gap-(--lsd-spacing-smaller)">
        <div className="size-(--lsd-spacing-2x) rounded-full bg-(--lsd-color-destructive)"></div>
        <Typography variant="body2">Item 3</Typography>
      </div>
    </div>
  );
}
`;

export function Example() {
  useSendThemeToIframes();

  return (
    <div className="flex items-center gap-(--lsd-spacing-base)">
      <div className="flex flex-col items-center gap-(--lsd-spacing-smaller)">
        <div className="size-(--lsd-spacing-2x) rounded-full bg-(--lsd-color-primary)" />
        <Typography variant="body2">Item 1</Typography>
      </div>
      <Separator orientation="vertical" className="h-(--lsd-spacing-5x)" />
      <div className="flex flex-col items-center gap-(--lsd-spacing-smaller)">
        <div className="size-(--lsd-spacing-2x) rounded-full bg-(--lsd-color-accent)" />
        <Typography variant="body2">Item 2</Typography>
      </div>
      <Separator orientation="vertical" className="h-(--lsd-spacing-5x)" />
      <div className="flex flex-col items-center gap-(--lsd-spacing-smaller)">
        <div className="size-(--lsd-spacing-2x) rounded-full bg-(--lsd-color-destructive)" />
        <Typography variant="body2">Item 3</Typography>
      </div>
    </div>
  );
}

export default function VerticalPage() {
  return <Example />;
}
