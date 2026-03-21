(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var o=e.i(75201);function t(){var e;let t;e=e=>{let o=document.documentElement;e.theme&&("dark"===e.theme?o.classList.add("dark"):o.classList.remove("dark")),e.accent&&("monochrome"===e.accent?o.removeAttribute("data-theme"):o.setAttribute("data-theme",e.accent)),e.font&&(o.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?o.classList.add("font-serif"):"sans-serif"===e.font?o.classList.add("font-sans"):"monospace"===e.font&&o.classList.add("font-mono"))},t=o.useRef(e),o.useEffect(()=>{t.current=e},[e]),o.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&t.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>t],45173)},61417,e=>{"use strict";var o=e.i(20607);e.s(["Typography",()=>o.T])},56700,e=>{"use strict";var o=e.i(98134);e.i(26940);var t=e.i(71030),n=e.i(73463),i=e.i(2476),r=e.i(52683),c=e.i(61417),s=e.i(45173);let a=`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Typography,
} from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Typography variant="label1">Multiple Items Open</Typography>
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
          <AccordionContent>
            Yes! Set type="multiple" to allow multiple items to be open at once.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is this controlled?</AccordionTrigger>
          <AccordionContent>
            Use the value and onValueChange props for controlled behavior.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I customize it?</AccordionTrigger>
          <AccordionContent>
            Yes! You can style it with className or pass your own components.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}`;function l(){return(0,s.useSendThemeToIframes)(),(0,o.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)",children:[(0,o.jsx)(c.Typography,{variant:"label1",children:"Multiple Items Open"}),(0,o.jsxs)(t.Accordion,{type:"multiple",className:"w-full",children:[(0,o.jsxs)(i.AccordionItem,{value:"item-1",children:[(0,o.jsx)(r.AccordionTrigger,{children:"Can I open multiple items?"}),(0,o.jsx)(n.AccordionContent,{children:'Yes! Set type="multiple" to allow multiple items to be open at once.'})]}),(0,o.jsxs)(i.AccordionItem,{value:"item-2",children:[(0,o.jsx)(r.AccordionTrigger,{children:"Is this controlled?"}),(0,o.jsx)(n.AccordionContent,{children:"Use the value and onValueChange props for controlled behavior."})]}),(0,o.jsxs)(i.AccordionItem,{value:"item-3",children:[(0,o.jsx)(r.AccordionTrigger,{children:"Can I customize it?"}),(0,o.jsx)(n.AccordionContent,{children:"Yes! You can style it with className or pass your own components."})]})]})]})}function d(){return(0,o.jsx)(l,{})}e.s(["AccordionMultipleExample",()=>l,"CODE",0,a,"default",()=>d])}]);