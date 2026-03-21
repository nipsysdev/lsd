'use client';

import {
  Button,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Typography,
} from '@nipsys/shadcn-lsd';
import { InfoIcon } from '@phosphor-icons/react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { InfoIcon } from '@phosphor-icons/react';
import { Button, Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outlined">
            <InfoIcon className="mr-(--lsd-spacing-smaller)" />
            Information
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>About</SheetTitle>
            <SheetDescription>Learn more about our platform.</SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <Typography variant="body2">
              This is a sheet that opens from the left side.
            </Typography>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
`;

export function Example() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outlined">
            <InfoIcon className="mr-(--lsd-spacing-smaller)" />
            Information
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>About</SheetTitle>
            <SheetDescription>Learn more about our platform.</SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <Typography variant="body2">This is a sheet that opens from the left side.</Typography>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default function SheetLeftPage() {
  return <Example />;
}
