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
import { CODE as DialogBasicCODE, SIZE as DialogBasicSIZE } from '@/examples/dialog/basic/page';

export default function DialogPage() {
  const DialogBasicIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(DialogBasicIframeRef);

  return (
    <DocsLayout>
      <PageHeader
        title="Dialog"
        description="Modal overlay for focused content display Container that displays content above the page with a backdrop overlay. Used for alerts, confirmations, and focused user interactions."
      />

      <PageContent>
        <PageSection title="About Dialog">
          <Typography variant="body1" className="block">
            Modal overlay for focused content display Container that displays content above the page
            with a backdrop overlay. Used for alerts, confirmations, and focused user interactions.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Dialog component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Dialog } from '@nipsys/lsd'

export default function MyComponent() {
  return <Dialog />
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
                ref={DialogBasicIframeRef}
                size={DialogBasicSIZE}
                src="/examples/dialog/basic"
                title="Basic Example"
              />
              <CodeExample code={DialogBasicCODE} />
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
                • Escape - Close the dialog
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Tab - Move focus between focusable elements within the dialog
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Shift + Tab - Move focus backwards through focusable elements
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
                • role="dialog" is applied to the dialog content
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-modal="true" indicates modal behavior
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-labelledby links to the dialog title
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-describedby links to the dialog description
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-label can be used for dialogs without visible titles
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
                • Focus is trapped within the dialog when open
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Focus moves to the first focusable element when dialog opens
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Focus returns to the trigger when dialog closes
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Outside click and Escape close the dialog
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
        <PageNavigation
          previous={{
            title: 'Command',
            href: '/components/command',
          }}
          next={{
            title: 'Dropdown-menu',
            href: '/components/dropdown-menu',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
