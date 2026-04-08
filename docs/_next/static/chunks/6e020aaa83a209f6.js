(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var t=e.i(75201);function r(){var e;let r;e=e=>{let t=document.documentElement;e.theme&&("dark"===e.theme?t.classList.add("dark"):t.classList.remove("dark")),e.accent&&("monochrome"===e.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e.accent)),e.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?t.classList.add("font-serif"):"sans-serif"===e.font?t.classList.add("font-sans"):"monospace"===e.font&&t.classList.add("font-mono"))},r=t.useRef(e),t.useEffect(()=>{r.current=e},[e]),t.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&r.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>r],45173)},26944,e=>{"use strict";var t=e.i(98134);e.i(26940);var r=e.i(1088),l=e.i(81068),o=e.i(61956),i=e.i(91935),a=e.i(14235),n=e.i(56861),s=e.i(5082),c=e.i(50794),d=e.i(37625),u=e.i(59038),g=e.i(45173);let A=`import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account and remove all
            your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button>Delete</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
};`;function D(){return(0,g.useSendThemeToIframes)(),(0,t.jsxs)(r.AlertDialog,{children:[(0,t.jsx)(d.AlertDialogTrigger,{asChild:!0,children:(0,t.jsx)(u.Button,{variant:"destructive",children:"Delete Account"})}),(0,t.jsxs)(i.AlertDialogContent,{children:[(0,t.jsxs)(s.AlertDialogHeader,{children:[(0,t.jsx)(c.AlertDialogTitle,{children:"Are you sure?"}),(0,t.jsx)(a.AlertDialogDescription,{children:"This action cannot be undone. This will permanently delete your account and remove all your data from our servers."})]}),(0,t.jsxs)(n.AlertDialogFooter,{children:[(0,t.jsx)(o.AlertDialogCancel,{children:"Cancel"}),(0,t.jsx)(l.AlertDialogAction,{asChild:!0,children:(0,t.jsx)(u.Button,{children:"Delete"})})]})]})]})}function m(){return(0,t.jsx)(D,{})}e.s(["AlertDialogBasicExample",()=>D,"CODE",0,A,"default",()=>m])}]);