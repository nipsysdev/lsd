(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,46402,e=>{"use strict";var s=e.i(45171);e.s(["Input",()=>s.I])},25758,e=>{"use strict";var s=e.i(98134);e.i(26940);var a=e.i(22450),t=e.i(46402),l=e.i(61417),o=e.i(75201),i=e.i(54219),n=e.i(45173);let r=`import { Button, Typography, Input } from '@nipsys/shadcn-lsd';
import { Toaster, toast } from 'sonner';
import { useState } from 'react';

export function Example() {
  const [filename, setFilename] = useState('');
  
  const handleUpload = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.3) {
          resolve('File uploaded successfully');
        } else {
          reject(new Error('Upload failed'));
        }
      }, 2000);
    });
  };

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Toaster />

      <Typography variant="label1">Rich Content Toast</Typography>
      <Button
        variant="outlined"
        onClick={() => {
          toast(
            <div className="flex items-center gap-(--lsd-spacing-smaller)">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div>
                <p className="font-semibold">Upload Complete</p>
                <p className="text-sm text-gray-600">Your file has been processed</p>
              </div>
            </div>,
            {
              duration: 5000,
              action: {
                label: 'View',
                onClick: () => console.log('View uploaded file'),
              },
            }
          );
        }}
      >
        Show Rich Content Toast
      </Button>

      <Typography variant="label1">Promise Toast</Typography>
      <Input
        placeholder="Enter filename"
        value={filename}
        onChange={(e) => setFilename(e.target.value)}
        className="mb-(--lsd-spacing-smaller)"
      />
      <Button
        variant="outlined"
        disabled={!filename}
        onClick={() => {
          toast.promise(
            handleUpload(),
            {
              loading: \`Uploading \${filename}...\`,
              success: (data) => \`\${data}: \${filename}\`,
              error: (error) => \`Failed to upload \${filename}: \${error.message}\`,
            }
          );
        }}
      >
        Upload with Promise
      </Button>
    </div>
  );
}`;function d(){let[e,r]=(0,o.useState)(""),d=async()=>new Promise((e,s)=>{setTimeout(()=>{Math.random()>.3?e("File uploaded successfully"):s(Error("Upload failed"))},2e3)});return(0,n.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(l.Typography,{variant:"h3",children:"Custom Toast Examples"}),(0,s.jsx)(l.Typography,{variant:"body1",className:"text-(--lsd-text-secondary)",children:"Demonstrates rich content, custom styling, and promise-based toasts."}),(0,s.jsxs)("div",{className:"space-y-(--lsd-spacing-lg)",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(l.Typography,{variant:"label1",children:"Rich Content Toast with Custom Styling"}),(0,s.jsx)(l.Typography,{variant:"body2",className:"text-(--lsd-text-secondary) mb-(--lsd-spacing-base)",children:"Custom JSX content with inline styles and action buttons."}),(0,s.jsx)(a.Button,{variant:"outlined",onClick:()=>{(0,i.toast)((0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsx)("div",{className:"w-3 h-3 bg-green-500 rounded-full shrink-0"}),(0,s.jsxs)("div",{className:"flex-1",children:[(0,s.jsx)("p",{className:"font-semibold text-gray-900",children:"Upload Complete"}),(0,s.jsx)("p",{className:"text-sm text-gray-600",children:"Your file has been processed and is ready to view"})]})]}),{duration:5e3,className:"border border-green-200",action:{label:"View",onClick:()=>console.log("View uploaded file")}})},children:"Show Rich Content Toast"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(l.Typography,{variant:"label1",children:"Toast with Custom Icon"}),(0,s.jsx)(l.Typography,{variant:"body2",className:"text-(--lsd-text-secondary) mb-(--lsd-spacing-base)",children:"Toast with custom visual elements and different styling."}),(0,s.jsx)(a.Button,{variant:"outlined",onClick:()=>{(0,i.toast)((0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsx)("div",{className:"w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center",children:(0,s.jsx)("span",{className:"text-blue-600 text-sm",children:"📧"})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"font-semibold text-gray-900",children:"Email Sent"}),(0,s.jsx)("p",{className:"text-sm text-gray-600",children:"Message delivered to recipient"})]})]}),{className:"border border-blue-200 bg-blue-50"})},children:"Show Custom Icon Toast"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(l.Typography,{variant:"label1",children:"Promise-based Toast"}),(0,s.jsx)(l.Typography,{variant:"body2",className:"text-(--lsd-text-secondary) mb-(--lsd-spacing-base)",children:"Upload simulation with loading, success, and error states."}),(0,s.jsx)(t.Input,{placeholder:"Enter filename to upload",value:e,onChange:e=>r(e.target.value),className:"mb-(--lsd-spacing-base) max-w-sm"}),(0,s.jsx)(a.Button,{variant:"outlined",disabled:!e,onClick:()=>{i.toast.promise(d(),{loading:`Uploading ${e}...`,success:s=>`${s}: ${e}`,error:s=>`Failed to upload ${e}: ${s.message}`})},children:"Upload with Promise"})]})]}),(0,s.jsx)(i.Toaster,{})]})}function c(){return(0,s.jsx)(d,{})}e.s(["CODE",0,r,"CustomExample",()=>d,"default",()=>c])}]);