(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var a=e.i(75201);function s(){var e;let s;e=e=>{let a=document.documentElement;e.theme&&("dark"===e.theme?a.classList.add("dark"):a.classList.remove("dark")),e.accent&&("monochrome"===e.accent?a.removeAttribute("data-theme"):a.setAttribute("data-theme",e.accent)),e.font&&(a.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?a.classList.add("font-serif"):"sans-serif"===e.font?a.classList.add("font-sans"):"monospace"===e.font&&a.classList.add("font-mono"))},s=a.useRef(e),a.useEffect(()=>{s.current=e},[e]),a.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&s.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>s],45173)},61417,e=>{"use strict";var a=e.i(20607);e.s(["Typography",()=>a.T])},4204,e=>{"use strict";var a=e.i(98134);e.i(26940);var s=e.i(61417),t=e.i(45173);let r=`import { Separator, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Typography variant="label1">Separator with Text</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base)">
        <Typography variant="body1">Some content above the separator</Typography>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-(--lsd-color-background) px-(--lsd-spacing-base)">
              <Typography variant="label2">Or</Typography>
            </span>
          </div>
        </div>
        <Typography variant="body1">Some content below the separator</Typography>
      </div>
    </div>
  );
}
`;function n(){return(0,t.useSendThemeToIframes)(),(0,a.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)",children:[(0,a.jsx)(s.Typography,{variant:"label1",children:"Separator with Text"}),(0,a.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,a.jsx)(s.Typography,{variant:"body1",children:"Some content above the separator"}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("div",{className:"absolute inset-0 flex items-center",children:(0,a.jsx)("span",{className:"w-full border-t"})}),(0,a.jsx)("div",{className:"relative flex justify-center text-xs uppercase",children:(0,a.jsx)("span",{className:"bg-(--lsd-color-background) px-(--lsd-spacing-base)",children:(0,a.jsx)(s.Typography,{variant:"label2",children:"Or"})})})]}),(0,a.jsx)(s.Typography,{variant:"body1",children:"Some content below the separator"})]})]})}function o(){return(0,a.jsx)(n,{})}e.s(["CODE",0,r,"Example",()=>n,"default",()=>o])}]);