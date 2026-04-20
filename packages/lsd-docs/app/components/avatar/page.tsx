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
import { useSendThemeToIframes } from '@/components/docs/useSendIframes';
import { CODE as AvatarBasicCODE, SIZE as AvatarBasicSIZE } from '@/examples/avatar/basic/page';
import { CODE as AvatarSizesCODE, SIZE as AvatarSizesSIZE } from '@/examples/avatar/sizes/page';

export default function AvatarPage() {
  const AvatarBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const AvatarSizesIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(AvatarBasicIframeRef, AvatarSizesIframeRef);

  return (
    <DocsLayout>
      <PageHeader
        title="Avatar"
        description="Displays user images or initials with multiple size options."
      />

      <PageContent>
        <PageSection title="About Avatar">
          <Typography variant="body1" className="block">
            Avatar represents user identity through images with fallback to initials or icons. It
            supports multiple sizes (default, sm, lg) and integrates with avatar badges for
            additional status indicators like online state or counts.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Avatar component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Avatar } from '@nipsys/lsd'

export default function MyComponent() {
  return <Avatar />
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Variants">
          <Typography variant="body1">
            Component variants for different visual styles and use cases.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Basic</CardTitle>
              <CardDescription>Basic example</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={AvatarBasicIframeRef}
                size={AvatarBasicSIZE}
                src="/examples/avatar/basic"
                title="Basic Example"
              />
              <CodeExample code={AvatarBasicCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Sizes">
          <Typography variant="body1">
            Component sizes for different contexts and visual hierarchy.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Sizes</CardTitle>
              <CardDescription>Shows all available size options</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={AvatarSizesIframeRef}
                size={AvatarSizesSIZE}
                src="/examples/avatar/sizes"
                title="Sizes Example"
              />
              <CodeExample code={AvatarSizesCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <div className="flex flex-col gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>Radix UI Documentation</CardTitle>
                <CardDescription>Avatar wraps Radix UI primitives</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://www.radix-ui.com/primitives/docs/components/avatar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View Radix UI Avatar documentation →
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>shadcn/ui Documentation</CardTitle>
                <CardDescription>Additional styling and customization options</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://ui.shadcn.com/docs/components/avatar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View shadcn/ui Avatar documentation →
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
                • Not keyboard interactive (non-interactive image)
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
                • Avatar images should have alt text describing the user
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Use AvatarFallback with initials for screen readers when no image
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
                • Not focusable by design as it's purely presentational
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • If avatar is interactive (e.g., link), wrap in interactive element
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
        <PageNavigation
          previous={{
            title: 'Accordion',
            href: '/components/accordion',
          }}
          next={{
            title: 'Badge',
            href: '/components/badge',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
