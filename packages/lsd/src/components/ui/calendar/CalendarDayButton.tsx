import * as React from 'react';
import { type DayButton, getDefaultClassNames } from 'react-day-picker';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

/**
 * CalendarDayButton - Button component for individual calendar days
 *
 * Renders buttons for each calendar day with support for selected states, range selection, and automatic focus management.
 *
 * @exportAs sub
 */
export interface CalendarDayButtonProps extends React.ComponentProps<typeof DayButton> {}

function CalendarDayButton({ className, day, modifiers, ...props }: CalendarDayButtonProps) {
  const defaultClassNames = getDefaultClassNames();

  const ref = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  const isRangeStart = modifiers.range_start;
  const isRangeEnd = modifiers.range_end;
  const isRangeMiddle = modifiers.range_middle;
  const isSelected = modifiers.selected && !isRangeStart && !isRangeEnd && !isRangeMiddle;

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="square-md"
      data-day={day.date.toLocaleDateString()}
      {...(isSelected && { 'data-selected-single': true })}
      {...(isRangeStart && { 'data-range-start': true })}
      {...(isRangeEnd && { 'data-range-end': true })}
      {...(isRangeMiddle && { 'data-range-middle': true })}
      className={cn(
        // Layout & Positioning
        'lsd:flex',
        'lsd:flex-col',
        // Sizing
        'lsd:aspect-square',
        'lsd:size-auto',
        'lsd:w-full',
        'lsd:min-w-(--cell-size)',
        // Spacing
        'lsd:gap-(--lsd-spacing-smallest)',
        // Typography
        'lsd:leading-none',
        'lsd:font-normal',
        // Pseudo-selectors & ARIA
        'lsd:group-data-[focused=true]/day:lsd:relative',
        'lsd:group-data-[focused=true]/day:lsd:z-10',
        'lsd:group-data-[focused=true]/day:lsd:border-lsd-border',
        'lsd:group-data-[focused=true]/day:lsd:ring-[3px]',
        'lsd:group-data-[focused=true]/day:lsd:ring-lsd-text-primary/50',
        // Borders, Shapes & Effects (conditional)
        isRangeStart && cn('lsd:rounded-md', 'lsd:rounded-l-md'),
        // Colors & Backgrounds (conditional)
        isRangeStart && cn('lsd:bg-lsd-primary', 'lsd:text-lsd-primary-foreground'),
        // Borders, Shapes & Effects (conditional)
        isRangeEnd && cn('lsd:rounded-md', 'lsd:rounded-r-md'),
        // Colors & Backgrounds (conditional)
        isRangeEnd && cn('lsd:bg-lsd-primary', 'lsd:text-lsd-primary-foreground'),
        // Borders, Shapes & Effects (conditional)
        isRangeMiddle && cn('lsd:rounded-none'),
        // Colors & Backgrounds (conditional)
        isRangeMiddle && cn('lsd:bg-lsd-surface', 'lsd:text-lsd-text-primary'),
        // Borders, Shapes & Effects (conditional)
        isSelected && cn('lsd:border', 'lsd:border-lsd-border'),
        // Dark Mode
        'dark:lsd:hover:lsd:text-lsd-text-primary',
        // Pseudo-selectors & ARIA
        '[&>span]:lsd:opacity-70',
        '[&>span]:lsd:lsd-typography-label1',
        defaultClassNames.day,
        className
      )}
      disabled={modifiers.disabled || modifiers.hidden}
      {...props}
    />
  );
}

CalendarDayButton.displayName = 'CalendarDayButton';

export { CalendarDayButton };
