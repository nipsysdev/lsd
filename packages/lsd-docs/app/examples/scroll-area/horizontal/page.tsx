/** biome-ignore-all lint/suspicious/noArrayIndexKey: Tolerate array index key for code examples */
'use client';

import { ScrollArea, ScrollBar, Typography } from '@nipsys/shadcn-lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { ScrollArea, ScrollBar, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Horizontal ScrollArea with ScrollBar</Typography>
      <ScrollArea className="w-full whitespace-nowrap rounded-md border p-(--lsd-spacing-base)">
        <div className="flex w-max space-x-(--lsd-spacing-base)">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-(--lsd-spacing-smaller)">
              <div className="size-(--lsd-spacing-5x) rounded-lg bg-(--lsd-color-surface-alt)"></div>
              <Typography variant="body2">Card {i + 1}</Typography>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
`;

export function Example() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Horizontal ScrollArea with ScrollBar</Typography>
      <ScrollArea className="flex-auto whitespace-nowrap border p-(--lsd-spacing-base)">
        <div className="flex gap-x-(--lsd-spacing-base)">
          {[...Array(15)].map((_, i) => (
            <Typography key={i} variant="body2">
              Item {i + 1}
            </Typography>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}

export default function ScrollAreaHorizontalPage() {
  return <Example />;
}
