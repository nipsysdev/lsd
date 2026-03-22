(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,66730,t=>{"use strict";var a=t.i(98134);t.i(26940);var o=t.i(22450),s=t.i(61417),e=t.i(54219),n=t.i(45173);let i=`import { Button, Typography } from '@nipsys/shadcn-lsd';
import { Toaster, toast } from 'sonner';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
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
        <Button variant="outlined" onClick={() => toast.error('Something went wrong!')}>
          Show Error Toast
        </Button>
        <Button
          variant="outlined"
          onClick={() => toast.warning('Please review your changes')}
        >
          Show Warning Toast
        </Button>
        <Button variant="outlined" onClick={() => toast.info('New feature available')}>
          Show Info Toast
        </Button>
      </div>
      <Toaster />
    </div>
  );
}`;function l(){return(0,n.useSendThemeToIframes)(),(0,a.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,a.jsx)(s.Typography,{variant:"label1",children:"Toast Types"}),(0,a.jsxs)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base)",children:[(0,a.jsx)(o.Button,{variant:"outlined",onClick:()=>(0,e.toast)("Simple toast message"),children:"Show Simple Toast"}),(0,a.jsx)(o.Button,{variant:"outlined",onClick:()=>e.toast.success("Changes saved successfully!"),children:"Show Success Toast"}),(0,a.jsx)(o.Button,{variant:"outlined",onClick:()=>e.toast.error("Something went wrong!"),children:"Show Error Toast"}),(0,a.jsx)(o.Button,{variant:"outlined",onClick:()=>e.toast.warning("Please review your changes"),children:"Show Warning Toast"}),(0,a.jsx)(o.Button,{variant:"outlined",onClick:()=>e.toast.info("New feature available"),children:"Show Info Toast"})]}),(0,a.jsx)(e.Toaster,{})]})}function r(){return(0,a.jsx)(l,{})}t.s(["CODE",0,i,"ToastTypesExample",()=>l,"default",()=>r])}]);