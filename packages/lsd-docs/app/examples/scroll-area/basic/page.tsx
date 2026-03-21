/** biome-ignore-all lint/suspicious/noArrayIndexKey: Tolerate array index key for code examples */
'use client';

import { ScrollArea, Typography } from '@nipsys/shadcn-lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { ScrollArea, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Basic ScrollArea</Typography>
      <ScrollArea className="h-(--lsd-spacing-10x) w-full rounded-md border p-(--lsd-spacing-base)">
        <div className="flex flex-col gap-(--lsd-spacing-base)">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex items-center gap-(--lsd-spacing-smaller)">
              <div className="size-(--lsd-spacing-2x) rounded-full bg-(--lsd-color-primary)"></div>
              <Typography variant="body1">Item {i + 1}</Typography>
            </div>
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
      <ScrollArea className="flex-auto h-(--lsd-spacing-10x) border p-(--lsd-spacing-base)">
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
