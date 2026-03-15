'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Typography,
} from '@nipsys/shadcn-lsd';
import { toast } from 'sonner';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';

const installationCode = `import { Toaster } from '@nipsys/shadcn-lsd'
import { toast } from 'sonner'

export default function MyComponent() {
  return (
    <>
      <Toaster />
      <Button onClick={() => toast('Hello world')}>
        Show toast
      </Button>
    </>
  )
}`;

const toastTypesCode = `toast('Simple toast message')
toast.success('Changes saved successfully!')
toast.error('Something went wrong!')
toast.warning('Please review your changes')
toast.info('New feature available')`;

const durationCode = `toast('Short duration', { duration: 2000 })
toast('Long duration', { duration: 10000 })`;

const actionCode = `toast('Event has been created', {
  action: {
    label: 'Undo',
    onClick: () => console.log('Undo clicked'),
  },
})`;

const promiseCode = `const promise = new Promise((resolve) =>
  setTimeout(() => resolve('Data loaded!'), 2000)
)

toast.promise(promise, {
  loading: 'Loading...',
  success: (data) => data,
  error: 'Error loading data',
})`;

const persistentCode = `toast('This toast will not auto-dismiss', {
  duration: Infinity,
})

toast.dismiss()`;

const positionedCode = `toast('Top-left toast', { position: 'top-left' })
toast('Top-right toast', { position: 'top-right' })
toast('Bottom-left toast', { position: 'bottom-left' })
toast('Bottom-right toast', { position: 'bottom-right' })`;

const richCode = `import { CheckIcon } from '@phosphor-icons/react'

toast(
  <div>
    <h4 className="lsd:font-semibold">Event Created</h4>
    <p className="lsd:text-sm">
      Your event has been created successfully.
    </p>
  </div>,
  {
    duration: 5000,
  },
)
))`;

export default function SonnerPage() {
  return (
    <DocsLayout>
      <PageHeader
        title="Sonner"
        description="Toast notification component with multiple types and customizable options"
      />

      <PageContent>
        <PageSection title="About Sonner">
          <Typography variant="body1" className="block">
            Sonner is a toast notification component that displays brief, non-intrusive messages to
            users. It provides multiple toast types, customizable positioning, and rich color
            options for different notification states.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">
            Import the Toaster component and toast function from LSD and sonner:
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample code={installationCode} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Toast Types">
          <Typography variant="body1" className="text-muted-foreground">
            Sonner provides multiple toast types for different notification states.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>All Toast Types</CardTitle>
              <CardDescription>Display different toast types with various styling</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
                <Button variant="outlined" onClick={() => toast('Simple toast message')}>
                  Show Simple Toast
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => toast.success('Changes saved successfully!')}
                >
                  Show Success Toast
                </Button>
                <Button variant="outlined" onClick={() => toast.error('Something went wrong!')}>
                  Show Error Toast
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => toast.warning('Please review your changes')}
                >
                  Show Warning Toast
                </Button>
                <Button variant="outlined" onClick={() => toast.info('New feature available')}>
                  Show Info Toast
                </Button>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={toastTypesCode} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1" className="text-muted-foreground">
            Additional features like custom duration, position options, and promise-based toasts.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Custom Duration</CardTitle>
              <CardDescription>Control how long the toast is displayed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
                <Button
                  variant="outlined"
                  onClick={() => toast('Short duration', { duration: 2000 })}
                >
                  2 seconds
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => toast('Long duration', { duration: 10000 })}
                >
                  10 seconds
                </Button>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={durationCode} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>With Actions</CardTitle>
              <CardDescription>Add action buttons to toasts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <Button
                  variant="outlined"
                  onClick={() =>
                    toast('Event has been created', {
                      action: {
                        label: 'Undo',
                        onClick: () => console.log('Undo clicked'),
                      },
                    })
                  }
                >
                  Show with Action
                </Button>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={actionCode} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Promise-based Toasts</CardTitle>
              <CardDescription>
                Show loading state and success/error for async operations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <Button
                  variant="outlined"
                  onClick={() => {
                    const promise = new Promise(resolve =>
                      setTimeout(() => resolve('Data loaded!'), 2000)
                    );
                    toast.promise(promise, {
                      loading: 'Loading...',
                      success: data => String(data),
                      error: 'Error loading data',
                    });
                  }}
                >
                  Show Promise Toast
                </Button>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={promiseCode} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Persistent Toasts</CardTitle>
              <CardDescription>Toasts that stay until manually dismissed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
                <Button
                  variant="outlined"
                  onClick={() =>
                    toast('This toast will not auto-dismiss', {
                      duration: Number.POSITIVE_INFINITY,
                    })
                  }
                >
                  Show Persistent Toast
                </Button>
                <Button variant="outlined" onClick={() => toast.dismiss()}>
                  Dismiss All Toasts
                </Button>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={persistentCode} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Positioned Toasts</CardTitle>
              <CardDescription>Display toasts in different corners of the screen</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
                <Button
                  variant="outlined"
                  onClick={() => toast('Top-left toast', { position: 'top-left' })}
                >
                  Top-Left
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => toast('Top-right toast', { position: 'top-right' })}
                >
                  Top-Right
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => toast('Bottom-left toast', { position: 'bottom-left' })}
                >
                  Bottom-Left
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => toast('Bottom-right toast', { position: 'bottom-right' })}
                >
                  Bottom-Right
                </Button>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={positionedCode} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Rich Toasts</CardTitle>
              <CardDescription>Create custom toasts with rich content and styling</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <Button
                  variant="outlined"
                  onClick={() =>
                    toast(
                      <div>
                        <h4 className="lsd:font-semibold">Event Created</h4>
                        <p className="lsd:text-sm">Your event has been created successfully.</p>
                      </div>,
                      {
                        duration: 5000,
                      }
                    )
                  }
                >
                  Show Rich Toast
                </Button>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={richCode} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1" className="text-muted-foreground">
            All available props for the Toaster component.
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>theme</CardTitle>
                <CardDescription>Theme for the toast notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> 'light' | 'dark' | 'system'
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> light, dark, system
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> system
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>position</CardTitle>
                <CardDescription>Position of the toast container</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> ToasterPosition
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> top-left, top-center, top-right, bottom-left,
                  bottom-center, bottom-right
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> bottom-right
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>expand</CardTitle>
                <CardDescription>Whether to expand toasts on hover</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography
                  variant="body2"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  Expands toast to show full content on hover
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>duration</CardTitle>
                <CardDescription>Default duration for all toasts</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> number
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> 4000
                </Typography>
                <Typography
                  variant="body2"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  Duration in milliseconds before toast auto-dismisses
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>richColors</CardTitle>
                <CardDescription>Enable rich color backgrounds for toast types</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> true
                </Typography>
                <Typography
                  variant="body2"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  Applies colored backgrounds based on toast type
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>closeButton</CardTitle>
                <CardDescription>Show close button on toasts</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography
                  variant="body2"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  Displays a close button on each toast
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>toastOptions</CardTitle>
                <CardDescription>Default options for all toasts</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> ToastOptions
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography
                  variant="body2"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  Default configuration applied to all toasts
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>className</CardTitle>
                <CardDescription>Additional CSS classes to apply</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> string
                </Typography>
                <Typography
                  variant="body2"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  Merges with existing toaster classes
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1" className="text-muted-foreground">
            The Sonner component follows accessibility best practices.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Toasts are fully keyboard accessible</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Tab</strong> - Navigate to toast actions
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Shift + Tab</strong> - Navigate to previous focusable element
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Enter</strong> - Activate toast action button
              </Typography>
              <Typography variant="body2" className="block">
                • <strong>Escape</strong> - Dismiss toast (if dismissible)
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
                • Toasts use <code>role="alert"</code> for important notifications
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Use <code>aria-live</code> for announcing toast messages
              </Typography>
              <Typography variant="body2" className="block">
                • Action buttons are properly labeled for screen readers
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
                Toasts have visible focus states that follow the LSD design system's focus
                indicators, ensuring keyboard users can always see which element has focus.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
      </PageContent>

      <PageNavigation
        previous={{
          title: 'Progress',
          href: '/components/progress',
        }}
        next={{
          title: 'Tabs',
          href: '/components/tabs',
        }}
      />
    </DocsLayout>
  );
}
