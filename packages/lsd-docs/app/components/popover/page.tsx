'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Typography,
} from '@nipsys/shadcn-lsd';
import { useRef } from 'react';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { IframeExample } from '@/components/docs/IframeExample';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { useSendThemeToIframes } from '@/components/docs/useSendIframes';
import { CODE as AlignmentPopoverCODE } from '@/examples/popover/alignment/page';
import { CODE as BasicPopoverCODE } from '@/examples/popover/basic/page';
import { CODE as ControlledPopoverCODE } from '@/examples/popover/controlled/page';
import { CODE as MultiplePopoverCODE } from '@/examples/popover/multiple/page';
import { CODE as PositioningPopoverCODE } from '@/examples/popover/positioning/page';
import { CODE as SideOffsetPopoverCODE } from '@/examples/popover/side-offset/page';

export default function PopoverPage() {
  const basicPopoverIframeRef = useRef<HTMLIFrameElement>(null);
  const controlledPopoverIframeRef = useRef<HTMLIFrameElement>(null);
  const positioningPopoverIframeRef = useRef<HTMLIFrameElement>(null);
  const alignmentPopoverIframeRef = useRef<HTMLIFrameElement>(null);
  const sideOffsetPopoverIframeRef = useRef<HTMLIFrameElement>(null);
  const multiplePopoverIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    basicPopoverIframeRef,
    controlledPopoverIframeRef,
    positioningPopoverIframeRef,
    alignmentPopoverIframeRef,
    sideOffsetPopoverIframeRef,
    multiplePopoverIframeRef
  );

  return (
    <DocsLayout>
      <PageHeader
        title="Popover"
        description="Floating element that displays content in a portal, triggered by user action"
      />

      <PageContent>
        <PageSection title="About Popover">
          <Typography variant="body1" className="block">
            Popover displays rich content in a floating container that appears over other content.
            It triggers on user action and supports controlled and uncontrolled states.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Popover component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Popover, PopoverContent, PopoverTrigger, PopoverAnchor } from '@nipsys/shadcn-lsd';
import { useState } from 'react';

export default function MyComponent() {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>Content goes here</PopoverContent>
    </Popover>
  );
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Basic Usage">
          <Typography variant="body1">
            Popover can be controlled (using open and onOpenChange) or uncontrolled.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Basic Popover</CardTitle>
              <CardDescription>Simple popover with Trigger and Content</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={basicPopoverIframeRef}
                size="sm"
                src="/examples/popover/basic"
                title="Basic Popover Example"
              />
              <CodeExample code={BasicPopoverCODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Controlled Popover</CardTitle>
              <CardDescription>Manage open state with useState</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={controlledPopoverIframeRef}
                size="sm"
                src="/examples/popover/controlled"
                title="Controlled Popover Example"
              />
              <CodeExample code={ControlledPopoverCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Positioning">
          <Typography variant="body1">
            Control where the popover appears relative to its trigger using side, align, and
            sideOffset props.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Side Placement</CardTitle>
              <CardDescription>Position the popover on different sides</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={positioningPopoverIframeRef}
                size="md"
                src="/examples/popover/positioning"
                title="Positioning Popover Example"
              />
              <CodeExample code={PositioningPopoverCODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Alignment</CardTitle>
              <CardDescription>Adjust horizontal alignment on the selected side</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={alignmentPopoverIframeRef}
                size="md"
                src="/examples/popover/alignment"
                title="Alignment Popover Example"
              />
              <CodeExample code={AlignmentPopoverCODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Side Offset</CardTitle>
              <CardDescription>Adjust distance from the trigger element</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={sideOffsetPopoverIframeRef}
                size="md"
                src="/examples/popover/side-offset"
                title="Side Offset Popover Example"
              />
              <CodeExample code={SideOffsetPopoverCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional capabilities including multiple popovers and independent state management.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Multiple Popovers</CardTitle>
              <CardDescription>Using multiple independent popovers</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={multiplePopoverIframeRef}
                size="md"
                src="/examples/popover/multiple"
                title="Multiple Popovers Example"
              />
              <CodeExample code={MultiplePopoverCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1">All available props for the Popover components.</Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>Popover.open</CardTitle>
                <CardDescription>Whether the popover is open</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Controlled value - use with onOpenChange
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Popover.defaultOpen</CardTitle>
                <CardDescription>Initial open state</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Uncontrolled value
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Popover.onOpenChange</CardTitle>
                <CardDescription>Callback when open state changes</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> (open: boolean) ={'>'} void
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Called when popover opens or closes
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>PopoverContent.align</CardTitle>
                <CardDescription>Alignment position</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> 'start' | 'center' | 'end' | 'baseline'
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> start, center, end, baseline
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> center
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Horizontal alignment relative to trigger
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>PopoverContent.side</CardTitle>
                <CardDescription>Placement side</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> 'top' | 'right' | 'bottom' | 'left'
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> top, right, bottom, left
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> bottom
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Which side the popover appears on
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>PopoverContent.sideOffset</CardTitle>
                <CardDescription>Distance from trigger element</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> number
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> 4
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Distance in pixels from the trigger
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>PopoverTrigger.asChild</CardTitle>
                <CardDescription>Merge props with child element</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Makes child the trigger button
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The Popover component follows accessibility best practices built on Radix UI.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Popover is fully keyboard accessible</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Tab</strong> - Navigate to the popover trigger
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Enter or Space</strong> - Open the popover when focused
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Escape</strong> - Close popover and return focus to trigger
              </Typography>
              <Typography variant="body2" className="block">
                • <strong>Click outside</strong> - Close popover
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
                • Automatically hides popover from screen readers when closed
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Focus is properly managed when opening and closing
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Use <code>aria-label</code> on triggers without visible text
              </Typography>
              <Typography variant="body2" className="block">
                • Content is announced when popover opens
              </Typography>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Focus States</CardTitle>
              <CardDescription>Visible focus indicators for keyboard users</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block">
                Popover triggers have visible focus states that follow the LSD design system's focus
                indicators, ensuring keyboard users can always see which element has focus. Focus
                returns to the trigger when the popover is closed.
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
