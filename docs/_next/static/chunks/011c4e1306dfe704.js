(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,76292,e=>{"use strict";var r=e.i(98134);e.i(26940);var i=e.i(46700),l=e.i(57845),s=e.i(80427),t=e.i(64439),a=e.i(93261),d=e.i(14499),o=e.i(9791),n=e.i(68163),m=e.i(88617),u=e.i(21496),c=e.i(23155),h=e.i(75201);function E(){let[e,E]=(0,h.useState)([]);return(0,r.jsxs)(i.Card,{className:"w-full max-w-md",children:[(0,r.jsxs)(t.CardHeader,{children:[(0,r.jsx)(a.CardTitle,{children:"Field Error Example"}),(0,r.jsx)(s.CardDescription,{children:"Demonstrates FieldError with validation messages"})]}),(0,r.jsx)(l.CardContent,{children:(0,r.jsxs)(m.FieldGroup,{children:[(0,r.jsxs)(d.Field,{children:[(0,r.jsx)(u.FieldLabel,{htmlFor:"email",children:"Email Address"}),(0,r.jsxs)(o.FieldContent,{children:[(0,r.jsx)(c.Input,{id:"email",type:"email",placeholder:"Enter your email",onChange:e=>{var r;let i;return r=e.target.value,i=[],void(r?r.includes("@")?r.length<5&&i.push("Email must be at least 5 characters"):i.push("Email must include @ symbol"):i.push("Email is required"),E(i))}}),(0,r.jsx)(n.FieldError,{errors:e,className:"mt-1"})]})]}),(0,r.jsx)(n.FieldError,{className:"mt-2",children:"Static error message example"})]})})]})}let p=`import {
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
}`;e.s(["CODE",0,p,"default",()=>E])}]);