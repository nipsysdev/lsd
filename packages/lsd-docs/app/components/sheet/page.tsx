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
import { CODE as AllSidesCode } from '@/examples/sheet/all-sides/page';
import { CODE as BasicCode } from '@/examples/sheet/basic/page';
import { CODE as CloseButtonCode } from '@/examples/sheet/close-button/page';
import { CODE as ControlledCode } from '@/examples/sheet/controlled/page';

export default function SheetPage() {
  const basicIframeRef = useRef<HTMLIFrameElement>(null);
  const controlledIframeRef = useRef<HTMLIFrameElement>(null);
  const allSidesIframeRef = useRef<HTMLIFrameElement>(null);
  const closeButtonIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    basicIframeRef,
    controlledIframeRef,
    allSidesIframeRef,
    closeButtonIframeRef
  );

  return (
    <DocsLayout>
      <PageHeader
        title="Sheet"
        description="Slide-over panel that slides in from any edge of the screen"
      />

      <PageContent>
        <PageSection title="About Sheet">
          <Typography variant="body1" className="block">
            Sheet displays content in an overlay that slides in from any edge of the screen. Use it
            for contextual actions, forms, or displaying additional information without leaving the
            current page.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Sheet components from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@nipsys/shadcn-lsd'

export default function MyComponent() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Title</SheetTitle>
          <SheetDescription>Description</SheetDescription>
        </SheetHeader>
        <div>Content goes here</div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outlined">Cancel</Button>
          </SheetClose>
          <Button>Save</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Basic Usage">
          <Typography variant="body1">
            Sheet can be controlled using open and onOpenChange props, or uncontrolled using
            defaultOpen.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Basic Sheet</CardTitle>
              <CardDescription>Sheet with header, description and footer</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={basicIframeRef}
                size="lg"
                src="/examples/sheet/basic"
                title="Basic Sheet Example"
              />
              <CodeExample code={BasicCode} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Controlled Sheet</CardTitle>
              <CardDescription>Using open and onOpenChange to control the sheet</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={controlledIframeRef}
                size="lg"
                src="/examples/sheet/controlled"
                title="Controlled Sheet Example"
              />
              <CodeExample code={ControlledCode} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Positioning">
          <Typography variant="body1">
            Use the side prop to control which edge of the screen the sheet slides from.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>All Sides</CardTitle>
              <CardDescription>Sheet can appear from top, right, bottom, or left</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={allSidesIframeRef}
                size="lg"
                src="/examples/sheet/all-sides"
                title="All Sides Sheet Example"
              />
              <CodeExample code={AllSidesCode} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features for customizing the sheet behavior and content.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Custom Close Actions</CardTitle>
              <CardDescription>Using SheetClose for custom close buttons</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={closeButtonIframeRef}
                size="lg"
                src="/examples/sheet/close-button"
                title="Close Button Sheet Example"
              />
              <CodeExample code={CloseButtonCode} />
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
                <CardTitle>Sheet.defaultOpen</CardTitle>
                <CardDescription>Initial open state for uncontrolled mode</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Uncontrolled value - sheet manages its own state
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sheet.onOpenChange</CardTitle>
                <CardDescription>Callback when open state changes</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> (open: boolean) {'=>'} void
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Called when sheet opens or closes
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SheetContent.side</CardTitle>
                <CardDescription>Which edge of the screen the sheet slides from</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> 'top' | 'right' | 'bottom' | 'left'
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> top, right, bottom, left
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> right
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SheetTrigger.asChild</CardTitle>
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
                  Makes the child element the trigger
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SheetClose.asChild</CardTitle>
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
                  Makes the child element a close button
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The Sheet component follows accessibility best practices built on Radix UI Dialog.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Sheet is fully keyboard accessible</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Tab</strong> - Navigate to the sheet trigger
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Enter or Space</strong> - Open the sheet when focused on trigger
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Escape</strong> - Close the sheet and return focus to trigger
              </Typography>
              <Typography variant="body2" className="block">
                • <strong>Tab</strong> - Navigate within the sheet content when open
              </Typography>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Focus Management</CardTitle>
              <CardDescription>Focus is properly managed when opening and closing</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • When the sheet opens, focus moves to the first focusable element inside
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Focus is trapped within the sheet while it is open
              </Typography>
              <Typography variant="body2" className="block">
                • When the sheet closes, focus returns to the trigger element
              </Typography>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Screen Reader Support</CardTitle>
              <CardDescription>Proper ARIA attributes for screen readers</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Sheet uses role="dialog" for the content area
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • SheetTitle provides the accessible name for the dialog
              </Typography>
              <Typography variant="body2" className="block">
                • SheetDescription provides additional context for screen readers
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
