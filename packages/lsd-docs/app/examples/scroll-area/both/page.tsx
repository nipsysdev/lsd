/** biome-ignore-all lint/suspicious/noArrayIndexKey: Tolerate array index key for code examples */
'use client';

import { ScrollArea, ScrollBar, Typography } from '@nipsys/shadcn-lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { ScrollArea, ScrollBar, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Both Orientations</Typography>
      <ScrollArea className="h-(--lsd-spacing-8x) w-full rounded-md border p-(--lsd-spacing-base)">
        <div className="flex flex-col gap-(--lsd-spacing-base)">
          {[...Array(10)].map((_, row) => (
            <div key={row} className="flex gap-(--lsd-spacing-base)">
              {[...Array(20)].map((_, col) => (
                <Typography key={col} variant="body2" className="shrink-0">
                  Item {row + 1}-{col + 1}
                </Typography>
              ))}
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
    <div className="flex flex-col gap-(--lsd-spacing-base) overflow-hidden">
      <Typography variant="label1">Both Orientations</Typography>
      <ScrollArea className="flex-auto h-full border p-(--lsd-spacing-base) overflow-hidden">
        <div className="flex flex-col gap-(--lsd-spacing-base)">
          {[...Array(10)].map((_, row) => (
            <div key={row} className="flex gap-(--lsd-spacing-base)">
              {[...Array(20)].map((_, col) => (
                <Typography key={col} variant="body2" className="shrink-0">
                  Item {row + 1}-{col + 1}
                </Typography>
              ))}
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}

export default function ScrollAreaBothPage() {
  return <Example />;
}
