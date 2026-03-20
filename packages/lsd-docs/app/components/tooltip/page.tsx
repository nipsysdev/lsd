'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
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
import { useIframeThemeSync } from '@/components/docs/useInIframeThemeSync';
import { CODE as TOOLTIP_BASIC_CODE } from '@/examples/tooltip/basic/TooltipBasicExample';
import { CODE as TOOLTIP_POSITIONS_CODE } from '@/examples/tooltip/positions/TooltipPositionsExample';
import { CODE as TOOLTIP_WITH_ICON_CODE } from '@/examples/tooltip/with-icon/TooltipWithIconExample';

export default function TooltipPage() {
  const tooltipBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const tooltipWithIconIframeRef = useRef<HTMLIFrameElement>(null);
  const tooltipPositionsIframeRef = useRef<HTMLIFrameElement>(null);

  useIframeThemeSync(tooltipBasicIframeRef, tooltipWithIconIframeRef, tooltipPositionsIframeRef);

  return (
    <DocsLayout>
      <PageHeader
        title="Tooltip"
        description="Floating label that displays information when users hover over or focus on an element"
      />

      <PageContent>
        <PageSection title="About Tooltip">
          <Typography variant="body1" className="block">
            Tooltip displays contextual information when users hover over or focus on an element.
            It's used to provide additional details, definitions, or instructions without cluttering
            the interface.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Tooltip component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                code={`import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@nipsys/shadcn-lsd';

export default function MyComponent() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent>Helper text</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Basic Tooltip">
          <Typography variant="body1">
            Wrap your component in TooltipProvider, then use Tooltip, TooltipTrigger, and
            TooltipContent. Control position with the side prop.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Basic Tooltip</CardTitle>
              <CardDescription>Simple tooltip on hover</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={tooltipBasicIframeRef}
                size="sm"
                src="/examples/tooltip/basic"
                title="Tooltip Basic Example"
              />
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={TOOLTIP_BASIC_CODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="With Icon">
          <Typography variant="body1">
            Tooltips can be attached to icon buttons for additional information.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>With Icon</CardTitle>
              <CardDescription>Tooltip on an icon button</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={tooltipWithIconIframeRef}
                size="sm"
                src="/examples/tooltip/with-icon"
                title="Tooltip With Icon Example"
              />
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={TOOLTIP_WITH_ICON_CODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Positions">
          <Typography variant="body1">Control tooltip placement with the side prop.</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Different Positions</CardTitle>
              <CardDescription>Top, bottom, left, and right placement</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={tooltipPositionsIframeRef}
                size="sm"
                src="/examples/tooltip/positions"
                title="Tooltip Positions Example"
              />
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={TOOLTIP_POSITIONS_CODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1">All available props for the Tooltip components.</Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>TooltipContent.side</CardTitle>
                <CardDescription>Placement side</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> 'top' | 'right' | 'bottom' | 'left'
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> 'top'
                </Typography>
                <Typography variant="body2" className="mt-2">
                  Which side the tooltip appears on
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>TooltipContent.align</CardTitle>
                <CardDescription>Alignment position</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> 'start' | 'center' | 'end'
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> 'center'
                </Typography>
                <Typography variant="body2" className="mt-2">
                  Horizontal alignment relative to trigger
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>TooltipContent.delayDuration</CardTitle>
                <CardDescription>Delay before showing</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> number
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> 700
                </Typography>
                <Typography variant="body2" className="mt-2">
                  Delay in milliseconds before tooltip appears
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>TooltipTrigger.asChild</CardTitle>
                <CardDescription>Merge props with child element</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-2">
                  Makes child the trigger element
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>TooltipContent.className</CardTitle>
                <CardDescription>Additional CSS classes</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-2">
                  Merges with default tooltip content classes
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>TooltipProvider</CardTitle>
                <CardDescription>Wraps tooltips in the app</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> Component
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Required:</strong> Yes
                </Typography>
                <Typography variant="body2" className="mt-2">
                  Wrapper that provides tooltip context. Place at app root for global tooltips.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The Tooltip component follows accessibility best practices built on Radix UI.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Interaction</CardTitle>
              <CardDescription>Tooltip supports keyboard users</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-2">
                • Tab - Navigate to the trigger
              </Typography>
              <Typography variant="body2" className="block mb-2">
                • Enter or Space - Show tooltip (if applicable)
              </Typography>
              <Typography variant="body2" className="block">
                • Escape - Hide tooltip
              </Typography>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>ARIA Attributes</CardTitle>
              <CardDescription>Proper ARIA attributes for screen readers</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-2">
                • Automatically manages aria-describedby on trigger
              </Typography>
              <Typography variant="body2" className="block mb-2">
                • role="tooltip" on the tooltip content
              </Typography>
              <Typography variant="body2" className="block">
                • Proper announcement of tooltip content
              </Typography>
            </CardContent>
          </Card>
        </PageSection>

        <PageNavigation
          previous={{
            title: 'Tabs',
            href: '/components/tabs',
          }}
          next={{
            title: 'Button',
            href: '/components/button',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
