(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,44780,e=>{"use strict";var a=e.i(98134);e.i(26940);var s=e.i(22450),o=e.i(61417),r=e.i(54219),i=e.i(45173);let t=`import { Button, Typography } from '@nipsys/shadcn-lsd';
import { Toaster, toast } from 'sonner';

export function Example() {
  const handlePromiseClick = () => {
    const promise = new Promise(resolve => setTimeout(() => resolve('Data loaded!'), 2000));
    toast.promise(promise, {
      loading: 'Loading...',
      success: data => String(data),
      error: 'Error loading data',
    });
  };

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Toaster />

      <Typography variant="label1">Promise-based Toasts</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button variant="outlined" onClick={handlePromiseClick}>
          Show Promise Toast
        </Button>
      </div>
    </div>
  );
}`;function l(){return(0,i.useSendThemeToIframes)(),(0,a.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,a.jsx)(r.Toaster,{}),(0,a.jsx)(o.Typography,{variant:"label1",children:"Promise-based Toasts"}),(0,a.jsx)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base)",children:(0,a.jsx)(s.Button,{variant:"outlined",onClick:()=>{let e=new Promise(e=>setTimeout(()=>e("Data loaded!"),2e3));r.toast.promise(e,{loading:"Loading...",success:e=>String(e),error:"Error loading data"})},children:"Show Promise Toast"})})]})}function n(){return(0,a.jsx)(l,{})}e.s(["CODE",0,t,"ToastPromiseExample",()=>l,"default",()=>n])}]);