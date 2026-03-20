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
  Skeleton,
  Typography,
} from '@nipsys/shadcn-lsd';
import { useRef } from 'react';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { CODE as SkeletonCODE } from '@/examples/skeleton/SkeletonExample';

export default function SkeletonPage() {
  const skeletonIframeRef = useRef<HTMLIFrameElement>(null);

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

        <PageSection title="Basic Skeleton">
          <Typography variant="body1">
            Skeleton components can be customized with className for different sizes and shapes to
            match your content structure.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Skeleton Examples</CardTitle>
              <CardDescription>
                Different skeleton patterns for cards, avatars, and lists
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <div className="aspect-video w-full overflow-hidden">
                  <iframe
                    ref={skeletonIframeRef}
                    src="/examples/skeleton"
                    className="size-full"
                    title="Skeleton Example"
                  />
                </div>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={SkeletonCODE} />
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
            title: 'Sidebar',
            href: '/components/sidebar',
          }}
          next={{
            title: 'Sonner',
            href: '/components/sonner',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
