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
import {
  CODE as ProgressBasicCODE,
  SIZE as ProgressBasicSIZE,
} from '@/examples/progress/basic/page';
import {
  CODE as ProgressColorsCODE,
  SIZE as ProgressColorsSIZE,
} from '@/examples/progress/colors/page';
import {
  CODE as ProgressIndeterminateCODE,
  SIZE as ProgressIndeterminateSIZE,
} from '@/examples/progress/indeterminate/page';
import {
  CODE as ProgressPausedCODE,
  SIZE as ProgressPausedSIZE,
} from '@/examples/progress/paused/page';
import {
  CODE as ProgressSizesCODE,
  SIZE as ProgressSizesSIZE,
} from '@/examples/progress/sizes/page';

export default function ProgressPage() {
  const ProgressBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const ProgressColorsIframeRef = useRef<HTMLIFrameElement>(null);
  const ProgressIndeterminateIframeRef = useRef<HTMLIFrameElement>(null);
  const ProgressPausedIframeRef = useRef<HTMLIFrameElement>(null);
  const ProgressSizesIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    ProgressBasicIframeRef,
    ProgressColorsIframeRef,
    ProgressIndeterminateIframeRef,
    ProgressPausedIframeRef,
    ProgressSizesIframeRef
  );

  return (
    <DocsLayout>
      <PageHeader
        title="Progress"
        description="Displays completion progress of a task with visual indicator."
      />

      <PageContent>
        <PageSection title="About Progress">
          <Typography variant="body1" className="block">
            A visual progress indicator showing task completion as a filled bar. Supports
            determinate states with percentage values and indeterminate states for unknown duration.
            Includes optional labels and multiple color variants for different states.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Progress component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Progress } from '@nipsys/lsd'

export default function MyComponent() {
  return <Progress />
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
                ref={ProgressBasicIframeRef}
                size={ProgressBasicSIZE}
                src="/examples/progress/basic"
                title="Basic Example"
              />
              <CodeExample code={ProgressBasicCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Variants">
          <Typography variant="body1">
            Component variants for different visual styles and use cases.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Colors</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={ProgressColorsIframeRef}
                size={ProgressColorsSIZE}
                src="/examples/progress/colors"
                title="Colors Example"
              />
              <CodeExample code={ProgressColorsCODE} />
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
                ref={ProgressSizesIframeRef}
                size={ProgressSizesSIZE}
                src="/examples/progress/sizes"
                title="Sizes Example"
              />
              <CodeExample code={ProgressSizesCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features and capabilities of the component.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Indeterminate</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={ProgressIndeterminateIframeRef}
                size={ProgressIndeterminateSIZE}
                src="/examples/progress/indeterminate"
                title="Indeterminate Example"
              />
              <CodeExample code={ProgressIndeterminateCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Paused</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={ProgressPausedIframeRef}
                size={ProgressPausedSIZE}
                src="/examples/progress/paused"
                title="Paused Example"
              />
              <CodeExample code={ProgressPausedCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <div className="mt-(--lsd-spacing-large)">
            <Typography variant="h4" className="mb-(--lsd-spacing-base)">
              Progress
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base)">
              <Card>
                <CardHeader>
                  <CardTitle>value</CardTitle>
                  <CardDescription>
                    Completion percentage. Number between 0 and 100 representing progress.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>number</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>indeterminate</CardTitle>
                  <CardDescription>
                    Enables indeterminate loading state. Shows animated bar when true, uses value
                    when false.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>boolean</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>speed</CardTitle>
                  <CardDescription>
                    Indeterminate animation speed. Controls how fast the indeterminate bar animates.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>"slow" | "normal" | "fast"</code>
                  </Typography>
                  <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Options:</strong> slow, normal, fast
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>variant</CardTitle>
                  <CardDescription>
                    Visual color variant. Semantic colors indicating different progress states.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong>{' '}
                    <code>"default" | "success" | "warning" | "destructive"</code>
                  </Typography>
                  <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Options:</strong> default, success, warning, destructive
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>showLabel</CardTitle>
                  <CardDescription>
                    Displays percentage label. Shows current value as percentage text when true.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>boolean</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>labelPosition</CardTitle>
                  <CardDescription>
                    Label position relative to bar. Controls where the percentage text appears.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>"top" | "bottom"</code>
                  </Typography>
                  <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Options:</strong> top, bottom
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>paused</CardTitle>
                  <CardDescription>
                    Pauses indeterminate animation. Freezes animation when true, only affects
                    indeterminate state.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>boolean</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>size</CardTitle>
                  <CardDescription>
                    Bar height. Controls the visual size of the progress bar.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>"sm" | "md" | "lg"</code>
                  </Typography>
                  <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Options:</strong> sm, md, lg
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
            </div>
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
                • Progress is a non-interactive element and does not support keyboard navigation.
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
                • role="progressbar" is automatically applied to indicate progress
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-valuenow is automatically set to current value when determinate
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-valuemin is automatically set to 0
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-valuemax is automatically set to 100
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
                • Progress indicators are not focusable as they are non-interactive display
                elements.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
        <PageNavigation
          previous={{
            title: 'Alert',
            href: '/components/alert',
          }}
          next={{
            title: 'Sonner',
            href: '/components/sonner',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
