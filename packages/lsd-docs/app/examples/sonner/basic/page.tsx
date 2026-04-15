'use client';

import { Button, Typography } from '@nipsys/lsd';
import { Toaster, toast } from 'sonner';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Button, Typography } from '@nipsys/lsd';
import { Toaster, toast } from 'sonner';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Toaster />

      <Button 
        variant="outlined" 
        onClick={() => toast.success('Operation completed successfully!')}
      >
        Show Success Toast
      </Button>

      <Button 
        variant="outlined" 
        onClick={() => toast.error('Something went wrong. Please try again.')}
      >
        Show Error Toast
      </Button>

      <Button 
        variant="outlined" 
        onClick={() => toast.warning('Please review your input before proceeding.')}
      >
        Show Warning Toast
      </Button>

      <Button 
        variant="outlined" 
        onClick={() => toast.info('A new feature is now available!')}
      >
        Show Info Toast
      </Button>
    </div>
  );
}`;

export function BasicExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="h3">Basic Toast Examples</Typography>
      <Typography variant="body1" className="text-(--lsd-text-secondary)">
        Demonstrates success, error, warning, and info toast notifications.
      </Typography>

      <div className="flex flex-col gap-y-(--lsd-spacing-small)">
        <Button
          variant="outlined"
          onClick={() => toast.success('Operation completed successfully!')}
        >
          Show Success Toast
        </Button>

        <Button
          variant="outlined"
          onClick={() => toast.error('Something went wrong. Please try again.')}
        >
          Show Error Toast
        </Button>

        <Button
          variant="outlined"
          onClick={() => toast.warning('Please review your input before proceeding.')}
        >
          Show Warning Toast
        </Button>

        <Button variant="outlined" onClick={() => toast.info('A new feature is now available!')}>
          Show Info Toast
        </Button>
      </div>

      <Toaster />
    </div>
  );
}

export default function Basic() {
  return <BasicExample />;
}
