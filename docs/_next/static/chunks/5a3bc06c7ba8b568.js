(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,86409,e=>{"use strict";var r=e.i(58640);e.s(["Input",()=>r.I])},64563,e=>{"use strict";var r=e.i(2582);e.i(82419);var i=e.i(76296),l=e.i(90305),s=e.i(62634),t=e.i(8926),a=e.i(74868),d=e.i(4675),n=e.i(82414),o=e.i(46023),m=e.i(82868),u=e.i(23247),c=e.i(86409),h=e.i(86900);function p(){let[e,p]=(0,h.useState)([]);return(0,r.jsxs)(i.Card,{className:"w-full max-w-md",children:[(0,r.jsxs)(t.CardHeader,{children:[(0,r.jsx)(a.CardTitle,{children:"Field Error Example"}),(0,r.jsx)(s.CardDescription,{children:"Demonstrates FieldError with validation messages"})]}),(0,r.jsx)(l.CardContent,{children:(0,r.jsxs)(m.FieldGroup,{children:[(0,r.jsxs)(d.Field,{children:[(0,r.jsx)(u.FieldLabel,{htmlFor:"email",children:"Email Address"}),(0,r.jsxs)(n.FieldContent,{children:[(0,r.jsx)(c.Input,{id:"email",type:"email",placeholder:"Enter your email",onChange:e=>{var r;let i;return r=e.target.value,i=[],void(r?r.includes("@")?r.length<5&&i.push("Email must be at least 5 characters"):i.push("Email must include @ symbol"):i.push("Email is required"),p(i))}}),(0,r.jsx)(o.FieldError,{errors:e,className:"mt-1"})]})]}),(0,r.jsx)(o.FieldError,{className:"mt-2",children:"Static error message example"})]})})]})}let E=`import {
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
}`;e.s(["CODE",0,E,"default",()=>p])}]);