(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,t=>{"use strict";var e=t.i(86900);function o(){var t;let o;t=t=>{let e=document.documentElement;t.theme&&("dark"===t.theme?e.classList.add("dark"):e.classList.remove("dark")),t.accent&&("monochrome"===t.accent?e.removeAttribute("data-theme"):e.setAttribute("data-theme",t.accent)),t.font&&(e.classList.remove("font-serif","font-sans","font-mono"),"serif"===t.font?e.classList.add("font-serif"):"sans-serif"===t.font?e.classList.add("font-sans"):"monospace"===t.font&&e.classList.add("font-mono"))},o=e.useRef(t),e.useEffect(()=>{o.current=t},[t]),e.useEffect(()=>{if(window.self===window.top)return;let t=t=>{"example-params"===t.data.type&&o.current(t.data.data)};return window.addEventListener("message",t),()=>{window.removeEventListener("message",t)}},["example-params"])}t.s(["useSendThemeToIframes",()=>o],68869)},68256,t=>{"use strict";var e=t.i(74702);t.s(["Typography",()=>e.T])},42836,t=>{"use strict";var e=t.i(88102);t.s(["Button",()=>e.B])},75745,t=>{"use strict";var e=t.i(2582);t.i(82419);var o=t.i(42836),i=t.i(8864),s=t.i(89580),r=t.i(5816),n=t.i(68256),a=t.i(96494),l=t.i(68869);function d({children:t,...o}){return(0,l.useSendThemeToIframes)(),(0,e.jsx)(a.TooltipProvider,{...o,children:t})}let c=`import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
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
}`;function p(){return(0,e.jsx)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:(0,e.jsx)(d,{children:(0,e.jsxs)(i.Tooltip,{children:[(0,e.jsx)(r.TooltipTrigger,{asChild:!0,children:(0,e.jsx)(o.Button,{variant:"outlined",children:"Hover me"})}),(0,e.jsx)(s.TooltipContent,{children:(0,e.jsx)(n.Typography,{variant:"body2",children:"This is a tooltip"})})]})})})}function u(){return(0,e.jsx)(p,{})}t.s(["CODE",0,c,"TooltipExample",()=>p,"default",()=>u],75745)}]);