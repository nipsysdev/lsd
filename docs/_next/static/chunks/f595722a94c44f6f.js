(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var a=e.i(75201);function s(){var e;let s;e=e=>{let a=document.documentElement;e.theme&&("dark"===e.theme?a.classList.add("dark"):a.classList.remove("dark")),e.accent&&("monochrome"===e.accent?a.removeAttribute("data-theme"):a.setAttribute("data-theme",e.accent)),e.font&&(a.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?a.classList.add("font-serif"):"sans-serif"===e.font?a.classList.add("font-sans"):"monospace"===e.font&&a.classList.add("font-mono"))},s=a.useRef(e),a.useEffect(()=>{s.current=e},[e]),a.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&s.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>s],45173)},47450,e=>{"use strict";var a=e.i(98134);e.i(26940);var s=e.i(39225),t=e.i(6896),c=e.i(45173);let n=`import { Checkbox, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Basic States</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base)">
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <Checkbox />
          <Typography variant="body1">Unchecked</Typography>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <Checkbox defaultChecked />
          <Typography variant="body1">Checked</Typography>
        </div>
      </div>
    </div>
  );
}`;function i(){return(0,c.useSendThemeToIframes)(),(0,a.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,a.jsx)(t.Typography,{variant:"label1",children:"Basic States"}),(0,a.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,a.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-smaller)",children:[(0,a.jsx)(s.Checkbox,{}),(0,a.jsx)(t.Typography,{variant:"body1",children:"Unchecked"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-smaller)",children:[(0,a.jsx)(s.Checkbox,{defaultChecked:!0}),(0,a.jsx)(t.Typography,{variant:"body1",children:"Checked"})]})]})]})}function r(){return(0,a.jsx)(i,{})}e.s(["CODE",0,n,"CheckboxBasicExample",()=>i,"default",()=>r])}]);