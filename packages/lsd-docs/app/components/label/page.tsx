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
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { useIframeThemeSync } from '@/components/docs/useIframeThemeSync';
import { CODE as LabelBasicExampleCODE } from '@/examples/label/basic/LabelBasicExample';
import { CODE as LabelSizesExampleCODE } from '@/examples/label/sizes/LabelSizesExample';
import { CODE as LabelVariantsExampleCODE } from '@/examples/label/variants/LabelVariantsExample';

export default function LabelPage() {
  const basicIframeRef = useRef<HTMLIFrameElement>(null);
  const variantsIframeRef = useRef<HTMLIFrameElement>(null);
  const sizesIframeRef = useRef<HTMLIFrameElement>(null);

  useIframeThemeSync(basicIframeRef, variantsIframeRef, sizesIframeRef);

  return (
    <DocsLayout>
      <PageHeader
        title="Label"
        description="A form label component that provides context and accessibility for form inputs."
      />

      <PageContent>
        <PageSection title="About Label">
          <Typography variant="body1" className="block">
            The Label component provides accessible labeling for form inputs and other interactive
            elements. It automatically associates with form controls using the <code>htmlFor</code>{' '}
            attribute, ensuring screen readers can properly describe the relationship between labels
            and their associated controls.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Label component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                code={`import { Label, Input } from '@nipsys/shadcn-lsd'

export default function MyComponent() {
  return (
    <div>
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" />
    </div>
  )
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Usage">
          <Typography variant="body1">
            Basic usage of the Label component with checkboxes.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Demo</CardTitle>
              <CardDescription>Labels paired with checkboxes for form controls.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <div className="w-full overflow-hidden">
                  <iframe
                    ref={basicIframeRef}
                    src="/examples/label/basic"
                    className="w-full"
                    style={{ height: 'auto', minHeight: '200px' }}
                    title="Label Basic Example"
                  />
                </div>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={LabelBasicExampleCODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Variants">
          <Typography variant="body1">
            Labels come in two visual variants for different design contexts.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Label Variants</CardTitle>
              <CardDescription>Default and secondary label styles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <div className="w-full overflow-hidden">
                  <iframe
                    ref={variantsIframeRef}
                    src="/examples/label/variants"
                    className="w-full"
                    style={{ height: 'auto', minHeight: '200px' }}
                    title="Label Variants Example"
                  />
                </div>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={LabelVariantsExampleCODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Sizes">
          <Typography variant="body1">
            Labels come in three sizes to fit different contexts and visual hierarchies.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>All Sizes</CardTitle>
              <CardDescription>Small, medium, and large label sizes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <div className="w-full overflow-hidden">
                  <iframe
                    ref={sizesIframeRef}
                    src="/examples/label/sizes"
                    className="w-full"
                    style={{ height: 'auto', minHeight: '200px' }}
                    title="Label Sizes Example"
                  />
                </div>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={LabelSizesExampleCODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1">All available props for the Label component.</Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>variant</CardTitle>
                <CardDescription>The visual style of the label</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> LabelVariant
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> default, secondary
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> default
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>size</CardTitle>
                <CardDescription>The size of the label</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> SizeVariant
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> sm, md, lg
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> md
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>htmlFor</CardTitle>
                <CardDescription>Associates label with form element</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  ID of the form element this label is associated with
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>className</CardTitle>
                <CardDescription>Additional CSS classes to apply</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Merges with existing label classes
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>...props</CardTitle>
                <CardDescription>Standard HTML label attributes</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  <strong>Type:</strong> <code>{`React.ComponentProps<'label'>`}</code>
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  All standard HTML label attributes are supported
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The Label component follows accessibility best practices for screen readers and keyboard
            navigation.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Labels are fully keyboard accessible</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Tab</strong> - Navigate to the associated form element
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Shift + Tab</strong> - Navigate to previous element
              </Typography>
              <Typography variant="body2" className="block">
                Clicking on a label automatically focuses its associated form element
              </Typography>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>ARIA Attributes</CardTitle>
              <CardDescription>Proper ARIA support for screen readers</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Labels are automatically associated with inputs using <code>htmlFor</code>
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Screen readers announce the label text when focusing the associated input
              </Typography>
              <Typography variant="body2" className="block">
                • Use <code>aria-label</code> or <code>aria-labelledby</code> for complex labeling
                scenarios
              </Typography>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Focus States</CardTitle>
              <CardDescription>Visual feedback for keyboard users</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block">
                Labels have visible focus states that follow the LSD design system's focus
                indicators, ensuring keyboard users can always see which element has focus.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>

        <PageNavigation
          previous={{ title: 'Input', href: '/components/input' }}
          next={{ title: 'Select', href: '/components/select' }}
        />
      </PageContent>
    </DocsLayout>
  );
}
