'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@nipsys/shadcn-lsd';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { IframeExample } from '@/components/docs/IframeExample';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { CODE as AllVariantsCode } from '@/examples/alert/all-variants/page';
import { CODE as BasicCode } from '@/examples/alert/basic/page';
import { CODE as WithIconCode } from '@/examples/alert/with-icon/page';

export default function AlertPage() {
  return (
    <DocsLayout>
      <PageHeader
        title="Alert"
        description="Displays brief, important messages to attract the user's attention without interrupting their workflow."
      />

      <PageContent>
        <PageSection title="About Alert">
          <div className="space-y-4">
            <p className="lsd:text-lsd-text-secondary">
              The Alert component is a versatile notification element designed to convey important
              information to users. It provides a clean, accessible way to display messages with
              different semantic meanings:
            </p>
            <ul className="list-disc list-inside space-y-2 lsd:text-lsd-text-secondary">
              <li>
                Multiple variants for different message types (default, destructive, info, success,
                warning)
              </li>
              <li>Optional title and description for structured content</li>
              <li>Icon support for visual context</li>
              <li>Built-in accessibility with role="alert" attribute</li>
              <li>Responsive grid layout for optimal spacing</li>
              <li>LSD theme integration for consistent styling</li>
            </ul>
          </div>
        </PageSection>

        <PageSection title="Installation">
          <p className="lsd:text-lsd-text-secondary">
            The Alert component is included in @nipsys/shadcn-lsd. No additional installation steps
            are required.
          </p>
          <div className="mt-4 p-4 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded-lg">
            <code className="text-sm lsd:text-lsd-text-primary">
              npm install @nipsys/shadcn-lsd
            </code>
          </div>
        </PageSection>

        <PageSection title="Import">
          <div className="mb-4 p-4 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded-lg">
            <code className="text-sm lsd:text-lsd-text-primary">
              import `{'{'} Alert, AlertTitle, AlertDescription {'}'}` from '@nipsys/shadcn-lsd';
            </code>
          </div>
        </PageSection>

        <PageSection title="Basic Usage">
          <p className="mb-4 lsd:text-lsd-text-secondary">
            Here's a simple alert with a title and description:
          </p>
          <IframeExample size="md" src="/examples/alert/basic" title="Basic" />
          <Accordion type="single" collapsible>
            <AccordionItem value="code">
              <AccordionTrigger>View code</AccordionTrigger>
              <AccordionContent>
                <CodeExample code={BasicCode} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </PageSection>

        <PageSection title="All Variants">
          <p className="mb-4 lsd:text-lsd-text-secondary">
            You can use different variants to convey different meanings:
          </p>
          <IframeExample size="md" src="/examples/alert/all-variants" title="All Variants" />
          <Accordion type="single" collapsible>
            <AccordionItem value="code">
              <AccordionTrigger>View code</AccordionTrigger>
              <AccordionContent>
                <CodeExample code={AllVariantsCode} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </PageSection>

        <PageSection title="With Icon">
          <p className="mb-4 lsd:text-lsd-text-secondary">
            You can add an icon to provide additional visual context:
          </p>
          <IframeExample size="md" src="/examples/alert/with-icon" title="With Icon" />
          <Accordion type="single" collapsible>
            <AccordionItem value="code">
              <AccordionTrigger>View code</AccordionTrigger>
              <AccordionContent>
                <CodeExample code={WithIconCode} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </PageSection>

        <PageSection title="API Reference">
          <div className="space-y-6">
            <div>
              <h3 className="lsd:text-xl lsd:font-medium mb-2">Alert</h3>
              <p className="mb-2 lsd:text-lsd-text-secondary">
                The root alert component that wraps all alert content.
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
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">variant</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">
                      default | destructive | info | success | warning
                    </td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">default</td>
                  </tr>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">className</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">string</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">undefined</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-2 text-sm lsd:text-lsd-text-secondary">
                Extends HTMLDivElement and accepts all standard div props.
              </p>
            </div>

            <div>
              <h3 className="lsd:text-xl lsd:font-medium mb-2">AlertTitle</h3>
              <p className="mb-2 lsd:text-lsd-text-secondary">
                The title of the alert, displayed prominently at the top.
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
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">className</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">string</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">undefined</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-2 text-sm lsd:text-lsd-text-secondary">
                Extends HTMLDivElement and accepts all standard div props.
              </p>
            </div>

            <div>
              <h3 className="lsd:text-xl lsd:font-medium mb-2">AlertDescription</h3>
              <p className="mb-2 lsd:text-lsd-text-secondary">
                The detailed description of the alert message.
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
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">className</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">string</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">undefined</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-2 text-sm lsd:text-lsd-text-secondary">
                Extends HTMLParagraphElement and accepts all standard p props.
              </p>
            </div>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <div className="space-y-4">
            <p className="mb-4 lsd:text-lsd-text-secondary">
              The Alert component follows WAI-ARIA accessibility patterns:
            </p>
            <ul className="list-disc list-inside space-y-2 lsd:text-lsd-text-secondary">
              <li>
                Built with a{' '}
                <code className="lsd:px-2 lsd:py-1 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded lsd:text-sm">
                  role="alert"
                </code>{' '}
                attribute for screen reader announcement
              </li>
              <li>Proper color contrast with LSD theme tokens for each variant</li>
              <li>Semantic HTML structure with title and description slots</li>
              <li>Keyboard accessible by default (all elements are focusable)</li>
              <li>Screen reader friendly with clear role and content</li>
            </ul>
          </div>
        </PageSection>

        <PageSection title="Examples">
          <div className="space-y-4">
            <p className="lsd:text-lsd-text-secondary">Explore more Alert examples:</p>
            <ul className="list-disc list-inside space-y-2 lsd:text-lsd-text-secondary">
              <li>
                <a href="/examples/alert/basic" className="lsd:text-blue-500 hover:lsd:underline">
                  Basic Alert
                </a>{' '}
                - Simple alert with title and description
              </li>
              <li>
                <a
                  href="/examples/alert/all-variants"
                  className="lsd:text-blue-500 hover:lsd:underline"
                >
                  All Variants
                </a>{' '}
                - All available alert variants
              </li>
              <li>
                <a
                  href="/examples/alert/with-icon"
                  className="lsd:text-blue-500 hover:lsd:underline"
                >
                  With Icon
                </a>{' '}
                - Alert with an icon
              </li>
            </ul>
          </div>
        </PageSection>

        <PageNavigation
          previous={{ title: 'Sonner', href: '/components/sonner' }}
          next={{ title: 'Alert Dialog', href: '/components/alert-dialog' }}
        />
      </PageContent>
    </DocsLayout>
  );
}
