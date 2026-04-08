(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var a=e.i(75201);function s(){var e;let s;e=e=>{let a=document.documentElement;e.theme&&("dark"===e.theme?a.classList.add("dark"):a.classList.remove("dark")),e.accent&&("monochrome"===e.accent?a.removeAttribute("data-theme"):a.setAttribute("data-theme",e.accent)),e.font&&(a.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?a.classList.add("font-serif"):"sans-serif"===e.font?a.classList.add("font-sans"):"monospace"===e.font&&a.classList.add("font-mono"))},s=a.useRef(e),a.useEffect(()=>{s.current=e},[e]),a.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&s.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>s],45173)},95949,e=>{"use strict";var a=e.i(74340);e.s(["ScrollBar",()=>a.S])},40520,e=>{"use strict";var a=e.i(98134);e.i(26940);var s=e.i(78112),r=e.i(95949),l=e.i(6896),t=e.i(45173);let o=`import { ScrollArea, ScrollBar, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Both Orientations</Typography>
      <ScrollArea className="h-(--lsd-spacing-8x) w-full rounded-md border p-(--lsd-spacing-base)">
        <div className="flex flex-col gap-(--lsd-spacing-base)">
          {[...Array(5)].map((_, row) => (
            <div key={row} className="flex gap-(--lsd-spacing-base)">
              {[...Array(10)].map((_, col) => (
                <div
                  key={col}
                  className="size-(--lsd-spacing-4x) shrink-0 rounded-md bg-(--lsd-color-surface-alt)"
                ></div>
              ))}
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
`;function i(){return(0,t.useSendThemeToIframes)(),(0,a.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,a.jsx)(l.Typography,{variant:"label1",children:"Both Orientations"}),(0,a.jsxs)(s.ScrollArea,{className:"flex-auto h-full border p-(--lsd-spacing-base)",children:[(0,a.jsx)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[void 0,void 0,void 0,void 0,void 0].map((e,s)=>(0,a.jsx)("div",{className:"flex gap-(--lsd-spacing-base)",children:[...Array(10)].map((e,r)=>(0,a.jsxs)(l.Typography,{variant:"body2",className:"shrink-0",children:["Item ",s+1,"-",r+1]},r))},s))}),(0,a.jsx)(r.ScrollBar,{orientation:"horizontal"})]})]})}function n(){return(0,a.jsx)(i,{})}e.s(["CODE",0,o,"Example",()=>i,"default",()=>n])}]);