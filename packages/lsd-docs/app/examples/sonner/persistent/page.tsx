'use client';

import { Button, Typography } from '@nipsys/shadcn-lsd';
import { Toaster, toast } from 'sonner';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Button, Typography } from '@nipsys/shadcn-lsd';
import { Toaster, toast } from 'sonner';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Toaster />

      <Typography variant="label1">Persistent Toasts</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button
          variant="outlined"
          onClick={() =>
            toast('This toast will not auto-dismiss', {
              duration: Number.POSITIVE_INFINITY,
            })
          }
        >
          Show Persistent Toast
        </Button>
        <Button variant="outlined" onClick={() => toast.dismiss()}>
          Dismiss All Toasts
        </Button>
      </div>
    </div>
  );
}`;

export function ToastPersistentExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Toaster />

      <Typography variant="label1">Persistent Toasts</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button
          variant="outlined"
          onClick={() =>
            toast('This toast will not auto-dismiss', {
              duration: Number.POSITIVE_INFINITY,
            })
          }
        >
          Show Persistent Toast
        </Button>
        <Button variant="outlined" onClick={() => toast.dismiss()}>
          Dismiss All Toasts
        </Button>
      </div>
    </div>
  );
}

export default function Persistent() {
  return <ToastPersistentExample />;
}
