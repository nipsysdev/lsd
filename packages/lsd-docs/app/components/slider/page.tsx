'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@nipsys/shadcn-lsd';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { IframeExample } from '@/components/docs/IframeExample';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { CODE as BasicCode } from '@/examples/slider/basic/page';
import { CODE as ControlledCode } from '@/examples/slider/controlled/page';
import { CODE as DisabledCode } from '@/examples/slider/disabled/page';
import { CODE as MultipleCode } from '@/examples/slider/multiple/page';
import { CODE as RangeCode } from '@/examples/slider/range/page';
import { CODE as VerticalCode } from '@/examples/slider/vertical/page';

export default function SliderPage() {
  return (
    <DocsLayout>
      <PageHeader
        title="Slider"
        description="A slider that allows users to select a value from a range by dragging a handle along a track."
      />

      <PageContent>
        <PageSection title="About Slider">
          <div className="space-y-4">
            <p className="lsd:text-lsd-text-secondary">
              The Slider component is built on Radix UI and provides a smooth, intuitive way for
              users to select values from a continuous range. It supports various interaction
              patterns:
            </p>
            <ul className="list-disc list-inside space-y-2 lsd:text-lsd-text-secondary">
              <li>Single value selection (one thumb)</li>
              <li>Range selection (two thumbs for min/max)</li>
              <li>Multiple thumbs for advanced use cases</li>
              <li>Horizontal and vertical orientations</li>
              <li>Controlled and uncontrolled modes</li>
              <li>Disabled state support</li>
              <li>Custom step increments</li>
              <li>LSD theme integration for consistent styling</li>
            </ul>
          </div>
        </PageSection>

        <PageSection title="Installation">
          <p className="lsd:text-lsd-text-secondary">
            The Slider component is included in @nipsys/shadcn-lsd. No additional installation steps
            are required.
          </p>
          <div className="mt-4">
            <CodeExample code={`import { Slider } from '@nipsys/shadcn-lsd'`} />
          </div>
        </PageSection>

        <PageSection title="Basic Usage">
          <p className="mb-4 lsd:text-lsd-text-secondary">A simple slider with a single value:</p>
          <IframeExample size="md" src="/examples/slider/basic" title="Basic" />
          <Accordion type="single" collapsible>
            <AccordionItem value="code">
              <AccordionTrigger>View code</AccordionTrigger>
              <AccordionContent>
                <CodeExample code={BasicCode} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </PageSection>

        <PageSection title="Range Selection">
          <p className="mb-4 lsd:text-lsd-text-secondary">
            Use an array with two values for a range slider:
          </p>
          <IframeExample size="md" src="/examples/slider/range" title="Range" />
          <Accordion type="single" collapsible>
            <AccordionItem value="code">
              <AccordionTrigger>View code</AccordionTrigger>
              <AccordionContent>
                <CodeExample code={RangeCode} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </PageSection>

        <PageSection title="Multiple Thumbs">
          <p className="mb-4 lsd:text-lsd-text-secondary">
            Use an array with multiple values for multiple thumbs:
          </p>
          <IframeExample size="md" src="/examples/slider/multiple" title="Multiple" />
          <Accordion type="single" collapsible>
            <AccordionItem value="code">
              <AccordionTrigger>View code</AccordionTrigger>
              <AccordionContent>
                <CodeExample code={MultipleCode} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </PageSection>

        <PageSection title="Vertical Orientation">
          <p className="mb-4 lsd:text-lsd-text-secondary">
            Use orientation="vertical" for a vertical slider:
          </p>
          <IframeExample size="md" src="/examples/slider/vertical" title="Vertical" />
          <Accordion type="single" collapsible>
            <AccordionItem value="code">
              <AccordionTrigger>View code</AccordionTrigger>
              <AccordionContent>
                <CodeExample code={VerticalCode} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </PageSection>

        <PageSection title="Controlled Component">
          <p className="mb-4 lsd:text-lsd-text-secondary">
            Use the value and onValueChange props for controlled sliders:
          </p>
          <IframeExample size="md" src="/examples/slider/controlled" title="Controlled" />
          <Accordion type="single" collapsible>
            <AccordionItem value="code">
              <AccordionTrigger>View code</AccordionTrigger>
              <AccordionContent>
                <CodeExample code={ControlledCode} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </PageSection>

        <PageSection title="Disabled State">
          <p className="mb-4 lsd:text-lsd-text-secondary">
            Use the disabled prop to disable the slider:
          </p>
          <IframeExample size="md" src="/examples/slider/disabled" title="Disabled" />
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
              <h3 className="lsd:text-xl lsd:font-medium mb-2">Slider</h3>
              <p className="mb-2 lsd:text-lsd-text-secondary">
                The root slider component. All props from Radix UI Slider are supported.
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
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">defaultValue</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">number[]</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">[min, max]</td>
                  </tr>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">value</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">number[]</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">undefined</td>
                  </tr>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">onValueChange</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">(value: number[]) =&gt; void</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">undefined</td>
                  </tr>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">min</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">number</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">0</td>
                  </tr>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">max</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">number</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">100</td>
                  </tr>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">step</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">number</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">1</td>
                  </tr>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">orientation</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">'horizontal' | 'vertical'</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">'horizontal'</td>
                  </tr>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">disabled</td>
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
              The Slider component follows WAI-ARIA patterns and is fully accessible:
            </p>
            <div>
              <h4 className="font-semibold mb-2 lsd:text-lsd-text-primary">Keyboard Navigation</h4>
              <ul className="list-disc list-inside space-y-2 lsd:text-lsd-text-secondary">
                <li>
                  <kbd className="lsd:px-2 lsd:py-1 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded lsd:text-sm">
                    ArrowLeft
                  </kbd>
                  <kbd className="lsd:px-2 lsd:py-1 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded lsd:text-sm">
                    ArrowDown
                  </kbd>{' '}
                  - Decrement by step
                </li>
                <li>
                  <kbd className="lsd:px-2 lsd:py-1 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded lsd:text-sm">
                    ArrowRight
                  </kbd>
                  <kbd className="lsd:px-2 lsd:py-1 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded lsd:text-sm">
                    ArrowUp
                  </kbd>{' '}
                  - Increment by step
                </li>
                <li>
                  <kbd className="lsd:px-2 lsd:py-1 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded lsd:text-sm">
                    PageDown
                  </kbd>{' '}
                  - Decrement by larger amount
                </li>
                <li>
                  <kbd className="lsd:px-2 lsd:py-1 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded lsd:text-sm">
                    PageUp
                  </kbd>{' '}
                  - Increment by larger amount
                </li>
                <li>
                  <kbd className="lsd:px-2 lsd:py-1 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded lsd:text-sm">
                    Home
                  </kbd>{' '}
                  - Jump to minimum value
                </li>
                <li>
                  <kbd className="lsd:px-2 lsd:py-1 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded lsd:text-sm">
                    End
                  </kbd>{' '}
                  - Jump to maximum value
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 lsd:text-lsd-text-primary">ARIA Attributes</h4>
              <ul className="list-disc list-inside space-y-2 lsd:text-lsd-text-secondary">
                <li>
                  <code className="lsd:font-mono lsd:text-sm">role="slider"</code> on each thumb
                </li>
                <li>
                  <code className="lsd:font-mono lsd:text-sm">aria-valuenow</code> indicates current
                  value
                </li>
                <li>
                  <code className="lsd:font-mono lsd:text-sm">aria-valuemin</code> indicates minimum
                  value
                </li>
                <li>
                  <code className="lsd:font-mono lsd:text-sm">aria-valuemax</code> indicates maximum
                  value
                </li>
                <li>
                  <code className="lsd:font-mono lsd:text-sm">aria-disabled</code> indicates
                  disabled state
                </li>
              </ul>
            </div>
          </div>
        </PageSection>

        <PageNavigation
          previous={{ title: 'Radio Group', href: '/components/radio-group' }}
          next={{ title: 'Select', href: '/components/select' }}
        />
      </PageContent>
    </DocsLayout>
  );
}
