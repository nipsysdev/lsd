(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var t=e.i(75201);function o(){var e;let o;e=e=>{let t=document.documentElement;e.theme&&("dark"===e.theme?t.classList.add("dark"):t.classList.remove("dark")),e.accent&&("monochrome"===e.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e.accent)),e.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?t.classList.add("font-serif"):"sans-serif"===e.font?t.classList.add("font-sans"):"monospace"===e.font&&t.classList.add("font-mono"))},o=t.useRef(e),t.useEffect(()=>{o.current=e},[e]),t.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&o.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>o],45173)},24481,e=>{"use strict";var t=e.i(98134);e.i(26940);var o=e.i(71030),n=e.i(73463),i=e.i(2476),c=e.i(52683),s=e.i(6896),r=e.i(45173);let a=`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Typography,
} from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) w-full">
      <Typography variant="label1">Basic Accordion</Typography>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that match the other components.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default with smooth transitions.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}`;function d(){return(0,r.useSendThemeToIframes)(),(0,t.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base) w-full",children:[(0,t.jsx)(s.Typography,{variant:"label1",children:"Basic Accordion"}),(0,t.jsxs)(o.Accordion,{type:"single",collapsible:!0,className:"w-full",children:[(0,t.jsxs)(i.AccordionItem,{value:"item-1",children:[(0,t.jsx)(c.AccordionTrigger,{children:"Is it accessible?"}),(0,t.jsx)(n.AccordionContent,{children:"Yes. It adheres to the WAI-ARIA design pattern."})]}),(0,t.jsxs)(i.AccordionItem,{value:"item-2",children:[(0,t.jsx)(c.AccordionTrigger,{children:"Is it styled?"}),(0,t.jsx)(n.AccordionContent,{children:"Yes. It comes with default styles that match the other components."})]}),(0,t.jsxs)(i.AccordionItem,{value:"item-3",children:[(0,t.jsx)(c.AccordionTrigger,{children:"Is it animated?"}),(0,t.jsx)(n.AccordionContent,{children:"Yes. It's animated by default with smooth transitions."})]})]})]})}function l(){return(0,t.jsx)(d,{})}e.s(["AccordionSingleExample",()=>d,"CODE",0,a,"default",()=>l])}]);