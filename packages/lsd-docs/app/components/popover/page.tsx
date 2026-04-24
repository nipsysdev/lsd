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
  CODE as PopoverAlignmentCODE,
  SIZE as PopoverAlignmentSIZE,
} from '@/examples/popover/alignment/page';
import { CODE as PopoverBasicCODE, SIZE as PopoverBasicSIZE } from '@/examples/popover/basic/page';
import {
  CODE as PopoverControlledCODE,
  SIZE as PopoverControlledSIZE,
} from '@/examples/popover/controlled/page';
import {
  CODE as PopoverMultipleCODE,
  SIZE as PopoverMultipleSIZE,
} from '@/examples/popover/multiple/page';
import {
  CODE as PopoverPositioningCODE,
  SIZE as PopoverPositioningSIZE,
} from '@/examples/popover/positioning/page';
import {
  CODE as PopoverSideOffsetCODE,
  SIZE as PopoverSideOffsetSIZE,
} from '@/examples/popover/side-offset/page';

export default function PopoverPage() {
  const PopoverAlignmentIframeRef = useRef<HTMLIFrameElement>(null);
  const PopoverBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const PopoverControlledIframeRef = useRef<HTMLIFrameElement>(null);
  const PopoverMultipleIframeRef = useRef<HTMLIFrameElement>(null);
  const PopoverPositioningIframeRef = useRef<HTMLIFrameElement>(null);
  const PopoverSideOffsetIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    PopoverAlignmentIframeRef,
    PopoverBasicIframeRef,
    PopoverControlledIframeRef,
    PopoverMultipleIframeRef,
    PopoverPositioningIframeRef,
    PopoverSideOffsetIframeRef
  );

  return (
    <DocsLayout>
      <PageHeader
        title="Popover"
        description="Displays rich content in a floating overlay positioned relative to a trigger element."
      />

      <PageContent>
        <PageSection title="About Popover">
          <Typography variant="body1" className="block">
            Container for displaying rich content, actions, or information in a floating overlay
            that is positioned relative to a trigger element. Supports controlled and uncontrolled
            states, with automatic positioning and collision detection for optimal placement.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Popover component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Popover } from '@nipsys/lsd'

export default function MyComponent() {
  return <Popover />
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
                ref={PopoverBasicIframeRef}
                size={PopoverBasicSIZE}
                src="/examples/popover/basic"
                title="Basic Example"
              />
              <CodeExample code={PopoverBasicCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features and capabilities of the component.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Alignment</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={PopoverAlignmentIframeRef}
                size={PopoverAlignmentSIZE}
                src="/examples/popover/alignment"
                title="Alignment Example"
              />
              <CodeExample code={PopoverAlignmentCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Controlled</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={PopoverControlledIframeRef}
                size={PopoverControlledSIZE}
                src="/examples/popover/controlled"
                title="Controlled Example"
              />
              <CodeExample code={PopoverControlledCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Multiple</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={PopoverMultipleIframeRef}
                size={PopoverMultipleSIZE}
                src="/examples/popover/multiple"
                title="Multiple Example"
              />
              <CodeExample code={PopoverMultipleCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Positioning</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={PopoverPositioningIframeRef}
                size={PopoverPositioningSIZE}
                src="/examples/popover/positioning"
                title="Positioning Example"
              />
              <CodeExample code={PopoverPositioningCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Side Offset</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={PopoverSideOffsetIframeRef}
                size={PopoverSideOffsetSIZE}
                src="/examples/popover/side-offset"
                title="Side Offset Example"
              />
              <CodeExample code={PopoverSideOffsetCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Composition">
          <Card className="mt-(--lsd-spacing-base)">
            <CardContent className="pt-(--lsd-spacing-base)">
              <CodeBlock>
                {['Popover', '├── PopoverTrigger', '├── PopoverContent', '└── PopoverAnchor']}
              </CodeBlock>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <div className="flex flex-col gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>Radix UI Documentation</CardTitle>
                <CardDescription>Popover wraps Radix UI primitives</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://www.radix-ui.com/primitives/docs/components/popover"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View Radix UI Popover documentation →
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
                • Space or Enter - Toggle popover open/closed when trigger is focused
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Tab - Move focus within popover content when open
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Shift + Tab - Move focus to previous element within popover
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Escape - Close popover and return focus to trigger
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
                • role="dialog" is applied to the popover content
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Follows Dialog WAI-ARIA design pattern
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
                • Focus moves to popover content when opened
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Focus returns to trigger when popover closes
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Outside click and Escape close the popover
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
        <PageNavigation
          previous={{
            title: 'Dialog',
            href: '/components/dialog',
          }}
          next={{
            title: 'Sheet',
            href: '/components/sheet',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
