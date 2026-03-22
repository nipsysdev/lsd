(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var a=e.i(75201);function s(){var e;let s;e=e=>{let a=document.documentElement;e.theme&&("dark"===e.theme?a.classList.add("dark"):a.classList.remove("dark")),e.accent&&("monochrome"===e.accent?a.removeAttribute("data-theme"):a.setAttribute("data-theme",e.accent)),e.font&&(a.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?a.classList.add("font-serif"):"sans-serif"===e.font?a.classList.add("font-sans"):"monospace"===e.font&&a.classList.add("font-mono"))},s=a.useRef(e),a.useEffect(()=>{s.current=e},[e]),a.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&s.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>s],45173)},61417,e=>{"use strict";var a=e.i(20607);e.s(["Typography",()=>a.T])},10545,e=>{"use strict";var a=e.i(95044);e.s(["ScrollBar",()=>a.S])},75941,e=>{"use strict";var a=e.i(98134);e.i(26940);var s=e.i(78112),r=e.i(10545),t=e.i(61417),l=e.i(45173);let o=`import { ScrollArea, ScrollBar, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Horizontal ScrollArea with ScrollBar</Typography>
      <ScrollArea className="w-full whitespace-nowrap rounded-md border p-(--lsd-spacing-base)">
        <div className="flex w-max space-x-(--lsd-spacing-base)">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-(--lsd-spacing-smaller)">
              <div className="size-(--lsd-spacing-5x) rounded-lg bg-(--lsd-color-surface-alt)"></div>
              <Typography variant="body2">Card {i + 1}</Typography>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
`;function i(){return(0,l.useSendThemeToIframes)(),(0,a.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,a.jsx)(t.Typography,{variant:"label1",children:"Horizontal ScrollArea with ScrollBar"}),(0,a.jsxs)(s.ScrollArea,{className:"flex-auto whitespace-nowrap border p-(--lsd-spacing-base)",children:[(0,a.jsx)("div",{className:"flex gap-x-(--lsd-spacing-base)",children:[...Array(15)].map((e,s)=>(0,a.jsxs)(t.Typography,{variant:"body2",children:["Item ",s+1]},s))}),(0,a.jsx)(r.ScrollBar,{orientation:"horizontal"})]})]})}function n(){return(0,a.jsx)(i,{})}e.s(["CODE",0,o,"Example",()=>i,"default",()=>n])}]);