'use client';

import {
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
import { useSendThemeToIframes } from '@/components/docs/useSendIframes';
import { CODE as ToggleBasicCODE } from '@/examples/toggle/basic/page';
import { CODE as TogglePressedCODE } from '@/examples/toggle/pressed/page';
import { CODE as ToggleSizesCODE } from '@/examples/toggle/sizes/page';
import { CODE as ToggleWithTextCODE } from '@/examples/toggle/with-text/page';

export default function TogglePage() {
  const toggleBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const togglePressedIframeRef = useRef<HTMLIFrameElement>(null);
  const toggleWithTextIframeRef = useRef<HTMLIFrameElement>(null);
  const toggleSizesIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    toggleBasicIframeRef,
    togglePressedIframeRef,
    toggleWithTextIframeRef,
    toggleSizesIframeRef
  );

  return (
    <DocsLayout>
      <PageHeader
        title="Toggle"
        description="Two-state button that can be either on or off, with visual feedback for the current state"
      />

      <PageContent>
        <PageSection title="About Toggle">
          <Typography variant="body1" className="block">
            Toggle is a button-style switch that can be toggled between on and off states. It
            provides visual feedback with different styles for the pressed and unpressed states.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Toggle component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Toggle } from '@nipsys/shadcn-lsd';

export default function MyComponent() {
  return <Toggle aria-label="Toggle bold">Bold</Toggle>;
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Basic Toggle">
          <Typography variant="body1">
            Toggle can be controlled or uncontrolled and supports different sizes.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Basic Toggle</CardTitle>
              <CardDescription>Simple toggle button with icon-only children</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={toggleBasicIframeRef}
                size="md"
                src="/examples/toggle/basic"
                title="Toggle Basic Example"
              />
              <CodeExample code={ToggleBasicCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Pressed State">
          <Typography variant="body1">Control the toggle state with the pressed prop.</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Pressed State</CardTitle>
              <CardDescription>Toggle with some items pressed by default</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={togglePressedIframeRef}
                size="md"
                src="/examples/toggle/pressed"
                title="Toggle Pressed Example"
              />
              <CodeExample code={TogglePressedCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="With Text Labels">
          <Typography variant="body1">
            Toggles can include text content inside the button.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>With Text Labels</CardTitle>
              <CardDescription>Toggle buttons with text labels</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={toggleWithTextIframeRef}
                size="md"
                src="/examples/toggle/with-text"
                title="Toggle With Text Example"
              />
              <CodeExample code={ToggleWithTextCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Sizes">
          <Typography variant="body1">
            Toggle buttons come in two sizes to fit different contexts.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Small Size</CardTitle>
              <CardDescription>Toggle buttons in small size</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={toggleSizesIframeRef}
                size="md"
                src="/examples/toggle/sizes"
                title="Toggle Sizes Example"
              />
              <CodeExample code={ToggleSizesCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1">All available props for the Toggle component.</Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>pressed</CardTitle>
                <CardDescription>Whether the toggle is pressed</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-2">
                  Controls the pressed state for controlled components
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>defaultPressed</CardTitle>
                <CardDescription>Initial pressed state</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-2">
                  Initial state for uncontrolled components
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>onPressedChange</CardTitle>
                <CardDescription>Callback when pressed state changes</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> (pressed: boolean) =&gt; void
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-2">
                  Called when user toggles the button
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>disabled</CardTitle>
                <CardDescription>Whether the toggle is disabled</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-2">
                  Prevents user interaction and reduces opacity
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>size</CardTitle>
                <CardDescription>Size of the toggle</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> 'sm' | 'md'
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> 'md'
                </Typography>
                <Typography variant="body2" className="mt-2">
                  'sm' is smaller, 'md' is default size
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The Toggle component follows accessibility best practices built on Radix UI.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Toggle is fully keyboard accessible</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-2">
                • Tab - Navigate to the toggle
              </Typography>
              <Typography variant="body2" className="block mb-2">
                • <strong>Enter</strong> or <strong>Space</strong> - Toggle state
              </Typography>
              <Typography variant="body2" className="block">
                • <strong>Shift + Tab</strong> - Navigate to previous element
              </Typography>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>ARIA Attributes</CardTitle>
              <CardDescription>Proper ARIA attributes for screen readers</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-2">
                • aria-press is automatically managed (true/false)
              </Typography>
              <Typography variant="body2" className="block">
                • Use aria-label for icon-only toggles
              </Typography>
            </CardContent>
          </Card>
        </PageSection>

        <PageNavigation
          previous={{
            title: 'Table',
            href: '/components/table',
          }}
          next={{
            title: 'Toggle Group',
            href: '/components/toggle-group',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
