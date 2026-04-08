(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var s=e.i(75201);function a(){var e;let a;e=e=>{let s=document.documentElement;e.theme&&("dark"===e.theme?s.classList.add("dark"):s.classList.remove("dark")),e.accent&&("monochrome"===e.accent?s.removeAttribute("data-theme"):s.setAttribute("data-theme",e.accent)),e.font&&(s.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?s.classList.add("font-serif"):"sans-serif"===e.font?s.classList.add("font-sans"):"monospace"===e.font&&s.classList.add("font-mono"))},a=s.useRef(e),s.useEffect(()=>{a.current=e},[e]),s.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],45173)},37538,e=>{"use strict";var s=e.i(98134);e.i(26940);var a=e.i(1586),t=e.i(6896),n=e.i(45173);let o=`import { Skeleton, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-4 px-5 py-2">
      <Typography variant="label1">List Skeleton</Typography>
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center gap-4">
            <Skeleton className="size-8 rounded-full" />
            <Skeleton className="h-4 flex-1" />
            <Skeleton className="h-4 w-20" />
          </div>
        ))}
      </div>
    </div>
  );
}`;function i(){return(0,n.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-4 px-5 py-2",children:[(0,s.jsx)(t.Typography,{variant:"label1",children:"List Skeleton"}),(0,s.jsx)("div",{className:"space-y-4",children:[void 0,void 0,void 0,void 0,void 0].map((e,t)=>(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[(0,s.jsx)(a.Skeleton,{className:"size-8 rounded-full"}),(0,s.jsx)(a.Skeleton,{className:"h-4 flex-1"}),(0,s.jsx)(a.Skeleton,{className:"h-4 w-20"})]},t))})]})}function l(){return(0,s.jsx)(i,{})}e.s(["CODE",0,o,"SkeletonListExample",()=>i,"default",()=>l])}]);