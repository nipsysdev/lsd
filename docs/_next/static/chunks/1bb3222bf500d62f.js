(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var s=e.i(75201);function a(){var e;let a;e=e=>{let s=document.documentElement;e.theme&&("dark"===e.theme?s.classList.add("dark"):s.classList.remove("dark")),e.accent&&("monochrome"===e.accent?s.removeAttribute("data-theme"):s.setAttribute("data-theme",e.accent)),e.font&&(s.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?s.classList.add("font-serif"):"sans-serif"===e.font?s.classList.add("font-sans"):"monospace"===e.font&&s.classList.add("font-mono"))},a=s.useRef(e),s.useEffect(()=>{a.current=e},[e]),s.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],45173)},43864,e=>{"use strict";var s=e.i(98134);e.i(26940);var a=e.i(1586),t=e.i(6896),n=e.i(45173);let l=`import { Skeleton, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-4 px-5 py-2">
      <Typography variant="label1">Avatar Skeleton</Typography>
      <div className="flex items-center gap-4">
        <Skeleton className="size-20 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
    </div>
  );
}`;function o(){return(0,n.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-4 px-5 py-2",children:[(0,s.jsx)(t.Typography,{variant:"label1",children:"Avatar Skeleton"}),(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[(0,s.jsx)(a.Skeleton,{className:"size-20 rounded-full"}),(0,s.jsxs)("div",{className:"flex-1 space-y-2",children:[(0,s.jsx)(a.Skeleton,{className:"h-4 w-32"}),(0,s.jsx)(a.Skeleton,{className:"h-3 w-24"})]})]})]})}function r(){return(0,s.jsx)(o,{})}e.s(["CODE",0,l,"SkeletonAvatarExample",()=>o,"default",()=>r])}]);