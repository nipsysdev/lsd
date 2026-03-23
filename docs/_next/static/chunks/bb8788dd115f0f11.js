(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,e=>{"use strict";var s=e.i(86900);function a(){var e;let a;e=e=>{let s=document.documentElement;e.theme&&("dark"===e.theme?s.classList.add("dark"):s.classList.remove("dark")),e.accent&&("monochrome"===e.accent?s.removeAttribute("data-theme"):s.setAttribute("data-theme",e.accent)),e.font&&(s.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?s.classList.add("font-serif"):"sans-serif"===e.font?s.classList.add("font-sans"):"monospace"===e.font&&s.classList.add("font-mono"))},a=s.useRef(e),s.useEffect(()=>{a.current=e},[e]),s.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],68869)},68256,e=>{"use strict";var s=e.i(74702);e.s(["Typography",()=>s.T])},7430,e=>{"use strict";var s=e.i(91776);e.s(["Toggle",()=>s.T])},85847,e=>{"use strict";var s=e.i(2582);e.i(82419);var a=e.i(7430),t=e.i(68256),l=e.i(68869);let r=`import { Toggle, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Pressed State</Typography>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Toggle pressed aria-label="Toggle bold">B</Toggle>
        <Toggle aria-label="Toggle italic">I</Toggle>
        <Toggle pressed aria-label="Toggle underline">U</Toggle>
      </div>
    </div>
  );
}`;function i(){return(0,l.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(t.Typography,{variant:"label1",children:"Pressed State"}),(0,s.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-base)",children:[(0,s.jsx)(a.Toggle,{pressed:!0,"aria-label":"Toggle bold",children:"B"}),(0,s.jsx)(a.Toggle,{"aria-label":"Toggle italic",children:"I"}),(0,s.jsx)(a.Toggle,{pressed:!0,"aria-label":"Toggle underline",children:"U"})]})]})}function o(){return(0,s.jsx)(i,{})}e.s(["CODE",0,r,"TogglePressedExample",()=>i,"default",()=>o])}]);