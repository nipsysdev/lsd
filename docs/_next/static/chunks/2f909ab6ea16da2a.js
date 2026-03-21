(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var t=e.i(75201);function o(){var e;let o;e=e=>{let t=document.documentElement;e.theme&&("dark"===e.theme?t.classList.add("dark"):t.classList.remove("dark")),e.accent&&("monochrome"===e.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e.accent)),e.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?t.classList.add("font-serif"):"sans-serif"===e.font?t.classList.add("font-sans"):"monospace"===e.font&&t.classList.add("font-mono"))},o=t.useRef(e),t.useEffect(()=>{o.current=e},[e]),t.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&o.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>o],45173)},61417,e=>{"use strict";var t=e.i(20607);e.s(["Typography",()=>t.T])},22450,e=>{"use strict";var t=e.i(74116);e.s(["Button",()=>t.B])},24003,e=>{"use strict";var t=e.i(98134);e.i(26940);var o=e.i(22450),i=e.i(36987),s=e.i(40610),r=e.i(2887),n=e.i(61417),a=e.i(58550),l=e.i(45173);function d({children:e,...o}){return(0,l.useSendThemeToIframes)(),(0,t.jsx)(a.TooltipProvider,{...o,children:e})}let p=`import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
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
}`;function c(){return(0,t.jsx)("div",{className:"flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)",children:(0,t.jsx)(d,{children:(0,t.jsxs)(i.Tooltip,{children:[(0,t.jsx)(r.TooltipTrigger,{asChild:!0,children:(0,t.jsx)(o.Button,{variant:"outlined",children:"Hover me"})}),(0,t.jsx)(s.TooltipContent,{children:(0,t.jsx)(n.Typography,{variant:"body2",children:"This is a tooltip"})})]})})})}function u(){return(0,t.jsx)(c,{})}e.s(["CODE",0,p,"TooltipExample",()=>c,"default",()=>u],24003)}]);