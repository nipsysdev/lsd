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
import { CODE as ToggleBasicCODE, SIZE as ToggleBasicSIZE } from '@/examples/toggle/basic/page';
import {
  CODE as TogglePressedCODE,
  SIZE as TogglePressedSIZE,
} from '@/examples/toggle/pressed/page';
import { CODE as ToggleSizesCODE, SIZE as ToggleSizesSIZE } from '@/examples/toggle/sizes/page';
import {
  CODE as ToggleWithTextCODE,
  SIZE as ToggleWithTextSIZE,
} from '@/examples/toggle/with-text/page';

export default function TogglePage() {
  const ToggleBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const TogglePressedIframeRef = useRef<HTMLIFrameElement>(null);
  const ToggleSizesIframeRef = useRef<HTMLIFrameElement>(null);
  const ToggleWithTextIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    ToggleBasicIframeRef,
    TogglePressedIframeRef,
    ToggleSizesIframeRef,
    ToggleWithTextIframeRef
  );

  return (
    <DocsLayout>
      <PageHeader
        title="Toggle"
        description="Button that switches between on and off states with visual feedback."
      />

      <PageContent>
        <PageSection title="About Toggle">
          <Typography variant="body1" className="block">
            A togglable button that switches between enabled and disabled states. Provides visual
            feedback through styling changes to indicate the current state, making it ideal for
            settings, filters, and options that can be toggled.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Toggle component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Toggle } from '@nipsys/lsd'

export default function MyComponent() {
  return <Toggle />
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
                ref={ToggleBasicIframeRef}
                size={ToggleBasicSIZE}
                src="/examples/toggle/basic"
                title="Basic Example"
              />
              <CodeExample code={ToggleBasicCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Variants">
          <Typography variant="body1">
            Component variants for different visual styles and use cases.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>With Text</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={ToggleWithTextIframeRef}
                size={ToggleWithTextSIZE}
                src="/examples/toggle/with-text"
                title="With Text Example"
              />
              <CodeExample code={ToggleWithTextCODE} />
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
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={ToggleSizesIframeRef}
                size={ToggleSizesSIZE}
                src="/examples/toggle/sizes"
                title="Sizes Example"
              />
              <CodeExample code={ToggleSizesCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features and capabilities of the component.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Pressed</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={TogglePressedIframeRef}
                size={TogglePressedSIZE}
                src="/examples/toggle/pressed"
                title="Pressed Example"
              />
              <CodeExample code={TogglePressedCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <div className="flex flex-col gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>Radix UI Documentation</CardTitle>
                <CardDescription>Toggle wraps Radix UI primitives</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://www.radix-ui.com/primitives/docs/components/toggle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View Radix UI Toggle documentation →
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
                • Tab - Navigate to the toggle
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Enter or Space - Toggle state
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
                • aria-pressed is automatically managed based on pressed state
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Use aria-label when toggle text is not descriptive
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
                • Visible focus ring indicates keyboard focus
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Keyboard users can see which toggle has focus
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
            title: 'Toggle-group',
            href: '/components/toggle-group',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
