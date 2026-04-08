(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,22186,e=>{"use strict";var s=e.i(98134);e.i(26940);var l=e.i(41366),t=e.i(75201);function d(){let[e,d]=t.useState([33]);return(0,s.jsx)("div",{className:"flex flex-col items-center justify-center p-8",children:(0,s.jsx)("div",{className:"w-full max-w-md space-y-6",children:(0,s.jsxs)("div",{className:"lsd:bg-lsd-base-surface lsd:rounded-lg lsd:p-6",children:[(0,s.jsx)("div",{className:"lsd:text-[0.875rem] lsd:leading-[1.5rem] lsd:font-medium lsd:text-lsd-text-primary lsd:mb-4 lsd:block",children:"Brightness"}),(0,s.jsx)(l.Slider,{value:e,onValueChange:d,max:100,step:1}),(0,s.jsxs)("p",{className:"lsd:text-[0.75rem] lsd:leading-[1.25rem] lsd:text-lsd-text-secondary lsd:mt-2",children:["Current value: ",e[0],"%"]})]})})})}let a=`\`use client\`;

import * as React from 'react';
import { Slider } from 'https://cdn.jsdelivr.net/npm/@nipsys/shadcn-lsd@latest/+esm';

export default function Page() {
  const [value, setValue] = React.useState([33]);

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-md space-y-6">
        <div className="lsd:bg-lsd-base-surface lsd:rounded-lg lsd:p-6">
          <div className="lsd:text-[0.875rem] lsd:leading-[1.5rem] lsd:font-medium lsd:text-lsd-text-primary lsd:mb-4 lsd:block">
            Brightness
          </div>
          <Slider
            value={value}
            onValueChange={setValue}
            max={100}
            step={1}
          />
          <p className="lsd:text-[0.75rem] lsd:leading-[1.25rem] lsd:text-lsd-text-secondary lsd:mt-2">
            Current value: {value[0]}%
          </p>
        </div>
      </div>
    </div>
  );
}
`;e.s(["CODE",0,a,"default",()=>d])}]);