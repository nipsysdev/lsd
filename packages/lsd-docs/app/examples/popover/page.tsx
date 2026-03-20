/** biome-ignore-all lint/suspicious/noArrayIndexKey: Tolerate array index key for code examples */
'use client';

import { Button, Popover, PopoverContent, PopoverTrigger, Typography } from '@nipsys/shadcn-lsd';
import { CalendarIcon } from '@phosphor-icons/react';
import { useState } from 'react';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { CalendarIcon } from '@phosphor-icons/react';
import { Button, Popover, PopoverContent, PopoverTrigger, Typography } from '@nipsys/shadcn-lsd';
import { useState } from 'react';

export function Example() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outlined">
            <CalendarIcon className="mr-(--lsd-spacing-smaller)" />
            Open Popover
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-(--lsd-spacing-base)">
            <div className="space-y-2">
              <Typography variant="label1">Select a date</Typography>
              <Typography variant="body2">
                Choose a date from the calendar to schedule your event.
              </Typography>
            </div>
            <div className="grid grid-cols-7 gap-1">
              {[...Array(35)].map((_, i) => (
                <Button
                  key={i}
                  variant="ghost"
                  size="sm"
                  className="h-8"
                >
                  {i + 1}
                </Button>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}`;

export function PopoverExample() {
  useInIframeThemeSync();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outlined">
            <CalendarIcon className="mr-(--lsd-spacing-smaller)" />
            Open Popover
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-(--lsd-spacing-base)">
            <div className="space-y-2">
              <Typography variant="label1">Select a date</Typography>
              <Typography variant="body2">
                Choose a date from the calendar to schedule your event.
              </Typography>
            </div>
            <div className="grid grid-cols-7 gap-1">
              {[...Array(35)].map((_, i) => (
                <Button key={i} variant="ghost" size="sm" className="h-8">
                  {i + 1}
                </Button>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default function PopoverPage() {
  return <PopoverExample />;
}
