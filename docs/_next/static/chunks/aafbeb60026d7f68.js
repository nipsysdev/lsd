(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,76041,e=>{"use strict";var s=e.i(98134);e.i(26940);var l=e.i(41366);function d(){return(0,s.jsx)("div",{className:"flex items-center justify-center p-8",children:(0,s.jsx)("div",{className:"h-64 w-full max-w-sm space-y-6",children:(0,s.jsx)("div",{className:"lsd:flex lsd:h-full lsd:items-center lsd:justify-center lsd:bg-lsd-base-surface lsd:rounded-lg lsd:p-6",children:(0,s.jsxs)("div",{className:"lsd:text-center",children:[(0,s.jsx)("div",{className:"lsd:text-[0.875rem] lsd:leading-[1.5rem] lsd:font-medium lsd:text-lsd-text-primary lsd:mb-4 lsd:block",children:"Temperature"}),(0,s.jsx)("div",{className:"lsd:h-48 lsd:w-16 lsd:mx-auto",children:(0,s.jsx)(l.Slider,{defaultValue:[22],min:0,max:40,step:1,orientation:"vertical"})}),(0,s.jsx)("p",{className:"lsd:text-[0.75rem] lsd:leading-[1.25rem] lsd:text-lsd-text-secondary lsd:mt-2",children:"22°C"})]})})})})}let t=`\`use client\`;

import { Slider } from 'https://cdn.jsdelivr.net/npm/@nipsys/shadcn-lsd@latest/+esm';

export default function Page() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="h-64 w-full max-w-sm space-y-6">
        <div className="lsd:flex lsd:h-full lsd:items-center lsd:justify-center lsd:bg-lsd-base-surface lsd:rounded-lg lsd:p-6">
          <div className="lsd:text-center">
            <div className="lsd:text-[0.875rem] lsd:leading-[1.5rem] lsd:font-medium lsd:text-lsd-text-primary lsd:mb-4 lsd:block">
              Temperature
            </div>
            <div className="lsd:h-48 lsd:w-16 lsd:mx-auto">
              <Slider defaultValue={[22]} min={0} max={40} step={1} orientation="vertical" />
            </div>
            <p className="lsd:text-[0.75rem] lsd:leading-[1.25rem] lsd:text-lsd-text-secondary lsd:mt-2">
              22\xb0C
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
`;e.s(["CODE",0,t,"default",()=>d])}]);