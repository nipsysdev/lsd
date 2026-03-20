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
import { CODE as CheckboxCODE } from '@/examples/checkbox/CheckboxExample';

export default function CheckboxPage() {
  return (
    <DocsLayout>
      <PageHeader
        title="Checkbox"
        description="Interactive checkbox component with support for checked and unchecked states"
      />

      <PageContent>
        <PageSection title="About Checkbox">
          <Typography variant="body1" className="block">
            Checkboxes allow users to select one or more options from a set. They support checked
            and unchecked states.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Checkbox component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                code={`import { Checkbox } from '@nipsys/shadcn-lsd'

export default function MyComponent() {
  return <Checkbox />
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Basic States">
          <Typography variant="body1">
            Checkboxes support checked and unchecked states, both controlled and uncontrolled.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Checkbox Examples</CardTitle>
              <CardDescription>
                Basic states, controlled components, and checkbox labels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <IframeExample size="sm" src="/examples/checkbox" title="Checkbox Example" />
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={CheckboxCODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1">All available props for the Checkbox component.</Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>checked</CardTitle>
                <CardDescription>Whether the checkbox is checked</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Controlled value - use with onCheckedChange for controlled components
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>defaultChecked</CardTitle>
                <CardDescription>Whether the checkbox is initially checked</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Uncontrolled value - use for simple cases without state management
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>onCheckedChange</CardTitle>
                <CardDescription>Callback when checkbox state changes</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> (checked: boolean) =&gt; void
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Called when user toggles the checkbox
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>disabled</CardTitle>
                <CardDescription>Whether the checkbox is disabled</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Prevents user interaction and reduces opacity
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>required</CardTitle>
                <CardDescription>Whether the checkbox is required</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Adds required attribute for form validation
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>name</CardTitle>
                <CardDescription>Name attribute for form submission</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Used when checkbox is part of a form
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>value</CardTitle>
                <CardDescription>Value attribute for form submission</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> 'on'
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Value submitted when checkbox is checked
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>className</CardTitle>
                <CardDescription>Additional CSS classes to apply</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Merges with existing checkbox classes
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>...props</CardTitle>
                <CardDescription>Radix UI Checkbox props</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong>{' '}
                  <code>React.ComponentProps&lt;typeof CheckboxPrimitive.Root&gt;</code>
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  All Radix UI Checkbox Root component props are supported
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The Checkbox component follows accessibility best practices built on Radix UI.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Checkboxes are fully keyboard accessible</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Tab</strong> - Navigate to the checkbox
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Space</strong> - Toggle checkbox state
              </Typography>
              <Typography variant="body2" className="block">
                • <strong>Shift + Tab</strong> - Navigate to previous focusable element
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
                • Use <code>aria-label</code> for checkboxes without visible labels
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Use <code>aria-describedby</code> to link to supporting text
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <code>aria-checked</code> is automatically managed (true/false)
              </Typography>
              <Typography variant="body2" className="block">
                • <code>aria-required</code> is set when required prop is true
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
                Checkboxes have visible focus states that follow the LSD design system's focus
                indicators, ensuring keyboard users can always see which element has focus.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
      </PageContent>

      <PageNavigation
        previous={{
          title: 'Button Group',
          href: '/components/button-group',
        }}
        next={{
          title: 'Input',
          href: '/components/input',
        }}
      />
    </DocsLayout>
  );
}
