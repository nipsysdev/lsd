'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, Typography } from '@nipsys/lsd';
import { useRef } from 'react';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { IframeExample } from '@/components/docs/IframeExample';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { useSendThemeToIframes } from '@/components/docs/useSendIframes';
import { CODE as AlertDefaultCODE, SIZE as AlertDefaultSIZE } from '@/examples/alert/default/page';
import {
  CODE as AlertDescriptionOnlyCODE,
  SIZE as AlertDescriptionOnlySIZE,
} from '@/examples/alert/description-only/page';
import {
  CODE as AlertDestructiveCODE,
  SIZE as AlertDestructiveSIZE,
} from '@/examples/alert/destructive/page';
import { CODE as AlertInfoCODE, SIZE as AlertInfoSIZE } from '@/examples/alert/info/page';
import { CODE as AlertSuccessCODE, SIZE as AlertSuccessSIZE } from '@/examples/alert/success/page';
import { CODE as AlertWarningCODE, SIZE as AlertWarningSIZE } from '@/examples/alert/warning/page';

export default function AlertPage() {
  const AlertBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const AlertDefaultIframeRef = useRef<HTMLIFrameElement>(null);
  const AlertDescriptionOnlyIframeRef = useRef<HTMLIFrameElement>(null);
  const AlertDestructiveIframeRef = useRef<HTMLIFrameElement>(null);
  const AlertInfoIframeRef = useRef<HTMLIFrameElement>(null);
  const AlertSuccessIframeRef = useRef<HTMLIFrameElement>(null);
  const AlertWarningIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    AlertBasicIframeRef,
    AlertDefaultIframeRef,
    AlertDescriptionOnlyIframeRef,
    AlertDestructiveIframeRef,
    AlertInfoIframeRef,
    AlertSuccessIframeRef,
    AlertWarningIframeRef
  );

  return (
    <DocsLayout>
      <PageHeader
        title="Alert"
        description="Displays contextual information with visual emphasis and semantic styling."
      />

      <PageContent>
        <PageSection title="About Alert">
          <Typography variant="body1" className="block">
            A static alert component for communicating important messages with different visual
            semantics. Supports multiple variants (default, destructive, info, success, warning) for
            different types of information.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Alert component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Alert } from '@nipsys/lsd'

export default function MyComponent() {
  return <Alert />
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
              <CardTitle>Default</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={AlertDefaultIframeRef}
                size={AlertDefaultSIZE}
                src="/examples/alert/default"
                title="Default Example"
              />
              <CodeExample code={AlertDefaultCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Destructive</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={AlertDestructiveIframeRef}
                size={AlertDestructiveSIZE}
                src="/examples/alert/destructive"
                title="Destructive Example"
              />
              <CodeExample code={AlertDestructiveCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Info</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={AlertInfoIframeRef}
                size={AlertInfoSIZE}
                src="/examples/alert/info"
                title="Info Example"
              />
              <CodeExample code={AlertInfoCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Success</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={AlertSuccessIframeRef}
                size={AlertSuccessSIZE}
                src="/examples/alert/success"
                title="Success Example"
              />
              <CodeExample code={AlertSuccessCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Warning</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={AlertWarningIframeRef}
                size={AlertWarningSIZE}
                src="/examples/alert/warning"
                title="Warning Example"
              />
              <CodeExample code={AlertWarningCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features and capabilities of the component.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Description Only</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={AlertDescriptionOnlyIframeRef}
                size={AlertDescriptionOnlySIZE}
                src="/examples/alert/description-only"
                title="Description Only Example"
              />
              <CodeExample code={AlertDescriptionOnlyCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Composition">
          <Card className="mt-(--lsd-spacing-base)">
            <CardContent className="pt-(--lsd-spacing-base)">
              <CodeBlock>{['Alert', '├── AlertTitle', '└── AlertDescription']}</CodeBlock>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <div className="mt-(--lsd-spacing-large)">
            <Typography variant="h4" className="mb-(--lsd-spacing-base)">
              Alert
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base)">
              <Card>
                <CardHeader>
                  <CardTitle>variant</CardTitle>
                  <CardDescription>Visual style for the alert.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong>{' '}
                    <code>"default" | "destructive" | "info" | "success" | "warning"</code>
                  </Typography>
                  <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Options:</strong> default, destructive, info, success, warning
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
                • Not keyboard interactive (static content)
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
                • role="alert" identifies the alert to assistive technologies
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Visual content should be textually described for screen readers
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
                • Not focusable by design as it provides static information
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
        <PageNavigation
          previous={{
            title: 'Tabs',
            href: '/components/tabs',
          }}
          next={{
            title: 'Progress',
            href: '/components/progress',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
