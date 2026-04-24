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
  CODE as ButtonGroupFilledButtonsCODE,
  SIZE as ButtonGroupFilledButtonsSIZE,
} from '@/examples/button-group/filled-buttons/page';
import {
  CODE as ButtonGroupHorizontalCODE,
  SIZE as ButtonGroupHorizontalSIZE,
} from '@/examples/button-group/horizontal/page';
import {
  CODE as ButtonGroupOutlinedButtonsCODE,
  SIZE as ButtonGroupOutlinedButtonsSIZE,
} from '@/examples/button-group/outlined-buttons/page';
import {
  CODE as ButtonGroupVerticalCODE,
  SIZE as ButtonGroupVerticalSIZE,
} from '@/examples/button-group/vertical/page';

export default function ButtonGroupPage() {
  const ButtonGroupFilledButtonsIframeRef = useRef<HTMLIFrameElement>(null);
  const ButtonGroupHorizontalIframeRef = useRef<HTMLIFrameElement>(null);
  const ButtonGroupOutlinedButtonsIframeRef = useRef<HTMLIFrameElement>(null);
  const ButtonGroupVerticalIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    ButtonGroupFilledButtonsIframeRef,
    ButtonGroupHorizontalIframeRef,
    ButtonGroupOutlinedButtonsIframeRef,
    ButtonGroupVerticalIframeRef
  );

  return (
    <DocsLayout>
      <PageHeader
        title="Button-group"
        description="Groups related buttons with connected borders and consistent spacing."
      />

      <PageContent>
        <PageSection title="About ButtonGroup">
          <Typography variant="body1" className="block">
            Container for visually grouping related buttons with connected borders and consistent
            spacing. Supports horizontal and vertical orientation layouts.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the ButtonGroup component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { ButtonGroup } from '@nipsys/lsd'

export default function MyComponent() {
  return <ButtonGroup />
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
              <CardTitle>Horizontal</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={ButtonGroupHorizontalIframeRef}
                size={ButtonGroupHorizontalSIZE}
                src="/examples/button-group/horizontal"
                title="Horizontal Example"
              />
              <CodeExample code={ButtonGroupHorizontalCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Variants">
          <Typography variant="body1">
            Component variants for different visual styles and use cases.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Filled Buttons</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={ButtonGroupFilledButtonsIframeRef}
                size={ButtonGroupFilledButtonsSIZE}
                src="/examples/button-group/filled-buttons"
                title="Filled Buttons Example"
              />
              <CodeExample code={ButtonGroupFilledButtonsCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Outlined Buttons</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={ButtonGroupOutlinedButtonsIframeRef}
                size={ButtonGroupOutlinedButtonsSIZE}
                src="/examples/button-group/outlined-buttons"
                title="Outlined Buttons Example"
              />
              <CodeExample code={ButtonGroupOutlinedButtonsCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features and capabilities of the component.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Vertical</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={ButtonGroupVerticalIframeRef}
                size={ButtonGroupVerticalSIZE}
                src="/examples/button-group/vertical"
                title="Vertical Example"
              />
              <CodeExample code={ButtonGroupVerticalCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Composition">
          <Card className="mt-(--lsd-spacing-base)">
            <CardContent className="pt-(--lsd-spacing-base)">
              <CodeBlock>
                {['ButtonGroup', '├── ButtonGroupText', '└── ButtonGroupSeparator']}
              </CodeBlock>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <div className="mt-(--lsd-spacing-large)">
            <Typography variant="h4" className="mb-(--lsd-spacing-base)">
              ButtonGroup
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base)">
              <Card>
                <CardHeader>
                  <CardTitle>orientation</CardTitle>
                  <CardDescription>
                    Arrangement direction of buttons within the group.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>"horizontal" | "vertical"</code>
                  </Typography>
                  <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Options:</strong> horizontal, vertical
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>groupLabel</CardTitle>
                  <CardDescription>
                    Accessible label for screen readers identifying the button group's purpose.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>string</code>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-(--lsd-spacing-large)">
            <Typography variant="h4" className="mb-(--lsd-spacing-base)">
              ButtonGroupText
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base)">
              <Card>
                <CardHeader>
                  <CardTitle>asChild</CardTitle>
                  <CardDescription>
                    Merges attributes with child element instead of rendering as container.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>boolean</code>
                  </Typography>
                  <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Default:</strong> false
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
                • Tab - Navigate through buttons in the group
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Arrow keys - Navigate through buttons when arranged
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
                • Uses &lt;fieldset&gt; element with &lt;legend&gt; for semantic grouping
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • groupLabel prop provides required accessible name for screen readers
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
                • Focus moves through buttons sequentially. Focused button receives visible focus
                indicator.
              </Typography>
            </CardContent>
          </Card>
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
