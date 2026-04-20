'use client';

import { Button, Popover, PopoverContent, PopoverTrigger } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Button, Popover, PopoverContent, PopoverTrigger } from '@nipsys/lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outlined">Show Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <p>Popover content goes here</p>
        </PopoverContent>
      </Popover>
    </div>
  );
}`;

export const SIZE = 'sm';

export function BasicPopoverExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outlined">Show Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <p>Popover content goes here</p>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default function Basic() {
  return <BasicPopoverExample />;
}
