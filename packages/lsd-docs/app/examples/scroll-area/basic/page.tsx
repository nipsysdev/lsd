/** biome-ignore-all lint/suspicious/noArrayIndexKey: Tolerate array index key for code examples */
'use client';

import { ScrollArea, Typography } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { ScrollArea, Typography } from '@nipsys/lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Basic ScrollArea</Typography>
      <ScrollArea className="h-(--lsd-spacing-10x) w-full rounded-md border p-(--lsd-spacing-smaller) overflow-hidden">
        <div className="flex flex-col gap-(--lsd-spacing-base)">
          {[...Array(20)].map((_, i) => (
            <Typography variant="body1">Item {i + 1}</Typography>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
`;

export function Example() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Basic ScrollArea</Typography>
      <ScrollArea className="flex-auto border p-(--lsd-spacing-smaller) overflow-hidden">
        <div className="flex flex-col gap-(--lsd-spacing-base)">
          {[...Array(20)].map((_, i) => (
            <Typography key={i} variant="body1">
              Item {i + 1}
            </Typography>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export default function ScrollAreaBasicPage() {
  return <Example />;
}
