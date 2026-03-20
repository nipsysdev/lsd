'use client';

import { TooltipProvider as BaseTooltipProvider } from '@nipsys/shadcn-lsd';
import type * as React from 'react';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

function TooltipProvider({ children, ...props }: React.ComponentProps<typeof BaseTooltipProvider>) {
  useInIframeThemeSync();

  return <BaseTooltipProvider {...props}>{children}</BaseTooltipProvider>;
}

export { TooltipProvider };
