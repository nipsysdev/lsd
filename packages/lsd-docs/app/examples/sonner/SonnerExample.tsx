'use client';

import { Button } from '@nipsys/shadcn-lsd';
import { toast, Toaster } from 'sonner';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { Button } from '@nipsys/shadcn-lsd';
import { toast, Toaster } from 'sonner';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
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

      <Typography variant="label1">Positioned Toasts</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button
          variant="outlined"
          onClick={() => toast('Top-left toast', { position: 'top-left' })}
        >
          Top-Left
        </Button>
        <Button
          variant="outlined"
          onClick={() => toast('Top-right toast', { position: 'top-right' })}
        >
          Top-Right
        </Button>
        <Button
          variant="outlined"
          onClick={() => toast('Bottom-left toast', { position: 'bottom-left' })}
        >
          Bottom-Left
        </Button>
        <Button
          variant="outlined"
          onClick={() => toast('Bottom-right toast', { position: 'bottom-right' })}
        >
          Bottom-Right
        </Button>
      </div>

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

      <Typography variant="label1">Persistent Toasts</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button
          variant="outlined"
          onClick={() =>
            toast('This toast will not auto-dismiss', {
              duration: Number.POSITIVE_INFINITY,
            })
          }
        >
          Show Persistent Toast
        </Button>
        <Button variant="outlined" onClick={() => toast.dismiss()}>
          Dismiss All Toasts
        </Button>
      </div>

      <Typography variant="label1">Promise-based Toasts</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button
          variant="outlined"
          onClick={() => {
            const promise = new Promise(resolve =>
              setTimeout(() => resolve('Data loaded!'), 2000)
            );
            toast.promise(promise, {
              loading: 'Loading...',
              success: data => String(data),
              error: 'Error loading data',
            });
          }}
        >
          Show Promise Toast
        </Button>
      </div>

      <Typography variant="label1">Rich Toasts</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
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
      </div>
    </div>
  );
}`;

export function SonnerExample() {
  useInIframeThemeSync();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Toaster />

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

      <Typography variant="label1">Custom Duration</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button variant="outlined" onClick={() => toast('Short duration', { duration: 2000 })}>
          2 seconds
        </Button>
        <Button variant="outlined" onClick={() => toast('Long duration', { duration: 10000 })}>
          10 seconds
        </Button>
      </div>

      <Typography variant="label1">Positioned Toasts</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button
          variant="outlined"
          onClick={() => toast('Top-left toast', { position: 'top-left' })}
        >
          Top-Left
        </Button>
        <Button
          variant="outlined"
          onClick={() => toast('Top-right toast', { position: 'top-right' })}
        >
          Top-Right
        </Button>
        <Button
          variant="outlined"
          onClick={() => toast('Bottom-left toast', { position: 'bottom-left' })}
        >
          Bottom-Left
        </Button>
        <Button
          variant="outlined"
          onClick={() => toast('Bottom-right toast', { position: 'bottom-right' })}
        >
          Bottom-Right
        </Button>
      </div>

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

      <Typography variant="label1">Persistent Toasts</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button
          variant="outlined"
          onClick={() =>
            toast('This toast will not auto-dismiss', {
              duration: Number.POSITIVE_INFINITY,
            })
          }
        >
          Show Persistent Toast
        </Button>
        <Button variant="outlined" onClick={() => toast.dismiss()}>
          Dismiss All Toasts
        </Button>
      </div>

      <Typography variant="label1">Promise-based Toasts</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button
          variant="outlined"
          onClick={() => {
            const promise = new Promise(resolve => setTimeout(() => resolve('Data loaded!'), 2000));
            toast.promise(promise, {
              loading: 'Loading...',
              success: data => String(data),
              error: 'Error loading data',
            });
          }}
        >
          Show Promise Toast
        </Button>
      </div>

      <Typography variant="label1">Rich Toasts</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
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
      </div>
    </div>
  );
}
