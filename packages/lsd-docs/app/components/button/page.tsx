'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Typography,
} from '@nipsys/shadcn-lsd';
import { ArrowRightIcon } from '@phosphor-icons/react';
import { useRef } from 'react';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { IframeExample } from '@/components/docs/IframeExample';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { useIframeThemeSync } from '@/components/docs/useIframeThemeSync';
import { CODE as ButtonIconsCODE } from '@/examples/button/icons/ButtonIconsExample';
import { CODE as ButtonLoadingCODE } from '@/examples/button/loading/ButtonLoadingExample';
import { CODE as ButtonSizesCODE } from '@/examples/button/sizes/ButtonSizesExample';
import { CODE as ButtonVariantsCODE } from '@/examples/button/variants/ButtonVariantsExample';

export default function ButtonPage() {
  const buttonBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const buttonVariantsIframeRef = useRef<HTMLIFrameElement>(null);
  const buttonSizesIframeRef = useRef<HTMLIFrameElement>(null);
  const buttonIconsIframeRef = useRef<HTMLIFrameElement>(null);
  const buttonLoadingIframeRef = useRef<HTMLIFrameElement>(null);
  const buttonGroupsIframeRef = useRef<HTMLIFrameElement>(null);

  useIframeThemeSync(
    buttonBasicIframeRef,
    buttonVariantsIframeRef,
    buttonSizesIframeRef,
    buttonIconsIframeRef,
    buttonLoadingIframeRef,
    buttonGroupsIframeRef
  );

  return (
    <DocsLayout>
      <PageHeader
        title="Button"
        description="Interactive button component with multiple variants and sizes for different use cases"
      />

      <PageContent>
        <PageSection title="About Button">
          <Typography variant="body1" className="block">
            Buttons are interactive elements that trigger actions or navigate users to different
            locations. They are the primary way users interact with your application.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Button component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                code={`import { Button } from '@nipsys/shadcn-lsd';

export default function MyComponent() {
  return <Button>Click me</Button>
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Variants">
          <Typography variant="body1">
            Button variants organized by category: primary, rounded, ghost, and semantic variants.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>All Variants</CardTitle>
              <CardDescription>Button variants organized by category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <IframeExample
                  ref={buttonVariantsIframeRef}
                  size="md"
                  src="/examples/button/variants"
                  title="Button Variants Example"
                />
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={ButtonVariantsCODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Sizes">
          <Typography variant="body1">
            Buttons come in multiple sizes to fit different contexts and layouts.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>All Sizes</CardTitle>
              <CardDescription>Regular and square sizes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <IframeExample
                  ref={buttonSizesIframeRef}
                  size="sm"
                  src="/examples/button/sizes"
                  title="Button Sizes Example"
                />
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={ButtonSizesCODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="With Icons">
          <Typography variant="body1">
            Buttons can include icons for better visual communication and user experience.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Icon Support</CardTitle>
              <CardDescription>Buttons with leading and trailing icons</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <IframeExample
                  ref={buttonIconsIframeRef}
                  size="sm"
                  src="/examples/button/icons"
                  title="Button Icons Example"
                />
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={ButtonIconsCODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features like loading states, full width, and disabled states.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Loading State</CardTitle>
              <CardDescription>Show loading spinner with optional text</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <IframeExample
                  ref={buttonLoadingIframeRef}
                  size="sm"
                  src="/examples/button/loading"
                  title="Button Loading Example"
                />
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={ButtonLoadingCODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Full Width</CardTitle>
              <CardDescription>Button that spans the full width of its container</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <Button fullWidth>Full Width Button</Button>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={'<Button fullWidth>Full Width Button</Button>'} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Disabled State</CardTitle>
              <CardDescription>Disabled button with reduced opacity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
                <Button disabled>Disabled</Button>
                <Button variant="outlined" disabled>
                  Disabled
                </Button>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample
                      code={`<Button disabled>Disabled</Button>
<Button variant="outlined" disabled>
  Disabled
</Button>`}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>asChild (Link Button)</CardTitle>
              <CardDescription>Render button as a link using Radix Slot</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
                <Button asChild>
                  <a href="/docs">Link Button</a>
                </Button>
                <Button variant="outlined" asChild>
                  <a href="/docs">
                    Learn More
                    <ArrowRightIcon className="ml-(--lsd-spacing-smaller)" weight="duotone" />
                  </a>
                </Button>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample
                      code={`<Button asChild>
  <a href="/docs">Link Button</a>
</Button>
<Button variant="outlined" asChild>
  <a href="/docs">
    Learn More
    <ArrowRightIcon className="ml-(--lsd-spacing-smaller)" weight="duotone" />
  </a>
</Button>`}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1">All available props for the Button component.</Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>variant</CardTitle>
                <CardDescription>The visual style of the button</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> ButtonVariant
                </Typography>
                <Typography variant="label1" className="block mb-2">
                  <strong>Options:</strong> filled, outlined, filled-rounded, outlined-rounded,
                  link, ghost, ghost-rounded, destructive, destructive-rounded, success,
                  success-rounded
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> filled
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>size</CardTitle>
                <CardDescription>The size of the button</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> SizeVariant | SquareSize
                </Typography>
                <Typography variant="label1" className="block mb-2">
                  <strong>Options:</strong> sm, md, lg, square-sm, square-md, square-lg
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> md
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>asChild</CardTitle>
                <CardDescription>Whether to merge props with child element</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-2">
                  Used for rendering button as a link
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>loading</CardTitle>
                <CardDescription>Show loading spinner and disable button</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-2">
                  Displays a spinner and disables the button. When loading=true with children, the
                  text is shown with 50% opacity.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>fullWidth</CardTitle>
                <CardDescription>Make button span full width of container</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-2">
                  Button takes full width of its parent container
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>disabled</CardTitle>
                <CardDescription>Disable the button</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-2">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-2">
                  Reduces opacity and prevents interaction
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
                <Typography variant="body2" className="mt-2">
                  Merges with existing button classes
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>...props</CardTitle>
                <CardDescription>Standard HTML button attributes</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  <strong>Type:</strong> React.ButtonHTMLAttributes&lt;HTMLButtonElement&gt;
                </Typography>
                <Typography variant="body2" className="mt-2">
                  All standard HTML button attributes are supported
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The Button component follows accessibility best practices.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Buttons are fully keyboard accessible</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-2">
                • <strong>Tab</strong> - Navigate to the button
              </Typography>
              <Typography variant="body2" className="block mb-2">
                • <strong>Enter</strong> or <strong>Space</strong> - Activate the button
              </Typography>
              <Typography variant="body2" className="block">
                • <strong>Shift + Tab</strong> - Navigate to previous focusable element
              </Typography>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>ARIA Attributes</CardTitle>
              <CardDescription>Proper ARIA attributes for screen readers</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-2">
                • Use <code>aria-label</code> for icon-only buttons to provide context
              </Typography>
              <Typography variant="body2" className="block mb-2">
                • Use <code>aria-disabled</code> when button is disabled (automatically handled)
              </Typography>
              <Typography variant="body2" className="block">
                • Use <code>aria-describedby</code> to link to additional description text
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
                Buttons have visible focus states that follow the LSD design system's focus
                indicators, ensuring keyboard users can always see which element has focus.
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
            title: 'Button Group',
            href: '/components/button-group',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
