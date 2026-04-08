(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,n=>{"use strict";var t=n.i(75201);function e(){var n;let e;n=n=>{let t=document.documentElement;n.theme&&("dark"===n.theme?t.classList.add("dark"):t.classList.remove("dark")),n.accent&&("monochrome"===n.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",n.accent)),n.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===n.font?t.classList.add("font-serif"):"sans-serif"===n.font?t.classList.add("font-sans"):"monospace"===n.font&&t.classList.add("font-mono"))},e=t.useRef(n),t.useEffect(()=>{e.current=n},[n]),t.useEffect(()=>{if(window.self===window.top)return;let n=n=>{"example-params"===n.data.type&&e.current(n.data.data)};return window.addEventListener("message",n),()=>{window.removeEventListener("message",n)}},["example-params"])}n.s(["useSendThemeToIframes",()=>e],45173)},22063,n=>{"use strict";var t=n.i(98134);n.i(26940);var e=n.i(42633),p=n.i(65934),u=n.i(57285),r=n.i(98930),o=n.i(19418),s=n.i(6896),a=n.i(45173);let i=`import {
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
}`;function l(){return(0,a.useSendThemeToIframes)(),(0,t.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(s.Typography,{variant:"label1",className:"block mb-(--lsd-spacing-smaller)",children:"Small (sm)"}),(0,t.jsxs)(e.InputGroup,{size:"sm",children:[(0,t.jsx)(p.InputGroupAddon,{align:"inline-start",children:(0,t.jsx)(o.InputGroupText,{children:"$"})}),(0,t.jsx)(r.InputGroupInput,{placeholder:"0.00"}),(0,t.jsx)(p.InputGroupAddon,{align:"inline-end",children:(0,t.jsx)(u.InputGroupButton,{children:"Submit"})})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(s.Typography,{variant:"label1",className:"block mb-(--lsd-spacing-smaller)",children:"Medium (md)"}),(0,t.jsxs)(e.InputGroup,{size:"md",children:[(0,t.jsx)(p.InputGroupAddon,{align:"inline-start",children:(0,t.jsx)(o.InputGroupText,{children:"$"})}),(0,t.jsx)(r.InputGroupInput,{placeholder:"0.00"}),(0,t.jsx)(p.InputGroupAddon,{align:"inline-end",children:(0,t.jsx)(u.InputGroupButton,{children:"Submit"})})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(s.Typography,{variant:"label1",className:"block mb-(--lsd-spacing-smaller)",children:"Large (lg)"}),(0,t.jsxs)(e.InputGroup,{size:"lg",children:[(0,t.jsx)(p.InputGroupAddon,{align:"inline-start",children:(0,t.jsx)(o.InputGroupText,{children:"$"})}),(0,t.jsx)(r.InputGroupInput,{placeholder:"0.00"}),(0,t.jsx)(p.InputGroupAddon,{align:"inline-end",children:(0,t.jsx)(u.InputGroupButton,{children:"Submit"})})]})]})]})}function d(){return(0,t.jsx)(l,{})}n.s(["CODE",0,i,"InputGroupSizesExample",()=>l,"default",()=>d])}]);