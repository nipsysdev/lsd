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
import { CODE as TextareaBasicCODE } from '@/examples/textarea/basic/page';
import { CODE as TextareaCharacterCountCODE } from '@/examples/textarea/character-count/page';
import { CODE as TextareaStatesCODE } from '@/examples/textarea/states/page';

export default function TextareaPage() {
  const textareaBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const textareaStatesIframeRef = useRef<HTMLIFrameElement>(null);
  const textareaCharacterCountIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    textareaBasicIframeRef,
    textareaStatesIframeRef,
    textareaCharacterCountIframeRef
  );
  return (
    <DocsLayout>
      <PageHeader
        title="Textarea"
        description="Multi-line text input component for longer form content and messages"
      />

      <PageContent>
        <PageSection title="About Textarea">
          <Typography variant="body1" className="block">
            Textareas are form elements that allow users to enter and edit multiple lines of text.
            They are ideal for collecting longer responses, messages, comments, or any content that
            requires more space than a single-line input field.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Textarea component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Textarea } from '@nipsys/shadcn-lsd'

export default function MyComponent() {
  return <Textarea placeholder="Enter your message..." />
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features like different states, resize options, and character counting.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Basic Usage</CardTitle>
              <CardDescription>
                Simple textarea with placeholder and initial content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={textareaBasicIframeRef}
                size="md"
                src="/examples/textarea/basic"
                title="Textarea Basic Example"
              />
              <CodeExample code={TextareaBasicCODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>States</CardTitle>
              <CardDescription>Normal, disabled, error, and readonly states</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={textareaStatesIframeRef}
                size="md"
                src="/examples/textarea/states"
                title="Textarea States Example"
              />
              <CodeExample code={TextareaStatesCODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Character Count</CardTitle>
              <CardDescription>Show remaining characters with visual feedback</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={textareaCharacterCountIframeRef}
                size="md"
                src="/examples/textarea/character-count"
                title="Textarea Character Count Example"
              />
              <CodeExample code={TextareaCharacterCountCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1">All available props for the Textarea component.</Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>className</CardTitle>
                <CardDescription>Additional CSS classes to apply</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Merges with existing textarea classes
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>...props</CardTitle>
                <CardDescription>Standard HTML textarea attributes</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  <strong>Type:</strong>{' '}
                  <code>React.TextareaHTMLAttributes&lt;HTMLTextAreaElement&gt;</code>
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  All standard HTML textarea attributes are supported, including:
                </Typography>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  • <code>placeholder</code> - Placeholder text
                </Typography>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  • <code>value</code> - Controlled value
                </Typography>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  • <code>defaultValue</code> - Initial value
                </Typography>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  • <code>rows</code> - Number of visible text lines
                </Typography>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  • <code>disabled</code> - Disable the textarea
                </Typography>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  • <code>readOnly</code> - Make textarea readonly
                </Typography>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  • <code>maxLength</code> - Maximum character count
                </Typography>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  • <code>aria-invalid</code> - Error state for accessibility
                </Typography>
                <Typography variant="body2" className="block">
                  • <code>onChange</code> - Change event handler
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The Textarea component follows accessibility best practices for screen readers and
            keyboard navigation.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Textareas are fully keyboard accessible</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Tab</strong> - Navigate to the textarea
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Shift + Tab</strong> - Navigate to previous focusable element
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Enter</strong> - Create new line within textarea
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Arrow Keys</strong> - Navigate within text content
              </Typography>
              <Typography variant="body2" className="block">
                • <strong>Ctrl/Cmd + Enter</strong> - Submit form (when in a form)
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
                • Use <code>aria-label</code> for textareas without visible labels
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Use <code>aria-labelledby</code> to link to visible labels
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Use <code>aria-describedby</code> to link to helper text or instructions
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Use <code>aria-invalid="true"</code> for error states
              </Typography>
              <Typography variant="body2" className="block">
                • Use <code>aria-required="true"</code> for required textareas
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
                Textareas have visible focus states that follow the LSD design system's focus
                indicators, ensuring keyboard users can always see which element has focus. Error
                states are indicated with destructive colors and ring effects.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
      </PageContent>

      <PageNavigation
        previous={{
          title: 'Input Group',
          href: '/components/input-group',
        }}
        next={{
          title: 'Table',
          href: '/components/table',
        }}
      />
    </DocsLayout>
  );
}
