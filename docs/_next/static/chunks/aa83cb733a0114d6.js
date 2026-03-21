(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,t=>{"use strict";var e=t.i(75201);function o(){var t;let o;t=t=>{let e=document.documentElement;t.theme&&("dark"===t.theme?e.classList.add("dark"):e.classList.remove("dark")),t.accent&&("monochrome"===t.accent?e.removeAttribute("data-theme"):e.setAttribute("data-theme",t.accent)),t.font&&(e.classList.remove("font-serif","font-sans","font-mono"),"serif"===t.font?e.classList.add("font-serif"):"sans-serif"===t.font?e.classList.add("font-sans"):"monospace"===t.font&&e.classList.add("font-mono"))},o=e.useRef(t),e.useEffect(()=>{o.current=t},[t]),e.useEffect(()=>{if(window.self===window.top)return;let t=t=>{"example-params"===t.data.type&&o.current(t.data.data)};return window.addEventListener("message",t),()=>{window.removeEventListener("message",t)}},["example-params"])}t.s(["useSendThemeToIframes",()=>o],45173)},22450,t=>{"use strict";var e=t.i(74116);t.s(["Button",()=>e.B])},29355,t=>{"use strict";var e=t.i(60005);t.s(["ButtonGroup",()=>e.B])},85069,t=>{"use strict";var e=t.i(98134);t.i(26940);var o=t.i(22450),n=t.i(29355),s=t.i(71952),r=t.i(45173);let u=`import { Button, ButtonGroup, ButtonGroupText } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <ButtonGroup>
      <Button>Previous</Button>
      <ButtonGroupText>Page 1 of 10</ButtonGroupText>
      <Button>Next</Button>
    </ButtonGroup>
  );
}
`;function a(){return(0,r.useSendThemeToIframes)(),(0,e.jsxs)(n.ButtonGroup,{children:[(0,e.jsx)(o.Button,{children:"Previous"}),(0,e.jsx)(s.ButtonGroupText,{children:"Page 1 of 10"}),(0,e.jsx)(o.Button,{children:"Next"})]})}function i(){return(0,e.jsx)(a,{})}t.s(["CODE",0,u,"Example",()=>a,"default",()=>i])}]);