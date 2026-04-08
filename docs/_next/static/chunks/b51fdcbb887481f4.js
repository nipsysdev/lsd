(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var a=e.i(75201);function l(){var e;let l;e=e=>{let a=document.documentElement;e.theme&&("dark"===e.theme?a.classList.add("dark"):a.classList.remove("dark")),e.accent&&("monochrome"===e.accent?a.removeAttribute("data-theme"):a.setAttribute("data-theme",e.accent)),e.font&&(a.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?a.classList.add("font-serif"):"sans-serif"===e.font?a.classList.add("font-sans"):"monospace"===e.font&&a.classList.add("font-mono"))},l=a.useRef(e),a.useEffect(()=>{l.current=e},[e]),a.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&l.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>l],45173)},73154,e=>{"use strict";var a=e.i(98134);e.i(26940);var l=e.i(44e3),s=e.i(6896),t=e.i(45173);let o=`import { Toggle, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">With Text Labels</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-smaller)">
        <Toggle pressed aria-label="Toggle bold">Bold</Toggle>
        <Toggle aria-label="Toggle italic">Italic</Toggle>
        <Toggle pressed aria-label="Toggle underline">Underline</Toggle>
      </div>
    </div>
  );
}`;function i(){return(0,t.useSendThemeToIframes)(),(0,a.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,a.jsx)(s.Typography,{variant:"label1",children:"With Text Labels"}),(0,a.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-smaller)",children:[(0,a.jsx)(l.Toggle,{pressed:!0,"aria-label":"Toggle bold",children:"Bold"}),(0,a.jsx)(l.Toggle,{"aria-label":"Toggle italic",children:"Italic"}),(0,a.jsx)(l.Toggle,{pressed:!0,"aria-label":"Toggle underline",children:"Underline"})]})]})}function r(){return(0,a.jsx)(i,{})}e.s(["CODE",0,o,"ToggleWithTextExample",()=>i,"default",()=>r])}]);