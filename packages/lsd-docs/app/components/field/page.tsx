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
import { CODE as BASIC_CODE } from '@/examples/field/basic/page';
import { CODE as HORIZONTAL_CODE } from '@/examples/field/horizontal/page';
import { CODE as LEGEND_DESCRIPTION_CODE } from '@/examples/field/legend-description/page';

export default function FieldPage() {
  return (
    <DocsLayout>
      <PageHeader
        title="Field"
        description="A flexible composition system for building form field layouts with orientations and nested components"
      />

      <PageContent>
        <PageSection title="About Field">
          <Typography variant="body1" className="block">
            Field components provide a structured way to organize form elements with consistent
            spacing and orientation. They include containers for grouping fields, semantic
            fieldset/legend wrappers, and utilities for labels, descriptions, and separators.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Field components from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                code={`import {
  Field,
  FieldGroup,
  FieldSet,
  FieldLegend,
  FieldDescription,
  FieldLabel,
  FieldContent,
  FieldSeparator,
} from '@nipsys/shadcn-lsd'

export default function MyComponent() {
  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="field">Label</FieldLabel>
        <Input id="field" />
      </Field>
    </FieldGroup>
  );
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Basic Usage">
          <Typography variant="body1">
            Use Field components to create simple vertical form layouts.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Basic Profile Form</CardTitle>
              <CardDescription>Simple vertical form with name and email fields</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample size="md" src="/examples/field/basic" title="Basic Field" />
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={BASIC_CODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Horizontal Orientation">
          <Typography variant="body1">
            Use the <code>orientation="horizontal"</code> prop to align fields with labels on the
            right side of the control.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Email Notifications</CardTitle>
              <CardDescription>Horizontal field layout with checkboxes</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample size="md" src="/examples/field/horizontal" title="Horizontal Field" />
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={HORIZONTAL_CODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Legend and Description">
          <Typography variant="body1">
            Use <code>FieldSet</code>, <code>FieldLegend</code>, and <code>FieldDescription</code>{' '}
            for semantically grouped form sections.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Payment Form</CardTitle>
              <CardDescription>Grouped form sections with legends and descriptions</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                size="md"
                src="/examples/field/legend-description"
                title="Legend and Description"
              />
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={LEGEND_DESCRIPTION_CODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1">All available props for Field components.</Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>Field</CardTitle>
                <CardDescription>Main field container with orientation support</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>orientation:</strong> 'vertical' | 'horizontal' | 'responsive'
                </Typography>
                <Typography variant="body2" className="block">
                  Controls layout direction. Responsive defaults to vertical on mobile and
                  horizontal on md breakpoint.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>FieldGroup</CardTitle>
                <CardDescription>Container for vertical spacing</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Extends:</strong> HTMLDivElement
                </Typography>
                <Typography variant="body2" className="block">
                  Provides consistent vertical spacing between child fields using{' '}
                  <code>--lsd-spacing-base</code>
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>FieldSet</CardTitle>
                <CardDescription>Semantic fieldset wrapper</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Extends:</strong> HTMLFieldSetElement
                </Typography>
                <Typography variant="body2" className="block">
                  Renders a fieldset element with no default border or padding, suitable for use
                  with FieldLegend
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>FieldLegend</CardTitle>
                <CardDescription>Section heading for fieldsets</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Extends:</strong> HTMLLegendElement
                </Typography>
                <Typography variant="body2" className="block">
                  Renders at 1.5rem with medium font weight and bottom padding of{' '}
                  <code>--lsd-spacing-base</code>
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>FieldDescription</CardTitle>
                <CardDescription>Helper text for fields</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Extends:</strong> HTMLParagraphElement
                </Typography>
                <Typography variant="body2" className="block">
                  Renders at 0.875rem with secondary text color and 1rem bottom margin
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>FieldLabel</CardTitle>
                <CardDescription>Label for form controls</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>htmlFor:</strong> string (optional)
                </Typography>
                <Typography variant="body2" className="block">
                  Renders at 0.875rem with medium font weight and block display. Accepts{' '}
                  <code>htmlFor</code> to associate with input elements
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>FieldContent</CardTitle>
                <CardDescription>Responsive wrapper for input content</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Extends:</strong> HTMLDivElement
                </Typography>
                <Typography variant="body2" className="block">
                  Provides a full-width container for input elements in horizontal layouts
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>FieldSeparator</CardTitle>
                <CardDescription>Divider between sections</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Extends:</strong> HTMLHRElement
                </Typography>
                <Typography variant="body2" className="block">
                  Renders a horizontal rule with border color and 1rem top/bottom margin
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            Field components follow accessibility best practices using semantic HTML elements.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Semantic Markup</CardTitle>
              <CardDescription>Proper HTML elements for form accessibility</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <code>FieldSet</code> renders a native HTML fieldset element for grouping related
                fields
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <code>FieldLegend</code> renders a native HTML legend element for fieldset labels
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <code>FieldLabel</code> renders a native HTML label element with support for{' '}
                <code>htmlFor</code> attribute
              </Typography>
              <Typography variant="body2" className="block">
                • Use <code>htmlFor</code> prop on FieldLabel to associate labels with inputs for
                screen reader users
              </Typography>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Controls within fields are keyboard accessible</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block">
                Field containers themselves do not have keyboard interaction. Focus management is
                handled by the form controls (inputs, checkboxes, etc.) contained within them.
                Ensure all form controls have proper focus states.
              </Typography>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>ARIA Attributes</CardTitle>
              <CardDescription>Additional accessibility attributes supported</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <code>data-orientation</code> on Field indicates the layout direction
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <code>data-slot</code> attributes are added to all components for testing and
                styling
              </Typography>
              <Typography variant="body2" className="block">
                • Pass <code>aria-labelledby</code> and <code>aria-describedby</code> to form
                controls for additional associations
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
      </PageContent>

      <PageNavigation
        previous={{
          title: 'Typography',
          href: '/design-tokens/typography',
        }}
        next={{
          title: 'Card',
          href: '/components/card',
        }}
      />
    </DocsLayout>
  );
}
