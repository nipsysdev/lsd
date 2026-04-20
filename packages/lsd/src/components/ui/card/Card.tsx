import * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * Card - Decorative container for grouping related content with border and shadow.
 *
 * Versatile layout component for organizing and visually separating content sections. Supports flexible composition with optional header, content, footer, and action areas.
 *
 * @exportAs root
 *
 * @docSectionPageDescription
 * Decorative container for grouping related content with border and shadow.
 *
 * @docSectionAbout
 * Versatile layout component for organizing and visually separating content sections within a page. Includes sub-components (CardHeader, CardTitle, CardDescription, CardAction, CardContent, and CardFooter) for building complete card layouts with consistent styling and spacing.
 *
 * @docSectionComposition
 * • Card - Main container with border, shadow, and flex column layout
 * • CardHeader - Wraps card title, description, and optional action
 *   • CardTitle - Bold heading text for card title
 *   • CardDescription - Secondary text for card description
 *   • CardAction - Optional action area positioned in header grid
 * • CardContent - Main content area with padding
 * • CardFooter - Footer area with border and flex layout
 *
 * @docSectionAccessibilityKeyboard
 * • Tab - Navigate through interactive elements within the card
 *
 * @docSectionAccessibilityAria
 * • Use aria-label or aria-labelledby on card when it contains focusable elements and lacks visible heading
 * • Card itself has no ARIA role by default (layout container)
 *
 * @docSectionAccessibilityFocus
 * Card is a layout container and not focusable by default. Focus moves through interactive elements (buttons, links, inputs) within the card using Tab navigation. The card itself becomes focusable only if interactive attributes (onClick, tabIndex) are added.
 */
const Card = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="card"
        className={cn(
          // Colors & Backgrounds
          'lsd:bg-lsd-surface',
          'lsd:text-lsd-text-primary',
          // Layout & Positioning
          'lsd:flex',
          'lsd:flex-col',
          // Borders, Shapes & Effects
          'lsd:border',
          'lsd:border-lsd-border',
          'lsd:shadow-sm',
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = 'Card';

export { Card };
