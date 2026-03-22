(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var a=e.i(75201);function t(){var e;let t;e=e=>{let a=document.documentElement;e.theme&&("dark"===e.theme?a.classList.add("dark"):a.classList.remove("dark")),e.accent&&("monochrome"===e.accent?a.removeAttribute("data-theme"):a.setAttribute("data-theme",e.accent)),e.font&&(a.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?a.classList.add("font-serif"):"sans-serif"===e.font?a.classList.add("font-sans"):"monospace"===e.font&&a.classList.add("font-mono"))},t=a.useRef(e),a.useEffect(()=>{t.current=e},[e]),a.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&t.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>t],45173)},61417,e=>{"use strict";var a=e.i(20607);e.s(["Typography",()=>a.T])},37014,e=>{"use strict";var a=e.i(98134);e.i(26940);var t=e.i(34803),l=e.i(57757),o=e.i(61417),s=e.i(45173);let r=`import { ToggleGroup, ToggleGroupItem, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Small Size</Typography>
      <ToggleGroup type="multiple" size="sm">
        <ToggleGroupItem value="1" aria-label="Toggle 1">
          1
        </ToggleGroupItem>
        <ToggleGroupItem value="2" aria-label="Toggle 2">
          2
        </ToggleGroupItem>
        <ToggleGroupItem value="3" aria-label="Toggle 3">
          3
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}`;function i(){return(0,s.useSendThemeToIframes)(),(0,a.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,a.jsx)(o.Typography,{variant:"label1",children:"Small Size"}),(0,a.jsxs)(t.ToggleGroup,{type:"multiple",size:"sm",children:[(0,a.jsx)(l.ToggleGroupItem,{value:"1","aria-label":"Toggle 1",children:"1"}),(0,a.jsx)(l.ToggleGroupItem,{value:"2","aria-label":"Toggle 2",children:"2"}),(0,a.jsx)(l.ToggleGroupItem,{value:"3","aria-label":"Toggle 3",children:"3"})]})]})}function n(){return(0,a.jsx)(i,{})}e.s(["CODE",0,r,"ToggleGroupSizesExample",()=>i,"default",()=>n])}]);