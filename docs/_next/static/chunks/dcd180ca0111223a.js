(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var t=e.i(75201);function a(){var e;let a;e=e=>{let t=document.documentElement;e.theme&&("dark"===e.theme?t.classList.add("dark"):t.classList.remove("dark")),e.accent&&("monochrome"===e.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e.accent)),e.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?t.classList.add("font-serif"):"sans-serif"===e.font?t.classList.add("font-sans"):"monospace"===e.font&&t.classList.add("font-mono"))},a=t.useRef(e),t.useEffect(()=>{a.current=e},[e]),t.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],45173)},31174,e=>{"use strict";var t=e.i(98134);e.i(26940);var a=e.i(73597),s=e.i(75201),n=e.i(45173);let i=`import { useState } from 'react';
import { Badge } from '@nipsys/shadcn-lsd';

export function Example() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base)">
      <Badge onClick={() => alert('Clicked!')}>
        Clickable Badge
      </Badge>
      <Badge 
        variant="success" 
        onClick={() => setClickCount(c => c + 1)}
      >
        Clicked {clickCount} times
      </Badge>
      <Badge 
        variant="info" 
        onClick={() => console.log('Info badge clicked')}
      >
        More Info
      </Badge>
    </div>
  );
}`;function c(){let[e,i]=(0,s.useState)(0);return(0,n.useSendThemeToIframes)(),(0,t.jsxs)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base)",children:[(0,t.jsx)(a.Badge,{onClick:()=>alert("Clicked!"),children:"Clickable Badge"}),(0,t.jsxs)(a.Badge,{variant:"success",onClick:()=>i(e=>e+1),children:["Clicked ",e," times"]}),(0,t.jsx)(a.Badge,{variant:"info",onClick:()=>console.log("Info badge clicked"),children:"More Info"})]})}function o(){return(0,t.jsx)(c,{})}e.s(["BadgeInteractiveExample",()=>c,"CODE",0,i,"default",()=>o])}]);