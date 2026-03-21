(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45910,s=>{"use strict";var e=s.i(98134);s.i(26940);var a=s.i(22450),t=s.i(61417),l=s.i(54219),i=s.i(45173);let n=`import { Button, Typography } from '@nipsys/shadcn-lsd';
import { Toaster, toast } from 'sonner';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Toaster />

      <Typography variant="label1">Rich Toasts</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button
          variant="outlined"
          onClick={() =>
            toast(
              <div>
                <h4 className="lsd:font-semibold">Event Created</h4>
                <p className="lsd:text-sm">Your event has been created successfully.</p>
              </div>,
              {
                duration: 5000,
              }
            )
          }
        >
          Show Rich Toast
        </Button>
      </div>
    </div>
  );
}`;function o(){return(0,i.useSendThemeToIframes)(),(0,e.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)",children:[(0,e.jsx)(l.Toaster,{}),(0,e.jsx)(t.Typography,{variant:"label1",children:"Rich Toasts"}),(0,e.jsx)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base)",children:(0,e.jsx)(a.Button,{variant:"outlined",onClick:()=>(0,l.toast)((0,e.jsxs)("div",{children:[(0,e.jsx)("h4",{className:"lsd:font-semibold",children:"Event Created"}),(0,e.jsx)("p",{className:"lsd:text-sm",children:"Your event has been created successfully."})]}),{duration:5e3}),children:"Show Rich Toast"})})]})}function r(){return(0,e.jsx)(o,{})}s.s(["CODE",0,n,"ToastRichExample",()=>o,"default",()=>r])}]);