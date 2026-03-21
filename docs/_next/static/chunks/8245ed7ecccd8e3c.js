(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var s=e.i(75201);function a(){var e;let a;e=e=>{let s=document.documentElement;e.theme&&("dark"===e.theme?s.classList.add("dark"):s.classList.remove("dark")),e.accent&&("monochrome"===e.accent?s.removeAttribute("data-theme"):s.setAttribute("data-theme",e.accent)),e.font&&(s.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?s.classList.add("font-serif"):"sans-serif"===e.font?s.classList.add("font-sans"):"monospace"===e.font&&s.classList.add("font-mono"))},a=s.useRef(e),s.useEffect(()=>{a.current=e},[e]),s.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],45173)},61417,e=>{"use strict";var s=e.i(20607);e.s(["Typography",()=>s.T])},82233,e=>{"use strict";var s=e.i(98134);e.i(26940);var a=e.i(30451),t=e.i(61417),i=e.i(45173);let d=`import { Switch, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
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
}`;function c(){return(0,i.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)",children:[(0,s.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-base)",children:[(0,s.jsx)(a.Switch,{defaultChecked:!1}),(0,s.jsx)(t.Typography,{variant:"body2",children:"Unchecked"})]}),(0,s.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-base)",children:[(0,s.jsx)(a.Switch,{defaultChecked:!0}),(0,s.jsx)(t.Typography,{variant:"body2",children:"Checked"})]}),(0,s.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-base)",children:[(0,s.jsx)(a.Switch,{disabled:!0}),(0,s.jsx)(t.Typography,{variant:"body2",children:"Disabled Unchecked"})]}),(0,s.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-base)",children:[(0,s.jsx)(a.Switch,{disabled:!0,defaultChecked:!0}),(0,s.jsx)(t.Typography,{variant:"body2",children:"Disabled Checked"})]})]})}function n(){return(0,s.jsx)(c,{})}e.s(["CODE",0,d,"SwitchBasicExample",()=>c,"default",()=>n])}]);