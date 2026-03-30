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
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { IframeExample } from '@/components/docs/IframeExample';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { CODE as AlertDialogBasicExampleCODE } from '@/examples/alert-dialog/basic/page';

export default function AlertDialogPage() {
  return (
    <DocsLayout>
      <PageHeader
        title="Alert Dialog"
        description="A modal dialog that interrupts the user with important content and expects a response."
      />

      <PageContent>
        <PageSection title="About Alert Dialog">
          <Typography variant="body1" className="block">
            The Alert Dialog component is a modal dialog that interrupts the user with important
            content and expects a response. It's designed for critical actions like confirming
            deletions, warnings, or other situations that require explicit user confirmation before
            proceeding.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Alert Dialog components from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                code={`import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@nipsys/shadcn-lsd'`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Structure">
          <Typography variant="body1" className="mb-(--lsd-spacing-base)">
            An Alert Dialog component is composed of the following parts:
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>AlertDialog</strong> - The root container that manages the dialog state
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>AlertDialogTrigger</strong> - The button that opens the dialog
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>AlertDialogContent</strong> - The dialog content container
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>AlertDialogHeader</strong> - Container for the title and description
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>AlertDialogTitle</strong> - The dialog title
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>AlertDialogDescription</strong> - The dialog description
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>AlertDialogFooter</strong> - Container for action buttons
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>AlertDialogAction</strong> - The confirm action button
          </Typography>
          <Typography variant="body2" className="block">
            • <strong>AlertDialogCancel</strong> - The cancel action button
          </Typography>
        </PageSection>

        <PageSection title="Usage">
          <Typography variant="body1">
            Basic usage of the Alert Dialog component with confirm and cancel actions.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Demo</CardTitle>
              <CardDescription>
                A confirmation dialog that asks the user to confirm a destructive action.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                size="md"
                src="/examples/alert-dialog/basic"
                title="Alert Dialog Basic Example"
              />
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={AlertDialogBasicExampleCODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1" className="mb-(--lsd-spacing-base)">
            Alert Dialog component props and configuration options.
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>AlertDialog</CardTitle>
                <CardDescription>The root container that manages the dialog state</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>open:</strong> boolean (controlled)
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>defaultOpen:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>onOpenChange:</strong> (open: boolean) =&gt; void
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> defaultOpen = false
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AlertDialogTrigger</CardTitle>
                <CardDescription>The button that opens the dialog</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>asChild:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  When <code>asChild</code> is true, the trigger will merge with its child element,
                  allowing you to use Button or other components as triggers.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AlertDialogContent</CardTitle>
                <CardDescription>The dialog content container</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>onOpenAutoFocus:</strong> (event: Event) =&gt; void
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>onCloseAutoFocus:</strong> (event: Event) =&gt; void
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>onEscapeKeyDown:</strong> (event: KeyboardEvent) =&gt; void
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>onPointerDownOutside:</strong> (event: PointerDownOutsideEvent) =&gt; void
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AlertDialogAction</CardTitle>
                <CardDescription>The confirm action button</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>asChild:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Uses the Button component's default variant. Can be customized with the{' '}
                  <code>asChild</code> prop to use custom button components.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AlertDialogCancel</CardTitle>
                <CardDescription>The cancel action button</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>asChild:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Uses the Button component's outlined variant by default. Can be customized with
                  the <code>asChild</code> prop to use custom button components.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AlertDialogTitle</CardTitle>
                <CardDescription>The dialog title</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> text-lg, font-semibold
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Renders a heading element with appropriate styling for the dialog title.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AlertDialogDescription</CardTitle>
                <CardDescription>The dialog description</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> text-sm, text-secondary
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Renders a paragraph element with appropriate styling for the dialog description.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AlertDialogHeader</CardTitle>
                <CardDescription>Container for the title and description</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> flex, flex-col, gap-smaller
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Provides a container with appropriate spacing for the title and description.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AlertDialogFooter</CardTitle>
                <CardDescription>Container for action buttons</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> flex, flex-col-reverse, gap-smaller (sm: flex-row, sm:
                  justify-end)
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Provides a container with appropriate spacing and layout for action buttons.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1" className="mb-(--lsd-spacing-base)">
            The Alert Dialog component follows WAI-ARIA patterns for modal dialogs and is fully
            accessible to keyboard and screen reader users.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Keyboard shortcuts for dialog interaction</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Tab</strong> - Navigate to the dialog
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Shift + Tab</strong> - Navigate to previous element
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Escape</strong> - Close the dialog
              </Typography>
              <Typography variant="body2" className="block">
                • <strong>Enter</strong> - Trigger the focused action button
              </Typography>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>ARIA Attributes</CardTitle>
              <CardDescription>Proper ARIA support for screen readers</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <code>role="alertdialog"</code> - Indicates the dialog is an alert dialog
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <code>aria-labelledby</code> - Links to the dialog title
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <code>aria-describedby</code> - Links to the dialog description
              </Typography>
              <Typography variant="body2" className="block">
                • <code>aria-modal="true"</code> - Indicates the dialog is modal
              </Typography>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Focus Management</CardTitle>
              <CardDescription>Automatic focus handling for accessibility</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block">
                When the dialog opens, focus is automatically moved to the first focusable element.
                When the dialog closes, focus returns to the trigger element. Focus is trapped
                within the dialog while it's open, ensuring keyboard users can't accidentally
                navigate outside.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>

        <PageNavigation
          previous={{ title: 'Toggle Group', href: '/components/toggle-group' }}
          next={{ title: 'Dialog', href: '/components/dialog' }}
        />
      </PageContent>
    </DocsLayout>
  );
}
