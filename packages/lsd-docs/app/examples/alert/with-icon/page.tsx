'use client';

import { Alert, AlertDescription, AlertTitle } from '@nipsys/shadcn-lsd';
import { InfoIcon } from '@phosphor-icons/react';

export const CODE = `
import { Alert, AlertDescription, AlertTitle } from '@nipsys/shadcn-lsd';
import { InfoIcon } from '@phosphor-icons/react';

export function AlertWithIcon() {
  return (
    <Alert variant="info">
      <InfoIcon />
      <AlertTitle>New Version Available</AlertTitle>
      <AlertDescription>
        Version 2.0 is now available with exciting new features and improvements.
      </AlertDescription>
    </Alert>
  );
}
`;

export default function Page() {
  return (
    <Alert variant="info">
      <InfoIcon />
      <AlertTitle>New Version Available</AlertTitle>
      <AlertDescription>
        Version 2.0 is now available with exciting new features and improvements.
      </AlertDescription>
    </Alert>
  );
}
