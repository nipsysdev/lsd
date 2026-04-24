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
import { CODE as BadgeBasicCODE, SIZE as BadgeBasicSIZE } from '@/examples/badge/basic/page';
import {
  CODE as BadgeDestructiveCODE,
  SIZE as BadgeDestructiveSIZE,
} from '@/examples/badge/destructive/page';
import {
  CODE as BadgeDismissibleCODE,
  SIZE as BadgeDismissibleSIZE,
} from '@/examples/badge/dismissible/page';
import { CODE as BadgeDotsCODE, SIZE as BadgeDotsSIZE } from '@/examples/badge/dots/page';
import {
  CODE as BadgeFeaturesCODE,
  SIZE as BadgeFeaturesSIZE,
} from '@/examples/badge/features/page';
import { CODE as BadgeFilledCODE, SIZE as BadgeFilledSIZE } from '@/examples/badge/filled/page';
import { CODE as BadgeInfoCODE, SIZE as BadgeInfoSIZE } from '@/examples/badge/info/page';
import {
  CODE as BadgeInteractiveCODE,
  SIZE as BadgeInteractiveSIZE,
} from '@/examples/badge/interactive/page';
import {
  CODE as BadgeOutlinedCODE,
  SIZE as BadgeOutlinedSIZE,
} from '@/examples/badge/outlined/page';
import { CODE as BadgeSizesCODE, SIZE as BadgeSizesSIZE } from '@/examples/badge/sizes/page';
import { CODE as BadgeSuccessCODE, SIZE as BadgeSuccessSIZE } from '@/examples/badge/success/page';
import { CODE as BadgeWarningCODE, SIZE as BadgeWarningSIZE } from '@/examples/badge/warning/page';

export default function BadgePage() {
  const BadgeBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const BadgeDestructiveIframeRef = useRef<HTMLIFrameElement>(null);
  const BadgeDismissibleIframeRef = useRef<HTMLIFrameElement>(null);
  const BadgeDotsIframeRef = useRef<HTMLIFrameElement>(null);
  const BadgeFeaturesIframeRef = useRef<HTMLIFrameElement>(null);
  const BadgeFilledIframeRef = useRef<HTMLIFrameElement>(null);
  const BadgeInfoIframeRef = useRef<HTMLIFrameElement>(null);
  const BadgeInteractiveIframeRef = useRef<HTMLIFrameElement>(null);
  const BadgeOutlinedIframeRef = useRef<HTMLIFrameElement>(null);
  const BadgeSizesIframeRef = useRef<HTMLIFrameElement>(null);
  const BadgeSuccessIframeRef = useRef<HTMLIFrameElement>(null);
  const BadgeWarningIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    BadgeBasicIframeRef,
    BadgeDestructiveIframeRef,
    BadgeDismissibleIframeRef,
    BadgeDotsIframeRef,
    BadgeFeaturesIframeRef,
    BadgeFilledIframeRef,
    BadgeInfoIframeRef,
    BadgeInteractiveIframeRef,
    BadgeOutlinedIframeRef,
    BadgeSizesIframeRef,
    BadgeSuccessIframeRef,
    BadgeWarningIframeRef
  );

  return (
    <DocsLayout>
      <PageHeader
        title="Badge"
        description="Displays status, tags, or metadata with optional interactions and dismissibility."
      />

      <PageContent>
        <PageSection title="About Badge">
          <Typography variant="body1" className="block">
            Small label component for categorizing content or displaying status information.
            Supports clickable badges, dismissible badges with an X button, dot variants for compact
            indicators, and icon placement for visual emphasis.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Badge component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Badge } from '@nipsys/lsd'

export default function MyComponent() {
  return <Badge />
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
                ref={BadgeBasicIframeRef}
                size={BadgeBasicSIZE}
                src="/examples/badge/basic"
                title="Basic Example"
              />
              <CodeExample code={BadgeBasicCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Variants">
          <Typography variant="body1">
            Component variants for different visual styles and use cases.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Destructive</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={BadgeDestructiveIframeRef}
                size={BadgeDestructiveSIZE}
                src="/examples/badge/destructive"
                title="Destructive Example"
              />
              <CodeExample code={BadgeDestructiveCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Dots</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={BadgeDotsIframeRef}
                size={BadgeDotsSIZE}
                src="/examples/badge/dots"
                title="Dots Example"
              />
              <CodeExample code={BadgeDotsCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Filled</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={BadgeFilledIframeRef}
                size={BadgeFilledSIZE}
                src="/examples/badge/filled"
                title="Filled Example"
              />
              <CodeExample code={BadgeFilledCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Info</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={BadgeInfoIframeRef}
                size={BadgeInfoSIZE}
                src="/examples/badge/info"
                title="Info Example"
              />
              <CodeExample code={BadgeInfoCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Outlined</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={BadgeOutlinedIframeRef}
                size={BadgeOutlinedSIZE}
                src="/examples/badge/outlined"
                title="Outlined Example"
              />
              <CodeExample code={BadgeOutlinedCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Success</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={BadgeSuccessIframeRef}
                size={BadgeSuccessSIZE}
                src="/examples/badge/success"
                title="Success Example"
              />
              <CodeExample code={BadgeSuccessCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Warning</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={BadgeWarningIframeRef}
                size={BadgeWarningSIZE}
                src="/examples/badge/warning"
                title="Warning Example"
              />
              <CodeExample code={BadgeWarningCODE} />
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
                ref={BadgeSizesIframeRef}
                size={BadgeSizesSIZE}
                src="/examples/badge/sizes"
                title="Sizes Example"
              />
              <CodeExample code={BadgeSizesCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features and capabilities of the component.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Dismissible</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={BadgeDismissibleIframeRef}
                size={BadgeDismissibleSIZE}
                src="/examples/badge/dismissible"
                title="Dismissible Example"
              />
              <CodeExample code={BadgeDismissibleCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Features</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={BadgeFeaturesIframeRef}
                size={BadgeFeaturesSIZE}
                src="/examples/badge/features"
                title="Features Example"
              />
              <CodeExample code={BadgeFeaturesCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Interactive</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={BadgeInteractiveIframeRef}
                size={BadgeInteractiveSIZE}
                src="/examples/badge/interactive"
                title="Interactive Example"
              />
              <CodeExample code={BadgeInteractiveCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <div className="mt-(--lsd-spacing-large)">
            <Typography variant="h4" className="mb-(--lsd-spacing-base)">
              Badge
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base)">
              <Card>
                <CardHeader>
                  <CardTitle>asChild</CardTitle>
                  <CardDescription>
                    Render the child as the root element. Merges props with the first child element
                    for custom rendering.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>boolean</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>onDismiss</CardTitle>
                  <CardDescription>
                    Callback when dismiss button is clicked. Displays an X icon that triggers this
                    callback when clicked.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>() =&gt; void</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>onClick</CardTitle>
                  <CardDescription>
                    Callback when badge is clicked. Makes the badge interactive and adds button role
                    behavior.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>() =&gt; void</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>icon</CardTitle>
                  <CardDescription>
                    Icon to display alongside badge text. Renders the icon positioned left or right
                    based on iconPosition.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>React.ReactNode</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>iconPosition</CardTitle>
                  <CardDescription>
                    Position of the icon relative to badge text. Controls whether icon appears
                    before or after the text content.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>"left" | "right"</code>
                  </Typography>
                  <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Options:</strong> left, right
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>dot</CardTitle>
                  <CardDescription>
                    Display as a dot without text. Renders a circular dot indicator instead of a
                    text badge.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>boolean</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
            </div>
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
                • Tab - Navigate to clickable badges
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Enter or Space - Activate clickable badge (when role="button")
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
                • role="button" when onClick is provided
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-label="Dismiss" on dismiss button
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Badge text should be descriptive of the status or category
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
                • Clickable badges are focusable (tabIndex={0})
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Focus ring indicates keyboard focus on clickable badges
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
        <PageNavigation
          previous={{
            title: 'Avatar',
            href: '/components/avatar',
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
