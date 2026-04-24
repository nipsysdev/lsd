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
        onClick={() => toast.warning('Please review your input before proceeding.')}
      >
        Show Warning Toast
      </Button>
    </>
  );
}`;

export function WarningExample() {
  useSendThemeToIframes();

  return (
    <>
      <Toaster />
      <Button
        variant="outlined"
        onClick={() => toast.warning('Please review your input before proceeding.')}
      >
        Show Warning Toast
      </Button>
    </>
  );
}

export default function Warning() {
  return <WarningExample />;
}
