import * as React from 'react';
import { DayPicker, getDefaultClassNames } from 'react-day-picker';
import { type Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CalendarDayButton } from './CalendarDayButton';

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>['variant'];
};

type CalendarRootProps = {
  className?: string;
  rootRef?: React.RefObject<HTMLDivElement>;
} & React.HTMLAttributes<HTMLDivElement>;

function CalendarRoot({ className, rootRef, ...props }: CalendarRootProps) {
  return <div data-slot="calendar" ref={rootRef} className={cn(className)} {...props} />;
}

const CalendarRootMemo = React.memo(CalendarRoot);

function CalendarDayButtonComponent(props: React.ComponentProps<typeof CalendarDayButton>) {
  return <CalendarDayButton {...props} />;
}

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = 'label',
  buttonVariant = 'ghost',
  formatters,
  components,
  ...props
}: CalendarProps) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        'lsd:group/calendar lsd:bg-lsd-surface lsd:p-[var(--lsd-spacing-base)] lsd:[--cell-size:--spacing(8)] [[data-slot=card-content]_&]:lsd:bg-transparent [[data-slot=popover-content]_&]:lsd:bg-transparent',
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: date => date.toLocaleString('default', { month: 'short' }),
        ...formatters,
      }}
      classNames={{
        root: cn('lsd:w-fit', defaultClassNames.root),
        months: cn(
          'lsd:relative lsd:flex lsd:flex-col lsd:gap-[var(--lsd-spacing-base)] md:lsd:flex-row',
          defaultClassNames.months
        ),
        month: cn(
          'lsd:flex lsd:w-full lsd:flex-col lsd:gap-[var(--lsd-spacing-base)]',
          defaultClassNames.month
        ),
        nav: cn(
          'lsd:absolute lsd:inset-x-0 lsd:top-0 lsd:flex lsd:w-full lsd:items-center lsd:justify-between lsd:gap-[var(--lsd-spacing-smaller)]',
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          'lsd:size-(--cell-size) lsd:p-0 lsd:select-none lsd:aria-disabled:lsd:opacity-50',
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          'lsd:size-(--cell-size) lsd:p-0 lsd:select-none lsd:aria-disabled:lsd:opacity-50',
          defaultClassNames.button_next
        ),
        table: 'lsd:w-full lsd:border-collapse',
        weekdays: cn('lsd:flex', defaultClassNames.weekdays),
        weekday: cn(
          'lsd:flex-1 lsd:rounded-md lsd:text-[0.8rem] lsd:font-normal lsd:text-lsd-text-secondary lsd:select-none',
          defaultClassNames.weekday
        ),
        week: cn('lsd:mt-2 lsd:flex lsd:w-full', defaultClassNames.week),
        day: cn(
          'lsd:group/day lsd:relative lsd:aspect-square lsd:h-full lsd:w-full lsd:p-0 lsd:text-center lsd:select-none [&:last-child[data-selected=true]_button]:lsd:rounded-r-md',
          props.showWeekNumber
            ? '[&:nth-child(2)[data-selected=true]_button]:lsd:rounded-l-md'
            : '[&:first-child[data-selected=true]_button]:lsd:rounded-l-md',
          defaultClassNames.day
        ),
        range_start: cn(
          'lsd:rounded-l-md lsd:bg-lsd-primary lsd:text-lsd-primary-foreground',
          defaultClassNames.range_start
        ),
        range_middle: cn('lsd:rounded-none', defaultClassNames.range_middle),
        range_end: cn(
          'lsd:rounded-r-md lsd:bg-lsd-primary lsd:text-lsd-primary-foreground',
          defaultClassNames.range_end
        ),
        today: cn('lsd:rounded-md lsd:bg-lsd-surface', defaultClassNames.today),
        outside: cn(
          'lsd:text-lsd-text-secondary lsd:aria-selected:lsd:text-lsd-text-secondary',
          defaultClassNames.outside
        ),
        disabled: cn('lsd:text-lsd-text-secondary lsd:opacity-50', defaultClassNames.disabled),
        hidden: cn('lsd:invisible', defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: CalendarRootMemo,
        DayButton: CalendarDayButtonComponent as React.ComponentType<Record<string, unknown>>,
        ...components,
      }}
      {...props}
    />
  );
}

export { Calendar };
export type { CalendarProps };
