'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, Typography } from '@nipsys/lsd';
import { useRef } from 'react';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { IframeExample } from '@/components/docs/IframeExample';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import {
  CODE as HorizontalCode,
  SIZE as HorizontalSIZE,
} from '@/examples/separator/horizontal/page';
import { CODE as VerticalCode, SIZE as VerticalSIZE } from '@/examples/separator/vertical/page';
import { CODE as WithTextCode, SIZE as WithTextSIZE } from '@/examples/separator/with-text/page';

export default function SeparatorPage() {
  const horizontalIframeRef = useRef<HTMLIFrameElement>(null);
  const verticalIframeRef = useRef<HTMLIFrameElement>(null);
  const withTextIframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <DocsLayout>
      <PageHeader
        title="Separator"
        description="A visual divider that separates content into groups."
      />

      <PageContent>
        <PageSection title="About Separator">
          <Typography variant="body1" className="block">
            A thin, decorative line that visually separates content into distinct groups. The
            component supports both horizontal and vertical orientations. When not decorative, it
            provides semantic meaning through the separator role for assistive technologies.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Separator } from '@nipsys/lsd';

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

        <PageSection title="Variants">
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Horizontal</CardTitle>
              <CardDescription>Horizontal separator to divide content vertically.</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={horizontalIframeRef}
                size={HorizontalSIZE}
                src="/examples/separator/horizontal"
                title="Horizontal Separator"
              />
              <CodeExample code={HorizontalCode} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Vertical</CardTitle>
              <CardDescription>Vertical separator to divide content horizontally.</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={verticalIframeRef}
                size={VerticalSIZE}
                src="/examples/separator/vertical"
                title="Vertical Separator"
              />
              <CodeExample code={VerticalCode} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Separator with Text</CardTitle>
              <CardDescription>Custom separator with embedded text content.</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={withTextIframeRef}
                size={WithTextSIZE}
                src="/examples/separator/with-text"
                title="Separator with Text"
              />
              <CodeExample code={WithTextCode} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>orientation</CardTitle>
                <CardDescription>Orientation of the separator line.</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> 'horizontal' | 'vertical'
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> horizontal, vertical
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> 'horizontal'
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>decorative</CardTitle>
                <CardDescription>Whether the separator is purely visual.</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> true
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  When true, the element is removed from accessibility tree.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>className</CardTitle>
                <CardDescription>Custom styling for the separator.</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>Keyboard Navigation</CardTitle>
                <CardDescription>Navigation through separators</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  Separators are non-interactive elements that do not receive keyboard focus.
                </Typography>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  • Tab - Navigates past separator elements
                </Typography>
                <Typography variant="body2" className="block">
                  • Shift + Tab - Navigates backward past separators
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ARIA Attributes</CardTitle>
                <CardDescription>Accessibility attributes for screen readers</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  • role="separator" is added when decorative is false
                </Typography>
                <Typography variant="body2" className="block">
                  • When decorative is true, the element is removed from accessibility tree
                </Typography>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Focus Management</CardTitle>
                <CardDescription>Focus behavior for screen readers</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  Separators are non-interactive and have no focus states. They are purely visual
                  elements that do not capture keyboard focus or mouse events. Screen readers
                  announce separators when decorative is false to provide context about content
                  boundaries.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageNavigation
          previous={{
            title: 'Scroll Area',
            href: '/components/scroll-area',
          }}
          next={{
            title: 'Sheet',
            href: '/components/sheet',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
