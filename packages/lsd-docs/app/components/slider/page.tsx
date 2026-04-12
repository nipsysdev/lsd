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
import { useSendThemeToIframes } from '@/components/docs/useSendIframes';
import { CODE as BasicCode } from '@/examples/slider/basic/page';
import { CODE as DisabledCode } from '@/examples/slider/disabled/page';
import { CODE as MultipleCode } from '@/examples/slider/multiple/page';
import { CODE as RangeCode } from '@/examples/slider/range/page';
import { CODE as SizesCode } from '@/examples/slider/sizes/page';

export default function SliderPage() {
  const sliderBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const sliderRangeIframeRef = useRef<HTMLIFrameElement>(null);
  const sliderMultipleIframeRef = useRef<HTMLIFrameElement>(null);
  const sliderSizesIframeRef = useRef<HTMLIFrameElement>(null);
  const sliderDisabledIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    sliderBasicIframeRef,
    sliderRangeIframeRef,
    sliderMultipleIframeRef,
    sliderSizesIframeRef,
    sliderDisabledIframeRef
  );
  return (
    <DocsLayout>
      <PageHeader
        title="Slider"
        description="A slider that allows users to select a value from a range by dragging a handle along a track."
      />

      <PageContent>
        <PageSection title="About Slider">
          <Typography variant="body1" className="block">
            The Slider component is built on Radix UI and provides a smooth, intuitive way for users
            to select values from a continuous range. It supports single value selection, range
            selection with two thumbs for min/max, multiple thumbs for advanced use cases,
            horizontal controlled and uncontrolled modes, disabled state support, custom step
            increments, and LSD theme integration for consistent styling.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">
            The Slider component is included in @nipsys/shadcn-lsd. No additional installation steps
            are required.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Slider } from '@nipsys/shadcn-lsd'

export default function MyComponent() {
  return <Slider />
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Variants">
          <Typography variant="body1">
            Slider supports different selection modes and orientations.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Single Value</CardTitle>
              <CardDescription>A simple slider with a single value</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={sliderBasicIframeRef}
                size="sm"
                src="/examples/slider/basic"
                title="Basic"
              />
              <CodeExample code={BasicCode} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Range Selection</CardTitle>
              <CardDescription>Use an array with two values for a range slider</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={sliderRangeIframeRef}
                size="sm"
                src="/examples/slider/range"
                title="Range"
              />
              <CodeExample code={RangeCode} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Multiple Thumbs</CardTitle>
              <CardDescription>
                Use an array with multiple values for multiple thumbs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={sliderMultipleIframeRef}
                size="sm"
                src="/examples/slider/multiple"
                title="Multiple"
              />
              <CodeExample code={MultipleCode} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Sizes">
          <Typography variant="body1">
            Slider comes in three sizes to accommodate different use cases and accessibility needs.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Size Variants</CardTitle>
              <CardDescription>Choose from small, medium, or large sizes</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={sliderSizesIframeRef}
                size="md"
                src="/examples/slider/sizes"
                title="Slider Sizes"
              />
              <CodeExample code={SizesCode} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">Additional features like disabled state.</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Disabled State</CardTitle>
              <CardDescription>Use the disabled prop to disable the slider</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={sliderDisabledIframeRef}
                size="sm"
                src="/examples/slider/disabled"
                title="Disabled"
              />
              <CodeExample code={DisabledCode} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1">All available props for the Slider component.</Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>defaultValue</CardTitle>
                <CardDescription>Initial value(s) for uncontrolled slider</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> number[]
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> [min, max]
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Sets the initial value(s) when not controlled
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>value</CardTitle>
                <CardDescription>Current value(s) for controlled slider</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> number[]
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Controlled prop for current value(s)
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
                  <strong>Type:</strong> (value: number[]) =&gt; void
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Called when user changes the slider value
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>min</CardTitle>
                <CardDescription>Minimum value of the slider</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> number
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> 0
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Sets the minimum selectable value
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>max</CardTitle>
                <CardDescription>Maximum value of the slider</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> number
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> 100
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Sets the maximum selectable value
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>step</CardTitle>
                <CardDescription>Step increment for value changes</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> number
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> 1
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Controls the granularity of value changes
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>size</CardTitle>
                <CardDescription>Visual size of the slider</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> 'sm' | 'md' | 'lg'
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> sm, md, lg
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> 'md'
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Controls the visual size of the track and thumb
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>orientation</CardTitle>
                <CardDescription>Orientation of the slider</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> 'horizontal' | 'vertical'
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> horizontal, vertical
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> 'horizontal'
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Sets the slider orientation
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>disabled</CardTitle>
                <CardDescription>Disable the slider</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Prevents user interaction when true
                </Typography>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Additional Props</CardTitle>
              <CardDescription>Extends Radix UI Slider props</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block">
                The Slider component extends all props from Radix UI Slider. See{' '}
                <a
                  href="https://www.radix-ui.com/primitives/docs/components/slider"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Radix UI Slider documentation
                </a>{' '}
                for complete reference.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The Slider component follows WAI-ARIA patterns and is fully accessible.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Full keyboard support for value adjustment</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>ArrowLeft / ArrowDown:</strong> Decrement by step
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>ArrowRight / ArrowUp:</strong> Increment by step
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>PageDown:</strong> Decrement by larger amount
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>PageUp:</strong> Increment by larger amount
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Home:</strong> Jump to minimum value
              </Typography>
              <Typography variant="body2" className="block">
                • <strong>End:</strong> Jump to maximum value
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
                • <code>role="slider"</code> on each thumb
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <code>aria-valuenow</code> indicates current value
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <code>aria-valuemin</code> indicates minimum value
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <code>aria-valuemax</code> indicates maximum value
              </Typography>
              <Typography variant="body2" className="block">
                • <code>aria-disabled</code> indicates disabled state
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
                Components have visible focus states that follow the LSD design system's focus
                indicators, ensuring keyboard users can always see which element has focus.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>

        <PageNavigation
          previous={{ title: 'Radio Group', href: '/components/radio-group' }}
          next={{ title: 'Select', href: '/components/select' }}
        />
      </PageContent>
    </DocsLayout>
  );
}
