(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var a=e.i(75201);function s(){var e;let s;e=e=>{let a=document.documentElement;e.theme&&("dark"===e.theme?a.classList.add("dark"):a.classList.remove("dark")),e.accent&&("monochrome"===e.accent?a.removeAttribute("data-theme"):a.setAttribute("data-theme",e.accent)),e.font&&(a.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?a.classList.add("font-serif"):"sans-serif"===e.font?a.classList.add("font-sans"):"monospace"===e.font&&a.classList.add("font-mono"))},s=a.useRef(e),a.useEffect(()=>{s.current=e},[e]),a.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&s.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>s],45173)},82233,e=>{"use strict";var a=e.i(98134);e.i(26940);var s=e.i(30451),t=e.i(6896),d=e.i(45173);let i=`import { Switch, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Switch defaultChecked={false} />
        <Typography variant="body2">Unchecked</Typography>
      </div>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Switch defaultChecked={true} />
        <Typography variant="body2">Checked</Typography>
      </div>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Switch disabled />
        <Typography variant="body2">Disabled Unchecked</Typography>
      </div>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Switch disabled defaultChecked={true} />
        <Typography variant="body2">Disabled Checked</Typography>
      </div>
    </div>
  );
}`;function c(){return(0,d.useSendThemeToIframes)(),(0,a.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,a.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-base)",children:[(0,a.jsx)(s.Switch,{defaultChecked:!1}),(0,a.jsx)(t.Typography,{variant:"body2",children:"Unchecked"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-base)",children:[(0,a.jsx)(s.Switch,{defaultChecked:!0}),(0,a.jsx)(t.Typography,{variant:"body2",children:"Checked"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-base)",children:[(0,a.jsx)(s.Switch,{disabled:!0}),(0,a.jsx)(t.Typography,{variant:"body2",children:"Disabled Unchecked"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-base)",children:[(0,a.jsx)(s.Switch,{disabled:!0,defaultChecked:!0}),(0,a.jsx)(t.Typography,{variant:"body2",children:"Disabled Checked"})]})]})}function n(){return(0,a.jsx)(c,{})}e.s(["CODE",0,i,"SwitchBasicExample",()=>c,"default",()=>n])}]);