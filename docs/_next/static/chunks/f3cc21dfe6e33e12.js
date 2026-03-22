(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57230,t=>{"use strict";var o=t.i(98134);t.i(26940);var i=t.i(22450),s=t.i(61417),a=t.i(54219),n=t.i(45173);let e=`import { Button, Typography } from '@nipsys/shadcn-lsd';
import { Toaster, toast } from 'sonner';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Toaster />

      <Typography variant="label1">Positioned Toasts</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button
          variant="outlined"
          onClick={() => toast('Top-left toast', { position: 'top-left' })}
        >
          Top-Left
        </Button>
        <Button
          variant="outlined"
          onClick={() => toast('Top-right toast', { position: 'top-right' })}
        >
          Top-Right
        </Button>
        <Button
          variant="outlined"
          onClick={() => toast('Bottom-left toast', { position: 'bottom-left' })}
        >
          Bottom-Left
        </Button>
        <Button
          variant="outlined"
          onClick={() => toast('Bottom-right toast', { position: 'bottom-right' })}
        >
          Bottom-Right
        </Button>
      </div>
    </div>
  );
}`;function l(){return(0,n.useSendThemeToIframes)(),(0,o.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,o.jsx)(a.Toaster,{}),(0,o.jsx)(s.Typography,{variant:"label1",children:"Positioned Toasts"}),(0,o.jsxs)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base)",children:[(0,o.jsx)(i.Button,{variant:"outlined",onClick:()=>(0,a.toast)("Top-left toast",{position:"top-left"}),children:"Top-Left"}),(0,o.jsx)(i.Button,{variant:"outlined",onClick:()=>(0,a.toast)("Top-right toast",{position:"top-right"}),children:"Top-Right"}),(0,o.jsx)(i.Button,{variant:"outlined",onClick:()=>(0,a.toast)("Bottom-left toast",{position:"bottom-left"}),children:"Bottom-Left"}),(0,o.jsx)(i.Button,{variant:"outlined",onClick:()=>(0,a.toast)("Bottom-right toast",{position:"bottom-right"}),children:"Bottom-Right"})]})]})}function r(){return(0,o.jsx)(l,{})}t.s(["CODE",0,e,"ToastPositionsExample",()=>l,"default",()=>r])}]);