(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,t=>{"use strict";var e=t.i(86900);function n(){var t;let n;t=t=>{let e=document.documentElement;t.theme&&("dark"===t.theme?e.classList.add("dark"):e.classList.remove("dark")),t.accent&&("monochrome"===t.accent?e.removeAttribute("data-theme"):e.setAttribute("data-theme",t.accent)),t.font&&(e.classList.remove("font-serif","font-sans","font-mono"),"serif"===t.font?e.classList.add("font-serif"):"sans-serif"===t.font?e.classList.add("font-sans"):"monospace"===t.font&&e.classList.add("font-mono"))},n=e.useRef(t),e.useEffect(()=>{n.current=t},[t]),e.useEffect(()=>{if(window.self===window.top)return;let t=t=>{"example-params"===t.data.type&&n.current(t.data.data)};return window.addEventListener("message",t),()=>{window.removeEventListener("message",t)}},["example-params"])}t.s(["useSendThemeToIframes",()=>n],68869)},42836,t=>{"use strict";var e=t.i(88102);t.s(["Button",()=>e.B])},663,t=>{"use strict";var e=t.i(5737);t.s(["ButtonGroup",()=>e.B])},95499,t=>{"use strict";var e=t.i(2582);t.i(82419);var n=t.i(42836),s=t.i(663),o=t.i(68869);let r=`import { Button, ButtonGroup } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <ButtonGroup>
      <Button variant="filled">Primary</Button>
      <Button variant="outlined">Secondary</Button>
    </ButtonGroup>
  );
}
`;function a(){return(0,o.useSendThemeToIframes)(),(0,e.jsxs)(s.ButtonGroup,{children:[(0,e.jsx)(n.Button,{variant:"filled",children:"Primary"}),(0,e.jsx)(n.Button,{variant:"outlined",children:"Secondary"})]})}function i(){return(0,e.jsx)(a,{})}t.s(["CODE",0,r,"Example",()=>a,"default",()=>i])}]);