'use client';

import { Calendar } from '@nipsys/shadcn-lsd';
import { useState } from 'react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `
import { Calendar } from '@nipsys/shadcn-lsd';
import { useState } from 'react';

export function CalendarBasic() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="border"
    />
  );
}
`;

export default function Page() {
  useSendThemeToIframes();
  const [date, setDate] = useState<Date | undefined>(new Date());

  return <Calendar mode="single" selected={date} onSelect={setDate} className="border" />;
}
