(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,32200,e=>{"use strict";var t=e.i(98134);e.i(26940);var a=e.i(11435),d=e.i(75201);let n=`
import { Calendar } from '@nipsys/shadcn-lsd';
import { useState } from 'react';

export function CalendarBasic() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
}
`;function r(){let[e,n]=(0,d.useState)(new Date);return(0,t.jsx)(a.Calendar,{mode:"single",selected:e,onSelect:n,className:"rounded-md border"})}e.s(["CODE",0,n,"default",()=>r])}]);