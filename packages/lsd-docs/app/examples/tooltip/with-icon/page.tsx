'use client';

import { Button, Tooltip, TooltipContent, TooltipTrigger, Typography } from '@nipsys/lsd';
import { InfoIcon } from '@phosphor-icons/react';
import { TooltipProvider } from './TooltipProvider';

export const SIZE = 'md';

/**
 * @docSection feature
 */
export const CODE = `import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, Typography } from '@nipsys/lsd';
import { InfoIcon } from '@phosphor-icons/react';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="square-sm">
              <InfoIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <Typography variant="body2">Additional information</Typography>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}`;

export function TooltipWithIconExample() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="square-sm">
              <InfoIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <Typography variant="body2">Additional information</Typography>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export default function WithIcon() {
  return <TooltipWithIconExample />;
}
