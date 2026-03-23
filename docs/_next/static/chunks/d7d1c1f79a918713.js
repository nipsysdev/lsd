(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,e=>{"use strict";var s=e.i(86900);function t(){var e;let t;e=e=>{let s=document.documentElement;e.theme&&("dark"===e.theme?s.classList.add("dark"):s.classList.remove("dark")),e.accent&&("monochrome"===e.accent?s.removeAttribute("data-theme"):s.setAttribute("data-theme",e.accent)),e.font&&(s.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?s.classList.add("font-serif"):"sans-serif"===e.font?s.classList.add("font-sans"):"monospace"===e.font&&s.classList.add("font-mono"))},t=s.useRef(e),s.useEffect(()=>{t.current=e},[e]),s.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&t.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>t],68869)},68256,e=>{"use strict";var s=e.i(74702);e.s(["Typography",()=>s.T])},42836,e=>{"use strict";var s=e.i(88102);e.s(["Button",()=>s.B])},65251,e=>{"use strict";var s=e.i(2582);e.i(82419);var t=e.i(42836),a=e.i(39048),n=e.i(68256),r=e.i(86900),i=e.i(68869);let o=`import { Button, Progress, Typography } from '@nipsys/shadcn-lsd';
import { useState } from 'react';

export function Example() {
  const [paused, setPaused] = useState(false);

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Paused Indeterminate</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base)">
        <Progress indeterminate paused={paused} />
        <div>
          <Button variant="outlined" size="sm" onClick={() => setPaused(!paused)}>
            {paused ? 'Resume' : 'Pause'}
          </Button>
        </div>
      </div>
    </div>
  );
}`;function d(){(0,i.useSendThemeToIframes)();let[e,o]=(0,r.useState)(!1);return(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(n.Typography,{variant:"label1",children:"Paused Indeterminate"}),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(a.Progress,{indeterminate:!0,paused:e}),(0,s.jsx)("div",{children:(0,s.jsx)(t.Button,{variant:"outlined",size:"sm",onClick:()=>o(!e),children:e?"Resume":"Pause"})})]})]})}function l(){return(0,s.jsx)(d,{})}e.s(["CODE",0,o,"ProgressPausedExample",()=>d,"default",()=>l])}]);