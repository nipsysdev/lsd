(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,e=>{"use strict";var s=e.i(86900);function t(){var e;let t;e=e=>{let s=document.documentElement;e.theme&&("dark"===e.theme?s.classList.add("dark"):s.classList.remove("dark")),e.accent&&("monochrome"===e.accent?s.removeAttribute("data-theme"):s.setAttribute("data-theme",e.accent)),e.font&&(s.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?s.classList.add("font-serif"):"sans-serif"===e.font?s.classList.add("font-sans"):"monospace"===e.font&&s.classList.add("font-mono"))},t=s.useRef(e),s.useEffect(()=>{t.current=e},[e]),s.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&t.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>t],68869)},68256,e=>{"use strict";var s=e.i(74702);e.s(["Typography",()=>s.T])},7669,e=>{"use strict";var s=e.i(2582);e.i(82419);var t=e.i(39048),a=e.i(68256),r=e.i(68869);let n=`import { Progress, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Indeterminate Progress</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base)">
        <Progress indeterminate />
        <Progress indeterminate speed="slow" />
        <Progress indeterminate speed="fast" />
      </div>
    </div>
  );
}`;function i(){return(0,r.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(a.Typography,{variant:"label1",children:"Indeterminate Progress"}),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(t.Progress,{indeterminate:!0}),(0,s.jsx)(t.Progress,{indeterminate:!0,speed:"slow"}),(0,s.jsx)(t.Progress,{indeterminate:!0,speed:"fast"})]})]})}function o(){return(0,s.jsx)(i,{})}e.s(["CODE",0,n,"ProgressIndeterminateExample",()=>i,"default",()=>o])}]);