(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var s=e.i(75201);function a(){var e;let a;e=e=>{let s=document.documentElement;e.theme&&("dark"===e.theme?s.classList.add("dark"):s.classList.remove("dark")),e.accent&&("monochrome"===e.accent?s.removeAttribute("data-theme"):s.setAttribute("data-theme",e.accent)),e.font&&(s.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?s.classList.add("font-serif"):"sans-serif"===e.font?s.classList.add("font-sans"):"monospace"===e.font&&s.classList.add("font-mono"))},a=s.useRef(e),s.useEffect(()=>{a.current=e},[e]),s.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],45173)},61417,e=>{"use strict";var s=e.i(20607);e.s(["Typography",()=>s.T])},22450,e=>{"use strict";var s=e.i(74116);e.s(["Button",()=>s.B])},25654,e=>{"use strict";var s=e.i(98134);e.i(26940);var a=e.i(22450),t=e.i(36623),o=e.i(61417),r=e.i(75201),l=e.i(45173);let n=`import { Button, Progress, Typography } from '@nipsys/shadcn-lsd';
import { useState } from 'react';

export function Example() {
  const [progress, setProgress] = useState(50);

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Uncontrolled Progress</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
        <Progress value={25} showLabel labelPosition="top" />
        <Progress value={50} showLabel labelPosition="top" />
        <Progress value={75} showLabel labelPosition="top" />
      </div>

      <Typography variant="label1">Controlled Progress</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
        <Progress value={progress} showLabel labelPosition="top" />
        <div className="flex justify-between">
          <Button
            variant="outlined"
            size="sm"
            onClick={() => setProgress(Math.max(0, progress - 10))}
          >
            Decrease
          </Button>
          <Button variant="outlined" size="sm" onClick={() => setProgress(0)}>
            Reset
          </Button>
          <Button
            variant="outlined"
            size="sm"
            onClick={() => setProgress(Math.min(100, progress + 10))}
          >
            Increase
          </Button>
        </div>
      </div>
    </div>
  );
}`;function i(){(0,l.useSendThemeToIframes)();let[e,n]=(0,r.useState)(50);return(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(o.Typography,{variant:"label1",children:"Uncontrolled Progress"}),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)",children:[(0,s.jsx)(t.Progress,{value:25,showLabel:!0,labelPosition:"top"}),(0,s.jsx)(t.Progress,{value:50,showLabel:!0,labelPosition:"top"}),(0,s.jsx)(t.Progress,{value:75,showLabel:!0,labelPosition:"top"})]}),(0,s.jsx)(o.Typography,{variant:"label1",children:"Controlled Progress"}),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)",children:[(0,s.jsx)(t.Progress,{value:e,showLabel:!0,labelPosition:"top"}),(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)(a.Button,{variant:"outlined",size:"sm",onClick:()=>n(Math.max(0,e-10)),children:"Decrease"}),(0,s.jsx)(a.Button,{variant:"outlined",size:"sm",onClick:()=>n(0),children:"Reset"}),(0,s.jsx)(a.Button,{variant:"outlined",size:"sm",onClick:()=>n(Math.min(100,e+10)),children:"Increase"})]})]})]})}function c(){return(0,s.jsx)(i,{})}e.s(["CODE",0,n,"ProgressBasicExample",()=>i,"default",()=>c])}]);