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
import { CODE as TableBasicCODE, SIZE as TableBasicSIZE } from '@/examples/table/basic/page';
import { CODE as TableStripedCODE, SIZE as TableStripedSIZE } from '@/examples/table/striped/page';
import {
  CODE as TableWithCaptionCODE,
  SIZE as TableWithCaptionSIZE,
} from '@/examples/table/with-caption/page';
import {
  CODE as TableWithFooterCODE,
  SIZE as TableWithFooterSIZE,
} from '@/examples/table/with-footer/page';

export default function TablePage() {
  const TableBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const TableStripedIframeRef = useRef<HTMLIFrameElement>(null);
  const TableWithCaptionIframeRef = useRef<HTMLIFrameElement>(null);
  const TableWithFooterIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    TableBasicIframeRef,
    TableStripedIframeRef,
    TableWithCaptionIframeRef,
    TableWithFooterIframeRef
  );

  return (
    <DocsLayout>
      <PageHeader
        title="Table"
        description="Displays data in rows and columns with built-in styling."
      />

      <PageContent>
        <PageSection title="About Table">
          <Typography variant="body1" className="block">
            Container component for displaying structured data in rows and columns. Includes
            sub-components for building complete table layouts with proper styling. Wrapped in a
            scrollable container for responsive design.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Table component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Table } from '@nipsys/lsd'

export default function MyComponent() {
  return <Table />
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
                ref={TableBasicIframeRef}
                size={TableBasicSIZE}
                src="/examples/table/basic"
                title="Basic Example"
              />
              <CodeExample code={TableBasicCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Variants">
          <Typography variant="body1">
            Component variants for different visual styles and use cases.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Striped</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={TableStripedIframeRef}
                size={TableStripedSIZE}
                src="/examples/table/striped"
                title="Striped Example"
              />
              <CodeExample code={TableStripedCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features and capabilities of the component.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>With Caption</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={TableWithCaptionIframeRef}
                size={TableWithCaptionSIZE}
                src="/examples/table/with-caption"
                title="With Caption Example"
              />
              <CodeExample code={TableWithCaptionCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>With Footer</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={TableWithFooterIframeRef}
                size={TableWithFooterSIZE}
                src="/examples/table/with-footer"
                title="With Footer Example"
              />
              <CodeExample code={TableWithFooterCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Composition">
          <Card className="mt-(--lsd-spacing-base)">
            <CardContent className="pt-(--lsd-spacing-base)">
              <CodeBlock>
                {[
                  'Table',
                  '├── TableHeader',
                  '│   └── TableHead',
                  '├── TableBody',
                  '│   └── TableRow',
                  '└── TableCell',
                  '├── TableFooter',
                  '└── TableCaption',
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
                • Tab - Navigate through interactive elements within table cells
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Arrow keys - Navigate interactive elements within rows when they have focus
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
                • Use scope attribute on th elements to define column or row headers
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Use caption element to provide a title for the table (via TableCaption)
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • For sortable tables, aria-sort indicates sorting direction on headers
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
                • Tables follow standard HTML semantics. Keyboard navigation depends on interactive
                elements within cells. Focus moves through tab navigable elements within table cells
                in document order.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
        <PageNavigation
          previous={{
            title: 'Badge',
            href: '/components/badge',
          }}
          next={{
            title: 'Toggle',
            href: '/components/toggle',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
