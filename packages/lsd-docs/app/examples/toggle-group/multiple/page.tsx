'use client';

import { ToggleGroup, ToggleGroupItem, Typography } from '@nipsys/shadcn-lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { ToggleGroup, ToggleGroupItem, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Typography variant="label1">Multiple Selection</Typography>
      <ToggleGroup type="multiple" defaultValue={['item-1', 'item-2']}>
        <ToggleGroupItem value="item-1" aria-label="Toggle item 1">
          One
        </ToggleGroupItem>
        <ToggleGroupItem value="item-2" aria-label="Toggle item 2">
          Two
        </ToggleGroupItem>
        <ToggleGroupItem value="item-3" aria-label="Toggle item 3">
          Three
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}`;

export function ToggleGroupMultipleExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Typography variant="label1">Multiple Selection</Typography>
      <ToggleGroup type="multiple" defaultValue={['item-1', 'item-2']}>
        <ToggleGroupItem value="item-1" aria-label="Toggle item 1">
          One
        </ToggleGroupItem>
        <ToggleGroupItem value="item-2" aria-label="Toggle item 2">
          Two
        </ToggleGroupItem>
        <ToggleGroupItem value="item-3" aria-label="Toggle item 3">
          Three
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}

export default function Multiple() {
  return <ToggleGroupMultipleExample />;
}
