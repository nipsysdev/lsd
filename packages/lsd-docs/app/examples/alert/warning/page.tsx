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
    <Alert variant="warning">
      <AlertTitle>Attention Required</AlertTitle>
      <AlertDescription>
        Your session will expire in 5 minutes. Please save your work.
      </AlertDescription>
    </Alert>
  );
}`;

export function WarningAlertExample() {
  useSendThemeToIframes();

  return (
    <Alert variant="warning">
      <AlertTitle>Attention Required</AlertTitle>
      <AlertDescription>
        Your session will expire in 5 minutes. Please save your work.
      </AlertDescription>
    </Alert>
  );
}

export default function Warning() {
  return <WarningAlertExample />;
}
