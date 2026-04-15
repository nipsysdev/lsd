'use client';

import { Button, Popover, PopoverContent, PopoverTrigger } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Button, Popover, PopoverContent, PopoverTrigger } from '@nipsys/lsd';

export function Example() {
  return (
    <div className="flex gap-(--lsd-spacing-base)">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outlined">Start</Button>
        </PopoverTrigger>
        <PopoverContent align="start">
          <p>Aligned to start</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outlined">Center</Button>
        </PopoverTrigger>
        <PopoverContent align="center">
          <p>Aligned to center</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outlined">End</Button>
        </PopoverTrigger>
        <PopoverContent align="end">
          <p>Aligned to end</p>
        </PopoverContent>
      </Popover>
    </div>
  );
}`;

export function AlignmentPopoverExample() {
  useSendThemeToIframes();

  return (
    <div className="flex gap-(--lsd-spacing-base)">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outlined">Start</Button>
        </PopoverTrigger>
        <PopoverContent align="start">
          <p>Aligned to start</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outlined">Center</Button>
        </PopoverTrigger>
        <PopoverContent align="center">
          <p>Aligned to center</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outlined">End</Button>
        </PopoverTrigger>
        <PopoverContent align="end">
          <p>Aligned to end</p>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default function Alignment() {
  return <AlignmentPopoverExample />;
}
