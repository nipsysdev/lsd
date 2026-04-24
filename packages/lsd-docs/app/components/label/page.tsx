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
import { CODE as LabelBasicCODE, SIZE as LabelBasicSIZE } from '@/examples/label/basic/page';
import { CODE as LabelSizesCODE, SIZE as LabelSizesSIZE } from '@/examples/label/sizes/page';
import {
  CODE as LabelVariantsCODE,
  SIZE as LabelVariantsSIZE,
} from '@/examples/label/variants/page';

export default function LabelPage() {
  const LabelBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const LabelSizesIframeRef = useRef<HTMLIFrameElement>(null);
  const LabelVariantsIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(LabelBasicIframeRef, LabelSizesIframeRef, LabelVariantsIframeRef);

  return (
    <DocsLayout>
      <PageHeader
        title="Label"
        description="Accessible label for form controls with variants and sizes"
      />

      <PageContent>
        <PageSection title="About Label">
          <Typography variant="body1" className="block">
            Text label component that provides clear identification for form inputs and controls.
            Built on Radix UI's Label primitive with support for default and secondary variants and
            three size options. Automatically handles accessibility by associating with controls
            through htmlFor or nested relationships.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Label component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Label } from '@nipsys/lsd'

export default function MyComponent() {
  return <Label />
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
                ref={LabelBasicIframeRef}
                size={LabelBasicSIZE}
                src="/examples/label/basic"
                title="Basic Example"
              />
              <CodeExample code={LabelBasicCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Variants">
          <Typography variant="body1">
            Component variants for different visual styles and use cases.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Variants</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={LabelVariantsIframeRef}
                size={LabelVariantsSIZE}
                src="/examples/label/variants"
                title="Variants Example"
              />
              <CodeExample code={LabelVariantsCODE} />
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
                ref={LabelSizesIframeRef}
                size={LabelSizesSIZE}
                src="/examples/label/sizes"
                title="Sizes Example"
              />
              <CodeExample code={LabelSizesCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <div className="flex flex-col gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>Radix UI Documentation</CardTitle>
                <CardDescription>Label wraps Radix UI primitives</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://www.radix-ui.com/primitives/docs/components/label"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View Radix UI Label documentation →
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
              <CardTitle>ARIA Attributes</CardTitle>
              <CardDescription>Proper ARIA attributes for screen readers</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Uses native label element semantics for proper screen reader support
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • htmlFor attribute creates explicit association with form controls
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Wrapping controls creates implicit association
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
                • Labels do not receive focus but clicking or tapping them moves focus to their
                associated control. Screen readers announce label text when the associated control
                receives focus.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
        <PageNavigation
          previous={{
            title: 'Input-group',
            href: '/components/input-group',
          }}
          next={{
            title: 'Field',
            href: '/components/field',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
