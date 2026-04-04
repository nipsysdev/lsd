'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@nipsys/shadcn-lsd';
import { useRef } from 'react';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { IframeExample } from '@/components/docs/IframeExample';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';
import { CODE as HorizontalCode } from '@/examples/button-group/horizontal/page';
import { CODE as BUTTON_GROUP_CODE } from '@/examples/button-group/page';
import { CODE as VariantsCode } from '@/examples/button-group/variants/page';
import { CODE as VerticalCode } from '@/examples/button-group/vertical/page';

export default function ButtonGroupPage() {
  const buttonGroupIframeRef = useRef<HTMLIFrameElement>(null);
  const horizontalIframeRef = useRef<HTMLIFrameElement>(null);
  const verticalIframeRef = useRef<HTMLIFrameElement>(null);
  const variantsIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes();

  return (
    <DocsLayout>
      <PageHeader
        title="ButtonGroup"
        description="Groups related buttons and controls together with proper spacing and focus management"
      />

      <PageContent>
        <PageSection title="About ButtonGroup">
          <p className="block">
            ButtonGroup organizes related buttons into groups with horizontal and vertical
            orientations, separators, and text labels.
          </p>
        </PageSection>

        <PageSection title="Installation">
          <p>Import the ButtonGroup components from LSD:</p>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import {
  Button,
  ButtonGroup,
} from '@nipsys/shadcn-lsd'

export default function MyComponent() {
  return (
    <ButtonGroup>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>
  )
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Orientation">
          <p>
            ButtonGroup supports horizontal and vertical orientations for different layout needs.
          </p>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Horizontal Orientation</CardTitle>
              <CardDescription>Buttons arranged in a row (default)</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={horizontalIframeRef}
                size="md"
                src="/examples/button-group/horizontal"
                title="Horizontal Orientation"
              />
              <CodeExample code={HorizontalCode} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Vertical Orientation</CardTitle>
              <CardDescription>Buttons arranged in a column</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={verticalIframeRef}
                size="md"
                src="/examples/button-group/vertical"
                title="Vertical Orientation"
              />
              <CodeExample code={VerticalCode} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <p>
            Advanced features including separators, text labels, and integration with other
            components.
          </p>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Button Group Example</CardTitle>
              <CardDescription>Different button group configurations</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={buttonGroupIframeRef}
                size="md"
                src="/examples/button-group"
                title="Button Group Example"
              />
              <CodeExample code={BUTTON_GROUP_CODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>With Different Button Variants</CardTitle>
              <CardDescription>Mix different button variants within the same group</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={variantsIframeRef}
                size="md"
                src="/examples/button-group/variants"
                title="Variants Example"
              />
              <CodeExample code={VariantsCode} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <p>All available props for the ButtonGroup components.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>orientation</CardTitle>
                <CardDescription>Orientation of the button group</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> 'horizontal' | 'vertical'
                </p>
                <p className="mb-(--lsd-spacing-smaller)">
                  <strong>Default:</strong> 'horizontal'
                </p>
                <p className="mt-(--lsd-spacing-smaller)">
                  Controls whether buttons are arranged in a row or column
                </p>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageNavigation
          previous={{
            title: 'Button',
            href: '/components/button',
          }}
          next={{
            title: 'Calendar',
            href: '/components/calendar',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
