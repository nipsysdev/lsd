'use client';

import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@nipsys/shadcn-lsd';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export function DialogBasicExample() {
  useInIframeThemeSync();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a dialog component. You can put any content here, including forms, information,
            or interactive elements.
          </DialogDescription>
        </DialogHeader>
        <div className="py-(--lsd-spacing-base)">
          <p className="text-sm">
            Dialogs are used to focus the user's attention on a specific task or piece of
            information. They can contain forms, confirmations, or any other content that requires
            user interaction.
          </p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outlined">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button>Confirm</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
