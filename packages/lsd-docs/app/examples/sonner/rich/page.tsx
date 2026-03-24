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

      <Typography variant="label1">Rich Toasts</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button
          variant="outline"
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
      </div>
    </div>
  );
}`;

export function ToastRichExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Toaster />

      <Typography variant="label1">Rich Toasts</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button
          variant="outline"
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
      </div>
    </div>
  );
}

export default function Rich() {
  return <ToastRichExample />;
}
