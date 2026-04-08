(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var n=e.i(75201);function a(){var e;let a;e=e=>{let n=document.documentElement;e.theme&&("dark"===e.theme?n.classList.add("dark"):n.classList.remove("dark")),e.accent&&("monochrome"===e.accent?n.removeAttribute("data-theme"):n.setAttribute("data-theme",e.accent)),e.font&&(n.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?n.classList.add("font-serif"):"sans-serif"===e.font?n.classList.add("font-sans"):"monospace"===e.font&&n.classList.add("font-mono"))},a=n.useRef(e),n.useEffect(()=>{a.current=e},[e]),n.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],45173)},90074,e=>{"use strict";var n=e.i(98134);e.i(26940);var a=e.i(71030),t=e.i(73463),r=e.i(2476),l=e.i(52683),s=e.i(59038),i=e.i(6896),p=e.i(75201),o=e.i(85082);let d=new Map([["bold",p.createElement(p.Fragment,null,p.createElement("path",{d:"M200,28H165.47a51.88,51.88,0,0,0-74.94,0H56A20,20,0,0,0,36,48V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V48A20,20,0,0,0,200,28ZM155.71,60H100.29a28,28,0,0,1,55.42,0ZM196,212H60V52H77.41A52.13,52.13,0,0,0,76,64v8A12,12,0,0,0,88,84h80a12,12,0,0,0,12-12V64a52.13,52.13,0,0,0-1.41-12H196Z"}))],["duotone",p.createElement(p.Fragment,null,p.createElement("path",{d:"M208,48V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96a39.83,39.83,0,0,0-8,24v8h80V64a39.83,39.83,0,0,0-8-24h40A8,8,0,0,1,208,48Z",opacity:"0.2"}),p.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"}))],["fill",p.createElement(p.Fragment,null,p.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Z"}))],["light",p.createElement(p.Fragment,null,p.createElement("path",{d:"M200,34H162.83a45.91,45.91,0,0,0-69.66,0H56A14,14,0,0,0,42,48V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V48A14,14,0,0,0,200,34Zm-72-4a34,34,0,0,1,34,34v2H94V64A34,34,0,0,1,128,30Zm74,186a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H85.67A45.77,45.77,0,0,0,82,64v8a6,6,0,0,0,6,6h80a6,6,0,0,0,6-6V64a45.77,45.77,0,0,0-3.67-18H200a2,2,0,0,1,2,2Z"}))],["regular",p.createElement(p.Fragment,null,p.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"}))],["thin",p.createElement(p.Fragment,null,p.createElement("path",{d:"M200,36H161.92a44,44,0,0,0-67.84,0H56A12,12,0,0,0,44,48V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V48A12,12,0,0,0,200,36Zm-72-8a36,36,0,0,1,36,36v4H92V64A36,36,0,0,1,128,28Zm76,188a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H88.83A43.71,43.71,0,0,0,84,64v8a4,4,0,0,0,4,4h80a4,4,0,0,0,4-4V64a43.71,43.71,0,0,0-4.83-20H200a4,4,0,0,1,4,4Z"}))]]),u=p.forwardRef((e,n)=>p.createElement(o.default,{ref:n,...e,weights:d}));u.displayName="ClipboardIcon";let c=new Map([["bold",p.createElement(p.Fragment,null,p.createElement("path",{d:"M71.68,97.22,34.74,128l36.94,30.78a12,12,0,1,1-15.36,18.44l-48-40a12,12,0,0,1,0-18.44l48-40A12,12,0,0,1,71.68,97.22Zm176,21.56-48-40a12,12,0,1,0-15.36,18.44L221.26,128l-36.94,30.78a12,12,0,1,0,15.36,18.44l48-40a12,12,0,0,0,0-18.44ZM164.1,28.72a12,12,0,0,0-15.38,7.18l-64,176a12,12,0,0,0,7.18,15.37A11.79,11.79,0,0,0,96,228a12,12,0,0,0,11.28-7.9l64-176A12,12,0,0,0,164.1,28.72Z"}))],["duotone",p.createElement(p.Fragment,null,p.createElement("path",{d:"M240,128l-48,40H64L16,128,64,88H192Z",opacity:"0.2"}),p.createElement("path",{d:"M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"}))],["fill",p.createElement(p.Fragment,null,p.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM92.8,145.6a8,8,0,1,1-9.6,12.8l-32-24a8,8,0,0,1,0-12.8l32-24a8,8,0,0,1,9.6,12.8L69.33,128Zm58.89-71.4-32,112a8,8,0,1,1-15.38-4.4l32-112a8,8,0,0,1,15.38,4.4Zm53.11,60.2-32,24a8,8,0,0,1-9.6-12.8L186.67,128,163.2,110.4a8,8,0,1,1,9.6-12.8l32,24a8,8,0,0,1,0,12.8Z"}))],["light",p.createElement(p.Fragment,null,p.createElement("path",{d:"M67.84,92.61,25.37,128l42.47,35.39a6,6,0,1,1-7.68,9.22l-48-40a6,6,0,0,1,0-9.22l48-40a6,6,0,0,1,7.68,9.22Zm176,30.78-48-40a6,6,0,1,0-7.68,9.22L230.63,128l-42.47,35.39a6,6,0,1,0,7.68,9.22l48-40a6,6,0,0,0,0-9.22Zm-81.79-89A6,6,0,0,0,154.36,38l-64,176A6,6,0,0,0,94,221.64a6.15,6.15,0,0,0,2,.36,6,6,0,0,0,5.64-3.95l64-176A6,6,0,0,0,162.05,34.36Z"}))],["regular",p.createElement(p.Fragment,null,p.createElement("path",{d:"M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"}))],["thin",p.createElement(p.Fragment,null,p.createElement("path",{d:"M66.56,91.07,22.25,128l44.31,36.93A4,4,0,0,1,64,172a3.94,3.94,0,0,1-2.56-.93l-48-40a4,4,0,0,1,0-6.14l48-40a4,4,0,0,1,5.12,6.14Zm176,33.86-48-40a4,4,0,1,0-5.12,6.14L233.75,128l-44.31,36.93a4,4,0,1,0,5.12,6.14l48-40a4,4,0,0,0,0-6.14ZM161.37,36.24a4,4,0,0,0-5.13,2.39l-64,176a4,4,0,0,0,2.39,5.13A4.12,4.12,0,0,0,96,220a4,4,0,0,0,3.76-2.63l64-176A4,4,0,0,0,161.37,36.24Z"}))]]),m=p.forwardRef((e,n)=>p.createElement(o.default,{ref:n,...e,weights:c}));m.displayName="CodeIcon";var h=e.i(54219);function x({code:e,useAccordion:p=!0}){let o=async()=>{try{await navigator.clipboard.writeText(e),h.toast.success("Code successfully copied to clipboard")}catch(e){h.toast.error("Failed to copy code to clipboard")}},d=(0,n.jsxs)("div",{className:"flex justify-between size-full relative group",children:[(0,n.jsx)(i.Typography,{variant:"subtitle3",className:"my-auto",children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"whitespace-break-spaces",children:e})})}),(0,n.jsx)(s.Button,{onClick:o,variant:"outlined",size:"square-md",className:"opacity-0 group-hover:opacity-100 transition-opacity","aria-label":"Copy code",children:(0,n.jsx)(u,{className:"size-4",weight:"duotone"})})]});return p?(0,n.jsx)(a.Accordion,{type:"single",collapsible:!0,children:(0,n.jsxs)(r.AccordionItem,{value:"code",children:[(0,n.jsx)(l.AccordionTrigger,{children:(0,n.jsxs)("div",{className:"flex items-center justify-center gap-x-(--lsd-spacing-base)",children:[(0,n.jsx)(m,{weight:"duotone",className:"size-5"})," View code"]})}),(0,n.jsx)(t.AccordionContent,{children:d})]})}):d}e.s(["CodeExample",()=>x],90074)},10337,e=>{"use strict";var n=e.i(98134);let a=(0,e.i(75201).forwardRef)(({src:e,title:a,size:t="md",className:r,...l},s)=>(0,n.jsx)("iframe",{ref:s,src:e,className:`${{sm:"min-h-[128px]",md:"min-h-[256px]",lg:"min-h-[450px]",xl:"min-h-[600px]"}[t]} w-full overflow-hidden`,title:a,...l}));a.displayName="IframeExample",e.s(["IframeExample",0,a])},53607,e=>{"use strict";var n=e.i(75201),a=e.i(85082);let t=new Map([["bold",n.createElement(n.Fragment,null,n.createElement("path",{d:"M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"}))],["duotone",n.createElement(n.Fragment,null,n.createElement("path",{d:"M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",opacity:"0.2"}),n.createElement("path",{d:"M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"}))],["fill",n.createElement(n.Fragment,null,n.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"}))],["light",n.createElement(n.Fragment,null,n.createElement("path",{d:"M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z"}))],["regular",n.createElement(n.Fragment,null,n.createElement("path",{d:"M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"}))],["thin",n.createElement(n.Fragment,null,n.createElement("path",{d:"M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z"}))]]),r=n.forwardRef((e,r)=>n.createElement(a.default,{ref:r,...e,weights:t}));r.displayName="CheckIcon",e.s(["CheckIcon",()=>r],53607)},25812,e=>{"use strict";var n=e.i(75201),a=e.i(85082);let t=new Map([["bold",n.createElement(n.Fragment,null,n.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"}))],["duotone",n.createElement(n.Fragment,null,n.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),n.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["fill",n.createElement(n.Fragment,null,n.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",n.createElement(n.Fragment,null,n.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"}))],["regular",n.createElement(n.Fragment,null,n.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["thin",n.createElement(n.Fragment,null,n.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"}))]]),r=n.forwardRef((e,r)=>n.createElement(a.default,{ref:r,...e,weights:t}));r.displayName="PlusIcon",e.s(["PlusIcon",()=>r],25812)},11356,e=>{"use strict";var n=e.i(98134);e.i(26940);var a=e.i(42633),t=e.i(65934),r=e.i(98930),l=e.i(19418),s=e.i(6896),i=e.i(45173);let p=`import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">inline-start</Typography>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="0.00" />
        </InputGroup>
      </div>
      
      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">inline-end</Typography>
        <InputGroup>
          <InputGroupInput placeholder="username" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>@example.com</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}`;function o(){return(0,i.useSendThemeToIframes)(),(0,n.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(s.Typography,{variant:"label1",className:"block mb-(--lsd-spacing-smaller)",children:"inline-start"}),(0,n.jsxs)(a.InputGroup,{children:[(0,n.jsx)(t.InputGroupAddon,{align:"inline-start",children:(0,n.jsx)(l.InputGroupText,{children:"$"})}),(0,n.jsx)(r.InputGroupInput,{placeholder:"0.00"})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(s.Typography,{variant:"label1",className:"block mb-(--lsd-spacing-smaller)",children:"inline-end"}),(0,n.jsxs)(a.InputGroup,{children:[(0,n.jsx)(r.InputGroupInput,{placeholder:"username"}),(0,n.jsx)(t.InputGroupAddon,{align:"inline-end",children:(0,n.jsx)(l.InputGroupText,{children:"@example.com"})})]})]})]})}function d(){return(0,n.jsx)(o,{})}e.s(["CODE",0,p,"InputGroupAlignmentExample",()=>o,"default",()=>d])},91780,e=>{"use strict";var n=e.i(98134);e.i(26940);var a=e.i(42633),t=e.i(65934),r=e.i(57285),l=e.i(98930),s=e.i(19418),i=e.i(45173);let p=`import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="0.00" />
      </InputGroup>
      
      <InputGroup>
        <InputGroupInput placeholder="username" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>@example.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="example.com" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>Go</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}`;function o(){return(0,i.useSendThemeToIframes)(),(0,n.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,n.jsxs)(a.InputGroup,{children:[(0,n.jsx)(t.InputGroupAddon,{align:"inline-start",children:(0,n.jsx)(s.InputGroupText,{children:"$"})}),(0,n.jsx)(l.InputGroupInput,{placeholder:"0.00"})]}),(0,n.jsxs)(a.InputGroup,{children:[(0,n.jsx)(l.InputGroupInput,{placeholder:"username"}),(0,n.jsx)(t.InputGroupAddon,{align:"inline-end",children:(0,n.jsx)(s.InputGroupText,{children:"@example.com"})})]}),(0,n.jsxs)(a.InputGroup,{children:[(0,n.jsx)(t.InputGroupAddon,{align:"inline-start",children:(0,n.jsx)(s.InputGroupText,{children:"https://"})}),(0,n.jsx)(l.InputGroupInput,{placeholder:"example.com"}),(0,n.jsx)(t.InputGroupAddon,{align:"inline-end",children:(0,n.jsx)(r.InputGroupButton,{children:"Go"})})]})]})}function d(){return(0,n.jsx)(o,{})}e.s(["CODE",0,p,"InputGroupBasicExample",()=>o,"default",()=>d])},22063,e=>{"use strict";var n=e.i(98134);e.i(26940);var a=e.i(42633),t=e.i(65934),r=e.i(57285),l=e.i(98930),s=e.i(19418),i=e.i(6896),p=e.i(45173);let o=`import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from '@nipsys/shadcn-lsd'

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">Small (sm)</Typography>
        <InputGroup size="sm">
          <InputGroupAddon align="inline-start">
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="0.00" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton>Submit</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
      
      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">Medium (md)</Typography>
        <InputGroup size="md">
          <InputGroupAddon align="inline-start">
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="0.00" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton>Submit</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
      
      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">Large (lg)</Typography>
        <InputGroup size="lg">
          <InputGroupAddon align="inline-start">
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="0.00" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton>Submit</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}`;function d(){return(0,p.useSendThemeToIframes)(),(0,n.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(i.Typography,{variant:"label1",className:"block mb-(--lsd-spacing-smaller)",children:"Small (sm)"}),(0,n.jsxs)(a.InputGroup,{size:"sm",children:[(0,n.jsx)(t.InputGroupAddon,{align:"inline-start",children:(0,n.jsx)(s.InputGroupText,{children:"$"})}),(0,n.jsx)(l.InputGroupInput,{placeholder:"0.00"}),(0,n.jsx)(t.InputGroupAddon,{align:"inline-end",children:(0,n.jsx)(r.InputGroupButton,{children:"Submit"})})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(i.Typography,{variant:"label1",className:"block mb-(--lsd-spacing-smaller)",children:"Medium (md)"}),(0,n.jsxs)(a.InputGroup,{size:"md",children:[(0,n.jsx)(t.InputGroupAddon,{align:"inline-start",children:(0,n.jsx)(s.InputGroupText,{children:"$"})}),(0,n.jsx)(l.InputGroupInput,{placeholder:"0.00"}),(0,n.jsx)(t.InputGroupAddon,{align:"inline-end",children:(0,n.jsx)(r.InputGroupButton,{children:"Submit"})})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(i.Typography,{variant:"label1",className:"block mb-(--lsd-spacing-smaller)",children:"Large (lg)"}),(0,n.jsxs)(a.InputGroup,{size:"lg",children:[(0,n.jsx)(t.InputGroupAddon,{align:"inline-start",children:(0,n.jsx)(s.InputGroupText,{children:"$"})}),(0,n.jsx)(l.InputGroupInput,{placeholder:"0.00"}),(0,n.jsx)(t.InputGroupAddon,{align:"inline-end",children:(0,n.jsx)(r.InputGroupButton,{children:"Submit"})})]})]})]})}function u(){return(0,n.jsx)(d,{})}e.s(["CODE",0,o,"InputGroupSizesExample",()=>d,"default",()=>u])},79800,e=>{"use strict";var n=e.i(75201),a=e.i(85082);let t=new Map([["bold",n.createElement(n.Fragment,null,n.createElement("path",{d:"M234.38,210a123.36,123.36,0,0,0-60.78-53.23,76,76,0,1,0-91.2,0A123.36,123.36,0,0,0,21.62,210a12,12,0,1,0,20.77,12c18.12-31.32,50.12-50,85.61-50s67.49,18.69,85.61,50a12,12,0,0,0,20.77-12ZM76,96a52,52,0,1,1,52,52A52.06,52.06,0,0,1,76,96Z"}))],["duotone",n.createElement(n.Fragment,null,n.createElement("path",{d:"M192,96a64,64,0,1,1-64-64A64,64,0,0,1,192,96Z",opacity:"0.2"}),n.createElement("path",{d:"M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"}))],["fill",n.createElement(n.Fragment,null,n.createElement("path",{d:"M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z"}))],["light",n.createElement(n.Fragment,null,n.createElement("path",{d:"M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z"}))],["regular",n.createElement(n.Fragment,null,n.createElement("path",{d:"M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"}))],["thin",n.createElement(n.Fragment,null,n.createElement("path",{d:"M227.46,214c-16.52-28.56-43-48.06-73.68-55.09a68,68,0,1,0-51.56,0c-30.64,7-57.16,26.53-73.68,55.09a4,4,0,0,0,6.92,4C55,184.19,89.62,164,128,164s73,20.19,92.54,54a4,4,0,0,0,3.46,2,3.93,3.93,0,0,0,2-.54A4,4,0,0,0,227.46,214ZM68,96a60,60,0,1,1,60,60A60.07,60.07,0,0,1,68,96Z"}))]]),r=n.forwardRef((e,r)=>n.createElement(a.default,{ref:r,...e,weights:t}));r.displayName="UserIcon",e.s(["UserIcon",()=>r],79800)},61581,e=>{"use strict";var n=e.i(75201),a=e.i(85082);let t=new Map([["bold",n.createElement(n.Fragment,null,n.createElement("path",{d:"M208,76H180V56A52,52,0,0,0,76,56V76H48A20,20,0,0,0,28,96V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V96A20,20,0,0,0,208,76ZM100,56a28,28,0,0,1,56,0V76H100ZM204,204H52V100H204Zm-60-52a16,16,0,1,1-16-16A16,16,0,0,1,144,152Z"}))],["duotone",n.createElement(n.Fragment,null,n.createElement("path",{d:"M216,96V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H208A8,8,0,0,1,216,96Z",opacity:"0.2"}),n.createElement("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"}))],["fill",n.createElement(n.Fragment,null,n.createElement("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-80,84a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm32-84H96V56a32,32,0,0,1,64,0Z"}))],["light",n.createElement(n.Fragment,null,n.createElement("path",{d:"M208,82H174V56a46,46,0,0,0-92,0V82H48A14,14,0,0,0,34,96V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V96A14,14,0,0,0,208,82ZM94,56a34,34,0,0,1,68,0V82H94ZM210,208a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Zm-72-56a10,10,0,1,1-10-10A10,10,0,0,1,138,152Z"}))],["regular",n.createElement(n.Fragment,null,n.createElement("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"}))],["thin",n.createElement(n.Fragment,null,n.createElement("path",{d:"M208,84H172V56a44,44,0,0,0-88,0V84H48A12,12,0,0,0,36,96V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V96A12,12,0,0,0,208,84ZM92,56a36,36,0,0,1,72,0V84H92ZM212,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Zm-76-56a8,8,0,1,1-8-8A8,8,0,0,1,136,152Z"}))]]),r=n.forwardRef((e,r)=>n.createElement(a.default,{ref:r,...e,weights:t}));r.displayName="LockIcon",e.s(["LockIcon",()=>r],61581)},17617,e=>{"use strict";var n=e.i(98134);e.i(26940);var a=e.i(42633),t=e.i(65934),r=e.i(57285),l=e.i(98930),s=e.i(19418),i=e.i(6896),p=e.i(61581),o=e.i(97543),d=e.i(79800),u=e.i(45173);let c=`import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  Typography,
} from '@nipsys/shadcn-lsd';
import { 
  MagnifyingGlassIcon, 
  UserIcon, 
  LockIcon,
} from '@phosphor-icons/react';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">Disabled input</Typography>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>
              <MagnifyingGlassIcon weight="duotone" />
            </InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="Search..." disabled />
        </InputGroup>
      </div>
      
      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">Disabled with button</Typography>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>
              <UserIcon weight="duotone" />
            </InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="Username" disabled />
          <InputGroupAddon align="inline-end">
            <InputGroupButton disabled>
              Submit
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
      
      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">Disabled password field</Typography>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>
              <LockIcon weight="duotone" />
            </InputGroupText>
          </InputGroupAddon>
          <InputGroupInput type="password" placeholder="Password" disabled />
          <InputGroupAddon align="inline-end">
            <InputGroupButton variant="icon" disabled>
              👁️
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
      
      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">Disabled add-on text</Typography>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="0.00" disabled />
          <InputGroupAddon align="inline-end">
            <InputGroupText>USD</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}`;function m(){return(0,u.useSendThemeToIframes)(),(0,n.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(i.Typography,{variant:"label1",className:"block mb-(--lsd-spacing-smaller)",children:"Disabled input"}),(0,n.jsxs)(a.InputGroup,{children:[(0,n.jsx)(t.InputGroupAddon,{align:"inline-start",children:(0,n.jsx)(s.InputGroupText,{children:(0,n.jsx)(o.MagnifyingGlassIcon,{weight:"duotone"})})}),(0,n.jsx)(l.InputGroupInput,{placeholder:"Search...",disabled:!0})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(i.Typography,{variant:"label1",className:"block mb-(--lsd-spacing-smaller)",children:"Disabled with button"}),(0,n.jsxs)(a.InputGroup,{children:[(0,n.jsx)(t.InputGroupAddon,{align:"inline-start",children:(0,n.jsx)(s.InputGroupText,{children:(0,n.jsx)(d.UserIcon,{weight:"duotone"})})}),(0,n.jsx)(l.InputGroupInput,{placeholder:"Username",disabled:!0}),(0,n.jsx)(t.InputGroupAddon,{align:"inline-end",children:(0,n.jsx)(r.InputGroupButton,{disabled:!0,children:"Submit"})})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(i.Typography,{variant:"label1",className:"block mb-(--lsd-spacing-smaller)",children:"Disabled password field"}),(0,n.jsxs)(a.InputGroup,{children:[(0,n.jsx)(t.InputGroupAddon,{align:"inline-start",children:(0,n.jsx)(s.InputGroupText,{children:(0,n.jsx)(p.LockIcon,{weight:"duotone"})})}),(0,n.jsx)(l.InputGroupInput,{type:"password",placeholder:"Password",disabled:!0}),(0,n.jsx)(t.InputGroupAddon,{align:"inline-end",children:(0,n.jsx)(r.InputGroupButton,{variant:"icon",disabled:!0,children:"👁️"})})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(i.Typography,{variant:"label1",className:"block mb-(--lsd-spacing-smaller)",children:"Disabled add-on text"}),(0,n.jsxs)(a.InputGroup,{children:[(0,n.jsx)(t.InputGroupAddon,{align:"inline-start",children:(0,n.jsx)(s.InputGroupText,{children:"$"})}),(0,n.jsx)(l.InputGroupInput,{placeholder:"0.00",disabled:!0}),(0,n.jsx)(t.InputGroupAddon,{align:"inline-end",children:(0,n.jsx)(s.InputGroupText,{children:"USD"})})]})]})]})}function h(){return(0,n.jsx)(m,{})}e.s(["CODE",0,c,"InputGroupDisabledExample",()=>m,"default",()=>h])},18687,e=>{"use strict";var n=e.i(98134);e.i(26940);var a=e.i(42633),t=e.i(65934),r=e.i(57285),l=e.i(98930),s=e.i(19418),i=e.i(6896),p=e.i(53607),o=e.i(75201),d=e.i(85082);let u=new Map([["bold",o.createElement(o.Fragment,null,o.createElement("path",{d:"M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44Zm-96,83.72L62.85,68h130.3ZM92.79,128,44,172.72V83.28Zm17.76,16.28,9.34,8.57a12,12,0,0,0,16.22,0l9.34-8.57L193.15,188H62.85ZM163.21,128,212,83.28v89.44Z"}))],["duotone",o.createElement(o.Fragment,null,o.createElement("path",{d:"M224,56l-96,88L32,56Z",opacity:"0.2"}),o.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"}))],["fill",o.createElement(o.Fragment,null,o.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"}))],["light",o.createElement(o.Fragment,null,o.createElement("path",{d:"M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50Zm-96,85.86L47.42,62H208.58ZM101.67,128,38,186.36V69.64Zm8.88,8.14L124,148.42a6,6,0,0,0,8.1,0l13.4-12.28L208.58,194H47.43ZM154.33,128,218,69.64V186.36Z"}))],["regular",o.createElement(o.Fragment,null,o.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"}))],["thin",o.createElement(o.Fragment,null,o.createElement("path",{d:"M224,52H32a4,4,0,0,0-4,4V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A4,4,0,0,0,224,52Zm-96,86.57L42.28,60H213.72ZM104.63,128,36,190.91V65.09Zm5.92,5.43L125.3,147a4,4,0,0,0,5.4,0l14.75-13.52L213.72,196H42.28ZM151.37,128,220,65.09V190.91Z"}))]]),c=o.forwardRef((e,n)=>o.createElement(d.default,{ref:n,...e,weights:u}));c.displayName="EnvelopeIcon";let m=new Map([["bold",o.createElement(o.Fragment,null,o.createElement("path",{d:"M251,123.13c-.37-.81-9.13-20.26-28.48-39.61C196.63,57.67,164,44,128,44S59.37,57.67,33.51,83.52C14.16,102.87,5.4,122.32,5,123.13a12.08,12.08,0,0,0,0,9.75c.37.82,9.13,20.26,28.49,39.61C59.37,198.34,92,212,128,212s68.63-13.66,94.48-39.51c19.36-19.35,28.12-38.79,28.49-39.61A12.08,12.08,0,0,0,251,123.13Zm-46.06,33C183.47,177.27,157.59,188,128,188s-55.47-10.73-76.91-31.88A130.36,130.36,0,0,1,29.52,128,130.45,130.45,0,0,1,51.09,99.89C72.54,78.73,98.41,68,128,68s55.46,10.73,76.91,31.89A130.36,130.36,0,0,1,226.48,128,130.45,130.45,0,0,1,204.91,156.12ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,148Z"}))],["duotone",o.createElement(o.Fragment,null,o.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),o.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["fill",o.createElement(o.Fragment,null,o.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"}))],["light",o.createElement(o.Fragment,null,o.createElement("path",{d:"M245.48,125.57c-.34-.78-8.66-19.23-27.24-37.81C201,70.54,171.38,50,128,50S55,70.54,37.76,87.76c-18.58,18.58-26.9,37-27.24,37.81a6,6,0,0,0,0,4.88c.34.77,8.66,19.22,27.24,37.8C55,185.47,84.62,206,128,206s73-20.53,90.24-37.75c18.58-18.58,26.9-37,27.24-37.8A6,6,0,0,0,245.48,125.57ZM128,194c-31.38,0-58.78-11.42-81.45-33.93A134.77,134.77,0,0,1,22.69,128,134.56,134.56,0,0,1,46.55,95.94C69.22,73.42,96.62,62,128,62s58.78,11.42,81.45,33.94A134.56,134.56,0,0,1,233.31,128C226.94,140.21,195,194,128,194Zm0-112a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z"}))],["regular",o.createElement(o.Fragment,null,o.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["thin",o.createElement(o.Fragment,null,o.createElement("path",{d:"M243.66,126.38c-.34-.76-8.52-18.89-26.83-37.2C199.87,72.22,170.7,52,128,52S56.13,72.22,39.17,89.18c-18.31,18.31-26.49,36.44-26.83,37.2a4.08,4.08,0,0,0,0,3.25c.34.77,8.52,18.89,26.83,37.2,17,17,46.14,37.17,88.83,37.17s71.87-20.21,88.83-37.17c18.31-18.31,26.49-36.43,26.83-37.2A4.08,4.08,0,0,0,243.66,126.38Zm-32.7,35c-23.07,23-51,34.62-83,34.62s-59.89-11.65-83-34.62A135.71,135.71,0,0,1,20.44,128,135.69,135.69,0,0,1,45,94.62C68.11,71.65,96,60,128,60s59.89,11.65,83,34.62A135.79,135.79,0,0,1,235.56,128,135.71,135.71,0,0,1,211,161.38ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"}))]]),h=o.forwardRef((e,n)=>o.createElement(d.default,{ref:n,...e,weights:m}));h.displayName="EyeIcon";var x=e.i(61581),I=e.i(97543),g=e.i(25812),G=e.i(79800),b=e.i(45173);let j=`import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  Typography,
} from '@nipsys/shadcn-lsd';
import {
  MagnifyingGlassIcon,
  UserIcon,
  EnvelopeIcon,
  LockIcon,
  EyeIcon,
  PlusIcon,
  CheckIcon,
} from '@phosphor-icons/react';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">Search with icon</Typography>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>
              <MagnifyingGlassIcon weight="duotone" />
            </InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="Search..." />
        </InputGroup>
      </div>
      
      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">Username field</Typography>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>
              <UserIcon weight="duotone" />
            </InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="Enter username" />
        </InputGroup>
      </div>
      
      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">Email field</Typography>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>
              <EnvelopeIcon weight="duotone" />
            </InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="email@example.com" />
        </InputGroup>
      </div>
      
      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">Password with toggle</Typography>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>
              <LockIcon weight="duotone" />
            </InputGroupText>
          </InputGroupAddon>
          <InputGroupInput type="password" placeholder="Enter password" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton variant="icon">
              <EyeIcon weight="duotone" />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
      
      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">Action buttons</Typography>
        <InputGroup>
          <InputGroupInput placeholder="Add item..." />
          <InputGroupAddon align="inline-end">
            <InputGroupButton variant="icon">
              <PlusIcon />
            </InputGroupButton>
            <InputGroupButton variant="icon">
              <CheckIcon />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}`;function y(){return(0,b.useSendThemeToIframes)(),(0,n.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(i.Typography,{variant:"label1",className:"block mb-(--lsd-spacing-smaller)",children:"Search with icon"}),(0,n.jsxs)(a.InputGroup,{children:[(0,n.jsx)(t.InputGroupAddon,{align:"inline-start",children:(0,n.jsx)(s.InputGroupText,{children:(0,n.jsx)(I.MagnifyingGlassIcon,{weight:"duotone"})})}),(0,n.jsx)(l.InputGroupInput,{placeholder:"Search..."})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(i.Typography,{variant:"label1",className:"block mb-(--lsd-spacing-smaller)",children:"Username field"}),(0,n.jsxs)(a.InputGroup,{children:[(0,n.jsx)(t.InputGroupAddon,{align:"inline-start",children:(0,n.jsx)(s.InputGroupText,{children:(0,n.jsx)(G.UserIcon,{weight:"duotone"})})}),(0,n.jsx)(l.InputGroupInput,{placeholder:"Enter username"})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(i.Typography,{variant:"label1",className:"block mb-(--lsd-spacing-smaller)",children:"Email field"}),(0,n.jsxs)(a.InputGroup,{children:[(0,n.jsx)(t.InputGroupAddon,{align:"inline-start",children:(0,n.jsx)(s.InputGroupText,{children:(0,n.jsx)(c,{weight:"duotone"})})}),(0,n.jsx)(l.InputGroupInput,{placeholder:"email@example.com"})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(i.Typography,{variant:"label1",className:"block mb-(--lsd-spacing-smaller)",children:"Password with toggle"}),(0,n.jsxs)(a.InputGroup,{children:[(0,n.jsx)(t.InputGroupAddon,{align:"inline-start",children:(0,n.jsx)(s.InputGroupText,{children:(0,n.jsx)(x.LockIcon,{weight:"duotone"})})}),(0,n.jsx)(l.InputGroupInput,{type:"password",placeholder:"Enter password"}),(0,n.jsx)(t.InputGroupAddon,{align:"inline-end",children:(0,n.jsx)(r.InputGroupButton,{variant:"icon",children:(0,n.jsx)(h,{weight:"duotone"})})})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(i.Typography,{variant:"label1",className:"block mb-(--lsd-spacing-smaller)",children:"Action buttons"}),(0,n.jsxs)(a.InputGroup,{children:[(0,n.jsx)(l.InputGroupInput,{placeholder:"Add item..."}),(0,n.jsxs)(t.InputGroupAddon,{align:"inline-end",children:[(0,n.jsx)(r.InputGroupButton,{variant:"icon",children:(0,n.jsx)(g.PlusIcon,{})}),(0,n.jsx)(r.InputGroupButton,{variant:"icon",children:(0,n.jsx)(p.CheckIcon,{})})]})]})]})]})}function A(){return(0,n.jsx)(y,{})}e.s(["CODE",0,j,"InputGroupWithIconsExample",()=>y,"default",()=>A],18687)},35495,e=>{"use strict";var n=e.i(98134);e.i(26940);var a=e.i(46700),t=e.i(57845),r=e.i(80427),l=e.i(64439),s=e.i(93261),i=e.i(6896),p=e.i(90074),o=e.i(49332),d=e.i(10337),u=e.i(99311),c=e.i(11163),m=e.i(45010),h=e.i(48989),x=e.i(11356),I=e.i(91780),g=e.i(17617),G=e.i(22063),b=e.i(18687);function j(){return(0,n.jsxs)(o.DocsLayout,{children:[(0,n.jsx)(c.PageHeader,{title:"InputGroup",description:"A flexible component system for creating input groups with addons, buttons, and text elements"}),(0,n.jsxs)(u.PageContent,{children:[(0,n.jsx)(h.PageSection,{title:"About InputGroup",children:(0,n.jsx)(i.Typography,{variant:"body1",className:"block",children:"InputGroup is a comprehensive component system that allows you to create sophisticated input layouts by combining inputs with addons, buttons, and text elements. It provides a flexible way to build forms with prefixes, suffixes, action buttons, and various input types while maintaining consistent spacing and alignment."})}),(0,n.jsxs)(h.PageSection,{title:"Installation",children:[(0,n.jsx)(i.Typography,{variant:"body1",children:"Import all InputGroup components from LSD:"}),(0,n.jsx)(a.Card,{className:"mt-(--lsd-spacing-base)",children:(0,n.jsx)(t.CardContent,{children:(0,n.jsx)(p.CodeExample,{useAccordion:!1,code:`import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from '@nipsys/shadcn-lsd'

export default function MyComponent() {
  return (
    <InputGroup>
      <InputGroupAddon align="inline-start">
        <InputGroupText>$</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="0.00" />
    </InputGroup>
  );
}`})})})]}),(0,n.jsxs)(h.PageSection,{title:"Variants",children:[(0,n.jsx)(i.Typography,{variant:"body1",children:"InputGroupAddon provides two alignment options for positioning addons relative to the input."}),(0,n.jsxs)(a.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,n.jsxs)(l.CardHeader,{children:[(0,n.jsx)(s.CardTitle,{children:"Alignment Options"}),(0,n.jsx)(r.CardDescription,{children:"Two alignment options for addon positioning"})]}),(0,n.jsxs)(t.CardContent,{children:[(0,n.jsx)(d.IframeExample,{size:"sm",src:"/examples/input-group/alignment",title:"InputGroup Alignment Example"}),(0,n.jsx)(p.CodeExample,{code:x.CODE})]})]})]}),(0,n.jsxs)(h.PageSection,{title:"Sizes",children:[(0,n.jsx)(i.Typography,{variant:"body1",children:"InputGroup supports three size variants that automatically scale all child components including inputs, buttons, and text. The size is controlled at the InputGroup level and inherited by all children."}),(0,n.jsxs)(a.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,n.jsxs)(l.CardHeader,{children:[(0,n.jsx)(s.CardTitle,{children:"InputGroup Sizes"}),(0,n.jsx)(r.CardDescription,{children:"Three size variants for the entire InputGroup"})]}),(0,n.jsxs)(t.CardContent,{children:[(0,n.jsx)(d.IframeExample,{size:"md",src:"/examples/input-group/sizes",title:"InputGroup Sizes Example"}),(0,n.jsx)(p.CodeExample,{code:G.CODE})]})]})]}),(0,n.jsxs)(h.PageSection,{title:"Features",children:[(0,n.jsx)(i.Typography,{variant:"body1",children:"Additional capabilities including basic usage patterns, icon integration, and disabled states."}),(0,n.jsxs)(a.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,n.jsxs)(l.CardHeader,{children:[(0,n.jsx)(s.CardTitle,{children:"Basic Usage"}),(0,n.jsx)(r.CardDescription,{children:"Fundamental InputGroup patterns"})]}),(0,n.jsxs)(t.CardContent,{children:[(0,n.jsx)(d.IframeExample,{size:"sm",src:"/examples/input-group/basic",title:"InputGroup Basic Example"}),(0,n.jsx)(p.CodeExample,{code:I.CODE})]})]}),(0,n.jsxs)(a.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,n.jsxs)(l.CardHeader,{children:[(0,n.jsx)(s.CardTitle,{children:"With Icons"}),(0,n.jsx)(r.CardDescription,{children:"Enhance inputs with Phosphor icons"})]}),(0,n.jsxs)(t.CardContent,{children:[(0,n.jsx)(d.IframeExample,{size:"lg",src:"/examples/input-group/with-icons",title:"InputGroup With Icons Example"}),(0,n.jsx)(p.CodeExample,{code:b.CODE})]})]}),(0,n.jsxs)(a.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,n.jsxs)(l.CardHeader,{children:[(0,n.jsx)(s.CardTitle,{children:"Disabled States"}),(0,n.jsx)(r.CardDescription,{children:"Disabled inputs and buttons with proper styling"})]}),(0,n.jsxs)(t.CardContent,{children:[(0,n.jsx)(d.IframeExample,{size:"md",src:"/examples/input-group/disabled",title:"InputGroup Disabled Example"}),(0,n.jsx)(p.CodeExample,{code:g.CODE})]})]})]}),(0,n.jsxs)(h.PageSection,{title:"API Reference",children:[(0,n.jsx)(i.Typography,{variant:"body1",children:"Complete prop documentation for all InputGroup components."}),(0,n.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)",children:[(0,n.jsxs)(a.Card,{children:[(0,n.jsxs)(l.CardHeader,{children:[(0,n.jsx)(s.CardTitle,{children:"InputGroup"}),(0,n.jsx)(r.CardDescription,{children:"Main container component"})]}),(0,n.jsxs)(t.CardContent,{children:[(0,n.jsxs)(i.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,n.jsx)("strong",{children:"Type:"})," HTML div attributes"]}),(0,n.jsxs)(i.Typography,{variant:"label1",className:"block mb-(--lsd-spacing-smaller)",children:[(0,n.jsx)("strong",{children:"size:"})," 'sm' | 'md' | 'lg'"]}),(0,n.jsxs)(i.Typography,{variant:"label1",className:"block",children:[(0,n.jsx)("strong",{children:"Default:"})," 'md'"]}),(0,n.jsx)(i.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Controls the size of the entire InputGroup and all child components. The size is automatically inherited by InputGroupInput, InputGroupButton, InputGroupText, and InputGroupAddon components."})]})]}),(0,n.jsxs)(a.Card,{children:[(0,n.jsxs)(l.CardHeader,{children:[(0,n.jsx)(s.CardTitle,{children:"InputGroupAddon"}),(0,n.jsx)(r.CardDescription,{children:"Container for addons and buttons"})]}),(0,n.jsxs)(t.CardContent,{children:[(0,n.jsxs)(i.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,n.jsx)("strong",{children:"Type:"})," HTML div attributes"]}),(0,n.jsxs)(i.Typography,{variant:"label1",className:"block mb-(--lsd-spacing-smaller)",children:[(0,n.jsx)("strong",{children:"align:"})," 'inline-start' | 'inline-end'"]}),(0,n.jsxs)(i.Typography,{variant:"label1",className:"block",children:[(0,n.jsx)("strong",{children:"Default:"})," 'inline-start'"]}),(0,n.jsx)(i.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Controls the positioning of the addon relative to the input. 'inline-start' positions the addon before the input, 'inline-end' positions it after the input."})]})]}),(0,n.jsxs)(a.Card,{children:[(0,n.jsxs)(l.CardHeader,{children:[(0,n.jsx)(s.CardTitle,{children:"InputGroupButton"}),(0,n.jsx)(r.CardDescription,{children:"Button component for input groups"})]}),(0,n.jsxs)(t.CardContent,{children:[(0,n.jsxs)(i.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,n.jsx)("strong",{children:"Type:"})," HTML button attributes"]}),(0,n.jsxs)(i.Typography,{variant:"label1",className:"block mb-(--lsd-spacing-smaller)",children:[(0,n.jsx)("strong",{children:"variant:"})," 'text' | 'icon'"]}),(0,n.jsxs)(i.Typography,{variant:"label1",className:"block mb-(--lsd-spacing-smaller)",children:[(0,n.jsx)("strong",{children:"size:"})," 'sm' | 'md' | 'lg'"]}),(0,n.jsxs)(i.Typography,{variant:"label1",className:"block mb-(--lsd-spacing-smaller)",children:[(0,n.jsx)("strong",{children:"type:"})," 'button' | 'submit' | 'reset'"]}),(0,n.jsxs)(i.Typography,{variant:"label1",className:"block",children:[(0,n.jsx)("strong",{children:"Default:"})," variant='text', size=inherited from InputGroup, type='button'"]}),(0,n.jsx)(i.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Button styled specifically for input groups. The 'text' variant renders as a ghost button, while 'icon' variant renders as a ghost-rounded button with square sizing. Size is inherited from the parent InputGroup but can be overridden."})]})]}),(0,n.jsxs)(a.Card,{children:[(0,n.jsxs)(l.CardHeader,{children:[(0,n.jsx)(s.CardTitle,{children:"InputGroupInput"}),(0,n.jsx)(r.CardDescription,{children:"Input field component"})]}),(0,n.jsxs)(t.CardContent,{children:[(0,n.jsxs)(i.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,n.jsx)("strong",{children:"Type:"})," HTML input attributes (without size)"]}),(0,n.jsxs)(i.Typography,{variant:"label1",className:"block",children:[(0,n.jsx)("strong",{children:"Default:"})," undefined"]}),(0,n.jsx)(i.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Standard HTML input with size prop omitted to prevent conflicts. Supports all standard input attributes like placeholder, disabled, type, etc."})]})]}),(0,n.jsxs)(a.Card,{children:[(0,n.jsxs)(l.CardHeader,{children:[(0,n.jsx)(s.CardTitle,{children:"InputGroupText"}),(0,n.jsx)(r.CardDescription,{children:"Text display component"})]}),(0,n.jsxs)(t.CardContent,{children:[(0,n.jsxs)(i.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,n.jsx)("strong",{children:"Type:"})," HTML span attributes"]}),(0,n.jsxs)(i.Typography,{variant:"label1",className:"block",children:[(0,n.jsx)("strong",{children:"Default:"})," undefined"]}),(0,n.jsx)(i.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Span element styled for displaying text within input groups. Perfect for prefixes, suffixes, and labels."})]})]})]})]}),(0,n.jsxs)(h.PageSection,{title:"Accessibility",children:[(0,n.jsx)(i.Typography,{variant:"body1",children:"InputGroup components follow accessibility best practices for screen readers and keyboard navigation."}),(0,n.jsxs)(a.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,n.jsxs)(l.CardHeader,{children:[(0,n.jsx)(s.CardTitle,{children:"Keyboard Navigation"}),(0,n.jsx)(r.CardDescription,{children:"Full keyboard accessibility for all interactive elements"})]}),(0,n.jsxs)(t.CardContent,{children:[(0,n.jsxs)(i.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:["• ",(0,n.jsx)("strong",{children:"Tab"})," - Navigate to the input or button"]}),(0,n.jsxs)(i.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:["• ",(0,n.jsx)("strong",{children:"Shift + Tab"})," - Navigate to previous focusable element"]}),(0,n.jsxs)(i.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:["• ",(0,n.jsx)("strong",{children:"Enter"})," - Submit form (when in a form)"]}),(0,n.jsxs)(i.Typography,{variant:"body2",className:"block",children:["• ",(0,n.jsx)("strong",{children:"Space or Enter"})," - Activate InputGroupButton"]})]})]}),(0,n.jsxs)(a.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,n.jsxs)(l.CardHeader,{children:[(0,n.jsx)(s.CardTitle,{children:"ARIA Attributes"}),(0,n.jsx)(r.CardDescription,{children:"Proper ARIA attributes for screen readers"})]}),(0,n.jsxs)(t.CardContent,{children:[(0,n.jsxs)(i.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:["• Use ",(0,n.jsx)("code",{children:"aria-label"})," for buttons without visible text (icon buttons)"]}),(0,n.jsxs)(i.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:["• Use ",(0,n.jsx)("code",{children:"aria-describedby"})," to link inputs to supporting text"]}),(0,n.jsxs)(i.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:["• Disabled elements automatically get ",(0,n.jsx)("code",{children:'aria-disabled="true"'})]}),(0,n.jsx)(i.Typography,{variant:"body2",className:"block",children:"• InputGroupButton uses proper button semantics for screen readers"})]})]}),(0,n.jsxs)(a.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,n.jsxs)(l.CardHeader,{children:[(0,n.jsx)(s.CardTitle,{children:"Focus States"}),(0,n.jsx)(r.CardDescription,{children:"Visible focus indicators for keyboard users"})]}),(0,n.jsx)(t.CardContent,{children:(0,n.jsx)(i.Typography,{variant:"body2",className:"block",children:"InputGroup components have visible focus states that follow the LSD design system's focus indicators, ensuring keyboard users can always see which element has focus. Inputs and buttons maintain distinct focus styles for clarity."})})]})]})]}),(0,n.jsx)(m.PageNavigation,{previous:{title:"Input",href:"/components/input"},next:{title:"Label",href:"/components/label"}})]})}e.s(["default",()=>j])}]);