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
      <Button variant="outlined" onClick={() => toast.success('Operation completed successfully!')}>
        Show Success Toast
      </Button>
    </>
  );
}`;

export function SuccessExample() {
  useSendThemeToIframes();

  return (
    <>
      <Toaster />
      <Button variant="outlined" onClick={() => toast.success('Operation completed successfully!')}>
        Show Success Toast
      </Button>
    </>
  );
}

export default function Success() {
  return <SuccessExample />;
}
