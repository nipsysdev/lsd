'use client';

import {
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
import { useSendThemeToIframes } from '@/components/docs/useSendIframes';
import { CODE as HorizontalCode } from '@/examples/separator/horizontal/page';
import { CODE as VerticalCode } from '@/examples/separator/vertical/page';
import { CODE as WithTextCode } from '@/examples/separator/with-text/page';

export default function SeparatorPage() {
  const horizontalIframeRef = useRef<HTMLIFrameElement>(null);
  const verticalIframeRef = useRef<HTMLIFrameElement>(null);
  const withTextIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(horizontalIframeRef, verticalIframeRef, withTextIframeRef);

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
                useAccordion={false}
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

        <PageSection title="Horizontal Separator">
          <Typography variant="body1">
            Horizontal separator to divide content vertically.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Horizontal Example</CardTitle>
              <CardDescription>Basic horizontal separator</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={horizontalIframeRef}
                size="md"
                src="/examples/separator/horizontal"
                title="Horizontal Separator"
              />
              <CodeExample code={HorizontalCode} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Vertical Separator">
          <Typography variant="body1">
            Vertical separator to divide content horizontally.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Vertical Example</CardTitle>
              <CardDescription>Vertical separator with multiple items</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={verticalIframeRef}
                size="md"
                src="/examples/separator/vertical"
                title="Vertical Separator"
              />
              <CodeExample code={VerticalCode} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Separator with Text">
          <Typography variant="body1">Custom separator with embedded text content.</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Text Separator Example</CardTitle>
              <CardDescription>Separator with centered text label</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={withTextIframeRef}
                size="md"
                src="/examples/separator/with-text"
                title="Separator with Text"
              />
              <CodeExample code={WithTextCode} />
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
            title: 'Scroll Area',
            href: '/components/scroll-area',
          }}
          next={{
            title: 'Accordion',
            href: '/components/accordion',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
