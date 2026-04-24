'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, Typography } from '@nipsys/lsd';
import { useRef } from 'react';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { IframeExample } from '@/components/docs/IframeExample';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { useSendThemeToIframes } from '@/components/docs/useSendIframes';
import {
  CODE as AccordionMultipleCODE,
  SIZE as AccordionMultipleSIZE,
} from '@/examples/accordion/multiple/page';
import {
  CODE as AccordionSingleCODE,
  SIZE as AccordionSingleSIZE,
} from '@/examples/accordion/single/page';

export default function AccordionPage() {
  const accordionMultipleIframeRef = useRef<HTMLIFrameElement>(null);
  const accordionSingleIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(accordionMultipleIframeRef, accordionSingleIframeRef);

  return (
    <DocsLayout>
      <PageHeader
        title="Accordion"
        description="Accordion - Collapsible component that displays multiple panels while showing one or more at a time
The Accordion is a vertically stacked list of items that can be expanded and collapsed.  It supports two modes: single (only one panel open at a time) and multiple (multiple  panels open simultaneously). Use accordions to organize content in expandable sections,  allowing users to focus on one piece of information at a time while keeping the rest  accessible."
      />

      <PageContent>
        <PageSection title="About Accordion">
          <Typography variant="body1" className="block">
            Accordion - Collapsible component that displays multiple panels while showing one or
            more at a time The Accordion is a vertically stacked list of items that can be expanded
            and collapsed. It supports two modes: single (only one panel open at a time) and
            multiple (multiple panels open simultaneously). Use accordions to organize content in
            expandable sections, allowing users to focus on one piece of information at a time while
            keeping the rest accessible.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Accordion component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Accordion } from '@nipsys/lsd'

export default function MyComponent() {
  return <Accordion />
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Variants">
          <Typography variant="body1">
            Component variants for different visual styles and use cases.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Multiple</CardTitle>
              <CardDescription>Multiple panels can be expanded simultaneously</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={accordionMultipleIframeRef}
                size={AccordionMultipleSIZE}
                src="/examples/accordion/multiple"
                title="Multiple Example"
              />
              <CodeExample code={AccordionMultipleCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Single</CardTitle>
              <CardDescription>Only one panel can be expanded at a time</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={accordionSingleIframeRef}
                size={AccordionSingleSIZE}
                src="/examples/accordion/single"
                title="Single Example"
              />
              <CodeExample code={AccordionSingleCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Usage">
          <Typography variant="body1">
            Different usage modes provide flexibility for various use cases.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Single Mode</CardTitle>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="whitespace-pre-line">
                Use type="single" when you want to enforce that only one section is visible at a
                time. Add the collapsible prop to allow users to close all sections. Ideal for
                FAQ-style content where showing multiple answers would be overwhelming. This mode
                provides a clean, focused experience by preventing information overload.
              </Typography>
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Multiple Mode</CardTitle>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="whitespace-pre-line">
                Use type="multiple" when users should be able to open multiple sections
                simultaneously. Useful for reference materials or comparison content where users may
                want to compare information side by side. This mode provides maximum flexibility for
                users who need to reference multiple sections at once.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1">All available props for the component.</Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>type</CardTitle>
                <CardDescription>
                  Selection behavior - 'single' allows only one item open, 'multiple' allows
                  multiple - single: Only one panel can be open at a time - multiple: Multiple
                  panels can be open simultaneously
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> "single" | "multiple"
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> single, multiple
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Selection behavior - 'single' allows only one item open, 'multiple' allows
                  multiple - single: Only one panel can be open at a time - multiple: Multiple
                  panels can be open simultaneously
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>collapsible</CardTitle>
                <CardDescription>
                  Allow closing all items when type is 'single' When true, users can click an open
                  panel to close it, leaving no panels open When false, at least one panel must
                  remain open at all times
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Allow closing all items when type is 'single' When true, users can click an open
                  panel to close it, leaving no panels open When false, at least one panel must
                  remain open at all times
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>value</CardTitle>
                <CardDescription>
                  Value of the open item(s) for controlled components For type='single': string (the
                  value of the open item) For type='multiple': string[] (array of open item values)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> string | string[]
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> string
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Value of the open item(s) for controlled components For type='single': string (the
                  value of the open item) For type='multiple': string[] (array of open item values)
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>defaultValue</CardTitle>
                <CardDescription>
                  Default value of the open item(s) for uncontrolled components For type='single':
                  string (the value of the open item) For type='multiple': string[] (array of open
                  item values)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> string | string[]
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> string
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Default value of the open item(s) for uncontrolled components For type='single':
                  string (the value of the open item) For type='multiple': string[] (array of open
                  item values)
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>orientation</CardTitle>
                <CardDescription>
                  Orientation of the accordion - vertical: Items are stacked vertically (default) -
                  horizontal: Items are arranged horizontally
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> "vertical" | "horizontal"
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> vertical, horizontal
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Orientation of the accordion - vertical: Items are stacked vertically (default) -
                  horizontal: Items are arranged horizontally
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>disabled</CardTitle>
                <CardDescription>
                  Disable the accordion When true, all accordion triggers are disabled and cannot be
                  interacted with
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Disable the accordion When true, all accordion triggers are disabled and cannot be
                  interacted with
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>onValueChange</CardTitle>
                <CardDescription>
                  Callback function called when the active panel changes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> (value: string | string[]) =&gt; void
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> string
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Callback function called when the active panel changes
                </Typography>
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
                • Tab - Navigate through accordion triggers
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Enter or Space - Toggle the currently focused panel
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • ArrowDown - Move focus to the next trigger when orientation is vertical
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • ArrowUp - Move focus to the previous trigger when orientation is vertical
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • ArrowRight - Move focus to the next trigger when orientation is horizontal
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • ArrowLeft - Move focus to the previous trigger when orientation is horizontal
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Home - Move focus to the first trigger
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • End - Move focus to the last trigger
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Shift + Tab - Navigate to the previous focusable element
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
                • role="region" is added to AccordionContent for screen readers
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-expanded is managed on AccordionTrigger to indicate open/closed state
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-controls links AccordionTrigger to AccordionContent
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-level indicates nested accordion depth
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-hidden properly manages visibility for collapsed panels
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
                • Focus is automatically managed when panels open/close • Proper focus restoration
                when closing panels • Focus can be moved between triggers using arrow keys • Focus
                rings visible on all interactive elements
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
        <PageNavigation
          next={{
            title: 'Alert',
            href: '/components/alert',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
