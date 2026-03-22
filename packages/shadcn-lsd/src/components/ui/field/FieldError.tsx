import * as React from 'react';

import { cn } from '@/lib/utils';
import type { FieldErrorProps } from './types';

const FieldError = React.forwardRef<HTMLDivElement, FieldErrorProps>(
  ({ children, errors, className, ...props }, ref) => {
    const errorBody = React.useMemo(() => {
      if (children) {
        return children;
      }

      if (!errors || errors.length === 0) {
        return null;
      }

      const errorMessages = errors
        .flatMap(error => {
          if (typeof error === 'string') {
            return error;
          }
          if (error?.message) {
            return error.message;
          }
          return null;
        })
        .filter((message): message is string => message !== null);

      const uniqueMessages = Array.from(new Set(errorMessages));

      return uniqueMessages.length === 1
        ? uniqueMessages[0]
        : uniqueMessages.map(message => (
            <div key={message} className="lsd:mb-1 last:lsd:mb-0">
              • {message}
            </div>
          ));
    }, [children, errors]);

    if (!errorBody) {
      return null;
    }

    return (
      <div
        ref={ref}
        data-slot="field-error"
        role="alert"
        className={cn('lsd:text-sm lsd:font-normal lsd:text-lsd-destructive-text', className)}
        {...props}
      >
        {errorBody}
      </div>
    );
  }
);

FieldError.displayName = 'FieldError';

export { FieldError };
