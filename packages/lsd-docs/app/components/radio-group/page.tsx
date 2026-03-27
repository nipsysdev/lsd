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
import { CODE as BasicCode } from '@/examples/radio-group/basic/page';
import { CODE as DisabledCode } from '@/examples/radio-group/disabled/page';

export default function RadioGroupPage() {
  return (
    <DocsLayout>
      <PageHeader
        title="Radio Group"
        description="A radio group allows single selection from a set of mutually exclusive options"
      />

      <PageContent>
        <PageSection title="About Radio Group">
          <Typography variant="body1" className="block">
            The Radio Group component is built on Radix UI and follows accessibility patterns. It
            provides a rich set of features including single selection from mutually exclusive
            options, keyboard navigation, controlled and uncontrolled modes, disabled state support,
            label association for accessibility, and custom styling integration.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Radio Group component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                code={`import { RadioGroup, RadioGroupItem, Label } from '@nipsys/shadcn-lsd'

export default function MyComponent() {
  return (
    <RadioGroup defaultValue="option1">
      <div className="flex items-center gap-(--lsd-spacing-smaller)">
        <RadioGroupItem value="option1" id="r1" />
        <Label htmlFor="r1">Option 1</Label>
      </div>
      <div className="flex items-center gap-(--lsd-spacing-smaller)">
        <RadioGroupItem value="option2" id="r2" />
        <Label htmlFor="r2">Option 2</Label>
      </div>
    </RadioGroup>
  )
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features like labels, disabled states, and orientation options.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Basic Radio Group</CardTitle>
              <CardDescription>Radio group with associated Label components</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample size="md" src="/examples/radio-group/basic" title="Basic" />
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={BasicCode} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Disabled State</CardTitle>
              <CardDescription>Radio group with disabled items</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample size="md" src="/examples/radio-group/disabled" title="Disabled" />
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={DisabledCode} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1">
            All available props for the Radio Group components.
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>value</CardTitle>
                <CardDescription>Controlled value of the radio group</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Use this for controlled components
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>defaultValue</CardTitle>
                <CardDescription>Initial value for uncontrolled mode</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Use this for uncontrolled components
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>onValueChange</CardTitle>
                <CardDescription>Callback when value changes</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> (value: string) =&gt; void
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Called when a radio item is selected
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>disabled</CardTitle>
                <CardDescription>Disable the entire radio group</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Prevents interaction with all radio items
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
                  Used when radio group is part of a form
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>required</CardTitle>
                <CardDescription>Mark radio group as required</CardDescription>
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
                <CardTitle>orientation</CardTitle>
                <CardDescription>Layout direction of radio items</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> 'vertical' | 'horizontal'
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> vertical, horizontal
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> vertical
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>loop</CardTitle>
                <CardDescription>Enable keyboard navigation looping</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> true
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  When true, arrow keys wrap around to first/last item
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>value (RadioGroupItem)</CardTitle>
                <CardDescription>Unique value for this radio item</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> string (required)
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> -
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Must be unique within the radio group
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>id (RadioGroupItem)</CardTitle>
                <CardDescription>Custom ID for the radio item</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> auto-generated
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  If not provided, a unique ID is automatically generated
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>disabled (RadioGroupItem)</CardTitle>
                <CardDescription>Disable individual radio item</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Prevents interaction with this specific item
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>required (RadioGroupItem)</CardTitle>
                <CardDescription>Mark radio item as required</CardDescription>
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
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The Radio Group component follows WAI-ARIA patterns and is fully accessible.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Radio groups are fully keyboard accessible</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Tab</strong> - Focus on radio group
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>ArrowDown</strong> - Navigate to next item (vertical)
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>ArrowUp</strong> - Navigate to previous item (vertical)
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>ArrowRight</strong> - Navigate to next item (horizontal)
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>ArrowLeft</strong> - Navigate to previous item (horizontal)
              </Typography>
              <Typography variant="body2" className="block">
                • <strong>Space</strong> / <strong>Enter</strong> - Select focused item
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
                • <code>role="radiogroup"</code> on the container
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <code>role="radio"</code> on each radio item
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <code>aria-checked="true|false"</code> indicates selection state
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <code>aria-disabled="true|false"</code> indicates disabled state
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <code>aria-required="true|false"</code> indicates required state
              </Typography>
              <Typography variant="body2" className="block">
                • Use <code>Label</code> components with <code>htmlFor</code> for proper
                associations
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
                Components have visible focus states that follow the LSD design system's focus
                indicators, ensuring keyboard users can always see which element has focus.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>

        <PageNavigation
          previous={{ title: 'Form', href: '/components/form' }}
          next={{ title: 'Slider', href: '/components/slider' }}
        />
      </PageContent>
    </DocsLayout>
  );
}
