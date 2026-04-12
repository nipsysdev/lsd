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
import { CODE as AvatarBasicCODE } from '@/examples/avatar/basic/page';
import { CODE as AvatarSizesCODE } from '@/examples/avatar/sizes/page';

export default function AvatarPage() {
  const avatarBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const avatarSizesIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(avatarBasicIframeRef, avatarSizesIframeRef);
  return (
    <DocsLayout>
      <PageHeader
        title="Avatar"
        description="User profile image component with fallback support and group display capabilities"
      />

      <PageContent>
        <PageSection title="About Avatar">
          <Typography variant="body1" className="block">
            Avatars are circular profile images that represent users or entities. They support image
            display with automatic fallback to text or icons when images fail to load, making them
            perfect for user profiles, comments, and team member displays.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import Avatar components from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
} from '@nipsys/shadcn-lsd';

export default function MyComponent() {
  return (
    <Avatar>
      <AvatarImage src="/avatar.jpg" alt="User" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  );
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Basic Usage">
          <Typography variant="body1">Simple avatar with image and fallback support.</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Basic Avatar</CardTitle>
              <CardDescription>Avatar with image and fallback text</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={avatarBasicIframeRef}
                size="md"
                src="/examples/avatar/basic"
                title="Avatar Basic Example"
              />
              <CodeExample code={AvatarBasicCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Sizes">
          <Typography variant="body1">
            Avatars come in three sizes to fit different contexts and visual hierarchies.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>All Sizes</CardTitle>
              <CardDescription>Small, default, and large avatar sizes</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={avatarSizesIframeRef}
                size="md"
                src="/examples/avatar/sizes"
                title="Avatar Sizes Example"
              />
              <CodeExample code={AvatarSizesCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1">All available props for Avatar components.</Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>Avatar</CardTitle>
                <CardDescription>Main avatar container component</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong>{' '}
                  <code>React.ComponentProps&lt;typeof AvatarPrimitive.Root&gt;</code>
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>size:</strong> AvatarSize
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> 'default' | 'sm' | 'lg'
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> 'default'
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Controls the size of the avatar
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AvatarImage</CardTitle>
                <CardDescription>Image component for avatar</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong>{' '}
                  <code>React.ComponentProps&lt;typeof AvatarPrimitive.Image&gt;</code>
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>src:</strong> string
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>alt:</strong> string
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Standard HTML img attributes supported
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AvatarFallback</CardTitle>
                <CardDescription>Fallback content when image fails to load</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong>{' '}
                  <code>React.ComponentProps&lt;typeof AvatarPrimitive.Fallback&gt;</code>
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>children:</strong> React.ReactNode
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Content to display when image is unavailable
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AvatarBadge</CardTitle>
                <CardDescription>Status badge overlay for avatar</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> <code>React.ComponentProps&lt;\'span\'&gt;</code>
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>children:</strong> React.ReactNode
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Badge content positioned at bottom-right of avatar
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AvatarGroup</CardTitle>
                <CardDescription>Container for multiple avatars</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> <code>React.ComponentProps&lt;\'div\'&gt;</code>
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>children:</strong> React.ReactNode
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Stacks avatars horizontally with overlap
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AvatarGroupCount</CardTitle>
                <CardDescription>Count indicator for avatar groups</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> <code>React.ComponentProps&lt;\'div\'&gt;</code>
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>children:</strong> React.ReactNode
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Shows count of additional items in group
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The Avatar component follows accessibility best practices for screen readers and
            keyboard navigation.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>ARIA Attributes</CardTitle>
              <CardDescription>Proper ARIA attributes for screen readers</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Use descriptive <code>alt</code> text on AvatarImage for context
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • AvatarFallback provides accessible alternative content
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • AvatarBadge uses semantic HTML for status indicators
              </Typography>
              <Typography variant="body2" className="block">
                • AvatarGroup maintains proper focus management for keyboard users
              </Typography>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Interactive avatars are keyboard accessible</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Tab</strong> - Navigate to interactive avatars
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Shift + Tab</strong> - Navigate to previous focusable element
              </Typography>
              <Typography variant="body2" className="block">
                • <strong>Enter or Space</strong> - Activate interactive avatar (when applicable)
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
                Interactive avatars have visible focus states that follow the LSD design system's
                focus indicators, ensuring keyboard users can always see which element has focus.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>

        <PageNavigation
          previous={{
            title: 'Accordion',
            href: '/components/accordion',
          }}
          next={{
            title: 'Badge',
            href: '/components/badge',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}
