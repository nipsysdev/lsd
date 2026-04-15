'use client';

import {
  Card,
  CardContent,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Typography,
} from '@nipsys/lsd';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';

export default function InstallationPage() {
  return (
    <DocsLayout>
      <PageHeader
        title="Installation"
        description="Start building with LSD. Installation guide for adding the Logos Design System to your project."
      />

      <PageContent>
        <PageSection title="Getting Started">
          <Typography variant="body1">These are the tools you need to join in:</Typography>
          <ul className="list-disc list-inside mt-(--lsd-spacing-base)">
            <li>Node.js 24 or higher</li>
            <li>A React 19 project or higher</li>
          </ul>
        </PageSection>

        <PageSection title="Install the package">
          <Typography variant="body1">Install LSD using your preferred package manager:</Typography>
          <Tabs defaultValue="npm" className="mt-(--lsd-spacing-base)" fullWidth bordered>
            <TabsList>
              <TabsTrigger value="npm">npm</TabsTrigger>
              <TabsTrigger value="pnpm">pnpm</TabsTrigger>
              <TabsTrigger value="yarn">yarn</TabsTrigger>
              <TabsTrigger value="bun">bun</TabsTrigger>
            </TabsList>
            <TabsContent value="npm" className="p-(--lsd-spacing-large)">
              <CodeExample useAccordion={false} code="npm add @nipsys/lsd" />
            </TabsContent>
            <TabsContent value="pnpm" className="p-(--lsd-spacing-large)">
              <CodeExample useAccordion={false} code="pnpm add @nipsys/lsd" />
            </TabsContent>
            <TabsContent value="yarn" className="p-(--lsd-spacing-large)">
              <CodeExample useAccordion={false} code="yarn add @nipsys/lsd" />
            </TabsContent>
            <TabsContent value="bun" className="p-(--lsd-spacing-large)">
              <CodeExample useAccordion={false} code="bun add @nipsys/lsd" />
            </TabsContent>
          </Tabs>
        </PageSection>

        <PageSection title="Import the styles">
          <Typography variant="body1">Import the LSD styles, either in CSS or JS/TS:</Typography>

          <Tabs defaultValue="css" className="mt-(--lsd-spacing-base)" fullWidth bordered>
            <TabsList>
              <TabsTrigger value="css">in CSS</TabsTrigger>
              <TabsTrigger value="js">in JS/TS</TabsTrigger>
            </TabsList>
            <TabsContent value="css">
              <CodeExample useAccordion={false} code={`@import "@nipsys/lsd/css";`} />
            </TabsContent>
            <TabsContent value="js">
              <CodeExample useAccordion={false} code={`import '@nipsys/lsd/css';`} />
            </TabsContent>
          </Tabs>
        </PageSection>

        <PageSection title="Use components">
          <Typography variant="body1">
            Now that you've installed LSD, you can start using components:
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Button } from '@nipsys/lsd'

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}`}
              />
            </CardContent>
          </Card>
        </PageSection>
      </PageContent>

      <PageNavigation
        next={{
          title: 'Theming',
          href: '/getting-started/theming',
        }}
      />
    </DocsLayout>
  );
}
