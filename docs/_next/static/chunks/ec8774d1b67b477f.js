(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var a=e.i(75201);function i(){var e;let i;e=e=>{let a=document.documentElement;e.theme&&("dark"===e.theme?a.classList.add("dark"):a.classList.remove("dark")),e.accent&&("monochrome"===e.accent?a.removeAttribute("data-theme"):a.setAttribute("data-theme",e.accent)),e.font&&(a.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?a.classList.add("font-serif"):"sans-serif"===e.font?a.classList.add("font-sans"):"monospace"===e.font&&a.classList.add("font-mono"))},i=a.useRef(e),a.useEffect(()=>{i.current=e},[e]),a.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&i.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>i],45173)},90074,e=>{"use strict";var a=e.i(98134);e.i(26940);var i=e.i(71030),l=e.i(73463),r=e.i(2476),s=e.i(52683),d=e.i(59038),t=e.i(6896),n=e.i(75201),o=e.i(85082);let c=new Map([["bold",n.createElement(n.Fragment,null,n.createElement("path",{d:"M200,28H165.47a51.88,51.88,0,0,0-74.94,0H56A20,20,0,0,0,36,48V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V48A20,20,0,0,0,200,28ZM155.71,60H100.29a28,28,0,0,1,55.42,0ZM196,212H60V52H77.41A52.13,52.13,0,0,0,76,64v8A12,12,0,0,0,88,84h80a12,12,0,0,0,12-12V64a52.13,52.13,0,0,0-1.41-12H196Z"}))],["duotone",n.createElement(n.Fragment,null,n.createElement("path",{d:"M208,48V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96a39.83,39.83,0,0,0-8,24v8h80V64a39.83,39.83,0,0,0-8-24h40A8,8,0,0,1,208,48Z",opacity:"0.2"}),n.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"}))],["fill",n.createElement(n.Fragment,null,n.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Z"}))],["light",n.createElement(n.Fragment,null,n.createElement("path",{d:"M200,34H162.83a45.91,45.91,0,0,0-69.66,0H56A14,14,0,0,0,42,48V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V48A14,14,0,0,0,200,34Zm-72-4a34,34,0,0,1,34,34v2H94V64A34,34,0,0,1,128,30Zm74,186a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H85.67A45.77,45.77,0,0,0,82,64v8a6,6,0,0,0,6,6h80a6,6,0,0,0,6-6V64a45.77,45.77,0,0,0-3.67-18H200a2,2,0,0,1,2,2Z"}))],["regular",n.createElement(n.Fragment,null,n.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"}))],["thin",n.createElement(n.Fragment,null,n.createElement("path",{d:"M200,36H161.92a44,44,0,0,0-67.84,0H56A12,12,0,0,0,44,48V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V48A12,12,0,0,0,200,36Zm-72-8a36,36,0,0,1,36,36v4H92V64A36,36,0,0,1,128,28Zm76,188a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H88.83A43.71,43.71,0,0,0,84,64v8a4,4,0,0,0,4,4h80a4,4,0,0,0,4-4V64a43.71,43.71,0,0,0-4.83-20H200a4,4,0,0,1,4,4Z"}))]]),h=n.forwardRef((e,a)=>n.createElement(o.default,{ref:a,...e,weights:c}));h.displayName="ClipboardIcon";let m=new Map([["bold",n.createElement(n.Fragment,null,n.createElement("path",{d:"M71.68,97.22,34.74,128l36.94,30.78a12,12,0,1,1-15.36,18.44l-48-40a12,12,0,0,1,0-18.44l48-40A12,12,0,0,1,71.68,97.22Zm176,21.56-48-40a12,12,0,1,0-15.36,18.44L221.26,128l-36.94,30.78a12,12,0,1,0,15.36,18.44l48-40a12,12,0,0,0,0-18.44ZM164.1,28.72a12,12,0,0,0-15.38,7.18l-64,176a12,12,0,0,0,7.18,15.37A11.79,11.79,0,0,0,96,228a12,12,0,0,0,11.28-7.9l64-176A12,12,0,0,0,164.1,28.72Z"}))],["duotone",n.createElement(n.Fragment,null,n.createElement("path",{d:"M240,128l-48,40H64L16,128,64,88H192Z",opacity:"0.2"}),n.createElement("path",{d:"M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"}))],["fill",n.createElement(n.Fragment,null,n.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM92.8,145.6a8,8,0,1,1-9.6,12.8l-32-24a8,8,0,0,1,0-12.8l32-24a8,8,0,0,1,9.6,12.8L69.33,128Zm58.89-71.4-32,112a8,8,0,1,1-15.38-4.4l32-112a8,8,0,0,1,15.38,4.4Zm53.11,60.2-32,24a8,8,0,0,1-9.6-12.8L186.67,128,163.2,110.4a8,8,0,1,1,9.6-12.8l32,24a8,8,0,0,1,0,12.8Z"}))],["light",n.createElement(n.Fragment,null,n.createElement("path",{d:"M67.84,92.61,25.37,128l42.47,35.39a6,6,0,1,1-7.68,9.22l-48-40a6,6,0,0,1,0-9.22l48-40a6,6,0,0,1,7.68,9.22Zm176,30.78-48-40a6,6,0,1,0-7.68,9.22L230.63,128l-42.47,35.39a6,6,0,1,0,7.68,9.22l48-40a6,6,0,0,0,0-9.22Zm-81.79-89A6,6,0,0,0,154.36,38l-64,176A6,6,0,0,0,94,221.64a6.15,6.15,0,0,0,2,.36,6,6,0,0,0,5.64-3.95l64-176A6,6,0,0,0,162.05,34.36Z"}))],["regular",n.createElement(n.Fragment,null,n.createElement("path",{d:"M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"}))],["thin",n.createElement(n.Fragment,null,n.createElement("path",{d:"M66.56,91.07,22.25,128l44.31,36.93A4,4,0,0,1,64,172a3.94,3.94,0,0,1-2.56-.93l-48-40a4,4,0,0,1,0-6.14l48-40a4,4,0,0,1,5.12,6.14Zm176,33.86-48-40a4,4,0,1,0-5.12,6.14L233.75,128l-44.31,36.93a4,4,0,1,0,5.12,6.14l48-40a4,4,0,0,0,0-6.14ZM161.37,36.24a4,4,0,0,0-5.13,2.39l-64,176a4,4,0,0,0,2.39,5.13A4.12,4.12,0,0,0,96,220a4,4,0,0,0,3.76-2.63l64-176A4,4,0,0,0,161.37,36.24Z"}))]]),p=n.forwardRef((e,a)=>n.createElement(o.default,{ref:a,...e,weights:m}));p.displayName="CodeIcon";var x=e.i(54219);function j({code:e,useAccordion:n=!0}){let o=async()=>{try{await navigator.clipboard.writeText(e),x.toast.success("Code successfully copied to clipboard")}catch(e){x.toast.error("Failed to copy code to clipboard")}},c=(0,a.jsxs)("div",{className:"flex justify-between size-full relative group",children:[(0,a.jsx)(t.Typography,{variant:"subtitle3",className:"my-auto",children:(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"whitespace-break-spaces",children:e})})}),(0,a.jsx)(d.Button,{onClick:o,variant:"outlined",size:"square-md",className:"opacity-0 group-hover:opacity-100 transition-opacity","aria-label":"Copy code",children:(0,a.jsx)(h,{className:"size-4",weight:"duotone"})})]});return n?(0,a.jsx)(i.Accordion,{type:"single",collapsible:!0,children:(0,a.jsxs)(r.AccordionItem,{value:"code",children:[(0,a.jsx)(s.AccordionTrigger,{children:(0,a.jsxs)("div",{className:"flex items-center justify-center gap-x-(--lsd-spacing-base)",children:[(0,a.jsx)(p,{weight:"duotone",className:"size-5"})," View code"]})}),(0,a.jsx)(l.AccordionContent,{children:c})]})}):c}e.s(["CodeExample",()=>j],90074)},10337,e=>{"use strict";var a=e.i(98134);let i=(0,e.i(75201).forwardRef)(({src:e,title:i,size:l="md",className:r,...s},d)=>(0,a.jsx)("iframe",{ref:d,src:e,className:`${{sm:"min-h-[128px]",md:"min-h-[256px]",lg:"min-h-[450px]",xl:"min-h-[600px]"}[l]} w-full overflow-hidden`,title:i,...s}));i.displayName="IframeExample",e.s(["IframeExample",0,i])},64131,e=>{"use strict";var a=e.i(98134);e.i(26940);var i=e.i(14499),l=e.i(88617),r=e.i(21496),s=e.i(23155),d=e.i(6896),t=e.i(45173);let n=`import { Field, FieldGroup, FieldLabel, Input, Typography } from '@nipsys/shadcn-lsd';

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
}`;function o(){return(0,t.useSendThemeToIframes)(),(0,a.jsxs)(l.FieldGroup,{children:[(0,a.jsx)(d.Typography,{variant:"label1",className:"mb-(--lsd-spacing-base)",children:"Profile Information"}),(0,a.jsxs)(i.Field,{children:[(0,a.jsx)(r.FieldLabel,{htmlFor:"name",children:"Name"}),(0,a.jsx)(s.Input,{id:"name",placeholder:"Enter your name"})]}),(0,a.jsxs)(i.Field,{children:[(0,a.jsx)(r.FieldLabel,{htmlFor:"email",children:"Email"}),(0,a.jsx)(s.Input,{id:"email",type:"email",placeholder:"Enter your email"})]})]})}function c(){return(0,a.jsx)(o,{})}e.s(["CODE",0,n,"FieldBasicExample",()=>o,"default",()=>c])},39683,e=>{"use strict";var a=e.i(98134);e.i(26940);var i=e.i(39225),l=e.i(14499),r=e.i(88617),s=e.i(21496),d=e.i(6896),t=e.i(45173);let n=`import { Checkbox, Field, FieldGroup, FieldLabel, Typography } from '@nipsys/shadcn-lsd';

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
}`;function o(){return(0,t.useSendThemeToIframes)(),(0,a.jsxs)(r.FieldGroup,{children:[(0,a.jsx)(d.Typography,{variant:"label1",className:"mb-(--lsd-spacing-base)",children:"Email Notifications"}),(0,a.jsxs)(l.Field,{orientation:"horizontal",children:[(0,a.jsx)(i.Checkbox,{id:"newsletter",defaultChecked:!0}),(0,a.jsx)(s.FieldLabel,{htmlFor:"newsletter",children:"Newsletter"})]}),(0,a.jsxs)(l.Field,{orientation:"horizontal",children:[(0,a.jsx)(i.Checkbox,{id:"marketing"}),(0,a.jsx)(s.FieldLabel,{htmlFor:"marketing",children:"Marketing emails"})]}),(0,a.jsxs)(l.Field,{orientation:"horizontal",children:[(0,a.jsx)(i.Checkbox,{id:"updates",defaultChecked:!0}),(0,a.jsx)(s.FieldLabel,{htmlFor:"updates",children:"Product updates"})]})]})}function c(){return(0,a.jsx)(o,{})}e.s(["CODE",0,n,"FieldHorizontalExample",()=>o,"default",()=>c])},75874,e=>{"use strict";var a=e.i(98134);e.i(26940);var i=e.i(14499),l=e.i(50391),r=e.i(21496),s=e.i(66086),d=e.i(41525),t=e.i(23155),n=e.i(45173);let o=`import {
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
}`;function c(){return(0,n.useSendThemeToIframes)(),(0,a.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-largest)",children:[(0,a.jsxs)(d.FieldSet,{children:[(0,a.jsx)(s.FieldLegend,{children:"Payment Method"}),(0,a.jsxs)("div",{className:"flex flex-col gap-y-(--lsd-spacing-base)",children:[(0,a.jsx)(l.FieldDescription,{children:"Choose your preferred payment method for this transaction"}),(0,a.jsxs)(i.Field,{children:[(0,a.jsx)(r.FieldLabel,{htmlFor:"card-number",children:"Card Number"}),(0,a.jsx)(t.Input,{id:"card-number",placeholder:"1234 5678 9012 3456"})]}),(0,a.jsxs)(i.Field,{children:[(0,a.jsx)(r.FieldLabel,{htmlFor:"expiry",children:"Expiry Date"}),(0,a.jsx)(t.Input,{id:"expiry",placeholder:"MM/YY"})]})]})]}),(0,a.jsxs)(d.FieldSet,{children:[(0,a.jsx)(s.FieldLegend,{children:"Billing Address"}),(0,a.jsxs)("div",{className:"flex flex-col gap-y-(--lsd-spacing-base)",children:[(0,a.jsx)(l.FieldDescription,{children:"Enter the address where you receive your billing statements"}),(0,a.jsxs)(i.Field,{children:[(0,a.jsx)(r.FieldLabel,{htmlFor:"address",children:"Street Address"}),(0,a.jsx)(t.Input,{id:"address",placeholder:"123 Main Street"})]}),(0,a.jsxs)(i.Field,{children:[(0,a.jsx)(r.FieldLabel,{htmlFor:"city",children:"City"}),(0,a.jsx)(t.Input,{id:"city",placeholder:"New York"})]})]})]})]})}function h(){return(0,a.jsx)(c,{})}e.s(["CODE",0,o,"FieldLegendDescriptionExample",()=>c,"default",()=>h])},76292,e=>{"use strict";var a=e.i(98134);e.i(26940);var i=e.i(46700),l=e.i(57845),r=e.i(80427),s=e.i(64439),d=e.i(93261),t=e.i(14499),n=e.i(9791),o=e.i(68163),c=e.i(88617),h=e.i(21496),m=e.i(23155),p=e.i(75201);function x(){let[e,x]=(0,p.useState)([]);return(0,a.jsxs)(i.Card,{className:"w-full max-w-md",children:[(0,a.jsxs)(s.CardHeader,{children:[(0,a.jsx)(d.CardTitle,{children:"Field Error Example"}),(0,a.jsx)(r.CardDescription,{children:"Demonstrates FieldError with validation messages"})]}),(0,a.jsx)(l.CardContent,{children:(0,a.jsxs)(c.FieldGroup,{children:[(0,a.jsxs)(t.Field,{children:[(0,a.jsx)(h.FieldLabel,{htmlFor:"email",children:"Email Address"}),(0,a.jsxs)(n.FieldContent,{children:[(0,a.jsx)(m.Input,{id:"email",type:"email",placeholder:"Enter your email",onChange:e=>{var a;let i;return a=e.target.value,i=[],void(a?a.includes("@")?a.length<5&&i.push("Email must be at least 5 characters"):i.push("Email must include @ symbol"):i.push("Email is required"),x(i))}}),(0,a.jsx)(o.FieldError,{errors:e,className:"mt-1"})]})]}),(0,a.jsx)(o.FieldError,{className:"mt-2",children:"Static error message example"})]})})]})}let j=`import {
  Button,
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  Input,
} from '@nipsys/shadcn-lsd';
import { useState } from 'react';

export default function FieldErrorExample() {
  const [errors, setErrors] = useState<string[]>([]);

  const validateEmail = (email: string) => {
    const newErrors: string[] = [];
    if (!email) {
      newErrors.push('Email is required');
    } else if (!email.includes('@')) {
      newErrors.push('Email must include @ symbol');
    } else if (email.length < 5) {
      newErrors.push('Email must be at least 5 characters');
    }
    setErrors(newErrors);
  };

  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="email">Email Address</FieldLabel>
        <FieldContent>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => validateEmail(e.target.value)}
          />
          <FieldError errors={errors} className="mt-1" />
        </FieldContent>
      </Field>
      <FieldError className="mt-2">Static error message example</FieldError>
    </FieldGroup>
  );
}`;e.s(["CODE",0,j,"default",()=>x])},94667,e=>{"use strict";var a=e.i(98134);e.i(26940);var i=e.i(46700),l=e.i(57845),r=e.i(80427),s=e.i(64439),d=e.i(93261),t=e.i(6896),n=e.i(90074),o=e.i(49332),c=e.i(10337),h=e.i(99311),m=e.i(11163),p=e.i(45010),x=e.i(48989),j=e.i(64131),u=e.i(76292),b=e.i(39683),g=e.i(75874);function y(){return(0,a.jsxs)(o.DocsLayout,{children:[(0,a.jsx)(m.PageHeader,{title:"Field",description:"A flexible composition system for building form field layouts with orientations and nested components"}),(0,a.jsxs)(h.PageContent,{children:[(0,a.jsx)(x.PageSection,{title:"About Field",children:(0,a.jsx)(t.Typography,{variant:"body1",className:"block",children:"Field components provide a structured way to organise form elements with consistent spacing and orientation. They include containers for grouping fields, semantic fieldset/legend wrappers, and utilities for labels, descriptions, and separators."})}),(0,a.jsxs)(x.PageSection,{title:"Installation",children:[(0,a.jsx)(t.Typography,{variant:"body1",children:"Import the Field components from LSD:"}),(0,a.jsx)(i.Card,{className:"mt-(--lsd-spacing-base)",children:(0,a.jsx)(l.CardContent,{children:(0,a.jsx)(n.CodeExample,{useAccordion:!1,code:`import {
   Field,
   FieldGroup,
   FieldSet,
   FieldLegend,
   FieldTitle,
   FieldDescription,
   FieldLabel,
   FieldContent,
   FieldError,
   FieldSeparator,
 } from '@nipsys/shadcn-lsd'

export default function MyComponent() {
   return (
     <FieldGroup>
       <Field>
         <FieldLabel htmlFor="field">Label</FieldLabel>
         <Input id="field" />
       </Field>
     </FieldGroup>
   );
 }`})})})]}),(0,a.jsxs)(x.PageSection,{title:"Basic Usage",children:[(0,a.jsx)(t.Typography,{variant:"body1",children:"Use Field components to create simple vertical form layouts."}),(0,a.jsxs)(i.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,a.jsxs)(s.CardHeader,{children:[(0,a.jsx)(d.CardTitle,{children:"Basic Profile Form"}),(0,a.jsx)(r.CardDescription,{children:"Simple vertical form with name and email fields"})]}),(0,a.jsxs)(l.CardContent,{children:[(0,a.jsx)(c.IframeExample,{size:"md",src:"/examples/field/basic",title:"Basic Field"}),(0,a.jsx)(n.CodeExample,{code:j.CODE})]})]})]}),(0,a.jsxs)(x.PageSection,{title:"Horizontal Orientation",children:[(0,a.jsxs)(t.Typography,{variant:"body1",children:["Use the ",(0,a.jsx)("code",{children:'orientation="horizontal"'})," prop to align fields with labels on the right side of the control."]}),(0,a.jsxs)(i.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,a.jsxs)(s.CardHeader,{children:[(0,a.jsx)(d.CardTitle,{children:"Email Notifications"}),(0,a.jsx)(r.CardDescription,{children:"Horizontal field layout with checkboxes"})]}),(0,a.jsxs)(l.CardContent,{children:[(0,a.jsx)(c.IframeExample,{size:"md",src:"/examples/field/horizontal",title:"Horizontal Field"}),(0,a.jsx)(n.CodeExample,{code:b.CODE})]})]})]}),(0,a.jsxs)(x.PageSection,{title:"Legend and Description",children:[(0,a.jsxs)(t.Typography,{variant:"body1",children:["Use ",(0,a.jsx)("code",{children:"FieldSet"}),", ",(0,a.jsx)("code",{children:"FieldLegend"}),", and ",(0,a.jsx)("code",{children:"FieldDescription"})," ","for semantically grouped form sections."]}),(0,a.jsxs)(i.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,a.jsxs)(s.CardHeader,{children:[(0,a.jsx)(d.CardTitle,{children:"Payment Form"}),(0,a.jsx)(r.CardDescription,{children:"Grouped form sections with legends and descriptions"})]}),(0,a.jsxs)(l.CardContent,{children:[(0,a.jsx)(c.IframeExample,{size:"lg",src:"/examples/field/legend-description",title:"Legend and Description"}),(0,a.jsx)(n.CodeExample,{code:g.CODE})]})]})]}),(0,a.jsxs)(x.PageSection,{title:"Error Handling",children:[(0,a.jsxs)(t.Typography,{variant:"body1",children:["Use ",(0,a.jsx)("code",{children:"FieldError"})," to display validation errors with proper accessibility support and deduplication."]}),(0,a.jsxs)(i.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,a.jsxs)(s.CardHeader,{children:[(0,a.jsx)(d.CardTitle,{children:"Form With Validation"}),(0,a.jsx)(r.CardDescription,{children:"Error handling examples with FieldError component"})]}),(0,a.jsxs)(l.CardContent,{children:[(0,a.jsx)(c.IframeExample,{size:"md",src:"/examples/field/error",title:"Field Error"}),(0,a.jsx)(n.CodeExample,{code:u.CODE})]})]})]}),(0,a.jsxs)(x.PageSection,{title:"API Reference",children:[(0,a.jsx)(t.Typography,{variant:"body1",children:"All available props for Field components."}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)",children:[(0,a.jsxs)(i.Card,{children:[(0,a.jsxs)(s.CardHeader,{children:[(0,a.jsx)(d.CardTitle,{children:"Field"}),(0,a.jsx)(r.CardDescription,{children:"Main field container with orientation support"})]}),(0,a.jsxs)(l.CardContent,{children:[(0,a.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,a.jsx)("strong",{children:"orientation:"})," 'vertical' | 'horizontal' | 'responsive'"]}),(0,a.jsx)(t.Typography,{variant:"body2",className:"block",children:"Controls layout direction. Responsive defaults to vertical on mobile and horizontal on md breakpoint."})]})]}),(0,a.jsxs)(i.Card,{children:[(0,a.jsxs)(s.CardHeader,{children:[(0,a.jsx)(d.CardTitle,{children:"FieldGroup"}),(0,a.jsx)(r.CardDescription,{children:"Container for vertical spacing"})]}),(0,a.jsxs)(l.CardContent,{children:[(0,a.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,a.jsx)("strong",{children:"Extends:"})," HTMLDivElement"]}),(0,a.jsxs)(t.Typography,{variant:"body2",className:"block",children:["Provides consistent vertical spacing between child fields using"," ",(0,a.jsx)("code",{children:"--lsd-spacing-base"})]})]})]}),(0,a.jsxs)(i.Card,{children:[(0,a.jsxs)(s.CardHeader,{children:[(0,a.jsx)(d.CardTitle,{children:"FieldSet"}),(0,a.jsx)(r.CardDescription,{children:"Semantic fieldset wrapper"})]}),(0,a.jsxs)(l.CardContent,{children:[(0,a.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,a.jsx)("strong",{children:"Extends:"})," HTMLFieldSetElement"]}),(0,a.jsx)(t.Typography,{variant:"body2",className:"block",children:"Renders a fieldset element with no default border or padding, suitable for use with FieldLegend"})]})]}),(0,a.jsxs)(i.Card,{children:[(0,a.jsxs)(s.CardHeader,{children:[(0,a.jsx)(d.CardTitle,{children:"FieldLegend"}),(0,a.jsx)(r.CardDescription,{children:"Section heading for fieldsets"})]}),(0,a.jsxs)(l.CardContent,{children:[(0,a.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,a.jsx)("strong",{children:"Extends:"})," HTMLLegendElement"]}),(0,a.jsxs)(t.Typography,{variant:"body2",className:"block",children:["Renders at 1.5rem with medium font weight and bottom padding of"," ",(0,a.jsx)("code",{children:"--lsd-spacing-base"})]})]})]}),(0,a.jsxs)(i.Card,{children:[(0,a.jsxs)(s.CardHeader,{children:[(0,a.jsx)(d.CardTitle,{children:"FieldDescription"}),(0,a.jsx)(r.CardDescription,{children:"Helper text for fields"})]}),(0,a.jsxs)(l.CardContent,{children:[(0,a.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,a.jsx)("strong",{children:"Extends:"})," HTMLParagraphElement"]}),(0,a.jsx)(t.Typography,{variant:"body2",className:"block",children:"Renders at 0.875rem with secondary text color and 1rem bottom margin"})]})]}),(0,a.jsxs)(i.Card,{children:[(0,a.jsxs)(s.CardHeader,{children:[(0,a.jsx)(d.CardTitle,{children:"FieldLabel"}),(0,a.jsx)(r.CardDescription,{children:"Label for form controls"})]}),(0,a.jsxs)(l.CardContent,{children:[(0,a.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,a.jsx)("strong",{children:"htmlFor:"})," string (optional)"]}),(0,a.jsxs)(t.Typography,{variant:"body2",className:"block",children:["Renders at 0.875rem with medium font weight and block display. Accepts"," ",(0,a.jsx)("code",{children:"htmlFor"})," to associate with input elements"]})]})]}),(0,a.jsxs)(i.Card,{children:[(0,a.jsxs)(s.CardHeader,{children:[(0,a.jsx)(d.CardTitle,{children:"FieldContent"}),(0,a.jsx)(r.CardDescription,{children:"Responsive wrapper for input content"})]}),(0,a.jsxs)(l.CardContent,{children:[(0,a.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,a.jsx)("strong",{children:"Extends:"})," HTMLDivElement"]}),(0,a.jsx)(t.Typography,{variant:"body2",className:"block",children:"Provides a full-width container for input elements in horizontal layouts"})]})]}),(0,a.jsxs)(i.Card,{children:[(0,a.jsxs)(s.CardHeader,{children:[(0,a.jsx)(d.CardTitle,{children:"FieldSeparator"}),(0,a.jsx)(r.CardDescription,{children:"Divider between sections"})]}),(0,a.jsxs)(l.CardContent,{children:[(0,a.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,a.jsx)("strong",{children:"Extends:"})," HTMLHRElement"]}),(0,a.jsx)(t.Typography,{variant:"body2",className:"block",children:"Renders a horizontal rule with border color and 1rem top/bottom margin"})]})]}),(0,a.jsxs)(i.Card,{children:[(0,a.jsxs)(s.CardHeader,{children:[(0,a.jsx)(d.CardTitle,{children:"FieldTitle"}),(0,a.jsx)(r.CardDescription,{children:"Title for field sections"})]}),(0,a.jsxs)(l.CardContent,{children:[(0,a.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,a.jsx)("strong",{children:"Extends:"})," HTMLDivElement"]}),(0,a.jsx)(t.Typography,{variant:"body2",className:"block",children:"Renders at 0.875rem with medium font weight, compact line height, and no semantic legend. Use as an alternative to FieldLegend for non-fieldset headings."})]})]}),(0,a.jsxs)(i.Card,{children:[(0,a.jsxs)(s.CardHeader,{children:[(0,a.jsx)(d.CardTitle,{children:"FieldError"}),(0,a.jsx)(r.CardDescription,{children:"Error message display"})]}),(0,a.jsxs)(l.CardContent,{children:[(0,a.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,a.jsx)("strong",{children:"errors:"})," Array<string | ErrorItem>"]}),(0,a.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,a.jsx)("strong",{children:"children:"})," React.ReactNode (optional)"]}),(0,a.jsxs)(t.Typography,{variant:"body2",className:"block",children:["Renders error messages from array or children, with deduplication and"," ",(0,a.jsx)("code",{children:'role="alert"'})," for accessibility. Renders single message or bullet list for multiple errors."]})]})]})]})]}),(0,a.jsxs)(x.PageSection,{title:"Accessibility",children:[(0,a.jsx)(t.Typography,{variant:"body1",children:"Field components follow accessibility best practices using semantic HTML elements."}),(0,a.jsxs)(i.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,a.jsxs)(s.CardHeader,{children:[(0,a.jsx)(d.CardTitle,{children:"Semantic Markup"}),(0,a.jsx)(r.CardDescription,{children:"Proper HTML elements for form accessibility"})]}),(0,a.jsxs)(l.CardContent,{children:[(0,a.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:["• ",(0,a.jsx)("code",{children:"FieldSet"})," renders a native HTML fieldset element for grouping related fields"]}),(0,a.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:["• ",(0,a.jsx)("code",{children:"FieldLegend"})," renders a native HTML legend element for fieldset labels"]}),(0,a.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:["• ",(0,a.jsx)("code",{children:"FieldLabel"})," renders a native HTML label element with support for"," ",(0,a.jsx)("code",{children:"htmlFor"})," attribute"]}),(0,a.jsxs)(t.Typography,{variant:"body2",className:"block",children:["• Use ",(0,a.jsx)("code",{children:"htmlFor"})," prop on FieldLabel to associate labels with inputs for screen reader users"]})]})]}),(0,a.jsxs)(i.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,a.jsxs)(s.CardHeader,{children:[(0,a.jsx)(d.CardTitle,{children:"Keyboard Navigation"}),(0,a.jsx)(r.CardDescription,{children:"Controls within fields are keyboard accessible"})]}),(0,a.jsx)(l.CardContent,{children:(0,a.jsx)(t.Typography,{variant:"body2",className:"block",children:"Field containers themselves do not have keyboard interaction. Focus management is handled by the form controls (inputs, checkboxes, etc.) contained within them. Ensure all form controls have proper focus states."})})]}),(0,a.jsxs)(i.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,a.jsxs)(s.CardHeader,{children:[(0,a.jsx)(d.CardTitle,{children:"ARIA Attributes"}),(0,a.jsx)(r.CardDescription,{children:"Additional accessibility attributes supported"})]}),(0,a.jsxs)(l.CardContent,{children:[(0,a.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:["• ",(0,a.jsx)("code",{children:"data-orientation"})," on Field indicates the layout direction"]}),(0,a.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:["• ",(0,a.jsx)("code",{children:"data-slot"})," attributes are added to all components for testing and styling"]}),(0,a.jsxs)(t.Typography,{variant:"body2",className:"block",children:["• Pass ",(0,a.jsx)("code",{children:"aria-labelledby"})," and ",(0,a.jsx)("code",{children:"aria-describedby"})," to form controls for additional associations"]})]})]})]})]}),(0,a.jsx)(p.PageNavigation,{previous:{title:"Label",href:"/components/label"},next:{title:"Form",href:"/components/form"}})]})}e.s(["default",()=>y])}]);