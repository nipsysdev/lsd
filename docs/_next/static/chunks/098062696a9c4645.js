(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,72689,t=>{"use strict";var a=t.i(2582);t.i(82419);var o=t.i(42836),n=t.i(68256),s=t.i(38447),i=t.i(68869);let e=`import { Button, Typography } from '@nipsys/shadcn-lsd';
import { Toaster, toast } from 'sonner';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
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
}`;function r(){return(0,i.useSendThemeToIframes)(),(0,a.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,a.jsx)(s.Toaster,{}),(0,a.jsx)(n.Typography,{variant:"label1",children:"Custom Duration"}),(0,a.jsxs)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base)",children:[(0,a.jsx)(o.Button,{variant:"outlined",onClick:()=>(0,s.toast)("Short duration",{duration:2e3}),children:"2 seconds"}),(0,a.jsx)(o.Button,{variant:"outlined",onClick:()=>(0,s.toast)("Long duration",{duration:1e4}),children:"10 seconds"})]})]})}function l(){return(0,a.jsx)(r,{})}t.s(["CODE",0,e,"ToastDurationExample",()=>r,"default",()=>l])}]);