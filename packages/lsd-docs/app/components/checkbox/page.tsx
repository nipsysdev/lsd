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
  CODE as CheckboxBasicCODE,
  SIZE as CheckboxBasicSIZE,
} from '@/examples/checkbox/basic/page';
import {
  CODE as CheckboxControlledCODE,
  SIZE as CheckboxControlledSIZE,
} from '@/examples/checkbox/controlled/page';
import {
  CODE as CheckboxWithLabelCODE,
  SIZE as CheckboxWithLabelSIZE,
} from '@/examples/checkbox/with-label/page';

export default function CheckboxPage() {
  const CheckboxBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const CheckboxControlledIframeRef = useRef<HTMLIFrameElement>(null);
  const CheckboxWithLabelIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    CheckboxBasicIframeRef,
    CheckboxControlledIframeRef,
    CheckboxWithLabelIframeRef
  );

  return (
    <DocsLayout>
      <PageHeader
        title="Checkbox"
        description="Interactive checkbox control with checked, unchecked, and indeterminate states"
      />

      <PageContent>
        <PageSection title="About Checkbox">
          <Typography variant="body1" className="block">
            A checkbox control for binary selection that supports three states: checked, unchecked,
            and indeterminate. Built on Radix UI primitives for full keyboard accessibility and
            screen reader support. When used within forms, it includes proper form submission
            handling.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Checkbox component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Checkbox } from '@nipsys/lsd'

export default function MyComponent() {
  return <Checkbox />
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
                ref={CheckboxBasicIframeRef}
                size={CheckboxBasicSIZE}
                src="/examples/checkbox/basic"
                title="Basic Example"
              />
              <CodeExample code={CheckboxBasicCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features and capabilities of the component.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Controlled</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={CheckboxControlledIframeRef}
                size={CheckboxControlledSIZE}
                src="/examples/checkbox/controlled"
                title="Controlled Example"
              />
              <CodeExample code={CheckboxControlledCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>With Label</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={CheckboxWithLabelIframeRef}
                size={CheckboxWithLabelSIZE}
                src="/examples/checkbox/with-label"
                title="With Label Example"
              />
              <CodeExample code={CheckboxWithLabelCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <div className="flex flex-col gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>Radix UI Documentation</CardTitle>
                <CardDescription>Checkbox wraps Radix UI primitives</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://www.radix-ui.com/primitives/docs/components/checkbox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View Radix UI Checkbox documentation →
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
                • Tab - Navigate to the checkbox
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Space - Toggle between checked and unchecked states
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
                • role="checkbox" is applied by the Radix primitive
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-checked indicates current state (true, false, or mixed)
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-invalid marks invalid state when applicable
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-required indicates if the checkbox must be checked
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-disabled indicates the checkbox cannot be interacted with
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
                • Checkbox receives keyboard focus via Tab. Visible focus ring is applied when
                focused. Pressing Space toggles the checkbox state.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
        <PageNavigation
          previous={{
            title: 'Calendar',
            href: '/components/calendar',
          }}
          next={{
            title: 'Input',
            href: '/components/input',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
