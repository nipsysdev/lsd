(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,44873,s=>{"use strict";var e=s.i(98134);s.i(26940);var a=s.i(22450),t=s.i(61417),o=s.i(54219),n=s.i(45173);let i=`import { Button, Typography } from '@nipsys/shadcn-lsd';
import { Toaster, toast } from 'sonner';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
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
}`;function l(){return(0,n.useSendThemeToIframes)(),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.Toaster,{}),(0,e.jsx)(t.Typography,{variant:"label1",children:"Toast Types"}),(0,e.jsxs)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base)",children:[(0,e.jsx)(a.Button,{variant:"outlined",onClick:()=>(0,o.toast)("Simple toast message"),children:"Show Simple Toast"}),(0,e.jsx)(a.Button,{variant:"outlined",onClick:()=>o.toast.success("Changes saved successfully!"),children:"Show Success Toast"})]})]})}function r(){return(0,e.jsx)(l,{})}s.s(["CODE",0,i,"SonnerExample",()=>l,"default",()=>r])}]);