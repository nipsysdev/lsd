'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Typography,
} from '@nipsys/shadcn-lsd';
import { useRef } from 'react';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { IframeExample } from '@/components/docs/IframeExample';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { useSendThemeToIframes } from '@/components/docs/useSendIframes';
import { CODE as InputGroupAlignmentCODE } from '@/examples/input-group/alignment/page';
import { CODE as InputGroupBasicCODE } from '@/examples/input-group/basic/page';
import { CODE as InputGroupDisabledCODE } from '@/examples/input-group/disabled/page';
import { CODE as InputGroupSizesCODE } from '@/examples/input-group/sizes/page';
import { CODE as InputGroupWithIconsCODE } from '@/examples/input-group/with-icons/page';

export default function InputGroupPage() {
  const inputGroupAlignmentIframeRef = useRef<HTMLIFrameElement>(null);
  const inputGroupSizesIframeRef = useRef<HTMLIFrameElement>(null);
  const inputGroupBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const inputGroupWithIconsIframeRef = useRef<HTMLIFrameElement>(null);
  const inputGroupDisabledIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    inputGroupAlignmentIframeRef,
    inputGroupSizesIframeRef,
    inputGroupBasicIframeRef,
    inputGroupWithIconsIframeRef,
    inputGroupDisabledIframeRef
  );
  return (
    <DocsLayout>
      <PageHeader
        title="InputGroup"
        description="A flexible component system for creating input groups with addons, buttons, and text elements"
      />

      <PageContent>
        <PageSection title="About InputGroup">
          <Typography variant="body1" className="block">
            InputGroup is a comprehensive component system that allows you to create sophisticated
            input layouts by combining inputs with addons, buttons, and text elements. It provides a
            flexible way to build forms with prefixes, suffixes, action buttons, and various input
            types while maintaining consistent spacing and alignment.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import all InputGroup components from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from '@nipsys/shadcn-lsd'

export default function MyComponent() {
  return (
    <InputGroup>
      <InputGroupAddon align="inline-start">
        <InputGroupText>$</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="0.00" />
    </InputGroup>
  );
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Variants">
          <Typography variant="body1">
            InputGroupAddon provides two alignment options for positioning addons relative to the
            input.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Alignment Options</CardTitle>
              <CardDescription>Two alignment options for addon positioning</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={inputGroupAlignmentIframeRef}
                size="sm"
                src="/examples/input-group/alignment"
                title="InputGroup Alignment Example"
              />
              <CodeExample code={InputGroupAlignmentCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Sizes">
          <Typography variant="body1">
            InputGroup supports three size variants that automatically scale all child components
            including inputs, buttons, and text. The size is controlled at the InputGroup level and
            inherited by all children.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>InputGroup Sizes</CardTitle>
              <CardDescription>Three size variants for the entire InputGroup</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={inputGroupSizesIframeRef}
                size="md"
                src="/examples/input-group/sizes"
                title="InputGroup Sizes Example"
              />
              <CodeExample code={InputGroupSizesCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional capabilities including basic usage patterns, icon integration, and disabled
            states.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Basic Usage</CardTitle>
              <CardDescription>Fundamental InputGroup patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={inputGroupBasicIframeRef}
                size="sm"
                src="/examples/input-group/basic"
                title="InputGroup Basic Example"
              />
              <CodeExample code={InputGroupBasicCODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>With Icons</CardTitle>
              <CardDescription>Enhance inputs with Phosphor icons</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={inputGroupWithIconsIframeRef}
                size="lg"
                src="/examples/input-group/with-icons"
                title="InputGroup With Icons Example"
              />
              <CodeExample code={InputGroupWithIconsCODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Disabled States</CardTitle>
              <CardDescription>Disabled inputs and buttons with proper styling</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={inputGroupDisabledIframeRef}
                size="md"
                src="/examples/input-group/disabled"
                title="InputGroup Disabled Example"
              />
              <CodeExample code={InputGroupDisabledCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1">
            Complete prop documentation for all InputGroup components.
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>InputGroup</CardTitle>
                <CardDescription>Main container component</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> HTML div attributes
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>size:</strong> 'sm' | 'md' | 'lg'
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> 'md'
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Controls the size of the entire InputGroup and all child components. The size is
                  automatically inherited by InputGroupInput, InputGroupButton, InputGroupText, and
                  InputGroupAddon components.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>InputGroupAddon</CardTitle>
                <CardDescription>Container for addons and buttons</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> HTML div attributes
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>align:</strong> 'inline-start' | 'inline-end'
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> 'inline-start'
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Controls the positioning of the addon relative to the input. 'inline-start'
                  positions the addon before the input, 'inline-end' positions it after the input.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>InputGroupButton</CardTitle>
                <CardDescription>Button component for input groups</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> HTML button attributes
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>variant:</strong> 'text' | 'icon'
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>size:</strong> 'sm' | 'md' | 'lg'
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>type:</strong> 'button' | 'submit' | 'reset'
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> variant='text', size=inherited from InputGroup,
                  type='button'
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Button styled specifically for input groups. The 'text' variant renders as a ghost
                  button, while 'icon' variant renders as a ghost-rounded button with square sizing.
                  Size is inherited from the parent InputGroup but can be overridden.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>InputGroupInput</CardTitle>
                <CardDescription>Input field component</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> HTML input attributes (without size)
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Standard HTML input with size prop omitted to prevent conflicts. Supports all
                  standard input attributes like placeholder, disabled, type, etc.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>InputGroupText</CardTitle>
                <CardDescription>Text display component</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> HTML span attributes
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Span element styled for displaying text within input groups. Perfect for prefixes,
                  suffixes, and labels.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            InputGroup components follow accessibility best practices for screen readers and
            keyboard navigation.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>
                Full keyboard accessibility for all interactive elements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Tab</strong> - Navigate to the input or button
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Shift + Tab</strong> - Navigate to previous focusable element
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Enter</strong> - Submit form (when in a form)
              </Typography>
              <Typography variant="body2" className="block">
                • <strong>Space or Enter</strong> - Activate InputGroupButton
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
                • Use <code>aria-label</code> for buttons without visible text (icon buttons)
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Use <code>aria-describedby</code> to link inputs to supporting text
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Disabled elements automatically get <code>aria-disabled="true"</code>
              </Typography>
              <Typography variant="body2" className="block">
                • InputGroupButton uses proper button semantics for screen readers
              </Typography>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Focus States</CardTitle>
              <CardDescription>Visible focus indicators for keyboard users</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block">
                InputGroup components have visible focus states that follow the LSD design system's
                focus indicators, ensuring keyboard users can always see which element has focus.
                Inputs and buttons maintain distinct focus styles for clarity.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
      </PageContent>

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
    </DocsLayout>
  );
}
