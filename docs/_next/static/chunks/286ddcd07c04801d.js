(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var i=e.i(75201);function d(){var e;let d;e=e=>{let i=document.documentElement;e.theme&&("dark"===e.theme?i.classList.add("dark"):i.classList.remove("dark")),e.accent&&("monochrome"===e.accent?i.removeAttribute("data-theme"):i.setAttribute("data-theme",e.accent)),e.font&&(i.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?i.classList.add("font-serif"):"sans-serif"===e.font?i.classList.add("font-sans"):"monospace"===e.font&&i.classList.add("font-mono"))},d=i.useRef(e),i.useEffect(()=>{d.current=e},[e]),i.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&d.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>d],45173)},75874,e=>{"use strict";var i=e.i(98134);e.i(26940);var d=e.i(14499),l=e.i(50391),s=e.i(21496),t=e.i(66086),r=e.i(41525),a=e.i(23155),n=e.i(45173);let o=`import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
  Input,
} from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-largest)">
      <FieldSet>
        <FieldLegend>Payment Method</FieldLegend>
        <div className="flex flex-col gap-y-(--lsd-spacing-base)">
          <FieldDescription>
            Choose your preferred payment method for this transaction
          </FieldDescription>
          <Field>
            <FieldLabel htmlFor="card-number">Card Number</FieldLabel>
            <Input id="card-number" placeholder="1234 5678 9012 3456" />
          </Field>
          <Field>
            <FieldLabel htmlFor="expiry">Expiry Date</FieldLabel>
            <Input id="expiry" placeholder="MM/YY" />
          </Field>
        </div>
      </FieldSet>

      <FieldSet>
        <FieldLegend>Billing Address</FieldLegend>
        <div className="flex flex-col gap-y-(--lsd-spacing-base)">
          <FieldDescription>
            Enter the address where you receive your billing statements
          </FieldDescription>
          <Field>
            <FieldLabel htmlFor="address">Street Address</FieldLabel>
            <Input id="address" placeholder="123 Main Street" />
          </Field>
          <Field>
            <FieldLabel htmlFor="city">City</FieldLabel>
            <Input id="city" placeholder="New York" />
          </Field>
        </div>
      </FieldSet>
    </div>
  );
}`;function c(){return(0,n.useSendThemeToIframes)(),(0,i.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-largest)",children:[(0,i.jsxs)(r.FieldSet,{children:[(0,i.jsx)(t.FieldLegend,{children:"Payment Method"}),(0,i.jsxs)("div",{className:"flex flex-col gap-y-(--lsd-spacing-base)",children:[(0,i.jsx)(l.FieldDescription,{children:"Choose your preferred payment method for this transaction"}),(0,i.jsxs)(d.Field,{children:[(0,i.jsx)(s.FieldLabel,{htmlFor:"card-number",children:"Card Number"}),(0,i.jsx)(a.Input,{id:"card-number",placeholder:"1234 5678 9012 3456"})]}),(0,i.jsxs)(d.Field,{children:[(0,i.jsx)(s.FieldLabel,{htmlFor:"expiry",children:"Expiry Date"}),(0,i.jsx)(a.Input,{id:"expiry",placeholder:"MM/YY"})]})]})]}),(0,i.jsxs)(r.FieldSet,{children:[(0,i.jsx)(t.FieldLegend,{children:"Billing Address"}),(0,i.jsxs)("div",{className:"flex flex-col gap-y-(--lsd-spacing-base)",children:[(0,i.jsx)(l.FieldDescription,{children:"Enter the address where you receive your billing statements"}),(0,i.jsxs)(d.Field,{children:[(0,i.jsx)(s.FieldLabel,{htmlFor:"address",children:"Street Address"}),(0,i.jsx)(a.Input,{id:"address",placeholder:"123 Main Street"})]}),(0,i.jsxs)(d.Field,{children:[(0,i.jsx)(s.FieldLabel,{htmlFor:"city",children:"City"}),(0,i.jsx)(a.Input,{id:"city",placeholder:"New York"})]})]})]})]})}function p(){return(0,i.jsx)(c,{})}e.s(["CODE",0,o,"FieldLegendDescriptionExample",()=>c,"default",()=>p])}]);