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
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { CODE as PopoverCODE } from '@/examples/popover/PopoverExample';

export default function PopoverPage() {
  const popoverIframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <DocsLayout>
      <PageHeader
        title="Popover"
        description="Floating UI element that displays rich content in a portal, triggered by user action"
      />

      <PageContent>
        <PageSection title="About Popover">
          <Typography variant="body1" className="block">
            Popover displays rich content in a floating container that appears over other content.
            It's triggered by user action (click, hover) and supports controlled and uncontrolled
            states.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Popover component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                code={`import { Popover, PopoverContent, PopoverTrigger } from '@nipsys/shadcn-lsd';
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

        <PageSection title="Basic Popover">
          <Typography variant="body1">
            Popover can be controlled (using open and onOpenChange) or uncontrolled. Use
            PopoverTrigger to specify what triggers the popover.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Popover Example</CardTitle>
              <CardDescription>Controlled popover with calendar content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <div className="aspect-video w-full overflow-hidden">
                  <iframe
                    ref={popoverIframeRef}
                    src="/examples/popover"
                    className="size-full"
                    title="Popover Example"
                  />
                </div>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={PopoverCODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-2">
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
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-2">
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
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> (open: boolean) =&gt; void
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-2">
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
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> 'start' | 'center' | 'end' | 'baseline'
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
                <CardTitle>PopoverContent.side</CardTitle>
                <CardDescription>Placement side</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> 'top' | 'right' | 'bottom' | 'left'
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> 'bottom'
                </Typography>
                <Typography variant="body2" className="mt-2">
                  Which side the popover appears on
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>PopoverTrigger.asChild</CardTitle>
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
              <Typography variant="body2" className="block mb-2">
                • Tab - Navigate into popover content
              </Typography>
              <Typography variant="body2" className="block mb-2">
                • Escape - Close popover and return focus
              </Typography>
              <Typography variant="body2" className="block">
                • Click outside - Close popover
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
                • Automatically hides popover from screen readers when closed
              </Typography>
              <Typography variant="body2" className="block">
                • Proper focus management when opening/closing
              </Typography>
            </CardContent>
          </Card>
        </PageSection>

        <PageNavigation
          previous={{
            title: 'Menubar',
            href: '/components/menubar',
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
