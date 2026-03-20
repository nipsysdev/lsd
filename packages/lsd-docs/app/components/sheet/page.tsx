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
import { CODE as SheetCODE } from '@/examples/sheet/SheetExample';

export default function SheetPage() {
  return (
    <DocsLayout>
      <PageHeader
        title="Sheet"
        description="Slide-over panel that appears from the edge of the screen, used for secondary actions"
      />

      <PageContent>
        <PageSection title="About Sheet">
          <Typography variant="body1" className="block">
            Sheet is a slide-over panel that appears from the edge of the screen. It's often used
            for mobile navigation, settings panels, or secondary content that doesn't require a full
            modal dialog.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Sheet component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                code={`import { Sheet, SheetContent, SheetTrigger } from '@nipsys/shadcn-lsd';

export default function MyComponent() {
  return (
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent>
        <div>Sheet content goes here</div>
      </SheetContent>
    </Sheet>
  );
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Basic Sheet">
          <Typography variant="body1">
            Sheet can be positioned on any side of the screen. Use side prop to control placement.
            The sheet automatically includes an overlay and close button.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Sheet Examples</CardTitle>
              <CardDescription>Sheet with form content from different sides</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <IframeExample size="lg" src="/examples/sheet" title="Sheet Example" />
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={SheetCODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1">All available props for the Sheet components.</Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>Sheet.open</CardTitle>
                <CardDescription>Whether the sheet is open</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-2">
                  Controlled value
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sheet.defaultOpen</CardTitle>
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
                <CardTitle>Sheet.onOpenChange</CardTitle>
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
                  Called when sheet opens or closes
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SheetContent.side</CardTitle>
                <CardDescription>Placement side</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> 'top' | 'right' | 'bottom' | 'left'
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> 'right'
                </Typography>
                <Typography variant="body2" className="mt-2">
                  Which side the sheet slides from
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SheetTrigger.asChild</CardTitle>
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

            <Card>
              <CardHeader>
                <CardTitle>SheetContent.className</CardTitle>
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
                  Merges with default sheet content classes
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The Sheet component follows accessibility best practices built on Radix UI.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Sheet is fully keyboard accessible</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-2">
                • Escape - Close sheet and return focus
              </Typography>
              <Typography variant="body2" className="block">
                • Click overlay or close button - Close sheet
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
                • Automatically manages focus when opening/closing
              </Typography>
              <Typography variant="body2" className="block">
                • Properly traps focus within the sheet
              </Typography>
            </CardContent>
          </Card>
        </PageSection>

        <PageNavigation
          previous={{
            title: 'Progress',
            href: '/components/progress',
          }}
          next={{
            title: 'Skeleton',
            href: '/components/skeleton',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
