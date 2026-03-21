(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var i=e.i(75201);function o(){var e;let o;e=e=>{let i=document.documentElement;e.theme&&("dark"===e.theme?i.classList.add("dark"):i.classList.remove("dark")),e.accent&&("monochrome"===e.accent?i.removeAttribute("data-theme"):i.setAttribute("data-theme",e.accent)),e.font&&(i.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?i.classList.add("font-serif"):"sans-serif"===e.font?i.classList.add("font-sans"):"monospace"===e.font&&i.classList.add("font-mono"))},o=i.useRef(e),i.useEffect(()=>{o.current=e},[e]),i.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&o.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>o],45173)},22450,e=>{"use strict";var i=e.i(74116);e.s(["Button",()=>i.B])},89317,e=>{"use strict";var i=e.i(98134);e.i(26940);var o=e.i(22450),t=e.i(9129),a=e.i(5357),n=e.i(20316),s=e.i(18142),r=e.i(78674),l=e.i(39357),c=e.i(13175),d=e.i(47747),g=e.i(45173);let u=`import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a dialog component. You can put any content here, including forms, information,
            or interactive elements.
          </DialogDescription>
        </DialogHeader>
        <div className="py-(--lsd-spacing-base)">
          <p className="text-sm">
            Dialogs are used to focus the user's attention on a specific task or piece of
            information. They can contain forms, confirmations, or any other content that requires
            user interaction.
          </p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outlined">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button>Confirm</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
};`;function m(){return(0,g.useSendThemeToIframes)(),(0,i.jsxs)(t.Dialog,{children:[(0,i.jsx)(d.DialogTrigger,{asChild:!0,children:(0,i.jsx)(o.Button,{children:"Open Dialog"})}),(0,i.jsxs)(n.DialogContent,{children:[(0,i.jsxs)(l.DialogHeader,{children:[(0,i.jsx)(c.DialogTitle,{children:"Dialog Title"}),(0,i.jsx)(s.DialogDescription,{children:"This is a dialog component. You can put any content here, including forms, information, or interactive elements."})]}),(0,i.jsx)("div",{className:"py-(--lsd-spacing-base)",children:(0,i.jsx)("p",{className:"text-sm",children:"Dialogs are used to focus the user's attention on a specific task or piece of information. They can contain forms, confirmations, or any other content that requires user interaction."})}),(0,i.jsxs)(r.DialogFooter,{children:[(0,i.jsx)(a.DialogClose,{asChild:!0,children:(0,i.jsx)(o.Button,{variant:"outlined",children:"Cancel"})}),(0,i.jsx)(a.DialogClose,{asChild:!0,children:(0,i.jsx)(o.Button,{children:"Confirm"})})]})]})]})}function f(){return(0,i.jsx)(m,{})}e.s(["CODE",0,u,"DialogBasicExample",()=>m,"default",()=>f])}]);