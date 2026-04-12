'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Field,
  FieldContent,
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
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Field Error Example</CardTitle>
        <CardDescription>Demonstrates FieldError with validation messages</CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="email">Email Address</FieldLabel>
            <FieldContent>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                onChange={e => validateEmail(e.target.value)}
              />
              <FieldError errors={errors} className="mt-1" />
            </FieldContent>
          </Field>
          <FieldError className="mt-2">Static error message example</FieldError>
        </FieldGroup>
      </CardContent>
    </Card>
  );
}

export const CODE = `import {
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
}`;
