(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,t=>{"use strict";var e=t.i(75201);function o(){var t;let o;t=t=>{let e=document.documentElement;t.theme&&("dark"===t.theme?e.classList.add("dark"):e.classList.remove("dark")),t.accent&&("monochrome"===t.accent?e.removeAttribute("data-theme"):e.setAttribute("data-theme",t.accent)),t.font&&(e.classList.remove("font-serif","font-sans","font-mono"),"serif"===t.font?e.classList.add("font-serif"):"sans-serif"===t.font?e.classList.add("font-sans"):"monospace"===t.font&&e.classList.add("font-mono"))},o=e.useRef(t),e.useEffect(()=>{o.current=t},[t]),e.useEffect(()=>{if(window.self===window.top)return;let t=t=>{"example-params"===t.data.type&&o.current(t.data.data)};return window.addEventListener("message",t),()=>{window.removeEventListener("message",t)}},["example-params"])}t.s(["useSendThemeToIframes",()=>o],45173)},61417,t=>{"use strict";var e=t.i(20607);t.s(["Typography",()=>e.T])},22450,t=>{"use strict";var e=t.i(74116);t.s(["Button",()=>e.B])},68254,t=>{"use strict";var e=t.i(98134);t.i(26940);var o=t.i(22450),i=t.i(36987),s=t.i(40610),r=t.i(2887),a=t.i(61417),n=t.i(58550),l=t.i(45173);function d({children:t,...o}){return(0,l.useSendThemeToIframes)(),(0,e.jsx)(n.TooltipProvider,{...o,children:t})}let p=`import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Basic Tooltip</Typography>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outlined">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>
            <Typography variant="body2">This is a tooltip</Typography>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}`;function c(){return(0,e.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,e.jsx)(a.Typography,{variant:"label1",children:"Basic Tooltip"}),(0,e.jsx)(d,{children:(0,e.jsxs)(i.Tooltip,{children:[(0,e.jsx)(r.TooltipTrigger,{asChild:!0,children:(0,e.jsx)(o.Button,{variant:"outlined",children:"Hover me"})}),(0,e.jsx)(s.TooltipContent,{children:(0,e.jsx)(a.Typography,{variant:"body2",children:"This is a tooltip"})})]})})]})}function T(){return(0,e.jsx)(c,{})}t.s(["CODE",0,p,"TooltipBasicExample",()=>c,"default",()=>T],68254)}]);