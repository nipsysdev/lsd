'use client';

import {
  Button,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Typography,
} from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Button, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, Typography } from '@nipsys/lsd';

export function Example() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>With Close Button</SheetTitle>
          <SheetDescription>
            This sheet shows how to use SheetClose for custom close actions.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <Typography variant="body2">
            SheetContent already includes a close button in the top-right corner.
            You can also use SheetClose inside your content for custom placement.
          </Typography>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outlined">Cancel</Button>
          </SheetClose>
          <Button type="submit">Save</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}`;

export function SheetCloseButtonExample() {
  useSendThemeToIframes();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>With Close Button</SheetTitle>
          <SheetDescription>
            This sheet shows how to use SheetClose for custom close actions.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <Typography variant="body2">
            SheetContent already includes a close button in the top-right corner. You can also use
            SheetClose inside your content for custom placement.
          </Typography>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outlined">Cancel</Button>
          </SheetClose>
          <Button type="submit">Save</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default function SheetCloseButtonPage() {
  return <SheetCloseButtonExample />;
}
