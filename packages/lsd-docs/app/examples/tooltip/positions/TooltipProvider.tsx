'use client';

import { TooltipProvider as BaseTooltipProvider } from '@nipsys/shadcn-lsd';
import type * as React from 'react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

function TooltipProvider({ children, ...props }: React.ComponentProps<typeof BaseTooltipProvider>) {
  useSendThemeToIframes();

  return <BaseTooltipProvider {...props}>{children}</BaseTooltipProvider>;
}

export { TooltipProvider };
