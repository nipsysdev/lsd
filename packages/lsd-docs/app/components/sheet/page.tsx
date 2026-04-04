'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@nipsys/shadcn-lsd';
import { useRef } from 'react';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { IframeExample } from '@/components/docs/IframeExample';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';
import { CODE as BasicCode } from '@/examples/sheet/basic/page';
import { CODE as LeftCode } from '@/examples/sheet/left-side/page';

export default function SheetPage() {
  const basicIframeRef = useRef<HTMLIFrameElement>(null);
  const leftIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes();

  return (
    <DocsLayout>
      <PageHeader
        title="Sheet"
        description="App-themed slide-over panel component for displaying content overlay"
      />

      <PageContent>
        <PageSection title="About Sheet">
          <p className="block">
            Sheet provides an app-themed, smoothly animated overlay panel that slides in from any
            edge of the screen. Use it for contextual actions, forms, or information display.
          </p>
        </PageSection>

        <PageSection title="Installation">
          <p>Import the Sheet components from LSD:</p>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@nipsys/shadcn-lsd'

export default function MyComponent() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Title</SheetTitle>
        </SheetHeader>
        <div>Content</div>
      </SheetContent>
    </Sheet>
  )
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Basic Sheet">
          <p>
            Sheet can be positioned on any side of the screen. Use the side prop to control
            placement. The sheet automatically includes an overlay and close button.
          </p>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Right Side Sheet</CardTitle>
              <CardDescription>Default sheet opening from right with form content</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={basicIframeRef}
                size="lg"
                src="/examples/sheet/basic"
                title="Basic Sheet"
              />
              <CodeExample code={BasicCode} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Left Side Sheet</CardTitle>
              <CardDescription>Sheet opening from left side with info content</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={leftIframeRef}
                size="lg"
                src="/examples/sheet/left-side"
                title="Left Side Sheet"
              />
              <CodeExample code={LeftCode} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <p>All available props for the Sheet components.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>Sheet.open</CardTitle>
                <CardDescription>Whether the sheet is open</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="block mb-2">
                  <strong>Type:</strong> boolean
                </p>
                <p className="block">
                  <strong>Default:</strong> undefined
                </p>
                <p className="mt-2">Controlled value</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sheet.defaultOpen</CardTitle>
                <CardDescription>Initial open state</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="block mb-2">
                  <strong>Type:</strong> boolean
                </p>
                <p className="block">
                  <strong>Default:</strong> false
                </p>
                <p className="mt-2">Uncontrolled value</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SheetContent.side</CardTitle>
                <CardDescription>Side of the screen to slide from</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="block mb-2">
                  <strong>Type:</strong> 'top' | 'right' | 'bottom' | 'left'
                </p>
                <p className="block">
                  <strong>Default:</strong> 'right'
                </p>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <p>The Sheet component follows accessibility best practices.</p>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Full keyboard support for all interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="block mb-2">
                • <strong>Escape</strong> - Close sheet
              </p>
              <p className="block">• Focus management keeps focus within sheet</p>
            </CardContent>
          </Card>
        </PageSection>

        <PageNavigation
          previous={{
            title: 'Popover',
            href: '/components/popover',
          }}
          next={{
            title: 'Tooltip',
            href: '/components/tooltip',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
