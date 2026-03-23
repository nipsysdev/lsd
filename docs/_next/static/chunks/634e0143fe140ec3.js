(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,e=>{"use strict";var a=e.i(86900);function t(){var e;let t;e=e=>{let a=document.documentElement;e.theme&&("dark"===e.theme?a.classList.add("dark"):a.classList.remove("dark")),e.accent&&("monochrome"===e.accent?a.removeAttribute("data-theme"):a.setAttribute("data-theme",e.accent)),e.font&&(a.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?a.classList.add("font-serif"):"sans-serif"===e.font?a.classList.add("font-sans"):"monospace"===e.font&&a.classList.add("font-mono"))},t=a.useRef(e),a.useEffect(()=>{t.current=e},[e]),a.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&t.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>t],68869)},68256,e=>{"use strict";var a=e.i(74702);e.s(["Typography",()=>a.T])},86409,e=>{"use strict";var a=e.i(58640);e.s(["Input",()=>a.I])},37488,e=>{"use strict";var a=e.i(2582);e.i(82419);var t=e.i(4675),i=e.i(82868),s=e.i(23247),r=e.i(86409),l=e.i(68256),n=e.i(68869);let o=`import { Field, FieldGroup, FieldLabel, Input, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <FieldGroup>
      <Typography variant="label1" className="mb-(--lsd-spacing-base)">
        Profile Information
      </Typography>
      <Field>
        <FieldLabel htmlFor="name">Name</FieldLabel>
        <Input id="name" placeholder="Enter your name" />
      </Field>
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input id="email" type="email" placeholder="Enter your email" />
      </Field>
    </FieldGroup>
  );
}`;function d(){return(0,n.useSendThemeToIframes)(),(0,a.jsxs)(i.FieldGroup,{children:[(0,a.jsx)(l.Typography,{variant:"label1",className:"mb-(--lsd-spacing-base)",children:"Profile Information"}),(0,a.jsxs)(t.Field,{children:[(0,a.jsx)(s.FieldLabel,{htmlFor:"name",children:"Name"}),(0,a.jsx)(r.Input,{id:"name",placeholder:"Enter your name"})]}),(0,a.jsxs)(t.Field,{children:[(0,a.jsx)(s.FieldLabel,{htmlFor:"email",children:"Email"}),(0,a.jsx)(r.Input,{id:"email",type:"email",placeholder:"Enter your email"})]})]})}function m(){return(0,a.jsx)(d,{})}e.s(["CODE",0,o,"FieldBasicExample",()=>d,"default",()=>m])}]);