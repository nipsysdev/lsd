'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, Typography } from '@nipsys/lsd';
import { useRef } from 'react';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { IframeExample } from '@/components/docs/IframeExample';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { useSendThemeToIframes } from '@/components/docs/useSendIframes';
import {
  CODE as AlertDialogBasicCODE,
  SIZE as AlertDialogBasicSIZE,
} from '@/examples/alert-dialog/basic/page';

export default function AlertDialogPage() {
  const AlertDialogBasicIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(AlertDialogBasicIframeRef);

  return (
    <DocsLayout>
      <PageHeader
        title="Alert-dialog"
        description="AlertDialog - Modal dialog for critical user decisions Interrupts the user's workflow to gather acknowledgment or action on important information. Blocks interaction with the page content when open and requires an explicit response."
      />

      <PageContent>
        <PageSection title="About AlertDialog">
          <Typography variant="body1" className="block">
            Modal dialog for critical user decisions Interrupts the user's workflow to gather
            acknowledgment or action on important information. Blocks interaction with the page
            content when open and requires an explicit response.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the AlertDialog component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { AlertDialog } from '@nipsys/lsd'

export default function MyComponent() {
  return <AlertDialog />
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Variants">
          <Typography variant="body1">
            Component variants for different visual styles and use cases.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Basic</CardTitle>
              <CardDescription>Basic example</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={AlertDialogBasicIframeRef}
                size={AlertDialogBasicSIZE}
                src="/examples/alert-dialog/basic"
                title="Basic Example"
              />
              <CodeExample code={AlertDialogBasicCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1">
            There are no documented props for this component. Props are documented via TSDoc in
            Props interfaces within the component or types.ts files.
          </Typography>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The component follows accessibility best practices for screen readers and keyboard
            navigation.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Keyboard shortcuts and navigation</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Tab - Navigate through interactive elements in the dialog
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Shift + Tab - Navigate to previous interactive element
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Escape - Close the dialog
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Enter or Space - Activate focused action button
              </Typography>
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>ARIA Attributes</CardTitle>
              <CardDescription>Proper ARIA attributes for screen readers</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • role="dialog" identifies the component as a dialog
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-modal="true" indicates dialog blocks interaction
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-labelledby links to the dialog title
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-describedby links to the dialog description
              </Typography>
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Focus States</CardTitle>
              <CardDescription>Visible focus indicators for keyboard users</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Focus moves to first interactive button when dialog opens
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Focus is trapped within the dialog while open
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Focus returns to trigger element when dialog closes
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
        <PageNavigation
          previous={{
            title: 'Alert',
            href: '/components/alert',
          }}
          next={{
            title: 'Autocomplete',
            href: '/components/autocomplete',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
