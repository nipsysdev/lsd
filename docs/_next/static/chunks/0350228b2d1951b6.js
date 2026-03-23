(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,66553,a=>{"use strict";var s=a.i(2582);a.i(82419);var o=a.i(42836),e=a.i(68256),t=a.i(38447),n=a.i(68869);let r=`import { Button, Typography } from '@nipsys/shadcn-lsd';
import { Toaster, toast } from 'sonner';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Toaster />

      <Typography variant="label1">Success Toast</Typography>
      <Button 
        variant="outlined" 
        onClick={() => toast.success('Operation completed successfully!')}
      >
        Show Success Toast
      </Button>

      <Typography variant="label1">Error Toast</Typography>
      <Button 
        variant="outlined" 
        onClick={() => toast.error('Something went wrong. Please try again.')}
      >
        Show Error Toast
      </Button>

      <Typography variant="label1">Warning Toast</Typography>
      <Button 
        variant="outlined" 
        onClick={() => toast.warning('Please review your input before proceeding.')}
      >
        Show Warning Toast
      </Button>

      <Typography variant="label1">Info Toast</Typography>
      <Button 
        variant="outlined" 
        onClick={() => toast.info('A new feature is now available!')}
      >
        Show Info Toast
      </Button>
    </div>
  );
}`;function i(){return(0,n.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(e.Typography,{variant:"h3",children:"Basic Toast Examples"}),(0,s.jsx)(e.Typography,{variant:"body1",className:"text-(--lsd-text-secondary)",children:"Demonstrates success, error, warning, and info toast notifications."}),(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-lg)",children:[(0,s.jsxs)("div",{className:"space-y-(--lsd-spacing-base)",children:[(0,s.jsx)(e.Typography,{variant:"label1",children:"Success Toast"}),(0,s.jsx)(o.Button,{variant:"outlined",onClick:()=>t.toast.success("Operation completed successfully!"),children:"Show Success Toast"})]}),(0,s.jsxs)("div",{className:"space-y-(--lsd-spacing-base)",children:[(0,s.jsx)(e.Typography,{variant:"label1",children:"Error Toast"}),(0,s.jsx)(o.Button,{variant:"outlined",onClick:()=>t.toast.error("Something went wrong. Please try again."),children:"Show Error Toast"})]}),(0,s.jsxs)("div",{className:"space-y-(--lsd-spacing-base)",children:[(0,s.jsx)(e.Typography,{variant:"label1",children:"Warning Toast"}),(0,s.jsx)(o.Button,{variant:"outlined",onClick:()=>t.toast.warning("Please review your input before proceeding."),children:"Show Warning Toast"})]}),(0,s.jsxs)("div",{className:"space-y-(--lsd-spacing-base)",children:[(0,s.jsx)(e.Typography,{variant:"label1",children:"Info Toast"}),(0,s.jsx)(o.Button,{variant:"outlined",onClick:()=>t.toast.info("A new feature is now available!"),children:"Show Info Toast"})]})]}),(0,s.jsx)(t.Toaster,{})]})}function l(){return(0,s.jsx)(i,{})}a.s(["BasicExample",()=>i,"CODE",0,r,"default",()=>l])}]);