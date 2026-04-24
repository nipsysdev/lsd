'use client';

import { Button, Popover, PopoverContent, PopoverTrigger } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

/**
 * @docSection feature
 */
export const CODE = `import { Button, Popover, PopoverContent, PopoverTrigger } from '@nipsys/lsd';

export function Example() {
  return (
    <div className="flex gap-(--lsd-spacing-base)">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outlined">First</Button>
        </PopoverTrigger>
        <PopoverContent>
          <p>First popover content</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outlined">Second</Button>
        </PopoverTrigger>
        <PopoverContent>
          <p>Second popover content</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outlined">Third</Button>
        </PopoverTrigger>
        <PopoverContent>
          <p>Third popover content</p>
        </PopoverContent>
      </Popover>
    </div>
  );
}`;

export const SIZE = 'md';

export function MultiplePopoverExample() {
  useSendThemeToIframes();

  return (
    <div className="flex gap-(--lsd-spacing-base)">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outlined">First</Button>
        </PopoverTrigger>
        <PopoverContent>
          <p>First popover content</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outlined">Second</Button>
        </PopoverTrigger>
        <PopoverContent>
          <p>Second popover content</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outlined">Third</Button>
        </PopoverTrigger>
        <PopoverContent>
          <p>Third popover content</p>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default function Multiple() {
  return <MultiplePopoverExample />;
}
