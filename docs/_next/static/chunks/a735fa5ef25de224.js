(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var a=e.i(75201);function t(){var e;let t;e=e=>{let a=document.documentElement;e.theme&&("dark"===e.theme?a.classList.add("dark"):a.classList.remove("dark")),e.accent&&("monochrome"===e.accent?a.removeAttribute("data-theme"):a.setAttribute("data-theme",e.accent)),e.font&&(a.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?a.classList.add("font-serif"):"sans-serif"===e.font?a.classList.add("font-sans"):"monospace"===e.font&&a.classList.add("font-mono"))},t=a.useRef(e),a.useEffect(()=>{t.current=e},[e]),a.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&t.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>t],45173)},61417,e=>{"use strict";var a=e.i(20607);e.s(["Typography",()=>a.T])},46402,e=>{"use strict";var a=e.i(45171);e.s(["Input",()=>a.I])},64131,e=>{"use strict";var a=e.i(98134);e.i(26940);var t=e.i(14499),i=e.i(88617),s=e.i(21496),r=e.i(46402),l=e.i(61417),n=e.i(45173);let o=`import { Field, FieldGroup, FieldLabel, Input, Typography } from '@nipsys/shadcn-lsd';

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