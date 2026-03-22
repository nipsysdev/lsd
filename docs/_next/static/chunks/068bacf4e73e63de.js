(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,75125,t=>{"use strict";var o=t.i(98134);t.i(26940);var s=t.i(22450),i=t.i(61417),e=t.i(54219),a=t.i(45173);let n=`import { Button, Typography } from '@nipsys/shadcn-lsd';
import { Toaster, toast } from 'sonner';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Toaster />

      <Typography variant="label1">Toast Positions</Typography>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-(--lsd-spacing-base)">
        <Button
          variant="outlined"
          onClick={() => toast('Top-left toast', { position: 'top-left' })}
        >
          Top-Left
        </Button>
        <Button
          variant="outlined"
          onClick={() => toast('Top-center toast', { position: 'top-center' })}
        >
          Top-Center
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
          onClick={() => toast('Bottom-center toast', { position: 'bottom-center' })}
        >
          Bottom-Center
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
}`;function r(){return(0,a.useSendThemeToIframes)(),(0,o.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,o.jsx)(i.Typography,{variant:"h3",children:"Toast Position Examples"}),(0,o.jsx)(i.Typography,{variant:"body1",className:"text-(--lsd-text-secondary)",children:"Demonstrates different toast positioning options on the screen."}),(0,o.jsxs)("div",{className:"space-y-(--lsd-spacing-lg)",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(i.Typography,{variant:"label1",children:"Top Positions"}),(0,o.jsx)(i.Typography,{variant:"body2",className:"text-(--lsd-text-secondary) mb-(--lsd-spacing-base)",children:"Toasts that appear at the top of the screen."}),(0,o.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-(--lsd-spacing-base)",children:[(0,o.jsx)(s.Button,{variant:"outlined",onClick:()=>(0,e.toast)("Top-left toast message",{position:"top-left"}),children:"Top-Left"}),(0,o.jsx)(s.Button,{variant:"outlined",onClick:()=>(0,e.toast)("Top-center toast message",{position:"top-center"}),children:"Top-Center"}),(0,o.jsx)(s.Button,{variant:"outlined",onClick:()=>(0,e.toast)("Top-right toast message",{position:"top-right"}),children:"Top-Right"})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(i.Typography,{variant:"label1",children:"Bottom Positions"}),(0,o.jsx)(i.Typography,{variant:"body2",className:"text-(--lsd-text-secondary) mb-(--lsd-spacing-base)",children:"Toasts that appear at the bottom of the screen."}),(0,o.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-(--lsd-spacing-base)",children:[(0,o.jsx)(s.Button,{variant:"outlined",onClick:()=>(0,e.toast)("Bottom-left toast message",{position:"bottom-left"}),children:"Bottom-Left"}),(0,o.jsx)(s.Button,{variant:"outlined",onClick:()=>(0,e.toast)("Bottom-center toast message",{position:"bottom-center"}),children:"Bottom-Center"}),(0,o.jsx)(s.Button,{variant:"outlined",onClick:()=>(0,e.toast)("Bottom-right toast message",{position:"bottom-right"}),children:"Bottom-Right"})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(i.Typography,{variant:"label1",children:"Common Positions Demo"}),(0,o.jsx)(i.Typography,{variant:"body2",className:"text-(--lsd-text-secondary) mb-(--lsd-spacing-base)",children:"Test multiple toasts to see how they stack in different positions."}),(0,o.jsx)(s.Button,{variant:"filled",onClick:()=>{e.toast.success("First success toast",{position:"top-right"}),setTimeout(()=>e.toast.info("Second info toast",{position:"top-right"}),500),setTimeout(()=>e.toast.warning("Third warning toast",{position:"top-right"}),1e3)},children:"Show Multiple Toasts"})]})]}),(0,o.jsx)(e.Toaster,{})]})}function l(){return(0,o.jsx)(r,{})}t.s(["CODE",0,n,"PositionExample",()=>r,"default",()=>l])}]);