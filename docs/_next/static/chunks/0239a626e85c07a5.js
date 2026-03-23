(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,e=>{"use strict";var i=e.i(86900);function d(){var e;let d;e=e=>{let i=document.documentElement;e.theme&&("dark"===e.theme?i.classList.add("dark"):i.classList.remove("dark")),e.accent&&("monochrome"===e.accent?i.removeAttribute("data-theme"):i.setAttribute("data-theme",e.accent)),e.font&&(i.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?i.classList.add("font-serif"):"sans-serif"===e.font?i.classList.add("font-sans"):"monospace"===e.font&&i.classList.add("font-mono"))},d=i.useRef(e),i.useEffect(()=>{d.current=e},[e]),i.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&d.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>d],68869)},86409,e=>{"use strict";var i=e.i(58640);e.s(["Input",()=>i.I])},63361,e=>{"use strict";var i=e.i(2582);e.i(82419);var d=e.i(4675),t=e.i(46565),r=e.i(23247),l=e.i(18771),s=e.i(51989),n=e.i(13606),a=e.i(86409),o=e.i(68869);let c=`import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldSeparator,
  Input,
  Select,
  SelectTrigger,
  SelectValue,
  Typography,
} from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <FieldSet>
        <FieldLegend>Payment Method</FieldLegend>
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
      </FieldSet>

      <FieldSeparator />

      <FieldSet>
        <FieldLegend>Billing Address</FieldLegend>
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
      </FieldSet>
    </div>
  );
}`;function p(){return(0,o.useSendThemeToIframes)(),(0,i.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,i.jsxs)(n.FieldSet,{children:[(0,i.jsx)(l.FieldLegend,{children:"Payment Method"}),(0,i.jsx)(t.FieldDescription,{children:"Choose your preferred payment method for this transaction"}),(0,i.jsxs)(d.Field,{children:[(0,i.jsx)(r.FieldLabel,{htmlFor:"card-number",children:"Card Number"}),(0,i.jsx)(a.Input,{id:"card-number",placeholder:"1234 5678 9012 3456"})]}),(0,i.jsxs)(d.Field,{children:[(0,i.jsx)(r.FieldLabel,{htmlFor:"expiry",children:"Expiry Date"}),(0,i.jsx)(a.Input,{id:"expiry",placeholder:"MM/YY"})]})]}),(0,i.jsx)(s.FieldSeparator,{}),(0,i.jsxs)(n.FieldSet,{children:[(0,i.jsx)(l.FieldLegend,{children:"Billing Address"}),(0,i.jsx)(t.FieldDescription,{children:"Enter the address where you receive your billing statements"}),(0,i.jsxs)(d.Field,{children:[(0,i.jsx)(r.FieldLabel,{htmlFor:"address",children:"Street Address"}),(0,i.jsx)(a.Input,{id:"address",placeholder:"123 Main Street"})]}),(0,i.jsxs)(d.Field,{children:[(0,i.jsx)(r.FieldLabel,{htmlFor:"city",children:"City"}),(0,i.jsx)(a.Input,{id:"city",placeholder:"New York"})]})]})]})}function F(){return(0,i.jsx)(p,{})}e.s(["CODE",0,c,"FieldLegendDescriptionExample",()=>p,"default",()=>F])}]);