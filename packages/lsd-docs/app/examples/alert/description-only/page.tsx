'use client';

import { Alert, AlertDescription } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'sm';

/**
 * @docSection feature
 */
export const CODE = `import { Alert, AlertDescription } from '@nipsys/lsd'

export function Example() {
  return (
    <Alert>
      <AlertDescription>
        Alert with only a description component, no title.
      </AlertDescription>
    </Alert>
  );
}`;

export function DescriptionOnlyAlertExample() {
  useSendThemeToIframes();

  return (
    <Alert>
      <AlertDescription>Alert with only a description component, no title.</AlertDescription>
    </Alert>
  );
}

export default function DescriptionOnly() {
  return <DescriptionOnlyAlertExample />;
}
