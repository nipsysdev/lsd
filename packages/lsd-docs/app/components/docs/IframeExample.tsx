'use client';

import { forwardRef } from 'react';

interface IframeExampleProps {
  src: string;
  title: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const IframeExample = forwardRef<HTMLIFrameElement, IframeExampleProps>(
  ({ src, title, size = 'md', className, ...props }, ref) => {
    const heightClass = {
      sm: 'min-h-[128px]',
      md: 'min-h-[256px]',
      lg: 'min-h-[450px]',
      xl: 'min-h-[600px]',
    }[size];

    return (
      <iframe
        ref={ref}
        src={src}
        className={`${heightClass} w-full overflow-hidden`}
        title={title}
        {...props}
      />
    );
  }
);

IframeExample.displayName = 'IframeExample';
