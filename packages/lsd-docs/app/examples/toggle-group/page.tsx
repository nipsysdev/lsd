'use client';

import { ToggleGroup, ToggleGroupItem } from '@nipsys/shadcn-lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { ToggleGroup, ToggleGroupItem } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
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

export function ToggleGroupExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
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

export default function ToggleGroupPage() {
  return <ToggleGroupExample />;
}
