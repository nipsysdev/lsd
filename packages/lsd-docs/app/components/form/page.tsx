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
import { CODE as FormBasicCODE, SIZE as FormBasicSIZE } from '@/examples/form/basic/page';
import {
  CODE as FormValidationCODE,
  SIZE as FormValidationSIZE,
} from '@/examples/form/validation/page';
import {
  CODE as FormWithOtherComponentsCODE,
  SIZE as FormWithOtherComponentsSIZE,
} from '@/examples/form/with-other-components/page';

export default function FormPage() {
  const FormBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const FormValidationIframeRef = useRef<HTMLIFrameElement>(null);
  const FormWithOtherComponentsIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    FormBasicIframeRef,
    FormValidationIframeRef,
    FormWithOtherComponentsIframeRef
  );

  return (
    <DocsLayout>
      <PageHeader
        title="Form"
        description="Form provider component using React Hook Form for form state management."
      />

      <PageContent>
        <PageSection title="About Form">
          <Typography variant="body1" className="block">
            A Context Provider that wraps form components to share React Hook Form values and
            methods. Use FormField, FormItem, FormLabel, and FormMessage to build accessible form
            controls.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Form component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Form } from '@nipsys/lsd'

export default function MyComponent() {
  return <Form />
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
                ref={FormBasicIframeRef}
                size={FormBasicSIZE}
                src="/examples/form/basic"
                title="Basic Example"
              />
              <CodeExample code={FormBasicCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features and capabilities of the component.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Validation</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={FormValidationIframeRef}
                size={FormValidationSIZE}
                src="/examples/form/validation"
                title="Validation Example"
              />
              <CodeExample code={FormValidationCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>With Other Components</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={FormWithOtherComponentsIframeRef}
                size={FormWithOtherComponentsSIZE}
                src="/examples/form/with-other-components"
                title="With Other Components Example"
              />
              <CodeExample code={FormWithOtherComponentsCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Composition">
          <Card className="mt-(--lsd-spacing-base)">
            <CardContent className="pt-(--lsd-spacing-base)">
              <CodeBlock>
                {[
                  'Form',
                  '└── FormField',
                  '    └── FormItem',
                  '    │   ├── FormLabel',
                  '    │   ├── FormControl',
                  '    │   ├── FormDescription',
                  '        └── FormMessage',
                ]}
              </CodeBlock>
            </CardContent>
          </Card>
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
                • Tab - Navigate through form fields
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Enter - Submit form when on submit button
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Space - Toggle checkboxes and radio buttons
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
                • aria-invalid - Indicates invalid form fields
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-describedby - Links field to description or error messages
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-labelledby or aria-label - Provides accessible labels
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
                • Follows standard HTML form focus behavior. Focus moves through fields in document
                order when using Tab. Invalid fields receive focus when form validation fails.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
        <PageNavigation
          previous={{
            title: 'Field',
            href: '/components/field',
          }}
          next={{
            title: 'Radio-group',
            href: '/components/radio-group',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
