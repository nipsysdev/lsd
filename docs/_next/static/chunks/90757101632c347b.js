(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,e=>{"use strict";var s=e.i(86900);function a(){var e;let a;e=e=>{let s=document.documentElement;e.theme&&("dark"===e.theme?s.classList.add("dark"):s.classList.remove("dark")),e.accent&&("monochrome"===e.accent?s.removeAttribute("data-theme"):s.setAttribute("data-theme",e.accent)),e.font&&(s.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?s.classList.add("font-serif"):"sans-serif"===e.font?s.classList.add("font-sans"):"monospace"===e.font&&s.classList.add("font-mono"))},a=s.useRef(e),s.useEffect(()=>{a.current=e},[e]),s.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],68869)},68256,e=>{"use strict";var s=e.i(74702);e.s(["Typography",()=>s.T])},42836,e=>{"use strict";var s=e.i(88102);e.s(["Button",()=>s.B])},25565,e=>{"use strict";var s=e.i(2582);e.i(82419);var a=e.i(42836),t=e.i(39048),i=e.i(68256),l=e.i(86900),o=e.i(68869);let r=`import { Button, Progress, Typography } from '@nipsys/shadcn-lsd';
import { useState } from 'react';

export function Example() {
  const [paused, setPaused] = useState(false);

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Indeterminate Progress</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
        <Progress indeterminate />
        <Progress indeterminate speed="slow" />
        <Progress indeterminate speed="fast" />
      </div>

      <Typography variant="label1">Paused Indeterminate</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
        <Progress indeterminate paused={paused} />
        <div>
          <Button variant="outlined" size="sm" onClick={() => setPaused(!paused)}>
            {paused ? 'Resume' : 'Pause'}
          </Button>
        </div>
      </div>

      <Typography variant="label1">Color Variants</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
        <Progress value={25} variant="default" showLabel labelPosition="top" />
        <Progress value={50} variant="success" showLabel labelPosition="top" />
        <Progress value={75} variant="warning" showLabel labelPosition="top" />
        <Progress value={100} variant="destructive" showLabel labelPosition="top" />
      </div>

      <Typography variant="label1">Sizes</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
        <Progress value={33} size="sm" showLabel labelPosition="top" />
        <Progress value={66} size="md" showLabel labelPosition="top" />
        <Progress value={100} size="lg" showLabel labelPosition="top" />
      </div>
    </div>
  );
}`;function n(){(0,o.useSendThemeToIframes)();let[e,r]=(0,l.useState)(!1);return(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(i.Typography,{variant:"label1",children:"Indeterminate Progress"}),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)",children:[(0,s.jsx)(t.Progress,{indeterminate:!0}),(0,s.jsx)(t.Progress,{indeterminate:!0,speed:"slow"}),(0,s.jsx)(t.Progress,{indeterminate:!0,speed:"fast"})]}),(0,s.jsx)(i.Typography,{variant:"label1",children:"Paused Indeterminate"}),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)",children:[(0,s.jsx)(t.Progress,{indeterminate:!0,paused:e}),(0,s.jsx)("div",{children:(0,s.jsx)(a.Button,{variant:"outlined",size:"sm",onClick:()=>r(!e),children:e?"Resume":"Pause"})})]}),(0,s.jsx)(i.Typography,{variant:"label1",children:"Color Variants"}),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)",children:[(0,s.jsx)(t.Progress,{value:25,variant:"default",showLabel:!0,labelPosition:"top"}),(0,s.jsx)(t.Progress,{value:50,variant:"success",showLabel:!0,labelPosition:"top"}),(0,s.jsx)(t.Progress,{value:75,variant:"warning",showLabel:!0,labelPosition:"top"}),(0,s.jsx)(t.Progress,{value:100,variant:"destructive",showLabel:!0,labelPosition:"top"})]}),(0,s.jsx)(i.Typography,{variant:"label1",children:"Sizes"}),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)",children:[(0,s.jsx)(t.Progress,{value:33,size:"sm",showLabel:!0,labelPosition:"top"}),(0,s.jsx)(t.Progress,{value:66,size:"md",showLabel:!0,labelPosition:"top"}),(0,s.jsx)(t.Progress,{value:100,size:"lg",showLabel:!0,labelPosition:"top"})]})]})}function d(){return(0,s.jsx)(n,{})}e.s(["CODE",0,r,"ProgressFeaturesExample",()=>n,"default",()=>d])}]);