'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@nipsys/shadcn-lsd';
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
          <div className="space-y-4">
            <p className="lsd:text-lsd-text-secondary">
              The Calendar component is a comprehensive date picker built on top of
              react-day-picker, providing a flexible and accessible interface for date selection. It
              features:
            </p>
            <ul className="list-disc list-inside space-y-2 lsd:text-lsd-text-secondary">
              <li>Multiple selection modes: single, multiple, and range selection</li>
              <li>Month and year navigation with customizable controls</li>
              <li>Support for disabled dates and date range validation</li>
              <li>Customizable styling with LSD design tokens</li>
              <li>Built-in accessibility features (keyboard navigation, ARIA attributes)</li>
              <li>Integration with forms and validation libraries</li>
              <li>Responsive design with mobile-friendly touch interactions</li>
            </ul>
          </div>
        </PageSection>

        <PageSection title="Installation">
          <p className="lsd:text-lsd-text-secondary">
            The Calendar component requires react-day-picker as a peer dependency. Install it along
            with @nipsys/shadcn-lsd:
          </p>
          <div className="mt-4 p-4 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded-lg">
            <code className="text-sm lsd:text-lsd-text-primary block mb-2">
              npm install @nipsys/shadcn-lsd react-day-picker date-fns
            </code>
          </div>
        </PageSection>

        <PageSection title="Import">
          <div className="mb-4 p-4 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded-lg">
            <code className="text-sm lsd:text-lsd-text-primary">
              import '{'{'} Calendar {'}'}' from '@nipsys/shadcn-lsd';
            </code>
          </div>
        </PageSection>

        <PageSection title="Basic Usage">
          <p className="mb-4 lsd:text-lsd-text-secondary">
            A simple calendar with single date selection:
          </p>
          <IframeExample size="md" src="/examples/calendar/basic" title="Basic Calendar" />
          <Accordion type="single" collapsible>
            <AccordionItem value="code">
              <AccordionTrigger>View code</AccordionTrigger>
              <AccordionContent>
                <CodeExample code={BasicCode} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </PageSection>

        <PageSection title="Form Controlled">
          <p className="mb-4 lsd:text-lsd-text-secondary">
            Calendar component controlled by React state with form integration:
          </p>
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
        </PageSection>

        <PageSection title="With Validation">
          <p className="mb-4 lsd:text-lsd-text-secondary">
            Calendar with disabled dates, date range constraints, and custom validation:
          </p>
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
        </PageSection>

        <PageSection title="API Reference">
          <div className="space-y-6">
            <div>
              <h3 className="lsd:text-xl lsd:font-medium mb-2">Calendar</h3>
              <p className="mb-2 lsd:text-lsd-text-secondary">
                The main calendar component that renders the date picker interface.
              </p>
              <table className="w-full text-left lsd:border-collapse">
                <thead>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <th className="lsd:py-2 lsd:px-3">Prop</th>
                    <th className="lsd:py-2 lsd:px-3">Type</th>
                    <th className="lsd:py-2 lsd:px-3">Default</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">mode</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">single | multiple | range</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">single</td>
                  </tr>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">selected</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">Date | Date[] | DateRange</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">undefined</td>
                  </tr>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">defaultMonth</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">Date</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">today</td>
                  </tr>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">disabled</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">Date[] | DateRange | Matcher</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">undefined</td>
                  </tr>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">fromMonth</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">Date</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">undefined</td>
                  </tr>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">toMonth</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">Date</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">undefined</td>
                  </tr>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">showOutsideDays</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">boolean</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">true</td>
                  </tr>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">captionLayout</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">label | buttons</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">label</td>
                  </tr>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">buttonVariant</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">Button variant</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">ghost</td>
                  </tr>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">onSelect</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">(date) =&gt; void</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">undefined</td>
                  </tr>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">className</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">string</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">undefined</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-2 text-sm lsd:text-lsd-text-secondary">
                Extends react-day-picker DayPicker props. See
                <a
                  href="https://daypicker.dev/"
                  className="lsd:text-blue-500 hover:lsd:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  react-day-picker documentation
                </a>
                for complete reference.
              </p>
            </div>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <div className="space-y-4">
            <p className="mb-4 lsd:text-lsd-text-secondary">
              The Calendar component follows WAI-ARIA accessibility best practices:
            </p>
            <ul className="list-disc list-inside space-y-2 lsd:text-lsd-text-secondary">
              <li>
                Full keyboard navigation support (Arrow keys, Home, End, PageUp, PageDown, etc.)
              </li>
              <li>Screen reader friendly with proper ARIA roles (grid, row, gridcell)</li>
              <li>High contrast colors using LSD design tokens</li>
              <li>Focus indicators for keyboard users</li>
              <li>Semantic HTML structure</li>
              <li>Disabled states are properly announced to screen readers</li>
            </ul>
            <div className="mt-4 p-4 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded-lg">
              <h4 className="font-medium mb-2">Keyboard Shortcuts</h4>
              <ul className="list-disc list-inside space-y-1 text-sm lsd:text-lsd-text-secondary">
                <li>
                  <strong>Arrow keys:</strong> Navigate between days
                </li>
                <li>
                  <strong>Page Up / Page Down:</strong> Navigate months
                </li>
                <li>
                  <strong>Home:</strong> Jump to first day of month
                </li>
                <li>
                  <strong>End:</strong> Jump to last day of month
                </li>
                <li>
                  <strong>Enter / Space:</strong> Select focused date
                </li>
              </ul>
            </div>
          </div>
        </PageSection>

        <PageSection title="Examples">
          <div className="space-y-4">
            <p className="lsd:text-lsd-text-secondary">Explore more Calendar examples:</p>
            <ul className="list-disc list-inside space-y-2 lsd:text-lsd-text-secondary">
              <li>
                <a
                  href="/examples/calendar/basic"
                  className="lsd:text-blue-500 hover:lsd:underline"
                >
                  Basic Calendar
                </a>{' '}
                - Simple single date selection
              </li>
              <li>
                <a
                  href="/examples/calendar/form-controlled"
                  className="lsd:text-blue-500 hover:lsd:underline"
                >
                  Form Controlled
                </a>{' '}
                - Controlled component with form integration
              </li>
              <li>
                <a
                  href="/examples/calendar/with-validation"
                  className="lsd:text-blue-500 hover:lsd:underline"
                >
                  With Validation
                </a>{' '}
                - Disabled dates and date range constraints
              </li>
            </ul>
          </div>
        </PageSection>

        <PageNavigation
          previous={{ title: 'Autocomplete', href: '/components/autocomplete' }}
          next={{ title: 'Card', href: '/components/card' }}
        />
      </PageContent>
    </DocsLayout>
  );
}
