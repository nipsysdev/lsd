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
import { CODE as SliderBasicCODE, SIZE as SliderBasicSIZE } from '@/examples/slider/basic/page';
import {
  CODE as SliderDisabledCODE,
  SIZE as SliderDisabledSIZE,
} from '@/examples/slider/disabled/page';
import {
  CODE as SliderMultipleCODE,
  SIZE as SliderMultipleSIZE,
} from '@/examples/slider/multiple/page';
import { CODE as SliderRangeCODE, SIZE as SliderRangeSIZE } from '@/examples/slider/range/page';
import { CODE as SliderSizesCODE, SIZE as SliderSizesSIZE } from '@/examples/slider/sizes/page';

export default function SliderPage() {
  const SliderBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const SliderDisabledIframeRef = useRef<HTMLIFrameElement>(null);
  const SliderMultipleIframeRef = useRef<HTMLIFrameElement>(null);
  const SliderRangeIframeRef = useRef<HTMLIFrameElement>(null);
  const SliderSizesIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    SliderBasicIframeRef,
    SliderDisabledIframeRef,
    SliderMultipleIframeRef,
    SliderRangeIframeRef,
    SliderSizesIframeRef
  );

  return (
    <DocsLayout>
      <PageHeader
        title="Slider"
        description="Input for selecting a value from a given range via draggable thumbs."
      />

      <PageContent>
        <PageSection title="About Slider">
          <Typography variant="body1" className="block">
            An input component for selecting values from a defined range using draggable thumbs.
            Supports single or multiple values, customizable sizes (sm, md, lg), and vertical
            orientation. Built on Radix UI primitives with consistent LSD styling and focus states.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Slider component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Slider } from '@nipsys/lsd'

export default function MyComponent() {
  return <Slider />
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
                ref={SliderBasicIframeRef}
                size={SliderBasicSIZE}
                src="/examples/slider/basic"
                title="Basic Example"
              />
              <CodeExample code={SliderBasicCODE} />
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
                ref={SliderSizesIframeRef}
                size={SliderSizesSIZE}
                src="/examples/slider/sizes"
                title="Sizes Example"
              />
              <CodeExample code={SliderSizesCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features and capabilities of the component.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Disabled</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={SliderDisabledIframeRef}
                size={SliderDisabledSIZE}
                src="/examples/slider/disabled"
                title="Disabled Example"
              />
              <CodeExample code={SliderDisabledCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Multiple</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={SliderMultipleIframeRef}
                size={SliderMultipleSIZE}
                src="/examples/slider/multiple"
                title="Multiple Example"
              />
              <CodeExample code={SliderMultipleCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Range</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={SliderRangeIframeRef}
                size={SliderRangeSIZE}
                src="/examples/slider/range"
                title="Range Example"
              />
              <CodeExample code={SliderRangeCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <div className="mt-(--lsd-spacing-large)">
            <Typography variant="h4" className="mb-(--lsd-spacing-base)">
              Slider
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base)">
              <Card>
                <CardHeader>
                  <CardTitle>size</CardTitle>
                  <CardDescription>
                    Size variant for the slider. Determines track height and thumb size.
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
                • Tab - Navigate to slider thumb(s)
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Arrow Left/Right - Decrease/increase value (horizontal)
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Arrow Up/Down - Decrease/increase value (vertical)
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Home - Jump to minimum value
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • End - Jump to maximum value
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Page Up/Down - Jump by larger step increment
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
                • role="slider" - Identifies element as slider
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-valuenow - Current value of thumb
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-valuemin - Minimum allowed value
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-valuemax - Maximum allowed value
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-orientation - Orientation (horizontal/vertical)
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-label or aria-labelledby - Accessible label
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
                • Thumb elements are focusable and receive keyboard focus. Focus moves between
                thumbs using Tab. Arrow keys adjust the focused thumb's value. Visual focus
                indicators ensure keyboard users can see which thumb has focus.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
        <PageNavigation
          previous={{
            title: 'Radio-group',
            href: '/components/radio-group',
          }}
          next={{
            title: 'Select',
            href: '/components/select',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
