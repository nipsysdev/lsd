'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@nipsys/shadcn-lsd';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { IframeExample } from '@/components/docs/IframeExample';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { CODE as BasicCode } from '@/examples/radio-group/basic/page';
import { CODE as DisabledCode } from '@/examples/radio-group/disabled/page';
import { CODE as WithLabelsCode } from '@/examples/radio-group/with-labels/page';

export default function RadioGroupPage() {
  return (
    <DocsLayout>
      <PageHeader
        title="Radio Group"
        description="A radio group allows single selection from a set of mutually exclusive options"
      />

      <PageContent>
        <PageSection title="About Radio Group">
          <div className="space-y-4">
            <p className="lsd:text-lsd-text-secondary">
              The Radio Group component is built on Radix UI and follows accessibility patterns. It
              provides a rich set of features including:
            </p>
            <ul className="list-disc list-inside space-y-2 lsd:text-lsd-text-secondary">
              <li>Single selection from mutually exclusive options</li>
              <li>Keyboard navigation (arrow keys, Tab, Enter, Escape)</li>
              <li>Controlled and uncontrolled modes</li>
              <li>Disabled state support</li>
              <li>Label association for accessibility</li>
              <li>Custom styling integration</li>
            </ul>
          </div>
        </PageSection>

        <PageSection title="Installation">
          <p className="lsd:text-lsd-text-secondary">
            The Radio Group component is included in @nipsys/shadcn-lsd. No additional installation
            steps are required.
          </p>
          <div className="mt-4">
            <CodeExample code={`import { RadioGroup, RadioGroupItem } from '@nipsys/shadcn-lsd'`} />
          </div>
        </PageSection>

        <PageSection title="Basic Usage">
          <p className="mb-4 lsd:text-lsd-text-secondary">
            Here&apos;s a simple radio group with basic items:
          </p>
          <IframeExample size="md" src="/examples/radio-group/basic" title="Basic" />
          <Accordion type="single" collapsible>
            <AccordionItem value="code">
              <AccordionTrigger>View code</AccordionTrigger>
              <AccordionContent>
                <CodeExample code={BasicCode} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </PageSection>

        <PageSection title="With Labels">
          <p className="mb-4 lsd:text-lsd-text-secondary">
            Radio group with associated Label components:
          </p>
          <IframeExample size="md" src="/examples/radio-group/with-labels" title="With Labels" />
          <Accordion type="single" collapsible>
            <AccordionItem value="code">
              <AccordionTrigger>View code</AccordionTrigger>
              <AccordionContent>
                <CodeExample code={WithLabelsCode} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </PageSection>

        <PageSection title="Disabled State">
          <p className="mb-4 lsd:text-lsd-text-secondary">Radio button with disabled state:</p>
          <IframeExample size="md" src="/examples/radio-group/disabled" title="Disabled" />
          <Accordion type="single" collapsible>
            <AccordionItem value="code">
              <AccordionTrigger>View code</AccordionTrigger>
              <AccordionContent>
                <CodeExample code={DisabledCode} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </PageSection>

        <PageSection title="API Reference">
          <div className="space-y-6">
            <div>
              <h3 className="lsd:text-xl lsd:font-medium mb-2">RadioGroup</h3>
              <p className="mb-2 lsd:text-lsd-text-secondary">
                The root radio group component that manages shared state.
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
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">value</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">string</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">undefined</td>
                  </tr>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">defaultValue</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">string</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">undefined</td>
                  </tr>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">onValueChange</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">(value: string) =&gt; void</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">undefined</td>
                  </tr>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">disabled</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">boolean</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">false</td>
                  </tr>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">name</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">string</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">undefined</td>
                  </tr>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">required</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">boolean</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">false</td>
                  </tr>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">orientation</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">
                      &apos;vertical&apos; | &apos;horizontal&apos;
                    </td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">&apos;vertical&apos;</td>
                  </tr>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">loop</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">boolean</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">true</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="lsd:text-xl lsd:font-medium mb-2">RadioGroupItem</h3>
              <p className="mb-2 lsd:text-lsd-text-secondary">
                An individual radio button within the radio group.
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
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">value</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">string (required)</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">-</td>
                  </tr>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">id</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">string</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">auto-generated</td>
                  </tr>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">disabled</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">boolean</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">false</td>
                  </tr>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">required</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">boolean</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">false</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <div className="space-y-4">
            <p className="mb-4 lsd:text-lsd-text-secondary">
              The Radio Group component follows WAI-ARIA patterns and is fully accessible:
            </p>
            <div>
              <h4 className="font-semibold mb-2 lsd:text-lsd-text-primary">Keyboard Navigation</h4>
              <ul className="list-disc list-inside space-y-2 lsd:text-lsd-text-secondary">
                <li>
                  <kbd className="lsd:px-2 lsd:py-1 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded lsd:text-sm">
                    Tab
                  </kbd>{' '}
                  - Focus on radio group
                </li>
                <li>
                  <kbd className="lsd:px-2 lsd:py-1 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded lsd:text-sm">
                    ArrowDown
                  </kbd>{' '}
                  - Navigate to next item (vertical)
                </li>
                <li>
                  <kbd className="lsd:px-2 lsd:py-1 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded lsd:text-sm">
                    ArrowUp
                  </kbd>{' '}
                  - Navigate to previous item (vertical)
                </li>
                <li>
                  <kbd className="lsd:px-2 lsd:py-1 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded lsd:text-sm">
                    ArrowRight
                  </kbd>{' '}
                  - Navigate to next item (horizontal)
                </li>
                <li>
                  <kbd className="lsd:px-2 lsd:py-1 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded lsd:text-sm">
                    ArrowLeft
                  </kbd>{' '}
                  - Navigate to previous item (horizontal)
                </li>
                <li>
                  <kbd className="lsd:px-2 lsd:py-1 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded lsd:text-sm">
                    Space
                  </kbd>{' '}
                  /{' '}
                  <kbd className="lsd:px-2 lsd:py-1 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded lsd:text-sm">
                    Enter
                  </kbd>{' '}
                  - Select focused item
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 lsd:text-lsd-text-primary">ARIA Attributes</h4>
              <ul className="list-disc list-inside space-y-2 lsd:text-lsd-text-secondary">
                <li>
                  <code className="lsd:font-mono lsd:text-sm">role=&quot;radiogroup&quot;</code> on
                  the container
                </li>
                <li>
                  <code className="lsd:font-mono lsd:text-sm">role=&quot;radio&quot;</code> on each
                  radio item
                </li>
                <li>
                  <code className="lsd:font-mono lsd:text-sm">
                    aria-checked=&quot;true|false&quot;
                  </code>{' '}
                  indicates selection state
                </li>
                <li>
                  <code className="lsd:font-mono lsd:text-sm">
                    aria-disabled=&quot;true|false&quot;
                  </code>{' '}
                  indicates disabled state
                </li>
                <li>
                  <code className="lsd:font-mono lsd:text-sm">
                    aria-required=&quot;true|false&quot;
                  </code>{' '}
                  indicates required state
                </li>
                <li>Use `Label` components with `htmlFor` for proper associations</li>
              </ul>
            </div>
          </div>
        </PageSection>

        <PageNavigation
          previous={{ title: 'Progress', href: '/components/progress' }}
          next={{ title: 'Select', href: '/components/select' }}
        />
      </PageContent>
    </DocsLayout>
  );
}
