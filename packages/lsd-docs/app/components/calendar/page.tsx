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
import { CODE as BasicCode } from '@/examples/calendar/basic/page';
import { CODE as FormControlledCode } from '@/examples/calendar/form-controlled/page';
import { CODE as WithValidationCode } from '@/examples/calendar/with-validation/page';

export default function CalendarPage() {
  return (
    <DocsLayout>
      <PageHeader
        title="Calendar"
        description="A calendar component that displays and allows users to select dates, with support for single, multiple, and range selection modes."
      />

      <PageContent>
        <PageSection title="About Calendar">
          <Typography variant="body1" className="block">
            The Calendar component is a comprehensive date picker built on top of react-day-picker,
            providing a flexible and accessible interface for date selection. It features multiple
            selection modes, month and year navigation, support for disabled dates and date range
            validation, customizable styling with LSD design tokens, built-in accessibility
            features, integration with forms and validation libraries, and responsive design with
            mobile-friendly touch interactions.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">
            The Calendar component requires react-day-picker as a peer dependency. Install it along
            with @nipsys/shadcn-lsd:
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                code={`import { Calendar } from '@nipsys/shadcn-lsd'

export default function MyComponent() {
  return <Calendar />
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Variants">
          <Typography variant="body1">
            Calendar supports multiple selection modes for different use cases.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Selection Modes</CardTitle>
              <CardDescription>Single, multiple, and range selection</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample size="md" src="/examples/calendar/basic" title="Basic Calendar" />
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
        </PageSection>

        <PageSection title="Sizes">
          <Typography variant="body1">
            Calendar adapts to different container sizes with responsive design.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Responsive Size</CardTitle>
              <CardDescription>Automatically adjusts to container width</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample size="md" src="/examples/calendar/basic" title="Calendar Size" />
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
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features like form control, validation, and date constraints.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Form Controlled</CardTitle>
              <CardDescription>
                Calendar component controlled by React state with form integration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                size="md"
                src="/examples/calendar/form-controlled"
                title="Form Controlled"
              />
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={FormControlledCode} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>With Validation</CardTitle>
              <CardDescription>
                Calendar with disabled dates, date range constraints, and custom validation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                size="md"
                src="/examples/calendar/with-validation"
                title="With Validation"
              />
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={WithValidationCode} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1">All available props for the Calendar component.</Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>mode</CardTitle>
                <CardDescription>The selection mode for the calendar</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> single | multiple | range
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> single, multiple, range
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> single
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>selected</CardTitle>
                <CardDescription>The currently selected date(s)</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> Date | Date[] | DateRange
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Controlled prop for selected date(s)
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>defaultMonth</CardTitle>
                <CardDescription>The month to display initially</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> Date
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> today
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Sets the initial month shown in the calendar
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>disabled</CardTitle>
                <CardDescription>Dates that should be disabled</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> Date[] | DateRange | Matcher
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Prevents selection of specified dates
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>fromMonth</CardTitle>
                <CardDescription>Earliest selectable month</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> Date
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Prevents navigation before this month
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>toMonth</CardTitle>
                <CardDescription>Latest selectable month</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> Date
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Prevents navigation after this month
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>showOutsideDays</CardTitle>
                <CardDescription>Show days from previous/next months</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> true
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Displays days from adjacent months in the grid
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>captionLayout</CardTitle>
                <CardDescription>Layout for the month/year caption</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> label | buttons
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> label, buttons
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> label
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Controls how month/year navigation is displayed
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>buttonVariant</CardTitle>
                <CardDescription>Button variant for day cells</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> Button variant
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> ghost
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Applies LSD button variant to day cells
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>onSelect</CardTitle>
                <CardDescription>Callback when a date is selected</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> (date) =&gt; void
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Called when user selects a date
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
                  Merges with existing calendar classes
                </Typography>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Additional Props</CardTitle>
              <CardDescription>Extends react-day-picker DayPicker props</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block">
                The Calendar component extends all props from react-day-picker. See{' '}
                <a
                  href="https://daypicker.dev/"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  react-day-picker documentation
                </a>{' '}
                for complete reference.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The Calendar component follows WAI-ARIA accessibility best practices.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Full keyboard support for date selection</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Arrow keys:</strong> Navigate between days
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Page Up / Page Down:</strong> Navigate months
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Home:</strong> Jump to first day of month
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>End:</strong> Jump to last day of month
              </Typography>
              <Typography variant="body2" className="block">
                • <strong>Enter / Space:</strong> Select focused date
              </Typography>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>ARIA Attributes</CardTitle>
              <CardDescription>Proper ARIA roles and attributes for screen readers</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Screen reader friendly with proper ARIA roles (grid, row, gridcell)
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Disabled states are properly announced to screen readers
              </Typography>
              <Typography variant="body2" className="block">
                • Semantic HTML structure for better accessibility
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
                indicators, ensuring keyboard users can always see which element has focus. High
                contrast colors using LSD design tokens ensure good visibility.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>

        <PageNavigation
          previous={{ title: 'Button Group', href: '/components/button-group' }}
          next={{ title: 'Checkbox', href: '/components/checkbox' }}
        />
      </PageContent>
    </DocsLayout>
  );
}
