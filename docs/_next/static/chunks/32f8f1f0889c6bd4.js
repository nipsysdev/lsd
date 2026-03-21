(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,43265,s=>{"use strict";var t=s.i(98134);s.i(26940);var a=s.i(22450),i=s.i(61417),e=s.i(54219),o=s.i(45173);let n=`import { Button, Typography } from '@nipsys/shadcn-lsd';
import { Toaster, toast } from 'sonner';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Toaster />

      <Typography variant="label1">Persistent Toasts</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button
          variant="outlined"
          onClick={() =>
            toast('This toast will not auto-dismiss', {
              duration: Number.POSITIVE_INFINITY,
            })
          }
        >
          Show Persistent Toast
        </Button>
        <Button variant="outlined" onClick={() => toast.dismiss()}>
          Dismiss All Toasts
        </Button>
      </div>
    </div>
  );
}`;function l(){return(0,o.useSendThemeToIframes)(),(0,t.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)",children:[(0,t.jsx)(e.Toaster,{}),(0,t.jsx)(i.Typography,{variant:"label1",children:"Persistent Toasts"}),(0,t.jsxs)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base)",children:[(0,t.jsx)(a.Button,{variant:"outlined",onClick:()=>(0,e.toast)("This toast will not auto-dismiss",{duration:1/0}),children:"Show Persistent Toast"}),(0,t.jsx)(a.Button,{variant:"outlined",onClick:()=>e.toast.dismiss(),children:"Dismiss All Toasts"})]})]})}function r(){return(0,t.jsx)(l,{})}s.s(["CODE",0,n,"ToastPersistentExample",()=>l,"default",()=>r])}]);