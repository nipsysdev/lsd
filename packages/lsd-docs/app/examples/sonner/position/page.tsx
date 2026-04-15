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

      <Typography variant="label1">Toast Positions</Typography>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-(--lsd-spacing-base)">
        <Button
          variant="outlined"
          onClick={() => toast('Top-left toast', { position: 'top-left' })}
        >
          Top-Left
        </Button>
        <Button
          variant="outlined"
          onClick={() => toast('Top-center toast', { position: 'top-center' })}
        >
          Top-Center
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
          onClick={() => toast('Bottom-center toast', { position: 'bottom-center' })}
        >
          Bottom-Center
        </Button>
        <Button
          variant="outlined"
          onClick={() => toast('Bottom-right toast', { position: 'bottom-right' })}
        >
          Bottom-Right
        </Button>
      </div>
    </div>
  );
}`;

export function PositionExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="h3">Toast Position Examples</Typography>
      <Typography variant="body1" className="text-(--lsd-text-secondary)">
        Demonstrates different toast positioning options on the screen.
      </Typography>

      <div className="space-y-(--lsd-spacing-large)">
        <div>
          <Typography variant="label1">Top Positions</Typography>
          <Typography
            variant="body2"
            className="text-(--lsd-text-secondary) mb-(--lsd-spacing-base)"
          >
            Toasts that appear at the top of the screen.
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-(--lsd-spacing-base)">
            <Button
              variant="outlined"
              onClick={() => toast('Top-left toast message', { position: 'top-left' })}
            >
              Top-Left
            </Button>
            <Button
              variant="outlined"
              onClick={() => toast('Top-center toast message', { position: 'top-center' })}
            >
              Top-Center
            </Button>
            <Button
              variant="outlined"
              onClick={() => toast('Top-right toast message', { position: 'top-right' })}
            >
              Top-Right
            </Button>
          </div>
        </div>

        <div>
          <Typography variant="label1">Bottom Positions</Typography>
          <Typography
            variant="body2"
            className="text-(--lsd-text-secondary) mb-(--lsd-spacing-base)"
          >
            Toasts that appear at the bottom of the screen.
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-(--lsd-spacing-base)">
            <Button
              variant="outlined"
              onClick={() => toast('Bottom-left toast message', { position: 'bottom-left' })}
            >
              Bottom-Left
            </Button>
            <Button
              variant="outlined"
              onClick={() => toast('Bottom-center toast message', { position: 'bottom-center' })}
            >
              Bottom-Center
            </Button>
            <Button
              variant="outlined"
              onClick={() => toast('Bottom-right toast message', { position: 'bottom-right' })}
            >
              Bottom-Right
            </Button>
          </div>
        </div>

        <div>
          <Typography variant="label1">Common Positions Demo</Typography>
          <Typography
            variant="body2"
            className="text-(--lsd-text-secondary) mb-(--lsd-spacing-base)"
          >
            Test multiple toasts to see how they stack in different positions.
          </Typography>
          <Button
            variant="filled"
            onClick={() => {
              toast.success('First success toast', { position: 'top-right' });
              setTimeout(() => toast.info('Second info toast', { position: 'top-right' }), 500);
              setTimeout(
                () => toast.warning('Third warning toast', { position: 'top-right' }),
                1000
              );
            }}
          >
            Show Multiple Toasts
          </Button>
        </div>
      </div>

      <Toaster />
    </div>
  );
}

export default function Position() {
  return <PositionExample />;
}
