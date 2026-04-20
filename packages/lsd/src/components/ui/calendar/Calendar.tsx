import * as React from 'react';
import {
  type CustomComponents,
  DayPicker,
  type DayPickerProps,
  getDefaultClassNames,
} from 'react-day-picker';
import { type Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CalendarDayButton } from './CalendarDayButton';

/**
 * Calendar - Date picker component built on react-day-picker
 *
 * A flexible calendar component for selecting single dates, multiple dates, or date ranges. Supports custom styling, disabled dates, localization, and various display modes.
 *
 * @docSectionPageDescription
 * Interactive calendar for selecting single dates, multiple dates, or date ranges.
 *
 * @docSectionAbout
 * A flexible calendar component built on react-day-picker that supports single, multiple, and range selection modes. Includes navigation buttons, disabled date constraints, localization support, and customizable styling through React DayPicker props.
 *
 * @docSectionComposition
 * • Calendar - Main calendar component built on react-day-picker
 *   • CalendarDayButton - Button component for individual calendar days with selection and range styling
 *
 * @docSectionAccessibilityKeyboard
 * • Arrow keys - Navigate between days
 * • Page Up/Down - Navigate between months
 * • Home/End - Navigate to first/last day of month
 * • Enter or Space - Select a day
 * • Tab - Navigate into/out of calendar
 *
 * @docSectionAccessibilityAria
 * • role="grid" on the calendar container
 * • role="gridcell" and aria-label on each day button
 * • aria-selected indicates selected dates
 * • aria-disabled indicates disabled dates
 * • aria-describedby links to supporting text
 *
 * @docSectionAccessibilityFocus
 * Arrow key navigation moves focus between grid cells. Tab focus moves into the calendar. Enter or Space activates the focused day.
 *
 * @exportAs root
 */

export type CalendarProps = DayPickerProps & {
  /**
   * Button variant for calendar navigation buttons.
   */
  buttonVariant?: React.ComponentProps<typeof Button>['variant'];
  /**
   * Optional className for the calendar wrapper.
   */
  className?: string;
};

type CalendarRootProps = {
  className?: string;
  rootRef?: React.Ref<HTMLDivElement>;
} & React.HTMLAttributes<HTMLDivElement>;

function CalendarRoot({ className, rootRef, ...props }: CalendarRootProps) {
  return <div data-slot="calendar" ref={rootRef} className={cn(className)} {...props} />;
}

const CalendarRootMemo = React.memo(CalendarRoot) as React.ComponentType<
  { rootRef?: React.Ref<HTMLDivElement> } & React.HTMLAttributes<HTMLDivElement>
>;

const CalendarDayButtonComponent = CalendarDayButton;

function Calendar({ buttonVariant = 'ghost', ...props }: CalendarProps) {
  const {
    className,
    classNames,
    showOutsideDays = true,
    captionLayout = 'label',
    formatters,
    components,
    showWeekNumber,
    ...dayPickerProps
  } = props;

  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        'lsd:group/calendar lsd:bg-lsd-surface lsd:p-(--lsd-spacing-base) lsd:[--cell-size:--spacing(8)] [[data-slot=card-content]_&]:lsd:bg-transparent [[data-slot=popover-content]_&]:lsd:bg-transparent',
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
        root: cn('lsd:size-fit', defaultClassNames.root),
        months: cn(
          'lsd:relative lsd:flex lsd:flex-col lsd:gap-[var(--lsd-spacing-base)] md:lsd:flex-row',
          defaultClassNames.months
        ),
        month: cn(
          'lsd:flex lsd:w-full lsd:flex-col lsd:gap-[var(--lsd-spacing-base)] lsd:text-center',
          defaultClassNames.month
        ),
        nav: cn(
          'lsd:absolute lsd:inset-x-0 lsd:top-0 lsd:flex lsd:w-full lsd:items-center lsd:justify-between lsd:gap-[var(--lsd-spacing-smaller)]',
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          'lsd:size-6 lsd:p-0 lsd:select-none lsd:aria-disabled:lsd:opacity-50',
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          'lsd:size-6 lsd:p-0 lsd:select-none lsd:aria-disabled:lsd:opacity-50',
          defaultClassNames.button_next
        ),
        table: 'lsd:w-full lsd:border-collapse',
        weekdays: cn('lsd:flex', defaultClassNames.weekdays),
        weekday: cn(
          'lsd:flex-1 lsd:rounded-md lsd:font-normal lsd:text-lsd-text-secondary lsd:text-center lsd:select-none lsd:lsd-typography-label1',
          defaultClassNames.weekday
        ),
        week: cn(
          'lsd:mt-[var(--lsd-spacing-smaller)] lsd:flex lsd:w-full lsd:text-center',
          defaultClassNames.week
        ),
        day: cn(
          'lsd:group/day lsd:relative lsd:aspect-square lsd:h-full lsd:w-full lsd:text-center lsd:p-0 lsd:text-center lsd:select-none [&:last-child[data-selected=true]_button]:lsd:rounded-r-md',
          showWeekNumber
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
      components={
        {
          Root: CalendarRootMemo,
          DayButton: CalendarDayButtonComponent,
          ...components,
        } as CustomComponents
      }
      {...dayPickerProps}
    />
  );
}

Calendar.displayName = 'Calendar';

export { Calendar };
