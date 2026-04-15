'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@nipsys/lsd';
import { useRef } from 'react';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { IframeExample } from '@/components/docs/IframeExample';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { useSendThemeToIframes } from '@/components/docs/useSendIframes';
import { CODE as BasicCode } from '@/examples/scroll-area/basic/page';
import { CODE as BothCode } from '@/examples/scroll-area/both/page';
import { CODE as HorizontalCode } from '@/examples/scroll-area/horizontal/page';

export default function ScrollAreaPage() {
  const basicIframeRef = useRef<HTMLIFrameElement>(null);
  const horizontalIframeRef = useRef<HTMLIFrameElement>(null);
  const bothIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(basicIframeRef, horizontalIframeRef, bothIframeRef);

  return (
    <DocsLayout>
      <PageHeader
        title="ScrollArea"
        description="Custom styled scrollable container with horizontal and vertical scrolling support"
      />

      <PageContent>
        <PageSection title="About ScrollArea">
          <p className="block">
            ScrollArea provides a cross-browser custom scrollbar for content that needs scrolling.
            It supports both horizontal and vertical orientations with smooth, stylized scrollbars
            that match your design system.
          </p>
        </PageSection>

        <PageSection title="Installation">
          <p>Import the ScrollArea component from LSD:</p>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { ScrollArea, ScrollBar } from '@nipsys/lsd';

export default function MyComponent() {
  return (
    <ScrollArea className="h-80 w-full">
      <div>Your content here</div>
    </ScrollArea>
  );
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Basic ScrollArea">
          <p>
            Vertical scrolling with custom scrollbar. The ScrollArea automatically shows the
            scrollbar when content overflows.
          </p>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Vertical Scrolling</CardTitle>
              <CardDescription>Basic vertical scrollable container</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={basicIframeRef}
                size="md"
                src="/examples/scroll-area/basic"
                title="Basic ScrollArea"
              />
              <CodeExample code={BasicCode} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Horizontal ScrollArea">
          <p>Horizontal scrolling with custom ScrollBar component for better UX.</p>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Horizontal Scrolling</CardTitle>
              <CardDescription>Horizontal scrollable container with ScrollBar</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={horizontalIframeRef}
                size="sm"
                src="/examples/scroll-area/horizontal"
                title="Horizontal ScrollArea"
              />
              <CodeExample code={HorizontalCode} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Both Orientations">
          <p>Bi-directional scrolling with both horizontal and vertical scrollbars.</p>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Two-Way Scrolling</CardTitle>
              <CardDescription>Scrollable container with both orientations</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={bothIframeRef}
                size="sm"
                src="/examples/scroll-area/both"
                title="Both Orientations"
              />
              <CodeExample code={BothCode} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <p>All available props for the ScrollArea component.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>className</CardTitle>
                <CardDescription>Additional CSS classes to apply</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="block mb-2">
                  <strong>Type:</strong> string
                </p>
                <p className="block">
                  <strong>Default:</strong> undefined
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>children</CardTitle>
                <CardDescription>Content to be scrolled</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="block mb-2">
                  <strong>Type:</strong> React.ReactNode
                </p>
                <p className="block">
                  <strong>Default:</strong> undefined
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ScrollBar.orientation</CardTitle>
                <CardDescription>Orientation of the scrollbar</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="block mb-2">
                  <strong>Type:</strong> 'horizontal' | 'vertical'
                </p>
                <p className="block">
                  <strong>Default:</strong> 'vertical'
                </p>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageNavigation
          previous={{
            title: 'Card',
            href: '/components/card',
          }}
          next={{
            title: 'Separator',
            href: '/components/separator',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
