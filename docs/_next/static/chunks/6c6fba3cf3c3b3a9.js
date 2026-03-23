(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,e=>{"use strict";var t=e.i(86900);function a(){var e;let a;e=e=>{let t=document.documentElement;e.theme&&("dark"===e.theme?t.classList.add("dark"):t.classList.remove("dark")),e.accent&&("monochrome"===e.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e.accent)),e.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?t.classList.add("font-serif"):"sans-serif"===e.font?t.classList.add("font-sans"):"monospace"===e.font&&t.classList.add("font-mono"))},a=t.useRef(e),t.useEffect(()=>{a.current=e},[e]),t.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],68869)},68256,e=>{"use strict";var t=e.i(74702);e.s(["Typography",()=>t.T])},22723,e=>{"use strict";var t=e.i(2582);e.i(82419);var a=e.i(6246),l=e.i(23898),o=e.i(68256),r=e.i(68869);let i=`import { ToggleGroup, ToggleGroupItem, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Multiple Selection</Typography>
      <ToggleGroup type="multiple" defaultValue={['item-1', 'item-2']}>
        <ToggleGroupItem value="item-1" aria-label="Toggle item 1">
          One
        </ToggleGroupItem>
        <ToggleGroupItem value="item-2" aria-label="Toggle item 2">
          Two
        </ToggleGroupItem>
        <ToggleGroupItem value="item-3" aria-label="Toggle item 3">
          Three
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}`;function s(){return(0,r.useSendThemeToIframes)(),(0,t.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,t.jsx)(o.Typography,{variant:"label1",children:"Multiple Selection"}),(0,t.jsxs)(a.ToggleGroup,{type:"multiple",defaultValue:["item-1","item-2"],children:[(0,t.jsx)(l.ToggleGroupItem,{value:"item-1","aria-label":"Toggle item 1",children:"One"}),(0,t.jsx)(l.ToggleGroupItem,{value:"item-2","aria-label":"Toggle item 2",children:"Two"}),(0,t.jsx)(l.ToggleGroupItem,{value:"item-3","aria-label":"Toggle item 3",children:"Three"})]})]})}function n(){return(0,t.jsx)(s,{})}e.s(["CODE",0,i,"ToggleGroupMultipleExample",()=>s,"default",()=>n])}]);