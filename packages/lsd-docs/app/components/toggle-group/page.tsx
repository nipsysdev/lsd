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
  CODE as ToggleGroupBasicCODE,
  SIZE as ToggleGroupBasicSIZE,
} from '@/examples/toggle-group/basic/page';
import {
  CODE as ToggleGroupMultipleCODE,
  SIZE as ToggleGroupMultipleSIZE,
} from '@/examples/toggle-group/multiple/page';
import {
  CODE as ToggleGroupSingleCODE,
  SIZE as ToggleGroupSingleSIZE,
} from '@/examples/toggle-group/single/page';
import {
  CODE as ToggleGroupSizesCODE,
  SIZE as ToggleGroupSizesSIZE,
} from '@/examples/toggle-group/sizes/page';

export default function ToggleGroupPage() {
  const ToggleGroupBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const ToggleGroupMultipleIframeRef = useRef<HTMLIFrameElement>(null);
  const ToggleGroupSingleIframeRef = useRef<HTMLIFrameElement>(null);
  const ToggleGroupSizesIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    ToggleGroupBasicIframeRef,
    ToggleGroupMultipleIframeRef,
    ToggleGroupSingleIframeRef,
    ToggleGroupSizesIframeRef
  );

  return (
    <DocsLayout>
      <PageHeader
        title="Toggle-group"
        description="Groups togglable buttons together for single or multiple selection"
      />

      <PageContent>
        <PageSection title="About ToggleGroup">
          <Typography variant="body1" className="block">
            Groups togglable buttons in a visually connected way. Supports single selection (radio
            behavior) or multiple selection (checkbox behavior).
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the ToggleGroup component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { ToggleGroup } from '@nipsys/lsd'

export default function MyComponent() {
  return <ToggleGroup />
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
                ref={ToggleGroupBasicIframeRef}
                size={ToggleGroupBasicSIZE}
                src="/examples/toggle-group/basic"
                title="Basic Example"
              />
              <CodeExample code={ToggleGroupBasicCODE} />
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
                ref={ToggleGroupSizesIframeRef}
                size={ToggleGroupSizesSIZE}
                src="/examples/toggle-group/sizes"
                title="Sizes Example"
              />
              <CodeExample code={ToggleGroupSizesCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features and capabilities of the component.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Multiple</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={ToggleGroupMultipleIframeRef}
                size={ToggleGroupMultipleSIZE}
                src="/examples/toggle-group/multiple"
                title="Multiple Example"
              />
              <CodeExample code={ToggleGroupMultipleCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Single</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={ToggleGroupSingleIframeRef}
                size={ToggleGroupSingleSIZE}
                src="/examples/toggle-group/single"
                title="Single Example"
              />
              <CodeExample code={ToggleGroupSingleCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Composition">
          <Card className="mt-(--lsd-spacing-base)">
            <CardContent className="pt-(--lsd-spacing-base)">
              <CodeBlock>{['ToggleGroup', '└── ToggleGroupItem']}</CodeBlock>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <div className="mt-(--lsd-spacing-large)">
            <Typography variant="h4" className="mb-(--lsd-spacing-base)">
              ToggleGroup
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base)">
              <Card>
                <CardHeader>
                  <CardTitle>groupLabel</CardTitle>
                  <CardDescription>Accessible label for the toggle group.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>string</code>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>size</CardTitle>
                  <CardDescription>Size of the toggle items in the group.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>"sm" | "md"</code>
                  </Typography>
                  <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Options:</strong> sm, md
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
                • Tab - Moves focus to pressed item or first item in group
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Enter or Space - Activates/deactivates focused item
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • ArrowDown/Right - Moves focus to next item
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • ArrowUp/Left - Moves focus to previous item
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Home - Moves focus to first item in group
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • End - Moves focus to last item in group
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
                • groupLabel prop provides required aria-label for screen readers
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • role="group" on the ToggleGroup container
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-pressed on items is automatically managed
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
                • Uses roving tabindex to manage focus movement among items. Focused item receives
                visible focus indicator.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
        <PageNavigation
          previous={{
            title: 'Toggle',
            href: '/components/toggle',
          }}
          next={{
            title: 'Alert-dialog',
            href: '/components/alert-dialog',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
