'use client';

import { Typography } from '@nipsys/lsd';

interface CodeBlockProps {
  children: string | string[];
}

export function CodeBlock({ children }: CodeBlockProps) {
  const lines =
    typeof children === 'string'
      ? children.split('\n').filter(line => line.trim() !== '')
      : children.filter(line => line.trim() !== '');

  return (
    <div className="size-full">
      <Typography variant="body1" className="my-auto">
        <div className="flex flex-col">
          {lines.map(line => (
            <div key={line} className="font-mono py-0.5 leading-tight whitespace-pre">
              {line}
            </div>
          ))}
        </div>
      </Typography>
    </div>
  );
}
