(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var t=e.i(75201);function i(){var e;let i;e=e=>{let t=document.documentElement;e.theme&&("dark"===e.theme?t.classList.add("dark"):t.classList.remove("dark")),e.accent&&("monochrome"===e.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e.accent)),e.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?t.classList.add("font-serif"):"sans-serif"===e.font?t.classList.add("font-sans"):"monospace"===e.font&&t.classList.add("font-mono"))},i=t.useRef(e),t.useEffect(()=>{i.current=e},[e]),t.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&i.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>i],45173)},39683,e=>{"use strict";var t=e.i(98134);e.i(26940);var i=e.i(39225),a=e.i(14499),s=e.i(88617),l=e.i(21496),o=e.i(6896),r=e.i(45173);let n=`import { Checkbox, Field, FieldGroup, FieldLabel, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <FieldGroup>
      <Typography variant="label1" className="mb-(--lsd-spacing-base)">
        Email Notifications
      </Typography>
      <Field orientation="horizontal">
        <Checkbox id="newsletter" defaultChecked />
        <FieldLabel htmlFor="newsletter">Newsletter</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="marketing" />
        <FieldLabel htmlFor="marketing">Marketing emails</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="updates" defaultChecked />
        <FieldLabel htmlFor="updates">Product updates</FieldLabel>
      </Field>
    </FieldGroup>
  );
}`;function d(){return(0,r.useSendThemeToIframes)(),(0,t.jsxs)(s.FieldGroup,{children:[(0,t.jsx)(o.Typography,{variant:"label1",className:"mb-(--lsd-spacing-base)",children:"Email Notifications"}),(0,t.jsxs)(a.Field,{orientation:"horizontal",children:[(0,t.jsx)(i.Checkbox,{id:"newsletter",defaultChecked:!0}),(0,t.jsx)(l.FieldLabel,{htmlFor:"newsletter",children:"Newsletter"})]}),(0,t.jsxs)(a.Field,{orientation:"horizontal",children:[(0,t.jsx)(i.Checkbox,{id:"marketing"}),(0,t.jsx)(l.FieldLabel,{htmlFor:"marketing",children:"Marketing emails"})]}),(0,t.jsxs)(a.Field,{orientation:"horizontal",children:[(0,t.jsx)(i.Checkbox,{id:"updates",defaultChecked:!0}),(0,t.jsx)(l.FieldLabel,{htmlFor:"updates",children:"Product updates"})]})]})}function c(){return(0,t.jsx)(d,{})}e.s(["CODE",0,n,"FieldHorizontalExample",()=>d,"default",()=>c])}]);