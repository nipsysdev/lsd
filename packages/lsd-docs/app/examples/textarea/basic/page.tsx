'use client';

import { Textarea } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Textarea } from '@nipsys/lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Textarea placeholder="Enter your message here..." />
      <Textarea 
        placeholder="This is a textarea with some initial content"
        defaultValue="This is some initial text content that appears when the component loads."
      />
      <Textarea 
        placeholder="Textarea with rows attribute"
        rows={6}
      />
    </div>
  );
}`;

export function TextareaBasicExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Textarea placeholder="Enter your message here..." />
      <Textarea
        placeholder="This is a textarea with some initial content"
        defaultValue="This is some initial text content that appears when the component loads."
      />
      <Textarea placeholder="Textarea with rows attribute" rows={6} />
    </div>
  );
}

export default function Basic() {
  return <TextareaBasicExample />;
}
