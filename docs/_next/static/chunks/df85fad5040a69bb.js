(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,67793,a=>{"use strict";var t=a.i(98134);a.i(26940);var o=a.i(22450),n=a.i(61417),s=a.i(54219),i=a.i(45173);let e=`import { Button, Typography } from '@nipsys/shadcn-lsd';
import { Toaster, toast } from 'sonner';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Toaster />

      <Typography variant="label1">Custom Duration</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button
          variant="outlined"
          onClick={() => toast('Short duration', { duration: 2000 })}
        >
          2 seconds
        </Button>
        <Button
          variant="outlined"
          onClick={() => toast('Long duration', { duration: 10000 })}
        >
          10 seconds
        </Button>
      </div>
    </div>
  );
}`;function r(){return(0,i.useSendThemeToIframes)(),(0,t.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)",children:[(0,t.jsx)(s.Toaster,{}),(0,t.jsx)(n.Typography,{variant:"label1",children:"Custom Duration"}),(0,t.jsxs)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base)",children:[(0,t.jsx)(o.Button,{variant:"outlined",onClick:()=>(0,s.toast)("Short duration",{duration:2e3}),children:"2 seconds"}),(0,t.jsx)(o.Button,{variant:"outlined",onClick:()=>(0,s.toast)("Long duration",{duration:1e4}),children:"10 seconds"})]})]})}function l(){return(0,t.jsx)(r,{})}a.s(["CODE",0,e,"ToastDurationExample",()=>r,"default",()=>l])}]);