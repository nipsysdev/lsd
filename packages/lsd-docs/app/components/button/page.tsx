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
import {
  ArrowRightIcon,
  CheckIcon,
  DownloadIcon,
  PlusIcon,
  ShareIcon,
  TrashIcon,
} from '@phosphor-icons/react';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';

export default function ButtonPage() {
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
                code={`import { Button } from '@nipsys/shadcn-lsd'

export default function MyComponent() {
  return <Button>Click me</Button>
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Primary Variants">
          <Typography variant="body1">
            Primary button variants for different use cases and visual hierarchy.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Primary Variants</CardTitle>
              <CardDescription>Basic button styles for common actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
                <Button variant="filled">Filled</Button>
                <Button variant="outlined">Outlined</Button>
                <Button variant="link">Link</Button>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample
                      code={`<Button variant="filled">Filled</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="link">Link</Button>`}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Rounded Variants">
          <Typography variant="body1">
            Rounded button variants with circular shape, perfect for icon-only buttons.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Rounded Variants</CardTitle>
              <CardDescription>Circular buttons for icon-only actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
                <Button variant="filled-rounded" size="square-md">
                  <PlusIcon />
                </Button>
                <Button variant="outlined-rounded" size="square-md">
                  <ShareIcon weight="duotone" />
                </Button>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample
                      code={`<Button variant="filled-rounded" size="square-md">
  <PlusIcon />
</Button>
<Button variant="outlined-rounded" size="square-md">
  <ShareIcon weight="duotone" />
</Button>`}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Ghost Variants">
          <Typography variant="body1">
            Ghost variants with transparent backgrounds and hover states for subtle interactions.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Ghost Variants</CardTitle>
              <CardDescription>Subtle buttons with hover effects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
                <Button variant="ghost">Ghost</Button>
                <Button variant="ghost-rounded" size="square-md">
                  <DownloadIcon weight="duotone" />
                </Button>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample
                      code={`<Button variant="ghost">Ghost</Button>
<Button variant="ghost-rounded" size="square-md">
  <DownloadIcon weight="duotone" />
</Button>`}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Semantic Variants">
          <Typography variant="body1">
            Semantic variants for destructive and success actions with appropriate visual cues.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Destructive Variants</CardTitle>
              <CardDescription>For destructive or dangerous actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
                <Button variant="destructive">Delete</Button>
                <Button variant="destructive-rounded" size="square-md">
                  <TrashIcon weight="duotone" />
                </Button>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample
                      code={`<Button variant="destructive">Delete</Button>
<Button variant="destructive-rounded" size="square-md">
  <TrashIcon weight="duotone" />
</Button>`}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Success Variants</CardTitle>
              <CardDescription>For successful or positive actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
                <Button variant="success">Save</Button>
                <Button variant="success-rounded" size="square-md">
                  <CheckIcon />
                </Button>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample
                      code={`<Button variant="success">Save</Button>
<Button variant="success-rounded" size="square-md">
  <CheckIcon />
</Button>`}
                    />
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
              <CardTitle>Regular Sizes</CardTitle>
              <CardDescription>Standard button sizes for text buttons</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-center gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample
                      code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Square Sizes</CardTitle>
              <CardDescription>Square sizes for icon-only buttons</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-center gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
                <Button variant="filled-rounded" size="square-sm">
                  <PlusIcon />
                </Button>
                <Button variant="filled-rounded" size="square-md">
                  <PlusIcon />
                </Button>
                <Button variant="filled-rounded" size="square-lg">
                  <PlusIcon />
                </Button>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample
                      code={`<Button variant="filled-rounded" size="square-sm">
  <PlusIcon />
</Button>
<Button variant="filled-rounded" size="square-md">
  <PlusIcon />
</Button>
<Button variant="filled-rounded" size="square-lg">
  <PlusIcon />
</Button>`}
                    />
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
              <div className="flex flex-wrap gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
                <Button loading>Loading</Button>
                <Button loading>With Text</Button>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample
                      code={`<Button loading>Loading</Button>
<Button loading>With Text</Button>`}
                    />
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
                  Displays a spinner and disables the button
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
