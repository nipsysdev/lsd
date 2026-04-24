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
import { CODE as TooltipBasicCODE, SIZE as TooltipBasicSIZE } from '@/examples/tooltip/basic/page';
import {
  CODE as TooltipPositionsCODE,
  SIZE as TooltipPositionsSIZE,
} from '@/examples/tooltip/positions/page';
import {
  CODE as TooltipWithIconCODE,
  SIZE as TooltipWithIconSIZE,
} from '@/examples/tooltip/with-icon/page';

export default function TooltipPage() {
  const TooltipBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const TooltipPositionsIframeRef = useRef<HTMLIFrameElement>(null);
  const TooltipWithIconIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(TooltipBasicIframeRef, TooltipPositionsIframeRef, TooltipWithIconIframeRef);

  return (
    <DocsLayout>
      <PageHeader
        title="Tooltip"
        description="Displays additional information on hover or focus."
      />

      <PageContent>
        <PageSection title="About Tooltip">
          <Typography variant="body1" className="block">
            A popup component that shows contextual information when users hover over or focus on an
            element. Automatically wraps with a provider for consistent delay behavior across all
            tooltips. Supports positioning on all sides with smooth animations.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Tooltip component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Tooltip } from '@nipsys/lsd'

export default function MyComponent() {
  return <Tooltip />
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
                ref={TooltipBasicIframeRef}
                size={TooltipBasicSIZE}
                src="/examples/tooltip/basic"
                title="Basic Example"
              />
              <CodeExample code={TooltipBasicCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features and capabilities of the component.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Positions</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={TooltipPositionsIframeRef}
                size={TooltipPositionsSIZE}
                src="/examples/tooltip/positions"
                title="Positions Example"
              />
              <CodeExample code={TooltipPositionsCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>With Icon</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={TooltipWithIconIframeRef}
                size={TooltipWithIconSIZE}
                src="/examples/tooltip/with-icon"
                title="With Icon Example"
              />
              <CodeExample code={TooltipWithIconCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Composition">
          <Card className="mt-(--lsd-spacing-base)">
            <CardContent className="pt-(--lsd-spacing-base)">
              <CodeBlock>
                {['Tooltip', '├── TooltipProvider', '├── TooltipTrigger', '└── TooltipContent']}
              </CodeBlock>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <div className="flex flex-col gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>Radix UI Documentation</CardTitle>
                <CardDescription>Tooltip wraps Radix UI primitives</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://www.radix-ui.com/primitives/docs/components/tooltip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View Radix UI Tooltip documentation →
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
                • Tab - Navigate to the tooltip trigger
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Shift + Tab - Navigate to previous element
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
                • role="tooltip" identifies the content as a tooltip
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-describedby links the trigger to the tooltip
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
                • Tooltip content is not focusable. Focus remains on the trigger element when the
                tooltip is visible. Screen readers announce tooltip content when the trigger
                receives focus.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
        <PageNavigation
          previous={{
            title: 'Sheet',
            href: '/components/sheet',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
