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
import { CODE as SwitchBasicCODE, SIZE as SwitchBasicSIZE } from '@/examples/switch/basic/page';
import {
  CODE as SwitchControlledCODE,
  SIZE as SwitchControlledSIZE,
} from '@/examples/switch/controlled/page';
import { CODE as SwitchSizesCODE, SIZE as SwitchSizesSIZE } from '@/examples/switch/sizes/page';

export default function SwitchPage() {
  const SwitchBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const SwitchControlledIframeRef = useRef<HTMLIFrameElement>(null);
  const SwitchSizesIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(SwitchBasicIframeRef, SwitchControlledIframeRef, SwitchSizesIframeRef);

  return (
    <DocsLayout>
      <PageHeader
        title="Switch"
        description="Toggle control for binary states with size variants."
      />

      <PageContent>
        <PageSection title="About Switch">
          <Typography variant="body1" className="block">
            A control that allows the user to toggle between checked and not checked states.
            Supports controlled and uncontrolled modes with size variants (sm, md, lg). Includes
            proper accessibility attributes and keyboard navigation.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Switch component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Switch } from '@nipsys/lsd'

export default function MyComponent() {
  return <Switch />
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
                ref={SwitchBasicIframeRef}
                size={SwitchBasicSIZE}
                src="/examples/switch/basic"
                title="Basic Example"
              />
              <CodeExample code={SwitchBasicCODE} />
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
                ref={SwitchSizesIframeRef}
                size={SwitchSizesSIZE}
                src="/examples/switch/sizes"
                title="Sizes Example"
              />
              <CodeExample code={SwitchSizesCODE} />
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
                ref={SwitchControlledIframeRef}
                size={SwitchControlledSIZE}
                src="/examples/switch/controlled"
                title="Controlled Example"
              />
              <CodeExample code={SwitchControlledCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <div className="mt-(--lsd-spacing-large)">
            <Typography variant="h4" className="mb-(--lsd-spacing-base)">
              Switch
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base)">
              <Card>
                <CardHeader>
                  <CardTitle>size</CardTitle>
                  <CardDescription>
                    The size of the switch. Controls the visual size of the switch component.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>"sm" | "md" | "lg"</code>
                  </Typography>
                  <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Options:</strong> sm, md, lg
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
                • Space - Toggles the switch state
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Enter - Toggles the switch state
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
                • role="switch" is set on the root element
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-checked indicates the current state (checked/unchecked)
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-disabled is present when disabled
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-readonly is present when the switch is read-only
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-required indicates if the switch is required
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-invalid is present when the switch has an error
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
                • Component is focusable and receives focus when tabbed to. Focus visible state is
                shown with a ring indicator.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
        <PageNavigation
          previous={{
            title: 'Select',
            href: '/components/select',
          }}
          next={{
            title: 'Textarea',
            href: '/components/textarea',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
