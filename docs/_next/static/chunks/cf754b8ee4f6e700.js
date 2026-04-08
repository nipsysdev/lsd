(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var s=e.i(75201);function a(){var e;let a;e=e=>{let s=document.documentElement;e.theme&&("dark"===e.theme?s.classList.add("dark"):s.classList.remove("dark")),e.accent&&("monochrome"===e.accent?s.removeAttribute("data-theme"):s.setAttribute("data-theme",e.accent)),e.font&&(s.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?s.classList.add("font-serif"):"sans-serif"===e.font?s.classList.add("font-sans"):"monospace"===e.font&&s.classList.add("font-mono"))},a=s.useRef(e),s.useEffect(()=>{a.current=e},[e]),s.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],45173)},90074,e=>{"use strict";var s=e.i(98134);e.i(26940);var a=e.i(71030),t=e.i(73463),o=e.i(2476),n=e.i(52683),i=e.i(59038),r=e.i(6896),l=e.i(75201),d=e.i(85082);let c=new Map([["bold",l.createElement(l.Fragment,null,l.createElement("path",{d:"M200,28H165.47a51.88,51.88,0,0,0-74.94,0H56A20,20,0,0,0,36,48V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V48A20,20,0,0,0,200,28ZM155.71,60H100.29a28,28,0,0,1,55.42,0ZM196,212H60V52H77.41A52.13,52.13,0,0,0,76,64v8A12,12,0,0,0,88,84h80a12,12,0,0,0,12-12V64a52.13,52.13,0,0,0-1.41-12H196Z"}))],["duotone",l.createElement(l.Fragment,null,l.createElement("path",{d:"M208,48V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96a39.83,39.83,0,0,0-8,24v8h80V64a39.83,39.83,0,0,0-8-24h40A8,8,0,0,1,208,48Z",opacity:"0.2"}),l.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"}))],["fill",l.createElement(l.Fragment,null,l.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Z"}))],["light",l.createElement(l.Fragment,null,l.createElement("path",{d:"M200,34H162.83a45.91,45.91,0,0,0-69.66,0H56A14,14,0,0,0,42,48V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V48A14,14,0,0,0,200,34Zm-72-4a34,34,0,0,1,34,34v2H94V64A34,34,0,0,1,128,30Zm74,186a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H85.67A45.77,45.77,0,0,0,82,64v8a6,6,0,0,0,6,6h80a6,6,0,0,0,6-6V64a45.77,45.77,0,0,0-3.67-18H200a2,2,0,0,1,2,2Z"}))],["regular",l.createElement(l.Fragment,null,l.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"}))],["thin",l.createElement(l.Fragment,null,l.createElement("path",{d:"M200,36H161.92a44,44,0,0,0-67.84,0H56A12,12,0,0,0,44,48V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V48A12,12,0,0,0,200,36Zm-72-8a36,36,0,0,1,36,36v4H92V64A36,36,0,0,1,128,28Zm76,188a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H88.83A43.71,43.71,0,0,0,84,64v8a4,4,0,0,0,4,4h80a4,4,0,0,0,4-4V64a43.71,43.71,0,0,0-4.83-20H200a4,4,0,0,1,4,4Z"}))]]),p=l.forwardRef((e,s)=>l.createElement(d.default,{ref:s,...e,weights:c}));p.displayName="ClipboardIcon";let m=new Map([["bold",l.createElement(l.Fragment,null,l.createElement("path",{d:"M71.68,97.22,34.74,128l36.94,30.78a12,12,0,1,1-15.36,18.44l-48-40a12,12,0,0,1,0-18.44l48-40A12,12,0,0,1,71.68,97.22Zm176,21.56-48-40a12,12,0,1,0-15.36,18.44L221.26,128l-36.94,30.78a12,12,0,1,0,15.36,18.44l48-40a12,12,0,0,0,0-18.44ZM164.1,28.72a12,12,0,0,0-15.38,7.18l-64,176a12,12,0,0,0,7.18,15.37A11.79,11.79,0,0,0,96,228a12,12,0,0,0,11.28-7.9l64-176A12,12,0,0,0,164.1,28.72Z"}))],["duotone",l.createElement(l.Fragment,null,l.createElement("path",{d:"M240,128l-48,40H64L16,128,64,88H192Z",opacity:"0.2"}),l.createElement("path",{d:"M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"}))],["fill",l.createElement(l.Fragment,null,l.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM92.8,145.6a8,8,0,1,1-9.6,12.8l-32-24a8,8,0,0,1,0-12.8l32-24a8,8,0,0,1,9.6,12.8L69.33,128Zm58.89-71.4-32,112a8,8,0,1,1-15.38-4.4l32-112a8,8,0,0,1,15.38,4.4Zm53.11,60.2-32,24a8,8,0,0,1-9.6-12.8L186.67,128,163.2,110.4a8,8,0,1,1,9.6-12.8l32,24a8,8,0,0,1,0,12.8Z"}))],["light",l.createElement(l.Fragment,null,l.createElement("path",{d:"M67.84,92.61,25.37,128l42.47,35.39a6,6,0,1,1-7.68,9.22l-48-40a6,6,0,0,1,0-9.22l48-40a6,6,0,0,1,7.68,9.22Zm176,30.78-48-40a6,6,0,1,0-7.68,9.22L230.63,128l-42.47,35.39a6,6,0,1,0,7.68,9.22l48-40a6,6,0,0,0,0-9.22Zm-81.79-89A6,6,0,0,0,154.36,38l-64,176A6,6,0,0,0,94,221.64a6.15,6.15,0,0,0,2,.36,6,6,0,0,0,5.64-3.95l64-176A6,6,0,0,0,162.05,34.36Z"}))],["regular",l.createElement(l.Fragment,null,l.createElement("path",{d:"M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"}))],["thin",l.createElement(l.Fragment,null,l.createElement("path",{d:"M66.56,91.07,22.25,128l44.31,36.93A4,4,0,0,1,64,172a3.94,3.94,0,0,1-2.56-.93l-48-40a4,4,0,0,1,0-6.14l48-40a4,4,0,0,1,5.12,6.14Zm176,33.86-48-40a4,4,0,1,0-5.12,6.14L233.75,128l-44.31,36.93a4,4,0,1,0,5.12,6.14l48-40a4,4,0,0,0,0-6.14ZM161.37,36.24a4,4,0,0,0-5.13,2.39l-64,176a4,4,0,0,0,2.39,5.13A4.12,4.12,0,0,0,96,220a4,4,0,0,0,3.76-2.63l64-176A4,4,0,0,0,161.37,36.24Z"}))]]),h=l.forwardRef((e,s)=>l.createElement(d.default,{ref:s,...e,weights:m}));h.displayName="CodeIcon";var x=e.i(54219);function u({code:e,useAccordion:l=!0}){let d=async()=>{try{await navigator.clipboard.writeText(e),x.toast.success("Code successfully copied to clipboard")}catch(e){x.toast.error("Failed to copy code to clipboard")}},c=(0,s.jsxs)("div",{className:"flex justify-between size-full relative group",children:[(0,s.jsx)(r.Typography,{variant:"subtitle3",className:"my-auto",children:(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"whitespace-break-spaces",children:e})})}),(0,s.jsx)(i.Button,{onClick:d,variant:"outlined",size:"square-md",className:"opacity-0 group-hover:opacity-100 transition-opacity","aria-label":"Copy code",children:(0,s.jsx)(p,{className:"size-4",weight:"duotone"})})]});return l?(0,s.jsx)(a.Accordion,{type:"single",collapsible:!0,children:(0,s.jsxs)(o.AccordionItem,{value:"code",children:[(0,s.jsx)(n.AccordionTrigger,{children:(0,s.jsxs)("div",{className:"flex items-center justify-center gap-x-(--lsd-spacing-base)",children:[(0,s.jsx)(h,{weight:"duotone",className:"size-5"})," View code"]})}),(0,s.jsx)(t.AccordionContent,{children:c})]})}):c}e.s(["CodeExample",()=>u],90074)},10337,e=>{"use strict";var s=e.i(98134);let a=(0,e.i(75201).forwardRef)(({src:e,title:a,size:t="md",className:o,...n},i)=>(0,s.jsx)("iframe",{ref:i,src:e,className:`${{sm:"min-h-[128px]",md:"min-h-[256px]",lg:"min-h-[450px]",xl:"min-h-[600px]"}[t]} w-full overflow-hidden`,title:a,...n}));a.displayName="IframeExample",e.s(["IframeExample",0,a])},28531,e=>{"use strict";var s=e.i(98134);e.i(26940);var a=e.i(59038),t=e.i(6896),o=e.i(54219),n=e.i(45173);let i=`import { Button, Typography } from '@nipsys/shadcn-lsd';
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
}`;function r(){return(0,n.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(o.Toaster,{}),(0,s.jsx)(t.Typography,{variant:"label1",children:"With Actions"}),(0,s.jsx)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base)",children:(0,s.jsx)(a.Button,{variant:"outlined",onClick:()=>(0,o.toast)("Event has been created",{action:{label:"Undo",onClick:()=>console.log("Undo clicked")}}),children:"Show with Action"})})]})}function l(){return(0,s.jsx)(r,{})}e.s(["CODE",0,i,"ToastActionsExample",()=>r,"default",()=>l])},44780,e=>{"use strict";var s=e.i(98134);e.i(26940);var a=e.i(59038),t=e.i(6896),o=e.i(54219),n=e.i(45173);let i=`import { Button, Typography } from '@nipsys/shadcn-lsd';
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
}`;function r(){return(0,n.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(o.Toaster,{}),(0,s.jsx)(t.Typography,{variant:"label1",children:"Promise-based Toasts"}),(0,s.jsx)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base)",children:(0,s.jsx)(a.Button,{variant:"outlined",onClick:()=>{let e=new Promise(e=>setTimeout(()=>e("Data loaded!"),2e3));o.toast.promise(e,{loading:"Loading...",success:e=>String(e),error:"Error loading data"})},children:"Show Promise Toast"})})]})}function l(){return(0,s.jsx)(r,{})}e.s(["CODE",0,i,"ToastPromiseExample",()=>r,"default",()=>l])},43265,e=>{"use strict";var s=e.i(98134);e.i(26940);var a=e.i(59038),t=e.i(6896),o=e.i(54219),n=e.i(45173);let i=`import { Button, Typography } from '@nipsys/shadcn-lsd';
import { Toaster, toast } from 'sonner';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
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
}`;function r(){return(0,n.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(o.Toaster,{}),(0,s.jsx)(t.Typography,{variant:"label1",children:"Persistent Toasts"}),(0,s.jsxs)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base)",children:[(0,s.jsx)(a.Button,{variant:"outlined",onClick:()=>(0,o.toast)("This toast will not auto-dismiss",{duration:1/0}),children:"Show Persistent Toast"}),(0,s.jsx)(a.Button,{variant:"outlined",onClick:()=>o.toast.dismiss(),children:"Dismiss All Toasts"})]})]})}function l(){return(0,s.jsx)(r,{})}e.s(["CODE",0,i,"ToastPersistentExample",()=>r,"default",()=>l])},67793,e=>{"use strict";var s=e.i(98134);e.i(26940);var a=e.i(59038),t=e.i(6896),o=e.i(54219),n=e.i(45173);let i=`import { Button, Typography } from '@nipsys/shadcn-lsd';
import { Toaster, toast } from 'sonner';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Toaster />

      <Typography variant="label1">Custom Duration</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button
          variant="outlined"
          onClick={() => toast('Short duration', { duration: 2000 })}
        >
          2 seconds
        </Button>
        <Button
          variant="outlined"
          onClick={() => toast('Long duration', { duration: 10000 })}
        >
          10 seconds
        </Button>
      </div>
    </div>
  );
}`;function r(){return(0,n.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(o.Toaster,{}),(0,s.jsx)(t.Typography,{variant:"label1",children:"Custom Duration"}),(0,s.jsxs)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base)",children:[(0,s.jsx)(a.Button,{variant:"outlined",onClick:()=>(0,o.toast)("Short duration",{duration:2e3}),children:"2 seconds"}),(0,s.jsx)(a.Button,{variant:"outlined",onClick:()=>(0,o.toast)("Long duration",{duration:1e4}),children:"10 seconds"})]})]})}function l(){return(0,s.jsx)(r,{})}e.s(["CODE",0,i,"ToastDurationExample",()=>r,"default",()=>l])},45910,e=>{"use strict";var s=e.i(98134);e.i(26940);var a=e.i(59038),t=e.i(6896),o=e.i(54219),n=e.i(45173);let i=`import { Button, Typography } from '@nipsys/shadcn-lsd';
import { Toaster, toast } from 'sonner';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
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
}`;function r(){return(0,n.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(o.Toaster,{}),(0,s.jsx)(t.Typography,{variant:"label1",children:"Rich Toasts"}),(0,s.jsx)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base)",children:(0,s.jsx)(a.Button,{variant:"outlined",onClick:()=>(0,o.toast)((0,s.jsxs)("div",{children:[(0,s.jsx)("h4",{className:"lsd:font-semibold",children:"Event Created"}),(0,s.jsx)("p",{className:"lsd:text-sm",children:"Your event has been created successfully."})]}),{duration:5e3}),children:"Show Rich Toast"})})]})}function l(){return(0,s.jsx)(r,{})}e.s(["CODE",0,i,"ToastRichExample",()=>r,"default",()=>l])},66730,e=>{"use strict";var s=e.i(98134);e.i(26940);var a=e.i(59038),t=e.i(6896),o=e.i(54219),n=e.i(45173);let i=`import { Button, Typography } from '@nipsys/shadcn-lsd';
import { Toaster, toast } from 'sonner';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Toast Types</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button variant="outlined" onClick={() => toast('Simple toast message')}>
          Show Simple Toast
        </Button>
        <Button
          variant="outlined"
          onClick={() => toast.success('Changes saved successfully!')}
        >
          Show Success Toast
        </Button>
        <Button variant="outlined" onClick={() => toast.error('Something went wrong!')}>
          Show Error Toast
        </Button>
        <Button
          variant="outlined"
          onClick={() => toast.warning('Please review your changes')}
        >
          Show Warning Toast
        </Button>
        <Button variant="outlined" onClick={() => toast.info('New feature available')}>
          Show Info Toast
        </Button>
      </div>
      <Toaster />
    </div>
  );
}`;function r(){return(0,n.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(t.Typography,{variant:"label1",children:"Toast Types"}),(0,s.jsxs)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base)",children:[(0,s.jsx)(a.Button,{variant:"outlined",onClick:()=>(0,o.toast)("Simple toast message"),children:"Show Simple Toast"}),(0,s.jsx)(a.Button,{variant:"outlined",onClick:()=>o.toast.success("Changes saved successfully!"),children:"Show Success Toast"}),(0,s.jsx)(a.Button,{variant:"outlined",onClick:()=>o.toast.error("Something went wrong!"),children:"Show Error Toast"}),(0,s.jsx)(a.Button,{variant:"outlined",onClick:()=>o.toast.warning("Please review your changes"),children:"Show Warning Toast"}),(0,s.jsx)(a.Button,{variant:"outlined",onClick:()=>o.toast.info("New feature available"),children:"Show Info Toast"})]}),(0,s.jsx)(o.Toaster,{})]})}function l(){return(0,s.jsx)(r,{})}e.s(["CODE",0,i,"ToastTypesExample",()=>r,"default",()=>l])},57230,e=>{"use strict";var s=e.i(98134);e.i(26940);var a=e.i(59038),t=e.i(6896),o=e.i(54219),n=e.i(45173);let i=`import { Button, Typography } from '@nipsys/shadcn-lsd';
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
}`;function r(){return(0,n.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(o.Toaster,{}),(0,s.jsx)(t.Typography,{variant:"label1",children:"Positioned Toasts"}),(0,s.jsxs)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base)",children:[(0,s.jsx)(a.Button,{variant:"outlined",onClick:()=>(0,o.toast)("Top-left toast",{position:"top-left"}),children:"Top-Left"}),(0,s.jsx)(a.Button,{variant:"outlined",onClick:()=>(0,o.toast)("Top-right toast",{position:"top-right"}),children:"Top-Right"}),(0,s.jsx)(a.Button,{variant:"outlined",onClick:()=>(0,o.toast)("Bottom-left toast",{position:"bottom-left"}),children:"Bottom-Left"}),(0,s.jsx)(a.Button,{variant:"outlined",onClick:()=>(0,o.toast)("Bottom-right toast",{position:"bottom-right"}),children:"Bottom-Right"})]})]})}function l(){return(0,s.jsx)(r,{})}e.s(["CODE",0,i,"ToastPositionsExample",()=>r,"default",()=>l])},67531,e=>{"use strict";var s=e.i(98134);e.i(26940);var a=e.i(59038),t=e.i(6896),o=e.i(54219),n=e.i(45173);let i=`import { Button, Typography } from '@nipsys/shadcn-lsd';
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
}`;function r(){return(0,n.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(t.Typography,{variant:"h3",children:"Basic Toast Examples"}),(0,s.jsx)(t.Typography,{variant:"body1",className:"text-(--lsd-text-secondary)",children:"Demonstrates success, error, warning, and info toast notifications."}),(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-lg)",children:[(0,s.jsxs)("div",{className:"space-y-(--lsd-spacing-base)",children:[(0,s.jsx)(t.Typography,{variant:"label1",children:"Success Toast"}),(0,s.jsx)(a.Button,{variant:"outlined",onClick:()=>o.toast.success("Operation completed successfully!"),children:"Show Success Toast"})]}),(0,s.jsxs)("div",{className:"space-y-(--lsd-spacing-base)",children:[(0,s.jsx)(t.Typography,{variant:"label1",children:"Error Toast"}),(0,s.jsx)(a.Button,{variant:"outlined",onClick:()=>o.toast.error("Something went wrong. Please try again."),children:"Show Error Toast"})]}),(0,s.jsxs)("div",{className:"space-y-(--lsd-spacing-base)",children:[(0,s.jsx)(t.Typography,{variant:"label1",children:"Warning Toast"}),(0,s.jsx)(a.Button,{variant:"outlined",onClick:()=>o.toast.warning("Please review your input before proceeding."),children:"Show Warning Toast"})]}),(0,s.jsxs)("div",{className:"space-y-(--lsd-spacing-base)",children:[(0,s.jsx)(t.Typography,{variant:"label1",children:"Info Toast"}),(0,s.jsx)(a.Button,{variant:"outlined",onClick:()=>o.toast.info("A new feature is now available!"),children:"Show Info Toast"})]})]}),(0,s.jsx)(o.Toaster,{})]})}function l(){return(0,s.jsx)(r,{})}e.s(["BasicExample",()=>r,"CODE",0,i,"default",()=>l])},75125,e=>{"use strict";var s=e.i(98134);e.i(26940);var a=e.i(59038),t=e.i(6896),o=e.i(54219),n=e.i(45173);let i=`import { Button, Typography } from '@nipsys/shadcn-lsd';
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
}`;function r(){return(0,n.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(t.Typography,{variant:"h3",children:"Toast Position Examples"}),(0,s.jsx)(t.Typography,{variant:"body1",className:"text-(--lsd-text-secondary)",children:"Demonstrates different toast positioning options on the screen."}),(0,s.jsxs)("div",{className:"space-y-(--lsd-spacing-lg)",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(t.Typography,{variant:"label1",children:"Top Positions"}),(0,s.jsx)(t.Typography,{variant:"body2",className:"text-(--lsd-text-secondary) mb-(--lsd-spacing-base)",children:"Toasts that appear at the top of the screen."}),(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-(--lsd-spacing-base)",children:[(0,s.jsx)(a.Button,{variant:"outlined",onClick:()=>(0,o.toast)("Top-left toast message",{position:"top-left"}),children:"Top-Left"}),(0,s.jsx)(a.Button,{variant:"outlined",onClick:()=>(0,o.toast)("Top-center toast message",{position:"top-center"}),children:"Top-Center"}),(0,s.jsx)(a.Button,{variant:"outlined",onClick:()=>(0,o.toast)("Top-right toast message",{position:"top-right"}),children:"Top-Right"})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(t.Typography,{variant:"label1",children:"Bottom Positions"}),(0,s.jsx)(t.Typography,{variant:"body2",className:"text-(--lsd-text-secondary) mb-(--lsd-spacing-base)",children:"Toasts that appear at the bottom of the screen."}),(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-(--lsd-spacing-base)",children:[(0,s.jsx)(a.Button,{variant:"outlined",onClick:()=>(0,o.toast)("Bottom-left toast message",{position:"bottom-left"}),children:"Bottom-Left"}),(0,s.jsx)(a.Button,{variant:"outlined",onClick:()=>(0,o.toast)("Bottom-center toast message",{position:"bottom-center"}),children:"Bottom-Center"}),(0,s.jsx)(a.Button,{variant:"outlined",onClick:()=>(0,o.toast)("Bottom-right toast message",{position:"bottom-right"}),children:"Bottom-Right"})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(t.Typography,{variant:"label1",children:"Common Positions Demo"}),(0,s.jsx)(t.Typography,{variant:"body2",className:"text-(--lsd-text-secondary) mb-(--lsd-spacing-base)",children:"Test multiple toasts to see how they stack in different positions."}),(0,s.jsx)(a.Button,{variant:"filled",onClick:()=>{o.toast.success("First success toast",{position:"top-right"}),setTimeout(()=>o.toast.info("Second info toast",{position:"top-right"}),500),setTimeout(()=>o.toast.warning("Third warning toast",{position:"top-right"}),1e3)},children:"Show Multiple Toasts"})]})]}),(0,s.jsx)(o.Toaster,{})]})}function l(){return(0,s.jsx)(r,{})}e.s(["CODE",0,i,"PositionExample",()=>r,"default",()=>l])},25758,e=>{"use strict";var s=e.i(98134);e.i(26940);var a=e.i(59038),t=e.i(23155),o=e.i(6896),n=e.i(75201),i=e.i(54219),r=e.i(45173);let l=`import { Button, Typography, Input } from '@nipsys/shadcn-lsd';
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
}`;function d(){let[e,l]=(0,n.useState)(""),d=async()=>new Promise((e,s)=>{setTimeout(()=>{Math.random()>.3?e("File uploaded successfully"):s(Error("Upload failed"))},2e3)});return(0,r.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(o.Typography,{variant:"h3",children:"Custom Toast Examples"}),(0,s.jsx)(o.Typography,{variant:"body1",className:"text-(--lsd-text-secondary)",children:"Demonstrates rich content, custom styling, and promise-based toasts."}),(0,s.jsxs)("div",{className:"space-y-(--lsd-spacing-lg)",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(o.Typography,{variant:"label1",children:"Rich Content Toast with Custom Styling"}),(0,s.jsx)(o.Typography,{variant:"body2",className:"text-(--lsd-text-secondary) mb-(--lsd-spacing-base)",children:"Custom JSX content with inline styles and action buttons."}),(0,s.jsx)(a.Button,{variant:"outlined",onClick:()=>{(0,i.toast)((0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsx)("div",{className:"w-3 h-3 bg-green-500 rounded-full shrink-0"}),(0,s.jsxs)("div",{className:"flex-1",children:[(0,s.jsx)("p",{className:"font-semibold text-gray-900",children:"Upload Complete"}),(0,s.jsx)("p",{className:"text-sm text-gray-600",children:"Your file has been processed and is ready to view"})]})]}),{duration:5e3,className:"border border-green-200",action:{label:"View",onClick:()=>console.log("View uploaded file")}})},children:"Show Rich Content Toast"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(o.Typography,{variant:"label1",children:"Toast with Custom Icon"}),(0,s.jsx)(o.Typography,{variant:"body2",className:"text-(--lsd-text-secondary) mb-(--lsd-spacing-base)",children:"Toast with custom visual elements and different styling."}),(0,s.jsx)(a.Button,{variant:"outlined",onClick:()=>{(0,i.toast)((0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsx)("div",{className:"w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center",children:(0,s.jsx)("span",{className:"text-blue-600 text-sm",children:"📧"})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"font-semibold text-gray-900",children:"Email Sent"}),(0,s.jsx)("p",{className:"text-sm text-gray-600",children:"Message delivered to recipient"})]})]}),{className:"border border-blue-200 bg-blue-50"})},children:"Show Custom Icon Toast"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(o.Typography,{variant:"label1",children:"Promise-based Toast"}),(0,s.jsx)(o.Typography,{variant:"body2",className:"text-(--lsd-text-secondary) mb-(--lsd-spacing-base)",children:"Upload simulation with loading, success, and error states."}),(0,s.jsx)(t.Input,{placeholder:"Enter filename to upload",value:e,onChange:e=>l(e.target.value),className:"mb-(--lsd-spacing-base) max-w-sm"}),(0,s.jsx)(a.Button,{variant:"outlined",disabled:!e,onClick:()=>{i.toast.promise(d(),{loading:`Uploading ${e}...`,success:s=>`${s}: ${e}`,error:s=>`Failed to upload ${e}: ${s.message}`})},children:"Upload with Promise"})]})]}),(0,s.jsx)(i.Toaster,{})]})}function c(){return(0,s.jsx)(d,{})}e.s(["CODE",0,l,"CustomExample",()=>d,"default",()=>c])},72336,e=>{"use strict";var s=e.i(98134);e.i(26940);var a=e.i(46700),t=e.i(57845),o=e.i(80427),n=e.i(64439),i=e.i(93261),r=e.i(6896),l=e.i(75201),d=e.i(90074),c=e.i(49332),p=e.i(10337),m=e.i(99311),h=e.i(11163),x=e.i(45010),u=e.i(48989),g=e.i(45173),f=e.i(28531),y=e.i(67531),j=e.i(25758),T=e.i(67793),v=e.i(43265),b=e.i(75125),C=e.i(57230),N=e.i(44780),w=e.i(45910),E=e.i(66730);function B(){let e=(0,l.useRef)(null),B=(0,l.useRef)(null),k=(0,l.useRef)(null),S=(0,l.useRef)(null),A=(0,l.useRef)(null),D=(0,l.useRef)(null),H=(0,l.useRef)(null),P=(0,l.useRef)(null),I=(0,l.useRef)(null),R=(0,l.useRef)(null);return(0,g.useSendThemeToIframes)(),(0,s.jsxs)(c.DocsLayout,{children:[(0,s.jsx)(h.PageHeader,{title:"Sonner",description:"Toast notification component with multiple types and customizable options"}),(0,s.jsxs)(m.PageContent,{children:[(0,s.jsx)(u.PageSection,{title:"About Sonner",children:(0,s.jsx)(r.Typography,{variant:"body1",className:"block",children:"Sonner is a toast notification component that displays brief, non-intrusive messages to users. It provides multiple toast types, customizable positioning, and rich color options for different notification states."})}),(0,s.jsxs)(u.PageSection,{title:"Installation",children:[(0,s.jsx)(r.Typography,{variant:"body1",children:"Import the Toaster component and toast function from LSD and sonner:"}),(0,s.jsx)(a.Card,{className:"mt-(--lsd-spacing-base)",children:(0,s.jsx)(t.CardContent,{children:(0,s.jsx)(d.CodeExample,{useAccordion:!1,code:`import { Toaster } from '@nipsys/shadcn-lsd'
import { toast } from 'sonner'

export default function MyComponent() {
  return (
    <>
      <Toaster />
      <Button onClick={() => toast('Hello world')}>
        Show toast
      </Button>
    </>
  )
}`})})})]}),(0,s.jsxs)(u.PageSection,{title:"Sonner Examples",children:[(0,s.jsx)(r.Typography,{variant:"body1",children:"Various toast types, positions, and features including custom duration, actions, promise-based toasts, and rich content."}),(0,s.jsxs)(a.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,s.jsxs)(n.CardHeader,{children:[(0,s.jsx)(i.CardTitle,{children:"Basic Toasts"}),(0,s.jsx)(o.CardDescription,{children:"Success, error, warning, and info toasts"})]}),(0,s.jsxs)(t.CardContent,{children:[(0,s.jsx)(p.IframeExample,{ref:e,size:"md",src:"/examples/sonner/basic",title:"Basic Toast Example"}),(0,s.jsx)(d.CodeExample,{code:y.CODE})]})]}),(0,s.jsxs)(a.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,s.jsxs)(n.CardHeader,{children:[(0,s.jsx)(i.CardTitle,{children:"Custom Toasts"}),(0,s.jsx)(o.CardDescription,{children:"Rich content, custom icons, and promise-based toasts"})]}),(0,s.jsxs)(t.CardContent,{children:[(0,s.jsx)(p.IframeExample,{ref:B,size:"md",src:"/examples/sonner/custom",title:"Custom Toast Example"}),(0,s.jsx)(d.CodeExample,{code:j.CODE})]})]}),(0,s.jsxs)(a.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,s.jsxs)(n.CardHeader,{children:[(0,s.jsx)(i.CardTitle,{children:"Toast Positions"}),(0,s.jsx)(o.CardDescription,{children:"Different toast positioning options"})]}),(0,s.jsxs)(t.CardContent,{children:[(0,s.jsx)(p.IframeExample,{ref:k,size:"md",src:"/examples/sonner/position",title:"Toast Position Example"}),(0,s.jsx)(d.CodeExample,{code:b.CODE})]})]}),(0,s.jsxs)(a.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,s.jsxs)(n.CardHeader,{children:[(0,s.jsx)(i.CardTitle,{children:"Toast Types"}),(0,s.jsx)(o.CardDescription,{children:"Simple, success, error, warning, and info toasts"})]}),(0,s.jsxs)(t.CardContent,{children:[(0,s.jsx)(p.IframeExample,{ref:S,size:"md",src:"/examples/sonner/toast-types",title:"Toast Types Example"}),(0,s.jsx)(d.CodeExample,{code:E.CODE})]})]}),(0,s.jsxs)(a.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,s.jsxs)(n.CardHeader,{children:[(0,s.jsx)(i.CardTitle,{children:"Custom Duration"}),(0,s.jsx)(o.CardDescription,{children:"Control how long toasts stay visible"})]}),(0,s.jsxs)(t.CardContent,{children:[(0,s.jsx)(p.IframeExample,{ref:A,size:"md",src:"/examples/sonner/duration",title:"Toast Duration Example"}),(0,s.jsx)(d.CodeExample,{code:T.CODE})]})]}),(0,s.jsxs)(a.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,s.jsxs)(n.CardHeader,{children:[(0,s.jsx)(i.CardTitle,{children:"Positioned Toasts"}),(0,s.jsx)(o.CardDescription,{children:"Control toast positioning on screen"})]}),(0,s.jsxs)(t.CardContent,{children:[(0,s.jsx)(p.IframeExample,{ref:D,size:"md",src:"/examples/sonner/positions",title:"Toast Positions Example"}),(0,s.jsx)(d.CodeExample,{code:C.CODE})]})]}),(0,s.jsxs)(a.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,s.jsxs)(n.CardHeader,{children:[(0,s.jsx)(i.CardTitle,{children:"With Actions"}),(0,s.jsx)(o.CardDescription,{children:"Add action buttons to toasts"})]}),(0,s.jsxs)(t.CardContent,{children:[(0,s.jsx)(p.IframeExample,{ref:H,size:"md",src:"/examples/sonner/actions",title:"Toast Actions Example"}),(0,s.jsx)(d.CodeExample,{code:f.CODE})]})]}),(0,s.jsxs)(a.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,s.jsxs)(n.CardHeader,{children:[(0,s.jsx)(i.CardTitle,{children:"Persistent Toasts"}),(0,s.jsx)(o.CardDescription,{children:"Toasts that don't auto-dismiss"})]}),(0,s.jsxs)(t.CardContent,{children:[(0,s.jsx)(p.IframeExample,{ref:P,size:"md",src:"/examples/sonner/persistent",title:"Toast Persistent Example"}),(0,s.jsx)(d.CodeExample,{code:v.CODE})]})]}),(0,s.jsxs)(a.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,s.jsxs)(n.CardHeader,{children:[(0,s.jsx)(i.CardTitle,{children:"Promise-based Toasts"}),(0,s.jsx)(o.CardDescription,{children:"Async loading states with automatic success/error"})]}),(0,s.jsxs)(t.CardContent,{children:[(0,s.jsx)(p.IframeExample,{ref:I,size:"md",src:"/examples/sonner/promise",title:"Toast Promise Example"}),(0,s.jsx)(d.CodeExample,{code:N.CODE})]})]}),(0,s.jsxs)(a.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,s.jsxs)(n.CardHeader,{children:[(0,s.jsx)(i.CardTitle,{children:"Rich Toasts"}),(0,s.jsx)(o.CardDescription,{children:"Custom JSX content in toasts"})]}),(0,s.jsxs)(t.CardContent,{children:[(0,s.jsx)(p.IframeExample,{ref:R,size:"md",src:"/examples/sonner/rich",title:"Toast Rich Example"}),(0,s.jsx)(d.CodeExample,{code:w.CODE})]})]})]}),(0,s.jsxs)(u.PageSection,{title:"API Reference",children:[(0,s.jsx)(r.Typography,{variant:"body1",children:"All available props for the Toaster component."}),(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)",children:[(0,s.jsxs)(a.Card,{children:[(0,s.jsxs)(n.CardHeader,{children:[(0,s.jsx)(i.CardTitle,{children:"theme"}),(0,s.jsx)(o.CardDescription,{children:"Theme for the toast notifications"})]}),(0,s.jsxs)(t.CardContent,{children:[(0,s.jsxs)(r.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,s.jsx)("strong",{children:"Type:"})," 'light' | 'dark' | 'system'"]}),(0,s.jsxs)(r.Typography,{variant:"label1",className:"block mb-(--lsd-spacing-smaller)",children:[(0,s.jsx)("strong",{children:"Options:"})," light, dark, system"]}),(0,s.jsxs)(r.Typography,{variant:"label1",className:"block",children:[(0,s.jsx)("strong",{children:"Default:"})," system"]})]})]}),(0,s.jsxs)(a.Card,{children:[(0,s.jsxs)(n.CardHeader,{children:[(0,s.jsx)(i.CardTitle,{children:"position"}),(0,s.jsx)(o.CardDescription,{children:"Position of the toast container"})]}),(0,s.jsxs)(t.CardContent,{children:[(0,s.jsxs)(r.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,s.jsx)("strong",{children:"Type:"})," ToasterPosition"]}),(0,s.jsxs)(r.Typography,{variant:"label1",className:"block mb-(--lsd-spacing-smaller)",children:[(0,s.jsx)("strong",{children:"Options:"})," top-left, top-center, top-right, bottom-left, bottom-center, bottom-right"]}),(0,s.jsxs)(r.Typography,{variant:"label1",className:"block",children:[(0,s.jsx)("strong",{children:"Default:"})," bottom-right"]})]})]}),(0,s.jsxs)(a.Card,{children:[(0,s.jsxs)(n.CardHeader,{children:[(0,s.jsx)(i.CardTitle,{children:"expand"}),(0,s.jsx)(o.CardDescription,{children:"Whether to expand toasts on hover"})]}),(0,s.jsxs)(t.CardContent,{children:[(0,s.jsxs)(r.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,s.jsx)("strong",{children:"Type:"})," boolean"]}),(0,s.jsxs)(r.Typography,{variant:"label1",className:"block",children:[(0,s.jsx)("strong",{children:"Default:"})," false"]}),(0,s.jsx)(r.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Expands toast to show full content on hover"})]})]}),(0,s.jsxs)(a.Card,{children:[(0,s.jsxs)(n.CardHeader,{children:[(0,s.jsx)(i.CardTitle,{children:"duration"}),(0,s.jsx)(o.CardDescription,{children:"Default duration for all toasts"})]}),(0,s.jsxs)(t.CardContent,{children:[(0,s.jsxs)(r.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,s.jsx)("strong",{children:"Type:"})," number"]}),(0,s.jsxs)(r.Typography,{variant:"label1",className:"block",children:[(0,s.jsx)("strong",{children:"Default:"})," 4000"]}),(0,s.jsx)(r.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Duration in milliseconds before toast auto-dismisses"})]})]}),(0,s.jsxs)(a.Card,{children:[(0,s.jsxs)(n.CardHeader,{children:[(0,s.jsx)(i.CardTitle,{children:"richColors"}),(0,s.jsx)(o.CardDescription,{children:"Enable rich color backgrounds for toast types"})]}),(0,s.jsxs)(t.CardContent,{children:[(0,s.jsxs)(r.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,s.jsx)("strong",{children:"Type:"})," boolean"]}),(0,s.jsxs)(r.Typography,{variant:"label1",className:"block",children:[(0,s.jsx)("strong",{children:"Default:"})," true"]}),(0,s.jsx)(r.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Applies colored backgrounds based on toast type"})]})]}),(0,s.jsxs)(a.Card,{children:[(0,s.jsxs)(n.CardHeader,{children:[(0,s.jsx)(i.CardTitle,{children:"closeButton"}),(0,s.jsx)(o.CardDescription,{children:"Show close button on toasts"})]}),(0,s.jsxs)(t.CardContent,{children:[(0,s.jsxs)(r.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,s.jsx)("strong",{children:"Type:"})," boolean"]}),(0,s.jsxs)(r.Typography,{variant:"label1",className:"block",children:[(0,s.jsx)("strong",{children:"Default:"})," false"]}),(0,s.jsx)(r.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Displays a close button on each toast"})]})]}),(0,s.jsxs)(a.Card,{children:[(0,s.jsxs)(n.CardHeader,{children:[(0,s.jsx)(i.CardTitle,{children:"toastOptions"}),(0,s.jsx)(o.CardDescription,{children:"Default options for all toasts"})]}),(0,s.jsxs)(t.CardContent,{children:[(0,s.jsxs)(r.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,s.jsx)("strong",{children:"Type:"})," ToastOptions"]}),(0,s.jsxs)(r.Typography,{variant:"label1",className:"block",children:[(0,s.jsx)("strong",{children:"Default:"})," undefined"]}),(0,s.jsx)(r.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Default configuration applied to all toasts"})]})]}),(0,s.jsxs)(a.Card,{children:[(0,s.jsxs)(n.CardHeader,{children:[(0,s.jsx)(i.CardTitle,{children:"className"}),(0,s.jsx)(o.CardDescription,{children:"Additional CSS classes to apply"})]}),(0,s.jsxs)(t.CardContent,{children:[(0,s.jsxs)(r.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,s.jsx)("strong",{children:"Type:"})," string"]}),(0,s.jsx)(r.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Merges with existing toaster classes"})]})]})]})]}),(0,s.jsxs)(u.PageSection,{title:"Accessibility",children:[(0,s.jsx)(r.Typography,{variant:"body1",children:"The Sonner component follows accessibility best practices."}),(0,s.jsxs)(a.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,s.jsxs)(n.CardHeader,{children:[(0,s.jsx)(i.CardTitle,{children:"Keyboard Navigation"}),(0,s.jsx)(o.CardDescription,{children:"Toasts are fully keyboard accessible"})]}),(0,s.jsxs)(t.CardContent,{children:[(0,s.jsxs)(r.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:["• ",(0,s.jsx)("strong",{children:"Tab"})," - Navigate to toast actions"]}),(0,s.jsxs)(r.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:["• ",(0,s.jsx)("strong",{children:"Shift + Tab"})," - Navigate to previous focusable element"]}),(0,s.jsxs)(r.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:["• ",(0,s.jsx)("strong",{children:"Enter"})," - Activate toast action button"]}),(0,s.jsxs)(r.Typography,{variant:"body2",className:"block",children:["• ",(0,s.jsx)("strong",{children:"Escape"})," - Dismiss toast (if dismissible)"]})]})]}),(0,s.jsxs)(a.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,s.jsxs)(n.CardHeader,{children:[(0,s.jsx)(i.CardTitle,{children:"ARIA Attributes"}),(0,s.jsx)(o.CardDescription,{children:"Proper ARIA attributes for screen readers"})]}),(0,s.jsxs)(t.CardContent,{children:[(0,s.jsxs)(r.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:["• Toasts use ",(0,s.jsx)("code",{children:'role="alert"'})," for important notifications"]}),(0,s.jsxs)(r.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:["• Use ",(0,s.jsx)("code",{children:"aria-live"})," for announcing toast messages"]}),(0,s.jsx)(r.Typography,{variant:"body2",className:"block",children:"• Action buttons are properly labeled for screen readers"})]})]}),(0,s.jsxs)(a.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,s.jsxs)(n.CardHeader,{children:[(0,s.jsx)(i.CardTitle,{children:"Focus States"}),(0,s.jsx)(o.CardDescription,{children:"Visible focus indicators for keyboard users"})]}),(0,s.jsx)(t.CardContent,{children:(0,s.jsx)(r.Typography,{variant:"body2",className:"block",children:"Toasts have visible focus states that follow the LSD design system's focus indicators, ensuring keyboard users can always see which element has focus."})})]})]})]}),(0,s.jsx)(x.PageNavigation,{previous:{title:"Progress",href:"/components/progress"},next:{title:"Card",href:"/components/card"}})]})}e.s(["default",()=>B])}]);