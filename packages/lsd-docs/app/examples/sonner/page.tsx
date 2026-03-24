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

      <Typography variant="label1">Toast Types</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button variant="outlined" onClick={() => toast('Simple toast message')}>
          Show Simple Toast
        </Button>
        <Button
          variant="outlined"
          onClick={() => toast.success('Changes saved successfully!')}
        >
          Show Success Toast
        </Button>
      </div>
    </div>
  );
}`;

export function SonnerExample() {
  useSendThemeToIframes();

  return (
    <>
      <Toaster />

      <Typography variant="label1">Toast Types</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button variant="outlined" onClick={() => toast('Simple toast message')}>
          Show Simple Toast
        </Button>
        <Button variant="outlined" onClick={() => toast.success('Changes saved successfully!')}>
          Show Success Toast
        </Button>
      </div>
    </>
  );
}

export default function Sonner() {
  return <SonnerExample />;
}
