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
  CODE as ButtonAsChildCODE,
  SIZE as ButtonAsChildSIZE,
} from '@/examples/button/as-child/page';
import { CODE as ButtonBasicCODE, SIZE as ButtonBasicSIZE } from '@/examples/button/basic/page';
import {
  CODE as ButtonDestructiveCODE,
  SIZE as ButtonDestructiveSIZE,
} from '@/examples/button/destructive/page';
import {
  CODE as ButtonDestructiveRoundedCODE,
  SIZE as ButtonDestructiveRoundedSIZE,
} from '@/examples/button/destructive-rounded/page';
import {
  CODE as ButtonDisabledCODE,
  SIZE as ButtonDisabledSIZE,
} from '@/examples/button/disabled/page';
import { CODE as ButtonFilledCODE, SIZE as ButtonFilledSIZE } from '@/examples/button/filled/page';
import {
  CODE as ButtonFilledRoundedCODE,
  SIZE as ButtonFilledRoundedSIZE,
} from '@/examples/button/filled-rounded/page';
import {
  CODE as ButtonFullWidthCODE,
  SIZE as ButtonFullWidthSIZE,
} from '@/examples/button/full-width/page';
import { CODE as ButtonGhostCODE, SIZE as ButtonGhostSIZE } from '@/examples/button/ghost/page';
import {
  CODE as ButtonGhostRoundedCODE,
  SIZE as ButtonGhostRoundedSIZE,
} from '@/examples/button/ghost-rounded/page';
import { CODE as ButtonIconsCODE, SIZE as ButtonIconsSIZE } from '@/examples/button/icons/page';
import { CODE as ButtonLinkCODE, SIZE as ButtonLinkSIZE } from '@/examples/button/link/page';
import {
  CODE as ButtonLoadingCODE,
  SIZE as ButtonLoadingSIZE,
} from '@/examples/button/loading/page';
import {
  CODE as ButtonOutlinedCODE,
  SIZE as ButtonOutlinedSIZE,
} from '@/examples/button/outlined/page';
import {
  CODE as ButtonOutlinedRoundedCODE,
  SIZE as ButtonOutlinedRoundedSIZE,
} from '@/examples/button/outlined-rounded/page';
import { CODE as ButtonSizesCODE, SIZE as ButtonSizesSIZE } from '@/examples/button/sizes/page';
import {
  CODE as ButtonSuccessCODE,
  SIZE as ButtonSuccessSIZE,
} from '@/examples/button/success/page';
import {
  CODE as ButtonSuccessRoundedCODE,
  SIZE as ButtonSuccessRoundedSIZE,
} from '@/examples/button/success-rounded/page';

export default function ButtonPage() {
  const ButtonAsChildIframeRef = useRef<HTMLIFrameElement>(null);
  const ButtonBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const ButtonDestructiveIframeRef = useRef<HTMLIFrameElement>(null);
  const ButtonDestructiveRoundedIframeRef = useRef<HTMLIFrameElement>(null);
  const ButtonDisabledIframeRef = useRef<HTMLIFrameElement>(null);
  const ButtonFilledIframeRef = useRef<HTMLIFrameElement>(null);
  const ButtonFilledRoundedIframeRef = useRef<HTMLIFrameElement>(null);
  const ButtonFullWidthIframeRef = useRef<HTMLIFrameElement>(null);
  const ButtonGhostIframeRef = useRef<HTMLIFrameElement>(null);
  const ButtonGhostRoundedIframeRef = useRef<HTMLIFrameElement>(null);
  const ButtonIconsIframeRef = useRef<HTMLIFrameElement>(null);
  const ButtonLinkIframeRef = useRef<HTMLIFrameElement>(null);
  const ButtonLoadingIframeRef = useRef<HTMLIFrameElement>(null);
  const ButtonOutlinedIframeRef = useRef<HTMLIFrameElement>(null);
  const ButtonOutlinedRoundedIframeRef = useRef<HTMLIFrameElement>(null);
  const ButtonSizesIframeRef = useRef<HTMLIFrameElement>(null);
  const ButtonSuccessIframeRef = useRef<HTMLIFrameElement>(null);
  const ButtonSuccessRoundedIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    ButtonAsChildIframeRef,
    ButtonBasicIframeRef,
    ButtonDestructiveIframeRef,
    ButtonDestructiveRoundedIframeRef,
    ButtonDisabledIframeRef,
    ButtonFilledIframeRef,
    ButtonFilledRoundedIframeRef,
    ButtonFullWidthIframeRef,
    ButtonGhostIframeRef,
    ButtonGhostRoundedIframeRef,
    ButtonIconsIframeRef,
    ButtonLinkIframeRef,
    ButtonLoadingIframeRef,
    ButtonOutlinedIframeRef,
    ButtonOutlinedRoundedIframeRef,
    ButtonSizesIframeRef,
    ButtonSuccessIframeRef,
    ButtonSuccessRoundedIframeRef
  );

  return (
    <DocsLayout>
      <PageHeader
        title="Button"
        description="Clickable element with customizable styles and features."
      />

      <PageContent>
        <PageSection title="About Button">
          <Typography variant="body1" className="block">
            Interactive button component with multiple visual variants including filled, outlined,
            and rounded styles. Supports loading states, disabled states, and flexible composition
            using Radix Slot.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Button component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Button } from '@nipsys/lsd'

export default function MyComponent() {
  return <Button />
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
                ref={ButtonBasicIframeRef}
                size={ButtonBasicSIZE}
                src="/examples/button/basic"
                title="Basic Example"
              />
              <CodeExample code={ButtonBasicCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Variants">
          <Typography variant="body1">
            Component variants for different visual styles and use cases.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Destructive</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={ButtonDestructiveIframeRef}
                size={ButtonDestructiveSIZE}
                src="/examples/button/destructive"
                title="Destructive Example"
              />
              <CodeExample code={ButtonDestructiveCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Destructive Rounded</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={ButtonDestructiveRoundedIframeRef}
                size={ButtonDestructiveRoundedSIZE}
                src="/examples/button/destructive-rounded"
                title="Destructive Rounded Example"
              />
              <CodeExample code={ButtonDestructiveRoundedCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Filled</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={ButtonFilledIframeRef}
                size={ButtonFilledSIZE}
                src="/examples/button/filled"
                title="Filled Example"
              />
              <CodeExample code={ButtonFilledCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Filled Rounded</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={ButtonFilledRoundedIframeRef}
                size={ButtonFilledRoundedSIZE}
                src="/examples/button/filled-rounded"
                title="Filled Rounded Example"
              />
              <CodeExample code={ButtonFilledRoundedCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Ghost</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={ButtonGhostIframeRef}
                size={ButtonGhostSIZE}
                src="/examples/button/ghost"
                title="Ghost Example"
              />
              <CodeExample code={ButtonGhostCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Ghost Rounded</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={ButtonGhostRoundedIframeRef}
                size={ButtonGhostRoundedSIZE}
                src="/examples/button/ghost-rounded"
                title="Ghost Rounded Example"
              />
              <CodeExample code={ButtonGhostRoundedCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Link</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={ButtonLinkIframeRef}
                size={ButtonLinkSIZE}
                src="/examples/button/link"
                title="Link Example"
              />
              <CodeExample code={ButtonLinkCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Outlined</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={ButtonOutlinedIframeRef}
                size={ButtonOutlinedSIZE}
                src="/examples/button/outlined"
                title="Outlined Example"
              />
              <CodeExample code={ButtonOutlinedCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Outlined Rounded</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={ButtonOutlinedRoundedIframeRef}
                size={ButtonOutlinedRoundedSIZE}
                src="/examples/button/outlined-rounded"
                title="Outlined Rounded Example"
              />
              <CodeExample code={ButtonOutlinedRoundedCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Success</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={ButtonSuccessIframeRef}
                size={ButtonSuccessSIZE}
                src="/examples/button/success"
                title="Success Example"
              />
              <CodeExample code={ButtonSuccessCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Success Rounded</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={ButtonSuccessRoundedIframeRef}
                size={ButtonSuccessRoundedSIZE}
                src="/examples/button/success-rounded"
                title="Success Rounded Example"
              />
              <CodeExample code={ButtonSuccessRoundedCODE} />
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
                ref={ButtonSizesIframeRef}
                size={ButtonSizesSIZE}
                src="/examples/button/sizes"
                title="Sizes Example"
              />
              <CodeExample code={ButtonSizesCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features and capabilities of the component.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>As Child</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={ButtonAsChildIframeRef}
                size={ButtonAsChildSIZE}
                src="/examples/button/as-child"
                title="As Child Example"
              />
              <CodeExample code={ButtonAsChildCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Disabled</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={ButtonDisabledIframeRef}
                size={ButtonDisabledSIZE}
                src="/examples/button/disabled"
                title="Disabled Example"
              />
              <CodeExample code={ButtonDisabledCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Full Width</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={ButtonFullWidthIframeRef}
                size={ButtonFullWidthSIZE}
                src="/examples/button/full-width"
                title="Full Width Example"
              />
              <CodeExample code={ButtonFullWidthCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Icons</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={ButtonIconsIframeRef}
                size={ButtonIconsSIZE}
                src="/examples/button/icons"
                title="Icons Example"
              />
              <CodeExample code={ButtonIconsCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Loading</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={ButtonLoadingIframeRef}
                size={ButtonLoadingSIZE}
                src="/examples/button/loading"
                title="Loading Example"
              />
              <CodeExample code={ButtonLoadingCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <div className="mt-(--lsd-spacing-large)">
            <Typography variant="h4" className="mb-(--lsd-spacing-base)">
              Button
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base)">
              <Card>
                <CardHeader>
                  <CardTitle>variant</CardTitle>
                  <CardDescription>
                    Visual style including background, border, and corner radius.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong>{' '}
                    <code>
                      "filled" | "outlined" | "filled-rounded" | "outlined-rounded" | "link" |
                      "ghost" | "ghost-rounded" | "destructive" | "destructive-rounded" | "success"
                      | "success-rounded"
                    </code>
                  </Typography>
                  <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Options:</strong> filled, outlined, filled-rounded, outlined-rounded,
                    link, ghost, ghost-rounded, destructive, destructive-rounded, success,
                    success-rounded
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>size</CardTitle>
                  <CardDescription>Dimensions including height and padding.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong>{' '}
                    <code>"sm" | "md" | "lg" | "square-sm" | "square-md" | "square-lg"</code>
                  </Typography>
                  <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Options:</strong> sm, md, lg, square-sm, square-md, square-lg
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>asChild</CardTitle>
                  <CardDescription>
                    Merges props onto immediate child for composition.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>boolean</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>loading</CardTitle>
                  <CardDescription>
                    Shows spinner and disables during async operations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>boolean</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>fullWidth</CardTitle>
                  <CardDescription>Expands to fill container width.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>boolean</code>
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
                • Tab - Navigate to the button
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Enter or Space - Activate the button
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Shift + Tab - Navigate to previous element
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
                • disabled attribute managed for non-interactive states
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-busy set to true during loading state
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Proper role preservation with asChild composition
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
                • Visible focus indicators follow the LSD design system. Focus is correctly managed
                when disabled or loading with proper focus restoration.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
        <PageNavigation
          previous={{
            title: 'Autocomplete',
            href: '/components/autocomplete',
          }}
          next={{
            title: 'Button-group',
            href: '/components/button-group',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
