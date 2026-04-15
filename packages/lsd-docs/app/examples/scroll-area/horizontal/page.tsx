/** biome-ignore-all lint/suspicious/noArrayIndexKey: Tolerate array index key for code examples */
'use client';

import { ScrollArea, ScrollBar, Typography } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { ScrollArea, ScrollBar, Typography } from '@nipsys/lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Horizontal ScrollArea with ScrollBar</Typography>
      <ScrollArea className="w-full whitespace-nowrap rounded-md border p-(--lsd-spacing-smaller)">
        <div className="flex w-max space-x-(--lsd-spacing-base)">
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
`;

export function Example() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) overflow-hidden">
      <Typography variant="label1">Horizontal ScrollArea with ScrollBar</Typography>
      <ScrollArea className="flex-auto whitespace-nowrap border p-(--lsd-spacing-smaller)">
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
