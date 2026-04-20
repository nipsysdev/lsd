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
  CODE as BADGE_DESTRUCTIVE_CODE,
  SIZE as BADGE_DESTRUCTIVE_SIZE,
} from '@/examples/badge/destructive/page';
import { CODE as BADGE_FILLED_CODE, SIZE as BADGE_FILLED_SIZE } from '@/examples/badge/filled/page';
import { CODE as BADGE_INFO_CODE, SIZE as BADGE_INFO_SIZE } from '@/examples/badge/info/page';
import {
  CODE as BADGE_OUTLINED_CODE,
  SIZE as BADGE_OUTLINED_SIZE,
} from '@/examples/badge/outlined/page';
import {
  CODE as BADGE_SUCCESS_CODE,
  SIZE as BADGE_SUCCESS_SIZE,
} from '@/examples/badge/success/page';
import {
  CODE as BADGE_WARNING_CODE,
  SIZE as BADGE_WARNING_SIZE,
} from '@/examples/badge/warning/page';

export default function BadgePage() {
  const badgeFilledRef = useRef<HTMLIFrameElement>(null);
  const badgeOutlinedRef = useRef<HTMLIFrameElement>(null);
  const badgeDestructiveRef = useRef<HTMLIFrameElement>(null);
  const badgeSuccessRef = useRef<HTMLIFrameElement>(null);
  const badgeWarningRef = useRef<HTMLIFrameElement>(null);
  const badgeInfoRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    badgeFilledRef,
    badgeOutlinedRef,
    badgeDestructiveRef,
    badgeSuccessRef,
    badgeWarningRef,
    badgeInfoRef
  );

  return (
    <DocsLayout>
      <PageHeader
        title="Badge"
        description="Displays status, tags, or metadata. Small label for categorizing content or displaying status information. Supports click interactions, dismissible badges, dot variants, and icon placement for visual emphasis."
      />

      <PageContent>
        <PageSection title="About Badge">
          <Typography variant="body1" className="block">
            Displays status, tags, or metadata. Small label for categorizing content or displaying
            status information. Supports click interactions, dismissible badges, dot variants, and
            icon placement for visual emphasis.
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

        <PageSection title="Variants">
          <Typography variant="body1">
            Component variants for different visual styles and use cases.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Filled</CardTitle>
              <CardDescription>Primary variant for emphasis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <IframeExample
                  ref={badgeFilledRef}
                  src="/examples/badge/filled"
                  title="Filled"
                  size={BADGE_FILLED_SIZE}
                />
              </div>
              <CodeExample code={BADGE_FILLED_CODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Outlined</CardTitle>
              <CardDescription>Bordered variant for secondary emphasis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <IframeExample
                  ref={badgeOutlinedRef}
                  src="/examples/badge/outlined"
                  title="Outlined"
                  size={BADGE_OUTLINED_SIZE}
                />
              </div>
              <CodeExample code={BADGE_OUTLINED_CODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Destructive</CardTitle>
              <CardDescription>Variant for error states</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <IframeExample
                  ref={badgeDestructiveRef}
                  src="/examples/badge/destructive"
                  title="Destructive"
                  size={BADGE_DESTRUCTIVE_SIZE}
                />
              </div>
              <CodeExample code={BADGE_DESTRUCTIVE_CODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Success</CardTitle>
              <CardDescription>Variant for successful states</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <IframeExample
                  ref={badgeSuccessRef}
                  src="/examples/badge/success"
                  title="Success"
                  size={BADGE_SUCCESS_SIZE}
                />
              </div>
              <CodeExample code={BADGE_SUCCESS_CODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Warning</CardTitle>
              <CardDescription>Variant for warning states</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <IframeExample
                  ref={badgeWarningRef}
                  src="/examples/badge/warning"
                  title="Warning"
                  size={BADGE_WARNING_SIZE}
                />
              </div>
              <CodeExample code={BADGE_WARNING_CODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Info</CardTitle>
              <CardDescription>Variant for informational states</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <IframeExample
                  ref={badgeInfoRef}
                  src="/examples/badge/info"
                  title="Info"
                  size={BADGE_INFO_SIZE}
                />
              </div>
              <CodeExample code={BADGE_INFO_CODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1">All available props for the component.</Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
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
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>dot</CardTitle>
                <CardDescription>
                  Display as a dot without text. Renders a circular dot indicator instead of a text
                  badge.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
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
                  <strong>Type:</strong> React.ReactNode
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>iconPosition</CardTitle>
                <CardDescription>
                  Position of the icon relative to badge text. Controls whether icon appears before
                  or after the text content.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> "left" | "right"
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> left, right
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
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
                  <strong>Type:</strong> () =&gt; void
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
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
                  <strong>Type:</strong> () =&gt; void
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
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
                • Clickable badges are focusable (tabIndex= 0 )
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
            title: 'Button',
            href: '/components/button',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
