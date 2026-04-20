'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, Typography } from '@nipsys/lsd';
import { useRef } from 'react';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { IframeExample } from '@/components/docs/IframeExample';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { useSendThemeToIframes } from '@/components/docs/useSendIframes';
import {
  CODE as ScrollAreaBasicCODE,
  SIZE as ScrollAreaBasicSIZE,
} from '@/examples/scroll-area/basic/page';
import {
  CODE as ScrollAreaBothOrientationCODE,
  SIZE as ScrollAreaBothOrientationSIZE,
} from '@/examples/scroll-area/both-orientation/page';
import {
  CODE as ScrollAreaHorizontalCODE,
  SIZE as ScrollAreaHorizontalSIZE,
} from '@/examples/scroll-area/horizontal/page';

export default function ScrollAreaPage() {
  const ScrollAreaBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const ScrollAreaBothOrientationIframeRef = useRef<HTMLIFrameElement>(null);
  const ScrollAreaHorizontalIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    ScrollAreaBasicIframeRef,
    ScrollAreaBothOrientationIframeRef,
    ScrollAreaHorizontalIframeRef
  );

  return (
    <DocsLayout>
      <PageHeader
        title="Scroll-area"
        description="Custom styled scrollable container with horizontal and vertical scrolling support"
      />

      <PageContent>
        <PageSection title="About ScrollArea">
          <Typography variant="body1" className="block">
            A cross-browser custom scrollbar component that augments native scroll functionality.
            The scrollbar sits on top of content without taking up layout space, preserving native
            scrolling behavior and accessibility. Includes sub-components for building complete
            scrollable layouts.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the ScrollArea component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { ScrollArea } from '@nipsys/lsd'

export default function MyComponent() {
  return <ScrollArea />
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Usage">
          <Typography variant="body1">
            The simplest form of the component with default styling.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Basic</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={ScrollAreaBasicIframeRef}
                size={ScrollAreaBasicSIZE}
                src="/examples/scroll-area/basic"
                title="Basic Example"
              />
              <CodeExample code={ScrollAreaBasicCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features and capabilities of the component.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Both Orientation</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={ScrollAreaBothOrientationIframeRef}
                size={ScrollAreaBothOrientationSIZE}
                src="/examples/scroll-area/both-orientation"
                title="Both Orientation Example"
              />
              <CodeExample code={ScrollAreaBothOrientationCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Horizontal</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={ScrollAreaHorizontalIframeRef}
                size={ScrollAreaHorizontalSIZE}
                src="/examples/scroll-area/horizontal"
                title="Horizontal Example"
              />
              <CodeExample code={ScrollAreaHorizontalCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Composition">
          <Card className="mt-(--lsd-spacing-base)">
            <CardContent className="pt-(--lsd-spacing-base)">
              <CodeBlock>
                {[
                  'ScrollArea',
                  '├── ScrollBar',
                  '│   └── ScrollAreaPrimitive.ScrollAreaThumb',
                  '├── ScrollAreaPrimitive.Corner',
                  '└── ScrollAreaPrimitive.Viewport',
                ]}
              </CodeBlock>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <div className="flex flex-col gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>Radix UI Documentation</CardTitle>
                <CardDescription>ScrollArea wraps Radix UI primitives</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://www.radix-ui.com/primitives/docs/components/scroll-area"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View Radix UI ScrollArea documentation →
                </a>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The component follows accessibility best practices for screen readers and keyboard
            navigation.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Keyboard shortcuts and navigation</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Arrow keys - Scroll through content (platform-dependent)
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Page Up/Down - Scroll by page (platform-dependent)
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Home/End - Scroll to top/bottom (platform-dependent)
              </Typography>
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>ARIA Attributes</CardTitle>
              <CardDescription>Proper ARIA attributes for screen readers</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • No special ARIA attributes required. Component relies on native scroll semantics.
              </Typography>
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Focus States</CardTitle>
              <CardDescription>Visible focus indicators for keyboard users</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Standard focus management for scrollable content. Focus follows native browser
                behavior when navigating with keyboard.
              </Typography>
            </CardContent>
          </Card>
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
