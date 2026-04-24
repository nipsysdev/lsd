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
    <Alert variant="success">
      <AlertTitle>Operation Complete</AlertTitle>
      <AlertDescription>
        Your changes have been saved successfully.
      </AlertDescription>
    </Alert>
  );
}`;

export function SuccessAlertExample() {
  useSendThemeToIframes();

  return (
    <Alert variant="success">
      <AlertTitle>Operation Complete</AlertTitle>
      <AlertDescription>Your changes have been saved successfully.</AlertDescription>
    </Alert>
  );
}

export default function Success() {
  return <SuccessAlertExample />;
}
