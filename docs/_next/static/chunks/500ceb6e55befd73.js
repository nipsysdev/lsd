(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,t=>{"use strict";var e=t.i(75201);function n(){var t;let n;t=t=>{let e=document.documentElement;t.theme&&("dark"===t.theme?e.classList.add("dark"):e.classList.remove("dark")),t.accent&&("monochrome"===t.accent?e.removeAttribute("data-theme"):e.setAttribute("data-theme",t.accent)),t.font&&(e.classList.remove("font-serif","font-sans","font-mono"),"serif"===t.font?e.classList.add("font-serif"):"sans-serif"===t.font?e.classList.add("font-sans"):"monospace"===t.font&&e.classList.add("font-mono"))},n=e.useRef(t),e.useEffect(()=>{n.current=t},[t]),e.useEffect(()=>{if(window.self===window.top)return;let t=t=>{"example-params"===t.data.type&&n.current(t.data.data)};return window.addEventListener("message",t),()=>{window.removeEventListener("message",t)}},["example-params"])}t.s(["useSendThemeToIframes",()=>n],45173)},71725,t=>{"use strict";var e=t.i(98134);t.i(26940);var n=t.i(59038),o=t.i(23206),s=t.i(45173);let r=`import { Button, ButtonGroup } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <ButtonGroup orientation="horizontal">
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
  );
}
`;function a(){return(0,s.useSendThemeToIframes)(),(0,e.jsxs)(o.ButtonGroup,{orientation:"horizontal",children:[(0,e.jsx)(n.Button,{children:"Left"}),(0,e.jsx)(n.Button,{children:"Middle"}),(0,e.jsx)(n.Button,{children:"Right"})]})}function i(){return(0,e.jsx)(a,{})}t.s(["CODE",0,r,"Example",()=>a,"default",()=>i])}]);