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
import { CODE as TableBasicExampleCODE } from '@/examples/table/basic/page';
import { CODE as TableStripedExampleCODE } from '@/examples/table/striped/page';
import { CODE as TableWithCaptionExampleCODE } from '@/examples/table/with-caption/page';
import { CODE as TableWithFooterExampleCODE } from '@/examples/table/with-footer/page';

export default function TablePage() {
  const basicTableIframeRef = useRef<HTMLIFrameElement>(null);
  const stripedTableIframeRef = useRef<HTMLIFrameElement>(null);
  const footerTableIframeRef = useRef<HTMLIFrameElement>(null);
  const captionTableIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes();

  return (
    <DocsLayout>
      <PageHeader
        title="Table"
        description="A structured component for displaying and organizing tabular data with consistent styling and accessibility."
      />

      <PageContent>
        <PageSection title="About Table">
          <Typography variant="body1" className="block">
            The Table component provides a structured way to display tabular data with consistent
            styling and accessibility. It&apos;s composed of several subcomponents that work
            together to create tables with headers, bodies, footers, captions, and proper cell
            formatting. Tables are ideal for displaying data in rows and columns, such as user
            lists, financial data, or any information that benefits from a structured layout.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Table components from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@nipsys/shadcn-lsd'`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Structure">
          <Typography variant="body1" className="mb-(--lsd-spacing-base)">
            A Table component is composed of the following parts:
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>Table</strong> - The root container with horizontal scroll support
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>TableHeader</strong> - Container for the header row(s)
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>TableBody</strong> - Container for the data rows
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>TableFooter</strong> - Container for footer rows with summary information
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>TableRow</strong> - Individual table rows with hover states
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>TableHead</strong> - Header cells with styling for column titles
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>TableCell</strong> - Data cells with proper alignment and padding
          </Typography>
          <Typography variant="body2" className="block">
            • <strong>TableCaption</strong> - Optional caption for describing the table
          </Typography>
        </PageSection>

        <PageSection title="Usage">
          <Typography variant="body1">
            Basic usage of the Table component with header and body sections.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Basic Table</CardTitle>
              <CardDescription>A simple table with header rows and data rows.</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={basicTableIframeRef}
                size="md"
                src="/examples/table/basic"
                title="Table Basic Example"
              />
              <CodeExample code={TableBasicExampleCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Variants">
          <Typography variant="body1" className="mb-(--lsd-spacing-base)">
            The Table component supports several variants and customizations.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Striped Rows</CardTitle>
              <CardDescription>
                Add custom styling to create striped or alternating row patterns.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={stripedTableIframeRef}
                size="md"
                src="/examples/table/striped"
                title="Table Striped Example"
              />
              <CodeExample code={TableStripedExampleCODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>With Footer</CardTitle>
              <CardDescription>
                Add a footer section for summary information or totals.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={footerTableIframeRef}
                size="md"
                src="/examples/table/with-footer"
                title="Table With Footer Example"
              />
              <CodeExample code={TableWithFooterExampleCODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>With Caption</CardTitle>
              <CardDescription>
                Add a caption to provide context or description for the table.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={captionTableIframeRef}
                size="md"
                src="/examples/table/with-caption"
                title="Table With Caption Example"
              />
              <CodeExample code={TableWithCaptionExampleCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1" className="mb-(--lsd-spacing-base)">
            Table component props and configuration options.
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>Table</CardTitle>
                <CardDescription>The root container</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps&lt;&apos;table&apos;&gt;
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> relative, w-full, overflow-x-auto
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Wraps the table in a container with horizontal scroll support. Uses LSD design
                  system classes for proper spacing and overflow handling.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>TableHeader</CardTitle>
                <CardDescription>Container for header row(s)</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps&lt;&apos;thead&apos;&gt;
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> border-bottom on rows
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Provides a container for table header rows with consistent border styling.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>TableBody</CardTitle>
                <CardDescription>Container for data rows</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps&lt;&apos;tbody&apos;&gt;
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> no border on last row
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Container for table body rows with proper spacing and border handling.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>TableFooter</CardTitle>
                <CardDescription>Container for footer rows</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps&lt;&apos;tfoot&apos;&gt;
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> border-top, muted background, font-medium
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Provides a footer section with appropriate styling for summary information.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>TableRow</CardTitle>
                <CardDescription>Individual table rows</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps&lt;&apos;tr&apos;&gt;
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> border-bottom, hover effects
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Individual rows with borders and hover states. Supports
                  {' data-[state=selected]'} for selection styling.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>TableHead</CardTitle>
                <CardDescription>Header cells</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps&lt;&apos;th&apos;&gt;
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> h-10, px-small, font-medium, text-left
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Header cells with proper padding, alignment, and typography using LSD design
                  system tokens.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>TableCell</CardTitle>
                <CardDescription>Data cells</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps&lt;&apos;td&apos;&gt;
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> p-small, align-middle
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Data cells with proper padding and alignment using LSD spacing tokens.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>TableCaption</CardTitle>
                <CardDescription>Optional caption</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps&lt;&apos;caption&apos;&gt;
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> mt-4, text-sm, text-secondary
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Optional caption with secondary text color for describing table contents.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1" className="mb-(--lsd-spacing-base)">
            The Table component follows accessibility best practices and is fully accessible to
            keyboard and screen reader users.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Keyboard shortcuts for table interaction</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Tab</strong> - Navigate through tabular data cells from left to right, top
                to bottom
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Shift + Tab</strong> - Navigate in reverse order
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Arrow Keys</strong> - Navigate within table cells (when focused)
              </Typography>
              <Typography variant="body2" className="block">
                • <strong>Enter</strong> - Activate interactive elements within cells
              </Typography>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>ARIA Attributes</CardTitle>
              <CardDescription>Proper ARIA support for screen readers</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Use <code>caption</code> or <code>aria-label</code> for table descriptions
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Sortable columns should use <code>aria-sort</code> attribute
              </Typography>
              <Typography variant="body2" className="block">
                • Use <code>aria-live</code> for dynamically updated table content
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
                Interactive elements within table cells have visible focus states that follow the
                LSD design system&apos;s focus indicators, ensuring keyboard users can always see
                which element has focus.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>

        <PageNavigation
          previous={{ title: 'Skeleton', href: '/components/skeleton' }}
          next={{ title: 'Toggle', href: '/components/toggle' }}
        />
      </PageContent>
    </DocsLayout>
  );
}
