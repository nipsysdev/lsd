(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,84312,e=>{"use strict";var s=e.i(98134);e.i(26940);var d=e.i(41366);function l(){return(0,s.jsx)("div",{className:"flex flex-col items-center justify-center p-8",children:(0,s.jsx)("div",{className:"w-full max-w-md space-y-6",children:(0,s.jsxs)("div",{className:"lsd:bg-lsd-base-surface lsd:rounded-lg lsd:p-6",children:[(0,s.jsx)("div",{className:"lsd:text-[0.875rem] lsd:leading-[1.5rem] lsd:font-medium lsd:text-lsd-text-primary lsd:mb-4 lsd:block",children:"Disabled Volume"}),(0,s.jsx)(d.Slider,{defaultValue:[50],max:100,step:1,disabled:!0}),(0,s.jsx)("p",{className:"lsd:text-[0.75rem] lsd:leading-[1.25rem] lsd:text-lsd-text-secondary lsd:mt-2",children:"This slider is disabled and cannot be interacted with."})]})})})}let t=`\`use client';

import { Slider } from 'https://cdn.jsdelivr.net/npm/@nipsys/shadcn-lsd@latest/+esm';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-md space-y-6">
        <div className="lsd:bg-lsd-base-surface lsd:rounded-lg lsd:p-6">
          <div className="lsd:text-[0.875rem] lsd:leading-[1.5rem] lsd:font-medium lsd:text-lsd-text-primary lsd:mb-4 lsd:block">
            Disabled Volume
          </div>
          <Slider defaultValue={[50]} max={100} step={1} disabled />
          <p className="lsd:text-[0.75rem] lsd:leading-[1.25rem] lsd:text-lsd-text-secondary lsd:mt-2">
            This slider is disabled and cannot be interacted with.
          </p>
        </div>
      </div>
    </div>
  );
}
`;e.s(["CODE",0,t,"default",()=>l])}]);