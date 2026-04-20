'use client';

import { ToggleGroup, ToggleGroupItem, Typography } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'md';

export const CODE = `import { ToggleGroup, ToggleGroupItem, Typography } from '@nipsys/lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Single Selection</Typography>
      <ToggleGroup type="single" defaultValue="item-2">
        <ToggleGroupItem value="item-1" aria-label="Item 1">
          One
        </ToggleGroupItem>
        <ToggleGroupItem value="item-2" aria-label="Item 2">
          Two
        </ToggleGroupItem>
        <ToggleGroupItem value="item-3" aria-label="Item 3">
          Three
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}`;

export function ToggleGroupSingleExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Single Selection</Typography>
      <ToggleGroup type="single" defaultValue="item-2">
        <ToggleGroupItem value="item-1" aria-label="Item 1">
          One
        </ToggleGroupItem>
        <ToggleGroupItem value="item-2" aria-label="Item 2">
          Two
        </ToggleGroupItem>
        <ToggleGroupItem value="item-3" aria-label="Item 3">
          Three
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}

export default function Single() {
  return <ToggleGroupSingleExample />;
}
