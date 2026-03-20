'use client';

import {
  Button,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Typography,
} from '@nipsys/shadcn-lsd';
import { ArrowRightIcon, InfoIcon } from '@phosphor-icons/react';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { ArrowRightIcon, InfoIcon } from '@phosphor-icons/react';
import { Button, Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Sheet>
        <SheetTrigger asChild>
          <Button>Open Sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-(--lsd-spacing-base) py-4">
            <div className="space-y-2">
              <Typography variant="label1">Name</Typography>
              <Typography variant="body2">John Doe</Typography>
            </div>
            <div className="space-y-2">
              <Typography variant="label1">Email</Typography>
              <Typography variant="body2">john@example.com</Typography>
            </div>
          </div>
          <SheetFooter>
            <Button type="submit">Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>

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
            <SheetDescription>
              Learn more about our platform.
            </SheetDescription>
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
}`;

export function SheetExample() {
  useInIframeThemeSync();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-larger) p-(--lsd-spacing-larger)">
      <Sheet>
        <SheetTrigger asChild>
          <Button>Open Sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-(--lsd-spacing-base) py-4">
            <div className="space-y-2">
              <Typography variant="label1">Name</Typography>
              <Typography variant="body2">John Doe</Typography>
            </div>
            <div className="space-y-2">
              <Typography variant="label1">Email</Typography>
              <Typography variant="body2">john@example.com</Typography>
            </div>
          </div>
          <SheetFooter>
            <Button type="submit">Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>

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
