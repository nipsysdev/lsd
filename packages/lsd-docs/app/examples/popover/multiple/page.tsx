'use client';

import { Button, Popover, PopoverContent, PopoverTrigger } from '@nipsys/shadcn-lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Button, Popover, PopoverContent, PopoverTrigger } from '@nipsys/shadcn-lsd';

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
