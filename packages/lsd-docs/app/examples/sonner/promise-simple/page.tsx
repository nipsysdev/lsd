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
  const handlePromiseClick = () => {
    const promise = new Promise(resolve => setTimeout(() => resolve('Data loaded!'), 2000));
    toast.promise(promise, {
      loading: 'Loading...',
      success: data => String(data),
      error: 'Error loading data',
    });
  };

  return (
    <div>
      <Toaster />

      <Button variant="outlined" onClick={handlePromiseClick}>
        Show Promise Toast
      </Button>
    </div>
  );
}`;

export function PromiseSimpleExample() {
  useSendThemeToIframes();

  return (
    <>
      <Toaster />
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
    </>
  );
}

export default function PromiseSimple() {
  return <PromiseSimpleExample />;
}
