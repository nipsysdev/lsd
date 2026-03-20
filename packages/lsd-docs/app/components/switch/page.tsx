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
  Switch,
  Typography,
} from '@nipsys/shadcn-lsd';
import { useRef } from 'react';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { useIframeThemeSync } from '@/components/docs/useIframeThemeSync';
import { CODE as SwitchBasicCODE } from '@/examples/switch/basic/SwitchBasicExample';
import { CODE as SwitchControlledCODE } from '@/examples/switch/controlled/SwitchControlledExample';

export default function SwitchPage() {
  const basicIframeRef = useRef<HTMLIFrameElement>(null);
  const controlledIframeRef = useRef<HTMLIFrameElement>(null);

  useIframeThemeSync(basicIframeRef, controlledIframeRef);

  return (
    <DocsLayout>
      <PageHeader
        title="Switch"
        description="Toggle switch component for binary choices with smooth animations and multiple sizes"
      />

      <PageContent>
        <PageSection title="About Switch">
          <Typography variant="body1" className="block">
            Switches are toggle controls that allow users to choose between two mutually exclusive
            states, typically on and off. They provide a clear visual indication of the current
            state with smooth animated transitions.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Switch component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                code={`import { Switch } from '@nipsys/shadcn-lsd'

export default function MyComponent() {
  return <Switch />
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Sizes">
          <Typography variant="body1">
            Switches come in three sizes to fit different contexts and layouts.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>All Sizes</CardTitle>
              <CardDescription>Small, medium, and large switch variants</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
                <div className="flex items-center gap-(--lsd-spacing-base)">
                  <Switch size="sm" />
                  <Typography variant="body2">Small</Typography>
                </div>
                <div className="flex items-center gap-(--lsd-spacing-base)">
                  <Switch size="md" />
                  <Typography variant="body2">Medium</Typography>
                </div>
                <div className="flex items-center gap-(--lsd-spacing-base)">
                  <Switch size="lg" />
                  <Typography variant="body2">Large</Typography>
                </div>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample
                      code={`<div className="flex items-center gap-(--lsd-spacing-base)">
  <Switch size="sm" />
  <Typography variant="body2">Small</Typography>
</div>
<div className="flex items-center gap-(--lsd-spacing-base)">
  <Switch size="md" />
  <Typography variant="body2">Medium</Typography>
</div>
<div className="flex items-center gap-(--lsd-spacing-base)">
  <Switch size="lg" />
  <Typography variant="body2">Large</Typography>
</div>`}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features like controlled/uncontrolled states, disabled state, and form
            integration.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Basic Examples</CardTitle>
              <CardDescription>
                Uncontrolled switches with default states and disabled options
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <div className="aspect-video w-full overflow-hidden">
                  <iframe
                    ref={basicIframeRef}
                    src="/examples/switch/basic"
                    className="size-full"
                    title="Switch Basic Example"
                  />
                </div>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={SwitchBasicCODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Controlled Component</CardTitle>
              <CardDescription>Switch with controlled state using React state</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <div className="aspect-video w-full overflow-hidden">
                  <iframe
                    ref={controlledIframeRef}
                    src="/examples/switch/controlled"
                    className="size-full"
                    title="Switch Controlled Example"
                  />
                </div>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={SwitchControlledCODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1">All available props for the Switch component.</Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>size</CardTitle>
                <CardDescription>The size of the switch</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> SizeVariant
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> sm, md, lg
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> md
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>checked</CardTitle>
                <CardDescription>Whether the switch is checked (controlled)</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Use for controlled component state
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>defaultChecked</CardTitle>
                <CardDescription>
                  Whether the switch is initially checked (uncontrolled)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Use for uncontrolled component state
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>onCheckedChange</CardTitle>
                <CardDescription>Callback when switch state changes</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> (checked: boolean) {'=>'} void
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Called when the switch is toggled
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>disabled</CardTitle>
                <CardDescription>Whether the switch is disabled</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Disables interaction and reduces opacity
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>required</CardTitle>
                <CardDescription>Whether the switch is required in a form</CardDescription>
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
                  Used when submitting form data
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
                  Value submitted when switch is checked
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>className</CardTitle>
                <CardDescription>Additional CSS classes to apply</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Merges with existing switch classes
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>...props</CardTitle>
                <CardDescription>Radix UI Switch props and HTML attributes</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  <strong>Type:</strong> React.ComponentPropsWithoutRef&lt;typeof
                  SwitchPrimitive.Root&gt;
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  All Radix UI Switch and HTML attributes are supported
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The Switch component follows accessibility best practices built on Radix UI.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Switches are fully keyboard accessible</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Tab</strong> - Navigate to the switch
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Shift + Tab</strong> - Navigate to previous focusable element
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Space</strong> - Toggle the switch state
              </Typography>
              <Typography variant="body2" className="block">
                • <strong>Enter</strong> - Toggle the switch state
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
                • <code>aria-checked</code> is automatically set based on the switch state
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <code>aria-disabled</code> is set when the switch is disabled
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Use <code>aria-label</code> for switches without visible labels
              </Typography>
              <Typography variant="body2" className="block">
                • Use <code>aria-labelledby</code> to associate with label elements
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
                Switches have visible focus states that follow the LSD design system's focus
                indicators, ensuring keyboard users can always see which element has focus. The
                focus ring appears around the switch track when it receives keyboard focus.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>

        <PageNavigation
          previous={{
            title: 'Select',
            href: '/components/select',
          }}
          next={{
            title: 'Command',
            href: '/components/command',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
