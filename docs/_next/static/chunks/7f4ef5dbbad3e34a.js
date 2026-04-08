(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var s=e.i(75201);function t(){var e;let t;e=e=>{let s=document.documentElement;e.theme&&("dark"===e.theme?s.classList.add("dark"):s.classList.remove("dark")),e.accent&&("monochrome"===e.accent?s.removeAttribute("data-theme"):s.setAttribute("data-theme",e.accent)),e.font&&(s.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?s.classList.add("font-serif"):"sans-serif"===e.font?s.classList.add("font-sans"):"monospace"===e.font&&s.classList.add("font-mono"))},t=s.useRef(e),s.useEffect(()=>{t.current=e},[e]),s.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&t.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>t],45173)},70105,e=>{"use strict";var s=e.i(98134);e.i(26940);var t=e.i(39225),a=e.i(6896),c=e.i(75201),o=e.i(45173);let n=`import { Checkbox, Typography } from '@nipsys/shadcn-lsd';
import { useState } from 'react';

export function Example() {
  const [controlled, setControlled] = useState(false);
  const [controlledChecked, setControlledChecked] = useState(true);

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Controlled Components</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base)">
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <Checkbox
            checked={controlled}
            onCheckedChange={checked => setControlled(checked === true)}
          />
          <Typography variant="body1">
            Controlled ({controlled ? 'checked' : 'unchecked'})
          </Typography>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <Checkbox
            checked={controlledChecked}
            onCheckedChange={checked => setControlledChecked(checked === true)}
          />
          <Typography variant="body1">
            Controlled ({controlledChecked ? 'checked' : 'unchecked'})
          </Typography>
        </div>
      </div>
    </div>
  );
}`;function l(){(0,o.useSendThemeToIframes)();let[e,n]=(0,c.useState)(!1),[l,d]=(0,c.useState)(!0);return(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(a.Typography,{variant:"label1",children:"Controlled Components"}),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-smaller)",children:[(0,s.jsx)(t.Checkbox,{checked:e,onCheckedChange:e=>n(!0===e)}),(0,s.jsxs)(a.Typography,{variant:"body1",children:["Controlled (",e?"checked":"unchecked",")"]})]}),(0,s.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-smaller)",children:[(0,s.jsx)(t.Checkbox,{checked:l,onCheckedChange:e=>d(!0===e)}),(0,s.jsxs)(a.Typography,{variant:"body1",children:["Controlled (",l?"checked":"unchecked",")"]})]})]})]})}function d(){return(0,s.jsx)(l,{})}e.s(["CODE",0,n,"CheckboxControlledExample",()=>l,"default",()=>d])}]);