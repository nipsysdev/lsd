(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var s=e.i(75201);function t(){var e;let t;e=e=>{let s=document.documentElement;e.theme&&("dark"===e.theme?s.classList.add("dark"):s.classList.remove("dark")),e.accent&&("monochrome"===e.accent?s.removeAttribute("data-theme"):s.setAttribute("data-theme",e.accent)),e.font&&(s.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?s.classList.add("font-serif"):"sans-serif"===e.font?s.classList.add("font-sans"):"monospace"===e.font&&s.classList.add("font-mono"))},t=s.useRef(e),s.useEffect(()=>{t.current=e},[e]),s.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&t.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>t],45173)},54857,e=>{"use strict";var s=e.i(88426);e.s(["Badge",()=>s.B])},67694,e=>{"use strict";var s=e.i(98134);e.i(26940);var t=e.i(54857),i=e.i(75201),a=e.i(45173);let d=`import { useState } from 'react';
import { Badge } from '@nipsys/shadcn-lsd';

export function Example() {
  const [badges, setBadges] = useState([
    { id: 1, text: 'Dismissible 1' },
    { id: 2, text: 'Dismissible 2' },
    { id: 3, text: 'Dismissible 3' },
  ]);

  const handleDismiss = (id: number) => {
    setBadges(prev => prev.filter(b => b.id !== id));
  };

  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      {badges.map(badge => (
        <Badge 
          key={badge.id}
          variant="filled"
          onDismiss={() => handleDismiss(badge.id)}
        >
          {badge.text}
        </Badge>
      ))}
      {badges.length === 0 && (
        <span>All badges dismissed</span>
      )}
    </div>
  );
}`;function n(){let[e,d]=(0,i.useState)([{id:1,text:"Dismissible 1"},{id:2,text:"Dismissible 2"},{id:3,text:"Dismissible 3"}]);return(0,a.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)",children:[e.map(e=>(0,s.jsx)(t.Badge,{variant:"filled",onDismiss:()=>{var s;return s=e.id,void d(e=>e.filter(e=>e.id!==s))},children:e.text},e.id)),0===e.length&&(0,s.jsx)("span",{children:"All badges dismissed"})]})}function r(){return(0,s.jsx)(n,{})}e.s(["BadgeDismissibleExample",()=>n,"CODE",0,d,"default",()=>r])}]);