'use client';

import { Button, Popover, PopoverContent, PopoverTrigger } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

/**
 * @docSection feature
 */
export const CODE = `import { Button, Popover, PopoverContent, PopoverTrigger } from '@nipsys/lsd';

export function Example() {
  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base) justify-center items-center w-full">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outlined">Top</Button>
        </PopoverTrigger>
        <PopoverContent side="top">
          <p>Popover on top</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outlined">Bottom</Button>
        </PopoverTrigger>
        <PopoverContent side="bottom">
          <p>Popover on bottom</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outlined">Left</Button>
        </PopoverTrigger>
        <PopoverContent side="left">
          <p>Popover on left</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outlined">Right</Button>
        </PopoverTrigger>
        <PopoverContent side="right">
          <p>Popover on right</p>
        </PopoverContent>
      </Popover>
    </div>
  );
}`;

export const SIZE = 'md';

export function PositioningPopoverExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base) justify-center items-center w-full">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outlined">Top</Button>
        </PopoverTrigger>
        <PopoverContent side="top">
          <p>Popover on top</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outlined">Bottom</Button>
        </PopoverTrigger>
        <PopoverContent side="bottom">
          <p>Popover on bottom</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outlined">Left</Button>
        </PopoverTrigger>
        <PopoverContent side="left">
          <p>Popover on left</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outlined">Right</Button>
        </PopoverTrigger>
        <PopoverContent side="right">
          <p>Popover on right</p>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default function Positioning() {
  return <PositioningPopoverExample />;
}
