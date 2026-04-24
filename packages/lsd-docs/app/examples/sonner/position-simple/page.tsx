/**
 * @docSection feature
 */
'use client';

import { Button } from '@nipsys/lsd';
import { Toaster, toast } from 'sonner';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'md';

export const CODE = `import { Button } from '@nipsys/lsd';
import { Toaster, toast } from 'sonner';

export function Example() {
  return (
    <>
      <Toaster />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-(--lsd-spacing-base)">
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
    </>
  );
}`;

export function PositionSimpleExample() {
  useSendThemeToIframes();

  return (
    <>
      <Toaster />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-(--lsd-spacing-base)">
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
    </>
  );
}

export default function PositionSimple() {
  return <PositionSimpleExample />;
}
