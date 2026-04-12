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

      <Typography variant="label1">Custom Duration</Typography>
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
    </div>
  );
}`;

export function ToastDurationExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Toaster />

      <Typography variant="label1">Custom Duration</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button variant="outlined" onClick={() => toast('Short duration', { duration: 2000 })}>
          2 seconds
        </Button>
        <Button variant="outlined" onClick={() => toast('Long duration', { duration: 10000 })}>
          10 seconds
        </Button>
      </div>
    </div>
  );
}

export default function Duration() {
  return <ToastDurationExample />;
}
