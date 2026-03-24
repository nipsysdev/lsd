import * as React from 'react';
import { type DayButton, getDefaultClassNames } from 'react-day-picker';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
      data-selected-single={isSelected}
      data-range-start={isRangeStart}
      data-range-end={isRangeEnd}
      data-range-middle={isRangeMiddle}
      className={cn(
        'lsd:flex lsd:aspect-square lsd:size-auto lsd:w-full lsd:min-w-(--cell-size) lsd:flex-col lsd:gap-[var(--lsd-spacing-smallest)] lsd:leading-none lsd:font-normal',
        'lsd:group-data-[focused=true]/day:lsd:relative lsd:group-data-[focused=true]/day:lsd:z-10',
        'lsd:group-data-[focused=true]/day:lsd:border-lsd-border lsd:group-data-[focused=true]/day:lsd:ring-[3px] lsd:group-data-[focused=true]/day:lsd:ring-lsd-text-primary/50',
        isRangeStart &&
          'lsd:rounded-md lsd:rounded-l-md lsd:bg-lsd-primary lsd:text-lsd-primary-foreground',
        isRangeEnd &&
          'lsd:rounded-md lsd:rounded-r-md lsd:bg-lsd-primary lsd:text-lsd-primary-foreground',
        isRangeMiddle && 'lsd:rounded-none lsd:bg-lsd-surface lsd:text-lsd-text-primary',
        isSelected && 'lsd:bg-lsd-primary lsd:text-lsd-primary-foreground',
        'dark:lsd:hover:lsd:text-lsd-text-primary',
        '[&>span]:lsd:text-xs [&>span]:lsd:opacity-70',
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
