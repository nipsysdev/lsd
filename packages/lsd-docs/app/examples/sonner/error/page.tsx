/**
 * @docSection variant
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
      <Button
        variant="outlined"
        onClick={() => toast.error('Something went wrong. Please try again.')}
      >
        Show Error Toast
      </Button>
    </>
  );
}`;

export function ErrorExample() {
  useSendThemeToIframes();

  return (
    <>
      <Toaster />
      <Button
        variant="outlined"
        onClick={() => toast.error('Something went wrong. Please try again.')}
      >
        Show Error Toast
      </Button>
    </>
  );
}

export default function ErrorToast() {
  return <ErrorExample />;
}
