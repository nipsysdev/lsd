(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var s=e.i(75201);function a(){var e;let a;e=e=>{let s=document.documentElement;e.theme&&("dark"===e.theme?s.classList.add("dark"):s.classList.remove("dark")),e.accent&&("monochrome"===e.accent?s.removeAttribute("data-theme"):s.setAttribute("data-theme",e.accent)),e.font&&(s.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?s.classList.add("font-serif"):"sans-serif"===e.font?s.classList.add("font-sans"):"monospace"===e.font&&s.classList.add("font-mono"))},a=s.useRef(e),s.useEffect(()=>{a.current=e},[e]),s.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],45173)},32534,e=>{"use strict";var s=e.i(98134);e.i(26940);var a=e.i(56793),l=e.i(6896),t=e.i(45173);let i=`import { Separator, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex items-center gap-(--lsd-spacing-base)">
      <div className="flex flex-col items-center gap-(--lsd-spacing-smaller)">
        <div className="size-(--lsd-spacing-2x) rounded-full bg-(--lsd-color-primary)"></div>
        <Typography variant="body2">Item 1</Typography>
      </div>
      <Separator orientation="vertical" className="h-(--lsd-spacing-5x)" />
      <div className="flex flex-col items-center gap-(--lsd-spacing-smaller)">
        <div className="size-(--lsd-spacing-2x) rounded-full bg-(--lsd-color-accent)"></div>
        <Typography variant="body2">Item 2</Typography>
      </div>
      <Separator orientation="vertical" className="h-(--lsd-spacing-5x)" />
      <div className="flex flex-col items-center gap-(--lsd-spacing-smaller)">
        <div className="size-(--lsd-spacing-2x) rounded-full bg-(--lsd-color-destructive)"></div>
        <Typography variant="body2">Item 3</Typography>
      </div>
    </div>
  );
}
`;function r(){return(0,t.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-base)",children:[(0,s.jsxs)("div",{className:"flex flex-col items-center gap-(--lsd-spacing-smaller)",children:[(0,s.jsx)("div",{className:"size-(--lsd-spacing-2x) rounded-full bg-(--lsd-color-primary)"}),(0,s.jsx)(l.Typography,{variant:"body2",children:"Item 1"})]}),(0,s.jsx)(a.Separator,{orientation:"vertical",className:"h-(--lsd-spacing-5x)"}),(0,s.jsxs)("div",{className:"flex flex-col items-center gap-(--lsd-spacing-smaller)",children:[(0,s.jsx)("div",{className:"size-(--lsd-spacing-2x) rounded-full bg-(--lsd-color-accent)"}),(0,s.jsx)(l.Typography,{variant:"body2",children:"Item 2"})]}),(0,s.jsx)(a.Separator,{orientation:"vertical",className:"h-(--lsd-spacing-5x)"}),(0,s.jsxs)("div",{className:"flex flex-col items-center gap-(--lsd-spacing-smaller)",children:[(0,s.jsx)("div",{className:"size-(--lsd-spacing-2x) rounded-full bg-(--lsd-color-destructive)"}),(0,s.jsx)(l.Typography,{variant:"body2",children:"Item 3"})]})]})}function n(){return(0,s.jsx)(r,{})}e.s(["CODE",0,i,"Example",()=>r,"default",()=>n])}]);