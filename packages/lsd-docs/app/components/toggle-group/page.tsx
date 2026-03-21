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
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';
import { CODE as ToggleGroupMultipleCODE } from '@/examples/toggle-group/multiple/page';
import { CODE as ToggleGroupSingleCODE } from '@/examples/toggle-group/single/page';
import { CODE as ToggleGroupSizesCODE } from '@/examples/toggle-group/sizes/page';

export default function ToggleGroupPage() {
  const toggleGroupSingleIframeRef = useRef<HTMLIFrameElement>(null);
  const toggleGroupMultipleIframeRef = useRef<HTMLIFrameElement>(null);
  const toggleGroupSizesIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes();

  return (
    <DocsLayout>
      <PageHeader
        title="ToggleGroup"
        description="Group of toggle buttons that can be single or multiple selection"
      />

      <PageContent>
        <PageSection title="About ToggleGroup">
          <Typography variant="body1" className="block">
            ToggleGroup groups multiple togglable buttons together. It supports single selection
            (only one item can be active) or multiple selection (multiple items can be active at
            once).
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the ToggleGroup component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                code={`import { ToggleGroup, ToggleGroupItem } from '@nipsys/shadcn-lsd';

export default function MyComponent() {
  return (
    <ToggleGroup type="single" defaultValue="item-1">
      <ToggleGroupItem value="item-1">Item 1</ToggleGroupItem>
      <ToggleGroupItem value="item-2">Item 2</ToggleGroupItem>
    </ToggleGroup>
  );
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Single Selection">
          <Typography variant="body1">
            Use type="single" to allow only one item selection.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Single Selection</CardTitle>
              <CardDescription>Only one item can be active at a time</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={toggleGroupSingleIframeRef}
                size="md"
                src="/examples/toggle-group/single"
                title="ToggleGroup Single Example"
              />
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={ToggleGroupSingleCODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Multiple Selection">
          <Typography variant="body1">
            Use type="multiple" to allow multiple items to be selected.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Multiple Selection</CardTitle>
              <CardDescription>Multiple items can be active at once</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={toggleGroupMultipleIframeRef}
                size="md"
                src="/examples/toggle-group/multiple"
                title="ToggleGroup Multiple Example"
              />
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={ToggleGroupMultipleCODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Sizes">
          <Typography variant="body1">
            ToggleGroup items come in two sizes to fit different contexts.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Small Size</CardTitle>
              <CardDescription>Small size toggle group items</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={toggleGroupSizesIframeRef}
                size="md"
                src="/examples/toggle-group/sizes"
                title="ToggleGroup Sizes Example"
              />
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={ToggleGroupSizesCODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1">
            All available props for the ToggleGroup components.
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>ToggleGroup.type</CardTitle>
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
                  'single' allows one item, 'multiple' allows multiple
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ToggleGroup.value</CardTitle>
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
                  Value of the selected item(s) for controlled components
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ToggleGroup.defaultValue</CardTitle>
                <CardDescription>Initial value</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> string | string[]
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-2">
                  Initial selection for uncontrolled components
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ToggleGroupItem.value</CardTitle>
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
                  Must be unique across all items in the group
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ToggleGroup.disabled</CardTitle>
                <CardDescription>Disable the entire group</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-2">
                  Disables all items in the group
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ToggleGroup.size</CardTitle>
                <CardDescription>Size of the items</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> 'sm' | 'md'
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> 'md'
                </Typography>
                <Typography variant="body2" className="mt-2">
                  'sm' is smaller, 'md' is default size
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The ToggleGroup component follows accessibility best practices built on Radix UI.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>ToggleGroup is fully keyboard accessible</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-2">
                • Tab - Navigate into the group
              </Typography>
              <Typography variant="body2" className="block mb-2">
                • Arrow Left/Right - Move between items
              </Typography>
              <Typography variant="body2" className="block mb-2">
                • Enter or Space - Select item
              </Typography>
              <Typography variant="body2" className="block">
                • Shift + Tab - Navigate out of group
              </Typography>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>ARIA Attributes</CardTitle>
              <CardDescription>Proper ARIA attributes for screen readers</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-2">
                • role="group" on the ToggleGroup container
              </Typography>
              <Typography variant="body2" className="block mb-2">
                • aria-pressed on items is automatically managed
              </Typography>
              <Typography variant="body2" className="block">
                • Proper focus management within the group
              </Typography>
            </CardContent>
          </Card>
        </PageSection>

        <PageNavigation
          previous={{
            title: 'Toggle',
            href: '/components/toggle',
          }}
          next={{
            title: 'Tooltip',
            href: '/components/tooltip',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
