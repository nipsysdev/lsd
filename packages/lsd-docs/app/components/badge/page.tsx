'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Typography,
} from '@nipsys/shadcn-lsd';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { IframeExample } from '@/components/docs/IframeExample';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { CODE as BadgeBasicCODE } from '@/examples/badge/basic/page';
import { CODE as BadgeDismissibleCODE } from '@/examples/badge/dismissible/page';
import { CODE as BadgeDotsCODE } from '@/examples/badge/dots/page';
import { CODE as BadgeFeaturesCODE } from '@/examples/badge/features/page';
import { CODE as BadgeInteractiveCODE } from '@/examples/badge/interactive/page';
import { CODE as BadgeSizesCODE } from '@/examples/badge/sizes/page';
import { CODE as BadgeVariantsCODE } from '@/examples/badge/variants/page';

export default function BadgePage() {
  return (
    <DocsLayout>
      <PageHeader
        title="Badge"
        description="Small status indicators and labels for categorizing and highlighting information"
      />

      <PageContent>
        <PageSection title="About Badge">
          <Typography variant="body1" className="block">
            Badges are compact visual indicators used to display status, categories, or metadata.
            They provide context and help users quickly identify different states or types of
            content at a glance.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Badge component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Badge } from '@nipsys/shadcn-lsd'

export default function MyComponent() {
  return <Badge>New</Badge>
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Variants">
          <Typography variant="body1">
            Badges come in eight variants for different semantic meanings and visual styles.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Primary Variants</CardTitle>
              <CardDescription>Basic badge styles for general use</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample src="/examples/badge/basic" size="sm" title="Badge Basic Example" />
              <CodeExample code={BadgeBasicCODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Semantic Variants</CardTitle>
              <CardDescription>
                Color-coded badges for different states and meanings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                src="/examples/badge/variants"
                size="sm"
                title="Badge Variants Example"
              />
              <CodeExample code={BadgeVariantsCODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Dot Variant</CardTitle>
              <CardDescription>Minimal circular indicator for status display</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample src="/examples/badge/dots" size="sm" title="Badge Dots Example" />
              <CodeExample code={BadgeDotsCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Sizes">
          <Typography variant="body1">
            Badges come in three sizes to fit different contexts and visual hierarchies.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>All Sizes</CardTitle>
              <CardDescription>Small, medium, and large badge sizes</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample src="/examples/badge/sizes" size="sm" title="Badge Sizes Example" />
              <CodeExample code={BadgeSizesCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features like clickability, dismissibility, icon support, and dot indicators.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Clickable Badges</CardTitle>
              <CardDescription>Badges that respond to click events</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                src="/examples/badge/interactive"
                size="sm"
                title="Badge Interactive Example"
              />
              <CodeExample code={BadgeInteractiveCODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Dismissible Badges</CardTitle>
              <CardDescription>Badges with close button for removal</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                src="/examples/badge/dismissible"
                size="sm"
                title="Badge Dismissible Example"
              />
              <CodeExample code={BadgeDismissibleCODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Icon Support</CardTitle>
              <CardDescription>Add icons to badges for better visual communication</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                src="/examples/badge/features"
                size="sm"
                title="Badge Features Example"
              />
              <CodeExample code={BadgeFeaturesCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1">All available props for the Badge component.</Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>variant</CardTitle>
                <CardDescription>The visual style of the badge</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> BadgeVariant
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> filled, outlined, destructive, success, warning, info,
                  dot
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> filled
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>size</CardTitle>
                <CardDescription>The size of the badge</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> SizeVariant
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> sm, md, lg
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> md
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>asChild</CardTitle>
                <CardDescription>Whether to merge props with child element</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Used for rendering badge as a different element
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>onDismiss</CardTitle>
                <CardDescription>Callback when dismiss button is clicked</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> () =&gt; void
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Shows a close button when provided
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>onClick</CardTitle>
                <CardDescription>Callback when badge is clicked</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> () =&gt; void
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Makes badge clickable and keyboard accessible
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>icon</CardTitle>
                <CardDescription>Icon to display in the badge</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ReactNode
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Icon component to display alongside text
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>iconPosition</CardTitle>
                <CardDescription>Position of the icon relative to text</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> 'left' | 'right'
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> left, right
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> left
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>dot</CardTitle>
                <CardDescription>Display as a circular dot indicator</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Shows badge as a circular dot without text
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>className</CardTitle>
                <CardDescription>Additional CSS classes to apply</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Merges with existing badge classes
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>...props</CardTitle>
                <CardDescription>Standard HTML span attributes</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  <strong>Type:</strong> <code>React.ComponentProps&lt;'span'&gt;</code>
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  All standard HTML span attributes are supported
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The Badge component follows accessibility best practices for screen readers and keyboard
            navigation.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Clickable badges are fully keyboard accessible</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Tab</strong> - Navigate to the clickable badge
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Shift + Tab</strong> - Navigate to previous focusable element
              </Typography>
              <Typography variant="body2" className="block">
                • <strong>Enter or Space</strong> - Activate the badge click handler
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
                • Clickable badges automatically get <code>role="button"</code> and{' '}
                <code>tabIndex="0"</code>
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Dismiss buttons use <code>aria-label="Dismiss"</code> for clear identification
              </Typography>
              <Typography variant="body2" className="block">
                • Use semantic variants (success, warning, error, info) to convey meaning through
                color
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
                Clickable badges have visible focus states that follow the LSD design system's focus
                indicators, ensuring keyboard users can always see which element has focus.
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
