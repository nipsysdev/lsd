import * as React from 'react';

import { cn } from '@/lib/utils';
import { InputGroupProvider } from './context';
import type { InputGroupProps } from './types';
import { getInputGroupHeightClasses } from './utils';

/**
 * InputGroup - Groups inputs with buttons and text addons for composed form controls.
 *
 * Combines input fields with buttons or text elements into a single visual group. Provides size context to children and handles focus states and error styling across the group.
 *
 * @docSectionPageDescription
 * Groups inputs with buttons and text addons for composed form controls.
 *
 * @docSectionAbout
 * Combines input fields with buttons or text elements into a single visual group. Provides size context to children and handles focus states and error styling across the group.
 *
 * @docSectionAccessibilityKeyboard
 * • Tab - Navigate through group items sequentially
 * • Enter - Activate focused button within group
 *
 * @docSectionAccessibilityAria
 * • role="group" identifies the component as a grouping
 * • aria-invalid indicates group error state
 *
 * @docSectionAccessibilityFocus
 * Focus is managed across elements within the group. Visual focus indicators appear on the active element. Group borders change color on focus of any child element.
 *
 * @docSectionComposition
 * • InputGroup - Root container for the input group
 *   • InputGroupInput - Input field styled for use within an input group
 *   • InputGroupAddon - Container for buttons, text, or other elements
 *   • InputGroupButton - Button component positioned within the group
 *   • InputGroupText - Text element for displaying labels or icons
 *
 * @exportAs root
 */
const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, size = 'md', children, ...props }, ref) => {
    return (
      <InputGroupProvider size={size}>
        {/* biome-ignore lint/a11y/useSemanticElements: Following shadcn pattern */}
        <div
          ref={ref}
          data-slot="input-group"
          role="group"
          className={cn(
            // Pseudo-selectors & ARIA - Group
            'lsd:group/input-group',
            // Positioning
            'lsd:relative',
            // Layout & Positioning
            'lsd:flex',
            // Sizing
            'lsd:w-full',
            // Layout & Positioning - items
            'lsd:items-center',
            // Borders, Shapes & Effects
            'lsd:rounded-none',
            'lsd:border',
            'lsd:border-lsd-border',
            'lsd:shadow-xs',
            // Transitions & Animations
            'lsd:transition-[color,box-shadow]',
            // Interactive States - Focus
            'lsd:outline-none',
            // Colors & Backgrounds
            'lsd:bg-lsd-surface',
            // Dynamic height classes
            getInputGroupHeightClasses(size),
            // Sizing - minimum width and textarea
            'lsd:min-w-0',
            'has-[>textarea]:lsd:h-auto',
            // Pseudo-selectors & ARIA - alignment variants
            'has-[>[data-align=inline-start]]:[&>input]:lsd:pl-(--lsd-spacing-smaller)',
            'has-[>[data-align=inline-end]]:[&>input]:lsd:pr-(--lsd-spacing-smaller)',
            // Pseudo-selectors & ARIA - focus state
            'has-[[data-slot=input-group-control]:focus-visible]:lsd:border-lsd-primary',
            'has-[[data-slot=input-group-control]:focus-visible]:lsd:ring-[3px]',
            'has-[[data-slot=input-group-control]:focus-visible]:lsd:ring-lsd-primary/50',
            // Pseudo-selectors & ARIA - error state
            'has-[[data-slot][aria-invalid=true]]:lsd:border-lsd-destructive',
            'has-[[data-slot][aria-invalid=true]]:lsd:ring-lsd-destructive/20',
            'has-[[data-slot][aria-invalid=true]]:lsd:ring-lsd-destructive/40',
            className
          )}
          {...props}
        >
          {children}
        </div>
      </InputGroupProvider>
    );
  }
);

InputGroup.displayName = 'InputGroup';

export { InputGroup };
