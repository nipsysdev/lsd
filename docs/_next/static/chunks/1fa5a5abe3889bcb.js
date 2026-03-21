(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,t=>{"use strict";var e=t.i(75201);function n(){var t;let n;t=t=>{let e=document.documentElement;t.theme&&("dark"===t.theme?e.classList.add("dark"):e.classList.remove("dark")),t.accent&&("monochrome"===t.accent?e.removeAttribute("data-theme"):e.setAttribute("data-theme",t.accent)),t.font&&(e.classList.remove("font-serif","font-sans","font-mono"),"serif"===t.font?e.classList.add("font-serif"):"sans-serif"===t.font?e.classList.add("font-sans"):"monospace"===t.font&&e.classList.add("font-mono"))},n=e.useRef(t),e.useEffect(()=>{n.current=t},[t]),e.useEffect(()=>{if(window.self===window.top)return;let t=t=>{"example-params"===t.data.type&&n.current(t.data.data)};return window.addEventListener("message",t),()=>{window.removeEventListener("message",t)}},["example-params"])}t.s(["useSendThemeToIframes",()=>n],45173)},22450,t=>{"use strict";var e=t.i(74116);t.s(["Button",()=>e.B])},29355,t=>{"use strict";var e=t.i(60005);t.s(["ButtonGroup",()=>e.B])},86522,t=>{"use strict";var e=t.i(98134);t.i(26940);var n=t.i(22450),o=t.i(29355),s=t.i(66056),r=t.i(45173);let a=`import { Button, ButtonGroup, ButtonGroupSeparator } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <ButtonGroup>
      <Button>Save</Button>
      <Button>Cancel</Button>
      <ButtonGroupSeparator />
      <Button variant="destructive">Delete</Button>
    </ButtonGroup>
  );
}
`;function u(){return(0,r.useSendThemeToIframes)(),(0,e.jsxs)(o.ButtonGroup,{children:[(0,e.jsx)(n.Button,{children:"Save"}),(0,e.jsx)(n.Button,{children:"Cancel"}),(0,e.jsx)(s.ButtonGroupSeparator,{}),(0,e.jsx)(n.Button,{variant:"destructive",children:"Delete"})]})}function i(){return(0,e.jsx)(u,{})}t.s(["CODE",0,a,"Example",()=>u,"default",()=>i])}]);