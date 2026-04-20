/**
 * @docSection feature
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
          onClick={() => toast('Short duration', { duration: 2000 })}
        >
          2 seconds
        </Button>
        <Button
          variant="outlined"
          onClick={() => toast('Long duration', { duration: 10000 })}
        >
          10 seconds
        </Button>
      </div>
    </>
  );
}`;

export function ToastDurationExample() {
  useSendThemeToIframes();

  return (
    <>
      <Toaster />

      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button variant="outlined" onClick={() => toast('Short duration', { duration: 2000 })}>
          2 seconds
        </Button>
        <Button variant="outlined" onClick={() => toast('Long duration', { duration: 10000 })}>
          10 seconds
        </Button>
      </div>
    </>
  );
}

export default function Duration() {
  return <ToastDurationExample />;
}
