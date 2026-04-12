'use client';

import { Calendar } from '@nipsys/shadcn-lsd';
import { useState } from 'react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `
import { Calendar } from '@nipsys/shadcn-lsd';
import { useState } from 'react';

export function CalendarFormControlled() {
  const [date, setDate] = useState<Date>(new Date());

  const handleDateChange = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
      console.log('Selected date:', selectedDate);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm font-medium mb-2">Selected Date</p>
        <p className="text-sm text-muted-foreground">
          {date ? date.toLocaleDateString() : 'No date selected'}
        </p>
      </div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={handleDateChange}
      />
    </div>
  );
}
`;

export default function Page() {
  useSendThemeToIframes();
  const [date, setDate] = useState<Date>(new Date());

  const handleDateChange = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
      console.log('Selected date:', selectedDate);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm font-medium mb-2">Selected Date</p>
        <p className="text-sm text-muted-foreground">
          {date ? date.toLocaleDateString() : 'No date selected'}
        </p>
      </div>
      <Calendar mode="single" selected={date} onSelect={handleDateChange} />
    </div>
  );
}
