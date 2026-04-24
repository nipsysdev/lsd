'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, Typography } from '@nipsys/lsd';
import { useRef } from 'react';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { IframeExample } from '@/components/docs/IframeExample';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { useSendThemeToIframes } from '@/components/docs/useSendIframes';
import {
  CODE as SheetAllSidesCODE,
  SIZE as SheetAllSidesSIZE,
} from '@/examples/sheet/all-sides/page';
import { CODE as SheetBasicCODE, SIZE as SheetBasicSIZE } from '@/examples/sheet/basic/page';
import {
  CODE as SheetCloseButtonCODE,
  SIZE as SheetCloseButtonSIZE,
} from '@/examples/sheet/close-button/page';
import {
  CODE as SheetControlledCODE,
  SIZE as SheetControlledSIZE,
} from '@/examples/sheet/controlled/page';

export default function SheetPage() {
  const SheetAllSidesIframeRef = useRef<HTMLIFrameElement>(null);
  const SheetBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const SheetCloseButtonIframeRef = useRef<HTMLIFrameElement>(null);
  const SheetControlledIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    SheetAllSidesIframeRef,
    SheetBasicIframeRef,
    SheetCloseButtonIframeRef,
    SheetControlledIframeRef
  );

  return (
    <DocsLayout>
      <PageHeader
        title="Sheet"
        description="Displays a sliding panel with smooth animations and accessibility features."
      />

      <PageContent>
        <PageSection title="About Sheet">
          <Typography variant="body1" className="block">
            A sliding panel component for displaying additional content or actions that appears over
            the main interface. Supports positioning from top, bottom, left, or right sides with
            smooth slide-in animations.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Sheet component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Sheet } from '@nipsys/lsd'

export default function MyComponent() {
  return <Sheet />
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Usage">
          <Typography variant="body1">
            The simplest form of the component with default styling.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Basic</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={SheetBasicIframeRef}
                size={SheetBasicSIZE}
                src="/examples/sheet/basic"
                title="Basic Example"
              />
              <CodeExample code={SheetBasicCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Variants">
          <Typography variant="body1">
            Component variants for different visual styles and use cases.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>All Sides</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={SheetAllSidesIframeRef}
                size={SheetAllSidesSIZE}
                src="/examples/sheet/all-sides"
                title="All Sides Example"
              />
              <CodeExample code={SheetAllSidesCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features and capabilities of the component.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Close Button</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={SheetCloseButtonIframeRef}
                size={SheetCloseButtonSIZE}
                src="/examples/sheet/close-button"
                title="Close Button Example"
              />
              <CodeExample code={SheetCloseButtonCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Controlled</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={SheetControlledIframeRef}
                size={SheetControlledSIZE}
                src="/examples/sheet/controlled"
                title="Controlled Example"
              />
              <CodeExample code={SheetControlledCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Composition">
          <Card className="mt-(--lsd-spacing-base)">
            <CardContent className="pt-(--lsd-spacing-base)">
              <CodeBlock>
                {[
                  'Sheet',
                  '├── SheetTrigger',
                  '└── SheetPortal',
                  '    ├── SheetOverlay',
                  '    ├── SheetContent',
                  '    ├── SheetHeader',
                  '    └── SheetFooter',
                ]}
              </CodeBlock>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <div className="flex flex-col gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>Radix UI Documentation</CardTitle>
                <CardDescription>Sheet wraps Radix UI primitives</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://www.radix-ui.com/primitives/docs/components/sheet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View Radix UI Sheet documentation →
                </a>
              </CardContent>
            </Card>
          </div>
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
                • Tab - Navigate within the sheet
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Shift + Tab - Navigate to previous element
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Escape - Close the sheet
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Focus is trapped within the sheet when open
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
                • role="dialog" - Identifies the content as a dialog
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-modal="true" - Indicates modal behavior
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-labelledby - Links to the sheet title
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-describedby - Links to the sheet description
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
                • Focus is automatically trapped inside the sheet when it opens and returns to the
                trigger when closed.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
        <PageNavigation
          previous={{
            title: 'Popover',
            href: '/components/popover',
          }}
          next={{
            title: 'Tooltip',
            href: '/components/tooltip',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
