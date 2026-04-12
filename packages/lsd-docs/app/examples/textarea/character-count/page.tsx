'use client';

import { Textarea, Typography } from '@nipsys/shadcn-lsd';
import { useState } from 'react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { useState } from 'react';
import { Textarea, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  const [value, setValue] = useState('');
  const maxLength = 200;
  const remaining = maxLength - value.length;

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <div>
        <Textarea
          placeholder="Type your message here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength={maxLength}
          className={remaining <= 20 ? 'lsd:aria-invalid:border-lsd-destructive lsd:aria-invalid:ring-lsd-destructive/20' : ''}
          aria-invalid={remaining <= 20}
        />
        <Typography variant="label1" className={\`mt-(--lsd-spacing-smaller) block text-right \${remaining <= 20 ? 'text-destructive' : 'text-lsd-text-secondary'}\`}>
          {remaining} characters remaining
        </Typography>
      </div>

      <div>
        <Textarea
          placeholder="Textarea with character count display"
          defaultValue="This textarea shows the current character count."
        />
        <Typography variant="label1" className="mt-(--lsd-spacing-smaller) block text-right text-lsd-text-secondary">
          52 / 500 characters
        </Typography>
      </div>
    </div>
  );
}`;

export function TextareaCharacterCountExample() {
  const [value, setValue] = useState('');
  const maxLength = 200;
  const remaining = maxLength - value.length;

  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <div>
        <Textarea
          placeholder="Type your message here..."
          value={value}
          onChange={e => setValue(e.target.value)}
          maxLength={maxLength}
          className={
            remaining <= 20
              ? 'lsd:aria-invalid:border-lsd-destructive lsd:aria-invalid:ring-lsd-destructive/20'
              : ''
          }
          aria-invalid={remaining <= 20}
        />
        <Typography
          variant="label1"
          className={`mt-(--lsd-spacing-smaller) block text-right ${remaining <= 20 ? 'text-destructive' : 'text-lsd-text-secondary'}`}
        >
          {remaining} characters remaining
        </Typography>
      </div>

      <div>
        <Textarea
          placeholder="Textarea with character count display"
          defaultValue="This textarea shows the current character count."
        />
        <Typography
          variant="label1"
          className="mt-(--lsd-spacing-smaller) block text-right text-lsd-text-secondary"
        >
          52 / 500 characters
        </Typography>
      </div>
    </div>
  );
}

export default function CharacterCount() {
  return <TextareaCharacterCountExample />;
}
