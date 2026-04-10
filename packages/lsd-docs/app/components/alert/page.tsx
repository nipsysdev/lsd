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
import { CODE as AllVariantsCode } from '@/examples/alert/all-variants/page';
import { CODE as BasicCode } from '@/examples/alert/basic/page';
import { CODE as WithIconCode } from '@/examples/alert/with-icon/page';

export default function AlertPage() {
  return (
    <DocsLayout>
      <PageHeader
        title="Alert"
        description="Displays brief, important messages to attract the user's attention without interrupting their workflow."
      />

      <PageContent>
        <PageSection title="About Alert">
          <Typography variant="body1" className="block">
            The Alert component is a versatile notification element designed to convey important
            information to users. It provides a clean, accessible way to display messages with
            different semantic meanings.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Alert component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Alert, AlertTitle, AlertDescription } from '@nipsys/shadcn-lsd'

export default function MyComponent() {
  return (
    <Alert>
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>Your changes have been saved.</AlertDescription>
    </Alert>
  )
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Variants">
          <Typography variant="body1">
            Alert comes in five variants for different message types and contexts.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>All Variants</CardTitle>
              <CardDescription>
                Different semantic meanings for various message types
              </CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample size="lg" src="/examples/alert/all-variants" title="All Variants" />
              <CodeExample code={AllVariantsCode} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1">All available props for the Alert components.</Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>variant</CardTitle>
                <CardDescription>The semantic style of the alert</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> AlertVariant
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> default, destructive, info, success, warning
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> default
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
                  Merges with existing alert classes
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>...props</CardTitle>
                <CardDescription>Standard HTML div attributes</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  <strong>Type:</strong> <code>React.HTMLAttributes&lt;HTMLDivElement&gt;</code>
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  All standard HTML div attributes are supported
                </Typography>
              </CardContent>
            </Card>
          </div>

          <Typography variant="h2" className="mt-(--lsd-spacing-larger) mb-(--lsd-spacing-base)">
            AlertTitle
          </Typography>
          <Typography variant="body1" className="mb-(--lsd-spacing-base)">
            The title of the alert, displayed prominently at the top.
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base)">
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
                  Merges with existing title classes
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>...props</CardTitle>
                <CardDescription>Standard HTML div attributes</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  <strong>Type:</strong> <code>React.HTMLAttributes&lt;HTMLDivElement&gt;</code>
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  All standard HTML div attributes are supported
                </Typography>
              </CardContent>
            </Card>
          </div>

          <Typography variant="h2" className="mt-(--lsd-spacing-larger) mb-(--lsd-spacing-base)">
            AlertDescription
          </Typography>
          <Typography variant="body1" className="mb-(--lsd-spacing-base)">
            The detailed description of the alert message.
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base)">
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
                  Merges with existing description classes
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>...props</CardTitle>
                <CardDescription>Standard HTML paragraph attributes</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  <strong>Type:</strong>{' '}
                  <code>React.HTMLAttributes&lt;HTMLParagraphElement&gt;</code>
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  All standard HTML paragraph attributes are supported
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The Alert component follows accessibility best practices.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>ARIA Attributes</CardTitle>
              <CardDescription>Proper ARIA attributes for screen readers</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Built with{' '}
                <code className="px-2 py-1 bg-[var(--lsd-surface)] border border-[var(--lsd-border)] rounded text-sm">
                  role="alert"
                </code>{' '}
                attribute for screen reader announcement
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Proper color contrast with LSD theme tokens for each variant
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Semantic HTML structure with title and description slots
              </Typography>
              <Typography variant="body2" className="block">
                • Screen reader friendly with clear role and content
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
                Alerts have visible focus states that follow the LSD design system's focus
                indicators, ensuring keyboard users can always see which element has focus.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>

        <PageNavigation
          previous={{ title: 'Tabs', href: '/components/tabs' }}
          next={{ title: 'Progress', href: '/components/progress' }}
        />
      </PageContent>
    </DocsLayout>
  );
}
