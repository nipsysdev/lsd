(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var t=e.i(75201);function a(){var e;let a;e=e=>{let t=document.documentElement;e.theme&&("dark"===e.theme?t.classList.add("dark"):t.classList.remove("dark")),e.accent&&("monochrome"===e.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e.accent)),e.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?t.classList.add("font-serif"):"sans-serif"===e.font?t.classList.add("font-sans"):"monospace"===e.font&&t.classList.add("font-mono"))},a=t.useRef(e),t.useEffect(()=>{a.current=e},[e]),t.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],45173)},70926,e=>{"use strict";var t=e.i(98134);e.i(26940);var a=e.i(34803),s=e.i(57757),l=e.i(45173);let o=`import { ToggleGroup, ToggleGroupItem } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <ToggleGroup type="single" defaultValue="item-2">
        <ToggleGroupItem value="item-1" aria-label="Item 1">
          One
        </ToggleGroupItem>
        <ToggleGroupItem value="item-2" aria-label="Item 2">
          Two
        </ToggleGroupItem>
        <ToggleGroupItem value="item-3" aria-label="Item 3">
          Three
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}`;function r(){return(0,l.useSendThemeToIframes)(),(0,t.jsx)("div",{className:"flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)",children:(0,t.jsxs)(a.ToggleGroup,{type:"single",defaultValue:"item-2",children:[(0,t.jsx)(s.ToggleGroupItem,{value:"item-1","aria-label":"Item 1",children:"One"}),(0,t.jsx)(s.ToggleGroupItem,{value:"item-2","aria-label":"Item 2",children:"Two"}),(0,t.jsx)(s.ToggleGroupItem,{value:"item-3","aria-label":"Item 3",children:"Three"})]})})}function n(){return(0,t.jsx)(r,{})}e.s(["CODE",0,o,"ToggleGroupExample",()=>r,"default",()=>n])}]);