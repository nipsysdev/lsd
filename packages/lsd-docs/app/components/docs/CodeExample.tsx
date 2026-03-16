'use client';

import { Button, Typography } from '@nipsys/shadcn-lsd';
import { ClipboardIcon } from '@phosphor-icons/react';
import { toast } from 'sonner';

interface CodeExampleProps {
  code: string;
}

export function CodeExample({ code }: CodeExampleProps) {
  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      toast.success('Code successfully copied to clipboard');
    } catch (err) {
      toast.error('Failed to copy code to clipboard');
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="flex justify-between size-full relative group">
      <Typography variant="subtitle3" className="my-auto">
        <pre>
          <code>{code}</code>
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
}
