'use client';

import { Button, Typography } from '@nipsys/shadcn-lsd';
import { Toaster, toast } from 'sonner';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Button, Typography } from '@nipsys/shadcn-lsd';
import { Toaster, toast } from 'sonner';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
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
        <Button variant="outlined" onClick={() => toast.error('Something went wrong!')}>
          Show Error Toast
        </Button>
        <Button
          variant="outlined"
          onClick={() => toast.warning('Please review your changes')}
        >
          Show Warning Toast
        </Button>
        <Button variant="outlined" onClick={() => toast.info('New feature available')}>
          Show Info Toast
        </Button>
      </div>
      <Toaster />
    </div>
  );
}`;

export function ToastTypesExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Toast Types</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button variant="outlined" onClick={() => toast('Simple toast message')}>
          Show Simple Toast
        </Button>
        <Button variant="outlined" onClick={() => toast.success('Changes saved successfully!')}>
          Show Success Toast
        </Button>
        <Button variant="outlined" onClick={() => toast.error('Something went wrong!')}>
          Show Error Toast
        </Button>
        <Button variant="outlined" onClick={() => toast.warning('Please review your changes')}>
          Show Warning Toast
        </Button>
        <Button variant="outlined" onClick={() => toast.info('New feature available')}>
          Show Info Toast
        </Button>
      </div>
      <Toaster />
    </div>
  );
}

export default function Types() {
  return <ToastTypesExample />;
}
