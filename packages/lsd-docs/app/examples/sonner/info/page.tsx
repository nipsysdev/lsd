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
      <Button variant="outlined" onClick={() => toast.info('A new feature is now available!')}>
        Show Info Toast
      </Button>
    </>
  );
}`;

export function InfoExample() {
  useSendThemeToIframes();

  return (
    <>
      <Toaster />
      <Button variant="outlined" onClick={() => toast.info('A new feature is now available!')}>
        Show Info Toast
      </Button>
    </>
  );
}

export default function Info() {
  return <InfoExample />;
}
