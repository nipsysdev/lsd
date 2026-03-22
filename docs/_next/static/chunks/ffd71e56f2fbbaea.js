(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var t=e.i(75201);function a(){var e;let a;e=e=>{let t=document.documentElement;e.theme&&("dark"===e.theme?t.classList.add("dark"):t.classList.remove("dark")),e.accent&&("monochrome"===e.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e.accent)),e.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?t.classList.add("font-serif"):"sans-serif"===e.font?t.classList.add("font-sans"):"monospace"===e.font&&t.classList.add("font-mono"))},a=t.useRef(e),t.useEffect(()=>{a.current=e},[e]),t.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],45173)},61417,e=>{"use strict";var t=e.i(20607);e.s(["Typography",()=>t.T])},22450,e=>{"use strict";var t=e.i(74116);e.s(["Button",()=>t.B])},99272,e=>{"use strict";var t=e.i(98134);e.i(26940);var a=e.i(22450),s=e.i(78528),i=e.i(3187),r=e.i(38557),n=e.i(27815),o=e.i(20993),l=e.i(5909),h=e.i(10483),c=e.i(61417),d=e.i(45173);let p=`import { Button, Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Sheet>
        <SheetTrigger asChild>
          <Button>Open Sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-(--lsd-spacing-base) py-4">
            <div className="space-y-2">
              <Typography variant="label1">Name</Typography>
              <Typography variant="body2">John Doe</Typography>
            </div>
            <div className="space-y-2">
              <Typography variant="label1">Email</Typography>
              <Typography variant="body2">john@example.com</Typography>
            </div>
          </div>
          <SheetFooter>
            <Button type="submit">Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
`;function m(){return(0,d.useSendThemeToIframes)(),(0,t.jsx)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:(0,t.jsxs)(s.Sheet,{children:[(0,t.jsx)(h.SheetTrigger,{asChild:!0,children:(0,t.jsx)(a.Button,{children:"Open Sheet"})}),(0,t.jsxs)(i.SheetContent,{children:[(0,t.jsxs)(o.SheetHeader,{children:[(0,t.jsx)(l.SheetTitle,{children:"Edit profile"}),(0,t.jsx)(r.SheetDescription,{children:"Make changes to your profile here. Click save when you're done."})]}),(0,t.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base) py-4",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(c.Typography,{variant:"label1",children:"Name"}),(0,t.jsx)(c.Typography,{variant:"body2",children:"John Doe"})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(c.Typography,{variant:"label1",children:"Email"}),(0,t.jsx)(c.Typography,{variant:"body2",children:"john@example.com"})]})]}),(0,t.jsx)(n.SheetFooter,{children:(0,t.jsx)(a.Button,{type:"submit",children:"Save changes"})})]})]})})}function y(){return(0,t.jsx)(m,{})}e.s(["CODE",0,p,"Example",()=>m,"default",()=>y])}]);