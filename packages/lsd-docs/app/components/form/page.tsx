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

export default function FormPage() {
  const formBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const formValidationIframeRef = useRef<HTMLIFrameElement>(null);
  const formWithOtherComponentsIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    formBasicIframeRef,
    formValidationIframeRef,
    formWithOtherComponentsIframeRef
  );

  return (
    <DocsLayout>
      <PageHeader
        title="Form"
        description="A flexible form component built on react-hook-form with accessible form fields"
      />

      <PageContent>
        <PageSection title="About Form">
          <Typography variant="body1" className="block">
            The Form component provides a powerful and accessible way to build forms in React using
            react-hook-form. It combines validation, state management, and accessible markup into a
            cohesive experience that integrates seamlessly with LSD components.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">
            The Form component is built on react-hook-form, which is included as a dependency.
            Import the Form components from LSD:
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useForm,
} from '@nipsys/lsd'

export default function MyForm() {
  const form = useForm({
    defaultValues: {
      username: '',
      email: '',
    },
  });

  function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-(--lsd-spacing-base)">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="johndoe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Components Overview">
          <Typography variant="body1">
            The Form component is composed of several sub-components that work together:
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>Form</CardTitle>
                <CardDescription>Form provider wrapper</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  Wraps your form with the FormProvider from react-hook-form, enabling context
                  access for all form components.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>FormField</CardTitle>
                <CardDescription>Connects form control to UI</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  Links a form field to the react-hook-form controller using the render prop pattern
                  for maximum flexibility.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>FormItem</CardTitle>
                <CardDescription>Field container wrapper</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  Provides the context for each form field, automatically generating unique IDs and
                  managing spacing.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>FormLabel</CardTitle>
                <CardDescription>Accessible label for field</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  Renders an accessible label that automatically associates with the form control
                  and changes color on error.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>FormControl</CardTitle>
                <CardDescription>Form control wrapper</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  Wraps your actual form input component using Radix UI's Slot component, passing
                  all necessary attributes for accessibility.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>FormDescription</CardTitle>
                <CardDescription>Helper text for field</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  Displays additional helper text below the form field to provide context or
                  guidance to the user.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>FormMessage</CardTitle>
                <CardDescription>Error or success message</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  Displays validation error messages (or custom messages) when a field has errors,
                  styled with destructive colors.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>useFormField</CardTitle>
                <CardDescription>Custom hook for form fields</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  Provides access to field state, IDs, and form context for custom form field
                  implementations.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Basic Usage">
          <Typography variant="body1">
            A simple form with Input components and descriptions.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Basic Form</CardTitle>
              <CardDescription>Simple form with basic fields</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={formBasicIframeRef}
                size="lg"
                src="/examples/form/basic"
                title="Form Basic Example"
              />
              <CodeExample code={require('../../examples/form/basic/page').CODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Validation">
          <Typography variant="body1">
            Form with comprehensive validation using react-hook-form rules.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Validation Form</CardTitle>
              <CardDescription>Form with validation rules and error handling</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={formValidationIframeRef}
                size="xl"
                src="/examples/form/validation"
                title="Form Validation Example"
              />
              <CodeExample code={require('../../examples/form/validation/page').CODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Integration with Other Components">
          <Typography variant="body1">
            Form showing integration with various LSD components like Select, Switch, and Checkbox.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Form with Multiple Components</CardTitle>
              <CardDescription>
                Integration with Input, Select, Switch, and Checkbox
              </CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={formWithOtherComponentsIframeRef}
                size="xl"
                src="/examples/form/with-other-components"
                title="Form with Other Components Example"
              />
              <CodeExample code={require('../../examples/form/with-other-components/page').CODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1">All available props for the Form components.</Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>Form</CardTitle>
                <CardDescription>Form provider component</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> FormProvider from react-hook-form
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Props:</strong> All methods from useForm()
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Accepts the entire form object returned by useForm({'{...}'}) via spread operator.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>FormField</CardTitle>
                <CardDescription>Form field connector</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>control:</strong> Control (required)
                </Typography>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>name:</strong> string (required)
                </Typography>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>render:</strong> (field, fieldState, formState) &rarr; ReactNode
                  (required)
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Use the rules prop to pass validation rules to the controller.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>FormItem</CardTitle>
                <CardDescription>Form field container</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> HTMLDivAttributes
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Props:</strong> ...props
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Accepts all standard HTML div attributes. Styled with CSS Grid for proper spacing.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>FormLabel</CardTitle>
                <CardDescription>Form field label</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> LabelProps (Radix UI Label)
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Props:</strong> ...props
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Automatically receives htmlFor, data-error aria attributes. Supports all Label
                  variants and sizes.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>FormControl</CardTitle>
                <CardDescription>Form control wrapper</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> SlotProps (Radix UI Slot)
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Props:</strong> ...props
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Automatically applies id, aria-describedby, aria-invalid attributes to children.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>FormDescription</CardTitle>
                <CardDescription>Helper text component</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> HTMLParagraphAttributes
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Props:</strong> ...props
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Automatically receives id attribute. Styled with muted foreground color and label
                  typography.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>FormMessage</CardTitle>
                <CardDescription>Error message component</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> HTMLParagraphAttributes
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Props:</strong> children?: ReactNode, ...props
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Automatically receives id attribute. Renders null if no error exists.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The Form component follows accessibility best practices with full ARIA support.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Semantic Markup</CardTitle>
              <CardDescription>Proper HTML structure for accessibility</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                - Labels are automatically associated with form controls using htmlFor
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                - Form controls receive proper id attributes generated by FormItem
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                - Helper and error text are linked via aria-describedby
              </Typography>
              <Typography variant="body2" className="block">
                - Error states are indicated with aria-invalid="true"
              </Typography>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Full keyboard support</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                - Tab - Navigate through form fields
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                - Shift + Tab - Navigate to previous form field
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                - Enter - Submit form when in a form
              </Typography>
              <Typography variant="body2" className="block">
                All nested LSD components (Input, Select, Checkbox, Switch) support their full
                keyboard navigation within the form context.
              </Typography>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>ARIA Attributes</CardTitle>
              <CardDescription>Automatic ARIA attribute management</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                - aria-describedby - Links form control to helper and error text
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                - aria-invalid - Indicates field has validation errors
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                - data-error - Data attribute for styling error states
              </Typography>
              <Typography variant="body2" className="block">
                These attributes are automatically managed by the Form components, but you can add
                additional ARIA attributes as needed.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>

        <PageNavigation
          previous={{ title: 'Field', href: '/components/field' }}
          next={{ title: 'Radio Group', href: '/components/radio-group' }}
        />
      </PageContent>
    </DocsLayout>
  );
}
