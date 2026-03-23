(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,e=>{"use strict";var s=e.i(86900);function a(){var e;let a;e=e=>{let s=document.documentElement;e.theme&&("dark"===e.theme?s.classList.add("dark"):s.classList.remove("dark")),e.accent&&("monochrome"===e.accent?s.removeAttribute("data-theme"):s.setAttribute("data-theme",e.accent)),e.font&&(s.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?s.classList.add("font-serif"):"sans-serif"===e.font?s.classList.add("font-sans"):"monospace"===e.font&&s.classList.add("font-mono"))},a=s.useRef(e),s.useEffect(()=>{a.current=e},[e]),s.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],68869)},68256,e=>{"use strict";var s=e.i(74702);e.s(["Typography",()=>s.T])},43969,e=>{"use strict";var s=e.i(71448);e.s(["Toggle",()=>s.T])},21665,e=>{"use strict";var s=e.i(2582);e.i(82419);var a=e.i(43969),l=e.i(68256),t=e.i(68869);let i=`import { Toggle, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Small Size</Typography>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Toggle size="sm" aria-label="Toggle bold">B</Toggle>
        <Toggle size="sm" pressed aria-label="Toggle italic">I</Toggle>
        <Toggle size="sm" aria-label="Toggle underline">U</Toggle>
      </div>
    </div>
  );
}`;function r(){return(0,t.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(l.Typography,{variant:"label1",children:"Small Size"}),(0,s.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-base)",children:[(0,s.jsx)(a.Toggle,{size:"sm","aria-label":"Toggle bold",children:"B"}),(0,s.jsx)(a.Toggle,{size:"sm",pressed:!0,"aria-label":"Toggle italic",children:"I"}),(0,s.jsx)(a.Toggle,{size:"sm","aria-label":"Toggle underline",children:"U"})]})]})}function o(){return(0,s.jsx)(r,{})}e.s(["CODE",0,i,"ToggleSizesExample",()=>r,"default",()=>o])}]);