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
} from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Button, Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, Typography } from '@nipsys/lsd';

export function Example() {
  return (
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
  );
}`;

export function SheetBasicExample() {
  useSendThemeToIframes();

  return (
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
  );
}

export default function SheetBasicPage() {
  return <SheetBasicExample />;
}
