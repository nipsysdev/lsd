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
  CODE as TextareaBasicCODE,
  SIZE as TextareaBasicSIZE,
} from '@/examples/textarea/basic/page';
import {
  CODE as TextareaCharacterCountCODE,
  SIZE as TextareaCharacterCountSIZE,
} from '@/examples/textarea/character-count/page';
import {
  CODE as TextareaStatesCODE,
  SIZE as TextareaStatesSIZE,
} from '@/examples/textarea/states/page';

export default function TextareaPage() {
  const TextareaBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const TextareaCharacterCountIframeRef = useRef<HTMLIFrameElement>(null);
  const TextareaStatesIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    TextareaBasicIframeRef,
    TextareaCharacterCountIframeRef,
    TextareaStatesIframeRef
  );

  return (
    <DocsLayout>
      <PageHeader
        title="Textarea"
        description="Multi-line text input for collecting longer form content."
      />

      <PageContent>
        <PageSection title="About Textarea">
          <Typography variant="body1" className="block">
            A styled textarea component for multi-line text input. Includes built-in focus states,
            error indicators (via aria-invalid), and disabled styling. Supports all standard HTML
            textarea attributes for flexibility.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Textarea component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Textarea } from '@nipsys/lsd'

export default function MyComponent() {
  return <Textarea />
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
                ref={TextareaBasicIframeRef}
                size={TextareaBasicSIZE}
                src="/examples/textarea/basic"
                title="Basic Example"
              />
              <CodeExample code={TextareaBasicCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features and capabilities of the component.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Character Count</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={TextareaCharacterCountIframeRef}
                size={TextareaCharacterCountSIZE}
                src="/examples/textarea/character-count"
                title="Character Count Example"
              />
              <CodeExample code={TextareaCharacterCountCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>States</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={TextareaStatesIframeRef}
                size={TextareaStatesSIZE}
                src="/examples/textarea/states"
                title="States Example"
              />
              <CodeExample code={TextareaStatesCODE} />
            </CardContent>
          </Card>
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
                • Tab - Navigate to/from the textarea
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
                • aria-invalid indicates error state to assistive technologies
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Use aria-label or aria-labelledby when no visible label exists
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
                • Follows standard HTML textarea focus behavior. Focus indicators use the LSD design
                system's focus ring styling for visibility.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
        <PageNavigation
          previous={{
            title: 'Switch',
            href: '/components/switch',
          }}
          next={{
            title: 'Command',
            href: '/components/command',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
