(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var s=e.i(75201);function a(){var e;let a;e=e=>{let s=document.documentElement;e.theme&&("dark"===e.theme?s.classList.add("dark"):s.classList.remove("dark")),e.accent&&("monochrome"===e.accent?s.removeAttribute("data-theme"):s.setAttribute("data-theme",e.accent)),e.font&&(s.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?s.classList.add("font-serif"):"sans-serif"===e.font?s.classList.add("font-sans"):"monospace"===e.font&&s.classList.add("font-mono"))},a=s.useRef(e),s.useEffect(()=>{a.current=e},[e]),s.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],45173)},61047,e=>{"use strict";var s=e.i(98134);e.i(26940);var a=e.i(36623),t=e.i(6896),o=e.i(45173);let l=`import { Progress, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Sizes</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base)">
        <Progress value={33} size="sm" showLabel labelPosition="top" />
        <Progress value={66} size="md" showLabel labelPosition="top" />
        <Progress value={100} size="lg" showLabel labelPosition="top" />
      </div>
    </div>
  );
}`;function i(){return(0,o.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(t.Typography,{variant:"label1",children:"Sizes"}),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(a.Progress,{value:33,size:"sm",showLabel:!0,labelPosition:"top"}),(0,s.jsx)(a.Progress,{value:66,size:"md",showLabel:!0,labelPosition:"top"}),(0,s.jsx)(a.Progress,{value:100,size:"lg",showLabel:!0,labelPosition:"top"})]})]})}function r(){return(0,s.jsx)(i,{})}e.s(["CODE",0,l,"ProgressSizesExample",()=>i,"default",()=>r])}]);