'use client';

import { ToggleGroup, ToggleGroupItem, Typography } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { ToggleGroup, ToggleGroupItem, Typography } from '@nipsys/lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
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

export function ToggleGroupSizesExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
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

export default function Sizes() {
  return <ToggleGroupSizesExample />;
}
