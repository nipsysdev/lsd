'use client';

import { Alert, AlertDescription, AlertTitle } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `
import { Alert, AlertDescription, AlertTitle } from '@nipsys/lsd';

export function AlertAllVariants() {
  return (
    <div className="flex flex-col gap-4">
      <Alert variant="default">
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>
          This is a default alert for general information messages.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <AlertTitle>Error Encountered</AlertTitle>
        <AlertDescription>
          An error occurred while processing your request. Please try again later.
        </AlertDescription>
      </Alert>

      <Alert variant="info">
        <AlertTitle>New Feature Available</AlertTitle>
        <AlertDescription>
          Check out our new dashboard features available in the latest update.
        </AlertDescription>
      </Alert>

      <Alert variant="success">
        <AlertTitle>Operation Complete</AlertTitle>
        <AlertDescription>
          Your changes have been saved successfully.
        </AlertDescription>
      </Alert>

      <Alert variant="warning">
        <AlertTitle>Attention Required</AlertTitle>
        <AlertDescription>
          Your session will expire in 5 minutes. Please save your work.
        </AlertDescription>
      </Alert>
    </div>
  );
}
`;

export default function Page() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-4">
      <Alert variant="default">
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>
          This is a default alert for general information messages.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <AlertTitle>Error Encountered</AlertTitle>
        <AlertDescription>
          An error occurred while processing your request. Please try again later.
        </AlertDescription>
      </Alert>

      <Alert variant="info">
        <AlertTitle>New Feature Available</AlertTitle>
        <AlertDescription>
          Check out our new dashboard features available in the latest update.
        </AlertDescription>
      </Alert>

      <Alert variant="success">
        <AlertTitle>Operation Complete</AlertTitle>
        <AlertDescription>Your changes have been saved successfully.</AlertDescription>
      </Alert>

      <Alert variant="warning">
        <AlertTitle>Attention Required</AlertTitle>
        <AlertDescription>
          Your session will expire in 5 minutes. Please save your work.
        </AlertDescription>
      </Alert>
    </div>
  );
}
