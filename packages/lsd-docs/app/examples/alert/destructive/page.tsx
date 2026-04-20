'use client';

import { Alert, AlertDescription, AlertTitle } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'md';

/**
 * @docSection variant
 */
export const CODE = `import { Alert, AlertDescription, AlertTitle } from '@nipsys/lsd'

export function Example() {
  return (
    <Alert variant="destructive">
      <AlertTitle>Error Encountered</AlertTitle>
      <AlertDescription>
        An error occurred while processing your request. Please try again later.
      </AlertDescription>
    </Alert>
  );
}`;

export function DestructiveAlertExample() {
  useSendThemeToIframes();

  return (
    <Alert variant="destructive">
      <AlertTitle>Error Encountered</AlertTitle>
      <AlertDescription>
        An error occurred while processing your request. Please try again later.
      </AlertDescription>
    </Alert>
  );
}

export default function Destructive() {
  return <DestructiveAlertExample />;
}
