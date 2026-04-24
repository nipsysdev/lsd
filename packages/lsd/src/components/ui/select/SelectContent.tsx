import * as SelectPrimitive from '@radix-ui/react-select';
import type * as React from 'react';

import { cn } from '@/lib/utils';

import { SelectScrollDownButton } from './SelectScrollDownButton';
import { SelectScrollUpButton } from './SelectScrollUpButton';

/**
 * SelectContent - Dropdown container that displays the list of options.
 *
 * Renders a scrollable dropdown with animations. Contains scroll buttons for
 * navigating long lists and proper positioning relative to the trigger.
 *
 * @exportAs sub
 */
export function SelectContent({
  /**
   * Additional CSS classes to apply to the content.
   */
  className,
  /**
   * The content to display in the dropdown.
   */
  children,
  /**
   * Positioning strategy for the dropdown.
   *
   * Controls how the dropdown is positioned relative to the trigger.
   */
  position = 'popper',
  /**
   * Alignment of the dropdown relative to the trigger.
   *
   * Controls the horizontal alignment of the dropdown.
   */
  align = 'center',
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          // Colors & Backgrounds
          'lsd:bg-lsd-surface',
          'lsd:text-lsd-text-primary',
          // Borders
          'lsd:border',
          'lsd:border-lsd-border',
          // Layout & Positioning
          'lsd:relative',
          'lsd:z-50',
          // Sizing
          'lsd:max-h-(--radix-select-content-available-height)',
          'lsd:min-w-32',
          'w-(--radix-select-trigger-width)',
          // Spacing
          'origin-(--radix-select-content-transform-origin)',
          // Overflow
          'lsd:overflow-x-hidden',
          'lsd:overflow-y-auto',
          // Animations - Open state
          'lsd:data-[state=open]:animate-in',
          'lsd:data-[state=open]:fade-in-0',
          'lsd:data-[state=open]:zoom-in-95',
          // Animations - Closed state
          'lsd:data-[state=closed]:animate-out',
          'lsd:data-[state=closed]:fade-out-0',
          'lsd:data-[state=closed]:zoom-out-95',
          // Animations - Slide based on side
          'lsd:data-[side=bottom]:slide-in-from-top-2',
          'lsd:data-[side=left]:slide-in-from-right-2',
          'lsd:data-[side=right]:slide-in-from-left-2',
          'lsd:data-[side=top]:slide-in-from-bottom-2',
          // Positioning adjustments for popper
          position === 'popper' && 'lsd:data-[side=bottom]:translate-x-[-10px]',
          position === 'popper' && 'lsd:data-[side=bottom]:translate-y-[-4px]',
          position === 'popper' && 'lsd:data-[side=left]:-translate-x-1',
          position === 'popper' && 'lsd:data-[side=right]:translate-x-1',
          position === 'popper' && 'lsd:data-[side=top]:-translate-y-1',
          className
        )}
        position={position}
        align={align}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            // Spacing
            'lsd:p-(--lsd-spacing-smallest)',
            // Sizing for popper position
            position === 'popper' && 'lsd:h-(--radix-select-trigger-height)',
            position === 'popper' && 'lsd:w-full',
            position === 'popper' && 'lsd:min-w-(--radix-select-trigger-width)',
            position === 'popper' && 'lsd:scroll-my-(--lsd-spacing-smallest)'
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}
