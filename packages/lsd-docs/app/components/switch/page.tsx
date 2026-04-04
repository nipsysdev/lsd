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
import { CODE as SwitchBasicCODE } from '@/examples/switch/basic/page';
import { CODE as SwitchControlledCODE } from '@/examples/switch/controlled/page';
import { CODE as SwitchSizesCODE } from '@/examples/switch/sizes/page';

export default function SwitchPage() {
  const switchBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const switchControlledIframeRef = useRef<HTMLIFrameElement>(null);
  const switchSizesIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes();

  return (
    <DocsLayout>
      <PageHeader
        title="Switch"
        description="Toggle switch component for binary on/off states with accessible keyboard support"
      />

      <PageContent>
        <PageSection title="About Switch">
          <p className="block">
            Switch is a component that controls a single setting or binary choice with two mutually
            exclusive states (on/off). It provides excellent accessibility with keyboard navigation
            and proper ARIA attributes.
          </p>
        </PageSection>

        <PageSection title="Installation">
          <p>Import the Switch component from LSD:</p>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Switch } from '@nipsys/shadcn-lsd';

export default function MyComponent() {
  return <Switch />
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Sizes">
          <p>Switches come in three sizes to fit different contexts and layouts.</p>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>All Sizes</CardTitle>
              <CardDescription>Small, medium, and large switch variants</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={switchSizesIframeRef}
                size="md"
                src="/examples/switch/sizes"
                title="Switch Sizes"
              />
              <CodeExample code={SwitchSizesCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Basic Usage">
          <p>
            Uncontrolled switches with default states, disabled option, and controlled variants.
          </p>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Basic Examples</CardTitle>
              <CardDescription>
                Uncontrolled switches with default states and disabled options
              </CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={switchBasicIframeRef}
                size="md"
                src="/examples/switch/basic"
                title="Switch Basic Example"
              />
              <CodeExample code={SwitchBasicCODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Controlled Component</CardTitle>
              <CardDescription>Switch with controlled state using React state</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={switchControlledIframeRef}
                size="md"
                src="/examples/switch/controlled"
                title="Switch Controlled Example"
              />
              <CodeExample code={SwitchControlledCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <p>All available props for the Switch component.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>checked</CardTitle>
                <CardDescription>Checked state of the switch</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="block mb-2">
                  <strong>Type:</strong> boolean
                </p>
                <p className="block">
                  <strong>Default:</strong> undefined
                </p>
                <p className="mt-2">Controlled value</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>defaultChecked</CardTitle>
                <CardDescription>Initial checked state</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="block mb-2">
                  <strong>Type:</strong> boolean
                </p>
                <p className="block">
                  <strong>Default:</strong> false
                </p>
                <p className="mt-2">Uncontrolled value</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>onCheckedChange</CardTitle>
                <CardDescription>Callback when checked state changes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="block mb-2">
                  <strong>Type:</strong> (checked: boolean) =&gt; void
                </p>
                <p className="block">
                  <strong>Default:</strong> undefined
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>disabled</CardTitle>
                <CardDescription>Whether the switch is disabled</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="block mb-2">
                  <strong>Type:</strong> boolean
                </p>
                <p className="block">
                  <strong>Default:</strong> false
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>required</CardTitle>
                <CardDescription>Whether the switch is required</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="block mb-2">
                  <strong>Type:</strong> boolean
                </p>
                <p className="block">
                  <strong>Default:</strong> false
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>size</CardTitle>
                <CardDescription>Size of the switch</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="block mb-2">
                  <strong>Type:</strong> 'sm' | 'md' | 'lg'
                </p>
                <p className="block">
                  <strong>Default:</strong> 'md'
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>name</CardTitle>
                <CardDescription>Name attribute for form submission</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="block mb-2">
                  <strong>Type:</strong> string
                </p>
                <p className="block">
                  <strong>Default:</strong> undefined
                </p>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <p>The Switch component follows accessibility best practices built on Radix UI.</p>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Switches are fully keyboard accessible</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="block mb-2">
                • <strong>Tab</strong> - Navigate to the switch
              </p>
              <p className="block mb-2">
                • <strong>Shift + Tab</strong> - Navigate to previous focusable element
              </p>
              <p className="block mb-2">
                • <strong>Space</strong> - Toggle the switch state
              </p>
              <p className="block">
                • <strong>Enter</strong> - Toggle the switch state
              </p>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>ARIA Attributes</CardTitle>
              <CardDescription>Proper ARIA attributes for screen readers</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="block mb-2">
                • <code>aria-checked</code> is automatically set based on the switch state
              </p>
              <p className="block mb-2">
                • <code>aria-disabled</code> is set when the switch is disabled
              </p>
              <p className="block">
                • <code>role="switch"</code> is automatically applied
              </p>
            </CardContent>
          </Card>
        </PageSection>

        <PageNavigation
          previous={{
            title: 'Select',
            href: '/components/select',
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
