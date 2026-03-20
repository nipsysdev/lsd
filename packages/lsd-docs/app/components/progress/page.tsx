'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
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
import { useIframeThemeSync } from '@/components/docs/useIframeThemeSync';
import { CODE as ProgressBasicCODE } from '@/examples/progress/basic/ProgressBasicExample';
import { CODE as ProgressFeaturesCODE } from '@/examples/progress/features/ProgressFeaturesExample';

export default function ProgressPage() {
  const progressBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const progressFeaturesIframeRef = useRef<HTMLIFrameElement>(null);

  useIframeThemeSync(progressBasicIframeRef, progressFeaturesIframeRef);

  return (
    <DocsLayout>
      <PageHeader
        title="Progress"
        description="Visual progress indicator with determinate and indeterminate states"
      />

      <PageContent>
        <PageSection title="About Progress">
          <Typography variant="body1" className="block">
            Progress bars display the completion status of a task or process. They provide visual
            feedback to users about ongoing operations, with support for both determinate (known
            progress) and indeterminate (unknown duration) states.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Progress component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                code={`import { Progress } from '@nipsys/shadcn-lsd'

export default function MyComponent() {
  return <Progress value={50} />
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Basic Progress">
          <Typography variant="body1">
            Basic progress usage showing both controlled and uncontrolled progress states with
            labels.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Basic Examples</CardTitle>
              <CardDescription>
                Controlled and uncontrolled progress with interactive controls
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <IframeExample
                  ref={progressBasicIframeRef}
                  size="md"
                  src="/examples/progress/basic"
                  title="Progress Basic Example"
                />
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={ProgressBasicCODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features like indeterminate states, speed control, pause/resume, color
            variants, and sizes.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Features Examples</CardTitle>
              <CardDescription>
                Indeterminate, speed control, paused states, variants, and sizes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <IframeExample
                  ref={progressFeaturesIframeRef}
                  size="md"
                  src="/examples/progress/features"
                  title="Progress Features Example"
                />
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={ProgressFeaturesCODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1">All available props for the Progress component.</Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>value</CardTitle>
                <CardDescription>Current progress value</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> number
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> 0
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Value between 0 and 100. Ignored when indeterminate is true.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>indeterminate</CardTitle>
                <CardDescription>Show indeterminate animation</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  When true, shows animated progress bar for unknown duration
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>speed</CardTitle>
                <CardDescription>Animation speed for indeterminate state</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> 'slow' | 'normal' | 'fast'
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> slow, normal, fast
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> normal
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Only applies when indeterminate is true
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>variant</CardTitle>
                <CardDescription>Color variant of the progress bar</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> 'default' | 'success' | 'warning' | 'destructive'
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> default, success, warning, destructive
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> default
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Semantic colors for different states
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>showLabel</CardTitle>
                <CardDescription>Show percentage label</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Displays the current value as a percentage
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>labelPosition</CardTitle>
                <CardDescription>Position of the label</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> 'top' | 'bottom'
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> top, bottom
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> top
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Only applies when showLabel is true
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>paused</CardTitle>
                <CardDescription>Pause indeterminate animation</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Only applies when indeterminate is true
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>size</CardTitle>
                <CardDescription>Height of the progress bar</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> 'sm' | 'md' | 'lg'
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> sm, md, lg
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> md
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Controls the visual size of the progress bar
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
                  Merges with existing progress bar classes
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The Progress component follows accessibility best practices.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Progress bars are not interactive elements</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block">
                Progress bars are visual indicators and do not require keyboard interaction. They
                automatically announce their status to screen readers through ARIA attributes.
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
                • <code>role="progressbar"</code> - Automatically applied by Radix UI
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <code>aria-valuenow</code> - Current progress value (determinate only)
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <code>aria-valuemin="0"</code> - Minimum value (always 0)
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <code>aria-valuemax="100"</code> - Maximum value (always 100)
              </Typography>
              <Typography variant="body2" className="block">
                • <code>aria-valuetext</code> - Text description for indeterminate state
              </Typography>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Focus States</CardTitle>
              <CardDescription>Progress bars do not receive focus</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block">
                Progress bars are non-interactive elements and do not receive focus. They provide
                visual feedback through color and animation, making the progress status clear to all
                users.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>

        <PageNavigation
          previous={{ title: 'Dialog', href: '/components/dialog' }}
          next={{ title: 'Sonner', href: '/components/sonner' }}
        />
      </PageContent>
    </DocsLayout>
  );
}
