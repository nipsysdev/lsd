'use client';

import { Button, Popover, PopoverContent, PopoverTrigger } from '@nipsys/lsd';
import { useState } from 'react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Button, Popover, PopoverContent, PopoverTrigger } from '@nipsys/lsd';
import { useState } from 'react';

export function Example() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outlined">Show Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="space-y-(--lsd-spacing-base)">
            <p className="font-semibold">Controlled Popover</p>
            <p>This popover state is controlled by React state.</p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}`;

export const SIZE = 'sm';

export function ControlledPopoverExample() {
  useSendThemeToIframes();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outlined">Show Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="space-y-(--lsd-spacing-base)">
            <p className="font-semibold">Controlled Popover</p>
            <p>This popover state is controlled by React state.</p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default function Controlled() {
  return <ControlledPopoverExample />;
}
