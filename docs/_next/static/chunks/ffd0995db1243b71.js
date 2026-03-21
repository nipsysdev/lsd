(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,44780,a=>{"use strict";var e=a.i(98134);a.i(26940);var s=a.i(22450),o=a.i(61417),r=a.i(54219),i=a.i(45173);let t=`import { Button, Typography } from '@nipsys/shadcn-lsd';
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
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Toaster />

      <Typography variant="label1">Promise-based Toasts</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button variant="outlined" onClick={handlePromiseClick}>
          Show Promise Toast
        </Button>
      </div>
    </div>
  );
}`;function l(){return(0,i.useSendThemeToIframes)(),(0,e.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)",children:[(0,e.jsx)(r.Toaster,{}),(0,e.jsx)(o.Typography,{variant:"label1",children:"Promise-based Toasts"}),(0,e.jsx)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base)",children:(0,e.jsx)(s.Button,{variant:"outlined",onClick:()=>{let a=new Promise(a=>setTimeout(()=>a("Data loaded!"),2e3));r.toast.promise(a,{loading:"Loading...",success:a=>String(a),error:"Error loading data"})},children:"Show Promise Toast"})})]})}function n(){return(0,e.jsx)(l,{})}a.s(["CODE",0,t,"ToastPromiseExample",()=>l,"default",()=>n])}]);