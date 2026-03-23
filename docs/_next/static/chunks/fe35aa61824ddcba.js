(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,t=>{"use strict";var e=t.i(86900);function o(){var t;let o;t=t=>{let e=document.documentElement;t.theme&&("dark"===t.theme?e.classList.add("dark"):e.classList.remove("dark")),t.accent&&("monochrome"===t.accent?e.removeAttribute("data-theme"):e.setAttribute("data-theme",t.accent)),t.font&&(e.classList.remove("font-serif","font-sans","font-mono"),"serif"===t.font?e.classList.add("font-serif"):"sans-serif"===t.font?e.classList.add("font-sans"):"monospace"===t.font&&e.classList.add("font-mono"))},o=e.useRef(t),e.useEffect(()=>{o.current=t},[t]),e.useEffect(()=>{if(window.self===window.top)return;let t=t=>{"example-params"===t.data.type&&o.current(t.data.data)};return window.addEventListener("message",t),()=>{window.removeEventListener("message",t)}},["example-params"])}t.s(["useSendThemeToIframes",()=>o],68869)},42836,t=>{"use strict";var e=t.i(88102);t.s(["Button",()=>e.B])},663,t=>{"use strict";var e=t.i(5737);t.s(["ButtonGroup",()=>e.B])},9407,t=>{"use strict";var e=t.i(2582);t.i(82419);var o=t.i(42836),n=t.i(663),s=t.i(93336),r=t.i(68869);let u=`import { Button, ButtonGroup, ButtonGroupText } from '@nipsys/shadcn-lsd';

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