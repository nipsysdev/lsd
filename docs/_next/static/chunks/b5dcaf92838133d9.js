(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,84596,e=>{"use strict";var t=e.i(98134);e.i(26940);var a=e.i(11435),s=e.i(75201);let n=`
import { Calendar } from '@nipsys/shadcn-lsd';
import { useState } from 'react';

export function CalendarWithValidation() {
  const [date, setDate] = useState<Date | undefined>();
  
  // Disable weekends
  const isWeekend = (date: Date) => {
    return date.getDay() === 0 || date.getDay() === 6;
  };
  
  // Disable specific dates (holidays)
  const holidays = [
    new Date(2025, 0, 1),  // New Year
    new Date(2025, 11, 25), // Christmas
  ];
  
  // Disable dates in the past
  const isPast = (date: Date) => {
    return date < new Date();
  };

  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm font-medium mb-2">Date Range Constraints</p>
        <p className="text-sm text-muted-foreground">
          Weekends, holidays, and past dates are disabled
        </p>
      </div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={[
          isWeekend,
          ...holidays,
          { from: new Date(2000, 0, 1), to: new Date() } // Past dates
        ]}
        fromMonth={new Date(2025, 0, 1)}
        toMonth={new Date(2025, 11, 31)}
        defaultMonth={new Date(2025, 0, 1)}
        initialFocus
        numberOfMonths={1}
      />
    </div>
  );
}
`;function d(){let[e,n]=(0,s.useState)(),d=[new Date(2025,0,1),new Date(2025,11,25)];return(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm font-medium mb-2",children:"Date Range Constraints"}),(0,t.jsx)("p",{className:"text-sm text-muted-foreground",children:"Weekends, holidays, and past dates are disabled"})]}),(0,t.jsx)(a.Calendar,{mode:"single",selected:e,onSelect:n,disabled:[e=>0===e.getDay()||6===e.getDay(),...d,{from:new Date(2e3,0,1),to:new Date}],fromMonth:new Date(2025,0,1),toMonth:new Date(2025,11,31),defaultMonth:new Date(2025,0,1),initialFocus:!0,numberOfMonths:1})]})}e.s(["CODE",0,n,"default",()=>d])}]);