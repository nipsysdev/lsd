(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,89121,e=>{"use strict";var t=e.i(98134);e.i(26940);var a=e.i(11435),s=e.i(75201);let d=`
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
        initialFocus
      />
    </div>
  );
}
`;function l(){let[e,d]=(0,s.useState)(new Date);return(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm font-medium mb-2",children:"Selected Date"}),(0,t.jsx)("p",{className:"text-sm text-muted-foreground",children:e?e.toLocaleDateString():"No date selected"})]}),(0,t.jsx)(a.Calendar,{mode:"single",selected:e,onSelect:e=>{e&&d(e)},initialFocus:!0})]})}e.s(["CODE",0,d,"default",()=>l])}]);