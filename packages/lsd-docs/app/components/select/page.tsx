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
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';
import { CODE as SelectBasicCODE } from '@/examples/select/basic/page';
import { CODE as SelectBasicUsageCODE } from '@/examples/select/basic-usage/page';
import { CODE as SelectControlledCODE } from '@/examples/select/controlled/page';
import { CODE as SelectDisabledCODE } from '@/examples/select/disabled/page';
import { CODE as SelectGroupedCODE } from '@/examples/select/grouped/page';
import { CODE as SelectSizesCODE } from '@/examples/select/sizes/page';
import { CODE as SelectVariantsCODE } from '@/examples/select/variants/page';
import { CODE as SelectWithSeparatorCODE } from '@/examples/select/with-separator/page';

export default function SelectPage() {
  const selectBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const selectVariantsIframeRef = useRef<HTMLIFrameElement>(null);
  const selectSizesIframeRef = useRef<HTMLIFrameElement>(null);
  const selectBasicUsageIframeRef = useRef<HTMLIFrameElement>(null);
  const selectGroupedIframeRef = useRef<HTMLIFrameElement>(null);
  const selectWithSeparatorIframeRef = useRef<HTMLIFrameElement>(null);
  const selectDisabledIframeRef = useRef<HTMLIFrameElement>(null);
  const selectControlledIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes();

  return (
    <DocsLayout>
      <PageHeader
        title="Select"
        description="Dropdown select component for choosing from a list of options"
      />

      <PageContent>
        <PageSection title="About Select">
          <Typography variant="body1" className="block">
            Select components allow users to choose a single option from a list of choices. They are
            ideal for situations where space is limited or when you need to present many options in
            an organized way.
          </Typography>
        </PageSection>

        <PageSection title="Examples">
          <Typography variant="body1">
            Interactive examples showing different select configurations.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Basic Select</CardTitle>
              <CardDescription>Simple select with items</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={selectBasicIframeRef}
                size="md"
                src="/examples/select/basic"
                title="Select Basic Example"
              />
              <CodeExample code={SelectBasicCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Select components from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@nipsys/shadcn-lsd'

export default function MyComponent() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Choose an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </Select>
  )
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Sizes">
          <Typography variant="body1">
            Select triggers come in two sizes to fit different contexts and layouts.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>All Sizes</CardTitle>
              <CardDescription>Small and default sizes</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={selectSizesIframeRef}
                size="md"
                src="/examples/select/sizes"
                title="Select Sizes Example"
              />
              <CodeExample code={SelectSizesCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Variants">
          <Typography variant="body1">
            Advanced select examples including grouped items, separators, disabled items, and
            controlled state.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Select Variants</CardTitle>
              <CardDescription>Grouped items, separators, and controlled state</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={selectVariantsIframeRef}
                size="md"
                src="/examples/select/variants"
                title="Select Variants Example"
              />
              <CodeExample code={SelectVariantsCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features like placeholders, grouped items, separators, disabled items, and
            controlled/uncontrolled states.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Basic Usage</CardTitle>
              <CardDescription>Simple select with placeholder</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={selectBasicUsageIframeRef}
                size="md"
                src="/examples/select/basic-usage"
                title="Select Basic Usage Example"
              />
              <CodeExample code={SelectBasicUsageCODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Grouped Items</CardTitle>
              <CardDescription>Organize items with labels and groups</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={selectGroupedIframeRef}
                size="md"
                src="/examples/select/grouped"
                title="Select Grouped Example"
              />
              <CodeExample code={SelectGroupedCODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>With Separator</CardTitle>
              <CardDescription>Divide items with visual separators</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={selectWithSeparatorIframeRef}
                size="md"
                src="/examples/select/with-separator"
                title="Select With Separator Example"
              />
              <CodeExample code={SelectWithSeparatorCODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Disabled Items</CardTitle>
              <CardDescription>Disable specific options</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={selectDisabledIframeRef}
                size="md"
                src="/examples/select/disabled"
                title="Select Disabled Example"
              />
              <CodeExample code={SelectDisabledCODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Controlled Component</CardTitle>
              <CardDescription>Manage value with state</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={selectControlledIframeRef}
                size="md"
                src="/examples/select/controlled"
                title="Select Controlled Example"
              />
              <CodeExample code={SelectControlledCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1">All available props for the Select components.</Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>value</CardTitle>
                <CardDescription>The controlled value of the select</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Use with onValueChange for controlled component
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>defaultValue</CardTitle>
                <CardDescription>The default value of the select</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Use for uncontrolled component
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>onValueChange</CardTitle>
                <CardDescription>Callback when value changes</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> (value: string) =&gt; void
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Called when user selects an option
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>disabled</CardTitle>
                <CardDescription>Disable the entire select</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Prevents user interaction
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>required</CardTitle>
                <CardDescription>Mark select as required</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Adds required attribute for form validation
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>name</CardTitle>
                <CardDescription>Name attribute for form submission</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Used when select is part of a form
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>size (SelectTrigger)</CardTitle>
                <CardDescription>The size of the select trigger</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> 'sm' | 'default'
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> sm, default
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> default
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>placeholder (SelectValue)</CardTitle>
                <CardDescription>Placeholder text when no value is selected</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Displayed when no option is selected
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>value (SelectItem)</CardTitle>
                <CardDescription>The value of the select item</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Required prop for each SelectItem
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>disabled (SelectItem)</CardTitle>
                <CardDescription>Disable individual select item</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Prevents selection of specific item
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The Select component follows accessibility best practices.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Select is fully keyboard accessible</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Tab</strong> - Navigate to the select trigger
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Shift + Tab</strong> - Navigate to previous focusable element
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Enter / Space</strong> - Open the select dropdown
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Arrow Up / Down</strong> - Navigate through options
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Home / End</strong> - Jump to first or last option
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Escape</strong> - Close the dropdown
              </Typography>
              <Typography variant="body2" className="block">
                • <strong>Enter</strong> - Select the focused option
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
                • Uses <code>aria-expanded</code> to indicate dropdown state
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Uses <code>aria-haspopup</code> to indicate dropdown behavior
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Uses <code>aria-selected</code> to indicate selected option
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Uses <code>aria-disabled</code> for disabled items
              </Typography>
              <Typography variant="body2" className="block">
                • Uses <code>role="listbox"</code> for the dropdown content
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
                Select components have visible focus states that follow the LSD design system's
                focus indicators, ensuring keyboard users can always see which element has focus.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
      </PageContent>

      <PageNavigation
        previous={{
          title: 'Slider',
          href: '/components/slider',
        }}
        next={{
          title: 'Switch',
          href: '/components/switch',
        }}
      />
    </DocsLayout>
  );
}
