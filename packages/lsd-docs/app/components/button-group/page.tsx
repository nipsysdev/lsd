'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Typography,
} from '@nipsys/shadcn-lsd';
import { DownloadIcon, PlusIcon, TrashIcon } from '@phosphor-icons/react';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import {
  CODE as BUTTON_GROUP_CODE,
  ButtonGroupExample,
} from '@/examples/button-group/ButtonGroupExample';

export default function ButtonGroupPage() {
  return (
    <DocsLayout>
      <PageHeader
        title="ButtonGroup"
        description="Groups related buttons and controls together with proper spacing and focus management"
      />

      <PageContent>
        <PageSection title="About ButtonGroup">
          <Typography variant="body1" className="block">
            ButtonGroup organizes related buttons into groups with horizontal and vertical
            orientations, separators, and text labels.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the ButtonGroup components from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                code={`import {
  Button,
  ButtonGroup,
} from '@nipsys/shadcn-lsd'

export default function MyComponent() {
  return (
    <ButtonGroup>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>
  )
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Orientation">
          <Typography variant="body1">
            ButtonGroup supports horizontal and vertical orientations for different layout needs.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Horizontal Orientation</CardTitle>
              <CardDescription>Buttons arranged in a row (default)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <ButtonGroup orientation="horizontal">
                  <Button>Left</Button>
                  <Button>Middle</Button>
                  <Button>Right</Button>
                </ButtonGroup>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample
                      code={`<ButtonGroup orientation="horizontal">
  <Button>Left</Button>
  <Button>Middle</Button>
  <Button>Right</Button>
</ButtonGroup>`}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Vertical Orientation</CardTitle>
              <CardDescription>Buttons arranged in a column</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <ButtonGroup orientation="vertical">
                  <Button>Top</Button>
                  <Button>Middle</Button>
                  <Button>Bottom</Button>
                </ButtonGroup>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample
                      code={`<ButtonGroup orientation="vertical">
  <Button>Top</Button>
  <Button>Middle</Button>
  <Button>Bottom</Button>
</ButtonGroup>`}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Advanced features including separators, text labels, and integration with other
            components.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Button Group Variants</CardTitle>
              <CardDescription>Different button group configurations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <ButtonGroupExample />
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={BUTTON_GROUP_CODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>With Separators</CardTitle>
              <CardDescription>
                Use ButtonGroupSeparator to visually separate groups of buttons
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <ButtonGroup>
                  <Button>Save</Button>
                  <Button>Cancel</Button>
                  <ButtonGroupSeparator />
                  <Button variant="destructive">Delete</Button>
                </ButtonGroup>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample
                      code={`<ButtonGroup>
  <Button>Save</Button>
  <Button>Cancel</Button>
  <ButtonGroupSeparator />
  <Button variant="destructive">Delete</Button>
</ButtonGroup>`}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>With Text Labels</CardTitle>
              <CardDescription>
                Use ButtonGroupText to add informational labels within the group
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <ButtonGroup>
                  <Button>Previous</Button>
                  <ButtonGroupText>Page 1 of 10</ButtonGroupText>
                  <Button>Next</Button>
                </ButtonGroup>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample
                      code={`<ButtonGroup>
  <Button>Previous</Button>
  <ButtonGroupText>Page 1 of 10</ButtonGroupText>
  <Button>Next</Button>
</ButtonGroup>`}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>With Different Button Variants</CardTitle>
              <CardDescription>Mix different button variants within the same group</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <ButtonGroup>
                  <Button variant="filled">Primary</Button>
                  <Button variant="outlined">Secondary</Button>
                </ButtonGroup>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample
                      code={`<ButtonGroup>
<Button variant="filled">Primary</Button>
<Button variant="outlined">Secondary</Button>
</ButtonGroup>`}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>With Icon Buttons</CardTitle>
              <CardDescription>Use icon-only buttons for compact controls</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <ButtonGroup>
                  <Button variant="filled-rounded" size="square-md">
                    <PlusIcon />
                  </Button>
                  <Button variant="outlined-rounded" size="square-md">
                    <DownloadIcon weight="duotone" />
                  </Button>
                  <Button variant="destructive-rounded" size="square-md">
                    <TrashIcon weight="duotone" />
                  </Button>
                </ButtonGroup>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample
                      code={`<ButtonGroup>
<Button variant="filled-rounded" size="square-md">
<PlusIcon />
</Button>
<Button variant="outlined-rounded" size="square-md">
<DownloadIcon weight="duotone" />
</Button>
<Button variant="destructive-rounded" size="square-md">
<TrashIcon weight="duotone" />
</Button>
</ButtonGroup>`}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1">
            All available props for the ButtonGroup components.
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>orientation</CardTitle>
                <CardDescription>The layout direction of the button group</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> 'horizontal' | 'vertical'
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> horizontal, vertical
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> horizontal
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
                  Merges with existing button group classes
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>children</CardTitle>
                <CardDescription>Child elements to render in the group</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  <strong>Type:</strong> React.ReactNode
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Buttons, inputs, selects, separators, and text labels
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>...props</CardTitle>
                <CardDescription>Standard HTML fieldset attributes</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  <strong>Type:</strong> <code>React.ComponentProps&lt;'fieldset'&gt;</code>
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  All standard HTML fieldset attributes are supported
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>orientation (Separator)</CardTitle>
                <CardDescription>The orientation of the separator</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> 'horizontal' | 'vertical'
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> horizontal, vertical
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> vertical
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>className (Separator)</CardTitle>
                <CardDescription>Additional CSS classes to apply</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Merges with existing separator classes
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>asChild (Text)</CardTitle>
                <CardDescription>Whether to merge props with child element</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Used for rendering text as a different element
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>className (Text)</CardTitle>
                <CardDescription>Additional CSS classes to apply</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Merges with existing text classes
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The ButtonGroup component follows accessibility best practices.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Button groups are fully keyboard accessible</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Tab</strong> - Navigate to the button group
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Arrow Keys</strong> - Navigate between buttons in the group
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Shift + Tab</strong> - Navigate to previous focusable element
              </Typography>
              <Typography variant="body2" className="block">
                • <strong>Enter/Space</strong> - Activate the focused button
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
                • ButtonGroup renders as a <code>fieldset</code> element for semantic grouping
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Use <code>aria-label</code> on the group if no visible label is present
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • ButtonGroupText provides visual and screen reader accessible labels
              </Typography>
              <Typography variant="body2" className="block">
                • Separators are visually indicated but not announced to screen readers
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
                Focused elements within the button group automatically rise to the top (z-index) for
                visibility, ensuring keyboard users can always see which element has focus. This is
                particularly important for button groups with overlapping borders.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>

        <PageNavigation
          previous={{ title: 'Switch', href: '/components/switch' }}
          next={{ title: 'Select', href: '/components/select' }}
        />
      </PageContent>
    </DocsLayout>
  );
}
