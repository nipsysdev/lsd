(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var s=e.i(75201);function a(){var e;let a;e=e=>{let s=document.documentElement;e.theme&&("dark"===e.theme?s.classList.add("dark"):s.classList.remove("dark")),e.accent&&("monochrome"===e.accent?s.removeAttribute("data-theme"):s.setAttribute("data-theme",e.accent)),e.font&&(s.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?s.classList.add("font-serif"):"sans-serif"===e.font?s.classList.add("font-sans"):"monospace"===e.font&&s.classList.add("font-mono"))},a=s.useRef(e),s.useEffect(()=>{a.current=e},[e]),s.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],45173)},61417,e=>{"use strict";var s=e.i(20607);e.s(["Typography",()=>s.T])},11202,e=>{"use strict";var s=e.i(80183);e.s(["Label",()=>s.L])},3412,e=>{"use strict";var s=e.i(98134);e.i(26940);var a=e.i(39225),l=e.i(11202),c=e.i(61417),t=e.i(75201),d=e.i(45173);let n=`import { Checkbox, Label, Typography } from '@nipsys/shadcn-lsd';
import { useState } from 'react';

export function Example() {
  const [controlled, setControlled] = useState(false);
  const [controlledChecked, setControlledChecked] = useState(true);

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Basic States</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <Checkbox />
          <Typography variant="body1">Unchecked</Typography>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <Checkbox defaultChecked />
          <Typography variant="body1">Checked</Typography>
        </div>
      </div>

      <Typography variant="label1">Controlled Components</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
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

      <Typography variant="label1">With Labels</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <Checkbox id="terms" />
          <Label htmlFor="terms">
            I agree to the terms and conditions
          </Label>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <Checkbox id="newsletter" defaultChecked />
          <Label htmlFor="newsletter">
            Subscribe to newsletter
          </Label>
        </div>
      </div>
    </div>
  );
}`;function r(){(0,d.useSendThemeToIframes)();let[e,n]=(0,t.useState)(!1),[r,i]=(0,t.useState)(!0);return(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(c.Typography,{variant:"label1",children:"Basic States"}),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)",children:[(0,s.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-smaller)",children:[(0,s.jsx)(a.Checkbox,{}),(0,s.jsx)(c.Typography,{variant:"body1",children:"Unchecked"})]}),(0,s.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-smaller)",children:[(0,s.jsx)(a.Checkbox,{defaultChecked:!0}),(0,s.jsx)(c.Typography,{variant:"body1",children:"Checked"})]})]}),(0,s.jsx)(c.Typography,{variant:"label1",children:"Controlled Components"}),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)",children:[(0,s.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-smaller)",children:[(0,s.jsx)(a.Checkbox,{checked:e,onCheckedChange:e=>n(!0===e)}),(0,s.jsxs)(c.Typography,{variant:"body1",children:["Controlled (",e?"checked":"unchecked",")"]})]}),(0,s.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-smaller)",children:[(0,s.jsx)(a.Checkbox,{checked:r,onCheckedChange:e=>i(!0===e)}),(0,s.jsxs)(c.Typography,{variant:"body1",children:["Controlled (",r?"checked":"unchecked",")"]})]})]}),(0,s.jsx)(c.Typography,{variant:"label1",children:"With Labels"}),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)",children:[(0,s.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-smaller)",children:[(0,s.jsx)(a.Checkbox,{id:"terms"}),(0,s.jsx)(l.Label,{htmlFor:"terms",children:"I agree to the terms and conditions"})]}),(0,s.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-smaller)",children:[(0,s.jsx)(a.Checkbox,{id:"newsletter",defaultChecked:!0}),(0,s.jsx)(l.Label,{htmlFor:"newsletter",children:"Subscribe to newsletter"})]})]})]})}function i(){return(0,s.jsx)(r,{})}e.s(["CODE",0,n,"CheckboxExample",()=>r,"default",()=>i])}]);