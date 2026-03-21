(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var a=e.i(75201);function s(){var e;let s;e=e=>{let a=document.documentElement;e.theme&&("dark"===e.theme?a.classList.add("dark"):a.classList.remove("dark")),e.accent&&("monochrome"===e.accent?a.removeAttribute("data-theme"):a.setAttribute("data-theme",e.accent)),e.font&&(a.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?a.classList.add("font-serif"):"sans-serif"===e.font?a.classList.add("font-sans"):"monospace"===e.font&&a.classList.add("font-mono"))},s=a.useRef(e),a.useEffect(()=>{s.current=e},[e]),a.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&s.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>s],45173)},61417,e=>{"use strict";var a=e.i(20607);e.s(["Typography",()=>a.T])},3668,e=>{"use strict";var a=e.i(98134);e.i(26940);var s=e.i(78112),r=e.i(61417),l=e.i(45173);let t=`import { ScrollArea, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Typography variant="label1">Basic ScrollArea</Typography>
      <ScrollArea className="h-(--lsd-spacing-10x) w-full rounded-md border p-(--lsd-spacing-base)">
        <div className="flex flex-col gap-(--lsd-spacing-base)">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex items-center gap-(--lsd-spacing-smaller)">
              <div className="size-(--lsd-spacing-2x) rounded-full bg-(--lsd-color-primary)"></div>
              <Typography variant="body1">Item {i + 1}</Typography>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
`;function i(){return(0,l.useSendThemeToIframes)(),(0,a.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)",children:[(0,a.jsx)(r.Typography,{variant:"label1",children:"Basic ScrollArea"}),(0,a.jsx)(s.ScrollArea,{className:"flex-auto h-(--lsd-spacing-10x) border p-(--lsd-spacing-base)",children:(0,a.jsx)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[...Array(20)].map((e,s)=>(0,a.jsxs)(r.Typography,{variant:"body1",children:["Item ",s+1]},s))})})]})}function n(){return(0,a.jsx)(i,{})}e.s(["CODE",0,t,"Example",()=>i,"default",()=>n])}]);