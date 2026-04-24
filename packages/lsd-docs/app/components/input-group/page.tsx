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
  CODE as InputGroupAlignmentCODE,
  SIZE as InputGroupAlignmentSIZE,
} from '@/examples/input-group/alignment/page';
import {
  CODE as InputGroupBasicCODE,
  SIZE as InputGroupBasicSIZE,
} from '@/examples/input-group/basic/page';
import {
  CODE as InputGroupDisabledCODE,
  SIZE as InputGroupDisabledSIZE,
} from '@/examples/input-group/disabled/page';
import {
  CODE as InputGroupSizesCODE,
  SIZE as InputGroupSizesSIZE,
} from '@/examples/input-group/sizes/page';
import {
  CODE as InputGroupWithIconsCODE,
  SIZE as InputGroupWithIconsSIZE,
} from '@/examples/input-group/with-icons/page';

export default function InputGroupPage() {
  const InputGroupAlignmentIframeRef = useRef<HTMLIFrameElement>(null);
  const InputGroupBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const InputGroupDisabledIframeRef = useRef<HTMLIFrameElement>(null);
  const InputGroupSizesIframeRef = useRef<HTMLIFrameElement>(null);
  const InputGroupWithIconsIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    InputGroupAlignmentIframeRef,
    InputGroupBasicIframeRef,
    InputGroupDisabledIframeRef,
    InputGroupSizesIframeRef,
    InputGroupWithIconsIframeRef
  );

  return (
    <DocsLayout>
      <PageHeader
        title="Input-group"
        description="Groups inputs with buttons and text addons for composed form controls."
      />

      <PageContent>
        <PageSection title="About InputGroup">
          <Typography variant="body1" className="block">
            Combines input fields with buttons or text elements into a single visual group. Provides
            size context to children and handles focus states and error styling across the group.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the InputGroup component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { InputGroup } from '@nipsys/lsd'

export default function MyComponent() {
  return <InputGroup />
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
                ref={InputGroupBasicIframeRef}
                size={InputGroupBasicSIZE}
                src="/examples/input-group/basic"
                title="Basic Example"
              />
              <CodeExample code={InputGroupBasicCODE} />
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
                ref={InputGroupSizesIframeRef}
                size={InputGroupSizesSIZE}
                src="/examples/input-group/sizes"
                title="Sizes Example"
              />
              <CodeExample code={InputGroupSizesCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features and capabilities of the component.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Alignment</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={InputGroupAlignmentIframeRef}
                size={InputGroupAlignmentSIZE}
                src="/examples/input-group/alignment"
                title="Alignment Example"
              />
              <CodeExample code={InputGroupAlignmentCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Disabled</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={InputGroupDisabledIframeRef}
                size={InputGroupDisabledSIZE}
                src="/examples/input-group/disabled"
                title="Disabled Example"
              />
              <CodeExample code={InputGroupDisabledCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>With Icons</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={InputGroupWithIconsIframeRef}
                size={InputGroupWithIconsSIZE}
                src="/examples/input-group/with-icons"
                title="With Icons Example"
              />
              <CodeExample code={InputGroupWithIconsCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Composition">
          <Card className="mt-(--lsd-spacing-base)">
            <CardContent className="pt-(--lsd-spacing-base)">
              <CodeBlock>
                {[
                  'InputGroup',
                  '├── InputGroupInput',
                  '├── InputGroupAddon',
                  '├── InputGroupButton',
                  '└── InputGroupText',
                ]}
              </CodeBlock>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <div className="mt-(--lsd-spacing-large)">
            <Typography variant="h4" className="mb-(--lsd-spacing-base)">
              InputGroup
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base)">
              <Card>
                <CardHeader>
                  <CardTitle>size</CardTitle>
                  <CardDescription>Size variant for the input group.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>InputGroupSize</code>
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

          <div className="mt-(--lsd-spacing-large)">
            <Typography variant="h4" className="mb-(--lsd-spacing-base)">
              InputGroupAddon
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base)">
              <Card>
                <CardHeader>
                  <CardTitle>align</CardTitle>
                  <CardDescription>Alignment of the addon element.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>InputGroupAddonAlign</code>
                  </Typography>
                  <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Options:</strong> inline-start, inline-end
                  </Typography>
                  <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Default:</strong> 'inline-start'
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-(--lsd-spacing-large)">
            <Typography variant="h4" className="mb-(--lsd-spacing-base)">
              InputGroupButton
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base)">
              <Card>
                <CardHeader>
                  <CardTitle>variant</CardTitle>
                  <CardDescription>Visual style variant for button.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>InputGroupButtonVariant</code>
                  </Typography>
                  <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Options:</strong> text, icon
                  </Typography>
                  <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Default:</strong> 'text'
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>size</CardTitle>
                  <CardDescription>Size variant for button.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>InputGroupButtonSize</code>
                  </Typography>
                  <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Options:</strong> sm, md, lg
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>type</CardTitle>
                  <CardDescription>Button type attribute.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>"button" | "submit" | "reset"</code>
                  </Typography>
                  <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Options:</strong> button, submit, reset
                  </Typography>
                  <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Default:</strong> 'button'
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
                • Tab - Navigate through group items sequentially
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Enter - Activate focused button within group
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
                • role="group" identifies the component as a grouping
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-invalid indicates group error state
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
                • Focus is managed across elements within the group. Visual focus indicators appear
                on the active element. Group borders change color on focus of any child element.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
        <PageNavigation
          previous={{
            title: 'Input',
            href: '/components/input',
          }}
          next={{
            title: 'Label',
            href: '/components/label',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
