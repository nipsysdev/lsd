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
import { CODE as InputDisabledCODE } from '@/examples/input/disabled/page';
import { CODE as InputErrorCODE } from '@/examples/input/error/page';
import { CODE as InputLabelCODE } from '@/examples/input/label/page';
import { CODE as InputSizesCODE } from '@/examples/input/sizes/page';
import { CODE as InputSupportingTextCODE } from '@/examples/input/supporting-text/page';
import { CODE as InputTypesCODE } from '@/examples/input/types/page';
import { CODE as InputVariantsCODE } from '@/examples/input/variants/page';

export default function InputPage() {
  const inputVariantsIframeRef = useRef<HTMLIFrameElement>(null);
  const inputSizesIframeRef = useRef<HTMLIFrameElement>(null);
  const inputLabelIframeRef = useRef<HTMLIFrameElement>(null);
  const inputSupportingTextIframeRef = useRef<HTMLIFrameElement>(null);
  const inputErrorIframeRef = useRef<HTMLIFrameElement>(null);
  const inputTypesIframeRef = useRef<HTMLIFrameElement>(null);
  const inputDisabledIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    inputVariantsIframeRef,
    inputSizesIframeRef,
    inputLabelIframeRef,
    inputSupportingTextIframeRef,
    inputErrorIframeRef,
    inputTypesIframeRef,
    inputDisabledIframeRef
  );
  return (
    <DocsLayout>
      <PageHeader
        title="Input"
        description="Text input component with multiple variants and sizes"
      />

      <PageContent>
        <PageSection title="About Input">
          <Typography variant="body1" className="block">
            Inputs are form elements that allow users to enter and edit text. They are the primary
            way users provide data to your application, from simple text fields to complex forms.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Input component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Input } from '@nipsys/lsd'

export default function MyComponent() {
  return <Input placeholder="Enter text..." />
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Variants">
          <Typography variant="body1">
            Input comes in two visual variants for different design contexts.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Border Variants</CardTitle>
              <CardDescription>Choose between outlined and underlined styles</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={inputVariantsIframeRef}
                size="md"
                src="/examples/input/variants"
                title="Input Variants Example"
              />
              <CodeExample code={InputVariantsCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Sizes">
          <Typography variant="body1">
            Inputs come in five sizes to fit different contexts and layouts.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>All Sizes</CardTitle>
              <CardDescription>From extra small to extra large</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={inputSizesIframeRef}
                size="lg"
                src="/examples/input/sizes"
                title="Input Sizes Example"
              />
              <CodeExample code={InputSizesCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features like labels, supporting text, error states, and different input
            types.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>With Label</CardTitle>
              <CardDescription>Add a label to provide context for the input</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={inputLabelIframeRef}
                size="md"
                src="/examples/input/label"
                title="Input Label Example"
              />
              <CodeExample code={InputLabelCODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>With Supporting Text</CardTitle>
              <CardDescription>
                Add helper text below the input for additional guidance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={inputSupportingTextIframeRef}
                size="md"
                src="/examples/input/supporting-text"
                title="Input Supporting Text Example"
              />
              <CodeExample code={InputSupportingTextCODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Error State</CardTitle>
              <CardDescription>Show error state with destructive styling</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={inputErrorIframeRef}
                size="md"
                src="/examples/input/error"
                title="Input Error Example"
              />
              <CodeExample code={InputErrorCODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Input Types</CardTitle>
              <CardDescription>Support for various HTML input types</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={inputTypesIframeRef}
                size="lg"
                src="/examples/input/types"
                title="Input Types Example"
              />
              <CodeExample code={InputTypesCODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Disabled State</CardTitle>
              <CardDescription>Disabled input with reduced opacity</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={inputDisabledIframeRef}
                size="sm"
                src="/examples/input/disabled"
                title="Input Disabled Example"
              />
              <CodeExample code={InputDisabledCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1">All available props for the Input component.</Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>variant</CardTitle>
                <CardDescription>The visual style of the input border</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> BorderVariant
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> outlined, underlined
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> underlined
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>size</CardTitle>
                <CardDescription>The size of the input</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> SizeVariant
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> xs, sm, md, lg, xl
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> md
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>label</CardTitle>
                <CardDescription>Label text displayed above the input</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ReactNode
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Optional label for the input field
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>supportingText</CardTitle>
                <CardDescription>Helper text displayed below the input</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ReactNode
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Additional context or guidance for the input
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>error</CardTitle>
                <CardDescription>Show error state styling</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Changes border color to destructive and supporting text color
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>type</CardTitle>
                <CardDescription>HTML input type attribute</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> text
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Supports all standard HTML input types
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>id</CardTitle>
                <CardDescription>Custom ID for the input element</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> auto-generated
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  If not provided, a unique ID is automatically generated
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>className</CardTitle>
                <CardDescription>Additional CSS classes to apply</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Merges with existing input classes
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>...props</CardTitle>
                <CardDescription>Standard HTML input attributes</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  <strong>Type:</strong>{' '}
                  <code>React.InputHTMLAttributes&lt;HTMLInputElement&gt;</code>
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  All standard HTML input attributes are supported
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The Input component follows accessibility best practices.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Inputs are fully keyboard accessible</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Tab</strong> - Navigate to the input
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Shift + Tab</strong> - Navigate to previous focusable element
              </Typography>
              <Typography variant="body2" className="block">
                • <strong>Enter</strong> - Submit form (when in a form)
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
                • Labels are automatically associated with inputs using <code>htmlFor</code>
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Use <code>aria-invalid</code> when input has errors (automatically handled with
                error prop)
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Use <code>aria-describedby</code> to link to supporting text
              </Typography>
              <Typography variant="body2" className="block">
                • Use <code>aria-label</code> for inputs without visible labels
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
                Inputs have visible focus states that follow the LSD design system's focus
                indicators, ensuring keyboard users can always see which element has focus.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
      </PageContent>

      <PageNavigation
        previous={{
          title: 'Checkbox',
          href: '/components/checkbox',
        }}
        next={{
          title: 'Label',
          href: '/components/label',
        }}
      />
    </DocsLayout>
  );
}
