(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var s=e.i(75201);function a(){var e;let a;e=e=>{let s=document.documentElement;e.theme&&("dark"===e.theme?s.classList.add("dark"):s.classList.remove("dark")),e.accent&&("monochrome"===e.accent?s.removeAttribute("data-theme"):s.setAttribute("data-theme",e.accent)),e.font&&(s.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?s.classList.add("font-serif"):"sans-serif"===e.font?s.classList.add("font-sans"):"monospace"===e.font&&s.classList.add("font-mono"))},a=s.useRef(e),s.useEffect(()=>{a.current=e},[e]),s.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],45173)},3430,e=>{"use strict";var s=e.i(98134);e.i(26940);var a=e.i(44e3),t=e.i(6896),l=e.i(45173);let r=`import { Toggle, Typography } from '@nipsys/shadcn-lsd';

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
}`;function n(){return(0,l.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(t.Typography,{variant:"label1",children:"Pressed State"}),(0,s.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-base)",children:[(0,s.jsx)(a.Toggle,{pressed:!0,"aria-label":"Toggle bold",children:"B"}),(0,s.jsx)(a.Toggle,{"aria-label":"Toggle italic",children:"I"}),(0,s.jsx)(a.Toggle,{pressed:!0,"aria-label":"Toggle underline",children:"U"})]})]})}function o(){return(0,s.jsx)(n,{})}e.s(["CODE",0,r,"TogglePressedExample",()=>n,"default",()=>o])}]);