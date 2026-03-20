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
import { useRef } from 'react';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { IframeExample } from '@/components/docs/IframeExample';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { CODE as AccordionCODE } from '@/examples/accordion/AccordionExample';

export default function AccordionPage() {
  return (
    <DocsLayout>
      <PageHeader
        title="Accordion"
        description="Collapsible component that displays multiple panels while showing one or more at a time"
      />

      <PageContent>
        <PageSection title="About Accordion">
          <Typography variant="body1" className="block">
            Accordion displays content in vertically stacked panels that can be expanded and
            collapsed. It supports both single (only one panel open at a time) and multiple
            (multiple panels can be open) modes.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Accordion component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                code={`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@nipsys/shadcn-lsd';

export default function MyComponent() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Basic Accordion">
          <Typography variant="body1">
            Use type="single" to allow only one panel to be open at a time, or type="multiple" to
            allow multiple panels.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Accordion Examples</CardTitle>
              <CardDescription>Single and multiple selection modes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <IframeExample size="md" src="/examples/accordion" title="Accordion Example" />
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={AccordionCODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1">All available props for the Accordion components.</Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>Accordion.type</CardTitle>
                <CardDescription>Selection behavior</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> 'single' | 'multiple'
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> 'single'
                </Typography>
                <Typography variant="body2" className="mt-2">
                  'single' allows only one item open, 'multiple' allows multiple
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Accordion.collapsible</CardTitle>
                <CardDescription>Allow closing all items</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-2">
                  When true, allows closing the currently open item
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Accordion.value</CardTitle>
                <CardDescription>Controlled value</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> string | string[]
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-2">
                  Value of the open item(s) for controlled components
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AccordionItem.value</CardTitle>
                <CardDescription>Unique identifier for the item</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-2">
                  Must be unique across all items in the accordion
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Accordion.disabled</CardTitle>
                <CardDescription>Disable an item</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-2">
                  Prevents user interaction with the accordion item
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The Accordion component follows WAI-ARIA design patterns for accessibility.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Full keyboard support</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-2">
                • <strong>Tab</strong> - Navigate through triggers
              </Typography>
              <Typography variant="body2" className="block mb-2">
                • <strong>Enter</strong> or <strong>Space</strong> - Toggle panel
              </Typography>
              <Typography variant="body2" className="block mb-2">
                • <strong>ArrowUp/Down</strong> - Move between triggers
              </Typography>
              <Typography variant="body2" className="block">
                • <strong>Home/End</strong> - Jump to first/last trigger
              </Typography>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>ARIA Attributes</CardTitle>
              <CardDescription>Automatic ARIA support</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-2">
                • role="region" on AccordionContent
              </Typography>
              <Typography variant="body2" className="block mb-2">
                • aria-expanded on AccordionTrigger
              </Typography>
              <Typography variant="body2" className="block mb-2">
                • aria-controls linking trigger to content
              </Typography>
              <Typography variant="body2" className="block">
                • Proper focus management when panels open/close
              </Typography>
            </CardContent>
          </Card>
        </PageSection>

        <PageNavigation
          previous={{
            title: 'Label',
            href: '/components/label',
          }}
          next={{
            title: 'Switch',
            href: '/components/switch',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
