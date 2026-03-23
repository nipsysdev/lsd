(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,e=>{"use strict";var s=e.i(86900);function a(){var e;let a;e=e=>{let s=document.documentElement;e.theme&&("dark"===e.theme?s.classList.add("dark"):s.classList.remove("dark")),e.accent&&("monochrome"===e.accent?s.removeAttribute("data-theme"):s.setAttribute("data-theme",e.accent)),e.font&&(s.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?s.classList.add("font-serif"):"sans-serif"===e.font?s.classList.add("font-sans"):"monospace"===e.font&&s.classList.add("font-mono"))},a=s.useRef(e),s.useEffect(()=>{a.current=e},[e]),s.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],68869)},68256,e=>{"use strict";var s=e.i(74702);e.s(["Typography",()=>s.T])},24826,e=>{"use strict";var s=e.i(2582);e.i(82419);var a=e.i(44403),t=e.i(68256),c=e.i(68869);let n=`import { Checkbox, Typography } from '@nipsys/shadcn-lsd';

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
}`;function r(){return(0,c.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(t.Typography,{variant:"label1",children:"Basic States"}),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-smaller)",children:[(0,s.jsx)(a.Checkbox,{}),(0,s.jsx)(t.Typography,{variant:"body1",children:"Unchecked"})]}),(0,s.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-smaller)",children:[(0,s.jsx)(a.Checkbox,{defaultChecked:!0}),(0,s.jsx)(t.Typography,{variant:"body1",children:"Checked"})]})]})]})}function i(){return(0,s.jsx)(r,{})}e.s(["CODE",0,n,"CheckboxBasicExample",()=>r,"default",()=>i])}]);