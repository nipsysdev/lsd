(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var s=e.i(75201);function a(){var e;let a;e=e=>{let s=document.documentElement;e.theme&&("dark"===e.theme?s.classList.add("dark"):s.classList.remove("dark")),e.accent&&("monochrome"===e.accent?s.removeAttribute("data-theme"):s.setAttribute("data-theme",e.accent)),e.font&&(s.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?s.classList.add("font-serif"):"sans-serif"===e.font?s.classList.add("font-sans"):"monospace"===e.font&&s.classList.add("font-mono"))},a=s.useRef(e),s.useEffect(()=>{a.current=e},[e]),s.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],45173)},61417,e=>{"use strict";var s=e.i(20607);e.s(["Typography",()=>s.T])},96950,e=>{"use strict";var s=e.i(98134);e.i(26940);var a=e.i(36623),t=e.i(61417),o=e.i(45173);let r=`import { Progress, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Color Variants</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base)">
        <Progress value={25} variant="default" showLabel labelPosition="top" />
        <Progress value={50} variant="success" showLabel labelPosition="top" />
        <Progress value={75} variant="warning" showLabel labelPosition="top" />
        <Progress value={100} variant="destructive" showLabel labelPosition="top" />
      </div>
    </div>
  );
}`;function l(){return(0,o.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(t.Typography,{variant:"label1",children:"Color Variants"}),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(a.Progress,{value:25,variant:"default",showLabel:!0,labelPosition:"top"}),(0,s.jsx)(a.Progress,{value:50,variant:"success",showLabel:!0,labelPosition:"top"}),(0,s.jsx)(a.Progress,{value:75,variant:"warning",showLabel:!0,labelPosition:"top"}),(0,s.jsx)(a.Progress,{value:100,variant:"destructive",showLabel:!0,labelPosition:"top"})]})]})}function i(){return(0,s.jsx)(l,{})}e.s(["CODE",0,r,"ProgressColorsExample",()=>l,"default",()=>i])}]);