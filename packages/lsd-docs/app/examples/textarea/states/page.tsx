'use client';

import { Textarea } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'md';

/**
 * @docSection state
 */
export const CODE = `import { Textarea } from '@nipsys/lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Textarea 
        placeholder="Normal textarea"
        defaultValue="This is a normal textarea in its default state."
      />
      <Textarea 
        placeholder="Disabled textarea"
        defaultValue="This textarea is disabled and cannot be edited."
        disabled
      />
      <Textarea 
        placeholder="Error state textarea"
        defaultValue="This textarea has an error state."
        aria-invalid="true"
      />
      <Textarea 
        placeholder="Readonly textarea"
        defaultValue="This textarea is readonly but can be focused."
        readOnly
      />
    </div>
  );
}`;

export function TextareaStatesExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Textarea
        placeholder="Normal textarea"
        defaultValue="This is a normal textarea in its default state."
      />
      <Textarea
        placeholder="Disabled textarea"
        defaultValue="This textarea is disabled and cannot be edited."
        disabled
      />
      <Textarea
        placeholder="Error state textarea"
        defaultValue="This textarea has an error state."
        aria-invalid="true"
      />
      <Textarea
        placeholder="Readonly textarea"
        defaultValue="This textarea is readonly but can be focused."
        readOnly
      />
    </div>
  );
}

export default function States() {
  return <TextareaStatesExample />;
}
