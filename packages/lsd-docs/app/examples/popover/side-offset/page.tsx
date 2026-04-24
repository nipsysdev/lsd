'use client';

import { Button, Popover, PopoverContent, PopoverTrigger } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

/**
 * @docSection feature
 */
export const CODE = `import { Button, Popover, PopoverContent, PopoverTrigger } from '@nipsys/lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outlined">No Offset</Button>
        </PopoverTrigger>
        <PopoverContent sideOffset={0}>
          <p>Default distance</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outlined">Small Offset</Button>
        </PopoverTrigger>
        <PopoverContent sideOffset={12}>
          <p>12px offset</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outlined">Large Offset</Button>
        </PopoverTrigger>
        <PopoverContent sideOffset={24}>
          <p>24px offset</p>
        </PopoverContent>
      </Popover>
    </div>
  );
}`;

export const SIZE = 'md';

export function SideOffsetPopoverExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outlined">No Offset</Button>
        </PopoverTrigger>
        <PopoverContent sideOffset={0}>
          <p>Default distance</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outlined">Small Offset</Button>
        </PopoverTrigger>
        <PopoverContent sideOffset={12}>
          <p>12px offset</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outlined">Large Offset</Button>
        </PopoverTrigger>
        <PopoverContent sideOffset={24}>
          <p>24px offset</p>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default function SideOffset() {
  return <SideOffsetPopoverExample />;
}
