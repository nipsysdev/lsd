import * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * Table - Displays data in rows and columns
 *
 * Container for displaying structured data with proper headers and footers.
 * Encompasses multiple sub-components for building complete table layouts.
 *
 * @docSectionPageDescription
 * Displays data in rows and columns with built-in styling.
 *
 * @docSectionAbout
 * Container component for displaying structured data in rows and columns. Includes sub-components for building complete table layouts with proper styling. Wrapped in a scrollable container for responsive design.
 *
 * @docSectionComposition
 * • Table - Main container with horizontal scroll capability
 * • TableHeader - Wraps column header rows
 *   • TableHead - Column header cell with bold text and alignment
 * • TableBody - Wraps data rows
 *   • TableRow - Individual table row with hover background
 *     • TableCell - Data cell with consistent padding and vertical alignment
 * • TableFooter - Optional footer for summary information
 * • TableCaption - Optional caption for the table
 *
 * @docSectionAccessibilityKeyboard
 * • Tab - Navigate through interactive elements within table cells
 * • Arrow keys - Navigate interactive elements within rows when they have focus
 *
 * @docSectionAccessibilityAria
 * • Use scope attribute on th elements to define column or row headers
 * • Use caption element to provide a title for the table (via TableCaption)
 * • For sortable tables, aria-sort indicates sorting direction on headers
 *
 * @docSectionAccessibilityFocus
 * Tables follow standard HTML semantics. Keyboard navigation depends on interactive elements within cells. Focus moves through tab navigable elements within table cells in document order.
 */
const Table = React.forwardRef<HTMLTableElement, React.ComponentProps<'table'>>(
  ({ className, ...props }, ref) => {
    return (
      <div data-slot="table-container" className="lsd:relative lsd:w-full lsd:overflow-x-auto">
        <table
          ref={ref}
          data-slot="table"
          className={cn('lsd:w-full lsd:caption-bottom lsd:text-sm', className)}
          {...props}
        />
      </div>
    );
  }
);
Table.displayName = 'Table';

export { Table };
