/** biome-ignore-all lint/suspicious/noArrayIndexKey: Tolerate array index key for code examples */
'use client';

import { ScrollArea, ScrollBar, Typography } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'sm';

/**
 * @docSection feature
 */
export const CODE = `import { ScrollArea, ScrollBar, Typography } from '@nipsys/lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
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

export default function ScrollAreaBothOrientationPage() {
  return <Example />;
}
