'use client';

import { ToggleGroup, ToggleGroupItem, Typography } from '@nipsys/shadcn-lsd';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { Toggle, ToggleGroup, ToggleGroupItem, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
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

      <Typography variant="label1">Small Size</Typography>
      <ToggleGroup type="multiple" size="sm">
        <ToggleGroupItem value="1" aria-label="Toggle 1">
          1
        </ToggleGroupItem>
        <ToggleGroupItem value="2" aria-label="Toggle 2">
          2
        </ToggleGroupItem>
        <ToggleGroupItem value="3" aria-label="Toggle 3">
          3
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}`;

export function ToggleGroupExample() {
  useInIframeThemeSync();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
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

      <Typography variant="label1">Small Size</Typography>
      <ToggleGroup type="multiple" size="sm">
        <ToggleGroupItem value="1" aria-label="Toggle 1">
          1
        </ToggleGroupItem>
        <ToggleGroupItem value="2" aria-label="Toggle 2">
          2
        </ToggleGroupItem>
        <ToggleGroupItem value="3" aria-label="Toggle 3">
          3
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}

export default function ToggleGroupPage() {
  return <ToggleGroupExample />;
}
