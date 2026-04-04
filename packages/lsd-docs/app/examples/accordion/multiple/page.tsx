'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Typography,
} from '@nipsys/shadcn-lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Typography,
} from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) w-full">
      <Typography variant="label1">Multiple Items Open</Typography>
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
          <AccordionContent>
            Yes! Set type="multiple" to allow multiple items to be open at once.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is this controlled?</AccordionTrigger>
          <AccordionContent>
            Use the value and onValueChange props for controlled behavior.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I customise it?</AccordionTrigger>
          <AccordionContent>
            Yes! You can style it with className or pass your own components.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}`;

export function AccordionMultipleExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) w-full">
      <Typography variant="label1">Multiple Items Open</Typography>
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
          <AccordionContent>
            Yes! Set type="multiple" to allow multiple items to be open at once.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is this controlled?</AccordionTrigger>
          <AccordionContent>
            Use the value and onValueChange props for controlled behavior.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I customise it?</AccordionTrigger>
          <AccordionContent>
            Yes! You can style it with className or pass your own components.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default function Multiple() {
  return <AccordionMultipleExample />;
}
