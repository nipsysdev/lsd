import type * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

import { Command } from './Command';

export function CommandDialog({
  title = 'Command Palette',
  description = 'Search for a command to run...',
  children,
  className,
  showCloseButton = false,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string;
  description?: string;
  className?: string;
  showCloseButton?: boolean;
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="lsd:sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn(
          // Overflow
          'lsd:overflow-hidden',
          // Spacing
          'lsd:p-0',
          className
        )}
        showCloseButton={showCloseButton}
      >
        <Command
          className={cn(
            // Pseudo-selectors & ARIA - Colors
            'lsd:**:[[cmdk-group-heading]]:text-lsd-text-primary',
            // Pseudo-selectors & ARIA - Spacing
            'lsd:**:[[cmdk-group-heading]]:px-(--lsd-spacing-smaller)',
            'lsd:**:[[cmdk-group]]:px-(--lsd-spacing-smaller)',
            'lsd:**:[[cmdk-item]]:px-(--lsd-spacing-smaller)',
            'lsd:**:[[cmdk-item]]:py-(--lsd-spacing-small)',
            // Pseudo-selectors & ARIA - Typography
            'lsd:**:[[cmdk-group-heading]]:font-medium',
            // Pseudo-selectors & ARIA - Spacing & Sizing
            'lsd:[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0',
            'lsd:[&_[cmdk-input-wrapper]_svg]:h-(--lsd-spacing-large)',
            'lsd:[&_[cmdk-input-wrapper]_svg]:w-(--lsd-spacing-large)',
            'lsd:[&_[cmdk-item]_svg]:h-(--lsd-spacing-large)',
            'lsd:[&_[cmdk-item]_svg]:w-(--lsd-spacing-large)',
            // Pseudo-selectors & ARIA - Sizing
            'lsd:**:[[cmdk-input]]:h-12'
          )}
        >
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
}
