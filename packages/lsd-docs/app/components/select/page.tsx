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
  CODE as SelectBasicUsageCODE,
  SIZE as SelectBasicUsageSIZE,
} from '@/examples/select/basic-usage/page';
import {
  CODE as SelectControlledCODE,
  SIZE as SelectControlledSIZE,
} from '@/examples/select/controlled/page';
import {
  CODE as SelectDisabledCODE,
  SIZE as SelectDisabledSIZE,
} from '@/examples/select/disabled/page';
import {
  CODE as SelectGroupedCODE,
  SIZE as SelectGroupedSIZE,
} from '@/examples/select/grouped/page';
import { CODE as SelectSizesCODE, SIZE as SelectSizesSIZE } from '@/examples/select/sizes/page';
import {
  CODE as SelectVariantsCODE,
  SIZE as SelectVariantsSIZE,
} from '@/examples/select/variants/page';
import {
  CODE as SelectWithSeparatorCODE,
  SIZE as SelectWithSeparatorSIZE,
} from '@/examples/select/with-separator/page';

export default function SelectPage() {
  const SelectBasicUsageIframeRef = useRef<HTMLIFrameElement>(null);
  const SelectControlledIframeRef = useRef<HTMLIFrameElement>(null);
  const SelectDisabledIframeRef = useRef<HTMLIFrameElement>(null);
  const SelectGroupedIframeRef = useRef<HTMLIFrameElement>(null);
  const SelectSizesIframeRef = useRef<HTMLIFrameElement>(null);
  const SelectVariantsIframeRef = useRef<HTMLIFrameElement>(null);
  const SelectWithSeparatorIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    SelectBasicUsageIframeRef,
    SelectControlledIframeRef,
    SelectDisabledIframeRef,
    SelectGroupedIframeRef,
    SelectSizesIframeRef,
    SelectVariantsIframeRef,
    SelectWithSeparatorIframeRef
  );

  return (
    <DocsLayout>
      <PageHeader
        title="Select"
        description="Displays a list of options for users to choose from."
      />

      <PageContent>
        <PageSection title="About Select">
          <Typography variant="body1" className="block">
            A dropdown selection component that presents a list of options when triggered. Users can
            select a single option from the list using mouse or keyboard navigation. The component
            is built on Radix UI primitives and includes full keyboard accessibility support.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Select component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Select } from '@nipsys/lsd'

export default function MyComponent() {
  return <Select />
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
              <CardTitle>Basic Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={SelectBasicUsageIframeRef}
                size={SelectBasicUsageSIZE}
                src="/examples/select/basic-usage"
                title="Basic Usage Example"
              />
              <CodeExample code={SelectBasicUsageCODE} />
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
                ref={SelectSizesIframeRef}
                size={SelectSizesSIZE}
                src="/examples/select/sizes"
                title="Sizes Example"
              />
              <CodeExample code={SelectSizesCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features and capabilities of the component.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Controlled</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={SelectControlledIframeRef}
                size={SelectControlledSIZE}
                src="/examples/select/controlled"
                title="Controlled Example"
              />
              <CodeExample code={SelectControlledCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Disabled</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={SelectDisabledIframeRef}
                size={SelectDisabledSIZE}
                src="/examples/select/disabled"
                title="Disabled Example"
              />
              <CodeExample code={SelectDisabledCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Grouped</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={SelectGroupedIframeRef}
                size={SelectGroupedSIZE}
                src="/examples/select/grouped"
                title="Grouped Example"
              />
              <CodeExample code={SelectGroupedCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Variants</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={SelectVariantsIframeRef}
                size={SelectVariantsSIZE}
                src="/examples/select/variants"
                title="Variants Example"
              />
              <CodeExample code={SelectVariantsCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>With Separator</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={SelectWithSeparatorIframeRef}
                size={SelectWithSeparatorSIZE}
                src="/examples/select/with-separator"
                title="With Separator Example"
              />
              <CodeExample code={SelectWithSeparatorCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Composition">
          <Card className="mt-(--lsd-spacing-base)">
            <CardContent className="pt-(--lsd-spacing-base)">
              <CodeBlock>
                {[
                  'Select',
                  '├── SelectTrigger',
                  '│   └── SelectValue',
                  '└── SelectContent',
                  '    ├── SelectScrollUpButton',
                  '    ├── SelectViewport',
                  '    └── SelectScrollDownButton',
                ]}
              </CodeBlock>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <div className="flex flex-col gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>Radix UI Documentation</CardTitle>
                <CardDescription>Select wraps Radix UI primitives</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://www.radix-ui.com/primitives/docs/components/select"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View Radix UI Select documentation →
                </a>
              </CardContent>
            </Card>
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
                • Tab - Navigate to/from the select component
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Enter or Space - Open the select or select the highlighted option
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Arrow Up/Down - Navigate between options
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Page Up/Page Down - Navigate through options faster
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Home/End - Jump to first/last option
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Escape - Close the select without making changes
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
                • role="listbox" is applied to SelectContent
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • role="option" is applied to each SelectItem
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-expanded indicates open/closed state on trigger
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-controls links trigger to content
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-selected indicates the currently selected item
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-activedescendant identifies the keyboard-focused option
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-label provides accessible labels when no visible label exists
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-disabled indicates disabled items
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
                • Focus moves to the first option when dropdown opens
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Focus returns to trigger when option is selected
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Focus is trapped in dropdown when open
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Keyboard navigation manages highlighted option focus
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Clicking outside closes dropdown and returns focus
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
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
      </PageContent>
    </DocsLayout>
  );
}
