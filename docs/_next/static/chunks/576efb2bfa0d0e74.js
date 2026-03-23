(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,e=>{"use strict";var s=e.i(86900);function a(){var e;let a;e=e=>{let s=document.documentElement;e.theme&&("dark"===e.theme?s.classList.add("dark"):s.classList.remove("dark")),e.accent&&("monochrome"===e.accent?s.removeAttribute("data-theme"):s.setAttribute("data-theme",e.accent)),e.font&&(s.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?s.classList.add("font-serif"):"sans-serif"===e.font?s.classList.add("font-sans"):"monospace"===e.font&&s.classList.add("font-mono"))},a=s.useRef(e),s.useEffect(()=>{a.current=e},[e]),s.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],68869)},68256,e=>{"use strict";var s=e.i(74702);e.s(["Typography",()=>s.T])},10930,e=>{"use strict";var s=e.i(2582);e.i(82419);var a=e.i(15518),t=e.i(68256),n=e.i(68869);let o=`import { Skeleton, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-4 px-5 py-2">
      <Typography variant="label1">Card Skeleton</Typography>
      <div className="space-y-4">
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
}`;function r(){return(0,n.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-4 px-5 py-2",children:[(0,s.jsx)(t.Typography,{variant:"label1",children:"Card Skeleton"}),(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsx)(a.Skeleton,{className:"h-20 w-full"}),(0,s.jsx)(a.Skeleton,{className:"h-4 w-3/4"}),(0,s.jsx)(a.Skeleton,{className:"h-4 w-1/2"})]})]})}function l(){return(0,s.jsx)(r,{})}e.s(["CODE",0,o,"SkeletonCardExample",()=>r,"default",()=>l])}]);