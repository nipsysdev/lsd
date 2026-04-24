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
      <Button
        variant="outlined"
        onClick={() =>
          toast(
            <div>
              <h4 className="lsd:font-semibold">Event Created</h4>
              <p className="lsd:text-sm">Your event has been created successfully.</p>
            </div>,
            {
              duration: 5000,
            }
          )
        }
      >
        Show Rich Toast
      </Button>
    </>
  );
}`;

export function RichContentExample() {
  useSendThemeToIframes();

  return (
    <>
      <Toaster />
      <Button
        variant="outlined"
        onClick={() =>
          toast(
            <div>
              <h4 className="lsd:font-semibold">Event Created</h4>
              <p className="lsd:text-sm">Your event has been created successfully.</p>
            </div>,
            {
              duration: 5000,
            }
          )
        }
      >
        Show Rich Toast
      </Button>
    </>
  );
}

export default function RichContent() {
  return <RichContentExample />;
}
