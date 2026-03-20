'use client';

import { Button, Typography } from '@nipsys/shadcn-lsd';
import { Toaster, toast } from 'sonner';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { Button, Typography } from '@nipsys/shadcn-lsd';
import { Toaster, toast } from 'sonner';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Toaster />

      <Typography variant="label1">With Actions</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button
          variant="outlined"
          onClick={() =>
            toast('Event has been created', {
              action: {
                label: 'Undo',
                onClick: () => console.log('Undo clicked'),
              },
            })
          }
        >
          Show with Action
        </Button>
      </div>
    </div>
  );
}`;

export function ToastActionsExample() {
  useInIframeThemeSync();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Toaster />

      <Typography variant="label1">With Actions</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button
          variant="outlined"
          onClick={() =>
            toast('Event has been created', {
              action: {
                label: 'Undo',
                onClick: () => console.log('Undo clicked'),
              },
            })
          }
        >
          Show with Action
        </Button>
      </div>
    </div>
  );
}

export default function Actions() {
  return <ToastActionsExample />;
}
