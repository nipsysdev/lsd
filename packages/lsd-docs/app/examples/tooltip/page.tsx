'use client';

import { Button, Tooltip, TooltipContent, TooltipTrigger, Typography } from '@nipsys/lsd';
import { TooltipProvider } from './TooltipProvider';

export const CODE = `import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, Typography } from '@nipsys/lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outlined">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>
            <Typography variant="body2">This is a tooltip</Typography>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}`;

export function TooltipExample() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outlined">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>
            <Typography variant="body2">This is a tooltip</Typography>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export default function TooltipPage() {
  return <TooltipExample />;
}
