(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,44873,s=>{"use strict";var a=s.i(98134);s.i(26940);var e=s.i(22450),t=s.i(61417),o=s.i(54219),l=s.i(45173);let n=`import { Button, Typography } from '@nipsys/shadcn-lsd';
import { Toaster, toast } from 'sonner';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Toaster />

      <Typography variant="label1">Toast Types</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button variant="outlined" onClick={() => toast('Simple toast message')}>
          Show Simple Toast
        </Button>
        <Button
          variant="outlined"
          onClick={() => toast.success('Changes saved successfully!')}
        >
          Show Success Toast
        </Button>
      </div>
    </div>
  );
}`;function i(){return(0,l.useSendThemeToIframes)(),(0,a.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)",children:[(0,a.jsx)(o.Toaster,{}),(0,a.jsx)(t.Typography,{variant:"label1",children:"Toast Types"}),(0,a.jsxs)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base)",children:[(0,a.jsx)(e.Button,{variant:"outlined",onClick:()=>(0,o.toast)("Simple toast message"),children:"Show Simple Toast"}),(0,a.jsx)(e.Button,{variant:"outlined",onClick:()=>o.toast.success("Changes saved successfully!"),children:"Show Success Toast"})]})]})}function r(){return(0,a.jsx)(i,{})}s.s(["CODE",0,n,"SonnerExample",()=>i,"default",()=>r])}]);