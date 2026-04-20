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
import { CODE as InputDefaultCODE, SIZE as InputDefaultSIZE } from '@/examples/input/default/page';
import {
  CODE as InputDisabledCODE,
  SIZE as InputDisabledSIZE,
} from '@/examples/input/disabled/page';
import { CODE as InputErrorCODE, SIZE as InputErrorSIZE } from '@/examples/input/error/page';
import { CODE as InputGhostCODE, SIZE as InputGhostSIZE } from '@/examples/input/ghost/page';
import { CODE as InputLabelCODE, SIZE as InputLabelSIZE } from '@/examples/input/label/page';
import {
  CODE as InputOutlinedCODE,
  SIZE as InputOutlinedSIZE,
} from '@/examples/input/outlined/page';
import { CODE as InputSizesCODE, SIZE as InputSizesSIZE } from '@/examples/input/sizes/page';
import {
  CODE as InputSupportingTextCODE,
  SIZE as InputSupportingTextSIZE,
} from '@/examples/input/supporting-text/page';
import { CODE as InputTypesCODE, SIZE as InputTypesSIZE } from '@/examples/input/types/page';
import {
  CODE as InputUnderlinedCODE,
  SIZE as InputUnderlinedSIZE,
} from '@/examples/input/underlined/page';

export default function InputPage() {
  const InputDefaultIframeRef = useRef<HTMLIFrameElement>(null);
  const InputDisabledIframeRef = useRef<HTMLIFrameElement>(null);
  const InputErrorIframeRef = useRef<HTMLIFrameElement>(null);
  const InputGhostIframeRef = useRef<HTMLIFrameElement>(null);
  const InputLabelIframeRef = useRef<HTMLIFrameElement>(null);
  const InputOutlinedIframeRef = useRef<HTMLIFrameElement>(null);
  const InputSizesIframeRef = useRef<HTMLIFrameElement>(null);
  const InputSupportingTextIframeRef = useRef<HTMLIFrameElement>(null);
  const InputTypesIframeRef = useRef<HTMLIFrameElement>(null);
  const InputUnderlinedIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    InputDefaultIframeRef,
    InputDisabledIframeRef,
    InputErrorIframeRef,
    InputGhostIframeRef,
    InputLabelIframeRef,
    InputOutlinedIframeRef,
    InputSizesIframeRef,
    InputSupportingTextIframeRef,
    InputTypesIframeRef,
    InputUnderlinedIframeRef
  );

  return (
    <DocsLayout>
      <PageHeader
        title="Input"
        description="Text input component with label and supporting text."
      />

      <PageContent>
        <PageSection title="About Input">
          <Typography variant="body1" className="block">
            A styled text input wrapper that provides consistent label, supporting text, and error
            states. Supports multiple border variants (underlined, outlined, ghost) and sizes for
            different form contexts.
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
  return <Input />
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
              <CardTitle>Default</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={InputDefaultIframeRef}
                size={InputDefaultSIZE}
                src="/examples/input/default"
                title="Default Example"
              />
              <CodeExample code={InputDefaultCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Variants">
          <Typography variant="body1">
            Component variants for different visual styles and use cases.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Ghost</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={InputGhostIframeRef}
                size={InputGhostSIZE}
                src="/examples/input/ghost"
                title="Ghost Example"
              />
              <CodeExample code={InputGhostCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Outlined</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={InputOutlinedIframeRef}
                size={InputOutlinedSIZE}
                src="/examples/input/outlined"
                title="Outlined Example"
              />
              <CodeExample code={InputOutlinedCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Underlined</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={InputUnderlinedIframeRef}
                size={InputUnderlinedSIZE}
                src="/examples/input/underlined"
                title="Underlined Example"
              />
              <CodeExample code={InputUnderlinedCODE} />
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
                ref={InputSizesIframeRef}
                size={InputSizesSIZE}
                src="/examples/input/sizes"
                title="Sizes Example"
              />
              <CodeExample code={InputSizesCODE} />
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
                ref={InputDisabledIframeRef}
                size={InputDisabledSIZE}
                src="/examples/input/disabled"
                title="Disabled Example"
              />
              <CodeExample code={InputDisabledCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Error</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={InputErrorIframeRef}
                size={InputErrorSIZE}
                src="/examples/input/error"
                title="Error Example"
              />
              <CodeExample code={InputErrorCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Label</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={InputLabelIframeRef}
                size={InputLabelSIZE}
                src="/examples/input/label"
                title="Label Example"
              />
              <CodeExample code={InputLabelCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Supporting Text</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={InputSupportingTextIframeRef}
                size={InputSupportingTextSIZE}
                src="/examples/input/supporting-text"
                title="Supporting Text Example"
              />
              <CodeExample code={InputSupportingTextCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Types</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={InputTypesIframeRef}
                size={InputTypesSIZE}
                src="/examples/input/types"
                title="Types Example"
              />
              <CodeExample code={InputTypesCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <div className="mt-(--lsd-spacing-large)">
            <Typography variant="h4" className="mb-(--lsd-spacing-base)">
              Input
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base)">
              <Card>
                <CardHeader>
                  <CardTitle>variant</CardTitle>
                  <CardDescription>Border visual style variant.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>BorderVariant</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>size</CardTitle>
                  <CardDescription>Input size variant.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>SizeVariant</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>label</CardTitle>
                  <CardDescription>Label displayed above the input.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>React.ReactNode</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>supportingText</CardTitle>
                  <CardDescription>
                    Supporting text or error message displayed below the input.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>React.ReactNode</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>error</CardTitle>
                  <CardDescription>Error state styling with red border.</CardDescription>
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
                • Tab - Navigate to the input
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Shift + Tab - Navigate to previous element
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Standard input keyboard shortcuts for editing (Arrow keys, Home, End, Delete,
                Backspace)
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
                • aria-invalid - Marks input as having validation errors
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-describedby - Links to supporting text or error message
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-labelledby - Links to label element
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
                • Focus is managed natively by browser. Visual focus indicators show when input is
                active. Error states have distinct focus indicators to provide clear feedback.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
        <PageNavigation
          previous={{
            title: 'Checkbox',
            href: '/components/checkbox',
          }}
          next={{
            title: 'Input-group',
            href: '/components/input-group',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
