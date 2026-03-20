'use client';

import React, { forwardRef } from 'react';

interface IframeExampleProps {
  src: string;
  title: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const IframeExample = forwardRef<HTMLIFrameElement, IframeExampleProps>(
  ({ src, title, size = 'md', className, ...props }, ref) => {
    const heightClass = {
      sm: 'min-h-[128px]',
      md: 'min-h-[256px]',
      lg: 'min-h-[450px]',
    }[size];

    return (
      <div className={`${heightClass} w-full overflow-hidden`}>
        <iframe ref={ref} src={src} className="size-full" title={title} {...props} />
      </div>
    );
  }
);

IframeExample.displayName = 'IframeExample';
