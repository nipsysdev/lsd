(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var t=e.i(75201);function a(){var e;let a;e=e=>{let t=document.documentElement;e.theme&&("dark"===e.theme?t.classList.add("dark"):t.classList.remove("dark")),e.accent&&("monochrome"===e.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e.accent)),e.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?t.classList.add("font-serif"):"sans-serif"===e.font?t.classList.add("font-sans"):"monospace"===e.font&&t.classList.add("font-mono"))},a=t.useRef(e),t.useEffect(()=>{a.current=e},[e]),t.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],45173)},61417,e=>{"use strict";var t=e.i(20607);e.s(["Typography",()=>t.T])},22450,e=>{"use strict";var t=e.i(74116);e.s(["Button",()=>t.B])},5682,e=>{"use strict";var t=e.i(75201),a=e.i(85082);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M144,176a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176Zm88-48A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM124,96a12,12,0,1,0-12-12A12,12,0,0,0,124,96Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M142,176a6,6,0,0,1-6,6,14,14,0,0,1-14-14V128a2,2,0,0,0-2-2,6,6,0,0,1,0-12,14,14,0,0,1,14,14v40a2,2,0,0,0,2,2A6,6,0,0,1,142,176ZM124,94a10,10,0,1,0-10-10A10,10,0,0,0,124,94Zm106,34A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M140,176a4,4,0,0,1-4,4,12,12,0,0,1-12-12V128a4,4,0,0,0-4-4,4,4,0,0,1,0-8,12,12,0,0,1,12,12v40a4,4,0,0,0,4,4A4,4,0,0,1,140,176ZM124,92a8,8,0,1,0-8-8A8,8,0,0,0,124,92Zm104,36A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(a.default,{ref:r,...e,weights:n}));r.displayName="InfoIcon",e.s(["InfoIcon",()=>r],5682)},71813,e=>{"use strict";var t=e.i(98134);e.i(26940);var a=e.i(22450),n=e.i(78528),r=e.i(3187),s=e.i(38557),i=e.i(20993),o=e.i(5909),l=e.i(10483),m=e.i(61417),c=e.i(5682),d=e.i(45173);let h=`import { InfoIcon } from '@phosphor-icons/react';
import { Button, Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outlined">
            <InfoIcon className="mr-(--lsd-spacing-smaller)" />
            Information
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>About</SheetTitle>
            <SheetDescription>Learn more about our platform.</SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <Typography variant="body2">
              This is a sheet that opens from the left side.
            </Typography>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
`;function f(){return(0,d.useSendThemeToIframes)(),(0,t.jsx)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:(0,t.jsxs)(n.Sheet,{children:[(0,t.jsx)(l.SheetTrigger,{asChild:!0,children:(0,t.jsxs)(a.Button,{variant:"outlined",children:[(0,t.jsx)(c.InfoIcon,{className:"mr-(--lsd-spacing-smaller)"}),"Information"]})}),(0,t.jsxs)(r.SheetContent,{side:"left",children:[(0,t.jsxs)(i.SheetHeader,{children:[(0,t.jsx)(o.SheetTitle,{children:"About"}),(0,t.jsx)(s.SheetDescription,{children:"Learn more about our platform."})]}),(0,t.jsx)("div",{className:"py-4",children:(0,t.jsx)(m.Typography,{variant:"body2",children:"This is a sheet that opens from the left side."})})]})]})})}function p(){return(0,t.jsx)(f,{})}e.s(["CODE",0,h,"Example",()=>f,"default",()=>p])}]);