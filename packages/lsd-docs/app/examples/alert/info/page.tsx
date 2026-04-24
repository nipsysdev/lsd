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
    <Alert variant="info">
      <AlertTitle>New Feature Available</AlertTitle>
      <AlertDescription>
        Check out our new dashboard features available in the latest update.
      </AlertDescription>
    </Alert>
  );
}`;

export function InfoAlertExample() {
  useSendThemeToIframes();

  return (
    <Alert variant="info">
      <AlertTitle>New Feature Available</AlertTitle>
      <AlertDescription>
        Check out our new dashboard features available in the latest update.
      </AlertDescription>
    </Alert>
  );
}

export default function Info() {
  return <InfoAlertExample />;
}
