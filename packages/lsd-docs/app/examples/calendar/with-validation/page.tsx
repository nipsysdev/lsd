'use client';

import { Calendar } from '@nipsys/lsd';
import { useState } from 'react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `
import { Calendar } from '@nipsys/lsd';
import { useState } from 'react';

export function CalendarWithValidation() {
  const [date, setDate] = useState<Date | undefined>();
  
  // Disable weekends
  const isWeekend = (date: Date) => {
    return date.getDay() === 0 || date.getDay() === 6;
  };

  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm font-medium mb-2">Date Range Constraints</p>
        <p className="text-sm text-muted-foreground">
          Weekends, and past dates are disabled
        </p>
      </div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={[
          isWeekend,
          { from: new Date(2000, 0, 1), to: new Date() } // Past dates
        ]}
        numberOfMonths={1}
      />
    </div>
  );
}
`;

export default function Page() {
  useSendThemeToIframes();
  const [date, setDate] = useState<Date | undefined>();

  const isWeekend = (date: Date) => {
    return date.getDay() === 0 || date.getDay() === 6;
  };

  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm font-medium mb-2">Date Range Constraints</p>
        <p className="text-sm text-muted-foreground">Weekends, and past dates are disabled</p>
      </div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={[isWeekend, { from: new Date(2000, 0, 1), to: new Date() }]}
        numberOfMonths={1}
      />
    </div>
  );
}
