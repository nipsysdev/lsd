(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,e=>{"use strict";var t=e.i(86900);function s(){var e;let s;e=e=>{let t=document.documentElement;e.theme&&("dark"===e.theme?t.classList.add("dark"):t.classList.remove("dark")),e.accent&&("monochrome"===e.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e.accent)),e.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?t.classList.add("font-serif"):"sans-serif"===e.font?t.classList.add("font-sans"):"monospace"===e.font&&t.classList.add("font-mono"))},s=t.useRef(e),t.useEffect(()=>{s.current=e},[e]),t.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&s.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>s],68869)},68256,e=>{"use strict";var t=e.i(74702);e.s(["Typography",()=>t.T])},52891,e=>{"use strict";var t=e.i(2582);e.i(82419);var s=e.i(78956),a=e.i(68256),n=e.i(86900),o=e.i(68869);let i=`import { Switch, Typography } from '@nipsys/shadcn-lsd';
import { useState } from 'react';

export function Example() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center gap-(--lsd-spacing-base)">
      <Switch checked={checked} onCheckedChange={setChecked} />
      <Typography variant="body2">
        Notifications: {checked ? 'Enabled' : 'Disabled'}
      </Typography>
    </div>
  );
}`;function c(){(0,o.useSendThemeToIframes)();let[e,i]=(0,n.useState)(!1);return(0,t.jsxs)("div",{className:"flex gap-(--lsd-spacing-base)",children:[(0,t.jsx)(s.Switch,{checked:e,onCheckedChange:i}),(0,t.jsxs)(a.Typography,{variant:"body2",children:["Notifications: ",e?"Enabled":"Disabled"]})]})}function r(){return(0,t.jsx)(c,{})}e.s(["CODE",0,i,"SwitchControlledExample",()=>c,"default",()=>r])}]);