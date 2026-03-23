'use client';

import { Alert, AlertDescription, AlertTitle } from '@nipsys/shadcn-lsd';

export const CODE = `
import { Alert, AlertDescription, AlertTitle } from '@nipsys/shadcn-lsd';

export function AlertBasic() {
  return (
    <Alert>
      <AlertTitle>Deployment Successful</AlertTitle>
      <AlertDescription>
        Your application has been successfully deployed to production. All services are running normally.
      </AlertDescription>
    </Alert>
  );
}
`;

export default function Page() {
  return (
    <Alert>
      <AlertTitle>Deployment Successful</AlertTitle>
      <AlertDescription>
        Your application has been successfully deployed to production. All services are running
        normally.
      </AlertDescription>
    </Alert>
  );
}
