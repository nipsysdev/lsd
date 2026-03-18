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
import { useEffect, useRef, useState } from 'react';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { type ExampleParams, sendToIframe } from '@/components/docs/useIframeSync';

export default function DialogPage() {
  const basicIframeRef = useRef<HTMLIFrameElement>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [accent, setAccent] = useState<string>('monochrome');
  const [font, setFont] = useState<string>('monospace');

  // Track theme changes
  useEffect(() => {
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'dark' : 'light');
    };

    // Initial check
    updateTheme();

    // Listen for theme changes
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  // Track accent theme changes
  useEffect(() => {
    const updateAccent = () => {
      const accent = document.documentElement.getAttribute('data-theme');
      setAccent(accent || 'monochrome');
    };

    // Initial check
    updateAccent();

    // Listen for accent changes
    const observer = new MutationObserver(updateAccent);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  // Track font changes
  useEffect(() => {
    const updateFont = () => {
      if (document.documentElement.classList.contains('font-serif')) {
        setFont('serif');
      } else if (document.documentElement.classList.contains('font-sans')) {
        setFont('sans-serif');
      } else if (document.documentElement.classList.contains('font-mono')) {
        setFont('monospace');
      }
    };

    // Initial check
    updateFont();

    // Listen for font changes
    const observer = new MutationObserver(updateFont);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  // Send params to iframes when theme, accent, or font changes
  useEffect(() => {
    const params: ExampleParams = {
      theme,
      accent,
      font,
    };
    sendToIframe(basicIframeRef.current, 'example-params', params);
  }, [theme, accent, font]);

  // Send initial params when iframes load
  useEffect(() => {
    const iframe = basicIframeRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      const params: ExampleParams = {
        theme,
        accent,
        font,
      };
      sendToIframe(iframe, 'example-params', params);
    };

    iframe.addEventListener('load', handleLoad);
    return () => {
      iframe.removeEventListener('load', handleLoad);
    };
  }, [theme, accent, font]);

  return (
    <DocsLayout>
      <PageHeader
        title="Dialog"
        description="A modal dialog component that displays content in an overlay, requiring user interaction before returning to the main content."
      />

      <PageContent>
        <PageSection title="About Dialog">
          <Typography variant="body1" className="block">
            The Dialog component provides a modal overlay that focuses the user's attention on a
            specific task or piece of information. It's designed for scenarios where you need to
            collect user input, display important information, or require confirmation before
            proceeding with an action.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Dialog components from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                code={`import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@nipsys/shadcn-lsd'`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Structure">
          <Typography variant="body1" className="mb-(--lsd-spacing-base)">
            A Dialog component is composed of the following parts:
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>Dialog</strong> - The root container that manages the dialog state
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>DialogTrigger</strong> - The button that opens the dialog
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>DialogContent</strong> - The dialog content container with overlay
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>DialogHeader</strong> - Container for the title and description
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>DialogTitle</strong> - The dialog title
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>DialogDescription</strong> - The dialog description
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>DialogFooter</strong> - Container for action buttons
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>DialogClose</strong> - A button that closes the dialog
          </Typography>
        </PageSection>

        <PageSection title="Usage">
          <Typography variant="body1">
            Basic usage of the Dialog component with header, content, and footer.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Demo</CardTitle>
              <CardDescription>
                A dialog with title, description, content, and action buttons.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <div className="aspect-video w-full overflow-hidden border">
                  <iframe
                    ref={basicIframeRef}
                    src="/examples/dialog/basic"
                    className="size-full"
                    title="Dialog Basic Example"
                  />
                </div>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample
                      code={`'use client';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
} from '@nipsys/shadcn-lsd';

export function DialogBasicExample() {
  return (
    <div className="flex justify-center p-(--lsd-spacing-larger)">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>
              This is a dialog component. You can put any content here, including forms,
              information, or interactive elements.
            </DialogDescription>
          </DialogHeader>
          <div className="py-(--lsd-spacing-base)">
            <p className="text-sm">
              Dialogs are used to focus the user's attention on a specific task or piece of
              information. They can contain forms, confirmations, or any other content that
              requires user interaction.
            </p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outlined">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button>Confirm</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}`}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1" className="mb-(--lsd-spacing-base)">
            Dialog component props and configuration options.
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>Dialog</CardTitle>
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
                <CardTitle>DialogTrigger</CardTitle>
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
                <CardTitle>DialogContent</CardTitle>
                <CardDescription>The dialog content container with overlay</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>showCloseButton:</strong> boolean
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
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Includes a close button by default. Set <code>showCloseButton={false}</code> to
                  hide it.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>DialogClose</CardTitle>
                <CardDescription>A button that closes the dialog</CardDescription>
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
                  Can be used with the <code>asChild</code> prop to use Button or other components
                  as close buttons.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>DialogTitle</CardTitle>
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
                <CardTitle>DialogDescription</CardTitle>
                <CardDescription>The dialog description</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> text-sm, text-primary
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Renders a paragraph element with appropriate styling for the dialog description.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>DialogHeader</CardTitle>
                <CardDescription>Container for the title and description</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps&lt;&apos;div&apos;&gt;
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> flex, flex-col, gap-smaller, text-center (sm: text-left)
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Provides a container with appropriate spacing for the title and description.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>DialogFooter</CardTitle>
                <CardDescription>Container for action buttons</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps&lt;&apos;div&apos;&gt;
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
            The Dialog component follows WAI-ARIA patterns for modal dialogs and is fully accessible
            to keyboard and screen reader users.
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
                • <code>role="dialog"</code> - Indicates the element is a dialog
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
          previous={{ title: 'Command', href: '/components/command' }}
          next={{ title: 'Input', href: '/components/input' }}
        />
      </PageContent>
    </DocsLayout>
  );
}
