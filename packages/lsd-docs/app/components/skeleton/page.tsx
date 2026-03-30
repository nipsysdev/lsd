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
import { CODE as SkeletonAvatarCODE } from '@/examples/skeleton/avatar/page';
import { CODE as SkeletonCardCODE } from '@/examples/skeleton/card/page';
import { CODE as SkeletonListCODE } from '@/examples/skeleton/list/page';
import { CODE as SkeletonSizesCODE } from '@/examples/skeleton/sizes/page';

export default function SkeletonPage() {
  const skeletonCardIframeRef = useRef<HTMLIFrameElement>(null);
  const skeletonAvatarIframeRef = useRef<HTMLIFrameElement>(null);
  const skeletonListIframeRef = useRef<HTMLIFrameElement>(null);
  const skeletonSizesIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes();

  return (
    <DocsLayout>
      <PageHeader
        title="Skeleton"
        description="Placeholder component that displays a loading state while content is being fetched"
      />

      <PageContent>
        <PageSection title="About Skeleton">
          <Typography variant="body1" className="block">
            Skeleton provides a visual placeholder while content is loading. It's used to indicate
            that content is being fetched and to improve perceived performance by showing a shimmer
            effect.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Skeleton component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                code={`import { Skeleton } from '@nipsys/shadcn-lsd';

export default function MyComponent() {
  return <Skeleton className="h-8 w-full" />;
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Card Skeleton">
          <Typography variant="body1">
            Skeleton components can be customized with className for different sizes and shapes to
            match your content structure.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Card Skeleton</CardTitle>
              <CardDescription>
                Skeleton layout for a card with header and body text
              </CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={skeletonCardIframeRef}
                size="md"
                src="/examples/skeleton/card"
                title="Skeleton Card Example"
              />
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={SkeletonCardCODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Avatar Skeleton">
          <Typography variant="body1">
            Create skeleton layouts for user avatars with optional text.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Avatar Skeleton</CardTitle>
              <CardDescription>Skeleton layout for an avatar with name and label</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={skeletonAvatarIframeRef}
                size="md"
                src="/examples/skeleton/avatar"
                title="Skeleton Avatar Example"
              />
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={SkeletonAvatarCODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="List Skeleton">
          <Typography variant="body1">
            Create skeleton layouts for lists of items like user lists or notifications.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>List Skeleton</CardTitle>
              <CardDescription>Skeleton layout for a list of items with avatars</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={skeletonListIframeRef}
                size="md"
                src="/examples/skeleton/list"
                title="Skeleton List Example"
              />
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={SkeletonListCODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Custom Sizes">
          <Typography variant="body1">
            Use className to control the height and width of skeleton elements.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Custom Sizes</CardTitle>
              <CardDescription>Skeleton elements with different heights</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={skeletonSizesIframeRef}
                size="md"
                src="/examples/skeleton/sizes"
                title="Skeleton Sizes Example"
              />
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={SkeletonSizesCODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1">All available props for the Skeleton component.</Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
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
                  <strong>Default:</strong> h-4 w-4 animate-pulse
                </Typography>
                <Typography variant="body2" className="mt-2">
                  Use className to control height, width, and rounded corners
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            Skeleton components are accessible by default with proper ARIA attributes.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>ARIA Attributes</CardTitle>
              <CardDescription>Proper ARIA attributes for screen readers</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-2">
                • Skeleton has role="status" for screen readers
              </Typography>
              <Typography variant="body2" className="block">
                • Includes a visually hidden "Loading..." label for accessibility
              </Typography>
            </CardContent>
          </Card>
        </PageSection>

        <PageNavigation
          previous={{
            title: 'Badge',
            href: '/components/badge',
          }}
          next={{
            title: 'Table',
            href: '/components/table',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
