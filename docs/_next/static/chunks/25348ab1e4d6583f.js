(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,12688,e=>{"use strict";var a=e.i(2582);e.i(82419);var o=e.i(42836),t=e.i(68256),n=e.i(38447),i=e.i(68869);let s=`import { Button, Typography } from '@nipsys/shadcn-lsd';
import { Toaster, toast } from 'sonner';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
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
}`;function l(){return(0,i.useSendThemeToIframes)(),(0,a.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,a.jsx)(n.Toaster,{}),(0,a.jsx)(t.Typography,{variant:"label1",children:"With Actions"}),(0,a.jsx)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base)",children:(0,a.jsx)(o.Button,{variant:"outlined",onClick:()=>(0,n.toast)("Event has been created",{action:{label:"Undo",onClick:()=>console.log("Undo clicked")}}),children:"Show with Action"})})]})}function c(){return(0,a.jsx)(l,{})}e.s(["CODE",0,s,"ToastActionsExample",()=>l,"default",()=>c])}]);