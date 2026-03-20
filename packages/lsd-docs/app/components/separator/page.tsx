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
import { CODE as SeparatorCODE } from '@/examples/separator/SeparatorExample';

export default function SeparatorPage() {
  return (
    <DocsLayout>
      <PageHeader
        title="Separator"
        description="Visual separator component for horizontally and vertically dividing content"
      />

      <PageContent>
        <PageSection title="About Separator">
          <Typography variant="body1" className="block">
            Separator visually divides content into sections. It supports both horizontal and
            vertical orientations and can be customized with styling.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Separator component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                code={`import { Separator } from '@nipsys/shadcn-lsd';

export default function MyComponent() {
  return (
    <div>
      <div>Content above</div>
      <Separator />
      <div>Content below</div>
    </div>
  );
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Basic Separator">
          <Typography variant="body1">
            Use Separator to visually divide content. Supports horizontal and vertical orientations.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Separator Examples</CardTitle>
              <CardDescription>
                Horizontal and vertical separators with custom content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <IframeExample size="sm" src="/examples/separator" title="Separator Example" />
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={SeparatorCODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1">All available props for the Separator component.</Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>orientation</CardTitle>
                <CardDescription>Orientation of the separator</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> 'horizontal' | 'vertical'
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> 'horizontal'
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>decorative</CardTitle>
                <CardDescription>Whether the separator is purely decorative</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> true
                </Typography>
                <Typography variant="body2" className="mt-2">
                  When decorative, the separator won't have an ARIA role
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>className</CardTitle>
                <CardDescription>Additional CSS classes to apply</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The Separator component follows accessibility best practices built on Radix UI.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>ARIA Attributes</CardTitle>
              <CardDescription>Proper ARIA attributes for screen readers</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-2">
                • By default, separators are decorative (aria-hidden)
              </Typography>
              <Typography variant="body2" className="block">
                • When non-decorative, they receive role="separator" and aria-orientation
              </Typography>
            </CardContent>
          </Card>
        </PageSection>

        <PageNavigation
          previous={{
            title: 'Select',
            href: '/components/select',
          }}
          next={{
            title: 'Sidebar',
            href: '/components/sidebar',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
