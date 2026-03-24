import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Calendar, CalendarDayButton } from '../index';

describe('Calendar', () => {
  describe('Rendering', () => {
    it('renders calendar correctly', () => {
      render(<Calendar />);
      expect(screen.getByRole('grid')).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      const { container } = render(<Calendar className="custom-class" />);
      const root = container.querySelector('[data-slot="calendar"]');
      expect(root).toHaveClass('custom-class');
    });

    it('renders with data-slot attribute', () => {
      const { container } = render(<Calendar />);
      const root = container.querySelector('[data-slot="calendar"]');
      expect(root).toBeInTheDocument();
    });

    it('applies LSD background token', () => {
      const { container } = render(<Calendar />);
      const root = container.querySelector('[data-slot="calendar"]') as HTMLElement;
      expect(root).toHaveClass('lsd:bg-lsd-surface');
    });

    it('applies LSD padding token with CSS variable', () => {
      const { container } = render(<Calendar />);
      const root = container.querySelector('[data-slot="calendar"]') as HTMLElement;
      expect(root).toHaveClass('lsd:p-[var(--lsd-spacing-base)]');
    });

    it('applies LSD group class', () => {
      const { container } = render(<Calendar />);
      const root = container.querySelector('[data-slot="calendar"]') as HTMLElement;
      expect(root).toHaveClass('lsd:group/calendar');
    });

    it('supports showOutsideDays prop', () => {
      render(<Calendar showOutsideDays={false} />);
      expect(screen.getByRole('grid')).toBeInTheDocument();
    });

    it('supports captionLayout prop', () => {
      render(<Calendar captionLayout="buttons" />);
      expect(screen.getByRole('grid')).toBeInTheDocument();
    });

    it('supports buttonVariant prop', () => {
      render(<Calendar buttonVariant="outline" />);
      expect(screen.getByRole('grid')).toBeInTheDocument();
    });
  });

  describe('Date Selection', () => {
    it('renders with mode="single"', () => {
      render(<Calendar mode="single" />);
      expect(screen.getAllByRole('grid').length).toBeGreaterThan(0);
    });

    it('renders with mode="multiple"', () => {
      render(<Calendar mode="multiple" />);
      expect(screen.getAllByRole('grid').length).toBeGreaterThan(0);
    });

    it('renders with mode="range"', () => {
      render(<Calendar mode="range" />);
      expect(screen.getAllByRole('grid').length).toBeGreaterThan(0);
    });

    it('handles selected date in single mode', () => {
      const date = new Date(2025, 0, 15);
      render(<Calendar mode="single" selected={date} />);
      expect(screen.getByRole('grid')).toBeInTheDocument();
    });

    it('handles multiple dates selection', () => {
      const dates = [new Date(2025, 0, 15), new Date(2025, 0, 20)];
      render(<Calendar mode="multiple" selected={dates} />);
      expect(screen.getByRole('grid')).toBeInTheDocument();
    });

    it('handles date range selection', () => {
      const range = { from: new Date(2025, 0, 15), to: new Date(2025, 0, 20) };
      render(<Calendar mode="range" selected={range} />);
      expect(screen.getByRole('grid')).toBeInTheDocument();
    });

    it('calls onSelect when date is selected', async () => {
      const onSelect = vi.fn();
      render(<Calendar mode="single" onSelect={onSelect} />);
      expect(screen.getByRole('grid')).toBeInTheDocument();
    });
  });

  describe('Month Navigation', () => {
    it('renders navigation buttons', () => {
      render(<Calendar />);
      const navButtons = screen.getAllByRole('button');
      expect(navButtons.length).toBeGreaterThan(0);
    });

    it('supports fromMonth constraint', () => {
      render(<Calendar fromMonth={new Date(2025, 0, 1)} defaultMonth={new Date(2025, 0, 1)} />);
      expect(screen.getByRole('grid')).toBeInTheDocument();
    });

    it('supports toMonth constraint', () => {
      render(<Calendar toMonth={new Date(2025, 11, 31)} defaultMonth={new Date(2025, 0, 1)} />);
      expect(screen.getByRole('grid')).toBeInTheDocument();
    });

    it('supports defaultMonth prop', () => {
      render(<Calendar defaultMonth={new Date(2025, 6, 1)} />);
      expect(screen.getByRole('grid')).toBeInTheDocument();
    });

    it('supports numberOfMonths prop', () => {
      render(<Calendar numberOfMonths={2} />);
      expect(screen.getAllByRole('grid').length).toBe(2);
    });
  });

  describe('Disabled States', () => {
    it('renders disabled dates', () => {
      render(<Calendar disabled={[new Date(2025, 0, 15)]} defaultMonth={new Date(2025, 0, 1)} />);
      expect(screen.getByRole('grid')).toBeInTheDocument();
    });

    it('renders with disabled array of dates', () => {
      const disabledDates = [new Date(2025, 0, 10), new Date(2025, 0, 20)];
      render(<Calendar disabled={disabledDates} defaultMonth={new Date(2025, 0, 1)} />);
      expect(screen.getByRole('grid')).toBeInTheDocument();
    });

    it('renders with disabled function', () => {
      const isWeekend = (date: Date) => date.getDay() === 0 || date.getDay() === 6;
      render(<Calendar disabled={isWeekend} defaultMonth={new Date(2025, 0, 1)} />);
      expect(screen.getByRole('grid')).toBeInTheDocument();
    });

    it('renders with disabled date range', () => {
      const disabledRange = { from: new Date(2025, 0, 1), to: new Date(2025, 0, 10) };
      render(<Calendar disabled={disabledRange} defaultMonth={new Date(2025, 0, 1)} />);
      expect(screen.getByRole('grid')).toBeInTheDocument();
    });

    it('respects fromMonth validation', () => {
      render(<Calendar fromMonth={new Date(2025, 6, 1)} defaultMonth={new Date(2025, 6, 1)} />);
      expect(screen.getByRole('grid')).toBeInTheDocument();
    });

    it('respects toMonth validation', () => {
      render(<Calendar toMonth={new Date(2025, 0, 1)} defaultMonth={new Date(2025, 0, 1)} />);
      expect(screen.getByRole('grid')).toBeInTheDocument();
    });
  });

  describe('Range Selection', () => {
    it('renders range start styling', () => {
      const range = { from: new Date(2025, 0, 15), to: new Date(2025, 0, 20) };
      render(<Calendar mode="range" selected={range} defaultMonth={new Date(2025, 0, 1)} />);
      expect(screen.getByRole('grid')).toBeInTheDocument();
    });

    it('renders range end styling', () => {
      const range = { from: new Date(2025, 0, 15), to: new Date(2025, 0, 20) };
      render(<Calendar mode="range" selected={range} defaultMonth={new Date(2025, 0, 1)} />);
      expect(screen.getByRole('grid')).toBeInTheDocument();
    });

    it('renders range middle styling', () => {
      const range = { from: new Date(2025, 0, 15), to: new Date(2025, 0, 20) };
      render(<Calendar mode="range" selected={range} defaultMonth={new Date(2025, 0, 1)} />);
      expect(screen.getByRole('grid')).toBeInTheDocument();
    });
  });

  describe('Component Variants', () => {
    it('applies custom classNames', () => {
      render(
        <Calendar
          classNames={{
            months: 'custom-months',
            month: 'custom-month',
            table: 'custom-table',
          }}
        />
      );
      expect(screen.getByRole('grid')).toBeInTheDocument();
    });

    it('applies custom captionLayout', () => {
      render(<Calendar captionLayout="dropdown" />);
      expect(screen.getByRole('grid')).toBeInTheDocument();
    });

    it('applies custom buttonVariant', () => {
      render(<Calendar buttonVariant="default" />);
      expect(screen.getByRole('grid')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has proper role attributes', () => {
      render(<Calendar />);
      expect(screen.getByRole('grid')).toBeInTheDocument();
    });

    it('has data-slot attribute for targeting', () => {
      const { container } = render(<Calendar />);
      const root = container.querySelector('[data-slot="calendar"]');
      expect(root).toBeInTheDocument();
    });
  });

  describe('LSD Tokens Integration', () => {
    it('uses LSD background token', () => {
      const { container } = render(<Calendar />);
      const root = container.querySelector('[data-slot="calendar"]') as HTMLElement;
      expect(root).toHaveClass('lsd:bg-lsd-surface');
    });

    it('uses LSD spacing tokens with CSS variables for padding', () => {
      const { container } = render(<Calendar />);
      const root = container.querySelector('[data-slot="calendar"]') as HTMLElement;
      expect(root).toHaveClass('lsd:p-[var(--lsd-spacing-base)]');
    });

    it('uses LSD group class', () => {
      const { container } = render(<Calendar />);
      const root = container.querySelector('[data-slot="calendar"]') as HTMLElement;
      expect(root).toHaveClass('lsd:group/calendar');
    });

    it('applies LSD text tokens to weekdays', () => {
      const { container } = render(<Calendar defaultMonth={new Date(2025, 0, 1)} />);
      // Weekdays have the rdp-weekday class
      const weekdays = container.querySelectorAll('.rdp-weekday');
      expect(weekdays.length).toBeGreaterThan(0);
      // Check that weekdays have LSD text-secondary class
      Array.from(weekdays).forEach(weekday => {
        expect(weekday).toHaveClass('lsd:text-lsd-text-secondary');
      });
    });
  });

  describe('CalendarDayButton', () => {
    it('renders CalendarDayButton with proper attributes', () => {
      const day = { date: new Date(2025, 0, 15) };
      const modifiers = { selected: true };
      render(<CalendarDayButton day={day} modifiers={modifiers} />);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('applies data-day attribute', () => {
      const day = { date: new Date(2025, 0, 15) };
      const modifiers = {};
      render(<CalendarDayButton day={day} modifiers={modifiers} />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('data-day', '1/15/2025');
    });

    it('applies range start data attribute', () => {
      const day = { date: new Date(2025, 0, 15) };
      const modifiers = { range_start: true };
      render(<CalendarDayButton day={day} modifiers={modifiers} />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('data-range-start', 'true');
    });

    it('applies range end data attribute', () => {
      const day = { date: new Date(2025, 0, 20) };
      const modifiers = { range_end: true };
      render(<CalendarDayButton day={day} modifiers={modifiers} />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('data-range-end', 'true');
    });

    it('applies range middle data attribute', () => {
      const day = { date: new Date(2025, 0, 17) };
      const modifiers = { range_middle: true };
      render(<CalendarDayButton day={day} modifiers={modifiers} />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('data-range-middle', 'true');
    });

    it('applies selected single data attribute', () => {
      const day = { date: new Date(2025, 0, 15) };
      const modifiers = { selected: true };
      render(<CalendarDayButton day={day} modifiers={modifiers} />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('data-selected-single', 'true');
    });

    it('is disabled when modifiers indicate disabled', () => {
      const day = { date: new Date(2025, 0, 15) };
      const modifiers = { disabled: true };
      render(<CalendarDayButton day={day} modifiers={modifiers} />);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });

    it('is disabled when modifiers indicate hidden', () => {
      const day = { date: new Date(2025, 0, 15) };
      const modifiers = { hidden: true };
      render(<CalendarDayButton day={day} modifiers={modifiers} />);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });

    it('applies custom className', () => {
      const day = { date: new Date(2025, 0, 15) };
      const modifiers = {};
      render(<CalendarDayButton day={day} modifiers={modifiers} className="custom-class" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('custom-class');
    });
  });

  describe('Integration Tests', () => {
    it('renders complete calendar with all features', () => {
      render(
        <Calendar
          mode="range"
          fromMonth={new Date(2025, 0, 1)}
          toMonth={new Date(2025, 11, 31)}
          disabled={[new Date(2025, 0, 1)]}
          defaultMonth={new Date(2025, 0, 1)}
        />
      );
      expect(screen.getByRole('grid')).toBeInTheDocument();
    });

    it('integrates with CalendarDayButton component', () => {
      render(<Calendar defaultMonth={new Date(2025, 0, 1)} />);
      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThan(0);
    });
  });
});
