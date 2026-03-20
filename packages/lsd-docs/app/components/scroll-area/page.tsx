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
  ScrollArea,
  ScrollBar,
  Typography,
} from '@nipsys/shadcn-lsd';
import { useRef } from 'react';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';
import { CODE as ScrollAreaCODE } from '@/examples/scroll-area/ScrollAreaExample';

export default function ScrollAreaPage() {
  const scrollAreaIframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <DocsLayout>
      <PageHeader
        title="ScrollArea"
        description="Custom styled scrollable container with horizontal and vertical scrolling support"
      />

      <PageContent>
        <PageSection title="About ScrollArea">
          <Typography variant="body1" className="block">
            ScrollArea provides a cross-browser custom scrollbar for content that needs scrolling.
            It supports both horizontal and vertical orientations with smooth, stylized scrollbars
            that match your design system.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the ScrollArea component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                code={`import { ScrollArea, ScrollBar } from '@nipsys/shadcn-lsd';

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
          <Typography variant="body1">
            Vertical scrolling with custom scrollbar. The ScrollArea automatically shows the
            scrollbar when content overflows.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>ScrollArea Examples</CardTitle>
              <CardDescription>
                Vertical and horizontal scrolling with ScrollBar component
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <div className="aspect-video w-full overflow-hidden">
                  <iframe
                    ref={scrollAreaIframeRef}
                    src="/examples/scroll-area"
                    className="size-full"
                    title="ScrollArea Example"
                  />
                </div>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={ScrollAreaCODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1">All available props for the ScrollArea component.</Typography>

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
                  <strong>Default:</strong> undefined
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>children</CardTitle>
                <CardDescription>Content to be scrolled</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> React.ReactNode
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ScrollBar.orientation</CardTitle>
                <CardDescription>Orientation of the scrollbar</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> 'vertical' | 'horizontal'
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> 'vertical'
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The ScrollArea component is accessible by default with proper keyboard navigation and
            screen reader support.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>ScrollArea is fully keyboard accessible</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-2">
                • <strong>Arrow Up/Down</strong> - Scroll vertically
              </Typography>
              <Typography variant="body2" className="block mb-2">
                • <strong>Arrow Left/Right</strong> - Scroll horizontally
              </Typography>
              <Typography variant="body2" className="block mb-2">
                • <strong>Page Up/Down</strong> - Scroll by page
              </Typography>
              <Typography variant="body2" className="block">
                • <strong>Home/End</strong> - Scroll to start/end
              </Typography>
            </CardContent>
          </Card>
        </PageSection>

        <PageNavigation
          previous={{
            title: 'Progress',
            href: '/components/progress',
          }}
          next={{
            title: 'Select',
            href: '/components/select',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
