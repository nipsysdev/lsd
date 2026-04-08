(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var n=e.i(75201);function t(){var e;let t;e=e=>{let n=document.documentElement;e.theme&&("dark"===e.theme?n.classList.add("dark"):n.classList.remove("dark")),e.accent&&("monochrome"===e.accent?n.removeAttribute("data-theme"):n.setAttribute("data-theme",e.accent)),e.font&&(n.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?n.classList.add("font-serif"):"sans-serif"===e.font?n.classList.add("font-sans"):"monospace"===e.font&&n.classList.add("font-mono"))},t=n.useRef(e),n.useEffect(()=>{t.current=e},[e]),n.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&t.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>t],45173)},11356,e=>{"use strict";var n=e.i(98134);e.i(26940);var t=e.i(42633),s=e.i(65934),a=e.i(98930),r=e.i(19418),p=e.i(6896),o=e.i(45173);let l=`import {
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
}`;function i(){return(0,o.useSendThemeToIframes)(),(0,n.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(p.Typography,{variant:"label1",className:"block mb-(--lsd-spacing-smaller)",children:"inline-start"}),(0,n.jsxs)(t.InputGroup,{children:[(0,n.jsx)(s.InputGroupAddon,{align:"inline-start",children:(0,n.jsx)(r.InputGroupText,{children:"$"})}),(0,n.jsx)(a.InputGroupInput,{placeholder:"0.00"})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(p.Typography,{variant:"label1",className:"block mb-(--lsd-spacing-smaller)",children:"inline-end"}),(0,n.jsxs)(t.InputGroup,{children:[(0,n.jsx)(a.InputGroupInput,{placeholder:"username"}),(0,n.jsx)(s.InputGroupAddon,{align:"inline-end",children:(0,n.jsx)(r.InputGroupText,{children:"@example.com"})})]})]})]})}function u(){return(0,n.jsx)(i,{})}e.s(["CODE",0,l,"InputGroupAlignmentExample",()=>i,"default",()=>u])}]);