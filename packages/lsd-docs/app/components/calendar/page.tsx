'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, Typography } from '@nipsys/lsd';
import { useRef } from 'react';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { IframeExample } from '@/components/docs/IframeExample';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { useSendThemeToIframes } from '@/components/docs/useSendIframes';
import {
  CODE as CalendarBasicCODE,
  SIZE as CalendarBasicSIZE,
} from '@/examples/calendar/basic/page';
import {
  CODE as CalendarFormControlledCODE,
  SIZE as CalendarFormControlledSIZE,
} from '@/examples/calendar/form-controlled/page';
import {
  CODE as CalendarWithValidationCODE,
  SIZE as CalendarWithValidationSIZE,
} from '@/examples/calendar/with-validation/page';

export default function CalendarPage() {
  const CalendarBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const CalendarFormControlledIframeRef = useRef<HTMLIFrameElement>(null);
  const CalendarWithValidationIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    CalendarBasicIframeRef,
    CalendarFormControlledIframeRef,
    CalendarWithValidationIframeRef
  );

  return (
    <DocsLayout>
      <PageHeader
        title="Calendar"
        description="Interactive calendar for selecting single dates, multiple dates, or date ranges."
      />

      <PageContent>
        <PageSection title="About Calendar">
          <Typography variant="body1" className="block">
            A flexible calendar component built on react-day-picker that supports single, multiple,
            and range selection modes. Includes navigation buttons, disabled date constraints,
            localization support, and customizable styling through React DayPicker props.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Calendar component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Calendar } from '@nipsys/lsd'

export default function MyComponent() {
  return <Calendar />
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Usage">
          <Typography variant="body1">
            The simplest form of the component with default styling.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Basic</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={CalendarBasicIframeRef}
                size={CalendarBasicSIZE}
                src="/examples/calendar/basic"
                title="Basic Example"
              />
              <CodeExample code={CalendarBasicCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features and capabilities of the component.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Form Controlled</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={CalendarFormControlledIframeRef}
                size={CalendarFormControlledSIZE}
                src="/examples/calendar/form-controlled"
                title="Form Controlled Example"
              />
              <CodeExample code={CalendarFormControlledCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>With Validation</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={CalendarWithValidationIframeRef}
                size={CalendarWithValidationSIZE}
                src="/examples/calendar/with-validation"
                title="With Validation Example"
              />
              <CodeExample code={CalendarWithValidationCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Composition">
          <Card className="mt-(--lsd-spacing-base)">
            <CardContent className="pt-(--lsd-spacing-base)">
              <CodeBlock>{['Calendar', '└── CalendarDayButton']}</CodeBlock>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <div className="flex flex-col gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>React DayPicker Documentation</CardTitle>
                <CardDescription>
                  Calendar is built on react-day-picker and extends all its props
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://daypicker.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View React DayPicker documentation →
                </a>
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
                • Arrow keys - Navigate between days
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Page Up/Down - Navigate between months
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Home/End - Navigate to first/last day of month
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Enter or Space - Select a day
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Tab - Navigate into/out of calendar
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
                • role="grid" on the calendar container
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • role="gridcell" and aria-label on each day button
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-selected indicates selected dates
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-disabled indicates disabled dates
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-describedby links to supporting text
              </Typography>
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Focus States</CardTitle>
              <CardDescription>Visible focus indicators for keyboard users</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Arrow key navigation moves focus between grid cells. Tab focus moves into the
                calendar. Enter or Space activates the focused day.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
        <PageNavigation
          previous={{
            title: 'Button-group',
            href: '/components/button-group',
          }}
          next={{
            title: 'Checkbox',
            href: '/components/checkbox',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
