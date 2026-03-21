(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,o=>{"use strict";var t=o.i(75201);function i(){var o;let i;o=o=>{let t=document.documentElement;o.theme&&("dark"===o.theme?t.classList.add("dark"):t.classList.remove("dark")),o.accent&&("monochrome"===o.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",o.accent)),o.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===o.font?t.classList.add("font-serif"):"sans-serif"===o.font?t.classList.add("font-sans"):"monospace"===o.font&&t.classList.add("font-mono"))},i=t.useRef(o),t.useEffect(()=>{i.current=o},[o]),t.useEffect(()=>{if(window.self===window.top)return;let o=o=>{"example-params"===o.data.type&&i.current(o.data.data)};return window.addEventListener("message",o),()=>{window.removeEventListener("message",o)}},["example-params"])}o.s(["useSendThemeToIframes",()=>i],45173)},61417,o=>{"use strict";var t=o.i(20607);o.s(["Typography",()=>t.T])},22450,o=>{"use strict";var t=o.i(74116);o.s(["Button",()=>t.B])},73800,o=>{"use strict";var t=o.i(98134);o.i(26940);var i=o.i(22450),e=o.i(36987),r=o.i(40610),n=o.i(2887),l=o.i(61417),s=o.i(58550),a=o.i(45173);function p({children:o,...i}){return(0,a.useSendThemeToIframes)(),(0,t.jsx)(s.TooltipProvider,{...i,children:o})}let d=`import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Typography variant="label1">Different Positions</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outlined">Top</Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <Typography variant="body2">Tooltip on top</Typography>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outlined">Bottom</Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <Typography variant="body2">Tooltip on bottom</Typography>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outlined">Left</Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <Typography variant="body2">Tooltip on left</Typography>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outlined">Right</Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <Typography variant="body2">Tooltip on right</Typography>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}`;function T(){return(0,t.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)",children:[(0,t.jsx)(l.Typography,{variant:"label1",children:"Different Positions"}),(0,t.jsxs)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base)",children:[(0,t.jsx)(p,{children:(0,t.jsxs)(e.Tooltip,{children:[(0,t.jsx)(n.TooltipTrigger,{asChild:!0,children:(0,t.jsx)(i.Button,{variant:"outlined",children:"Top"})}),(0,t.jsx)(r.TooltipContent,{side:"top",children:(0,t.jsx)(l.Typography,{variant:"body2",children:"Tooltip on top"})})]})}),(0,t.jsx)(p,{children:(0,t.jsxs)(e.Tooltip,{children:[(0,t.jsx)(n.TooltipTrigger,{asChild:!0,children:(0,t.jsx)(i.Button,{variant:"outlined",children:"Bottom"})}),(0,t.jsx)(r.TooltipContent,{side:"bottom",children:(0,t.jsx)(l.Typography,{variant:"body2",children:"Tooltip on bottom"})})]})}),(0,t.jsx)(p,{children:(0,t.jsxs)(e.Tooltip,{children:[(0,t.jsx)(n.TooltipTrigger,{asChild:!0,children:(0,t.jsx)(i.Button,{variant:"outlined",children:"Left"})}),(0,t.jsx)(r.TooltipContent,{side:"left",children:(0,t.jsx)(l.Typography,{variant:"body2",children:"Tooltip on left"})})]})}),(0,t.jsx)(p,{children:(0,t.jsxs)(e.Tooltip,{children:[(0,t.jsx)(n.TooltipTrigger,{asChild:!0,children:(0,t.jsx)(i.Button,{variant:"outlined",children:"Right"})}),(0,t.jsx)(r.TooltipContent,{side:"right",children:(0,t.jsx)(l.Typography,{variant:"body2",children:"Tooltip on right"})})]})})]})]})}function c(){return(0,t.jsx)(T,{})}o.s(["CODE",0,d,"TooltipPositionsExample",()=>T,"default",()=>c],73800)}]);