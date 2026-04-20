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
import {
  CODE as SonnerActionsCODE,
  SIZE as SonnerActionsSIZE,
} from '@/examples/sonner/actions/page';
import {
  CODE as SonnerDurationCODE,
  SIZE as SonnerDurationSIZE,
} from '@/examples/sonner/duration/page';
import { CODE as SonnerErrorCODE, SIZE as SonnerErrorSIZE } from '@/examples/sonner/error/page';
import { CODE as SonnerInfoCODE, SIZE as SonnerInfoSIZE } from '@/examples/sonner/info/page';
import {
  CODE as SonnerPersistentCODE,
  SIZE as SonnerPersistentSIZE,
} from '@/examples/sonner/persistent/page';
import {
  CODE as SonnerPositionSimpleCODE,
  SIZE as SonnerPositionSimpleSIZE,
} from '@/examples/sonner/position-simple/page';
import {
  CODE as SonnerPromiseSimpleCODE,
  SIZE as SonnerPromiseSimpleSIZE,
} from '@/examples/sonner/promise-simple/page';
import {
  CODE as SonnerRichContentCODE,
  SIZE as SonnerRichContentSIZE,
} from '@/examples/sonner/rich-content/page';
import {
  CODE as SonnerSuccessCODE,
  SIZE as SonnerSuccessSIZE,
} from '@/examples/sonner/success/page';
import {
  CODE as SonnerWarningCODE,
  SIZE as SonnerWarningSIZE,
} from '@/examples/sonner/warning/page';

export default function SonnerPage() {
  const SonnerActionsIframeRef = useRef<HTMLIFrameElement>(null);
  const SonnerDurationIframeRef = useRef<HTMLIFrameElement>(null);
  const SonnerErrorIframeRef = useRef<HTMLIFrameElement>(null);
  const SonnerInfoIframeRef = useRef<HTMLIFrameElement>(null);
  const SonnerPersistentIframeRef = useRef<HTMLIFrameElement>(null);
  const SonnerPositionSimpleIframeRef = useRef<HTMLIFrameElement>(null);
  const SonnerPromiseSimpleIframeRef = useRef<HTMLIFrameElement>(null);
  const SonnerRichContentIframeRef = useRef<HTMLIFrameElement>(null);
  const SonnerSuccessIframeRef = useRef<HTMLIFrameElement>(null);
  const SonnerWarningIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    SonnerActionsIframeRef,
    SonnerDurationIframeRef,
    SonnerErrorIframeRef,
    SonnerInfoIframeRef,
    SonnerPersistentIframeRef,
    SonnerPositionSimpleIframeRef,
    SonnerPromiseSimpleIframeRef,
    SonnerRichContentIframeRef,
    SonnerSuccessIframeRef,
    SonnerWarningIframeRef
  );

  return (
    <DocsLayout>
      <PageHeader
        title="Sonner"
        description="Toast notification container for displaying messages to users."
      />

      <PageContent>
        <PageSection title="About Sonner">
          <Typography variant="body1" className="block">
            A container component that displays toast notifications for user feedback and system
            messages. Based on the sonner library, it provides pre-styled notifications that appear
            temporarily on screen edges. The component automatically manages toast display,
            positioning, and dismissal with smooth animations.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Sonner component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Sonner } from '@nipsys/lsd'

export default function MyComponent() {
  return <Sonner />
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
              <CardTitle>Error</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={SonnerErrorIframeRef}
                size={SonnerErrorSIZE}
                src="/examples/sonner/error"
                title="Error Example"
              />
              <CodeExample code={SonnerErrorCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Info</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={SonnerInfoIframeRef}
                size={SonnerInfoSIZE}
                src="/examples/sonner/info"
                title="Info Example"
              />
              <CodeExample code={SonnerInfoCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Success</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={SonnerSuccessIframeRef}
                size={SonnerSuccessSIZE}
                src="/examples/sonner/success"
                title="Success Example"
              />
              <CodeExample code={SonnerSuccessCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Warning</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={SonnerWarningIframeRef}
                size={SonnerWarningSIZE}
                src="/examples/sonner/warning"
                title="Warning Example"
              />
              <CodeExample code={SonnerWarningCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features and capabilities of the component.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={SonnerActionsIframeRef}
                size={SonnerActionsSIZE}
                src="/examples/sonner/actions"
                title="Actions Example"
              />
              <CodeExample code={SonnerActionsCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Duration</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={SonnerDurationIframeRef}
                size={SonnerDurationSIZE}
                src="/examples/sonner/duration"
                title="Duration Example"
              />
              <CodeExample code={SonnerDurationCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Persistent</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={SonnerPersistentIframeRef}
                size={SonnerPersistentSIZE}
                src="/examples/sonner/persistent"
                title="Persistent Example"
              />
              <CodeExample code={SonnerPersistentCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Position Simple</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={SonnerPositionSimpleIframeRef}
                size={SonnerPositionSimpleSIZE}
                src="/examples/sonner/position-simple"
                title="Position Simple Example"
              />
              <CodeExample code={SonnerPositionSimpleCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Promise Simple</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={SonnerPromiseSimpleIframeRef}
                size={SonnerPromiseSimpleSIZE}
                src="/examples/sonner/promise-simple"
                title="Promise Simple Example"
              />
              <CodeExample code={SonnerPromiseSimpleCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Rich Content</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={SonnerRichContentIframeRef}
                size={SonnerRichContentSIZE}
                src="/examples/sonner/rich-content"
                title="Rich Content Example"
              />
              <CodeExample code={SonnerRichContentCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <div className="flex flex-col gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>Sonner Documentation</CardTitle>
                <CardDescription>
                  Sonner wraps the sonner library and extends all its props
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://sonner.emilkowal.ski/getting-started"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View Sonner documentation →
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
                • Escape - Dismiss all visible toasts
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
                • Uses aria-live regions to announce toast messages to screen readers
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Uses appropriate ARIA roles (alert or status) based on toast type
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
                • Toasts do not receive keyboard focus as they are transient UI elements. Screen
                readers automatically announce new toasts when they appear. Users can dismiss all
                toasts with Escape regardless of current focus.
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
            title: 'Card',
            href: '/components/card',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
