(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,n=>{"use strict";var t=n.i(75201);function e(){var n;let e;n=n=>{let t=document.documentElement;n.theme&&("dark"===n.theme?t.classList.add("dark"):t.classList.remove("dark")),n.accent&&("monochrome"===n.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",n.accent)),n.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===n.font?t.classList.add("font-serif"):"sans-serif"===n.font?t.classList.add("font-sans"):"monospace"===n.font&&t.classList.add("font-mono"))},e=t.useRef(n),t.useEffect(()=>{e.current=n},[n]),t.useEffect(()=>{if(window.self===window.top)return;let n=n=>{"example-params"===n.data.type&&e.current(n.data.data)};return window.addEventListener("message",n),()=>{window.removeEventListener("message",n)}},["example-params"])}n.s(["useSendThemeToIframes",()=>e],45173)},91780,n=>{"use strict";var t=n.i(98134);n.i(26940);var e=n.i(42633),u=n.i(65934),p=n.i(57285),o=n.i(98930),r=n.i(19418),s=n.i(45173);let a=`import {
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
}`;function d(){return(0,s.useSendThemeToIframes)(),(0,t.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,t.jsxs)(e.InputGroup,{children:[(0,t.jsx)(u.InputGroupAddon,{align:"inline-start",children:(0,t.jsx)(r.InputGroupText,{children:"$"})}),(0,t.jsx)(o.InputGroupInput,{placeholder:"0.00"})]}),(0,t.jsxs)(e.InputGroup,{children:[(0,t.jsx)(o.InputGroupInput,{placeholder:"username"}),(0,t.jsx)(u.InputGroupAddon,{align:"inline-end",children:(0,t.jsx)(r.InputGroupText,{children:"@example.com"})})]}),(0,t.jsxs)(e.InputGroup,{children:[(0,t.jsx)(u.InputGroupAddon,{align:"inline-start",children:(0,t.jsx)(r.InputGroupText,{children:"https://"})}),(0,t.jsx)(o.InputGroupInput,{placeholder:"example.com"}),(0,t.jsx)(u.InputGroupAddon,{align:"inline-end",children:(0,t.jsx)(p.InputGroupButton,{children:"Go"})})]})]})}function i(){return(0,t.jsx)(d,{})}n.s(["CODE",0,a,"InputGroupBasicExample",()=>d,"default",()=>i])}]);