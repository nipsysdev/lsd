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
import { CODE as CardCompleteCODE, SIZE as CardCompleteSIZE } from '@/examples/card/complete/page';

export default function CardPage() {
  const CardCompleteIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(CardCompleteIframeRef);

  return (
    <DocsLayout>
      <PageHeader
        title="Card"
        description="Decorative container for grouping related content with border and shadow."
      />

      <PageContent>
        <PageSection title="About Card">
          <Typography variant="body1" className="block">
            Versatile layout component for organizing and visually separating content sections
            within a page. Includes sub-components (CardHeader, CardTitle, CardDescription,
            CardAction, CardContent, and CardFooter) for building complete card layouts with
            consistent styling and spacing.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Card component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Card } from '@nipsys/lsd'

export default function MyComponent() {
  return <Card />
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
              <CardTitle>Complete</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={CardCompleteIframeRef}
                size={CardCompleteSIZE}
                src="/examples/card/complete"
                title="Complete Example"
              />
              <CodeExample code={CardCompleteCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Composition">
          <Card className="mt-(--lsd-spacing-base)">
            <CardContent className="pt-(--lsd-spacing-base)">
              <CodeBlock>
                {[
                  'Card',
                  '├── CardHeader',
                  '│   ├── CardTitle',
                  '│   ├── CardDescription',
                  '│   └── CardAction',
                  '├── CardContent',
                  '└── CardFooter',
                ]}
              </CodeBlock>
            </CardContent>
          </Card>
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
                • Tab - Navigate through interactive elements within the card
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
                • Use aria-label or aria-labelledby on card when it contains focusable elements and
                lacks visible heading
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Card itself has no ARIA role by default (layout container)
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
                • Card is a layout container and not focusable by default. Focus moves through
                interactive elements (buttons, links, inputs) within the card using Tab navigation.
                The card itself becomes focusable only if interactive attributes (onClick, tabIndex)
                are added.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
        <PageNavigation
          previous={{
            title: 'Sonner',
            href: '/components/sonner',
          }}
          next={{
            title: 'Scroll-area',
            href: '/components/scroll-area',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
