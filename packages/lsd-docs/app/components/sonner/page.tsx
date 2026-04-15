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
import { CODE as TOAST_ACTIONS_CODE } from '@/examples/sonner/actions/page';
import { CODE as TOAST_BASIC_CODE } from '@/examples/sonner/basic/page';
import { CODE as TOAST_CUSTOM_CODE } from '@/examples/sonner/custom/page';
import { CODE as TOAST_DURATION_CODE } from '@/examples/sonner/duration/page';
import { CODE as TOAST_PERSISTENT_CODE } from '@/examples/sonner/persistent/page';
import { CODE as TOAST_POSITION_CODE } from '@/examples/sonner/position/page';
import { CODE as TOAST_POSITIONS_CODE } from '@/examples/sonner/positions/page';
import { CODE as TOAST_PROMISE_CODE } from '@/examples/sonner/promise/page';
import { CODE as TOAST_RICH_CODE } from '@/examples/sonner/rich/page';
import { CODE as TOAST_TYPES_CODE } from '@/examples/sonner/toast-types/page';

export default function SonnerPage() {
  const toastBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const toastCustomIframeRef = useRef<HTMLIFrameElement>(null);
  const toastPositionIframeRef = useRef<HTMLIFrameElement>(null);
  const toastTypesIframeRef = useRef<HTMLIFrameElement>(null);
  const toastDurationIframeRef = useRef<HTMLIFrameElement>(null);
  const toastPositionsIframeRef = useRef<HTMLIFrameElement>(null);
  const toastActionsIframeRef = useRef<HTMLIFrameElement>(null);
  const toastPersistentIframeRef = useRef<HTMLIFrameElement>(null);
  const toastPromiseIframeRef = useRef<HTMLIFrameElement>(null);
  const toastRichIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    toastBasicIframeRef,
    toastCustomIframeRef,
    toastPositionIframeRef,
    toastTypesIframeRef,
    toastDurationIframeRef,
    toastPositionsIframeRef,
    toastActionsIframeRef,
    toastPersistentIframeRef,
    toastPromiseIframeRef,
    toastRichIframeRef
  );

  return (
    <DocsLayout>
      <PageHeader
        title="Sonner"
        description="Toast notification component with multiple types and customizable options"
      />

      <PageContent>
        <PageSection title="About Sonner">
          <Typography variant="body1" className="block">
            Sonner is a toast notification component that displays brief, non-intrusive messages to
            users. It provides multiple toast types, customizable positioning, and rich color
            options for different notification states.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">
            Import the Toaster component and toast function from LSD and sonner:
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Toaster } from '@nipsys/lsd'
import { toast } from 'sonner'

export default function MyComponent() {
  return (
    <>
      <Toaster />
      <Button onClick={() => toast('Hello world')}>
        Show toast
      </Button>
    </>
  )
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Sonner Examples">
          <Typography variant="body1">
            Various toast types, positions, and features including custom duration, actions,
            promise-based toasts, and rich content.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Basic Toasts</CardTitle>
              <CardDescription>Success, error, warning, and info toasts</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={toastBasicIframeRef}
                size="md"
                src="/examples/sonner/basic"
                title="Basic Toast Example"
              />
              <CodeExample code={TOAST_BASIC_CODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Custom Toasts</CardTitle>
              <CardDescription>
                Rich content, custom icons, and promise-based toasts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={toastCustomIframeRef}
                size="lg"
                src="/examples/sonner/custom"
                title="Custom Toast Example"
              />
              <CodeExample code={TOAST_CUSTOM_CODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Toast Positions</CardTitle>
              <CardDescription>Different toast positioning options</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={toastPositionIframeRef}
                size="lg"
                src="/examples/sonner/position"
                title="Toast Position Example"
              />
              <CodeExample code={TOAST_POSITION_CODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Toast Types</CardTitle>
              <CardDescription>Simple, success, error, warning, and info toasts</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={toastTypesIframeRef}
                size="sm"
                src="/examples/sonner/toast-types"
                title="Toast Types Example"
              />
              <CodeExample code={TOAST_TYPES_CODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Custom Duration</CardTitle>
              <CardDescription>Control how long toasts stay visible</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={toastDurationIframeRef}
                size="sm"
                src="/examples/sonner/duration"
                title="Toast Duration Example"
              />
              <CodeExample code={TOAST_DURATION_CODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Positioned Toasts</CardTitle>
              <CardDescription>Control toast positioning on screen</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={toastPositionsIframeRef}
                size="sm"
                src="/examples/sonner/positions"
                title="Toast Positions Example"
              />
              <CodeExample code={TOAST_POSITIONS_CODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>With Actions</CardTitle>
              <CardDescription>Add action buttons to toasts</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={toastActionsIframeRef}
                size="sm"
                src="/examples/sonner/actions"
                title="Toast Actions Example"
              />
              <CodeExample code={TOAST_ACTIONS_CODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Persistent Toasts</CardTitle>
              <CardDescription>Toasts that don't auto-dismiss</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={toastPersistentIframeRef}
                size="sm"
                src="/examples/sonner/persistent"
                title="Toast Persistent Example"
              />
              <CodeExample code={TOAST_PERSISTENT_CODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Promise-based Toasts</CardTitle>
              <CardDescription>Async loading states with automatic success/error</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={toastPromiseIframeRef}
                size="sm"
                src="/examples/sonner/promise"
                title="Toast Promise Example"
              />
              <CodeExample code={TOAST_PROMISE_CODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Rich Toasts</CardTitle>
              <CardDescription>Custom JSX content in toasts</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={toastRichIframeRef}
                size="sm"
                src="/examples/sonner/rich"
                title="Toast Rich Example"
              />
              <CodeExample code={TOAST_RICH_CODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1">All available props for the Toaster component.</Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>theme</CardTitle>
                <CardDescription>Theme for the toast notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> 'light' | 'dark' | 'system'
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> light, dark, system
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> system
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>position</CardTitle>
                <CardDescription>Position of the toast container</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> ToasterPosition
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> top-left, top-center, top-right, bottom-left,
                  bottom-center, bottom-right
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> bottom-right
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>expand</CardTitle>
                <CardDescription>Whether to expand toasts on hover</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Expands toast to show full content on hover
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>duration</CardTitle>
                <CardDescription>Default duration for all toasts</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> number
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> 4000
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Duration in milliseconds before toast auto-dismisses
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>richColors</CardTitle>
                <CardDescription>Enable rich color backgrounds for toast types</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> true
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Applies colored backgrounds based on toast type
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>closeButton</CardTitle>
                <CardDescription>Show close button on toasts</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Displays a close button on each toast
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>toastOptions</CardTitle>
                <CardDescription>Default options for all toasts</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> ToastOptions
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Default configuration applied to all toasts
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>className</CardTitle>
                <CardDescription>Additional CSS classes to apply</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Merges with existing toaster classes
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The Sonner component follows accessibility best practices.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Toasts are fully keyboard accessible</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Tab</strong> - Navigate to toast actions
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Shift + Tab</strong> - Navigate to previous focusable element
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Enter</strong> - Activate toast action button
              </Typography>
              <Typography variant="body2" className="block">
                • <strong>Escape</strong> - Dismiss toast (if dismissible)
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
                • Toasts use <code>role="alert"</code> for important notifications
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Use <code>aria-live</code> for announcing toast messages
              </Typography>
              <Typography variant="body2" className="block">
                • Action buttons are properly labeled for screen readers
              </Typography>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Focus States</CardTitle>
              <CardDescription>Visible focus indicators for keyboard users</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block">
                Toasts have visible focus states that follow the LSD design system's focus
                indicators, ensuring keyboard users can always see which element has focus.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
      </PageContent>

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
    </DocsLayout>
  );
}
