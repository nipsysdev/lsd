/**
 * @docSection state
 */
'use client';

import { Button } from '@nipsys/lsd';
import { Toaster, toast } from 'sonner';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'sm';

export const CODE = `import { Button } from '@nipsys/lsd';
import { Toaster, toast } from 'sonner';

export function Example() {
  return (
    <>
      <Toaster />

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
    </>
  );
}`;

export function ToastPersistentExample() {
  useSendThemeToIframes();

  return (
    <>
      <Toaster />

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
    </>
  );
}

export default function Persistent() {
  return <ToastPersistentExample />;
}
