import { Avatar as AvatarPrimitive } from 'radix-ui';
import type * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * Avatar - Displays user images or initials.
 *
 * Represents user identity through images with fallback to initials.
 * Supports multiple sizes and integrates with avatar badges.
 *
 * @docSectionPageDescription
 * Displays user images or initials with multiple size options.
 *
 * @docSectionAbout
 * Avatar represents user identity through images with fallback to initials or icons. It supports multiple sizes (default, sm, lg) and integrates with avatar badges for additional status indicators like online state or counts.
 *
 * @docSectionAccessibilityKeyboard
 * • Not keyboard interactive (non-interactive image)
 *
 * @docSectionAccessibilityAria
 * • Avatar images should have alt text describing the user
 * • Use AvatarFallback with initials for screen readers when no image
 *
 * @docSectionAccessibilityFocus
 * • Not focusable by design as it's purely presentational
 * • If avatar is interactive (e.g., link), wrap in interactive element
 */

export type AvatarSize = 'default' | 'sm' | 'lg';

interface AvatarProps extends React.ComponentProps<typeof AvatarPrimitive.Root> {
  /**
   * Size of the avatar.
   *
   * Controls the dimensions of the avatar container.
   */
  size?: AvatarSize;
}

function Avatar({ className, size = 'default', children, ...props }: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(
        // Layout & Positioning
        'group/avatar',
        'lsd:relative',
        'lsd:flex',
        // Sizing
        'lsd:size-8',
        'lsd:data-[size=lg]:size-10',
        'lsd:data-[size=sm]:size-6',
        // Borders, Shapes & Effects
        'lsd:shrink-0',
        'lsd:overflow-hidden',
        'lsd:rounded-full',
        // Other Utility Classes
        'lsd:select-none',
        className
      )}
      {...props}
    >
      {children}
    </AvatarPrimitive.Root>
  );
}

export { Avatar };
