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
import {
  CODE as RadioGroupBasicCODE,
  SIZE as RadioGroupBasicSIZE,
} from '@/examples/radio-group/basic/page';
import {
  CODE as RadioGroupDisabledCODE,
  SIZE as RadioGroupDisabledSIZE,
} from '@/examples/radio-group/disabled/page';

export default function RadioGroupPage() {
  const RadioGroupBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const RadioGroupDisabledIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(RadioGroupBasicIframeRef, RadioGroupDisabledIframeRef);

  return (
    <DocsLayout>
      <PageHeader
        title="Radio-group"
        description="Set of checkable buttons where only one can be checked at a time."
      />

      <PageContent>
        <PageSection title="About RadioGroup">
          <Typography variant="body1" className="block">
            A set of checkable buttons—radio buttons—where only one option can be selected at a
            time. Includes RadioGroupItem for individual radio buttons with built-in styling and
            focus indicators. The component adheres to the WAI-ARIA Radio Group design pattern and
            uses roving tabindex to manage focus movement among items.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the RadioGroup component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { RadioGroup } from '@nipsys/lsd'

export default function MyComponent() {
  return <RadioGroup />
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
                ref={RadioGroupBasicIframeRef}
                size={RadioGroupBasicSIZE}
                src="/examples/radio-group/basic"
                title="Basic Example"
              />
              <CodeExample code={RadioGroupBasicCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features and capabilities of the component.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Disabled</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={RadioGroupDisabledIframeRef}
                size={RadioGroupDisabledSIZE}
                src="/examples/radio-group/disabled"
                title="Disabled Example"
              />
              <CodeExample code={RadioGroupDisabledCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Composition">
          <Card className="mt-(--lsd-spacing-base)">
            <CardContent className="pt-(--lsd-spacing-base)">
              <CodeBlock>{['RadioGroup', '└── RadioGroupItem']}</CodeBlock>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <div className="flex flex-col gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>Radix UI Documentation</CardTitle>
                <CardDescription>RadioGroup wraps Radix UI primitives</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://www.radix-ui.com/primitives/docs/components/radio-group"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View Radix UI RadioGroup documentation →
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
                • Tab - Moves focus to the checked radio item or first radio item in the group
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Space - Checks the currently focused RadioGroupItem
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • ArrowDown/ArrowUp - Moves focus and checks next/previous RadioGroupItem
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • ArrowRight/ArrowLeft - Moves focus and checks next/previous RadioGroupItem
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
                • role="radiogroup" is set on RadioGroup
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • role="radio" is set on each RadioGroupItem
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-checked indicates checked/unchecked state
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-disabled indicates disabled state
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Uses roving tabindex for focus management
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
                • Focus moves to the checked radio item or the first radio item when navigating to
                the group. Arrow keys navigate between items, moving focus and checking the target
                item. The component uses roving tabindex to ensure only one radio item is in the tab
                sequence at a time.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
        <PageNavigation
          previous={{
            title: 'Form',
            href: '/components/form',
          }}
          next={{
            title: 'Slider',
            href: '/components/slider',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
