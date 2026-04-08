(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var s=e.i(75201);function a(){var e;let a;e=e=>{let s=document.documentElement;e.theme&&("dark"===e.theme?s.classList.add("dark"):s.classList.remove("dark")),e.accent&&("monochrome"===e.accent?s.removeAttribute("data-theme"):s.setAttribute("data-theme",e.accent)),e.font&&(s.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?s.classList.add("font-serif"):"sans-serif"===e.font?s.classList.add("font-sans"):"monospace"===e.font&&s.classList.add("font-mono"))},a=s.useRef(e),s.useEffect(()=>{a.current=e},[e]),s.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],45173)},78529,e=>{"use strict";var s=e.i(98134);e.i(26940);var a=e.i(1586),t=e.i(6896),l=e.i(45173);let n=`import { Skeleton, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-4 px-5 py-2">
      <Typography variant="label1">Custom Sizes</Typography>
      <div className="flex flex-col gap-1">
        <Skeleton className="h-2 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-12 w-full" />
      </div>
    </div>
  );
}`;function o(){return(0,l.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-4 px-5 py-2",children:[(0,s.jsx)(t.Typography,{variant:"label1",children:"Custom Sizes"}),(0,s.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,s.jsx)(a.Skeleton,{className:"h-2 w-full"}),(0,s.jsx)(a.Skeleton,{className:"h-6 w-full"}),(0,s.jsx)(a.Skeleton,{className:"h-4 w-full"}),(0,s.jsx)(a.Skeleton,{className:"h-12 w-full"})]})]})}function r(){return(0,s.jsx)(o,{})}e.s(["CODE",0,n,"SkeletonSizesExample",()=>o,"default",()=>r])}]);