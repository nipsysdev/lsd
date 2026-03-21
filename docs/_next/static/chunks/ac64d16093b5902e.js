(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,28531,e=>{"use strict";var a=e.i(98134);e.i(26940);var o=e.i(22450),n=e.i(61417),s=e.i(54219),t=e.i(45173);let i=`import { Button, Typography } from '@nipsys/shadcn-lsd';
import { Toaster, toast } from 'sonner';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Toaster />

      <Typography variant="label1">With Actions</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button
          variant="outlined"
          onClick={() =>
            toast('Event has been created', {
              action: {
                label: 'Undo',
                onClick: () => console.log('Undo clicked'),
              },
            })
          }
        >
          Show with Action
        </Button>
      </div>
    </div>
  );
}`;function l(){return(0,t.useSendThemeToIframes)(),(0,a.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)",children:[(0,a.jsx)(s.Toaster,{}),(0,a.jsx)(n.Typography,{variant:"label1",children:"With Actions"}),(0,a.jsx)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base)",children:(0,a.jsx)(o.Button,{variant:"outlined",onClick:()=>(0,s.toast)("Event has been created",{action:{label:"Undo",onClick:()=>console.log("Undo clicked")}}),children:"Show with Action"})})]})}function c(){return(0,a.jsx)(l,{})}e.s(["CODE",0,i,"ToastActionsExample",()=>l,"default",()=>c])}]);