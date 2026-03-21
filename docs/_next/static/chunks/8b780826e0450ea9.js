(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var a=e.i(75201);function s(){var e;let s;e=e=>{let a=document.documentElement;e.theme&&("dark"===e.theme?a.classList.add("dark"):a.classList.remove("dark")),e.accent&&("monochrome"===e.accent?a.removeAttribute("data-theme"):a.setAttribute("data-theme",e.accent)),e.font&&(a.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?a.classList.add("font-serif"):"sans-serif"===e.font?a.classList.add("font-sans"):"monospace"===e.font&&a.classList.add("font-mono"))},s=a.useRef(e),a.useEffect(()=>{s.current=e},[e]),a.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&s.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>s],45173)},61417,e=>{"use strict";var a=e.i(20607);e.s(["Typography",()=>a.T])},25557,e=>{"use strict";var a=e.i(98134);e.i(26940);var s=e.i(56793),r=e.i(61417),l=e.i(45173);let t=`import { Separator, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Typography variant="label1">Horizontal Separator</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base)">
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <div className="size-(--lsd-spacing-2x) rounded-full bg-(--lsd-color-primary)"></div>
          <Typography variant="body1">Section 1</Typography>
        </div>
        <Separator />
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <div className="size-(--lsd-spacing-2x) rounded-full bg-(--lsd-color-accent)"></div>
          <Typography variant="body1">Section 2</Typography>
        </div>
      </div>
    </div>
  );
}
`;function i(){return(0,l.useSendThemeToIframes)(),(0,a.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)",children:[(0,a.jsx)(r.Typography,{variant:"label1",children:"Horizontal Separator"}),(0,a.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,a.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-smaller)",children:[(0,a.jsx)("div",{className:"size-(--lsd-spacing-2x) rounded-full bg-(--lsd-color-primary)"}),(0,a.jsx)(r.Typography,{variant:"body1",children:"Section 1"})]}),(0,a.jsx)(s.Separator,{}),(0,a.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-smaller)",children:[(0,a.jsx)("div",{className:"size-(--lsd-spacing-2x) rounded-full bg-(--lsd-color-accent)"}),(0,a.jsx)(r.Typography,{variant:"body1",children:"Section 2"})]})]})]})}function n(){return(0,a.jsx)(i,{})}e.s(["CODE",0,t,"Example",()=>i,"default",()=>n])}]);