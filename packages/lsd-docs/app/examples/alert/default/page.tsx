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
    <Alert variant="default">
      <AlertTitle>Default Alert</AlertTitle>
      <AlertDescription>
        This is a default alert for general information messages.
      </AlertDescription>
    </Alert>
  );
}`;

export function DefaultAlertExample() {
  useSendThemeToIframes();

  return (
    <Alert variant="default">
      <AlertTitle>Default Alert</AlertTitle>
      <AlertDescription>This is a default alert for general information messages.</AlertDescription>
    </Alert>
  );
}

export default function Default() {
  return <DefaultAlertExample />;
}
