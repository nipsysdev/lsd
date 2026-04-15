'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Typography,
} from '@nipsys/lsd';
import { ClipboardIcon, CodeIcon } from '@phosphor-icons/react';
import { toast } from 'sonner';

interface CodeExampleProps {
  useAccordion?: boolean;
  code: string;
}

export function CodeExample({ code, useAccordion = true }: CodeExampleProps) {
  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      toast.success('Code successfully copied to clipboard');
    } catch (err) {
      toast.error('Failed to copy code to clipboard');
      console.error('Failed to copy code:', err);
    }
  };

  const codeExample = (
    <div className="flex justify-between size-full relative group">
      <Typography variant="subtitle3" className="my-auto">
        <pre>
          <code className="whitespace-break-spaces">{code}</code>
        </pre>
      </Typography>

      <Button
        onClick={copyCode}
        variant="outlined"
        size="square-md"
        className="opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Copy code"
      >
        <ClipboardIcon className="size-4" weight="duotone" />
      </Button>
    </div>
  );

  return useAccordion ? (
    <Accordion type="single" collapsible>
      <AccordionItem value="code">
        <AccordionTrigger>
          <div className="flex items-center justify-center gap-x-(--lsd-spacing-base)">
            <CodeIcon weight="duotone" className="size-5" /> View code
          </div>
        </AccordionTrigger>
        <AccordionContent>{codeExample}</AccordionContent>
      </AccordionItem>
    </Accordion>
  ) : (
    codeExample
  );
}
