'use client';

import { Button, Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'md';

/**
 * @docSection variant
 */
export const CODE = `import { Button, Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@nipsys/lsd';

export function Example() {
  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base)">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outlined" size="sm">Top</Button>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>Top Sheet</SheetTitle>
          </SheetHeader>
          <p>This sheet slides in from the top.</p>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outlined" size="sm">Right</Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Right Sheet</SheetTitle>
          </SheetHeader>
          <p>This sheet slides in from the right.</p>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outlined" size="sm">Bottom</Button>
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>Bottom Sheet</SheetTitle>
          </SheetHeader>
          <p>This sheet slides in from the bottom.</p>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outlined" size="sm">Left</Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Left Sheet</SheetTitle>
          </SheetHeader>
          <p>This sheet slides in from the left.</p>
        </SheetContent>
      </Sheet>
    </div>
  );
}`;

export function SheetAllSidesExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base)">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outlined" size="sm">
            Top
          </Button>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>Top Sheet</SheetTitle>
          </SheetHeader>
          <p>This sheet slides in from the top.</p>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outlined" size="sm">
            Right
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Right Sheet</SheetTitle>
          </SheetHeader>
          <p>This sheet slides in from the right.</p>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outlined" size="sm">
            Bottom
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>Bottom Sheet</SheetTitle>
          </SheetHeader>
          <p>This sheet slides in from the bottom.</p>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outlined" size="sm">
            Left
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Left Sheet</SheetTitle>
          </SheetHeader>
          <p>This sheet slides in from the left.</p>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default function SheetAllSidesPage() {
  return <SheetAllSidesExample />;
}
