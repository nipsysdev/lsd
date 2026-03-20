/** biome-ignore-all lint/suspicious/noArrayIndexKey: Tolerate array index key for code examples */
'use client';

import { ScrollArea, ScrollBar, Typography } from '@nipsys/shadcn-lsd';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { ScrollArea, ScrollBar, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Typography variant="label1">Basic ScrollArea</Typography>
      <ScrollArea className="h-(--lsd-spacing-10x) w-full rounded-md border p-(--lsd-spacing-base)">
        <div className="flex flex-col gap-(--lsd-spacing-base)">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex items-center gap-(--lsd-spacing-smaller)">
              <div className="size-(--lsd-spacing-2x) rounded-full bg-(--lsd-color-primary)"></div>
              <Typography variant="body1">Item {i + 1} - Scroll to see more items</Typography>
            </div>
          ))}
        </div>
      </ScrollArea>

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

      <Typography variant="label1">Both Orientations</Typography>
      <ScrollArea className="h-(--lsd-spacing-8x) w-full rounded-md border p-(--lsd-spacing-base)">
        <div className="flex flex-col gap-(--lsd-spacing-base)">
          {[...Array(5)].map((_, row) => (
            <div key={row} className="flex gap-(--lsd-spacing-base)">
              {[...Array(10)].map((_, col) => (
                <div
                  key={col}
                  className="size-(--lsd-spacing-4x) shrink-0 rounded-md bg-(--lsd-color-surface-alt)"
                ></div>
              ))}
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}`;

export function ScrollAreaExample() {
  useInIframeThemeSync();

  return (
    <div className="flex flex-col overflow-hidden gap-(--lsd-spacing-base)">
      <Typography variant="label1">Basic ScrollArea</Typography>
      <ScrollArea className="flex-auto border p-(--lsd-spacing-base) overflow-auto">
        <div className="flex flex-col gap-(--lsd-spacing-base)">
          {[...Array(20)].map((_, i) => (
            <Typography key={i} variant="body1">
              Item {i + 1}
            </Typography>
          ))}
        </div>
      </ScrollArea>

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

      <Typography variant="label1">Both Orientations</Typography>
      <ScrollArea className="flex-auto h-100 border overflow-auto">
        <div className="flex flex-col gap-(--lsd-spacing-base)">
          {[...Array(5)].map((_, row) => (
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

export default function ScrollAreaPage() {
  return <ScrollAreaExample />;
}
