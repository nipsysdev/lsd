'use client';

import {
  Button,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Typography,
} from '@nipsys/lsd';
import { useState } from 'react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'md';

/**
 * @docSection feature
 */
export const CODE = `import { Button, Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, Typography } from '@nipsys/lsd';

import { useState } from 'react';

export function Example() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="body2">Sheet is {open ? 'open' : 'closed'}</Typography>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button>Open Sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Controlled Sheet</SheetTitle>
          </SheetHeader>
          <div className="py-4">
            <Typography variant="body2">
              This sheet is controlled using open and onOpenChange props.
              Click outside or press Escape to close it.
            </Typography>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}`;

export function SheetControlledExample() {
  useSendThemeToIframes();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="body2">Sheet is {open ? 'open' : 'closed'}</Typography>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button>Open Sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Controlled Sheet</SheetTitle>
          </SheetHeader>
          <div className="py-4">
            <Typography variant="body2">
              This sheet is controlled using open and onOpenChange props. Click outside or press
              Escape to close it.
            </Typography>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default function SheetControlledPage() {
  return <SheetControlledExample />;
}
